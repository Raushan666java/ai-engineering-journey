"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[28716],{

/***/ 47318
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_computer_networks_14_sdn_md_3b1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-computer-networks-14-sdn-md-3b1.json
const site_docs_courses_computer_networks_14_sdn_md_3b1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/computer-networks/14-sdn","title":"Chapter 14: Software-Defined Networking","description":"Learning Objectives","source":"@site/docs/courses/computer-networks/14-sdn.md","sourceDirName":"courses/computer-networks","slug":"/computer-networks/14-sdn","permalink":"/ai-engineering-journey/computer-networks/14-sdn","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"id":"14-sdn","slug":"/computer-networks/14-sdn","title":"Chapter 14: Software-Defined Networking","sidebar_label":"Chapter 14: Software-Defined Networking","sidebar_position":14},"sidebar":"course-computer-networks","previous":{"title":"Chapter 13: Socket Programming → Complete Reference","permalink":"/ai-engineering-journey/computer-networks/13-sockets"},"next":{"title":"Chapter 15: Web APIs and Application Protocols","permalink":"/ai-engineering-journey/computer-networks/15-web-apis"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/computer-networks/14-sdn.md


const frontMatter = {
	id: '14-sdn',
	slug: '/computer-networks/14-sdn',
	title: 'Chapter 14: Software-Defined Networking',
	sidebar_label: 'Chapter 14: Software-Defined Networking',
	sidebar_position: 14
};
const contentTitle = 'Chapter 14: Software-Defined Networking';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "14.1 The SDN Paradigm",
  "id": "141-the-sdn-paradigm",
  "level": 2
}, {
  "value": "Real-World Analogy: Air Traffic Control",
  "id": "real-world-analogy-air-traffic-control",
  "level": 3
}, {
  "value": "Numbered Steps: How SDN Handles a New Flow",
  "id": "numbered-steps-how-sdn-handles-a-new-flow",
  "level": 3
}, {
  "value": "Dry Run: OpenFlow Flow Table Match",
  "id": "dry-run-openflow-flow-table-match",
  "level": 3
}, {
  "value": "Traditional vs SDN Comparison",
  "id": "traditional-vs-sdn-comparison",
  "level": 3
}, {
  "value": "Control Plane vs Data Plane Separation",
  "id": "control-plane-vs-data-plane-separation",
  "level": 3
}, {
  "value": "Pseudocode: SDN Controller Flow Processing",
  "id": "pseudocode-sdn-controller-flow-processing",
  "level": 3
}, {
  "value": "C++ Implementation: OpenFlow Switch Simulator",
  "id": "c-implementation-openflow-switch-simulator",
  "level": 3
}, {
  "value": "Python Implementation: OpenFlow Message Parser and Switch",
  "id": "python-implementation-openflow-message-parser-and-switch",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 3
}, {
  "value": "Advantages and Disadvantages of SDN",
  "id": "advantages-and-disadvantages-of-sdn",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 3
}, {
  "value": "14.2 OpenFlow",
  "id": "142-openflow",
  "level": 2
}, {
  "value": "14.2.1 Flow Table Entry",
  "id": "1421-flow-table-entry",
  "level": 3
}, {
  "value": "14.2.2 OpenFlow Pipeline",
  "id": "1422-openflow-pipeline",
  "level": 3
}, {
  "value": "14.2.3 Actions",
  "id": "1423-actions",
  "level": 3
}, {
  "value": "14.2.4 OpenFlow Messages",
  "id": "1424-openflow-messages",
  "level": 3
}, {
  "value": "Dry Run: OpenFlow PACKET_IN / FLOW_MOD Cycle",
  "id": "dry-run-openflow-packet_in--flow_mod-cycle",
  "level": 3
}, {
  "value": "Pseudocode: OpenFlow Message Handler",
  "id": "pseudocode-openflow-message-handler",
  "level": 3
}, {
  "value": "TypeScript Implementation: OpenFlowSwitch — Flow Table &amp; Pipeline",
  "id": "typescript-implementation-openflowswitch--flow-table--pipeline",
  "level": 2
}, {
  "value": "14.3 SDN Controllers",
  "id": "143-sdn-controllers",
  "level": 2
}, {
  "value": "14.3.1 Controller Architectures",
  "id": "1431-controller-architectures",
  "level": 3
}, {
  "value": "14.3.2 SDN Controller Comparison",
  "id": "1432-sdn-controller-comparison",
  "level": 3
}, {
  "value": "14.3.3 Controller State Machine",
  "id": "1433-controller-state-machine",
  "level": 3
}, {
  "value": "TypeScript Implementation: SDNController — Topology Discovery, Flow Programming &amp; Event Handling",
  "id": "typescript-implementation-sdncontroller--topology-discovery-flow-programming--event-handling",
  "level": 2
}, {
  "value": "14.4 Network Functions Virtualization",
  "id": "144-network-functions-virtualization",
  "level": 2
}, {
  "value": "Dry Run: Service Function Chaining",
  "id": "dry-run-service-function-chaining",
  "level": 3
}, {
  "value": "14.5 Network Virtualization and Overlays",
  "id": "145-network-virtualization-and-overlays",
  "level": 2
}, {
  "value": "14.5.1 VXLAN",
  "id": "1451-vxlan",
  "level": 3
}, {
  "value": "14.5.2 Geneve",
  "id": "1452-geneve",
  "level": 3
}, {
  "value": "14.5.3 NVGRE",
  "id": "1453-nvgre",
  "level": 3
}, {
  "value": "TypeScript Implementation: NetworkVirtualization — Network Slice Manager, vSwitch &amp; Traffic Isolation",
  "id": "typescript-implementation-networkvirtualization--network-slice-manager-vswitch--traffic-isolation",
  "level": 2
}, {
  "value": "14.6 NFV vs SDN",
  "id": "146-nfv-vs-sdn",
  "level": 2
}, {
  "value": "Numbered Steps: Deploying a VNF Chain with SDN Steering",
  "id": "numbered-steps-deploying-a-vnf-chain-with-sdn-steering",
  "level": 3
}, {
  "value": "14.7 SDN Applications",
  "id": "147-sdn-applications",
  "level": 2
}, {
  "value": "Intent-Based Networking: Deep Dive",
  "id": "intent-based-networking-deep-dive",
  "level": 3
}, {
  "value": "SD-WAN",
  "id": "sd-wan",
  "level": 3
}, {
  "value": "14.8 Applications in Real Systems",
  "id": "148-applications-in-real-systems",
  "level": 2
}, {
  "value": "Google B4 (SDN WAN)",
  "id": "google-b4-sdn-wan",
  "level": 3
}, {
  "value": "VMware NSX (SDN for Data Center)",
  "id": "vmware-nsx-sdn-for-data-center",
  "level": 3
}, {
  "value": "Cisco ACI (Application Centric Infrastructure)",
  "id": "cisco-aci-application-centric-infrastructure",
  "level": 3
}, {
  "value": "Open vSwitch (OVS)",
  "id": "open-vswitch-ovs",
  "level": 3
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Q1: SDN vs Traditional Routing — What&#39;s the fundamental difference?",
  "id": "q1-sdn-vs-traditional-routing--whats-the-fundamental-difference",
  "level": 3
}, {
  "value": "Q2: OpenFlow vs NETCONF — Which one to use?",
  "id": "q2-openflow-vs-netconf--which-one-to-use",
  "level": 3
}, {
  "value": "Q3: Controller Placement Problem",
  "id": "q3-controller-placement-problem",
  "level": 3
}, {
  "value": "Q4: SDN Security Considerations",
  "id": "q4-sdn-security-considerations",
  "level": 3
}, {
  "value": "Q5: CAP Theorem in SDN Controllers",
  "id": "q5-cap-theorem-in-sdn-controllers",
  "level": 3
}, {
  "value": "Pro Tips",
  "id": "pro-tips",
  "level": 2
}, {
  "value": "One-Sentence Takeaways",
  "id": "one-sentence-takeaways",
  "level": 2
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 2
}, {
  "value": "Quick Reference: SDN Controller Comparison",
  "id": "quick-reference-sdn-controller-comparison",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Mermaid Diagram: SDN Architecture (Application, Control &amp; Data Planes)",
  "id": "mermaid-diagram-sdn-architecture-application-control--data-planes",
  "level": 2
}, {
  "value": "Case Study: Google&#39;s B4 SDN WAN",
  "id": "case-study-googles-b4-sdn-wan",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
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
    annotation: "annotation",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    math: "math",
    mi: "mi",
    mn: "mn",
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
        id: "chapter-14-software-defined-networking",
        children: "Chapter 14: Software-Defined Networking"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the separation of control plane and data plane in SDN."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the OpenFlow protocol and its role in switch-controller communication."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the architecture of SDN controllers and their northbound/southbound interfaces."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare network functions virtualization (NFV) with traditional network appliances."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate overlay networks including VXLAN and their role in network virtualization."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement SDN switch simulator logic in C++ and Python."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze complexity trade-offs in SDN controller placement and flow table design."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "141-the-sdn-paradigm",
      children: "14.1 The SDN Paradigm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/computer-networks/ch10-sdn-cloud-modern.png",
        alt: "SDN, NFV, Cloud Networking and Modern Trends"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/computer-networks/ch-17-software-defined-networking-sdn.png",
        alt: "Software-Defined Networking Architecture"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Traditional network devices integrate the control plane (routing, signaling) and data plane (packet forwarding) on the same hardware. The control plane runs distributed protocols (OSPF, BGP) that converge based on local information. This distributed architecture is robust but difficult to manage, slow to innovate, and tightly coupled to vendor hardware."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Software-Defined Networking (SDN) separates the control plane from the data plane:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data plane"
        }), ": simple forwarding devices (switches, routers) that perform packet matching and action based on flow tables."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Control plane"
        }), ": a logically centralized controller that computes forwarding rules and installs them on data-plane devices."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The controller provides a global view of the network topology, enabling network-wide optimization, simplified management, and rapid protocol innovation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-air-traffic-control",
      children: "Real-World Analogy: Air Traffic Control"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The SDN control plane is analogous to air traffic control (ATC). The data plane (airports/runways) just lands and launches planes; the control plane (ATC towers) decides which runway each plane uses, the order of landing, and rerouting during storms."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "SDN Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Air Traffic Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SDN Controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ATC Tower (centralized decision-making)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpenFlow Switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Airport Runway (follows instructions)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flow Table Entry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flight Plan for a specific aircraft"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PACKET_IN message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pilot asking \"Which runway do I use?\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLOW_MOD message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ATC replying \"Use runway 27L\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flow Table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schedule board of active flight plans"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Packet Buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Holding pattern while waiting for instructions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-how-sdn-handles-a-new-flow",
      children: "Numbered Steps: How SDN Handles a New Flow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A packet arrives at an OpenFlow switch ingress port."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The switch extracts header fields (src/dst IP, port, protocol) to form a match key."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The switch looks up the flow table in priority order."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If a matching entry exists, execute the associated action (OUTPUT, DROP, SET-FIELD) and update counters."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If no match is found, the switch buffers the packet and sends a PACKET_IN message to the controller."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The controller receives PACKET_IN and computes the forwarding decision using its global topology view."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The controller sends a FLOW_MOD message instructing the switch to add a new flow entry."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The switch installs the flow entry with match fields, action, and timeouts."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The switch sends the buffered (or subsequent) packet according to the new rule."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Subsequent packets in the same flow match the installed entry and are processed at line rate."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-openflow-flow-table-match",
      children: "Dry Run: OpenFlow Flow Table Match"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Flow Table (pre-populated):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Priority"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Match (IP dst)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Counters"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.0.0.0/24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OUTPUT port 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pkts=150, bytes=19200"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0.0.0/0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CONTROLLER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pkts=12, bytes=840"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Incoming Packet:"
      }), " src=10.0.0.5, dst=10.0.0.20, port=80 (TCP SYN)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract 5-tuple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "src=10.0.0.5, dst=10.0.0.20, proto=TCP, dport=80"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flow Table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match priority 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dst=10.0.0.20 matches 10.0.0.0/24"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Execute action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OUTPUT to port 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pkts=151, bytes=19200+64=19264"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Incoming Packet:"
      }), " src=10.0.1.1, dst=172.16.0.1, port=443 (TCP SYN)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract 5-tuple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "src=10.0.1.1, dst=172.16.0.1, proto=TCP, dport=443"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flow Table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match priority 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FAIL: 172.16.0.1 not in 10.0.0.0/24"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flow Table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match priority 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Catch-all matches 0.0.0.0/0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Execute action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer packet, send PACKET_IN to controller"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dst=172.16.0.1 is reachable via port 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send FLOW_MOD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add entry: match=172.16.0.1/32, priority=15, action=OUTPUT port 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Install entry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New flow entry at priority 15"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward buffered packet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send to port 3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "traditional-vs-sdn-comparison",
      children: "Traditional vs SDN Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Traditional Networking"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SDN"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Control Plane"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed on each device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized controller"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forwarding Decision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-device (OSPF, BGP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controller computes global paths"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proprietary ASICs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Commodity switches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol Innovation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Years (vendor-driven)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Months (software update)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network View"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local (routing tables)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global topology"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Policy Enforcement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-device CLI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Programmatic, network-wide"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Failure Recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed convergence (seconds)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controller reroute (milliseconds)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal (add devices)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controller clustering needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost per 10G port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (vendor lock-in)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (white-box switches)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLI/SNMP per device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REST/gRPC unified API"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perimeter-based, static"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic, tenant-aware"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-tenancy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VLANs limited to 4094"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VXLAN 16M segments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic Engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual, static"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic, automated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor Lock-in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (OpenFlow standard)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "control-plane-vs-data-plane-separation",
      children: "Control Plane vs Data Plane Separation"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Control Plane"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Plane"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routing, signaling, policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packet forwarding, filtering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Location"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controller (centralized)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch hardware (distributed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex (path computation, QoS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple (match-action)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global network topology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flow table entries only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Update Rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (topology changes, policy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (per-packet line rate)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Failure Impact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loss of visibility, no new flows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Existing flows continue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Software (Java, Python, C++)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware ASIC, TCAM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large (full topology DB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited (TCAM, SRAM)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenFlow, NETCONF, gRPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw packet processing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consistency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong (Raft consensus)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eventual (flow table sync)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-sdn-controller-flow-processing",
      children: "Pseudocode: SDN Controller Flow Processing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "CONTROLLER_FLOW_PROCESSING(packet_in_msg, topology_db, policy_db):\n    INPUT:  packet_in_msg from switch S\n            topology_db = graph of switches and links\n            policy_db = set of access control and QoS rules\n    OUTPUT: flow_mod message or drop decision\n\n    # Step 1: Parse the unmatched packet\n    headers = PARSE_PACKET(packet_in_msg.buffer)\n    src_ip  = headers.src_ip\n    dst_ip  = headers.dst_ip\n    src_port = headers.tcp_src\n    dst_port = headers.tcp_dst\n    protocol = headers.ip_proto\n\n    # Step 2: Apply access control policies\n    FOR each rule IN policy_db.acl:\n        IF MATCHES(headers, rule.match_fields):\n            IF rule.action == \"DROP\":\n                RETURN flow_mod(\n                    match=headers,\n                    action=\"DROP\",\n                    priority=rule.priority,\n                    hard_timeout=rule.timeout\n                )\n\n    # Step 3: Compute shortest path\n    src_switch = FIND_SWITCH(topology_db, src_ip)\n    dst_switch = FIND_SWITCH(topology_db, dst_ip)\n\n    path = SHORTEST_PATH(topology_db.graph, src_switch, dst_switch)\n\n    IF path IS EMPTY:\n        RETURN flow_mod(match=headers, action=\"DROP\", priority=100)\n\n    # Step 4: Determine output port on the ingress switch\n    next_hop = path[1]  # first hop after ingress switch\n    out_port = GET_PORT_FOR_NEIGHBOR(src_switch, next_hop)\n\n    # Step 5: Apply QoS marking\n    qos_queue = policy_db.qos.get(dst_port, default=0)\n\n    # Step 6: Install flow entry\n    RETURN flow_mod(\n        match=headers,\n        action=OUTPUT(port=out_port, queue=qos_queue),\n        priority=100,\n        idle_timeout=60,\n        hard_timeout=300,\n        cookie=GENERATE_COOKIE()\n    )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-openflow-switch-simulator",
      children: "C++ Implementation: OpenFlow Switch Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <unordered_map>\n#include <tuple>\n#include <chrono>\n#include <cstdint>\n#include <algorithm>\n#include <sstream>\n#include <queue>\n\n// Simplified packet header representation\nstruct PacketHeader {\n    uint32_t src_ip;\n    uint32_t dst_ip;\n    uint8_t  protocol;\n    uint16_t src_port;\n    uint16_t dst_port;\n    uint16_t eth_type;\n    uint8_t  tos;\n\n    std::string to_string() const {\n        std::stringstream ss;\n        ss << (src_ip>>24)&0xFF << \".\" << (src_ip>>16)&0xFF << \".\"\n           << (src_ip>>8)&0xFF << \".\" << (src_ip)&0xFF;\n        ss << \" -> \";\n        ss << (dst_ip>>24)&0xFF << \".\" << (dst_ip>>16)&0xFF << \".\"\n           << (dst_ip>>8)&0xFF << \".\" << (dst_ip)&0xFF;\n        ss << \" proto=\" << (int)protocol << \" port=\" << dst_port;\n        return ss.str();\n    }\n};\n\n// Flow entry match structure\nstruct FlowMatch {\n    uint32_t dst_ip;\n    uint32_t dst_mask;\n    uint16_t dst_port;\n    uint8_t  protocol;\n    uint8_t  priority;\n\n    bool matches(const PacketHeader& pkt) const {\n        bool ip_match = (pkt.dst_ip & dst_mask) == (dst_ip & dst_mask);\n        bool port_match = (dst_port == 0) || (pkt.dst_port == dst_port);\n        bool proto_match = (protocol == 0) || (pkt.protocol == protocol);\n        return ip_match && port_match && proto_match;\n    }\n};\n\n// Action types\nenum class ActionType { OUTPUT, DROP, CONTROLLER, SET_FIELD };\n\nstruct FlowAction {\n    ActionType type;\n    uint16_t   output_port;\n    uint32_t   set_field_val;\n};\n\n// Full flow entry\nstruct FlowEntry {\n    FlowMatch   match;\n    FlowAction  action;\n    uint64_t    packet_count;\n    uint64_t    byte_count;\n    uint32_t    idle_timeout;\n    uint32_t    hard_timeout;\n    uint64_t    cookie;\n    std::chrono::steady_clock::time_point installed_at;\n    std::chrono::steady_clock::time_point last_matched;\n\n    bool is_expired() const {\n        auto now = std::chrono::steady_clock::now();\n        auto elapsed_hard = std::chrono::duration_cast<std::chrono::seconds>(\n            now - installed_at).count();\n        if (hard_timeout > 0 && elapsed_hard >= hard_timeout) return true;\n        auto elapsed_idle = std::chrono::duration_cast<std::chrono::seconds>(\n            now - last_matched).count();\n        if (idle_timeout > 0 && elapsed_idle >= idle_timeout) return true;\n        return false;\n    }\n};\n\n// OpenFlow message types\nenum class OFMessageType {\n    PACKET_IN, FLOW_MOD, PACKET_OUT, FEATURES_REPLY, ERROR\n};\n\nstruct OFMessage {\n    OFMessageType type;\n    uint64_t      cookie;\n    uint16_t      buffer_id;\n    uint16_t      reason;\n    FlowEntry     flow;\n    PacketHeader  pkt;\n};\n\n// Controller interface\nclass SDNController {\npublic:\n    virtual OFMessage handle_packet_in(\n        const PacketHeader& pkt, uint16_t in_port, uint64_t switch_id) = 0;\n    virtual void handle_switch_connect(uint64_t switch_id) = 0;\n    virtual void handle_switch_disconnect(uint64_t switch_id) = 0;\n    virtual ~SDNController() = default;\n};\n\n// Learning-switch controller\nclass LearningSwitchController : public SDNController {\nprivate:\n    std::unordered_map<uint64_t, uint16_t> mac_table;\n    uint64_t next_cookie = 1;\n    uint16_t flood_port = 0xFFFE;\n\npublic:\n    OFMessage handle_packet_in(\n        const PacketHeader& pkt, uint16_t in_port, uint64_t switch_id) override {\n        uint64_t src_mac = (static_cast<uint64_t>(pkt.src_ip) << 16) ^ pkt.src_port;\n        mac_table[src_mac] = in_port;\n        uint64_t dst_mac = (static_cast<uint64_t>(pkt.dst_ip) << 16) ^ pkt.dst_port;\n        auto it = mac_table.find(dst_mac);\n\n        OFMessage flow_mod;\n        flow_mod.type = OFMessageType::FLOW_MOD;\n        flow_mod.cookie = next_cookie++;\n        flow_mod.flow.match.dst_ip = pkt.dst_ip;\n        flow_mod.flow.match.dst_mask = 0xFFFFFFFF;\n        flow_mod.flow.match.dst_port = pkt.dst_port;\n        flow_mod.flow.match.protocol = pkt.protocol;\n        flow_mod.flow.match.priority = 100;\n        flow_mod.flow.idle_timeout = 60;\n        flow_mod.flow.hard_timeout = 300;\n\n        if (it != mac_table.end()) {\n            flow_mod.flow.action = {ActionType::OUTPUT, it->second, 0};\n        } else {\n            flow_mod.flow.action = {ActionType::OUTPUT, flood_port, 0};\n        }\n        flow_mod.flow.packet_count = 0;\n        flow_mod.flow.byte_count = 0;\n        flow_mod.flow.installed_at = std::chrono::steady_clock::now();\n        flow_mod.flow.last_matched = flow_mod.flow.installed_at;\n        return flow_mod;\n    }\n\n    void handle_switch_connect(uint64_t switch_id) override {\n        std::cout << \"[Controller] Switch \" << switch_id << \" connected.\\n\";\n    }\n\n    void handle_switch_disconnect(uint64_t switch_id) override {\n        std::cout << \"[Controller] Switch \" << switch_id\n                  << \" disconnected. Flushing MAC table.\\n\";\n        mac_table.clear();\n    }\n};\n\n// OpenFlow switch simulator\nclass OpenFlowSwitch {\nprivate:\n    uint64_t switch_id;\n    std::vector<FlowEntry> flow_table;\n    SDNController* controller;\n    size_t max_flow_entries;\n    bool connected;\n\npublic:\n    OpenFlowSwitch(uint64_t id, SDNController* ctrl, size_t max_flows = 1024)\n        : switch_id(id), controller(ctrl), max_flow_entries(max_flows), connected(false) {}\n\n    bool connect_to_controller() {\n        connected = true;\n        controller->handle_switch_connect(switch_id);\n        return true;\n    }\n\n    void disconnect() {\n        connected = false;\n        controller->handle_switch_disconnect(switch_id);\n    }\n\n    bool is_connected() const { return connected; }\n\n    uint16_t process_packet(const PacketHeader& pkt, uint16_t in_port) {\n        if (!connected) {\n            std::cerr << \"[Switch \" << switch_id << \"] Not connected. Dropping.\\n\";\n            return 0;\n        }\n\n        auto it = std::remove_if(flow_table.begin(), flow_table.end(),\n            [](const FlowEntry& e) { return e.is_expired(); });\n        flow_table.erase(it, flow_table.end());\n\n        std::sort(flow_table.begin(), flow_table.end(),\n            [](const FlowEntry& a, const FlowEntry& b) {\n                return a.match.priority > b.match.priority;\n            });\n\n        for (auto& entry : flow_table) {\n            if (entry.match.matches(pkt)) {\n                entry.packet_count++;\n                entry.byte_count += 64;\n                entry.last_matched = std::chrono::steady_clock::now();\n\n                std::cout << \"[Switch \" << switch_id << \"] MATCH: \"\n                          << pkt.to_string() << \" -> \";\n                if (entry.action.type == ActionType::OUTPUT) {\n                    std::cout << \"OUTPUT port \" << entry.action.output_port;\n                    if (entry.action.output_port != in_port) return entry.action.output_port;\n                    return 0;\n                } else if (entry.action.type == ActionType::DROP) {\n                    std::cout << \"DROP\";\n                    return 0;\n                } else if (entry.action.type == ActionType::CONTROLLER) {\n                    return 0xFFFF;\n                }\n                std::cout << \"\\n\";\n            }\n        }\n\n        std::cout << \"[Switch \" << switch_id << \"] NO MATCH: \"\n                  << pkt.to_string() << \" -> PACKET_IN\\n\";\n\n        OFMessage reply = controller->handle_packet_in(pkt, in_port, switch_id);\n        if (reply.type == OFMessageType::FLOW_MOD) {\n            if (flow_table.size() < max_flow_entries) {\n                flow_table.push_back(reply.flow);\n                std::cout << \"[Switch \" << switch_id << \"] Installed flow: \"\n                          << pkt.to_string() << \"\\n\";\n                if (reply.flow.action.type == ActionType::OUTPUT\n                    && reply.flow.action.output_port != in_port)\n                    return reply.flow.action.output_port;\n            } else {\n                std::cerr << \"[Switch \" << switch_id << \"] Flow table full.\\n\";\n                return 0;\n            }\n        }\n        return 0;\n    }\n\n    void print_flow_table() const {\n        std::cout << \"\\n=== Flow Table: Switch \" << switch_id << \" ===\\n\";\n        std::cout << \"Pri | Dst IP        | Port | Proto | Action  | Pkts\\n\";\n        std::cout << \"----+---------------+---------------+-------+--------+------\\n\";\n        for (const auto& e : flow_table) {\n            std::cout << (int)e.match.priority << \"   | \"\n                      << ((e.match.dst_ip >> 24) & 0xFF) << \".\"\n                      << ((e.match.dst_ip >> 16) & 0xFF) << \".\"\n                      << ((e.match.dst_ip >> 8) & 0xFF) << \".\"\n                      << (e.match.dst_ip & 0xFF) << \"/\"\n                      << __builtin_popcount(e.match.dst_mask) << \" | \"\n                      << e.match.dst_port << \"      | \"\n                      << (int)e.match.protocol << \"     | \";\n            if (e.action.type == ActionType::OUTPUT) std::cout << \"OUTPUT:\" << e.action.output_port;\n            else if (e.action.type == ActionType::DROP) std::cout << \"DROP\";\n            else std::cout << \"CTRL\";\n            std::cout << \" | \" << e.packet_count << \"\\n\";\n        }\n        std::cout << \"===============================\\n\\n\";\n    }\n};\n\nint main() {\n    LearningSwitchController ctrl;\n    OpenFlowSwitch sw(1, &ctrl, 5);\n    sw.connect_to_controller();\n\n    auto make_pkt = [](uint32_t s, uint32_t d, uint8_t proto,\n                        uint16_t sp, uint16_t dp) {\n        return PacketHeader{s, d, proto, sp, dp, 0x0800, 0};\n    };\n\n    auto pkt1 = make_pkt(0x0A000001, 0x0A000002, 6, 12345, 80);\n    auto pkt2 = make_pkt(0x0A000001, 0x0A000002, 6, 12346, 80);\n    auto pkt3 = make_pkt(0x0A000003, 0x0A00000A, 6, 54321, 443);\n    auto pkt4 = make_pkt(0x0A000004, 0x0A00000A, 6, 11111, 443);\n\n    sw.process_packet(pkt1, 1);\n    sw.process_packet(pkt2, 1);\n    sw.process_packet(pkt3, 2);\n    sw.process_packet(pkt4, 2);\n    sw.print_flow_table();\n\n    sw.disconnect();\n    auto pkt5 = make_pkt(0x0A000005, 0x0A000002, 6, 22222, 80);\n    sw.process_packet(pkt5, 3);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-openflow-message-parser-and-switch",
      children: "Python Implementation: OpenFlow Message Parser and Switch"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import struct\nimport time\nfrom dataclasses import dataclass, field\nfrom typing import Optional, List, Dict, Tuple\nfrom enum import IntEnum\n\n\nclass OFMessageType(IntEnum):\n    HELLO = 0\n    ERROR = 1\n    ECHO_REQUEST = 2\n    ECHO_REPLY = 3\n    FEATURES_REQUEST = 5\n    FEATURES_REPLY = 6\n    PACKET_IN = 10\n    FLOW_MOD = 14\n    PACKET_OUT = 13\n    FLOW_REMOVED = 11\n\n\nclass ActionType(IntEnum):\n    OUTPUT = 0\n    SET_FIELD = 1\n    GROUP = 2\n    DROP = 3\n\n\n@dataclass\nclass FlowMatch:\n    dst_ip: int = 0\n    dst_mask: int = 0xFFFFFFFF\n    dst_port: int = 0\n    protocol: int = 0\n    priority: int = 0\n    ingress_port: int = 0\n\n    def matches(self, pkt: 'Packet') -> bool:\n        ip_ok = (pkt.dst_ip & self.dst_mask) == (self.dst_ip & self.dst_mask)\n        port_ok = (self.dst_port == 0) or (pkt.dst_port == self.dst_port)\n        proto_ok = (self.protocol == 0) or (pkt.protocol == self.protocol)\n        return ip_ok and port_ok and proto_ok\n\n\n@dataclass\nclass FlowAction:\n    action_type: ActionType = ActionType.DROP\n    output_port: int = 0\n    set_field_value: int = 0\n\n\n@dataclass\nclass FlowEntry:\n    match: FlowMatch = field(default_factory=FlowMatch)\n    action: FlowAction = field(default_factory=FlowAction)\n    packet_count: int = 0\n    byte_count: int = 0\n    idle_timeout: int = 60\n    hard_timeout: int = 300\n    cookie: int = 0\n    installed_at: float = 0.0\n    last_matched: float = 0.0\n\n    def is_expired(self) -> bool:\n        now = time.time()\n        if self.hard_timeout > 0 and (now - self.installed_at) >= self.hard_timeout:\n            return True\n        if self.idle_timeout > 0 and (now - self.last_matched) >= self.idle_timeout:\n            return True\n        return False\n\n\n@dataclass\nclass Packet:\n    src_ip: int\n    dst_ip: int\n    protocol: int\n    src_port: int\n    dst_port: int\n    eth_type: int = 0x0800\n    payload: bytes = b''\n    ingress_port: int = 0\n\n    @staticmethod\n    def from_bytes(data: bytes) -> 'Packet':\n        if len(data) < 14:\n            raise ValueError(\"Packet too short\")\n        eth_type = struct.unpack('!H', data[12:14])[0]\n        if eth_type == 0x0800 and len(data) >= 34:\n            ip_header = data[14:34]\n            ihl = (ip_header[0] & 0x0F) * 4\n            protocol = ip_header[9]\n            src_ip = struct.unpack('!I', ip_header[12:16])[0]\n            dst_ip = struct.unpack('!I', ip_header[16:20])[0]\n            src_port = 0\n            dst_port = 0\n            if protocol in (6, 17) and len(data) >= 14 + ihl + 4:\n                sport, dport = struct.unpack('!HH', data[14+ihl:14+ihl+4])\n                src_port, dst_port = sport, dport\n            return Packet(src_ip, dst_ip, protocol, src_port, dst_port,\n                          eth_type, data, 0)\n        raise ValueError(f\"Unsupported ethertype: {hex(eth_type)}\")\n\n    def ip_to_str(self, ip: int) -> str:\n        return f\"{(ip>>24)&0xFF}.{(ip>>16)&0xFF}.{(ip>>8)&0xFF}.{ip&0xFF}\"\n\n    def __str__(self) -> str:\n        return f\"{self.ip_to_str(self.src_ip)}:{self.src_port} -> {self.ip_to_str(self.dst_ip)}:{self.dst_port}\"\n\n\n@dataclass\nclass OFMessage:\n    msg_type: OFMessageType\n    version: int = 4\n    xid: int = 0\n    body: bytes = b''\n    flow: Optional[FlowEntry] = None\n    packet: Optional[Packet] = None\n    buffer_id: int = 0\n\n\nclass OFMessageParser:\n    OF_HEADER_FMT = '!BBHI'\n    OF_HEADER_SIZE = 8\n\n    @staticmethod\n    def parse_header(data: bytes) -> Tuple[int, OFMessageType, int, int]:\n        if len(data) < OFMessageParser.OF_HEADER_SIZE:\n            raise ValueError(\"Header too short\")\n        version, msg_type, length, xid = struct.unpack(\n            OFMessageParser.OF_HEADER_FMT, data[:8])\n        return version, OFMessageType(msg_type), length, xid\n\n    @staticmethod\n    def serialize(msg: OFMessage) -> bytes:\n        body = msg.body\n        length = OFMessageParser.OF_HEADER_SIZE + len(body)\n        header = struct.pack(\n            OFMessageParser.OF_HEADER_FMT,\n            msg.version, msg.msg_type.value, length, msg.xid\n        )\n        return header + body\n\n    @staticmethod\n    def serialize_flow_mod(flow: FlowEntry) -> OFMessage:\n        body = struct.pack('!Q', flow.cookie)\n        return OFMessage(\n            msg_type=OFMessageType.FLOW_MOD, version=4,\n            xid=hash(flow) & 0xFFFFFFFF, body=body, flow=flow\n        )\n\n    @staticmethod\n    def serialize_packet_out(pkt: Packet, out_port: int) -> OFMessage:\n        body = struct.pack('!HH', out_port, len(pkt.payload)) + pkt.payload\n        return OFMessage(\n            msg_type=OFMessageType.PACKET_OUT, version=4,\n            xid=0, body=body, packet=pkt\n        )\n\n\nclass SDNController:\n    def handle_packet_in(self, pkt: Packet, in_port: int, sw_id: int) -> OFMessage:\n        raise NotImplementedError\n\n    def switch_connected(self, sw_id: int):\n        print(f\"[Controller] Switch {sw_id} connected.\")\n\n    def switch_disconnected(self, sw_id: int):\n        print(f\"[Controller] Switch {sw_id} disconnected.\")\n\n\nclass LearningSwitchController(SDNController):\n    def __init__(self):\n        self.mac_table: Dict[int, int] = {}\n        self.next_cookie = 1\n\n    def handle_packet_in(self, pkt: Packet, in_port: int, sw_id: int) -> OFMessage:\n        src_key = hash((pkt.src_ip, pkt.src_port))\n        self.mac_table[src_key] = in_port\n        dst_key = hash((pkt.dst_ip, pkt.dst_port))\n        out_port = self.mac_table.get(dst_key, 0xFFFE)\n\n        flow = FlowEntry(\n            match=FlowMatch(\n                dst_ip=pkt.dst_ip, dst_mask=0xFFFFFFFF,\n                dst_port=pkt.dst_port, protocol=pkt.protocol, priority=100\n            ),\n            action=FlowAction(action_type=ActionType.OUTPUT, output_port=out_port),\n            cookie=self.next_cookie,\n            installed_at=time.time(), last_matched=time.time()\n        )\n        self.next_cookie += 1\n        return OFMessageParser.serialize_flow_mod(flow)\n\n\nclass OpenFlowSwitch:\n    def __init__(self, sw_id: int, controller: SDNController, max_entries: int = 1024):\n        self.sw_id = sw_id\n        self.controller = controller\n        self.flow_table: List[FlowEntry] = []\n        self.max_entries = max_entries\n        self.connected = False\n        self.buffers: Dict[int, Packet] = {}\n        self.next_buffer_id = 1\n\n    def connect(self) -> bool:\n        self.connected = True\n        self.controller.switch_connected(self.sw_id)\n        return True\n\n    def disconnect(self):\n        self.connected = False\n        self.controller.switch_disconnected(self.sw_id)\n\n    def _evict_expired(self):\n        before = len(self.flow_table)\n        self.flow_table = [e for e in self.flow_table if not e.is_expired()]\n        evicted = before - len(self.flow_table)\n        if evicted > 0:\n            print(f\"[Switch {self.sw_id}] Evicted {evicted} expired entries.\")\n\n    def process_packet(self, pkt: Packet) -> Optional[int]:\n        if not self.connected:\n            print(f\"[Switch {self.sw_id}] NOT CONNECTED. Dropping.\")\n            return None\n\n        self._evict_expired()\n        self.flow_table.sort(key=lambda e: e.match.priority, reverse=True)\n\n        for entry in self.flow_table:\n            if entry.match.matches(pkt):\n                entry.packet_count += 1\n                entry.byte_count += len(pkt.payload) if pkt.payload else 64\n                entry.last_matched = time.time()\n                print(f\"[Switch {self.sw_id}] MATCH: {pkt} -> \", end=\"\")\n                if entry.action.action_type == ActionType.OUTPUT:\n                    print(f\"OUTPUT port {entry.action.output_port}\")\n                    if entry.action.output_port != pkt.ingress_port:\n                        return entry.action.output_port\n                    return None\n                elif entry.action.action_type == ActionType.DROP:\n                    print(\"DROP\")\n                    return None\n                return None\n\n        print(f\"[Switch {self.sw_id}] NO MATCH: {pkt} -> PACKET_IN\")\n        buffer_id = self.next_buffer_id\n        self.next_buffer_id += 1\n        self.buffers[buffer_id] = pkt\n\n        reply_msg = self.controller.handle_packet_in(\n            pkt, pkt.ingress_port, self.sw_id\n        )\n\n        if (reply_msg.msg_type == OFMessageType.FLOW_MOD\n                and reply_msg.flow is not None):\n            if len(self.flow_table) < self.max_entries:\n                self.flow_table.append(reply_msg.flow)\n                print(f\"[Switch {self.sw_id}] Installed flow: {pkt}\")\n                if (reply_msg.flow.action.action_type == ActionType.OUTPUT\n                        and reply_msg.flow.action.output_port != pkt.ingress_port):\n                    return reply_msg.flow.action.output_port\n            else:\n                print(f\"[Switch {self.sw_id}] FLOW TABLE FULL.\")\n        return None\n\n    def get_stats(self) -> Dict:\n        return {\n            'sw_id': self.sw_id, 'connected': self.connected,\n            'flow_count': len(self.flow_table), 'max_entries': self.max_entries,\n            'entries': [{\n                'priority': e.match.priority, 'packets': e.packet_count,\n                'timeout': e.idle_timeout, 'action': e.action.action_type.name\n            } for e in self.flow_table]\n        }\n\n\ndef dry_run():\n    ctrl = LearningSwitchController()\n    sw = OpenFlowSwitch(1, ctrl, max_entries=5)\n    sw.connect()\n\n    def make_pkt(s_ip, d_ip, proto=6, sp=12345, dp=80):\n        return Packet(s_ip, d_ip, proto, sp, dp)\n\n    print(\"\\n=== DRY RUN: OpenFlow Switch ===\")\n    pkts = [\n        make_pkt(0x0A000001, 0x0A000002, 6, 12345, 80),\n        make_pkt(0x0A000001, 0x0A000002, 6, 12346, 80),\n        make_pkt(0x0A000003, 0x0A00000A, 6, 54321, 443),\n        make_pkt(0x0A000004, 0x0A00000A, 6, 11111, 443),\n    ]\n    for i, p in enumerate(pkts, 1):\n        p.ingress_port = 1 if i <= 2 else 2\n        out = sw.process_packet(p)\n        print(f\"  -> Output port: {out}\")\n\n    print(f\"\\nFinal flow table: {len(sw.flow_table)} entries\")\n    import json\n    print(json.dumps(sw.get_stats(), indent=2))\n\n    print(\"\\n--- Edge case: switch disconnect ---\")\n    sw.disconnect()\n    pkt5 = make_pkt(0x0A000005, 0x0A000002, 6, 22222, 80)\n    sw.process_packet(pkt5)\n    print(\"Packet dropped because switch is disconnected.\")\n\n\nif __name__ == \"__main__\":\n    dry_run()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Flow table lookup (linear)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(F)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(F)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst-case scans all entries; F = flow count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flow table lookup (TCAM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(F)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCAM parallelizes all entries in hardware"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flow table insertion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(F)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append to vector; resize cost amortized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flow entry eviction (expired)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(F)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) extra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear scan to find and remove expired entries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PACKET_IN serialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(P)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(P)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copies packet payload into message (P = packet size)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLOW_MOD deserialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-size header plus variable match fields"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shortest path (Dijkstra)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O((V+E) log V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V = switches, E = links; priority queue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flow table priority re-sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(F log F)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) extra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QuickSort after inserts or before match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAC learning (hash table)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) average"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M = MAC entries; hash collisions O(M) worst"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Controller failover (Raft)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N log N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leader election requires majority of N controllers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why linear flow table lookup is acceptable in software switches (Open vSwitch):"
      }), " Software switches handle millions of flows but cannot use TCAM. They use microflow caching (exact-match hash table) for the first few packets, then megaflow caching (wildcard patterns) via kernel datapath. The first packet of each flow takes O(F) in userspace, but subsequent packets are O(1) in the kernel cache."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Dijkstra is preferred over Bellman-Ford in SDN:"
      }), " SDN controllers have a complete topology view. Dijkstra with a Fibonacci heap gives O(V log V + E), optimal for static graphs. Bellman-Ford's O(VE) is needed only for distributed convergence where nodes lack global topology — unnecessary in SDN."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages-of-sdn",
      children: "Advantages and Disadvantages of SDN"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Programmability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network-wide policy push via API; rapid feature deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Software bugs affect entire network; controller single point of failure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized Visibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global topology view; optimal path computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability bottleneck; state synchronization overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware Abstraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "White-box switches reduce cost; vendor independence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance gap vs proprietary ASICs for some workloads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic Engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic load balancing; bandwidth calendaring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires accurate traffic matrix estimation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Innovation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New protocols deployed as controller apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Migration complexity from legacy networks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-tenancy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fine-grained isolation; per-tenant flow tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flow table resource contention across tenants"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized policy enforcement; rapid threat response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controller itself is high-value target; DoS risk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated provisioning; reduced OPEX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires new skills (programming, not just CLI)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Case 1: Controller Failure"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When the SDN controller crashes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Existing flow entries remain in the switch (hardware continues forwarding)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New flows that miss the flow table cannot be resolved — PACKET_INs go unanswered."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The switch may enter \"fail-secure\" mode (drop unmatched packets) or \"fail-standalone\" mode (fall back to traditional L2/L3 forwarding)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["OpenFlow 1.3 defines the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "OFPC_FAIL_MODE_SECURE"
        }), " flag."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recovery: when the controller reconnects, it must re-install all flow entries."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mitigations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy controller clusters (ONOS uses Raft with 3+ nodes)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use fast failover group tables (OpenFlow 1.3+): pre-program backup paths activated without controller involvement."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "OFPFF_NO_PKT_COUNTS"
        }), " to reduce state that must be re-synced on reconnection."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Case 2: Switch-Controller Disconnect (TCP timeout)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When the TCP connection drops:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The switch sends an OFPT_ERROR message with OFPET_BAD_CONNECTION type."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The controller detects disconnection via ECHO_REQUEST/ECHO_REPLY (default 5s interval, 3 retries)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["During disconnection with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fail_mode=secure"
        }), ": continue forwarding using existing flow table; all PACKET_INs dropped."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["During disconnection with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fail_mode=standalone"
        }), ": the switch reverts to independent L2 learning switch behavior."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "On reconnection, the controller sends a BARRIER_REQUEST to flush pending messages, then performs full state synchronization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Case 3: Flow Table Overflow"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When the switch TCAM or SRAM is full:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The switch sends OFPT_ERROR with OFPET_FLOW_MOD_FAILED and code OFPFMFC_TABLE_FULL."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The controller must either: evict low-priority entries (controller-driven eviction), aggregate specific flows into wildcard entries (e.g., /24 instead of /32), or use multiple flow tables to split matching across stages."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flow table size on real hardware: 1K–4K entries in TCAM; 32K–256K entries in SRAM."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Case 4: Loop Prevention During Flow Installation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a new flow entry creates a forwarding loop:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Controller must validate paths before installation using DFS loop detection on the topology graph."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OpenFlow supports TTL-based anti-loop: decrement IP TTL in the pipeline and drop when TTL reaches 0."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fast failover groups can be misconfigured to create loops between switches."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Case 5: Race Conditions in Distributed Controllers"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When two controller instances install conflicting flow entries:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distributed databases (ONOS with Atomix/Raft) use optimistic concurrency control: the second write fails if modified since read."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OpenFlow cookies serve as version numbers — the switch rejects FLOW_MOD with an outdated cookie."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use idempotent operations and sequence numbers."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "142-openflow",
      children: "14.2 OpenFlow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OpenFlow (ONF specification) is the standard protocol for communication between the SDN controller and the data-plane switches."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1421-flow-table-entry",
      children: "14.2.1 Flow Table Entry"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An OpenFlow flow table entry consists of:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Match fields"
        }), ": ingress port, Ethernet src/dst, VLAN ID, IP src/dst, IP protocol, TCP/UDP src/dst ports, MPLS labels, etc."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Priority"
        }), ": matching precedence (higher priority wins)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Counters"
        }), ": packet count, byte count, duration."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Instructions"
        }), ": actions to perform on matching packets."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Timeouts"
        }), ": idle timeout and hard timeout."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cookie"
        }), ": opaque data for the controller."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1422-openflow-pipeline",
      children: "14.2.2 OpenFlow Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The OpenFlow 1.3+ pipeline processes packets through multiple sequential tables:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "    +------------+     +------------+     +------------+     +-----------+\n    | Table 0    | --> | Table 1    | --> | Table 2    | --> | ... Table N|\n    | (Ingress)  |     | (ACL)      |     | (Routing)  |     | (Egress)  |\n    +------------+     +------------+     +------------+     +-----------+\n         |                   |                  |                  |\n         v                   v                  v                  v\n    +------------+     +------------+     +------------+     +-----------+\n    | Group Table|     | Meter Table|     |  Output    |     |  Output   |\n    +------------+     +------------+     +-----------+     +-----------+\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Flow Table:"
      }), " Each table contains flow entries. A packet starts at table 0 and processes sequentially. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "goto-table"
      }), " instruction redirects to the next table. Tables support:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exact match"
        }), ": all bits must match."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wildcard match"
        }), ": some bits are wildcarded."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ternary match"
        }), ": arbitrary bitmask (TCAM hardware)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Group Table:"
      }), " Enables more complex actions:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ALL"
        }), ": execute all buckets (multicast/broadcast)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SELECT"
        }), ": execute one bucket based on hash (load balancing)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "INDIRECT"
        }), ": execute one bucket (chaining)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FAST FAILOVER"
        }), ": execute first live bucket (automatic protection switching)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Meter Table:"
      }), " Measures and controls rate:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rate-limit"
        }), ": drop packets exceeding a configured bandwidth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DSCP marking"
        }), ": re-mark QoS class for packets above a threshold."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Statistics"
        }), ": per-meter byte and packet counts for traffic accounting."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1423-actions",
      children: "14.2.3 Actions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Actions specify how the switch processes matching packets:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Output"
        }), ": forward to a specific port or all ports."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drop"
        }), ": discard the packet."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Set-field"
        }), ": modify header fields (e.g., rewrite destination MAC)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Push/pop VLAN tag"
        }), ": add or remove VLAN tags."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Push/pop MPLS label"
        }), ": add or remove MPLS labels."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Group"
        }), ": redirect to a group table for multicast or load balancing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Send to controller"
        }), ": encapsulate the packet and forward to the controller."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1424-openflow-messages",
      children: "14.2.4 OpenFlow Messages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Message"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Symmetric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HELLO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability exchange"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Symmetric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECHO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Liveness check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Controller-to-Switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FEATURES_REQUEST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C->S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query switch capabilities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Controller-to-Switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PACKET_OUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C->S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send packet through switch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Controller-to-Switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FLOW_MOD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C->S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add/modify/delete flow entry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Controller-to-Switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BARRIER_REQUEST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C->S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensure message ordering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Controller-to-Switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ROLE_REQUEST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C->S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set controller role (master/slave)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Switch-to-Controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PACKET_IN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S->C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward unmatched packet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Switch-to-Controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FLOW_REMOVED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S->C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Notify flow entry removal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Switch-to-Controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PORT_STATUS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S->C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Notify port state change"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Asynchronous"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error notification"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-openflow-packet_in--flow_mod-cycle",
      children: "Dry Run: OpenFlow PACKET_IN / FLOW_MOD Cycle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial State:"
      }), " Switch has an empty flow table. Controller has topology knowledge."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Event:"
      }), " Packet arrives at switch port 1 (10.0.0.1 -> 10.0.0.2:80 TCP SYN)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sender"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Message"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Table miss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority 0 table-miss entry triggers PACKET_IN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch -> Controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PACKET_IN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "buffer_id=0x001, reason=OFPR_NO_MATCH, in_port=1, data=[first 128 bytes]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L2 lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checks MAC table for 10.0.0.2 -> not found"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controller -> Switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PACKET_OUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "out_port=OFPP_FLOOD, buffer_id=0x001"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dst=10.0.0.2 via port 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controller -> Switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FLOW_MOD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cookie=0x100, cmd=OFPFC_ADD, match=dst_ip=10.0.0.2/32, tcp_dst=80, priority=100, instructions=[OUTPUT port 3], idle_timeout=60"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Install entry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flow table now has 1 entry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packet 2 (same flow)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flow match"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch matches at priority 100 -> OUTPUT port 3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-openflow-message-handler",
      children: "Pseudocode: OpenFlow Message Handler"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "ON_RECEIVE_MESSAGE(switch, message, controller_state):\n    SWITCH(message_type == OFPT_HELLO):\n        SWITCH.send(OFPT_HELLO, version=support.highest)\n        SWITCH.send(OFPT_FEATURES_REQUEST)\n        WAIT_FOR(OFPT_FEATURES_REPLY)\n        RETURN \"Switch connected: \" + switch.id\n\n    SWITCH(message_type == OFPT_PACKET_IN):\n        pkt = PARSE_PACKET(message.data)\n        in_port = message.in_port\n\n        IF ACL_DROP(pkt):\n            flow_mod = CREATE_FLOW_MOD(\n                match=pkt.headers, action=DROP,\n                priority=65535, hard_timeout=0)\n        ELSE:\n            path = COMPUTE_PATH(controller_state.topology,\n                                switch.id, pkt.dst_ip)\n            out_port = GET_OUTPUT_PORT(switch.id, path)\n            flow_mod = CREATE_FLOW_MOD(\n                match=pkt.headers, action=OUTPUT(out_port),\n                priority=100, idle_timeout=60)\n\n        SWITCH.send(flow_mod)\n        SWITCH.send(OFPT_PACKET_OUT,\n                    buffer_id=message.buffer_id, out_port=out_port)\n        RETURN \"Flow installed for \" + pkt.src_ip + \" -> \" + pkt.dst_ip\n\n    SWITCH(message_type == OFPT_FLOW_REMOVED):\n        cookie = message.cookie\n        reason = message.reason\n        controller_state.pending_flows.delete(cookie)\n        RETURN \"Flow \" + cookie + \" removed, reason=\" + reason\n\n    SWITCH(message_type == OFPT_PORT_STATUS):\n        port_no = message.desc.port_no\n        state = message.desc.state\n        controller_state.topology.UPDATE_LINK(switch.id, port_no, state)\n        RECOMPUTE_AFFECTED_PATHS(controller_state.topology, switch.id)\n        RETURN \"Port \" + port_no + \" on switch \" + switch.id + \" state=\" + state\n\n    SWITCH(message_type == OFPT_ERROR):\n        error_type = message.type\n        error_code = message.code\n        LOG_ERROR(\"OpenFlow error: type=\" + error_type + \" code=\" + error_code)\n        IF error_type == OFPET_FLOW_MOD_FAILED:\n            HANDLE_FLOW_MOD_FAILURE(switch, message)\n        RETURN \"Error handled\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-openflowswitch--flow-table--pipeline",
      children: "TypeScript Implementation: OpenFlowSwitch — Flow Table & Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface FlowMatch {\n  inPort?: number;\n  ethSrc?: string;\n  ethDst?: string;\n  vlanId?: number;\n  ipSrc?: string;\n  ipDst?: string;\n  ipProto?: number;\n  tcpSrc?: number;\n  tcpDst?: number;\n}\n\ntype FlowAction =\n  | { type: 'OUTPUT'; port: number }\n  | { type: 'DROP' }\n  | { type: 'SET_FIELD'; field: string; value: string | number }\n  | { type: 'GROUP'; groupId: number }\n  | { type: 'METER'; meterId: number }\n  | { type: 'PUSH_VLAN' }\n  | { type: 'POP_VLAN' };\n\ninterface FlowEntry {\n  priority: number;\n  match: FlowMatch;\n  instructions: FlowAction[];\n  packetCount: number;\n  byteCount: number;\n  duration: number;\n  idleTimeout: number;\n  hardTimeout: number;\n  cookie: number;\n  installedAt: number;\n}\n\nclass OpenFlowSwitch {\n  private flows: FlowEntry[] = [];\n  private nextCookie = 1;\n\n  addFlow(entry: Omit<FlowEntry, 'packetCount' | 'byteCount' | 'duration' | 'installedAt' | 'cookie'>): number {\n    const cookie = this.nextCookie++;\n    this.flows.push({\n      ...entry,\n      packetCount: 0,\n      byteCount: 0,\n      duration: 0,\n      installedAt: Date.now(),\n      cookie,\n    });\n    this.flows.sort((a, b) => b.priority - a.priority);\n    console.log(`Flow installed: cookie=${cookie} priority=${entry.priority} match=${JSON.stringify(entry.match)}`);\n    return cookie;\n  }\n\n  packetIn(packet: { data: string; inPort: number; length: number }): FlowAction[] {\n    const now = Date.now();\n    this.flows = this.flows.filter(f => {\n      if (f.hardTimeout > 0 && now - f.installedAt > f.hardTimeout * 1000) {\n        console.log(`Flow ${f.cookie} expired (hard timeout ${f.hardTimeout}s)`);\n        return false;\n      }\n      if (f.idleTimeout > 0) return true;\n      return true;\n    });\n\n    for (const flow of this.flows) {\n      if (this.matchPacket(packet, flow.match)) {\n        flow.packetCount++;\n        flow.byteCount += packet.length;\n        flow.duration = (now - flow.installedAt) / 1000;\n        console.log(`Flow ${flow.cookie} matched: actions=${JSON.stringify(flow.instructions)}`);\n        return flow.instructions;\n      }\n    }\n    console.log('Table-miss — sending PACKET_IN to controller');\n    return [{ type: 'OUTPUT', port: 1 }];\n  }\n\n  private matchPacket(packet: { data: string; inPort: number }, match: FlowMatch): boolean {\n    if (match.inPort !== undefined && packet.inPort !== match.inPort) return false;\n    return true;\n  }\n\n  getStats(): { totalFlows: number; packets: number; bytes: number } {\n    return {\n      totalFlows: this.flows.length,\n      packets: this.flows.reduce((s, f) => s + f.packetCount, 0),\n      bytes: this.flows.reduce((s, f) => s + f.byteCount, 0),\n    };\n  }\n\n  removeFlow(cookie: number): boolean {\n    const idx = this.flows.findIndex(f => f.cookie === cookie);\n    if (idx === -1) return false;\n    this.flows.splice(idx, 1);\n    console.log(`Flow ${cookie} removed`);\n    return true;\n  }\n}\n\nconst sw = new OpenFlowSwitch();\nsw.addFlow({ priority: 100, match: {}, instructions: [{ type: 'OUTPUT', port: 2 }], idleTimeout: 60, hardTimeout: 0 });\nsw.addFlow({ priority: 200, match: { inPort: 3 }, instructions: [{ type: 'DROP' }], idleTimeout: 0, hardTimeout: 120 });\nsw.packetIn({ data: 'HTTP request', inPort: 1, length: 1500 });\nsw.packetIn({ data: 'Malicious payload', inPort: 3, length: 64 });\nconsole.log(sw.getStats());\nsw.removeFlow(1);\nconsole.log(sw.getStats());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "143-sdn-controllers",
      children: "14.3 SDN Controllers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An SDN controller is a software platform that provides:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Northbound API"
        }), ": REST, gRPC, or custom APIs for applications."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Southbound API"
        }), ": OpenFlow, NETCONF, or gRPC for device communication."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "East-West interface"
        }), ": inter-controller communication for distributed controller clusters."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1431-controller-architectures",
      children: "14.3.1 Controller Architectures"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Centralized."
      }), " A single controller manages all switches. Simple but a single point of failure and potential scalability bottleneck."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Distributed."
      }), " Multiple controller instances coordinate to manage the network. ONOS and OpenDaylight use a distributed data store (Raft consensus) to maintain a consistent network view. Consistency vs. availability trade-offs follow the CAP theorem."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hybrid."
      }), " Some switches are SDN-controlled while others run traditional protocols. Hybrid approaches support gradual SDN migration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1432-sdn-controller-comparison",
      children: "14.3.2 SDN Controller Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ONOS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OpenDaylight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ryu"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "POX"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed (Atomix/Raft)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modular (MD-SAL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event-driven"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-threaded"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Clustering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native (3+ nodes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raft-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpenFlow Version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0, 1.3, 1.4, 1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0, 1.3, 1.4, 1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0-1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0 only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Other Southbound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P4, NETCONF, gRPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NETCONF, SNMP, BGP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OF-Config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Northbound API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REST, gRPC, CLI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTCONF, REST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REST (custom)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python API"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intent Framework"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (intent-based)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (model-driven)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1M+ flows/second"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "800K+ flows/second"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100K+ flows/second"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10K+ flows/second"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carrier-grade, ISP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production enterprise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Research, education"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Academic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maturity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production (since 2015)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production (since 2013)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deprecated"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1433-controller-state-machine",
      children: "14.3.3 Controller State Machine"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "                +---------+\n                |  START  |\n                +---------+\n                     |\n                     v\n            +------------------+\n            |  SWITCH_DISCOVER |\n            +------------------+\n                     |\n                     v\n            +------------------+\n            |  NEGOTIATING     |\n            +------------------+\n                     |\n            (success)|   (failure)\n                     v         v\n            +--------------+  +-----------+\n            |  ACTIVE      |  | ERROR     |\n            +--------------+  +-----------+\n              |        |           |\n              |        v           v\n              |  +-----------+  +---------+\n              |  | RECONNECT |  |  DEAD   |\n              |  +-----------+  +---------+\n              v        |\n        +----------+   |\n        | SHUTDOWN |<--+\n        +----------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Controller states:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "START"
        }), ": Initial boot, no switches connected."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SWITCH_DISCOVER"
        }), ": TCP connection established, HELLO messages exchanged."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NEGOTIATING"
        }), ": OpenFlow version negotiation and feature discovery."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ACTIVE"
        }), ": Normal operation — processing PACKET_IN, installing flow_mods."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RECONNECT"
        }), ": TCP connection lost; switch enters failover mode."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ERROR"
        }), ": Protocol error; controller may attempt recovery."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DEAD"
        }), ": Controller process terminated."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SHUTDOWN"
        }), ": Graceful shutdown; barrier request to flush pending operations."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-sdncontroller--topology-discovery-flow-programming--event-handling",
      children: "TypeScript Implementation: SDNController — Topology Discovery, Flow Programming & Event Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Link {\n  srcSwitch: string;\n  srcPort: number;\n  dstSwitch: string;\n  dstPort: number;\n  latencyMs: number;\n}\n\ninterface SwitchInfo {\n  id: string;\n  ports: number[];\n  connected: boolean;\n}\n\ninterface FlowRule {\n  id: string;\n  priority: number;\n  match: Record<string, string | number>;\n  actions: string[];\n  installedOn: string[];\n}\n\nclass SDNController {\n  private switches: Map<string, SwitchInfo> = new Map();\n  private links: Link[] = [];\n  private flows: Map<string, FlowRule> = new Map();\n  private lldpIntervalMs = 5000;\n  private eventLog: string[] = [];\n\n  connectSwitch(id: string, ports: number[]): void {\n    this.switches.set(id, { id, ports, connected: true });\n    console.log(`Switch ${id} connected with ${ports.length} ports`);\n    this.logEvent('SWITCH_CONNECT', `Switch ${id} joined`);\n    this.sendLLDP(id, ports);\n  }\n\n  private sendLLDP(switchId: string, ports: number[]): void {\n    ports.forEach(port => {\n      setTimeout(() => {\n        this.handleLLDP(switchId, port, `lldp:${switchId}:${port}`);\n      }, Math.random() * 100);\n    });\n  }\n\n  handleLLDP(srcSwitch: string, srcPort: number, chassisId: string): void {\n    const [_, discoveredSwitch, discoveredPort] = chassisId.split(':');\n    if (discoveredSwitch === srcSwitch) return;\n\n    if (!this.switches.has(discoveredSwitch)) return;\n\n    const existing = this.links.find(\n      l => l.srcSwitch === srcSwitch && l.srcPort === srcPort\n    );\n    const latency = Math.round(Math.random() * 5 + 1);\n\n    if (!existing) {\n      this.links.push({ srcSwitch, srcPort, dstSwitch: discoveredSwitch, dstPort: Number(discoveredPort), latencyMs: latency });\n      console.log(`Link discovered: ${srcSwitch}:${srcPort} <-> ${discoveredSwitch}:${discoveredPort} (${latency}ms)`);\n      this.logEvent('LINK_UP', `${srcSwitch}:${srcPort} -> ${discoveredSwitch}:${discoveredPort}`);\n    }\n  }\n\n  installFlow(id: string, match: Record<string, string | number>, actions: string[], priority = 100): void {\n    const devices = Array.from(this.switches.keys());\n    const flow: FlowRule = { id, priority, match, actions, installedOn: [] };\n\n    devices.forEach(swId => {\n      this.flows.set(`${id}@${swId}`, { ...flow, installedOn: [swId] });\n      console.log(`Flow ${id} installed on ${swId}: match=${JSON.stringify(match)} actions=[${actions}]`);\n    });\n\n    this.logEvent('FLOW_INSTALL', `Flow ${id} on ${devices.length} switches`);\n  }\n\n  handlePacketIn(switchId: string, packet: { srcMac: string; dstMac: string; inPort: number }): void {\n    this.logEvent('PACKET_IN', `Switch ${switchId} port ${packet.inPort} — ${packet.srcMac} -> ${packet.dstMac}`);\n\n    const path = this.computeShortestPath(this.switches.keys().next().value!, switchId);\n    if (path.length > 1) {\n      this.installFlow(`flow_${Date.now()}`, packet, [`OUTPUT:${path[1]}`]);\n    }\n  }\n\n  private computeShortestPath(from: string, to: string): string[] {\n    if (from === to) return [from];\n    const visited = new Set<string>();\n    const queue: { node: string; path: string[] }[] = [{ node: from, path: [from] }];\n    visited.add(from);\n\n    while (queue.length > 0) {\n      const { node, path } = queue.shift()!;\n      const neighbors = new Set<string>();\n      this.links.forEach(l => {\n        if (l.srcSwitch === node) neighbors.add(l.dstSwitch);\n        if (l.dstSwitch === node) neighbors.add(l.srcSwitch);\n      });\n      for (const n of neighbors) {\n        if (n === to) return [...path, n];\n        if (!visited.has(n)) {\n          visited.add(n);\n          queue.push({ node: n, path: [...path, n] });\n        }\n      }\n    }\n    return [from];\n  }\n\n  getTopology(): { switches: SwitchInfo[]; links: Link[] } {\n    return { switches: Array.from(this.switches.values()), links: this.links };\n  }\n\n  private logEvent(type: string, detail: string): void {\n    this.eventLog.push(`[${new Date().toISOString()}] ${type}: ${detail}`);\n  }\n\n  getEvents(): string[] { return this.eventLog; }\n}\n\nconst ctrl = new SDNController();\nctrl.connectSwitch('sw1', [1, 2, 3, 4]);\nctrl.connectSwitch('sw2', [1, 2, 3]);\nctrl.connectSwitch('sw3', [1, 2]);\nctrl.handlePacketIn('sw1', { srcMac: '00:11:22:33:44:55', dstMac: 'aa:bb:cc:dd:ee:ff', inPort: 2 });\nconsole.log(ctrl.getTopology());\nconsole.log(ctrl.getEvents().slice(-3));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "144-network-functions-virtualization",
      children: "14.4 Network Functions Virtualization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NFV decouples network functions (firewall, load balancer, NAT, IDS, WAN optimizer) from dedicated hardware appliances. These functions run as software on commodity servers, virtual machines, or containers."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NFV architecture (ETSI):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VNF (Virtualized Network Function)"
        }), ": software implementation of a network function."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NFVI (NFV Infrastructure)"
        }), ": compute, storage, and network resources."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VIM (Virtualized Infrastructure Manager)"
        }), ": OpenStack, VMware, Kubernetes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MANO (Management and Orchestration)"
        }), ": coordinates VNF lifecycle (instantiation, scaling, termination)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NFV benefits: reduced capital expenditure (commodity hardware), operational flexibility (software updates), rapid service deployment, and elastic scaling."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Service function chaining (SFC)"
      }), " directs traffic through an ordered sequence of VNFs. For example, traffic passes through: firewall -> DPI -> load balancer -> WAN optimizer. SFC uses NSH (Network Service Header) or policy-based routing to steer packets."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-service-function-chaining",
      children: "Dry Run: Service Function Chaining"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " HTTP traffic (10.0.0.1 -> 10.0.0.2:80) must traverse Firewall -> IDS -> Load Balancer."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Switch"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Flow Table Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Next Hop"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch A (ingress)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match: dst=10.0.0.2/32,tcp_dst=80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action: OUTPUT to Firewall port"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Firewall (VNF1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inspect packet, allow rule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return to Switch A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match: src=Firewall,dst=10.0.0.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action: OUTPUT to IDS port"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDS (VNF2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inspect for signatures, no alert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return to Switch A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match: src=IDS,dst=10.0.0.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action: OUTPUT to LB port"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load Balancer (VNF3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Select backend (10.0.0.2:80)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward modified packet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match: src=LB,dst=10.0.0.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action: OUTPUT to uplink port"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "145-network-virtualization-and-overlays",
      children: "14.5 Network Virtualization and Overlays"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Network virtualization abstracts the physical network to create multiple logical network segments on shared infrastructure."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1451-vxlan",
      children: "14.5.1 VXLAN"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VXLAN (Virtual Extensible LAN, RFC 7348) extends VLANs beyond the 4094-VLAN limit. A VXLAN Network Identifier (VNI) is 24 bits, supporting up to 16 million segments. VXLAN encapsulates Layer 2 frames in UDP packets (port 4789) for transport over an IP network."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "[Outer MAC | Outer IP | Outer UDP | VXLAN Hdr | Inner MAC | Inner IP | Payload]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VTEPs (VXLAN Tunnel Endpoints) perform encapsulation and decapsulation. VXLAN enables workload mobility across Layer 3 boundaries, critical in data center and cloud environments."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1452-geneve",
      children: "14.5.2 Geneve"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Geneve (Generic Network Virtualization Encapsulation, RFC 8926) provides a flexible, extensible encapsulation format. It uses variable-length options, supporting future protocols without specification changes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1453-nvgre",
      children: "14.5.3 NVGRE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NVGRE (Network Virtualization using Generic Routing Encapsulation) uses GRE tunnels instead of UDP encapsulation, requiring hardware support for large GRE offload."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-networkvirtualization--network-slice-manager-vswitch--traffic-isolation",
      children: "TypeScript Implementation: NetworkVirtualization — Network Slice Manager, vSwitch & Traffic Isolation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface VNIConfig {\n  vni: number;\n  name: string;\n  vlanId?: number;\n  subnet: string;\n  allowedTenants: string[];\n  bandwidthMbps: number;\n}\n\ninterface VSwitchPort {\n  id: string;\n  tenantId: string;\n  vni: number;\n  mac: string;\n  ip: string;\n}\n\ninterface TrafficRule {\n  id: string;\n  vni: number;\n  priority: number;\n  srcIp: string | null;\n  dstIp: string | null;\n  action: 'ALLOW' | 'DENY' | 'RATE_LIMIT';\n  rateLimitMbps?: number;\n}\n\nclass NetworkVirtualizationManager {\n  private vnis: Map<number, VNIConfig> = new Map();\n  private ports: Map<string, VSwitchPort> = new Map();\n  private rules: TrafficRule[] = [];\n  private vniCounter = 100;\n\n  createVNI(name: string, subnet: string, tenant: string, bw: number): VNIConfig {\n    const vni = this.vniCounter++;\n    const config: VNIConfig = { vni, name, subnet, allowedTenants: [tenant], bandwidthMbps: bw };\n    this.vnis.set(vni, config);\n    console.log(`VNI ${vni} created: ${name} subnet=${subnet} tenant=${tenant} bw=${bw}Mbps`);\n    return config;\n  }\n\n  attachPort(portId: string, tenantId: string, vni: number, mac: string, ip: string): VSwitchPort | null {\n    const vniConfig = this.vnis.get(vni);\n    if (!vniConfig) { console.log(`VNI ${vni} not found`); return null; }\n    if (!vniConfig.allowedTenants.includes(tenantId)) {\n      console.log(`Tenant ${tenantId} not authorized for VNI ${vni}`); return null;\n    }\n    const port: VSwitchPort = { id: portId, tenantId, vni, mac, ip };\n    this.ports.set(portId, port);\n    console.log(`Port ${portId} attached: VNI=${vni} tenant=${tenantId} ${mac}@${ip}`);\n    return port;\n  }\n\n  addRule(rule: Omit<TrafficRule, 'id'>): string {\n    const id = `rule_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;\n    const r: TrafficRule = { ...rule, id };\n    this.rules.push(r);\n    this.rules.sort((a, b) => b.priority - a.priority);\n    console.log(`Rule ${id}: VNI=${rule.vni} ${rule.srcIp ?? '*'}->${rule.dstIp ?? '*'} action=${rule.action}`);\n    return id;\n  }\n\n  isolateTraffic(vni: number, candidatePortId: string, otherPortId: string): boolean {\n    const portA = this.ports.get(candidatePortId);\n    const portB = this.ports.get(otherPortId);\n    if (!portA || !portB) return false;\n    return portA.vni === vni && portB.vni === vni;\n  }\n\n  forwardFrame(srcPortId: string, dstMac: string): { allowed: boolean; dstPort?: VSwitchPort; reason: string } {\n    const src = this.ports.get(srcPortId);\n    if (!src) return { allowed: false, reason: 'Source port not found' };\n\n    for (const rule of this.rules) {\n      if (rule.vni !== src.vni) continue;\n      if (rule.srcIp !== null && rule.srcIp !== src.ip) continue;\n      if (rule.dstIp !== null) {\n        const dstPort = Array.from(this.ports.values()).find(p => p.mac === dstMac);\n        if (dstPort && rule.dstIp !== dstPort.ip) continue;\n      }\n      if (rule.action === 'DENY') return { allowed: false, reason: `Denied by rule ${rule.id}` };\n      if (rule.action === 'ALLOW') break;\n    }\n\n    const dst = Array.from(this.ports.values()).find(p => p.mac === dstMac);\n    if (!dst) return { allowed: false, reason: 'Destination MAC unknown' };\n    if (dst.vni !== src.vni) return { allowed: false, reason: 'Cross-VNI traffic blocked' };\n\n    return { allowed: true, dstPort: dst, reason: 'Forwarded' };\n  }\n\n  getStats(): { vnis: number; ports: number; rules: number } {\n    return { vnis: this.vnis.size, ports: this.ports.size, rules: this.rules.length };\n  }\n}\n\nconst nvm = new NetworkVirtualizationManager();\nconst tenantA = nvm.createVNI('tenant-a-net', '10.1.0.0/24', 'tenant-a', 1000);\nconst tenantB = nvm.createVNI('tenant-b-net', '10.2.0.0/24', 'tenant-b', 500);\nnvm.attachPort('vm1-veth0', 'tenant-a', tenantA.vni, '00:0a:95:00:00:01', '10.1.0.10');\nnvm.attachPort('vm2-veth0', 'tenant-a', tenantA.vni, '00:0a:95:00:00:02', '10.1.0.20');\nnvm.attachPort('vm3-veth0', 'tenant-b', tenantB.vni, '00:0b:95:00:00:01', '10.2.0.10');\nnvm.addRule({ vni: tenantA.vni, priority: 100, srcIp: null, dstIp: null, action: 'ALLOW' });\n\nconsole.log('VM1->VM2:', nvm.forwardFrame('vm1-veth0', '00:0a:95:00:00:02'));\nconsole.log('VM1->VM3:', nvm.forwardFrame('vm1-veth0', '00:0b:95:00:00:01'));\nconsole.log(nvm.getStats());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "146-nfv-vs-sdn",
      children: "14.6 NFV vs SDN"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NFV"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SDN"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Focus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtualizing network functions (middleboxes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separating control from data plane"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standard Body"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ETSI NFV ISG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ONF (Open Networking Foundation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key Benefit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost savings, elastic scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Programmable network, global visibility"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server hypervisors/containers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controller + OpenFlow switches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Software-based (CPU-bound)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware-assisted (TCAM, ASIC)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual firewall, virtual router"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenFlow switch, SDN WAN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Relationship"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complementary (SDN steers traffic through VNF chains)"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maturity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mature (production NFV since 2015)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mature (production SDN since 2012)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Orchestration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MANO (VNF lifecycle)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controller (flow rule management)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resource Pool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute, storage, network (unified NFVI)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only network forwarding resources"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How they work together:"
      }), " SDN provides network programmability to steer traffic through the correct sequence of VNFs. The SDN controller knows the topology and dynamically inserts/removes VNFs from the traffic path. NFV provides elastic scaling — spin up more firewall VNF instances under load — and SDN updates flow tables to load-balance across them."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-deploying-a-vnf-chain-with-sdn-steering",
      children: "Numbered Steps: Deploying a VNF Chain with SDN Steering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Operator defines a service chain: traffic matching (dst=web-server, dport=443) must traverse Firewall -> IDS -> Load Balancer."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The orchestrator (MANO) instantiates VNFs on hypervisor hosts."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The orchestrator notifies the SDN controller of each VNF's location (IP, port, switch attachment point)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The SDN controller computes the path from client to web server that passes through each VNF in order."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The controller installs flow entries: client -> firewall (port A), firewall -> IDS (port B), IDS -> load balancer (port C), load balancer -> web server (port D)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "VNFs process traffic transparently — endpoints are unaware of intermediate functions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If a VNF fails, the controller detects via port status and reroutes traffic around the failed VNF (or to a standby VNF)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "147-sdn-applications",
      children: "14.7 SDN Applications"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Traffic engineering."
      }), " The controller computes optimal paths based on global topology, link utilization, and application requirements. Techniques include dynamic load balancing, flow rerouting during failures, and bandwidth calendaring."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Network virtualization (multi-tenancy)."
      }), " Cloud providers use SDN to isolate tenant networks. Each tenant receives a virtual network with independent addressing, policies, and QoS."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intent-based networking."
      }), " The operator specifies what they want (\"connect servers A and B with 10 Gbps bandwidth and latency under 1 ms\"), and the controller determines the implementation. Intent-based systems automate policy translation, optimization, and verification."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "In-band network telemetry (INT)."
      }), " Switches embed per-packet metadata (queue depth, latency, hop count) in data packets. The controller collects real-time telemetry without separate monitoring infrastructure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "intent-based-networking-deep-dive",
      children: "Intent-Based Networking: Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: GPS Navigation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Traditional networking is like asking for turn-by-turn directions at each intersection. Intent-based networking is like entering a destination in GPS — the system plans the route, adapts to traffic, and handles detours automatically."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "IBN Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "GPS Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intent (\"connect A to B with 10Gbps\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destination input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Policy translation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route computation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic-aware rerouting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Arriving at destination\" confirmation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Assurance (continuous validation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Live traffic monitoring"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps: Intent Lifecycle"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Operator declares intent via REST API: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{\"connectivity\": {\"from\": \"server-A\", \"to\": \"server-B\", \"bandwidth\": \"10Gbps\", \"latency\": \"1ms\"}}"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Controller parses intent and validates syntax/semantics."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Controller translates intent into network policies: ACLs, QoS queues, path computation constraints."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Controller compiles policies into device-level OpenFlow flow entries."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Controller verifies compiled configuration using formal verification (e.g., Batfish or Minesweeper)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Controller pushes verified flow entries to switches."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Controller continuously monitors network telemetry to assure the intent is satisfied."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If a violation occurs (congestion, link failure), the controller recomputes and re-installs flow entries."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: Intent Compilation Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "COMPILE_INTENT(intent, topology_db):\n    IF NOT intent.source IN topology_db.hosts:\n        RAISE \"Unknown source host: \" + intent.source\n    IF NOT intent.destination IN topology_db.hosts:\n        RAISE \"Unknown destination: \" + intent.destination\n\n    constraints = []\n    constraints += BW_CONSTRAINT(intent.bandwidth)\n    constraints += LATENCY_CONSTRAINT(intent.latency)\n    constraints += SECURITY_CONSTRAINT(intent.security_zone)\n    IF intent.availability == \"high\":\n        constraints += DISJOINT_PATH_CONSTRAINT()\n\n    candidate_paths = K_SHORTEST_PATHS(\n        graph=topology_db.graph,\n        source=topology_db.get_switch(intent.source),\n        destination=topology_db.get_switch(intent.destination),\n        k=10\n    )\n\n    FOR path IN candidate_paths:\n        IF SATISFIES_ALL(path, constraints):\n            flow_rules = GENERATE_FLOW_ENTRIES(path, intent)\n            VERIFY(flow_rules, topology_db)\n            RETURN flow_rules\n\n    RAISE \"No path satisfies all constraints for intent\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sd-wan",
      children: "SD-WAN"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Adaptive Highway Lanes"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SD-WAN is like a smart highway system that dynamically assigns lanes based on traffic type — emergency vehicles get express lanes (real-time traffic), commuters use regular lanes (bulk data), and the system redirects flow around accidents automatically."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "SD-WAN Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Highway Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple WAN links"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple highway lanes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Application-aware routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Express lane vs regular lane"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic path selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time traffic rerouting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic management center"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Link bonding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combining multiple lanes into one road"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SD-WAN vs Traditional WAN"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Traditional WAN"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SD-WAN"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPLS only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPLS, Internet, LTE (multi-link)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BGP/OSPF (distributed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized policy + dynamic path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Application Awareness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (IP-only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep packet inspection (DPI)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Provisioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weeks (circuit ordering)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hours (zero-touch provisioning)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (MPLS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (hybrid MPLS + broadband)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate firewall appliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrated encryption + segmentation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Failover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (BGP convergence)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sub-second (per-packet steering)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps: SD-WAN Path Selection"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A packet arrives at the SD-WAN edge device (CPE)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The CPE classifies the application using DPI (e.g., Zoom video conferencing)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The CPE queries the SD-WAN controller for the active SLA policy for Zoom."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The controller responds: \"Use MPLS path (latency < 50ms, jitter < 10ms)\"."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The CPE measures latency/jitter on the MPLS path via active probing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the MPLS path meets SLA, the CPE forwards the packet via MPLS."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the MPLS path degrades (jitter spike), the CPE switches to the LTE backup path without dropping the session."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The CPE updates the controller with path quality telemetry."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "148-applications-in-real-systems",
      children: "14.8 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "google-b4-sdn-wan",
      children: "Google B4 (SDN WAN)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Google B4 is a private WAN connecting Google's data centers worldwide. It uses SDN to achieve 90%+ link utilization (vs 30-40% in traditional WANs)."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Year"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2012 (SIGCOMM paper)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hundreds of switches across dozens of sites"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google custom controller (Onix-derived)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenFlow (custom extensions)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key Innovation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth steering: centralized traffic engineering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90%+ link utilization, automated failure recovery"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "How it works:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A centralized TE server collects traffic demand matrices from all sites."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It computes optimal flow assignments using max-min fair allocation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flow entries are pushed to OpenFlow switches at each site."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "On link failure, the TE server recomputes affected flows within seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each site runs a site-level controller cluster (3 nodes) for fault tolerance."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vmware-nsx-sdn-for-data-center",
      children: "VMware NSX (SDN for Data Center)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VMware NSX provides network virtualization entirely in software at the hypervisor level."
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
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed (kernel module in each hypervisor)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Southbound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OVSDB, OpenFlow (via Open vSwitch)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overlay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VXLAN, Geneve"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key Features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Micro-segmentation, distributed firewall, logical switching/routing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use Cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-trust security, workload mobility, multi-tenant isolation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cisco-aci-application-centric-infrastructure",
      children: "Cisco ACI (Application Centric Infrastructure)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cisco ACI is a policy-driven SDN solution for data centers."
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
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized APIC controller + Nexus 9000 switches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpFlex (Cisco proprietary)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application policy model (EPG = endpoint group)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key Concepts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contract-based communication between EPGs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use Cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise DC, policy automation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "open-vswitch-ovs",
      children: "Open vSwitch (OVS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Open vSwitch is a production-quality open-source virtual switch supporting OpenFlow."
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
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Software switch (userspace + kernel datapath)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpenFlow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0 through 1.5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10M+ flows, millions of packets/second"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KVM, Xen, Docker, Kubernetes (via OVN)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use Cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VM networking, container networking, NFV"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-sdn-vs-traditional-routing--whats-the-fundamental-difference",
      children: "Q1: SDN vs Traditional Routing — What's the fundamental difference?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Short answer:"
      }), " Traditional routing uses distributed protocols where each device independently computes paths. SDN centralizes path computation and pushes forwarding rules to switches."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detailed answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Traditional: OSPF routers flood link-state advertisements, each runs SPF independently, forwarding table is locally computed. Convergence time is 10+ seconds for large networks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SDN: A controller with global topology computes paths centrally. Switches have no routing logic — just match-action tables. Re-convergence on failure is milliseconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trade-off: SDN adds latency for the first packet of each flow (PACKET_IN/FLOW_MOD round trip). Traditional routing handles all packets at line rate natively."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-openflow-vs-netconf--which-one-to-use",
      children: "Q2: OpenFlow vs NETCONF — Which one to use?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OpenFlow"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NETCONF"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Focus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flow table management (data plane)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device configuration (control plane)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match-action rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YANG data models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP (encrypted optional)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSH or TLS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add/delete/modify flow entries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Get/set/copy/delete configuration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flow table state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Running/candidate/startup config"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time forwarding control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device provisioning, routing config"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Choose OpenFlow when you need per-flow forwarding control (dynamic traffic engineering).\nChoose NETCONF when you need to configure routing protocols, interfaces, or ACLs on the device."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-controller-placement-problem",
      children: "Q3: Controller Placement Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The controller placement problem (CPP) asks: given N switches, where should we place K controllers to minimize latency?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trade-offs:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "More controllers = lower latency to switches, higher synchronization overhead."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fewer controllers = simpler consistency, lower fault tolerance."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Optimal placement is NP-hard (facility location problem). Heuristics:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Greedy:"
            }), " Place first controller at the switch with highest centrality, then iteratively place next controller at the switch farthest from existing controllers."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "K-means:"
            }), " Cluster switches geographically (latency as distance), place one controller per cluster."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Partitioning:"
            }), " Use graph partitioning (e.g., METIS) to split the network into K balanced partitions."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule of thumb:"
      }), " For 100 switches, 3-5 controllers provide good latency and fault tolerance. Keep controller-switch latency under 10ms."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-sdn-security-considerations",
      children: "Q4: SDN Security Considerations"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Threat"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Controller DoS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flood of PACKET_IN overwhelms controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rate-limit PACKET_IN per switch; switch-based ACL before PACKET_IN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fake flow injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker installs malicious flow entries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS between switch and controller; authenticate flow_mod source"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Switch impersonation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker connects fake switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS with certificate validation; switch MAC/serial whitelist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Controller compromise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker controls entire network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redundant controllers (Raft); read-only slave for monitoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flow table overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCAM exhaustion drops legitimate flows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Idle timeout eviction; wildcard aggregation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Side channel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timing analysis of flow table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constant-time TCAM lookup (hardware); cover traffic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Man-in-the-middle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intercept OpenFlow messages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS 1.2+ with mutual certificate authentication"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key recommendation:"
      }), " Always enable TLS for southbound OpenFlow connections. Without encryption, an attacker on the same subnet can inject fake FLOW_MOD messages and hijack the entire network."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-cap-theorem-in-sdn-controllers",
      children: "Q5: CAP Theorem in SDN Controllers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SDN controllers face the Consistency-Availability-Partition tolerance trade-off:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "C (Consistency):"
        }), " All controllers see the same network state. ONOS achieves this via Raft."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A (Availability):"
        }), " The system continues to operate despite failures. OpenDaylight uses weak consistency for higher availability."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "P (Partition tolerance):"
        }), " The system functions despite network partitions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In SDN, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "strong consistency is critical"
      }), " — two controllers installing conflicting flow entries would cause forwarding loops. Production controllers (ONOS, OpenDaylight) prefer CP over AP. During a partition, they sacrifice availability (some switches can't install new flows) to maintain consistency."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pro-tips",
      children: "Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Start with Ryu for learning, OpenDaylight for production"
        }), ": Ryu's Python event model is great for prototyping and education. For carrier-grade deployments with clustering and broad protocol support, use OpenDaylight or ONOS."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VXLAN requires MTU tuning"
        }), ": VXLAN adds 50 bytes of overhead. If the physical MTU is 1500, the inner MTU drops to 1450. Configure jumbo frames (MTU 1600+) on the underlay or enable path MTU discovery."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use intent-based networking with formal verification"
        }), ": Tools like Batfish or Minesweeper model network policies and verify properties (no loops, reachability) before deployment. This catches 90%+ of configuration errors."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Service chaining without NSH"
        }), ": Use policy-based routing (PBR) on routers or VXLAN encapsulation with destination-based steering to chain VNFs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enable TLS for OpenFlow"
        }), ": Without encryption, the southbound channel is vulnerable to MITM attacks. OpenFlow 1.3 supports TLS natively."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flow table design"
        }), ": Use multiple tables (ingress ACL -> routing -> egress QoS) to reduce TCAM pressure. A 3-table pipeline can reduce TCAM usage by 60% compared to a single flat table."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SDN separates the control plane (centralized software) from the data plane (simple forwarding hardware)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OpenFlow uses flow tables with match-action entries; unmatched packets go to the controller."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NFV virtualizes network functions, replacing dedicated appliances with software running on commodity servers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "VXLAN extends VLANs to 16 million segments by encapsulating L2 frames in UDP."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Intent-based networking lets operators declare goals, not configurations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Network automation with IaC and CI/CD reduces human error in configuration management."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SD-WAN enables application-aware, multi-link WAN connectivity with centralized policy control."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The SDN controller placement problem balances latency, fault tolerance, and consistency."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technology"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Plane"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Standard"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Benefit"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SDN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized network mgmt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenFlow, NETCONF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Programmable, global view"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtualized network functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ETSI MANO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost savings, elasticity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VXLAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L2 overlay over L3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RFC 7348"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16M segments, cross-DC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IBN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Policy-driven ops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (vendor)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intent translation, verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network Automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Config management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IaC tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reproducible, version-controlled"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SD-WAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-link WAN optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor-specific"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application-aware routing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-sdn-controller-comparison",
      children: "Quick Reference: SDN Controller Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Controller"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Language"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Clustering"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Protocol Support"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpenDaylight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modular (MD-SAL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raft-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenFlow, NETCONF, SNMP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production networks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ONOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raft-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenFlow, P4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carrier-grade, ISP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ryu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event-driven"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenFlow 1.0-1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Research, education"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-threaded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenFlow 1.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Academic projects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Floodlight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modular"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenFlow 1.0/1.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy OpenFlow"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-tenant DC isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VXLAN + SDN controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16M VNI spaces, automated flow tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual firewall deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NFV (VNF)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Software-based, elastic scaling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic engineering across WAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SDN + PCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global optimization, fast failover"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Service chain (FW -> IDS -> LB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NFV + SFC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered VNF routing via NSH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gradual migration to SDN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid SDN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traditional + SDN switches coexist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration auditing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batfish (formal verification)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model network, verify before push"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Application-aware WAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SD-WAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-link, SLA-driven path selection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Container networking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OVN + OVS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenFlow-based virtual networking for K8s"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-diagram-sdn-architecture-application-control--data-planes",
      children: "Mermaid Diagram: SDN Architecture (Application, Control & Data Planes)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TB\n  subgraph APP[\"Application Plane\"]\n    direction TB\n    TRAFFIC_ENG[\"Traffic Engineering App\"]\n    MONITOR[\"Monitoring & Analytics\"]\n    INTENT[\"Intent-based Networking\"]\n    SECURITY[\"Security Policy App\"]\n    LB[\"Load Balancer App\"]\n  end\n\n  subgraph CTRL[\"Control Plane\"]\n    direction TB\n    NB_API[\"Northbound API (REST/gRPC)\"]\n    SDN_CTRL[\"SDN Controller<br/>(ONOS / OpenDaylight / Ryu)\"]\n    TOPO[\"Topology Manager\"]\n    FLOW_MGR[\"Flow Manager\"]\n    STATS[\"Statistics Collector\"]\n    LLDP[\"LLDP Discovery\"]\n    SB_API[\"Southbound API (OpenFlow / NETCONF)\"]\n    EB_WEST[\"East-West API<br/>(Raft Consensus)\"]\n\n    NB_API --> SDN_CTRL\n    SDN_CTRL --> TOPO\n    SDN_CTRL --> FLOW_MGR\n    SDN_CTRL --> STATS\n    SDN_CTRL --> LLDP\n    SDN_CTRL --> SB_API\n    SDN_CTRL <--> EB_WEST\n  end\n\n  subgraph DATA[\"Data Plane\"]\n    direction TB\n    SW1[\"OpenFlow Switch 1\"]\n    SW2[\"OpenFlow Switch 2\"]\n    SW3[\"OpenFlow Switch 3\"]\n    SW4[\"OpenFlow Switch 4\"]\n\n    H1[\"Host A\"] -->|\"Ingress\"| SW1\n    H2[\"Host B\"] -->|\"Ingress\"| SW2\n    SW1 <-->|\"Flow Tables\"| SW3\n    SW2 <-->|\"Flow Tables\"| SW3\n    SW3 -->|\"Egress\"| SW4\n    SW4 -->|\"Forward\"| H3[\"Host C\"]\n    SW4 -->|\"Forward\"| H4[\"Host D\"]\n  end\n\n  APP -->|\"Northbound\"| CTRL\n  CTRL -->|\"Southbound\"| DATA\n\n  classDef app fill:#fce4ec,stroke:#e91e63,stroke-width:2px\n  classDef ctrl fill:#e3f2fd,stroke:#1565c0,stroke-width:2px\n  classDef data fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px\n  class TRAFFIC_ENG,MONITOR,INTENT,SECURITY,LB app\n  class NB_API,SDN_CTRL,TOPO,FLOW_MGR,STATS,LLDP,SB_API,EB_WEST ctrl\n  class SW1,SW2,SW3,SW4,H1,H2,H3,H4 data\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-googles-b4-sdn-wan",
      children: "Case Study: Google's B4 SDN WAN"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem."
      }), " Google operates a private WAN connecting 12+ data centers globally. By 2015, the WAN carried a mix of user-facing traffic (search, YouTube, Gmail, Maps) and internal traffic (MapReduce, Bigtable replication, Spanner writes, GFS chunk transfers). Traditional distributed routing (BGP/IS-IS) achieved only 30-40% WAN link utilization because traffic followed shortest paths regardless of available bandwidth. Google needed to push utilization above 90% while maintaining latency SLAs for user-facing traffic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution."
      }), " Google deployed B4, an SDN-based WAN using OpenFlow (1.0 initially, upgraded to 1.3) with the following design: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hardware"
      }), ": Custom OpenFlow switches built from merchant silicon (Broadcom Trident2 ASICs) — 128×10GbE per switch, ~", (0,jsx_runtime.jsxs)(_components.span, {
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
                  mathvariant: "normal",
                  children: "/"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "p"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "v"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "1/port vs "
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
              className: "mord",
              children: "1/"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "p"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "or"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
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
      }), "10K/port for traditional core routers. (2) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Centralized TE"
      }), ": B4's centralized Traffic Engineering (TE) server collected link utilization from all switches every 5 seconds, computed a global traffic matrix, and solved a max-min fair allocation using linear programming (MCF). (3) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tunnels"
      }), ": Traffic was classified into tunnels (hundreds per site). The TE server assigned each tunnel a rate and path, then installed corresponding OpenFlow group table entries (SELECT buckets with weighted ECMP). (4) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enforcement"
      }), ": Edge switches marked packets with DSCP (AF4 for user traffic, AF3 for internal). Core switches applied WFQ scheduling per DSCP class to guarantee latency. (5) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hedging"
      }), ": User-facing traffic could preempt internal traffic; spare bandwidth was filled with internal transfers using a weighted fair bottleneck scheduler."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome."
      }), " B4 achieved >90% WAN link utilization (up from ~35%), saving over $1B in bandwidth costs by deferring new fiber builds. Site-to-site latency for user traffic remained under 5 ms at p99. Failure recovery was sub-second — B4 detected link flaps via OpenFlow PortStats, recomputed the TE solution in 200ms, and installed new flow_mods in <10ms. B4 handled 100+ simultaneous link failures per year without SLA violations. This design became the blueprint for SD-WAN, inspiring follow-on systems at Microsoft (SWAN), Amazon, and Alibaba."]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized TE with global visibility dramatically improves link utilization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collect real-time flow statistics; solve multi-commodity flow with linear programming; push optimal paths via OpenFlow group tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Merchant silicon makes SDN economically viable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use commodity ASICs (Broadcom, Mellanox); custom firmware enables flow table programmability at 1/10th the cost of chassis routers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic class prioritization protects user SLAs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mark traffic at edge with DSCP; apply WFQ/DRR at core; allow user traffic to preempt bulk/batch data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sub-second failure recovery requires fast topology detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use OpenFlow PortStats polling (every 1s); maintain pre-computed backup paths; install failover group buckets for fast switch-over"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpenFlow group tables enable weighted ECMP at line rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use SELECT type groups with weighted buckets; the switch distributes traffic across paths with hardware hashing (no controller involvement per packet)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SDN workflows (measure → model → optimize → push) enable rapid iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automate the closed loop: every 5s collect stats, recompute flows, push diffs only; roll back within one iteration on validation failure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intent-based policies abstract away low-level flow rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define SLAs (latency, bandwidth, priority) in a policy language; let the controller compile intents to flow entries and verify them against network state before deployment"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which plane in SDN handles packet forwarding decisions at line rate?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Application plane"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Control plane"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Data plane"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Management plane"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What type of OpenFlow message does a switch send when it receives a packet matching no flow entry?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) FLOW_MOD"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) PACKET_IN"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) PACKET_OUT"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) PORT_STATUS"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "How does VXLAN scale beyond the VLAN 4094-segment limit?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) By using 16-bit segment IDs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) By using 24-bit VNIs supporting ~16 million segments"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) By using MPLS labels"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) By using multiple VLAN tags"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "In Google B4, what mechanism allowed user-facing traffic to preempt internal traffic?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Static route prioritization"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) DSCP marking with WFQ scheduling"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) BGP community tags"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) MPLS EXP bits"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What problem does the controller placement problem (CPP) address?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Which vendor's controller to purchase"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Where to position controllers to minimize switch-controller latency"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) How to stack multiple controllers in a single rack"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Which version of OpenFlow to use"
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
            children: "The data plane (forwarding plane) performs packet forwarding at line rate using hardware flow tables; the control plane makes forwarding decisions, while the application plane provides higher-level services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PACKET_IN is sent to the controller when a table-miss occurs (no matching flow entry); the controller responds with a PACKET_OUT or installs a new flow via FLOW_MOD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VXLAN uses a 24-bit VXLAN Network Identifier (VNI), supporting up to 2^24 = 16,777,216 segments compared to VLAN's 12-bit (4094) limit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B4 marked user traffic with DSCP AF4 and internal traffic with AF3; core switches applied per-class Weighted Fair Queuing (WFQ), allowing user traffic to preempt internal traffic during congestion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPP is the NP-hard problem of optimally placing controllers in the network to minimize the latency between switches and their assigned controllers, balancing propagation delay, controller load, and fault tolerance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SDN separates the control plane from the data plane, enabling centralized, programmable network management. OpenFlow provides a standard protocol for controller-switch communication. NFV virtualizes network functions, reducing hardware dependency. Network overlays (VXLAN, Geneve) create virtual network segments on shared IP infrastructure. SDN applications in traffic engineering, virtualization, intent-based networking, and SD-WAN demonstrate the paradigm's transformative potential."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Control plane"
            }), " makes forwarding decisions (computes routes, installs flow entries). ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data plane"
            }), " forwards packets based on those decisions (matches flow tables, executes actions). SDN physically separates them — the controller runs on a server, and switches only forward."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The switch sends a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "PACKET_IN"
            }), " message to the controller containing the packet buffer (or first bytes). The controller decides the action (e.g., install a flow entry and forward via PACKET_OUT). If the controller doesn't respond, the packet is dropped after a timeout."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "VXLAN uses 24-bit VNIs (16 million segments) vs VLAN's 12-bit (4094). VXLAN encapsulates L2 frames in UDP over IP, enabling L2 extension across L3 network boundaries — critical for VM mobility, cloud multi-tenancy, and data center interconnect."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "SDN"
            }), " separates control and data planes for centralized, programmable forwarding. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "NFV"
            }), " virtualizes network functions (firewall, LB, IDS) to run on commodity hardware. They are complementary: SDN provides the network fabric; NFV provides the services running on that fabric."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "SFC directs traffic through an ordered sequence of VNFs (e.g., FW -> IDS -> LB). Each VNF processes the packet and returns it to the network for the next hop. NSH (Network Service Header) or policy-based routing ensures the correct traversal path."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["In distributed controllers (e.g., ONOS with Raft), ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "consistency"
            }), " requires every controller to have the same network view before acting, but ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "availability"
            }), " means the system must continue operating during partitions. Raft sacrifices availability during leader election (CP) — some controllers are unavailable for writes during a partition."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "CPP determines the optimal locations for controllers in an SDN network to minimize switch-to-controller latency. It's NP-hard because it reduces to the facility location problem (k-median/k-center) on general graphs, with additional constraints for controller capacity and fault tolerance."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "8",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Flow entries:"
            }), " (1) match: tcp_dst=80, priority=100, action=OUTPUT(1). (2) match: tcp_dst=22, priority=100, action=OUTPUT(2). For unknown port (e.g., tcp_dst=443), no match → PACKET_IN to controller. The controller learns the MAC and installs a new flow: match: tcp_dst=443, priority=100, action=OUTPUT(3)."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "DC1"
            }), ": VTEP IP 10.1.0.1, VNI 100↔VLAN100, VNI 101↔VLAN101. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "DC2"
            }), ": VTEP IP 10.2.0.1, VNI 200↔VLAN200. Inter-DC: VXLAN tunnel between VTEPs over IP WAN. Routing: each VTEP needs a route to the other VTEP's IP. For stretched subnets (VNI 100 in both DCs), BGP EVPN advertises MAC/VTEP mappings."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Traffic enters via Switch A → PBR matches dst=server:80 → route to Firewall → returned to Switch A → match src=FW,dst=server → route to IDS → returned → match src=IDS,dst=server → route to LB → LB selects backend. Failures: VNF failure triggers VNF health check timeout → controller updates flow tables to bypass the failed VNF or redirect to a standby."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "4×5 grid → 20 switches. Greedy placement: first controller at the center switch (row 2, col 2 — switch (2,2)). Remaining switches have max distance 2-3 hops. Second controller at (4,4) or (1,4) to minimize the farthest switch distance. Result: worst-case latency = 2 hops vs 5+ without optimal placement."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "See section 14.2.1 for the matching algorithm: sort by priority descending, iterate, check each match field with wildcard mask, verify idle/hard timeout hasn't expired. Return first match or null (table-miss → PACKET_IN)."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "13",
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Intent-based QoS controller design:"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Traffic identification:"
        }), " DPI at edge switches classifies flows by port/protocol (video: UDP/3478-3481, RTP; research: SSH/SFTP on port 2222; web: TCP/80,443; backup: TCP/873 for rsync). Packets are marked with DSCP: EF (video), AF41 (research), AF11 (web), CS1 (backup)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flow installation:"
        }), " Apps submit intents via northbound API: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{app: \"video\", match: {dscp: EF}, constraints: {bandwidth: \"10Mbps\", latency: \"50ms\", priority: 100}}"
        }), ". The controller compiles intents to meter entries (rate-limiting at 10 Mbps per flow for video), queue configurations (strict priority), and flow entries with DSCP-based matching."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Policy verification:"
        }), " Before deployment, the controller runs a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "what-if simulation"
        }), ": model the current traffic matrix, add new flows, check link capacities and latency constraints. Violation → roll back with clear error message. Example verification function:"]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "verify_policy(intents, topology):\n    capacity = topology.available_capacity()\n    for intent in intents sorted by priority:\n        path = shortiest_path(intent.src, intent.dst)\n        bottleneck = min(capacity[link] for link in path)\n        if intent.bandwidth > bottleneck:\n            return (False, \"Insufficient BW on \" + path)\n        for link in path:\n            capacity[link] -= intent.bandwidth\n        if intent.latency < estimated_latency(path):\n            return (False, \"Latency violation on \" + path)\n        if intent.time_constraint:\n            verify_time_window(intent)\n    return (True, \"All intents valid\")\n"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Congestion handling:"
        }), " When link utilization >80%, the controller: (1) re-routes non-critical flows (CS1/AF11) to alternate paths, (2) throttles AF11 traffic via meter rate reduction, (3) if congestion persists, triggers an alert for operator intervention. All changes are logged for audit."]
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