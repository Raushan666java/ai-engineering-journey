"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[80614],{

/***/ 4989
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_computer_networks_08_transport_layer_md_9ce_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-computer-networks-08-transport-layer-md-9ce.json
const site_docs_courses_computer_networks_08_transport_layer_md_9ce_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/computer-networks/08-transport-layer","title":"Chapter 8: The Transport Layer","description":"Prerequisites Routing — Path selection between hosts | Next TCP Congestion Control — From basic TCP to congestion management","source":"@site/docs/courses/computer-networks/08-transport-layer.md","sourceDirName":"courses/computer-networks","slug":"/computer-networks/08-transport-layer","permalink":"/ai-engineering-journey/computer-networks/08-transport-layer","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"08-transport-layer","slug":"/computer-networks/08-transport-layer","title":"Chapter 8: The Transport Layer","sidebar_label":"Chapter 8: The Transport Layer","sidebar_position":8},"sidebar":"course-computer-networks","previous":{"title":"Chapter 7: Routing","permalink":"/ai-engineering-journey/computer-networks/07-routing"},"next":{"title":"Chapter 9: TCP Congestion Control","permalink":"/ai-engineering-journey/computer-networks/09-tcp-congestion"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/computer-networks/08-transport-layer.md


const frontMatter = {
	id: '08-transport-layer',
	slug: '/computer-networks/08-transport-layer',
	title: 'Chapter 8: The Transport Layer',
	sidebar_label: 'Chapter 8: The Transport Layer',
	sidebar_position: 8
};
const contentTitle = 'Chapter 8: The Transport Layer';

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
  "value": "TCP State Diagram with Color-Coded Transitions",
  "id": "tcp-state-diagram-with-color-coded-transitions",
  "level": 3
}, {
  "value": "8.1 Transport Layer Services",
  "id": "81-transport-layer-services",
  "level": 2
}, {
  "value": "8.1.1 Logical Communication Between Processes",
  "id": "811-logical-communication-between-processes",
  "level": 3
}, {
  "value": "8.1.2 Multiplexing and Demultiplexing",
  "id": "812-multiplexing-and-demultiplexing",
  "level": 3
}, {
  "value": "8.1.3 Transport Protocol Service Models",
  "id": "813-transport-protocol-service-models",
  "level": 3
}, {
  "value": "8.1.4 Advantages and Disadvantages",
  "id": "814-advantages-and-disadvantages",
  "level": 3
}, {
  "value": "8.2 UDP — User Datagram Protocol",
  "id": "82-udp--user-datagram-protocol",
  "level": 2
}, {
  "value": "8.2.1 UDP Segment Format",
  "id": "821-udp-segment-format",
  "level": 3
}, {
  "value": "8.2.2 UDP Checksum (Detailed)",
  "id": "822-udp-checksum-detailed",
  "level": 3
}, {
  "value": "8.2.3 UDP Applications (Expanded)",
  "id": "823-udp-applications-expanded",
  "level": 3
}, {
  "value": "8.2.4 UDP Echo Server (Python Implementation)",
  "id": "824-udp-echo-server-python-implementation",
  "level": 3
}, {
  "value": "8.2.5 UDP Echo Client (Python Implementation)",
  "id": "825-udp-echo-client-python-implementation",
  "level": 3
}, {
  "value": "8.2.6 UDP Echo Server (C++ Implementation)",
  "id": "826-udp-echo-server-c-implementation",
  "level": 3
}, {
  "value": "8.2.7 UDP Edge Cases (Expanded)",
  "id": "827-udp-edge-cases-expanded",
  "level": 3
}, {
  "value": "TypeScript Implementation: UDPDatagramHandler",
  "id": "typescript-implementation-udpdatagramhandler",
  "level": 3
}, {
  "value": "8.3 TCP — Transmission Control Protocol",
  "id": "83-tcp--transmission-control-protocol",
  "level": 2
}, {
  "value": "8.3.1 TCP Segment Format (Bit-Level Layout)",
  "id": "831-tcp-segment-format-bit-level-layout",
  "level": 3
}, {
  "value": "8.3.2 TCP Connection Establishment — Three-Way Handshake",
  "id": "832-tcp-connection-establishment--three-way-handshake",
  "level": 3
}, {
  "value": "8.3.3 TCP Connection Teardown — Four-Way Handshake",
  "id": "833-tcp-connection-teardown--four-way-handshake",
  "level": 3
}, {
  "value": "8.3.4 TCP State Diagram (11 States)",
  "id": "834-tcp-state-diagram-11-states",
  "level": 3
}, {
  "value": "TypeScript Implementation: TCPConnectionStateMachine",
  "id": "typescript-implementation-tcpconnectionstatemachine",
  "level": 3
}, {
  "value": "8.3.5 TCP Flow Control — Sliding Window",
  "id": "835-tcp-flow-control--sliding-window",
  "level": 3
}, {
  "value": "8.3.6 Flow Control vs Congestion Control",
  "id": "836-flow-control-vs-congestion-control",
  "level": 3
}, {
  "value": "8.3.7 TCP Timers",
  "id": "837-tcp-timers",
  "level": 3
}, {
  "value": "8.3.8 TCP Options (Expanded)",
  "id": "838-tcp-options-expanded",
  "level": 3
}, {
  "value": "8.3.9 TCP Reliability Mechanisms — Detailed",
  "id": "839-tcp-reliability-mechanisms--detailed",
  "level": 3
}, {
  "value": "8.3.10 TCP Performance Overhead Analysis",
  "id": "8310-tcp-performance-overhead-analysis",
  "level": 3
}, {
  "value": "8.3.11 TCP Timestamp Options and RTT Measurement",
  "id": "8311-tcp-timestamp-options-and-rtt-measurement",
  "level": 3
}, {
  "value": "8.4 SCTP — Stream Control Transmission Protocol",
  "id": "84-sctp--stream-control-transmission-protocol",
  "level": 2
}, {
  "value": "8.4.1 SCTP Overview",
  "id": "841-sctp-overview",
  "level": 3
}, {
  "value": "8.4.2 SCTP Association Setup (4-Way Handshake)",
  "id": "842-sctp-association-setup-4-way-handshake",
  "level": 3
}, {
  "value": "8.4.3 SCTP Multi-Homing",
  "id": "843-sctp-multi-homing",
  "level": 3
}, {
  "value": "8.4.4 SCTP vs TCP vs UDP Comparison",
  "id": "844-sctp-vs-tcp-vs-udp-comparison",
  "level": 3
}, {
  "value": "8.5 QUIC — Quick UDP Internet Connections",
  "id": "85-quic--quick-udp-internet-connections",
  "level": 2
}, {
  "value": "8.5.1 QUIC Overview",
  "id": "851-quic-overview",
  "level": 3
}, {
  "value": "8.5.2 QUIC vs TCP Comparison",
  "id": "852-quic-vs-tcp-comparison",
  "level": 3
}, {
  "value": "8.5.3 QUIC Connection Establishment",
  "id": "853-quic-connection-establishment",
  "level": 3
}, {
  "value": "8.5.4 QUIC Connection Migration",
  "id": "854-quic-connection-migration",
  "level": 3
}, {
  "value": "8.5.5 QUIC Packet Format",
  "id": "855-quic-packet-format",
  "level": 3
}, {
  "value": "8.5.6 QUIC Applications",
  "id": "856-quic-applications",
  "level": 3
}, {
  "value": "8.6 TCP vs UDP — Comprehensive Comparison",
  "id": "86-tcp-vs-udp--comprehensive-comparison",
  "level": 2
}, {
  "value": "8.7 Ports and Sockets",
  "id": "87-ports-and-sockets",
  "level": 2
}, {
  "value": "8.7.1 Port Number Ranges",
  "id": "871-port-number-ranges",
  "level": 3
}, {
  "value": "8.7.2 Common Port Numbers",
  "id": "872-common-port-numbers",
  "level": 3
}, {
  "value": "8.7.3 Connection Table Internals",
  "id": "873-connection-table-internals",
  "level": 3
}, {
  "value": "8.7.4 Sockets",
  "id": "874-sockets",
  "level": 3
}, {
  "value": "TypeScript Implementation: PortManager",
  "id": "typescript-implementation-portmanager",
  "level": 3
}, {
  "value": "8.8 Interview Corner",
  "id": "88-interview-corner",
  "level": 2
}, {
  "value": "Q1: How does a server mitigate SYN flood attacks?",
  "id": "q1-how-does-a-server-mitigate-syn-flood-attacks",
  "level": 3
}, {
  "value": "Q2: Why does TCP use port numbers? Why 16 bits?",
  "id": "q2-why-does-tcp-use-port-numbers-why-16-bits",
  "level": 3
}, {
  "value": "Q3: What is the purpose of TIME_WAIT?",
  "id": "q3-what-is-the-purpose-of-time_wait",
  "level": 3
}, {
  "value": "Q4: Explain Nagle&#39;s algorithm.",
  "id": "q4-explain-nagles-algorithm",
  "level": 3
}, {
  "value": "Q5: What happens during a zero-window condition? How is it resolved?",
  "id": "q5-what-happens-during-a-zero-window-condition-how-is-it-resolved",
  "level": 3
}, {
  "value": "Q6: Can TCP and UDP use the same port number?",
  "id": "q6-can-tcp-and-udp-use-the-same-port-number",
  "level": 3
}, {
  "value": "Q7: What is the TCP Silly Window Syndrome (SWS)?",
  "id": "q7-what-is-the-tcp-silly-window-syndrome-sws",
  "level": 3
}, {
  "value": "Q8: How does TCP handle out-of-order delivery?",
  "id": "q8-how-does-tcp-handle-out-of-order-delivery",
  "level": 3
}, {
  "value": "Q9: Explain TCP Fast Open (TFO).",
  "id": "q9-explain-tcp-fast-open-tfo",
  "level": 3
}, {
  "value": "Q10: What causes the TCP melting point problem?",
  "id": "q10-what-causes-the-tcp-melting-point-problem",
  "level": 3
}, {
  "value": "8.9 Advanced TCP Trace Tables",
  "id": "89-advanced-tcp-trace-tables",
  "level": 2
}, {
  "value": "TCP State Transition Reference",
  "id": "tcp-state-transition-reference",
  "level": 3
}, {
  "value": "TCP Segment Retransmission Trace",
  "id": "tcp-segment-retransmission-trace",
  "level": 3
}, {
  "value": "TCP Half-Close Trace",
  "id": "tcp-half-close-trace",
  "level": 3
}, {
  "value": "8.9 Applications in Real Systems",
  "id": "89-applications-in-real-systems",
  "level": 2
}, {
  "value": "8.9.1 Linux TCP Stack",
  "id": "891-linux-tcp-stack",
  "level": 3
}, {
  "value": "8.9.2 Windows TCP Auto-Tuning",
  "id": "892-windows-tcp-auto-tuning",
  "level": 3
}, {
  "value": "8.9.3 HTTP/3 and QUIC Deployment",
  "id": "893-http3-and-quic-deployment",
  "level": 3
}, {
  "value": "8.9.4 TCP Tuning for High Performance",
  "id": "894-tcp-tuning-for-high-performance",
  "level": 3
}, {
  "value": "8.9.5 TCP in Wireshark — Packet Analysis",
  "id": "895-tcp-in-wireshark--packet-analysis",
  "level": 3
}, {
  "value": "8.9.6 Transport Layer Security (TLS) over TCP",
  "id": "896-transport-layer-security-tls-over-tcp",
  "level": 3
}, {
  "value": "8.9.7 Socket Programming with TCP (C++)",
  "id": "897-socket-programming-with-tcp-c",
  "level": 3
}, {
  "value": "8.9.8 Socket Programming with TCP (Python)",
  "id": "898-socket-programming-with-tcp-python",
  "level": 3
}, {
  "value": "8.9.9 Netfilter/iptables and Transport Layer",
  "id": "899-netfilteriptables-and-transport-layer",
  "level": 3
}, {
  "value": "8.9.10 Common TCP Sequence Number Scenarios",
  "id": "8910-common-tcp-sequence-number-scenarios",
  "level": 3
}, {
  "value": "8.9.11 BSD Socket API — Transport Layer Interface",
  "id": "8911-bsd-socket-api--transport-layer-interface",
  "level": 3
}, {
  "value": "8.9.12 SO_LINGER and Connection Teardown",
  "id": "8912-so_linger-and-connection-teardown",
  "level": 3
}, {
  "value": "Case Study: TCP Optimization for a High-Frequency Trading Platform",
  "id": "case-study-tcp-optimization-for-a-high-frequency-trading-platform",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "8.10 Summary",
  "id": "810-summary",
  "level": 2
}, {
  "value": "8.11 Exercises",
  "id": "811-exercises",
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
  "value": "Coding Problems",
  "id": "coding-problems",
  "level": 3
}, {
  "value": "Projects",
  "id": "projects",
  "level": 3
}, {
  "value": "Challenge Problem",
  "id": "challenge-problem",
  "level": 3
}, {
  "value": "8.12 Quick Reference",
  "id": "812-quick-reference",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 3
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 3
}, {
  "value": "8.13 Common Pitfalls and Misconceptions",
  "id": "813-common-pitfalls-and-misconceptions",
  "level": 2
}, {
  "value": "8.14 Protocol Header Comparison (Byte-by-Byte)",
  "id": "814-protocol-header-comparison-byte-by-byte",
  "level": 2
}, {
  "value": "8.15 Chapter Key Takeaways",
  "id": "815-chapter-key-takeaways",
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
        id: "chapter-8-the-transport-layer",
        children: "Chapter 8: The Transport Layer"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prerequisites:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/computer-networks/07-routing",
          children: "Chapter 7: Routing"
        }), " — Path selection between hosts | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/computer-networks/09-tcp-congestion",
          children: "Chapter 9: TCP Congestion Control"
        }), " — From basic TCP to congestion management"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the role of the transport layer in providing end-to-end communication between processes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the UDP segment format and compute the UDP checksum."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the TCP segment header fields and their functions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trace the TCP connection establishment and termination state diagram."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between port numbers, sockets, and protocol multiplexing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement TCP state machine and UDP echo server in C++ and Python."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze edge cases: SYN flood, half-open connections, zero-window deadlock, TIME_WAIT."
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
            children: "UDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8-byte header, connectionless, no reliability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use for DNS, VoIP, streaming — applications handle loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20-byte header, connection-oriented, reliable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three-way handshake establishes; four-way handshake tears down"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16-bit (0-65535): well-known, registered, dynamic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sockets = (IP, Port) uniquely identify a connection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flow Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sliding window prevents receiver overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rwnd advertised in every segment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State Machine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11 states from CLOSED to TIME_WAIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIME_WAIT (2×MSL) prevents delayed segment confusion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Message-oriented, multi-homing, multi-streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used in telecommunication signaling (SS7 over IP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QUIC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP-based, built-in encryption, 0-RTT handshake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/3 transport, reduces latency vs TCP+TLS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Transport Layer] --> B[UDP]\n    A --> C[TCP]\n    A --> D[SCTP]\n    A --> E[QUIC]\n    B --> B1[Segment Format]\n    B --> B2[Checksum]\n    B --> B3[Applications]\n    C --> C1[Segment Format]\n    C --> C2[3-Way Handshake]\n    C --> C3[4-Way Teardown]\n    C --> C4[State Diagram]\n    C --> C5[Flow Control]\n    C --> C6[Timers]\n    C --> C7[Options: MSS/Window/SACK]\n    D --> D1[Multi-homing]\n    D --> D2[Multi-streaming]\n    E --> E1[0-RTT]\n    E --> E2[Connection Migration]\n    A --> F[Ports & Sockets]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tcp-state-diagram-with-color-coded-transitions",
      children: "TCP State Diagram with Color-Coded Transitions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "stateDiagram-v2\n    [*] --> CLOSED\n    CLOSED --> LISTEN : passive open\n    CLOSED --> SYN_SENT : active open\n    LISTEN --> SYN_RCVD : recv SYN\n    SYN_SENT --> ESTABLISHED : recv SYN+ACK\n    SYN_SENT --> SYN_RCVD : recv SYN (simultaneous)\n    SYN_RCVD --> ESTABLISHED : recv ACK\n    SYN_RCVD --> FIN_WAIT_1 : close\n    ESTABLISHED --> FIN_WAIT_1 : close\n    ESTABLISHED --> CLOSE_WAIT : recv FIN\n    FIN_WAIT_1 --> FIN_WAIT_2 : recv ACK\n    FIN_WAIT_1 --> CLOSING : recv FIN\n    FIN_WAIT_2 --> TIME_WAIT : recv FIN\n    CLOSE_WAIT --> LAST_ACK : close\n    CLOSING --> TIME_WAIT : recv ACK\n    LAST_ACK --> CLOSED : recv ACK\n    TIME_WAIT --> CLOSED : timeout (2xMSL)\n\n    classDef closed fill:#f44336,color:#fff\n    classDef listen fill:#FF9800,color:#fff\n    classDef syn fill:#2196F3,color:#fff\n    classDef estab fill:#4CAF50,color:#fff\n    classDef fin fill:#9C27B0,color:#fff\n    classDef wait fill:#607D8B,color:#fff\n\n    class CLOSED closed\n    class LISTEN listen\n    class SYN_SENT,SYN_RCVD syn\n    class ESTABLISHED estab\n    class FIN_WAIT_1,FIN_WAIT_2,CLOSE_WAIT,CLOSING,LAST_ACK fin\n    class TIME_WAIT wait\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "81-transport-layer-services",
      children: "8.1 Transport Layer Services"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/computer-networks/ch06-transport-tcp.png",
        alt: "Transport Layer: UDP, TCP and Congestion Control"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "811-logical-communication-between-processes",
      children: "8.1.1 Logical Communication Between Processes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The transport layer provides ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "logical communication"
      }), " between application processes running on different hosts. The network layer provides ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "host-to-host"
      }), " communication (IP addresses); the transport layer extends this to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "process-to-process"
      }), " communication through multiplexing and demultiplexing using port numbers."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " An apartment building (host) has many apartments (processes). The mailroom (network layer) delivers mail to the building. The building's internal mail system (transport layer) sorts mail by apartment number (port number) and delivers it to the correct resident."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "812-multiplexing-and-demultiplexing",
      children: "8.1.2 Multiplexing and Demultiplexing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multiplexing"
      }), " at the sender: the transport layer collects data from multiple application sockets, adds transport-layer headers (including source and destination port numbers), and passes the segments to the network layer."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Demultiplexing"
      }), " at the receiver: the transport layer receives segments from the network layer, examines header fields (primarily the destination port number), and delivers the data to the correct application socket."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered steps for demultiplexing:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Network layer delivers IP datagram to transport layer."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transport layer extracts destination port number from segment header."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transport layer looks up the port number in its connection table (TCP) or socket table (UDP)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If a matching socket is found, the segment data is delivered to that socket."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If no matching socket exists, the segment is discarded and an ICMP Port Unreachable (UDP) or RST (TCP) is sent."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode for demultiplexing:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function demultiplex(segment, ip_header):\n    dest_port = segment.destination_port\n    protocol = ip_header.protocol\n    \n    if protocol == UDP:\n        socket = udp_socket_table.lookup(dest_port)\n        if socket exists:\n            socket.receive_buffer.append(segment.data)\n        else:\n            send_icmp_port_unreachable(ip_header.source_ip, dest_port)\n    \n    if protocol == TCP:\n        connection = tcp_connection_table.lookup(\n            src_ip=ip_header.source_ip,\n            src_port=segment.source_port,\n            dest_ip=ip_header.destination_ip,\n            dest_port=segment.destination_port\n        )\n        if connection exists:\n            connection.receive_buffer.append(segment)\n        else:\n            send_rst(ip_header.source_ip, segment.source_port, dest_port)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Time: O(1) average for hash table lookup of port/connection tuple."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Space: O(N) where N = number of active sockets/connections."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WHY O(1)?"
        }), " Port-based demultiplexing uses a direct-indexed array or hash table keyed by the 4-tuple, giving constant-time lookup regardless of total connections."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "813-transport-protocol-service-models",
      children: "8.1.3 Transport Protocol Service Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Transport protocols offer two service models:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UDP (User Datagram Protocol):"
        }), " connectionless, unreliable, no flow control, no congestion control."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TCP (Transmission Control Protocol):"
        }), " connection-oriented, reliable, in-order delivery, flow control, congestion control."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SCTP (Stream Control Transmission Protocol):"
        }), " message-oriented, multi-homing, multi-streaming, partial reliability."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "QUIC (Quick UDP Internet Connections):"
        }), " UDP-based, encrypted by default, 0-RTT handshake, connection migration."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "814-advantages-and-disadvantages",
      children: "8.1.4 Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "UDP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SCTP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "QUIC"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Header overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes (low)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20-60 bytes (moderate)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 bytes common (moderate)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable (typically ~30-50 bytes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reliability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None — application must handle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in ACK + retransmission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in with selective ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in with ACK + retransmission"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ordering"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strict byte ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-stream ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-stream ordering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Head-of-line blocking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (all streams blocked by one loss)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (independent streams)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (independent streams)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Encryption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional (TLS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional (TLS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mandatory (TLS 1.3)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Connection setup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 RTT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 RTT (SYN/SYN-ACK)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 RTT (INIT/INIT-ACK)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-1 RTT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best for"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-latency, loss-tolerant apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reliable data transfer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Telecom, multi-homing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/3, low-latency web"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "82-udp--user-datagram-protocol",
      children: "8.2 UDP — User Datagram Protocol"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "821-udp-segment-format",
      children: "8.2.1 UDP Segment Format"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The UDP header is exactly ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "8 bytes"
      }), " (64 bits):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  0                   1                   2                   3\n  0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n  |          Source Port          |       Destination Port        |\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n  |             Length            |           Checksum            |\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n  |                          Data ...                             |\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size (bits)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Source Port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source application port (0-65535). Set to 0 if unused by sender."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Destination Port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destination application port (0-65535). Required for demultiplexing."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP datagram length in bytes: header (8) + data. Minimum 8, maximum 65,535."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Checksum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional error detection (mandatory in IPv6). 0 means not computed (IPv4 only)."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The maximum UDP payload = 65,535 - 20 (IP header) - 8 (UDP header) = 65,507 bytes. In practice, IPv4 allows larger payloads via Jumbograms, but the UDP Length field caps at 65,535."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " UDP is like sending a postcard. You write the address, drop it in a mailbox, and hope it arrives. No tracking, no confirmation, no guarantee of delivery or order."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "822-udp-checksum-detailed",
      children: "8.2.2 UDP Checksum (Detailed)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The UDP checksum covers three things: the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pseudo-header"
      }), ", the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "UDP header"
      }), ", and the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "data"
      }), ". The pseudo-header is not transmitted; it's constructed by sender and receiver to verify the segment arrived at the correct host and protocol."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudo-header (12 bytes for IPv4):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  0                   1                   2                   3\n  0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n  |                       Source IP Address                      |\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n  |                    Destination IP Address                    |\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n  |     Zeros      |   Protocol    |         UDP Length          |\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Checksum computation steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pad data with a zero byte if length is odd (padding is not transmitted)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Divide the combined data (pseudo-header + UDP header + data + padding) into 16-bit words."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Sum all 16-bit words using ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "one's complement arithmetic"
        }), " (add with carry-around)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Take the one's complement of the result."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Store the result in the Checksum field. A stored value of 0 means checksum not computed (IPv4 only)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode for UDP checksum:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function udp_checksum(udp_segment, src_ip, dest_ip):\n    pseudo_header = make_pseudo_header(src_ip, dest_ip, UDP_PROTOCOL, udp_segment.length)\n    data = pseudo_header + udp_segment.header_bytes + udp_segment.payload\n    if len(data) % 2 == 1:\n        data = data + b'\\x00'  // pad to even length\n    \n    words = [data[i]*256 + data[i+1] for i in range(0, len(data), 2)]\n    sum = 0\n    for word in words:\n        sum = sum + word\n        if sum > 0xFFFF:             // one's complement carry\n            sum = (sum & 0xFFFF) + 1\n    \n    checksum = ~sum & 0xFFFF\n    return checksum\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry run trace:"
      }), " UDP datagram with 4 bytes of data \"Hi!\\n\"."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value (Hex)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pseudo-header (12 bytes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "C0A8 0101 C0A8 0102 0011 000C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP header (8 bytes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "C081 0035 000C 0000"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data \"Hi!\\n\" (4 bytes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "4869 210A"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concatenate all"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "C0A8 0101 C0A8 0102 0011 000C C081 0035 000C 0000 4869 210A"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sum (one's complement)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Compute: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "C0A8+0101+C0A8+0102+0011+000C+C081+0035+000C+0000+4869+210A"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~result & 0xFFFF → stored in checksum field"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Time: O(N) where N = number of 16-bit words in the segment."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Space: O(1) — only the accumulator and carry are stored."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WHY O(N)?"
        }), " Every byte must be processed once to compute the checksum. Hardware offload (checksum offloading in NICs) makes this effectively free."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "823-udp-applications-expanded",
      children: "8.2.3 UDP Applications (Expanded)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UDP is suitable for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DNS lookups:"
        }), " Single request-response, no connection overhead. Quick timeout + retry by resolver."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VoIP (RTP over UDP):"
        }), " Tolerates occasional packet loss; retransmission would cause unacceptable latency."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Streaming media:"
        }), " Video/audio streaming uses UDP for real-time delivery. Lost frames are skipped, not retransmitted."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DHCP:"
        }), " Broadcast-based discovery; cannot use TCP before IP address is assigned."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SNMP:"
        }), " Simple monitoring queries with minimal overhead."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "QUIC foundation:"
        }), " QUIC (HTTP/3) runs on UDP, implementing reliability at the application layer."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Online gaming:"
        }), " Game state updates are time-sensitive; old state data is worthless."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NTP:"
        }), " Time synchronization requires precise timestamps; connection overhead would reduce accuracy."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Choosing between UDP and TCP is a fundamental design decision. A common mistake is using TCP for latency-sensitive applications (video calls, gaming) when UDP + application-level reliability gives better control over timing. QUIC's rise reflects this insight."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "824-udp-echo-server-python-implementation",
      children: "8.2.4 UDP Echo Server (Python Implementation)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import socket\n\ndef udp_echo_server(host='0.0.0.0', port=8080):\n    \"\"\"\n    UDP echo server — echoes back any received datagram.\n    \n    Complexity: O(1) per datagram. No connection state maintained.\n    WHY linear scaling: UDP is stateless; each datagram is independent.\n    \"\"\"\n    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\n    sock.bind((host, port))\n    print(f\"UDP echo server listening on {host}:{port}\")\n    \n    while True:\n        data, addr = sock.recvfrom(65535)\n        # recvfrom returns (data, (ip, port))\n        print(f\"Received {len(data)} bytes from {addr}\")\n        sock.sendto(data, addr)  # Echo back\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "825-udp-echo-client-python-implementation",
      children: "8.2.5 UDP Echo Client (Python Implementation)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import socket\n\ndef udp_echo_client(message=b\"Hello UDP\", host='127.0.0.1', port=8080):\n    \"\"\"\n    UDP echo client — sends a message and waits for echo.\n    \n    Edge case: recvfrom may block indefinitely if packet is lost.\n    Solution: settimeout() for application-level timeout.\n    \"\"\"\n    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\n    sock.settimeout(5.0)  # Prevent indefinite block\n    \n    try:\n        sock.sendto(message, (host, port))\n        print(f\"Sent: {message}\")\n        \n        data, server = sock.recvfrom(65535)\n        print(f\"Received echo: {data}\")\n        \n    except socket.timeout:\n        print(\"Timeout — packet likely lost\")\n    finally:\n        sock.close()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "826-udp-echo-server-c-implementation",
      children: "8.2.6 UDP Echo Server (C++ Implementation)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cstring>\n#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n\n/**\n * UDP echo server — C++ implementation.\n * \n * Complexity: O(1) per datagram. No per-connection state.\n * WHY O(1): recvfrom/sendto are stateless I/O operations.\n * No connection table, no handshake, no teardown.\n */\nclass UdpEchoServer {\nprivate:\n    int sock_fd;\n    sockaddr_in server_addr;\n\npublic:\n    UdpEchoServer(int port = 8080) {\n        sock_fd = socket(AF_INET, SOCK_DGRAM, 0);\n        if (sock_fd < 0) throw std::runtime_error(\"socket() failed\");\n        \n        memset(&server_addr, 0, sizeof(server_addr));\n        server_addr.sin_family = AF_INET;\n        server_addr.sin_addr.s_addr = htonl(INADDR_ANY);\n        server_addr.sin_port = htons(port);\n        \n        if (bind(sock_fd, (sockaddr*)&server_addr, sizeof(server_addr)) < 0)\n            throw std::runtime_error(\"bind() failed\");\n        \n        std::cout << \"UDP Echo Server on port \" << port << std::endl;\n    }\n\n    void run() {\n        char buffer[65535];\n        sockaddr_in client_addr;\n        socklen_t client_len = sizeof(client_addr);\n        \n        while (true) {\n            memset(buffer, 0, sizeof(buffer));\n            ssize_t n = recvfrom(sock_fd, buffer, sizeof(buffer), 0,\n                                (sockaddr*)&client_addr, &client_len);\n            \n            char client_ip[INET_ADDRSTRLEN];\n            inet_ntop(AF_INET, &client_addr.sin_addr, client_ip, INET_ADDRSTRLEN);\n            int client_port = ntohs(client_addr.sin_port);\n            \n            std::cout << \"Received \" << n << \" bytes from \" \n                      << client_ip << \":\" << client_port << std::endl;\n            \n            // Echo back\n            sendto(sock_fd, buffer, n, 0,\n                   (sockaddr*)&client_addr, client_len);\n        }\n    }\n\n    ~UdpEchoServer() { close(sock_fd); }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "827-udp-edge-cases-expanded",
      children: "8.2.7 UDP Edge Cases (Expanded)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Packet loss"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP has no retransmission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application must implement timeout + retry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Packet reordering"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP may deliver out of order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application must buffer and reorder if needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Checksum mismatch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Corrupted data detected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segment silently dropped"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Port unreachable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No application listens on destination port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ICMP Port Unreachable sent, datagram dropped"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Broadcast/multicast"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP supports broadcast (255.255.255.255)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application must handle multiple responses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Zero checksum"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPv4 allows checksum = 0 (not computed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risky — no integrity verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fragmentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP datagram > MTU causes IP fragmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application should keep datagrams under MTU - IP header - UDP header"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UDP flood DoS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker sends many UDP packets to random ports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rate limiting, firewall rules, port filtering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Amplification attack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP services with large response-to-request ratio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disable open recursive resolvers, response rate limiting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Source port forgery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP source port can be spoofed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application-level authentication required"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-udpdatagramhandler",
      children: "TypeScript Implementation: UDPDatagramHandler"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface UDPSegment {\n  srcPort: number;\n  dstPort: number;\n  length: number;\n  checksum: number;\n  payload: Buffer;\n}\n\ninterface PseudoHeader {\n  srcIP: string;\n  dstIP: string;\n  zero: number;\n  protocol: number;\n  udpLength: number;\n}\n\nclass UDPDatagramHandler {\n  static computePseudoHeader(srcIP: string, dstIP: string, length: number): PseudoHeader {\n    return { srcIP, dstIP, zero: 0, protocol: 17, udpLength: length };\n  }\n\n  static buildSegment(payload: Buffer, srcPort: number, dstPort: number): UDPSegment {\n    const length = 8 + payload.length;\n    const seg: UDPSegment = { srcPort, dstPort, length, checksum: 0, payload };\n    seg.checksum = this.computeChecksum(seg, '0.0.0.0', '0.0.0.0');\n    return seg;\n  }\n\n  static computeChecksum(seg: UDPSegment, srcIP: string, dstIP: string): number {\n    const ph = this.computePseudoHeader(srcIP, dstIP, seg.length);\n    let sum = 0;\n    const addWord = (w: number) => { sum += w; if (sum > 0xFFFF) sum = (sum & 0xFFFF) + 1; };\n    const ipParts = (ip: string) => ip.split('.').map(Number);\n    const [sa, sb, sc, sd] = ipParts(ph.srcIP);\n    const [da, db, dc, dd] = ipParts(ph.dstIP);\n    addWord((sa << 8) | sb); addWord((sc << 8) | sd);\n    addWord((da << 8) | db); addWord((dc << 8) | dd);\n    addWord(ph.protocol); addWord(ph.udpLength);\n    addWord((seg.srcPort << 8) | seg.dstPort);\n    addWord(seg.length);\n    for (let i = 0; i < seg.payload.length; i += 2) {\n      const byte1 = seg.payload[i];\n      const byte2 = i + 1 < seg.payload.length ? seg.payload[i + 1] : 0;\n      addWord((byte1 << 8) | byte2);\n    }\n    return (~sum) & 0xFFFF;\n  }\n\n  static verifyChecksum(seg: UDPSegment, srcIP: string, dstIP: string): boolean {\n    return this.computeChecksum(seg, srcIP, dstIP) === 0;\n  }\n}\n// Usage:\n// const payload = Buffer.from('Hello UDP', 'utf8');\n// const seg = UDPDatagramHandler.buildSegment(payload, 12345, 53);\n// const valid = UDPDatagramHandler.verifyChecksum(seg, '192.168.1.1', '8.8.8.8');\n// console.log(`Checksum valid: ${valid}`); // false (simplified pseudo-header)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "83-tcp--transmission-control-protocol",
      children: "8.3 TCP — Transmission Control Protocol"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "831-tcp-segment-format-bit-level-layout",
      children: "8.3.1 TCP Segment Format (Bit-Level Layout)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The TCP header is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "20 bytes minimum"
      }), ", up to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "60 bytes"
      }), " with options. Here is the complete bit layout:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  0                   1                   2                   3\n  0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n  |          Source Port (16)         |       Destination Port (16)|\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n  |                       Sequence Number (32)                    |\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n  |                    Acknowledgment Number (32)                 |\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n  |  Data |Reserv|C|E|U|A|P|R|S|F|                               |\n  | Offset|  (3) |W|C|R|C|S|S|Y|I|      Window Size (16)         |\n  |  (4)  |      |R|E|G|K|H|T|N|N|                               |\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n  |           Checksum (16)          |        Urgent Pointer (16) |\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n  |                       Options (variable)                      |\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n  |                              Data                             |\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Field details:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Source Port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identifies the sending application process."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Destination Port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identifies the receiving application process."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sequence Number (SEQ)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Byte offset of first data byte in this segment. Initial value (ISN) is random."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Acknowledgment Number (ACK)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next expected byte (cumulative ACK). Valid only when ACK flag = 1."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Header length in 32-bit words. Minimum 5 (20 bytes), maximum 15 (60 bytes)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reserved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reserved for future use. Must be zero."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control flags: CWR, ECE, URG, ACK, PSH, RST, SYN, FIN, NS."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Window Size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advertised receive window — number of bytes the receiver is willing to accept."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Checksum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error detection over pseudo-header + TCP header + data (mandatory)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Urgent Pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Offset to urgent data. Valid only when URG flag = 1."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 40 bytes. Common: MSS, Window Scale, SACK, Timestamps, NOP."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TCP Flags (9 bits):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  +---+---+---+---+---+---+---+---+---+\n  |NS |CWR|ECE|URG|ACK|PSH|RST|SYN|FIN|\n  +---+---+---+---+---+---+---+---+---+\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Flag"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nonce Sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECN nonce sum (experimental)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CWR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Congestion Window Reduced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sender reduced its congestion window"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECN Echo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network experienced congestion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "URG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Urgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Urgent pointer field is valid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acknowledgment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acknowledgment number field is valid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PSH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receiver should push data to application immediately"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Abort connection (error or rejection)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Establish connection (sequence number synchronization)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finish"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graceful connection termination"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " TCP is like a registered mail service with return receipt. Every package is numbered (sequence number), delivery is confirmed (ACK), lost packages are resent (retransmission), and packages arrive in order (reordering buffer)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "832-tcp-connection-establishment--three-way-handshake",
      children: "8.3.2 TCP Connection Establishment — Three-Way Handshake"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The three-way handshake establishes a TCP connection by synchronizing sequence numbers between client and server."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Client → Server: SYN"
        }), " — Client sends a TCP segment with SYN flag = 1, choosing a random initial sequence number ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), ". Client enters SYN_SENT state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Server → Client: SYN+ACK"
        }), " — Server receives the SYN, allocates resources, chooses its own random initial sequence number ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y"
        }), ", and sends SYN+ACK with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ack = x+1"
        }), ". Server enters SYN_RCVD state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Client → Server: ACK"
        }), " — Client receives SYN+ACK, sends ACK with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "seq = x+1"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ack = y+1"
        }), ". Client enters ESTABLISHED state. Server receives ACK and enters ESTABLISHED state."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Full packet trace:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CLIENT (Port A)                    SERVER (Port B)\n   |                                   |\n   |  --- SYN (SEQ=1000, CTL=SYN) ---> |  Step 1: Client initiates\n   |  seq=1000, ack=0, len=0           |  Server sees: seq=1000\n   |                                   |\n   |  <-- SYN+ACK (SEQ=5000, ---       |  Step 2: Server responds\n   |       ACK=1001, CTL=SYN|ACK) --   |  seq=5000, ack=1001\n   |                                   |\n   |  --- ACK (SEQ=1001, ----------->  |  Step 3: Client confirms\n   |       ACK=5001, CTL=ACK)          |  Connection ESTABLISHED\n   |                                   |\n   |  ======= DATA TRANSFER ========>> |\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry run trace table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Seq #"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ack #"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Flags"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State (Client)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State (Server)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LISTEN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send SYN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN_SENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LISTEN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receive SYN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1001)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN_SENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN_RCVD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send SYN+ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN+ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN_SENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN_RCVD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receive SYN+ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ESTABLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN_RCVD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ESTABLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN_RCVD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receive ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ESTABLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ESTABLISHED"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode for three-way handshake:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// CLIENT SIDE\nfunction tcp_connect(server_ip, server_port):\n    isn = random_32bit()\n    state = SYN_SENT\n    send_segment(SYN, seq=isn, ack=0)\n    \n    while state != ESTABLISHED:\n        segment = receive_segment(timeout=SYN_TIMEOUT)\n        if segment.flags == (SYN | ACK) and segment.ack == isn + 1:\n            send_segment(ACK, seq=segment.ack, ack=segment.seq + 1)\n            state = ESTABLISHED\n        elif segment.flags == RST:\n            abort(\"Connection refused\")\n        if timeout:\n            abort(\"Connection timeout\")\n\n// SERVER SIDE\nfunction tcp_listen(port):\n    state = LISTEN\n    while True:\n        segment = receive_segment()\n        if segment.flags == SYN:\n            iss = random_32bit()\n            send_segment(SYN | ACK, seq=iss, ack=segment.seq + 1)\n            state = SYN_RCVD\n            \n            ack_segment = receive_segment(timeout=ACK_TIMEOUT)\n            if ack_segment.flags == ACK and ack_segment.ack == iss + 1:\n                state = ESTABLISHED\n                return new_connection(segment.src_ip, segment.src_port)\n            elif timeout:\n                send_segment(RST, seq=iss)\n                state = LISTEN  // Half-open connection cleaned up\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity analysis of three-way handshake:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(1) RTT (1 round trip, ~3 segment exchanges)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(1) per connection (ISN, state, timer)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Latency:"
        }), " Minimum 1 RTT before data can be sent."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WHY 3 segments?"
        }), " Two segments would leave the server unable to verify the client received its SYN. One segment is clearly insufficient (no bidirectional agreement). Three is the mathematical minimum for reliable bidirectional sequence number synchronization in an unreliable network (due to the \"general's problem\")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "833-tcp-connection-teardown--four-way-handshake",
      children: "8.3.3 TCP Connection Teardown — Four-Way Handshake"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each direction of a TCP connection is closed independently. Either endpoint can initiate close."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Client → Server: FIN"
        }), " — Client's application calls close(). Client sends FIN with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "seq = u"
        }), ". Client enters FIN_WAIT_1."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Server → Client: ACK"
        }), " — Server receives FIN, sends ACK ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ack = u+1"
        }), ". Server enters CLOSE_WAIT. Client receives ACK and enters FIN_WAIT_2."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Server → Client: FIN"
        }), " — Server's application calls close(). Server sends FIN with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "seq = v"
        }), ". Server enters LAST_ACK."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Client → Server: ACK"
        }), " — Client receives FIN, sends ACK ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ack = v+1"
        }), ". Client enters TIME_WAIT. Server receives ACK and enters CLOSED."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CLIENT                          SERVER\n   |                               |\n   |  --- FIN (SEQ=u, CTL=FIN) --> |  Step 1: Client initiates close\n   |                               |  Client: FIN_WAIT_1\n   |  <-- ACK (SEQ=v, ACK=u+1) --- |  Step 2: Server acknowledges\n   |                               |  Client: FIN_WAIT_2, Server: CLOSE_WAIT\n   |  <-- FIN (SEQ=v, CTL=FIN) --- |  Step 3: Server closes its side\n   |                               |  Server: LAST_ACK\n   |  --- ACK (SEQ=u+1, ACK=v+1)-> |  Step 4: Client final ACK\n   |                               |  Client: TIME_WAIT (2×MSL)\n   |                               |  Server: CLOSED\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry run trace table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Seq #"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ack #"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Flags"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State (Client)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State (Server)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Established"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ESTABLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ESTABLISHED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "close()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIN_WAIT_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ESTABLISHED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send FIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "u=p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIN_WAIT_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ESTABLISHED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receive FIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIN_WAIT_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSE_WAIT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v=q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "u+1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIN_WAIT_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSE_WAIT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receive ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIN_WAIT_2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSE_WAIT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "close()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIN_WAIT_2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LAST_ACK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send FIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "u+1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIN_WAIT_2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LAST_ACK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receive FIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIME_WAIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LAST_ACK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "u+1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v+1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIME_WAIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LAST_ACK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receive ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIME_WAIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2×MSL expires"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSED"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode for connection teardown (client-initiated):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function tcp_close():\n    send_segment(FIN, seq=next_seq, ack=next_ack)\n    state = FIN_WAIT_1\n    \n    while state != CLOSED:\n        segment = receive_segment(timeout=MSL * 2)\n        \n        if state == FIN_WAIT_1:\n            if segment.flags == ACK and segment.ack == next_seq + 1:\n                state = FIN_WAIT_2\n            elif segment.flags == (FIN | ACK):  // Simultaneous close\n                state = CLOSING\n                \n        else if state == FIN_WAIT_2:\n            if segment.flags == FIN:\n                send_segment(ACK, seq=segment.ack, ack=segment.seq + 1)\n                state = TIME_WAIT\n                start_timer(MSL * 2)\n                \n        else if state == CLOSING:\n            if segment.flags == ACK:\n                state = TIME_WAIT\n                start_timer(MSL * 2)\n                \n        else if state == TIME_WAIT:\n            if timer_expired:\n                state = CLOSED\n            // Delayed FIN retransmission — re-send ACK\n            if segment.flags == FIN:\n                send_segment(ACK, seq=segment.ack - 1, ack=segment.seq + 1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(1) RTT for each direction, total ~1 RTT typically."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(1) — connection state maintained in TIME_WAIT (2×MSL)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WHY 4 segments?"
        }), " TCP closes each direction independently. The server's ACK and FIN cannot be combined because the server may need to send more data after receiving the client's FIN (half-close). Only when the server also finishes does it send its FIN."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "834-tcp-state-diagram-11-states",
      children: "8.3.4 TCP State Diagram (11 States)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TCP has 11 states in its state machine:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                              +-----------+\n                     ---------|  CLOSED   |---------\n                    |          +-----------+         |\n                    |                                |\n              (passive open)                   (active open)\n                    |                                |\n                    v                                v\n              +-----------+                   +-----------+\n              |  LISTEN   |                   | SYN_SENT  |\n              +-----------+                   +-----------+\n                    |                              |    |\n              (recv SYN)                     (recv SYN+ACK)|\n                    |                              |    |\n                    v                              v    |\n              +-----------+                   +--------+|\n              | SYN_RCVD  |<------------------+         ||\n              +-----------+    (recv SYN)               ||\n                    |                                     |\n              (recv ACK)                          (recv SYN)\n                    |                                     |\n                    v                                     |\n              +------------+                              |\n              | ESTABLISHED|<-----------------------------+\n              +------------+\n               |         |\n          (close/FIN) (recv FIN)\n               |         |\n               v         v\n        +-----------+ +-----------+\n        | FIN_WAIT_1| | CLOSE_WAIT|\n        +-----------+ +-----------+\n               |         |\n          (recv ACK) (close/FIN)\n               |         |\n               v         v\n        +-----------+ +-----------+\n        | FIN_WAIT_2| |  LAST_ACK |\n        +-----------+ +-----------+\n               |              |\n          (recv FIN)     (recv ACK)\n               |              |\n               v              v\n          +---------+    +----------+\n          | CLOSING |--->|  CLOSED  |\n          +---------+    +----------+\n               |\n          (recv ACK)\n               |\n               v\n         +----------+\n         | TIME_WAIT|\n         +----------+\n               |\n          (2×MSL timeout)\n               |\n               v\n          +----------+\n          |  CLOSED  |\n          +----------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "State descriptions:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Duration"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No connection exists. Initial and final state."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LISTEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server waiting for incoming connection request."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indefinite (server lifetime)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYN_SENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client sent SYN, waiting for SYN+ACK."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RTT (milliseconds)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYN_RCVD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server received SYN, sent SYN+ACK, waiting for ACK."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RTT (milliseconds)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ESTABLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection open; data can be exchanged bidirectionally."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection lifetime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIN_WAIT_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local application closed; FIN sent, waiting for ACK."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RTT (milliseconds)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIN_WAIT_2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote ACK for FIN received; waiting for remote FIN."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable (could be indefinite)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSE_WAIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Received FIN from remote; waiting for local application close."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application-dependent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both sides sent FIN simultaneously; waiting for ACK."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RTT (milliseconds)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LAST_ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sent FIN after CLOSE_WAIT; waiting for final ACK."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RTT (milliseconds)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TIME_WAIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection closed; waiting 2×MSL for delayed packets."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-120 seconds"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TCP state machine (C++ implementation):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <cstdint>\n#include <unordered_map>\n#include <functional>\n#include <iostream>\n\nenum class TCPState : uint8_t {\n    CLOSED, LISTEN, SYN_SENT, SYN_RCVD, ESTABLISHED,\n    FIN_WAIT_1, FIN_WAIT_2, CLOSE_WAIT, CLOSING, LAST_ACK, TIME_WAIT\n};\n\nenum class TCPEvent : uint8_t {\n    PASSIVE_OPEN, ACTIVE_OPEN, SEND_SYN, RECV_SYN, RECV_SYN_ACK,\n    RECV_ACK, RECV_FIN, SEND_FIN, SEND_ACK, CLOSE, TIMEOUT\n};\n\n/**\n * TCP State Machine — implements RFC 793 state transitions.\n * Complexity: O(1) per transition (hash map lookup).\n * WHY O(1): Each (state, event) pair maps to exactly one next state.\n * No iteration or search needed.\n */\nclass TCPStateMachine {\nprivate:\n    TCPState current_state;\n    using TransitionMap = std::unordered_map<\n        int,  // (state << 8) | event as key\n        TCPState\n    >;\n    TransitionMap transitions;\n\n    int key(TCPState s, TCPEvent e) const {\n        return (static_cast<int>(s) << 8) | static_cast<int>(e);\n    }\n\npublic:\n    TCPStateMachine() : current_state(TCPState::CLOSED) {\n        // Server-side transitions\n        transitions[key(TCPState::CLOSED, TCPEvent::PASSIVE_OPEN)] = TCPState::LISTEN;\n        transitions[key(TCPState::LISTEN, TCPEvent::RECV_SYN)] = TCPState::SYN_RCVD;\n        transitions[key(TCPState::SYN_RCVD, TCPEvent::RECV_ACK)] = TCPState::ESTABLISHED;\n        transitions[key(TCPState::SYN_RCVD, TCPEvent::CLOSE)] = TCPState::FIN_WAIT_1;\n\n        // Client-side transitions\n        transitions[key(TCPState::CLOSED, TCPEvent::ACTIVE_OPEN)] = TCPState::SYN_SENT;\n        transitions[key(TCPState::SYN_SENT, TCPEvent::RECV_SYN_ACK)] = TCPState::ESTABLISHED;\n        \n        // Connection termination\n        transitions[key(TCPState::ESTABLISHED, TCPEvent::CLOSE)] = TCPState::FIN_WAIT_1;\n        transitions[key(TCPState::ESTABLISHED, TCPEvent::RECV_FIN)] = TCPState::CLOSE_WAIT;\n        transitions[key(TCPState::FIN_WAIT_1, TCPEvent::RECV_ACK)] = TCPState::FIN_WAIT_2;\n        transitions[key(TCPState::FIN_WAIT_1, TCPEvent::RECV_FIN)] = TCPState::CLOSING;\n        transitions[key(TCPState::FIN_WAIT_2, TCPState::RECV_FIN)] = TCPState::TIME_WAIT;\n        transitions[key(TCPState::CLOSE_WAIT, TCPEvent::CLOSE)] = TCPState::LAST_ACK;\n        transitions[key(TCPState::CLOSING, TCPEvent::RECV_ACK)] = TCPState::TIME_WAIT;\n        transitions[key(TCPState::LAST_ACK, TCPEvent::RECV_ACK)] = TCPState::CLOSED;\n        transitions[key(TCPState::TIME_WAIT, TCPEvent::TIMEOUT)] = TCPState::CLOSED;\n    }\n\n    /**\n     * Process an event and transition to next state.\n     * Returns true if transition was valid, false otherwise.\n     * Edge case: invalid transitions (e.g., LISTEN + ACTIVE_OPEN) return false.\n     */\n    bool process_event(TCPEvent event) {\n        auto it = transitions.find(key(current_state, event));\n        if (it != transitions.end()) {\n            std::cout << state_name(current_state) << \" --(\"\n                      << event_name(event) << \")--> \"\n                      << state_name(it->second) << std::endl;\n            current_state = it->second;\n            return true;\n        }\n        std::cerr << \"Invalid transition: \" << state_name(current_state)\n                  << \" + \" << event_name(event) << std::endl;\n        return false;\n    }\n\n    TCPState get_state() const { return current_state; }\n\n    static const char* state_name(TCPState s) {\n        static const char* names[] = {\n            \"CLOSED\", \"LISTEN\", \"SYN_SENT\", \"SYN_RCVD\", \"ESTABLISHED\",\n            \"FIN_WAIT_1\", \"FIN_WAIT_2\", \"CLOSE_WAIT\", \"CLOSING\", \"LAST_ACK\", \"TIME_WAIT\"\n        };\n        return names[static_cast<int>(s)];\n    }\n\n    static const char* event_name(TCPEvent e) {\n        static const char* names[] = {\n            \"PASSIVE_OPEN\", \"ACTIVE_OPEN\", \"SEND_SYN\", \"RECV_SYN\",\n            \"RECV_SYN_ACK\", \"RECV_ACK\", \"RECV_FIN\", \"SEND_FIN\",\n            \"SEND_ACK\", \"CLOSE\", \"TIMEOUT\"\n        };\n        return names[static_cast<int>(e)];\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TCP state machine (Python implementation):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from enum import Enum, auto\n\nclass TCPState(Enum):\n    CLOSED = auto()\n    LISTEN = auto()\n    SYN_SENT = auto()\n    SYN_RCVD = auto()\n    ESTABLISHED = auto()\n    FIN_WAIT_1 = auto()\n    FIN_WAIT_2 = auto()\n    CLOSE_WAIT = auto()\n    CLOSING = auto()\n    LAST_ACK = auto()\n    TIME_WAIT = auto()\n\nclass TCPEvent(Enum):\n    PASSIVE_OPEN = auto()\n    ACTIVE_OPEN = auto()\n    SEND_SYN = auto()\n    RECV_SYN = auto()\n    RECV_SYN_ACK = auto()\n    RECV_ACK = auto()\n    RECV_FIN = auto()\n    SEND_FIN = auto()\n    SEND_ACK = auto()\n    CLOSE = auto()\n    TIMEOUT = auto()\n\nclass TCPStateMachine:\n    \"\"\"\n    TCP state machine implementing RFC 793.\n    \n    Complexity: O(1) per transition.\n    WHY: Uses dictionary mapping (state, event) -> next_state.\n    \"\"\"\n    \n    def __init__(self):\n        self.state = TCPState.CLOSED\n        self._build_transitions()\n    \n    def _build_transitions(self):\n        \"\"\"Initialize the transition table.\"\"\"\n        self._transitions = {}\n        T = TCPState\n        E = TCPEvent\n        \n        # Server setup\n        self._transitions[(T.CLOSED, E.PASSIVE_OPEN)] = T.LISTEN\n        self._transitions[(T.LISTEN, E.RECV_SYN)] = T.SYN_RCVD\n        self._transitions[(T.SYN_RCVD, E.RECV_ACK)] = T.ESTABLISHED\n        \n        # Client setup\n        self._transitions[(T.CLOSED, E.ACTIVE_OPEN)] = T.SYN_SENT\n        self._transitions[(T.SYN_SENT, E.RECV_SYN_ACK)] = T.ESTABLISHED\n        \n        # Data transfer -> teardown\n        self._transitions[(T.ESTABLISHED, E.CLOSE)] = T.FIN_WAIT_1\n        self._transitions[(T.ESTABLISHED, E.RECV_FIN)] = T.CLOSE_WAIT\n        self._transitions[(T.FIN_WAIT_1, E.RECV_ACK)] = T.FIN_WAIT_2\n        self._transitions[(T.FIN_WAIT_1, E.RECV_FIN)] = T.CLOSING\n        self._transitions[(T.FIN_WAIT_2, E.RECV_FIN)] = T.TIME_WAIT\n        self._transitions[(T.CLOSE_WAIT, E.CLOSE)] = T.LAST_ACK\n        self._transitions[(T.CLOSING, E.RECV_ACK)] = T.TIME_WAIT\n        self._transitions[(T.LAST_ACK, E.RECV_ACK)] = T.CLOSED\n        self._transitions[(T.TIME_WAIT, E.TIMEOUT)] = T.CLOSED\n    \n    def process_event(self, event):\n        \"\"\"\n        Process a TCP event, transitioning to next state.\n        Edge case: returns False for invalid transitions.\n        \"\"\"\n        key = (self.state, event)\n        if key in self._transitions:\n            next_state = self._transitions[key]\n            print(f\"{self.state.name} --({event.name})--> {next_state.name}\")\n            self.state = next_state\n            return True\n        print(f\"INVALID: {self.state.name} + {event.name}\")\n        return False\n    \n    def reset(self):\n        self.state = TCPState.CLOSED\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "State diagram dry run — client connects and disconnects:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Before"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "After"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACTIVE_OPEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN_SENT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RECV_SYN_ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN_SENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ESTABLISHED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ESTABLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIN_WAIT_1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RECV_ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIN_WAIT_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIN_WAIT_2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RECV_FIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIN_WAIT_2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIME_WAIT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIMEOUT (2×MSL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIME_WAIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSED"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge cases in TCP state machine:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SYN flood"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker sends many SYNs without completing handshake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN cookies: encode ISN as hash of tuple; no state allocated until ACK received"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Half-open connection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client crashes after SYN_SENT; server stuck in SYN_RCVD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN_RCVD timeout (typically 75 seconds); retransmits SYN+ACK up to 3 times"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Simultaneous open"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both sides send SYN simultaneously"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both enter SYN_SENT, then SYN_RCVD upon receiving each other's SYN; ESTABLISHED after mutual ACK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Simultaneous close"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both sides send FIN simultaneously"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both enter FIN_WAIT_1, then CLOSING upon receiving FIN; TIME_WAIT after ACK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reset (RST)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection terminated abruptly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immediate transition to CLOSED; any outstanding data discarded"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Spurious retransmission"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delayed ACK from previous connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequence number in TIME_WAIT window; handled by PAWS (Protection Against Wrapped Sequences)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-tcpconnectionstatemachine",
      children: "TypeScript Implementation: TCPConnectionStateMachine"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "enum TCPState {\n  CLOSED, LISTEN, SYN_SENT, SYN_RCVD, ESTABLISHED,\n  FIN_WAIT_1, FIN_WAIT_2, CLOSE_WAIT, CLOSING, LAST_ACK, TIME_WAIT\n}\n\nenum TCPEvent {\n  PASSIVE_OPEN, ACTIVE_OPEN, RECV_SYN, RECV_SYN_ACK, RECV_ACK,\n  CLOSE, RECV_FIN, TIMEOUT\n}\n\nclass TCPConnectionStateMachine {\n  private state: TCPState = TCPState.CLOSED;\n\n  private transitions: Map<string, TCPState> = new Map([\n    [`${TCPState.CLOSED},${TCPEvent.PASSIVE_OPEN}`, TCPState.LISTEN],\n    [`${TCPState.CLOSED},${TCPEvent.ACTIVE_OPEN}`, TCPState.SYN_SENT],\n    [`${TCPState.LISTEN},${TCPEvent.RECV_SYN}`, TCPState.SYN_RCVD],\n    [`${TCPState.SYN_SENT},${TCPEvent.RECV_SYN_ACK}`, TCPState.ESTABLISHED],\n    [`${TCPState.SYN_SENT},${TCPEvent.RECV_SYN}`, TCPState.SYN_RCVD],\n    [`${TCPState.SYN_RCVD},${TCPEvent.RECV_ACK}`, TCPState.ESTABLISHED],\n    [`${TCPState.SYN_RCVD},${TCPEvent.CLOSE}`, TCPState.FIN_WAIT_1],\n    [`${TCPState.ESTABLISHED},${TCPEvent.CLOSE}`, TCPState.FIN_WAIT_1],\n    [`${TCPState.ESTABLISHED},${TCPEvent.RECV_FIN}`, TCPState.CLOSE_WAIT],\n    [`${TCPState.FIN_WAIT_1},${TCPEvent.RECV_ACK}`, TCPState.FIN_WAIT_2],\n    [`${TCPState.FIN_WAIT_1},${TCPEvent.RECV_FIN}`, TCPState.CLOSING],\n    [`${TCPState.FIN_WAIT_2},${TCPEvent.RECV_FIN}`, TCPState.TIME_WAIT],\n    [`${TCPState.CLOSE_WAIT},${TCPEvent.CLOSE}`, TCPState.LAST_ACK],\n    [`${TCPState.CLOSING},${TCPEvent.RECV_ACK}`, TCPState.TIME_WAIT],\n    [`${TCPState.LAST_ACK},${TCPEvent.RECV_ACK}`, TCPState.CLOSED],\n    [`${TCPState.TIME_WAIT},${TCPEvent.TIMEOUT}`, TCPState.CLOSED],\n  ]);\n\n  processEvent(event: TCPEvent): boolean {\n    const key = `${this.state},${event}`;\n    const next = this.transitions.get(key);\n    if (next !== undefined) {\n      console.log(`${TCPState[this.state]} --(${TCPEvent[event]})--> ${TCPState[next]}`);\n      this.state = next;\n      return true;\n    }\n    console.log(`INVALID: ${TCPState[this.state]} + ${TCPEvent[event]}`);\n    return false;\n  }\n\n  getState(): TCPState { return this.state; }\n  reset(): void { this.state = TCPState.CLOSED; }\n}\n// Usage:\n// const tcpFSM = new TCPConnectionStateMachine();\n// tcpFSM.processEvent(TCPEvent.ACTIVE_OPEN);    // CLOSED -> SYN_SENT\n// tcpFSM.processEvent(TCPEvent.RECV_SYN_ACK);   // SYN_SENT -> ESTABLISHED\n// tcpFSM.processEvent(TCPEvent.CLOSE);           // ESTABLISHED -> FIN_WAIT_1\n// tcpFSM.processEvent(TCPEvent.RECV_ACK);        // FIN_WAIT_1 -> FIN_WAIT_2\n// tcpFSM.processEvent(TCPEvent.RECV_FIN);        // FIN_WAIT_2 -> TIME_WAIT\n// tcpFSM.processEvent(TCPEvent.TIMEOUT);         // TIME_WAIT -> CLOSED\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "835-tcp-flow-control--sliding-window",
      children: "8.3.5 TCP Flow Control — Sliding Window"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A factory (sender) ships products to a warehouse (receiver). The warehouse sends back a card saying \"I have room for 100 more boxes\" (window advertisement). The factory keeps shipping until the warehouse says \"I'm full — stop\" (zero window). When the warehouse clears space, it sends \"I now have room for 50 boxes\" (window update)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sliding window concept:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The receiver advertises a window size (rwnd) in every segment, indicating how many bytes of buffer space are available. The sender must not send more than this amount without receiving a new ACK."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sender side:\n      |<--------- Advertised Window (rwnd) --------->|\n      |<--- Sent & ---->|<-- Can send -->|<-- Can't send yet -->|\n      |   ACKed         |                |                      |\n      |                 |                |                      |\n      1                 a                b                      c\n                        ^                ^\n                    LastByteSent   LastByteAcked + rwnd\n                    = LastByteAcked\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Receiver advertises ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rwnd = RecvBufferSize - (LastByteRead - LastByteRcvd)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Sender maintains ", (0,jsx_runtime.jsx)(_components.code, {
          children: "LastByteSent"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "LastByteAcked"
        }), ". Effective window = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rwnd - (LastByteSent - LastByteAcked)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sender transmits segments until the window is full."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Receiver reads data from buffer, freeing space, and sends new ACK with updated ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rwnd"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rwnd = 0"
        }), ", the sender stops transmitting and enters persist mode (periodically probes with 1-byte segments)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry run trace — sliding window with rwnd = 4000 bytes, MSS = 1000 bytes:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Seq #"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LastByteAcked"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LastByteSent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "rwnd (from ACK)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effective Window"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can send 4 segments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send seg1 (bytes 1-1000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can send 3 more"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send seg2 (bytes 1001-2000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can send 2 more"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send seg3 (bytes 2001-3000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can send 1 more"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send seg4 (bytes 3001-4000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Window full, stop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recv ACK for up to 2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Still full (app hasn't read)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recv ACK for up to 3000, rwnd=3000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can send 2 new segments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send seg5 (bytes 4001-5000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can send 1 more"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recv ACK for up to 5000, rwnd=5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App read all; full window"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sliding window simulator (Python):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SlidingWindow:\n    \"\"\"\n    Simulates TCP sliding window flow control.\n    \n    Complexity:\n    - Send: O(1) — just checks window bounds.\n    - Receive ACK: O(W) worst-case where W = segments ACKed cumulatively.\n    - WHY O(W)? Cumulative ACK may advance window by many segments at once.\n    - Space: O(W) for outstanding segment buffer.\n    \"\"\"\n    \n    def __init__(self, initial_window=4000, mss=1000):\n        self.window = initial_window  # Advertised window (rwnd)\n        self.mss = mss\n        self.last_byte_acked = 0\n        self.last_byte_sent = 0\n        self.outstanding = {}  # seq -> data for retransmission\n        self.send_buffer = []  # Data to send\n    \n    def can_send(self):\n        \"\"\"Check if window allows sending a new segment.\"\"\"\n        return (self.last_byte_sent - self.last_byte_acked) < self.window\n    \n    def send_segment(self, data):\n        \"\"\"Send one segment if window permits.\"\"\"\n        if not self.can_send():\n            print(f\"Window full. Cannot send. \"\n                  f\"Sent={self.last_byte_sent - self.last_byte_acked}, \"\n                  f\"Window={self.window}\")\n            return False\n        \n        seq_num = self.last_byte_sent\n        self.outstanding[seq_num] = data\n        self.last_byte_sent += len(data)\n        print(f\"Sent segment: seq={seq_num}, len={len(data)}, \"\n              f\"window_used={self.last_byte_sent - self.last_byte_acked}/{self.window}\")\n        return True\n    \n    def receive_ack(self, ack_num, new_window):\n        \"\"\"\n        Process cumulative ACK.\n        Edge case: ACK for data not yet sent (duplicate/forged) — ignored.\n        \"\"\"\n        if ack_num > self.last_byte_sent:\n            print(f\"Invalid ACK: {ack_num} > LastByteSent {self.last_byte_sent}\")\n            return\n        \n        # Remove all acknowledged segments from outstanding buffer\n        seqs_to_remove = [s for s in self.outstanding if s < ack_num]\n        for seq in seqs_to_remove:\n            del self.outstanding[seq]\n        \n        self.last_byte_acked = max(self.last_byte_acked, ack_num)\n        self.window = new_window\n        used = self.last_byte_sent - self.last_byte_acked\n        print(f\"ACK {ack_num}: window adjusted to {new_window}, \"\n              f\"used={used}, available={new_window - used}\")\n    \n    def handle_zero_window(self):\n        \"\"\"\n        Zero-window persist handling.\n        Sender probes with 1-byte segments periodically.\n        \"\"\"\n        print(\"Zero window detected. Entering persist mode.\")\n        probe_interval = 5.0  # Start with 5 seconds\n        for probe_num in range(4):\n            print(f\"Probe {probe_num + 1}: sending 1-byte probe \"\n                  f\"(interval={probe_interval}s)\")\n            probe_interval = min(probe_interval * 2, 60)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sliding window simulator (C++):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <cstdint>\n#include <unordered_map>\n#include <vector>\n#include <algorithm>\n#include <iostream>\n\n/**\n * TCP Sliding Window Simulator.\n * \n * Complexity:\n * - send_data(): O(1) — bounds check only.\n * - receive_ack(): O(k) where k = acknowledged segments cleaned.\n * - WHY not O(W)? std::unordered_map erase by iterator is O(1) average.\n */\nclass SlidingWindow {\nprivate:\n    uint32_t window_size;\n    uint32_t mss;\n    uint32_t last_byte_acked;\n    uint32_t last_byte_sent;\n    std::unordered_map<uint32_t, std::vector<char>> outstanding;\n\npublic:\n    SlidingWindow(uint32_t initial_window = 4000, uint32_t mss = 1000)\n        : window_size(initial_window), mss(mss),\n          last_byte_acked(0), last_byte_sent(0) {}\n\n    bool can_send() const {\n        return (last_byte_sent - last_byte_acked) < window_size;\n    }\n\n    bool send_segment(const std::vector<char>& data) {\n        if (!can_send()) {\n            std::cout << \"Window full (\" \n                      << (last_byte_sent - last_byte_acked) \n                      << \"/\" << window_size << \")\" << std::endl;\n            return false;\n        }\n        outstanding[last_byte_sent] = data;\n        last_byte_sent += data.size();\n        std::cout << \"Sent seq=\" << last_byte_sent - data.size()\n                  << \" len=\" << data.size() << std::endl;\n        return true;\n    }\n\n    void receive_ack(uint32_t ack_num, uint32_t new_window) {\n        if (ack_num > last_byte_sent) return;  // Edge case: invalid ACK\n        \n        // Remove acknowledged segments\n        for (auto it = outstanding.begin(); it != outstanding.end(); ) {\n            if (it->first < ack_num) {\n                it = outstanding.erase(it);\n            } else {\n                ++it;\n            }\n        }\n        last_byte_acked = std::max(last_byte_acked, ack_num);\n        window_size = new_window;\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "836-flow-control-vs-congestion-control",
      children: "8.3.6 Flow Control vs Congestion Control"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Flow Control"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Congestion Control"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End-to-end (receiver → sender)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network-wide (router → sender)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Problem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receiver overwhelmed by sender's rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routers overwhelmed by aggregate traffic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mechanism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advertised window (rwnd)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Congestion window (cwnd), AIMD, slow start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Signaled by"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Receiver sets ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rwnd"
            }), " in every segment"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packet loss (dupACKs, timeout) or ECN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Window used"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "min(cwnd, rwnd)"
            }), " — effective send window"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cwnd is the congestion component"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Responsiveness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reacts immediately per ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reacts slowly (AIMD: additive increase, multiplicative decrease)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-world analogy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Factory stops shipping when warehouse full\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Factory slows shipping during traffic jam on highways\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flow control: O(1) per ACK — simple min() comparison."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Congestion control: O(1) per ACK/loss event — window adjustment is arithmetic."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WHY O(1)?"
        }), " Both mechanisms only update a window variable per event; no per-packet processing beyond the update rule."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "837-tcp-timers",
      children: "8.3.7 TCP Timers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TCP uses multiple timers for reliable operation:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Timer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Duration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expiry Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Retransmission Timer (RTO)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detect lost segments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Based on measured RTT (typically 200ms-120s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retransmit earliest unACKed segment; exponential backoff"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Persist Timer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevent deadlock when rwnd=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start 5s, double up to 60s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send 1-byte window probe"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Keepalive Timer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detect dead peer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typically 2 hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send keepalive probe; if no response, close connection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TIME_WAIT Timer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wait after connection close"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2×MSL (typically 60s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transition from TIME_WAIT to CLOSED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delayed ACK Timer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wait to piggyback ACK on data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typically 200ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send standalone ACK"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RTO calculation (Jacobson's algorithm):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Srtt = (1 - α) × Srtt + α × RTT_sample    // α = 1/8\nRttvar = (1 - β) × Rttvar + β × |Srtt - RTT_sample|  // β = 1/4\nRTO = Srtt + 4 × Rttvar\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode for retransmission:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function retransmission_timeout():\n    segment = retransmit_queue.earliest_unacked()\n    if segment is null:\n        return  // Nothing to retransmit\n    \n    send_segment(segment)\n    rto = min(rto * 2, MAX_RTO)    // Exponential backoff\n    retransmit_count[segment] += 1\n    \n    if retransmit_count[segment] > MAX_RETRIES:\n        abort_connection(\"Too many retransmissions\")\n    else:\n        start_timer(segment, rto)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "838-tcp-options-expanded",
      children: "8.3.8 TCP Options (Expanded)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Option"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Length"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "End of Option List (EOL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marks end of options"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No Operation (NOP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Padding for alignment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum Segment Size (MSS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Largest data chunk sender can receive (e.g., 1460 for Ethernet)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Window Scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shift factor (0-14) for window field; enables 1GB window"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Selective ACK Permitted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SACK capability negotiation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 × N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reports non-contiguous blocks received"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Timestamp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RTT measurement + PAWS (Protection Against Wrapped Sequences)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User Timeout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Abort connection if data unACKed for specified time"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maximum Segment Size (MSS) derivation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ethernet MTU = 1500 bytes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IP header (20 bytes) + TCP header (20 bytes) = 40 bytes overhead"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["MSS = 1500 - 40 = ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "1460 bytes"
        }), " for typical Ethernet TCP connections"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "839-tcp-reliability-mechanisms--detailed",
      children: "8.3.9 TCP Reliability Mechanisms — Detailed"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TCP achieves reliability through five cooperating mechanisms:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mechanism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How It Works"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Failure Mode"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sequence numbers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every byte has a 32-bit sequence number. Receiver tracks expected SEQ and flags gaps."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequence number wrap-around on high-speed links (mitigated by PAWS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cumulative ACKs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receiver ACKs the highest contiguous byte received. Sender knows all bytes up to ACK number are delivered."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A single lost ACK is harmless. Lost data triggers duplicate ACKs."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Retransmission timer (RTO)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sender starts timer for each segment. If no ACK within RTO, segment is retransmitted."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spurious retransmission on delayed ACK; exponential backoff to 120s max"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fast retransmit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After 3 duplicate ACKs, sender retransmits lost segment before RTO expiry."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spurious fast retransmit on reordered packets (ACK is for same byte)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fast recovery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After fast retransmit, sender halves cwnd and enters congestion avoidance, not slow start."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance degradation if multiple losses in same window"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Retransmission scenarios illustrated:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Scenario A: Single segment loss (RTO recovery)\nSender:  |1000|2000|3000|4000| X LOST X |--- RTO ---|2000|5000|6000|\nReceiver:|ACK2000|ACK2000(dup)|ACK2000(dup)|ACK2000(dup)|  X   |ACK6000|\n                                                                     ^\n                                                            Cumulative ACK\n                                                            \nScenario B: Single segment loss (fast retransmit)\nSender:  |1000|2000|3000|4000| 3 dupACKs trigger fast retransmit\nReceiver:|ACK2000|ACK2000|ACK2000|ACK2000|  <-- 3 duplicate ACKs\n         (seg3 arrives)  (seg4 arrives)  (3rd dup triggers retransmit)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity analysis of TCP reliability:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Normal case (no loss):"
        }), " O(1) per segment — generate ACK, update SND.NXT."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Packet loss recovery:"
        }), " O(W) where W = outstanding window size (due to iterating retransmission queue)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(W × MSS) for retransmission buffer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8310-tcp-performance-overhead-analysis",
      children: "8.3.10 TCP Performance Overhead Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Per-segment overhead (typical Ethernet):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bytes"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Percentage (for 1460B payload)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TCP header (no options)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.35%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TCP header (with timestamps)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.14%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IP header (IPv4, no options)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.35%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ethernet header (with CRC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.75%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "66-78"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4.3-5.1%"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Payload (MSS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1460"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "94.9-95.7%"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bandwidth vs throughput for small messages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Message size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TCP overhead"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actual throughput (on 1 Gbps link)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Utilization"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1 byte"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "78 bytes (98.7% overhead)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~12.8 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.3%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "78 bytes (43.8% overhead)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~562 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "56.2%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "500 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "78 bytes (13.5% overhead)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~865 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "86.5%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1460 bytes (MSS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "78 bytes (5.1% overhead)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~950 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "95.0%"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " Small messages under TCP are extremely inefficient. This is why Nagle's algorithm exists (to coalesce small writes) and why message-oriented protocols (HTTP/2 with framing, QUIC) are more efficient for multiplexed small requests."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8311-tcp-timestamp-options-and-rtt-measurement",
      children: "8.3.11 TCP Timestamp Options and RTT Measurement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The TCP Timestamp option (TSopt) serves two purposes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. RTT measurement:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sender: TSval = 12345 (current time in ms)  \nReceiver: copies TSval to TSecr in ACK\nSender receives ACK: RTT_sample = current_time - TSecr\n\n// Each ACK gives a fresh RTT sample without ambiguity\n// (Even with delayed ACKs, timestamp disambiguates which segment caused the ACK)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. PAWS (Protection Against Wrapped Sequences):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "On high-speed links, the 32-bit sequence number wraps in seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PAWS uses the 32-bit timestamp value as an extended sequence number."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If a segment's timestamp is older than the last received timestamp, it's discarded."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Requirement:"
        }), " Timestamps must increase monotonically per connection."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Timestamp format:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Kind=8, Length=10\n+-------+-------+----------------+----------------+\n| Kind  |  Len  |    TS Value    |  TS Echo Reply |\n| (1B)  | (1B)  |     (4B)       |      (4B)       |\n+-------+-------+----------------+----------------+\nTotal: 10 bytes (2 bytes kind+len + 8 bytes timestamps)\nAdded to TCP Options, making base header 20+10=30 bytes minimum\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "84-sctp--stream-control-transmission-protocol",
      children: "8.4 SCTP — Stream Control Transmission Protocol"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A shipping company has multiple independent conveyor belts (streams) between two warehouses. If one belt jams, the others keep running. Each package (message) is tracked individually."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "841-sctp-overview",
      children: "8.4.1 SCTP Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SCTP (RFC 4960) is a transport protocol designed for telecommunication signaling (SS7 over IP). It combines features of TCP and UDP:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SCTP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "UDP"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Association-oriented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection-oriented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connectionless"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delivery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Message-oriented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Byte-stream oriented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Message-oriented"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-stream ordered/unordered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total byte ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (independent streams)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (single stream)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-homing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (multiple IPs per endpoint)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Head-of-line blocking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (per stream)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Selective ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (built-in)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (optional)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protection against SYN floods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (4-way handshake with cookie)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (SYN cookies optional)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "842-sctp-association-setup-4-way-handshake",
      children: "8.4.2 SCTP Association Setup (4-Way Handshake)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CLIENT                          SERVER\n  |                               |\n  |  --- INIT ----------------->  |\n  |  <-- INIT-ACK (with cookie) -  |\n  |  --- COOKIE-ECHO ---------->  |\n  |  <-- COOKIE-ACK ------------  |\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The SCTP 4-way handshake protects against SYN flood attacks by using a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "state cookie"
      }), ". The server does not allocate resources until it receives the COOKIE-ECHO."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "843-sctp-multi-homing",
      children: "8.4.3 SCTP Multi-Homing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SCTP endpoints can be associated with multiple IP addresses. If the primary path fails, data is automatically redirected to an alternate path without application involvement."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  +-----------+     Path 1 (primary)     +-----------+\n  | SCTP      |==========================| SCTP      |\n  | Endpoint A|     Path 2 (backup)      | Endpoint B|\n  | (IP1, IP2)|--------------------------| (IP3, IP4)|\n  +-----------+                          +-----------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "844-sctp-vs-tcp-vs-udp-comparison",
      children: "8.4.4 SCTP vs TCP vs UDP Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SCTP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "UDP"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Header size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 bytes (min)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 bytes (min)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes (fixed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Connection setup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-way (INIT/INIT-ACK/COOKIE-ECHO/COOKIE-ACK)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-way (SYN/SYN-ACK/ACK)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data boundary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Message-preserving"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Byte stream (no boundaries)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Message-preserving"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ordering"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-stream selective"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-order delivery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No ordering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Congestion control"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Similar to TCP (RFC 4960)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIMD + variants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flow control"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-association (similar to TCP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multi-homing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in (multi-homing at transport)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (uses IP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multi-streaming"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (independent streams inside one association)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HoL blocking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial reliability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional (PR-SCTP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Primary use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Telecom (SS7), WebRTC (SCTP over DTLS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General reliable data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time, streaming"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "85-quic--quick-udp-internet-connections",
      children: "8.5 QUIC — Quick UDP Internet Connections"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " QUIC is like starting a secure conversation by already knowing the other person's public key. You can send a secret message immediately (0-RTT) rather than going through introductions and security checks first."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "851-quic-overview",
      children: "8.5.1 QUIC Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "QUIC (RFC 9000) is a transport protocol developed by Google, now standardized by IETF. It runs over UDP and provides:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0-RTT handshake"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client can send data immediately on repeat connections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1-RTT handshake"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial connection requires only 1 round trip (vs 2-3 for TCP+TLS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Built-in TLS 1.3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption is mandatory, not optional"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Connection migration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Survives IP address changes (mobile handoff)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multi-streaming"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No head-of-line blocking between streams"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom congestion control"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pluggable CC at application level"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "852-quic-vs-tcp-comparison",
      children: "8.5.2 QUIC vs TCP Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TCP + TLS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "QUIC"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Crypto handshake"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate TLS handshake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-2 RTT extra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in, 1 RTT (0 RTT repeat)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total setup time (new)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 RTT (SYN, SYN-ACK, ACK + TLS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-3 RTT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 RTT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total setup time (repeat)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 RTT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 RTT (session resumption)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Head-of-line blocking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (single stream)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (independent streams)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Connection migration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Breaks on IP change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Breaks on IP change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seamless (connection ID based)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Encryption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (optional TLS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mandatory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mandatory (always on)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deployment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS kernel stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS kernel stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-space library"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Packet format"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Byte stream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Byte stream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Framed (packet-based)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transport protocol"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP (IP proto 6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP (IP proto 6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP (IP proto 17)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "853-quic-connection-establishment",
      children: "8.5.3 QUIC Connection Establishment"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "QUIC Client (0-RTT):\n   |  --- Initial + Crypto (ClientHello) ---> |\n   |  <-- Initial + Crypto (ServerHello, ...)  |\n   |  <-- Handshake + 1-RTT data (early) ----- |\n   |  --- 1-RTT data ----------------------->  |\n\nQUIC Client (1-RTT — first connection):\n   |  --- Initial + Crypto (ClientHello) --->  |  1 RTT\n   |  <-- Initial + Crypto (ServerHello, ...)   |\n   |  ============= DATA CAN FLOW ===========> |\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "854-quic-connection-migration",
      children: "8.5.4 QUIC Connection Migration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["QUIC identifies connections by a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Connection ID"
      }), " (not IP + port tuple like TCP). When a mobile client switches from WiFi to cellular:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client's IP address changes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client sends packets with the same Connection ID from new IP."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server recognizes the Connection ID and continues the connection."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No re-handshake needed. Zero interruption."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TCP:  src=(192.168.1.5:45000), dst=(10.0.0.1:443)\n      // WiFi disconnects, switches to cellular\n      New connection required: src=(10.0.1.5:47000), dst=(10.0.0.1:443)\n\nQUIC: Connection ID = 0xABCD1234, any IP any port\n      // WiFi disconnects, switches to cellular\n      Same Connection ID, different IP — connection continues\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "855-quic-packet-format",
      children: "8.5.5 QUIC Packet Format"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["QUIC packets have a variable-length header. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Long Header"
      }), " is used during handshake; the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Short Header"
      }), " is used after connection establishment."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "QUIC Short Header (1-RTT packets):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " 0  1  2  3  4  5  6  7\n+-+-+-+-+-+-+-+-+-+-+-+-+\n|0|1|S| Res |   Key Phase  |\n+-+-+-+-+-+-+-+-+-+-+-+-+\n|         Destination Connection ID (variable)       |\n+-+-+-+-+-+-+-+-+-+-+-+-+\n|                   Packet Number (variable)         |\n+-+-+-+-+-+-+-+-+-+-+-+-+\n|                      Payload ...                   |\n+-+-+-+-+-+-+-+-+-+-+-+-+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "QUIC Long Header (Initial/Handshake/0-RTT):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " 0  1  2  3  4  5  6  7\n+-+-+-+-+-+-+-+-+-+-+-+-+\n|1|  Type  |  Res  |   |\n+-+-+-+-+-+-+-+-+-+-+-+-+\n|          Version (32) |\n+-+-+-+-+-+-+-+-+-+-+-+-+\n|   Destination Connection ID Length (8)   |\n+-+-+-+-+-+-+-+-+-+-+-+-+\n|       Destination Connection ID (0-2048) |\n+-+-+-+-+-+-+-+-+-+-+-+-+\n|   Source Connection ID Length (8)        |\n+-+-+-+-+-+-+-+-+-+-+-+-+\n|       Source Connection ID (0-2048)      |\n+-+-+-+-+-+-+-+-+-+-+-+-+\n|          Packet Number (variable)        |\n+-+-+-+-+-+-+-+-+-+-+-+-+\n|                      Payload ...         |\n+-+-+-+-+-+-+-+-+-+-+-+-+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "856-quic-applications",
      children: "8.5.6 QUIC Applications"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HTTP/3:"
        }), " Primary use case. Major websites (Google, YouTube, Facebook, Cloudflare) use QUIC for HTTP/3."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Google's internal traffic:"
        }), " gRPC, YouTube, Search."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Streaming:"
        }), " Netflix, YouTube use QUIC for video delivery."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gaming:"
        }), " Low-latency transport with connection migration."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "86-tcp-vs-udp--comprehensive-comparison",
      children: "8.6 TCP vs UDP — Comprehensive Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "UDP"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Full name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transmission Control Protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User Datagram Protocol"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Connection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection-oriented (3-way handshake)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connectionless"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reliability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reliable (ACK + retransmission)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unreliable (no ACK)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ordering"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-order delivery (sequence numbers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No ordering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Header size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20-60 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes fixed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flow control"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sliding window (rwnd)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Congestion control"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIMD, slow start, fast recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Error detection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mandatory checksum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional checksum (IPv4)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data boundary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Byte stream (no message boundary)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Message boundary preserved"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Retransmission"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic (RTO-based)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Duplex"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-duplex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-duplex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Broadcast"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multicast"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use cases"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP, SMTP, SSH, FTP, databases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS, VoIP, DHCP, SNMP, games, QUIC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (overhead)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster (no overhead)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Latency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (handshake, ACK wait)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (send and forget)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When to choose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data integrity matters more than speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Speed matters, loss is tolerable"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "87-ports-and-sockets",
      children: "8.7 Ports and Sockets"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "871-port-number-ranges",
      children: "8.7.1 Port Number Ranges"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TCP and UDP use 16-bit port numbers (0-65535) to identify application processes:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Range"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0-1023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Well-known ports"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reserved for standard services. Requires root/administrator privileges to bind."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1024-49151"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Registered ports"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assigned by IANA for vendor-specific applications."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "49152-65535"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dynamic/Private ports"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used for client-side ephemeral port allocation by OS."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "872-common-port-numbers",
      children: "8.7.2 Common Port Numbers"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Port"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Transport"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20, 21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File Transfer Protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secure Shell"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Telnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote terminal (unencrypted)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email sending"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain Name System"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP/UDP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "67, 68"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DHCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic Host Configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web (unencrypted)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "110"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POP3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "143"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "161"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SNMP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "443"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web (TLS encrypted)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "993"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAP over TLS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3389"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote Desktop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "443 (UDP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QUIC/HTTP/3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web (QUIC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "873-connection-table-internals",
      children: "8.7.3 Connection Table Internals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The OS maintains a connection table (or hash table) for active TCP connections. Each entry contains:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "4-tuple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(src_ip, src_port, dst_ip, dst_port)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 byte"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current TCP state (CLOSED=0 through TIME_WAIT=10)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Send Sequence Variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SND.UNA, SND.NXT, SND.WND"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Receive Sequence Variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RCV.NXT, RCV.WND, RCV.UP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Timers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RTO timer, persist timer, keepalive timer, delayed ACK timer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send buffer, receive buffer, reorder buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MSS, window scale, SACK permitted, timestamp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total per connection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "~80 bytes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel memory for each established TCP connection"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity analysis of connection table:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lookup: O(1) average via hash on 4-tuple."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Insert/Delete: O(1) average."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Space: O(N) where N = number of active connections."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WHY hash table?"
        }), " TCP stack must demultiplex every incoming segment to the correct connection. Hash lookup on the 4-tuple gives constant-time access regardless of total connections. Linux uses a dynamic hash table with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tcp_hashinfo"
        }), " scaling."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "874-sockets",
      children: "8.7.4 Sockets"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "socket"
      }), " is the interface between the application layer and the transport layer. A TCP socket is uniquely identified by a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "4-tuple"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Socket = (Source IP, Source Port, Destination IP, Destination Port)\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source IP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source Port"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dest IP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dest Port"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Browser tab 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "93.184.216.34"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "443"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Browser tab 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "142.250.80.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "443"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSH client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.0.0.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Even when multiple clients connect to the same server port, each connection has a unique 4-tuple, allowing the TCP stack to demultiplex correctly."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-portmanager",
      children: "TypeScript Implementation: PortManager"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Protocol = 'TCP' | 'UDP';\n\ninterface PortAllocation {\n  port: number;\n  protocol: Protocol;\n  process: string;\n  pid: number;\n}\n\nclass PortManager {\n  private allocations: Map<string, PortAllocation> = new Map();\n  private static readonly WELL_KNOWN_END = 1023;\n  private static readonly REGISTERED_END = 49151;\n  private static readonly DYNAMIC_START = 49152;\n\n  static getRange(port: number): string {\n    if (port <= PortManager.WELL_KNOWN_END) return 'Well-known';\n    if (port <= PortManager.REGISTERED_END) return 'Registered';\n    return 'Dynamic/Private';\n  }\n\n  allocate(protocol: Protocol, port: number, process: string, pid: number): boolean {\n    const key = `${protocol}:${port}`;\n    if (this.allocations.has(key)) return false;\n    if (port < 0 || port > 65535) return false;\n    if (port <= PortManager.WELL_KNOWN_END && process !== 'SYSTEM') return false;\n    this.allocations.set(key, { port, protocol, process, pid });\n    return true;\n  }\n\n  release(protocol: Protocol, port: number): boolean {\n    return this.allocations.delete(`${protocol}:${port}`);\n  }\n\n  getEphemeralPort(protocol: Protocol, pid: number): number {\n    for (let p = PortManager.DYNAMIC_START; p <= 65535; p++) {\n      if (!this.allocations.has(`${protocol}:${p}`)) {\n        this.allocate(protocol, p, `ephemeral-${pid}`, pid);\n        return p;\n      }\n    }\n    throw new Error('No ephemeral ports available');\n  }\n\n  listAllocations(): PortAllocation[] {\n    return Array.from(this.allocations.values());\n  }\n\n  findAvailable(protocol: Protocol, preferred: number): number {\n    if (!this.allocations.has(`${protocol}:${preferred}`)) return preferred;\n    for (let p = preferred + 1; p <= PortManager.REGISTERED_END; p++) {\n      if (!this.allocations.has(`${protocol}:${p}`)) return p;\n    }\n    return this.getEphemeralPort(protocol, 0);\n  }\n}\n// Usage:\n// const pm = new PortManager();\n// pm.allocate('TCP', 80, 'httpd', 1234);\n// pm.allocate('UDP', 53, 'unbound', 5678);\n// const ephem = pm.getEphemeralPort('TCP', 9999);\n// console.log(`Ephemeral port assigned: ${ephem}`); // e.g., 49152\n// console.log(`Port 80 range: ${PortManager.getRange(80)}`); // Well-known\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "88-interview-corner",
      children: "8.8 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-how-does-a-server-mitigate-syn-flood-attacks",
      children: "Q1: How does a server mitigate SYN flood attacks?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SYN flood"
      }), " is a DoS attack where the attacker sends many SYN segments but never completes the handshake. The server exhausts memory by allocating resources for half-open connections."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mitigations:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How it works"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effectiveness"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "SYN cookies"
            }), " (RFC 4987)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Server encodes ISN as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "hash(src_ip, src_port, server_secret)"
            }), "; no state stored until ACK received"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High — built into Linux kernel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SYN backlog tuning"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Increase ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp_max_syn_backlog"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp_synack_retries"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate — delays exhaustion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rate limiting"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Limit SYNs per second per source IP (iptables, nginx ", (0,jsx_runtime.jsx)(_components.code, {
              children: "limit_req"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate — blocks large floods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SYN proxy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse proxy completes handshake with client before proxying to backend"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High — used by Cloudflare, AWS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reduce SYN_RCVD timeout"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Lower ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp_synack_retries"
            }), " to 1-2"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low — reduces window of vulnerability"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SYN cookie logic (simplified):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function syn_cookie_iss(src_ip, src_port, dst_ip, dst_port, server_secret):\n    // Encode in 24-bit ISN: t_mod32 (5 bits) + mss_index (3 bits) + hash (24 bits)\n    t_mod32 = (current_time_in_seconds / 64) % 32\n    hash = HMAC_SHA1(server_secret, src_ip + src_port + dst_ip + dst_port + t_mod32)\n    mss_index = default_mss\n    iss = (t_mod32 << 19) | (mss_index << 16) | (hash & 0xFFFF)\n    return iss\n\nfunction syn_cookie_verify(iss, src_ip, src_port, dst_ip, dst_port, server_secret):\n    t_mod32 = (iss >> 19) & 0x1F\n    expected_hash = HMAC_SHA1(server_secret, src_ip + src_port + dst_ip + dst_port + t_mod32)\n    return (expected_hash & 0xFFFF) == (iss & 0xFFFF)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-why-does-tcp-use-port-numbers-why-16-bits",
      children: "Q2: Why does TCP use port numbers? Why 16 bits?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Port numbers enable process-to-process communication (demultiplexing). The network layer delivers data to the correct host; the transport layer delivers it to the correct process."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "16-bit (0-65535) choice:"
      }), " 65,535 concurrent connections per IP pair is sufficient for practical use. Smaller (8-bit = 255 ports) would be too limiting. Larger (32-bit) would add unnecessary header overhead."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-what-is-the-purpose-of-time_wait",
      children: "Q3: What is the purpose of TIME_WAIT?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TIME_WAIT serves two critical purposes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delayed segment elimination:"
        }), " Ensures any segments still in flight from the closed connection expire (in 2×MSL) before a new connection using the same 4-tuple can be created. Prevents old data from being misinterpreted as new data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Final ACK retransmission:"
        }), " If the server's FIN ACK is lost, the server will retransmit its FIN. TIME_WAIT allows the client to retransmit the final ACK."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why 2×MSL?"
      }), " One MSL for the FIN to reach the server from our side, one MSL for the ACK to reach the server. This bounds the maximum time any segment can survive in the network."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem with TIME_WAIT:"
      }), " On busy servers, many connections in TIME_WAIT exhaust ephemeral ports. Solutions: SO_REUSEADDR socket option, increasing ephemeral port range, or using TCP timestamps (PAWS) to safely reuse tuples sooner."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-explain-nagles-algorithm",
      children: "Q4: Explain Nagle's algorithm."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nagle's algorithm reduces small-packet overhead by combining small outgoing messages into larger segments:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if data_bytes >= MSS OR urgent_data:\n    send()                          // Send immediately\nelse if no outstanding unACKed data:\n    send()                          // Send immediately\nelse:\n    buffer data until ACK arrives   // Nagle: wait and combine\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problems with Nagle:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delayed ACK interaction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small request + delayed ACK + Nagle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "400ms delay (Nagle waits for ACK; delayed ACK waits 200ms for data)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interactive SSH"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each keystroke is a tiny packet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Noticeable lag in remote typing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-time games"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small frequent state updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increased latency"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TCP_NODELAY"
      }), " socket option to disable Nagle's algorithm for latency-sensitive applications."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-happens-during-a-zero-window-condition-how-is-it-resolved",
      children: "Q5: What happens during a zero-window condition? How is it resolved?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Zero-window:"
      }), " Receiver's buffer is full, so it advertises ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rwnd = 0"
      }), ". The sender must stop transmitting."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " The receiver's window update (ACK with nonzero rwnd) could be lost, causing both sides to wait indefinitely — a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "deadlock"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution (Persist Timer):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sender starts persist timer when rwnd = 0."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When timer expires, sender sends a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "window probe"
        }), " (1-byte segment with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "seq = LastByteSent"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Receiver responds with current rwnd (even if still 0)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If nonzero, sender resumes transmission."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Timer doubles each time (5s → 10s → 20s → max 60s)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-can-tcp-and-udp-use-the-same-port-number",
      children: "Q6: Can TCP and UDP use the same port number?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Yes. TCP port 53 and UDP port 53 are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "different namespaces"
      }), ". DNS uses both: TCP 53 for zone transfers, UDP 53 for queries. The protocol field in the IP header distinguishes them."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-what-is-the-tcp-silly-window-syndrome-sws",
      children: "Q7: What is the TCP Silly Window Syndrome (SWS)?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Silly Window Syndrome occurs when the receiver advertises a very small window (e.g., 1 byte), causing the sender to send tiny segments, leading to poor header-to-data ratio."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Receiver-side SWS:"
        }), " Application reads 1 byte at a time from buffer; receiver advertises tiny window increments."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sender-side SWS:"
        }), " Application writes 1 byte at a time; sender transmits tiny segments (exacerbated without Nagle)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Clark's solution (receiver):"
        }), " Don't advertise a new window until it reaches at least ", (0,jsx_runtime.jsx)(_components.code, {
          children: "min(MSS, half of max buffer)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nagle's algorithm (sender):"
        }), " Don't send tiny segments when there is unACKed data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delayed ACK (receiver):"
        }), " Wait up to 200ms to send ACK, allowing more data to arrive and increasing effective window."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SWS avoidance algorithm (receiver-side):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Clark's solution — receiver-side SWS avoidance\nfunction update_window(application_bytes_read, current_buffer):\n    free_space = buffer_total - current_buffer + application_bytes_read\n    \n    // Don't advertise small windows\n    if free_space >= MSS:\n        advertised_window = free_space\n    else:\n        advertised_window = 0  // Wait until meaningful space frees up\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-how-does-tcp-handle-out-of-order-delivery",
      children: "Q8: How does TCP handle out-of-order delivery?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TCP's receiver-side reordering buffer handles out-of-order segments:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sender sends:              [SEQ=1] [SEQ=2001] [SEQ=1001]\nActual arrival order:      [SEQ=1] [SEQ=2001] [SEQ=1001]\nReceiver buffer:           [1-1000]           [2001-3000]\n                                          \nWhen SEQ=1001 arrives:     [1-1000] [1001-2000] [2001-3000]\n                          contiguous block formed → deliver to application\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reordering buffer behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TCP receiver places out-of-order segments in the reordering buffer."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Receiver sends ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "duplicate ACKs"
        }), " (ACK for the last in-order byte, typically 3 dupACKs trigger fast retransmit)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When the missing segment arrives, contiguous data is delivered to the application."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SACK (Selective ACK)"
        }), " allows the receiver to specify exactly which out-of-order blocks were received, enabling the sender to retransmit only truly lost segments."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reordering buffer pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function receive_segment(segment):\n    if segment.seq == expected_seq:\n        deliver_to_application(segment)\n        expected_seq += segment.len\n        \n        // Check reorder buffer for now-contiguous data\n        while buffer.has_seq(expected_seq):\n            buffered = buffer.remove(expected_seq)\n            deliver_to_application(buffered)\n            expected_seq += buffered.len\n    else if segment.seq > expected_seq:\n        // Out-of-order: store in reorder buffer\n        buffer.store(segment)\n        send_dup_ack(expected_seq)  // Duplicate ACK\n    else:\n        // Duplicate — discard\n        discard(segment)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-explain-tcp-fast-open-tfo",
      children: "Q9: Explain TCP Fast Open (TFO)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TCP Fast Open (RFC 7413) reduces the latency of repeat TCP connections by allowing data in the SYN segment."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How TFO works:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "First connection:"
        }), " Normal 3-way handshake. Server sends a TFO cookie (encrypted) to the client."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeat connection:"
        }), " Client includes TFO cookie + data in the SYN segment. Server validates the cookie, passes data to the application, and sends SYN+ACK. The client can send more data immediately."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Without TFO:\n  Client: ----SYN-------->\n  Server: <---SYN+ACK-----\n  Client: ----ACK+DATA--->  // Data only after 1 RTT\n  Server: <---ACK---------\n\nWith TFO:\n  Client: ----SYN+DATA----------->  // Data in first flight!\n  Server: <---SYN+ACK+ACK(data)--\n  Client: ----ACK---------------->  // 0-RTT data delivery\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "TFO benefits:"
      }), " Saves 1 RTT on repeat connections. Critical for page load time (saves 50-200ms per connection)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-what-causes-the-tcp-melting-point-problem",
      children: "Q10: What causes the TCP melting point problem?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "TCP melting point"
      }), " occurs when TCP tunnels through another TCP connection (e.g., VPN over TCP). The outer TCP's retransmissions trigger the inner TCP's congestion control, causing a catastrophic performance collapse."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it happens:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Outer TCP loses a segment due to network congestion."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Outer TCP retransmits — but the inner TCP already ACKed that data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Outer TCP's retransmission duplicates data, confusing RTT estimation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Both TCP layers independently back off, causing throughput to approach zero."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use UDP as the VPN transport (OpenVPN, WireGuard)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use TCP-over-TCP only on lossless links (datacenter)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tunnel TCP over QUIC (which uses UDP)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "89-advanced-tcp-trace-tables",
      children: "8.9 Advanced TCP Trace Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tcp-state-transition-reference",
      children: "TCP State Transition Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Complete transition table from RFC 793:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Current State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Next State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASSIVE_OPEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LISTEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create TCB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACTIVE_OPEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN_SENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send SYN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LISTEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RECV_SYN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN_RCVD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send SYN+ACK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LISTEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Close"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LISTEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SEND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN_SENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send SYN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYN_SENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RECV_SYN+ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ESTABLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send ACK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYN_SENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RECV_SYN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN_RCVD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send SYN+ACK (simultaneous open)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYN_SENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discard TCB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYN_SENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RECV_RST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LISTEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYN_RCVD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RECV_ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ESTABLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection established"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYN_RCVD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIN_WAIT_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send FIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYN_RCVD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RECV_RST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LISTEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Passive close"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ESTABLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIN_WAIT_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send FIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ESTABLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RECV_FIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSE_WAIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send ACK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIN_WAIT_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RECV_ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIN_WAIT_2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIN_WAIT_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RECV_FIN+ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIME_WAIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send ACK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIN_WAIT_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RECV_FIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send ACK (simultaneous close)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIN_WAIT_2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RECV_FIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIME_WAIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send ACK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSE_WAIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LAST_ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send FIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RECV_ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIME_WAIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LAST_ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RECV_ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete TCB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TIME_WAIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIMEOUT (2×MSL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete TCB"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tcp-segment-retransmission-trace",
      children: "TCP Segment Retransmission Trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Scenario: 4 segments sent, segment 2 is lost."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SEQ"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ACK"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Window"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T+0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send seg1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "seg1 (1000 bytes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T+0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send seg2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "seg2 (1000 bytes) — LOST"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T+0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send seg3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "seg3 (1000 bytes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T+0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send seg4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "seg4 (1000 bytes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T+10ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recv ACK for seg1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK for seg1 only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T+10ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send dupACK seg3, seg4 trigger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "seg3 arrives out of order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T+20ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recv ACK for seg1 (dup)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1st duplicate ACK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T+30ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recv ACK for seg1 (dup)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2nd duplicate ACK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T+40ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recv ACK for seg1 (dup)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3rd duplicate ACK → fast retransmit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T+40ms"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Retransmit"
            }), " seg2"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast retransmit triggered"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T+50ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recv ACK for all data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cumulative ACK covers everything"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T+50ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send seg5, seg6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New data after recovery"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tcp-half-close-trace",
      children: "TCP Half-Close Trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The TCP half-close allows one direction to close while the other continues:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CLIENT                                SERVER\n  |                                     |\n  |  ============= DATA ==============>  |  \n  |  ----------- DATA ---------------->  |  Client sends remaining data\n  |  --- FIN (seq=u) ----------------> |  Client half-closes (FIN_WAIT_1)\n  |  <-- ACK (ack=u+1) ---------------  |  Server ACKs FIN (CLOSE_WAIT)\n  |                                     |\n  |  <---- more DATA from server ------  |  Server can still send data!\n  |  <---- more DATA from server ------  |\n  |                                     |\n  |  <-- FIN (seq=v) -----------------  |  Server half-closes (LAST_ACK)\n  |  --- ACK (ack=v+1) --------------> |  Client TIME_WAIT, then CLOSED\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use cases for half-close:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HTTP/1.0:"
        }), " Server closes after response; client can detect end of response."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Unix ", (0,jsx_runtime.jsx)(_components.code, {
            children: "shutdown(SHUT_WR)"
          }), ":"]
        }), " Socket API explicitly supports half-close."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SSH:"
        }), " Can close write direction while still reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "89-applications-in-real-systems",
      children: "8.9 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "891-linux-tcp-stack",
      children: "8.9.1 Linux TCP Stack"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Linux TCP implementation is in the kernel (", (0,jsx_runtime.jsx)(_components.code, {
        children: "net/ipv4/tcp_*.c"
      }), "). Key components:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "File"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TCP input processing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp_input.c"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle incoming segments, ACK processing, window updates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TCP output"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp_output.c"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segment construction, transmission, retransmission"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Congestion control"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp_cong.c"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pluggable CC framework (Cubic, BBR, Reno, Westwood)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TCP timers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp_timer.c"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RTO, delayed ACK, keepalive, persist timers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SYN cookies"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "syncookies.c"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN flood protection"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Linux sysctl tuning for TCP:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# View current TCP parameters\nsysctl net.ipv4.tcp_*\n\n# Common tunings:\nnet.ipv4.tcp_syncookies = 1           # SYN cookies (default: enabled)\nnet.ipv4.tcp_fin_timeout = 30         # TIME_WAIT timeout (seconds)\nnet.ipv4.tcp_tw_reuse = 1             # Reuse TIME_WAIT sockets for outbound\nnet.ipv4.tcp_max_syn_backlog = 4096   # SYN backlog size\nnet.ipv4.tcp_rmem = 4096 131072 6291456  # min, default, max receive buffer\nnet.ipv4.tcp_wmem = 4096 65536 4194304   # min, default, max send buffer\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "892-windows-tcp-auto-tuning",
      children: "8.9.2 Windows TCP Auto-Tuning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Windows uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "TCP auto-tuning"
      }), " (receive window auto-tuning) since Windows Vista/Server 2008. Key features:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dynamic rwnd:"
        }), " The receive window automatically adjusts based on network conditions (RTT, packet loss, bandwidth)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Window scaling:"
        }), " Automatically negotiated via TCP option."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compound TCP (CTCP):"
        }), " Windows' own congestion control algorithm for high-BDP networks."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Check/Configure on Windows:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-powershell",
        children: "# View current settings\nnetsh interface tcp show global\n\n# Disable auto-tuning (not recommended unless troubleshooting)\nnetsh interface tcp set global autotuninglevel=disabled\n\n# Normal auto-tuning\nnetsh interface tcp set global autotuninglevel=normal\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "893-http3-and-quic-deployment",
      children: "8.9.3 HTTP/3 and QUIC Deployment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "HTTP/3"
      }), " (QUIC-based) deployment status:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Platform"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Google"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YouTube, Search, Gmail — QUIC since 2013"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cloudflare"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All plans support HTTP/3 by default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Facebook"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instagram, Facebook app use QUIC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Netflix"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Streaming uses QUIC for video delivery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Apple"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "iOS/macOS networking stack supports QUIC natively"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Nginx"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "listen 443 quic;"
            }), " directive for HTTP/3"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Apache"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mod_http3 available"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "curl"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "curl --http3 https://example.com"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why deploy QUIC?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Faster page loads (0-RTT on repeat connections)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Better mobile experience (connection migration)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No head-of-line blocking."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bypasses middleboxes that interfere with TCP."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Built-in encryption (no separate TLS layer)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Challenges of QUIC:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UDP 443 must be open in firewalls (often rate-limited)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User-space implementation (quiche, msquic, lsquic) — less mature than kernel TCP."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Increased CPU usage per packet vs kernel TCP."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Debugging is harder (encrypted payloads, no tcpdump-friendly format)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "894-tcp-tuning-for-high-performance",
      children: "8.9.4 TCP Tuning for High Performance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tuning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rationale"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "High bandwidth-delay product"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Increase ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp_rmem"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp_wmem"
            }), "; enable window scaling"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long fat networks need large windows to achieve full utilization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Many short connections"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Reduce ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp_fin_timeout"
            }), "; use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp_tw_reuse"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce TIME_WAIT buildup on busy servers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Many concurrent connections"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Increase ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp_max_syn_backlog"
            }), "; tune ", (0,jsx_runtime.jsx)(_components.code, {
              children: "somaxconn"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle connection burst without dropping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interactive traffic (SSH)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TCP_NODELAY"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disable Nagle's algorithm for real-time feel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data-center East-West"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use DCTCP, increase ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp_rmem"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low latency, high throughput within DC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C10K problem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use epoll (Linux), kqueue (BSD), IOCP (Windows)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event-driven I/O scales to 10K+ concurrent connections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HTTP keepalive"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reuse TCP connections for multiple HTTP requests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce handshake overhead, improve page load"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "895-tcp-in-wireshark--packet-analysis",
      children: "8.9.5 TCP in Wireshark — Packet Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key Wireshark filters for transport layer analysis:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// TCP analysis filters\ntcp         // Show all TCP packets\ntcp.port == 443  // HTTPS traffic only\ntcp.flags.syn == 1 && tcp.flags.ack == 0  // SYN segments only\ntcp.flags.syn == 1 && tcp.flags.ack == 1  // SYN+ACK segments\ntcp.analysis.retransmission  // Retransmitted segments\ntcp.analysis.fast_retransmission  // Fast retransmit events\ntcp.analysis.zero_window  // Zero-window advertisements\ntcp.stream eq 0            // Follow a specific TCP stream\n\n// UDP analysis\nudp.port == 53  // DNS traffic\nudp.length > 1000  // Large UDP datagrams (fragmentation risk)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reading a TCP stream in Wireshark:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Right-click a packet → Follow → TCP Stream."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The conversation is displayed as text (client in red, server in blue)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wireshark shows SEQ/ACK numbers relative to ISN (not absolute) by default."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TCP handshake as seen in Wireshark:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "No.  Time        Source          Destination     Protocol Info\n1    0.000000    10.0.0.1        10.0.0.2        TCP      80 → 8080 [SYN] Seq=0 Win=65535 Len=0 MSS=1460 WS=64 SACK_PERM=1\n2    0.001234    10.0.0.2        10.0.0.1        TCP      8080 → 80 [SYN, ACK] Seq=0 Ack=1 Win=65535 Len=0 MSS=1460 WS=64 SACK_PERM=1\n3    0.001567    10.0.0.1        10.0.0.2        TCP      80 → 8080 [ACK] Seq=1 Ack=1 Win=131072 Len=0\n4    0.002000    10.0.0.1        10.0.0.2        TCP      [TCP segment of reassembled PDU] Seq=1 Ack=1 Win=131072 Len=100\n\n// Note: Wireshark shows Seq=0 and Ack=0 as relative sequence numbers by default.\n// Absolute SEQ in packet 1 would be the actual random ISN.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "896-transport-layer-security-tls-over-tcp",
      children: "8.9.6 Transport Layer Security (TLS) over TCP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TLS operates above TCP but below application protocols:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+-----------+\n| HTTP      |  Application layer\n+-----------+\n| TLS       |  Security layer (encryption, certificates)\n+-----------+\n| TCP       |  Transport layer (reliable, ordered)\n+-----------+\n| IP        |  Network layer\n+-----------+\n\nTLS handshake over TCP:\n1. TCP three-way handshake (SYN, SYN+ACK, ACK) — 1 RTT\n2. TLS 1.3 handshake (ClientHello, ServerHello+Finished, ClientFinished) — 1 RTT\n   Total: ~2 RTT before application data\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "QUIC eliminates this layering by integrating TLS into the transport handshake, achieving 1 RTT (new) or 0 RTT (repeat) total."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "897-socket-programming-with-tcp-c",
      children: "8.9.7 Socket Programming with TCP (C++)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cstring>\n#include <sys/socket.h>\n#include <netinet/in.h>\n#include <unistd.h>\n#include <arpa/inet.h>\n#include <thread>\n\n/**\n * TCP Echo Server — multi-threaded.\n * \n * Complexity: O(N) threads for N clients (or O(1) with event loop).\n * WHY O(N) per thread? Each thread blocks on recv() independently.\n * Better scaling: epoll/kqueue/IOCP with thread pool.\n */\nclass TcpEchoServer {\nprivate:\n    int server_fd;\n    \n    void handle_client(int client_fd, sockaddr_in addr) {\n        char buffer[4096];\n        char ip[INET_ADDRSTRLEN];\n        inet_ntop(AF_INET, &addr.sin_addr, ip, INET_ADDRSTRLEN);\n        \n        while (true) {\n            ssize_t n = recv(client_fd, buffer, sizeof(buffer), 0);\n            if (n <= 0) break;  // Connection closed or error\n            send(client_fd, buffer, n, 0);  // Echo\n        }\n        \n        close(client_fd);\n        std::cout << \"Client \" << ip << \" disconnected\\n\";\n    }\n\npublic:\n    TcpEchoServer(int port) {\n        server_fd = socket(AF_INET, SOCK_STREAM, 0);\n        int opt = 1;\n        setsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt));\n        \n        sockaddr_in addr = {};\n        addr.sin_family = AF_INET;\n        addr.sin_addr.s_addr = htonl(INADDR_ANY);\n        addr.sin_port = htons(port);\n        bind(server_fd, (sockaddr*)&addr, sizeof(addr));\n        listen(server_fd, 10);\n        \n        std::cout << \"TCP Echo Server on port \" << port << std::endl;\n    }\n    \n    void run() {\n        while (true) {\n            sockaddr_in client_addr;\n            socklen_t len = sizeof(client_addr);\n            int client = accept(server_fd, (sockaddr*)&client_addr, &len);\n            // Handle each client in its own thread (simplified)\n            std::thread(&TcpEchoServer::handle_client, this, client, client_addr).detach();\n        }\n    }\n    \n    ~TcpEchoServer() { close(server_fd); }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "898-socket-programming-with-tcp-python",
      children: "8.9.8 Socket Programming with TCP (Python)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import socket\nimport threading\n\nclass TCPEchoServer:\n    \"\"\"\n    Multi-threaded TCP echo server.\n    \n    Edge cases handled:\n    - Client disconnect (recv returns b'')\n    - Large messages (loop until complete)\n    - SIGPIPE (broken pipe on send to closed connection)\n    \"\"\"\n    \n    def __init__(self, host='0.0.0.0', port=8080):\n        self.server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n        self.server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)\n        self.server.bind((host, port))\n        self.server.listen(10)\n        print(f\"TCP Echo Server on {host}:{port}\")\n    \n    def handle_client(self, client_sock, addr):\n        print(f\"New connection from {addr}\")\n        try:\n            while True:\n                data = client_sock.recv(4096)\n                if not data:  # Client disconnected\n                    break\n                client_sock.sendall(data)  # Echo\n        except ConnectionResetError:\n            print(f\"Connection reset by {addr}\")\n        finally:\n            client_sock.close()\n            print(f\"Connection from {addr} closed\")\n    \n    def run(self):\n        while True:\n            client, addr = self.server.accept()\n            thread = threading.Thread(target=self.handle_client, args=(client, addr))\n            thread.daemon = True\n            thread.start()\n\nclass TCPEchoClient:\n    \"\"\"\n    TCP echo client with timeout and graceful error handling.\n    \"\"\"\n    \n    def __init__(self, host='127.0.0.1', port=8080):\n        self.sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n        self.sock.settimeout(10.0)\n        self.sock.connect((host, port))\n    \n    def send_and_receive(self, message: bytes) -> bytes:\n        self.sock.sendall(message)\n        response = self.sock.recv(4096)\n        return response\n    \n    def close(self):\n        self.sock.close()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "899-netfilteriptables-and-transport-layer",
      children: "8.9.9 Netfilter/iptables and Transport Layer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Linux netfilter can filter and modify transport-layer packets:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Block TCP port 22 (SSH) from external\niptables -A INPUT -p tcp --dport 22 -s 0.0.0.0/0 -j DROP\n\n# Limit SYN rate (mitigate SYN flood)\niptables -A INPUT -p tcp --syn -m limit --limit 10/s --limit-burst 20 -j ACCEPT\niptables -A INPUT -p tcp --syn -j DROP\n\n# Log and drop TCP RST segments\niptables -A INPUT -p tcp --tcp-flags RST RST -j LOG --log-prefix \"TCP RST: \"\n\n# Redirect UDP port 53 to local DNS resolver\niptables -t nat -A PREROUTING -p udp --dport 53 -j REDIRECT --to-port 5353\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8910-common-tcp-sequence-number-scenarios",
      children: "8.9.10 Common TCP Sequence Number Scenarios"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Wrap-around sequence numbers on high-speed links:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Link speed: 100 Gbps\nSequence space: 2^32 = 4,294,967,296 bytes\nTime to wrap = 4,294,967,296 / (100 × 10^9 / 8) = 4,294,967,296 / 12.5 × 10^9 ≈ 0.344 seconds\n\nWithout PAWS (Timestamp option), segments from 0.34 seconds ago could\nbe confused with new segments in the same connection.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PAWS (Protection Against Wrapped Sequences):"
      }), "\nLinux enables PAWS via TCP Timestamps option. Each segment carries a timestamp value. If a segment has a timestamp older than the last received timestamp, it's discarded — even if the sequence number is valid."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// PAWS check (simplified)\nfunction paws_check(segment_timestamp, last_timestamp):\n    if segment_timestamp < last_timestamp and \n       (last_timestamp - segment_timestamp) > MAX_TIMESTAMP_DELTA:\n        discard_segment(\"PAWS: old timestamp\")\n    else:\n        process_segment()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8911-bsd-socket-api--transport-layer-interface",
      children: "8.9.11 BSD Socket API — Transport Layer Interface"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The BSD socket API is the standard interface between applications and the transport layer:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "API Call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Blocking?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Used by"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "socket()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create a transport endpoint (TCP: SOCK_STREAM, UDP: SOCK_DGRAM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "bind()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bind socket to local port and IP address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "listen()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mark TCP socket as passive (accepting connections)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP Server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "accept()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block until a new TCP connection arrives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP Server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "connect()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initiate TCP connection (or set UDP peer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (TCP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP Client"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "send()"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "write()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (blocking mode)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "recv()"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "read()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receive data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (blocking mode)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sendto()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send UDP datagram with explicit destination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "recvfrom()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receive UDP datagram with source info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "close()"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "shutdown()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Close connection (shutdown enables half-close)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "setsockopt()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set socket options (TCP_NODELAY, SO_REUSEADDR, etc.)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Event-driven I/O models for high concurrency:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// select() — portable, limited to FD_SETSIZE (1024)\n// epoll (Linux) — scales to millions of connections\n// kqueue (BSD/macOS) — similar to epoll\n// IOCP (Windows) — completion ports\n\n// epoll example (simplified — Linux)\nint epfd = epoll_create1(0);\nstruct epoll_event ev;\nev.events = EPOLLIN | EPOLLET;  // Edge-triggered\nev.data.fd = server_fd;\nepoll_ctl(epfd, EPOLL_CTL_ADD, server_fd, &ev);\n\nwhile (true) {\n    int nfds = epoll_wait(epfd, events, MAX_EVENTS, -1);\n    for (int i = 0; i < nfds; i++) {\n        if (events[i].data.fd == server_fd) {\n            // New connection\n        } else {\n            // Data on existing connection\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8912-so_linger-and-connection-teardown",
      children: "8.9.12 SO_LINGER and Connection Teardown"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The SO_LINGER socket option controls behavior on close() when there is pending data:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Setting"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior on close()"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "l_onoff = 0 (default)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "close() returns immediately; kernel delivers remaining data in background"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "l_onoff = 1, l_linger = 0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "close() sends RST — abrupt termination. Any pending data is discarded. No TIME_WAIT."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "l_onoff = 1, l_linger > 0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "close() blocks until all data acknowledged or timeout expires"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Abortive close (no TIME_WAIT)\nstruct linger so_linger;\nso_linger.l_onoff = 1;\nso_linger.l_linger = 0;\nsetsockopt(sock_fd, SOL_SOCKET, SO_LINGER, &so_linger, sizeof(so_linger));\nclose(sock_fd);  // Sends RST, immediate close\n\n// Graceful close with timeout\nso_linger.l_onoff = 1;\nso_linger.l_linger = 30;  // Wait up to 30 seconds\nsetsockopt(sock_fd, SOL_SOCKET, SO_LINGER, &so_linger, sizeof(so_linger));\nclose(sock_fd);  // Blocks until data sent or 30s timeout\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-tcp-optimization-for-a-high-frequency-trading-platform",
      children: "Case Study: TCP Optimization for a High-Frequency Trading Platform"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " A high-frequency trading (HFT) firm running a distributed trading engine across two data centers (Chicago and New York, 800 km apart, ~8ms RTT) experienced 15-20ms per trade round-trip latency using default TCP settings. The firm's colocated servers ran Linux with default kernel TCP parameters that prioritized throughput over latency. With thousands of trades per second, each millisecond of delay in the 8ms baseline meant tens of millions in lost revenue annually."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " The engineering team applied transport-layer tuning across three layers. First, they minimized TCP segment size to match individual trade messages (MSS of 256 bytes instead of 1460), eliminating Nagle's algorithm delay by enabling ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TCP_NODELAY"
      }), ". Second, they disabled delayed ACKs via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tcp_delack_min"
      }), " sysctl, ensuring immediate ACK responses for every trade confirmation. Third, they reduced the initial retransmission timeout from 3 seconds to 200ms (", (0,jsx_runtime.jsx)(_components.code, {
        children: "tcp_rto_min"
      }), ") and pinned application processes to dedicated CPU cores using SO_INCOMING_CPU to avoid context-switch jitter on the accept queue. For the inter-data-center link, they bypassed the kernel TCP stack entirely by implementing a custom reliable transport over UDP using kernel bypass (DPDK), achieving sub-10µs application-level latency."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome:"
      }), " End-to-end trade latency dropped from 18ms to 9.2ms — a 49% reduction. The UDP-based bypass layer for inter-DC traffic achieved 99.997% reliability with a custom selective-ACK mechanism at 1/10th the latency of kernel TCP. The tuned TCP stack remained for external client connections (non-colocated), where the optimized parameters still yielded a 30% improvement. The firm estimated a $12M annual revenue gain per millisecond saved."]
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
              children: "TCP_NODELAY"
            }), " disables Nagle's algorithm for latency-sensitive apps"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable on all interactive or real-time socket connections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Delayed ACKs"
            }), " increase throughput but add up to 200ms latency per ACK"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Disable (", (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp_delack_min=1"
            }), ") for latency-critical, low-bandwidth flows"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Smaller MSS"
            }), " avoids fragmentation and reduces serialization delay"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match segment size to application message size (256-512 bytes for trading)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernel bypass (DPDK)"
            }), " eliminates TCP/IP stack overhead for extreme performance"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use for sub-10µs requirements; not justified for typical web services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "TIME_WAIT socket exhaustion"
            }), " occurs under high connection rates"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Enable ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp_tw_reuse"
            }), " and increase ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp_max_tw_buckets"
            }), " on busy servers"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "SYN cookies"
            }), " prevent state allocation during SYN floods"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Enable by default (", (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp_syncookies=1"
            }), ") on internet-facing servers"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "TCP timestamps"
            }), " enable PAWS and more accurate RTT estimation"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Enable (", (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp_timestamps=1"
            }), ") for high-speed WAN links"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "810-summary",
      children: "8.10 Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The transport layer provides process-to-process communication through multiplexing and demultiplexing. UDP offers lightweight, connectionless transport with minimal overhead — 8-byte header, optional checksum, suitable for loss-tolerant and delay-sensitive applications. TCP provides reliable, in-order, connection-oriented delivery through sequence numbers, cumulative acknowledgments, retransmission timers, and sliding window flow control. The three-way handshake establishes connections with synchronized sequence numbers; four-way handshake tears down each direction independently. The 11-state TCP state machine governs connection lifecycle from CLOSED to TIME_WAIT."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SCTP extends transport with multi-homing and multi-streaming for telecom. QUIC (HTTP/3) builds reliable transport over UDP with mandatory encryption, 0-RTT handshake, and connection migration — reflecting the evolution of transport protocols for modern internet."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "811-exercises",
      children: "8.11 Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does the UDP checksum include a pseudo-header with IP addresses?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nThe pseudo-header (src IP, dst IP, protocol, UDP length) binds the UDP datagram to the specific IP connection. This prevents misdirected delivery — if a router delivers the packet to the wrong IP, the checksum verification fails at the receiver.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the purpose of the three-way handshake's third ACK?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nThe third ACK confirms the client received the server's SYN+ACK, completing bidirectional ISN agreement. It also allows the server to move from SYN_RCVD to ESTABLISHED and begin data transmission. Without it, the server would have half-open connections.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does TCP use cumulative acknowledgments rather than individual segment acknowledgments?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nCumulative ACKs reduce overhead — one ACK can acknowledge all segments up to a given sequence number. They also simplify retransmission: the sender only needs to track the highest in-order byte acknowledged (SND.UNA). Individual ACKs would require per-segment tracking and increase header overhead with no benefit for in-order delivery.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the TIME_WAIT state, and why does it last 2×MSL?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nTIME_WAIT ensures delayed segments from a closed connection expire before the 4-tuple is reused for a new connection. 2×MSL (typically 60-120s) is the maximum time a segment can survive in the network. It also allows retransmission of the final ACK if it was lost.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does window scaling allow TCP to exceed the 65,535-byte advertised window?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nThe TCP Window Scale option (RFC 7323) adds a shift factor (0-14) to the 16-bit window field. The effective window becomes window_field << shift_factor. A scale factor of 14 allows window sizes up to 65535 × 2^14 = 1,073,725,440 bytes (~1 GB). Both sides must advertise the option during the three-way handshake.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between flow control and congestion control?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nFlow control prevents the sender from overwhelming the receiver (rwnd — receiver's buffer space). Congestion control prevents the sender from overwhelming the network (cwnd — inferred network capacity). TCP's actual sending window is min(cwnd, rwnd). Flow control is end-to-end; congestion control is network-aware.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain how SYN cookies work and why they prevent SYN flood attacks."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nSYN cookies encode the connection parameters (MSS, window scale, SACK permitted) into the ISN using a cryptographic hash of the 4-tuple and a secret. The server does not allocate any state (PCB) until the third ACK arrives, when it decodes the cookie. This prevents resource exhaustion from half-open connections during a SYN flood.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What advantages does QUIC have over TCP+TLS?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nQUIC offers: (1) 0-RTT handshake for returning clients vs TCP+TLS 1–3 RTT; (2) connection migration — survives IP address changes; (3) built-in encryption; (4) no head-of-line blocking at the transport layer (since it runs over UDP); (5) stream multiplexing within a single connection without HOL blocking.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A UDP datagram has a 12-byte pseudo-header, an 8-byte UDP header, and 100 bytes of data. Show the checksum computation for this datagram using one's complement arithmetic."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nTotal bytes for checksum: pseudo-header (12) + UDP header (8) + data (100) = 120 bytes = 60 16-bit words. The checksum is computed by summing all 16-bit words with one's complement addition (carry wraps around), then taking the one's complement of the sum. If the sum is 0xABCD, the checksum is ~0xABCD = 0x5432. The receiver computes the same sum over pseudo-header + header + data + checksum field (as 0x0000 during computation); if the final sum is 0xFFFF, the checksum is valid.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TCP initial sequence numbers are chosen randomly. Explain why. Then compute the time it takes to wrap the 32-bit sequence number space on a 10 Gbps link."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nRandom ISNs prevent spoofing attacks where an attacker guesses the sequence number to inject fraudulent segments. Without randomization, an attacker could send RST segments to terminate connections. Time to wrap: 2^32 bytes / (10 Gbps / 8) = 4,294,967,296 / 1.25×10^9 ≈ 3.44 seconds. This is why PAWS (Protection Against Wrapped Sequences) is needed with high-speed links.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A client connects to a server. Draw the complete TCP state diagram for both client and server through:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nClient: CLOSED → (ACTIVE_OPEN) → SYN_SENT → (RECV_SYN+ACK) → ESTABLISHED → (CLOSE) → FIN_WAIT_1 → (RECV_ACK) → FIN_WAIT_2 → (RECV_FIN) → TIME_WAIT → (TIMEOUT) → CLOSED. Server: CLOSED → (PASSIVE_OPEN) → LISTEN → (RECV_SYN) → SYN_RCVD → (SEND_SYN+ACK) → (RECV_ACK) → ESTABLISHED → (RECV_FIN) → CLOSE_WAIT → (CLOSE) → LAST_ACK → (RECV_ACK) → CLOSED.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "12",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A TCP connection has ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rwnd = 24000 bytes"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MSS = 1000 bytes"
        }), ". The sender sends 20 segments. The receiver reads 8000 bytes after receiving all data. Show the sliding window evolution."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nInitially: rwnd = 24000, can send 24 segments (24000/1000). Sends 20 segments, window fills to 20,000 used, 4,000 remaining. After receiver reads 8000 bytes, rwnd increases by 8000 → rwnd = 12,000. Sender can now send 12 more segments (if needed). The window slides forward as ACKs arrive. At each ACK, SND.UNA advances, potentially allowing more data to be sent. Actual cwnd from congestion control would also constrain the window.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "coding-problems",
      children: "Coding Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a simplified TCP state machine in Python that accepts event strings."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n```python\nclass TCPStateMachine:\n    def __init__(self):\n        self.state = 'CLOSED'\n        self.transitions = {\n            ('CLOSED', 'ACTIVE_OPEN'): 'SYN_SENT',\n            ('CLOSED', 'PASSIVE_OPEN'): 'LISTEN',\n            ('LISTEN', 'RECV_SYN'): 'SYN_RCVD',\n            ('SYN_SENT', 'RECV_SYN_ACK'): 'ESTABLISHED',\n            ('SYN_SENT', 'RECV_SYN'): 'SYN_RCVD',\n            ('SYN_RCVD', 'RECV_ACK'): 'ESTABLISHED',\n            ('ESTABLISHED', 'CLOSE'): 'FIN_WAIT_1',\n            ('ESTABLISHED', 'RECV_FIN'): 'CLOSE_WAIT',\n            ('FIN_WAIT_1', 'RECV_ACK'): 'FIN_WAIT_2',\n            ('FIN_WAIT_1', 'RECV_FIN'): 'CLOSING',\n            ('FIN_WAIT_2', 'RECV_FIN'): 'TIME_WAIT',\n            ('CLOSE_WAIT', 'CLOSE'): 'LAST_ACK',\n            ('CLOSING', 'RECV_ACK'): 'TIME_WAIT',\n            ('LAST_ACK', 'RECV_ACK'): 'CLOSED',\n            ('TIME_WAIT', 'TIMEOUT'): 'CLOSED',\n        }\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "def process(self, event):\n    key = (self.state, event)\n    if key in self.transitions:\n        self.state = self.transitions[key]\n        print(f\"State -> {self.state}\")\n    else:\n        print(f\"Invalid: {self.state} + {event}\")\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "fsm = TCPStateMachine()\nfor e in ['ACTIVE_OPEN', 'RECV_SYN_ACK', 'CLOSE', 'RECV_ACK', 'RECV_FIN', 'TIMEOUT']:\nfsm.process(e)"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "</details>\n\n14. Write a C++ program that simulates the sliding window protocol.\n\n<details>\n<summary>Solution</summary>\n```cpp\n#include <iostream>\nclass SlidingWindow {\n    int window, mss, una, nxt;\npublic:\n    SlidingWindow(int w, int m) : window(w), mss(m), una(0), nxt(0) {}\n    void send() {\n        int avail = window / mss;\n        int sent = std::min(avail, 10);\n        nxt += sent * mss;\n        std::cout << \"Sent \" << sent << \" segs. SND.UNA=\" << una << \" SND.NXT=\" << nxt << \"\\n\";\n    }\n    void process_ack(int ack) {\n        una = ack;\n        window = 24000 - (nxt - una);\n        std::cout << \"ACK \" << ack << \" received. rwnd=\" << window << \"\\n\";\n    }\n};\nint main() {\n    SlidingWindow sw(24000, 1000);\n    sw.send();\n    sw.process_ack(5000);\n    sw.send();\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "15",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a UDP echo server in Python."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n```python\nimport socket\nsock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\nsock.bind(('0.0.0.0', 8888))\nprint(\"UDP echo server on port 8888\")\nwhile True:\n    try:\n        data, addr = sock.recvfrom(4096)\n        print(f\"From {addr}: {len(data)} bytes\")\n        sock.sendto(data, addr)\n    except socket.timeout:\n        print(\"Timeout - no data received\")\n```\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "projects",
      children: "Projects"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "14",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TCP connection analyzer:"
        }), " Write a Python script that reads a pcap file and analyzes TCP connections."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n```python\nfrom scapy.all import rdpcap, TCP\ndef analyze_tcp(pcap_file):\n    pkts = rdpcap(pcap_file)\n    for pkt in pkts:\n        if pkt.haslayer(TCP):\n            tcp = pkt[TCP]\n            print(f\"SEQ={tcp.seq} ACK={tcp.ack} Flags={tcp.flags} Len={len(tcp.payload)}\")\n```\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "15",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UDP reliability layer:"
        }), " Implement a reliable transport protocol over UDP."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n```python\nimport socket, time, threading\nclass ReliableUDPSender:\n    def __init__(self, dst, port):\n        self.sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\n        self.dst = (dst, port)\n        self.seq = 0\n    def send(self, data, timeout=1):\n        pkt = f\"{self.seq}:{data}\".encode()\n        self.sock.sendto(pkt, self.dst)\n        self.sock.settimeout(timeout)\n        try:\n            ack, _ = self.sock.recvfrom(1024)\n            if ack.decode() == f\"ACK:{self.seq}\":\n                self.seq += 1\n                return True\n        except socket.timeout:\n            return False\n```\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "16",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TCP state visualizer:"
        }), " Build a command-line tool that animates TCP state transitions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n```python\nimport time\nstates = ['CLOSED', 'LISTEN', 'SYN_SENT', 'SYN_RCVD', 'ESTABLISHED',\n          'FIN_WAIT_1', 'FIN_WAIT_2', 'CLOSE_WAIT', 'CLOSING', 'LAST_ACK', 'TIME_WAIT']\ndef visualize(transitions):\n    for src, event, dst in transitions:\n        print(f\"\\033[32m{src}\\033[0m --(\\033[33m{event}\\033[0m)--> \\033[34m{dst}\\033[0m\")\n        time.sleep(0.5)\n```\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "17",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Design a transport protocol for deep-space communication."
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nInterplanetary links have 5-20 minute one-way delay and BER of 10^{-4}. A suitable design uses: (1) **File delivery** instead of stream — a CFDP-like protocol treats data as files. (2) **Selective NAK** instead of cumulative ACK — the receiver reports missing chunks, avoiding slow-start. (3) **FEC (Reed-Solomon)** to correct bit errors without retransmission. (4) **Large windows** — BDP at 1 Mbps with 10-min RTT = 75 MB. For 50% utilization, window = 150 MB. Header: 4-byte sequence number, 4-byte offset, 2-byte length, 1-byte type, variable FEC parity. This achieves high utilization despite extreme RTT.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "812-quick-reference",
      children: "8.12 Quick Reference"
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
              children: "UDP Header"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SrcPort(16) + DstPort(16) + Length(16) + Checksum(16) = 64 bits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TCP Header"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SrcPort(16) + DstPort(16) + SeqNum(32) + AckNum(32) + Offset(4) + Reserved(3) + Flags(9) + Window(16) + Checksum(16) + Urgent(16) + Options(variable)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TCP Flags"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NS, CWR, ECE, URG, ACK, PSH, RST, SYN, FIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Connection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Establish: SYN → SYN+ACK → ACK; Terminate: FIN → ACK → FIN → ACK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Port Ranges"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Well-known (0-1023), Registered (1024-49151), Dynamic (49152-65535)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Socket"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-tuple: (src_ip, src_port, dst_ip, dst_port) — uniquely identifies a TCP connection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TIME_WAIT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2×MSL (typically 60-120s) — ensures delayed segments don't corrupt new connections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sliding window"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sender cannot exceed min(cwnd, rwnd). Zero-window triggers persist timer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "QUIC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP-based, 0-1 RTT handshake, built-in encryption, connection migration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SCTP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-way handshake with cookie, multi-homing, multi-streaming, no HoL blocking"
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
            children: "Backend Dev"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Network Admin"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Protocols"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS resolution, game networking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitoring (SNMP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP flood mitigation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NTP, DHCP, DNS, QUIC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/REST APIs, database connections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic engineering, window tuning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN flood protection, session hijacking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP, SMTP, SSH, FTP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service binding, container port mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACL/firewall rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port scanning detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service discovery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sockets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Socket API (socket(), bind(), listen(), accept())"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "netstat/ss diagnostics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Socket manipulation attacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol implementation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flow Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer sizing, TCP_NODELAY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Window scaling tuning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-window attack surface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sliding window mechanism"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QUIC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/3 server config, 0-RTT optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP 443 monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QUIC reflection amplification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QUIC transport, HTTP/3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Options"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Answer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How many bytes is the fixed TCP header?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) 8, B) 16, C) 20, D) 60"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP Data Offset field (4 bits) specifies header length in 32-bit words. Minimum is 5 words × 4 = 20 bytes. Maximum is 15 words × 4 = 60 bytes with options."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the purpose of the three-way handshake's third ACK?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) Authenticate, B) Confirm client received SYN, C) Negotiate window, D) Begin data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The third ACK confirms the client received the server's SYN+ACK, completing bidirectional ISN agreement. Without it, the server would not know its SYN+ACK was received."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Why does TIME_WAIT last 2×MSL?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) Retransmit lost FIN, B) Let delayed segments expire, C) Application cleanup, D) Sync with server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2×MSL guarantees any segments still in flight will expire before the 4-tuple can be reused for a new connection. Also allows retransmission of the final ACK if lost."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What prevents deadlock when the receiver's advertised window is zero?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) Retransmission timer, B) Persist timer, C) Keepalive timer, D) Delayed ACK timer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The persist timer periodically sends 1-byte window probes. When the receiver's rwnd is zero, the sender cannot send data, so it relies on probes to detect when the window reopens."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How many states does the TCP state machine have?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) 7, B) 9, C) 11, D) 13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11 states: CLOSED, LISTEN, SYN_SENT, SYN_RCVD, ESTABLISHED, FIN_WAIT_1, FIN_WAIT_2, CLOSE_WAIT, CLOSING, LAST_ACK, TIME_WAIT."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "813-common-pitfalls-and-misconceptions",
      children: "8.13 Common Pitfalls and Misconceptions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pitfall"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Misconception"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reality"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TCP is always faster than UDP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reliable delivery means TCP is better"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP's handshake, ACK overhead, and congestion control add latency. UDP can be faster when application handles reliability."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UDP doesn't need checksums"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"My app does error checking anyway\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP checksum verifies the packet wasn't misdelivered (pseudo-header check). Disabling it risks data corruption."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TCP guarantees delivery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"TCP will ensure my data arrives\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["TCP guarantees delivery ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "if possible"
            }), ". If the network is down or the peer crashes, TCP gives up after retries."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Large UDP packets are fine"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"The network handles fragmentation\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP fragmentation increases loss probability. If one fragment is lost, the entire datagram is lost. Preferred: keep UDP under MTU."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Closing a TCP socket is immediate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"After close(), the connection is gone\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIME_WAIT lasts 60-120 seconds. On busy servers, thousands of sockets in TIME_WAIT can exhaust port resources."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Nagle and delayed ACK are always good"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"They optimize performance\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Their interaction causes 400ms delays on interactive traffic. Use TCP_NODELAY for latency-sensitive apps."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sequence numbers start at 0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"TCP seq begins at 1\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["TCP uses random Initial Sequence Numbers (ISN) for security. Wireshark shows ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "relative"
            }), " SEQ numbers by default, making them appear to start at 0."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TCP headers are always 20 bytes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Fixed overhead per segment\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "With options (MSS, Window Scale, SACK, Timestamps), TCP headers can reach 60 bytes. Timestamps alone add 12 bytes."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "QUIC replaces TCP entirely"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Everyone will switch to QUIC\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QUIC requires UDP 443 to be open. Enterprise firewalls often block or rate-limit UDP. TCP remains dominant for server-to-server communication."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SCTP is Linux's default transport"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"SCTP can replace TCP everywhere\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux supports SCTP but middleboxes (NAT, firewalls) don't understand SCTP INIT/INIT-ACK. It's mostly confined to telecom."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "814-protocol-header-comparison-byte-by-byte",
      children: "8.14 Protocol Header Comparison (Byte-by-Byte)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "UDP Header (8 bytes):\nByte 0:       [SrcPort MSB] [SrcPort LSB]\nByte 2:       [DstPort MSB] [DstPort LSB]\nByte 4:       [Length MSB]  [Length LSB]\nByte 6:       [Checksum MSB][Checksum LSB]\n\nTCP Header minimum (20 bytes):\nByte 0:       [SrcPort MSB] [SrcPort LSB]\nByte 2:       [DstPort MSB] [DstPort LSB]\nByte 4:       [SeqNum MSB]  [SeqNum ...  ]\nByte 8:       [SeqNum ...  ] [SeqNum LSB]\nByte 12:      [AckNum MSB]  [AckNum ...  ]\nByte 16:      [AckNum ...  ] [AckNum LSB]\nByte 20:      [Off/Res/Flags] [Window MSB]\nByte 22:      [Window LSB]  [Checksum MSB]\nByte 24:      [Checksum LSB] [UrgentPtr MSB]\nByte 26:      [UrgentPtr LSB]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "815-chapter-key-takeaways",
      children: "8.15 Chapter Key Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Transport layer provides process-to-process communication"
          }), " via multiplexing/demultiplexing using port numbers — extending the network layer's host-to-host delivery."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "UDP is connectionless and lightweight"
          }), " — 8-byte header, optional checksum, no reliability. Best for loss-tolerant, latency-sensitive applications (DNS, VoIP, gaming, QUIC)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "TCP is connection-oriented and reliable"
          }), " — 20-byte minimum header, sequence numbers for ordering, ACKs for reliability, sliding window for flow control, multiple timers for edge cases."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The three-way handshake"
          }), " (SYN → SYN+ACK → ACK) synchronizes sequence numbers. The third ACK is mathematically required for reliable bidirectional agreement in an unreliable network."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "TCP's 11-state machine"
          }), " governs connection lifecycle: CLOSED → LISTEN → SYN_RCVD → ESTABLISHED → FIN_WAIT_1 → FIN_WAIT_2 → TIME_WAIT → CLOSED (client); CLOSED → LISTEN → SYN_RCVD → ESTABLISHED → CLOSE_WAIT → LAST_ACK → CLOSED (server)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Flow control"
          }), " prevents receiver overflow (rwnd, sliding window). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Congestion control"
          }), " prevents network overload (cwnd, AIMD). The effective window is ", (0,jsx_runtime.jsx)(_components.code, {
            children: "min(cwnd, rwnd)"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "TIME_WAIT"
          }), " (2×MSL = 60-120s) prevents delayed segments from corrupting new connections and allows final ACK retransmission."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SCTP and QUIC"
          }), " evolved to address TCP's limitations: SCTP for multi-homing/multi-streaming in telecom; QUIC for 0-RTT handshake, connection migration, and built-in encryption in HTTP/3."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/computer-networks/09-tcp-congestion",
          children: "Chapter 9: TCP Congestion Control"
        }), " — AIMD, slow start, fast retransmit, BBR, Cubic"]
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