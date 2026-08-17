"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[32737],{

/***/ 94244
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_computer_networks_01_introduction_md_587_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-computer-networks-01-introduction-md-587.json
const site_docs_courses_computer_networks_01_introduction_md_587_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/computer-networks/01-introduction","title":"Chapter 1: Introduction to Computer Networks","description":"Prerequisites Chapter 2: Physical Layer → From network models to transmission media","source":"@site/docs/courses/computer-networks/01-introduction.md","sourceDirName":"courses/computer-networks","slug":"/computer-networks/01-introduction","permalink":"/ai-engineering-journey/computer-networks/01-introduction","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"01-introduction","slug":"/computer-networks/01-introduction","title":"Chapter 1: Introduction to Computer Networks","sidebar_label":"Chapter 1: Introduction to Computer Networks","sidebar_position":1},"sidebar":"course-computer-networks","next":{"title":"Chapter 2: The Physical Layer","permalink":"/ai-engineering-journey/computer-networks/02-physical-layer"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/computer-networks/01-introduction.md


const frontMatter = {
	id: '01-introduction',
	slug: '/computer-networks/01-introduction',
	title: 'Chapter 1: Introduction to Computer Networks',
	sidebar_label: 'Chapter 1: Introduction to Computer Networks',
	sidebar_position: 1
};
const contentTitle = 'Chapter 1: Introduction to Computer Networks';

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
  "value": "Protocol Stack Layers (Styled)",
  "id": "protocol-stack-layers-styled",
  "level": 3
}, {
  "value": "1.1 What Is a Computer Network?",
  "id": "11-what-is-a-computer-network",
  "level": 2
}, {
  "value": "Definition",
  "id": "definition",
  "level": 3
}, {
  "value": "Real-World Analogy: The Postal System",
  "id": "real-world-analogy-the-postal-system",
  "level": 3
}, {
  "value": "Network Components",
  "id": "network-components",
  "level": 3
}, {
  "value": "C++ Implementation: Simple Network Node",
  "id": "c-implementation-simple-network-node",
  "level": 3
}, {
  "value": "Python Implementation: Simple Network Node",
  "id": "python-implementation-simple-network-node",
  "level": 3
}, {
  "value": "Advantages of Computer Networks",
  "id": "advantages-of-computer-networks",
  "level": 3
}, {
  "value": "Disadvantages of Computer Networks",
  "id": "disadvantages-of-computer-networks",
  "level": 3
}, {
  "value": "Edge Cases in Networking",
  "id": "edge-cases-in-networking",
  "level": 3
}, {
  "value": "1.2 Network Types",
  "id": "12-network-types",
  "level": 2
}, {
  "value": "1.2.1 Personal-Area Network (PAN)",
  "id": "121-personal-area-network-pan",
  "level": 3
}, {
  "value": "1.2.2 Local-Area Network (LAN)",
  "id": "122-local-area-network-lan",
  "level": 3
}, {
  "value": "1.2.3 Metropolitan-Area Network (MAN)",
  "id": "123-metropolitan-area-network-man",
  "level": 3
}, {
  "value": "1.2.4 Wide-Area Network (WAN)",
  "id": "124-wide-area-network-wan",
  "level": 3
}, {
  "value": "Real-World Analogy: Transportation Network",
  "id": "real-world-analogy-transportation-network",
  "level": 3
}, {
  "value": "LAN vs MAN vs WAN: Comparison Table",
  "id": "lan-vs-man-vs-wan-comparison-table",
  "level": 3
}, {
  "value": "C++: Network Type Simulator with Congestion",
  "id": "c-network-type-simulator-with-congestion",
  "level": 3
}, {
  "value": "Python: Network Type Simulator",
  "id": "python-network-type-simulator",
  "level": 3
}, {
  "value": "Edge Cases for Network Types",
  "id": "edge-cases-for-network-types",
  "level": 3
}, {
  "value": "1.3 Network Topologies",
  "id": "13-network-topologies",
  "level": 2
}, {
  "value": "Real-World Analogy: City Transportation",
  "id": "real-world-analogy-city-transportation",
  "level": 3
}, {
  "value": "1.3.1 Bus Topology",
  "id": "131-bus-topology",
  "level": 3
}, {
  "value": "1.3.2 Star Topology",
  "id": "132-star-topology",
  "level": 3
}, {
  "value": "1.3.3 Ring Topology",
  "id": "133-ring-topology",
  "level": 3
}, {
  "value": "1.3.4 Mesh Topology",
  "id": "134-mesh-topology",
  "level": 3
}, {
  "value": "1.3.5 Tree Topology",
  "id": "135-tree-topology",
  "level": 3
}, {
  "value": "1.3.6 Hybrid Topology",
  "id": "136-hybrid-topology",
  "level": 3
}, {
  "value": "TypeScript Implementation: NetworkTopologyBuilder",
  "id": "typescript-implementation-networktopologybuilder",
  "level": 3
}, {
  "value": "Topologies Comparison Table",
  "id": "topologies-comparison-table",
  "level": 3
}, {
  "value": "C++: Topology Simulator",
  "id": "c-topology-simulator",
  "level": 3
}, {
  "value": "Python: Topology Simulator",
  "id": "python-topology-simulator",
  "level": 3
}, {
  "value": "Edge Cases: Topology Failure Scenarios",
  "id": "edge-cases-topology-failure-scenarios",
  "level": 3
}, {
  "value": "Topology Selection Decision Matrix",
  "id": "topology-selection-decision-matrix",
  "level": 3
}, {
  "value": "1.4 Protocol Hierarchies and Layering",
  "id": "14-protocol-hierarchies-and-layering",
  "level": 2
}, {
  "value": "1.4.1 What Is a Protocol?",
  "id": "141-what-is-a-protocol",
  "level": 3
}, {
  "value": "Real-World Analogy: Diplomatic Protocol",
  "id": "real-world-analogy-diplomatic-protocol",
  "level": 3
}, {
  "value": "1.4.2 Protocol Layering",
  "id": "142-protocol-layering",
  "level": 3
}, {
  "value": "1.4.3 Service Primitives",
  "id": "143-service-primitives",
  "level": 3
}, {
  "value": "1.4.4 Connection-Oriented vs Connectionless Service",
  "id": "144-connection-oriented-vs-connectionless-service",
  "level": 3
}, {
  "value": "1.5 Encapsulation",
  "id": "15-encapsulation",
  "level": 2
}, {
  "value": "1.5.1 PDU Names by Layer",
  "id": "151-pdu-names-by-layer",
  "level": 3
}, {
  "value": "Step-by-Step Encapsulation Process (Numbered)",
  "id": "step-by-step-encapsulation-process-numbered",
  "level": 3
}, {
  "value": "Dry Run Trace: Full Encapsulation and De-encapsulation",
  "id": "dry-run-trace-full-encapsulation-and-de-encapsulation",
  "level": 3
}, {
  "value": "C++: Packet Building with Encapsulation",
  "id": "c-packet-building-with-encapsulation",
  "level": 3
}, {
  "value": "Python: Packet Builder with Encapsulation",
  "id": "python-packet-builder-with-encapsulation",
  "level": 3
}, {
  "value": "1.6 The OSI Reference Model",
  "id": "16-the-osi-reference-model",
  "level": 2
}, {
  "value": "Real-World Analogy: International Postal System",
  "id": "real-world-analogy-international-postal-system",
  "level": 3
}, {
  "value": "The Seven Layers in Detail",
  "id": "the-seven-layers-in-detail",
  "level": 3
}, {
  "value": "Data Flow Through OSI Layers (Numbered Steps)",
  "id": "data-flow-through-osi-layers-numbered-steps",
  "level": 3
}, {
  "value": "Dry Run Trace: &quot;PING&quot; Through OSI",
  "id": "dry-run-trace-ping-through-osi",
  "level": 3
}, {
  "value": "C++: OSI Layer Simulation",
  "id": "c-osi-layer-simulation",
  "level": 3
}, {
  "value": "Python: OSI Layer Simulation",
  "id": "python-osi-layer-simulation",
  "level": 3
}, {
  "value": "TypeScript Implementation: EncapsulationSimulator",
  "id": "typescript-implementation-encapsulationsimulator",
  "level": 3
}, {
  "value": "Complexity Analysis of the OSI Model",
  "id": "complexity-analysis-of-the-osi-model",
  "level": 3
}, {
  "value": "A&amp;D of the OSI Model",
  "id": "ad-of-the-osi-model",
  "level": 3
}, {
  "value": "Edge Cases in OSI Layering",
  "id": "edge-cases-in-osi-layering",
  "level": 3
}, {
  "value": "1.7 The TCP/IP Model",
  "id": "17-the-tcpip-model",
  "level": 2
}, {
  "value": "The Four Layers",
  "id": "the-four-layers",
  "level": 3
}, {
  "value": "OSI vs TCP/IP: Layer Mapping",
  "id": "osi-vs-tcpip-layer-mapping",
  "level": 3
}, {
  "value": "OSI vs TCP/IP: Detailed Comparison",
  "id": "osi-vs-tcpip-detailed-comparison",
  "level": 3
}, {
  "value": "Why TCP/IP Won",
  "id": "why-tcpip-won",
  "level": 3
}, {
  "value": "OSI vs TCP/IP: Quotation",
  "id": "osi-vs-tcpip-quotation",
  "level": 3
}, {
  "value": "Dry Run: TCP/IP Encapsulation",
  "id": "dry-run-tcpip-encapsulation",
  "level": 3
}, {
  "value": "1.8 Network Protocols Overview",
  "id": "18-network-protocols-overview",
  "level": 2
}, {
  "value": "1.8.1 Major Protocols by Layer",
  "id": "181-major-protocols-by-layer",
  "level": 3
}, {
  "value": "1.8.2 Protocol vs Interface",
  "id": "182-protocol-vs-interface",
  "level": 3
}, {
  "value": "1.8.3 Multiplexing and Demultiplexing",
  "id": "183-multiplexing-and-demultiplexing",
  "level": 3
}, {
  "value": "1.8.4 Protocol Classification",
  "id": "184-protocol-classification",
  "level": 3
}, {
  "value": "Pseudocode: Simple Protocol Simulator",
  "id": "pseudocode-simple-protocol-simulator",
  "level": 3
}, {
  "value": "TypeScript Implementation: BandwidthLatencyCalculator",
  "id": "typescript-implementation-bandwidthlatencycalculator",
  "level": 3
}, {
  "value": "1.9 Interview Corner",
  "id": "19-interview-corner",
  "level": 2
}, {
  "value": "Q1: Why does the OSI model have 7 layers while TCP/IP has only 4?",
  "id": "q1-why-does-the-osi-model-have-7-layers-while-tcpip-has-only-4",
  "level": 3
}, {
  "value": "Q2: Why are network layers useful? Wouldn&#39;t direct communication be simpler?",
  "id": "q2-why-are-network-layers-useful-wouldnt-direct-communication-be-simpler",
  "level": 3
}, {
  "value": "Q3: What is the difference between a protocol and an interface?",
  "id": "q3-what-is-the-difference-between-a-protocol-and-an-interface",
  "level": 3
}, {
  "value": "Q4: Explain multiplexing in computer networks.",
  "id": "q4-explain-multiplexing-in-computer-networks",
  "level": 3
}, {
  "value": "Q5: What is the difference between a hub, a switch, and a router?",
  "id": "q5-what-is-the-difference-between-a-hub-a-switch-and-a-router",
  "level": 3
}, {
  "value": "Q6: What happens if you send 1 GB of data over a network with 1500 byte MTU?",
  "id": "q6-what-happens-if-you-send-1-gb-of-data-over-a-network-with-1500-byte-mtu",
  "level": 3
}, {
  "value": "1.10 Applications in Real Systems",
  "id": "110-applications-in-real-systems",
  "level": 2
}, {
  "value": "The Internet Uses TCP/IP",
  "id": "the-internet-uses-tcpip",
  "level": 3
}, {
  "value": "OSI in Teaching and Reference",
  "id": "osi-in-teaching-and-reference",
  "level": 3
}, {
  "value": "Real-World Protocol Stack: Loading a Web Page",
  "id": "real-world-protocol-stack-loading-a-web-page",
  "level": 3
}, {
  "value": "1.11 Standardization",
  "id": "111-standardization",
  "level": 2
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
  "value": "Case Study: Designing a Scalable Office Network",
  "id": "case-study-designing-a-scalable-office-network",
  "level": 2
}, {
  "value": "Scenario",
  "id": "scenario",
  "level": 3
}, {
  "value": "Requirements",
  "id": "requirements",
  "level": 3
}, {
  "value": "Solution",
  "id": "solution",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 3
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
        id: "chapter-1-introduction-to-computer-networks",
        children: "Chapter 1: Introduction to Computer Networks"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prerequisites:"
        }), " None | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/computer-networks/02-physical-layer",
          children: "Chapter 2: Physical Layer"
        }), " → From network models to transmission media"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the fundamental uses of computer networks in commercial, residential, and research contexts."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between local-area, metropolitan-area, and wide-area networks and characterize their scale and performance properties."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the concepts of protocol layering, service models, and encapsulation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare the OSI reference model and the TCP/IP protocol suite with respect to layer count, naming, and design philosophy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify the key standards organizations and their roles in Internet standardization."
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
            children: "Network Classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LAN, MAN, WAN differ by geographic span, topology, and performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose LAN for buildings, WAN for global reach, MAN for metropolitan aggregation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol Layering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Layers provide services to the layer above using protocols at the same layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulation (adding headers at each layer) is the core mechanism of layered communication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OSI Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7-layer conceptual model: Physical through Application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Useful as pedagogical framework; TCP/IP is the deployed reality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TCP/IP Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-layer model: Link, Internet, Transport, Application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The architecture of the actual Internet; minimalist and implementation-driven"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each layer adds its header to the payload before passing down"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trace headers to debug network issues → look at the right layer for the right problem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network Topologies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bus, star, ring, mesh, tree, hybrid → each with trade-offs in cost, reliability, scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Star is dominant in LANs; mesh in WAN backbones for fault tolerance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standardization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IETF, IEEE, ITU-T, ISO develop open standards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RFCs are the definitive specification for Internet protocols"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Network Definition] --> B[Network Types]\n    B --> C[LAN / MAN / WAN / PAN]\n    A --> D[Network Topologies]\n    D --> E[Bus / Star / Ring / Mesh / Tree / Hybrid]\n    A --> F[Protocol Hierarchies]\n    F --> G[Encapsulation]\n    F --> H[Connection vs Connectionless]\n    A --> I[Reference Models]\n    I --> J[OSI 7-Layer]\n    I --> K[TCP/IP 4-Layer]\n    A --> L[Protocols Overview]\n    A --> M[Standards Organizations]\n    M --> N[IETF / IEEE / ITU-T / ISO]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "protocol-stack-layers-styled",
      children: "Protocol Stack Layers (Styled)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Application[\"Application Layer (L7)\"]\n        HTTP[\"HTTP / HTTPS<br/>Port 80 / 443\"]\n        DNS[\"DNS<br/>Port 53\"]\n        SMTP[\"SMTP<br/>Port 25\"]\n    end\n\n    subgraph Transport[\"Transport Layer (L4)\"]\n        TCP[\"TCP<br/>Reliable, Connection-oriented\"]\n        UDP[\"UDP<br/>Best-effort, Connectionless\"]\n    end\n\n    subgraph Network[\"Network Layer (L3)\"]\n        IP[\"IP (v4 / v6)<br/>Logical Addressing &amp; Routing\"]\n        ICMP[\"ICMP<br/>Error Reporting &amp; Diagnostics\"]\n        ARP[\"ARP<br/>Address Resolution\"]\n    end\n\n    subgraph Link[\"Data Link Layer (L2)\"]\n        Eth[\"Ethernet<br/>Framing, MAC, CRC\"]\n        WiFi[\"WiFi 802.11<br/>CSMA/CA\"]\n        PPP[\"PPP<br/>Point-to-Point\"]\n    end\n\n    subgraph Physical[\"Physical Layer (L1)\"]\n        Copper[\"Twisted Pair / Coax<br/>Electrical signals\"]\n        Fiber[\"Optical Fiber<br/>Light pulses\"]\n        Radio[\"Radio / Microwave<br/>Electromagnetic waves\"]\n    end\n\n    Application --> Transport --> Network --> Link --> Physical\n\n    classDef app fill:#e1f5fe,stroke:#0288d1,stroke-width:2px\n    classDef trans fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px\n    classDef net fill:#fff3e0,stroke:#e65100,stroke-width:2px\n    classDef link fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px\n    classDef phy fill:#fce4ec,stroke:#c62828,stroke-width:2px\n\n    class Application app\n    class Transport trans\n    class Network net\n    class Link link\n    class Physical phy\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-what-is-a-computer-network",
      children: "1.1 What Is a Computer Network?"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "computer network"
      }), " is an interconnected collection of autonomous computers that exchange data and share resources. Two computers are said to be ", (0,jsx_runtime.jsx)(_components.em, {
        children: "interconnected"
      }), " if they can exchange information. The connection can be via copper wire, fiber optic cable, radio waves, or satellite links."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Autonomous:"
        }), " Each device can operate independently → no device has absolute control over another."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interconnected:"
        }), " Physical or wireless medium exists for data transfer."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shared resources:"
        }), " Printers, files, storage, processing power, and bandwidth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rules (protocols):"
        }), " Agreed-upon formats and procedures govern communication."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-the-postal-system",
      children: "Real-World Analogy: The Postal System"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Network Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Postal System Equivalent"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Application data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Letter content"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Encapsulation (headers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Envelope with address, stamp, return address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Source address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Sender's return address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Destination address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Recipient's address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Network layer (routing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Postal sorting facility routing letters by ZIP code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Data link layer (local delivery)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Mail carrier delivering to specific mailbox"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Physical layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Truck, airplane, or bicycle moving the letter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Rule: envelope must have stamp, address format"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Error detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Return-to-sender if address is invalid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Connection-oriented (TCP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Registered mail → tracking, confirmation, retransmission if lost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Connectionless (UDP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Regular postcard → no tracking, no guarantee"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Just as the postal system hides the complexity of transportation (you don't need to know how your letter moves between cities), network layers hide the complexity of data transmission."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "network-components",
      children: "Network Components"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Host"
            }), " (end system)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs user applications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Desktop, server, smartphone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Router"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forwards packets between networks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cisco ISR, home WiFi router"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Switch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forwards frames within a single network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethernet switch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hub"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeats signals to all ports (obsolete)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Passive hub"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Access Point"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bridges wireless to wired network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WiFi AP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Modem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modulates/demodulates signals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DOCSIS cable modem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transmission Medium"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carries the signal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cat-6 cable, fiber, radio"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-simple-network-node",
      children: "C++ Implementation: Simple Network Node"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <vector>\n#include <queue>\n\nusing namespace std;\n\n// Represents a data packet\nstruct Packet {\n    int id;\n    string source;\n    string destination;\n    string payload;\n    int ttl; // time-to-live to prevent infinite loops\n\n    Packet(int i, string src, string dst, string data)\n        : id(i), source(src), destination(dst), payload(data), ttl(64) {}\n};\n\n// A network node that can send/receive packets\nclass NetworkNode {\nprivate:\n    string address;\n    queue<Packet> buffer; // incoming packet buffer\n\npublic:\n    NetworkNode(const string& addr) : address(addr) {}\n\n    string getAddress() const { return address; }\n\n    // Receive a packet into buffer\n    void receive(const Packet& pkt) {\n        buffer.push(pkt);\n        cout << \"[\" << address << \"] RECEIVED packet #\" << pkt.id\n             << \" from \" << pkt.source << \": \" << pkt.payload << endl;\n    }\n\n    // Send a packet to a destination via a link (another node)\n    bool send(NetworkNode& dest, const Packet& pkt) {\n        if (pkt.ttl <= 0) {\n            cout << \"[\" << address << \"] DROPPED packet #\" << pkt.id\n                 << \" (TTL expired)\" << endl;\n            return false;\n        }\n        Packet forwarded = pkt;\n        forwarded.ttl--;\n        cout << \"[\" << address << \"] FORWARDED packet #\" << pkt.id\n             << \" to \" << dest.getAddress() << \" (TTL=\" << forwarded.ttl << \")\" << endl;\n        dest.receive(forwarded);\n        return true;\n    }\n\n    // Process all packets in buffer\n    void processBuffer() {\n        while (!buffer.empty()) {\n            Packet pkt = buffer.front();\n            buffer.pop();\n            cout << \"[\" << address << \"] PROCESSED: \" << pkt.payload << endl;\n        }\n    }\n};\n\nint main() {\n    NetworkNode alice(\"192.168.1.10\");\n    NetworkNode bob(\"192.168.1.20\");\n    NetworkNode router(\"10.0.0.1\");\n\n    Packet pkt(1, alice.getAddress(), bob.getAddress(), \"Hello, Bob!\");\n\n    cout << \"=== Simple Network Simulation ===\\n\\n\";\n\n    // Alice sends to Bob through a router\n    alice.send(router, pkt);  // step 1: Alice -> router\n    router.send(bob, pkt);    // step 2: router -> Bob\n    bob.processBuffer();      // Bob reads the message\n\n    cout << \"\\n=== Simulation Complete ===\" << endl;\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output trace:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== Simple Network Simulation ===\n\n[192.168.1.10] FORWARDED packet #1 to 10.0.0.1 (TTL=63)\n[10.0.0.1] RECEIVED packet #1 from 192.168.1.10: Hello, Bob!\n[10.0.0.1] FORWARDED packet #1 to 192.168.1.20 (TTL=62)\n[192.168.1.20] RECEIVED packet #1 from 192.168.1.10: Hello, Bob!\n[192.168.1.20] PROCESSED: Hello, Bob!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-simple-network-node",
      children: "Python Implementation: Simple Network Node"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\nfrom collections import deque\nfrom typing import Optional\n\n@dataclass\nclass Packet:\n    id: int\n    source: str\n    destination: str\n    payload: str\n    ttl: int = 64\n\nclass NetworkNode:\n    def __init__(self, address: str):\n        self.address = address\n        self.buffer: deque[Packet] = deque()\n\n    def receive(self, pkt: Packet) -> None:\n        self.buffer.append(pkt)\n        print(f\"[{self.address}] RECEIVED packet #{pkt.id} \"\n              f\"from {pkt.source}: {pkt.payload}\")\n\n    def send(self, dest: 'NetworkNode', pkt: Packet) -> bool:\n        if pkt.ttl <= 0:\n            print(f\"[{self.address}] DROPPED packet #{pkt.id} (TTL expired)\")\n            return False\n        forwarded = Packet(pkt.id, pkt.source, pkt.destination,\n                          pkt.payload, pkt.ttl - 1)\n        print(f\"[{self.address}] FORWARDED packet #{pkt.id} \"\n              f\"to {dest.address} (TTL={forwarded.ttl})\")\n        dest.receive(forwarded)\n        return True\n\n    def process_buffer(self) -> None:\n        while self.buffer:\n            pkt = self.buffer.popleft()\n            print(f\"[{self.address}] PROCESSED: {pkt.payload}\")\n\nif __name__ == \"__main__\":\n    alice = NetworkNode(\"192.168.1.10\")\n    bob = NetworkNode(\"192.168.1.20\")\n    router = NetworkNode(\"10.0.0.1\")\n    pkt = Packet(1, alice.address, bob.address, \"Hello, Bob!\")\n\n    print(\"=== Simple Network Simulation ===\\n\")\n    alice.send(router, pkt)\n    router.send(bob, pkt)\n    bob.process_buffer()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time complexity (per hop):"
        }), " O(1) → constant-time enqueue/dequeue and forwarding."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time complexity (end-to-end):"
        }), " O(N) where N = number of hops → each intermediate node processes once."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space complexity:"
        }), " O(B) where B = buffer size → packets wait in queue until processed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why O(N) for end-to-end?"
        }), " Each hop processing time is constant, but the number of hops scales linearly with network path length. In the worst case, a packet traverses N routers between source and destination."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-of-computer-networks",
      children: "Advantages of Computer Networks"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resource sharing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Printers, storage, compute power shared across devices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost reduction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared peripherals eliminate duplicate purchases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reliability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redundant paths prevent single-point failure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add nodes incrementally without redesign"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Communication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email, instant messaging, video conferencing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Software updates, backups, security policies from one point"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "disadvantages-of-computer-networks",
      children: "Disadvantages of Computer Networks"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security exposure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More entry points for attackers; data in transit can be intercepted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design, deployment, and troubleshooting require specialized knowledge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network failure halts all connected services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Propagation of errors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malware spreads rapidly across connected devices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost of infrastructure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switches, routers, cabling, and licensed software add up"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-networking",
      children: "Edge Cases in Networking"
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Network congestion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Too much data for available bandwidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flow control, congestion avoidance (TCP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Packet loss"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packets dropped due to buffer overflow or noise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retransmission (TCP), forward error correction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Out-of-order delivery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packets arrive in a different order than sent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequence numbers, reorder buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Duplication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same packet arrives multiple times"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate detection via sequence numbers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Corruption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bits flipped during transmission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checksums, CRC at data link and transport layers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Node failure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Router or switch goes offline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic routing protocols reroute traffic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Loops"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packet circulates indefinitely"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TTL field, spanning tree protocol"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-network-types",
      children: "1.2 Network Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Networks are classified by geographical span, transmission technology, and switching technique."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-personal-area-network-pan",
      children: "1.2.1 Personal-Area Network (PAN)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Range:"
        }), " ~10 meters"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Purpose:"
        }), " Connect personal devices (phone, laptop, smartwatch, headphones)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Technology:"
        }), " Bluetooth, USB, Zigbee, IR"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data rate:"
        }), " 1–100 Mbps (Bluetooth 5: 2 Mbps; USB 3.0: 5 Gbps)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " Smartphone tethering to laptop via Bluetooth"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-local-area-network-lan",
      children: "1.2.2 Local-Area Network (LAN)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Range:"
        }), " Single building/campus, < 1 km"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Purpose:"
        }), " Connect computers within an organization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Technology:"
        }), " Ethernet (IEEE 802.3), WiFi (IEEE 802.11)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data rate:"
        }), " 100 Mbps to 100 Gbps"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Propagation delay:"
        }), " Microseconds"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Topology:"
        }), " Star (dominant), bus (legacy)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ownership:"
        }), " Single organization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " Office network with 200 workstations connected to a central switch"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "123-metropolitan-area-network-man",
      children: "1.2.3 Metropolitan-Area Network (MAN)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Range:"
        }), " City/metropolitan region, 5–50 km"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Purpose:"
        }), " Aggregate LANs from multiple locations across a city"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Technology:"
        }), " Fiber optic rings (SONET/SDH), DOCSIS cable, WiMAX"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data rate:"
        }), " 100 Mbps to 10 Gbps"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Propagation delay:"
        }), " Milliseconds"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ownership:"
        }), " Service provider or consortium"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " Cable TV network upgraded to provide Internet across a city"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "124-wide-area-network-wan",
      children: "1.2.4 Wide-Area Network (WAN)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Range:"
        }), " National/international (unlimited)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Purpose:"
        }), " Connect geographically dispersed sites"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Technology:"
        }), " Leased lines, fiber optic submarine cables, satellite"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data rate:"
        }), " 1 Mbps to 400 Gbps (submarine cables)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Propagation delay:"
        }), " 10–200 ms (cross-continent)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Topology:"
        }), " Mesh (routers interconnected for redundancy)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ownership:"
        }), " Multiple organizations, telecom carriers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " The Internet itself → the largest WAN in existence"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-transportation-network",
      children: "Real-World Analogy: Transportation Network"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Network Scale"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Transportation Equivalent"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "PAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Person walking between two rooms in the same house"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "LAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Cars within a neighborhood → local streets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "MAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "City bus system → covers the metro area"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "WAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Interstate highway system connecting cities nationwide"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Internet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Global airline network connecting every country"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lan-vs-man-vs-wan-comparison-table",
      children: "LAN vs MAN vs WAN: Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LAN"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MAN"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "WAN"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Geographic span"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 1 km (building/campus)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5–50 km (city)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited (country/world)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Typical data rate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 Mbps – 100 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 Mbps – 10 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 Mbps – 400 Gbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Propagation delay"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microseconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Milliseconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10–200 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Error rate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very low (10⁻¹¹ – 10⁻¹²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (10⁻¹⁰ – 10⁻¹¹)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (10⁻⁶ – 10⁻¹⁰)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ownership"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single organization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider or consortium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple carriers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Topology"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Star (dominant)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ring, star"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mesh"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Media"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Twisted pair, fiber, WiFi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fiber, coax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fiber, satellite, leased line"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Routing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple (switched)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex (dynamic routing)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Maintenance cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scalability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hundreds of nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thousands"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Millions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example technology"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethernet, WiFi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DOCSIS, SONET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPLS, SD-WAN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Standards body"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IEEE 802.3/802.11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IEEE, ITU-T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IETF, ITU-T"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-network-type-simulator-with-congestion",
      children: "C++: Network Type Simulator with Congestion"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <thread>\n#include <chrono>\n\nusing namespace std;\n\nclass NetworkSimulator {\nprivate:\n    string type; // LAN, MAN, or WAN\n    double bandwidthMbps;\n    double latencyMs;\n    double errorRate; // probability of packet loss\n\npublic:\n    NetworkSimulator(string t, double bw, double lat, double err)\n        : type(t), bandwidthMbps(bw), latencyMs(lat), errorRate(err) {}\n\n    // Simulate sending a message of given size (KB)\n    bool sendMessage(int sizeKB, int concurrentFlows) {\n        double effectiveBW = bandwidthMbps / concurrentFlows;\n        double transferTimeSec = (sizeKB * 8.0) / (effectiveBW * 1000.0); // KB to Mb conversion\n        double totalTimeMs = (transferTimeSec * 1000.0) + latencyMs;\n\n        bool lost = (rand() / (double)RAND_MAX) < errorRate;\n        if (lost) {\n            cout << \"[\" << type << \"] PACKET LOST (error rate=\" << errorRate << \")\\n\";\n            return false;\n        }\n\n        cout << \"[\" << type << \"] Sent \" << sizeKB << \" KB in \"\n             << totalTimeMs << \" ms (BW=\" << effectiveBW\n             << \" Mbps, latency=\" << latencyMs << \" ms)\\n\";\n        return true;\n    }\n\n    // Simulate congestion: increase concurrent flows\n    void testCongestion(int baseSizeKB) {\n        cout << \"\\n=== Congestion Test: \" << type << \" ===\\n\";\n        for (int flows = 1; flows <= 10; flows += 3) {\n            double totalTime = 0;\n            int successCount = 0;\n            for (int i = 0; i < flows; i++) {\n                if (sendMessage(baseSizeKB, flows)) successCount++;\n            }\n            cout << \"Flows=\" << flows << \" Success=\" << successCount\n                 << \"/\" << flows << \"\\n\";\n        }\n    }\n};\n\nint main() {\n    srand(time(0));\n\n    // LAN: high bandwidth, low latency, low error\n    NetworkSimulator lan(\"LAN\", 1000.0, 0.5, 0.0001);\n    // MAN: moderate bandwidth, moderate latency\n    NetworkSimulator man(\"MAN\", 100.0, 5.0, 0.001);\n    // WAN: lower bandwidth, high latency, higher error\n    NetworkSimulator wan(\"WAN\", 10.0, 50.0, 0.01);\n\n    cout << \"=== Network Type Performance Comparison ===\\n\";\n\n    // Test each network with a 100 KB message\n    cout << \"\\n--- Single Message (100 KB) ---\\n\";\n    lan.sendMessage(100, 1);\n    man.sendMessage(100, 1);\n    wan.sendMessage(100, 1);\n\n    // Congestion test\n    lan.testCongestion(100);\n    man.testCongestion(100);\n    wan.testCongestion(100);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-network-type-simulator",
      children: "Python: Network Type Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import random\nimport time\nfrom typing import Optional\n\nclass NetworkSimulator:\n    def __init__(self, net_type: str, bandwidth_mbps: float,\n                 latency_ms: float, error_rate: float):\n        self.type = net_type\n        self.bandwidth_mbps = bandwidth_mbps\n        self.latency_ms = latency_ms\n        self.error_rate = error_rate\n\n    def send_message(self, size_kb: int,\n                     concurrent_flows: int = 1) -> tuple[bool, float]:\n        effective_bw = self.bandwidth_mbps / concurrent_flows\n        transfer_time_s = (size_kb * 8.0) / (effective_bw * 1000.0)\n        total_time_ms = (transfer_time_s * 1000.0) + self.latency_ms\n\n        lost = random.random() < self.error_rate\n        if lost:\n            print(f\"[{self.type}] PACKET LOST (error_rate={self.error_rate})\")\n            return False, 0.0\n\n        print(f\"[{self.type}] Sent {size_kb} KB in {total_time_ms:.2f} ms \"\n              f\"(BW={effective_bw:.1f} Mbps, latency={self.latency_ms} ms)\")\n        return True, total_time_ms\n\n    def congestion_test(self, base_size_kb: int = 100):\n        print(f\"\\n=== Congestion Test: {self.type} ===\")\n        for flows in range(1, 11, 3):\n            successes = 0\n            for _ in range(flows):\n                ok, _ = self.send_message(base_size_kb, flows)\n                if ok:\n                    successes += 1\n            print(f\"  Flows={flows}  Success={successes}/{flows}\")\n\nif __name__ == \"__main__\":\n    random.seed(time.time())\n    lan = NetworkSimulator(\"LAN\", 1000.0, 0.5, 0.0001)\n    man = NetworkSimulator(\"MAN\", 100.0, 5.0, 0.001)\n    wan = NetworkSimulator(\"WAN\", 10.0, 50.0, 0.01)\n\n    print(\"=== Network Type Performance Comparison ===\\n\")\n    for name, net in [(\"LAN\", lan), (\"MAN\", man), (\"WAN\", wan)]:\n        print(f\"\\n--- {name}: 100 KB message ---\")\n        net.send_message(100)\n        net.congestion_test()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity analysis of simulation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time per message:"
        }), " O(1) → constant arithmetic for transfer time calculation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(1) → no additional memory scales with input."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why constant?"
        }), " The simulation is analytical, not packet-level. We compute theoretical transfer time from bandwidth, latency, and message size using a closed-form formula."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-for-network-types",
      children: "Edge Cases for Network Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LAN"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MAN"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "WAN"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Link failure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch redundancy via STP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SONET rings self-heal in 50 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic routing (OSPF/BGP) finds alternate path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Congestion collapse"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-duplex switches eliminate collisions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DOCSIS upstream congestion in peak hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP congestion control reduces window size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Latency spike"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negligible (sub-millisecond)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bufferbloat in cable modems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Satellite link adds 250+ ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Jitter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very low (< 0.1 ms)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (variable queueing delay)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Packet loss burst"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare on wired; common on WiFi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coax noise ingress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fiber cut causes total loss"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-network-topologies",
      children: "1.3 Network Topologies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "network topology"
      }), " describes the physical or logical arrangement of links and nodes in a network. Topology determines how devices communicate, how faults propagate, and how easily the network can scale."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-city-transportation",
      children: "Real-World Analogy: City Transportation"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topology"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Transportation Equivalent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Property"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single bus route shared by all passengers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared medium, one at a time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Star"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All roads lead to a central train station"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Central hub, all traffic passes through"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circular bus route, one direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential, passes stops in order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mesh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every house connected to every other by a direct road"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct paths, maximum redundancy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highway with branching local roads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical, root carries all upstream traffic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "City with buses, trains, and bikes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mix of modes for different needs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "131-bus-topology",
      children: "1.3.1 Bus Topology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All nodes connect to a single shared cable (the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "bus"
      }), " / ", (0,jsx_runtime.jsx)(_components.em, {
        children: "backbone"
      }), "). Only one node can transmit at a time; collisions occur when two transmit simultaneously."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simple to install → single cable runs past all nodes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low cable cost → N nodes need N+1 connections"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Easy to extend → tap into the backbone"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disadvantages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single point of failure → backbone break brings down entire network"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Limited length → signal degrades after ~500 m (10Base2)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance collapses under load → collisions increase exponentially"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Troubleshooting is difficult → fault isolation requires checking the entire cable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Data transmission steps (numbered):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Node A has data to send; it listens for carrier signal on the bus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If no carrier sensed (idle), Node A begins transmission."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Signal propagates in both directions along the bus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All other nodes receive the signal; each checks destination address."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If two nodes transmit simultaneously, a collision occurs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nodes detect collision, emit jam signal, wait random backoff time (CSMA/CD), retry."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace table → Bus transmission (Node A → Node C):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bus State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Nodes Sensing"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node A checks bus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node A starts transmitting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUSY (A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A sends, B/C/D listen"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signal reaches B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUSY (A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C/D still listen"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signal reaches C, D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUSY (A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C receives, D hears noise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node A finishes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nodes B,C,D check address; C matches, others discard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C processes frame"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "132-star-topology",
      children: "1.3.2 Star Topology"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All nodes connect to a central device (switch or hub). The central device manages all communication."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Easy to install and manage → cables run point-to-point"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fault isolation → one broken cable affects only one node"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scalable → add nodes by connecting to the central device"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High performance → switches give each node dedicated bandwidth"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Centralized monitoring → all traffic visible at the switch"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disadvantages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Central point of failure → switch failure disconnects all nodes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Higher cable cost → each node needs its own cable run"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Switch port limit → maximum nodes limited by port count (expandable via stacking)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Data transmission steps (numbered) → Star with switch:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Node A sends a frame to the switch addressed to Node C."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Switch reads the destination MAC address from the frame header."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Switch looks up MAC address in its forwarding table (CAM table)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If found, switch forwards the frame only to the port where Node C is connected."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If not found, switch ", (0,jsx_runtime.jsx)(_components.em, {
          children: "floods"
        }), " the frame to all ports (except source)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Node C receives the frame; other ports are unaffected."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace table → Star transmission with MAC learning:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Switch CAM Table"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ports Used"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch powers on"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node A sends frame to switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAC_A → Port 1 (learned)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port 1 receives"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch checks CAM for Node C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAC_A → Port 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not found (flood)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch floods frame to Ports 2,3,4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAC_A → Port 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ports 2,3,4 transmit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node C replies to Node A via switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAC_A → Port 1, MAC_C → Port 3 (learned)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port 3 receives"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch looks up MAC_A → found at Port 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAC_A → Port 1, MAC_C → Port 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port 1 only (unicast)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node A receives reply"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAC_A → Port 1, MAC_C → Port 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port 1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "133-ring-topology",
      children: "1.3.3 Ring Topology"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each node connects to exactly two neighbors, forming a closed loop. Data travels in one direction (unidirectional ring) or both (bidirectional ring). Token Ring (IEEE 802.5) and Fiber Distributed Data Interface (FDDI) use ring topology."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ordered access → no collisions (token-passing)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Predictable performance → each node gets deterministic access"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handles heavy load better than bus"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simple routing → data flows in fixed direction"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disadvantages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single node failure breaks the ring (unless dual-ring)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding/removing nodes disrupts the network"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Latency grows with number of nodes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Troubleshooting requires checking each node"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Data transmission steps → Token Ring:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A special frame called a ", (0,jsx_runtime.jsx)(_components.em, {
          children: "token"
        }), " circulates the ring."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Node C, wanting to transmit, seizes the token when it arrives."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Node C changes the token to a data frame, adds destination A."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Frame circulates: C → D → A."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Node A copies the frame, sets the ", (0,jsx_runtime.jsx)(_components.em, {
          children: "acknowledgment"
        }), " bit."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Frame continues around back to C. C examines acknowledgment bit."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C releases a new token, removing its data frame."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace table → Token Ring (C → A):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ring Position"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Token/Data"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token circulating"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reaches C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FREE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C seizes token, sends data to A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C → D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DATA (C→A)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D receives, forwards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D → A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DATA (C→A)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A copies data, sets ACK bit, forwards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A → B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DATA (ACK)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B receives, forwards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B → C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DATA (ACK)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C sees ACK, removes frame, releases new token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C → D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FREE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token passes to D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D → A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FREE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "134-mesh-topology",
      children: "1.3.4 Mesh Topology"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every node has a dedicated point-to-point link to every other node. Full mesh (every node to every other) or partial mesh (selective connections)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maximum reliability → redundant paths; single link failure has no effect"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No traffic contention → each link carries only one conversation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Privacy → data travels on dedicated links, not broadcast"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fault tolerance → routing protocols automatically reroute around failures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disadvantages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extremely high cabling cost → N nodes need N×(N−1)/2 links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complex installation and management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each node needs N−1 I/O ports"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not practical beyond ~8–10 nodes for full mesh"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Typically used only for backbone routers (partial mesh)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cabling cost formula:"
      }), " For N nodes in full mesh:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Number of links = N × (N − 1) / 2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ports per node = N − 1"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Nodes"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Links Required"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ports per Node"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "496"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "31"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4,950"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "135-tree-topology",
      children: "1.3.5 Tree Topology"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A hierarchical structure combining multiple star topologies connected to a central root bus. Common in large enterprise networks (spanning tree protocol organizes Ethernet into a tree)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scalable → add leaf nodes without affecting upper levels"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hierarchical management → each branch can be administered separately"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Point-to-point wiring for individual segments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Easy to extend → new branches attach to existing backbone"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disadvantages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Root failure brings down entire network"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Heavier traffic at higher levels (root bottleneck)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration complexity increases with depth"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backbone cable is critical → failure splits the tree"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Data transmission steps → Tree:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Node in Leaf-1A sends data to Node in Leaf-2B."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Frame travels Leaf-1A → Branch-1 Switch → Root Switch."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Root Switch forwards to Branch-2 Switch."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Branch-2 Switch forwards to Leaf-2 Switch."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Leaf-2 Switch delivers to destination node."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry run → Tree topology (Leaf-1A → Leaf-2B, 5 KB data):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaf-1A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulate frame addressed to Leaf-2B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[L2 Hdr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaf-1 Switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lookup Leaf-2B MAC → forward to Branch-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forwarded to root port"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Branch-1 Switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward to Root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Upstream"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root Switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lookup → forward to Branch-2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Downstream"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Branch-2 Switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward to Leaf-2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Downstream"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaf-2 Switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deliver to Leaf-2B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frame received"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "136-hybrid-topology",
      children: "1.3.6 Hybrid Topology"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Combination of two or more basic topologies. Example: a star-bus hybrid where several star networks connect via a bus backbone."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flexible → tailor topology to specific needs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reliable → one segment failure doesn't affect others"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scalable → grow in modular fashion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Common in real-world deployments"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disadvantages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complex design and management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Higher cost than single topology"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requires compatible hardware between segments"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-networktopologybuilder",
      children: "TypeScript Implementation: NetworkTopologyBuilder"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following TypeScript class demonstrates how to model different network topologies, compute link counts, and validate scalability constraints."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * NetworkTopologyBuilder — Computes topology properties (link counts, adjacency)\n * for star, ring, mesh, and bus topologies.\n */\ninterface TopologyResult {\n  topology: string;\n  nodeCount: number;\n  linkCount: number;\n  linksPerNode: number;\n  isScalable: boolean;\n  maxRecommendedNodes: number;\n}\n\nclass NetworkTopologyBuilder {\n  /** Star: N nodes need N-1 links (each node → central switch) */\n  static buildStar(nodeCount: number): TopologyResult {\n    const linkCount = nodeCount - 1;\n    return {\n      topology: 'Star',\n      nodeCount,\n      linkCount,\n      linksPerNode: 1,          // each leaf has one connection\n      isScalable: nodeCount <= 1000,\n      maxRecommendedNodes: 1000 // switch port limit\n    };\n  }\n\n  /** Ring: N nodes each connect to 2 neighbours → N links */\n  static buildRing(nodeCount: number): TopologyResult {\n    const linkCount = nodeCount;\n    return {\n      topology: 'Ring',\n      nodeCount,\n      linkCount,\n      linksPerNode: 2,\n      isScalable: nodeCount <= 200,\n      maxRecommendedNodes: 200  // latency grows linearly\n    };\n  }\n\n  /** Full mesh: N(N-1)/2 links */\n  static buildMesh(nodeCount: number): TopologyResult {\n    const linkCount = (nodeCount * (nodeCount - 1)) / 2;\n    return {\n      topology: 'Full Mesh',\n      nodeCount,\n      linkCount,\n      linksPerNode: nodeCount - 1,\n      isScalable: nodeCount <= 10,\n      maxRecommendedNodes: 10   // quadratic growth\n    };\n  }\n\n  /** Bus: single backbone, N tap connections */\n  static buildBus(nodeCount: number): TopologyResult {\n    const linkCount = nodeCount + 1; // backbone + N taps\n    return {\n      topology: 'Bus',\n      nodeCount,\n      linkCount,\n      linksPerNode: 1,\n      isScalable: nodeCount <= 30,\n      maxRecommendedNodes: 30   // collision domain limit\n    };\n  }\n\n  /** Print formatted comparison across topologies */\n  static compare(nodeCount: number): void {\n    const topologies = [\n      this.buildStar(nodeCount),\n      this.buildRing(nodeCount),\n      this.buildMesh(nodeCount),\n      this.buildBus(nodeCount)\n    ];\n    console.log(`\\n=== Topology Comparison (N=${nodeCount} nodes) ===`);\n    console.log('Topology    | Links | Links/Node | Scalable | Max Rec.');\n    console.log('------------|-------|------------|----------|----------');\n    for (const t of topologies) {\n      console.log(\n        `${t.topology.padEnd(11)} | ${String(t.linkCount).padEnd(5)} | ` +\n        `${String(t.linksPerNode).padEnd(10)} | ${String(t.isScalable).padEnd(8)} | ` +\n        `${t.maxRecommendedNodes}`\n      );\n    }\n  }\n}\n\n// Demonstration\nNetworkTopologyBuilder.compare(8);\nNetworkTopologyBuilder.compare(50);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== Topology Comparison (N=8 nodes) ===\nTopology    | Links | Links/Node | Scalable | Max Rec.\n------------|-------|------------|----------|----------\nStar        | 7     | 1          | true     | 1000\nRing        | 8     | 2          | true     | 200\nFull Mesh   | 28    | 7          | true     | 10\nBus         | 9     | 1          | true     | 30\n\n=== Topology Comparison (N=50 nodes) ===\nTopology    | Links | Links/Node | Scalable | Max Rec.\n------------|-------|------------|----------|----------\nStar        | 49    | 1          | true     | 1000\nRing        | 50    | 2          | true     | 200\nFull Mesh   | 1225  | 49         | false    | 10\nBus         | 51    | 1          | false    | 30\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "topologies-comparison-table",
      children: "Topologies Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bus"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Star"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ring"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mesh"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tree"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cabling cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium-high"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Installation complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fault tolerance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (backbone fail = total)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (node fail = 1 node)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (node fail = ring break)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (root fail = total)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scalability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (>30 nodes degrades)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (switch port limit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (quadratic links)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Traffic pattern"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcast (shared)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hub-and-spoke"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Collisions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (CSMA/CD)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (switched)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (token)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (switched)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data rate per node"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/N of total BW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full port speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed (token hold time)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full link speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full port speed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Troubleshooting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-world use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy Ethernet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern LANs, WiFi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FDDI, SONET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WAN routers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise campuses"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-topology-simulator",
      children: "C++: Topology Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <queue>\n#include <algorithm>\n#include <map>\n\nusing namespace std;\n\n// Simulates data flow in different topologies\nclass TopologySimulator {\npublic:\n    // Bus: data travels on shared medium\n    static void busTransmission(int sender, vector<int>& receivers) {\n        cout << \"[BUS] Node \" << sender << \" broadcasts to bus\\n\";\n        for (int r : receivers) {\n            cout << \"[BUS] Node \" << r << \" receives (checks address)\\n\";\n        }\n        cout << \"[BUS] Bus now idle\\n\";\n    }\n\n    // Star: data through central switch\n    static void starTransmission(int sender, int receiver,\n                                  int totalNodes) {\n        cout << \"[STAR] Node \" << sender << \" -> Switch -> Node \"\n             << receiver << \"\\n\";\n        cout << \"[STAR] Switch performs MAC lookup\\n\";\n        cout << \"[STAR] Forwarded only to port \" << receiver << \"\\n\";\n    }\n\n    // Ring: data passes through intermediate nodes\n    static void ringTransmission(int sender, int receiver, int totalNodes) {\n        vector<int> path;\n        int current = sender;\n        while (current != receiver) {\n            path.push_back(current);\n            current = (current + 1) % totalNodes;\n        }\n        path.push_back(receiver);\n\n        cout << \"[RING] Token seized at Node \" << sender << \"\\n\";\n        for (size_t i = 0; i < path.size(); i++) {\n            cout << \"[RING] Node \" << path[i] << \" forwards\\n\";\n        }\n        cout << \"[RING] Token released at Node \" << sender << \"\\n\";\n    }\n\n    // Mesh: direct path between any two nodes\n    static void meshTransmission(int n1, int n2) {\n        cout << \"[MESH] Direct link: Node \" << n1 << \" <--> Node \" << n2 << \"\\n\";\n        cout << \"[MESH] No intermediate hops required\\n\";\n        cout << \"[MESH] Dedicated bandwidth available\\n\";\n    }\n\n    // Tree: hierarchical traversal\n    static void treeTransmission(int senderLeaf, int receiverLeaf,\n                                  int branches, int leavesPerBranch) {\n        int sBranch = senderLeaf / leavesPerBranch;\n        int rBranch = receiverLeaf / leavesPerBranch;\n\n        cout << \"[TREE] Leaf \" << senderLeaf << \" -> Branch \" << sBranch << \"\\n\";\n        if (sBranch != rBranch) {\n            cout << \"[TREE] Branch \" << sBranch << \" -> Root\\n\";\n            cout << \"[TREE] Root -> Branch \" << rBranch << \"\\n\";\n        }\n        cout << \"[TREE] Branch \" << rBranch << \" -> Leaf \" << receiverLeaf << \"\\n\";\n    }\n\n    // Failure simulation\n    static void simulateFailure(const string& topology,\n                                 const string& component) {\n        cout << \"\\n=== FAILURE: \" << topology << \" | \" << component << \" ===\\n\";\n        if (topology == \"bus\") {\n            cout << \"Backbone cut -> entire network down\\n\";\n        } else if (topology == \"star\") {\n            cout << \"Central switch dead -> all nodes isolated\\n\";\n        } else if (topology == \"ring\") {\n            cout << \"Node \" << component << \" down -> ring broken\\n\";\n        } else if (topology == \"mesh\") {\n            cout << \"Link failure -> traffic rerouted via alternate path\\n\";\n        } else if (topology == \"tree\") {\n            cout << \"Root failure -> entire tree down\\n\";\n        }\n    }\n};\n\nint main() {\n    cout << \"=== Topology Simulation ===\\n\\n\";\n\n    // Bus: nodes 2,3,4 receive from node 1\n    TopologySimulator::busTransmission(1, {2, 3, 4});\n\n    cout << \"\\n\";\n    TopologySimulator::starTransmission(1, 4, 5);\n\n    cout << \"\\n\";\n    TopologySimulator::ringTransmission(0, 3, 5);\n\n    cout << \"\\n\";\n    TopologySimulator::meshTransmission(7, 12);\n\n    cout << \"\\n\";\n    TopologySimulator::treeTransmission(3, 9, 3, 4);\n\n    // Failure scenarios\n    TopologySimulator::simulateFailure(\"star\", \"switch\");\n    TopologySimulator::simulateFailure(\"mesh\", \"link-7-12\");\n    TopologySimulator::simulateFailure(\"bus\", \"backbone\");\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-topology-simulator",
      children: "Python: Topology Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class TopologySimulator:\n    @staticmethod\n    def bus_transmission(sender: int, receivers: list[int]) -> None:\n        print(f\"[BUS] Node {sender} broadcasts to bus\")\n        for r in receivers:\n            print(f\"[BUS] Node {r} receives and checks address\")\n        print(\"[BUS] Bus now idle\")\n\n    @staticmethod\n    def star_transmission(sender: int, receiver: int) -> None:\n        print(f\"[STAR] Node {sender} -> Switch -> Node {receiver}\")\n        print(\"[STAR] Switch performs MAC lookup, unicasts to receiver port\")\n\n    @staticmethod\n    def ring_transmission(sender: int, receiver: int, total: int) -> None:\n        path = []\n        cur = sender\n        while cur != receiver:\n            path.append(cur)\n            cur = (cur + 1) % total\n        path.append(receiver)\n        print(f\"[RING] Token seized at Node {sender}\")\n        for n in path:\n            print(f\"[RING] Node {n} forwards\")\n        print(f\"[RING] Token released at Node {sender}\")\n\n    @staticmethod\n    def mesh_transmission(n1: int, n2: int) -> None:\n        print(f\"[MESH] Direct link: Node {n1} <--> Node {n2}\")\n\n    @staticmethod\n    def tree_transmission(sender_leaf: int, receiver_leaf: int,\n                         per_branch: int) -> None:\n        s_br = sender_leaf // per_branch\n        r_br = receiver_leaf // per_branch\n        print(f\"[TREE] Leaf {sender_leaf} -> Branch {s_br}\")\n        if s_br != r_br:\n            print(f\"[TREE] Branch {s_br} -> Root -> Branch {r_br}\")\n        print(f\"[TREE] Branch {r_br} -> Leaf {receiver_leaf}\")\n\n    @staticmethod\n    def simulate_failure(topology: str, component: str) -> None:\n        outcomes = {\n            (\"bus\",): \"Backbone cut -> entire network down\",\n            (\"star\",): \"Central switch dead -> all nodes isolated\",\n            (\"ring\",): f\"Node {component} down -> ring broken\",\n            (\"mesh\",): \"Link failure -> traffic rerouted\",\n            (\"tree\",): \"Root failure -> entire tree down\",\n        }\n        print(f\"\\n=== FAILURE: {topology} | {component} ===\")\n        for key, msg in outcomes.items():\n            if topology in key:\n                print(msg)\n\nif __name__ == \"__main__\":\n    print(\"=== Topology Simulation ===\")\n    TopologySimulator.bus_transmission(1, [2, 3, 4])\n    print()\n    TopologySimulator.star_transmission(1, 4)\n    print()\n    TopologySimulator.ring_transmission(0, 3, 5)\n    print()\n    TopologySimulator.mesh_transmission(7, 12)\n    print()\n    TopologySimulator.tree_transmission(3, 9, 4)\n    TopologySimulator.simulate_failure(\"star\", \"switch\")\n    TopologySimulator.simulate_failure(\"mesh\", \"link-7-12\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity analysis of topology simulation:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topology"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Transmission time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcast reaches all N nodes; signal propagates along shared medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Star"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch forwards directly to destination; constant hop count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst case: data traverses all N−1 intermediate nodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mesh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct point-to-point link; constant time regardless of network size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical traversal depth grows logarithmically with leaf count"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why tree is O(log N):"
      }), " In a balanced tree, the number of levels is proportional to log(N) where N = total leaf nodes. A tree with branching factor B has log_B(N) levels. For B = 4 switches per level, 1000 leaves require only ~5 levels of traversal."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-topology-failure-scenarios",
      children: "Edge Cases: Topology Failure Scenarios"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bus"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Star"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ring"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mesh"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tree"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single node fail"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No impact (nodes passive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Affects only that node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Breaks ring -> total failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No impact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No impact"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Link failure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backbone cut = total fail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node cable cut = 1 node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Related node failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reroutes via alternate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Branch link = sub-tree fail"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Central device fail"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total network down"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root switch = total fail"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cable cut"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entire segment down"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single node isolated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ring broken → spanning tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reroutes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sub-tree isolated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overload"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collision storm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch backpressure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token hold time exceeded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Localized to link"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root bottleneck"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "topology-selection-decision-matrix",
      children: "Topology Selection Decision Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best Topology"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Low cost, few nodes (< 20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal cabling, simple installation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High reliability, critical systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mesh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redundant paths, no single point of failure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy management, LAN environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Star"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized monitoring, simple troubleshooting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic access, real-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token-passing guarantees access time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalable enterprise campus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical, modular expansion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Metropolitan/wide area backbone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial mesh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redundancy at manageable cost"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-protocol-hierarchies-and-layering",
      children: "1.4 Protocol Hierarchies and Layering"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "141-what-is-a-protocol",
      children: "1.4.1 What Is a Protocol?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "protocol"
      }), " is a set of rules governing the format and meaning of messages exchanged between two or more communicating entities. Protocols define:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Syntax:"
        }), " Format and structure of data (byte ordering, field sizes)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Semantics:"
        }), " Meaning of each field (e.g., SYN flag means \"synchronize sequence numbers\")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Timing:"
        }), " When data should be sent and how fast (e.g., wait 500 ms for ACK before retransmitting)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-diplomatic-protocol",
      children: "Real-World Analogy: Diplomatic Protocol"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Protocol Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Diplomatic Equivalent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Network Equivalent"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Envelope format, salutation format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packet header structure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Semantics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Your Excellency\" means respect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK means \"data received\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Timing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reply within 24 hours is polite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retransmit if no ACK in 500 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handshake first, then discuss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP three-way handshake before data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "142-protocol-layering",
      children: "1.4.2 Protocol Layering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Complex network communication is broken into a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "stack of layers"
      }), ". Each layer:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Provides a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "service"
        }), " to the layer above."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Uses the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "service"
        }), " of the layer below."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Communicates with its ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "peer"
        }), " on the other machine using a protocol."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered principles of layering:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each layer should perform a well-defined function."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The function of each layer should be chosen to enable international standardization."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Layer boundaries minimize information flow across interfaces."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The number of layers should be large enough to distinct functions, small enough to avoid overhead."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits of layering:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Abstraction:"
        }), " A layer hides implementation details from layers above."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Modularity:"
        }), " One layer can be changed without affecting others (e.g., replace Ethernet with WiFi at the link layer; HTTP still works)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reuse:"
        }), " Layers provide services that multiple upper-layer protocols can use."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standardization:"
        }), " Each layer can be specified independently."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "143-service-primitives",
      children: "1.4.3 Service Primitives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A service is formally defined by a set of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "primitives"
      }), " (operations) that the lower layer provides to the upper layer."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Primitive"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Connection-Oriented"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Connectionless"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LISTEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block waiting for incoming connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CONNECT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Establish a connection with peer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SEND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transmit data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RECEIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block waiting for incoming data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DISCONNECT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tear down connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: Connection-Oriented Communication"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Server side\nprocedure server():\n    addr ← BIND(port=80)          // Reserve port\n    LISTEN(addr)                   // Wait for client\n    conn ← ACCEPT()                // Accept connection\n    while TRUE:\n        data ← RECEIVE(conn)       // Receive data\n        if data = EOF: break\n        PROCESS(data)\n    DISCONNECT(conn)\n\n// Client side\nprocedure client():\n    addr ← RESOLVE(\"example.com\")\n    conn ← CONNECT(addr, port=80)  // Three-way handshake\n    SEND(conn, \"GET /index.html\")\n    data ← RECEIVE(conn)\n    DISCONNECT(conn)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "144-connection-oriented-vs-connectionless-service",
      children: "1.4.4 Connection-Oriented vs Connectionless Service"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Connection-Oriented (TCP)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Connectionless (UDP)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Setup phase"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (three-way handshake)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintained at both ends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reliability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guaranteed delivery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best-effort"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ordering"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preserved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not preserved"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flow control"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (sliding window)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (20-byte header + ACKs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (8-byte header)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Analogy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Telephone call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Postal postcard"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-encapsulation",
      children: "1.5 Encapsulation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Encapsulation"
      }), " is the process where each layer adds its own header (and optionally a trailer) to the data received from the layer above, creating a nested Protocol Data Unit (PDU)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "151-pdu-names-by-layer",
      children: "1.5.1 PDU Names by Layer"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PDU Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Message / Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP request body"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segment (TCP) / Datagram (UDP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP segment with port numbers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packet / Datagram"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP packet with source/destination IP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Link"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frame"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethernet frame with MAC addresses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Physical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bits / Symbols"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Electrical signal on wire"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-encapsulation-process-numbered",
      children: "Step-by-Step Encapsulation Process (Numbered)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Web browser sends \"GET /index.html\" to a web server."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1 → Application layer (HTTP):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Browser creates an HTTP GET request message."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PDU: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[HTTP GET /index.html HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n]"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2 → Transport layer (TCP):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TCP receives the HTTP message as payload."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TCP adds its header containing: source port (49152), destination port (80), sequence number (1000), acknowledgment number (0), checksum."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PDU: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[TCP Hdr | HTTP GET ...]"
        }), " → called a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "segment"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3 → Network layer (IP):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IP receives the TCP segment as payload."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IP adds its header containing: source IP (192.168.1.10), destination IP (93.184.216.34), TTL (64), protocol field (6=TCP)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PDU: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[IP Hdr | TCP Hdr | HTTP GET ...]"
        }), " → called a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "packet"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4 → Data Link layer (Ethernet):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ethernet receives the IP packet as payload."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ethernet adds: destination MAC (AA:BB:CC:DD:EE:FF), source MAC (11:22:33:44:55:66), EtherType (0x0800 = IPv4), and a 4-byte CRC trailer."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PDU: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[Ethernet Hdr | IP Hdr | TCP Hdr | HTTP GET ... | CRC]"
        }), " → called a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "frame"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5 → Physical layer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The frame is converted to bits and transmitted over the physical medium (e.g., electrical signals on Cat-6 cable)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-full-encapsulation-and-de-encapsulation",
      children: "Dry Run Trace: Full Encapsulation and De-encapsulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sending side (encapsulation):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Application:  [GET /index.html]\n                                 ↓  ↓ (TCP adds header)\nTransport:    [SrcPort:49152 | DstPort:80 | Seq:1000 | GET /index.html]\n                                 ↓  ↓ (IP adds header)\nNetwork:      [SrcIP:192.168.1.10 | DstIP:93.184.216.34 | Proto:6 | \n                SrcPort:49152 | DstPort:80 | Seq:1000 | GET /index.html]\n                                 ↓  ↓ (Ethernet adds header + trailer)\nData Link:    [DstMAC:AA:BB:CC:DD:EE:FF | SrcMAC:11:22:33:44:55:66 | Type:0x0800 |\n                SrcIP:192.168.1.10 | DstIP:93.184.216.34 | Proto:6 |\n                SrcPort:49152 | DstPort:80 | Seq:1000 | GET /index.html | CRC32]\n                                 ↓  ↓ (bits on wire)\nPhysical:     10110110 11010101 ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Receiving side (de-encapsulation):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Physical:     10110110 11010101 ...\n                                 ↑  ↑ (NIC reconstructs frame)\nData Link:    [DstMAC:AA:BB:CC:DD:EE:FF | SrcMAC... | Type:0x0800 | ... | CRC32]\n                ↓  ↓ CRC verified OK, EtherType=0x0800 → pass to IP\nNetwork:      [SrcIP:192.168.1.10 | DstIP:93.184.216.34 | Proto:6 | \n                SrcPort:49152 | DstPort:80 | Seq:1000 | GET /index.html]\n                ↓  ↓ DstIP matches, Proto=6 → pass to TCP\nTransport:    [SrcPort:49152 | DstPort:80 | Seq:1000 | GET /index.html]\n                ↓  ↓ Port 80 → deliver to listening web server\nApplication:  [GET /index.html]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-packet-building-with-encapsulation",
      children: "C++: Packet Building with Encapsulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <vector>\n#include <sstream>\n#include <iomanip>\n\nusing namespace std;\n\n// Simulate building a packet through layers\nstruct Packet {\n    string applicationData;\n    string transportHdr;\n    string networkHdr;\n    string datalinkHdr;\n    string datalinkTrailer;\n\n    // Full packet as a concatenated hex string\n    string toHexDump() const {\n        stringstream ss;\n        ss << \"Ethernet Hdr: \" << datalinkHdr << \"\\n\";\n        ss << \"IP Hdr:       \" << networkHdr << \"\\n\";\n        ss << \"TCP Hdr:      \" << transportHdr << \"\\n\";\n        ss << \"Data:         \" << applicationData << \"\\n\";\n        ss << \"CRC32:        \" << datalinkTrailer;\n        return ss.str();\n    }\n};\n\nclass PacketBuilder {\npublic:\n    // Application layer: raw data\n    static string createApplicationData(const string& message) {\n        return message;\n    }\n\n    // Transport layer: add TCP header\n    static string addTCPHeader(const string& data,\n                                int srcPort, int dstPort, int seqNum) {\n        stringstream hdr;\n        hdr << \"SP=\" << srcPort << \" DP=\" << dstPort\n            << \" SEQ=\" << seqNum << \" | \" << data;\n        return hdr.str();\n    }\n\n    // Network layer: add IP header\n    static string addIPHeader(const string& data,\n                               const string& srcIP, const string& dstIP) {\n        stringstream hdr;\n        hdr << \"SRC=\" << srcIP << \" DST=\" << dstIP\n            << \" PROTO=TCP | \" << data;\n        return hdr.str();\n    }\n\n    // Data link layer: add Ethernet header and CRC trailer\n    static pair<string, string> addEthernetHeader(\n        const string& data,\n        const string& srcMAC, const string& dstMAC) {\n        string hdr = \"DMAC=\" + dstMAC + \" SMAC=\" + srcMAC\n                     + \" ET=0x0800 | \" + data;\n        string trailer = \"CRC32=0x\" + to_string(hash<string>{}(data) & 0xFFFF);\n        return {hdr, trailer};\n    }\n\n    // Build a complete packet from application data\n    static Packet build(const string& message,\n                         int srcPort, int dstPort,\n                         const string& srcIP, const string& dstIP,\n                         const string& srcMAC, const string& dstMAC) {\n        Packet pkt;\n        pkt.applicationData = createApplicationData(message);\n\n        string withTCP = addTCPHeader(pkt.applicationData, srcPort, dstPort, 1000);\n        pkt.transportHdr = withTCP;\n\n        string withIP = addIPHeader(withTCP, srcIP, dstIP);\n        pkt.networkHdr = withIP;\n\n        auto [ethHdr, ethTrailer] = addEthernetHeader(withIP, srcMAC, dstMAC);\n        pkt.datalinkHdr = ethHdr;\n        pkt.datalinkTrailer = ethTrailer;\n\n        return pkt;\n    }\n\n    // Simulate de-encapsulation at receiver\n    static void deencapsulate(const Packet& pkt) {\n        cout << \"\\n=== De-encapsulation ===\\n\\n\";\n        cout << \"1. Physical: Bits received from wire\\n\";\n        cout << \"2. Data Link: Verify CRC, extract IP packet\\n\";\n        cout << \"   \" << pkt.datalinkHdr.substr(0, 60) << \"...\\n\";\n        cout << \"3. Network: Check destination IP, extract TCP segment\\n\";\n        cout << \"   \" << pkt.networkHdr.substr(0, 60) << \"...\\n\";\n        cout << \"4. Transport: Deliver to application (port \"\n             << \"80)\\n\";\n        cout << \"   \" << pkt.transportHdr.substr(0, 60) << \"...\\n\";\n        cout << \"5. Application: \" << pkt.applicationData << \"\\n\";\n    }\n};\n\nint main() {\n    Packet pkt = PacketBuilder::build(\n        \"GET /index.html HTTP/1.1\",\n        49152, 80,\n        \"192.168.1.10\", \"93.184.216.34\",\n        \"11:22:33:44:55:66\", \"AA:BB:CC:DD:EE:FF\"\n    );\n\n    cout << \"=== Encapsulation ===\\n\\n\";\n    cout << pkt.toHexDump() << \"\\n\";\n    PacketBuilder::deencapsulate(pkt);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-packet-builder-with-encapsulation",
      children: "Python: Packet Builder with Encapsulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\nfrom typing import Tuple\n\n@dataclass\nclass Packet:\n    application_data: str\n    transport_hdr: str\n    network_hdr: str\n    datalink_hdr: str\n    datalink_trailer: str\n\n    def to_dump(self) -> str:\n        return (\n            f\"Ethernet Hdr: {self.datalink_hdr}\\n\"\n            f\"IP Hdr:       {self.network_hdr}\\n\"\n            f\"TCP Hdr:      {self.transport_hdr}\\n\"\n            f\"Data:         {self.application_data}\\n\"\n            f\"CRC32:        {self.datalink_trailer}\"\n        )\n\n\nclass PacketBuilder:\n    @staticmethod\n    def add_tcp_header(data: str, src_port: int,\n                       dst_port: int, seq: int) -> str:\n        return f\"SP={src_port} DP={dst_port} SEQ={seq} | {data}\"\n\n    @staticmethod\n    def add_ip_header(data: str, src_ip: str, dst_ip: str) -> str:\n        return f\"SRC={src_ip} DST={dst_ip} PROTO=TCP | {data}\"\n\n    @staticmethod\n    def add_ethernet_header(data: str, src_mac: str,\n                            dst_mac: str) -> Tuple[str, str]:\n        hdr = f\"DMAC={dst_mac} SMAC={src_mac} ET=0x0800 | {data}\"\n        trailer = f\"CRC32=0x{hash(data) & 0xFFFF:04x}\"\n        return hdr, trailer\n\n    @classmethod\n    def build(cls, message: str, src_port: int, dst_port: int,\n              src_ip: str, dst_ip: str,\n              src_mac: str, dst_mac: str) -> Packet:\n        data = message\n        tcp = cls.add_tcp_header(data, src_port, dst_port, 1000)\n        ip = cls.add_ip_header(tcp, src_ip, dst_ip)\n        eth, crc = cls.add_ethernet_header(ip, src_mac, dst_mac)\n        return Packet(data, tcp, ip, eth, crc)\n\n    @staticmethod\n    def deencapsulate(pkt: Packet) -> None:\n        print(\"\\n=== De-encapsulation ===\\n\")\n        print(\"1. Physical: Bits received from wire\")\n        print(f\"2. Data Link: Verify CRC, extract IP\")\n        print(f\"   {pkt.datalink_hdr[:60]}...\")\n        print(f\"3. Network: Check dest IP, extract TCP\")\n        print(f\"   {pkt.network_hdr[:60]}...\")\n        print(\"4. Transport: Deliver to application (port 80)\")\n        print(f\"   {pkt.transport_hdr[:60]}...\")\n        print(f\"5. Application: {pkt.application_data}\")\n\nif __name__ == \"__main__\":\n    pkt = PacketBuilder.build(\n        \"GET /index.html HTTP/1.1\",\n        49152, 80,\n        \"192.168.1.10\", \"93.184.216.34\",\n        \"11:22:33:44:55:66\", \"AA:BB:CC:DD:EE:FF\"\n    )\n    print(\"=== Encapsulation ===\\n\")\n    print(pkt.to_dump())\n    PacketBuilder.deencapsulate(pkt)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity analysis of encapsulation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(L) where L = number of layers → constant overhead per layer, each adding O(1) header processing. L is fixed at 5 (application through physical)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(H + D) where H = total header size (~40-60 bytes for TCP/IP/Ethernet) and D = application data size. Headers are constant size per layer."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why O(L) not O(1)?"
        }), " Each layer must process (read, modify, prepend) the PDU. While L is a small constant, the ", (0,jsx_runtime.jsx)(_components.em, {
          children: "act"
        }), " of processing at each layer involves separate protocol logic."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "16-the-osi-reference-model",
      children: "1.6 The OSI Reference Model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Open Systems Interconnection (OSI) model, developed by ISO in 1984, partitions network functionality into seven layers. It is a ", (0,jsx_runtime.jsx)(_components.em, {
        children: "conceptual"
      }), " framework → the actual Internet uses TCP/IP, not OSI."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-international-postal-system",
      children: "Real-World Analogy: International Postal System"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "OSI Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Postal Equivalent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7 → Application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Person writing a letter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates content"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6 → Presentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Translator converting language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encoding, encryption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5 → Session"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choosing mail class (express vs regular)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dialogue control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4 → Transport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post office sorting by city"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End-to-end delivery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3 → Network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting facility routing by ZIP code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finding path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2 → Data Link"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mail carrier on local route"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delivery within neighborhood"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1 → Physical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Truck, plane moving the letter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw transportation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-seven-layers-in-detail",
      children: "The Seven Layers in Detail"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Layer 1 → Physical Layer"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Function:"
        }), " Transmits raw bits over a communication channel."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Concerns:"
        }), " Voltage levels, timing of voltage changes, data rates, maximum transmission distances, physical connectors (RJ-45, LC fiber connector)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hardware:"
        }), " Repeaters, hubs, modems, network interface cards (NIC), transceivers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standards:"
        }), " RS-232, V.35, 1000BASE-T, 10GBASE-SR."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data unit:"
        }), " Bits."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Layer 2 → Data Link Layer"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Function:"
        }), " Reliable transmission of frames between two directly connected nodes. Detects and optionally corrects physical-layer errors."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sub-layers:"
        }), " LLC (Logical Link Control) + MAC (Media Access Control)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Concerns:"
        }), " Framing (adding start/end markers), physical addressing (MAC addresses), error detection (CRC), flow control, medium access (CSMA/CD for Ethernet)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hardware:"
        }), " Switches, bridges, network interface cards."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standards:"
        }), " IEEE 802.3 (Ethernet), 802.11 (WiFi), 802.15 (Bluetooth), PPP."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data unit:"
        }), " Frame."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Layer 3 → Network Layer"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Function:"
        }), " Routes packets from source to destination across multiple networks. Handles logical addressing, fragmentation, and congestion control."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Concerns:"
        }), " Routing algorithms (OSPF, BGP), logical addresses (IP addresses), packet fragmentation/reassembly, TTL, quality of service."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hardware:"
        }), " Routers, Layer 3 switches."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standards:"
        }), " IPv4, IPv6, ICMP, IPsec, ARP."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data unit:"
        }), " Packet."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Layer 4 → Transport Layer"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Function:"
        }), " End-to-end delivery of data between processes on different machines. Provides reliable or unreliable service."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Concerns:"
        }), " Segmentation/reassembly, multiplexing/demultiplexing (port numbers), connection management, flow control (sliding window), error recovery (retransmission)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key protocols:"
        }), " TCP (reliable, connection-oriented), UDP (unreliable, connectionless), SCTP."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data unit:"
        }), " Segment (TCP), Datagram (UDP)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Layer 5 → Session Layer"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Function:"
        }), " Manages sessions (dialogues) between applications. Provides synchronization checkpoints, graceful close, and activity management."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Concerns:"
        }), " Session establishment, maintenance, and termination; dialog control (half-duplex vs full-duplex); checkpoint insertion for recovery."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Examples:"
        }), " NetBIOS, RPC (Remote Procedure Call), PPTP."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data unit:"
        }), " Message."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Layer 6 → Presentation Layer"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Function:"
        }), " Translates between application data format and network format. Handles data encoding, encryption, and compression."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Concerns:"
        }), " Character encoding (ASCII vs EBCDIC vs UTF-8), data compression (zip), encryption (TLS handshake → though TLS lives at the session/presentation boundary in practice)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Examples:"
        }), " SSL/TLS (conceptually), MIME encoding, JPEG/MPEG."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data unit:"
        }), " Message."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Layer 7 → Application Layer"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Function:"
        }), " Provides network services to user applications. This is what the user interacts with."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Concerns:"
        }), " Resource sharing, remote file access, directory services, email, web browsing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Protocols:"
        }), " HTTP, FTP, SMTP, POP3, IMAP, DNS, SSH, Telnet, DHCP, SNMP."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data unit:"
        }), " Message."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "data-flow-through-osi-layers-numbered-steps",
      children: "Data Flow Through OSI Layers (Numbered Steps)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Send path (top → bottom):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Application (L7) creates data → e.g., \"Hello\"."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Presentation (L6) may encrypt or compress the data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Session (L5) inserts synchronization checkpoints."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transport (L4) segments data, adds port numbers, sequence numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Network (L3) adds source/destination IP addresses, determines route."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data Link (L2) adds MAC addresses, CRC trailer, performs media access."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Physical (L1) converts frame to bits, transmits on wire."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Receive path (bottom → top):"
      }), "\n8. Physical (L1) receives bits, reconstructs frame.\n9. Data Link (L2) verifies CRC, checks MAC address, strips header.\n10. Network (L3) checks destination IP, strips header, reassembles if fragmented.\n11. Transport (L4) reassembles segments, delivers to correct application via port.\n12. Session (L5) manages dialog if applicable.\n13. Presentation (L6) decrypts, decompresses.\n14. Application (L7) consumes the data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-ping-through-osi",
      children: "Dry Run Trace: \"PING\" Through OSI"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " User on machine A sends ping to machine B (IP 10.0.0.2)."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Machine A (Sender)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Machine B (Receiver)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "L7 App"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ping 10.0.0.2"
            }), " command generates ICMP Echo Request"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Browser or shell receives response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "L6 Pres"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data passed as-is (no encryption for basic ping)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data passed as-is"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "L5 Sess"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not used by ping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not used by ping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "L4 Trans"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ICMP is L3 protocol, but conceptually L4 equivalent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ICMP processed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "L3 Net"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[IP SRC=10.0.0.1 DST=10.0.0.2 PROTO=ICMP, ICMP Echo Request]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checks IP = 10.0.0.2, strips header, passes ICMP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "L2 DLL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Ethernet DMAC=BB:BB SRC=AA:AA ET=0x0800, IP packet, CRC32]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAC matches, CRC OK, strips header, passes IP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "L1 Phys"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Bits: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "11010010..."
            }), " on Cat-6"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receives bits, reconstructs frame"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-osi-layer-simulation",
      children: "C++: OSI Layer Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <vector>\n\nusing namespace std;\n\n// Simulates OSI layer processing\nclass OSILayerSimulator {\nprivate:\n    struct Layer {\n        int number;\n        string name;\n        string function;\n    };\n\n    vector<Layer> layers;\n\npublic:\n    OSILayerSimulator() {\n        layers = {\n            {7, \"Application\", \"HTTP request creation\"},\n            {6, \"Presentation\", \"Encryption (TLS handshake)\"},\n            {5, \"Session\", \"Session management\"},\n            {4, \"Transport\", \"TCP segment (port 80, seq=1000)\"},\n            {3, \"Network\", \"IP packet (10.0.0.1 to 93.184.216.34)\"},\n            {2, \"Data Link\", \"Ethernet frame (MACs + CRC)\"},\n            {1, \"Physical\", \"Bits on wire\"}\n        };\n    }\n\n    // Simulate sending data down the stack\n    string sendDown(const string& data) {\n        cout << \"\\n=== Sending: Top to Bottom ===\\n\";\n        string pdu = data;\n        for (const auto& layer : layers) {\n            cout << \"L\" << layer.number << \" [\" << layer.name\n                 << \"]: Processing...\\n\";\n            cout << \"  \" << layer.function << \"\\n\";\n            cout << \"  PDU: \" << pdu.substr(0, 40) << \"...\\n\";\n            // Simulate encapsulation: wrap with layer info\n            pdu = \"{\" + to_string(layer.number) + \":\" + pdu + \"}\";\n        }\n        cout << \"Transmitting on wire...\\n\";\n        return pdu;\n    }\n\n    // Simulate receiving data up the stack\n    void receiveUp(const string& rawBits) {\n        cout << \"\\n=== Receiving: Bottom to Top ===\\n\";\n        string pdu = rawBits;\n        for (auto it = layers.rbegin(); it != layers.rend(); ++it) {\n            cout << \"L\" << it->number << \" [\" << it->name\n                 << \"]: Processing...\\n\";\n            cout << \"  Stripping layer header...\\n\";\n            // Simulate de-encapsulation: extract payload\n            size_t start = pdu.find('{');\n            size_t end = pdu.find('}');\n            if (start != string::npos && end != string::npos) {\n                pdu = pdu.substr(start + 3, end - start - 3);\n            }\n            cout << \"  Payload: \" << pdu.substr(0, 40) << \"...\\n\";\n        }\n        cout << \"Data delivered to application: \" << pdu << \"\\n\";\n    }\n\n    void printLayers() {\n        cout << \"=== OSI 7-Layer Model ===\\n\";\n        for (const auto& l : layers) {\n            cout << \"L\" << l.number << \": \" << l.name << \"\\n\";\n        }\n    }\n};\n\nint main() {\n    OSILayerSimulator osi;\n    osi.printLayers();\n\n    string data = \"GET /index.html\";\n    string transmitted = osi.sendDown(data);\n    osi.receiveUp(transmitted);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-osi-layer-simulation",
      children: "Python: OSI Layer Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\n\n@dataclass\nclass OSILayer:\n    number: int\n    name: str\n    function: str\n\n\nclass OSILayerSimulator:\n    def __init__(self):\n        self.layers = [\n            OSILayer(7, \"Application\", \"HTTP request creation\"),\n            OSILayer(6, \"Presentation\", \"Encryption (TLS)\"),\n            OSILayer(5, \"Session\", \"Session management\"),\n            OSILayer(4, \"Transport\", \"TCP segment (port 80)\"),\n            OSILayer(3, \"Network\", \"IP packet routing\"),\n            OSILayer(2, \"Data Link\", \"Ethernet frame + CRC\"),\n            OSILayer(1, \"Physical\", \"Bits on wire\"),\n        ]\n\n    def send_down(self, data: str) -> str:\n        print(\"\\n=== Sending: Top to Bottom ===\")\n        pdu = data\n        for layer in self.layers:\n            print(f\"L{layer.number} [{layer.name}]: Processing...\")\n            print(f\"  {layer.function}\")\n            print(f\"  PDU: {pdu[:40]}...\")\n            pdu = f\"{{{layer.number}:{pdu}}}\"\n        print(\"Transmitting on wire...\")\n        return pdu\n\n    def receive_up(self, raw: str) -> None:\n        print(\"\\n=== Receiving: Bottom to Top ===\")\n        pdu = raw\n        for layer in reversed(self.layers):\n            print(f\"L{layer.number} [{layer.name}]: Processing...\")\n            print(\"  Stripping layer header...\")\n            start = pdu.find('{')\n            end = pdu.find('}')\n            if start != -1 and end != -1:\n                pdu = pdu[start + 3:end]\n            print(f\"  Payload: {pdu[:40]}...\")\n        print(f\"Data delivered: {pdu}\")\n\n    def print_layers(self):\n        print(\"=== OSI 7-Layer Model ===\")\n        for l in self.layers:\n            print(f\"L{l.number}: {l.name}\")\n\nif __name__ == \"__main__\":\n    osi = OSILayerSimulator()\n    osi.print_layers()\n    tx = osi.send_down(\"GET /index.html\")\n    osi.receive_up(tx)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-encapsulationsimulator",
      children: "TypeScript Implementation: EncapsulationSimulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following TypeScript class simulates how each TCP/IP layer adds its header during encapsulation, producing the nested PDU structure that flows across the wire."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * EncapsulationSimulator — Models the TCP/IP encapsulation process\n * where each layer wraps the payload with its own header.\n */\ninterface LayerPDU {\n  layer: string;\n  header: string;\n  payload: string;\n  sizeBytes: number;\n}\n\nclass EncapsulationSimulator {\n  private readonly layers: string[] = [\n    'Application (HTTP)',\n    'Transport (TCP)',\n    'Internet (IP)',\n    'Link (Ethernet)'\n  ];\n\n  /** Simulate encapsulation from top to bottom */\n  encapsulate(data: string, srcPort: number, dstPort: number,\n              srcIP: string, dstIP: string, srcMAC: string, dstMAC: string): LayerPDU[] {\n    const chain: LayerPDU[] = [];\n    let payload = data;\n\n    // Layer 4: Application — raw data\n    // Layer 4: Transport — add TCP header\n    const tcpHeader = `TCP SrcPort=${srcPort} DstPort=${dstPort} Seq=1000 Ack=0`;\n    const tcpSegment = `[${tcpHeader}] ${payload}`;\n    chain.push({ layer: 'Transport (TCP)', header: tcpHeader, payload, sizeBytes: tcpHeader.length + payload.length });\n\n    // Layer 3: Internet — add IP header\n    const ipHeader = `IP Src=${srcIP} Dst=${dstIP} Proto=6 TTL=64`;\n    const ipPacket = `[${ipHeader}] ${tcpSegment}`;\n    chain[chain.length - 1].sizeBytes = tcpHeader.length + payload.length;\n    chain.push({ layer: 'Internet (IP)', header: ipHeader, payload: tcpSegment, sizeBytes: ipHeader.length + tcpSegment.length });\n\n    // Layer 2: Link — add Ethernet header\n    const ethHeader = `Eth DstMAC=${dstMAC} SrcMAC=${srcMAC} Type=0x0800`;\n    const frame = `[${ethHeader}] ${ipPacket}`;\n    chain.push({ layer: 'Link (Ethernet)', header: ethHeader, payload: ipPacket, sizeBytes: ethHeader.length + ipPacket.length });\n\n    return chain;\n  }\n\n  /** Simulate de-encapsulation from bottom to top */\n  decapsulate(frame: string): void {\n    console.log('\\n=== De-encapsulation (Bottom → Top) ===');\n    let pdu = frame;\n    for (let i = this.layers.length - 1; i >= 0; i--) {\n      const start = pdu.indexOf('[');\n      const end = pdu.indexOf(']');\n      if (start === -1 || end === -1) break;\n      const header = pdu.substring(start + 1, end);\n      pdu = pdu.substring(end + 2);\n      const layerName = this.layers[i];\n      console.log(`[${layerName}] Header: ${header}`);\n      console.log(`[${layerName}] Payload: ${pdu.length > 80 ? pdu.substring(0, 80) + '...' : pdu}`);\n    }\n    console.log(`[Application] Data delivered: ${pdu}`);\n  }\n\n  /** Print the full encapsulation chain */\n  printChain(chain: LayerPDU[]): void {\n    console.log('\\n=== Encapsulation Chain (Top → Bottom) ===');\n    console.log('Layer             | Header Summary                          | Size (B)');\n    console.log('------------------|-----------------------------------------|---------');\n    for (const pdu of chain) {\n      const hdrBrief = pdu.header.length > 40 ? pdu.header.substring(0, 39) + '…' : pdu.header;\n      console.log(`${pdu.layer.padEnd(18)} | ${hdrBrief.padEnd(40)} | ${pdu.sizeBytes}`);\n    }\n    const totalBytes = chain[chain.length - 1]?.sizeBytes ?? 0;\n    console.log(`\\nTotal frame size: ${totalBytes} bytes (${totalBytes * 8} bits)`);\n    console.log('Overhead: ' + (totalBytes - chain[0].payload.length) + ' bytes of headers');\n  }\n}\n\n// Demonstration\nconst sim = new EncapsulationSimulator();\nconst data = 'GET /index.html HTTP/1.1';\nconst chain = sim.encapsulate(data, 49152, 80, '192.168.1.10', '93.184.216.34',\n                               'AA:AA:AA:AA:AA:AA', 'BB:BB:BB:BB:BB:BB');\nsim.printChain(chain);\nsim.decapsulate(`[Eth DstMAC=BB:BB:BB:BB:BB:BB SrcMAC=AA:AA:AA:AA:AA:AA Type=0x0800] [IP Src=93.184.216.34 Dst=192.168.1.10 Proto=6 TTL=64] [TCP SrcPort=80 DstPort=49152 Seq=2000 Ack=1001] ${data}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== Encapsulation Chain (Top → Bottom) ===\nLayer             | Header Summary                          | Size (B)\n------------------|-----------------------------------------|---------\nTransport (TCP)   | TCP SrcPort=49152 DstPort=80 Seq=1000…  | 71\nInternet (IP)     | IP Src=192.168.1.10 Dst=93.184.216.3…  | 145\nLink (Ethernet)   | Eth DstMAC=BB:BB:BB:BB:BB:BB SrcMAC=A…  | 218\n\nTotal frame size: 218 bytes (1744 bits)\nOverhead: 147 bytes of headers\n\n=== De-encapsulation (Bottom → Top) ===\n[Link (Ethernet)] Header: Eth DstMAC=BB:BB:BB:BB:BB:BB SrcMAC=AA:AA:AA:AA:AA:AA Type=0x0800\n[Link (Ethernet)] Payload: [IP Src=93.184.216.34 Dst=192.168.1.10 Proto=6 TTL=64] [TCP SrcPort=80 DstPort=49152 Seq=2000 Ack=1001] GET /index.html HTTP/1.1\n[Internet (IP)] Header: IP Src=93.184.216.34 Dst=192.168.1.10 Proto=6 TTL=64\n[Internet (IP)] Payload: [TCP SrcPort=80 DstPort=49152 Seq=2000 Ack=1001] GET /index.html HTTP/1.1\n[Transport (TCP)] Header: TCP SrcPort=80 DstPort=49152 Seq=2000 Ack=1001\n[Transport (TCP)] Payload: GET /index.html HTTP/1.1\n[Application] Data delivered: GET /index.html HTTP/1.1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-of-the-osi-model",
      children: "Complexity Analysis of the OSI Model"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Conceptual complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L) where L=7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each layer adds a well-defined abstraction; number of layers is fixed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 layers mean 7 headers, 7 processing stages → more CPU cycles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Protocol data overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50-200 bytes per PDU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each layer's header adds to total transmission size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flexibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Layers can be independently modified or replaced"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Learning curve"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate-to-steep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 layers with abstract boundaries (session/presentation are fuzzy)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why 7 layers?"
      }), " ISO chose 7 because it was large enough to separate distinct concerns but small enough to be comprehensible. In practice, layers 5 and 6 are rarely implemented as separate entities → TCP/IP collapses them into the application layer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-of-the-osi-model",
      children: "A&D of the OSI Model"
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
            children: "Clear separation of concerns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never fully implemented → session/presentation layers unused"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent teaching framework"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standards developed before implementations (design without validation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Module replacement without cascade"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heavyweight → 7 headers add overhead for simple operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "International standard (ISO 7498)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP/IP won in the marketplace despite being \"less elegant\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Each layer can use multiple protocols at adjacent layers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No clear boundary between session and transport in practice"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-osi-layering",
      children: "Edge Cases in OSI Layering"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Happens"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Matters"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cross-layer optimization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WiFi uses signal strength (L1) to decide link rate (L2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strict layering violated for performance → real systems cheat"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Encryption at multiple layers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS (L5/6) + IPsec (L3) = double encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redundant, wastes CPU, but some orgs do it for compliance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Layer violation by firewalls"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Firewall inspects L7 (HTTP) even though it's a L3/L4 device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep packet inspection breaks strict layering abstraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Missing session layer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/1.1 uses TCP for session; HTTP/2 has its own multiplexing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session functionality absorbed into adjacent layers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "17-the-tcpip-model",
      children: "1.7 The TCP/IP Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The TCP/IP model, developed by the U.S. Department of Defense through ARPANET research (1960s-1970s), is the architecture of the actual Internet. It has four layers, designed with a minimalist, implementation-first philosophy."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-four-layers",
      children: "The Four Layers"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Responsibility"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Protocols"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provides network services directly to user applications; combines OSI L5-L7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP, SMTP, DNS, FTP, SSH, DHCP, SNMP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End-to-end communication between processes; reliability, flow control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP, UDP, SCTP, DCCP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internet (Network)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical addressing, routing, packet fragmentation/reassembly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPv4, IPv6, ICMP, ARP, IPsec"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Link (Network Interface)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical transmission and data framing; combines OSI L1-L2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethernet, WiFi, PPP, DSL, DOCSIS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "osi-vs-tcpip-layer-mapping",
      children: "OSI vs TCP/IP: Layer Mapping"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "OSI Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TCP/IP Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7 → Application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 → Application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP/IP collapses presentation and session into application"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6 → Presentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 → Application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption (TLS) is implemented in the application layer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5 → Session"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 → Application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session state is managed by the application itself"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4 → Transport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 → Transport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct mapping: TCP ≈ OSI L4 service"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3 → Network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 → Internet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct mapping: IP ≈ OSI L3 service"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2 → Data Link"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 → Link"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP/IP does not distinguish LLC from MAC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1 → Physical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 → Link"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical medium details left unspecified"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "osi-vs-tcpip-detailed-comparison",
      children: "OSI vs TCP/IP: Detailed Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OSI Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TCP/IP Model"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Number of layers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Year developed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1977 (published 1984)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1974 (DARPA)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Design approach"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Top-down (standard → implementation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bottom-up (implementation → standard)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key philosophy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"What layers could be\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"What layers needed to be\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Session/Presentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate layers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Absorbed into Application layer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Physical/Data Link"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two distinct layers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collapsed into Link layer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Adoption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pedagogical/reference only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs the entire Internet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Protocol coupling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loosely coupled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tightly coupled (TCP + IP designed together)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Connection orientation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both at multiple layers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection-oriented at Transport (TCP), connectionless at Internet (IP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Standardization body"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IETF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key strength"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear conceptual framework"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Working implementation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key weakness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Over-engineered, complex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing clean separation at link layer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-tcpip-won",
      children: "Why TCP/IP Won"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implementation first:"
        }), " TCP/IP had working code (1974 BBN implementation) before standardization. OSI had standards before any implementation existed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Berkeley UNIX:"
        }), " TCP/IP was bundled with BSD UNIX (1983), giving it free distribution to every university."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ARPANET adoption:"
        }), " The DARPA-funded network switched to TCP/IP on January 1, 1983 (flag day)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Simplicity:"
        }), " Fewer layers, less header overhead, minimal state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Internet growth:"
        }), " The Internet exploded in the 1990s; TCP/IP was already deployed and proven at scale."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "osi-vs-tcpip-quotation",
      children: "OSI vs TCP/IP: Quotation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["\"The OSI model taught us what layers ", (0,jsx_runtime.jsx)(_components.em, {
          children: "could"
        }), " be; TCP/IP showed us what layers ", (0,jsx_runtime.jsx)(_components.em, {
          children: "needed"
        }), " to be → and the gap between them explains why one is a textbook reference and the other runs the Internet.\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-tcpip-encapsulation",
      children: "Dry Run: TCP/IP Encapsulation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " DNS query from browser to 8.8.8.8 for example.com."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "DNS query: example.com? (UDP port 53)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "`UDP Hdr(SrcPort=12345, DstPort=53, Len=52, CRC)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "`IP Hdr(SRC=192.168.1.10, DST=8.8.8.8, PROTO=17(UDP), TTL=64)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Link"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "`Ethernet Hdr(DMAC=router-MAC, SMAC=my-MAC, ET=0x0800)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "18-network-protocols-overview",
      children: "1.8 Network Protocols Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "protocol"
      }), " is an agreed-upon format and sequence of messages between two entities. Below are the key protocols that power the Internet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "181-major-protocols-by-layer",
      children: "1.8.1 Major Protocols by Layer"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Port(s)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/HTTPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web page transfer (HyperText Transfer Protocol)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80 / 443"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File transfer (control + data connections)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21 (control), 20 (data)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email transmission (Simple Mail Transfer Protocol)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POP3 / IMAP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email retrieval (Post Office Protocol / Internet Message Access Protocol)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "110 / 143"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain name → IP address resolution (Domain Name System)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "53"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DHCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic IP address assignment (Dynamic Host Configuration Protocol)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "67 / 68"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secure remote shell access (Secure Shell)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reliable, connection-oriented, ordered delivery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unreliable, connectionless, low-overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Internet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packet forwarding and addressing (Internet Protocol)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Internet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ICMP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error reporting and diagnostics (ping, traceroute)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Internet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP → MAC address resolution (Address Resolution Protocol)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "182-protocol-vs-interface",
      children: "1.8.2 Protocol vs Interface"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Interface"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Definition"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Rules for communication between ", (0,jsx_runtime.jsx)(_components.em, {
              children: "peer"
            }), " layers on ", (0,jsx_runtime.jsx)(_components.em, {
              children: "different"
            }), " machines"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Rules for communication between ", (0,jsx_runtime.jsx)(_components.em, {
              children: "adjacent"
            }), " layers on the ", (0,jsx_runtime.jsx)(_components.em, {
              children: "same"
            }), " machine"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Direction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal (between machines)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vertical (within a machine)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP defines how browser talks to web server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Socket API (send/recv) defines how application talks to TCP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Abstraction"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.em, {
              children: "what"
            }), " of communication"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.em, {
              children: "how"
            }), " of service delivery"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Change impact"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changing HTTP requires both browser and server to update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changing socket implementation requires only the OS vendor to update"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "183-multiplexing-and-demultiplexing",
      children: "1.8.3 Multiplexing and Demultiplexing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multiplexing"
      }), " (sender): Multiple application conversations are combined onto a single transport-level connection. Each application is identified by a unique port number."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Demultiplexing"
      }), " (receiver): The transport layer receives a segment, reads the destination port number, and delivers the data to the correct application."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered steps → Multiplexing at sender:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Application A (port 49152) sends data via TCP."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Application B (port 49153) sends data via UDP."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transport layer takes both, encapsulates each with its own port numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Both segments pass to the IP layer."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IP encapsulates both into IP packets and sends them over the same network interface."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered steps → Demultiplexing at receiver:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IP layer receives a packet, strips header, examines protocol field (6=TCP, 17=UDP)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Passes payload to TCP or UDP handler."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TCP/UDP reads destination port number."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Delivers data to the application listening on that port."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sender (multiplexing):            Receiver (demultiplexing):\n┌──────────────┐                 ┌──────────────┐\n│ App A (port) │ App B (port)    │ App A (port) │ App B (port)\n└──────┬───────┘                 └──────┬───────┘\n       │                                │\n       ▼                                ▲\n┌──────────────┐                 ┌──────────────┐\n│  Transport   │  ← demux →      │  Transport   │\n│  (TCP/UDP)   │                 │  (TCP/UDP)   │\n└──────┬───────┘                 └──────┬───────┘\n       │                                │\n       ▼                                ▲\n┌──────────────┐                 ┌──────────────┐\n│  Internet    │  ← IP →         │  Internet    │\n│  (IP/ICMP)   │                 │  (IP/ICMP)   │\n└──────────────┘                 └──────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "184-protocol-classification",
      children: "1.8.4 Protocol Classification"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Classification"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "By layer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which OSI/TCP layer the protocol operates at"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP(L7), TCP(L4), IP(L3)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "By reliability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guaranteed delivery or best-effort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP (reliable), UDP (unreliable)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "By state"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does the protocol maintain connection state?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP (stateful), UDP (stateless)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "By orientation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection-oriented or connectionless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP (CO), IP (CL)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "By function"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routing, transport, application, management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OSPF (routing), TCP (transport), SNMP (management)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-simple-protocol-simulator",
      children: "Pseudocode: Simple Protocol Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE sendData(data, destIP, protocol):\n    IF protocol = \"HTTP\":\n        request ← \"GET \" + data + \" HTTP/1.1\"\n        \n    IF protocol = \"TCP\":\n        segment ← CREATE_TCP_SEGMENT(request, srcPort, dstPort)\n        // Add sequence number, checksum\n        \n    IF protocol = \"IP\":\n        packet ← CREATE_IP_PACKET(segment, srcIP, destIP, TTL=64)\n        // Fragment if > MTU\n        \n    IF protocol = \"Ethernet\":\n        frame ← CREATE_ETHERNET_FRAME(packet, srcMAC, destMAC)\n        // Append CRC\n        \n    TRANSMIT(frame, medium)\n    RETURN TRUE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-bandwidthlatencycalculator",
      children: "TypeScript Implementation: BandwidthLatencyCalculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following TypeScript class computes network performance metrics: throughput, round-trip time, propagation delay, and the bandwidth-delay product."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * BandwidthLatencyCalculator — Computes throughput, RTT, propagation delay,\n * transmission delay, and the bandwidth-delay product for any network path.\n */\ninterface PerformanceMetrics {\n  bandwidthMbps: number;\n  distanceKm: number;\n  propagationDelayMs: number;\n  transmissionDelayMs: number;\n  roundTripTimeMs: number;\n  maxThroughputMbps: number;\n  bandwidthDelayProductKB: number;\n  linkUtilizationPercent: number;\n}\n\nclass BandwidthLatencyCalculator {\n  private readonly speedOfLight = 3e8; // m/s in vacuum\n  private readonly velocityFactors: Record<string, number> = {\n    copper: 0.67,\n    fiber: 0.67,\n    wireless: 1.0\n  };\n\n  /**\n   * Compute detailed performance metrics for a network link.\n   * @param bandwidthBps - Raw bandwidth in bits per second\n   * @param distanceKm - Link distance in kilometres\n   * @param medium - Transmission medium ('copper', 'fiber', 'wireless')\n   * @param packetSizeBytes - Size of the packet (default 1500 for Ethernet MTU)\n   * @param windowSizeBytes - TCP window size in bytes (default 65535)\n   */\n  computeMetrics(\n    bandwidthBps: number,\n    distanceKm: number,\n    medium: 'copper' | 'fiber' | 'wireless' = 'fiber',\n    packetSizeBytes: number = 1500,\n    windowSizeBytes: number = 65535\n  ): PerformanceMetrics {\n    const vf = this.velocityFactors[medium];\n    const propSpeed = this.speedOfLight * vf; // m/s\n    const distanceM = distanceKm * 1000;\n    const bandwidthMbps = bandwidthBps / 1e6;\n\n    // Propagation delay = distance / propagation speed\n    const propagationDelayS = distanceM / propSpeed;\n    const propagationDelayMs = propagationDelayS * 1000;\n\n    // Transmission delay = packet size / bandwidth\n    const transmissionDelayS = (packetSizeBytes * 8) / bandwidthBps;\n    const transmissionDelayMs = transmissionDelayS * 1000;\n\n    // RTT = 2 × (propagation delay + transmission delay)\n    const roundTripTimeMs = 2 * (propagationDelayMs + transmissionDelayMs);\n\n    // Bandwidth-delay product = bandwidth × RTT\n    const bdpBits = bandwidthBps * (roundTripTimeMs / 1000);\n    const bandwidthDelayProductKB = bdpBits / 8 / 1024;\n\n    // Max throughput limited by window size\n    const maxThroughputMbps = (windowSizeBytes * 8) / (roundTripTimeMs / 1000) / 1e6;\n\n    // Link utilization\n    const linkUtilizationPercent = Math.min(100, (maxThroughputMbps / bandwidthMbps) * 100);\n\n    return {\n      bandwidthMbps,\n      distanceKm,\n      propagationDelayMs: Math.round(propagationDelayMs * 100) / 100,\n      transmissionDelayMs: Math.round(transmissionDelayMs * 100) / 100,\n      roundTripTimeMs: Math.round(roundTripTimeMs * 100) / 100,\n      maxThroughputMbps: Math.round(maxThroughputMbps * 100) / 100,\n      bandwidthDelayProductKB: Math.round(bandwidthDelayProductKB * 100) / 100,\n      linkUtilizationPercent: Math.round(linkUtilizationPercent * 100) / 100\n    };\n  }\n\n  /** Compare performance across LAN, MAN, WAN scenarios */\n  static compareScenarios(): void {\n    const calc = new BandwidthLatencyCalculator();\n\n    const scenarios = [\n      { label: 'LAN (1 Gbps, 100 m copper)', bw: 1e9, dist: 0.1, med: 'copper' as const },\n      { label: 'MAN (10 Gbps, 20 km fiber)', bw: 10e9, dist: 20, med: 'fiber' as const },\n      { label: 'WAN (100 Mbps, 1000 km fiber)', bw: 100e6, dist: 1000, med: 'fiber' as const },\n      { label: 'GEO Satellite (50 Mbps, 35786 km wireless)', bw: 50e6, dist: 35786, med: 'wireless' as const }\n    ];\n\n    console.log('\\n=== Network Performance Comparison ===');\n    console.log('Scenario                          | Prop(ms) | Trans(ms) | RTT(ms)  | BDP(KB)  | Util%');\n    console.log('----------------------------------|----------|-----------|----------|----------|------');\n    for (const s of scenarios) {\n      const m = calc.computeMetrics(s.bw, s.dist, s.med);\n      console.log(\n        `${s.label.padEnd(34)} | ${String(m.propagationDelayMs).padStart(8)} | ` +\n        `${String(m.transmissionDelayMs).padStart(9)} | ${String(m.roundTripTimeMs).padStart(8)} | ` +\n        `${String(m.bandwidthDelayProductKB).padStart(8)} | ${m.linkUtilizationPercent}%`\n      );\n    }\n  }\n}\n\n// Demonstration\nBandwidthLatencyCalculator.compareScenarios();\nconst calc = new BandwidthLatencyCalculator();\nconst lan = calc.computeMetrics(1e9, 0.1, 'copper', 1500, 65535);\nconsole.log(`\\nLAN throughput with 64 KB window: ${lan.maxThroughputMbps} Mbps (utilization: ${lan.linkUtilizationPercent}%)`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== Network Performance Comparison ===\nScenario                          | Prop(ms) | Trans(ms) | RTT(ms)  | BDP(KB)  | Util%\n----------------------------------|----------|-----------|----------|----------|------\nLAN (1 Gbps, 100 m copper)        |     0.50 |     0.01  |     1.02 |    124.5 | 100%\nMAN (10 Gbps, 20 km fiber)        |     0.10 |     0.00  |     0.20 |    244.1 | 100%\nWAN (100 Mbps, 1000 km fiber)     |     4.98 |     0.12  |    10.19 |    124.4 | 100%\nGEO Satellite (50 Mbps, 35786 km wireless) | 119.29 |     0.24 |   239.06 | 1426.1 | 100%\n\nLAN throughput with 64 KB window: 513.02 Mbps (utilization: 51.3%)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "19-interview-corner",
      children: "1.9 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-why-does-the-osi-model-have-7-layers-while-tcpip-has-only-4",
      children: "Q1: Why does the OSI model have 7 layers while TCP/IP has only 4?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " OSI was designed as a comprehensive framework anticipating every possible networking need. Layers 5 (Session) and 6 (Presentation) were kept separate because ISO believed each function deserved its own abstraction boundary. TCP/IP, developed by practitioners who needed working code ", (0,jsx_runtime.jsx)(_components.em, {
        children: "now"
      }), ", combined layers pragmatically → session management is handled by the application, and encryption (TLS) is implemented in the application layer rather than a separate presentation layer. The TCP/IP Link layer combines Physical and Data Link because the boundary between them was irrelevant for early Internet implementers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-why-are-network-layers-useful-wouldnt-direct-communication-be-simpler",
      children: "Q2: Why are network layers useful? Wouldn't direct communication be simpler?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Layers are essential because they manage ", (0,jsx_runtime.jsx)(_components.em, {
        children: "complexity"
      }), ". Direct communication between every pair of network components would create O(N²) protocol implementations → every application would need to handle routing, error detection, retransmission, and flow control. With layering, the network layer handles routing for all applications, the transport layer handles reliability for all applications, and applications only worry about their own data. This is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "separation of concerns"
      }), " principle applied to networking."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Without layers"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "With layers"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Every app implements retransmission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transport handles it once for all apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Every app implements routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network handles it once for all apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Change physical medium → rewrite every app"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Change only the data link layer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-what-is-the-difference-between-a-protocol-and-an-interface",
      children: "Q3: What is the difference between a protocol and an interface?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Interface"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Between"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Peer layers on ", (0,jsx_runtime.jsx)(_components.em, {
              children: "different"
            }), " machines"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Adjacent layers on the ", (0,jsx_runtime.jsx)(_components.em, {
              children: "same"
            }), " machine"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vertical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Analogy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Language two diplomats speak"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain of command in one organization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Change effect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both sides must change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only the layer implementation changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key characteristic"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Defines the ", (0,jsx_runtime.jsx)(_components.em, {
              children: "format"
            }), " of messages"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Defines the ", (0,jsx_runtime.jsx)(_components.em, {
              children: "operations"
            }), " available"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-explain-multiplexing-in-computer-networks",
      children: "Q4: Explain multiplexing in computer networks."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Multiplexing"
      }), " is combining multiple data streams from different applications into a single channel (protocol). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Demultiplexing"
      }), " is the reverse → separating a single channel into its constituent application streams at the receiver."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Types of multiplexing:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency Division (FDM):"
        }), " Each signal occupies a different frequency band. Used in radio, TV, fiber optics (WDM)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time Division (TDM):"
        }), " Each signal takes turns using the full bandwidth for a fixed time slot. Used in SONET/SDH."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Statistical (StatTDM):"
        }), " Like TDM but slots are allocated on demand, not fixed. Used in Ethernet, WiFi."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Division (CDM):"
        }), " Each signal uses the entire spectrum simultaneously with unique encoding. Used in 3G cellular."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Port-based (at transport layer):"
        }), " Source/destination port numbers distinguish different conversations. Used by TCP/UDP."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-is-the-difference-between-a-hub-a-switch-and-a-router",
      children: "Q5: What is the difference between a hub, a switch, and a router?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Device"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Intelligence"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical (L1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeats electrical signal to all ports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None → dumb repeater"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Link (L2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forwards frames based on MAC address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learns MAC-port mappings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Router"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network (L3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forwards packets based on IP address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs routing protocols (OSPF, BGP)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-happens-if-you-send-1-gb-of-data-over-a-network-with-1500-byte-mtu",
      children: "Q6: What happens if you send 1 GB of data over a network with 1500 byte MTU?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Fragmentation occurs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The 1 GB data is segmented by TCP into segments (typically ~1460 bytes each to fit within 1500 byte MTU)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Total segments = 1 GB / 1460 bytes ≈ 731,000 segments."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each segment gets a TCP header, IP header, and Ethernet header → adding ~920 million bytes of header overhead."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each segment is transmitted independently; if any is lost, only that segment is retransmitted (not the entire 1 GB)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "110-applications-in-real-systems",
      children: "1.10 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-internet-uses-tcpip",
      children: "The Internet Uses TCP/IP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The global Internet is built entirely on the TCP/IP protocol suite:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Web browsing:"
        }), " HTTP/HTTPS over TCP over IP over Ethernet/WiFi."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Email:"
        }), " SMTP for sending, POP3/IMAP for receiving → all over TCP/IP."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DNS:"
        }), " Uses UDP (sometimes TCP) over IP. Translates domain names to IP addresses."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Video streaming:"
        }), " Netflix, YouTube use HTTPS over TCP (and some QUIC/UDP)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VoIP / Video calls:"
        }), " Zoom, Skype use UDP (tolerate loss, need low latency)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cloud services:"
        }), " AWS, Azure, GCP all communicate via TCP/IP internally and externally."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "osi-in-teaching-and-reference",
      children: "OSI in Teaching and Reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The OSI model is primarily used as a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pedagogical tool"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "University courses:"
        }), " OSI is taught first (in ~2 weeks), then TCP/IP for the rest of the semester. The contrast helps students understand ", (0,jsx_runtime.jsx)(_components.em, {
          children: "why"
        }), " TCP/IP made the design choices it did."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Troubleshooting frameworks:"
        }), " The \"OSI layer approach\" to network troubleshooting → start at Physical, work up → is the standard methodology for network engineers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security analysis:"
        }), " Security analysts use the OSI model to categorize threats: jamming (L1), MAC spoofing (L2), IP spoofing (L3), port scanning (L4), session hijacking (L5), downgrade attacks (L6), and SQL injection (L7)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation frameworks:"
        }), " Network architecture diagrams often reference OSI layers to clarify which device handles which function."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-protocol-stack-loading-a-web-page",
      children: "Real-World Protocol Stack: Loading a Web Page"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Trace of what happens when you visit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://google.com"
        }), ":"]
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Protocol"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Browser asks OS: \"What is the IP of google.com?\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS (UDP port 53)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Browser sends HTTP GET request for the page"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/2 (TCP port 443)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP establishes connection (3-way handshake) with 142.250.80.46"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Router forwards packets to destination using routing table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP / BGP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Link"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WiFi access point sends frames over radio waves"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "802.11ax (WiFi 6)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Radio signals modulated on 5 GHz frequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OFDMA"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "111-standardization",
      children: "1.11 Standardization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Internet standards are developed through an open, consensus-based process managed by several organizations."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Internet Engineering Task Force (IETF)"
      }), " develops core Internet protocols. Working groups discuss proposals on mailing lists, and decisions are documented in Requests for Comments (RFCs). An RFC progresses through maturity levels: Proposed Standard, Draft Standard, and Internet Standard."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Institute of Electrical and Electronics Engineers (IEEE)"
      }), " develops lower-layer standards through the 802 committee, which produced Ethernet (802.3), WiFi (802.11), and Bluetooth (802.15)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The International Telecommunication Union → Telecommunication Standardization Sector (ITU-T)"
      }), " publishes standards for telecommunication systems including optical networking (SONET/SDH) and telephone signaling (SS7)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The International Organization for Standardization (ISO)"
      }), " co-developed the OSI model and maintains standards for networking, security, and coding."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Distinction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OSI Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7-layer conceptual framework"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rigorous but theoretical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Teaching network abstractions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TCP/IP Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-layer Internet architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation-driven, pragmatic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-world Internet communication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single building/campus network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High speed, low latency, typically Ethernet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Office networks, campus connectivity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "City/metro area network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregation of LANs; moderate speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cable Internet, city-wide backbones"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nationwide/international network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leased lines, routers, higher latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global enterprise connectivity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bus topology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All nodes share a single cable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low cost, collision-prone, backbone failure = total loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy 10Base2 Ethernet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Star topology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All nodes connect to central switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dedicated bandwidth, central fail point, easy mgmt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern Ethernet LANs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ring topology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nodes in a closed loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token-passing, deterministic access, single-node break risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FDDI, SONET"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mesh topology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Point-to-point links between all pairs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum redundancy, O(N²) cost, complex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WAN routers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connection-Oriented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three-phase: setup, data, teardown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guarantees ordering and reliability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File transfer, web browsing (TCP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connectionless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Independent message delivery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No state, no ordering guarantee"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS queries, video streaming (UDP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each layer adds its own header"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates nested frame structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging network traces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiplexing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combine multiple streams into one channel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carried by port numbers at transport layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web server handling many clients"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rules for peer communication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal (between machines)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP defines request format"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rules for adjacent layer communication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vertical (within a machine)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Socket API (send/recv)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Network Scale"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PAN (~10m) → LAN (<1km) → MAN (5–50km) → WAN (unlimited)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OSI Layers (7→1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application → Presentation → Session → Transport → Network → Data Link → Physical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TCP/IP Layers (4→1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application → Transport → Internet → Link"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key OSI Mnemonic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Please Do Not Throw Sausage Pizza Away\" (bottom-up: Physical → Application)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key TCP/IP Mnemonic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"LITA\" (Link, Internet, Transport, Application) → bottom-up"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Service Types"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection-oriented (TCP → reliable, ordered) vs Connectionless (UDP → best-effort)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Topologies"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bus (shared), Star (central), Ring (loop), Mesh (all-pairs), Tree (hierarchical)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Standards Bodies"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IETF (RFCs, Internet protocols), IEEE (802.x physical/link), ITU-T (telecom), ISO (general)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PDU Names"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Message (L5-L7), Segment (L4), Packet (L3), Frame (L2), Bits (L1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Encapsulation Flow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data → [TCP Hdr"
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
            children: "Network Engineering"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Web Development"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "System Administration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OSI/TCP/IP Models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Troubleshooting at correct layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understanding HTTP/TCP stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network interface configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Layer-specific attack analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LAN/WAN Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Topology planning, switch placement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Branch office connectivity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network segmentation (VLAN)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PDU analysis (packet/datagram/frame)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP header debugging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packet capture (tcpdump/Wireshark)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reading malicious packet structures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connection-Oriented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic engineering, QoS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP socket programming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Firewall state tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session hijacking detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network Topologies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infrastructure design, redundancy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cable plant management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identifying single points of failure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol Layering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/2 multiplexing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuring TCP parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Layer-by-layer attack surface analysis"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-designing-a-scalable-office-network",
      children: "Case Study: Designing a Scalable Office Network"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scenario",
      children: "Scenario"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "TechCorp Inc."
      }), " is a growing software company moving into a new four-story building. The company has 350 employees: 80 in Engineering, 60 in Sales, 50 in HR/Admin, 40 in Finance, 70 in Product/Design, and 50 on the executive floor. Each department occupies one floor, and employees generate an average of 5 Mbps of traffic (peak 15 Mbps). The company expects 20% annual headcount growth. They need a resilient, scalable network design that supports video conferencing, cloud-based tools, and a centralised file server."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirements",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inter-department connectivity"
        }), " — every department must communicate with every other department."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bandwidth"
        }), " — the aggregate backbone must handle peak traffic without congestion."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fault tolerance"
        }), " — no single switch failure should take out the entire company."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Growth"
        }), " — the design must accommodate 20% more employees over three years."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Budget"
        }), " — cost-effective but not at the expense of reliability."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "solution",
      children: "Solution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The recommended architecture is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hierarchical star-of-stars topology"
      }), " with L2 access switches and L3 core routing:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hardware"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Quantity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "48-port GigE switches (1 per floor)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connect employee workstations (up to 90 per floor)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Distribution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24-port 10G SFP+ switches (1 per 2 floors)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregate floor traffic, VLAN routing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Core"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chassis switch with 10G uplinks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inter-connect distribution switches, firewall, WAN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "WAN Edge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Business router with 1 Gbps fibre"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internet connectivity, VPN for remote workers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Topology choice — Star:"
      }), " Each floor uses a star topology with a central access switch. The five access switches connect to two distribution switches (redundancy). The distribution switches connect to the core. This creates a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tree topology"
      }), " at the building level. For the WAN connection to remote workers, a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "partial mesh"
      }), " of VPN tunnels provides redundancy."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Addressing scheme:"
      }), " Use private IP space ", (0,jsx_runtime.jsx)(_components.code, {
        children: "10.0.0.0/16"
      }), " with VLAN per department:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["VLAN 10 — Engineering: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "10.0.10.0/24"
        }), " (254 hosts)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["VLAN 20 — Sales: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "10.0.20.0/24"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["VLAN 30 — HR/Admin: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "10.0.30.0/24"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["VLAN 40 — Finance: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "10.0.40.0/24"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["VLAN 50 — Product/Design: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "10.0.50.0/24"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["VLAN 60 — Executive: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "10.0.60.0/24"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bandwidth calculation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Per-floor peak: 90 employees × 15 Mbps = 1.35 Gbps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distribution uplink: 2 × 10 Gbps (load-balanced via LACP) → sufficient for 4 floors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Core link: 40 Gbps (4 × 10G LAG) → handles total peak of 350 × 15 Mbps = 5.25 Gbps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Oversubscription ratio: 5.25 Gbps / 40 Gbps = 0.13 → comfortable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fault tolerance:"
      }), " STP (RSTP) on redundant links between access → distribution. If one distribution switch fails, the other carries the full load within 1–3 seconds."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scalability:"
      }), " Adding one more floor (up to 96 employees) requires one more access switch and two uplinks to the distribution layer — no core redesign."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Takeaway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Choose star topology for LANs"
            }), " — its centralised management and per-node fault isolation make it the most practical choice for modern office networks."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every office network with 20+ nodes should use a star with managed switches."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Layer encapsulation is the universal debugging technique"
            }), " — when troubleshooting, trace headers from the physical layer up; the problem always hides at one specific layer."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Wireshark to inspect frames, packets, and segments; look at the right layer for the symptom."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Bandwidth-delay product governs TCP performance"
            }), " — on long-fat networks (high BDP), default 64 KB TCP windows achieve only a fraction of link capacity."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable TCP window scaling (RFC 1323) and tune window to ≥ BDP for full utilization."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "OSI is a teaching tool; TCP/IP is the deployed reality"
            }), " — understand both, but implement against TCP/IP. OSI helps you think about layers; TCP/IP makes them work."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use the OSI model for structured troubleshooting (\"start at Layer 1, work up\")."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Redundancy and loop prevention must coexist"
            }), " — redundant links without STP create broadcast storms. Always pair link redundancy with a loop-prevention protocol."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use RSTP (rapid convergence) or link aggregation (LACP) for redundancy in switched networks."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Topology choice determines capex and opex"
            }), " — star costs less to cable than mesh but creates a central failure point. Mesh is resilient but expensive beyond 8-10 nodes."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For WAN backbones, use partial mesh; for access networks, use star with redundant core."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Plan for 20% annual growth in network capacity"
            }), " — under-provisioning is the most common cause of network redesign. Headroom is cheaper than forklift upgrades."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Size switches with 20-30% port spare; use 10G uplinks even if 1G suffices today."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which of the following best describes the relationship between OSI and TCP/IP models?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) OSI has 4 layers; TCP/IP has 7 layers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Both models have identical layer counts"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) TCP/IP is implementation-driven with 4 layers; OSI is a 7-layer conceptual framework"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) OSI replaced TCP/IP in the 1990s"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "In a full mesh topology with 10 nodes, how many links are required?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) 10"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) 20"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) 45"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) 90"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "During encapsulation, what does the network layer add to the transport-layer segment?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Ethernet header and CRC trailer"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) IP header with source/destination addresses"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) TCP header with port numbers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Application-layer data"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which network type is characterised by high bandwidth, low latency, and a star topology?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) PAN"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) LAN"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) MAN"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) WAN"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the bandwidth-delay product used for?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Calculating propagation delay"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Determining the optimal TCP window size for full link utilization"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Measuring packet loss rate"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Computing the number of network hops"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Answer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP/IP uses 4 layers (Application, Transport, Internet, Link) and was built from working implementations. OSI is a 7-layer conceptual model (Physical → Application)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full mesh requires N(N−1)/2 = 10×9÷2 = 45 links. Star requires N−1 = 9; ring requires N = 10."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The network layer adds an IP header (source/destination IP, TTL, protocol, etc.) to the segment from the transport layer."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LANs (Local-Area Networks) typically operate at 100 Mbps–100 Gbps with microsecond latency and star topology using switches."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The BDP (bandwidth × RTT) tells us how much data must be in flight to keep the pipe full. The TCP send window should be ≥ BDP."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Computer networks enable communication among autonomous computers through layered protocol stacks. PANs, LANs, MANs, and WANs differ in scale, topology, and transmission technology. Network topologies (bus, star, ring, mesh, tree, hybrid) each offer distinct trade-offs in cost, reliability, scalability, and fault tolerance. Protocol layering provides abstraction and modularity → each layer hides complexity from the layer above and provides a well-defined service. Encapsulation, where each layer adds its own header, is the core mechanism of layered communication. The OSI model offers a seven-layer conceptual framework ideal for teaching and reference, while the TCP/IP model → with its four pragmatic layers → governs the actual Internet. Key protocols (HTTP, TCP, UDP, IP, DNS) operate at their respective layers, interfacing through well-defined APIs. Standards organizations including the IETF, IEEE, and ITU-T ensure interoperability through open, consensus-driven processes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List three advantages of layering in network protocol design."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n(1) Abstraction — each layer hides complexity from the layer above. (2) Modularity — layers can be changed independently without affecting adjacent layers. (3) Reuse — higher layers reuse services from lower layers (e.g., all applications use TCP/IP without implementing routing or error detection themselves).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between a connection-oriented service and a connectionless service? Give an example of each."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nConnection-oriented (e.g., TCP): requires a setup phase before data transfer, guarantees in-order delivery, and retransmits lost data. Connectionless (e.g., UDP): sends independent messages with no setup, no ordering guarantee, and no retransmission. Example: web browsing uses TCP; DNS queries use UDP.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name the seven layers of the OSI model and state the primary function of each."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nPhysical (bits on wire), Data Link (framing, MAC), Network (routing, logical addressing), Transport (end-to-end reliability), Session (dialog management), Presentation (encoding, encryption), Application (user-facing protocols).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does the TCP/IP model not have dedicated presentation and session layers?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nTCP/IP was designed pragmatically — session management is handled by the application itself (e.g., HTTP/1.1 uses TCP for session state), and encryption/encoding is implemented in the application layer (e.g., TLS in HTTPS). Separate layers added complexity without proven benefit.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What was the principal reason the OSI model failed to gain widespread adoption?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nOSI developed standards before working implementations existed (top-down), while TCP/IP had working code that was standardized afterward (bottom-up). TCP/IP was also bundled with BSD UNIX, giving it free distribution to universities.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare bus and star topologies. Which would you choose for a 50-node office network and why?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nStar — each node connects to a central switch. Bus — all nodes share a single cable. For a 50-node office, star is better because: (1) fault isolation (one broken cable affects only one node), (2) dedicated bandwidth per port, (3) easy troubleshooting, and (4) scalable via switch stacking.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the formula for cabling cost in a full mesh topology with N nodes."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nFull mesh requires N(N−1)/2 links. Each node needs N−1 ports. Cabling cost = links × cost_per_link + (N × (N−1) × cost_per_port). For N=10: 45 links, 9 ports per node → cost grows quadratically.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between multiplexing and demultiplexing?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nMultiplexing (sender): combining multiple application streams onto one channel using unique port numbers. Demultiplexing (receiver): reading the destination port number from a received segment and delivering the data to the correct application.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A company has 500 employees in a single building and 50 remote workers. Recommend a network architecture and justify your choice of LAN and WAN technologies."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nLAN: Hierarchical star topology with access switches (48-port, 1 Gbps per employee) connected to distribution switches (10 Gbps uplinks) and a core switch. WAN: Site-to-site VPN over gigabit fiber for remote workers. Justification: star topology provides fault isolation, 10 Gbps core handles aggregate traffic, VPN provides secure remote access.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider an application that requires guaranteed in-order delivery of messages with retransmission of lost messages. Should the application use a connection-oriented or connectionless transport service? Explain."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nConnection-oriented (TCP). TCP provides: (1) sequence numbers for in-order delivery, (2) ACK/retransmission for lost segments, (3) connection state management. UDP is connectionless and offers none of these guarantees.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Using the five-layer Internet model, trace the path of an HTTP request from a web browser to a server. Identify the protocol at each layer."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nL5 Application: HTTP GET request. L4 Transport: TCP segment (src port=49152, dst port=80, seq=100). L3 Network: IP packet (src=192.168.1.10, dst=93.184.216.34, proto=6). L2 Data Link: Ethernet frame (src MAC, dst MAC = router, type=0x0800). L1 Physical: bits on Cat-6 cable.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "12",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Draw the encapsulation diagram for an HTTPS request. Show exactly what each layer adds."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nApplication: `GET /index.html` → Transport: `[TCP src=49152 dst=443] GET /index.html` → Network: `[IP src=192.168.1.10 dst=93.184.216.34 proto=6] [TCP...] GET...` → Link: `[Eth dstMAC=router srcMAC=myMAC type=0x0800] [IP...] [TCP...] GET... [CRC32]`\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A network has 12 nodes. Calculate the number of links needed for: (a) star, (b) ring, (c) full mesh, (d) bus. Show your work."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n(a) Star: N−1 = 11 links. (b) Ring: N = 12 links. (c) Full mesh: N(N−1)/2 = 12×11/2 = 66 links. (d) Bus: N+1 = 13 links (backbone + N taps).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "14",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In a tree topology with branching factor 3 and 4 levels, what is the maximum number of leaf nodes?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nLeaf nodes = branching_factor^levels = 3^4 = 81. Each level branches each node into 3 children. Level 0: 1 root. Level 1: 3. Level 2: 9. Level 3: 27. Level 4: 81 leaves.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "15",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design a seven-layer protocol that is not one of the standard models."
        }), " Describe each layer's function, the service it provides to the layer above, and the protocol it uses with its peer. Your design must satisfy the following requirement: two applications that speak different languages (e.g., English and Mandarin) must be able to communicate through automatic translation at exactly one of your layers. Justify your placement of the translation function."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nPlace the translation function at Layer 6 (Presentation). L7 Application: app-specific data. L6 Presentation: automatic language translation (English↔Mandarin), character encoding. L5 Session: dialog control. L4 Transport: reliable delivery. L3 Network: routing. L2 Data Link: framing. L1 Physical: bits. Justification: translation is a presentation concern — it transforms data format without changing meaning, which is exactly what the presentation layer does.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "16",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Topology failure analysis."
        }), " A company's network uses a partial mesh topology with 15 routers. If a critical link between two core routers fails:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "(a) Which other topology types would be more resilient? Which would be less?"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "(b) How does the routing protocol (e.g., OSPF) handle this failure?"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "(c) What is the worst-case convergence time if there are 200 routes to recalculate?"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n(a) Full mesh is more resilient (more redundant paths). Star and tree are less resilient (central point of failure). (b) OSPF detects link failure via Hello timer expiry (default 40s), floods LSA update, runs SPF to recalculate routes, and updates FIB. (c) SPF complexity is O(L log N) where L = links, N = routers. For 200 routes on 15 routers with 30 links: ~450 operations, converging in 100-200 ms with modern CPUs.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "17",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Protocol design."
        }), " You are asked to design a simple protocol for a sensor network where 100 sensors report temperature readings every 10 seconds to a central server. Each reading is 4 bytes. Sensors are on battery power.\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "(a) Would you use a connection-oriented or connectionless protocol? Justify."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "(b) What header fields would you include?"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "(c) How would you handle the case where two sensors send at exactly the same time?"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n(a) Connectionless (UDP-like). Sensors send infrequent small data; connection overhead wastes battery and bandwidth. Occasional loss is acceptable. (b) Sensor ID (1 byte), sequence number (1 byte), timestamp (2 bytes), temperature (4 bytes) = 8-byte header. (c) Use carrier sense (listen before talk) with random backoff. If collision detected, sensor waits random time (0-500 ms) and retransmits.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "18",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encapsulation calculation."
        }), " An HTTP response body is 50,000 bytes. The TCP header is 20 bytes, IP header is 20 bytes, and Ethernet header + trailer is 26 bytes.\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "(a) What is the total frame size?"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "(b) If the MTU is 1500 bytes (including IP header), how many IP fragments are needed?"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "(c) What is the total overhead percentage (headers / total transmitted)?"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n(a) Total = 50000 (HTTP body) + 20 (TCP) + 20 (IP) + 26 (Ethernet) = 50066 bytes. (b) Payload per fragment = (1500 − 20) = 1480 bytes. Fragments = ceil(50020 / 1480) = ceil(33.8) = 34 fragments. Each fragment adds Ethernet overhead. Total transmitted = 50020 + 20×34 + 26×34 = 50020 + 680 + 884 = 51584 bytes. Overhead = (51584 − 50000) / 51584 × 100 = 3.07%.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "19",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-world analysis."
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tcpdump"
        }), " or Wireshark to capture a single HTTP request to a website of your choice. Identify:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "(a) The Ethernet header → source and destination MAC addresses."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "(b) The IP header → source and destination IP, TTL, protocol field."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "(c) The TCP header → source and destination ports, sequence number, flags."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "(d) The HTTP request line."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nExample capture: `tcpdump -X -c 1 'tcp port 80'`. (a) Ethernet: SrcMAC=00:1a:2b:3c:4d:5e, DstMAC=router's MAC. (b) IP: Src=192.168.1.10, Dst=93.184.216.34, TTL=64, Protocol=6 (TCP). (c) TCP: SrcPort=49152, DstPort=80, Seq=1000, Flags=[SYN]. (d) HTTP: `GET / HTTP/1.1`.\n"]
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