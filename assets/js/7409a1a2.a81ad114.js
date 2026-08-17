"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[60772],{

/***/ 81014
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_devops_04_continuous_integration_md_740_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-devops-04-continuous-integration-md-740.json
const site_docs_courses_devops_04_continuous_integration_md_740_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/devops/04-continuous-integration","title":"Chapter 4: Continuous Integration","description":"Prev: CI/CD","source":"@site/docs/courses/devops/04-continuous-integration.md","sourceDirName":"courses/devops","slug":"/devops/04-continuous-integration","permalink":"/ai-engineering-journey/devops/04-continuous-integration","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"04-continuous-integration","slug":"/devops/04-continuous-integration","title":"Chapter 4: Continuous Integration","sidebar_label":"Chapter 4: Continuous Integration","sidebar_position":7},"sidebar":"course-devops","previous":{"title":"Chapter 4: CI/CD","permalink":"/ai-engineering-journey/devops/04-cicd"},"next":{"title":"Chapter 5: Containerization","permalink":"/ai-engineering-journey/devops/05-containerization"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/devops/04-continuous-integration.md


const frontMatter = {
	id: '04-continuous-integration',
	slug: '/devops/04-continuous-integration',
	title: 'Chapter 4: Continuous Integration',
	sidebar_label: 'Chapter 4: Continuous Integration',
	sidebar_position: 7
};
const contentTitle = 'Chapter 4: Continuous Integration';

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
  "value": "Core Principles of CI",
  "id": "core-principles-of-ci",
  "level": 3
}, {
  "value": "The Test Pyramid",
  "id": "the-test-pyramid",
  "level": 3
}, {
  "value": "Test Execution Strategy",
  "id": "test-execution-strategy",
  "level": 3
}, {
  "value": "Code Quality Gates",
  "id": "code-quality-gates",
  "level": 3
}, {
  "value": "CI for Monorepos",
  "id": "ci-for-monorepos",
  "level": 3
}, {
  "value": "CI Reporting",
  "id": "ci-reporting",
  "level": 3
}, {
  "value": "Handling Flaky Tests",
  "id": "handling-flaky-tests",
  "level": 3
}, {
  "value": "CI Pipeline Optimization",
  "id": "ci-pipeline-optimization",
  "level": 3
}, {
  "value": "Artifact Management and Versioning",
  "id": "artifact-management-and-versioning",
  "level": 3
}, {
  "value": "Security Scanning in CI",
  "id": "security-scanning-in-ci",
  "level": 3
}, {
  "value": "CI Services and Infrastructure",
  "id": "ci-services-and-infrastructure",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Complete CI Pipeline Configuration",
  "id": "example-1-complete-ci-pipeline-configuration",
  "level": 3
}, {
  "value": "Example 2: Test Harness with Coverage Enforcement",
  "id": "example-2-test-harness-with-coverage-enforcement",
  "level": 3
}, {
  "value": "Example 3: CI Result Notifier",
  "id": "example-3-ci-result-notifier",
  "level": 3
}, {
  "value": "Parallel Stage Scheduler",
  "id": "parallel-stage-scheduler",
  "level": 3
}, {
  "value": "Test Flakiness Detector and Quarantine System",
  "id": "test-flakiness-detector-and-quarantine-system",
  "level": 3
}, {
  "value": "Build Failure Classifier and Triage Engine",
  "id": "build-failure-classifier-and-triage-engine",
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
        id: "chapter-4-continuous-integration",
        children: "Chapter 4: Continuous Integration"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prev:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/04-cicd",
          children: "CI/CD"
        }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/05-containerization",
          children: "Containerization"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the principles and practices of Continuous Integration."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set up automated build and test triggers on every code push."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design comprehensive test suites (unit, integration, end-to-end)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement code quality gates (linting, coverage, static analysis)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure CI for monorepos and microservices."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Master CI optimization, artifact handling, and reporting."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "CI Principles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrate early and often"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every push triggers automated verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Test Pyramid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unit > Integration > E2E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write many fast unit tests, few slow E2E tests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quality Gates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated checks before merge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block merges that reduce quality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CI for Monorepos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detect changed packages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only build and test affected code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Build Artifacts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable outputs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every CI run produces a versioned artifact"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CI Reporting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test results, coverage, timing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Make CI results visible to the whole team"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Push Code] --> B[CI Pipeline Triggers]\n    B --> C[Install Dependencies]\n    C --> D[Parallel Checks]\n    D --> E[Lint]\n    D --> F[Format Check]\n    D --> G[Type Check]\n    D --> H[Unit Tests]\n    E & F & G & H --> I[Build]\n    I --> J[Integration Tests]\n    J --> K[Security Scan]\n    K --> L[Generate Reports]\n    L --> M[Update Status]\n    M --> N[Notify Team]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "core-principles-of-ci",
      children: "Core Principles of CI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Continuous Integration is built on five essential practices:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintain a single source repository."
        }), " Every team member commits to the same main branch frequently."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automate the build."
        }), " Scripts should compile, package, and verify without manual intervention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Make the build self-testing."
        }), " Automated tests should validate correctness after every build."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Everyone commits to main every day."
        }), " Short-lived branches reduce integration complexity."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keep the build fast."
        }), " Feedback in minutes, not hours."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-test-pyramid",
      children: "The Test Pyramid"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The test pyramid guides where to invest testing effort:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Test Pyramid\"\n        A[E2E Tests<br/>Few, Slow, Expensive]\n        B[Integration Tests<br/>Some, Medium]\n        C[Unit Tests<br/>Many, Fast, Cheap]\n    end\n    A --> B --> C\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Unit tests (70-80%):"
      }), " Test individual functions, methods, and classes in isolation. Mock external dependencies. Fast execution (milliseconds each)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration tests (15-20%):"
      }), " Test interactions between components — database queries, API endpoints, service-to-service communication. Verify real behavior of integrated parts."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "E2E tests (5-10%):"
      }), " Test complete user workflows from UI to database. Slow and brittle. Cover critical paths only."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-execution-strategy",
      children: "Test Execution Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fast feedback loops:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unit tests run on every commit (pre-push hook)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration tests run after unit tests pass"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "E2E tests run on merge to main or scheduled nightly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test parallelization:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Split test files across multiple CI runners"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use test sharding (Jest ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--shard"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run independent test suites in parallel"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-quality-gates",
      children: "Code Quality Gates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quality gates prevent low-quality code from being merged:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Gate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Enforcement"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ESLint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PR must pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Formatting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prettier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PR must pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type checking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TypeScript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PR must pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unit test coverage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jest/istanbul"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum 80%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integration tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supertest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PR must pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CodeQL, Snyk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No critical vulnerabilities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bundle size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "size-limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must not exceed threshold"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency audit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "npm audit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No known vulnerabilities"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ci-for-monorepos",
      children: "CI for Monorepos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Monorepos require smart CI that only builds changed packages:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach 1: Path filtering:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "jobs:\n  api:\n    on:\n      push:\n        paths: ['packages/api/**']\n  web:\n    on:\n      push:\n        paths: ['packages/web/**']\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach 2: Dependency graph analysis:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "# Determine affected packages\nnpx nx affected:test --base=main\nnpx nx affected:build --base=main\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach 3: Manual configuration with check scripts:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function getChangedPackages(): string[] {\n  // Get changed files from git diff\n  // Map files to packages\n  // Return affected package names\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ci-reporting",
      children: "CI Reporting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Effective CI provides visibility into build health:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status badges:"
      }), " Show latest build status in README\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test reports:"
      }), " HTML or XML reports with pass/fail details\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Coverage reports:"
      }), " Line, branch, function coverage with trends\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Performance charts:"
      }), " Build duration trends over time\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Notifications:"
      }), " Slack/email/Discord on build failures"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example CI report structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Build #1234 - main - abc1234\nStatus: ? Passed\nDuration: 2m 34s\nTests: 247 passed, 3 skipped, 0 failed\nCoverage: 87.3% (+0.2%)\nLint: 0 errors, 0 warnings\nDependencies: up to date\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "handling-flaky-tests",
      children: "Handling Flaky Tests"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Flaky tests pass or fail nondeterministically. Strategies:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quarantine:"
        }), " Move flaky tests to a separate suite, don't block the build"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Retry:"
        }), " Retry failed tests once (but flag them for investigation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fix or delete:"
        }), " Either fix the root cause or remove the test"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Isolation:"
        }), " Ensure tests don't share state or rely on timing"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Flaky test detection:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function detectFlakyTests(testResults: TestResult[][]): string[] {\n  const flaky: string[] = [];\n  // A test is flaky if it passes sometimes and fails sometimes\n  // across multiple runs on the same code\n  return flaky;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ci-pipeline-optimization",
      children: "CI Pipeline Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Optimizing CI pipelines reduces feedback time and infrastructure costs:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Caching strategies:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# npm cache with fallback keys\n- name: Cache node_modules\n  uses: actions/cache@v4\n  with:\n    path: ~/.npm\n    key: npm-${{ hashFiles('package-lock.json') }}-${{ runner.os }}\n    restore-keys: |\n      npm-${{ runner.os }}-\n      npm-\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parallel execution patterns:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Matrix builds for parallel execution across environments\njobs:\n  test:\n    strategy:\n      matrix:\n        node: [18, 20, 22]\n        os: [ubuntu-latest, windows-latest]\n    steps:\n      - run: npm test\n\n  lint:\n    steps:\n      - run: npm run lint\n\n  security:\n    steps:\n      - run: npm audit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Conditional execution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function optimizePipeline(steps: PipelineStep[]): PipelineStep[] {\n  // Skip expensive steps when only docs change\n  if (changedFiles.every(f => f.endsWith('.md'))) {\n    return steps.filter(s => !s.expensive);\n  }\n  // Run all steps for production branch\n  return steps;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "artifact-management-and-versioning",
      children: "Artifact Management and Versioning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every CI run should produce versioned, immutable artifacts:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Artifact Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Storage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Retention"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Build output"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3/GCS/Azure Blob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-90 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment packages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Docker images"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable tags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Containerized deployments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Test reports"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI platform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audit trail"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Coverage reports"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Codecov/SonarQube"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-project history"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quality trending"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SBOM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3 + registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indefinite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supply chain compliance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Artifact {\n  name: string;\n  version: string;\n  sha256: string;\n  type: 'container' | 'binary' | 'report' | 'sbom';\n  metadata: Record<string, string>;\n}\n\nclass ArtifactManager {\n  private artifacts: Artifact[] = [];\n\n  createArtifact(name: string, version: string, type: Artifact['type']): Artifact {\n    const artifact: Artifact = {\n      name,\n      version,\n      sha256: crypto.createHash('sha256').update(`${name}@${version}`).digest('hex'),\n      type,\n      metadata: {\n        buildNumber: process.env.CI_BUILD_NUMBER || 'local',\n        commitSha: process.env.GITHUB_SHA || 'unknown',\n        builtAt: new Date().toISOString(),\n      },\n    };\n    this.artifacts.push(artifact);\n    return artifact;\n  }\n\n  generateBom(): string {\n    return this.artifacts.map(a =>\n      `${a.sha256}  ${a.name}:${a.version} (${a.type})`\n    ).join('\\n');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "security-scanning-in-ci",
      children: "Security Scanning in CI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Integrating security tools into CI catches vulnerabilities before deployment:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Code Push] --> B[SAST]\n    A --> C[SCA]\n    A --> D[Secret Scan]\n    A --> E[Container Scan]\n    B --> F{Actions Fail?}\n    C --> F\n    D --> F\n    E --> F\n    F -->|No| G[Build & Deploy]\n    F -->|Critical/High| H[Block Pipeline]\n    F -->|Medium/Low| I[Create Ticket]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SAST (Static Application Security Testing):"
      }), " Analyzes source code for security vulnerabilities (SQL injection, XSS, command injection) without executing the code."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SCA (Software Composition Analysis):"
      }), " Scans dependencies for known vulnerabilities (npm audit, Snyk, Dependabot)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Secret detection:"
      }), " Scans for hardcoded credentials, API keys, and tokens (GitHub secret scanning, TruffleHog)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ScanResult {\n  type: 'sast' | 'sca' | 'secret' | 'container';\n  severity: 'critical' | 'high' | 'medium' | 'low';\n  description: string;\n  location: string;\n}\n\nclass SecurityGate {\n  evaluate(results: ScanResult[]): { passed: boolean; blocked: ScanResult[] } {\n    const blocked = results.filter(r =>\n      r.severity === 'critical' || r.severity === 'high'\n    );\n    return {\n      passed: blocked.length === 0,\n      blocked,\n    };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ci-services-and-infrastructure",
      children: "CI Services and Infrastructure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Self-hosted runners:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full control over environment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No per-minute costs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintenance overhead"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Suitable for compliance requirements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cloud-hosted runners:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub Actions, GitLab CI, Circle CI, Jenkins Cloud"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zero maintenance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scale automatically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pay per usage"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Containerized CI:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CI runs in containers matching production environment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistent behavior across local dev and CI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Easy dependency management"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-complete-ci-pipeline-configuration",
      children: "Example 1: Complete CI Pipeline Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface CITestConfig {\n  nodeVersion: string;\n  maxWorkers: number;\n  coverageThreshold: number;\n  lintEnabled: boolean;\n  integrationTests: boolean;\n  e2eTests: boolean;\n  cacheDependencies: boolean;\n}\n\nclass CIPipelineConfig {\n  private config: CITestConfig;\n\n  constructor(config: CITestConfig) {\n    this.config = config;\n  }\n\n  generateGitHubActions(): string {\n    return `name: CI Pipeline\n\non:\n  push:\n    branches: [main, develop]\n  pull_request:\n    branches: [main]\n\njobs:\n  ci:\n    runs-on: ubuntu-latest\n    strategy:\n      matrix:\n        node: [${this.config.nodeVersion}]\n\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: \\${{ matrix.node }}\n      ${this.generateCacheStep()}\n      - run: npm ci\n      ${this.generateLintStep()}\n      - run: npm run typecheck\n      - run: npm test -- --maxWorkers=${this.config.maxWorkers} --coverage --coverageThreshold='{\"global\":{\"lines\":${this.config.coverageThreshold}}}'\n      ${this.generateIntegrationTestStep()}\n      - run: npm run build\n      - uses: actions/upload-artifact@v4\n        with:\n          name: build-\\${{ github.sha }}\n          path: dist/\n      - name: Upload coverage\n        uses: codecov/codecov-action@v4\n        with:\n          token: \\${{ secrets.CODECOV_TOKEN }}\n`;\n  }\n\n  private generateCacheStep(): string {\n    if (!this.config.cacheDependencies) return '';\n    return `\n      - name: Cache node_modules\n        uses: actions/cache@v3\n        with:\n          path: ~/.npm\n          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}\n          restore-keys: |\n            ${{ runner.os }}-node-`;\n  }\n\n  private generateLintStep(): string {\n    if (!this.config.lintEnabled) return '';\n    return `- run: npm run lint`;\n  }\n\n  private generateIntegrationTestStep(): string {\n    if (!this.config.integrationTests) return '';\n    return `- run: npm run test:integration`;\n  }\n}\n\nconst config = new CIPipelineConfig({\n  nodeVersion: '20',\n  maxWorkers: 4,\n  coverageThreshold: 80,\n  lintEnabled: true,\n  integrationTests: true,\n  e2eTests: false,\n  cacheDependencies: true,\n});\n\nconsole.log(config.generateGitHubActions());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-test-harness-with-coverage-enforcement",
      children: "Example 2: Test Harness with Coverage Enforcement"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface TestCase {\n  name: string;\n  fn: () => Promise<boolean>;\n  category: 'unit' | 'integration' | 'e2e';\n  timeout: number;\n}\n\ninterface TestResult {\n  name: string;\n  passed: boolean;\n  duration: number;\n  error?: string;\n}\n\ninterface CoverageReport {\n  totalLines: number;\n  coveredLines: number;\n  percentage: number;\n  thresholds: Record<string, number>;\n}\n\nclass TestRunner {\n  private tests: TestCase[] = [];\n  private results: TestResult[] = [];\n  private coverage: CoverageReport = { totalLines: 0, coveredLines: 0, percentage: 0, thresholds: {} };\n\n  addTest(test: TestCase): void {\n    this.tests.push(test);\n  }\n\n  setCoverageReport(report: CoverageReport): void {\n    this.coverage = report;\n  }\n\n  async run(): Promise<boolean> {\n    console.log('?? Starting test execution...\\n');\n    let allPassed = true;\n    let passed = 0;\n    let failed = 0;\n\n    for (const test of this.tests) {\n      const start = Date.now();\n      try {\n        const result = await Promise.race([\n          test.fn(),\n          new Promise<boolean>((_, reject) =>\n            setTimeout(() => reject(new Error('Test timeout')), test.timeout)\n          ),\n        ]);\n        const duration = Date.now() - start;\n        this.results.push({ name: test.name, passed: result, duration });\n        if (result) {\n          passed++;\n          console.log(`  ? ${test.name} (${duration}ms)`);\n        } else {\n          allPassed = false;\n          failed++;\n          console.log(`  ? ${test.name} (${duration}ms)`);\n        }\n      } catch (error) {\n        allPassed = false;\n        failed++;\n        this.results.push({ name: test.name, passed: false, duration: Date.now() - start, error: String(error) });\n        console.log(`  ? ${test.name} - ${error}`);\n      }\n    }\n\n    this.printSummary(passed, failed);\n\n    // Check coverage threshold\n    if (this.coverage.percentage > 0) {\n      const threshold = this.coverage.thresholds.lines || 80;\n      if (this.coverage.percentage < threshold) {\n        console.log(`? Coverage ${this.coverage.percentage}% below threshold ${threshold}%`);\n        allPassed = false;\n      } else {\n        console.log(`? Coverage ${this.coverage.percentage}% meets threshold ${threshold}%`);\n      }\n    }\n\n    return allPassed;\n  }\n\n  private printSummary(passed: number, failed: number): void {\n    const total = this.tests.length;\n    console.log(`\\n?? Results: ${passed}/${total} passed`);\n    if (failed > 0) console.log(`? ${failed} tests failed`);\n    console.log(`??  Total: ${this.results.reduce((s, r) => s + r.duration, 0)}ms`);\n  }\n}\n\nconst runner = new TestRunner();\n\nrunner.addTest({\n  name: 'UserService.createUser should return user object',\n  fn: async () => true,\n  category: 'unit',\n  timeout: 5000,\n});\n\nrunner.addTest({\n  name: 'Database connection should execute query',\n  fn: async () => true,\n  category: 'integration',\n  timeout: 10000,\n});\n\nrunner.setCoverageReport({\n  totalLines: 1000,\n  coveredLines: 873,\n  percentage: 87.3,\n  thresholds: { lines: 80, branches: 75, functions: 80 },\n});\n\nrunner.run();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-ci-result-notifier",
      children: "Example 3: CI Result Notifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface BuildResult {\n  buildNumber: number;\n  branch: string;\n  commitSha: string;\n  status: 'passed' | 'failed' | 'running';\n  duration: number;\n  testResults: { passed: number; failed: number; skipped: number };\n  coverage: number;\n  author: string;\n}\n\nclass CINotifier {\n  async notify(results: BuildResult): Promise<void> {\n    const message = this.formatMessage(results);\n\n    // Post to Slack\n    await this.postToSlack(message);\n\n    // Update GitHub commit status\n    await this.updateCommitStatus(results);\n\n    // Send email on failure\n    if (results.status === 'failed') {\n      await this.sendFailureEmail(results);\n    }\n  }\n\n  private formatMessage(result: BuildResult): string {\n    const statusEmoji = result.status === 'passed' ? '?' : '?';\n    const duration = (result.duration / 1000).toFixed(1);\n\n    return [\n      `${statusEmoji} Build #${result.buildNumber} ${result.status}`,\n      `Branch: ${result.branch} (${result.commitSha.slice(0, 7)})`,\n      `Duration: ${duration}s`,\n      `Tests: ${result.testResults.passed} passed, ${result.testResults.failed} failed, ${result.testResults.skipped} skipped`,\n      `Coverage: ${result.coverage}%`,\n      `Author: ${result.author}`,\n    ].join('\\n');\n  }\n\n  private async postToSlack(message: string): Promise<void> {\n    // Mock Slack webhook call\n    console.log('?? Slack notification sent');\n    console.log(message);\n  }\n\n  private async updateCommitStatus(result: BuildResult): Promise<void> {\n    // Mock GitHub API call\n    console.log(`???  Commit status updated: ${result.commitSha} = ${result.status}`);\n  }\n\n  private async sendFailureEmail(result: BuildResult): Promise<void> {\n    // Mock email sending\n    console.log(`?? Failure email sent to ${result.author}`);\n  }\n}\n\nconst notifier = new CINotifier();\nnotifier.notify({\n  buildNumber: 1234,\n  branch: 'main',\n  commitSha: 'abc123def456',\n  status: 'failed',\n  duration: 154000,\n  testResults: { passed: 243, failed: 4, skipped: 3 },\n  coverage: 82.1,\n  author: 'dev@example.com',\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "parallel-stage-scheduler",
      children: "Parallel Stage Scheduler"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Efficient parallel execution in CI/CD pipelines reduces overall build time. The following scheduler models stage dependencies and computes optimal parallel schedules."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Stage {\n  id: string;\n  duration: number; // seconds\n  dependencies: string[];\n}\n\ninterface Schedule {\n  order: string[][]; // parallel stages at each level\n  totalDuration: number;\n  criticalPath: string[];\n}\n\nclass ParallelStageScheduler {\n  schedule(stages: Stage[]): Schedule {\n    const depMap = new Map<string, string[]>();\n    const durationMap = new Map<string, number>();\n    stages.forEach(s => { depMap.set(s.id, s.dependencies); durationMap.set(s.id, s.duration); });\n\n    const levels: string[][] = [];\n    const scheduled = new Set<string>();\n\n    while (scheduled.size < stages.length) {\n      const ready = stages.filter(s => !scheduled.has(s.id) && s.dependencies.every(d => scheduled.has(d))).map(s => s.id);\n      if (ready.length === 0) break;\n      levels.push(ready);\n      ready.forEach(r => scheduled.add(r));\n    }\n\n    const criticalPath = this.findCriticalPath(stages, depMap, durationMap);\n    const totalDuration = criticalPath.reduce((s, id) => s + (durationMap.get(id) || 0), 0);\n\n    return { order: levels, totalDuration, criticalPath };\n  }\n\n  private findCriticalPath(stages: Stage[], depMap: Map<string, string[]>, durationMap: Map<string, number>): string[] {\n    const earliestStart = new Map<string, number>();\n    const parents = new Map<string, string>();\n\n    for (const stage of stages) {\n      let maxStart = 0;\n      let maxParent = '';\n      for (const dep of stage.dependencies) {\n        const depEnd = (earliestStart.get(dep) || 0) + (durationMap.get(dep) || 0);\n        if (depEnd > maxStart) { maxStart = depEnd; maxParent = dep; }\n      }\n      earliestStart.set(stage.id, maxStart);\n      if (maxParent) parents.set(stage.id, maxParent);\n    }\n\n    let lastStage = '';\n    let lastEnd = 0;\n    for (const stage of stages) {\n      const end = (earliestStart.get(stage.id) || 0) + (durationMap.get(stage.id) || 0);\n      if (end > lastEnd) { lastEnd = end; lastStage = stage.id; }\n    }\n\n    const path: string[] = [];\n    let current = lastStage;\n    while (current) {\n      path.unshift(current);\n      current = parents.get(current) || '';\n    }\n    return path;\n  }\n}\n\nconst scheduler = new ParallelStageScheduler();\nconst stages: Stage[] = [\n  { id: 'lint', duration: 30, dependencies: [] },\n  { id: 'unit', duration: 45, dependencies: [] },\n  { id: 'build', duration: 60, dependencies: ['lint'] },\n  { id: 'integration', duration: 120, dependencies: ['unit', 'build'] },\n  { id: 'e2e', duration: 180, dependencies: ['integration'] },\n  { id: 'deploy', duration: 30, dependencies: ['e2e'] },\n];\n\nconst schedule = scheduler.schedule(stages);\nconsole.log('Parallel levels:', schedule.order.map(l => `[${l.join(', ')}]`).join(' -> '));\nconsole.log('Critical path:', schedule.criticalPath.join(' -> '));\nconsole.log('Total duration:', schedule.totalDuration, 's');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What this demonstrates:"
      }), " Parallel stage scheduling minimizes CI/CD pipeline wall-clock time by identifying independent stages that can execute concurrently."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-flakiness-detector-and-quarantine-system",
      children: "Test Flakiness Detector and Quarantine System"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Flaky tests erode trust in CI pipelines. The following tool tracks test results across runs, identifies flaky tests using statistical analysis, and automatically quarantines unreliable tests."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// flakiness-detector.ts\n// Detect and quarantine flaky CI tests\n\ninterface TestRun {\n  testName: string;\n  passed: boolean;\n  durationMs: number;\n  timestamp: Date;\n  runnerId: string;\n}\n\ninterface FlakinessScore {\n  testName: string;\n  passRate: number;\n  runCount: number;\n  durationVariance: number;\n  score: number;\n  verdict: 'stable' | 'suspect' | 'flaky' | 'quarantine';\n}\n\nclass FlakinessDetector {\n  private history: TestRun[] = [];\n\n  record(run: TestRun): void {\n    this.history.push(run);\n  }\n\n  analyze(window: number = 20): FlakinessScore[] {\n    const byTest = new Map<string, TestRun[]>();\n    for (const run of this.history) {\n      if (!byTest.has(run.testName)) byTest.set(run.testName, []);\n      byTest.get(run.testName)!.push(run);\n    }\n\n    const scores: FlakinessScore[] = [];\n    for (const [testName, runs] of byTest) {\n      const recent = runs.slice(-window);\n      const passCount = recent.filter(r => r.passed).length;\n      const passRate = recent.length > 0 ? passCount / recent.length : 1;\n      const avgDuration = recent.reduce((s, r) => s + r.durationMs, 0) / Math.max(recent.length, 1);\n      const variance = recent.length > 1\n        ? Math.sqrt(recent.reduce((s, r) => s + (r.durationMs - avgDuration) ** 2, 0) / recent.length) / avgDuration\n        : 0;\n\n      const flakinessPenalty = 1 - passRate;\n      const durationPenalty = Math.min(variance, 1) * 0.3;\n      const score = flakinessPenalty + durationPenalty;\n\n      let verdict: 'stable' | 'suspect' | 'flaky' | 'quarantine';\n      if (score < 0.05 && runs.length >= 10) verdict = 'stable';\n      else if (score < 0.2) verdict = 'suspect';\n      else if (score < 0.4) verdict = 'flaky';\n      else verdict = 'quarantine';\n\n      scores.push({ testName, passRate, runCount: runs.length, durationVariance: Math.round(variance * 100) / 100, score: Math.round(score * 100) / 100, verdict });\n    }\n\n    return scores.sort((a, b) => b.score - a.score);\n  }\n\n  quarantine(scores: FlakinessScore[]): FlakinessScore[] {\n    return scores.filter(s => s.verdict === 'quarantine' || s.verdict === 'flaky');\n  }\n\n  generateReport(scores: FlakinessScore[]): string {\n    const stable = scores.filter(s => s.verdict === 'stable').length;\n    const flaky = scores.filter(s => s.verdict === 'flaky' || s.verdict === 'quarantine').length;\n\n    return `## Flakiness Analysis Report\\n\\n` +\n      `**Tests analyzed:** ${scores.length} | **Stable:** ${stable} | **Flaky/Quarantined:** ${flaky}\\n\\n` +\n      `| Test | Pass Rate | Variance | Score | Verdict |\\n` +\n      `|------|-----------|----------|-------|---------|\\n` +\n      scores.map(s => `| ${s.testName} | ${(s.passRate * 100).toFixed(0)}% | ${s.durationVariance} | ${s.score} | ${s.verdict} |`).join('\\n');\n  }\n}\n\nconst detector = new FlakinessDetector();\nconst tests = ['UserService.getUser', 'AuthService.login', 'PaymentService.process', 'SearchService.query'];\ntests.forEach((test, ti) => {\n  for (let i = 0; i < 25; i++) {\n    const isFlaky = ti === 0 || ti === 2;\n    detector.record({\n      testName: test, runnerId: `runner-${i % 3}`,\n      passed: isFlaky ? Math.random() > 0.4 : Math.random() > 0.02,\n      durationMs: isFlaky ? 100 + Math.random() * 900 : 50 + Math.random() * 50,\n      timestamp: new Date(),\n    });\n  }\n});\n\nconst scores = detector.analyze();\nconsole.log(detector.generateReport(scores));\nconsole.log('\\nQuarantined:', detector.quarantine(scores).map(s => s.testName));\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What this demonstrates:"
      }), " Statistical flakiness detection identifies unreliable tests, quantifies their instability through pass rate and duration variance, and enables automatic quarantine to restore CI pipeline trust."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "build-failure-classifier-and-triage-engine",
      children: "Build Failure Classifier and Triage Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quickly classifying build failures speeds up developer resolution time. The following tool categorizes failures by root cause and routes them to the appropriate team."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// build-failure-classifier.ts\n// Classify and triage CI build failures\n\ninterface BuildFailure {\n  id: string;\n  stage: string;\n  errorMessage: string;\n  exitCode: number;\n  commitSha: string;\n  author: string;\n  timestamp: Date;\n  logSnippet: string;\n}\n\ninterface FailureClassification {\n  failure: BuildFailure;\n  category: 'compilation' | 'test' | 'dependency' | 'infrastructure' | 'config' | 'lint' | 'unknown';\n  confidence: number;\n  suggestedTeam: string;\n  priority: 'p0' | 'p1' | 'p2';\n}\n\nclass FailureClassifier {\n  private patterns: { regex: RegExp; category: FailureClassification['category']; team: string; priority: 'p0' | 'p1' | 'p2' }[] = [\n    { regex: /TS\\d{4}|TypeError|cannot find module|TS2304/, category: 'compilation', team: 'platform', priority: 'p1' },\n    { regex: /FAIL|AssertionError|expected.*to.*equal|test.*failed/i, category: 'test', team: 'dev', priority: 'p1' },\n    { regex: /npm ERR|could not resolve|cannot find package|404.*Not Found/i, category: 'dependency', team: 'platform', priority: 'p2' },\n    { regex: /Cannot connect|ECONNREFUSED|ETIMEOUT|ENOTFOUND/, category: 'infrastructure', team: 'infra', priority: 'p0' },\n    { regex: /ESLint|prettier|formatting|lint/i, category: 'lint', team: 'dev', priority: 'p2' },\n    { regex: /Missing(.*)config|invalid(.*)config|yaml.*invalid/i, category: 'config', team: 'platform', priority: 'p1' },\n  ];\n\n  classify(failure: BuildFailure): FailureClassification {\n    for (const pattern of this.patterns) {\n      if (pattern.regex.test(failure.errorMessage) || pattern.regex.test(failure.logSnippet)) {\n        return {\n          failure, category: pattern.category,\n          confidence: 0.85, suggestedTeam: pattern.team,\n          priority: pattern.priority,\n        };\n      }\n    }\n    return {\n      failure, category: 'unknown', confidence: 0.3,\n      suggestedTeam: 'platform', priority: 'p2',\n    };\n  }\n\n  batchClassify(failures: BuildFailure[]): {\n    byCategory: Map<string, number>;\n    byTeam: Map<string, number>;\n    details: FailureClassification[];\n  } {\n    const details = failures.map(f => this.classify(f));\n    const byCategory = new Map<string, number>();\n    const byTeam = new Map<string, number>();\n\n    for (const d of details) {\n      byCategory.set(d.category, (byCategory.get(d.category) || 0) + 1);\n      byTeam.set(d.suggestedTeam, (byTeam.get(d.suggestedTeam) || 0) + 1);\n    }\n\n    return { byCategory, byTeam, details };\n  }\n\n  generateReport(result: { byCategory: Map<string, number>; byTeam: Map<string, number>; details: FailureClassification[] }): string {\n    return `## Build Failure Classification\\n\\n` +\n      `**By Category:**\\n` +\n      [...result.byCategory.entries()].map(([c, n]) => `  - ${c}: ${n}`).join('\\n') + '\\n\\n' +\n      `**By Team:**\\n` +\n      [...result.byTeam.entries()].map(([t, n]) => `  - ${t}: ${n}`).join('\\n') + '\\n';\n  }\n}\n\nconst classifier = new FailureClassifier();\nconst failures: BuildFailure[] = [\n  { id: 'b1', stage: 'compile', errorMessage: 'TS2304: Cannot find name \"Request\"', exitCode: 1, commitSha: 'abc', author: 'alice', timestamp: new Date(), logSnippet: 'src/server.ts(42): error TS2304' },\n  { id: 'b2', stage: 'test', errorMessage: 'FAIL tests/api.test.ts - expected 200 to equal 401', exitCode: 1, commitSha: 'def', author: 'bob', timestamp: new Date(), logSnippet: 'AssertionError: expected 200 to equal 401' },\n  { id: 'b3', stage: 'deploy', errorMessage: 'Cannot connect to docker daemon at unix:///var/run/docker.sock', exitCode: 1, commitSha: 'ghi', author: 'charlie', timestamp: new Date(), logSnippet: 'Error: Cannot connect to the Docker daemon' },\n];\n\nconsole.log(classifier.generateReport(classifier.batchClassify(failures)));\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What this demonstrates:"
      }), " Automated build failure classification reduces mean-time-to-resolution by identifying root cause categories and routing failures to the right team with appropriate priority."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Every push triggers CI."
        }), " No exceptions. If the build breaks, fixing it is the top priority."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keep the build under 10 minutes."
        }), " Long builds discourage frequent commits."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unit tests first."
        }), " Fast, reliable unit tests catch the majority of regressions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enforce quality gates in CI, not in IDE."
        }), " Don't rely on developers running checks locally."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quarantine flaky tests immediately."
        }), " A flaky test destroys trust in the entire CI system."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Make CI results visible."
        }), " Dashboard, Slack bot, or build monitor in the team area."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Question 1: What is the optimal shape of the test pyramid?"
      }), "**A)** Many E2E, some integration, few unit", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Many unit, some integration, few E2E", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Equal numbers of each", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Only E2E tests", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Many unit, some integration, few E2E</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
        children: [(0,jsx_runtime.jsx)(_components.summary, {
          children: "Question 2: What should happen when a CI build fails?"
        }), "**A)** The team continues working on new features", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Fixing the build is the top priority", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** The broken commit is automatically reverted", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** The build is ignored until release day", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Fixing the build is the top priority</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Question 3: How should flaky tests be handled?"
          }), "**A)** Ignore them", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Quarantine them and fix the root cause", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Retry them 10 times", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Delete them immediately", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Quarantine them and fix the root cause</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Question 4: What is the recommended maximum CI build time?"
            }), "**A)** 1 minute", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** 10 minutes", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** 30 minutes", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** 60 minutes", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** 10 minutes</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
              children: [(0,jsx_runtime.jsx)(_components.summary, {
                children: "Question 5: What does affected:build do in a monorepo CI?"
              }), "**A)** Builds all packages", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Only builds packages affected by changed code", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Builds the entire dependency tree", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Skips the build entirely", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Only builds packages affected by changed code</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "// cicd\n// cicd-infrastructure-automation implementation"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'cicd', data: { topic: 'cicd-infrastructure-automation' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "summary",
                children: "Summary"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Continuous Integration is the practice of merging code changes frequently, with each merge automatically built and tested."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "The test pyramid guides investment: 70-80% unit tests, 15-20% integration, 5-10% E2E."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Quality gates (lint, coverage, type check, security) automate code review standards."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Monorepo CI requires smart change detection to avoid building unchanged packages."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Fast feedback (<10 minutes) encourages frequent commits and rapid iteration."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Flaky tests must be quarantined and fixed to maintain CI trust."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "CI results should be visible and actionable for the entire team."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "exercises",
                children: "Exercises"
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "review-questions",
                children: "Review Questions"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What are the five essential practices of CI?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Why should unit tests outnumber integration and E2E tests?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How do you handle a flaky test in CI?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What is the purpose of CI quality gates?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How does monorepo CI differ from single-repo CI?"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "application-problems",
                children: "Application Problems"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Design a CI pipeline for a TypeScript project with unit tests, integration tests, linting, coverage enforcement, and build artifact generation."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Create a strategy for test parallelization across multiple CI runners."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Implement a flaky test detection system that tracks test results across runs."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Configure a monorepo CI setup that only builds and tests affected packages."
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["Extend the ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "CIPipelineConfig"
                  }), " class to support: security scanning steps (SAST, SCA, secret scan) with configurable severity thresholds, matrix testing across 3 Node.js versions and 2 operating systems, and conditional pipeline stages that skip when only documentation files change. Generate the complete GitHub Actions YAML."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["Implement an ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "ArtifactVersionManager"
                  }), " that: derives version from git tags (semver), auto-increments patch version for non-tagged commits on main, appends build metadata (", (0,jsx_runtime.jsx)(_components.code, {
                    children: "+build.123"
                  }), ") for CI builds, and stores artifacts in a versioned S3-like path structure: ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "artifacts/{name}/{version}/{file}"
                  }), "."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "challenge-problem",
                children: "Challenge Problem"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Design and implement a comprehensive CI system for a TypeScript monorepo with 12 packages. Include: dependency graph-based change detection for selective builds, parallel test execution with sharding and load balancing, quality gate enforcement (lint, type check, 85% coverage, no critical vulnerabilities), artifact versioning and publishing, flaky test detection and quarantine with automated issue creation, and a CI health dashboard tracking build time trends, test count trends, coverage trends, and cache hit rate."
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