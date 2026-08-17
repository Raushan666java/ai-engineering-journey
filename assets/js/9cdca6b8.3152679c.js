"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[49287],{

/***/ 83321
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_devops_03_version_control_md_9cd_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-devops-03-version-control-md-9cd.json
const site_docs_courses_devops_03_version_control_md_9cd_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/devops/03-version-control","title":"Chapter 3: Version Control","description":"Prev: Advanced Git","source":"@site/docs/courses/devops/03-version-control.md","sourceDirName":"courses/devops","slug":"/devops/03-version-control","permalink":"/ai-engineering-journey/devops/03-version-control","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"03-version-control","slug":"/devops/03-version-control","title":"Chapter 3: Version Control","sidebar_label":"Chapter 3: Version Control","sidebar_position":5},"sidebar":"course-devops","previous":{"title":"Chapter 3: Build Tools","permalink":"/ai-engineering-journey/devops/03-build-tools"},"next":{"title":"Chapter 4: CI/CD","permalink":"/ai-engineering-journey/devops/04-cicd"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/devops/03-version-control.md


const frontMatter = {
	id: '03-version-control',
	slug: '/devops/03-version-control',
	title: 'Chapter 3: Version Control',
	sidebar_label: 'Chapter 3: Version Control',
	sidebar_position: 5
};
const contentTitle = 'Chapter 3: Version Control';

const assets = {

};



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
  "value": "What is Version Control?",
  "id": "what-is-version-control",
  "level": 3
}, {
  "value": "Centralized Version Control (CVCS)",
  "id": "centralized-version-control-cvcs",
  "level": 3
}, {
  "value": "Distributed Version Control (DVCS)",
  "id": "distributed-version-control-dvcs",
  "level": 3
}, {
  "value": "Git Workflow in DevOps",
  "id": "git-workflow-in-devops",
  "level": 3
}, {
  "value": "Branching Models",
  "id": "branching-models",
  "level": 3
}, {
  "value": "Monorepo vs Multi-Repo",
  "id": "monorepo-vs-multi-repo",
  "level": 3
}, {
  "value": "Tagging and Release Management",
  "id": "tagging-and-release-management",
  "level": 3
}, {
  "value": "Advanced Merge Strategies",
  "id": "advanced-merge-strategies",
  "level": 3
}, {
  "value": "Git Bisect for Root Cause Analysis",
  "id": "git-bisect-for-root-cause-analysis",
  "level": 3
}, {
  "value": "Signed Commits and Verification",
  "id": "signed-commits-and-verification",
  "level": 3
}, {
  "value": "VCS and CI/CD Integration",
  "id": "vcs-and-cicd-integration",
  "level": 3
}, {
  "value": "Code Review Practices",
  "id": "code-review-practices",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Version Management System",
  "id": "example-1-version-management-system",
  "level": 3
}, {
  "value": "Example 2: Git Hooks for CI/CD",
  "id": "example-2-git-hooks-for-cicd",
  "level": 3
}, {
  "value": "Example 3: Automated Release Notes from Git History",
  "id": "example-3-automated-release-notes-from-git-history",
  "level": 3
}, {
  "value": "Branch Strategy Compliance Checker",
  "id": "branch-strategy-compliance-checker",
  "level": 3
}, {
  "value": "Commit Graph Visualizer and Analysis Engine",
  "id": "commit-graph-visualizer-and-analysis-engine",
  "level": 3
}, {
  "value": "Semantic Version Calculator and Dependency Compatibility Resolver",
  "id": "semantic-version-calculator-and-dependency-compatibility-resolver",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
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
        id: "chapter-3-version-control",
        children: "Chapter 3: Version Control"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prev:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/02-git",
          children: "Advanced Git"
        }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/03-build-tools",
          children: "Build Tools"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the purpose and benefits of version control systems (VCS)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Differentiate between centralized (CVCS) and distributed (DVCS) version control."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Master Git for collaborative development in DevOps pipelines."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand Git branching models, tagging, and release management."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate version control with CI/CD and deployment automation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply best practices for monorepos versus multi-repo strategies."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "VCS Basics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tracking changes over time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every DevOps pipeline starts with version control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized vs Distributed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CVCS vs DVCS tradeoffs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DVCS suits distributed teams and CI/CD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Git Workflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clone, branch, commit, push, pull request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Master the core loop before advanced features"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Branching Models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GitFlow, trunk-based, feature branches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose based on release cadence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tagging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Named snapshots for releases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use semantic versioning for tags"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monorepo vs Multi-Repo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single repo vs many repos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consider tooling and team autonomy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VCS in CI/CD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Triggers, versioning, artifacts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every commit should be a potential release"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code Review"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pull request workflows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automate checks in PR pipeline"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Version Control] --> B[Centralized CVCS]\n    A --> C[Distributed DVCS]\n    B --> D[SVN, Perforce]\n    C --> E[Git, Mercurial]\n    E --> F[Git Workflow]\n    F --> G[Branching Models]\n    F --> H[Tagging]\n    F --> I[Pull Requests]\n    G --> J[CI/CD Integration]\n    H --> J\n    I --> J\n    J --> K[Release Automation]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-version-control",
      children: "What is Version Control?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later. It is the foundation of every DevOps practice:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collaboration:"
        }), " Multiple developers can work on the same codebase without overwriting each other's work."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "History:"
        }), " Every change is logged with who made it, when, and why."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Branching:"
        }), " Experiment with new features without affecting the stable codebase."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recovery:"
        }), " Revert to any previous state if something breaks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Audit trail:"
        }), " Know exactly what code is running in production and how it got there."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "centralized-version-control-cvcs",
      children: "Centralized Version Control (CVCS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In CVCS (e.g., SVN, Perforce, CVS):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A single central server stores all versioned files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clients check out files from the central repository"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Most operations require network access to the server"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages:"
      }), " Simple permission model, single source of truth, easier for non-technical users.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disadvantages:"
      }), " Single point of failure, requires network for all operations, slow diffs and history."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "distributed-version-control-dvcs",
      children: "Distributed Version Control (DVCS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In DVCS (e.g., Git, Mercurial):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every developer has a complete copy of the repository"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Most operations are local and fast"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The server is just one of many copies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages:"
      }), " Full history offline, fast operations, multiple backups, flexible workflows.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disadvantages:"
      }), " Steeper learning curve, large initial clone, merging complexity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "git-workflow-in-devops",
      children: "Git Workflow in DevOps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The core Git workflow maps directly to the DevOps pipeline:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph \"Development\"\n        A[Clone Repo] --> B[Create Branch]\n        B --> C[Make Changes]\n        C --> D[Stage Changes]\n        D --> E[Commit]\n    end\n    subgraph \"Integration\"\n        E --> F[Push Branch]\n        F --> G[Create PR]\n        G --> H[Code Review]\n        H --> I[Merge]\n    end\n    subgraph \"Delivery\"\n        I --> J[CI Pipeline Runs]\n        J --> K[Build & Test]\n        K --> L[Deploy]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "branching-models",
      children: "Branching Models"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Feature Branching:"
      }), " Every feature has its own branch. When complete, merge via PR."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pros: Isolation, code review, parallel work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cons: Long-lived branches cause integration pain"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GitFlow:"
      }), " Complex model with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "develop"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "feature"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "release"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hotfix"
      }), " branches."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pros: Clear structure for versioned releases, hotfix isolation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cons: Heavy ceremony, unsuitable for continuous delivery"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trunk-Based Development:"
      }), " All work on short-lived branches off ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), ", merged frequently."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pros: Minimal merge conflicts, CI/CD friendly, simple"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cons: Requires feature flags for incomplete work, discipline"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph \"Trunk-Based\"\n        T[main] --> T2[feature-branch]\n        T2 --> T\n        T --> T3[feature-branch-2]\n        T3 --> T\n    end\n    subgraph \"GitFlow\"\n        G[main] --> G2[develop]\n        G2 --> G3[feature/login]\n        G3 --> G2\n        G2 --> G4[release/v1.0]\n        G4 --> G\n        G --> G5[hotfix/1.0.1]\n        G5 --> G\n        G5 --> G2\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "monorepo-vs-multi-repo",
      children: "Monorepo vs Multi-Repo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Monorepo (single repository):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Google, Microsoft, Meta use single massive repos"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Atomic changes across teams"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shared build tooling and dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Challenges: Scale, tooling required (Bazel, Nx)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Multi-Repo (many repositories):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each service/microservice has its own repo"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Independent versioning and deployment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Team autonomy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Challenges: Cross-repo refactoring, dependency management"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hybrid (Polyrepo with workspaces):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Related projects in a monorepo, unrelated in separate repos"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Best of both worlds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git submodules or workspace tools (npm workspaces, yarn workspaces)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tagging-and-release-management",
      children: "Tagging and Release Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tags create named, immutable references to specific commits:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "git tag v1.0.0                    # Lightweight tag\ngit tag -a v1.0.0 -m \"Release 1.0.0\"  # Annotated tag\ngit tag -s v1.0.0 -m \"Signed release\"  # GPG-signed tag\ngit push origin v1.0.0            # Push tag\ngit push --tags                   # Push all tags\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Semantic Versioning (SemVer):"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MAJOR.MINOR.PATCH"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MAJOR: Breaking changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MINOR: New features, backward compatible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PATCH: Bug fixes, backward compatible"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced-merge-strategies",
      children: "Advanced Merge Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Choosing the right merge strategy affects commit history readability:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "History"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Command"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Regular merge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preserves full branch history with merge commits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature branches with multiple contributors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "git merge --no-ff feature"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Squash merge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collapses all branch commits into one"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-author features, cleanup history"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "git merge --squash feature"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rebase merge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear history, no merge commits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Personal branches, CI/CD branches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "git rebase main; git merge feature"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fast-forward"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear, only possible when no divergence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trunk-based, short-lived branches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "git merge --ff-only feature"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph \"Regular Merge\"\n        direction LR\n        A1[main] --> A2[a] --> A3[b] --> A4[Merge Commit]\n        B1[feature] --> B2[x] --> B3[y] --> A4\n    end\n    subgraph \"Squash Merge\"\n        direction LR\n        C1[main] --> C2[a] --> C3[b] --> C4[Squash: x+y]\n        D1[feature] --> D2[x] --> D3[y]\n    end\n    subgraph \"Rebase\"\n        direction LR\n        E1[main] --> E2[a] --> E3[b]\n        F1[feature] --> F2[x] --> F3[y]\n        E2 -.-> F2\n        E3 -.-> F3\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "git-bisect-for-root-cause-analysis",
      children: "Git Bisect for Root Cause Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "git bisect"
      }), " uses binary search to find the exact commit that introduced a bug:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Automate git bisect with a test script\ninterface BisectResult {\n  firstBadCommit: string;\n  suspectRange: { good: string; bad: string };\n  steps: number;\n}\n\nclass GitBisector {\n  async bisect(goodCommit: string, badCommit: string, testScript: () => Promise<boolean>): Promise<BisectResult> {\n    console.log(`Starting bisect: good=${goodCommit.slice(0,7)} bad=${badCommit.slice(0,7)}`);\n\n    // Simulate binary search across commits\n    const commits = this.getCommitRange(goodCommit, badCommit);\n    let low = 0;\n    let high = commits.length - 1;\n    let steps = 0;\n\n    while (low < high) {\n      steps++;\n      const mid = Math.floor((low + high) / 2);\n      const commit = commits[mid];\n      console.log(`Step ${steps}: checking ${commit.slice(0,7)}`);\n\n      if (testScript()) {\n        high = mid;\n      } else {\n        low = mid + 1;\n      }\n    }\n\n    return {\n      firstBadCommit: commits[low],\n      suspectRange: { good: commits[low - 1], bad: commits[low] },\n      steps,\n    };\n  }\n\n  private getCommitRange(good: string, bad: string): string[] {\n    // Simulate 100 commits in range for demo\n    return Array.from({ length: 100 }, (_, i) => `commit-${i}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "signed-commits-and-verification",
      children: "Signed Commits and Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GPG-signing commits provides cryptographic proof of authorship:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "# Configure GPG key\ngpg --full-generate-key\ngit config --global user.signingkey KEY_ID\ngit config --global commit.gpgsign true\n\n# Sign commits and tags\ngit commit -S -m \"feat: add payment integration\"\ngit tag -s v1.0.0 -m \"Release 1.0.0\"\n\n# Verify signatures\ngit log --show-signature\ngit verify-commit HEAD\ngit verify-tag v1.0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why signed commits matter in DevOps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Supply chain security:"
        }), " Prevent malicious commits from spoofed authors"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compliance:"
        }), " Meet SOC 2, FedRAMP audit trail requirements"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CI/CD trust:"
        }), " Only run pipelines for verified commits"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DCO (Developer Certificate of Origin):"
        }), " Automate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Signed-off-by"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git commit -s"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Developer] --> B[GPG Key]\n    B --> C[Sign Commit]\n    C --> D[Push to Remote]\n    D --> E[CI/CD Checks Signature]\n    E --> F{Valid?}\n    F -->|Yes| G[Run Pipeline]\n    F -->|No| H[Block & Notify]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vcs-and-cicd-integration",
      children: "VCS and CI/CD Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every version control event can trigger CI/CD actions:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CI/CD Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Push to feature branch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run tests on the feature"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Create pull request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run full test suite, code quality checks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Merge to main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build, test, deploy to staging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Create release tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build, deploy to production"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Push to hotfix branch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run regression tests, fast-track deployment"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Git tags in CI/CD:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "# Extract version from git tag in CI pipeline\nVERSION=$(git describe --tags --always)\necho \"Building version: $VERSION\"\ndocker build -t myapp:$VERSION .\ndocker push myapp:$VERSION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-review-practices",
      children: "Code Review Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Effective code review in version control:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Small PRs"
        }), " — Reviewers process small changes faster and catch more defects"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated checks first"
        }), " — Lint, style, tests run before human review"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Clear description"
        }), " — What changed and why"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review checklist"
        }), " — Consistency, correctness, coverage, security"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No blame"
        }), " — Review the code, not the author"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-version-management-system",
      children: "Example 1: Version Management System"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Simulating version control operations\ntype CommitId = string;\n\ninterface Commit {\n  id: CommitId;\n  message: string;\n  timestamp: Date;\n  author: string;\n  parent: CommitId | null;\n  files: Map<string, string>;\n}\n\nclass VersionControlSystem {\n  private commits: Map<CommitId, Commit> = new Map();\n  private branches: Map<string, CommitId> = new Map();\n  private tags: Map<string, CommitId> = new Map();\n  private currentBranch: string = 'main';\n  private commitCounter: number = 0;\n\n  constructor() {\n    this.branches.set('main', '');\n  }\n\n  commit(message: string, author: string, files: Map<string, string>): CommitId {\n    const id = `c${++this.commitCounter}`;\n    const parent = this.branches.get(this.currentBranch) || null;\n    const commit: Commit = {\n      id,\n      message,\n      timestamp: new Date(),\n      author,\n      parent,\n      files: new Map(files),\n    };\n    this.commits.set(id, commit);\n    this.branches.set(this.currentBranch, id);\n    return id;\n  }\n\n  createBranch(name: string): void {\n    const currentHead = this.branches.get(this.currentBranch);\n    if (currentHead) this.branches.set(name, currentHead);\n  }\n\n  checkout(branch: string): void {\n    if (!this.branches.has(branch)) throw new Error(`Branch ${branch} not found`);\n    this.currentBranch = branch;\n  }\n\n  createTag(name: string): void {\n    const head = this.branches.get(this.currentBranch);\n    if (head) this.tags.set(name, head);\n  }\n\n  merge(sourceBranch: string): boolean {\n    const sourceHead = this.branches.get(sourceBranch);\n    const targetHead = this.branches.get(this.currentBranch);\n    if (!sourceHead || !targetHead) return false;\n\n    // Fast-forward check\n    let cursor: CommitId | null = sourceHead;\n    while (cursor) {\n      if (cursor === targetHead) {\n        this.branches.set(this.currentBranch, sourceHead);\n        return true;\n      }\n      cursor = this.commits.get(cursor)?.parent ?? null;\n    }\n\n    // Three-way merge: create merge commit\n    const id = `c${++this.commitCounter}`;\n    const mergeCommit: Commit = {\n      id,\n      message: `Merge branch '${sourceBranch}' into ${this.currentBranch}`,\n      timestamp: new Date(),\n      author: 'system',\n      parent: targetHead,\n      files: new Map(this.commits.get(sourceHead)!.files),\n    };\n    this.commits.set(id, mergeCommit);\n    this.branches.set(this.currentBranch, id);\n    return true;\n  }\n\n  getLog(branch?: string): Commit[] {\n    const log: Commit[] = [];\n    let cursor = this.branches.get(branch || this.currentBranch);\n    while (cursor) {\n      const commit = this.commits.get(cursor);\n      if (!commit) break;\n      log.push(commit);\n      cursor = commit.parent;\n    }\n    return log;\n  }\n}\n\nconst vcs = new VersionControlSystem();\nvcs.commit('Initial commit', 'alice', new Map([['README.md', '# Project']]));\nvcs.createBranch('feature/x');\nvcs.checkout('feature/x');\nvcs.commit('Add feature X', 'bob', new Map([['README.md', '# Project\\n## Feature X'], ['src/index.ts', '// feature']]));\nvcs.checkout('main');\nvcs.merge('feature/x');\nvcs.createTag('v1.0.0');\n\nvcs.getLog().forEach(c => console.log(`${c.id}: ${c.message} (${c.author})`));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-git-hooks-for-cicd",
      children: "Example 2: Git Hooks for CI/CD"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// CI/CD integration with version control events\ninterface HookEvent {\n  type: 'pre-commit' | 'pre-push' | 'post-receive' | 'post-merge';\n  data: Record<string, string>;\n}\n\ninterface HookResult {\n  passed: boolean;\n  errors: string[];\n}\n\nclass CICDIntegration {\n  async handleEvent(event: HookEvent): Promise<HookResult> {\n    switch (event.type) {\n      case 'pre-commit':\n        return this.runPreCommitChecks();\n      case 'pre-push':\n        return this.runPrePushChecks();\n      case 'post-receive':\n        return this.triggerCIPipeline(event.data);\n      case 'post-merge':\n        return this.triggerDeployment(event.data);\n    }\n  }\n\n  private async runPreCommitChecks(): Promise<HookResult> {\n    const errors: string[] = [];\n    // Check for debug statements\n    // Run linter\n    // Run formatter\n    // Check for secrets\n    return { passed: errors.length === 0, errors };\n  }\n\n  private async runPrePushChecks(): Promise<HookResult> {\n    const errors: string[] = [];\n    // Run full test suite\n    // Check branch naming convention\n    // Verify commit messages follow conventional commits\n    return { passed: errors.length === 0, errors };\n  }\n\n  private async triggerCIPipeline(data: Record<string, string>): Promise<HookResult> {\n    const { branch, ref } = data;\n    console.log(`Triggering CI pipeline for ${branch} (${ref})`);\n    // Build, test, package\n    return { passed: true, errors: [] };\n  }\n\n  private async triggerDeployment(data: Record<string, string>): Promise<HookResult> {\n    const { branch } = data;\n    if (branch === 'main') {\n      console.log('Deploying to staging...');\n    }\n    if (branch.startsWith('refs/tags/')) {\n      const version = branch.replace('refs/tags/', '');\n      console.log(`Releasing version ${version} to production...`);\n    }\n    return { passed: true, errors: [] };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-automated-release-notes-from-git-history",
      children: "Example 3: Automated Release Notes from Git History"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Generate release notes from conventional commits\ninterface CommitLog {\n  hash: string;\n  message: string;\n}\n\ninterface ReleaseNotes {\n  version: string;\n  date: string;\n  features: string[];\n  fixes: string[];\n  breaking: string[];\n  other: string[];\n}\n\nclass ReleaseNotesGenerator {\n  generate(commits: CommitLog[], version: string): ReleaseNotes {\n    const notes: ReleaseNotes = {\n      version,\n      date: new Date().toISOString().split('T')[0],\n      features: [],\n      fixes: [],\n      breaking: [],\n      other: [],\n    };\n\n    for (const commit of commits) {\n      const message = commit.message;\n\n      if (message.startsWith('feat')) {\n        notes.features.push(message.replace(/^feat(\\(.+\\))?:\\s*/, ''));\n      } else if (message.startsWith('fix')) {\n        notes.fixes.push(message.replace(/^fix(\\(.+\\))?:\\s*/, ''));\n      } else if (message.startsWith('BREAKING') || message.includes('!')){\n        notes.breaking.push(message.replace(/^.+(:\\s*)?/, ''));\n      } else {\n        notes.other.push(message);\n      }\n    }\n\n    return notes;\n  }\n\n  formatMarkdown(notes: ReleaseNotes): string {\n    let md = `# v${notes.version} (${notes.date})\\n\\n`;\n\n    if (notes.breaking.length > 0) {\n      md += '## ?? Breaking Changes\\n\\n';\n      notes.breaking.forEach(b => md += `- ${b}\\n`);\n      md += '\\n';\n    }\n\n    if (notes.features.length > 0) {\n      md += '## ?? Features\\n\\n';\n      notes.features.forEach(f => md += `- ${f}\\n`);\n      md += '\\n';\n    }\n\n    if (notes.fixes.length > 0) {\n      md += '## ?? Bug Fixes\\n\\n';\n      notes.fixes.forEach(f => md += `- ${f}\\n`);\n      md += '\\n';\n    }\n\n    if (notes.other.length > 0) {\n      md += '## ?? Maintenance\\n\\n';\n      notes.other.forEach(o => md += `- ${o}\\n`);\n      md += '\\n';\n    }\n\n    return md;\n  }\n}\n\nconst commits: CommitLog[] = [\n  { hash: 'a1b2c3', message: 'feat(auth): add OAuth2 login support' },\n  { hash: 'd4e5f6', message: 'fix(db): resolve connection pool leak' },\n  { hash: 'g7h8i9', message: 'feat!: redesign API response format' },\n  { hash: 'j0k1l2', message: 'chore(deps): update lodash' },\n];\n\nconst gen = new ReleaseNotesGenerator();\nconst notes = gen.generate(commits, '2.0.0');\nconsole.log(gen.formatMarkdown(notes));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "branch-strategy-compliance-checker",
      children: "Branch Strategy Compliance Checker"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enforcing branch strategy policies across teams ensures consistent workflows. The following tool validates branch naming, merge patterns, and lifecycle compliance."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface BranchRecord {\n  name: string;\n  author: string;\n  created: Date;\n  lastCommit: Date;\n  commitCount: number;\n  aheadBy: number;\n  behindBy: number;\n}\n\ninterface BranchPolicy {\n  allowedPrefixes: string[];\n  maxAgeDays: number;\n  maxCommitsAhead: number;\n  requireRebase: boolean;\n}\n\ninterface ComplianceReport {\n  compliant: BranchRecord[];\n  violations: { branch: BranchRecord; reason: string }[];\n}\n\nclass BranchPolicyEnforcer {\n  check(branches: BranchRecord[], policy: BranchPolicy): ComplianceReport {\n    const violations: { branch: BranchRecord; reason: string }[] = [];\n    const compliant: BranchRecord[] = [];\n\n    for (const b of branches) {\n      const issues: string[] = [];\n      const hasValidPrefix = policy.allowedPrefixes.some(p => b.name.startsWith(p));\n      if (!hasValidPrefix) issues.push(`Name must start with: ${policy.allowedPrefixes.join(', ')}`);\n\n      const ageDays = (Date.now() - b.created.getTime()) / (1000 * 60 * 60 * 24);\n      if (ageDays > policy.maxAgeDays) issues.push(`Stale branch (${Math.round(ageDays)} days old, max ${policy.maxAgeDays})`);\n\n      if (b.behindBy > 0 && policy.requireRebase) issues.push(`Behind ${b.behindBy} commits, rebase required`);\n      if (b.aheadBy > policy.maxCommitsAhead) issues.push(`Too far ahead (${b.aheadBy} commits, max ${policy.maxCommitsAhead})`);\n\n      if (issues.length > 0) violations.push({ branch: b, reason: issues.join('; ') });\n      else compliant.push(b);\n    }\n\n    return { compliant, violations };\n  }\n}\n\nconst enforcer = new BranchPolicyEnforcer();\nconst policy: BranchPolicy = { allowedPrefixes: ['feature/', 'bugfix/', 'hotfix/'], maxAgeDays: 14, maxCommitsAhead: 20, requireRebase: true };\nconst branches: BranchRecord[] = [\n  { name: 'feature/user-auth', author: 'alice', created: new Date('2025-06-10'), lastCommit: new Date(), commitCount: 8, aheadBy: 5, behindBy: 0 },\n  { name: 'old-feature', author: 'bob', created: new Date('2025-01-01'), lastCommit: new Date('2025-03-01'), commitCount: 30, aheadBy: 25, behindBy: 10 },\n  { name: 'bugfix/payment-fix', author: 'charlie', created: new Date('2025-06-20'), lastCommit: new Date(), commitCount: 3, aheadBy: 2, behindBy: 15 },\n];\n\nconst report = enforcer.check(branches, policy);\nconsole.log(`Compliant: ${report.compliant.length}, Violations: ${report.violations.length}`);\nreport.violations.forEach(v => console.log(`  ${v.branch.name}: ${v.reason}`));\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What this demonstrates:"
      }), " Automated branch policy enforcement ensures consistent naming conventions, prevents stale branches, and enforces rebase workflows across development teams."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "commit-graph-visualizer-and-analysis-engine",
      children: "Commit Graph Visualizer and Analysis Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding commit graph topology reveals team collaboration patterns, identifies bottlenecks, and highlights integration issues."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// commit-graph.ts\n// Visualize and analyze commit graph topology\n\ninterface CommitNode {\n  hash: string;\n  author: string;\n  timestamp: Date;\n  message: string;\n  parents: string[];\n  branch?: string;\n}\n\ninterface GraphMetrics {\n  totalCommits: number;\n  uniqueAuthors: number;\n  averageBranchDepth: number;\n  mergeCommits: number;\n  mergeCommitPercent: number;\n  longestChain: number;\n  collabScore: number;\n}\n\nclass CommitGraphAnalyzer {\n  private nodes: Map<string, CommitNode> = new Map();\n\n  addNode(node: CommitNode): void {\n    this.nodes.set(node.hash, node);\n  }\n\n  computeMetrics(): GraphMetrics {\n    const totalCommits = this.nodes.size;\n    const uniqueAuthors = new Set([...this.nodes.values()].map(n => n.author)).size;\n    const mergeCommits = [...this.nodes.values()].filter(n => n.parents.length > 1).length;\n\n    let maxDepth = 0;\n    const depths = new Map<string, number>();\n    const computeDepth = (hash: string, visited: Set<string> = new Set()): number => {\n      if (depths.has(hash)) return depths.get(hash)!;\n      if (visited.has(hash)) return 0;\n      visited.add(hash);\n      const node = this.nodes.get(hash);\n      if (!node || node.parents.length === 0) return 0;\n      const depth = 1 + Math.max(...node.parents.map(p => computeDepth(p, visited)));\n      depths.set(hash, depth);\n      maxDepth = Math.max(maxDepth, depth);\n      return depth;\n    };\n\n    for (const hash of this.nodes.keys()) computeDepth(hash);\n\n    const authorsCount = uniqueAuthors;\n    const collabScore = totalCommits > 0\n      ? Math.min(100, Math.round((uniqueAuthors / Math.max(totalCommits, 1)) * 100 * 3))\n      : 0;\n\n    return {\n      totalCommits,\n      uniqueAuthors,\n      averageBranchDepth: depths.size > 0 ? Math.round([...depths.values()].reduce((s, d) => s + d, 0) / depths.size) : 0,\n      mergeCommits,\n      mergeCommitPercent: totalCommits > 0 ? Math.round((mergeCommits / totalCommits) * 100) : 0,\n      longestChain: maxDepth,\n      collabScore,\n    };\n  }\n\n  findIslands(): CommitNode[][] {\n    const visited = new Set<string>();\n    const islands: CommitNode[][] = [];\n\n    const dfs = (hash: string, island: CommitNode[]): void => {\n      if (visited.has(hash)) return;\n      visited.add(hash);\n      const node = this.nodes.get(hash);\n      if (!node) return;\n      island.push(node);\n      for (const parentHash of node.parents) dfs(parentHash, island);\n    };\n\n    for (const hash of this.nodes.keys()) {\n      if (!visited.has(hash)) {\n        const island: CommitNode[] = [];\n        dfs(hash, island);\n        if (island.length > 0) islands.push(island);\n      }\n    }\n\n    return islands;\n  }\n\n  findBusiestAuthors(): { author: string; commitCount: number; filesTouched: number }[] {\n    const stats = new Map<string, { commitCount: number }>();\n    for (const node of this.nodes.values()) {\n      const entry = stats.get(node.author) || { commitCount: 0 };\n      entry.commitCount++;\n      stats.set(node.author, entry);\n    }\n\n    return [...stats.entries()]\n      .map(([author, data]) => ({ author, ...data, filesTouched: Math.round(data.commitCount * 3.2) }))\n      .sort((a, b) => b.commitCount - a.commitCount);\n  }\n\n  generateGraph(metrics: GraphMetrics): string {\n    return `## Commit Graph Analysis\\n\\n` +\n      `**Total Commits:** ${metrics.totalCommits}\\n` +\n      `**Authors:** ${metrics.uniqueAuthors} | **Avg Depth:** ${metrics.averageBranchDepth}\\n` +\n      `**Merge Commits:** ${metrics.mergeCommits} (${metrics.mergeCommitPercent}%) | **Longest Chain:** ${metrics.longestChain}\\n` +\n      `**Collaboration Score:** ${metrics.collabScore}/100\\n\\n` +\n      `**Busiest Authors:**\\n` +\n      this.findBusiestAuthors().map(a =>\n        `- ${a.author}: ${a.commitCount} commits, ~${a.filesTouched} files`\n      ).join('\\n') +\n      `\\n\\n**Islands (disconnected histories):** ${this.findIslands().length}\\n` +\n      (metrics.mergeCommitPercent > 30 ? '?? High merge commit ratio — consider rebase workflow\\n' : '');\n  }\n}\n\nconst graph = new CommitGraphAnalyzer();\nconst authors = ['alice', 'bob', 'charlie', 'diana'];\nlet prevHash = 'root';\ngraph.addNode({ hash: prevHash, author: 'alice', timestamp: new Date('2025-01-01'), message: 'Initial commit', parents: [] });\n\nfor (let i = 0; i < 30; i++) {\n  const hash = `c${i + 1}`;\n  const author = authors[i % authors.length];\n  const isMerge = i > 5 && i % 7 === 0;\n  const parents = isMerge ? [prevHash, `c${i - 2}`] : [prevHash];\n  graph.addNode({ hash, author, timestamp: new Date(`2025-01-${(i % 28) + 1}`), message: `Commit ${i + 1}`, parents });\n  prevHash = hash;\n}\n\nconsole.log(graph.generateGraph(graph.computeMetrics()));\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What this demonstrates:"
      }), " Commit graph analysis reveals team collaboration patterns, identifies excessive merge commits, detects disconnected repository histories, and provides actionable metrics for workflow improvement."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "semantic-version-calculator-and-dependency-compatibility-resolver",
      children: "Semantic Version Calculator and Dependency Compatibility Resolver"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Managing semantic versioning across interdependent packages requires automatic compatibility analysis. The following tool resolves dependency version constraints and detects conflicts."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// semver-resolver.ts\n// Resolve semantic versioning constraints and detect conflicts\n\ntype VersionConstraint = '^' | '~' | '>=' | '=' | '>';\n\ninterface DepRequirement {\n  packageName: string;\n  constraint: VersionConstraint;\n  version: [number, number, number];\n}\n\ninterface PackageVersion {\n  name: string;\n  version: [number, number, number];\n  dependencies: DepRequirement[];\n}\n\ninterface Conflict {\n  packageA: string;\n  versionA: string;\n  packageB: string;\n  versionB: string;\n  resolution: string;\n}\n\nclass SemverResolver {\n  private parsed: Map<string, PackageVersion> = new Map();\n\n  addPackage(pkg: PackageVersion): void {\n    this.parsed.set(pkg.name, pkg);\n  }\n\n  satisfies(dep: DepRequirement, version: [number, number, number]): boolean {\n    const [maj, min, pat] = version;\n    switch (dep.constraint) {\n      case '^': return maj === dep.version[0] && (maj > dep.version[0] || min >= dep.version[1]);\n      case '~': return maj === dep.version[0] && min === dep.version[1] && pat >= dep.version[2];\n      case '>=': return maj >= dep.version[0] || (maj === dep.version[0] && min >= dep.version[1]) || (maj === dep.version[0] && min === dep.version[1] && pat >= dep.version[2]);\n      case '=': return maj === dep.version[0] && min === dep.version[1] && pat === dep.version[2];\n      case '>': return maj > dep.version[0] || (maj === dep.version[0] && min > dep.version[1]);\n      default: return false;\n    }\n  }\n\n  findConflicts(): Conflict[] {\n    const conflicts: Conflict[] = [];\n\n    for (const [, pkg] of this.parsed) {\n      for (const dep of pkg.dependencies) {\n        const provider = this.parsed.get(dep.packageName);\n        if (!provider) continue;\n\n        if (!this.satisfies(dep, provider.version)) {\n          conflicts.push({\n            packageA: pkg.name,\n            versionA: pkg.version.join('.'),\n            packageB: dep.packageName,\n            versionB: provider.version.join('.'),\n            resolution: `Upgrade ${dep.packageName} to ${dep.version.join('.')} or downgrade ${pkg.name}'s constraint`,\n          });\n        }\n      }\n    }\n\n    return conflicts;\n  }\n\n  resolveConflicts(conflicts: Conflict[]): Map<string, [number, number, number]> {\n    const resolutions = new Map<string, [number, number, number]>();\n\n    for (const conflict of conflicts) {\n      if (!resolutions.has(conflict.packageB)) {\n        const existing = this.parsed.get(conflict.packageB);\n        if (existing) resolutions.set(conflict.packageB, existing.version);\n      }\n    }\n\n    return resolutions;\n  }\n\n  formatVersion(v: [number, number, number]): string {\n    return `${v[0]}.${v[1]}.${v[2]}`;\n  }\n}\n\nconst resolver = new SemverResolver();\nresolver.addPackage({ name: 'lodash', version: [4, 17, 21], dependencies: [] });\nresolver.addPackage({ name: 'express', version: [4, 18, 2], dependencies: [\n  { packageName: 'lodash', constraint: '^', version: [4, 17, 0] },\n] });\nresolver.addPackage({ name: 'mongoose', version: [7, 0, 0], dependencies: [\n  { packageName: 'lodash', constraint: '^', version: [4, 17, 0] },\n] });\nresolver.addPackage({ name: 'legacy-app', version: [1, 0, 0], dependencies: [\n  { packageName: 'lodash', constraint: '~', version: [4, 16, 0] },\n] });\n\nconst conflicts = resolver.findConflicts();\nconsole.log('Conflicts:', conflicts.length > 0 ? conflicts.map(c => `${c.packageA} requires ${c.packageB} ${c.resolution}`).join('\\n') : 'None');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What this demonstrates:"
      }), " Semantic version constraint resolution enables automated dependency compatibility checking, conflict detection, and version upgrade planning across complex dependency trees."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Every commit should be a potential release."
        }), " Keep the main branch always deployable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use feature flags over long-lived branches."
        }), " Incomplete features behind flags integrate sooner."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tag every release."
        }), " Tags provide a permanent reference for each production deployment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automate versioning."
        }), " Derive version from git tags, not manual files."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write small, focused commits."
        }), " Each commit should represent one logical change."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Question 1: What differentiates DVCS from CVCS?"
      }), "**A)** DVCS uses a central server; CVCS does not", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** DVCS gives every developer the full repository history", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** CVCS is faster than DVCS", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** DVCS cannot handle binary files", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** DVCS gives every developer the full repository history</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
        children: [(0,jsx_runtime.jsx)(_components.summary, {
          children: "Question 2: Which branching model is best suited for continuous delivery?"
        }), "**A)** GitFlow", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Trunk-based development", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Forking workflow", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Release branching", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Trunk-based development</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Question 3: What does semantic versioning MAJOR.MINOR.PATCH represent?"
          }), "**A)** Breaking, new feature, bug fix", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Bug fix, new feature, breaking", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** New feature, bug fix, breaking", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Breaking, bug fix, new feature", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: A)** Breaking, new feature, bug fix</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Question 4: When should you use annotated tags over lightweight tags?"
            }), "**A)** Always", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** For release points requiring metadata", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** For temporary branches", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Never", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** For release points requiring metadata</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
              children: [(0,jsx_runtime.jsx)(_components.summary, {
                children: "Question 5: What is the main advantage of a monorepo?"
              }), "**A)** Team autonomy", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Independent versioning", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Atomic cross-team changes", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Faster builds", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: C)** Atomic cross-team changes</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "// build tools\n// cicd-infrastructure-automation implementation"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'build tools', data: { topic: 'cicd-infrastructure-automation' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "summary",
                children: "Summary"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Version control is the foundation of DevOps, tracking every change with full history and accountability."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "DVCS (Git) provides offline capabilities, faster operations, and flexible workflows over CVCS."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Branching models range from simple (trunk-based) to complex (GitFlow), chosen based on release cadence."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Tags create immutable named references, ideally using semantic versioning."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "CI/CD pipelines integrate with VCS through hooks and triggers for every event type."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Monorepos enable atomic changes; multi-repos provide team autonomy — choose based on context."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Code review via pull requests is essential for quality, with automated checks before human review."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "exercises",
                children: "Exercises"
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "review-questions",
                children: "Review Questions"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What are the advantages of DVCS over CVCS for DevOps teams?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Why is trunk-based development recommended for CI/CD?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How does semantic versioning differ from sequential numbering?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What events in Git can trigger CI/CD pipeline runs?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How do you create a signed annotated tag?"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "application-problems",
                children: "Application Problems"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Design a Git workflow for a team of 10 developers deploying 50 times per day."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Create a script that extracts the latest version from git tags and writes it to a file."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Configure a pre-commit hook that prevents committing AWS access keys."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Write a CI configuration that runs different pipelines based on branch patterns."
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["Extend the ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "VersionControlSystem"
                  }), " class to support signed commits: add a ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "sign(keyId)"
                  }), " method that appends a GPG signature to the commit metadata, implement ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "verifySignatures()"
                  }), " that returns only commits with valid signatures, and add ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "getSignedAuthors()"
                  }), " that lists unique authors whose commits are all signed. Demonstrate with a sequence of mixed signed and unsigned commits."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["Implement a ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "MergeStrategyEngine"
                  }), " class that accepts a list of source commits and a strategy type (", (0,jsx_runtime.jsx)(_components.code, {
                    children: "squash"
                  }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "rebase"
                  }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "merge-commit"
                  }), ") and produces the resulting history. Include: squash creates one commit with combined message, rebase replays commits sequentially onto target, merge-commit creates a single merge commit. Show all three outputs from the same input."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "challenge-problem",
                children: "Challenge Problem"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Design and implement a complete version control strategy for a microservices architecture with 15 services, 3 environments (dev/staging/prod), and daily deployments. Include: branch naming conventions, commit message format, release tagging strategy, CI/CD event mapping, rollback procedure using tags, monorepo vs multi-repo decision with justification, and automated changelog generation."
                }), "\n"]
              }), "\n"]
            })]
          })]
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