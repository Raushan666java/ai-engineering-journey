"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[412],{

/***/ 7677
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_software_engineering_07_software_evolution_md_dd9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-software-engineering-07-software-evolution-md-dd9.json
const site_docs_courses_software_engineering_07_software_evolution_md_dd9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/software-engineering/07-software-evolution","title":"Software Evolution","description":"Learning Objectives","source":"@site/docs/courses/software-engineering/07-software-evolution.md","sourceDirName":"courses/software-engineering","slug":"/software-engineering/07-software-evolution","permalink":"/ai-engineering-journey/software-engineering/07-software-evolution","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"07-software-evolution","slug":"/software-engineering/07-software-evolution","title":"Software Evolution","sidebar_label":"Software Evolution","sidebar_position":7},"sidebar":"course-software-engineering","previous":{"title":"Software Testing","permalink":"/ai-engineering-journey/software-engineering/06-testing"},"next":{"title":"Project Management","permalink":"/ai-engineering-journey/software-engineering/08-project-management"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/software-engineering/07-software-evolution.md


const frontMatter = {
	id: '07-software-evolution',
	slug: '/software-engineering/07-software-evolution',
	title: 'Software Evolution',
	sidebar_label: 'Software Evolution',
	sidebar_position: 7
};
const contentTitle = 'Software Evolution';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "The Nature of Software Evolution",
  "id": "the-nature-of-software-evolution",
  "level": 3
}, {
  "value": "Categories of Maintenance",
  "id": "categories-of-maintenance",
  "level": 3
}, {
  "value": "Lehman&#39;s Laws of Software Evolution",
  "id": "lehmans-laws-of-software-evolution",
  "level": 3
}, {
  "value": "Software Entropy",
  "id": "software-entropy",
  "level": 3
}, {
  "value": "Reverse Engineering vs Reengineering vs Forward Engineering",
  "id": "reverse-engineering-vs-reengineering-vs-forward-engineering",
  "level": 3
}, {
  "value": "Technical Debt Quadrant",
  "id": "technical-debt-quadrant",
  "level": 3
}, {
  "value": "Technical Debt Quantification",
  "id": "technical-debt-quantification",
  "level": 3
}, {
  "value": "Refactoring Catalog",
  "id": "refactoring-catalog",
  "level": 3
}, {
  "value": "Extract Method",
  "id": "extract-method",
  "level": 4
}, {
  "value": "Replace Conditional with Polymorphism",
  "id": "replace-conditional-with-polymorphism",
  "level": 4
}, {
  "value": "Extract Class",
  "id": "extract-class",
  "level": 4
}, {
  "value": "Legacy Systems",
  "id": "legacy-systems",
  "level": 3
}, {
  "value": "Impact Analysis",
  "id": "impact-analysis",
  "level": 3
}, {
  "value": "Modernization Strategies",
  "id": "modernization-strategies",
  "level": 3
}, {
  "value": "Version Migration and Semantic Versioning",
  "id": "version-migration-and-semantic-versioning",
  "level": 3
}, {
  "value": "Case Studies",
  "id": "case-studies",
  "level": 2
}, {
  "value": "Case Study 1: Bank Core Banking System Modernization",
  "id": "case-study-1-bank-core-banking-system-modernization",
  "level": 3
}, {
  "value": "Case Study 2: Technical Debt Repayment at a SaaS Company",
  "id": "case-study-2-technical-debt-repayment-at-a-saas-company",
  "level": 3
}, {
  "value": "Case Study 3: Healthcare SaaS — Reengineering for Compliance",
  "id": "case-study-3-healthcare-saas--reengineering-for-compliance",
  "level": 3
}, {
  "value": "TypeScript Tools for Software Evolution",
  "id": "typescript-tools-for-software-evolution",
  "level": 2
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
  "value": "Summary",
  "id": "summary-1",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
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
        id: "software-evolution",
        children: "Software Evolution"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "✓ Distinguish between the four categories of software maintenance: corrective, adaptive, perfective, preventive\r\n✓ Explain Lehman's eight laws of software evolution and their practical implications\r\n✓ Distinguish reverse engineering, reengineering, and forward engineering\r\n✓ Apply refactoring techniques with before/after TypeScript code\r\n✓ Identify characteristics of legacy systems and select appropriate management strategies\r\n✓ Quantify technical debt and analyse it using Fowler's quadrant model\r\n✓ Perform impact analysis for proposed changes using dependency graphs\r\n✓ Calculate software entropy and understand its relationship to maintenance cost\r\n✓ Implement version migration strategies with semantic versioning and breaking change detection\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-nature-of-software-evolution",
      children: "The Nature of Software Evolution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Software evolution is the continuous process of adapting a software system after its initial deployment. Unlike hardware, software does not wear out in a physical sense, but it must evolve to remain useful. Changes in the operational environment, the emergence of new user needs, and the correction of latent defects all drive software evolution."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Studies show that maintenance costs typically represent ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "60-80% of total lifecycle costs"
      }), ". This economic reality makes software evolution a central concern of software engineering."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\r\n    classDef dev fill:#e3f2fd,stroke:#1565c0,stroke-width:2px\r\n    classDef maint fill:#fff3e0,stroke:#e65100,stroke-width:2px\r\n\r\n    subgraph \"Software Lifecycle Cost Distribution\"\r\n        DEV[Initial Development<br>20-40% of total cost]:::dev\r\n        MAINT[Maintenance & Evolution<br>60-80% of total cost]:::maint\r\n    end\r\n    \r\n    MAINT --> COR[Corrective: ~17%<br>Fixing defects]:::maint\r\n    MAINT --> ADP[Adaptive: ~18%<br>Environmental changes]:::maint\r\n    MAINT --> PER[Perfective: ~55%<br>Enhancements]:::maint\r\n    MAINT --> PRE[Preventive: ~10%<br>Refactoring]:::maint\r\n    \r\n    COR --> EX1[Logic errors,<br>edge cases]:::maint\r\n    ADP --> EX2[OS upgrade,<br>new regulations]:::maint\r\n    PER --> EX3[New features,<br>performance tuning]:::maint\r\n    PRE --> EX4[Dependency updates,<br>code cleanup]:::maint\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "categories-of-maintenance",
      children: "Categories of Maintenance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Proportion"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Corrective"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixing defects discovered after deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logic errors, implementation deviations, security vulnerabilities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~17%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Adaptive"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modifying the system for environmental changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New OS version, hardware upgrade, regulatory changes, DBMS upgrade"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~18%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Perfective"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enhancing the system to improve performance or usability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adding features, improving UI, optimizing performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~55%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Preventive"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Making changes to prevent future problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Refactoring, updating dependencies, adding defensive checks, improving documentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10%"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lehmans-laws-of-software-evolution",
      children: "Lehman's Laws of Software Evolution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lehman formulated eight laws based on empirical studies of large systems over decades:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Law"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Statement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implication"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "I. Continuing Change"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A system must be continually adapted or it becomes progressively less satisfactory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Software that isn't changed becomes irrelevant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A 10-year-old e-commerce platform without mobile support loses market share"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "II. Increasing Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "As a system evolves, its complexity increases unless work is performed to reduce it"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Without deliberate refactoring, entropy increases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A 1M LOC system grows to 2M LOC with same team — more bugs per LOC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "III. Self-Regulation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The evolution process is self-regulating with statistically regular distributions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process metrics follow predictable patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defect arrival rate stabilizes at ~5 per sprint regardless of system size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IV. Conservation of Organisational Stability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The average effective global activity rate is invariant over the product lifetime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Team productivity tends to stabilise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A team of 5 delivers ~8 story points per sprint consistently"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "V. Conservation of Familiarity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The incremental growth of each release is statistically invariant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Release sizes tend to remain consistent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each release adds 20-30 features, never 200"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "VI. Continuing Growth"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functional content must be continually increased to maintain user satisfaction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Features must grow to keep users engaged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adding AI recommendations to keep users on platform"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "VII. Declining Quality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quality declines unless rigorously maintained"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Without active maintenance, perceived quality drops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Response time degrades by 5% per quarter without optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "VIII. Feedback System"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evolution processes constitute multi-loop, multi-level feedback systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changes at one level affect all others"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A database schema change cascades through API, UI, and reporting"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "software-entropy",
      children: "Software Entropy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Software entropy is a measure of the disorder or degradation in a software system. Just as the second law of thermodynamics states that entropy in an isolated system tends to increase, software entropy inevitably increases unless deliberate effort (refactoring) is applied."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Contributors to software entropy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Accumulated quick fixes:"
        }), " \"We'll fix it properly later\" — but later never comes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inconsistent coding styles:"
        }), " Different developers, different conventions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dead code:"
        }), " Unused functions, classes, and modules that clutter the codebase"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Duplicated logic:"
        }), " Copy-pasted code that diverges over time"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tight coupling:"
        }), " Modules that become intertwined through ad hoc dependencies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inadequate documentation:"
        }), " Knowledge that exits the organization when developers leave"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Software Entropy Calculator\r\nclass EntropyCalculator {\r\n  public calculateEntropy(metrics: {\r\n    totalFiles: number;\r\n    duplicateBlocks: number;\r\n    deadFunctions: number;\r\n    cyclomaticComplexity: number;\r\n    dependencyCycles: number;\r\n    commentedOutCode: number;\r\n  }): { entropyScore: number; level: 'low' | 'medium' | 'high' | 'critical'; recommendations: string[] } {\r\n    const fileEntropy = Math.min(1, metrics.duplicateBlocks / metrics.totalFiles);\r\n    const deadCodeEntropy = Math.min(1, metrics.deadFunctions / (metrics.totalFiles * 3));\r\n    const complexityEntropy = Math.min(1, metrics.cyclomaticComplexity / 50);\r\n    const dependencyEntropy = Math.min(1, metrics.dependencyCycles / 5);\r\n    const commentEntropy = Math.min(1, metrics.commentedOutCode / metrics.totalFiles);\r\n\r\n    const entropyScore = (fileEntropy + deadCodeEntropy + complexityEntropy + dependencyEntropy + commentEntropy) / 5;\r\n    const recommendations: string[] = [];\r\n\r\n    if (metrics.duplicateBlocks > 0) recommendations.push(`Remove ${metrics.duplicateBlocks} duplicate code blocks via Extract Method`);\r\n    if (metrics.dependencyCycles > 0) recommendations.push(`Resolve ${metrics.dependencyCycles} dependency cycles via interface extraction`);\r\n    if (metrics.deadFunctions > 0) recommendations.push(`Delete ${metrics.deadFunctions} unused functions after verifying callers`);\r\n    if (metrics.commentedOutCode > 5) recommendations.push('Remove commented-out code (use version control instead)');\r\n    if (metrics.cyclomaticComplexity > 15) recommendations.push('Reduce complexity: extract methods, apply polymorphism');\r\n\r\n    const level = entropyScore > 0.7 ? 'critical' : entropyScore > 0.5 ? 'high' : entropyScore > 0.3 ? 'medium' : 'low';\r\n    return { entropyScore: Math.round(entropyScore * 100) / 100, level, recommendations };\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reverse-engineering-vs-reengineering-vs-forward-engineering",
      children: "Reverse Engineering vs Reengineering vs Forward Engineering"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\r\n    classDef forward fill:#e3f2fd,stroke:#1565c0,stroke-width:2px\r\n    classDef reverse fill:#fff3e0,stroke:#e65100,stroke-width:2px\r\n    classDef reeng fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px\r\n\r\n    subgraph \"Forward Engineering\"\r\n        REQ[Requirements]:::forward --> DES[Design]:::forward\r\n        DES --> CODE[Implementation]:::forward\r\n        CODE --> DEPLOY[Deployment]:::forward\r\n    end\r\n\r\n    subgraph \"Reverse Engineering\"\r\n        CODE2[Existing Code]:::reverse --> DES2[Design Recovery]:::reverse\r\n        DES2 --> REQ2[Requirements Discovery]:::reverse\r\n        REQ2 --> SPEC[Specification]:::reverse\r\n    end\r\n\r\n    subgraph \"Reengineering\"\r\n        LEGACY[Legacy System]:::reeng --> REV[Reverse Engineering<br>Understand current system]:::reeng\r\n        REV --> REDES[Redesign<br>Improved architecture]:::reeng\r\n        REDES --> FWD[Forward Engineering<br>Build new system]:::reeng\r\n        FWD --> NEW[Modernized System]:::reeng\r\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Forward Engineering"
      }), " follows the traditional waterfall: requirements → design → implementation. It starts with abstractions and produces concrete code."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reverse Engineering"
      }), " goes the opposite direction: code → design → requirements. It recovers design information from existing code to understand how a system works. This is essential for legacy systems where documentation is missing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reengineering"
      }), " combines both: reverse engineering to understand the current system, then forward engineering to produce an improved version. This is the most common approach for modernizing legacy systems."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reverse engineering tools:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Static analysers:"
        }), " Extract structure, dependencies, and metrics from source code"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dependency analysers:"
        }), " Generate dependency graphs and detect cycles"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Database reverse engineering:"
        }), " Derive entity-relationship models from database schemas"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decompilers:"
        }), " Reconstruct high-level source code from compiled binaries"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Runtime monitors:"
        }), " Observe system behaviour through logging and profiling"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "technical-debt-quadrant",
      children: "Technical Debt Quadrant"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The technical debt quadrant, proposed by Fowler, classifies debt by intent and prudence:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\r\n    classDef reckless fill:#fce4ec,stroke:#c62828,stroke-width:2px\r\n    classDef prudent fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px\r\n    classDef deliberate fill:#fff3e0,stroke:#e65100,stroke-width:2px\r\n    classDef inadvertent fill:#e3f2fd,stroke:#1565c0,stroke-width:2px\r\n\r\n    subgraph \"Technical Debt Quadrant\"\r\n        RQ1[\"Reckless & Deliberate<br>#quot;We don't have time for design#quot;\"]:::reckless\r\n        RQ2[\"Reckless & Inadvertent<br>#quot;What is a design pattern?#quot;\"]:::reckless\r\n        RQ3[\"Prudent & Deliberate<br>#quot;Ship now, fix next sprint#quot;\"]:::prudent\r\n        RQ4[\"Prudent & Inadvertent<br>#quot;Now we know what we should have done#quot;\"]:::prudent\r\n    end\r\n    \r\n    RQ1 --> EX1[\"Quick hack without refactoring<br>Skipping tests for deadline\"]:::deliberate\r\n    RQ2 --> EX2[\"Inexperienced team creates poor design<br>No patterns, no SOLID\"]:::inadvertent\r\n    RQ3 --> EX3[\"Deliberate shortcut with TODO<br>Technical spike tracked in backlog\"]:::deliberate\r\n    RQ4 --> EX4[\"Discover better approach after implementing<br>Refactor on second iteration\"]:::inadvertent\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Quadrant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reckless & Deliberate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Team knows better but chooses not to"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skipping tests to meet deadline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prioritise fixing immediately"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reckless & Inadvertent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Team doesn't know what good design is"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No design patterns applied, no testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training + systematic refactoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prudent & Deliberate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intentional short-term decision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ship now, refactor next sprint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Track and schedule within 2 sprints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prudent & Inadvertent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discovered better approach after implementing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Improve design on second iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Refactor when encountered naturally"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "technical-debt-quantification",
      children: "Technical Debt Quantification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Technical debt can be quantified in terms of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "principal"
      }), " (effort to fix the problem now) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "interest"
      }), " (additional effort incurred over time by not fixing it)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key metrics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Principal:"
        }), " Hours required to fix all identified debt items"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interest:"
        }), " Cumulative extra hours spent working around the debt"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Debt ratio:"
        }), " Interest / Principal (ratio > 2 is critical)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Break-even point:"
        }), " The time at which the cost of fixing equals the cost of not fixing"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Technical Debt Calculator\r\ntype DebtQuadrant = 'reckless-deliberate' | 'reckless-inadvertent' | 'prudent-deliberate' | 'prudent-inadvertent';\r\n\r\ninterface DebtItem {\r\n  id: string;\r\n  description: string;\r\n  location: string;\r\n  quadrant: DebtQuadrant;\r\n  estimatedHoursToFix: number;\r\n  estimatedHoursToPayInterest: number;\r\n  createdAt: Date;\r\n  tags: string[];\r\n  severity: 'low' | 'medium' | 'high' | 'critical';\r\n}\r\n\r\ninterface DebtReport {\r\n  totalDebtHours: number;\r\n  totalInterestHours: number;\r\n  debtRatio: number;\r\n  itemsByQuadrant: Record<DebtQuadrant, DebtItem[]>;\r\n  itemsBySeverity: Record<string, DebtItem[]>;\r\n  topPriorityItems: DebtItem[];\r\n  principalPerModule: Map<string, number>;\r\n}\r\n\r\nclass TechnicalDebtCalculator {\r\n  private debtItems: DebtItem[] = [];\r\n\r\n  public addDebt(item: DebtItem): void {\r\n    this.debtItems.push(item);\r\n  }\r\n\r\n  public addDebts(items: DebtItem[]): void {\r\n    this.debtItems.push(...items);\r\n  }\r\n\r\n  public calculate(): DebtReport {\r\n    const totalDebtHours = this.debtItems.reduce((s, i) => s + i.estimatedHoursToFix, 0);\r\n    const totalInterestHours = this.debtItems.reduce((s, i) => s + i.estimatedHoursToPayInterest, 0);\r\n\r\n    const itemsByQuadrant: Record<DebtQuadrant, DebtItem[]> = {\r\n      'reckless-deliberate': [],\r\n      'reckless-inadvertent': [],\r\n      'prudent-deliberate': [],\r\n      'prudent-inadvertent': [],\r\n    };\r\n    const itemsBySeverity: Record<string, DebtItem[]> = {};\r\n    const principalPerModule = new Map<string, number>();\r\n\r\n    for (const item of this.debtItems) {\r\n      itemsByQuadrant[item.quadrant].push(item);\r\n      if (!itemsBySeverity[item.severity]) itemsBySeverity[item.severity] = [];\r\n      itemsBySeverity[item.severity].push(item);\r\n      const module = item.location.split('/')[0];\r\n      principalPerModule.set(module, (principalPerModule.get(module) ?? 0) + item.estimatedHoursToFix);\r\n    }\r\n\r\n    const topPriorityItems = [...this.debtItems]\r\n      .sort((a, b) => {\r\n        const severityRank = { critical: 4, high: 3, medium: 2, low: 1 };\r\n        const interestA = a.estimatedHoursToPayInterest - a.estimatedHoursToFix;\r\n        const interestB = b.estimatedHoursToPayInterest - b.estimatedHoursToFix;\r\n        return (severityRank[b.severity] - severityRank[a.severity]) || (interestB - interestA);\r\n      })\r\n      .slice(0, 10);\r\n\r\n    return {\r\n      totalDebtHours,\r\n      totalInterestHours,\r\n      debtRatio: totalDebtHours > 0 ? totalInterestHours / totalDebtHours : 0,\r\n      itemsByQuadrant,\r\n      itemsBySeverity,\r\n      topPriorityItems,\r\n      principalPerModule,\r\n    };\r\n  }\r\n\r\n  public generateReport(): string {\r\n    const report = this.calculate();\r\n    const lines: string[] = [\r\n      '=== Technical Debt Report ===',\r\n      `Generated: ${new Date().toISOString()}`,\r\n      '',\r\n      '┌─────────────────────────────────┬─────────────┐',\r\n      '│ Metric                          │ Value       │',\r\n      '├─────────────────────────────────┼─────────────┤',\r\n      `│ Total Items                     │ ${this.debtItems.length.toString().padStart(11)} │`,\r\n      `│ Principal (Fix Hours)           │ ${report.totalDebtHours.toString().padStart(11)} │`,\r\n      `│ Interest (Hours Paid)           │ ${report.totalInterestHours.toString().padStart(11)} │`,\r\n      `│ Debt Ratio (Interest/Principal) │ ${report.debtRatio.toFixed(2).padStart(9)}    │`,\r\n      '└─────────────────────────────────┴─────────────┘',\r\n      '',\r\n      '--- By Quadrant ---',\r\n    ];\r\n    for (const [quadrant, items] of Object.entries(report.itemsByQuadrant)) {\r\n      const hours = items.reduce((s, i) => s + i.estimatedHoursToFix, 0);\r\n      lines.push(`  ${quadrant.padEnd(25)} ${items.length} items, ${hours}h principal`);\r\n    }\r\n    lines.push('', '--- By Severity ---');\r\n    for (const [severity, items] of Object.entries(report.itemsBySeverity)) {\r\n      const hours = items.reduce((s, i) => s + i.estimatedHoursToFix, 0);\r\n      lines.push(`  ${severity.padEnd(10)} ${items.length} items, ${hours}h`);\r\n    }\r\n    lines.push('', '--- Top Priority Items ---');\r\n    for (const item of report.topPriorityItems) {\r\n      const interestCost = item.estimatedHoursToPayInterest - item.estimatedHoursToFix;\r\n      lines.push(`  [${item.severity.toUpperCase()}] ${item.description}`);\r\n      lines.push(`    Location: ${item.location} | Fix: ${item.estimatedHoursToFix}h | Interest premium: ${interestCost > 0 ? '+' : ''}${interestCost}h`);\r\n    }\r\n\r\n    return lines.join('\\n');\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "refactoring-catalog",
      children: "Refactoring Catalog"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Refactoring is the process of restructuring existing code without changing its external behaviour."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "extract-method",
      children: "Extract Method"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Before:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function processOrder(order: Order): void {\r\n  if (!order.customerId) throw new Error('Missing customer');\r\n  if (!order.items || order.items.length === 0) throw new Error('No items');\r\n  for (const item of order.items) {\r\n    if (item.quantity <= 0) throw new Error('Invalid quantity');\r\n  }\r\n  let total = 0;\r\n  for (const item of order.items) {\r\n    total += item.price * item.quantity;\r\n  }\r\n  if (order.customerType === 'premium') total *= 0.9;\r\n  if (order.customerType === 'vip') total *= 0.85;\r\n  saveOrder({ ...order, total });\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function processOrder(order: Order): void {\r\n  validateOrder(order);\r\n  const total = calculateTotal(order);\r\n  const discountedTotal = applyDiscounts(total, order.customerType);\r\n  saveOrder({ ...order, total: discountedTotal });\r\n}\r\n\r\nfunction validateOrder(order: Order): void {\r\n  if (!order.customerId) throw new Error('Missing customer');\r\n  if (!order.items || order.items.length === 0) throw new Error('No items');\r\n  for (const item of order.items) {\r\n    if (item.quantity <= 0) throw new Error('Invalid quantity');\r\n  }\r\n}\r\n\r\nfunction calculateTotal(order: Order): number {\r\n  return order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);\r\n}\r\n\r\nfunction applyDiscounts(total: number, customerType: string): number {\r\n  if (customerType === 'vip') return total * 0.85;\r\n  if (customerType === 'premium') return total * 0.9;\r\n  return total;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "replace-conditional-with-polymorphism",
      children: "Replace Conditional with Polymorphism"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Before:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class Bird {\r\n  constructor(private type: string, private name: string) {}\r\n  \r\n  getSpeed(): number {\r\n    if (this.type === 'european') return 10;\r\n    if (this.type === 'african') return 20;\r\n    if (this.type === 'norwegian') return 30;\r\n    return 0;\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Bird {\r\n  getSpeed(): number;\r\n}\r\n\r\nclass EuropeanBird implements Bird {\r\n  constructor(private name: string) {}\r\n  getSpeed(): number { return 10; }\r\n}\r\n\r\nclass AfricanBird implements Bird {\r\n  constructor(private name: string) {}\r\n  getSpeed(): number { return 20; }\r\n}\r\n\r\nclass NorwegianBird implements Bird {\r\n  constructor(private name: string) {}\r\n  getSpeed(): number { return 30; }\r\n}\r\n\r\nclass BirdFactory {\r\n  static create(type: string, name: string): Bird {\r\n    switch (type) {\r\n      case 'european': return new EuropeanBird(name);\r\n      case 'african': return new AfricanBird(name);\r\n      case 'norwegian': return new NorwegianBird(name);\r\n      default: throw new Error('Unknown bird type');\r\n    }\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "extract-class",
      children: "Extract Class"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Before:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class Employee {\r\n  constructor(\r\n    public name: string,\r\n    public email: string,\r\n    public salary: number,\r\n    public bankAccount: string,\r\n    public taxId: string,\r\n    public department: string,\r\n    public officePhone: string,\r\n    public mobilePhone: string,\r\n    public street: string,\r\n    public city: string,\r\n    public postalCode: string\r\n  ) {}\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class Employee {\r\n  constructor(\r\n    public name: string,\r\n    public contact: ContactInfo,\r\n    public compensation: CompensationInfo,\r\n    public department: string\r\n  ) {}\r\n}\r\n\r\nclass ContactInfo {\r\n  constructor(\r\n    public email: string,\r\n    public officePhone: string,\r\n    public mobilePhone: string,\r\n    public address: Address\r\n  ) {}\r\n}\r\n\r\nclass Address {\r\n  constructor(\r\n    public street: string,\r\n    public city: string,\r\n    public postalCode: string\r\n  ) {}\r\n}\r\n\r\nclass CompensationInfo {\r\n  constructor(\r\n    public salary: number,\r\n    public bankAccount: string,\r\n    public taxId: string\r\n  ) {}\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "legacy-systems",
      children: "Legacy Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Characteristics of legacy systems:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Outdated technology platforms (no longer supported by vendors)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Poor or outdated documentation (or none at all)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Degraded structure from years of ad hoc changes and quick fixes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Obsolete hardware or OS dependencies that are costly to maintain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shortage of developers with relevant skills (COBOL, FORTRAN, etc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High cost of maintenance relative to value delivered"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Limited integration capabilities with modern systems"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Legacy system management strategies:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Risk"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scrap & rebuild"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace entirely with new system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low business value, low technical quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (loss of business rules)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Freeze"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimise changes to essential corrections only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low business value, high technical quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Maintain"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue evolution with current practices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High business value, high technical quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transform"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reengineer to modern platform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High business value, low technical quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Wrap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulate with modern API interface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High business value, replacement risk too high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rehost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move to modern infrastructure without code changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High technical quality, platform obsolete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rearchitect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Significantly restructure core components"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strategic system needing major evolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\r\n    classDef highVal fill:#e8f5e9,stroke:#2e7d32\r\n    classDef lowVal fill:#fce4ec,stroke:#c62828\r\n    classDef highQual fill:#e3f2fd,stroke:#1565c0\r\n    classDef lowQual fill:#fff3e0,stroke:#e65100\r\n\r\n    subgraph \"Legacy System Portfolio Analysis\"\r\n        Q1[QUADRANT I<br>High Business Value<br>Low Technical Quality<br>→ TRANSFORM / REARCHITECT]:::highVal\r\n        Q2[QUADRANT II<br>High Business Value<br>High Technical Quality<br>→ MAINTAIN / EVOLVE]:::highVal\r\n        Q3[QUADRANT III<br>Low Business Value<br>Low Technical Quality<br>→ SCRAP & REBUILD]:::lowVal\r\n        Q4[QUADRANT IV<br>Low Business Value<br>High Technical Quality<br>→ FREEZE / WRAP]:::lowVal\r\n    end\r\n    \r\n    Q1 --> STR1[Strangler Fig Pattern<br>Incremental replacement]:::highQual\r\n    Q2 --> STR2[Continue investment<br>Modernize incrementally]:::highQual\r\n    Q3 --> STR3[Plan decommission<br>Build replacement]:::lowQual\r\n    Q4 --> STR4[Minimal maintenance<br>API encapsulation]:::lowQual\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "impact-analysis",
      children: "Impact Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Impact analysis identifies the consequences of a proposed change. It answers: what will be affected, what is the ripple effect, and what is the estimated effort?"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Dependency {\r\n  sourceFile: string;\r\n  targetFile: string;\r\n  dependencyType: 'import' | 'extends' | 'implements' | 'calls' | 'uses';\r\n}\r\n\r\nclass ImpactAnalyzer {\r\n  private dependencies: Dependency[] = [];\r\n\r\n  public addDependency(dep: Dependency): void {\r\n    this.dependencies.push(dep);\r\n  }\r\n\r\n  public analyzeImpact(changedFile: string): {\r\n    directlyAffected: string[];\r\n    transitivelyAffected: string[];\r\n    estimatedEffort: number;\r\n  } {\r\n    const directlyAffected = this.dependencies\r\n      .filter((d) => d.targetFile === changedFile)\r\n      .map((d) => d.sourceFile);\r\n\r\n    const transitivelyAffected = new Set<string>();\r\n    const queue = [...directlyAffected];\r\n    while (queue.length > 0) {\r\n      const file = queue.shift()!;\r\n      const affected = this.dependencies\r\n        .filter((d) => d.targetFile === file)\r\n        .map((d) => d.sourceFile);\r\n      for (const a of affected) {\r\n        if (!transitivelyAffected.has(a)) {\r\n          transitivelyAffected.add(a);\r\n          queue.push(a);\r\n        }\r\n      }\r\n    }\r\n\r\n    return {\r\n      directlyAffected,\r\n      transitivelyAffected: Array.from(transitivelyAffected),\r\n      estimatedEffort: (directlyAffected.length + transitivelyAffected.size) * 4,\r\n    };\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "modernization-strategies",
      children: "Modernization Strategies"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Risk"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effort"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Strangler Fig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incrementally replace legacy components with new services, routing traffic between old and new"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Big Bang Rewrite"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build entire new system in parallel, then switch in one cutover"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Incremental Migration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gradually refactor and migrate module by module"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Database First"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modernise data layer first, then application logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "API Encapsulation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrap legacy system behind modern REST/gRPC APIs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "version-migration-and-semantic-versioning",
      children: "Version Migration and Semantic Versioning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Semantic versioning (SemVer) provides a standardized way to communicate the impact of changes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MAJOR:"
        }), " Breaking changes (incompatible API modifications)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR:"
        }), " Backward-compatible feature additions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PATCH:"
        }), " Backward-compatible bug fixes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Version {\r\n  major: number;\r\n  minor: number;\r\n  patch: number;\r\n  preRelease?: string;\r\n}\r\n\r\ninterface BreakingChange {\r\n  description: string;\r\n  affectedComponents: string[];\r\n  migrationSteps: string[];\r\n}\r\n\r\nclass VersionManager {\r\n  private versionHistory: Version[] = [];\r\n  private breakingChanges: BreakingChange[] = [];\r\n\r\n  public parseVersion(versionStr: string): Version {\r\n    const [core, preRelease] = versionStr.split('-');\r\n    const [major, minor, patch] = core.split('.').map(Number);\r\n    return { major, minor, patch, preRelease };\r\n  }\r\n\r\n  public toString(version: Version): string {\r\n    return `${version.major}.${version.minor}.${version.patch}${version.preRelease ? '-' + version.preRelease : ''}`;\r\n  }\r\n\r\n  public bump(current: Version, type: 'major' | 'minor' | 'patch', preRelease?: string): Version {\r\n    switch (type) {\r\n      case 'major':\r\n        return { major: current.major + 1, minor: 0, patch: 0, preRelease };\r\n      case 'minor':\r\n        return { major: current.major, minor: current.minor + 1, patch: 0, preRelease };\r\n      case 'patch':\r\n        return { major: current.major, minor: current.minor, patch: current.patch + 1, preRelease };\r\n    }\r\n  }\r\n\r\n  public recordBreakingChange(change: BreakingChange): void {\r\n    this.breakingChanges.push(change);\r\n  }\r\n\r\n  public generateMigrationGuide(from: Version, to: Version): string {\r\n    const relevantChanges = this.breakingChanges.filter(\r\n      (c) => c.affectedComponents.some((comp) => comp.includes('*'))\r\n    );\r\n    const lines: string[] = [\r\n      `=== Migration Guide: ${this.toString(from)} → ${this.toString(to)} ===`,\r\n      '',\r\n      'Summary of Breaking Changes:',\r\n    ];\r\n    for (const change of relevantChanges) {\r\n      lines.push(`  • ${change.description}`);\r\n      lines.push('    Migration steps:');\r\n      for (const step of change.migrationSteps) {\r\n        lines.push(`    - ${step}`);\r\n      }\r\n    }\r\n    return lines.join('\\n');\r\n  }\r\n}\r\n\r\n// Usage\r\nconst vm = new VersionManager();\r\nconst v1 = vm.parseVersion('1.0.0');\r\nconst v2 = vm.bump(v1, 'major');\r\nconsole.log(vm.toString(v2)); // \"2.0.0\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-studies",
      children: "Case Studies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-1-bank-core-banking-system-modernization",
      children: "Case Study 1: Bank Core Banking System Modernization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A major retail bank operated a 35-year-old COBOL-based core banking system processing 10M+ daily transactions. The system was critical, undocumented, and maintained by a rapidly retiring workforce."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Challenge:"
      }), " Modernize without interrupting operations. The COBOL system had no test suite, and business rules were embedded in procedural code with no documentation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach — Strangler Fig Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Phase 1 (Months 1-6):"
        }), " API encapsulation — wrapped COBOL transactions behind REST APIs. All new development targeted the API layer."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Phase 2 (Months 7-18):"
        }), " Transaction strangling — migrated high-volume transactions (account lookup, balance inquiry) to new microservices. Used feature flags to route traffic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Phase 3 (Months 19-30):"
        }), " Domain strangling — migrated complex domains (loans, mortgages) to event-driven services."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Phase 4 (Months 31-36):"
        }), " Decommission — retired the COBOL system after verifying all traffic was routed to new services."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Results:"
      }), " Zero downtime during migration. 40% reduction in per-transaction cost. Ability to launch new products in weeks instead of months. Preservation of all business rules through automated regression testing comparing old vs. new system outputs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-2-technical-debt-repayment-at-a-saas-company",
      children: "Case Study 2: Technical Debt Repayment at a SaaS Company"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A SaaS company with 500K+ lines of TypeScript had accumulated significant technical debt over 7 years. Monthly releases were taking 2+ weeks due to regression testing."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Audit Findings:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1,200+ unused functions (dead code)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "40% of files exceeded 300 lines"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "15 circular dependency cycles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "65% test coverage (target: 85%)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "8,000 hours estimated principal debt"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action Plan:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sprint 1-2:"
        }), " Removed all dead code (saved 50K LOC, reduced build time by 30%)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sprint 3-4:"
        }), " Resolved circular dependencies (eliminated runtime errors in dev startup)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sprint 5-8:"
        }), " Refactored top 20 largest files (reduced average file size from 420 to 180 lines)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sprint 9-12:"
        }), " Increased test coverage to 88% and added mutation testing"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Results:"
      }), " Release cycle reduced from 2 weeks to 2 days. Developer onboarding time cut from 4 weeks to 1 week. Bug rate dropped 60%."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-3-healthcare-saas--reengineering-for-compliance",
      children: "Case Study 3: Healthcare SaaS — Reengineering for Compliance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A healthcare SaaS platform needed HIPAA compliance. The system had grown organically over 10 years with no architectural oversight."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach — Incremental Migration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security layer:"
        }), " Implemented encryption at rest and in transit, access controls, and audit logging without changing business logic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data isolation:"
        }), " Separated patient data from application code using repository pattern."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Architecture transformation:"
        }), " Migrated from monolithic PHP to TypeScript microservices, one domain at a time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testing transformation:"
        }), " Added 3,000+ integration tests comparing old vs. new behavior."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Results:"
      }), " HIPAA certification achieved in 8 months. System remained operational throughout. Performance improved 3x after migration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-tools-for-software-evolution",
      children: "TypeScript Tools for Software Evolution"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Impact Analysis Engine ===\r\ninterface CodeEntity { name: string; type: \"class\" | \"function\" | \"module\" | \"interface\"; dependencies: string[]; }\r\nclass ImpactAnalyzerV2 {\r\n  constructor(private entities: CodeEntity[]) {}\r\n  \r\n  getAffected(changed: string[], visited = new Set<string>()): string[] {\r\n    for (const name of changed) {\r\n      if (visited.has(name)) continue;\r\n      visited.add(name);\r\n      const dependents = this.entities.filter(e => e.dependencies.includes(name)).map(e => e.name);\r\n      this.getAffected(dependents, visited);\r\n    }\r\n    return [...visited];\r\n  }\r\n\r\n  getImpactScore(changed: string[]): { entities: number; depth: number } {\r\n    const affected = this.getAffected(changed);\r\n    const maxDepth = Math.max(...changed.map(c => {\r\n      const deps = this.entities.filter(e => e.dependencies.includes(c)).length;\r\n      return deps;\r\n    }));\r\n    return { entities: affected.length, depth: maxDepth };\r\n  }\r\n}\r\n\r\n// === Refactoring Opportunity Detector ===\r\ninterface RefactoringTarget { entity: string; issue: string; effort: \"Low\" | \"Medium\" | \"High\"; benefit: string; }\r\nfunction detectRefactoringNeeds(entities: CodeEntity[]): RefactoringTarget[] {\r\n  const targets: RefactoringTarget[] = [];\r\n  const depCount = new Map<string, number>();\r\n  for (const e of entities) for (const d of e.dependencies) depCount.set(d, (depCount.get(d) ?? 0) + 1);\r\n  for (const [name, count] of depCount) {\r\n    if (count > 5) targets.push({ entity: name, issue: `High coupling (${count} dependents)`, effort: \"High\", benefit: \"Reduce ripple effects\" });\r\n  }\r\n  const lonely = entities.filter(e => e.dependencies.length === 0 && entities.filter(x => x.dependencies.includes(e.name)).length === 0);\r\n  for (const e of lonely) targets.push({ entity: e.name, issue: \"Dead code / orphan module\", effort: \"Low\", benefit: \"Remove unused code\" });\r\n  return targets;\r\n}\r\n\r\n// === Lehman's Law Checker ===\r\nfunction checkLehmanLaws(history: { version: string; loc: number; modules: number; defects: number }[]): string[] {\r\n  const observations: string[] = [];\r\n  if (history.length >= 2) {\r\n    const first = history[0], last = history[history.length - 1];\r\n    if (last.loc > first.loc) observations.push(\"Law I (Continuing Change): system is evolving — LOC grew\");\r\n    if (last.modules > first.modules) observations.push(\"Law II (Increasing Complexity): module count increased\");\r\n    if (last.defects > 0 && last.defects < first.defects) observations.push(\"Law III (Self-Regulation): defect rate stabilizing\");\r\n    if (last.defects > 0 && last.defects >= first.defects) observations.push(\"Law VII (Declining Quality): defect rate not improving\");\r\n  }\r\n  return observations;\r\n}\r\n\r\n// === Dependency Graph Evolution Analyzer ===\r\ninterface DependencyNode {\r\n  name: string;\r\n  version: string;\r\n  dependencies: string[];\r\n  deprecationStatus?: 'active' | 'deprecated' | 'end-of-life';\r\n  ageMonths: number;\r\n}\r\n\r\nclass EvolutionAnalyzer {\r\n  public analyzeDependencyGraph(nodes: DependencyNode[]): {\r\n    health: 'healthy' | 'aging' | 'critical';\r\n    deprecatedCount: number;\r\n    averageAgeMonths: number;\r\n    circularDependencies: string[][];\r\n    recommendations: string[];\r\n  } {\r\n    const circularDeps = this.findCircularDependencies(nodes);\r\n    const deprecatedCount = nodes.filter((n) => n.deprecationStatus === 'deprecated' || n.deprecationStatus === 'end-of-life').length;\r\n    const averageAgeMonths = nodes.reduce((s, n) => s + n.ageMonths, 0) / nodes.length;\r\n    const recommendations: string[] = [];\r\n\r\n    if (deprecatedCount > 0) {\r\n      recommendations.push(`Replace ${deprecatedCount} deprecated dependencies immediately`);\r\n    }\r\n    if (circularDeps.length > 0) {\r\n      recommendations.push(`Resolve ${circularDeps.length} circular dependencies by extracting shared interfaces`);\r\n    }\r\n    if (averageAgeMonths > 24) {\r\n      recommendations.push('Average dependency age exceeds 24 months — schedule dependency audit');\r\n    }\r\n    const health = deprecatedCount > 3 || circularDeps.length > 2 ? 'critical' : averageAgeMonths > 18 ? 'aging' : 'healthy';\r\n    return { health, deprecatedCount, averageAgeMonths: Math.round(averageAgeMonths), circularDependencies: circularDeps, recommendations };\r\n  }\r\n\r\n  private findCircularDependencies(nodes: DependencyNode[]): string[][] {\r\n    const cycles: string[][] = [];\r\n    const visited = new Set<string>();\r\n    const recursionStack = new Set<string>();\r\n    const path: string[] = [];\r\n    const nodeMap = new Map(nodes.map((n) => [n.name, n]));\r\n\r\n    const dfs = (name: string): void => {\r\n      if (recursionStack.has(name)) {\r\n        const cycleStart = path.indexOf(name);\r\n        if (cycleStart >= 0) cycles.push(path.slice(cycleStart));\r\n        return;\r\n      }\r\n      if (visited.has(name)) return;\r\n      visited.add(name);\r\n      recursionStack.add(name);\r\n      path.push(name);\r\n      const node = nodeMap.get(name);\r\n      if (node) {\r\n        for (const dep of node.dependencies) {\r\n          if (nodeMap.has(dep)) dfs(dep);\r\n        }\r\n      }\r\n      path.pop();\r\n      recursionStack.delete(name);\r\n    };\r\n    for (const node of nodes) dfs(node.name);\r\n    return cycles;\r\n  }\r\n}\r\n\r\n// === Version Migration Comparator ===\r\ninterface MigrationDiff {\r\n  added: string[];\r\n  removed: string[];\r\n  modified: { name: string; from: string; to: string }[];\r\n  breaking: boolean;\r\n}\r\nfunction compareVersions(oldApis: Record<string, string>, newApis: Record<string, string>): MigrationDiff {\r\n  const added: string[] = [];\r\n  const removed: string[] = [];\r\n  const modified: { name: string; from: string; to: string }[] = [];\r\n\r\n  for (const [name, sig] of Object.entries(newApis)) {\r\n    if (!(name in oldApis)) added.push(name);\r\n    else if (oldApis[name] !== sig) modified.push({ name, from: oldApis[name], to: sig });\r\n  }\r\n  for (const name of Object.keys(oldApis)) {\r\n    if (!(name in newApis)) removed.push(name);\r\n  }\r\n  return { added, removed, modified, breaking: removed.length > 0 || modified.length > 0 };\r\n}\r\n\r\n// === Technical Debt Tracker ===\r\ntype DebtCategory = \"code\" | \"design\" | \"test\" | \"documentation\" | \"infrastructure\";\r\ninterface DebtItem2 {\r\n  id: string;\r\n  description: string;\r\n  category: DebtCategory;\r\n  effortHours: number;\r\n  interestHours: number;\r\n  dateIdentified: Date;\r\n}\r\nclass DebtTracker {\r\n  private items: DebtItem2[] = [];\r\n  add(item: DebtItem2): void { this.items.push(item); }\r\n  getTotalDebt(): number { return this.items.reduce((s, i) => s + i.effortHours, 0); }\r\n  getTotalInterest(): number { return this.items.reduce((s, i) => s + i.interestHours, 0); }\r\n  getRatio(): number { return this.getTotalInterest() / (this.getTotalDebt() || 1); }\r\n  getByCategory(cat: DebtCategory): DebtItem2[] { return this.items.filter((i) => i.category === cat); }\r\n  prioritize(): DebtItem2[] {\r\n    return [...this.items].sort((a, b) => (b.interestHours / b.effortHours) - (a.interestHours / a.effortHours));\r\n  }\r\n}\r\n\r\n// Usage Examples\r\nconst tracker = new DebtTracker();\r\ntracker.add({ id: \"TD-1\", description: \"No error handling in API\", category: \"code\", effortHours: 8, interestHours: 40, dateIdentified: new Date() });\r\ntracker.add({ id: \"TD-2\", description: \"Missing integration tests\", category: \"test\", effortHours: 16, interestHours: 80, dateIdentified: new Date() });\r\nconsole.log(`Total debt: ${tracker.getTotalDebt()}h, Interest: ${tracker.getTotalInterest()}h, Ratio: ${tracker.getRatio().toFixed(1)}`);\r\n\r\nconst entities: CodeEntity[] = [\r\n  { name: \"UserService\", type: \"class\", dependencies: [\"Database\", \"Logger\", \"EmailService\", \"AuthService\", \"Cache\", \"Queue\"] },\r\n  { name: \"Logger\", type: \"module\", dependencies: [\"Config\"] },\r\n  { name: \"Database\", type: \"module\", dependencies: [\"Config\", \"ConnectionPool\"] },\r\n];\r\nconsole.log(new ImpactAnalyzerV2(entities).getImpactScore([\"Database\"]));\r\nconsole.log(detectRefactoringNeeds(entities));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\r\n    classDef commit fill:#e8eaf6,stroke:#3f51b5,stroke-width:2px\r\n    classDef debt fill:#fce4ec,stroke:#c62828,stroke-width:2px\r\n    classDef review fill:#fff3e0,stroke:#e65100,stroke-width:2px\r\n    classDef fix fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px\r\n\r\n    subgraph \"Technical Debt Lifecycle\"\r\n        COMMIT[Code Commit<br>New Feature or Fix]:::commit --> REVIEW2{Code Review}:::review\r\n        REVIEW2 -->|\"Quick hack approved\"| DEBT[Debt Incurred]:::debt\r\n        REVIEW2 -->|\"Clean code\"| NODEBT[No Debt]:::fix\r\n        \r\n        DEBT --> QUADRANT2[Classify Quadrant]:::debt\r\n        QUADRANT2 --> RCD[Reckless Deliberate<br>Expedite fix]:::debt\r\n        QUADRANT2 --> RCI[Reckless Inadvertent<br>Schedule training + fix]:::debt\r\n        QUADRANT2 --> PD[Prudent Deliberate<br>Track in backlog]:::debt\r\n        QUADRANT2 --> PI[Prudent Inadvertent<br>Fix when encountered]:::debt\r\n        \r\n        RCD --> TRACK2[Record in Debt Register]:::debt\r\n        RCI --> TRACK2\r\n        PD --> TRACK2\r\n        PI --> TRACK2\r\n        \r\n        TRACK2 --> INTEREST[Interest Accumulates<br>Each sprint costs more]:::debt\r\n        INTEREST --> REVIEW3{Quarterly<br>Debt Review}:::review\r\n        REVIEW3 -->|Pay Down| REFACTOR2[Schedule Refactoring Sprint]:::fix\r\n        REVIEW3 -->|Defer| INTEREST\r\n        REVIEW3 -->|Critical| PRIORITIZE[Prioritize in Backlog<br>Next sprint]:::fix\r\n        \r\n        REFACTOR2 --> FIX2[Refactor & Reduce Debt]:::fix\r\n        FIX2 --> VALIDATE[Validate with Tests]:::fix\r\n        VALIDATE --> RETIRE[Retire Debt Item<br>✓ Closed]:::fix\r\n    end\r\n    \r\n    subgraph \"Lehman's Feedback Loops\"\r\n        CHANGE[System Change]:::commit --> COMPLEXITY[Increasing Complexity<br>Law II]:::debt\r\n        COMPLEXITY --> REFACTOR3[Refactoring Required]:::review\r\n        REFACTOR3 -->|Without Refactoring| DECLINE[Quality Decline<br>Law VII]:::debt\r\n        REFACTOR3 -->|With Refactoring| STABILITY[Controlled Evolution<br>✓ Sustainable]:::fix\r\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Software evolution consumes the majority of lifecycle costs (60-80%). Maintenance is classified into four categories: corrective (fixing defects), adaptive (environmental changes), perfective (enhancements), and preventive (refactoring). Perfective maintenance dominates at ~55% of all maintenance activity."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lehman's eight laws describe the empirical dynamics of evolution. The most critical are Law I (Continuing Change — systems must constantly adapt), Law II (Increasing Complexity — entropy grows without deliberate refactoring), and Law VII (Declining Quality — quality drops without rigorous maintenance). These laws highlight that evolution is not optional but inevitable."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reverse engineering recovers design information from existing code, while reengineering combines reverse and forward engineering to modernize systems. The technical debt quadrant (reckless/prudent × deliberate/inadvertent) helps prioritize improvement work. Legacy systems require context-appropriate strategies ranging from scrapping to wrapping, with the strangler fig pattern offering the lowest-risk modernization path. Impact analysis quantifies change consequences through dependency graph traversal. Regression testing is essential throughout evolution to preserve existing behavior. Semantic versioning provides clear communication about change impact, and systematic debt tracking ensures that improvement work is visible, measurable, and prioritized."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Refactoring is not optional"
        }), " — without it, Lehman's Law of Increasing Complexity guarantees degradation. Invest 20% of each sprint in preventive maintenance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Track technical debt explicitly"
        }), " — quantify principal and interest, prioritize by debt ratio, and schedule repayment alongside features."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The strangler fig pattern is safer than big-bang rewrites"
        }), " — incremental replacement preserves business continuity and allows course correction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated tests are essential for evolution"
        }), " — without them, refactoring is just \"changing code and hoping.\" Maintain a comprehensive regression suite."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document decisions, not just code"
        }), " — future maintainers need to know why things were done, not just what was done. Architecture Decision Records (ADRs) are invaluable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy systems are valuable"
        }), " — they represent years of accumulated business logic and domain knowledge. Treat them with respect and extract their value."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Software entropy is measurable"
        }), " — track complexity metrics, duplicate code, dead code, and dependency cycles. Use them to guide improvement investment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact analysis prevents surprises"
        }), " — before making changes, trace the dependency graph to identify all affected components. Estimate effort from the ripple effect."]
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
            children: "Q1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintenance typically consumes 60-80% of total software lifecycle costs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Law II states complexity increases unless deliberate work reduces it"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy systems are defined by outdated technology, not modern architecture patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The strangler fig pattern incrementally replaces legacy components with new ones"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prudent & Deliberate debt is an intentional short-term decision with a plan to fix"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: What proportion of total lifecycle costs does maintenance typically represent?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) 20-30%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) 40-50%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) 60-80%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) 80-90%"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: Lehman's Law of Increasing Complexity states that:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Systems must be continually adapted or become unsatisfactory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Complexity increases unless deliberate work is performed to reduce it"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The growth of each release is statistically invariant"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Quality declines unless rigorously maintained"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: Which is NOT a characteristic of legacy systems?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Outdated technology platforms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Modern architecture patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Poor documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Shortage of developers with relevant skills"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: The strangler fig pattern is:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Rewriting the entire system at once"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Incrementally replacing legacy functionality with new implementations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Wrapping legacy systems with APIs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Freezing all changes to the system"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: In the technical debt quadrant, \"we must ship now, we'll fix later\" represents:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Reckless & Deliberate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Prudent & Deliberate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Reckless & Inadvertent"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Prudent & Inadvertent"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What proportion of total lifecycle costs is typically consumed by maintenance?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Distinguish between corrective and adaptive maintenance with examples."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "List and explain Lehman's eight laws of software evolution."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What distinguishes reverse engineering from reengineering?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the principal constraint on refactoring — what must be preserved?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Describe the strangler fig pattern for legacy system replacement."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What are the two dimensions used in legacy system portfolio analysis?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What are the four quadrants of the technical debt model?"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Break-Even Analysis:"
        }), " A 500,000-LOC system has an annual change rate of 15%. The maintenance team costs $1.2M/year. If a $300K refactoring programme reduces the annual change rate to 10%, calculate the break-even period."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click for solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Given:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Current maintenance cost: $1.2M/year"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Current change rate: 15% → $1.2M / 0.15 = $8M total value"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "After refactoring change rate: 10%"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "New maintenance cost: $8M × 0.10 = $0.8M/year"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Annual savings: $1.2M - $0.8M = $0.4M/year"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Refactoring investment: $300K"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Break-even: $300K / $400K = 0.75 years = 9 months"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " The refactoring pays for itself in 9 months."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Refactoring Plan:"
        }), " Propose a refactoring plan for a 2,000-line class handling persistence, business logic, and presentation with duplicated code in five locations. Show the before/after TypeScript code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click for solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// BEFORE: Monolithic class (2,000 lines, 3 responsibilities)\r\nclass OrderManager {\r\n  // Persistence\r\n  saveOrder(order: Order): void { /* SQL queries */ }\r\n  loadOrder(id: string): Order { /* SQL queries */ }\r\n  deleteOrder(id: string): void { /* SQL queries */ }\r\n  \r\n  // Business logic\r\n  calculateDiscount(amount: number, type: string): number { /* ... */ }\r\n  validateOrder(order: Order): boolean { /* ... */ }\r\n  applyTax(amount: number): number { /* ... */ }\r\n  \r\n  // Presentation\r\n  formatOrderAsHtml(order: Order): string { /* ... */ }\r\n  generateReceipt(order: Order): string { /* ... */ }\r\n  sendConfirmation(order: Order): void { /* email */ }\r\n}\r\n\r\n// AFTER: Decomposed into focused classes\r\nclass OrderRepository {\r\n  save(order: Order): Promise<void> { /* SQL queries */ }\r\n  load(id: string): Promise<Order> { /* SQL queries */ }\r\n}\r\n\r\nclass OrderService {\r\n  constructor(private repo: OrderRepository) {}\r\n  \r\n  calculateDiscount(amount: number, type: string): number { /* ... */ }\r\n  validateOrder(order: Order): boolean { /* ... */ }\r\n  applyTax(amount: number): number { /* ... */ }\r\n}\r\n\r\nclass OrderPresenter {\r\n  formatAsHtml(order: Order): string { /* ... */ }\r\n  generateReceipt(order: Order): string { /* ... */ }\r\n}\r\n\r\nclass NotificationService {\r\n  sendConfirmation(order: Order): void { /* email */ }\r\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Smell Detector:"
        }), " Implement a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CodeSmellDetector"
        }), " TypeScript class that detects long methods, large classes, duplicate code, and excessive parameter lists."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click for solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "interface CodeMetrics {\r\n  name: string;\r\n  lines: number;\r\n  methods: number;\r\n  avgParams: number;\r\n  complexity: number;\r\n  duplications: number;\r\n}\r\n\r\ninterface SmellReport {\r\n  type: string;\r\n  location: string;\r\n  severity: 'low' | 'medium' | 'high';\r\n  message: string;\r\n  suggestion: string;\r\n}\r\n\r\nclass CodeSmellDetector {\r\n  private thresholds = {\r\n    maxLinesPerFile: 300,\r\n    maxMethodsPerClass: 15,\r\n    maxParamsPerMethod: 4,\r\n    maxComplexity: 10,\r\n    maxDuplications: 3,\r\n  };\r\n\r\n  public analyze(metrics: CodeMetrics): SmellReport[] {\r\n    const smells: SmellReport[] = [];\r\n\r\n    if (metrics.lines > this.thresholds.maxLinesPerFile) {\r\n      smells.push({\r\n        type: 'Large Class',\r\n        location: metrics.name,\r\n        severity: 'high',\r\n        message: `File is ${metrics.lines} lines (max: ${this.thresholds.maxLinesPerFile})`,\r\n        suggestion: 'Extract Class: Split into smaller cohesive classes',\r\n      });\r\n    }\r\n\r\n    if (metrics.methods > this.thresholds.maxMethodsPerClass) {\r\n      smells.push({\r\n        type: 'Too Many Methods',\r\n        location: metrics.name,\r\n        severity: 'medium',\r\n        message: `Class has ${metrics.methods} methods (max: ${this.thresholds.maxMethodsPerClass})`,\r\n        suggestion: 'Consider extracting related methods into separate classes',\r\n      });\r\n    }\r\n\r\n    if (metrics.avgParams > this.thresholds.maxParamsPerMethod) {\r\n      smells.push({\r\n        type: 'Long Parameter List',\r\n        location: metrics.name,\r\n        severity: 'medium',\r\n        message: `Average parameter count is ${metrics.avgParams}`,\r\n        suggestion: 'Introduce Parameter Object',\r\n      });\r\n    }\r\n\r\n    if (metrics.complexity > this.thresholds.maxComplexity) {\r\n      smells.push({\r\n        type: 'High Cyclomatic Complexity',\r\n        location: metrics.name,\r\n        severity: 'high',\r\n        message: `Complexity: ${metrics.complexity} (max: ${this.thresholds.maxComplexity})`,\r\n        suggestion: 'Replace Conditional with Polymorphism',\r\n      });\r\n    }\r\n\r\n    if (metrics.duplications > this.thresholds.maxDuplications) {\r\n      smells.push({\r\n        type: 'Duplicate Code',\r\n        location: metrics.name,\r\n        severity: 'medium',\r\n        message: `${metrics.duplications} duplicate blocks found`,\r\n        suggestion: 'Extract Method to eliminate duplication',\r\n      });\r\n    }\r\n\r\n    return smells;\r\n  }\r\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lehman's Law Analysis:"
        }), " Analyse a legacy system using Lehman's laws. For each law, provide an example of how it applies to the system."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click for solution"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "System:"
        }), " A 20-year-old enterprise resource planning (ERP) system"]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Law"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Application to ERP System"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "I. Continuing Change"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Must support new tax regulations annually or become non-compliant"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "II. Increasing Complexity"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Codebase grew from 200K to 2M LOC without refactoring — bug fix time doubled"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "III. Self-Regulation"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Defect rate stabilizes at ~50 per release regardless of system size"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "IV. Conservation of Stability"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Team of 8 delivers consistent 30 story points per sprint"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "V. Conservation of Familiarity"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Each release adds 5-8 modules, never 50"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "VI. Continuing Growth"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Must add mobile support, cloud deployment, AI features to retain users"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "VII. Declining Quality"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Response time degraded 50% over 5 years without performance optimization"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "VIII. Feedback System"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Database schema change cascaded through 40+ modules, causing 3-week delay"
            })]
          })]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Challenge Problem:"
        }), " A government social security agency operates a thirty-year-old system written in an obsolete language. Documentation is incomplete, original developers have retired, and the system cannot be replaced because business rules are not fully understood. Recent legislation requires significant changes to eligibility rules, and the system must integrate with a modern citizen portal. Develop a comprehensive evolution strategy."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click for solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Strategy: Knowledge Recovery + Strangler Fig + API Encapsulation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Phase 1 (Months 1-4) — Knowledge Recovery:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Deploy runtime monitoring to capture all business rules from production behavior"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Create automated tests comparing old vs. new outputs (characterization tests)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Document discovered business rules in an Architecture Decision Record (ADR) log"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Interview SMEs and document legacy knowledge before retirement"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Phase 2 (Months 5-8) — API Encapsulation:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Wrap legacy system behind REST APIs (without modifying legacy code)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Build the citizen portal as a new frontend consuming these APIs"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Add request/response logging for full traceability"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Phase 3 (Months 9-16) — Legislation Implementation:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Implement new eligibility rules in a new service alongside the legacy system"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Use feature flags to route between old and new implementations"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Compare results from both systems in production shadow mode"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Phase 4 (Months 17-30) — Incremental Replacement:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Use strangler fig pattern to replace legacy modules one by one"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Each replacement module must pass 1,000+ regression tests comparing with legacy"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Migrate data incrementally, preserving full audit trail"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "class ModernizationPlanner {\r\n  private modules: { name: string; status: 'legacy' | 'wrapped' | 'migrating' | 'retired' }[] = [];\r\n\r\n  constructor(moduleNames: string[]) {\r\n    this.modules = moduleNames.map(name => ({ name, status: 'legacy' }));\r\n  }\r\n\r\n  wrapModule(name: string, apiEndpoint: string): void {\r\n    const module = this.modules.find(m => m.name === name);\r\n    if (module) module.status = 'wrapped';\r\n    console.log(`[API Encapsulation] ${name} → ${apiEndpoint}`);\r\n  }\r\n\r\n  migrateModule(name: string, shadowPercentage: number): void {\r\n    const module = this.modules.find(m => m.name === name);\r\n    if (module) module.status = 'migrating';\r\n    console.log(`[Strangler Fig] ${name}: routing ${shadowPercentage}% traffic to new service`);\r\n  }\r\n\r\n  retireModule(name: string): void {\r\n    const module = this.modules.find(m => m.name === name);\r\n    if (module) module.status = 'retired';\r\n    console.log(`[Retired] ${name} — legacy system module decommissioned`);\r\n  }\r\n\r\n  getProgress(): string {\r\n    const total = this.modules.length;\r\n    const retired = this.modules.filter(m => m.status === 'retired').length;\r\n    return `Progress: ${retired}/${total} modules retired (${Math.round(retired / total * 100)}%)`;\r\n  }\r\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary-1",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Software evolution consumes the majority of lifecycle costs. Maintenance is classified as corrective, adaptive, perfective, and preventive. Lehman's eight laws describe the empirical dynamics of evolution, including the inevitable increase in complexity (Law II) and the necessity of continuing change (Law I). Reverse engineering recovers design information from existing code. Refactoring catalogues provide behaviour-preserving transformations (Extract Method, Replace Conditional with Polymorphism, Extract Class). The technical debt quadrant helps prioritise improvement work. Legacy systems require strategies from scrapping to wrapping. Impact analysis quantifies change consequences. Software entropy metrics provide early warning of degradation. Regression testing is essential throughout evolution. Semantic versioning communicates change impact clearly."
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



/***/ }

}]);