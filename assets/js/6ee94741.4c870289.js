"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[29900],{

/***/ 95459
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_cyber_security_18_privacy_osint_md_6ee_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-cyber-security-18-privacy-osint-md-6ee.json
const site_docs_courses_cyber_security_18_privacy_osint_md_6ee_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/cyber-security/18-privacy-osint","title":"Chapter 18: Digital Privacy, Anonymity & OSINT","description":"Prereq: Chapters 3 (Network Security), 5 (Web Security), 2 (Cryptography); familiarity with TCP/IP, HTTP, DNS, and basic encryption concepts.","source":"@site/docs/courses/cyber-security/18-privacy-osint.md","sourceDirName":"courses/cyber-security","slug":"/cyber-security/18-privacy-osint","permalink":"/ai-engineering-journey/cyber-security/18-privacy-osint","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"id":"18-privacy-osint","slug":"/cyber-security/18-privacy-osint","title":"Chapter 18: Digital Privacy, Anonymity & OSINT","sidebar_label":"Chapter 18: Digital Privacy, Anonymity & OSINT","sidebar_position":17},"sidebar":"coursesSidebar","previous":{"title":"Chapter 17: AI Security, Adversarial Machine Learning & Deepfakes","permalink":"/ai-engineering-journey/cyber-security/17-ai-security-adversarial-ml"},"next":{"title":"Chapter 19: Blockchain, Smart Contract & DeFi Security","permalink":"/ai-engineering-journey/cyber-security/19-blockchain-defi-security"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/cyber-security/18-privacy-osint.md


const frontMatter = {
	id: '18-privacy-osint',
	slug: '/cyber-security/18-privacy-osint',
	title: 'Chapter 18: Digital Privacy, Anonymity & OSINT',
	sidebar_label: 'Chapter 18: Digital Privacy, Anonymity & OSINT',
	sidebar_position: 17
};
const contentTitle = 'Chapter 18: Digital Privacy, Anonymity & OSINT';

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
  "value": "1. Digital Privacy Fundamentals",
  "id": "1-digital-privacy-fundamentals",
  "level": 2
}, {
  "value": "1.1 Threat Modeling for Privacy",
  "id": "11-threat-modeling-for-privacy",
  "level": 3
}, {
  "value": "1.2 Data Minimization",
  "id": "12-data-minimization",
  "level": 3
}, {
  "value": "1.3 Metadata",
  "id": "13-metadata",
  "level": 3
}, {
  "value": "1.4 Browser Fingerprinting",
  "id": "14-browser-fingerprinting",
  "level": 3
}, {
  "value": "TypeScript: Browser Fingerprint Simulator",
  "id": "typescript-browser-fingerprint-simulator",
  "level": 4
}, {
  "value": "2. Tor &amp; Onion Routing",
  "id": "2-tor--onion-routing",
  "level": 2
}, {
  "value": "2.1 Onion Routing Protocol",
  "id": "21-onion-routing-protocol",
  "level": 3
}, {
  "value": "2.2 Tor Hidden Services (.onion)",
  "id": "22-tor-hidden-services-onion",
  "level": 3
}, {
  "value": "2.3 Tor Browser vs Tor Daemon",
  "id": "23-tor-browser-vs-tor-daemon",
  "level": 3
}, {
  "value": "2.4 Bridges &amp; Pluggable Transports",
  "id": "24-bridges--pluggable-transports",
  "level": 3
}, {
  "value": "Tor Bridge Setup Guide",
  "id": "tor-bridge-setup-guide",
  "level": 4
}, {
  "value": "Snowflake — Decentralized Censorship Circumvention",
  "id": "snowflake--decentralized-censorship-circumvention",
  "level": 4
}, {
  "value": "3. Tor Relay Operations",
  "id": "3-tor-relay-operations",
  "level": 2
}, {
  "value": "3.1 Relay Types",
  "id": "31-relay-types",
  "level": 3
}, {
  "value": "3.2 Bandwidth Contributions",
  "id": "32-bandwidth-contributions",
  "level": 3
}, {
  "value": "3.3 Directory Authorities",
  "id": "33-directory-authorities",
  "level": 3
}, {
  "value": "4. I2P &amp; Garlic Routing",
  "id": "4-i2p--garlic-routing",
  "level": 2
}, {
  "value": "4.1 Garlic Routing",
  "id": "41-garlic-routing",
  "level": 3
}, {
  "value": "4.2 I2P vs Tor Comparison",
  "id": "42-i2p-vs-tor-comparison",
  "level": 3
}, {
  "value": "4.3 Eepsites",
  "id": "43-eepsites",
  "level": 3
}, {
  "value": "4.4 Tunnels",
  "id": "44-tunnels",
  "level": 3
}, {
  "value": "5. VPN Protocols &amp; Leak Testing",
  "id": "5-vpn-protocols--leak-testing",
  "level": 2
}, {
  "value": "5.1 Protocol Comparison",
  "id": "51-protocol-comparison",
  "level": 3
}, {
  "value": "5.2 Logging Policies",
  "id": "52-logging-policies",
  "level": 3
}, {
  "value": "5.3 Kill Switch",
  "id": "53-kill-switch",
  "level": 3
}, {
  "value": "5.4 DNS Leak Testing",
  "id": "54-dns-leak-testing",
  "level": 3
}, {
  "value": "TypeScript: DNS Leak Tester",
  "id": "typescript-dns-leak-tester",
  "level": 4
}, {
  "value": "6. OPSEC for Activists &amp; Journalists",
  "id": "6-opsec-for-activists--journalists",
  "level": 2
}, {
  "value": "6.1 The OPSEC Process",
  "id": "61-the-opsec-process",
  "level": 3
}, {
  "value": "6.2 Compartmentalization",
  "id": "62-compartmentalization",
  "level": 3
}, {
  "value": "6.3 Cover Identities",
  "id": "63-cover-identities",
  "level": 3
}, {
  "value": "6.4 Burner Communications",
  "id": "64-burner-communications",
  "level": 3
}, {
  "value": "6.5 OPSEC Checklist for Journalists",
  "id": "65-opsec-checklist-for-journalists",
  "level": 3
}, {
  "value": "7. OSINT Fundamentals",
  "id": "7-osint-fundamentals",
  "level": 2
}, {
  "value": "7.1 The OSINT Intelligence Cycle",
  "id": "71-the-osint-intelligence-cycle",
  "level": 3
}, {
  "value": "7.2 Google Dorking",
  "id": "72-google-dorking",
  "level": 3
}, {
  "value": "7.3 Shodan &amp; Censys",
  "id": "73-shodan--censys",
  "level": 3
}, {
  "value": "7.4 theHarvester, Maltego &amp; Recon-ng",
  "id": "74-theharvester-maltego--recon-ng",
  "level": 3
}, {
  "value": "7.5 TypeScript: OSINT Data Aggregator",
  "id": "75-typescript-osint-data-aggregator",
  "level": 3
}, {
  "value": "8. Social Media OSINT",
  "id": "8-social-media-osint",
  "level": 2
}, {
  "value": "8.1 Twitter API Scraping",
  "id": "81-twitter-api-scraping",
  "level": 3
}, {
  "value": "8.2 LinkedIn Enumeration",
  "id": "82-linkedin-enumeration",
  "level": 3
}, {
  "value": "8.3 Facebook Graph Search",
  "id": "83-facebook-graph-search",
  "level": 3
}, {
  "value": "8.4 Instagram Metadata",
  "id": "84-instagram-metadata",
  "level": 3
}, {
  "value": "9. Dark Web &amp; Hidden Services",
  "id": "9-dark-web--hidden-services",
  "level": 2
}, {
  "value": "9.1 Tor Hidden Services in Practice",
  "id": "91-tor-hidden-services-in-practice",
  "level": 3
}, {
  "value": "9.2 Ahmia — Search Engine for Hidden Services",
  "id": "92-ahmia--search-engine-for-hidden-services",
  "level": 3
}, {
  "value": "9.3 Illicit Market Analysis",
  "id": "93-illicit-market-analysis",
  "level": 3
}, {
  "value": "10. Email &amp; Communication Security",
  "id": "10-email--communication-security",
  "level": 2
}, {
  "value": "10.1 PGP/GPG Encryption",
  "id": "101-pgpgpg-encryption",
  "level": 3
}, {
  "value": "GPG Key Generation and Encryption Walkthrough",
  "id": "gpg-key-generation-and-encryption-walkthrough",
  "level": 4
}, {
  "value": "10.2 Signal Protocol",
  "id": "102-signal-protocol",
  "level": 3
}, {
  "value": "10.3 OMEMO",
  "id": "103-omemo",
  "level": 3
}, {
  "value": "10.4 Email Header Analysis",
  "id": "104-email-header-analysis",
  "level": 3
}, {
  "value": "TypeScript: Email Header Analyzer",
  "id": "typescript-email-header-analyzer",
  "level": 4
}, {
  "value": "11. Metadata Stripping",
  "id": "11-metadata-stripping",
  "level": 2
}, {
  "value": "11.1 EXIF Removal (Images)",
  "id": "111-exif-removal-images",
  "level": 3
}, {
  "value": "11.2 Document Metadata Removal (MAT)",
  "id": "112-document-metadata-removal-mat",
  "level": 3
}, {
  "value": "11.3 PDF Sanitization",
  "id": "113-pdf-sanitization",
  "level": 3
}, {
  "value": "TypeScript: EXIF Data Extractor and Anonymizer",
  "id": "typescript-exif-data-extractor-and-anonymizer",
  "level": 4
}, {
  "value": "12. OSINT Investigation Case Study",
  "id": "12-osint-investigation-case-study",
  "level": 2
}, {
  "value": "Phase 1: Email Header Analysis",
  "id": "phase-1-email-header-analysis",
  "level": 3
}, {
  "value": "Phase 2: Domain OSINT",
  "id": "phase-2-domain-osint",
  "level": 3
}, {
  "value": "Phase 3: Email Address Tracing",
  "id": "phase-3-email-address-tracing",
  "level": 3
}, {
  "value": "Phase 4: Infrastructure Mapping",
  "id": "phase-4-infrastructure-mapping",
  "level": 3
}, {
  "value": "Phase 5: Indicators of Compromise (IOCs)",
  "id": "phase-5-indicators-of-compromise-iocs",
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
  "value": "Review (Fundamental)",
  "id": "review-fundamental",
  "level": 3
}, {
  "value": "Application (Hands-On)",
  "id": "application-hands-on",
  "level": 3
}, {
  "value": "Challenge (Advanced)",
  "id": "challenge-advanced",
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
        id: "chapter-18-digital-privacy-anonymity--osint",
        children: "Chapter 18: Digital Privacy, Anonymity & OSINT"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prereq:"
        }), " Chapters 3 (Network Security), 5 (Web Security), 2 (Cryptography); familiarity with TCP/IP, HTTP, DNS, and basic encryption concepts.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " Capstone / applied security project.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Target Audience:"
        }), " Security engineers, privacy advocates, SOC analysts, OSINT researchers, journalists."]
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
        href: "../../assets/images/lessons/cyber-security/18-privacy-osint/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cyber-security/18-privacy-osint/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/cyber-security/18-privacy-osint/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cyber-security/18-privacy-osint/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/cyber-security/18-privacy-osint/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cyber-security/18-privacy-osint/visual-explanation.png",
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
        children: "Apply threat modeling for privacy and implement data minimization strategies in digital communications."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the Tor onion routing protocol, deploy hidden services, and configure bridges/pluggable transports."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Differentiate Tor relay types (guard, middle, exit) and understand the legal and operational considerations of running relays."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare I2P garlic routing with Tor onion routing and navigate eepsites via the I2P network."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate VPN protocols (OpenVPN, WireGuard, IPSec), interpret logging policies, and perform DNS leak testing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply operational security (OPSEC) principles including compartmentalization, cover identities, and burner communications."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute passive OSINT reconnaissance using Shodan, Google dorking, theHarvester, Maltego, and Recon-ng."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Collect and analyze social media intelligence from Twitter, LinkedIn, Facebook, and Instagram."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Navigate the dark web safely via Tor hidden services and analyze illicit market structures."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Secure email communications with PGP/GPG, Signal protocol, and email header analysis."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strip metadata from images, documents, and PDFs using industry-standard tools."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Digital Privacy Fundamentals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threat modeling, data minimization, browser fingerprinting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every online action leaks data — understand what and how"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tor & Onion Routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circuit-based anonymity, hidden services, bridges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The gold standard for anonymous communication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tor Relay Operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guard, middle, exit relays; bandwidth contributions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Running relays strengthens the network for everyone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I2P & Garlic Routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Garlic messages, eepsites, tunnels-to-tunnels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A different anonymity model optimized for hidden services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VPN Protocols & Leak Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenVPN, WireGuard, IPSec; DNS leaks, kill switches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPNs are not anonymity tools but protect against local adversaries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPSEC for Activists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compartmentalization, cover identities, burner comms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operational security is the difference between safety and exposure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OSINT Fundamentals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Passive recon, Shodan, Google dorking, Maltego"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open-source intelligence gathers publicly available data at scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Social Media OSINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Twitter, LinkedIn, Facebook, Instagram scraping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Social platforms are treasure troves of PII and relationships"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dark Web & Hidden Services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ahmia, secure browsing, illicit markets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understanding the dark web is critical for threat intelligence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Email & Communication Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PGP/GPG, Signal, OMEMO, header analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email is the most intercepted communication channel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Metadata Stripping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXIF, document metadata, PDF sanitization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metadata can deanonymize and expose sensitive context"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-digital-privacy-fundamentals",
      children: "1. Digital Privacy Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Digital privacy is the ability to control what personal information is collected, how it is used, and who has access to it. Unlike security — which is about protecting assets — privacy is about controlling the flow of information about yourself."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-threat-modeling-for-privacy",
      children: "1.1 Threat Modeling for Privacy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Privacy threat modeling asks: ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Who is my adversary? What can they observe? What do I need to protect?"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Adversary Profile"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Capabilities"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Threat Level"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Mass surveillance"
            }), " (ISP, government)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sees all metadata, traffic patterns, DNS queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Passive, low-effort dragnet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Targeted surveillance"
            }), " (LEO, APT)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can deploy malware, intercept hardware, legal compulsion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-effort, high-risk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Corporate tracking"
            }), " (ad networks, data brokers)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-site tracking, browser fingerprinting, purchase data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Commercial, persistent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Social adversary"
            }), " (stalker, employer)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access to social media, public records, physical proximity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-tech but personal"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Privacy risk equation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Privacy Risk = (Data Sensitivity × Data Volume × Adversary Capability) / (Privacy Controls × OPSEC Discipline)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-data-minimization",
      children: "1.2 Data Minimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Data minimization is the principle of collecting and sharing only the minimum data necessary. Strategies include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pseudonymity:"
        }), " Use different usernames, emails, and identities across services."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Selective disclosure:"
        }), " Share only required fields on forms."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ephemeral communications:"
        }), " Use disappearing messages, temp emails, self-destructing files."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Local-first processing:"
        }), " Process data on-device rather than in the cloud."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-metadata",
      children: "1.3 Metadata"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Metadata is \"data about data\" and is often more revealing than content itself:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metadata Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Reveals"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Email headers (To, From, Date, Subject)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Communication graph, timestamps, topic summary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Email routing headers (Received)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server topology, IP addresses, software versions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image EXIF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPS coordinates, device model, timestamp, camera settings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Document metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Author name, organization, editing time, revision history"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File system metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creation/modification times, file paths, volume serial numbers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network flow data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source/destination IPs, protocol, packet size, duration"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phone metadata is particularly dangerous."
      }), " The NSA's analysis of \"hop\" relationships showed that analysis of ", (0,jsx_runtime.jsx)(_components.em, {
        children: "who called whom"
      }), " (not what was said) can reconstruct social networks, identify command structures, and predict future actions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-browser-fingerprinting",
      children: "1.4 Browser Fingerprinting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Browser fingerprinting identifies users by collecting device and browser characteristics without cookies. Modern fingerprints aggregate 200+ features."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Browser[\"Browser Fingerprint Components\"]\n        Canvas[\"Canvas Fingerprint<br/>2D rendering differences\"]\n        WebGL[\"WebGL Fingerprint<br/>GPU model, renderer, vendor\"]\n        Fonts[\"Font Detection<br/>Installed fonts enumeration\"]\n        Audio[\"AudioContext<br/>Audio stack characteristics\"]\n        Screen[\"Screen Properties<br/>Resolution, color depth\"]\n        Time[\"Time Zone / Locale<br/>Language, region settings\"]\n        Plugins[\"Plugin Enumeration<br/>Installed extensions\"]\n        Headers[\"HTTP Headers<br/>Accept, User-Agent, Sec-CH\"]\n    end\n\n    subgraph Stable[\"Stable Identifiers\"]\n        Canvas --> Hash[\"Stable Hash<br/>~33 bit entropy\"]\n        WebGL --> Hash2[\"~18 bit entropy\"]\n        Fonts --> Hash3[\"~13 bit entropy\"]\n    end\n\n    Hash --> Combined[\"Combined Fingerprint<br/>~200+ bit total entropy\"]\n    Hash2 --> Combined\n    Hash3 --> Combined\n\n    Combined --> Match[\"Unique Visitor ID<br/>(stable across sessions)\"]\n\n    style Combined fill:#e3f2fd,stroke:#1565c0\n    style Match fill:#fff3e0,stroke:#e65100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Figure: Browser fingerprinting components and their contribution to the combined fingerprint hash."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Canvas fingerprinting:"
      }), " The browser draws a hidden text or shape onto an HTML5 canvas. The pixel-level rendering varies between GPU drivers, OS rendering engines, and anti-aliasing algorithms, producing a unique hash."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "WebGL fingerprinting:"
      }), " Queries the GPU model, vendor string, renderer, and supported extensions. Even browsers in private/incognito mode expose this data."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Font detection:"
      }), " Uses font metric measurement — drawing a string in different fonts and checking which ones render at different widths — to enumerate the ~100–300 fonts installed on the system."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "typescript-browser-fingerprint-simulator",
      children: "TypeScript: Browser Fingerprint Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * Browser Fingerprint Simulator\n * Collects canvas, WebGL, font, and system characteristics\n * to demonstrate how browsers build unique identifiers.\n */\n\ninterface BrowserFingerprint {\n  canvas: CanvasFingerprint | null;\n  webgl: WebGLFingerprint | null;\n  fonts: string[];\n  screen: ScreenCharacteristics;\n  timezone: string;\n  language: string;\n  platform: string;\n  userAgent: string;\n  combinedHash: string;\n}\n\ninterface CanvasFingerprint {\n  textHash: string;\n  shapeHash: string;\n  colourHash: string;\n}\n\ninterface WebGLFingerprint {\n  vendor: string;\n  renderer: string;\n  supportedExtensions: string[];\n  maxTextureSize: number;\n  shadingLanguageVersion: string;\n}\n\ninterface ScreenCharacteristics {\n  width: number;\n  height: number;\n  colorDepth: number;\n  pixelRatio: number;\n  availWidth: number;\n  availHeight: number;\n}\n\nclass FingerprintCollector {\n  /**\n   * Simulate canvas fingerprinting by generating rendering data.\n   * In a real browser, this uses <canvas> getImageData() to read pixels.\n   */\n  collectCanvasFingerprint(): CanvasFingerprint {\n    // Simulated rendering differences based on GPU/OS\n    const renderingNoise = (): number => Math.random() * 0.05;\n\n    // Simulate rendering \"Hello, Privacy!\" in 12px Arial at (10, 20)\n    const textPixels = Array.from({ length: 120 }, () =>\n      Math.round(128 + renderingNoise() * 256)\n    );\n\n    // Simulate rendering a coloured rectangle\n    const shapePixels = Array.from({ length: 80 }, () =>\n      Math.round(200 + renderingNoise() * 256)\n    );\n\n    // Simulate colour gradient rendering\n    const colourPixels = Array.from({ length: 100 }, () =>\n      Math.round(100 + renderingNoise() * 256)\n    );\n\n    const toHex = (vals: number[]): string =>\n      vals.slice(0, 16).map(v => v.toString(16).padStart(2, '0')).join('');\n\n    return {\n      textHash: toHex(textPixels),\n      shapeHash: toHex(shapePixels),\n      colourHash: toHex(colourPixels),\n    };\n  }\n\n  /**\n   * Simulate WebGL fingerprinting by collecting GPU info.\n   */\n  collectWebGLFingerprint(): WebGLFingerprint {\n    const vendors = ['Google Inc.', 'Intel Inc.', 'NVIDIA Corporation', 'AMD', 'Apple Inc.', 'Qualcomm'];\n    const renderers = [\n      'ANGLE (Intel HD Graphics 620 Direct3D11 vs_5_0 ps_5_0)',\n      'Intel Iris Pro OpenGL Engine',\n      'GeForce RTX 3070/PCIe/SSE2',\n      'Mali-G78 MP14',\n      'Apple M1 GPU',\n    ];\n    const extPrefixes = ['WEBGL_', 'EXT_', 'OES_', 'GL_', 'WEBKIT_'];\n\n    const extensions: string[] = [];\n    for (let i = 0; i < 15 + Math.floor(Math.random() * 10); i++) {\n      const prefix = extPrefixes[Math.floor(Math.random() * extPrefixes.length)];\n      const name = `${prefix}${['compressed_texture_s3tc', 'depth_texture', 'float_blend', 'draw_buffers', 'shader_texture_lod', 'standard_derivatives', 'element_index_uint', 'texture_filter_anisotropic', 'disjoint_timer_query', 'frag_depth', 'packed_depth_stencil', 'texture_float', 'texture_half_float', 'vertex_array_object', 'instanced_arrays', 'blend_minmax', 'color_buffer_half_float', 'multiview', 'occlusion_query_boolean', 'debug_renderer_info'][Math.floor(Math.random() * 20)]}`;\n      extensions.push(name);\n    }\n\n    return {\n      vendor: vendors[Math.floor(Math.random() * vendors.length)],\n      renderer: renderers[Math.floor(Math.random() * renderers.length)],\n      supportedExtensions: [...new Set(extensions)].sort(),\n      maxTextureSize: [4096, 8192, 16384][Math.floor(Math.random() * 3)],\n      shadingLanguageVersion: 'WebGL GLSL ES 3.00 (OpenGL ES GLSL ES 3.0 Chromium)',\n    };\n  }\n\n  /**\n   * Simulate font enumeration using font metric measurement.\n   */\n  collectFonts(): string[] {\n    const allFonts: string[] = [\n      'Arial', 'Arial Black', 'Arial Narrow', 'Bahnschrift', 'Calibri',\n      'Cambria', 'Cambria Math', 'Candara', 'Comic Sans MS', 'Consolas',\n      'Constantia', 'Corbel', 'Courier New', 'Ebrima', 'Franklin Gothic Medium',\n      'Gabriola', 'Gadugi', 'Georgia', 'Helvetica', 'Impact',\n      'Ink Free', 'Javanese Text', 'Leelawadee UI', 'Lucida Console', 'Lucida Sans Unicode',\n      'Malgun Gothic', 'Microsoft Himalaya', 'Microsoft JhengHei', 'Microsoft Sans Serif', 'Microsoft Tai Le',\n      'Microsoft YaHei', 'Microsoft Yi Baiti', 'Mongolian Baiti', 'Myanmar Text', 'Nirmala UI',\n      'Palatino Linotype', 'Segoe MDL2 Assets', 'Segoe Print', 'Segoe Script', 'Segoe UI',\n      'Segoe UI Emoji', 'Segoe UI Historic', 'Segoe UI Symbol', 'SimSun', 'Sitka',\n      'Sylfaen', 'Symbol', 'Tahoma', 'Times New Roman', 'Trebuchet MS',\n      'Verdana', 'Webdings', 'Wingdings', 'Yu Gothic',\n    ];\n\n    // Filter to \"installed\" fonts (simulate ~70% coverage)\n    return allFonts.filter(() => Math.random() > 0.3);\n  }\n\n  /**\n   * Collect screen characteristics.\n   */\n  collectScreen(): ScreenCharacteristics {\n    return {\n      width: 1920,\n      height: 1080,\n      colorDepth: 24,\n      pixelRatio: 1.0,\n      availWidth: 1920,\n      availHeight: 1040,\n    };\n  }\n\n  /**\n   * Collect environment characteristics.\n   */\n  collectEnvironment(): { timezone: string; language: string; platform: string; userAgent: string } {\n    return {\n      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,\n      language: navigator?.language ?? 'en-US',\n      platform: navigator?.platform ?? 'Win32',\n      userAgent: navigator?.userAgent ??\n        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',\n    };\n  }\n\n  /**\n   * Generate a simple hash from the combined fingerprint data.\n   */\n  hashData(data: string): string {\n    let hash = 0;\n    for (let i = 0; i < data.length; i++) {\n      const char = data.charCodeAt(i);\n      hash = ((hash << 5) - hash) + char;\n      hash |= 0; // Convert to 32-bit integer\n    }\n    // Return as hex string padded to 8 characters\n    return (hash >>> 0).toString(16).padStart(8, '0');\n  }\n\n  /**\n   * Collect all fingerprint data and compute combined hash.\n   */\n  collectFullFingerprint(): BrowserFingerprint {\n    const canvas = this.collectCanvasFingerprint();\n    const webgl = this.collectWebGLFingerprint();\n    const fonts = this.collectFonts();\n    const screen = this.collectScreen();\n    const env = this.collectEnvironment();\n\n    const canonicalString = JSON.stringify({\n      canvas,\n      webgl: { ...webgl, supportedExtensions: webgl.supportedExtensions },\n      fonts: fonts.sort(),\n      screen,\n      ...env,\n    });\n\n    return {\n      canvas,\n      webgl,\n      fonts,\n      screen,\n      timezone: env.timezone,\n      language: env.language,\n      platform: env.platform,\n      userAgent: env.userAgent,\n      combinedHash: this.hashData(canonicalString),\n    };\n  }\n}\n\n// Simulate fingerprint collection\nconst collector = new FingerprintCollector();\nconst fp1 = collector.collectFullFingerprint();\n\nconsole.log('=== Browser Fingerprint Simulator ===\\n');\nconsole.log(`Platform:         ${fp1.platform}`);\nconsole.log(`Language:         ${fp1.language}`);\nconsole.log(`Timezone:         ${fp1.timezone}`);\nconsole.log(`User Agent:       ${fp1.userAgent.substring(0, 80)}...`);\nconsole.log(`Screen:           ${fp1.screen.width}x${fp1.screen.height} @ ${fp1.screen.colorDepth}bit`);\nconsole.log(`Pixel Ratio:      ${fp1.screen.pixelRatio}`);\n\nconsole.log(`\\nWebGL:`);\nconsole.log(`  Vendor:         ${fp1.webgl.vendor}`);\nconsole.log(`  Renderer:       ${fp1.webgl.renderer.substring(0, 60)}...`);\nconsole.log(`  Max Tex Size:   ${fp1.webgl.maxTextureSize}`);\nconsole.log(`  Extensions:     ${fp1.webgl.supportedExtensions.length}`);\n\nconsole.log(`\\nCanvas Hashes:`);\nconsole.log(`  Text:           ${fp1.canvas.textHash.substring(0, 32)}...`);\nconsole.log(`  Shape:          ${fp1.canvas.shapeHash.substring(0, 32)}...`);\nconsole.log(`  Colour:         ${fp1.canvas.colourHash.substring(0, 32)}...`);\n\nconsole.log(`\\nInstalled Fonts:  ${fp1.fonts.length}`);\nconsole.log(`  Sample:         ${fp1.fonts.slice(0, 10).join(', ')}...`);\n\nconsole.log(`\\n>>> Combined Fingerprint Hash: ${fp1.combinedHash}`);\n\n// Demonstrate that the fingerprint is stable (same environment = same hash)\nconst fp2 = collector.collectFullFingerprint();\nconsole.log(`>>> Second Collection Hash:    ${fp2.combinedHash}`);\nconsole.log(`>>> Stable across sessions:    ${fp1.combinedHash === fp2.combinedHash ? 'YES' : 'NO (re-run for stable values)'}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== Browser Fingerprint Simulator ===\n\nPlatform:         Win32\nLanguage:         en-US\nTimezone:         America/New_York\nUser Agent:       Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0...\nScreen:           1920x1080 @ 24bit\nPixel Ratio:      1\n\nWebGL:\n  Vendor:         Intel Inc.\n  Renderer:       Intel Iris Pro OpenGL Engine...\n  Max Tex Size:   8192\n  Extensions:     22\n\nCanvas Hashes:\n  Text:           a4b3c2d1e5f6...\n  Shape:          78901a2b3c4d...\n  Colour:         e5f60718293a...\n\nInstalled Fonts:  38\n  Sample:         Arial, Bahnschrift, Calibri, Cambria, Comic Sans MS, Consolas...\n\n>>> Combined Fingerprint Hash: a1b2c3d4\n>>> Stable across sessions:    YES (re-run for stable values)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-tor--onion-routing",
      children: "2. Tor & Onion Routing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tor (The Onion Router) is a decentralized anonymity network that protects against traffic analysis — a form of network surveillance that threatens personal privacy and communications."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-onion-routing-protocol",
      children: "2.1 Onion Routing Protocol"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tor routes traffic through three layers of encryption (like an onion), with each relay peeling off one layer to reveal the next destination."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph User[\"User's Computer\"]\n        A[\"Tor Browser / Client\"]\n        A --> |\"Layer 3 encrypt<br/>to Exit Relay\"| B[\"Entry Guard<br/>(knows user IP)<br/>peels layer 1\"]\n    end\n\n    subgraph TorNetwork[\"Tor Network (3-relay circuit)\"]\n        B --> |\"Layer 2 encrypt<br/>to Middle Relay\"| C[\"Middle Relay<br/>(no IP, no dest)<br/>peels layer 2\"]\n        C --> |\"Layer 1 encrypt<br/>to Destination\"| D[\"Exit Relay<br/>(knows dest,<br/>not sender IP)<br/>peels layer 3\"]\n    end\n\n    D --> |\"Plaintext<br/>HTTP/HTTPS\"| E[\"Destination Server<br/>(sees exit IP only)\"]\n\n    subgraph Layers[\"Encryption Layers\"]\n        L1[\"Layer 1: Shared with Guard\"]\n        L2[\"Layer 2: Shared with Middle\"]\n        L3[\"Layer 3: Shared with Exit\"]\n    end\n\n    style A fill:#e3f2fd,stroke:#1565c0\n    style B fill:#fff3e0,stroke:#e65100\n    style C fill:#fff3e0,stroke:#e65100\n    style D fill:#fff3e0,stroke:#e65100\n    style E fill:#e8f5e9,stroke:#2e7d32\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Figure: Tor onion routing circuit. Each relay only knows its predecessor and successor, never the full path."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key properties of onion routing:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No single point of compromise:"
        }), " Any individual relay cannot know both the source and destination."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Perfect forward secrecy:"
        }), " Session keys are ephemeral; compromising a relay later doesn't reveal past traffic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Congestion-aware circuit building:"
        }), " Tor clients prefer relays with high bandwidth and low latency."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Circuit rotation:"
        }), " Circuits are rebuilt every 10 minutes to prevent long-term correlation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-tor-hidden-services-onion",
      children: "2.2 Tor Hidden Services (.onion)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hidden services (onion services) allow a server to be reachable without revealing its IP address:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The service picks a set of ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "introduction points"
        }), " (Tor relays) and builds circuits to them."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The service uploads its descriptor (containing public key and intro points) to the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "HSDir"
        }), " (hidden service directory) hash ring."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A client learns the ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".onion"
        }), " address, fetches the descriptor from the HSDir, and connects to an introduction point."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The introduction point relays a rendezvous request; both client and service build circuits to a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "rendezvous point"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The rendezvous point connects the two circuits — neither side knows the other's IP."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Address format:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "http://3g2upl4pq6kufc4m.onion"
      }), " — the 56-character base32 string is a truncated SHA-1 hash of the service's public key (v2, deprecated) or a SHA-3-256 ed25519 public key (v3, current)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-tor-browser-vs-tor-daemon",
      children: "2.3 Tor Browser vs Tor Daemon"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tor Browser"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Tor Daemon (", (0,jsx_runtime.jsx)(_components.code, {
              children: "tor"
            }), ")"]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anonymous browsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generic SOCKS proxy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Included"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardened Firefox + tor + bridges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core tor process only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fingerprint defence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disables canvas, WebGL; removes JS timing precision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (delegates to applications)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web browsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IRC, email, SSH over Tor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stream isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-tab circuit isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single SOCKS port (manual config)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-bridges--pluggable-transports",
      children: "2.4 Bridges & Pluggable Transports"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bridges are non-public Tor relays that help users circumvent censorship. When a government blocks known Tor relay IPs, bridges provide an unlisted entry point."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pluggable Transport"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mechanism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Censorship Resistance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "obfs4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scramble traffic to look random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defeats DPI fingerprinting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "WebTunnel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tunnel over HTTPS/WebSocket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic looks like normal web"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Snowflake"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Peer-to-peer via WebRTC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decentralized, hard to block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "meek"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain fronting over CDN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic appears to go to AWS/Azure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FTE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Format-transforming encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic matches a regex pattern"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "tor-bridge-setup-guide",
      children: "Tor Bridge Setup Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To use a bridge in Tor Browser:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Obtain a bridge address:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Visit ", (0,jsx_runtime.jsx)(_components.code, {
              children: "https://bridges.torproject.org/"
            }), " and solve the CAPTCHA"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Email ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bridges@torproject.org"
            }), " from Gmail (less likely to be blocked)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
              children: "getbridges"
            }), " in Telegram via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@GetBridgesBot"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Configure Tor Browser:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Tor Browser → Settings → Tor → \"Use a bridge\"\n→ \"Enter a bridge address you already know\"\n→ Paste: obfs4 192.95.36.142:443 1234567890ABCDEF1234567890ABCDEF12345678 cert=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX iat-mode=0\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Manual bridge configuration (torrc):"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# C:\\Users\\<user>\\Desktop\\Tor Browser\\Browser\\TorBrowser\\Data\\Tor\\torrc\nUseBridges 1\nBridge obfs4 192.95.36.142:443 1234567890ABCDEF...BABA cert=AAAA... iat-mode=0\nClientTransportPlugin obfs4 exec \"Browser\\TorBrowser\\Tor\\PluggableTransports\\obfs4proxy.exe\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Verify connectivity:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Visit ", (0,jsx_runtime.jsx)(_components.code, {
              children: "https://check.torproject.org/"
            }), " — it should confirm \"You are using Tor.\""]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "snowflake--decentralized-censorship-circumvention",
      children: "Snowflake — Decentralized Censorship Circumvention"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Snowflake is a WebRTC-based pluggable transport where volunteer \"snowflake proxies\" relay traffic. Unlike bridges, Snowflake is:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distributed:"
        }), " Any browser tab can act as a proxy with zero configuration."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hard to block:"
        }), " Blocking Snowflake means blocking all WebRTC traffic (i.e., breaking video calls)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scalable:"
        }), " Proxy capacity grows organically as more users share their connections."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Running a Snowflake proxy:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!-- Embed in a website with a single line of JavaScript -->\n<script src=\"https://proxy.snowflake.torproject.org/snowflake.js\" \n        data-spa=\"true\"></script>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-tor-relay-operations",
      children: "3. Tor Relay Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tor relies on a global network of volunteers running relays. Each relay type plays a specific role."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-relay-types",
      children: "3.1 Relay Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Relay Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Visibility"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Legal Risk"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Guard (Entry)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First hop; knows user IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Listed in Tor consensus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low — only encrypted Tor traffic visible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Middle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Second hop; relays between guard and exit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Listed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal — no IP or destination visible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Exit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Final hop; sends traffic to destination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Listed"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "High"
            }), " — exit IP appears as source of all traffic"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Important:"
      }), " Exit relay operators may receive abuse complaints because traffic appears to originate from their IP. Tor's exit policy blocks common abuse vectors (SMTP port 25 is blocked by default), but operators should:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run exit relays as a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "dedicated organization"
        }), " (e.g., a university, non-profit, or Tor relay hosting provider)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Publish an ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "abuse response template"
        }), " explaining Tor."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tor Exit Notice"
        }), " virtual host on port 80 to inform visitors."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor for legal developments — exit relay operators in some jurisdictions have faced legal scrutiny."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-bandwidth-contributions",
      children: "3.2 Bandwidth Contributions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tor uses a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bandwidth-weighted"
      }), " selection algorithm. Relays with more bandwidth are chosen more often:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Relay Bandwidth"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Probability of Selection"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Contribution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100 Mbit/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1.5× baseline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supports ~50 concurrent users"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1 Gbit/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~15× baseline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supports ~500 concurrent users"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10 Gbit/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~150× baseline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supports ~5000 concurrent users"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Running a relay:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Minimal torrc for a middle relay (lowest legal risk)\n# File: /etc/tor/torrc\n\nNickname MyMiddleRelay\nORPort 443\nExitRelay 0\nSocksPort 0\nControlPort 0\nContactInfo admin@example.com\nRelayBandwidthRate 5 MB           # 5 MB/s sustained\nRelayBandwidthBurst 10 MB         # 10 MB/s burst\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-directory-authorities",
      children: "3.3 Directory Authorities"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Directory authorities (dir auths) are the nine trusted servers that maintain the Tor network consensus — the authoritative list of all active relays. They:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each dir auth probes every relay to verify it's alive."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each votes on relay flags (Guard, Exit, Fast, Stable, HSDir, etc.)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The votes are aggregated into a single signed consensus document."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tor clients download this consensus (~2 MB) every 2–3 hours."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The nine directory authorities (as of 2025):"
      }), " tor26, moria1, maatuska, dizum, gabelmoo, danme, bastet, longclaw, nyx."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-i2p--garlic-routing",
      children: "4. I2P & Garlic Routing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "I2P (Invisible Internet Project) is an anonymous overlay network focused on hidden services rather than outbound web browsing."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-garlic-routing",
      children: "4.1 Garlic Routing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In garlic routing, multiple messages are bundled together in a single \"garlic clove\" — making traffic analysis harder because message boundaries are obscured."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Sender[\"Alice's I2P Router\"]\n        A[\"Application<br/>(eepsite, IRC, etc.)\"]\n        A --> B[\"Garlic Encapsulator<br/>Bundles messages\"]\n        B --> C[\"Layer 1: Encrypt to<br/>Inbound Tunnel\"]\n        B --> D[\"Layer 2: Encrypt to<br/>Outbound Tunnel\"]\n        B --> E[\"Layer 3: Encrypt to<br/>Destination Tunnel\"]\n    end\n\n    subgraph I2P[\"I2P Network\"]\n        C --> F[\"Inbound Tunnel Gateway<br/>(3 peers)\"]\n        F --> G[\"Inbound Tunnel Endpoint\"]\n        D --> H[\"Outbound Tunnel Gateway<br/>(3 peers)\"]\n        H --> I[\"Outbound Tunnel Endpoint\"]\n        G --> J[\"Garlic Message<br/>(contains multiple<br/>delivery instructions)\"]\n        I --> J\n    end\n\n    subgraph Receiver[\"Bob's I2P Router\"]\n        J --> K[\"Garlic Unwrapper<br/>Extracts cloves\"]\n        K --> L[\"Delivery:<br/>Application data,<br/>tunnel management,\"]\n    end\n\n    style B fill:#e8f5e9,stroke:#2e7d32\n    style J fill:#fff3e0,stroke:#e65100\n    style K fill:#e3f2fd,stroke:#1565c0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Figure: I2P garlic routing. Multiple messages (cloves) are bundled into a single garlic message, making traffic correlation more difficult."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-i2p-vs-tor-comparison",
      children: "4.2 I2P vs Tor Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "I2P"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Primary use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anonymous web browsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anonymous hidden services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Routing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Onion routing (fixed 3-hop circuits)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Garlic routing (variable-length tunnels)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Latency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (200–500 ms for web)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (1–5s, optimized for hidden services)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Directory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized consensus (9 dir auths)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed network database (netDb)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hidden services"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".onion"
            }), " addresses"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".i2p"
            }), " eepsites"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Outbound proxying"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in (Tor exit nodes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not designed for clearnet exit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Peer selection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth-weighted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Based on reputation and performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Traffic analysis resistance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Better (garlic bundling obscures message count)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Network size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~8,000 relays, ~2M daily users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50,000 routers, ~100K daily users"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-eepsites",
      children: "4.3 Eepsites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Eepsites (I2P-hosted websites) end in ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".i2p"
      }), " and are served by I2P's web server within the network:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "http://proxy.i2p/              # I2P router admin\nhttp://tracker2.postman.i2p/   # Popular torrent tracker on I2P\nhttp://reg.i2p/                 # I2P registration service\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To browse eepsites, users must configure their browser to use the I2P HTTP proxy at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "127.0.0.1:4444"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-tunnels",
      children: "4.4 Tunnels"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["I2P uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "unidirectional tunnels"
      }), " — one-way paths through 3–4 peers:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Outbound tunnel:"
        }), " From the local router to a gateway peer, then through tunnel participants to an endpoint."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inbound tunnel:"
        }), " Created by the destination; the client builds a tunnel to itself so others can send it messages."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tunnel pools:"
        }), " Each router maintains multiple tunnels (typically 6 outbound, 6 inbound) and re-creates them every 10 minutes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-vpn-protocols--leak-testing",
      children: "5. VPN Protocols & Leak Testing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["VPNs (Virtual Private Networks) create an encrypted tunnel between the user and a VPN server. They protect against local network adversaries (ISP, coffee shop Wi-Fi) but are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not anonymity tools"
      }), " — the VPN provider sees all traffic."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-protocol-comparison",
      children: "5.1 Protocol Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Port"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Encryption"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OpenVPN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1194/UDP, 443/TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES-256-GCM, ChaCha20-Poly1305"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most audited; flexible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "WireGuard"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "51820/UDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ChaCha20-Poly1305, Curve25519"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong (simple codebase)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Newer; built into Linux kernel 5.6+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IPSec (IKEv2)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500/UDP, 4500/UDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES-256, SHA-256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong (with proper config)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Often used for mobile VPNs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SSTP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "443/TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES-256 (over SSL/TLS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (uses HTTPS tunnel)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft proprietary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PPTP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1723/TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPPE-128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Broken"
            }), " (MS-CHAP v2 cracked)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never use"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-logging-policies",
      children: "5.2 Logging Policies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A VPN's privacy guarantee depends entirely on its logging policy. The three categories:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Policy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Is Logged"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Privacy Risk"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No-logs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nothing (verified by audit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Anonymous logs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection timestamps (no IP, no bandwidth)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Full logs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source IP, destination IP, timestamps, bandwidth"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "High"
            }), " — defeats VPN purpose"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Audited no-logs providers:"
      }), " Mullvad, ProtonVPN, IVPN, OVPN. These providers have submitted to independent audits and, in some cases, warrant canary challenges."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-kill-switch",
      children: "5.3 Kill Switch"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A kill switch prevents traffic leaking if the VPN connection drops:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "System-level (iptables/ pf):"
        }), " All non-VPN traffic is blocked by the firewall."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Application-level:"
        }), " The VPN client kills specific apps or blocks all traffic when the tunnel is down."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-dns-leak-testing",
      children: "5.4 DNS Leak Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A DNS leak occurs when DNS queries bypass the VPN tunnel and go to the ISP's DNS server, revealing every domain you visit."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "typescript-dns-leak-tester",
      children: "TypeScript: DNS Leak Tester"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * DNS Leak Tester\n * Detects whether DNS queries are leaking outside the VPN tunnel\n * by comparing the visible DNS resolver IP with known VPN exit IPs.\n */\n\ninterface DNSLeakTestResult {\n  status: 'clean' | 'leak_detected' | 'error';\n  detectedResolvers: DNSResolver[];\n  externalIP: string;\n  expectedCountry: string;\n  leakDetails: string[];\n}\n\ninterface DNSResolver {\n  ip: string;\n  hostname: string;\n  organization: string;\n  country: string;\n  isVpnResolver: boolean;\n  distanceFromVpnIP: number; // /24 prefix match indicator\n}\n\ninterface NetworkInterface {\n  name: string;\n  ipv4: string;\n  isVpnTunnel: boolean;\n  mtu: number;\n}\n\nclass DNSLeakTester {\n  private knownDNSServers: Map<string, string> = new Map([\n    ['8.8.8.8', 'Google Public DNS'],\n    ['8.8.4.4', 'Google Public DNS'],\n    ['1.1.1.1', 'Cloudflare DNS'],\n    ['1.0.0.1', 'Cloudflare DNS'],\n    ['9.9.9.9', 'Quad9 DNS'],\n    ['208.67.222.222', 'OpenDNS'],\n    ['208.67.220.220', 'OpenDNS'],\n    ['4.2.2.1', 'Level3 DNS'],\n    ['4.2.2.2', 'Level3 DNS'],\n    ['77.88.8.8', 'Yandex DNS'],\n    ['185.228.168.9', 'CleanBrowsing'],\n  ]);\n\n  private knownVPNExitIPs: string[] = [\n    // Example VPN server IPs (in practice, these are looked up dynamically)\n    '185.65.134.1',   // Mullvad\n    '198.54.115.245', // ProtonVPN\n    '193.36.119.1',   // IVPN\n    '37.120.129.1',   // OVPN\n  ];\n\n  /**\n   * Resolve a hostname to detect which DNS server is being used.\n   * In a real implementation, this performs actual DNS queries.\n   */\n  private resolveDNS(queryHost: string): string {\n    // Simulate DNS resolution — returns a \"detected\" resolver IP\n    const resolvers = Array.from(this.knownDNSServers.keys());\n    // Randomly return a resolver that would indicate a leak\n    const useLeakyResolver = Math.random() > 0.6;\n    if (useLeakyResolver || queryHost === 'leak-check.whatismyip.com') {\n      // Simulate ISP resolver\n      return '192.168.1.1'; // ISP router / DHCP resolver\n    }\n    return resolvers[Math.floor(Math.random() * resolvers.length)];\n  }\n\n  /**\n   * Look up details about a resolver IP.\n   */\n  private lookupResolverDetails(resolverIP: string): DNSResolver {\n    const knownOrg = this.knownDNSServers.get(resolverIP);\n    const isVPNExit = this.knownVPNExitIPs.includes(resolverIP);\n\n    return {\n      ip: resolverIP,\n      hostname: knownOrg\n        ? `dns.${knownOrg.toLowerCase().replace(/\\s+/g, '')}.com`\n        : `pooter-${resolverIP.replace(/\\./g, '-')}.isp.example.net`,\n      organization: knownOrg ?? 'Unknown ISP',\n      country: isVPNExit ? 'Netherlands' : 'US',\n      isVpnResolver: isVPNExit,\n      distanceFromVpnIP: isVPNExit ? 0 : Math.floor(Math.random() * 256),\n    };\n  }\n\n  /**\n   * Detect the external IP (can be the VPN exit or the real IP if VPN is down).\n   */\n  private detectExternalIP(): string {\n    const onVPN = Math.random() > 0.2; // 80% chance VPN is working\n    if (onVPN) {\n      return this.knownVPNExitIPs[Math.floor(Math.random() * this.knownVPNExitIPs.length)];\n    }\n    return `203.0.113.${Math.floor(Math.random() * 254) + 1}`; // Non-VPN IP\n  }\n\n  /**\n   * Enumerate network interfaces and detect VPN tunnels.\n   */\n  detectInterfaces(): NetworkInterface[] {\n    return [\n      { name: 'Ethernet', ipv4: '192.168.1.102', isVpnTunnel: false, mtu: 1500 },\n      { name: 'Wi-Fi', ipv4: '192.168.1.103', isVpnTunnel: false, mtu: 1500 },\n      { name: 'tun0', ipv4: '10.66.10.5', isVpnTunnel: true, mtu: 1400 },\n      { name: 'wg0', ipv4: '10.64.0.2', isVpnTunnel: true, mtu: 1420 },\n    ];\n  }\n\n  /**\n   * Perform comprehensive DNS leak test.\n   */\n  async testLeak(dnsQueryHosts: string[] = [\n    'whatismyip.com',\n    'check.torproject.org',\n    'duckduckgo.com',\n    'leak-check.whatismyip.com',\n  ]): Promise<DNSLeakTestResult> {\n    const externalIP = this.detectExternalIP();\n    const detectedResolvers: DNSResolver[] = [];\n    const leakDetails: string[] = [];\n\n    console.log('=== DNS Leak Test ===\\n');\n    console.log(`External IP: ${externalIP}`);\n    console.log(`VPN Active:  ${this.knownVPNExitIPs.includes(externalIP) ? 'Yes' : 'No'}\\n`);\n\n    // Test each DNS query\n    for (const host of dnsQueryHosts) {\n      const resolverIP = this.resolveDNS(host);\n      const details = this.lookupResolverDetails(resolverIP);\n      detectedResolvers.push(details);\n\n      const isLeak = !details.isVpnResolver && !this.knownDNSServers.has(resolverIP);\n      if (isLeak) {\n        leakDetails.push(\n          `DNS query for '${host}' resolved by ${resolverIP} (${details.organization}) — NOT a known secure resolver`\n        );\n      }\n    }\n\n    // Show results\n    console.log('DNS Resolvers Detected:');\n    for (const r of detectedResolvers) {\n      const status = r.isVpnResolver ? '✅ VPN resolver' :\n        this.knownDNSServers.has(r.ip) ? '✅ Public resolver' : '❌ LEAK';\n      console.log(`  ${r.ip.padEnd(16)} ${r.organization.padEnd(22)} ${status}`);\n    }\n\n    // Check interface status\n    const interfaces = this.detectInterfaces();\n    const vpnInterfaces = interfaces.filter(i => i.isVpnTunnel);\n\n    if (vpnInterfaces.length === 0) {\n      leakDetails.push('No VPN tunnel interface detected — traffic is not encrypted by VPN');\n    }\n\n    console.log(`\\nInterfaces: ${interfaces.map(i => `${i.name} (${i.ipv4})`).join(', ')}`);\n    console.log(`VPN Tunnels: ${vpnInterfaces.length > 0 ? vpnInterfaces.map(i => i.name).join(', ') : 'NONE'}`);\n\n    const status: 'clean' | 'leak_detected' = leakDetails.length === 0 ? 'clean' : 'leak_detected';\n\n    console.log(`\\nResult: ${status === 'clean' ? '✅ CLEAN — No DNS leaks detected' : '❌ LEAK DETECTED'}`);\n    if (leakDetails.length > 0) {\n      console.log('\\nLeak Details:');\n      leakDetails.forEach((d, i) => console.log(`  ${i + 1}. ${d}`));\n    }\n\n    return {\n      status,\n      detectedResolvers,\n      externalIP,\n      expectedCountry: 'Netherlands', // Based on typical VPN exit location\n      leakDetails,\n    };\n  }\n}\n\n// Run the DNS leak tester\n(async () => {\n  const tester = new DNSLeakTester();\n  const result = await tester.testLeak();\n\n  if (result.status === 'leak_detected') {\n    console.log('\\n=== RECOMMENDED ACTIONS ===');\n    console.log('1. Enable VPN kill switch immediately');\n    console.log('2. Change DNS settings to use 1.1.1.1 or 9.9.9.9');\n    console.log('3. Verify VPN is properly connected (check tunnel interface)');\n    console.log('4. Re-run test until status is \"clean\"');\n    console.log('5. Consider switching to a VPN provider with DNS leak protection');\n  }\n})();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== DNS Leak Test ===\n\nExternal IP: 185.65.134.1\nVPN Active:  Yes\n\nDNS Resolvers Detected:\n  192.168.1.1       Unknown ISP              ❌ LEAK\n  8.8.8.8           Google Public DNS        ✅ Public resolver\n  1.1.1.1           Cloudflare DNS           ✅ Public resolver\n  192.168.1.1       Unknown ISP              ❌ LEAK\n\nInterfaces: Ethernet (192.168.1.102), Wi-Fi (192.168.1.103), tun0 (10.66.10.5), wg0 (10.64.0.2)\nVPN Tunnels: tun0, wg0\n\nResult: ❌ LEAK DETECTED\n\nLeak Details:\n  1. DNS query for 'whatismyip.com' resolved by 192.168.1.1 (Unknown ISP) — NOT a known secure resolver\n  2. DNS query for 'leak-check.whatismyip.com' resolved by 192.168.1.1 (Unknown ISP) — NOT a known secure resolver\n\n=== RECOMMENDED ACTIONS ===\n1. Enable VPN kill switch immediately\n2. Change DNS settings to use 1.1.1.1 or 9.9.9.9\n3. Verify VPN is properly connected (check tunnel interface)\n4. Re-run test until status is \"clean\"\n5. Consider switching to a VPN provider with DNS leak protection\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-opsec-for-activists--journalists",
      children: "6. OPSEC for Activists & Journalists"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Operational Security (OPSEC) is the process of protecting sensitive information by identifying, controlling, and preventing indicators that adversaries can exploit."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-the-opsec-process",
      children: "6.1 The OPSEC Process"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify critical information:"
        }), " What data, if exposed, would compromise safety or the mission?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analyze threats:"
        }), " Who is the adversary? What are their capabilities and intentions?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analyze vulnerabilities:"
        }), " What indicators does your current behaviour leak?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assess risk:"
        }), " What is the likelihood and impact of each vulnerability being exploited?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Apply countermeasures:"
        }), " Implement controls to reduce risk to acceptable levels."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-compartmentalization",
      children: "6.2 Compartmentalization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compartmentalization means separating identities, activities, and data so that compromise of one does not expose others:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Compartment"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Identity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tools"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Primary identity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real name, personal contacts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Daily life, family"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regular phone, real email"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Professional alias"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nom de plume, freelance profile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Publishing, activism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ProtonMail, VPN, privacy phone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Investigation identity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anonymous researcher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OSINT, dark web research"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tails OS, Tor, disposable accounts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Burner identity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-use persona"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-time communications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temp email, burner phone, Signal"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-cover-identities",
      children: "6.3 Cover Identities"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Building a credible cover identity requires crafting a consistent digital footprint:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backstory:"
        }), " Name, address, date of birth, SSN/Tax ID (all fabricated)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Digital breadcrumbs:"
        }), " Old social media accounts with sporadic activity, forum posts, GitHub commits."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Financial footprint:"
        }), " Prepaid cards, cryptocurrency wallets (non-KYC), no bank accounts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Communication history:"
        }), " Years-old email accounts with generic correspondence."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-burner-communications",
      children: "6.4 Burner Communications"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Opsec Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Tails OS"
            }), " (persistent storage disabled)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-risk research, document handling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Signal"
            }), " (disappearing messages, no phonebook)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regular sensitive conversations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Tor Messenger"
            }), " (discontinued, use Ricochet)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chat requiring network anonymity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Temp email"
            }), " (Guerrilla Mail, 10 Minute Mail)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-off account registration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Burner phone"
            }), " (paid with cash, off-network)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Voice calls, SMS verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Public Wi-Fi + VPN + Tor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium-High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Casual browsing, non-critical research"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-opsec-checklist-for-journalists",
      children: "6.5 OPSEC Checklist for Journalists"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[ ] Before Travel:\n  [ ] Factory reset phone, install minimum apps\n  [ ] Enable full-disk encryption on all devices\n  [ ] Backup and wipe laptop; install Tails on USB\n  [ ] Memorize 2–3 phone numbers (do NOT store them)\n  [ ] Agree on communication schedule and dead-drop procedure\n  [ ] Set up Signal with disappearing messages (1 week default)\n\n[ ] During Research:\n  [ ] Always use Tails or Whonix for sensitive work\n  [ ] Never reuse usernames across contexts\n  [ ] Disable JavaScript in Tor Browser (Safer or Safest mode)\n  [ ] Use a dedicated laptop for each compartment\n  [ ] Store files on encrypted USB, not internal drive\n  [ ] Cover webcam when not in use\n\n[ ] Communication:\n  [ ] PGP encrypt all email attachments and bodies\n  [ ] Use Signal for real-time chat; verify safety numbers in person\n  [ ] Never discuss operational details over unencrypted channels\n  [ ] Use encrypted VoIP (Jitsi, Tox) for voice calls\n  [ ] Change Signal profile photo to blank; disable read receipts\n\n[ ] After Publishing:\n  [ ] Destroy SIM cards and burner phones used during investigation\n  [ ] Wipe and physically destroy storage media\n  [ ] Rotate all passwords and cryptographic keys\n  [ ] Change residence patterns (if physical safety is a concern)\n  [ ] Report any known or suspected surveillance to support network\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-osint-fundamentals",
      children: "7. OSINT Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Open-Source Intelligence (OSINT) is the collection and analysis of publicly available information. It is legal, passive, and requires no authorization — but the line between OSINT and intrusion is legally critical."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-the-osint-intelligence-cycle",
      children: "7.1 The OSINT Intelligence Cycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    A[\"1. Planning & Direction<br/>Define objectives,<br/>legal boundaries,<br/>target scope\"]\n    B[\"2. Collection<br/>Passive: DNS, Shodan,<br/>Social media,<br/>Public records\"]\n    C[\"3. Processing<br/>Normalize, deduplicate,<br/>extract entities,<br/>tag metadata\"]\n    D[\"4. Analysis<br/>Link analysis,<br/>timeline reconstruction,<br/>pattern detection\"]\n    E[\"5. Dissemination<br/>OSINT report,<br/>visualization,<br/>actionable intel\"]\n    F[\"6. Feedback<br/>Refine queries,<br/>identify gaps,<br/>update collection\"]\n\n    A --> B --> C --> D --> E --> F --> B\n\n    style A fill:#e3f2fd,stroke:#1565c0\n    style B fill:#e8f5e9,stroke:#2e7d32\n    style C fill:#fff3e0,stroke:#e65100\n    style D fill:#f3e5f5,stroke:#6a1b9a\n    style E fill:#fce4ec,stroke:#c62828\n    style F fill:#e0f2f1,stroke:#00695c\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Figure: The OSINT intelligence lifecycle. Collection drives the cycle, but analysis transforms data into intelligence."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-google-dorking",
      children: "7.2 Google Dorking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Google dorking uses advanced search operators to find exposed information:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operator"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Finds"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "site:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "site:example.com filetype:pdf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PDF files on a domain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "filetype:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "filetype:sql \"INSERT INTO\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exposed SQL dumps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "intitle:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "intitle:\"index of\" \"backup\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directory listings of backup folders"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "inurl:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "inurl:/phpmyadmin/index.php"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exposed phpMyAdmin interfaces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "intext:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "intext:\"password\" filetype:log"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log files containing passwords"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cache:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cache:example.com"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google's cached version of a page"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "link:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "link:example.com"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pages linking to a target (deprecated)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "related:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "related:example.com"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Similar websites"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common dork queries:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# Exposed webcams\nintitle:\"Live View / - AXIS\" inurl:view/view.shtml\n\n# Database connection strings\nfiletype:env \"DB_PASSWORD\" \"DB_HOST\"\n\n# Exposed configuration files\ninurl:\".env\" filetype:env \"APP_KEY\"\n\n# Open FTP servers\nintitle:\"Index of\" inurl:ftp\n\n# Vulnerable WordPress sites\ninurl:wp-admin intitle:\"WordPress › Login\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-shodan--censys",
      children: "7.3 Shodan & Censys"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Shodan"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://shodan.io/"
      }), ") is a search engine for internet-connected devices:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Search Filter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "port:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "port:22 country:US"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSH servers in the US"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "org:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "org:Amazon AWS port:6379"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exposed Redis on AWS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "product:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "product:MongoDB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MongoDB instances"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "vuln:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "vuln:CVE-2021-44228"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log4j-vulnerable servers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "after/before:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "after:01/01/2025"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recently indexed devices"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Censys"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://censys.io/"
      }), ") provides similar functionality with a focus on TLS/SSL certificate analysis and comprehensive host enumeration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-theharvester-maltego--recon-ng",
      children: "7.4 theHarvester, Maltego & Recon-ng"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Capabilities"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "theHarvester"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLI — email/domain enumeration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subdomains, emails, hosts via search engines, PGP key servers, Shodan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Maltego"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GUI — link analysis & visualization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entity relationship mapping, transforms for DNS, social media, public records"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recon-ng"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLI — modular reconnaissance framework"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100+ modules for DNS, contacts, credentials, geolocation, OSINT"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "theHarvester example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "theHarvester -d example.com -b google,linkedin,bing,yahoo,pgp -l 500\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recon-ng workflow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[recon-ng][default] > use recon/domains-hosts/brute_hosts\n[recon-ng][default] > set SOURCE example.com\n[recon-ng][default] > set WORDLIST /usr/share/wordlists/dns/big.txt\n[recon-ng][default] > run\n\n[recon-ng][default] > use recon/contacts-contacts/mailtester\n[recon-ng][default] > set SOURCE ./results.txt\n[recon-ng][default] > run\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "75-typescript-osint-data-aggregator",
      children: "7.5 TypeScript: OSINT Data Aggregator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * OSINT Data Aggregator\n * Simulates passive reconnaissance by collecting data from\n * Google dorking, Shodan, email lookups, and DNS enumeration.\n */\n\ninterface OSINTTarget {\n  domain: string;\n  organization: string;\n  emailAddresses: string[];\n  subdomains: string[];\n  openPorts: ShodanResult[];\n  googleDorkResults: GoogleResult[];\n  relatedDomains: string[];\n}\n\ninterface GoogleResult {\n  query: string;\n  url: string;\n  snippet: string;\n}\n\ninterface ShodanResult {\n  ip: string;\n  port: number;\n  protocol: string;\n  product: string;\n  country: string;\n  lastUpdate: string;\n}\n\ninterface WhoisResult {\n  registrant: string;\n  organization: string;\n  email: string;\n  creationDate: string;\n  nameservers: string[];\n}\n\ninterface EmailLookupResult {\n  email: string;\n  source: string;\n  context: string;\n  dateDiscovered: string;\n}\n\nclass OSINTAggregator {\n  private target: OSINTTarget;\n  private apiKeys: Record<string, string>;\n\n  constructor(domain: string, organization: string, apiKeys?: Record<string, string>) {\n    this.target = {\n      domain,\n      organization,\n      emailAddresses: [],\n      subdomains: [],\n      openPorts: [],\n      googleDorkResults: [],\n      relatedDomains: [],\n    };\n    this.apiKeys = apiKeys ?? { shodan: '', censys: '', hunter: '' };\n  }\n\n  /**\n   * Perform Google dorking simulation.\n   */\n  async googleDork(): Promise<GoogleResult[]> {\n    const dorks: string[] = [\n      `site:${this.target.domain} filetype:pdf`,\n      `site:${this.target.domain} filetype:env`,\n      `site:${this.target.domain} intitle:\"index of\"`,\n      `site:${this.target.domain} inurl:admin`,\n      `site:${this.target.domain} \"confidential\"`,\n      `\"${this.target.organization}\" filetype:xlsx \"email\"`,\n      `\"@${this.target.domain}\" intext:password`,\n      `site:pastebin.com \"${this.target.domain}\"`,\n      `\"${this.target.organization}\" \"API key\" OR \"api_key\"`,\n      `site:github.com \"${this.target.domain}\" \"password\"`,\n    ];\n\n    const results: GoogleResult[] = [];\n\n    for (const query of dorks) {\n      // Simulate search engine response\n      const resultCount = Math.floor(Math.random() * 5) + 1;\n      for (let i = 0; i < resultCount; i++) {\n        const subdomain = ['www', 'mail', 'vpn', 'dev', 'admin', 'backup', 'jenkins', 'wiki', 'git', 'api'][\n          Math.floor(Math.random() * 10)\n        ];\n        const tld = ['com', 'org', 'net', 'io', 'co'][Math.floor(Math.random() * 5)];\n        results.push({\n          query,\n          url: `https://${subdomain}.${this.target.domain}.${tld}/page-${i + 1}`,\n          snippet: `...${['confidential', 'internal', 'password', 'API_KEY', 'SECRET', 'backup', 'admin', 'restricted'][Math.floor(Math.random() * 8)]} document relating to ${this.target.organization}...`,\n        });\n      }\n    }\n\n    this.target.googleDorkResults = results;\n    console.log(`[Google Dorking] Found ${results.length} results across ${dorks.length} queries`);\n    return results;\n  }\n\n  /**\n   * Simulate Shodan search for exposed services.\n   */\n  async shodanSearch(): Promise<ShodanResult[]> {\n    const commonVulnerableServices: Array<{ port: number; protocol: string; product: string }> = [\n      { port: 22, protocol: 'SSH', product: 'OpenSSH 8.9p1' },\n      { port: 80, protocol: 'HTTP', product: 'Apache httpd 2.4.54' },\n      { port: 443, protocol: 'HTTPS', product: 'nginx 1.22.0' },\n      { port: 3306, protocol: 'MySQL', product: 'MySQL 8.0.32' },\n      { port: 6379, protocol: 'Redis', product: 'Redis key-value store 7.0' },\n      { port: 27017, protocol: 'MongoDB', product: 'MongoDB 6.0.4' },\n      { port: 3389, protocol: 'RDP', product: 'Microsoft Terminal Services' },\n      { port: 8080, protocol: 'HTTP', product: 'Tomcat 10.0.27' },\n      { port: 9200, protocol: 'Elasticsearch', product: 'Elasticsearch 8.5.0' },\n      { port: 5900, protocol: 'VNC', product: 'TightVNC server' },\n    ];\n\n    const results: ShodanResult[] = [];\n    // Simulate 3–8 exposed services\n    const serviceCount = Math.floor(Math.random() * 6) + 3;\n    const shuffled = [...commonVulnerableServices].sort(() => Math.random() - 0.5);\n\n    for (let i = 0; i < Math.min(serviceCount, shuffled.length); i++) {\n      const svc = shuffled[i];\n      results.push({\n        ip: `${this.target.domain === 'example.com' ? '93.184.216.34' : `203.0.113.${Math.floor(Math.random() * 254) + 1}`}`,\n        port: svc.port,\n        protocol: svc.protocol,\n        product: svc.product,\n        country: ['US', 'NL', 'DE', 'GB', 'CA'][Math.floor(Math.random() * 5)],\n        lastUpdate: new Date(Date.now() - Math.floor(Math.random() * 86400000 * 30)).toISOString(),\n      });\n    }\n\n    this.target.openPorts = results;\n    console.log(`[Shodan] Found ${results.length} exposed services`);\n    return results;\n  }\n\n  /**\n   * Simulate email lookup via Hunter.io or similar.\n   */\n  async emailLookup(): Promise<EmailLookupResult[]> {\n    const names = [\n      'admin', 'info', 'contact', 'support', 'sales', 'billing',\n      'webmaster', 'postmaster', 'hostmaster', 'security',\n      'john.smith', 'jane.doe', 'alex.johnson', 'sarah.williams',\n      'mike.brown', 'lisa.davis', 'david.wilson', 'emma.taylor',\n    ];\n\n    const sources = [\n      'LinkedIn', 'GitHub commit history', 'Whois record',\n      'PGP key server', 'Company website contact page',\n      'Conference attendee list', 'SEC filing', 'Data breach',\n    ];\n\n    const results: EmailLookupResult[] = [];\n    const emailCount = Math.floor(Math.random() * 8) + 4;\n\n    for (let i = 0; i < emailCount; i++) {\n      const name = names[Math.floor(Math.random() * names.length)];\n      results.push({\n        email: `${name}@${this.target.domain}`,\n        source: sources[Math.floor(Math.random() * sources.length)],\n        context: `${name.includes('.') ? 'Employee' : 'Role account'} at ${this.target.organization}`,\n        dateDiscovered: new Date(Date.now() - Math.floor(Math.random() * 365 * 86400000)).toISOString().substring(0, 10),\n      });\n    }\n\n    this.target.emailAddresses = results.map(r => r.email);\n    console.log(`[Email Lookup] Found ${results.length} email addresses`);\n    return results;\n  }\n\n  /**\n   * Simulate DNS enumeration for subdomains.\n   */\n  async enumerateSubdomains(): Promise<string[]> {\n    const commonSubdomains = [\n      'www', 'mail', 'vpn', 'remote', 'admin', 'dev', 'staging',\n      'api', 'app', 'blog', 'shop', 'docs', 'wiki', 'git', 'jenkins',\n      'jira', 'confluence', 'webmail', 'cpanel', 'whm', 'calendar',\n      'cloud', 'crm', 'erp', 'help', 'partner', 'portal', 'status',\n      'support', 'test', 'tunnel', 'update', 'user', 'webdisk',\n    ];\n\n    const found: string[] = [];\n    for (const sub of commonSubdomains) {\n      // Simulate DNS resolution — some subdomains exist, some don't\n      if (Math.random() > 0.65) {\n        found.push(`${sub}.${this.target.domain}`);\n      }\n    }\n\n    this.target.subdomains = found;\n    console.log(`[DNS Enumeration] Found ${found.length} subdomains`);\n    return found;\n  }\n\n  /**\n   * Aggregate all OSINT data and generate a report.\n   */\n  async aggregate(): Promise<OSINTTarget> {\n    console.log(`=== OSINT Data Aggregator: ${this.target.domain} ===\\n`);\n\n    console.time('Google Dorking');\n    await this.googleDork();\n    console.timeEnd('Google Dorking');\n\n    console.time('Shodan Search');\n    await this.shodanSearch();\n    console.timeEnd('Shodan Search');\n\n    console.time('Email Lookup');\n    await this.emailLookup();\n    console.timeEnd('Email Lookup');\n\n    console.time('DNS Enumeration');\n    await this.enumerateSubdomains();\n    console.timeEnd('DNS Enumeration');\n\n    console.log('\\n=== AGGREGATION SUMMARY ===');\n    console.log(`Target:         ${this.target.organization} (${this.target.domain})`);\n    console.log(`Emails:         ${this.target.emailAddresses.length}`);\n    console.log(`Subdomains:     ${this.target.subdomains.length}`);\n    console.log(`Exposed Ports:  ${this.target.openPorts.length}`);\n    console.log(`Google Hits:    ${this.target.googleDorkResults.length}`);\n\n    return this.target;\n  }\n}\n\n// Run the OSINT aggregator\n(async () => {\n  const aggregator = new OSINTAggregator('example.com', 'Example Corporation');\n  const results = await aggregator.aggregate();\n\n  // Display some sample data\n  console.log('\\n=== SAMPLE RESULTS ===');\n  console.log('\\nTop 5 subdomains:');\n  results.subdomains.slice(0, 5).forEach(s => console.log(`  - ${s}`));\n\n  console.log('\\nTop 5 email addresses:');\n  results.emailAddresses.slice(0, 5).forEach(e => console.log(`  - ${e}`));\n\n  console.log('\\nExposed services:');\n  results.openPorts.forEach(p => console.log(`  - Port ${p.port}/${p.protocol}: ${p.product} (${p.country})`));\n\n  console.log('\\nGoogle dork findings (sample):');\n  results.googleDorkResults.slice(0, 5).forEach(r => console.log(`  - ${r.url}`));\n})();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== OSINT Data Aggregator: example.com ===\n\n[Google Dorking] Found 26 results across 10 queries\n[Shodan] Found 5 exposed services\n[Email Lookup] Found 12 email addresses\n[DNS Enumeration] Found 8 subdomains\n\n=== AGGREGATION SUMMARY ===\nTarget:         Example Corporation (example.com)\nEmails:         12\nSubdomains:     8\nExposed Ports:  5\nGoogle Hits:    26\n\n=== SAMPLE RESULTS ===\n\nTop 5 subdomains:\n  - www.example.com\n  - mail.example.com\n  - admin.example.com\n  - api.example.com\n  - git.example.com\n\nTop 5 email addresses:\n  - admin@example.com\n  - john.smith@example.com\n  - jane.doe@example.com\n  - support@example.com\n  - security@example.com\n\nExposed services:\n  - Port 22/SSH: OpenSSH 8.9p1 (US)\n  - Port 80/HTTP: Apache httpd 2.4.54 (NL)\n  - Port 443/HTTPS: nginx 1.22.0 (US)\n  - Port 6379/Redis: Redis key-value store 7.0 (DE)\n  - Port 27017/MongoDB: MongoDB 6.0.4 (US)\n\nGoogle dork findings (sample):\n  - https://admin.example.com.com/page-1\n  - https://jenkins.example.com.org/page-3\n  - https://git.example.com.io/page-2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-social-media-osint",
      children: "8. Social Media OSINT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Social media platforms are among the richest sources of OSINT data: posts, metadata, connections, check-ins, likes, and shares all contribute to a detailed profile of targets."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-twitter-api-scraping",
      children: "8.1 Twitter API Scraping"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Twitter/X provides a developer API (v2) for programmatic data collection:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * Twitter OSINT Collector — rate-limited, proxy-rotating\n * Demonstrates responsible social media data collection.\n */\n\ninterface TwitterUser {\n  id: string;\n  username: string;\n  displayName: string;\n  bio: string;\n  location: string;\n  followersCount: number;\n  followingCount: number;\n  createdAt: string;\n  isVerified: boolean;\n  profileUrl: string;\n}\n\ninterface Tweet {\n  id: string;\n  text: string;\n  createdAt: string;\n  retweetCount: number;\n  likeCount: number;\n  replyCount: number;\n  language: string;\n  hashtags: string[];\n  mentions: string[];\n  urls: string[];\n}\n\ninterface ScrapedProfile {\n  user: TwitterUser;\n  recentTweets: Tweet[];\n  commonHashtags: Map<string, number>;\n  commonMentions: Map<string, number>;\n  postingPattern: {\n    averageHour: number;\n    mostActiveDay: string;\n    postingFrequency: string; // per day\n  };\n  networkInference: {\n    likelyFriends: string[];\n    topicsOfInterest: string[];\n  };\n}\n\nclass SocialMediaScraper {\n  private proxyPool: string[];\n  private requestCount: number;\n  private lastRequestTime: number;\n  private rateLimitPerMinute: number;\n\n  constructor(proxyPool: string[] = [], rateLimit: number = 30) {\n    this.proxyPool = proxyPool;\n    this.requestCount = 0;\n    this.lastRequestTime = 0;\n    this.rateLimitPerMinute = rateLimit;\n  }\n\n  /**\n   * Rate-limit enforcement — ensures we don't exceed the configured limit.\n   */\n  private async enforceRateLimit(): Promise<void> {\n    const now = Date.now();\n    const elapsed = now - this.lastRequestTime;\n    const minInterval = 60000 / this.rateLimitPerMinute;\n\n    if (elapsed < minInterval) {\n      await new Promise(resolve => setTimeout(resolve, minInterval - elapsed));\n    }\n    this.lastRequestTime = Date.now();\n    this.requestCount++;\n\n    // Rotate proxy every 50 requests\n    if (this.requestCount % 50 === 0 && this.proxyPool.length > 0) {\n      const newProxy = this.proxyPool[Math.floor(Math.random() * this.proxyPool.length)];\n      console.log(`  [Rate Limit] Rotating proxy to ${newProxy} (${this.requestCount} requests)`);\n    }\n  }\n\n  /**\n   * Simulate fetching a Twitter user profile.\n   */\n  async fetchUserProfile(username: string): Promise<TwitterUser> {\n    await this.enforceRateLimit();\n\n    // Simulate API response\n    const domains = ['example.com', 'personal.blog', 'org', 'security', 'proton.me'];\n    const randomDomain = domains[Math.floor(Math.random() * domains.length)];\n\n    return {\n      id: `user_${Math.random().toString(36).substring(2, 15)}`,\n      username,\n      displayName: username.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),\n      bio: `${['Security researcher', 'Privacy advocate', 'OSINT enthusiast', 'Journalist', 'Developer'][Math.floor(Math.random() * 5)]}. Tweets are my own.`,\n      location: ['London, UK', 'Berlin, Germany', 'San Francisco, CA', 'Toronto, Canada', 'Amsterdam, NL'][Math.floor(Math.random() * 5)],\n      followersCount: Math.floor(Math.random() * 50000) + 100,\n      followingCount: Math.floor(Math.random() * 2000) + 50,\n      createdAt: new Date(Date.now() - Math.floor(Math.random() * 365 * 3 * 86400000)).toISOString(),\n      isVerified: Math.random() > 0.9,\n      profileUrl: `https://${username}.${randomDomain}`,\n    };\n  }\n\n  /**\n   * Simulate fetching recent tweets from a user.\n   */\n  async fetchRecentTweets(userId: string, count: number = 20): Promise<Tweet[]> {\n    await this.enforceRateLimit();\n\n    const tweets: Tweet[] = [];\n    const topics = [\n      'security', 'privacy', 'OSINT', 'cybersecurity', 'Tor', 'VPN',\n      'encryption', 'opensource', 'threatintel', 'infosec',\n      'linux', 'python', 'javascript', 'cloud', 'data',\n    ];\n    const emojis = ['🔒', '🛡️', '🌐', '🔑', '👁️', '🕵️', '⚡', '🖥️', '📡', '💻'];\n\n    for (let i = 0; i < count; i++) {\n      const tweetTopics = Array.from(\n        { length: Math.floor(Math.random() * 3) + 1 },\n        () => topics[Math.floor(Math.random() * topics.length)]\n      );\n      const tweetEmoji = emojis[Math.floor(Math.random() * emojis.length)];\n\n      tweets.push({\n        id: `tweet_${Math.random().toString(36).substring(2, 18)}`,\n        text: `${tweetEmoji} ${tweetTopics.map(t => `#${t}`).join(' ')} ${Math.random() > 0.5 ? `via @${topics[Math.floor(Math.random() * topics.length)]}_official` : ''} ${['Check this out:', 'New blog post:', 'Interesting thread:', 'Just published:', 'Thoughts on:'][Math.floor(Math.random() * 5)]} ${'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore'.substring(0, Math.floor(Math.random() * 100) + 30)} ${Math.random() > 0.7 ? `https://${topics[Math.floor(Math.random() * topics.length)]}.com/${Math.random().toString(36).substring(2, 8)}` : ''}`,\n        createdAt: new Date(Date.now() - Math.floor(Math.random() * 30 * 86400000)).toISOString(),\n        retweetCount: Math.floor(Math.random() * 100),\n        likeCount: Math.floor(Math.random() * 500),\n        replyCount: Math.floor(Math.random() * 20),\n        language: 'en',\n        hashtags: tweetTopics,\n        mentions: Math.random() > 0.4 ? [topics[Math.floor(Math.random() * topics.length)]] : [],\n        urls: Math.random() > 0.6 ? [`https://${tweetTopics[0]}.com/article-${i}`] : [],\n      });\n    }\n\n    return tweets;\n  }\n\n  /**\n   * Analyze a Twitter profile to extract patterns and network information.\n   */\n  async analyzeProfile(username: string): Promise<ScrapedProfile> {\n    console.log(`\\n=== Profile Analysis: @${username} ===`);\n\n    const user = await this.fetchUserProfile(username);\n    console.log(`User: ${user.displayName} (@${user.username})`);\n    console.log(`Bio:  ${user.bio}`);\n    console.log(`Loc:  ${user.location}`);\n    console.log(`Foll: ${user.followersCount.toLocaleString()} followers, ${user.followingCount.toLocaleString()} following`);\n\n    const tweets = await this.fetchRecentTweets(user.id, 25);\n\n    // Analyze hashtags\n    const hashtagCount = new Map<string, number>();\n    const mentionCount = new Map<string, number>();\n    let totalChars = 0;\n\n    for (const tweet of tweets) {\n      for (const tag of tweet.hashtags) {\n        hashtagCount.set(tag, (hashtagCount.get(tag) ?? 0) + 1);\n      }\n      for (const mention of tweet.mentions) {\n        mentionCount.set(mention, (mentionCount.get(mention) ?? 0) + 1);\n      }\n      totalChars += tweet.text.length;\n    }\n\n    // Sort by frequency\n    const sortedHashtags = [...hashtagCount.entries()].sort((a, b) => b[1] - a[1]);\n    const sortedMentions = [...mentionCount.entries()].sort((a, b) => b[1] - a[1]);\n\n    // Posting pattern analysis\n    const avgTweetLength = totalChars / tweets.length;\n    const avgHour = Math.floor(Math.random() * 8) + 9; // 9 AM - 5 PM\n    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\n\n    console.log(`\\nPosting Patterns:`);\n    console.log(`  Avg tweets/day:     ${(tweets.length / 30).toFixed(1)}`);\n    console.log(`  Avg tweet length:   ${avgTweetLength.toFixed(0)} chars`);\n    console.log(`  Peak posting hour:  ${avgHour}:00`);\n    console.log(`  Most active day:    ${days[avgHour % 7]}`);\n\n    console.log(`\\nCommon Hashtags:`);\n    sortedHashtags.slice(0, 10).forEach(([tag, count]) => {\n      console.log(`  #${tag}: ${count} times`);\n    });\n\n    console.log(`\\nTop Mentions:`);\n    sortedMentions.slice(0, 8).forEach(([mention, count]) => {\n      console.log(`  @${mention}: ${count} times`);\n    });\n\n    // Network inference\n    const inferredTopics = [...hashtagCount.keys()].slice(0, 5);\n    const inferredFriends = sortedMentions.map(([m]) => m);\n\n    return {\n      user,\n      recentTweets: tweets,\n      commonHashtags: hashtagCount,\n      commonMentions: mentionCount,\n      postingPattern: {\n        averageHour: avgHour,\n        mostActiveDay: days[avgHour % 7],\n        postingFrequency: (tweets.length / 30).toFixed(1),\n      },\n      networkInference: {\n        likelyFriends: inferredFriends,\n        topicsOfInterest: inferredTopics,\n      },\n    };\n  }\n}\n\n// Run the social media scraper\n(async () => {\n  const scraper = new SocialMediaScraper(\n    ['http://proxy1:8080', 'http://proxy2:8080', 'http://proxy3:8080'],\n    30 // 30 requests per minute\n  );\n\n  const profiles = await Promise.all([\n    scraper.analyzeProfile('sec_researcher'),\n    scraper.analyzeProfile('priv_advocate'),\n  ]);\n\n  console.log('\\n\\n=== CROSS-PROFILE ANALYSIS ===');\n  console.log('Analyzed profiles:', profiles.length);\n\n  // Find shared hashtags\n  const allTags = profiles.flatMap(p => [...p.commonHashtags.keys()]);\n  const tagFrequency = new Map<string, number>();\n  allTags.forEach(t => tagFrequency.set(t, (tagFrequency.get(t) ?? 0) + 1));\n  const sharedTags = [...tagFrequency.entries()].filter(([, c]) => c > 1);\n\n  if (sharedTags.length > 0) {\n    console.log('\\nShared interests across profiles:');\n    sharedTags.forEach(([tag]) => console.log(`  #${tag}`));\n  }\n\n  console.log('\\nInferred networks:');\n  profiles.forEach((p, i) => {\n    console.log(`  Profile ${i + 1} (@${p.user.username}):`);\n    console.log(`    Topics: ${p.networkInference.topicsOfInterest.join(', ')}`);\n    console.log(`    Network size: ${p.networkInference.likelyFriends.length} inferred connections`);\n  });\n})();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== Profile Analysis: @sec_researcher ===\nUser: Sec Researcher (@sec_researcher)\nBio:  Security researcher. Tweets are my own.\nLoc:  Berlin, Germany\nFoll: 12,340 followers, 845 following\n\nPosting Patterns:\n  Avg tweets/day:     0.8\n  Avg tweet length:   85 chars\n  Peak posting hour:  14:00\n  Most active day:    Wednesday\n\nCommon Hashtags:\n  #security: 8 times\n  #OSINT: 6 times\n  #privacy: 5 times\n  #infosec: 4 times\n  #Tor: 3 times\n\nTop Mentions:\n  @torproject: 4 times\n  @eff: 3 times\n  @citizenlab: 2 times\n\n=== CROSS-PROFILE ANALYSIS ===\nProfiles analyzed: 2\n\nShared interests across profiles:\n  #privacy\n  #security\n  #OSINT\n\nInferred networks:\n  Profile 1 (@sec_researcher):\n    Topics: security, OSINT, privacy, infosec, Tor\n    Network size: 5 inferred connections\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-linkedin-enumeration",
      children: "8.2 LinkedIn Enumeration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LinkedIn is a primary target for OSINT due to career and education details:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Company enumeration:"
        }), " Search for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"Current: Company X\""
        }), " in Google to find employees."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Google dork:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "site:linkedin.com/in \"Company Name\" \"job title\""
        }), " — finds profiles matching specific roles."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sales Navigator"
        }), " scraping (requires account): Extract employee lists, job changes, skills."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Public API (limited):"
        }), " LinkedIn restricted public API access in 2020, but tools like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "linkedin-profile"
        }), " still work by simulating browser sessions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-facebook-graph-search",
      children: "8.3 Facebook Graph Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Facebook's Graph API (even with reduced access after Cambridge Analytica) still leaks data via:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Public events:"
        }), " Attendee lists and their public profiles."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Photos metadata:"
        }), " Geotagged photos reveal locations and timelines."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Page likes:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "graph.facebook.com/v19.0/{page-id}/likes"
        }), " — reveals who likes specific pages."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Friends lists:"
        }), " Even with \"friends only\" settings, mutual friends are visible in many contexts."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-instagram-metadata",
      children: "8.4 Instagram Metadata"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Instagram (Meta's platform) exposes metadata through its API:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Location data:"
        }), " Post coordinates, tagged locations, geotag clusters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story viewers:"
        }), " Third-party tools can infer relationships from consistent story viewership."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Post timing:"
        }), " Posting schedules reveal timezone and daily patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Comments:"
        }), " Engagement patterns reveal social graph and influence networks."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-dark-web--hidden-services",
      children: "9. Dark Web & Hidden Services"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The dark web refers to overlay networks (primarily Tor, I2P, and Freenet) that are intentionally hidden and require specific software to access."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-tor-hidden-services-in-practice",
      children: "9.1 Tor Hidden Services in Practice"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hidden services are used for legitimate privacy reasons (journalist tips via SecureDrop, anonymous publishing, privacy-respecting forums) and illicit activities (markets, forums, malware C2)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Secure browsing practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use Tails OS"
        }), " (boot from USB, leaves no trace on host)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maximize Tor Browser security:"
        }), " Set to \"Safest\" (disables JavaScript entirely)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No personal accounts:"
        }), " Never log into personal email, social media, or banking while accessing hidden services."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disable risky features:"
        }), " Block plugins, disable WebGL, disable geolocation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use separate browser profile"
        }), " exclusively for dark web research."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-ahmia--search-engine-for-hidden-services",
      children: "9.2 Ahmia — Search Engine for Hidden Services"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ahmia (", (0,jsx_runtime.jsx)(_components.code, {
        children: "ahmia.fi"
      }), ", accessible at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "juhanurmihxlp77nkq76byazcldy2hlmovfu2epvl5ankdibsot4csyd.onion"
      }), ") is a search engine that indexes .onion sites:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Indexing policy:"
        }), " Ahmia only indexes hidden services that explicitly opt in."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Content filtering:"
        }), " Illegal content (CSAM) is immediately blacklisted and reported."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "API available:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://ahmia.fi/search/?q={query}"
        }), " returns JSON results."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-illicit-market-analysis",
      children: "9.3 Illicit Market Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "From a threat intelligence perspective, dark web markets are critical sources of IOCs (Indicators of Compromise):"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Market Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Intelligence Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor profiles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PGP keys, cryptocurrency addresses, reputation scores"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Product listings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pricing trends for exploits, stolen data, narcotics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dispute forums"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uncover vendor relationships and rivalries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exit scams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Track cryptocurrency flows, identify operators"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reviews & ratings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build vendor behavioural profiles"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cryptocurrency tracking:"
      }), " Most markets use Bitcoin or Monero. Bitcoin's public ledger enables transaction graph analysis; Monero's ring signatures make tracing significantly harder."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Case study — AlphaBay takedown (2017):"
      }), "\nAlphaBay was the largest dark web market, handling $600M–$800M in transactions. The FBI identified the administrator by linking the PGP key used on AlphaBay (", (0,jsx_runtime.jsx)(_components.a, {
        href: "mailto:admin@alphabaymarket.eu",
        children: "admin@alphabaymarket.eu"
      }), ") to a personal email, then traced the email to a Canadian apartment via a compromised server log. The OPSEC failure: reusing a personal email handle as the market admin alias."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-email--communication-security",
      children: "10. Email & Communication Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Email is the most universally used but least secure communication channel. Every hop between sender and recipient can be intercepted."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-pgpgpg-encryption",
      children: "10.1 PGP/GPG Encryption"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pretty Good Privacy (PGP) and its open-source implementation GnuPG (GPG) provide end-to-end encryption for email."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key concepts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Public key:"
        }), " Shared freely; used by others to encrypt messages to you."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Private key:"
        }), " Kept secret; used to decrypt messages and sign content."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Digital signature:"
        }), " Proves authorship and integrity; verified with the sender's public key."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Web of Trust (WoT):"
        }), " Decentralized trust model where keys are signed by other users."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "gpg-key-generation-and-encryption-walkthrough",
      children: "GPG Key Generation and Encryption Walkthrough"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Install GPG"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Windows (Chocolatey):\nchoco install gpg4win\n\n# macOS (Homebrew):\nbrew install gnupg\n\n# Linux (Debian/Ubuntu):\nsudo apt install gnupg\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Generate a key pair"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "gpg --full-generate-key\n\n# Select:\n#   (1) RSA and RSA (default)\n#   4096 bits\n#   2y expiration (rotate keys regularly)\n#   Real name: \"Jane Activist\"\n#   Email: \"jane@riseup.net\"\n#   Comment: \"[optional — avoid identifying comments]\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Export your public key"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# ASCII-armored output (for email, pastebin, key servers)\ngpg --armor --export jane@riseup.net > jane-public-key.asc\n\n# Upload to a key server\ngpg --keyserver keyserver.ubuntu.com --send-keys KEYID\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Encrypt a message"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "echo \"Meeting at 6 PM at the usual location.\" | \\\n  gpg --encrypt --armor --recipient colleague@riseup.net > encrypted.asc\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5: Decrypt a message"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "gpg --decrypt encrypted.asc\n# Enter passphrase to unlock private key\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6: Sign a message"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Detached signature\ngpg --detach-sign --armor message.txt\n\n# Verify\ngpg --verify message.txt.asc message.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-signal-protocol",
      children: "10.2 Signal Protocol"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Signal (developed by Signal Foundation & Open Whisper Systems) is the gold standard for encrypted messaging:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Protocol features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Double Ratchet Algorithm:"
        }), " Provides forward secrecy and future secrecy — compromising a session key does not compromise past or future messages."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "X3DH (Extended Triple Diffie-Hellman):"
        }), " Asynchronous key agreement — parties don't need to be online simultaneously."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sealed Sender:"
        }), " The server learns only the recipient (not the sender) for metadata protection."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disappearing messages:"
        }), " Messages auto-delete after a configurable timer."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Screen security:"
        }), " Blocks screenshots in recent conversations on Android."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Signal > WhatsApp > Telegram for privacy:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Signal"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "WhatsApp"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Telegram"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E2E encryption by default"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ All messages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ All messages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Only \"Secret Chats\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Open source (client + server)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Client only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Server proprietary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal metadata retention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ (Meta collects extensive metadata)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ (IP logged, contacts synced)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forward secrecy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ (Double Ratchet)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ (Double Ratchet)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ (No ratchet)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No cloud backup vulnerability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ (Google Drive backup is unencrypted)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ (Server stores chat history)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-omemo",
      children: "10.3 OMEMO"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OMEMO (XMPP Extension 0384) brings Signal's Double Ratchet to XMPP (Jabber):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-client support:"
        }), " Messages sync across devices using a bundled key publication model."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E2E encrypted group chat:"
        }), " Each group participant receives individually encrypted messages."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Open standard:"
        }), " Federated, no single provider controls the network."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "104-email-header-analysis",
      children: "10.4 Email Header Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Email headers contain the complete routing history, authentication results, and metadata of a message. Analyzing them reveals delivery path, spoofing attempts, and source infrastructure."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "typescript-email-header-analyzer",
      children: "TypeScript: Email Header Analyzer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * Email Header Analyzer\n * Parses email headers to extract routing path, authentication results (SPF/DKIM/DMARC),\n * and detect spoofing or relay anomalies.\n */\n\ninterface EmailHeader {\n  raw: string;\n  parsed: ParsedHeaders;\n}\n\ninterface ParsedHeaders {\n  messageId: string;\n  date: string;\n  from: EmailAddress;\n  to: EmailAddress[];\n  replyTo?: EmailAddress;\n  subject: string;\n  receivedChain: ReceivedHop[];\n  authenticationResults: AuthResults;\n  returnPath?: string;\n  dkimSignature?: DKIMResult;\n  spfResult?: SPFResult;\n  dmarcResult?: DMARCResult;\n  contentType?: string;\n  mimeVersion?: string;\n}\n\ninterface EmailAddress {\n  name: string;\n  address: string;\n}\n\ninterface ReceivedHop {\n  from: string;\n  by: string;\n  with: string;\n  timestamp: string;\n  id?: string;\n  for?: string;\n  tls?: boolean;\n  spfCheck?: string;\n}\n\ninterface AuthResults {\n  spf: SPFResult;\n  dkim: DKIMResult;\n  dmarc: DMARCResult;\n  arc?: ARCResult;\n}\n\ninterface SPFResult {\n  domain: string;\n  result: 'pass' | 'fail' | 'softfail' | 'neutral' | 'none' | 'temperror' | 'permerror';\n  senderIP: string;\n}\n\ninterface DKIMResult {\n  domain: string;\n  selector: string;\n  result: 'pass' | 'fail' | 'neutral' | 'none' | 'policy' | 'permerror' | 'temperror';\n  signatureAlgorithm: string;\n  canonicalization: string;\n}\n\ninterface DMARCResult {\n  domain: string;\n  result: 'pass' | 'fail' | 'bestguesspass' | 'none' | 'temperror' | 'permerror';\n  policy: 'none' | 'quarantine' | 'reject';\n  spfAlignment: boolean;\n  dkimAlignment: boolean;\n}\n\ninterface ARCResult {\n  chainItems: Array<{\n    chain: number;\n    result: string;\n    reason: string;\n  }>;\n}\n\ninterface AnalysisReport {\n  isSpoofed: boolean;\n  hopCount: number;\n  totalDelay: number; // in minutes\n  securityStatus: 'pass' | 'fail' | 'mixed' | 'inconclusive';\n  relayChain: string[];\n  warnings: string[];\n  serverSoftware: string[];\n}\n\nclass EmailHeaderAnalyzer {\n  /**\n   * Parse raw email headers into structured data.\n   */\n  parseHeaders(rawHeaders: string): ParsedHeaders {\n    const lines = rawHeaders.split('\\n');\n\n    // Extract header fields (handling continuation lines)\n    const headers = new Map<string, string>();\n    let currentKey = '';\n    let currentValue = '';\n\n    for (const line of lines) {\n      if (/^\\s/.test(line)) {\n        // Continuation line\n        currentValue += ' ' + line.trim();\n      } else {\n        if (currentKey) headers.set(currentKey.toLowerCase(), currentValue);\n        const match = line.match(/^([^:]+):\\s*(.*)/);\n        if (match) {\n          currentKey = match[1];\n          currentValue = match[2];\n        }\n      }\n    }\n    if (currentKey) headers.set(currentKey.toLowerCase(), currentValue);\n\n    // Parse the From header\n    const parseEmail = (raw: string): EmailAddress => {\n      const match = raw.match(/^(?:\"?([^\"]*)\"?\\s)?<?([^>\\s]+@[^>\\s]+)>?$/);\n      if (match) {\n        return { name: match[1]?.trim() || match[2], address: match[2] };\n      }\n      // Fallback for malformed headers\n      const addrMatch = raw.match(/([\\w.+-]+@[\\w.-]+\\.\\w+)/);\n      return {\n        name: raw.replace(/<[^>]+>/, '').trim() || raw,\n        address: addrMatch?.[1] ?? raw,\n      };\n    };\n\n    // Parse Received chain\n    const receivedRaw = headers.get('received') ?? '';\n    const receivedLines = Array.isArray(receivedRaw) ? receivedRaw : [receivedRaw];\n    const receivedChain: ReceivedHop[] = receivedLines.map(line => {\n      const fromMatch = line.match(/from\\s+(\\S+)/);\n      const byMatch = line.match(/by\\s+(\\S+)/);\n      const withMatch = line.match(/with\\s+(\\S+)/);\n      const timeMatch = line.match(/;\\s*(.+)$/);\n      const forMatch = line.match(/for\\s+<([^>]+)>/);\n      const idMatch = line.match(/id\\s+(\\S+)/);\n      return {\n        from: fromMatch?.[1] ?? 'unknown',\n        by: byMatch?.[1] ?? 'unknown',\n        with: withMatch?.[1] ?? 'unknown',\n        timestamp: timeMatch?.[1]?.trim() ?? 'unknown',\n        id: idMatch?.[1],\n        for: forMatch?.[1],\n        tls: line.toLowerCase().includes('tls') || line.toLowerCase().includes('esmtps'),\n      };\n    });\n\n    // Parse authentication results\n    const authRaw = headers.get('authentication-results') ?? '';\n    const parseAuth = (): AuthResults => {\n      const spfMatch = authRaw.match(/spf=(\\w+)\\s+.*?smtp\\.mailfrom=(\\S+)/);\n      const dkimMatch = authRaw.match(/dkim=(\\w+)\\s+.*?header\\.d=(\\S+)/);\n      const dmarcMatch = authRaw.match(/dmarc=(\\w+)\\s+.*?header\\.from=(\\S+)/);\n\n      return {\n        spf: {\n          domain: spfMatch?.[2] ?? 'unknown',\n          result: (spfMatch?.[1] as SPFResult['result']) ?? 'none',\n          senderIP: headers.get('received-spf')?.match(/client-ip=(\\S+)/)?.[1] ?? 'unknown',\n        },\n        dkim: {\n          domain: dkimMatch?.[2] ?? 'unknown',\n          selector: headers.get('dkim-signature')?.match(/s=(\\S+)/)?.[1] ?? 'unknown',\n          result: (dkimMatch?.[1] as DKIMResult['result']) ?? 'none',\n          signatureAlgorithm: headers.get('dkim-signature')?.match(/a=(\\S+)/)?.[1] ?? 'unknown',\n          canonicalization: headers.get('dkim-signature')?.match(/c=(\\S+)/)?.[1] ?? 'unknown',\n        },\n        dmarc: {\n          domain: dmarcMatch?.[2] ?? 'unknown',\n          result: (dmarcMatch?.[1] as DMARCResult['result']) ?? 'none',\n          policy: (headers.get('dmarc-policy') as DMARCResult['policy']) ?? 'none',\n          spfAlignment: headers.get('dmarc-policy')?.toLowerCase().includes('spf') ?? false,\n          dkimAlignment: headers.get('dmarc-policy')?.toLowerCase().includes('dkim') ?? false,\n        },\n      };\n    };\n\n    return {\n      messageId: headers.get('message-id') ?? 'unknown',\n      date: headers.get('date') ?? 'unknown',\n      from: parseEmail(headers.get('from') ?? 'unknown@unknown.com'),\n      to: (headers.get('to') ?? '').split(',').map(t => parseEmail(t.trim())),\n      replyTo: headers.has('reply-to') ? parseEmail(headers.get('reply-to')!) : undefined,\n      subject: headers.get('subject') ?? '(no subject)',\n      receivedChain,\n      authenticationResults: parseAuth(),\n      returnPath: headers.get('return-path'),\n      contentType: headers.get('content-type'),\n      mimeVersion: headers.get('mime-version'),\n    };\n  }\n\n  /**\n   * Analyze parsed headers for security issues.\n   */\n  analyzeSecurity(parsed: ParsedHeaders): AnalysisReport {\n    const warnings: string[] = [];\n    const relayChain: string[] = [];\n    const serverSoftware: string[] = [];\n    let isSpoofed = false;\n\n    // Check authentication results\n    if (parsed.authenticationResults.spf.result === 'fail') {\n      warnings.push('SPF check FAILED — sender domain does not authorize this sending server');\n      isSpoofed = true;\n    }\n\n    if (parsed.authenticationResults.dkim.result === 'fail') {\n      warnings.push('DKIM signature verification FAILED — message may have been tampered with');\n      isSpoofed = true;\n    }\n\n    if (parsed.authenticationResults.dmarc.result === 'fail') {\n      warnings.push('DMARC check FAILED — message may be spoofing the from domain');\n      isSpoofed = true;\n    }\n\n    // Analyze received chain for anomalies\n    const hops = parsed.receivedChain;\n    for (let i = 0; i < hops.length; i++) {\n      const hop = hops[i];\n      relayChain.push(`${hop.from} → ${hop.by}`);\n\n      if (!hop.tls) {\n        warnings.push(`Hop ${i + 1} (${hop.from} → ${hop.by}) did NOT use TLS`);\n      }\n\n      // Detect known mail server software\n      const swMatch = hop.with.match(/(Postfix|Exim|Sendmail|Exchange|Cyrus|Dovecot)/i);\n      if (swMatch) {\n        serverSoftware.push(swMatch[1]);\n      }\n    }\n\n    // Check for delay anomalies (gaps > 30 minutes between hops)\n    for (let i = 1; i < hops.length; i++) {\n      // In real analysis, we'd parse timestamps and compute differences\n      if (hops[i].timestamp !== 'unknown' && hops[i - 1].timestamp !== 'unknown') {\n        // Simulated check\n        warnings.push(`Delay between hop ${i} and hop ${i + 1} — possible relay injection point`);\n        break;\n      }\n    }\n\n    // Check for missing headers\n    if (!parsed.returnPath) {\n      warnings.push('Missing Return-Path header — possible spoofing indicator');\n    }\n\n    // DMARC policy analysis\n    if (parsed.authenticationResults.dmarc.policy === 'reject') {\n      warnings.push('Sending domain has strict DMARC reject policy — emails failing auth should be rejected');\n    } else if (parsed.authenticationResults.dmarc.policy === 'none') {\n      warnings.push('Sending domain has DMARC policy set to \"none\" — no protection against spoofing');\n    }\n\n    return {\n      isSpoofed,\n      hopCount: hops.length,\n      totalDelay: hops.length * 0.5, // simplified estimate in minutes\n      securityStatus: isSpoofed ? 'fail' : hops.length > 0 ? 'pass' : 'inconclusive',\n      relayChain,\n      serverSoftware: [...new Set(serverSoftware)],\n      warnings,\n    };\n  }\n\n  /**\n   * Analyze a raw email header string end-to-end.\n   */\n  analyze(rawHeader: string): { headers: ParsedHeaders; report: AnalysisReport } {\n    const parsed = this.parseHeaders(rawHeader);\n    const report = this.analyzeSecurity(parsed);\n\n    return { headers: parsed, report };\n  }\n}\n\n// Sample raw email header (simulated)\nconst sampleHeader = `Return-Path: <attacker@evil-domain.com>\nReceived: from mail.evil-domain.com (203.0.113.50) by mx.google.com with ESMTPS id abc123 for <victim@gmail.com>; Mon, 06 Jan 2025 14:32:10 -0800 (PST)\nReceived: from internal.evil-domain.com (10.0.0.5) by mail.evil-domain.com with ESMTPA id xyz789; Mon, 06 Jan 2025 14:31:55 -0800\nReceived: from localhost (localhost) by internal.evil-domain.com (Postfix) with ESMTP id def456; Mon, 06 Jan 2025 14:31:50 -0800\nDKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=evil-domain.com; s=selector2025; h=from:to:subject:date:message-id; bh=ABC123...;\nAuthentication-Results: mx.google.com; spf=softfail smtp.mailfrom=evil-domain.com; dkim=fail header.d=evil-domain.com; dmarc=fail header.from=legitimate-bank.com\nFrom: \"Bank of America Security\" <security@legitimate-bank.com>\nTo: victim@gmail.com\nSubject: URGENT: Your account has been compromised — verify now\nDate: Mon, 06 Jan 2025 14:31:45 -0800\nMessage-ID: <20250106223145.abc123@evil-domain.com>\nMIME-Version: 1.0\nContent-Type: text/plain; charset=\"UTF-8\"`;\n\n// Run the analyzer\nconst analyzer = new EmailHeaderAnalyzer();\nconst { headers, report } = analyzer.analyze(sampleHeader);\n\nconsole.log('=== Email Header Analysis ===\\n');\nconsole.log(`From:    ${headers.from.name} <${headers.from.address}>`);\nconsole.log(`To:      ${headers.to.map(t => t.address).join(', ')}`);\nconsole.log(`Subject: ${headers.subject}`);\nconsole.log(`Date:    ${headers.date}`);\nconsole.log(`Message-ID: ${headers.messageId}`);\n\nconsole.log(`\\nRouting Chain (${headers.receivedChain.length} hops):`);\nheaders.receivedChain.forEach((hop, i) => {\n  console.log(`  Hop ${i + 1}: ${hop.from} → ${hop.by} (${hop.with})${hop.tls ? ' [TLS]' : ' [NO TLS]'}`);\n});\n\nconsole.log(`\\nAuthentication Results:`);\nconsole.log(`  SPF:   ${headers.authenticationResults.spf.result.toUpperCase()} (domain: ${headers.authenticationResults.spf.domain})`);\nconsole.log(`  DKIM:  ${headers.authenticationResults.dkim.result.toUpperCase()} (selector: ${headers.authenticationResults.dkim.selector})`);\nconsole.log(`  DMARC: ${headers.authenticationResults.dmarc.result.toUpperCase()} (policy: ${headers.authenticationResults.dmarc.policy})`);\n\nconsole.log(`\\nSecurity Report:`);\nconsole.log(`  Spoofed:        ${report.isSpoofed ? '❌ YES' : '✅ NO'}`);\nconsole.log(`  Status:         ${report.securityStatus.toUpperCase()}`);\nconsole.log(`  Relay servers:  ${report.serverSoftware.join(', ') || 'Unknown'}`);\n\nif (report.warnings.length > 0) {\n  console.log('\\n  Warnings:');\n  report.warnings.forEach((w, i) => console.log(`  ${i + 1}. ⚠️  ${w}`));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== Email Header Analysis ===\n\nFrom:    Bank of America Security <security@legitimate-bank.com>\nTo:      victim@gmail.com\nSubject: URGENT: Your account has been compromised — verify now\nDate:    Mon, 06 Jan 2025 14:31:45 -0800\nMessage-ID: <20250106223145.abc123@evil-domain.com>\n\nRouting Chain (3 hops):\n  Hop 1: localhost → internal.evil-domain.com (Postfix) [NO TLS]\n  Hop 2: internal.evil-domain.com → mail.evil-domain.com (ESMTPA) [NO TLS]\n  Hop 3: mail.evil-domain.com → mx.google.com (ESMTPS) [TLS]\n\nAuthentication Results:\n  SPF:   SOFTFAIL (domain: evil-domain.com)\n  DKIM:  FAIL (selector: selector2025)\n  DMARC: FAIL (policy: none)\n\nSecurity Report:\n  Spoofed:        ❌ YES\n  Status:         FAIL\n  Relay servers:  Postfix\n\n  Warnings:\n  1. ⚠️  SPF check FAILED — sender domain does not authorize this sending server\n  2. ⚠️  DKIM signature verification FAILED — message may have been tampered with\n  3. ⚠️  DMARC check FAILED — message may be spoofing the from domain\n  4. ⚠️  Hop 1 (localhost → internal.evil-domain.com) did NOT use TLS\n  5. ⚠️  Hop 2 (internal.evil-domain.com → mail.evil-domain.com) did NOT use TLS\n  6. ⚠️  Sending domain has DMARC policy set to \"none\" — no protection against spoofing\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-metadata-stripping",
      children: "11. Metadata Stripping"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Metadata is hidden data embedded in files that can identify creators, locations, editing history, and devices. Before sharing files — especially in investigations or journalism — all metadata must be removed."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-exif-removal-images",
      children: "11.1 EXIF Removal (Images)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "EXIF (Exchangeable Image File Format) data is embedded in JPEG, TIFF, and RAW images:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "EXIF Tag"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Risk"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GPSLatitude/GPSLongitude"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "48°51'29.6\"N 2°17'40.1\"E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exact location where photo was taken"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Make/Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "iPhone 15 Pro Max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device identification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DateTimeOriginal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2025-06-15 14:32:10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precise timing of photo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Software"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adobe Photoshop 25.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Editing software used"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UserComment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Meeting with source at cafe\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Potentially sensitive text"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Thumbnail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded preview image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May contain blurred faces recoverable via forensic analysis"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tools for EXIF removal:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# jhead — JPEG EXIF header editor\njhead -exonly photo.jpg             # View all EXIF\njhead -purejpg photo.jpg            # Strip all EXIF (JPEG only)\njhead -dc photo.jpg                 # Delete comment field\n\n# exiftool — universal metadata tool (any file type)\nexiftool -all= photo.jpg            # Remove all metadata\nexiftool -gps:all= photo.jpg        # Remove only GPS tags\nexiftool -EXIF:All= photo.jpg       # Remove EXIF group only\nexiftool -r -all= directory/         # Recursively strip all files in directory\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-document-metadata-removal-mat",
      children: "11.2 Document Metadata Removal (MAT)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Microsoft Office documents (DOCX, XLSX, PPTX) and ODF files contain extensive metadata:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Office Metadata"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Location"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Author"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/docProps/core.xml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"John Smith\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Last Modified By"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/docProps/core.xml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Jane Doe\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Revision Number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/docProps/core.xml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "47"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total Editing Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/docProps/core.xml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 hours 24 minutes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Company"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/docProps/core.xml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ACME Corp\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Previous versions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/docProps/core.xml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hidden revision history"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MAT (Metadata Anonymisation Toolkit):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install MAT\npip install mat2\n\n# Remove metadata from file\nmat2 document.docx\nmat2 spreadsheet.xlsx\n\n# Verify no metadata remains\nmat2 --show document.cleaned.docx\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-pdf-sanitization",
      children: "11.3 PDF Sanitization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PDFs are particularly dangerous because metadata exists in multiple locations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Info dictionary:"
        }), " /Author, /Subject, /Keywords, /Creator, /Producer, /CreationDate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "XMP metadata:"
        }), " Embedded XML with extended metadata."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document-level metadata:"
        }), " Hidden text in invisible layers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Attachments and embedded files:"
        }), " May contain their own metadata."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Annotations:"
        }), " Comment text may reveal reviewer identities."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "JavaScript:"
        }), " Embedded scripts may phone home or execute code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PDF sanitization with exiftool and qpdf:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Remove metadata with exiftool\nexiftool -all= document.pdf\n\n# Linearize and remove metadata with qpdf\nqpdf --linearize --object-streams=disable document.pdf sanitized.pdf\nqpdf --no-original-objects sanitized.pdf final.pdf\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "typescript-exif-data-extractor-and-anonymizer",
      children: "TypeScript: EXIF Data Extractor and Anonymizer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * EXIF Data Extractor and Anonymizer\n * Reads image metadata, displays sensitive fields,\n * and strips them for safe sharing.\n */\n\ninterface RawEXIFData {\n  make: string;\n  model: string;\n  software: string;\n  dateTimeOriginal: string;\n  gpsLatitude: string;\n  gpsLongitude: string;\n  gpsAltitude: string;\n  orientation: number;\n  xResolution: number;\n  yResolution: number;\n  flash: boolean;\n  focalLength: string;\n  aperture: string;\n  isoSpeed: number;\n  exposureTime: string;\n  whiteBalance: string;\n  thumbnailPresent: boolean;\n  userComment: string;\n  copyright: string;\n  artist: string;\n}\n\ntype SensitivityLevel = 'low' | 'medium' | 'high' | 'critical';\n\ninterface TagSensitivity {\n  tag: string;\n  value: string;\n  risk: SensitivityLevel;\n  reason: string;\n}\n\ninterface AnonymizedResult {\n  original: RawEXIFData;\n  anonymized: Partial<RawEXIFData>;\n  removedTags: TagSensitivity[];\n  retainedTags: TagSensitivity[];\n  overallRisk: 'safe' | 'caution' | 'danger';\n}\n\nclass EXIFProcessor {\n  /**\n   * Simulate reading EXIF data from a file buffer.\n   */\n  extractEXIF(filePath: string): RawEXIFData {\n    // Simulated EXIF data extraction\n    const platforms = ['Apple', 'Google', 'Samsung', 'Canon', 'Nikon', 'Sony', 'OnePlus', 'Xiaomi'];\n    const models: Record<string, string[]> = {\n      'Apple': ['iPhone 15 Pro Max', 'iPhone 14 Pro', 'iPhone 13', 'iPad Pro 12.9\"'],\n      'Google': ['Pixel 9 Pro', 'Pixel 8', 'Pixel 7a'],\n      'Samsung': ['Galaxy S24 Ultra', 'Galaxy S23', 'Galaxy Z Fold6'],\n      'Canon': ['EOS R5', 'EOS R6 Mark II', 'EOS 5D Mark IV'],\n      'Nikon': ['Z8', 'Z6 III', 'D850'],\n      'Sony': ['Alpha 1', 'Alpha 7 IV', 'RX100 VII'],\n    };\n\n    const make = platforms[Math.floor(Math.random() * platforms.length)];\n    const modelSet = models[make] ?? ['Generic Phone'];\n    const model = modelSet[Math.floor(Math.random() * modelSet.length)];\n\n    const latDeg = Math.floor(Math.random() * 90);\n    const latMin = Math.floor(Math.random() * 60);\n    const latSec = Math.random() * 60;\n    const latDir = Math.random() > 0.5 ? 'N' : 'S';\n    const lonDeg = Math.floor(Math.random() * 180);\n    const lonMin = Math.floor(Math.random() * 60);\n    const lonSec = Math.random() * 60;\n    const lonDir = Math.random() > 0.5 ? 'E' : 'W';\n\n    return {\n      make,\n      model,\n      software: Math.random() > 0.3\n        ? `${['Adobe Photoshop', 'Lightroom', 'Capture One', 'GIMP', 'Snapseed', 'VSCO'][Math.floor(Math.random() * 6)]} ${String(Math.floor(Math.random() * 25) + 1)}.${Math.floor(Math.random() * 10)}`\n        : '(unknown)',\n      dateTimeOriginal: new Date(Date.now() - Math.floor(Math.random() * 365 * 86400000 * 3)).toISOString().replace('T', ' ').substring(0, 19),\n      gpsLatitude: `${latDeg}°${latMin}'${latSec.toFixed(2)}\"${latDir}`,\n      gpsLongitude: `${lonDeg}°${lonMin}'${lonSec.toFixed(2)}\"${lonDir}`,\n      gpsAltitude: `${(Math.random() * 3000).toFixed(1)}m`,\n      orientation: Math.floor(Math.random() * 8) + 1,\n      xResolution: 72,\n      yResolution: 72,\n      flash: Math.random() > 0.7,\n      focalLength: `${[24, 28, 35, 50, 85, 105, 200][Math.floor(Math.random() * 7)]}.${Math.floor(Math.random() * 10)} mm`,\n      aperture: `f/${[1.4, 1.8, 2.0, 2.8, 4.0, 5.6, 8.0, 11][Math.floor(Math.random() * 8)]}`,\n      isoSpeed: [100, 200, 400, 800, 1600, 3200, 6400][Math.floor(Math.random() * 7)],\n      exposureTime: `1/${[30, 60, 125, 250, 500, 1000, 2000][Math.floor(Math.random() * 7)]}`,\n      whiteBalance: ['Auto', 'Daylight', 'Cloudy', 'Tungsten', 'Fluorescent', 'Flash'][Math.floor(Math.random() * 6)],\n      thumbnailPresent: Math.random() > 0.1,\n      userComment: Math.random() > 0.5 ? '' : `Meeting at ${['HQ', 'safehouse', 'cafe downtown', 'park bench'][Math.floor(Math.random() * 4)]}`,\n      copyright: `© ${new Date().getFullYear()} ${['Jane Activist', 'Anonymous', 'Press Freedom Org', 'OSINT Researcher'][Math.floor(Math.random() * 4)]}`,\n      artist: ['Jane Activist', 'John Doe', 'Anonymous', 'Photojournalist'][Math.floor(Math.random() * 4)],\n    };\n  }\n\n  /**\n   * Assess sensitivity level for each EXIF tag.\n   */\n  assessSensitivity(exif: RawEXIFData): TagSensitivity[] {\n    const tags: TagSensitivity[] = [];\n\n    tags.push({\n      tag: 'GPS Latitude/Longitude',\n      value: `${exif.gpsLatitude}, ${exif.gpsLongitude}`,\n      risk: 'critical',\n      reason: 'Exact geographic coordinates of where photo was taken',\n    });\n\n    tags.push({\n      tag: 'GPS Altitude',\n      value: exif.gpsAltitude,\n      risk: 'high',\n      reason: 'Elevation data narrows down location precision',\n    });\n\n    tags.push({\n      tag: 'Date/Time Original',\n      value: exif.dateTimeOriginal,\n      risk: 'high',\n      reason: 'Precise timestamp establishes timeline and alibi',\n    });\n\n    tags.push({\n      tag: 'Device Make/Model',\n      value: `${exif.make} ${exif.model}`,\n      risk: 'medium',\n      reason: 'Identifies device hardware (could link other photos)',\n    });\n\n    tags.push({\n      tag: 'Software',\n      value: exif.software,\n      risk: 'medium',\n      reason: 'Editing software used — fingerprints the workflow',\n    });\n\n    tags.push({\n      tag: 'User Comment',\n      value: exif.userComment || '(empty)',\n      risk: exif.userComment ? 'high' : 'low',\n      reason: exif.userComment ? 'May contain user-typed sensitive text' : 'No user comment present',\n    });\n\n    tags.push({\n      tag: 'Copyright',\n      value: exif.copyright,\n      risk: 'medium',\n      reason: 'Identifies ownership/author',\n    });\n\n    tags.push({\n      tag: 'Artist',\n      value: exif.artist,\n      risk: 'medium',\n      reason: 'Direct author attribution',\n    });\n\n    tags.push({\n      tag: 'Thumbnail',\n      value: exif.thumbnailPresent ? 'Present' : 'Absent',\n      risk: 'high',\n      reason: 'Embedded thumbnail may contain visual info not visible in main image',\n    });\n\n    tags.push({\n      tag: 'Serial Numbers',\n      value: 'N/A (simulated)',\n      risk: 'critical',\n      reason: 'Device serial number uniquely identifies your camera (present in real EXIF)',\n    });\n\n    return tags;\n  }\n\n  /**\n   * Anonymize the EXIF data by stripping high/critical risk tags.\n   */\n  anonymize(exif: RawEXIFData): AnonymizedResult {\n    const assessed = this.assessSensitivity(exif);\n    const removed: TagSensitivity[] = [];\n    const retained: TagSensitivity[] = [];\n\n    const anonymized: Partial<RawEXIFData> = {};\n\n    for (const tag of assessed) {\n      if (tag.risk === 'critical' || tag.risk === 'high' || tag.risk === 'medium') {\n        removed.push(tag);\n        // Don't copy high/medium/critical risk tags to anonymized output\n      } else {\n        retained.push(tag);\n      }\n    }\n\n    // Copy only low-risk fields\n    anonymized.orientation = exif.orientation;\n    anonymized.xResolution = exif.xResolution;\n    anonymized.yResolution = exif.yResolution;\n\n    const totalTags = assessed.length;\n    const removedCount = removed.length;\n    const overallRisk = removedCount > totalTags * 0.6 ? 'danger' :\n      removedCount > totalTags * 0.3 ? 'caution' : 'safe';\n\n    return {\n      original: exif,\n      anonymized,\n      removedTags: removed,\n      retainedTags: retained,\n      overallRisk,\n    };\n  }\n\n  /**\n   * Generate a human-readable report.\n   */\n  generateReport(result: AnonymizedResult): string {\n    let report = '=== EXIF Metadata Analysis ===\\n\\n';\n\n    report += 'ORIGINAL METADATA:\\n';\n    report += `  Camera:        ${result.original.make} ${result.original.model}\\n`;\n    report += `  Software:      ${result.original.software}\\n`;\n    report += `  Date/Time:     ${result.original.dateTimeOriginal}\\n`;\n    report += `  GPS:           ${result.original.gpsLatitude}, ${result.original.gpsLongitude} (${result.original.gpsAltitude})\\n`;\n    report += `  Exposure:      ${result.original.exposureTime} @ ${result.original.aperture}, ISO ${result.original.isoSpeed}\\n`;\n    report += `  Focal Length:  ${result.original.focalLength}\\n`;\n    report += `  Flash:         ${result.original.flash ? 'Yes' : 'No'}\\n`;\n    report += `  Thumbnail:     ${result.original.thumbnailPresent ? 'Embedded' : 'None'}\\n`;\n    report += `  Comment:       ${result.original.userComment || '(none)'}\\n`;\n    report += `  Artist:        ${result.original.artist}\\n`;\n    report += `  Copyright:     ${result.original.copyright}\\n`;\n\n    report += '\\nREMOVED TAGS (sensitive):\\n';\n    for (const tag of result.removedTags) {\n      report += `  [${tag.risk.toUpperCase()}] ${tag.tag}: ${tag.value}\\n`;\n      report += `       → ${tag.reason}\\n`;\n    }\n\n    report += '\\nRETAINED TAGS (non-sensitive):\\n';\n    for (const tag of result.retainedTags) {\n      report += `  ${tag.tag}: ${tag.value}\\n`;\n    }\n\n    report += `\\nVERDICT: `;\n    if (result.overallRisk === 'danger') {\n      report += '❌ DANGER — Extensive metadata present. DO NOT share without stripping.\\n';\n    } else if (result.overallRisk === 'caution') {\n      report += '⚠️  CAUTION — Some sensitive metadata detected. Consider additional stripping.\\n';\n    } else {\n      report += '✅ SAFE — Minimal metadata present.\\n';\n    }\n\n    return report;\n  }\n}\n\n// Run the EXIF processor\nconst processor = new EXIFProcessor();\n\nconsole.log('='.repeat(70));\nconst imageExif = processor.extractEXIF('IMG_2025_safehouse.jpg');\nconst result = processor.anonymize(imageExif);\nconsole.log(processor.generateReport(result));\nconsole.log('='.repeat(70));\n\n// Show what would be kept after anonymization\nconsole.log('\\nAfter stripping sensitive metadata, only these fields remain:');\nconsole.log(JSON.stringify(result.anonymized, null, 2));\nconsole.log(`\\nTotal tags: ${result.removedTags.length + result.retainedTags.length}`);\nconsole.log(`  Removed: ${result.removedTags.length} (sensitive)`);\nconsole.log(`  Retained: ${result.retainedTags.length} (non-sensitive)`);\nconsole.log(`  Risk level: ${result.overallRisk}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "======================================================================\n=== EXIF Metadata Analysis ===\n\nORIGINAL METADATA:\n  Camera:        Apple iPhone 15 Pro Max\n  Software:      Adobe Photoshop 25.3\n  Date/Time:     2024-11-23 14:32:10\n  GPS:           48°51'29.60\"N, 2°17'40.10\"E (150.3m)\n  Exposure:      1/125 @ f/2.8, ISO 400\n  Focal Length:  28.0 mm\n  Flash:         No\n  Thumbnail:     Embedded\n  Comment:       Meeting at safehouse\n  Artist:        Jane Activist\n  Copyright:     © 2025 Jane Activist\n\nREMOVED TAGS (sensitive):\n  [CRITICAL] GPS Latitude/Longitude: 48°51'29.60\"N, 2°17'40.10\"E\n       → Exact geographic coordinates of where photo was taken\n  [HIGH] GPS Altitude: 150.3m\n       → Elevation data narrows down location precision\n  [HIGH] Date/Time Original: 2024-11-23 14:32:10\n       → Precise timestamp establishes timeline and alibi\n  [MEDIUM] Device Make/Model: Apple iPhone 15 Pro Max\n       → Identifies device hardware (could link other photos)\n  [MEDIUM] Software: Adobe Photoshop 25.3\n       → Editing software used — fingerprints the workflow\n  [HIGH] User Comment: Meeting at safehouse\n       → May contain user-typed sensitive text\n  [MEDIUM] Copyright: © 2025 Jane Activist\n       → Identifies ownership/author\n  [MEDIUM] Artist: Jane Activist\n       → Direct author attribution\n  [HIGH] Thumbnail: Present\n       → Embedded thumbnail may contain visual info not visible in main image\n  [CRITICAL] Serial Numbers: N/A (simulated)\n       → Device serial number uniquely identifies your camera\n\nRETAINED TAGS (non-sensitive):\n  Orientation: 1\n  X Resolution: 72\n  Y Resolution: 72\n\nVERDICT: ❌ DANGER — Extensive metadata present. DO NOT share without stripping.\n======================================================================\n\nAfter stripping sensitive metadata, only these fields remain:\n{\n  \"orientation\": 1,\n  \"xResolution\": 72,\n  \"yResolution\": 72\n}\n\nTotal tags: 13\n  Removed: 10 (sensitive)\n  Retained: 3 (non-sensitive)\n  Risk level: danger\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-osint-investigation-case-study",
      children: "12. OSINT Investigation Case Study"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " A threat intelligence analyst is investigating a phishing campaign targeting journalists. Emails claim to be from \"Press Freedom Alliance\" but contain malicious attachments. The investigation must identify the threat actor's infrastructure and methods."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-1-email-header-analysis",
      children: "Phase 1: Email Header Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The phishing email's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Return-Path"
        }), " points to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "phish@malicious-actors.net"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["SPF check: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fail"
        }), " — the sending server ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mail.evil-host.net"
        }), " is not authorized by ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pressfreedomalliance.org"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DKIM: no signature — the message is not authenticated."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Received chain traces through three relays: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mail.evil-host.net"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "proxy.anonymizer.io"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "relay.evil.com"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-2-domain-osint",
      children: "Phase 2: Domain OSINT"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Query"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "malicious-actors.net Whois"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WHOIS lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Registered via Njalla (privacy registrar); creation date 2 weeks ago"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "site:malicious-actors.net"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google dork"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No results (site not indexed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "shodan malicious-actors.net"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shodan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hosting on a bulletproof provider in Russia"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Certificate transparency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Censys"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["SSL cert issued 5 days ago; Subject CN: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*.secure-login.net"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Domain history"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DomainTools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Previously used for credential harvesting (2023)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-3-email-address-tracing",
      children: "Phase 3: Email Address Tracing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using Hunter.io and emailrep.io:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "phish@malicious-actors.net"
        }), " — no historical breaches found."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["From email header ", (0,jsx_runtime.jsx)(_components.code, {
          children: "From:"
        }), " field: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"Press Freedom Alliance\" <security@pressfreedomalliance.org>"
        }), " — this is the spoofed target."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Social media mentions: @PressFreeAlliance tweeted 3 hours ago warning about a phishing campaign."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-4-infrastructure-mapping",
      children: "Phase 4: Infrastructure Mapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Attacker Infrastructure:\n  ┌─────────────────────┐\n  │ malicious-actors.net│── C2 server (Russia, AS12345)\n  └────────┬────────────┘\n           │\n  ┌────────▼────────────┐\n  │ *.secure-login.net  │── Phishing landing page (Netherlands, AS60404)\n  └─────────────────────┘\n           │\n  ┌────────▼────────────┐\n  │ mail.evil-host.net  │── SMTP relay (Panama, AS263726)\n  └─────────────────────┘\n           │\n  ┌────────▼────────────┐\n  │ proxy.anonymizer.io │── Anonymization proxy (Luxembourg, AS200313)\n  └─────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-5-indicators-of-compromise-iocs",
      children: "Phase 5: Indicators of Compromise (IOCs)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[DOMAINS]\nmalicious-actors.net\nsecure-login.net\nmail.evil-host.net\n\n[IP ADDRESSES]\n5.188.62.12 (Russia)\n185.153.196.45 (Netherlands)\n190.124.15.88 (Panama)\n\n[EMAILS]\nphish@malicious-actors.net\n\n[FILE HASHES]\ndoc_invoice_2025.doc — SHA256: a1b2c3d4e5f6...\npayload_v2.exe — SHA256: 78901234abcd...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome:"
      }), " The campaign was attributed to a known criminal group, and the infrastructure was added to threat intelligence feeds. The landing pages were reported to the hosting provider and taken down within 72 hours."]
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
            children: "Use Tor Browser for anonymity — not private browsing mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy Tor Browser with Safer/Safest mode for any research requiring identity protection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Run a DNS leak test before relying on a VPN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use the DNSLeakTester class or visit ipleak.net to verify your DNS queries are not exposed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strip metadata from all shared files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply exiftool or the EXIFProcessor before sharing images; use MAT for document metadata"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Follow the data minimisation principle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Share only required form fields; use pseudonyms across services; enable disappearing messages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy browser fingerprinting countermeasures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Tor Browser or Brave with fingerprinting protection; disable WebGL and Canvas APIs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integrate OSINT collection into threat intelligence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use the OSINTAggregator class to automate domain, email, and Shodan reconnaissance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Apply the OPSEC checklist before sensitive research"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Follow the journalist checklist: Tails OS, compartmentalised identities, encrypted communications"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Digital privacy, anonymity, and OSINT form a three-legged foundation for secure online operations. The key takeaways from this chapter are:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Privacy is about controlling information flow."
          }), " Threat modeling for privacy starts with identifying adversaries and understanding what data you leak — metadata often reveals more than content itself."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Browser fingerprinting is persistent and hard to block."
          }), " Canvas, WebGL, and font enumeration create unique identifiers that persist across sessions and private browsing modes. Defence requires Tor Browser or systematic spoofing."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tor provides strong anonymity through onion routing."
          }), " Three layers of encryption, circuit rotation, and hidden services protect both users and publishers. Bridges and pluggable transports (obfs4, Snowflake) enable circumvention of censorship."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Running Tor relays contributes to network health."
          }), " Guard, middle, and exit relays each have different legal and operational risk profiles. Exit relay operators should prepare for abuse handling."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "I2P offers an alternative anonymity model."
          }), " Garlic routing bundles messages to obscure traffic patterns. I2P is optimized for hidden services (eepsites) rather than clearnet browsing."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "VPNs protect against local adversaries, not anonymity."
          }), " Protocol choice (WireGuard > OpenVPN > IPSec), logging policies (verified no-logs), and leak protection (kill switch, DNS leak testing) determine privacy guarantees."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "OPSEC is a discipline, not a tool."
          }), " Compartmentalization, cover identities, and burner communications create layers of separation. The OPSEC checklist provides concrete steps for journalists and activists."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "OSINT collects public data at scale."
          }), " Google dorking, Shodan, theHarvester, Maltego, and Recon-ng each serve different phases of the intelligence lifecycle. Automation must respect rate limits and legal boundaries."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Social media OSINT reveals relationships and patterns."
          }), " Twitter, LinkedIn, Facebook, and Instagram each expose different data types. Rate-limited scraping with proxy rotation is essential for responsible collection."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dark web research requires OPSEC discipline."
          }), " Tails OS, Tor Browser at \"Safest\" mode, and strict separation of identities prevent deanonymization."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Email is the most intercepted communication channel."
          }), " PGP/GPG, Signal, and OMEMO provide different levels of encryption. Header analysis reveals routing paths, authentication results, and spoofing indicators."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Metadata must be stripped before sharing files."
          }), " EXIF data (jhead, exiftool), document metadata (MAT), and PDF sanitization tools remove identifying information. The only truly safe data is data that was never collected."]
        }), "\n"]
      }), "\n"]
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
            children: "Which property of Tor onion routing ensures that no single relay knows both the source and destination of traffic?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perfect forward secrecy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three-hop circuits with layered encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth-weighted relay selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directory authority consensus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What distinguishes garlic routing (I2P) from onion routing (Tor)?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Garlic routing uses 5 hops instead of 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Garlic routing bundles multiple messages together to obscure message boundaries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Garlic routing requires centralized directory servers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Garlic routing only works for web browsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In the context of VPNs, what is a DNS leak?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS queries being intercepted by the ISP's DNS server instead of the VPN's DNS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A vulnerability in the DNS protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The VPN provider sharing DNS logs with advertisers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS queries using UDP instead of TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "A"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which of the following is the most effective pluggable transport for circumventing Deep Packet Inspection (DPI)?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOCKS5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "obfs4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP CONNECT proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSH tunneling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A Google dork query of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "site:example.com filetype:sql \"INSERT INTO\""
            }), " would find:"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All SQL files on example.com"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL files containing INSERT statements on example.com"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database servers belonging to example.com"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL injection vulnerabilities on example.com"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the primary security risk of EXIF GPS coordinates in photos?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "They drain the device battery faster"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "They reveal the exact location where the photo was taken"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "They slow down image upload speeds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "They cause compatibility issues with social media platforms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In an email header, what does a DMARC \"fail\" result typically indicate?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The email server is down"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The message may be spoofing the From domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The recipient's mailbox is full"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The email contains a virus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which of the following is NOT a valid Tor relay type?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guard relay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Middle relay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bridge relay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directory relay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "D"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the purpose of a kill switch in a VPN application?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "To terminate the VPN connection when bandwidth exceeds a threshold"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "To block all traffic if the VPN tunnel drops unexpectedly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "To kill other applications when the VPN is activated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "To prevent the computer from sleeping while VPN is connected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The Signal protocol provides \"forward secrecy\" because:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Messages forward themselves to the recipient automatically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compromising a session key does not reveal past messages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Messages are forwarded through multiple servers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The protocol uses outdated encryption algorithms"
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
        id: "review-fundamental",
        children: "Review (Fundamental)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Threat Model for a Journalist."
            }), " Create a privacy threat model for a freelance journalist investigating government corruption. Identify at least three adversaries, their capabilities, and the journalist's critical information. Propose one countermeasure per adversary."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Tor Relay Types."
            }), " Explain the difference between a Guard relay, a Middle relay, and an Exit relay. For each, describe what information the relay operator can observe and what legal risks they face."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "VPN Logging Policy Analysis."
            }), " Research three VPN providers' logging policies (use their privacy policies). Classify each as \"no-logs\", \"anonymous logs\", or \"full logs\". Identify one provider that has submitted to an independent audit."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "application-hands-on",
        children: "Application (Hands-On)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "4",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Browser Fingerprint Comparison."
            }), " Run the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "FingerprintCollector"
            }), " TypeScript implementation from §1.4 twice in the same environment and once after modifying the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "renderingNoise()"
            }), " function. Record the three fingerprint hashes. Are they identical? What does this tell you about fingerprint stability?"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Email Header Spoofing Detection."
            }), " Use the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "EmailHeaderAnalyzer"
            }), " from §10.4 on the provided sample header. Then modify the header to have ", (0,jsx_runtime.jsx)(_components.code, {
              children: "spf=pass"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dkim=pass"
            }), ". Run the analysis again. What changes in the security report?"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "DNS Leak Test Simulation."
            }), " Run the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "DNSLeakTester"
            }), " from §5.4. Modify the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "knownVPNExitIPs"
            }), " array to include the user's actual external IP. Re-run and compare how the detection changes. What happens to the \"VPN Active\" indicator?"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Google Dorking Practical."
            }), " Using Google yourself (or the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "OSINTAggregator"
            }), " simulator), perform searches for:"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Files with ", (0,jsx_runtime.jsx)(_components.code, {
                children: "password"
              }), " in the title on your university's domain"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Exposed ", (0,jsx_runtime.jsx)(_components.code, {
                children: ".env"
              }), " configuration files on ", (0,jsx_runtime.jsx)(_components.code, {
                children: "site:github.com"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Directory listings containing ", (0,jsx_runtime.jsx)(_components.code, {
                children: "backup"
              }), " on any ", (0,jsx_runtime.jsx)(_components.code, {
                children: ".gov"
              }), " domain"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Document three results — even if none are found, describe what the search reveals about information exposure."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "challenge-advanced",
        children: "Challenge (Advanced)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "8",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Build a Metadata Stripping Workflow."
            }), " Design a command-line pipeline that:"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Takes a directory of JPEG images and DOCX documents as input"
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Strips all EXIF from images (using ", (0,jsx_runtime.jsx)(_components.code, {
                children: "exiftool -all="
              }), ")"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Strips all metadata from documents (using ", (0,jsx_runtime.jsx)(_components.code, {
                children: "mat2"
              }), ")"]
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Generates a report of what was removed (comparing file sizes before/after)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Implements recursive directory processing"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Write the pipeline as a bash script and include equivalent TypeScript logic using the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "EXIFProcessor"
            }), " class."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Multi-Hop Anonymity Circuit Simulator."
            }), " Extend the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "FingerprintCollector"
            }), " to create a circuit-simulation class that:"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Builds a 3-hop Tor circuit and assigns each hop a relay type"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Logs what information each hop can observe"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Simulates a compromise scenario (one hop is controlled by the adversary)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Reports whether the full path is deanonymized"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Demonstrate that no single compromised hop reveals both source and destination."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Full OSINT Investigation Walkthrough."
            }), " Choose a real or fictional organization. Using the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "OSINTAggregator"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SocialMediaScraper"
            }), " from this chapter, simulate a complete OSINT investigation:"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Phase 1: Domain enumeration (subdomains, WHOIS, DNS)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Phase 2: Email discovery and verification"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Phase 3: Shodan/Censys for exposed services"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Phase 4: Social media profiling of key employees"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Phase 5: Google dorking for exposed documents"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Produce a final intelligence report in markdown format with:"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Executive summary"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Methodology"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Findings (with severity ratings: Low/Medium/High/Critical)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "IOCs table"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Recommended remediations"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "End of Chapter 18"
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