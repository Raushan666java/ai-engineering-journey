"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[14560],{

/***/ 41575
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_software_engineering_09_quality_management_md_f2f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-software-engineering-09-quality-management-md-f2f.json
const site_docs_courses_software_engineering_09_quality_management_md_f2f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/software-engineering/09-quality-management","title":"Software Quality Management","description":"Learning Objectives","source":"@site/docs/courses/software-engineering/09-quality-management.md","sourceDirName":"courses/software-engineering","slug":"/software-engineering/09-quality-management","permalink":"/ai-engineering-journey/software-engineering/09-quality-management","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"id":"09-quality-management","slug":"/software-engineering/09-quality-management","title":"Software Quality Management","sidebar_label":"Software Quality Management","sidebar_position":9},"sidebar":"coursesSidebar","previous":{"title":"Project Management","permalink":"/ai-engineering-journey/software-engineering/08-project-management"},"next":{"title":"Configuration Management","permalink":"/ai-engineering-journey/software-engineering/10-configuration-management"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/software-engineering/09-quality-management.md


const frontMatter = {
	id: '09-quality-management',
	slug: '/software-engineering/09-quality-management',
	title: 'Software Quality Management',
	sidebar_label: 'Software Quality Management',
	sidebar_position: 9
};
const contentTitle = 'Software Quality Management';

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
  "value": "What is Software Quality?",
  "id": "what-is-software-quality",
  "level": 3
}, {
  "value": "The Three Components of Quality Management",
  "id": "the-three-components-of-quality-management",
  "level": 3
}, {
  "value": "Quality Models Comparison",
  "id": "quality-models-comparison",
  "level": 3
}, {
  "value": "Quality Standards and Models",
  "id": "quality-standards-and-models",
  "level": 3
}, {
  "value": "ISO 9001",
  "id": "iso-9001",
  "level": 4
}, {
  "value": "CMMI (Capability Maturity Model Integration)",
  "id": "cmmi-capability-maturity-model-integration",
  "level": 4
}, {
  "value": "Six Sigma for Software",
  "id": "six-sigma-for-software",
  "level": 4
}, {
  "value": "ISO/IEC 25010 Quality Model",
  "id": "isoiec-25010-quality-model",
  "level": 4
}, {
  "value": "Quality Assurance vs Quality Control",
  "id": "quality-assurance-vs-quality-control",
  "level": 3
}, {
  "value": "Quality Reviews: Inspections and Walkthroughs",
  "id": "quality-reviews-inspections-and-walkthroughs",
  "level": 3
}, {
  "value": "Fagan Inspections",
  "id": "fagan-inspections",
  "level": 4
}, {
  "value": "Walkthroughs vs Inspections",
  "id": "walkthroughs-vs-inspections",
  "level": 4
}, {
  "value": "Peer Review vs Code Review",
  "id": "peer-review-vs-code-review",
  "level": 4
}, {
  "value": "Static Analysis",
  "id": "static-analysis",
  "level": 3
}, {
  "value": "Statistical Process Control (SPC)",
  "id": "statistical-process-control-spc",
  "level": 3
}, {
  "value": "Process Quality Frameworks",
  "id": "process-quality-frameworks",
  "level": 3
}, {
  "value": "CMMI Detailed Process Areas by Level",
  "id": "cmmi-detailed-process-areas-by-level",
  "level": 4
}, {
  "value": "Quality Metrics Framework",
  "id": "quality-metrics-framework",
  "level": 3
}, {
  "value": "Quality Gates in CI/CD",
  "id": "quality-gates-in-cicd",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: QualityMetricsCollector — Defect Density, MTBF, Reliability",
  "id": "example-1-qualitymetricscollector--defect-density-mtbf-reliability",
  "level": 3
}, {
  "value": "Example 2: ISO25010Evaluator — Evaluate Against Each Quality Characteristic",
  "id": "example-2-iso25010evaluator--evaluate-against-each-quality-characteristic",
  "level": 3
}, {
  "value": "Example 3: FaganInspection — Inspection Process with Defect Logging and Tracking",
  "id": "example-3-faganinspection--inspection-process-with-defect-logging-and-tracking",
  "level": 3
}, {
  "value": "Example 4: Quality Metric Collector — Cyclomatic Complexity, Coverage, Gates",
  "id": "example-4-quality-metric-collector--cyclomatic-complexity-coverage-gates",
  "level": 3
}, {
  "value": "Example 5: Quality Metrics Dashboard",
  "id": "example-5-quality-metrics-dashboard",
  "level": 3
}, {
  "value": "Example 6: Cyclomatic Complexity Calculator",
  "id": "example-6-cyclomatic-complexity-calculator",
  "level": 3
}, {
  "value": "Example 7: Defect Density Analyzer",
  "id": "example-7-defect-density-analyzer",
  "level": 3
}, {
  "value": "Real-World Case Studies",
  "id": "real-world-case-studies",
  "level": 3
}, {
  "value": "Additional Mermaid Diagrams",
  "id": "additional-mermaid-diagrams",
  "level": 3
}, {
  "value": "TypeScript: Quality Management Tools",
  "id": "typescript-quality-management-tools",
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
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    b: "b",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    img: "img",
    input: "input",
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
        id: "software-quality-management",
        children: "Software Quality Management"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Explain the three components of software quality management"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Apply quality standards (ISO 9001, CMMI, ISO 25010) to software projects"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Differentiate between software quality assurance (QA) and quality control (QC)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Use quality review techniques including inspections and walkthroughs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Implement static analysis metrics and tools in TypeScript"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Apply statistical process control to software quality"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Measure quality using ISO 25010 characteristics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Build production-grade quality metric collection and evaluation tools"]
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
        href: "../../assets/images/lessons/software-engineering/09-quality-management/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/software-engineering/09-quality-management/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/software-engineering/09-quality-management/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/software-engineering/09-quality-management/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/software-engineering/09-quality-management/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/software-engineering/09-quality-management/visual-explanation.png",
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
      id: "what-is-software-quality",
      children: "What is Software Quality?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Software quality is the degree to which a software product satisfies stated and implied needs. Quality is not merely the absence of defects — it encompasses the entire user experience, maintainability, performance, and security. Quality must be designed into the product from the start, not inspected in at the end."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Quality Management System\"\n        QP[Quality Planning] --> QA[Quality Assurance]\n        QA --> QC[Quality Control]\n        QC --> QM[Quality Management]\n    end\n    \n    QP --> |Define| STANDARDS[Standards & Procedures]\n    QA --> |Process Compliance| AUDITS[Process Audits]\n    QC --> |Product Verification| TEST[Testing & Reviews]\n    QM --> |Continuous Improvement| FEEDBACK[Feedback Loops]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-three-components-of-quality-management",
      children: "The Three Components of Quality Management"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Focus"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Activities"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Verifies"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Quality Planning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Future quality activities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define standards, set quality goals, identify processes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plans"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Quality Assurance (QA)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audits, process checks, training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Processes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Quality Control (QC)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reviews, testing, static analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Products"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quality-models-comparison",
      children: "Quality Models Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Several quality models have been proposed over the decades. Each takes a different perspective on what constitutes software quality:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Year"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Characteristics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strengths"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Weaknesses"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "McCall"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1977"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11 factors across 3 perspectives (product revision, transition, operations)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pioneering, user-focused"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dated, overlaps between factors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Boehm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1978"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15 characteristics in hierarchical tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Links to user needs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex, rarely used today"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ISO 9126"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1991"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 characteristics, 27 sub-characteristics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "International standard, broad adoption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confusing sub-characteristic definitions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ISO 25010"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 characteristics, 31 sub-characteristics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current standard, security included"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited coverage of data quality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FURPS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1987"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functionality, Usability, Reliability, Performance, Supportability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple mnemonic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lacks security explicitly"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "McCall's Quality Model (1977):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "McCall organized quality into three perspectives:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Product Revision"
        }), " (ability to change): Maintainability, Flexibility, Testability"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Product Transition"
        }), " (ability to adapt to new environments): Portability, Reusability, Interoperability"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Product Operations"
        }), " (ability to run): Correctness, Reliability, Efficiency, Integrity, Usability"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Boehm's Quality Model (1978):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Boehm presented a hierarchical model rooted in user needs:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "As-is Utility:"
        }), " Portability, Reliability, Efficiency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintainability:"
        }), " Testability, Understandability, Modifiability"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "General Utility:"
        }), " Clarity, Documented, Device Independence, Self-contained, Accuracy, Completeness, Consistency, Accountability"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "FURPS+ Model (Rational/IBM):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FURPS+ extends the basic FURPS categories with a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), " for design constraints:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F"
        }), "unctionality: Feature set, security, capabilities"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "U"
        }), "sability: Aesthetics, documentation, training"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "R"
        }), "eliability: Frequency/severity of failure, recoverability, predictability"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "P"
        }), "erformance: Speed, efficiency, resource consumption, scalability"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "S"
        }), "upportability: Testability, maintainability, configurability, compatibility"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quality-standards-and-models",
      children: "Quality Standards and Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "iso-9001",
      children: "ISO 9001"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ISO 9001 is a general quality management standard applicable to any organisation. Key principles relevant to software:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Customer focus:"
        }), " Understanding customer needs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Leadership:"
        }), " Establishing quality vision"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Engagement of people:"
        }), " Involving all team members"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Process approach:"
        }), " Managing activities as processes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Improvement:"
        }), " Continuous improvement focus"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Evidence-based decision making:"
        }), " Data-driven quality"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Relationship management:"
        }), " Managing supplier relationships"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ISO 9001:2015 uses the PDCA (Plan-Do-Check-Act) cycle and is process-based. Software organisations typically pair ISO 9001 with ISO 25010 for product quality and ISO 12207 for lifecycle processes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cmmi-capability-maturity-model-integration",
      children: "CMMI (Capability Maturity Model Integration)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    L1[Level 1: Initial] --> L2[Level 2: Managed]\n    L2 --> L3[Level 3: Defined]\n    L3 --> L4[Level 4: Quantitatively Managed]\n    L4 --> L5[Level 5: Optimising]\n    \n    classDef l1 fill:#ff6b6b,color:#fff\n    classDef l2 fill:#ffa726,color:#fff\n    classDef l3 fill:#ffd54f,color:#000\n    classDef l4 fill:#66bb6a,color:#fff\n    classDef l5 fill:#2196f3,color:#fff\n    \n    class L1 l1\n    class L2 l2\n    class L3 l3\n    class L4 l4\n    class L5 l5\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Characteristics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Process Areas"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Processes unpredictable, ad hoc, reactive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project-level processes, basic project management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requirements Management, Project Planning, Project Monitoring, Supplier Agreement Management, Measurement & Analysis, Process & Product Quality Assurance, Configuration Management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Organisation-wide standard processes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requirements Development, Technical Solution, Product Integration, Verification, Validation, Organisational Process Focus, Organisational Process Definition, Organisational Training, Integrated Project Management, Risk Management, Decision Analysis & Resolution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantitatively Managed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process measured and controlled statistically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Organisational Process Performance, Quantitative Project Management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimising"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous process improvement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Organisational Performance Management, Causal Analysis & Resolution"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "six-sigma-for-software",
      children: "Six Sigma for Software"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Six Sigma is a data-driven methodology for eliminating defects. Applied to software:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DMAIC:"
        }), " Define, Measure, Analyze, Improve, Control"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Defect target:"
        }), " 3.4 defects per million opportunities (DPMO)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key roles:"
        }), " Champions, Master Black Belts, Black Belts, Green Belts"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Software adapts Six Sigma by treating KLOC, function points, or story points as \"opportunities\":"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DPMO = (Number of Defects / (Opportunities per Unit × Number of Units)) × 1,000,000\nSigma Level = NORMSINV(1 - DPMO/1,000,000) + 1.5\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Sigma Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DPMO"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost of Quality (% of sales)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2σ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "308,537"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-40%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3σ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "66,807"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20-30%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4σ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6,210"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15-20%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5σ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "233"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10-15%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6σ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<10%"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "isoiec-25010-quality-model",
      children: "ISO/IEC 25010 Quality Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ISO 25010 (replacing ISO 9126) defines eight quality characteristics:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    SW[Software Product Quality] --> FSU[Functional Suitability]\n    SW --> REL[Reliability]\n    SW --> PER[Performance Efficiency]\n    SW --> OPE[Operability]\n    SW --> SEC[Security]\n    SW --> COM[Compatibility]\n    SW --> MAI[Maintainability]\n    SW --> POR[Portability]\n    \n    FSU --> FS1[Functional Completeness]\n    FSU --> FS2[Functional Correctness]\n    FSU --> FS3[Functional Appropriateness]\n    \n    REL --> RE1[Maturity]\n    REL --> RE2[Availability]\n    REL --> RE3[Fault Tolerance]\n    REL --> RE4[Recoverability]\n    \n    MAI --> MA1[Modularity]\n    MAI --> MA2[Reusability]\n    MAI --> MA3[Analysability]\n    MAI --> MA4[Modifiability]\n    MAI --> MA5[Testability]\n    \n    classDef cat fill:#e1f5fe,stroke:#0288d1\n    classDef sub fill:#fff3e0,stroke:#f57c00\n    \n    class FSU,REL,PER,OPE,SEC,COM,MAI,POR cat\n    class FS1,FS2,FS3,RE1,RE2,RE3,RE4,MA1,MA2,MA3,MA4,MA5 sub\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quality-assurance-vs-quality-control",
      children: "Quality Assurance vs Quality Control"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Quality Assurance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Quality Control"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Orientation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process-oriented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product-oriented"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Timing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevention (before)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detection (during/after)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Focus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How work is done"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is produced"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Activities"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audits, training, process definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Testing, inspections, reviews"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Goal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevent defects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find defects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entire development lifecycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specific deliverables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Who"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All team members (process owners)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Testers, reviewers, QA analysts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Measurement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process compliance %"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defect density, test pass rate"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quality-reviews-inspections-and-walkthroughs",
      children: "Quality Reviews: Inspections and Walkthroughs"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "fagan-inspections",
      children: "Fagan Inspections"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A structured, formal review process developed by Michael Fagan at IBM. Fagan discovered that inspections catch 60-70% of defects before testing, where the cost of fixing is 10-100x lower."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant MOD as Moderator\n    participant AUTH as Author\n    participant REV as Reviewers\n    participant REC as Recorder\n    \n    MOD->>AUTH: 1. Planning - select material, schedule\n    AUTH->>REV: 2. Overview - introduce material\n    REV->>REV: 3. Preparation - individual review\n    MOD->>REV: 4. Inspection Meeting - systematic defect detection\n    MOD->>REC: Log defects\n    AUTH->>AUTH: 5. Rework - fix defects\n    MOD->>AUTH: 6. Follow-up - verify fixes\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Activities"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Participants"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Planning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Select material, schedule, assign roles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overview"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Author introduces the material"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All reviewers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Preparation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Individual review of material"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All reviewers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inspection Meeting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Systematic defect detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All participants"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rework"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fix defects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Author"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Follow-up"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify fixes are correct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderator"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Inspection Roles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Moderator:"
        }), " Leads the inspection, ensures process compliance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Author:"
        }), " Creator of the work product"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reviewers:"
        }), " Domain experts who examine the product"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recorder:"
        }), " Documents defects and decisions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Inspection metrics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Defect detection rate:"
        }), " % of total defects found during inspection"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Preparation rate:"
        }), " Pages/SLOC inspected per hour (target: 100-200 SLOC/h)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Defect density:"
        }), " Defects per page or per KLOC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inspection yield:"
        }), " % of defects found before vs after inspection"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cost per defect:"
        }), " Total inspection effort / defects found"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "walkthroughs-vs-inspections",
      children: "Walkthroughs vs Inspections"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Walkthrough"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inspection"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Formality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Informal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Preparation time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Significant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data collection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detailed defect data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Meeting length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Longer (presentation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shorter (focused)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Education, consensus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defect detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Defect detection rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (~20%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (~70%)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Roles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not predefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strictly defined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Documentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required - defect log, report"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "peer-review-vs-code-review",
      children: "Peer Review vs Code Review"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Peer Review"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formal Code Review"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "When"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before merge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15-30 min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-60 min"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tooling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required (GitHub PR, Gerrit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Surface level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep, every line"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Checklist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standardized"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "static-analysis",
      children: "Static Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Static analysis examines source code without executing it. Modern tools detect bug patterns, security vulnerabilities, style violations, and maintainability issues."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Types of static analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Checks"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Tools"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code formatting, naming conventions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ESLint, Prettier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bug patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Null pointers, type mismatches, dead code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TypeScript compiler, SonarQube"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Injection, XSS, hardcoded secrets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CodeQL, Semgrep"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cyclomatic complexity, depth of inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SonarQube, Plato"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duplication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy-paste detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PMD-CPD, jscpd"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cyclomatic Complexity:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "M = E - N + 2P"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where E = number of edges, N = number of nodes, P = number of connected components in the control flow graph."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Cyclomatic Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Risk Assessment"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1-10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, low risk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11-20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "21-50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High risk, difficult to test"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "50+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Untestable, must refactor"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "statistical-process-control-spc",
      children: "Statistical Process Control (SPC)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SPC uses statistical methods to monitor and control process quality. In software, it is applied to defect rates, test pass rates, and cycle times."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key SPC concepts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Control limits:"
        }), " Upper (UCL) and lower (LCL) boundaries for acceptable variation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Common cause variation:"
        }), " Natural process variation (expected)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Special cause variation:"
        }), " Unusual events requiring investigation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Defect density:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Defects per KLOC"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Defects per FP"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    subgraph \"Control Chart\"\n        UCL[Upper Control Limit] ---\n        MEAN[Mean] ---\n        LCL[Lower Control Limit]\n    end\n    DATA[Data Points] --> PLOT[Plot on Chart]\n    PLOT --> CHECK{Within Limits?}\n    CHECK -->|Yes| COMMON[Common Cause - Process Stable]\n    CHECK -->|No| SPECIAL[Special Cause - Investigate]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Control limit formulas:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UCL = μ + 3σ"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LCL = μ - 3σ"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mean (μ) = average of sample means"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sigma (σ) = standard deviation of sample means"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Control chart rules for special causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One point beyond ±3σ"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two of three points beyond ±2σ (same side)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Four of five points beyond ±1σ (same side)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eight consecutive points on one side of the mean"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Six consecutive points trending up or down"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process-quality-frameworks",
      children: "Process Quality Frameworks"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cmmi-detailed-process-areas-by-level",
      children: "CMMI Detailed Process Areas by Level"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "PA ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Process Area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REQM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requirements Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project Management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project Planning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project Management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PMC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project Monitoring & Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project Management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supplier Agreement Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project Management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measurement & Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PPQA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process & Product Quality Assurance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requirements Development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Engineering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Technical Solution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Engineering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product Integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Engineering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Engineering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Engineering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Organisational Process Focus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process Management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Organisational Process Definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process Management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Organisational Training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process Management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IPM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrated Project Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project Management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSKM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project Management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decision Analysis & Resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Organisational Process Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process Management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QPM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantitative Project Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project Management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Organisational Performance Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process Management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Causal Analysis & Resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Support"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quality-metrics-framework",
      children: "Quality Metrics Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A comprehensive quality measurement program should span multiple dimensions:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Metrics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Collection Frequency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Target"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Defect Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defect density, defect arrival rate, defect closure rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per build"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<5 defects/KLOC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Test Effectiveness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code coverage, test pass rate, mutation score"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per CI run"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ">80% coverage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code Health"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cyclomatic complexity, duplication %, maintainability index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per commit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<15 complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Velocity stability, cycle time, lead time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per sprint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<10% variance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Customer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer satisfaction (CSAT), Net Promoter Score (NPS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per release"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSAT > 4.0/5.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Operational"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mean time to recover (MTTR), mean time between failures (MTBF)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per incident"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MTTR < 1h, MTBF > 30d"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quality-gates-in-cicd",
      children: "Quality Gates in CI/CD"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"CI Pipeline Quality Gates\"\n        direction LR\n        GATE1[Gate 1: Lint] -->|Pass| GATE2[Gate 2: Unit Tests]\n        GATE2 -->|Pass| GATE3[Gate 3: Code Coverage]\n        GATE3 -->|Pass| GATE4[Gate 4: Security Scan]\n        GATE4 -->|Pass| GATE5[Gate 5: Build]\n        GATE5 -->|Pass| GATE6[Gate 6: Integration Tests]\n        GATE6 -->|Pass| GATE7[Gate 7: Performance]\n    end\n    \n    GATE1 -->|Fail| BLOCK1[❌ Fix Lint Issues]\n    GATE2 -->|Fail| BLOCK2[❌ Fix Broken Tests]\n    GATE3 -->|Fail| BLOCK3[❌ Improve Coverage]\n    GATE4 -->|Fail| BLOCK4[❌ Fix Vulnerabilities]\n    GATE7 -->|Fail| BLOCK5[❌ Optimize Performance]\n    \n    classDef gate fill:#4caf50,color:#fff\n    classDef block fill:#f44336,color:#fff\n    classDef pass fill:#81c784\n    \n    class GATE1,GATE2,GATE3,GATE4,GATE5,GATE6,GATE7 gate\n    class BLOCK1,BLOCK2,BLOCK3,BLOCK4,BLOCK5 block\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-qualitymetricscollector--defect-density-mtbf-reliability",
      children: "Example 1: QualityMetricsCollector — Defect Density, MTBF, Reliability"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This production-grade quality metrics collector computes defect density, mean time between failures (MTBF), and system reliability using exponential distribution models commonly used in reliability engineering."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface DefectRecord {\n  id: string;\n  module: string;\n  severity: 'blocker' | 'critical' | 'major' | 'minor' | 'trivial';\n  openedAt: Date;\n  closedAt?: Date;\n  introducedByRelease: string;\n  foundInRelease: string;\n  hoursToFix: number;\n}\n\ninterface FailureEvent {\n  timestamp: Date;\n  service: string;\n  durationMinutes: number;\n  affectedUsers: number;\n  rootCause: string;\n}\n\ninterface QualityMetricsReport {\n  defectDensity: { overall: number; perModule: Record<string, number>; perSeverity: Record<string, number> };\n  reliability: { mtbf: number; mttr: number; availability: number };\n  trend: { direction: 'improving' | 'declining' | 'stable'; changePercent: number };\n  recommendations: string[];\n}\n\nclass QualityMetricsCollector {\n  private defects: DefectRecord[] = [];\n  private failures: FailureEvent[] = [];\n\n  public recordDefect(defect: DefectRecord): void {\n    this.defects.push(defect);\n  }\n\n  public recordFailure(failure: FailureEvent): void {\n    this.failures.push(failure);\n  }\n\n  public analyze(defects: DefectRecord[], failures: FailureEvent[], totalKsloc: number): QualityMetricsReport {\n    const perModule: Record<string, number> = {};\n    const perSeverity: Record<string, number> = {};\n\n    for (const d of defects) {\n      perModule[d.module] = (perModule[d.module] || 0) + 1;\n      perSeverity[d.severity] = (perSeverity[d.severity] || 0) + 1;\n    }\n\n    const overallDefectDensity = totalKsloc > 0 ? defects.length / totalKsloc : 0;\n    const moduleDensities: Record<string, number> = {};\n    // In practice module KLOC data would come from AST analysis\n    for (const [mod, count] of Object.entries(perModule)) {\n      moduleDensities[mod] = count;\n    }\n\n    // MTBF: Mean Time Between Failures (in hours)\n    let mtbf = 0;\n    if (failures.length >= 2) {\n      const sorted = [...failures].sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());\n      let totalInterval = 0;\n      for (let i = 1; i < sorted.length; i++) {\n        totalInterval += sorted[i].timestamp.getTime() - sorted[i - 1].timestamp.getTime();\n      }\n      mtbf = totalInterval / (sorted.length - 1) / 3600000;\n    }\n\n    // MTTR: Mean Time To Recover (in hours)\n    const mttr = failures.length > 0\n      ? failures.reduce((s, f) => s + f.durationMinutes, 0) / failures.length / 60\n      : 0;\n\n    // Availability = MTBF / (MTBF + MTTR)\n    const availability = mtbf + mttr > 0 ? mtbf / (mtbf + mttr) : 0;\n\n    // Trend analysis (compare last 30 days vs previous 30 days)\n    const now = Date.now();\n    const recentDefects = defects.filter(d => d.openedAt.getTime() > now - 30 * 86400000);\n    const olderDefects = defects.filter(d =>\n      d.openedAt.getTime() <= now - 30 * 86400000 &&\n      d.openedAt.getTime() > now - 60 * 86400000\n    );\n    const recentKsloc = totalKsloc * 0.5; // approximate\n    const olderKsloc = totalKsloc * 0.5;\n    const recentDensity = recentKsloc > 0 ? recentDefects.length / recentKsloc : 0;\n    const olderDensity = olderKsloc > 0 ? olderDefects.length / olderKsloc : 0;\n    const changePercent = olderDensity > 0 ? ((recentDensity - olderDensity) / olderDensity) * 100 : 0;\n    const direction = changePercent < -10 ? 'improving' : changePercent > 10 ? 'declining' : 'stable';\n\n    const recommendations: string[] = [];\n    if (overallDefectDensity > 5) recommendations.push('Defect density exceeds 5/KLOC — invest in root cause analysis');\n    if (mtbf < 24) recommendations.push('MTBF under 24 hours — critical reliability risk, implement chaos engineering');\n    if (mttr > 2) recommendations.push('MTTR over 2 hours — improve runbooks and automate recovery');\n    if (availability < 0.99) recommendations.push('Availability below 99% — review SLAs and implement redundancy');\n    if (direction === 'declining') recommendations.push('Quality trend is declining — consider process changes and training');\n\n    return {\n      defectDensity: { overall: overallDefectDensity, perModule: moduleDensities, perSeverity },\n      reliability: { mtbf: Math.round(mtbf * 100) / 100, mttr: Math.round(mttr * 100) / 100, availability: Math.round(availability * 10000) / 10000 },\n      trend: { direction, changePercent: Math.round(changePercent * 100) / 100 },\n      recommendations,\n    };\n  }\n\n  public compareModules(moduleA: string, moduleB: string): string {\n    const aDefects = this.defects.filter(d => d.module === moduleA);\n    const bDefects = this.defects.filter(d => d.module === moduleB);\n    const aCritical = aDefects.filter(d => d.severity === 'critical' || d.severity === 'blocker').length;\n    const bCritical = bDefects.filter(d => d.severity === 'critical' || d.severity === 'blocker').length;\n    return [\n      `=== Module Quality Comparison: ${moduleA} vs ${moduleB} ===`,\n      `${moduleA}: ${aDefects.length} defects (${aCritical} critical)`,\n      `${moduleB}: ${bDefects.length} defects (${bCritical} critical)`,\n      `Difference: ${Math.abs(aDefects.length - bDefects.length)} defects`,\n      aDefects.length > bDefects.length\n        ? `Recommendation: Focus QA efforts on ${moduleA}`\n        : `Recommendation: Focus QA efforts on ${moduleB}`,\n    ].join('\\n');\n  }\n}\n\n// Usage\nconst collector = new QualityMetricsCollector();\ncollector.recordDefect({\n  id: 'DEF-001', module: 'auth', severity: 'critical',\n  openedAt: new Date('2025-01-10'), introducedByRelease: 'v2.0', foundInRelease: 'v2.0', hoursToFix: 8,\n});\ncollector.recordFailure({\n  timestamp: new Date('2025-01-15'), service: 'auth-api',\n  durationMinutes: 45, affectedUsers: 1200, rootCause: 'Connection pool exhaustion',\n});\nconst report = collector.analyze(\n  [/* defects */], [/* failures */], 50\n);\nconsole.log(report.reliability);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-iso25010evaluator--evaluate-against-each-quality-characteristic",
      children: "Example 2: ISO25010Evaluator — Evaluate Against Each Quality Characteristic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This evaluator scores a software product against each of the eight ISO 25010 quality characteristics, aggregating sub-characteristic scores into a weighted quality index."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Characteristic =\n  | 'functional_suitability'\n  | 'reliability'\n  | 'performance_efficiency'\n  | 'operability'\n  | 'security'\n  | 'compatibility'\n  | 'maintainability'\n  | 'portability';\n\ninterface SubCharacteristic {\n  name: string;\n  score: number; // 0-100\n  weight: number; // 0-1, sum of sub-weights per characteristic = 1\n  evidence: string;\n}\n\ninterface CharacteristicScore {\n  characteristic: Characteristic;\n  name: string;\n  score: number;\n  subCharacteristics: SubCharacteristic[];\n  failsMinimum: boolean;\n}\n\ninterface ISO25010Evaluation {\n  scores: CharacteristicScore[];\n  overallIndex: number;\n  weakestAreas: string[];\n  strongestAreas: string[];\n  certificationReadiness: 'ready' | 'near' | 'far';\n}\n\nclass ISO25010Evaluator {\n  private readonly minimumThreshold = 50;\n  private readonly passingThreshold = 70;\n\n  public evaluate(data: Record<Characteristic, SubCharacteristic[]>): ISO25010Evaluation {\n    const scores: CharacteristicScore[] = [];\n    const allWeak: string[] = [];\n    const allStrong: string[] = [];\n    let weightedSum = 0;\n    let totalWeight = 0;\n\n    for (const [characteristic, subs] of Object.entries(data) as [Characteristic, SubCharacteristic[]][]) {\n      const subSum = subs.reduce((s, sub) => s + sub.score * sub.weight, 0);\n      const subWeight = subs.reduce((s, sub) => s + sub.weight, 0);\n      const characteristicScore = subWeight > 0 ? subSum / subWeight : 0;\n      const failsMinimum = subs.some(sub => sub.score < this.minimumThreshold * 0.5);\n\n      const charName = characteristic.replace(/_/g, ' ').replace(/\\b\\w/g, l => l.toUpperCase());\n      scores.push({\n        characteristic,\n        name: charName,\n        score: Math.round(characteristicScore * 100) / 100,\n        subCharacteristics: subs,\n        failsMinimum,\n      });\n\n      if (characteristicScore < this.passingThreshold) {\n        allWeak.push(charName);\n      } else {\n        allStrong.push(charName);\n      }\n\n      weightedSum += characteristicScore * subWeight;\n      totalWeight += subWeight;\n    }\n\n    const overallIndex = totalWeight > 0 ? Math.round((weightedSum / totalWeight) * 100) / 100 : 0;\n\n    const worst = [...scores].sort((a, b) => a.score - b.score).slice(0, 3);\n    const best = [...scores].sort((a, b) => b.score - a.score).slice(0, 3);\n\n    const readiness = overallIndex >= 85 ? 'ready' : overallIndex >= 60 ? 'near' : 'far';\n\n    return {\n      scores,\n      overallIndex,\n      weakestAreas: worst.map(s => s.name),\n      strongestAreas: best.map(s => s.name),\n      certificationReadiness: readiness,\n    };\n  }\n\n  public generateCertificationReport(evaluation: ISO25010Evaluation): string {\n    const scoreBar = (score: number) => {\n      const filled = Math.round(score / 10);\n      return '█'.repeat(filled) + '░'.repeat(10 - filled);\n    };\n\n    const lines = [\n      '═══════════════════════════════════════════',\n      '  ISO 25010 Quality Evaluation Report',\n      '═══════════════════════════════════════════',\n      '',\n      `  Overall Quality Index: ${evaluation.overallIndex}/100`,\n      `  Certification Readiness: ${evaluation.certificationReadiness.toUpperCase()}`,\n      '',\n      '  ─── Characteristic Scores ───',\n      ...evaluation.scores.map(s =>\n        `    ${s.name.padEnd(28)} ${scoreBar(s.score)} ${s.score.toFixed(1)}${s.failsMinimum ? ' ⚠' : ''}`\n      ),\n      '',\n      `  ✅ Strongest: ${evaluation.strongestAreas.join(', ')}`,\n      `  ⚠  Weakest: ${evaluation.weakestAreas.join(', ')}`,\n      '',\n      '  Recommendations:',\n      ...evaluation.weakestAreas.map(a => `    - Improve ${a}`),\n    ];\n    return lines.join('\\n');\n  }\n}\n\n// Usage\nconst evaluator = new ISO25010Evaluator();\nconst data: Record<Characteristic, SubCharacteristic[]> = {\n  functional_suitability: [\n    { name: 'Functional Completeness', score: 85, weight: 0.4, evidence: 'All user stories implemented' },\n    { name: 'Functional Correctness', score: 92, weight: 0.4, evidence: 'Zero critical bugs' },\n    { name: 'Functional Appropriateness', score: 70, weight: 0.2, evidence: 'Some unused features' },\n  ],\n  reliability: [\n    { name: 'Maturity', score: 78, weight: 0.3, evidence: 'MTBF of 720 hours' },\n    { name: 'Availability', score: 95, weight: 0.3, evidence: '99.99% uptime' },\n    { name: 'Fault Tolerance', score: 60, weight: 0.2, evidence: 'No redundancy on DB' },\n    { name: 'Recoverability', score: 45, weight: 0.2, evidence: 'RTO > 4 hours' },\n  ],\n  performance_efficiency: [\n    { name: 'Time Behaviour', score: 88, weight: 0.5, evidence: 'p95 < 200ms' },\n    { name: 'Resource Utilisation', score: 75, weight: 0.3, evidence: 'Memory under 512MB' },\n    { name: 'Capacity', score: 82, weight: 0.2, evidence: 'Supports 10K concurrent' },\n  ],\n  operability: [\n    { name: 'Appropriateness Recognisability', score: 80, weight: 0.25, evidence: 'UX tested' },\n    { name: 'Learnability', score: 85, weight: 0.25, evidence: '< 30 min to onboard' },\n    { name: 'User Error Protection', score: 72, weight: 0.25, evidence: 'Input validation' },\n    { name: 'Accessibility', score: 65, weight: 0.25, evidence: 'WCAG AA partial' },\n  ],\n  security: [\n    { name: 'Confidentiality', score: 90, weight: 0.3, evidence: 'Encryption at rest/tran' },\n    { name: 'Integrity', score: 88, weight: 0.3, evidence: 'Checksum verification' },\n    { name: 'Non-Repudiation', score: 75, weight: 0.2, evidence: 'Audit logging' },\n    { name: 'Accountability', score: 85, weight: 0.2, evidence: 'Access control' },\n  ],\n  compatibility: [\n    { name: 'Co-existence', score: 80, weight: 0.5, evidence: 'Runs alongside v1' },\n    { name: 'Interoperability', score: 85, weight: 0.5, evidence: 'REST API standard' },\n  ],\n  maintainability: [\n    { name: 'Modularity', score: 70, weight: 0.2, evidence: 'Coupling metric moderate' },\n    { name: 'Reusability', score: 65, weight: 0.2, evidence: 'Shared libs exist' },\n    { name: 'Analysability', score: 60, weight: 0.2, evidence: 'Logging sparse' },\n    { name: 'Modifiability', score: 75, weight: 0.2, evidence: 'Feature toggle system' },\n    { name: 'Testability', score: 50, weight: 0.2, evidence: 'Coverage at 62%' },\n  ],\n  portability: [\n    { name: 'Adaptability', score: 85, weight: 0.3, evidence: 'Config per env' },\n    { name: 'Installability', score: 90, weight: 0.3, evidence: 'One-command deploy' },\n    { name: 'Replaceability', score: 60, weight: 0.4, evidence: 'Tight coupling to DB' },\n  ],\n};\nconst evalResult = evaluator.evaluate(data);\nconsole.log(evaluator.generateCertificationReport(evalResult));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-faganinspection--inspection-process-with-defect-logging-and-tracking",
      children: "Example 3: FaganInspection — Inspection Process with Defect Logging and Tracking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A full Fagan inspection implementation with role management, defect logging, phase tracking, and productivity metrics."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type InspectionPhase = 'planning' | 'overview' | 'preparation' | 'meeting' | 'rework' | 'followup';\ntype DefectSeverity = 'critical' | 'major' | 'minor' | 'cosmetic';\ntype DefectClass = 'logic' | 'interface' | 'data' | 'documentation' | 'standards' | 'performance';\n\ninterface Inspector {\n  name: string;\n  role: 'moderator' | 'author' | 'reviewer' | 'recorder';\n  hoursSpent: number;\n}\n\ninterface InspectionDefect {\n  id: string;\n  phaseFound: InspectionPhase;\n  description: string;\n  location: string;\n  severity: DefectSeverity;\n  defectClass: DefectClass;\n  finder: string;\n  status: 'open' | 'rework_complete' | 'verified' | 'deferred';\n  fixVerificationDate?: Date;\n  notes: string[];\n}\n\ninterface InspectionMetrics {\n  totalDefects: number;\n  defectDensity: number;\n  detectionRate: number;\n  preparationRate: number;\n  meetingEfficiency: number;\n  costPerDefect: number;\n  yield: number;\n}\n\nclass FaganInspection {\n  private readonly id: string;\n  private readonly artifactName: string;\n  private readonly artifactSize: number; // in units (pages, SLOC, etc.)\n  private phase: InspectionPhase;\n  private inspectors: Inspector[] = [];\n  private defects: InspectionDefect[] = [];\n  private phaseLog: { phase: InspectionPhase; startTime: Date; endTime?: Date }[] = [];\n  private totalDefectsInArtifact = 0; // for yield calculation\n\n  constructor(artifactName: string, artifactSize: number, moderator: string, author: string) {\n    this.id = `FAGAN-${Date.now()}`;\n    this.artifactName = artifactName;\n    this.artifactSize = artifactSize;\n    this.phase = 'planning';\n    this.addInspector(moderator, 'moderator');\n    this.addInspector(author, 'author');\n    this.enterPhase('planning');\n  }\n\n  public addInspector(name: string, role: Inspector['role']): void {\n    this.inspectors.push({ name, role, hoursSpent: 0 });\n  }\n\n  public recordHours(name: string, hours: number): void {\n    const inspector = this.inspectors.find(i => i.name === name);\n    if (inspector) inspector.hoursSpent += hours;\n  }\n\n  public enterPhase(phase: InspectionPhase): void {\n    const previousEntry = this.phaseLog.find(p => p.phase === this.phase && !p.endTime);\n    if (previousEntry) previousEntry.endTime = new Date();\n    this.phase = phase;\n    this.phaseLog.push({ phase, startTime: new Date() });\n  }\n\n  public logDefect(\n    description: string,\n    location: string,\n    severity: DefectSeverity,\n    defectClass: DefectClass,\n    finder: string\n  ): InspectionDefect {\n    const defect: InspectionDefect = {\n      id: `DEF-${this.defects.length + 1}`,\n      phaseFound: this.phase,\n      description,\n      location,\n      severity,\n      defectClass,\n      finder,\n      status: 'open',\n      notes: [],\n    };\n    this.defects.push(defect);\n    return defect;\n  }\n\n  public markReworkComplete(defectId: string): void {\n    const defect = this.findDefect(defectId);\n    defect.status = 'rework_complete';\n  }\n\n  public verifyFix(defectId: string, verifier: string): void {\n    const defect = this.findDefect(defectId);\n    defect.status = 'verified';\n    defect.fixVerificationDate = new Date();\n    defect.notes.push(`Verified by ${verifier} on ${new Date().toISOString().split('T')[0]}`);\n  }\n\n  public setTotalDefects(total: number): void {\n    this.totalDefectsInArtifact = total;\n  }\n\n  public computeMetrics(): InspectionMetrics {\n    const totalEffort = this.inspectors.reduce((s, i) => s + i.hoursSpent, 0);\n    const preparationHours = this.inspectors\n      .filter(i => i.role === 'reviewer' || i.role === 'moderator')\n      .reduce((s, i) => s + i.hoursSpent, 0);\n    const meetingEntry = this.phaseLog.find(p => p.phase === 'meeting');\n    const meetingHours = meetingEntry && meetingEntry.endTime\n      ? (meetingEntry.endTime.getTime() - meetingEntry.startTime.getTime()) / 3600000\n      : 0;\n\n    // Detection rate\n    const detectionRate = this.totalDefectsInArtifact > 0\n      ? this.defects.length / this.totalDefectsInArtifact\n      : 0;\n\n    // Defect density (defects per unit)\n    const defectDensity = this.artifactSize > 0 ? this.defects.length / this.artifactSize : 0;\n\n    // Preparation rate (units per hour per reviewer)\n    const reviewerCount = this.inspectors.filter(i => i.role === 'reviewer').length;\n    const prepRate = preparationHours > 0\n      ? (this.artifactSize * reviewerCount) / preparationHours\n      : 0;\n\n    // Meeting efficiency (defects found per meeting hour)\n    const meetingEfficiency = meetingHours > 0 ? this.defects.length / meetingHours : 0;\n\n    // Cost per defect\n    const costPerDefect = this.defects.length > 0 ? totalEffort / this.defects.length : 0;\n\n    // Yield (% of total defects found)\n    const yield_ = this.totalDefectsInArtifact > 0\n      ? (this.defects.length / this.totalDefectsInArtifact) * 100\n      : 0;\n\n    return {\n      totalDefects: this.defects.length,\n      defectDensity: Math.round(defectDensity * 100) / 100,\n      detectionRate: Math.round(detectionRate * 100) / 100,\n      preparationRate: Math.round(prepRate * 100) / 100,\n      meetingEfficiency: Math.round(meetingEfficiency * 100) / 100,\n      costPerDefect: Math.round(costPerDefect * 100) / 100,\n      yield: Math.round(yield_ * 100) / 100,\n    };\n  }\n\n  public generateReport(): string {\n    const metrics = this.computeMetrics();\n    const severityBreakdown: Record<string, number> = {};\n    const classBreakdown: Record<string, number> = {};\n    for (const d of this.defects) {\n      severityBreakdown[d.severity] = (severityBreakdown[d.severity] || 0) + 1;\n      classBreakdown[d.defectClass] = (classBreakdown[d.defectClass] || 0) + 1;\n    }\n\n    const lines = [\n      '═══════════════════════════════════════════',\n      `  Fagan Inspection Report: ${this.artifactName}`,\n      `  ID: ${this.id}`,\n      '═══════════════════════════════════════════',\n      '',\n      '  ─── Metrics ───',\n      `  Artifact Size: ${this.artifactSize} units`,\n      `  Total Defects Found: ${metrics.totalDefects}`,\n      `  Defect Density: ${metrics.defectDensity}/unit`,\n      `  Detection Rate: ${(metrics.detectionRate * 100).toFixed(1)}%`,\n      `  Yield: ${metrics.yield.toFixed(1)}%`,\n      `  Prep Rate: ${metrics.preparationRate} units/hour`,\n      `  Meeting Efficiency: ${metrics.meetingEfficiency} defects/hour`,\n      `  Cost Per Defect: ${metrics.costPerDefect} hours`,\n      '',\n      '  ─── Severity Breakdown ───',\n      ...Object.entries(severityBreakdown).map(([sev, count]) =>\n        `    ${sev.toUpperCase().padEnd(12)} ${count}`\n      ),\n      '',\n      '  ─── Defect Class Breakdown ───',\n      ...Object.entries(classBreakdown).map(([cls, count]) =>\n        `    ${cls.padEnd(16)} ${count}`\n      ),\n      '',\n      '  ─── All Defects ───',\n      ...this.defects.map(d =>\n        `    ${d.id} | ${d.severity.toUpperCase()} | ${d.location} | ${d.description} | ${d.status}`\n      ),\n      '',\n      '  ─── Team Effort ───',\n      ...this.inspectors.map(i =>\n        `    ${i.role.padEnd(12)} ${i.name.padEnd(20)} ${i.hoursSpent}h`\n      ),\n    ];\n    return lines.join('\\n');\n  }\n\n  public getDefectById(id: string): InspectionDefect | undefined {\n    return this.defects.find(d => d.id === id);\n  }\n\n  public getDefectsByStatus(status: InspectionDefect['status']): InspectionDefect[] {\n    return this.defects.filter(d => d.status === status);\n  }\n\n  private findDefect(id: string): InspectionDefect {\n    const defect = this.defects.find(d => d.id === id);\n    if (!defect) throw new Error(`Defect ${id} not found`);\n    return defect;\n  }\n\n  public close(): InspectionMetrics {\n    this.enterPhase('followup');\n    return this.computeMetrics();\n  }\n}\n\n// Usage\nconst inspection = new FaganInspection('auth-module.ts', 450, 'Alice (Mod)', 'Bob (Author)');\ninspection.addInspector('Charlie', 'reviewer');\ninspection.addInspector('Diana', 'reviewer');\ninspection.addInspector('Eve', 'recorder');\n\ninspection.recordHours('Alice (Mod)', 2);\ninspection.recordHours('Bob (Author)', 3);\ninspection.recordHours('Charlie', 3.5);\ninspection.recordHours('Diana', 4);\ninspection.recordHours('Eve', 2.5);\n\ninspection.enterPhase('overview');\ninspection.enterPhase('preparation');\ninspection.enterPhase('meeting');\n\ninspection.logDefect('Null pointer on line 42 when user is unauthenticated', 'src/auth.ts:42', 'critical', 'logic', 'Charlie');\ninspection.logDefect('Inconsistent naming convention (camelCase vs snake_case)', 'src/auth.ts:15-20', 'minor', 'standards', 'Diana');\ninspection.logDefect('Missing error handling for token expiry', 'src/auth.ts:88', 'major', 'interface', 'Charlie');\ninspection.logDefect('Typo in error message \"authentication\"', 'src/auth.ts:101', 'cosmetic', 'documentation', 'Eve');\ninspection.logDefect('SQL injection risk in raw query', 'src/auth.ts:200', 'critical', 'logic', 'Diana');\ninspection.logDefect('Dead code: unused import on line 1', 'src/auth.ts:1', 'minor', 'standards', 'Charlie');\ninspection.logDefect('Session timeout not configurable', 'src/auth.ts:155', 'major', 'interface', 'Eve');\ninspection.logDefect('Logging sensitive data (password hash)', 'src/auth.ts:300', 'critical', 'data', 'Diana');\n\ninspection.setTotalDefects(12);\nconst metrics = inspection.close();\nconsole.log(inspection.generateReport());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-quality-metric-collector--cyclomatic-complexity-coverage-gates",
      children: "Example 4: Quality Metric Collector — Cyclomatic Complexity, Coverage, Gates"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface QualityMetrics {\n  cyclomaticComplexity: number;\n  linesOfCode: number;\n  commentDensity: number;\n  testCoverage: number;\n  duplicateCodeRate: number;\n}\n\ninterface QualityGates {\n  maxComplexity: number;\n  minCoverage: number;\n  maxDuplication: number;\n}\n\nclass QualityAggregator {\n  private readonly gates: QualityGates;\n\n  constructor(gates: QualityGates) {\n    this.gates = gates;\n  }\n\n  public evaluate(metrics: QualityMetrics): {\n    passed: boolean;\n    violations: string[];\n    score: number;\n  } {\n    const violations: string[] = [];\n\n    if (metrics.cyclomaticComplexity > this.gates.maxComplexity) {\n      violations.push(`Complexity ${metrics.cyclomaticComplexity} exceeds ${this.gates.maxComplexity}`);\n    }\n    if (metrics.testCoverage < this.gates.minCoverage) {\n      violations.push(`Coverage ${(metrics.testCoverage * 100).toFixed(1)}% below ${(this.gates.minCoverage * 100).toFixed(0)}%`);\n    }\n    if (metrics.duplicateCodeRate > this.gates.maxDuplication) {\n      violations.push(`Duplication ${(metrics.duplicateCodeRate * 100).toFixed(1)}% exceeds ${(this.gates.maxDuplication * 100).toFixed(0)}%`);\n    }\n\n    const complexityScore = Math.max(0, 100 - (metrics.cyclomaticComplexity / this.gates.maxComplexity) * 100);\n    const coverageScore = metrics.testCoverage / this.gates.minCoverage * 100;\n    const duplicationScore = Math.max(0, 100 - (metrics.duplicateCodeRate / this.gates.maxDuplication) * 100);\n    const score = Math.round(complexityScore * 0.3 + coverageScore * 0.4 + duplicationScore * 0.3);\n\n    return { passed: violations.length === 0, violations, score };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-5-quality-metrics-dashboard",
      children: "Example 5: Quality Metrics Dashboard"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The quality metrics dashboard aggregates multiple quality dimensions into a single scoreboard, enabling teams to track trends and detect regressions at a glance."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface MetricDefinition {\n  name: string;\n  value: number;\n  unit: string;\n  threshold: { warning: number; critical: number };\n  direction: 'lower_is_better' | 'higher_is_better';\n}\n\nenum DashboardStatus {\n  HEALTHY = 'healthy',\n  WARNING = 'warning',\n  CRITICAL = 'critical',\n}\n\ninterface DashboardEntry {\n  metric: string;\n  value: string;\n  status: DashboardStatus;\n  trend: 'up' | 'down' | 'flat';\n}\n\nclass QualityDashboard {\n  private readonly history: Map<string, number[]> = new Map();\n\n  public evaluate(metrics: MetricDefinition[]): {\n    entries: DashboardEntry[];\n    overallStatus: DashboardStatus;\n    score: number;\n  } {\n    let totalScore = 0;\n    const entries: DashboardEntry[] = [];\n\n    for (const m of metrics) {\n      this.pushHistory(m.name, m.value);\n      const status = this.computeStatus(m);\n      const trend = this.computeTrend(m.name);\n      const statusWeight = status === DashboardStatus.HEALTHY ? 1\n        : status === DashboardStatus.WARNING ? 0.5 : 0;\n      totalScore += statusWeight;\n      entries.push({ metric: m.name, value: `${m.value}${m.unit}`, status, trend });\n    }\n\n    const overallScore = metrics.length > 0 ? Math.round((totalScore / metrics.length) * 100) : 0;\n    const overallStatus = overallScore >= 80 ? DashboardStatus.HEALTHY\n      : overallScore >= 50 ? DashboardStatus.WARNING : DashboardStatus.CRITICAL;\n\n    return { entries, overallStatus, score: overallScore };\n  }\n\n  private computeStatus(m: MetricDefinition): DashboardStatus {\n    const { value, threshold, direction } = m;\n    const isWorse = direction === 'lower_is_better'\n      ? (v: number, t: number) => v > t\n      : (v: number, t: number) => v < t;\n    if (isWorse(value, threshold.critical)) return DashboardStatus.CRITICAL;\n    if (isWorse(value, threshold.warning)) return DashboardStatus.WARNING;\n    return DashboardStatus.HEALTHY;\n  }\n\n  private computeTrend(name: string): 'up' | 'down' | 'flat' {\n    const values = this.history.get(name);\n    if (!values || values.length < 3) return 'flat';\n    const recent = values.slice(-5);\n    const half = Math.floor(recent.length / 2);\n    const firstHalfAvg = recent.slice(0, half).reduce((a, b) => a + b, 0) / half;\n    const secondHalfAvg = recent.slice(half).reduce((a, b) => a + b, 0) / (recent.length - half);\n    const diff = secondHalfAvg - firstHalfAvg;\n    const threshold = Math.max(0.01, Math.abs(firstHalfAvg) * 0.02);\n    if (Math.abs(diff) < threshold) return 'flat';\n    return diff > 0 ? 'up' : 'down';\n  }\n\n  private pushHistory(name: string, value: number): void {\n    if (!this.history.has(name)) this.history.set(name, []);\n    this.history.get(name)!.push(value);\n    if (this.history.get(name)!.length > 100) this.history.get(name)!.shift();\n  }\n\n  public renderDashboard(entries: DashboardEntry[], overallStatus: DashboardStatus, score: number): string {\n    const statusIcon = (s: DashboardStatus) =>\n      s === DashboardStatus.HEALTHY ? '🟢' : s === DashboardStatus.WARNING ? '🟡' : '🔴';\n    const trendIcon = (t: 'up' | 'down' | 'flat') =>\n      t === 'up' ? '▲' : t === 'down' ? '▼' : '─';\n    const rows = entries.map(e =>\n      `  ${statusIcon(e.status)} ${trendIcon(e.trend)} ${e.metric.padEnd(25)} ${e.value.padEnd(12)} ${e.status}`\n    ).join('\\n');\n    return [\n      '=== Quality Dashboard ===',\n      `  Overall Score: ${score}/100 ${statusIcon(overallStatus)}`,\n      `  Overall Status: ${overallStatus.toUpperCase()}`,\n      '  ' + '─'.repeat(55),\n      rows,\n    ].join('\\n');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-6-cyclomatic-complexity-calculator",
      children: "Example 6: Cyclomatic Complexity Calculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "enum NodeType {\n  SEQUENCE, DECISION, LOOP, LOGICAL, CATCH,\n}\n\ninterface ControlFlowNode {\n  id: number;\n  type: NodeType;\n  children: number[];\n}\n\nclass ComplexityAnalyzer {\n  public calculate(nodes: ControlFlowNode[]): number {\n    const edges = nodes.reduce((sum, n) => sum + n.children.length, 0);\n    const vertexCount = nodes.length;\n    const predicateCount = nodes.filter(\n      (n) => n.type === NodeType.DECISION || n.type === NodeType.LOOP || n.type === NodeType.CATCH\n    ).length;\n    const cyclomatic = edges - vertexCount + 2;\n    const alternativeFormula = 1 + predicateCount;\n    return Math.max(cyclomatic, alternativeFormula);\n  }\n\n  public static async analyzeFile(sourceCode: string): Promise<{ function: string; complexity: number; risk: string }[]> {\n    const lines = sourceCode.split('\\n');\n    const functions: { function: string; complexity: number; risk: string }[] = [];\n    let currentFunction = '';\n    let predicates = 0;\n    let inFunction = false;\n\n    for (const line of lines) {\n      const trimmed = line.trim();\n      if (trimmed.startsWith('function ') || trimmed.match(/^\\w+\\s*\\(.*\\)\\s*{/)) {\n        if (inFunction) {\n          functions.push({ function: currentFunction, complexity: predicates + 1, risk: this.riskLevel(predicates + 1) });\n        }\n        currentFunction = trimmed.split('{')[0].trim();\n        predicates = 0;\n        inFunction = true;\n      }\n      if (inFunction) {\n        if (trimmed.startsWith('if ') || trimmed.startsWith('else if ')) predicates++;\n        if (trimmed.startsWith('for ') || trimmed.startsWith('while ')) predicates++;\n        if (trimmed.startsWith('case ')) predicates++;\n        if (trimmed.match(/\\|\\||&&/)) predicates++;\n        if (trimmed.startsWith('catch ')) predicates++;\n      }\n      if (trimmed === '}' && inFunction) {\n        functions.push({ function: currentFunction, complexity: predicates + 1, risk: this.riskLevel(predicates + 1) });\n        inFunction = false;\n      }\n    }\n    return functions;\n  }\n\n  private static riskLevel(complexity: number): string {\n    if (complexity <= 10) return 'Low';\n    if (complexity <= 20) return 'Moderate';\n    if (complexity <= 50) return 'High';\n    return 'Untestable';\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-7-defect-density-analyzer",
      children: "Example 7: Defect Density Analyzer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ModuleDefectData {\n  moduleName: string;\n  linesOfCode: number;\n  defects: { id: string; severity: 'critical' | 'major' | 'minor' | 'trivial'; introducedInRelease: string }[];\n}\n\ninterface DensityReportEntry {\n  module: string;\n  ksloc: number;\n  defectCount: number;\n  density: number;\n  severityBreakdown: Record<string, number>;\n  riskLevel: 'low' | 'moderate' | 'high' | 'critical';\n}\n\nclass DefectDensityAnalyzer {\n  public analyzeModules(modules: ModuleDefectData[]): DensityReportEntry[] {\n    return modules.map(mod => {\n      const ksloc = mod.linesOfCode / 1000;\n      const defectCount = mod.defects.length;\n      const density = ksloc > 0 ? defectCount / ksloc : 0;\n      const breakdown: Record<string, number> = {};\n      for (const d of mod.defects) breakdown[d.severity] = (breakdown[d.severity] || 0) + 1;\n      const riskLevel = density <= 2 ? 'low' : density <= 5 ? 'moderate' : density <= 10 ? 'high' : 'critical';\n      return {\n        module: mod.moduleName, ksloc: Math.round(ksloc * 100) / 100, defectCount,\n        density: Math.round(density * 100) / 100, severityBreakdown: breakdown, riskLevel,\n      };\n    });\n  }\n\n  public identifyHotspots(entries: DensityReportEntry[], threshold = 5): DensityReportEntry[] {\n    return entries.filter(e => e.density > threshold).sort((a, b) => b.density - a.density);\n  }\n\n  public releaseTrend(allModules: ModuleDefectData[], releases: string[]): { release: string; totalDefects: number; totalKsloc: number; density: number }[] {\n    return releases.map(release => {\n      let totalDefects = 0;\n      let totalKsloc = 0;\n      for (const mod of allModules) {\n        const releaseDefects = mod.defects.filter(d => d.introducedInRelease === release);\n        totalDefects += releaseDefects.length;\n        totalKsloc += mod.linesOfCode / 1000;\n      }\n      return {\n        release, totalDefects, totalKsloc: Math.round(totalKsloc * 100) / 100,\n        density: totalKsloc > 0 ? Math.round((totalDefects / totalKsloc) * 100) / 100 : 0,\n      };\n    });\n  }\n\n  public generateReport(entries: DensityReportEntry[], trend: { release: string; density: number }[]): string {\n    const header = '=== Defect Density Report ===\\n';\n    const tableHeader = `${'Module'.padEnd(20)} ${'KS LOC'.padEnd(8)} ${'Defects'.padEnd(8)} ${'Density'.padEnd(8)} ${'Risk'}`;\n    const separator = '─'.repeat(60);\n    const rows = entries.map(e =>\n      `${e.module.padEnd(20)} ${String(e.ksloc).padEnd(8)} ${String(e.defectCount).padEnd(8)} ${String(e.density).padEnd(8)} ${e.riskLevel.toUpperCase()}`\n    ).join('\\n');\n    const hotspots = entries.filter(e => e.density > 5);\n    const hotspotSection = hotspots.length > 0\n      ? `\\n\\n⚠ Hotspots (density > 5):\\n${hotspots.map(h => `  - ${h.module} (${h.density} defects/KLOC)`).join('\\n')}`\n      : '\\n\\n✓ No hotspots detected';\n    const trendLines = trend.map(t => `  ${t.release.padEnd(12)} ${t.density} defects/KLOC`).join('\\n');\n    const trendSection = `\\n\\n=== Density Trend ===\\n${trendLines}`;\n    return [header, tableHeader, separator, rows, hotspotSection, trendSection].join('\\n');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-case-studies",
      children: "Real-World Case Studies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Case Study 1: Toyota — Quality at Scale"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Toyota's quality management system, which inspired Lean manufacturing, demonstrates quality principles at industrial scale. Their \"Andon Cord\" system empowers any worker to stop the production line if a defect is found — analogous to \"stop the line\" culture in software. Toyota's defect rate of <10 parts per million (PPM) inspired Six Sigma. For software, this translates to stopping the build when tests fail and empowering any developer to block a release."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Case Study 2: NASA — Software Quality in Safety-Critical Systems"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NASA's Space Shuttle software (developed by IBM) had a defect rate of 0.1 defects per KLOC — 50x better than industry average. They achieved this through:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Formal inspections:"
        }), " Every line of code was inspected by 4+ people"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Independent V&V:"
        }), " Separate team verified all requirements traceability"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Static analysis:"
        }), " Rigorous use of tools before every build"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zero-defect policy:"
        }), " No known defects were allowed in flight software"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The cost of this quality was $1,000 per line of code, but the cost of failure was unthinkable."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Case Study 3: Microsoft — Quality Transformation with Windows"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Microsoft's Windows division underwent a major quality transformation from 2012-2015, moving from \"ship when ready\" to predictable quality releases. They implemented:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quality gates"
        }), " in build pipeline"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code coverage"
        }), " requirements (80%+)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Static analysis"
        }), " mandatory for check-in"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Defect density tracking"
        }), " per feature team"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Customer-connected telemetry"
        }), " for real-world quality monitoring"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Result: Windows 10 had 60% fewer crashes than Windows 8, with 50% lower defect density."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-mermaid-diagrams",
      children: "Additional Mermaid Diagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Quality Metrics Pipeline\"\n        CI[CI Pipeline Trigger] --> STATIC[Static Analysis]\n        STATIC --> TESTS[Test Execution]\n        TESTS --> COV[Coverage Calculation]\n        COV --> DD[Defect Density Analysis]\n        DD --> DASH[Dashboard Aggregation]\n        DASH --> GATE{Quality Gate}\n        GATE -->|Pass| DEPLOY[Deploy to Production]\n        GATE -->|Fail| BLOCK[Block Merge / Notify Team]\n        BLOCK --> FIX[Fix Issues]\n        FIX --> CI\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    subgraph \"Coverage Types\"\n        LC[Line Coverage] -->|Executed lines / Total lines| LR[Rate]\n        BC[Branch Coverage] -->|Taken branches / Total branches| BR[Rate]\n        FC[Function Coverage] -->|Called functions / Total functions| FR[Rate]\n    end\n    subgraph \"Defect Density Zones\"\n        D1[Density 0-2] -->|Low Risk| ACCEPT[Acceptable]\n        D2[Density 2-5] -->|Moderate| MONITOR[Monitor]\n        D3[Density 5-10] -->|High| REVIEW[Review Required]\n        D4[Density 10+] -->|Critical| IMMEDIATE[Must Refactor]\n    end\n    subgraph \"Dashboard Status\"\n        DS1[Score 80-100] -->|🟢| HLTH[Healthy]\n        DS2[Score 50-79] -->|🟡| WARN[Warning]\n        DS3[Score 0-49] -->|🔴| CRIT[Critical]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Quality Improvement DMAIC Cycle\"\n        DEFINE[Define: Problem & Goals] --> MEASURE[Measure: Current State]\n        MEASURE --> ANALYZE[Analyze: Root Causes]\n        ANALYZE --> IMPROVE[Improve: Implement Solutions]\n        IMPROVE --> CONTROL[Control: Sustain Gains]\n        CONTROL --> DEFINE\n    end\n    \n    DEFINE --> TOOLS1[\"Project Charter, SIPOC\"]\n    MEASURE --> TOOLS2[\"Data Collection, Baseline Metrics\"]\n    ANALYZE --> TOOLS3[\"Fishbone, Pareto, 5 Whys\"]\n    IMPROVE --> TOOLS4[\"Solution Design, Pilot\"]\n    CONTROL --> TOOLS5[\"SPC, Control Charts\"]\n    \n    classDef phase fill:#e3f2fd,stroke:#1565c0\n    classDef tool fill:#f3e5f5,stroke:#7b1fa2\n    \n    class DEFINE,MEASURE,ANALYZE,IMPROVE,CONTROL phase\n    class TOOLS1,TOOLS2,TOOLS3,TOOLS4,TOOLS5 tool\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-quality-management-tools",
      children: "TypeScript: Quality Management Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Quality Score Calculator ===\ninterface QualityDimension { name: string; weight: number; score: number; }\nfunction calculateQualityIndex(dimensions: QualityDimension[]): { overall: number; breakdown: QualityDimension[] } {\n  const totalWeight = dimensions.reduce((s, d) => s + d.weight, 0);\n  const weightedSum = dimensions.reduce((s, d) => s + d.weight * d.score, 0);\n  const breakdown = dimensions.map(d => ({ ...d, weighted: d.weight * d.score / totalWeight }));\n  return { overall: totalWeight > 0 ? weightedSum / totalWeight : 0, breakdown: dimensions };\n}\nconst qualityDims: QualityDimension[] = [\n  { name: \"Reliability\", weight: 30, score: 85 },\n  { name: \"Performance\", weight: 25, score: 72 },\n  { name: \"Security\", weight: 25, score: 90 },\n  { name: \"Maintainability\", weight: 20, score: 78 },\n];\nconsole.log(calculateQualityIndex(qualityDims));\n\n// === Defect Density Analyzer ===\nfunction defectDensity(defects: number, kloc: number): { density: number; severity: \"low\" | \"medium\" | \"high\" } {\n  const density = kloc > 0 ? defects / kloc : 0;\n  const severity = density < 5 ? \"low\" : density < 15 ? \"medium\" : \"high\";\n  return { density: Math.round(density * 100) / 100, severity };\n}\nconsole.log(defectDensity(42, 10));\n\n// === Quality Gate Checker ===\ninterface QualityGate { metric: string; operator: \">\" | \">=\" | \"<\" | \"<=\" | \"==\"; threshold: number; }\nfunction checkGates(gates: QualityGate[], measurements: Record<string, number>): { passed: boolean; failures: string[] } {\n  const failures: string[] = [];\n  for (const gate of gates) {\n    const value = measurements[gate.metric];\n    if (value === undefined) { failures.push(`${gate.metric}: not measured`); continue; }\n    const pass = gate.operator === \">\" ? value > gate.threshold\n      : gate.operator === \">=\" ? value >= gate.threshold\n      : gate.operator === \"<\" ? value < gate.threshold\n      : gate.operator === \"<=\" ? value <= gate.threshold\n      : value === gate.threshold;\n    if (!pass) failures.push(`${gate.metric}: ${value} ${gate.operator} ${gate.threshold} failed`);\n  }\n  return { passed: failures.length === 0, failures };\n}\nconst gates: QualityGate[] = [\n  { metric: \"testCoverage\", operator: \">=\", threshold: 80 },\n  { metric: \"complexity\", operator: \"<=\", threshold: 15 },\n  { metric: \"duplications\", operator: \"<\", threshold: 5 },\n];\nconst measurements = { testCoverage: 85, complexity: 12, duplications: 3 };\nconsole.log(checkGates(gates, measurements));\n\n// === SPC Control Chart Calculator ===\ninterface ControlLimits { mean: number; upper: number; lower: number; }\nfunction calculateControlLimits(values: number[]): ControlLimits {\n  const mean = values.reduce((s, v) => s + v, 0) / values.length;\n  const std = Math.sqrt(values.reduce((s, v) => s + (v - mean) ** 2, 0) / values.length);\n  return { mean: Math.round(mean * 100) / 100, upper: Math.round((mean + 3 * std) * 100) / 100, lower: Math.round(Math.max(0, mean - 3 * std) * 100) / 100 };\n}\nconst sprintVelocities = [30, 32, 28, 35, 29, 31, 33, 27];\nconsole.log(calculateControlLimits(sprintVelocities));\n\n// === Fagan Inspection Calculator ===\nfunction faganEfficiency(defectsFound: number, totalDefects: number, preparationHours: number, meetingHours: number): { detectionRate: number; costPerDefect: number } {\n  return {\n    detectionRate: totalDefects > 0 ? defectsFound / totalDefects : 0,\n    costPerDefect: defectsFound > 0 ? (preparationHours + meetingHours) / defectsFound : 0,\n  };\n}\nconsole.log(faganEfficiency(8, 12, 4, 2));\n\n// === CMMI Maturity Checker ===\ntype CMMILevel = 1 | 2 | 3 | 4 | 5;\nconst cmmiPractices: Record<CMMILevel, string[]> = {\n  1: [\"Basic project management\", \"Ad hoc processes\"],\n  2: [\"Requirements management\", \"Project planning\", \"Project monitoring\", \"Configuration management\"],\n  3: [\"Requirements development\", \"Technical solution\", \"Product integration\", \"Verification\", \"Validation\", \"Organisational process focus\"],\n  4: [\"Organisational process performance\", \"Quantitative project management\"],\n  5: [\"Organisational performance management\", \"Causal analysis and resolution\"],\n};\nfunction checkCMMILevel(implemented: string[]): CMMILevel {\n  for (let level = 5; level >= 2; level--) {\n    const practices = cmmiPractices[level as CMMILevel];\n    if (practices.every(p => implemented.some(i => i.includes(p)))) return level as CMMILevel;\n  }\n  return 1;\n}\nconst orgPractices = [\"Requirements management\", \"Project planning\", \"Project monitoring\", \"Configuration management\", \"Technical solution\"];\nconsole.log(`CMMI Level: ${checkCMMILevel(orgPractices)}`);\n\n// === Reliability Prediction (Exponential Distribution) ===\nfunction predictReliability(mtbf: number, missionHours: number): { reliability: number; failureProbability: number } {\n  const failureRate = 1 / mtbf;\n  const reliability = Math.exp(-failureRate * missionHours);\n  return {\n    reliability: Math.round(reliability * 10000) / 10000,\n    failureProbability: Math.round((1 - reliability) * 10000) / 10000,\n  };\n}\nconsole.log(predictReliability(720, 24)); // Reliability over 24h with 30-day MTBF\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Software quality management is a multi-faceted discipline that spans planning, assurance, control, and continuous improvement. Quality models like McCall (1977), Boehm (1978), FURPS (1987), and ISO 25010 (2011) provide structured frameworks for defining and evaluating software quality across dimensions such as functional suitability, reliability, performance, security, maintainability, and portability. Process quality frameworks like CMMI (with its five maturity levels) and Six Sigma (with DMAIC) guide organisations in maturing their quality practices from ad hoc to quantitatively managed and continuously optimising."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "At the tactical level, formal inspections such as Fagan inspections catch 60-70% of defects before testing at substantially lower cost. Static analysis tools enforce coding standards, detect bug patterns, and identify security vulnerabilities automatically. Statistical process control (SPC) distinguishes common cause from special cause variation, enabling data-driven quality decisions. Quality gates integrated into CI/CD pipelines (lint → test → coverage → security → build → integration → performance) prevent quality degradation from reaching production."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Practical tools like the QualityMetricsCollector (computing defect density, MTBF, and reliability), ISO25010Evaluator (scoring against all eight characteristics), and FaganInspection (managing the full inspection lifecycle with defect tracking and metrics) demonstrate how to operationalise quality management. Real-world cases from Toyota (Andon Cord culture), NASA (0.1 defects/KLOC through formal inspections and independent V&V), and Microsoft (60% crash reduction through quality gates and telemetry) show that systematic quality investment pays dividends in reliability, customer satisfaction, and reduced cost of rework."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quality must be planned, not inspected in"
        }), " — allocate dedicated time for quality activities in every sprint"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Process quality drives product quality"
        }), " — fix the process, and product defects decrease predictably"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inspections catch defects cheaper than testing"
        }), " — the cost of fixing a bug increases exponentially through the lifecycle (1:10:100 rule at requirements:development:production)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Static analysis is cheap insurance"
        }), " — run linters, type checkers, and vulnerability scanning as part of every CI build"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Track quality metrics over time"
        }), " — trends reveal process degradation before it becomes critical; use control charts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automate quality checks"
        }), " — manual quality control does not scale across teams or releases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use multiple quality models"
        }), " — combine ISO 25010 for product quality with CMMI for process maturity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quality is everyone's responsibility"
        }), " — developers, testers, product owners, and operations all contribute to quality"]
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
            children: "Q1: What is the primary difference between quality assurance and quality control?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QA focuses on process compliance (prevention), QC focuses on product verification (detection)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q2: The CMMI level that requires organisation-wide standard processes is:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level 3 (Defined) establishes standard processes across the organisation, beyond Level 2's project-level focus"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q3: In Fagan inspections, the participant who leads the process is called the:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The moderator leads the inspection, ensures process compliance, and manages the meeting flow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q4: What cyclomatic complexity value is considered high risk and difficult to test?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity 21-50 is high risk — requires significant refactoring to achieve adequate test coverage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q5: ISO 25010 defines how many quality characteristics?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eight characteristics: functional suitability, reliability, performance efficiency, operability, security, compatibility, maintainability, portability"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.b, {
          children: "Exercise 1:"
        }), " Implement an SPC control chart monitor that tracks daily build failure rates across 30 days. Use the Nelson rules to detect special cause variation and generate alerts."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "interface DailyBuildData {\n  day: number;\n  totalBuilds: number;\n  failedBuilds: number;\n}\ninterface SPCRuleViolation {\n  rule: number;\n  description: string;\n  severity: 'warning' | 'critical';\n}\nclass SPCMonitor {\n  public analyze(data: DailyBuildData[]): { mean: number; ucl: number; lcl: number; violations: SPCRuleViolation[] } {\n    const failureRates = data.map(d => d.totalBuilds > 0 ? d.failedBuilds / d.totalBuilds : 0);\n    const n = failureRates.length;\n    const mean = failureRates.reduce((a, b) => a + b, 0) / n;\n    const std = Math.sqrt(failureRates.reduce((sq, v) => sq + (v - mean) ** 2, 0) / n);\n    const ucl = Math.min(1, mean + 3 * std);\n    const lcl = Math.max(0, mean - 3 * std);\n    const violations: SPCRuleViolation[] = [];\n    // Rule 1: One point beyond 3σ\n    failureRates.forEach((rate, i) => {\n      if (rate > ucl || rate < lcl) {\n        violations.push({ rule: 1, description: `Day ${i+1}: ${(rate*100).toFixed(1)}% beyond control limits`, severity: 'critical' });\n      }\n    });\n    // Rule 2: Eight consecutive points on same side\n    for (let i = 7; i < n; i++) {\n      const slice = failureRates.slice(i-7, i+1);\n      if (slice.every(v => v >= mean) || slice.every(v => v <= mean)) {\n        violations.push({ rule: 2, description: `Days ${i-7+1}-${i+1}: 8 consecutive points on one side`, severity: 'warning' });\n      }\n    }\n    return { mean, ucl, lcl, violations };\n  }\n}\nconst monitor = new SPCMonitor();\nconst days = Array.from({ length: 30 }, (_, i) => ({\n  day: i+1, totalBuilds: 20, failedBuilds: Math.random() < 0.1 ? Math.floor(Math.random() * 6) : Math.floor(Math.random() * 2)\n}));\nconsole.log(monitor.analyze(days));\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.b, {
          children: "Exercise 2:"
        }), " Create a quality improvement roadmap planner that takes current CMMI level and target level and generates a month-by-month improvement plan with process areas, training, and metrics."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "interface ImprovementPhase {\n  month: number;\n  processAreas: string[];\n  training: string[];\n  metrics: string[];\n  tools: string[];\n  expectedOutcome: string;\n}\nclass CMMIRoadmapPlanner {\n  private readonly processAreaDetails: Record<number, string[]> = {\n    2: [\"Requirements Management\", \"Project Planning\", \"Project Monitoring\", \"Supplier Agreement\", \"Measurement & Analysis\", \"Quality Assurance\", \"Configuration Management\"],\n    3: [\"Requirements Development\", \"Technical Solution\", \"Product Integration\", \"Verification\", \"Validation\", \"Organisational Process Focus\", \"Organisational Training\", \"Risk Management\", \"Decision Analysis\"],\n    4: [\"Organisational Process Performance\", \"Quantitative Project Management\"],\n    5: [\"Organisational Performance Management\", \"Causal Analysis & Resolution\"],\n  };\n  public generatePlan(currentLevel: number, targetLevel: number, teamSize: number): ImprovementPhase[] {\n    const plan: ImprovementPhase[] = [];\n    let month = 1;\n    for (let level = currentLevel + 1; level <= targetLevel; level++) {\n      const areas = this.processAreaDetails[level] || [];\n      const chunks = this.chunkArray(areas, 3);\n      for (const chunk of chunks) {\n        plan.push({\n          month: month++,\n          processAreas: chunk,\n          training: chunk.map(a => `${a} Training`),\n          metrics: chunk.map(a => `${a} Compliance %`),\n          tools: [\"Process dashboard\", \"Audit tracker\"],\n          expectedOutcome: `${chunk.join(', ')} implemented at Level ${level}`,\n        });\n      }\n    }\n    return plan;\n  }\n  private chunkArray<T>(arr: T[], size: number): T[][] {\n    const result: T[][] = [];\n    for (let i = 0; i < arr.length; i += size) result.push(arr.slice(i, i + size));\n    return result;\n  }\n}\nconst planner = new CMMIRoadmapPlanner();\nconsole.log(planner.generatePlan(1, 3, 50).map(p => `Month ${p.month}: ${p.processAreas.join(', ')}`));\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.b, {
          children: "Exercise 3:"
        }), " Design a quality gate pipeline with 5 or more stages. Each stage has a pass/fail check. Write a TypeScript class that runs the pipeline, records results, and generates a quality report with stage-level pass/fail status."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "interface GateStage { name: string; run: () => boolean; critical: boolean; }\nclass QualityGatePipeline {\n  private stages: GateStage[] = [];\n  private results: { stage: string; passed: boolean; timestamp: Date }[] = [];\n\n  public addStage(name: string, run: () => boolean, critical = true): void {\n    this.stages.push({ name, run, critical });\n  }\n\n  public execute(): { passed: boolean; failedStages: string[]; report: string } {\n    const failedStages: string[] = [];\n    for (const stage of this.stages) {\n      const passed = stage.run();\n      this.results.push({ stage: stage.name, passed, timestamp: new Date() });\n      if (!passed) {\n        if (stage.critical) failedStages.push(stage.name);\n        else console.log(`Non-critical stage '${stage.name}' failed — continuing`);\n      }\n    }\n    const passed = failedStages.length === 0;\n    const report = this.results.map(r =>\n      `  ${r.passed ? '✅' : '❌'} ${r.stage}: ${r.passed ? 'PASSED' : 'FAILED'}`\n    ).join('\\n');\n    return { passed, failedStages, report };\n  }\n}\nconst pipeline = new QualityGatePipeline();\npipeline.addStage('Lint', () => true);\npipeline.addStage('Unit Tests', () => true);\npipeline.addStage('Coverage >= 80%', () => Math.random() > 0.2);\npipeline.addStage('Security Scan', () => true);\npipeline.addStage('Build', () => true);\nconst result = pipeline.execute();\nconsole.log(result.report);\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.b, {
          children: "Exercise 4:"
        }), " Create a reliability growth model that tracks MTBF across releases and predicts when the system will achieve target MTBF using the Duane model."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "interface ReleaseData { release: string; cumulativeTestHours: number; cumulativeFailures: number; }\nclass DuaneReliabilityModel {\n  public predict(releases: ReleaseData[], targetMtbf: number): { currentMtbf: number; predictedReleasesToTarget: number; growthRate: number } {\n    const latest = releases[releases.length - 1];\n    const currentMtbf = latest.cumulativeFailures > 0 ? latest.cumulativeTestHours / latest.cumulativeFailures : 0;\n    if (releases.length < 3) return { currentMtbf, predictedReleasesToTarget: -1, growthRate: 0 };\n    const x = releases.map(r => Math.log(r.cumulativeTestHours));\n    const y = releases.map(r => Math.log(r.cumulativeFailures));\n    const n = releases.length;\n    const sumX = x.reduce((a, b) => a + b, 0);\n    const sumY = y.reduce((a, b) => a + b, 0);\n    const sumXY = x.reduce((s, xi, i) => s + xi * y[i], 0);\n    const sumX2 = x.reduce((s, xi) => s + xi * xi, 0);\n    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);\n    const growthRate = 1 - slope;\n    const predictedReleaseHours = latest.cumulativeTestHours * Math.pow(targetMtbf / currentMtbf, 1 / growthRate);\n    const predictedReleasesToTarget = Math.ceil(predictedReleaseHours / (latest.cumulativeTestHours / releases.length));\n    return { currentMtbf: Math.round(currentMtbf), predictedReleasesToTarget: Math.max(0, predictedReleasesToTarget), growthRate: Math.round(growthRate * 100) / 100 };\n  }\n}\nconst model = new DuaneReliabilityModel();\nconst releases: ReleaseData[] = [\n  { release: 'v1.0', cumulativeTestHours: 1000, cumulativeFailures: 50 },\n  { release: 'v1.1', cumulativeTestHours: 3000, cumulativeFailures: 120 },\n  { release: 'v2.0', cumulativeTestHours: 6000, cumulativeFailures: 200 },\n  { release: 'v2.1', cumulativeTestHours: 10000, cumulativeFailures: 280 },\n];\nconsole.log(model.predict(releases, 500));\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.b, {
          children: "Exercise 5:"
        }), " Implement a complete Fagan inspection simulator that models the full six-phase process, assigns roles, logs defects by severity and class, computes yield, preparation rate, and meeting efficiency, and generates a formatted report."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// See Example 3 above for the full FaganInspection class implementation.\n// For this exercise, extend it with:\n// 1. A defect injection simulation (seeding known defects)\n// 2. A preparation phase timer that tracks each reviewer's rate\n// 3. A defect removal efficiency calculator per phase\n// 4. A comparison against industry benchmarks (Fagan's original data)\n\nclass FaganBenchmarkComparator {\n  private static benchmarks = {\n    detectionRate: 0.70,\n    prepRate: 150, // SLOC/hour\n    meetingEfficiency: 4, // defects/hour\n    costPerDefect: 1.2, // hours\n    yield: 85, // percent\n  };\n\n  public compare(actual: { detectionRate: number; prepRate: number; meetingEfficiency: number; costPerDefect: number; yield: number }): string {\n    const lines = ['=== Fagan Benchmark Comparison ==='];\n    for (const [key, expected] of Object.entries(FaganBenchmarkComparator.benchmarks)) {\n      const actualVal = actual[key as keyof typeof actual];\n      const diff = ((actualVal - expected) / expected * 100).toFixed(1);\n      const status = Math.abs(parseFloat(diff)) < 15 ? '✅' : parseFloat(diff) > 0 ? '⚡' : '⚠';\n      lines.push(`  ${status} ${key.padEnd(20)} Expected: ${expected} | Actual: ${actualVal} | Diff: ${diff}%`);\n    }\n    return lines.join('\\n');\n  }\n}\n// Usage with inspection from Example 3\nconst comparator = new FaganBenchmarkComparator();\nconsole.log(comparator.compare({ detectionRate: 0.67, prepRate: 160, meetingEfficiency: 4.5, costPerDefect: 1.5, yield: 75 }));\n"
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