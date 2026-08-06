"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[19005],{

/***/ 94345
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_devops_14_devsecops_md_3c1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-devops-14-devsecops-md-3c1.json
const site_docs_courses_devops_14_devsecops_md_3c1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/devops/14-devsecops","title":"Chapter 14: DevSecOps","description":"Previous Database DevOps","source":"@site/docs/courses/devops/14-devsecops.md","sourceDirName":"courses/devops","slug":"/devops/14-devsecops","permalink":"/ai-engineering-journey/devops/14-devsecops","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":23,"frontMatter":{"id":"14-devsecops","slug":"/devops/14-devsecops","title":"Chapter 14: DevSecOps","sidebar_label":"Chapter 14: DevSecOps","sidebar_position":23},"sidebar":"coursesSidebar","previous":{"title":"Chapter 13: Observability","permalink":"/ai-engineering-journey/devops/13-observability"},"next":{"title":"Chapter 15: Database DevOps","permalink":"/ai-engineering-journey/devops/15-database-devops"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/devops/14-devsecops.md


const frontMatter = {
	id: '14-devsecops',
	slug: '/devops/14-devsecops',
	title: 'Chapter 14: DevSecOps',
	sidebar_label: 'Chapter 14: DevSecOps',
	sidebar_position: 23
};
const contentTitle = 'Chapter 14: DevSecOps';

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
  "value": "14.1 Shift-Left Security",
  "id": "141-shift-left-security",
  "level": 3
}, {
  "value": "14.2 SAST (Static Application Security Testing)",
  "id": "142-sast-static-application-security-testing",
  "level": 3
}, {
  "value": "14.3 DAST (Dynamic Application Security Testing)",
  "id": "143-dast-dynamic-application-security-testing",
  "level": 3
}, {
  "value": "14.4 SCA (Software Composition Analysis)",
  "id": "144-sca-software-composition-analysis",
  "level": 3
}, {
  "value": "14.5 Container Scanning",
  "id": "145-container-scanning",
  "level": 3
}, {
  "value": "14.6 Secret Scanning",
  "id": "146-secret-scanning",
  "level": 3
}, {
  "value": "14.7 SBOM Generation and Verification",
  "id": "147-sbom-generation-and-verification",
  "level": 3
}, {
  "value": "14.8 Policy as Code",
  "id": "148-policy-as-code",
  "level": 3
}, {
  "value": "14.9 Supply Chain Security",
  "id": "149-supply-chain-security",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Security Pipeline Integration",
  "id": "example-1-security-pipeline-integration",
  "level": 3
}, {
  "value": "Example 2: OPA Policy Validator",
  "id": "example-2-opa-policy-validator",
  "level": 3
}, {
  "value": "Example 3: SBOM Analyzer",
  "id": "example-3-sbom-analyzer",
  "level": 3
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
  "value": "SAST/DAST Scanner Wrapper",
  "id": "sastdast-scanner-wrapper",
  "level": 3
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
        id: "chapter-14-devsecops",
        children: "Chapter 14: DevSecOps"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/13-observability",
          children: "Observability"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/15-database-devops",
          children: "Database DevOps"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
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
        href: "../../assets/images/lessons/devops/14-devsecops/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/14-devsecops/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/devops/14-devsecops/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/14-devsecops/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/devops/14-devsecops/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/14-devsecops/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the shift-left security principle and its impact on software development"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate SAST tools (SonarQube, Semgrep, CodeQL) into CI/CD pipelines"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure DAST scanning using OWASP ZAP and Burp Suite"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement software composition analysis with Snyk, Dependabot, Trivy, and Grype"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scan container images for vulnerabilities using Trivy, Clair, and Docker Scout"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detect secrets in source code with GitLeaks and TruffleHog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enforce security policies using OPA and Kyverno"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate and verify SBOMs for software supply chain security"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "Shift-Left Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrate security earlier in development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10-100x cost difference finding vulns in design vs production"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAST Tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source code analysis without execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SonarQube, Semgrep, CodeQL for CI/CD integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DAST Tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Running application attack simulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OWASP ZAP, Burp Suite for dynamic testing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCA Tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open-source dependency vulnerability scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Snyk, Dependabot, Trivy, Grype for supply chain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Container Scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image vulnerability detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan images before push and in registries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Secret Scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevent credential leakage in code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GitLeaks, TruffleHog for pre-commit hooks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Policy as Code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OPA/Kyverno for policy enforcement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decouple policy from application logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SBOM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Software Bill of Materials inventory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate with Syft, verify with Cosign"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Shift-Left Security] --> B[SAST]\n    A --> C[DAST]\n    A --> D[SCA]\n    A --> E[Container Scan]\n    A --> F[Secret Scan]\n    A --> G[SBOM]\n    B & C & D & E & F & G --> H[Policy as Code]\n    H --> I[OPA/Rego]\n    H --> J[Kyverno]\n    I & J --> K[Admission Control]\n    K --> L[Secure Supply Chain]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "141-shift-left-security",
      children: "14.1 Shift-Left Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Shift-left security integrates security practices earlier in the software development lifecycle. Traditional security performed a penetration test shortly before release, discovering vulnerabilities that were expensive to fix. Shift-left makes security a continuous concern throughout development."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Cost of Finding Vulnerabilities Later:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase Found"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Relative Fix Cost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Staging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Production"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100x+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Earlier detection reduces remediation cost (10-100x)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Developers own security outcomes rather than delegating to security teams"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security automation scales better than manual review through CI/CD integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Continuous compliance through policy-as-code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Faster feedback loops for security issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "142-sast-static-application-security-testing",
      children: "14.2 SAST (Static Application Security Testing)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SAST analyzes source code for security vulnerabilities without executing the application. It scans at the code level, identifying potential vulnerabilities before the code runs."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SonarQube"
      }), " — Continuous code quality and security inspection platform:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyzes 30+ programming languages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reports bugs, vulnerabilities, code smells, security hotspots"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality gates that fail CI/CD pipelines"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Built-in rules for OWASP Top 10, CWE Top 25"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports custom rules and quality profiles"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Semgrep"
      }), " — Lightweight static analysis using pattern-based rules:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom rules in a simple, readable syntax"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Community rule registry (Semgrep Registry) with 2000+ rules"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OWASP Top 10, CWE Top 25, and framework-specific vulnerabilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fast execution (typically seconds per scan)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports 30+ languages"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Semgrep rule: detect hardcoded passwords\nrules:\n  - id: hardcoded-password\n    patterns:\n      - pattern: |\n          $PASSWORD = \"...\"\n      - metavariable-regex:\n          metavariable: $PASSWORD\n          regex: (password|passwd|pwd)\n    message: \"Hardcoded password detected\"\n    languages: [python, javascript, go]\n    severity: ERROR\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CodeQL"
      }), " — Semantic code analysis by GitHub:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Treats code as data for query-based security analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deep analysis identifies complex vulnerabilities (injection, XSS, path traversal)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrated with GitHub Advanced Security"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports C, C++, C#, Go, Java, JavaScript/TypeScript, Python, Ruby"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "143-dast-dynamic-application-security-testing",
      children: "14.3 DAST (Dynamic Application Security Testing)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DAST tests running applications for vulnerabilities by simulating attacks from the outside. Unlike SAST, DAST tests the application in its running state with all components active."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "OWASP ZAP"
      }), " — Open-source web application scanner:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated scanning, passive scanning, active scanning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API scanning (OpenAPI, GraphQL, SOAP)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CI/CD integration via Docker"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spidering and AJAX spider for crawling applications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Authentication handling for testing authenticated areas"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run ZAP full scan against a target\ndocker run -v $(pwd):/zap/wrk owasp/zap2docker-stable \\\n  zap-full-scan.py -t https://staging.example.com \\\n  -r zap_report.html\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Burp Suite"
      }), " — Professional web security testing tool:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Burp Enterprise automates scanning in CI/CD"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scanning engine identifies SQL injection, XSS, SSRF, authentication bypass"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extensible through BApps (community and pro extensions)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeater and Intruder for manual testing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "144-sca-software-composition-analysis",
      children: "14.4 SCA (Software Composition Analysis)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SCA analyzes open-source dependencies for known vulnerabilities, license compliance, and outdated versions. Modern applications consist of 80-90% open-source code, making SCA critical."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Snyk"
      }), " — Developer-first security platform:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scans dependencies, container images, and IaC configurations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides fix suggestions and automated pull requests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitors projects continuously between scans"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports multiple languages and package managers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Policy engine for custom vulnerability thresholds"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dependabot"
      }), " — GitHub-native dependency update tool:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Creates pull requests for vulnerable dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configurable update schedule and version constraints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Groups related updates together"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Native GitHub integration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Dependabot configuration\nversion: 2\nupdates:\n  - package-ecosystem: \"npm\"\n    directory: \"/\"\n    schedule:\n      interval: \"weekly\"\n    open-pull-requests-limit: 10\n    labels:\n      - \"dependencies\"\n      - \"security\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trivy"
      }), " — Comprehensive vulnerability scanner:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scans filesystems, container images, Git repos, Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fast execution, no database required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reports CVSS scores and fix versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports multiple vulnerability databases (NVD, GitHub Advisory, RedHat, Alpine)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Grype"
      }), " — Vulnerability scanner focused on accuracy:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple vulnerability database sources"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generates CycloneDX SBOM output"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cataloger-based package discovery"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Matches packages against vulnerability databases"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "145-container-scanning",
      children: "14.5 Container Scanning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Container images must be scanned for OS packages and application dependencies with known vulnerabilities."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scanning Locations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pre-build"
        }), " — Scan Dockerfile for misconfigurations and base image vulnerabilities"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Post-build"
        }), " — Scan the built image before pushing to registry"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Registry"
        }), " — Continuous scanning of stored images"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Runtime"
        }), " — Monitor running containers for new vulnerability disclosures"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Scan image before push\ntrivy image myapp:latest --severity HIGH,CRITICAL --exit-code 1\n\n# Scan in registry\ntrivy image registry.example.com/myapp:latest\n\n# Scan filesystem\ntrivy fs --severity HIGH,CRITICAL .\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Docker Scout"
      }), " — Docker-native vulnerability scanning:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Policy evaluation with customizable rules"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remediation guidance with step-by-step fixes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SBOM generation and comparison"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrated with Docker Desktop and Docker Hub"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "146-secret-scanning",
      children: "14.6 Secret Scanning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Secrets (API keys, passwords, tokens, certificates) committed to source code represent immediate security risks."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GitLeaks"
      }), " — Detects secrets in Git repositories:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scans commits, diffs, and directories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Customizable rule sets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pre-commit hooks for local scanning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Scan entire repository history\ngitleaks detect --source . --verbose\n\n# Scan pre-commit\ngitleaks protect --staged\n\n# Scan CI pipeline\ngitleaks detect --source . --report-path gitleaks-report.json\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "TruffleHog"
      }), " — Scans Git repositories for secrets:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Entropy detection finds high-entropy strings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regex matching for known patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom detectors for specific secrets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Structured data scanning for JSON, YAML, .env files"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "147-sbom-generation-and-verification",
      children: "14.7 SBOM Generation and Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Software Bill of Materials provides an inventory of all components in a software artifact. SBOMs enable known vulnerability correlation, supply chain risk assessment, and regulatory compliance (Executive Order 14028)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Generate SBOM with Syft\nsyft packages myapp:latest -o cyclonedx-json > sbom.json\n\n# Verify vulnerabilities against SBOM\ngrype sbom:sbom.json\n\n# Create signed attestation\ncosign attest --predicate sbom.json --key cosign.key myapp:latest\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SBOM Formats:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CycloneDX"
        }), " — OWASP standard, most commonly used for security"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SPDX"
        }), " — ISO standard, commonly used for license compliance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SWID"
        }), " — ISO standard for software identification tags"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SBOM Use Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vulnerability scanning against known CVEs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "License compliance auditing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supply chain risk assessment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rapid incident response (Log4Shell, Heartbleed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regulatory compliance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "148-policy-as-code",
      children: "14.8 Policy as Code"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Open Policy Agent (OPA)"
      }), " — General-purpose policy engine:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decouples policy from software"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Policies in Rego, a declarative language"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enforces policies on arbitrary JSON data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrates with Kubernetes as an admission controller"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-rego",
        children: "# OPA policy: containers must not run as root\npackage kubernetes.admission\n\ndeny[msg] {\n  input.request.kind.kind == \"Pod\"\n  container := input.request.object.spec.containers[_]\n  not container.securityContext.runAsNonRoot\n  msg := sprintf(\"Container %v must set runAsNonRoot=true\", [container.name])\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Kyverno"
      }), " — Kubernetes-native policy engine:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Policies are Kubernetes Custom Resources"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports validate, mutate, generate, and verify patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Built-in 200+ policy library"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Policy reports for compliance evidence"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: kyverno.io/v1\nkind: ClusterPolicy\nmetadata:\n  name: require-labels\nspec:\n  validationFailureAction: enforce\n  rules:\n    - name: check-team-label\n      match:\n        any:\n          - resources:\n              kinds: [\"Pod\", \"Deployment\"]\n      validate:\n        message: \"Label 'team' is required\"\n        pattern:\n          metadata:\n            labels:\n              team: \"?*\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "149-supply-chain-security",
      children: "14.9 Supply Chain Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Supply chain security protects the software development and delivery pipeline from compromise:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dependency pinning"
        }), " — Lock dependency versions to prevent unexpected updates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Signed commits"
        }), " — GPG or SSH signing for commit authenticity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Image signing"
        }), " — Cosign for container image signatures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SLSA levels"
        }), " — Supply-chain Levels for Software Artifacts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Admission control"
        }), " — OPA/Kyverno verifying image signatures before deployment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Provenance"
        }), " — SLSA provenance attestations for build process integrity"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-security-pipeline-integration",
      children: "Example 1: Security Pipeline Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface SecurityTool {\n  name: string;\n  category: 'sast' | 'dast' | 'sca' | 'container' | 'secret' | 'sbom';\n  run: () => Promise<ScanResult>;\n}\n\ninterface ScanResult {\n  tool: string;\n  passed: boolean;\n  critical: number;\n  high: number;\n  medium: number;\n  low: number;\n  findings: Array<{ id: string; severity: string; message: string }>;\n}\n\nclass SecurityPipeline {\n  private tools: SecurityTool[] = [];\n  private results: ScanResult[] = [];\n\n  addTool(tool: SecurityTool): void {\n    this.tools.push(tool);\n  }\n\n  async runAll(): Promise<boolean> {\n    console.log('Starting security pipeline...\\n');\n\n    for (const tool of this.tools) {\n      try {\n        const result = await tool.run();\n        this.results.push(result);\n        const icon = result.passed ? '?' : '?';\n        console.log(`${icon} ${result.tool}: ${result.critical + result.high} HIGH/CRITICAL findings`);\n      } catch (error) {\n        this.results.push({\n          tool: tool.name, passed: false, critical: 0, high: 0, medium: 0, low: 0,\n          findings: [{ id: 'ERROR', severity: 'critical', message: String(error) }],\n        });\n        console.log(`? ${tool.name}: ERROR - ${error}`);\n      }\n    }\n\n    return this.evaluateGates();\n  }\n\n  private evaluateGates(): boolean {\n    const failed = this.results.filter(r => !r.passed);\n    if (failed.length > 0) {\n      console.log('\\n? Pipeline blocked: Security gates failed');\n      for (const f of failed) {\n        console.log(`   - ${f.tool}: ${f.critical} critical, ${f.high} high findings`);\n      }\n      return false;\n    }\n\n    console.log('\\n? All security gates passed');\n    return true;\n  }\n\n  generateReport(): string {\n    let report = '# Security Scan Report\\n\\n';\n    report += '| Tool | Category | Status | Critical | High | Medium | Low |\\n';\n    report += '|------|----------|--------|----------|------|--------|-----|\\n';\n\n    for (const r of this.results) {\n      const status = r.passed ? '? Pass' : '? Fail';\n      report += `| ${r.tool} | ${r.tool} | ${status} | ${r.critical} | ${r.high} | ${r.medium} | ${r.low} |\\n`;\n    }\n\n    return report;\n  }\n}\n\nconst pipeline = new SecurityPipeline();\npipeline.addTool({ name: 'Semgrep', category: 'sast', run: async () => ({ tool: 'Semgrep', passed: true, critical: 0, high: 2, medium: 5, low: 10, findings: [] }) });\npipeline.addTool({ name: 'Trivy', category: 'container', run: async () => ({ tool: 'Trivy', passed: true, critical: 0, high: 1, medium: 3, low: 8, findings: [] }) });\npipeline.addTool({ name: 'GitLeaks', category: 'secret', run: async () => ({ tool: 'GitLeaks', passed: true, critical: 0, high: 0, medium: 0, low: 0, findings: [] }) });\n\npipeline.runAll().then(console.log);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-opa-policy-validator",
      children: "Example 2: OPA Policy Validator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface AdmissionRequest {\n  kind: { kind: string; apiVersion: string };\n  object: Record<string, unknown>;\n}\n\ninterface PolicyRule {\n  id: string;\n  description: string;\n  evaluate: (request: AdmissionRequest) => { allowed: boolean; message?: string };\n}\n\nclass OPAAdmissionController {\n  private policies: PolicyRule[] = [];\n\n  addPolicy(policy: PolicyRule): void {\n    this.policies.push(policy);\n  }\n\n  validate(request: AdmissionRequest): { allowed: boolean; messages: string[] } {\n    const messages: string[] = [];\n    let allowed = true;\n\n    for (const policy of this.policies) {\n      const result = policy.evaluate(request);\n      if (!result.allowed) {\n        allowed = false;\n        messages.push(result.message || `Policy \"${policy.id}\" rejected request`);\n      }\n    }\n\n    return { allowed, messages };\n  }\n}\n\nconst controller = new OPAAdmissionController();\n\ncontroller.addPolicy({\n  id: 'run-as-non-root',\n  description: 'Containers must run as non-root',\n  evaluate: (req) => {\n    if (req.kind.kind !== 'Pod') return { allowed: true };\n    const spec = req.object as { spec?: { containers?: Array<{ securityContext?: { runAsNonRoot?: boolean } }> } };\n    const container = spec.spec?.containers?.[0];\n    if (!container?.securityContext?.runAsNonRoot) {\n      return { allowed: false, message: 'Container must set runAsNonRoot=true' };\n    }\n    return { allowed: true };\n  },\n});\n\ncontroller.addPolicy({\n  id: 'require-resource-limits',\n  description: 'Containers must have CPU and memory limits',\n  evaluate: (req) => {\n    if (req.kind.kind !== 'Pod') return { allowed: true };\n    const spec = req.object as { spec?: { containers?: Array<{ resources?: { limits?: Record<string, string> } }> } };\n    const container = spec.spec?.containers?.[0];\n    if (!container?.resources?.limits) {\n      return { allowed: false, message: 'Container must have resource limits' };\n    }\n    return { allowed: true };\n  },\n});\n\nconst validPod: AdmissionRequest = {\n  kind: { kind: 'Pod', apiVersion: 'v1' },\n  object: {\n    spec: {\n      containers: [{\n        securityContext: { runAsNonRoot: true },\n        resources: { limits: { cpu: '500m', memory: '512Mi' } },\n      }],\n    },\n  },\n};\n\nconst invalidPod: AdmissionRequest = {\n  kind: { kind: 'Pod', apiVersion: 'v1' },\n  object: { spec: { containers: [{}] } },\n};\n\nconsole.log('Valid pod:', controller.validate(validPod));\nconsole.log('Invalid pod:', controller.validate(invalidPod));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-sbom-analyzer",
      children: "Example 3: SBOM Analyzer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Package {\n  name: string;\n  version: string;\n  type: 'npm' | 'maven' | 'pip' | 'docker' | 'golang';\n  licenses: string[];\n  vulnerabilities: Array<{ id: string; severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'; fixVersion?: string }>;\n}\n\nclass SBOMAnalyzer {\n  private packages: Package[] = [];\n\n  addPackage(pkg: Package): void {\n    this.packages.push(pkg);\n  }\n\n  getCriticalVulnerabilities(): Package[] {\n    return this.packages.filter(p => p.vulnerabilities.some(v => v.severity === 'CRITICAL'));\n  }\n\n  getUnlicensedPackages(): Package[] {\n    return this.packages.filter(p => p.licenses.length === 0);\n  }\n\n  generateReport(): string {\n    let report = '# SBOM Analysis Report\\n\\n';\n    report += `Total packages: ${this.packages.length}\\n`;\n    report += `Critical vulnerabilities: ${this.getCriticalVulnerabilities().length}\\n`;\n    report += `High vulnerabilities: ${this.packages.filter(p => p.vulnerabilities.some(v => v.severity === 'HIGH')).length}\\n`;\n    report += `Unlicensed packages: ${this.getUnlicensedPackages().length}\\n\\n`;\n\n    report += '## Critical Vulnerability Details\\n\\n';\n    for (const pkg of this.getCriticalVulnerabilities()) {\n      for (const vuln of pkg.vulnerabilities.filter(v => v.severity === 'CRITICAL')) {\n        const fix = vuln.fixVersion ? ` (fix: ${vuln.fixVersion})` : ' (no fix available)';\n        report += `- ${pkg.name}@${pkg.version}: ${vuln.id}${fix}\\n`;\n      }\n    }\n\n    report += '\\n## License Summary\\n\\n';\n    const licenseCounts: Record<string, number> = {};\n    for (const pkg of this.packages) {\n      for (const license of pkg.licenses) {\n        licenseCounts[license] = (licenseCounts[license] || 0) + 1;\n      }\n    }\n    for (const [license, count] of Object.entries(licenseCounts)) {\n      report += `- ${license}: ${count} packages\\n`;\n    }\n\n    const riskScore = this.packages.reduce((score, pkg) => {\n      return score + pkg.vulnerabilities.reduce((s, v) => {\n        const weights = { CRITICAL: 10, HIGH: 5, MEDIUM: 2, LOW: 1 };\n        return s + (weights[v.severity] || 0);\n      }, 0);\n    }, 0);\n\n    report += `\\n## Overall Risk Score: ${riskScore}\\n`;\n    report += riskScore > 50 ? '?? High risk — immediate action required\\n' : riskScore > 20 ? '?? Moderate risk\\n' : '? Low risk\\n';\n\n    return report;\n  }\n}\n\nconst analyzer = new SBOMAnalyzer();\nanalyzer.addPackage({ name: 'express', version: '4.18.2', type: 'npm', licenses: ['MIT'], vulnerabilities: [] });\nanalyzer.addPackage({ name: 'lodash', version: '4.17.20', type: 'npm', licenses: ['MIT'], vulnerabilities: [{ id: 'CVE-2021-23337', severity: 'HIGH', fixVersion: '4.17.21' }] });\nanalyzer.addPackage({ name: 'axios', version: '0.21.1', type: 'npm', licenses: ['MIT'], vulnerabilities: [{ id: 'CVE-2021-3749', severity: 'CRITICAL', fixVersion: '0.21.2' }] });\nanalyzer.addPackage({ name: 'internal-lib', version: '1.0.0', type: 'npm', licenses: [], vulnerabilities: [] });\n\nconsole.log(analyzer.generateReport());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "SAST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static source code analysis (SonarQube, Semgrep)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DAST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic app testing (OWASP ZAP, Burp Suite)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency vulnerability scanning (Snyk, Trivy)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Container Scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image vulnerability detection (Trivy, Clair)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Secret Scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Credential detection (GitLeaks, TruffleHog)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Policy as Code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OPA (Rego), Kyverno (K8s-native)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SBOM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Component inventory (CycloneDX, SPDX)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "SAST Tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SonarQube, Semgrep, CodeQL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DAST Tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OWASP ZAP, Burp Suite"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCA Tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Snyk, Dependabot, Trivy, Grype"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Secret Scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GitLeaks, TruffleHog"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Policy as Code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OPA/Rego, Kyverno"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SBOM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Syft(generate), Grype(scan), Cosign(sign)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shift-Left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Earlier = 10-100x cheaper"
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
            children: "Web app vulnerability scanning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud config security scanning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance policy enforcement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Container"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container image CVE scanning"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sastdast-scanner-wrapper",
      children: "SAST/DAST Scanner Wrapper"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Integrating security scanning into CI/CD pipelines requires consistent interfaces across scanning tools. The following wrapper unifies static and dynamic analysis results."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ScanIssue {\n  id: string;\n  severity: 'critical' | 'high' | 'medium' | 'low' | 'info';\n  type: string;\n  file: string;\n  line: number;\n  description: string;\n  remediation: string;\n  cve?: string;\n}\n\ninterface ScanResult {\n  scanner: 'sast' | 'dast' | 'sca' | 'container';\n  issues: ScanIssue[];\n  duration: number;\n  passed: boolean;\n}\n\ninterface SecurityGateResult {\n  passed: boolean;\n  criticalCount: number;\n  highCount: number;\n  mediumCount: number;\n  failedGates: string[];\n}\n\nclass ScannerWrapper {\n  runSAST(code: string): ScanResult {\n    const issues: ScanIssue[] = [];\n    const lines = code.split('\\n');\n    for (let i = 0; i < lines.length; i++) {\n      if (lines[i].includes('eval(') || lines[i].includes('exec(')) {\n        issues.push({ id: `SAST-${issues.length + 1}`, severity: 'high', type: 'Code Injection', file: 'src/app.ts', line: i + 1, description: 'Dangerous function usage', remediation: 'Avoid eval/exec, use safe alternatives' });\n      }\n      if (lines[i].includes('innerHTML') || lines[i].includes('document.write')) {\n        issues.push({ id: `SAST-${issues.length + 1}`, severity: 'medium', type: 'XSS', file: 'src/app.ts', line: i + 1, description: 'Potential XSS vulnerability', remediation: 'Use textContent or sanitize input' });\n      }\n    }\n    return { scanner: 'sast', issues, duration: 12, passed: issues.filter(i => i.severity === 'critical' || i.severity === 'high').length === 0 };\n  }\n\n  runDAST(endpoints: string[]): ScanResult {\n    const issues: ScanIssue[] = [];\n    for (const ep of endpoints) {\n      if (ep.includes('/api/')) {\n        issues.push({ id: `DAST-${issues.length + 1}`, severity: 'medium', type: 'Missing Auth', file: ep, line: 0, description: 'Endpoint missing authentication header', remediation: 'Add authorization middleware' });\n      }\n    }\n    return { scanner: 'dast', issues, duration: 45, passed: issues.length === 0 };\n  }\n\n  evaluateGates(results: ScanResult[]): SecurityGateResult {\n    const allIssues = results.flatMap(r => r.issues);\n    const criticalCount = allIssues.filter(i => i.severity === 'critical').length;\n    const highCount = allIssues.filter(i => i.severity === 'high').length;\n    const mediumCount = allIssues.filter(i => i.severity === 'medium').length;\n    const failedGates: string[] = [];\n\n    if (criticalCount > 0) failedGates.push('Blocking: Critical vulnerabilities found');\n    if (highCount > 2) failedGates.push('Blocking: More than 2 high severity issues');\n    if (mediumCount > 10) failedGates.push('Warning: More than 10 medium severity issues');\n\n    return { passed: failedGates.filter(g => g.startsWith('Blocking')).length === 0, criticalCount, highCount, mediumCount, failedGates };\n  }\n}\n\nconst wrapper = new ScannerWrapper();\nconst code = `const data = eval(userInput); document.getElementById('output').innerHTML = data;`;\nconst sastResult = wrapper.runSAST(code);\nconst dastResult = wrapper.runDAST(['https://app.com/api/users', 'https://app.com/about']);\nconst gateResult = wrapper.evaluateGates([sastResult, dastResult]);\nconsole.log(`SAST: ${sastResult.issues.length} issues, ${sastResult.passed ? 'PASSED' : 'FAILED'}`);\nconsole.log(`DAST: ${dastResult.issues.length} issues, ${dastResult.passed ? 'PASSED' : 'FAILED'}`);\nconsole.log(`Gate: ${gateResult.passed ? 'PASSED' : 'FAILED'}, Critical: ${gateResult.criticalCount}, High: ${gateResult.highCount}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What this demonstrates:"
      }), " A unified security scanner wrapper standardizes SAST/DAST results, enables consistent gate evaluation, and enforces security policies across CI/CD pipelines."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Question 1: What is shift-left security?"
      }), "**A)** Moving security testing to the right", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Integrating security earlier in development", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Outsourcing security", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Removing security gates", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Integrating security earlier in development</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
        children: [(0,jsx_runtime.jsx)(_components.summary, {
          children: "Question 2: What does SAST analyze?"
        }), "**A)** Running applications", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Source code without execution", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Network traffic", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** User behavior", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Source code without execution</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Question 3: Which tool detects secrets in Git history?"
          }), "**A)** SonarQube", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** GitLeaks", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** OWASP ZAP", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Prometheus", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** GitLeaks</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Question 4: What is an SBOM?"
            }), "**A)** A security tool", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Software Bill of Materials — inventory of components", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** A deployment strategy", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** A monitoring tool", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Software Bill of Materials — inventory of components</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
              children: [(0,jsx_runtime.jsx)(_components.summary, {
                children: "Question 5: What language does OPA use for policies?"
              }), "**A)** YAML", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Rego", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** JSON", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Python", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Rego</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "// devsecops\n// cicd-infrastructure-automation implementation"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'devsecops', data: { topic: 'cicd-infrastructure-automation' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "summary",
                children: "Summary"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "DevSecOps integrates security throughout the development lifecycle. SAST tools analyze source code for vulnerabilities before execution. DAST tools test running applications with simulated attacks. SCA tools identify vulnerable dependencies in the supply chain. Container scanners detect vulnerabilities in images before deployment. Secret scanners prevent credential leakage through pre-commit hooks and CI checks. Policy-as-code tools (OPA, Kyverno) enforce security and compliance requirements automatically. SBOMs provide component inventory for vulnerability correlation and supply chain risk assessment. Together, these tools create a comprehensive security posture that prevents vulnerabilities from reaching production and enables rapid response when new vulnerabilities are disclosed."
              }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "exercises",
                children: "Exercises"
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "review-questions",
                children: "Review Questions"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What is the shift-left security principle? Why does it reduce remediation costs?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Compare SAST and DAST: what vulnerabilities does each detect that the other might miss?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How does SCA identify vulnerabilities in transitive dependencies?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What differentiates container image scanning from dependency scanning?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How does OPA enforce policy differently from Kyverno?"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "application-problems",
                children: "Application Problems"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Create a GitHub Actions workflow that integrates Semgrep for SAST, Trivy for container scanning, and GitLeaks for secret scanning. The pipeline should fail on any HIGH or CRITICAL finding."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Set up OPA to enforce a policy that all containers must have CPU and memory limits specified. Test against valid and invalid Kubernetes Pod manifests."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Generate an SBOM for a container image using Syft. Scan the SBOM with Grype. Identify the top 5 vulnerabilities by CVSS score and determine whether fix versions exist."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "challenge-problem",
                children: "Challenge Problem"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Design a DevSecOps pipeline for a financial services organization subject to PCI DSS and SOC 2 compliance. The organization has 20 microservices in four languages (Java, Go, Node.js, Python), private npm and Maven registries, and Kubernetes production clusters. Define the complete security toolchain: SAST integration point, DAST schedule, SCA policy (CVSS thresholds, license restrictions), container image scanning policy, secret scanning for code and Dockerfiles, admission controller policies for Kubernetes, SBOM generation and storage, and the CI/CD pipeline stages where each tool executes. Address false positive management, developer workflow impact, and compliance evidence collection."
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