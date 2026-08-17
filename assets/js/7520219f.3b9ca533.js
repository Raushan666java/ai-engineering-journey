"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[59571],{

/***/ 98320
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_computer_networks_09_tcp_congestion_md_752_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-computer-networks-09-tcp-congestion-md-752.json
const site_docs_courses_computer_networks_09_tcp_congestion_md_752_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/computer-networks/09-tcp-congestion","title":"Chapter 9: TCP Congestion Control","description":"Prerequisites Transport Layer — TCP basics and connection management | Next Application Layer — From transport to user-facing protocols","source":"@site/docs/courses/computer-networks/09-tcp-congestion.md","sourceDirName":"courses/computer-networks","slug":"/computer-networks/09-tcp-congestion","permalink":"/ai-engineering-journey/computer-networks/09-tcp-congestion","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"id":"09-tcp-congestion","slug":"/computer-networks/09-tcp-congestion","title":"Chapter 9: TCP Congestion Control","sidebar_label":"Chapter 9: TCP Congestion Control","sidebar_position":9},"sidebar":"course-computer-networks","previous":{"title":"Chapter 8: The Transport Layer","permalink":"/ai-engineering-journey/computer-networks/08-transport-layer"},"next":{"title":"Chapter 10: The Application Layer → Complete Reference","permalink":"/ai-engineering-journey/computer-networks/10-application-layer"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/computer-networks/09-tcp-congestion.md


const frontMatter = {
	id: '09-tcp-congestion',
	slug: '/computer-networks/09-tcp-congestion',
	title: 'Chapter 9: TCP Congestion Control',
	sidebar_label: 'Chapter 9: TCP Congestion Control',
	sidebar_position: 9
};
const contentTitle = 'Chapter 9: TCP Congestion Control';

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
  "value": "TCP Congestion Control Architecture",
  "id": "tcp-congestion-control-architecture",
  "level": 3
}, {
  "value": "9.1 Flow Control vs. Congestion Control",
  "id": "91-flow-control-vs-congestion-control",
  "level": 2
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 3
}, {
  "value": "9.2 Sliding Window and Flow Control",
  "id": "92-sliding-window-and-flow-control",
  "level": 2
}, {
  "value": "Congestion Window vs Receive Window — Detailed Comparison",
  "id": "congestion-window-vs-receive-window--detailed-comparison",
  "level": 3
}, {
  "value": "Why the Effective Window Is min(cwnd, rwnd)",
  "id": "why-the-effective-window-is-mincwnd-rwnd",
  "level": 3
}, {
  "value": "9.3 Congestion Control: Causes and Effects",
  "id": "93-congestion-control-causes-and-effects",
  "level": 2
}, {
  "value": "Real-World Analogy: Highway Traffic",
  "id": "real-world-analogy-highway-traffic",
  "level": 3
}, {
  "value": "Causes of Congestion",
  "id": "causes-of-congestion",
  "level": 3
}, {
  "value": "Effects of Congestion",
  "id": "effects-of-congestion",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 3
}, {
  "value": "9.4 Slow Start",
  "id": "94-slow-start",
  "level": 2
}, {
  "value": "Real-World Analogy: Test-Driving a New Car",
  "id": "real-world-analogy-test-driving-a-new-car",
  "level": 3
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 3
}, {
  "value": "Dry Run Trace Table — Slow Start (cwnd evolution)",
  "id": "dry-run-trace-table--slow-start-cwnd-evolution",
  "level": 3
}, {
  "value": "Dry Run Trace — Slow Start with Loss",
  "id": "dry-run-trace--slow-start-with-loss",
  "level": 3
}, {
  "value": "C++ Implementation — Slow Start and Congestion Avoidance",
  "id": "c-implementation--slow-start-and-congestion-avoidance",
  "level": 3
}, {
  "value": "Python Implementation — TCP Reno Cwnd Simulator",
  "id": "python-implementation--tcp-reno-cwnd-simulator",
  "level": 3
}, {
  "value": "Complexity Analysis — Slow Start",
  "id": "complexity-analysis--slow-start",
  "level": 3
}, {
  "value": "TypeScript Implementation: CongestionWindowSimulator",
  "id": "typescript-implementation-congestionwindowsimulator",
  "level": 3
}, {
  "value": "9.5 Congestion Avoidance (AIMD)",
  "id": "95-congestion-avoidance-aimd",
  "level": 2
}, {
  "value": "Real-World Analogy: Elevator Loading",
  "id": "real-world-analogy-elevator-loading",
  "level": 3
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps-1",
  "level": 3
}, {
  "value": "AIMD Sawtooth Pattern — Dry Run Trace",
  "id": "aimd-sawtooth-pattern--dry-run-trace",
  "level": 3
}, {
  "value": "AIMD Pseudocode",
  "id": "aimd-pseudocode",
  "level": 3
}, {
  "value": "Congestion Avoidance vs Slow Start — Phase Comparison",
  "id": "congestion-avoidance-vs-slow-start--phase-comparison",
  "level": 3
}, {
  "value": "Complexity Analysis — Congestion Avoidance",
  "id": "complexity-analysis--congestion-avoidance",
  "level": 3
}, {
  "value": "TypeScript Implementation: AIMDSimulator",
  "id": "typescript-implementation-aimdsimulator",
  "level": 3
}, {
  "value": "9.6 Fast Retransmit and Fast Recovery",
  "id": "96-fast-retransmit-and-fast-recovery",
  "level": 2
}, {
  "value": "Real-World Analogy: Conference Call with Missing Audio",
  "id": "real-world-analogy-conference-call-with-missing-audio",
  "level": 3
}, {
  "value": "Fast Retransmit — Numbered Steps",
  "id": "fast-retransmit--numbered-steps",
  "level": 3
}, {
  "value": "Fast Recovery — Numbered Steps (Reno)",
  "id": "fast-recovery--numbered-steps-reno",
  "level": 3
}, {
  "value": "Fast Retransmit/Recovery — Dry Run Trace",
  "id": "fast-retransmitrecovery--dry-run-trace",
  "level": 3
}, {
  "value": "Pseudocode — Fast Retransmit and Recovery",
  "id": "pseudocode--fast-retransmit-and-recovery",
  "level": 3
}, {
  "value": "Complexity Analysis — Fast Retransmit/Recovery",
  "id": "complexity-analysis--fast-retransmitrecovery",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 3
}, {
  "value": "TypeScript Implementation: RetransmissionTimer",
  "id": "typescript-implementation-retransmissiontimer",
  "level": 3
}, {
  "value": "9.7 TCP Tahoe",
  "id": "97-tcp-tahoe",
  "level": 2
}, {
  "value": "Tahoe Dry Run — Loss at cwnd = 48",
  "id": "tahoe-dry-run--loss-at-cwnd--48",
  "level": 3
}, {
  "value": "9.8 TCP Reno — Detailed Analysis",
  "id": "98-tcp-reno--detailed-analysis",
  "level": 2
}, {
  "value": "Reno Dry Run — Single Loss at cwnd = 48",
  "id": "reno-dry-run--single-loss-at-cwnd--48",
  "level": 3
}, {
  "value": "Reno Limitations",
  "id": "reno-limitations",
  "level": 3
}, {
  "value": "Complexity Analysis — TCP Reno",
  "id": "complexity-analysis--tcp-reno",
  "level": 3
}, {
  "value": "9.9 TCP NewReno",
  "id": "99-tcp-newreno",
  "level": 2
}, {
  "value": "Key Innovation: Partial ACK Handling",
  "id": "key-innovation-partial-ack-handling",
  "level": 3
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps-2",
  "level": 3
}, {
  "value": "NewReno Dry Run — Multiple Losses",
  "id": "newreno-dry-run--multiple-losses",
  "level": 3
}, {
  "value": "Complexity Analysis — NewReno vs Reno",
  "id": "complexity-analysis--newreno-vs-reno",
  "level": 3
}, {
  "value": "9.10 TCP Cubic",
  "id": "910-tcp-cubic",
  "level": 2
}, {
  "value": "Real-World Analogy: Race Car Acceleration",
  "id": "real-world-analogy-race-car-acceleration",
  "level": 3
}, {
  "value": "Detailed Cubic Mechanism",
  "id": "detailed-cubic-mechanism",
  "level": 3
}, {
  "value": "Cubic Growth Regions",
  "id": "cubic-growth-regions",
  "level": 3
}, {
  "value": "RTT Independence",
  "id": "rtt-independence",
  "level": 3
}, {
  "value": "Cubic Dry Run Trace",
  "id": "cubic-dry-run-trace",
  "level": 3
}, {
  "value": "Complexity Analysis — Cubic",
  "id": "complexity-analysis--cubic",
  "level": 3
}, {
  "value": "9.11 TCP BBR (Bottleneck Bandwidth and Round-trip propagation time)",
  "id": "911-tcp-bbr-bottleneck-bandwidth-and-round-trip-propagation-time",
  "level": 2
}, {
  "value": "Real-World Analogy: Smart Cruise Control",
  "id": "real-world-analogy-smart-cruise-control",
  "level": 3
}, {
  "value": "How BBR Works",
  "id": "how-bbr-works",
  "level": 3
}, {
  "value": "BBR vs Loss-Based Algorithms",
  "id": "bbr-vs-loss-based-algorithms",
  "level": 3
}, {
  "value": "Complexity Analysis — BBR",
  "id": "complexity-analysis--bbr",
  "level": 3
}, {
  "value": "9.12 SACK (Selective Acknowledgments)",
  "id": "912-sack-selective-acknowledgments",
  "level": 2
}, {
  "value": "Real-World Analogy: Lost Luggage Claim",
  "id": "real-world-analogy-lost-luggage-claim",
  "level": 3
}, {
  "value": "SACK Mechanism",
  "id": "sack-mechanism",
  "level": 3
}, {
  "value": "SACK Dry Run Trace",
  "id": "sack-dry-run-trace",
  "level": 3
}, {
  "value": "SACK vs No-SACK Comparison",
  "id": "sack-vs-no-sack-comparison",
  "level": 3
}, {
  "value": "Complexity Analysis — SACK",
  "id": "complexity-analysis--sack",
  "level": 3
}, {
  "value": "9.13 Tahoe vs Reno vs NewReno — Detailed Comparison",
  "id": "913-tahoe-vs-reno-vs-newreno--detailed-comparison",
  "level": 2
}, {
  "value": "Recovery Behavior on Loss",
  "id": "recovery-behavior-on-loss",
  "level": 3
}, {
  "value": "Cwnd Graph — Tahoe vs Reno Recovery",
  "id": "cwnd-graph--tahoe-vs-reno-recovery",
  "level": 3
}, {
  "value": "When to Use Each",
  "id": "when-to-use-each",
  "level": 3
}, {
  "value": "9.14 AIMD Detailed Analysis with Sawtooth Pattern",
  "id": "914-aimd-detailed-analysis-with-sawtooth-pattern",
  "level": 2
}, {
  "value": "The AIMD Equation",
  "id": "the-aimd-equation",
  "level": 3
}, {
  "value": "Sawtooth Pattern Dry Run (30 RTTs)",
  "id": "sawtooth-pattern-dry-run-30-rtts",
  "level": 3
}, {
  "value": "9.15 TCP Variants Comparison Table",
  "id": "915-tcp-variants-comparison-table",
  "level": 2
}, {
  "value": "Detailed Comparison",
  "id": "detailed-comparison",
  "level": 3
}, {
  "value": "Pros and Cons of Each Variant",
  "id": "pros-and-cons-of-each-variant",
  "level": 3
}, {
  "value": "9.16 Interview Corner",
  "id": "916-interview-corner",
  "level": 2
}, {
  "value": "Q1: What is the difference between cwnd and rwnd?",
  "id": "q1-what-is-the-difference-between-cwnd-and-rwnd",
  "level": 3
}, {
  "value": "Q2: Explain the difference between jitter and delay in the context of congestion control.",
  "id": "q2-explain-the-difference-between-jitter-and-delay-in-the-context-of-congestion-control",
  "level": 3
}, {
  "value": "Q3: How do you detect bufferbloat in a network?",
  "id": "q3-how-do-you-detect-bufferbloat-in-a-network",
  "level": 3
}, {
  "value": "Q4: Why does CUBIC have better fairness than Reno across different RTTs?",
  "id": "q4-why-does-cubic-have-better-fairness-than-reno-across-different-rtts",
  "level": 3
}, {
  "value": "Q5: What is global synchronization and how do modern algorithms avoid it?",
  "id": "q5-what-is-global-synchronization-and-how-do-modern-algorithms-avoid-it",
  "level": 3
}, {
  "value": "Q6: What happens when BBR and Reno share a bottleneck link?",
  "id": "q6-what-happens-when-bbr-and-reno-share-a-bottleneck-link",
  "level": 3
}, {
  "value": "Q7: Describe the TCP throughput formula and its implications.",
  "id": "q7-describe-the-tcp-throughput-formula-and-its-implications",
  "level": 3
}, {
  "value": "Q8: What is the difference between packet loss and congestion ambiguity?",
  "id": "q8-what-is-the-difference-between-packet-loss-and-congestion-ambiguity",
  "level": 3
}, {
  "value": "9.17 Applications in Real Systems",
  "id": "917-applications-in-real-systems",
  "level": 2
}, {
  "value": "Linux TCP Congestion Control",
  "id": "linux-tcp-congestion-control",
  "level": 3
}, {
  "value": "C++ Implementation — Multi-Variant Cwnd Simulator",
  "id": "c-implementation--multi-variant-cwnd-simulator",
  "level": 3
}, {
  "value": "Python Implementation — Complete Multi-Variant Simulator",
  "id": "python-implementation--complete-multi-variant-simulator",
  "level": 3
}, {
  "value": "Google BBR Deployment",
  "id": "google-bbr-deployment",
  "level": 3
}, {
  "value": "CDN TCP Tuning",
  "id": "cdn-tcp-tuning",
  "level": 3
}, {
  "value": "Real-World Configuration Examples",
  "id": "real-world-configuration-examples",
  "level": 3
}, {
  "value": "9.18 Comparison Tables",
  "id": "918-comparison-tables",
  "level": 2
}, {
  "value": "TCP Variants at a Glance",
  "id": "tcp-variants-at-a-glance",
  "level": 3
}, {
  "value": "Congestion Window vs Receive Window",
  "id": "congestion-window-vs-receive-window",
  "level": 3
}, {
  "value": "AIMD Sawtooth Pattern Properties",
  "id": "aimd-sawtooth-pattern-properties",
  "level": 3
}, {
  "value": "Case Study: CDN Congestion Control Tuning for Global Video Delivery",
  "id": "case-study-cdn-congestion-control-tuning-for-global-video-delivery",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "9.19 Summary",
  "id": "919-summary",
  "level": 2
}, {
  "value": "9.20 Chapter Quiz",
  "id": "920-chapter-quiz",
  "level": 2
}, {
  "value": "9.21 Exercises",
  "id": "921-exercises",
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
        id: "chapter-9-tcp-congestion-control",
        children: "Chapter 9: TCP Congestion Control"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prerequisites:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/computer-networks/08-transport-layer",
          children: "Chapter 8: Transport Layer"
        }), " — TCP basics and connection management | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/computer-networks/10-application-layer",
          children: "Chapter 10: Application Layer"
        }), " — From transport to user-facing protocols"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/computer-networks/ch09-tcp-congestion.png",
        alt: "TCP Congestion Control"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between flow control and congestion control."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the TCP sliding window mechanism and the role of the advertised window."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the AIMD principle and its implementation through slow start and congestion avoidance."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare TCP Tahoe, Reno, NewReno, Cubic, and BBR congestion control algorithms."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze how competing TCP flows share bottleneck bandwidth."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement cwnd simulators in C++ and Python for multiple TCP variants."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Diagnose congestion-related issues including bufferbloat and spurious retransmission."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Flow vs Congestion Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rwnd protects receiver; cwnd protects network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Effective window = min(cwnd, rwnd)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Slow Start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double cwnd every RTT; starts at 10 MSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quickly probes available bandwidth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Congestion Avoidance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Additive increase: +1 MSS per RTT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear growth; AIMD sawtooth pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fast Retransmit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 duplicate ACKs trigger retransmission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoids waiting for RTO timeout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fast Recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inflate cwnd during recovery instead of slow start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintains throughput during isolated loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TCP Cubic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cubic function replaces linear AIMD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RTT-fair; Linux default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BBR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model-based, not loss-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Better throughput on deep buffers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Selective ACKs for multiple losses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient recovery in burst-loss scenarios"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[TCP Congestion Control] --> B[Flow vs Congestion]\n    A --> C[Slow Start]\n    A --> D[Congestion Avoidance]\n    A --> E[Fast Retransmit/Recovery]\n    A --> F[SACK]\n    A --> G[TCP Variants]\n    G --> G1[Tahoe]\n    G --> G2[Reno]\n    G --> G3[NewReno]\n    G --> G4[Cubic]\n    G --> G5[BBR]\n    A --> H[Tahoe vs Reno vs NewReno]\n    A --> I[cwnd vs rwnd]\n    A --> J[Interview Corner]\n    A --> K[Real-World Applications]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tcp-congestion-control-architecture",
      children: "TCP Congestion Control Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Detection[\"Detection Layer\"]\n        A[Packet Loss] --> B[Triple Duplicate ACK]\n        A --> C[RTO Expiry]\n        D[ECN Mark] --> B\n    end\n\n    subgraph Response[\"Response Layer\"]\n        B --> E[Fast Retransmit]\n        E --> F[Fast Recovery / Slow Start]\n        C --> G[Timeout Retransmit]\n        G --> H[Slow Start (cwnd=1)]\n    end\n\n    subgraph Control[\"Control Layer\"]\n        F --> I[Congestion Avoidance AIMD]\n        H --> I\n        I --> J{Congested?}\n        J -- Yes --> A\n        J -- No --> K[Continue AIMD]\n    end\n\n    subgraph Variants[\"TCP Variants\"]\n        I --> L[Tahoe: go to slow start]\n        I --> M[Reno: fast recovery]\n        M --> N[NewReno: partial ACK]\n        N --> O[Cubic: time-based growth]\n        O --> P[BBR: model-based]\n    end\n\n    classDef detect fill:#FF5722,color:#fff\n    classDef resp fill:#2196F3,color:#fff\n    classDef ctrl fill:#4CAF50,color:#fff\n    classDef var fill:#9C27B0,color:#fff\n    class A,D detect\n    class E,F,G,H resp\n    class I,J,K ctrl\n    class L,M,N,O,P var\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "91-flow-control-vs-congestion-control",
      children: "9.1 Flow Control vs. Congestion Control"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Flow control"
      }), " prevents a fast sender from overwhelming a slow receiver. The receiver advertises its available buffer space (rwnd, advertised window), and the sender limits unacknowledged data to rwnd."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Congestion control"
      }), " prevents a sender from overwhelming the network. When routers become overloaded, packets are dropped or queued excessively. TCP detects congestion through packet loss (duplicate ACKs or timeout) and reduces its sending rate accordingly. The sender maintains a congestion window (cwnd), and the actual window used is min(cwnd, rwnd)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The key distinction: flow control addresses receiver capacity — a known, static constraint communicated explicitly via TCP headers. Congestion control addresses network capacity — a shared, dynamic constraint inferred implicitly through loss signals."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Flow Control"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Congestion Control"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End-to-end (sender ↔ receiver)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path-wide (sender → network → receiver)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Signal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit (rwnd field in TCP header)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implicit (loss, RTT, ECN)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mechanism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receiver advertises free buffer space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sender manages cwnd via AIMD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Responsiveness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immediate (per-segment updates)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delayed (requires loss detection cycle)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Failure mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receiver overflow → data loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network collapse → congestion collapse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Control type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preventive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reactive (loss-based) or proactive (model-based)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "rwnd = 0 persist"
        }), ": Sender enters persist state, sending 1-byte probes. If probes are lost, deadlock can occur without the persist timer."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "rwnd = 0 with cwnd > 0"
        }), ": Effective window is 0 — receiver is the bottleneck, not the network."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Silent rwnd shrinkage"
        }), ": Receiver can shrink rwnd at any time (discouraged by RFC but possible). Sender must respect the new limit."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Congestion without loss"
        }), ": Deep buffers absorb bursts without dropping packets — loss-based algorithms (Reno, Cubic) keep increasing, causing bufferbloat."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "92-sliding-window-and-flow-control",
      children: "9.2 Sliding Window and Flow Control"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TCP's flow control uses a sliding window. The sender maintains:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Send window base"
        }), ": the oldest unacknowledged byte."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Send window size"
        }), ": min(cwnd, rwnd)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next byte to send"
        }), ": the boundary between sent-but-unacknowledged and unsent data."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The receiver advertises rwnd in every TCP segment:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "rwnd = RcvBuffer - (LastByteRcvd - LastByteRead)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If the receiver stops reading data, rwnd shrinks to zero. The sender stops transmitting but periodically sends one-byte probes (persist timer) to detect window reopening."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "congestion-window-vs-receive-window--detailed-comparison",
      children: "Congestion Window vs Receive Window — Detailed Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Congestion Window (cwnd)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Receive Window (rwnd)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents network overload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents receiver buffer overflow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maintained by"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sender"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receiver (advertised to sender)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Signal mechanism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implicit (loss/RTT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit (TCP header field)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variation frequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every RTT (or faster with delayed ACKs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only when buffer occupancy changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Initial value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 MSS (RFC 6928)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS-dependent (64 KB typical, up to 16 MB with window scaling)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Responsiveness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic, responds to network state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static relative to connection duration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interaction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min(cwnd, rwnd) determines actual window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Independent but interacts through window calculation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Impact of wrong value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Too high → congestion collapse; Too low → underutilization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Too high → slow receiver overlow; Too low → throughput cap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithmic driver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIMD, Cubic, BBR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application read rate + buffer sizing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-the-effective-window-is-mincwnd-rwnd",
      children: "Why the Effective Window Is min(cwnd, rwnd)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The effective window must satisfy both constraints simultaneously:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EffectiveWindow = min(cwnd, rwnd)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If cwnd = 32 KB and rwnd = 64 KB: the network is the tighter constraint, so the sender can send up to 32 KB unacknowledged."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If cwnd = 100 KB and rwnd = 16 KB: the receiver is the tighter constraint — even though the network could handle more, the receiver's buffer caps throughput."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If cwnd = 100 KB and rwnd = 100 KB: neither is binding; throughput is limited by the path's bandwidth-delay product."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "93-congestion-control-causes-and-effects",
      children: "9.3 Congestion Control: Causes and Effects"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-highway-traffic",
      children: "Real-World Analogy: Highway Traffic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Imagine a multi-lane highway connecting two cities. Cars (packets) travel from City A (sender) to City B (receiver)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No traffic"
        }), ": Cars flow freely at speed limit (high throughput, low latency)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rush hour begins"
        }), ": More cars enter than the highway can drain. Cars accumulate on on-ramps and in travel lanes (queuing at router buffers)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gridlock"
        }), ": On-ramps are completely full. Cars cannot merge (packet drop). Traffic collapses to a standstill (congestion collapse)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ramp metering"
        }), ": Traffic lights control how many cars enter per minute (AIMD — additive increase of inflow, multiplicative decrease when congestion detected)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Variable speed limits"
        }), ": Electronic signs slow cars before they hit the jam (ECN — explicit congestion notification before drop)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight"
      }), ": Just as building more highway lanes (bigger buffers) doesn't solve gridlock without ramp metering, adding router memory doesn't solve congestion without intelligent window management. Bufferbloat = highway with no on-ramp control."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "causes-of-congestion",
      children: "Causes of Congestion"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Cause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Link capacity mismatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast sender, slow bottleneck link"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gigabit Ethernet feeding 100 Mbps WAN link"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic aggregation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple flows converge at a router"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data center many-to-one (incast)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insufficient buffering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Router cannot absorb bursts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Micro-burst drops in shallow-buffer switches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Excessive buffering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Router buffers absorb too much, delaying loss signal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bufferbloat in home routers (500+ ms queue delay)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Routing changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packets rerouted causing reordering or duplication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BGP convergence during router failure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Window inflation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sender opens window beyond path capacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Misconfigured TCP send buffer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "effects-of-congestion",
      children: "Effects of Congestion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Packet loss"
        }), ": Router tail-drop when buffer exceeds capacity."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Increased latency"
        }), ": Queuing delay dominates; RTT grows from 10 ms to 500+ ms."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reduced throughput"
        }), ": Goodput collapses due to retransmissions and window reduction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Congestion collapse"
        }), ": Network spends most resources moving retransmitted packets (pathological in early TCP without congestion control)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spurious timeouts"
        }), ": Delayed ACKs due to queuing trigger unnecessary RTO."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Global synchronization"
        }), ": All TCP flows lose packets simultaneously and reduce window together, then increase together — creating synchronized sawtooth patterns that underutilize the link."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
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
            children: "AIMD window update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constant arithmetic; no data structure growth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Slow start doubling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counter increment/decrement only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RTT estimation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential weighted moving average"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Packet loss detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L) where L = lost packet count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires tracking outstanding sequence numbers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SACK scoreboard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per ACK (amortized)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(W) where W = window size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitmap or block list proportional to window"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cubic function eval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cubic polynomial evaluation; requires floating point"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(1) per ACK"
      }), ": TCP congestion control is designed to run per-packet in the kernel fast path. Any operation that scales with window size (e.g., linear search through outstanding packets) would degrade throughput on high-BDP paths."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "94-slow-start",
      children: "9.4 Slow Start"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-test-driving-a-new-car",
      children: "Real-World Analogy: Test-Driving a New Car"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When you get a new car, you don't floor it immediately. You take short trips to the grocery store, gradually extending to highway distances. Slow start does the same: it begins conservatively (cwnd = 10 MSS), and each successful round trip (ACK received) proves the network path can handle more data."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trip 1"
        }), ": Drive 10 blocks, return. (Send 10 packets, get ACKs.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trip 2"
        }), ": Drive 20 blocks, return. (Send 20 packets.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trip 3"
        }), ": Drive 40 blocks, return. (Send 40 packets.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trip 4"
        }), ": Drive 80 blocks — hit a traffic jam. (cwnd exceeds network capacity; loss detected.)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialize"
        }), ": Set cwnd = 10 MSS (RFC 6928), ssthresh = initial value (commonly 64 KB or arbitrarily high)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transmit"
        }), ": Send up to min(cwnd, rwnd) bytes without waiting for ACKs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Receive ACK"
        }), ": For each ACK, increment cwnd by 1 MSS."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check ssthresh"
        }), ": If cwnd >= ssthresh, transition to Congestion Avoidance (Section 9.5)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Detect loss"
        }), ": If a loss event occurs (3 duplicate ACKs or RTO):\na. Set ssthresh = max(flight_size / 2, 2 * MSS).\nb. For Tahoe: cwnd = 1 MSS, restart slow start.\nc. For Reno: cwnd = ssthresh + 3 MSS (fast recovery)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeat"
        }), " from step 2 until loss or ssthresh is reached."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OnInit():\n    cwnd = 10 * MSS\n    ssthresh = INFINITY   // effectively no initial cap\n    state = SLOW_START\n\nOnAck(ack):\n    if state == SLOW_START:\n        cwnd += MSS                    // exponential growth\n        if cwnd >= ssthresh:\n            state = CONGESTION_AVOIDANCE\n    else if state == CONGESTION_AVOIDANCE:\n        cwnd += (MSS * MSS) / cwnd     // additive increase\n\nOnLoss(timeout_or_3dup):\n    ssthresh = max(cwnd / 2, 2 * MSS)\n    if timeout:\n        cwnd = MSS\n        state = SLOW_START\n    else:  // 3 duplicate ACKs\n        if variant == TAHOE:\n            cwnd = MSS\n            state = SLOW_START\n        else if variant == RENO:\n            cwnd = ssthresh + 3 * MSS\n            state = FAST_RECOVERY\n        else if variant == CUBIC:\n            w_max = cwnd\n            cwnd = cwnd * 0.7\n            state = CONGESTION_AVOIDANCE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-table--slow-start-cwnd-evolution",
      children: "Dry Run Trace Table — Slow Start (cwnd evolution)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parameters: MSS = 1460 bytes, initial cwnd = 10 MSS, ssthresh = 64 KB (≈ 44 MSS), no loss."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "RTT"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "cwnd (MSS)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "cwnd (bytes)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Packets Sent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ACKs Received"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14,600"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow Start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "29,200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow Start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "58,400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow Start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "116,800"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow Start (cwnd > ssthresh ≈ 44)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "At RTT 3, cwnd (80 MSS) exceeds ssthresh (~44 MSS), so TCP transitions to Congestion Avoidance."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace--slow-start-with-loss",
      children: "Dry Run Trace — Slow Start with Loss"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parameters: initial cwnd = 10 MSS, ssthresh = 64 MSS, loss occurs at RTT 4 (cwnd = 160)."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "RTT"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "cwnd Before"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "cwnd After"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ssthresh"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow Start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK burst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow Start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK burst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow Start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK burst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow Start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 dup ACKs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (Tahoe)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow Start (restart)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK burst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow Start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK burst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow Start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 → 8 → 16 → 32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow Start until cwnd = 40"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cwnd = 40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transition to Congestion Avoidance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation--slow-start-and-congestion-avoidance",
      children: "C++ Implementation — Slow Start and Congestion Avoidance"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cmath>\n#include <iomanip>\n\nclass TCPCwndSimulator {\nprivate:\n    double cwnd;          // in MSS units\n    double ssthresh;      // in MSS units\n    int rtt_count;\n    bool loss_detected;\n\npublic:\n    enum Variant { TAHOE, RENO, NEWRENO, CUBIC };\n    Variant variant;\n\n    TCPCwndSimulator(Variant v = RENO)\n        : cwnd(10.0), ssthresh(64.0), rtt_count(0),\n          loss_detected(false), variant(v) {}\n\n    void slowStartRTT() {\n        if (loss_detected) {\n            cwnd = 1.0;\n            loss_detected = false;\n        }\n        // Slow start: double cwnd\n        cwnd *= 2.0;\n        rtt_count++;\n        std::cout << \"RTT \" << std::setw(2) << rtt_count\n                  << \" | cwnd = \" << std::setw(6) << cwnd\n                  << \" MSS | ssthresh = \" << std::setw(6) << ssthresh\n                  << \" | Phase: Slow Start\" << std::endl;\n    }\n\n    void congestionAvoidanceRTT() {\n        // AIMD: add 1 MSS per RTT\n        cwnd += 1.0;\n        rtt_count++;\n        std::cout << \"RTT \" << std::setw(2) << rtt_count\n                  << \" | cwnd = \" << std::setw(6) << cwnd\n                  << \" MSS | ssthresh = \" << std::setw(6) << ssthresh\n                  << \" | Phase: Congestion Avoidance\" << std::endl;\n    }\n\n    void cubicRTT() {\n        // Simplified Cubic: W(t) = C*(t-K)^3 + Wmax\n        static double w_max = 0;\n        static double k = 0;\n        static double t = 0;\n        double C = 0.4;\n        double beta = 0.7;\n\n        if (loss_detected) {\n            w_max = cwnd;\n            k = std::cbrt(w_max * (1 - beta) / C);\n            cwnd = cwnd * beta;\n            t = 0;\n            loss_detected = false;\n        }\n        t += 1.0;  // 1 RTT\n        cwnd = C * std::pow(t - k, 3) + w_max;\n        if (cwnd < 10.0) cwnd = 10.0;\n        rtt_count++;\n        std::cout << \"RTT \" << std::setw(2) << rtt_count\n                  << \" | cwnd = \" << std::setw(6) << cwnd\n                  << \" MSS | w_max = \" << std::setw(6) << w_max\n                  << \" | Phase: Cubic\" << std::endl;\n    }\n\n    void simulate() {\n        std::cout << \"\\n=== TCP Variant: \"\n                  << (variant == TAHOE ? \"Tahoe\" :\n                      variant == RENO ? \"Reno\" :\n                      variant == NEWRENO ? \"NewReno\" : \"Cubic\")\n                  << \" ===\" << std::endl;\n        std::cout << \"Initial: cwnd = \" << cwnd\n                  << \" MSS, ssthresh = \" << ssthresh\n                  << \" MSS\" << std::endl << std::endl;\n\n        // Phase 1: Slow start up to ssthresh\n        while (cwnd < ssthresh && rtt_count < 10) {\n            slowStartRTT();\n            // Simulate loss at RTT 4\n            if (rtt_count == 4) {\n                std::cout << \"  *** LOSS EVENT (3 dup ACKs) ***\" << std::endl;\n                loss_detected = true;\n                ssthresh = std::max(cwnd / 2.0, 2.0);\n                // Tahoe: cwnd = 1; Reno: fast recovery\n                if (variant == TAHOE) {\n                    cwnd = 1.0;\n                    std::cout << \"  Tahoe: cwnd = 1, slow start\" << std::endl;\n                } else {\n                    std::cout << \"  Reno/NewReno: cwnd = cwnd/2, fast recovery\" << std::endl;\n                }\n            }\n            if (loss_detected && variant != TAHOE) break;\n        }\n\n        // Phase 2: Congestion avoidance (or Cubic)\n        if (variant == CUBIC) {\n            for (int i = 0; i < 5; i++) {\n                if (rtt_count == 8) {\n                    std::cout << \"  *** LOSS EVENT (Cubic) ***\" << std::endl;\n                    loss_detected = true;\n                }\n                cubicRTT();\n            }\n        } else if (!loss_detected || variant == TAHOE) {\n            for (int i = 0; i < 10 && rtt_count < 20; i++) {\n                congestionAvoidanceRTT();\n            }\n        }\n    }\n};\n\nint main() {\n    TCPCwndSimulator tahoe(TCPCwndSimulator::TAHOE);\n    tahoe.simulate();\n\n    TCPCwndSimulator reno(TCPCwndSimulator::RENO);\n    reno.simulate();\n\n    TCPCwndSimulator cubic(TCPCwndSimulator::CUBIC);\n    cubic.simulate();\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation--tcp-reno-cwnd-simulator",
      children: "Python Implementation — TCP Reno Cwnd Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class TCPRenoSimulator:\n    \"\"\"\n    Full TCP Reno cwnd simulator with slow start, congestion avoidance,\n    fast retransmit, and fast recovery.\n    \"\"\"\n\n    def __init__(self, initial_cwnd=10, ssthresh=64, mss=1460):\n        self.cwnd = initial_cwnd          # in MSS units\n        self.ssthresh = ssthresh           # in MSS units\n        self.mss = mss                     # bytes\n        self.rtt_count = 0\n        self.phase = \"SLOW_START\"\n        self.loss_events = []\n        self.history = []\n\n    def record(self):\n        self.history.append({\n            'rtt': self.rtt_count,\n            'cwnd_mss': self.cwnd,\n            'cwnd_bytes': self.cwnd * self.mss,\n            'ssthresh': self.ssthresh,\n            'phase': self.phase\n        })\n\n    def process_rtt(self, loss=False):\n        self.rtt_count += 1\n        if loss:\n            self.ssthresh = max(self.cwnd // 2, 2)\n            self.cwnd = self.ssthresh + 3  # Fast recovery inflation\n            self.phase = \"FAST_RECOVERY\"\n            self.loss_events.append(self.rtt_count)\n        elif self.phase == \"SLOW_START\":\n            self.cwnd *= 2\n            if self.cwnd >= self.ssthresh:\n                self.phase = \"CONGESTION_AVOIDANCE\"\n        elif self.phase == \"CONGESTION_AVOIDANCE\":\n            self.cwnd += 1  # AIMD: +1 MSS per RTT\n        elif self.phase == \"FAST_RECOVERY\":\n            self.phase = \"CONGESTION_AVOIDANCE\"\n            self.cwnd = self.ssthresh\n\n        self.record()\n        return self\n\n    def simulate(self, rtts=20, loss_rtts=None):\n        \"\"\"Run simulation for given RTTs with optional loss RTT list.\"\"\"\n        if loss_rtts is None:\n            loss_rtts = []\n        self.record()\n        for _ in range(rtts):\n            loss = (self.rtt_count + 1) in loss_rtts\n            self.process_rtt(loss)\n        return self\n\n    def print_trace(self):\n        print(f\"\\n{'RTT':<5} {'cwnd(MSS)':<12} {'cwnd(bytes)':<15} \"\n              f\"{'ssthresh':<10} {'Phase':<25}\")\n        print(\"-\" * 70)\n        for h in self.history:\n            print(f\"{h['rtt']:<5} {h['cwnd_mss']:<12.1f} {h['cwnd_bytes']:<15.0f} \"\n                  f\"{h['ssthresh']:<10.1f} {h['phase']:<25}\")\n\n    def throughput_estimate(self, rtt_seconds):\n        \"\"\"Approximate throughput in bps.\"\"\"\n        avg_cwnd = sum(h['cwnd_mss'] for h in self.history) / len(self.history)\n        return (avg_cwnd * self.mss * 8) / rtt_seconds\n\n\nclass TCPCubicSimulator:\n    \"\"\"\n    TCP Cubic congestion control simulator.\n    W(t) = C*(t-K)^3 + Wmax\n    \"\"\"\n\n    def __init__(self, initial_cwnd=10, ssthresh=64, C=0.4, beta=0.7):\n        self.cwnd = initial_cwnd\n        self.ssthresh = ssthresh\n        self.w_max = initial_cwnd\n        self.C = C\n        self.beta = beta\n        self.t = 0.0\n        self.K = 0.0\n        self.rtt_count = 0\n        self.phase = \"SLOW_START\"\n        self.history = []\n\n    def compute_K(self):\n        \"\"\"K = (Wmax * beta / C)^(1/3)\"\"\"\n        self.K = (self.w_max * (1 - self.beta) / self.C) ** (1/3)\n\n    def cubic_update(self):\n        \"\"\"W(t) = C*(t-K)^3 + Wmax\"\"\"\n        self.cwnd = self.C * (self.t - self.K) ** 3 + self.w_max\n        if self.cwnd < 10:\n            self.cwnd = 10\n\n    def process_rtt(self, loss=False):\n        self.rtt_count += 1\n        if loss:\n            self.w_max = self.cwnd\n            self.compute_K()\n            self.cwnd = self.cwnd * self.beta\n            self.cwnd = max(self.cwnd, 10)\n            self.t = 0.0\n            self.phase = \"CUBIC_AFTER_LOSS\"\n            self.loss_events.append(self.rtt_count)\n        elif self.phase == \"SLOW_START\":\n            self.cwnd *= 2\n            if self.cwnd >= self.ssthresh:\n                self.phase = \"CUBIC_GROWTH\"\n        elif self.phase in (\"CUBIC_GROWTH\", \"CUBIC_AFTER_LOSS\"):\n            self.t += 1.0\n            self.cubic_update()\n            self.phase = \"CUBIC_GROWTH\"\n\n        self.history.append({\n            'rtt': self.rtt_count,\n            'cwnd_mss': self.cwnd,\n            'w_max': self.w_max,\n            'phase': self.phase,\n            't': self.t\n        })\n\n    def simulate(self, rtts=20, loss_rtts=None):\n        if loss_rtts is None:\n            loss_rtts = []\n        self.loss_events = []\n        for _ in range(rtts):\n            loss = (self.rtt_count + 1) in loss_rtts\n            self.process_rtt(loss)\n        return self\n\n    def print_trace(self):\n        print(f\"\\n{'RTT':<5} {'cwnd(MSS)':<12} {'w_max':<10} \"\n              f\"{'t':<5} {'K':<8} {'Phase':<20}\")\n        print(\"-\" * 70)\n        for h in self.history:\n            print(f\"{h['rtt']:<5} {h['cwnd_mss']:<12.1f} {h['w_max']:<10.1f} \"\n                  f\"{h['t']:<5.1f} {h.get('K', 0):<8.2f} {h['phase']:<20}\")\n\n\n# Run simulations\nif __name__ == \"__main__\":\n    print(\"=\" * 70)\n    print(\"TCP RENO SIMULATION — Loss at RTT 5\")\n    print(\"=\" * 70)\n    reno = TCPRenoSimulator()\n    reno.simulate(rtts=15, loss_rtts=[5])\n    reno.print_trace()\n    print(f\"\\nEstimated throughput (100ms RTT): \"\n          f\"{reno.throughput_estimate(0.1)/1e6:.2f} Mbps\")\n\n    print(\"\\n\" + \"=\" * 70)\n    print(\"TCP CUBIC SIMULATION — Loss at RTT 5 and RTT 12\")\n    print(\"=\" * 70)\n    cubic = TCPCubicSimulator()\n    cubic.simulate(rtts=18, loss_rtts=[5, 12])\n    cubic.print_trace()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis--slow-start",
      children: "Complexity Analysis — Slow Start"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Per-ACK cwnd increment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single integer addition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Per-RTT effective doubling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) packets sent where n = cwnd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential growth means per-RTT work doubles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ssthresh comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single floating-point comparison"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total work per RTT (bytes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(cwnd)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each packet in the window generates one ACK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory for outstanding packets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(cwnd)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retransmission queue scales with window size"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why exponential growth matters"
      }), ": Slow start grows cwnd as 2^(RTT), reaching available bandwidth in O(log BDP) round trips. Without exponential growth, a BDP of 1000 packets would take 1000 RTTs to fill the pipe using linear growth. With slow start, it takes ≈10 RTTs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-congestionwindowsimulator",
      children: "TypeScript Implementation: CongestionWindowSimulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface CwndEvent {\n  rtt: number;\n  cwnd: number;\n  ssthresh: number;\n  phase: 'slow_start' | 'congestion_avoidance' | 'recovery';\n}\n\nclass CongestionWindowSimulator {\n  private cwnd: number = 10;\n  private ssthresh: number = 64;\n  private mss: number = 1460;\n  private history: CwndEvent[] = [];\n  private phase: 'slow_start' | 'congestion_avoidance' | 'recovery' = 'slow_start';\n\n  simulateRTT(loss: boolean = false): void {\n    if (loss) {\n      this.ssthresh = Math.max(this.cwnd / 2, 2);\n      this.cwnd = this.ssthresh + 3;\n      this.phase = 'recovery';\n    } else if (this.phase === 'slow_start') {\n      this.cwnd *= 2;\n      if (this.cwnd >= this.ssthresh) this.phase = 'congestion_avoidance';\n    } else if (this.phase === 'congestion_avoidance') {\n      this.cwnd += this.mss * this.mss / this.cwnd;\n    } else {\n      this.phase = 'congestion_avoidance';\n    }\n    this.history.push({ rtt: this.history.length + 1, cwnd: Math.round(this.cwnd), ssthresh: this.ssthresh, phase: this.phase });\n  }\n\n  simulateRTTs(count: number, lossRTTs: number[] = []): void {\n    for (let i = 0; i < count; i++) this.simulateRTT(lossRTTs.includes(i + 1));\n  }\n\n  getHistory(): CwndEvent[] { return this.history; }\n}\n// Usage:\n// const sim = new CongestionWindowSimulator();\n// sim.simulateRTTs(15, [8]);\n// console.log(sim.getHistory());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "95-congestion-avoidance-aimd",
      children: "9.5 Congestion Avoidance (AIMD)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-elevator-loading",
      children: "Real-World Analogy: Elevator Loading"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You're loading an elevator with unknown weight capacity."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Slow start equivalent"
        }), ": Add people in doubling groups — 1, 2, 4, 8 — until the elevator creaks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Congestion avoidance"
        }), ": Once you hit the warning threshold, add one person at a time. If the elevator alarms (loss), everyone exits and you start at half the previous count."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The sawtooth pattern in performance: load increases linearly until a failure forces a sharp reduction, then the cycle repeats."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-1",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition"
        }), ": When cwnd >= ssthresh, enter congestion avoidance from slow start."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Per-ACK update"
        }), ": For each ACK, increase cwnd by MSS * (MSS / cwnd). This yields approximately +1 MSS per RTT."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-clocking"
        }), ": The ACK-clocking mechanism means the rate of increase naturally slows as cwnd grows (more ACKs needed per MSS increment)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Loss detection"
        }), ": On 3 duplicate ACKs or RTO:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Set ssthresh = max(cwnd / 2, 2 * MSS)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "For Reno: set cwnd = ssthresh + 3, enter fast recovery."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "For Tahoe: set cwnd = 1 MSS, enter slow start."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Return"
        }), ": After recovery, resume congestion avoidance from ssthresh (Reno) or after slow start reaches ssthresh (Tahoe)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aimd-sawtooth-pattern--dry-run-trace",
      children: "AIMD Sawtooth Pattern — Dry Run Trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parameters: MSS = 1460, initial cwnd = 10, ssthresh = 32."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "RTT"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "cwnd Start"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "cwnd End"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ssthresh"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Events"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double, cwnd > ssthresh → CA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "41"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+1 MSS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "41"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+1 MSS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "43"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+1 MSS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "43"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "44"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+1 MSS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LOSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "44"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ssthresh = 44/2 = 22, cwnd = 25 (22+3)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial ACK → exit recovery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+1 MSS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+1 MSS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+1 MSS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+1 MSS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LOSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ssthresh = 13, cwnd = 16"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exit recovery"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note the sawtooth pattern: each loss event cuts cwnd in half, then it grows linearly by 1 MSS per RTT until the next loss."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aimd-pseudocode",
      children: "AIMD Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Additive Increase\nOnAck():\n    if cwnd < ssthresh:\n        cwnd += MSS           // slow start (exponential)\n    else:\n        cwnd += MSS * MSS / cwnd  // congestion avoidance (linear, ~1 MSS/RTT)\n\n// Multiplicative Decrease\nOnLoss():\n    ssthresh = max(cwnd / 2, 2 * MSS)\n    if IsTimeout():\n        cwnd = MSS            // restart from 1\n    else:\n        cwnd = ssthresh + 3 * MSS  // fast recovery (Reno)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "congestion-avoidance-vs-slow-start--phase-comparison",
      children: "Congestion Avoidance vs Slow Start — Phase Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Slow Start"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Congestion Avoidance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Growth rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential (double per RTT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear (+1 MSS per RTT)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trigger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection start or timeout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cwnd >= ssthresh"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Per-ACK formula"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cwnd += MSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cwnd += MSS^2 / cwnd"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quickly estimate available bandwidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gently probe for more capacity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loss response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set ssthresh = cwnd/2, restart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set ssthresh = cwnd/2, resume from ssthresh"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overshoots available bandwidth (burst loss)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow convergence on high-BDP paths"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RTT penalty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (doubling is RTT-independent)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shorter-RTT flows grow faster (Reno unfairness)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Phase after loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow start again (Tahoe) or fast recovery (Reno)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast recovery then congestion avoidance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis--congestion-avoidance",
      children: "Complexity Analysis — Congestion Avoidance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Per-ACK additive increase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single division + addition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiplicative decrease"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Division by 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ssthresh tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single stored value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACK-clocking feedback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-regulating via ACK arrival rate"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(1) is critical"
      }), ": A kernel TCP implementation handles per-packet events at line rate. At 10 Gbps with 1500-byte packets, that's ~830,000 packets/second. Any nonlinear operation would create a bottleneck."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-aimdsimulator",
      children: "TypeScript Implementation: AIMDSimulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface AIMDState {\n  rtt: number;\n  cwnd: number;\n  ssthresh: number;\n  throughput: number;\n}\n\nclass AIMDSimulator {\n  private cwnd: number = 10;\n  private ssthresh: number = 64;\n  private mss: number = 1460;\n  private rtt: number = 100;\n  private history: AIMDState[] = [];\n  private totalBytes: number = 0;\n\n  private getThroughput(): number {\n    return (this.cwnd * this.mss) / (this.rtt / 1000);\n  }\n\n  stepRTT(): void {\n    this.totalBytes += this.cwnd * this.mss;\n    this.history.push({ rtt: this.history.length + 1, cwnd: Math.round(this.cwnd), ssthresh: this.ssthresh, throughput: Math.round(this.getThroughput()) });\n  }\n\n  additiveIncrease(): void {\n    this.cwnd += this.mss * this.mss / this.cwnd;\n  }\n\n  multiplicativeDecrease(): void {\n    this.ssthresh = Math.max(this.cwnd / 2, 2);\n    this.cwnd = this.ssthresh;\n  }\n\n  simulateAIMD(cycles: number, windowPeak: number): AIMDState[][] {\n    const cyclesData: AIMDState[][] = [];\n    for (let c = 0; c < cycles; c++) {\n      const cycleData: AIMDState[] = [];\n      while (this.cwnd < windowPeak) {\n        this.stepRTT();\n        cycleData.push({ ...this.history[this.history.length - 1] });\n        this.additiveIncrease();\n      }\n      this.multiplicativeDecrease();\n      cyclesData.push(cycleData);\n    }\n    return cyclesData;\n  }\n\n  getHistory(): AIMDState[] { return this.history; }\n  getTotalBytes(): number { return this.totalBytes; }\n}\n// Usage:\n// const aimd = new AIMDSimulator();\n// const cycles = aimd.simulateAIMD(3, 48);\n// console.log(`Total bytes sent: ${aimd.getTotalBytes()}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "96-fast-retransmit-and-fast-recovery",
      children: "9.6 Fast Retransmit and Fast Recovery"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-conference-call-with-missing-audio",
      children: "Real-World Analogy: Conference Call with Missing Audio"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You're on a conference call. Speaker A says segment 1, 2, 3, 4, 5."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You hear 1, 2, but not 3. You hear 4, 5."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You interrupt: \"Say again after statement 2?\" (Duplicate ACK for segment 2 — \"I'm still waiting for 3\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After three requests: \"I STILL haven't heard 3!\" (3 duplicate ACKs → fast retransmit)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The speaker skips to re-say 3 without waiting for a pause in the conversation (no RTO wait)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fast-retransmit--numbered-steps",
      children: "Fast Retransmit — Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Receiver detects gap"
        }), ": Receives out-of-order segment. Immediately sends duplicate ACK for the last in-order byte."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sender counts ACKs"
        }), ": Tracks duplicate ACKs for the same sequence number."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Threshold reached"
        }), ": After 3 duplicate ACKs (4 total ACKs for the same sequence), sender retransmits the missing segment immediately."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No RTO wait"
        }), ": Retransmission happens without waiting for the retransmission timer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fast-recovery--numbered-steps-reno",
      children: "Fast Recovery — Numbered Steps (Reno)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "On 3rd dup ACK"
        }), ": ssthresh = cwnd / 2. cwnd = ssthresh + 3 (inflated for the 3 dup ACKs that have left the network)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For each additional dup ACK"
        }), ": cwnd += 1 MSS. This accounts for a packet leaving the network (the dup ACK indicates one out-of-order packet arrived)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transmit"
        }), ": If allowed by cwnd, send a new packet."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "On partial ACK"
        }), " (ACKs the retransmitted segment but not all data sent before loss): cwnd = ssthresh. Enter congestion avoidance."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fast-retransmitrecovery--dry-run-trace",
      children: "Fast Retransmit/Recovery — Dry Run Trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parameters: cwnd = 48 MSS, packets 1-48 in flight. Packet 10 is lost."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "cwnd"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transmit P1-P48"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "48"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normal send"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P10 dropped at router"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer overflow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P11 arrives at receiver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "48"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sender gets dup ACK#1 (for P9)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P12 arrives at receiver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "48"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sender gets dup ACK#2 (for P9)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P13 arrives at receiver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "48"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sender gets dup ACK#3 (for P9)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 dup ACKs received"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "48"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ssthresh = 24, cwnd = 27, retransmit P10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dup ACK#4 (P14 arrived)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cwnd += 1, transmit P49"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dup ACK#5 (P15 arrived)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "29"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cwnd += 1, transmit P50"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial ACK for P10 (ACKs up to P48)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cwnd = ssthresh, enter CA"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode--fast-retransmit-and-recovery",
      children: "Pseudocode — Fast Retransmit and Recovery"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OnDupAck(dup_count):\n    if dup_count == 1:\n        // First duplicate — just note it\n        return\n    if dup_count == 3:\n        // Third duplicate — fast retransmit\n        ssthresh = max(cwnd / 2, 2 * MSS)\n        RetransmitPacket(missing_seqno)\n        if variant == RENO:\n            cwnd = ssthresh + 3 * MSS\n            state = FAST_RECOVERY\n        else if variant == NEWRENO:\n            cwnd = ssthresh + 3 * MSS\n            state = FAST_RECOVERY\n            partial_ack_count = 0\n        else: // TAHOE\n            cwnd = MSS\n            state = SLOW_START\n    else if dup_count > 3 and state == FAST_RECOVERY:\n        cwnd += MSS\n        if CanTransmit():\n            SendNewPacket()\n\nOnPartialAck(ack):\n    if state == FAST_RECOVERY:\n        if variant == NEWRENO and NotFullyAcknowledged():\n            // NewReno: retransmit next unacked segment\n            RetransmitNextUnacked()\n            partial_ack_count += 1\n        else:\n            cwnd = ssthresh\n            state = CONGESTION_AVOIDANCE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis--fast-retransmitrecovery",
      children: "Complexity Analysis — Fast Retransmit/Recovery"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dup ACK counting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintains per-sequence-number duplicate count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ssthresh update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Half of cwnd"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retransmission queue lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) with hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need fast lookup of lost segment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cwnd inflation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per dup ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple increment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partial ACK detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare ACK number with highest sent sequence"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why fast retransmit matters"
      }), ": Without it, TCP waits for the RTO (minimum 1 second per RFC 6298) to detect loss. At 10 Gbps, a 1-second RTO wastes 1.25 GB of potential throughput. Fast retransmit detects loss in ~1 RTT instead."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Packet reordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate ACKs triggered by reordering, not loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DSACK (Duplicate SACK) allows receiver to report duplicate reception; sender can infer reordering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spurious retransmission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retransmitting segments that weren't lost (delay spike)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F-RTO (Forward RTO-Recovery) algorithm detects spurious timeouts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple losses in one window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reno recovery fails on >1 loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NewReno retransmits one lost packet per partial ACK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Late ACK causes window stall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receiver ACK delayed, sender window stalls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delayed ACK timer (max 500 ms) ensures ACK eventually sent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACK loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lost ACK reduces effective cwnd growth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cumulative ACKs cover lost ACKs — only the latest ACK matters"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-retransmissiontimer",
      children: "TypeScript Implementation: RetransmissionTimer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface RetransmissionState {\n  event: string;\n  rto: number;\n  srtt: number;\n  rttvar: number;\n  backoff: number;\n}\n\nclass RetransmissionTimer {\n  private srtt: number = 0;\n  private rttvar: number = 0;\n  private rto: number = 3000;\n  private backoff: number = 1;\n  private readonly ALPHA = 1 / 8;\n  private readonly BETA = 1 / 4;\n  private readonly MIN_RTO = 200;\n  private readonly MAX_RTO = 120000;\n  private history: RetransmissionState[] = [];\n\n  private record(event: string): void {\n    this.history.push({ event, rto: Math.round(this.rto), srtt: Math.round(this.srtt), rttvar: Math.round(this.rttvar), backoff: this.backoff });\n  }\n\n  measureRTT(sampleRTT: number): void {\n    if (this.srtt === 0) {\n      this.srtt = sampleRTT;\n      this.rttvar = sampleRTT / 2;\n    } else {\n      const diff = sampleRTT - this.srtt;\n      this.srtt += this.ALPHA * diff;\n      this.rttvar += this.BETA * (Math.abs(diff) - this.rttvar);\n    }\n    this.rto = Math.max(this.MIN_RTO, Math.min(this.MAX_RTO, this.srtt + 4 * this.rttvar));\n    this.backoff = 1;\n    this.record('measureRTT');\n  }\n\n  onRTOExpiry(): void {\n    this.backoff *= 2;\n    this.rto = Math.min(this.MAX_RTO, this.rto * this.backoff);\n    this.record('RTO_expiry');\n  }\n\n  onACKAfterRTO(): void {\n    this.backoff = 1;\n    this.rto = Math.max(this.MIN_RTO, this.srtt + 4 * this.rttvar);\n    this.record('ACK_after_RTO');\n  }\n\n  getRTO(): number { return this.rto; }\n  getSRTT(): number { return this.srtt; }\n  getHistory(): RetransmissionState[] { return this.history; }\n}\n// Usage:\n// const rt = new RetransmissionTimer();\n// rt.measureRTT(120);  // srtt=120, rttvar=60, rto=120+240=360\n// rt.measureRTT(150);  // srtt=123.75, rttvar=57.19, rto=123.75+228.75=352\n// console.log(`RTO: ${rt.getRTO()}ms`); // ~353ms\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "97-tcp-tahoe",
      children: "9.7 TCP Tahoe"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TCP Tahoe predates fast recovery. On triple duplicate ACK:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set ssthresh = cwnd / 2."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set cwnd = 1 MSS."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enter slow start."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Slow start continues until cwnd reaches the new ssthresh, then enters congestion avoidance."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tahoe-dry-run--loss-at-cwnd--48",
      children: "Tahoe Dry Run — Loss at cwnd = 48"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "RTT"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "cwnd"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ssthresh"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64 (capped)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transition to CA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+1 MSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "65"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loss (3 dup)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ssthresh=32, cwnd=1, slow start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At ssthresh → CA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+1 MSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "33"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+1/RTT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA until next loss"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Observation"
      }), ": Tahoe wastes significant throughput after loss because it re-probes from cwnd = 1. This motivated Reno's fast recovery."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "98-tcp-reno--detailed-analysis",
      children: "9.8 TCP Reno — Detailed Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TCP Reno improved Tahoe by adding fast recovery. Instead of resetting to cwnd = 1 on triple duplicate ACK, Reno sets cwnd = ssthresh + 3 and deflates cwnd back to ssthresh on partial ACK."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reno-dry-run--single-loss-at-cwnd--48",
      children: "Reno Dry Run — Single Loss at cwnd = 48"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "RTT"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "cwnd"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ssthresh"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Packets Sent"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SS→CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+1 MSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "65"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "65"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 dup ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "35"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ssthresh=32, cwnd=35"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dup ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "36"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+1 cwnd per dup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dup ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "37"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+1 cwnd"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cwnd = ssthresh"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+1 MSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "33"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIMD resume"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reno-limitations",
      children: "Reno Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple losses in one window"
        }), ": If multiple packets are lost, the partial ACK (which ACKs the retransmitted packet + some later packets) doesn't provide enough information to retransmit the remaining losses. Reno exits recovery after the first partial ACK."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RTT unfairness"
        }), ": Throughput ≈ (1/RTT) * sqrt(3/(2p)) for Reno. Shorter RTT flows get proportionally higher throughput."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Loss-signal dependency"
        }), ": Reno relies entirely on packet loss as congestion signal. In deep-buffer networks, loss occurs long after queues are full (bufferbloat)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis--tcp-reno",
      children: "Complexity Analysis — TCP Reno"
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
            children: "Steady-state throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(MSS/RTT) * (1/sqrt(p))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classic square-root formula; p = loss rate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Convergence time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(RTT/packets)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIMD requires many RTTs to reach equilibrium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fairness index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/n for n identical flows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jain's fairness index: Reno converges to equal sharing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer requirement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth × RTT / 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Window reduction from W to W/2 requires buffer for in-flight packets"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "99-tcp-newreno",
      children: "9.9 TCP NewReno"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TCP NewReno (RFC 6582, now RFC 6675) addresses Reno's multiple-loss weakness."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-innovation-partial-ack-handling",
      children: "Key Innovation: Partial ACK Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Instead of exiting fast recovery on the first partial ACK, NewReno retransmits the next unacknowledged segment. It stays in fast recovery until all data sent before the loss event is acknowledged."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-2",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same as Reno up to 3 duplicate ACKs."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["On ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "partial ACK"
        }), " (ACKs the retransmitted packet but not all outstanding data):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Retransmit the next unacknowledged segment."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Deflate cwnd by 1 MSS (the partial ACK indicates one packet left the network)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Stay in fast recovery."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["On ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "full ACK"
        }), " (ACKs all data sent before loss):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Set cwnd = ssthresh."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Enter congestion avoidance."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "newreno-dry-run--multiple-losses",
      children: "NewReno Dry Run — Multiple Losses"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Scenario: Packets 10, 12, 14 lost in a window of cwnd = 48."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "cwnd"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ssthresh"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 dup ACK for P9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR: retransmit P10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial ACK (P10 okay, still missing P12)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retransmit P12, stay in FR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial ACK (P12 okay, still missing P14)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retransmit P14, stay in FR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exit FR → CA"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reno comparison"
      }), ": At step 1, Reno would exit fast recovery and enter CA with cwnd = 24. Packets 12 and 14 would remain unretransmitted, eventually causing an RTO."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis--newreno-vs-reno",
      children: "Complexity Analysis — NewReno vs Reno"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reno"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NewReno"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recovery entry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cwnd = ssthresh + 3, FR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partial ACK action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exit FR, cwnd = ssthresh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retransmit next lost, stay in FR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple loss handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RTO required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retransmits one loss per RTT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Per-RTT recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 lost segment per RTT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (small state addition)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low loss rate (<1%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate loss rate (1-5%)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "910-tcp-cubic",
      children: "9.10 TCP Cubic"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-race-car-acceleration",
      children: "Real-World Analogy: Race Car Acceleration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cubic is like a race car accelerating on a straightaway:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Just after a pit stop (loss)"
        }), ": The car accelerates rapidly back toward its previous speed (fast growth toward Wmax)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Near top speed"
        }), ": The car shifts to fine-grained speed adjustments — tiny throttle changes to find the optimal speed without overshooting (plateau near Wmax)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Beyond previous best"
        }), ": The car pushes past its old record, accelerating faster as it explores new territory (accelerating growth above Wmax)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "detailed-cubic-mechanism",
      children: "Detailed Cubic Mechanism"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TCP Cubic (RFC 8312) replaces the linear AIMD with a cubic function:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$W(t) = C \\cdot (t - K)^3 + W_{max}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$W_{max}$ = window size when loss occurred"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$C$ = scaling constant (default 0.4)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$t$ = time since last loss (in seconds, not RTT)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\beta$ = multiplicative decrease factor (default 0.7)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$K = \\sqrt[3]{W_{max} \\cdot (1 - \\beta) / C}$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cubic-growth-regions",
      children: "Cubic Growth Regions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "After loss"
        }), " ($t \\approx 0$): Window drops to $W_{max} \\cdot \\beta$. Then grows rapidly because the cubic function is steepest far from $K$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Near $W_{max}$"
        }), " ($t \\approx K$): Growth plateaus — the cubic function flattens. The flow \"hovers\" near the previously known congestion point, gently probing whether bandwidth has increased."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Above $W_{max}$"
        }), " ($t > K$): Growth accelerates (convex portion of cubic). The flow aggressively explores new bandwidth."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rtt-independence",
      children: "RTT Independence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Since $t$ is measured in seconds (not RTTs), Cubic's growth rate is independent of the flow's RTT. Two Cubic flows with different RTTs achieve similar throughput — unlike Reno where a 10 ms RTT flow gets 5x the throughput of a 50 ms RTT flow."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cubic-dry-run-trace",
      children: "Cubic Dry Run Trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parameters: C = 0.4, beta = 0.7, initial Wmax = 100 MSS, loss at RTT 0."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "RTT"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "t (sec)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "K"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "W(t) (MSS)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After loss (100 * 0.7)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "73.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast growth toward Wmax"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "77.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast growth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "81.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast growth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "85.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast growth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "89.9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Growth slowing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plateauing near Wmax"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "92.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plateauing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "96.9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Still near Wmax"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "35"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "103.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Starting to exceed Wmax"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "110.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accelerating above Wmax"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis--cubic",
      children: "Complexity Analysis — Cubic"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cubic polynomial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed 3 operations: multiplications + addition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cube root computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single cbrt() call at initialization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monotonic timestamp delta"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Floating-point math"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU cost < ADD operation on modern hardware"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Cubic's complexity is acceptable"
      }), ": Although cubic involves floating-point operations, it's called only once per ACK (typically < 100K times/second on a 10 Gbps link). Modern CPUs handle this in under 100 ns. The kernel's TCP fast path remains the bottleneck — Cubic's per-packet cost is negligible relative to interrupt handling and memory operations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "911-tcp-bbr-bottleneck-bandwidth-and-round-trip-propagation-time",
      children: "9.11 TCP BBR (Bottleneck Bandwidth and Round-trip propagation time)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-smart-cruise-control",
      children: "Real-World Analogy: Smart Cruise Control"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Standard TCP (Reno) is like cruise control that brakes only when you hit something (loss). BBR is like smart cruise control that maintains a safe following distance by constantly measuring the gap:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BBR estimates how fast the car ahead is going (bottleneck bandwidth, BtlBw)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BBR measures the road's free-flow travel time (RTprop = minimum observed RTT)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It adjusts speed to match the lead car + safe gap, never needing to hit anything."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-bbr-works",
      children: "How BBR Works"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BBR has four phases that cycle continuously:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Startup"
        }), ": Exponential growth (like slow start) until BBR estimates BtlBw has been found."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drain"
        }), ": Reduce sending rate to drain any queue built during Startup."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ProbeBW"
        }), ": The steady-state. BBR paces at BtlBw, periodically probing 25% above to detect higher bandwidth, then 25% below to drain any resulting queue."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ProbeRTT"
        }), ": If RTprop hasn't been updated in 10 seconds, enter a brief drain to measure the minimum RTT."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bbr-vs-loss-based-algorithms",
      children: "BBR vs Loss-Based Algorithms"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BBR"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reno/Cubic"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Congestion signal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model (BtlBw, RTprop)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packet loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Queue buildup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intentionally minimized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can fill deep buffers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fairness with loss-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can be aggressive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard AIMD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep buffers, lossy links"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-loss, shallow-buffer networks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput on lossy links"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Near line rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Degrades as 1/sqrt(loss rate)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (pacing, filtering)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal (per-ACK counter)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google's B4 WAN, YouTube"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux default before BBR"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis--bbr",
      children: "Complexity Analysis — BBR"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth estimation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max of delivered/elapsed over window"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RTT tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Min over window"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pacing rate calculation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiplication: pacing_gain × BtlBw"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gain cycling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Round-robin gain values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State machine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple phase transitions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "912-sack-selective-acknowledgments",
      children: "9.12 SACK (Selective Acknowledgments)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-lost-luggage-claim",
      children: "Real-World Analogy: Lost Luggage Claim"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reno is like saying \"I'm missing something between bag 10 and bag 48\" (cumulative ACK). The airline has no idea which specific bags you're missing. SACK is like providing a precise list: \"I have bags 1-9, 11, 13-47, 49. Missing: 10, 12, 48.\" The airline can resend exactly those three."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sack-mechanism",
      children: "SACK Mechanism"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SACK option in TCP header"
        }), ": Reports up to 4 non-contiguous blocks of received data (RFC 2018, extended in RFC 2883 for DSACK)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SACK scoreboard"
        }), ": Sender maintains a bitmap or list of received segments."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Selective retransmission"
        }), ": On loss, sender retransmits only the specific segments marked as missing in the scoreboard."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sack-dry-run-trace",
      children: "SACK Dry Run Trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sent packets: 1 through 20. Lost: 5, 10, 15."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sender Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ACK Received"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SACK Blocks"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Missing"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send P1-P20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK for P4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dup ACK for P4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6-6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dup ACK for P4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6-7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dup ACK for P4 (3rd)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6-8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retransmit P5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK for P5, but P10 lost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11-11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dup ACK for P9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11-12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dup ACK for P9 (3rd)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11-14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retransmit P10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK for P10, but P15 lost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK 14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16-16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 dup ACK for P14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retransmit P15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK 20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All received"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without SACK, Reno would retransmit only P10 and then exit fast recovery on the partial ACK. Packets 15 and 20 would require a timeout. With SACK, all three lost packets are retransmitted precisely."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sack-vs-no-sack-comparison",
      children: "SACK vs No-SACK Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "No SACK (Reno/NewReno)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SACK"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple loss recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 loss per RTT (NewReno) or timeout (Reno)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All losses in one RTT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RTO avoidance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incomplete for burst losses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Near-complete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (no scoreboard)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (scoreboard + block tracking)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Header overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 40 bytes (4 blocks × 8 bytes + 2 type/length)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU cost per ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(S) where S = number of SACK blocks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance on lossy links"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Degrades significantly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintains throughput"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis--sack",
      children: "Complexity Analysis — SACK"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SACK block parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(B) per ACK (B ≤ 4 blocks)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max 4 blocks per option"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scoreboard update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(B log N) for red-black tree, O(W) for bitmap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on implementation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retransmission decision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L) where L = lost segments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan outstanding for gaps in scoreboard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory (scoreboard)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(W) where W = window in packets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitmap: W bits; segment list: W nodes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "913-tahoe-vs-reno-vs-newreno--detailed-comparison",
      children: "9.13 Tahoe vs Reno vs NewReno — Detailed Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recovery-behavior-on-loss",
      children: "Recovery Behavior on Loss"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Variant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "3 Dup ACK Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Multiple Loss Recovery"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Timeout Recovery"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RTT Unfairness"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tahoe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cwnd = 1, slow start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very poor (restart from 1 each time)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cwnd = 1, slow start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reno"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cwnd = cwnd/2, fast recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (exit FR on first partial ACK)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cwnd = 1, slow start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NewReno"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cwnd = cwnd/2, stay in FR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (1 loss/RTT, stay until full ACK)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cwnd = 1, slow start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cwnd-graph--tahoe-vs-reno-recovery",
      children: "Cwnd Graph — Tahoe vs Reno Recovery"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Scenario: cwnd = 48 MSS, loss at RTT 10."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "cwnd (MSS)\n  |\n48 |        /|     |\\          /|\n   |       / |     | \\        / |\n   |      /  |     |  \\      /  |\n   |     /   |     |   \\    /   |\n32 |    /    |  R  |    \\  /    |\n   |   /     |  E  |     \\/     |\n   |  /      |  N  |     /\\     |\n   | /       |  O  |    /  \\    |\n16 |/        |     |   /    \\   |\n   |         |     |  /      \\  |\n   |         |  T  | /        \\ |\n   |         |  A  |/          \\|\n 1 |_________|  H  |____________|____\n   |         |  O  |\n   |         |  E  |\n   +---------+-----+----------------> RTT\n   0        10    15        20\n\nTahoe: drops to 1 after loss, slow start back up\nReno:  drops to 24, fast recovery, resumes CA at ~17-24\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-use-each",
      children: "When to Use Each"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best Variant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Low loss rate (< 0.1%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reno"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, well-understood, minimal overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate loss rate (0.1-2%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NewReno"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handles multiple losses without RTO"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High loss rate (> 2%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cubic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loss-independent growth function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deep buffer networks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BBR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model-based, avoids bufferbloat"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy compatibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tahoe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Historical, rarely used in practice"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "914-aimd-detailed-analysis-with-sawtooth-pattern",
      children: "9.14 AIMD Detailed Analysis with Sawtooth Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-aimd-equation",
      children: "The AIMD Equation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For TCP Reno, the throughput is governed by:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$T = \\frac{MSS}{RTT} \\cdot \\frac{1}{\\sqrt{p}} \\cdot \\sqrt{\\frac{3}{2}}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where p = packet loss rate. The derivation:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["In CA, cwnd increases by 1 MSS per RTT. Between losses at W and W + W/2:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Total packets sent = sum from W to W + W/2 = (W)(W/2) + (1/2)(W/2)(W/2) ≈ (3/8)W²"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "At most 1 packet lost (when cwnd = W)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Loss rate p = 1 / ((3/8)W²) = 8/(3W²)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Solving: W = sqrt(8/(3p))."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Average cwnd ≈ (W + W/2)/2 = 3W/4 = (3/4)sqrt(8/(3p))."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Throughput = avg_cwnd × MSS / RTT = (MSS / RTT) × sqrt(3/(2p))."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sawtooth-pattern-dry-run-30-rtts",
      children: "Sawtooth Pattern Dry Run (30 RTTs)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "RTT"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "cwnd"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loss?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SS"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SS"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SS"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SS→CA"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "65"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "66"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "68"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "69"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "71"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "72"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "73"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓ Loss (ssthresh=36)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "39"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "36"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "37"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "38"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "39"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "41"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "43"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "44"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓ Loss (ssthresh=22)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "29"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The sawtooth: each loss event cuts cwnd in half, then it grows linearly at +1/RTT until the next loss."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "915-tcp-variants-comparison-table",
      children: "9.15 TCP Variants Comparison Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "detailed-comparison",
      children: "Detailed Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tahoe"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reno"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NewReno"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cubic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BBR"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RFC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not standardized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RFC 5681"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RFC 6675"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RFC 8312"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "draft-cardwell-iccrg-bbr-congestion-control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loss signal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 dup ACK, RTO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 dup ACK, RTO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 dup ACK, RTO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 dup ACK, RTO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RTT/model (not loss)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cwnd after loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 MSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cwnd/2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cwnd/2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cwnd × 0.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No cwnd; pacing rate = BtlBw"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Growth function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential → Linear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential → Linear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential → Linear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cubic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gain-cycled pacing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple loss recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (1/RTT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (independent)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (model-based)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RTT fairness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (within model)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer requirement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Obsolete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux default (~40% of Internet)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google B4, YouTube, Cloud CDN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium-High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput formula"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(MSS/RTT) × sqrt(3/(2p))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(MSS/RTT) × Cubic(K)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BtlBw (loss-independent)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECN support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pros-and-cons-of-each-variant",
      children: "Pros and Cons of Each Variant"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Variant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tahoe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplest implementation, minimal state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wastes throughput after loss, obsolete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reno"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, well-studied, predictable on low-loss paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RTT unfairness, poor with multiple losses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NewReno"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple loss recovery without SACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only 1 loss/RTT recovery, still RTT-unfair"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cubic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RTT-fair, Linux default, curved growth near Wmax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loss-signal dependent, bufferbloat on deep buffers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BBR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model-based, no bufferbloat, high throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Newer, less proven at scale, can be aggressive to loss-based flows"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "916-interview-corner",
      children: "9.16 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-the-difference-between-cwnd-and-rwnd",
      children: "Q1: What is the difference between cwnd and rwnd?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": cwnd (congestion window) is maintained by the sender to prevent network overload. It adapts dynamically to network conditions using AIMD or other algorithms. rwnd (receive window) is advertised by the receiver to prevent sender overflow of the receiver's buffer. The effective window is min(cwnd, rwnd). cwnd protects the network; rwnd protects the receiver."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-explain-the-difference-between-jitter-and-delay-in-the-context-of-congestion-control",
      children: "Q2: Explain the difference between jitter and delay in the context of congestion control."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delay (RTT)"
        }), ": The time for a packet to travel from sender to receiver and back. Used by BBR (RTprop) and TCP Vegas to estimate path quality. Increasing delay signals queue buildup ", (0,jsx_runtime.jsx)(_components.em, {
          children: "before"
        }), " loss occurs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Jitter"
        }), ": The variation in delay between consecutive packets. High jitter indicates unstable queuing behavior. Loss-based algorithms (Reno, Cubic) don't use jitter directly, but real-time applications (VoIP, gaming) are jitter-sensitive."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Role in congestion"
        }), ": Jitter is an early indicator of congestion (queues are fluctuating), while increasing delay is a medium indicator (queue is growing), and packet loss is a late indicator (queue is full)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-how-do-you-detect-bufferbloat-in-a-network",
      children: "Q3: How do you detect bufferbloat in a network?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": Bufferbloat occurs when router buffers are excessively large, causing high latency without packet loss. Detection methods:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compare idle vs loaded RTT"
        }), ": Ping during idle vs during bulk download. If RTT jumps from 10 ms to 500+ ms, the buffer is bloated."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TCP trace analysis"
        }), ": In Wireshark, observe the RTT graph during a TCP transfer. If RTT grows linearly while throughput stays constant, the buffer is filling."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Netalyzr or DSLReports speed test"
        }), ": These measure latency under load specifically to detect bufferbloat."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "fq_codel or CAKE"
        }), ": Activate these queue disciplines to actively measure and mitigate bufferbloat."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BBR's RTprop"
        }), ": BBR naturally detects bufferbloat by tracking the minimum RTT over a window."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-why-does-cubic-have-better-fairness-than-reno-across-different-rtts",
      children: "Q4: Why does CUBIC have better fairness than Reno across different RTTs?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": Reno's congestion avoidance growth depends on RTT: cwnd increases by 1 MSS per RTT, so a 10 ms RTT flow adds 100 MSS/second while a 100 ms RTT flow adds only 10 MSS/second. This gives short-RTT flows 10x the throughput. Cubic measures time in seconds (not RTTs) using the cubic function W(t) = C·(t-K)³ + Wmax. Since t is wall-clock time, two Cubic flows with different RTTs grow identically over time, achieving similar throughput regardless of RTT."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-is-global-synchronization-and-how-do-modern-algorithms-avoid-it",
      children: "Q5: What is global synchronization and how do modern algorithms avoid it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": Global synchronization occurs when multiple TCP flows sharing a bottleneck all lose packets simultaneously (e.g., when the router buffer overflows). All flows halve their windows at once, the link underutilizes, they all increase together, hit the same buffer limit again, and repeat. This creates synchronized sawtooth patterns that waste up to 50% of bandwidth. Mitigations:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RED (Random Early Detection)"
        }), ": Drops packets probabilistically before buffer full — flows with larger windows get dropped more often, desynchronizing responses."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CoDel (Controlled Delay)"
        }), ": Manages queue latency instead of queue length, keeping buffers shallow."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FQ (Fair Queuing)"
        }), ": Per-flow queuing isolates flows so one flow's loss doesn't affect others."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cubic's plateau"
        }), ": Slower growth near Wmax means flows don't all peak simultaneously."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BBR"
        }), ": Model-based pacing avoids loss-based synchronization entirely."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-happens-when-bbr-and-reno-share-a-bottleneck-link",
      children: "Q6: What happens when BBR and Reno share a bottleneck link?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": BBR can be aggressive toward loss-based flows (Reno/Cubic) in certain configurations. BBR paces at estimated BtlBw and doesn't reduce on loss. When Reno loses packets and halves its window, BBR doesn't yield bandwidth — it continues sending at BtlBw, potentially starving Reno. The mitigation:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair BBR with FQ (fair queuing) at the bottleneck to enforce per-flow isolation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BBR's ProbeRTT phase periodically drains to measure RTprop, which briefly creates capacity for other flows."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In practice, BBR with FQ provides good multi-flow fairness. BBR without FQ can be 2-5x more aggressive than Reno."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-describe-the-tcp-throughput-formula-and-its-implications",
      children: "Q7: Describe the TCP throughput formula and its implications."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": For Reno: T = (MSS / RTT) × sqrt(3 / (2p)). Key implications:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inverse square root of loss rate"
        }), ": To halve throughput impact, loss rate must be 4x worse. TCP is surprisingly resilient to moderate loss."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inverse of RTT"
        }), ": Halving RTT doubles throughput. Geographic distance directly penalizes throughput."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Linear with MSS"
        }), ": Jumbo frames (9000 bytes) enable 6x higher throughput than standard 1500-byte frames."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1 Mbps link with 1% loss at 100 ms RTT"
        }), ": T = (1500 × 8 / 0.1) × sqrt(1.5 / 0.01) = 120,000 × 12.25 = 1.47 Mbps — near line rate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "100 Mbps link with same loss/RTT"
        }), ": T = same formula — but max at 100 Mbps. Loss limits prevent hitting line rate."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-what-is-the-difference-between-packet-loss-and-congestion-ambiguity",
      children: "Q8: What is the difference between packet loss and congestion ambiguity?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": Packet loss ≠ always congestion. Loss can occur from:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Cause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TCP Interpretation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Correct Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Router buffer overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Congestion (✓)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce window"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bit errors (noisy link)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not congestion (✗)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retransmit only, keep window"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Packet reordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "False loss signal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Don't reduce window (DSACK helps)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transient radio fade (WiFi/cellular)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "False loss signal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keep window (RTO recovery too aggressive)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tail-drop at shallow buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Congestion (✓)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce window"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      }), ": ECN (Explicit Congestion Notification) routers mark packets instead of dropping them, providing an unambiguous congestion signal. BBR avoids the ambiguity entirely by using RTT and bandwidth models rather than loss."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "917-applications-in-real-systems",
      children: "9.17 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linux-tcp-congestion-control",
      children: "Linux TCP Congestion Control"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Linux supports pluggable congestion control modules. Check and configure:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# List available congestion control algorithms\nsysctl net.ipv4.tcp_available_congestion_control\n\n# Check current algorithm\nsysctl net.ipv4.tcp_congestion_control\n\n# Set to BBR (requires kernel 4.9+)\necho \"net.ipv4.tcp_congestion_control = bbr\" >> /etc/sysctl.conf\nsysctl -p\n\n# Enable BBR module\nmodprobe tcp_bbr\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Available algorithms vary by kernel:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reno"
        }), ": Baseline, universally available."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cubic"
        }), ": Default since Linux 2.6.19 (2006). Most deployed congestion control on Earth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BBR"
        }), ": Since Linux 4.9 (2016). Google production-tested."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vegas"
        }), ": Delay-based, rarely used alone."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HTCP"
        }), ": High-speed TCP for long-fat pipes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation--multi-variant-cwnd-simulator",
      children: "C++ Implementation — Multi-Variant Cwnd Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <cmath>\n#include <iomanip>\n\nstruct TraceEntry {\n    int rtt;\n    double cwnd;\n    double ssthresh;\n    std::string phase;\n};\n\nclass TCPSimulator {\nprotected:\n    double cwnd;\n    double ssthresh;\n    int rtt;\n    std::vector<TraceEntry> trace;\n    std::string name;\n\npublic:\n    TCPSimulator(const std::string& n)\n        : cwnd(10), ssthresh(64), rtt(0), name(n) {}\n\n    virtual ~TCPSimulator() = default;\n\n    virtual void onAck() = 0;\n    virtual void onLoss() = 0;\n\n    void record(const std::string& phase) {\n        trace.push_back({rtt, cwnd, ssthresh, phase});\n    }\n\n    void run(int rtss, int loss_at) {\n        record(\"INIT\");\n        for (int i = 1; i <= rtss; i++) {\n            rtt = i;\n            if (i == loss_at) onLoss();\n            else onAck();\n            record(trace.back().phase);\n        }\n    }\n\n    void printTrace() {\n        std::cout << \"\\n=== \" << name << \" ===\" << std::endl;\n        std::cout << std::setw(5) << \"RTT\" << \" \"\n                  << std::setw(10) << \"cwnd\" << \" \"\n                  << std::setw(10) << \"ssthresh\" << \" \"\n                  << \"Phase\" << std::endl;\n        std::cout << std::string(50, '-') << std::endl;\n        for (const auto& t : trace) {\n            std::cout << std::setw(5) << t.rtt << \" \"\n                      << std::setw(10) << std::fixed << std::setprecision(1) << t.cwnd << \" \"\n                      << std::setw(10) << t.ssthresh << \" \"\n                      << t.phase << std::endl;\n        }\n    }\n\n    double getAvgCwnd() const {\n        double sum = 0;\n        for (const auto& t : trace) sum += t.cwnd;\n        return sum / trace.size();\n    }\n};\n\nclass RenoSampler : public TCPSimulator {\n    bool inFastRecovery;\npublic:\n    RenoSampler() : TCPSimulator(\"TCP Reno\"), inFastRecovery(false) {}\n\n    void onAck() override {\n        if (inFastRecovery) {\n            cwnd = ssthresh;\n            inFastRecovery = false;\n            record(\"CA (exit FR)\");\n            return;\n        }\n        if (cwnd < ssthresh) {\n            cwnd *= 2;\n            record(\"SS\");\n        } else {\n            cwnd += 1;\n            record(\"CA\");\n        }\n    }\n\n    void onLoss() override {\n        ssthresh = std::max(cwnd / 2.0, 2.0);\n        cwnd = ssthresh + 3;\n        inFastRecovery = true;\n        record(\"FR\");\n    }\n};\n\nclass CubicSampler : public TCPSimulator {\n    double w_max, K, t;\n    const double C_const = 0.4;\n    const double beta = 0.7;\npublic:\n    CubicSampler() : TCPSimulator(\"TCP Cubic\"), w_max(100), K(0), t(0) {}\n\n    void onAck() override {\n        if (cwnd < ssthresh) {\n            cwnd *= 2;\n            record(\"SS\");\n            return;\n        }\n        t += 0.1; // assume 100ms RTT\n        cwnd = C_const * std::pow(t - K, 3) + w_max;\n        if (cwnd < 10) cwnd = 10;\n        record(\"CUBIC\");\n    }\n\n    void onLoss() override {\n        w_max = cwnd;\n        K = std::cbrt(w_max * (1 - beta) / C_const);\n        cwnd = std::max(cwnd * beta, 10.0);\n        t = 0;\n        ssthresh = cwnd;\n        record(\"LOSS\");\n    }\n};\n\nint main() {\n    RenoSampler reno;\n    reno.run(20, 10);\n    reno.printTrace();\n    std::cout << \"Average cwnd: \" << reno.getAvgCwnd() << \" MSS\" << std::endl;\n\n    CubicSampler cubic;\n    cubic.run(20, 10);\n    cubic.printTrace();\n    std::cout << \"Average cwnd: \" << cubic.getAvgCwnd() << \" MSS\" << std::endl;\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation--complete-multi-variant-simulator",
      children: "Python Implementation — Complete Multi-Variant Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nTCP Congestion Control Multi-Variant Simulator\nSupports: Tahoe, Reno, NewReno, Cubic, BBR (modeled)\n\"\"\"\n\nfrom dataclasses import dataclass, field\nfrom typing import List, Optional\nfrom abc import ABC, abstractmethod\nimport math\nimport time\n\n\n@dataclass\nclass TracePoint:\n    rtt: int\n    cwnd: float\n    ssthresh: float\n    phase: str\n    event: str = ''\n\n\nclass TCPVariant(ABC):\n    \"\"\"Abstract base for all TCP congestion control variants.\"\"\"\n\n    def __init__(self, name: str, initial_cwnd: float = 10,\n                 initial_ssthresh: float = 64, mss: int = 1460):\n        self.name = name\n        self.cwnd = initial_cwnd\n        self.ssthresh = initial_ssthresh\n        self.mss = mss\n        self.rtt_count = 0\n        self.trace: List[TracePoint] = []\n        self.phase = 'INIT'\n\n    @abstractmethod\n    def on_ack(self):\n        \"\"\"Process ACK event.\"\"\"\n\n    @abstractmethod\n    def on_loss(self):\n        \"\"\"Process loss event (3 duplicate ACKs).\"\"\"\n\n    def record(self, event: str = ''):\n        self.trace.append(TracePoint(\n            rtt=self.rtt_count,\n            cwnd=round(self.cwnd, 1),\n            ssthresh=round(self.ssthresh, 1),\n            phase=self.phase,\n            event=event\n        ))\n\n    def simulate(self, rtts: int = 20, loss_rtts: Optional[List[int]] = None):\n        if loss_rtts is None:\n            loss_rtts = []\n        self.record('START')\n        for rtt in range(1, rtts + 1):\n            self.rtt_count = rtt\n            if rtt in loss_rtts:\n                self.on_loss()\n            else:\n                self.on_ack()\n            self.record()\n        return self\n\n    def print_trace(self):\n        header = f\"\\n{'='*70}\"\n        header += f\"\\n{self.name}\"\n        header += f\"\\n{'='*70}\"\n        header += f\"\\n{'RTT':<5} {'cwnd':<10} {'ssthresh':<12} {'Phase':<20} {'Event'}\"\n        header += f\"\\n{'-'*70}\"\n        print(header)\n        for t in self.trace:\n            print(f\"{t.rtt:<5} {t.cwnd:<10.1f} {t.ssthresh:<12.1f} \"\n                  f\"{t.phase:<20} {t.event}\")\n\n    def average_cwnd(self) -> float:\n        return sum(t.cwnd for t in self.trace) / max(len(self.trace), 1)\n\n    def throughput_mbps(self, rtt_sec: float = 0.1) -> float:\n        avg = self.average_cwnd()\n        return (avg * self.mss * 8) / (rtt_sec * 1_000_000)\n\n\nclass Tahoe(TCPVariant):\n    def on_ack(self):\n        if self.cwnd < self.ssthresh:\n            self.cwnd *= 2\n            self.phase = 'SLOW_START'\n        else:\n            self.cwnd += 1\n            self.phase = 'CONGESTION_AVOIDANCE'\n\n    def on_loss(self):\n        self.ssthresh = max(self.cwnd / 2, 2)\n        self.cwnd = 1.0\n        self.phase = 'SLOW_START (after loss)'\n\n\nclass Reno(TCPVariant):\n    def __init__(self, *args, **kwargs):\n        super().__init__(*args, **kwargs)\n        self.fast_recovery = False\n\n    def on_ack(self):\n        if self.fast_recovery:\n            self.cwnd = self.ssthresh\n            self.fast_recovery = False\n            self.phase = 'CONGESTION_AVOIDANCE (exit FR)'\n            return\n        if self.cwnd < self.ssthresh:\n            self.cwnd *= 2\n            self.phase = 'SLOW_START'\n        else:\n            self.cwnd += 1\n            self.phase = 'CONGESTION_AVOIDANCE'\n\n    def on_loss(self):\n        self.ssthresh = max(self.cwnd / 2, 2)\n        self.cwnd = self.ssthresh + 3\n        self.fast_recovery = True\n        self.phase = 'FAST_RECOVERY'\n\n\nclass NewReno(Reno):\n    def __init__(self, *args, **kwargs):\n        super().__init__(*args, **kwargs)\n        self.partial_acks = 0\n        self.loss_window_start = None\n\n    def on_loss(self):\n        super().on_loss()\n        self.loss_window_start = self.rtt_count\n        self.phase = 'FAST_RECOVERY (NewReno)'\n\n    def on_partial_ack(self):\n        \"\"\"NewReno stays in FR on partial ACK, retransmits next lost.\"\"\"\n        self.cwnd = self.ssthresh  # Deflate\n        self.partial_acks += 1\n        # Stay in fast recovery — retransmit next lost segment\n        # (in real implementation, triggered by partial ACK)\n        self.phase = f'FAST_RECOVERY (partial ACK #{self.partial_acks})'\n\n    def on_full_ack(self):\n        \"\"\"Full ACK — all data before loss acknowledged, exit FR.\"\"\"\n        self.fast_recovery = False\n        self.cwnd = self.ssthresh\n        self.phase = 'CONGESTION_AVOIDANCE'\n\n\nclass Cubic(TCPVariant):\n    def __init__(self, *args, **kwargs):\n        super().__init__(*args, **kwargs)\n        self.w_max = self.cwnd\n        self.K = 0.0\n        self.t = 0.0\n        self.C = 0.4\n        self.beta = 0.7\n\n    def on_ack(self):\n        self.rtt_count += 1  # Double increment handled in simulate\n        self.rtt_count -= 1\n        if self.cwnd < self.ssthresh:\n            self.cwnd *= 2\n            self.phase = 'SLOW_START'\n        else:\n            self.t += 0.1  # Assume 100ms RTT\n            # W(t) = C*(t-K)^3 + Wmax\n            offset = self.t - self.K\n            self.cwnd = self.C * (offset ** 3) + self.w_max\n            self.cwnd = max(self.cwnd, 10.0)\n            self.phase = 'CUBIC_GROWTH'\n\n    def on_loss(self):\n        self.w_max = self.cwnd\n        self.K = ((self.w_max * (1 - self.beta)) / self.C) ** (1/3)\n        self.cwnd = max(self.cwnd * self.beta, 10.0)\n        self.t = 0.0\n        self.ssthresh = self.cwnd\n        self.phase = 'CUBIC (after loss)'\n\n\nclass BBRModel(TCPVariant):\n    \"\"\"\n    Simplified BBR model: pacing at BtlBw with gain cycling.\n    Not a full BBR implementation; captures key behavior.\n    \"\"\"\n\n    def __init__(self, *args, **kwargs):\n        super().__init__(*args, **kwargs)\n        self.btlbw = 100.0  # Estimated bottleneck bandwidth (MSS/sec)\n        self.rtprop = 0.1    # Min RTT (seconds)\n        self.pacing_gain = 1.0\n        self.phase_cycle = ['ProbeBW', 'ProbeBW', 'ProbeBW', 'ProbeBW',\n                           'ProbeBW', 'ProbeBW', 'ProbeBW', 'Drain']\n        self.cycle_pos = 0\n        self.probe_count = 0\n\n    def on_ack(self):\n        # BBR doesn't use cwnd in the traditional sense\n        # Pacing rate = pacing_gain * BtlBw\n        gains = [1.25, 0.75, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]\n        self.pacing_gain = gains[self.cycle_pos % len(gains)]\n        self.cycle_pos += 1\n\n        effective_pacing = self.pacing_gain * self.btlbw\n        self.cwnd = effective_pacing * self.rtprop  # BDP\n\n        if self.pacing_gain > 1.0:\n            self.phase = 'PROBE_BW (up)'\n        elif self.pacing_gain < 1.0:\n            self.phase = 'DRAIN'\n        else:\n            self.phase = 'PROBE_BW (cruise)'\n\n    def on_loss(self):\n        # BBR doesn't reduce on loss — it relies on model\n        # Loss may trigger a requeue or ProbeRTT, but no window reduction\n        self.phase = 'PROBE_RTT'\n\n\ndef run_comparison():\n    variants = [\n        Tahoe(\"1. Tahoe\"),\n        Reno(\"2. Reno\"),\n        NewReno(\"3. NewReno\"),\n        Cubic(\"4. Cubic\"),\n        BBRModel(\"5. BBR (model)\")\n    ]\n\n    print(\"\\n\" + \"=\" * 70)\n    print(\"TCP CONGESTION CONTROL — 5-VARIANT COMPARISON\")\n    print(\"Loss at RTT = 8\")\n    print(\"=\" * 70)\n\n    results = []\n    for v in variants:\n        v.simulate(rtts=25, loss_rtts=[8])\n        v.print_trace()\n        avg = v.average_cwnd()\n        thr = v.throughput_mbps(0.1)\n        results.append((v.name, avg, thr))\n        print(f\"  Average cwnd: {avg:.1f} MSS\")\n        print(f\"  Estimated throughput (100ms RTT): {thr:.2f} Mbps\")\n\n    print(\"\\n\" + \"=\" * 70)\n    print(\"SUMMARY\")\n    print(\"=\" * 70)\n    print(f\"{'Variant':<30} {'Avg cwnd':<12} {'Throughput (Mbps)':<20}\")\n    print(\"-\" * 62)\n    for name, avg, thr in results:\n        print(f\"{name:<30} {avg:<12.1f} {thr:<20.2f}\")\n\n\nif __name__ == \"__main__\":\n    run_comparison()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "google-bbr-deployment",
      children: "Google BBR Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BBR was developed at Google and deployed on:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "B4 WAN"
        }), ": Google's software-defined WAN connecting data centers. BBR improved utilization from ~80% to >95% on long-haul links."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "YouTube"
        }), ": BBR handles the unpredictable bandwidth of consumer internet connections, improving video start time and rebuffer rate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Google Cloud CDN"
        }), ": BBR is used for content delivery, especially beneficial for mobile and WiFi users with variable link quality."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cdn-tcp-tuning",
      children: "CDN TCP Tuning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Content delivery networks optimize TCP for their specific workloads:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "CDN"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloudflare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimized TCP stack with BBR, fast open, TFO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster connection establishment, better lossy link performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Akamai"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic request steering, per-customer TCP tuning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routes around congested paths, custom parameters per use case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fastly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BBR + TLS 1.3 + H2 prioritization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-latency delivery, no bufferbloat"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CloudFront"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom congestion control with RTT-based adaptation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECN + Cubic tuned for AWS global infrastructure"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-configuration-examples",
      children: "Real-World Configuration Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Linux: Tune TCP for high-throughput WAN\nsysctl -w net.core.rmem_max=134217728       # 128 MB\nsysctl -w net.core.wmem_max=134217728       # 128 MB\nsysctl -w net.ipv4.tcp_rmem='4096 87380 134217728'\nsysctl -w net.ipv4.tcp_wmem='4096 65536 134217728'\nsysctl -w net.ipv4.tcp_congestion_control=bbr\nsysctl -w net.ipv4.tcp_notsent_lowat=16384  # For Nginx\nsysctl -w net.ipv4.tcp_slow_start_after_idle=0\n\n# Linux: Tune TCP for data center (low RTT, high bandwidth)\nsysctl -w net.ipv4.tcp_congestion_control=cubic\nsysctl -w net.ipv4.tcp_mtu_probing=1\nsysctl -w net.core.default_qdisc=fq_codel    # Fair queuing + CoDel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "918-comparison-tables",
      children: "9.18 Comparison Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tcp-variants-at-a-glance",
      children: "TCP Variants at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tahoe"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reno"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NewReno"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cubic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BBR"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RFC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5681"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6675"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8312"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Draft"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loss-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loss-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loss-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loss-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cwnd after triple ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cwnd/2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cwnd/2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cwnd×0.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No change"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cwnd after RTO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Growth in CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cubic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gain-cycled BtlBw"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RTT fairness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bufferbloat risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput on 1% loss (100ms RTT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~12 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~12 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~12 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~15 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~95 Mbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium-High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linux availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Module"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Module (4.9+)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "congestion-window-vs-receive-window",
      children: "Congestion Window vs Receive Window"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "cwnd"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "rwnd"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maintained by"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sender (implicit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receiver (explicit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Signal method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inferred from loss/RTT/ECN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advertised in TCP header"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constantly changing (every RTT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changes when receiver buffer level changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network capacity estimation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receiver buffer protection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Initial value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 MSS (RFC 6928)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS-dependent (up to 1 MB with window scaling)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Effect on throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary limiter on uncongested paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limiter when receiver is slow or buffer is small"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Relationship to BDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Should be ≈ BDP for full utilization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be ≥ BDP for full utilization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aimd-sawtooth-pattern-properties",
      children: "AIMD Sawtooth Pattern Properties"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implication"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Peak cwnd (W)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sqrt(8/(3p))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inverse square root of loss rate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Average cwnd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.75W"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "75% of peak"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(MSS/RTT) × sqrt(3/(2p))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Halving RTT doubles throughput"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loss events per second"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p × throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1% loss at 100 Mbps = 1 loss/second"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recovery time after loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "W/2 RTTs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50-packet window → 25 RTTs to recover"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-cdn-congestion-control-tuning-for-global-video-delivery",
      children: "Case Study: CDN Congestion Control Tuning for Global Video Delivery"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " A major video streaming CDN serving 50 million daily users experienced rebuffering events on long-tail content with low popularity (few viewers, so no cache locality). Users in regions with high packet loss (e.g., 1-3% loss in emerging markets) reported 15-30% rebuffer ratios. The default Linux TCP Cubic algorithm, while excellent for RTT fairness, performed poorly under random packet loss because it interpreted every loss as congestion, causing unnecessary cwnd reductions on non-congested paths."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " The CDN engineering team deployed a multi-strategy approach across their edge servers. First, they switched from Cubic to BBR for all video delivery (BBR is model-based and does not reduce cwnd on random loss). Across 15,000 edge servers, they configured ", (0,jsx_runtime.jsx)(_components.code, {
        children: "net.ipv4.tcp_congestion_control=bbr"
      }), " and tuned ", (0,jsx_runtime.jsx)(_components.code, {
        children: "net.core.default_qdisc=fq"
      }), " for fair queuing. Second, they implemented Forward Error Correction (FEC) at the application layer, adding 10% parity data to each video chunk, allowing the client to recover from up to 10% packet loss without requesting retransmissions. Third, they deployed a custom loss discrimination module that classified losses as congestion vs. corruption using inter-arrival time variance: sudden RTT increases indicated bufferbloat/congestion, while isolated losses with stable RTT indicated corruption."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome:"
      }), " Rebuffering ratios dropped from 22% to 4% in high-loss regions. BBR's model-based control achieved 2.3× throughput compared to Cubic on lossy paths (1.5% loss, 100ms RTT). The FEC layer added 12% bandwidth overhead but eliminated retransmission delays entirely for 90% of loss events. Total CDN egress costs increased by 8% (FEC overhead), but customer retention improved by 14 percentage points in affected markets, more than offsetting the bandwidth cost. The loss discrimination module proved critical: BBR+Cubic hybrid deployment used Cubic in low-loss data centers (better RTT fairness) and BBR at lossy edge egress points."]
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BBR outperforms Cubic under packet loss"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use BBR for last-mile delivery, wireless links, and emerging-market deployments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Loss-based algorithms misinterpret corruption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Isolated losses with stable RTT = corruption; RTT spikes + loss = congestion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FEC reduces retransmission latency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add 10-15% parity data for real-time streaming over lossy links"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fair queuing (fq) disciplines CUBIC fairness"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Always pair ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fq"
            }), " qdisc with BBR to prevent BBR flows from starving Reno/Cubic"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Slow start overshoot causes burst losses"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use HyStart (hybrid slow start) to exit slow start before buffer overflow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RTT fairness matters for global services"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cubic's time-based growth helps multi-RTT fairness across continents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Loss discrimination avoids unnecessary cwnd reduction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classify using RTT variance + loss pattern before triggering multiplicative decrease"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "919-summary",
      children: "9.19 Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TCP congestion control uses AIMD: additive increase probes for bandwidth; multiplicative decrease responds to loss. Slow start achieves exponential growth to the available bandwidth. Congestion avoidance provides linear, stable growth. Fast retransmit and fast recovery enable efficient recovery from isolated losses without timeout."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SACK improves recovery with precise loss reporting. TCP Cubic improves fairness across flows with different RTTs using a cubic growth function. TCP BBR breaks from loss-based control entirely, using a model-based approach for higher throughput on deep-buffer and lossy paths."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The effective window combines congestion and flow constraints: min(cwnd, rwnd). Each TCP variant represents a different point in the tradeoff space between throughput, fairness, latency, and complexity."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "920-chapter-quiz",
      children: "9.20 Chapter Quiz"
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
            children: "What is the effective TCP window if cwnd = 32 KB and rwnd = 20 KB?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a) 32 KB, b) 20 KB, c) 52 KB, d) 12 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Effective window = min(cwnd, rwnd) = min(32 KB, 20 KB) = 20 KB. The receiver's buffer is the bottleneck."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "During slow start, how does cwnd increase per RTT?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a) +1 MSS, b) +1 MSS per ACK, c) Doubles, d) Constant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow start doubles cwnd every RTT because each ACK received increases cwnd by 1 MSS and the number of ACKs per RTT equals the current cwnd."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What triggers fast retransmit in TCP Reno?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a) RTO expiry, b) 3 duplicate ACKs, c) ECN mark, d) ICMP unreachable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three duplicate ACKs indicate that the receiver received out-of-order segments, implying a segment was lost. The sender retransmits the missing segment without waiting for RTO."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP Cubic's growth function is:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a) Linear, b) Logarithmic, c) Cubic, d) Exponential"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CUBIC uses a cubic (third-degree polynomial) function of wall-clock time since the last loss event, making it RTT-independent."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BBR uses which signal to detect congestion?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a) Packet loss, b) RTT and bandwidth model, c) ECN marks only, d) ICMP source quench"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BBR estimates the bottleneck bandwidth (BtlBw) and round-trip propagation time (RTprop) from ACK timing, pacing at the estimated bandwidth rather than waiting for loss."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "921-exercises",
      children: "9.21 Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between cwnd and rwnd?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\ncwnd (congestion window) is the sender's estimate of network capacity, managed by the congestion control algorithm. rwnd (receiver window) is the receiver's available buffer space advertised in every segment. The effective sending window is min(cwnd, rwnd).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does slow start grow cwnd exponentially?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nSlow start doubles cwnd every RTT because each ACK received increases cwnd by 1 MSS, and the number of ACKs per RTT equals the current cwnd. If cwnd = N, the sender receives N ACKs in one RTT, each incrementing cwnd by 1, resulting in cwnd = 2N after one RTT. This rapid growth quickly probes for available bandwidth.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does fast retransmit avoid waiting for the retransmission timeout?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nFast retransmit uses duplicate ACKs as a loss signal instead of waiting for RTO expiry. When the sender receives 3 duplicate ACKs for the same sequence number, it retransmits the missing segment immediately. Since duplicate ACKs arrive within one RTT of the loss (not the minimum 200ms RTO), fast retransmit detects loss 10-100× faster than timeout-based recovery.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What problem does TCP Cubic solve that Reno does not?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nCubic solves the RTT fairness problem. In Reno, the additive increase rate depends on ACK arrival rate, so a flow with shorter RTT increases cwnd faster and gets more bandwidth. Cubic's growth function is based on wall-clock time since the last loss event, not on ACK arrival rate, so flows with different RTTs grow at the same rate and achieve fair bandwidth sharing.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A receiver advertises rwnd = 0. What happens to the sender?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nThe sender stops transmitting new data and enters persist mode. It starts a persist timer that periodically sends 1-byte window probes. The receiver responds with its current rwnd. If rwnd > 0, the sender resumes. This prevents deadlock where the sender waits for a window update and the receiver waits for data.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain how NewReno differs from Reno on partial ACK."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nWhen multiple packets are lost in one window, Reno exits fast recovery after the first retransmission is ACKed (partial ACK acknowledges some but not all lost data). NewReno stays in fast recovery on partial ACKs, retransmitting one lost segment per partial ACK until all lost segments are recovered. NewReno recovers all losses in one window without timeout, while Reno may timeout on the second loss.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between SACK and cumulative ACKs?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nCumulative ACKs acknowledge the highest in-order byte received. SACK (Selective Acknowledgments) additionally reports up to 4 non-contiguous blocks of successfully received out-of-order data. SACK allows the sender to retransmit only the truly lost segments rather than everything after the cumulative ACK point, improving recovery efficiency.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does BBR estimate the bottleneck bandwidth?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nBBR estimates the bottleneck bandwidth (BtlBw) by tracking the maximum delivery rate observed over a sliding window. It periodically probes by pacing at 1.25× the current BtlBw estimate. If the delivery rate doesn't increase, the bottleneck link is saturated. RTprop (round-trip propagation time) is estimated as the minimum RTT observed over a time window. BBR paces at rate = BtlBw and keeps inflight = BtlBw × RTprop.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A TCP connection starts with cwnd = 10 MSS, ssthresh = 64. No loss occurs for the first 10 RTTs. Compute cwnd after each RTT. When would slow start transition to congestion avoidance?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nRTT 1: cwnd = 10 (slow start, starts at 10). RTT 2: cwnd = 20. RTT 3: cwnd = 40. RTT 4: cwnd = 80 (exceeds ssthresh=64, so transition to congestion avoidance). RTT 5: cwnd = 80 + MSS²/80 ≈ 80 + 26.6 = 106.6. RTT 6: cwnd ≈ 107 + 19.9 = 126.9. RTT 7: cwnd ≈ 127 + 16.8 = 143.8. RTT 8: cwnd ≈ 144 + 14.8 = 158.8. RTT 9: cwnd ≈ 159 + 13.4 = 172.4. RTT 10: cwnd ≈ 172 + 12.4 = 184.4. Transition happens at RTT 4 (cwnd exceeds ssthresh).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A Reno connection experiences triple duplicate ACK at cwnd = 48. Show cwnd evolution through fast recovery and congestion avoidance for the next 5 RTTs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nOn triple duplicate ACK: ssthresh = 48/2 = 24, cwnd = 24 + 3 = 27 (fast recovery). RTT 1: cwnd = 27 (retransmit lost packet, wait for ACK). Partial ACK: exit fast recovery, cwnd = ssthresh = 24. RTT 2: additive increase, cwnd ≈ 24 + MSS²/24 ≈ 24 + 88.9 = 112.9 for MSS=1460 (wait, that's wrong — in MSS terms: RTT 2: cwnd = 25, RTT 3: 26, RTT 4: 27, RTT 5: 28 MSS). In MSS units: after recovery, cwnd = 24 MSS. Each CA RTT: cwnd += 1 MSS. So RTT 2-5: 25, 26, 27, 28 MSS.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two TCP Reno connections share a 100 Mbps bottleneck link with 50 ms RTT."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nFor Reno, throughput ≈ (MSS/RTT) × sqrt(3/(2p)). At equilibrium with 2 flows, each gets ~50 Mbps. With infinite data, the AIMD sawtooth gives each flow roughly equal bandwidth share (Reno converges to fairness). If one connection has 100 ms RTT, its throughput is halved (inversely proportional to RTT). The shorter-RTT flow gets ~67 Mbps, the longer-RTT flow gets ~33 Mbps — Reno's RTT unfairness in action.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "12",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A NewReno connection with cwnd = 64 loses packets 10, 20, and 30 in the same window."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nOn triple duplicate ACK: ssthresh = 32, cwnd = 32 + 3 = 35. Retransmit packet 10. On partial ACK acknowledging up to 10: retransmit packet 20. On next partial ACK acknowledging up to 20: retransmit packet 30. Full ACK at 31: exit fast recovery, cwnd = ssthresh = 32. Total: 3 RTTs for full recovery. Reno would exit fast recovery after the first partial ACK, likely timing out on the second loss, requiring 3+ RTTs for slow start.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a TCP Cubic cwnd simulator in Python."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n```python\nimport math\ndef cubic_cwnd(t, wmax, c=0.4):\n    return wmax + c * (t - math.pow(wmax / c, 1/3))**3\nwmax = 200\nfor t in range(0, 21):\n    cwnd = cubic_cwnd(t, wmax)\n    print(f\"t={t}s: cwnd={cwnd:.1f}\")\n```\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "14",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Analyze the interaction of multiple congestion control algorithms on a shared link."
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nWithout FQ: BBR achieves highest throughput because it doesn't reduce cwnd on packet loss. Cubic has moderate throughput (RTT-fair, loss-dependent). Reno has the lowest throughput (loss-based, aggressive cwnd reduction). On a 1 Gbps link with 500-packet queue and 20 ms RTT, Reno fills the queue before detecting loss (bufferbloat). BBR maintains BtlBw ≈ 900 Mbps (target rate). With FQ: all flows get ~250 Mbps each. A fair queuing mechanism like `fq_codel` at the bottleneck assigns each flow a separate queue with weighted round-robin scheduling, ensuring equal throughput regardless of congestion algorithm.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BBR with FQ: all flows get equal bandwidth from fair queuing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BBR without FQ: BBR may dominate because it doesn't back off on loss."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cubic flows are RTT-fair but still loss-dependent."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Queue size determines when Reno flows detect loss (more queue = later detection = higher throughput for Reno but worse latency)."
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