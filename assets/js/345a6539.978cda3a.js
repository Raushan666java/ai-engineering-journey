"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[54663],{

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
const site_docs_courses_ai_engineering_placement_04_git_linux_cli_06_networking_and_security_md_345_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/git-linux-cli/06-networking-and-security","title":"DevOps Automation","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/04-git-linux-cli/06-networking-and-security.md","sourceDirName":"courses/ai-engineering-placement/04-git-linux-cli","slug":"/ai-engineering-placement/04-git-linux-cli/06-networking-and-security","permalink":"/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/06-networking-and-security","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":59,"frontMatter":{"id":"06-networking-and-security","slug":"/ai-engineering-placement/04-git-linux-cli/06-networking-and-security","title":"DevOps Automation","sidebar_label":"DevOps Automation","sidebar_position":59},"sidebar":"placementSidebar","previous":{"title":"CLI Productivity","permalink":"/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/05-bash-scripting"},"next":{"title":"SSH & Remote Access — Secure Shell, Key Management, Tunneling","permalink":"/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/07-ssh-and-remote-access"}}');
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
	sidebar_position: 59
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
}];
function _createMdxContent(props) {
  const _components = {
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
        children: "flowchart LR\n    A[DevOps Automation] --> B[CI/CD Principles]\n    B --> C[GitHub Actions]\n    C --> D[Pre-Commit Hooks]\n    D --> E[Automated Testing]\n    E --> F[Deployment]\n    F --> G[Security]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Terms"
      }), ": Core vocabulary and concepts for this topic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition"
      }), ": Essential terms you must know for interviews and production work."]
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
        children: "flowchart LR\n    A[Code Commit] --> B[Build]\n    B --> C[Test]\n    C --> D[Scan]\n    D --> E[Deploy Staging]\n    E --> F[Manual Approval]\n    F --> G[Deploy Production]\n"
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
        children: "\n## .github/workflows/ci.yml\nname: CI Pipeline\n\non:\n  push:\n    branches: [main, develop]\n  pull_request:\n    branches: [main]\n\nenv:\n  NODE_VERSION: '20'\n\njobs:\n  lint:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n\n      - name: Setup Node.js\n        uses: actions/setup-node@v4\n        with:\n          node-version: ${{ env.NODE_VERSION }}\n\n      - name: Install dependencies\n        run: npm ci\n\n      - name: Run ESLint\n        run: npm run lint\n\n      - name: Run Prettier check\n        run: npm run format:check\n\n  test:\n    runs-on: ubuntu-latest\n    needs: lint\n    steps:\n      - uses: actions/checkout@v4\n\n      - name: Setup Node.js\n        uses: actions/setup-node@v4\n        with:\n          node-version: ${{ env.NODE_VERSION }}\n\n      - name: Install dependencies\n        run: npm ci\n\n      - name: Run unit tests\n        run: npm test\n\n      - name: Run integration tests\n        run: npm run test:integration\n\n      - name: Upload coverage\n        uses: codecov/codecov-action@v4\n        with:\n          token: ${{ secrets.CODECOV_TOKEN }}\n\n  build:\n    runs-on: ubuntu-latest\n    needs: test\n    steps:\n      - uses: actions/checkout@v4\n\n      - name: Setup Node.js\n        uses: actions/setup-node@v4\n        with:\n          node-version: ${{ env.NODE_VERSION }}\n\n      - name: Install and build\n        run: |\n          npm ci\n          npm run build\n\n      - name: Upload build artifact\n        uses: actions/upload-artifact@v4\n        with:\n          name: build-output\n          path: dist/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key workflow concepts:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "\n## Triggers\non:\n  push:           # When code is pushed\n  pull_request:   # When PR is opened/updated\n  schedule:       # Cron schedule\n    - cron: '0 2 * * 1'  # Every Monday at 2 AM\n  workflow_dispatch: # Manual trigger\n\n## Matrix strategy — test across multiple versions\njobs:\n  test:\n    strategy:\n      matrix:\n        node-version: [18, 20, 22]\n        os: [ubuntu-latest, windows-latest]\n    runs-on: ${{ matrix.os }}\n    steps:\n      - uses: actions/setup-node@v4\n        with:\n          node-version: ${{ matrix.node-version }}\n\n## Conditional steps\nsteps:\n  - name: Deploy\n    if: github.ref == 'refs/heads/main'\n    run: npm run deploy\n\n## Caching dependencies\n- uses: actions/cache@v4\n  with:\n    path: ~/.npm\n    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reusable workflows:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "\n## .github/workflows/reusable-build.yml\nname: Reusable Build\non:\n  workflow_call:\n    inputs:\n      node-version:\n        required: true\n        type: string\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: ${{ inputs.node-version }}\n      - run: npm ci && npm run build\n\n## Caller workflow\njobs:\n  build:\n    uses: ./.github/workflows/reusable-build.yml\n    with:\n      node-version: '20'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complete CI/CD pipeline with deploy:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "name: Full Pipeline\n\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  ci:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: '20'\n      - run: npm ci\n      - run: npm run lint\n      - run: npm test\n      - run: npm run build\n\n  deploy-staging:\n    if: github.ref == 'refs/heads/main'\n    needs: ci\n    runs-on: ubuntu-latest\n    environment: staging\n    steps:\n      - uses: actions/checkout@v4\n      - name: Deploy to staging\n        run: |\n          echo \"Deploying to staging...\"\n          # Deploy commands here\n        env:\n          DEPLOY_KEY: ${{ secrets.STAGING_DEPLOY_KEY }}\n\n  deploy-production:\n    if: github.ref == 'refs/heads/main'\n    needs: deploy-staging\n    runs-on: ubuntu-latest\n    environment:\n      name: production\n      url: https://app.example.com\n    steps:\n      - uses: actions/checkout@v4\n      - name: Deploy to production\n        run: |\n          echo \"Deploying to production...\"\n        env:\n          DEPLOY_KEY: ${{ secrets.PRODUCTION_DEPLOY_KEY }}\n"
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
        children: "\n## Install pre-commit\npip install pre-commit\n\n## Create .pre-commit-config.yaml\n\n## Install hooks\npre-commit install\n\n## Run against all files\npre-commit run --all-files\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: ".pre-commit-config.yaml:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "repos:\n  # General file checks\n  - repo: https://github.com/pre-commit/pre-commit-hooks\n    rev: v4.5.0\n    hooks:\n      - id: trailing-whitespace\n      - id: end-of-file-fixer\n      - id: check-yaml\n      - id: check-json\n      - id: check-added-large-files\n        args: ['--maxkb=500']\n      - id: check-merge-conflict\n      - id: detect-private-key\n\n  # Python\n  - repo: https://github.com/psf/black\n    rev: 24.1.0\n    hooks:\n      - id: black\n\n  - repo: https://github.com/pycqa/isort\n    rev: 5.13.0\n    hooks:\n      - id: isort\n\n  - repo: https://github.com/pycqa/flake8\n    rev: 7.0.0\n    hooks:\n      - id: flake8\n\n  # JavaScript/TypeScript\n  - repo: https://github.com/pre-commit/mirrors-eslint\n    rev: v8.56.0\n    hooks:\n      - id: eslint\n        files: \\.(js|ts|tsx)$\n\n  - repo: https://github.com/pre-commit/mirrors-prettier\n    rev: v3.1.0\n    hooks:\n      - id: prettier\n        types_or: [javascript, typescript, json, css]\n\n  # Security\n  - repo: https://github.com/gitleaks/gitleaks\n    rev: v8.18.0\n    hooks:\n      - id: gitleaks\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom pre-commit hooks:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "\n## .pre-commit-config.yaml\nrepos:\n  - repo: local\n    hooks:\n      - id: commit-message\n        name: Check commit message format\n        language: system\n        entry: bash -c 'msg=$(cat \"$1\"); if ! echo \"$msg\" | grep -qE \"^(feat|fix|docs|style|refactor|test|chore)(\\(.+\\))?: .{1,72}$\"; then echo \"Invalid commit message. Use: type(scope): description\"; exit 1; fi'\n        args: [COMMIT_MSG]\n        stages: [commit-msg]\n\n      - id: typecheck\n        name: TypeScript type check\n        language: system\n        entry: npx tsc --noEmit\n        files: \\.(ts|tsx)$\n        pass_filenames: false\n\n      - id: test-changed\n        name: Run tests for changed files\n        language: system\n        entry: bash -c 'changed=$(git diff --cached --name-only --diff-filter=ACM | grep -E \"\\.test\\.(ts|tsx)$\" | head -1); if [ -n \"$changed\" ]; then npm test -- --changedSince=HEAD; fi'\n        pass_filenames: false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Husky (JavaScript projects):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Install husky\nnpm install husky --save-dev\nnpx husky init\n\n## Add pre-commit hook\necho \"npm run lint && npm run test\" > .husky/pre-commit\n\n## Add commit-msg hook\necho \"npx commitlint --edit\" > .husky/commit-msg\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "commitlint configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// commitlint.config.js\nmodule.exports = {\n  extends: ['@commitlint/config-conventional'],\n  rules: {\n    'type-enum': [2, 'always', [\n      'feat', 'fix', 'docs', 'style', 'refactor',\n      'test', 'chore', 'perf', 'ci', 'build'\n    ]],\n    'subject-max-length': [2, 'always', 72],\n  },\n};\n"
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
        children: "flowchart TD\n    A[Commit] --> B[Lint + Format]\n    B --> C[Unit Tests]\n    C --> D[Integration Tests]\n    D --> E[E2E Tests]\n    E --> F[Performance Tests]\n    F --> G[Security Scan]\n    G --> H[Deploy]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Actions test workflow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "name: Tests\non: [push, pull_request]\n\njobs:\n  unit:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with: { node-version: '20' }\n      - run: npm ci\n      - run: npm run test:unit -- --coverage\n      - uses: actions/upload-artifact@v4\n        with:\n          name: coverage\n          path: coverage/\n\n  integration:\n    runs-on: ubuntu-latest\n    services:\n      postgres:\n        image: postgres:16\n        env:\n          POSTGRES_PASSWORD: test\n          POSTGRES_DB: testdb\n        ports: ['5432:5432']\n        options: >-\n          --health-cmd pg_isready\n          --health-interval 10s\n          --health-timeout 5s\n          --health-retries 5\n      redis:\n        image: redis:7\n        ports: ['6379:6379']\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with: { node-version: '20' }\n      - run: npm ci\n      - run: npm run test:integration\n        env:\n          DATABASE_URL: postgresql://postgres:test@localhost:5432/testdb\n          REDIS_URL: redis://localhost:6379\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test reporting:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "\n## Publish test results\n- uses: dorny/test-reporter@v1\n  if: always()\n  with:\n    name: Test Results\n    path: 'test-results/**/*.xml'\n    reporter: jest-junit\n\n## Code coverage with threshold\n- name: Check coverage\n  run: |\n    npx jest --coverage --coverageThreshold='{\"global\":{\"lines\":80,\"functions\":80}}'\n"
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
        children: "\n## GitHub Settings → Environments → production\n\n## Configure:\n\n## - Required reviewers\n\n## - Wait timer (e.g., 5 minutes)\n\n## - Deployment branches (only main)\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    environment:\n      name: production\n      url: https://app.example.com\n    steps:\n      - uses: actions/checkout@v4\n      - name: Deploy\n        run: ./deploy.sh\n        env:\n          API_KEY: ${{ secrets.API_KEY }}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Secrets management:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## GitHub Secrets (Settings → Secrets → Actions)\n\n## Store: API keys, deploy tokens, database URLs\n\n## Reference in workflows: ${{ secrets.SECRET_NAME }}\n\n## ⚠️ Never do this:\necho ${{ secrets.MY_SECRET }}  # Visible in logs\n\n## ✅ Use env to mask secrets:\n- run: deploy.sh\n  env:\n    API_KEY: ${{ secrets.API_KEY }}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blue-green deployment pattern:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "deploy:\n  runs-on: ubuntu-latest\n  steps:\n    - name: Deploy to green environment\n      run: |\n        # Deploy new version to green\n        ./deploy.sh green\n\n    - name: Run smoke tests\n      run: |\n        # Test green environment\n        curl -f https://green.example.com/health\n\n    - name: Switch traffic to green\n      run: |\n        # Update load balancer to point to green\n        ./switch-traffic.sh green\n\n    - name: Keep blue as rollback\n      run: |\n        # Blue remains available for instant rollback\n        echo \"Blue available at blue.example.com\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rollback strategy:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "deploy:\n  steps:\n    - name: Deploy\n      id: deploy\n      run: |\n        # Save current version for rollback\n        CURRENT=$(kubectl get deployment app -o jsonpath='{.spec.template.spec.containers[0].image}')\n        echo \"previous_version=$CURRENT\" >> $GITHUB_OUTPUT\n        # Deploy new version\n        kubectl set image deployment/app app=myapp:${{ github.sha }}\n\n    - name: Verify deployment\n      run: |\n        kubectl rollout status deployment/app --timeout=300s\n\n    - name: Rollback on failure\n      if: failure()\n      run: |\n        kubectl rollout undo deployment/app\n        echo \"Rolled back to ${{ steps.deploy.outputs.previous_version }}\"\n"
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
        children: "\n## Pin actions to specific commits (not tags)\n- uses: actions/checkout@b4ffde65f46336ab88eb53be808477a3936bae11  # v4.1.1\n\n## Use minimal permissions\npermissions:\n  contents: read\n  pull-requests: write\n  packages: write\n\n## Avoid script injection\n- run: echo \"Processing ${{ github.event.issue.title }}\"\n  # DANGEROUS if title contains shell commands\n  # Use env instead:\n- run: echo \"Processing $ISSUE_TITLE\"\n  env:\n    ISSUE_TITLE: ${{ github.event.issue.title }}\n\n## Don't upload artifacts from PRs from forks\n- uses: actions/upload-artifact@v4\n  if: github.event_name != 'pull_request'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Supply chain security:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "\n## Scan for vulnerabilities\n- uses: github/codeql-action/analyze@v3\n  with:\n    languages: javascript\n\n## Check for secrets in code\n- uses: gitleaks/gitleaks-action@v2\n  env:\n    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n\n## Verify dependency integrity\n- run: npm ci\n  # npm ci uses package-lock.json for deterministic installs\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Branch protection rules:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "GitHub Settings → Branches → Add rule:\n✅ Require pull request reviews (1+ approvals)\n✅ Require status checks (CI must pass)\n✅ Require branches to be up to date\n✅ Require conversation resolution\n✅ Require linear history (no merge commits)\n✅ Include administrators\n✅ Allow force pushes: never\n✅ Allow deletions: never\n```text\n\n**DevOps best practices checklist:**\n\n| Practice | Why It Matters |\n|----------|---------------|\n| Pin action versions to commits | Prevents supply chain attacks |\n| Use `npm ci` not `npm install` | Deterministic, uses lockfile |\n| Cache dependencies | Faster builds, lower costs |\n| Run tests in parallel | Faster feedback |\n| Use environment protection | Prevents accidental deploys |\n| Store secrets in vault | Never commit secrets |\n| Automate rollbacks | Faster recovery from failures |\n| Monitor deployments | Catch issues early |\n\n## Summary\n\n- CI/CD automates the path from commit to production — catch issues early\n- GitHub Actions workflows define build/test/deploy pipelines in YAML\n- Matrix testing ensures compatibility across OS and language versions\n- Pre-commit hooks enforce code quality before code enters the repository\n- Use the `pre-commit` framework or Husky for consistent local checks\n- Test in CI with services (databases, caches) using Docker containers\n- Protect secrets with GitHub Secrets — never echo them in logs\n- Pin actions to commit hashes for supply chain security\n- Branch protection rules enforce review and CI requirements\n- Blue-green deployments enable instant rollback\n\n## Practical Takeaways\n\n| Scenario | Tool/Approach |\n|----------|--------------|\n| CI for a Node.js project | GitHub Actions with matrix strategy |\n| Pre-commit linting | pre-commit framework + husky |\n| Test database in CI | GitHub Actions services (postgres, redis) |\n| Deploy to staging | GitHub Actions with environment protection |\n| Prevent secret leaks | GitHub Secrets + env references |\n| Fast CI builds | npm ci + actions/cache |\n| Safe production deploys | Blue-green with rollback on failure |\n\n## Interview Q&A\n\n<details class=\"tp-qa-card\" data-qid=\"git06-q1\">\n  <summary class=\"tp-qa-question\">\n    <span class=\"tp-qa-status\"></span>\n    Q1: What is the difference between continuous integration, delivery, and deployment?\n  </summary>\n  <div class=\"tp-qa-answer\">\n    <p><strong>Continuous Integration (CI)</strong>: Developers merge code frequently; automated builds and tests validate every change.</p>\n    <p><strong>Continuous Delivery (CD)</strong>: Extends CI — every passing change is automatically staged for release, but deployment to production requires manual approval.</p>\n    <p><strong>Continuous Deployment</strong>: Extends CD further — every passing change deploys to production automatically with no human intervention. The key difference is who gates production: human (delivery) vs automated (deployment).</p>\n  </div>\n  <button class=\"tp-qa-mark-btn\">Mark Reviewed</button>\n  <button class=\"tp-qa-bookmark-btn\">Bookmark</button>\n</details>\n\n<details class=\"tp-qa-card\" data-qid=\"git06-q2\">\n  <summary class=\"tp-qa-question\">\n    <span class=\"tp-qa-status\"></span>\n    Q2: How do you prevent secrets from being exposed in GitHub Actions logs?\n  </summary>\n  <div class=\"tp-qa-answer\">\n<p>1) Store secrets in GitHub Settings → Secrets → Actions. 2) Reference them as <code>${{ secrets.SECRET_NAME }}</code> in workflows. 3) Pass them as environment variables,.\nnever echo them directly. 4) GitHub automatically masks secrets in logs if accidentally printed. 5) Avoid script injection by not using secrets in <code>run:</code> echo statements — use <code>env:</code> instead. 6) Use OIDC tokens for.\ncloud credentials instead of long-lived secrets.</p>\n  </div>\n  <button class=\"tp-qa-mark-btn\">Mark Reviewed</button>\n  <button class=\"tp-qa-bookmark-btn\">Bookmark</button>\n</details>\n\n<details class=\"tp-qa-card\" data-qid=\"git06-q3\">\n  <summary class=\"tp-qa-question\">\n    <span class=\"tp-qa-status\"></span>\n    Q3: Why should you pin GitHub Actions to commit SHAs instead of tags?\n  </summary>\n  <div class=\"tp-qa-answer\">\n    <p>Tags like <code>@v4</code> are mutable — an attacker who compromises an action's repository can push malicious code under the same tag. Commit SHAs are immutable. Pinning to <code>@b4ffde65f46336ab88eb53be808477a3936bae11</code> ensures you always run the exact same code. Renovate or Dependabot can keep pinned versions updated automatically.</p>\n  </div>\n  <button class=\"tp-qa-mark-btn\">Mark Reviewed</button>\n  <button class=\"tp-qa-bookmark-btn\">Bookmark</button>\n</details>\n\n<details class=\"tp-qa-card\" data-qid=\"git06-q4\">\n  <summary class=\"tp-qa-question\">\n    <span class=\"tp-qa-status\"></span>\n    Q4: What problem do pre-commit hooks solve?\n  </summary>\n  <div class=\"tp-qa-answer\">\n<p>Pre-commit hooks run checks (linting, formatting, type checking, secret scanning) <strong>before</strong> each git commit. This catches issues at the earliest possible point — before code enters the repository or.\nCI pipeline. Benefits: faster feedback (local, no CI wait), consistent code quality, prevents broken code from being pushed, and reduces CI costs by catching simple issues early.</p>\n  </div>\n  <button class=\"tp-qa-mark-btn\">Mark Reviewed</button>\n  <button class=\"tp-qa-bookmark-btn\">Bookmark</button>\n</details>\n\n<details class=\"tp-qa-card\" data-qid=\"git06-q5\">\n  <summary class=\"tp-qa-question\">\n    <span class=\"tp-qa-status\"></span>\n    Q5: Describe a blue-green deployment strategy and its advantages.\n  </summary>\n  <div class=\"tp-qa-answer\">\n<p>Blue-green deployment maintains two identical production environments. \"Blue\" serves live traffic; \"green\" gets the new version. After testing green, traffic is switched instantly. Advantages: zero-downtime deployments,.\ninstant rollback (switch back to blue), ability to test the new version under real traffic before switching, and simple deployment process. Disadvantages: requires double the infrastructure resources.</p>\n  </div>\n  <button class=\"tp-qa-mark-btn\">Mark Reviewed</button>\n  <button class=\"tp-qa-bookmark-btn\">Bookmark</button>\n</details>\n\n## Chapter Quiz\n\n**Q1**: In GitHub Actions, what does the `needs` keyword do?\n\na) Specifies required secrets\nb) Defines job dependencies (a job waits for another to finish)\nc) Lists required environment variables\nd) Sets minimum runner requirements\n\n<details class=\"tp-qa-card\" data-qid=\"git06-quiz1\"><summary>Show Answer</summary><div class=\"tp-qa-answer\"><p><strong>Answer: b</strong></p><p><code>needs</code> defines job dependencies. A job with <code>needs: lint</code> won't start until the <code>lint</code> job completes successfully. This lets you build sequential pipelines: lint → test → build → deploy.</p></div></details>\n\n**Q2**: What does `npm ci` do that `npm install` doesn't?\n\na) Installs faster\nb) Deletes node_modules and installs exactly from package-lock.json\nc) Skips optional dependencies\nd) Runs tests after install\n\n<details class=\"tp-qa-card\" data-qid=\"git06-quiz2\"><summary>Show Answer</summary><div class=\"tp-qa-answer\"><p><strong>Answer: b</strong></p><p><code>npm ci</code> deletes <code>node_modules</code> and installs exactly what's in <code>package-lock.json</code>, ensuring deterministic builds. It never modifies <code>package-lock.json</code>. <code>npm install</code> may update the lockfile and can produce different dependency trees.</p></div></details>\n\n**Q3**: Which GitHub Actions feature allows testing across multiple Node.js versions?\n\na) services\nb) matrix strategy\nc) needs\nd) environment\n\n<details class=\"tp-qa-card\" data-qid=\"git06-quiz3\"><summary>Show Answer</summary><div class=\"tp-qa-answer\"><p><strong>Answer: b</strong></p><p>The <code>strategy.matrix</code> creates multiple job instances with different configurations. Example: test across Node 18, 20, 22 on both Ubuntu and Windows with 6 parallel jobs.</p></div></details>\n\n**Q4**: What is the purpose of GitHub Actions environments?\n\na) Define runner operating systems\nb) Group deployment targets with protection rules and secrets\nc) Set workflow-level permissions\nd) Cache build artifacts\n\n<details class=\"tp-qa-card\" data-qid=\"git06-quiz4\"><summary>Show Answer</summary><div class=\"tp-qa-answer\"><p><strong>Answer: b</strong></p><p>Environments (staging, production) can have protection rules: required reviewers, wait timers, and branch restrictions. They also scope secrets — staging secrets aren't available in production jobs.</p></div></details>\n\n**Q5**: What happens when a pre-commit hook fails?\n\na) The commit is created anyway\nb) The commit is blocked until the issue is fixed\nc) The hook is skipped automatically\nd) Git creates a backup and proceeds\n\n<details class=\"tp-qa-card\" data-qid=\"git06-quiz5\"><summary>Show Answer</summary><div class=\"tp-qa-answer\"><p><strong>Answer: b</strong></p><p>When a pre-commit hook exits with non-zero status, Git blocks the commit. The developer must fix the issue (format the code, remove secrets, etc.) and try again. This enforces quality standards before code enters the repository.</p></div></details>\n\n## Practical Tips\n\n- Start with a minimal CI: lint + unit tests — expand gradually\n- Use `npm ci` in CI for deterministic, faster installs\n- Cache dependencies with `actions/cache` — saves 30-60% build time\n- Run lint before tests — fail fast on style issues\n- Use GitHub Actions environments for staging/production separation\n- Pin third-party actions to commit SHAs, not tags\n- Add branch protection rules early — prevent force pushes and unreviewed code\n- Use `if: failure()` steps for automatic rollback notifications\n- Test CI changes on a feature branch before merging workflow changes\n\n## Exercises\n\n## Common Mistakes\n\n1. Not using CI/CD for all projects\n2. Hardcoding secrets in workflows\n3. Not running tests before deployment\n4. Forgetting to cache dependencies\n5. Not using branch protection rules**Easy** — Create a GitHub Actions workflow that runs ESLint and Prettier on every push. Verify it passes on a clean commit and fails on a file with lint errors.\n\n**Medium** — Set up a pre-commit config with trailing-whitespace, end-of-file-fixer, and a custom hook that checks commit message format follows conventional commits.\n\n**Medium** — Build a CI pipeline with matrix testing across Node 18 and 20, include a PostgreSQL service container for integration tests, and upload coverage reports.\n\n**Hard** — Implement a complete CI/CD pipeline: lint → test → build → deploy to staging (with environment protection) → manual approval → deploy to production. Include rollback on failure.\n\n---\n\n> **End of Module 04**: [Back to Module Index →](\n\n## Revision Notes\n\n- CI: test on every push\n- CD: deploy automatically after tests pass\n- GitHub Actions: YAML-based workflows\n- Pre-commit hooks: lint before commit\n- Secrets: never commit, use CI/CD secrets\n\n## Placement Section\n\n### Top 10 Interview Questions\n\n#### Google Style\n\n1. **Explain the core idea of DevOps Automation in under 60 seconds, then give a real-world analogy.** — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?\n\n2. **Design a minimal, well-typed function that demonstrates DevOps Automation.** — Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?\n\n3. **What are the common pitfalls when engineers first learn ** — List 3-4, then explain how you would prevent each in a code review.\n\n#### Amazon Style\n\n4. **Describe a production bug caused by misunderstanding DevOps Automation. How did you diagnose and fix it?** — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added.\n\n5. **How would you scale a system that relies on DevOps Automation from 10 users to 10 million?** — Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?\n\n#### Microsoft Style\n\n6. **Compare DevOps Automation with the closest alternative approach. When would you choose each?** — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?\n\n7. **Walk through how you would test a component that depends on DevOps Automation.** — Unit, integration, property-based tests; mocking boundaries; golden files for outputs.\n\n#### NVIDIA Style\n\n8. **How does DevOps Automation behave differently at scale — memory, throughput, or precision-wise?** — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?\n\n9. **How would you make an implementation of DevOps Automation run faster on GPU hardware?** — Batch operations, vectorization, avoiding Python loops, reducing data movement.\n\n#### AI Startup Style\n\n10. **Write the smallest possible implementation of DevOps Automation that is production-quality.** — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?\n\n### Resume Tips\n\n- Name DevOps Automation explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using DevOps Automation\").\n- Add a bullet describing a project that applies DevOps Automation to real data, with numbers.\n- Mention the tools and libraries you used alongside DevOps Automation (linters, test frameworks, profiling tools).\n- Keep resume bullets under 15 words and start each with an action verb.\n\n### Interview Day Checklist\n\n- Rehearse a 60-second explanation of DevOps Automation and one real-world analogy.\n- Prepare one STAR story about debugging a DevOps Automation-related production issue.\n- Review complexity and edge cases for the classic DevOps Automation interview problem.\n- Have questions ready: how does the team apply DevOps Automation in production today?\n- Test your environment (Python, editor, internet) 15 minutes before the interview.\n\n## True/False\n\n1. **True or False:** DevOps Automation builds directly on the fundamentals covered in the earlier chapters of this module. — **True.** Every advanced topic in this module assumes the core concepts from the previous chapters.\n2. **True or False:** You should write at least one code example for DevOps Automation before moving to the next chapter. — **True.** Active recall with hands-on code beats passive reading for retention.\n3. **True or False:** The complexity analysis for DevOps Automation is the same regardless of input size. — **False.** Complexity grows with input size; always state best, average, and worst case.\n4. **True or False:** Edge cases (empty input, invalid input, boundary values) matter for DevOps Automation in production. — **True.** Most production bugs come from unhandled edge cases.\n5. **True or False:** You should memorize the DevOps Automation chapter content once and never review it again. — **False.** Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall.\n\n## Fill in the Blank\n\n1. The chapter that covers DevOps Automation is Chapter ___ of this module. — Answer: check the module's table of contents.\n2. The time complexity of the standard approach to DevOps Automation is ___. — Answer: review the theory section and state big-O notation.\n3. The main edge case to handle when implementing DevOps Automation is ___. — Answer: empty or invalid input handling, as discussed in the chapter.\n4. The tools commonly used to debug DevOps Automation issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter.\n5. The related topic that connects to DevOps Automation in the next chapter is ___. — Answer: see the Next Topic section.\n\n## Scenario Questions\n\n1. **Scenario:** A teammate ships a change involving DevOps Automation that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist.\n\n2. **Scenario:** Your implementation of DevOps Automation is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes.\n\n3. **Scenario:** A new hire asks you to explain DevOps Automation in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo.\n\n4. **Scenario:** Your team's codebase has three different patterns for DevOps Automation and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it.\n\n## Output Questions\n\n1. **What is the output of the simplest correct implementation of DevOps Automation on an empty input?** — Trace through the code: it should return the documented default (None, 0, empty collection) without raising.\n2. **What is the output when the input is at the boundary value?** — Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples.\n3. **What does the implementation return when given invalid input types?** — With type hints and validation, it raises a clear error; without, it may fail silently.\n4. **What is the output for the sample input given in the chapter's Examples section?** — Re-run the chapter's example code and compare against the documented output.\n5. **What is the time complexity output when you profile the implementation at 10x input size?** — Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear).\n\n## Difficulty Level\n\n| Level | Time | What It Takes |\n|-------|------|---------------|\n| Beginner | 1-2 sessions | Read theory, run the chapter examples, solve the Easy exercises |\n| Intermediate | 3-5 sessions | Complete Medium exercises, explain DevOps Automation to someone else |\n| Advanced | 1+ week | Solve Hard exercises, optimize for real datasets, answer interview follow-ups |\n\n## Tips & Tricks\n\n- Always write a one-line example of DevOps Automation from memory before opening the chapter — active recall first.\n- Use the chapter's Revision Notes as a checklist: you have mastered DevOps Automation when you can explain each bullet.\n- Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus.\n- For interviews, practice explaining DevOps Automation twice: once with a technical audience, once with a non-technical audience.\n- Keep a personal examples file where you collect your own DevOps Automation snippets; interviewers love original examples.\n\n## Memory Tricks\n\n- **Acronym**: build a mnemonic from the 5 key concepts of DevOps Automation listed in the Chapter at a Glance table.\n- **Story**: link DevOps Automation to a familiar story — the analogy in the Visual Analogy section is designed to stick.\n- **Number anchor**: remember the complexity of DevOps Automation by connecting it to a known algorithm of the same class.\n- **Color code**: highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing.\n- **Teach-back**: explain DevOps Automation to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory.\n\n## Further Reading\n\n- Official documentation for the primary tool or library used in this chapter\n- The chapter referenced in Related Topics for the next-level treatment of DevOps Automation\n- The classic textbook chapter on DevOps Automation (check the Research References below)\n- Two blog posts from engineers who debugged real DevOps Automation problems in production\n- The repository of the open-source project that implements DevOps Automation\n\n## Related Topics\n\n- The previous chapter in this module (see table of contents) — foundational for DevOps Automation\n- The next chapter (see Next Topic below) — builds on DevOps Automation\n- The system design chapters in Module 07 — how DevOps Automation fits into production architectures\n- The interview preparation module — how DevOps Automation is asked in screening rounds\n- The capstone project — where DevOps Automation is applied end-to-end\n\n## FAQs\n\n1. **Do I need to memorize all of DevOps Automation, or understand the big picture?** — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth.\n2. **What if I get stuck on an exercise?** — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day.\n3. **How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation.\n4. **Is DevOps Automation asked in interviews?** — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies.\n5. **What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days.\n\n## Important Notes\n\n- DevOps Automation is a core requirement for the rest of this module — do not skip the examples.\n- Always analyze complexity (time and space) when working with DevOps Automation.\n- Production correctness means handling edge cases, not just the happy path.\n- Interview answers should start with the definition, then the example, then the trade-offs.\n- Revisit this chapter after finishing the module; the context from later chapters deepens understanding.\n\n## Historical Context\n\n- DevOps Automation emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews.\n- The tools used for DevOps Automation today evolved from simpler versions; the chapter covers the modern, recommended approach.\n- Interviewers value knowing one historical fact about DevOps Automation — it shows genuine interest, not just cramming.\n- The library/tooling ecosystem around DevOps Automation changes quickly; focus on fundamentals that remain stable.\n\n## Security Considerations\n\n- Never trust external input: validate and sanitize data before processing DevOps Automation.\n- Avoid `eval()` and dynamic code execution on untrusted strings.\n- Log errors without leaking sensitive data (keys, PII, internal paths).\n- For API contexts, add rate limiting and input size limits.\n- Review the chapter's code examples for injection or overflow risks before using them verbatim.\n\n## ML Intuition\n\n- DevOps Automation appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation.\n- Understanding DevOps Automation helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs.\n- In production ML, the DevOps Automation concepts from this chapter map directly to NumPy/PyTorch operations on tensors.\n- When optimizing ML systems, DevOps Automation skills let you profile and fix the data path, not just the training loop.\n- Interview follow-up: how would you apply DevOps Automation to a dataset of 10 million records? — Batching and vectorization.\n\n## Analogies\n\n- **DevOps Automation is like a recipe**: the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice.\n- **Complexity is like a delivery route**: a linear route visits each stop once; a nested route revisits stops, and you feel it at scale.\n- **Edge cases are like weather**: the happy path is a sunny day; production is the storm — build for the storm.\n- **The chapter roadmap is a journey map**: each section is a checkpoint; skipping one means getting lost later in the module.\n\n## Capstone Project Link\n\n- [Module Capstone: End-to-End Project](https://github.com/Raushan666java/ai-engineering-journey) — this chapter contributes the DevOps Automation skills used in the module's capstone project. Complete the exercises here before starting the capstone.\n\n## Flashcards\n\n<details class=\"tp-qa-card\" data-qid=\"04gitlinuxcli-06networkingandsecurity-flash1\">\n  <summary class=\"tp-qa-question\">\n    <span class=\"tp-qa-status\"></span>\n    In GitHub Actions, what does the needs keyword do?\n  </summary>\n  <div class=\"tp-qa-answer\">\n    <p>b</p>\n  </div>\n</details>\n\n<details class=\"tp-qa-card\" data-qid=\"04gitlinuxcli-06networkingandsecurity-flash2\">\n  <summary class=\"tp-qa-question\">\n    <span class=\"tp-qa-status\"></span>\n    What does npm ci do that npm install doesn't?\n  </summary>\n  <div class=\"tp-qa-answer\">\n    <p>b</p>\n  </div>\n</details>\n\n<details class=\"tp-qa-card\" data-qid=\"04gitlinuxcli-06networkingandsecurity-flash3\">\n  <summary class=\"tp-qa-question\">\n    <span class=\"tp-qa-status\"></span>\n    Which GitHub Actions feature allows testing across multiple Node.js versions?\n  </summary>\n  <div class=\"tp-qa-answer\">\n    <p>b</p>\n  </div>\n</details>\n\n<details class=\"tp-qa-card\" data-qid=\"04gitlinuxcli-06networkingandsecurity-flash4\">\n  <summary class=\"tp-qa-question\">\n    <span class=\"tp-qa-status\"></span>\n    What is the purpose of GitHub Actions environments?\n  </summary>\n  <div class=\"tp-qa-answer\">\n    <p>b</p>\n  </div>\n</details>\n\n<details class=\"tp-qa-card\" data-qid=\"04gitlinuxcli-06networkingandsecurity-flash5\">\n  <summary class=\"tp-qa-question\">\n    <span class=\"tp-qa-status\"></span>\n    What happens when a pre-commit hook fails?\n  </summary>\n  <div class=\"tp-qa-answer\">\n    <p>b</p>\n  </div>\n</details>\n\n## Research References\n\n- Official documentation of the primary library for DevOps Automation (linked in Further Reading)\n- The classic paper or textbook chapter introducing DevOps Automation (see References below)\n- The standard library reference for DevOps Automation-related functions\n- Engineering blog posts from companies running DevOps Automation in production at scale\n- PEPs and RFCs where applicable (Python and networking standards)\n\n## Open-Source Tools\n\n- The primary library used in this chapter (see the code examples)\n- Python standard library modules used in the examples (check the imports)\n- Testing: pytest for unit tests of DevOps Automation code\n- Linting and formatting: ruff + black\n- Profiling: cProfile or py-spy for performance work on DevOps Automation\n\n## Debugging Guide\n\n- Start with `print()` or a debugger to inspect intermediate values in DevOps Automation code.\n- Reproduce the failure with the smallest possible input before changing code.\n- Check the common failure modes listed in Common Mistakes — most bugs are listed there.\n- For performance problems, profile before optimizing: measure, then fix.\n- When stuck, re-read the chapter's Examples and compare line by line with your code.\n- Use `pdb` or your IDE's debugger to step through the DevOps Automation example code.\n\n## Mock Interview Section\n\n**Round 1 — Screening (15 min)**\n- Explain DevOps Automation in 60 seconds.\n- Write a minimal working example of DevOps Automation.\n- What is the complexity of your example?\n\n**Round 2 — Coding (45 min)**\n- Solve the Medium exercise from this chapter under time pressure.\n- State your assumptions, then implement with type hints.\n- Test with edge cases: empty input, boundary values, invalid input.\n\n**Round 3 — Behavioral + System (30 min)**\n- Tell me about a time you debugged a DevOps Automation problem in a project.\n- How would you design a system where DevOps Automation is used at scale?\n- What metrics would you monitor?\n\n**Evaluation rubric**: correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%).\n\n## Optimized Implementation\n\n`python\nfrom typing import Any, Optional\n\ndef demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n    \"\"\"Runnable scaffold for DevOps Automation.\n\n    Replace the body with the optimized implementation from the chapter,\n    keeping type hints, docstring, and edge-case handling.\n    \"\"\"\n    if not input_data:\n        return None\n    # Step 1: validate input types\n    # Step 2: apply the core DevOps Automation logic from the Examples section\n    # Step 3: return the result with the documented default\n    return 0.0\n`\n\n- Keeps the function signature stable so tests written against it stay valid.\n- Handles the empty-input contract explicitly.\n- Add unit tests for the edge cases before implementing the logic (test-first).\n\n## Evaluation Metrics\n\n| Skill | Test | Target |\n|-------|------|--------|\n| Concept recall | Explain DevOps Automation without notes | 60-second explanation |\n| Code fluency | Write the chapter example from memory | No syntax errors |\n| Edge cases | Handle empty/invalid input in exercises | All cases pass |\n| Complexity | State time/space for the standard approach | Correct big-O |\n| Interview readiness | Answer 5 Interview Q&A questions out loud | Fluent, structured answers |\n| Retention | Chapter quiz score after 3 days | 80%+ |\n\n## Real-World Examples\n\n- **Startup**: a small team uses DevOps Automation daily in their data pipeline — the chapter's examples mirror their code.\n- **E-commerce**: DevOps Automation patterns appear in order processing, inventory checks, and recommendation feeds.\n- **Fintech**: DevOps Automation principles apply to transaction validation and fraud detection flows.\n- **ML platform**: DevOps Automation shows up in feature engineering and model-serving infrastructure.\n- **Interview insight**: recruiters look for engineers who can connect DevOps Automation to the business outcome, not just the code.\n\n## Next Topic\n\n[SSH & Remote Access — Secure Shell, Key Management, Tunneling](07-ssh-and-remote-access.md)\n\n## Limitations\n\n- DevOps Automation, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory).\n- The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling.\n- Performance of DevOps Automation depends on input size and distribution — always benchmark for your own data.\n- This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone.\n"
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