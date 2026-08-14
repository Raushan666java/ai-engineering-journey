"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[63681],{

/***/ 3054
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_computer_networks_18_modern_md_bec_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-computer-networks-18-modern-md-bec.json
const site_docs_courses_computer_networks_18_modern_md_bec_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/computer-networks/18-modern","title":"Chapter 18: Modern Networking → Complete Reference","description":"GFG/Javatpoint Depth → IPv6, IoT, 4G→5G→6G, Satellite Internet, Network Automation, Zero Trust, AI/ML in Networking, Quantum Networking, Edge Computing, Network Observability","source":"@site/docs/courses/computer-networks/18-modern.md","sourceDirName":"courses/computer-networks","slug":"/computer-networks/18-modern","permalink":"/ai-engineering-journey/computer-networks/18-modern","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"id":"18-modern","slug":"/computer-networks/18-modern","title":"Chapter 18: Modern Networking → Complete Reference","sidebar_label":"Chapter 18: Modern Networking → Complete Reference","sidebar_position":18},"sidebar":"course-computer-networks","previous":{"title":"Chapter 17: Network Troubleshooting","permalink":"/ai-engineering-journey/computer-networks/17-troubleshooting"},"next":{"title":"Computer Networks — Complete Course Textbook","permalink":"/ai-engineering-journey/computer-networks"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/computer-networks/18-modern.md


const frontMatter = {
	id: '18-modern',
	slug: '/computer-networks/18-modern',
	title: 'Chapter 18: Modern Networking → Complete Reference',
	sidebar_label: 'Chapter 18: Modern Networking → Complete Reference',
	sidebar_position: 18
};
const contentTitle = 'Chapter 18: Modern Networking → Complete Reference';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Table of Contents",
  "id": "table-of-contents",
  "level": 2
}, {
  "value": "18.1 IPv6 Adoption &amp; Transition",
  "id": "181-ipv6-adoption--transition",
  "level": 2
}, {
  "value": "18.1.1 Why IPv6? The Address Exhaustion Problem",
  "id": "1811-why-ipv6-the-address-exhaustion-problem",
  "level": 3
}, {
  "value": "18.1.2 IPv6 Packet Format",
  "id": "1812-ipv6-packet-format",
  "level": 3
}, {
  "value": "18.1.3 IPv6 Address Types",
  "id": "1813-ipv6-address-types",
  "level": 3
}, {
  "value": "18.1.4 IPv6 Transition Mechanisms",
  "id": "1814-ipv6-transition-mechanisms",
  "level": 3
}, {
  "value": "Mechanism 1: Dual-Stack",
  "id": "mechanism-1-dual-stack",
  "level": 4
}, {
  "value": "Mechanism 2: Tunneling",
  "id": "mechanism-2-tunneling",
  "level": 4
}, {
  "value": "Mechanism 3: Translation (NAT64/DNS64)",
  "id": "mechanism-3-translation-nat64dns64",
  "level": 4
}, {
  "value": "18.1.5 IPv6 Transition Comparison Table",
  "id": "1815-ipv6-transition-comparison-table",
  "level": 3
}, {
  "value": "18.1.6 Edge Cases",
  "id": "1816-edge-cases",
  "level": 3
}, {
  "value": "18.1.7 Complexity Analysis",
  "id": "1817-complexity-analysis",
  "level": 3
}, {
  "value": "18.1.8 A&amp;D Table: IPv6 Transition",
  "id": "1818-ad-table-ipv6-transition",
  "level": 3
}, {
  "value": "TypeScript Implementation: IPv6TransitionManager",
  "id": "typescript-implementation-ipv6transitionmanager",
  "level": 3
}, {
  "value": "18.2 IoT Networking",
  "id": "182-iot-networking",
  "level": 2
}, {
  "value": "18.2.1 6LoWPAN",
  "id": "1821-6lowpan",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 4
}, {
  "value": "18.2.2 MQTT → Message Queuing Telemetry Transport",
  "id": "1822-mqtt--message-queuing-telemetry-transport",
  "level": 3
}, {
  "value": "Dry Run Trace Table → MQTT QoS 1 Exchange",
  "id": "dry-run-trace-table--mqtt-qos-1-exchange",
  "level": 4
}, {
  "value": "MQTT Edge Cases",
  "id": "mqtt-edge-cases",
  "level": 4
}, {
  "value": "18.2.3 CoAP → Constrained Application Protocol",
  "id": "1823-coap--constrained-application-protocol",
  "level": 3
}, {
  "value": "Dry Run Trace Table → CoAP CON Exchange",
  "id": "dry-run-trace-table--coap-con-exchange",
  "level": 4
}, {
  "value": "18.2.4 MQTT vs CoAP vs HTTP Comparison Table",
  "id": "1824-mqtt-vs-coap-vs-http-comparison-table",
  "level": 3
}, {
  "value": "18.2.5 LoRaWAN",
  "id": "1825-lorawan",
  "level": 3
}, {
  "value": "TypeScript Implementation: IoTDeviceSimulator",
  "id": "typescript-implementation-iotdevicesimulator",
  "level": 4
}, {
  "value": "18.3 Cellular Evolution → 4G LTE → 5G → 6G",
  "id": "183-cellular-evolution--4g-lte--5g--6g",
  "level": 2
}, {
  "value": "18.3.1 4G LTE (Long-Term Evolution)",
  "id": "1831-4g-lte-long-term-evolution",
  "level": 3
}, {
  "value": "18.3.2 5G Core (5GC) → Service-Based Architecture",
  "id": "1832-5g-core-5gc--service-based-architecture",
  "level": 3
}, {
  "value": "18.3.3 4G vs 5G vs 6G Comparison Table",
  "id": "1833-4g-vs-5g-vs-6g-comparison-table",
  "level": 3
}, {
  "value": "18.3.4 5G vs Wi-Fi 6 (Interview Deep Dive)",
  "id": "1834-5g-vs-wi-fi-6-interview-deep-dive",
  "level": 3
}, {
  "value": "18.4 QUIC",
  "id": "184-quic",
  "level": 2
}, {
  "value": "18.4.1 Key Features",
  "id": "1841-key-features",
  "level": 3
}, {
  "value": "18.4.2 QUIC Packet Format",
  "id": "1842-quic-packet-format",
  "level": 3
}, {
  "value": "18.4.3 QUIC Streams",
  "id": "1843-quic-streams",
  "level": 3
}, {
  "value": "18.5 HTTP/3",
  "id": "185-http3",
  "level": 2
}, {
  "value": "18.6 Satellite Internet → Starlink, LEO Constellations",
  "id": "186-satellite-internet--starlink-leo-constellations",
  "level": 2
}, {
  "value": "18.6.1 Orbital Types for Satellite Internet",
  "id": "1861-orbital-types-for-satellite-internet",
  "level": 3
}, {
  "value": "18.6.2 Starlink Architecture",
  "id": "1862-starlink-architecture",
  "level": 3
}, {
  "value": "18.6.3 Satellite vs Terrestrial Comparison Table",
  "id": "1863-satellite-vs-terrestrial-comparison-table",
  "level": 3
}, {
  "value": "18.6.4 Edge Cases",
  "id": "1864-edge-cases",
  "level": 3
}, {
  "value": "18.6.5 Complexity Analysis",
  "id": "1865-complexity-analysis",
  "level": 3
}, {
  "value": "18.7 Network Automation",
  "id": "187-network-automation",
  "level": 2
}, {
  "value": "18.7.1 Ansible for Network Automation",
  "id": "1871-ansible-for-network-automation",
  "level": 3
}, {
  "value": "18.7.2 NETCONF/YANG",
  "id": "1872-netconfyang",
  "level": 3
}, {
  "value": "18.7.3 Ansible vs NETCONF vs RESTCONF Comparison Table",
  "id": "1873-ansible-vs-netconf-vs-restconf-comparison-table",
  "level": 3
}, {
  "value": "18.7.4 Complexity Analysis",
  "id": "1874-complexity-analysis",
  "level": 3
}, {
  "value": "18.7.5 Edge Cases",
  "id": "1875-edge-cases",
  "level": 3
}, {
  "value": "18.8 Zero Trust Networking → ZTNA/SASE",
  "id": "188-zero-trust-networking--ztnasase",
  "level": 2
}, {
  "value": "18.8.1 Core Principles (NIST SP 800-207)",
  "id": "1881-core-principles-nist-sp-800-207",
  "level": 3
}, {
  "value": "18.8.2 ZTNA (Zero Trust Network Access)",
  "id": "1882-ztna-zero-trust-network-access",
  "level": 3
}, {
  "value": "18.8.3 SASE (Secure Access Service Edge)",
  "id": "1883-sase-secure-access-service-edge",
  "level": 3
}, {
  "value": "18.8.4 Edge Cases",
  "id": "1884-edge-cases",
  "level": 3
}, {
  "value": "18.9 AI/ML in Networking",
  "id": "189-aiml-in-networking",
  "level": 2
}, {
  "value": "18.9.1 Application Areas",
  "id": "1891-application-areas",
  "level": 3
}, {
  "value": "18.9.2 AI/ML in Networking → Implementation",
  "id": "1892-aiml-in-networking--implementation",
  "level": 3
}, {
  "value": "18.9.3 Complexity Analysis",
  "id": "1893-complexity-analysis",
  "level": 3
}, {
  "value": "18.9.4 A&amp;D Table: AI/ML in Networking",
  "id": "1894-ad-table-aiml-in-networking",
  "level": 3
}, {
  "value": "18.10 Quantum Networking",
  "id": "1810-quantum-networking",
  "level": 2
}, {
  "value": "18.10.1 Quantum Key Distribution (QKD)",
  "id": "18101-quantum-key-distribution-qkd",
  "level": 3
}, {
  "value": "18.10.2 Quantum Repeaters",
  "id": "18102-quantum-repeaters",
  "level": 3
}, {
  "value": "18.10.3 Quantum Networking Feasibility",
  "id": "18103-quantum-networking-feasibility",
  "level": 3
}, {
  "value": "18.10.4 Edge Cases",
  "id": "18104-edge-cases",
  "level": 3
}, {
  "value": "18.11 Edge Computing",
  "id": "1811-edge-computing",
  "level": 2
}, {
  "value": "18.11.1 Edge Tiers",
  "id": "18111-edge-tiers",
  "level": 3
}, {
  "value": "18.11.2 Use Cases",
  "id": "18112-use-cases",
  "level": 3
}, {
  "value": "18.11.3 Edge Computing Architecture → Numbered Steps",
  "id": "18113-edge-computing-architecture--numbered-steps",
  "level": 3
}, {
  "value": "18.11.4 Complexity Analysis",
  "id": "18114-complexity-analysis",
  "level": 3
}, {
  "value": "18.11.5 A&amp;D Table: Edge Computing",
  "id": "18115-ad-table-edge-computing",
  "level": 3
}, {
  "value": "TypeScript Implementation: EdgeNodeProcessor",
  "id": "typescript-implementation-edgenodeprocessor",
  "level": 4
}, {
  "value": "18.12 Network Observability → eBPF, OpenTelemetry",
  "id": "1812-network-observability--ebpf-opentelemetry",
  "level": 2
}, {
  "value": "18.12.1 eBPF (Extended Berkeley Packet Filter)",
  "id": "18121-ebpf-extended-berkeley-packet-filter",
  "level": 3
}, {
  "value": "18.12.2 OpenTelemetry",
  "id": "18122-opentelemetry",
  "level": 3
}, {
  "value": "18.12.3 Complexity Analysis",
  "id": "18123-complexity-analysis",
  "level": 3
}, {
  "value": "18.13 Comparison Tables",
  "id": "1813-comparison-tables",
  "level": 2
}, {
  "value": "18.13.1 IPv6 Transition Mechanisms Comparison",
  "id": "18131-ipv6-transition-mechanisms-comparison",
  "level": 3
}, {
  "value": "18.13.2 MQTT vs CoAP vs HTTP Comparison",
  "id": "18132-mqtt-vs-coap-vs-http-comparison",
  "level": 3
}, {
  "value": "18.13.3 4G vs 5G vs 6G Comparison",
  "id": "18133-4g-vs-5g-vs-6g-comparison",
  "level": 3
}, {
  "value": "18.13.4 Satellite vs Terrestrial Comparison",
  "id": "18134-satellite-vs-terrestrial-comparison",
  "level": 3
}, {
  "value": "18.13.5 Ansible vs NETCONF vs RESTCONF Comparison",
  "id": "18135-ansible-vs-netconf-vs-restconf-comparison",
  "level": 3
}, {
  "value": "18.13.6 Zero Trust vs Perimeter Security Comparison",
  "id": "18136-zero-trust-vs-perimeter-security-comparison",
  "level": 3
}, {
  "value": "18.14 Interview Corner",
  "id": "1814-interview-corner",
  "level": 2
}, {
  "value": "Q1: What are the main barriers to IPv6 adoption?",
  "id": "q1-what-are-the-main-barriers-to-ipv6-adoption",
  "level": 3
}, {
  "value": "Q2: 5G vs Wi-Fi 6 → when would you use each?",
  "id": "q2-5g-vs-wi-fi-6--when-would-you-use-each",
  "level": 3
}, {
  "value": "Q3: Is quantum networking feasible for the internet today?",
  "id": "q3-is-quantum-networking-feasible-for-the-internet-today",
  "level": 3
}, {
  "value": "Q4: How does AI improve network management systems (NMS)?",
  "id": "q4-how-does-ai-improve-network-management-systems-nms",
  "level": 3
}, {
  "value": "Q5: Explain the difference between SDN, NFV, and Network Automation.",
  "id": "q5-explain-the-difference-between-sdn-nfv-and-network-automation",
  "level": 3
}, {
  "value": "Q6: What is the role of QUIC connection migration in mobile networks?",
  "id": "q6-what-is-the-role-of-quic-connection-migration-in-mobile-networks",
  "level": 3
}, {
  "value": "Q7: Edge vs Cloud → how do you decide where to process data?",
  "id": "q7-edge-vs-cloud--how-do-you-decide-where-to-process-data",
  "level": 3
}, {
  "value": "18.15 Applications in Real Systems",
  "id": "1815-applications-in-real-systems",
  "level": 2
}, {
  "value": "Starlink (SpaceX)",
  "id": "starlink-spacex",
  "level": 3
}, {
  "value": "AWS Wavelength (5G Edge Computing)",
  "id": "aws-wavelength-5g-edge-computing",
  "level": 3
}, {
  "value": "Google B4 SDN (WAN Traffic Engineering)",
  "id": "google-b4-sdn-wan-traffic-engineering",
  "level": 3
}, {
  "value": "Cisco SD-Access (Intent-Based Networking)",
  "id": "cisco-sd-access-intent-based-networking",
  "level": 3
}, {
  "value": "18.16 Pro Tips",
  "id": "1816-pro-tips",
  "level": 2
}, {
  "value": "18.17 Chapter Quiz",
  "id": "1817-chapter-quiz",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "18.18 Summary",
  "id": "1818-summary",
  "level": 2
}, {
  "value": "18.19 Exercises",
  "id": "1819-exercises",
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
    commit: "commit",
    details: "details",
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
        id: "chapter-18-modern-networking--complete-reference",
        children: "Chapter 18: Modern Networking → Complete Reference"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "GFG/Javatpoint Depth → IPv6, IoT, 4G→5G→6G, Satellite Internet, Network Automation, Zero Trust, AI/ML in Networking, Quantum Networking, Edge Computing, Network Observability"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/computer-networks/ch18-modern-networking.png",
        alt: "Modern Networking"
      })
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
        href: "../../assets/images/lessons/computer-networks/18-modern/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/computer-networks/18-modern/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/computer-networks/18-modern/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/computer-networks/18-modern/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/computer-networks/18-modern/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/computer-networks/18-modern/visual-explanation.png",
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
        children: "Describe the QUIC transport protocol and its advantages over TCP."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain HTTP/3 architecture and its relationship to QUIC."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the 5G core network architecture using service-based interfaces."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate IoT networking protocols: MQTT, CoAP, 6LoWPAN, and LoRaWAN."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare IPv6 transition mechanisms: dual-stack, tunneling, and translation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain cellular evolution from 4G LTE through 5G to 6G."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe satellite internet architectures including LEO constellations (Starlink)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement network automation using Ansible, NETCONF/YANG, and RESTCONF."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze Zero Trust Networking (ZTNA/SASE) vs perimeter-based security."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate AI/ML applications in network management and operations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Discuss quantum networking principles and current feasibility."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain edge computing tiers and use cases."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement network observability using eBPF and OpenTelemetry."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "table-of-contents",
      children: "Table of Contents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#181-ipv6-adoption--transition",
          children: "IPv6 Adoption & Transition"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#182-iot-networking",
          children: "IoT Networking → 6LoWPAN, CoAP, MQTT, LoRaWAN"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#183-cellular-evolution--4g-lte--5g--6g",
          children: "Cellular Evolution → 4G LTE → 5G → 6G"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#184-quic",
          children: "QUIC"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#185-http3",
          children: "HTTP/3"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#186-satellite-internet--starlink-leo-constellations",
          children: "Satellite Internet → Starlink, LEO Constellations"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#187-network-automation",
          children: "Network Automation → Ansible, NETCONF/YANG, RESTCONF"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#188-zero-trust-networking--ztnasase",
          children: "Zero Trust Networking → ZTNA/SASE"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#189-aiml-in-networking",
          children: "AI/ML in Networking"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1810-quantum-networking",
          children: "Quantum Networking"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1811-edge-computing",
          children: "Edge Computing"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1812-network-observability--ebpf-opentelemetry",
          children: "Network Observability → eBPF, OpenTelemetry"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1813-comparison-tables",
          children: "Comparison Tables"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1814-interview-corner",
          children: "Interview Corner"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1815-applications-in-real-systems",
          children: "Applications in Real Systems"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1816-pro-tips",
          children: "Pro Tips"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1817-chapter-quiz",
          children: "Chapter Quiz"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1818-summary",
          children: "Summary"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1819-exercises",
          children: "Exercises"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "181-ipv6-adoption--transition",
      children: "18.1 IPv6 Adoption & Transition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " IPv4 exhaustion is like a city with only 4.3 billion street addresses → every house, car, and phone needs one, and there are more devices than addresses. IPv6 (128-bit = 340 undecillion addresses) is like switching to GPS coordinates (latitude, longitude) → every atom on Earth could have its own address. But you cannot switch overnight; the city must support both systems during the transition."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1811-why-ipv6-the-address-exhaustion-problem",
      children: "18.1.1 Why IPv6? The Address Exhaustion Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IPv4 uses 32-bit addresses = 2^32 ≈ 4.3 billion addresses. IANA allocated the last IPv4 blocks in 2011; regional registries exhausted by 2019. With 30+ billion IoT devices projected, IPv6 is mandatory."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "128-bit address space:"
        }), " 2^128 = 340 undecillion = 6.7 × 10^17 addresses per mm² of Earth's surface."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No NAT required:"
        }), " Every device gets a globally routable public IP. End-to-end connectivity restored."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Simplified header:"
        }), " Fixed 40-byte header (no options in base), no checksum (reduces router processing)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Auto-configuration (SLAAC):"
        }), " Devices generate their own IPv6 address without DHCP."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Built-in IPsec:"
        }), " Mandatory support (though optional in practice)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No fragmentation by routers:"
        }), " Path MTU discovery only; hosts fragment."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1812-ipv6-packet-format",
      children: "18.1.2 IPv6 Packet Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "| Version(4b) | Traffic Class(8b) | Flow Label(20b) |\n| Payload Length(16b) | Next Header(8b) | Hop Limit(8b) |\n| Source Address (128 bits)                                 |\n| Destination Address (128 bits)                            |\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fields removed from IPv4:"
      }), " Header Length (fixed 40B), Identification, Flags, Fragment Offset, Checksum, Options (moved to extension headers)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Extension headers (Next Header chain):"
      }), " Hop-by-Hop Options → Destination Options → Routing → Fragment → Authentication → ESP → Destination Options → Upper Layer (TCP=6, UDP=17)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1813-ipv6-address-types",
      children: "18.1.3 IPv6 Address Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prefix"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Global Unicast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2000::/3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public routable (similar to IPv4 public)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Link-Local"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fe80::/10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatically assigned, not routable (every interface has one)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unique Local"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fc00::/7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private (similar to IPv4 10.x, 192.168.x)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multicast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ff00::/8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-to-many (no broadcast in IPv6)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anycast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(from unicast)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-to-nearest (routed to closest)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loopback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "::1/128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "localhost (::1 instead of 127.0.0.1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unspecified"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "::/128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default route / not yet assigned"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1814-ipv6-transition-mechanisms",
      children: "18.1.4 IPv6 Transition Mechanisms"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Dual-stack is a bilingual person speaking both languages. Tunneling is an English speaker using an interpreter to reach a Spanish speaker. Translation is like Google Translate → imperfect but works when neither side speaks the other's language."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "mechanism-1-dual-stack",
      children: "Mechanism 1: Dual-Stack"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Both IPv4 and IPv6 stacks run simultaneously. DNS returns A (IPv4) and AAAA (IPv6) records; the client prefers IPv6 if available."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps → Dual-Stack Communication:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client queries DNS for example.com."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DNS returns both A record (192.0.2.1) and AAAA record (2001:db8::1)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client attempts TCP connection over IPv6 first (modern OS default)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If IPv6 connection succeeds, communication proceeds over IPv6."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If IPv6 fails (timeout, ICMP unreachable), client falls back to IPv4."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Both stacks operate simultaneously; all services listen on both."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages:"
      }), " No single point of failure, no encapsulation overhead, native IPv6 performance.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disadvantages:"
      }), " Requires dual infrastructure (routers, firewalls, DNS), doubles management complexity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "mechanism-2-tunneling",
      children: "Mechanism 2: Tunneling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IPv6 packets are encapsulated inside IPv4 packets for transport across IPv4-only networks."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common tunneling protocols:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "6to4 (RFC 3056):"
      }), " Automatic tunnel using 2002::/16 prefix. Router encapsulates IPv6 in IPv4 (protocol 41). No explicit tunnel configuration needed, but relies on public IPv4 address and has reliability issues."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Teredo (RFC 4380):"
      }), " Works through NAT. Encapsulates IPv6 in UDP over IPv4. Uses Teredo server/relay infrastructure. Slow and deprecated by most OS."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GRE/IPv6:"
      }), " Generic Routing Encapsulation tunnels IPv6 over IPv4. Manual configuration, supports multicast."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps → 6to4 Tunneling:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Host A (IPv6) wants to send a packet to Host B (IPv6) across an IPv4-only network."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Border router receives IPv6 packet, sees destination is 2002:c0a8::1."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Router extracts IPv4 address from 2002: prefix (c0a8 = 192.168.0.1)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Router encapsulates the IPv6 packet in an IPv4 packet (protocol 41)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IPv4 packet traverses the IPv4 network to the destination border router."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Destination router decapsulates, forwards IPv6 packet to Host B."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode → 6to4 Encapsulation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION encapsulate_6to4(ipv6_packet):\n    src_ipv4 ← GET_PUBLIC_IPV4()\n    # Extract embedded IPv4 from 2002:V4ADDR::/48\n    dst_ipv4 ← EXTRACT_IPV4(ipv6_packet.destination)\n    ipv4_header ← IPv4_HEADER(\n        src = src_ipv4,\n        dst = dst_ipv4,\n        protocol = 41  # IPv6 encapsulation\n    )\n    RETURN ipv4_header + ipv6_packet\n\nFUNCTION decapsulate_6to4(ipv4_packet):\n    IF ipv4_packet.protocol == 41:\n        RETURN EXTRACT_PAYLOAD(ipv4_packet)  # inner IPv6 packet\n    RETURN NULL\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages:"
      }), " Works across existing IPv4 infrastructure, no per-site configuration for 6to4.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disadvantages:"
      }), " Path MTU issues, anycast relay reliability, additional 20-40 byte header overhead, NAT incompatibility (Teredo helps but is slow)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "mechanism-3-translation-nat64dns64",
      children: "Mechanism 3: Translation (NAT64/DNS64)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Translates between IPv6-only and IPv4-only hosts at the network layer using IP/ICMP translation (RFC 6145)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps → NAT64/DNS64:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client (IPv6-only) queries DNS64 for example.com (IPv4-only server)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DNS64 synthesizes an AAAA record with a well-known prefix (64:ff9b::/96) prepended to the A record IP."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client sends IPv6 packet to 64:ff9b::c000:0201 (which encodes 192.0.2.1)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NAT64 router receives the IPv6 packet, strips the prefix, translates headers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NAT64 forwards IPv4 packet to 192.0.2.1."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Response follows reverse path: IPv4 → NAT64 → IPv6 → client."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages:"
      }), " Allows IPv6-only clients to reach the entire IPv4 internet. Minimal client configuration.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disadvantages:"
      }), " Stateful (NAT64 maintains translation state), application-layer issues with IP-embedded protocols (FTP, SIP), performance overhead of translation, does not work with DNSSEC (signatures invalidated by address change)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1815-ipv6-transition-comparison-table",
      children: "18.1.5 IPv6 Transition Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dual-Stack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tunneling (6to4)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Translation (NAT64)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "End-to-end IPv6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (client sees IPv6 only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IPv4 reachability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (native)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (native)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (translated)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Infrastructure change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (both stacks)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (border routers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (NAT64 gateway)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20-40B per packet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Header translation CPU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NAT traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires Teredo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateful (like NAT)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MTU issues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (fragmentation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DNS impact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both A and AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS64 required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greenfield, enterprise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISP transition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile networks, IPv6-only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native (best)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulation cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Translation cost"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1816-edge-cases",
      children: "18.1.6 Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backward compatibility:"
        }), " Legacy applications hardcoded to IPv4 addresses (socket APIs) may fail. Mitigation: dual-stack, happy eyeballs (RFC 8305)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DNS resolution failure:"
        }), " No AAAA record, no A record → host unreachable. Mitigation: fallback logic in resolver."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Path MTU black holes:"
        }), " ICMPv6 Packet Too Big messages blocked by firewalls → connection hangs. Mitigation: PMTUD probe, minimum 1280B MTU guarantee."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NAT44 interaction:"
        }), " Home routers performing NAT44 may not pass protocol 41 (6to4). Mitigation: Teredo or explicit tunnel broker."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security policy mismatch:"
        }), " IPv6 firewall rules may differ from IPv4. Many breaches occur over unmonitored IPv6 tunnels. Mitigation: consistent ACLs, monitoring both stacks."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1817-complexity-analysis",
      children: "18.1.7 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Overhead per Packet"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Overhead"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dual-stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No encapsulation; both stacks operate independently"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6to4 Tunnel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+20 bytes (IPv4 header)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per encapsulate/decapsulate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adds IP header at border, constant CPU per packet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NAT64 Translation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 bytes (header rewrite)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) per packet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must recompute checksums, translate addresses, maintain state table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Teredo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+28 bytes (UDP+IPv4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) + NAT traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most overhead; UDP encapsulation + relay processing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it matters:"
      }), " Dual-stack has zero overhead but doubles operational complexity. 6to4 is simple but suffers MTU issues. NAT64 lets operators deploy IPv6-only networks but creates stateful choke points. The choice depends on existing infrastructure and whether the goal is \"add IPv6\" (dual-stack) or \"migrate to IPv6-only\" (tunneling → translation)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1818-ad-table-ipv6-transition",
      children: "18.1.8 A&D Table: IPv6 Transition"
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
            children: "Solves IPv4 exhaustion permanently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dual-stack doubles network management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No NAT required (end-to-end restored)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy apps hardcoded to IPv4 break"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLAAC simplifies device configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many ISPs still IPv4-only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simplified header improves routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transition mechanisms add complexity/cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in mandatory IPsec support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security teams unfamiliar with IPv6 threats"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-ipv6transitionmanager",
      children: "TypeScript Implementation: IPv6TransitionManager"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface IPv6TransitionConfig {\n  mechanism: 'dual-stack' | '6to4' | 'teredo' | 'nat64';\n  ipv4Prefix: string;\n  ipv6Prefix: string;\n  relays?: string[];\n}\n\nclass IPv6TransitionManager {\n  private config: IPv6TransitionConfig;\n\n  constructor(config: IPv6TransitionConfig) {\n    this.config = config;\n  }\n\n  translateAddress(ipv4: string, ipv6: string): { ipv4: string; ipv6: string; translated: string } {\n    switch (this.config.mechanism) {\n      case 'dual-stack':\n        return { ipv4, ipv6, translated: ipv6 };\n      case '6to4': {\n        // 6to4: embeds IPv4 into IPv6 prefix 2002::/16\n        const parts = ipv4.split('.').map(Number);\n        const hex = parts.map(p => p.toString(16).padStart(2, '0')).join('');\n        const v6 = `2002:${hex.slice(0, 4)}:${hex.slice(4, 8)}::${ipv6}`;\n        return { ipv4, ipv6, translated: v6 };\n      }\n      case 'nat64': {\n        // NAT64: synthesize IPv6 from IPv4 using well-known prefix 64:ff9b::/96\n        const parts = ipv4.split('.').map(Number);\n        const hex = parts.map(p => p.toString(16).padStart(2, '0')).join('');\n        const synthesized = `64:ff9b::${hex.slice(0, 4)}:${hex.slice(4, 8)}`;\n        return { ipv4, ipv6, translated: synthesized };\n      }\n      default:\n        return { ipv4, ipv6, translated: ipv6 };\n    }\n  }\n\n  getOverhead(): { bytesPerPacket: number; cpuImpact: string } {\n    switch (this.config.mechanism) {\n      case 'dual-stack': return { bytesPerPacket: 0, cpuImpact: 'None' };\n      case '6to4': return { bytesPerPacket: 20, cpuImpact: 'Low (encapsulation)' };\n      case 'teredo': return { bytesPerPacket: 28, cpuImpact: 'Medium (UDP+NAT)' };\n      case 'nat64': return { bytesPerPacket: 0, cpuImpact: 'High (stateful rewrite)' };\n    }\n  }\n}\n\n// Usage\nconst manager = new IPv6TransitionManager({ mechanism: 'nat64', ipv4Prefix: '10.0.0.0/8', ipv6Prefix: '2001:db8::/32' });\n// console.log(manager.translateAddress('10.0.0.1', '2001:db8::1').translated);\n// console.log(`Overhead: ${manager.getOverhead().bytesPerPacket} bytes/packet`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "182-iot-networking",
      children: "18.2 IoT Networking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Internet of Things (IoT) connects billions of constrained devices → sensors, actuators, and controllers → with limited power, memory, and processing capability. Three key protocols dominate: MQTT (pub-sub over TCP), CoAP (REST over UDP), and 6LoWPAN (IPv6 over low-power radio)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1821-6lowpan",
      children: "18.2.1 6LoWPAN"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " 6LoWPAN is like writing a 500-page novel on a single postage stamp using microscopic text. It compresses IPv6 headers so that small sensor devices can speak internet protocols over low-power, low-bandwidth radio links."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " 6LoWPAN (IPv6 over Low-Power Wireless Personal Area Networks, RFC 4944/6282/6775) enables IPv6 packets to be transmitted over IEEE 802.15.4 radio links. The maximum frame size of 802.15.4 is 127 bytes; with link-layer security (21 bytes), only 81 bytes remain for data. A full IPv6 header is 40 bytes → compression is essential."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key mechanisms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Header compression:"
        }), " Stateless (HC1/HC2) and stateful (IPHC → RFC 6282) compression. Typical IPv6+UDP 48 bytes → 6 bytes compressed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fragmentation:"
        }), " 6LoWPAN fragments large IP packets into multiple 802.15.4 frames (first fragment has 11-byte header, subsequent 5-byte)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mesh routing:"
        }), " Layer-2 mesh-under forwarding (route over radio, not IP)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Neighbor discovery:"
        }), " Optimized for low-power (RFC 6775): host address registration, duplicate address detection via DAD server."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps → 6LoWPAN Packet Transmission:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Application generates an IPv6 packet (e.g., 100 bytes of sensor data + 40B IPv6 header + 8B UDP header = 148B)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "6LoWPAN compression layer removes redundant fields (link-local prefix common to both endpoints, interface identifiers derived from MAC)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compressed payload: 148 → ~25 bytes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If payload > 127 bytes, fragmentation layer splits into 2+ fragments."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each fragment sent over 802.15.4 radio to the 6LoWPAN border router."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Border router reassembles, decompresses, and forwards to the internet."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode → 6LoWPAN Header Compression (IPHC):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION compress_ipv6(ipv6_packet, context):\n    # IPHC encoding bits\n    compressed ← 0x60  # IPHC dispatch byte\n    # Check if source/dest addresses are link-local (compressible)\n    IF ipv6_packet.src PREFIX_MATCHES fe80::/10:\n        compressed.SAC ← 0  # Stateless compression\n        compressed.SAM ← 11   # 64 bits derived from MAC\n        compressed <<= 4\n    IF ipv6_packet.dst PREFIX_MATCHES fe80::/10:\n        compressed.DAC ← 0\n        compressed.DAM ← 11\n        compressed <<= 4\n    # Compress Next Header (UDP → NHC encoding)\n    IF ipv6_packet.next_header == 17:  # UDP\n        compressed.NHC ← 0xF0  # UDP compressed\n        compressed += compress_udp(ipv6_packet.udp)\n    # Return compressed header + payload\n    RETURN compressed + ipv6_packet.payload\n\nFUNCTION decompress_ipv6(compressed, context):\n    ipv6 ← IPv6()\n    ipv6.version ← 6\n    IF compressed & 0x80:  # Source address compressed\n        ipv6.src ← MAC_TO_IPV6(radio_src_mac)\n    IF compressed & 0x40:  # Dest address compressed\n        ipv6.dst ← MAC_TO_IPV6(radio_dst_mac)\n    ipv6.next_header ← decode_nhc(compressed.NHC)\n    IF ipv6.next_header == 17:  # UDP\n        ipv6.udp ← decompress_udp()\n    ipv6.payload ← compressed.payload\n    RETURN ipv6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IPHC compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per packet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-25 bytes header"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-size header fields; pattern matching on prefixes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fragmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) per packet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11 + 5*(N-1) bytes overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must split N fragments; each fragment adds a header"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mesh-under routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h) per hop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 bytes (L2 only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forwarding at MAC layer; h = number of mesh hops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decompression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per packet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40-48 bytes output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-size table lookup, no iteration"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it matters:"
      }), " 6LoWPAN compression is the difference between fitting a packet in one radio frame (compressed) or requiring 3+ fragments (uncompressed). More fragments = more radio time = more battery drain. At scale (10K devices), 3× fragmentation means 20K extra transmissions per hour."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1822-mqtt--message-queuing-telemetry-transport",
      children: "18.2.2 MQTT → Message Queuing Telemetry Transport"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " MQTT is like a group chat on WhatsApp. You (publisher) post a message to a channel (topic). Everyone who subscribed to that channel receives it. The WhatsApp server (broker) handles delivery. If you go offline, the server saves messages for you (persistent session). You can also set a \"last will\" → a message the server posts if you suddenly disconnect."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture:"
      }), " Publish-subscribe model with a central broker mediating between publishers and subscribers. Uses TCP (or TLS for security)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps → MQTT Publish-Subscribe:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client A connects to the broker (CONNECT → CONNACK)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client A subscribes to topic \"sensors/temperature\" (SUBSCRIBE → SUBACK)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client B publishes 25.5°C to topic \"sensors/temperature\" (PUBLISH)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Broker receives the PUBLISH message, checks the subscription list."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Broker forwards the message to Client A (and any other subscribers)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client A receives the message and processes the payload."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If QoS 1: Client A sends PUBACK to broker, broker discards the message."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "QoS Levels (Deep Dive):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "QoS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handshake"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Guarantee"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At most once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (fire-and-forget)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best effort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Telemetry (temp every 5s → duplicates harmless)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At least once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISH → PUBACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At least one delivery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alarms (must receive, duplicates OK)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exactly once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISH → PUBREC → PUBREL → PUBCOMP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exactly once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Financial transactions, billing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MQTT 5.0 new features:"
      }), " Session expiry, message expiry, user properties in header, server redirection (load balancing), enhanced error codes, subscription identifiers, shared subscriptions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Will and Testament (LWT):"
      }), " Client registers a WILL message (topic + payload + QoS) during CONNECT. If the client disconnects without sending DISCONNECT, the broker publishes the WILL message. Used for: graceful degradation alerts (\"sensor node offline\"), dead peer detection."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation → Simple MQTT Client (Paho MQTT C++):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include \"mqtt/async_client.h\"\n\nconst std::string SERVER_ADDRESS = \"tcp://broker.hivemq.com:1883\";\nconst std::string CLIENT_ID = \"cpp_sensor_01\";\nconst std::string TOPIC = \"sensors/temperature\";\n\nclass MqttCallback : public mqtt::callback {\n    void message_arrived(mqtt::const_message_ptr msg) override {\n        std::cout << \"Topic: \" << msg->get_topic()\n                  << \" | Payload: \" << msg->to_string()\n                  << \" | QoS: \" << msg->get_qos() << std::endl;\n    }\n    void connection_lost(const std::string& cause) override {\n        std::cerr << \"Connection lost: \" << cause << std::endl;\n    }\n};\n\nint main() {\n    mqtt::async_client client(SERVER_ADDRESS, CLIENT_ID);\n    MqttCallback cb;\n    client.set_callback(&cb);\n\n    mqtt::connect_options connOpts;\n    connOpts.set_clean_session(true);\n    connOpts.set_keep_alive_interval(20);\n    // LWT: if this sensor dies unexpectedly, notify subscribers\n    mqtt::message will_msg(\"sensors/alerts\", \"sensor_01 offline\", 1, false);\n    connOpts.set_will_message(will_msg);\n\n    client.connect(connOpts)->wait();\n    std::cout << \"Connected to broker\" << std::endl;\n\n    client.subscribe(TOPIC, 1)->wait();\n    std::cout << \"Subscribed to \" << TOPIC << std::endl;\n\n    // Publish a temperature reading\n    mqtt::message_ptr pubmsg = mqtt::make_message(TOPIC, \"25.5\");\n    pubmsg->set_qos(1);\n    client.publish(pubmsg)->wait();\n    std::cout << \"Published: 25.5\" << std::endl;\n\n    std::this_thread::sleep_for(std::chrono::seconds(5));\n    client.disconnect()->wait();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → MQTT Client (paho-mqtt):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import paho.mqtt.client as mqtt\nimport json\nimport time\n\nBROKER = \"broker.hivemq.com\"\nPORT = 1883\nTOPIC = \"sensors/temperature\"\nCLIENT_ID = \"python_sensor_01\"\n\ndef on_connect(client, userdata, flags, rc):\n    if rc == 0:\n        print(f\"Connected to {BROKER} (rc={rc})\")\n        client.subscribe(TOPIC, qos=1)\n    else:\n        print(f\"Connection failed: rc={rc}\")\n\ndef on_message(client, userdata, msg):\n    print(f\"Received on {msg.topic}: {msg.payload.decode()} (QoS {msg.qos})\")\n\nclient = mqtt.Client(client_id=CLIENT_ID, protocol=mqtt.MQTTv311)\nclient.on_connect = on_connect\nclient.on_message = on_message\n\n# LWT: notify if this sensor disconnects unexpectedly\nclient.will_set(\"sensors/alerts\", json.dumps({\n    \"sensor_id\": CLIENT_ID, \"status\": \"offline\"\n}), qos=1, retain=False)\n\nclient.connect(BROKER, PORT, keepalive=60)\nclient.loop_start()\n\n# Publish a reading\nclient.publish(TOPIC, json.dumps({\"temp\": 25.5, \"unit\": \"C\"}), qos=1)\nprint(\"Published temperature reading\")\n\ntime.sleep(2)\nclient.loop_stop()\nclient.disconnect()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-trace-table--mqtt-qos-1-exchange",
      children: "Dry Run Trace Table → MQTT QoS 1 Exchange"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Message"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Publisher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CONNECT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CONNECT(clientId=sensor01)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Awaiting CONNACK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accept"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CONNACK(rc=0, sessionPresent=false)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session created"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Publisher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SUBSCRIBE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SUBSCRIBE(pktId=1, topic=sensors/+, qos=1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Awaiting SUBACK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confirm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SUBACK(pktId=1, returnCodes=[1])"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subscription active"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Publisher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISH(pktId=2, topic=sensors/temp, payload=25.5, qos=1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Msg stored, awaiting PUBACK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISH(pktId=1, topic=sensors/temp, payload=25.5, qos=1) → Subscriber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forwarded to subscriber"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subscriber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBACK(pktId=1) → Broker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subscriber confirmed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBACK(pktId=2) → Publisher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broker confirmed; msg deleted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Publisher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Done"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ready for next publish"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "mqtt-edge-cases",
      children: "MQTT Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Duplicate delivery (QoS 1):"
        }), " Network partition causes PUBACK loss; publisher retransmits. Subscriber receives duplicate. Mitigation: deduplication at application layer (sequence numbers, idempotent operations)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Broker failure:"
        }), " Persistent subscribers lose queued messages. Mitigation: MQTT 5.0 session expiry, broker clustering (HiveMQ, EMQX), offline storage."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Large payload (>256 MB):"
        }), " MQTT specification limits to 256 MB. For larger payloads: split into chunks or use file transfer (MQTT 5.0 supports 4 GB max via variable-length integer encoding)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Retained messages retention:"
        }), " If retain=true, new subscribers immediately receive the last retained message. Can cause confusion if stale. Mitigation: set message expiry or clear retained."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1823-coap--constrained-application-protocol",
      children: "18.2.3 CoAP → Constrained Application Protocol"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " CoAP is like HTTP for ham radios → same REST verbs (GET, POST, PUT, DELETE) but designed for the constraints of low-power radios. Instead of TCP's reliable connection, CoAP uses UDP with a lightweight reliability layer (confirmable messages and retransmissions). It's HTTP's minimalist cousin that can run on a light bulb."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture:"
      }), " RESTful request-response over UDP. Supports observe (server pushes updates), block-wise transfer (large payloads), and resource discovery (/.well-known/core)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Message types:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CON (Confirmable):"
        }), " Requires ACK. Retransmits on timeout (exponential backoff: 2s, 4s, 8s... max 4 retries)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NON (Non-confirmable):"
        }), " Fire-and-forget. No ACK. For periodic sensor readings."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ACK (Acknowledgement):"
        }), " Confirms CON receipt. May piggyback the response."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RST (Reset):"
        }), " Receiver cannot process (e.g., no such resource)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation → CoAP Client (libcoap):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <coap3/coap.h>\n#include <iostream>\n#include <cstring>\n\nvoid response_handler(coap_session_t* session,\n                      const coap_pdu_t* request,\n                      const coap_pdu_t* response,\n                      coap_mid_t id) {\n    if (response == nullptr) {\n        std::cerr << \"Request timed out\" << std::endl;\n        return;\n    }\n    const uint8_t* data;\n    size_t len;\n    coap_get_data(response, &len, &data);\n    std::cout << \"Response (\" << len << \" bytes): \"\n              << std::string((const char*)data, len) << std::endl;\n}\n\nint main() {\n    coap_context_t* ctx = coap_new_context(nullptr);\n    coap_address_t dst;\n    coap_address_init(&dst);\n    coap_set_addr(&dst, AF_INET, \"192.168.1.100\", 5683);\n\n    coap_session_t* session = coap_new_client_session(ctx, nullptr, &dst, COAP_PROTO_UDP);\n    if (!session) {\n        std::cerr << \"Failed to create session\" << std::endl;\n        return 1;\n    }\n\n    coap_pdu_t* pdu = coap_new_pdu();\n    pdu->type = COAP_MESSAGE_CON;\n    pdu->code = COAP_REQUEST_GET;\n    coap_add_option(pdu, COAP_OPTION_URI_PATH, 4,\n                    reinterpret_cast<const uint8_t*>(\"temp\"));\n\n    coap_send(session, pdu);\n    std::cout << \"GET /temp sent\" << std::endl;\n\n    coap_register_response_handler(ctx, response_handler);\n    for (int i = 0; i < 5; ++i) {\n        coap_run_once(ctx, 2000);\n    }\n\n    coap_free_context(ctx);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → CoAP Client (aiocoap):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import asyncio\nfrom aiocoap import *\n\nasync def coap_client():\n    protocol = await Context.create_client_context()\n    request = Message(\n        code=GET,\n        uri=\"coap://192.168.1.100/temp\",\n        type=CON  # Confirmable → requires ACK\n    )\n    try:\n        response = await protocol.request(request).response\n        print(f\"Response: {response.payload.decode()} (code={response.code})\")\n    except Exception as e:\n        print(f\"Request failed: {e}\")\n\nasyncio.run(coap_client())\n\n# Observe mode → server pushes updates\nasync def observe_temperature():\n    protocol = await Context.create_client_context()\n    request = Message(code=GET, uri=\"coap://192.168.1.100/temp\")\n    observation = protocol.request(request)\n    observation.observation.register_callback(lambda r: print(\n        f\"Update: {r.payload.decode()}\"\n    ))\n    async for response in observation:\n        print(f\"Observed: {response.payload.decode()}\")\n\nasyncio.run(observe_temperature())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-trace-table--coap-con-exchange",
      children: "Dry Run Trace Table → CoAP CON Exchange"
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
            children: "Message Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CON(MID=100, GET /temp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send, start timer (2s)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(processing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reads temp sensor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Respond"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK(MID=100, 2.05 Content, \"25.5\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Piggybacked response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cancel retransmit timer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Payload = \"25.5\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "On packet loss:"
      }), " Timer expires at 2s → retransmit CON(MID=100) → 4s retry → 8s retry → 16s after 4 failures → timeout."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1824-mqtt-vs-coap-vs-http-comparison-table",
      children: "18.2.4 MQTT vs CoAP vs HTTP Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MQTT"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CoAP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "HTTP"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP (or TLS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP (or DTLS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP (or QUIC/HTTP3)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pub-sub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request-response (REST)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request-response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Header size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2–14 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100-800 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reliability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QoS 0, 1, 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CON/NON/ACK/RST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP guaranteed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stateful"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateless (cookies stateful)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No native"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (max-age option)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (ETag, Cache-Control)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Discovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Via broker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/.well-known/core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS + links"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Observing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Via subscription"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Observe option"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebSocket/SSE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Power consumption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (TCP keepalive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ultra-low (UDP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (TCP + TLS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensor-to-cloud, messaging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smart home, constrained devices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web, general-purpose"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standardized by"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OASIS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IETF (RFC 7252)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IETF/W3C"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1825-lorawan",
      children: "18.2.5 LoRaWAN"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LoRaWAN provides long-range, low-power wireless connectivity for IoT devices. It operates in unlicensed sub-GHz bands (868 MHz EU, 915 MHz US, 923 MHz Asia)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture:"
      }), " End devices → Gateways → Network Server → Application Server."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Device classes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Class A:"
        }), " Bidirectional. Device transmits; two receive windows follow. Lowest power. Best for battery sensors."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Class B:"
        }), " Scheduled receive slots (beacon-based). Server can predict when device listens. Medium power."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Class C:"
        }), " Continuous receive. Highest power, lowest latency. For actuators needing immediate commands."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Spreading Factor (SF) and data rate:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "SF"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bits/symbol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SNR min"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Range"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time on air (51B payload)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SF7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-7.5 dB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shortest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~56 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SF8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-10 dB"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "~112 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SF9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-12.5 dB"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "~205 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SF10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-15 dB"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "~371 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SF11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-17.5 dB"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "~741 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SF12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-20 dB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Longest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1482 ms"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Duty cycle:"
      }), " EU 868 MHz: 1% per sub-band (36 seconds per hour per device)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "typescript-implementation-iotdevicesimulator",
      children: "TypeScript Implementation: IoTDeviceSimulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface SensorReading {\n  deviceId: string;\n  timestamp: number;\n  temperature: number;\n  humidity: number;\n  batteryLevel: number;\n  signalStrength: number;\n}\n\nclass IoTDeviceSimulator {\n  private readings: SensorReading[] = [];\n\n  constructor(private deviceId: string, private intervalMs: number = 60000) {}\n\n  generateReading(): SensorReading {\n    return {\n      deviceId: this.deviceId,\n      timestamp: Date.now(),\n      temperature: 20 + Math.random() * 15,        // 20-35°C\n      humidity: 40 + Math.random() * 40,             // 40-80%\n      batteryLevel: Math.max(0, 100 - this.readings.length * 0.1), // 0.1% drain per reading\n      signalStrength: -120 + Math.random() * 50,     // -120 to -70 dBm\n    };\n  }\n\n  simulate(count: number): SensorReading[] {\n    for (let i = 0; i < count; i++) {\n      const reading = this.generateReading();\n      this.readings.push(reading);\n    }\n    return this.readings;\n  }\n\n  getStatistics(): { avgTemp: number; avgHumidity: number; avgBattery: number } {\n    const avg = (arr: number[]) => arr.reduce((a, b) => a + b, 0) / arr.length;\n    return {\n      avgTemp: avg(this.readings.map(r => r.temperature)),\n      avgHumidity: avg(this.readings.map(r => r.humidity)),\n      avgBattery: avg(this.readings.map(r => r.batteryLevel)),\n    };\n  }\n}\n\n// Usage\nconst sensor = new IoTDeviceSimulator('sensor-001', 60000);\nsensor.simulate(10);\n// const stats = sensor.getStatistics();\n// console.log(`Avg Temp: ${stats.avgTemp.toFixed(1)}°C, Battery: ${stats.avgBattery.toFixed(1)}%`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "183-cellular-evolution--4g-lte--5g--6g",
      children: "18.3 Cellular Evolution → 4G LTE → 5G → 6G"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " 4G is a city with highways (high-speed data). 5G adds express lanes (ultra-low latency), bus lanes (massive IoT), and the ability to dynamically repurpose lanes. 6G is the city of 2030 where the roads are invisible → connectivity is embedded in every surface, using terahertz radio and AI to anticipate traffic before it forms."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1831-4g-lte-long-term-evolution",
      children: "18.3.1 4G LTE (Long-Term Evolution)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Core architecture:"
      }), " Evolved Packet Core (EPC):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MME (Mobility Management Entity):"
        }), " Control plane → authentication, mobility tracking, paging."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SGW (Serving Gateway):"
        }), " User plane anchor for inter-eNodeB handover."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PGW (Packet Data Network Gateway):"
        }), " IP allocation, policy enforcement, internet gateway."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HSS (Home Subscriber Server):"
        }), " Subscriber database (SIM credentials, service subscriptions)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PCRF (Policy and Charging Rules Function):"
        }), " QoS policy, credit control."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key metrics:"
      }), " 100 Mbps–1 Gbps downlink, 30-50 ms RTT latency, 500 km/h mobility (high-speed trains)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Protocol stack:"
      }), " CPRI (fronthaul) → OFDMA (air interface) → IP/MPLS (backhaul) → EPC (core)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1832-5g-core-5gc--service-based-architecture",
      children: "18.3.2 5G Core (5GC) → Service-Based Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The 5G core (3GPP Release 15/16) uses a Service-Based Architecture (SBA). Network functions (NFs) communicate via HTTP/2 with RESTful APIs."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key network functions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AMF:"
        }), " Connection/mobility management, access authentication."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SMF:"
        }), " Session establishment, IP address allocation, traffic steering."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UPF:"
        }), " Packet routing and forwarding, QoS enforcement, traffic measurement."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PCF:"
        }), " Policy framework, network slicing decisions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NRF:"
        }), " NF service discovery and registration (service registry)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UDM:"
        }), " Subscription data, authentication credentials."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AUSF:"
        }), " Authentication and key agreement."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NSSF:"
        }), " Network slice selection."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Network slicing:"
      }), " eMBB (enhanced mobile broadband), uRLLC (ultra-reliable low-latency), mMTC (massive machine-type). Slices share physical infrastructure with independent QoS, routing, and management."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multi-access Edge Computing (MEC):"
      }), " UPF and application servers deployed at the network edge (near base station). Enables sub-10 ms latency for autonomous driving, industrial automation, AR/VR."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps → 5G UE Registration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UE sends RRC Connection Request to gNB (base station)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "gNB selects AMF based on UE's requested slice (NSSF)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AMF requests UE identity (SUCI → subscriber concealed identifier)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UE responds with SUCI; AMF sends to AUSF/UDM for authentication."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "5G-AKA (Authentication and Key Agreement) verifies credentials."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AMF selects SMF for session management."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SMF allocates IP address (UE→UPF path), configures QoS."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SMF sends N4 session rules to UPF."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UPF establishes user-plane tunnel (gNB→UPF)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UE receives PDU Session Establishment Accept with IP address."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1833-4g-vs-5g-vs-6g-comparison-table",
      children: "18.3.3 4G vs 5G vs 6G Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "4G LTE (Rel 8-14)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "5G NR (Rel 15-17)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "6G (Projected Rel 21-22)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Peak data rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 Tbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency (air interface)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10-30 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.01-0.1 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 20 MHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 400 MHz (mmWave)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 100 GHz (sub-THz)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frequency range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "700 MHz–2.6 GHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "600 MHz–52.6 GHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 GHz–3 THz"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MIMO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8×8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64×64 (massive MIMO)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024×1024 (holographic MIMO)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Core architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EPC (control + user)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SBA (services over HTTP/2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SBA + AI-native + compute fabric"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Air interface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OFDMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OFDMA + OFDM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OTFS + AI-based waveform"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Slicing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (3GPP defined)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes + compute slicing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge computing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEC (native)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI fabric, in-network compute"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Positioning accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50 m (cell ID)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1 m (mmWave beam)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<1 cm (THz + AI)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Energy efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1× baseline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10× vs 4G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100× vs 5G"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OAM (operations only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SON (self-organizing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI-native: air interface, core, apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile broadband"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "eMBB + uRLLC + mMTC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Holographic, digital twin, pervasive AI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2010-2020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2020-2030"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2030+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1834-5g-vs-wi-fi-6-interview-deep-dive",
      children: "18.3.4 5G vs Wi-Fi 6 (Interview Deep Dive)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "5G"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Wi-Fi 6 (802.11ax)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spectrum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Licensed (3.5 GHz, mmWave)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlicensed (2.4, 5, 6 GHz)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "km (macro), 100m (mmWave)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10-50m indoor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mobility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500 km/h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Walking speed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QoS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guaranteed (bearer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best effort (OFDMA)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIM-based (PKI)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WPA3 (PSK/802.1X)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carrier subscription"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free (ISP+wifi infrastructure)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seamless (inter-gNB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inefficient"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Density"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1M devices/km²"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2000 devices/AP"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "184-quic",
      children: "18.4 QUIC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "QUIC (Quick UDP Internet Connections, RFC 9000) is a transport protocol originally designed at Google and standardized by the IETF. QUIC runs over UDP and integrates TLS 1.3 at the transport layer."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1841-key-features",
      children: "18.4.1 Key Features"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reduced connection establishment."
      }), " QUIC combines the cryptographic and transport handshakes. A new connection completes in 1 RTT (compared to TCP's 2 RTT for TLS). Resumed connections achieve 0 RTT: the client sends data immediately using cached parameters from a previous session."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multiplexing without head-of-line blocking."
      }), " QUIC supports multiple streams within a single connection. Unlike TCP where a lost segment blocks all streams (HTTP/2 head-of-line blocking), QUIC streams are independent. Loss on one stream does not delay delivery on others."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Improved loss recovery."
      }), " QUIC uses monotonic packet numbers (not retransmission ambiguity) and more precise RTT measurement. Packet numbers increase monotonically; retransmitted packets carry new numbers, eliminating the ambiguity of TCP's retransmission detection. QUIC uses a more accurate loss detection mechanism based on packet thresholds rather than duplicate ACK counting."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Connection migration."
      }), " A QUIC connection is identified by a 64-bit Connection ID, not by the (IP, port) tuple. When the client's IP address changes (e.g., switching from WiFi to cellular), the connection survives. The client sends packets from the new address using the same Connection ID; the server continues the connection without rehandshaking."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Built-in encryption."
      }), " QUIC encrypts almost all transport headers (packet numbers, stream data, ACKs). Only a few fields are visible to intermediaries: source/destination Connection ID, version, and some flags."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1842-quic-packet-format",
      children: "18.4.2 QUIC Packet Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "| Connection ID (0–20 B) | Version (4 B) | Packet Number (1–4 B) | Encrypted Payload |\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Long-header packets establish connections; short-header packets carry data. The connection ID may be zero-length for single-path connections to reduce overhead."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1843-quic-streams",
      children: "18.4.3 QUIC Streams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A QUIC connection carries multiple streams, each identified by a 62-bit stream ID. Stream types:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client-initiated bidirectional (lowest bit 00)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server-initiated bidirectional (lowest bit 01)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client-initiated unidirectional (lowest bit 10)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server-initiated unidirectional (lowest bit 11)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Streams provide reliable, in-order byte delivery within the stream but are independent across streams. Flow control operates at both the connection level (total bytes across all streams) and stream level."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "185-http3",
      children: "18.5 HTTP/3"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP/3 (RFC 9114) maps HTTP semantics onto QUIC streams. It replaces HTTP/2's TCP-based framing with QUIC."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "QPACK:"
      }), " HTTP/3 uses QPACK header compression (RFC 9204), which adapts HPACK for QUIC's out-of-order delivery. QPACK uses separate encoder and decoder streams to synchronize header table state without blocking."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Stream mapping."
      }), " Each HTTP request-response pair uses one QUIC stream. Server push uses a unidirectional stream. Control messages (SETTINGS, GOAWAY, CANCEL_PUSH) use a dedicated unidirectional stream."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "0-RTT replay protection."
      }), " HTTP/3 over QUIC 0-RTT is vulnerable to replay attacks. Servers must implement replay detection (e.g., single-use tokens, timestamp validation)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps → HTTP/3 Request Flow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client sends QUIC Initial (1-RTT handshake includes TLS 1.3 + transport setup)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client sends HTTP/3 SETTINGS frame on control stream (uni)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client opens a bidirectional QUIC stream for the first HTTP request."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client sends HEADERS frame (QPACK-encoded headers) + DATA frame (payload)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server receives, decodes QPACK, processes request."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server responds with HEADERS + DATA frames on the same stream."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client opens new streams for concurrent requests (no HOL blocking)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "HTTP/2 vs HTTP/3 Head-of-Line Blocking:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HTTP/2 over TCP: Packet loss on any stream blocks ALL streams (TCP's in-order delivery)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HTTP/3 over QUIC: Packet loss on stream 1 does not affect streams 2, 3, 4."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "186-satellite-internet--starlink-leo-constellations",
      children: "18.6 Satellite Internet → Starlink, LEO Constellations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Traditional satellite internet (geostationary, GEO) is like a single lighthouse visible for miles → it covers a vast area, but the light takes time to reach you (600 ms latency). LEO constellations (Starlink, OneWeb) are like a swarm of fireflies at street level → many small lights moving fast, but one is always nearby, giving you much faster response (20-40 ms)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1861-orbital-types-for-satellite-internet",
      children: "18.6.1 Orbital Types for Satellite Internet"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Altitude"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Latency (one-way)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Coverage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Satellites Needed"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GEO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "35,786 km"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120-140 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/3 Earth (3 sats = global)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10,000-20,000 km"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40-60 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~20-30"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "340-1,200 km"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-4 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local (small footprint)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100s-1000s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VLEO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200-340 km"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<1 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very small"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10,000+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1862-starlink-architecture",
      children: "18.6.2 Starlink Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Starlink is like a mesh Wi-Fi network in the sky. Each satellite is a Wi-Fi extender with laser links to other satellites. Your dish (phased-array antenna) automatically tracks the nearest satellite as it passes overhead. Calls are handed off between satellites like a cellular network → but moving at 27,000 km/h."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key components:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Satellites:"
        }), " ~5,500 operational (2025) in LEO (340-550 km). Each weighs ~260 kg, has 4 phased-array antennas + 2 laser terminals. Inter-satellite laser links (ISLs) create a space mesh network."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User terminal (Dish):"
        }), " Phased-array antenna (\"Dishy McFlatface\") → electronically steers beam (no moving parts). Supports 100-200 Mbps downlink, 10-40 Mbps uplink."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ground stations (gateways):"
        }), " Connect satellites to fiber backbone. Distributed globally."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Starlink POPs:"
        }), " Points of presence connecting to internet exchanges."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps → Starlink Data Flow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User sends request (e.g., loading a website) from connected device → Starlink router → Dish."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dish beamforms to the satellite passing overhead (handled in <1 ms beam switching)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Satellite receives the uplink signal (Ku/Ka band: 12-18 GHz / 26.5-40 GHz)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the destination ground station is within the satellite's footprint: satellite transmits down directly."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If not: satellite forwards via laser link to another satellite in the constellation (laser ISL at 200 Gbps)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The request hops through space until a satellite above a ground station receives it."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ground station receives the signal and forwards to the internet backbone."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Response reverses the path: backbone → ground station → satellite(s) → dish → user."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1863-satellite-vs-terrestrial-comparison-table",
      children: "18.6.3 Satellite vs Terrestrial Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LEO Satellite (Starlink)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Terrestrial Fiber"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "5G Fixed Wireless"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20-40 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-10 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-15 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth (down)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100-200 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-100 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100-1000 Mbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99%+ (clear sky)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99.99%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99.9%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Coverage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global (including poles, oceans)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Urban/suburban only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Urban/suburban"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment cost per user"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~$600 (dish)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$10K-$50K/km trenching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$500-$1000 (CPE)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weather sensitivity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (rain fade)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mobility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-flight, maritime, RV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pedestrian, vehicle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Power consumption (user)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100W (dish)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10W (ONT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~15W (CPE)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rural, maritime, aviation, emergency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cities, high-density"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suburban last-mile"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1864-edge-cases",
      children: "18.6.4 Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rain fade (Ku/Ka band):"
        }), " Heavy rain attenuates signals >30 dB. Mitigation: adaptive modulation (lower throughput), site diversity, larger dish aperture."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LEO handover:"
        }), " Satellite moves at 7.5 km/s; user switches satellite every 1-4 minutes. Handover must complete in <10 ms to avoid TCP timeout. Mitigation: predictive handover (ephemeris-based), MPTCP/QUIC connection migration."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space debris collision risk:"
        }), " Kessler syndrome → cascading collisions. Mitigation: automated collision avoidance, deorbit plans, propulsion systems."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spectrum allocation:"
        }), " Interference with GEO satellites (same Ku/Ka bands). Mitigation: power limits, exclusion zones, beam nulling."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "C band (3.7-4.2 GHz) coexistence:"
        }), " 5G and satellite sharing same band. Mitigation: filtering, guard bands, coordinated deployment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Light pollution (astronomy):"
        }), " Satellite trails in telescope images. Mitigation: darkening coatings, sun-tracking orientation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1865-complexity-analysis",
      children: "18.6.5 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Beam tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) angles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-computed ephemeris; phased array steering is a fixed-cost table lookup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inter-satellite routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log N) hops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) routing tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic mesh routing in space; each satellite maintains neighbor table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TCP over satellite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Window state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High BDP (Bandwidth-Delay Product) requires large receive windows (1-10 MB)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predictive handover using known satellite positions eliminates scanning"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it matters:"
      }), " Satellite internet challenges fundamental protocol assumptions. TCP was designed for low-BDP terrestrial links. Over satellite (250 ms RTT, 200 Mbps → BDP = 6.25 MB), standard 64 KB TCP window severely limits throughput. Solutions: window scaling, QUIC, performance-enhancing proxies (PEPs)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "187-network-automation",
      children: "18.7 Network Automation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Traditional networking is like manually threading a needle 1000 times → each device configured by SSH to a CLI. Automation makes it like using a sewing machine → you define the pattern once (playbook/configuration) and the machine applies it consistently everywhere. No typos, no forgotten steps, no \"oops I configured the wrong VLAN.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1871-ansible-for-network-automation",
      children: "18.7.1 Ansible for Network Automation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Ansible"
      }), " is an agentless automation tool that uses SSH (or API) to push configuration to network devices (Cisco IOS, Juniper JunOS, Arista EOS, Nokia SR OS). Playbooks are YAML files that define the desired state."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps → Ansible Network Automation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Control node (Ansible) reads the inventory file (list of devices)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ansible connects to each device via SSH (or NETCONF, eAPI)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ansible gathers facts (show commands → structured data)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ansible executes the playbook tasks in order."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each task: Ansible translates the YAML into device-specific CLI/API commands."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ansible applies configuration changes, checks for idempotence (only change if needed)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ansible reports results (changed, ok, failed, unreachable)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ansible Playbook Example → Configure VLAN on Cisco Switch:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# playbook-vlan.yml\n---\n- name: Configure VLAN on Cisco switches\n  hosts: cisco_switches\n  gather_facts: yes\n  vars:\n    vlan_id: 100\n    vlan_name: \"Engineering\"\n    admin_state: \"up\"\n\n  tasks:\n    - name: Ensure VLAN exists\n      cisco.ios.ios_vlans:\n        config:\n          - vlan_id: \"{{ vlan_id }}\"\n            name: \"{{ vlan_name }}\"\n            state: active\n        state: merged\n\n    - name: Assign VLAN to interface\n      cisco.ios.ios_interfaces:\n        config:\n          - name: \"GigabitEthernet0/1\"\n            description: \"Engineering access port\"\n            enabled: \"{{ admin_state }}\"\n            mode: access\n            access_vlan: \"{{ vlan_id }}\"\n        state: merged\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → Network Automation Script (Netmiko):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from netmiko import ConnectHandler\nfrom netmiko.ssh_exception import NetMikoTimeoutException\nimport json\n\nDEVICES = [\n    {\n        \"device_type\": \"cisco_ios\",\n        \"host\": \"192.168.1.1\",\n        \"username\": \"admin\",\n        \"password\": \"secure_password\",\n        \"port\": 22,\n    },\n    {\n        \"device_type\": \"cisco_ios\",\n        \"host\": \"192.168.1.2\",\n        \"username\": \"admin\",\n        \"password\": \"secure_password\",\n    },\n]\n\nVLAN_CONFIG = [\n    \"vlan 100\",\n    \" name Engineering\",\n    \"exit\",\n    \"interface GigabitEthernet0/1\",\n    \" description Engineering access port\",\n    \" switchport mode access\",\n    \" switchport access vlan 100\",\n    \" no shutdown\",\n]\n\ndef configure_vlan(device):\n    try:\n        conn = ConnectHandler(**device)\n        conn.enable()\n        output = conn.send_config_set(VLAN_CONFIG)\n        conn.save()\n        conn.disconnect()\n        return {\"host\": device[\"host\"], \"status\": \"success\", \"output\": output}\n    except NetMikoTimeoutException:\n        return {\"host\": device[\"host\"], \"status\": \"timeout\"}\n    except Exception as e:\n        return {\"host\": device[\"host\"], \"status\": \"error\", \"message\": str(e)}\n\nresults = [configure_vlan(d) for d in DEVICES]\nprint(json.dumps(results, indent=2))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1872-netconfyang",
      children: "18.7.2 NETCONF/YANG"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " NETCONF/YANG is like a standardized medical chart format for hospitals (YANG = data model schema) plus a secure fax line for sending updates (NETCONF = protocol). Before NETCONF, every device had its own format → like each hospital using a different patient record format. YANG defines what data exists and its structure; NETCONF provides the CRUD operations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NETCONF (RFC 6241):"
      }), " Protocol for installing, manipulating, and deleting network device configuration. Uses XML encoding over SSH (port 830). Operations: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<get>"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<get-config>"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<edit-config>"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<copy-config>"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<commit>"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<lock>"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<unlock>"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<close-session>"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "YANG (RFC 7950):"
      }), " Data modeling language for network configuration and state. Defines hierarchical data structures (containers, lists, leafs) with constraints, types, and relationships."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps → NETCONF/YANG Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client opens SSH connection to device (port 830)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Client and device exchange ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<hello>"
        }), " messages with supported capabilities (YANG models)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Client locks the candidate configuration: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<lock><target><candidate/></target></lock>"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Client sends ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<edit-config>"
        }), " with XML payload conforming to the device's YANG model."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Device validates XML against YANG schema (type checking, range validation, mandatory fields)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Device applies change to candidate configuration: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<ok>"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<rpc-error>"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Client sends ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<commit>"
        }), " to make candidate the running configuration."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client unlocks and closes session."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → NETCONF Client (ncclient):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from ncclient import manager\nimport xmltodict\nimport json\n\ndevice = {\n    \"host\": \"192.168.1.1\",\n    \"port\": 830,\n    \"username\": \"admin\",\n    \"password\": \"secure_password\",\n    \"device_params\": {\"name\": \"csr1000v\"},\n}\n\n# YANG-modeled XML for VLAN configuration\nvlan_config = \"\"\"\n<config xmlns=\"urn:ietf:params:xml:ns:netconf:base:1.0\">\n  <native xmlns=\"http://cisco.com/ns/yang/Cisco-IOS-XE-native\">\n    <vlan>\n      <vlan-list>\n        <id>100</id>\n        <name>Engineering</name>\n      </vlan-list>\n    </vlan>\n    <interface>\n      <GigabitEthernet>\n        <name>0/1</name>\n        <switchport>\n          <access>\n            <vlan>\n              <vlan-id>100</vlan-id>\n            </vlan>\n          </access>\n          <mode>access</mode>\n        </switchport>\n      </GigabitEthernet>\n    </interface>\n  </native>\n</config>\n\"\"\"\n\nwith manager.connect(**device) as m:\n    # Get running config\n    running = m.get_config(source=\"running\")\n    print(\"Running config retrieved\")\n\n    # Send edit-config with candidate\n    response = m.edit_config(target=\"candidate\", config=vlan_config)\n    print(f\"Edit response: {response.xml}\")\n\n    # Validate candidate\n    m.validate(source=\"candidate\")\n\n    # Commit to running\n    m.commit()\n\n    # Verify\n    interface_state = m.get(\n        filter=(\"xpath\", \"/native/interface/GigabitEthernet[name='0/1']\")\n    )\n    print(xmltodict.parse(interface_state.xml))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1873-ansible-vs-netconf-vs-restconf-comparison-table",
      children: "18.7.3 Ansible vs NETCONF vs RESTCONF Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ansible"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NETCONF"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RESTCONF"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSH (paramiko)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSH (port 830)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/HTTPS (port 80/443)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YAML playbooks → CLI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML or JSON"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push (desired state)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transactional (candidate/commit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct (PATCH)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Idempotence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Module-dependent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in (candidate compare)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PATCH is idempotent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ad-hoc (check mode)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YANG schema validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YANG schema validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rollback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Confirmed commit (", (0,jsx_runtime.jsx)(_components.commit, {
              confirmed: "",
              children: ")"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Versioned API"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-playbook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction (multiple changes atomically)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-resource"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Agent required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (agentless)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (uses existing YANG models on device)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (HTTP server on device)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium-High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ad-hoc, multi-vendor, partial changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Atomic, validated, multi-device transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REST API comfortable teams, cloud-native"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1874-complexity-analysis",
      children: "18.7.4 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time to Configure N Devices"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Manual SSH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N × M) commands"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each device, each command typed individually; M = commands per device"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ansible push"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) parallel SSH sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) playbook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel execution; playbook size constant regardless of N"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETCONF transactional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) sessions + O(1) commit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(playbook + device schema)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validation + commit phases; schema cached"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RESTCONF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) HTTP requests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per resource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard HTTP semantics; each resource = one request"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it matters:"
      }), " Manual configuration does not scale. At 100 devices, Ansible completes in seconds (parallel). Manual SSH with 10 commands × 100 devices × 30 seconds = 300 minutes of typing, with a 5-15% error rate. Automation eliminates the error rate and reduces time by 99%+."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1875-edge-cases",
      children: "18.7.5 Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Config drift:"
        }), " Operators make ad-hoc changes outside automation (ssh directly). Mitigation: configuration reconciliation (Ansible cron job every 15 min), immutable infrastructure (replace, don't change)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Failed commit on partial deployment:"
        }), " NETCONF candidate changes partially applied; device inconsistency. Mitigation: confirmed commit with automatic rollback on timeout."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Schema mismatch:"
        }), " Device firmware upgraded but YANG model not updated. Mitigation: capability negotiation in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<hello>"
        }), "; versioned models."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Concurrent editing:"
        }), " Two operators edit the same device simultaneously. Mitigation: NETCONF ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<lock>"
        }), " operation, CI/CD pipeline serializes changes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unsupported module:"
        }), " Ansible module does not exist for a device feature. Mitigation: use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cli_config"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "raw"
        }), " module as escape hatch."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "188-zero-trust-networking--ztnasase",
      children: "18.8 Zero Trust Networking → ZTNA/SASE"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Traditional perimeter security is like a medieval castle → thick walls (firewall), a single gate (VPN), and everyone inside the walls is trusted. Zero Trust is a modern building with badge access on every door → even if you're already inside, you need credentials to enter each room. ZTNA/SASE is like a hotel key card that only opens your floor → by default, no one can go anywhere they're not explicitly authorized."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1881-core-principles-nist-sp-800-207",
      children: "18.8.1 Core Principles (NIST SP 800-207)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Never trust, always verify:"
        }), " Every access request is authenticated and authorized regardless of source."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Least privilege:"
        }), " Users and devices get minimum access required for their role."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assume breach:"
        }), " Design the network as if attackers are already inside."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Microsegmentation:"
        }), " Each resource is isolated from others (north-south, east-west)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Continuous verification:"
        }), " Re-verify every request → not just at login."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identity is the new perimeter:"
        }), " User identity + device posture + context = trust score."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Zero Trust vs Traditional Perimeter → Comparison Table"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Traditional (Castle-and-Moat)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Zero Trust"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trust model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trusted inside, untrusted outside"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never trust, always verify"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network IP (source ACL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identity + device + context"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Attack surface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large (internal lateral movement)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal (microsegmentation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VPN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required for remote access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replaced by ZTNA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lateral movement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy once inside"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocked (microsegmentation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Visibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited (perimeter logs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full (all traffic logged)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Policy location"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Central (firewall)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-session, per-resource"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Annual audit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User impact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (VPN tunnel)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transparent (per-resource proxy)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (requires agent or proxy)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1882-ztna-zero-trust-network-access",
      children: "18.8.2 ZTNA (Zero Trust Network Access)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Think of ZTNA like airport security on every individual flight. You need to show ID (authenticate), verify your ticket (authorize), and pass a scan (device posture) before you can board → no one gets a \"cleared for all gates\" badge. And if you change flights, you go through security again."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture:"
      }), " Cloud-delivered proxy/gateway mediates every connection. User never gets a network path; they get a specific application-level connection."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps → ZTNA Connection:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User attempts to access internal app (e.g., ERP dashboard at app.company.internal)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DNS resolves to ZTNA proxy (not the internal server)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ZTNA proxy authenticates user (SSO, SAML, OIDC)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proxy checks device posture (OS version, antivirus, patch level, disk encryption)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proxy evaluates policy: user.group = \"finance\" AND device.compliant = true AND location != \"blocked_country\"."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If allowed: proxy establishes a secure connection to the internal app (outbound-only initiator)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User's session is proxied through ZTNA → no direct network access to the app server."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each request re-verifies authorization. Idle timeout (15 min) triggers re-auth."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1883-sase-secure-access-service-edge",
      children: "18.8.3 SASE (Secure Access Service Edge)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " SASE is like a Swiss Army knife for network security. Instead of having separate tools for firewall, VPN, web filtering, malware protection, and WAN optimization, SASE combines them all into one cloud-delivered service. Your branch office connects once, and all security/inspection happens inline."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Components:"
      }), " ZTNA, SWG (Secure Web Gateway), CASB (Cloud Access Security Broker), FWaaS (Firewall as a Service), SD-WAN (Software-Defined WAN)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1884-edge-cases",
      children: "18.8.4 Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Device posture failure:"
        }), " Outdated antivirus blocks access. Mitigation: remediation portal with self-service update instructions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Offline access:"
        }), " No internet → ZTNA unreachable. Mitigation: local caching of tokens, offline policies for pre-approved resources."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Privilege escalation:"
        }), " User granted temporary admin access. Mitigation: Just-in-Time (JIT) access with automatic revocation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shadow IT:"
        }), " Users access unauthorized cloud apps (no ZTNA policy). Mitigation: CASB integration to discover and block shadow IT."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BYOD complexity:"
        }), " Personal devices managed differently than corporate. Mitigation: device trust scoring, separate profiles for managed vs unmanaged."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "189-aiml-in-networking",
      children: "18.9 AI/ML in Networking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Traditional network management is like a traffic controller watching 1000 cameras and manually adjusting traffic light timers. AI/ML in networking is like a smart traffic system that learns patterns (rush hour, accidents, weather), predicts congestion before it happens, and adjusts lights automatically. The controller shifts from \"watching and reacting\" to \"supervising the AI.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1891-application-areas",
      children: "18.9.1 Application Areas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Anomaly detection:"
      }), " ML models learn normal traffic baselines and flag deviations (DDoS, C2 beaconing, data exfiltration). Technologies: unsupervised learning (autoencoders, clustering), time-series models (LSTM, Transformers for log sequences)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Traffic classification:"
      }), " Deep packet inspection (DPI) replaced by ML-based flow classification. Features: packet sizes, inter-arrival times, flow durations. Models: Random Forest, XGBoost, 1D-CNNs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Predictive routing:"
      }), " ML models predict link utilization, congestion, and failures to pre-emptively reroute traffic. Example: Google's B4 WAN uses ML for bandwidth prediction and traffic engineering."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Network capacity planning:"
      }), " Forecast traffic growth using ARIMA, Prophet, or LSTM. Input: historical utilization + business growth metrics + seasonal patterns."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intent-Based Networking (IBN):"
      }), " NLP translates operator intent into network policies. Example: \"ensure video streams have <50 ms latency\" → configuration. Formal verification (Batfish, Minesweeper) validates correctness."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1892-aiml-in-networking--implementation",
      children: "18.9.2 AI/ML in Networking → Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → Traffic Anomaly Detection with LSTM:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nimport pandas as pd\nfrom tensorflow.keras.models import Sequential\nfrom tensorflow.keras.layers import LSTM, Dense, Dropout\nfrom sklearn.preprocessing import MinMaxScaler\nfrom sklearn.model_selection import train_test_split\n\n# Generate synthetic network traffic data (packets per second)\nnp.random.seed(42)\nn_samples = 10000\nnormal_traffic = np.random.poisson(lam=100, size=n_samples)\n# Inject anomalies (DDoS spike)\nanomaly_indices = np.random.choice(n_samples, size=200, replace=False)\nnormal_traffic[anomaly_indices] = np.random.poisson(lam=1000, size=200)\n\ndf = pd.DataFrame({\"pkt_per_sec\": normal_traffic})\n\n# Create sequences for LSTM (window = 10 time steps)\ndef create_sequences(data, seq_length=10):\n    X, y = [], []\n    for i in range(len(data) - seq_length):\n        X.append(data[i:i + seq_length])\n        y.append(data[i + seq_length])\n    return np.array(X), np.array(y)\n\nscaler = MinMaxScaler()\nscaled_data = scaler.fit_transform(df.values)\nX, y = create_sequences(scaled_data.flatten())\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)\n\n# Build LSTM autoencoder for anomaly detection\nmodel = Sequential([\n    LSTM(64, activation='relu', return_sequences=True, input_shape=(10, 1)),\n    Dropout(0.2),\n    LSTM(32, activation='relu', return_sequences=False),\n    Dropout(0.2),\n    Dense(64, activation='relu'),\n    Dense(1)\n])\nmodel.compile(optimizer='adam', loss='mse')\nmodel.fit(X_train, y_train, epochs=10, batch_size=32, validation_split=0.1, verbose=1)\n\n# Detect anomalies (high reconstruction error = anomaly)\npredictions = model.predict(X_test)\nmse = np.mean((y_test - predictions.flatten()) ** 2, axis=1)\nthreshold = np.percentile(mse, 95)  # Top 5% are anomalous\nanomalies = np.where(mse > threshold)[0]\n\nprint(f\"Total test samples: {len(X_test)}\")\nprint(f\"Anomalies detected: {len(anomalies)} ({100*len(anomalies)/len(X_test):.1f}%)\")\nprint(f\"Threshold (95th percentile MSE): {threshold:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1893-complexity-analysis",
      children: "18.9.3 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Training Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inference Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LSTM for anomaly detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(T × L × H²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L × H) per sample"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(H²) weights"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L = seq length, H = hidden units, T = training steps; quadratic in hidden units"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Random Forest classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N × K × log N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(K × log N) per sample"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(K × N) trees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N = samples, K = trees; each tree is O(log N) traversal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prophet forecasting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N × seasonality)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per forecast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) trend params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decomposes time series into trend + seasonality; N = historical points"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Graph neural network routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V × E × L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V × E) per inference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V × d) embeddings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V = routers, E = links, L = GNN layers; each layer aggregates neighbors"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it matters:"
      }), " AI inference must be faster than the phenomena it detects. For DDoS detection, model inference must complete within 10-100 ms (before the attack overwhelms the link). LSTM with 64 hidden units over 10 time steps → ~0.3 ms inference on GPU → suitable for real-time detection. Random Forest with 100 trees on a 10-feature flow → ~0.1 ms → even faster for classification."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1894-ad-table-aiml-in-networking",
      children: "18.9.4 A&D Table: AI/ML in Networking"
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
            children: "Detects zero-day attacks (no signature needed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "False positives cause alert fatigue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Predicts congestion before it happens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model training requires high-quality labeled data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces NOC manual triage by 80-90%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Black-box models are hard to debug"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Self-optimizing routing (Google B4: 95% utilization)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concept drift: traffic patterns change over time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automates capacity planning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute cost can be high (GPU inference at line rate)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1810-quantum-networking",
      children: "18.10 Quantum Networking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Classical networking is like mailing a letter → you can copy it, read it, forward it. Quantum networking is like mailing a bubble that pops if anyone tries to open it. The information cannot be copied (no-cloning theorem) or read without destroying it. Two parties can detect if a third party is eavesdropping. The cost: no amplification, no error correction that preserves quantum state, and the signal degrades over distance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18101-quantum-key-distribution-qkd",
      children: "18.10.1 Quantum Key Distribution (QKD)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The only mature quantum networking technology. QKD allows two parties to share a secret key with information-theoretic security. If an eavesdropper (Eve) measures the quantum states, the states are disturbed, and Alice and Bob detect the interference."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "BB84 Protocol (Bennett-Brassard 1984):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps → BB84 QKD:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alice generates random bits (0, 1) and random bases (rectilinear + or diagonal ×)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Alice encodes each bit in a photon polarization:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Basis +: |0⟩ = 0° (horizontal), |1⟩ = 90° (vertical)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Basis ×: |0⟩ = 45°, |1⟩ = 135°"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alice sends photons to Bob over quantum channel (fiber or free-space)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bob randomly chooses basis for each photon and measures."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alice and Bob publicly compare which bases they used (not the bit values)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "They keep only bits where bases match (~50% of bits = raw key)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "They reveal a random subset to estimate quantum bit error rate (QBER)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If QBER < threshold (typically 11%): no eavesdropper; they proceed to error correction and privacy amplification."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If QBER > threshold: eavesdropper detected; key discarded."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode → BB84 QKD Simulation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ALICE:\n  bits ← RANDOM_BITS(n)\n  bases ← RANDOM_BASES(n)  # + or ×\n  qubits ← ENCODE(bits, bases)\n  SEND(qubits, quantum_channel)\n\nBOB:\n  measured_bases ← RANDOM_BASES(n)\n  measured_bits ← MEASURE(qubits, measured_bases)\n  SEND(measured_bases, public_channel)  # which bases used\n\nALICE:\n  matching ← (bases == measured_bases)\n  raw_key ← bits[matching]\n  # Reveal test subset\n  test_indices ← RANDOM_CHOOSE(matching_indices, m)\n  SEND(test_indices + raw_key[test_indices], public_channel)\n\nBOB:\n  their_test_bits ← measured_bits[test_indices]\n  qber ← COUNT_DIFF(raw_key[test_indexes], their_test_bits) / m\n  IF qber > 0.11:\n    ABORT(\"Eavesdropper detected!\")\n  ELSE:\n    final_key ← ERROR_CORRECT(raw_key)  # Cascade, BCH code\n    final_key ← PRIVACY_AMPLIFY(final_key)  # Universal hashing\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18102-quantum-repeaters",
      children: "18.10.2 Quantum Repeaters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quantum signals cannot be amplified like classical signals (no quantum amplifier exists). Quantum repeaters use entanglement swapping to extend distance."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Limitations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distance:"
        }), " Fiber-based QKD: ~100 km (direct), ~500 km (with trusted relays). Satellite QKD: 1,200 km (Micius satellite, China-Austria)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key rate:"
        }), " ~1-10 Kbps over 100 km. Compare to classical AES-256 key exchange at 10 Gbps."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error rate:"
        }), " QBER 1-10% depending on distance and environment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quantum memory:"
        }), " Required for repeaters but current coherence time is <1 second."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18103-quantum-networking-feasibility",
      children: "18.10.3 Quantum Networking Feasibility"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current (2025)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Near-term (2030)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Long-term (2040+)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QKD deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metro networks (Vienna, Beijing, Boston)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-country fiber + satellite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global QKD backbone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-10 Mbps (over 50 km)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 Mbps (over 100 km)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 Gbps (over 1000 km)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Repeaters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trusted relay (not quantum)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First quantum repeaters (50 km spacing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full quantum repeater network"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quantum memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<1 second"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-10 seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minutes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error correction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classical (Cascade)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantum LDPC codes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fault-tolerant logical qubits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Practical use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key distribution only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantum-secured blockchain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed quantum computing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18104-edge-cases",
      children: "18.10.4 Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Photon loss in fiber:"
        }), " Attenuation below 0.2 dB/km; at 100 km, 20 dB loss = 99% photons lost. Mitigation: high-efficiency detectors (SNSPD), decoy-state protocol."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Noise and dark counts:"
        }), " Detector clicks without photon present. Mitigation: coincidence detection, dark count subtraction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trojan horse attacks:"
        }), " Eve sends light into Alice's transmitter to learn basis choice. Mitigation: optical isolators, monitoring photocurrent."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Photon-number splitting (PNS):"
        }), " Eve splits one photon from multi-photon pulse, measures without being detected. Mitigation: decoy-state protocol (randomly vary pulse intensity)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1811-edge-computing",
      children: "18.11 Edge Computing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Edge computing is like having a local convenience store instead of always driving 30 minutes to the supermarket. Most everyday needs (bread, milk → like real-time data processing) are handled locally at the edge store. Only bulk purchases (large analytics jobs, model training) require the trip to the central warehouse (cloud). The edge store is 5 minutes away (2 ms latency); the cloud supermarket is 30 minutes away (50 ms latency)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18111-edge-tiers",
      children: "18.11.1 Edge Tiers"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Location"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Compute"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Device edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Endpoint (sensor, phone, car)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<1 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very low (MCU, NPU)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smartphone ML inference, sensor filtering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Local edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gateway, micro-DC, 5G base station"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-5 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (x86, ARM server)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS Wavelength, Azure Edge Zones"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Regional edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small data center"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-20 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (GPU cluster)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CDN nodes, gaming (AWS Local Zones)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Central cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hyperscale DC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20-100 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Massive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS, Azure, GCP regions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18112-use-cases",
      children: "18.11.2 Use Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Industrial automation:"
      }), " Sub-millisecond control loops for robotic arms. Edge processes sensor data locally (no cloud round-trip), sends only aggregated metrics to the cloud."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Autonomous vehicles:"
      }), " Real-time object detection (YOLO, LiDAR processing) at the device edge. Latency budget: 100 ms total → 30 ms sensing + 30 ms computation + 40 ms actuation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Augmented reality:"
      }), " Sub-20 ms pose tracking required. Edge processes video frames (SLAM), streams only results to glasses."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Video analytics:"
      }), " Edge nodes process video locally; only metadata (object counts, alerts) sent to cloud. Bandwidth savings: 100x (10 Mbps video → 100 Kbps metadata)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18113-edge-computing-architecture--numbered-steps",
      children: "18.11.3 Edge Computing Architecture → Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sensor generates data (e.g., camera captures 1080p frame)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Edge device captures data and runs pre-processing (frame resize, normalization)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If latency-critical: edge runs ML inference locally (TensorFlow Lite, ONNX Runtime)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If result is actionable: edge triggers actuator (e.g., belt stop signal in factory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aggregated data + model feedback sent to regional edge for batch processing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regional edge aggregates across multiple local edges (training data for model updates)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New model weights deployed back to edge devices (OTA update)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Persistent storage and analytics reports pushed to central cloud."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18114-complexity-analysis",
      children: "18.11.4 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge inference (CNN)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k² × d × F) per frame"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(F) parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k = kernel size, d = depth, F = feature maps; convolution dominates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud offload decision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple heuristic: latency budget vs compute capacity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model update (OTA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(F) download"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(F) storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Downloading new model weights (10-500 MB per model)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data aggregation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) merge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N = edge devices; merging time-series data is O(N)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it matters:"
      }), " Edge computing changes the calculus of where to run computation. Running inference on-device costs battery but saves bandwidth and latency. A single 1080p video stream = 10 Mbps. Streaming 100 cameras to cloud = 1 Gbps bandwidth cost (~$500/month). Edge processing reduces this to <100 Kbps per camera (metadata only)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18115-ad-table-edge-computing",
      children: "18.11.5 A&D Table: Edge Computing"
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
            children: "Sub-10 ms latency for real-time apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited compute power at device edge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100x bandwidth reduction (vs cloud)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed management complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data privacy (no raw data to cloud)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security → more physical attack surface"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Offline operation (no internet required)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fleet management (OS updates, model updates)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost-effective for large-scale IoT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited thermal/power budgets"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "typescript-implementation-edgenodeprocessor",
      children: "TypeScript Implementation: EdgeNodeProcessor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface EdgeConfig {\n  nodeId: string;\n  filterThresholds: { minTemp: number; maxTemp: number; maxHumidity: number };\n  aggregationWindowMs: number;\n  cloudSyncIntervalMs: number;\n}\n\ninterface ProcessedReading {\n  deviceId: string;\n  averageTemp: number;\n  averageHumidity: number;\n  readingCount: number;\n  windowStart: number;\n  anomalies: string[];\n}\n\nclass EdgeNodeProcessor {\n  private buffer: Map<string, number[]> = new Map();\n  private cloudQueue: ProcessedReading[] = [];\n\n  constructor(private config: EdgeConfig) {}\n\n  processReading(deviceId: string, temperature: number, humidity: number): void {\n    // Filter: discard noisy readings\n    if (temperature < this.config.filterThresholds.minTemp ||\n        temperature > this.config.filterThresholds.maxTemp) return;\n\n    // Aggregate: classify into temperature buckets\n    const key = `${deviceId}`;\n    if (!this.buffer.has(key)) this.buffer.set(key, []);\n    this.buffer.get(key)!.push(temperature);\n\n    // Check for anomaly\n    const recent = this.buffer.get(key)!;\n    if (recent.length >= 5) {\n      const avg = recent.slice(-5).reduce((a, b) => a + b, 0) / 5;\n      const stdDev = Math.sqrt(recent.slice(-5).reduce((a, b) => a + (b - avg) ** 2, 0) / 5);\n      if (Math.abs(temperature - avg) > 2 * stdDev) {\n        const anomaly = `Anomaly: ${deviceId} temp ${temperature}°C (σ=${stdDev.toFixed(1)})`;\n        this.cloudQueue.push({ deviceId, averageTemp: avg, averageHumidity: humidity, readingCount: 1, windowStart: Date.now(), anomalies: [anomaly] });\n      }\n    }\n  }\n\n  aggregateAndSync(): ProcessedReading[] {\n    const batch = [...this.cloudQueue];\n    this.cloudQueue = [];\n    return batch;\n  }\n\n  getLocalInference(reading: SensorReading): string {\n    // Simple rule-based inference at the edge\n    if (reading.temperature > 35) return 'OVERHEAT_ALERT';\n    if (reading.humidity > 75) return 'HUMIDITY_WARNING';\n    if (reading.batteryLevel < 20) return 'BATTERY_LOW';\n    return 'NORMAL';\n  }\n}\n\n// Usage\nconst edge = new EdgeNodeProcessor({\n  nodeId: 'edge-01', filterThresholds: { minTemp: -10, maxTemp: 60, maxHumidity: 100 },\n  aggregationWindowMs: 60000, cloudSyncIntervalMs: 300000,\n});\n// edge.processReading('sensor-001', 22.5, 55);\n// edge.processReading('sensor-001', 45.2, 60); // anomaly!\n// console.log(edge.aggregateAndSync());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1812-network-observability--ebpf-opentelemetry",
      children: "18.12 Network Observability → eBPF, OpenTelemetry"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Traditional network monitoring is like a security camera that only records when someone walks past. eBPF is like having a microscopic camera on every door, window, and pipe in the building → you see every packet, every syscall, every function call, with zero blind spots and no noticeable slowdown. OpenTelemetry is like having standardized shipping labels on every box in every system → you can trace a packet from California to Tokyo through 30 microservices with the same tracking format."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18121-ebpf-extended-berkeley-packet-filter",
      children: "18.12.1 eBPF (Extended Berkeley Packet Filter)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "eBPF is a revolutionary kernel technology that allows sandboxed programs to run in the Linux kernel without changing kernel source code or loading kernel modules. For networking, eBPF enables:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Packet filtering:"
        }), " XDP (eXpress Data Path) processes packets at the driver level, before the kernel network stack. 10x faster than iptables/nftables."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Traffic control:"
        }), " eBPF tc hooks inside the kernel's traffic control layer for shaping, mirroring, and redirecting packets."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Socket filtering:"
        }), " eBPF filters on socket operations (connect, bind, send, recv) for process-level visibility."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kernel function tracing:"
        }), " kprobes/tracepoints for monitoring any kernel function (e.g., tcp_v4_connect, ip_rcv)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cilium:"
        }), " Cloud-native CNI plugin that uses eBPF for networking, load balancing, and security. Replaces kube-proxy entirely."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps → eBPF Packet Processing (XDP):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Network driver receives packet from NIC."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Before skb allocation, XDP hook runs the eBPF program."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "eBPF program inspects packet headers (L2-L7)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "eBPF program returns one of: XDP_PASS (normal kernel stack), XDP_DROP (discard packet), XDP_TX (redirect out same interface), XDP_REDIRECT (redirect to other interface/CPU)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "XDP_PASS → packet proceeds to kernel's network stack (skb alloc, iptables, routing)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "XDP_DROP → packet never reaches stack. DDoS mitigation at line rate (~20M pps per core)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → eBPF with BCC (Packet Drop Monitor):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from bcc import BPF\nimport ctypes as ct\n\n# eBPF program written in C (compiled by BCC at runtime)\nbpf_program = \"\"\"\n#include <uapi/linux/ptrace.h>\n#include <uapi/linux/ip.h>\n#include <uapi/linux/tcp.h>\n#include <net/sock.h>\n\nstruct drop_event {\n    u32 pid;\n    u64 ip;\n    u32 port;\n    char comm[16];\n};\n\nBPF_PERF_OUTPUT(events);\n\nint trace_tcp_drop(struct pt_regs *ctx, struct sock *sk) {\n    struct drop_event ev = {};\n    ev.pid = bpf_get_current_pid_tgid() >> 32;\n    ev.ip = sk->__sk_common.skc_daddr;\n    ev.port = sk->__sk_common.skc_dport;\n    bpf_get_current_comm(&ev.comm, sizeof(ev.comm));\n    events.perf_submit(ctx, &ev, sizeof(ev));\n    return 0;\n}\n\"\"\"\n\nb = BPF(text=bpf_program)\nb.attach_kprobe(event=\"tcp_drop\", fn_name=\"trace_tcp_drop\")\n\nprint(\"Monitoring TCP drops... Press Ctrl+C to stop\")\n\ndef print_event(cpu, data, size):\n    event = b[\"events\"].event(data)\n    import socket\n    ip_str = socket.inet_ntoa(ct.c_uint32(event.ip).value.to_bytes(4, 'big'))\n    print(f\"  PID={event.pid} ({event.comm.decode()}) -> {ip_str}:{socket.ntohs(event.port)}\")\n\nb[\"events\"].open_perf_buffer(print_event)\ntry:\n    while True:\n        b.perf_buffer_poll(timeout=100)\nexcept KeyboardInterrupt:\n    print(\"Exiting\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18122-opentelemetry",
      children: "18.12.2 OpenTelemetry"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OpenTelemetry is a CNCF-graduated observability framework that provides vendor-agnostic APIs and SDKs for collecting traces, metrics, and logs. For networking observability:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distributed tracing:"
        }), " Trace a single request across microservices, network hops, load balancers, and databases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network metrics:"
        }), " gRPC latency, HTTP request/response sizes, connection pool utilization."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Context propagation:"
        }), " W3C TraceContext and Baggage headers propagate trace IDs across network hops."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → OpenTelemetry Tracing for HTTP Service:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from opentelemetry import trace\nfrom opentelemetry.exporter.otlp.proto.grpc.trace_exporter import OTLPSpanExporter\nfrom opentelemetry.sdk.trace import TracerProvider\nfrom opentelemetry.sdk.trace.export import BatchSpanProcessor\nfrom opentelemetry.instrumentation.requests import RequestsInstrumentor\nfrom opentelemetry.propagate import extract, inject\nimport requests\n\n# Set up tracer provider\nprovider = TracerProvider()\nprovider.add_span_processor(\n    BatchSpanProcessor(OTLPSpanExporter(endpoint=\"http://otel-collector:4317\"))\n)\ntrace.set_tracer_provider(provider)\ntracer = trace.get_tracer(__name__)\n\n# Auto-instrument requests library\nRequestsInstrumentor().instrument()\n\n# Create a trace manually\nwith tracer.start_as_current_span(\"backend-service\") as span:\n    span.set_attribute(\"http.method\", \"GET\")\n    span.set_attribute(\"http.url\", \"/api/users\")\n    span.add_event(\"Querying database\")\n\n    # Make downstream call (auto-instrumented)\n    response = requests.get(\"http://user-service:8080/users\")\n    span.set_attribute(\"response.status\", response.status_code)\n\n    # Add custom network observability attributes\n    span.set_attribute(\"net.host.connection_time_ms\", response.elapsed.total_seconds() * 1000)\n    span.set_attribute(\"net.peer.name\", \"user-service\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18123-complexity-analysis",
      children: "18.12.3 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Overhead per Packet"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Volume"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "eBPF XDP drop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50 ns (hardware bypass)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 bytes stored"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs at driver level; no memory allocation for dropped packets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "eBPF kprobe trace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100-500 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-event (32-128 bytes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function hook overhead; writes to perf ring buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpenTelemetry tracing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1-10 μs per span"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100-500 bytes per span"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context propagation (W3C headers), span creation, exporter batching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full packet capture (pcap)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100 μs per packet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full packet (~1500 bytes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packet copy from kernel to userspace; disk write"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sFlow/NetFlow sampling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1 μs per packet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1:1000-1:10000 sampled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sampling eliminates per-packet processing for most traffic"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it matters:"
      }), " eBPF enables observability with <1% CPU overhead for most operations, making it feasible to monitor 100% of traffic in production. Full packet capture at 10 Gbps requires ~20% CPU per core; eBPF XDP drop at 10 Gbps requires <1% CPU per core. OpenTelemetry adds ~5 μs per span, acceptable for most services but problematic for latency-critical (<1 ms) paths."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1813-comparison-tables",
      children: "18.13 Comparison Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18131-ipv6-transition-mechanisms-comparison",
      children: "18.13.1 IPv6 Transition Mechanisms Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dual-Stack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "6to4 Tunnel"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Teredo"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NAT64/DNS64"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both IP versions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPv6-in-IPv4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPv6-in-UDP-in-IPv4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPv6↔IPv4 translator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NAT traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (native both)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (protocol 41 blocked)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (UDP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (stateful)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Client config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 stacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-configured"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto (NAT traversal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS64 on resolver"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Server/network config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both A+AAAA records"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6to4 relay anycast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Teredo relay/server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NAT64 gateway"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20B per packet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "28B per packet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (CPU for translation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (stateful)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deployability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires dual infra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public IPv4 only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works behind NAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPv6-only network"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security concerns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double attack surface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unencrypted tunnel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exposed relay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateful NAT maintains no endpoint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IETF status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard (RFC 4213)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Historic (RFC 7526)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Experimental"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard (RFC 6146/6147)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise campus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISP backbone (legacy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Last resort translation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile 4G/5G (IPv6-only)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18132-mqtt-vs-coap-vs-http-comparison",
      children: "18.13.2 MQTT vs CoAP vs HTTP Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MQTT (3.1.1/5.0)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CoAP (RFC 7252)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "HTTP/2 (RFC 7540/9113)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP/TLS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP/DTLS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP/TLS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Header size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-14 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bytes (binary)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100-800 bytes (text+HPACK)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Publish-subscribe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request-response + observe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request-response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time push"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native (broker push)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Observe option"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server-Sent Events (SSE)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QoS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 levels (0, 1, 2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 types (CON, NON)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (TCP guarantees)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connection management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent session"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connectionless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent (multiplexed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broker-side"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (max-age, ETag-like)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (full HTTP cache)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS (MQTTS) port 8883"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DTLS (coaps) port 5684"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS port 443"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Power profile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (TCP keepalive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ultra-low (UDP sleep)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (TCP + HPACK state)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Message ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Within QoS level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-order-preserving"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered per stream"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max payload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256 MB (4 GB MQTT5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2^32-1 bytes (block-wise)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited (chunked)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensor telemetry, messaging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smart home, constrained"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web apps, APIs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18133-4g-vs-5g-vs-6g-comparison",
      children: "18.13.3 4G vs 5G vs 6G Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(See section ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#1833-4g-vs-5g-vs-6g-comparison-table",
        children: "18.3.3"
      }), " for full comparison table.)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18134-satellite-vs-terrestrial-comparison",
      children: "18.13.4 Satellite vs Terrestrial Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(See section ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#1863-satellite-vs-terrestrial-comparison-table",
        children: "18.6.3"
      }), " for full comparison table.)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18135-ansible-vs-netconf-vs-restconf-comparison",
      children: "18.13.5 Ansible vs NETCONF vs RESTCONF Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(See section ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#1873-ansible-vs-netconf-vs-restconf-comparison-table",
        children: "18.7.3"
      }), " for full comparison table.)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18136-zero-trust-vs-perimeter-security-comparison",
      children: "18.13.6 Zero Trust vs Perimeter Security Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(See section ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#1881-core-principles-nist-sp-800-207",
        children: "18.8.1"
      }), " for full comparison table.)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1814-interview-corner",
      children: "18.14 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-are-the-main-barriers-to-ipv6-adoption",
      children: "Q1: What are the main barriers to IPv6 adoption?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " IPv6 adoption (currently ~45% of Google traffic) faces several barriers:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NAT works well enough:"
        }), " Many enterprises use NAT for security (obscuring internal IPs) and don't see immediate benefit from IPv6."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cost of dual-stack:"
        }), " Running both IPv4 and IPv6 doubles operational complexity → firewalls, ACLs, monitoring, DNS must all support both."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Content readiness:"
        }), " Many websites still IPv4-only behind CDNs (CDN terminates IPv6, origin remains IPv4)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Home router quality:"
        }), " Many ISP-provided routers have buggy IPv6 implementations (broken SLAAC, firewall rules not applied to IPv6)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Training gap:"
        }), " Network engineers trained on IPv4; IPv6 troubleshooting requires new mental models (no broadcast, SLAAC neighbor discovery)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Application dependencies:"
        }), " Hardcoded IPv4 addresses, socket APIs that fail with IPv6, DNSSEC signatures incompatible with NAT64."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mitigation strategies:"
      }), " Happy Eyeballs (RFC 8305), carrier-grade NAT (CGNAT) as interim, DNS64/NAT64 for IPv6-only mobile networks, government mandates (US OMB 2025 deadline)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-5g-vs-wi-fi-6--when-would-you-use-each",
      children: "Q2: 5G vs Wi-Fi 6 → when would you use each?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Choose 5G when: wide-area mobility (cars, trains), guaranteed QoS (network slicing for industrial control), carrier-managed security, >1 km range. Choose Wi-Fi 6 when: indoor high density (stadiums, offices → 2000+ devices per AP), low cost (free unlicensed spectrum), very high throughput per user (>1 Gbps), battery efficiency (802.11ax target wake time). Complementary: 5G for wide-area, Wi-Fi 6 for indoor; seamless handover via ATSSS (Access Traffic Steering, Switching, Splitting) in 3GPP Release 16."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-is-quantum-networking-feasible-for-the-internet-today",
      children: "Q3: Is quantum networking feasible for the internet today?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Not for general-purpose internet traffic. Quantum networking today is limited to QKD (key distribution) in metro-area fiber networks (~100 km). Limitations: no quantum repeaters (trusted relays compromise security), low key rate (1-10 Mbps vs classical 10 Gbps), sensitivity to noise and vibration, need for single-photon sources. Feasible timeline: metro QKD backbones by 2028, cross-country by 2033, general-purpose quantum internet (distributed quantum computing) by 2040+. Current deployments: China's 2,000 km Beijing-Shanghai QKD backbone, Europe's OPENQKD testbed, US' Chicago quantum network."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-how-does-ai-improve-network-management-systems-nms",
      children: "Q4: How does AI improve network management systems (NMS)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " AI improves NMS in five key areas:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Anomaly detection:"
        }), " ML detects DDoS, C2 beaconing, data exfiltration patterns that rule-based signatures miss. Example: autoencoder reconstruction error identifies novel attack traffic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root cause analysis:"
        }), " Graph neural networks correlate alerts across layers (physical → L2 → L3 → application) to identify root cause. Reduces MTTD from hours to minutes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Predictive maintenance:"
        }), " ML models predict hardware failures (optical power degradation, CRC error trends, fan speed deviations) 24-48 hours before failure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Traffic engineering:"
        }), " Reinforcement learning optimizes routing (Google B4 uses ML for bandwidth allocation; achieves 95% link utilization vs 30-40% traditional)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intent translation:"
        }), " NLP converts operator intent (\"ensure <50 ms for video traffic\") into device configurations via IBN systems."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Limitations:"
      }), " False positives, model drift (traffic patterns change over time), black-box decision transparency, training data requirements, inference latency for real-time control loops."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-explain-the-difference-between-sdn-nfv-and-network-automation",
      children: "Q5: Explain the difference between SDN, NFV, and Network Automation."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " SDN (Software-Defined Networking) separates control plane from data plane; a central controller programs switch forwarding tables. NFV (Network Function Virtualization) runs network functions (firewall, load balancer, router) as VMs/containers instead of proprietary hardware. Network Automation programs device configurations programmatically (Ansible, NETCONF). They complement each other: SDN provides centralized control, NFV provides flexible deployment, automation ensures consistency. Example: SDN controller (OpenDaylight) is automated via REST API; NFV orchestrator (OpenStack Tacker) deploys VNFs (virtual firewall, virtual router) and runs automated lifecycle management."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-is-the-role-of-quic-connection-migration-in-mobile-networks",
      children: "Q6: What is the role of QUIC connection migration in mobile networks?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " QUIC connection migration is critical for mobile users who switch between WiFi and cellular (e.g., walking out of an office). Without QUIC: TCP connection drops (IP changes); application must reconnect and re-authenticate. With QUIC: Connection ID stays constant; new packets from the new IP are recognized by the server; the connection survives seamlessly. This enables: seamless video streaming through WiFi→5G transitions, no re-authentication required (TLS session resumed), no application-layer reconnection logic needed. Impact: 20-40% fewer application timeouts on mobile networks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-edge-vs-cloud--how-do-you-decide-where-to-process-data",
      children: "Q7: Edge vs Cloud → how do you decide where to process data?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Decision criteria (in priority order):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Latency requirement:"
        }), " If round-trip must be <20 ms → edge (5G MEC). If >50 ms is acceptable → cloud."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bandwidth cost:"
        }), " If data rate >100 Mbps per device and aggregation point exists → edge pre-processing. If total data is <1 Gbps per site → cloud."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Privacy/compliance:"
        }), " If data must not leave premises (GDPR, HIPAA, PCI) → edge. If anonymizable → cloud."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compute requirement:"
        }), " If model requires GPU cluster (training) → cloud. If inference only → edge (TFLite, ONNX)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Power/cooling:"
        }), " If device is battery-powered → lightweight edge (feature extraction) → cloud (heavy processing)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1815-applications-in-real-systems",
      children: "18.15 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "starlink-spacex",
      children: "Starlink (SpaceX)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Starlink is the world's largest LEO satellite constellation (~5,500 satellites as of 2025). Real-world details:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Phased-array antenna"
        }), " (Dishy McFlatface): 1,280 beamforming elements, electronically steered. Tracks satellites moving at 7.5 km/s without moving parts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Laser inter-satellite links (ISLs):"
        }), " 200 Gbps optical links between satellites. Reduces dependence on ground stations. Latency from London to Singapore: ~40 ms (vs ~200 ms fiber path)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TCP optimization:"
        }), " Custom TCP stack with large initial window, selective ACK, pacing to avoid congestion on variable-latency paths."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mitigation of rain fade:"
        }), " Adaptive modulation (QPSK → 16QAM → 64QAM based on SNR). Each satellite has 20 Gbps throughput."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dish power:"
        }), " ~100W (idle), ~150W (active). Self-heating solves snow accumulation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-world speeds:"
        }), " 100-200 Mbps down, 10-40 Mbps up, 20-40 ms latency."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aws-wavelength-5g-edge-computing",
      children: "AWS Wavelength (5G Edge Computing)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AWS Wavelength embeds AWS compute (EC2, EBS) at 5G base station sites, providing sub-10 ms latency to mobile devices."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Architecture:"
        }), " Wavelength Zone = AWS region extension at a carrier's 5G edge site. UPF at the base station routes local traffic to the Wavelength Zone without leaving carrier network."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use case:"
        }), " Real-time video inference for autonomous vehicles. Blueprint: GStreamer on Wavelength EC2 processes video frames (YOLOv8 inference in <5 ms), sends only metadata to cloud."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Telecom integration:"
        }), " Carrier exposes APIs (TMF 640) for dynamic UPF traffic steering. Slice management via NSSF."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "google-b4-sdn-wan-traffic-engineering",
      children: "Google B4 SDN (WAN Traffic Engineering)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Google B4 is the private WAN connecting Google data centers worldwide. Key innovations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Centralized TE (Traffic Engineering) server:"
        }), " Collects flow-level utilization from all switches, runs optimization every 60 seconds using min-cost flow with edge weight = link utilization² (penalizes near-congested links)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bandwidth allocation:"
        }), " Achieves 95% link utilization (vs 30-40% traditional WAN). Saves $100M+ by avoiding new fiber."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML-based prediction:"
        }), " LSTM model predicts traffic matrix 5 minutes ahead. TE server pre-allocates bandwidth based on predictions, reducing on-demand rerouting."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "eBPF monitoring:"
        }), " Google uses eBPF-based monitoring (Maglev load balancer) for per-flow latency and loss at scale."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cisco-sd-access-intent-based-networking",
      children: "Cisco SD-Access (Intent-Based Networking)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cisco SD-Access implements IBN for enterprise campus networks:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fabric architecture:"
        }), " LISP (Locator/ID Separation Protocol) for endpoint discovery/tracking, VXLAN for overlay encapsulation, CTS (Cisco TrustSec) for group-based policy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DNA Center:"
        }), " Central controller translates intent into fabric configuration. GUI-based intent declaration: \"ensure all finance users access ERP only.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Formal verification:"
        }), " Batfish processes device configs, simulates forwarding tables, verifies no black holes, no loops, correct segmentation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automation pipeline:"
        }), " CI/CD for network (Jenkins + Ansible + Batfish). Config changes go through: template → YANG validation → Batfish verification → canary deployment → full rollout."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1816-pro-tips",
      children: "18.16 Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "QUIC 0-RTT is powerful but risky"
        }), ": 0-RTT data is vulnerable to replay attacks. Use single-use tokens, timestamp validation, or idempotent semantics for 0-RTT requests. Never allow 0-RTT for non-idempotent operations like payment submissions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MQTT QoS 2 is expensive"
        }), ": Exactly-once delivery uses a 4-way handshake per message. For sensor telemetry where occasional duplicates are acceptable, use QoS 0 (fire-and-forget) or QoS 1 (at-least-once with dedup)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LoRaWAN ADR is essential at scale"
        }), ": Without Adaptive Data Rate, all devices use the most robust (slowest) spreading factor, limiting network capacity. Enable ADR for stationary devices and optimize SF allocation for gateways."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intent-based networking ≠ IaC"
        }), ": IBN translates business intent into policies and verifies them. IaC (Terraform, Ansible) automates device configuration. They complement each other: IBN generates the design; IaC deploys it."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "eBPF for DDoS mitigation"
        }), ": XDP programs can drop DDoS traffic at line rate (~20M pps per core) before the kernel network stack processes packets. This is 10× faster than iptables and 100× faster than userspace packet filtering."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zero Trust is a mindset, not a product"
        }), ": No single \"Zero Trust appliance\" exists. ZTNA, SASE, microsegmentation, and identity-aware proxies are individual components. Success depends on policy design (least privilege, continuous verification), not tool selection."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5G network slicing requires orchestration"
        }), ": Slicing is not automatic → it requires a management layer (NSSF, NEF, service orchestration) that programs the network functions for each slice. The orchestration complexity is often underestimated."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OpenTelemetry sampling matters"
        }), ": At 100,000 requests/second, full distributed tracing generates 300+ GB/day. Use tail-based sampling (store slow/failed traces, sample fast traces at 1:100) to reduce cost while maintaining observability of anomalies."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1817-chapter-quiz",
      children: "18.17 Chapter Quiz"
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
            children: "Which IPv6 transition mechanism requires dual protocol stacks?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6to4 tunneling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dual-stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NAT64/DNS64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Teredo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the compressed header size of 6LoWPAN for IPv6+UDP?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "48 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How many bits of address space does IPv6 provide?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which 5GC network function handles session management?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typical latency of LEO satellite internet (Starlink)?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "600 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20-40 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-2 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
              children: "IPv6 transition"
            }), " requires careful mechanism selection based on infrastructure"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dual-stack for coexistence, NAT64 for IPv6-only migration, tunneling as interim"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "IoT protocol selection"
            }), " depends on device constraints and network topology"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MQTT for reliable TCP, CoAP for constrained UDP, 6LoWPAN for mesh, LoRaWAN for long range"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "5G network slicing"
            }), " enables dedicated QoS for different traffic types"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slice 1: eMBB (video), Slice 2: URLLC (industrial), Slice 3: mMTC (sensors)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge computing reduces cloud bandwidth by 100x"
            }), " through local processing"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filter, aggregate, and infer at the edge; send only metadata to cloud"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Zero Trust is not a product but a policy framework"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Least privilege, continuous verification, microsegmentation across all access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "eBPF enables kernel-level observability with <1% overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use for DDoS mitigation, packet filtering, latency tracing at line rate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Quantum networking"
            }), " is limited to metro QKD today; general quantum internet by 2040+"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy QKD for high-security key distribution; trust classical crypto for general traffic"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1818-summary",
      children: "18.18 Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "IPv6 Adoption & Transition:"
      }), " IPv6 solves IPv4 address exhaustion with 128-bit addressing (340 undecillion addresses). Three transition mechanisms: dual-stack (both protocols simultaneously, zero overhead but high complexity), tunneling (encapsulate IPv6 in IPv4, medium complexity), translation (NAT64/DNS64 for IPv6-only to IPv4 communication, stateful overhead)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "IoT Networking:"
      }), " Three key protocols: 6LoWPAN compresses IPv6 headers to fit 802.15.4 frames (127 bytes → ~6 bytes compressed); MQTT provides publish-subscribe over TCP with three QoS levels and LWT; CoAP provides RESTful request-response over UDP with observation and block-wise transfer. LoRaWAN enables long-range (15 km) ultra-low-power IoT."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cellular Evolution:"
      }), " 4G LTE (100 Mbps, EPC core) → 5G NR (20 Gbps, 1 ms latency, SBA core with network slicing) → 6G (projected: 1 Tbps, 0.01 ms, AI-native, sub-THz spectrum, holographic MIMO)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Satellite Internet:"
      }), " LEO constellations (Starlink, OneWeb) provide 100-200 Mbps at 20-40 ms latency globally. Laser inter-satellite links create a space mesh. Rain fade, handover at 7.5 km/s, and high BDP TCP optimization remain challenges."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Network Automation:"
      }), " Ansible provides agentless SSH-based configuration (YAML playbooks). NETCONF/YANG provides standardized data modeling with transactional (candidate/commit) configuration. RESTCONF adapts NETCONF for REST APIs. CI/CD for networking with virtualized validation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Zero Trust Networking:"
      }), " No implicit trust → every request is authenticated and authorized (NIST SP 800-207). ZTNA replaces VPNs with identity-aware application access. SASE combines ZTNA, SWG, CASB, FWaaS, and SD-WAN in a cloud-delivered model."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "AI/ML in Networking:"
      }), " ML for anomaly detection (autoencoders, LSTM), traffic classification (Random Forest, XGBoost), predictive routing (RL, Google B4), capacity planning (ARIMA, Prophet). Key challenge: inference latency must be < phenomena detection time."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Quantum Networking:"
      }), " QKD (BB84 protocol) uses single-photon polarization to distribute cryptographic keys with information-theoretic security. Limited to metro distances (~100 km fiber, 1,200 km satellite). Quantum repeaters and memory are active research areas."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Computing:"
      }), " Four tiers (device → local → regional → cloud) based on latency requirements. Enables sub-10 ms real-time applications (autonomous vehicles, AR, industrial automation). Reduces bandwidth by 100× through local processing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Network Observability:"
      }), " eBPF provides kernel-level programmability for packet processing (XDP, tc, socket filters) with <1% CPU overhead. OpenTelemetry provides standardized distributed tracing (W3C TraceContext) across network boundaries."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1819-exercises",
      children: "18.19 Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does dual-stack handle DNS resolution differently from NAT64/DNS64?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nDual-stack: DNS returns both A (IPv4) and AAAA (IPv6) records; client chooses. NAT64/DNS64: DNS64 synthesizes AAAA records from A records using the NAT64 prefix; client only sees IPv6.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does 6LoWPAN compression reduce a 48-byte header to ~6 bytes? Which fields are eliminated?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n6LoWPAN compresses by eliding known fields (version, traffic class from context), compressing addresses to IIDs (64-bit link-local), and eliding next-header when known (UDP). Eliminated: version, traffic class (mostly), flow label, hop limit (context), addresses (derived from link-layer).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why TCP performs poorly over satellite links and how QUIC connection migration helps mobile users."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nTCP's handshake (1 RTT) + slow start (multiple RTTs to reach full window) wastes bandwidth on high-BDP satellite links (RTT ~600ms). QUIC's 0-RTT handshake and connection migration (Connection ID survives IP changes) eliminate reconnection delay during WiFi→cellular handoffs.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare the failure modes of NETCONF confirmed commit vs Ansible push configuration."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nNETCONF confirmed commit: if the commit confirmation times out, the device automatically rolls back to the previous config. Ansible push: if the connection drops during push, the device is left in a half-configured state with no automatic rollback.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does eBPF XDP achieve line-rate packet processing without kernel network stack overhead?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nXDP programs execute in the kernel's network driver before the SKB allocation, before the full network stack processes the packet. The program runs in a sandboxed BPF VM with JIT compilation, processing packets at ~50ns each.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the security model difference between QKD and classical Diffie-Hellman key exchange?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nQKD is information-theoretically secure: any eavesdropping is detectable via quantum measurement disturbance. Diffie-Hellman is computationally secure: broken by sufficiently large quantum computers (Shor's algorithm). QKD detects interception; DH cannot.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPv6 transition for an enterprise:"
        }), " A company has 5,000 employees, 10,000 IoT sensors, and a data center with 200 servers. All devices are currently IPv4. Design an IPv6 transition plan covering: (a) which transition mechanism to use for each device category, (b) timeline for complete transition, (c) testing strategy to ensure backward compatibility, (d) security policy updates needed. Justify each decision."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n(a) Employees: dual-stack (OS supports both). IoT sensors: 6LoWPAN (native IPv6 over 802.15.4). Servers: dual-stack with NAT64 gateway for legacy clients. (b) Phase 1 (3 months): dual-stack on all network infrastructure. Phase 2 (6 months): employee devices dual-stack. Phase 3 (12 months): IoT migration. Phase 4 (18 months): server migration. (c) Test with IPv6-only VLAN, Happy Eyeballs validation. (d) Update firewall rules for ICMPv6 (Neighbor Discovery), add RA guard, update DNS with AAAA records.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edge vs cloud for video surveillance:"
        }), " A smart city deploys 10,000 cameras (1080p, H.264, 10 Mbps each). Each camera captures 24/7. Design the processing architecture for: real-time license plate recognition (LPR, <500 ms), and historical video search (indexed queries on last 30 days). Compute: (a) total bandwidth if all cameras stream to cloud, (b) bandwidth after edge pre-processing (extract metadata only, 1 Kbps per camera), (c) required edge compute (GPU-hours) for real-time LPR at 30 FPS per camera, (d) cloud storage for 30 days of metadata. Assume JPEG metadata payload = 50 KB per detection event."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n(a) Total bandwidth: 10,000 × 10 Mbps = 100 Gbps (impractical). (b) Edge pre-processing reduces to 10,000 × 1 Kbps = 10 Mbps. (c) Edge GPU-hours: each camera requires ~1 GPU-hour per day for LPR at 30 FPS. For 10,000 cameras: 10,000 GPU-hours/day. (d) Cloud storage: 10,000 cameras × 50 KB/detection × 86,400 detections/day (if one per frame) = — impractical. Realistic: 1 detection per 10 frames = 8,640 detections/day × 50 KB = 432 MB/day per camera × 30 days × 10,000 = 129.6 TB.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LoRaWAN capacity planning:"
        }), " A smart agriculture deployment has 50,000 soil sensors. Each sensor transmits a 12-byte payload every 10 minutes. Using EU 868 MHz band with 1% duty cycle and SF12 (air time = 1,482 ms per packet): (a) compute the maximum number of sensors per gateway before duty cycle is exceeded, (b) determine number of gateways needed, (c) explain how ADR could increase capacity by switching to SF7 (air time = 56 ms) for close-range sensors, (d) compute the new capacity with ADR assuming 60% of sensors are close-range (SF7) and 40% far-range (SF12)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n(a) Each sensor transmits 6 times/hour × 1.482s = 8.892s air time/h = 0.247% duty cycle per sensor. Max per gateway: 1% / 0.247% = ~4 sensors per channel. With 8 channels: 32 sensors/gateway. (b) Gateways needed: 50,000 / 32 = 1,563. (c) ADR switches close sensors to SF7 (56ms air time). Duty cycle per SF7 sensor: 6 × 0.056/3600 = 0.0093%. Capacity per gateway: 1%/0.0093% × 8 ≈ 860 sensors (SF7-only). (d) With 60% SF7 + 40% SF12: capacity per gateway = 1 / ((0.6/860) + (0.4/32)) = 1 / (0.000698 + 0.0125) = 1 / 0.013198 ≈ 76 sensors/gateway. Total gateways = 50,000/76 ≈ 658.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design a zero-trust architecture for a distributed enterprise with 10,000 employees across 50 global offices and 5,000 remote workers."
        }), " All applications are in the cloud (SaaS + IaaS) with a legacy data center. Design: (a) access model (ZTNA, SASE, or hybrid), (b) identity provider integration (SSO, MFA, device posture), (c) microsegmentation strategy for SaaS apps (no network control), (d) offsite failover plan if ZTNA cloud is unreachable, (e) migrate legacy VPN users without downtime. Compute the latency impact of ZTNA per-session proxy vs direct VPN."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n(a) Hybrid SASE: ZTNA for app access (Cloudflare Access or Zscaler), SD-WAN for branch connectivity. (b) IdP: Okta/Azure AD with MFA (TOTP + WebAuthn), device posture check (CrowdStrike, Jamf) before access granted. (c) Microsegmentation for SaaS: identity-aware proxies at app layer (no network segments needed). Guardicore/Illumio for data center microsegmentation. (d) Failover: local proxy cache of JWT tokens (5-min TTL), offline access mode for approved apps. (e) Migration: deploy ZTNA agent alongside legacy VPN. Users migrate per group; VPN decommissioned after 100% adoption. Latency: ZTNA proxy adds ~5-15ms (proxy termination + policy check) vs direct VPN's ~2-5ms.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compare quantum vs classical key exchange for a global bank with 1,000 branches."
        }), " The bank needs to refresh session keys between branches and the central data center every hour. Each key is 256-bit AES. Classical method: Diffie-Hellman over TLS (quantum-vulnerable → Shor's algorithm breaks it in 8 hours on a 4,000-qubit machine). Quantum method: BB84 QKD over fiber. Assume HQ (London) to New York branch is 5,600 km; max QKD distance is 100 km (requires 56 trusted relays). Compute: (a) total QKD key rate after 56 relays (each relay halves rate due to measurement and re-transmission), (b) hours to generate a 256-bit key, (c) security advantage (QKD detects eavesdropping, DH does not), (d) cost comparison (trusted relay hardware vs post-quantum cryptography software). Recommend and justify."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n(a) QKD key rate halves per relay: starting rate 1 Mbps → after 56 relays: 1 Mbps / 2^56 ≈ 1.39 × 10^-11 bps = effectively unusable. (b) To generate 256 bits: 256 / 1.39 × 10^-11 ≈ 1.84 × 10^13 seconds ≈ 584,000 years. (c) QKD detects eavesdropping via quantum measurement disturbance; DH does not detect interception until data is decrypted. (d) Cost: 56 trusted relays at $50K each = $2.8M + fiber lease. PQC (CRYSTALS-Kyber) is software-only, free, and currently believed quantum-resistant. Recommendation: deploy PQC (Kyber-1024 + Dilithium-3) for all branches immediately; QKD only for ultra-high-security metro links (≤100km) between major data centers.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "End of Chapter 18 → Modern Networking"
        })
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