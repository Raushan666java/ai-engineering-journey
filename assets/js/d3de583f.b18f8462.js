"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[81601],{

/***/ 11042
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_devops_18_capstone_md_d3d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-devops-18-capstone-md-d3d.json
const site_docs_courses_devops_18_capstone_md_d3d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/devops/18-capstone","title":"Chapter 18: Capstone Project","description":"Previous: SRE Principles","source":"@site/docs/courses/devops/18-capstone.md","sourceDirName":"courses/devops","slug":"/devops/18-capstone","permalink":"/ai-engineering-journey/devops/18-capstone","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":27,"frontMatter":{"id":"18-capstone","slug":"/devops/18-capstone","title":"Chapter 18: Capstone Project","sidebar_label":"Chapter 18: Capstone Project","sidebar_position":27},"sidebar":"coursesSidebar","previous":{"title":"Chapter 17: SRE Principles","permalink":"/ai-engineering-journey/devops/17-sre"},"next":{"title":"Index","permalink":"/ai-engineering-journey/gate-cs-preparation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/devops/18-capstone.md


const frontMatter = {
	id: '18-capstone',
	slug: '/devops/18-capstone',
	title: 'Chapter 18: Capstone Project',
	sidebar_label: 'Chapter 18: Capstone Project',
	sidebar_position: 27
};
const contentTitle = 'Chapter 18: Capstone Project';

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
  "value": "18.1 Capstone Design Philosophy",
  "id": "181-capstone-design-philosophy",
  "level": 3
}, {
  "value": "18.2 Project Planning and Estimation",
  "id": "182-project-planning-and-estimation",
  "level": 3
}, {
  "value": "18.3 Pipeline Stage Design",
  "id": "183-pipeline-stage-design",
  "level": 3
}, {
  "value": "18.4 Risk Mitigation Strategies",
  "id": "184-risk-mitigation-strategies",
  "level": 3
}, {
  "value": "Project Overview",
  "id": "project-overview",
  "level": 2
}, {
  "value": "Architecture Requirements",
  "id": "architecture-requirements",
  "level": 2
}, {
  "value": "1. Version Control",
  "id": "1-version-control",
  "level": 3
}, {
  "value": "2. Local Development",
  "id": "2-local-development",
  "level": 3
}, {
  "value": "3. CI/CD Pipeline (GitHub Actions)",
  "id": "3-cicd-pipeline-github-actions",
  "level": 3
}, {
  "value": "4. Infrastructure as Code (Terraform)",
  "id": "4-infrastructure-as-code-terraform",
  "level": 3
}, {
  "value": "5. Kubernetes Deployment",
  "id": "5-kubernetes-deployment",
  "level": 3
}, {
  "value": "6. Blue-Green Deployment",
  "id": "6-blue-green-deployment",
  "level": 3
}, {
  "value": "7. Monitoring and Observability",
  "id": "7-monitoring-and-observability",
  "level": 3
}, {
  "value": "8. Security Scanning",
  "id": "8-security-scanning",
  "level": 3
}, {
  "value": "9. Database Migrations",
  "id": "9-database-migrations",
  "level": 3
}, {
  "value": "Deliverables",
  "id": "deliverables",
  "level": 2
}, {
  "value": "Evaluation Criteria",
  "id": "evaluation-criteria",
  "level": 2
}, {
  "value": "Hints and Guidance",
  "id": "hints-and-guidance",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
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
  "value": "DevOps Capstone Pipeline Orchestrator",
  "id": "devops-capstone-pipeline-orchestrator",
  "level": 3
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Mermaid: Full Capstone Architecture",
  "id": "mermaid-full-capstone-architecture",
  "level": 2
}, {
  "value": "Deeper Explanation: Production Deployment Strategy",
  "id": "deeper-explanation-production-deployment-strategy",
  "level": 2
}, {
  "value": "Blue-Green Deployment Mechanics",
  "id": "blue-green-deployment-mechanics",
  "level": 3
}, {
  "value": "Health Check Implementation",
  "id": "health-check-implementation",
  "level": 3
}, {
  "value": "Pipeline Gate Decision Matrix",
  "id": "pipeline-gate-decision-matrix",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary-1",
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
    blockquote: "blockquote",
    br: "br",
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
        id: "chapter-18-capstone-project",
        children: "Chapter 18: Capstone Project"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/17-sre",
          children: "SRE Principles"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/devops/ch18-capstone.png",
        alt: "Capstone Project Architecture"
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
        href: "../../assets/images/lessons/devops/18-capstone/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/18-capstone/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/devops/18-capstone/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/18-capstone/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/devops/18-capstone/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/18-capstone/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design and implement a complete CI/CD pipeline integrating all tools covered in the course"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy a multi-service application to Kubernetes with monitoring and observability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provision cloud infrastructure using Terraform with secure, scalable patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate security scanning at every stage of the delivery pipeline"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement blue-green deployment with automated rollback"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Produce comprehensive documentation of the architecture and operational procedures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "Pipeline Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lint/Test, Build/Scan, Deploy Staging, Deploy Prod, Observe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incremental implementation from lint/test first"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Infrastructure as Code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPC, K8s, DB, Container Registry via Terraform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provision infrastructure before deploying apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kubernetes Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frontend, API, Database with Ingress, HPA, PDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "StatefulSet for DB; HPA for API auto-scaling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blue-Green Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Color-labeled deployments with service switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-downtime traffic migration with rollback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Observability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prometheus, Grafana, Loki for metrics/logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RED metrics dashboard with alert rules"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Version Control] --> B[Local Dev]\n    B --> C[CI/CD Pipeline]\n    C --> D[Lint & Test]\n    C --> E[Build & Scan]\n    C --> F[Deploy Staging]\n    C --> G[Deploy Prod]\n    C --> H[Observability]\n    G --> I[Blue-Green]\n    I --> J[Rollback]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "181-capstone-design-philosophy",
      children: "18.1 Capstone Design Philosophy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The capstone project is the culminating assessment of DevOps mastery. Unlike individual chapter exercises that focus on isolated skills, the capstone requires integration across the entire toolchain. The design philosophy follows three principles:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration over Isolation"
      }), " — Individual tools (Docker, Kubernetes, Terraform, Prometheus) are easy to learn in isolation. The capstone tests whether you can compose them into a working system where each component correctly interfaces with its neighbors."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Production Realism"
      }), " — The pipeline must handle real-world concerns: zero-downtime deployments, automated rollback on failure, security scanning gates that block vulnerable code, and observability that provides actionable insight. Toy exercises are replaced with production-grade patterns."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Incremental Build"
      }), " — The project is too large to build in one pass. The recommended sequence is: local Docker Compose ? Terraform infrastructure ? Kubernetes manifests ? CI/CD pipeline ? blue-green ? observability ? security. Each step builds on the previous one."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "182-project-planning-and-estimation",
      children: "18.2 Project Planning and Estimation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevOps engineers must estimate work and sequence dependencies. This capstone requires 40-60 hours of work depending on experience level:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tasks"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Estimated Time"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1. Setup & Local Dev"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repository structure, Docker Compose, Makefile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-6 hours"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2. Infrastructure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terraform VPC, K8s cluster, database, registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8-10 hours"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3. Kubernetes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deployments, Services, Ingress, HPA, PDB, NetworkPolicy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8-10 hours"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4. CI/CD Pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub Actions workflows, quality gates, artifact management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8-10 hours"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5. Blue-Green"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment color logic, service switch, monitoring window, rollback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6-8 hours"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6. Observability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prometheus, Grafana, Loki, alerts, dashboards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-6 hours"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7. Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAST, secret scanning, container scanning, DAST, SCA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-4 hours"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8. Documentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "README, architecture diagram, runbook, presentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-6 hours"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dependency Graph:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Local Docker Compose] --> B[Infrastructure]\n    A --> C[Kubernetes Manifests]\n    B --> C\n    C --> D[CI/CD Pipeline]\n    D --> E[Security Integration]\n    D --> F[Blue-Green Deployment]\n    D --> G[Observability]\n    F --> H[Automated Rollback]\n    G --> I[Dashboards & Alerts]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "183-pipeline-stage-design",
      children: "18.3 Pipeline Stage Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each pipeline stage has a specific purpose, trigger, and gate:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stage 1 — Lint & Test (trigger: every push)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Purpose: Catch code quality and logic errors early"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gate: Zero lint errors, 80%+ test coverage, zero SAST high findings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fast feedback loop (< 5 minutes)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stage 2 — Build & Scan (trigger: push to main)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Purpose: Produce container images with verified security posture"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gate: No CRITICAL or HIGH vulnerabilities in container scan, SBOM generated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Artifact: Container images tagged with commit SHA"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stage 3 — Deploy Staging (trigger: successful Stage 2)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Purpose: Validate deployment in production-like environment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gate: Integration tests pass, DAST scan finds no HIGH findings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contains: Database migrations run before app deploy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stage 4 — Deploy Production (trigger: manual approval after Stage 3)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Purpose: Zero-downtime release to production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gate: Smoke tests pass, 10-minute monitoring window with error rate < 1%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fallback: Automatic rollback if gate fails"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stage 5 — Observe (continuous)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Purpose: Provide visibility into system health"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alert thresholds: Error rate > 1% for 5 minutes, p95 latency > 500ms, pod crash loops"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "184-risk-mitigation-strategies",
      children: "18.4 Risk Mitigation Strategies"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Risk"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud costs exceed budget"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Financial overrun"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use free tiers, destroy resources when not in use, set budget alerts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pipeline takes too long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Developer frustration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallelize stages, cache dependencies, optimize build"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blue-green fails during deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production outage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual rollback procedure documented and tested in staging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security scan false positives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pipeline blocked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerability exceptions with documented justification in policy file"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database migration conflicts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data loss or corruption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always run migrations in staging first, backup database before production deploy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "project-overview",
      children: "Project Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You will build a complete DevOps pipeline for a sample e-commerce application. The application consists of three microservices:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frontend"
        }), " — React single-page application served by Nginx"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "API"
        }), " — Node.js or Go REST API service"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Database"
        }), " — PostgreSQL"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The pipeline must automate build, test, security scan, deploy, monitor, and rollback. All infrastructure is provisioned through code. All operations are observable."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "architecture-requirements",
      children: "Architecture Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The capstone integrates all DevOps topics into a single cohesive CI/CD pipeline system."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-version-control",
      children: "1. Version Control"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Start with Terraform infrastructure first, then test locally with Docker Compose, then build the pipeline."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a GitHub repository with the following directory structure:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/\n├── frontend/          # React application\n├── api/               # Node.js or Go API service\n├── infra/             # Terraform configurations\n├── k8s/               # Kubernetes manifests\n├── scripts/           # Automation scripts\n├── .github/           # CI/CD workflows\n│   └── workflows/\n├── docs/              # Documentation\n├── docker-compose.yml # Local development\n├── Makefile           # Development helpers\n└── README.md\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use trunk-based development with short-lived feature branches"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enforce commit message conventions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement branch protection rules requiring CI passing and code review"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-local-development",
      children: "2. Local Development"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Implement CI/CD incrementally: lint/test first, then build, then deploy, then security."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Docker Compose file for local development with hot-reload"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["All three services start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docker compose up"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Database initializes with schema migrations"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Environment variables configured through ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".env"
        }), " file"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-cicd-pipeline-github-actions",
      children: "3. CI/CD Pipeline (GitHub Actions)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Test blue-green deployment manually before automating. Verify traffic switching works."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The pipeline must include the following stages:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stage 1: Lint and Test"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run linters (ESLint for JS, golangci-lint for Go)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run unit tests with coverage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run SAST scanning (Semgrep)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run secret scanning (GitLeaks)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality gate: all must pass with zero HIGH findings"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stage 2: Build and Scan"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build Docker images for frontend and API"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scan images with Trivy (fail on CRITICAL vulnerabilities)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate SBOM with Syft in CycloneDX format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push images to container registry"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stage 3: Deploy to Staging"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy to staging Kubernetes namespace"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply database migrations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run integration tests against staging"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run DAST scan (OWASP ZAP) against staging API"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stage 4: Deploy to Production (Blue-Green)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provision production infrastructure if not existing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy green environment alongside blue"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run smoke tests against green"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Switch traffic to green via service selector update"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor error rates for 10 minutes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rollback automatically if error rate exceeds threshold"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Notify team via Slack on success or rollback"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stage 5: Observability"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy Prometheus and Grafana to monitoring namespace"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy Loki for log aggregation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure RED metrics dashboard"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set up alerts for high error rate and latency"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-infrastructure-as-code-terraform",
      children: "4. Infrastructure as Code (Terraform)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Provision the following on a cloud provider (AWS, Azure, or GCP):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network"
        }), ": VPC, public/private subnets, NAT gateway, security groups"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compute"
        }), ": Kubernetes cluster (EKS, AKS, or GKE)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Storage"
        }), ": S3 bucket (or equivalent) for Terraform state backend with DynamoDB locking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Database"
        }), ": Managed PostgreSQL (RDS, Azure Database, or Cloud SQL)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Container Registry"
        }), ": ECR, ACR, or GCR"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Store Terraform state remotely with locking. Use modules for VPC and Kubernetes. Parameterize environment (staging vs production)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-hcl",
        children: "# Minimum required: VPC module, K8s cluster, database, state backend\n# Implementation details are left to the student\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-kubernetes-deployment",
      children: "5. Kubernetes Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deploy the application to Kubernetes with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frontend"
        }), ": Deployment with 2 replicas, ClusterIP Service, ConfigMap for API endpoint"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "API"
        }), ": Deployment with 3 replicas, ClusterIP Service, ConfigMap and Secret for configuration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Database"
        }), ": StatefulSet with persistent volume claim, headless Service"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ingress"
        }), ": NGINX ingress controller with TLS"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NetworkPolicy"
        }), ": API pods accept traffic only from frontend pods; database accepts only from API"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HPA"
        }), ": API scales based on CPU utilization (target 70%)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PDB"
        }), ": Minimum available for API is 2"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-blue-green-deployment",
      children: "6. Blue-Green Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement blue-green deployment without downtime:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Deployment template with color label\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: api-{color}\n  labels:\n    app: api\n    color: {color}\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: api\n      color: {color}\n  template:\n    metadata:\n      labels:\n        app: api\n        color: {color}\n    spec:\n      containers:\n        - name: api\n          image: {image}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The deployment script:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploys new color (green if blue is current)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Waits for all pods to be ready"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Runs smoke tests against green"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates Service selector to point to green"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitors error rate for 10 minutes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "On failure: revert Service selector to blue (rollback)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "On success: delete blue deployment"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-monitoring-and-observability",
      children: "7. Monitoring and Observability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy Prometheus using the Prometheus Operator (kube-prometheus-stack Helm chart)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure node-exporter, kube-state-metrics"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a Grafana dashboard with panels for:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Request rate (RPS) per service"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Error rate (% of 5xx responses)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Latency (p50, p95, p99)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Resource utilization (CPU, memory)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure Loki for log aggregation with Promtail"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Set up alert rules:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "High error rate (>1% for 5 minutes) → PagerDuty"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "High latency (p95 > 500ms for 5 minutes) → Slack notification"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Pod crash loop → PagerDuty"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8-security-scanning",
      children: "8. Security Scanning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Integrate the following security tools in the pipeline:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SAST"
        }), ": Semgrep on every push to any branch"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Secret scanning"
        }), ": GitLeaks in CI"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Container scanning"
        }), ": Trivy on every built image"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SCA"
        }), ": Dependabot for dependency updates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DAST"
        }), ": ZAP baseline scan on staging deployment"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9-database-migrations",
      children: "9. Database Migrations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Flyway or Alembic for schema migrations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migrations run as a Kubernetes Job before the API deployment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration failure prevents deployment (pipeline gate)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include rollback migration scripts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test migration against staging database first"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deliverables",
      children: "Deliverables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Trunk-based development with short-lived branches supports CI/CD velocity."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Submit the following:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub Repository"
        }), " → Complete source code with all configurations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "README.md"
        }), " → Architecture overview, setup instructions, deployment guide"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pipeline Documentation"
        }), " → Description of each stage, triggers, and gates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Architecture Diagram"
        }), " → System architecture including network, deployment, and data flow"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Runbook"
        }), " → Operational procedures for deployment, rollback, incident response, and recovery"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Presentation"
        }), " → 10-minute recorded walkthrough of the pipeline"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "evaluation-criteria",
      children: "Evaluation Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Blue-green deployment with automated monitoring and rollback enables zero-downtime releases."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Weight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pipeline completeness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All stages implemented and functional"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Infrastructure as Code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terraform configurations complete and modular"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kubernetes deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All K8s resources correctly configured"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monitoring & observability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prometheus, Grafana, Loki operational"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All scanning stages operational with policy enforcement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blue-green deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-downtime deployment with rollback verified"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Documentation quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "README, architecture diagram, runbook complete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clean, idiomatic, well-structured"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pipeline handles failures gracefully"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hints-and-guidance",
      children: "Hints and Guidance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Security scanning at every stage ensures supply chain integrity and compliance."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start with the Terraform infrastructure. Provision the cluster first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test the application locally with Docker Compose before deploying to Kubernetes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the CI/CD pipeline incrementally: lint/test first, then build, then deploy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test blue-green deployment manually before automating it."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Helm charts from Artifact Hub for Prometheus and Loki rather than building from scratch."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document your design decisions and trade-offs as you go."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// capstone\n// cicd-infrastructure-automation implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'capstone', data: { topic: 'cicd-infrastructure-automation' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CI/CD Pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lint/Test -> Build/Scan -> Deploy -> Observe"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Terraform IaC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPC, K8s cluster, database, registry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "K8s Deploy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deployments, Services, Ingress, HPA, PDB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blue-Green"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Color-label deployments, traffic switch, rollback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Observability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prometheus metrics, Grafana dashboards, Loki logs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Points"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pipeline Stages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lint/Test, Build/Scan, Deploy Staging, Deploy Prod, Observe"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Terraform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPC module, K8s cluster, database, state backend"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "K8s Objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment, StatefulSet, Service, Ingress, HPA, PDB, NetworkPolicy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blue-Green"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Color label, service selector switch, monitoring window, rollback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAST (Semgrep), Secret (GitLeaks), Container (Trivy), DAST (ZAP)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full pipeline for web application delivery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud-native CI/CD and infrastructure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production-grade deployment standards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Startup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blueprint for DevOps platform setup"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "devops-capstone-pipeline-orchestrator",
      children: "DevOps Capstone Pipeline Orchestrator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The capstone project ties together all DevOps concepts. The following orchestrator models a complete pipeline with stages, gates, notifications, and reporting."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface PipelineStage {\n  name: string;\n  status: 'pending' | 'running' | 'passed' | 'failed' | 'skipped';\n  duration: number; // seconds\n  artifacts: string[];\n  retries: number;\n}\n\ninterface PipelineRun {\n  id: string;\n  commitSha: string;\n  branch: string;\n  stages: PipelineStage[];\n  startedAt: Date;\n  completedAt?: Date;\n  triggeredBy: 'push' | 'pr' | 'manual' | 'schedule';\n}\n\ninterface GateCondition {\n  stage: string;\n  condition: (run: PipelineRun) => boolean;\n  errorMessage: string;\n}\n\nclass PipelineOrchestrator {\n  private gates: GateCondition[] = [];\n\n  addGate(gate: GateCondition): void {\n    this.gates.push(gate);\n  }\n\n  execute(run: PipelineRun, stage: string): PipelineStage[] {\n    const stageNames = ['lint', 'unit-test', 'build', 'integration-test', 'security-scan', 'deploy-staging', 'e2e-test', 'deploy-production'];\n    const currentIndex = stageNames.indexOf(stage);\n    const results: PipelineStage[] = [];\n\n    for (let i = 0; i < stageNames.length; i++) {\n      if (i < currentIndex) {\n        results.push({ name: stageNames[i], status: 'passed', duration: 30, artifacts: [], retries: 0 });\n      } else if (i === currentIndex) {\n        const failedGates = this.gates.filter(g => g.stage === stageNames[i] && !g.condition(run));\n        if (failedGates.length > 0) {\n          results.push({ name: stageNames[i], status: 'failed', duration: 0, artifacts: [], retries: 0 });\n          break;\n        }\n        const stageResult: PipelineStage = { name: stageNames[i], status: 'running', duration: 0, artifacts: ['build.zip'], retries: 0 };\n        stageResult.status = 'passed';\n        stageResult.duration = 45;\n        results.push(stageResult);\n      } else {\n        results.push({ name: stageNames[i], status: 'pending', duration: 0, artifacts: [], retries: 0 });\n      }\n    }\n    return results;\n  }\n\n  generateReport(run: PipelineRun, results: PipelineStage[]): string {\n    const allPassed = results.every(r => r.status === 'passed');\n    const totalTime = results.reduce((s, r) => s + r.duration, 0);\n    return `## Pipeline Report: ${run.id}\\n\\n` +\n      `**Commit:** ${run.commitSha.substring(0, 8)}\\n` +\n      `**Branch:** ${run.branch}\\n` +\n      `**Status:** ${allPassed ? 'PASSED' : 'FAILED'}\\n` +\n      `**Duration:** ${totalTime}s\\n\\n` +\n      `| Stage | Status | Duration |\\n` +\n      `|-------|--------|----------|\\n` +\n      results.map(r => `| ${r.name} | ${r.status} | ${r.duration}s |`).join('\\n');\n  }\n}\n\nconst orchestrator = new PipelineOrchestrator();\norchestrator.addGate({ stage: 'security-scan', condition: (run) => true, errorMessage: 'Security scan must pass' });\norchestrator.addGate({ stage: 'deploy-production', condition: (run) => run.branch === 'main', errorMessage: 'Only main branch deploys to production' });\n\nconst run: PipelineRun = {\n  id: 'run-001', commitSha: 'a1b2c3d4e5f6', branch: 'main',\n  stages: [], startedAt: new Date(), triggeredBy: 'push',\n};\n\nconst results = orchestrator.execute(run, 'deploy-staging');\nconsole.log(orchestrator.generateReport(run, results));\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What this demonstrates:"
      }), " A pipeline orchestrator models the complete CI/CD workflow with conditional gates, stage dependencies, and comprehensive reporting — integrating all DevOps practices."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Question 1: Why use trunk-based development for this capstone?"
      }), "**A)** It's the only option", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Supports CI/CD with short-lived branches", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Required by GitHub", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Easier to document", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Supports CI/CD with short-lived branches</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
        children: [(0,jsx_runtime.jsx)(_components.summary, {
          children: "Question 2: How does blue-green achieve zero-downtime?"
        }), "**A)** Rolling restart", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Service selector switch between environments", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Canary traffic routing", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Parallel deployments", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Service selector switch between environments</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Question 3: What metric triggers automated rollback?"
          }), "**A)** Build time", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Error rate threshold exceeded", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Code coverage", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Number of commits", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Error rate threshold exceeded</details>\n## TypeScript: Complete Pipeline Orchestration Script\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Below is a TypeScript script that orchestrates the entire capstone pipeline with automated rollback detection:"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-typescript",
              children: "// capstone-pipeline.ts - Orchestrates the complete CI/CD pipeline with safety gates\n\ninterface PipelineResult {\n  stage: string;\n  status: 'passed' | 'failed' | 'skipped';\n  duration: number;\n  output?: string;\n}\n\nclass CapstonePipeline {\n  private results: PipelineResult[] = [];\n  private rollbackTriggered = false;\n\n  private async runStage(name: string, fn: () => Promise<string>): Promise<PipelineResult> {\n    const start = Date.now();\n    try {\n      const output = await fn();\n      const result: PipelineResult = { stage: name, status: 'passed', duration: Date.now() - start, output };\n      this.results.push(result);\n      console.log(`[PASS] ${name} (${result.duration}ms)`);\n      return result;\n    } catch (error) {\n      const result: PipelineResult = { stage: name, status: 'failed', duration: Date.now() - start, output: String(error) };\n      this.results.push(result);\n      console.error(`[FAIL] ${name}: ${error}`);\n      throw error;\n    }\n  }\n\n  async run(): Promise<{ results: PipelineResult[]; rollbackTriggered: boolean }> {\n    try {\n      await this.runStage('Lint & Type Check', async () => {\n        return await this.exec('npx tsc --noEmit && npx eslint src/');\n      });\n      await this.runStage('Unit Tests', async () => {\n        const output = await this.exec('npx vitest run --coverage');\n        if (output.includes('FAIL')) throw new Error('Unit tests failed');\n        return output;\n      });\n      await this.runStage('Build & Containerize', async () => {\n        return await this.exec('docker build -t app:${CI_COMMIT_SHA} .');\n      });\n      await this.runStage('Security Scan', async () => {\n        const output = await this.exec('trivy image --severity CRITICAL app:${CI_COMMIT_SHA}');\n        if (output.includes('Total:') && !output.includes('Total: 0')) throw new Error('Critical vulns');\n        return output;\n      });\n      await this.runStage('Deploy Staging', async () => {\n        return await this.exec('kubectl apply -f k8s/overlays/staging/');\n      });\n      await this.runStage('Integration Tests', async () => {\n        const output = await this.exec('npx playwright test');\n        if (output.includes('failed')) throw new Error('Integration tests failed');\n        return output;\n      });\n      await this.runStage('Deploy Production', async () => {\n        return await this.exec('kubectl apply -f k8s/overlays/production/');\n      });\n      await this.runStage('Post-Deploy Monitoring', async () => {\n        const output = await this.exec('kubectl get pods -l app=myapp');\n        if (this.rollbackTriggered) throw new Error('Rollback triggered');\n        return output;\n      });\n    } catch (error) {\n      console.error('[ROLLBACK] Pipeline failed, initiating rollback...');\n      await this.initiateRollback();\n    }\n    return { results: this.results, rollbackTriggered: this.rollbackTriggered };\n  }\n\n  private async exec(command: string): Promise<string> {\n    const { execSync } = require('child_process');\n    return execSync(command, { encoding: 'utf8', timeout: 120000 }).toString();\n  }\n\n  private async initiateRollback(): Promise<void> {\n    this.rollbackTriggered = true;\n    await this.exec('kubectl rollout undo deployment/myapp -n production');\n    console.log('[ROLLBACK] Production deployment reverted to previous version');\n  }\n}\n\nconst pipeline = new CapstonePipeline();\npipeline.run().then(result => {\n  console.log('Pipeline complete:', JSON.stringify(result, null, 2));\n});\n"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "mermaid-full-capstone-architecture",
            children: "Mermaid: Full Capstone Architecture"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-mermaid",
              children: "flowchart TD\n    subgraph \"Developer Workstation\"\n        DEV[Git Push] --> GIT[GitHub Repository]\n    end\n    subgraph \"CI Pipeline (GitHub Actions)\"\n        GIT --> LINT[Lint & Type Check]\n        LINT --> UNIT[Unit Tests]\n        UNIT --> BUILD[Docker Build]\n        BUILD --> SCAN[Security Scan]\n        SCAN --> PUSH[Push to Registry]\n    end\n    subgraph \"CD Pipeline (ArgoCD)\"\n        REG[Container Registry] --> STAGING[Deploy to Staging]\n        STAGING --> INTEG[Integration Tests]\n        INTEG --> APPROVAL{Manual Approval}\n        APPROVAL -->|Approve| BLUE[Deploy Blue]\n        APPROVAL -->|Reject| HALT[Pipeline Halted]\n    end\n    subgraph \"Production Cluster\"\n        BLUE --> HEALTH{Health Check}\n        HEALTH -->|Pass| SWITCH[Switch LB to Blue]\n        HEALTH -->|Fail| ROLLBACK[Rollback to Green]\n        SWITCH --> MONITOR[Monitoring Window]\n        MONITOR -->|Healthy| COMPLETE[Deployment Complete]\n        MONITOR -->|Degraded| AUTO_ROLLBACK[Auto Rollback]\n    end\n    subgraph \"Observability Stack\"\n        PROM[Prometheus] --> GRAFANA[Grafana]\n        PROM --> ALERT[Alertmanager]\n        LOKI[Loki] --> GRAFANA\n        TEMPO[Tempo] --> GRAFANA\n    end\n    COMPLETE --> GRAFANA\n    AUTO_ROLLBACK --> ALERT\n    style BLUE fill:#2E77D0,color:#fff\n    style SWITCH fill:#4CAF50,color:#fff\n    style ROLLBACK fill:#F44336,color:#fff\n    style AUTO_ROLLBACK fill:#F44336,color:#fff\n    style ALERT fill:#FF9800,color:#fff\n"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "deeper-explanation-production-deployment-strategy",
            children: "Deeper Explanation: Production Deployment Strategy"
          }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
            id: "blue-green-deployment-mechanics",
            children: "Blue-Green Deployment Mechanics"
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The blue-green deployment pattern maintains two identical production environments:"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Initial state:"
              }), " Green serves all traffic. Blue is idle."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Deploy to blue:"
              }), " The new application version is deployed to the blue environment. Green continues serving users."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Test blue:"
              }), " Run smoke tests against blue to verify the new version works correctly."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Switch traffic:"
              }), " Update the load balancer or service selector to point at blue. Traffic switches instantly."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Monitor:"
              }), " Run a monitoring window (15-60 minutes) observing error rates, latency, and resource usage."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Rollback if needed:"
              }), " If monitoring detects issues, switch the load balancer back to green."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Cleanup:"
              }), " Once confident, scale down green. Keep green ready for the next deployment."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key implementation details:"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Two Kubernetes Deployments with different labels (version: blue vs version: green)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "A single Service that uses a mutable selector label (active: blue or active: green)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The pipeline updates the Service selector to switch traffic"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Database migrations must be backward-compatible"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
            id: "health-check-implementation",
            children: "Health Check Implementation"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-typescript",
              children: "interface HealthCheckConfig {\n  readinessEndpoint: string;\n  livenessEndpoint: string;\n  startupEndpoint?: string;\n  initialDelaySeconds: number;\n  periodSeconds: number;\n  failureThreshold: number;\n}\n\nfunction generateProbeYaml(config: HealthCheckConfig): string {\n  return [\n    'startupProbe:',\n    '  httpGet:',\n    `    path: ${config.startupEndpoint || '/health/startup'}`,\n    '    port: 3000',\n    `  initialDelaySeconds: ${config.initialDelaySeconds}`,\n    '  periodSeconds: 10',\n    '  failureThreshold: 30',\n    'livenessProbe:',\n    '  httpGet:',\n    `    path: ${config.livenessEndpoint}`,\n    '    port: 3000',\n    `  initialDelaySeconds: ${config.initialDelaySeconds + 30}`,\n    `  periodSeconds: ${config.periodSeconds}`,\n    `  failureThreshold: ${config.failureThreshold}`,\n    'readinessProbe:',\n    '  httpGet:',\n    `    path: ${config.readinessEndpoint}`,\n    '    port: 3000',\n    '  initialDelaySeconds: 5',\n    '  periodSeconds: 5',\n    '  failureThreshold: 2',\n  ].join('\\n');\n}\n\nconst probes = generateProbeYaml({\n  readinessEndpoint: '/health/ready',\n  livenessEndpoint: '/health/live',\n  startupEndpoint: '/health/startup',\n  initialDelaySeconds: 10,\n  periodSeconds: 15,\n  failureThreshold: 3,\n});\nconsole.log(probes);\n"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
            id: "pipeline-gate-decision-matrix",
            children: "Pipeline Gate Decision Matrix"
          }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
            children: [(0,jsx_runtime.jsx)(_components.thead, {
              children: (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.th, {
                  children: "Gate"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  children: "Criteria"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  children: "Pass Action"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  children: "Fail Action"
                })]
              })
            }), (0,jsx_runtime.jsxs)(_components.tbody, {
              children: [(0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Lint"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Zero errors"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Continue to tests"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Block, notify PR author"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Unit Tests"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "100% pass, >80% coverage"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Continue to build"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Block, notify team"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Security Scan"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Zero critical/high"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Continue"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Block, create ticket"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Integration Tests"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "All e2e pass"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Continue to prod"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Block, roll back staging"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Manual Approval"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Approver signs"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Deploy blue"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Wait or abort"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Health Check"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "All pods Ready"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Switch traffic"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Rollback, page SRE"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Monitoring Window"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Error rate <1%, p99 <500ms"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Mark complete"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Auto-rollback, page SRE"
                })]
              })]
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "summary-1",
            children: "Summary"
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The capstone project integrates all course topics into a single cohesive system. By completing this project, students demonstrate mastery of DevOps engineering: version control strategy, CI/CD automation, containerization, orchestration, infrastructure as code, configuration management, monitoring, observability, security integration, database operations, networking, and reliability engineering. The blue-green deployment pattern with automated rollback represents the production-grade deployment standard expected of senior DevOps engineers."
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "exercises",
            children: "Exercises"
          }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
            id: "review-questions",
            children: "Review Questions"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Why is trunk-based development preferred over Git Flow for CI/CD pipelines in this project?"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "What is the purpose of deploying to staging before production? What risks does staging mitigate?"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "How does the blue-green service selector switch achieve zero-downtime traffic migration?"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "What monitoring metrics must be observed during the post-deployment monitoring window?"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Why are database migrations run as a Kubernetes Job rather than as a container command in the API deployment?"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
            id: "application-problems",
            children: "Application Problems"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Implement the complete pipeline described in this chapter. Demonstrate each stage working with screenshots or terminal output. Verify that a pipeline failure at each gate correctly blocks the next stage."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Test the blue-green deployment by deploying two different application versions (distinguishable by a visible feature or header). Verify zero-downtime by maintaining a continuous HTTP request stream during deployment."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Simulate a pipeline failure scenario: introduce a security vulnerability (e.g., a known-vulnerable dependency version or a hardcoded secret) and verify that the pipeline correctly detects and blocks it."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Implement the TypeScript pipeline orchestrator above. Add a stage for database migration that runs before deployment and verifies backward compatibility."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Create a rollback test: Deploy a version with a deliberate bug, verify that the monitoring window detects increased error rates, and confirm the automated rollback triggers correctly."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Write a script that generates Helm chart values for blue-green deployments across multiple environments (dev, staging, prod) using TypeScript. Include configurable health check probes."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
            id: "challenge-problem",
            children: "Challenge Problem"
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Extend the capstone system with the following advanced features (choose two):"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Feature flags"
              }), " - Integrate LaunchDarkly or Unleash to decouple deployment from feature release. Implement a canary release that gradually shifts 1%, 10%, 50%, 100% of traffic to the new version."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Chaos engineering"
              }), " - Integrate Chaos Mesh or Litmus to inject faults during the post-deployment monitoring window. Verify that the system degrades gracefully and auto-heals."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Cost optimization"
              }), " - Implement a FinOps dashboard showing per-service and per-environment infrastructure costs. Configure automatic scaling policies and spot instance usage for non-critical workloads."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Multi-cloud"
              }), " - Deploy the database on a second cloud provider. Implement cross-region failover and replication using streaming replication or change data capture."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "ML/AI integration"
              }), " - Add a service that uses a machine learning model for recommendation or personalization. Implement model versioning, A/B testing, and automated model retraining in the pipeline."]
            }), "\n"]
          }), "\n"]
        })]
      })]
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