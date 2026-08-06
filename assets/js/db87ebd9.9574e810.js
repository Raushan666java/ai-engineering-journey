"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[72714],{

/***/ 95195
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_system_design_01_introduction_md_db8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-system-design-01-introduction-md-db8.json
const site_docs_courses_system_design_01_introduction_md_db8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/system-design/01-introduction","title":"Chapter 1: Introduction to System Design","description":"Previous 02 Scalability Load Balancing","source":"@site/docs/courses/system-design/01-introduction.md","sourceDirName":"courses/system-design","slug":"/system-design/01-introduction","permalink":"/ai-engineering-journey/system-design/01-introduction","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"01-introduction","slug":"/system-design/01-introduction","title":"Chapter 1: Introduction to System Design","sidebar_label":"Chapter 1: Introduction to System Design","sidebar_position":1},"sidebar":"coursesSidebar","previous":{"title":"System Design — Complete University Textbook","permalink":"/ai-engineering-journey/system-design/index"},"next":{"title":"Chapter 2: Scalability and Load Balancing","permalink":"/ai-engineering-journey/system-design/02-scalability-load-balancing"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/system-design/01-introduction.md


const frontMatter = {
	id: '01-introduction',
	slug: '/system-design/01-introduction',
	title: 'Chapter 1: Introduction to System Design',
	sidebar_label: 'Chapter 1: Introduction to System Design',
	sidebar_position: 1
};
const contentTitle = 'Chapter 1: Introduction to System Design';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance-1",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "What Is System Design?",
  "id": "what-is-system-design",
  "level": 3
}, {
  "value": "Non-Functional Requirements",
  "id": "non-functional-requirements",
  "level": 3
}, {
  "value": "Scalability",
  "id": "scalability",
  "level": 4
}, {
  "value": "Reliability",
  "id": "reliability",
  "level": 4
}, {
  "value": "Availability",
  "id": "availability",
  "level": 4
}, {
  "value": "Maintainability",
  "id": "maintainability",
  "level": 4
}, {
  "value": "Performance",
  "id": "performance",
  "level": 4
}, {
  "value": "Security",
  "id": "security",
  "level": 4
}, {
  "value": "The Four-Phase Design Process",
  "id": "the-four-phase-design-process",
  "level": 3
}, {
  "value": "Phase 1: Requirements Gathering",
  "id": "phase-1-requirements-gathering",
  "level": 4
}, {
  "value": "Phase 2: Back-of-the-Envelope Estimation",
  "id": "phase-2-back-of-the-envelope-estimation",
  "level": 4
}, {
  "value": "Phase 3: High-Level Design (HLD)",
  "id": "phase-3-high-level-design-hld",
  "level": 4
}, {
  "value": "Phase 4: Detailed Deep Dive",
  "id": "phase-4-detailed-deep-dive",
  "level": 4
}, {
  "value": "Trade-Offs",
  "id": "trade-offs",
  "level": 3
}, {
  "value": "Capacity Estimation Examples",
  "id": "capacity-estimation-examples",
  "level": 3
}, {
  "value": "Real-World Systems",
  "id": "real-world-systems",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Designing a Distributed URL Shortener",
  "id": "example-1-designing-a-distributed-url-shortener",
  "level": 3
}, {
  "value": "Example 2: Estimating Capacity for a Photo-Sharing App",
  "id": "example-2-estimating-capacity-for-a-photo-sharing-app",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
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
  "value": "Concept Comparison",
  "id": "concept-comparison-1",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference-1",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix-1",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz-1",
  "level": 2
}, {
  "value": "Code Examples",
  "id": "code-examples",
  "level": 2
}, {
  "value": "CAP Theorem Simulator",
  "id": "cap-theorem-simulator",
  "level": 3
}, {
  "value": "Latency vs Throughput Bounds (Little&#39;s Law)",
  "id": "latency-vs-throughput-bounds-littles-law",
  "level": 3
}, {
  "value": "CAP Theorem Trade-off Visualization",
  "id": "cap-theorem-trade-off-visualization",
  "level": 3
}, {
  "value": "TypeScript: Capacity Estimator",
  "id": "typescript-capacity-estimator",
  "level": 3
}, {
  "value": "TypeScript: Little&#39;s Law Simulator",
  "id": "typescript-littles-law-simulator",
  "level": 3
}, {
  "value": "Implementation: Scalability and Load Balancing",
  "id": "implementation-scalability-and-load-balancing",
  "level": 3
}, {
  "value": "Implementation: Scalability and Load Balancing",
  "id": "implementation-scalability-and-load-balancing-1",
  "level": 3
}, {
  "value": "TypeScript: Latency Calculator",
  "id": "typescript-latency-calculator",
  "level": 3
}, {
  "value": "TypeScript: CAP Theorem Validator",
  "id": "typescript-cap-theorem-validator",
  "level": 3
}, {
  "value": "System Design Interview Process Flowchart",
  "id": "system-design-interview-process-flowchart",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 3
}, {
  "value": "Case Study",
  "id": "case-study",
  "level": 3
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz-2",
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
  "value": "Review Questions (4-5)",
  "id": "review-questions-4-5",
  "level": 3
}, {
  "value": "Application Problems (3-4)",
  "id": "application-problems-3-4",
  "level": 3
}, {
  "value": "Challenge Problem (1)",
  "id": "challenge-problem-1",
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
        id: "chapter-1-introduction-to-system-design",
        children: "Chapter 1: Introduction to System Design"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " None | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/02-scalability-load-balancing",
          children: "02 Scalability Load Balancing"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundational concepts, NFRs, design process, capacity estimation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability, reliability, availability, performance, trade-offs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Design Process"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-phase: Requirements, Estimation, HLD, Deep Dive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Estimation Tools"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QPS, storage, bandwidth, memory formulas"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mindset"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trade-off recognition, order-of-magnitude thinking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-World Examples"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google Search, Facebook, WhatsApp"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish system design from software architecture and algorithm design"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define and evaluate ten non-functional requirements with appropriate metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the four-phase design process to any large-scale system problem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform back-of-the-envelope capacity estimations using standard formulas"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze trade-offs including latency vs throughput, consistency vs availability, and read vs write optimization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Model real-world systems (Google Search, Facebook, WhatsApp) through a system-design lens"
      }), "\n"]
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
        href: "../../assets/images/lessons/system-design/01-introduction/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/01-introduction/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/system-design/01-introduction/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/01-introduction/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/system-design/01-introduction/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/01-introduction/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance-1",
      children: "Chapter at a Glance"
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundational concepts, NFRs, design process, capacity estimation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability, reliability, availability, performance, trade-offs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Design Process"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-phase: Requirements, Estimation, HLD, Deep Dive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Estimation Tools"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QPS, storage, bandwidth, memory formulas"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mindset"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trade-off recognition, order-of-magnitude thinking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-World Examples"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google Search, Facebook, WhatsApp"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Theory]\n    B[Concept Comparison]\n    A --> B\n    C[Quick Reference]\n    B --> C\n    D[CrossApplication Matrix]\n    C --> D\n    E[Chapter Quiz]\n    D --> E\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Theory is the foundation ? master it before moving to examples and exercises."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/system-design/01-introduction.png",
        alt: "System Design Fundamentals Mindmap"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-system-design",
      children: "What Is System Design?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Master this concept thoroughly ? it is frequently tested in system design interviews."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Master this concept ? it appears in nearly every system design interview. Understand both the how and the why."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "System design is the discipline of defining the architecture, components, modules, interfaces, and data flow of a large-scale distributed system to satisfy specified functional and non-functional requirements. It sits at the intersection of three distinct but overlapping fields."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "System Design vs Software Architecture."
      }), " Software architecture concerns the high-level structure of a single software system: the decomposition into modules, the relationships among them, and the guiding design principles. System design extends this to encompass multiple cooperating services, network topology, data distribution, fault tolerance, and operational concerns at planetary scale. Architecture asks \"how should this service be organized?\" System design asks \"how should a thousand services work together to serve a billion users?\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "System Design vs Algorithm Design."
      }), " Algorithm design focuses on computational efficiency: time complexity, space complexity, and correctness proofs for a single procedure operating on a bounded input set. System design focuses on engineering efficiency: throughput, latency, availability, and cost at internet scale. An O(n log n) sort is irrelevant if the machine runs out of memory; a hash map is useless if no single machine can hold the data. System designers routinely sacrifice algorithmic purity for practical scalability."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Fundamental Constraint."
      }), " Every system operates under finite resources: CPU, RAM, disk, network bandwidth, and money. System design is the art of making the right compromises among these constraints to deliver the required functionality at the required scale."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "non-functional-requirements",
      children: "Non-Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Avoid over-engineering. Start simple, measure, then optimize."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Avoid premature optimization. Start simple, measure, then optimize. Over-engineering is the most common system design mistake."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Functional requirements describe ", (0,jsx_runtime.jsx)(_components.em, {
        children: "what"
      }), " the system does. Non-functional requirements (NFRs) describe ", (0,jsx_runtime.jsx)(_components.em, {
        children: "how well"
      }), " it does it. In system design interviews and real-world architecture, NFRs drive every decision."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "scalability",
      children: "Scalability"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Scalability is the ability of a system to handle growing amounts of work by adding resources. There are two dimensions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Horizontal scaling (scale out):"
        }), " Add more machines. Preferred for most internet systems because commodity hardware is cheap and the capacity ceiling is effectively unlimited."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vertical scaling (scale up):"
        }), " Add more power to a single machine (CPU, RAM, SSD). Simple but bounded by the hardware ceiling of the largest available machine."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Three axes of scalability:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Axis"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Load scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle more requests per second"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000 QPS to 10M QPS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store and query more data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 GB to 100 PB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Geographic scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serve users across regions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US-only to global"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A system is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "linearly scalable"
      }), " if doubling resources doubles capacity. Most real systems are sub-linear due to coordination overhead."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "reliability",
      children: "Reliability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Reliability is the probability that a system performs its intended function without failure for a specified period under stated conditions. It is quantified by ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mean Time Between Failures (MTBF)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key concepts:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fault tolerance:"
        }), " The ability to continue operating despite failures in some components. Achieved through redundancy (N+1, 2N, 3x replication), graceful degradation, and circuit breakers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Redundancy:"
        }), " Duplicating critical components to eliminate single points of failure. Active-passive (hot standby) or active-active (all replicas serve traffic)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Failover:"
        }), " Automatic detection of a failed component and transfer of its workload to a healthy replica. Requires health checking, leader election (e.g., Raft, Paxos), and careful handling of split-brain scenarios."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "A = MTBF / (MTBF + MTTR)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where MTTR is Mean Time To Repair (restore service after failure)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "availability",
      children: "Availability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Availability is the proportion of time a system is operational and accessible. Measured in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nines"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Uptime %"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Downtime/year"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Downtime/month"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Downtime/week"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "90% (\"one nine\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "36.5 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "73 hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16.8 hours"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "99% (\"two nines\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.65 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7.2 hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.68 hours"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "99.9% (\"three nines\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8.76 hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "43.2 minutes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.1 minutes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "99.99% (\"four nines\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "52.6 minutes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.3 minutes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0 minute"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "99.999% (\"five nines\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.26 minutes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25.9 seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.05 seconds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "99.9999% (\"six nines\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "31.5 seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.59 seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.605 seconds"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Service Level Agreement (SLA)"
      }), " is a legal contract between provider and customer specifying promised availability. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Service Level Objective (SLO)"
      }), " is an internal target (e.g., 99.95% p99 latency under 200ms). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Service Level Indicator (SLI)"
      }), " is the actual measured metric (e.g., request success rate over a 30-day rolling window)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "If SLA = 99.9%, you can serve errors for 8.76 hours/year before penalties apply.\nSLO is typically stricter than SLA to give a safety buffer.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "maintainability",
      children: "Maintainability"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Maintainability is the ease with which a system can be modified, tested, and operated. Three facets:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Operability:"
        }), " How easily an operator can monitor, diagnose, and fix problems. Driven by observability (logs, metrics, traces), runbooks, and automation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Simplicity:"
        }), " Reducing complexity by removing accidental complexity (unnecessary abstractions, deep inheritance, over-engineering). Every unnecessary component doubles the maintenance burden."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Evolvability (extensibility):"
        }), " How easily the system can adapt to new requirements. Driven by loose coupling, well-defined APIs, feature flags, and backward compatibility."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "performance",
      children: "Performance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Performance is defined by two primary metrics:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Latency:"
        }), " The time taken to process a single request. Measured at various percentiles: p50 (median), p95, p99, p99.9. Tail latency (p99.9) is critical in distributed systems because a single slow request can hold up many others (head-of-line blocking)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Throughput:"
        }), " The number of requests processed per unit time (QPS, TPS, RPS). Often inversely related to latency up to a saturation point."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Response time:"
        }), " Latency plus network overhead, queuing delay, and processing time."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "L = L_network + L_queue + L_service\n\nThroughput = (1 - p_error) / L_avg  (where L_avg is average latency)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Little's Law relates these for stable systems:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "L = λ * W\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where L = average number of requests in system, λ = arrival rate, W = average time per request."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "security",
      children: "Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Security encompasses confidentiality (unauthorized access prevention), integrity (unauthorized modification prevention), and availability (protection against DoS). Design considerations include authentication, authorization (RBAC, ACLs), encryption in transit (TLS) and at rest, input validation, rate limiting, and DDoS mitigation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: ""
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Avoid designing for five-nines availability if you only need two-nines. Each \"nine\" adds ~10x infrastructure cost."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cost efficiency measures the operational expense per unit of useful work (e.g., cost per request, cost per GB stored, cost per user). This trades against all other NFRs: five-nines availability costs more than two-nines; higher throughput requires more servers; stronger consistency increases coordination overhead. A cost-unbounded design is not a design — it is a wishlist."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-four-phase-design-process",
      children: "The Four-Phase Design Process"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Always articulate trade-offs clearly ? interviewers value reasoning over the \"right\" answer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Trade-offs are the heart of system design. Always be ready to explain why you chose X over Y."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Industry-standard approach to system design problems:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-1-requirements-gathering",
      children: "Phase 1: Requirements Gathering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " In system design interviews, spend 3-5 minutes clarifying requirements first. Most candidates fail by jumping to architecture too early.\nCollect and clarify functional and non-functional requirements. Ask clarifying questions:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the core features? (e.g., \"shorten a URL\", \"redirect to long URL\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How many users? DAU, MAU?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the expected QPS?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the data volume? Per-day, per-year?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the latency requirements?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is this read-heavy or write-heavy?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Traps to avoid:"
      }), " Solving the wrong problem (over-engineering for a scale that will never materialize), skipping this phase entirely (designing without constraints), or accepting vague requirements (building a \"fast, scalable system\" is meaningless without numbers)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-2-back-of-the-envelope-estimation",
      children: "Phase 2: Back-of-the-Envelope Estimation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rough capacity calculations to constrain the design before committing to architecture. Key formulas:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "QPS = Daily Active Users × Actions Per User / 86,400\n\nStorage = Data per item × Items per day × Retention days × Replication factor\n\nBandwidth = Bits per request × QPS\n\nMemory needed = Hot data ratio × Total data size\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prefix conventions:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Prefix"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Power"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bytes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10^3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1,000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10^6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10^6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10^9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10^9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10^12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10^12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10^15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10^15"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule of thumb:"
      }), " A single server can handle ~10K-50K QPS for simple lookups. MySQL can handle ~1K writes/sec per node. A 1 Gbps NIC transfers ~125 MB/s. An SSD reads ~500 MB/s."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-3-high-level-design-hld",
      children: "Phase 3: High-Level Design (HLD)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Produce a component diagram showing the major building blocks:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Client tier:"
        }), " Mobile, web, IoT"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Load balancer:"
        }), " Distributes traffic"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Web/API tier:"
        }), " Stateless application servers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cache tier:"
        }), " In-memory data store (Redis, Memcached)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Database tier:"
        }), " Persistent storage (SQL or NoSQL)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Message queue:"
        }), " Async processing (Kafka, RabbitMQ)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CDN:"
        }), " Static asset delivery"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌─────────────┐\n│   Clients   │\n└──────┬──────┘\n       │\n┌──────▼──────┐\n│ Load        │\n│ Balancer    │\n└──────┬──────┘\n       │\n┌──────▼──────┐   ┌──────────┐   ┌───────────┐\n│ App Server  │──►│  Cache   │   │  CDN      │\n│ (stateless) │   │ (Redis)  │   │ (CloudFl) │\n└──────┬──────┘   └──────────┘   └───────────┘\n       │\n┌──────▼──────┐\n│  Database   │\n│ (Primary)   │\n│             │\n│  Replica(s) │\n└─────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-4-detailed-deep-dive",
      children: "Phase 4: Detailed Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Select one or two components and analyze them in depth. Identify bottlenecks and propose solutions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Database schema design (normalization vs denormalization)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Indexing strategy (covering indexes, composite indexes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cache placement (what to cache, TTL policy)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sharding strategy (key ranges, hash-based, directory-based)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Replication topology (single-leader vs leaderless)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistency model (strong vs eventual, read-your-writes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Failure scenarios (what happens when X goes down)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trade-offs",
      children: "Trade-Offs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every design decision is a trade-off. Recognizing and articulating trade-offs is the core skill."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Latency vs Throughput."
      }), " These are often in tension: batching requests improves throughput but increases latency for individual requests. A video processing pipeline may batch frames for compression efficiency (higher throughput, higher latency); a real-time chat system cannot."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cost vs Performance."
      }), " More servers = better performance + higher cost. An S3-based static site costs pennies and serves globally; a CockroachDB cluster costs thousands per month. Design for the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "minimum viable performance"
      }), " that meets the SLO."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Consistency vs Availability."
      }), " The CAP theorem (Brewer, 2000): a distributed system can guarantee at most two of Consistency, Availability, and Partition Tolerance. In practice: partitions are inevitable (network failures), so you choose between CP and AP. Banking systems choose CP (wait for consistency); social feeds choose AP (serve stale data)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Read Optimization vs Write Optimization."
      }), " Read-heavy systems (content delivery, social feeds) use caches, denormalization, read replicas, CDNs. Write-heavy systems (logging, time series, event ingestion) use append-only storage, LSM-trees, batch writes, message queues. Most systems fall into one camp; hybrid systems need careful isolation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "capacity-estimation-examples",
      children: "Capacity Estimation Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " QPS, storage, and bandwidth estimates should be within 2x of actual values. Off by 10x means a modeling problem.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Twitter-Scale QPS."
        }), " Assume 500M DAU, each user posts 0.5 tweets/day and reads 200 tweets/day."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Write QPS = 500M × 0.5 / 86,400 ≈ 2,894 QPS\nPeak write QPS = 2,894 × 3 (peak factor) ≈ 8,682 QPS\nRead QPS = 500M × 200 / 86,400 ≈ 1,157,407 QPS\nPeak read QPS ≈ 3.5M QPS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A read:write ratio of ~400:1 justifies heavy caching and read replicas."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "YouTube Storage."
      }), " Assume 500 hours of video uploaded per minute, average bitrate 5 Mbps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Storage per hour = 5 × 10^6 bps × 3,600 s / 8 = 2.25 GB/hour\nPer minute: 500 hours × 2.25 GB = 1,125 GB/minute\nPer day: 1,125 GB × 60 × 24 ≈ 1.62 PB/day\nPer year: 1.62 PB × 365 ≈ 591 PB/year\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With 3x replication: ~1.77 exabytes/year."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "URL Shortener Storage"
      }), " (tinyurl.com style). Assume 100M new URLs/day, average length 500 bytes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Daily storage = 100M × 500 bytes = 50 GB/day\nYearly storage = 50 GB × 365 ≈ 18.25 TB/year\n10-year storage = ~182.5 TB\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This fits on a handful of SSDs. The bottleneck is not storage — it is write QPS and availability."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-systems",
      children: "Real-World Systems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Google Search."
      }), " The defining challenge is indexing the web (tens of billions of pages) and returning relevant results in under 200ms. Design constraints: extreme read throughput, sub-second latency, global distribution. Architecture: web crawling pipeline (distributed crawlers), inverted index (sharded across thousands of machines), query serving (MapReduce for indexing, distributed serving for queries). NFR priority: performance > reliability > maintainability > cost. Google accepts massive infrastructure cost to deliver sub-100ms search."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Facebook (Meta)."
      }), " The defining challenge is the social graph: billions of users, each with complex relationships (friends, pages, groups, events). Design constraints: extremely high read QPS, globally distributed, writes triggered by user action. Architecture: TAO (graph cache layer over MySQL), Presto (interactive analytics), Cassandra (inbox search), Haystack (photo storage). NFR priority: availability > performance > scalability > maintainability. Facebook uses eventual consistency extensively — seeing a slightly stale Like count is acceptable."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "WhatsApp."
      }), " The defining challenge is reliable message delivery with end-to-end encryption for 2B+ users. Design constraints: must work with intermittent connectivity, low latency for delivery, zero message loss. Architecture: Custom Erlang-based server (ejabberd fork), persistence on a per-user basis (not per-message), highly optimized for mobile battery and bandwidth. NFR priority: reliability > availability > performance > efficiency. WhatsApp famously served 900M users with only ~50 engineers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-designing-a-distributed-url-shortener",
      children: "Example 1: Designing a Distributed URL Shortener"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      }), " Shorten URLs, redirect to original URL, track click analytics, handle 100M URLs/day."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 1 — Requirements:"
      }), " 100M new URLs/day, read:write ratio ~100:1 (each URL clicked ~100 times), analytics per-URL, 5-year data retention."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 2 — Estimation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write QPS: 100M / 86,400 ≈ 1,157 QPS (peak ~3,500)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read QPS: 1,157 × 100 ≈ 115,700 QPS (peak ~350,000)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Storage: 100M × 500 bytes/day = 50 GB/day → ~91 TB in 5 years"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 3 — HLD:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stateless API servers (auto-scaled)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Redis cache for hot URLs (LRU eviction, TTL 1 hour)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Base-62 encoding for short IDs (7 chars = 62^7 ≈ 3.5T combinations)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Database: NoSQL (Cassandra or DynamoDB) for write scalability"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 4 — Deep Dive:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encoding choice: Base-62 (a-z, A-Z, 0-9) vs Base-64 (adds + and /, less user-friendly)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Key generation: Snowflake-style ID → encode to base-62. Avoids DB lookup for ID allocation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cache strategy: Cache-aside. On write miss: query DB, populate cache, return redirect"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Redirection: 301 (permanent) for most clients to reduce load; 307 (temporary) for analytics tracking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-estimating-capacity-for-a-photo-sharing-app",
      children: "Example 2: Estimating Capacity for a Photo-Sharing App"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Instagram-scale: 500M DAU, each user uploads ~2 photos/day, average photo 2 MB, each photo viewed ~50 times."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Write QPS = 500M × 2 / 86,400 ≈ 11,574 QPS\nStorage/day = 500M × 2 photos × 2 MB = 2 PB/day\nStorage/year ≈ 730 PB\nRead QPS = 11,574 × 50 ≈ 578,700 QPS\nCDN bandwidth = 578,700 × 2 MB = 1,157,400 MB/s ≈ 1.15 TB/s\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key insight: CDN cost dominates. Solution: encode photos to multiple resolutions, cache the most-requested 80% on CDN, serve originals only on explicit demand."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Concept Comparison is a critical concept that directly impacts system design decisions.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Concept Comparison is a critical concept that directly impacts system design decisions."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-Off"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ability to handle growth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QPS, data volume"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal vs vertical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reliability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probability of no failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MTBF, MTTR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redundancy vs failure risk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proportion of time operational"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uptime % (nines)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost per nine"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Speed and capacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Latency, throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Latency vs throughput"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maintainability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ease of change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operability, simplicity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity vs flexibility"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Quick Reference is a critical concept that directly impacts system design decisions."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Formula"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A = MTBF / (MTBF + MTTR)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DAU * Actions / 86,400"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Items/day * size * retention * replication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bits/request * QPS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Little's Law"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L = lambda * W"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Primary NFR"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Trade-Off"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Architecture Highlight"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Google Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost for sub-100ms latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inverted index + MapReduce"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Facebook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Staleness for availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TAO graph cache over MySQL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WhatsApp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reliability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero message loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Erlang custom server"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Chapter Quiz is a critical concept that directly impacts system design decisions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What is the minimum availability for less than 1 hour downtime/year?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) 99%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) 99.9%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) 99.99%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) 99.999%"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>C) 99.99% (52.6 minutes/year)</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Q2:"
          }), " Which phase comes after back-of-the-envelope estimation?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Requirements gathering"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) High-level design"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Detailed deep dive"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Deployment"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsxs)(_components.summary, {
            children: ["Answer</summary>B) High-level design (Phase 3)</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Q3:"
              }), " MTBF=720h, MTTR=4h. What is availability?"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "A) 99.0%"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "B) 99.45%"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "C) 99.94%"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "D) 99.99%"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
              children: (0,jsx_runtime.jsx)(_components.summary, {
                children: "Answer</summary>B) 720/724 = 99.45%"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Q4:"
              }), " What does Little's Law state?"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "A) Throughput equals capacity"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "B) Concurrency = arrival rate * latency"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "C) Latency is always under 100ms"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "D) Storage grows linearly"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
              children: (0,jsx_runtime.jsxs)(_components.summary, {
                children: ["Answer</summary>B) L = lambda * W</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Q5:"
                  }), " Why is tail latency critical in distributed systems?"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "A) It determines median user experience"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "B) A single slow request causes head-of-line blocking"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "C) It is cheaper to optimize"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "D) SLAs only measure tail latency"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                  children: (0,jsx_runtime.jsxs)(_components.summary, {
                    children: ["Answer</summary>B) Head-of-line blocking in fan-out requests</details>\n", (0,jsx_runtime.jsx)(_components.h2, {
                      id: "concept-comparison-1",
                      children: "Concept Comparison"
                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "One-Sentence Takeaway:"
                        }), " Concept Comparison is a critical concept that directly impacts system design decisions.\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "One-Sentence Takeaway:"
                        }), " Concept Comparison is a critical concept that directly impacts system design decisions."]
                      }), "\n"]
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.th, {
                            children: "Concept"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "Definition"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "Key Insight"
                          })]
                        })
                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Theory"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Core topic in Chapter 1: Introduction to System Design"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Fundamental to system design"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Concept Comparison"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Core topic in Chapter 1: Introduction to System Design"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Fundamental to system design"
                          })]
                        })]
                      })]
                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                      id: "quick-reference-1",
                      children: "Quick Reference"
                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "One-Sentence Takeaway:"
                        }), " Quick Reference is a critical concept that directly impacts system design decisions."]
                      }), "\n"]
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.th, {
                            children: "Topic"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "Key Point"
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.tbody, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Theory"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Essential concept for Chapter 1: Introduction to System Design"
                          })]
                        })
                      })]
                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                      id: "cross-application-matrix-1",
                      children: "Cross-Application Matrix"
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.th, {
                            children: "Concept"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "Application Context"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "Trade-Off"
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.tbody, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Theory"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Relevant across multiple system design scenarios"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Each choice has trade-offs"
                          })]
                        })
                      })]
                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                      id: "chapter-quiz-1",
                      children: "Chapter Quiz"
                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "One-Sentence Takeaway:"
                        }), " Chapter Quiz is a critical concept that directly impacts system design decisions."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Q1:"
                      }), " What is the primary trade-off discussed in this chapter?"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                        children: "A) Option A"
                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                        children: "B) Option B"
                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                        children: "C) Option C"
                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                        children: "D) Option D"
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                      children: (0,jsx_runtime.jsxs)(_components.summary, {
                        children: ["Answer</summary>Refer to the chapter content</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: "Q2:"
                          }), " Which concept is most fundamental to the topic of Chapter 1"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                            children: "A) Option A"
                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                            children: "B) Option B"
                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                            children: "C) Option C"
                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                            children: "D) Option D"
                          }), "\n"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                          children: (0,jsx_runtime.jsxs)(_components.summary, {
                            children: ["Answer</summary>Review the core sections</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "Q3:"
                              }), " How does this chapter's main concept apply to real-world systems?"]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                children: "A) Option A"
                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                children: "B) Option B"
                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                children: "C) Option C"
                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                children: "D) Option D"
                              }), "\n"]
                            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                              children: (0,jsx_runtime.jsxs)(_components.summary, {
                                children: ["Answer</summary>See the Real-World Systems section</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                  id: "code-examples",
                                  children: "Code Examples"
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "cap-theorem-simulator",
                                  children: "CAP Theorem Simulator"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "The following TypeScript class models the fundamental trade-off between Consistency, Availability, and Partition Tolerance. Given any two chosen properties, the simulator returns the resulting system classification (CP, AP, or CA) along with real-world database examples."
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    className: "language-typescript",
                                    children: "/**\n * CAPTheoremSimulator ? models the trade-off between Consistency,\n * Availability, and Partition Tolerance in distributed systems.\n *\n * Usage:\n *   const cap = new CapTheoremSimulator();\n *   cap.pick('partitionTolerance', 'consistency', true);\n *   // ? \"CP system (e.g., ZooKeeper, HBase, Google Spanner). Sacrifices\n *   //    availability during partitions to guarantee consistency.\"\n */\ntype CapProperty = 'consistency' | 'availability' | 'partitionTolerance';\ntype CapSystem = 'CP' | 'AP' | 'CA';\n\nclass CapTheoremSimulator {\n  private examples: Record<CapSystem, string[]> = {\n    CP: ['ZooKeeper', 'HBase', 'Google Spanner'],\n    AP: ['Cassandra', 'DynamoDB', 'Riak'],\n    CA: ['PostgreSQL (single-site)', 'MySQL (single-site)'],\n  };\n\n  private definitions: Record<CapSystem, string> = {\n    CP: 'Sacrifices availability during partitions to guarantee consistency.',\n    AP: 'Sacrifices consistency during partitions to guarantee availability.',\n    CA: 'No partition tolerance ? relies on a reliable network; entire system fails on split.',\n  };\n\n  pick(a: CapProperty, b: CapProperty, partitionHappens: boolean): string {\n    const hasP =\n      a === 'partitionTolerance' || b === 'partitionTolerance';\n    const hasC = a === 'consistency' || b === 'consistency';\n\n    if (!hasP && partitionHappens) {\n      return 'CA system with partition ? system becomes unavailable (no partition tolerance).';\n    }\n\n    const system: CapSystem = hasP ? (hasC ? 'CP' : 'AP') : 'CA';\n    const dbExamples = this.examples[system].join(', ');\n    return `**${system}** system (e.g., ${dbExamples}). ${this.definitions[system]}`;\n  }\n}\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "latency-vs-throughput-bounds-littles-law",
                                  children: "Latency vs Throughput Bounds (Little's Law)"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["This calculator applies Little's Law (", (0,jsx_runtime.jsx)(_components.code, {
                                    children: "L = ? ? W"
                                  }), ") to reason about the relationship between latency, concurrency, and throughput in distributed systems. It also includes tail-latency assessment and connection-pool sizing."]
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    className: "language-typescript",
                                    children: "/**\n * LatencyThroughputCalculator ? models the relationship between\n * latency (L), throughput (?), and concurrency (W) via Little's Law.\n */\nclass LatencyThroughputCalculator {\n  constructor(\n    public readonly latencyMs: number,\n    public readonly concurrency: number\n  ) {}\n\n  /** L = ? ? W  ?  ? = W / L (converted from ms to seconds) */\n  maxThroughputQps(): number {\n    return this.concurrency / (this.latencyMs / 1000);\n  }\n\n  /** W = ? ? L ? required concurrency to hit a target QPS */\n  requiredConcurrency(targetQps: number): number {\n    return targetQps * (this.latencyMs / 1000);\n  }\n\n  /** Assess tail-latency severity via the p99 / p50 ratio */\n  assessTailLatency(p99: number, p50: number): string {\n    const ratio = p99 / p50;\n    if (ratio > 10) {\n      return 'Critical tail ? investigate GC pauses, queue buildup, or straggler tasks.';\n    }\n    if (ratio > 5) {\n      return 'High tail ? check hot partitions or consider hedged requests.';\n    }\n    if (ratio > 3) {\n      return 'Moderate tail ? request coalescing or caching may help.';\n    }\n    return 'Healthy ? tail latency is well-contained.';\n  }\n\n  /** Estimate optimal DB connection-pool size with 20 % headroom */\n  optimalPoolSize(targetLatencyMs: number, expectedQps: number): number {\n    return Math.ceil(expectedQps * (targetLatencyMs / 1000) * 1.2);\n  }\n}\n\n// -- Example ------------------------------------------------------\nconst calc = new LatencyThroughputCalculator(50, 500);\nconsole.log(`Max throughput:         ${calc.maxThroughputQps()} qps`);\nconsole.log(`Required concurrency:   ${calc.requiredConcurrency(10000)}`);\nconsole.log(`Tail-latency verdict:   ${calc.assessTailLatency(2000, 50)}`);\nconsole.log(`Optimal pool size:      ${calc.optimalPoolSize(50, 10000)}`);\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "cap-theorem-trade-off-visualization",
                                  children: "CAP Theorem Trade-off Visualization"
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    className: "language-mermaid",
                                    children: "flowchart TD\n    subgraph CAP_Theorem\n        direction LR\n        C[Consistency<br/>Every read returns latest write]\n        A[Availability<br/>Every request gets a non-error response]\n        P[Partition Tolerance<br/>System continues despite network splits]\n    end\n\n    subgraph Trade_offs\n        CP[CP<br/>Consistency + Partition Tolerance]\n        AP[AP<br/>Availability + Partition Tolerance]\n        CA[CA<br/>Consistency + Availability]\n    end\n\n    C --> CP\n    P --> CP\n    A --> AP\n    P --> AP\n    C --> CA\n    A --> CA\n\n    CP -.-> DB1[\"ZooKeeper, HBase<br/>Spanner\"]\n    AP -.-> DB2[\"Cassandra, DynamoDB<br/>Riak\"]\n    CA -.-> DB3[\"Single-site RDBMS<br/>PostgreSQL, MySQL\"]\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "typescript-capacity-estimator",
                                  children: "TypeScript: Capacity Estimator"
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    className: "language-typescript",
                                    children: "class CapacityEstimator {\n  estimateQPS(dailyActiveUsers: number, requestsPerUser: number, peakFactor: number) {\n    const avg = (dailyActiveUsers * requestsPerUser) / 86400;\n    return { avg: Math.round(avg), peak: Math.round(avg * peakFactor) };\n  }\n\n  estimateStorage(dailyWrites: number, recordSizeBytes: number, retentionDays: number): string {\n    return this.formatBytes(dailyWrites * recordSizeBytes * retentionDays);\n  }\n\n  estimateBandwidth(bytesPerSecond: number): string { return this.formatBytes(bytesPerSecond) + \"/s\"; }\n\n  private formatBytes(bytes: number): string {\n    if (bytes >= 1e12) return (bytes / 1e12).toFixed(1) + \" TB\";\n    if (bytes >= 1e9) return (bytes / 1e9).toFixed(1) + \" GB\";\n    if (bytes >= 1e6) return (bytes / 1e6).toFixed(1) + \" MB\";\n    return (bytes / 1e3).toFixed(1) + \" KB\";\n  }\n}\n\nclass LatencySimulator {\n  async sequential(n: number, latencyMs: number): Promise<number> {\n    const start = Date.now();\n    for (let i = 0; i < n; i++) await new Promise(r => setTimeout(r, latencyMs));\n    return Date.now() - start;\n  }\n\n  async parallel(n: number, latencyMs: number): Promise<number> {\n    const start = Date.now();\n    await Promise.all(Array.from({ length: n }, () => new Promise(r => setTimeout(r, latencyMs))));\n    return Date.now() - start;\n  }\n\n  async pipelined(stages: number, stageLatencyMs: number): Promise<number> {\n    const start = Date.now();\n    let chain = Promise.resolve();\n    for (let s = 0; s < stages; s++) chain = chain.then(() => new Promise(r => setTimeout(r, stageLatencyMs)));\n    await chain;\n    return Date.now() - start;\n  }\n}\n\nclass AvailabilityCalculator {\n  calculate(componentAvailabilities: Record<string, number>): { series: number; parallel: number } {\n    const series = Object.values(componentAvailabilities).reduce((p, a) => p * a, 1);\n    const parallel = 1 - Object.values(componentAvailabilities).reduce((p, a) => p * (1 - a), 1);\n    return { series, parallel };\n  }\n\n  nines(a: number): string {\n    if (a >= 0.99999) return \"Five 9s\";\n    if (a >= 0.9999) return \"Four 9s\";\n    if (a >= 0.999) return \"Three 9s\";\n    if (a >= 0.99) return \"Two 9s\";\n    if (a >= 0.9) return \"One 9\";\n    return \"< 90%\";\n  }\n}\n// const ce = new CapacityEstimator();\n// console.log(ce.estimateQPS(1e8, 10, 5));   // { avg: 11574, peak: 57870 }\n// console.log(ce.estimateStorage(1e7, 500, 365)); // 1.8 TB\n// const ac = new AvailabilityCalculator();\n// console.log(ac.calculate({ lb: 0.9999, app: 0.999, db: 0.999 }));\n// console.log(ac.nines(0.99997)); // \"Four 9s\"\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "typescript-littles-law-simulator",
                                  children: "TypeScript: Little's Law Simulator"
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    className: "language-typescript",
                                    children: "class LittlesLawSimulator {\n  simulate(arrivalRate: number, avgServiceTimeMs: number, serverCount: number): {\n    throughput: number; responseTimeMs: number; concurrency: number; queueLength: number; utilization: number;\n  } {\n    const serviceRate = 1000 / avgServiceTimeMs;\n    const totalServiceRate = serviceRate * serverCount;\n    const throughput = Math.min(arrivalRate, totalServiceRate);\n    const utilization = arrivalRate / totalServiceRate;\n    const queueLength = (utilization * utilization) / (1 - utilization) * serverCount;\n    const waitTimeMs = (queueLength / serviceRate) * 1000;\n    const responseTimeMs = waitTimeMs + avgServiceTimeMs;\n    const concurrency = (throughput / 1000) * responseTimeMs;\n    return { throughput: Math.round(throughput), responseTimeMs: Math.round(responseTimeMs), concurrency: Math.round(concurrency), queueLength: Math.round(queueLength), utilization: Math.round(utilization * 100) };\n  }\n}\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "implementation-scalability-and-load-balancing",
                                  children: "Implementation: Scalability and Load Balancing"
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    className: "language-typescript",
                                    children: "interface ServerPool { servers: string[]; algorithm: string; }\nclass LoadBalancer {\n  private index = 0;\n  constructor(private pool: ServerPool) {}\n  next(): string {\n    if (this.pool.algorithm === \"round-robin\") {\n      const s = this.pool.servers[this.index];\n      this.index = (this.index + 1) % this.pool.servers.length;\n      return s;\n    }\n    return this.pool.servers[Math.floor(Math.random() * this.pool.servers.length)];\n  }\n}\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "implementation-scalability-and-load-balancing-1",
                                  children: "Implementation: Scalability and Load Balancing"
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    className: "language-typescript",
                                    children: "interface LoadBalancerConfig { algorithm: \"round-robin\" | \"least-connections\" | \"weighted\"; healthCheckInterval: number; maxRetries: number; weight?: number; }\nclass LoadBalancer {\n  private backends: string[] = []; private currentIndex = 0;\n  constructor(private config: LoadBalancerConfig) {}\n  addBackend(url: string): void { this.backends.push(url); }\n  next(): string {\n    if (this.backends.length === 0) throw new Error(\"No backends available\");\n    if (this.config.algorithm === \"round-robin\") { const b = this.backends[this.currentIndex]; this.currentIndex = (this.currentIndex + 1) % this.backends.length; return b; }\n    if (this.config.algorithm === \"least-connections\") { return this.backends[0]; }\n    return this.backends[Math.floor(Math.random() * this.backends.length)]; }\n  healthCheck(): string[] { return this.backends.filter(() => Math.random() > 0.1); }\n}\nclass AutoScaler {\n  private metrics: number[] = []; private currentInstances: number;\n  constructor(private min: number, private max: number, private scaleUpThreshold: number, private scaleDownThreshold: number, initial: number) { this.currentInstances = initial; }\n  recordMetric(value: number): void { this.metrics.push(value); if (this.metrics.length > 10) this.metrics.shift(); }\n  evaluate(): { action: \"scale-up\" | \"scale-down\" | \"none\"; instances: number } {\n    if (this.metrics.length < 2 || this.currentInstances >= this.max) return { action: \"none\", instances: this.currentInstances };\n    if (this.metrics.every(m => m > this.scaleUpThreshold) && this.currentInstances < this.max) { this.currentInstances++; return { action: \"scale-up\", instances: this.currentInstances }; }\n    if (this.metrics.every(m => m < this.scaleDownThreshold) && this.currentInstances > this.min) { this.currentInstances--; return { action: \"scale-down\", instances: this.currentInstances }; }\n    return { action: \"none\", instances: this.currentInstances }; }\n}\nclass RateLimiter { private counters: Map<string, { count: number; resetTime: number }> = new Map(); constructor(private maxRequests: number, private windowMs: number) {} allow(key: string): boolean { const now = Date.now(); let entry = this.counters.get(key); if (!entry || now > entry.resetTime) { entry = { count: 0, resetTime: now + this.windowMs }; this.counters.set(key, entry); } entry.count++; return entry.count <= this.maxRequests; } }\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "// introduction\n// distributed-systems-scalability implementation"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'introduction', data: { topic: 'distributed-systems-scalability' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "// introduction - additional TS implementations"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'system-design demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'system-design', chapter: 'introduction' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('system-design'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "typescript-latency-calculator",
                                  children: "TypeScript: Latency Calculator"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "The following class simulates latency numbers across different data center distances, computes round-trip time (RTT), and models the impact of geographic distance on request latency."
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    className: "language-typescript",
                                    children: "class LatencyCalculator {\n  private readonly speedOfLightInFiber = 200_000; // km/s (fiber optic ~2/3c)\n\n  private readonly distances: Record<string, number> = {\n    'us-east-us-west': 4000,\n    'us-east-eu-west': 5600,\n    'us-east-asia': 13000,\n    'us-west-asia': 9000,\n    'eu-west-asia': 10000,\n    'same-region': 100,\n    'same-dc': 1,\n  };\n\n  private readonly processingDelays: Record<string, number> = {\n    lb: 0.5,        // load balancer\n    cache: 1.5,     // cache hit\n    db: 10,         // database query\n    tls: 2,         // TLS handshake\n    serialize: 0.3, // JSON serialize/deserialize\n  };\n\n  computeRTT(distanceKm: number): number {\n    return (2 * distanceKm) / this.speedOfLightInFiber * 1000; // ms\n  }\n\n  estimateRequestLatency(\n    from: string,\n    to: string,\n    components: (keyof typeof this.processingDelays)[]\n  ): { rttMs: number; processingMs: number; totalMs: number } {\n    const dist = this.distances[`${from}-${to}`] ?? this.distances['us-east-eu-west'];\n    const rttMs = this.computeRTT(dist);\n    const processingMs = components.reduce((s, c) => s + this.processingDelays[c], 0);\n    return { rttMs: Math.round(rttMs * 10) / 10, processingMs, totalMs: Math.round((rttMs + processingMs) * 10) / 10 };\n  }\n\n  simulateReadPath(userRegion: string, dcRegion: string, cacheHit: boolean): { steps: string[]; totalMs: number } {\n    const steps: string[] = [];\n    let total = 0;\n\n    const dns = this.computeRTT(50); // DNS typically ~50km\n    steps.push(`DNS lookup: ${dns.toFixed(1)}ms`);\n    total += dns;\n\n    const lbRtt = this.computeRTT(this.distances['same-region']);\n    steps.push(`Load balancer RTT: ${lbRtt.toFixed(1)}ms`);\n    total += lbRtt + this.processingDelays.lb;\n\n    if (cacheHit) {\n      const cacheRtt = this.computeRTT(this.distances['same-dc']);\n      steps.push(`Cache hit (same DC): ${cacheRtt.toFixed(1)}ms + ${this.processingDelays.cache}ms process`);\n      total += cacheRtt + this.processingDelays.cache;\n    } else {\n      const dbRtt = this.computeRTT(this.distances[`${userRegion}-${dcRegion}`] ?? this.distances['us-east-eu-west']);\n      steps.push(`Cache miss, DB query RTT: ${dbRtt.toFixed(1)}ms + ${this.processingDelays.db}ms process`);\n      total += dbRtt + this.processingDelays.db;\n    }\n\n    return { steps, totalMs: Math.round(total * 10) / 10 };\n  }\n}\n\n// -- Example ------------------------------------------------------\nconst latCalc = new LatencyCalculator();\nconsole.log('RTT US-East to EU-West:', latCalc.computeRTT(5600).toFixed(1), 'ms');\nconst result = latCalc.simulateReadPath('us-east', 'eu-west', false);\nconsole.log('Read path (cache miss):', result.totalMs, 'ms');\nresult.steps.forEach(s => console.log('  -', s));\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "typescript-cap-theorem-validator",
                                  children: "TypeScript: CAP Theorem Validator"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "This class simulates CAP theorem trade-offs across multiple nodes, demonstrating how partition tolerance affects consistency and availability decisions in real time."
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    className: "language-typescript",
                                    children: "interface NodeState {\n  id: string;\n  data: Map<string, string>;\n  alive: boolean;\n  partitionGroup: 'majority' | 'minority';\n}\n\nclass CAPTheoremValidator {\n  private nodes: NodeState[] = [];\n\n  addNode(id: string): void {\n    this.nodes.push({ id, data: new Map(), alive: true, partitionGroup: 'majority' });\n  }\n\n  simulatePartition(minorityIds: string[]): void {\n    for (const node of this.nodes) {\n      node.partitionGroup = minorityIds.includes(node.id) ? 'minority' : 'majority';\n      node.alive = true;\n    }\n  }\n\n  healPartition(): void {\n    for (const node of this.nodes) {\n      node.partitionGroup = 'majority';\n      node.alive = true;\n    }\n  }\n\n  write(key: string, value: string, preferConsistency: boolean): { success: boolean; nodesWritten: number; message: string } {\n    let written = 0;\n    let total = 0;\n    for (const node of this.nodes) {\n      if (!node.alive) continue;\n      total++;\n      if (preferConsistency && node.partitionGroup === 'minority') {\n        if (node.id === 'coordinator') continue; // CP: reject minority writes\n      }\n      node.data.set(key, value);\n      written++;\n    }\n    const minoritySize = this.nodes.filter(n => n.partitionGroup === 'minority').length;\n    const majoritySize = this.nodes.length - minoritySize;\n\n    if (preferConsistency && minoritySize > 0) {\n      return {\n        success: written >= majoritySize,\n        nodesWritten: written,\n        message: `CP behavior: wrote to ${written}/${total} nodes (rejected ${minoritySize} minority nodes). Availability sacrificed for consistency.`,\n      };\n    }\n    return {\n      success: written > 0,\n      nodesWritten: written,\n      message: `AP behavior: wrote to ${written}/${total} nodes. Consistency sacrificed — minority partition may serve stale reads.`,\n    };\n  }\n\n  read(key: string, preferConsistency: boolean): { value: string | undefined; stalenessRisk: boolean; message: string } {\n    const values = new Set<string>();\n    for (const node of this.nodes) {\n      if (!node.alive) continue;\n      if (preferConsistency && node.partitionGroup === 'minority') continue;\n      const v = node.data.get(key);\n      if (v !== undefined) values.add(v);\n    }\n    const majoritySize = this.nodes.filter(n => n.partitionGroup === 'majority' && n.alive).length;\n    const minoritySize = this.nodes.filter(n => n.partitionGroup === 'minority' && n.alive).length;\n\n    if (preferConsistency && minoritySize > 0 && values.size > 1) {\n      return { value: undefined, stalenessRisk: true, message: `CP read: ${majoritySize} majority nodes disagree with ${minoritySize} minority nodes. Blocking read until partition heals.` };\n    }\n    return {\n      value: values.values().next().value,\n      stalenessRisk: !preferConsistency && values.size > 0,\n      message: `${preferConsistency ? 'CP' : 'AP'} read: returned value from ${values.size > 0 ? 'available' : 'no'} nodes.`,\n    };\n  }\n\n  validateCAP(preferConsistency: boolean, simulateNetworkFailure: boolean): string[] {\n    const events: string[] = [];\n    events.push(`System configured as ${preferConsistency ? 'CP (Consistency优先)' : 'AP (Availability优先)'}`);\n    if (simulateNetworkFailure) {\n      events.push('Network partition injected: nodes split into majority/minority groups');\n      const writeResult = this.write('x', '42', preferConsistency);\n      events.push(writeResult.message);\n      const readResult = this.read('x', preferConsistency);\n      events.push(readResult.message);\n      this.healPartition();\n      events.push('Partition healed. All nodes reconciled.');\n    } else {\n      events.push('Network healthy: both C and A are achievable simultaneously');\n      this.write('x', '42', preferConsistency);\n      const readResult = this.read('x', preferConsistency);\n      events.push(readResult.message);\n    }\n    return events;\n  }\n}\n\n// -- Example ------------------------------------------------------\nconst cap = new CAPTheoremValidator();\ncap.addNode('coordinator');\ncap.addNode('replica-1');\ncap.addNode('replica-2');\ncap.addNode('replica-3');\n\nconst cpResult = cap.validateCAP(true, true);\nconsole.log('=== CP Validation with Partition ===');\ncpResult.forEach(e => console.log(e));\n\nconst apResult = cap.validateCAP(false, true);\nconsole.log('=== AP Validation with Partition ===');\napResult.forEach(e => console.log(e));\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "system-design-interview-process-flowchart",
                                  children: "System Design Interview Process Flowchart"
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    className: "language-mermaid",
                                    children: "flowchart TD\n    classDef phase fill:#4a90d9,color:#fff,stroke:#2c5f8a,stroke-width:2px\n    classDef decision fill:#f5a623,color:#fff,stroke:#c47f12,stroke-width:2px\n    classDef output fill:#7ed321,color:#fff,stroke:#4a8c14,stroke-width:2px\n    classDef warning fill:#d0021b,color:#fff,stroke:#8b0015,stroke-width:2px\n    classDef action fill:#9013fe,color:#fff,stroke:#5c0e9e,stroke-width:2px\n\n    subgraph Interview_Process\n        START([Interview Start]) --> PHASE1[Phase 1: Requirements]\n        PHASE1 --> CLARIFY{Clarify Questions}\n        CLARIFY -->|DAU, QPS, Features| EST_FUNC[Functional Reqs]\n        CLARIFY -->|Latency, SLA, Scale| EST_NFR[Non-Functional Reqs]\n\n        PHASE1 --> PHASE2[Phase 2: Estimation]\n        PHASE2 --> QPS_CALC[Calculate QPS]\n        PHASE2 --> STORAGE_CALC[Calculate Storage]\n        PHASE2 --> BANDWIDTH_CALC[Calculate Bandwidth]\n\n        PHASE2 --> PHASE3[Phase 3: High-Level Design]\n        PHASE3 --> COMPONENTS[Choose Components]\n        COMPONENTS --> LB[Load Balancer]\n        COMPONENTS --> CACHE[Cache Tier]\n        COMPONENTS --> DB[Database]\n        COMPONENTS --> CDN[CDN]\n        COMPONENTS --> MQ[Message Queue]\n        PHASE3 --> DIAGRAM[Drawing Component Diagram]\n\n        PHASE3 --> PHASE4[Phase 4: Deep Dive]\n        PHASE4 --> BOTTLENECK{Identify Bottlenecks}\n        BOTTLENECK -->|Write Heavy| WRITE_OPT[Write Optimization]\n        BOTTLENECK -->|Read Heavy| READ_OPT[Read Optimization]\n        BOTTLENECK -->|Both| HYBRID[Hybrid Strategy]\n\n        PHASE4 --> TRADE_OFFS{Articulate Trade-Offs}\n        TRADE_OFFS -->|Consistency vs Avail| CAP_DEC[CAP Decision]\n        TRADE_OFFS -->|Latency vs Throughput| LAT_DEC[Latency Tuning]\n        TRADE_OFFS -->|Cost vs Performance| COST_DEC[Cost Analysis]\n\n        WRITE_OPT --> REVIEW(Review & Iterate)\n        READ_OPT --> REVIEW\n        HYBRID --> REVIEW\n        CAP_DEC --> REVIEW\n        LAT_DEC --> REVIEW\n        COST_DEC --> REVIEW\n    end\n\n    START:::action\n    PHASE1:::phase\n    PHASE2:::phase\n    PHASE3:::phase\n    PHASE4:::phase\n    CLARIFY:::decision\n    BOTTLENECK:::decision\n    TRADE_OFFS:::decision\n    QPS_CALC:::output\n    STORAGE_CALC:::output\n    BANDWIDTH_CALC:::output\n    DIAGRAM:::output\n    REVIEW:::action\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
                                        children: "Start with requirements, not architecture"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Spend 3-5 minutes clarifying DAU, QPS, storage needs before drawing boxes"
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "Master back-of-the-envelope estimation"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Use QPS, storage, and bandwidth formulas to constrain design choices within 2x accuracy"
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "Understand CAP trade-offs deeply"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Choose CP (banking) or AP (social feeds) based on business needs — never both during a partition"
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "Latency vs throughput is the primary tension"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Batch for throughput (video processing); stream for latency (chat, gaming)"
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "Read vs write optimization dictates the stack"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Read-heavy: cache, CDN, denormalization. Write-heavy: LSM-trees, message queues, append-only logs"
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "Each \"nine\" of availability adds ~10x cost"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Target minimum viable availability that meets the SLA — over-engineering is the most common mistake"
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "Apply the 4-phase process religiously"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Requirements ? Estimation ? HLD ? Deep Dive. Skipping any phase leads to incomplete designs"
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "case-study",
                                  children: "Case Study"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: "Designing Instagram's Story Feature."
                                  }), " Instagram Stories needed to support 500M+ DAU uploading ephemeral content (photos, videos) that disappears after 24 hours. The core challenge was handling massive write throughput (millions of story uploads per minute) while ensuring low-latency reads for followers. The engineering team chose a write-optimized architecture: stories are first written to a local cache (Redis) for immediate availability, then asynchronously persisted to a distributed object store (S3) with metadata in Cassandra. Reads are served from the cache whenever possible, with CDN offload for viral stories. The key trade-off was accepting eventual consistency for story views (a follower might not see a story for 1-2 seconds after upload) in exchange for write throughput that could handle Super Bowl-level traffic spikes."]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: "Lessons Learned."
                                  }), " The initial monolithic MySQL backend failed at 100K QPS writes — the team migrated to a sharded Cassandra cluster with LSM-tree storage to handle the write-heavy workload. They implemented consistent hashing with virtual nodes (150 vnodes per physical node) to distribute story data evenly across the cluster. Read repair and hinted handoff ensured that even during node failures, no story data was lost. The most important architectural insight was that ephemeral content (24-hour TTL) aligned perfectly with LSM-tree compaction — expired stories were naturally reclaimed during compaction without explicit delete operations, reducing write amplification by 40%."]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: "Business Impact."
                                  }), " By re-architecting for write throughput rather than read optimization, Instagram reduced story upload latency by 3x (from 1.2s to 400ms p99) and cut infrastructure costs by 35% through efficient compaction-driven storage reclamation. The architecture scaled to handle 4M+ stories uploaded during major events (Super Bowl, World Cup) with zero downtime. This case study demonstrates that identifying the primary NFR (write throughput for stories vs read throughput for feed) and choosing the corresponding storage engine (LSM-tree / Cassandra vs B-Tree / MySQL) is the most consequential design decision in any system."]
                                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                  id: "chapter-quiz-2",
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
                                        children: "What is the minimum availability for less than 1 hour downtime/year?"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "99%"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "99.9%"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "99.99%"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "99.999%"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "C"
                                        })
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "2"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Which phase comes after back-of-the-envelope estimation?"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Requirements gathering"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "High-level design"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Detailed deep dive"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Deployment"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "B"
                                        })
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "3"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "MTBF=720h, MTTR=4h. What is availability?"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "99.0%"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "99.45%"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "99.94%"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "99.99%"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "B"
                                        })
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "4"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "What does Little's Law state?"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Throughput equals capacity"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "L = λW"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Latency is always under 100ms"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Storage grows linearly"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "B"
                                        })
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "5"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Why is tail latency critical in distributed systems?"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "It determines median user experience"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "A single slow request causes head-of-line blocking"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "It is cheaper to optimize"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "SLAs only measure tail latency"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "B"
                                        })
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                  id: "summary",
                                  children: "Summary"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "System design is distinct from software architecture (system-wide concerns) and algorithm design (computational efficiency at bounded scales)."
                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "The ten non-functional requirements are scalability, reliability, availability, maintainability, performance, security, and cost efficiency. Each has specific metrics."
                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "The four-phase design process is: requirements gathering, back-of-the-envelope estimation, high-level design, and detailed deep dive."
                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "Back-of-the-envelope estimation uses simple formulas for QPS, storage, bandwidth, and memory. The goal is order-of-magnitude correctness, not precision."
                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "Every design decision is a trade-off; the correct choice depends on the system's primary NFRs, not on abstract \"best practices.\""
                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "SLA, SLO, and SLI form a three-tier commitment cascade: legal contract, internal target, actual measurement."
                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "Real systems like Google Search, Facebook, and WhatsApp optimize for radically different NFR profiles despite serving similar scale."
                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "Little's Law (L = λW) relates throughput, concurrency, and latency in stable-state systems."
                                  }), "\n"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                  id: "exercises",
                                  children: "Exercises"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                                  children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
                                    children: "Review Questions — Click to expand"
                                  }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                    id: "review-questions-4-5",
                                    children: "Review Questions (4-5)"
                                  }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                                    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                        children: ["Explain the difference between MTBF and MTTR and how they relate to availability. Write the formula.\n", (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "Solution:"
                                        }), " MTBF (Mean Time Between Failures) measures average time between failures; MTTR (Mean Time To Repair) measures average time to restore service. Availability = MTBF / (MTBF + MTTR)."]
                                      }), "\n"]
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                        children: ["A system serves 99.9% availability in its SLA but measures 99.95% as its SLO. Why is the SLO stricter than the SLA?\n", (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "Solution:"
                                        }), " The SLO is an internal target set higher than the SLA to provide a safety buffer. If the SLO is breached, the team can fix issues before the SLA is violated and penalties apply."]
                                      }), "\n"]
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                        children: ["What is tail latency and why does it matter more in distributed systems than in single-machine systems?\n", (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "Solution:"
                                        }), " Tail latency (p99/p99.9) measures the slowest requests. In distributed systems, fan-out requests mean the overall latency is determined by the slowest component — a single straggler delays the entire response (head-of-line blocking)."]
                                      }), "\n"]
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                        children: ["List the four phases of the system design process and describe the output of each.\n", (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "Solution:"
                                        }), " (1) Requirements — clarified functional/NFR constraints; (2) Estimation — QPS, storage, bandwidth numbers; (3) HLD — component diagram with load balancers, caches, databases; (4) Deep Dive — detailed analysis of bottlenecks, trade-offs, and specific algorithms."]
                                      }), "\n"]
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                        children: ["How does system design differ from algorithm design in terms of constraints and objectives?\n", (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "Solution:"
                                        }), " Algorithm design focuses on time/space complexity for a single procedure; system design focuses on throughput, latency, availability, and cost at internet scale. System designers routinely trade algorithmic purity for practical scalability."]
                                      }), "\n"]
                                    }), "\n"]
                                  }), "\n"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                                  children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
                                    children: "Application Problems — Click to expand"
                                  }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                    id: "application-problems-3-4",
                                    children: "Application Problems (3-4)"
                                  }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                                    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                        children: ["A notification service sends 10M push notifications per day. Each notification payload is 4 KB. Compute daily bandwidth, and estimate the number of servers needed if each server handles 1,000 push operations per second.\n", (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "Solution:"
                                        }), " Daily bandwidth = 10M x 4 KB = 40 GB/day. Peak QPS = 10M / 86,400 ≈ 116 QPS. At 1,000 ops/sec per server, 1 server suffices for average load; 2-3 servers recommended for peak and failover."]
                                      }), "\n"]
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                        children: ["A video platform with 10M DAU streams 30 minutes of video per user per day at 10 Mbps. Compute daily data transfer, CDN cost (assume $0.02/GB), and suggest two optimizations.\n", (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "Solution:"
                                        }), " Daily transfer = 10M x 30 min x 60 s x 10 Mbps / 8 = 2.25e16 bits = 2.81 PB/day. CDN cost = 2.81e6 GB x $0.02 = $56,200/day. Optimizations: (1) Encode at multiple bitrates and serve lowest acceptable quality; (2) Cache popular content at edge with longer TTL."]
                                      }), "\n"]
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                        children: ["A search engine needs to return results in under 200ms. The index lookup takes 50ms, query parsing 10ms, ranking 120ms, and network RTT 40ms. Explain the bottleneck and suggest a mitigation.\n", (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "Solution:"
                                        }), " Total = 50+10+120+40 = 220ms, exceeding 200ms. Bottleneck is ranking (120ms). Mitigation: pre-compute ranking features, use tiered ranking (lightweight model first, full model only for top candidates), or parallelize query parsing + index lookup with ranking."]
                                      }), "\n"]
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                        children: ["Design a simplified rate-limiter for a public API. List the NFRs you would use, estimate QPS for 100M daily requests, and choose between a token-bucket and leaky-bucket algorithm with justification.\n", (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "Solution:"
                                        }), " NFRs: sub-ms latency for rate check, 99.99% availability, scale to 100K QPS. Avg QPS = 100M / 86,400 ≈ 1,157. Peak QPS ≈ 3,500. Choose token-bucket for burst tolerance — users can burst to 2x rate for short periods while long-term average is enforced."]
                                      }), "\n"]
                                    }), "\n"]
                                  }), "\n"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                                  children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
                                    children: "Challenge Problem — Click to expand"
                                  }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                    id: "challenge-problem-1",
                                    children: "Challenge Problem (1)"
                                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                    children: "You are tasked with designing the backend for a real-time collaborative document editor (similar to Google Docs) that supports 10K concurrent editors on a single document and 10M daily active users overall. The system must support conflict resolution, real-time sync (sub-500ms propagation), version history (30-day retention), and offline editing."
                                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "Solution Outline:"
                                    })
                                  }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                                    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                        children: "Estimation:"
                                      }), " Assume 10M users, 100 docs/user, avg doc size 50 KB. Storage = 10M x 100 x 50 KB = 50 TB. Peak writes = 10K concurrent ops x 10 ops/sec = 100K ops/sec. Bandwidth ≈ 100K x 1 KB = 100 MB/s."]
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                        children: "NFR Priority:"
                                      }), " Performance (sub-500ms sync) > Reliability (zero data loss) > Availability > Consistency (eventual with CRDTs)."]
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                        children: "Architecture:"
                                      }), " WebSocket gateway cluster, CRDT-based operation transformation service, Redis for active document state, Cassandra for persistent history, S3 for document snapshots."]
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                        children: "Conflict Resolution:"
                                      }), " Use CRDTs (specifically RGA — Replicated Growable Array) for text operations. RGA ensures convergence without central coordination because concurrent insertions commute."]
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                        children: "Bottleneck:"
                                      }), " At 10x scale, the WebSocket gateway becomes the bottleneck (connection count). Mitigation: shard connections by document_id, use consistent hashing across gateway nodes, and implement connection coalescing."]
                                    }), "\n"]
                                  }), "\n"]
                                }), "\n"]
                              })
                            })]
                          })
                        })]
                      })
                    })]
                  })
                })]
              })
            })]
          })
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