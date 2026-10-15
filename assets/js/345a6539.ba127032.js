"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[4663],{

/***/ 92897
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_04_git_linux_cli_06_networking_and_security_md_345_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-04-git-linux-cli-06-networking-and-security-md-345.json
const site_docs_courses_ai_engineering_placement_04_git_linux_cli_06_networking_and_security_md_345_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/git-linux-cli/06-networking-and-security","title":"DevOps Automation","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/04-git-linux-cli/06-networking-and-security.md","sourceDirName":"courses/ai-engineering-placement/04-git-linux-cli","slug":"/ai-engineering-placement/04-git-linux-cli/06-networking-and-security","permalink":"/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/06-networking-and-security","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":63,"frontMatter":{"id":"06-networking-and-security","slug":"/ai-engineering-placement/04-git-linux-cli/06-networking-and-security","title":"DevOps Automation","sidebar_label":"DevOps Automation","sidebar_position":63},"sidebar":"placementSidebar","previous":{"title":"CLI Productivity","permalink":"/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/05-bash-scripting"},"next":{"title":"SSH & Remote Access — Secure Shell, Key Management, Tunneling","permalink":"/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/07-ssh-and-remote-access"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/04-git-linux-cli/06-networking-and-security.md


const frontMatter = {
	id: '06-networking-and-security',
	slug: '/ai-engineering-placement/04-git-linux-cli/06-networking-and-security',
	title: 'DevOps Automation',
	sidebar_label: 'DevOps Automation',
	sidebar_position: 63
};
const contentTitle = 'DevOps Automation';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Introduction",
  "id": "introduction",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
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
  "value": "Key Terminology",
  "id": "key-terminology",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "06.1 CI/CD Fundamentals",
  "id": "061-cicd-fundamentals",
  "level": 3
}, {
  "value": "06.2 GitHub Actions",
  "id": "062-github-actions",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "06.3 Pre-Commit Hooks",
  "id": "063-pre-commit-hooks",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-1",
  "level": 2
}, {
  "value": "06.4 Automated Testing in CI",
  "id": "064-automated-testing-in-ci",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-2",
  "level": 2
}, {
  "value": "06.5 Deployment Automation",
  "id": "065-deployment-automation",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-3",
  "level": 2
}, {
  "value": "06.6 Security &amp; Best Practices",
  "id": "066-security--best-practices",
  "level": 3
}, {
  "value": "Evaluation Metrics",
  "id": "evaluation-metrics",
  "level": 2
}, {
  "value": "Real-World Examples",
  "id": "real-world-examples",
  "level": 2
}, {
  "value": "Next Topic",
  "id": "next-topic",
  "level": 2
}, {
  "value": "Limitations",
  "id": "limitations",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    pre: "pre",
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
        id: "devops-automation",
        children: "DevOps Automation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Objective"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand CI/CD principles and how they accelerate development"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create GitHub Actions workflows for building, testing, and deploying"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set up pre-commit hooks to enforce code quality before commits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configure automated testing and linting in CI pipelines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement deployment automation with environments and secrets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply DevOps best practices for secure, reliable automation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevOps automation — CI/CD, GitHub Actions, pre-commit hooks — ensures code quality and rapid deployment. AI engineers use these to automate model training, testing, and deployment pipelines."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git basics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linux command line"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "06.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI/CD Fundamentals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous integration, delivery, deployment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "06.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub Actions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Workflows, jobs, steps, actions marketplace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "06.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-Commit Hooks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local quality gates, linting, formatting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "06.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unit, integration, end-to-end in CI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "06.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment Automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Environments, secrets, rollback strategies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "06.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security & Best Practices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supply chain security, secrets management"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[DevOps Automation] --> B[CI/CD Principles]\r\n    B --> C[GitHub Actions]\r\n    C --> D[Pre-Commit Hooks]\r\n    D --> E[Automated Testing]\r\n    E --> F[Deployment]\r\n    F --> G[Security]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "061-cicd-fundamentals",
      children: "06.1 CI/CD Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CI/CD automates the path from code change to production deployment, reducing manual errors and accelerating delivery."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The CI/CD pipeline:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[Code Commit] --> B[Build]\r\n    B --> C[Test]\r\n    C --> D[Scan]\r\n    D --> E[Deploy Staging]\r\n    E --> F[Manual Approval]\r\n    F --> G[Deploy Production]\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Stage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Happens"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tools"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Continuous Integration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code is built, tested, and validated on every push"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub Actions, Jenkins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Continuous Delivery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Artifacts are automatically staged for release"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArgoCD, Spinnaker"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Continuous Deployment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every passing change deploys to production"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kubernetes, Terraform"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key CI/CD principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fail fast"
        }), ": Run the fastest checks first (lint → type-check → unit tests → integration)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reproducibility"
        }), ": Every build uses the same dependencies and environment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Immutability"
        }), ": Build artifacts are never modified; promote through environments"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trunk-based development"
        }), ": Short-lived branches, frequent merges to main"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fast feedback"
        }), ": Developers should know within minutes if their change is broken"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "062-github-actions",
      children: "06.2 GitHub Actions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GitHub Actions is GitHub's built-in CI/CD platform. Workflows run in response to events (push, PR, schedule) using YAML configuration."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "\r\n## .github/workflows/ci.yml\r\nname: CI Pipeline\r\n\r\non:\r\n  push:\r\n    branches: [main, develop]\r\n  pull_request:\r\n    branches: [main]\r\n\r\nenv:\r\n  NODE_VERSION: '20'\r\n\r\njobs:\r\n  lint:\r\n    runs-on: ubuntu-latest\r\n    steps:\r\n      - uses: actions/checkout@v4\r\n\r\n      - name: Setup Node.js\r\n        uses: actions/setup-node@v4\r\n        with:\r\n          node-version: ${{ env.NODE_VERSION }}\r\n\r\n      - name: Install dependencies\r\n        run: npm ci\r\n\r\n      - name: Run ESLint\r\n        run: npm run lint\r\n\r\n      - name: Run Prettier check\r\n        run: npm run format:check\r\n\r\n  test:\r\n    runs-on: ubuntu-latest\r\n    needs: lint\r\n    steps:\r\n      - uses: actions/checkout@v4\r\n\r\n      - name: Setup Node.js\r\n        uses: actions/setup-node@v4\r\n        with:\r\n          node-version: ${{ env.NODE_VERSION }}\r\n\r\n      - name: Install dependencies\r\n        run: npm ci\r\n\r\n      - name: Run unit tests\r\n        run: npm test\r\n\r\n      - name: Run integration tests\r\n        run: npm run test:integration\r\n\r\n      - name: Upload coverage\r\n        uses: codecov/codecov-action@v4\r\n        with:\r\n          token: ${{ secrets.CODECOV_TOKEN }}\r\n\r\n  build:\r\n    runs-on: ubuntu-latest\r\n    needs: test\r\n    steps:\r\n      - uses: actions/checkout@v4\r\n\r\n      - name: Setup Node.js\r\n        uses: actions/setup-node@v4\r\n        with:\r\n          node-version: ${{ env.NODE_VERSION }}\r\n\r\n      - name: Install and build\r\n        run: |\r\n          npm ci\r\n          npm run build\r\n\r\n      - name: Upload build artifact\r\n        uses: actions/upload-artifact@v4\r\n        with:\r\n          name: build-output\r\n          path: dist/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key workflow concepts:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "\r\n## Triggers\r\non:\r\n  push:           # When code is pushed\r\n  pull_request:   # When PR is opened/updated\r\n  schedule:       # Cron schedule\r\n    - cron: '0 2 * * 1'  # Every Monday at 2 AM\r\n  workflow_dispatch: # Manual trigger\r\n\r\n## Matrix strategy — test across multiple versions\r\njobs:\r\n  test:\r\n    strategy:\r\n      matrix:\r\n        node-version: [18, 20, 22]\r\n        os: [ubuntu-latest, windows-latest]\r\n    runs-on: ${{ matrix.os }}\r\n    steps:\r\n      - uses: actions/setup-node@v4\r\n        with:\r\n          node-version: ${{ matrix.node-version }}\r\n\r\n## Conditional steps\r\nsteps:\r\n  - name: Deploy\r\n    if: github.ref == 'refs/heads/main'\r\n    run: npm run deploy\r\n\r\n## Caching dependencies\r\n- uses: actions/cache@v4\r\n  with:\r\n    path: ~/.npm\r\n    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reusable workflows:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "\r\n## .github/workflows/reusable-build.yml\r\nname: Reusable Build\r\non:\r\n  workflow_call:\r\n    inputs:\r\n      node-version:\r\n        required: true\r\n        type: string\r\n\r\njobs:\r\n  build:\r\n    runs-on: ubuntu-latest\r\n    steps:\r\n      - uses: actions/checkout@v4\r\n      - uses: actions/setup-node@v4\r\n        with:\r\n          node-version: ${{ inputs.node-version }}\r\n      - run: npm ci && npm run build\r\n\r\n## Caller workflow\r\njobs:\r\n  build:\r\n    uses: ./.github/workflows/reusable-build.yml\r\n    with:\r\n      node-version: '20'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complete CI/CD pipeline with deploy:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "name: Full Pipeline\r\n\r\non:\r\n  push:\r\n    branches: [main]\r\n  pull_request:\r\n    branches: [main]\r\n\r\njobs:\r\n  ci:\r\n    runs-on: ubuntu-latest\r\n    steps:\r\n      - uses: actions/checkout@v4\r\n      - uses: actions/setup-node@v4\r\n        with:\r\n          node-version: '20'\r\n      - run: npm ci\r\n      - run: npm run lint\r\n      - run: npm test\r\n      - run: npm run build\r\n\r\n  deploy-staging:\r\n    if: github.ref == 'refs/heads/main'\r\n    needs: ci\r\n    runs-on: ubuntu-latest\r\n    environment: staging\r\n    steps:\r\n      - uses: actions/checkout@v4\r\n      - name: Deploy to staging\r\n        run: |\r\n          echo \"Deploying to staging...\"\r\n          # Deploy commands here\r\n        env:\r\n          DEPLOY_KEY: ${{ secrets.STAGING_DEPLOY_KEY }}\r\n\r\n  deploy-production:\r\n    if: github.ref == 'refs/heads/main'\r\n    needs: deploy-staging\r\n    runs-on: ubuntu-latest\r\n    environment:\r\n      name: production\r\n      url: https://app.example.com\r\n    steps:\r\n      - uses: actions/checkout@v4\r\n      - name: Deploy to production\r\n        run: |\r\n          echo \"Deploying to production...\"\r\n        env:\r\n          DEPLOY_KEY: ${{ secrets.PRODUCTION_DEPLOY_KEY }}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "063-pre-commit-hooks",
      children: "06.3 Pre-Commit Hooks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pre-commit hooks run automatically before each ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git commit"
      }), ", catching issues before they enter the codebase."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Using the pre-commit framework:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\r\n## Install pre-commit\r\npip install pre-commit\r\n\r\n## Create .pre-commit-config.yaml\r\n\r\n## Install hooks\r\npre-commit install\r\n\r\n## Run against all files\r\npre-commit run --all-files\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: ".pre-commit-config.yaml:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "repos:\r\n  # General file checks\r\n  - repo: https://github.com/pre-commit/pre-commit-hooks\r\n    rev: v4.5.0\r\n    hooks:\r\n      - id: trailing-whitespace\r\n      - id: end-of-file-fixer\r\n      - id: check-yaml\r\n      - id: check-json\r\n      - id: check-added-large-files\r\n        args: ['--maxkb=500']\r\n      - id: check-merge-conflict\r\n      - id: detect-private-key\r\n\r\n  # Python\r\n  - repo: https://github.com/psf/black\r\n    rev: 24.1.0\r\n    hooks:\r\n      - id: black\r\n\r\n  - repo: https://github.com/pycqa/isort\r\n    rev: 5.13.0\r\n    hooks:\r\n      - id: isort\r\n\r\n  - repo: https://github.com/pycqa/flake8\r\n    rev: 7.0.0\r\n    hooks:\r\n      - id: flake8\r\n\r\n  # JavaScript/TypeScript\r\n  - repo: https://github.com/pre-commit/mirrors-eslint\r\n    rev: v8.56.0\r\n    hooks:\r\n      - id: eslint\r\n        files: \\.(js|ts|tsx)$\r\n\r\n  - repo: https://github.com/pre-commit/mirrors-prettier\r\n    rev: v3.1.0\r\n    hooks:\r\n      - id: prettier\r\n        types_or: [javascript, typescript, json, css]\r\n\r\n  # Security\r\n  - repo: https://github.com/gitleaks/gitleaks\r\n    rev: v8.18.0\r\n    hooks:\r\n      - id: gitleaks\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom pre-commit hooks:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "\r\n## .pre-commit-config.yaml\r\nrepos:\r\n  - repo: local\r\n    hooks:\r\n      - id: commit-message\r\n        name: Check commit message format\r\n        language: system\r\n        entry: bash -c 'msg=$(cat \"$1\"); if ! echo \"$msg\" | grep -qE \"^(feat|fix|docs|style|refactor|test|chore)(\\(.+\\))?: .{1,72}$\"; then echo \"Invalid commit message. Use: type(scope): description\"; exit 1; fi'\r\n        args: [COMMIT_MSG]\r\n        stages: [commit-msg]\r\n\r\n      - id: typecheck\r\n        name: TypeScript type check\r\n        language: system\r\n        entry: npx tsc --noEmit\r\n        files: \\.(ts|tsx)$\r\n        pass_filenames: false\r\n\r\n      - id: test-changed\r\n        name: Run tests for changed files\r\n        language: system\r\n        entry: bash -c 'changed=$(git diff --cached --name-only --diff-filter=ACM | grep -E \"\\.test\\.(ts|tsx)$\" | head -1); if [ -n \"$changed\" ]; then npm test -- --changedSince=HEAD; fi'\r\n        pass_filenames: false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Husky (JavaScript projects):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\r\n## Install husky\r\nnpm install husky --save-dev\r\nnpx husky init\r\n\r\n## Add pre-commit hook\r\necho \"npm run lint && npm run test\" > .husky/pre-commit\r\n\r\n## Add commit-msg hook\r\necho \"npx commitlint --edit\" > .husky/commit-msg\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "commitlint configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// commitlint.config.js\r\nmodule.exports = {\r\n  extends: ['@commitlint/config-conventional'],\r\n  rules: {\r\n    'type-enum': [2, 'always', [\r\n      'feat', 'fix', 'docs', 'style', 'refactor',\r\n      'test', 'chore', 'perf', 'ci', 'build'\r\n    ]],\r\n    'subject-max-length': [2, 'always', 72],\r\n  },\r\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-1",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "064-automated-testing-in-ci",
      children: "06.4 Automated Testing in CI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing strategy for CI:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\r\n    A[Commit] --> B[Lint + Format]\r\n    B --> C[Unit Tests]\r\n    C --> D[Integration Tests]\r\n    D --> E[E2E Tests]\r\n    E --> F[Performance Tests]\r\n    F --> G[Security Scan]\r\n    G --> H[Deploy]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Actions test workflow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "name: Tests\r\non: [push, pull_request]\r\n\r\njobs:\r\n  unit:\r\n    runs-on: ubuntu-latest\r\n    steps:\r\n      - uses: actions/checkout@v4\r\n      - uses: actions/setup-node@v4\r\n        with: { node-version: '20' }\r\n      - run: npm ci\r\n      - run: npm run test:unit -- --coverage\r\n      - uses: actions/upload-artifact@v4\r\n        with:\r\n          name: coverage\r\n          path: coverage/\r\n\r\n  integration:\r\n    runs-on: ubuntu-latest\r\n    services:\r\n      postgres:\r\n        image: postgres:16\r\n        env:\r\n          POSTGRES_PASSWORD: test\r\n          POSTGRES_DB: testdb\r\n        ports: ['5432:5432']\r\n        options: >-\r\n          --health-cmd pg_isready\r\n          --health-interval 10s\r\n          --health-timeout 5s\r\n          --health-retries 5\r\n      redis:\r\n        image: redis:7\r\n        ports: ['6379:6379']\r\n    steps:\r\n      - uses: actions/checkout@v4\r\n      - uses: actions/setup-node@v4\r\n        with: { node-version: '20' }\r\n      - run: npm ci\r\n      - run: npm run test:integration\r\n        env:\r\n          DATABASE_URL: postgresql://postgres:test@localhost:5432/testdb\r\n          REDIS_URL: redis://localhost:6379\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test reporting:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "\r\n## Publish test results\r\n- uses: dorny/test-reporter@v1\r\n  if: always()\r\n  with:\r\n    name: Test Results\r\n    path: 'test-results/**/*.xml'\r\n    reporter: jest-junit\r\n\r\n## Code coverage with threshold\r\n- name: Check coverage\r\n  run: |\r\n    npx jest --coverage --coverageThreshold='{\"global\":{\"lines\":80,\"functions\":80}}'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-2",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "065-deployment-automation",
      children: "06.5 Deployment Automation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Environment protection rules:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "\r\n## GitHub Settings → Environments → production\r\n\r\n## Configure:\r\n\r\n## - Required reviewers\r\n\r\n## - Wait timer (e.g., 5 minutes)\r\n\r\n## - Deployment branches (only main)\r\n\r\njobs:\r\n  deploy:\r\n    runs-on: ubuntu-latest\r\n    environment:\r\n      name: production\r\n      url: https://app.example.com\r\n    steps:\r\n      - uses: actions/checkout@v4\r\n      - name: Deploy\r\n        run: ./deploy.sh\r\n        env:\r\n          API_KEY: ${{ secrets.API_KEY }}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Secrets management:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\r\n## GitHub Secrets (Settings → Secrets → Actions)\r\n\r\n## Store: API keys, deploy tokens, database URLs\r\n\r\n## Reference in workflows: ${{ secrets.SECRET_NAME }}\r\n\r\n## ⚠️ Never do this:\r\necho ${{ secrets.MY_SECRET }}  # Visible in logs\r\n\r\n## ✅ Use env to mask secrets:\r\n- run: deploy.sh\r\n  env:\r\n    API_KEY: ${{ secrets.API_KEY }}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blue-green deployment pattern:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "deploy:\r\n  runs-on: ubuntu-latest\r\n  steps:\r\n    - name: Deploy to green environment\r\n      run: |\r\n        # Deploy new version to green\r\n        ./deploy.sh green\r\n\r\n    - name: Run smoke tests\r\n      run: |\r\n        # Test green environment\r\n        curl -f https://green.example.com/health\r\n\r\n    - name: Switch traffic to green\r\n      run: |\r\n        # Update load balancer to point to green\r\n        ./switch-traffic.sh green\r\n\r\n    - name: Keep blue as rollback\r\n      run: |\r\n        # Blue remains available for instant rollback\r\n        echo \"Blue available at blue.example.com\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rollback strategy:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "deploy:\r\n  steps:\r\n    - name: Deploy\r\n      id: deploy\r\n      run: |\r\n        # Save current version for rollback\r\n        CURRENT=$(kubectl get deployment app -o jsonpath='{.spec.template.spec.containers[0].image}')\r\n        echo \"previous_version=$CURRENT\" >> $GITHUB_OUTPUT\r\n        # Deploy new version\r\n        kubectl set image deployment/app app=myapp:${{ github.sha }}\r\n\r\n    - name: Verify deployment\r\n      run: |\r\n        kubectl rollout status deployment/app --timeout=300s\r\n\r\n    - name: Rollback on failure\r\n      if: failure()\r\n      run: |\r\n        kubectl rollout undo deployment/app\r\n        echo \"Rolled back to ${{ steps.deploy.outputs.previous_version }}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-3",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "066-security--best-practices",
      children: "06.6 Security & Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Actions security:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "\r\n## Pin actions to specific commits (not tags)\r\n- uses: actions/checkout@b4ffde65f46336ab88eb53be808477a3936bae11  # v4.1.1\r\n\r\n## Use minimal permissions\r\npermissions:\r\n  contents: read\r\n  pull-requests: write\r\n  packages: write\r\n\r\n## Avoid script injection\r\n- run: echo \"Processing ${{ github.event.issue.title }}\"\r\n  # DANGEROUS if title contains shell commands\r\n  # Use env instead:\r\n- run: echo \"Processing $ISSUE_TITLE\"\r\n  env:\r\n    ISSUE_TITLE: ${{ github.event.issue.title }}\r\n\r\n## Don't upload artifacts from PRs from forks\r\n- uses: actions/upload-artifact@v4\r\n  if: github.event_name != 'pull_request'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Supply chain security:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "\r\n## Scan for vulnerabilities\r\n- uses: github/codeql-action/analyze@v3\r\n  with:\r\n    languages: javascript\r\n\r\n## Check for secrets in code\r\n- uses: gitleaks/gitleaks-action@v2\r\n  env:\r\n    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\r\n\r\n## Verify dependency integrity\r\n- run: npm ci\r\n  # npm ci uses package-lock.json for deterministic installs\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Branch protection rules:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "GitHub Settings → Branches → Add rule:\r\n✅ Require pull request reviews (1+ approvals)\r\n✅ Require status checks (CI must pass)\r\n✅ Require branches to be up to date\r\n✅ Require conversation resolution\r\n✅ Require linear history (no merge commits)\r\n✅ Include administrators\r\n✅ Allow force pushes: never\r\n✅ Allow deletions: never\r\n```text\r\n\r\n**DevOps best practices checklist:**\r\n\r\n| Practice | Why It Matters |\r\n|----------|---------------|\r\n| Pin action versions to commits | Prevents supply chain attacks |\r\n| Use `npm ci` not `npm install` | Deterministic, uses lockfile |\r\n| Cache dependencies | Faster builds, lower costs |\r\n| Run tests in parallel | Faster feedback |\r\n| Use environment protection | Prevents accidental deploys |\r\n| Store secrets in vault | Never commit secrets |\r\n| Automate rollbacks | Faster recovery from failures |\r\n| Monitor deployments | Catch issues early |\r\n\r\n## Summary\r\n\r\n- CI/CD automates the path from commit to production — catch issues early\r\n- GitHub Actions workflows define build/test/deploy pipelines in YAML\r\n- Matrix testing ensures compatibility across OS and language versions\r\n- Pre-commit hooks enforce code quality before code enters the repository\r\n- Use the `pre-commit` framework or Husky for consistent local checks\r\n- Test in CI with services (databases, caches) using Docker containers\r\n- Protect secrets with GitHub Secrets — never echo them in logs\r\n- Pin actions to commit hashes for supply chain security\r\n- Branch protection rules enforce review and CI requirements\r\n- Blue-green deployments enable instant rollback\r\n\r\n## Practical Takeaways\r\n\r\n| Scenario | Tool/Approach |\r\n|----------|--------------|\r\n| CI for a Node.js project | GitHub Actions with matrix strategy |\r\n| Pre-commit linting | pre-commit framework + husky |\r\n| Test database in CI | GitHub Actions services (postgres, redis) |\r\n| Deploy to staging | GitHub Actions with environment protection |\r\n| Prevent secret leaks | GitHub Secrets + env references |\r\n| Fast CI builds | npm ci + actions/cache |\r\n| Safe production deploys | Blue-green with rollback on failure |\r\n\r\n## Interview Q&A\r\n\r\n<details class=\"tp-qa-card\" data-qid=\"git06-q1\">\r\n  <summary class=\"tp-qa-question\">\r\n    <span class=\"tp-qa-status\"></span>\r\n    Q1: What is the difference between continuous integration, delivery, and deployment?\r\n  </summary>\r\n  <div class=\"tp-qa-answer\">\r\n    <p><strong>Continuous Integration (CI)</strong>: Developers merge code frequently; automated builds and tests validate every change.</p>\r\n    <p><strong>Continuous Delivery (CD)</strong>: Extends CI — every passing change is automatically staged for release, but deployment to production requires manual approval.</p>\r\n    <p><strong>Continuous Deployment</strong>: Extends CD further — every passing change deploys to production automatically with no human intervention. The key difference is who gates production: human (delivery) vs automated (deployment).</p>\r\n  </div>\r\n  <button class=\"tp-qa-mark-btn\">Mark Reviewed</button>\r\n  <button class=\"tp-qa-bookmark-btn\">Bookmark</button>\r\n</details>\r\n\r\n<details class=\"tp-qa-card\" data-qid=\"git06-q2\">\r\n  <summary class=\"tp-qa-question\">\r\n    <span class=\"tp-qa-status\"></span>\r\n    Q2: How do you prevent secrets from being exposed in GitHub Actions logs?\r\n  </summary>\r\n  <div class=\"tp-qa-answer\">\r\n<p>1) Store secrets in GitHub Settings → Secrets → Actions. 2) Reference them as <code>${{ secrets.SECRET_NAME }}</code> in workflows. 3) Pass them as environment variables,.\r\nnever echo them directly. 4) GitHub automatically masks secrets in logs if accidentally printed. 5) Avoid script injection by not using secrets in <code>run:</code> echo statements — use <code>env:</code> instead. 6) Use OIDC tokens for.\r\ncloud credentials instead of long-lived secrets.</p>\r\n  </div>\r\n  <button class=\"tp-qa-mark-btn\">Mark Reviewed</button>\r\n  <button class=\"tp-qa-bookmark-btn\">Bookmark</button>\r\n</details>\r\n\r\n<details class=\"tp-qa-card\" data-qid=\"git06-q3\">\r\n  <summary class=\"tp-qa-question\">\r\n    <span class=\"tp-qa-status\"></span>\r\n    Q3: Why should you pin GitHub Actions to commit SHAs instead of tags?\r\n  </summary>\r\n  <div class=\"tp-qa-answer\">\r\n    <p>Tags like <code>@v4</code> are mutable — an attacker who compromises an action's repository can push malicious code under the same tag. Commit SHAs are immutable. Pinning to <code>@b4ffde65f46336ab88eb53be808477a3936bae11</code> ensures you always run the exact same code. Renovate or Dependabot can keep pinned versions updated automatically.</p>\r\n  </div>\r\n  <button class=\"tp-qa-mark-btn\">Mark Reviewed</button>\r\n  <button class=\"tp-qa-bookmark-btn\">Bookmark</button>\r\n</details>\r\n\r\n<details class=\"tp-qa-card\" data-qid=\"git06-q4\">\r\n  <summary class=\"tp-qa-question\">\r\n    <span class=\"tp-qa-status\"></span>\r\n    Q4: What problem do pre-commit hooks solve?\r\n  </summary>\r\n  <div class=\"tp-qa-answer\">\r\n<p>Pre-commit hooks run checks (linting, formatting, type checking, secret scanning) <strong>before</strong> each git commit. This catches issues at the earliest possible point — before code enters the repository or.\r\nCI pipeline. Benefits: faster feedback (local, no CI wait), consistent code quality, prevents broken code from being pushed, and reduces CI costs by catching simple issues early.</p>\r\n  </div>\r\n  <button class=\"tp-qa-mark-btn\">Mark Reviewed</button>\r\n  <button class=\"tp-qa-bookmark-btn\">Bookmark</button>\r\n</details>\r\n\r\n<details class=\"tp-qa-card\" data-qid=\"git06-q5\">\r\n  <summary class=\"tp-qa-question\">\r\n    <span class=\"tp-qa-status\"></span>\r\n    Q5: Describe a blue-green deployment strategy and its advantages.\r\n  </summary>\r\n  <div class=\"tp-qa-answer\">\r\n<p>Blue-green deployment maintains two identical production environments. \"Blue\" serves live traffic; \"green\" gets the new version. After testing green, traffic is switched instantly. Advantages: zero-downtime deployments,.\r\ninstant rollback (switch back to blue), ability to test the new version under real traffic before switching, and simple deployment process. Disadvantages: requires double the infrastructure resources.</p>\r\n  </div>\r\n  <button class=\"tp-qa-mark-btn\">Mark Reviewed</button>\r\n  <button class=\"tp-qa-bookmark-btn\">Bookmark</button>\r\n</details>\r\n\r\n## Chapter Quiz\r\n\r\n**Q1**: In GitHub Actions, what does the `needs` keyword do?\r\n\r\na) Specifies required secrets\r\nb) Defines job dependencies (a job waits for another to finish)\r\nc) Lists required environment variables\r\nd) Sets minimum runner requirements\r\n\r\n<details class=\"tp-qa-card\" data-qid=\"git06-quiz1\"><summary>Show Answer</summary><div class=\"tp-qa-answer\"><p><strong>Answer: b</strong></p><p><code>needs</code> defines job dependencies. A job with <code>needs: lint</code> won't start until the <code>lint</code> job completes successfully. This lets you build sequential pipelines: lint → test → build → deploy.</p></div></details>\r\n\r\n**Q2**: What does `npm ci` do that `npm install` doesn't?\r\n\r\na) Installs faster\r\nb) Deletes node_modules and installs exactly from package-lock.json\r\nc) Skips optional dependencies\r\nd) Runs tests after install\r\n\r\n<details class=\"tp-qa-card\" data-qid=\"git06-quiz2\"><summary>Show Answer</summary><div class=\"tp-qa-answer\"><p><strong>Answer: b</strong></p><p><code>npm ci</code> deletes <code>node_modules</code> and installs exactly what's in <code>package-lock.json</code>, ensuring deterministic builds. It never modifies <code>package-lock.json</code>. <code>npm install</code> may update the lockfile and can produce different dependency trees.</p></div></details>\r\n\r\n**Q3**: Which GitHub Actions feature allows testing across multiple Node.js versions?\r\n\r\na) services\r\nb) matrix strategy\r\nc) needs\r\nd) environment\r\n\r\n<details class=\"tp-qa-card\" data-qid=\"git06-quiz3\"><summary>Show Answer</summary><div class=\"tp-qa-answer\"><p><strong>Answer: b</strong></p><p>The <code>strategy.matrix</code> creates multiple job instances with different configurations. Example: test across Node 18, 20, 22 on both Ubuntu and Windows with 6 parallel jobs.</p></div></details>\r\n\r\n**Q4**: What is the purpose of GitHub Actions environments?\r\n\r\na) Define runner operating systems\r\nb) Group deployment targets with protection rules and secrets\r\nc) Set workflow-level permissions\r\nd) Cache build artifacts\r\n\r\n<details class=\"tp-qa-card\" data-qid=\"git06-quiz4\"><summary>Show Answer</summary><div class=\"tp-qa-answer\"><p><strong>Answer: b</strong></p><p>Environments (staging, production) can have protection rules: required reviewers, wait timers, and branch restrictions. They also scope secrets — staging secrets aren't available in production jobs.</p></div></details>\r\n\r\n**Q5**: What happens when a pre-commit hook fails?\r\n\r\na) The commit is created anyway\r\nb) The commit is blocked until the issue is fixed\r\nc) The hook is skipped automatically\r\nd) Git creates a backup and proceeds\r\n\r\n<details class=\"tp-qa-card\" data-qid=\"git06-quiz5\"><summary>Show Answer</summary><div class=\"tp-qa-answer\"><p><strong>Answer: b</strong></p><p>When a pre-commit hook exits with non-zero status, Git blocks the commit. The developer must fix the issue (format the code, remove secrets, etc.) and try again. This enforces quality standards before code enters the repository.</p></div></details>\r\n\r\n## Practical Tips\r\n\r\n- Start with a minimal CI: lint + unit tests — expand gradually\r\n- Use `npm ci` in CI for deterministic, faster installs\r\n- Cache dependencies with `actions/cache` — saves 30-60% build time\r\n- Run lint before tests — fail fast on style issues\r\n- Use GitHub Actions environments for staging/production separation\r\n- Pin third-party actions to commit SHAs, not tags\r\n- Add branch protection rules early — prevent force pushes and unreviewed code\r\n- Use `if: failure()` steps for automatic rollback notifications\r\n- Test CI changes on a feature branch before merging workflow changes\r\n\r\n## Exercises\r\n\r\n## Common Mistakes\r\n\r\n1. Not using CI/CD for all projects\r\n2. Hardcoding secrets in workflows\r\n3. Not running tests before deployment\r\n4. Forgetting to cache dependencies\r\n5. Not using branch protection rules**Easy** — Create a GitHub Actions workflow that runs ESLint and Prettier on every push. Verify it passes on a clean commit and fails on a file with lint errors.\r\n\r\n**Medium** — Set up a pre-commit config with trailing-whitespace, end-of-file-fixer, and a custom hook that checks commit message format follows conventional commits.\r\n\r\n**Medium** — Build a CI pipeline with matrix testing across Node 18 and 20, include a PostgreSQL service container for integration tests, and upload coverage reports.\r\n\r\n**Hard** — Implement a complete CI/CD pipeline: lint → test → build → deploy to staging (with environment protection) → manual approval → deploy to production. Include rollback on failure.\r\n\r\n---\r\n\r\n> **End of Module 04**: [Back to Module Index →](\r\n\r\n## Revision Notes\r\n\r\n- CI: test on every push\r\n- CD: deploy automatically after tests pass\r\n- GitHub Actions: YAML-based workflows\r\n- Pre-commit hooks: lint before commit\r\n- Secrets: never commit, use CI/CD secrets\r\n\r\n## Placement Section\r\n\r\n### Top 10 Interview Questions\r\n\r\n#### Google Style\r\n\r\n1. **Explain the core idea of DevOps Automation in under 60 seconds, then give a real-world analogy.** — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?\r\n\r\n2. **Design a minimal, well-typed function that demonstrates DevOps Automation.** — Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?\r\n\r\n3. **What are the common pitfalls when engineers first learn ** — List 3-4, then explain how you would prevent each in a code review.\r\n\r\n#### Amazon Style\r\n\r\n4. **Describe a production bug caused by misunderstanding DevOps Automation. How did you diagnose and fix it?** — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added.\r\n\r\n5. **How would you scale a system that relies on DevOps Automation from 10 users to 10 million?** — Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?\r\n\r\n#### Microsoft Style\r\n\r\n6. **Compare DevOps Automation with the closest alternative approach. When would you choose each?** — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?\r\n\r\n7. **Walk through how you would test a component that depends on DevOps Automation.** — Unit, integration, property-based tests; mocking boundaries; golden files for outputs.\r\n\r\n#### NVIDIA Style\r\n\r\n8. **How does DevOps Automation behave differently at scale — memory, throughput, or precision-wise?** — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?\r\n\r\n9. **How would you make an implementation of DevOps Automation run faster on GPU hardware?** — Batch operations, vectorization, avoiding Python loops, reducing data movement.\r\n\r\n#### AI Startup Style\r\n\r\n10. **Write the smallest possible implementation of DevOps Automation that is production-quality.** — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?\r\n\r\n### Resume Tips\r\n\r\n- Name DevOps Automation explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using DevOps Automation\").\r\n- Add a bullet describing a project that applies DevOps Automation to real data, with numbers.\r\n- Mention the tools and libraries you used alongside DevOps Automation (linters, test frameworks, profiling tools).\r\n- Keep resume bullets under 15 words and start each with an action verb.\r\n\r\n### Interview Day Checklist\r\n\r\n- Rehearse a 60-second explanation of DevOps Automation and one real-world analogy.\r\n- Prepare one STAR story about debugging a DevOps Automation-related production issue.\r\n- Review complexity and edge cases for the classic DevOps Automation interview problem.\r\n- Have questions ready: how does the team apply DevOps Automation in production today?\r\n- Test your environment (Python, editor, internet) 15 minutes before the interview.\r\n\r\n## True/False\r\n\r\n1. **True or False:** DevOps Automation builds directly on the fundamentals covered in the earlier chapters of this module. — **True.** Every advanced topic in this module assumes the core concepts from the previous chapters.\r\n2. **True or False:** You should write at least one code example for DevOps Automation before moving to the next chapter. — **True.** Active recall with hands-on code beats passive reading for retention.\r\n3. **True or False:** The complexity analysis for DevOps Automation is the same regardless of input size. — **False.** Complexity grows with input size; always state best, average, and worst case.\r\n4. **True or False:** Edge cases (empty input, invalid input, boundary values) matter for DevOps Automation in production. — **True.** Most production bugs come from unhandled edge cases.\r\n5. **True or False:** You should memorize the DevOps Automation chapter content once and never review it again. — **False.** Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall.\r\n\r\n## Fill in the Blank\r\n\r\n1. The chapter that covers DevOps Automation is Chapter ___ of this module. — Answer: check the module's table of contents.\r\n2. The time complexity of the standard approach to 06 Networking And Security is ___. — Answer: O(n) for log, O(1) for checkout\r\n3. The main edge case to handle when implementing 06 Networking And Security is ___. — Answer: merge conflicts, detached HEAD, force push\r\n4. The tools commonly used to debug DevOps Automation issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter.\r\n5. The related topic that connects to DevOps Automation in the next chapter is ___. — Answer: see the Next Topic section.\r\n\r\n## Scenario Questions\r\n\r\n1. **Scenario:** A teammate ships a change involving DevOps Automation that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist.\r\n\r\n2. **Scenario:** Your implementation of DevOps Automation is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes.\r\n\r\n3. **Scenario:** A new hire asks you to explain DevOps Automation in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo.\r\n\r\n4. **Scenario:** Your team's codebase has three different patterns for DevOps Automation and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it.\r\n\r\n## Output Questions\r\n\r\n1. **What is the output of the simplest correct implementation of DevOps Automation on an empty input?** — Trace through the code: it should return the documented default (None, 0, empty collection) without raising.\r\n2. **What is the output when the input is at the boundary value?** — Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples.\r\n3. **What does the implementation return when given invalid input types?** — With type hints and validation, it raises a clear error; without, it may fail silently.\r\n4. **What is the output for the sample input given in the chapter's Examples section?** — Re-run the chapter's example code and compare against the documented output.\r\n5. **What is the time complexity output when you profile the implementation at 10x input size?** — Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear).\r\n\r\n## Difficulty Level\r\n\r\n| Level | Time | What It Takes |\r\n|-------|------|---------------|\r\n| Beginner | 1-2 sessions | Read theory, run the chapter examples, solve the Easy exercises |\r\n| Intermediate | 3-5 sessions | Complete Medium exercises, explain DevOps Automation to someone else |\r\n| Advanced | 1+ week | Solve Hard exercises, optimize for real datasets, answer interview follow-ups |\r\n\r\n## Tips & Tricks\r\n\r\n- Always write a one-line example of DevOps Automation from memory before opening the chapter — active recall first.\r\n- Use the chapter's Revision Notes as a checklist: you have mastered DevOps Automation when you can explain each bullet.\r\n- Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus.\r\n- For interviews, practice explaining DevOps Automation twice: once with a technical audience, once with a non-technical audience.\r\n- Keep a personal examples file where you collect your own DevOps Automation snippets; interviewers love original examples.\r\n\r\n## Memory Tricks\r\n\r\n- **Acronym**: build a mnemonic from the 5 key concepts of DevOps Automation listed in the Chapter at a Glance table.\r\n- **Story**: link DevOps Automation to a familiar story — the analogy in the Visual Analogy section is designed to stick.\r\n- **Number anchor**: remember the complexity of DevOps Automation by connecting it to a known algorithm of the same class.\r\n- **Color code**: highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing.\r\n- **Teach-back**: explain DevOps Automation to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory.\r\n\r\n## Further Reading\r\n\r\n- Official documentation for the primary library used in this chapter\r\n- The original research paper introducing this concept (search Google Scholar)\r\n- Towards Data Science articles on this topic\r\n- The relevant chapter in 'Designing Data-Intensive Applications' by Kleppmann\r\n- GitHub repositories of production implementations Automation\r\n\r\n## Related Topics\r\n\r\n- **Previous chapter** in Module 04 — builds the foundation for 06 Networking And Security\r\n- **Next chapter** — extends 06 Networking And Security with advanced techniques\r\n- **Module 07 System Design** — how 06 Networking And Security fits into scalable production architectures\r\n- **Module 21 Interview Preparation** — FAANG-style questions on 06 Networking And Security\r\n- **Module 19 Capstone Projects** — end-to-end application of 06 Networking And Security\r\n\r\n## FAQs\r\n\r\n1. **Do I need to memorize all of 06 Networking And Security?** — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation.\r\n2. **What if I get stuck on an exercise?** — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes.\r\n3. **How much time should I spend on 06 Networking And Security?** — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session.\r\n4. **Is 06 Networking And Security asked in FAANG interviews?** — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups.\r\n5. **What's the fastest way to master 06 Networking And Security?** — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading.\r\n\r\n## Important Notes\r\n\r\n- DevOps Automation is a core requirement for the rest of this module — do not skip the examples.\r\n- Always analyze complexity (time and space) when working with DevOps Automation.\r\n- Production correctness means handling edge cases, not just the happy path.\r\n- Interview answers should start with the definition, then the example, then the trade-offs.\r\n- Revisit this chapter after finishing the module; the context from later chapters deepens understanding.\r\n\r\n## Historical Context\r\n\r\n- DevOps Automation emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews.\r\n- The tools used for DevOps Automation today evolved from simpler versions; the chapter covers the modern, recommended approach.\r\n- Interviewers value knowing one historical fact about DevOps Automation — it shows genuine interest, not just cramming.\r\n- The library/tooling ecosystem around DevOps Automation changes quickly; focus on fundamentals that remain stable.\r\n\r\n## Security Considerations\r\n\r\n- Validate all external inputs before processing\r\n- Never log sensitive data (API keys, PII, passwords)\r\n- Use environment variables for configuration secrets\r\n- Implement rate limiting for public-facing endpoints\r\n- Follow the principle of least privilege for all system components\r\n\r\n## ML Intuition\r\n\r\n- This concept appears in ML pipelines at the data processing, training, or serving layer\r\n- Understanding it helps debug model misbehavior — most ML bugs are infrastructure bugs, not model bugs\r\n- Apply vectorization and batching to scale this concept to large datasets\r\n- Monitor for drift and degradation in production — set up alerts for key metrics\r\n- Connect to the broader ML lifecycle: data → features → training → evaluation → deployment → monitoring\r\n\r\n## Analogies\r\n\r\n- **06 Networking And Security is like a GPS navigation system**: you define the destination (goal), the system plans the route (algorithm), and recalculates when you take a wrong turn (error handling).\r\n- **Complexity is like a restaurant kitchen**: a single chef (O(n)) handles small orders fine, but 1000 simultaneous orders need parallel chefs (O(log n) with proper indexing).\r\n- **Edge cases are like stress tests**: the happy path is a calm day, but production is Black Friday — design for the worst case.\r\n- **The chapter roadmap is a subway map**: each section is a station, and skipping one means you miss the connection to the next destination.## Capstone Project Link\r\n\r\n- [Module Capstone: End-to-End Project](https://github.com/Raushan666java/ai-engineering-journey) — this chapter contributes the DevOps Automation skills used in the module's capstone project. Complete the exercises here before starting the capstone.\r\n\r\n## Flashcards\r\n\r\n<details class=\"tp-qa-card\" data-qid=\"04gitlinuxcli-06networkingandsecurity-flash1\">\r\n  <summary class=\"tp-qa-question\">\r\n    <span class=\"tp-qa-status\"></span>\r\n    In GitHub Actions, what does the needs keyword do?\r\n  </summary>\r\n  <div class=\"tp-qa-answer\">\r\n    <p>b</p>\r\n  </div>\r\n</details>\r\n\r\n<details class=\"tp-qa-card\" data-qid=\"04gitlinuxcli-06networkingandsecurity-flash2\">\r\n  <summary class=\"tp-qa-question\">\r\n    <span class=\"tp-qa-status\"></span>\r\n    What does npm ci do that npm install doesn't?\r\n  </summary>\r\n  <div class=\"tp-qa-answer\">\r\n    <p>b</p>\r\n  </div>\r\n</details>\r\n\r\n<details class=\"tp-qa-card\" data-qid=\"04gitlinuxcli-06networkingandsecurity-flash3\">\r\n  <summary class=\"tp-qa-question\">\r\n    <span class=\"tp-qa-status\"></span>\r\n    Which GitHub Actions feature allows testing across multiple Node.js versions?\r\n  </summary>\r\n  <div class=\"tp-qa-answer\">\r\n    <p>b</p>\r\n  </div>\r\n</details>\r\n\r\n<details class=\"tp-qa-card\" data-qid=\"04gitlinuxcli-06networkingandsecurity-flash4\">\r\n  <summary class=\"tp-qa-question\">\r\n    <span class=\"tp-qa-status\"></span>\r\n    What is the purpose of GitHub Actions environments?\r\n  </summary>\r\n  <div class=\"tp-qa-answer\">\r\n    <p>b</p>\r\n  </div>\r\n</details>\r\n\r\n<details class=\"tp-qa-card\" data-qid=\"04gitlinuxcli-06networkingandsecurity-flash5\">\r\n  <summary class=\"tp-qa-question\">\r\n    <span class=\"tp-qa-status\"></span>\r\n    What happens when a pre-commit hook fails?\r\n  </summary>\r\n  <div class=\"tp-qa-answer\">\r\n    <p>b</p>\r\n  </div>\r\n</details>\r\n\r\n## Research References\r\n\r\n- Official documentation of the primary library for DevOps Automation (linked in Further Reading)\r\n- The classic paper or textbook chapter introducing DevOps Automation (see References below)\r\n- The standard library reference for DevOps Automation-related functions\r\n- Engineering blog posts from companies running DevOps Automation in production at scale\r\n- PEPs and RFCs where applicable (Python and networking standards)\r\n\r\n## Open-Source Tools\r\n\r\n- The primary library used in the code examples\r\n- pytest for unit and integration testing\r\n- ruff + black for linting and formatting\r\n- mypy for static type checking\r\n- cProfile / py-spy for performance profiling Automation\r\n\r\n## Debugging Guide\r\n\r\n- **Step 1**: Reproduce the failure with the smallest possible input — isolate the bug before changing any code.\r\n- **Step 2**: Add structured logging at each stage of the 06 Networking And Security pipeline to identify exactly where the failure occurs.\r\n- **Step 3**: Check the Common Mistakes section — 80% of bugs match one of those patterns.\r\n- **Step 4**: Use `pdb.set_trace()` or your IDE debugger to inspect intermediate values at the failure point.\r\n- **Step 5**: For performance issues, profile with `cProfile` or `py-spy` before optimizing — never guess at bottlenecks.\r\n- **Step 6**: Write a regression test that reproduces the bug before fixing it — this prevents recurrence.\r\n\r\n## Mock Interview Section\r\n\r\n**Round 1 — Screening (15 min)**\r\n- Explain DevOps Automation in 60 seconds.\r\n- Write a minimal working example of DevOps Automation.\r\n- What is the complexity of your example?\r\n\r\n**Round 2 — Coding (45 min)**\r\n- Solve the Medium exercise from this chapter under time pressure.\r\n- State your assumptions, then implement with type hints.\r\n- Test with edge cases: empty input, boundary values, invalid input.\r\n\r\n**Round 3 — Behavioral + System (30 min)**\r\n- Tell me about a time you debugged a DevOps Automation problem in a project.\r\n- How would you design a system where DevOps Automation is used at scale?\r\n- What metrics would you monitor?\r\n\r\n**Evaluation rubric**: correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%).\r\n\r\n## Optimized Implementation\r\n\r\n```python\r\nfrom typing import Any, Optional\r\n\r\ndef demonstrate_06_networking_and_security(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 06 Networking And Security.\r\n\r\n    Key concepts: commit, branch, merge, rebase, pull request\r\n    Complexity: O(n) for log, O(1) for checkout\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 06 Networking And Security here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keeps the function signature stable so tests written against it stay valid."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handles the empty-input contract explicitly."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add unit tests for the edge cases before implementing the logic (test-first)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "evaluation-metrics",
      children: "Evaluation Metrics"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Skill"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Test"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concept recall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain DevOps Automation without notes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-second explanation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code fluency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write the chapter example from memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No syntax errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle empty/invalid input in exercises"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All cases pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State time/space for the standard approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correct big-O"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interview readiness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Answer 5 Interview Q&A questions out loud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fluent, structured answers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter quiz score after 3 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80%+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-examples",
      children: "Real-World Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Applied in production at companies like Google, Meta, Amazon, and Microsoft"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used in data pipelines, model serving, and API backends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables scalable, maintainable systems when applied correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview insight: connect the concept to a business outcome — cost reduction, latency improvement, or reliability increase"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/07-ssh-and-remote-access",
        children: "SSH & Remote Access — Secure Shell, Key Management, Tunneling"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DevOps Automation, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of DevOps Automation depends on input size and distribution — always benchmark for your own data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone."
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