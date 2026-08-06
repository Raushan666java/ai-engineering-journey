"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[77750],{

/***/ 6131
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_software_engineering_10_configuration_management_md_5dd_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-software-engineering-10-configuration-management-md-5dd.json
const site_docs_courses_software_engineering_10_configuration_management_md_5dd_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/software-engineering/10-configuration-management","title":"Configuration Management","description":"Learning Objectives","source":"@site/docs/courses/software-engineering/10-configuration-management.md","sourceDirName":"courses/software-engineering","slug":"/software-engineering/10-configuration-management","permalink":"/ai-engineering-journey/software-engineering/10-configuration-management","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"id":"10-configuration-management","slug":"/software-engineering/10-configuration-management","title":"Configuration Management","sidebar_label":"Configuration Management","sidebar_position":10},"sidebar":"coursesSidebar","previous":{"title":"Software Quality Management","permalink":"/ai-engineering-journey/software-engineering/09-quality-management"},"next":{"title":"Agile Methodologies","permalink":"/ai-engineering-journey/software-engineering/11-agile-methodologies"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/software-engineering/10-configuration-management.md


const frontMatter = {
	id: '10-configuration-management',
	slug: '/software-engineering/10-configuration-management',
	title: 'Configuration Management',
	sidebar_label: 'Configuration Management',
	sidebar_position: 10
};
const contentTitle = 'Configuration Management';

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
  "value": "What is Software Configuration Management?",
  "id": "what-is-software-configuration-management",
  "level": 3
}, {
  "value": "Configuration Items",
  "id": "configuration-items",
  "level": 3
}, {
  "value": "Baselines",
  "id": "baselines",
  "level": 3
}, {
  "value": "Version Control Strategies",
  "id": "version-control-strategies",
  "level": 3
}, {
  "value": "Branching Strategy Comparison",
  "id": "branching-strategy-comparison",
  "level": 4
}, {
  "value": "Change Control",
  "id": "change-control",
  "level": 3
}, {
  "value": "Build Management",
  "id": "build-management",
  "level": 3
}, {
  "value": "Release Management",
  "id": "release-management",
  "level": 3
}, {
  "value": "Status Accounting",
  "id": "status-accounting",
  "level": 3
}, {
  "value": "Configuration Auditing",
  "id": "configuration-auditing",
  "level": 3
}, {
  "value": "CI/CD Integration for Configuration Management",
  "id": "cicd-integration-for-configuration-management",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: VersionManager — Semantic Versioning with Bump, Compare, Tag",
  "id": "example-1-versionmanager--semantic-versioning-with-bump-compare-tag",
  "level": 3
}, {
  "value": "Example 2: ChangeControlBoard — CR Lifecycle, Approvals, Tracking",
  "id": "example-2-changecontrolboard--cr-lifecycle-approvals-tracking",
  "level": 3
}, {
  "value": "Example 3: ReleaseManager — Build Pipeline, Artifact Versioning, Changelog",
  "id": "example-3-releasemanager--build-pipeline-artifact-versioning-changelog",
  "level": 3
}, {
  "value": "Example 4: Baseline Manager",
  "id": "example-4-baseline-manager",
  "level": 3
}, {
  "value": "Example 5: GitHub Actions CI/CD for CM",
  "id": "example-5-github-actions-cicd-for-cm",
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
  "value": "TypeScript: Configuration Management Tools",
  "id": "typescript-configuration-management-tools",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    b: "b",
    code: "code",
    details: "details",
    em: "em",
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
        id: "configuration-management",
        children: "Configuration Management"
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
        }), " Explain the purpose and activities of software configuration management (SCM)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Identify configuration items and establish baselines"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Use version control systems effectively with branching strategies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Implement change control processes for software projects"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Automate build and release management with semantic versioning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Track configuration status and perform audits"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Implement production-grade TypeScript SCM tools (VersionManager, CCB, ReleaseManager)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Design CI/CD integration for configuration management workflows"]
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
        href: "../../assets/images/lessons/software-engineering/10-configuration-management/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/software-engineering/10-configuration-management/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/software-engineering/10-configuration-management/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/software-engineering/10-configuration-management/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/software-engineering/10-configuration-management/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/software-engineering/10-configuration-management/visual-explanation.png",
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
      id: "what-is-software-configuration-management",
      children: "What is Software Configuration Management?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Software Configuration Management (SCM) is the discipline of controlling the evolution of software systems throughout their lifecycle. It answers the questions: ", (0,jsx_runtime.jsx)(_components.em, {
        children: "what changed, who changed it, when, why, and what else was affected?"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SCM is critical for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Traceability:"
        }), " Every change can be traced back to a requirement, defect, or feature request"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reproducibility:"
        }), " Any past version of the system can be rebuilt exactly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collaboration:"
        }), " Multiple developers work simultaneously without conflicts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compliance:"
        }), " Regulatory standards (IEC 62304, DO-178C, FDA 21 CFR 11) mandate SCM practices"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recovery:"
        }), " Rollback to any known-good state when failures occur"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    SCM[Configuration Management] --> ID[Configuration Identification]\n    SCM --> CC[Change Control]\n    SCM --> VS[Version Control]\n    SCM --> BS[Build Management]\n    SCM --> RL[Release Management]\n    SCM --> SA[Status Accounting]\n    SCM --> AU[Configuration Auditing]\n    \n    ID -->|Define| CI[Configuration Items]\n    ID -->|Establish| BASELINE[Baselines]\n    \n    CC --> REQ[Change Request]\n    CC --> APPR[Approval Board]\n    CC --> IMPL[Implementation]\n    CC --> VER[Verification]\n    \n    VS --> BRANCH[Branching Strategies]\n    VS --> TAG[Tagging & Releases]\n    \n    BS --> AUTO[Build Automation]\n    BS --> DEP[Dependency Mgmt]\n    \n    RL --> CHAN[Changelog]\n    RL --> VERSION[Versioning]\n    \n    classDef main fill:#e1f5fe,stroke:#0288d1\n    classDef sub fill:#fff3e0,stroke:#f57c00\n    \n    class SCM,ID,CC,VS,BS,RL,SA,AU main\n    class CI,BASELINE,REQ,APPR,IMPL,VER,BRANCH,TAG,AUTO,DEP,CHAN,VERSION sub\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuration-items",
      children: "Configuration Items"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configuration Item (CI)"
      }), " is any software artifact that is placed under configuration control. CIs are typically versioned, reviewed, and auditable."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "CI Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Version Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Storage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Source code"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".ts"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".java"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".py"
            }), " files"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-file or changeset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Git, Mercurial"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Documents"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SRS, design docs, test plans"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential version number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SharePoint, Wiki"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Build artifacts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JAR, EXE, Docker images"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic versioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Artifactory, Docker Hub"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Configuration files"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "application.yml"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".env"
            }), " templates"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-project version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Git (templated)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Database schemas"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Migration scripts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential (V1, V2...)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flyway, Liquibase"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Test data"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixtures, seed data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matches schema version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Git LFS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tooling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build scripts, CI configs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matches main project"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Git"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Infrastructure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terraform, CloudFormation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Module versioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Git, module registry"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "baselines",
      children: "Baselines"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "baseline"
      }), " is a formally reviewed and agreed-upon version of a CI that serves as a foundation for further development. Once baselined, changes require formal change control."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    subgraph \"Development Timeline\"\n        T0[Start] --> T1[Requirements Baseline]\n        T1 --> T2[Design Baseline]\n        T2 --> T3[Code Baseline]\n        T3 --> T4[Test Baseline]\n        T4 --> T5[Release Baseline]\n    end\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Baseline"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When Established"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Contents"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Change Control"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Functional"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requirements approved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SRS, use cases, user stories"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formal CCB approval for changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Allocated"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design approved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture docs, interface specs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CCB approval for changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Product"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Release"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source code, executables, tests, docs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Emergency change process only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Developmental"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sprint/release end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current state of all CIs at milestone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normal change process"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Baseline management principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Baselines are immutable — once created, changes produce a new baseline version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each baseline references specific versions of all CIs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Traceability between baselines must be maintained"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Baseline contents are auditable at any time"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "version-control-strategies",
      children: "Version Control Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern version control systems (Git) form the backbone of SCM."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Git Command"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Repository"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Central store of all versions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "git init"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "git clone"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Commit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Snapshot of changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "git commit -m \"message\""
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Branch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Divergent line of development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "git branch <name>"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tag"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Named reference to a specific commit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "git tag v1.0.0"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Merge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrate changes from one branch to another"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "git merge <branch>"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rebase"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reapply commits on top of another base"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "git rebase <base>"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cherry-pick"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply specific commits from another branch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "git cherry-pick <hash>"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stash"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporarily save uncommitted changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "git stash"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "branching-strategy-comparison",
      children: "Branching Strategy Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Git Flow\"\n        MAIN[main] --> DEV[develop]\n        DEV --> F1[feature/login]\n        DEV --> F2[feature/search]\n        F1 --> DEV\n        F2 --> DEV\n        DEV --> RC[release/1.0]\n        RC --> MAIN\n        MAIN --> HF[hotfix/critical]\n        HF --> MAIN\n        HF --> DEV\n    end\n    \n    subgraph \"Trunk-Based\"\n        MAIN2[main] --> F3[feature/a]\n        MAIN2 --> F4[feature/b]\n        F3 -->|PR| MAIN2\n        F4 -->|PR| MAIN2\n    end\n    \n    classDef main fill:#4caf50,color:#fff\n    classDef dev fill:#2196f3,color:#fff\n    classDef feat fill:#ff9800,color:#fff\n    classDef release fill:#9c27b0,color:#fff\n    classDef hotfix fill:#f44336,color:#fff\n    \n    class MAIN,MAIN2 main\n    class DEV dev\n    class F1,F2,F3,F4 feat\n    class RC release\n    class HF hotfix\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Branches"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Merge Frequency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Release Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Git Flow"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "develop"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "feature/*"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "release/*"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "hotfix/*"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per feature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Release trains, scheduled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise with versioned releases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GitHub Flow"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "feature/*"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per feature (PR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SaaS, web applications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GitLab Flow"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "environment/*"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "feature/*"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Environment-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-environment deployments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trunk-Based"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), " (short-lived branches)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple times daily"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI/CD, DevOps teams"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Git Flow detailed:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " — production-ready state, only updated via release/hotfix merges"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "develop"
        }), " — integration branch for features"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "feature/<name>"
        }), " — branched from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "develop"
        }), ", merged back via PR"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "release/<version>"
        }), " — branched from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "develop"
        }), " for release preparation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "hotfix/<name>"
        }), " — branched from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " for emergency fixes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trunk-Based Development detailed:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single main branch with short-lived feature branches (< 2 days)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feature flags to hide incomplete work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Continuous integration with multiple daily commits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No release branches — any commit can be released"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant DEV as Developer\n    participant MAIN as Main Branch\n    participant CI as CI/CD\n    participant PROD as Production\n    \n    DEV->>MAIN: Commit (multiple times/day)\n    MAIN->>CI: Trigger build\n    CI->>CI: Run tests & quality gates\n    CI->>CI: Build & package\n    alt Feature Flag On\n        CI->>PROD: Deploy with feature toggled off\n    else No Flag Needed\n        CI->>PROD: Deploy to production\n    end\n    PROD-->>DEV: Monitoring feedback\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "change-control",
      children: "Change Control"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Change control ensures that every change is evaluated, approved, implemented, and verified systematically."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant User as Developer\n    participant CCM as Change Control Board\n    participant QA as Quality Assurance\n    \n    User->>User: Identifies need for change\n    User->>CCM: Submits Change Request (CR)\n    CCM->>CCM: Evaluates impact, effort, risk\n    CCM->>CCM: Approved / Rejected / Deferred\n    CCM->>User: Decision communicated\n    User->>User: Implements change\n    User->>QA: Submits for verification\n    QA->>QA: Tests and validates\n    QA->>CCM: Verification result\n    CCM->>CCM: Updates CI status\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Change Request (CR) Lifecycle:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Submitted → Under Review → Approved / Rejected → Implemented → Verified → Closed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Change Control Board (CCB):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chairperson:"
        }), " Senior manager with authority to approve changes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Members:"
        }), " Development lead, QA lead, Operations lead, Product owner"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Weekly or on-demand for urgent changes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decision criteria:"
        }), " Business value, risk, effort, impact on schedule"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Change Request Template:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CR ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique identifier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short summary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Submitter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Person requesting change"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Date"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Submission date"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Priority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical / High / Medium / Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bug fix / Enhancement / Infrastructure / Documentation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detailed explanation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Affected CIs, schedule, cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low / Medium / High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Approved / Rejected / Deferred"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Target Version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version to include the change"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Verification Criteria"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How to verify the change was correctly implemented"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Change urgency levels:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Criteria"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Approval"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Emergency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security vulnerability, production outage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Emergency CCB (2 people)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immediate, retrospective review"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Standard"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature, improvement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full CCB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next release"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trivial"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Documentation, formatting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Peer review only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy immediately"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "build-management",
      children: "Build Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build management ensures that software can be built consistently and reproducibly."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key build management concepts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Build automation:"
        }), " Make, Maven, Gradle, npm, Webpack"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Build script:"
        }), " Defined, versioned steps to produce deployable artifacts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dependency management:"
        }), " Maven Central, npm registry, Ivy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Build server:"
        }), " Jenkins, GitHub Actions, GitLab CI"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reproducible builds:"
        }), " Same source always produces identical artifacts"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    SRC[Source Code] --> CHECK[Checkout]\n    CHECK --> DEP[Resolve Dependencies]\n    DEP --> COMP[Compile/Transpile]\n    COMP --> TEST[Run Tests]\n    TEST --> PACK[Package Artifact]\n    PACK --> SIGN[Sign Artifact]\n    SIGN --> PUB[Publish to Artifact Store]\n    \n    style SRC fill:#4caf50,color:#fff\n    style PUB fill:#2196f3,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Build ID Convention:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<project>-<branch>-<build-number>-<commit-short>\nExample: auth-service-release-1.0-45-a1b2c3d\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Artifact versioning:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Development builds:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1.0.0-dev.${buildNumber}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release candidates:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1.0.0-rc.1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stable releases:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1.0.0"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hotfix releases:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1.0.1"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "release-management",
      children: "Release Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Release management coordinates the deployment of software to production."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Semantic Versioning (SemVer):"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MAJOR.MINOR.PATCH"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MAJOR:"
        }), " Incompatible API changes (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2.0.0 → 3.0.0"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR:"
        }), " Backward-compatible functionality added (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2.0.0 → 2.1.0"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PATCH:"
        }), " Backward-compatible bug fixes (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2.0.0 → 2.0.1"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre-release suffixes:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-alpha"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-beta"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-rc.1"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-dev.20250115"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Release process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code freeze on release branch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regression testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release candidate creation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Staged deployment (dev → staging → production)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Smoke testing in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tag release in version control"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rollback plan in place"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Release trains:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weekly:"
        }), " Small batches, low risk per release"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monthly:"
        }), " Medium batches, measured rollout"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quarterly:"
        }), " Large batches, major version bumps"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "On-demand:"
        }), " Triggered by feature completion or emergency"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Changelog types:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Added"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Added OAuth 2.0 authentication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Changed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Existing functionality changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Updated payment flow to v3 API"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deprecated"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Features to be removed"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Deprecated legacy ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/api/v1"
            }), " endpoints"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Removed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Features removed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removed support for Node 16"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fixed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bug fixes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed race condition in session handler"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerability fixes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patched XSS in search input"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "status-accounting",
      children: "Status Accounting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Status accounting tracks the state of all CIs throughout the project lifecycle."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status for each CI:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Checked out / Checked in"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Approved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Under change"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verified"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Released"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Obsoleted"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reports produced:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CI status report"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Baseline content report"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Change request history"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release history"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version tree"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Audit trail"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuration-auditing",
      children: "Configuration Auditing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "configuration audit"
      }), " verifies that the product matches its documentation and that all CIs are properly managed."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Audit Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Focus"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frequency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Outcomes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Functional Configuration Audit (FCA)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product meets requirements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before release"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requirements traceability matrix validated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Physical Configuration Audit (PCA)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product matches all documentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before release"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All CIs match their specs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SCM Process Audit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SCM procedures are followed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quarterly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process compliance %"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "In-Progress Audit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SCM activities on active work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per milestone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anomalies identified and resolved"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cicd-integration-for-configuration-management",
      children: "CI/CD Integration for Configuration Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"CI Pipeline\"\n        COMMIT[Developer Commit] --> BUILD_ID[Generate Build ID]\n        BUILD_ID --> COMPILE[Compile & Test]\n        COMPILE --> QUALITY[Quality Gates]\n        QUALITY --> ARTIFACT[Create Artifact]\n        ARTIFACT --> TAG[Tag in VCS]\n    end\n    \n    subgraph \"Release Pipeline\"\n        TAG --> VERIFY[Verify Tag]\n        VERIFY --> CHANGELOG[Generate Changelog]\n        CHANGELOG --> VERSION[Bump Version]\n        VERSION --> RC[Create Release Candidate]\n        RC --> DEPLOY_STG[Deploy to Staging]\n        DEPLOY_STG --> TESTS[Integration Tests]\n        TESTS --> APPROVAL{Human Approval?}\n        APPROVAL -->|Yes| PUBLISH[Publish Release]\n        APPROVAL -->|No| REJECT[Reject & Notify]\n        PUBLISH --> DEPLOY_PROD[Deploy to Production]\n    end\n    \n    classDef ci fill:#e3f2fd,stroke:#1565c0\n    classDef release fill:#fce4ec,stroke:#c62828\n    \n    class COMMIT,BUILD_ID,COMPILE,QUALITY,ARTIFACT,TAG ci\n    class VERIFY,CHANGELOG,VERSION,RC,DEPLOY_STG,TESTS,APPROVAL,PUBLISH,REJECT,DEPLOY_PROD release\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Build ID and Artifact Versioning Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The CI pipeline generates build IDs that uniquely identify every build. The CD pipeline uses these IDs for traceable releases."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Commit: abc1234\nBuild ID: build-20250115-1001-abc1234\nDocker Tag: ghcr.io/myapp/service:build-20250115-1001\nRelease Tag: v1.2.3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-versionmanager--semantic-versioning-with-bump-compare-tag",
      children: "Example 1: VersionManager — Semantic Versioning with Bump, Compare, Tag"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A production-grade semantic versioning manager that supports parsing, bumping, comparing, tagging, and dependency compatibility checking."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface VersionTag {\n  version: string;\n  timestamp: Date;\n  commitHash: string;\n  message: string;\n  tagType: 'release' | 'prerelease' | 'build';\n}\n\ninterface DependencyConstraint {\n  name: string;\n  minVersion: string;\n  maxVersion: string;\n  compatibility: 'exact' | 'compatible' | 'any';\n}\n\nclass VersionManager {\n  private tags: VersionTag[] = [];\n\n  public parse(versionString: string): { major: number; minor: number; patch: number; prerelease?: string; build?: string } {\n    const regex = /^(\\d+)\\.(\\d+)\\.(\\d+)(?:-([\\w.]+))?(?:\\+([\\w.]+))?$/;\n    const match = versionString.match(regex);\n    if (!match) throw new Error(`Invalid SemVer: ${versionString}`);\n    return {\n      major: parseInt(match[1], 10),\n      minor: parseInt(match[2], 10),\n      patch: parseInt(match[3], 10),\n      prerelease: match[4],\n      build: match[5],\n    };\n  }\n\n  public bump(current: string, type: 'major' | 'minor' | 'patch', prerelease?: string): string {\n    const v = this.parse(current);\n    let { major, minor, patch } = v;\n    switch (type) {\n      case 'major': major++; minor = 0; patch = 0; break;\n      case 'minor': minor++; patch = 0; break;\n      case 'patch': patch++; break;\n    }\n    let result = `${major}.${minor}.${patch}`;\n    if (prerelease) result += `-${prerelease}`;\n    return result;\n  }\n\n  public compare(a: string, b: string): number {\n    const va = this.parse(a);\n    const vb = this.parse(b);\n    if (va.major !== vb.major) return va.major - vb.major;\n    if (va.minor !== vb.minor) return va.minor - vb.minor;\n    if (va.patch !== vb.patch) return va.patch - vb.patch;\n    if (va.prerelease && !vb.prerelease) return -1;\n    if (!va.prerelease && vb.prerelease) return 1;\n    return (va.prerelease ?? '').localeCompare(vb.prerelease ?? '');\n  }\n\n  public satisfiesConstraint(version: string, constraint: DependencyConstraint): boolean {\n    const v = this.parse(version);\n    const min = this.parse(constraint.minVersion);\n    const max = this.parse(constraint.maxVersion);\n    const meetsMin = this.compare(version, constraint.minVersion) >= 0;\n    const meetsMax = this.compare(version, constraint.maxVersion) <= 0;\n    return meetsMin && meetsMax;\n  }\n\n  public createTag(version: string, commitHash: string, message: string, tagType: VersionTag['tagType'] = 'release'): VersionTag {\n    const tag: VersionTag = {\n      version, timestamp: new Date(), commitHash, message, tagType,\n    };\n    this.tags.push(tag);\n    return tag;\n  }\n\n  public getReleaseHistory(): VersionTag[] {\n    return [...this.tags].filter(t => t.tagType === 'release').sort((a, b) => this.compare(b.version, a.version));\n  }\n\n  public getLatestVersion(): string | null {\n    const releases = this.getReleaseHistory();\n    return releases.length > 0 ? releases[0].version : null;\n  }\n\n  public generateChangelog(fromVersion: string, toVersion: string, commits: { hash: string; message: string; type: string }[]): string {\n    const categorized: Record<string, string[]> = { Added: [], Changed: [], Deprecated: [], Removed: [], Fixed: [], Security: [] };\n    for (const commit of commits) {\n      const cat = commit.type in categorized ? commit.type : 'Changed';\n      categorized[cat].push(commit.message);\n    }\n    const lines = [\n      `# Changelog [${fromVersion} → ${toVersion}]`,\n      '',\n      ...Object.entries(categorized).flatMap(([category, items]) =>\n        items.length > 0 ? [`### ${category}`, ...items.map(i => `- ${i}`), ''] : []\n      ),\n    ];\n    return lines.join('\\n');\n  }\n\n  public checkDependencyCompatibility(version: string, dependencies: DependencyConstraint[]): { compatible: boolean; violations: string[] } {\n    const violations: string[] = [];\n    for (const dep of dependencies) {\n      if (!this.satisfiesConstraint(version, dep)) {\n        violations.push(`${dep.name}: ${version} violates ${dep.minVersion} → ${dep.maxVersion}`);\n      }\n    }\n    return { compatible: violations.length === 0, violations };\n  }\n}\n\n// Usage\nconst vm = new VersionManager();\nconsole.log(vm.bump('1.2.3', 'minor'));       // 1.3.0\nconsole.log(vm.bump('2.0.0', 'major', 'rc.1')); // 3.0.0-rc.1\nconsole.log(vm.compare('2.0.0', '1.9.9'));    // 1\nconsole.log(vm.satisfiesConstraint('1.5.0', { name: 'lib-x', minVersion: '1.0.0', maxVersion: '2.0.0', compatibility: 'compatible' }));\n\nconst commits = [\n  { hash: 'a1b2c3', message: 'Add OAuth 2.0 login', type: 'Added' },\n  { hash: 'b2c3d4', message: 'Fix memory leak in connection pool', type: 'Fixed' },\n  { hash: 'c3d4e5', message: 'Update API rate limiting', type: 'Changed' },\n  { hash: 'd4e5f6', message: 'Patch XSS vulnerability in search', type: 'Security' },\n];\nconsole.log(vm.generateChangelog('v1.0.0', 'v1.1.0', commits));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-changecontrolboard--cr-lifecycle-approvals-tracking",
      children: "Example 2: ChangeControlBoard — CR Lifecycle, Approvals, Tracking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A full change control board implementation with CR lifecycle management, voting, notifications, and metrics."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type CRPriority = 'critical' | 'high' | 'medium' | 'low';\ntype CRStatus = 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected' | 'deferred' | 'implemented' | 'verified' | 'closed';\ntype CRCategory = 'bug_fix' | 'enhancement' | 'infrastructure' | 'documentation' | 'security';\n\ninterface ChangeRequest {\n  id: string;\n  title: string;\n  submitter: string;\n  dateSubmitted: Date;\n  description: string;\n  justification: string;\n  priority: CRPriority;\n  category: CRCategory;\n  impact: string;\n  risk: 'low' | 'medium' | 'high';\n  affectedCIs: string[];\n  status: CRStatus;\n  approvedBy?: string;\n  approvalDate?: Date;\n  targetVersion?: string;\n  rejectReason?: string;\n  reviewNotes: string[];\n  implementationDetails?: string;\n  verificationResults?: string;\n  verificationDate?: Date;\n}\n\ninterface CCBMember {\n  name: string;\n  role: 'chair' | 'vice_chair' | 'member';\n  votingPower: number;\n  department: string;\n}\n\ninterface CCBVote {\n  crId: string;\n  member: string;\n  decision: 'approve' | 'reject' | 'abstain';\n  comments: string;\n  date: Date;\n}\n\nclass ChangeControlBoard {\n  private crs: ChangeRequest[] = [];\n  private members: CCBMember[] = [];\n  private votes: CCBVote[] = [];\n  private sequence = 0;\n\n  public addMember(name: string, role: CCBMember['role'], department: string, votingPower = 1): void {\n    this.members.push({ name, role, votingPower, department });\n  }\n\n  public submit(\n    title: string, submitter: string, description: string, justification: string,\n    priority: CRPriority, category: CRCategory, impact: string, risk: 'low' | 'medium' | 'high',\n    affectedCIs: string[]\n  ): ChangeRequest {\n    const cr: ChangeRequest = {\n      id: `CR-${++this.sequence}`, title, submitter, dateSubmitted: new Date(), description,\n      justification, priority, category, impact, risk, affectedCIs, status: 'submitted', reviewNotes: [],\n    };\n    this.crs.push(cr);\n    return cr;\n  }\n\n  public submitForReview(crId: string): ChangeRequest {\n    const cr = this.findCR(crId);\n    cr.status = 'under_review';\n    return cr;\n  }\n\n  public vote(crId: string, memberName: string, decision: CCBVote['decision'], comments: string): void {\n    if (!this.members.some(m => m.name === memberName)) {\n      throw new Error(`${memberName} is not a CCB member`);\n    }\n    this.votes.push({ crId, member: memberName, decision, comments, date: new Date() });\n    this.checkVoteOutcome(crId);\n  }\n\n  private checkVoteOutcome(crId: string): void {\n    const cr = this.findCR(crId);\n    const relevantVotes = this.votes.filter(v => v.crId === crId);\n    const totalPower = this.members.reduce((s, m) => s + m.votingPower, 0);\n    const votingMembers = this.members.filter(m => relevantVotes.some(v => v.member === m.name));\n    const votedPower = votingMembers.reduce((s, m) => s + m.votingPower, 0);\n\n    // Require majority of voting power for decision\n    if (votedPower < totalPower * 0.5) return; // Not enough votes yet\n\n    const approvePower = relevantVotes\n      .filter(v => v.decision === 'approve')\n      .reduce((s, v) => s + (this.members.find(m => m.name === v.member)?.votingPower ?? 0), 0);\n\n    const rejectPower = relevantVotes\n      .filter(v => v.decision === 'reject')\n      .reduce((s, v) => s + (this.members.find(m => m.name === v.member)?.votingPower ?? 0), 0);\n\n    if (approvePower > votedPower * 0.5) {\n      cr.status = 'approved';\n      cr.approvalDate = new Date();\n      cr.reviewNotes.push(`Approved by CCB on ${cr.approvalDate.toISOString().split('T')[0]}`);\n    } else if (rejectPower > votedPower * 0.5) {\n      cr.status = 'rejected';\n      const rejectionReasons = relevantVotes.filter(v => v.decision === 'reject').map(v => v.comments);\n      cr.rejectReason = rejectionReasons.join('; ');\n      cr.reviewNotes.push(`Rejected by CCB: ${cr.rejectReason}`);\n    }\n  }\n\n  public markImplemented(crId: string, details: string): ChangeRequest {\n    const cr = this.findCR(crId);\n    if (cr.status !== 'approved') throw new Error('CR must be approved before implementation');\n    cr.status = 'implemented';\n    cr.implementationDetails = details;\n    return cr;\n  }\n\n  public verify(crId: string, results: string): ChangeRequest {\n    const cr = this.findCR(crId);\n    cr.status = 'verified';\n    cr.verificationResults = results;\n    cr.verificationDate = new Date();\n    return cr;\n  }\n\n  public close(crId: string): ChangeRequest {\n    const cr = this.findCR(crId);\n    cr.status = 'closed';\n    return cr;\n  }\n\n  public getPendingReview(): ChangeRequest[] {\n    return this.crs.filter(cr => cr.status === 'submitted' || cr.status === 'under_review');\n  }\n\n  public getCRsByPriority(priority: CRPriority): ChangeRequest[] {\n    return this.crs.filter(cr => cr.priority === priority).sort((a, b) => a.dateSubmitted.getTime() - b.dateSubmitted.getTime());\n  }\n\n  public generateMetrics(): { total: number; approved: number; rejected: number; avgDaysToApprove: number } {\n    const approved = this.crs.filter(cr => cr.status === 'approved' || cr.status === 'implemented' || cr.status === 'verified' || cr.status === 'closed');\n    const rejected = this.crs.filter(cr => cr.status === 'rejected');\n    const withApprovalDate = approved.filter(cr => cr.approvalDate);\n    const totalDays = withApprovalDate.reduce((s, cr) => s + (cr.approvalDate!.getTime() - cr.dateSubmitted.getTime()), 0);\n    const avgDaysToApprove = withApprovalDate.length > 0 ? totalDays / withApprovalDate.length / 86400000 : 0;\n    return {\n      total: this.crs.length,\n      approved: approved.length, rejected: rejected.length,\n      avgDaysToApprove: Math.round(avgDaysToApprove * 10) / 10,\n    };\n  }\n\n  public generateMonthlyReport(year: number, month: number): string {\n    const relevant = this.crs.filter(cr => {\n      const d = cr.dateSubmitted;\n      return d.getFullYear() === year && d.getMonth() === month - 1;\n    });\n    const approved = relevant.filter(cr => cr.status === 'approved' || cr.status === 'implemented' || cr.status === 'verified').length;\n    const rejected = relevant.filter(cr => cr.status === 'rejected').length;\n    const pending = relevant.filter(cr => cr.status === 'submitted' || cr.status === 'under_review').length;\n    return [\n      `═══════════════════════════════════`,\n      `  Monthly CCB Report: ${year}-${String(month).padStart(2, '0')}`,\n      `═══════════════════════════════════`,\n      `  Total CRs: ${relevant.length}`,\n      `  Approved: ${approved}`,\n      `  Rejected: ${rejected}`,\n      `  Pending: ${pending}`,\n      `  Approval Rate: ${relevant.length > 0 ? Math.round((approved / relevant.length) * 100) : 0}%`,\n      '',\n      `  Priority Breakdown:`,\n      ...(['critical', 'high', 'medium', 'low'] as CRPriority[]).map(p => {\n        const count = relevant.filter(cr => cr.priority === p).length;\n        return `    ${p.padEnd(10)} ${count}`;\n      }),\n    ].join('\\n');\n  }\n\n  private findCR(crId: string): ChangeRequest {\n    const cr = this.crs.find(c => c.id === crId);\n    if (!cr) throw new Error(`Change request ${crId} not found`);\n    return cr;\n  }\n}\n\n// Usage\nconst ccb = new ChangeControlBoard();\nccb.addMember('Dr. Smith', 'chair', 'Engineering', 3);\nccb.addMember('Jane Doe', 'vice_chair', 'QA', 2);\nccb.addMember('Bob Wilson', 'member', 'Operations', 1);\nccb.addMember('Alice Chen', 'member', 'Product', 1);\n\nconst cr = ccb.submit(\n  'Add payment gateway integration', 'Mike Dev',\n  'Integrate Stripe payment gateway to support credit card payments',\n  'Customer survey shows 70% prefer credit card payments',\n  'high', 'enhancement', 'Payment module, API config, test suite', 'medium',\n  ['payment-service', 'api-gateway', 'payment-test-data']\n);\n\nccb.submitForReview(cr.id);\nccb.vote(cr.id, 'Dr. Smith', 'approve', 'Well justified, moderate risk');\nccb.vote(cr.id, 'Jane Doe', 'approve', 'QA resources available');\nccb.vote(cr.id, 'Bob Wilson', 'approve', 'Ops can support');\nccb.vote(cr.id, 'Alice Chen', 'approve', 'High customer value');\n\nconsole.log(cr.status); // approved\nconsole.log(ccb.generateMonthlyReport(2025, 1));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-releasemanager--build-pipeline-artifact-versioning-changelog",
      children: "Example 3: ReleaseManager — Build Pipeline, Artifact Versioning, Changelog"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A comprehensive release manager that orchestrates builds, manages artifact versioning, generates changelogs, and supports release trains."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface BuildConfig {\n  projectName: string;\n  version: string;\n  commitHash: string;\n  buildNumber: number;\n  branch: string;\n  environment: 'development' | 'staging' | 'production';\n}\n\ninterface Artifact {\n  name: string;\n  version: string;\n  buildId: string;\n  type: 'docker' | 'npm' | 'jar' | 'exe';\n  registry: string;\n  tag: string;\n}\n\ninterface ArtifactVersioningStrategy {\n  version: string;\n  dockerTag: string;\n  npmTag: string;\n  buildId: string;\n}\n\nclass ReleaseManager {\n  private builds: BuildConfig[] = [];\n  private artifacts: Artifact[] = [];\n  private changelogs: Map<string, string> = new Map();\n\n  constructor(private versionManager: VersionManager) {}\n\n  public generateBuildId(branch: string, buildNumber: number, commitHash: string): string {\n    const cleanBranch = branch.replace(/[^a-zA-Z0-9]/g, '-');\n    const shortHash = commitHash.substring(0, 7);\n    const dateStr = new Date().toISOString().split('T')[0].replace(/-/g, '');\n    return `build-${dateStr}-${buildNumber}-${shortHash}`;\n  }\n\n  public planVersioning(projectName: string, branch: string, buildNumber: number, commitHash: string, bumpType: 'major' | 'minor' | 'patch'): ArtifactVersioningStrategy {\n    const baseVersion = this.versionManager.getLatestVersion() || '0.1.0';\n    let version: string;\n    let prerelease: string | undefined;\n\n    if (branch === 'main' || branch === 'master') {\n      version = this.versionManager.bump(baseVersion, bumpType);\n    } else if (branch.startsWith('release/')) {\n      const releaseVer = branch.replace('release/', '');\n      version = `${releaseVer}-rc.${buildNumber}`;\n      prerelease = `rc.${buildNumber}`;\n    } else {\n      version = `${baseVersion}-dev.${buildNumber}`;\n      prerelease = `dev.${buildNumber}`;\n    }\n\n    return {\n      version,\n      dockerTag: `${projectName}:${version}`,\n      npmTag: version,\n      buildId: this.generateBuildId(branch, buildNumber, commitHash),\n    };\n  }\n\n  public async runBuild(config: BuildConfig, stages: { name: string; run: () => Promise<boolean> }[]): Promise<{ success: boolean; failedStage?: string; duration: number }> {\n    const start = Date.now();\n    this.builds.push(config);\n\n    for (const stage of stages) {\n      const stageStart = Date.now();\n      const passed = await stage.run();\n      const stageDuration = Date.now() - stageStart;\n      console.log(`Stage ${stage.name}: ${passed ? '✅ PASSED' : '❌ FAILED'} (${stageDuration}ms)`);\n      if (!passed) {\n        return { success: false, failedStage: stage.name, duration: Date.now() - start };\n      }\n    }\n    return { success: true, duration: Date.now() - start };\n  }\n\n  public publishArtifact(artifact: Artifact): void {\n    this.artifacts.push(artifact);\n    console.log(`Published ${artifact.type} artifact: ${artifact.tag}`);\n  }\n\n  public generateReleaseNotes(version: string, commits: { hash: string; message: string; author: string; type: string }[]): string {\n    const notes = this.versionManager.generateChangelog(\n      this.versionManager.getLatestVersion() || '0.0.0', version, commits\n    );\n    this.changelogs.set(version, notes);\n    return notes;\n  }\n\n  public createRelease(version: string, commitHash: string, notes: string): {\n    tag: string;\n    releaseUrl: string;\n    artifacts: Artifact[];\n  } {\n    const tag = `v${version}`;\n    this.versionManager.createTag(version, commitHash, notes, 'release');\n    const releaseArtifacts = this.artifacts.filter(a => a.version === version);\n\n    return {\n      tag,\n      releaseUrl: `https://registry.example.com/releases/${tag}`,\n      artifacts: releaseArtifacts,\n    };\n  }\n\n  public getBuildHistory(limit = 10): BuildConfig[] {\n    return this.builds.slice(-limit);\n  }\n\n  public getArtifactsByVersion(version: string): Artifact[] {\n    return this.artifacts.filter(a => a.version === version);\n  }\n}\n\n// Usage\nconst vm = new VersionManager();\nvm.createTag('1.0.0', 'abc123', 'Initial release', 'release');\nvm.createTag('1.1.0', 'def456', 'Add payment feature', 'release');\n\nconst releaseMgr = new ReleaseManager(vm);\nconst plan = releaseMgr.planVersioning('auth-service', 'main', 45, 'a1b2c3d4e5', 'minor');\nconsole.log(plan);\n// { version: '1.2.0', dockerTag: 'auth-service:1.2.0', npmTag: '1.2.0', buildId: 'build-20250115-45-a1b2c3d' }\n\n// Simulate build pipeline\nreleaseMgr.runBuild(\n  { projectName: 'auth-service', version: '1.2.0', commitHash: 'a1b2c3d', buildNumber: 45, branch: 'main', environment: 'staging' },\n  [\n    { name: 'Install Dependencies', run: async () => { await new Promise(r => setTimeout(r, 100)); return true; } },\n    { name: 'Lint', run: async () => { await new Promise(r => setTimeout(r, 50)); return true; } },\n    { name: 'Unit Tests', run: async () => { await new Promise(r => setTimeout(r, 150)); return true; } },\n    { name: 'Build', run: async () => { await new Promise(r => setTimeout(r, 200)); return true; } },\n    { name: 'Integration Tests', run: async () => { await new Promise(r => setTimeout(r, 300)); return true; } },\n  ]\n).then(result => console.log(result));\n\nconst release = releaseMgr.createRelease('1.2.0', 'a1b2c3d', '### Added\\n- OAuth 2.0 support\\n- Rate limiting\\n### Fixed\\n- Session leak');\nconsole.log(`Release tag: ${release.tag}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-baseline-manager",
      children: "Example 4: Baseline Manager"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface BaselineRecord {\n  id: string;\n  name: string;\n  type: 'functional' | 'allocated' | 'product' | 'developmental';\n  createdAt: Date;\n  approvedBy: string;\n  items: string[];\n}\n\ninterface CIStatus {\n  id: string;\n  name: string;\n  version: string;\n  status: 'checked_in' | 'checked_out' | 'under_review' | 'approved' | 'released';\n  lastModified: Date;\n  modifiedBy: string;\n}\n\nclass BaselineManager {\n  private baselines: BaselineRecord[] = [];\n  private cis: Map<string, CIStatus> = new Map();\n\n  public registerCI(id: string, name: string, version: string): void {\n    this.cis.set(id, { id, name, version, status: 'checked_in', lastModified: new Date(), modifiedBy: 'system' });\n  }\n\n  public createBaseline(name: string, type: BaselineRecord['type'], approvedBy: string, ciIds: string[]): BaselineRecord {\n    for (const ciId of ciIds) {\n      if (!this.cis.has(ciId)) throw new Error(`CI ${ciId} not registered`);\n    }\n    const baseline: BaselineRecord = {\n      id: `BL-${this.baselines.length + 1}`, name, type,\n      createdAt: new Date(), approvedBy, items: [...ciIds],\n    };\n    this.baselines.push(baseline);\n    return baseline;\n  }\n\n  public getBaselineContents(baselineId: string): CIStatus[] {\n    const baseline = this.baselines.find(b => b.id === baselineId);\n    if (!baseline) throw new Error(`Baseline ${baselineId} not found`);\n    return baseline.items.map(ciId => {\n      const ci = this.cis.get(ciId);\n      if (!ci) throw new Error(`CI ${ciId} not found`);\n      return ci;\n    });\n  }\n\n  public checkInCI(ciId: string, user: string): void {\n    const ci = this.cis.get(ciId);\n    if (!ci) throw new Error(`CI ${ciId} not found`);\n    ci.status = 'checked_in';\n    ci.lastModified = new Date();\n    ci.modifiedBy = user;\n  }\n\n  public checkOutCI(ciId: string, user: string): void {\n    const ci = this.cis.get(ciId);\n    if (!ci) throw new Error(`CI ${ciId} not found`);\n    if (ci.status === 'approved' || ci.status === 'released') throw new Error(`Cannot check out released CI ${ciId}`);\n    ci.status = 'checked_out';\n    ci.lastModified = new Date();\n    ci.modifiedBy = user;\n  }\n\n  public generateAuditReport(): string {\n    const approvedBaselines = this.baselines.filter(b => b.type === 'functional' || b.type === 'allocated' || b.type === 'product');\n    const unmatched: string[] = [];\n    for (const bl of approvedBaselines) {\n      for (const ciId of bl.items) {\n        const ci = this.cis.get(ciId);\n        if (ci && ci.status !== 'released' && ci.status !== 'approved') {\n          unmatched.push(`CI ${ciId} in baseline ${bl.id} has status ${ci?.status}`);\n        }\n      }\n    }\n    return [\n      '=== Configuration Audit Report ===',\n      `Total Baselines: ${this.baselines.length}`,\n      `Total CIs registered: ${this.cis.size}`,\n      `Anomalies found: ${unmatched.length}`,\n      ...unmatched.map(u => `  WARNING: ${u}`),\n    ].join('\\n');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-5-github-actions-cicd-for-cm",
      children: "Example 5: GitHub Actions CI/CD for CM"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "name: Build and Deploy\n\non:\n  push:\n    branches: [main, 'release/*']\n  pull_request:\n    branches: [main]\n\njobs:\n  version:\n    runs-on: ubuntu-latest\n    outputs:\n      version: ${{ steps.semver.outputs.version }}\n      build_id: ${{ steps.build_id.outputs.build_id }}\n    steps:\n      - uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n      \n      - name: Determine version\n        id: semver\n        run: |\n          LATEST_TAG=$(git describe --tags --abbrev=0 2>/dev/null || echo \"v0.0.0\")\n          VERSION=${LATEST_TAG#v}\n          echo \"version=$VERSION\" >> $GITHUB_OUTPUT\n      \n      - name: Generate build ID\n        id: build_id\n        run: |\n          BUILD_ID=\"build-$(date +%Y%m%d)-${{ github.run_number }}-${GITHUB_SHA:0:7}\"\n          echo \"build_id=$BUILD_ID\" >> $GITHUB_OUTPUT\n\n  build:\n    needs: version\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: '20'\n      - run: npm ci\n      - run: npm run build\n      - run: npm run test\n      \n      - name: Package artifact\n        run: |\n          mkdir -p dist\n          tar -czf \"dist/app-${{ needs.version.outputs.build_id }}.tar.gz\" dist/\n      \n      - uses: actions/upload-artifact@v4\n        with:\n          name: app-${{ needs.version.outputs.build_id }}\n          path: dist/\n\n  release:\n    if: github.ref == 'refs/heads/main'\n    needs: [version, build]\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      \n      - name: Create release tag\n        run: |\n          VERSION=\"${{ needs.version.outputs.version }}\"\n          NEW_VERSION=$(node -e \"\n            const [maj, min, pat] = '$VERSION'.split('.').map(Number);\n            console.log([maj, min + 1, 0].join('.'));\n          \")\n          git config user.name \"CI Bot\"\n          git config user.email \"ci@example.com\"\n          git tag -a \"v$NEW_VERSION\" -m \"Release v$NEW_VERSION\"\n          git push origin \"v$NEW_VERSION\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-case-studies",
      children: "Real-World Case Studies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Case Study 1: Google — Monorepo with Trunk-Based Development"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Google operates one of the world's largest monorepos with over 2 billion lines of code and 25,000+ developers. Their SCM approach:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single trunk:"
        }), " All development happens on mainline trunk"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No long-lived branches:"
        }), " Feature branches last < 2 days"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated code review:"
        }), " Every change requires automated review and 1-2 human reviewers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Build system:"
        }), " Blaze (internal) handles dependency graph across entire repo"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomic commits:"
        }), " Each commit is a single logical change"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key innovation: A single CI system that can rebuild the entire repository from source with deterministic outputs."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Case Study 2: Netflix — Spinnaker for Continuous Delivery"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Netflix's Spinnaker is an open-source CD platform that manages releases across AWS. Key SCM practices:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pipeline-as-code:"
        }), " Deployment pipelines defined in version control"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Immutable infrastructure:"
        }), " AMIs are versioned artifacts, never modified in place"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated canary analysis:"
        }), " Kayenta automatically compares canary vs baseline metrics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rollback by redeployment:"
        }), " Rollback = deploying the previous immutable artifact"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metadata everywhere:"
        }), " Every artifact tagged with build ID, commit hash, build timestamp"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Result: Netflix deploys thousands of times per day with < 1% change failure rate."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Case Study 3: NASA — Configuration Management for Mars Rovers"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NASA's Mars rover software requires absolute SCM rigor:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Every CI is accounted for:"
        }), " Source code, FPGA bitstreams, parameter tables, calibration data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Four-eyes principle:"
        }), " Every change requires author + reviewer"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Digital signatures:"
        }), " All artifacts cryptographically signed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Full traceability:"
        }), " Every line of code traces to a requirement, test, and operations procedure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reproducibility:"
        }), " Any flight software build can be exactly reproduced years later"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The SCM system for Mars 2020 Perseverance tracked over 50,000 CIs across 15 subsystems."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Software Configuration Management is the backbone of disciplined software engineering. It establishes control over the evolution of software artifacts through seven key activities: configuration identification (defining CIs), change control (CCB with formal CR lifecycle), version control (branching strategies like Git Flow, GitHub Flow, trunk-based), build management (automated, reproducible builds), release management (semantic versioning, changelogs, release trains), status accounting (tracking CI states), and configuration auditing (FCA, PCA, process audits). The choice of branching strategy depends on the release model — Git Flow suits scheduled releases, trunk-based suits continuous deployment, and GitHub Flow suits SaaS teams."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern SCM integrates deeply with CI/CD pipelines. Every commit generates a unique build ID that flows through to artifact tagging, release notes, and deployment tracking. The VersionManager implements semantic versioning with bump, compare, and constraint satisfaction. The ChangeControlBoard models the complete CR lifecycle with voting, approval tracking, and metrics. The ReleaseManager orchestrates build pipelines, artifact versioning, and changelog generation. Real-world practice from Google (monorepo with trunk-based development), Netflix (Spinnaker CD with immutable artifacts), and NASA (cryptographically signed CIs with full traceability) demonstrates that SCM rigor directly correlates with release reliability and team productivity."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Everything that changes should be a CI"
        }), " — source code, database scripts, build scripts, documentation, infrastructure definitions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Baselines protect against scope creep"
        }), " — once baselined, changes require formal approval"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Branch early, branch often"
        }), " — branches are cheap; isolation reduces coordination overhead"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automate everything you can"
        }), " — builds, tests, deployments should be single-command operations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tag every release"
        }), " — you cannot inspect a bug in production if you cannot recreate the exact binary"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Audit traceability"
        }), " — every release must trace back to specific commits and change requests"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Adopt a branching strategy that matches your release model"
        }), " — don't force Git Flow on a continuous-deployment team"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Semantic versioning communicates intent"
        }), " — MAJOR breaks compatibility, MINOR adds features, PATCH fixes bugs"]
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
            children: "Q1: What is a configuration item?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A CI is any software artifact that is versioned, reviewed, and auditable — including source, docs, build scripts, and config files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q2: A baseline is defined as:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A formally reviewed version of a CI that serves as a foundation for further development; changes require formal control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q3: In semantic versioning 2.3.1, incrementing the MINOR version produces:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "bumpMinor"
            }), " increments minor and resets patch to 0: 2.4.0"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q4: The branching strategy where main is always deployable and feature branches are short-lived is called:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub Flow uses short-lived feature branches merged to main via PR; trunk-based is similar but with even higher commit frequency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q5: What is the purpose of a Functional Configuration Audit (FCA)?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FCA verifies that the product functionally meets its documented requirements through requirements traceability"
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
        }), " Implement a branch strategy validator that checks whether a given branch name and parent branch comply with Git Flow rules. Include pattern matching for feature, release, hotfix, and support branches."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "interface BranchRule {\n  pattern: RegExp;\n  allowedParents: string[];\n  namingConvention: string;\n  requiresPR: boolean;\n  approvalCount: number;\n}\n\nclass BranchStrategyValidator {\n  private rules: BranchRule[] = [];\n\n  public addRule(pattern: string, allowedParents: string[], namingConvention: string, requiresPR: boolean, approvalCount: number): void {\n    this.rules.push({\n      pattern: new RegExp(pattern),\n      allowedParents, namingConvention, requiresPR, approvalCount,\n    });\n  }\n\n  public validate(branchName: string, parentBranch: string): { valid: boolean; violations: string[]; matchingRule?: BranchRule } {\n    const violations: string[] = [];\n    const matchingRules = this.rules.filter(r => r.pattern.test(branchName));\n\n    if (matchingRules.length === 0) {\n      violations.push(`No matching rule for branch '${branchName}'`);\n      return { valid: false, violations };\n    }\n\n    const rule = matchingRules[0];\n    if (!rule.allowedParents.includes(parentBranch)) {\n      violations.push(`Branch '${branchName}' cannot be based on '${parentBranch}'. Allowed: ${rule.allowedParents.join(', ')}`);\n    }\n    if (rule.requiresPR) {\n      violations.push(`Branch '${branchName}' requires a pull request`);\n    }\n\n    return { valid: violations.length === 0, violations, matchingRule: rule };\n  }\n\n  public generateFlowChart(): string {\n    const lines = ['```mermaid', 'graph TD'];\n    for (const rule of this.rules) {\n      for (const parent of rule.allowedParents) {\n        const cleanName = rule.pattern.source.replace(/[^\\w]/g, '_');\n        const cleanParent = parent.replace(/[^\\w]/g, '_');\n        lines.push(`    ${cleanParent}[${parent}] --> ${cleanName}[${rule.namingConvention}]`);\n      }\n    }\n    lines.push('```');\n    return lines.join('\\n');\n  }\n}\n\nconst validator = new BranchStrategyValidator();\nvalidator.addRule('^main$', ['develop', 'release/.*', 'hotfix/.*'], 'Main branch', true, 2);\nvalidator.addRule('^develop$', ['feature/.*', 'main'], 'Develop branch', true, 1);\nvalidator.addRule('^feature/.*', ['develop'], 'Feature branches', false, 0);\nvalidator.addRule('^release/.*', ['develop'], 'Release branches', true, 1);\nvalidator.addRule('^hotfix/.*', ['main'], 'Hotfix branches', true, 2);\nconsole.log(validator.validate('feature/login', 'develop'));\nconsole.log(validator.validate('feature/login', 'main'));\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.b, {
          children: "Exercise 2:"
        }), " Create a merge conflict predictor that analyzes recent changes to files and predicts which files are most likely to conflict when merging two branches."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "interface FileChange {\n  file: string;\n  branch: string;\n  linesChanged: number[];\n  author: string;\n  timestamp: Date;\n}\n\ninterface ConflictPrediction {\n  file: string;\n  risk: 'high' | 'medium' | 'low';\n  probability: number;\n  overlappingLines: number[];\n}\n\nclass MergeConflictPredictor {\n  private changes: FileChange[] = [];\n\n  public recordChange(change: FileChange): void {\n    this.changes.push(change);\n  }\n\n  public predictConflicts(sourceBranch: string, targetBranch: string): ConflictPrediction[] {\n    const sourceChanges = this.changes.filter(c => c.branch === sourceBranch);\n    const targetChanges = this.changes.filter(c => c.branch === targetBranch);\n    const affectedFiles = new Set([...sourceChanges.map(c => c.file), ...targetChanges.map(c => c.file)]);\n    const predictions: ConflictPrediction[] = [];\n\n    for (const file of affectedFiles) {\n      const srcFileChanges = sourceChanges.filter(c => c.file === file);\n      const tgtFileChanges = targetChanges.filter(c => c.file === file);\n      const srcLines = new Set(srcFileChanges.flatMap(c => c.linesChanged));\n      const tgtLines = new Set(tgtFileChanges.flatMap(c => c.linesChanged));\n      const overlap = [...srcLines].filter(l => tgtLines.has(l));\n      const totalLines = new Set([...srcLines, ...tgtLines]).size;\n      const overlapRatio = totalLines > 0 ? overlap.length / totalLines : 0;\n      const recencyFactor = Math.min(1, Math.max(...[...srcFileChanges, ...tgtFileChanges].map(c => (Date.now() - c.timestamp.getTime()) / 86400000 / 7)));\n      const probability = Math.min(1, overlapRatio * 2 + (1 - recencyFactor) * 0.3);\n      const risk = probability > 0.6 ? 'high' : probability > 0.3 ? 'medium' : 'low';\n      predictions.push({ file, risk, probability: Math.round(probability * 100) / 100, overlappingLines: overlap });\n    }\n    return predictions.sort((a, b) => b.probability - a.probability);\n  }\n}\n\nconst predictor = new MergeConflictPredictor();\npredictor.recordChange({ file: 'auth.ts', branch: 'feature/login', linesChanged: [10, 11, 12, 13, 14], author: 'Alice', timestamp: new Date() });\npredictor.recordChange({ file: 'auth.ts', branch: 'main', linesChanged: [12, 13, 15, 16, 20], author: 'Bob', timestamp: new Date(Date.now() - 86400000) });\npredictor.recordChange({ file: 'config.ts', branch: 'feature/login', linesChanged: [5, 6], author: 'Alice', timestamp: new Date() });\nconsole.log(predictor.predictConflicts('feature/login', 'main'));\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.b, {
          children: "Exercise 3:"
        }), " Build a release train scheduler that manages releases across multiple tracks (weekly, monthly, quarterly) with version calculation, dependency ordering, and release window constraints."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "interface ReleaseTrain {\n  name: string;\n  frequencyDays: number;\n  nextRelease: Date;\n  versionPrefix: string;\n}\n\ninterface ReleasePackage {\n  id: string;\n  train: string;\n  version: string;\n  components: string[];\n  dependencies: string[];\n  status: 'planned' | 'in_progress' | 'released' | 'blocked';\n  releaseDate?: Date;\n}\n\nclass ReleaseTrainScheduler {\n  private trains: ReleaseTrain[] = [];\n  private packages: ReleasePackage[] = [];\n\n  public addTrain(name: string, frequencyDays: number, startDate: Date, versionPrefix: string): void {\n    this.trains.push({ name, frequencyDays, nextRelease: startDate, versionPrefix });\n  }\n\n  public schedulePackage(trainName: string, components: string[], dependencies: string[]): ReleasePackage {\n    const train = this.trains.find(t => t.name === trainName);\n    if (!train) throw new Error(`Train '${trainName}' not found`);\n    const count = this.packages.filter(p => p.train === trainName).length + 1;\n    const pkg: ReleasePackage = {\n      id: `REL-${trainName}-${count}`, train: trainName,\n      version: `${train.versionPrefix}.${count}`,\n      components, dependencies, status: 'planned',\n    };\n    this.packages.push(pkg);\n    return pkg;\n  }\n\n  public computeDependencyOrder(): ReleasePackage[] {\n    const sorted: ReleasePackage[] = [];\n    const visited = new Set<string>();\n    const visit = (pkgId: string) => {\n      if (visited.has(pkgId)) return;\n      visited.add(pkgId);\n      const pkg = this.packages.find(p => p.id === pkgId);\n      if (!pkg) return;\n      for (const dep of pkg.dependencies) {\n        visit(dep);\n      }\n      sorted.push(pkg);\n    };\n    for (const pkg of this.packages.filter(p => p.status === 'planned' || p.status === 'in_progress')) {\n      visit(pkg.id);\n    }\n    return sorted;\n  }\n\n  public getUpcomingReleases(daysAhead: number): ReleasePackage[] {\n    const cutoff = new Date(Date.now() + daysAhead * 86400000);\n    return this.packages.filter(p =>\n      p.releaseDate && p.releaseDate <= cutoff && p.status === 'planned'\n    );\n  }\n}\n\nconst scheduler = new ReleaseTrainScheduler();\nscheduler.addTrain('weekly', 7, new Date('2025-01-06'), '25.1');\nscheduler.addTrain('monthly', 30, new Date('2025-02-01'), '25.2');\nconsole.log(scheduler.schedulePackage('weekly', ['auth-service'], []));\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.b, {
          children: "Exercise 4:"
        }), " Implement a configuration audit tool that compares the actual state of CIs against established baselines and generates an anomaly report with severity levels."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "interface CIRecord { id: string; name: string; version: string; status: string; hash: string; }\ninterface BaselineSnapshot { baselineId: string; items: CIRecord[]; }\n\nclass ConfigurationAuditor {\n  private baselines: BaselineSnapshot[] = [];\n  private actualState: Map<string, CIRecord> = new Map();\n\n  public recordBaseline(baselineId: string, items: CIRecord[]): void {\n    this.baselines.push({ baselineId, items });\n  }\n\n  public recordActualState(ci: CIRecord): void {\n    this.actualState.set(ci.id, ci);\n  }\n\n  public audit(baselineId: string): { passed: boolean; anomalies: { ci: string; issue: string; severity: 'critical' | 'major' | 'minor' }[] } {\n    const baseline = this.baselines.find(b => b.baselineId === baselineId);\n    if (!baseline) return { passed: false, anomalies: [{ ci: 'baseline', issue: `Baseline ${baselineId} not found`, severity: 'critical' }] };\n    const anomalies: { ci: string; issue: string; severity: 'critical' | 'major' | 'minor' }[] = [];\n    for (const expected of baseline.items) {\n      const actual = this.actualState.get(expected.id);\n      if (!actual) {\n        anomalies.push({ ci: expected.id, issue: `CI ${expected.id} is missing`, severity: 'critical' });\n      } else {\n        if (actual.version !== expected.version) {\n          anomalies.push({ ci: expected.id, issue: `Version mismatch: expected ${expected.version}, actual ${actual.version}`, severity: 'major' });\n        }\n        if (actual.hash !== expected.hash) {\n          anomalies.push({ ci: expected.id, issue: `Content hash mismatch`, severity: 'critical' });\n        }\n        if (expected.status === 'released' && actual.status !== 'released') {\n          anomalies.push({ ci: expected.id, issue: `Expected released, actual ${actual.status}`, severity: 'major' });\n        }\n      }\n    }\n    for (const [id, ci] of this.actualState) {\n      if (!baseline.items.find(i => i.id === id)) {\n        anomalies.push({ ci: id, issue: `Unexpected CI '${ci.name}' not in baseline`, severity: 'minor' });\n      }\n    }\n    return { passed: anomalies.length === 0, anomalies };\n  }\n}\n\nconst auditor = new ConfigurationAuditor();\nauditor.recordBaseline('BL-REL-1.0', [\n  { id: 'SRC-001', name: 'auth.ts', version: '1.0', status: 'released', hash: 'abc123' },\n  { id: 'SRC-002', name: 'api.ts', version: '1.0', status: 'released', hash: 'def456' },\n]);\nauditor.recordActualState({ id: 'SRC-001', name: 'auth.ts', version: '1.0', status: 'released', hash: 'abc123' });\nauditor.recordActualState({ id: 'SRC-002', name: 'api.ts', version: '1.1', status: 'modified', hash: 'ghi789' });\nconsole.log(auditor.audit('BL-REL-1.0'));\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.b, {
          children: "Exercise 5:"
        }), " Design and implement a complete SCM system for a safety-critical medical device project (IEC 62304 compliant). Include CI identification, baseline management, change control with electronic signatures, and audit trail generation."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "interface ElectronicSignature { user: string; role: string; timestamp: Date; meaning: 'reviewed' | 'approved' | 'verified'; }\ninterface ComplianceRecord { ciId: string; action: string; signature: ElectronicSignature; details: string; }\n\nclass IEC62304SCM {\n  private records: ComplianceRecord[] = [];\n  private baselines: Map<string, string[]> = new Map();\n\n  public sign(ciId: string, action: string, user: string, role: string, meaning: ElectronicSignature['meaning'], details: string): ComplianceRecord {\n    const record: ComplianceRecord = {\n      ciId, action, signature: { user, role, timestamp: new Date(), meaning }, details,\n    };\n    this.records.push(record);\n    return record;\n  }\n\n  public createBaseline(name: string, ciIds: string[], approver: string): { name: string; ciIds: string[]; signature: ElectronicSignature } {\n    this.baselines.set(name, ciIds);\n    const signature: ElectronicSignature = { user: approver, role: 'SCM Lead', timestamp: new Date(), meaning: 'approved' };\n    this.records.push({ ciId: `BL-${name}`, action: 'baseline_created', signature, details: `Baseline ${name} with ${ciIds.length} CIs` });\n    return { name, ciIds, signature };\n  }\n\n  public traceRequirements(requirementIds: string[], ciIds: string[]): { untracedReqs: string[]; orphanedCIs: string[] } {\n    const untracedReqs = requirementIds.filter(r => !this.records.some(rec => rec.details.includes(r)));\n    const orphanedCIs = ciIds.filter(c => !this.records.some(rec => rec.ciId === c));\n    return { untracedReqs, orphanedCIs };\n  }\n\n  public generateAuditTrail(ciId?: string): string {\n    const relevant = ciId ? this.records.filter(r => r.ciId === ciId) : this.records;\n    return relevant.map(r =>\n      `[${r.signature.timestamp.toISOString()}] ${r.signature.user} (${r.signature.role}) ${r.action} on ${r.ciId}: ${r.details} [${r.signature.meaning}]`\n    ).join('\\n');\n  }\n}\n\nconst scm = new IEC62304SCM();\nscm.sign('SRC-001', 'check-in', 'Dr. Alice', 'Developer', 'reviewed', 'Initial implementation of cardiac monitor module');\nscm.sign('SRC-001', 'code-review', 'Dr. Bob', 'Senior Reviewer', 'reviewed', 'Logic verified against requirements REQ-101, REQ-102');\nscm.sign('SRC-001', 'approve', 'Dr. Smith', 'QA Lead', 'approved', 'All tests pass, coverage at 92%');\nscm.createBaseline('BL-VERSION-1.0', ['SRC-001', 'SRC-002', 'DOC-001'], 'Dr. Jones');\nconsole.log(scm.generateAuditTrail('SRC-001'));\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-configuration-management-tools",
      children: "TypeScript: Configuration Management Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Branch Strategy Validator ===\ninterface BranchRule {\n  pattern: string;\n  allowedParents: string[];\n  requiresPR: boolean;\n  requiresReview: boolean;\n}\nfunction validateBranchStrategy(branchName: string, rules: BranchRule[], parentBranch: string): { valid: boolean; violations: string[] } {\n  const violations: string[] = [];\n  const matchingRules = rules.filter(r => new RegExp(r.pattern).test(branchName));\n  for (const rule of matchingRules) {\n    if (!rule.allowedParents.includes(parentBranch)) violations.push(`Branch ${branchName} cannot be based on ${parentBranch}`);\n    if (rule.requiresPR) violations.push(`Branch ${branchName} requires a pull request`);\n    if (rule.requiresReview) violations.push(`Branch ${branchName} requires code review`);\n  }\n  return { valid: violations.length === 0, violations };\n}\nconst gitFlowRules: BranchRule[] = [\n  { pattern: \"^main$\", allowedParents: [\"release/*\"], requiresPR: true, requiresReview: true },\n  { pattern: \"^develop$\", allowedParents: [\"feature/*\", \"main\"], requiresPR: true, requiresReview: true },\n  { pattern: \"^feature/.*\", allowedParents: [\"develop\"], requiresPR: false, requiresReview: false },\n  { pattern: \"^release/.*\", allowedParents: [\"develop\"], requiresPR: true, requiresReview: true },\n  { pattern: \"^hotfix/.*\", allowedParents: [\"main\"], requiresPR: true, requiresReview: true },\n];\nconsole.log(validateBranchStrategy(\"feature/login\", gitFlowRules, \"develop\"));\n\n// === Merge Conflict Predictor ===\nfunction predictConflicts(changedFiles: string[], recentChanges: Record<string, string[]>): { highRisk: string[]; mediumRisk: string[] } {\n  const highRisk: string[] = [];\n  const mediumRisk: string[] = [];\n  for (const file of changedFiles) {\n    const recent = recentChanges[file] ?? [];\n    if (recent.length > 3) highRisk.push(file);\n    else if (recent.length > 0) mediumRisk.push(file);\n  }\n  return { highRisk, mediumRisk };\n}\nconsole.log(predictConflicts([\"auth.ts\", \"config.ts\", \"new.ts\"], { \"auth.ts\": [\"fix-login\", \"add-mfa\", \"update-session\", \"fix-expiry\"], \"config.ts\": [\"add-env\", \"update-config\"] }));\n\n// === Semantic Version Calculator ===\nfunction nextVersion(current: string, change: \"major\" | \"minor\" | \"patch\"): string {\n  const [major, minor, patch] = current.split(\".\").map(Number);\n  if (change === \"major\") return `${major + 1}.0.0`;\n  if (change === \"minor\") return `${major}.${minor + 1}.0`;\n  return `${major}.${minor}.${patch + 1}`;\n}\nconsole.log(nextVersion(\"1.2.3\", \"minor\"));\n\n// === Baseline Differ ===\ninterface ConfigItem { id: string; version: string; content: string; }\nfunction diffBaselines(a: ConfigItem[], b: ConfigItem[]): { added: string[]; removed: string[]; modified: string[] } {\n  const aMap = new Map(a.map(i => [i.id, i]));\n  const bMap = new Map(b.map(i => [i.id, i]));\n  const added = b.filter(i => !aMap.has(i.id)).map(i => i.id);\n  const removed = a.filter(i => !bMap.has(i.id)).map(i => i.id);\n  const modified = a.filter(i => { const bi = bMap.get(i.id); return bi && i.version !== bi.version; }).map(i => i.id);\n  return { added, removed, modified };\n}\nconsole.log(diffBaselines(\n  [{ id: \"config.json\", version: \"1.0\", content: \"{}\" }, { id: \"db.sql\", version: \"1.0\", content: \"CREATE\" }],\n  [{ id: \"config.json\", version: \"1.1\", content: '{\"debug\": true}' }, { id: \"docker-compose.yml\", version: \"1.0\", content: \"version:3\" }]\n));\n\n// === Version Control Simulator ===\ninterface Commit { id: string; message: string; timestamp: number; parent: string | null; changes: { file: string; diff: string }[]; }\nclass VCSimulator {\n  private commits: Commit[] = [];\n  private head: string | null = null;\n  commit(message: string, changes: { file: string; diff: string }[]): Commit {\n    const id = `c${this.commits.length + 1}`;\n    const commit: Commit = { id, message, timestamp: Date.now(), parent: this.head, changes };\n    this.commits.push(commit);\n    this.head = id;\n    return commit;\n  }\n  getHistory(): Commit[] {\n    const history: Commit[] = [];\n    let current = this.head;\n    while (current) { const commit = this.commits.find(c => c.id === current)!; history.push(commit); current = commit.parent; }\n    return history;\n  }\n}\nconst vcs = new VCSimulator();\nvcs.commit(\"Initial commit\", [{ file: \"main.ts\", diff: \"+initial\" }]);\nvcs.commit(\"Add feature\", [{ file: \"feature.ts\", diff: \"+new\" }]);\nconsole.log(vcs.getHistory().length);\n"
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