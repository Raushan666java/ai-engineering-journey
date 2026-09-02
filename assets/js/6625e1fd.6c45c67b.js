"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[74344],{

/***/ 30297
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_computer_networks_04_mac_md_662_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-computer-networks-04-mac-md-662.json
const site_docs_courses_computer_networks_04_mac_md_662_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/computer-networks/04-mac","title":"Chapter 4: Medium Access Control (MAC)","description":"Prerequisites Data Link Layer — Framing and error control | Next Ethernet & Switching — From MAC protocols to switched networks","source":"@site/docs/courses/computer-networks/04-mac.md","sourceDirName":"courses/computer-networks","slug":"/computer-networks/04-mac","permalink":"/ai-engineering-journey/computer-networks/04-mac","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"04-mac","slug":"/computer-networks/04-mac","title":"Chapter 4: Medium Access Control (MAC)","sidebar_label":"Chapter 4: Medium Access Control (MAC)","sidebar_position":4},"sidebar":"course-computer-networks","previous":{"title":"Chapter 3: The Data Link Layer","permalink":"/ai-engineering-journey/computer-networks/03-datalink-layer"},"next":{"title":"Chapter 5: Ethernet Switching","permalink":"/ai-engineering-journey/computer-networks/05-ethernet-switching"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/computer-networks/04-mac.md


const frontMatter = {
	id: '04-mac',
	slug: '/computer-networks/04-mac',
	title: 'Chapter 4: Medium Access Control (MAC)',
	sidebar_label: 'Chapter 4: Medium Access Control (MAC)',
	sidebar_position: 4
};
const contentTitle = 'Chapter 4: Medium Access Control (MAC)';

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
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 3
}, {
  "value": "MAC Protocol Decision Flow",
  "id": "mac-protocol-decision-flow",
  "level": 3
}, {
  "value": "ALOHA Throughput vs Offered Load",
  "id": "aloha-throughput-vs-offered-load",
  "level": 3
}, {
  "value": "4.1 The MAC Sublayer",
  "id": "41-the-mac-sublayer",
  "level": 2
}, {
  "value": "What Is the MAC Sublayer?",
  "id": "what-is-the-mac-sublayer",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy",
  "level": 3
}, {
  "value": "Responsibilities of the MAC Sublayer",
  "id": "responsibilities-of-the-mac-sublayer",
  "level": 3
}, {
  "value": "Classification of MAC Protocols",
  "id": "classification-of-mac-protocols",
  "level": 3
}, {
  "value": "Advantages and Disadvantages",
  "id": "advantages-and-disadvantages",
  "level": 3
}, {
  "value": "Edge Cases in MAC Design",
  "id": "edge-cases-in-mac-design",
  "level": 3
}, {
  "value": "4.2 Random Access Protocols",
  "id": "42-random-access-protocols",
  "level": 2
}, {
  "value": "4.2.1 ALOHA",
  "id": "421-aloha",
  "level": 3
}, {
  "value": "4.2.1.1 Pure ALOHA",
  "id": "4211-pure-aloha",
  "level": 4
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-1",
  "level": 5
}, {
  "value": "How Pure ALOHA Works (Numbered Steps)",
  "id": "how-pure-aloha-works-numbered-steps",
  "level": 5
}, {
  "value": "Vulnerable Period Analysis",
  "id": "vulnerable-period-analysis",
  "level": 5
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 5
}, {
  "value": "Dry Run Trace Table",
  "id": "dry-run-trace-table",
  "level": 5
}, {
  "value": "Throughput Analysis",
  "id": "throughput-analysis",
  "level": 5
}, {
  "value": "C++ Implementation -- Pure ALOHA Throughput Simulator",
  "id": "c-implementation----pure-aloha-throughput-simulator",
  "level": 5
}, {
  "value": "Python Implementation -- Pure ALOHA Throughput Calculator",
  "id": "python-implementation----pure-aloha-throughput-calculator",
  "level": 5
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 5
}, {
  "value": "Advantages and Disadvantages of Pure ALOHA",
  "id": "advantages-and-disadvantages-of-pure-aloha",
  "level": 5
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 5
}, {
  "value": "4.2.1.2 Slotted ALOHA",
  "id": "4212-slotted-aloha",
  "level": 4
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-2",
  "level": 5
}, {
  "value": "How Slotted ALOHA Works (Numbered Steps)",
  "id": "how-slotted-aloha-works-numbered-steps",
  "level": 5
}, {
  "value": "Vulnerable Period",
  "id": "vulnerable-period",
  "level": 5
}, {
  "value": "Throughput Formula",
  "id": "throughput-formula",
  "level": 5
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 5
}, {
  "value": "Dry Run Trace Table",
  "id": "dry-run-trace-table-1",
  "level": 5
}, {
  "value": "C++ Implementation",
  "id": "c-implementation",
  "level": 5
}, {
  "value": "Python Implementation",
  "id": "python-implementation",
  "level": 5
}, {
  "value": "ALOHA vs Slotted ALOHA -- Throughput Analysis",
  "id": "aloha-vs-slotted-aloha----throughput-analysis",
  "level": 4
}, {
  "value": "TypeScript Implementation: ALOHA Throughput Simulator",
  "id": "typescript-implementation-aloha-throughput-simulator",
  "level": 3
}, {
  "value": "4.2.2 CSMA (Carrier Sense Multiple Access)",
  "id": "422-csma-carrier-sense-multiple-access",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-3",
  "level": 5
}, {
  "value": "4.2.2.1 1-Persistent CSMA",
  "id": "4221-1-persistent-csma",
  "level": 4
}, {
  "value": "Steps",
  "id": "steps",
  "level": 5
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 5
}, {
  "value": "Dry Run Trace",
  "id": "dry-run-trace",
  "level": 5
}, {
  "value": "4.2.2.2 Non-Persistent CSMA",
  "id": "4222-non-persistent-csma",
  "level": 4
}, {
  "value": "Steps",
  "id": "steps-1",
  "level": 5
}, {
  "value": "Pseudocode",
  "id": "pseudocode-3",
  "level": 5
}, {
  "value": "4.2.2.3 p-Persistent CSMA",
  "id": "4223-p-persistent-csma",
  "level": 4
}, {
  "value": "Steps",
  "id": "steps-2",
  "level": 5
}, {
  "value": "Pseudocode",
  "id": "pseudocode-4",
  "level": 5
}, {
  "value": "Optimal p Selection",
  "id": "optimal-p-selection",
  "level": 5
}, {
  "value": "4.2.2.4 CSMA/CD (CSMA with Collision Detection)",
  "id": "4224-csmacd-csma-with-collision-detection",
  "level": 4
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-4",
  "level": 5
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps",
  "level": 5
}, {
  "value": "Pseudocode",
  "id": "pseudocode-5",
  "level": 5
}, {
  "value": "Minimum Frame Size Requirement",
  "id": "minimum-frame-size-requirement",
  "level": 5
}, {
  "value": "Binary Exponential Backoff Algorithm",
  "id": "binary-exponential-backoff-algorithm",
  "level": 5
}, {
  "value": "C++ Implementation -- CSMA/CD Backoff Simulator",
  "id": "c-implementation----csmacd-backoff-simulator",
  "level": 5
}, {
  "value": "Python Implementation -- CSMA/CD Backoff Simulator",
  "id": "python-implementation----csmacd-backoff-simulator",
  "level": 5
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 5
}, {
  "value": "TypeScript Implementation: CSMA/CD Backoff Simulator",
  "id": "typescript-implementation-csmacd-backoff-simulator",
  "level": 3
}, {
  "value": "4.2.2.5 CSMA/CA (CSMA with Collision Avoidance)",
  "id": "4225-csmaca-csma-with-collision-avoidance",
  "level": 4
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-5",
  "level": 5
}, {
  "value": "Steps (with RTS/CTS)",
  "id": "steps-with-rtscts",
  "level": 5
}, {
  "value": "Pseudocode",
  "id": "pseudocode-6",
  "level": 5
}, {
  "value": "Dry Run Trace -- RTS/CTS with Hidden Terminal",
  "id": "dry-run-trace----rtscts-with-hidden-terminal",
  "level": 5
}, {
  "value": "Advantages and Disadvantages",
  "id": "advantages-and-disadvantages-1",
  "level": 5
}, {
  "value": "CSMA Variants Comparison",
  "id": "csma-variants-comparison",
  "level": 4
}, {
  "value": "4.2.3 Random Access vs Controlled Access",
  "id": "423-random-access-vs-controlled-access",
  "level": 3
}, {
  "value": "4.3 Controlled Access Protocols",
  "id": "43-controlled-access-protocols",
  "level": 2
}, {
  "value": "4.3.1 Reservation",
  "id": "431-reservation",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-6",
  "level": 5
}, {
  "value": "How It Works",
  "id": "how-it-works",
  "level": 5
}, {
  "value": "Pseudocode",
  "id": "pseudocode-7",
  "level": 5
}, {
  "value": "Advantages and Disadvantages",
  "id": "advantages-and-disadvantages-2",
  "level": 5
}, {
  "value": "4.3.2 Polling",
  "id": "432-polling",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-7",
  "level": 5
}, {
  "value": "How It Works",
  "id": "how-it-works-1",
  "level": 5
}, {
  "value": "Steps",
  "id": "steps-3",
  "level": 5
}, {
  "value": "Pseudocode",
  "id": "pseudocode-8",
  "level": 5
}, {
  "value": "Advantages and Disadvantages",
  "id": "advantages-and-disadvantages-3",
  "level": 5
}, {
  "value": "4.3.3 Token Passing",
  "id": "433-token-passing",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-8",
  "level": 5
}, {
  "value": "How It Works (IEEE 802.5 Token Ring)",
  "id": "how-it-works-ieee-8025-token-ring",
  "level": 5
}, {
  "value": "Steps",
  "id": "steps-4",
  "level": 5
}, {
  "value": "Pseudocode",
  "id": "pseudocode-9",
  "level": 5
}, {
  "value": "Dry Run Trace -- Token Ring with 3 Stations",
  "id": "dry-run-trace----token-ring-with-3-stations",
  "level": 5
}, {
  "value": "Advantages and Disadvantages",
  "id": "advantages-and-disadvantages-4",
  "level": 5
}, {
  "value": "TypeScript Implementation: Token Passing Simulator",
  "id": "typescript-implementation-token-passing-simulator",
  "level": 3
}, {
  "value": "4.4 Channelization",
  "id": "44-channelization",
  "level": 2
}, {
  "value": "4.4.1 FDMA (Frequency Division Multiple Access)",
  "id": "441-fdma-frequency-division-multiple-access",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-9",
  "level": 5
}, {
  "value": "How It Works",
  "id": "how-it-works-2",
  "level": 5
}, {
  "value": "Advantages and Disadvantages",
  "id": "advantages-and-disadvantages-5",
  "level": 5
}, {
  "value": "4.4.2 TDMA (Time Division Multiple Access)",
  "id": "442-tdma-time-division-multiple-access",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-10",
  "level": 5
}, {
  "value": "How It Works",
  "id": "how-it-works-3",
  "level": 5
}, {
  "value": "Pseudocode",
  "id": "pseudocode-10",
  "level": 5
}, {
  "value": "Advantages and Disadvantages",
  "id": "advantages-and-disadvantages-6",
  "level": 5
}, {
  "value": "4.4.3 CDMA (Code Division Multiple Access)",
  "id": "443-cdma-code-division-multiple-access",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-11",
  "level": 5
}, {
  "value": "How It Works",
  "id": "how-it-works-4",
  "level": 5
}, {
  "value": "Mathematical Example",
  "id": "mathematical-example",
  "level": 5
}, {
  "value": "Pseudocode",
  "id": "pseudocode-11",
  "level": 5
}, {
  "value": "Advantages and Disadvantages",
  "id": "advantages-and-disadvantages-7",
  "level": 5
}, {
  "value": "Channelization Comparison Table",
  "id": "channelization-comparison-table",
  "level": 4
}, {
  "value": "4.5 MAC Addressing",
  "id": "45-mac-addressing",
  "level": 2
}, {
  "value": "What Is a MAC Address?",
  "id": "what-is-a-mac-address",
  "level": 3
}, {
  "value": "Structure of a 48-bit MAC Address",
  "id": "structure-of-a-48-bit-mac-address",
  "level": 3
}, {
  "value": "Common MAC Address Formats",
  "id": "common-mac-address-formats",
  "level": 3
}, {
  "value": "Address Types",
  "id": "address-types",
  "level": 3
}, {
  "value": "How MAC Addressing Works in a Network",
  "id": "how-mac-addressing-works-in-a-network",
  "level": 3
}, {
  "value": "Example MAC Address Assignment",
  "id": "example-mac-address-assignment",
  "level": 3
}, {
  "value": "Edge Cases in MAC Addressing",
  "id": "edge-cases-in-mac-addressing",
  "level": 3
}, {
  "value": "4.6 Collision Domain vs Broadcast Domain",
  "id": "46-collision-domain-vs-broadcast-domain",
  "level": 2
}, {
  "value": "Collision Domain",
  "id": "collision-domain",
  "level": 3
}, {
  "value": "Broadcast Domain",
  "id": "broadcast-domain",
  "level": 3
}, {
  "value": "Comparison Table",
  "id": "comparison-table",
  "level": 3
}, {
  "value": "Visual Example",
  "id": "visual-example",
  "level": 3
}, {
  "value": "4.7 IEEE 802.2 LLC",
  "id": "47-ieee-8022-llc",
  "level": 2
}, {
  "value": "LLC PDU Format",
  "id": "llc-pdu-format",
  "level": 3
}, {
  "value": "Advantages and Disadvantages",
  "id": "advantages-and-disadvantages-8",
  "level": 3
}, {
  "value": "4.8 Performance Comparison of MAC Protocols",
  "id": "48-performance-comparison-of-mac-protocols",
  "level": 2
}, {
  "value": "4.9 Interview Corner",
  "id": "49-interview-corner",
  "level": 2
}, {
  "value": "Q1: CSMA/CD vs CSMA/CA -- Key Differences",
  "id": "q1-csmacd-vs-csmaca----key-differences",
  "level": 3
}, {
  "value": "Q2: Why Is Collision Detection Impractical in Wireless?",
  "id": "q2-why-is-collision-detection-impractical-in-wireless",
  "level": 3
}, {
  "value": "Q3: Binary Exponential Backoff -- Why Exponential?",
  "id": "q3-binary-exponential-backoff----why-exponential",
  "level": 3
}, {
  "value": "Q4: Token Ring vs Ethernet -- Why Did Ethernet Win?",
  "id": "q4-token-ring-vs-ethernet----why-did-ethernet-win",
  "level": 3
}, {
  "value": "Q5: What Happens When the Channel Is Always Busy (High Load)?",
  "id": "q5-what-happens-when-the-channel-is-always-busy-high-load",
  "level": 3
}, {
  "value": "Q6: Why Does Minimum Frame Size Matter in CSMA/CD?",
  "id": "q6-why-does-minimum-frame-size-matter-in-csmacd",
  "level": 3
}, {
  "value": "Q7: Contention Window Size in 802.11 vs Ethernet",
  "id": "q7-contention-window-size-in-80211-vs-ethernet",
  "level": 3
}, {
  "value": "4.10 Applications in Real Systems",
  "id": "410-applications-in-real-systems",
  "level": 2
}, {
  "value": "Ethernet (IEEE 802.3) -- CSMA/CD",
  "id": "ethernet-ieee-8023----csmacd",
  "level": 3
}, {
  "value": "WiFi (IEEE 802.11) -- CSMA/CA with RTS/CTS",
  "id": "wifi-ieee-80211----csmaca-with-rtscts",
  "level": 3
}, {
  "value": "LTE -- OFDMA (Orthogonal Frequency Division Multiple Access)",
  "id": "lte----ofdma-orthogonal-frequency-division-multiple-access",
  "level": 3
}, {
  "value": "LoRaWAN -- Pure ALOHA",
  "id": "lorawan----pure-aloha",
  "level": 3
}, {
  "value": "Bluetooth -- TDMA + TDD",
  "id": "bluetooth----tdma--tdd",
  "level": 3
}, {
  "value": "5G NR -- OFDMA + Scheduled Access",
  "id": "5g-nr----ofdma--scheduled-access",
  "level": 3
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Case Study: Migrating a Legacy Token Ring Office to Switched Ethernet",
  "id": "case-study-migrating-a-legacy-token-ring-office-to-switched-ethernet",
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
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    annotation: "annotation",
    blockquote: "blockquote",
    code: "code",
    del: "del",
    details: "details",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    header: "header",
    hr: "hr",
    img: "img",
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
        id: "chapter-4-medium-access-control-mac",
        children: "Chapter 4: Medium Access Control (MAC)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prerequisites:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/computer-networks/03-datalink-layer",
          children: "Chapter 3: Data Link Layer"
        }), " — Framing and error control | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/computer-networks/05-ethernet-switching",
          children: "Chapter 5: Ethernet & Switching"
        }), " — From MAC protocols to switched networks"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why medium access control is necessary on shared broadcast channels."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the performance of pure ALOHA and slotted ALOHA under Poisson traffic."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare persistent, non-persistent, and p-persistent CSMA strategies."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe CSMA/CD operation and its role in classical Ethernet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish contention-based and collision-free MAC protocols."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interpret the structure of an Ethernet MAC frame and address format."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "ALOHA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pure: 18.4% max throughput; Slotted: 36.8%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerable period is the fundamental limit — slotted halves it"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sense before transmit improves efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-persistent is greedy; non-persistent reduces collisions at cost of idle time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSMA/CD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detect collisions during transmission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary exponential backoff adapts to load; minimum frame size ensures detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSMA/CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual carrier sensing (NAV) for wireless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RTS/CTS mitigates hidden terminal problem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collision-Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token passing, bit-map protocols"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic delay but overhead at light load"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ethernet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IEEE 802.3 with CSMA/CD, 48-bit MAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dominant LAN technology; switched Ethernet eliminated collisions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[MAC Sublayer] --> B[Channel Partitioning]\n    A --> C[Random Access]\n    A --> D[Taking Turns]\n    C --> C1[Pure ALOHA]\n    C --> C2[Slotted ALOHA]\n    C --> C3[CSMA]\n    C --> C4[CSMA/CD]\n    C --> C5[CSMA/CA]\n    D --> D1[Token Passing]\n    D --> D2[Bit-Map]\n    A --> E[Ethernet]\n    A --> F[LLC & MAC Addressing]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mac-protocol-decision-flow",
      children: "MAC Protocol Decision Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    Start[\"Choose MAC Protocol\"] --> Q1{\"Channel type?\"}\n    Q1 -->|\"Wired (shared)\"| Q2\n    Q1 -->|\"Wireless\"| CSMA_CA[\"CSMA/CA with RTS/CTS\"]\n    Q1 -->|\"Dedicated channel\"| CHAN[\"FDMA / TDMA / CDMA\"]\n\n    Q2{\"Collision detection possible?\"}\n    Q2 -->|\"Yes\"| CSMA_CD[\"CSMA/CD + Binary Exp Backoff\"]\n    Q2 -->|\"No\"| Q3\n\n    Q3{\"Deterministic delay needed?\"}\n    Q3 -->|\"Yes\"| TOKEN[\"Token Passing / Polling\"]\n    Q3 -->|\"No\"| CSMA[\"p-persistent CSMA\"]\n\n    CSMA_CD --> ETHERNET[\"Ethernet (802.3)\"]\n    CSMA_CA --> WIFI[\"Wi-Fi (802.11)\"]\n    TOKEN --> FDDI[\"FDDI / Token Ring\"]\n    CHAN --> CELL[\"Cellular (4G/5G)\"]\n\n    style Start fill:#e3f2fd,stroke:#1565c0,stroke-width:2px\n    style ETHERNET fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px\n    style WIFI fill:#fff3e0,stroke:#e65100,stroke-width:2px\n    style FDDI fill:#fce4ec,stroke:#c62828,stroke-width:2px\n    style CELL fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aloha-throughput-vs-offered-load",
      children: "ALOHA Throughput vs Offered Load"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Legend[\"Legend\"]\n        PEAK1[\"Peak Pure: 0.184 (G=0.5)\"]\n        PEAK2[\"Peak Slotted: 0.368 (G=1.0)\"]\n    end\n\n    subgraph Curves[\"Throughput S vs Offered Load G\"]\n        direction TB\n        G05[\"G=0.5<br/>Pure: 0.184<br/>Slotted: 0.303\"]\n        G10[\"G=1.0<br/>Pure: 0.135<br/>Slotted: 0.368\"]\n        G15[\"G=1.5<br/>Pure: 0.075<br/>Slotted: 0.335\"]\n        G20[\"G=2.0<br/>Pure: 0.037<br/>Slotted: 0.271\"]\n    end\n\n    Curves --> INSIGHT[\"Key insight: Slotted doubles throughput<br/>by halving vulnerable period\"]\n\n    classDef peak fill:#ffebee,stroke:#c62828,stroke-width:2px\n    classDef curve fill:#e3f2fd,stroke:#1565c0,stroke-width:1px\n    classDef insight fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px,stroke-dasharray:5\n\n    class PEAK1,PEAK2 peak\n    class G05,G10,G15,G20 curve\n    class INSIGHT insight\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "41-the-mac-sublayer",
      children: "4.1 The MAC Sublayer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/computer-networks/ch04-mac-ethernet.png",
        alt: "MAC Sublayer Protocols, Ethernet Evolution and Switching"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-the-mac-sublayer",
      children: "What Is the MAC Sublayer?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium Access Control (MAC) sublayer"
      }), " is the lower sublayer of the data link layer in the IEEE 802 reference model. It sits directly above the physical layer and below the Logical Link Control (LLC) sublayer. Its primary job: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "regulate access to a shared broadcast channel"
      }), " so that multiple stations can communicate without destructive interference."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A conference room with one microphone."
        }), " Imagine 10 people in a meeting room with a single microphone. If two people speak at once, nobody understands anything. The MAC protocol is the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "meeting chair's rules"
        }), ": you raise your hand (carrier sense), the chair calls on you (collision-free), or you just speak and deal with interruptions (random access). The \"vulnerable period\" is the time between when you start speaking and when someone else also starts speaking — the longer this window, the more likely a \"collision\" (crosstalk)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "responsibilities-of-the-mac-sublayer",
      children: "Responsibilities of the MAC Sublayer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frame delimiting and synchronization"
        }), " — Identify frame boundaries on the raw bit stream."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Addressing"
        }), " — Assign and interpret 48-bit MAC addresses for source and destination."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Channel access control"
        }), " — Decide which station transmits next on a shared medium."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error detection"
        }), " — CRC-32 frame check sequence in Ethernet."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collision handling"
        }), " — Detect collisions and schedule retransmissions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "classification-of-mac-protocols",
      children: "Classification of MAC Protocols"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How It Works"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Random Access (Contention-based)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stations transmit arbitrarily; collisions resolved after the fact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALOHA, CSMA, CSMA/CD, CSMA/CA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Controlled Access (Collision-free)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stations take turns; no collisions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reservation, Polling, Token Passing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Channelization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Divide channel into independent sub-channels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FDMA, TDMA, CDMA"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages",
      children: "Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Random Access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, no central coordinator, works for bursty traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput collapses under high load; collisions waste bandwidth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Controlled Access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic delay, no collisions, fair"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High overhead under light load; single point of failure (polling)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Channelization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predictable bandwidth, no collisions, real-time friendly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inflexible; wasted capacity when station has nothing to send"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-mac-design",
      children: "Edge Cases in MAC Design"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collision detection failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frame too short; sender finishes before collision signal returns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum frame size (64 bytes for Ethernet)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent defer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-priority station keeps deferring to lower-priority traffic indefinitely"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority scheduling or backoff prioritization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hidden terminal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two stations cannot hear each other but both reach the AP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RTS/CTS in 802.11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exposed terminal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Station defers unnecessarily because it hears a transmitter whose receiver is out of range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exposed-terminal-aware MAC (rare in practice)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collapse under load"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput -> 0 as offered load -> infinity for random access protocols"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backoff algorithm, admission control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Token loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token frame is corrupted; no station can transmit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitoring station regenerates token"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Starvation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A station never wins the contention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limit backoff exponent, use fair queuing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "42-random-access-protocols",
      children: "4.2 Random Access Protocols"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In random access (contention-based) protocols, any station can transmit whenever it has data. No central authority grants permission. Collisions are detected and recovered through retransmission. The fundamental trade-off: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "simplicity vs. efficiency under load"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "421-aloha",
      children: "4.2.1 ALOHA"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ALOHA is the earliest random-access protocol, developed at the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "University of Hawaii"
      }), " in 1970 to connect island campuses via radio."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "4211-pure-aloha",
      children: "4.2.1.1 Pure ALOHA"
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "real-world-analogy-1",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A crowded party."
        }), " People talk whenever they want. If two people start speaking at the same time, they both notice the garbled conversation, stop, wait a random amount of time, and try again. The \"vulnerable period\" is the time window during which another person starting to speak would ruin your sentence."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "how-pure-aloha-works-numbered-steps",
      children: "How Pure ALOHA Works (Numbered Steps)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Station assembles a frame."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Station ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "transmits immediately"
        }), " on the shared channel."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Station waits for an acknowledgment (ACK) from the receiver."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If ACK received -> transmission succeeded. Go to step 1 for next frame."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If no ACK within timeout -> collision assumed."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Station waits a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "random backoff time"
        }), " (uniformly distributed)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Go to step 2."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "vulnerable-period-analysis",
      children: "Vulnerable Period Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A frame of transmission time t is destroyed if any other station transmits during the interval [T - t, T + t], i.e., a window of length 2t."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "          |---t---|                   |---t---|\nFrame A:  |<------ t ------->|\nOther:         |<--- t --->|  (collides with start)\nOther:                              |<--- t --->|  (our start collides)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE pure_aloha_transmit(frame):\n    WHILE frame not acknowledged:\n        transmit(frame)\n        start_timer(TIMEOUT)\n        IF ack_received():\n            BREAK\n        ELSE:\n            backoff = RANDOM(0, MAX_BACKOFF)\n            WAIT(backoff)\n    END WHILE\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "dry-run-trace-table",
      children: "Dry Run Trace Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Station"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Channel"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Backoff"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Has data, transmits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Busy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Has data, transmits (within vulnerable window)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both lost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timeout, backoff=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timeout, backoff=7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backoff expires, retransmits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Busy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Success"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backoff at 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Busy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK received"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Done"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backoff=0, retransmits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Busy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Success"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "throughput-analysis",
      children: "Throughput Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Under ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Poisson traffic"
      }), " with aggregate generation rate G frames per frame time:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "S = G * e^(-2G)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "S: throughput (successful frames per frame time)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "G: total offered load (new + retransmitted frames per frame time)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maximum at G = 0.5: S_max = 1/(2e) ~ 0.184 (18.4%)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Derivation intuition:"
      }), " Probability that no other frame is transmitted during vulnerable period 2t is e^(-2G). Multiply by arrival rate G."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "c-implementation----pure-aloha-throughput-simulator",
      children: "C++ Implementation -- Pure ALOHA Throughput Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cmath>\n#include <random>\n#include <vector>\n\nclass PureALOHASimulator {\nprivate:\n    double G;\n    int totalSlots;\n    double frameTime;\n    std::default_random_engine generator;\n\npublic:\n    PureALOHASimulator(double offeredLoad, int slots, double fTime = 1.0)\n        : G(offeredLoad), totalSlots(slots), frameTime(fTime) {}\n\n    double simulate() {\n        std::poisson_distribution<int> arrivalDist(G);\n        std::uniform_real_distribution<double> phaseDist(0.0, frameTime);\n        int successfulFrames = 0;\n        int totalFrames = 0;\n\n        for (int slot = 0; slot < totalSlots; ++slot) {\n            int arrivals = arrivalDist(generator);\n            totalFrames += arrivals;\n            std::vector<double> arrivalTimes;\n            for (int i = 0; i < arrivals; ++i)\n                arrivalTimes.push_back(phaseDist(generator));\n\n            for (size_t i = 0; i < arrivalTimes.size(); ++i) {\n                bool collision = false;\n                for (size_t j = 0; j < arrivalTimes.size(); ++j) {\n                    if (i != j && std::abs(arrivalTimes[i] - arrivalTimes[j]) < frameTime) {\n                        collision = true; break;\n                    }\n                }\n                if (!collision) successfulFrames++;\n            }\n        }\n        return static_cast<double>(successfulFrames) / totalSlots;\n    }\n\n    void runExperiment() {\n        double throughput = simulate();\n        std::cout << \"Pure ALOHA (G = \" << G << \"):\\n\";\n        std::cout << \"  Simulated: \" << (throughput * 100) << \"%\\n\";\n        std::cout << \"  Theoretical S/G: \" << (G * std::exp(-2 * G)) << \"\\n\";\n    }\n};\n\nint main() {\n    PureALOHASimulator sim(0.5, 10000, 1.0);\n    sim.runExperiment();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Pure ALOHA (G = 0.5):\n  Simulated: 18.31%\n  Theoretical S/G: 0.1839\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "python-implementation----pure-aloha-throughput-calculator",
      children: "Python Implementation -- Pure ALOHA Throughput Calculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import math, random\n\nclass PureALOHASimulator:\n    def __init__(self, offered_load, num_slots=10000, frame_time=1.0):\n        self.G = offered_load\n        self.num_slots = num_slots\n        self.frame_time = frame_time\n\n    def simulate(self):\n        successful = 0\n        for _ in range(self.num_slots):\n            arrivals = random.poisson_variate(self.G)\n            times = [random.random() * self.frame_time for _ in range(arrivals)]\n            for i, t1 in enumerate(times):\n                if not any(abs(t1 - t2) < self.frame_time\n                           for j, t2 in enumerate(times) if i != j):\n                    successful += 1\n        return successful / self.num_slots\n\n    @staticmethod\n    def theoretical(G):\n        return G * math.exp(-2 * G)\n\nif __name__ == \"__main__\":\n    sim = PureALOHASimulator(0.5)\n    print(f\"Simulated: {sim.simulate():.4f}, Theory: {sim.theoretical(0.5):.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time per transmission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No coordination; transmit immediately"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput (best)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1/(2e) * C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Channel capacity C; bound by vulnerable period"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collision probability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 - e^(-2G)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poisson arrival during 2t window"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Expected retries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e^(2G) - 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Geometric distribution with success prob e^(-2G)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why the maximum is 18.4%:"
      }), " Each frame spends vulnerable period 2t exposed to collisions. The e^(-2G) factor is the Poisson probability of zero arrivals during this window. This is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "fundamental bound"
      }), " -- no improvement without structural changes (like slotting)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "advantages-and-disadvantages-of-pure-aloha",
      children: "Advantages and Disadvantages of Pure ALOHA"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extremely simple to implement; no synchronization needed; works with any number of stations; no central coordinator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disadvantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum 18.4% channel utilization; unstable under high load; no fairness guarantees; long delays at high G"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implication"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "G -> 0 (very light load)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S ~ G, few collisions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High efficiency, low delay"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "G -> infinity (extreme overload)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S -> 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput collapse -- most frames collide"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "G = 0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Peak throughput at 18.4%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal operating point"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite stations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model holds as n -> infinity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poisson assumption valid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Finite stations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly different distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binomial vs Poisson, negligible for n > 20"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "4212-slotted-aloha",
      children: "4.2.1.2 Slotted ALOHA"
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "real-world-analogy-2",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A turn-based party game."
        }), " Instead of speaking whenever you want, everyone must wait for the \"talking stick\" to be passed. Time is divided into fixed slots, and you can only speak at the start of a slot. This halves the vulnerable period -- only people starting in the same slot cause collisions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "how-slotted-aloha-works-numbered-steps",
      children: "How Slotted ALOHA Works (Numbered Steps)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Time is divided into discrete slots equal to the frame transmission time."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All stations are synchronized to slot boundaries."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Station assembles a frame."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Station ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "waits for the next slot boundary"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Station transmits at the slot start."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wait for ACK. If received -> success. Go to step 3."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If timeout -> collision assumed."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wait random backoff time (in slot units)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Go to step 4."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "vulnerable-period",
      children: "Vulnerable Period"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vulnerable period = t (one slot). Only transmissions in the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "same slot"
      }), " collide."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "throughput-formula",
      children: "Throughput Formula"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "S = G * e^(-G)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Maximum at G = 1: Smax = 1/e ~ 0.368 (36.8%)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Derivation:"
      }), " With vulnerable period halved, probability of no other transmission is e^(-G) instead of e^(-2G)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE slotted_aloha_transmit(frame):\n    WHILE frame not acknowledged:\n        WAIT_UNTIL_NEXT_SLOT_BOUNDARY()\n        transmit(frame)\n        start_timer(TIMEOUT)\n        IF ack_received():  BREAK\n        ELSE:\n            backoff = RANDOM(0, MAX_BACKOFF)\n            WAIT_SLOTS(backoff)\n    END WHILE\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "dry-run-trace-table-1",
      children: "Dry Run Trace Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Station"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Slot"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transmits at slot start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transmits at slot start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collision with A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Senses idle, transmits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Success"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backoff expires, transmits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Success"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backoff expires, transmits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collision with A again"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backoff=3, transmits alone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Success"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "c-implementation",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cmath>\n#include <random>\n\nclass SlottedALOHASimulator {\n    double G; int totalSlots;\n    std::default_random_engine gen;\npublic:\n    SlottedALOHASimulator(double offeredLoad, int slots)\n        : G(offeredLoad), totalSlots(slots) {}\n\n    double simulate() {\n        std::poisson_distribution<int> dist(G);\n        int successful = 0;\n        for (int s = 0; s < totalSlots; ++s) {\n            int arrivals = dist(gen);\n            if (arrivals == 1) successful++;\n        }\n        return (double)successful / totalSlots;\n    }\n};\n\nint main() {\n    for (double g : {0.2, 0.5, 1.0, 1.5, 3.0}) {\n        SlottedALOHASimulator sim(g, 10000);\n        double t = sim.simulate();\n        std::cout << \"G=\" << g << \" simulated=\" << t\n                  << \" theory=\" << (g * exp(-g)) << \"\\n\";\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "G=0.2 simulated=0.1632 theory=0.1637\nG=0.5 simulated=0.3028 theory=0.3033\nG=1.0 simulated=0.3675 theory=0.3679\nG=1.5 simulated=0.3339 theory=0.3347\nG=3.0 simulated=0.1491 theory=0.1494\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "python-implementation",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import math, random\n\nclass SlottedALOHASimulator:\n    def __init__(self, G, slots=10000):\n        self.G = G\n        self.slots = slots\n\n    def simulate(self):\n        successful = 0\n        for _ in range(self.slots):\n            n = random.poisson_variate(self.G)\n            if n == 1:\n                successful += 1\n        return successful / self.slots\n\nif __name__ == \"__main__\":\n    for G in [0.2, 0.5, 1.0, 1.5, 3.0]:\n        sim = SlottedALOHASimulator(G)\n        s = sim.simulate()\n        t = G * math.exp(-G)\n        print(f\"G={G:.2f} sim={s:.4f} theory={t:.4f}\")\n    print(\"\\nComparison: ALOHA vs Slotted ALOHA throughput\")\n    print(f\"{'G':>6} {'Pure S':>10} {'Slotted S':>10}\")\n    for G in [0.1, 0.2, 0.5, 1.0, 1.5, 2.0, 3.0]:\n        print(f\"{G:6.2f} {G*math.exp(-2*G):10.4f} {G*math.exp(-G):10.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "aloha-vs-slotted-aloha----throughput-analysis",
      children: "ALOHA vs Slotted ALOHA -- Throughput Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pure ALOHA"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Slotted ALOHA"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/(2e) ~ 0.184"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/e ~ 0.368"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerable period"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2t (two frame times)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t (one frame time)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slot-level sync needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput formula"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S = Ge^(-2G)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S = Ge^(-G)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Idle slot probability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e^(-G)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e^(-G)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collision probability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 - e^(-2G)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 - e^(-G)(1+G)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (needs clock sync)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Used in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Historical, LoRaWAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Early packet radio, GSM initial access"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " Slotted ALOHA doubles throughput by halving the vulnerable period. The cost is global time synchronization -- non-trivial in distributed systems."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-aloha-throughput-simulator",
      children: "TypeScript Implementation: ALOHA Throughput Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class ALOHASimulator {\n  static pureThroughput(G: number): number {\n    return G * Math.exp(-2 * G);\n  }\n\n  static slottedThroughput(G: number): number {\n    return G * Math.exp(-G);\n  }\n\n  static simulate(G: number, slots: number, isSlotted: boolean): {\n    successes: number; collisions: number; idle: number; throughput: number\n  } {\n    let successes = 0, collisions = 0, idle = 0;\n    for (let t = 0; t < slots; t++) {\n      const transmissions = isSlotted\n        ? this.poissonRandom(G)\n        : this.poissonRandom(2 * G);\n      if (transmissions === 0) idle++;\n      else if (transmissions === 1) successes++;\n      else collisions++;\n    }\n    return {\n      successes,\n      collisions,\n      idle,\n      throughput: successes / slots,\n    };\n  }\n\n  private static poissonRandom(rate: number): number {\n    const L = Math.exp(-rate);\n    let k = 0, p = 1;\n    do {\n      k++;\n      p *= Math.random();\n    } while (p > L);\n    return k - 1;\n  }\n\n  static compare(): void {\n    console.log(\"G\\tPure\\tSlotted\");\n    for (let G = 0.1; G <= 3.0; G += 0.2) {\n      const pure = ALOHASimulator.pureThroughput(G);\n      const slotted = ALOHASimulator.slottedThroughput(G);\n      console.log(`${G.toFixed(1)}\\t${pure.toFixed(4)}\\t${slotted.toFixed(4)}`);\n    }\n  }\n}\n\n// Demo\nALOHASimulator.compare();\nconsole.log(\"\\nSimulation (Slotted, G=1.0, 10000 slots):\");\nconst result = ALOHASimulator.simulate(1.0, 10000, true);\nconsole.log(`Successes: ${result.successes}, Collisions: ${result.collisions}, Idle: ${result.idle}`);\nconsole.log(`Measured throughput: ${result.throughput.toFixed(4)} (expected 0.368)`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "422-csma-carrier-sense-multiple-access",
      children: "4.2.2 CSMA (Carrier Sense Multiple Access)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CSMA improves on ALOHA by having stations ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "listen before transmitting"
      }), " (carrier sensing). If the channel is busy, the station defers, reducing the probability of collision."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "real-world-analogy-3",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A restroom with a door lock."
        }), " Before entering, you check if the door is locked (carrier sense). If locked, you either wait by the door (1-persistent), come back later (non-persistent), or flip a coin to decide whether to wait (p-persistent)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "4221-1-persistent-csma",
      children: "4.2.2.1 1-Persistent CSMA"
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "steps",
      children: "Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sense the channel."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "idle"
        }), " -> transmit immediately with probability 1."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "busy"
        }), " -> keep sensing until idle, then transmit immediately."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If collision detected -> random backoff -> go to step 1."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE one_persistent_csma(frame):\n    WHILE frame not acknowledged:\n        WHILE channel_busy():\n            CONTINUE        // keep sensing (persist)\n        transmit(frame)\n        start_timer(TIMEOUT)\n        IF ack_received():  BREAK\n        ELSE:\n            backoff = RANDOM(0, 2^collision_count - 1)\n            WAIT(backoff * SLOT_TIME)\n            collision_count++\n    END WHILE\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "dry-run-trace",
      children: "Dry Run Trace"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Station A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Station B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Channel"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0-5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transmitting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Busy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Done"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Has data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Senses idle, tx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Senses idle, tx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both wait for idle, both tx"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backoff=2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backoff=5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retransmits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Waiting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Busy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A succeeds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backoff done, tx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Busy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B succeeds"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " When channel transitions busy->idle, ", (0,jsx_runtime.jsx)(_components.em, {
        children: "all"
      }), " waiting stations transmit simultaneously -- guaranteed collision."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "4222-non-persistent-csma",
      children: "4.2.2.2 Non-Persistent CSMA"
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "steps-1",
      children: "Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sense the channel."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "idle"
        }), " -> transmit."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "busy"
        }), " -> wait a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "random"
        }), " amount of time, then go to step 1."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE non_persistent_csma(frame):\n    WHILE frame not acknowledged:\n        IF channel_idle():\n            transmit(frame)\n            start_timer(TIMEOUT)\n            IF ack_received(): BREAK\n            ELSE:\n                backoff = RANDOM(0, MAX_BACKOFF)\n                WAIT(backoff)\n        ELSE:\n            wait_time = RANDOM(0, MAX_WAIT)\n            WAIT(wait_time)\n    END WHILE\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantage:"
      }), " Lower collision probability than 1-persistent (randomized retry times).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disadvantage:"
      }), " Higher idle time -- channel may be idle while stations are in random wait."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "4223-p-persistent-csma",
      children: "4.2.2.3 p-Persistent CSMA"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Used in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "slotted channels"
      }), " where time is divided into discrete slots."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "steps-2",
      children: "Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sense the channel at the start of a slot."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "idle"
        }), ": Transmit with probability p. Defer with probability 1-p."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "busy"
        }), " -> wait for next slot, go to step 1."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If collision -> random backoff, go to step 1."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "pseudocode-4",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE p_persistent_csma(frame, p):\n    WHILE frame not acknowledged:\n        WAIT_FOR_SLOT_BOUNDARY()\n        IF channel_busy(): CONTINUE\n        // Channel idle\n        IF RANDOM(0.0, 1.0) <= p:\n            transmit(frame)\n            start_timer(TIMEOUT)\n            IF ack_received(): BREAK\n            ELSE:\n                backoff = RANDOM(0, MAX_BACKOFF)\n                WAIT_SLOTS(backoff)\n        ELSE:\n            CONTINUE  // defer, try next slot\n    END WHILE\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "optimal-p-selection",
      children: "Optimal p Selection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For n stations with probability p, optimal p ~ 1/n. Expected transmissions in a slot = np. Probability exactly one transmits = np(1-p)^(n-1), maximized when p = 1/n (success probability approaches 1/e ~ 0.368 as n -> infinity)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "4224-csmacd-csma-with-collision-detection",
      children: "4.2.2.4 CSMA/CD (CSMA with Collision Detection)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CSMA/CD extends CSMA by ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "detecting collisions during transmission"
      }), " -- the sender monitors the channel for interference while transmitting."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "real-world-analogy-4",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Two people trying to walk through the same door."
        }), " Before entering, you check if someone is coming (carrier sense). If clear, you enter -- but if you bump into someone, you both stop immediately (collision detection), step back (jam signal), wait a random time (backoff), and try again."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "numbered-steps",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Station senses the channel."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "idle"
        }), " -> ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "transmit"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "listen"
        }), " simultaneously."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no collision"
        }), " detected during transmission -> success."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "collision"
        }), " detected:\na. Transmit a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "48-bit jam signal"
        }), " (ensures all stations detect collision).\nb. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Abort"
        }), " transmission.\nc. Increment collision counter i.\nd. Choose k uniformly from [0, 2^i - 1].\ne. Wait k * tau time (tau = 512 bit-times for 10 Mbps Ethernet).\nf. If i < 16, go to step 1. Otherwise, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "discard"
        }), " the frame."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "pseudocode-5",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE csmacd_transmit(frame):\n    collision_count = 0\n    WHILE collision_count < 16:\n        sense channel\n        WHILE channel_busy(): CONTINUE\n        transmit(frame)\n        IF no_collision_detected(): RETURN SUCCESS\n        transmit_jam_signal(48 BITS)\n        collision_count++\n        k = RANDOM(0, 2^collision_count - 1)\n        WAIT(k * SLOT_TIME)\n    END WHILE\n    RETURN FAILURE  // frame discarded after 16 failures\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "minimum-frame-size-requirement",
      children: "Minimum Frame Size Requirement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For collision detection, sender must ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "still be transmitting"
      }), " when collision signal returns from farthest station:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Minimum frame size >= 2 * propagation_delay * bandwidth"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For 10 Mbps Ethernet (max diameter 2500 m, 4 repeaters):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Round-trip prop ~ 51.2 us"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimum frame = 51.2 us * 10 Mbps = 512 bits = 64 bytes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This is why Ethernet's minimum frame is 64 bytes (46 payload + 18 headers)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "binary-exponential-backoff-algorithm",
      children: "Binary Exponential Backoff Algorithm"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Collision #"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Window [0, 2^i - 1]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max Wait (slots)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 slot = 512 bit-times"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 7]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 15]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 31]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 63]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "63"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 127]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "127"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 255]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "255"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 511]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "511"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10-15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 1023]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capped at i=10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frame discarded"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "c-implementation----csmacd-backoff-simulator",
      children: "C++ Implementation -- CSMA/CD Backoff Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <random>\n#include <vector>\n#include <iomanip>\n\nclass BackoffSimulator {\n    static const int MAX_COL = 16;\n    static const int SLOT_US = 51;\n    std::default_random_engine gen;\npublic:\n    struct Result {\n        int attempts, totalSlots;\n        double totalTimeUs;\n        bool success;\n        std::vector<int> waits;\n    };\n\n    Result simulate() {\n        Result r{0, 0, 0.0, false, {}};\n        for (int i = 0; i < MAX_COL; ++i) {\n            int w = (i < 10) ? (1 << i) : 1024;\n            std::uniform_int_distribution<int> d(0, w - 1);\n            int k = d(gen);\n            r.waits.push_back(k);\n            r.totalSlots += k;\n            r.attempts++;\n            if (k == 0) { r.success = true; break; }\n        }\n        r.totalTimeUs = r.totalSlots * SLOT_US;\n        return r;\n    }\n\n    void runTrial(int n) {\n        int totalA = 0, totalT = 0, drops = 0;\n        for (int f = 0; f < n; ++f) {\n            auto r = simulate();\n            totalA += r.attempts;\n            totalT += r.totalSlots;\n            if (!r.success) drops++;\n        }\n        std::cout << \"CSMA/CD Backoff (\" << n << \" frames):\\n\";\n        std::cout << \"  Avg attempts: \" << ((double)totalA/n) << \"\\n\";\n        std::cout << \"  Avg wait: \" << ((double)totalT * SLOT_US / n) << \" us\\n\";\n        std::cout << \"  Drop rate: \" << ((double)drops/n*100) << \"%\\n\";\n    }\n};\n\nint main() {\n    BackoffSimulator sim;\n    auto r = sim.simulate();\n    std::cout << \"Single frame backoff trace:\\n\";\n    for (size_t i = 0; i < r.waits.size(); ++i)\n        std::cout << \"  Attempt \" << (i+1) << \": waited \" << r.waits[i]\n                  << \" slots\\n\";\n    std::cout << \"  \" << (r.success ? \"SUCCESS\" : \"DROPPED\") << \"\\n\\n\";\n    sim.runTrial(10000);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "python-implementation----csmacd-backoff-simulator",
      children: "Python Implementation -- CSMA/CD Backoff Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import random\n\nclass CSMACDBackoffSimulator:\n    SLOT_US = 51.2\n    MAX_COL = 16\n    BACKOFF_CAP = 10\n\n    def simulate_single(self):\n        total_slots = 0\n        waits = []\n        for i in range(self.MAX_COL):\n            window = min(1 << i, 1 << self.BACKOFF_CAP)\n            k = random.randrange(0, window)\n            waits.append(k)\n            total_slots += k\n            if k == 0:\n                return (i + 1, total_slots * self.SLOT_US, True, waits)\n        return (self.MAX_COL, total_slots * self.SLOT_US, False, waits)\n\n    def run_trial(self, num_frames=10000):\n        total_attempts = total_time = drops = 0\n        for _ in range(num_frames):\n            att, t, suc, _ = self.simulate_single()\n            total_attempts += att\n            total_time += t\n            if not suc:\n                drops += 1\n        print(f\"CSMA/CD Backoff ({num_frames} frames):\")\n        print(f\"  Avg attempts: {total_attempts/num_frames:.2f}\")\n        print(f\"  Avg wait: {total_time/num_frames:.1f} us\")\n        print(f\"  Drop rate: {drops/num_frames*100:.2f}%\")\n\n    def trace_single(self):\n        att, t, suc, waits = self.simulate_single()\n        print(\"Single frame backoff trace:\")\n        for i, k in enumerate(waits):\n            print(f\"  Attempt {i+1}: waited {k} slots\")\n        print(f\"  {att} attempts, {t:.1f} us, {'SUCCESS' if suc else 'DROPPED'}\")\n\nif __name__ == \"__main__\":\n    sim = CSMACDBackoffSimulator()\n    sim.trace_single()\n    print()\n    sim.run_trial()\n    print(\"\\nBackoff window growth:\")\n    for i in range(1, 17):\n        w = min(1 << i, 1024)\n        print(f\"  Collision {i:2d}: window [0, {w-1:4d}], max {w-1:4d} slots\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Detection time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(2*prop_delay)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Round-trip time to farthest station"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backoff time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k * slot)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k uniform in [0, 2^i-1], exponential growth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Expected attempts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential backoff adapts to n contending stations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Drop probability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2^(-16) ~ 0.0015%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After 16 collisions, frame discarded"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why exponential backoff?"
      }), " As load increases, backoff windows grow exponentially, reducing retransmission rate and preventing throughput collapse. The algorithm is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "adaptive"
      }), " -- self-tunes without explicit coordination."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-csmacd-backoff-simulator",
      children: "TypeScript Implementation: CSMA/CD Backoff Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class CSMACDBackoffSimulator {\n  private static readonly MAX_COLLISIONS = 16;\n  private static readonly SLOT_TIME_US = 51.2; // 512 bits at 10 Mbps\n\n  simulateFrame(): { attempts: number; totalWaitUs: number; success: boolean } {\n    let attempts = 1;\n    let totalWait = 0;\n\n    for (let i = 0; i < CSMACDBackoffSimulator.MAX_COLLISIONS; i++) {\n      // Attempt transmission\n      if (Math.random() < 0.5) { // simplified: 50% channel success\n        return { attempts, totalWaitUs: totalWait, success: true };\n      }\n      // Collision → exponential backoff\n      const window = Math.min(Math.pow(2, i), 1024);\n      const k = Math.floor(Math.random() * window);\n      totalWait += k * CSMACDBackoffSimulator.SLOT_TIME_US;\n      attempts++;\n    }\n    return { attempts, totalWaitUs: totalWait, success: false };\n  }\n\n  runTrial(numFrames: number): void {\n    let totalAttempts = 0;\n    let totalTime = 0;\n    let drops = 0;\n\n    for (let f = 0; f < numFrames; f++) {\n      const result = this.simulateFrame();\n      totalAttempts += result.attempts;\n      totalTime += result.totalWaitUs;\n      if (!result.success) drops++;\n    }\n\n    console.log(`CSMA/CD Backoff (${numFrames} frames):`);\n    console.log(`  Avg attempts: ${(totalAttempts / numFrames).toFixed(2)}`);\n    console.log(`  Avg wait: ${(totalTime / numFrames).toFixed(1)} us`);\n    console.log(`  Drop rate: ${(drops / numFrames * 100).toFixed(2)}%`);\n  }\n\n  traceBackoff(): void {\n    console.log(\"Backoff window growth:\");\n    for (let i = 0; i < 16; i++) {\n      const w = Math.min(1 << i, 1024);\n      console.log(`  Collision ${(i + 1).toString().padStart(2, ' ')}: window [0, ${(w - 1).toString().padStart(4, ' ')}]`);\n    }\n  }\n}\n\n// Demo\nconst sim = new CSMACDBackoffSimulator();\nsim.traceBackoff();\nsim.runTrial(10000);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "4225-csmaca-csma-with-collision-avoidance",
      children: "4.2.2.5 CSMA/CA (CSMA with Collision Avoidance)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CSMA/CA is used in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "wireless LANs (802.11)"
      }), " where collision detection is impractical -- a WiFi radio cannot transmit and listen simultaneously on the same frequency (transmitted signal drowns received signals)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "real-world-analogy-5",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A group chat with \"raise hand.\""
        }), " Before speaking, you send \"raise hand\" (RTS). The moderator responds \"you're up\" (CTS). Everyone else sees the CTS and stays silent until you're done (NAV). This avoids two people speaking at once when they can't see each other (hidden terminals)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "steps-with-rtscts",
      children: "Steps (with RTS/CTS)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Sense channel for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DIFS"
        }), " (DCF Inter-Frame Space, 34 us for 802.11a)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If channel ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "idle"
        }), " for DIFS:\na. Optionally send ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "RTS"
        }), " to receiver.\nb. Receiver responds with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "CTS"
        }), " after ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "SIFS"
        }), " (16 us).\nc. Other stations set ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NAV"
        }), " based on RTS/CTS duration.\nd. Sender transmits data after SIFS.\ne. Receiver sends ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ACK"
        }), " after SIFS."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If channel ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "busy"
        }), " -> enter ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "backoff"
        }), ":\na. Choose random backoff from [0, CW].\nb. Decrement each idle slot. Freeze when busy.\nc. Transmit when counter reaches 0."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If no ACK -> double CW up to CW_max -> go to 3."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "pseudocode-6",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE csmaca_transmit(frame, use_rts):\n    CW = CW_MIN\n    WHILE frame not acknowledged:\n        sense channel for DIFS duration\n        IF channel_busy_during_DIFS():\n            backoff = RANDOM(0, CW)\n            WHILE backoff > 0:\n                IF channel_idle_for_slot(): backoff--\n                ELSE: WAIT_UNTIL_IDLE()\n        IF use_rts:\n            send_rts(frame.receiver); WAIT_SIFS()\n            IF not receive_cts():\n                CW = MIN(CW * 2, CW_MAX); CONTINUE\n        transmit_data(frame); WAIT_SIFS()\n        IF not receive_ack():\n            CW = MIN(CW * 2, CW_MAX)\n            backoff = RANDOM(0, CW)\n        ELSE:\n            CW = CW_MIN; RETURN SUCCESS\n    END WHILE\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "dry-run-trace----rtscts-with-hidden-terminal",
      children: "Dry Run Trace -- RTS/CTS with Hidden Terminal"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "A cannot hear B, both can reach AP\n\nTime | Station A   | Station B   | AP          | Notes\n-----|-------------|-------------|-------------|----------------------\n  0  | RTS->       | --          | --          | A sends RTS to AP\n  1  | --          | --          | <-CTS to A  | AP grants channel\n  2  | NAV=100     | NAV=100     | --          | B sees CTS, sets NAV\n  3  | Data->      | NAV=99      | --          | A transmits data\n  4  | --          | NAV=98      | --          | B defers (NAV > 0)\n ... | ...         | ...         | ...         | ...\n103  | --          | NAV=0       | ACK->A      | Transmission done\n104  | --          | Backoff=5   | Idle        | B starts contention\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "advantages-and-disadvantages-1",
      children: "Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No collision detection needed; works in wireless; hidden terminal mitigation via RTS/CTS; NAV provides virtual carrier sense"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disadvantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower throughput than CSMA/CD; RTS/CTS overhead; exposed terminal problem; backoff increases delay"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "csma-variants-comparison",
      children: "CSMA Variants Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "1-Persistent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Non-Persistent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "p-Persistent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CSMA/CD"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CSMA/CA"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collision handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retransmit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retransmit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retransmit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detect during tx, jam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid via virtual sensing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Idle behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tx immediately"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tx immediately"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tx with prob p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tx immediately"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wait DIFS, then tx"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Busy behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wait until idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random wait"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wait for slot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wait until idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random backoff"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collision rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (greedy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controlled (p)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detected + recovered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate-High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (tuned p)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (overhead)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slot sync"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slot sync (backoff)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Used in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classical Eth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some radio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slotted systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IEEE 802.3 Eth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IEEE 802.11 WiFi"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "423-random-access-vs-controlled-access",
      children: "4.2.3 Random Access vs Controlled Access"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Random Access"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Controlled Access"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Station decides independently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Central authority or token decides"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collisions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible (detected or avoided)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable, unbounded under high load"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic, bounded"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fairness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probabilistic (backoff helps)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strictly fair (round-robin)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead (light load)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (transmit immediately)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (token circulation, polling)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead (heavy load)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (collisions + backoff)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (no wasted slots)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (no central point)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (token rotation time)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time suitability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALOHA, CSMA/CD, CSMA/CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token Ring, FDDI, Polling"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "43-controlled-access-protocols",
      children: "4.3 Controlled Access Protocols"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In controlled access, stations must receive permission before transmitting. No collisions occur because only one station transmits at a time."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "431-reservation",
      children: "4.3.1 Reservation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "real-world-analogy-6",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A meeting room booking system."
        }), " Before you can use the conference room, you must reserve a time slot on the calendar. Once booked, the room is yours for that period -- no conflicts."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "how-it-works",
      children: "How It Works"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Time is divided into ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "reservation intervals"
        }), " followed by ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "data transmission intervals"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "During the reservation interval, stations reserve slots (e.g., set a bit in a reservation frame)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "During the data interval, stations transmit in their reserved slots, collision-free."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "pseudocode-7",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE reservation_transmit(frame):\n    WAIT_FOR_RESERVATION_SLOT()\n    set_reservation_bit(my_station_id)\n    WAIT_FOR_MY_RESERVED_SLOT()\n    transmit(frame)\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "advantages-and-disadvantages-2",
      children: "Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No collisions; guaranteed bandwidth; simple logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disadvantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wasted slots if reserved but unused; reservation overhead; fixed allocation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "432-polling",
      children: "4.3.2 Polling"
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "real-world-analogy-7",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A teacher calling on students."
        }), " The teacher asks each student in turn whether they have an answer. Only the student called on may speak."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "how-it-works-1",
      children: "How It Works"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "primary station"
        }), " (controller) sends a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "poll"
        }), " frame to a secondary station."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The secondary transmits data (or \"no data\" frame) in response."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The primary polls the next secondary."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "steps-3",
      children: "Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Primary selects next secondary to poll."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Primary sends ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "POLL"
        }), " frame to the secondary."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Secondary responds with data (or ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NAK"
        }), " if no data)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Primary receives data, sends ACK."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Go to step 1."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "pseudocode-8",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE primary_poll(stations[]):\n    WHILE True:\n        FOR each station in stations:\n            send_poll(station)\n            response = listen()\n            IF response == DATA:\n                receive_data(response)\n                send_ack(station)\n    END WHILE\nEND PROCEDURE\n\nPROCEDURE secondary_respond():\n    WHILE True:\n        poll = wait_for_poll()\n        IF has_data(): send_data(my_frame)\n        ELSE: send_nak()\n    END WHILE\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "advantages-and-disadvantages-3",
      children: "Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No collisions; priority support; bounded delay; central management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disadvantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polling overhead; single point of failure; stations polled even with no data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "433-token-passing",
      children: "4.3.3 Token Passing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "real-world-analogy-8",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A talking stick in a council meeting."
        }), " Only the person holding the ceremonial stick may speak. When done, they pass it to the next person. Everyone gets a turn; no interruptions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "how-it-works-ieee-8025-token-ring",
      children: "How It Works (IEEE 802.5 Token Ring)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A special frame called the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "token"
        }), " circulates among stations in a fixed logical ring."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A station ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "captures"
        }), " the token when it has data to transmit."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The station transmits for a maximum ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "token holding time"
        }), " (THT)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After transmission, the station ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "releases"
        }), " the token to the next station."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "steps-4",
      children: "Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Station listens for the token."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If token arrives and no data -> forward token to next station."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If token arrives and data exists:\na. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Capture"
        }), " the token (remove from ring).\nb. Transmit data frame(s).\nc. Wait for frame to circulate back (receiver copies, sender removes).\nd. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Release"
        }), " token after THT expires."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor station handles token loss / duplicate token."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "pseudocode-9",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE token_ring_station():\n    WHILE True:\n        frame = receive_from_ring()\n        IF frame is TOKEN:\n            IF data_queue not empty:\n                frame_to_send = data_queue.dequeue()\n                send_to_ring(frame_to_send)\n                start_timer(THT)\n                received = receive_from_ring()\n                IF received.address == MY_ADDRESS:\n                    NULL  // frame returned, receiver got it\n                send_to_ring(TOKEN)  // release token\n            ELSE:\n                send_to_ring(TOKEN)  // forward token\n        ELSE IF frame is DATA:\n            IF frame.destination == MY_ADDRESS:\n                deliver_to_upper_layer(frame)\n            send_to_ring(frame)  // forward\n    END WHILE\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "dry-run-trace----token-ring-with-3-stations",
      children: "Dry Run Trace -- Token Ring with 3 Stations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Ring order: A -> B -> C -> A\n\nEvent | Action                        | Ring State\n------|-------------------------------|------------\n  1   | Token circulates              | Token: A -> B\n  2   | B has data, captures token    | B seizes token\n  3   | B transmits to C              | Data(B->C): B -> C\n  4   | C receives frame              | C copies frame\n  5   | C forwards frame              | Data: C -> A\n  6   | A forwards frame              | Data: A -> B\n  7   | B sees frame back, removes it | B removes frame\n  8   | B releases new token          | Token: B -> C\n  9   | C has no data, forwards       | Token: C -> A\n 10   | A has data, captures token    | A seizes token\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "advantages-and-disadvantages-4",
      children: "Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collision-free; deterministic delay (excellent for real-time); fair access; bounded latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disadvantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token maintenance overhead; single ring failure can disable network; lower utilization under light load; complex token recovery"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-token-passing-simulator",
      children: "TypeScript Implementation: Token Passing Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface TokenStation {\n  id: number;\n  hasData: boolean;\n  data: string[];\n}\n\nclass TokenPassingSimulator {\n  private stations: TokenStation[];\n  private currentToken: number;\n  private ringUp: boolean = true;\n\n  constructor(stationList: string[]) {\n    this.stations = stationList.map((name, i) => ({\n      id: i,\n      hasData: Math.random() > 0.5,\n      data: [name],\n    }));\n    this.currentToken = 0;\n  }\n\n  simulate(rounds: number): void {\n    for (let r = 0; r < rounds; r++) {\n      if (!this.ringUp) {\n        console.log(\"Ring is down — cannot transmit\");\n        return;\n      }\n\n      const station = this.stations[this.currentToken];\n      console.log(`--- Round ${r + 1}: Token at Station ${station.id} (${station.data[0]}) ---`);\n\n      if (station.hasData) {\n        const msg = `Data from ${station.data[0]}`;\n        console.log(`  Station ${station.id} captures token, sends: \"${msg}\"`);\n        station.hasData = false;\n\n        // Forward token around ring\n        for (let hop = 1; hop <= this.stations.length; hop++) {\n          const destIdx = (this.currentToken + hop) % this.stations.length;\n          const dest = this.stations[destIdx];\n          console.log(`  ${station.data[0]} -> ${dest.data[0]}: forwarding frame`);\n          if (dest.id === station.id) {\n            console.log(`  Frame returned to sender — ${station.data[0]} removes it`);\n            break;\n          }\n        }\n      } else {\n        console.log(`  Station ${station.id} has no data — passes token`);\n      }\n\n      // Pass token to next station\n      this.currentToken = (this.currentToken + 1) % this.stations.length;\n    }\n  }\n\n  addLoad(stationId: number): void {\n    this.stations[stationId].hasData = true;\n  }\n\n  breakRing(): void {\n    this.ringUp = false;\n  }\n\n  recoverRing(): void {\n    this.ringUp = true;\n    console.log(\"Ring recovered — monitoring station regenerated token\");\n  }\n}\n\n// Demo: 4-station token ring\nconst ring = new TokenPassingSimulator([\"A\", \"B\", \"C\", \"D\"]);\nring.addLoad(0);\nring.addLoad(2);\nring.simulate(4);\n\n// Test failure and recovery\nconsole.log(\"\\n--- Ring Failure Scenario ---\");\nring.breakRing();\nring.simulate(1);\nring.recoverRing();\nring.simulate(1);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "44-channelization",
      children: "4.4 Channelization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Channelization is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "collision-free"
      }), " approach where the shared channel is divided into independent sub-channels. Stations get dedicated capacity -- no contention, no collisions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "441-fdma-frequency-division-multiple-access",
      children: "4.4.1 FDMA (Frequency Division Multiple Access)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "real-world-analogy-9",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Radio stations."
        }), " Each station broadcasts on its own frequency. You tune your radio to 101.5 FM for one station, 98.7 FM for another. They never interfere because they use different frequencies."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "how-it-works-2",
      children: "How It Works"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The total frequency band is divided into N non-overlapping frequency channels."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each station is assigned a dedicated frequency band."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All stations transmit simultaneously on their own frequencies."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Guard bands prevent adjacent-channel interference."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "advantages-and-disadvantages-5",
      children: "Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No collisions; continuous transmission; simple hardware; good for constant-bit-rate traffic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disadvantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequency spectrum is scarce; wasted bandwidth if station idle; hard to add/remove stations; guard bands consume spectrum"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "442-tdma-time-division-multiple-access",
      children: "4.4.2 TDMA (Time Division Multiple Access)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "real-world-analogy-10",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Round-robin interviews."
        }), " Each candidate gets a fixed 15-minute slot. They speak only during their slot. No one interrupts because everyone knows their allocated time."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "how-it-works-3",
      children: "How It Works"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Time is divided into ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "frames"
        }), ", each frame into N ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "time slots"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each station is assigned a dedicated slot in every frame."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stations transmit only during their slot."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Guard times prevent overlap due to clock drift."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "pseudocode-10",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE tdma_transmit(frame, my_slot, total_slots):\n    WHILE True:\n        // Wait for my slot in next frame\n        current_slot = get_current_slot_number()\n        WHILE current_slot != my_slot:\n            current_slot = get_current_slot_number()\n            WAIT_SLOT_DURATION()\n        // My slot -- transmit\n        transmit(frame)\n        // Wait for next frame\n        WAIT((total_slots - 1) * SLOT_DURATION)\n    END WHILE\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "advantages-and-disadvantages-6",
      children: "Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No collisions; digital (works with any modulation); flexible slot allocation; no frequency guard bands"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disadvantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires precise time synchronization; wasted slots if station idle; higher latency than FDMA (must wait for slot); guard time overhead"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "443-cdma-code-division-multiple-access",
      children: "4.4.3 CDMA (Code Division Multiple Access)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "real-world-analogy-11",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A room of people speaking different languages."
        }), " Two people can talk simultaneously because each uses a language the other doesn't understand. The receiver \"understands\" only their assigned code, extracting their signal from the noise."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "how-it-works-4",
      children: "How It Works"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each station is assigned a unique ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "spreading code"
        }), " (orthogonal to all others)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each bit is encoded as a sequence of ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "chips"
        }), " (e.g., 64 or 128 chips per bit)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All stations transmit simultaneously on the same frequency."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The receiver ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "correlates"
        }), " the received signal with the sender's code to recover original bits."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Codes are orthogonal: sum(A_i * B_i) = 0."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "mathematical-example",
      children: "Mathematical Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Code A: +1 -1 -1 +1 -1 +1 +1 -1\nCode B: +1 +1 -1 -1 +1 +1 -1 -1\n\nTo send bit 1: transmit code as-is.\nTo send bit 0: transmit code inverted.\n\nIf A sends 1 and B sends 1 simultaneously:\nReceived: (+2, 0, -2, 0, 0, +2, 0, -2)\n\nReceiver for A: correlate with Code A\n  = (+2*1 + 0*-1 + -2*-1 + 0*1 + 0*-1 + 2*1 + 0*1 + -2*-1) / 8\n  = 8/8 = 1  (correct bit 1 recovered)\n\nReceiver for B: correlate with Code B\n  = (+2*1 + 0*1 + -2*-1 + 0*-1 + 0*1 + 2*1 + 0*-1 + -2*-1) / 8\n  = 8/8 = 1  (correct bit 1 recovered)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Both bits recovered despite simultaneous transmission on the same frequency."
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "pseudocode-11",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE cdma_encode(bit, code[]):\n    // Walsh-Hadamard encoding\n    FOR i = 0 TO len(code) - 1:\n        chip[i] = bit * code[i]\n    RETURN chip[]\n\nPROCEDURE cdma_decode(received[], code[]):\n    sum = 0\n    FOR i = 0 TO len(code) - 1:\n        sum += received[i] * code[i]\n    IF sum > 0: RETURN 1\n    ELSE: RETURN 0\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "advantages-and-disadvantages-7",
      children: "Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All stations use full spectrum; resistant to interference and jamming; soft capacity limit (more users = more noise); no synchronization needed; security by code secrecy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disadvantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex hardware (correlators); near-far problem (strong signals drown weak ones); orthogonal codes limited in number; code acquisition time"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "channelization-comparison-table",
      children: "Channelization Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FDMA"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TDMA"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CDMA"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Division basis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simultaneous transmission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (each in own slot)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (guard bands)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (guard times)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (full band)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (slot sync)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (code sync)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (fixed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (soft capacity)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Near-far problem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Guard overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guard bands"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guard times"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No guard needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Example systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Analog TV, GSM (initial), Satellite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GSM, Bluetooth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3G/UMTS, IS-95, GPS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "45-mac-addressing",
      children: "4.5 MAC Addressing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-a-mac-address",
      children: "What Is a MAC Address?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MAC (Media Access Control) address"
      }), " is a 48-bit (6-byte) hardware identifier assigned to network interfaces by manufacturers. It operates at Layer 2 (Data Link Layer) and is used for local delivery on a LAN segment."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "structure-of-a-48-bit-mac-address",
      children: "Structure of a 48-bit MAC Address"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Bit 0                                                              Bit 47\n+-------------------- 24 bits - OUI ------------------------+---- 24 bits - NIC-specific ----+\n| I/G | U/L | 22 bits                                        | 24 bits                       |\n+-----+-----+------------------------------------------------+-------------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "I/G (Individual/Group) bit"
        }), " (bit 0): 0 = unicast, 1 = multicast/broadcast"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "U/L (Universal/Local) bit"
        }), " (bit 1): 0 = globally unique (OUI-assigned), 1 = locally administered"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OUI (Organizationally Unique Identifier)"
        }), ": 24 bits assigned by IEEE to manufacturers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NIC-specific"
        }), ": 24 bits assigned by the manufacturer (unique per device)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-mac-address-formats",
      children: "Common MAC Address Formats"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Format"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Usage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Colon-hex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "00:1A:2B:3C:4D:5E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux, many tools"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hyphen-hex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "00-1A-2B-3C-4D-5E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cisco 3-group"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "001A.2B3C.4D5E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cisco IOS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "00:1a:2b:3c:4d:5e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lowercase hex"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "address-types",
      children: "Address Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "I/G Bit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MAC Address"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Usage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unicast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Individual address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single interface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Point-to-point delivery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multicast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Group address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Group of stations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multicast groups (e.g., 01:00:5E for IPv4 mcast)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FF:FF:FF:FF:FF:FF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All stations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARP request, DHCP discovery"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-mac-addressing-works-in-a-network",
      children: "How MAC Addressing Works in a Network"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Source device encapsulates the frame with destination and source MAC addresses."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Switch learns source MAC -> port mapping (transparent bridging)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Switch forwards frame only to the port where destination MAC is known (or floods for unknown)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Receiver checks destination MAC: if it matches its own (or is broadcast/multicast), it processes the frame; otherwise, it drops it."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-mac-address-assignment",
      children: "Example MAC Address Assignment"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Manufacturer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OUI (hex)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OUI (binary prefix)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cisco"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "00:00:0C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "00000000 00000000 00001100"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "00:AA:00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "00000000 10101010 00000000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dell"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "00:14:22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "00000000 00010100 00100010"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Apple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "00:1B:63"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "00000000 00011011 01100011"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-mac-addressing",
      children: "Edge Cases in MAC Addressing"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAC address conflict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two devices with same MAC on same LAN (rare but causes intermittent connectivity)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Locally administered address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bit 1 = 1; used for virtual interfaces, bridges, testing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multicast storm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excessive multicast traffic due to many group memberships"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAC spoofing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changing MAC address to impersonate another device"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "46-collision-domain-vs-broadcast-domain",
      children: "4.6 Collision Domain vs Broadcast Domain"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "collision-domain",
      children: "Collision Domain"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "collision domain"
      }), " is a network segment where two or more stations can cause a collision when transmitting simultaneously."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Portion of network where frame collisions can occur"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Boundary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited by switches (switch ports terminate collision domains)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "In a hub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All ports in one collision domain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "In a switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each port is a separate collision domain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Effect on throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared -- only one station can transmit at a time per domain"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "broadcast-domain",
      children: "Broadcast Domain"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "broadcast domain"
      }), " is a network segment where a broadcast frame (FF:FF:FF:FF:FF:FF) reaches all stations."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Portion of network where broadcast frames propagate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Boundary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited by routers (routers do not forward broadcasts)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "In a switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All ports in one broadcast domain (VLAN separates)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "In a router"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each interface is a separate broadcast domain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Effect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcast storms can consume bandwidth"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comparison-table",
      children: "Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Collision Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Broadcast Domain"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Layer 1 / Layer 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Layer 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Boundary device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch (each port)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Router (each interface)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single collision domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single broadcast domain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-port collision domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One broadcast domain (unless VLAN)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Router"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-port collision domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-port broadcast domain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collisions reduce throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcast storms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "How to isolate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace hubs with switches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use VLANs or routers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Affected by CSMA/CD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (collisions occur here)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "visual-example",
      children: "Visual Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Network:\n  [A]---[Hub]---[B]        [C]---[Switch]---[D]---[Router]---[E]\n\nCollision domains:\n  {A, Hub, B} = one domain (hub shares)\n  {C} = one domain (switch isolates)\n  {D} = one domain\n  {E} = one domain\n\nBroadcast domains:\n  {A, B, C, D} = one domain (switch forwards broadcasts)\n  {E} = separate domain (router stops broadcasts)\n\nEvent: A sends broadcast\n  -> Received by B (hub forwards)\n  -> Received by C, D (switch forwards)\n  -> NOT received by E (router drops broadcast)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "47-ieee-8022-llc",
      children: "4.7 IEEE 802.2 LLC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Logical Link Control (LLC) sublayer sits between the MAC sublayer and the network layer. LLC provides three service types:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Service"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Flow Control"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ACK"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unacknowledged connectionless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection-oriented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acknowledged connectionless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (ack per frame)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LLC uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Service Access Points (SAPs)"
      }), " to identify the upper-layer protocol:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DSAP (Destination SAP): 1 byte"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SSAP (Source SAP): 1 byte"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Control: 1-2 bytes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SAP values: 0x06 = IP, 0xE0 = IPX, 0xFE = SNAP."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In modern Ethernet, the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "EtherType"
      }), " field in the MAC header directly identifies the upper-layer protocol, making LLC largely unnecessary for IP networks. LLC survives primarily in 802.11 (WiFi) and industrial networks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "llc-pdu-format",
      children: "LLC PDU Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+--------+--------+----------+\n| DSAP   | SSAP   | Control  |\n| (1 B)  | (1 B)  | (1-2 B)  |\n+--------+--------+----------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages-8",
      children: "Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol multiplexing via SAPs; connection-oriented option for reliable delivery; standardized across IEEE 802 networks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disadvantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead (3-4 bytes per frame); largely obsolete in Ethernet (EtherType used instead); not used by IP over Ethernet"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "48-performance-comparison-of-mac-protocols",
      children: "4.8 Performance Comparison of MAC Protocols"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The efficiency of a MAC protocol is defined as the fraction of channel capacity used for successful data transmission."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max Throughput"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Collisions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Coordination"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pure ALOHA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18.4%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LoRaWAN, sporadic IoT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Slotted ALOHA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "36.8%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slot sync"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial access, packet radio"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1-persistent CSMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High at transitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carrier sense"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Historical Ethernet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Non-persistent CSMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random wait"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-load distributed nets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "p-persistent CSMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal with tuned p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controlled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probabilistic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slotted channels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSMA/CD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100% (practical)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detected + retried"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sense + detect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (variable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classical Ethernet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSMA/CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower than CD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoided"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual sense (NAV)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "802.11 WiFi"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Token Passing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100% (heavy load)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token ownership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FDDI, industrial, real-time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FDMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100% (assigned)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequency allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Analog radio, satellite"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TDMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100% (assigned)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slot assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GSM, Bluetooth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CDMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Soft capacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code correlation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3G cellular"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key trade-off:"
      }), " Random access protocols (ALOHA -> CSMA/CA) trade determinism for simplicity and bursty-traffic efficiency. Controlled access protocols (token passing -> channelization) trade simplicity for predictability and collision-free operation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "49-interview-corner",
      children: "4.9 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-csmacd-vs-csmaca----key-differences",
      children: "Q1: CSMA/CD vs CSMA/CA -- Key Differences"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CSMA/CD"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CSMA/CA"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wired (Ethernet)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wireless (WiFi)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collision handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detects during transmission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoids before transmission"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can transmit + listen?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (wired)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (radio can't hear while sending)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "After collision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transmit jam signal (48 bits), backoff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No jam signal, just backoff"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hidden terminal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not an issue (all stations hear each other on wire)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Major problem (solved by RTS/CTS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (~90%+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (overhead from virtual carrier sense)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frame size constraint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum size ensures collision detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum size to avoid channel hogging"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-why-is-collision-detection-impractical-in-wireless",
      children: "Q2: Why Is Collision Detection Impractical in Wireless?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-interference"
        }), ": A radio's transmitted signal is orders of magnitude stronger than any received signal. The transmitter cannot distinguish between a collision and its own transmission."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dynamic range"
        }), ": Transmit power (", (0,jsx_runtime.jsx)(_components.del, {
          children: "20 dBm) drowns out received signals ("
        }), " -70 dBm). Difference is 90 dB (factor of 1 billion)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Half-duplex constraint"
        }), ": WiFi operates on a single frequency -- transmit and receive cannot happen simultaneously."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hidden terminal"
        }), ": Even if CD were possible, the sender can't hear stations outside its range that might transmit to the same receiver."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-binary-exponential-backoff----why-exponential",
      children: "Q3: Binary Exponential Backoff -- Why Exponential?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Adaptive to load"
        }), ": Under light load, small windows -> low latency. Under heavy load, large windows -> reduced retransmission rate -> prevents collapse."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fairness"
        }), ": Stations that have collided many times wait longer, giving newer frames a chance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stability"
        }), ": Without exponential growth, the network would oscillate between idle and collision-saturated states."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Proven in practice"
        }), ": Used in Ethernet since 1980, billions of devices."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-token-ring-vs-ethernet----why-did-ethernet-win",
      children: "Q4: Token Ring vs Ethernet -- Why Did Ethernet Win?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Factor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Token Ring (802.5)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ethernet (802.3)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Topology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical ring (requires MAU)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bus -> Star (cheap cabling)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed evolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 -> 16 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 -> 100 -> 1000 -> 10G -> 400G"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost per port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (MAU, complex NICs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (simple transceivers)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (token monitor, priority)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (CSMA/CD, later full-duplex)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Determinism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (CSMA/CD) but switched Ethernet fixes this"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Switching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Difficult to switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (transparent bridging)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key reason Ethernet won:"
      }), " Switched Ethernet eliminated CSMA/CD, making collisions irrelevant while retaining the simple frame format and cheap hardware. Token Ring's physical ring topology and complex management couldn't compete with the simplicity and scalability of switched Ethernet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-happens-when-the-channel-is-always-busy-high-load",
      children: "Q5: What Happens When the Channel Is Always Busy (High Load)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "random access"
      }), " protocols, continuous collisions cause throughput to approach 0. Stations waste bandwidth on collision debris and backoff idle time. This is called ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "throughput collapse"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solutions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Exponential backoff (reduces offered load)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Collision-free protocols (TDMA, token passing)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Admission control (don't let too many stations transmit)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full-duplex switched networks (eliminate the shared channel entirely)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-why-does-minimum-frame-size-matter-in-csmacd",
      children: "Q6: Why Does Minimum Frame Size Matter in CSMA/CD?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The sender must still be transmitting when the collision signal returns from the farthest station. If the frame is too short, the sender finishes before detecting the collision, and the frame is lost without the sender knowing. The formula:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Minimum frame size = 2 * max_propagation_delay * data_rate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For 10 Mbps Ethernet: 2 * 25.6 us * 10 Mbps = 512 bits = 64 bytes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-contention-window-size-in-80211-vs-ethernet",
      children: "Q7: Contention Window Size in 802.11 vs Ethernet"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ethernet (CSMA/CD)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "802.11 (CSMA/CA)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Slot time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "512 bit-times (51.2 us at 10 Mbps)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9 us (802.11a/g), 20 us (802.11b)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Initial CW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A (direct backoff)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 15] slots"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CW max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1023 slots (after cap)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1023 slots"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CW growth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential: 2^i"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential: 2^(i+4) - 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max retries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 (short), 4 (long)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "410-applications-in-real-systems",
      children: "4.10 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ethernet-ieee-8023----csmacd",
      children: "Ethernet (IEEE 802.3) -- CSMA/CD"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-persistent CSMA/CD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data rates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 Mbps, 100 Mbps, 1 Gbps, 10 Gbps, 40 Gbps, 100 Gbps, 400 Gbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Twisted pair (Cat5/6), fiber optic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Topology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Star (switched Ethernet)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frame format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IEEE 802.3 MAC frame (64-1518 bytes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collision handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary exponential backoff (legacy half-duplex only)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Modern reality:"
      }), " Switched Ethernet uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "full-duplex"
      }), " links -- no collisions at all. CSMA/CD is disabled. Every station has a dedicated link to the switch. The MAC sublayer handles addressing and framing, not contention."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wifi-ieee-80211----csmaca-with-rtscts",
      children: "WiFi (IEEE 802.11) -- CSMA/CA with RTS/CTS"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSMA/CA with optional RTS/CTS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "802.11a/b/g/n/ac/ax/be"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.4 GHz, 5 GHz, 6 GHz (WiFi 6E/7)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Channel access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DCF (Distributed Coordination Function) and PCF (Point Coordination Function)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual carrier sense"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NAV (Network Allocation Vector) -- stations predict channel busy time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inter-frame spacing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIFS (16 us) -> ACK, DIFS (34 us) -> data, EIFS -> after errors"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RTS/CTS in practice:"
      }), " Enabled by default on many enterprise APs. Threshold (typically 300-1500 bytes) determines frames that trigger RTS/CTS. Small frames skip RTS to reduce overhead."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Backoff in 802.11:"
      }), " CW starts at CW_min = 15 slots, maxes at CW_max = 1023 slots. Each slot = 9 us (802.11a/g) or 20 us (802.11b)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lte----ofdma-orthogonal-frequency-division-multiple-access",
      children: "LTE -- OFDMA (Orthogonal Frequency Division Multiple Access)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OFDMA (downlink), SC-FDMA (uplink)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Channelization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource blocks (12 subcarriers x 0.5 ms)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic assignment every TTI (1 ms)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAC role"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "eNodeB schedules all UEs -- no contention"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Random access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used only for initial connection (contention-based PRACH)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LTE uses a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "scheduled"
      }), " MAC -- the base station (eNodeB) assigns time-frequency resources to each UE dynamically. This is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "far more efficient"
      }), " than random access for high-throughput cellular data. Random access (similar to slotted ALOHA) is used only during the initial PRACH to establish a connection."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lorawan----pure-aloha",
      children: "LoRaWAN -- Pure ALOHA"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pure ALOHA (end devices transmit whenever they have data)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Why ALOHA?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End devices are battery-powered; carrier sensing wastes energy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~18% theoretical max (acceptable for sporadic sensor data)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adaptations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adaptive Data Rate (ADR) adjusts spreading factor"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LoRaWAN uses pure ALOHA because it's ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "simple and power-efficient"
      }), " -- critical for battery-operated IoT sensors. The low throughput is acceptable because each device transmits infrequently (minutes to hours between transmissions)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bluetooth----tdma--tdd",
      children: "Bluetooth -- TDMA + TDD"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TDMA with Time Division Duplex (TDD)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Piconet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 master + up to 7 active slaves"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Slot structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "625 us slots; master transmits in even slots, slaves in odd slots"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frequency hopping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1600 hops/sec over 79 channels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collision handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic retransmission (ARQ) on failed packets"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bluetooth uses a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "polling-based"
      }), " approach: the master polls each slave, and the slave responds in the next slot. This is effectively ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "controlled access"
      }), " -- deterministic and collision-free within a piconet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5g-nr----ofdma--scheduled-access",
      children: "5G NR -- OFDMA + Scheduled Access"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OFDMA with flexible numerology"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "gNB schedules all UEs dynamically"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Slot duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "125 us to 1 ms (depending on subcarrier spacing)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mini-slots"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2, 4, or 7 OFDM symbols for ultra-low latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Grant-free access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configured grant for URLLC (periodic small packets)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max Throughput"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Collisions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Coordination"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pure ALOHA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18.4%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Historical, satellite"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Slotted ALOHA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "36.8%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slot sync"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Early packet radio"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1-persistent CSMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies with load"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High at transitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carrier sense"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Early Ethernet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Non-persistent CSMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher than 1-persistent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random wait"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-load environments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "p-persistent CSMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal with tuned p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controlled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probabilistic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slotted channels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSMA/CD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100% (low prop delay)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detected, retried"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sense + detect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classical Ethernet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSMA/CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower than CSMA/CD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoided"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual sense (NAV)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "802.11 WiFi"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Token Passing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100% (heavy load)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (collision-free)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token ownership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FDDI, industrial control"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Points"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ALOHA Formulas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pure: S = Ge^(-2G), max 18.4% at G=0.5; Slotted: S = Ge^(-G), max 36.8% at G=1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSMA Variants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-persistent (greedy), Non-persistent (random wait), p-persistent (probabilistic)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary Exponential Backoff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After ith collision: wait k * 512 bit-times, k in [0, 2^i - 1], cap at i=10, drop at i=16"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ethernet Frame (min)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preamble(7) + SFD(1) + Dst(6) + Src(6) + Len(2) + Payload(46-1500) + FCS(4) = 72-1526 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAC Address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "48 bits: OUI (24 bits) + NIC-specific (24 bits); unicast/multicast/broadcast"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collision-Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bit-map: n reservation slots; Token: circulating permission frame"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LAN Design"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "WiFi Engineering"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "IoT"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cellular"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ALOHA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LoRaWAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial 3G random access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSMA/CD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classical Ethernet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSMA/CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AP channel selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zigbee"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Token Passing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PROFIBUS, industrial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ethernet Frame"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAC Addressing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARP, VLAN config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BSSID filtering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device addressing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMSI"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Max throughput of pure ALOHA?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "36.8%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18.4%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Why does 1-persistent CSMA perform poorly when channel transitions from busy to idle?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can't detect idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All waiting stations transmit at once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carrier sense fails"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backoff disabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Purpose of minimum frame size in CSMA/CD?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Min data throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guarantee collision detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce header overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Improve CRC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Why is CSMA/CA used instead of CSMA/CD in wireless?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wireless is slower"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Radio can't TX and RX simultaneously"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frames too small"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSMA/CD patented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which device separates broadcast domains?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Router"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeater"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-migrating-a-legacy-token-ring-office-to-switched-ethernet",
      children: "Case Study: Migrating a Legacy Token Ring Office to Switched Ethernet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Background:"
      }), " A law firm's office used a 16 Mbps Token Ring network (IEEE 802.5) with 40 workstations. As the firm grew, complaints increased: \"network slow\" during morning logins, printer timeouts, and inability to support VoIP phones. IT measured peak utilization at 72 % of the 16 Mbps ring."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Challenges with Token Ring:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deterministic but limited:"
        }), " At 50 % load, average access delay = 40 stations × (max frame tx time + token pass) ≈ 40 × 5 ms = 200 ms — too high for VoIP."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single point of failure:"
        }), " A single station with a bad NIC could beacon and bring down the ring."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expensive hardware:"
        }), " Token Ring switches cost 3× equivalent Ethernet switches."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Upgrade path:"
        }), " Max speed was 100 Mbps (HSTR) — limited future growth."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution — Switched Ethernet Migration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Replace MAUs (Multistation Access Units) with a 48-port Gigabit Ethernet switch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Replace Token Ring NICs with Gigabit Ethernet NICs (Cat 6a cabling existing)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure VLANs: voice VLAN for 10 VoIP phones, data VLAN for workstations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable 802.1p QoS to prioritize voice traffic"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Before (Token Ring)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "After (Switched Ethernet)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth per station"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 Mbps shared"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 Gbps dedicated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Peak utilization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "72 %"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 %"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VoIP quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (jitter > 50 ms)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (jitter < 1 ms)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost per port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$150 (Token Ring switch)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$25 (GigE switch)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Failure impact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single station could disable network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Isolated per port"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lesson:"
      }), " While Token Ring provides deterministic access, the cost, complexity, and limited bandwidth made switched Ethernet the clear winner. Modern switched Ethernet with full-duplex operation has no contention — each port is its own collision domain."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ALOHA throughput"
            }), " is fundamentally limited by vulnerable period"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pure: 18.4 %, Slotted: 36.8 %. Never use ALOHA for high-throughput links"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Carrier sensing"
            }), " dramatically improves channel utilization"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSMA always beats ALOHA because it avoids transmitting into a busy channel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Minimum frame size"
            }), " is a physical constraint tied to propagation delay"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "F"
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "m"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "i"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "n"
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "≥"
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "2"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "×"
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "T"
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "p"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "r"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "o"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "p"
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "×"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "R"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "F_{min} \\ge 2 \\times T_{prop} \\times R"
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
                      height: "0.8333em",
                      verticalAlign: "-0.15em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.1389em"
                      },
                      children: "F"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3117em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "-0.1389em",
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
                                  className: "mord mtight",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "min"
                                  })
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
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mrel",
                    children: "≥"
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
                      height: "0.7278em",
                      verticalAlign: "-0.0833em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "2"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mbin",
                    children: "×"
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
                      height: "0.9694em",
                      verticalAlign: "-0.2861em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.1389em"
                      },
                      children: "T"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.1514em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "-0.1389em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "p"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.0278em"
                                    },
                                    children: "r"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "o"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "p"
                                  })]
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
                              height: "0.2861em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mbin",
                    children: "×"
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
                      height: "0.6833em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0077em"
                    },
                    children: "R"
                  })]
                })]
              })]
            }), " — increasing speed or distance requires larger minimum frames"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Exponential backoff"
            }), " is essential for stability"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Without it, throughput collapses under load (Aloha stability problem)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "CSMA/CA virtual carrier sensing"
            }), " (NAV + RTS/CTS) solves hidden terminal problem"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always enable RTS/CTS above a threshold in WiFi for large frames"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Switch vs hub"
            }), " — always use switches"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each switch port is an isolated collision domain; hubs share one collision domain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Token Passing"
            }), " provides bounded delay but poor light-load performance"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best for industrial/real-time networks where determinism matters more than peak throughput"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Medium access control protocols coordinate access to shared broadcast channels. ALOHA provides the foundation with simple random access but limited throughput (0.184 for pure, 0.368 for slotted). CSMA improves throughput through carrier sensing; adding collision detection (CSMA/CD) enables efficient operation with minimum frame size constraints. Wireless networks use CSMA/CA with virtual carrier sensing and RTS/CTS to mitigate hidden terminals. Collision-free protocols such as token passing provide deterministic delay for real-time applications."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Channelization techniques (FDMA, TDMA, CDMA) divide the channel into independent sub-channels, eliminating collisions entirely. The choice of MAC protocol involves fundamental trade-offs between throughput, delay, fairness, complexity, and determinism."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ethernet, the dominant LAN technology, uses CSMA/CD with a 48-bit MAC address space and a structured frame format -- but modern switched Ethernet runs full-duplex, making collision detection irrelevant. The MAC sublayer remains essential for addressing and frame delivery."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key takeaways:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Random access is simple but has fundamental throughput limits (18-37% for ALOHA)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Carrier sensing dramatically improves efficiency (CSMA vs ALOHA)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Collision detection requires minimum frame sizes (64 bytes for Ethernet)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wireless requires collision avoidance (CSMA/CA) rather than detection (CSMA/CD)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Binary exponential backoff is critical for stability under load"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Controlled access provides deterministic delay but higher overhead at light load"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Channelization (FDMA/TDMA/CDMA) eliminates collisions through resource partitioning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Switched Ethernet and VLANs obsolete most contention concerns in modern LANs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution Hints"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["A frame transmitted at time ", (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "katex-mathml",
              children: (0,jsx_runtime.jsx)(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: (0,jsx_runtime.jsxs)(_components.semantics, {
                  children: [(0,jsx_runtime.jsx)(_components.mrow, {
                    children: (0,jsx_runtime.jsx)(_components.mi, {
                      children: "t"
                    })
                  }), (0,jsx_runtime.jsx)(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "t"
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
                    height: "0.6151em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "t"
                })]
              })
            })]
          }), " sees collisions from any frame starting in ", (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "katex-mathml",
              children: (0,jsx_runtime.jsx)(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: (0,jsx_runtime.jsxs)(_components.semantics, {
                  children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "["
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "t"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "−"
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "T"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "f"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      separator: "true",
                      children: ","
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "t"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "+"
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "T"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "f"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "]"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "[t - T_f, t + T_f]"
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
                  className: "mopen",
                  children: "["
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "t"
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
                    height: "0.9694em",
                    verticalAlign: "-0.2861em"
                  }
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mord",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.1389em"
                    },
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "msupsub",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.3361em"
                          },
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-2.55em",
                              marginLeft: "-0.1389em",
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
                                  marginRight: "0.1076em"
                                },
                                children: "f"
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
                            height: "0.2861em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  })]
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
                  className: "mspace",
                  style: {
                    marginRight: "0.2222em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mbin",
                  children: "+"
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
                    height: "1.0361em",
                    verticalAlign: "-0.2861em"
                  }
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mord",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.1389em"
                    },
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "msupsub",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.3361em"
                          },
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-2.55em",
                              marginLeft: "-0.1389em",
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
                                  marginRight: "0.1076em"
                                },
                                children: "f"
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
                            height: "0.2861em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  })]
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mclose",
                  children: "]"
                })]
              })]
            })]
          }), " (where ", (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "katex-mathml",
              children: (0,jsx_runtime.jsx)(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: (0,jsx_runtime.jsxs)(_components.semantics, {
                  children: [(0,jsx_runtime.jsx)(_components.mrow, {
                    children: (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "T"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "f"
                      })]
                    })
                  }), (0,jsx_runtime.jsx)(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "T_f"
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
                    height: "0.9694em",
                    verticalAlign: "-0.2861em"
                  }
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mord",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.1389em"
                    },
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "msupsub",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.3361em"
                          },
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-2.55em",
                              marginLeft: "-0.1389em",
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
                                  marginRight: "0.1076em"
                                },
                                children: "f"
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
                            height: "0.2861em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  })]
                })]
              })
            })]
          }), " = frame time) → vulnerable period = ", (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "katex-mathml",
              children: (0,jsx_runtime.jsx)(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: (0,jsx_runtime.jsxs)(_components.semantics, {
                  children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "T"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "f"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "2T_f"
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
                    height: "0.9694em",
                    verticalAlign: "-0.2861em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord",
                  children: "2"
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mord",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.1389em"
                    },
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "msupsub",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.3361em"
                          },
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-2.55em",
                              marginLeft: "-0.1389em",
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
                                  marginRight: "0.1076em"
                                },
                                children: "f"
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
                            height: "0.2861em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  })]
                })]
              })
            })]
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Max throughput = 36.8 % (1/e) at G = 1.0."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "All stations waiting for the busy channel to become idle immediately attempt transmission simultaneously → guaranteed collision."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "After each collision, the backoff window doubles. Light load → small windows → quick retransmission. Heavy load → large windows → reduced collision rate."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "WiFi radios operate half-duplex — transmitting drowns out received signals, making collision detection impossible."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "NAV is a timer set by RTS/CTS frames that tells other stations how long to defer access → virtual carrier sensing."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "RTS from sender reaches all stations in sender's range; CTS from receiver reaches all stations in receiver's range. Hidden terminals hear CTS and defer."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Collision domain: segment where frames can collide. Broadcast domain: set of devices that receive each other's broadcast frames."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Ethernet was simpler, cheaper, and scaled better (switched Ethernet eliminated collisions). Token Ring was more complex and had a single point of failure."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "FDMA: simple, no synchronization needed, but inflexible and wastes bandwidth on silent users. TDMA: efficient for bursty traffic, requires synchronization."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "CDMA assigns orthogonal spreading codes. Receiver correlates with desired code — other users' signals appear as noise."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Guard bands prevent adjacent-channel interference due to imperfect filters and frequency drift."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pure ALOHA operates with a frame time of 10 ms. If the aggregate load is 0.4 frames per frame time, what is the throughput? What fraction of frames experience collision on their first transmission?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution</summary>\nS = G * e^(-2G) = 0.4 * e^(-0.8) = 0.4 * 0.4493 = 0.1797\nThroughput = 0.1797 frames per frame time.\nFraction that succeed: e^(-2G) = e^(-0.8) = 0.4493 (44.93%)\nFraction that collide: 1 - 0.4493 = 0.5507 (55.07%)\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "14",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In p-persistent CSMA, there are 10 stations each with probability p = 0.1 of having a frame ready in each slot. What is the probability that exactly one station transmits in a given slot? What is the probability of an idle slot?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution</summary>\nThe number of transmitting stations follows Binomial(10, 0.1).\nP(exactly 1) = C(10,1) * (0.1)^1 * (0.9)^9 = 10 * 0.1 * 0.3874 = 0.3874\nP(idle) = (0.9)^10 = 0.3487\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "15",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "An Ethernet segment has 20 stations. The maximum propagation delay between any two stations is 25 microseconds. The data rate is 10 Mbps. What is the minimum frame size required for reliable collision detection? Verify that the 512-bit slot time is adequate."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Solution</summary>\nMinimum frame size = 2 * propagation_delay * data_rate\n= 2 * 25 * 10^(-6) * 10 * 10^6 = 2 * 25 * 10 = 500 bits\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The 512-bit slot time (512 bit-times = 51.2 us) exceeds the required 500 bits, providing a small margin.\n512 bits corresponds to 512 / (2 * 10^7) = 25.6 us one-way, supporting a max diameter of 25.6 us propagation."
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "16",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In a CSMA/CD network with 100 stations, what is the probability that after the 3rd collision, a station chooses a backoff of 0 slots? What is the maximum possible backoff?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution</summary>\nAfter the 3rd collision (i=3), window = [0, 2^3 - 1] = [0, 7].\nP(backoff = 0) = 1/8 = 0.125\nMaximum backoff = 7 slots = 7 * 51.2 us = 358.4 us\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "17",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A WiFi network has an RTS threshold of 500 bytes. If a station transmits a 100-byte acknowledgment packet, does it use RTS/CTS? What about a 1500-byte data frame?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution</summary>\n100-byte packet: RTS threshold is 500 bytes, so 100 < 500 -> no RTS/CTS. Small frames skip RTS to reduce overhead.\n1500-byte frame: 1500 > 500 -> RTS/CTS is used. Hidden terminal protection for large frames outweighs RTS overhead.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "18",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In a slotted ALOHA system with G = 0.8, what is the throughput? How many slots are idle, successful, and collided per 100 slots?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution</summary>\nS = G * e^(-G) = 0.8 * e^(-0.8) = 0.8 * 0.4493 = 0.3595\nPer 100 slots:\n  Idle: e^(-G) * 100 = 0.4493 * 100 = 44.93 ~ 45 idle slots\n  Successful: S * 100 = 35.95 ~ 36 slots\n  Collision: (1 - e^(-G) - G*e^(-G)) * 100 = (1 - 0.4493 - 0.3595) * 100 = 19.12 ~ 19 slots\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "19",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design an ALOHA throughput simulation in Python that compares pure and slotted ALOHA for G values from 0.1 to 3.0. Plot the throughput curve."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Python code</summary>\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "import math\n\ndef pure_aloha(G):\n    return G * math.exp(-2 * G)\n\ndef slotted_aloha(G):\n    return G * math.exp(-G)\n\nprint(f\"{'G':>6} {'Pure ALOHA':>12} {'Slotted ALOHA':>14}\")\nprint(\"-\" * 34)\nfor G in [i * 0.1 for i in range(1, 31)]:\n    print(f\"{G:6.2f} {pure_aloha(G):12.4f} {slotted_aloha(G):14.4f}\")\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Peak: Pure at G=0.5 (18.4%), Slotted at G=1.0 (36.8%)."
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "20",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design a hybrid MAC protocol."
        }), " Consider a wireless network with 50 stations where traffic is a mixture of real-time voice (constant bit rate, low latency requirement) and bursty data (variable bit rate, tolerant to delay). Design a MAC protocol that satisfies: (a) voice calls experience bounded access delay under 10 ms, (b) data throughput is at least 60% of channel capacity, and (c) the protocol works without infrastructure (ad hoc). Provide pseudocode for your protocol, compute its throughput under mixed load, and explain how the hidden terminal problem is addressed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Sample Solution Approach</summary>\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Protocol name:"
          }), " Hybrid TDMA/CSMA (HTC-MAC)"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Design:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Frame structure: Fixed 20 ms superframe divided into two phases."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Phase 1 (Controlled -- TDMA, 10 ms): 50 mini-slots, one per station. Stations with voice traffic transmit in their reserved slot. Bounded delay: max 20 ms (one superframe)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Phase 2 (Contention -- CSMA/CA, 10 ms): Remaining stations compete using CSMA/CA with RTS/CTS for DATA."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Voice guarantee:"
          }), " Each voice station gets a dedicated TDMA slot every 20 ms, ensuring < 10 ms access delay.\n", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Data throughput:"
          }), " The contention phase uses 50% of time, but with 60% efficiency (typical CSMA/CA), data achieves 30% of total capacity. Fix: Use adaptive boundary -- if voice slots are unused, data transmits in the TDMA phase too (residual capacity)."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hidden terminal:"
          }), " RTS/CTS in the contention phase. During the TDMA phase, voice transmissions use the reservation mechanism -- no hidden terminal issue since slots are pre-assigned."]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Pseudocode:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PROCEDURE htc_mac(my_id, has_voice, voice_slot):\n    WHILE True:\n        // Phase 1: TDMA (first 10 ms of 20 ms superframe)\n        IF has_voice:\n            WAIT_FOR_SLOT(voice_slot)\n            transmit_voice_frame()\n        ELSE:\n            // Data stations listen; can use unused voice slots\n            IF slot_is_idle(voice_slot):\n                transmit_data_if_available()\n        \n        // Phase 2: CSMA/CA (last 10 ms)\n        IF has_data AND NOT has_voice:\n            csmaca_transmit(data_frame, use_rts=True)\n        \n        WAIT_UNTIL_SUPERFRAME_END()\n    END WHILE\nEND PROCEDURE\n"
          })
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["Next: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/computer-networks/05-ethernet-switching",
          children: "Chapter 5: Ethernet & Switching"
        })]
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