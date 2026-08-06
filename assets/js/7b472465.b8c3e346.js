"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[10610],{

/***/ 25549
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_software_engineering_12_devops_cicd_md_7b4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-software-engineering-12-devops-cicd-md-7b4.json
const site_docs_courses_software_engineering_12_devops_cicd_md_7b4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/software-engineering/12-devops-cicd","title":"DevOps and CI/CD","description":"Learning Objectives","source":"@site/docs/courses/software-engineering/12-devops-cicd.md","sourceDirName":"courses/software-engineering","slug":"/software-engineering/12-devops-cicd","permalink":"/ai-engineering-journey/software-engineering/12-devops-cicd","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"id":"12-devops-cicd","slug":"/software-engineering/12-devops-cicd","title":"DevOps and CI/CD","sidebar_label":"DevOps and CI/CD","sidebar_position":12},"sidebar":"coursesSidebar","previous":{"title":"Agile Methodologies","permalink":"/ai-engineering-journey/software-engineering/11-agile-methodologies"},"next":{"title":"Security Engineering","permalink":"/ai-engineering-journey/software-engineering/13-security-engineering"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/software-engineering/12-devops-cicd.md


const frontMatter = {
	id: '12-devops-cicd',
	slug: '/software-engineering/12-devops-cicd',
	title: 'DevOps and CI/CD',
	sidebar_label: 'DevOps and CI/CD',
	sidebar_position: 12
};
const contentTitle = 'DevOps and CI/CD';

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
  "value": "What is DevOps?",
  "id": "what-is-devops",
  "level": 3
}, {
  "value": "The Three Ways of DevOps (Gene Kim)",
  "id": "the-three-ways-of-devops-gene-kim",
  "level": 3
}, {
  "value": "The CALMS Framework",
  "id": "the-calms-framework",
  "level": 3
}, {
  "value": "Continuous Integration (CI)",
  "id": "continuous-integration-ci",
  "level": 3
}, {
  "value": "Continuous Delivery (CD)",
  "id": "continuous-delivery-cd",
  "level": 3
}, {
  "value": "Infrastructure as Code (IaC)",
  "id": "infrastructure-as-code-iac",
  "level": 3
}, {
  "value": "Containerisation",
  "id": "containerisation",
  "level": 3
}, {
  "value": "Container Orchestration (Kubernetes)",
  "id": "container-orchestration-kubernetes",
  "level": 3
}, {
  "value": "Deployment Strategies",
  "id": "deployment-strategies",
  "level": 3
}, {
  "value": "Monitoring and Observability",
  "id": "monitoring-and-observability",
  "level": 3
}, {
  "value": "Security in DevOps (DevSecOps)",
  "id": "security-in-devops-devsecops",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: CICDPipeline — Build, Test, Deploy Stages with Gates",
  "id": "example-1-cicdpipeline--build-test-deploy-stages-with-gates",
  "level": 3
}, {
  "value": "Example 2: DockerfileGenerator — Multi-Stage Dockerfile Generation",
  "id": "example-2-dockerfilegenerator--multi-stage-dockerfile-generation",
  "level": 3
}, {
  "value": "Example 3: ObservabilityStack — Logger, Metrics Collector, Span Tracer",
  "id": "example-3-observabilitystack--logger-metrics-collector-span-tracer",
  "level": 3
}, {
  "value": "Example 4: GitHub Actions CI Pipeline",
  "id": "example-4-github-actions-ci-pipeline",
  "level": 3
}, {
  "value": "Example 5: Deployment Manager with Multiple Strategies",
  "id": "example-5-deployment-manager-with-multiple-strategies",
  "level": 3
}, {
  "value": "Real-World Case Studies",
  "id": "real-world-case-studies",
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
  "value": "TypeScript: DevOps Tools",
  "id": "typescript-devops-tools",
  "level": 3
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
        id: "devops-and-cicd",
        children: "DevOps and CI/CD"
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
        }), " Explain DevOps principles, culture, and the CALMS framework"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Implement a continuous integration pipeline with automated builds, tests, and linting"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Design a continuous delivery pipeline that deploys to staging and production environments"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Configure infrastructure as code using Terraform, Pulumi, and CloudFormation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Apply containerisation with Docker multi-stage builds and Docker Compose"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Implement observability with logging, metrics, tracing, and alerting"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Analyse deployment strategies: blue-green, canary, rolling"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Build production-grade DevOps tools in TypeScript (CICDPipeline, DockerfileGenerator, ObservabilityStack)"]
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
        href: "../../assets/images/lessons/software-engineering/12-devops-cicd/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/software-engineering/12-devops-cicd/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/software-engineering/12-devops-cicd/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/software-engineering/12-devops-cicd/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/software-engineering/12-devops-cicd/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/software-engineering/12-devops-cicd/visual-explanation.png",
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
      id: "what-is-devops",
      children: "What is DevOps?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevOps is a cultural and technical movement that bridges the gap between development (Dev) and operations (Ops). It emphasises automation, measurement, sharing, and short feedback loops to deliver software faster and more reliably."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"DevOps Loop\"\n        DEV[Develop] --> BUILD[Build]\n        BUILD --> TEST[Test]\n        TEST --> DEPLOY[Deploy]\n        DEPLOY --> OPERATE[Operate]\n        OPERATE --> MONITOR[Monitor]\n        MONITOR --> PLAN[Plan]\n        PLAN --> DEV\n    end\n    \n    classDef phase fill:#e1f5fe,stroke:#0288d1\n    class DEV,BUILD,TEST,DEPLOY,OPERATE,MONITOR,PLAN phase\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-three-ways-of-devops-gene-kim",
      children: "The Three Ways of DevOps (Gene Kim)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Way"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Principle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Anti-Pattern"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "First Way"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Systems thinking (flow)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small batches, CI/CD, trunk-based development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handoffs, large batches, silos"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Second Way"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amplify feedback loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitoring, alerting, blameless postmortems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignoring metrics, finger-pointing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Third Way"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Culture of experimentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chaos engineering, fault injection, continuous improvement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fear of change, risk aversion"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-calms-framework",
      children: "The CALMS Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CALMS is a framework for assessing DevOps adoption across five dimensions:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Maturity Indicators"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            }), "ulture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collaborative, shared responsibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blameless postmortems, cross-functional teams, trust"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "A"
            }), "utomation"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automate everything possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI/CD pipelines, IaC, automated testing, self-service platforms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "L"
            }), "ean"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flow efficiency, eliminate waste"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WIP limits, small batches, value stream mapping, pull systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "M"
            }), "easurement"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data-driven decisions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Four golden signals, DORA metrics, error budgets, dashboards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "S"
            }), "haring"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Knowledge sharing across teams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ChatOps, documentation, internal open source, guilds"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DORA Metrics (key DevOps measurements):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Elite"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Low"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deployment Frequency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple times/day"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weekly-monthly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monthly-every 6 months"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< every 6 months"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lead Time for Changes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 1 hour"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 day-1 week"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 week-1 month"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 6 months"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Change Failure Rate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 5%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 10%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 15%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 30%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time to Restore Service"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 1 hour"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 1 day"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 1 day"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 1 week"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "continuous-integration-ci",
      children: "Continuous Integration (CI)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CI is the practice of merging all developer code into a shared mainline multiple times per day, with each merge verified by an automated build and test suite."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CI requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version control (Git)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated build script"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated test suite"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CI server (Jenkins, GitHub Actions, GitLab CI)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fast feedback (< 10 minutes)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    DEV1[Developer A] -->|Commit| REPO[Shared Repository]\n    DEV2[Developer B] -->|Commit| REPO\n    DEV3[Developer C] -->|Commit| REPO\n    REPO --> CI_BUILD[CI Server]\n    CI_BUILD --> LINT[Lint]\n    CI_BUILD --> UNIT[Unit Tests]\n    CI_BUILD --> INTEG[Integration Tests]\n    CI_BUILD --> BUILD[Build Artifact]\n    BUILD -->|Pass/Fail| STATUS[Status Notification]\n    STATUS -->|Pass| DEPLOY_TRIGGER[Trigger CD]\n    STATUS -->|Fail| FIX[Fix Immediately]\n    FIX --> REPO\n    \n    classDef dev fill:#e3f2fd,stroke:#1565c0\n    classDef ci fill:#fff3e0,stroke:#f57c00\n    class STAT,REPO,CI_BUILD,LINT,UNIT,INTEG,BUILD,STATUS,FIX ci\n    class DEV1,DEV2,DEV3 dev\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CI best practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Commit frequently (multiple times daily)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep the build fast (< 10 minutes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix broken builds immediately (stop the line)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run tests in isolation (containers)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain a single source repository"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automate everything — no manual steps"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "continuous-delivery-cd",
      children: "Continuous Delivery (CD)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Continuous Delivery ensures that every change passing all tests is potentially releasable to production. Continuous Deployment goes further — every passing change is automatically deployed."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Practice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frequency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Approval Gate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Risk Level"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Continuous Integration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per commit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build + test pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Continuous Delivery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On demand (per commit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human approval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Continuous Deployment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per commit (auto)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (fully automated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (requires confidence)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    subgraph \"Delivery Pipeline\"\n        CI[CI: Build + Test] --> CD[Continuous Delivery]\n        CD --> STG[Deploy to Staging]\n        STG --> SMOKE[Smoke Tests]\n        SMOKE -->|Manual Gate| PROD[Deploy to Production]\n        \n        CI --> CDEPLOY[Continuous Deployment]\n        CDEPLOY --> STG2[Deploy to Staging]\n        STG2 --> SMOKE2[Smoke Tests]\n        SMOKE2 -->|Auto| PROD2[Deploy to Production]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "infrastructure-as-code-iac",
      children: "Infrastructure as Code (IaC)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IaC manages infrastructure (networks, VMs, load balancers) through machine-readable definition files rather than manual configuration."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Language"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State Management"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Terraform"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HCL (HashiCorp Language)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State file (remote)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-cloud infrastructure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pulumi"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TypeScript, Python, Go, C#"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State file (managed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Developers wanting real languages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AWS CDK"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TypeScript, Python, Java, C#"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS CloudFormation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS-only infrastructure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Imperative → Declarative"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ansible"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YAML playbooks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agentless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Imperative"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CloudFormation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YAML/JSON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS-managed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS-native teams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Chef"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ruby DSL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chef Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Config mgmt at scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Imperative"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Puppet"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Puppet DSL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Puppet Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Config mgmt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "IaC principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Idempotency:"
        }), " Running the same code produces the same result"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Declarative:"
        }), " Specify desired state, not steps to achieve it"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioned:"
        }), " Infrastructure code lives in version control"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reviewable:"
        }), " Changes go through pull requests"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testable:"
        }), " Infrastructure can be validated in CI (Terratest, tflint)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "containerisation",
      children: "Containerisation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Containers package an application with all its dependencies into a single, portable unit."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Docker Architecture\"\n        DOCKER[Docker Engine] --> IMG[Images]\n        DOCKER --> CONT[Containers]\n        DOCKER --> REG[Registry]\n        \n        IMG --> L1[Base Layer: OS]\n        IMG --> L2[Runtime: Node.js]\n        IMG --> L3[App Dependencies]\n        IMG --> L4[Application Code]\n        \n        CONT --> C1[Container 1]\n        CONT --> C2[Container 2]\n        CONT --> C3[Container 3]\n        \n        REG --> PUB[Public: Docker Hub]\n        REG --> PRIV[Private Registry]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multi-stage builds"
      }), " separate build-time dependencies from runtime, producing smaller, more secure images:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Single-stage: 1.2 GB\nMulti-stage:  120 MB (90% reduction)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dockerfile best practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use specific base image tags (not ", (0,jsx_runtime.jsx)(_components.code, {
          children: ":latest"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-stage builds to minimise size"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Order instructions from least to most frequently changing"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".dockerignore"
        }), " to exclude unnecessary files"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run as non-root user"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add HEALTHCHECK instruction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use layer caching effectively"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scan images for vulnerabilities"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "container-orchestration-kubernetes",
      children: "Container Orchestration (Kubernetes)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kubernetes is an open-source container orchestration platform."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Resource"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pod"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smallest deployable unit (one or more containers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "nginx:1.25"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deployment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declares desired state for pods (replicas, updates)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 replicas, rolling update"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Service"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stable network endpoint for a set of pods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ClusterIP, LoadBalancer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ingress"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External HTTP/HTTPS routing to services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path-based routing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ConfigMap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-sensitive configuration data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "app.properties"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Secret"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensitive data (passwords, tokens)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base64-encoded, encrypted at rest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PersistentVolume"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Storage infrastructure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NFS, EBS, GCE PD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Namespace"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual cluster for resource isolation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "dev"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "staging"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "prod"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HPA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal Pod Autoscaler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scale by CPU/memory/custom metrics"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    ING[Ingress: api.example.com] --> SVC[Service: port 80]\n    SVC --> POD1[Pod: app v1.0.0]\n    SVC --> POD2[Pod: app v1.0.0]\n    SVC --> POD3[Pod: app v1.0.0]\n    \n    DEP[Deployment: 3 replicas] -->|manages| POD1\n    DEP -->|manages| POD2\n    DEP -->|manages| POD3\n    \n    CM[ConfigMap: config] -->|mounted at /app/config| POD1\n    SEC[Secret: db-password] -->|mounted at /secrets| POD1\n    HPA[HorizontalPodAutoscaler] -->|scales| DEP\n    \n    classDef k8s fill:#326ce5,color:#fff\n    class ING,SVC,POD1,POD2,POD3,DEP,CM,SEC,HPA k8s\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deployment-strategies",
      children: "Deployment Strategies"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Downtime"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rollback"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recreate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminate old, deploy new"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Re-deploy old"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rolling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gradually replace instances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse the rollout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blue-Green"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two identical environments, switch traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch back"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Canary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route small % of traffic to new version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reroute traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "A/B Testing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route traffic based on user segments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reroute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    subgraph \"Blue-Green Deployment\"\n        ROUTER[Load Balancer] -->|Traffic| BLUE[Blue: v1.0 Active]\n        ROUTER -.-|Idle| GREEN[Green: v2.0 Staged]\n        \n        ROUTER2[Load Balancer] -->|Traffic| BLUE2[Blue: v1.0 Idle]\n        ROUTER2 -.-|Test OK - Switch| GREEN2[Green: v2.0 Active]\n    end\n    \n    subgraph \"Canary Deployment Phases\"\n        P1[Phase 1: 5%] --> P2[Phase 2: 25%]\n        P2 --> P3[Phase 3: 50%]\n        P3 --> P4[Phase 4: 100%]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "monitoring-and-observability",
      children: "Monitoring and Observability"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Observability pillars:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pillar"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What it answers"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tools"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Type"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Metrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is happening?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prometheus, Grafana, Datadog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time-series numbers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Logging"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Why is it happening?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ELK Stack, Loki, CloudWatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured/unstructured text"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tracing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Where is it happening?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jaeger, Zipkin, OpenTelemetry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed request paths"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Alerting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When should we care?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PagerDuty, OpsGenie, Alertmanager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thresholds + notifications"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The USE Method (Brendan Gregg) for resource analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Utilisation:"
        }), " Percentage of resource being used (e.g., CPU 75%)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Saturation:"
        }), " Amount of queued work (e.g., run queue length)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Errors:"
        }), " Count of error events (e.g., network interface errors)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Four Golden Signals (Google SRE):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Latency:"
        }), " Time to serve a request (p50, p95, p99)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Traffic:"
        }), " Demand on the system (requests/second, active users)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Errors:"
        }), " Rate of failed requests (5xx, 4xx, exceptions)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Saturation:"
        }), " How \"full\" the service is (CPU, memory, connections)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SRE Concepts:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formula"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SLI (Service Level Indicator)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actual measurement of service level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request latency p99"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SLO (Service Level Objective)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target value for SLI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p99 < 200ms, 99.9% of time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SLA (Service Level Agreement)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contractual commitment to customer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99.9% uptime, credits for breach"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Error Budget"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed time of SLO violation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100% - SLO = 0.1% (43.2 min/month)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "security-in-devops-devsecops",
      children: "Security in DevOps (DevSecOps)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Shift security left — integrate security into every stage of DevOps:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Stage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security Practice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tools"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Code"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAST, secrets scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CodeQL, Semgrep, git-secrets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Build"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SCA, dependency scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Snyk, npm audit, OWASP DC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Test"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DAST, fuzzing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OWASP ZAP, Burp Suite"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deploy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image scanning, policy as code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trivy, Clair, OPA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Run"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RASP, runtime monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Falco, Sysdig"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-cicdpipeline--build-test-deploy-stages-with-gates",
      children: "Example 1: CICDPipeline — Build, Test, Deploy Stages with Gates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A complete CI/CD pipeline implementation with stage management, parallel execution, quality gates, artifacts, deployment strategies, and rollback support."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface PipelineConfig {\n  name: string;\n  repository: string;\n  branch: string;\n  buildCommand: string;\n  testCommand: string;\n  artifactPath: string;\n}\n\ninterface PipelineStage {\n  name: string;\n  type: 'build' | 'test' | 'quality' | 'deploy' | 'approval' | 'notify';\n  run: (context: PipelineContext) => Promise<StageResult>;\n  timeout: number;\n  retries: number;\n  required: boolean;\n  dependsOn: string[];\n}\n\ninterface StageResult {\n  passed: boolean;\n  output: string;\n  duration: number;\n  artifacts?: string[];\n  metrics?: Record<string, number>;\n}\n\ninterface PipelineContext {\n  buildId: string;\n  commitHash: string;\n  branch: string;\n  version: string;\n  environment: string;\n  startTime: Date;\n  variables: Map<string, string>;\n}\n\ninterface PipelineResult {\n  pipelineName: string;\n  buildId: string;\n  passed: boolean;\n  stages: { name: string; passed: boolean; duration: number; output: string }[];\n  totalDuration: number;\n  artifactUrl?: string;\n  failedStage?: string;\n}\n\nclass CICDPipeline {\n  private stages: PipelineStage[] = [];\n  private context: PipelineContext;\n\n  constructor(config: PipelineConfig) {\n    this.context = {\n      buildId: `build-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`,\n      commitHash: process.env['GIT_COMMIT'] || 'unknown',\n      branch: config.branch,\n      version: '0.0.0',\n      environment: 'development',\n      startTime: new Date(),\n      variables: new Map(),\n    };\n  }\n\n  public addStage(stage: PipelineStage): void {\n    this.stages.push(stage);\n  }\n\n  public setVersion(version: string): void {\n    this.context.version = version;\n  }\n\n  public setEnvironment(env: string): void {\n    this.context.environment = env;\n  }\n\n  public async execute(): Promise<PipelineResult> {\n    const overallStart = Date.now();\n    const stageResults: { name: string; passed: boolean; duration: number; output: string }[] = [];\n    const completed = new Set<string>();\n\n    const executeStage = async (stage: PipelineStage): Promise<void> => {\n      if (completed.has(stage.name)) return;\n\n      // Wait for dependencies\n      for (const dep of stage.dependsOn) {\n        const depStage = this.stages.find(s => s.name === dep);\n        if (depStage) await executeStage(depStage);\n      }\n\n      // Check if all dependencies passed\n      const failedDeps = stage.dependsOn.filter(d =>\n        stageResults.find(r => r.name === d && !r.passed)\n      );\n      if (failedDeps.length > 0) {\n        stageResults.push({\n          name: stage.name, passed: false,\n          duration: 0, output: `Skipped: dependencies ${failedDeps.join(', ')} failed`,\n        });\n        completed.add(stage.name);\n        return;\n      }\n\n      const stageStart = Date.now();\n      let lastError: Error | undefined;\n\n      for (let attempt = 0; attempt <= stage.retries; attempt++) {\n        try {\n          const timeout = new Promise<never>((_, reject) =>\n            setTimeout(() => reject(new Error('Timeout')), stage.timeout)\n          );\n          const result = await Promise.race([\n            stage.run(this.context),\n            timeout,\n          ]) as StageResult;\n\n          stageResults.push({\n            name: stage.name,\n            passed: result.passed,\n            duration: Date.now() - stageStart,\n            output: result.output,\n          });\n\n          if (result.passed) {\n            completed.add(stage.name);\n            return;\n          }\n          lastError = new Error(result.output);\n        } catch (err) {\n          lastError = err instanceof Error ? err : new Error(String(err));\n          if (attempt < stage.retries) {\n            await new Promise(r => setTimeout(r, 1000 * Math.pow(2, attempt)));\n          }\n        }\n      }\n\n      // All retries failed\n      if (stage.required) {\n        stageResults.push({\n          name: stage.name, passed: false,\n          duration: Date.now() - stageStart,\n          output: lastError?.message || 'Unknown error',\n        });\n        completed.add(stage.name);\n      }\n    };\n\n    // Execute entry-point stages (those without dependencies) in parallel\n    const entryStages = this.stages.filter(s => s.dependsOn.length === 0);\n    await Promise.all(entryStages.map(s => executeStage(s)));\n\n    // Execute remaining stages that depend on others\n    const remaining = this.stages.filter(s => !completed.has(s.name));\n    for (const stage of remaining) {\n      await executeStage(stage);\n    }\n\n    const totalDuration = Date.now() - overallStart;\n    const failedCritical = stageResults.find(r => {\n      const stage = this.stages.find(s => s.name === r.name);\n      return !r.passed && stage?.required;\n    });\n\n    return {\n      pipelineName: this.context.buildId,\n      buildId: this.context.buildId,\n      passed: !failedCritical,\n      stages: stageResults,\n      totalDuration,\n      failedStage: failedCritical?.name,\n    };\n  }\n\n  public generateReport(result: PipelineResult): string {\n    const lines = [\n      '═══════════════════════════════════════════',\n      `  Pipeline: ${this.context.buildId}`,\n      `  Branch: ${this.context.branch}`,\n      `  Version: ${this.context.version}`,\n      `  Environment: ${this.context.environment}`,\n      `  Result: ${result.passed ? '✅ PASSED' : '❌ FAILED'}`,\n      `  Duration: ${(result.totalDuration / 1000).toFixed(1)}s`,\n      '═══════════════════════════════════════════',\n      '',\n      '  Stages:',\n      ...result.stages.map(s =>\n        `    ${s.passed ? '✅' : '❌'} ${s.name.padEnd(25)} ${(s.duration / 1000).toFixed(1)}s`\n      ),\n      '',\n      ...(result.failedStage ? [`  ❌ Failed at: ${result.failedStage}`] : []),\n    ];\n    return lines.join('\\n');\n  }\n}\n\n// Build stage factory\nfunction createBuildStage(name: string, command: string): PipelineStage {\n  return {\n    name, type: 'build',\n    run: async (ctx) => {\n      console.log(`[${name}] Running: ${command}`);\n      await new Promise(r => setTimeout(r, 2000));\n      return { passed: true, output: `Build completed for ${ctx.buildId}`, duration: 2000 };\n    },\n    timeout: 300000, retries: 0, required: true, dependsOn: [],\n  };\n}\n\nfunction createTestStage(name: string, command: string, deps: string[]): PipelineStage {\n  return {\n    name, type: 'test',\n    run: async () => {\n      console.log(`[${name}] Running: ${command}`);\n      await new Promise(r => setTimeout(r, 3000));\n      const passed = Math.random() > 0.1;\n      return { passed, output: passed ? 'All tests passed' : 'Test failures detected', duration: 3000 };\n    },\n    timeout: 600000, retries: 1, required: true, dependsOn: deps,\n  };\n}\n\n// Usage\nconst pipeline = new CICDPipeline({\n  name: 'auth-service',\n  repository: 'https://github.com/org/auth-service',\n  branch: 'main',\n  buildCommand: 'npm run build',\n  testCommand: 'npm test',\n  artifactPath: 'dist/',\n});\n\npipeline.addStage(createBuildStage('Checkout', 'git clone'));\npipeline.addStage(createBuildStage('Install Dependencies', 'npm ci'));\npipeline.addStage(createBuildStage('Lint', 'npm run lint'));\npipeline.addStage(createTestStage('Unit Tests', 'npm run test:unit', ['Lint']));\npipeline.addStage(createTestStage('Integration Tests', 'npm run test:integration', ['Build']));\npipeline.addStage(createBuildStage('Build', 'npm run build',));\n// Fix dependencies: integration tests should depend on build\nconst buildStage = pipeline['stages'].find(s => s.name === 'Build');\nconst integrationStage = pipeline['stages'].find(s => s.name === 'Integration Tests');\nif (integrationStage) integrationStage.dependsOn = ['Build'];\nif (buildStage) buildStage.dependsOn = ['Install Dependencies', 'Unit Tests'];\n\n// Quality gates\npipeline.addStage({\n  name: 'Security Scan', type: 'quality',\n  run: async () => {\n    await new Promise(r => setTimeout(r, 4000));\n    return { passed: true, output: 'No vulnerabilities found', duration: 4000 };\n  },\n  timeout: 300000, retries: 0, required: true, dependsOn: ['Build'],\n});\n\npipeline.addStage({\n  name: 'Deploy Staging', type: 'deploy',\n  run: async (ctx) => {\n    await new Promise(r => setTimeout(r, 5000));\n    return { passed: true, output: `Deployed version ${ctx.version} to staging`, duration: 5000 };\n  },\n  timeout: 600000, retries: 2, required: true, dependsOn: ['Security Scan'],\n});\n\npipeline.setVersion('1.2.3');\npipeline.setEnvironment('staging');\n\npipeline.execute().then(result => {\n  console.log(pipeline.generateReport(result));\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-dockerfilegenerator--multi-stage-dockerfile-generation",
      children: "Example 2: DockerfileGenerator — Multi-Stage Dockerfile Generation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A programmatic Dockerfile generator that produces optimised multi-stage Dockerfiles with security best practices, HEALTHCHECK, and production-ready configuration."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type BaseImageType = 'node' | 'python' | 'java' | 'go' | 'rust' | 'nginx';\ntype PackageManager = 'npm' | 'pip' | 'gradle' | 'maven' | 'go-mod' | 'cargo';\n\ninterface DockerfileConfig {\n  baseImage: BaseImageType;\n  version: string;\n  packageManager: PackageManager;\n  buildCommand: string;\n  startCommand: string;\n  port: number;\n  outputDir: string;\n  additionalPackages?: string[];\n  envVars?: Record<string, string>;\n  healthCheckPath?: string;\n  user?: string;\n}\n\nclass DockerfileGenerator {\n  private static readonly BASE_IMAGES: Record<BaseImageType, Record<string, { builder: string; runner: string }>> = {\n    node: {\n      '18': { builder: 'node:18-alpine', runner: 'node:18-alpine' },\n      '20': { builder: 'node:20-alpine', runner: 'node:20-alpine' },\n      '22': { builder: 'node:22-alpine', runner: 'node:22-alpine' },\n    },\n    python: {\n      '3.11': { builder: 'python:3.11-slim', runner: 'python:3.11-slim' },\n      '3.12': { builder: 'python:3.12-slim', runner: 'python:3.12-slim' },\n    },\n    java: {\n      '17': { builder: 'eclipse-temurin:17-jdk-alpine', runner: 'eclipse-temurin:17-jre-alpine' },\n      '21': { builder: 'eclipse-temurin:21-jdk-alpine', runner: 'eclipse-temurin:21-jre-alpine' },\n    },\n    go: {\n      '1.21': { builder: 'golang:1.21-alpine', runner: 'alpine:3.19' },\n      '1.22': { builder: 'golang:1.22-alpine', runner: 'alpine:3.19' },\n    },\n    rust: {\n      '1.75': { builder: 'rust:1.75-alpine', runner: 'alpine:3.19' },\n      '1.76': { builder: 'rust:1.76-alpine', runner: 'alpine:3.19' },\n    },\n    nginx: {\n      '1.25': { builder: 'node:20-alpine', runner: 'nginx:1.25-alpine' },\n      '1.26': { builder: 'node:20-alpine', runner: 'nginx:1.26-alpine' },\n    },\n  };\n\n  private static readonly PACKAGE_MANAGER_COMMANDS: Record<PackageManager, { install: string; ci: string; build?: string; cache?: string }> = {\n    npm: { install: 'npm install', ci: 'npm ci', build: 'npm run build', cache: 'npm cache clean --force' },\n    pip: { install: 'pip install -r requirements.txt', ci: 'pip install --no-cache-dir -r requirements.txt' },\n    gradle: { install: 'gradle dependencies', ci: 'gradle build --no-daemon', build: 'gradle build' },\n    maven: { install: 'mvn dependency:resolve', ci: 'mvn clean package -DskipTests', build: 'mvn package' },\n    'go-mod': { install: 'go mod download', ci: 'go mod download', build: 'go build -o /app/app' },\n    cargo: { install: 'cargo fetch', ci: 'cargo fetch', build: 'cargo build --release' },\n  };\n\n  public generate(config: DockerfileConfig): string {\n    const base = DockerfileGenerator.BASE_IMAGES[config.baseImage]?.[config.version];\n    if (!base) throw new Error(`Unsupported base image ${config.baseImage}:${config.version}`);\n\n    const pm = DockerfileGenerator.PACKAGE_MANAGER_COMMANDS[config.packageManager];\n    const lines: string[] = [];\n\n    // Stage 1: Builder\n    lines.push(`# Stage 1: Build stage`);\n    lines.push(`FROM ${base.builder} AS builder`);\n    lines.push('');\n    lines.push('WORKDIR /build');\n    lines.push('');\n    lines.push('# Install build dependencies');\n    if (config.additionalPackages?.length) {\n      lines.push(`RUN apk add --no-cache ${config.additionalPackages.join(' ')}`);\n      lines.push('');\n    }\n\n    // Copy package files first for layer caching\n    lines.push('# Copy dependency files (cached layer)');\n    switch (config.packageManager) {\n      case 'npm':\n        lines.push('COPY package.json package-lock.json* ./');\n        lines.push(`RUN ${pm.ci || pm.install}`);\n        break;\n      case 'pip':\n        lines.push('COPY requirements.txt ./');\n        lines.push(`RUN ${pm.ci || pm.install}`);\n        break;\n      case 'go-mod':\n        lines.push('COPY go.mod go.sum* ./');\n        lines.push(`RUN ${pm.install}`);\n        break;\n      case 'cargo':\n        lines.push('COPY Cargo.toml Cargo.lock* ./');\n        lines.push(`RUN ${pm.install}`);\n        break;\n      default:\n        lines.push(`RUN ${pm.install}`);\n    }\n    lines.push('');\n\n    // Copy source and build\n    lines.push('# Copy source code');\n    lines.push('COPY . .');\n    lines.push('');\n    lines.push('# Build application');\n    lines.push(`RUN ${pm.build || config.buildCommand}`);\n    lines.push('');\n\n    // Remove dev dependencies for production\n    if (config.packageManager === 'npm') {\n      lines.push('# Prune dev dependencies');\n      lines.push('RUN npm prune --production');\n      lines.push('');\n    }\n\n    // Stage 2: Runner\n    lines.push('# Stage 2: Production');\n    lines.push(`FROM ${base.runner} AS runner`);\n    lines.push('');\n\n    // Create non-root user\n    const appUser = config.user || 'appuser';\n    lines.push('# Create non-root user');\n    lines.push(`RUN addgroup -S appgroup && adduser -S ${appUser} -G appgroup`);\n    lines.push('');\n\n    lines.push('WORKDIR /app');\n    lines.push('');\n\n    // Copy from builder\n    if (config.baseImage === 'nginx') {\n      lines.push(`COPY --from=builder /build/${config.outputDir} /usr/share/nginx/html`);\n    } else {\n      lines.push(`COPY --from=builder /build/${config.outputDir} ./${config.outputDir}`);\n      lines.push('COPY --from=builder /build/node_modules ./node_modules');\n    }\n    lines.push('');\n\n    // Environment variables\n    if (config.envVars) {\n      lines.push('# Environment variables');\n      for (const [key, val] of Object.entries(config.envVars)) {\n        lines.push(`ENV ${key}=${val}`);\n      }\n      lines.push('');\n    }\n\n    // Switch to non-root user\n    lines.push(`USER ${appUser}`);\n    lines.push('');\n\n    // Expose port\n    lines.push(`EXPOSE ${config.port}`);\n    lines.push('');\n\n    // Healthcheck\n    if (config.healthCheckPath) {\n      lines.push(`HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\\\`);\n      if (config.baseImage === 'nginx') {\n        lines.push(`  CMD wget --no-verbose --tries=1 --spider http://localhost:${config.port}${config.healthCheckPath} || exit 1`);\n      } else {\n        lines.push(`  CMD node -e \"require('http').get('http://localhost:${config.port}${config.healthCheckPath}', r => process.exit(r.statusCode === 200 ? 0 : 1))\" || exit 1`);\n      }\n      lines.push('');\n    }\n\n    // Start command\n    lines.push(`CMD ${config.startCommand}`);\n\n    return lines.join('\\n');\n  }\n\n  public static validate(content: string): string[] {\n    const issues: string[] = [];\n    const lines = content.split('\\n').map(l => l.trim());\n\n    if (!lines.some(l => l.startsWith('FROM '))) issues.push('Missing FROM instruction');\n    if (lines.some(l => l.startsWith('FROM ') && l.includes(':latest'))) issues.push('Avoid :latest tag in production — use specific version');\n    if (!lines.some(l => l.startsWith('HEALTHCHECK'))) issues.push('Missing HEALTHCHECK — container orchestration needs it');\n    if (!lines.some(l => l.startsWith('EXPOSE '))) issues.push('Missing EXPOSE instruction');\n    if (!lines.some(l => l.startsWith('USER '))) issues.push('Missing USER — running as root is a security risk');\n    if (content.includes('COPY . .') && !content.includes('.dockerignore')) issues.push('COPY . . without .dockerignore may include unnecessary files');\n    if (lines.some(l => l.startsWith('RUN apt-get') && !l.includes('rm -rf /var/lib/apt/lists'))) issues.push('apt-get without cleaning apt cache increases image size');\n\n    // Check for multi-stage build\n    const fromLines = lines.filter(l => l.startsWith('FROM '));\n    if (fromLines.length < 2) issues.push('Consider multi-stage build to reduce image size');\n\n    return issues;\n  }\n}\n\n// Usage\nconst generator = new DockerfileGenerator();\nconst dockerfile = generator.generate({\n  baseImage: 'node',\n  version: '20',\n  packageManager: 'npm',\n  buildCommand: 'npm run build',\n  startCommand: '[\"node\", \"dist/index.js\"]',\n  port: 3000,\n  outputDir: 'dist',\n  envVars: { NODE_ENV: 'production' },\n  healthCheckPath: '/health',\n  user: 'appuser',\n});\nconsole.log(dockerfile);\nconsole.log('Validation:', DockerfileGenerator.validate(dockerfile));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-observabilitystack--logger-metrics-collector-span-tracer",
      children: "Example 3: ObservabilityStack — Logger, Metrics Collector, Span Tracer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A full observability stack implementation with structured logging, metrics collection (counters, gauges, histograms), distributed tracing, and health check endpoints."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ============ Structured Logging ============\n\ntype LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'fatal';\n\ninterface LogEntry {\n  timestamp: string;\n  level: LogLevel;\n  message: string;\n  service: string;\n  traceId?: string;\n  spanId?: string;\n  parentSpanId?: string;\n  correlationId?: string;\n  metadata?: Record<string, unknown>;\n  error?: { name: string; message: string; stack?: string };\n}\n\ninterface LoggerConfig {\n  service: string;\n  level: LogLevel;\n  prettyPrint?: boolean;\n  outputStream?: NodeJS.WriteStream;\n}\n\nclass StructuredLogger {\n  private readonly config: LoggerConfig;\n\n  constructor(config: LoggerConfig) {\n    this.config = config;\n  }\n\n  public debug(message: string, metadata?: Record<string, unknown>): void {\n    this.emit('debug', message, metadata);\n  }\n\n  public info(message: string, metadata?: Record<string, unknown>): void {\n    this.emit('info', message, metadata);\n  }\n\n  public warn(message: string, metadata?: Record<string, unknown>): void {\n    this.emit('warn', message, metadata);\n  }\n\n  public error(message: string, error?: Error, metadata?: Record<string, unknown>): void {\n    this.emit('error', message, {\n      ...metadata,\n      error: error ? { name: error.name, message: error.message, stack: error.stack } : undefined,\n    });\n  }\n\n  public fatal(message: string, error?: Error, metadata?: Record<string, unknown>): void {\n    this.emit('fatal', message, {\n      ...metadata,\n      error: error ? { name: error.name, message: error.message, stack: error.stack } : undefined,\n    });\n  }\n\n  public child(metadata: Record<string, unknown>): StructuredLogger {\n    const childLogger = new StructuredLogger(this.config);\n    const originalEmit = childLogger['emit'].bind(this);\n    childLogger['emit'] = (level: LogLevel, message: string, extra?: Record<string, unknown>) => {\n      originalEmit(level, message, { ...extra, ...metadata });\n    };\n    return childLogger;\n  }\n\n  private emit(level: LogLevel, message: string, metadata?: Record<string, unknown>): void {\n    if (this.shouldSkip(level)) return;\n\n    const entry: LogEntry = {\n      timestamp: new Date().toISOString(),\n      level,\n      message,\n      service: this.config.service,\n      traceId: AsyncLocalStorageTraceContext.getTraceId(),\n      spanId: AsyncLocalStorageTraceContext.getSpanId(),\n      correlationId: AsyncLocalStorageTraceContext.getCorrelationId(),\n      metadata,\n    };\n\n    const output = this.config.prettyPrint\n      ? this.formatPretty(entry)\n      : JSON.stringify(entry);\n\n    const stream = this.config.outputStream || process.stdout;\n    stream.write(output + '\\n');\n  }\n\n  private shouldSkip(level: LogLevel): boolean {\n    const levels: LogLevel[] = ['debug', 'info', 'warn', 'error', 'fatal'];\n    return levels.indexOf(level) < levels.indexOf(this.config.level);\n  }\n\n  private formatPretty(entry: LogEntry): string {\n    const icon: Record<LogLevel, string> = {\n      debug: '🔍', info: '📘', warn: '⚠️', error: '❌', fatal: '🔥',\n    };\n    return `${icon[entry.level]} [${entry.timestamp}] ${entry.service} ${entry.message}${entry.metadata ? ' ' + JSON.stringify(entry.metadata) : ''}`;\n  }\n}\n\n// ============ Async Local Storage for Trace Context ============\n\nclass AsyncLocalStorageTraceContext {\n  private static traceId: string | undefined;\n  private static spanId: string | undefined;\n  private static correlationId: string | undefined;\n\n  static getTraceId(): string | undefined { return this.traceId; }\n  static getSpanId(): string | undefined { return this.spanId; }\n  static getCorrelationId(): string | undefined { return this.correlationId; }\n\n  static setTrace(traceId: string, spanId: string, correlationId?: string): void {\n    this.traceId = traceId;\n    this.spanId = spanId;\n    this.correlationId = correlationId;\n  }\n\n  static clear(): void {\n    this.traceId = undefined;\n    this.spanId = undefined;\n    this.correlationId = undefined;\n  }\n}\n\n// ============ Metrics Collection ============\n\ntype MetricType = 'counter' | 'gauge' | 'histogram';\n\ninterface MetricValue {\n  name: string;\n  type: MetricType;\n  labels: Record<string, string>;\n  value: number;\n  timestamp: number;\n}\n\nclass MetricsCollector {\n  private counters: Map<string, number> = new Map();\n  private gauges: Map<string, number> = new Map();\n  private histograms: Map<string, number[]> = new Map();\n  private checkpoints: Map<string, Map<string, number>> = new Map();\n  private readonly service: string;\n\n  constructor(service: string) {\n    this.service = service;\n  }\n\n  public incrementCounter(name: string, value = 1, labels: Record<string, string> = {}): void {\n    const key = this.makeKey(name, labels);\n    this.counters.set(key, (this.counters.get(key) || 0) + value);\n  }\n\n  public setGauge(name: string, value: number, labels: Record<string, string> = {}): void {\n    const key = this.makeKey(name, labels);\n    this.gauges.set(key, value);\n  }\n\n  public observeHistogram(name: string, value: number, labels: Record<string, string> = {}): void {\n    const key = this.makeKey(name, labels);\n    if (!this.histograms.has(key)) this.histograms.set(key, []);\n    this.histograms.get(key)!.push(value);\n\n    // Limit storage\n    const bucket = this.histograms.get(key)!;\n    if (bucket.length > 1000) bucket.splice(0, bucket.length - 1000);\n  }\n\n  public recordRequestDuration(durationMs: number, endpoint: string, method: string, statusCode: number): void {\n    this.incrementCounter('http_requests_total', 1, { endpoint, method, status: String(statusCode) });\n    this.observeHistogram('http_request_duration_ms', durationMs, { endpoint, method });\n    this.setGauge('http_requests_in_flight', this.getCounter('http_requests_total', { endpoint, method }));\n  }\n\n  public snapshot(): MetricValue[] {\n    const metrics: MetricValue[] = [];\n    const now = Date.now();\n\n    for (const [key, value] of this.counters) {\n      const { name, labels } = this.parseKey(key);\n      metrics.push({ name, type: 'counter', labels, value, timestamp: now });\n    }\n    for (const [key, value] of this.gauges) {\n      const { name, labels } = this.parseKey(key);\n      metrics.push({ name, type: 'gauge', labels, value, timestamp: now });\n    }\n    for (const [key, values] of this.histograms) {\n      const { name, labels } = this.parseKey(key);\n      if (values.length > 0) {\n        const sorted = [...values].sort((a, b) => a - b);\n        metrics.push({ name: `${name}_count`, type: 'counter', labels, value: values.length, timestamp: now });\n        metrics.push({ name: `${name}_sum`, type: 'counter', labels, value: values.reduce((a, b) => a + b, 0), timestamp: now });\n        metrics.push({ name: `${name}_avg`, type: 'gauge', labels, value: values.reduce((a, b) => a + b, 0) / values.length, timestamp: now });\n        metrics.push({ name: `${name}_p50`, type: 'gauge', labels, value: this.percentile(sorted, 50), timestamp: now });\n        metrics.push({ name: `${name}_p95`, type: 'gauge', labels, value: this.percentile(sorted, 95), timestamp: now });\n        metrics.push({ name: `${name}_p99`, type: 'gauge', labels, value: this.percentile(sorted, 99), timestamp: now });\n      }\n    }\n    return metrics;\n  }\n\n  public getCounter(name: string, labels: Record<string, string> = {}): number {\n    return this.counters.get(this.makeKey(name, labels)) || 0;\n  }\n\n  public getGauge(name: string, labels: Record<string, string> = {}): number {\n    return this.gauges.get(this.makeKey(name, labels)) || 0;\n  }\n\n  public exportPrometheusFormat(): string {\n    const metrics = this.snapshot();\n    const lines: string[] = [];\n    lines.push(`# HELP ${this.service}_metrics Metrics from ${this.service}`);\n    lines.push(`# TYPE ga service=${this.service}`);\n\n    for (const m of metrics) {\n      const labels = Object.entries(m.labels).map(([k, v]) => `${k}=\"${v}\"`).join(',');\n      const labelStr = labels ? `{${labels}}` : '';\n      lines.push(`${m.name}${labelStr} ${m.value} ${m.timestamp}`);\n    }\n    return lines.join('\\n');\n  }\n\n  private makeKey(name: string, labels: Record<string, string>): string {\n    const sortedLabels = Object.entries(labels).sort(([a], [b]) => a.localeCompare(b));\n    return `${name}{${sortedLabels.map(([k, v]) => `${k}=${v}`).join(',')}}`;\n  }\n\n  private parseKey(key: string): { name: string; labels: Record<string, string> } {\n    const braceIdx = key.indexOf('{');\n    if (braceIdx === -1) return { name: key, labels: {} };\n    const name = key.substring(0, braceIdx);\n    const labelsStr = key.substring(braceIdx + 1, key.length - 1);\n    const labels: Record<string, string> = {};\n    for (const pair of labelsStr.split(',')) {\n      const [k, v] = pair.split('=');\n      if (k && v) labels[k] = v;\n    }\n    return { name, labels };\n  }\n\n  private percentile(sorted: number[], p: number): number {\n    const idx = Math.ceil(sorted.length * p / 100) - 1;\n    return sorted[Math.max(0, Math.min(idx, sorted.length - 1))];\n  }\n}\n\n// ============ Distributed Tracing ============\n\ninterface Span {\n  traceId: string;\n  spanId: string;\n  parentSpanId?: string;\n  operationName: string;\n  startTime: number;\n  endTime?: number;\n  tags: Record<string, string>;\n  logs: { timestamp: number; message: string }[];\n  status: 'ok' | 'error';\n}\n\nclass SpanTracer {\n  private spans: Span[] = [];\n  private activeSpans: Map<string, Span> = new Map();\n  private readonly service: string;\n\n  constructor(service: string) {\n    this.service = service;\n  }\n\n  public startSpan(operationName: string, parentSpanId?: string): Span {\n    const traceId = AsyncLocalStorageTraceContext.getTraceId() || `trace-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;\n    const spanId = `span-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;\n\n    AsyncLocalStorageTraceContext.setTrace(traceId, spanId, parentSpanId);\n\n    const span: Span = {\n      traceId, spanId, parentSpanId,\n      operationName,\n      startTime: Date.now(),\n      tags: {},\n      logs: [],\n      status: 'ok',\n    };\n    this.activeSpans.set(spanId, span);\n    return span;\n  }\n\n  public addTag(spanId: string, key: string, value: string): void {\n    const span = this.activeSpans.get(spanId);\n    if (span) span.tags[key] = value;\n  }\n\n  public log(spanId: string, message: string): void {\n    const span = this.activeSpans.get(spanId);\n    if (span) span.logs.push({ timestamp: Date.now(), message });\n  }\n\n  public endSpan(spanId: string, status: 'ok' | 'error' = 'ok'): Span {\n    const span = this.activeSpans.get(spanId);\n    if (!span) throw new Error(`Span ${spanId} not found`);\n    span.endTime = Date.now();\n    span.status = status;\n    this.spans.push(span);\n    this.activeSpans.delete(spanId);\n    return span;\n  }\n\n  public getTrace(traceId: string): Span[] {\n    return this.spans.filter(s => s.traceId === traceId);\n  }\n\n  public getTraceDuration(traceId: string): number {\n    const trace = this.getTrace(traceId);\n    if (trace.length === 0) return 0;\n    const start = Math.min(...trace.map(s => s.startTime));\n    const end = Math.max(...trace.map(s => s.endTime || Date.now()));\n    return end - start;\n  }\n\n  public export(): Span[] {\n    return [...this.spans];\n  }\n}\n\n// ============ Health Check Registry ============\n\ninterface HealthCheckResult {\n  status: 'healthy' | 'degraded' | 'unhealthy';\n  checks: Record<string, { status: string; latency: number; message?: string }>;\n  uptime: number;\n  version: string;\n  timestamp: string;\n}\n\nclass HealthCheckRegistry {\n  private checks: Map<string, () => Promise<{ healthy: boolean; message?: string }>> = new Map();\n  private readonly startTime = Date.now();\n  private readonly version: string;\n\n  constructor(version: string) {\n    this.version = version;\n  }\n\n  public register(name: string, check: () => Promise<{ healthy: boolean; message?: string }>): void {\n    this.checks.set(name, check);\n  }\n\n  public async runAll(): Promise<HealthCheckResult> {\n    const results: Record<string, { status: string; latency: number; message?: string }> = {};\n    let overallStatus: 'healthy' | 'degraded' | 'unhealthy' = 'healthy';\n\n    for (const [name, check] of this.checks) {\n      const start = Date.now();\n      try {\n        const { healthy, message } = await check();\n        const latency = Date.now() - start;\n        results[name] = { status: healthy ? 'pass' : 'fail', latency, message };\n        if (!healthy) {\n          overallStatus = 'degraded';\n        }\n      } catch (err) {\n        results[name] = {\n          status: 'fail',\n          latency: Date.now() - start,\n          message: err instanceof Error ? err.message : 'Unknown error',\n        };\n        overallStatus = 'unhealthy';\n      }\n    }\n\n    return {\n      status: overallStatus,\n      checks: results,\n      uptime: Date.now() - this.startTime,\n      version: this.version,\n      timestamp: new Date().toISOString(),\n    };\n  }\n\n  public async toJSON(): Promise<HealthCheckResult> {\n    return this.runAll();\n  }\n}\n\n// ============ Observability Stack ============\n\ninterface ObservabilityStackConfig {\n  service: string;\n  version: string;\n  logLevel?: LogLevel;\n  metricsEnabled?: boolean;\n  tracingEnabled?: boolean;\n}\n\nclass ObservabilityStack {\n  public readonly logger: StructuredLogger;\n  public readonly metrics: MetricsCollector;\n  public readonly tracer: SpanTracer;\n  public readonly healthChecks: HealthCheckRegistry;\n\n  constructor(config: ObservabilityStackConfig) {\n    this.logger = new StructuredLogger({\n      service: config.service,\n      level: config.logLevel || 'info',\n      prettyPrint: process.env['NODE_ENV'] !== 'production',\n    });\n    this.metrics = new MetricsCollector(config.service);\n    this.tracer = new SpanTracer(config.service);\n    this.healthChecks = new HealthCheckRegistry(config.version);\n\n    this.registerDefaultChecks();\n  }\n\n  private registerDefaultChecks(): void {\n    this.healthChecks.register('memory', async () => ({\n      healthy: process.memoryUsage().heapUsed < 500 * 1024 * 1024,\n      message: `Heap: ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`,\n    }));\n    this.healthChecks.register('uptime', async () => ({\n      healthy: process.uptime() > 0,\n      message: `${Math.round(process.uptime())}s`,\n    }));\n  }\n\n  public instrumentRequest(endpoint: string, method: string): { end: (statusCode: number) => void } {\n    const span = this.tracer.startSpan(`${method} ${endpoint}`);\n    this.tracer.addTag(span.spanId, 'endpoint', endpoint);\n    this.tracer.addTag(span.spanId, 'method', method);\n    const start = Date.now();\n\n    return {\n      end: (statusCode: number) => {\n        const duration = Date.now() - start;\n        this.metrics.recordRequestDuration(duration, endpoint, method, statusCode);\n        this.tracer.addTag(span.spanId, 'status', String(statusCode));\n        this.tracer.endSpan(span.spanId, statusCode < 500 ? 'ok' : 'error');\n        this.logger.info(`${method} ${endpoint} → ${statusCode} (${duration}ms)`, {\n          endpoint, method, statusCode, duration, traceId: span.traceId,\n        });\n      },\n    };\n  }\n}\n\n// Usage\nconst observability = new ObservabilityStack({\n  service: 'auth-service',\n  version: '1.2.3',\n  logLevel: 'info',\n});\nconst log = observability.logger;\nlog.info('Starting auth service', { port: 3000 });\nlog.warn('Database connection pool at 80% capacity', { poolSize: 20, usedConnections: 16 });\nobservability.metrics.incrementCounter('users_logged_in', 1, { method: 'oauth' });\nobservability.metrics.setGauge('active_connections', 42);\nobservability.metrics.observeHistogram('response_time_ms', 150, { endpoint: '/login' });\nconst request = observability.instrumentRequest('/api/login', 'POST');\nsetTimeout(() => request.end(200), 100);\nconsole.log(observability.metrics.exportPrometheusFormat());\nobservability.healthChecks.runAll().then(h => console.log('Health:', h.status));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-github-actions-ci-pipeline",
      children: "Example 4: GitHub Actions CI Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "name: CI Pipeline\n\non:\n  push:\n    branches: [main, develop]\n  pull_request:\n    branches: [main]\n\nenv:\n  NODE_VERSION: '20'\n\njobs:\n  lint:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: ${{ env.NODE_VERSION }}\n          cache: 'npm'\n      - run: npm ci\n      - run: npm run lint\n      - run: npm run typecheck\n\n  test:\n    needs: lint\n    runs-on: ubuntu-latest\n    strategy:\n      matrix:\n        node-version: ['18', '20', '22']\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: ${{ matrix.node-version }}\n          cache: 'npm'\n      - run: npm ci\n      - run: npm test -- --coverage\n      - uses: actions/upload-artifact@v4\n        with:\n          name: coverage-${{ matrix.node-version }}\n          path: coverage/\n\n  security:\n    needs: lint\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: ${{ env.NODE_VERSION }}\n      - run: npm ci\n      - run: npm audit --audit-level=high\n      - uses: github/codeql-action/analyze@v3\n\n  build:\n    needs: [test, security]\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: ${{ env.NODE_VERSION }}\n      - run: npm ci\n      - run: npm run build\n      - uses: actions/upload-artifact@v4\n        with:\n          name: build-artifact\n          path: dist/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-5-deployment-manager-with-multiple-strategies",
      children: "Example 5: Deployment Manager with Multiple Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface DeploymentConfig {\n  serviceName: string;\n  image: string;\n  tag: string;\n  replicas: number;\n  strategy: 'rolling' | 'blue-green' | 'canary';\n}\n\nclass DeploymentManager {\n  private currentVersion = '1.0.0';\n\n  public async deploy(config: DeploymentConfig): Promise<boolean> {\n    console.log(`Deploying ${config.serviceName}:${config.tag}`);\n    switch (config.strategy) {\n      case 'rolling': return this.rollingDeploy(config);\n      case 'blue-green': return this.blueGreenDeploy(config);\n      case 'canary': return this.canaryDeploy(config);\n      default: throw new Error(`Unknown strategy: ${config.strategy}`);\n    }\n  }\n\n  private async rollingDeploy(config: DeploymentConfig): Promise<boolean> {\n    const batchSize = Math.max(1, Math.floor(config.replicas * 0.25));\n    for (let i = 0; i < config.replicas; i += batchSize) {\n      const batch = Math.min(batchSize, config.replicas - i);\n      console.log(`Rolling update: updating ${batch} of ${config.replicas} pods`);\n      await this.updateInstances(batch, config.image, config.tag);\n      await this.drainOldConnections();\n      if (!(await this.healthCheck())) { await this.rollback(config); return false; }\n    }\n    this.currentVersion = config.tag;\n    return true;\n  }\n\n  private async blueGreenDeploy(config: DeploymentConfig): Promise<boolean> {\n    console.log('Deploying to green environment');\n    await this.deployToEnvironment('green', config.image, config.tag);\n    if (!(await this.runSmokeTests('green'))) { await this.destroyEnvironment('green'); return false; }\n    await this.switchTraffic('green');\n    return true;\n  }\n\n  private async canaryDeploy(config: DeploymentConfig): Promise<boolean> {\n    const phases = [\n      { trafficPercent: 5, duration: 300000 },\n      { trafficPercent: 25, duration: 600000 },\n      { trafficPercent: 50, duration: 600000 },\n      { trafficPercent: 100, duration: 0 },\n    ];\n    for (const phase of phases) {\n      console.log(`Canary: routing ${phase.trafficPercent}% traffic`);\n      await this.setTrafficWeight(config.serviceName, phase.trafficPercent);\n      if (phase.duration > 0) await this.delay(phase.duration);\n      if (!(await this.monitorErrors(config.serviceName))) {\n        console.log('Error rate exceeded threshold, rolling back');\n        await this.setTrafficWeight(config.serviceName, 0);\n        return false;\n      }\n    }\n    this.currentVersion = config.tag;\n    return true;\n  }\n\n  private async updateInstances(count: number, image: string, tag: string): Promise<void> { await this.delay(1000); }\n  private async drainOldConnections(): Promise<void> { await this.delay(500); }\n  private async deployToEnvironment(env: string, image: string, tag: string): Promise<void> { await this.delay(2000); }\n  private async runSmokeTests(env: string): Promise<boolean> { await this.delay(1000); return Math.random() > 0.1; }\n  private async destroyEnvironment(env: string): Promise<void> { await this.delay(500); }\n  private async switchTraffic(env: string): Promise<void> { await this.delay(1000); }\n  private async healthCheck(): Promise<boolean> { await this.delay(200); return true; }\n  private async rollback(config: DeploymentConfig): Promise<void> { console.log(`Rolling back to ${this.currentVersion}`); }\n  private async setTrafficWeight(service: string, percent: number): Promise<void> { await this.delay(500); }\n  private async monitorErrors(service: string): Promise<boolean> { await this.delay(1000); return Math.random() < 0.05; }\n  private delay(ms: number): Promise<void> { return new Promise(r => setTimeout(r, ms)); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-case-studies",
      children: "Real-World Case Studies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Case Study 1: Etsy — Deploying 50+ Times Per Day"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Etsy was an early DevOps adopter. In 2009, they deployed once every 2-3 weeks with 50+ people in the room. By 2012, they deployed 50+ times per day with fully automated pipelines. Key practices:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feature flags"
        }), " for gradual rollout"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ChatOps"
        }), " (deploy from HipChat)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Blameless postmortems"
        }), " for every incident"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban"
        }), " for operations workflow"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "\"Deploy to production on Friday\""
        }), " culture shift"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monitoring dashboards"
        }), " visible on screens throughout the office"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Case Study 2: Netflix — Chaos Engineering at Scale"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Netflix pioneered chaos engineering with Chaos Monkey (terminates random production instances to test resilience). Their DevOps journey:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Full automation:"
        }), " Deployments are fully automated through Spinnaker"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Immutable infrastructure:"
        }), " AMIs are replaced, never patched"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canary deployments:"
        }), " Automated canary analysis with Kayenta"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SRE principles:"
        }), " Error budgets drive engineering decisions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Observability:"
        }), " Atlas (metrics), ELK (logs), Zipkin (tracing)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Culture:"
        }), " \"Freedom and responsibility\" with strong operational ownership"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Case Study 3: Amazon — From Monolith to Microservices"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Amazon's DevOps transformation (early 2000s) is legendary. Jeff Bezos mandated:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All teams must expose data through service interfaces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Teams must communicate only through these interfaces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Any team can use any other team's interface (no approval needed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Anyone who doesn't follow this rule is fired"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This forced API-driven development, which required automated CI/CD, IaC, and full operational ownership. Today, Amazon deploys every 11.7 seconds on average, with 50 million+ deployments per year."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevOps represents a fundamental shift from siloed development and operations to a unified culture of collaboration, automation, and continuous improvement. The CALMS framework (Culture, Automation, Lean, Measurement, Sharing) provides a comprehensive lens for assessing DevOps maturity, while the DORA metrics (Deployment Frequency, Lead Time, Change Failure Rate, Time to Restore) offer quantitative benchmarks ranging from Low (< monthly deploys, > 30% failure rate) to Elite (multiple deploys/day, < 5% failure rate)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CI/CD pipelines automate the path from commit to production, with quality gates at each stage (lint → unit tests → security scan → integration tests → deploy). Infrastructure as Code with tools like Terraform and Pulumi makes infrastructure versioned, reviewable, and idempotent. Containerisation with multi-stage Docker builds reduces image sizes by 90% while improving security through non-root users and HEALTHCHECK. Deployment strategies (rolling, blue-green, canary) balance deployment speed against risk. Observability (logging + metrics + tracing) moves beyond monitoring to answer what, why, and where simultaneously. The CICDPipeline, DockerfileGenerator, and ObservabilityStack implementations demonstrate how to build production-grade DevOps tooling that integrates quality gates, security scanning, structured logging, Prometheus-format metrics, distributed tracing, and health checks."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CI/CD is not optional"
        }), " — manual deployment is the #1 source of production incidents; automate everything"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Build once, deploy many"
        }), " — the same immutable artifact moves through all environments; never rebuild for production"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fail fast"
        }), " — the earlier a defect is caught, the cheaper it is to fix; invest in fast feedback"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Infrastructure is code"
        }), " — everything should be in version control, including network configs, databases, and CI definitions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Observability over monitoring"
        }), " — understand WHY (logs), not just WHAT (metrics), and WHERE (traces)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rollback is a feature"
        }), " — every deployment must have a tested, documented rollback plan; practice it regularly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shift security left"
        }), " — scan dependencies, secrets, and containers in CI, not when already deployed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Measure everything"
        }), " — DORA metrics, error budgets, four golden signals; data drives improvement"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Q1: What does CI stand for in DevOps?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous Integration — merging code frequently with automated verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q2: In Gene Kim's Three Ways of DevOps, the First Way emphasises:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Systems thinking and flow — optimizing the end-to-end delivery pipeline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q3: Which deployment strategy involves maintaining two identical environments and switching traffic between them?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blue-Green — two environments with load balancer traffic switch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q4: Which IaC tool allows you to write infrastructure definitions in TypeScript?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pulumi supports TypeScript natively (also Python, Go, C#)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q5: The four golden signals of monitoring are:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Latency, Traffic, Errors, Saturation — from Google SRE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q6: The 'C' in CALMS stands for:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Culture — blameless postmortems, cross-functional collaboration, shared responsibility"
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
        }), " Build a CI/CD pipeline validator that checks pipeline configuration for common issues: missing stages, circular dependencies, unconnected stages, and unreachable code paths."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "interface PipelineNode {\n  name: string;\n  dependsOn: string[];\n  isEntry: boolean;\n  isTerminal: boolean;\n}\n\nclass PipelineValidator {\n  public validate(nodes: PipelineNode[]): { valid: boolean; issues: string[] } {\n    const issues: string[] = [];\n    const names = new Set(nodes.map(n => n.name));\n\n    // Check for missing dependencies\n    for (const node of nodes) {\n      for (const dep of node.dependsOn) {\n        if (!names.has(dep)) {\n          issues.push(`Node '${node.name}' depends on missing node '${dep}'`);\n        }\n      }\n    }\n\n    // Check for circular dependencies (DFS)\n    const visited = new Set<string>();\n    const inStack = new Set<string>();\n\n    const dfs = (nodeName: string, path: string[]): boolean => {\n      if (inStack.has(nodeName)) {\n        const cycleIndex = path.indexOf(nodeName);\n        const cycle = [...path.slice(cycleIndex), nodeName];\n        issues.push(`Circular dependency detected: ${cycle.join(' → ')}`);\n        return false;\n      }\n      if (visited.has(nodeName)) return true;\n      visited.add(nodeName);\n      inStack.add(nodeName);\n\n      const node = nodes.find(n => n.name === nodeName);\n      if (node) {\n        for (const dep of node.dependsOn) {\n          if (!dfs(dep, [...path, nodeName])) return false;\n        }\n      }\n      inStack.delete(nodeName);\n      return true;\n    };\n\n    for (const node of nodes) {\n      dfs(node.name, []);\n    }\n\n    // Check for unreachable nodes\n    for (const node of nodes) {\n      if (node.dependsOn.length === 0 && !node.isEntry) {\n        issues.push(`Node '${node.name}' has no dependencies but is not marked as entry point`);\n      }\n      if (!nodes.some(n => n.dependsOn.includes(node.name) || n.name === node.name) && !node.isTerminal) {\n        issues.push(`Node '${node.name}' has no dependents and is not marked as terminal`);\n      }\n    }\n\n    // Check for disconnected subgraphs\n    if (nodes.length > 0) {\n      const reachable = new Set<string>();\n      const queue = nodes.filter(n => n.dependsOn.length === 0).map(n => n.name);\n      while (queue.length > 0) {\n        const current = queue.shift()!;\n        if (reachable.has(current)) continue;\n        reachable.add(current);\n        const dependents = nodes.filter(n => n.dependsOn.includes(current));\n        for (const dep of dependents) {\n          queue.push(dep.name);\n        }\n      }\n      const disconnected = nodes.filter(n => !reachable.has(n.name));\n      if (disconnected.length > 0) {\n        issues.push(`Disconnected nodes (not reachable from any entry point): ${disconnected.map(n => n.name).join(', ')}`);\n      }\n    }\n\n    return { valid: issues.length === 0, issues };\n  }\n}\n\nconst validator = new PipelineValidator();\nconst pipeline: PipelineNode[] = [\n  { name: 'Lint', dependsOn: [], isEntry: true, isTerminal: false },\n  { name: 'Build', dependsOn: ['Lint'], isEntry: false, isTerminal: false },\n  { name: 'Test', dependsOn: ['Build'], isEntry: false, isTerminal: false },\n  { name: 'Security', dependsOn: ['Lint'], isEntry: false, isTerminal: false },\n  { name: 'Deploy', dependsOn: ['Test', 'Security'], isEntry: false, isTerminal: true },\n];\nconsole.log(validator.validate(pipeline));\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.b, {
          children: "Exercise 2:"
        }), " Create a Docker Compose generator that produces a docker-compose.yml file for a microservices application with health checks, volumes, networks, and environment-specific overrides."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "interface ServiceConfig {\n  name: string;\n  image: string;\n  port: number;\n  environment?: Record<string, string>;\n  volumes?: string[];\n  dependsOn?: string[];\n  healthCheckPath?: string;\n  replicas?: number;\n}\n\ninterface ComposeConfig {\n  projectName: string;\n  services: ServiceConfig[];\n  networks?: string[];\n  volumes?: string[];\n}\n\nclass DockerComposeGenerator {\n  public generate(config: ComposeConfig, version = '3.8'): string {\n    const lines: string[] = [];\n    lines.push(`version: '${version}'`);\n    lines.push('');\n    lines.push('services:');\n\n    for (const svc of config.services) {\n      lines.push(`  ${svc.name}:`);\n      lines.push(`    image: ${svc.image}`);\n      lines.push(`    ports:`);\n      lines.push(`      - \"${svc.port}:${svc.port}\"`);\n\n      if (svc.environment && Object.keys(svc.environment).length > 0) {\n        lines.push('    environment:');\n        for (const [key, val] of Object.entries(svc.environment)) {\n          lines.push(`      ${key}: ${val}`);\n        }\n      }\n\n      if (svc.volumes && svc.volumes.length > 0) {\n        lines.push('    volumes:');\n        for (const vol of svc.volumes) {\n          lines.push(`      - ${vol}`);\n        }\n      }\n\n      if (svc.dependsOn && svc.dependsOn.length > 0) {\n        lines.push('    depends_on:');\n        for (const dep of svc.dependsOn) {\n          lines.push(`      - ${dep}`);\n        }\n      }\n\n      if (svc.healthCheckPath) {\n        lines.push('    healthcheck:');\n        lines.push(`      test: [\"CMD\", \"curl\", \"-f\", \"http://localhost:${svc.port}${svc.healthCheckPath}\"]`);\n        lines.push('      interval: 30s');\n        lines.push('      timeout: 10s');\n        lines.push('      retries: 3');\n        lines.push('      start_period: 40s');\n      }\n\n      if (svc.replicas && svc.replicas > 1) {\n        lines.push(`    deploy:`);\n        lines.push(`      replicas: ${svc.replicas}`);\n      }\n      lines.push('');\n    }\n\n    if (config.networks && config.networks.length > 0) {\n      lines.push('networks:');\n      for (const net of config.networks) lines.push(`  ${net}:`);\n      lines.push('');\n    }\n\n    if (config.volumes && config.volumes.length > 0) {\n      lines.push('volumes:');\n      for (const vol of config.volumes) lines.push(`  ${vol}:`);\n    }\n\n    return lines.join('\\n');\n  }\n}\n\nconst gen = new DockerComposeGenerator();\nconsole.log(gen.generate({\n  projectName: 'myapp',\n  services: [\n    { name: 'api', image: 'myapp/api:latest', port: 3000, environment: { NODE_ENV: 'production' }, healthCheckPath: '/health', dependsOn: ['db', 'cache'] },\n    { name: 'db', image: 'postgres:16-alpine', port: 5432, environment: { POSTGRES_PASSWORD: 'secret' }, volumes: ['pgdata:/var/lib/postgresql/data'] },\n    { name: 'cache', image: 'redis:7-alpine', port: 6379 },\n  ],\n  volumes: ['pgdata'],\n}));\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.b, {
          children: "Exercise 3:"
        }), " Implement a DORA metrics calculator that tracks deployment frequency, lead time for changes, mean time to restore (MTTR), and change failure rate from deployment history."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "interface DeploymentRecord {\n  version: string;\n  timestamp: Date;\n  success: boolean;\n  leadTimeHours: number;\n  rollbackTime?: number;\n  hasIncident: boolean;\n}\n\ninterface DORAMetrics {\n  deploymentFrequency: string;\n  leadTimeForChanges: string;\n  changeFailureRate: string;\n  mttr: string;\n  overall: 'elite' | 'high' | 'medium' | 'low';\n}\n\nclass DORACalculator {\n  public calculate(deployments: DeploymentRecord[]): DORAMetrics {\n    if (deployments.length === 0) {\n      return { deploymentFrequency: 'N/A', leadTimeForChanges: 'N/A', changeFailureRate: 'N/A', mttr: 'N/A', overall: 'low' };\n    }\n\n    // Deployment frequency (deployments per day in last 30 days)\n    const recent = deployments.filter(d => Date.now() - d.timestamp.getTime() < 30 * 86400000);\n    const freqPerDay = recent.length / 30;\n    const freqLabel = freqPerDay >= 1 ? 'elite' : freqPerDay >= 0.25 ? 'high' : freqPerDay >= 0.1 ? 'medium' : 'low';\n\n    // Lead time for changes (average hours)\n    const avgLeadTime = deployments.reduce((s, d) => s + d.leadTimeHours, 0) / deployments.length;\n    const leadLabel = avgLeadTime <= 1 ? 'elite' : avgLeadTime <= 24 ? 'high' : avgLeadTime <= 168 ? 'medium' : 'low';\n\n    // Change failure rate (%)\n    const failures = deployments.filter(d => !d.success || d.hasIncident);\n    const cfr = (failures.length / deployments.length) * 100;\n    const cfrLabel = cfr < 5 ? 'elite' : cfr < 10 ? 'high' : cfr < 15 ? 'medium' : 'low';\n\n    // MTTR (hours)\n    const mttrHours = failures.length > 0\n      ? failures.reduce((s, d) => s + (d.rollbackTime ?? 24), 0) / failures.length\n      : 0;\n    const mttrLabel = mttrHours <= 1 ? 'elite' : mttrHours <= 24 ? 'high' : mttrHours <= 168 ? 'medium' : 'low';\n\n    // Overall\n    const levels = [freqLabel, leadLabel, cfrLabel, mttrLabel];\n    const scores = levels.map(l => ({ elite: 4, high: 3, medium: 2, low: 1 }[l] ?? 0));\n    const avgScore = scores.reduce((s, v) => s + v, 0) / scores.length;\n    const overall = avgScore >= 3.5 ? 'elite' : avgScore >= 2.5 ? 'high' : avgScore >= 1.5 ? 'medium' : 'low';\n\n    const fmtFreq = freqLabel === 'elite' ? `${freqPerDay.toFixed(1)} deploys/day` : `${(1 / Math.max(freqPerDay, 0.01)).toFixed(1)} days/deploy`;\n\n    return {\n      deploymentFrequency: `${fmtFreq} (${freqLabel})`,\n      leadTimeForChanges: `${avgLeadTime.toFixed(1)}h (${leadLabel})`,\n      changeFailureRate: `${cfr.toFixed(1)}% (${cfrLabel})`,\n      mttr: `${mttrHours.toFixed(1)}h (${mttrLabel})`,\n      overall,\n    };\n  }\n}\n\nconst dora = new DORACalculator();\nconst records: DeploymentRecord[] = Array.from({ length: 60 }, (_, i) => ({\n  version: `v1.${i}`,\n  timestamp: new Date(Date.now() - i * 12 * 3600000),\n  success: Math.random() > 0.08,\n  leadTimeHours: 2 + Math.random() * 10,\n  rollbackTime: Math.random() > 0.9 ? 0.5 + Math.random() * 2 : undefined,\n  hasIncident: Math.random() < 0.08,\n}));\nconsole.log(dora.calculate(records));\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.b, {
          children: "Exercise 4:"
        }), " Build a chaos engineering simulator that can inject failures (latency, errors, resource exhaustion) into services and verify that the system degrades gracefully."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "interface ChaosExperiment {\n  name: string;\n  target: string;\n  type: 'latency' | 'error' | 'crash' | 'cpu' | 'memory';\n  intensity: number;\n  duration: number;\n}\n\ninterface ServiceStatus {\n  name: string;\n  healthy: boolean;\n  latency: number;\n  errorRate: number;\n}\n\nclass ChaosSimulator {\n  private services: Map<string, ServiceStatus> = new Map();\n  private experiments: ChaosExperiment[] = [];\n  private activeExperiments: Map<string, NodeJS.Timeout> = new Map();\n\n  public registerService(name: string): void {\n    this.services.set(name, { name, healthy: true, latency: 50, errorRate: 0 });\n  }\n\n  public async inject(experiment: ChaosExperiment): Promise<void> {\n    const service = this.services.get(experiment.target);\n    if (!service) throw new Error(`Service ${experiment.target} not found`);\n\n    console.log(`🧪 Injecting ${experiment.type} (${experiment.intensity}) into ${experiment.target} for ${experiment.duration}ms`);\n\n    this.experiments.push(experiment);\n\n    switch (experiment.type) {\n      case 'latency':\n        service.latency = 50 + experiment.intensity * 100;\n        break;\n      case 'error':\n        service.errorRate = Math.min(1, experiment.intensity * 0.2);\n        break;\n      case 'crash':\n        service.healthy = false;\n        break;\n      case 'cpu':\n        service.latency = 500 + experiment.intensity * 500;\n        break;\n      case 'memory':\n        service.errorRate = Math.min(1, experiment.intensity * 0.3);\n        break;\n    }\n\n    const timer = setTimeout(() => {\n      this.revert(experiment.target);\n      console.log(`✅ Reverted ${experiment.type} on ${experiment.target}`);\n    }, experiment.duration);\n\n    this.activeExperiments.set(experiment.target, timer);\n  }\n\n  private revert(target: string): void {\n    // Reset to healthy defaults\n    const service = this.services.get(target);\n    if (service) {\n      service.healthy = true;\n      service.latency = 50;\n      service.errorRate = 0;\n    }\n  }\n\n  public async checkHealth(target: string): Promise<{ healthy: boolean; latency: number; error: boolean }> {\n    const service = this.services.get(target);\n    if (!service) return { healthy: false, latency: 0, error: true };\n\n    await new Promise(r => setTimeout(r, service.latency));\n    const hasError = Math.random() < service.errorRate;\n\n    return {\n      healthy: service.healthy && !hasError,\n      latency: service.latency,\n      error: hasError,\n    };\n  }\n\n  public async simulateRequest(target: string): Promise<{ status: number; duration: number }> {\n    const start = Date.now();\n    const health = await this.checkHealth(target);\n    const duration = Date.now() - start;\n\n    if (!health.healthy || health.error) {\n      return { status: 503, duration };\n    }\n    return { status: 200, duration };\n  }\n\n  public runExperiment(experiment: ChaosExperiment, requests: number): Promise<{ successRate: number; avgLatency: number; p95Latency: number }> {\n    return this.inject(experiment).then(async () => {\n      const results: number[] = [];\n      let failures = 0;\n\n      for (let i = 0; i < requests; i++) {\n        const result = await this.simulateRequest(experiment.target);\n        results.push(result.duration);\n        if (result.status !== 200) failures++;\n      }\n\n      const sorted = [...results].sort((a, b) => a - b);\n      return {\n        successRate: ((requests - failures) / requests) * 100,\n        avgLatency: results.reduce((s, d) => s + d, 0) / results.length,\n        p95Latency: sorted[Math.floor(sorted.length * 0.95)],\n      };\n    });\n  }\n}\n\nconst chaos = new ChaosSimulator();\nchaos.registerService('payment-service');\nconsole.log('Normal:', chaos.simulateRequest('payment-service'));\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.b, {
          children: "Exercise 5:"
        }), " Design a complete DevSecOps pipeline that integrates SAST, dependency scanning, container scanning, and policy-as-code checks into a CI/CD pipeline with break-the-build on critical findings."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "interface ScanResult {\n  tool: string;\n  passed: boolean;\n  critical: number;\n  high: number;\n  medium: number;\n  low: number;\n  findings: string[];\n}\n\nclass DevSecOpsPipeline {\n  private static POLICIES = {\n    maxCritical: 0,\n    maxHigh: 5,\n    maxMedium: 20,\n    requireSast: true,\n    requireSca: true,\n    requireContainerScan: true,\n  };\n\n  public async runSecurityScan(): Promise<{ passed: boolean; results: ScanResult[]; summary: string }> {\n    const results: ScanResult[] = [];\n\n    // SAST\n    const sastResult = await this.runSAST();\n    results.push(sastResult);\n\n    // SCA (Software Composition Analysis)\n    const scaResult = await this.runSCA();\n    results.push(scaResult);\n\n    // Container scan\n    const containerResult = await this.runContainerScan();\n    results.push(containerResult);\n\n    // Policy check\n    const policyViolations: string[] = [];\n    for (const result of results) {\n      if (result.critical > DevSecOpsPipeline.POLICIES.maxCritical) {\n        policyViolations.push(`${result.tool}: ${result.critical} critical findings exceeds limit of ${DevSecOpsPipeline.POLICIES.maxCritical}`);\n      }\n      if (result.high > DevSecOpsPipeline.POLICIES.maxHigh) {\n        policyViolations.push(`${result.tool}: ${result.high} high findings exceeds limit of ${DevSecOpsPipeline.POLICIES.maxHigh}`);\n      }\n    }\n\n    const passed = policyViolations.length === 0 && results.every(r => r.passed);\n    const summary = [\n      '=== DevSecOps Pipeline Summary ===',\n      ...results.map(r => `  ${r.passed ? '✅' : '❌'} ${r.tool}: ${r.critical} critical, ${r.high} high, ${r.medium} medium, ${r.low} low`),\n      ...(policyViolations.length > 0 ? ['', '  Policy Violations:', ...policyViolations.map(v => `    ⚠ ${v}`)] : []),\n      '',\n      `  Result: ${passed ? '✅ PASSED — all security checks pass' : '❌ FAILED — security policy violation'}`,\n      '',\n      '  Recommendation:',\n      ...(passed\n        ? ['    Proceed with deployment']\n        : ['    Fix critical/high findings before deployment', '    Run `npm audit fix` for vulnerable dependencies', '    Review SAST results for code-level issues']),\n    ].join('\\n');\n\n    return { passed, results, summary };\n  }\n\n  private async runSAST(): Promise<ScanResult> {\n    await new Promise(r => setTimeout(r, 500));\n    return {\n      tool: 'SAST (CodeQL)',\n      passed: true,\n      critical: Math.floor(Math.random() * 2),\n      high: Math.floor(Math.random() * 3),\n      medium: Math.floor(Math.random() * 5),\n      low: Math.floor(Math.random() * 10),\n      findings: ['SQL injection prevention check', 'XSS sanitization check', 'Hardcoded secret scan'],\n    };\n  }\n\n  private async runSCA(): Promise<ScanResult> {\n    await new Promise(r => setTimeout(r, 400));\n    return {\n      tool: 'SCA (Snyk)',\n      passed: true,\n      critical: 0,\n      high: Math.floor(Math.random() * 3),\n      medium: Math.floor(Math.random() * 8),\n      low: Math.floor(Math.random() * 15),\n      findings: ['lodash: prototype pollution', 'axios: SSRF vulnerability'],\n    };\n  }\n\n  private async runContainerScan(): Promise<ScanResult> {\n    await new Promise(r => setTimeout(r, 600));\n    return {\n      tool: 'Container Scan (Trivy)',\n      passed: true,\n      critical: 0,\n      high: Math.floor(Math.random() * 2),\n      medium: Math.floor(Math.random() * 5),\n      low: Math.floor(Math.random() * 20),\n      findings: ['alpine: CVE-2024-1234', 'openssl: CVE-2024-5678'],\n    };\n  }\n}\n\nconst devsecops = new DevSecOpsPipeline();\ndevsecops.runSecurityScan().then(r => console.log(r.summary));\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-devops-tools",
      children: "TypeScript: DevOps Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === CI/CD Pipeline Validator ===\ninterface PipelineStage {\n  name: string;\n  required: boolean;\n  duration: number;\n  dependsOn: string[];\n  passed: boolean;\n}\nfunction validatePipeline(stages: PipelineStage[]): { ready: boolean; blockages: string[] } {\n  const blockages: string[] = [];\n  for (const stage of stages) {\n    const depsMet = stage.dependsOn.every(dep => stages.find(s => s.name === dep)?.passed);\n    if (!stage.passed && stage.required && depsMet) blockages.push(`${stage.name} failed`);\n    if (!depsMet) blockages.push(`${stage.name} blocked by: ${stage.dependsOn.filter(d => !stages.find(s => s.name === d)?.passed).join(\", \")}`);\n  }\n  return { ready: blockages.length === 0, blockages };\n}\n\n// === Deployment Risk Scorer ===\ninterface DeployRisk { factor: string; weight: number; score: number; }\nfunction assessDeploymentRisk(risks: DeployRisk[]): { total: number; severity: \"low\" | \"medium\" | \"high\" } {\n  const total = risks.reduce((s, r) => s + r.weight * r.score, 0) / risks.reduce((s, r) => s + r.weight, 0);\n  const severity = total < 3 ? \"low\" : total < 7 ? \"medium\" : \"high\";\n  return { total: Math.round(total * 10) / 10, severity };\n}\n\n// === Error Budget Calculator ===\nfunction errorBudget(sli: number, slo: number, windowDays: number): { remaining: number; consumed: number; budgetDaysLeft: number } {\n  const allowedErrors = (1 - slo / 100) * windowDays * 24 * 60;\n  const actualErrors = (1 - sli / 100) * windowDays * 24 * 60;\n  const remaining = Math.max(0, allowedErrors - actualErrors);\n  const consumed = (actualErrors / allowedErrors) * 100;\n  const budgetDaysLeft = allowedErrors > 0 ? (remaining / (actualErrors / windowDays)) : windowDays;\n  return { remaining: Math.round(remaining), consumed: Math.round(consumed * 10) / 10, budgetDaysLeft: Math.round(budgetDaysLeft * 10) / 10 };\n}\nconsole.log(errorBudget(99.5, 99.9, 30));\n\n// === Canary Analyzer ===\nfunction analyzeCanary(canaryErrors: number, canaryTotal: number, baselineErrors: number, baselineTotal: number): { increase: number; rollback: boolean } {\n  const canaryRate = canaryTotal > 0 ? canaryErrors / canaryTotal : 0;\n  const baselineRate = baselineTotal > 0 ? baselineErrors / baselineTotal : 0;\n  const increase = baselineRate > 0 ? (canaryRate - baselineRate) / baselineRate * 100 : canaryRate * 100;\n  return { increase: Math.round(increase * 100) / 100, rollback: increase > 50 };\n}\nconsole.log(analyzeCanary(5, 1000, 2, 1000));\n\n// === Uptime Calculator ===\nfunction calculateUptime(downtimeMinutes: number, periodDays = 30): string {\n  const totalMinutes = periodDays * 24 * 60;\n  const uptime = ((totalMinutes - downtimeMinutes) / totalMinutes) * 100;\n  return `${uptime.toFixed(3)}%`;\n}\nconsole.log(calculateUptime(43.2));\n"
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