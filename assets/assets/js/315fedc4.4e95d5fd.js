"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[168],{

/***/ 967
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_computer_networks_05_ethernet_switching_md_315_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-computer-networks-05-ethernet-switching-md-315.json
const site_docs_courses_computer_networks_05_ethernet_switching_md_315_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/computer-networks/05-ethernet-switching","title":"Chapter 5: Ethernet Switching","description":"Prerequisites Medium Access Control → MAC protocols and CSMA/CD | Next Network Layer → From switching to IP routing","source":"@site/docs/courses/computer-networks/05-ethernet-switching.md","sourceDirName":"courses/computer-networks","slug":"/computer-networks/05-ethernet-switching","permalink":"/ai-engineering-journey/computer-networks/05-ethernet-switching","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"05-ethernet-switching","slug":"/computer-networks/05-ethernet-switching","title":"Chapter 5: Ethernet Switching","sidebar_label":"Chapter 5: Ethernet Switching","sidebar_position":5},"sidebar":"course-computer-networks","previous":{"title":"Chapter 4: Medium Access Control (MAC)","permalink":"/ai-engineering-journey/computer-networks/04-mac"},"next":{"title":"Chapter 6: The Network Layer","permalink":"/ai-engineering-journey/computer-networks/06-network-layer"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/computer-networks/05-ethernet-switching.md


const frontMatter = {
	id: '05-ethernet-switching',
	slug: '/computer-networks/05-ethernet-switching',
	title: 'Chapter 5: Ethernet Switching',
	sidebar_label: 'Chapter 5: Ethernet Switching',
	sidebar_position: 5
};
const contentTitle = 'Chapter 5: Ethernet Switching';

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
  "value": "Learning Bridge Forwarding Decision",
  "id": "learning-bridge-forwarding-decision",
  "level": 3
}, {
  "value": "STP Port State Machine and Convergence",
  "id": "stp-port-state-machine-and-convergence",
  "level": 3
}, {
  "value": "5.1 Ethernet Frame Format",
  "id": "51-ethernet-frame-format",
  "level": 2
}, {
  "value": "5.1.1 Frame Structure",
  "id": "511-frame-structure",
  "level": 3
}, {
  "value": "5.1.2 Field-by-Field Breakdown",
  "id": "512-field-by-field-breakdown",
  "level": 3
}, {
  "value": "5.1.3 Real-World Analogy",
  "id": "513-real-world-analogy",
  "level": 3
}, {
  "value": "5.1.4 Frame Processing Steps",
  "id": "514-frame-processing-steps",
  "level": 3
}, {
  "value": "5.1.5 Pseudocode: Ethernet Frame Parser",
  "id": "515-pseudocode-ethernet-frame-parser",
  "level": 3
}, {
  "value": "5.1.6 Dry Run Trace Table: Frame Reception",
  "id": "516-dry-run-trace-table-frame-reception",
  "level": 3
}, {
  "value": "5.1.7 C++ Implementation: Ethernet Frame Analyzer",
  "id": "517-c-implementation-ethernet-frame-analyzer",
  "level": 3
}, {
  "value": "5.1.8 Python Implementation: Ethernet Frame Parser",
  "id": "518-python-implementation-ethernet-frame-parser",
  "level": 3
}, {
  "value": "5.1.9 Complexity Analysis",
  "id": "519-complexity-analysis",
  "level": 3
}, {
  "value": "5.1.10 Advantages and Disadvantages",
  "id": "5110-advantages-and-disadvantages",
  "level": 3
}, {
  "value": "5.1.11 Edge Cases",
  "id": "5111-edge-cases",
  "level": 3
}, {
  "value": "5.2 Ethernet Evolution",
  "id": "52-ethernet-evolution",
  "level": 2
}, {
  "value": "5.2.1 10 Mbps Ethernet (10Base5, 10Base2, 10BaseT)",
  "id": "521-10-mbps-ethernet-10base5-10base2-10baset",
  "level": 3
}, {
  "value": "5.2.2 Fast Ethernet (100BaseTX, 100BaseFX)",
  "id": "522-fast-ethernet-100basetx-100basefx",
  "level": 3
}, {
  "value": "5.2.3 Gigabit Ethernet (1000BaseT, 1000BaseSX, 1000BaseLX)",
  "id": "523-gigabit-ethernet-1000baset-1000basesx-1000baselx",
  "level": 3
}, {
  "value": "5.2.4 10 Gigabit Ethernet",
  "id": "524-10-gigabit-ethernet",
  "level": 3
}, {
  "value": "5.2.5 40, 100, 200, 400 Gigabit Ethernet",
  "id": "525-40-100-200-400-gigabit-ethernet",
  "level": 3
}, {
  "value": "5.2.6 Ethernet Generations Comparison",
  "id": "526-ethernet-generations-comparison",
  "level": 3
}, {
  "value": "5.2.7 Key Physical Layer Innovations by Generation",
  "id": "527-key-physical-layer-innovations-by-generation",
  "level": 3
}, {
  "value": "5.3 Switches and Bridges",
  "id": "53-switches-and-bridges",
  "level": 2
}, {
  "value": "5.3.1 Switching Methods",
  "id": "531-switching-methods",
  "level": 3
}, {
  "value": "5.3.2 Real-World Analogy",
  "id": "532-real-world-analogy",
  "level": 3
}, {
  "value": "5.3.3 Switch vs Hub vs Router Comparison",
  "id": "533-switch-vs-hub-vs-router-comparison",
  "level": 3
}, {
  "value": "5.3.4 Switch Operation: Numbered Steps",
  "id": "534-switch-operation-numbered-steps",
  "level": 3
}, {
  "value": "5.3.5 Pseudocode: Switch Forwarding Engine",
  "id": "535-pseudocode-switch-forwarding-engine",
  "level": 3
}, {
  "value": "5.3.6 Dry Run Trace Table: MAC Table Learning",
  "id": "536-dry-run-trace-table-mac-table-learning",
  "level": 3
}, {
  "value": "5.3.7 C++ Implementation: Switch MAC Table",
  "id": "537-c-implementation-switch-mac-table",
  "level": 3
}, {
  "value": "5.3.8 Python Implementation: Switch MAC Table",
  "id": "538-python-implementation-switch-mac-table",
  "level": 3
}, {
  "value": "5.3.9 Complexity Analysis",
  "id": "539-complexity-analysis",
  "level": 3
}, {
  "value": "5.3.10 Advantages and Disadvantages",
  "id": "5310-advantages-and-disadvantages",
  "level": 3
}, {
  "value": "5.3.11 Edge Cases",
  "id": "5311-edge-cases",
  "level": 3
}, {
  "value": "TypeScript Implementation: Switch Forwarding Table",
  "id": "typescript-implementation-switch-forwarding-table",
  "level": 3
}, {
  "value": "5.4 Learning Bridges (MAC Learning)",
  "id": "54-learning-bridges-mac-learning",
  "level": 2
}, {
  "value": "5.4.1 Real-World Analogy",
  "id": "541-real-world-analogy",
  "level": 3
}, {
  "value": "5.4.2 The Learning Algorithm: Numbered Steps",
  "id": "542-the-learning-algorithm-numbered-steps",
  "level": 3
}, {
  "value": "5.4.3 Pseudocode: Learning Bridge",
  "id": "543-pseudocode-learning-bridge",
  "level": 3
}, {
  "value": "5.4.4 Dry Run Trace Table: Learning Bridge with Six Hosts",
  "id": "544-dry-run-trace-table-learning-bridge-with-six-hosts",
  "level": 3
}, {
  "value": "5.4.5 C++ Implementation: Learning Bridge",
  "id": "545-c-implementation-learning-bridge",
  "level": 3
}, {
  "value": "5.4.6 Python Implementation: Learning Bridge",
  "id": "546-python-implementation-learning-bridge",
  "level": 3
}, {
  "value": "5.4.7 Complexity Analysis",
  "id": "547-complexity-analysis",
  "level": 3
}, {
  "value": "5.4.8 Advantages and Disadvantages",
  "id": "548-advantages-and-disadvantages",
  "level": 3
}, {
  "value": "5.4.9 Edge Cases",
  "id": "549-edge-cases",
  "level": 3
}, {
  "value": "5.5 Spanning Tree Protocol (STP)",
  "id": "55-spanning-tree-protocol-stp",
  "level": 2
}, {
  "value": "5.5.1 The Problem: Broadcast Storms",
  "id": "551-the-problem-broadcast-storms",
  "level": 3
}, {
  "value": "5.5.2 Real-World Analogy",
  "id": "552-real-world-analogy",
  "level": 3
}, {
  "value": "5.5.3 BPDU Format",
  "id": "553-bpdu-format",
  "level": 3
}, {
  "value": "5.5.4 STP Algorithm: Numbered Steps",
  "id": "554-stp-algorithm-numbered-steps",
  "level": 3
}, {
  "value": "5.5.5 STP Port States Comparison",
  "id": "555-stp-port-states-comparison",
  "level": 3
}, {
  "value": "5.5.6 Pseudocode: STP Port State Machine",
  "id": "556-pseudocode-stp-port-state-machine",
  "level": 3
}, {
  "value": "5.5.7 Dry Run Trace Table: STP Convergence",
  "id": "557-dry-run-trace-table-stp-convergence",
  "level": 3
}, {
  "value": "5.5.8 C++ Implementation: STP Port State Machine",
  "id": "558-c-implementation-stp-port-state-machine",
  "level": 3
}, {
  "value": "5.5.9 Python Implementation: STP Port State Machine",
  "id": "559-python-implementation-stp-port-state-machine",
  "level": 3
}, {
  "value": "5.5.10 Complexity Analysis",
  "id": "5510-complexity-analysis",
  "level": 3
}, {
  "value": "5.5.11 Advantages and Disadvantages",
  "id": "5511-advantages-and-disadvantages",
  "level": 3
}, {
  "value": "5.5.12 Edge Cases",
  "id": "5512-edge-cases",
  "level": 3
}, {
  "value": "5.5.13 RSTP vs STP Comparison",
  "id": "5513-rstp-vs-stp-comparison",
  "level": 3
}, {
  "value": "TypeScript Implementation: STP Root Bridge Election",
  "id": "typescript-implementation-stp-root-bridge-election",
  "level": 3
}, {
  "value": "5.6 Virtual LANs (VLANs)",
  "id": "56-virtual-lans-vlans",
  "level": 2
}, {
  "value": "5.6.1 Real-World Analogy",
  "id": "561-real-world-analogy",
  "level": 3
}, {
  "value": "5.6.2 802.1Q Frame Format",
  "id": "562-8021q-frame-format",
  "level": 3
}, {
  "value": "5.6.3 Port-Based vs Tag-Based VLAN Comparison",
  "id": "563-port-based-vs-tag-based-vlan-comparison",
  "level": 3
}, {
  "value": "5.6.4 VLAN Trunking (802.1Q)",
  "id": "564-vlan-trunking-8021q",
  "level": 3
}, {
  "value": "5.6.5 Numbered Steps: VLAN Frame Processing",
  "id": "565-numbered-steps-vlan-frame-processing",
  "level": 3
}, {
  "value": "5.5.6 Pseudocode: VLAN Switching",
  "id": "556-pseudocode-vlan-switching",
  "level": 3
}, {
  "value": "5.6.7 Dry Run Trace Table: VLAN Switching",
  "id": "567-dry-run-trace-table-vlan-switching",
  "level": 3
}, {
  "value": "5.6.8 C++ Implementation: VLAN-Aware Switch",
  "id": "568-c-implementation-vlan-aware-switch",
  "level": 3
}, {
  "value": "5.6.9 Python Implementation: VLAN Switch",
  "id": "569-python-implementation-vlan-switch",
  "level": 3
}, {
  "value": "5.6.10 Complexity Analysis",
  "id": "5610-complexity-analysis",
  "level": 3
}, {
  "value": "5.6.11 Advantages and Disadvantages",
  "id": "5611-advantages-and-disadvantages",
  "level": 3
}, {
  "value": "5.6.12 Edge Cases",
  "id": "5612-edge-cases",
  "level": 3
}, {
  "value": "TypeScript Implementation: VLAN Manager",
  "id": "typescript-implementation-vlan-manager",
  "level": 3
}, {
  "value": "5.7 Link Aggregation (LAG/LACP)",
  "id": "57-link-aggregation-laglacp",
  "level": 2
}, {
  "value": "5.7.1 Real-World Analogy",
  "id": "571-real-world-analogy",
  "level": 3
}, {
  "value": "5.7.2 Benefits",
  "id": "572-benefits",
  "level": 3
}, {
  "value": "5.7.3 LACP Operation Steps",
  "id": "573-lacp-operation-steps",
  "level": 3
}, {
  "value": "5.7.4 Pseudocode: LACP Hash Distribution",
  "id": "574-pseudocode-lacp-hash-distribution",
  "level": 3
}, {
  "value": "5.7.5 Dry Run Trace Table: LACP",
  "id": "575-dry-run-trace-table-lacp",
  "level": 3
}, {
  "value": "5.8 MPLS",
  "id": "58-mpls",
  "level": 2
}, {
  "value": "5.8.1 MPLS Label Operations",
  "id": "581-mpls-label-operations",
  "level": 3
}, {
  "value": "5.8.2 MPLS vs VLAN",
  "id": "582-mpls-vs-vlan",
  "level": 3
}, {
  "value": "5.9 Interview Corner",
  "id": "59-interview-corner",
  "level": 2
}, {
  "value": "Q1: STP vs RSTP → What Are the Key Differences?",
  "id": "q1-stp-vs-rstp--what-are-the-key-differences",
  "level": 3
}, {
  "value": "Q2: What Is a MAC Flooding Attack?",
  "id": "q2-what-is-a-mac-flooding-attack",
  "level": 3
}, {
  "value": "Q3: How Does VLAN Trunking Work and Can It Be Attacked?",
  "id": "q3-how-does-vlan-trunking-work-and-can-it-be-attacked",
  "level": 3
}, {
  "value": "Q4: What Are Jumbo Frames and When Should You Use Them?",
  "id": "q4-what-are-jumbo-frames-and-when-should-you-use-them",
  "level": 3
}, {
  "value": "Q5: How Does a Switch&#39;s MAC Address Table Size Impact Performance?",
  "id": "q5-how-does-a-switchs-mac-address-table-size-impact-performance",
  "level": 3
}, {
  "value": "Q6: What Is the Difference Between a Managed and Unmanaged Switch?",
  "id": "q6-what-is-the-difference-between-a-managed-and-unmanaged-switch",
  "level": 3
}, {
  "value": "5.10 Applications in Real Systems",
  "id": "510-applications-in-real-systems",
  "level": 2
}, {
  "value": "5.10.1 Cisco Switches (IOS/IOS-XE)",
  "id": "5101-cisco-switches-iosios-xe",
  "level": 3
}, {
  "value": "5.10.2 Linux Bridge (<code>bridge</code>)",
  "id": "5102-linux-bridge-bridge",
  "level": 3
}, {
  "value": "5.10.3 Open vSwitch (OVS)",
  "id": "5103-open-vswitch-ovs",
  "level": 3
}, {
  "value": "5.11 Concept Comparison Tables",
  "id": "511-concept-comparison-tables",
  "level": 2
}, {
  "value": "Switching Methods Comparison",
  "id": "switching-methods-comparison",
  "level": 3
}, {
  "value": "Hub vs Switch vs Router (Detailed)",
  "id": "hub-vs-switch-vs-router-detailed",
  "level": 3
}, {
  "value": "STP Port States Summary",
  "id": "stp-port-states-summary",
  "level": 3
}, {
  "value": "Ethernet Frame Size Limits",
  "id": "ethernet-frame-size-limits",
  "level": 3
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 3
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 3
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 3
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 3
}, {
  "value": "Case Study: Data Center Leaf-Spine with VLAN Segmentation",
  "id": "case-study-data-center-leaf-spine-with-vlan-segmentation",
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
  "value": "Key Takeaways",
  "id": "key-takeaways",
  "level": 3
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
        id: "chapter-5-ethernet-switching",
        children: "Chapter 5: Ethernet Switching"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prerequisites:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/computer-networks/04-mac",
          children: "Chapter 4: Medium Access Control"
        }), " → MAC protocols and CSMA/CD | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/computer-networks/06-network-layer",
          children: "Chapter 6: Network Layer"
        }), " → From switching to IP routing"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/computer-networks/ch05-ethernet-switching.png",
        alt: "Ethernet Switching"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parse and explain every field of the Ethernet frame format."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trace the evolution of Ethernet from 10 Mbps shared media to 400 Gbps switched networks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the operation of learning bridges and transparent switching with pseudocode and implementations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the Spanning Tree Protocol port state machine and its role in loop prevention."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contrast traditional VLANs with modern VLAN trunking protocols."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze Link Aggregation, LACP, and MPLS in carrier-grade networks."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
            children: "Ethernet Frame Format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7-field structure unchanged since 1980"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preamble (7B) + SFD (1B) + Dst (6B) + Src (6B) + Type/Len (2B) + Payload (46-1500B) + FCS (4B)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ethernet Evolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 Mbps coaxial → 400 Gbps full-duplex switched"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each generation preserved frame format for backward compatibility"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Learning Bridges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatically build MAC tables by observing source addresses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transparent → stations never know bridges exist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spanning Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents broadcast storms by blocking redundant links"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convergence: STP 30-50s, RSTP 1-3s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VLANs (802.1Q)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partition switches into logical broadcast domains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12-bit VLAN ID supports 4094 VLANs per switch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LACP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bundle multiple physical links into one logical link"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 8 links; hash-based load balancing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPLS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Label-based forwarding between L2 and L3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables traffic engineering and L3VPN without IP lookup"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[Ethernet Switching] --> B[Frame Format]\r\n    A --> C[Evolution 10M→400G]\r\n    A --> D[Switching Methods]\r\n    A --> E[Learning Bridges]\r\n    A --> F[STP / RSTP]\r\n    A --> G[VLANs & 802.1Q]\r\n    A --> H[LACP]\r\n    A --> I[MPLS]\r\n    D --> D1[Store-and-Forward]\r\n    D --> D2[Cut-Through]\r\n    D --> D3[Fragment-Free]\r\n    F --> F1[Bridge Election]\r\n    F --> F2[Port States]\r\n    F --> F3[RSTP Convergence]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "learning-bridge-forwarding-decision",
      children: "Learning Bridge Forwarding Decision"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\r\n    FRAME[\"Frame arrives on port P<br/>Src MAC = S, Dst MAC = D\"] --> LEARN[\"Learn: table[S] = P<br/>(create or refresh)\"]\r\n    \r\n    LEARN --> LOOKUP{\"Lookup D in<br/>MAC table?\"}\r\n    \r\n    LOOKUP -->|\"Not found\"| FLOOD[\"Flood: forward to all ports<br/>except ingress port P\"]\r\n    LOOKUP -->|\"Found on port Q\"| CHECK{\"Q == P?\"}\r\n    \r\n    CHECK -->|\"Yes (same segment)\"| FILTER[\"Filter: discard frame<br/>(destination local)\"]\r\n    CHECK -->|\"No\"| FORWARD[\"Forward: send to port Q only\"]\r\n\r\n    subgraph Aging[\"Aging Timer (default 300s)\"]\r\n        AGE[\"Every 300s: remove<br/>entries older than threshold\"]\r\n        MOBILITY[\"Station moved?<br/>New entry overwrites old<br/>(different port)\"]\r\n    end\r\n\r\n    style FRAME fill:#e3f2fd,stroke:#1565c0,stroke-width:2px\r\n    style FLOOD fill:#fff3e0,stroke:#e65100,stroke-width:2px\r\n    style FILTER fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px\r\n    style FORWARD fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px\r\n    style AGE fill:#fce4ec,stroke:#c62828,stroke-width:1px\r\n    style MOBILITY fill:#f3e5f5,stroke:#7b1fa2,stroke-width:1px\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stp-port-state-machine-and-convergence",
      children: "STP Port State Machine and Convergence"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\r\n    participant RP as Root Port\r\n    participant DP as Designated Port\r\n    participant AP as Alternate Port\r\n    participant N as Network Event\r\n\r\n    N->>RP: Link failure detected\r\n    RP->>DP: BPDU: root bridge info\r\n    DP->>AP: Proposal (superior BPDU)\r\n    AP->>DP: Agreement\r\n    Note over DP,AP: Proposal-Agreement handshake (RSTP)\r\n    \r\n    DP->>DP: Synced → forwarding state\r\n    Note over AP: RSTP: 1-3s<br/>STP: 30-50s\r\n\r\n    AP->>RP: Alternate port becomes root\r\n    RP->>DP: Forwarding state\r\n\r\n    Note over RP,AP: Convergence complete — loop-free topology\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "51-ethernet-frame-format",
      children: "5.1 Ethernet Frame Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Ethernet frame is the fundamental unit of data transfer on Ethernet networks. Its format has remained remarkably stable since the DIX 2.0 standard (1982), ensuring backward compatibility across four decades."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "511-frame-structure",
      children: "5.1.1 Frame Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  Bytes:     7         1         6          6         2       46-1500       4\r\n        ┌─────────┬─────────┬──────────┬──────────┬────────┬─────────────┬────────┐\r\n        │Preamble │   SFD   │Destination│ Source  │Length/ │   Payload   │  FCS   │\r\n        │         │         │   MAC    │   MAC   │ Type   │  (includes  │ (CRC-32)│\r\n        │         │         │          │          │        │   padding)  │        │\r\n        └─────────┴─────────┴──────────┴──────────┴────────┴─────────────┴────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "512-field-by-field-breakdown",
      children: "5.1.2 Field-by-Field Breakdown"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Preamble"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alternating 1 and 0 bits (10101010 × 7). Enables receiver NIC to synchronize clock recovery before the frame arrives."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SFD"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 byte"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start Frame Delimiter (10101011). The last two bits (11) signal that the next byte is the destination MAC."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Destination MAC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recipient's 48-bit MAC address. If the first bit (I/G) = 0, it is unicast; = 1, multicast/broadcast (FF:FF:FF:FF:FF:FF)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Source MAC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sender's 48-bit MAC address. First bit always 0 (source cannot be multicast)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Length/Type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If value ≤ 1500 (0x05DC): indicates payload length in bytes (IEEE 802.3). If value ≥ 1536 (0x0600): indicates EtherType (DIX Ethernet). Common EtherTypes: 0x0800 (IPv4), 0x0806 (ARP), 0x86DD (IPv6), 0x8100 (802.1Q VLAN tag)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Payload + Pad"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "46–1500 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network-layer PDU (e.g., IP packet). If payload < 46 bytes, padding zeros are added to meet the 64-byte minimum frame size."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FCS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frame Check Sequence → CRC-32 computed over dest MAC, source MAC, length/type, payload, and pad. The receiver recomputes CRC; mismatch indicates corruption."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "513-real-world-analogy",
      children: "5.1.3 Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A postal envelope."
        }), " The Preamble is the postal worker aligning the envelope in the sorting machine. The SFD is the \"start here\" mark. Destination and source MACs are the recipient and sender addresses. The Length/Type tells the post office whether this is a letter (length) or a package with a tracking number (EtherType). The Payload is the letter inside. The FCS is the tamper-evident seal → if broken, the recipient knows the contents may be damaged."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "514-frame-processing-steps",
      children: "5.1.4 Frame Processing Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a NIC receives a frame from the wire:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Clock synchronization"
        }), " → The Preamble (7 bytes of 10101010) trains the receiver's PLL (phase-locked loop) to the sender's bit timing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frame start detection"
        }), " → The SFD (10101011) marks the boundary; the two consecutive 1 bits at the end signal \"next byte is the destination MAC.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Address reception"
        }), " → The NIC reads the 6-byte destination MAC. If the NIC's MAC filter is enabled, it checks whether this address matches its own MAC, a configured multicast group, or the broadcast address. If no match, the frame is discarded at the hardware level."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source address capture"
        }), " → The source MAC is extracted for potential MAC table learning (by switches, not end hosts)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type/Length interpretation"
        }), " → The 2-byte field is read. If ≤ 1500, it is a length field (802.3); the receiver expects exactly that many payload bytes. If ≥ 1536, it is an EtherType; the payload length is inferred from the frame size minus headers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Payload extraction"
        }), " → The data portion (46–1500 bytes) is passed to the upper-layer protocol indicated by EtherType."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CRC validation"
        }), " → The receiver computes CRC-32 over the received fields (excluding preamble, SFD, and FCS). If the computed CRC matches the FCS field, the frame is accepted; otherwise, it is silently dropped."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "515-pseudocode-ethernet-frame-parser",
      children: "5.1.5 Pseudocode: Ethernet Frame Parser"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION ParseEthernetFrame(raw_bytes):\r\n    // raw_bytes is a byte array from the physical layer\r\n    \r\n    IF length(raw_bytes) < 18:           // min frame: 14 header + 46 payload - 4 FCS\r\n        RETURN Error(\"Runt frame\")\r\n    \r\n    preamble   = raw_bytes[0:7]          // not typically stored\r\n    sfd        = raw_bytes[7]            // verify 0xAB\r\n    dst_mac    = raw_bytes[8:14]\r\n    src_mac    = raw_bytes[14:20]\r\n    type_len   = raw_bytes[20:22]\r\n    \r\n    fcs_offset = length(raw_bytes) - 4\r\n    fcs        = raw_bytes[fcs_offset:]\r\n    payload    = raw_bytes[22:fcs_offset]\r\n    \r\n    IF type_len <= 1500:\r\n        // IEEE 802.3: length field\r\n        actual_payload = payload[0:type_len]\r\n        protocol = \"IEEE 802.3\"\r\n    ELSE:\r\n        // DIX Ethernet: EtherType field\r\n        actual_payload = payload\r\n        protocol = LOOKUP_ETHERTYPE(type_len)\r\n    \r\n    computed_crc = CRC32(raw_bytes[8:fcs_offset])\r\n    IF computed_crc != fcs:\r\n        RETURN Error(\"CRC mismatch → frame corrupted\")\r\n    \r\n    RETURN Frame(dst_mac, src_mac, type_len, actual_payload, protocol)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "516-dry-run-trace-table-frame-reception",
      children: "5.1.6 Dry Run Trace Table: Frame Reception"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider a switch receiving a 64-byte frame from Host A (MAC: AA:AA:AA:AA:AA:AA) destined to Host B (MAC: BB:BB:BB:BB:BB:BB). Payload is 46 bytes of padding (minimum size)."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
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
            children: "PHY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receive bits from wire"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64 bytes + 8B preamble/SFD = 72B on wire"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preamble"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronize clock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PLL locked to sender's clock"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SFD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detect frame start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SFD = 0xAB → frame starts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dst MAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BB:BB:BB:BB:BB:BB (unicast)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Src MAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AA:AA:AA:AA:AA:AA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type/Len"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x002C = 46 (IEEE 802.3 length)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Payload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read 46 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All zeros (padding)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FCS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read CRC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bytes, e.g., 0x12345678"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRC check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recompute CRC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRC matches → frame valid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dispatch payload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Length ≤ 1500 → 802.3 frame"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "517-c-implementation-ethernet-frame-analyzer",
      children: "5.1.7 C++ Implementation: Ethernet Frame Analyzer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <cstdint>\r\n#include <cstring>\r\n#include <iomanip>\r\n#include <vector>\r\n#include <unordered_map>\r\n\r\n#pragma pack(push, 1)\r\nstruct EthernetHeader {\r\n    uint8_t  dst_mac[6];\r\n    uint8_t  src_mac[6];\r\n    uint16_t type_len;  // network byte order\r\n};\r\n#pragma pack(pop)\r\n\r\nclass EthernetFrame {\r\npublic:\r\n    static constexpr size_t HEADER_SIZE = 14;\r\n    static constexpr size_t FCS_SIZE = 4;\r\n    static constexpr size_t MIN_PAYLOAD = 46;\r\n    static constexpr size_t MAX_PAYLOAD = 1500;\r\n    static constexpr size_t MIN_FRAME = HEADER_SIZE + MIN_PAYLOAD + FCS_SIZE; // 64\r\n    static constexpr size_t MAX_FRAME = HEADER_SIZE + MAX_PAYLOAD + FCS_SIZE; // 1518\r\n    \r\n    static constexpr uint16_t ETHERTYPE_IPV4  = 0x0800;\r\n    static constexpr uint16_t ETHERTYPE_ARP   = 0x0806;\r\n    static constexpr uint16_t ETHERTYPE_IPV6  = 0x86DD;\r\n    static constexpr uint16_t ETHERTYPE_VLAN  = 0x8100;\r\n    static constexpr uint16_t LENGTH_THRESHOLD = 1500;\r\n    \r\n    static std::string mac_to_string(const uint8_t* mac) {\r\n        std::ostringstream oss;\r\n        for (int i = 0; i < 6; ++i) {\r\n            if (i > 0) oss << \":\";\r\n            oss << std::hex << std::setfill('0') << std::setw(2) << (int)mac[i];\r\n        }\r\n        return oss.str();\r\n    }\r\n    \r\n    static bool parse_frame(const std::vector<uint8_t>& raw, EthernetHeader& hdr,\r\n                            std::vector<uint8_t>& payload, uint32_t& fcs) {\r\n        if (raw.size() < MIN_FRAME) {\r\n            std::cerr << \"Runt frame: \" << raw.size() << \" bytes (min \" << MIN_FRAME << \")\\n\";\r\n            return false;\r\n        }\r\n        if (raw.size() > MAX_FRAME + 8) { // +8 for preamble/SFD\r\n            std::cerr << \"Jumbo frame: \" << raw.size() << \" bytes\\n\";\r\n            // Jumbo frames up to 9000 bytes are common\r\n        }\r\n        \r\n        // Copy header (skip preamble+SFD if present, offset 8)\r\n        size_t offset = 8; // assume preamble+SFD prepended\r\n        if (raw.size() < offset + HEADER_SIZE + FCS_SIZE) offset = 0;\r\n        \r\n        std::memcpy(&hdr, raw.data() + offset, HEADER_SIZE);\r\n        hdr.type_len = ntohs(hdr.type_len);  // convert from network byte order\r\n        \r\n        size_t payload_start = offset + HEADER_SIZE;\r\n        size_t payload_end = raw.size() - FCS_SIZE;\r\n        payload.assign(raw.begin() + payload_start, raw.begin() + payload_end);\r\n        \r\n        std::memcpy(&fcs, raw.data() + payload_end, FCS_SIZE);\r\n        fcs = ntohl(fcs);\r\n        \r\n        // Validate CRC (simplified → real CRC32 polynomial)\r\n        uint32_t computed = crc32(raw.data() + offset, payload_end - offset);\r\n        if (computed != fcs) {\r\n            std::cerr << \"CRC mismatch: computed 0x\" << std::hex << computed\r\n                      << \", received 0x\" << fcs << \"\\n\";\r\n            return false;\r\n        }\r\n        \r\n        return true;\r\n    }\r\n    \r\n    static void print_frame_info(const EthernetHeader& hdr,\r\n                                  const std::vector<uint8_t>& payload,\r\n                                  uint32_t fcs) {\r\n        bool is_multicast = hdr.dst_mac[0] & 0x01;\r\n        bool is_broadcast = (hdr.dst_mac[0] == 0xFF && hdr.dst_mac[1] == 0xFF);\r\n        \r\n        std::cout << \"Destination MAC: \" << mac_to_string(hdr.dst_mac)\r\n                  << (is_broadcast ? \" (BROADCAST)\" :\r\n                      is_multicast ? \" (MULTICAST)\" : \" (UNICAST)\") << \"\\n\";\r\n        std::cout << \"Source MAC:      \" << mac_to_string(hdr.src_mac) << \"\\n\";\r\n        \r\n        if (hdr.type_len <= LENGTH_THRESHOLD) {\r\n            std::cout << \"Type/Length:     \" << hdr.type_len << \" (IEEE 802.3 length)\\n\";\r\n        } else {\r\n            std::cout << \"Type/Length:     0x\" << std::hex << hdr.type_len\r\n                      << \" (EtherType)\\n\";\r\n        }\r\n        std::cout << \"Payload size:    \" << payload.size() << \" bytes\\n\";\r\n        std::cout << \"FCS:             0x\" << std::hex << fcs << \"\\n\";\r\n    }\r\n    \r\nprivate:\r\n    static uint32_t crc32(const uint8_t* data, size_t len) {\r\n        // Simplified CRC-32 → production uses hardware-accelerated CRC\r\n        uint32_t crc = 0xFFFFFFFF;\r\n        for (size_t i = 0; i < len; ++i) {\r\n            crc ^= data[i];\r\n            for (int j = 0; j < 8; ++j) {\r\n                if (crc & 1) crc = (crc >> 1) ^ 0xEDB88320;\r\n                else crc >>= 1;\r\n            }\r\n        }\r\n        return ~crc;\r\n    }\r\n};\r\n\r\nint main() {\r\n    // Simulated raw frame (preamble + SFD + header + payload + FCS)\r\n    std::vector<uint8_t> raw_frame = {\r\n        // Preamble (7 bytes)\r\n        0xAA, 0xAA, 0xAA, 0xAA, 0xAA, 0xAA, 0xAA,\r\n        // SFD\r\n        0xAB,\r\n        // Destination MAC: BB:BB:BB:BB:BB:BB\r\n        0xBB, 0xBB, 0xBB, 0xBB, 0xBB, 0xBB,\r\n        // Source MAC: AA:AA:AA:AA:AA:AA\r\n        0xAA, 0xAA, 0xAA, 0xAA, 0xAA, 0xAA,\r\n        // Type/Length: 0x0800 (IPv4)\r\n        0x08, 0x00,\r\n        // Payload (46 bytes of padded IP packet)\r\n        0x45, 0x00, 0x00, 0x1C, 0x00, 0x01, 0x00, 0x00,\r\n        0x40, 0x00, 0x40, 0x06, 0x00, 0x00, 0xC0, 0xA8,\r\n        0x01, 0x01, 0xC0, 0xA8, 0x01, 0x02, 0x00, 0x00,\r\n        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,\r\n        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,\r\n        0x00, 0x00, 0x00, 0x00, 0x00, 0x00,\r\n        // FCS (4 bytes) → placeholder\r\n        0xDE, 0xAD, 0xBE, 0xEF\r\n    };\r\n    \r\n    EthernetHeader hdr;\r\n    std::vector<uint8_t> payload;\r\n    uint32_t fcs;\r\n    \r\n    if (EthernetFrame::parse_frame(raw_frame, hdr, payload, fcs)) {\r\n        EthernetFrame::print_frame_info(hdr, payload, fcs);\r\n    }\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "518-python-implementation-ethernet-frame-parser",
      children: "5.1.8 Python Implementation: Ethernet Frame Parser"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import struct\r\nimport binascii\r\nfrom dataclasses import dataclass\r\nfrom typing import Optional\r\n\r\n@dataclass\r\nclass EthernetFrame:\r\n    dst_mac: str\r\n    src_mac: str\r\n    type_len: int\r\n    payload: bytes\r\n    protocol: str\r\n\r\nclass EthernetFrameParser:\r\n    ETHERTYPES = {\r\n        0x0800: \"IPv4\",\r\n        0x0806: \"ARP\",\r\n        0x86DD: \"IPv6\",\r\n        0x8100: \"802.1Q VLAN\",\r\n        0x8847: \"MPLS Unicast\",\r\n        0x8863: \"PPPoE Discovery\",\r\n        0x8864: \"PPPoE Session\",\r\n    }\r\n    \r\n    MIN_FRAME = 64   # bytes (including FCS)\r\n    MAX_FRAME = 1518 # bytes (including FCS)\r\n    \r\n    @staticmethod\r\n    def mac_to_str(mac_bytes: bytes) -> str:\r\n        return \":\".join(f\"{b:02x}\" for b in mac_bytes)\r\n    \r\n    @staticmethod\r\n    def crc32(data: bytes) -> int:\r\n        return binascii.crc32(data) & 0xFFFFFFFF\r\n    \r\n    @classmethod\r\n    def parse(cls, raw: bytes) -> Optional[EthernetFrame]:\r\n        if len(raw) < cls.MIN_FRAME:\r\n            print(f\"ERROR: Runt frame → {len(raw)} bytes (min {cls.MIN_FRAME})\")\r\n            return None\r\n        \r\n        # Skip preamble (7 bytes) + SFD (1 byte) if present\r\n        offset = 8 if len(raw) > cls.MIN_FRAME + 8 else 0\r\n        \r\n        dst_mac = raw[offset : offset + 6]\r\n        src_mac = raw[offset + 6 : offset + 12]\r\n        type_len = struct.unpack(\"!H\", raw[offset + 12 : offset + 14])[0]\r\n        \r\n        payload_start = offset + 14\r\n        payload_end = len(raw) - 4\r\n        payload = raw[payload_start:payload_end]\r\n        received_fcs = struct.unpack(\"!I\", raw[payload_end:])[0]\r\n        \r\n        # Validate CRC\r\n        computed_fcs = cls.crc32(raw[offset:payload_end])\r\n        if computed_fcs != received_fcs:\r\n            print(f\"ERROR: CRC mismatch → computed 0x{computed_fcs:08X}, \"\r\n                  f\"received 0x{received_fcs:08X}\")\r\n            return None\r\n        \r\n        # Determine protocol\r\n        if type_len <= 1500:\r\n            protocol = \"IEEE 802.3\"\r\n            payload = payload[:type_len]  # trim padding\r\n        else:\r\n            protocol = cls.ETHERTYPES.get(type_len, f\"Unknown(0x{type_len:04X})\")\r\n        \r\n        return EthernetFrame(\r\n            dst_mac=cls.mac_to_str(dst_mac),\r\n            src_mac=cls.mac_to_str(src_mac),\r\n            type_len=type_len,\r\n            payload=payload,\r\n            protocol=protocol\r\n        )\r\n\r\n# Demonstration\r\nif __name__ == \"__main__\":\r\n    # Simulated frame: preamble + SFD + header + payload + FCS\r\n    raw = bytes([\r\n        0xAA, 0xAA, 0xAA, 0xAA, 0xAA, 0xAA, 0xAA,  # Preamble\r\n        0xAB,  # SFD\r\n        0xBB, 0xBB, 0xBB, 0xBB, 0xBB, 0xBB,  # Dst MAC\r\n        0xAA, 0xAA, 0xAA, 0xAA, 0xAA, 0xAA,  # Src MAC\r\n        0x08, 0x00,  # EtherType IPv4\r\n        0x45, 0x00, 0x00, 0x14,  # IP header start (20 bytes of padding)\r\n        0x00, 0x01, 0x00, 0x00,\r\n        0x40, 0x00, 0x40, 0x00,\r\n        0x00, 0x00, 0x00, 0x00,\r\n        0x00, 0x00, 0x00, 0x00,\r\n        0x00, 0x00, 0x00, 0x00,\r\n        0x00, 0x00, 0x00, 0x00,\r\n        0x00, 0x00, 0x00, 0x00,\r\n        0x00, 0x00, 0x00, 0x00,\r\n        0x00, 0x00, 0x00, 0x00,\r\n        0x00, 0x00, 0x00, 0x00,\r\n        0x00, 0x00, 0x00, 0x00,\r\n        0xDE, 0xAD, 0xBE, 0xEF,  # FCS placeholder\r\n    ])\r\n    \r\n    frame = EthernetFrameParser.parse(raw)\r\n    if frame:\r\n        print(f\"Dst MAC: {frame.dst_mac}\")\r\n        print(f\"Src MAC: {frame.src_mac}\")\r\n        print(f\"Type/Len: 0x{frame.type_len:04X} ({frame.protocol})\")\r\n        print(f\"Payload: {len(frame.payload)} bytes\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "519-complexity-analysis",
      children: "5.1.9 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frame parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must scan all n bytes of the frame sequentially; payload bytes must be buffered"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CRC-32 validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each byte processed exactly once; polynomial operations in constant registers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EtherType lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k)*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash map of k EtherType entries; constant-time average"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAC address comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6-byte fixed-length comparison; hardware-comparable in single instruction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Padding removal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Truncate payload to length field value; pointer arithmetic only"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "* Where k = number of known EtherTypes (typically < 50)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5110-advantages-and-disadvantages",
      children: "5.1.10 Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Fixed header size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14-byte header enables fast hardware parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No room for extensions without tagging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CRC-32 protection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detects all single-bit, double-bit, and burst errors ≤ 32 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No error correction → corrupted frames are silently dropped"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum frame size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensures collision detection in half-duplex modes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wastes bandwidth for small packets (e.g., TCP ACKs padded with zeros)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum frame size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1500 bytes is TCP/IP-friendly (fits in typical socket buffers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jumbo frames (9000B) are non-standard; requires all devices to agree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backward compatibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same format since 1982 → 10Mbps and 400Gbps NICs speak the same language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No native encryption or authentication at L2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5111-edge-cases",
      children: "5.1.11 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Runt frame"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frame < 64 bytes due to collision or TX underrun"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discarded by receiver; CSMA/CD enforces minimum size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Giant frame"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frame > 1518 bytes (non-jumbo)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discarded; switch may support jumbo frames up to 9216 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CRC error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bit flips during transmission cause FCS mismatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frame dropped; upper layers (TCP) retransmit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Jabber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transmitter sends abnormally long frame (> 1518)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch detects jabber and disables port (errdisable)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alignment error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frame does not end on byte boundary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRC check fails; frame discarded"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Late collision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collision detected after first 64 bytes transmitted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frame treated as collision fragment; station retransmits (half-duplex only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EtherType ambiguity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some NICs misclassify length vs type when value is 1500–1535"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern switches treat values > 1500 as EtherType per IEEE 802.3x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dribble bit error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extra bits after FCS due to clock drift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receiver may accept frame if FCS is valid and discard extra bits"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "52-ethernet-evolution",
      children: "5.2 Ethernet Evolution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ethernet has evolved through seven major speed generations while preserving the same frame format → an engineering achievement unmatched in networking."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "521-10-mbps-ethernet-10base5-10base2-10baset",
      children: "5.2.1 10 Mbps Ethernet (10Base5, 10Base2, 10BaseT)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The original Ethernet standard published in 1980 by DEC, Intel, and Xerox (DIX) operated at 10 Mbps over coaxial cable. 10Base5 (thicknet) used a vampire tap to connect stations to a long coaxial segment up to 500 meters. 10Base2 (thinnet) used BNC T-connectors on thinner, more flexible RG-58 cable with 185 m segments. Both were shared-media bus topologies → all stations on a segment belonged to the same collision domain."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "10BaseT introduced twisted-pair cabling and a star topology centered on a hub. Hubs were repeaters: signals received on any port were regenerated and transmitted on all other ports. While easier to cable, hubs still created a single collision domain and limited aggregate throughput to 10 Mbps."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "522-fast-ethernet-100basetx-100basefx",
      children: "5.2.2 Fast Ethernet (100BaseTX, 100BaseFX)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fast Ethernet (IEEE 802.3u, 1995) increased speed to 100 Mbps while preserving the CSMA/CD access method and frame format. 100BaseTX uses two pairs of Cat 5 UTP; 100BaseFX uses two multimode fiber strands for runs up to 2 km. The slot time was reduced from 512 bits to 512 bits (shorter time at 100 Mbps required the same minimum frame size but smaller network diameter: 205 m for half-duplex). Auto-negotiation was introduced to allow 10/100 Mbps devices to detect each other's capabilities."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "523-gigabit-ethernet-1000baset-1000basesx-1000baselx",
      children: "5.2.3 Gigabit Ethernet (1000BaseT, 1000BaseSX, 1000BaseLX)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gigabit Ethernet (IEEE 802.3z, 1998; 802.3ab, 1999) pushed the data rate to 1000 Mbps while maintaining compatibility. 1000BaseSX (short-wavelength laser) operates over multimode fiber up to 550 m; 1000BaseLX (long-wavelength) over single-mode fiber up to 5 km; 1000BaseT over Cat 5e UTP up to 100 m. Carrier extension (padding frames to 512 bytes) and frame bursting (transmitting multiple frames consecutively) were introduced to maintain the CSMA/CD collision constraint."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "524-10-gigabit-ethernet",
      children: "5.2.4 10 Gigabit Ethernet"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "10GbE (IEEE 802.3ae, 2002) is full-duplex only → CSMA/CD is disabled because switched networks make collisions irrelevant. 10GBASE-SR (short-range, 300 m MMF), 10GBASE-LR (10 km SMF), 10GBASE-ER (40 km SMF), and 10GBASE-T (Cat 6a UTP, 100 m) serve data center and metropolitan applications. FEC (Forward Error Correction) was introduced to maintain BER below 10^-12 over longer fiber runs."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "525-40-100-200-400-gigabit-ethernet",
      children: "5.2.5 40, 100, 200, 400 Gigabit Ethernet"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IEEE 802.3ba (2010) defined 40 Gbps and 100 Gbps Ethernet using parallel lanes of 10 Gbps or 25 Gbps physical channels. 400 Gbps (802.3bs, 2017) uses 16 lanes of 25 Gbps or 8 lanes of 50 Gbps with PAM4 modulation. 800 Gbps and 1.6 Tbps are under development (IEEE 802.3df). Modern switches support aggregation of multiple links via LACP."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " The Ethernet frame format has remained fundamentally unchanged since 1980, which is remarkable for any networking technology. This backward compatibility means a 2024 switch can still process frames from a 1990s Ethernet card → the physical speed changes, but the frame language is the same."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "526-ethernet-generations-comparison",
      children: "5.2.6 Ethernet Generations Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Generation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Standard"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Year"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max Segment"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Innovation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ethernet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "802.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1983"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coax (10Base5/2), Cat3 UTP (10BaseT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500 m (coax), 100 m (TP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSMA/CD, vampire tap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fast Ethernet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "802.3u"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1995"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cat5 UTP (100BaseTX), MMF (100BaseFX)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 m (TP), 2 km (fiber)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-negotiation, 10x speed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gigabit Ethernet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "802.3z/ab"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1998/99"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cat5e UTP, MMF (SX), SMF (LX)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 m (TP), 550 m (MMF), 5 km (SMF)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carrier extension, frame bursting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10 Gigabit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "802.3ae"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cat6a UTP, MMF, SMF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 m (TP), 300 m (MMF), 40 km (SMF)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-duplex only, FEC, 8B/10B encoding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "40 Gigabit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "802.3ba"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMF/MMF, Cat6a (CX)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 m (CX), 10 km (SMF)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4×10G lanes, QSFP form factor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100 Gigabit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "802.3ba"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMF/MMF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40 km (SMF)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10×10G or 4×25G lanes, CFP/QSFP28"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "200 Gigabit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "802.3bs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2017"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMF/MMF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 km (MMF), 10 km (SMF)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PAM4, 4×50G lanes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "400 Gigabit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "802.3bs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2017"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "400 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMF/MMF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 km (MMF), 10 km (SMF)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16×25G or 8×50G PAM4, QSFP-DD/OSFP"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "527-key-physical-layer-innovations-by-generation",
      children: "5.2.7 Key Physical Layer Innovations by Generation"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Innovation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Introduced In"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Matters"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSMA/CD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collision detection enabled shared medium access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-negotiation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Devices automatically agree on speed/duplex; eliminated manual configuration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Carrier Extension"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Padded short frames to maintain collision detection at 1 Gbps speeds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frame Bursting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed multiple short frames to transmit consecutively without re-contending"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full-duplex only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eliminated CSMA/CD entirely; simplified PHY, doubled throughput"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FEC (RS-FEC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 Gbps (later)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reed-Solomon FEC corrected bit errors at high speeds over longer reaches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PAM4 modulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 Gbps+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 bits per symbol doubled data rate without doubling bandwidth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NRZ → PAM4 transition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "400 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8×50G PAM4 lanes replaced 16×25G NRZ lanes for better density"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-lane distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40 Gbps+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data striped across multiple physical lanes; reassembled at receiver"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "53-switches-and-bridges",
      children: "5.3 Switches and Bridges"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bridge"
      }), " operates at the data link layer, connecting two or more LAN segments and forwarding frames based on MAC addresses. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "switch"
      }), " is a multi-port bridge with a high-speed backplane and dedicated per-port buffer memory. Modern switches are the core of virtually every wired network."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "531-switching-methods",
      children: "5.3.1 Switching Methods"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Store-and-forward switching."
      }), " The switch receives the entire frame, checks the FCS for errors, and then forwards. This ensures no corrupted frames propagate but adds latency proportional to frame size. Latency = frame_size / link_speed. For a 1500-byte frame on 1 Gbps: 1500×8/1e9 = 12 µs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cut-through switching."
      }), " The switch begins forwarding before the complete frame arrives → typically after reading only the destination MAC address (first 6 bytes of the frame, 14 bytes from preamble start). Latency is typically < 10 µs regardless of frame size, but damaged frames are forwarded. Two variants: fast-forward (forwards after dst MAC) and fragment-free (forwards after first 64 bytes)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fragment-free switching."
      }), " The switch reads the first 64 bytes before forwarding (the collision window). This rejects runt frames (collision fragments) while keeping latency low. It is a compromise between store-and-forward and cut-through."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "532-real-world-analogy",
      children: "5.3.2 Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A mail sorting facility."
        }), " A switch is like a postal sorting center with hundreds of outgoing chutes (ports). When a letter (frame) arrives, the sorter reads the ZIP code (destination MAC). If the sorter has seen that ZIP before, the letter goes directly to the correct chute (forwarding). If the ZIP is unknown, the sorter copies the letter and sends one copy to every outgoing chute (flooding). The sorter also notes the return address (source MAC) and remembers which incoming door it came through (MAC learning). Store-and-forward mode means the sorter reads the entire letter before routing; cut-through means the sorter starts pushing it toward the chute as soon as the ZIP is read."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "533-switch-vs-hub-vs-router-comparison",
      children: "5.3.3 Switch vs Hub vs Router Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hub"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Switch"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Router"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OSI Layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Layer 1 (Physical)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Layer 2 (Data Link)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Layer 3 (Network)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forwarding unit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Electrical signal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethernet frame"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP packet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decision basis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (repeats all signals)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destination MAC address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destination IP address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Address table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAC address table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routing table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collision domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single (all ports)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-port (each port is separate)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-port (each port is separate)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcast domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single (all ports)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-VLAN (configurable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-interface (does not forward broadcasts by default)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth sharing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared (total bandwidth divided)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dedicated (each port gets full speed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dedicated (each port gets full speed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loop handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No loop protection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STP/RSTP (blocking redundant paths)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TTL, routing protocols prevent loops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lowest (repeats bits immediately)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (µs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (ms, due to IP lookup)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intelligence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAC learning, STP, VLAN, QoS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routing protocols, NAT, ACL, firewall"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Port density"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (typically 4-24)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (24-48 ports common)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-moderate (4-48 ports)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost per port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lowest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy networks, small home"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access/aggregation/core LAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WAN, internet edge, segmentation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "534-switch-operation-numbered-steps",
      children: "5.3.4 Switch Operation: Numbered Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a switch receives a frame on a port:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frame arrival"
        }), " → The PHY receives bits on port P. The MAC layer extracts the frame, validates the FCS. If FCS fails, the frame is dropped."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source MAC learning"
        }), " → The switch extracts the source MAC address S. It creates or refreshes an entry in the MAC address table: (S, port P, timestamp). This links the sender to the port it arrived on."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Destination MAC lookup"
        }), " → The switch extracts the destination MAC address D. It looks up D in the MAC address table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Forwarding decision"
        }), " → Three possible outcomes:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Known unicast (filter):"
            }), " D is found on port Q, and Q == P (same port). Frame is dropped because the destination is on the same segment as the source."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Known unicast (forward):"
            }), " D is found on port Q, and Q != P. Frame is forwarded only to port Q."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Unknown unicast or broadcast (flood):"
            }), " D is not found in the table, or D is broadcast (FF:FF:FF:FF:FF:FF). Frame is forwarded to all ports except P."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frame transmission"
        }), " → The switch queues the frame on the egress port's buffer. The PHY transmits bits on the wire. For cut-through, step 4 begins before the full frame is received."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "535-pseudocode-switch-forwarding-engine",
      children: "5.3.5 Pseudocode: Switch Forwarding Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "STRUCTURE MacEntry:\r\n    mac: 48-bit integer\r\n    port: integer\r\n    timestamp: integer        // last-seen time (epoch ms)\r\n\r\nGLOBAL mac_table: Map<MAC, MacEntry>\r\nGLOBAL aging_threshold = 300  // seconds\r\n\r\nFUNCTION UpdateMacTable(src_mac, ingress_port, current_time):\r\n    IF src_mac IN mac_table:\r\n        mac_table[src_mac].port = ingress_port\r\n        mac_table[src_mac].timestamp = current_time\r\n    ELSE:\r\n        mac_table[src_mac] = MacEntry(src_mac, ingress_port, current_time)\r\n        IF SIZE(mac_table) > MAX_TABLE_SIZE:\r\n            EvictOldestEntry()   // remove LRU or oldest entry\r\n\r\nFUNCTION AgeOutEntries(current_time):\r\n    FOR EACH (mac, entry) IN mac_table:\r\n        IF current_time - entry.timestamp > aging_threshold * 1000:\r\n            REMOVE entry FROM mac_table\r\n            LOG \"Aged out MAC \" + mac + \" from port \" + entry.port\r\n\r\nFUNCTION ProcessFrame(frame, ingress_port, current_time):\r\n    // Step 1: Learn source MAC\r\n    UpdateMacTable(frame.src_mac, ingress_port, current_time)\r\n    \r\n    // Step 2: Look up destination MAC\r\n    dst_mac = frame.dst_mac\r\n    \r\n    IF dst_mac IS Broadcast OR dst_mac IS Multicast:\r\n        FloodFrame(frame, ingress_port)   // send to all ports except ingress\r\n        RETURN\r\n    \r\n    entry = LOOKUP mac_table[dst_mac]\r\n    \r\n    IF entry IS NULL:\r\n        // Unknown unicast → flood\r\n        FloodFrame(frame, ingress_port)\r\n    ELSE IF entry.port == ingress_port:\r\n        // Same port → filter (drop)\r\n        DROP frame\r\n    ELSE:\r\n        // Forward to learned port\r\n        TransmitFrame(frame, entry.port)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "536-dry-run-trace-table-mac-table-learning",
      children: "5.3.6 Dry Run Trace Table: MAC Table Learning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider a 4-port switch (ports 1–4). Initially the MAC table is empty. Hosts A, B, C connected on ports 1, 2, 3 respectively. Host D connected on port 4. The switch processes frames in sequence:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ingress Port"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Src MAC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dst MAC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MAC Table After"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(empty)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A→B frame"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A→1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learn A on port 1; B unknown → flood ports 2,3,4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T=2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B→A reply"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A→1, B→2}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learn B on port 2; A known on port 1 → forward only port 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A→C frame"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A→1, B→2}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Refresh A; C unknown → flood ports 2,3,4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T=4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C→A reply"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A→1, B→2, C→3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learn C on port 3; A known → forward only port 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T=5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B→D frame"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A→1, B→2, C→3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Refresh B; D unknown → flood ports 1,3,4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T=6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D→B reply"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A→1, B→2, C→3, D→4}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learn D on port 4; B known → forward only port 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T=7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A→B frame"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A→1, B→2, C→3, D→4}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Refresh A; B known on port 2 ≠ 1 → forward only port 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T=8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B→A frame"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A→1, B→2, C→3, D→4}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Refresh B; A known on port 1 ≠ 2 → forward only port 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T=9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A→A frame (self)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A→1, B→2, C→3, D→4}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Refresh A; A known on port 1 == 1 → filter (drop)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After T=6, all four hosts are learned. After T=7–8, frames between known hosts are forwarded precisely to the correct port → no flooding. After T=9, a self-addressed frame is filtered because the source and destination port match (the destination is on the same segment as the source)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "537-c-implementation-switch-mac-table",
      children: "5.3.7 C++ Implementation: Switch MAC Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <unordered_map>\r\n#include <vector>\r\n#include <chrono>\r\n#include <string>\r\n#include <iomanip>\r\n#include <sstream>\r\n#include <algorithm>\r\n#include <cstdint>\r\n#include <ctime>\r\n\r\nstruct MacEntry {\r\n    uint64_t mac;       // 48-bit MAC address\r\n    int port;\r\n    std::chrono::steady_clock::time_point timestamp;\r\n    \r\n    MacEntry(uint64_t m, int p) : mac(m), port(p),\r\n        timestamp(std::chrono::steady_clock::now()) {}\r\n};\r\n\r\nclass MacTable {\r\nprivate:\r\n    std::unordered_map<uint64_t, MacEntry> table;\r\n    static constexpr int AGING_SECONDS = 300;\r\n    size_t max_entries;\r\n    \r\n    static uint64_t mac_to_uint(const std::string& mac_str) {\r\n        uint64_t result = 0;\r\n        std::stringstream ss(mac_str);\r\n        int byte;\r\n        char colon;\r\n        for (int i = 0; i < 6; ++i) {\r\n            ss >> std::hex >> byte;\r\n            if (i < 5) ss >> colon;\r\n            result = (result << 8) | (byte & 0xFF);\r\n        }\r\n        return result;\r\n    }\r\n    \r\npublic:\r\n    MacTable(size_t max = 8192) : max_entries(max) {}\r\n    \r\n    void learn(const std::string& mac_str, int port) {\r\n        learn(mac_to_uint(mac_str), port);\r\n    }\r\n    \r\n    void learn(uint64_t mac, int port) {\r\n        auto now = std::chrono::steady_clock::now();\r\n        auto it = table.find(mac);\r\n        \r\n        if (it != table.end()) {\r\n            // Existing entry → update port and timestamp\r\n            if (it->second.port != port) {\r\n                std::cout << \"MAC flapping detected: \" << mac_to_string(mac)\r\n                          << \" moved from port \" << it->second.port\r\n                          << \" to port \" << port << \"\\n\";\r\n            }\r\n            it->second.port = port;\r\n            it->second.timestamp = now;\r\n        } else {\r\n            // New entry\r\n            if (table.size() >= max_entries) {\r\n                evict_oldest();\r\n            }\r\n            table.emplace(mac, MacEntry(mac, port));\r\n        }\r\n    }\r\n    \r\n    int lookup(const std::string& mac_str) const {\r\n        return lookup(mac_to_uint(mac_str));\r\n    }\r\n    \r\n    int lookup(uint64_t mac) const {\r\n        auto it = table.find(mac);\r\n        if (it != table.end()) return it->second.port;\r\n        return -1;  // not found\r\n    }\r\n    \r\n    void age_out() {\r\n        auto now = std::chrono::steady_clock::now();\r\n        auto threshold = std::chrono::seconds(AGING_SECONDS);\r\n        size_t aged = 0;\r\n        \r\n        for (auto it = table.begin(); it != table.end(); ) {\r\n            if (now - it->second.timestamp > threshold) {\r\n                std::cout << \"Aging out \" << mac_to_string(it->first)\r\n                          << \" from port \" << it->second.port << \"\\n\";\r\n                it = table.erase(it);\r\n                ++aged;\r\n            } else {\r\n                ++it;\r\n            }\r\n        }\r\n        std::cout << \"Aged out \" << aged << \" entries. Table size: \"\r\n                  << table.size() << \"\\n\";\r\n    }\r\n    \r\n    void evict_oldest() {\r\n        auto oldest = table.begin();\r\n        for (auto it = table.begin(); it != table.end(); ++it) {\r\n            if (it->second.timestamp < oldest->second.timestamp) {\r\n                oldest = it;\r\n            }\r\n        }\r\n        std::cout << \"Table full → evicting oldest entry: \"\r\n                  << mac_to_string(oldest->first) << \"\\n\";\r\n        table.erase(oldest);\r\n    }\r\n    \r\n    size_t size() const { return table.size(); }\r\n    \r\n    static std::string mac_to_string(uint64_t mac) {\r\n        std::ostringstream oss;\r\n        for (int i = 5; i >= 0; --i) {\r\n            if (i < 5) oss << \":\";\r\n            oss << std::hex << std::setfill('0') << std::setw(2)\r\n                << ((mac >> (i * 8)) & 0xFF);\r\n        }\r\n        return oss.str();\r\n    }\r\n    \r\n    void print_table() const {\r\n        std::cout << \"\\nMAC Address Table (\" << table.size() << \" entries):\\n\";\r\n        std::cout << \"----------------------------------------\\n\";\r\n        std::cout << \"MAC Address        Port  Age(s)\\n\";\r\n        std::cout << \"----------------------------------------\\n\";\r\n        auto now = std::chrono::steady_clock::now();\r\n        \r\n        // Sort entries by port for clean output\r\n        std::vector<std::pair<uint64_t, MacEntry>> entries(table.begin(), table.end());\r\n        std::sort(entries.begin(), entries.end(),\r\n            [](const auto& a, const auto& b) {\r\n                return a.second.port < b.second.port;\r\n            });\r\n        \r\n        for (const auto& [mac, entry] : entries) {\r\n            auto age = std::chrono::duration_cast<std::chrono::seconds>(\r\n                now - entry.timestamp).count();\r\n            std::cout << mac_to_string(mac) << \"  \"\r\n                      << \"Port \" << entry.port << \"   \"\r\n                      << age << \"s\\n\";\r\n        }\r\n    }\r\n};\r\n\r\n// Demonstration of switch MAC learning\r\nint main() {\r\n    MacTable table(4);  // Small table for demonstration\r\n    \r\n    std::cout << \"=== Switch MAC Table Learning Simulation ===\\n\\n\";\r\n    \r\n    // Sequence of frames received\r\n    struct FrameEvent {\r\n        std::string desc;\r\n        std::string src_mac;\r\n        std::string dst_mac;\r\n        int ingress_port;\r\n    };\r\n    \r\n    std::vector<FrameEvent> events = {\r\n        {\"A→B\", \"AA:AA:AA:AA:AA:01\", \"AA:AA:AA:AA:AA:02\", 1},\r\n        {\"B→A reply\", \"AA:AA:AA:AA:AA:02\", \"AA:AA:AA:AA:AA:01\", 2},\r\n        {\"C→D\", \"AA:AA:AA:AA:AA:03\", \"AA:AA:AA:AA:AA:04\", 3},\r\n        {\"D→C reply\", \"AA:AA:AA:AA:AA:04\", \"AA:AA:AA:AA:AA:03\", 4},\r\n        {\"A→C\", \"AA:AA:AA:AA:AA:01\", \"AA:AA:AA:AA:AA:03\", 1},\r\n    };\r\n    \r\n    for (const auto& evt : events) {\r\n        std::cout << \"\\n[\" << evt.desc << \"] Frame from \" << evt.src_mac\r\n                  << \" → \" << evt.dst_mac << \" on port \" << evt.ingress_port << \"\\n\";\r\n        \r\n        // Learn source MAC\r\n        table.learn(evt.src_mac, evt.ingress_port);\r\n        \r\n        // Lookup destination MAC\r\n        int dst_port = table.lookup(evt.dst_mac);\r\n        if (dst_port == -1) {\r\n            std::cout << \"  → \" << evt.dst_mac << \" unknown → FLOOD to all ports except \"\r\n                      << evt.ingress_port << \"\\n\";\r\n        } else if (dst_port == evt.ingress_port) {\r\n            std::cout << \"  → \" << evt.dst_mac << \" on same port → FILTER (drop)\\n\";\r\n        } else {\r\n            std::cout << \"  → \" << evt.dst_mac << \" on port \" << dst_port\r\n                      << \" → FORWARD\\n\";\r\n        }\r\n        \r\n        table.print_table();\r\n    }\r\n    \r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "538-python-implementation-switch-mac-table",
      children: "5.3.8 Python Implementation: Switch MAC Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\r\nfrom dataclasses import dataclass\r\nfrom typing import Dict, Optional, List, Tuple\r\n\r\n@dataclass\r\nclass MacEntry:\r\n    mac: str\r\n    port: int\r\n    timestamp: float  # epoch seconds\r\n\r\nclass SwitchMacTable:\r\n    def __init__(self, aging_seconds: int = 300, max_entries: int = 8192):\r\n        self.table: Dict[str, MacEntry] = {}\r\n        self.aging_seconds = aging_seconds\r\n        self.max_entries = max_entries\r\n        \r\n    def learn(self, mac: str, port: int) -> None:\r\n        now = time.time()\r\n        if mac in self.table:\r\n            old_port = self.table[mac].port\r\n            if old_port != port:\r\n                print(f\"MAC flapping: {mac} moved from port {old_port} to port {port}\")\r\n            self.table[mac].port = port\r\n            self.table[mac].timestamp = now\r\n        else:\r\n            if len(self.table) >= self.max_entries:\r\n                self._evict_oldest()\r\n            self.table[mac] = MacEntry(mac=mac, port=port, timestamp=now)\r\n            print(f\"Learned {mac} on port {port}\")\r\n    \r\n    def lookup(self, mac: str) -> Optional[int]:\r\n        entry = self.table.get(mac)\r\n        if entry:\r\n            return entry.port\r\n        return None\r\n    \r\n    def age_out(self) -> int:\r\n        now = time.time()\r\n        aged = 0\r\n        expired = [\r\n            mac for mac, entry in self.table.items()\r\n            if now - entry.timestamp > self.aging_seconds\r\n        ]\r\n        for mac in expired:\r\n            print(f\"Aging out {mac} from port {self.table[mac].port}\")\r\n            del self.table[mac]\r\n            aged += 1\r\n        return aged\r\n    \r\n    def _evict_oldest(self) -> None:\r\n        if not self.table:\r\n            return\r\n        oldest_mac = min(self.table.items(), key=lambda x: x[1].timestamp)[0]\r\n        print(f\"Table full → evicting oldest: {oldest_mac}\")\r\n        del self.table[oldest_mac]\r\n    \r\n    def __len__(self) -> int:\r\n        return len(self.table)\r\n    \r\n    def __repr__(self) -> str:\r\n        if not self.table:\r\n            return \"MAC table: (empty)\"\r\n        lines = [\"MAC Address Table:\"]\r\n        lines.append(f\"{'MAC Address':<20} {'Port':<8} {'Age(s)':<8}\")\r\n        lines.append(\"-\" * 40)\r\n        now = time.time()\r\n        for mac, entry in sorted(self.table.items(), key=lambda x: x[1].port):\r\n            age = int(now - entry.timestamp)\r\n            lines.append(f\"{mac:<20} Port {entry.port:<3} {age:<8}\")\r\n        return \"\\n\".join(lines)\r\n\r\n\r\nclass Switch:\r\n    def __init__(self, ports: int = 24):\r\n        self.ports = ports\r\n        self.mac_table = SwitchMacTable()\r\n    \r\n    def process_frame(self, src_mac: str, dst_mac: str, ingress_port: int) -> str:\r\n        # Step 1: Learn source MAC\r\n        self.mac_table.learn(src_mac, ingress_port)\r\n        \r\n        # Step 2: Check if broadcast/multicast\r\n        if dst_mac == \"FF:FF:FF:FF:FF:FF\":\r\n            action = f\"FLOOD (broadcast) to all ports except {ingress_port}\"\r\n        elif dst_mac.startswith(\"01:00:5E\"):  # IPv4 multicast\r\n            action = f\"FLOOD (multicast) to all ports except {ingress_port}\"\r\n        else:\r\n            # Step 3: Lookup destination\r\n            dst_port = self.mac_table.lookup(dst_mac)\r\n            if dst_port is None:\r\n                action = f\"FLOOD (unknown unicast) to all ports except {ingress_port}\"\r\n            elif dst_port == ingress_port:\r\n                action = \"FILTER (same port → destination on same segment)\"\r\n            else:\r\n                action = f\"FORWARD to port {dst_port}\"\r\n        \r\n        print(f\"[{src_mac} → {dst_mac} on port {ingress_port}] {action}\")\r\n        return action\r\n\r\n\r\n# Demonstration\r\nif __name__ == \"__main__\":\r\n    switch = Switch(ports=4)\r\n    \r\n    print(\"=== Switch Forwarding Simulation ===\\n\")\r\n    \r\n    # Simulate frames\r\n    switch.process_frame(\"00:11:22:AA:BB:01\", \"00:11:22:AA:BB:02\", 1)\r\n    print(switch.mac_table, \"\\n\")\r\n    \r\n    switch.process_frame(\"00:11:22:AA:BB:02\", \"00:11:22:AA:BB:01\", 2)\r\n    print(switch.mac_table, \"\\n\")\r\n    \r\n    switch.process_frame(\"00:11:22:AA:BB:03\", \"FF:FF:FF:FF:FF:FF\", 3)\r\n    print(switch.mac_table, \"\\n\")\r\n    \r\n    switch.process_frame(\"00:11:22:AA:BB:01\", \"00:11:22:AA:BB:03\", 1)\r\n    print(switch.mac_table, \"\\n\")\r\n    \r\n    # MAC move test\r\n    print(\"--- MAC Move Test ---\")\r\n    switch.process_frame(\"00:11:22:AA:BB:01\", \"00:11:22:AA:BB:04\", 4)\r\n    print(switch.mac_table)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "539-complexity-analysis",
      children: "5.3.9 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAC table lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg, O(n) worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table: constant average, but hash collisions degenerate to linear scan. Hardware TCAM is always O(1)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAC table insertion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m)*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash insertion amortized O(1). If table full, eviction adds O(m) to find oldest."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAC table aging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must scan all m entries to check timestamps. In production, coarsened to run every N seconds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frame forwarding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) + O(f)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(f)**"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lookup O(1); transmit cost O(f) where f = frame size in bytes (serialization delay)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frame flooding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(p) + O(f)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(p·f)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must replicate frame to up to p-1 ports. Each copy costs O(f) bandwidth."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "* m = number of MAC entries in the table"
      }), "\r\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "** f = frame size in bytes"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5310-advantages-and-disadvantages",
      children: "5.3.10 Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic, transparent → no configuration needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Table overflow can cause excessive flooding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Filtering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precise forwarding conserves bandwidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stale entries cause mis-forwarding until aged out"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cut-through"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal latency (< 10 µs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forwards corrupted frames and runt frames"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Store-and-forward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never forwards bad frames"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher latency (entire frame must be received)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fragment-free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compromise: fast + no runts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Still forwards frames with payload errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stackable switches support hundreds of ports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAC table grows linearly with active hosts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VLAN support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical segmentation without extra hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trunk misconfiguration causes connectivity issues"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5311-edge-cases",
      children: "5.3.11 Edge Cases"
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
            children: "MAC table overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Table reaches hardware capacity; new entries evict old ones"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use larger TCAM; implement VLAN-based table partitioning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAC flapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same MAC seen on different ports in rapid succession"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Throttle learning; errdisable port after threshold"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unknown unicast flooding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dst MAC not in table → frame sent to all ports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-populate static entries for critical servers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcast storm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High broadcast rate consumes all switch CPU/bandwidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Storm-control feature; limit broadcast rate per port"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Store-and-forward underrun"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frame arrives slower than egress requires"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backpressure or pause frames (802.3x flow control)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cut-through with speed mismatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ingress 1G, egress 100M → must buffer entire frame"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fall back to store-and-forward automatically"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STP blocking for learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STP blocks port → no MAC learning occurs on that port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port must transition through learning state first"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-switch-forwarding-table",
      children: "TypeScript Implementation: Switch Forwarding Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface MacEntry {\r\n  mac: string;\r\n  port: number;\r\n  timestamp: number;\r\n}\r\n\r\nclass SwitchForwardingTable {\r\n  private table: Map<string, MacEntry> = new Map();\r\n  private readonly agingTimeMs: number;\r\n  private readonly maxEntries: number;\r\n\r\n  constructor(agingTimeMs: number = 300_000, maxEntries: number = 8192) {\r\n    this.agingTimeMs = agingTimeMs;\r\n    this.maxEntries = maxEntries;\r\n  }\r\n\r\n  learn(mac: string, port: number): void {\r\n    const existing = this.table.get(mac);\r\n    if (existing && existing.port === port) {\r\n      existing.timestamp = Date.now(); // refresh\r\n      return;\r\n    }\r\n    if (this.table.size >= this.maxEntries) {\r\n      this.evictOldest();\r\n    }\r\n    this.table.set(mac, { mac, port, timestamp: Date.now() });\r\n    console.log(`Learned: ${mac} → port ${port}`);\r\n  }\r\n\r\n  lookup(mac: string): number | null {\r\n    const entry = this.table.get(mac);\r\n    if (!entry) return null;\r\n    if (Date.now() - entry.timestamp > this.agingTimeMs) {\r\n      this.table.delete(mac);\r\n      return null;\r\n    }\r\n    return entry.port;\r\n  }\r\n\r\n  processFrame(srcMac: string, dstMac: string, ingressPort: number): string {\r\n    this.learn(srcMac, ingressPort);\r\n    const egressPort = this.lookup(dstMac);\r\n    if (egressPort === null) {\r\n      return `FLOOD to all ports except ${ingressPort}`;\r\n    }\r\n    if (egressPort === ingressPort) {\r\n      return `FILTER (destination on same port ${ingressPort})`;\r\n    }\r\n    return `FORWARD to port ${egressPort}`;\r\n  }\r\n\r\n  private evictOldest(): void {\r\n    let oldest: MacEntry | null = null;\r\n    for (const entry of this.table.values()) {\r\n      if (!oldest || entry.timestamp < oldest.timestamp) {\r\n        oldest = entry;\r\n      }\r\n    }\r\n    if (oldest) this.table.delete(oldest.mac);\r\n  }\r\n\r\n  getStats(): { entries: number; agingMs: number } {\r\n    return { entries: this.table.size, agingMs: this.agingTimeMs };\r\n  }\r\n}\r\n\r\n// Demo\r\nconst sw = new SwitchForwardingTable(300_000, 4);\r\nconsole.log(sw.processFrame(\"AA:BB:CC:DD:EE:01\", \"FF:FF:FF:FF:FF:FF\", 1)); // Flood (unknown dst)\r\nconsole.log(sw.processFrame(\"AA:BB:CC:DD:EE:02\", \"AA:BB:CC:DD:EE:01\", 2)); // Learn 02→2, forward 01→1\r\nconsole.log(sw.processFrame(\"AA:BB:CC:DD:EE:02\", \"AA:BB:CC:DD:EE:02\", 2)); // Filter (same port)\r\nconsole.log(sw.processFrame(\"AA:BB:CC:DD:EE:03\", \"AA:BB:CC:DD:EE:01\", 3)); // Learn 03→3, forward 01→1\r\nconsole.log(`Table entries: ${sw.getStats().entries}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "54-learning-bridges-mac-learning",
      children: "5.4 Learning Bridges (MAC Learning)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A learning bridge → the intelligence behind every modern switch → automatically builds a forwarding table by observing traffic. This section expands section 5.3's switch-forwarding logic into a dedicated bridge learning algorithm."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "541-real-world-analogy",
      children: "5.4.1 Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A party guestbook."
        }), " At a party, a security guard at the door writes down each guest's name and which room they entered (source MAC + port). When a guest needs to find another guest, the guard checks the book: if the target is known, the guard directs the messenger to the right room. If the target is unknown, the guard announces the message to every room (flooding). Every 5 minutes, the guard crosses out names of guests who left over 5 minutes ago (aging). This is exactly how a learning bridge works."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "542-the-learning-algorithm-numbered-steps",
      children: "5.4.2 The Learning Algorithm: Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Port initialization"
        }), " → Each bridge port starts with empty MAC table and a default aging timer (300 seconds)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frame arrival"
        }), " → A frame enters on port P with source MAC S and destination MAC D."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source registration"
        }), " → The bridge records or refreshes entry (S, P) in the MAC table. If the table is full, the oldest entry is evicted."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Destination resolution"
        }), " → The bridge looks up D in the MAC table.\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If D is found on port Q (Q ≠ P): forward frame to port Q only."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If D is found on port Q where Q == P: discard frame (destination on same segment)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If D is not found: flood frame to all ports except P."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Aging"
        }), " → Every aging interval, entries older than the threshold are removed. This handles station mobility and stale entries."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Topology change"
        }), " → When STP detects a topology change, aging is temporarily shortened (default 15 seconds instead of 300) to accelerate re-learning after a link failure."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "543-pseudocode-learning-bridge",
      children: "5.4.3 Pseudocode: Learning Bridge"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CONSTANT AGING_TIME = 300        // seconds\r\nCONSTANT MAX_ENTRIES = 8192\r\nCONSTANT TOPO_CHANGE_AGE = 15   // seconds during topology change\r\n\r\nSTRUCTURE BridgeEntry:\r\n    mac: MAC_ADDRESS\r\n    port: PORT_NUMBER\r\n    age: INTEGER                 // seconds since last seen\r\n\r\nGLOBAL bridge_table: ARRAY of BridgeEntry\r\nGLOBAL current_age_time = AGING_TIME\r\n\r\nFUNCTION LearnBridgeProcessFrame(frame, ingress_port):\r\n    // 1. Learn source MAC\r\n    entry = FIND bridge_table WHERE mac == frame.src_mac\r\n    \r\n    IF entry EXISTS:\r\n        entry.port = ingress_port\r\n        entry.age = 0\r\n    ELSE:\r\n        IF LENGTH(bridge_table) >= MAX_ENTRIES:\r\n            evict = FIND entry WITH max(age)\r\n            REMOVE evict FROM bridge_table\r\n        APPEND BridgeEntry(frame.src_mac, ingress_port, 0)\r\n    \r\n    // 2. Handle broadcast\r\n    IF frame.dst_mac IS BROADCAST:\r\n        FOR EACH port in ALL_PORTS WHERE port != ingress_port:\r\n            SEND frame TO port\r\n        RETURN\r\n    \r\n    // 3. Lookup destination\r\n    dest = FIND bridge_table WHERE mac == frame.dst_mac\r\n    \r\n    IF dest EXISTS:\r\n        IF dest.port != ingress_port:\r\n            SEND frame TO dest.port    // forward\r\n        ELSE:\r\n            DROP frame                 // filter\r\n    ELSE:\r\n        FOR EACH port in ALL_PORTS WHERE port != ingress_port:\r\n            SEND frame TO port         // flood\r\n\r\nFUNCTION BridgeAgingTimer():\r\n    EVERY 1 SECOND:\r\n        FOR EACH entry IN bridge_table:\r\n            entry.age = entry.age + 1\r\n            IF entry.age > current_age_time:\r\n                REMOVE entry FROM bridge_table\r\n                LOG \"Aged out \" + entry.mac + \" from port \" + entry.port\r\n\r\nFUNCTION OnTopologyChange():\r\n    current_age_time = TOPO_CHANGE_AGE\r\n    AFTER 30 SECONDS:\r\n        current_age_time = AGING_TIME\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "544-dry-run-trace-table-learning-bridge-with-six-hosts",
      children: "5.4.4 Dry Run Trace Table: Learning Bridge with Six Hosts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Four-port bridge, hosts A–F on ports 1–4 (A and B on port 1 via hub, C and D on port 2, E on port 3, F on port 4)."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frame"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ingress"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Learn"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dst Lookup"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Table After"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(empty)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A→F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A→port 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F: unknown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flood ports 2,3,4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A→1 (age 0)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F→A reply"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F→port 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A: port 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward port 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A→1, F→4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B→C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B→port 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C: unknown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flood ports 2,3,4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A→1, B→1, F→4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C→B reply"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C→port 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B: port 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward port 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A→1, B→1, C→2, F→4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A→E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A→port 1 (refresh)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E: unknown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flood ports 2,3,4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A→1, B→1, C→2, F→4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E→A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E→port 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A: port 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward port 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A→1, B→1, C→2, E→3, F→4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D→E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D→port 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E: port 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward port 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A→1, B→1, C→2, D→2, E→3, F→4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D→B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D→port 2 (refresh)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B: port 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward port 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(same)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B→D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B→port 1 (refresh)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D: port 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward port 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(same)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D→A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D→port 2 (refresh)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A: port 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward port 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(same)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C→C (self)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C→port 2 (refresh)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C: port 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filter (drop)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(same)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After T=7, all six hosts are learned. From T=8 onward, all frames are forwarded precisely → no flooding occurs."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "545-c-implementation-learning-bridge",
      children: "5.4.5 C++ Implementation: Learning Bridge"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <unordered_map>\r\n#include <vector>\r\n#include <string>\r\n#include <sstream>\r\n#include <chrono>\r\n#include <thread>\r\n\r\nstruct BridgeEntry {\r\n    std::string mac;\r\n    int port;\r\n    int age_seconds;\r\n    \r\n    BridgeEntry(const std::string& m, int p) : mac(m), port(p), age_seconds(0) {}\r\n};\r\n\r\nclass LearningBridge {\r\nprivate:\r\n    std::unordered_map<std::string, BridgeEntry> table;\r\n    int num_ports;\r\n    int aging_time;\r\n    int topo_change_aging;\r\n    bool topo_change_active;\r\n    static constexpr size_t MAX_TABLE = 8192;\r\n    \r\n    std::string mac_to_upper(const std::string& mac) {\r\n        std::string result = mac;\r\n        for (auto& c : result) c = toupper(c);\r\n        return result;\r\n    }\r\n    \r\npublic:\r\n    LearningBridge(int ports, int aging = 300)\r\n        : num_ports(ports), aging_time(aging),\r\n          topo_change_aging(15), topo_change_active(false) {}\r\n    \r\n    struct ActionResult {\r\n        std::string action;\r\n        int egress_port;\r\n        bool flood;\r\n    };\r\n    \r\n    ActionResult process_frame(const std::string& src,\r\n                                const std::string& dst,\r\n                                int ingress_port) {\r\n        std::string src_up = mac_to_upper(src);\r\n        std::string dst_up = mac_to_upper(dst);\r\n        \r\n        // Learn source\r\n        auto it = table.find(src_up);\r\n        if (it != table.end()) {\r\n            it->second.port = ingress_port;\r\n            it->second.age_seconds = 0;\r\n        } else {\r\n            if (table.size() >= MAX_TABLE) {\r\n                evict_oldest();\r\n            }\r\n            table.emplace(src_up, BridgeEntry(src_up, ingress_port));\r\n        }\r\n        \r\n        // Broadcast check\r\n        if (dst_up == \"FF:FF:FF:FF:FF:FF\") {\r\n            return {\"FLOOD (broadcast)\", -1, true};\r\n        }\r\n        \r\n        // Lookup destination\r\n        auto dest_it = table.find(dst_up);\r\n        if (dest_it != table.end()) {\r\n            if (dest_it->second.port == ingress_port) {\r\n                return {\"FILTER (same port)\", ingress_port, false};\r\n            }\r\n            return {\"FORWARD\", dest_it->second.port, false};\r\n        }\r\n        return {\"FLOOD (unknown unicast)\", -1, true};\r\n    }\r\n    \r\n    void age_entries() {\r\n        std::vector<std::string> to_remove;\r\n        int current_aging = topo_change_active ? topo_change_aging : aging_time;\r\n        \r\n        for (auto& [mac, entry] : table) {\r\n            entry.age_seconds++;\r\n            if (entry.age_seconds > current_aging) {\r\n                to_remove.push_back(mac);\r\n            }\r\n        }\r\n        \r\n        for (const auto& mac : to_remove) {\r\n            std::cout << \"Aging out \" << mac\r\n                      << \" from port \" << table[mac].port << \"\\n\";\r\n            table.erase(mac);\r\n        }\r\n    }\r\n    \r\n    void evict_oldest() {\r\n        if (table.empty()) return;\r\n        auto oldest = table.begin();\r\n        for (auto it = table.begin(); it != table.end(); ++it) {\r\n            if (it->second.age_seconds > oldest->second.age_seconds) {\r\n                oldest = it;\r\n            }\r\n        }\r\n        std::cout << \"Table full → evicting \" << oldest->first << \"\\n\";\r\n        table.erase(oldest);\r\n    }\r\n    \r\n    void on_topology_change() {\r\n        topo_change_active = true;\r\n        std::cout << \"Topology change detected → aging reduced to \"\r\n                  << topo_change_aging << \"s\\n\";\r\n    }\r\n    \r\n    void restore_aging() {\r\n        topo_change_active = false;\r\n    }\r\n    \r\n    size_t table_size() const { return table.size(); }\r\n    \r\n    void print_table() const {\r\n        std::cout << \"\\nBridge Table (\" << table.size() << \" entries):\\n\";\r\n        std::cout << \"MAC                Port  Age\\n\";\r\n        std::cout << \"--------------------------------\\n\";\r\n        for (const auto& [mac, entry] : table) {\r\n            std::cout << mac << \"  \"\r\n                      << \"Port \" << entry.port << \"   \"\r\n                      << entry.age_seconds << \"s\\n\";\r\n        }\r\n    }\r\n};\r\n\r\nint main() {\r\n    LearningBridge bridge(4);\r\n    \r\n    // Simulate frames\r\n    auto act = [&](const std::string& src, const std::string& dst, int port) {\r\n        auto r = bridge.process_frame(src, dst, port);\r\n        std::cout << \"[\" << src << \" → \" << dst << \" port \" << port\r\n                  << \"] \" << r.action;\r\n        if (!r.flood && r.action == \"FORWARD\")\r\n            std::cout << \" port \" << r.egress_port;\r\n        std::cout << \"\\n\";\r\n    };\r\n    \r\n    act(\"AA:AA:AA:AA:AA:01\", \"AA:AA:AA:AA:AA:02\", 1);\r\n    act(\"AA:AA:AA:AA:AA:02\", \"AA:AA:AA:AA:AA:01\", 2);\r\n    act(\"AA:AA:AA:AA:AA:03\", \"AA:AA:AA:AA:AA:04\", 3);\r\n    act(\"AA:AA:AA:AA:AA:04\", \"AA:AA:AA:AA:AA:01\", 4);\r\n    act(\"AA:AA:AA:AA:AA:01\", \"AA:AA:AA:AA:AA:03\", 1);\r\n    \r\n    bridge.print_table();\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "546-python-implementation-learning-bridge",
      children: "5.4.6 Python Implementation: Learning Bridge"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\r\nfrom typing import Dict, Optional, List, Tuple\r\n\r\nclass BridgeEntry:\r\n    def __init__(self, mac: str, port: int):\r\n        self.mac = mac\r\n        self.port = port\r\n        self.age = 0  # seconds since last seen\r\n\r\nclass LearningBridge:\r\n    def __init__(self, num_ports: int, aging_time: int = 300):\r\n        self.table: Dict[str, BridgeEntry] = {}\r\n        self.num_ports = num_ports\r\n        self.aging_time = aging_time\r\n        self.topo_age = 15\r\n        self.topo_change = False\r\n        self.max_entries = 8192\r\n    \r\n    def process_frame(self, src: str, dst: str, ingress: int) -> Tuple[str, Optional[int]]:\r\n        src = src.upper()\r\n        dst = dst.upper()\r\n        \r\n        # Learn source\r\n        if src in self.table:\r\n            old_port = self.table[src].port\r\n            self.table[src].port = ingress\r\n            self.table[src].age = 0\r\n            if old_port != ingress:\r\n                print(f\"  [MAC move] {src} moved from port {old_port} → {ingress}\")\r\n        else:\r\n            if len(self.table) >= self.max_entries:\r\n                self._evict_oldest()\r\n            self.table[src] = BridgeEntry(src, ingress)\r\n        \r\n        # Handle broadcast\r\n        if dst == \"FF:FF:FF:FF:FF:FF\":\r\n            return (\"FLOOD broadcast\", None)\r\n        \r\n        # Lookup destination\r\n        entry = self.table.get(dst)\r\n        if entry is None:\r\n            return (\"FLOOD unknown unicast\", None)\r\n        if entry.port == ingress:\r\n            return (\"FILTER same port\", ingress)\r\n        return (\"FORWARD\", entry.port)\r\n    \r\n    def age_entries(self) -> int:\r\n        current_age = self.topo_age if self.topo_change else self.aging_time\r\n        to_remove = [\r\n            mac for mac, e in self.table.items()\r\n            if e.age > current_age\r\n        ]\r\n        for mac in to_remove:\r\n            del self.table[mac]\r\n        # Increment ages\r\n        for entry in self.table.values():\r\n            entry.age += 1\r\n        return len(to_remove)\r\n    \r\n    def _evict_oldest(self):\r\n        if not self.table:\r\n            return\r\n        oldest = max(self.table.values(), key=lambda e: e.age)\r\n        print(f\"  [Evict] Table full → removing {oldest.mac}\")\r\n        del self.table[oldest.mac]\r\n    \r\n    def on_topo_change(self):\r\n        self.topo_change = True\r\n        \r\n    def restore_aging(self):\r\n        self.topo_change = False\r\n    \r\n    def __repr__(self) -> str:\r\n        lines = [f\"Bridge Table ({len(self.table)} entries):\"]\r\n        lines.append(f\"{'MAC':<20} {'Port':<8} {'Age':<8}\")\r\n        lines.append(\"-\" * 36)\r\n        for entry in sorted(self.table.values(), key=lambda e: e.port):\r\n            lines.append(f\"{entry.mac:<20} Port {entry.port:<3} {entry.age}s\")\r\n        return \"\\n\".join(lines)\r\n\r\n\r\n# Demonstration\r\nif __name__ == \"__main__\":\r\n    bridge = LearningBridge(4)\r\n    \r\n    print(\"=== Learning Bridge Simulation ===\\n\")\r\n    \r\n    def process(src, dst, port):\r\n        action, egress = bridge.process_frame(src, dst, port)\r\n        extra = f\" → port {egress}\" if egress else \"\"\r\n        print(f\"[{src} → {dst} on P{port}] {action}{extra}\")\r\n    \r\n    # Phase 1: Learning\r\n    print(\"--- Phase 1: Initial Learning ---\")\r\n    process(\"AA:AA:AA:AA:AA:01\", \"AA:AA:AA:AA:AA:02\", 1)\r\n    process(\"AA:AA:AA:AA:AA:02\", \"AA:AA:AA:AA:AA:01\", 2)\r\n    \r\n    # Phase 2: Precise forwarding\r\n    print(\"\\n--- Phase 2: Precise Forwarding ---\")\r\n    process(\"AA:AA:AA:AA:AA:01\", \"AA:AA:AA:AA:AA:02\", 1)\r\n    \r\n    # Phase 3: Unknown destination\r\n    print(\"\\n--- Phase 3: Unknown Destination ---\")\r\n    process(\"AA:AA:AA:AA:AA:01\", \"AA:AA:AA:AA:AA:03\", 1)\r\n    \r\n    # Phase 4: MAC move\r\n    print(\"\\n--- Phase 4: MAC Move ---\")\r\n    process(\"AA:AA:AA:AA:AA:01\", \"AA:AA:AA:AA:AA:02\", 3)  # A moved to port 3\r\n    \r\n    print(bridge)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "547-complexity-analysis",
      children: "5.4.7 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Source learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg hash, O(m) worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per entry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash collision degrades to O(m) chain scan; TCAM O(1) always"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Destination lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg, O(m) worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same hash analysis as learning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Aging sweep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must visit all m entries to check timestamps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAC move (same MAC, new port)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash update → no structural change"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Table eviction (when full)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear scan to find oldest entry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flood to p ports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(p · f)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(p · f)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each of p egress ports gets a frame copy of size f"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "548-advantages-and-disadvantages",
      children: "5.4.8 Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Transparency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stations are unaware of bridges → zero configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No mechanism for stations to detect network changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Self-learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic adaptation to topology changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Table size limited by hardware TCAM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Aging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handles station mobility gracefully"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stale entries cause unnecessary flooding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Aging during topology change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accelerated aging helps rapid re-convergence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increased flooding during transition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAC move detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identifies cable swaps and NIC changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can be triggered by transient loops if STP not enabled"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Static MAC entries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guarantees no flooding for critical servers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual maintenance; misses dynamic moves"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "549-edge-cases",
      children: "5.4.9 Edge Cases"
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
            children: "MAC table overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash/NIC-attack floods table with fake source MACs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port security limits MACs per port; static entries for critical devices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAC flapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same MAC oscillates between ports due to loop or move"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "errdisable after threshold; STP prevents loops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stale entry after move"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host moves to new port; old entry persists for aging period"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accelerated aging; gratuitous ARP triggers re-learn"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unknown unicast flood flood"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large unknown-unicast traffic overwhelms network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static MAC entries; ARP suppression; VLAN pruning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Aging during link flap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port goes down/up rapidly; MACs are lost and re-learned"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PortFast skips STP states for edge ports"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Asymmetric routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic for same MAC arrives on different ports depending on direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some data center designs accept this (MLAG mitigates)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TCAM exhaustion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware ternary CAM fills up; software fallback is slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use multiple TCAM regions; prioritize critical VLANs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "55-spanning-tree-protocol-stp",
      children: "5.5 Spanning Tree Protocol (STP)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Spanning Tree Protocol (IEEE 802.1D) prevents loops in networks with redundant bridges. Without STP, redundant links cause broadcast storms, MAC table instability, and duplicate frame delivery. STP logically blocks selected ports to create a loop-free tree topology rooted at a single bridge."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "551-the-problem-broadcast-storms",
      children: "5.5.1 The Problem: Broadcast Storms"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In a triangle topology of three switches (A–B, B–C, C–A connected), a broadcast frame from any host would circulate forever:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Host X sends broadcast → Switch A floods to B and C."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Switch B receives from A → floods to C (and its other ports)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Switch C receives from A → floods to B (and its other ports)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Switch B receives from C → floods to A."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Switch C receives from B → floods to A."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each frame multiplies endlessly → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "broadcast storm"
        }), " (100% bandwidth, network unusable)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MAC tables become unstable: the same source MAC keeps appearing on different ports as the frame loops."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "552-real-world-analogy",
      children: "5.5.2 Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "City traffic management."
        }), " Redundant bridges are like multiple roads connecting the same two neighborhoods. If every road is open, drivers could circle endlessly in a rotary (broadcast storm). STP is the city traffic authority that temporarily blocks some roads, keeping only enough open to reach every neighborhood without creating loops. If a road closes (link failure), the authority unblocks a previously blocked road (failover). RSTP is the express version → traffic cameras detect the blockage and reroute in seconds instead of minutes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "553-bpdu-format",
      children: "5.5.3 BPDU Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bridge Protocol Data Units (BPDUs) are exchanged every 2 seconds between bridges:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bytes"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always 0x0000 (IEEE 802.1D)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00 (STP), 0x02 (RSTP), 0x03 (MSTP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BPDU Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00 (Config BPDU), 0x80 (TCN BPDU)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TC flag (bit 1), TCA flag (bit 8)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Root Bridge ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority (2) + MAC (6)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Root Path Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cumulative cost to root bridge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bridge ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sender's bridge ID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Port ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sender's port number (priority 1B + number 1B)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Message Age"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time since root sent this BPDU (in 1/256 sec)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max Age"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BPDU lifetime (default 20 sec)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hello Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BPDU interval (default 2 sec)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forward Delay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Listening/Learning state duration (default 15 sec)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "554-stp-algorithm-numbered-steps",
      children: "5.5.4 STP Algorithm: Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Root bridge election."
          }), " Each bridge starts by claiming itself as root, sending BPDUs with its own bridge ID. The bridge with the lowest bridge ID (priority + MAC) wins. Priority is a 16-bit value (default 32768), configurable in increments of 4096. If priorities equal, the lowest MAC address breaks the tie."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Root port selection."
          }), " Every non-root bridge selects one root port (RP) → the port with the lowest path cost to the root bridge. Path cost is the cumulative cost of all links to the root. Standard costs: 10 Mbps = 100, 100 Mbps = 19, 1 Gbps = 4, 10 Gbps = 2, 100 Gbps = 1."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Designated port selection."
          }), " On each LAN segment, one bridge is the designated bridge (DB) → the one with the lowest root path cost. The port connecting the DB to that segment is the designated port (DP). Designated ports are in forwarding state."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Port blocking."
          }), " Any port that is not a root port or designated port becomes an alternate (blocked) port. These ports do not forward data or learn MAC addresses. They listen for BPDUs and become active only if the current best path fails."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "555-stp-port-states-comparison",
      children: "5.5.5 STP Port States Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Forwarding"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MAC Learning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BPDU Reception"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BPDU Transmission"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time in State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blocking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (listens)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indefinite (until topology change)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Listening"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward Delay (15s)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Learning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward Delay (15s)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Forwarding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indefinite (normal operation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disabled"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual/admin down"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RSTP equivalent."
      }), " RSTP collapses blocking + listening into a single ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "discarding"
      }), " state. It also defines three port roles not present in classic STP: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "alternate port"
      }), " (backup to root port), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "backup port"
      }), " (backup to designated port), and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "edge port"
      }), " (directly connected to end station → transitions immediately to forwarding)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "556-pseudocode-stp-port-state-machine",
      children: "5.5.6 Pseudocode: STP Port State Machine"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ENUM PortState { BLOCKING, LISTENING, LEARNING, FORWARDING, DISABLED }\r\nENUM PortRole { ROOT, DESIGNATED, ALTERNATE, BACKUP, DISABLED }\r\n\r\nSTRUCTURE BridgeInfo:\r\n    bridge_id: BRIDGE_ID         // priority (2B) + MAC (6B)\r\n    root_id: BRIDGE_ID           // root bridge ID (self at initialization)\r\n    root_path_cost: INTEGER      // cumulative cost to root\r\n    root_port: PORT_NUMBER       // port closest to root\r\n\r\nSTRUCTURE PortInfo:\r\n    port_id: PORT_NUMBER\r\n    role: PortRole\r\n    state: PortState\r\n    designated_root: BRIDGE_ID\r\n    designated_cost: INTEGER\r\n    designated_bridge: BRIDGE_ID\r\n    designated_port: PORT_NUMBER\r\n\r\nGLOBAL bridge: BridgeInfo\r\nGLOBAL ports: ARRAY of PortInfo\r\n\r\nFUNCTION CompareBridgeIDs(id1, id2) -> BOOLEAN:\r\n    // Returns true if id1 is \"better\" (lower) than id2\r\n    priority1 = id1 >> 48\r\n    priority2 = id2 >> 48\r\n    IF priority1 != priority2:\r\n        RETURN priority1 < priority2\r\n    mac1 = id1 & 0xFFFFFFFFFFFF\r\n    mac2 = id2 & 0xFFFFFFFFFFFF\r\n    RETURN mac1 < mac2\r\n\r\nFUNCTION ReceiveBPDU(bpdu, ingress_port):\r\n    // Step 1: Compare received root with current root\r\n    IF CompareBridgeIDs(bpdu.root_id, bridge.root_id):\r\n        // Adopt superior root\r\n        bridge.root_id = bpdu.root_id\r\n        bridge.root_path_cost = bpdu.root_path_cost + port_path_cost(ingress_port)\r\n        bridge.root_port = ingress_port\r\n        \r\n        // Recompute designated ports on all other ports\r\n        FOR EACH port in ports WHERE port != ingress_port:\r\n            RecomputeDesignated(port)\r\n        \r\n        // Forward updated information\r\n        GenerateBPDU()\r\n    \r\n    // Step 2: Update port's designated information\r\n    port = ports[ingress_port]\r\n    port.designated_root = bpdu.root_id\r\n    port.designated_cost = bpdu.root_path_cost\r\n    port.designated_bridge = bpdu.bridge_id\r\n    port.designated_port = bpdu.port_id\r\n\r\nFUNCTION RecomputeDesignated(port):\r\n    // This port's cost to root: bridge.root_path_cost\r\n    // Compare with what the port hears as designated\r\n    my_cost = bridge.root_path_cost\r\n    \r\n    IF my_cost < port.designated_cost:\r\n        port.role = DESIGNATED\r\n        port.state = FORWARDING\r\n    ELSE IF my_cost == port.designated_cost:\r\n        IF bridge.bridge_id < port.designated_bridge:\r\n            port.role = DESIGNATED\r\n            port.state = FORWARDING\r\n        ELSE IF bridge.bridge_id == port.designated_bridge\r\n                AND port.port_id < port.designated_port:\r\n            port.role = DESIGNATED\r\n            port.state = FORWARDING\r\n        ELSE:\r\n            port.role = ALTERNATE\r\n            port.state = BLOCKING\r\n    ELSE:\r\n        port.role = ALTERNATE\r\n        port.state = BLOCKING\r\n\r\nFUNCTION PortStateMachine(port):\r\n    SWITCH port.state:\r\n        CASE BLOCKING:\r\n            IF port.role == ROOT OR port.role == DESIGNATED:\r\n                TransitionToListening(port)\r\n        \r\n        CASE LISTENING:\r\n            // Wait forward delay, then learn\r\n            WAIT(bridge.forward_delay)\r\n            TransitionToLearning(port)\r\n        \r\n        CASE LEARNING:\r\n            // Wait forward delay, then forward\r\n            WAIT(bridge.forward_delay)\r\n            IF port.role == ROOT OR port.role == DESIGNATED:\r\n                port.state = FORWARDING\r\n                LOG \"Port \" + port.port_id + \" is now FORWARDING\"\r\n        \r\n        CASE FORWARDING:\r\n            // Normal operation → monitor BPDUs\r\n            IF RECEIVE_SUPERIOR_BPDU(port):\r\n                port.role = ALTERNATE\r\n                TransitionToBlocking(port)\r\n        \r\n        CASE DISABLED:\r\n            // Admin down → do nothing\r\n            BREAK\r\n\r\nFUNCTION TransitionToBlocking(port):\r\n    port.state = BLOCKING\r\n    port.mac_learning_enabled = FALSE\r\n    STOP_MAC_Learning(port)\r\n    STOP_Forwarding(port)\r\n\r\nFUNCTION TransitionToListening(port):\r\n    port.state = LISTENING\r\n    START_BPDU_Listening(port)\r\n\r\nFUNCTION TransitionToLearning(port):\r\n    port.state = LEARNING\r\n    START_MAC_Learning(port)\r\n\r\nFUNCTION TransitionToForwarding(port):\r\n    port.state = FORWARDING\r\n    START_Forwarding(port)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "557-dry-run-trace-table-stp-convergence",
      children: "5.5.7 Dry Run Trace Table: STP Convergence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Three bridges in a triangle. B1 (priority 4096, MAC 00:00:00:00:00:01), B2 (priority 32768, MAC 00:00:00:00:00:02), B3 (priority 32768, MAC 00:00:00:00:00:03). All links are 1 Gbps (cost = 4)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial state (all bridges claim root):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Bridge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Claims Root"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Priority"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MAC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Root Path Cost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "00:00:00:00:00:01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32768"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "00:00:00:00:00:02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32768"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "00:00:00:00:00:03"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After first BPDU exchange:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B1's Root"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B2's Root"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B3's Root"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B1→B2 BPDU (root=B1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B1 (cost 0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B1 (cost 4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B3 (cost 0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B2 adopts B1 as root"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B1→B3 BPDU (root=B1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B1 (cost 0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B1 (cost 4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B1 (cost 4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B3 adopts B1 as root"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B2→B3 BPDU (root=B1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B1 (cost 0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B1 (cost 4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B1 (cost 4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B3: B2 gives cost 8 to root → keep B1 direct path (cost 4)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Port role assignment:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Bridge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Port"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Connects To"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DESIGNATED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FORWARDING"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DESIGNATED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FORWARDING"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ROOT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FORWARDING"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DESIGNATED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FORWARDING"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ROOT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FORWARDING"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALTERNATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BLOCKING"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "B3's port to B2 is blocked because B3 reaches B1 at cost 4 (direct), and B2's path (cost 8) is inferior. B2's port to B3 is DESIGNATED because B2 is closer to B1 (cost 4) than B3 would be through B2 (cost 8)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Convergence timeline:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B3"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T+0s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All forwarding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All blocking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All blocking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T+2s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P1 listening (RP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P1 listening (RP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T+17s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P1 learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P1 learning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T+32s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P1 forwarding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P1 forwarding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T+34s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P2 listening (DP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P2 stays blocking (Alternate)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T+49s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P2 learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T+64s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P2 forwarding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Total STP convergence: ~50 seconds. RSTP would converge in ~2 seconds."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After link failure (B1→B2 link breaks):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B2 Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B3 Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T+0s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B1→B2 link down"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B2 loses root port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B3 hears no BPDU from B2 on P2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T+2s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max age timer expires on B2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B2 transitions P1 to blocking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T+4s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B2 sends TCN BPDU to B3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCN propagated to B1 via B3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T+6s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B3 acknowledges TCN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCA sent to B2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T+8s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B3 unblocks P2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B2 receives BPDU from B3 (root B1, cost 8)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B3 transitions P2 to listening → learning → forwarding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T+38s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B2 new root port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B2 selects P2 (to B3) as new root port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B3 P2 forwarding"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Total reconvergence after failure: ~38 seconds."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "558-c-implementation-stp-port-state-machine",
      children: "5.5.8 C++ Implementation: STP Port State Machine"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <vector>\r\n#include <string>\r\n#include <sstream>\r\n#include <chrono>\r\n#include <thread>\r\n#include <cstdint>\r\n#include <algorithm>\r\n#include <random>\r\n\r\nenum class PortState { BLOCKING, LISTENING, LEARNING, FORWARDING, DISABLED };\r\nenum class PortRole { ROOT, DESIGNATED, ALTERNATE, BACKUP, DISABLED };\r\n\r\nconst char* state_name(PortState s) {\r\n    switch (s) {\r\n        case PortState::BLOCKING:   return \"BLOCKING\";\r\n        case PortState::LISTENING:  return \"LISTENING\";\r\n        case PortState::LEARNING:   return \"LEARNING\";\r\n        case PortState::FORWARDING: return \"FORWARDING\";\r\n        case PortState::DISABLED:   return \"DISABLED\";\r\n    }\r\n    return \"UNKNOWN\";\r\n}\r\n\r\nconst char* role_name(PortRole r) {\r\n    switch (r) {\r\n        case PortRole::ROOT:        return \"ROOT\";\r\n        case PortRole::DESIGNATED:  return \"DESIGNATED\";\r\n        case PortRole::ALTERNATE:   return \"ALTERNATE\";\r\n        case PortRole::BACKUP:      return \"BACKUP\";\r\n        case PortRole::DISABLED:    return \"DISABLED\";\r\n    }\r\n    return \"UNKNOWN\";\r\n}\r\n\r\nstruct BridgeID {\r\n    uint16_t priority;\r\n    uint64_t mac;  // 48-bit MAC, stored in lower 48 bits\r\n    \r\n    bool operator<(const BridgeID& other) const {\r\n        if (priority != other.priority) return priority < other.priority;\r\n        return mac < other.mac;\r\n    }\r\n    \r\n    bool operator==(const BridgeID& other) const {\r\n        return priority == other.priority && mac == other.mac;\r\n    }\r\n    \r\n    std::string to_string() const {\r\n        std::ostringstream oss;\r\n        oss << priority << \".\";\r\n        for (int i = 5; i >= 0; --i) {\r\n            if (i < 5) oss << \":\";\r\n            oss << std::hex << ((mac >> (i * 8)) & 0xFF);\r\n        }\r\n        return oss.str();\r\n    }\r\n};\r\n\r\nstruct BPDU {\r\n    BridgeID root_id;\r\n    uint32_t root_path_cost;\r\n    BridgeID bridge_id;\r\n    uint16_t port_id;\r\n    uint16_t message_age;\r\n    uint16_t max_age;\r\n    uint16_t hello_time;\r\n    uint16_t forward_delay;\r\n};\r\n\r\nstruct Port {\r\n    int id;\r\n    PortRole role;\r\n    PortState state;\r\n    uint32_t path_cost;\r\n    BridgeID designated_root;\r\n    uint32_t designated_cost;\r\n    BridgeID designated_bridge;\r\n    uint16_t designated_port;\r\n    int state_timer;  // seconds remaining in current state\r\n    \r\n    Port(int pid, uint32_t cost)\r\n        : id(pid), role(PortRole::ALTERNATE), state(PortState::BLOCKING),\r\n          path_cost(cost), designated_cost(0), designated_port(0), state_timer(0) {}\r\n};\r\n\r\nclass STPBridge {\r\nprivate:\r\n    BridgeID bridge_id;\r\n    BridgeID root_id;\r\n    uint32_t root_path_cost;\r\n    int root_port_id;\r\n    std::vector<Port> ports;\r\n    bool is_root;\r\n    int hello_timer;\r\n    \r\n    static constexpr int DEFAULT_PRIORITY = 32768;\r\n    static constexpr int HELLO_TIME = 2;       // seconds\r\n    static constexpr int FORWARD_DELAY = 15;   // seconds\r\n    static constexpr int MAX_AGE = 20;         // seconds\r\n    \r\n    static uint32_t speed_to_cost(int speed_mbps) {\r\n        // IEEE standard path costs\r\n        if (speed_mbps >= 100000) return 1;\r\n        if (speed_mbps >= 10000)  return 2;\r\n        if (speed_mbps >= 1000)   return 4;\r\n        if (speed_mbps >= 100)    return 19;\r\n        return 100;  // 10 Mbps\r\n    }\r\n    \r\npublic:\r\n    STPBridge(uint64_t mac, uint16_t priority = DEFAULT_PRIORITY)\r\n        : bridge_id{priority, mac}, root_id{priority, mac},\r\n          root_path_cost(0), root_port_id(-1), is_root(true), hello_timer(0) {}\r\n    \r\n    void add_port(int port_id, int speed_mbps) {\r\n        ports.emplace_back(port_id, speed_to_cost(speed_mbps));\r\n    }\r\n    \r\n    void receive_bpdu(const BPDU& bpdu, int ingress_port_id) {\r\n        std::cout << \"[\" << bridge_id.to_string() << \"] BPDU received on P\"\r\n                  << ingress_port_id << \": root=\" << bpdu.root_id.to_string()\r\n                  << \", cost=\" << bpdu.root_path_cost << \"\\n\";\r\n        \r\n        bool superior = bpdu.root_id < root_id ||\r\n            (bpdu.root_id == root_id &&\r\n             bpdu.root_path_cost + port_cost(ingress_port_id) < root_path_cost);\r\n        \r\n        if (superior) {\r\n            // Adopt superior root information\r\n            root_id = bpdu.root_id;\r\n            root_path_cost = bpdu.root_path_cost + port_cost(ingress_port_id);\r\n            root_port_id = ingress_port_id;\r\n            is_root = false;\r\n            \r\n            // Recompute port roles\r\n            compute_port_roles();\r\n            \r\n            // Generate new BPDUs\r\n            for (auto& port : ports) {\r\n                if (port.state != PortState::DISABLED) {\r\n                    send_bpdu(port);\r\n                }\r\n            }\r\n        }\r\n    }\r\n    \r\n    void compute_port_roles() {\r\n        if (is_root) {\r\n            // Root bridge → all ports are DESIGNATED\r\n            for (auto& port : ports) {\r\n                port.role = PortRole::DESIGNATED;\r\n                port.state = PortState::FORWARDING;\r\n                port.designated_root = root_id;\r\n                port.designated_cost = 0;\r\n                port.designated_bridge = bridge_id;\r\n                port.designated_port = port.id;\r\n            }\r\n            return;\r\n        }\r\n        \r\n        // Non-root: one ROOT port, others DESIGNATED or ALTERNATE\r\n        for (auto& port : ports) {\r\n            if (port.id == root_port_id) {\r\n                port.role = PortRole::ROOT;\r\n                port.state = PortState::FORWARDING;\r\n            } else {\r\n                // Compare our cost to root vs what we hear on this port\r\n                uint32_t my_cost = root_path_cost;\r\n                if (my_cost < port.designated_cost) {\r\n                    port.role = PortRole::DESIGNATED;\r\n                    port.state = PortState::FORWARDING;\r\n                } else {\r\n                    port.role = PortRole::ALTERNATE;\r\n                    port.state = PortState::BLOCKING;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    \r\n    void send_bpdu(Port& port) {\r\n        if (port.state == PortState::DISABLED || port.state == PortState::BLOCKING)\r\n            return;\r\n        \r\n        BPDU bpdu;\r\n        bpdu.root_id = root_id;\r\n        bpdu.root_path_cost = root_path_cost;\r\n        bpdu.bridge_id = bridge_id;\r\n        bpdu.port_id = port.id;\r\n        bpdu.message_age = 0;\r\n        bpdu.max_age = MAX_AGE;\r\n        bpdu.hello_time = HELLO_TIME;\r\n        bpdu.forward_delay = FORWARD_DELAY;\r\n        \r\n        std::cout << \"  → BPDU sent on P\" << port.id\r\n                  << \" (root=\" << root_id.to_string()\r\n                  << \", cost=\" << root_path_cost << \")\\n\";\r\n    }\r\n    \r\n    void tick(int seconds = 1) {\r\n        // Simulate time passing for state transitions\r\n        for (auto& port : ports) {\r\n            if (port.state == PortState::LISTENING ||\r\n                port.state == PortState::LEARNING) {\r\n                port.state_timer -= seconds;\r\n                if (port.state_timer <= 0) {\r\n                    advance_state(port);\r\n                }\r\n            }\r\n        }\r\n        \r\n        // Hello timer for root bridge\r\n        if (is_root) {\r\n            hello_timer += seconds;\r\n            if (hello_timer >= HELLO_TIME) {\r\n                hello_timer = 0;\r\n                for (auto& port : ports) {\r\n                    if (port.state == PortState::FORWARDING ||\r\n                        port.state == PortState::LISTENING ||\r\n                        port.state == PortState::LEARNING) {\r\n                        send_bpdu(port);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n    \r\n    void advance_state(Port& port) {\r\n        switch (port.state) {\r\n            case PortState::BLOCKING:\r\n                if (port.role == PortRole::ROOT || port.role == PortRole::DESIGNATED) {\r\n                    port.state = PortState::LISTENING;\r\n                    port.state_timer = FORWARD_DELAY;\r\n                    std::cout << \"  P\" << port.id << \" → LISTENING (\" \r\n                              << FORWARD_DELAY << \"s timer)\\n\";\r\n                }\r\n                break;\r\n            case PortState::LISTENING:\r\n                port.state = PortState::LEARNING;\r\n                port.state_timer = FORWARD_DELAY;\r\n                std::cout << \"  P\" << port.id << \" → LEARNING (\"\r\n                          << FORWARD_DELAY << \"s timer)\\n\";\r\n                break;\r\n            case PortState::LEARNING:\r\n                port.state = PortState::FORWARDING;\r\n                std::cout << \"  P\" << port.id << \" → FORWARDING (active)\\n\";\r\n                break;\r\n            default:\r\n                break;\r\n        }\r\n    }\r\n    \r\n    uint32_t port_cost(int port_id) const {\r\n        for (const auto& p : ports) {\r\n            if (p.id == port_id) return p.path_cost;\r\n        }\r\n        return 0;\r\n    }\r\n    \r\n    void start() {\r\n        if (is_root) {\r\n            // Root bridge immediately transitions all ports to forwarding\r\n            for (auto& port : ports) {\r\n                port.role = PortRole::DESIGNATED;\r\n                port.state = PortState::FORWARDING;\r\n            }\r\n            std::cout << \"Bridge \" << bridge_id.to_string() \r\n                      << \" is ROOT → all ports forwarding\\n\";\r\n        } else {\r\n            // Non-root starts with all ports blocking\r\n            for (auto& port : ports) {\r\n                port.state = PortState::BLOCKING;\r\n            }\r\n            // Root port transitions: blocking → listening\r\n            for (auto& port : ports) {\r\n                if (port.role == PortRole::ROOT) {\r\n                    advance_state(port);  // → listening\r\n                }\r\n            }\r\n        }\r\n    }\r\n    \r\n    void print_status() const {\r\n        std::cout << \"\\n=== Bridge \" << bridge_id.to_string() << \" ===\\n\";\r\n        if (is_root) {\r\n            std::cout << \"Role: ROOT BRIDGE\\n\";\r\n        } else {\r\n            std::cout << \"Root: \" << root_id.to_string()\r\n                      << \" (cost \" << root_path_cost << \")\\n\";\r\n            std::cout << \"Root port: P\" << root_port_id << \"\\n\";\r\n        }\r\n        std::cout << \"Ports:\\n\";\r\n        for (const auto& p : ports) {\r\n            std::cout << \"  P\" << p.id << \": \" << role_name(p.role)\r\n                      << \", \" << state_name(p.state)\r\n                      << \" (cost \" << p.path_cost << \")\\n\";\r\n        }\r\n    }\r\n};\r\n\r\nint main() {\r\n    // Create three bridges in a triangle\r\n    STPBridge b1(0x000000000001, 4096);\r\n    STPBridge b2(0x000000000002, 32768);\r\n    STPBridge b3(0x000000000003, 32768);\r\n    \r\n    // Add ports (all 1 Gbps)\r\n    b1.add_port(1, 1000);  // to B2\r\n    b1.add_port(2, 1000);  // to B3\r\n    \r\n    b2.add_port(1, 1000);  // to B1\r\n    b2.add_port(2, 1000);  // to B3\r\n    \r\n    b3.add_port(1, 1000);  // to B1\r\n    b3.add_port(2, 1000);  // to B2\r\n    \r\n    std::cout << \"=== STP Convergence: Triangle Topology ===\\n\\n\";\r\n    \r\n    // Phase 1: All bridges start, B1 becomes root\r\n    b1.start();\r\n    b2.start();\r\n    b3.start();\r\n    \r\n    // Simulate BPDU exchange: B1's superior BPDUs reach B2 and B3\r\n    BPDU bpdu_b1;\r\n    bpdu_b1.root_id = {4096, 0x000000000001};\r\n    bpdu_b1.root_path_cost = 0;\r\n    bpdu_b1.bridge_id = {4096, 0x000000000001};\r\n    bpdu_b1.port_id = 1;\r\n    \r\n    BPDU bpdu_b2_to_b3;\r\n    bpdu_b2_to_b3.root_id = {4096, 0x000000000001};\r\n    bpdu_b2_to_b3.root_path_cost = 4;  // B2's cost to B1\r\n    bpdu_b2_to_b3.bridge_id = {32768, 0x000000000002};\r\n    bpdu_b2_to_b3.port_id = 2;\r\n    \r\n    std::cout << \"\\n--- Phase 2: BPDU Exchange ---\\n\";\r\n    b2.receive_bpdu(bpdu_b1, 1);  // B2 hears B1 on port 1\r\n    b3.receive_bpdu(bpdu_b1, 1);  // B3 hears B1 on port 1\r\n    \r\n    // B3 also hears B2's BPDU on port 2 → should remain alternate\r\n    b3.receive_bpdu(bpdu_b2_to_b3, 2);\r\n    \r\n    b2.compute_port_roles();\r\n    b3.compute_port_roles();\r\n    \r\n    b2.print_status();\r\n    b3.print_status();\r\n    \r\n    std::cout << \"\\n--- Phase 3: Port State Transitions ---\\n\";\r\n    // Simulate time passing (state timers)\r\n    for (int t = 1; t <= 35; ++t) {\r\n        b1.tick();\r\n        b2.tick();\r\n        b3.tick();\r\n        if (t == 15 || t == 30 || t == 35) {\r\n            std::cout << \"\\nT+\" << t << \"s:\\n\";\r\n            b2.print_status();\r\n            b3.print_status();\r\n        }\r\n    }\r\n    \r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "559-python-implementation-stp-port-state-machine",
      children: "5.5.9 Python Implementation: STP Port State Machine"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from enum import Enum\r\nfrom dataclasses import dataclass\r\nfrom typing import List, Optional, Dict, Tuple\r\nimport time\r\n\r\nclass PortState(Enum):\r\n    BLOCKING = 0\r\n    LISTENING = 1\r\n    LEARNING = 2\r\n    FORWARDING = 3\r\n    DISABLED = 4\r\n\r\nclass PortRole(Enum):\r\n    ROOT = 0\r\n    DESIGNATED = 1\r\n    ALTERNATE = 2\r\n    BACKUP = 3\r\n    DISABLED = 4\r\n\r\n@dataclass\r\nclass BridgeID:\r\n    priority: int\r\n    mac: int\r\n    \r\n    def __lt__(self, other):\r\n        if self.priority != other.priority:\r\n            return self.priority < other.priority\r\n        return self.mac < other.mac\r\n    \r\n    def __eq__(self, other):\r\n        return self.priority == other.priority and self.mac == other.mac\r\n    \r\n    def __str__(self):\r\n        mac_str = \":\".join(f\"{(self.mac >> (5 - i) * 8) & 0xFF:02x}\" for i in range(6))\r\n        return f\"{self.priority}.{mac_str}\"\r\n\r\n@dataclass\r\nclass BPDU:\r\n    root_id: BridgeID\r\n    root_path_cost: int\r\n    bridge_id: BridgeID\r\n    port_id: int\r\n    message_age: int = 0\r\n    max_age: int = 20\r\n    hello_time: int = 2\r\n    forward_delay: int = 15\r\n\r\nclass STPPort:\r\n    def __init__(self, port_id: int, speed_mbps: int):\r\n        self.id = port_id\r\n        self.role = PortRole.ALTERNATE\r\n        self.state = PortState.BLOCKING\r\n        self.path_cost = self._speed_to_cost(speed_mbps)\r\n        self.state_timer = 0\r\n        self.designated_root = None\r\n        self.designated_cost = 0\r\n        self.designated_bridge = None\r\n        self.designated_port = 0\r\n    \r\n    @staticmethod\r\n    def _speed_to_cost(speed_mbps: int) -> int:\r\n        if speed_mbps >= 100000: return 1\r\n        if speed_mbps >= 10000: return 2\r\n        if speed_mbps >= 1000: return 4\r\n        if speed_mbps >= 100: return 19\r\n        return 100\r\n\r\nclass STPBridge:\r\n    HELLO_TIME = 2\r\n    FORWARD_DELAY = 15\r\n    MAX_AGE = 20\r\n    \r\n    def __init__(self, mac: int, priority: int = 32768):\r\n        self.bridge_id = BridgeID(priority, mac)\r\n        self.root_id = BridgeID(priority, mac)\r\n        self.root_path_cost = 0\r\n        self.root_port_id = -1\r\n        self.ports: List[STPPort] = []\r\n        self.is_root = True\r\n        self.hello_timer = 0\r\n    \r\n    def add_port(self, port_id: int, speed_mbps: int):\r\n        self.ports.append(STPPort(port_id, speed_mbps))\r\n    \r\n    def receive_bpdu(self, bpdu: BPDU, ingress_port: int):\r\n        # Determine if this BPDU has superior root info\r\n        port_cost = self._port_cost(ingress_port)\r\n        superior = (bpdu.root_id < self.root_id) or (\r\n            bpdu.root_id == self.root_id and\r\n            bpdu.root_path_cost + port_cost < self.root_path_cost\r\n        )\r\n        \r\n        if superior:\r\n            self.root_id = bpdu.root_id\r\n            self.root_path_cost = bpdu.root_path_cost + port_cost\r\n            self.root_port_id = ingress_port\r\n            self.is_root = False\r\n            self._compute_port_roles()\r\n    \r\n    def _compute_port_roles(self):\r\n        if self.is_root:\r\n            for port in self.ports:\r\n                port.role = PortRole.DESIGNATED\r\n                port.state = PortState.FORWARDING\r\n                port.designated_root = self.bridge_id\r\n                port.designated_cost = 0\r\n                port.designated_bridge = self.bridge_id\r\n                port.designated_port = port.id\r\n            return\r\n        \r\n        for port in self.ports:\r\n            if port.id == self.root_port_id:\r\n                port.role = PortRole.ROOT\r\n                port.state = PortState.FORWARDING\r\n            elif self.root_path_cost < port.designated_cost:\r\n                port.role = PortRole.DESIGNATED\r\n                port.state = PortState.FORWARDING\r\n            else:\r\n                port.role = PortRole.ALTERNATE\r\n                port.state = PortState.BLOCKING\r\n    \r\n    def _port_cost(self, port_id: int) -> int:\r\n        for p in self.ports:\r\n            if p.id == port_id:\r\n                return p.path_cost\r\n        return 0\r\n    \r\n    def start(self):\r\n        if self.is_root:\r\n            for port in self.ports:\r\n                port.role = PortRole.DESIGNATED\r\n                port.state = PortState.FORWARDING\r\n            print(f\"Bridge {self.bridge_id} is ROOT → all ports forwarding\")\r\n        else:\r\n            for port in self.ports:\r\n                port.state = PortState.BLOCKING\r\n            for port in self.ports:\r\n                if port.role == PortRole.ROOT:\r\n                    self._advance_state(port)\r\n    \r\n    def _advance_state(self, port: STPPort):\r\n        if port.state == PortState.BLOCKING and port.role in (PortRole.ROOT, PortRole.DESIGNATED):\r\n            port.state = PortState.LISTENING\r\n            port.state_timer = self.FORWARD_DELAY\r\n            print(f\"  P{port.id} → LISTENING ({self.FORWARD_DELAY}s)\")\r\n        elif port.state == PortState.LISTENING:\r\n            port.state = PortState.LEARNING\r\n            port.state_timer = self.FORWARD_DELAY\r\n            print(f\"  P{port.id} → LEARNING ({self.FORWARD_DELAY}s)\")\r\n        elif port.state == PortState.LEARNING:\r\n            port.state = PortState.FORWARDING\r\n            print(f\"  P{port.id} → FORWARDING\")\r\n    \r\n    def tick(self, seconds: int = 1):\r\n        for port in self.ports:\r\n            if port.state in (PortState.LISTENING, PortState.LEARNING):\r\n                port.state_timer -= seconds\r\n                if port.state_timer <= 0:\r\n                    self._advance_state(port)\r\n    \r\n    def status(self) -> str:\r\n        lines = [f\"\\n=== Bridge {self.bridge_id} ===\"]\r\n        if self.is_root:\r\n            lines.append(\"Role: ROOT BRIDGE\")\r\n        else:\r\n            lines.append(f\"Root: {self.root_id} (cost {self.root_path_cost})\")\r\n            lines.append(f\"Root port: P{self.root_port_id}\")\r\n        lines.append(\"Ports:\")\r\n        for p in self.ports:\r\n            lines.append(f\"  P{p.id}: {p.role.name:<12} {p.state.name:<12} (cost {p.path_cost})\")\r\n        return \"\\n\".join(lines)\r\n\r\n\r\n# Demonstration\r\nif __name__ == \"__main__\":\r\n    # Triangle: B1(4096) - B2(32768) - B3(32768)\r\n    b1 = STPBridge(0x00000001, 4096)\r\n    b2 = STPBridge(0x00000002)\r\n    b3 = STPBridge(0x00000003)\r\n    \r\n    for b in (b1, b2, b3):\r\n        b.add_port(1, 1000)\r\n        b.add_port(2, 1000)\r\n    \r\n    print(\"=== STP Convergence: Triangle Topology ===\\n\")\r\n    \r\n    b1.start()\r\n    b2.start()\r\n    b3.start()\r\n    \r\n    # BPDU exchange: B1 becomes root\r\n    bpdu_b1 = BPDU(BridgeID(4096, 0x00000001), 0, BridgeID(4096, 0x00000001), 1)\r\n    bpdu_b2 = BPDU(BridgeID(4096, 0x00000001), 4, BridgeID(32768, 0x00000002), 2)\r\n    \r\n    b2.receive_bpdu(bpdu_b1, 1)\r\n    b3.receive_bpdu(bpdu_b1, 1)\r\n    b3.receive_bpdu(bpdu_b2, 2)\r\n    \r\n    b2._compute_port_roles()\r\n    b3._compute_port_roles()\r\n    \r\n    print(b2.status)\r\n    print(b3.status)\r\n    \r\n    # Simulate convergence\r\n    print(\"\\n--- Port State Transitions ---\")\r\n    for t in range(1, 36):\r\n        b1.tick(); b2.tick(); b3.tick()\r\n        if t in (15, 30, 35):\r\n            print(f\"\\nT+{t}s:\")\r\n            print(b2.status)\r\n            print(b3.status)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5510-complexity-analysis",
      children: "5.5.10 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Root bridge election"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every bridge sends BPDUs; worst case b bridges exchange b BPDUs each"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Root port selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(p)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan p ports to find minimum cost path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Designated port selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(p) per LAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare path costs on each segment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Port role computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(p)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single pass over all ports after root/designated decisions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BPDU processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-size BPDU fields; constant comparison operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State transition (block → fwd)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d = forward delay (15s); timer-based, not compute-bound"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Topology change notification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCN propagates from leaf to root through b bridges"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5511-advantages-and-disadvantages",
      children: "5.5.11 Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Loop prevention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guarantees a single active path between any two hosts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All other paths are wasted bandwidth until failover"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic failover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redundant links activate when primary fails"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-50s convergence is too slow for modern apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standardized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IEEE 802.1D works across all vendors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple incompatible variants (CST, PVST, PVST+, MST)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Self-configuring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires no manual path planning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-optimal path selection; best path ≠ shortest latency path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Per-VLAN (PVST+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load balances traffic across VLANs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cisco proprietary; management overhead with many VLANs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-3s convergence (20x faster)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires RSTP-capable bridges on all switches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MSTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maps multiple VLANs to fewer STP instances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex configuration; requires region alignment"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5512-edge-cases",
      children: "5.5.12 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "BPDU filter/guard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port configured to ignore/suppress BPDUs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use BPDUGuard on edge ports to prevent rogue switch connections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unidirectional link failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Link stays up but one direction fails (fiber issue)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDLD (UniDirectional Link Detection) detects and errdisables port"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Root bridge failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root bridge goes offline; no BPDUs for max age"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max age timer (20s) expires → new election begins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Topology change storm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rapid up/down flapping causes constant re-convergence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PortFast + BPDUGuard on all edge ports"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inconsistent port states"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Misconfiguration leads to forwarding loops despite STP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LoopGuard detects and errdisables inconsistent ports"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STP with several thousand VLANs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each VLAN's STP instance consumes CPU/memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MSTP maps VLANs to a few instances (typically 16-64)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Non-STP device in path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Old hub or switch without STP creates undetected loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BPDUGuard; root guard on root ports"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forward delay during convergence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30s delay (listening + learning) causes TCP timeouts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSTP reduces to 1-3s; PortFast on edge ports"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5513-rstp-vs-stp-comparison",
      children: "5.5.13 RSTP vs STP Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "STP (802.1D)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RSTP (802.1w)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Convergence time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-50 seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-3 seconds (typically < 2s)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Port states"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 (blocking, listening, learning, forwarding, disabled)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 (discarding, learning, forwarding)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Port roles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 (root, designated, alternate/blocked)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 (root, designated, alternate, backup, edge)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Topology change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCN BPDU → root BPDU → all bridges (slow)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Propagated immediately via BPDU flags"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BPDU format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Config BPDU + TCN BPDU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same format but all 6 flag bits used"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BPDU aging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max Age timer (20s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 consecutive missed BPDUs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge ports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No native concept"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge ports transition immediately to forwarding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Uplink fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (manual tuning)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (alternate port immediately becomes root)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backbone fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (manual tuning)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (proposal-agreement handshake)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interoperability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "With all STP devices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Falls back to STP on legacy bridges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IEEE 802.1D-2004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IEEE 802.1w (merged into 802.1D-2004)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-stp-root-bridge-election",
      children: "TypeScript Implementation: STP Root Bridge Election"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface BridgeConfig {\r\n  id: number;\r\n  priority: number;\r\n  mac: string;\r\n}\r\n\r\ninterface BPDU {\r\n  rootId: number;\r\n  rootPathCost: number;\r\n  bridgeId: number;\r\n  portId: number;\r\n}\r\n\r\nclass STPSimulator {\r\n  private bridges: Map<number, { config: BridgeConfig; rootId: number; rootCost: number }> = new Map();\r\n\r\n  addBridge(id: number, priority: number, mac: string): void {\r\n    this.bridges.set(id, {\r\n      config: { id, priority, mac },\r\n      rootId: id,    // initially each bridge thinks it's root\r\n      rootCost: 0,\r\n    });\r\n  }\r\n\r\n  connect(linkCost: number, ...bridgeIds: number[]): void {\r\n    for (const id of bridgeIds) {\r\n      const bridge = this.bridges.get(id)!;\r\n      const candidateRoot = Math.min(...bridgeIds.map(b => this.bridges.get(b)!.rootId));\r\n      const costToRoot = this.computeCostToBridge(id, candidateRoot, linkCost);\r\n      \r\n      if (candidateRoot < bridge.rootId ||\r\n          (candidateRoot === bridge.rootId && costToRoot < bridge.rootCost)) {\r\n        bridge.rootId = candidateRoot;\r\n        bridge.rootCost = costToRoot;\r\n      }\r\n    }\r\n  }\r\n\r\n  private computeCostToBridge(from: number, to: number, linkCost: number): number {\r\n    // Simplified: direct path cost\r\n    return linkCost;\r\n  }\r\n\r\n  electRoot(): number {\r\n    let rootId = Infinity;\r\n    for (const [id, bridge] of this.bridges) {\r\n      if (id < rootId) rootId = id;\r\n    }\r\n    // Update all bridges with true root\r\n    for (const [id, bridge] of this.bridges) {\r\n      bridge.rootId = rootId;\r\n    }\r\n    return rootId;\r\n  }\r\n\r\n  runElection(): void {\r\n    const root = this.electRoot();\r\n    console.log(`Root bridge elected: ${root}`);\r\n    for (const [id, bridge] of this.bridges) {\r\n      console.log(`  Bridge ${id} (prio ${bridge.config.priority}): root=${bridge.rootId}, cost=${bridge.rootCost}`);\r\n    }\r\n  }\r\n\r\n  simulateFailure(failedBridgeId: number): void {\r\n    console.log(`\\nBridge ${failedBridgeId} fails — re-electing...`);\r\n    this.bridges.delete(failedBridgeId);\r\n    this.electRoot();\r\n    this.runElection();\r\n  }\r\n}\r\n\r\n// Demo: triangle topology\r\nconst net = new STPSimulator();\r\nnet.addBridge(1, 32768, \"00:11:22:33:44:01\");\r\nnet.addBridge(2, 32768, \"00:11:22:33:44:02\");\r\nnet.addBridge(3, 4096, \"00:11:22:33:44:03\"); // lower priority → should be root\r\n\r\nnet.connect(4, 1, 2);\r\nnet.connect(4, 2, 3);\r\nnet.connect(19, 1, 3);\r\n\r\nconsole.log(\"Initial STP election:\");\r\nnet.runElection();\r\n\r\nnet.simulateFailure(3); // Root fails → re-election\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "56-virtual-lans-vlans",
      children: "5.6 Virtual LANs (VLANs)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Virtual LAN (VLAN, IEEE 802.1Q) partitions a physical switch into multiple logical broadcast domains. Stations in the same VLAN can communicate as if on the same physical segment; stations in different VLANs require a router (Layer 3) to communicate."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "561-real-world-analogy",
      children: "5.6.1 Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Office floor partitioning."
        }), " Imagine one large office floor (one switch). Without VLANs, everyone hears every conversation (broadcasts). VLANs are like installing glass walls that create separate rooms. People in Room A (VLAN 10) can only hear announcements within Room A. If someone in Room A needs to talk to someone in Room B (VLAN 20), they must go through a receptionist (router). The trunk port is the hallway that carries conversations from multiple rooms, with a label on each person's back indicating which room they belong to (802.1Q tag)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "562-8021q-frame-format",
      children: "5.6.2 802.1Q Frame Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IEEE 802.1Q inserts a 4-byte VLAN tag into the Ethernet frame between the source MAC and the Length/Type field:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Standard Ethernet Frame:\r\n┌──────────┬──────────┬──────────┬──────────┬────────────┬────────┐\r\n│ Dst MAC  │ Src MAC  │Type/Len  │ Payload  │    FCS     │        │\r\n│   (6B)   │   (6B)   │  (2B)    │46-1500B  │   (4B)     │        │\r\n└──────────┴──────────┴──────────┴──────────┴────────────┘\r\n\r\n802.1Q Tagged Frame:\r\n┌──────────┬──────────┬──────────┬──────────┬──────────┬────────────┬────────┐\r\n│ Dst MAC  │ Src MAC  │ 802.1Q   │Type/Len  │ Payload  │  FCS      │        │\r\n│   (6B)   │   (6B)   │ Tag(4B)  │  (2B)    │46-1500B  │  (4B)     │        │\r\n└──────────┴──────────┴──────────┴──────────┴──────────┴────────────┘\r\n\r\n802.1Q Tag (4 bytes):\r\n       2 bytes          3 bits   1 bit    12 bits\r\n┌──────────────────┬──────────┬────────┬──────────────┐\r\n│  TPID (0x8100)   │ Priority │  DEI   │  VLAN ID     │\r\n│                  │   (PCP)  │        │              │\r\n└──────────────────┴──────────┴────────┴──────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TPID"
        }), " (2 bytes): Tag Protocol Identifier = 0x8100. Marks the frame as 802.1Q-tagged."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PCP"
        }), " (3 bits): Priority Code Point → 802.1p class of service (0–7). Used for QoS."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DEI"
        }), " (1 bit): Drop Eligible Indicator. When set, frame may be dropped during congestion."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VID"
        }), " (12 bits): VLAN Identifier (1–4094; 0 = priority only, 4095 = reserved)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "563-port-based-vs-tag-based-vlan-comparison",
      children: "5.6.3 Port-Based vs Tag-Based VLAN Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Port-Based VLAN"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tag-Based VLAN (802.1Q)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Membership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port assigned to VLAN statically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VLAN ID embedded in frame tag"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-port assignment (access port)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-frame classification (trunk port)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple VLANs per port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (one VLAN per port)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (trunk carries multiple VLANs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "End-host awareness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None → host sends untagged frames"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host must send tagged frames (for trunk)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited to number of switch ports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 4094 VLANs per switch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-switch VLANs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dedicated link per VLAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single trunk carries all VLANs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host cannot change VLAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tag spoofing risk (VLAN hopping)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple → assign port to VLAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires trunk config + native VLAN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access layer (end hosts)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distribution/core (inter-switch links)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cisco terminology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trunk port (802.1Q encapsulation)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "564-vlan-trunking-8021q",
      children: "5.6.4 VLAN Trunking (802.1Q)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Access port."
      }), " Belongs to a single VLAN. The switch strips any 802.1Q tag before delivering frames to the end device. The end device sends untagged frames; the switch adds the access VLAN tag internally."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trunk port."
      }), " Carries frames from multiple VLANs between switches. Every frame on a trunk link has an 802.1Q tag. The trunk port adds the tag on egress (if the frame's VLAN does not match the native VLAN) and strips it on ingress before forwarding to access ports."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Native VLAN."
      }), " The one VLAN that is transmitted untagged on a trunk (default VLAN 1). Both ends must agree on the native VLAN. Mismatch causes connectivity issues between native VLAN hosts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "565-numbered-steps-vlan-frame-processing",
      children: "5.6.5 Numbered Steps: VLAN Frame Processing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ingress on access port"
        }), " → Frame arrives untagged. Switch classifies it into the access port's configured VLAN. The internal tag is applied: (VLAN ID, PCP, DEI)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ingress on trunk port"
        }), " → Frame arrives with or without 802.1Q tag:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Tagged:"
            }), " Switch reads the VID. If it matches an allowed VLAN, the frame is accepted."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Untagged:"
            }), " Switch assigns it to the trunk's native VLAN (default VLAN 1)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MAC learning"
        }), " → Source MAC and ingress port (plus VLAN ID) are learned in the per-VLAN MAC table. MAC learning is VLAN-aware: the same MAC can exist in different VLANs on different ports."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Destination lookup"
        }), " → The destination MAC is looked up within the same VLAN only. A frame in VLAN 10 never matches a MAC entry in VLAN 20."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Egress decision"
        }), ":\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If destination is on the same VLAN on another access port: remove tag, send untagged frame."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If destination is on a trunk port: keep tag (unless native VLAN), send tagged frame."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If destination is unknown: flood within the same VLAN only (not across VLANs)."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "556-pseudocode-vlan-switching",
      children: "5.5.6 Pseudocode: VLAN Switching"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GLOBAL mac_table: MAP<(VLAN_ID, MAC), PortEntry>\r\n\r\nFUNCTION ProcessVLANFrame(frame, ingress_port, vlan_id):\r\n    // 1. Learn (MAC, VLAN, port) tuple\r\n    key = (vlan_id, frame.src_mac)\r\n    mac_table[key] = PortEntry(port=ingress_port, timestamp=now())\r\n    \r\n    // 2. Handle broadcast within VLAN\r\n    IF frame.dst_mac IS BROADCAST:\r\n        FOR EACH port in switch_ports:\r\n            IF port != ingress_port AND port_membership(port) CONTAINS vlan_id:\r\n                frame_out = frame\r\n                IF port.type == TRUNK:\r\n                    IF port.native_vlan != vlan_id:\r\n                        ADD_8021Q_TAG(frame_out, vlan_id)\r\n                ELSE:  // access port\r\n                    REMOVE_8021Q_TAG(frame_out)\r\n                SEND(frame_out, port)\r\n        RETURN\r\n    \r\n    // 3. VLAN-scoped destination lookup\r\n    dst_key = (vlan_id, frame.dst_mac)\r\n    entry = LOOKUP mac_table[dst_key]\r\n    \r\n    IF entry IS NULL:\r\n        // Unknown unicast → flood within VLAN\r\n        FOR EACH port in vlan_members[vlan_id]:\r\n            IF port != ingress_port:\r\n                SEND_VLAN_FRAME(frame, port, vlan_id)\r\n    ELSE IF entry.port != ingress_port:\r\n        SEND_VLAN_FRAME(frame, entry.port, vlan_id)\r\n    ELSE:\r\n        DROP(frame)  // same port → no forward needed\r\n\r\nFUNCTION SEND_VLAN_FRAME(frame, egress_port, vlan_id):\r\n    IF egress_port.type == ACCESS:\r\n        STRIP_8021Q_TAG(frame)     // end host expects untagged\r\n    ELSE IF egress_port.type == TRUNK:\r\n        IF egress_port.native_vlan != vlan_id:\r\n            ADD_8021Q_TAG(frame, vlan_id)\r\n        // else: native VLAN → send untagged\r\n    \r\n    SEND(frame, egress_port)\r\n\r\nFUNCTION port_membership(port) -> SET of VLAN_IDs:\r\n    IF port.type == ACCESS:\r\n        RETURN {port.access_vlan}\r\n    ELSE:  // trunk\r\n        RETURN port.allowed_vlans   // configured list (or all)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "567-dry-run-trace-table-vlan-switching",
      children: "5.6.7 Dry Run Trace Table: VLAN Switching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Switch with 4 ports: P1=access(VLAN10), P2=access(VLAN10), P3=access(VLAN20), P4=trunk(allowed 10,20, native 1)."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ingress"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "VLAN"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Learn"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dst Lookup (VLAN)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tables empty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A→B (VLAN10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P1 (acc)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(A,10)→P1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(B,10): unknown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flood P2, P4 (tagged for 10)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B→A reply (VLAN10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P2 (acc)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(B,10)→P2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(A,10): P1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward to P1 (data reaches A)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C→D (VLAN20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P3 (acc)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(C,20)→P3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(D,20): unknown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flood P4 (tagged for 20)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D→C reply (VLAN20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P4 (trunk)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(D,20)→P4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(C,20): P3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward to P3 (data reaches C)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A→D (VLAN10 → VLAN20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P1 (acc)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(A,10)→P1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(D,10): unknown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flood P2, P4 → D not in VLAN10 → D never receives it"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Step 5 demonstrates VLAN isolation: A in VLAN10 cannot reach D in VLAN20 directly. A router with an interface in both VLANs (or an SVI) is required for inter-VLAN routing."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "568-c-implementation-vlan-aware-switch",
      children: "5.6.8 C++ Implementation: VLAN-Aware Switch"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <unordered_map>\r\n#include <vector>\r\n#include <string>\r\n#include <set>\r\n#include <sstream>\r\n\r\nstruct VlanPortEntry {\r\n    int port;\r\n    std::string mac;\r\n    int vlan_id;\r\n};\r\n\r\nusing MacKey = std::pair<int, std::string>; // (vlan_id, mac)\r\n\r\nstruct MacKeyHash {\r\n    std::size_t operator()(const MacKey& k) const {\r\n        return std::hash<int>()(k.first) ^ (std::hash<std::string>()(k.second) << 1);\r\n    }\r\n};\r\n\r\nclass VlanSwitch {\r\nprivate:\r\n    std::unordered_map<MacKey, int, MacKeyHash> mac_table; // (vlan,mac) → port\r\n    int num_ports;\r\n    \r\n    struct PortConfig {\r\n        enum Type { ACCESS, TRUNK } type;\r\n        int access_vlan;\r\n        std::set<int> allowed_vlans;\r\n        int native_vlan;\r\n    };\r\n    std::vector<PortConfig> ports;\r\n    \r\npublic:\r\n    VlanSwitch(int n_ports) : num_ports(n_ports), ports(n_ports) {\r\n        for (auto& p : ports) {\r\n            p.type = PortConfig::ACCESS;\r\n            p.access_vlan = 1;\r\n            p.native_vlan = 1;\r\n        }\r\n    }\r\n    \r\n    void configure_access(int port, int vlan) {\r\n        ports[port].type = PortConfig::ACCESS;\r\n        ports[port].access_vlan = vlan;\r\n    }\r\n    \r\n    void configure_trunk(int port, const std::set<int>& vlans, int native = 1) {\r\n        ports[port].type = PortConfig::TRUNK;\r\n        ports[port].allowed_vlans = vlans;\r\n        ports[port].native_vlan = native;\r\n    }\r\n    \r\n    int resolve_vlan(int ingress_port, bool frame_tagged, int frame_vlan) {\r\n        auto& p = ports[ingress_port];\r\n        if (p.type == PortConfig::ACCESS) {\r\n            return p.access_vlan;  // Always assign access VLAN\r\n        }\r\n        // Trunk port\r\n        if (frame_tagged) {\r\n            if (p.allowed_vlans.count(frame_vlan)) return frame_vlan;\r\n            return -1;  // Not allowed → drop\r\n        }\r\n        return p.native_vlan;  // Untagged → native VLAN\r\n    }\r\n    \r\n    std::string process_frame(const std::string& src, const std::string& dst,\r\n                               int ingress_port, bool tagged, int frame_vlan) {\r\n        int vlan = resolve_vlan(ingress_port, tagged, frame_vlan);\r\n        if (vlan < 0) return \"DROP (VLAN not allowed on trunk)\";\r\n        \r\n        // Learn\r\n        MacKey learn_key(vlan, src);\r\n        mac_table[learn_key] = ingress_port;\r\n        \r\n        // Broadcast\r\n        if (dst == \"FF:FF:FF:FF:FF:FF\") {\r\n            return flood_within_vlan(ingress_port, vlan);\r\n        }\r\n        \r\n        // Lookup within VLAN\r\n        MacKey dst_key(vlan, dst);\r\n        auto it = mac_table.find(dst_key);\r\n        \r\n        if (it == mac_table.end()) {\r\n            return flood_within_vlan(ingress_port, vlan);\r\n        }\r\n        \r\n        if (it->second == ingress_port) {\r\n            return \"FILTER (same port)\";\r\n        }\r\n        \r\n        return \"FORWARD to P\" + std::to_string(it->second) +\r\n               \" (VLAN \" + std::to_string(vlan) + \")\";\r\n    }\r\n    \r\n    std::string flood_within_vlan(int ingress, int vlan) {\r\n        std::string result = \"FLOOD within VLAN \" + std::to_string(vlan) + \" →\";\r\n        for (int p = 0; p < num_ports; ++p) {\r\n            if (p == ingress) continue;\r\n            if (port_in_vlan(p, vlan)) {\r\n                result += \" P\" + std::to_string(p);\r\n            }\r\n        }\r\n        return result;\r\n    }\r\n    \r\n    bool port_in_vlan(int port_id, int vlan) const {\r\n        const auto& p = ports[port_id];\r\n        if (p.type == PortConfig::ACCESS) return p.access_vlan == vlan;\r\n        return p.allowed_vlans.count(vlan) > 0;\r\n    }\r\n    \r\n    void print_table() const {\r\n        std::cout << \"\\nVLAN MAC Table:\\n\";\r\n        std::cout << \"VLAN  MAC Address        Port\\n\";\r\n        std::cout << \"--------------------------------\\n\";\r\n        for (const auto& [key, port] : mac_table) {\r\n            std::cout << \"  \" << key.first << \"   \" << key.second\r\n                      << \"    P\" << port << \"\\n\";\r\n        }\r\n    }\r\n};\r\n\r\nint main() {\r\n    VlanSwitch sw(4);\r\n    sw.configure_access(0, 10);  // P1 = VLAN 10\r\n    sw.configure_access(1, 10);  // P2 = VLAN 10\r\n    sw.configure_access(2, 20);  // P3 = VLAN 20\r\n    sw.configure_trunk(3, {10, 20}); // P4 = trunk\r\n    \r\n    auto act = [&](const std::string& s, const std::string& d, int p, bool t, int v) {\r\n        std::cout << \"[\" << s << \"→\" << d << \" P\" << p\r\n                  << (t ? \" (tagged V\" + std::to_string(v) + \")\" : \" (untagged)\")\r\n                  << \"] \" << sw.process_frame(s, d, p, t, v) << \"\\n\";\r\n    };\r\n    \r\n    act(\"AA:11\", \"BB:22\", 0, false, 0);  // Access port, untagged\r\n    act(\"BB:22\", \"AA:11\", 1, false, 0);\r\n    act(\"CC:33\", \"DD:44\", 2, false, 0);\r\n    act(\"DD:44\", \"CC:33\", 3, true, 20);  // Trunk, tagged VLAN 20\r\n    act(\"AA:11\", \"CC:33\", 0, false, 0);  // Cross-VLAN → should fail\r\n    \r\n    sw.print_table();\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "569-python-implementation-vlan-switch",
      children: "5.6.9 Python Implementation: VLAN Switch"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\r\nfrom typing import Dict, Set, Optional, List, Tuple\r\n\r\n@dataclass\r\nclass PortConfig:\r\n    class Type:\r\n        ACCESS = \"access\"\r\n        TRUNK = \"trunk\"\r\n    \r\n    type: str = Type.ACCESS\r\n    access_vlan: int = 1\r\n    allowed_vlans: Set[int] = None\r\n    native_vlan: int = 1\r\n    \r\n    def __post_init__(self):\r\n        if self.allowed_vlans is None:\r\n            self.allowed_vlans = {self.access_vlan}\r\n\r\nclass VlanSwitch:\r\n    def __init__(self, num_ports: int):\r\n        self.mac_table: Dict[Tuple[int, str], int] = {}  # (vlan, mac) → port\r\n        self.ports = [PortConfig() for _ in range(num_ports)]\r\n    \r\n    def configure_access(self, port: int, vlan: int):\r\n        self.ports[port].type = PortConfig.Type.ACCESS\r\n        self.ports[port].access_vlan = vlan\r\n    \r\n    def configure_trunk(self, port: int, vlans: Set[int], native: int = 1):\r\n        self.ports[port].type = PortConfig.Type.TRUNK\r\n        self.ports[port].allowed_vlans = vlans\r\n        self.ports[port].native_vlan = native\r\n    \r\n    def _resolve_vlan(self, port: int, tagged: bool, frame_vlan: int) -> Optional[int]:\r\n        p = self.ports[port]\r\n        if p.type == PortConfig.Type.ACCESS:\r\n            return p.access_vlan\r\n        # Trunk\r\n        if tagged:\r\n            return frame_vlan if frame_vlan in p.allowed_vlans else None\r\n        return p.native_vlan\r\n    \r\n    def _port_in_vlan(self, port: int, vlan: int) -> bool:\r\n        p = self.ports[port]\r\n        if p.type == PortConfig.Type.ACCESS:\r\n            return p.access_vlan == vlan\r\n        return vlan in p.allowed_vlans\r\n    \r\n    def process_frame(self, src: str, dst: str, ingress: int,\r\n                      tagged: bool = False, frame_vlan: int = 0) -> str:\r\n        vlan = self._resolve_vlan(ingress, tagged, frame_vlan)\r\n        if vlan is None:\r\n            return \"DROP (VLAN not allowed on trunk)\"\r\n        \r\n        # Learn (VLAN-scoped)\r\n        self.mac_table[(vlan, src)] = ingress\r\n        \r\n        # Broadcast within VLAN\r\n        if dst == \"FF:FF:FF:FF:FF:FF\":\r\n            ports = [p for p in range(len(self.ports))\r\n                    if p != ingress and self._port_in_vlan(p, vlan)]\r\n            return f\"FLOOD in VLAN{vlan} → ports {ports}\"\r\n        \r\n        # Lookup within same VLAN\r\n        dst_port = self.mac_table.get((vlan, dst))\r\n        if dst_port is None:\r\n            ports = [p for p in range(len(self.ports))\r\n                    if p != ingress and self._port_in_vlan(p, vlan)]\r\n            return f\"FLOOD (unknown unicast) in VLAN{vlan} → ports {ports}\"\r\n        if dst_port == ingress:\r\n            return \"FILTER (same port)\"\r\n        return f\"FORWARD to P{dst_port} (VLAN{vlan})\"\r\n    \r\n    def __repr__(self) -> str:\r\n        lines = [\"VLAN MAC Table:\", \"VLAN  MAC              Port\", \"-\" * 35]\r\n        for (vlan, mac), port in sorted(self.mac_table.items()):\r\n            lines.append(f\"  {vlan:<5} {mac:<15} P{port}\")\r\n        return \"\\n\".join(lines)\r\n\r\n\r\n# Demonstration\r\nif __name__ == \"__main__\":\r\n    sw = VlanSwitch(4)\r\n    sw.configure_access(0, 10)   # P1 = VLAN10 access\r\n    sw.configure_access(1, 10)   # P2 = VLAN10 access\r\n    sw.configure_access(2, 20)   # P3 = VLAN20 access\r\n    sw.configure_trunk(3, {10, 20}, native=1)  # P4 = trunk\r\n    \r\n    print(\"=== VLAN Switch Simulation ===\\n\")\r\n    \r\n    def proc(src, dst, port, tagged=False, vlan=0):\r\n        print(f\"[{src}→{dst} P{port}] \"\r\n              f\"{sw.process_frame(src, dst, port, tagged, vlan)}\")\r\n    \r\n    proc(\"AA:AA:AA:AA:AA:01\", \"BB:BB:BB:BB:BB:01\", 0)   # A→B VLAN10\r\n    proc(\"BB:BB:BB:BB:BB:01\", \"AA:AA:AA:AA:AA:01\", 1)   # B→A VLAN10\r\n    proc(\"CC:CC:CC:CC:CC:01\", \"DD:DD:DD:DD:DD:01\", 2)   # C→D VLAN20\r\n    \r\n    # Cross-VLAN attempt (should fail → routed via VLAN isolation)\r\n    print(\"\\n--- Cross-VLAN attempt ---\")\r\n    proc(\"AA:AA:AA:AA:AA:01\", \"CC:CC:CC:CC:CC:01\", 0)\r\n    \r\n    # Trunk: tagged frame from VLAN20\r\n    print(\"\\n--- Trunk port ---\")\r\n    proc(\"EE:EE:EE:EE:EE:01\", \"CC:CC:CC:CC:CC:01\", 3, tagged=True, vlan=20)\r\n    \r\n    print(sw)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5610-complexity-analysis",
      children: "5.6.10 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VLAN classification (access)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(p)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple port→VLAN mapping table of p ports"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VLAN classification (trunk)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(v)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read 12-bit VID from frame; check in set of v allowed VLANs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VLAN-scoped MAC lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m·v)*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash key is (VLAN, MAC) pair; m MACs × v VLANs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tag insertion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(f)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shift frame payload by 4 bytes; update FCS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tag removal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(f)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove 4 bytes; update FCS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flood within VLAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(p·f)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(f)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replicate to up to p ports in same VLAN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Native VLAN mismatch detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare expected vs received native VLAN ID"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "* m = MACs per VLAN, v = VLAN count"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5611-advantages-and-disadvantages",
      children: "5.6.11 Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Broadcast isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces broadcast domain size; fewer unnecessary frames"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inter-VLAN traffic requires router (adds latency)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hosts in different VLANs cannot communicate directly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VLAN hopping attacks can bypass isolation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical grouping independent of physical location"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration complexity with many VLANs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trunk efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One link carries many VLANs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native VLAN misconfiguration breaks connectivity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standardization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IEEE 802.1Q is universal across vendors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double-tagging (QinQ) support varies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Per-VLAN STP (PVST)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load balancing possible per VLAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol overhead with hundreds of VLANs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5612-edge-cases",
      children: "5.6.12 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "VLAN hopping (switch spoofing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker configures host port as trunk, receives all VLANs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disable DTP; set all access ports as static access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Double tagging (QinQ attack)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker sends 802.1Q-tagged frame with outer VLAN = native; inner tag reaches target VLAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set native VLAN to an unused ID; tag all VLANs on trunk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Native VLAN mismatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trunk ends disagree on native VLAN; frames cross VLANs inadvertently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use dedicated unused VLAN as native on all trunks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VLAN 1 default access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All ports default to VLAN 1; compromise allows broad access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Change native VLAN from 1 to an unused value (e.g., 999)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Private VLAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Isolated ports within same VLAN cannot communicate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use PVLAN (protected port) feature for port isolation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAC overlap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same MAC in multiple VLANs on different ports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normal → MAC table keyed by (VLAN, MAC) tuple, not MAC alone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VLAN pruning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unnecessary broadcast flooding on trunks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VTP pruning or manual allowed-VLAN lists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Router-on-a-stick bottleneck"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single trunk carries inter-VLAN traffic for many VLANs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use L3 switch with SVIs for wire-rate routing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-vlan-manager",
      children: "TypeScript Implementation: VLAN Manager"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface VlanConfig {\r\n  vlanId: number;\r\n  name: string;\r\n  memberPorts: Set<number>;\r\n  isNative: boolean;\r\n}\r\n\r\nclass VLANManager {\r\n  private vlans: Map<number, VlanConfig> = new Map();\r\n  private trunkPorts: Set<number> = new Set();\r\n  private vlanPortMap: Map<number, number[]> = new Map(); // port → VLAN list\r\n\r\n  createVlan(vlanId: number, name: string): void {\r\n    if (vlanId < 1 || vlanId > 4094) throw new Error(`Invalid VLAN ID: ${vlanId}`);\r\n    this.vlans.set(vlanId, { vlanId, name, memberPorts: new Set(), isNative: false });\r\n    console.log(`Created VLAN ${vlanId} (${name})`);\r\n  }\r\n\r\n  assignPortToVlan(port: number, vlanId: number): void {\r\n    const vlan = this.vlans.get(vlanId);\r\n    if (!vlan) throw new Error(`VLAN ${vlanId} does not exist`);\r\n    vlan.memberPorts.add(port);\r\n    if (!this.vlanPortMap.has(port)) this.vlanPortMap.set(port, []);\r\n    const portVlans = this.vlanPortMap.get(port)!;\r\n    if (!portVlans.includes(vlanId)) portVlans.push(vlanId);\r\n    console.log(`Port ${port} assigned to VLAN ${vlanId} (${vlan.name})`);\r\n  }\r\n\r\n  setTrunk(port: number, allowedVlans: number[], nativeVlan: number = 1): void {\r\n    this.trunkPorts.add(port);\r\n    this.vlanPortMap.set(port, allowedVlans);\r\n    if (this.vlans.has(nativeVlan)) this.vlans.get(nativeVlan)!.isNative = true;\r\n    console.log(`Port ${port} configured as trunk, VLANs ${allowedVlans.join(',')}, native=${nativeVlan}`);\r\n  }\r\n\r\n  isFrameAllowed(vlanId: number, port: number): boolean {\r\n    if (this.trunkPorts.has(port)) {\r\n      const allowed = this.vlanPortMap.get(port) || [];\r\n      return allowed.includes(vlanId);\r\n    }\r\n    const vlan = this.vlans.get(vlanId);\r\n    return vlan ? vlan.memberPorts.has(port) : false;\r\n  }\r\n\r\n  getPortsInVlan(vlanId: number): number[] {\r\n    const vlan = this.vlans.get(vlanId);\r\n    return vlan ? [...vlan.memberPorts] : [];\r\n  }\r\n\r\n  getVlanSummary(): string[] {\r\n    const summary: string[] = [];\r\n    for (const [id, vlan] of this.vlans) {\r\n      summary.push(`VLAN ${id} (${vlan.name}): ${vlan.memberPorts.size} ports, native=${vlan.isNative}`);\r\n    }\r\n    return summary;\r\n  }\r\n}\r\n\r\n// Demo\r\nconst vm = new VLANManager();\r\nvm.createVlan(10, \"Engineering\");\r\nvm.createVlan(20, \"Marketing\");\r\nvm.createVlan(30, \"Servers\");\r\n\r\nvm.assignPortToVlan(1, 10);\r\nvm.assignPortToVlan(2, 10);\r\nvm.assignPortToVlan(3, 10);\r\nvm.assignPortToVlan(4, 20);\r\nvm.assignPortToVlan(5, 20);\r\nvm.assignPortToVlan(6, 30);\r\nvm.assignPortToVlan(7, 30);\r\n\r\nvm.setTrunk(24, [10, 20, 30], 1);\r\n\r\nconsole.log(\"\\nVLAN Summary:\");\r\nconsole.log(vm.getVlanSummary().join('\\n'));\r\nconsole.log(`\\nVLAN 10 members: ports [${vm.getPortsInVlan(10)}]`);\r\nconsole.log(`Is VLAN 10 frame allowed on port 24? ${vm.isFrameAllowed(10, 24)}`);\r\nconsole.log(`Is VLAN 20 frame allowed on port 1? ${vm.isFrameAllowed(20, 1)}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "57-link-aggregation-laglacp",
      children: "5.7 Link Aggregation (LAG/LACP)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Link Aggregation Control Protocol (LACP, IEEE 802.1AX) combines multiple physical links into a single logical link."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "571-real-world-analogy",
      children: "5.7.1 Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple highway lanes."
        }), " A single-lane road (one link) carries a maximum number of cars per hour. Adding three more lanes (LAG) creates a 4-lane highway. Cars (frames) are distributed across lanes based on their license plate (hash of MAC/IP). If one lane closes (link failure), traffic is redistributed to the remaining three → no road closure."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "572-benefits",
      children: "5.7.2 Benefits"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Increased bandwidth:"
        }), " Up to 8 physical links combine into one logical link (some vendors support 16)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Redundancy:"
        }), " If a member link fails, traffic is redistributed across remaining links (failover < 1 second)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Load balancing:"
        }), " Traffic is distributed across links using a hash of L2/L3/L4 header fields."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cost:"
        }), " Uses existing hardware → no need for faster (and more expensive) individual links."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "573-lacp-operation-steps",
      children: "5.7.3 LACP Operation Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configuration"
        }), " → Both ends of the link bundle must be configured for LACP (active or passive mode)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LACPDU exchange"
        }), " → LACP Data Units are exchanged every 30 seconds (fast rate: 1 second). Each PDU contains the system priority, port key, and port number."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Aggregation negotiation"
        }), " → Ports with matching system ID and port key are aggregated. All member ports must have identical speed, duplex, and VLAN configuration."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frame distribution"
        }), " → Incoming frames are distributed across member links using a hash (typically XOR of src MAC, dst MAC, src IP, dst IP, src port, dst port). Frames in the same flow always use the same link (to prevent reordering)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Link monitoring"
        }), " → If a member link stops receiving LACPDUs, it is removed from the bundle. Traffic is redistributed to the remaining links."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "574-pseudocode-lacp-hash-distribution",
      children: "5.7.4 Pseudocode: LACP Hash Distribution"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GLOBAL lag_members: ARRAY of PORT_NUMBER    // member links in LAG\r\nGLOBAL num_members: INTEGER\r\n\r\nFUNCTION LAGHash(src_mac, dst_mac, src_ip, dst_ip, src_port, dst_port):\r\n    // Compute hash from L2/L3/L4 fields\r\n    hash = 0\r\n    \r\n    IF HAVE_L2_INFO:\r\n        hash ^= (src_mac >> 24) & 0xFF\r\n        hash ^= (src_mac >> 16) & 0xFF\r\n        hash ^= (src_mac >> 8) & 0xFF\r\n        hash ^= src_mac & 0xFF\r\n        hash ^= (dst_mac >> 24) & 0xFF\r\n        hash ^= (dst_mac >> 16) & 0xFF\r\n        hash ^= (dst_mac >> 8) & 0xFF\r\n        hash ^= dst_mac & 0xFF\r\n    \r\n    IF HAVE_L3_INFO:\r\n        hash ^= (src_ip >> 24) & 0xFF\r\n        hash ^= (src_ip >> 16) & 0xFF\r\n        hash ^= (src_ip >> 8) & 0xFF\r\n        hash ^= src_ip & 0xFF\r\n        hash ^= (dst_ip >> 24) & 0xFF\r\n        hash ^= (dst_ip >> 16) & 0xFF\r\n        hash ^= (dst_ip >> 8) & 0xFF\r\n        hash ^= dst_ip & 0xFF\r\n    \r\n    IF HAVE_L4_INFO:\r\n        hash ^= (src_port >> 8) & 0xFF\r\n        hash ^= src_port & 0xFF\r\n        hash ^= (dst_port >> 8) & 0xFF\r\n        hash ^= dst_port & 0xFF\r\n    \r\n    member_index = hash % num_members\r\n    RETURN lag_members[member_index]\r\n\r\nFUNCTION LACPReceiveLACPDU(lacpdu, ingress_port):\r\n    IF lacpdu.actor.system_priority < local.system_priority:\r\n        // Remote has higher priority → use their aggregation rules\r\n        agg_key = lacpdu.actor.port_key\r\n    ELSE IF lacpdu.actor.system_priority == local.system_priority:\r\n        IF local.system_mac < lacpdu.actor.system_mac:\r\n            agg_key = local.port_key\r\n        ELSE:\r\n            agg_key = lacpdu.actor.port_key\r\n    ELSE:\r\n        agg_key = local.port_key\r\n    \r\n    IF aggregated_ports_with_key(agg_key) == local.members:\r\n        ADD_PORT_TO_LAG(ingress_port, lag_id)\r\n    ELSE:\r\n        LOG \"Port \" + ingress_port + \" cannot join LAG → key mismatch\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "575-dry-run-trace-table-lacp",
      children: "5.7.5 Dry Run Trace Table: LACP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two switches with 4 links between them configured as a LAG (mode active)."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Switch A Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Switch B Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LAG Members"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ports 1-4 configured LACP active"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sends LACPDU on all 4 ports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sends LACPDU on all 4 ports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(none)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P1 LACPDU exchanged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matches system ID, port key → P1 added"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matches → P1 added"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{P1}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T=2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P2 LACPDU exchanged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P2 added → checks speed matches (1G)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P2 added"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{P1, P2}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P3 LACPDU exchanged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P3 added → all ports 1G full-duplex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P3 added"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{P1, P2, P3}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T=4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P4 LACPDU exchanged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P4 added → bundle complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P4 added"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{P1, P2, P3, P4}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T=5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frame A→B arrives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash(src,dst) % 4 = 2 → P3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{P1, P2, P3, P4}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T=6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frame C→D arrives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash(src,dst) % 4 = 0 → P1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{P1, P2, P3, P4}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T=35"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P2 stops receiving LACPDU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P2 removed from bundle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P2 removed from bundle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{P1, P3, P4}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T=36"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frame E→F arrives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash(src,dst) % 3 = 1 → P3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Old flow on P2 fails, new flow redistributed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{P1, P3, P4}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T=65"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P2 LACPDU received again"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P2 re-added"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P2 re-added"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{P1, P2, P3, P4}"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "58-mpls",
      children: "5.8 MPLS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multiprotocol Label Switching (MPLS) inserts a 32-bit label between the link-layer header and the network-layer header:"
    }), "\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsx)(_components.table, {
      children: (0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Label (20 b)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Exp (3 b)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "S (1 b)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TTL (8 b)"
          })]
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MPLS routers use label-switched paths (LSPs) determined by the Label Distribution Protocol (LDP) or RSVP-TE. The forwarding decision is a simple label lookup in the Label Information Base (LIB), faster than IP longest-prefix matching. MPLS supports traffic engineering, explicit path control, and VPNs (MPLS L3VPN and L2VPN). Modern carrier and data center networks extensively use MPLS for traffic steering and service chaining."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "581-mpls-label-operations",
      children: "5.8.1 MPLS Label Operations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Push:"
        }), " Ingress router adds a label to the packet."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Swap:"
        }), " Transit router replaces the top label with a new one."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pop:"
        }), " Egress router removes the label (penultimate hop popping removes it one hop earlier)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PHP:"
        }), " Penultimate Hop Popping → the router before the egress pops the label, so the egress does a plain IP lookup."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "582-mpls-vs-vlan",
      children: "5.8.2 MPLS vs VLAN"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MPLS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "VLAN"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.5 (between L2 and L3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Layer 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Label size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bytes per label (stackable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bytes total"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max identifiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2^20 per label space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4094"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forwarding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Label swap (fast)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAC lookup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (RSVP-TE, explicit paths)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VPN support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L3VPN and L2VPN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No native VPN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WAN, carrier, data center DCI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise LAN"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "59-interview-corner",
      children: "5.9 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-stp-vs-rstp--what-are-the-key-differences",
      children: "Q1: STP vs RSTP → What Are the Key Differences?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " RSTP (802.1w) improves STP (802.1D) in three critical areas:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Port roles:"
        }), " RSTP adds alternate port (immediate failover for root port) and backup port (backup for designated port). STP only has root/designated/blocked."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Convergence:"
        }), " STP uses timers (30-50s). RSTP uses active proposal-agreement handshake (1-3s). RSTP converges by actively negotiating with neighbor bridges rather than waiting for timers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edge ports:"
        }), " RSTP introduces the concept of edge ports (connected to end hosts) that transition immediately to forwarding without STP delays (analogous to Cisco's PortFast)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BPDU handling:"
        }), " STP relays received BPDUs; RSTP generates its own BPDUs every hello time (2s). RSTP detects neighbor failure in 3 missed BPDUs (6s) rather than 20s max age."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-what-is-a-mac-flooding-attack",
      children: "Q2: What Is a MAC Flooding Attack?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " MAC flooding attacks exploit the behavior of learning bridges. The attacker sends frames with thousands of random source MAC addresses, filling the switch's MAC address table. Once the table is full, the switch cannot learn new legitimate MACs and falls back to flooding all unknown-unicast frames to all ports. This allows the attacker to receive traffic intended for other hosts (a form of eavesdropping). Mitigations: port security (limit MACs per port), MAC address table size limits, and 802.1X authentication."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-how-does-vlan-trunking-work-and-can-it-be-attacked",
      children: "Q3: How Does VLAN Trunking Work and Can It Be Attacked?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " VLAN trunking (802.1Q) carries frames from multiple VLANs across a single link by adding a 4-byte tag. Attack vectors:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Switch spoofing:"
        }), " Attacker enables trunking on their host port, negotiating a trunk with the switch. They receive traffic from all VLANs. Mitigation: disable DTP; manually set access ports."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Double tagging (QinQ):"
        }), " Attacker sends a frame with two 802.1Q tags. The first (outer) tag matches the native VLAN and is stripped by the first switch; the second (inner) tag delivers the frame to a target VLAN. Mitigation: set native VLAN to an unused ID; tag all VLANs on trunks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VLAN hopping via multicast:"
        }), " Crafted multicast frames can sometimes cross VLAN boundaries on misconfigured switches. Mitigation: prune unused VLANs; use VTP transparent mode."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-are-jumbo-frames-and-when-should-you-use-them",
      children: "Q4: What Are Jumbo Frames and When Should You Use Them?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Jumbo frames are Ethernet frames with a payload larger than the standard 1500 bytes, typically up to 9000 bytes. Benefits: higher throughput because fewer frames need to be processed per byte of data (reduced CPU overhead), especially important for storage traffic (NFS, iSCSI) and large file transfers. Drawbacks: requires all devices on the path (switches, NICs, routers) to support jumbo frames with matching MTU settings. If a jumbo frame hits a device with standard MTU, it is either fragmented (if L3) or dropped (if L2). Use jumbo frames in data center storage networks and HPC clusters → not recommended for WAN or internet-facing links."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-how-does-a-switchs-mac-address-table-size-impact-performance",
      children: "Q5: How Does a Switch's MAC Address Table Size Impact Performance?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The MAC address table (typically stored in TCAM) directly impacts switching performance. A table that is too small causes premature eviction of legitimate entries, leading to excessive unknown-unicast flooding. Enterprise switches support 8K–128K MAC entries. Data center switches support 288K+. When the table overflows in hardware, entries are moved to software (CPU-processed switching), reducing throughput from wire speed to CPU-bound rates (typically 1-10% of line rate)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-is-the-difference-between-a-managed-and-unmanaged-switch",
      children: "Q6: What Is the Difference Between a Managed and Unmanaged Switch?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Unmanaged switches: plug-and-play, no configuration interface, no VLAN/STP/LACP support, fixed behavior. Managed switches: provide CLI or web interface for VLAN configuration, STP tuning, LACP link aggregation, QoS, SNMP monitoring, port security, and 802.1X authentication. Most enterprise networks use managed switches; unmanaged switches are limited to small home/office deployments."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "510-applications-in-real-systems",
      children: "5.10 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5101-cisco-switches-iosios-xe",
      children: "5.10.1 Cisco Switches (IOS/IOS-XE)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cisco is the dominant enterprise switch vendor. Key switching concepts in Cisco IOS:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MAC address table:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Switch# show mac address-table\r\n          Mac Address Table\r\n-------------------------------------------\r\nVlan    Mac Address       Type        Ports\r\n----    -----------       --------    -----\r\n  10    0050.7966.6800    DYNAMIC     Gi0/1\r\n  10    0050.7966.6801    DYNAMIC     Gi0/2\r\n  20    0050.7966.6802    STATIC      Gi0/3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "STP configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Switch(config)# spanning-tree vlan 10 priority 4096\r\nSwitch(config)# interface gigabitethernet0/1\r\nSwitch(config-if)# spanning-tree portfast\r\nSwitch(config-if)# spanning-tree bpduguard enable\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "VLAN configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Switch(config)# vlan 10\r\nSwitch(config-vlan)# name Engineering\r\nSwitch(config)# interface gigabitethernet0/1\r\nSwitch(config-if)# switchport mode access\r\nSwitch(config-if)# switchport access vlan 10\r\nSwitch(config)# interface gigabitethernet0/24\r\nSwitch(config-if)# switchport mode trunk\r\nSwitch(config-if)# switchport trunk allowed vlan 10,20,30\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "LACP configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Switch(config)# interface port-channel 1\r\nSwitch(config-if)# switchport mode trunk\r\nSwitch(config)# interface range gigabitethernet0/1-2\r\nSwitch(config-if-range)# channel-group 1 mode active\r\nSwitch(config-if-range)# channel-protocol lacp\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "5102-linux-bridge-bridge",
      children: ["5.10.2 Linux Bridge (", (0,jsx_runtime.jsx)(_components.code, {
        children: "bridge"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Linux has a native bridge implementation in the kernel:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create bridge\r\nip link add name br0 type bridge\r\nip link set br0 up\r\n\r\n# Add interfaces to bridge\r\nip link set eth0 master br0\r\nip link set eth1 master br0\r\n\r\n# VLAN filtering\r\nip link set br0 type bridge vlan_filtering 1\r\nbridge vlan add dev eth0 vid 10\r\nbridge vlan add dev eth1 vid 20\r\n\r\n# Show MAC table\r\nbridge fdb show\r\n# 00:11:22:33:44:55 dev eth0 master br0\r\n# 00:aa:bb:cc:dd:ee dev eth1 master br0\r\n\r\n# STP\r\nip link set br0 type bridge stp_state 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Linux bridge sysfs knobs:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "/sys/class/net/br0/bridge/forward_delay"
        }), " → Forward delay (default 15s)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "/sys/class/net/br0/bridge/max_age"
        }), " → Max age (default 20s)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "/sys/class/net/br0/bridge/ageing_time"
        }), " → MAC aging (default 30000 = 300s)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "/sys/class/net/br0/bridge/hash_max"
        }), " → Hash table size"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5103-open-vswitch-ovs",
      children: "5.10.3 Open vSwitch (OVS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Open vSwitch is a production-quality open-source software switch used extensively in virtualized environments (OpenStack, KVM, Docker networking):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create bridge\r\novs-vsctl add-br ovs-br0\r\n\r\n# Add ports\r\novs-vsctl add-port ovs-br0 eth0\r\novs-vsctl add-port ovs-br0 eth1\r\n\r\n# VLAN\r\novs-vsctl add-port ovs-br0 vhost0 tag=10  # Access port VLAN 10\r\novs-vsctl add-port ovs-br0 vhost1 tag=20  # Access port VLAN 20\r\novs-vsctl add-port ovs-br0 eth0 trunk=10,20,30  # Trunk port\r\n\r\n# STP\r\novs-vsctl set bridge ovs-br0 stp_enable=true\r\n\r\n# LACP\r\novs-vsctl add-bond ovs-br0 bond0 eth0 eth1 lacp=active\r\n\r\n# Flow table (OpenFlow)\r\novs-ofctl add-flow ovs-br0 \\\r\n    \"in_port=1,vlan_tci=0x0000/0x0fff,actions=mod_vlan_vid:10,output:2\"\r\novs-ofctl dump-flows ovs-br0\r\n\r\n# Show MAC table\r\novs-appctl fdb/show ovs-br0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "OVS flow table architecture:"
      }), " Unlike traditional switches that use TCAM for MAC learning, OVS supports both a learning bridge mode (similar to physical switches) and OpenFlow mode where a controller installs flow entries. This makes OVS ideal for SDN environments."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "511-concept-comparison-tables",
      children: "5.11 Concept Comparison Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "switching-methods-comparison",
      children: "Switching Methods Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Forward Starts"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Error Check"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Corrupted Frames"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Runt Frames"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Store-and-Forward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After full frame received"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (FCS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never forwarded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discarded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All environments (default for most switches)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cut-Through"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After dst MAC (14B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forwarded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forwarded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lowest (< 10µs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HPC, low-latency trading"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fragment-Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After 64 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial (no FCS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forwarded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discarded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General purpose (safe compromise)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hub-vs-switch-vs-router-detailed",
      children: "Hub vs Switch vs Router (Detailed)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hub"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Switch"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Router"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OSI Layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical (L1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Link (L2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network (L3)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forwarding Unit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bit/signal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethernet frame"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP packet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Addressing Used"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAC address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Table Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAC address table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routing table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collision Domains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (shared by all)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per port"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcast Domains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (shared by all)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per VLAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per interface"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth per Port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared (1/N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full wire speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full wire speed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loop Handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STP/RSTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TTL + routing protocols"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1 µs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-50 µs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 µs - 5 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Port Density"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24-48 (up to 512 stack)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-48"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VLAN Support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (802.1Q)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inter-VLAN routing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QoS Support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (802.1p)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (DSCP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACL Support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L2 ACL (MAC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L3/L4 ACL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unmanaged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLI/SNMP/Web"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLI/SNMP/Web"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost per 1G Port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$15-30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$30-200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$200-2000+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stp-port-states-summary",
      children: "STP Port States Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frames Forwarded?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MAC Learned?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BPDU Rx?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BPDU Tx?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Duration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blocking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indefinite (until topology change)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents loops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Listening"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15s (forward delay)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Listening for BPDUs to determine network topology"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Learning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15s (forward delay)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Building MAC table before forwarding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Forwarding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indefinite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normal operation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disabled"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Admin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Administratively down"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ethernet-frame-size-limits",
      children: "Ethernet Frame Size Limits"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Frame Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Payload (bytes)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total Frame (bytes)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum (802.3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "46"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required for CSMA/CD; padding added if payload < 46"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standard maximum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1518"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal default MTU for all Ethernet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "802.1Q tagged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1522"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "With 4-byte VLAN tag"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Jumbo (standard)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9018"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data center, storage (NFS, iSCSI)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Jumbo (extended)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9216"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9234"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cisco jumbo frame limit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Baby giant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1600"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1618"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPLS (extra label overhead)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Super jumbo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9614"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9632"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proprietary implementations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technology"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Feature"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10Base5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coax (500m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vampire tap, bus topology"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10BaseT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cat 3 UTP (100m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Star topology, hub-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100BaseTX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cat 5 UTP (100m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same frame, 10x speed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1000BaseT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cat 5e UTP (100m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-pair signaling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10GBaseT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cat 6a (100m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-duplex only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100GbE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMF/MMF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4×25G lanes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "400GbE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "400 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMF/MMF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 lanes × 50 Gbps PAM4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ethernet Generations"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10M → 100M (1995) → 1G (1998) → 10G (2002) → 40/100G (2010) → 400G (2017)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Frame Format"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preamble(7B) + SFD(1B) + Dst(6B) + Src(6B) + Type/Len(2B) + Payload(46-1500B) + FCS(4B) = 64-1518B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Switching Modes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store-and-forward (check FCS), Cut-through (min latency), Fragment-free (check 64B)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "STP Port States"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocking → Listening(15s) → Learning(15s) → Forwarding (30-50s total)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RSTP Port States"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discarding → Learning → Forwarding (1-3s total)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "VLAN Frame"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TPID(0x8100) + PCP(3b) + DEI(1b) + VLAN ID(12b) = 4 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MPLS Label"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Label(20b) + Exp(3b) + S(1b) + TTL(8b) = 32 bits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LACP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 8 links per bundle, hash-based load balancing, LACPDU every 30s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MAC Table"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamically learned, 300s aging, per-VLAN scoped in 802.1Q"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Enterprise Networking"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Center"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Service Provider"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cloud"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STP/RSTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Office LAN design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fabric topology (TRILL/SPB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carrier Ethernet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overlay networks (no STP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VLANs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Department segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-tenant isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPLS L2VPN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPC/subnets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LACP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server uplinks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ToR ↔ leaf trunks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPLS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L3VPN, TE, FRR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS Direct Connect"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cut-through switching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not typical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-latency HPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not typical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAC learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Software switching (OVS)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
            children: "Minimum Ethernet frame payload size?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "46 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1500 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "512 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which switching mode forwards before checking FCS?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store-and-Forward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cut-Through"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fragment-Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typical STP convergence time?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-3 s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-10 s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-50 s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How many bytes does 802.1Q add?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What prevents broadcast storms in redundant topologies?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAC learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LACP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store-and-Forward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-data-center-leaf-spine-with-vlan-segmentation",
      children: "Case Study: Data Center Leaf-Spine with VLAN Segmentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Background:"
      }), " A fintech company operates a data center with 1000 servers across 25 racks (40 servers/rack). Requirements: (a) low latency for trading applications (< 10 µs switch latency), (b) 10:1 oversubscription ratio max, (c) separate VLANs for production, staging, and management traffic."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Design — Leaf-Spine Topology:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Leaf layer (ToR switches):"
        }), " 25 switches (one per rack), each with 48×10G server ports, 4×40G uplinks to spines. Each leaf is a L2 switch with 802.1Q trunk uplinks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spine layer:"
        }), " 4 switches, each with 48×40G ports (total 192 uplink ports — each leaf connects to all 4 spines for redundancy)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VLAN design:"
        }), " VLAN 100 (production servers), VLAN 200 (staging), VLAN 300 (management), VLAN 999 (native/unused). All server-facing ports are access ports. All leaf-spine links are 802.1Q trunks carrying all four VLANs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Oversubscription calculation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Downlink capacity per leaf: 48 × 10G = 480 Gbps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uplink capacity per leaf: 4 × 40G = 160 Gbps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Oversubscription ratio: 480/160 = 3:1 (within the 10:1 requirement)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "STP considerations:"
      }), " In a leaf-spine with 4 spines, MSTP creates multiple spanning tree instances — one per VLAN group. VLAN 100 and VLAN 200 can use different spines as root, balancing load across all 4 spines."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome:"
      }), " 3:1 oversubscription, < 5 µs leaf-to-spine latency, VLAN isolation between environments, and full redundancy (any single spine failure reduces uplink capacity by 25 % but does not disconnect any server)."]
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
              children: "Ethernet frame format"
            }), " has been stable for 40+ years"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always validate FCS when capturing packets — corrupted frames should never pass a switch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Cut-through switching"
            }), " minimizes latency at the cost of forwarding corrupted frames"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use only on low-BER links (fiber within same rack); fall back to store-and-forward for WAN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "MAC table size"
            }), " determines scalability"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A 48-port switch with 1000 MACs per port needs ~48K entries — ensure hardware TCAM supports this"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "STP convergence"
            }), " is 30-50s (STP) vs 1-3s (RSTP)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always use RSTP or MSTP; legacy STP causes unacceptable outages during link failures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "VLAN trunking"
            }), " requires careful native VLAN management"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Change native VLAN from 1 to an unused ID (e.g., 999) to prevent VLAN hopping attacks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "LACP load balancing"
            }), " must be flow-aware"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use hash of src/dst MAC + IP + port to avoid TCP reordering (never use round-robin)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Leaf-spine topology"
            }), " provides predictable latency and scale"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each leaf connects to every spine — no oversubscription at spine if N × leaf_uplink ≤ spine_ports"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ethernet has evolved from 10 Mbps shared-media coaxial segments to 400 Gbps full-duplex switched networks. The frame format → with Preamble, SFD, MAC addresses, Length/Type, Payload, and FCS → has remained fundamentally unchanged since 1980. Switches learn MAC addresses automatically using the learning bridge algorithm and make forwarding decisions at line rate. STP prevents loops in redundant topologies through a distributed algorithm that elects a root bridge, selects root ports, and blocks alternate paths. RSTP accelerates convergence from 30-50s to 1-3s. VLANs partition broadcast domains using 802.1Q frame tagging. LACP bundles physical links for bandwidth and redundancy. MPLS extends Ethernet with label-based forwarding for traffic engineering and VPN services."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-takeaways",
      children: "Key Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frame format stability"
        }), " → The Ethernet frame format has been backward-compatible for four decades, enabling seamless interconnection of 10 Mbps and 400 Gbps devices at the data link layer."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transparent switching"
        }), " → Learning bridges require zero configuration at endpoints; MAC learning, aging, and flooding are entirely transparent to hosts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Loop prevention vs. redundancy"
        }), " → STP and its variants (RSTP, MSTP) are essential for safe redundant topologies. The trade-off is convergence time vs. bandwidth utilization."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VLAN isolation"
        }), " → VLANs provide broadcast domain segmentation without additional hardware, but require careful trunk configuration to prevent security issues like VLAN hopping."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Aggregation and tunneling"
        }), " → LACP and MPLS extend basic switching with increased bandwidth and carrier-grade features."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution Hints"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Hub (L1): repeats signals to all ports. Bridge (L2): connects segments, learns MACs, filters/forwards. Switch (L2): multi-port bridge with dedicated per-port bandwidth."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "When a frame from station S arrives on port Q different from the previously learned port P, the bridge updates the table entry to port Q."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Cut-through starts forwarding after reading only the Dst MAC (first 6 bytes of frame) — it does not wait for the full frame or check FCS, so corrupted frames are forwarded."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "STP prevents loops in redundant bridge topologies by blocking selected ports to create a loop-free tree."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "12 bits → 2^12 - 2 = 4094 usable VLANs (VLAN 0 and 4095 reserved)."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Preamble (7B, sync), SFD (1B, start), Dst MAC (6B), Src MAC (6B), Type/Len (2B), Payload (46-1500B), FCS (4B, CRC-32)."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "STP: Blocking → Listening → Learning → Forwarding (30-50s). RSTP: Discarding → Learning → Forwarding (1-3s); adds alternate/backup port roles."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Hash of L2/L3/L4 fields maps each flow to the same link consistently — preventing reordering within a flow."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Native VLAN is the untagged VLAN on a trunk. If both sides disagree on native VLAN, traffic can cross VLANs inadvertently."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "See section 5.4.3 pseudocode: learn source MAC, lookup destination MAC, filter if same port, else forward, or flood if unknown."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution Hints"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "11",
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "After learning A→2, B→2, C→2, the frame to A arrives on port 5. Dst = A is found on port 2 → forward to port 2 only."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Assume Bridge IDs: B1(prio 32768:mac1), B2(32768:mac2), B3(4096:mac3). Root = B3 (lowest priority). Root ports: B1 selects port connected to B3, B2 selects port connected to B3. Designated ports: all B3 ports, the B1-B2 link's designated port is on the side closer to root."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "BDP = 2 × T_prop × R. T_prop = 100 km × 1 µs/km = 100 µs. BDP = 2 × 100 × 10^-6 × 10^10 = 2 × 10^6 bits = 2,000,000 bits. Frames = 2,000,000 / (1500 × 8) = 166.7 frames."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "VLAN 10: ports 1-6, VLAN 20: ports 7-12, int gi0/24 switchport trunk allowed vlan 10,20, switchport mode trunk."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Compute hash for each flow: flow1 hash(AA:BB:CC:DD:EE:01, ...) → link 2, flow2 → link 0, flow3 → link 3."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution Hints"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "16",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design:"
          }), " 5000 servers / 40 per rack = 125 ToRs. 125 ToRs × 4 uplinks = 500 uplinks. 4 core switches × 48 ports = 192 uplink capacity. Oversubscription = 5000 × 10G / (4 × 48 × 40G) = 50 Tbps / 7.68 Tbps ≈ 6.5:1. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Modification:"
          }), " Increase to 8 core switches (96 ports × 40G = 3.84 Tbps per core → 15.36 Tbps total) → oversubscription = 50/15.36 ≈ 3.25:1. Or use 100G uplinks on ToRs with 8 core switches."]
        }), "\n"]
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

/***/ 8453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
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