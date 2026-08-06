"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[4228],{

/***/ 65679
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_software_engineering_16_capstone_md_2d3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-software-engineering-16-capstone-md-2d3.json
const site_docs_courses_software_engineering_16_capstone_md_2d3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/software-engineering/16-capstone","title":"Capstone: Building a Complete Software System","description":"Learning Objectives","source":"@site/docs/courses/software-engineering/16-capstone.md","sourceDirName":"courses/software-engineering","slug":"/software-engineering/16-capstone","permalink":"/ai-engineering-journey/software-engineering/16-capstone","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"id":"16-capstone","slug":"/software-engineering/16-capstone","title":"Capstone: Building a Complete Software System","sidebar_label":"Capstone: Building a Complete Software System","sidebar_position":16},"sidebar":"coursesSidebar","previous":{"title":"Software Metrics and Measurement","permalink":"/ai-engineering-journey/software-engineering/15-metrics"},"next":{"title":"Theory of Computation — Complete Course Textbook","permalink":"/ai-engineering-journey/theory-of-computation/index"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/software-engineering/16-capstone.md


const frontMatter = {
	id: '16-capstone',
	slug: '/software-engineering/16-capstone',
	title: 'Capstone: Building a Complete Software System',
	sidebar_label: 'Capstone: Building a Complete Software System',
	sidebar_position: 16
};
const contentTitle = 'Capstone: Building a Complete Software System';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Capstone Overview",
  "id": "capstone-overview",
  "level": 2
}, {
  "value": "Project Domain: SmartBuild Construction Management System",
  "id": "project-domain-smartbuild-construction-management-system",
  "level": 3
}, {
  "value": "Phase 1: Process Selection and Planning",
  "id": "phase-1-process-selection-and-planning",
  "level": 2
}, {
  "value": "Process Model",
  "id": "process-model",
  "level": 3
}, {
  "value": "Scrum Configuration",
  "id": "scrum-configuration",
  "level": 3
}, {
  "value": "Work Breakdown Structure (WBS)",
  "id": "work-breakdown-structure-wbs",
  "level": 3
}, {
  "value": "Milestones",
  "id": "milestones",
  "level": 3
}, {
  "value": "Phase 2: Requirements Engineering",
  "id": "phase-2-requirements-engineering",
  "level": 2
}, {
  "value": "Functional Requirements (20+)",
  "id": "functional-requirements-20",
  "level": 3
}, {
  "value": "Non-Functional Requirements (10+)",
  "id": "non-functional-requirements-10",
  "level": 3
}, {
  "value": "User Stories",
  "id": "user-stories",
  "level": 3
}, {
  "value": "Use Cases",
  "id": "use-cases",
  "level": 3
}, {
  "value": "Phase 3: Architecture",
  "id": "phase-3-architecture",
  "level": 2
}, {
  "value": "System Architecture Overview",
  "id": "system-architecture-overview",
  "level": 3
}, {
  "value": "Architecture Style: Microservices + Event-Driven + CQRS",
  "id": "architecture-style-microservices--event-driven--cqrs",
  "level": 3
}, {
  "value": "4-Layer Architecture",
  "id": "4-layer-architecture",
  "level": 3
}, {
  "value": "Technology Stack",
  "id": "technology-stack",
  "level": 3
}, {
  "value": "Service Boundaries",
  "id": "service-boundaries",
  "level": 3
}, {
  "value": "Phase 4: Detailed Design",
  "id": "phase-4-detailed-design",
  "level": 2
}, {
  "value": "Domain Model",
  "id": "domain-model",
  "level": 3
}, {
  "value": "Phase 5: Implementation",
  "id": "phase-5-implementation",
  "level": 2
}, {
  "value": "SmartBuildSystem: Core System Orchestrator",
  "id": "smartbuildsystem-core-system-orchestrator",
  "level": 3
}, {
  "value": "Budget Service with Event Sourcing",
  "id": "budget-service-with-event-sourcing",
  "level": 3
}, {
  "value": "Notification Service with Template Engine",
  "id": "notification-service-with-template-engine",
  "level": 3
}, {
  "value": "Phase 6: Risk Assessment",
  "id": "phase-6-risk-assessment",
  "level": 2
}, {
  "value": "Risk Assessment Matrix",
  "id": "risk-assessment-matrix",
  "level": 3
}, {
  "value": "RiskAssessmentMatrix Class",
  "id": "riskassessmentmatrix-class",
  "level": 3
}, {
  "value": "Phase 7: Quality Plan",
  "id": "phase-7-quality-plan",
  "level": 2
}, {
  "value": "Test Levels",
  "id": "test-levels",
  "level": 3
}, {
  "value": "CI/CD Gates",
  "id": "cicd-gates",
  "level": 3
}, {
  "value": "SprintPlanner Class",
  "id": "sprintplanner-class",
  "level": 3
}, {
  "value": "QualityDashboard Class",
  "id": "qualitydashboard-class",
  "level": 3
}, {
  "value": "Phase 8: Deployment",
  "id": "phase-8-deployment",
  "level": 2
}, {
  "value": "Deployment Topology",
  "id": "deployment-topology",
  "level": 3
}, {
  "value": "Container Deployment",
  "id": "container-deployment",
  "level": 3
}, {
  "value": "Blue-Green Deployment Strategy",
  "id": "blue-green-deployment-strategy",
  "level": 3
}, {
  "value": "Phase 9: Deliverables Checklist",
  "id": "phase-9-deliverables-checklist",
  "level": 2
}, {
  "value": "Phase 10: Final Competency Checklist",
  "id": "phase-10-final-competency-checklist",
  "level": 2
}, {
  "value": "TypeScript: Capstone Integration Tools",
  "id": "typescript-capstone-integration-tools",
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
    code: "code",
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
        id: "capstone-building-a-complete-software-system",
        children: "Capstone: Building a Complete Software System"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, the student will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate all software engineering disciplines into a single project"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply process models, requirements, architecture, design, testing, and project management together"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a complete software system from specification through deployment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Produce professional documentation at every stage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Demonstrate traceability from requirements to code to tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Present a cohesive technical project report"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan and manage a 6-sprint development cycle"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assess and mitigate project risks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy using blue-green deployment on Kubernetes"
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
        href: "../../assets/images/lessons/software-engineering/16-capstone/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/software-engineering/16-capstone/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/software-engineering/16-capstone/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/software-engineering/16-capstone/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/software-engineering/16-capstone/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/software-engineering/16-capstone/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capstone-overview",
      children: "Capstone Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The capstone project integrates every topic covered in this course into a single, coherent development exercise. Students will specify, design, implement, test, and document a software system using the techniques from all 15 previous chapters."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    CH1[Ch1: Process] --> CH2[Ch2: Requirements]\n    CH2 --> CH3[Ch3: Modeling]\n    CH3 --> CH4[Ch4: Architecture]\n    CH4 --> CH5[Ch5: Design]\n    CH5 --> CH6[Ch6: Testing]\n    CH5 --> CH7[Ch7: Evolution]\n    CH4 --> CH8[Ch8: Project Management]\n    CH1 --> CH8\n    CH5 --> CH9[Ch9: Quality]\n    CH2 --> CH10[Ch10: CM]\n    CH5 --> CH11[Ch11: Agile]\n    CH6 --> CH12[Ch12: DevOps]\n    CH5 --> CH13[Ch13: Security]\n    CH5 --> CH14[Ch14: Formal Methods]\n    CH6 --> CH15[Ch15: Metrics]\n    CH8 --> CH16[Ch16: Capstone]\n    CH11 --> CH16\n    CH12 --> CH16\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "project-domain-smartbuild-construction-management-system",
      children: "Project Domain: SmartBuild Construction Management System"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SmartBuild"
      }), " is a cloud-based construction project management platform that enables general contractors, subcontractors, and project owners to manage construction projects from planning through completion. The system handles document management, scheduling, budget tracking, change orders, inspections, and team communication."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Project creation with scope, budget, and timeline"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document management (blueprints, permits, contracts)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scheduling with Gantt charts and critical path tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Budget and cost tracking with change order management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inspection and quality checklists"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-time team communication and notifications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Role-based access for contractors, subs, owners, inspectors"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phase-1-process-selection-and-planning",
      children: "Phase 1: Process Selection and Planning"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process-model",
      children: "Process Model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We adopt an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agile/Scrum"
      }), " process with 6 two-week sprints:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "gantt\n    title SmartBuild - 6 Sprint Development Plan\n    dateFormat  YYYY-MM-DD\n    \n    section Sprint 1: Foundation\n    Requirements & Architecture  :a1, 2025-06-02, 10d\n    Database Schema & Auth Module :a2, after a1, 7d\n    \n    section Sprint 2: Core API\n    Project & Document Management :b1, after a2, 10d\n    Budget & Cost Tracking        :b2, after b1, 7d\n    \n    section Sprint 3: Scheduling\n    Scheduler & Gantt Module      :c1, after b2, 10d\n    Notification Service          :c2, after c1, 7d\n    \n    section Sprint 4: Quality & Inspections\n    Inspection & Checklists       :d1, after c2, 10d\n    Reporting Dashboard           :d2, after d1, 7d\n    \n    section Sprint 5: Integration\n    API Integration & Testing     :e1, after d2, 10d\n    Security Audit & Performance  :e2, after e1, 7d\n    \n    section Sprint 6: Deployment\n    CI/CD Pipeline                :f1, after e2, 7d\n    Blue-Green Deployment         :f2, after f1, 5d\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scrum-configuration",
      children: "Scrum Configuration"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Artifact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sprint duration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 weeks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Product Owner"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Construction industry stakeholder"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scrum Master"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Technical lead (rotating)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Development Team"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-7 members (2 frontend, 2 backend, 1 DevOps, 1 QA, 1 SM)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Velocity target"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25-35 story points/sprint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Definition of Done"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code reviewed, tested (unit + integration), documented, deployed to staging"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "work-breakdown-structure-wbs",
      children: "Work Breakdown Structure (WBS)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Estimated Effort"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1.0 Requirements"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.1 Stakeholder interviews"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40 hrs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.2 SRS document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30 hrs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.3 Use case diagrams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15 hrs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2.0 Architecture"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.1 System design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "35 hrs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.2 Technology selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 hrs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.3 ADRs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15 hrs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3.0 Backend"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.1 Auth service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 hrs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.2 Project service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60 hrs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.3 Document service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45 hrs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.4 Budget service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "55 hrs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.5 Schedule service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "65 hrs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.6 Notification service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "35 hrs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.7 Inspection service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40 hrs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4.0 Frontend"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.1 Dashboard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40 hrs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.2 Project management UI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 hrs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.3 Gantt chart component"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45 hrs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.4 Document viewer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30 hrs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "5.0 Testing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.1 Unit tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60 hrs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.2 Integration tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40 hrs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.3 E2E tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "35 hrs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.4 Performance tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 hrs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "6.0 DevOps"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.1 CI/CD pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25 hrs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.2 Infrastructure as code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30 hrs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.3 Monitoring setup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 hrs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "milestones",
      children: "Milestones"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Milestone"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sprint"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Date"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deliverable"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M1: Foundation Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sprint 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Week 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database schema, auth, project API"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M2: Core Features Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sprint 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Week 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Projects, documents, budget APIs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M3: Scheduling Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sprint 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Week 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gantt charts, notifications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M4: Quality Features Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sprint 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Week 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inspections, dashboards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M5: System Integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sprint 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Week 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All APIs integrated, security review"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M6: Production Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sprint 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Week 12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Live system with monitoring"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phase-2-requirements-engineering",
      children: "Phase 2: Requirements Engineering"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "functional-requirements-20",
      children: "Functional Requirements (20+)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Priority"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "User Story"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System shall support user registration with email/password and role selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US-01"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System shall authenticate via JWT with refresh tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US-01"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-03"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System shall support role-based access (admin, contractor, subcontractor, owner, inspector)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US-02"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System shall support project creation with name, address, budget, timeline, and scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US-03"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System shall support uploading, storing, and versioning documents (PDF, DWG, images)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US-04"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System shall support document approval workflows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US-04"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-07"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System shall support budget creation with cost categories and line items"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US-05"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-08"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System shall track actual costs against budget in real time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US-05"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-09"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System shall support change order creation, approval, and budget adjustment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US-05"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System shall support project scheduling with task dependencies and milestones"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US-06"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System shall display Gantt charts with critical path highlighting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US-06"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System shall send notifications on task updates, document approvals, and budget changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US-07"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System shall support inspection checklists with pass/fail/n/a per item"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US-08"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System shall record inspection results with photos and signatures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US-08"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System shall generate PDF inspection reports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US-08"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System shall provide a dashboard with project status, budget health, and schedule compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US-09"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System shall support daily logs (weather, crew, hours worked, materials used)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US-10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System shall support full-text search across projects, documents, and tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US-11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System shall provide audit logging of all critical operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US-12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System shall support export of reports to PDF and CSV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US-13"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System shall support multi-tenant isolation (each contractor sees only their projects)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US-02"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System shall support real-time collaboration on task boards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US-14"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "non-functional-requirements-10",
      children: "Non-Functional Requirements (10+)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Measurement"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFR-01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API response time (p95)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 300ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load testing with k6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFR-02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99.9% uptime (8.76 hrs/yr max)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prometheus + Grafana"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFR-03"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Argon2id password hashing, JWT with RS256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security audit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFR-04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data encryption at rest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES-256-GCM for PII and documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema review"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFR-05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data encryption in transit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS 1.3 minimum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSL Labs test"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFR-06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test coverage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 85% line coverage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jest coverage report"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFR-07"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Support 1000 concurrent users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load test"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFR-08"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-tenant data isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No cross-tenant data leakage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Penetration test"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFR-09"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API documentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenAPI 3.0 with Swagger UI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spec validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFR-10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accessibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WCAG 2.1 AA compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accessibility audit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFR-11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backup and recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RPO < 15 min, RTO < 1 hr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disaster recovery test"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFR-12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audit trail completeness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All state-changing operations logged with actor, timestamp, before/after"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audit log review"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-stories",
      children: "User Stories"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "US-01: As a contractor, I want to register my company and add team members with roles so that we can collaboratively manage projects.\n  Acceptance: Email + password registration, role assignment (admin, project manager, estimator), team invitation via email.\n\nUS-02: As a contractor, I want to create a construction project with address, budget, and timeline so that I can start planning work.\n  Acceptance: Project form with name, address, total budget, start/end dates. Project dashboard created on submission.\n\nUS-03: As a project manager, I want to upload blueprints and contracts so that the team can access them.\n  Acceptance: Drag-drop upload, version tracking, permission-based access, preview for PDF and images.\n\nUS-04: As a project manager, I want to create a budget with line items so that I can track costs.\n  Acceptance: Budget categories (materials, labor, equipment, permits), line items with estimated cost, actual cost tracking.\n\nUS-05: As a project manager, I want to create a project schedule with task dependencies so that I can track progress.\n  Acceptance: Task creation with duration, dependencies, assignees. Gantt chart visualization.\n\nUS-06: As a subcontractor, I want to receive notifications when I am assigned a task so that I can start work promptly.\n  Acceptance: In-app notification + email. Notification preferences configurable.\n\nUS-07: As an inspector, I want to complete inspection checklists on-site using a mobile device so that I can record findings.\n  Acceptance: Checklist templates, pass/fail/n/a per item, photo attachment, digital signature.\n\nUS-08: As a project owner, I want to view a dashboard showing project health so that I can assess status at a glance.\n  Acceptance: Budget burnup, schedule progress, open issues, recent activity.\n\nUS-09: As a project manager, I want to create change orders so that I can manage scope changes.\n  Acceptance: Change order with description, cost impact, schedule impact. Approval workflow.\n\nUS-10: As a contractor, I want to log daily site activities so that I have a record of progress.\n  Acceptance: Daily log with weather, crew count, hours worked, materials received, work completed.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-cases",
      children: "Use Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Precondition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Postcondition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UC-01: Register Company"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contractor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Register company and create admin account"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Company created, admin user activated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UC-02: Create Project"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project Manager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create new construction project with details"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User authenticated, role = admin/PM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project created in active status"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UC-03: Upload Document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project Manager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Upload document to project repository"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User authenticated, project exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document stored, version created"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UC-04: Approve Document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inspector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Review and approve submitted document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document in \"pending_review\" status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document status = \"approved\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UC-05: Track Budget"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project Manager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View and update budget line items"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User authenticated, project exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Budget updated with change tracking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UC-06: Create Change Order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project Manager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create change order with cost/schedule impact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User authenticated, project exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Change order created for approval"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UC-07: Build Schedule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project Manager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create Gantt chart with dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User authenticated, project exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schedule generated with critical path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UC-08: Perform Inspection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inspector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete inspection checklist on site"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inspection scheduled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Results recorded, report generated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UC-09: View Dashboard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Owner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View consolidated project dashboard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User authenticated, project exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dashboard rendered with live data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UC-10: Export Report"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project Manager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Export project report to PDF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User authenticated, project exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PDF generated and downloadable"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phase-3-architecture",
      children: "Phase 3: Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "system-architecture-overview",
      children: "System Architecture Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Client Layer\"\n        WEB[React SPA] \n        MOBILE[React Native Mobile]\n    end\n    \n    subgraph \"API Gateway\"\n        GW[API Gateway / Kong]\n        GW --> RATE[Rate Limiter]\n        GW --> AUTH[Auth Middleware]\n    end\n    \n    subgraph \"Microservices\"\n        AUTH_SVC[Auth Service]\n        PROJ_SVC[Project Service]\n        DOC_SVC[Document Service]\n        BUDGET_SVC[Budget Service]\n        SCHED_SVC[Schedule Service]\n        NOTIF_SVC[Notification Service]\n        INSP_SVC[Inspection Service]\n        REPORT_SVC[Report Service]\n    end\n    \n    subgraph \"Event Bus\"\n        KAFKA[Kafka / Event Stream]\n    end\n    \n    subgraph \"Data Layer\"\n        PG[(PostgreSQL - Primary)]\n        REDIS[(Redis - Cache)]\n        S3[(S3 - Document Store)]\n        ES[(ElasticSearch - Search)]\n    end\n    \n    WEB --> GW\n    MOBILE --> GW\n    GW --> AUTH_SVC\n    GW --> PROJ_SVC\n    GW --> DOC_SVC\n    GW --> BUDGET_SVC\n    GW --> SCHED_SVC\n    GW --> INSP_SVC\n    GW --> REPORT_SVC\n    \n    PROJ_SVC -->|Event| KAFKA\n    DOC_SVC -->|Event| KAFKA\n    BUDGET_SVC -->|Event| KAFKA\n    SCHED_SVC -->|Event| KAFKA\n    \n    KAFKA --> NOTIF_SVC\n    KAFKA --> ES\n    \n    AUTH_SVC --> PG\n    PROJ_SVC --> PG\n    BUDGET_SVC --> PG\n    SCHED_SVC --> PG\n    INSP_SVC --> PG\n    \n    DOC_SVC --> S3\n    PROJ_SVC --> REDIS\n    REPORT_SVC --> REDIS\n    \n    subgraph \"CQRS\"\n        PROJ_SVC -->|Write| PG\n        ES -->|Read| REPORT_SVC\n    end\n    \n    subgraph \"Observability\"\n        PROM[Prometheus] --> GRAF[Grafana]\n        API -->|Metrics| PROM\n        LOKI[Loki - Logs]\n        TEMPO[Tempo - Traces]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "architecture-style-microservices--event-driven--cqrs",
      children: "Architecture Style: Microservices + Event-Driven + CQRS"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rationale"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Microservices"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service-per-domain (auth, project, budget, schedule, etc.)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Independent deployability, team autonomy, technology flexibility"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Event-Driven"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kafka event bus for cross-service communication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loose coupling, async processing, audit trail"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CQRS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate read/write paths for reporting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimise reads (ElasticSearch) without impacting write performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "API Gateway"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kong for routing, rate limiting, auth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralised cross-cutting concerns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Saga Pattern"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed transactions via Kafka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle multi-service operations (e.g., change order → budget + schedule)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Strangler Fig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incremental migration path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allow phased adoption of microservices"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-layer-architecture",
      children: "4-Layer Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Layer 4: Presentation\"\n        REACT[React Components]\n        MOBILE[React Native Screens]\n    end\n    \n    subgraph \"Layer 3: API / Application\"\n        REST[REST Controllers]\n        WS[WebSocket Handlers]\n        GRAPHQL[GraphQL Resolvers]\n    end\n    \n    subgraph \"Layer 2: Domain / Service\"\n        PROJ_DOMAIN[Project Domain]\n        BUDGET_DOMAIN[Budget Domain]\n        SCHED_DOMAIN[Schedule Domain]\n        DOC_DOMAIN[Document Domain]\n    end\n    \n    subgraph \"Layer 1: Infrastructure / Data\"\n        REPO[Repositories]\n        EVENT[Event Publishers]\n        FILE[File Storage]\n        CACHE[Cache Provider]\n    end\n    \n    REACT --> REST\n    MOBILE --> WS\n    REST --> PROJ_DOMAIN\n    REST --> BUDGET_DOMAIN\n    WS --> SCHED_DOMAIN\n    \n    PROJ_DOMAIN --> REPO\n    PROJ_DOMAIN --> EVENT\n    BUDGET_DOMAIN --> REPO\n    BUDGET_DOMAIN --> EVENT\n    SCHED_DOMAIN --> REPO\n    DOC_DOMAIN --> FILE\n    DOC_DOMAIN --> REPO\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "technology-stack",
      children: "Technology Stack"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Technology"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rationale"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Frontend"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "React 18 + TypeScript + Tailwind CSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Industry standard, component reuse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mobile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "React Native + Expo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code sharing with web"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "API Gateway"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Battle-tested, plugin ecosystem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Backend"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node.js + Express + TypeScript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast development, type safety"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Database"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL 16 + TimescaleDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACID, time-series for metrics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cache"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session store, rate limiting, pub/sub"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ElasticSearch 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-text search across entities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Event Bus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apache Kafka + Schema Registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Durable event stream, schema evolution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Object Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MinIO (S3-compatible)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Container"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Docker + Kubernetes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Orchestration, scaling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CI/CD"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub Actions + ArgoCD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GitOps deployment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Monitoring"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prometheus + Grafana + Loki + Tempo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metrics, logs, traces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "API Docs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenAPI 3.0 + Swagger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standardised documentation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "service-boundaries",
      children: "Service Boundaries"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Service"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Responsibility"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Owned"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Events Published"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Auth Service"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User management, roles, authentication, JWT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Users, Roles, Permissions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UserRegistered, RoleChanged"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Project Service"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project CRUD, team membership, settings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Projects, ProjectMembers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ProjectCreated, MemberAdded"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Document Service"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document upload, versioning, approval workflows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Documents, DocumentVersions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DocumentUploaded, DocumentApproved"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Budget Service"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Budget lines, actual costs, change orders, forecasts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Budgets, CostLines, ChangeOrders"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BudgetUpdated, ChangeOrderCreated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schedule Service"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tasks, dependencies, Gantt, critical path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tasks, Dependencies, Milestones"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TaskUpdated, MilestoneReached"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Notification Service"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email, in-app, push notifications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NotificationLogs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(consumer only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inspection Service"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checklists, inspection results, reports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checklists, InspectionResults"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "InspectionCompleted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Report Service"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PDF/CSV generation, dashboard aggregation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ReportCache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(consumer only)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phase-4-detailed-design",
      children: "Phase 4: Detailed Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "domain-model",
      children: "Domain Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Company\n  id: UUID\n  name: string\n  address: Address\n  subscriptionTier: Tier\n  createdAt: DateTime\n\nUser\n  id: UUID\n  companyId: UUID\n  email: string (unique)\n  passwordHash: string\n  name: string\n  role: enum (admin, pm, estimator, inspector, subcontractor, owner)\n  phone: string\n  avatarUrl: string?\n  isActive: boolean\n\nProject\n  id: UUID\n  companyId: UUID\n  name: string\n  address: Address\n  totalBudget: Money\n  startDate: Date\n  endDate: Date\n  status: enum (planning, active, on_hold, completed, cancelled)\n  scope: text\n  createdAt: DateTime\n\nDocument\n  id: UUID\n  projectId: UUID\n  uploadedBy: UUID\n  name: string\n  category: enum (blueprint, contract, permit, photo, report, other)\n  fileUrl: string\n  fileSize: number\n  mimeType: string\n  version: int\n  status: enum (draft, pending_review, approved, rejected)\n  metadata: JSON\n\nBudget\n  id: UUID\n  projectId: UUID\n  categories: BudgetCategory[]\n  totalEstimated: Money\n  totalActual: Money\n  contingencyPercent: number\n  lastUpdated: DateTime\n\nBudgetCategory\n  id: UUID\n  budgetId: UUID\n  name: string\n  estimatedAmount: Money\n  actualAmount: Money\n  lineItems: BudgetLineItem[]\n\nChangeOrder\n  id: UUID\n  projectId: UUID\n  title: string\n  description: text\n  costImpact: Money\n  scheduleImpact: int (days)\n  status: enum (draft, pending_approval, approved, rejected)\n  createdBy: UUID\n  approvedBy: UUID?\n\nTask\n  id: UUID\n  projectId: UUID\n  name: string\n  description: text\n  duration: int (days)\n  startDate: Date\n  endDate: Date\n  assigneeId: UUID?\n  status: enum (not_started, in_progress, completed, delayed)\n  progress: int (0-100)\n  dependencies: TaskDependency[]\n  milestone: boolean\n\nInspectionChecklist\n  id: UUID\n  projectId: UUID\n  name: string\n  category: string\n  items: ChecklistItem[]\n  scheduledDate: Date\n  completedDate: Date?\n  inspectorId: UUID\n  status: enum (scheduled, in_progress, completed)\n\nDailyLog\n  id: UUID\n  projectId: UUID\n  date: Date\n  weather: string\n  temperature: number\n  crewCount: int\n  hoursWorked: number\n  materialsReceived: string[]\n  workCompleted: text\n  issues: text\n  createdBy: UUID\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phase-5-implementation",
      children: "Phase 5: Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "smartbuildsystem-core-system-orchestrator",
      children: "SmartBuildSystem: Core System Orchestrator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface SystemConfig {\n  services: { name: string; enabled: boolean; port: number; replicas: number }[];\n  database: { host: string; port: number; name: string; poolSize: number };\n  kafka: { brokers: string[]; topicPrefix: string; partitions: number };\n  redis: { host: string; port: number; keyPrefix: string };\n  storage: { endpoint: string; bucket: string; region: string };\n  auth: { jwtSecret: string; tokenExpiry: number; refreshExpiry: number };\n}\n\ninterface ServiceStatus {\n  name: string; healthy: boolean; uptime: number; lastHealthCheck: Date;\n  responseTime: number; version: string;\n}\n\nclass SmartBuildSystem {\n  private readonly config: SystemConfig;\n  private services: Map<string, ServiceStatus> = new Map();\n  private eventBusInitialized = false;\n\n  constructor(config: SystemConfig) {\n    this.config = config;\n  }\n\n  public async initialize(): Promise<{ success: boolean; servicesStarted: number; errors: string[] }> {\n    const errors: string[] = [];\n    let started = 0;\n\n    console.log('SmartBuild v2.0 initializing...');\n    console.log(`Target ${this.config.services.length} services`);\n\n    for (const svc of this.config.services) {\n      if (svc.enabled) {\n        try {\n          const status: ServiceStatus = {\n            name: svc.name, healthy: true, uptime: 0,\n            lastHealthCheck: new Date(), responseTime: 0, version: '2.0.0',\n          };\n          this.services.set(svc.name, status);\n          started++;\n          console.log(`  ✓ ${svc.name} started on port ${svc.port}`);\n        } catch (error) {\n          errors.push(`Failed to start ${svc.name}: ${error}`);\n        }\n      }\n    }\n\n    try {\n      await this.connectDatabase();\n      await this.connectEventBus();\n      await this.connectCache();\n      await this.connectStorage();\n    } catch (error) {\n      errors.push(`Infrastructure connection failed: ${error}`);\n      return { success: false, servicesStarted: started, errors };\n    }\n\n    console.log(`SmartBuild initialized: ${started}/${this.config.services.length} services`);\n    return { success: errors.length === 0, servicesStarted: started, errors };\n  }\n\n  private async connectDatabase(): Promise<void> {\n    console.log(`Connecting to PostgreSQL at ${this.config.database.host}:${this.config.database.port}/${this.config.database.name}`);\n  }\n\n  private async connectEventBus(): Promise<void> {\n    console.log(`Connecting to Kafka at ${this.config.kafka.brokers.join(', ')}`);\n    this.eventBusInitialized = true;\n  }\n\n  private async connectCache(): Promise<void> {\n    console.log(`Connecting to Redis at ${this.config.redis.host}:${this.config.redis.port}`);\n  }\n\n  private async connectStorage(): Promise<void> {\n    console.log(`Connecting to S3-compatible storage at ${this.config.storage.endpoint}`);\n  }\n\n  public async healthCheck(): Promise<{ overall: 'healthy' | 'degraded' | 'down'; services: ServiceStatus[] }> {\n    const statuses = Array.from(this.services.values());\n    const healthy = statuses.filter(s => s.healthy).length;\n    const total = statuses.length;\n    for (const s of statuses) {\n      s.lastHealthCheck = new Date();\n      s.uptime += 1;\n    }\n    return {\n      overall: healthy === total ? 'healthy' : healthy > 0 ? 'degraded' : 'down',\n      services: statuses,\n    };\n  }\n\n  public async publishEvent(topic: string, event: object): Promise<boolean> {\n    if (!this.eventBusInitialized) {\n      console.warn('Event bus not initialized, event queued locally');\n      return false;\n    }\n    console.log(`Event published to ${this.config.kafka.topicPrefix}.${topic}:`, JSON.stringify(event).substring(0, 100));\n    return true;\n  }\n\n  public getConfig(): SystemConfig { return { ...this.config }; }\n\n  public getService(name: string): ServiceStatus | undefined {\n    return this.services.get(name);\n  }\n}\n\n// Example usage\nconst smartBuild = new SmartBuildSystem({\n  services: [\n    { name: 'auth-service', enabled: true, port: 3001, replicas: 2 },\n    { name: 'project-service', enabled: true, port: 3002, replicas: 3 },\n    { name: 'document-service', enabled: true, port: 3003, replicas: 2 },\n    { name: 'budget-service', enabled: true, port: 3004, replicas: 2 },\n    { name: 'schedule-service', enabled: true, port: 3005, replicas: 3 },\n    { name: 'notification-service', enabled: true, port: 3006, replicas: 1 },\n    { name: 'inspection-service', enabled: true, port: 3007, replicas: 2 },\n    { name: 'report-service', enabled: true, port: 3008, replicas: 1 },\n  ],\n  database: { host: 'postgres-cluster', port: 5432, name: 'smartbuild', poolSize: 20 },\n  kafka: { brokers: ['kafka-1:9092', 'kafka-2:9092'], topicPrefix: 'sb', partitions: 6 },\n  redis: { host: 'redis-cluster', port: 6379, keyPrefix: 'sb:' },\n  storage: { endpoint: 'https://minio.smartbuild.io', bucket: 'smartbuild-docs', region: 'us-east-1' },\n  auth: { jwtSecret: process.env['JWT_SECRET'] ?? 'dev-secret', tokenExpiry: 3600, refreshExpiry: 604800 },\n});\n\n// Auth controller\nclass AuthController {\n  constructor(private readonly system: SmartBuildSystem) {}\n\n  public async register(email: string, password: string, name: string, companyName: string, role: string): Promise<{ userId: string; token: string }> {\n    console.log(`Registering user ${email} for ${companyName}`);\n    const token = 'jwt-placeholder';\n    await this.system.publishEvent('user.registered', { email, name, companyName, role });\n    return { userId: crypto.randomUUID(), token };\n  }\n\n  public async login(email: string, password: string): Promise<{ token: string; refreshToken: string } | null> {\n    console.log(`Authenticating user ${email}`);\n    return { token: 'jwt-placeholder', refreshToken: crypto.randomUUID() };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "budget-service-with-event-sourcing",
      children: "Budget Service with Event Sourcing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface BudgetEvent {\n  type: 'BUDGET_CREATED' | 'COST_ADDED' | 'CHANGE_ORDER_APPROVED' | 'BUDGET_ADJUSTED';\n  projectId: string;\n  amount: number;\n  timestamp: Date;\n  userId: string;\n  metadata: Record<string, unknown>;\n}\n\nclass BudgetService {\n  private events: BudgetEvent[] = [];\n  private snapshots: Map<string, { totalBudget: number; spent: number; remaining: number }> = new Map();\n\n  constructor(private readonly system: SmartBuildSystem) {}\n\n  public async createBudget(projectId: string, totalAmount: number, userId: string): Promise<void> {\n    const event: BudgetEvent = {\n      type: 'BUDGET_CREATED',\n      projectId,\n      amount: totalAmount,\n      timestamp: new Date(),\n      userId,\n      metadata: {},\n    };\n    this.applyEvent(event);\n    await this.system.publishEvent('budget.created', event);\n  }\n\n  public async addActualCost(projectId: string, cost: number, description: string, userId: string): Promise<{ overBudget: boolean; remaining: number }> {\n    const event: BudgetEvent = {\n      type: 'COST_ADDED',\n      projectId,\n      amount: cost,\n      timestamp: new Date(),\n      userId,\n      metadata: { description },\n    };\n    this.applyEvent(event);\n    await this.system.publishEvent('budget.costAdded', event);\n    const snapshot = this.snapshots.get(projectId);\n    if (!snapshot) return { overBudget: false, remaining: 0 };\n    return { overBudget: snapshot.remaining < 0, remaining: snapshot.remaining };\n  }\n\n  public async approveChangeOrder(projectId: string, amount: number, changeOrderId: string, userId: string): Promise<void> {\n    const event: BudgetEvent = {\n      type: 'CHANGE_ORDER_APPROVED',\n      projectId,\n      amount,\n      timestamp: new Date(),\n      userId,\n      metadata: { changeOrderId },\n    };\n    this.applyEvent(event);\n    await this.system.publishEvent('budget.changeOrderApproved', event);\n  }\n\n  private applyEvent(event: BudgetEvent): void {\n    this.events.push(event);\n    switch (event.type) {\n      case 'BUDGET_CREATED':\n        this.snapshots.set(event.projectId, { totalBudget: event.amount, spent: 0, remaining: event.amount });\n        break;\n      case 'COST_ADDED': {\n        const s = this.snapshots.get(event.projectId);\n        if (s) { s.spent += event.amount; s.remaining = s.totalBudget - s.spent; }\n        break;\n      }\n      case 'CHANGE_ORDER_APPROVED': {\n        const s = this.snapshots.get(event.projectId);\n        if (s) { s.totalBudget += event.amount; s.remaining = s.totalBudget - s.spent; }\n        break;\n      }\n    }\n  }\n\n  public getBudgetStatus(projectId: string): { totalBudget: number; spent: number; remaining: number; pctUsed: number } | null {\n    const s = this.snapshots.get(projectId);\n    if (!s) return null;\n    return { ...s, pctUsed: s.totalBudget > 0 ? Math.round((s.spent / s.totalBudget) * 100) : 0 };\n  }\n\n  public replayEvents(projectId: string): void {\n    this.snapshots.delete(projectId);\n    for (const e of this.events.filter(e => e.projectId === projectId)) {\n      this.applyEvent(e);\n    }\n  }\n\n  public getChangeOrderImpact(projectId: string): { totalApproved: number; pendingCount: number } {\n    const approvedChanges = this.events\n      .filter(e => e.projectId === projectId && e.type === 'CHANGE_ORDER_APPROVED');\n    return {\n      totalApproved: approvedChanges.reduce((s, e) => s + e.amount, 0),\n      pendingCount: 0,\n    };\n  }\n}\n\n// Schedule service with critical path calculation\ninterface TaskNode {\n  id: string; name: string; duration: number;\n  dependencies: string[]; earlyStart: number; earlyFinish: number;\n  lateStart: number; lateFinish: number; slack: number;\n}\n\nclass ScheduleService {\n  public calculateCriticalPath(tasks: TaskNode[]): { criticalPath: string[]; totalDuration: number; slackByTask: Record<string, number> } {\n    // Forward pass: calculate early start and early finish\n    const nodeMap = new Map(tasks.map(t => [t.id, { ...t, earlyStart: 0, earlyFinish: 0, lateStart: 0, lateFinish: 0, slack: 0 }]));\n    const sorted = this.topologicalSort(tasks);\n\n    for (const id of sorted) {\n      const node = nodeMap.get(id)!;\n      if (node.dependencies.length === 0) {\n        node.earlyStart = 0;\n      } else {\n        node.earlyStart = Math.max(...node.dependencies.map(d => nodeMap.get(d)?.earlyFinish ?? 0));\n      }\n      node.earlyFinish = node.earlyStart + node.duration;\n    }\n\n    // Backward pass: calculate late start and late finish\n    const maxFinish = Math.max(...Array.from(nodeMap.values()).map(n => n.earlyFinish));\n    for (const id of [...sorted].reverse()) {\n      const node = nodeMap.get(id)!;\n      const successors = Array.from(nodeMap.values()).filter(n => n.dependencies.includes(id));\n      if (successors.length === 0) {\n        node.lateFinish = maxFinish;\n      } else {\n        node.lateFinish = Math.min(...successors.map(s => s.lateStart));\n      }\n      node.lateStart = node.lateFinish - node.duration;\n      node.slack = node.lateStart - node.earlyStart;\n    }\n\n    const criticalPath = Array.from(nodeMap.values())\n      .filter(n => n.slack === 0)\n      .sort((a, b) => a.earlyStart - b.earlyStart)\n      .map(n => n.name);\n\n    const slackByTask: Record<string, number> = {};\n    for (const [id, node] of nodeMap) slackByTask[id] = node.slack;\n\n    return { criticalPath, totalDuration: maxFinish, slackByTask };\n  }\n\n  private topologicalSort(tasks: TaskNode[]): string[] {\n    const visited = new Set<string>();\n    const result: string[] = [];\n    const temp = new Set<string>();\n    const adj = new Map(tasks.map(t => [t.id, t.dependencies]));\n\n    const dfs = (id: string): void => {\n      if (temp.has(id)) throw new Error('Cycle detected in task dependencies');\n      if (visited.has(id)) return;\n      temp.add(id);\n      for (const dep of adj.get(id) ?? []) dfs(dep);\n      temp.delete(id);\n      visited.add(id);\n      result.push(id);\n    };\n\n    for (const task of tasks) dfs(task.id);\n    return result;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "notification-service-with-template-engine",
      children: "Notification Service with Template Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Notification {\n  id: string; userId: string; type: string; title: string; body: string;\n  channel: 'email' | 'in_app' | 'push'; status: 'pending' | 'sent' | 'failed';\n  read: boolean; createdAt: Date;\n}\n\nclass NotificationService {\n  private templates: Map<string, (data: Record<string, string>) => { title: string; body: string }> = new Map();\n  private notifications: Notification[] = [];\n\n  constructor() {\n    this.registerTemplate('task.assigned', (data) => ({\n      title: `New Task: ${data['taskName']}`,\n      body: `You have been assigned \"${data['taskName']}\" in project ${data['projectName']}. Due: ${data['dueDate']}.`,\n    }));\n    this.registerTemplate('document. approved', (data) => ({\n      title: 'Document Approved',\n      body: `\"${data['documentName']}\" has been approved by ${data['approverName']}.`,\n    }));\n    this.registerTemplate('change_order.created', (data) => ({\n      title: `Change Order: ${data['changeOrderTitle']}`,\n      body: `A change order for $${data['costImpact']} has been created by ${data['createdByName']}. Pending approval.`,\n    }));\n    this.registerTemplate('inspection.scheduled', (data) => ({\n      title: 'Inspection Scheduled',\n      body: `An inspection for \"${data['checklistName']}\" is scheduled for ${data['scheduledDate']} at ${data['projectName']}.`,\n    }));\n    this.registerTemplate('budget.alert', (data) => ({\n      title: 'Budget Alert',\n      body: `Project ${data['projectName']} has used ${data['pctUsed']}% of budget ($${data['spent']} of $${data['budget']}).`,\n    }));\n  }\n\n  private registerTemplate(type: string, renderer: (data: Record<string, string>) => { title: string; body: string }): void {\n    this.templates.set(type, renderer);\n  }\n\n  public send(userId: string, type: string, data: Record<string, string>, channel: Notification['channel']): Notification {\n    const template = this.templates.get(type);\n    if (!template) throw new Error(`Unknown notification type: ${type}`);\n    const { title, body } = template(data);\n    const notification: Notification = {\n      id: crypto.randomUUID(), userId, type, title, body,\n      channel, status: 'pending', read: false, createdAt: new Date(),\n    };\n    this.notifications.push(notification);\n    this.deliver(notification);\n    return notification;\n  }\n\n  private deliver(notification: Notification): void {\n    console.log(`[${notification.channel.toUpperCase()}] To: ${notification.userId} | ${notification.title}`);\n    notification.status = 'sent';\n  }\n\n  public markRead(notificationId: string): void {\n    const n = this.notifications.find(n => n.id === notificationId);\n    if (n) n.read = true;\n  }\n\n  public getUnread(userId: string): Notification[] {\n    return this.notifications.filter(n => n.userId === userId && !n.read);\n  }\n\n  public getHistory(userId: string, limit: number = 50): Notification[] {\n    return this.notifications\n      .filter(n => n.userId === userId)\n      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())\n      .slice(0, limit);\n  }\n\n  public getStats(): { total: number; sent: number; failed: number; byChannel: Record<string, number> } {\n    const byChannel: Record<string, number> = {};\n    for (const n of this.notifications) byChannel[n.channel] = (byChannel[n.channel] ?? 0) + 1;\n    return {\n      total: this.notifications.length,\n      sent: this.notifications.filter(n => n.status === 'sent').length,\n      failed: this.notifications.filter(n => n.status === 'failed').length,\n      byChannel,\n    };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phase-6-risk-assessment",
      children: "Phase 6: Risk Assessment"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "risk-assessment-matrix",
      children: "Risk Assessment Matrix"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Risk Matrix (Probability × Impact)\"\n        direction LR\n        L1[Likelihood]\n    end\n    \n    subgraph \"Impact\"\n        I1[Negligible]\n        I2[Minor]\n        I3[Moderate]\n        I4[Critical]\n        I5[Cata-strophic]\n    end\n    \n    subgraph \"Probability\"\n        P5[Very Likely]\n        P4[Likely]\n        P3[Possible]\n        P2[Unlikely]\n        P1[Rare]\n    end\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Risk ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Risk Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Probability (1-5)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact (1-5)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Exposure (P×I)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Response Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation Plan"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R-01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scope creep due to changing construction regulations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 (High)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mitigate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weekly regulatory review, buffer in backlog, change control board"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R-02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integration complexity with legacy construction ERP systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15 (High)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mitigate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API-first design, adapter pattern, contract testing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R-03"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance degradation with large Gantt charts (>1000 tasks)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 (High)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mitigate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual scrolling, server-side rendering, pagination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R-04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data migration errors from existing spreadsheets/software"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 (High)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accept/Monitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Staged migration, validation scripts, rollback plan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R-05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Team member turnover (key developer leaves)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 (Medium)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mitigate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-training, documentation, pair programming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R-06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security vulnerability in third-party document viewer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 (Medium)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transfer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security SLA with vendor, sandboxed viewer, CSP headers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R-07"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile app performance on low-end devices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 (Medium)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mitigate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Progressive web app fallback, offline-first, image optimisation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R-08"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database contention on concurrent budget updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 (Medium)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mitigate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimistic locking, CQRS separation, async writes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R-09"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Browser compatibility issues with WebSocket notifications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 (Low)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accept"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polling fallback for IE11, graceful degradation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R-10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud provider service outage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 (Medium)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transfer/Mitigate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-AZ deployment, backup region, DR plan documented"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "riskassessmentmatrix-class",
      children: "RiskAssessmentMatrix Class"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface RiskItem {\n  id: string; description: string; probability: number; impact: number;\n  exposure: number; response: 'mitigate' | 'accept' | 'transfer' | 'avoid';\n  mitigation: string; owner: string; status: 'open' | 'monitoring' | 'closed';\n}\n\nclass RiskAssessmentMatrix {\n  private risks: RiskItem[] = [];\n\n  public addRisk(risk: Omit<RiskItem, 'id' | 'exposure' | 'status'>): RiskItem {\n    const newRisk: RiskItem = {\n      ...risk,\n      id: `R-${String(this.risks.length + 1).padStart(2, '0')}`,\n      exposure: risk.probability * risk.impact,\n      status: 'open',\n    };\n    this.risks.push(newRisk);\n    return newRisk;\n  }\n\n  public getHighExposureRisks(threshold: number = 10): RiskItem[] {\n    return this.risks.filter(r => r.exposure >= threshold && r.status !== 'closed');\n  }\n\n  public getRiskHeatmap(): { quadrant: string; risks: RiskItem[]; count: number }[] {\n    const quadrants = [\n      { quadrant: 'Critical (High P × High I)', filter: (r: RiskItem) => r.probability >= 3 && r.impact >= 4 },\n      { quadrant: 'High Priority (High P × Med I / Med P × High I)', filter: (r: RiskItem) => (r.probability >= 4 && r.impact >= 2) || (r.probability >= 2 && r.impact >= 4) },\n      { quadrant: 'Medium Priority', filter: (r: RiskItem) => r.exposure >= 6 && r.exposure < 12 },\n      { quadrant: 'Low Priority', filter: (r: RiskItem) => r.exposure < 6 },\n    ];\n    return quadrants.map(q => {\n      const risks = this.risks.filter(q.filter);\n      return { ...q, risks, count: risks.length };\n    });\n  }\n\n  public closeRisk(riskId: string): void {\n    const risk = this.risks.find(r => r.id === riskId);\n    if (risk) risk.status = 'closed';\n  }\n\n  public updateStatus(riskId: string, status: RiskItem['status']): void {\n    const risk = this.risks.find(r => r.id === riskId);\n    if (risk) risk.status = status;\n  }\n\n  public getRiskReport(): string {\n    const lines: string[] = ['=== Risk Assessment Report ==='];\n    const byExposure = [...this.risks].sort((a, b) => b.exposure - a.exposure);\n    for (const r of byExposure) {\n      const statusIcon = r.status === 'closed' ? '✓' : r.status === 'monitoring' ? '◉' : '✗';\n      lines.push(`${statusIcon} ${r.id} [${r.exposure}] ${r.description} (P=${r.probability}, I=${r.impact})`);\n      lines.push(`  Response: ${r.response} | Owner: ${r.owner} | Status: ${r.status}`);\n      lines.push(`  Mitigation: ${r.mitigation}`);\n    }\n    const open = this.risks.filter(r => r.status !== 'closed').length;\n    const high = this.getHighExposureRisks().length;\n    lines.push(`\\nSummary: ${this.risks.length} total, ${open} open, ${high} high exposure`);\n    return lines.join('\\n');\n  }\n}\n\n// Example risk assessment\nconst riskMatrix = new RiskAssessmentMatrix();\nriskMatrix.addRisk({ description: 'Scope creep from regulatory changes', probability: 4, impact: 4, response: 'mitigate', mitigation: 'Weekly regulatory scan + change board', owner: 'PM' });\nriskMatrix.addRisk({ description: 'ERP integration complexity', probability: 3, impact: 5, response: 'mitigate', mitigation: 'API adapter pattern + contract tests', owner: 'Tech Lead' });\nriskMatrix.addRisk({ description: 'Gantt chart performance', probability: 3, impact: 4, response: 'mitigate', mitigation: 'Virtual scrolling + server-side rendering', owner: 'Frontend Lead' });\nconsole.log(riskMatrix.getRiskReport());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phase-7-quality-plan",
      children: "Phase 7: Quality Plan"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-levels",
      children: "Test Levels"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target Coverage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CI/CD Gate"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Individual functions, classes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vitest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 90% lines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required to pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Integration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service + database, service + Kafka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TestContainers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required to pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Contract"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API provider/consumer contracts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All service boundaries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required to pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "API/E2E"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full HTTP request/response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supertest + Playwright"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All routes + critical user journeys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required to pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load test, stress test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A (thresholds)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Warning if p95 > 500ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAST, SCA, DAST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semgrep, Snyk, OWASP ZAP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero critical/high findings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required to pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Accessibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WCAG compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "axe-core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AA compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Warning only"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cicd-gates",
      children: "CI/CD Gates"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Gate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Threshold"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action on Failure"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ESLint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 errors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block PR merge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type checking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TypeScript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 errors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block PR merge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unit tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vitest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100% pass, > 85% coverage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block PR merge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semgrep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 critical/high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block PR merge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency audit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SCA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Snyk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block PR merge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Build"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Package"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Docker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Success"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block PR merge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integration tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vitest + TC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100% pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block deploy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E2E tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Playwright"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100% pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block deploy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p95 < 500ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Warning, manual review"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Container scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trivy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block deploy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sprintplanner-class",
      children: "SprintPlanner Class"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface SprintTask {\n  id: string; name: string; estimatedHours: number; actualHours: number;\n  assignee: string; status: 'todo' | 'in_progress' | 'review' | 'done';\n  priority: 'low' | 'medium' | 'high' | 'critical';\n  dependencies: string[];\n}\n\ninterface Sprint {\n  id: string; name: string; startDate: Date; endDate: Date;\n  capacity: number; tasks: SprintTask[]; goal: string;\n}\n\nclass SprintPlanner {\n  private sprints: Sprint[] = [];\n  private velocityHistory: number[] = [];\n\n  public createSprint(name: string, startDate: Date, endDate: Date, capacity: number, goal: string): Sprint {\n    const sprint: Sprint = {\n      id: `SP${this.sprints.length + 1}`, name, startDate, endDate,\n      capacity, tasks: [], goal,\n    };\n    this.sprints.push(sprint);\n    return sprint;\n  }\n\n  public addTask(sprintId: string, task: Omit<SprintTask, 'id' | 'actualHours'>): SprintTask {\n    const sprint = this.sprints.find(s => s.id === sprintId);\n    if (!sprint) throw new Error(`Sprint ${sprintId} not found`);\n    const newTask: SprintTask = { ...task, id: `T${sprint.tasks.length + 1}`, actualHours: 0 };\n    sprint.tasks.push(newTask);\n    return newTask;\n  }\n\n  public updateTask(sprintId: string, taskId: string, updates: Partial<SprintTask>): void {\n    const sprint = this.sprints.find(s => s.id === sprintId);\n    const task = sprint?.tasks.find(t => t.id === taskId);\n    if (task) Object.assign(task, updates);\n  }\n\n  public getSprintBurndown(sprintId: string): { day: number; remainingHours: number; ideal: number }[] {\n    const sprint = this.sprints.find(s => s.id === sprintId);\n    if (!sprint) return [];\n    const totalDays = Math.ceil((sprint.endDate.getTime() - sprint.startDate.getTime()) / (1000 * 60 * 60 * 24));\n    const totalHours = sprint.tasks.reduce((s, t) => s + t.estimatedHours, 0);\n    const completedHours = sprint.tasks.filter(t => t.status === 'done').reduce((s, t) => s + t.estimatedHours, 0);\n    const dailyBurnRate = totalHours / totalDays;\n\n    const burndown: { day: number; remainingHours: number; ideal: number }[] = [];\n    for (let day = 0; day <= totalDays; day++) {\n      burndown.push({\n        day,\n        remainingHours: totalHours - completedHours - dailyBurnRate * day,\n        ideal: totalHours - dailyBurnRate * day,\n      });\n    }\n    return burndown;\n  }\n\n  public getSprintProgress(sprintId: string): { pctComplete: number; onTrack: boolean; tasksDone: number; tasksTotal: number } {\n    const sprint = this.sprints.find(s => s.id === sprintId);\n    if (!sprint) return { pctComplete: 0, onTrack: false, tasksDone: 0, tasksTotal: 0 };\n    const done = sprint.tasks.filter(t => t.status === 'done').length;\n    const pct = sprint.tasks.length > 0 ? Math.round(done / sprint.tasks.length * 100) : 0;\n    const pctTime = (Date.now() - sprint.startDate.getTime()) / (sprint.endDate.getTime() - sprint.startDate.getTime());\n    return { pctComplete: pct, onTrack: pct >= pctTime * 100, tasksDone: done, tasksTotal: sprint.tasks.length };\n  }\n\n  public recordVelocity(storyPoints: number): void {\n    this.velocityHistory.push(storyPoints);\n  }\n\n  public predictVelocity(historyCount: number = 3): { average: number; min: number; max: number; confidence: number } {\n    const recent = this.velocityHistory.slice(-historyCount);\n    if (recent.length === 0) return { average: 0, min: 0, max: 0, confidence: 0 };\n    const avg = recent.reduce((a, b) => a + b, 0) / recent.length;\n    const min = Math.min(...recent);\n    const max = Math.max(...recent);\n    const stdDev = Math.sqrt(recent.reduce((s, v) => s + Math.pow(v - avg, 2), 0) / recent.length);\n    const cv = avg > 0 ? stdDev / avg : 1;\n    return {\n      average: Math.round(avg * 10) / 10,\n      min,\n      max,\n      confidence: Math.round((1 - cv) * 100),\n    };\n  }\n\n  public generateSprintReport(sprintId: string): string {\n    const sprint = this.sprints.find(s => s.id === sprintId);\n    if (!sprint) return 'Sprint not found';\n    const progress = this.getSprintProgress(sprintId);\n    const lines: string[] = [\n      `=== Sprint Report: ${sprint.name} ===`,\n      `Goal: ${sprint.goal}`,\n      `Period: ${sprint.startDate.toDateString()} - ${sprint.endDate.toDateString()}`,\n      `Progress: ${progress.pctComplete}% (${progress.tasksDone}/${progress.tasksTotal} tasks)`,\n      `On Track: ${progress.onTrack ? 'Yes' : 'No'}`,\n      '',\n      'Tasks:',\n    ];\n    for (const t of sprint.tasks.sort((a, b) => a.status.localeCompare(b.status))) {\n      const icon = t.status === 'done' ? '✓' : t.status === 'in_progress' ? '◉' : t.status === 'review' ? '◐' : '○';\n      lines.push(`  ${icon} [${t.priority}] ${t.name} (${t.estimatedHours}h) - ${t.assignee}`);\n    }\n    return lines.join('\\n');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "qualitydashboard-class",
      children: "QualityDashboard Class"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface QualityMetric {\n  name: string; value: number; target: number; threshold: number;\n  trend: 'improving' | 'declining' | 'stable'; unit: string;\n}\n\ninterface BuildQuality {\n  buildId: string; timestamp: Date; status: 'passed' | 'failed' | 'warning';\n  metrics: QualityMetric[]; failures: string[];\n}\n\nclass QualityDashboard {\n  private builds: BuildQuality[] = [];\n  private gates: { name: string; metric: string; operator: 'gte' | 'lte' | 'eq'; threshold: number; blocking: boolean }[] = [];\n\n  public defineGate(name: string, metric: string, operator: 'gte' | 'lte' | 'eq', threshold: number, blocking: boolean = true): void {\n    this.gates.push({ name, metric, operator, threshold, blocking });\n  }\n\n  public recordBuild(buildId: string, metrics: Record<string, number>): BuildQuality {\n    const qualityMetrics: QualityMetric[] = Object.entries(metrics).map(([name, value]) => {\n      const gate = this.gates.find(g => g.metric === name);\n      const target = gate?.threshold ?? 0;\n      const trend = this.calculateTrend(name, value);\n      return { name, value, target, threshold: gate?.threshold ?? 0, trend, unit: '%' };\n    });\n\n    const failures: string[] = [];\n    for (const gate of this.gates) {\n      const metric = qualityMetrics.find(m => m.name === gate.metric);\n      if (!metric) continue;\n      const passed = gate.operator === 'gte' ? metric.value >= gate.threshold\n        : gate.operator === 'lte' ? metric.value <= gate.threshold\n        : metric.value === gate.threshold;\n      if (!passed) failures.push(`Gate \"${gate.name}\": ${metric.name}=${metric.value} (required ${gate.operator} ${gate.threshold})`);\n    }\n\n    const status: BuildQuality['status'] = failures.length === 0 ? 'passed'\n      : failures.some(f => this.gates.some(g => f.includes(g.name) && g.blocking)) ? 'failed' : 'warning';\n\n    const build: BuildQuality = { buildId, timestamp: new Date(), status, metrics: qualityMetrics, failures };\n    this.builds.push(build);\n    return build;\n  }\n\n  private calculateTrend(metricName: string, currentValue: number): 'improving' | 'declining' | 'stable' {\n    const lastThree = this.builds.slice(-3).map(b => b.metrics.find(m => m.name === metricName)?.value).filter((v): v is number => v !== undefined);\n    if (lastThree.length < 2) return 'stable';\n    const avg = lastThree.reduce((a, b) => a + b, 0) / lastThree.length;\n    if (currentValue > avg * 1.05) return 'improving';\n    if (currentValue < avg * 0.95) return 'declining';\n    return 'stable';\n  }\n\n  public getLatestStatus(): BuildQuality | null {\n    return this.builds.length > 0 ? this.builds[this.builds.length - 1] : null;\n  }\n\n  public getHistory(buildCount: number = 10): BuildQuality[] {\n    return this.builds.slice(-buildCount);\n  }\n\n  public getPassRate(): number {\n    return this.builds.length > 0\n      ? Math.round(this.builds.filter(b => b.status === 'passed').length / this.builds.length * 100)\n      : 0;\n  }\n\n  public getGateCompliance(): { gate: string; passRate: number }[] {\n    const gateStats = new Map<string, { passed: number; total: number }>();\n    for (const build of this.builds) {\n      for (const failure of build.failures) {\n        for (const gate of this.gates) {\n          if (failure.includes(gate.name)) {\n            const stats = gateStats.get(gate.name) ?? { passed: 0, total: 0 };\n            stats.total++;\n            if (build.status === 'passed') stats.passed++;\n            gateStats.set(gate.name, stats);\n          }\n        }\n      }\n    }\n    return Array.from(gateStats.entries()).map(([gate, stats]) => ({\n      gate,\n      passRate: stats.total > 0 ? Math.round(stats.passed / stats.total * 100) : 100,\n    }));\n  }\n\n  public generateReport(): string {\n    const latest = this.getLatestStatus();\n    const lines: string[] = [\n      '=== Quality Dashboard ===',\n      `Total Builds: ${this.builds.length}`,\n      `Pass Rate: ${this.getPassRate()}%`,\n      '',\n    ];\n    if (latest) {\n      lines.push(`Latest Build: ${latest.buildId} (${latest.timestamp.toISOString()})`);\n      lines.push(`Status: ${latest.status.toUpperCase()}`);\n      lines.push('');\n      lines.push('Quality Metrics:');\n      for (const m of latest.metrics) {\n        const icon = m.value >= m.target ? '✓' : '✗';\n        const trendIcon = m.trend === 'improving' ? '↑' : m.trend === 'declining' ? '↓' : '→';\n        lines.push(`  ${icon} ${m.name}: ${m.value}${m.unit} (target: ${m.target}) ${trendIcon}`);\n      }\n      if (latest.failures.length > 0) {\n        lines.push('\\nGate Failures:');\n        for (const f of latest.failures) lines.push(`  ✗ ${f}`);\n      }\n    }\n    return lines.join('\\n');\n  }\n}\n\n// Example\nconst quality = new QualityDashboard();\nquality.defineGate('Test Coverage', 'coverage', 'gte', 85, true);\nquality.defineGate('Build Time', 'buildTime', 'lte', 300, false);\nquality.defineGate('Vulnerabilities', 'vulnerabilities', 'eq', 0, true);\nquality.recordBuild('build-001', { coverage: 87, buildTime: 45, vulnerabilities: 0, testCount: 156 });\nquality.recordBuild('build-002', { coverage: 82, buildTime: 52, vulnerabilities: 1, testCount: 160 });\nconsole.log(quality.generateReport());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phase-8-deployment",
      children: "Phase 8: Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deployment-topology",
      children: "Deployment Topology"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Production Cluster (K8s)\"\n        subgraph \"Blue Environment\"\n            API_BLUE[API - Blue]\n            WEB_BLUE[Web - Blue]\n            SVC_BLUE[Services - Blue]\n        end\n        \n        subgraph \"Green Environment\"\n            API_GREEN[API - Green]\n            WEB_GREEN[Web - Green]\n            SVC_GREEN[Services - Green]\n        end\n        \n        LB[Load Balancer / Ingress] --> API_BLUE\n        LB --> WEB_BLUE\n        LB --> SVC_BLUE\n        \n        LB -.->|Traffic Switch| API_GREEN\n        LB -.->|Traffic Switch| WEB_GREEN\n        LB -.->|Traffic Switch| SVC_GREEN\n    end\n    \n    subgraph \"Data Layer\"\n        PG_PRI[PostgreSQL Primary]\n        PG_REPL[PostgreSQL Replica]\n        REDIS_CL[Redis Cluster]\n        KAFKA_CL[Kafka Cluster]\n        S3_STORE[S3 / MinIO]\n    end\n    \n    subgraph \"Monitoring\"\n        PROM[Prometheus]\n        GRAF[Grafana]\n        LOKI[Loki]\n        ALERT[AlertManager]\n    end\n    \n    API_BLUE --> PG_PRI\n    API_GREEN --> PG_PRI\n    SVC_BLUE --> KAFKA_CL\n    SVC_GREEN --> KAFKA_CL\n    \n    PG_PRI --> PG_REPL\n    KAFKA_CL --> S3_STORE\n    \n    API_BLUE -->|Metrics| PROM\n    API_GREEN -->|Logs| LOKI\n    \n    PROM --> GRAF\n    PROM --> ALERT\n    \n    subgraph \"CI/CD\"\n        GHA[GitHub Actions] --> REG[Container Registry]\n        REG --> ARGO[ArgoCD]\n        ARGO -->|Sync| API_BLUE\n        ARGO -->|Sync| API_GREEN\n    end\n    \n    subgraph \"DNS\"\n        DNS[DNS: smartbuild.io] --> LB\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "container-deployment",
      children: "Container Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# docker-compose.yml (development)\nversion: '3.8'\n\nservices:\n  postgres:\n    image: postgres:16-alpine\n    environment:\n      POSTGRES_DB: smartbuild\n      POSTGRES_USER: smartbuild\n      POSTGRES_PASSWORD: ${DB_PASSWORD}\n    volumes:\n      - postgres_data:/var/lib/postgresql/data\n    ports:\n      - '5432:5432'\n    healthcheck:\n      test: ['CMD-SHELL', 'pg_isready -U smartbuild']\n      interval: 5s\n      timeout: 5s\n      retries: 5\n\n  redis:\n    image: redis:7-alpine\n    ports:\n      - '6379:6379'\n    healthcheck:\n      test: ['CMD', 'redis-cli', 'ping']\n      interval: 5s\n      timeout: 5s\n      retries: 5\n\n  kafka:\n    image: confluentinc/cp-kafka:7.5\n    depends_on:\n      - zookeeper\n    environment:\n      KAFKA_BROKER_ID: 1\n      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181\n      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092\n      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1\n    ports:\n      - '9092:9092'\n\n  zookeeper:\n    image: confluentinc/cp-zookeeper:7.5\n    environment:\n      ZOOKEEPER_CLIENT_PORT: 2181\n      ZOOKEEPER_TICK_TIME: 2000\n    ports:\n      - '2181:2181'\n\n  minio:\n    image: minio/minio\n    command: server /data --console-address ':9001'\n    environment:\n      MINIO_ROOT_USER: ${MINIO_USER:-smartbuild}\n      MINIO_ROOT_PASSWORD: ${MINIO_PASSWORD:-smartbuild123}\n    volumes:\n      - minio_data:/data\n    ports:\n      - '9000:9000'\n      - '9001:9001'\n\n  auth-service:\n    build:\n      context: ./services/auth\n      dockerfile: Dockerfile\n    environment:\n      NODE_ENV: production\n      DATABASE_URL: postgresql://smartbuild:${DB_PASSWORD}@postgres:5432/smartbuild\n      JWT_SECRET: ${JWT_SECRET}\n      KAFKA_BROKERS: kafka:9092\n    depends_on:\n      postgres:\n        condition: service_healthy\n      kafka:\n        condition: service_started\n    ports:\n      - '3001:3001'\n\n  project-service:\n    build:\n      context: ./services/project\n      dockerfile: Dockerfile\n    environment:\n      NODE_ENV: production\n      DATABASE_URL: postgresql://smartbuild:${DB_PASSWORD}@postgres:5432/smartbuild\n      KAFKA_BROKERS: kafka:9092\n      REDIS_URL: redis://redis:6379\n    depends_on:\n      postgres:\n        condition: service_healthy\n      kafka:\n        condition: service_started\n      redis:\n        condition: service_healthy\n    ports:\n      - '3002:3002'\n\n  nginx:\n    image: nginx:alpine\n    ports:\n      - '80:80'\n      - '443:443'\n    volumes:\n      - ./nginx.conf:/etc/nginx/nginx.conf:ro\n    depends_on:\n      - auth-service\n      - project-service\n\nvolumes:\n  postgres_data:\n  minio_data:\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "blue-green-deployment-strategy",
      children: "Blue-Green Deployment Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface DeploymentConfig {\n  environment: string; replicas: number; image: string; tag: string;\n  ports: number[]; envVars: Record<string, string>;\n  healthCheckPath: string; readinessTimeout: number;\n}\n\ninterface DeploymentStatus {\n  activeColor: 'blue' | 'green'; pendingColor: 'blue' | 'green';\n  blue: { healthy: boolean; replicas: number; version: string };\n  green: { healthy: boolean; replicas: number; version: string };\n}\n\nclass DeploymentManager {\n  private status: DeploymentStatus = {\n    activeColor: 'blue', pendingColor: 'green',\n    blue: { healthy: true, replicas: 2, version: '1.0.0' },\n    green: { healthy: true, replicas: 2, version: '1.0.0' },\n  };\n\n  public async deploy(config: DeploymentConfig): Promise<{ success: boolean; duration: number; rollbackAvailable: boolean }> {\n    console.log(`Starting blue-green deployment of ${config.image}:${config.tag} to ${config.environment}`);\n    const startTime = Date.now();\n    const target = this.status.pendingColor;\n    const current = this.status.activeColor;\n\n    // Step 1: Deploy to inactive environment\n    console.log(`Step 1: Deploying to ${target} environment...`);\n    await this.deployToEnvironment(target, config);\n\n    // Step 2: Run health checks\n    console.log(`Step 2: Running health checks on ${target}...`);\n    const healthy = await this.runHealthChecks(target, config);\n    if (!healthy) {\n      console.log(`Health check failed on ${target}, aborting deployment`);\n      return { success: false, duration: Date.now() - startTime, rollbackAvailable: true };\n    }\n\n    // Step 3: Switch traffic\n    console.log(`Step 3: Switching traffic from ${current} to ${target}...`);\n    await this.switchTraffic(target);\n\n    // Step 4: Verify production\n    console.log(`Step 4: Verifying ${target} in production...`);\n    const productionHealthy = await this.runHealthChecks(target, config);\n    if (!productionHealthy) {\n      console.log(`Production verification failed, rolling back to ${current}...`);\n      await this.switchTraffic(current);\n      return { success: false, duration: Date.now() - startTime, rollbackAvailable: true };\n    }\n\n    // Step 5: Scale down old environment\n    console.log(`Step 5: Scaling down ${current} environment...`);\n    await this.scaleDown(current);\n\n    // Update status\n    this.status.activeColor = target;\n    this.status.pendingColor = current;\n    this.status[target].version = config.tag;\n    this.status[target].healthy = true;\n\n    console.log(`Deployment complete: ${config.tag} live on ${target}`);\n    return { success: true, duration: Date.now() - startTime, rollbackAvailable: true };\n  }\n\n  private async deployToEnvironment(env: 'blue' | 'green', config: DeploymentConfig): Promise<void> {\n    console.log(`  Pulling image ${config.image}:${config.tag}`);\n    console.log(`  Creating ${config.replicas} replicas`);\n    console.log(`  Setting environment variables: ${Object.keys(config.envVars).length}`);\n    await this.delay(500);\n  }\n\n  private async runHealthChecks(env: 'blue' | 'green', config: DeploymentConfig): Promise<boolean> {\n    console.log(`  Health check: GET ${config.healthCheckPath}`);\n    await this.delay(300);\n    const healthy = Math.random() > 0.1;\n    this.status[env].healthy = healthy;\n    return healthy;\n  }\n\n  private async switchTraffic(env: 'blue' | 'green'): Promise<void> {\n    console.log(`  Updating load balancer to route to ${env}`);\n    await this.delay(200);\n  }\n\n  private async scaleDown(env: 'blue' | 'green'): Promise<void> {\n    console.log(`  Scaling ${env} to 0 replicas`);\n    this.status[env].replicas = 0;\n    await this.delay(300);\n  }\n\n  public async rollback(): Promise<boolean> {\n    console.log('Rolling back to previous version...');\n    const target = this.status.activeColor;\n    const backup = this.status.pendingColor;\n    await this.scaleDown(backup);\n    await this.switchTraffic(backup);\n    this.status.activeColor = backup;\n    this.status.pendingColor = target;\n    return true;\n  }\n\n  public getStatus(): DeploymentStatus {\n    return { ...this.status };\n  }\n\n  public canaryDeploy(config: DeploymentConfig, canaryPercent: number = 10): Promise<{ success: boolean }> {\n    console.log(`Canary deployment: routing ${canaryPercent}% traffic to new version`);\n    return this.deploy(config).then(r => ({ success: r.success }));\n  }\n\n  private delay(ms: number): Promise<void> {\n    return new Promise(resolve => setTimeout(resolve, ms));\n  }\n}\n\n// Example\nconst deployer = new DeploymentManager();\ndeployer.deploy({\n  environment: 'production',\n  replicas: 3,\n  image: 'smartbuild/api',\n  tag: 'v2.1.0',\n  ports: [3000],\n  envVars: { NODE_ENV: 'production', LOG_LEVEL: 'info' },\n  healthCheckPath: '/health',\n  readinessTimeout: 30,\n}).then(console.log);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phase-9-deliverables-checklist",
      children: "Phase 9: Deliverables Checklist"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Artifact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Completed"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Project plan & schedule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gantt chart, WBS, risk register"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☐"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SRS document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22 functional + 12 non-functional requirements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☐"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 use cases with pre/post conditions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☐"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microservices, CQRS, event-driven, 4-layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☐"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ADRs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture Decision Records"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☐"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database schema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain model with all entities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☐"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpenAPI specification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full API documentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☐"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Source code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete implementation (8 microservices)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☐"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Test suite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unit, integration, contract, E2E, performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☐"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CI/CD pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub Actions + ArgoCD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☐"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security review"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threat model, SAST/SCA/DAST results"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☐"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quality metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coverage, complexity, gate compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☐"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Docker Compose + K8s manifests + blue-green"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☐"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monitoring setup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prometheus, Grafana, Loki, Tempo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☐"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User documentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "README, API guide, admin manual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☐"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phase-10-final-competency-checklist",
      children: "Phase 10: Final Competency Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "As you complete this course, you should be able to demonstrate competence in all of the following areas:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Competency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evaluated In"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Select and apply a software process model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter 1, Capstone Phase 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Elicit and document requirements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter 2, Capstone Phase 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model system structure and behaviour"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter 3, Capstone Phase 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Design software architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter 4, Capstone Phase 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implement using design principles and patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter 5, Capstone Phase 5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Plan and execute testing strategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter 6, Capstone Phase 7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Manage software evolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter 7, Capstone Phase 9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Plan and track project progress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter 8, Capstone Phase 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Manage software quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter 9, Capstone Phase 7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Control configuration and versions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter 10, CI/CD pipeline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Apply Agile practices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter 11, Scrum process"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implement CI/CD and DevOps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter 12, Capstone Phase 8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Engineer secure software"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter 13, Capstone Phase 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Apply formal specification and verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter 14, state machine design"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Define and collect software metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter 15, Capstone Phase 7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Build and deploy a complete system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter 16 (this chapter)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-capstone-integration-tools",
      children: "TypeScript: Capstone Integration Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Requirement-Acceptance Test Traceability Matrix ===\ninterface TraceLink { reqId: string; testId: string; category: string; status: 'covered' | 'partial' | 'missing'; }\nclass TraceabilityMatrix {\n  private links: TraceLink[] = [];\n  add(reqId: string, testId: string, category: string): this { this.links.push({ reqId, testId, category, status: 'missing' }); return this; }\n  markCovered(reqId: string, testId: string): void {\n    const link = this.links.find(l => l.reqId === reqId && l.testId === testId);\n    if (link) link.status = 'covered';\n  }\n  report(): { total: number; covered: number; gaps: string[] } {\n    const gaps = this.links.filter(l => l.status !== 'covered').map(l => `${l.reqId} → ${l.testId} (${l.category})`);\n    return { total: this.links.length, covered: this.links.filter(l => l.status === 'covered').length, gaps };\n  }\n}\n\n// === CI/CD Pipeline Verifier ===\ninterface PipelineStage { name: string; commands: string[]; required: boolean; timeout: number; }\nclass PipelineVerifier {\n  verify(stages: PipelineStage[]): { valid: boolean; errors: string[]; warnings: string[] } {\n    const errors: string[] = []; const warnings: string[] = [];\n    const names = new Set(stages.map(s => s.name));\n    if (stages.length === 0) errors.push('Pipeline must have at least one stage');\n    const hasBuild = stages.some(s => s.name.toLowerCase().includes('build'));\n    const hasTest = stages.some(s => s.name.toLowerCase().includes('test'));\n    if (!hasBuild) warnings.push('No build stage found - builds should precede tests');\n    if (!hasTest) warnings.push('No test stage found - tests are required before deployment');\n    for (const stage of stages) {\n      if (stage.commands.length === 0) errors.push(`Stage \"${stage.name}\" has no commands`);\n      if (stage.timeout < 60) warnings.push(`Stage \"${stage.name}\" has very short timeout (${stage.timeout}s)`);\n    }\n    return { valid: errors.length === 0, errors, warnings };\n  }\n}\n\n// === Post-Mortem Analysis Tool ===\ninterface Incident { id: string; severity: 'sev1' | 'sev2' | 'sev3'; duration: number; rootCause: string; actionItems: string[]; }\nclass PostMortemAnalyzer {\n  analyze(incidents: Incident[]): { total: number; avgDuration: number; bySeverity: Record<string, number>; topRootCauses: string[]; actionItemCompletion: number } {\n    const total = incidents.length;\n    const avgDuration = total > 0 ? Math.round(incidents.reduce((s, i) => s + i.duration, 0) / total) : 0;\n    const bySeverity: Record<string, number> = {};\n    const causeCount = new Map<string, number>();\n    let totalActionItems = 0;\n    for (const inc of incidents) {\n      bySeverity[inc.severity] = (bySeverity[inc.severity] ?? 0) + 1;\n      causeCount.set(inc.rootCause, (causeCount.get(inc.rootCause) ?? 0) + 1);\n      totalActionItems += inc.actionItems.length;\n    }\n    const topRootCauses = [...causeCount.entries()].sort((a, b) => b[1] - a[1]).slice(0, 3).map(([c]) => c);\n    return { total, avgDuration, bySeverity, topRootCauses, actionItemCompletion: Math.round((totalActionItems / Math.max(total, 1)) * 10) / 10 };\n  }\n}\n\n// === Chapter Cross-Reference Validator ===\nconst capstonePhases = [\n  { phase: 1, title: 'Process Selection', chapters: [1, 11], tools: ['recommendModel()'] },\n  { phase: 2, title: 'Requirements', chapters: [2], tools: ['moscowPrioritize()', 'furpsClassifier()'] },\n  { phase: 3, title: 'Architecture', chapters: [4], tools: ['compareStyles()', 'tradeoffAnalyzer()'] },\n  { phase: 4, title: 'Design & Implementation', chapters: [3, 5, 6], tools: ['umlClassToTS()', 'solidValidator()'] },\n  { phase: 5, title: 'Testing', chapters: [6], tools: ['generateTestCases()', 'checkPyramid()'] },\n  { phase: 6, title: 'DevOps & CI/CD', chapters: [12], tools: ['validatePipeline()', 'canRollback()'] },\n  { phase: 7, title: 'Quality & Metrics', chapters: [9, 15], tools: ['calculateQualityIndex()', 'gqmFramework()'] },\n  { phase: 8, title: 'Configuration Management', chapters: [10], tools: ['validateBranchStrategy()', 'diffBaselines()'] },\n  { phase: 9, title: 'Security', chapters: [13], tools: ['strideThreats()', 'owaspTop10()'] },\n  { phase: 10, title: 'Formal Specification', chapters: [14], tools: ['verifyFSM()'] },\n];\n\nfunction crossReferenceChapters(chapterNum: number): { phase: number; tools: string[] }[] {\n  return capstonePhases.filter(p => p.chapters.includes(chapterNum)).map(p => ({ phase: p.phase, tools: p.tools }));\n}\n\n// === Capstone Deliverable Checklist ===\ninterface Deliverable { name: string; description: string; verified: boolean; }\nfunction checklistProgress(deliverables: Deliverable[]): { done: number; total: number; percent: number; pending: string[] } {\n  const done = deliverables.filter(d => d.verified).length;\n  return { done, total: deliverables.length, percent: Math.round(done / deliverables.length * 100), pending: deliverables.filter(d => !d.verified).map(d => d.name) };\n}\n\nconst deliverables: Deliverable[] = [\n  { name: 'SRS Document', description: '22 functional + 12 non-functional requirements', verified: false },\n  { name: 'Architecture ADRs', description: 'Microservices, CQRS, event-driven decisions', verified: false },\n  { name: 'API Implementation', description: '8 microservices with OpenAPI docs', verified: false },\n  { name: 'React Frontend', description: 'SPA with project dashboard, Gantt, inspections', verified: false },\n  { name: 'Test Suite', description: 'Unit + integration + contract + E2E + performance', verified: false },\n  { name: 'CI/CD Pipeline', description: 'GitHub Actions + ArgoCD blue-green', verified: false },\n  { name: 'K8s Deployment', description: 'Production manifests with blue-green topology', verified: false },\n  { name: 'Monitoring', description: 'Prometheus, Grafana, Loki, Tempo dashboards', verified: false },\n  { name: 'Security Review', description: 'Threat model, SAST, SCA, DAST reports', verified: false },\n  { name: 'Risk Register', description: '10 risks assessed with mitigations', verified: false },\n];\nconsole.log('Progress:', checklistProgress(deliverables));\n\nconst trace = new TraceabilityMatrix();\ntrace.add('FR-01', 'T-AUTH-001', 'Auth').add('FR-04', 'T-PROJ-001', 'Project').add('FR-07', 'T-BUDGET-001', 'Budget');\ntrace.markCovered('FR-01', 'T-AUTH-001');\nconsole.log('Traceability:', trace.report());\n\nconst pipeline = new PipelineVerifier();\nconsole.log('Pipeline:', pipeline.verify([\n  { name: 'Lint & Type Check', commands: ['npm run lint', 'npx tsc --noEmit'], required: true, timeout: 120 },\n  { name: 'Unit & Integration Tests', commands: ['npm test'], required: true, timeout: 300 },\n  { name: 'SAST & SCA', commands: ['semgrep', 'snyk test'], required: true, timeout: 180 },\n  { name: 'Build & Containerize', commands: ['docker build'], required: true, timeout: 300 },\n]));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This capstone chapter integrates all 15 preceding chapters into the development of SmartBuild, a construction project management system. The complete software engineering lifecycle is demonstrated: process selection (Scrum with 6 sprints), requirements specification (22 functional + 12 non-functional requirements, 10 use cases), architecture design (microservices, event-driven, CQRS, 4-layer), detailed design (domain model with 10+ entities), implementation (TypeScript with 8 microservices, Kafka, PostgreSQL, Redis), testing (unit, integration, contract, E2E, performance, security), quality management (CI/CD gates, quality dashboard, metrics), configuration management (Git, GitHub Actions, ArgoCD), security (threat model, SAST, SCA, DAST), risk management (probability × impact matrix), and deployment (Docker Compose, Kubernetes, blue-green deployment). Each phase references the relevant chapter for deeper study. The final deliverable is a production-ready software system with full documentation — the culmination of all skills taught in this course."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integrate from day one"
        }), " — every phase of the lifecycle impacts every other; process selection affects requirements, which affects architecture, which affects testing, which affects deployment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Traceability is the backbone of professional software engineering"
        }), " — every requirement must trace to architecture decisions, design elements, code modules, and test cases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CI/CD is not optional"
        }), " — automated pipelines enforce quality gates and catch integration issues before they reach production"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Event-driven architecture enables loose coupling"
        }), " — Kafka decouples services and provides durable event sourcing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Blue-green deployment eliminates downtime"
        }), " — switching traffic between identical environments enables zero-downtime releases with instant rollback"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Risk management is continuous"
        }), " — the risk matrix should be reviewed and updated every sprint, not created once and forgotten"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Every architecture decision has trade-offs"
        }), " — document ADRs with context, decision, and consequences for future engineers"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: What architecture pattern does SmartBuild use for handling cross-service transactions (e.g., change order affecting both budget and schedule)?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Two-Phase Commit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Saga Pattern with Kafka"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Distributed Locking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Single Database"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: B"
      }), " — The Saga pattern with Kafka event sourcing coordinates multi-service transactions without blocking, ensuring eventual consistency."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: What is the purpose of CQRS in the SmartBuild architecture?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) To reduce database storage costs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) To separate read and write paths, optimising report queries without impacting write performance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) To encrypt all data at rest"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) To replace REST APIs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: B"
      }), " — CQRS separates commands (writes to PostgreSQL) from queries (reads from ElasticSearch), allowing each to be optimised independently."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: In the blue-green deployment strategy, what happens if health checks fail on the new environment?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The deployment continues anyway"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Traffic is switched back to the previous environment (auto-rollback)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The pipeline pauses for manual approval"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Both environments are taken offline"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: B"
      }), " — If health checks fail, traffic remains on the previous (stable) environment, and the deployment is aborted with a rollback."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: How many functional requirements are defined in the SmartBuild SRS?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) 10"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) 15"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) 22"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) 30"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: C"
      }), " — The SRS defines 22 functional requirements (FR-01 through FR-22)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: What is the risk response strategy for R-02 (ERP integration complexity) in the risk matrix?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Accept"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Transfer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Mitigate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Avoid"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: C"
      }), " — The risk is mitigated through API-first design, adapter pattern, and contract testing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6: Which layer is NOT part of the 4-layer architecture?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Presentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) API/Application"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Domain/Service"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Security"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: D"
      }), " — The four layers are Presentation, API/Application, Domain/Service, and Infrastructure/Data. Security cross-cuts all layers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7: What Kafka topic would a budget change event be published to?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) sb.budget.updated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) budget-event"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) sb.events"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) smartbuild-all"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: A"
      }), " — Events follow the format ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{topicPrefix}.{domain}.{action}"
      }), ", so budget updates go to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sb.budget.updated"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Trace the journey from a user story (US-04: Budget Tracking) through architecture, design, implementation, testing, and deployment. Name the artifacts produced at each stage."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does the SmartBuild architecture demonstrate the microservices principles of loose coupling and high cohesion?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What non-functional requirements drove the decision to use Kafka as the event bus?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Describe the blue-green deployment process and explain how it enables zero-downtime releases."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Why was the CQRS pattern chosen for the reporting service? What are the trade-offs?"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Extend SmartBuild with a procurement module that manages material orders from subcontractors. Write user stories, add entities to the domain model, implement the service, and add the service to the deployment topology."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a Grafana dashboard for monitoring the SmartBuild production system. Specify the Prometheus metrics to collect, the panels to create, and the alert thresholds for each service."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write a post-deployment retrospective analysing the first 3 months of SmartBuild in production. Use the Scrum retrospective format and identify two improvements for the next release cycle."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a disaster recovery plan for SmartBuild. Assume the primary PostgreSQL database has failed. Document the RPO, RTO, failover steps, and verification process."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SmartBuild has been deployed to production and is serving 50 construction companies with 500 concurrent users. After three months, the team observes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Budget service response times degraded from 200ms to 1.2s p95"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kafka consumer lag on the notification service exceeding 10,000 messages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document upload failures increasing from 0.5% to 4%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PostgreSQL CPU at 75% utilisation with slow queries on the project listing endpoint"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two security vulnerabilities reported in npm dependencies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Diagnose each issue using monitoring data, propose specific architectural or code changes to address each one, implement the fixes, and verify improvement. Each fix must trace back to a specific lesson from Chapters 1-15. Implement a TypeScript load testing script that simulates the usage pattern and validates the improvements."
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