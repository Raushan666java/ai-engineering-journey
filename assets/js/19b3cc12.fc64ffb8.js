"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[99579],{

/***/ 32045
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_computer_networks_02_physical_layer_md_19b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-computer-networks-02-physical-layer-md-19b.json
const site_docs_courses_computer_networks_02_physical_layer_md_19b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/computer-networks/02-physical-layer","title":"Chapter 2: The Physical Layer","description":"Prerequisites Introduction — Network models and layering | Next Data Link Layer — From bits to frames","source":"@site/docs/courses/computer-networks/02-physical-layer.md","sourceDirName":"courses/computer-networks","slug":"/computer-networks/02-physical-layer","permalink":"/ai-engineering-journey/computer-networks/02-physical-layer","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"02-physical-layer","slug":"/computer-networks/02-physical-layer","title":"Chapter 2: The Physical Layer","sidebar_label":"Chapter 2: The Physical Layer","sidebar_position":2},"sidebar":"course-computer-networks","previous":{"title":"Chapter 1: Introduction to Computer Networks","permalink":"/ai-engineering-journey/computer-networks/01-introduction"},"next":{"title":"Chapter 3: The Data Link Layer","permalink":"/ai-engineering-journey/computer-networks/03-datalink-layer"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/computer-networks/02-physical-layer.md


const frontMatter = {
	id: '02-physical-layer',
	slug: '/computer-networks/02-physical-layer',
	title: 'Chapter 2: The Physical Layer',
	sidebar_label: 'Chapter 2: The Physical Layer',
	sidebar_position: 2
};
const contentTitle = 'Chapter 2: The Physical Layer';

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
  "value": "Transmission Media Classification (Styled)",
  "id": "transmission-media-classification-styled",
  "level": 3
}, {
  "value": "Richer Transmission Media Taxonomy with Performance Metrics",
  "id": "richer-transmission-media-taxonomy-with-performance-metrics",
  "level": 3
}, {
  "value": "Path Loss and Link Budget Flow for Wireless",
  "id": "path-loss-and-link-budget-flow-for-wireless",
  "level": 3
}, {
  "value": "2.1 Analog vs Digital Signals",
  "id": "21-analog-vs-digital-signals",
  "level": 2
}, {
  "value": "2.1.1 Definitions",
  "id": "211-definitions",
  "level": 3
}, {
  "value": "2.1.2 Comparison: Analog vs Digital",
  "id": "212-comparison-analog-vs-digital",
  "level": 3
}, {
  "value": "2.1.3 Conversion Steps (Analog to Digital)",
  "id": "213-conversion-steps-analog-to-digital",
  "level": 3
}, {
  "value": "2.2 Signals (Periodic and Composite)",
  "id": "22-signals-periodic-and-composite",
  "level": 2
}, {
  "value": "2.2.1 Periodic Signals",
  "id": "221-periodic-signals",
  "level": 3
}, {
  "value": "2.2.2 Composite Signals",
  "id": "222-composite-signals",
  "level": 3
}, {
  "value": "2.2.3 C++ Implementation — Signal Generation and Analysis",
  "id": "223-c-implementation--signal-generation-and-analysis",
  "level": 3
}, {
  "value": "2.2.4 Python Implementation — Signal Generation and Analysis",
  "id": "224-python-implementation--signal-generation-and-analysis",
  "level": 3
}, {
  "value": "2.3 Bandwidth, Throughput, and Latency",
  "id": "23-bandwidth-throughput-and-latency",
  "level": 2
}, {
  "value": "2.3.1 Key Definitions",
  "id": "231-key-definitions",
  "level": 3
}, {
  "value": "2.3.2 Steps to Compute Total Latency",
  "id": "232-steps-to-compute-total-latency",
  "level": 3
}, {
  "value": "2.3.3 C++ Implementation — Latency and BDP Calculator",
  "id": "233-c-implementation--latency-and-bdp-calculator",
  "level": 3
}, {
  "value": "2.3.4 Python Implementation — Throughput Simulator",
  "id": "234-python-implementation--throughput-simulator",
  "level": 3
}, {
  "value": "2.4 Guided Transmission Media",
  "id": "24-guided-transmission-media",
  "level": 2
}, {
  "value": "2.4.1 Twisted Pair",
  "id": "241-twisted-pair",
  "level": 3
}, {
  "value": "2.4.2 Coaxial Cable",
  "id": "242-coaxial-cable",
  "level": 3
}, {
  "value": "2.4.3 Optical Fiber",
  "id": "243-optical-fiber",
  "level": 3
}, {
  "value": "2.4.4 Guided Media Comparison Table",
  "id": "244-guided-media-comparison-table",
  "level": 3
}, {
  "value": "2.5 Wireless Transmission",
  "id": "25-wireless-transmission",
  "level": 2
}, {
  "value": "2.5.1 Radio Waves",
  "id": "251-radio-waves",
  "level": 3
}, {
  "value": "2.5.2 Microwaves",
  "id": "252-microwaves",
  "level": 3
}, {
  "value": "2.5.3 Infrared",
  "id": "253-infrared",
  "level": 3
}, {
  "value": "2.5.4 Unguided Media Comparison Table",
  "id": "254-unguided-media-comparison-table",
  "level": 3
}, {
  "value": "2.6 Signal Encoding",
  "id": "26-signal-encoding",
  "level": 2
}, {
  "value": "2.6.1 NRZ (Non-Return-to-Zero)",
  "id": "261-nrz-non-return-to-zero",
  "level": 3
}, {
  "value": "2.6.2 Manchester Encoding",
  "id": "262-manchester-encoding",
  "level": 3
}, {
  "value": "2.6.3 Differential Manchester",
  "id": "263-differential-manchester",
  "level": 3
}, {
  "value": "2.6.4 4B/5B Encoding",
  "id": "264-4b5b-encoding",
  "level": 3
}, {
  "value": "2.6.5 8B/10B Encoding",
  "id": "265-8b10b-encoding",
  "level": 3
}, {
  "value": "2.6.6 Encoding Schemes Comparison Table",
  "id": "266-encoding-schemes-comparison-table",
  "level": 3
}, {
  "value": "2.6.7 C++ Implementation — Signal Encoding",
  "id": "267-c-implementation--signal-encoding",
  "level": 3
}, {
  "value": "2.6.8 Python Implementation — Signal Encoding Library",
  "id": "268-python-implementation--signal-encoding-library",
  "level": 3
}, {
  "value": "TypeScript Implementation: SignalEncoder",
  "id": "typescript-implementation-signalencoder",
  "level": 3
}, {
  "value": "2.7 Modulation",
  "id": "27-modulation",
  "level": 2
}, {
  "value": "2.7.1 Amplitude Shift Keying (ASK)",
  "id": "271-amplitude-shift-keying-ask",
  "level": 3
}, {
  "value": "2.7.2 Frequency Shift Keying (FSK)",
  "id": "272-frequency-shift-keying-fsk",
  "level": 3
}, {
  "value": "2.7.3 Phase Shift Keying (PSK)",
  "id": "273-phase-shift-keying-psk",
  "level": 3
}, {
  "value": "2.7.4 Quadrature Amplitude Modulation (QAM)",
  "id": "274-quadrature-amplitude-modulation-qam",
  "level": 3
}, {
  "value": "2.7.5 Modulation Comparison Table",
  "id": "275-modulation-comparison-table",
  "level": 3
}, {
  "value": "2.7.6 C++ Implementation — Modulation Simulation",
  "id": "276-c-implementation--modulation-simulation",
  "level": 3
}, {
  "value": "2.7.7 Python Implementation — Modulation Simulator",
  "id": "277-python-implementation--modulation-simulator",
  "level": 3
}, {
  "value": "2.8 Multiplexing",
  "id": "28-multiplexing",
  "level": 2
}, {
  "value": "2.8.1 Frequency-Division Multiplexing (FDM)",
  "id": "281-frequency-division-multiplexing-fdm",
  "level": 3
}, {
  "value": "2.8.2 Time-Division Multiplexing (TDM)",
  "id": "282-time-division-multiplexing-tdm",
  "level": 3
}, {
  "value": "2.8.3 Wavelength-Division Multiplexing (WDM)",
  "id": "283-wavelength-division-multiplexing-wdm",
  "level": 3
}, {
  "value": "2.8.4 Code-Division Multiplexing (CDM)",
  "id": "284-code-division-multiplexing-cdm",
  "level": 3
}, {
  "value": "2.8.5 Multiplexing Comparison Table",
  "id": "285-multiplexing-comparison-table",
  "level": 3
}, {
  "value": "2.8.6 C++ Implementation — Multiplexer Simulation",
  "id": "286-c-implementation--multiplexer-simulation",
  "level": 3
}, {
  "value": "2.8.7 Python Implementation — Multiplexer Simulator",
  "id": "287-python-implementation--multiplexer-simulator",
  "level": 3
}, {
  "value": "2.9 Switching",
  "id": "29-switching",
  "level": 2
}, {
  "value": "2.9.1 Circuit Switching",
  "id": "291-circuit-switching",
  "level": 3
}, {
  "value": "2.9.2 Packet Switching",
  "id": "292-packet-switching",
  "level": 3
}, {
  "value": "2.9.3 Message Switching",
  "id": "293-message-switching",
  "level": 3
}, {
  "value": "2.10 The Telephone System",
  "id": "210-the-telephone-system",
  "level": 2
}, {
  "value": "2.10.1 Digital Subscriber Line (DSL)",
  "id": "2101-digital-subscriber-line-dsl",
  "level": 3
}, {
  "value": "2.10.2 SONET/SDH",
  "id": "2102-sonetsdh",
  "level": 3
}, {
  "value": "2.11 Interview Corner",
  "id": "211-interview-corner",
  "level": 2
}, {
  "value": "Nyquist Theorem vs Shannon Theorem",
  "id": "nyquist-theorem-vs-shannon-theorem",
  "level": 3
}, {
  "value": "TypeScript Implementation: ShannonCapacityCalculator",
  "id": "typescript-implementation-shannoncapacitycalculator",
  "level": 3
}, {
  "value": "TypeScript Implementation: BitRateCalculator",
  "id": "typescript-implementation-bitratecalculator",
  "level": 3
}, {
  "value": "SNR and Channel Capacity Interview Questions",
  "id": "snr-and-channel-capacity-interview-questions",
  "level": 3
}, {
  "value": "Fiber vs Copper — Engineering Trade-offs",
  "id": "fiber-vs-copper--engineering-trade-offs",
  "level": 3
}, {
  "value": "2.12 Applications in Real Systems",
  "id": "212-applications-in-real-systems",
  "level": 2
}, {
  "value": "Ethernet — 8B/10B and beyond",
  "id": "ethernet--8b10b-and-beyond",
  "level": 3
}, {
  "value": "Wi-Fi — OFDM Modulation",
  "id": "wi-fi--ofdm-modulation",
  "level": 3
}, {
  "value": "DOCSIS — Cable Internet",
  "id": "docsis--cable-internet",
  "level": 3
}, {
  "value": "Cellular — From 2G to 5G",
  "id": "cellular--from-2g-to-5g",
  "level": 3
}, {
  "value": "Real-World Media Selection Guide",
  "id": "real-world-media-selection-guide",
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
  "value": "Case Study: Upgrading a Campus Backbone from Gigabit to 400G",
  "id": "case-study-upgrading-a-campus-backbone-from-gigabit-to-400g",
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
}, {
  "value": "Coding Exercises",
  "id": "coding-exercises",
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
        id: "chapter-2-the-physical-layer",
        children: "Chapter 2: The Physical Layer"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prerequisites:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/computer-networks/01-introduction",
          children: "Chapter 1: Introduction"
        }), " — Network models and layering | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/computer-networks/03-datalink-layer",
          children: "Chapter 3: Data Link Layer"
        }), " — From bits to frames"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Characterize the properties of guided transmission media including twisted pair, coaxial cable, and optical fiber."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare wireless transmission technologies: radio, microwave, and infrared."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the principles of frequency-division, time-division, wavelength-division, and code-division multiplexing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between circuit switching, packet switching, and message switching."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the architecture of the public switched telephone network."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze analog vs digital signals with encoding and modulation techniques."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate channel capacity using Nyquist and Shannon theorems."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement signal encoding, modulation, and multiplexing algorithms."
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
            children: "Guided Media"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Twisted pair, coaxial, fiber — each has a bandwidth-distance trade-off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fiber for backbone, twisted pair for access, coax for cable TV/broadband"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wireless Transmission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Radio penetrates walls; microwave needs line-of-sight; IR is room-limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose radio for mobility, microwave for point-to-point backhaul, IR for secure short-range"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiplexing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FDM/TDM/WDM/CDM share medium capacity among multiple users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WDM multiplies fiber capacity 80x; TDM suits constant-rate traffic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Switching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circuit: reserved path, deterministic. Packet: shared path, efficient"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circuit for voice; packet for data; virtual-circuit gives best-of-both for MPLS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Telephone System"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PSTN evolved from analog voice to digital backbone with DSL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DSL exploits existing local loops; PON is the fiber-to-the-home future"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance Metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth × delay = window size needed for full utilization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always compute bandwidth-delay product when tuning TCP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Signal Encoding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NRZ, Manchester, 4B/5B, 8B/10B convert bits to signals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8B/10B used in Ethernet; 4B/5B used in Fast Ethernet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ASK/FSK/PSK/QAM encode bits by varying carrier properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QAM-256 achieves 8 bps/Hz; used in cable modems and Wi-Fi"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Physical Layer] --> B[Analog vs Digital]\n    A --> C[Signals]\n    A --> D[Bandwidth & Latency]\n    A --> E[Guided Media]\n    A --> F[Wireless]\n    A --> G[Signal Encoding]\n    A --> H[Modulation]\n    A --> I[Multiplexing]\n    A --> J[Switching]\n    A --> K[Telephone System]\n    E --> E1[Twisted Pair]\n    E --> E2[Coaxial]\n    E --> E3[Optical Fiber]\n    I --> I1[FDM / TDM / WDM / CDM]\n    J --> J1[Circuit]\n    J --> J2[Packet]\n    J --> J3[Message]\n    K --> K1[PSTN / DSL / SONET / PON]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transmission-media-classification-styled",
      children: "Transmission Media Classification (Styled)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Guided[\"Guided (Wired) Media\"]\n        direction TB\n        TP[\"Twisted Pair<br/>Cat 5e–8<br/>100m–30m\"]\n        Coax[\"Coaxial Cable<br/>RG-6 / RG-58<br/>185m–500m\"]\n        Fiber[\"Optical Fiber<br/>SMF / MMF<br/>550m–200km+\"]\n    end\n\n    subgraph Unguided[\"Unguided (Wireless)\"]\n        direction TB\n        Radio[\"Radio Waves<br/>3 kHz–300 GHz<br/>Through walls\"]\n        MW[\"Microwaves<br/>3–300 GHz<br/>Line-of-sight\"]\n        IR[\"Infrared<br/>300 GHz–400 THz<br/>Room-limited\"]\n    end\n\n    Media[\"Transmission Media\"] --> Guided\n    Media --> Unguided\n\n    Guided --> GuidedProps[\"Properties:\n    • High bandwidth\n    • Secure (tapping detectable)\n    • Deterministic latency\n    • Higher deployment cost\"]\n\n    Unguided --> UnguidedProps[\"Properties:\n    • Mobility support\n    • Easy deployment\n    • Susceptible to interference\n    • Shared medium\"]\n\n    classDef gui fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px\n    classDef ungu fill:#fff3e0,stroke:#e65100,stroke-width:2px\n    classDef props fill:#f3e5f5,stroke:#7b1fa2,stroke-width:1px,stroke-dasharray:5\n    classDef root fill:#e1f5fe,stroke:#0288d1,stroke-width:2px\n\n    class Guided,TP,Coax,Fiber gui\n    class Unguided,Radio,MW,IR ungu\n    class GuidedProps,UnguidedProps props\n    class Media root\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "richer-transmission-media-taxonomy-with-performance-metrics",
      children: "Richer Transmission Media Taxonomy with Performance Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Guided[\"Guided (Wired) Media\"]\n        direction TB\n        subgraph TP[\"Twisted Pair\"]\n            TPCat5[\"Cat 5e<br/>1 Gbps / 100m\"]\n            TPCat6[\"Cat 6<br/>10 Gbps / 55m\"]\n            TPCat6a[\"Cat 6a<br/>10 Gbps / 100m\"]\n            TPCat8[\"Cat 8<br/>40 Gbps / 30m\"]\n        end\n        subgraph Coax[\"Coaxial Cable\"]\n            RG6[\"RG-6<br/>75 Ω / 1 GHz<br/>Cable TV\"]\n            RG58[\"RG-58<br/>50 Ω / 10 Mbps<br/>Thinnet\"]\n        end\n        subgraph Fiber[\"Optical Fiber\"]\n            SMF[\"SMF OS2<br/>9/125 µm<br/>200+ km / 400 Gbps\"]\n            MMF_OM4[\"MMF OM4<br/>50/125 µm<br/>550 m / 10 Gbps\"]\n            MMF_OM5[\"MMF OM5<br/>50/125 µm<br/>440 m / 40 Gbps\"]\n        end\n    end\n\n    subgraph Wireless[\"Wireless Media\"]\n        direction TB\n        subgraph RadioBand[\"Radio Bands\"]\n            SubGHz[\"Sub‑GHz<br/>900 MHz ISM<br/>Long range, low rate\"]\n            WiFi24[\"2.4 GHz<br/>Wi‑Fi / BT<br/>Balance range/rate\"]\n            WiFi5[\"5 GHz<br/>Wi‑Fi 5/6<br/>High throughput\"]\n            WiFi6[\"6 GHz<br/>Wi‑Fi 6E/7<br/>Very high throughput\"]\n        end\n        subgraph MWBand[\"Microwave Bands\"]\n            PtP[\"Point‑to‑Point<br/>6–86 GHz<br/>10 Gbps+\"]\n            Sat[\"Satellite<br/>LEO/GEO<br/>Global coverage\"]\n        end\n        IRBand[\"Infrared<br/>300 GHz–400 THz<br/>1–10 m, secure\"]\n    end\n\n    Media[\"Transmission Media\"] --> Guided\n    Media --> Wireless\n\n    classDef gui fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px\n    classDef ungu fill:#fff3e0,stroke:#e65100,stroke-width:2px\n    classDef fiber fill:#e1f5fe,stroke:#0288d1,stroke-width:2px\n    classDef radio fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px\n    classDef root fill:#ffebee,stroke:#c62828,stroke-width:3px\n\n    class Guided,TP,TPCat5,TPCat6,TPCat6a,TPCat8,Coax,RG6,RG58 gui\n    class Fiber,SMF,MMF_OM4,MMF_OM5 fiber\n    class Wireless,RadioBand,SubGHz,WiFi24,WiFi5,WiFi6,MWBand,PtP,Sat,IRBand ungu\n    class Media root\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "path-loss-and-link-budget-flow-for-wireless",
      children: "Path Loss and Link Budget Flow for Wireless"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Tx[\"Transmitter Side\"]\n        TX_POW[\"Tx Power<br/>20 dBm (100 mW)\"]\n        TX_ANT[\"Antenna Gain<br/>2 dBi\"]\n    end\n    subgraph Channel[\"Propagation\"]\n        FSPL[\"Free‑Space Path Loss<br/>20·log₁₀(d) + 20·log₁₀(f) − 147.55\"]\n        FADE[\"Fade Margin<br/>10 dB\"]\n        RAIN[\"Rain Attenuation<br/>0.1 dB/km (10 GHz)\"]\n    end\n    subgraph Rx[\"Receiver Side\"]\n        RX_ANT[\"Antenna Gain<br/>2 dBi\"]\n        RX_POW[\"Received Power<br/>−66 dBm\"]\n        RX_SENS[\"Receiver Sensitivity<br/>−85 dBm\"]\n    end\n\n    TX_POW --> TX_ANT --> FSPL --> FADE --> RAIN --> RX_ANT --> RX_POW\n    RX_POW --> LINK_MARGIN[\"Link Margin<br/>19 dB → OK\"]\n\n    classDef tx fill:#e3f2fd,stroke:#1565c0,stroke-width:2px\n    classDef ch fill:#fff3e0,stroke:#e65100,stroke-width:2px\n    classDef rx fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px\n    classDef result fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px,stroke-dasharray:5\n\n    class TX_POW,TX_ANT tx\n    class FSPL,FADE,RAIN ch\n    class RX_ANT,RX_POW,RX_SENS rx\n    class LINK_MARGIN result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-analog-vs-digital-signals",
      children: "2.1 Analog vs Digital Signals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " An analog signal is like a dimmer switch — infinitely variable brightness. A digital signal is like a light switch — only ON (1) or OFF (0). A dimmer can produce any brightness level, but the light switch gives a clear, unambiguous state that is easy to replicate."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "211-definitions",
      children: "2.1.1 Definitions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analog signal:"
        }), " Continuous waveform that varies smoothly over time. Examples: human voice, analog thermometer reading, AM/FM radio waves."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Digital signal:"
        }), " Discrete, stepwise waveform that takes only a finite set of values (typically two: 0 and 1). Examples: computer data, digital clock signal, PCM audio."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "212-comparison-analog-vs-digital",
      children: "2.1.2 Comparison: Analog vs Digital"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analog"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Digital"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discrete (0 or 1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Representation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sine wave, continuous function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Square wave, step function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Susceptibility to noise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High — noise accumulates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low — regenerated at repeaters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low bandwidth, continuous"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High bandwidth per bit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Difficult, degrades over time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy, lossless duplication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires analog circuits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Digital logic, cheap and fast"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distance limitation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attenuates, needs amplification (which adds noise)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regenerated perfectly (repeaters)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRC, checksums, parity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low — easy to tap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher — encryption feasible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Example media"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Analog telephone line"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethernet, USB, SATA"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "213-conversion-steps-analog-to-digital",
      children: "2.1.3 Conversion Steps (Analog to Digital)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sample"
        }), " — Measure the analog signal amplitude at regular intervals (Nyquist rate: ≥ 2× highest frequency)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quantize"
        }), " — Map each sampled amplitude to the nearest discrete level."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encode"
        }), " — Represent each quantization level as a binary number."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transmit"
        }), " — Send the binary sequence over a digital channel."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: ADC (Analog-to-Digital Conversion)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION analogToDigital(signal, sampleRate, bitsPerSample):\n    samples = []\n    for t = 0 to signal.duration step 1/sampleRate:\n        amplitude = signal.getValueAt(t)\n        quantized = ROUND(amplitude * (2^bitsPerSample - 1))\n        binary = TO_BINARY(quantized, bitsPerSample)\n        samples.APPEND(binary)\n    RETURN samples\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      }), " ADC for a 2 Hz sine wave sampled at Nyquist rate (4 Hz) with 3 bits"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time (s)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Amplitude"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Normalized (0–1)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Quantized Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Binary"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.125"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.71"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.854"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "110"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.250"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "111"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.375"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.71"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.854"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "110"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.625"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-0.71"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.146"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "001"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.750"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1.00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.875"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-0.71"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.146"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "001"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Sampling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) where n = sampleRate × duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every sample is read once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quantization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Round each amplitude to nearest level"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary encoding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n × b) where b = bits/sample"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n × b)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convert each level to fixed-width binary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n × b)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n × b)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All three operations are linear in samples"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Aliasing:"
        }), " Sampling below Nyquist rate causes frequency overlap. Fix: apply anti-aliasing low-pass filter before sampling."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Clipping:"
        }), " Signal amplitude exceeds quantization range. Fix: use automatic gain control (AGC)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quantization noise (granular):"
        }), " Insufficient bits per sample rounds to wrong level. Fix: increase bit depth or use dithering."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Jitter:"
        }), " Sampling intervals are uneven. Fix: use a precision clock with PLL (phase-locked loop)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D Table — Analog Transmission"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Simple hardware (amplifier vs ADC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Noise accumulates with each amplifier stage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Uses less bandwidth per channel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot detect or correct errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Smooth, natural representation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signal degrades with distance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No quantization error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard to encrypt or process computationally"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D Table — Digital Transmission"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Noise immunity (regeneration at repeaters)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires more bandwidth than analog"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error detection and correction possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex hardware (ADC, DAC)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can be encrypted and compressed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronization required between sender and receiver"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Perfect duplication and storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantization error introduces distortion"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-signals-periodic-and-composite",
      children: "2.2 Signals (Periodic and Composite)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A periodic signal is like a metronome — tick, tick, tick, endlessly repeating. A composite signal is like a symphony orchestra — many instruments playing different notes simultaneously, producing a rich waveform."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "221-periodic-signals",
      children: "2.2.1 Periodic Signals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A periodic signal completes a pattern within a measurable time period and repeats that pattern indefinitely. The simplest periodic signal is the sine wave."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key parameters:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Amplitude (A):"
        }), " Maximum signal strength (volts)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Period (T):"
        }), " Time for one complete cycle (seconds)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency (f):"
        }), " 1/T — cycles per second (Hz)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Phase (φ):"
        }), " Offset relative to time zero (radians)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Equation:"
      }), " s(t) = A × sin(2πft + φ)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps to analyze a periodic signal:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Measure the time between two consecutive identical points on the waveform → period T."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute frequency: f = 1/T."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Measure peak-to-peak amplitude: A = (V_max − V_min) / 2."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine phase offset by comparing zero-crossing to t=0."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Express as the standard sine equation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode — Generate and Analyze Sine Wave"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION generateSine(amplitude, frequency, phase, duration, sampleRate):\n    signal = []\n    FOR t = 0 TO duration STEP 1/sampleRate:\n        value = amplitude * SIN(2 * PI * frequency * t + phase)\n        signal.APPEND(value)\n    RETURN signal\n\nFUNCTION analyzePeriod(signal, sampleRate):\n    // Find first zero-crossing from negative to positive\n    FOR i = 1 TO LENGTH(signal) - 1:\n        IF signal[i-1] < 0 AND signal[i] >= 0:\n            firstZero = i\n            BREAK\n    // Find next zero-crossing\n    FOR j = firstZero + 1 TO LENGTH(signal) - 1:\n        IF signal[j-1] < 0 AND signal[j] >= 0:\n            periodSamples = j - firstZero\n            period = periodSamples / sampleRate\n            frequency = 1 / period\n            RETURN {period, frequency}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Sine Generation of a 3 Hz signal, A=2V, φ=0, sampled at 20 Hz for 1 second"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "t (s)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2πft"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "sin(2πft)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A·sin(2πft)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.942"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.809"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.618"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.885"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.951"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.902"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.827"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.309"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.618"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.770"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-0.309"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-0.618"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.712"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-2.000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.655"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-0.951"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1.902"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.35"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.597"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-0.309"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-0.618"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7.540"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.309"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.618"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8.482"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.809"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.618"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9.425"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.000"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge cases — Periodic Signals:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DC offset:"
        }), " Signal has non-zero average. Fix: subtract mean before analysis."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Harmonic distortion:"
        }), " Non-pure sine wave with harmonics. Fix: use FFT to extract fundamental."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Damped oscillation:"
        }), " Amplitude decays. Not truly periodic — model as e^(−αt) × sin(ωt)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency drift:"
        }), " Signal frequency changes over time. Fix: windowed FFT (spectrogram)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "222-composite-signals",
      children: "2.2.2 Composite Signals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A composite signal is the sum of two or more periodic signals at different frequencies. Fourier analysis shows that any composite periodic signal can be decomposed into a series of sine/cosine waves (harmonics)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A chord on a piano is a composite signal — multiple keys pressed simultaneously. Each key produces a sine wave at a specific frequency; the chord is the sum."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps to decompose a composite signal:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Capture one full period of the composite signal."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the Fourier Transform (or FFT) to convert from time domain to frequency domain."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify each peak in the frequency spectrum — each peak represents one component sine wave."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read frequency, amplitude, and phase from each peak."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reconstruct the signal by summing all components at each time point."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fourier Series Equation"
      }), " for a periodic composite signal with period T:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "s(t) = a₀ + Σ[n=1 to ∞] (aₙ·cos(2πnft) + bₙ·sin(2πnft))"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode — Composite Signal Decomposition via DFT"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION discreteFourierTransform(signal, sampleRate):\n    N = LENGTH(signal)\n    frequencies = []\n    FOR k = 0 TO N-1:\n        real = 0\n        imag = 0\n        FOR n = 0 TO N-1:\n            angle = 2 * PI * k * n / N\n            real += signal[n] * COS(angle)\n            imag -= signal[n] * SIN(angle)\n        magnitude = SQRT(real² + imag²) / N\n        frequency = k * sampleRate / N\n        IF magnitude > THRESHOLD:\n            frequencies.APPEND({frequency, magnitude})\n    RETURN frequencies\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity of DFT:"
      }), " O(N²) — each of N frequency bins requires summing N samples."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimization:"
      }), " Fast Fourier Transform (FFT) reduces to O(N log N) by exploiting symmetry in the DFT matrix."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Composite Signal s(t) = sin(2π·2t) + 0.5·sin(2π·6t) sampled at 32 Hz for 1 second"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "t (s)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "sin(2π·2t)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "0.5·sin(2π·6t)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Composite"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.125"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.707"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.707"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.250"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.375"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.707"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.707"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.625"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-0.707"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-0.500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1.207"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.750"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1.000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.875"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-0.707"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-0.207"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FFT of above reveals two peaks: one at 2 Hz (magnitude 1.0) and one at 6 Hz (magnitude 0.5)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge cases — Composite Signals:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spectral leakage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-integer number of periods sampled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply window function (Hamming, Hann)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Aliasing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signal contains frequencies > Nyquist limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-pass filter before sampling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DC spike at 0 Hz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signal has non-zero mean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subtract mean before FFT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Phase ambiguity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple signals at same frequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use quadrature detection (IQ sampling)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Noise floor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random noise obscures low-magnitude components"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Average multiple FFTs (Welch's method)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "223-c-implementation--signal-generation-and-analysis",
      children: "2.2.3 C++ Implementation — Signal Generation and Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <cmath>\n#include <complex>\n#include <algorithm>\n\n#ifndef M_PI\n#define M_PI 3.14159265358979323846\n#endif\n\n// Generate a periodic sine wave\nstd::vector<double> generateSine(double amplitude, double frequency, double phase,\n                                  double duration, double sampleRate) {\n    int numSamples = static_cast<int>(duration * sampleRate);\n    std::vector<double> signal(numSamples);\n    for (int i = 0; i < numSamples; ++i) {\n        double t = i / sampleRate;\n        signal[i] = amplitude * std::sin(2 * M_PI * frequency * t + phase);\n    }\n    return signal;\n}\n\n// Compute composite signal by summing multiple sine components\nstd::vector<double> generateComposite(const std::vector<std::tuple<double,double,double>>& components,\n                                       double duration, double sampleRate) {\n    int numSamples = static_cast<int>(duration * sampleRate);\n    std::vector<double> signal(numSamples, 0.0);\n    for (int i = 0; i < numSamples; ++i) {\n        double t = i / sampleRate;\n        for (const auto& [amp, freq, phase] : components) {\n            signal[i] += amp * std::sin(2 * M_PI * freq * t + phase);\n        }\n    }\n    return signal;\n}\n\n// Discrete Fourier Transform (O(N^2))\nstd::vector<std::pair<double,double>> computeDFT(const std::vector<double>& signal, double sampleRate) {\n    int N = signal.size();\n    std::vector<std::pair<double,double>> spectrum; // frequency, magnitude\n    for (int k = 0; k < N / 2; ++k) {\n        std::complex<double> sum(0, 0);\n        for (int n = 0; n < N; ++n) {\n            double angle = 2 * M_PI * k * n / N;\n            sum += signal[n] * std::complex<double>(std::cos(angle), -std::sin(angle));\n        }\n        double magnitude = std::abs(sum) / N;\n        double frequency = k * sampleRate / N;\n        if (magnitude > 0.01)\n            spectrum.push_back({frequency, magnitude});\n    }\n    return spectrum;\n}\n\nint main() {\n    // Generate a composite: 2 Hz at amplitude 1.0 + 6 Hz at amplitude 0.5\n    auto comps = {std::make_tuple(1.0, 2.0, 0.0), std::make_tuple(0.5, 6.0, 0.0)};\n    auto signal = generateComposite(comps, 1.0, 256.0);\n    auto spectrum = computeDFT(signal, 256.0);\n\n    // Print frequency components\n    std::cout << \"Frequency components:\" << std::endl;\n    for (const auto& [freq, mag] : spectrum)\n        std::cout << \"  \" << freq << \" Hz — magnitude \" << mag << std::endl;\n\n    // Verify Nyquist: max frequency we can detect = sampleRate/2\n    std::cout << \"Nyquist limit: \" << 256.0 / 2 << \" Hz\" << std::endl;\n    std::cout << \"Component count: \" << spectrum.size() << std::endl;\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "224-python-implementation--signal-generation-and-analysis",
      children: "2.2.4 Python Implementation — Signal Generation and Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import math\nimport cmath\nfrom typing import List, Tuple\n\ndef generate_sine(amplitude: float, frequency: float, phase: float,\n                  duration: float, sample_rate: float) -> List[float]:\n    n = int(duration * sample_rate)\n    return [amplitude * math.sin(2 * math.pi * frequency * (i / sample_rate) + phase)\n            for i in range(n)]\n\ndef generate_composite(components: List[Tuple[float, float, float]],\n                       duration: float, sample_rate: float) -> List[float]:\n    n = int(duration * sample_rate)\n    signal = [0.0] * n\n    for i in range(n):\n        t = i / sample_rate\n        for amp, freq, phase in components:\n            signal[i] += amp * math.sin(2 * math.pi * freq * t + phase)\n    return signal\n\ndef compute_dft(signal: List[float], sample_rate: float) -> List[Tuple[float, float]]:\n    n = len(signal)\n    spectrum = []\n    for k in range(n // 2):\n        s = sum(signal[i] * cmath.exp(-2j * math.pi * k * i / n) for i in range(n))\n        magnitude = abs(s) / n\n        frequency = k * sample_rate / n\n        if magnitude > 0.01:\n            spectrum.append((frequency, magnitude))\n    return spectrum\n\nif __name__ == \"__main__\":\n    sig = generate_composite([(1.0, 2.0, 0.0), (0.5, 6.0, 0.0)], 1.0, 256.0)\n    spec = compute_dft(sig, 256.0)\n    for freq, mag in spec:\n        print(f\"{freq:.1f} Hz — magnitude {mag:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23-bandwidth-throughput-and-latency",
      children: "2.3 Bandwidth, Throughput, and Latency"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " Bandwidth is the width of a水管 (water pipe) — a wider pipe carries more water per second. Throughput is how much water actually flows — limited by the narrowest pipe in the path. Latency is how long it takes a single water molecule to travel from tap to drain — determined by the length of the pipe."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "231-key-definitions",
      children: "2.3.1 Key Definitions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Symbol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Unit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bandwidth"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hz or bps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum theoretical data rate of the medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Throughput"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actual data transfer rate achieved"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Latency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time for one bit to travel source to destination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Propagation delay"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D_prop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distance / propagation speed (≈ 2×10⁸ m/s in copper, 2×10⁸ m/s in fiber)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transmission delay"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D_trans"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packet size / bandwidth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Queuing delay"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D_queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time waiting in router/switch buffers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Processing delay"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D_proc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time to examine packet header and route"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Jitter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "J"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variation in latency (std. dev. of L)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bandwidth-Delay Product"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B × RTT — how much data can be \"in flight\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "232-steps-to-compute-total-latency",
      children: "2.3.2 Steps to Compute Total Latency"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Determine propagation delay: Dₚ = distance / (c × velocity factor).\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Copper: v ≈ 0.67c ≈ 2 × 10⁸ m/s."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Fiber: v ≈ 0.67c ≈ 2 × 10⁸ m/s."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Free space (wireless): v = c ≈ 3 × 10⁸ m/s."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine transmission delay: Dₜ = frame size (bits) / bandwidth (bps)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Estimate queuing delay: D_q = (average queue length × packet size) / bandwidth."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute total latency: L = Dₚ + Dₜ + D_q + Dₚᵣₒc."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute BDP = bandwidth × RTT (round-trip time = 2 × L without queuing)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode — Bandwidth-Delay Product Calculator"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION computeBDP(bandwidth_bps, distance_m, velocityFactor, frameSize_bits):\n    propagationSpeed = 3e8 * velocityFactor      // m/s\n    propDelay = distance_m / propagationSpeed     // seconds\n    transDelay = frameSize_bits / bandwidth_bps   // seconds\n    totalLatency = propDelay + transDelay\n    RTT = 2 * totalLatency\n    BDP = bandwidth_bps * RTT\n    RETURN {propDelay, transDelay, RTT, BDP}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Compute BDP for Different Scenarios"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bandwidth"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Distance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Velocity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D_prop"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D_trans (1500B)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RTT"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BDP"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.67c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.5 µs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 µs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25 µs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25 Kb (3.1 KB)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WAN (copper)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000 km"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.67c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120 µs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.24 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.024 Mb (128 KB)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GEO Satellite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "35,786 km"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "119 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "240 µs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "238.5 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11.9 Mb (1.49 MB)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fiber backbone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "400 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3000 km"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.67c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 Gb (1.5 GB)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "233-c-implementation--latency-and-bdp-calculator",
      children: "2.3.3 C++ Implementation — Latency and BDP Calculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cmath>\n\nstruct LatencyResult {\n    double propDelay_s;     // seconds\n    double transDelay_s;    // seconds\n    double totalLatency_s;\n    double RTT_s;\n    double BDP_bits;\n};\n\nLatencyResult computePerformance(double bandwidth_bps, double distance_m,\n                                  double velocityFactor, double frameSize_bits) {\n    double c = 3e8;  // speed of light in vacuum\n    double propSpeed = c * velocityFactor;\n    double propDelay_s = distance_m / propSpeed;\n    double transDelay_s = frameSize_bits / bandwidth_bps;\n    double totalLatency_s = propDelay_s + transDelay_s;\n    double RTT_s = 2 * totalLatency_s;\n    double BDP_bits = bandwidth_bps * RTT_s;\n\n    return {propDelay_s, transDelay_s, totalLatency_s, RTT_s, BDP_bits};\n}\n\nint main() {\n    auto r = computePerformance(1e9, 100.0, 0.67, 1500 * 8.0);\n    std::cout << \"LAN (1 Gbps, 100 m):\" << std::endl;\n    std::cout << \"  Propagation delay: \" << r.propDelay_s * 1e6 << \" µs\" << std::endl;\n    std::cout << \"  Transmission delay: \" << r.transDelay_s * 1e6 << \" µs\" << std::endl;\n    std::cout << \"  RTT: \" << r.RTT_s * 1e6 << \" µs\" << std::endl;\n    std::cout << \"  BDP: \" << r.BDP_bits / 8 / 1024 << \" KB\" << std::endl;\n\n    auto sat = computePerformance(50e6, 35786000.0, 1.0, 1500 * 8.0);\n    std::cout << \"\\nGEO Satellite (50 Mbps, 35,786 km):\" << std::endl;\n    std::cout << \"  Propagation delay: \" << sat.propDelay_s * 1e3 << \" ms\" << std::endl;\n    std::cout << \"  RTT: \" << sat.RTT_s * 1e3 << \" ms\" << std::endl;\n    std::cout << \"  BDP: \" << sat.BDP_bits / 8 / 1024 / 1024 << \" MB\" << std::endl;\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "234-python-implementation--throughput-simulator",
      children: "2.3.4 Python Implementation — Throughput Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\nimport random\nfrom typing import List\n\n\ndef simulate_throughput(bandwidth_bps: int, packet_size_bits: int,\n                         num_packets: int, loss_rate: float = 0.0) -> float:\n    \"\"\"Simulate real throughput with packet loss and retransmission.\"\"\"\n    total_bits_sent = 0\n    start = time.time()\n    packets_sent = 0\n    retransmissions = 0\n\n    while packets_sent < num_packets:\n        # Transmission delay per packet\n        tx_delay = packet_size_bits / bandwidth_bps\n        time.sleep(tx_delay * 0.001)  # scaled down\n\n        # Simulate packet loss\n        if random.random() >= loss_rate:\n            total_bits_sent += packet_size_bits\n            packets_sent += 1\n        else:\n            retransmissions += 1  # packet lost, will be resent\n\n    elapsed = time.time() - start\n    throughput = total_bits_sent / elapsed if elapsed > 0 else 0\n    return throughput\n\n\ndef compute_bdp(bandwidth_bps: float, distance_m: float,\n                velocity_factor: float = 0.67) -> dict:\n    c = 3e8\n    prop_delay = distance_m / (c * velocity_factor)\n    rtt = 2 * prop_delay\n    bdp = bandwidth_bps * rtt\n    return {\n        \"prop_delay_s\": prop_delay,\n        \"rtt_s\": rtt,\n        \"bdp_bits\": bdp,\n        \"bdp_bytes\": bdp / 8,\n    }\n\n\nif __name__ == \"__main__\":\n    result = compute_bdp(10e9, 1000e3, 0.67)\n    print(f\"Fibre link (10 Gbps, 1000 km):\")\n    print(f\"  Propagation delay: {result['prop_delay_s']*1e3:.2f} ms\")\n    print(f\"  RTT: {result['rtt_s']*1e3:.2f} ms\")\n    print(f\"  BDP: {result['bdp_bytes']/1e6:.2f} MB\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis — Bandwidth/Latency Calculations:"
      })
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
            children: "Propagation delay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple arithmetic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transmission delay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single division"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput simulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop over n packets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BDP computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three multiplications"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero bandwidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Division by zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guard with if (bw <= 0) return error"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero distance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No propagation delay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Valid for same-machine communication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Long fat network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high BDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP window scaling required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Packet loss > 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput << bandwidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP congestion control kicks in"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gigabit over 1m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D_trans dominates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tune for serialization delay, not prop delay"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed of light limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Absolute lower bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot beat physics"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D Table — High Bandwidth vs Low Latency"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "High Bandwidth"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Low Latency"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Good for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bulk transfers (video, large files)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time apps (gaming, VoIP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Limitation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BDP may exceed sender buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physics-limited by distance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Expensive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (better hardware)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (proximity / fiber direct path)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data center interconnects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stock exchange co-location"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24-guided-transmission-media",
      children: "2.4 Guided Transmission Media"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Guided media provide a physical conduit for electromagnetic signals. The choice of medium depends on bandwidth requirements, distance, cost, and environmental factors."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "241-twisted-pair",
      children: "2.4.1 Twisted Pair"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " Two people whispering through a paper tube. Twisting the tube cancels echoes, and adding foil (STP) is like soundproofing the room."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Twisted pair cable consists of two insulated copper wires twisted together. Twisting reduces electromagnetic interference (EMI) because the radiated signals from each wire cancel one another."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impedance:"
        }), " 100 Ω (Ethernet), 110 Ω (IBM token ring)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Attenuation:"
        }), " ≈ 20 dB per 100 m at 100 MHz for Cat 5e."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NEXT (Near-End Crosstalk):"
        }), " Signal coupling between adjacent pairs — lower NEXT is better."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maximum distance:"
        }), " 100 m for Ethernet (100BASE-TX, 1000BASE-T)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cost:"
        }), " $0.10–$0.50 per meter."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "UTP Category Comparison:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bandwidth"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max Data Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max Distance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cat 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 MHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10BASE-T, voice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cat 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 MHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100BASE-TX"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cat 5e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 MHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000BASE-T"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cat 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "250 MHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 Gbps (55 m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "55 m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10GBASE-T"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cat 6a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500 MHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10GBASE-T"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cat 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "600 MHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shielded, data centers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cat 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2000 MHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30 m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data center (25/40GBASE-T)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps to terminate a twisted pair cable (T568B):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strip 2.5 cm of outer jacket from the cable end."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Untwist and straighten the four wire pairs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Arrange wires in T568B order: Orange-White, Orange, Green-White, Blue, Blue-White, Green, Brown-White, Brown."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trim wires to 1.25 cm length."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Insert wires into RJ-45 connector with pins facing up."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Crimp firmly with RJ-45 crimping tool."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test continuity with a cable tester."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Issue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alien crosstalk (AXT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacent cables interfere"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keep bundles under 24 cables; use Cat 6a+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Split pair"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wires not twisted per pair"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Re-terminate following color code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Impedance mismatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrong connector or damage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use same category throughout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pull tension > 25 lbs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stretched conductors, degraded signal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use proper pulling lubricant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bend radius < 4× diameter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Micro-cracks in conductor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintain minimum bend radius"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "242-coaxial-cable",
      children: "2.4.2 Coaxial Cable"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A coaxial cable is like a subway train in a tunnel — the central conductor is the train, the shield is the tunnel walls that keep interference out."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Coaxial cable has a central copper conductor surrounded by an insulating layer, a metallic shield, and an outer jacket. The shield provides better noise immunity than twisted pair and supports higher bandwidth over longer distances."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impedance:"
        }), " 50 Ω (networking, data), 75 Ω (cable TV, video)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Attenuation:"
        }), " ≈ 2 dB per 100 m at 100 MHz (RG-6)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maximum distance:"
        }), " 500 m (10BASE5 Thicknet), 185 m (10BASE2 Thinnet)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bandwidth:"
        }), " Up to 1 GHz for DOCSIS 3.1 cable modems."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cost:"
        }), " $0.30–$1.00 per meter."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Types of Coaxial Cable:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impedance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max Distance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RG-6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "75 Ω"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cable TV, satellite, DOCSIS broadband"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500 m+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RG-8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 Ω"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thicknet (10BASE5) Ethernet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500 m"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RG-58"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 Ω"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thinnet (10BASE2) Ethernet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "185 m"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RG-59"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "75 Ω"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CCTV analog video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "150 m"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RG-11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "75 Ω"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-run cable TV trunk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1500 m"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "243-optical-fiber",
      children: "2.4.3 Optical Fiber"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A fiber optic cable is like a super-highway for light — cars (light pulses) travel at near light speed through a glass tunnel, reflecting off the walls (total internal reflection)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Optical fiber transmits light pulses through a glass or plastic core by total internal reflection."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Core/Cladding diameters:"
        }), " SMF 9/125 µm, MMF 50/125 µm or 62.5/125 µm."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Attenuation:"
        }), " 0.2 dB/km (SMF at 1550 nm), 0.35 dB/km (SMF at 1310 nm), 3 dB/km (MMF at 850 nm)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bandwidth:"
        }), " Up to 800 Gbps per wavelength (SMF), 10 Gbps over 550 m (MMF OM4)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maximum distance:"
        }), " SMF — hundreds of km with amplifiers; MMF — 550 m at 10 Gbps."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cost:"
        }), " $0.50–$2.00 per meter (higher termination cost due to precision polishing)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fiber Types Comparison:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Core"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Wavelength"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Attenuation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Distance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SMF (OS2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9 µm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1310/1550 nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.35 / 0.20 dB/km"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40–200 km"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-haul, metro"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MMF OM3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 µm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "850/1300 nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.0 / 1.0 dB/km"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300 m (10G)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data center"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MMF OM4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 µm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "850/1300 nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.0 / 1.0 dB/km"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "550 m (10G)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data center"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MMF OM5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 µm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "850–950 nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.0 dB/km"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "440 m (40G)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SWDM, data center"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps to install an SC or LC connector on fiber:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strip 3 cm of outer jacket using a fiber stripper."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clean bare fiber with isopropyl alcohol and lint-free wipes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cleave the fiber precisely at 90° angle using a cleaver."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Insert fiber into the connector ferrule."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Crimp the connector body to secure."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Polish the ferrule end-face on lapping film (optional for pre-polished connectors)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify with a visual fault locator and power meter."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases — Optical Fiber:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Issue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modal dispersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple modes travel different distances in MMF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use single-mode or graded-index MMF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chromatic dispersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Different wavelengths travel at different speeds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use dispersion-shifted fiber or compensators"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Polarization mode dispersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Birefringence from non-circular core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use PMF or modern transceivers with PMD compensation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fiber bend loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Macrobending (tight radius) or microbending"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintain 10× cladding diameter bend radius"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connector contamination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dirty end-faces cause reflection and loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clean and inspect every connection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fresnel reflection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Light reflects at air-glass interface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use index-matching gel or APC polish"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "244-guided-media-comparison-table",
      children: "2.4.4 Guided Media Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Twisted Pair (Cat 6a)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Coaxial (RG-6)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SMF (OS2)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500 MHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 GHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10+ THz"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max data rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 Gbps (DOCSIS 3.1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "400+ Gbps per lambda"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max distance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500 m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200+ km"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Attenuation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~20 dB/100m @100MHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2 dB/100m @100MHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.2 dB/km @1550nm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EMI immunity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (STP: medium)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Installation ease"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy (RJ-45)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (F-type)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Difficult (fusion splice)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost per meter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$0.30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$0.60"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$1.00+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Termination cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$0.50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$1.00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$20–$50 per connector"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Applications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethernet, DSL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cable TV, broadband"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-haul, data center"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis — Media Selection:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Attenuation budget"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single formula: tx_power − (attenuation × distance)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distance check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare required distance to media max"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Equation — Power Budget:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Power Margin (dB) = Tx_Power(dBm) − Rx_Sensitivity(dBm) − Link_Losses(dB)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For a 100 km SMF link at 1550 nm:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tx = 0 dBm"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rx sensitivity = −20 dBm"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Attenuation = 0.2 dB/km × 100 km = 20 dB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Splice losses = 0.1 dB × 5 splices = 0.5 dB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connector losses = 0.5 dB × 2 connectors = 1.0 dB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Power margin = 0 − (−20) − (20 + 0.5 + 1.0) = −1.5 dB — insufficient! Need amplification."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25-wireless-transmission",
      children: "2.5 Wireless Transmission"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Wireless transmission uses electromagnetic waves propagated through free space. The frequency spectrum is a finite resource regulated by national and international bodies."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " Wireless communication is like a room full of people talking. Radio is someone shouting loud enough for everyone to hear (through walls). Microwave is two people having a directed conversation (must see each other). Infrared is whispering face-to-face (only works close up)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "251-radio-waves",
      children: "2.5.1 Radio Waves"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Radio waves in the 3 kHz–300 GHz range propagate through walls and around obstacles."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Propagation modes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ground wave:"
        }), " Below 2 MHz — follows Earth's curvature. Used by AM radio (530–1700 kHz)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sky wave:"
        }), " 2–30 MHz — reflects off ionosphere. Used by shortwave radio (HF band)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Line-of-sight:"
        }), " Above 30 MHz — travels in straight lines. Used by VHF/UHF TV, FM radio, Wi-Fi."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ISM Bands (unlicensed, but must accept interference):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Band"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frequency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Common Uses"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Limitations"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "900 MHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "902–928 MHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zigbee, older cordless phones"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Narrow bandwidth (26 MHz)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.4 GHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.4000–2.4835 GHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wi-Fi (802.11b/g/n/ax), Bluetooth, Zigbee"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crowded, interference from microwave ovens"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5 GHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.15–5.85 GHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wi-Fi (802.11a/n/ac/ax)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less range than 2.4 GHz, better throughput"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6 GHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.925–7.125 GHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wi-Fi 6E (802.11ax), Wi-Fi 7 (802.11be)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high throughput, short range"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps to calculate free-space path loss (FSPL):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine distance (d) in meters between transmitter and receiver."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine frequency (f) in Hz of the carrier."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute FSPL = 20·log₁₀(d) + 20·log₁₀(f) − 147.55 (in dB)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add atmospheric losses (rain ≈ 0.1 dB/km at 10 GHz, higher at higher frequencies)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare against link budget: if Rx_power > Rx_sensitivity, link works."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode — Free-Space Path Loss"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION computeFSPL(distance_m, frequency_Hz):\n    fspl_dB = 20 * LOG10(distance_m) + 20 * LOG10(frequency_Hz) - 147.55\n    RETURN fspl_dB\n\nFUNCTION linkBudget(txPower_dBm, txGain_dBi, rxGain_dBi, fspl_dB, fadeMargin_dB):\n    rxPower_dBm = txPower_dBm + txGain_dBi + rxGain_dBi - fspl_dB - fadeMargin_dB\n    RETURN rxPower_dBm\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Wi-Fi Link Budget (100 m, 2.4 GHz)"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 m"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.4 × 10⁹ Hz"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FSPL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20·log₁₀(100) + 20·log₁₀(2.4e9) − 147.55 = 40 + 187.6 − 147.55 = 80.05 dB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tx power"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 dBm (100 mW)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tx antenna gain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 dBi"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rx antenna gain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 dBi"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fade margin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 dB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Received power"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 + 2 + 2 − 80.05 − 10 = −66.05 dBm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical Wi-Fi Rx sensitivity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−85 dBm (for 54 Mbps OFDM)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Link margin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−66.05 − (−85) = 18.95 dB — link works reliably"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "252-microwaves",
      children: "2.5.2 Microwaves"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Microwaves (3–300 GHz) propagate by line-of-sight and are attenuated by rain and atmospheric gases."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Point-to-point microwave links:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distance: up to 50 km"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data rate: several Gbps (10–100 Gbps in E-band 71–86 GHz)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Antenna dish: 0.3–1.2 m diameter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requires Fresnel zone clearance (60% of first Fresnel zone radius)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Satellite communication:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Orbit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Altitude"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Delay"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Coverage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GEO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "35,786 km"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~250 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/3 Earth (3 satellites cover globe)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DirecTV, VSAT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5,000–20,000 km"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPS (20,200 km)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500–1,500 km"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1–10 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constellations needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Starlink (550 km, ~20 ms delay)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fresnel zone radius at midpoint:"
      }), " r = 0.5 × √(λ × d)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For a 10 km link at 5 GHz (λ = 0.06 m): r = 0.5 × √(0.06 × 10000) = 0.5 × 24.5 = 12.25 m."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "253-infrared",
      children: "2.5.3 Infrared"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Infrared (IR) waves, with frequencies above 300 GHz (300 GHz–400 THz), are used for short-range communication (1–10 m)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does not penetrate walls (inherent security)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requires line-of-sight or diffuse reflection off ceilings/walls."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Affected by sunlight, fluorescent lighting, and heat sources."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used in: remote controls, IrDA (Infrared Data Association) for short-range data transfer, optical fiber (same physics)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "IR vs Radio vs Microwave:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "IR"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Radio"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Microwave"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wall penetration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1–10 m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to km"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "km (line-of-sight)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1–4 Mbps (IrDA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 100 Gbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sunlight, heat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Other transmitters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rain, atmospheric"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (walled)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (overheard)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (beam narrow)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "254-unguided-media-comparison-table",
      children: "2.5.4 Unguided Media Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Radio (2.4 GHz)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Microwave (60 GHz)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Infrared"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 kHz–300 GHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3–300 GHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300 GHz–400 THz"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 m–km (indoor)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 km–50 km (LOS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1–10 m"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Penetrates walls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max data rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 Gbps+ (802.11ax)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 Mbps (IrDA)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Line-of-sight needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (obstacles reflect)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interference sources"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many (crowded ISM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rain, oxygen absorption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sunlight, heat"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mobility support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very limited"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wi-Fi, cellular"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backhaul, satellite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote controls, peripherals"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D Table — Wireless vs Wired:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Wireless"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Wired"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mobility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minutes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hours to days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reliability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Affected by interference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (shared medium)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (dedicated per link)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easier to intercept"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harder to tap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost per connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable (shared)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed per cable run"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (CSMA/CA, retransmissions)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower, predictable"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "26-signal-encoding",
      children: "2.6 Signal Encoding"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " Signal encoding is like choosing a language for a telegram. NRZ is plain English — simple but if you pause, the receiver can't tell if you stopped talking or are still thinking. Manchester is like having a clock tick between every word — the receiver always knows where words begin and end. 4B/5B is like a secret code where every 4-letter word becomes a 5-letter word to avoid offensive patterns."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "261-nrz-non-return-to-zero",
      children: "2.6.1 NRZ (Non-Return-to-Zero)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NRZ-L:"
      }), " 1 = high voltage, 0 = low voltage.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NRZ-I:"
      }), " 1 = transition at start of bit (toggle), 0 = no transition."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy (NRZ-I):"
      }), " A doorbell that rings when someone arrives (transition = 1) but stays silent if no one arrives (no transition = 0). The current state is the background hum."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps for NRZ-L encoding:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read the input bit (0 or 1)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If bit = 1, set voltage to +V. If bit = 0, set voltage to −V (or 0V)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hold voltage constant for the entire bit period."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sample at the middle of the bit period at the receiver."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode — NRZ Encoding"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION nrzEncode(bits):\n    encoded = []\n    voltage = -V                                  // Start at low\n    FOR EACH bit IN bits:\n        IF encoding == NRZ_L:\n            IF bit == 1: voltage = +V\n            ELSE: voltage = -V\n        ELSE IF encoding == NRZ_I:\n            IF bit == 1: voltage = -voltage       // Toggle\n            // bit == 0: voltage stays same\n        encoded.APPEND(voltage)\n    RETURN encoded\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — NRZ-L and NRZ-I for bit sequence 1 0 1 1 0 0 1:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Bit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NRZ-L Voltage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NRZ-I Voltage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NRZ-I Toggle?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(start)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "262-manchester-encoding",
      children: "2.6.2 Manchester Encoding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Manchester encoding combines clock and data into a single signal. 1 = low-to-high transition, 0 = high-to-low transition (IEEE 802.3 standard)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A drummer who taps on every beat AND changes which hand he uses to indicate the note. The tap (transition) keeps time; the hand direction (up or down) indicates the data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps for Manchester encoding:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read the input bit."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If bit = 1: set voltage to low for first half-period, high for second half (low→high transition)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If bit = 0: set voltage to high for first half-period, low for second half (high→low transition)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every bit has a guaranteed mid-bit transition for clock recovery."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode — Manchester Encoding"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION manchesterEncode(bits):\n    encoded = []\n    FOR EACH bit IN bits:\n        IF bit == 1:\n            encoded.APPEND(-V)       // First half: low\n            encoded.APPEND(+V)       // Second half: high\n        ELSE:\n            encoded.APPEND(+V)       // First half: high\n            encoded.APPEND(-V)       // Second half: low\n    RETURN encoded\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Manchester for bit sequence 1 0 1 1:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Bit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Half 1 Voltage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Half 2 Voltage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Transition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "low (0V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "high (+V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "↑ (up)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "high (+V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "low (0V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "↓ (down)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "low (0V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "high (+V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "↑ (up)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "low (0V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "high (+V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "↑ (up)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "263-differential-manchester",
      children: "2.6.3 Differential Manchester"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Differential Manchester (used in Token Ring): bit = 0 means transition at start of bit period; bit = 1 means no transition at start. Always has a mid-bit transition for clocking."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track previous voltage state (end of last bit)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For bit = 0: transition at the beginning of the bit period."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For bit = 1: no transition at the beginning."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always transition mid-bit (provides clock)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Differential Manchester for bits 1 0 1 1 (starting high):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Bit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Start transition?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Before mid-bit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "After mid-bit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "End state"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(start)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "high"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (stays high)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "low (mid-transition)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (low→high)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "low (mid-transition)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (stays low)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "high (mid-transition)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "high"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (stays high)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "low (mid-transition)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "low"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "264-4b5b-encoding",
      children: "2.6.4 4B/5B Encoding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4B/5B maps every 4-bit nibble to a 5-bit symbol. The code ensures no more than three consecutive 0s (maintains clock synchronization). Used in 100BASE-TX Fast Ethernet."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A game where you can't say \"zero\" more than three times in a row. Instead of saying \"I have zero apples, zero oranges, zero bananas, zero pears\" (four zeros), you say \"I'm out of fruit\" (different phrase). The mapping is pre-agreed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4B/5B Code Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "4B Data"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "5B Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "4B Data"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "5B Code"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11110"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10010"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "01001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10011"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10110"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10111"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "01010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11010"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "01011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11011"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0110"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "01110"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1110"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11100"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0111"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "01111"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1111"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11101"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Special codes: 11111 = idle, 11000 = start-of-stream delimiter, 10001 = end-of-stream delimiter."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps for 4B/5B encoding:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read 4 bits of input data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Look up the corresponding 5-bit symbol in the lookup table."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transmit the 5-bit symbol using NRZ-I."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "At receiver, decode 5-bit symbols back to 4-bit data."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "265-8b10b-encoding",
      children: "2.6.5 8B/10B Encoding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "8B/10B maps every 8-bit byte to a 10-bit symbol. Ensures DC balance (equal number of 0s and 1s) and sufficient transitions for clock recovery. Used in Gigabit Ethernet, Fibre Channel, PCI Express, SATA, USB 3.0."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A restaurant where every dish comes with exactly 5 savory ingredients and 5 sweet ingredients (DC balance). If the savory count is off, the chef adds an extra ingredient to compensate."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Running disparity (RD) tracking: RD+ or RD− state maintained between symbols."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each byte maps to two possible 10-bit codes (RD+ and RD−) for DC balance."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Disparity = (# of 1s) − (# of 0s). Target: cumulative disparity alternates."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "5B/6B encoding on the top 5 bits + 3B/4B encoding on the bottom 3 bits."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps for 8B/10B encoding:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Split the 8-bit byte into 3 most significant bits (HGF) and 5 least significant bits (EDCBA)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encode 5 bits → 6 bits using 5B/6B encoder (with current RD)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encode 3 bits → 4 bits using 3B/4B encoder (with updated RD)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Concatenate: 6-bit code + 4-bit code = 10 bits."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update running disparity."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode — 8B/10B Encoding Simulator"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION computeDisparity(bits):\n    RETURN COUNT_ONES(bits) - COUNT_ZEROS(bits)\n\nFUNCTION encode8b10b(byte, currentRD):\n    top3 = (byte >> 5) & 0x7\n    bot5 = byte & 0x1F\n    code6 = encode5b6b(bot5, currentRD)\n    newRD = currentRD + computeDisparity(code6)\n    code4 = encode3b4b(top3, newRD)\n    finalRD = newRD + computeDisparity(code4)\n    RETURN (code6 << 4) | code4, finalRD\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "266-encoding-schemes-comparison-table",
      children: "2.6.6 Encoding Schemes Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scheme"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bits per Signal"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DC Balance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Clock Recovery"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bandwidth Efficiency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Used In"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NRZ-L"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (long runs of same bit lose clock)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100% (no overhead)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RS-232, obsolete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NRZ-I"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Better than NRZ-L (transitions for 1s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USB (low-speed), FDDI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Manchester"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (mid-bit transition always)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50% (2× bandwidth)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10BASE-T Ethernet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Diff Manchester"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token Ring (802.5)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4B/5B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (≤3 consecutive 0s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80% (25% overhead)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100BASE-TX, FDDI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8B/10B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (DC-balanced, sufficient transitions)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80% (25% overhead)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GigE, Fibre Ch., PCIe, SATA, USB 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "64B/66B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.97"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "97% (3% overhead)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10G Ethernet, 40G Ethernet"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D Table — Encoding Schemes:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scheme"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NRZ-L"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplest implementation; no overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long runs of 0s lose clock; no DC balance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NRZ-I"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Better than NRZ-L for long 1 runs; still simple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Still fails on long 0 runs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Manchester"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-clocking (always has transition); simple decoding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doubles bandwidth requirement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4B/5B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good efficiency (80%); limited consecutive 0s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NRZ-I for transmission limits 0-run control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8B/10B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DC-balanced; excellent clock recovery; wide industry adoption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25% overhead; complex encoding logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "64B/66B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low overhead (3%); scrambler prevents long runs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More complex; scrambler can theoretically produce bad patterns"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "267-c-implementation--signal-encoding",
      children: "2.6.7 C++ Implementation — Signal Encoding"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <cstdint>\n\nenum Encoding { NRZ_L, NRZ_I, MANCHESTER, DIFF_MANCHESTER };\n\nstd::vector<char> nrzEncode(const std::vector<int>& bits, Encoding enc) {\n    std::vector<char> result;\n    char voltage = -1; // start low\n    for (int bit : bits) {\n        if (enc == NRZ_L)\n            voltage = (bit == 1) ? +1 : -1;\n        else if (enc == NRZ_I && bit == 1)\n            voltage = -voltage;\n        result.push_back(voltage);\n    }\n    return result;\n}\n\nstd::vector<char> manchesterEncode(const std::vector<int>& bits) {\n    std::vector<char> result;\n    for (int bit : bits) {\n        if (bit == 1) {\n            result.push_back(-1);  // low first half\n            result.push_back(+1);  // high second half\n        } else {\n            result.push_back(+1);  // high first half\n            result.push_back(-1);  // low second half\n        }\n    }\n    return result;\n}\n\nstd::vector<int> manchesterDecode(const std::vector<char>& signal) {\n    std::vector<int> bits;\n    for (size_t i = 0; i < signal.size(); i += 2) {\n        if (i + 1 >= signal.size()) break;\n        // Mid-bit transition: low->high = 1, high->low = 0\n        if (signal[i] == -1 && signal[i+1] == +1)\n            bits.push_back(1);\n        else if (signal[i] == +1 && signal[i+1] == -1)\n            bits.push_back(0);\n        else\n            bits.push_back(-1); // Error flag\n    }\n    return bits;\n}\n\n// 4B/5B lookup table (simplified)\nconst char* code4b5b[16] = {\n    \"11110\",\"01001\",\"10100\",\"10101\",\"01010\",\"01011\",\"01110\",\"01111\",\n    \"10010\",\"10011\",\"10110\",\"10111\",\"11010\",\"11011\",\"11100\",\"11101\"\n};\n\nstd::string encode4b5b(const std::vector<int>& nibbles) {\n    std::string result;\n    for (int nibble : nibbles) {\n        if (nibble >= 0 && nibble <= 15)\n            result += code4b5b[nibble];\n    }\n    return result;\n}\n\nint main() {\n    std::vector<int> bits = {1, 0, 1, 1, 0, 0, 1, 0};\n\n    // NRZ-L\n    auto nrzl = nrzEncode(bits, NRZ_L);\n    std::cout << \"NRZ-L: \";\n    for (char v : nrzl) std::cout << (v == 1 ? \"+\" : \"-\");\n    std::cout << std::endl;\n\n    // NRZ-I\n    auto nrzi = nrzEncode(bits, NRZ_I);\n    std::cout << \"NRZ-I: \";\n    for (char v : nrzi) std::cout << (v == 1 ? \"+\" : \"-\");\n    std::cout << std::endl;\n\n    // Manchester\n    auto man = manchesterEncode(bits);\n    std::cout << \"Manchester: \";\n    for (char v : man) std::cout << (v == 1 ? \"+\" : \"-\");\n    std::cout << std::endl;\n\n    // Decode back\n    auto decoded = manchesterDecode(man);\n    std::cout << \"Decoded: \";\n    for (int b : decoded) std::cout << (b == 1 ? \"1\" : (b == 0 ? \"0\" : \"E\"));\n    std::cout << std::endl;\n\n    // 4B/5B\n    std::vector<int> nibbles = {0x0, 0x1, 0xA, 0xF};\n    std::cout << \"4B/5B [0,1,A,F]: \" << encode4b5b(nibbles) << std::endl;\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "268-python-implementation--signal-encoding-library",
      children: "2.6.8 Python Implementation — Signal Encoding Library"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import List, Tuple\n\n\ndef nrz_encode(bits: List[int], scheme: str = \"nrz_l\") -> List[int]:\n    voltage = -1\n    result = []\n    for bit in bits:\n        if scheme == \"nrz_l\":\n            voltage = 1 if bit == 1 else -1\n        elif scheme == \"nrz_i\" and bit == 1:\n            voltage = -voltage\n        result.append(voltage)\n    return result\n\n\ndef manchester_encode(bits: List[int]) -> List[int]:\n    result = []\n    for bit in bits:\n        if bit == 1:\n            result.extend([-1, 1])  # low→high\n        else:\n            result.extend([1, -1])  # high→low\n    return result\n\n\ndef manchester_decode(signal: List[int]) -> List[int]:\n    bits = []\n    for i in range(0, len(signal) - 1, 2):\n        if signal[i] == -1 and signal[i+1] == 1:\n            bits.append(1)\n        elif signal[i] == 1 and signal[i+1] == -1:\n            bits.append(0)\n        else:\n            bits.append(-1)  # error\n    return bits\n\n\n# 4B/5B mapping\nCODE_4B5B = {\n    0x0: \"11110\", 0x1: \"01001\", 0x2: \"10100\", 0x3: \"10101\",\n    0x4: \"01010\", 0x5: \"01011\", 0x6: \"01110\", 0x7: \"01111\",\n    0x8: \"10010\", 0x9: \"10011\", 0xA: \"10110\", 0xB: \"10111\",\n    0xC: \"11010\", 0xD: \"11011\", 0xE: \"11100\", 0xF: \"11101\",\n}\n\nCODE_5B4B = {v: k for k, v in CODE_4B5B.items()}\n\n\ndef encode_4b5b(nibbles: List[int]) -> str:\n    return \"\".join(CODE_4B5B[n] for n in nibbles)\n\n\ndef decode_4b5b(code: str) -> List[int]:\n    nibbles = []\n    for i in range(0, len(code), 5):\n        chunk = code[i:i+5]\n        if chunk in CODE_5B4B:\n            nibbles.append(CODE_5B4B[chunk])\n        else:\n            nibbles.append(-1)  # invalid code\n    return nibbles\n\n\nif __name__ == \"__main__\":\n    bits = [1, 0, 1, 1, 0, 0, 1, 0]\n    print(f\"NRZ-L:   {''.join('+' if v==1 else '-' for v in nrz_encode(bits, 'nrz_l'))}\")\n    print(f\"NRZ-I:   {''.join('+' if v==1 else '-' for v in nrz_encode(bits, 'nrz_i'))}\")\n    man = manchester_encode(bits)\n    print(f\"Manchester: {''.join('+' if v==1 else '-' for v in man)}\")\n    dec = manchester_decode(man)\n    print(f\"Decoded: {''.join(str(b) if b!=-1 else 'E' for b in dec)}\")\n\n    # 4B/5B example: data = [0x0, 0x1, 0xA, 0xF]\n    encoded = encode_4b5b([0x0, 0x1, 0xA, 0xF])\n    print(f\"4B/5B: {encoded}\")\n    decoded = decode_4b5b(encoded)\n    print(f\"4B/5B decoded: {[hex(d) for d in decoded]}\")\n\n    # DC balance check\n    ones = encoded.count(\"1\")\n    zeros = encoded.count(\"0\")\n    print(f\"DC balance: {ones} ones, {zeros} zeros, disparity={ones - zeros}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis — Signal Encoding:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "NRZ encode (any variant)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One pass over n bits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Manchester encode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(2n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each bit → 2 signal levels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Manchester decode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One pass over signal samples"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4B/5B encode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n/4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(5n/4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each 4-bit group → 5-bit code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8B/10B encode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n/8)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(10n/8)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each byte → 10-bit code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DC balance check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Count ones and zeros"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-signalencoder",
      children: "TypeScript Implementation: SignalEncoder"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following TypeScript class implements NRZ-L, NRZ-I, Manchester, and 4B/5B encoding schemes, demonstrating how bits are converted to signal levels for transmission."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * SignalEncoder — Implements NRZ-L, NRZ-I, Manchester, and 4B/5B\n * encoding and decoding schemes used in Ethernet and other PHY layers.\n */\nclass SignalEncoder {\n  /** NRZ-L: 1 = +V, 0 = -V */\n  static nrzLEncode(bits: number[]): string[] {\n    return bits.map(b => b === 1 ? '+' : '-');\n  }\n\n  /** NRZ-I: 1 = toggle voltage, 0 = no change */\n  static nrzIEncode(bits: number[]): string[] {\n    const signal: string[] = [];\n    let current = '-';\n    for (const b of bits) {\n      if (b === 1) current = current === '+' ? '-' : '+';\n      signal.push(current);\n    }\n    return signal;\n  }\n\n  /** Manchester: 1 = low→high, 0 = high→low (IEEE 802.3) */\n  static manchesterEncode(bits: number[]): string[] {\n    const signal: string[] = [];\n    for (const b of bits) {\n      if (b === 1) { signal.push('-', '+'); }  // low→high\n      else { signal.push('+', '-'); }           // high→low\n    }\n    return signal;\n  }\n\n  /** Manchester decode with error detection */\n  static manchesterDecode(signal: string[]): number[] {\n    const bits: number[] = [];\n    for (let i = 0; i < signal.length; i += 2) {\n      if (signal[i] === '-' && signal[i + 1] === '+') bits.push(1);\n      else if (signal[i] === '+' && signal[i + 1] === '-') bits.push(0);\n      else bits.push(-1); // error: violation\n    }\n    return bits;\n  }\n\n  /** 4B/5B encoding table (IEEE 802.3) */\n  private static readonly code4B5B: Record<number, string> = {\n    0x0: '11110', 0x1: '01001', 0x2: '10100', 0x3: '10101',\n    0x4: '01010', 0x5: '01011', 0x6: '01110', 0x7: '01111',\n    0x8: '10010', 0x9: '10011', 0xA: '10110', 0xB: '10111',\n    0xC: '11010', 0xD: '11011', 0xE: '11100', 0xF: '11101'\n  };\n\n  static encode4B5B(nibbles: number[]): string {\n    return nibbles.map(n => this.code4B5B[n] ?? 'ERROR').join('');\n  }\n\n  /** Compute DC balance (disparity) of an encoded signal */\n  static dcBalance(signal: string): number {\n    const ones = (signal.match(/1/g) || []).length;\n    const zeros = (signal.match(/0/g) || []).length;\n    return ones - zeros;\n  }\n\n  /** Simulate all encodings for a given bit pattern */\n  static demonstrate(bits: number[]): void {\n    console.log(`\\n=== Signal Encoding for: ${bits.join(' ')} ===`);\n    console.log(`NRZ-L:     ${this.nrzLEncode(bits).join(' ')}`);\n    console.log(`NRZ-I:     ${this.nrzIEncode(bits).join(' ')}`);\n    const man = this.manchesterEncode(bits);\n    console.log(`Manchester: ${man.join(' ')}`);\n    const decoded = this.manchesterDecode(man);\n    console.log(`Decoded:   ${decoded.join(' ')}  (${decoded.includes(-1) ? 'ERROR' : 'OK'})`);\n\n    // 4B/5B example\n    const nibbles = [0xA, 0xB, 0xC, 0xD];\n    const enc5B = this.encode4B5B(nibbles);\n    console.log(`\\n4B/5B: ${nibbles.map(n => '0x' + n.toString(16)).join(' ')} => ${enc5B}`);\n    console.log(`DC disparity: ${this.dcBalance(enc5B)}`);\n  }\n}\n\n// Demonstration\nSignalEncoder.demonstrate([1, 0, 1, 1, 0, 0, 1, 0]);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== Signal Encoding for: 1 0 1 1 0 0 1 0 ===\nNRZ-L:     + - + + - - + -\nNRZ-I:     + + - + + + - -\nManchester: - + + - - + - + + - - + - + + -\nDecoded:   1 0 1 1 0 0 1 0  (OK)\n\n4B/5B: 0xa 0xb 0xc 0xd => 10110101111101011011\nDC disparity: 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "27-modulation",
      children: "2.7 Modulation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " Modulation is like placing a message inside a sealed envelope for delivery. ASK is the envelope's weight (heavy = 1, light = 0). FSK is the color of the envelope (red = 1, blue = 0). PSK is how the stamp is oriented (right-side up = 1, upside-down = 0). QAM is like both weight and stamp orientation — more information per envelope."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "271-amplitude-shift-keying-ask",
      children: "2.7.1 Amplitude Shift Keying (ASK)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ASK varies the carrier amplitude to represent data. 1 = carrier present (high amplitude), 0 = carrier absent (low amplitude)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A lighthouse that flashes brightly for \"1\" and dimly for \"0\". The pattern of bright/dim is the message."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps for ASK modulation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate a carrier sine wave at frequency fc: c(t) = A_c × cos(2π·fc·t)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each bit: if bit = 1, transmit c(t) at full amplitude. If bit = 0, transmit c(t) at reduced amplitude (or zero)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "At receiver, measure envelope amplitude. If amplitude > threshold, decode as 1; otherwise decode as 0."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode — ASK Modulator"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION askModulate(bits, carrierFreq, sampleRate, bitDuration):\n    signal = []\n    samplesPerBit = sampleRate * bitDuration\n    FOR EACH bit IN bits:\n        amplitude = (bit == 1) ? A_high : A_low\n        FOR i = 0 TO samplesPerBit - 1:\n            t = i / sampleRate\n            signal.APPEND(amplitude * COS(2 * PI * carrierFreq * t))\n    RETURN signal\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — ASK for bits 1 0 at carrier 10 Hz, 100 samples/s, 0.5s per bit:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Bit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "t (s)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Carrier cos(2π·10·t)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Amplitude"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ASK Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−1.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−1.000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−1.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−0.100"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.35"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.100"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−1.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−0.100"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "272-frequency-shift-keying-fsk",
      children: "2.7.2 Frequency Shift Keying (FSK)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FSK varies the carrier frequency to represent data. 1 = frequency f1, 0 = frequency f2."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A bird that sings in two different pitches. A high-pitched tweet (f1) means \"danger\", a low-pitched chirp (f2) means \"food\". The receiver listens for pitch to decode the message."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps for FSK modulation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define two carrier frequencies: f1 for bit 1, f2 for bit 0."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each bit: generate a sine wave at the corresponding frequency."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "At receiver, use a frequency discriminator or PLL to detect which frequency is being received."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "273-phase-shift-keying-psk",
      children: "2.7.3 Phase Shift Keying (PSK)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PSK varies the carrier phase to represent data. BPSK: 0° phase = 1, 180° phase = 0."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " Two scouts using a mirror to flash signals. A flash straight at you (0° phase) means \"yes\", a flash to the right (180° shift = opposite direction) means \"no\"."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "QPSK (Quadrature PSK)"
      }), " uses 4 phase states (45°, 135°, 225°, 315°) encoding 2 bits per symbol."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constellation diagram — BPSK:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    Q\n    |\n  1 |● (+1, 0)\n    |\n----+---- I\n    |\n  0 |● (-1, 0)\n    |\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constellation diagram — QPSK:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "         Q\n         |\n    01 ● |● 00  (-1, +1) = 00, (+1, +1) = 01\n         |\n----+----+---- I\n         |\n    10 ● |● 11  (-1, -1) = 10, (+1, -1) = 11\n         |\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps for QPSK modulation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Group bits into pairs: dibits (b1, b0)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Map each dibit to I (in-phase) and Q (quadrature) amplitudes:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "00 → I=+1, Q=+1 (phase shift 45°)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "01 → I=−1, Q=+1 (phase shift 135°)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "10 → I=−1, Q=−1 (phase shift 225°)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "11 → I=+1, Q=−1 (phase shift 315°)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate: s(t) = I·cos(2πfc·t) − Q·sin(2πfc·t)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transmit the combined signal."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "274-quadrature-amplitude-modulation-qam",
      children: "2.7.4 Quadrature Amplitude Modulation (QAM)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "QAM combines amplitude and phase variation. 16-QAM: 4 amplitudes × 4 phases = 16 symbols = 4 bits per symbol."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constellation diagram — 16-QAM (simplified):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "         Q\n         |\n  0010 0110 | 1110 1010\n  0011 0111 | 1111 1011\n  ---+------+------+--- I\n  0001 0101 | 1101 1001\n  0000 0100 | 1100 1000\n         |\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each point encodes a unique 4-bit pattern. Gray coding ensures adjacent symbols differ by only 1 bit (minimizes bit errors)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bit rate calculation:"
      }), " Bit rate = Baud rate × log₂(M)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Modulation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "M (Symbols)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bits/Symbol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Baud Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bit Rate"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BPSK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2400 bps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QPSK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4800 bps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8-PSK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7200 bps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16-QAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9600 bps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "64-QAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14400 bps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "256-QAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "19200 bps"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode — QPSK Modulator"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION qpskModulate(bits, carrierFreq, sampleRate, symbolDuration):\n    signal = []\n    samplesPerSymbol = sampleRate * symbolDuration\n    // Process 2 bits at a time\n    FOR i = 0 TO LENGTH(bits) - 1 STEP 2:\n        dibit = (bits[i] << 1) | bits[i+1]\n        // Map dibit to I, Q\n        IF dibit == 0b00: I = +1, Q = +1   // 45°\n        ELSE IF dibit == 0b01: I = -1, Q = +1  // 135°\n        ELSE IF dibit == 0b10: I = -1, Q = -1  // 225°\n        ELSE IF dibit == 0b11: I = +1, Q = -1  // 315°\n        // Generate carrier\n        FOR j = 0 TO samplesPerSymbol - 1:\n            t = j / sampleRate\n            s = I * COS(2 * PI * carrierFreq * t) - Q * SIN(2 * PI * carrierFreq * t)\n            signal.APPEND(s)\n    RETURN signal\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "275-modulation-comparison-table",
      children: "2.7.5 Modulation Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Modulation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bits/Symbol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BW Efficiency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SNR Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Error Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (10 dB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (noise-sensitive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optical fiber, RFID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FSK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (12 dB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bluetooth (GFSK), pagers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BPSK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 bps/Hz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (8 dB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lowest PSK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Satellite, deep space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QPSK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 bps/Hz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (12 dB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Satellite TV, LTE, Wi-Fi"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8-PSK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 bps/Hz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (16 dB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy satellite"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16-QAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bps/Hz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (18 dB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DOCSIS, LTE, 802.11a/g"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "64-QAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 bps/Hz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high (22 dB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DOCSIS, Wi-Fi 5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "256-QAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bps/Hz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high (26 dB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DOCSIS 3.1, Wi-Fi 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1024-QAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 bps/Hz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extreme (30 dB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DOCSIS 4.0, 5G NR"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D Table — Modulation Schemes:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scheme"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplest hardware; cheap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very noise-sensitive; amplitude varies with distance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FSK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Noise-immune (frequency detection); constant envelope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower spectral efficiency; requires more bandwidth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BPSK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most robust PSK; simplest PSK to implement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only 1 bit/symbol — lowest throughput"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QPSK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2× throughput of BPSK at same BW; good noise performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phase ambiguity needs differential encoding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QAM (high-order)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high spectral efficiency (8+ bps/Hz)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires high SNR; complex transmitter/receiver; sensitive to linearity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "276-c-implementation--modulation-simulation",
      children: "2.7.6 C++ Implementation — Modulation Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <cmath>\n#include <complex>\n\n#ifndef M_PI\n#define M_PI 3.14159265358979323846\n#endif\n\nenum ModType { ASK, FSK, BPSK, QPSK, QAM16 };\n\nstd::vector<double> modulate(const std::vector<int>& bits, ModType type,\n                              double carrierFreq, double sampleRate, double bitDuration) {\n    std::vector<double> signal;\n    int samplesPerSymbol = static_cast<int>(sampleRate * bitDuration);\n    int bitsPerSymbol = 1;\n\n    if (type == QPSK) bitsPerSymbol = 2;\n    else if (type == QAM16) bitsPerSymbol = 4;\n\n    for (size_t i = 0; i < bits.size(); i += bitsPerSymbol) {\n        double I = 0, Q = 0;\n\n        // Determine I/Q based on modulation type\n        if (type == ASK) {\n            int bit = bits[i];\n            double amp = (bit == 1) ? 1.0 : 0.1;\n            I = amp;\n        } else if (type == FSK) {\n            double freq = (bits[i] == 1) ? carrierFreq : carrierFreq * 2.0;\n            for (int j = 0; j < samplesPerSymbol; ++j) {\n                double t = j / sampleRate;\n                signal.push_back(std::cos(2 * M_PI * freq * t));\n            }\n            continue;\n        } else if (type == BPSK) {\n            I = (bits[i] == 1) ? 1.0 : -1.0;\n        } else if (type == QPSK) {\n            int dibit = (bits[i] << 1) | bits[i+1];\n            if (dibit == 0) { I = 1; Q = 1; }\n            else if (dibit == 1) { I = -1; Q = 1; }\n            else if (dibit == 2) { I = -1; Q = -1; }\n            else { I = 1; Q = -1; }\n        } else if (type == QAM16) {\n            // Simplified Gray-coded 16-QAM\n            static const double l[] = {-3, -1, 1, 3};\n            int sym = (bits[i] << 3) | (bits[i+1] << 2) |\n                       (bits[i+2] << 1) | bits[i+3];\n            I = l[sym >> 2];\n            Q = l[sym & 3];\n        }\n\n        // Generate carrier for I/Q schemes\n        if (type != FSK) {\n            double norm = std::sqrt(I*I + Q*Q);\n            if (norm > 0) { I /= norm; Q /= norm; }  // Normalize for PSK\n            for (int j = 0; j < samplesPerSymbol; ++j) {\n                double t = j / sampleRate;\n                double s = I * std::cos(2 * M_PI * carrierFreq * t)\n                           - Q * std::sin(2 * M_PI * carrierFreq * t);\n                signal.push_back(s);\n            }\n        }\n    }\n    return signal;\n}\n\nint main() {\n    std::vector<int> bits = {1, 0, 1, 1, 0, 0, 1, 0};\n\n    auto ask = modulate(bits, ASK, 10.0, 100.0, 0.5);\n    auto bpsk = modulate(bits, BPSK, 10.0, 100.0, 0.5);\n\n    // Print first 20 samples\n    std::cout << \"ASK samples (first 20): \";\n    for (int i = 0; i < 20 && i < (int)ask.size(); ++i)\n        std::cout << ask[i] << \" \";\n    std::cout << std::endl;\n\n    std::cout << \"BPSK samples (first 20): \";\n    for (int i = 0; i < 20 && i < (int)bpsk.size(); ++i)\n        std::cout << bpsk[i] << \" \";\n    std::cout << std::endl;\n\n    std::cout << \"Bits per symbol: BPSK=1, QPSK=2, 16-QAM=4\" << std::endl;\n    std::cout << \"For 2400 baud: BPSK=2400bps, QPSK=4800bps, 16-QAM=9600bps\" << std::endl;\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "277-python-implementation--modulation-simulator",
      children: "2.7.7 Python Implementation — Modulation Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import math\nimport cmath\nfrom typing import List, Tuple\n\n\ndef modulate(bits: List[int], mod_type: str, carrier_freq: float = 10.0,\n             sample_rate: float = 100.0, bit_duration: float = 0.5) -> List[float]:\n    signal = []\n    spp = int(sample_rate * bit_duration)  # samples per symbol\n\n    if mod_type == \"ask\":\n        for bit in bits:\n            amp = 1.0 if bit == 1 else 0.1\n            for j in range(spp):\n                t = j / sample_rate\n                signal.append(amp * math.cos(2 * math.pi * carrier_freq * t))\n\n    elif mod_type == \"fsk\":\n        for bit in bits:\n            freq = carrier_freq if bit == 1 else carrier_freq * 2\n            for j in range(spp):\n                t = j / sample_rate\n                signal.append(math.cos(2 * math.pi * freq * t))\n\n    elif mod_type == \"bpsk\":\n        for bit in bits:\n            i_val = 1.0 if bit == 1 else -1.0\n            q_val = 0.0\n            for j in range(spp):\n                t = j / sample_rate\n                signal.append(i_val * math.cos(2 * math.pi * carrier_freq * t)\n                              - q_val * math.sin(2 * math.pi * carrier_freq * t))\n\n    elif mod_type == \"qpsk\":\n        iq_map = {0: (1, 1), 1: (-1, 1), 2: (-1, -1), 3: (1, -1)}\n        for i in range(0, len(bits) - 1, 2):\n            dibit = (bits[i] << 1) | bits[i+1]\n            i_val, q_val = iq_map[dibit]\n            for j in range(spp):\n                t = j / sample_rate\n                signal.append(i_val * math.cos(2 * math.pi * carrier_freq * t)\n                              - q_val * math.sin(2 * math.pi * carrier_freq * t))\n\n    elif mod_type == \"qam16\":\n        # Gray-coded 16 QAM mapping\n        levels = [-3, -1, 1, 3]\n        for i in range(0, len(bits) - 3, 4):\n            sym = (bits[i] << 3) | (bits[i+1] << 2) | (bits[i+2] << 1) | bits[i+3]\n            i_val = levels[sym >> 2]\n            q_val = levels[sym & 3]\n            for j in range(spp):\n                t = j / sample_rate\n                signal.append(i_val * math.cos(2 * math.pi * carrier_freq * t)\n                              - q_val * math.sin(2 * math.pi * carrier_freq * t))\n\n    return signal\n\n\ndef bits_per_symbol(mod_type: str) -> int:\n    return {\"ask\": 1, \"fsk\": 1, \"bpsk\": 1, \"qpsk\": 2, \"qam16\": 4,\n            \"qam64\": 6, \"qam256\": 8}.get(mod_type, 1)\n\n\ndef symbol_rate_to_bit_rate(baud: int, mod_type: str) -> int:\n    return baud * bits_per_symbol(mod_type)\n\n\nif __name__ == \"__main__\":\n    bits = [1, 0, 1, 1, 0, 0, 1, 0]\n    ask = modulate(bits, \"ask\")\n    print(f\"ASK first 12 samples: {[f'{x:.3f}' for x in ask[:12]]}\")\n\n    bpsk = modulate(bits, \"bpsk\")\n    print(f\"BPSK first 12 samples: {[f'{x:.3f}' for x in bpsk[:12]]}\")\n\n    qpsk = modulate(bits, \"qpsk\")\n    print(f\"QPSK first 12 samples: {[f'{x:.3f}' for x in qpsk[:12]]}\")\n\n    print(f\"\\nBit rate comparison (2400 baud):\")\n    for m in [\"bpsk\", \"qpsk\", \"qam16\", \"qam64\", \"qam256\"]:\n        br = symbol_rate_to_bit_rate(2400, m)\n        print(f\"  {m.upper():8s}: {br} bps\")\n\n    # SNR vs BER conceptual\n    print(\"\\nHigher QAM = more bits/symbol but requires better SNR\")\n    print(\"16-QAM: 4 bps/Hz, needs ~18 dB SNR\")\n    print(\"256-QAM: 8 bps/Hz, needs ~26 dB SNR\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis — Modulation:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "ASK modulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n · spp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n · spp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For each bit, generate spp samples of carrier × amplitude"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FSK modulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n · spp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n · spp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Similar to ASK, but switches frequency per symbol"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BPSK/QPSK modulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n · spp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n · spp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiply I/Q by carrier, sum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QAM modulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n · spp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n · spp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Map to constellation point, then carrier modulation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Demodulation (envelope)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n · spp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Track amplitude envelope over time"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases — Modulation:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Carrier phase offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tx and Rx oscillators not synchronized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use differential encoding or pilot tones"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frequency offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doppler shift (mobile), clock drift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AFC (automatic frequency control)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Amplitude compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-linear amplifier (especially QAM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use linear amplifier or pre-distortion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Phase noise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jittery oscillator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use low-phase-noise PLL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multipath fading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reflected signals arrive at different times"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OFDM (802.11a/g/n/ac/ax), equalizer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SNR too low for QAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distance, interference, weak signal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fall back to lower-order QAM or BPSK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inter-symbol interference (ISI)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Channel dispersion spreads symbol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use raised-cosine filter, equalizer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "28-multiplexing",
      children: "2.8 Multiplexing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " Multiplexing is like a highway with multiple lanes. FDM is like dividing the highway into color-coded lanes — red cars use the red lane, blue cars use the blue lane (different frequencies). TDM is like a single-lane road where cars take turns — red for 10 seconds, then blue for 10 seconds. WDM is like the same road painted with different colors of light — invisible to each other. CDM is like everyone speaking different languages in the same room — you only understand your language, the rest sounds like noise."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "281-frequency-division-multiplexing-fdm",
      children: "2.8.1 Frequency-Division Multiplexing (FDM)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FDM assigns each signal a distinct frequency band (subchannel). Guard bands between subchannels prevent interference."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A radio receiver — different stations broadcast on different frequencies simultaneously. You tune your dial to 103.5 MHz to hear one station while 101.1 MHz carries another."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps for FDM:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Allocate a frequency band to each input signal with guard bands between them."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Modulate each signal onto its assigned carrier frequency."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sum all modulated signals and transmit over the shared medium."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "At receiver, bandpass filters separate each channel."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Demodulate each channel to recover the original signal."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode — FDM Multiplexer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION fdmMultiplex(signals, carrierFreqs, sampleRate, guardBand_Hz):\n    // signals: list of baseband signals (each as array of samples)\n    // carrierFreqs: list of carrier frequencies (one per signal)\n    multiplexed = ARRAY of zeros, length = MAX_LENGTH(signals)\n    FOR i = 0 TO LENGTH(signals) - 1:\n        FOR t = 0 TO LENGTH(signals[i]) - 1:\n            carrier = COS(2 * PI * carrierFreqs[i] * t / sampleRate)\n            multiplexed[t] += signals[i][t] * carrier\n    RETURN multiplexed\n\nFUNCTION fdmDemultiplex(multiplexed, carrierFreq, sampleRate):\n    // Apply bandpass filter centered at carrierFreq\n    filtered = BAND_PASS(multiplexed, carrierFreq - guard/2, carrierFreq + guard/2)\n    // Demodulate by multiplying by carrier and low-pass filtering\n    demodulated = filtered * COS(2 * PI * carrierFreq * t / sampleRate)\n    RETURN LOW_PASS(demodulated, cutoffFreq)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — FDM with 2 signals and guard bands:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Signal 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Signal 2"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Baseband BW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 kHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 kHz"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Carrier frequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 kHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 kHz"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Guard band"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 kHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 kHz"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Occupied band"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7–13 kHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13–19 kHz"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total bandwidth needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "19 − 7 = 12 kHz"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "FDM A&D Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Simple, mature technology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guard bands waste spectrum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous transmission (no waiting)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware filters drift with temperature"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Each channel isolated (no sharing jitter)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited number of channels (filter crosstalk)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works with analog signals directly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed allocation — inefficient for bursty traffic"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "282-time-division-multiplexing-tdm",
      children: "2.8.2 Time-Division Multiplexing (TDM)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TDM interleaves bits or frames from multiple sources in time. Synchronous TDM: fixed time slots. Statistical TDM: demand-assigned slots."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A rotating restaurant — each table (channel) gets a turn at the window view. In synchronous TDM, each table gets exactly 10 minutes regardless of whether anyone is seated. In statistical TDM, empty tables are skipped."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps for synchronous TDM:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine number of input channels (N)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define frame length = N × slot duration."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each frame, read one unit (bit/byte) from each channel in round-robin order."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transmit the interleaved frame."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "At receiver, de-interleave by extracting channel data based on slot position."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode — Synchronous TDM"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION tdmMultiplex(channels, slotDuration_samples):\n    // channels: list of arrays (each channel's data)\n    // slotDuration_samples: samples per slot\n    frame = []\n    maxFrames = MIN_LENGTH(channels) / slotDuration_samples\n    FOR frameNum = 0 TO maxFrames - 1:\n        FOR channel = 0 TO LENGTH(channels) - 1:\n            start = frameNum * slotDuration_samples\n            FOR i = 0 TO slotDuration_samples - 1:\n                frame.APPEND(channels[channel][start + i])\n    RETURN frame\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — TDM with 3 channels, 4 samples per slot:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Frame"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Slot 1 (Ch1)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Slot 2 (Ch2)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Slot 3 (Ch3)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch1[0..3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch2[0..3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch3[0..3]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch1[4..7]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch2[4..7]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch3[4..7]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch1[8..11]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch2[8..11]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch3[8..11]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If Ch2 has no data in frame 2 (synchronous): slots are still allocated (wasted)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Statistical TDM improvement:"
      }), " Each slot carries a channel identifier. Empty channels are skipped. Header overhead: 1–2 bytes per slot for channel ID."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TDM A&D Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Simple framing and synchronization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wasted slots if channels silent (synchronous)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No interference between channels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed latency (must wait for frame completion)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Good for constant-bit-rate traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires frame synchronization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to implement in hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not efficient for bursty variable-rate traffic"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "283-wavelength-division-multiplexing-wdm",
      children: "2.8.3 Wavelength-Division Multiplexing (WDM)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WDM is FDM applied to optical fiber. Each wavelength (color) of light carries an independent data stream."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A prism splitting white light into a rainbow. Each color in the rainbow is a separate data channel. WDM is like having 80 colored lasers all shining through the same fiber simultaneously — at the far end, a prism-like device separates them back into individual colors."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CWDM vs DWDM:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CWDM"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DWDM"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Channel spacing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.8 nm (100 GHz) or less"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max channels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18 (per ITU G.694.2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80+ (per ITU G.694.1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wavelength range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1271–1611 nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C-band (1530–1565 nm) + L-band (1565–1625 nm)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Laser cooling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uncooled (cheaper)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cooled (expensive, precise)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~80 km"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2000 km with amplifiers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost per lambda"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metro, enterprise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-haul, submarine"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps for DWDM system design:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine aggregate capacity needed (e.g., 8 Tbps)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Divide by per-channel rate (e.g., 100 Gbps) → 80 channels needed."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Select DWDM grid (100 GHz → 0.8 nm spacing covers C-band)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Specify optical amplifiers (EDFA) every 80–100 km."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add dispersion compensation modules every 400–500 km."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include optical add-drop multiplexers (OADMs) at intermediate sites."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "WDM A&D Table:"
      })
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
            children: "Enormous aggregate capacity (Tbps per fiber)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expensive optics (especially DWDM)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No electronic processing per channel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires precise wavelength control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Each channel operates independently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amplifiers must cover entire band"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalable — add wavelengths as needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chromatic dispersion accumulates differently per λ"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compatible with existing fiber plant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raman crosstalk between channels at high power"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "284-code-division-multiplexing-cdm",
      children: "2.8.4 Code-Division Multiplexing (CDM)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CDM assigns each transmitter a unique spreading code. The transmitter multiplies each bit by the chip sequence, spreading the signal across a wider bandwidth."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A cocktail party where each conversation pair has a unique language. Pair 1 speaks English: every word is repeated 10 times very fast (spreading). Pair 2 speaks French: also repeated 10 times. Everyone talks at once. The English speaker's ear reconstructs the original English by only understanding their own code; French sounds like noise."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps for CDMA encoding:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign each user a unique orthogonal spreading code (chip sequence), e.g., (+1, −1, +1, −1)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For bit = 1: transmit the chip sequence as-is."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For bit = 0: transmit the complement (negative) of the chip sequence."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All users transmit simultaneously."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Receiver multiplies the combined signal by the desired user's chip sequence and sums."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mathematical example — 2 users:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "User A code: (1, −1, 1, −1)\nUser B code: (1, 1, −1, −1)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "User A sends bit 1: → (1, −1, 1, −1)\nUser B sends bit 0: → (−1, −1, 1, 1)\nCombined signal: (0, −2, 2, 0)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To decode User A: multiply combined × User A code\n(0×1 + (−2)×(−1) + 2×1 + 0×(−1)) / 4 = (0 + 2 + 2 + 0) / 4 = 1 → bit 1"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To decode User B: multiply combined × User B code\n(0×1 + (−2)×1 + 2×(−1) + 0×(−1)) / 4 = (0 − 2 − 2 + 0) / 4 = −1 → bit 0 ✓"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode — CDMA Encoder/Decoder"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION cdmaEncode(bits, chipSequence):\n    encoded = []\n    FOR EACH bit IN bits:\n        IF bit == 1:\n            encoded.APPEND(chipSequence)   // Send chips as-is\n        ELSE:\n            encoded.APPEND(-chipSequence)  // Send complement\n    RETURN FLATTEN(encoded)\n\nFUNCTION cdmaDecode(combinedSignal, chipSequence, chipsPerBit):\n    decoded = []\n    FOR i = 0 TO LENGTH(combinedSignal) - 1 STEP chipsPerBit:\n        correlation = 0\n        FOR j = 0 TO chipsPerBit - 1:\n            correlation += combinedSignal[i + j] * chipSequence[j]\n        average = correlation / chipsPerBit\n        decoded.APPEND(average > 0 ? 1 : 0)\n    RETURN decoded\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CDM A&D Table:"
      })
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
            children: "All users share same frequency simultaneously"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code orthogonality imperfect in practice (near-far problem)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resistant to narrowband interference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Power control critical (near-far problem)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Soft capacity (more users = gradual degradation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower peak data rate than dedicated channels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inherent security (unknown code = garbled)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code synchronization required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multipath resistant (RAKE receiver)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex transceiver (correlation math)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "285-multiplexing-comparison-table",
      children: "2.8.5 Multiplexing Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FDM"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TDM"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "WDM"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CDM"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wavelength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resource slice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequency band"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time slot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Light wavelength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spreading code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Guard needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guard bands"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guard time (between slots)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guard band (nm spacing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Orthogonal codes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (filters isolate)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (frame sync)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (passive mux/demux)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (code sync)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited by filter crosstalk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited by slot count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80+ (DWDM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Soft (more users = more noise)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Burst traffic handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (wasted BW)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Statistical TDM helps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (each λ independent)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (shared medium)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (filters)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (switches)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (precision lasers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high (correlators)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (guard bands)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (no guard overhead)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high (tight spacing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (spreading expands BW)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Radio, TV, cable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SONET, T1/E1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-haul fiber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3G cellular (CDMA)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "286-c-implementation--multiplexer-simulation",
      children: "2.8.6 C++ Implementation — Multiplexer Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <cmath>\n#include <numeric>\n\n#ifndef M_PI\n#define M_PI 3.14159265358979323846\n#endif\n\n// Simulate TDM multiplexer\nstd::vector<int> tdmMux(const std::vector<std::vector<int>>& channels) {\n    std::vector<int> frame;\n    size_t maxLen = 0;\n    for (const auto& ch : channels)\n        maxLen = std::max(maxLen, ch.size());\n\n    for (size_t i = 0; i < maxLen; ++i) {\n        for (const auto& ch : channels) {\n            if (i < ch.size())\n                frame.push_back(ch[i]);\n            else\n                frame.push_back(0);  // pad empty slots\n        }\n    }\n    return frame;\n}\n\n// Separate TDM into channels\nstd::vector<std::vector<int>> tdmDemux(const std::vector<int>& frame, int numChannels) {\n    std::vector<std::vector<int>> channels(numChannels);\n    for (size_t i = 0; i < frame.size(); ++i) {\n        channels[i % numChannels].push_back(frame[i]);\n    }\n    return channels;\n}\n\n// Simulate CDMA encoding\nstd::vector<int> cdmaEncode(const std::vector<int>& bits, const std::vector<int>& code) {\n    std::vector<int> result;\n    for (int bit : bits) {\n        for (int chip : code) {\n            result.push_back(bit == 1 ? chip : -chip);\n        }\n    }\n    return result;\n}\n\n// Sum multiple CDMA signals\nstd::vector<int> cdmaCombine(const std::vector<std::vector<int>>& signals) {\n    size_t len = signals[0].size();\n    std::vector<int> combined(len, 0);\n    for (const auto& sig : signals) {\n        for (size_t i = 0; i < len; ++i)\n            combined[i] += sig[i];\n    }\n    return combined;\n}\n\n// Decode CDMA signal\nstd::vector<int> cdmaDecode(const std::vector<int>& combined,\n                             const std::vector<int>& code, int chipsPerBit) {\n    std::vector<int> decoded;\n    for (size_t i = 0; i < combined.size(); i += chipsPerBit) {\n        int correlation = 0;\n        for (int j = 0; j < chipsPerBit; ++j) {\n            correlation += combined[i + j] * code[j];\n        }\n        decoded.push_back(correlation > 0 ? 1 : 0);\n    }\n    return decoded;\n}\n\nint main() {\n    // TDM example\n    std::vector<std::vector<int>> channels = {\n        {1, 0, 1},   // Channel A\n        {0, 1, 0},   // Channel B\n        {1, 1, 0}    // Channel C\n    };\n\n    auto tdmFrame = tdmMux(channels);\n    std::cout << \"TDM frame: \";\n    for (int v : tdmFrame) std::cout << v;\n    std::cout << std::endl;\n\n    auto tdmOut = tdmDemux(tdmFrame, 3);\n    for (int i = 0; i < 3; ++i) {\n        std::cout << \"Channel \" << char('A' + i) << \": \";\n        for (int v : tdmOut[i]) std::cout << v;\n        std::cout << std::endl;\n    }\n\n    // CDMA example\n    std::vector<int> codeA = {1, -1, 1, -1};  // Walsh code for user A\n    std::vector<int> codeB = {1, 1, -1, -1};   // Walsh code for user B\n\n    auto sigA = cdmaEncode({1, 0, 1, 1}, codeA);\n    auto sigB = cdmaEncode({0, 1, 0, 1}, codeB);\n    auto combined = cdmaCombine({sigA, sigB});\n\n    auto decodedA = cdmaDecode(combined, codeA, 4);\n    auto decodedB = cdmaDecode(combined, codeB, 4);\n\n    std::cout << \"\\nCDMA combined signal (first 8 chips): \";\n    for (int i = 0; i < 8 && i < (int)combined.size(); ++i)\n        std::cout << combined[i] << \" \";\n    std::cout << std::endl;\n\n    std::cout << \"Decoded User A: \";\n    for (int v : decodedA) std::cout << v;\n    std::cout << std::endl;\n\n    std::cout << \"Decoded User B: \";\n    for (int v : decodedB) std::cout << v;\n    std::cout << std::endl;\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "287-python-implementation--multiplexer-simulator",
      children: "2.8.7 Python Implementation — Multiplexer Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import List\n\n\ndef tdm_multiplex(channels: List[List[int]]) -> List[int]:\n    \"\"\"Synchronous TDM multiplexer.\"\"\"\n    max_len = max(len(ch) for ch in channels)\n    frame = []\n    for i in range(max_len):\n        for ch in channels:\n            frame.append(ch[i] if i < len(ch) else 0)\n    return frame\n\n\ndef tdm_demultiplex(frame: List[int], num_channels: int) -> List[List[int]]:\n    \"\"\"Separate TDM frame back into channels.\"\"\"\n    channels = [[] for _ in range(num_channels)]\n    for i, val in enumerate(frame):\n        channels[i % num_channels].append(val)\n    return channels\n\n\ndef cdma_encode(bits: List[int], code: List[int]) -> List[int]:\n    \"\"\"CDMA encode bits using spreading code.\"\"\"\n    result = []\n    for bit in bits:\n        result.extend([c if bit == 1 else -c for c in code])\n    return result\n\n\ndef cdma_decode(combined: List[int], code: List[int]) -> List[int]:\n    \"\"\"CDMA decode from combined signal.\"\"\"\n    cl = len(code)\n    decoded = []\n    for i in range(0, len(combined), cl):\n        corr = sum(combined[i+j] * code[j] for j in range(cl))\n        decoded.append(1 if corr > 0 else 0)\n    return decoded\n\n\ndef cdma_sum_signals(signals: List[List[int]]) -> List[int]:\n    \"\"\"Sum multiple CDMA signals.\"\"\"\n    return [sum(s[i] for s in signals) for i in range(len(signals[0]))]\n\n\nif __name__ == \"__main__\":\n    # TDM example\n    channels = [[1, 0, 1], [0, 1, 0], [1, 1, 0]]\n    frame = tdm_multiplex(channels)\n    print(f\"TDM frame: {''.join(str(v) for v in frame)}\")\n\n    out = tdm_demultiplex(frame, 3)\n    for i, ch in enumerate(out):\n        print(f\"Channel {chr(65+i)}: {''.join(str(v) for v in ch)}\")\n\n    # CDMA example with Walsh codes (length 4, orthogonal)\n    code_a = [1, -1, 1, -1]   # Walsh (0,3) or H[0]\n    code_b = [1, 1, -1, -1]   # Walsh (0,1) or H[1]\n    code_c = [1, -1, -1, 1]   # Walsh (0,2) or H[2]\n\n    sig_a = cdma_encode([1, 0, 1, 1], code_a)\n    sig_b = cdma_encode([0, 1, 0, 1], code_b)\n    sig_c = cdma_encode([1, 1, 0, 0], code_c)\n\n    combined = cdma_sum_signals([sig_a, sig_b, sig_c])\n    print(f\"\\nCDMA combined (first 8): {combined[:8]}\")\n\n    print(f\"Decoded A: {''.join(str(v) for v in cdma_decode(combined, code_a))}\")\n    print(f\"Decoded B: {''.join(str(v) for v in cdma_decode(combined, code_b))}\")\n    print(f\"Decoded C: {''.join(str(v) for v in cdma_decode(combined, code_c))}\")\n\n    # Verify Walsh code orthogonality\n    dot_ab = sum(ca * cb for ca, cb in zip(code_a, code_b))\n    print(f\"\\nOrthogonality check: A·B = {dot_ab} (0 = orthogonal)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis — Multiplexing:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "TDM multiplex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(C × F)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(C × F)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C channels, F frames, each slot visited once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TDM demultiplex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single pass: modulo distribution per slot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FDM multiplex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(C × N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each channel's samples multiplied by carrier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CDMA encode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(B × K)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(B × K)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B bits × K chips per bit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CDMA decode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correlation over all chips, N = B × K"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CDMA sum signals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(C × N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add C signals element-wise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Walsh code generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(K²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(K²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive Hadamard matrix construction"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases — Multiplexing:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Near-far problem (CDMA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong signal drowns weak one"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tight power control (CDMA cellular)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code collision (CDMA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-orthogonal codes, code reuse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assign orthogonal Walsh codes; limit reuse factor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Clock drift (TDM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sender/receiver frame misalignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stuffing bits, frame alignment words, PLL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Filter drift (FDM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temperature changes shift filter passband"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temperature-controlled oscillators, pilot tones"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Four-wave mixing (WDM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-power channels generate intermodulation in fiber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce per-channel power, uneven channel spacing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chromatic dispersion (WDM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Different λs travel at different speeds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dispersion compensation modules (DCM)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "29-switching",
      children: "2.9 Switching"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "291-circuit-switching",
      children: "2.9.1 Circuit Switching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Circuit switching establishes a dedicated path between endpoints before data transmission begins. Resources along the path are reserved for the duration of the connection."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " Making a phone call. You dial, the network establishes a dedicated line, you talk, then hang up. The line is yours the whole time — even if you're silent, nobody else can use it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Circuit establishment:"
        }), " Sender sends a request. Switches find and reserve a path. Receiver acknowledges."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data transfer:"
        }), " Data flows continuously along the reserved path."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Circuit teardown:"
        }), " Either party signals disconnect. Switches release resources."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Circuit Switched Call Across 3 Switches:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Switch 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Switch 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Switch 3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Call request from A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port 1→3 reserved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S1 forwards request"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port 1→3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port 2→4 reserved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S2 forwards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port 1→3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port 2→4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port 1→2 reserved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ringing B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B answers → data flows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100 s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conversation (data)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100 s + 50 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Release"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Release"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Release"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Teardown"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "292-packet-switching",
      children: "2.9.2 Packet Switching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Packet switching breaks data into packets that travel independently through the network. Two modes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Datagram (connectionless):"
      }), " Each packet routed independently. Robust to failures; packets may arrive out of order.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Virtual circuit (connection-oriented):"
      }), " Path established once; all packets follow it. MPLS uses this model."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " Mailing letters (datagram). Each letter goes through the postal system independently. Some may arrive out of order. A courier delivery (virtual circuit) — the courier drives the same route every time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison — Circuit vs Packet:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Circuit Switching"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Packet Switching (Datagram)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dedicated, reserved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared, dynamic per packet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Setup delay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (call setup)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May be out of order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QoS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic, constant delay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best-effort, variable delay"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Efficiency (bursty)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (wasted idle slots)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (statistical multiplexing)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Failure resilience"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (path failure = call drop)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (reroute around failure)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (no headers per packet)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (headers per packet)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Voice calls (PSTN)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internet (IP)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "293-message-switching",
      children: "2.9.3 Message Switching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Message switching forwards entire messages (potentially megabytes) from switch to switch without segmentation. Each switch stores the entire message before forwarding."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A relay race where one runner carries the baton the entire way — he runs from start to first transfer point, hands off, then the next runner continues with the same baton."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison — All Switching Types:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Circuit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Packet (Datagram)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Packet (VC)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Message"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Path established"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per packet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per message"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Store-and-forward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (per packet)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (per packet)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (per message)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer requirement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per packet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per packet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entire message"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (reserved)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (store big message)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Head-of-line blocking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (separate packets)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (big msg blocks)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "210-the-telephone-system",
      children: "2.10 The Telephone System"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The PSTN was originally designed for analog voice using circuit switching. Modern PSTN has a digital backbone with analog only on the last mile (local loop)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture components:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Subscriber loop (local loop):"
        }), " Twisted pair from customer to central office (up to 5.5 km)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Central Office (CO):"
        }), " Houses switches, DSLAMs, voice trunks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Toll office:"
        }), " Connects central offices over long-distance trunks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SS7 network:"
        }), " Out-of-band signaling for call setup, teardown, billing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2101-digital-subscriber-line-dsl",
      children: "2.10.1 Digital Subscriber Line (DSL)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DSL enables broadband Internet over the same twisted-pair local loop used for telephone service. Uses frequency-division multiplexing:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "0–4 kHz:"
        }), " Voice (POTS — Plain Old Telephone Service)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "25 kHz–138 kHz:"
        }), " Upstream data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "138 kHz–1.1 MHz:"
        }), " Downstream data (ADSL)."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "DSL Variant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max Downstream"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max Upstream"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max Distance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ADSL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.5 km"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ADSL2+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.3 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.5 km"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VDSL2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 Mbps (symmetric)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500 m"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "G.fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "250 m"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D — DSL vs Fiber vs Cable:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DSL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cable (DOCSIS)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fiber (GPON)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Twisted pair"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coaxial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optical fiber"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Topology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Point-to-point"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared bus (all subscribers in neighborhood)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Point-to-multipoint (splitter)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shared bandwidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (dedicated line)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (neighborhood shares CMTS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (split ratio up to 1:64)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distance limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.5 km (ADSL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 km ring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 km from OLT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10–100 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100–1000 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100–1000 Mbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Symmetry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asymmetric dominant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asymmetric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Symmetric (business) or asymmetric"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2102-sonetsdh",
      children: "2.10.2 SONET/SDH"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Synchronous Optical Networking (SONET) / Synchronous Digital Hierarchy (SDH) provides standardized optical transport."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "SONET Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SDH Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Line Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Payload"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STS-1 / OC-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "51.84 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50.112 Mbps (VT group)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STS-3 / OC-3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STM-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "155.52 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "150.336 Mbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STS-12 / OC-12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STM-4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "622.08 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "601.344 Mbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STS-48 / OC-48"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STM-16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.488 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.405 Gbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STS-192 / OC-192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STM-64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9.953 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9.621 Gbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STS-768 / OC-768"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STM-256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "39.813 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "38.486 Gbps"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SONET frame structure (STS-1, 125 µs, 810 bytes):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Section overhead: 9 bytes (framing, error monitoring, orderwire)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Line overhead: 18 bytes (APS, line error, data channels)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Path overhead: 1 byte per column (trace, status, signal label)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Synchronous payload envelope (SPE): 774 bytes (user data)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "211-interview-corner",
      children: "2.11 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nyquist-theorem-vs-shannon-theorem",
      children: "Nyquist Theorem vs Shannon Theorem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Nyquist Theorem (noiseless channel):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maximum bit rate = 2 × B × log₂(M)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Where B = bandwidth (Hz), M = number of signal levels."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Example: Channel with 3 kHz bandwidth, 8-level signaling: 2 × 3000 × log₂(8) = 2 × 3000 × 3 = 18,000 bps."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Shannon Theorem (noisy channel):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maximum bit rate = B × log₂(1 + S/N)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Where S/N = signal-to-noise ratio (linear, not dB)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SNR_dB = 10 × log₁₀(S/N_linear)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Conversion:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SNR_dB = 10 → S/N_linear = 10^(10/10) = 10."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shannon capacity over 3 kHz channel with 10 dB SNR: 3000 × log₂(1 + 10) = 3000 × log₂(11) ≈ 3000 × 3.459 = 10,377 bps."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison — Nyquist vs Shannon:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Nyquist"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Shannon"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Channel model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Noiseless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Noisy (Additive White Gaussian Noise)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Formula"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2B log₂(M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B log₂(1 + S/N)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth, signal levels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth, SNR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Example (3 kHz, 8 levels)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18 kbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Example (3 kHz, 10 dB SNR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10.4 kbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Practical limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware-limited (levels)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physics-limited (noise floor)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Relationship"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nyquist gives upper bound for given M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shannon gives absolute upper bound regardless of M"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q: Can 256-QAM on a 6 MHz cable channel (30 dB SNR) exceed the Shannon limit?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nyquist: 2 × 6e6 × log₂(256) = 2 × 6e6 × 8 = 96 Mbps."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shannon: 6e6 × log₂(1 + 10^(30/10)) = 6e6 × log₂(1001) ≈ 6e6 × 9.97 = 59.8 Mbps."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Answer: 256-QAM (96 Mbps) exceeds Shannon limit for 30 dB SNR. Practical systems must reduce rate or use higher SNR. 64-QAM at 48 Mbps is achievable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-shannoncapacitycalculator",
      children: "TypeScript Implementation: ShannonCapacityCalculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following TypeScript class computes channel capacity using the Nyquist and Shannon theorems, with utilities for SNR conversion."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * ShannonCapacityCalculator — Computes channel capacity using both\n * Nyquist (noiseless) and Shannon (noisy) theorems.\n */\ninterface CapacityResult {\n  nyquistCapacityMbps: number;\n  shannonCapacityMbps: number;\n  bandwidthMHz: number;\n  snrDb: number;\n  signalLevels: number;\n  practicalModulation: string;\n}\n\nclass ShannonCapacityCalculator {\n  /** Convert SNR from dB to linear scale */\n  static snrDbToLinear(snrDb: number): number {\n    return Math.pow(10, snrDb / 10);\n  }\n\n  /** Convert SNR from linear to dB */\n  static snrLinearToDb(snrLinear: number): number {\n    return 10 * Math.log10(snrLinear);\n  }\n\n  /**\n   * Nyquist capacity: C = 2B × log₂(M)\n   * @param bandwidthHz - Channel bandwidth in Hz\n   * @param levels - Number of signal levels (M)\n   */\n  static nyquistCapacity(bandwidthHz: number, levels: number): number {\n    return 2 * bandwidthHz * Math.log2(levels);\n  }\n\n  /**\n   * Shannon capacity: C = B × log₂(1 + SNR)\n   * @param bandwidthHz - Channel bandwidth in Hz\n   * @param snrDb - Signal-to-noise ratio in dB\n   */\n  static shannonCapacity(bandwidthHz: number, snrDb: number): number {\n    const snrLinear = this.snrDbToLinear(snrDb);\n    return bandwidthHz * Math.log2(1 + snrLinear);\n  }\n\n  /** Recommend practical modulation based on SNR */\n  static recommendModulation(snrDb: number): string {\n    if (snrDb >= 30) return '256-QAM (8 bps/Hz)';\n    if (snrDb >= 25) return '64-QAM (6 bps/Hz)';\n    if (snrDb >= 20) return '16-QAM (4 bps/Hz)';\n    if (snrDb >= 15) return 'QPSK (2 bps/Hz)';\n    if (snrDb >= 10) return 'BPSK (1 bps/Hz)';\n    return 'No reliable modulation';\n  }\n\n  /** Compute both capacities for a given channel */\n  static analyze(bandwidthMHz: number, snrDb: number, levels: number): CapacityResult {\n    const bwHz = bandwidthMHz * 1e6;\n    const nyquist = this.nyquistCapacity(bwHz, levels);\n    const shannon = this.shannonCapacity(bwHz, snrDb);\n    return {\n      bandwidthMHz,\n      snrDb,\n      signalLevels: levels,\n      nyquistCapacityMbps: Math.round(nyquist / 1e6 * 100) / 100,\n      shannonCapacityMbps: Math.round(shannon / 1e6 * 100) / 100,\n      practicalModulation: this.recommendModulation(snrDb)\n    };\n  }\n\n  /** Compare across common channel configurations */\n  static compareChannels(): void {\n    const channels = [\n      { label: 'Telephone line', bw: 0.003, snr: 30, levels: 8 },\n      { label: 'Cable TV channel', bw: 6, snr: 30, levels: 256 },\n      { label: 'WiFi 20 MHz', bw: 20, snr: 25, levels: 64 },\n      { label: 'DOCSIS 3.1', bw: 192, snr: 35, levels: 4096 }\n    ];\n\n    console.log('\\n=== Channel Capacity Analysis ===');\n    console.log('Channel         | BW(MHz) | SNR(dB) | Levels | Nyquist(Mbps) | Shannon(Mbps) | Modulation');\n    console.log('----------------|---------|---------|--------|---------------|---------------|-----------');\n    for (const ch of channels) {\n      const r = this.analyze(ch.bw, ch.snr, ch.levels);\n      console.log(\n        `${ch.label.padEnd(15)} | ${String(ch.bw).padStart(7)} | ${String(ch.snr).padStart(7)} | ` +\n        `${String(ch.levels).padStart(6)} | ${String(r.nyquistCapacityMbps).padStart(13)} | ` +\n        `${String(r.shannonCapacityMbps).padStart(13)} | ${r.practicalModulation}`\n      );\n    }\n  }\n}\n\n// Demonstration\nShannonCapacityCalculator.compareChannels();\nconst tel = ShannonCapacityCalculator.analyze(0.003, 30, 8);\nconsole.log(`\\nTelephone line with 30 dB SNR: Nyquist=${tel.nyquistCapacityMbps} Mbps, Shannon=${tel.shannonCapacityMbps} Mbps`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== Channel Capacity Analysis ===\nChannel         | BW(MHz) | SNR(dB) | Levels | Nyquist(Mbps) | Shannon(Mbps) | Modulation\n----------------|---------|---------|--------|---------------|---------------|-----------\nTelephone line  |   0.003 |      30 |      8 |         0.018 |        0.0299 | 256-QAM (8 bps/Hz)\nCable TV channel|       6 |      30 |    256 |            96 |         59.82 | 256-QAM (8 bps/Hz)\nWiFi 20 MHz     |      20 |      25 |     64 |           240 |        159.77 | 64-QAM (6 bps/Hz)\nDOCSIS 3.1      |     192 |      35 |   4096 |          4608 |       2291.22 | 256-QAM (8 bps/Hz)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-bitratecalculator",
      children: "TypeScript Implementation: BitRateCalculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following TypeScript class computes baud rate, bit rate, overhead ratios, and explores the relationship between symbol rate and data rate."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * BitRateCalculator — Computes baud rate, bit rate, overhead ratios,\n * and explores signalling efficiency.\n */\nclass BitRateCalculator {\n  /**\n   * Bit rate from baud rate and modulation order\n   * Bit rate = Baud rate × log₂(M)\n   */\n  static bitRateFromBaud(baudRate: number, modulationLevels: number): number {\n    return baudRate * Math.log2(modulationLevels);\n  }\n\n  /**\n   * Baud rate from bit rate and modulation order\n   * Baud rate = Bit rate / log₂(M)\n   */\n  static baudFromBitRate(bitRate: number, modulationLevels: number): number {\n    return bitRate / Math.log2(modulationLevels);\n  }\n\n  /** Compute overhead ratio for a given encoding scheme */\n  static encodingOverhead(encodingName: string, dataBits: number, encodedBits: number): string {\n    const ratio = (encodedBits - dataBits) / dataBits;\n    return `${encodingName}: ${dataBits}→${encodedBits} bits, overhead=${(ratio * 100).toFixed(1)}%`;\n  }\n\n  /**\n   * Effective data rate after considering framing overhead\n   * @param rawBitRate - Physical layer bit rate\n   * @param payloadBytes - Bytes per frame\n   * @param overheadBytes - Header + trailer bytes per frame\n   */\n  static effectiveThroughput(rawBitRate: number, payloadBytes: number, overheadBytes: number): number {\n    const efficiency = payloadBytes / (payloadBytes + overheadBytes);\n    return rawBitRate * efficiency;\n  }\n\n  /** Compare throughput across common link configurations */\n  static compareLinks(): void {\n    const links = [\n      { label: 'Ethernet (1500B MTU)', rawBps: 1e9, payload: 1500, overhead: 38 },\n      { label: 'WiFi (1500B frame)', rawBps: 600e6, payload: 1500, overhead: 58 },\n      { label: 'PPP (1000B frame)', rawBps: 100e6, payload: 1000, overhead: 8 },\n      { label: 'LoRaWAN (51B frame)', rawBps: 50e3, payload: 51, overhead: 13 }\n    ];\n\n    console.log('\\n=== Effective Throughput Comparison ===');\n    console.log('Link Type                      | Raw Rate | Eff. Rate | Efficiency');\n    console.log('-------------------------------|----------|-----------|-----------');\n    for (const link of links) {\n      const effective = this.effectiveThroughput(link.rawBps, link.payload, link.overhead);\n      const effPct = (effective / link.rawBps * 100).toFixed(1);\n      console.log(\n        `${link.label.padEnd(31)} | ${(link.rawBps / 1e6).toFixed(0)} Mbps | ` +\n        `${(effective / 1e6).toFixed(1)} Mbps | ${effPct}%`\n      );\n    }\n  }\n}\n\n// Demonstration\nconsole.log(`64-QAM at 2400 baud: ${BitRateCalculator.bitRateFromBaud(2400, 64)} bps`);\nconsole.log(`To achieve 100 Mbps with QPSK: ${BitRateCalculator.baudFromBitRate(100e6, 4)} baud`);\nconsole.log(BitRateCalculator.encodingOverhead('4B/5B', 4, 5));\nconsole.log(BitRateCalculator.encodingOverhead('8B/10B', 8, 10));\nBitRateCalculator.compareLinks();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "64-QAM at 2400 baud: 14400 bps\nTo achieve 100 Mbps with QPSK: 50000000 baud\n4B/5B: 4→5 bits, overhead=25.0%\n8B/10B: 8→10 bits, overhead=25.0%\n\n=== Effective Throughput Comparison ===\nLink Type                      | Raw Rate | Eff. Rate | Efficiency\n-------------------------------|----------|-----------|-----------\nEthernet (1500B MTU)           | 1000 Mbps | 975.8 Mbps | 97.6%\nWiFi (1500B frame)             | 600 Mbps | 578.3 Mbps | 96.4%\nPPP (1000B frame)              | 100 Mbps | 99.2 Mbps | 99.2%\nLoRaWAN (51B frame)            | 0.05 Mbps | 0.04 Mbps | 79.7%\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "snr-and-channel-capacity-interview-questions",
      children: "SNR and Channel Capacity Interview Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: What is SNR and why does it matter?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SNR (Signal-to-Noise Ratio) measures signal power relative to noise power. Higher SNR allows higher-order modulation (more bits/symbol). As distance increases, signal attenuates → SNR drops → modulation falls back (e.g., 256-QAM → 16-QAM → BPSK)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: How does fiber achieve higher data rates than copper?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fiber has: (a) Higher bandwidth (~10 THz vs ~1 GHz for coax), (b) Lower attenuation (0.2 dB/km vs 2 dB/km for coax), (c) No EMI (higher SNR at long distances), (d) WDM multiplies capacity by 80+. Shannon limit for fiber is vastly higher."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: Calculate the maximum data rate over a 1 MHz channel with SNR = 20 dB."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SNR_linear = 10^(20/10) = 100.\nCapacity = 1e6 × log₂(1 + 100) = 1e6 × log₂(101) ≈ 1e6 × 6.66 = 6.66 Mbps."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: If you need 100 Mbps over a 20 MHz channel, what minimum SNR is required?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "100e6 = 20e6 × log₂(1 + SNR)\nlog₂(1 + SNR) = 5\n1 + SNR = 32\nSNR = 31\nSNR_dB = 10 × log₁₀(31) ≈ 14.9 dB."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fiber-vs-copper--engineering-trade-offs",
      children: "Fiber vs Copper — Engineering Trade-offs"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fiber"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Copper"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10 THz (optical)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1 GHz (coax), ~500 MHz (Cat 6a)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distance (10 Gbps)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40 km+ (SMF)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 m (Cat 6a)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Attenuation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.2 dB/km at 1550 nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 dB/100m at 100 MHz"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EMI immunity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (STP helps)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tap difficulty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard (must cut fiber)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy (inductive tap)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Power per port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.5–2 W (SFP+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.5–1.5 W (PHY)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost per Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$10–$100 (SFP optics)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$1–$10 (copper PHY)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Installation difficulty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (cleave, splice, polish)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (crimp RJ-45)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Upgrade path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Change optics (same fiber)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace cable (higher Cat)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Interview Tip:"
      }), " Always frame fiber vs copper as a distance-and-bandwidth trade-off. For under 100 meters at under 10 Gbps, copper is cheaper and easier. For anything beyond, fiber wins on every metric except installation cost."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "212-applications-in-real-systems",
      children: "2.12 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ethernet--8b10b-and-beyond",
      children: "Ethernet — 8B/10B and beyond"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Ethernet Standard"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Encoding"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Medium"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10BASE-T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manchester"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cat 3+ UTP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100BASE-TX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4B/5B + NRZ-I (MLT-3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cat 5 UTP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1000BASE-T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4D-PAM5 (5-level, 4 pairs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cat 5e UTP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1000BASE-SX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8B/10B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MMF (850 nm)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10GBASE-SR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64B/66B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MMF (850 nm)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10GBASE-T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DSQ128 (Tomlinson-Harashima precoding)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cat 6a UTP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "40GBASE-SR4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64B/66B (4×10G lanes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MMF OM3/OM4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100GBASE-LR4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4×25G WDM with 64B/66B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMF (1310 nm, 4 λ)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "400GBASE-LR8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "400 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8×50G PAM-4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMF, 8 λ"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wi-fi--ofdm-modulation",
      children: "Wi-Fi — OFDM Modulation"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Standard"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Band"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Modulation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max Rate"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "802.11a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 GHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OFDM with BPSK/QPSK/16QAM/64QAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "54 Mbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "802.11g"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.4 GHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OFDM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "54 Mbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "802.11n (Wi-Fi 4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.4/5 GHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OFDM with MIMO (4×4) and 64QAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "600 Mbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "802.11ac (Wi-Fi 5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 GHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OFDM with MU-MIMO and 256QAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.47 Gbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "802.11ax (Wi-Fi 6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.4/5/6 GHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OFDMA with MU-MIMO and 1024QAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9.6 Gbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "802.11be (Wi-Fi 7)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.4/5/6 GHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OFDMA with 16×16 MIMO and 4096QAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "46 Gbps"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "OFDM (Orthogonal Frequency-Division Multiplexing):"
      }), " Divides the channel into many orthogonal subcarriers (e.g., 52 for 802.11a, 234 for 802.11n 40 MHz). Each subcarrier is modulated independently (BPSK through 1024-QAM). Orthogonality eliminates guard bands between subcarriers, achieving high spectral efficiency."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "docsis--cable-internet",
      children: "DOCSIS — Cable Internet"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Standard"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max Downstream"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max Upstream"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Modulation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Channels"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DOCSIS 3.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256QAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32×8 channel bonding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DOCSIS 3.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4096QAM (OFDM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 192 MHz"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DOCSIS 4.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low/high split, FDX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.8 GHz spectrum"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cellular--from-2g-to-5g",
      children: "Cellular — From 2G to 5G"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Generation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Technology"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Modulation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Multiplexing"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Peak Rate"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2G (GSM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TDMA/FDMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GMSK (Gaussian FSK)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FDM+TDM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14.4 kbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3G (UMTS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "W-CDMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QPSK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CDMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 Mbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.5G (HSPA+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "W-CDMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16QAM/64QAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CDMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "42 Mbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4G (LTE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OFDMA/SC-FDMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QPSK/16QAM/64QAM/256QAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OFDM + FDM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 Gbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5G NR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OFDMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QPSK/16QAM/64QAM/256QAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OFDM + FDM + massive MIMO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 Gbps"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-media-selection-guide",
      children: "Real-World Media Selection Guide"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recommended Medium"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Desktop to wall jack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cat 6a UTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cheap, easy, 10 Gbps to 100 m"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Server rack to ToR switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cat 8 or MMF OM4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40G/100G within rack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data center leaf-spine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MMF OM5 (SWDM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "400G over 100 m"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Campus building connect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMF OS2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10–400 Gbps over km"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Long-haul backbone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMF with DWDM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 Gbps × 80 λ = 8 Tbps per fiber"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rural broadband (last mile)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed wireless (5 GHz/60 GHz)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No trenching required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile phones"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cellular (4G/5G)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mobility is the requirement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IoT sensor (low power)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BLE, Zigbee, LoRaWAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Battery life, range > rate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wired IoT (PoE camera)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cat 6 UTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Power + data over same cable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Satellite Internet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LEO (Starlink, Project Kuiper)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global coverage, <20 ms latency"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Twisted Pair"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two insulated wires twisted together"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Category rating determines BW (Cat 5e → Cat 8)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LAN, DSL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Coaxial Cable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copper conductor + shield + jacket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher noise immunity than UTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cable TV, broadband"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optical Fiber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Light pulses through glass core by TIR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMF: long-distance, MMF: short-distance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backbone, data centers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NRZ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signal level = bit value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple but loses clock on long runs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RS-232, basic serial"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Manchester"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mid-bit transition encodes bit + clock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-clocking at 2× bandwidth cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10BASE-T Ethernet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8B/10B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8-bit → 10-bit code; DC balanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25% overhead, excellent clock recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GigE, PCIe, SATA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amplitude varies with bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, noise-sensitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RFID, optical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FSK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequency varies with bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Noise-immune, constant envelope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bluetooth (GFSK)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BPSK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phase switches 180°"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most robust modulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Satellite, deep space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QPSK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 bits per symbol, 4 phases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good balance of rate and robustness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Satellite TV, LTE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QAM (16/64/256)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combines amplitude + phase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High spectral efficiency (4–8 bps/Hz)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DOCSIS, Wi-Fi"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Circuit Switching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dedicated path reserved before data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic QoS, poor burst efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Voice calls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Packet Switching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data segmented, routed independently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Statistical multiplexing, variable delay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internet (IP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FDM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signals assigned distinct frequency bands"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guard bands prevent interference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Radio/TV, cable Internet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TDM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sources interleaved in time slots"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronous: fixed; Statistical: demand-driven"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SONET/SDH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WDM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple wavelengths on one fiber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DWDM: 80+ channels, CWDM: up to 18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-haul optical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CDM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique spreading codes per user"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All users share same frequency simultaneously"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3G cellular"
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
              children: "Media Range"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UTP (100 m) → Coax (500 m) → MMF (550 m) → SMF (100+ km)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Wireless Spectrum"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Radio (3 kHz–300 GHz, through walls), Microwave (3–300 GHz, line-of-sight), IR (300 GHz+, room-limited)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multiplexing Types"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FDM (frequency), TDM (time), WDM (wavelength), CDM (code)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Switching"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circuit: setup, reserved, constant delay. Packet: no setup, shared, variable delay. Message: whole-file, high memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fiber Hierarchy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STS-1 (51.84 Mbps) → STS-192 (10 Gbps) → STS-768 (40 Gbps)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Modulation Formula"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bit rate = Baud rate × log₂(M). Capacity = B × log₂(1 + S/N)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Signal Encoding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NRZ (1× BW), Manchester (2× BW, self-clocking), 4B/5B (1.25×), 8B/10B (1.25×, DC balanced)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Nyquist"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max bit rate (noiseless) = 2B log₂(M)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Shannon"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max bit rate (noisy) = B log₂(1 + S/N)"
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
            children: "Data Center Ops"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Telecom"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Embedded/IoT"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Guided Media"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cable plant design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fiber topology (MMF vs SMF)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local loop provisioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RS-485, I²C bus"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wireless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Site survey, AP placement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cell tower backhaul"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BLE, Zigbee, LoRaWAN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiplexing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Link aggregation (LACP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CWDM/DWDM in fabric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SONET ring design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Switching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Router/switch selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fabric design (CLOS topology)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PSTN call routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understanding line rates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DSL/CMTS provisioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF transceiver config"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Signal Encoding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHY chip config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPI, UART, I²C timing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
            children: "Which UTP category supports 10 Gbps at 100 meters?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cat 5e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cat 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cat 6a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cat 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the primary disadvantage of circuit switching?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor burst efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower bandwidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No QoS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMF attenuation = 0.2 dB/km. 50 km link, 3 dBm Tx → min Rx sensitivity?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−3 dBm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−7 dBm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−10 dBm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−17 dBm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80 independent 100 Gbps channels on a single fiber uses which multiplexing?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FDM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TDM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DWDM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CDM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 kHz line, SNR = 15 dB. Shannon capacity?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 kbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 kbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 kbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15 kbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "D"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-upgrading-a-campus-backbone-from-gigabit-to-400g",
      children: "Case Study: Upgrading a Campus Backbone from Gigabit to 400G"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Background:"
      }), " Metro State University operates 12 buildings connected via a 1 Gbps SMF ring. Traffic grew 35 %/year due to remote teaching, cloud storage, and research data. A 2024 audit showed average link utilization exceeding 80 % during peak hours with packet loss."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Design Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aggregate backbone capacity: 400 Gbps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maximum latency: 200 µs between any two buildings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Future-proof for 800 Gbps without re-cabling"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Media:"
        }), " Existing SMF OS2 (9/125 µm) supports 400GBASE-LR8 over 1310 nm with 8 wavelengths of 50G PAM-4. Link budget: 6.3 dB over 10 km → well within 10 km reach."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Switching:"
        }), " Replace L2 switches with 400G-capable leaf-spine. Each building gets dual 400G uplinks for redundancy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiplexing:"
        }), " DWDM with 40 channels × 10G → upgrade to 400G DWDM (8 × 50G per λ) using coherent optics."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome:"
      }), " After upgrade, peak utilization dropped to 18 %. Latency between buildings measured at 47 µs (well below 200 µs target). The fiber plant lasted 10+ years with no change."]
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
            children: ["Always compute the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "link power budget"
            }), " before selecting media"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "P_rx = P_tx - αL - connector_losses - margin"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "SMF is future-proof"
            }), " — your fiber plant should outlast three switch generations"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-mode supports 400G, 800G, and likely 1.6T over the same glass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Nyquist and Shannon"
            }), " give upper bounds; real systems have implementation margins"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leave 3–6 dB margin above the Shannon limit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Multiplexing choice"
            }), " depends on cost and scalability"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DWDM for long-haul, OFDMA for Wi-Fi, TDM for legacy TDM networks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Media selection"
            }), " is a 3-way trade (bandwidth, distance, cost)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UTP ≤ 100 m, MMF ≤ 550 m, SMF ≤ 120+ km"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Higher-order QAM"
            }), " needs proportional SNR increase"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every extra bit/symbol (doubling constellation) requires ~3 dB more SNR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Packet switching"
            }), " dominates because of statistical multiplexing gain"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For N bursty users, provision for √N × average (not N × peak)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The physical layer governs bit transmission over media. Analog signals are continuous and noise-susceptible; digital signals are discrete and noise-immune. Periodic signals can be decomposed via Fourier analysis, and composite signals are sums of multiple sine waves. Bandwidth, throughput, and latency determine network performance — the bandwidth-delay product governs optimal TCP window sizing."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Guided media — twisted pair, coaxial cable, and optical fiber — offer different trade-offs in bandwidth, distance, and cost. Wireless transmission using radio, microwave, or infrared enables mobile communication. Signal encoding (NRZ, Manchester, 4B/5B, 8B/10B) converts bits to line signals with varying clock recovery and DC balance properties. Modulation (ASK, FSK, PSK, QAM) maps bits to carrier waves; higher-order QAM achieves more bits per symbol but requires better SNR. Multiplexing techniques (FDM, TDM, WDM, CDM) share medium capacity among multiple users."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Nyquist theorem establishes the maximum data rate on a noiseless channel: 2B log₂(M). The Shannon theorem sets the absolute limit on a noisy channel: B log₂(1 + S/N). Circuit switching provides dedicated paths; packet switching achieves statistical multiplexing."
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
          children: "Twisting cancels external magnetic fields — each twist exposes equal area to opposite fields, inducing canceling currents."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Cat 5e: 1 Gbps / 100 m. Cat 6: 10 Gbps / 55 m. Cat 6a: 10 Gbps / 100 m. Cat 7: 10 Gbps / 100 m (shielded). Cat 8: 40 Gbps / 30 m."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Modal dispersion — different propagation modes arrive at different times, spreading the pulse. SMF eliminates this by using a single mode."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "FDM splits the spectrum into frequency bands (e.g., radio stations). TDM interleaves sources in time (e.g., SONET). Applications: FDM for cable TV, TDM for telephony backbone."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Statistical multiplexing allocates capacity on demand. If each user is active only 10 % of the time, N users need ~N×10 % bandwidth, not N×100 %. For bursty traffic, this yields 3–10× efficiency gain."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "NRZ-L: level = bit (0 = low, 1 = high). NRZ-I: transition at start of 1, no change for 0. NRZ-I handles long 1 runs better (one transition per bit period)."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Manchester: 2× bandwidth, self-clocking (transition every bit). 4B/5B: 1.25× bandwidth, clock recovery via enough transitions in coded symbols."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "8B/10B ensures equal number of 1s and 0s over time by selecting code words with disparity +2, 0, or −2."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "QPSK constellation: 4 points at 45°, 135°, 225°, 315° on the I-Q plane. 2 bits per symbol."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution Hints"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "10",
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Each 6 MHz channel at 8 bps/Hz → 48 Mbps per channel. 120 × 48 Mbps = 5.76 Gbps total."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Total loss = 100 × 0.25 = 25 dB. Budget = 3 − (−20) = 23 dB — insufficient. Need one amplifier at 50 km providing 20 dB gain → final received power = 3 − 12.5 + 20 − 12.5 = −2 dBm (feasible)."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Circuit: setup 100 ms + (10 × 10⁶ × 8)/(100 × 10⁶) = 100 + 800 = 900 ms. Packet: setup 0, per-hop latency = packet_tx + prop. ~10 × (1500×8/10⁸) ≈ 10 × 120 µs = 1.2 ms + prop. Total ≈ 1.2 ms + small prop = much faster than circuit for short bursts."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "FSPL = 20log₁₀(100 m) + 20log₁₀(5.8×10⁹ Hz) − 147.55 = 40 + 75.3 − 147.55 = −32.25 dB ≈ 108 dB loss. P_rx = 20 − 108 + 2 + 2 = −84 dBm. Sensitivity −80 dBm → link not viable (need higher gain antennas or lower distance)."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution Hints"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "14",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design approach:"
          }), " Aggregate peak = 10 buildings × 1000/10 users × 10 Mbps = 10 Gbps peak. With statistical multiplexing (10:1 oversubscription), provision ∼1 Gbps per building. Use SMF with 10GBASE-LR or DWDM (10 × 10G → 100G backbone). Leaf-spine topology with redundant links. Budget for 3–5 year growth."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "coding-exercises",
      children: "Coding Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution Hints"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "15",
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Manchester: XOR bit with clock (1 → high-low, 0 → low-high). For 10110010, encode then decode by detecting mid-bit transitions."
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Shannon capacity function: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "capacity(bandwidth, snr_db) { let snr = Math.pow(10, snr_db/10); return bandwidth * Math.log2(1 + snr); }"
          }), " — call for SNR 0..50 in 5 dB steps."]
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Assign each user an 8-bit Walsh code (orthogonal). Encode user_i bit b as b × code_i. Sum all encoded signals. Recover user_i by multiplying sum by code_i and summing (correlation)."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "FDM: generate N carriers at spaced frequencies, modulate each with baseband signal (AM or QAM), sum, transmit. Demux: bandpass filter each carrier, demodulate."
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