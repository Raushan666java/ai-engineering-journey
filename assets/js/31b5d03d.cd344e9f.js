"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[87501],{

/***/ 61590
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_software_engineering_04_architectural_design_md_31b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-software-engineering-04-architectural-design-md-31b.json
const site_docs_courses_software_engineering_04_architectural_design_md_31b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/software-engineering/04-architectural-design","title":"Architectural Design","description":"Learning Objectives","source":"@site/docs/courses/software-engineering/04-architectural-design.md","sourceDirName":"courses/software-engineering","slug":"/software-engineering/04-architectural-design","permalink":"/ai-engineering-journey/software-engineering/04-architectural-design","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"04-architectural-design","slug":"/software-engineering/04-architectural-design","title":"Architectural Design","sidebar_label":"Architectural Design","sidebar_position":4},"sidebar":"course-software-engineering","previous":{"title":"System Modelling","permalink":"/ai-engineering-journey/software-engineering/03-system-modeling"},"next":{"title":"Design and Implementation","permalink":"/ai-engineering-journey/software-engineering/05-design-implementation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/software-engineering/04-architectural-design.md


const frontMatter = {
	id: '04-architectural-design',
	slug: '/software-engineering/04-architectural-design',
	title: 'Architectural Design',
	sidebar_label: 'Architectural Design',
	sidebar_position: 4
};
const contentTitle = 'Architectural Design';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "The Role of Architectural Design",
  "id": "the-role-of-architectural-design",
  "level": 3
}, {
  "value": "Architectural Decisions",
  "id": "architectural-decisions",
  "level": 3
}, {
  "value": "Quality Attribute Scenarios",
  "id": "quality-attribute-scenarios",
  "level": 3
}, {
  "value": "Architecture Pattern Categories",
  "id": "architecture-pattern-categories",
  "level": 3
}, {
  "value": "The Layered Architecture Pattern",
  "id": "the-layered-architecture-pattern",
  "level": 3
}, {
  "value": "The Model-View-Controller Pattern",
  "id": "the-model-view-controller-pattern",
  "level": 3
}, {
  "value": "The Repository Pattern",
  "id": "the-repository-pattern",
  "level": 3
}, {
  "value": "The Client-Server Pattern",
  "id": "the-client-server-pattern",
  "level": 3
}, {
  "value": "The Pipe-and-Filter Pattern",
  "id": "the-pipe-and-filter-pattern",
  "level": 3
}, {
  "value": "Microservices Architecture",
  "id": "microservices-architecture",
  "level": 3
}, {
  "value": "The Event-Driven Pattern",
  "id": "the-event-driven-pattern",
  "level": 3
}, {
  "value": "CQRS (Command Query Responsibility Segregation)",
  "id": "cqrs-command-query-responsibility-segregation",
  "level": 3
}, {
  "value": "Hexagonal Architecture (Ports and Adapters)",
  "id": "hexagonal-architecture-ports-and-adapters",
  "level": 3
}, {
  "value": "The Broker Pattern",
  "id": "the-broker-pattern",
  "level": 3
}, {
  "value": "Architecture Pattern Comparison",
  "id": "architecture-pattern-comparison",
  "level": 3
}, {
  "value": "Quality Attribute Evaluation Framework (ATAM-inspired)",
  "id": "quality-attribute-evaluation-framework-atam-inspired",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Layered Architecture in TypeScript",
  "id": "example-1-layered-architecture-in-typescript",
  "level": 3
}, {
  "value": "Example 2: Hexagonal Architecture in TypeScript",
  "id": "example-2-hexagonal-architecture-in-typescript",
  "level": 3
}, {
  "value": "Example 3: ArchitectureDecisionRecord Manager",
  "id": "example-3-architecturedecisionrecord-manager",
  "level": 3
}, {
  "value": "Example 4: QualityAttributeScenario Builder",
  "id": "example-4-qualityattributescenario-builder",
  "level": 3
}, {
  "value": "Example 5: ArchitectureEvaluator — SAAM/ATAM-Inspired",
  "id": "example-5-architectureevaluator--saamatam-inspired",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
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
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Exercise 1: Architecture Pattern Selection for an Online Banking System",
  "id": "exercise-1-architecture-pattern-selection-for-an-online-banking-system",
  "level": 3
}, {
  "value": "Exercise 2: ADRs for a Hospital Management System",
  "id": "exercise-2-adrs-for-a-hospital-management-system",
  "level": 3
}, {
  "value": "Exercise 3: Quality Attribute Scenarios",
  "id": "exercise-3-quality-attribute-scenarios",
  "level": 3
}, {
  "value": "Exercise 4: Architecture Evaluation",
  "id": "exercise-4-architecture-evaluation",
  "level": 3
}, {
  "value": "Exercise 5: Hexagonal Architecture Implementation",
  "id": "exercise-5-hexagonal-architecture-implementation",
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
        id: "architectural-design",
        children: "Architectural Design"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "✅ After completing this chapter, the student will be able to:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Explain the role of architectural design in software engineering and its impact on quality attributes"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Identify the key decisions made during architectural design"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Describe and compare layered, MVC, repository, client-server, pipe-and-filter, microservices, event-driven, CQRS, hexagonal, and broker patterns"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Apply quality attribute scenarios to evaluate architectures quantitatively"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Document architectural decisions using ADRs with full context, alternatives, and consequences"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Evaluate architectures using SAAM/ATAM-inspired scoring frameworks"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Select appropriate architectural patterns based on quality attribute requirements"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Implement layered, MVC, and hexagonal architectures in TypeScript"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Build an ArchitectureDecisionRecord manager with full lifecycle support"
        }), "\n"]
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
        href: "../../assets/images/lessons/software-engineering/04-architectural-design/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/software-engineering/04-architectural-design/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/software-engineering/04-architectural-design/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/software-engineering/04-architectural-design/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/software-engineering/04-architectural-design/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/software-engineering/04-architectural-design/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-role-of-architectural-design",
      children: "The Role of Architectural Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Architectural design is the process of defining the overall structure of a software system. It identifies the major components, their responsibilities, and the relationships between them. Architectural design is the first stage of the design process and serves as the bridge between requirements and detailed design."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The architecture of a system influences every subsequent development activity. It determines the system's ability to meet ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "quality attributes"
      }), " including performance, security, maintainability, and reliability. Architectural decisions are the most consequential decisions in software development because they are the most difficult to change — a poor architectural decision can haunt a project for years."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    REQ[Requirements] --> ARCH[Architectural Design]\n    ARCH --> DET[Detailed Design]\n    DET --> IMP[Implementation]\n    ARCH --> QA[Quality Attributes]\n    QA --> PERF[Performance<br/>Latency, Throughput]\n    QA --> SEC[Security<br/>Confidentiality, Integrity]\n    QA --> MAIN[Maintainability<br/>Modifiability, Testability]\n    QA --> REL[Reliability<br/>Availability, Fault Tolerance]\n    QA --> SCA[Scalability<br/>Horizontal & Vertical]\n    QA --> USAB[Usability<br/>Learnability, Efficiency]\n    PERF --> TRADE[Architectural Trade-offs]\n    SEC --> TRADE\n    MAIN --> TRADE\n    REL --> TRADE\n\n    classDef req fill:#e74c3c,stroke:#c0392b,color:#fff\n    classDef design fill:#3498db,stroke:#2980b9,color:#fff\n    classDef qa fill:#f39c12,stroke:#d35400,color:#fff\n    classDef trade fill:#9b59b6,stroke:#8e44ad,color:#fff\n    class REQ req\n    class ARCH,DET,IMP design\n    class QA,PERF,SEC,MAIN,REL,SCA,USAB qa\n    class TRADE trade\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "architectural-decisions",
      children: "Architectural Decisions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Architectural decisions include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Selection of architectural patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partitioning of functionality into components"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assignment of responsibilities to components"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Specification of communication protocols"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choice of data storage strategy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adoption of technology platforms"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture Decision Records (ADRs)"
      }), " capture each decision with its context, alternatives, rationale, and consequences. The lightweight ADR format (by Michael Nygard) has become an industry standard:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ArchitectureDecisionRecord {\n  id: string;\n  title: string;\n  status: 'proposed' | 'accepted' | 'deprecated' | 'superseded';\n  context: string;\n  alternatives: string[];\n  decision: string;\n  rationale: string;\n  consequences: string[];\n  date: Date;\n  supersedes?: string;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quality-attribute-scenarios",
      children: "Quality Attribute Scenarios"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quality attribute scenarios provide a structured way to specify and evaluate quality requirements. Each scenario has six parts:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stimulus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event that triggers a response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"1,000 concurrent users send HTTP requests\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Source"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Origin of the stimulus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Users through web browsers globally\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Environment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System state during response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Normal operations, peak business hours\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Response"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Observable behaviour produced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Requests processed, responses returned\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Response measure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How the response is quantified"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"95th percentile response time < 2 seconds\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Artifact"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System component being measured"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"The web application tier, CPU at < 70%\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example scenarios:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attribute"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Availability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When a database node fails (stimulus), the system (artifact) in production (environment) continues serving reads from replicas (response) within 5 seconds with zero data loss (measure)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Modifiability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When a developer changes the pricing algorithm (stimulus), the system (artifact) at design time (environment) can be modified in under 4 hours by one developer (response) with no regression in test coverage (measure)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When 10,000 concurrent users submit orders (stimulus), the system (artifact) under peak load (environment) processes all orders within 30 seconds (response) at 99th percentile latency under 500ms (measure)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When an attacker attempts SQL injection (stimulus), the system (artifact) in production (environment) rejects the input, logs the attempt (response) with zero successful injections per million attempts (measure)."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "architecture-pattern-categories",
      children: "Architecture Pattern Categories"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Architectural patterns can be categorised by their primary concern:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Concern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Patterns"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Structure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How components are organised"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Layered, Hexagonal, Onion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Distribution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How components communicate across boundaries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-Server, Microservices, Broker"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interaction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How components interact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event-Driven, Publish-Subscribe, CQRS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How data is managed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repository, CQRS, Event Sourcing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-layered-architecture-pattern",
      children: "The Layered Architecture Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The layered architecture organises the system into horizontal layers, where each layer provides services to the layer above and consumes services from the layer below."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Three-Tier Architecture\"\n        subgraph \"Presentation Layer\"\n            WEB[Web UI<br/>React / Angular]\n            MOBILE[Mobile App<br/>iOS / Android]\n            API[REST API<br/>Express.js]\n        end\n        subgraph \"Business Logic Layer\"\n            SERVICE[Service Layer<br/>Business Logic]\n            DOMAIN[Domain Models<br/>Entities & Value Objects]\n            VALID[Validation<br/>Business Rules]\n        end\n        subgraph \"Data Access Layer\"\n            REPO[Repository<br/>Data Access]\n            ORM[ORM / Query Builder]\n            DB[(Database<br/>PostgreSQL)]\n        end\n    end\n    WEB --> SERVICE\n    MOBILE --> SERVICE\n    API --> SERVICE\n    SERVICE --> REPO\n    DOMAIN --> VALID\n    REPO --> ORM\n    ORM --> DB\n\n    classDef pres fill:#3498db,stroke:#2980b9,color:#fff\n    classDef bus fill:#2ecc71,stroke:#27ae60,color:#fff\n    classDef data fill:#e67e22,stroke:#d35400,color:#fff\n    class WEB,MOBILE,API pres\n    class SERVICE,DOMAIN,VALID bus\n    class REPO,ORM,DB data\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Separation of concerns — each layer has a clear responsibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encapsulation — changes within a layer do not affect other layers if interfaces remain stable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testability — each layer can be tested independently (mock the layer below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reusability — layers can be reused across applications"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Costs:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance overhead from passing through multiple layers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Layers may become tightly coupled if dependencies are not managed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cascading changes when interfaces change"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extra code for facade/wrapper classes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use:"
      }), " Enterprise applications, information systems, systems with multiple presentation channels."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-model-view-controller-pattern",
      children: "The Model-View-Controller Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MVC separates an interactive application into three components. It is one of the most widely used patterns in web and desktop applications."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    U[User] --> V[View]\n    V --> C[Controller]\n    C --> M[Model]\n    M --> V\n\n    classDef user fill:#e74c3c,stroke:#c0392b,color:#fff\n    classDef view fill:#3498db,stroke:#2980b9,color:#fff\n    classDef ctrl fill:#f39c12,stroke:#d35400,color:#fff\n    classDef model fill:#2ecc71,stroke:#27ae60,color:#fff\n    class U user\n    class V view\n    class C ctrl\n    class M model\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Responsibility"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application data, business rules, state management, persistence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "View"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rendering the model into a user interface, observing model changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Controller"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interpreting user input, updating model or view, routing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Variations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MVP (Model-View-Presenter):"
        }), " View is passive, Presenter handles all UI logic"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MVVM (Model-View-ViewModel):"
        }), " ViewModel exposes data binding, used in WPF, Angular"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MVC in web frameworks:"
        }), " Rails, Spring MVC, ASP.NET MVC, Express.js, Laravel"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-repository-pattern",
      children: "The Repository Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The repository pattern centralises data storage and management. All components access data through a central repository, providing a clean separation between domain logic and data access."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Repository Architecture\"\n        C1[Component 1<br/>Auth Module] --> R[Repository<br/>Data Hub]\n        C2[Component 2<br/>Order Module] --> R\n        C3[Component 3<br/>Reporting Module] --> R\n        R --> R1[(Primary Store<br/>PostgreSQL)]\n        R --> R2[(Cache<br/>Redis)]\n        R --> R3[(Search Index<br/>Elasticsearch)]\n    end\n\n    classDef comp fill:#3498db,stroke:#2980b9,color:#fff\n    classDef repo fill:#e74c3c,stroke:#c0392b,color:#fff\n    classDef store fill:#2ecc71,stroke:#27ae60,color:#fff\n    class C1,C2,C3 comp\n    class R repo\n    class R1,R2,R3 store\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simple communication model — all components share the same data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data consistency — centralised update management ensures integrity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Suitable for data-centric systems (information systems, compilers, IDEs)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Costs:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repository becomes a performance bottleneck under high concurrency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single point of failure without replication"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Components become coupled to the repository structure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-client-server-pattern",
      children: "The Client-Server Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The client-server pattern distributes the system into ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "servers"
      }), " that provide services and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "clients"
      }), " that request them."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Variations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Two-tier:"
        }), " Client directly accesses database (fat client)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Three-tier:"
        }), " Application server mediates between client and database"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-tier (n-tier):"
        }), " Additional intermediate layers for specific concerns (caching, messaging, authentication)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-pipe-and-filter-pattern",
      children: "The Pipe-and-Filter Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The pipe-and-filter pattern processes data through a sequence of processing steps. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Filters"
      }), " transform data; ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pipes"
      }), " convey data between filters."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      }), " Filters are independent, reusable, composable; supports incremental processing and parallel execution.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Costs:"
      }), " Overhead of data transformation between filters; difficulty maintaining state across the pipeline.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use:"
      }), " Batch processing, compilers, ETL pipelines, data transformation pipelines."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "microservices-architecture",
      children: "Microservices Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Microservices decomposes a system into small, independently deployable services, each running in its own process and communicating through lightweight mechanisms (typically HTTP/REST or messaging)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Microservices Architecture\"\n        GW[API Gateway<br/>Kong / NGINX]\n        GW --> US[User Service<br/>:8081]\n        GW --> OS[Order Service<br/>:8082]\n        GW --> PS[Payment Service<br/>:8083]\n        GW --> NS[Notification Service<br/>:8084]\n        GW --> IS[Inventory Service<br/>:8085]\n        US --> UDB[(User DB<br/>MongoDB)]\n        OS --> ODB[(Order DB<br/>PostgreSQL)]\n        PS --> PDB[(Payment DB<br/>PostgreSQL)]\n        IS --> IDB[(Inventory DB<br/>MySQL)]\n        OS -->|Event| MQ[Message Queue<br/>Kafka]\n        MQ --> NS\n        MQ --> IS\n    end\n\n    classDef gw fill:#9b59b6,stroke:#8e44ad,color:#fff\n    classDef svc fill:#3498db,stroke:#2980b9,color:#fff\n    classDef db fill:#2ecc71,stroke:#27ae60,color:#fff\n    classDef mq fill:#e67e22,stroke:#d35400,color:#fff\n    class GW gw\n    class US,OS,PS,NS,IS svc\n    class UDB,ODB,PDB,IDB db\n    class MQ mq\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Independent deployability — each service can be deployed without coordinating with others"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Technology diversity (polyglot persistence) — each service can use the best technology for its domain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Team alignment with Conway's law — service boundaries match team boundaries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resilience through fault isolation — one service failure doesn't cascade"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Costs:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distributed system complexity — network latency, partial failures, distributed tracing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data consistency challenges — eventual consistency requires careful design"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Service discovery and orchestration overhead"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Operational burden — monitoring, logging, deployment automation for many services"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use:"
      }), " Large, complex systems with multiple independent development teams."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-event-driven-pattern",
      children: "The Event-Driven Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The event-driven pattern organises components around the production and consumption of events. Producers emit events without knowing which consumers will process them; consumers subscribe to events of interest."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    subgraph \"Event-Driven Architecture\"\n        P1[Order Service<br/>Producer] -->|OrderPlaced| EB[Event Bus<br/>Kafka / RabbitMQ]\n        P2[Inventory Service<br/>Producer] -->|StockUpdated| EB\n        P3[Payment Service<br/>Producer] -->|PaymentProcessed| EB\n        EB -->|Subscribe: OrderPlaced| C1[Notification Service<br/>Consumer]\n        EB -->|Subscribe: StockUpdated| C2[Analytics Service<br/>Consumer]\n        EB -->|Subscribe: PaymentProcessed| C3[Shipping Service<br/>Consumer]\n        EB -->|Subscribe: *| C4[Audit Service<br/>Consumer]\n    end\n\n    classDef prod fill:#3498db,stroke:#2980b9,color:#fff\n    classDef bus fill:#e74c3c,stroke:#c0392b,color:#fff\n    classDef cons fill:#2ecc71,stroke:#27ae60,color:#fff\n    class P1,P2,P3 prod\n    class EB bus\n    class C1,C2,C3,C4 cons\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Highly decoupled — producers and consumers don't know each other"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Highly scalable — consumers can be added independently"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-time responsiveness — events processed as they occur"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Costs:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Event schema evolution requires careful versioning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Event ordering and delivery guarantees are challenging"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Debugging distributed event flows is difficult"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eventual consistency must be acceptable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cqrs-command-query-responsibility-segregation",
      children: "CQRS (Command Query Responsibility Segregation)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CQRS separates read and write operations into different models. Commands change state; queries return data. This allows optimising each model independently."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"CQRS Architecture\"\n        USER[User / Client]\n        USER --> CMD[Command Handler<br/>Write Model]\n        USER --> QRY[Query Handler<br/>Read Model]\n        CMD --> WRITE_DB[(Write Database<br/>Normalised)]\n        WRITE_DB --> SYNCHRONIZER[Eventual<br/>Consistency Sync]\n        SYNCHRONIZER --> READ_DB[(Read Database<br/>De-normalised)]\n        QRY --> READ_DB\n    end\n\n    classDef user fill:#e74c3c,stroke:#c0392b,color:#fff\n    classDef cmd fill:#3498db,stroke:#2980b9,color:#fff\n    classDef qry fill:#2ecc71,stroke:#27ae60,color:#fff\n    classDef db fill:#f39c12,stroke:#d35400,color:#fff\n    class USER user\n    class CMD cmd\n    class QRY qry\n    class WRITE_DB,READ_DB,WRITE_DB,READ_DB db\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use:"
      }), " Systems where read and write workloads differ significantly (e.g., high-write transaction systems with complex querying). Not recommended for simple CRUD applications where the overhead is not justified."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hexagonal-architecture-ports-and-adapters",
      children: "Hexagonal Architecture (Ports and Adapters)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The hexagonal architecture, by Alistair Cockburn, places the domain model at the centre with ports and adapters connecting it to the outside world. This creates a clean separation between business logic and infrastructure concerns."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Hexagonal Architecture\"\n        subgraph \"Adapters — Left Side (Driving)\"\n            WEB_ADAPTER[Web Adapter<br/>HTTP Controller]\n            CLI_ADAPTER[CLI Adapter<br/>Command Line]\n            TEST_ADAPTER[Test Adapter<br/>Automated Tests]\n        end\n        subgraph \"Ports & Domain\"\n            IN_PORT[Inbound Port<br/>Service Interface]\n            DOMAIN[Domain Model<br/>Core Business Logic]\n            OUT_PORT[Outbound Port<br/>Repository Interface]\n        end\n        subgraph \"Adapters — Right Side (Driven)\"\n            PERSISTENCE_ADAPTER[Persistence Adapter<br/>PostgreSQL Repository]\n            MESSAGING_ADAPTER[Messaging Adapter<br/>Kafka Producer]\n            EXTERNAL_ADAPTER[External Adapter<br/>Payment Gateway SDK]\n        end\n    end\n    WEB_ADAPTER -->|Calls| IN_PORT\n    CLI_ADAPTER -->|Calls| IN_PORT\n    TEST_ADAPTER -->|Calls| IN_PORT\n    IN_PORT --> DOMAIN\n    DOMAIN --> OUT_PORT\n    OUT_PORT --> PERSISTENCE_ADAPTER\n    OUT_PORT --> MESSAGING_ADAPTER\n    OUT_PORT --> EXTERNAL_ADAPTER\n\n    classDef driving fill:#3498db,stroke:#2980b9,color:#fff\n    classDef domain fill:#e74c3c,stroke:#c0392b,color:#fff\n    classDef driven fill:#2ecc71,stroke:#27ae60,color:#fff\n    class WEB_ADAPTER,CLI_ADAPTER,TEST_ADAPTER driving\n    class IN_PORT,DOMAIN,OUT_PORT domain\n    class PERSISTENCE_ADAPTER,MESSAGING_ADAPTER,EXTERNAL_ADAPTER driven\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-broker-pattern",
      children: "The Broker Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The broker pattern decouples clients from servers by introducing an intermediary — the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "broker"
      }), " — that routes requests, handles load balancing, and provides location transparency."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Modern incarnations:"
      }), " API gateways (Kong, AWS API Gateway), service meshes (Istio, Linkerd), message brokers (Kafka, RabbitMQ), RPC frameworks (gRPC)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "architecture-pattern-comparison",
      children: "Architecture Pattern Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Coupling"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Testability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Layered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vertical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MVC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vertical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interactive apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Repository"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vertical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data-centric systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Client-Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pipe-Filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data processing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Microservices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large multi-team systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Event-Driven"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reactive/async systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Broker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CQRS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-write/read-asymmetric"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hexagonal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vertical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain-driven systems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quality-attribute-evaluation-framework-atam-inspired",
      children: "Quality Attribute Evaluation Framework (ATAM-inspired)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Architecture Trade-off Analysis Method (ATAM) evaluates architectures against quality attribute scenarios:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"ATAM Evaluation Process\"\n        START((Start)) --> PRESENT[Present Architecture<br/>Business Drivers]\n        PRESENT --> IDENTIFY[Identify Key<br/>Quality Attributes]\n        IDENTIFY --> GENERATE[Generate QA Scenarios]\n        GENERATE --> ANALYZE[Analyze Scenarios<br/>Against Architecture]\n        ANALYZE --> IDENTIFY_RISKS{Identify<br/>Risks & Trade-offs}\n        IDENTIFY_RISKS -->|Risks Found| MITIGATE[Propose<br/>Mitigation Strategies]\n        IDENTIFY_RISKS -->|No Critical Risks| PRIORITIZE[Prioritize<br/>Scenarios]\n        MITIGATE --> ANALYZE\n        PRIORITIZE --> DECIDE{Decision}\n        DECIDE -->|Accept| APPROVED[Architecture<br/>Approved]\n        DECIDE -->|Reject| ALTERNATIVES[Consider<br/>Alternative Architectures]\n        ALTERNATIVES --> PRESENT\n    end\n\n    classDef start fill:#2c3e50,stroke:#2c3e50,color:#fff\n    classDef proc fill:#3498db,stroke:#2980b9,color:#fff\n    classDef risk fill:#e74c3c,stroke:#c0392b,color:#fff\n    classDef done fill:#2ecc71,stroke:#27ae60,color:#fff\n    class START start\n    class PRESENT,IDENTIFY,GENERATE,ANALYZE,MITIGATE,PRIORITIZE,ALTERNATIVES proc\n    class IDENTIFY_RISKS,DECIDE risk\n    class APPROVED done\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-layered-architecture-in-typescript",
      children: "Example 1: Layered Architecture in TypeScript"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Presentation Layer ===\ninterface OrderRequest {\n  customerId: string;\n  items: { productId: string; quantity: number }[];\n  shippingAddress: string;\n}\n\ninterface OrderResponse {\n  orderId: string;\n  totalAmount: number;\n  status: string;\n  estimatedDelivery: Date;\n}\n\nclass OrderController {\n  constructor(private readonly orderService: OrderService) {}\n\n  public async createOrder(request: OrderRequest): Promise<OrderResponse> {\n    try {\n      const order = await this.orderService.placeOrder(\n        request.customerId,\n        request.items,\n        request.shippingAddress\n      );\n      return {\n        orderId: order.id,\n        totalAmount: order.totalAmount,\n        status: order.status,\n        estimatedDelivery: order.estimatedDelivery,\n      };\n    } catch (error) {\n      throw new Error(`Failed to create order: ${(error as Error).message}`);\n    }\n  }\n\n  public async getOrder(orderId: string): Promise<OrderResponse | null> {\n    const order = await this.orderService.getOrder(orderId);\n    return order\n      ? { orderId: order.id, totalAmount: order.totalAmount, status: order.status, estimatedDelivery: order.estimatedDelivery }\n      : null;\n  }\n\n  public async cancelOrder(orderId: string): Promise<void> {\n    await this.orderService.cancelOrder(orderId);\n  }\n}\n\n// === Business Logic Layer ===\ninterface Order {\n  id: string;\n  customerId: string;\n  items: OrderItem[];\n  totalAmount: number;\n  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';\n  shippingAddress: string;\n  estimatedDelivery: Date;\n  createdAt: Date;\n}\n\ninterface OrderItem {\n  productId: string;\n  productName: string;\n  quantity: number;\n  unitPrice: number;\n  subtotal: number;\n}\n\nclass OrderService {\n  constructor(\n    private readonly orderRepository: OrderRepository,\n    private readonly inventoryService: InventoryService,\n    private readonly pricingService: PricingService,\n    private readonly shippingService: ShippingService\n  ) {}\n\n  public async placeOrder(\n    customerId: string,\n    items: { productId: string; quantity: number }[],\n    shippingAddress: string\n  ): Promise<Order> {\n    // Validate inventory for all items\n    for (const item of items) {\n      const available = await this.inventoryService.checkAvailability(item.productId, item.quantity);\n      if (!available) {\n        throw new Error(`Insufficient stock for product ${item.productId}`);\n      }\n    }\n\n    // Calculate pricing with potential volume discounts\n    const orderItems: OrderItem[] = [];\n    let totalAmount = 0;\n    for (const item of items) {\n      const price = await this.pricingService.getPrice(item.productId);\n      const discount = await this.pricingService.getVolumeDiscount(item.productId, item.quantity);\n      const effectivePrice = price * (1 - discount);\n      const subtotal = effectivePrice * item.quantity;\n      orderItems.push({\n        productId: item.productId,\n        productName: item.productId, // would resolve from product service\n        quantity: item.quantity,\n        unitPrice: effectivePrice,\n        subtotal,\n      });\n      totalAmount += subtotal;\n    }\n\n    // Calculate shipping\n    const estimatedDelivery = await this.shippingService.estimateDelivery(customerId, shippingAddress);\n\n    // Create order domain object\n    const order: Order = {\n      id: `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,\n      customerId,\n      items: orderItems,\n      totalAmount,\n      status: 'pending',\n      shippingAddress,\n      estimatedDelivery,\n      createdAt: new Date(),\n    };\n\n    // Reserve inventory\n    for (const item of items) {\n      await this.inventoryService.reserveStock(item.productId, item.quantity, order.id);\n    }\n\n    return this.orderRepository.save(order);\n  }\n\n  public async getOrder(orderId: string): Promise<Order | null> {\n    return this.orderRepository.findById(orderId);\n  }\n\n  public async cancelOrder(orderId: string): Promise<void> {\n    const order = await this.orderRepository.findById(orderId);\n    if (!order) throw new Error(`Order ${orderId} not found`);\n    if (order.status === 'shipped' || order.status === 'delivered') {\n      throw new Error('Cannot cancel shipped or delivered orders');\n    }\n    order.status = 'cancelled';\n    await this.orderRepository.update(order);\n    for (const item of order.items) {\n      await this.inventoryService.releaseStock(item.productId, item.quantity, order.id);\n    }\n  }\n}\n\n// === Data Access Layer ===\ninterface OrderRepository {\n  save(order: Order): Promise<Order>;\n  findById(orderId: string): Promise<Order | null>;\n  findByCustomerId(customerId: string): Promise<Order[]>;\n  update(order: Order): Promise<Order>;\n  delete(orderId: string): Promise<void>;\n}\n\nclass PostgresOrderRepository implements OrderRepository {\n  public async save(order: Order): Promise<Order> {\n    // Implementation would use PostgreSQL client\n    console.log(`[Postgres] Saving order ${order.id}`);\n    return order;\n  }\n\n  public async findById(orderId: string): Promise<Order | null> {\n    console.log(`[Postgres] Finding order ${orderId}`);\n    return null;\n  }\n\n  public async findByCustomerId(customerId: string): Promise<Order[]> {\n    console.log(`[Postgres] Finding orders for customer ${customerId}`);\n    return [];\n  }\n\n  public async update(order: Order): Promise<Order> {\n    console.log(`[Postgres] Updating order ${order.id}`);\n    return order;\n  }\n\n  public async delete(orderId: string): Promise<void> {\n    console.log(`[Postgres] Deleting order ${orderId}`);\n  }\n}\n\n// === Cross-cutting infrastructure services ===\nclass InventoryService {\n  private stockCache: Map<string, number> = new Map();\n\n  public async checkAvailability(productId: string, quantity: number): Promise<boolean> {\n    const available = this.stockCache.get(productId) ?? 100;\n    return available >= quantity;\n  }\n\n  public async reserveStock(productId: string, quantity: number, orderId: string): Promise<void> {\n    const current = this.stockCache.get(productId) ?? 100;\n    this.stockCache.set(productId, current - quantity);\n    console.log(`[Inventory] Reserved ${quantity} of ${productId} for order ${orderId}`);\n  }\n\n  public async releaseStock(productId: string, quantity: number, orderId: string): Promise<void> {\n    const current = this.stockCache.get(productId) ?? 100;\n    this.stockCache.set(productId, current + quantity);\n    console.log(`[Inventory] Released ${quantity} of ${productId} from order ${orderId}`);\n  }\n}\n\nclass PricingService {\n  public async getPrice(productId: string): Promise<number> {\n    return 29.99;\n  }\n\n  public async getVolumeDiscount(productId: string, quantity: number): Promise<number> {\n    if (quantity >= 100) return 0.15;\n    if (quantity >= 10) return 0.05;\n    return 0;\n  }\n}\n\nclass ShippingService {\n  public async estimateDelivery(customerId: string, address: string): Promise<Date> {\n    const days = 3 + Math.floor(Math.random() * 5);\n    const eta = new Date();\n    eta.setDate(eta.getDate() + days);\n    return eta;\n  }\n}\n\n// Usage\nconst orderRepo = new PostgresOrderRepository();\nconst invSvc = new InventoryService();\nconst priceSvc = new PricingService();\nconst shipSvc = new ShippingService();\nconst orderSvc = new OrderService(orderRepo, invSvc, priceSvc, shipSvc);\nconst controller = new OrderController(orderSvc);\ncontroller.createOrder({\n  customerId: 'CUST-001',\n  items: [{ productId: 'PROD-001', quantity: 2 }],\n  shippingAddress: '123 Main St, City',\n}).then(r => console.log('Order created:', r));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-hexagonal-architecture-in-typescript",
      children: "Example 2: Hexagonal Architecture in TypeScript"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Domain (Core) Layer — No external dependencies ===\n\ninterface OrderRepository {\n  save(order: Order): Promise<void>;\n  findById(id: string): Promise<Order | null>;\n}\n\ninterface PaymentGateway {\n  charge(amount: number, currency: string, source: string): Promise<PaymentResult>;\n}\n\ninterface NotificationService {\n  sendOrderConfirmation(email: string, orderId: string): Promise<void>;\n}\n\nclass Order {\n  constructor(\n    public readonly id: string,\n    public readonly customerEmail: string,\n    public readonly items: { productId: string; quantity: number; price: number }[],\n    public readonly total: number,\n    public status: 'pending' | 'confirmed' | 'cancelled' = 'pending'\n  ) {}\n\n  public confirm(): void {\n    if (this.status !== 'pending') throw new Error('Order must be pending to confirm');\n    this.status = 'confirmed';\n  }\n}\n\nclass PlaceOrderService {\n  constructor(\n    private readonly orders: OrderRepository,\n    private readonly payments: PaymentGateway,\n    private readonly notifications: NotificationService\n  ) {}\n\n  public async execute(command: { customerEmail: string; items: { productId: string; quantity: number; unitPrice: number }[] }): Promise<Order> {\n    const total = command.items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0);\n    const order = new Order(\n      `ORD-${Date.now()}`,\n      command.customerEmail,\n      command.items.map(i => ({ productId: i.productId, quantity: i.quantity, price: i.unitPrice })),\n      total\n    );\n    await this.orders.save(order);\n    const payment = await this.payments.charge(total, 'USD', 'card_123');\n    if (payment.success) {\n      order.confirm();\n      await this.orders.save(order);\n      await this.notifications.sendOrderConfirmation(command.customerEmail, order.id);\n    }\n    return order;\n  }\n}\n\n// === Driving Adapters (Inbound) ===\n\nclass HttpOrderController {\n  constructor(private readonly placeOrderService: PlaceOrderService) {}\n\n  public async handlePost(req: { body: { customerEmail: string; items: { productId: string; quantity: number; unitPrice: number }[] } }): Promise<{ status: number; body: any }> {\n    try {\n      const order = await this.placeOrderService.execute(req.body);\n      return { status: 201, body: { orderId: order.id, total: order.total, status: order.status } };\n    } catch (e) {\n      return { status: 400, body: { error: (e as Error).message } };\n    }\n  }\n}\n\nclass CliOrderController {\n  constructor(private readonly placeOrderService: PlaceOrderService) {}\n\n  public async run(args: string[]): Promise<void> {\n    const [customerEmail, productId, quantityStr, priceStr] = args;\n    const order = await this.placeOrderService.execute({\n      customerEmail,\n      items: [{ productId, quantity: parseInt(quantityStr), unitPrice: parseFloat(priceStr) }],\n    });\n    console.log(`Order ${order.id} placed: $${order.total}`);\n  }\n}\n\n// === Driven Adapters (Outbound) ===\n\nclass PostgresOrderRepositoryAdapter implements OrderRepository {\n  public async save(order: Order): Promise<void> {\n    // PostgreSQL implementation\n    console.log(`[PG] Saved order ${order.id} with status ${order.status}`);\n  }\n\n  public async findById(id: string): Promise<Order | null> {\n    console.log(`[PG] Finding order ${id}`);\n    return null;\n  }\n}\n\nclass StripePaymentGatewayAdapter implements PaymentGateway {\n  public async charge(amount: number, currency: string, source: string): Promise<PaymentResult> {\n    console.log(`[Stripe] Charging ${amount} ${currency} from ${source}`);\n    return { success: true, transactionId: `txn_${Date.now()}` };\n  }\n}\n\ninterface PaymentResult {\n  success: boolean;\n  transactionId?: string;\n}\n\nclass SendGridNotificationAdapter implements NotificationService {\n  public async sendOrderConfirmation(email: string, orderId: string): Promise<void> {\n    console.log(`[SendGrid] Sending confirmation for ${orderId} to ${email}`);\n  }\n}\n\n// === Composition Root ===\nconst orderRepo = new PostgresOrderRepositoryAdapter();\nconst paymentGateway = new StripePaymentGatewayAdapter();\nconst notifier = new SendGridNotificationAdapter();\nconst placeOrderService = new PlaceOrderService(orderRepo, paymentGateway, notifier);\nconst httpController = new HttpOrderController(placeOrderService);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-architecturedecisionrecord-manager",
      children: "Example 3: ArchitectureDecisionRecord Manager"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ADR {\n  id: string;\n  title: string;\n  status: 'proposed' | 'accepted' | 'deprecated' | 'superseded';\n  context: string;\n  alternatives: string[];\n  decision: string;\n  rationale: string;\n  consequences: string[];\n  date: Date;\n  supersedes?: string;\n  tags?: string[];\n}\n\nclass ADRManager {\n  private decisions: Map<string, ADR> = new Map();\n  private nextId = 1;\n\n  public createADR(\n    title: string,\n    context: string,\n    alternatives: string[],\n    decision: string,\n    rationale: string,\n    consequences: string[],\n    options?: { supersedes?: string; tags?: string[] }\n  ): ADR {\n    const id = `ADR-${String(this.nextId++).padStart(4, '0')}`;\n    const adr: ADR = {\n      id,\n      title,\n      status: 'proposed',\n      context,\n      alternatives,\n      decision,\n      rationale,\n      consequences,\n      date: new Date(),\n      supersedes: options?.supersedes,\n      tags: options?.tags,\n    };\n    this.decisions.set(id, adr);\n    return adr;\n  }\n\n  public acceptDecision(id: string): ADR {\n    const adr = this.getOrThrow(id);\n    adr.status = 'accepted';\n    return adr;\n  }\n\n  public deprecateDecision(id: string): ADR {\n    const adr = this.getOrThrow(id);\n    adr.status = 'deprecated';\n    return adr;\n  }\n\n  public supersedeDecision(id: string, replacementTitle: string, context: string, alternatives: string[], decision: string, rationale: string, consequences: string[]): ADR {\n    const oldAdr = this.getOrThrow(id);\n    oldAdr.status = 'superseded';\n    return this.createADR(replacementTitle, context, alternatives, decision, rationale, consequences, { supersedes: id, tags: oldAdr.tags });\n  }\n\n  public getDecision(id: string): ADR | undefined {\n    return this.decisions.get(id);\n  }\n\n  public getDecisionsByStatus(status: ADR['status']): ADR[] {\n    return Array.from(this.decisions.values()).filter(d => d.status === status);\n  }\n\n  public getDecisionsByTag(tag: string): ADR[] {\n    return Array.from(this.decisions.values()).filter(d => d.tags?.includes(tag));\n  }\n\n  public getDecisionHistory(title: string): ADR[] {\n    const all = Array.from(this.decisions.values());\n    const related = all.filter(d => d.title.toLowerCase().includes(title.toLowerCase()) || d.supersedes);\n    // Sort by date to trace evolution\n    return related.sort((a, b) => a.date.getTime() - b.date.getTime());\n  }\n\n  public generateReport(): string {\n    return Array.from(this.decisions.values())\n      .map(d => [\n        `# ${d.id}: ${d.title}`,\n        `Status: ${d.status}`,\n        `Date: ${d.date.toISOString().split('T')[0]}`,\n        `Tags: ${d.tags?.join(', ') ?? 'none'}`,\n        '',\n        `## Context`,\n        d.context,\n        '',\n        `## Decision`,\n        d.decision,\n        '',\n        `## Rationale`,\n        d.rationale,\n        '',\n        `## Consequences`,\n        ...d.consequences.map(c => `- ${c}`),\n        '',\n        `## Alternatives Considered`,\n        ...d.alternatives.map(a => `- ${a}`),\n        d.supersedes ? `\\n*Supersedes: ${d.supersedes}*` : '',\n      ].join('\\n'))\n      .join('\\n\\n---\\n\\n');\n  }\n\n  public generateMarkdownFile(): string {\n    const lines: string[] = ['# Architecture Decision Records', ''];\n    for (const [status, label] of [['accepted', 'Accepted'], ['proposed', 'Proposed'], ['superseded', 'Superseded'], ['deprecated', 'Deprecated']] as [ADR['status'], string][]) {\n      const entries = this.getDecisionsByStatus(status);\n      if (entries.length > 0) {\n        lines.push(`## ${label} Decisions`, '');\n        for (const e of entries) {\n          lines.push(`- [${e.id}] ${e.title} (${e.date.toISOString().split('T')[0]})`);\n        }\n        lines.push('');\n      }\n    }\n    return lines.join('\\n');\n  }\n\n  private getOrThrow(id: string): ADR {\n    const adr = this.decisions.get(id);\n    if (!adr) throw new Error(`ADR ${id} not found`);\n    return adr;\n  }\n}\n\n// Usage\nconst adrManager = new ADRManager();\nconst adr1 = adrManager.createADR(\n  'Use PostgreSQL for Primary Data Store',\n  'The system requires ACID-compliant relational storage with JSONB support for flexible schemas. The team has existing PostgreSQL expertise.',\n  ['MySQL 8 (strong replication, less JSON support)', 'MongoDB 7 (NoSQL, eventual consistency, no ACID cross-document)', 'Amazon Aurora (PostgreSQL-compatible, managed)'],\n  'Adopt PostgreSQL 16 with read replicas for scalability',\n  'PostgreSQL provides ACID compliance, JSONB for flexible schemas, excellent replication, and the team has 3 years of experience. Aurora was too expensive for the budget.',\n  ['Strong ACID guarantees for financial transactions', 'JSONB enables flexible schema evolution', 'PostgreSQL ecosystem maturity', 'Read replicas add operational complexity', 'Requires connection pooling for high concurrency'],\n  { tags: ['database', 'infrastructure'] }\n);\nadrManager.acceptDecision(adr1.id);\n\nconst adr2 = adrManager.createADR(\n  'Adopt Microservices Architecture',\n  'The system has 6 independent bounded contexts (Auth, Orders, Payments, Inventory, Notifications, Analytics) each maintained by separate teams.',\n  ['Monolith (simpler but limits team autonomy)', 'Modular Monolith (compromise but same deploy unit)', 'Service-Based Architecture (fewer, larger services)'],\n  'Decompose into microservices with API Gateway pattern',\n  'Each bounded context maps naturally to a microservice. Teams own their full stack. Independent deployability enables faster release cycles.',\n  [\n    'Team autonomy increases velocity',\n    'Independent deployability per service',\n    'Network latency adds ~5ms per inter-service call',\n    'Requires investment in DevOps, monitoring, and distributed tracing',\n    'Eventual consistency between bounded contexts',\n  ],\n  { tags: ['architecture', 'decomposition'] }\n);\nadrManager.acceptDecision(adr2.id);\n\n// Supersede the database decision\nconst adr3 = adrManager.supersedeDecision(adr1.id,\n  'Use CockroachDB for Globally Distributed Data Store',\n  'The system now requires multi-region deployment with active-active replication. PostgreSQL read replicas cannot provide the needed RPO/RTO.',\n  ['PostgreSQL + Logical Replication (complex failover)', 'Google Spanner (expensive, vendor lock-in)', 'YugabyteDB (similar to CockroachDB)'],\n  'Adopt CockroachDB 24.1 with region-level partitioning',\n  'CockroachDB provides PostgreSQL wire-protocol compatibility, automatic sharding, and multi-region ACID transactions.',\n  ['Global active-active replication', 'SQL-compatible (low migration cost)', 'Higher per-node cost than PostgreSQL', 'Operational complexity of distributed database', 'Team needs training on CockroachDB specifics'],\n  { supersedes: adr1.id, tags: ['database', 'infrastructure', 'global'] }\n);\nadrManager.acceptDecision(adr3.id);\nconsole.log(adrManager.generateReport());\nconsole.log(adrManager.getDecisionHistory('PostgreSQL'));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-qualityattributescenario-builder",
      children: "Example 4: QualityAttributeScenario Builder"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type QualityAttribute = 'availability' | 'modifiability' | 'performance' | 'security' | 'testability' | 'usability' | 'scalability' | 'deployability';\n\ninterface ScenarioComponent {\n  stimulus: string;\n  source: string;\n  environment: string;\n  artifact: string;\n  response: string;\n  responseMeasure: string;\n}\n\ninterface QualityScenario {\n  id: string;\n  attribute: QualityAttribute;\n  description: string;\n  components: ScenarioComponent;\n  priority: 'critical' | 'important' | 'nice-to-have';\n  targetValue: number;\n  actualValue?: number;\n}\n\nclass QualityAttributeScenarioBuilder {\n  private scenarios: QualityScenario[] = [];\n\n  public addScenario(scenario: QualityScenario): void {\n    this.scenarios.push(scenario);\n  }\n\n  public evaluate(measuredValues: Map<string, number>): {\n    met: QualityScenario[];\n    unmet: QualityScenario[];\n    score: number;\n  } {\n    const met: QualityScenario[] = [];\n    const unmet: QualityScenario[] = [];\n    for (const scenario of this.scenarios) {\n      const measured = measuredValues.get(scenario.id);\n      scenario.actualValue = measured;\n      if (measured !== undefined && measured >= scenario.targetValue) {\n        met.push(scenario);\n      } else {\n        unmet.push(scenario);\n      }\n    }\n    const score = (met.length / this.scenarios.length) * 100;\n    return { met, unmet, score: Math.round(score * 10) / 10 };\n  }\n\n  public getScenariosByAttribute(attribute: QualityAttribute): QualityScenario[] {\n    return this.scenarios.filter(s => s.attribute === attribute);\n  }\n\n  public getScenariosByPriority(priority: QualityScenario['priority']): QualityScenario[] {\n    return this.scenarios.filter(s => s.priority === priority);\n  }\n\n  public generateScenarioReport(): string {\n    return this.scenarios.map(s => {\n      const status = s.actualValue !== undefined\n        ? (s.actualValue >= s.targetValue ? '✅ MET' : '❌ UNMET')\n        : '⏳ NOT EVALUATED';\n      return [\n        `## ${s.id}: ${s.attribute} — ${status}`,\n        `Priority: ${s.priority}`,\n        `Description: ${s.description}`,\n        '',\n        `| Component | Value |`,\n        `|-----------|-------|`,\n        `| **Stimulus** | ${s.components.stimulus} |`,\n        `| **Source** | ${s.components.source} |`,\n        `| **Environment** | ${s.components.environment} |`,\n        `| **Artifact** | ${s.components.artifact} |`,\n        `| **Response** | ${s.components.response} |`,\n        `| **Measure** | ${s.components.responseMeasure} |`,\n        '',\n        `Target: ${s.targetValue} | Actual: ${s.actualValue ?? 'N/A'}`,\n      ].join('\\n');\n    }).join('\\n\\n---\\n\\n');\n  }\n}\n\n// Usage\nconst qaBuilder = new QualityAttributeScenarioBuilder();\nqaBuilder.addScenario({\n  id: 'PERF-001',\n  attribute: 'performance',\n  description: 'API response time under load',\n  priority: 'critical',\n  targetValue: 200, // ms\n  components: {\n    stimulus: '1,000 concurrent users send HTTP requests',\n    source: 'Users through web browsers globally',\n    environment: 'Peak business hours, normal operations',\n    artifact: 'Web API tier',\n    response: 'Requests are processed and responses returned',\n    responseMeasure: '95th percentile response time < 200ms',\n  },\n});\nqaBuilder.addScenario({\n  id: 'AVAIL-001',\n  attribute: 'availability',\n  description: 'System uptime during business hours',\n  priority: 'critical',\n  targetValue: 99.99,\n  components: {\n    stimulus: 'Database node failure',\n    source: 'Infrastructure fault',\n    environment: 'Production, business hours',\n    artifact: 'Database cluster',\n    response: 'Read replicas serve traffic within 5 seconds, writes queue',\n    responseMeasure: '99.99% uptime (52 minutes downtime/year max)',\n  },\n});\nqaBuilder.addScenario({\n  id: 'MOD-001',\n  attribute: 'modifiability',\n  description: 'Pricing algorithm change',\n  priority: 'important',\n  targetValue: 240, // minutes\n  components: {\n    stimulus: 'Developer changes pricing algorithm for volume discounts',\n    source: 'Development team',\n    environment: 'Development environment, design time',\n    artifact: 'Pricing Service module',\n    response: 'Change is implemented, tested, and deployed',\n    responseMeasure: 'Change takes < 4 hours (240 minutes) including testing',\n  },\n});\n\n// Simulate evaluation\nconst measured = new Map<string, number>([\n  ['PERF-001', 150],\n  ['AVAIL-001', 99.95],\n  ['MOD-001', 180],\n]);\nconst evaluation = qaBuilder.evaluate(measured);\nconsole.log(`Overall score: ${evaluation.score}%`);\nconsole.log(`Met: ${evaluation.met.length}, Unmet: ${evaluation.unmet.length}`);\nconsole.log(evaluation.unmet.map(s => `${s.id} (${s.attribute}): target ${s.targetValue}, actual ${s.actualValue}`));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-5-architectureevaluator--saamatam-inspired",
      children: "Example 5: ArchitectureEvaluator — SAAM/ATAM-Inspired"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface WeightedAttribute {\n  name: string;\n  weight: number; // 0-1, sum of weights should be 1\n}\n\ninterface ArchitectureOption {\n  name: string;\n  scores: Record<string, number>; // attribute name -> score (1-10)\n  pros: string[];\n  cons: string[];\n  implementationCost: number; // relative cost 1-100\n  operationalCost: number; // relative cost 1-100\n}\n\ninterface EvaluationResult {\n  optionName: string;\n  weightedScore: number;\n  costAdjustedScore: number;\n  pros: string[];\n  cons: string[];\n}\n\nclass ArchitectureEvaluator {\n  constructor(private readonly attributes: WeightedAttribute[]) {\n    const totalWeight = attributes.reduce((s, a) => s + a.weight, 0);\n    if (Math.abs(totalWeight - 1.0) > 0.01) {\n      throw new Error('Attribute weights must sum to 1.0');\n    }\n  }\n\n  public evaluate(options: ArchitectureOption[]): EvaluationResult[] {\n    return options.map(opt => {\n      let weightedScore = 0;\n      for (const attr of this.attributes) {\n        const score = opt.scores[attr.name] ?? 0;\n        weightedScore += score * attr.weight;\n      }\n      const totalCost = opt.implementationCost + opt.operationalCost;\n      const costAdjustedScore = weightedScore - (totalCost / 200); // normalize cost penalty\n      return {\n        optionName: opt.name,\n        weightedScore: Math.round(weightedScore * 10) / 10,\n        costAdjustedScore: Math.round(costAdjustedScore * 10) / 10,\n        pros: opt.pros,\n        cons: opt.cons,\n      };\n    }).sort((a, b) => b.costAdjustedScore - a.costAdjustedScore);\n  }\n\n  public sensitivityAnalysis(options: ArchitectureOption[], attributeName: string, variation: number): { option: string; baseScore: number; variedScore: number; sensitivity: number }[] {\n    const base = this.evaluate(options);\n    const attr = this.attributes.find(a => a.name === attributeName);\n    if (!attr) throw new Error(`Attribute ${attributeName} not found`);\n    const originalWeight = attr.weight;\n    attr.weight = Math.max(0, Math.min(1, originalWeight + variation));\n    const adjusted = this.evaluate(options);\n    attr.weight = originalWeight; // restore\n\n    return base.map((b, i) => ({\n      option: b.optionName,\n      baseScore: b.costAdjustedScore,\n      variedScore: adjusted[i].costAdjustedScore,\n      sensitivity: Math.round((adjusted[i].costAdjustedScore - b.costAdjustedScore) * 100) / 100,\n    }));\n  }\n\n  public generateTradeoffReport(options: ArchitectureOption[]): string {\n    const results = this.evaluate(options);\n    const lines: string[] = ['# Architecture Evaluation Report', ''];\n    lines.push('## Ranked Results', '');\n    results.forEach((r, i) => {\n      lines.push(`### ${i + 1}. ${r.optionName}`);\n      lines.push(`- Weighted Score: ${r.weightedScore}`);\n      lines.push(`- Cost-Adjusted Score: ${r.costAdjustedScore}`);\n      lines.push(`- Pros: ${r.pros.join(', ')}`);\n      lines.push(`- Cons: ${r.cons.join(', ')}`);\n      lines.push('');\n    });\n    lines.push('## Key Trade-offs', '');\n    for (let i = 0; i < options.length; i++) {\n      for (let j = i + 1; j < options.length; j++) {\n        const diff: string[] = [];\n        for (const attr of this.attributes) {\n          const s1 = options[i].scores[attr.name] ?? 0;\n          const s2 = options[j].scores[attr.name] ?? 0;\n          if (s1 !== s2) {\n            diff.push(`${attr.name}: ${options[i].name}=${s1}, ${options[j].name}=${s2}`);\n          }\n        }\n        if (diff.length > 0) {\n          lines.push(`- ${options[i].name} vs ${options[j].name}: ${diff.join('; ')}`);\n        }\n      }\n    }\n    return lines.join('\\n');\n  }\n}\n\n// Usage\nconst evaluator = new ArchitectureEvaluator([\n  { name: 'performance', weight: 0.25 },\n  { name: 'scalability', weight: 0.20 },\n  { name: 'modifiability', weight: 0.20 },\n  { name: 'deployability', weight: 0.15 },\n  { name: 'simplicity', weight: 0.10 },\n  { name: 'cost', weight: 0.10 },\n]);\n\nconst options: ArchitectureOption[] = [\n  {\n    name: 'Microservices',\n    scores: { performance: 6, scalability: 10, modifiability: 9, deployability: 10, simplicity: 4, cost: 4 },\n    pros: ['Independent deployability', 'Team autonomy', 'Polyglot technology', 'Fault isolation'],\n    cons: ['Network complexity', 'Data consistency challenges', 'DevOps overhead', 'Distributed tracing'],\n    implementationCost: 80,\n    operationalCost: 70,\n  },\n  {\n    name: 'Layered Monolith',\n    scores: { performance: 9, scalability: 5, modifiability: 6, deployability: 4, simplicity: 9, cost: 9 },\n    pros: ['Simple development', 'Strong consistency', 'Single deploy unit', 'Low latency'],\n    cons: ['Scaling limits', 'Team coupling', 'Tech lock-in', 'Deploy coordination'],\n    implementationCost: 30,\n    operationalCost: 25,\n  },\n  {\n    name: 'Modular Monolith',\n    scores: { performance: 8, scalability: 6, modifiability: 8, deployability: 5, simplicity: 8, cost: 8 },\n    pros: ['Domain isolation', 'Strong consistency', 'Reasonable performance', 'Simpler than microservices'],\n    cons: ['Single deploy unit', 'Team coordination for deploys', 'Module boundary discipline', 'Scaling as a unit'],\n    implementationCost: 45,\n    operationalCost: 35,\n  },\n  {\n    name: 'Event-Driven + Microservices',\n    scores: { performance: 7, scalability: 10, modifiability: 10, deployability: 9, simplicity: 3, cost: 3 },\n    pros: ['Maximum decoupling', 'Excellent scalability', 'Real-time processing', 'Flexible evolution'],\n    cons: ['Eventual consistency', 'Debugging complexity', 'Event schema management', 'Infrastructure cost'],\n    implementationCost: 95,\n    operationalCost: 85,\n  },\n];\n\nconsole.log(evaluator.generateTradeoffReport(options));\nconst sensitivity = evaluator.sensitivityAnalysis(options, 'scalability', 0.1);\nconsole.log('Sensitivity Analysis (scalability +0.1):', sensitivity);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Architectural design is the most consequential phase of software development because architectural decisions are the most difficult and expensive to reverse. The choice of architectural pattern — whether layered, MVC, microservices, event-driven, CQRS, hexagonal, or broker — fundamentally shapes the system's quality attributes including performance, scalability, modifiability, security, and deployability. Each pattern represents a set of trade-offs: layered architecture offers simplicity and testability at the cost of performance, microservices provide independent deployability and team autonomy at the cost of distributed system complexity, and event-driven patterns maximise decoupling at the cost of debugging and consistency guarantees."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quality attribute scenarios provide a structured, measurable way to specify and evaluate architectural decisions. Rather than vague goals like \"the system should be fast,\" a well-formed scenario identifies the stimulus, source, environment, artifact, response, and response measure — for example \"under 1,000 concurrent requests (stimulus) in production (environment), the API (artifact) responds within 200ms at 95th percentile (measure).\" Architecture Decision Records (ADRs) capture the rationale behind architectural choices, preserving institutional knowledge for future teams. The ATAM evaluation framework enables systematic comparison of architecture alternatives against weighted quality attribute priorities, revealing trade-offs and risks before implementation begins."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Start simple, evolve when needed"
        }), " — a well-structured layered monolith beats premature microservices every time"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Let quality attributes drive architecture"
        }), " — performance, security, maintainability, and scalability requirements should determine pattern selection, not trends"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document architectural decisions with ADRs"
        }), " — they save future teams from repeating mistakes and preserve the reasoning behind choices"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design for change"
        }), " — identify what's most likely to change (business rules, third-party integrations, data sources) and isolate it behind interfaces"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monoliths are not anti-patterns"
        }), " — many highly successful systems (Stack Overflow, Shopify, GitHub in early years) started as monoliths and never needed microservices"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test the architecture early"
        }), " — performance, scalability, and fault tolerance should be validated with prototypes and load tests before committing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use ATAM for critical decisions"
        }), " — when choosing between fundamentally different architectures (e.g., monolith vs microservices), conduct a structured trade-off analysis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hexagonal architecture for domain complexity"
        }), " — when the system has complex business logic, ports-and-adapters decouples the domain from infrastructure, enabling testability and flexibility"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
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
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MVC supports multiple views (Views) of the same data (Model), making it ideal for interactive systems."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The repository becomes a bottleneck because all data access flows through a single point."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Without strict interface enforcement, layers bypass each other and become tightly coupled."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADRs document decisions, context, and rationale — not implementation code."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blue-green deployment maintains two identical environments; switching traffic back is instant."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: Which architectural pattern is most appropriate for an interactive system that must support multiple views of the same data?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Layered"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) MVC"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Repository"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Pipe-and-Filter"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: What is the primary disadvantage of the repository pattern?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Low cohesion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The repository becomes a performance bottleneck"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Difficult to add new components"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Limited reuse"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: In a layered architecture, what is the main risk of not enforcing strict layer isolation?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Increased testability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Higher performance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Tight coupling between layers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Better scalability"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: What does an Architecture Decision Record (ADR) typically NOT contain?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The context of the decision"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Alternatives considered"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The full implementation code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Consequences of the decision"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: Which deployment strategy provides the fastest rollback capability?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Rolling deployment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Blue-green deployment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Canary deployment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Recreate deployment"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-architecture-pattern-selection-for-an-online-banking-system",
      children: "Exercise 1: Architecture Pattern Selection for an Online Banking System"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click for solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Propose an architecture for an online banking system with these constraints:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Must support web and mobile interfaces"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Requires strong consistency for transactions (ACID)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Must have 99.99% availability"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Must support 10,000 concurrent users"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Must comply with financial regulations (audit trail, encryption)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Multiple development teams (5 teams, 30 developers)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Recommended Architecture:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Primary pattern:"
          }), " Modular monolith with hexagonal architecture around the core domain (transactions, accounts)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Auth + Notifications:"
          }), " Separate microservices (auth service, notification service)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Database:"
          }), " PostgreSQL with read replicas and connection pooling"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "API Gateway:"
          }), " Kong or AWS API Gateway for authentication, rate limiting, and routing"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Event-driven"
          }), " for non-critical flows (email notifications, report generation)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rationale:"
        }), " Strong consistency is critical for banking. A monolith with well-defined module boundaries gives ACID guarantees while still enabling team autonomy. Microservices for auth and notifications isolate cross-cutting concerns."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-adrs-for-a-hospital-management-system",
      children: "Exercise 2: ADRs for a Hospital Management System"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click for solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Construct three ADRs for architectural decisions in a hospital management system:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Database selection"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Communication protocol between patient records and billing"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Frontend framework choice"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution:"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ADR-001: Database Selection"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Context: Need ACID compliance for patient records, audit trails, and billing. Must support complex relational queries."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Alternatives: PostgreSQL, Oracle, MySQL, MongoDB"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Decision: PostgreSQL 16"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Rationale: ACID compliant, strong community, JSONB for flexible medical data schemas, lower cost than Oracle"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Consequences: Requires connection pooling, DBA expertise"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ADR-002: Communication Protocol"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Context: Patient Records service must notify Billing service when a procedure is performed"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Alternatives: Synchronous REST, asynchronous message queue, shared database"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Decision: RabbitMQ message queue with event-driven integration"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Rationale: Decouples services, handles burst traffic, provides delivery guarantees"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Consequences: Eventual consistency between services, requires message schema management"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ADR-003: Frontend Framework"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Context: Web application used by doctors, nurses, and administrators on desktop"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Alternatives: React, Angular, Vue.js, server-rendered templates"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Decision: React with TypeScript"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Rationale: Strong typing, large ecosystem, reusable component library, team expertise"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Consequences: SPA complexity, SEO considerations for public pages"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-quality-attribute-scenarios",
      children: "Exercise 3: Quality Attribute Scenarios"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click for solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Write complete quality attribute scenarios for an e-commerce platform:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance:"
            }), " During Black Friday sale (20x normal traffic), the checkout system processes 10,000 orders per minute with 99th percentile latency under 3 seconds."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Availability:"
            }), " When a primary database node fails, the system automatically fails over to a replica within 10 seconds with zero data loss and no visible impact to users."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Modifiability:"
            }), " A product manager requests a new discount type (e.g., \"Buy 2 Get 1 Free\"). A single developer should be able to implement, test, and deploy this within 2 working days without modifying any other part of the system."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Security:"
            }), " When an attacker attempts SQL injection via the search endpoint, the system rejects the request, logs the attempt with IP and timestamp, and alerts the security team within 1 minute."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Scalability:"
            }), " When traffic increases from 1,000 to 10,000 concurrent users, auto-scaling adds EC2 instances within 3 minutes to maintain response time targets."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-architecture-evaluation",
      children: "Exercise 4: Architecture Evaluation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click for solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Compare microservices vs modular monolith for a medium-sized e-commerce platform with 10 developers. Weigh these attributes: performance (0.3), development speed (0.25), scalability (0.2), operational complexity (0.15), team autonomy (0.1). Calculate weighted scores for both."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution:"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Attribute"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Weight"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Microservices"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Modular Monolith"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Performance"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "0.30"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "6 (1.80)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "9 (2.70)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Development speed"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "0.25"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "7 (1.75)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "8 (2.00)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Scalability"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "0.20"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "9 (1.80)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "5 (1.00)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Operational complexity"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "0.15"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "4 (0.60)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "8 (1.20)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Team autonomy"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "0.10"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "9 (0.90)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "5 (0.50)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Weighted Score"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "1.00"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "6.85"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "7.40"
              })
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "For a 10-person team, the modular monolith scores higher due to lower operational complexity and better performance. Microservices would be considered if the team grows beyond 25 developers or if independent deployability becomes critical."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-hexagonal-architecture-implementation",
      children: "Exercise 5: Hexagonal Architecture Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click for solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Implement a complete hexagonal architecture for a notification system in TypeScript. The system should:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Send notifications via Email, SMS, and Push"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Support different notification providers (SendGrid, Twilio, Firebase)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Allow adding new channels without modifying core business logic"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Include proper port definitions, domain models, and adapters"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution:"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// === Domain ===\ninterface Notification {\n  id: string;\n  recipient: string;\n  type: 'email' | 'sms' | 'push';\n  title: string;\n  body: string;\n  status: 'pending' | 'sent' | 'failed';\n  sentAt?: Date;\n}\n\ninterface NotificationPort {\n  send(notification: Notification): Promise<boolean>;\n}\n\ninterface NotificationRepositoryPort {\n  save(notification: Notification): Promise<void>;\n  findById(id: string): Promise<Notification | null>;\n}\n\nclass SendNotificationUseCase {\n  constructor(\n    private readonly emailProvider: NotificationPort,\n    private readonly smsProvider: NotificationPort,\n    private readonly pushProvider: NotificationPort,\n    private readonly repository: NotificationRepositoryPort\n  ) {}\n\n  public async execute(command: { recipient: string; type: Notification['type']; title: string; body: string }): Promise<Notification> {\n    const notification: Notification = {\n      id: `NOTIF-${Date.now()}`,\n      recipient: command.recipient,\n      type: command.type,\n      title: command.title,\n      body: command.body,\n      status: 'pending',\n    };\n    await this.repository.save(notification);\n    const provider = this.getProvider(command.type);\n    const sent = await provider.send(notification);\n    notification.status = sent ? 'sent' : 'failed';\n    if (sent) notification.sentAt = new Date();\n    await this.repository.save(notification);\n    return notification;\n  }\n\n  private getProvider(type: Notification['type']): NotificationPort {\n    switch (type) {\n      case 'email': return this.emailProvider;\n      case 'sms': return this.smsProvider;\n      case 'push': return this.pushProvider;\n    }\n  }\n}\n\n// === Driven Adapters ===\nclass SendGridAdapter implements NotificationPort {\n  async send(notification: Notification): Promise<boolean> {\n    console.log(`[SendGrid] Sending email to ${notification.recipient}: ${notification.title}`);\n    return true;\n  }\n}\nclass TwilioAdapter implements NotificationPort {\n  async send(notification: Notification): Promise<boolean> {\n    console.log(`[Twilio] Sending SMS to ${notification.recipient}: ${notification.body}`);\n    return true;\n  }\n}\nclass FirebaseAdapter implements NotificationPort {\n  async send(notification: Notification): Promise<boolean> {\n    console.log(`[Firebase] Sending push to ${notification.recipient}: ${notification.title}`);\n    return true;\n  }\n}\nclass InMemoryNotificationRepo implements NotificationRepositoryPort {\n  private store = new Map<string, Notification>();\n  async save(n: Notification): Promise<void> { this.store.set(n.id, n); }\n  async findById(id: string): Promise<Notification | null> { return this.store.get(id) ?? null; }\n}\n\n// === Composition ===\nconst notifUseCase = new SendNotificationUseCase(\n  new SendGridAdapter(),\n  new TwilioAdapter(),\n  new FirebaseAdapter(),\n  new InMemoryNotificationRepo()\n);\nnotifUseCase.execute({ recipient: 'alice@example.com', type: 'email', title: 'Welcome!', body: 'Thanks for joining' });\n"
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