"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[60951],{

/***/ 18218
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_software_engineering_02_requirements_md_a0b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-software-engineering-02-requirements-md-a0b.json
const site_docs_courses_software_engineering_02_requirements_md_a0b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/software-engineering/02-requirements","title":"Requirements Engineering","description":"Learning Objectives","source":"@site/docs/courses/software-engineering/02-requirements.md","sourceDirName":"courses/software-engineering","slug":"/software-engineering/02-requirements","permalink":"/ai-engineering-journey/software-engineering/02-requirements","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"02-requirements","slug":"/software-engineering/02-requirements","title":"Requirements Engineering","sidebar_label":"Requirements Engineering","sidebar_position":2},"sidebar":"course-software-engineering","previous":{"title":"Software Process Models","permalink":"/ai-engineering-journey/software-engineering/01-process-models"},"next":{"title":"System Modelling","permalink":"/ai-engineering-journey/software-engineering/03-system-modeling"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/software-engineering/02-requirements.md


const frontMatter = {
	id: '02-requirements',
	slug: '/software-engineering/02-requirements',
	title: 'Requirements Engineering',
	sidebar_label: 'Requirements Engineering',
	sidebar_position: 2
};
const contentTitle = 'Requirements Engineering';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "The Requirements Engineering Process",
  "id": "the-requirements-engineering-process",
  "level": 3
}, {
  "value": "Types of Requirements",
  "id": "types-of-requirements",
  "level": 3
}, {
  "value": "FURPS+ Classification",
  "id": "furps-classification",
  "level": 3
}, {
  "value": "Feasibility Study",
  "id": "feasibility-study",
  "level": 3
}, {
  "value": "Requirements Elicitation",
  "id": "requirements-elicitation",
  "level": 3
}, {
  "value": "The INVEST Criteria for User Stories",
  "id": "the-invest-criteria-for-user-stories",
  "level": 3
}, {
  "value": "Requirements Specification Formats",
  "id": "requirements-specification-formats",
  "level": 3
}, {
  "value": "IEEE 830 SRS Format",
  "id": "ieee-830-srs-format",
  "level": 4
}, {
  "value": "Use Cases",
  "id": "use-cases",
  "level": 4
}, {
  "value": "MoSCoW Prioritisation",
  "id": "moscow-prioritisation",
  "level": 3
}, {
  "value": "The Kano Model",
  "id": "the-kano-model",
  "level": 3
}, {
  "value": "Requirements Validation",
  "id": "requirements-validation",
  "level": 3
}, {
  "value": "SMART Requirements",
  "id": "smart-requirements",
  "level": 3
}, {
  "value": "Requirements Traceability Matrix",
  "id": "requirements-traceability-matrix",
  "level": 3
}, {
  "value": "Requirements Management",
  "id": "requirements-management",
  "level": 3
}, {
  "value": "Requirements Engineering Workflow",
  "id": "requirements-engineering-workflow",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: TypeScript RequirementsManager — Full CRUD with Traceability",
  "id": "example-1-typescript-requirementsmanager--full-crud-with-traceability",
  "level": 3
}, {
  "value": "Example 2: UseCaseGenerator — from User Stories",
  "id": "example-2-usecasegenerator--from-user-stories",
  "level": 3
}, {
  "value": "Example 3: RequirementsValidator — SMART, Consistency, FURPS+",
  "id": "example-3-requirementsvalidator--smart-consistency-furps",
  "level": 3
}, {
  "value": "Example 4: Requirements Quality Analyzer with Consistency Checks",
  "id": "example-4-requirements-quality-analyzer-with-consistency-checks",
  "level": 3
}, {
  "value": "Case Study: SRS for a Library Management System",
  "id": "case-study-srs-for-a-library-management-system",
  "level": 3
}, {
  "value": "Case Study: Requirements Failure — The Denver Airport Baggage System",
  "id": "case-study-requirements-failure--the-denver-airport-baggage-system",
  "level": 3
}, {
  "value": "Agile Requirements vs Traditional Requirements",
  "id": "agile-requirements-vs-traditional-requirements",
  "level": 3
}, {
  "value": "Goal-Oriented Requirements Engineering (GORE)",
  "id": "goal-oriented-requirements-engineering-gore",
  "level": 3
}, {
  "value": "Real-World Example: Requirements Failure — The London Ambulance Service",
  "id": "real-world-example-requirements-failure--the-london-ambulance-service",
  "level": 3
}, {
  "value": "Case Study: Requirements Elicitation for a Healthcare App",
  "id": "case-study-requirements-elicitation-for-a-healthcare-app",
  "level": 3
}, {
  "value": "Requirements Validation Pipeline",
  "id": "requirements-validation-pipeline",
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
  "value": "Exercise 1: Requirements Classification with FURPS+",
  "id": "exercise-1-requirements-classification-with-furps",
  "level": 3
}, {
  "value": "Exercise 2: User Story Writing with INVEST",
  "id": "exercise-2-user-story-writing-with-invest",
  "level": 3
}, {
  "value": "Exercise 3: MoSCoW and Kano Analysis",
  "id": "exercise-3-moscow-and-kano-analysis",
  "level": 3
}, {
  "value": "Exercise 4: Requirements Traceability Matrix",
  "id": "exercise-4-requirements-traceability-matrix",
  "level": 3
}, {
  "value": "Exercise 5: Requirements Change Management System",
  "id": "exercise-5-requirements-change-management-system",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    details: "details",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
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
        id: "requirements-engineering",
        children: "Requirements Engineering"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "✅ After completing this chapter, the student will be able to:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Classify requirements as functional, non-functional, and domain requirements"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Apply FURPS+ classification to organise requirements comprehensively"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Conduct a feasibility study for a proposed software system across technical, economic, and operational dimensions"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Select and apply appropriate elicitation techniques based on project context"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Specify requirements using IEEE 830 format, user stories with INVEST criteria, and use cases"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Apply MoSCoW prioritisation and the Kano model to manage stakeholder expectations"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Perform requirements validation through reviews, prototyping, and automated checks"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Manage requirements through traceability, versioning, and change control processes"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Implement a full RequirementsManager with CRUD, traceability, and prioritisation in TypeScript"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Build automated validation pipelines that check SMART criteria, consistency, and completeness"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Generate use cases from user stories and manage requirements evolution"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-requirements-engineering-process",
      children: "The Requirements Engineering Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Requirements engineering is the branch of software engineering concerned with the real-world goals for, functions of, and constraints on a software system. It encompasses the set of activities from problem understanding through to the production of a validated specification."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    A[Feasibility Study] --> B[Elicitation]\n    B --> C[Analysis & Negotiation]\n    C --> D[Specification]\n    D --> E[Validation]\n    E --> F[Requirements Management]\n    F -.->|Iterate| B\n    F -.->|Iterate| C\n\n    classDef main fill:#3498db,stroke:#2980b9,color:#fff\n    classDef feedback fill:#e74c3c,stroke:#c0392b,color:#fff\n    class A,B,C,D,E,F main\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The requirements engineering process comprises four high-level activities: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "feasibility study"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "elicitation and analysis"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "specification"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "validation"
      }), ". These activities are interleaved, iterative, and must be revisited as understanding evolves. Industry data suggests that 40-60% of software defects originate in the requirements phase, making investment in this phase one of the highest-ROI activities in software engineering."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "types-of-requirements",
      children: "Types of Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Requirements are classified into three categories:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Functional requirements"
      }), " describe the services the system should provide, how it should react to particular inputs, and how it should behave in specific situations. Example: ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"The system shall allow registered borrowers to search the catalogue by author, title, or subject.\""
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Non-functional requirements"
      }), " are constraints on the services or functions offered by the system. They encompass quality attributes such as performance, security, availability, usability, and maintainability. These are often more critical than functional requirements — a system that fails to meet a non-functional requirement may be unacceptable even if all functions work correctly. For example, an e-commerce site that loads in 10 seconds will lose customers regardless of its feature set."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Domain requirements"
      }), " reflect the characteristics of the application domain. They may be functional or non-functional and are derived from the domain context. Example: ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"Interest must be calculated on a daily basis using the compound interest formula.\""
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "furps-classification",
      children: "FURPS+ Classification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FURPS+ is a comprehensive taxonomy for classifying requirements originally developed by Hewlett-Packard:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Subcategories"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "F"
            }), "unctionality"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Features, capabilities, security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"System shall support OAuth2 authentication with PKCE flow\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "U"
            }), "sability"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human factors, aesthetics, documentation, training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"95% of users shall complete checkout in under 3 minutes on first use\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "R"
            }), "eliability"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Availability, accuracy, recoverability, fault tolerance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"System uptime shall be 99.9% (8.76 hours downtime/year max)\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "P"
            }), "erformance"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Response time, throughput, resource usage, scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Search results returned within 2 seconds at 90th percentile under 1,000 concurrent users\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "S"
            }), "upportability"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Testability, maintainability, configurability, extensibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"System shall support hot-deploy of configuration changes without restart\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design constraints, interface, physical, legal, security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Must run on Linux x86_64; comply with GDPR Article 17 right to erasure\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FURPS+ is valuable because it forces teams to explicitly consider all quality dimensions, not just functionality. A system that meets all functional requirements but fails on usability or performance is still a failed system."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "feasibility-study",
      children: "Feasibility Study"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A feasibility study assesses whether a proposed software project is viable across three dimensions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Technical feasibility:"
        }), " Does the required technology exist? Does the team possess the necessary skills? Can the system integrate with existing infrastructure?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Economic feasibility:"
        }), " Do the expected benefits justify the investment? Common techniques include cost-benefit analysis (CBA), return on investment (ROI), net present value (NPV), and payback period."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Operational feasibility:"
        }), " Can the organisation adapt to the new system? Will users accept it? Does management support the change?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The output is a feasibility report recommending whether to proceed, with risk assessment and alternative recommendations."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world example:"
      }), " A hospital evaluating an AI-based diagnostic tool must assess technical feasibility (is the training data available?), economic feasibility (will fewer misdiagnoses save more than the system costs?), and operational feasibility (will doctors trust and use the AI suggestions?)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirements-elicitation",
      children: "Requirements Elicitation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Elicitation is the process of discovering requirements from stakeholders. Multiple techniques exist, each with strengths:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Elicitation Techniques & Artifacts\"\n        I[Interviews] --> S[Structured]\n        I --> U[Unstructured]\n        Q[Surveys] --> QD[Quantitative data]\n        O[Observation] --> P[Passive]\n        O --> A[Active / Task Analysis]\n        W[Workshops] --> JAD[JAD Sessions]\n        PR[Prototyping] --> TA[Throwaway]\n        PR --> EV[Evolutionary]\n        D[Document Analysis] --> DA[Existing systems]\n        BR[Brainstorming] --> ID[Idea generation]\n    end\n\n    classDef tech fill:#2ecc71,stroke:#27ae60,color:#fff\n    classDef output fill:#3498db,stroke:#2980b9,color:#fff\n    class I,Q,O,W,PR,D,BR tech\n    class S,U,QD,P,A,JAD,TA,EV,DA,ID output\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strengths"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Limitations"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interviews"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build rapport, explore tacit knowledge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time-consuming, may miss unarticulated needs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex domains, key stakeholders"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Surveys"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large sample, quantitative data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited depth, low response rates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validating assumptions at scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Observation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discover implicit requirements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hawthorne effect, time-intensive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understanding actual workflows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Workshops/JAD"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rapid consensus, conflict resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires facilitation skill, dominant personalities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aligning diverse stakeholder groups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prototyping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clarify vague requirements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Users may fixate on prototype UI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UI-heavy or innovative systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Document analysis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inexpensive, historical insight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Documentation may be outdated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy system replacement"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-invest-criteria-for-user-stories",
      children: "The INVEST Criteria for User Stories"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Good user stories follow the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "INVEST"
      }), " principle:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Anti-pattern"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "I"
            }), "ndependent"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Story can be developed independently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Story depends on 3 other stories"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "N"
            }), "egotiable"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Details can be discussed and refined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Story specifies exact UI pixels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "V"
            }), "aluable"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delivers clear value to stakeholder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Update database schema\" (tech-only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "E"
            }), "stimable"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Team can estimate effort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Build an AI\" (too vague)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "S"
            }), "mall"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fits within a single sprint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Build the entire payment system\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "T"
            }), "estable"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acceptance criteria can be verified"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Make it user-friendly\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "User stories are a lightweight specification format used in agile methods:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Template: As a [role], I want [goal] so that [benefit].\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example with acceptance criteria using ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gherkin"
      }), " syntax:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-gherkin",
        children: "Feature: Book Search\n  As a library patron\n  I want to search for books by title, author, or subject\n  So that I can find materials relevant to my research\n\n  Scenario: Search by exact title\n    Given I am on the library search page\n    When I search for \"Software Engineering\"\n    Then I should see results with the exact title \"Software Engineering\"\n    And the results should display title, author, publication year, and availability\n\n  Scenario: Search with partial match\n    Given I am on the library search page\n    When I search for \"Engineer\"\n    Then I should see results containing \"Engineer\" in the title\n    And results should be returned within 3 seconds\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirements-specification-formats",
      children: "Requirements Specification Formats"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ieee-830-srs-format",
      children: "IEEE 830 SRS Format"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Introduction"
        }), " — Purpose, scope, definitions, references, overview"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "General Description"
        }), " — Product perspective, user characteristics, constraints, assumptions, dependencies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Specific Requirements"
        }), " — Functional requirements (by mode/feature), external interface requirements, performance requirements, design constraints, software system attributes (security, reliability, maintainability, portability)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Appendices"
        }), " — Glossary, models, issues list"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "use-cases",
      children: "Use Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use cases describe interactions between actors and the system:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use Case Name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verb + Noun (e.g., \"Borrow Book\")"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Primary Actor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Who initiates the interaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Preconditions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What must be true before execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Main Success Scenario"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normal flow of events"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Alternative Flows"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variations and error paths"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Postconditions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What must be true after execution"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "moscow-prioritisation",
      children: "MoSCoW Prioritisation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MoSCoW is a prioritisation technique that categorises requirements:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Allocation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "M"
            }), "ust have"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical for launch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~60% of effort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User authentication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "S"
            }), "hould have"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Important but not critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~20% of effort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email notifications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            }), "ould have"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nice to have"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~20% of effort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dark mode theme"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "W"
            }), "on't have"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicitly excluded this time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "iOS app (web only first)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MoSCoW is typically applied at the release level, not for the entire project. Requirements can move between categories across releases as priorities shift."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-kano-model",
      children: "The Kano Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Kano model, developed by Noriaki Kano, categorises requirements by their effect on customer satisfaction:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Kano Model — Satisfaction Analysis\"\n        direction LR\n        A[Basic Needs<br/>Threshold] -->|Must be present| S1[Neutral if present<br/>Dissatisfied if absent]\n        B[Performance Needs<br/>Linear] -->|More is better| S2[Satisfaction increases<br/>with performance]\n        C[Delighters<br/>Attractive] -->|Unexpected| S3[Delighted if present<br/>Neutral if absent]\n        D[Indifferent] -->|Don't care| S4[No impact]\n        E[Reverse] -->|Some want it,<br/>some don't| S5[Polarising]\n    end\n\n    classDef basic fill:#e74c3c,stroke:#c0392b,color:#fff\n    classDef perf fill:#f39c12,stroke:#d35400,color:#fff\n    classDef delight fill:#2ecc71,stroke:#27ae60,color:#fff\n    classDef indiff fill:#bdc3c7,stroke:#95a5a6,color:#fff\n    classDef reverse fill:#9b59b6,stroke:#8e44ad,color:#fff\n    class A basic\n    class B perf\n    class C delight\n    class D indiff\n    class E reverse\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Basic Needs (Threshold):"
        }), " Expected features — their absence causes dissatisfaction. Example: brakes on a car."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Performance Needs:"
        }), " Features where better performance increases satisfaction. Example: battery life on a phone."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delighters (Attractive):"
        }), " Unexpected features that delight customers. Example: free charging cable in the box."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Indifferent:"
        }), " Features that neither delight nor frustrate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reverse:"
        }), " Features that some users want and others actively dislike."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The key insight: over time, delighters become performance needs, and performance needs become basic needs. Yesterday's competitive advantage is today's table stakes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirements-validation",
      children: "Requirements Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Validation ensures the specified requirements accurately reflect stakeholder needs:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Requirements reviews"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stakeholders inspect the specification for defects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After every major revision"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prototyping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Users interact with a mock-up to confirm understanding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When requirements are vague"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Test-case generation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Writing tests against requirements exposes inconsistencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before implementation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Checklists"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard question sets to catch common defects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Throughout the process"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Formal inspection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured, metrics-driven review with defined roles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For critical/regulated systems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common defects detected:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Omission:"
        }), " Necessary requirement is missing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inconsistency:"
        }), " Requirements contradict each other"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ambiguity:"
        }), " Requirement can be interpreted multiple ways"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Duplication:"
        }), " Same requirement appears multiple times"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Infeasibility:"
        }), " Requirement cannot be implemented within constraints"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Over-specification:"
        }), " Requirement unnecessarily constrains the design"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "smart-requirements",
      children: "SMART Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A well-formed requirement should be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SMART"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "S"
            }), "pecific"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear, precise, unambiguous"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"The system shall...\" not \"It should...\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "M"
            }), "easurable"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can be verified quantitatively"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Within 2 seconds\" not \"Quickly\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "A"
            }), "chievable"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Realistic within constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feasible with available technology"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "R"
            }), "elevant"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aligned with business goals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supports a stakeholder need"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "T"
            }), "ime-bound"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Has a timeframe or deadline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"By release 2.0\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirements-traceability-matrix",
      children: "Requirements Traceability Matrix"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Requirements Traceability Matrix (RTM) links requirements to their sources, design artefacts, implementation, and tests:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    R[Requirement REQ-001] --> S[Source: Stakeholder Interview #3]\n    R --> D[Design: SearchController class]\n    R --> I[Implementation: searchBooks.ts]\n    R --> T[Test: TC-001 search-spec.ts]\n    R --> UC[Use Case: UC-02 Search Catalogue]\n\n    classDef req fill:#e74c3c,stroke:#c0392b,color:#fff\n    classDef link fill:#3498db,stroke:#2980b9,color:#fff\n    class R req\n    class S,D,I,T,UC link\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirements-management",
      children: "Requirements Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Requirements management encompasses maintaining the specification as the system evolves:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Traceability:"
        }), " Links requirements to sources, design, code, and tests"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prioritisation:"
        }), " MoSCoW, Kano model, AHP for relative importance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Change control:"
        }), " CCB reviews proposed changes, assesses impact on cost/schedule"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Baselining:"
        }), " Freezing requirements at specific milestones"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning:"
        }), " Tracking changes across requirement revisions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirements-engineering-workflow",
      children: "Requirements Engineering Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Requirements Lifecycle\"\n        START((Start)) --> ELICIT[Elicitation]\n        ELICIT --> ANALYZE[Analysis & Negotiation]\n        ANALYZE --> SPEC[Specification]\n        SPEC --> VALIDATE{Validation}\n        VALIDATE -->|Passed| APPROVED[Approved]\n        VALIDATE -->|Failed| REVISE[Revise]\n        REVISE --> SPEC\n        APPROVED --> IMPLEMENT[Implementation]\n        IMPLEMENT --> VERIFY{Verification}\n        VERIFY -->|Passed| DONE[Done]\n        VERIFY -->|Failed| CHANGE[Change Request]\n        CHANGE --> CCB{CCB Review}\n        CCB -->|Approve| REVISE\n        CCB -->|Reject| IMPLEMENT\n    end\n\n    classDef start fill:#2c3e50,stroke:#2c3e50,color:#fff\n    classDef proc fill:#3498db,stroke:#2980b9,color:#fff\n    classDef decision fill:#f39c12,stroke:#d35400,color:#fff\n    classDef done fill:#2ecc71,stroke:#27ae60,color:#fff\n    class START start\n    class ELICIT,ANALYZE,SPEC,REVISE,APPROVED,IMPLEMENT proc\n    class VALIDATE,VERIFY,CCB decision\n    class DONE done\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-typescript-requirementsmanager--full-crud-with-traceability",
      children: "Example 1: TypeScript RequirementsManager — Full CRUD with Traceability"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type RequirementType = 'functional' | 'non-functional' | 'domain';\ntype Priority = 'MUST' | 'SHOULD' | 'COULD' | 'WONT';\ntype KanoCategory = 'basic' | 'performance' | 'excitement' | 'indifferent' | 'reverse';\ntype Status = 'proposed' | 'approved' | 'implemented' | 'verified' | 'rejected';\n\ninterface Requirement {\n  id: string;\n  title: string;\n  description: string;\n  type: RequirementType;\n  priority: Priority;\n  kanoCategory: KanoCategory;\n  status: Status;\n  source: string;\n  owner: string;\n  createdAt: Date;\n  updatedAt: Date;\n  version: number;\n  traceabilityLinks: TraceabilityLink[];\n  acceptanceCriteria: string[];\n}\n\ninterface TraceabilityLink {\n  targetId: string;\n  targetType: 'design' | 'implementation' | 'test' | 'source' | 'useCase';\n  description: string;\n}\n\ninterface ChangeLogEntry {\n  reqId: string;\n  version: number;\n  action: string;\n  detail: string;\n  timestamp: Date;\n  user: string;\n}\n\nclass RequirementsManager {\n  private requirements: Map<string, Requirement> = new Map();\n  private changeLog: ChangeLogEntry[] = [];\n  private nextId = 1;\n\n  public addRequirement(\n    req: Omit<Requirement, 'id' | 'createdAt' | 'updatedAt' | 'version'>,\n    user: string = 'system'\n  ): Requirement {\n    const id = `REQ-${String(this.nextId++).padStart(4, '0')}`;\n    const requirement: Requirement = {\n      ...req,\n      id,\n      createdAt: new Date(),\n      updatedAt: new Date(),\n      version: 1,\n      traceabilityLinks: req.traceabilityLinks ?? [],\n      acceptanceCriteria: req.acceptanceCriteria ?? [],\n    };\n    this.requirements.set(id, requirement);\n    this.logChange(id, 'CREATED', `Requirement created: ${req.title}`, user);\n    return requirement;\n  }\n\n  public getRequirement(id: string): Requirement | undefined {\n    return this.requirements.get(id);\n  }\n\n  public updateRequirement(\n    id: string,\n    updates: Partial<Pick<Requirement, 'description' | 'priority' | 'status' | 'acceptanceCriteria' | 'kanoCategory'>>,\n    user: string = 'system'\n  ): Requirement {\n    const req = this.requirements.get(id);\n    if (!req) throw new Error(`Requirement ${id} not found`);\n    const updated: Requirement = {\n      ...req,\n      ...updates,\n      updatedAt: new Date(),\n      version: req.version + 1,\n    };\n    this.requirements.set(id, updated);\n    this.logChange(id, 'UPDATED', JSON.stringify(updates), user);\n    return updated;\n  }\n\n  public addTraceabilityLink(\n    reqId: string,\n    targetId: string,\n    targetType: TraceabilityLink['targetType'],\n    description: string\n  ): void {\n    const req = this.requirements.get(reqId);\n    if (!req) throw new Error(`Requirement ${reqId} not found`);\n    req.traceabilityLinks.push({ targetId, targetType, description });\n    req.updatedAt = new Date();\n  }\n\n  public getRequirementsByType(type: RequirementType): Requirement[] {\n    return Array.from(this.requirements.values()).filter((r) => r.type === type);\n  }\n\n  public getRequirementsByPriority(priority: Priority): Requirement[] {\n    return Array.from(this.requirements.values()).filter((r) => r.priority === priority);\n  }\n\n  public getRequirementsByStatus(status: Status): Requirement[] {\n    return Array.from(this.requirements.values()).filter((r) => r.status === status);\n  }\n\n  public getRequirementsByKano(category: KanoCategory): Requirement[] {\n    return Array.from(this.requirements.values()).filter((r) => r.kanoCategory === category);\n  }\n\n  public impactAnalysis(changedRequirementId: string): {\n    requirement: Requirement | undefined;\n    affectedDesign: string[];\n    affectedImplementation: string[];\n    affectedTests: string[];\n    affectedUseCases: string[];\n  } {\n    const req = this.requirements.get(changedRequirementId);\n    if (!req) return { requirement: undefined, affectedDesign: [], affectedImplementation: [], affectedTests: [], affectedUseCases: [] };\n    return {\n      requirement: req,\n      affectedDesign: req.traceabilityLinks.filter((l) => l.targetType === 'design').map((l) => l.targetId),\n      affectedImplementation: req.traceabilityLinks.filter((l) => l.targetType === 'implementation').map((l) => l.targetId),\n      affectedTests: req.traceabilityLinks.filter((l) => l.targetType === 'test').map((l) => l.targetId),\n      affectedUseCases: req.traceabilityLinks.filter((l) => l.targetType === 'useCase').map((l) => l.targetId),\n    };\n  }\n\n  public generateTraceabilityReport(): Map<string, string[]> {\n    const report = new Map<string, string[]>();\n    for (const req of this.requirements.values()) {\n      const targets = req.traceabilityLinks.map(l => `${l.targetType}:${l.targetId}`);\n      report.set(req.id, targets);\n    }\n    return report;\n  }\n\n  public getChangeHistory(reqId: string): ChangeLogEntry[] {\n    return this.changeLog.filter(e => e.reqId === reqId).sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());\n  }\n\n  private logChange(reqId: string, action: string, detail: string, user: string): void {\n    const req = this.requirements.get(reqId);\n    this.changeLog.push({ reqId, version: req?.version ?? 1, action, detail, timestamp: new Date(), user });\n  }\n\n  public getChangeLog(): ChangeLogEntry[] {\n    return [...this.changeLog];\n  }\n\n  public moscowAnalysis(): { must: Requirement[]; should: Requirement[]; could: Requirement[]; wont: Requirement[] } {\n    return {\n      must: this.getRequirementsByPriority('MUST'),\n      should: this.getRequirementsByPriority('SHOULD'),\n      could: this.getRequirementsByPriority('COULD'),\n      wont: this.getRequirementsByPriority('WONT'),\n    };\n  }\n\n  public getStatistics(): { total: number; byType: Record<string, number>; byStatus: Record<string, number>; byPriority: Record<string, number> } {\n    const all = Array.from(this.requirements.values());\n    const byType: Record<string, number> = {};\n    const byStatus: Record<string, number> = {};\n    const byPriority: Record<string, number> = {};\n    for (const r of all) {\n      byType[r.type] = (byType[r.type] ?? 0) + 1;\n      byStatus[r.status] = (byStatus[r.status] ?? 0) + 1;\n      byPriority[r.priority] = (byPriority[r.priority] ?? 0) + 1;\n    }\n    return { total: all.length, byType, byStatus, byPriority };\n  }\n}\n\n// Usage\nconst rm = new RequirementsManager();\nconst req1 = rm.addRequirement({\n  title: 'Book Search',\n  description: 'Users can search the catalogue by title, author, or subject',\n  type: 'functional',\n  priority: 'MUST',\n  kanoCategory: 'basic',\n  status: 'approved',\n  source: 'Stakeholder interview #3 with library director',\n  owner: 'Alice',\n  acceptanceCriteria: [\n    'Search returns results within 3 seconds at 90th percentile',\n    'Results display title, author, year, and availability',\n    'Supports partial matching and wildcards',\n  ],\n});\n\nrm.addTraceabilityLink(req1.id, 'DES-001', 'design', 'SearchController class in web module');\nrm.addTraceabilityLink(req1.id, 'TC-001', 'test', 'Search functionality E2E tests');\nrm.addTraceabilityLink(req1.id, 'IMP-001', 'implementation', 'searchBooks.ts service');\nconsole.log(rm.impactAnalysis(req1.id));\nconsole.log(rm.getStatistics());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-usecasegenerator--from-user-stories",
      children: "Example 2: UseCaseGenerator — from User Stories"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface UserStory {\n  role: string;\n  goal: string;\n  benefit: string;\n  acceptanceCriteria: string[];\n  priority: 'MUST' | 'SHOULD' | 'COULD' | 'WONT';\n  storyPoints?: number;\n}\n\ninterface UseCaseStep {\n  stepNumber: number;\n  actor: string;\n  action: string;\n}\n\ninterface AlternativeFlow {\n  identifier: string;\n  condition: string;\n  steps: UseCaseStep[];\n}\n\ninterface GeneratedUseCase {\n  name: string;\n  primaryActor: string;\n  preconditions: string[];\n  mainSuccessScenario: UseCaseStep[];\n  alternativeFlows: AlternativeFlow[];\n  postconditions: string[];\n  sourceStory: UserStory;\n}\n\nclass UseCaseGenerator {\n  public generateFromStory(story: UserStory): GeneratedUseCase {\n    const name = this.storyToUseCaseName(story);\n    const steps: UseCaseStep[] = [\n      { stepNumber: 1, actor: story.role, action: `Initiates ${story.goal} from the UI` },\n      { stepNumber: 2, actor: 'System', action: `Validates input for ${story.goal}` },\n      { stepNumber: 3, actor: 'System', action: `Processes ${story.goal} request` },\n      { stepNumber: 4, actor: 'System', action: `Returns result: ${story.benefit}` },\n      { stepNumber: 5, actor: story.role, action: 'Receives confirmation' },\n    ];\n\n    const alternatives: AlternativeFlow[] = story.acceptanceCriteria\n      .filter((_, i) => i % 2 === 1)\n      .slice(0, 3)\n      .map((criterion, i) => ({\n        identifier: `A${i + 1}: Validation failure`,\n        condition: `When ${criterion.toLowerCase()}`,\n        steps: [\n          { stepNumber: 1, actor: 'System', action: `Detects constraint violation` },\n          { stepNumber: 2, actor: 'System', action: 'Displays error message with details' },\n          { stepNumber: 3, actor: story.role, action: 'Corrects input and retries' },\n        ],\n      }));\n\n    return {\n      name,\n      primaryActor: story.role,\n      preconditions: [\n        `${story.role} is authenticated and authorised`,\n        `System is available and operational`,\n      ],\n      mainSuccessScenario: steps,\n      alternativeFlows: alternatives,\n      postconditions: [\n        `${story.benefit} is achieved`,\n        `Audit log entry is created`,\n      ],\n      sourceStory: story,\n    };\n  }\n\n  private storyToUseCaseName(story: UserStory): string {\n    const goal = story.goal\n      .replace(/\\b(?:to|a|the|for)\\b/gi, '')\n      .trim();\n    return goal.charAt(0).toUpperCase() + goal.slice(1);\n  }\n\n  public generateFromStories(stories: UserStory[]): GeneratedUseCase[] {\n    return stories.map(s => this.generateFromStory(s));\n  }\n\n  public formatUseCase(uc: GeneratedUseCase): string {\n    const lines = [\n      `Use Case: ${uc.name}`,\n      `Primary Actor: ${uc.primaryActor}`,\n      '',\n      'Preconditions:',\n      ...uc.preconditions.map(p => `  - ${p}`),\n      '',\n      'Main Success Scenario:',\n      ...uc.mainSuccessScenario.map(s => `  ${s.stepNumber}. ${s.actor}: ${s.action}`),\n      '',\n      'Alternative Flows:',\n      ...uc.alternativeFlows.flatMap(a => [\n        `  ${a.identifier}:`,\n        `    Condition: ${a.condition}`,\n        ...a.steps.map(s => `    ${s.stepNumber}. ${s.actor}: ${s.action}`),\n      ]),\n      '',\n      'Postconditions:',\n      ...uc.postconditions.map(p => `  - ${p}`),\n    ];\n    return lines.join('\\n');\n  }\n}\n\n// Usage\nconst generator = new UseCaseGenerator();\nconst story: UserStory = {\n  role: 'student',\n  goal: 'register for a course',\n  benefit: 'enrol in the selected class',\n  acceptanceCriteria: [\n    'Student has prerequisite courses completed',\n    'Course has available seats',\n    'Registration is within the add/drop period',\n    'Confirmation email is sent',\n  ],\n  priority: 'MUST',\n  storyPoints: 5,\n};\nconst useCase = generator.generateFromStory(story);\nconsole.log(generator.formatUseCase(useCase));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-requirementsvalidator--smart-consistency-furps",
      children: "Example 3: RequirementsValidator — SMART, Consistency, FURPS+"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface RequirementSpec {\n  id: string;\n  text: string;\n  type: 'functional' | 'non-functional' | 'domain';\n  source: string;\n  priority: 'MUST' | 'SHOULD' | 'COULD' | 'WONT';\n}\n\ninterface ValidationResult {\n  requirementId: string;\n  passed: boolean;\n  checks: ValidationCheck[];\n  suggestion?: string;\n  smartScore: number; // 0-100\n}\n\ninterface ValidationCheck {\n  rule: string;\n  passed: boolean;\n  message: string;\n  severity: 'error' | 'warning' | 'info';\n}\n\nclass RequirementsValidator {\n  private readonly patterns = {\n    testableKeywords: /\\b(shall|must|will|should)\\b/i,\n    vagueTerms: /\\b(user[- ]friendly|easy|intuitive|robust|flexible|fast|efficient|reliable|simple|modern|state[- ]of[- ]the[- ]art|seamless|smooth)\\b/i,\n    measurableMetrics: /\\b(seconds|milliseconds|percent|concurrent|requests|transactions|uptime|availability|nines|tps|kb|mb|gb|ms|rps)\\b/i,\n    ambiguousQuantifiers: /\\b(some|many|several|often|sometimes|usually|most|various|numerous|adequate|appropriate|sufficient)\\b/i,\n    absoluteTerms: /\\b(always|never|all|every|none|must not|shall not)\\b/i,\n    actorTerms: /\\b(the system|user|admin|customer|operator|manager|patron|student|client|server)\\b/i,\n    actionTerms: /\\b(shall|must|will|should|can|may|shall not|must not)\\b/i,\n  };\n\n  public validate(requirement: RequirementSpec): ValidationResult {\n    const checks: ValidationCheck[] = [\n      this.checkTestable(requirement),\n      this.checkVagueTerms(requirement),\n      this.checkMeasurable(requirement),\n      this.checkAmbiguous(requirement),\n      this.checkUniqueness(requirement),\n      this.checkWellFormed(requirement),\n      this.checkAbsoluteTerms(requirement),\n      this.checkConsistency(requirement),\n    ];\n    const passed = checks.every((c) => c.severity !== 'error' || c.passed);\n    const smartScore = this.calculateSMARTScore(checks);\n    return {\n      requirementId: requirement.id,\n      passed,\n      checks,\n      suggestion: passed ? undefined : this.generateSuggestion(requirement, checks),\n      smartScore,\n    };\n  }\n\n  public validateAll(requirements: RequirementSpec[]): {\n    results: ValidationResult[];\n    overallPassRate: number;\n    averageSmartScore: number;\n    summary: string;\n  } {\n    const results = requirements.map(r => this.validate(r));\n    const passed = results.filter(r => r.passed).length;\n    const overallPassRate = (passed / results.length) * 100;\n    const averageSmartScore = results.reduce((s, r) => s + r.smartScore, 0) / results.length;\n    return {\n      results,\n      overallPassRate: Math.round(overallPassRate * 10) / 10,\n      averageSmartScore: Math.round(averageSmartScore * 10) / 10,\n      summary: `${passed}/${results.length} passed (${overallPassRate}%), avg SMART score: ${averageSmartScore}`,\n    };\n  }\n\n  private checkTestable(req: RequirementSpec): ValidationCheck {\n    const hasKeyword = this.patterns.testableKeywords.test(req.text);\n    return {\n      rule: 'testable-statement',\n      passed: hasKeyword,\n      severity: 'error',\n      message: hasKeyword ? 'Contains verifiable keyword' : 'Missing \"shall\" or \"must\" — requirement may not be testable',\n    };\n  }\n\n  private checkVagueTerms(req: RequirementSpec): ValidationCheck {\n    const matches = req.text.match(this.patterns.vagueTerms);\n    return {\n      rule: 'no-vague-terms',\n      passed: !matches,\n      severity: 'error',\n      message: matches ? `Contains vague term(s): \"${matches.join(', ')}\" — replace with specific criteria` : 'No vague terms',\n    };\n  }\n\n  private checkMeasurable(req: RequirementSpec): ValidationCheck {\n    const hasMetric = this.patterns.measurableMetrics.test(req.text);\n    return {\n      rule: 'measurable-metric',\n      passed: hasMetric || req.type !== 'non-functional',\n      severity: 'warning',\n      message: hasMetric ? 'Contains measurable metric' : 'NFR should include measurable metric (seconds, percent, etc.)',\n    };\n  }\n\n  private checkAmbiguous(req: RequirementSpec): ValidationCheck {\n    const matches = req.text.match(this.patterns.ambiguousQuantifiers);\n    return {\n      rule: 'no-ambiguous-quantifiers',\n      passed: !matches,\n      severity: 'warning',\n      message: matches ? `Ambiguous quantifier(s): \"${matches.join(', ')}\" — use exact numbers` : 'No ambiguous quantifiers',\n    };\n  }\n\n  private checkUniqueness(req: RequirementSpec): ValidationCheck {\n    const idFormat = /^(REQ|FR|NFR|DR|US)-\\d+$/i.test(req.id);\n    return {\n      rule: 'unique-identifier',\n      passed: idFormat,\n      severity: 'info',\n      message: idFormat ? 'Valid ID format' : 'ID should match pattern: REQ-001, FR-001, NFR-001, US-001',\n    };\n  }\n\n  private checkWellFormed(req: RequirementSpec): ValidationCheck {\n    const hasActor = this.patterns.actorTerms.test(req.text);\n    const hasAction = this.patterns.actionTerms.test(req.text);\n    const bothPresent = hasActor && hasAction;\n    return {\n      rule: 'well-formed-structure',\n      passed: bothPresent,\n      severity: 'error',\n      message: !hasActor ? 'Missing actor' : !hasAction ? 'Missing action verb' : 'Well-formed',\n    };\n  }\n\n  private checkAbsoluteTerms(req: RequirementSpec): ValidationCheck {\n    const matches = req.text.match(this.patterns.absoluteTerms);\n    return {\n      rule: 'no-absolute-terms',\n      passed: !matches,\n      severity: 'warning',\n      message: matches ? `Absolute term(s): \"${matches.join(', ')}\" — consider softening` : 'No absolute terms',\n    };\n  }\n\n  private checkConsistency(req: RequirementSpec): ValidationCheck {\n    const hasShall = /\\bshall\\b/i.test(req.text);\n    const hasShould = /\\bshould\\b/i.test(req.text);\n    return {\n      rule: 'consistent-keyword',\n      passed: !(hasShall && hasShould),\n      severity: 'warning',\n      message: hasShall && hasShould ? 'Mixed \"shall\" and \"should\" — be consistent' : 'Consistent keyword usage',\n    };\n  }\n\n  private calculateSMARTScore(checks: ValidationCheck[]): number {\n    let score = 100;\n    for (const check of checks) {\n      if (!check.passed) {\n        score -= check.severity === 'error' ? 20 : check.severity === 'warning' ? 10 : 5;\n      }\n    }\n    return Math.max(0, score);\n  }\n\n  private generateSuggestion(req: RequirementSpec, failedChecks: ValidationCheck[]): string {\n    return failedChecks.filter((c) => !c.passed).map((c) => c.message).join('; ');\n  }\n\n  public classifyByFurps(text: string): string {\n    const keywords: Record<string, string[]> = {\n      functionality: ['search', 'calculate', 'process', 'generate', 'register', 'submit', 'authenticate', 'authorize'],\n      usability: ['help', 'documentation', 'training', 'guide', 'interface', 'layout', 'responsive'],\n      reliability: ['available', 'failover', 'recover', 'backup', 'uptime', 'fault', 'redundancy', 'restore'],\n      performance: ['speed', 'response', 'throughput', 'latency', 'concurrent', 'second', 'millisecond', 'scalable'],\n      supportability: ['maintain', 'test', 'deploy', 'configure', 'monitor', 'log', 'debug', 'instrument'],\n    };\n    const lower = text.toLowerCase();\n    for (const [category, terms] of Object.entries(keywords)) {\n      if (terms.some(t => lower.includes(t))) return category;\n    }\n    return 'uncategorised';\n  }\n}\n\n// Usage\nconst validator = new RequirementsValidator();\nconst results = validator.validateAll([\n  { id: 'FR-001', text: 'The system shall process 1,000 transactions per second with 99.9% uptime', type: 'non-functional', source: 'Stakeholder #5', priority: 'MUST' },\n  { id: 'FR-002', text: 'The UI should be user-friendly and intuitive for all users', type: 'functional', source: 'Stakeholder #2', priority: 'SHOULD' },\n  { id: 'FR-003', text: 'The system shall support user registration with email verification', type: 'functional', source: 'Stakeholder #1', priority: 'MUST' },\n  { id: 'FR-004', text: 'Response time shall be under 200ms for 95% of API requests', type: 'non-functional', source: 'Stakeholder #3', priority: 'MUST' },\n]);\nconsole.log(results.summary);\nresults.results.forEach(r => console.log(`${r.requirementId}: ${r.passed ? 'PASS' : 'FAIL'} (SMART: ${r.smartScore})`));\nconsole.log('FURPS+:', validator.classifyByFurps('The system shall process 1000 requests per second'));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-requirements-quality-analyzer-with-consistency-checks",
      children: "Example 4: Requirements Quality Analyzer with Consistency Checks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Requirement {\n  id: string;\n  text: string;\n  priority: \"MUST\" | \"SHOULD\" | \"COULD\" | \"WONT\";\n}\n\ninterface QualityReport {\n  id: string;\n  issues: string[];\n  score: number;\n  grade: 'A' | 'B' | 'C' | 'D' | 'F';\n}\n\nclass RequirementQualityAnalyzer {\n  public analyze(req: Requirement): QualityReport {\n    const issues: string[] = [];\n    let score = 100;\n    if (req.text.length < 15) { issues.push(\"Too short (< 15 chars)\"); score -= 20; }\n    if (/(and\\/or|etc|e\\.g\\.|i\\.e\\.)/i.test(req.text)) { issues.push(\"Contains ambiguous connectors\"); score -= 10; }\n    if (/fast|quick|easy|user-friendly|robust|efficient|simple|modern/i.test(req.text)) { issues.push(\"Subjective terms\"); score -= 15; }\n    if (/\\bshould\\b/i.test(req.text) && !/\\bshall\\b/i.test(req.text)) { issues.push(\"Weak language — use 'shall'\"); score -= 10; }\n    if (!/^[A-Z]/.test(req.text.trim())) { issues.push(\"Should start with capital letter\"); score -= 5; }\n    if (!/[.?!;]$/.test(req.text.trim())) { issues.push(\"Missing terminal punctuation\"); score -= 5; }\n    if (/\\b(always|never|all|every|none)\\b/i.test(req.text)) { issues.push(\"Contains absolute terms\"); score -= 10; }\n    if (!/\\d+/.test(req.text) && req.priority === \"MUST\") { issues.push(\"MUST priority lacks measurable criteria\"); score -= 15; }\n    if (/\\b(support|handle|manage|deal with)\\b/i.test(req.text)) { issues.push(\"Vague verb — specify exact behaviour\"); score -= 10; }\n    const grade = score >= 90 ? 'A' : score >= 75 ? 'B' : score >= 60 ? 'C' : score >= 40 ? 'D' : 'F';\n    return { id: req.id, issues, score: Math.max(0, score), grade };\n  }\n\n  public analyzeSet(reqs: Requirement[]): {\n    averageScore: number;\n    totalIssues: number;\n    gradeDistribution: Record<string, number>;\n    summary: string;\n  } {\n    const reports = reqs.map(r => this.analyze(r));\n    const avg = reports.reduce((s, r) => s + r.score, 0) / reports.length;\n    const totalIssues = reports.reduce((s, r) => s + r.issues.length, 0);\n    const gradeDistribution: Record<string, number> = {};\n    for (const r of reports) {\n      gradeDistribution[r.grade] = (gradeDistribution[r.grade] ?? 0) + 1;\n    }\n    const grade = avg >= 90 ? 'Excellent' : avg >= 75 ? 'Good' : avg >= 60 ? 'Needs Improvement' : 'Poor';\n    return {\n      averageScore: Math.round(avg * 10) / 10,\n      totalIssues,\n      gradeDistribution,\n      summary: `${reqs.length} requirements: ${grade} (${Math.round(avg)}%) with ${totalIssues} issues`,\n    };\n  }\n\n  public findInconsistencies(reqs: Requirement[]): { pairs: [string, string][]; reason: string }[] {\n    const inconsistencies: { pairs: [string, string][]; reason: string }[] = [];\n    for (let i = 0; i < reqs.length; i++) {\n      for (let j = i + 1; j < reqs.length; j++) {\n        if (this.contradict(reqs[i], reqs[j])) {\n          inconsistencies.push({ pairs: [[reqs[i].id, reqs[j].id]], reason: 'Potential contradiction detected' });\n        }\n      }\n    }\n    return inconsistencies;\n  }\n\n  private contradict(a: Requirement, b: Requirement): boolean {\n    const aText = a.text.toLowerCase();\n    const bText = b.text.toLowerCase();\n    if (aText.includes('uptime') && bText.includes('uptime')) {\n      const aVal = aText.match(/(\\d+\\.?\\d*)%/);\n      const bVal = bText.match(/(\\d+\\.?\\d*)%/);\n      if (aVal && bVal && parseFloat(aVal[1]) !== parseFloat(bVal[1])) return true;\n    }\n    return false;\n  }\n}\n\nconst analyzer = new RequirementQualityAnalyzer();\nconst reqs: Requirement[] = [\n  { id: \"REQ-001\", text: \"The system shall process 1000 transactions per second.\", priority: \"MUST\" },\n  { id: \"REQ-002\", text: \"The UI should be user-friendly and fast.\", priority: \"SHOULD\" },\n  { id: \"REQ-003\", text: \"The system shall support 10,000 concurrent users with < 200ms latency.\", priority: \"MUST\" },\n  { id: \"REQ-004\", text: \"The system shall always be available 100% of the time.\", priority: \"MUST\" },\n];\nreqs.forEach(r => console.log(analyzer.analyze(r)));\nconsole.log(analyzer.analyzeSet(reqs));\nconsole.log(analyzer.findInconsistencies(reqs));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-srs-for-a-library-management-system",
      children: "Case Study: SRS for a Library Management System"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A university library commissioned a new management system. The requirements team conducted interviews with librarians, library patrons, and IT staff. They distributed surveys to 500 library users and observed the circulation desk during peak hours. The resulting SRS included 73 functional requirements organised by subsystem, 18 non-functional requirements covering performance and security, and domain requirements specifying the Library of Congress classification system. A requirements traceability matrix linked every requirement to its source and test cases. The project was delivered on time with 94% of requirements fully met — the remaining 6% were deferred to a second release after MoSCoW re-prioritisation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-requirements-failure--the-denver-airport-baggage-system",
      children: "Case Study: Requirements Failure — The Denver Airport Baggage System"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Denver International Airport automated baggage handling system (1995) is a classic requirements failure. The system was specified to handle 1,000 bags per hour across 20 airlines with 99.9% reliability. Requirements were incomplete: the system was designed for standard bags only, but oversized items (skis, golf bags) were not addressed. The integration of 400+ individual robots required complex coordination that was underestimated. After $560M in overruns (300% over budget) and 16 months delay, the airport opened with a manual backup system. The key lesson: non-functional requirements (integration complexity, fault tolerance, edge case handling) are as critical as functional requirements."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "agile-requirements-vs-traditional-requirements",
      children: "Agile Requirements vs Traditional Requirements"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Traditional (IEEE 830)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Agile (User Stories)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Timing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All requirements defined upfront"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Just-in-time refinement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Detail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comprehensive, detailed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lightweight, elaborated during sprint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formal document sections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "As a/I want/So that + acceptance criteria"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Change management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Change requests through CCB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backlog re-prioritisation each sprint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traceability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full RTM required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traceability via story mapping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stakeholder involvement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At specification sign-off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous via product owner"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Against SRS at end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acceptance tests per story"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-price contracts, regulated domains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uncertain requirements, rapid delivery"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern teams often blend both: an initial requirements catalogue (lightweight SRS) for budgeting and contracting, then user stories for execution."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "goal-oriented-requirements-engineering-gore",
      children: "Goal-Oriented Requirements Engineering (GORE)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Goal-Oriented Requirements Engineering approaches — such as KAOS and i* — focus on identifying and modelling stakeholder ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "goals"
      }), " rather than just functional requirements. Goals drive the requirements process by providing rationale for why requirements exist:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Goal types:"
        }), " Functional goals (what the system should do) and soft goals (quality attributes that cannot be precisely measured)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Goal refinement:"
        }), " High-level goals are AND/OR decomposed into sub-goals until they become operationalisable requirements"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conflict detection:"
        }), " Goals from different stakeholders may conflict (e.g., \"fast response\" vs \"low cost\") — GORE makes these conflicts explicit"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example — Library System:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "High-level goal:"
        }), " Improve patron access to library resources\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Sub-goal (AND):"
            }), " Allow 24/7 digital access → requirement: web catalogue"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Sub-goal (AND):"
            }), " Reduce checkout wait times → requirement: self-service kiosks"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Alternative (OR):"
            }), " Implement RFID tagging OR barcode scanning"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Soft goal:"
            }), " Easy to use → evaluated through usability testing"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-example-requirements-failure--the-london-ambulance-service",
      children: "Real-World Example: Requirements Failure — The London Ambulance Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The London Ambulance Service Computer-Aided Despatch (LAS CAD) system failure (1992) is a textbook requirements engineering disaster. The system was intended to automate ambulance despatch across Greater London. Key requirements failures included:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Incomplete elicitation:"
        }), " Despatchers' complex workflow was not fully understood (they used paper maps, local knowledge, and informal radio communication that were not documented)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Missing non-functional requirements:"
        }), " The system needed to handle 2,000+ calls per day with 3-second response time — this was specified but never verified under load"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Domain requirements missed:"
        }), " Ambulance crews needed to make decisions based on contextual knowledge (traffic, weather, crew experience) that the system couldn't model"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No fallback mode:"
        }), " When the system failed (which it did 36 times in 2 days), there was no graceful degradation to manual operation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " The system was withdrawn after 2 days of operation. Estimated cost: £1.5M (1992). Lives were potentially put at risk. The key lesson: requirements engineering for safety-critical systems must include exhaustive domain analysis, rigorous non-functional specification, and explicit failure mode modelling."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-requirements-elicitation-for-a-healthcare-app",
      children: "Case Study: Requirements Elicitation for a Healthcare App"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A health-tech startup developing a medication adherence app used a multi-method elicitation approach:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Contextual inquiry"
        }), " — observed 15 patients managing medications at home"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Diary studies"
        }), " — 30 patients logged medication-taking behaviour for 2 weeks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Co-design workshops"
        }), " — patients, pharmacists, and doctors designed the core workflow together"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Paper prototyping"
        }), " — tested navigation flows before writing code"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This revealed critical requirements missed by initial stakeholder interviews: patients wanted flexible reminder schedules (not just fixed times), caregivers needed visibility into missed doses, and pharmacists needed integration with existing dispensing systems. The app achieved 87% adherence rate vs 50% industry average."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirements-validation-pipeline",
      children: "Requirements Validation Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Requirements Validation Pipeline\"\n        RAW[Raw Requirement] --> PARSE[Parse & Classify]\n        PARSE --> TYPE{Type?}\n        TYPE -->|Functional| FCHECKS[Functional Checks]\n        TYPE -->|Non-Functional| NFCHECKS[Non-Functional Checks]\n        TYPE -->|Domain| DCHECKS[Domain Checks]\n        \n        FCHECKS --> T1[Testable?]\n        FCHECKS --> T2[Unambiguous?]\n        FCHECKS --> T3[Complete?]\n        \n        NFCHECKS --> T4[Metrics Defined?]\n        NFCHECKS --> T5[Verifiable?]\n        NFCHECKS --> T6[Boundaries Clear?]\n        \n        DCHECKS --> T7[Domain Rule?]\n        DCHECKS --> T8[Consistent?]\n        \n        T1 --> AGG[Aggregate Results]\n        T2 --> AGG\n        T3 --> AGG\n        T4 --> AGG\n        T5 --> AGG\n        T6 --> AGG\n        T7 --> AGG\n        T8 --> AGG\n        \n        AGG --> PASSED{All Error Checks Passed?}\n        PASSED -->|Yes| APPROVED[Requirement Approved]\n        PASSED -->|No| FEEDBACK[Generate Feedback]\n        FEEDBACK --> REVISE[Revise Requirement]\n        REVISE --> RAW\n    end\n\n    classDef raw fill:#e74c3c,stroke:#c0392b,color:#fff\n    classDef proc fill:#3498db,stroke:#2980b9,color:#fff\n    classDef check fill:#f39c12,stroke:#d35400,color:#fff\n    classDef decision fill:#2ecc71,stroke:#27ae60,color:#fff\n    class RAW raw\n    class PARSE,FCHECKS,NFCHECKS,DCHECKS,AGG,FEEDBACK,REVISE proc\n    class TYPE,PASSED decision\n    class T1,T2,T3,T4,T5,T6,T7,T8 check\n    class APPROVED check\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Requirements engineering is the foundation of successful software development. Functional requirements define what the system must do; non-functional constraints how it does it; and domain requirements capture the context and rules of the application domain. FURPS+ provides a comprehensive classification that ensures all quality dimensions are explicitly considered. Feasibility studies across technical, economic, and operational dimensions determine project viability before significant investment."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Elicitation techniques must be selected based on project context — interviews for deep understanding, surveys for broad validation, observation for implicit knowledge, workshops for consensus, and prototyping for vague requirements. Good user stories follow the INVEST criteria and are testable through Gherkin acceptance scenarios. The MoSCoW prioritisation framework and Kano model help separate essential features from nice-to-haves and understand how features impact customer satisfaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Requirements validation through automated tools (SMART checks, consistency verification, FURPS+ classification) catches defects early when they are cheapest to fix. Traceability matrices link requirements to design, code, tests, and use cases, enabling impact analysis when changes occur. Change control processes with formal review boards ensure that requirements evolution is managed rather than chaotic. The most successful projects invest heavily in the requirements phase, recognising that a 1% improvement in requirements quality can yield 10x returns in reduced rework downstream."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Invest in elicitation upfront"
        }), " — the cost of fixing a requirements error after deployment is 100x the cost during elicitation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use multiple elicitation techniques"
        }), " — interviews alone miss what stakeholders don't think to mention; combine with observation and prototyping"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write testable, SMART requirements"
        }), " — every requirement should be verifiable; \"user-friendly\" is not testable, but \"95th percentile task completion under 3 minutes\" is"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintain traceability from day one"
        }), " — when a requirement changes, you must immediately know which design, code, tests, and use cases are affected"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expect and plan for change"
        }), " — requirements will evolve; implement change control processes, versioning, and a CCB"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distinguish wants from needs"
        }), " — MoSCoW and Kano help separate essential from nice-to-have and understand satisfaction impact"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automate validation"
        }), " — use quality analyzers to catch vague terms, missing metrics, and inconsistencies before stakeholder reviews"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validate early, validate often"
        }), " — prototype, review, and write tests against requirements before implementation begins"]
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
            children: "Performance (1,000 transactions per second) is a non-functional requirement — a quality attribute."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In MoSCoW, 'W' stands for \"Won't have this time\" — explicitly excluded from current scope."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Observation reveals what users actually do, which differs from what they say in interviews."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The RTM links requirements to design, code, and tests, enabling impact analysis when changes occur."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic needs (threshold attributes) must be present; their absence causes dissatisfaction but presence doesn't delight."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: Which of the following is a non-functional requirement?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) \"The system shall allow users to search by author\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) \"The system shall process 1,000 transactions per second\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) \"The system shall send email notifications\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) \"The system shall support user registration\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: In MoSCoW prioritisation, what does the 'W' stand for?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Will do later"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Wishful thinking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Won't have this time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Waiting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: Which elicitation technique is most effective for discovering implicit requirements?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Surveys"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Observation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Document analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Interviews"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: What is the primary purpose of a requirements traceability matrix?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) To estimate project cost"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) To enable impact analysis when requirements change"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) To prioritise requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) To validate requirements with stakeholders"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: In the Kano model, features that cause dissatisfaction when absent but do not increase satisfaction when present are called:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Delighters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Performance needs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Basic needs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Indifferent features"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-requirements-classification-with-furps",
      children: "Exercise 1: Requirements Classification with FURPS+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click for solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Classify each of the following requirements using FURPS+:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "\"The system shall support 10,000 concurrent users with response time under 200ms\""
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "\"The help system shall include context-sensitive tooltips for every form field\""
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "\"The system shall recover from database failure within 30 seconds with zero data loss\""
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "\"The system shall support hot-deploy of configuration changes without restart\""
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "\"The system shall comply with GDPR data erasure requirements\""
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Performance — measurable metric (concurrent users, response time)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Usability — human factors, documentation, tooltips"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Reliability — recoverability, fault tolerance, data integrity"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Supportability — maintainability, configurability, hot-deploy"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "FURPS+ (legal/regulatory constraint) — compliance with external regulations"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-user-story-writing-with-invest",
      children: "Exercise 2: User Story Writing with INVEST"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click for solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Write 5 user stories for an online food delivery system that satisfy the INVEST criteria. Include Gherkin acceptance criteria for at least 2 stories."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution:"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Story 1 (Browse Restaurant Menu):"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "As a hungry customer\nI want to browse restaurant menus by cuisine type\nSo that I can find food I'm in the mood for\n\nScenario: Filter by cuisine\n  Given I am on the restaurant search page\n  When I select \"Italian\" cuisine filter\n  Then I should see only Italian restaurants\n  And each result shows restaurant name, rating, and delivery time\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Story 2 (Place Order):"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "As a hungry customer\nI want to place an order from a selected restaurant\nSo that food is delivered to my address\n\nScenario: Successful order placement\n  Given I have items in my cart\n  When I proceed to checkout\n  Then I should see order summary with itemised prices\n  And I should select payment method\n  And I should receive order confirmation with estimated delivery time\n"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story 3:"
        }), " As a restaurant owner, I want to update my menu items and prices in real-time so that customers always see current information."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story 4:"
        }), " As a delivery driver, I want to see a list of nearby orders so that I can choose deliveries efficiently."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story 5:"
        }), " As an admin, I want to view sales reports by restaurant, cuisine, and time period so that I can make business decisions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-moscow-and-kano-analysis",
      children: "Exercise 3: MoSCoW and Kano Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click for solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "For a ride-sharing app, classify these features using both MoSCoW and Kano:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Real-time GPS tracking of driver location"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "In-app chat with driver"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Ability to schedule rides 7 days in advance"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Dark mode theme"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Integration with airline loyalty programmes"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution:"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Feature"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "MoSCoW"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Kano"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Rationale"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "GPS tracking"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MUST"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Basic"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Expected by all users; absence causes anger"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "In-app chat"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SHOULD"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Performance"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Useful but not critical; better chat = higher satisfaction"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Schedule rides"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "COULD"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Performance"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Important for business users but not core"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Dark mode"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "COULD"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Excitement"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Unexpected but delightful when present"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Airline integration"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "WONT"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Indifferent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Niche feature for current release"
            })]
          })]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-requirements-traceability-matrix",
      children: "Exercise 4: Requirements Traceability Matrix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click for solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "You have 5 requirements REQ-001 to REQ-005. Create a traceability matrix linking each to source, design component, test case, and implementation file. Then perform an impact analysis for a change to REQ-003."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution:"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Req ID"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Source"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Design"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Test"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Implementation"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "REQ-001"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Interview #3"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "AuthController"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "TC-AUTH-001"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "auth.service.ts"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "REQ-002"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Survey Q12"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SearchController"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "TC-SEARCH-001"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "search.service.ts"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "REQ-003"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Workshop JAD-2"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "PaymentController"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "TC-PAY-001, TC-PAY-002"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "payment.service.ts"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "REQ-004"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Observation"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NotificationSvc"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "TC-NOTIF-001"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "notification.ts"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "REQ-005"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Document analysis"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ReportGenerator"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "TC-REPORT-001"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "reports.ts"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact analysis for REQ-003 change:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Affected design: PaymentController"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Affected tests: TC-PAY-001, TC-PAY-002"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Affected implementation: payment.service.ts"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Impact: High (payment processing is critical path)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-requirements-change-management-system",
      children: "Exercise 5: Requirements Change Management System"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click for solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Extend the RequirementsManager TypeScript class to support:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Versioned requirements with complete change history"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "A Change Control Board (CCB) approval workflow"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Automated impact assessment when a requirement changes"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution:"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "interface CCBEntry {\n  changeRequestId: string;\n  requirementId: string;\n  proposedChange: string;\n  reason: string;\n  impactAssessment: string;\n  status: 'submitted' | 'assessing' | 'approved' | 'rejected';\n  submittedBy: string;\n  submittedDate: Date;\n  reviewedBy?: string;\n  reviewDate?: Date;\n  comments?: string;\n}\n\nclass ChangeControlledManager extends RequirementsManager {\n  private ccbLog: CCBEntry[] = [];\n\n  public submitChangeRequest(\n    reqId: string,\n    proposedChange: string,\n    reason: string,\n    impactAssessment: string,\n    user: string\n  ): CCBEntry {\n    const req = this.getRequirement(reqId);\n    if (!req) throw new Error(`Requirement ${reqId} not found`);\n    const entry: CCBEntry = {\n      changeRequestId: `CR-${this.ccbLog.length + 1}`,\n      requirementId: reqId,\n      proposedChange,\n      reason,\n      impactAssessment,\n      status: 'submitted',\n      submittedBy: user,\n      submittedDate: new Date(),\n    };\n    this.ccbLog.push(entry);\n    return entry;\n  }\n\n  public reviewChangeRequest(crId: string, approved: boolean, reviewer: string, comments?: string): CCBEntry {\n    const entry = this.ccbLog.find(e => e.changeRequestId === crId);\n    if (!entry) throw new Error(`Change request ${crId} not found`);\n    entry.status = approved ? 'approved' : 'rejected';\n    entry.reviewedBy = reviewer;\n    entry.reviewDate = new Date();\n    entry.comments = comments;\n    return entry;\n  }\n\n  public getCCBPending(): CCBEntry[] {\n    return this.ccbLog.filter(e => e.status === 'submitted' || e.status === 'assessing');\n  }\n\n  public getCCBHistory(): CCBEntry[] {\n    return [...this.ccbLog];\n  }\n\n  public getRequirementEvolution(reqId: string): { requirement: Requirement | undefined; history: ChangeLogEntry[] } {\n    return {\n      requirement: this.getRequirement(reqId),\n      history: this.getChangeHistory(reqId),\n    };\n  }\n}\n"
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