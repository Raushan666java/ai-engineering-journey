"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[76417],{

/***/ 48
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_computer_networks_07_routing_md_adf_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-computer-networks-07-routing-md-adf.json
const site_docs_courses_computer_networks_07_routing_md_adf_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/computer-networks/07-routing","title":"Chapter 7: Routing","description":"Prerequisites Network Layer → IP addressing and forwarding | Next Transport Layer → From routing to end-to-end delivery","source":"@site/docs/courses/computer-networks/07-routing.md","sourceDirName":"courses/computer-networks","slug":"/computer-networks/07-routing","permalink":"/ai-engineering-journey/computer-networks/07-routing","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"07-routing","slug":"/computer-networks/07-routing","title":"Chapter 7: Routing","sidebar_label":"Chapter 7: Routing","sidebar_position":7},"sidebar":"course-computer-networks","previous":{"title":"Chapter 6: The Network Layer","permalink":"/ai-engineering-journey/computer-networks/06-network-layer"},"next":{"title":"Chapter 8: The Transport Layer","permalink":"/ai-engineering-journey/computer-networks/08-transport-layer"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/computer-networks/07-routing.md


const frontMatter = {
	id: '07-routing',
	slug: '/computer-networks/07-routing',
	title: 'Chapter 7: Routing',
	sidebar_label: 'Chapter 7: Routing',
	sidebar_position: 7
};
const contentTitle = 'Chapter 7: Routing';

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
  "level": 3
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 3
}, {
  "value": "Routing Algorithm Complexity Comparison",
  "id": "routing-algorithm-complexity-comparison",
  "level": 3
}, {
  "value": "7.1 Routing Fundamentals",
  "id": "71-routing-fundamentals",
  "level": 2
}, {
  "value": "Real-World Analogy: The GPS Navigation System",
  "id": "real-world-analogy-the-gps-navigation-system",
  "level": 3
}, {
  "value": "Routing vs Forwarding",
  "id": "routing-vs-forwarding",
  "level": 3
}, {
  "value": "The Routing Problem Formally",
  "id": "the-routing-problem-formally",
  "level": 3
}, {
  "value": "Numbered Steps of the Routing Process",
  "id": "numbered-steps-of-the-routing-process",
  "level": 3
}, {
  "value": "Generic Routing Algorithm Pseudocode",
  "id": "generic-routing-algorithm-pseudocode",
  "level": 3
}, {
  "value": "TypeScript Implementation: RoutingTableManager",
  "id": "typescript-implementation-routingtablemanager",
  "level": 3
}, {
  "value": "C++ Implementation: Generic Distance Table",
  "id": "c-implementation-generic-distance-table",
  "level": 3
}, {
  "value": "Python Implementation: Routing Table Manager",
  "id": "python-implementation-routing-table-manager",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 3
}, {
  "value": "Edge Cases in Routing",
  "id": "edge-cases-in-routing",
  "level": 3
}, {
  "value": "7.2 Distance-Vector Routing",
  "id": "72-distance-vector-routing",
  "level": 2
}, {
  "value": "Real-World Analogy: The Gossip Network",
  "id": "real-world-analogy-the-gossip-network",
  "level": 3
}, {
  "value": "7.2.1 The Bellman-Ford Algorithm",
  "id": "721-the-bellman-ford-algorithm",
  "level": 3
}, {
  "value": "Bellman-Ford Step-by-Step Dry Run",
  "id": "bellman-ford-step-by-step-dry-run",
  "level": 3
}, {
  "value": "Final Forwarding Tables",
  "id": "final-forwarding-tables",
  "level": 3
}, {
  "value": "Count-to-Infinity Detailed Trace",
  "id": "count-to-infinity-detailed-trace",
  "level": 3
}, {
  "value": "Mitigation Techniques",
  "id": "mitigation-techniques",
  "level": 3
}, {
  "value": "Bellman-Ford Pseudocode (Centralized)",
  "id": "bellman-ford-pseudocode-centralized",
  "level": 3
}, {
  "value": "TypeScript Implementation: DistanceVectorSimulator",
  "id": "typescript-implementation-distancevectorsimulator",
  "level": 3
}, {
  "value": "C++ Implementation: Bellman-Ford Simulator",
  "id": "c-implementation-bellman-ford-simulator",
  "level": 3
}, {
  "value": "Python Implementation: Bellman-Ford with Convergence Tracking",
  "id": "python-implementation-bellman-ford-with-convergence-tracking",
  "level": 3
}, {
  "value": "Complexity Analysis of Bellman-Ford with WHY",
  "id": "complexity-analysis-of-bellman-ford-with-why",
  "level": 3
}, {
  "value": "Advantages and Disadvantages of Distance-Vector",
  "id": "advantages-and-disadvantages-of-distance-vector",
  "level": 3
}, {
  "value": "7.2.2 RIP (Routing Information Protocol)",
  "id": "722-rip-routing-information-protocol",
  "level": 3
}, {
  "value": "Edge Cases in Distance-Vector / RIP",
  "id": "edge-cases-in-distance-vector--rip",
  "level": 3
}, {
  "value": "7.3 Link-State Routing",
  "id": "73-link-state-routing",
  "level": 2
}, {
  "value": "Real-World Analogy: The Map Maker",
  "id": "real-world-analogy-the-map-maker",
  "level": 3
}, {
  "value": "7.3.1 Dijkstra&#39;s Algorithm",
  "id": "731-dijkstras-algorithm",
  "level": 3
}, {
  "value": "Dijkstra Step-by-Step Dry Run",
  "id": "dijkstra-step-by-step-dry-run",
  "level": 3
}, {
  "value": "Dijkstra&#39;s Algorithm Pseudocode",
  "id": "dijkstras-algorithm-pseudocode",
  "level": 3
}, {
  "value": "TypeScript Implementation: DijkstraShortestPath",
  "id": "typescript-implementation-dijkstrashortestpath",
  "level": 3
}, {
  "value": "C++ Implementation: Dijkstra on Network Graph",
  "id": "c-implementation-dijkstra-on-network-graph",
  "level": 3
}, {
  "value": "Python Implementation: Dijkstra on Network Graph",
  "id": "python-implementation-dijkstra-on-network-graph",
  "level": 3
}, {
  "value": "7.3.2 OSPF → Open Shortest Path First",
  "id": "732-ospf--open-shortest-path-first",
  "level": 3
}, {
  "value": "Edge Cases in Link-State Routing / OSPF",
  "id": "edge-cases-in-link-state-routing--ospf",
  "level": 3
}, {
  "value": "Complexity Analysis of Dijkstra / Link-State with WHY",
  "id": "complexity-analysis-of-dijkstra--link-state-with-why",
  "level": 3
}, {
  "value": "Advantages and Disadvantages of Link-State",
  "id": "advantages-and-disadvantages-of-link-state",
  "level": 3
}, {
  "value": "7.4 Path-Vector Routing (BGP)",
  "id": "74-path-vector-routing-bgp",
  "level": 2
}, {
  "value": "Real-World Analogy: International Shipping with Customs Forms",
  "id": "real-world-analogy-international-shipping-with-customs-forms",
  "level": 3
}, {
  "value": "7.4.1 BGP Fundamentals",
  "id": "741-bgp-fundamentals",
  "level": 3
}, {
  "value": "7.4.2 BGP Path Attributes → Detailed",
  "id": "742-bgp-path-attributes--detailed",
  "level": 3
}, {
  "value": "7.4.3 BGP Decision Process → Detailed",
  "id": "743-bgp-decision-process--detailed",
  "level": 3
}, {
  "value": "BGP Path Selection Dry Run",
  "id": "bgp-path-selection-dry-run",
  "level": 3
}, {
  "value": "AS Path Prepending Analysis",
  "id": "as-path-prepending-analysis",
  "level": 3
}, {
  "value": "Python: AS Path Prepending Analysis",
  "id": "python-as-path-prepending-analysis",
  "level": 3
}, {
  "value": "BGP Pseudocode",
  "id": "bgp-pseudocode",
  "level": 3
}, {
  "value": "TypeScript Implementation: BGPSimpleSim",
  "id": "typescript-implementation-bgpsimplesim",
  "level": 3
}, {
  "value": "C++ Implementation: BGP Path Selection",
  "id": "c-implementation-bgp-path-selection",
  "level": 3
}, {
  "value": "Python Implementation: BGP Route Selection",
  "id": "python-implementation-bgp-route-selection",
  "level": 3
}, {
  "value": "7.4.4 iBGP vs eBGP",
  "id": "744-ibgp-vs-ebgp",
  "level": 3
}, {
  "value": "Edge Cases in BGP",
  "id": "edge-cases-in-bgp",
  "level": 3
}, {
  "value": "7.5 Hierarchical Routing",
  "id": "75-hierarchical-routing",
  "level": 2
}, {
  "value": "Real-World Analogy: The Postal System Hierarchy",
  "id": "real-world-analogy-the-postal-system-hierarchy",
  "level": 3
}, {
  "value": "The Two-Level Hierarchy",
  "id": "the-two-level-hierarchy",
  "level": 3
}, {
  "value": "Internet Hierarchy Summary",
  "id": "internet-hierarchy-summary",
  "level": 3
}, {
  "value": "Advantages of Hierarchical Routing",
  "id": "advantages-of-hierarchical-routing",
  "level": 3
}, {
  "value": "7.6 Multicast Routing",
  "id": "76-multicast-routing",
  "level": 2
}, {
  "value": "Real-World Analogy: The Conference Call",
  "id": "real-world-analogy-the-conference-call",
  "level": 3
}, {
  "value": "Multicast Fundamentals",
  "id": "multicast-fundamentals",
  "level": 3
}, {
  "value": "Multicast Distribution Trees",
  "id": "multicast-distribution-trees",
  "level": 3
}, {
  "value": "PIM Operation Modes",
  "id": "pim-operation-modes",
  "level": 3
}, {
  "value": "IGMP (Internet Group Management Protocol)",
  "id": "igmp-internet-group-management-protocol",
  "level": 3
}, {
  "value": "Numbered Steps of Multicast Forwarding",
  "id": "numbered-steps-of-multicast-forwarding",
  "level": 3
}, {
  "value": "Multicast Routing Protocols Compared",
  "id": "multicast-routing-protocols-compared",
  "level": 3
}, {
  "value": "7.7 Broadcast Routing",
  "id": "77-broadcast-routing",
  "level": 2
}, {
  "value": "Real-World Analogy: The Town Crier",
  "id": "real-world-analogy-the-town-crier",
  "level": 3
}, {
  "value": "Broadcast Routing Approaches",
  "id": "broadcast-routing-approaches",
  "level": 3
}, {
  "value": "RPF Check → Detailed",
  "id": "rpf-check--detailed",
  "level": 3
}, {
  "value": "Broadcast vs Multicast vs Unicast",
  "id": "broadcast-vs-multicast-vs-unicast",
  "level": 3
}, {
  "value": "Broadcast Routing Algorithms Summary",
  "id": "broadcast-routing-algorithms-summary",
  "level": 3
}, {
  "value": "7.8 Anycast Routing",
  "id": "78-anycast-routing",
  "level": 2
}, {
  "value": "Real-World Analogy: The Nearest Pizza Delivery",
  "id": "real-world-analogy-the-nearest-pizza-delivery",
  "level": 3
}, {
  "value": "BGP Anycast in Practice",
  "id": "bgp-anycast-in-practice",
  "level": 3
}, {
  "value": "Anycast Benefits and Challenges",
  "id": "anycast-benefits-and-challenges",
  "level": 3
}, {
  "value": "7.9 Comparison: DV vs LS vs PV",
  "id": "79-comparison-dv-vs-ls-vs-pv",
  "level": 2
}, {
  "value": "7.10 Comparison: RIP vs OSPF vs BGP",
  "id": "710-comparison-rip-vs-ospf-vs-bgp",
  "level": 2
}, {
  "value": "7.11 Interview Corner",
  "id": "711-interview-corner",
  "level": 2
}, {
  "value": "Q1: Why does RIP have a maximum hop count of 15?",
  "id": "q1-why-does-rip-have-a-maximum-hop-count-of-15",
  "level": 3
}, {
  "value": "Q2: How does OSPF achieve faster convergence than RIP?",
  "id": "q2-how-does-ospf-achieve-faster-convergence-than-rip",
  "level": 3
}, {
  "value": "Q3: What is the purpose of OSPF areas?",
  "id": "q3-what-is-the-purpose-of-ospf-areas",
  "level": 3
}, {
  "value": "Q4: How does BGP policy differ from IGP metrics?",
  "id": "q4-how-does-bgp-policy-differ-from-igp-metrics",
  "level": 3
}, {
  "value": "Q5: Explain the difference between iBGP and eBGP.",
  "id": "q5-explain-the-difference-between-ibgp-and-ebgp",
  "level": 3
}, {
  "value": "Q6: What causes BGP convergence to be slow?",
  "id": "q6-what-causes-bgp-convergence-to-be-slow",
  "level": 3
}, {
  "value": "Q7: What is the BGP convergence time in the real Internet?",
  "id": "q7-what-is-the-bgp-convergence-time-in-the-real-internet",
  "level": 3
}, {
  "value": "Q8: How does anycast routing handle session persistence?",
  "id": "q8-how-does-anycast-routing-handle-session-persistence",
  "level": 3
}, {
  "value": "Q9: What happens when a BGP route is withdrawn?",
  "id": "q9-what-happens-when-a-bgp-route-is-withdrawn",
  "level": 3
}, {
  "value": "Q10: Compare Dijkstra and Bellman-Ford for routing.",
  "id": "q10-compare-dijkstra-and-bellman-ford-for-routing",
  "level": 3
}, {
  "value": "Q11: What is route summarization and why is it important in OSPF?",
  "id": "q11-what-is-route-summarization-and-why-is-it-important-in-ospf",
  "level": 3
}, {
  "value": "Q12: How does ECMP (Equal-Cost Multi-Path) work in OSPF?",
  "id": "q12-how-does-ecmp-equal-cost-multi-path-work-in-ospf",
  "level": 3
}, {
  "value": "Q13: What is the purpose of the TTL field in IP packets, and how does traceroute use it?",
  "id": "q13-what-is-the-purpose-of-the-ttl-field-in-ip-packets-and-how-does-traceroute-use-it",
  "level": 3
}, {
  "value": "Q14: What is the difference between redistribution and route leaking?",
  "id": "q14-what-is-the-difference-between-redistribution-and-route-leaking",
  "level": 3
}, {
  "value": "Q15: How does a router handle a packet when no route exists in the FIB?",
  "id": "q15-how-does-a-router-handle-a-packet-when-no-route-exists-in-the-fib",
  "level": 3
}, {
  "value": "7.12 Applications in Real Systems",
  "id": "712-applications-in-real-systems",
  "level": 2
}, {
  "value": "Cisco IOS Configuration Examples",
  "id": "cisco-ios-configuration-examples",
  "level": 3
}, {
  "value": "FRR (Free Range Routing) → Open-Source Routing Stack",
  "id": "frr-free-range-routing--open-source-routing-stack",
  "level": 3
}, {
  "value": "Cloudflare Anycast Architecture",
  "id": "cloudflare-anycast-architecture",
  "level": 3
}, {
  "value": "AWS Direct Connect and Hybrid Routing",
  "id": "aws-direct-connect-and-hybrid-routing",
  "level": 3
}, {
  "value": "Facebook&#39;s BGP Routing (Meta)",
  "id": "facebooks-bgp-routing-meta",
  "level": 3
}, {
  "value": "BGP in ISP Backbones",
  "id": "bgp-in-isp-backbones",
  "level": 3
}, {
  "value": "Routing Protocol Administrative Distances",
  "id": "routing-protocol-administrative-distances",
  "level": 3
}, {
  "value": "7.13 Routing Security",
  "id": "713-routing-security",
  "level": 2
}, {
  "value": "Real-World Analogy: Fake Road Signs",
  "id": "real-world-analogy-fake-road-signs",
  "level": 3
}, {
  "value": "BGP Hijacking",
  "id": "bgp-hijacking",
  "level": 3
}, {
  "value": "RPKI (Resource Public Key Infrastructure)",
  "id": "rpki-resource-public-key-infrastructure",
  "level": 3
}, {
  "value": "BGP Flowspec",
  "id": "bgp-flowspec",
  "level": 3
}, {
  "value": "Routing Protocol Authentication",
  "id": "routing-protocol-authentication",
  "level": 3
}, {
  "value": "Route Filtering Best Practices",
  "id": "route-filtering-best-practices",
  "level": 3
}, {
  "value": "7.14 Chapter Quiz",
  "id": "714-chapter-quiz",
  "level": 2
}, {
  "value": "Quiz Answer Key",
  "id": "quiz-answer-key",
  "level": 3
}, {
  "value": "Case Study: BGP Hijack Detection at a Tier-2 ISP",
  "id": "case-study-bgp-hijack-detection-at-a-tier-2-isp",
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
  "value": "Coding Problems",
  "id": "coding-problems",
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
        id: "chapter-7-routing",
        children: "Chapter 7: Routing"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prerequisites:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/computer-networks/06-network-layer",
          children: "Chapter 6: Network Layer"
        }), " → IP addressing and forwarding | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/computer-networks/08-transport-layer",
          children: "Chapter 8: Transport Layer"
        }), " → From routing to end-to-end delivery"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/computer-networks/ch07-routing.png",
        alt: "Routing"
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
        href: "../../assets/images/lessons/computer-networks/07-routing/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/computer-networks/07-routing/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/computer-networks/07-routing/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/computer-networks/07-routing/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/computer-networks/07-routing/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/computer-networks/07-routing/visual-explanation.png",
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
        children: "Distinguish between distance-vector and link-state routing algorithms."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the RIP protocol and its limitations due to count-to-infinity."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe OSPF operation including area hierarchy and link-state database synchronization."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain BGP path attributes and the policy-driven nature of inter-domain routing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare unicast, multicast, broadcast, and anycast routing paradigms."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Distance-Vector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exchange tables with neighbors, Bellman-Ford"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple but slow convergence (count-to-infinity)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Link-State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global topology via LSP flooding, Dijkstra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast convergence, higher CPU/memory cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OSPF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical areas, DR/BDR election"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Area 0 backbone; ABRs isolate failure domains"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BGP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path-vector with policy attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internet routing is driven by business relationships, not metrics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multicast/Anycast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Group delivery and nearest-server routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anycast enables DNS/CDN load distribution"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Routing Algorithms] --> B[Distance-Vector]\n    A --> C[Link-State]\n    A --> D[Path-Vector]\n    B --> B1[Bellman-Ford]\n    B --> B2[RIP / Count-to-Infinity]\n    B --> B3[Split Horizon]\n    C --> C1[Dijkstra]\n    C --> C2[OSPF / Areas]\n    D --> D1[BGP / Attributes / Policy]\n    A --> E[Multicast / Broadcast / Anycast]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "routing-algorithm-complexity-comparison",
      children: "Routing Algorithm Complexity Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TB\n    subgraph Legend[\"Color Legend\"]\n        L1[FaST]:::fast\n        L2[Moderate]:::mod\n        L3[Slow]:::slow\n    end\n\n    subgraph DV[\"Distance-Vector Family\"]\n        BF[Bellman-Ford Algorithm]:::algo\n        RIP[RIP Protocol]:::algo\n        DV1[\"Convergence: Slow (minutes)\"]:::slow\n        DV2[\"Memory: O(N×D)\"]:::mod\n        DV3[\"Computation: O(V×E)\"]:::mod\n    end\n\n    subgraph LS[\"Link-State Family\"]\n        DJ[Dijkstra Algorithm]:::algo\n        OSPF[OSPF Protocol]:::algo\n        LS1[\"Convergence: Fast (seconds)\"]:::fast\n        LS2[\"Memory: O(N²)\"]:::slow\n        LS3[\"Computation: O(E log V)\"]:::fast\n    end\n\n    subgraph PV[\"Path-Vector Family\"]\n        BGP[BGP Protocol]:::algo\n        PV1[\"Convergence: Variable (minutes)\"]:::slow\n        PV2[\"Memory: O(~1M prefixes)\"]:::slow\n        PV3[\"Decision: Policy-based\"]:::mod\n    end\n\n    BF --> RIP\n    DJ --> OSPF\n    BGP --> PV1\n\n    classDef algo fill:#e1f5fe,stroke:#0288d1,stroke-width:2px\n    classDef fast fill:#e8f5e9,stroke:#388e3c\n    classDef mod fill:#fff3e0,stroke:#f57c00\n    classDef slow fill:#ffebee,stroke:#d32f2f\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "71-routing-fundamentals",
      children: "7.1 Routing Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-the-gps-navigation-system",
      children: "Real-World Analogy: The GPS Navigation System"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A GPS navigation app computes the best route from source to destination. The app considers road segments (links), intersections (routers), traffic conditions (link cost), and road closures (link failures). Like a router, a GPS:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Maintains a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "map"
        }), " (routing table / topology database)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Computes paths using an ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "algorithm"
        }), " (Bellman-Ford, Dijkstra, or policy-based)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Adapts"
        }), " when roads close or traffic spikes (convergence)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The postal system is another analogy: each post office (router) decides which neighboring post office to forward a package toward based on the destination ZIP code (prefix)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "routing-vs-forwarding",
      children: "Routing vs Forwarding"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Routing"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Forwarding"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Determines the path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moves packets along the path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Timescale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seconds to minutes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nanoseconds to microseconds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network-wide (control plane)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-router (data plane)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bellman-Ford, Dijkstra, BGP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Longest-prefix match, TCAM lookup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routing Information Base (RIB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forwarding Information Base (FIB)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-routing-problem-formally",
      children: "The Routing Problem Formally"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Given a graph ", (0,jsx_runtime.jsx)(_components.code, {
        children: "G = (V, E)"
      }), " where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "V"
      }), " is the set of routers and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E"
      }), " is the set of links, each link ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(u, v)"
      }), " has a cost ", (0,jsx_runtime.jsx)(_components.code, {
        children: "c(u, v)"
      }), ". For any source ", (0,jsx_runtime.jsx)(_components.code, {
        children: "s"
      }), " and destination ", (0,jsx_runtime.jsx)(_components.code, {
        children: "t"
      }), ", find a path ", (0,jsx_runtime.jsx)(_components.code, {
        children: "P = (s = v0, v1, ..., vk = t)"
      }), " that minimizes:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Total Cost(P) = sum(c(vi, vi+1) for i = 0 to k-1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-of-the-routing-process",
      children: "Numbered Steps of the Routing Process"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Neighbor discovery"
        }), " → Each router identifies directly connected routers (via Hello protocols, configuration, or manual setup)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Information exchange"
        }), " → Routers exchange reachability information (distance vectors, link-state advertisements, or BGP UPDATE messages)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Route computation"
        }), " → Each router runs a routing algorithm on the collected information to compute best paths."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Forwarding table population"
        }), " → The computed best paths are installed into the FIB (forwarding table)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Packet forwarding"
        }), " → For each incoming packet, the router performs a longest-prefix match lookup and forwards to the next hop."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Convergence"
        }), " → When topology changes, routers re-converge to a consistent state where all tables are loop-free."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "generic-routing-algorithm-pseudocode",
      children: "Generic Routing Algorithm Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION RouteUpdate():\n    WHILE router is running:\n        FOR EACH neighbor in neighbors:\n            SEND routing_info TO neighbor\n            RECEIVE neighbor_info FROM neighbor\n        FOR EACH destination in network:\n            old_next_hop = routing_table[destination].next_hop\n            best_cost = INFINITY\n            best_next_hop = NULL\n            FOR EACH neighbor in neighbors:\n                new_cost = link_cost[self][neighbor] + neighbor_table[neighbor][destination]\n                IF new_cost < best_cost:\n                    best_cost = new_cost\n                    best_next_hop = neighbor\n            IF best_cost != old_cost OR best_next_hop != old_next_hop:\n                routing_table[destination] = {cost: best_cost, next_hop: best_next_hop}\n                converged = FALSE\n        FOR EACH link in known_links:\n            IF link_heartbeat_timed_out(link):\n                REMOVE all routes using link\n                TRIGGER immediate update\n        SLEEP(update_interval)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-routingtablemanager",
      children: "TypeScript Implementation: RoutingTableManager"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * RoutingTableManager — manages a router's distance-vector table\n * with neighbor discovery, Bellman-Ford updates, and split horizon.\n */\ninterface Neighbor {\n  id: number;\n  linkCost: number;\n}\n\nclass RoutingTableManager {\n  private routerId: number;\n  private neighbors: Map<number, number> = new Map();\n  private distances: Map<number, number> = new Map();\n  private nextHops: Map<number, number> = new Map();\n\n  constructor(routerId: number) {\n    this.routerId = routerId;\n    this.distances.set(routerId, 0); // distance to self\n  }\n\n  addNeighbor(neighborId: number, linkCost: number): void {\n    this.neighbors.set(neighborId, linkCost);\n    this.distances.set(neighborId, linkCost);\n    this.nextHops.set(neighborId, neighborId);\n  }\n\n  /** Apply Bellman-Ford update from a neighbor's advertisement */\n  updateFromNeighbor(neighborId: number, neighborTable: Map<number, number>): boolean {\n    const linkCost = this.neighbors.get(neighborId);\n    if (linkCost === undefined) return false;\n\n    let changed = false;\n    for (const [dest, dist] of neighborTable.entries()) {\n      const newDist = linkCost + dist;\n      const currentDist = this.distances.get(dest);\n      if (currentDist === undefined || newDist < currentDist) {\n        this.distances.set(dest, newDist);\n        this.nextHops.set(dest, neighborId);\n        changed = true;\n      }\n    }\n    return changed;\n  }\n\n  /** Apply split horizon — do not advertise routes back to the neighbor they were learned from */\n  getAdvertisement(excludeNeighbor?: number): Map<number, number> {\n    if (excludeNeighbor === undefined) return new Map(this.distances);\n    const adv = new Map<number, number>();\n    for (const [dest, dist] of this.distances.entries()) {\n      const nextHop = this.nextHops.get(dest);\n      if (nextHop !== excludeNeighbor) {\n        adv.set(dest, dist);\n      }\n    }\n    return adv;\n  }\n\n  printTable(): void {\n    console.log(`Router ${this.routerId} Routing Table:`);\n    for (const [dest, dist] of [...this.distances.entries()].sort((a, b) => a[0] - b[0])) {\n      const nh = this.nextHops.get(dest) ?? '-';\n      console.log(`  → ${dest}: next-hop=${nh}, distance=${dist}`);\n    }\n  }\n}\n\n// Usage example: simulate the A-B-C-D-E topology\nconst routers = [0, 1, 2, 3, 4].map(id => new RoutingTableManager(id));\n// Define neighbors: A(0)-B(1):2, B-C:3, C-D:1, A-E:5, E-C:1\nrouters[0].addNeighbor(1, 2); routers[0].addNeighbor(4, 5);\nrouters[1].addNeighbor(0, 2); routers[1].addNeighbor(2, 3);\nrouters[2].addNeighbor(1, 3); routers[2].addNeighbor(3, 1); routers[2].addNeighbor(4, 1);\nrouters[3].addNeighbor(2, 1);\nrouters[4].addNeighbor(0, 5); routers[4].addNeighbor(2, 1);\n\n// Run one iteration of distance-vector exchange\nfor (let i = 0; i < 3; i++) {\n  console.log(`\\n--- Iteration ${i + 1} ---`);\n  for (const r of routers) {\n    for (const [nid] of r['neighbors']) {\n      r.updateFromNeighbor(nid, routers[nid].getAdvertisement(r['routerId']));\n    }\n    r.printTable();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "--- Iteration 1 ---\nRouter 0 Routing Table:\n  → 0: next-hop=-, distance=0\n  → 1: next-hop=1, distance=2\n  → 4: next-hop=4, distance=5\nRouter 1 Routing Table:\n  → 0: next-hop=0, distance=2\n  → 1: next-hop=-, distance=0\n  → 2: next-hop=2, distance=3\nRouter 2 Routing Table:\n  → 1: next-hop=1, distance=3\n  → 2: next-hop=-, distance=0\n  → 3: next-hop=3, distance=1\n  → 4: next-hop=4, distance=1\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-generic-distance-table",
      children: "C++ Implementation: Generic Distance Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <map>\n#include <climits>\n#include <algorithm>\n\nclass Router {\n    int id;\n    std::map<int, int> neighbors;\n    std::map<int, int> routing_table;\n    std::map<int, int> distance_table;\n\npublic:\n    Router(int rid) : id(rid) {}\n\n    void addNeighbor(int nid, int cost) {\n        neighbors[nid] = cost;\n        distance_table[nid] = cost;\n        routing_table[nid] = nid;\n    }\n\n    void updateDistanceTable(const std::vector<int>& destinations,\n                             const std::vector<int>& distances,\n                             int from_neighbor) {\n        if (neighbors.find(from_neighbor) == neighbors.end()) return;\n        for (size_t i = 0; i < destinations.size(); ++i) {\n            int dest = destinations[i];\n            int new_dist = neighbors[from_neighbor] + distances[i];\n            if (distance_table.find(dest) == distance_table.end() ||\n                new_dist < distance_table[dest]) {\n                distance_table[dest] = new_dist;\n                routing_table[dest] = from_neighbor;\n            }\n        }\n    }\n\n    void printTable() const {\n        std::cout << \"Router \" << id << \" table:\\n\";\n        for (auto& [dest, dist] : distance_table) {\n            std::cout << \"  -> \" << dest << \" via \" << routing_table.at(dest)\n                      << \" cost \" << dist << \"\\n\";\n        }\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-routing-table-manager",
      children: "Python Implementation: Routing Table Manager"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "INF = float('inf')\n\nclass RoutingTable:\n    def __init__(self, router_id):\n        self.router_id = router_id\n        self.distances = {}\n        self.next_hops = {}\n        self.neighbors = {}\n\n    def add_neighbor(self, neighbor_id, link_cost):\n        self.neighbors[neighbor_id] = link_cost\n        self.distances[neighbor_id] = link_cost\n        self.next_hops[neighbor_id] = neighbor_id\n\n    def update_from_neighbor(self, neighbor_id, neighbor_table):\n        if neighbor_id not in self.neighbors:\n            return\n        link_cost = self.neighbors[neighbor_id]\n        for dest, dist in neighbor_table.items():\n            new_dist = link_cost + dist\n            if dest not in self.distances or new_dist < self.distances[dest]:\n                self.distances[dest] = new_dist\n                self.next_hops[dest] = neighbor_id\n\n    def get_table_for_advertisement(self):\n        return dict(self.distances)\n\n    def print_table(self):\n        print(f\"Router {self.router_id} Routing Table:\")\n        for dest in sorted(self.distances.keys()):\n            nh = self.next_hops[dest]\n            d = self.distances[dest]\n            print(f\"  Destination {dest}: next_hop={nh}, distance={d}\")\n\nrt = RoutingTable(1)\nrt.add_neighbor(2, 1)\nrt.add_neighbor(3, 5)\nrt.update_from_neighbor(2, {3: 2, 4: 10})\nrt.print_table()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space per router (DV)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N * D)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each router stores N destinations with D neighbors' distances"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space per router (LS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N^2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each router stores the full link-state database (N nodes, ~N edges)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Message complexity (DV)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N * D * E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each of E links exchanges N-sized vectors every iteration, for D iterations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Message complexity (LS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N * E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each of N routers floods an LSP over E links; total O(N*E)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Convergence (DV worst)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N * D)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Count-to-infinity can take N iterations where each propagates through D hops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Convergence (LS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N^2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dijkstra O(N^2) per router; convergence bounded by LSP flooding time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Computation (BF)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V * E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bellman-Ford relaxes all edges V-1 times"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Computation (Dijkstra)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E log V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "With binary heap, each edge relaxed once, each vertex extracted from heap"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-routing",
      children: "Edge Cases in Routing"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Count to Infinity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed link causes incremental cost increases until infinity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow convergence, transient loops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Routing Loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packet circulates among routers endlessly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packet loss, TTL expiry, bandwidth waste"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route Flap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route repeatedly withdrawn and re-advertised"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU spike, instability, BGP convergence churn"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blackhole"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Router advertises a route but cannot forward packets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packet loss without notification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Micro-loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transient loops during convergence after topology change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packet loss for milliseconds to seconds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pathological Topologies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specific topologies cause worst-case convergence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Example: \"counting to infinity\" linear chain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent Oscillation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load-sensitive metrics cause routes to oscillate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two paths alternately preferred as load shifts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forwarding Loops due to Inconsistency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RIB/FIB mismatch during convergence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dropped or misrouted packets"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "72-distance-vector-routing",
      children: "7.2 Distance-Vector Routing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-the-gossip-network",
      children: "Real-World Analogy: The Gossip Network"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each person (router) keeps a notebook of \"how far\" every other person is. Periodically, everyone reads their notebook aloud to their immediate neighbors. When you hear \"I can reach Alice in 3 steps through Bob,\" and you have a 1-step path to the speaker, you write down \"I can reach Alice in 4 steps through Speaker.\" You keep updating until nobody's notebook changes."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is how rumors spread in a small town → information propagates hop by hop, and everyone eventually knows how to reach everyone else. But if the town gossip moves away, it takes a while before everyone agrees on the new shortest path."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "721-the-bellman-ford-algorithm",
      children: "7.2.1 The Bellman-Ford Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bellman-Ford solves the single-source shortest path problem for graphs that may have negative edge weights. In networking, all link costs are positive, but the algorithm still provides the foundation for distance-vector routing."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Bellman-Ford Equation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "D_x(y) = min over v in N(x) of { c(x, v) + D_v(y) }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "D_x(y)"
        }), " = distance from router x to destination y"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "c(x, v)"
        }), " = cost of link from x to neighbor v"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "N(x)"
        }), " = set of x's neighbors"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "D_v(y)"
        }), " = distance from v to y (as reported by v)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps of Bellman-Ford (Distributed Version):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialize:"
        }), " Set D_self(dest) = INF for all destinations. Set D_self(self) = 0. For each neighbor v, set D_self(v) = c(self, v). Set next_hop(v) = v."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Advertise:"
        }), " Send your entire distance vector (D_self(dest) for all dest) to all neighbors."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Receive:"
        }), " When a neighbor v sends its distance vector, for each destination y:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Compute candidate = c(self, v) + D_v(y)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If candidate < D_self(y), update D_self(y) = candidate and set next_hop(y) = v."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeat:"
        }), " Go to step 2. Continue until no updates occur (convergence)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Triggered Updates:"
        }), " If link cost changes or a neighbor becomes unreachable, immediately send an updated vector."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bellman-ford-step-by-step-dry-run",
      children: "Bellman-Ford Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network Topology:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    A ----- B ----- C ----- D\n     \\             /\n      \\           /\n       \\         /\n        \\       /\n         \\     /\n          \\   /\n           \\ /\n            E\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Link Costs:"
      }), " A-B:2, B-C:3, A-E:5, E-C:1, C-D:1"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Iteration 0 (Initialization):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Router"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "E"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "A"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "D"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "E"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Iteration 1 → Each router receives vectors from neighbors and updates:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Router A receives from B: (A:2, B:0, C:3, D:INF, E:INF)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A->C via B: c(A,B) + D_B(C) = 2 + 3 = 5 (was INF, update)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A->D via B: c(A,B) + D_B(D) = 2 + INF = INF (no update)\nRouter A receives from E: (A:5, B:INF, C:1, D:INF, E:0)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A->C via E: c(A,E) + D_E(C) = 5 + 1 = 6 (already have 5, no update)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Router B receives from A: (A:0, B:2, C:INF, D:INF, E:5)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B->E via A: c(B,A) + D_A(E) = 2 + 5 = 7 (was INF, update)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Router C receives from B: (A:2, B:0, C:3, D:INF, E:INF)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C->A via B: c(C,B) + D_B(A) = 3 + 2 = 5 (was INF, update)\nRouter C receives from D: (A:INF, B:INF, C:1, D:0, E:INF) → no new info\nRouter C receives from E: (A:5, B:INF, C:1, D:INF, E:0)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C->A via E: c(C,E) + D_E(A) = 1 + 5 = 6 (already have 5, no update)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Router D receives from C: (A:INF, B:3, C:0, D:1, E:1)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D->B via C: c(D,C) + D_C(B) = 1 + 3 = 4 (was INF, update)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D->E via C: c(D,C) + D_C(E) = 1 + 1 = 2 (was INF, update)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Router E receives from A: (A:0, B:2, C:INF, D:INF, E:5)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "E->B via A: c(E,A) + D_A(B) = 5 + 2 = 7 (was INF, update)\nRouter E receives from C: (A:INF, B:3, C:0, D:1, E:1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "E->B via C: c(E,C) + D_C(B) = 1 + 3 = 4 (was 7 via A, update to 4)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "E->D via C: c(E,C) + D_C(D) = 1 + 1 = 2 (was INF, update)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After Iteration 1:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Router"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "E"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "A"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "D"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "E"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Iteration 2:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Router A receives from B: (A:2, B:0, C:3, D:4, E:7)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A->D via B: 2 + 4 = 6 (was INF, update)\nRouter A receives from E: (A:5, B:4, C:1, D:2, E:0) → no improvements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Router C receives from B: (A:2, B:0, C:3, D:4, E:7) → no improvements\nRouter C receives from D: (A:INF, B:4, C:1, D:0, E:2) → no improvements\nRouter C receives from E: (A:5, B:4, C:1, D:2, E:0) → no improvements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After Iteration 2 (converged):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Router"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "E"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "A"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "D"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "E"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "final-forwarding-tables",
      children: "Final Forwarding Tables"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Router A"
          }), (0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Router B"
          }), (0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Router C"
          }), (0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Router D"
          }), (0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Router E"
          }), (0,jsx_runtime.jsx)(_components.th, {})]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dest->next"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dest->next"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dest->next"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dest->next"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dest->next"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B->B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A->A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A->B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A->C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A->C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C->B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C->C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B->B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B->C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B->C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D->B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D->C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D->D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C->C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C->C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E->E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E->C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E->E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E->C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D->C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "count-to-infinity-detailed-trace",
      children: "Count-to-Infinity Detailed Trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider the classic linear topology: A → B → C"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Link costs: A-B = 1, B-C = 1. Converged tables:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A: dest=A(0), B(1 via B), C(2 via B)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B: dest=A(1 via A), B(0), C(1 via C)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C: dest=A(2 via B), B(1 via B), C(0)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Link A-B fails."
      }), " B detects the failure."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time t=0:"
      }), " B sets D_B(A) = INF (16 in RIP)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time t=1:"
      }), " Before B advertises, C advertises its vector to B: (A:2, B:1, C:0).\nB computes: D_B(A) via C = c(B,C) + D_C(A) = 1 + 2 = 3.\nB updates: D_B(A) = 3, next_hop(B->A) = C. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "This is incorrect → routing loop created!"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time t=2:"
      }), " B advertises to C: (A:3, B:0, C:1).\nC computes: D_C(A) via B = c(C,B) + D_B(A) = 1 + 3 = 4.\nC updates: D_C(A) = 4."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time t=3:"
      }), " C advertises to B: (A:4, B:1, C:0).\nB computes: D_B(A) via C = 1 + 4 = 5."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This continues until the distance reaches 16 (RIP infinity), at which point both routers agree A is unreachable."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Iteration Trace (RIP with max=16):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D_B(A)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D_C(A)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A-B fails, B sets INF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C advertises before B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B advertises bad news"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C advertises back"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B advertises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C advertises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B advertises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C advertises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B advertises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C advertises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B advertises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C advertises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B advertises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C advertises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B advertises → infinity reached"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both mark A unreachable"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mitigation-techniques",
      children: "Mitigation Techniques"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Split Horizon:"
      }), " A router never advertises a route back on the same interface from which it was learned. In our example, B would NOT advertise C's route to A back to C, breaking the loop."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Split Horizon with Poison Reverse:"
      }), " Instead of simply not advertising, the router explicitly advertises the route with cost = INFINITY on the interface. This positively confirms \"I cannot reach that destination through you.\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hold-down Timers:"
      }), " When a router receives news that a destination is unreachable, it starts a hold-down timer (typically 180 seconds in RIP). During the hold-down period, the router ignores any new route information for that destination that is \"better\" (lower cost) than what it had. This prevents premature adoption of alternative paths that may be invalid due to propagation delays."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bellman-ford-pseudocode-centralized",
      children: "Bellman-Ford Pseudocode (Centralized)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION BellmanFord(graph G, source s):\n    FOR v in vertices(G):\n        dist[v] = INFINITY\n        prev[v] = NULL\n    dist[s] = 0\n    FOR i = 1 TO V-1:\n        FOR EACH edge (u, v) in edges(G):\n            IF dist[u] + weight(u,v) < dist[v]:\n                dist[v] = dist[u] + weight(u,v)\n                prev[v] = u\n    FOR EACH edge (u, v) in edges(G):\n        IF dist[u] + weight(u,v) < dist[v]:\n            PRINT \"Graph contains negative-weight cycle\"\n            RETURN NULL\n    RETURN (dist, prev)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-distancevectorsimulator",
      children: "TypeScript Implementation: DistanceVectorSimulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * DistanceVectorSimulator — runs a distributed Bellman-Ford\n * simulation on any network topology with convergence tracking.\n */\ninterface TopologyEdge {\n  src: number;\n  dest: number;\n  weight: number;\n}\n\nclass DistanceVectorSimulator {\n  private routers: Map<number, Map<number, number>> = new Map();  // routerId → {dest → distance}\n  private nextHops: Map<number, Map<number, number>> = new Map(); // routerId → {dest → nextHop}\n  private topology: TopologyEdge[];\n\n  constructor(vertices: number[], edges: TopologyEdge[]) {\n    this.topology = edges;\n    for (const v of vertices) {\n      const distMap = new Map<number, number>();\n      const nextMap = new Map<number, number>();\n      distMap.set(v, 0); // distance to self = 0\n      this.routers.set(v, distMap);\n      this.nextHops.set(v, nextMap);\n    }\n    // Initialize direct neighbors from edges\n    for (const e of edges) {\n      const distSrc = this.routers.get(e.src)!;\n      const distDst = this.routers.get(e.dest)!;\n      const nextSrc = this.nextHops.get(e.src)!;\n      const nextDst = this.nextHops.get(e.dest)!;\n      distSrc.set(e.dest, e.weight);\n      distDst.set(e.src, e.weight);\n      nextSrc.set(e.dest, e.dest);\n      nextDst.set(e.src, e.src);\n    }\n  }\n\n  /** Get the distance vector for a router */\n  getVector(routerId: number): Map<number, number> {\n    return new Map(this.routers.get(routerId)!);\n  }\n\n  /** Run one iteration of the algorithm — returns true if any update occurred */\n  runIteration(): boolean {\n    let updated = false;\n    // Build list of neighbors from edges\n    const neighbors = new Map<number, number[]>();\n    for (const e of this.topology) {\n      if (!neighbors.has(e.src)) neighbors.set(e.src, []);\n      if (!neighbors.has(e.dest)) neighbors.set(e.dest, []);\n      neighbors.get(e.src)!.push(e.dest);\n      neighbors.get(e.dest)!.push(e.src);\n    }\n\n    for (const [routerId, distMap] of this.routers) {\n      const nextMap = this.nextHops.get(routerId)!;\n      const neighborList = neighbors.get(routerId) ?? [];\n      for (const nid of neighborList) {\n        const linkCost = distMap.get(nid)!;\n        const nbrDist = this.routers.get(nid)!;\n        for (const [dest, nbrCost] of nbrDist) {\n          if (dest === routerId) continue;\n          const newDist = linkCost + nbrCost;\n          const currentDist = distMap.get(dest);\n          if (currentDist === undefined || newDist < currentDist) {\n            distMap.set(dest, newDist);\n            nextMap.set(dest, nid);\n            updated = true;\n          }\n        }\n      }\n    }\n    return updated;\n  }\n\n  /** Run until convergence (max iterations to prevent infinite loops) */\n  runToConvergence(maxIterations = 10): void {\n    for (let i = 1; i <= maxIterations; i++) {\n      console.log(`\\n  === Iteration ${i} ===`);\n      const changed = this.runIteration();\n      this.printAllTables();\n      if (!changed) {\n        console.log(\"\\n  ✓ Converged!\");\n        return;\n      }\n    }\n    console.log(\"\\n  ⚠ Reached max iterations without full convergence\");\n  }\n\n  printAllTables(): void {\n    for (const [id, distMap] of this.routers) {\n      const nextMap = this.nextHops.get(id)!;\n      const entries = [...distMap.entries()]\n        .filter(([k]) => k !== id)\n        .sort(([a], [b]) => a - b);\n      if (entries.length === 0) continue;\n      const line = entries.map(([dest, dist]) => `${dest}(→${nextMap.get(dest) ?? '-'},${dist})`).join(' ');\n      console.log(`  Router ${id}: ${line}`);\n    }\n  }\n\n  /** Get shortest path from source to destination */\n  getPath(source: number, destination: number): number[] | null {\n    const path: number[] = [source];\n    let current = source;\n    const visited = new Set<number>();\n    visited.add(source);\n    while (current !== destination) {\n      const nextMap = this.nextHops.get(current);\n      if (!nextMap) return null;\n      const next = nextMap.get(destination);\n      if (next === undefined || visited.has(next)) return null;\n      path.push(next);\n      visited.add(next);\n      current = next;\n    }\n    return path;\n  }\n}\n\n// Usage example: A(0)-B(1):2, B-C:3, C-D:1, A-E:5, E-C:1\nconst sim = new DistanceVectorSimulator(\n  [0, 1, 2, 3, 4],\n  [\n    { src: 0, dest: 1, weight: 2 },\n    { src: 1, dest: 2, weight: 3 },\n    { src: 2, dest: 3, weight: 1 },\n    { src: 0, dest: 4, weight: 5 },\n    { src: 4, dest: 2, weight: 1 },\n  ]\n);\nconsole.log(\"=== Distance-Vector Routing Simulation ===\");\nsim.runToConvergence(5);\nconsole.log(\"\\nPath from 0 to 3:\", sim.getPath(0, 3)?.join(' → '));\nconsole.log(\"Path from 0 to 2:\", sim.getPath(0, 2)?.join(' → '));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== Distance-Vector Routing Simulation ===\n\n  === Iteration 1 ===\n  Router 0: 1(→1,2) 2(→1,5) 4(→4,5)\n  Router 1: 0(→0,2) 2(→2,3)\n  Router 2: 1(→1,3) 3(→3,1) 4(→4,1)\n  Router 3: 2(→2,1)\n  Router 4: 0(→0,5) 2(→2,1)\n\n  === Iteration 2 ===\n  Router 0: 1(→1,2) 2(→1,5) 3(→1,6) 4(→4,5)\n  Router 1: 0(→0,2) 2(→2,3) 4(→2,8)\n  Router 2: 0(→1,5) 1(→1,3) 3(→3,1) 4(→4,1)\n  Router 3: 0(→2,6) 1(→2,4) 2(→2,1) 4(→2,2)\n  Router 4: 0(→0,5) 1(→2,4) 2(→2,1) 3(→2,2)\n\nPath from 0 to 3: 0 → 1 → 2 → 3\nPath from 0 to 2: 0 → 1 → 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-bellman-ford-simulator",
      children: "C++ Implementation: Bellman-Ford Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <climits>\n#include <string>\n\nstruct Edge {\n    int src, dest, weight;\n};\n\nstruct Router {\n    int id;\n    std::string name;\n};\n\nvoid bellmanFordSimulation(const std::vector<Router>& routers,\n                           const std::vector<Edge>& edges,\n                           int source_id) {\n    int V = routers.size();\n    std::vector<int> dist(V, INT_MAX);\n    std::vector<int> prev(V, -1);\n    dist[source_id] = 0;\n\n    std::cout << \"=== Bellman-Ford Simulation ===\\n\";\n    std::cout << \"Source: Router \" << source_id << \"\\n\\n\";\n\n    for (int i = 1; i <= V - 1; ++i) {\n        bool updated = false;\n        std::cout << \"Iteration \" << i << \":\\n\";\n        for (const auto& e : edges) {\n            if (dist[e.src] != INT_MAX &&\n                dist[e.src] + e.weight < dist[e.dest]) {\n                int old = dist[e.dest];\n                dist[e.dest] = dist[e.src] + e.weight;\n                prev[e.dest] = e.src;\n                updated = true;\n                std::cout << \"  Relax edge (\" << e.src << \"->\" << e.dest\n                          << \"): \" << (old == INT_MAX ? \"INF\" : std::to_string(old))\n                          << \" -> \" << dist[e.dest] << \"\\n\";\n            }\n        }\n        if (!updated) {\n            std::cout << \"  No updates (converged early)\\n\";\n            break;\n        }\n    }\n\n    for (const auto& e : edges) {\n        if (dist[e.src] != INT_MAX &&\n            dist[e.src] + e.weight < dist[e.dest]) {\n            std::cout << \"\\nERROR: Negative-weight cycle detected!\\n\";\n            return;\n        }\n    }\n\n    std::cout << \"\\nFinal distances from Router \" << source_id << \":\\n\";\n    for (int i = 0; i < V; ++i) {\n        std::cout << \"  To Router \" << routers[i].name\n                  << \" (id=\" << i << \"): \"\n                  << (dist[i] == INT_MAX ? \"INF\" : std::to_string(dist[i]))\n                  << \" via \" << (prev[i] == -1 ? \"-\" : std::to_string(prev[i]))\n                  << \"\\n\";\n    }\n}\n\nint main() {\n    std::vector<Router> routers = {{0, \"A\"}, {1, \"B\"}, {2, \"C\"}, {3, \"D\"}, {4, \"E\"}};\n    std::vector<Edge> edges = {\n        {0, 1, 2}, {1, 0, 2},\n        {1, 2, 3}, {2, 1, 3},\n        {2, 3, 1}, {3, 2, 1},\n        {0, 4, 5}, {4, 0, 5},\n        {4, 2, 1}, {2, 4, 1}\n    };\n    bellmanFordSimulation(routers, edges, 0);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-bellman-ford-with-convergence-tracking",
      children: "Python Implementation: Bellman-Ford with Convergence Tracking"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import sys\nfrom copy import deepcopy\n\nINF = 10**9\n\nclass DistanceVectorRouter:\n    def __init__(self, router_id, neighbors=None):\n        self.id = router_id\n        self.neighbors = neighbors or {}\n        self.distances = {router_id: 0}\n        self.next_hops = {}\n        for nid, cost in self.neighbors.items():\n            self.distances[nid] = cost\n            self.next_hops[nid] = nid\n\n    def get_vector(self):\n        return dict(self.distances)\n\n    def update(self, from_neighbor, neighbor_vector):\n        if from_neighbor not in self.neighbors:\n            return False\n        link_cost = self.neighbors[from_neighbor]\n        changed = False\n        for dest, dist in neighbor_vector.items():\n            new_dist = link_cost + dist\n            if dest not in self.distances or new_dist < self.distances[dest]:\n                self.distances[dest] = new_dist\n                self.next_hops[dest] = from_neighbor\n                changed = True\n        return changed\n\ndef simulate_distance_vector(network_topology, max_iterations=10):\n    routers = {}\n    for rid, neighbors in network_topology.items():\n        routers[rid] = DistanceVectorRouter(rid, neighbors)\n\n    print(\"=== Distance-Vector Routing Simulation ===\\n\")\n\n    for iteration in range(max_iterations):\n        print(f\"\\n--- Iteration {iteration} ---\")\n        updates = 0\n        for rid, router in routers.items():\n            vector = router.get_vector()\n            for nid in router.neighbors:\n                neighbor = routers[nid]\n                if neighbor.update(rid, vector):\n                    updates += 1\n\n        for rid, router in sorted(routers.items()):\n            print(f\"  Router {rid}: \", end=\"\")\n            for dest in sorted(router.distances.keys()):\n                nh = router.next_hops.get(dest, '-')\n                d = router.distances[dest]\n                print(f\"{dest}({nh},{d}) \", end=\"\")\n            print()\n\n        if updates == 0:\n            print(\"\\nConverged!\")\n            break\n    else:\n        print(\"\\nReached max iterations without full convergence\")\n    return routers\n\ntopology = {\n    0: {1: 2, 4: 5},\n    1: {0: 2, 2: 3},\n    2: {1: 3, 3: 1, 4: 1},\n    3: {2: 1},\n    4: {0: 5, 2: 1},\n}\nsimulate_distance_vector(topology)\n\ndef bellman_ford_centralized(vertices, edges, source):\n    dist = {v: INF for v in vertices}\n    prev = {v: None for v in vertices}\n    dist[source] = 0\n\n    print(f\"\\n=== Centralized Bellman-Ford (source={source}) ===\")\n    for i in range(len(vertices) - 1):\n        updated = False\n        print(f\"  Round {i + 1}: \", end=\"\")\n        for u, v, w in edges:\n            if dist[u] != INF and dist[u] + w < dist[v]:\n                dist[v] = dist[u] + w\n                prev[v] = u\n                updated = True\n        print(f\"{'converged' if not updated else 'updated'}\")\n\n    for u, v, w in edges:\n        if dist[u] != INF and dist[u] + w < dist[v]:\n            print(\"Negative cycle detected!\")\n            return None\n    return dist, prev\n\nverts = [0, 1, 2, 3, 4]\nedgs = [\n    (0, 1, 2), (1, 0, 2),\n    (1, 2, 3), (2, 1, 3),\n    (2, 3, 1), (3, 2, 1),\n    (0, 4, 5), (4, 0, 5),\n    (4, 2, 1), (2, 4, 1)\n]\n\nresult = bellman_ford_centralized(verts, edgs, 0)\nif result:\n    dist, prev = result\n    print(f\"\\n  Shortest paths from {0}:\")\n    for v in verts:\n        if dist[v] != INF:\n            path = []\n            t = v\n            while t is not None:\n                path.append(str(t))\n                t = prev[t]\n            print(f\"    To {v}: dist={dist[v]}, path={' -> '.join(reversed(path))}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-of-bellman-ford-with-why",
      children: "Complexity Analysis of Bellman-Ford with WHY"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time (centralized)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V * E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V-1 iterations, each checking all E edges; each iteration propagates shortest paths one more hop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space (centralized)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stores dist[] and prev[] for V vertices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time (distributed, per router)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N * D)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each of N destinations may be updated across D neighbors each iteration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Message complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N * E * I)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E links carry N-sized vectors for I iterations until convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Why V-1 iterations?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In the worst case, the longest simple path has V-1 edges, so V-1 iterations guarantee convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Why distributed converges slowly?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Count-to-infinity requires O(infinity) iterations, where infinity is an arbitrary bound"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages-of-distance-vector",
      children: "Advantages and Disadvantages of Distance-Vector"
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
            children: "Simplicity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to implement, minimal CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited to small networks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only neighbors' info stored"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each router has limited visibility"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initially low for small nets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Periodic full-table updates waste bandwidth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Convergence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast in stable small networks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow after topology changes (count-to-infinity)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Metric flexibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supports any additive metric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single metric only (usually hop count)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works on any router hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No QoS or traffic engineering support"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "722-rip-routing-information-protocol",
      children: "7.2.2 RIP (Routing Information Protocol)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RIP (RFC 1058, RFC 2453 for RIPv2) is a concrete implementation of distance-vector routing."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Parameters:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rationale"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Update interval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30 seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balances convergence speed vs bandwidth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route timeout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "180 seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 missed updates = router considered dead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hold-down"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "180 seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents premature route adoption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flush timer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "240 seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removes route from table after timeout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Infinity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 hops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limits max network diameter to 15"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max routes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500 (typically)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents memory exhaustion"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RIP Version Comparison:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RIPv1 (RFC 1058)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RIPv2 (RFC 2453)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RIPng (RFC 2080)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Addressing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classful only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CIDR, VLSM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPv6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plaintext/MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPv6 AH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multicast (224.0.0.9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multicast (FF02::9)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Next-hop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always sender"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can specify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can specify"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route tags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route tags"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-distance-vector--rip",
      children: "Edge Cases in Distance-Vector / RIP"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Two-node loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A and B think the other can reach C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split horizon breaks it"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Three-node loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A->B, B->C, C->A cycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split horizon with poison reverse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transient link failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Link flaps up/down rapidly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hold-down timers, route damping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Large diameter network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path exceeds 15 hops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot use RIP; requires OSPF/IS-IS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Routing table corruption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory error corrupts table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checksums on RIP updates, graceful restart"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Neighbor misconfiguration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metric mismatch between peers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compatibility checks in RIPv2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Update loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packet drop during transmission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Periodic updates ensure eventual delivery"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "73-link-state-routing",
      children: "7.3 Link-State Routing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-the-map-maker",
      children: "Real-World Analogy: The Map Maker"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Instead of gossip (distance-vector), link-state routing is like every city having a complete road atlas. Every city (router) draws its own local map (LSP → Link State Packet), photocopies it, and sends a copy to every other city. Once everyone has everyone else's local maps, each city assembles the full atlas and independently computes the shortest routes using Dijkstra's algorithm."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If a road closes, the city at that road announces a new map, floods it globally, and everyone recalculates. This converges much faster than gossip because every router independently determines the topology."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "731-dijkstras-algorithm",
      children: "7.3.1 Dijkstra's Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dijkstra's algorithm computes the shortest path from a source node to all other nodes in a graph with non-negative edge weights."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialize:"
        }), " Mark source node ", (0,jsx_runtime.jsx)(_components.code, {
          children: "s"
        }), " with distance 0. All other nodes have distance INFINITY. Mark all nodes as unvisited. Set current node = source."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explore neighbors:"
        }), " For each unvisited neighbor ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v"
        }), " of current node ", (0,jsx_runtime.jsx)(_components.code, {
          children: "u"
        }), ", compute tentative distance = dist[u] + c(u, v). If tentative < dist[v], update dist[v] and set prev[v] = u."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Select next:"
        }), " From all unvisited nodes, pick the one with the smallest tentative distance. Mark it as visited (its shortest path is now final)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeat:"
        }), " Set current = newly selected node. Go to step 2 until all nodes are visited."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Terminate:"
        }), " When all nodes are visited, dist[] contains shortest distances and prev[] contains the shortest-path tree."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dijkstra-step-by-step-dry-run",
      children: "Dijkstra Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Network:"
      }), " A-B:2, B-C:3, A-E:5, E-C:1, C-D:1"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Source: A"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial State:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "N' (visited)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D(B)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D(C)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D(D)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D(E)"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 (A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 (A)"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Pick B (smallest in N', dist=2). Add B to N'. Explore B's neighbors: C."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D(C) via B = D(B) + c(B,C) = 2 + 3 = 5 (update from INF to 5, prev=C->B)"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "N'"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D(B)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D(C)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D(D)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D(E)"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A, B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 (A)✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 (B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 (A)"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Pick E (dist=5, tie with C → pick arbitrarily, say E). Add E to N'. Explore E's neighbors: C."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D(C) via E = D(E) + c(E,C) = 5 + 1 = 6 (5 < 6, no update)"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "N'"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D(B)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D(C)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D(D)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D(E)"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A, B, E}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 (B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 (A)✓"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Pick C (dist=5). Add C to N'. Explore C's neighbors: B (visited), D, E (visited)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D(D) via C = D(C) + c(C,D) = 5 + 1 = 6 (update from INF to 6, prev=D->C)"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "N'"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D(B)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D(C)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D(D)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D(E)"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A, B, C, E}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 (B)✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 (C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5✓"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Pick D (dist=6). Add D to N'."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "N'"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D(B)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D(C)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D(D)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D(E)"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A, B, C, D, E}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 (C)✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5✓"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Final Shortest-Path Tree from A:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    A\n   / \\\n  B   E\n  |   |\n  C---+\n  |\n  D\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Paths:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A->B: direct (cost 2)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A->C: A->B->C (cost 5)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A->D: A->B->C->D (cost 6)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A->E: direct (cost 5)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dijkstras-algorithm-pseudocode",
      children: "Dijkstra's Algorithm Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION Dijkstra(graph G, source s):\n    FOR v in vertices(G):\n        dist[v] = INFINITY\n        prev[v] = NULL\n        visited[v] = FALSE\n    dist[s] = 0\n\n    PQ = MinPriorityQueue()\n    PQ.insert(s, 0)\n\n    WHILE PQ is not empty:\n        u = PQ.extractMin()\n        IF visited[u] == TRUE:\n            CONTINUE\n        visited[u] = TRUE\n\n        FOR EACH neighbor v of u:\n            IF visited[v] == FALSE:\n                new_dist = dist[u] + weight(u, v)\n                IF new_dist < dist[v]:\n                    dist[v] = new_dist\n                    prev[v] = u\n                    PQ.insert(v, new_dist)\n\n    RETURN (dist, prev)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-dijkstrashortestpath",
      children: "TypeScript Implementation: DijkstraShortestPath"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * DijkstraShortestPath — computes shortest-path trees using\n * Dijkstra's algorithm with a binary heap priority queue.\n */\ninterface Link {\n  dest: number;\n  weight: number;\n}\n\nclass DijkstraShortestPath {\n  private vertices: number;\n  private adjacency: Map<number, Link[]> = new Map();\n\n  constructor(vertices: number[]) {\n    this.vertices = vertices.length;\n    for (const v of vertices) {\n      this.adjacency.set(v, []);\n    }\n  }\n\n  addLink(u: number, v: number, weight: number): void {\n    this.adjacency.get(u)!.push({ dest: v, weight });\n    this.adjacency.get(v)!.push({ dest: u, weight });\n  }\n\n  /** Run Dijkstra from the source, returning distances and predecessors */\n  compute(source: number): { distances: number[]; predecessors: number[] } {\n    const dist = new Array(this.vertices).fill(Infinity);\n    const prev = new Array(this.vertices).fill(-1);\n    const visited = new Array(this.vertices).fill(false);\n    dist[source] = 0;\n\n    // Min-heap: [distance, nodeId]\n    const heap: Array<[number, number]> = [[0, source]];\n\n    while (heap.length > 0) {\n      // Extract min (simple linear extract for clarity — use binary heap in production)\n      heap.sort(([a], [b]) => a - b);\n      const [d, u] = heap.shift()!;\n      if (visited[u]) continue;\n      if (d > dist[u]) continue;\n      visited[u] = true;\n\n      const neighbors = this.adjacency.get(u) ?? [];\n      for (const link of neighbors) {\n        if (visited[link.dest]) continue;\n        const newDist = dist[u] + link.weight;\n        if (newDist < dist[link.dest]) {\n          dist[link.dest] = newDist;\n          prev[link.dest] = u;\n          heap.push([newDist, link.dest]);\n        }\n      }\n    }\n\n    return { distances: dist, predecessors: prev };\n  }\n\n  /** Reconstruct path from source to target */\n  getPath(source: number, target: number): number[] | null {\n    const { predecessors } = this.compute(source);\n    if (predecessors[target] === -1 && source !== target) return null;\n    const path: number[] = [];\n    let current = target;\n    while (current !== -1) {\n      path.unshift(current);\n      current = predecessors[current];\n    }\n    return path[0] === source ? path : null;\n  }\n\n  /** Print the forwarding table for a specific router */\n  printForwardingTable(source: number): void {\n    const { distances, predecessors } = this.compute(source);\n    console.log(`\\nForwarding Table for Router ${source}:`);\n    console.log('  Dest | Next Hop | Cost');\n    console.log('  -----+----------+-----');\n    for (let i = 0; i < this.vertices; i++) {\n      if (i === source || distances[i] === Infinity) continue;\n      // Find next hop\n      let nextHop = i;\n      while (predecessors[nextHop] !== source && predecessors[nextHop] !== -1) {\n        nextHop = predecessors[nextHop];\n      }\n      console.log(`  ${i}    | ${nextHop}       | ${distances[i]}`);\n    }\n  }\n}\n\n// Usage example: A(0)-B(1):2, B-C:3, C-D:1, A-E:5, E-C:1\nconst dj = new DijkstraShortestPath([0, 1, 2, 3, 4]);\ndj.addLink(0, 1, 2);\ndj.addLink(1, 2, 3);\ndj.addLink(2, 3, 1);\ndj.addLink(0, 4, 5);\ndj.addLink(4, 2, 1);\n\nconsole.log(\"=== Dijkstra's Algorithm ===\");\nconst { distances } = dj.compute(0);\nfor (let i = 1; i < 5; i++) {\n  console.log(`Distance 0 → ${i}: ${distances[i]}, Path: ${dj.getPath(0, i)?.join(' → ')}`);\n}\ndj.printForwardingTable(0);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== Dijkstra's Algorithm ===\nDistance 0 → 1: 2, Path: 0 → 1\nDistance 0 → 2: 5, Path: 0 → 1 → 2\nDistance 0 → 3: 6, Path: 0 → 1 → 2 → 3\nDistance 0 → 4: 5, Path: 0 → 4\n\nForwarding Table for Router 0:\n  Dest | Next Hop | Cost\n  -----+----------+-----\n  1    | 1        | 2\n  2    | 1        | 5\n  3    | 1        | 6\n  4    | 4        | 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-dijkstra-on-network-graph",
      children: "C++ Implementation: Dijkstra on Network Graph"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <queue>\n#include <climits>\n#include <algorithm>\n\nstruct Edge {\n    int dest;\n    int weight;\n};\n\nclass NetworkGraph {\n    int V;\n    std::vector<std::vector<Edge>> adj;\n\npublic:\n    NetworkGraph(int vertices) : V(vertices), adj(vertices) {}\n\n    void addLink(int u, int v, int weight) {\n        adj[u].push_back({v, weight});\n        adj[v].push_back({u, weight});\n    }\n\n    struct DijkstraResult {\n        std::vector<int> distances;\n        std::vector<int> predecessors;\n    };\n\n    DijkstraResult dijkstra(int source) {\n        std::vector<int> dist(V, INT_MAX);\n        std::vector<int> prev(V, -1);\n        std::vector<bool> visited(V, false);\n\n        std::priority_queue<std::pair<int, int>,\n                            std::vector<std::pair<int, int>>,\n                            std::greater<std::pair<int, int>>> pq;\n\n        dist[source] = 0;\n        pq.push({0, source});\n\n        while (!pq.empty()) {\n            int u = pq.top().second;\n            int d = pq.top().first;\n            pq.pop();\n            if (visited[u]) continue;\n            visited[u] = true;\n            if (d > dist[u]) continue;\n\n            for (const auto& e : adj[u]) {\n                if (!visited[e.dest]) {\n                    int newDist = dist[u] + e.weight;\n                    if (newDist < dist[e.dest]) {\n                        dist[e.dest] = newDist;\n                        prev[e.dest] = u;\n                        pq.push({newDist, e.dest});\n                    }\n                }\n            }\n        }\n        return {dist, prev};\n    }\n\n    void printShortestPaths(int source) {\n        auto [dist, prev] = dijkstra(source);\n        std::cout << \"=== Dijkstra from Router \" << source << \" ===\\n\";\n        for (int i = 0; i < V; ++i) {\n            if (dist[i] == INT_MAX) {\n                std::cout << \"  To \" << i << \": unreachable\\n\";\n                continue;\n            }\n            std::cout << \"  To \" << i << \" (cost=\" << dist[i] << \"): \";\n            std::vector<int> path;\n            for (int v = i; v != -1; v = prev[v])\n                path.push_back(v);\n            std::reverse(path.begin(), path.end());\n            for (size_t j = 0; j < path.size(); ++j) {\n                if (j > 0) std::cout << \" -> \";\n                std::cout << path[j];\n            }\n            std::cout << \"\\n\";\n        }\n    }\n\n    void printForwardingTable(int router_id) {\n        auto [dist, prev] = dijkstra(router_id);\n        std::cout << \"\\nForwarding Table for Router \" << router_id << \":\\n\";\n        std::cout << \"  Dest | Next Hop | Cost\\n\";\n        std::cout << \"  -----+----------+-----\\n\";\n        for (int i = 0; i < V; ++i) {\n            if (i == router_id || dist[i] == INT_MAX) continue;\n            int next_hop = i;\n            while (prev[next_hop] != router_id && prev[next_hop] != -1)\n                next_hop = prev[next_hop];\n            std::cout << \"  \" << i << \"   | \" << next_hop\n                      << \"        | \" << dist[i] << \"\\n\";\n        }\n    }\n};\n\nint main() {\n    NetworkGraph net(5);\n    net.addLink(0, 1, 2);\n    net.addLink(1, 2, 3);\n    net.addLink(2, 3, 1);\n    net.addLink(0, 4, 5);\n    net.addLink(4, 2, 1);\n\n    net.printShortestPaths(0);\n    net.printForwardingTable(0);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-dijkstra-on-network-graph",
      children: "Python Implementation: Dijkstra on Network Graph"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import heapq\nfrom typing import List, Tuple\n\nINF = 10**9\n\nclass NetworkGraph:\n    def __init__(self, num_vertices: int):\n        self.V = num_vertices\n        self.adj: List[List[Tuple[int, int]]] = [[] for _ in range(num_vertices)]\n\n    def add_link(self, u: int, v: int, weight: int):\n        self.adj[u].append((v, weight))\n        self.adj[v].append((u, weight))\n\n    def dijkstra(self, source: int) -> Tuple[List[int], List[int]]:\n        dist = [INF] * self.V\n        prev = [-1] * self.V\n        visited = [False] * self.V\n        dist[source] = 0\n        pq = [(0, source)]\n\n        while pq:\n            d, u = heapq.heappop(pq)\n            if visited[u]:\n                continue\n            if d > dist[u]:\n                continue\n            visited[u] = True\n            for v, w in self.adj[u]:\n                if not visited[v]:\n                    new_dist = dist[u] + w\n                    if new_dist < dist[v]:\n                        dist[v] = new_dist\n                        prev[v] = u\n                        heapq.heappush(pq, (new_dist, v))\n        return dist, prev\n\n    def get_path(self, prev: List[int], target: int) -> List[int]:\n        path = []\n        v = target\n        while v != -1:\n            path.append(v)\n            v = prev[v]\n        return list(reversed(path))\n\n    def print_forwarding_table(self, source: int):\n        dist, prev = self.dijkstra(source)\n        print(f\"\\nForwarding Table for Router {source}:\")\n        print(f\"{'Dest':>6} | {'Next Hop':>8} | {'Cost':>6}\")\n        print(\"-\" * 30)\n        for v in range(self.V):\n            if v == source or dist[v] == INF:\n                continue\n            next_hop = v\n            while prev[next_hop] != source and prev[next_hop] != -1:\n                next_hop = prev[next_hop]\n            print(f\"{v:>6} | {next_hop:>8} | {dist[v]:>6}\")\n\n    def simulate_lsp_flooding(self, origin: int):\n        print(f\"\\n=== LSP Flooding Simulation from Router {origin} ===\")\n        print(f\"Router {origin} generates LSP: neighbors=\", end=\"\")\n        neighbors = [v for v, _ in self.adj[origin]]\n        print(neighbors)\n        visited = [False] * self.V\n        queue = [origin]\n        visited[origin] = True\n\n        while queue:\n            u = queue.pop(0)\n            for v, _ in self.adj[u]:\n                if not visited[v]:\n                    visited[v] = True\n                    queue.append(v)\n                    print(f\"  Router {u} floods LSP to neighbor {v}\")\n        print(f\"LSP from {origin} reached all {sum(visited)} routers.\")\n\nnet = NetworkGraph(5)\nnet.add_link(0, 1, 2)\nnet.add_link(1, 2, 3)\nnet.add_link(2, 3, 1)\nnet.add_link(0, 4, 5)\nnet.add_link(4, 2, 1)\n\nprint(\"=== Link-State Routing Simulation ===\\n\")\nfor src in range(5):\n    dist, prev = net.dijkstra(src)\n    print(f\"From Router {src}:\")\n    for dst in range(5):\n        if dst != src and dist[dst] != INF:\n            path = net.get_path(prev, dst)\n            print(f\"  To {dst}: cost={dist[dst]}, path={'->'.join(map(str, path))}\")\n    print()\n\nnet.print_forwarding_table(0)\nnet.simulate_lsp_flooding(2)\n\ndef dijkstra_detailed(net: NetworkGraph, source: int):\n    V = net.V\n    dist = [INF] * V\n    prev = [-1] * V\n    visited = [False] * V\n    dist[source] = 0\n\n    print(f\"\\n{'='*60}\")\n    print(f\"Dijkstra's Algorithm → Detailed Trace from Source {source}\")\n    print(f\"{'='*60}\")\n\n    step = 0\n    N_prime = set()\n    header = f\"{'Step':<6} {'N\\'':<20} {'D(B)':<10} {'D(C)':<10} {'D(D)':<10} {'D(E)':<10}\"\n    print(f\"\\n{header}\")\n    print(\"-\" * 60)\n\n    def fmt(dist_val, node_id, nprime):\n        if dist_val == INF:\n            return \"INF\"\n        p = prev[node_id] if prev[node_id] != -1 else source\n        if node_id in nprime:\n            return f\"{dist_val}✓\"\n        return f\"{dist_val} ({p})\"\n\n    print(f\"{step:<6} {'{'+str(source)+'}':<20} {fmt(dist[1], 1, N_prime):<10} {fmt(dist[2], 2, N_prime):<10} {fmt(dist[3], 3, N_prime):<10} {fmt(dist[4], 4, N_prime):<10}\")\n\n    while len(N_prime) < V:\n        u = -1\n        min_dist = INF\n        for v in range(V):\n            if not visited[v] and dist[v] < min_dist:\n                min_dist = dist[v]\n                u = v\n        if u == -1:\n            break\n        visited[u] = True\n        N_prime.add(u)\n        for v, w in net.adj[u]:\n            if not visited[v] and dist[u] + w < dist[v]:\n                dist[v] = dist[u] + w\n                prev[v] = u\n\n        step += 1\n        n_prime_str = \"{\" + \",\".join(map(str, sorted(N_prime))) + \"}\"\n        print(f\"{step:<6} {n_prime_str:<20} {fmt(dist[1], 1, N_prime):<10} {fmt(dist[2], 2, N_prime):<10} {fmt(dist[3], 3, N_prime):<10} {fmt(dist[4], 4, N_prime):<10}\")\n\n    return dist, prev\n\ndijkstra_detailed(net, 0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "732-ospf--open-shortest-path-first",
      children: "7.3.2 OSPF → Open Shortest Path First"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OSPF (RFC 2328) is the most widely deployed link-state protocol in enterprise and service provider networks."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "OSPF Area Hierarchy:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    +---------------------------+\n    |      Area 0 (Backbone)     |\n    |  +-------+  +-------+     |\n    |  | ABR1  |  | ABR2  |     |\n    |  +---+---+  +---+---+     |\n    |      |          |         |\n    +---------------------------+\n           |          |\n    +------+--+    +--+------+\n    | Area 1  |    | Area 2  |\n    | Stub    |    | NSSA    |\n    +---------+    +---------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "OSPF Router Types:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Router Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Internal Router (IR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All interfaces in one area; knows only that area's topology"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Area Border Router (ABR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connects multiple areas; maintains separate LSDB per area"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backbone Router"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At least one interface in Area 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AS Boundary Router (ASBR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redistributes routes from other routing protocols into OSPF"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "OSPF Area Types:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Area Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Characteristics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LSAs Permitted"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standard Area"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full routing info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All LSA types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backbone (Area 0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must connect all areas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All LSA types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stub Area"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No external routes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type 1, 2, 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Totally Stubby"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No external or inter-area routes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type 1, 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Not-So-Stubby (NSSA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited external routes via Type 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type 1, 2, 3, 7"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "OSPF LSDB Flooding Dry Run:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider 4 routers in a broadcast network:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    R1 ----- R2\n     | \\    / |\n     |  \\  /  |\n     |   \\/   |\n     |   /\\   |\n     |  /  \\  |\n    R3 ----- R4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1 → DR/BDR Election:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Routers send Hello packets to 224.0.0.5."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Highest OSPF priority wins DR; second-highest wins BDR."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "R2 becomes DR, R3 becomes BDR (assuming higher priorities)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All other routers (DROTHERs) form full adjacency only with DR and BDR."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adjacencies: 5 instead of 6 (saved: n²/2 - n = 1)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2 → Database Exchange (R1 to DR-R2):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "R1 and R2 exchange Hello packets, reach 2-WAY state."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "R1 and R2 transition to EXSTART state; master/slave elected."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Master (R2) sends Database Description (DBD) packet with LSA headers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Slave (R1) responds with its own DBD."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Both enter EXCHANGE state, comparing LSA headers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "R1 sees R2 has LSA for prefix 10.0.0.0/16 with seq 0x80000005; R1 has older version."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "R1 sends Link State Request (LSR) for that LSA."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "R2 sends Link State Update (LSU) containing the LSA."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "R1 acknowledges with Link State Ack (LSAck)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Both reach FULL state → databases synchronized."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3 → LSA Flooding Across Areas:"
      }), "\nWhen R1's link to network N goes down:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "R1 generates a new Router LSA (Type 1) with updated link info."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "R1 increments the LSA sequence number."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "R1 floods the LSA to all adjacent neighbors (R2, R3)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "R2 receives LSA, checks it's newer (higher sequence number), updates LSDB."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "R2 runs SPF, computes new routing table."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "R2 re-floods LSA to its neighbors (except R1)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "R3 repeats: update LSDB, run SPF, re-flood."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "R2 (as DR) floods to all DROTHERs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "OSPF Packet Types Detailed:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Fields"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hello"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neighbor discovery and keepalive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Router ID, Hello/Dead intervals, DR/BDR, Neighbor list, Area ID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database Description summary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LSA headers (type, LS ID, advertising router, sequence number)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LSR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requests specific LSAs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LSA type, LS ID, advertising router"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LSU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carries one or more LSAs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of LSAs, LSA data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LSAck"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acknowledges LSA receipt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LSA headers of acknowledged LSAs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "OSPF Neighbor States:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DOWN --> ATTEMPT/INIT --> 2-WAY --> EXSTART --> EXCHANGE --> LOADING --> FULL\n                                  |\n                                  +--> DROTHER (adjacent to DR/BDR only)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-link-state-routing--ospf",
      children: "Edge Cases in Link-State Routing / OSPF"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LSA sequence number wrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequence number reaches max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LSA age reaches MaxAge (3600s), LSA flushed and re-originated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LSA age overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Router restarts, loses sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graceful restart (RFC 3623) or restart signaling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Link flapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interface goes up/down rapidly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OSPF exponential backoff algorithm (RFC 8402)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MTU mismatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two routers have different MTU on link"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBD packets include MTU; OSPF refuses to form adjacency if mismatch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate Router ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two routers claim same ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration validation; router ID must be unique in OSPF domain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partitioned backbone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Area 0 splits into two"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual links reconnect partitioned Area 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stuck in EXSTART"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routers cannot agree on master/slave"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check MTU, authentication, or unicast reachability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LSA storm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many routers update LSAs simultaneously"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MinLSInterval (5s) throttles LSA generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory exhaustion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large LSDB in huge network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Area hierarchy limits LSDB size per router"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-of-dijkstra--link-state-with-why",
      children: "Complexity Analysis of Dijkstra / Link-State with WHY"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dijkstra time (array)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple implementation; each iteration scans V nodes to find minimum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dijkstra time (binary heap)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O((V+E) log V) approx O(E log V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each edge relaxed once (push), each vertex extracted once (pop)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dijkstra time (Fibonacci heap)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E + V log V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decrease-key is O(1) amortized, but high constant factor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V + E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacency list stores all edges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LSP flooding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N * E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each of N routers sends LSP over each of E links once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LSDB size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N * E) worst-case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each router stores N LSPs with E links total"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPF computation frequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On topology change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only when LSA received, not periodic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Why Dijkstra fails with negative edges?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy early commitment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Once a node is visited, its distance is never reconsidered; a later negative edge could offer shorter path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Why O(E log V) is optimal for sparse nets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "log V is small"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E is typically ~2V in sparse networks; E log V approx 2V log V"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Why O(V²) may be faster in dense nets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low constant factor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For dense graphs where E approx V², V² < V² log V; array implementation wins"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages-of-link-state",
      children: "Advantages and Disadvantages of Link-State"
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
            children: "Convergence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast → seconds after topology change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial convergence can be slower (DB exchange)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loop avoidance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPF guarantees loop-free paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transient micro-loops possible during convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event-driven updates only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial full-database exchange can be large"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Area hierarchy supports large networks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU-intensive SPF recalculations in large single areas"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple metrics, equal-cost multipath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex configuration compared to RIP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Troubleshooting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full topology visibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires more knowledge to operate"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "74-path-vector-routing-bgp",
      children: "7.4 Path-Vector Routing (BGP)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-international-shipping-with-customs-forms",
      children: "Real-World Analogy: International Shipping with Customs Forms"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a package travels from New York to Tokyo, each country's postal service appends its stamp to the customs form. The form accumulates the full path: \"USA -> Canada -> Japan.\" This is the AS_PATH in BGP."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Unlike a GPS (Dijkstra) or gossip (Bellman-Ford), shipping routes are determined by ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "business contracts"
      }), ": \"We have a transit agreement with Canada Post\" or \"We peer settlement-free with Japan Post.\" The shipper doesn't choose the technically shortest route → they choose the route that respects business policies, avoids competitors, and doesn't violate agreements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "741-bgp-fundamentals",
      children: "7.4.1 BGP Fundamentals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BGP is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "path-vector"
      }), " protocol that connects the ~100,000 autonomous systems (ASes) that make up the global Internet. Unlike intra-domain protocols, BGP is policy-driven, not metric-driven."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "BGP Session Types:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "eBGP: AS100 ---- AS200    (between different ASes)\n       \\              \\\niBGP:  AS100 ---- AS300  (within same AS → only eBGP-learned routes shared)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps of BGP Operation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Establish TCP connection"
        }), " → BGP peers establish TCP on port 179."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Send OPEN message"
        }), " → Each peer sends capabilities, AS number, hold time, BGP identifier."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exchange initial UPDATEs"
        }), " → Full routing table (all prefixes + attributes) exchanged."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Send KEEPALIVEs"
        }), " → Periodic keepalives (default 60s) maintain the session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Incremental UPDATEs"
        }), " → Only changes are sent (no periodic full table)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Route selection"
        }), " → For each prefix, select the best path using BGP decision process."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Route advertisement"
        }), " → Best paths advertised to other peers per export policy."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "742-bgp-path-attributes--detailed",
      children: "7.4.2 BGP Path Attributes → Detailed"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attribute"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ORIGIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Well-known mandatory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IGP (i), EGP (e), INCOMPLETE (?) → how route entered BGP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AS_PATH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Well-known mandatory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequence of AS numbers the route traverses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NEXT_HOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Well-known mandatory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP address of next-hop router"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MED (MULTI_EXIT_DISC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional non-transitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EBGP->IBGP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suggestion to external peer for preferred entry point (lower better)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOCAL_PREF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Well-known discretionary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IBGP->EBGP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local preference within AS (higher better); not sent to eBGP peers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ATOMIC_AGGREGATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Well-known discretionary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set when routes are aggregated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AGGREGATOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional transitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AS and router that performed aggregation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COMMUNITY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional transitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32-bit tag for policy signaling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ORIGINATOR_ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional non-transitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IBGP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Router ID of route originator (for route reflection)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CLUSTER_LIST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional non-transitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IBGP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List of cluster IDs (for route reflection)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Well-Known Communities:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Community"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NO_EXPORT (0xFFFFFF01)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Do not advertise to any eBGP peer (keep within AS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NO_ADVERTISE (0xFFFFFF02)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Do not advertise to any peer (keep on this router)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NO_EXPORT_SUBCONFED (0xFFFFFF03)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Do not advertise outside local confederation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NOPEER (0xFFFFFF04)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Do not advertise to peers (only customers)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "743-bgp-decision-process--detailed",
      children: "7.4.3 BGP Decision Process → Detailed"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step tiebreaker (most significant first):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Highest LOCAL_PREF"
        }), " → Set by policy. Routes with higher local preference are preferred."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shortest AS_PATH length"
        }), " → Count ASes in AS_PATH (not including AS_CONFED_SEQUENCE)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lowest ORIGIN type"
        }), " → IGP (0) < EGP (1) < INCOMPLETE (2)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lowest MED"
        }), " → Only if the same neighboring AS is the route source."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prefer eBGP over iBGP"
        }), " → eBGP-learned routes preferred."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lowest IGP cost to NEXT_HOP"
        }), " → Closest exit point."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Oldest route"
        }), " → Route received first is preferred (for stability)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lowest neighbor Router ID"
        }), " → Tiebreaker of last resort."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bgp-path-selection-dry-run",
      children: "BGP Path Selection Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topology:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AS100 →→→ AS200 →→→ AS300\n  |                     |\n  +→→→ AS400 →→→ AS500→+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Route to prefix 10.1.0.0/16 (originated in AS300):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attribute"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Path 1 (via AS200)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Path 2 (via AS400->AS500)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AS_PATH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200, 300"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "400, 500, 300"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOCAL_PREF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "150"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Origin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IGP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IGP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NEXT_HOP IGP cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision at AS100:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Path 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Path 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Winner"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LOCAL_PREF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "150"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AS_PATH length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ (already decided)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Result: Path 2 wins despite longer AS_PATH because LOCAL_PREF is higher."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Now consider both with LOCAL_PREF=100:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Path 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Path 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Winner"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LOCAL_PREF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tie"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AS_PATH length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Origin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ (already decided)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Result: Path 1 wins with shorter AS_PATH."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "as-path-prepending-analysis",
      children: "AS Path Prepending Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AS Path prepending is a traffic engineering technique where an AS artificially lengthens its AS_PATH to make a path less preferred."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example: Multi-homed network (AS65000) connected to two ISPs:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ISP-A (AS100) ====== AS65000 ====== ISP-B (AS200)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without prepending, AS65000 advertises the same prefix to both ISPs:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "To ISP-A: AS_PATH = 65000"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "To ISP-B: AS_PATH = 65000\nBoth ISPs see equal-length paths -> roughly equal inbound traffic."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "To shift traffic away from ISP-A:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AS65000 prepends its AS number 3 times when advertising to ISP-A:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "To ISP-A: AS_PATH = 65000, 65000, 65000, 65000 (length=4)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "To ISP-B: AS_PATH = 65000 (length=1)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Effect on inbound traffic from ISP-A's perspective:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ISP-A sees path via ISP-B: AS_PATH = 100, 65000 (length=2)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ISP-A sees direct path: AS_PATH = 65000, 65000, 65000, 65000 (length=4)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ISP-A prefers the shorter path -> traffic enters via ISP-B."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prepending impact on BGP decision:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inbound via ISP-A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inbound via ISP-B"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No prepending"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1x prepend (65000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More selective"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preferred"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2x prepend (65000,65000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backup only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3x prepend (65000,65000,65000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Emergency only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dominant"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-as-path-prepending-analysis",
      children: "Python: AS Path Prepending Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BGPRoute:\n    def __init__(self, prefix, as_path, local_pref=100, med=0, origin='IGP'):\n        self.prefix = prefix\n        self.as_path = as_path\n        self.local_pref = local_pref\n        self.med = med\n        self.origin = origin\n\n    def as_path_length(self):\n        return len([a for a in self.as_path if isinstance(a, int)])\n\n    def copy_with_prepend(self, asn, times=1):\n        new_path = self.as_path[:]\n        for _ in range(times):\n            new_path.insert(0, asn)\n        return BGPRoute(self.prefix, new_path, self.local_pref, self.med, self.origin)\n\ndef bgp_decision_process(routes):\n    print(f\"{'Step':<8} {'Criterion':<20} {'Route details':<50}\")\n    print(\"-\" * 78)\n    candidates = list(routes)\n    steps = [\n        (\"LOCAL_PREF\", lambda r: -r.local_pref),\n        (\"AS_PATH len\", lambda r: r.as_path_length()),\n        (\"ORIGIN\", lambda r: {'IGP': 0, 'EGP': 1, 'INCOMPLETE': 2}[r.origin]),\n        (\"MED\", lambda r: r.med),\n    ]\n\n    for step_name, key_fn in steps:\n        if len(candidates) == 1:\n            break\n        candidates.sort(key=key_fn)\n        best_score = key_fn(candidates[0])\n        candidates = [r for r in candidates if key_fn(r) == best_score]\n        print(f\"{'Step result':<8} {step_name:<20} {len(candidates)} candidate(s) remain\")\n\n    winner = candidates[0]\n    print(f\"{'WINNER':<8} {'':<20} {winner.as_path} (length={winner.as_path_length()})\")\n    return winner\n\nprint(\"=== BGP Path Selection with AS_PATH Prepending ===\\n\")\n\nprint(\"Scenario 1: No prepending (equal paths)\")\nwinner = bgp_decision_process([\n    BGPRoute(\"10.1.0.0/16\", [100, 65000], local_pref=100),\n    BGPRoute(\"10.1.0.0/16\", [200, 65000], local_pref=100),\n])\nprint()\n\nprint(\"Scenario 2: Prepending on ISP-A path\")\nwinner = bgp_decision_process([\n    BGPRoute(\"10.1.0.0/16\", [100, 65000, 65000, 65000, 65000], local_pref=100),\n    BGPRoute(\"10.1.0.0/16\", [200, 65000], local_pref=100),\n])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bgp-pseudocode",
      children: "BGP Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION BgpDecisionProcess(routes_for_prefix):\n    best_route = NULL\n    FOR EACH route in routes_for_prefix:\n        IF route.as_path contains my_own_as:\n            SKIP\n        route.local_pref = apply_import_policy(route)\n        IF route.local_pref == -1:\n            SKIP\n        IF best_route == NULL:\n            best_route = route\n            CONTINUE\n        IF route.local_pref > best_route.local_pref:\n            best_route = route\n        ELSE IF route.local_pref == best_route.local_pref:\n            IF len(route.as_path) < len(best_route.as_path):\n                best_route = route\n            ELSE IF len(route.as_path) == len(best_route.as_path):\n                IF route.origin < best_route.origin:\n                    best_route = route\n                ELSE IF route.origin == best_route.origin:\n                    IF route.med < best_route.med:\n                        best_route = route\n                    ELSE IF route.med == best_route.med:\n                        IF route.type == EBGP AND best_route.type == IBGP:\n                            best_route = route\n                        ELSE IF route.type == best_route.type:\n                            IF route.igp_cost_to_next_hop < best_route.igp_cost_to_next_hop:\n                                best_route = route\n                            ELSE IF equal:\n                                IF route.received_time < best_route.received_time:\n                                    best_route = route\n                                ELSE IF equal:\n                                    IF route.neighbor_router_id < best_route.neighbor_router_id:\n                                        best_route = route\n    RETURN best_route\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-bgpsimplesim",
      children: "TypeScript Implementation: BGPSimpleSim"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * BGPSimpleSim — simulates BGP path selection with\n * LOCAL_PREF, AS_PATH, MED, Origin, eBGP/iBGP, and IGP cost.\n */\ninterface BGPRouteOptions {\n  prefix: string;\n  asPath: number[];\n  localPref?: number;\n  med?: number;\n  origin?: 'IGP' | 'EGP' | 'INCOMPLETE';\n  igpCost?: number;\n  receivedTime?: number;\n  neighborRouterId?: number;\n  isEBGP?: boolean;\n}\n\nclass BGPRoute {\n  readonly prefix: string;\n  readonly asPath: number[];\n  readonly localPref: number;\n  readonly med: number;\n  readonly origin: 'IGP' | 'EGP' | 'INCOMPLETE';\n  readonly igpCost: number;\n  readonly receivedTime: number;\n  readonly neighborRouterId: number;\n  readonly isEBGP: boolean;\n\n  constructor(opts: BGPRouteOptions) {\n    this.prefix = opts.prefix;\n    this.asPath = opts.asPath;\n    this.localPref = opts.localPref ?? 100;\n    this.med = opts.med ?? 0;\n    this.origin = opts.origin ?? 'IGP';\n    this.igpCost = opts.igpCost ?? 0;\n    this.receivedTime = opts.receivedTime ?? 0;\n    this.neighborRouterId = opts.neighborRouterId ?? 0;\n    this.isEBGP = opts.isEBGP ?? true;\n  }\n\n  get asPathLength(): number {\n    return this.asPath.length;\n  }\n\n  get originScore(): number {\n    return this.origin === 'IGP' ? 0 : this.origin === 'EGP' ? 1 : 2;\n  }\n\n  toString(): string {\n    return `AS_PATH=[${this.asPath.join(' ')}] LP=${this.localPref} MED=${this.med} Origin=${this.origin} IGP=${this.igpCost} ${this.isEBGP ? 'eBGP' : 'iBGP'}`;\n  }\n}\n\nclass BGPSimpleSim {\n  private asNumber: number;\n  private routes: Map<string, BGPRoute[]> = new Map();\n  private bestRoutes: Map<string, BGPRoute> = new Map();\n\n  constructor(asNumber: number) {\n    this.asNumber = asNumber;\n  }\n\n  loadRoutes(routes: BGPRoute[]): void {\n    for (const route of routes) {\n      if (!this.routes.has(route.prefix)) {\n        this.routes.set(route.prefix, []);\n      }\n      this.routes.get(route.prefix)!.push(route);\n    }\n  }\n\n  /** Run the BGP decision process for a given prefix */\n  selectBest(prefix: string): BGPRoute | null {\n    const candidates = this.routes.get(prefix);\n    if (!candidates || candidates.length === 0) return null;\n\n    console.log(`\\n  BGP Decision for ${prefix} (${candidates.length} candidates):`);\n\n    // Step 0: Filter routes where own AS appears in AS_PATH\n    let remaining = candidates.filter(r => !r.asPath.includes(this.asNumber));\n    console.log(`  After AS_PATH loop check: ${remaining.length} candidates`);\n\n    if (remaining.length === 0) return null;\n\n    // Step-by-step BGP decision process\n    const steps: Array<{\n      name: string;\n      compare: (a: BGPRoute, b: BGPRoute) => number; // negative = a wins\n    }> = [\n      { name: 'Highest LOCAL_PREF', compare: (a, b) => b.localPref - a.localPref },\n      { name: 'Shortest AS_PATH', compare: (a, b) => a.asPathLength - b.asPathLength },\n      { name: 'Lowest Origin', compare: (a, b) => a.originScore - b.originScore },\n      { name: 'Lowest MED', compare: (a, b) => a.med - b.med },\n      { name: 'eBGP over iBGP', compare: (a, b) => (b.isEBGP ? 1 : 0) - (a.isEBGP ? 1 : 0) },\n      { name: 'Lowest IGP cost', compare: (a, b) => a.igpCost - b.igpCost },\n      { name: 'Lowest Router ID', compare: (a, b) => a.neighborRouterId - b.neighborRouterId },\n    ];\n\n    for (const step of steps) {\n      if (remaining.length === 1) break;\n      remaining.sort(step.compare);\n      const bestScore = remaining[0];\n      remaining = remaining.filter(r => step.compare(r, bestScore) === 0);\n      console.log(`  Step \"${step.name}\": ${remaining.length} candidate(s) remain`);\n    }\n\n    const winner = remaining[0];\n    this.bestRoutes.set(prefix, winner);\n    console.log(`  WINNER: ${winner}`);\n    return winner;\n  }\n\n  printTable(): void {\n    console.log(`\\nBGP Table at AS${this.asNumber}:`);\n    for (const [prefix, route] of this.bestRoutes) {\n      console.log(`  ${prefix}: ${route}`);\n    }\n  }\n}\n\n// Usage example\nconst bgp = new BGPSimpleSim(65000);\nbgp.loadRoutes([\n  new BGPRoute({ prefix: '10.1.0.0/16', asPath: [100, 65000], localPref: 100, igpCost: 5, neighborRouterId: 1 }),\n  new BGPRoute({ prefix: '10.1.0.0/16', asPath: [200, 300, 65000], localPref: 150, igpCost: 10, neighborRouterId: 2 }),\n  new BGPRoute({ prefix: '10.1.0.0/16', asPath: [400, 65000, 65000, 65000], localPref: 100, igpCost: 2, neighborRouterId: 3 }),\n]);\nconsole.log(\"=== BGP Path Selection ===\");\nbgp.selectBest('10.1.0.0/16');\nbgp.printTable();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== BGP Path Selection ===\n\n  BGP Decision for 10.1.0.0/16 (3 candidates):\n  After AS_PATH loop check: 3 candidates\n  Step \"Highest LOCAL_PREF\": 1 candidate(s) remain\n  WINNER: AS_PATH=[200 300 65000] LP=150 MED=0 Origin=IGP IGP=10 eBGP\n\nBGP Table at AS65000:\n  10.1.0.0/16: AS_PATH=[200 300 65000] LP=150 MED=0 Origin=IGP IGP=10 eBGP\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-bgp-path-selection",
      children: "C++ Implementation: BGP Path Selection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nstruct BgpRoute {\n    std::string prefix;\n    std::vector<int> as_path;\n    int local_pref;\n    int med;\n    std::string origin;\n    int igp_cost;\n    long received_time;\n    int neighbor_router_id;\n    bool is_ebgp;\n\n    BgpRoute(std::string p, std::vector<int> path, int lp = 100,\n             int m = 0, std::string o = \"IGP\", int igp = 0,\n             long time = 0, int nid = 0, bool ebgp = true)\n        : prefix(p), as_path(std::move(path)), local_pref(lp), med(m),\n          origin(std::move(o)), igp_cost(igp), received_time(time),\n          neighbor_router_id(nid), is_ebgp(ebgp) {}\n\n    int originScore() const {\n        if (origin == \"IGP\") return 0;\n        if (origin == \"EGP\") return 1;\n        return 2;\n    }\n\n    int asPathLength() const { return as_path.size(); }\n\n    void print() const {\n        std::cout << \"  AS_PATH=[\";\n        for (size_t i = 0; i < as_path.size(); ++i) {\n            if (i > 0) std::cout << \" \";\n            std::cout << as_path[i];\n        }\n        std::cout << \"] LP=\" << local_pref << \" MED=\" << med\n                  << \" Origin=\" << origin << \" IGP=\" << igp_cost\n                  << \" \" << (is_ebgp ? \"eBGP\" : \"iBGP\") << \"\\n\";\n    }\n};\n\nclass BgpSpeaker {\npublic:\n    static BgpRoute selectBestPath(const std::vector<BgpRoute>& routes) {\n        if (routes.empty()) throw std::runtime_error(\"No routes\");\n        auto best = routes[0];\n        std::cout << \"=== BGP Best Path Selection ===\\n\";\n        std::cout << \"Prefix: \" << best.prefix << \"\\n\\n\";\n\n        for (size_t i = 1; i < routes.size(); ++i) {\n            const auto& c = routes[i];\n            std::cout << \"Comparing:\\n\";\n            best.print();\n            c.print();\n            std::cout << \"Result: \";\n\n            if (c.local_pref > best.local_pref) {\n                best = c;\n                std::cout << \"Path \" << i << \" wins (higher LOCAL_PREF)\\n\";\n            } else if (c.asPathLength() < best.asPathLength()) {\n                best = c;\n                std::cout << \"Path \" << i << \" wins (shorter AS_PATH)\\n\";\n            } else if (c.originScore() < best.originScore()) {\n                best = c;\n                std::cout << \"Path \" << i << \" wins (lower origin)\\n\";\n            } else if (c.med < best.med) {\n                best = c;\n                std::cout << \"Path \" << i << \" wins (lower MED)\\n\";\n            } else if (c.is_ebgp && !best.is_ebgp) {\n                best = c;\n                std::cout << \"Path \" << i << \" wins (eBGP preferred)\\n\";\n            } else if (c.igp_cost < best.igp_cost) {\n                best = c;\n                std::cout << \"Path \" << i << \" wins (lower IGP cost)\\n\";\n            } else if (c.received_time < best.received_time) {\n                best = c;\n                std::cout << \"Path \" << i << \" wins (older/stable)\\n\";\n            } else if (c.neighbor_router_id < best.neighbor_router_id) {\n                best = c;\n                std::cout << \"Path \" << i << \" wins (lower Router ID)\\n\";\n            } else {\n                std::cout << \"Tie → keeping current best\\n\";\n            }\n            std::cout << \"\\n\";\n        }\n        std::cout << \"BEST ROUTE: \";\n        best.print();\n        return best;\n    }\n};\n\nint main() {\n    std::vector<BgpRoute> routes = {\n        BgpRoute(\"10.1.0.0/16\", {100, 65000}, 100, 0, \"IGP\", 5),\n        BgpRoute(\"10.1.0.0/16\", {200, 300, 65000}, 150, 0, \"IGP\", 10),\n        BgpRoute(\"10.1.0.0/16\", {400, 500, 600, 65000}, 100, 0, \"EGP\", 2),\n    };\n    BgpSpeaker::selectBestPath(routes);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-bgp-route-selection",
      children: "Python Implementation: BGP Route Selection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\nfrom typing import List, Optional\n\n@dataclass\nclass BgpRoute:\n    prefix: str\n    as_path: List[int]\n    local_pref: int = 100\n    med: int = 0\n    origin: str = 'IGP'\n    next_hop_igp_cost: int = 0\n    received_time: int = 0\n    neighbor_router_id: int = 0\n    is_ebgp: bool = True\n\n    @property\n    def origin_score(self) -> int:\n        return {'IGP': 0, 'EGP': 1, 'INCOMPLETE': 2}[self.origin]\n\n    @property\n    def as_path_len(self) -> int:\n        return len([a for a in self.as_path if isinstance(a, int)])\n\n    def __str__(self) -> str:\n        path_str = ' '.join(map(str, self.as_path))\n        type_str = 'eBGP' if self.is_ebgp else 'iBGP'\n        return (f\"  AS_PATH=[{path_str}] LP={self.local_pref} MED={self.med} \"\n                f\"Origin={self.origin} IGP_cost={self.next_hop_igp_cost} {type_str}\")\n\nclass BGPSpeaker:\n    def __init__(self, as_number: int):\n        self.as_number = as_number\n        self.routing_table: dict = {}\n        self.rib: dict = {}\n\n    def load_routes(self, routes: List[BgpRoute]):\n        for route in routes:\n            if route.prefix not in self.rib:\n                self.rib[route.prefix] = []\n            self.rib[route.prefix].append(route)\n\n    def select_best(self, prefix: str) -> Optional[BgpRoute]:\n        if prefix not in self.rib or not self.rib[prefix]:\n            return None\n        candidates = self.rib[prefix][:]\n        print(f\"\\n  BGP Decision for {prefix} ({len(candidates)} candidates):\")\n        candidates = [r for r in candidates if self.as_number not in r.as_path]\n        print(f\"  After loop check: {len(candidates)} candidates\")\n        if not candidates:\n            return None\n\n        best = candidates[0]\n        for route in candidates[1:]:\n            if route.local_pref > best.local_pref:\n                best = route; continue\n            if route.as_path_len < best.as_path_len:\n                best = route; continue\n            if route.origin_score < best.origin_score:\n                best = route; continue\n            if route.med < best.med:\n                best = route; continue\n            if route.is_ebgp and not best.is_ebgp:\n                best = route; continue\n            if route.next_hop_igp_cost < best.next_hop_igp_cost:\n                best = route; continue\n            if route.received_time < best.received_time:\n                best = route; continue\n            if route.neighbor_router_id < best.neighbor_router_id:\n                best = route; continue\n\n        self.routing_table[prefix] = best\n        print(f\"  WINNER: {best}\")\n        return best\n\n    def print_table(self):\n        print(f\"\\nBGP Table at AS{self.as_number}:\")\n        for prefix, route in self.routing_table.items():\n            print(f\"  {prefix}: {route}\")\n\nprint(\"=== BGP Path Selection Simulation ===\\n\")\nas65000 = BGPSpeaker(65000)\nroutes = [\n    BgpRoute(\"10.1.0.0/16\", [100, 65000], local_pref=100,\n             next_hop_igp_cost=5, neighbor_router_id=1),\n    BgpRoute(\"10.1.0.0/16\", [200, 300, 65000], local_pref=150,\n             next_hop_igp_cost=10, neighbor_router_id=2),\n    BgpRoute(\"10.1.0.0/16\", [400, 65000, 65000, 65000], local_pref=100,\n             next_hop_igp_cost=2, neighbor_router_id=3),\n]\nas65000.load_routes(routes)\nas65000.select_best(\"10.1.0.0/16\")\nas65000.print_table()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "744-ibgp-vs-ebgp",
      children: "7.4.4 iBGP vs eBGP"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "eBGP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "iBGP"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Peering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Between different ASes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Within same AS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AS_PATH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AS number prepended"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AS number NOT prepended"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Admin distance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Next-hop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually changed to eBGP peer IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preserved from eBGP (next-hop-self optional)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loop prevention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AS_PATH (if see own AS, reject)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split horizon (do not advertise to iBGP peer what was learned from iBGP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full mesh required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (or use route reflectors/confederations)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TTL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually 1 (ebgp-multihop for multi-hop)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decremented normally"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-bgp",
      children: "Edge Cases in BGP"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route Flap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route repeatedly withdrawn and re-advertised"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU exhaustion, global routing instability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route Damping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ROUTE_FLAP_DAMPING penalizes flapping routes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suppressed routes may not converge to stable path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AS_PATH loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Router sees own AS in received route"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route rejected; prevents inter-AS loops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Routing table growth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1M prefixes in global BGP table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires hardware TCAM, memory management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BGP session reset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP session drops, all routes withdrawn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Massive UPDATE bursts on reconnection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NEXT_HOP unreachable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route selected but next hop is inaccessible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blackhole routing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Slow peer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Peer takes long to process UPDATEs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hold timer expiry, session reset"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Software bugs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BGP implementation crashes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global routing disruption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Path MTU issues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BGP TCP sessions over restricted MTU links"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session flapping, incomplete table exchange"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LocalPref misconfiguration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inconsistent LOCAL_PREF across AS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic engineering failures, suboptimal routing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "75-hierarchical-routing",
      children: "7.5 Hierarchical Routing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-the-postal-system-hierarchy",
      children: "Real-World Analogy: The Postal System Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The postal system uses a hierarchy: local post office (neighborhood) -> city sorting center -> regional hub -> national hub -> international exchange -> (other country's) national hub -> regional hub -> city sorting center -> local post office."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each level only needs to know how to reach the next level up, not every address in the world. This is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hierarchical routing"
      }), " → the Internet's AS hierarchy mirrors this structure exactly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-two-level-hierarchy",
      children: "The Two-Level Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Internet routing system has exactly two levels:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intra-domain (IGP):"
        }), " Routing within an AS using OSPF, IS-IS, EIGRP, or RIP."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inter-domain (EGP):"
        }), " Routing between ASes using BGP."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Hierarchy Matters for Scalability:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without hierarchy, every router would need to know the topology of the entire Internet → an impossible ~100,000 ASes and millions of routes. With hierarchy:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each AS internal router knows only its own AS topology."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Border routers learn external routes via BGP but represent each AS as a single node."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Route aggregation (CIDR) collapses many prefixes into one advertisement."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Administrative domains maintain autonomy over their routing policies."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "internet-hierarchy-summary",
      children: "Internet Hierarchy Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[Global Tier-1 ISPs] → fully meshed, no upstream\n    |\n[Tier-2 ISPs] → have upstream providers, may peer\n    |\n[Tier-3 / Customer ASes] → single- or multi-homed\n    |\n[Enterprise Networks] → single or dual ISP connections\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-of-hierarchical-routing",
      children: "Advantages of Hierarchical Routing"
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
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each AS hides its internal topology from the rest of the Internet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Administrative autonomy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each AS chooses its own routing policy and IGP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Economic relationships"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routing decisions reflect business agreements not just metrics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fault isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A problem in one AS does not propagate globally"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route aggregation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CIDR allows summarizing many prefixes into one"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Policy flexibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each AS can implement complex import/export policies"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "76-multicast-routing",
      children: "7.6 Multicast Routing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-the-conference-call",
      children: "Real-World Analogy: The Conference Call"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In a conference call, one person speaks and many listen. The phone company's equipment duplicates the speaker's signal only at points where the signal path branches to serve multiple listeners. This is vastly more efficient than the speaker calling each participant individually (unicast), or every participant calling every other (broadcast)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multicast-fundamentals",
      children: "Multicast Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multicast delivers packets from one source to a group of interested receivers, forming a distribution tree."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "IP Multicast Addressing:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Address Range"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "224.0.0.0/24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Link-local (routing protocols, not forwarded)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "224.0.1.0/24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internet-wide control protocols"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "224.0.2.0 - 238.255.255.255"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global multicast (SSM range: 232/8)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "239.0.0.0/8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Administratively scoped (private)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multicast-distribution-trees",
      children: "Multicast Distribution Trees"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two types of trees:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source-specific tree (shortest path tree):"
        }), " Rooted at the source. Optimal path from source to each receiver but requires per-source state. Notation: (S, G) where S is source, G is group."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shared tree:"
        }), " Rooted at a rendezvous point (RP). All sources send to RP, which distributes to receivers. Less optimal but less state. Notation: (*, G) where * is any source, G is group."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pim-operation-modes",
      children: "PIM Operation Modes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PIM Dense Mode (PIM-DM):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Source sends multicast packet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Router floods to all PIM-enabled interfaces."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Routers with no interested receivers send Prune messages upstream."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Periodically re-floods to discover new receivers."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PIM Sparse Mode (PIM-SM):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Receivers send IGMP Join toward the RP."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sources send Register to RP (unicast encapsulated)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RP forwards to receivers down the shared tree."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Last-hop routers may switch to source-specific tree (S,G) for optimal path."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "igmp-internet-group-management-protocol",
      children: "IGMP (Internet Group Management Protocol)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IGMPv3 (RFC 3376) is the current standard. Host-to-router protocol for IPv4 multicast group management."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "IGMP Message Types:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Membership Query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Router asks hosts about group membership"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Membership Report"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host reports group membership"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Leave Group"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host leaves a group"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-of-multicast-forwarding",
      children: "Numbered Steps of Multicast Forwarding"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Host joins group"
        }), " → Host sends IGMP Report for group G toward the router."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PIM Join"
        }), " → Router sends PIM Join (*, G) toward the RP."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RP receives Join"
        }), " → RP adds the interface to its outgoing interface list (OIL)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source sends traffic"
        }), " → Source's designated router (DR) encapsulates data in Register messages to RP."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RP decapsulates"
        }), " → RP forwards data down the shared tree to receivers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "S,G switchover"
        }), " → Last-hop router may send (S,G) Join toward source for optimal path."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prune"
        }), " → When no receivers remain, router sends Prune upstream."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multicast-routing-protocols-compared",
      children: "Multicast Routing Protocols Compared"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tree Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DVMRP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distance-Vector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source-based (flood-and-prune)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy, MBONE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PIM-DM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Independent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source-based (flood-and-prune)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dense receiver groups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PIM-SM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Independent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared + Source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sparse receiver groups, WAN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MOSPF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Link-State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OSPF networks with multicast"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MSDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inter-domain RP discovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connecting PIM-SM domains"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "77-broadcast-routing",
      children: "7.7 Broadcast Routing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-the-town-crier",
      children: "Real-World Analogy: The Town Crier"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The town crier stands in the square and shouts so everyone can hear. Every house receives the message simultaneously, regardless of whether they need it. This is broadcast → send to everyone, whether interested or not."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "broadcast-routing-approaches",
      children: "Broadcast Routing Approaches"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Controlled Flooding:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sequence-number-controlled flooding:"
        }), " Each router stores the highest sequence number seen for each source. Duplicate packets are dropped."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reverse Path Forwarding (RPF):"
        }), " When a router receives a broadcast packet, it only forwards the packet out other interfaces IF the packet arrived on the interface that the router would use to reach the source. If it arrived on any other interface, it's a duplicate and is dropped."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Spanning Tree Broadcast:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Routers compute a spanning tree covering all nodes (e.g., using 802.1D)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Broadcast packets are forwarded only along tree links, eliminating loops."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Redundant links remain available for unicast traffic but disabled for broadcast."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rpf-check--detailed",
      children: "RPF Check → Detailed"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RPF is fundamental: a router receives a broadcast packet from source S on interface I. It checks its unicast routing table: \"Would I forward to S via interface I?\" If yes, the packet arrived on the correct interface -> forward to all other interfaces. If no -> drop (likely a duplicate)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RPF Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    S -- R1 -- R2 -- R3\n          \\         /\n           \\       /\n            R4 -- R5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When S sends a broadcast via R1:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "R1 receives on interface facing S -> correct -> forward to R2 and R4."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "R2 receives from R1 -> correct -> forward to R3."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "R4 receives from R1 -> correct -> forward to R5."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "R5 receives from R4 -> correct -> forward to R3. If R3 also receives from R2 and forwards to R5, R5 drops the duplicate via RPF."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "broadcast-vs-multicast-vs-unicast",
      children: "Broadcast vs Multicast vs Unicast"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Unicast"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Broadcast"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Multicast"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Destination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One host"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All hosts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subscribed hosts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) for n receivers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) but wastes bandwidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(tree size)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Address type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unicast IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcast IP (e.g., 255.255.255.255)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class D / FF00::/8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subnet-limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configurable (TTL, scope)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All IP devices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All IP devices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires IGMP / MLD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web, email, file transfer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DHCP, ARP (L2 broadcast)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPTV, video conferencing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Router state per group"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (unicast table only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(S,G) or (*,G) state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wastes bandwidth for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n copies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very wasteful for n>1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "broadcast-routing-algorithms-summary",
      children: "Broadcast Routing Algorithms Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mechanism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loop Prevention"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Overhead"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flooding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send to all interfaces except incoming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequence number per source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (duplicates)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Controlled flooding (SNC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flood with source sequence number tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequence number check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (per-source state)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse Path Forwarding (RPF)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward only if arrived on shortest path to source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RPF check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (unicast route lookup)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spanning Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward along ST edges only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ST algorithm ensures tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (ST computation)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "78-anycast-routing",
      children: "7.8 Anycast Routing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-the-nearest-pizza-delivery",
      children: "Real-World Analogy: The Nearest Pizza Delivery"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You call a pizza chain's phone number. The call is routed to the nearest store (by geography), not to a specific location. If that store is busy, the call may go to the next nearest. You don't care which store delivers → you care about getting pizza fast. This is anycast: send to the nearest member of a group."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bgp-anycast-in-practice",
      children: "BGP Anycast in Practice"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Anycast in the Internet is implemented via BGP. Multiple routers in different locations advertise the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "same IP prefix"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DNS root servers (e.g., 198.41.0.4 for a.root-servers.net → 200+ instances worldwide)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CDN edge servers (Cloudflare, Akamai, Fastly)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Google's 8.8.8.8 (2000+ instances)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cloudflare's 1.1.1.1"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How Anycast Works:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Organization obtains IP prefix (e.g., 203.0.113.0/24)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Organization deploys servers in multiple locations (New York, London, Tokyo)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each location advertises 203.0.113.0/24 via BGP to its upstream provider."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BGP's decision process causes each router in the Internet to select the \"closest\" (by AS_PATH length or IGP cost to NEXT_HOP) advertisement."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Traffic from Europe -> London instance. Traffic from US -> New York instance."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If London instance fails, BGP withdraws the route, and traffic shifts to the next-closest location."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "anycast-benefits-and-challenges",
      children: "Anycast Benefits and Challenges"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lower latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic reaches the nearest instance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Load distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Different regions map to different instances"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fault tolerance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instance failure causes traffic to shift"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DDoS absorption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attack traffic is distributed across all instances"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simplified DNS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single IP address serves any location"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Challenges:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Challenge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Session persistence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Different packets may reach different servers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use TCP anycast with careful timeout tuning, or use anycast only for UDP (DNS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Routing instability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BGP changes shift traffic mid-session"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tune BGP timers, use IP anycast only for stateless protocols"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Uneven load distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AS_PATH prepending is coarse-grained"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use BGP communities, traffic engineering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hot-potato routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Egress vs ingress path may differ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Align anycast advertisements with transit agreements"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "79-comparison-dv-vs-ls-vs-pv",
      children: "7.9 Comparison: DV vs LS vs PV"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Distance-Vector (RIP)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Link-State (OSPF/IS-IS)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Path-Vector (BGP)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Knowledge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neighbor distances only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete network topology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AS-level paths"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bellman-Ford"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dijkstra (SPF)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decision process (policy-based)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed (neighbor updates)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized per router (SPF)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed (path attributes + policy)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Convergence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (minutes, count-to-infinity)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (seconds)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow to very slow (policy-dependent)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loop prevention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split horizon + infinity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPF guarantees loop-free topology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AS_PATH attribute"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single (hop count)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single (cost)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple attributes (policy > metric)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Update type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Periodic full table (30s in RIP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event-driven LSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incremental UPDATE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (periodic full dumps)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (event-driven)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (initial full, then incremental)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (SPF calculations)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (policy processing)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (neighbors only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (full LSDB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (full BGP table: ~1M prefixes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small (<15 hops)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large (areas for hierarchy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global Internet (~100K ASes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECMP, unequal-cost paths (Cisco)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AS_PATH prepend, communities, MED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Admin autonomy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Within AS only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full policy autonomy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small office/lab"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise, DC, SP core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internet, multi-homing, CDN"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "710-comparison-rip-vs-ospf-vs-bgp",
      children: "7.10 Comparison: RIP vs OSPF vs BGP"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RIP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OSPF"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BGP"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RFC 1058/2453"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RFC 2328"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RFC 4271"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distance-Vector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Link-State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path-Vector"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hop count (15 max)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost (10^8/bandwidth)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path attributes (multidimensional)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Convergence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (up to 180s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (1-10s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable (seconds to minutes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loop prevention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split horizon, poison reverse, hold-down"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPF algorithm guarantee"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AS_PATH attribute"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Update mechanism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Periodic (30s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Triggered (event-driven)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incremental (triggered only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full table dump"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every 30 seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On adjacency formation only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On session establishment only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plaintext/MD5 (v2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5, SHA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP MD5, TCP-AO"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VLSM/CIDR support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (v1), Yes (v2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route tagging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (v1), Yes (v2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (external routes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (communities)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multipath support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (ECMP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (multipath feature)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 15 hops, < 500 routes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thousands of routers (with areas)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100K ASes, ~1M prefixes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very simple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Administrative distance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "110"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 (eBGP) / 200 (iBGP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP (port 520)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP (protocol 89)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP (port 179)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Primary use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tiny networks, labs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise/SP interior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internet inter-domain"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "711-interview-corner",
      children: "7.11 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-why-does-rip-have-a-maximum-hop-count-of-15",
      children: "Q1: Why does RIP have a maximum hop count of 15?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RIP uses 16 as \"infinity\" → a value that is unreachable. The 15-hop limit prevents count-to-infinity from taking too long. With each iteration incrementing by 1, reaching 16 from a valid path takes at most 16 iterations. A larger infinity (e.g., OSPF's theoretical infinity is 65,535) would cause proportionally longer count-to-infinity convergence. The 15-hop limit means RIP networks cannot exceed 15 routers in diameter → this is acceptable for small networks."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-how-does-ospf-achieve-faster-convergence-than-rip",
      children: "Q2: How does OSPF achieve faster convergence than RIP?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Three architectural differences:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Event-driven updates"
        }), " → OSPF sends LSAs only when topology changes, not periodically. No waiting for the 30-second timer."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Global knowledge"
        }), " → Each router computes paths independently from the full LSDB. There is no iterative propagation delay."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LSA flooding"
        }), " → A new LSA reaches all routers in O(N) time (chain of E flood events), vs DV's O(diameter * iterations). In practice, OSPF converges in 1-10 seconds vs RIP's 30-180 seconds."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-what-is-the-purpose-of-ospf-areas",
      children: "Q3: What is the purpose of OSPF areas?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Areas serve two main purposes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reduce LSA flooding scope"
        }), " → A link change in Area 1 does not trigger SPF recalculation in Area 2. Only ABRs learn routes between areas via summary LSAs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reduce LSDB size"
        }), " → An internal router in Area 1 stores only Area 1's topology. Without areas, every router stores the entire OSPF domain topology."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-how-does-bgp-policy-differ-from-igp-metrics",
      children: "Q4: How does BGP policy differ from IGP metrics?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IGPs optimize a single numerical metric (hop count, cost). BGP selects routes based on business policy first, path characteristics second. An ISP may prefer a path with longer AS_PATH because a customer pays for transit on that path. Policy in BGP is expressed through:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LOCAL_PREF (set per neighbor, prefix, or AS_PATH)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AS_PATH prepending (make a path look longer)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MED (suggest ingress preference to neighboring AS)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Communities (signal policy between routers in different ASes)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-explain-the-difference-between-ibgp-and-ebgp",
      children: "Q5: Explain the difference between iBGP and eBGP."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "eBGP runs between routers in different ASes. It prepends the local AS number to AS_PATH for loop detection. The administrative distance is 20. The TTL is typically set to 1 (directly connected peers)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "iBGP runs between routers in the same AS. It does NOT prepend the AS number (so it must be fully meshed to prevent loops). The administrative distance is 200 (less preferred than eBGP). iBGP preserves the NEXT_HOP attribute from eBGP (next-hop-self is a common workaround for IGP reachability)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-causes-bgp-convergence-to-be-slow",
      children: "Q6: What causes BGP convergence to be slow?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MRAI (Minimum Route Advertisement Interval)"
        }), " → eBGP: 30s, iBGP: 15s per prefix. This rate-limits updates to reduce churn."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Route flap damping"
        }), " → Suppressed routes are not re-examined until the penalty decays."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Policy processing"
        }), " → Inbound/outbound policies involve complex attribute manipulation and filtering."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TCP backoff"
        }), " → BGP relies on TCP; TCP's exponential backoff after packet loss can delay session establishment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Route propagation delay"
        }), " → Updates must propagate through the AS graph; each BGP speaker must process, select, and re-advertise."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-what-is-the-bgp-convergence-time-in-the-real-internet",
      children: "Q7: What is the BGP convergence time in the real Internet?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Under normal conditions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Local convergence within an AS: < 1 second (OSPF detects, BGP processes)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inter-AS convergence: 30 seconds to several minutes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Global convergence after major outage: 5-15 minutes.\nThe 2008 YouTube/Pakistan hijack took approximately 2 hours to fully recover globally."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-how-does-anycast-routing-handle-session-persistence",
      children: "Q8: How does anycast routing handle session persistence?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Anycast does NOT guarantee session persistence. Different packets in the same TCP flow may reach different servers. Solutions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use IP anycast only for stateless protocols (DNS, NTP, HTTP redirect)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use DNS-based load balancing (different names resolve to different anycast addresses per geography)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain shared state in a backend database, so any anycast instance can serve any session."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use TCP anycast with short timeout values and careful BGP tuning."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-what-happens-when-a-bgp-route-is-withdrawn",
      children: "Q9: What happens when a BGP route is withdrawn?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a BGP speaker receives a WITHDRAWN route:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The route is removed from the Loc-RIB."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The best path selection is re-run for that prefix."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If a new best path exists, it is installed in the FIB and advertised to peers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If no alternative exists, the prefix is removed from the FIB and a WITHDRAWAL is sent to peers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the prefix had alternate paths (backup), convergence is nearly instant. If not, the prefix becomes unreachable until a new path is learned."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-compare-dijkstra-and-bellman-ford-for-routing",
      children: "Q10: Compare Dijkstra and Bellman-Ford for routing."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bellman-Ford"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dijkstra"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic programming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy (priority-queue based)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V*E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E log V) with heap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Negative edges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handles (not in routing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot handle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural (distance-vector)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires full topology"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Convergence per iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Propagates 1 hop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yields shortest path immediately for nearest node"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "In routing context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distance-vector (RIP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Link-state (OSPF)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q11-what-is-route-summarization-and-why-is-it-important-in-ospf",
      children: "Q11: What is route summarization and why is it important in OSPF?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Route summarization (aggregation) combines multiple contiguous prefixes into a single advertisement. In OSPF, ABRs summarize inter-area routes. For example, routes 10.1.0.0/24, 10.1.1.0/24, 10.1.2.0/24, 10.1.3.0/24 can be summarized as 10.1.0.0/22."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      }), " Smaller routing tables, fewer LSA flooding events, faster SPF calculations, and improved stability (a flapping specific route within the summary does not propagate across areas)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Drawbacks:"
      }), " Suboptimal routing (packets to 10.1.1.0/24 may be forwarded to an ABR that does not have that specific prefix), and careful planning required to ensure contiguous addressing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q12-how-does-ecmp-equal-cost-multi-path-work-in-ospf",
      children: "Q12: How does ECMP (Equal-Cost Multi-Path) work in OSPF?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When OSPF (or any IGP) finds multiple paths to the same destination with equal cost, it can install all of them in the FIB. Traffic is then distributed across these paths using:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Per-packet round-robin"
        }), " — Each packet takes the next available path (can cause reordering in TCP)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Per-flow hashing"
        }), " — A hash of src IP, dst IP, src port, dst port selects the path. All packets in a flow take the same path, avoiding reordering."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cisco's CEF uses a hash-based approach by default. The number of ECMP paths supported depends on the platform (4, 8, 16, or 32 paths)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q13-what-is-the-purpose-of-the-ttl-field-in-ip-packets-and-how-does-traceroute-use-it",
      children: "Q13: What is the purpose of the TTL field in IP packets, and how does traceroute use it?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TTL (Time-to-Live) prevents packets from looping indefinitely. Each router decrements TTL by 1. When TTL reaches 0, the router drops the packet and sends an ICMP Time Exceeded message back to the source."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Traceroute exploits this: it sends packets with TTL=1, TTL=2, TTL=3, etc. The first router decrements TTL=1 to 0 and sends ICMP Time Exceeded, revealing its IP. The second router responds to TTL=2, etc. This traces the entire path."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q14-what-is-the-difference-between-redistribution-and-route-leaking",
      children: "Q14: What is the difference between redistribution and route leaking?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Route redistribution"
      }), " is the process of injecting routes from one routing protocol into another (e.g., OSPF to BGP). Redistribution requires careful planning of administrative distances and metrics to avoid suboptimal routing or loops."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Route leaking"
      }), " is a more controlled form where specific routes are selectively shared between routing domains (e.g., leaking a default route from a provider into a customer's OSPF domain). BGP communities are often used to control route leaking."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Both require consideration of routing feedback loops — a route redistributed into OSPF could be re-learned via BGP and redistributed back, creating a loop. Administrative distances and route tagging prevent this."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q15-how-does-a-router-handle-a-packet-when-no-route-exists-in-the-fib",
      children: "Q15: How does a router handle a packet when no route exists in the FIB?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a router receives a packet for which no prefix matches in the FIB:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If a default route (0.0.0.0/0) exists, the packet is forwarded via the default next hop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If no default route exists, the router drops the packet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The router sends an ICMP Destination Unreachable (Destination Network Unreachable, Code 0) message back to the source."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This behavior ensures that the source learns of the unreachability. In enterprise networks, a default route pointing to an ISP gateway is almost always configured."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "712-applications-in-real-systems",
      children: "7.12 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cisco-ios-configuration-examples",
      children: "Cisco IOS Configuration Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RIP Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "router rip\n version 2\n network 10.0.0.0\n no auto-summary\n distance 120\n!\ninterface GigabitEthernet0/0\n ip rip send version 2\n ip rip receive version 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "OSPF Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "router ospf 1\n router-id 1.1.1.1\n network 10.0.0.0 0.255.255.255 area 0\n network 192.168.1.0 0.0.0.255 area 1\n area 1 stub\n!\ninterface GigabitEthernet0/0\n ip ospf cost 10\n ip ospf priority 10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "BGP Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "router bgp 65000\n bgp router-id 192.168.1.1\n neighbor 10.0.0.1 remote-as 100\n neighbor 10.0.0.1 description ISP-A\n neighbor 10.0.0.1 route-map SET-PREF in\n neighbor 10.0.0.1 route-map PREPEND-OUT out\n!\nroute-map SET-PREF permit 10\n set local-preference 150\n!\nroute-map PREPEND-OUT permit 10\n set as-path prepend 65000 65000 65000\n!\nip prefix-list DEFAULT permit 0.0.0.0/0\n neighbor 10.0.0.1 prefix-list DEFAULT in\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "frr-free-range-routing--open-source-routing-stack",
      children: "FRR (Free Range Routing) → Open-Source Routing Stack"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FRR (formerly Quagga) is the de-facto open-source routing suite on Linux, used in production by many organizations."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "FRR Architecture:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+---------+  +---------+  +---------+  +---------+\n| zebra   |  | ospfd   |  | bgpd    |  | ripd    |\n| (RIB/   |  | (OSPF)  |  | (BGP)   |  | (RIP)   |\n|  FIB)   |  |         |  |         |  |         |\n+----+----+  +----+----+  +----+----+  +----+----+\n     |            |            |            |\n     +-----+------+-----+-----+------+-----+\n           |                  |\n    [Kernel FIB]      [Linux Kernel]\n         |                    |\n    [Packet Forwarding]   [Network Stack]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "FRR ospfd Daemon Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hostname router1\npassword zebra\n!\ninterface eth0\n ip ospf cost 10\n!\nrouter ospf\n router-id 1.1.1.1\n network 10.0.1.0/24 area 0\n network 10.0.2.0/24 area 1\n!\nlog file /var/log/frr/ospfd.log\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "FRR bgpd Daemon Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hostname bgp-router\n!\nrouter bgp 65000\n bgp router-id 10.0.0.1\n neighbor 10.0.0.2 remote-as 100\n neighbor 10.0.0.2 description Upstream-ISP\n neighbor 10.0.0.2 route-map CUSTOMER-IN in\n neighbor 10.0.0.2 route-map ISP-OUT out\n!\naddress-family ipv4 unicast\n network 203.0.113.0/24\n neighbor 10.0.0.2 activate\n exit-address-family\n!\nroute-map CUSTOMER-IN permit 10\n match ip address prefix-list CUSTOMER-PREFIXES\n!\nroute-map ISP-OUT permit 10\n set community 65000:100\n!\nip prefix-list CUSTOMER-PREFIXES seq 5 permit 203.0.113.0/24\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cloudflare-anycast-architecture",
      children: "Cloudflare Anycast Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cloudflare operates one of the largest anycast networks globally, serving ~20% of all web traffic."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Anycast Design:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same IP prefixes (e.g., 1.1.1.1 for DNS, 104.16.0.0/12 for CDN) advertised from 330+ data centers worldwide."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each data center has multiple routers peering with local ISPs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BGP propagates these /24 prefixes globally — every router in the world sees 330+ paths to Cloudflare."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Traffic Engineering at Cloudflare:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AS_PATH prepending"
        }), " — Data centers with more capacity advertise with shorter AS_PATH to attract more traffic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BGP communities"
        }), " — Upstream ISPs tag routes with location communities (e.g., 13335:100 for US-East). Cloudflare uses these to analyze traffic distribution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Anycast vs DNS"
        }), " — CDN uses IP anycast (same IP, many locations). Load balancing within a data center uses DNS-based steering."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DDoS Mitigation:"
      }), "\nWhen one data center is attacked, BGP anycast automatically distributes attack traffic across all 330+ data centers. Each data center absorbs a fraction of the attack, making large DDoS attacks (over 2 Tbps) survivable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aws-direct-connect-and-hybrid-routing",
      children: "AWS Direct Connect and Hybrid Routing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AWS Direct Connect extends on-premises networks into AWS via dedicated private connections. Routing in hybrid environments requires careful BGP design:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Direct Connect BGP Design:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "On-prem (AS65000) == Direct Connect == AWS VPC (AS64512)\n     |                                          |\n  [Customer GW]                             [Virtual GW]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Routing Considerations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VPC routes"
        }), " — On-premises prefixes are advertised via BGP over Direct Connect; VPC prefixes are advertised back."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Route preference"
        }), " — Direct Connect routes (BGP) vs VPN routes vs Internet routes. Lower admin distance for Direct Connect."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Failover"
        }), " — If Direct Connect fails, traffic fails over to VPN backup (BGP withdrawal triggers route change)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prefix advertisement"
        }), " — Customer advertises on-premises prefixes; AWS advertises VPC subnets."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NAT overlap"
        }), " — If on-prem and VPC CIDRs overlap, NAT or careful prefix filtering is required."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "facebooks-bgp-routing-meta",
      children: "Facebook's BGP Routing (Meta)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Meta (Facebook) has a unique routing architecture designed for its global private backbone (FBANET):"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "AS 32934 Design:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Private WAN connecting all data centers (backbone routers running BGP-LU — BGP Labeled Unicast)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "eBGP to transit providers, peers at IXPs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "iBGP route reflectors in each region."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BGP policy based on performance (measured RTT, loss) not just AS_PATH length."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Segment Routing (SR-MPLS) for traffic engineering across the private backbone."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bgp-in-isp-backbones",
      children: "BGP in ISP Backbones"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Real-world ISP BGP architecture typically includes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Core routers"
        }), " (PE/P routers): Run IBGP full mesh or with route reflectors. Peer with upstream providers and customers via eBGP."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Route reflectors"
        }), " (RRs): Reduce iBGP mesh from O(n^2) to O(n). RRs are typically dedicated servers or high-end routers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Route servers"
        }), ": Used at Internet Exchange Points (IXPs) to simplify multi-lateral peering."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AS_PATH prepending"
        }), ": Traffic engineering → make one path look longer to shift inbound traffic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Community-based policy"
        }), ": Upstream ISPs tag received prefixes with communities (e.g., \"do not advertise to peers\"), enabling downstream control."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ISP Route Flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Customer (AS65000)\n    |  eBGP (advertises 203.0.113.0/24)\n    v\nProvider (AS100) → PE router\n    |  iBGP (to route reflectors)\n    v\nProvider Route Reflectors → process policy, select best path\n    |  iBGP (to all PE routers)\n    |  eBGP (to upstream providers and peers)\n    v\nUpstream (AS1) / Peers (AS200, AS300) → propagate globally\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "routing-protocol-administrative-distances",
      children: "Routing Protocol Administrative Distances"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Route Source"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Distance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Static (with next-hop)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "eBGP (External BGP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EIGRP (internal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IGRP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OSPF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "110"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IS-IS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "115"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EIGRP (external)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "170"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iBGP (Internal BGP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DHCP-learned"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "254"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unknown/unreachable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "255"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "713-routing-security",
      children: "7.13 Routing Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-fake-road-signs",
      children: "Real-World Analogy: Fake Road Signs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Routing security is about preventing someone from putting up a fake road sign that redirects traffic to the wrong destination. On the Internet, this is exactly what happens during BGP hijacks."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bgp-hijacking",
      children: "BGP Hijacking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A BGP hijack occurs when an AS advertises a prefix it does not own, diverting traffic intended for the legitimate owner."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Types of BGP Hijacks:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix hijack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AS announces a prefix belonging to another AS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AS100 announces 8.8.8.0/24 (Google's prefix)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sub-prefix hijack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AS announces a more specific prefix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AS100 announces 8.8.8.0/25 (more specific than Google's /24)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AS_PATH prepending hijack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AS pretends to be on path to a prefix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AS100 prepends AS15169 (Google) in AS_PATH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route leak"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routes learned from one peer are improperly advertised to another"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider's customer routes leaked to peers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Famous BGP Hijacks:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Year"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "YouTube/Pakistan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pakistan Telecom hijacked YouTube's prefix; global YouTube outage for ~2 hours"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MyEtherWallet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2018"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS Route 53 hijack redirected users to phishing site; $17M stolen"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rostelecom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2017"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Russian ISP hijacked prefixes from 50+ CDNs and financial services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AS7007 incident"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1997"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAI Network Services accidentally announced 0.0.0.0/0, breaking the Internet"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rpki-resource-public-key-infrastructure",
      children: "RPKI (Resource Public Key Infrastructure)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RPKI is a security framework that uses cryptographic certificates to verify the association between IP prefixes and the ASes that hold them."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RPKI Validation States:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VALID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix-AS association cryptographically verified"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route accepted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INVALID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix-AS association does not match any ROA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route rejected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NOT FOUND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No ROA exists for the prefix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route accepted (but unverified)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RPKI Objects:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Route Origin Authorization (ROA):"
        }), " A cryptographically signed object that authorizes a specific AS to originate a specific prefix (with a max prefix length)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Route Origin Validation (ROV):"
        }), " The process of checking BGP announcements against ROAs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bgp-flowspec",
      children: "BGP Flowspec"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BGP Flowspec (RFC 8955) extends BGP to carry traffic filtering and rate-limiting rules. It enables:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distributed DDoS mitigation across multiple routers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fine-grained traffic filtering based on IP, port, protocol, TCP flags, packet length, etc."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated response to detected attacks."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "routing-protocol-authentication",
      children: "Routing Protocol Authentication"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Authentication Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Vulnerability"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RIPv2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plaintext or MD5 password"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5 susceptible to brute force with captured traffic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OSPF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5 or SHA authentication key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key must be manually configured on all routers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BGP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP MD5 (RFC 2385) or TCP-AO (RFC 5925)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5 has known weaknesses; TCP-AO is the modern replacement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IS-IS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Null, plaintext, HMAC-MD5, HMAC-SHA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as OSPF"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "route-filtering-best-practices",
      children: "Route Filtering Best Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prefix filtering at AS boundaries"
        }), " — Accept only prefixes that a customer/peer is authorized to announce."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bogon filtering"
        }), " — Reject private (RFC 1918), loopback, multicast, and unallocated prefixes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Max-prefix limit"
        }), " — Set a maximum number of prefixes from each peer to prevent memory exhaustion."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AS_PATH filtering"
        }), " — Reject routes containing private AS numbers or your own AS."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IRR (Internet Routing Registry) validation"
        }), " — Check route objects to verify prefix ownership."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RPKI ROV"
        }), " — Reject INVALID routes based on cryptographic ROAs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "714-chapter-quiz",
      children: "7.14 Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " Which routing protocol uses hop count as its metric with a maximum of 15?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) OSPF"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) BGP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) RIP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) IS-IS"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nC) RIP uses hop count, max 15 (16 = infinity).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " What prevents routing loops in BGP?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Split horizon"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) AS_PATH attribute"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Dijkstra's algorithm"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) TTL"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nB) BGP checks the AS_PATH → if a router sees its own AS in the path, it rejects the route to prevent loops.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " In OSPF, what is the purpose of a Designated Router (DR)?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Route all traffic through one router"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Reduce adjacencies from O(n^2) to O(n) on multi-access networks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Connect multiple areas"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Compute routes for all other routers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nB) The DR reduces the number of OSPF adjacencies needed on broadcast segments.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " Which BGP attribute has the highest priority in route selection?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) AS_PATH length"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) MED"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) LOCAL_PREF"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) IGP cost to NEXT_HOP"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nC) LOCAL_PREF (highest wins) is evaluated first in the BGP decision process.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " A router running both OSPF and RIP learns the same route from both protocols. Which route is installed in the routing table?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) RIP route (lower administrative distance)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) OSPF route (lower administrative distance)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Both routes (equal cost multipath)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Neither route (conflict)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nB) OSPF has administrative distance 110, RIP has 120. Lower AD wins.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quiz-answer-key",
      children: "Quiz Answer Key"
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
            children: "RIP uses hop count with a maximum of 15; 16 = infinity."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BGP checks the AS_PATH — if a router sees its own AS, it rejects the route."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The DR reduces adjacencies from O(n²) to O(n) on multi-access broadcast networks."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LOCAL_PREF (highest wins) is the first criterion in the BGP decision process."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OSPF has AD 110, RIP has AD 120; the lower administrative distance wins."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-bgp-hijack-detection-at-a-tier-2-isp",
      children: "Case Study: BGP Hijack Detection at a Tier-2 ISP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Background:"
      }), " A Tier-2 ISP (AS65000) provides transit services to 500+ customer ASes and peers at three major IXPs. The ISP operates two route reflectors and eight edge routers across four PoPs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Incident:"
      }), " On March 15, 2024, the ISP's monitoring system detected an anomaly: traffic to a major CDN prefix (104.16.0.0/12) was being diverted through an unfamiliar AS path. The legitimate path was ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AS65000 → AS13335 (Cloudflare)"
      }), ", but the new path showed ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AS65000 → AS64512 → AS13335"
      }), " with AS64512 being a small, recently-created AS in Eastern Europe."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Route validation"
        }), " — The ISP checked RPKI: the prefix 104.16.0.0/12 was associated with AS13335 only. AS64512 had no valid ROA for this prefix."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AS_PATH examination"
        }), " — AS64512's advertisement showed an AS_PATH of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "64512 13335"
        }), ", but AS64512 had no BGP peering with AS13335 (verified via PeeringDB and IRR records)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prefix comparison"
        }), " — AS64512 announced a more specific prefix (104.16.0.0/13) which BGP prefers over the less specific /12, causing traffic diversion."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact assessment"
        }), " — 15% of the ISP's traffic to Cloudflare was redirected through AS64512, causing increased latency (from 15ms to 320ms) and potential data interception risk."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resolution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Immediate"
        }), " — The ISP deployed a prefix filter rejecting any route for 104.16.0.0/12–/13 from non-Cloudflare ASes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monitoring"
        }), " — IRR-based route validation was enabled to check new BGP announcements against registered route objects."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Long-term"
        }), " — The ISP implemented RPKI-based Route Origin Validation (ROV) on all edge routers, rejecting INVALID routes automatically."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reporting"
        }), " — The incident was reported to MANRS (Mutually Agreed Norms for Routing Security) and the offending AS was flagged for investigation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lessons Learned:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RPKI alone would have prevented this hijack (no ROA for AS64512)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BGP monitoring tools (BGPStream, RIPEstat) provide early warning for path anomalies."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prefix filtering at AS boundaries is a critical defense layer."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "More-specific prefix hijacks are the most common BGP attack vector."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distance-Vector (RIP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple but slow convergence due to count-to-infinity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suitable for tiny networks (<15 hops) or lab environments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Link-State (OSPF)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast convergence via global topology + SPF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise and data center networks requiring high stability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Path-Vector (BGP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Policy-driven routing using path attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internet inter-domain routing, multi-homing, CDN anycast"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Split Horizon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Essential loop-prevention for DV protocols"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configure on all RIP interfaces; use poison reverse for faster convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OSPF Area Hierarchy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces LSDB size and isolates failure domains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always use a hierarchical design with Area 0 backbone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BGP LOCAL_PREF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most important attribute for outbound traffic engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set higher values for preferred upstream providers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AS_PATH Prepending"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coarse-grained inbound traffic engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prepend 2–3 times to shift traffic to backup links"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RPKI/ROV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cryptographic route origin validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy on edge routers to prevent BGP hijacks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route Aggregation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces routing table size and hides flaps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Summarize at area/AS boundaries whenever possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anycast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same IP from multiple locations using BGP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ideal for DNS, CDN, and DDoS-absorbing services"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Routing determines packet paths through a network of routers. The three fundamental routing algorithm families are distance-vector (Bellman-Ford, RIP), link-state (Dijkstra, OSPF), and path-vector (BGP)."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Idea"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distance-Vector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exchange tables iteratively, Bellman-Ford equation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small networks, labs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Link-State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build global topology, Dijkstra SPF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OSPF, IS-IS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise, SP core"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Path-Vector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AS-level paths with policy attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BGP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internet inter-domain"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each family trades off convergence speed, computational complexity, scalability, and administrative control. RIP is simple but limited to small networks. OSPF provides fast convergence and hierarchical scalability but requires more resources. BGP drives the global Internet with policy-driven inter-domain routing, sacrificing metric optimality for administrative autonomy."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hierarchical routing splits the problem into intra-domain (IGP) and inter-domain (EGP), enabling the Internet to scale to tens of thousands of autonomous systems. Multicast, broadcast, and anycast extend the basic routing paradigm to group communication, all-node delivery, and proximity-based service discovery."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What information does a distance-vector router exchange with its neighbors?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nA distance-vector router exchanges its entire distance vector — a table of (destination, distance) pairs — with each of its directly connected neighbors. The vector includes distances to all known destinations in the network. The router does not share its topology knowledge, only its computed distances.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does split horizon prevent count-to-infinity? Give a scenario where it is insufficient."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nSplit horizon prevents a router from advertising a route back on the same interface from which it was learned. This breaks two-node routing loops. For example, if B learns about A through C, B will not advertise A's route back to C. However, split horizon is insufficient for three-node loops (A→B, B→C, C→A), which require poison reverse or hold-down timers.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the purpose of the designated router in OSPF?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nThe Designated Router (DR) reduces the number of OSPF adjacencies required on multi-access broadcast networks (like Ethernet). Without a DR, every router would form an adjacency with every other router (O(n²) adjacencies). With a DR, all routers form adjacencies only with the DR and BDR (O(n) adjacencies). The DR is elected via Hello protocol priority.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List the BGP path attributes and explain the role of AS_PATH."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nKey BGP attributes include: AS_PATH (sequence of AS numbers the route traversed), LOCAL_PREF (local preference within AS), MED (suggestion to external peer for entry point), ORIGIN (how route entered BGP), NEXT_HOP (next router IP), COMMUNITY (policy tag), and AGGREGATOR. The AS_PATH prevents routing loops (a router rejects a route containing its own AS) and is used in best-path selection (shorter path preferred).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does BGP prefer routes with higher LOCAL_PREF over routes with shorter AS_PATH?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nLOCAL_PREF is evaluated first because business policy takes precedence over path length. An ISP may want to prefer a customer route (higher LOCAL_PREF) even if it has a longer AS_PATH, because customer routes generate revenue. The BGP decision process prioritizes policy over technical metrics — LOCAL_PREF is the primary tool for outbound traffic engineering.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does the Reverse Path Forwarding (RPF) check prevent broadcast storms?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nRPF checks that a broadcast/multicast packet arrived on the interface that the router would use to reach the source. If the packet arrived on a different interface, it is considered a duplicate and dropped. This prevents loops because a packet can only travel along the shortest-path tree from the source outward, ensuring each router forwards exactly one copy per incoming interface.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between PIM Sparse Mode and PIM Dense Mode?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nPIM Dense Mode (PIM-DM) assumes all routers want multicast traffic and floods initially, then prunes uninterested branches. It is suitable for dense receiver groups. PIM Sparse Mode (PIM-SM) assumes few receivers and uses a Rendezvous Point (RP) — receivers explicitly join via the RP, and sources register with the RP. PIM-SM is more scalable for wide-area multicast and can switch to source-specific trees for optimal paths.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain how AS_PATH prepending works as a traffic engineering tool."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nAS_PATH prepending artificially lengthens the AS_PATH attribute by adding extra copies of the local AS number. When other ASes run the BGP decision process, they see a longer AS_PATH and prefer alternative shorter paths. This shifts inbound traffic away from the prepended path. The technique is coarse-grained: prepending 1–2 times may not change traffic significantly, while 3+ prepends typically make a path a backup only.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider the network: A→B (cost 2), B→C (3), A→C (5), C→D (1). Run the Bellman-Ford algorithm from all sources to compute distance tables. Show the table updates after each iteration."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n**Network:** A-B=2, B-C=3, A-C=5, C-D=1. Vertices: {A, B, C, D}.\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Initial tables:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "A: {A:0, B:2, C:5, D:INF}"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "B: {A:2, B:0, C:3, D:INF}"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "C: {A:5, B:3, C:0, D:1}"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "D: {A:INF, B:INF, C:1, D:0}"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Iteration 1:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "A receives from B: A→C via B = 2+3=5 (no change); A→D via B = INF (no change)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "A receives from C: A→C via C = 5+0=5 (no change); A→D via C = 5+1=6 (update)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "B receives from A: B→C via A = 2+5=7 (worse than 3); B→D via A = INF"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "B receives from C: B→D via C = 3+1=4 (update)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "C receives from B: C→A via B = 3+2=5 (no change); C→D via B = INF"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "C receives from D: C→A via D = 1+INF = INF; C→B via D = INF"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "D receives from C: D→A via C = 1+5=6 (update); D→B via C = 1+3=4 (update)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "After Iteration 1:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "A: {A:0, B:2, C:5, D:6}"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "B: {A:2, B:0, C:3, D:4}"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "C: {A:5, B:3, C:0, D:1}"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "D: {A:6, B:4, C:1, D:0}"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Iteration 2:"
        }), " No changes → converged."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The same network uses OSPF. Run Dijkstra's algorithm from A to compute the shortest-path tree. Show the steps and the final forwarding table at A."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n**Network from A:** A-B=2, A-C=5, B-C=3, C-D=1.\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Dijkstra from A:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Step 0: N'={A}, D(B)=2(A), D(C)=5(A), D(D)=INF"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Step 1: Pick B (smallest). N'={A,B}. Relax B's edges: D(C)=min(5, 2+3=5)=5; D(D)=INF"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Step 2: Pick C (tie with D, pick C). N'={A,B,C}. Relax C's edges: D(D)=min(INF, 5+1=6)=6"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Step 3: Pick D. N'={A,B,C,D}. Done."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Shortest-path tree from A:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "A→B: direct (cost 2)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "A→C: A→B→C (cost 5)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "A→D: A→B→C→D (cost 6)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Forwarding table at A:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "B → next-hop B, cost 2"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "C → next-hop B, cost 5"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "D → next-hop B, cost 6"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "An ISP has three customers, each advertising a /24 prefix via BGP. The ISP also receives full BGP tables from two upstream providers. Explain how route aggregation might reduce the ISP's RIB size."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nIf the three customers advertise contiguous /24 prefixes (e.g., 203.0.113.0/24, 203.0.114.0/24, 203.0.115.0/24), the ISP can aggregate them into a single /22 advertisement (203.0.112.0/22) to upstream providers. This reduces the RIB from 3 routes to 1 route in the upstream direction. The ISP still maintains the specific /24 routes internally for forwarding, but the upstream BGP table sees one entry instead of three. Aggregation also reduces LSA flooding in OSPF and improves stability (a flapping customer /24 doesn't propagate beyond the ISP's AS).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "12",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trace the BGP decision process for prefix 10.0.0.0/8 with two routes: Path A (AS_PATH=[100 200], LOCAL_PREF=100, IGP cost=5) and Path B (AS_PATH=[300 400 500], LOCAL_PREF=150, IGP cost=3). Which path wins and why?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n**Step 1 — Highest LOCAL_PREF:**\n- Path A: LOCAL_PREF = 100\n- Path B: LOCAL_PREF = 150\n- → Path B wins immediately. AS_PATH and IGP cost are never evaluated.\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Result:"
        }), " Path B wins because LOCAL_PREF is the first criterion in the BGP decision process, and Path B has the higher value (150 > 100). The shorter AS_PATH of Path A (2 vs 3) and lower IGP cost of Path B (3 vs 5) are irrelevant since the decision was already made at step 1."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "If both had equal LOCAL_PREF, AS_PATH would be checked next, and Path A would win (shorter path)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "coding-problems",
      children: "Coding Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a Bellman-Ford simulator that runs distance-vector routing on any input graph and outputs the convergence steps."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n```typescript\nclass BellmanFordSimulator {\n  private vertices: number[];\n  private edges: Array<{ src: number; dest: number; weight: number }>;\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "constructor(vertices: number[], edges: Array<{ src: number; dest: number; weight: number }>) {\nthis.vertices = vertices;\nthis.edges = edges;\n}"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "run(source: number): { distances: Map<number, number>; predecessors: Map<number, number | null> } {\nconst dist = new Map<number, number>();\nconst prev = new Map<number, number | null>();\nfor (const v of this.vertices) {\ndist.set(v, Infinity);\nprev.set(v, null);\n}\ndist.set(source, 0);"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "console.log(`=== Bellman-Ford from source ${source} ===`);\nfor (let i = 1; i < this.vertices.length; i++) {\n  let updated = false;\n  for (const e of this.edges) {\n    const dSrc = dist.get(e.src)!;\n    if (dSrc !== Infinity && dSrc + e.weight < dist.get(e.dest)!) {\n      dist.set(e.dest, dSrc + e.weight);\n      prev.set(e.dest, e.src);\n      updated = true;\n      console.log(`  Iteration ${i}: relax (${e.src}→${e.dest}) = ${dist.get(e.dest)}`);\n    }\n  }\n  if (!updated) { console.log(`  Converged at iteration ${i}`); break; }\n}\nreturn { distances: dist, predecessors: prev };\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "}\n}"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "</details>\n\n14. Implement Dijkstra's algorithm to compute the shortest-path tree for the network A(0) connected to B(2) connected to C(3) connected to D(1) and A to E(5) connected to C(1).\n\n<details>\n<summary>Solution</summary>\n```typescript\nfunction dijkstra(adj: Map<number, Array<{ node: number; weight: number }>>, source: number) {\n  const dist = new Map<number, number>();\n  const prev = new Map<number, number | null>();\n  const visited = new Set<number>();\n  const pq: Array<[number, number]> = [];\n\n  for (const key of adj.keys()) { dist.set(key, Infinity); prev.set(key, null); }\n  dist.set(source, 0);\n  pq.push([0, source]);\n\n  while (pq.length > 0) {\n    pq.sort(([a], [b]) => a - b);\n    const [d, u] = pq.shift()!;\n    if (visited.has(u)) continue;\n    visited.add(u);\n\n    for (const { node: v, weight: w } of adj.get(u) || []) {\n      if (!visited.has(v) && d + w < (dist.get(v) ?? Infinity)) {\n        dist.set(v, d + w);\n        prev.set(v, u);\n        pq.push([d + w, v]);\n      }\n    }\n  }\n  return { distances: dist, predecessors: prev };\n}\n\n// Network: A(0)-B(1):2, B-C:3, C-D:1, A-E:5, E-C:1\nconst adj = new Map<number, Array<{ node: number; weight: number }>>();\nfor (let i = 0; i < 5; i++) adj.set(i, []);\nadj.get(0)!.push({ node: 1, weight: 2 }, { node: 4, weight: 5 });\nadj.get(1)!.push({ node: 0, weight: 2 }, { node: 2, weight: 3 });\nadj.get(2)!.push({ node: 1, weight: 3 }, { node: 3, weight: 1 }, { node: 4, weight: 1 });\nadj.get(3)!.push({ node: 2, weight: 1 });\nadj.get(4)!.push({ node: 0, weight: 5 }, { node: 2, weight: 1 });\n\nconst result = dijkstra(adj, 0);\nconsole.log('Distances from 0:', Object.fromEntries(result.distances));\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "15",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design a routing policy for a multi-homed enterprise."
        }), " An organization has two ISP connections: ISP-A (1 Gbps, expensive, reliable) and ISP-B (100 Mbps, cheap, best-effort). The organization has its own AS number. Design the BGP policy: (a) prefer ISP-A for inbound traffic, (b) use ISP-B as backup for outbound traffic, (c) announce a /20 prefix to both ISPs, and (d) accept only the default route (plus specific prefixes for a hosted service). Specify BGP attributes (LOCAL_PREF, AS_PATH prepending, MED, COMMUNITY) and justify each choice. Analyze what happens when ISP-A fails."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n**BGP Policy Design:**\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "(a) Prefer ISP-A for inbound traffic:"
        }), " Use AS_PATH prepending on ISP-B's advertisements. Announce the /20 prefix to ISP-B with 2–3 prepended AS numbers (AS65000 AS65000 AS65000). ISP-A's advertisement has AS_PATH length 1, ISP-B's has length 3–4. Inbound traffic naturally prefers the shorter AS_PATH (ISP-A). This ensures high-bandwidth traffic uses the 1 Gbps link."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "(b) ISP-B as backup for outbound traffic:"
        }), " Set LOCAL_PREF = 200 for routes learned from ISP-A and LOCAL_PREF = 100 for routes learned from ISP-B. Since higher LOCAL_PREF is preferred, all outbound traffic uses ISP-A unless it fails. Configure the router to track ISP-A availability using IP SLA monitoring."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "(c) Announce /20 prefix to both ISPs:"
        }), " Configure ", (0,jsx_runtime.jsx)(_components.code, {
          children: "network 203.0.113.0/20"
        }), " under both BGP neighbor statements. No MED manipulation needed since inbound preference is handled via prepending."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "(d) Accept only default route plus specific prefixes:"
        }), " Apply inbound prefix filters accepting only 0.0.0.0/0 (default) plus specific /24 prefixes for the hosted service. This minimizes the enterprise's RIB size while ensuring full Internet reachability via default."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Failure scenario — ISP-A goes down:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "BGP session to ISP-A drops (TCP reset or hold timer expiry)."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Routes learned via ISP-A (including default) are withdrawn from the routing table."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The router removes routes with LOCAL_PREF 200, leaving only ISP-B's routes (LOCAL_PREF 100)."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Outbound traffic automatically fails over to ISP-B (the only default route remaining)."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Inbound traffic: ISP-B's prepended advertisement is now the only path; traffic enters via ISP-B regardless of prepending."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Traffic shifts to the 100 Mbps link — capacity drops, but connectivity is maintained."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "When ISP-A recovers, BGP re-establishes, higher LOCAL_PREF routes reappear, and traffic shifts back."
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