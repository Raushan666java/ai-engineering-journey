"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[28523],{

/***/ 83052
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_software_engineering_06_testing_md_c66_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-software-engineering-06-testing-md-c66.json
const site_docs_courses_software_engineering_06_testing_md_c66_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/software-engineering/06-testing","title":"Software Testing","description":"Learning Objectives","source":"@site/docs/courses/software-engineering/06-testing.md","sourceDirName":"courses/software-engineering","slug":"/software-engineering/06-testing","permalink":"/ai-engineering-journey/software-engineering/06-testing","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"06-testing","slug":"/software-engineering/06-testing","title":"Software Testing","sidebar_label":"Software Testing","sidebar_position":6},"sidebar":"course-software-engineering","previous":{"title":"Design and Implementation","permalink":"/ai-engineering-journey/software-engineering/05-design-implementation"},"next":{"title":"Software Evolution","permalink":"/ai-engineering-journey/software-engineering/07-software-evolution"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/software-engineering/06-testing.md


const frontMatter = {
	id: '06-testing',
	slug: '/software-engineering/06-testing',
	title: 'Software Testing',
	sidebar_label: 'Software Testing',
	sidebar_position: 6
};
const contentTitle = 'Software Testing';

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
  "value": "Verification and Validation",
  "id": "verification-and-validation",
  "level": 3
}, {
  "value": "The Test Pyramid",
  "id": "the-test-pyramid",
  "level": 3
}, {
  "value": "Levels of Testing",
  "id": "levels-of-testing",
  "level": 3
}, {
  "value": "White-Box Testing Techniques",
  "id": "white-box-testing-techniques",
  "level": 3
}, {
  "value": "Black-Box Testing Techniques",
  "id": "black-box-testing-techniques",
  "level": 3
}, {
  "value": "Test Doubles",
  "id": "test-doubles",
  "level": 3
}, {
  "value": "TDD Cycle: Red-Green-Refactor",
  "id": "tdd-cycle-red-green-refactor",
  "level": 3
}, {
  "value": "Worked Example: String Calculator",
  "id": "worked-example-string-calculator",
  "level": 4
}, {
  "value": "BDD (Behavior-Driven Development)",
  "id": "bdd-behavior-driven-development",
  "level": 3
}, {
  "value": "Property-Based Testing",
  "id": "property-based-testing",
  "level": 3
}, {
  "value": "Mutation Testing",
  "id": "mutation-testing",
  "level": 3
}, {
  "value": "Non-Functional Testing",
  "id": "non-functional-testing",
  "level": 3
}, {
  "value": "CI/CD Test Pipeline",
  "id": "cicd-test-pipeline",
  "level": 3
}, {
  "value": "Case Studies",
  "id": "case-studies",
  "level": 2
}, {
  "value": "Case Study 1: Payment Processing System — Testing Strategy",
  "id": "case-study-1-payment-processing-system--testing-strategy",
  "level": 3
}, {
  "value": "Case Study 2: Medical Device Software — Regulatory Testing",
  "id": "case-study-2-medical-device-software--regulatory-testing",
  "level": 3
}, {
  "value": "Case Study 3: E-Commerce Platform — Shift-Left Testing",
  "id": "case-study-3-e-commerce-platform--shift-left-testing",
  "level": 3
}, {
  "value": "Test Runner and Automation Tools",
  "id": "test-runner-and-automation-tools",
  "level": 2
}, {
  "value": "Coverage Analyzer — Statement, Branch, Path Coverage",
  "id": "coverage-analyzer--statement-branch-path-coverage",
  "level": 3
}, {
  "value": "TDD Workflow — Red-Green-Refactor Simulator",
  "id": "tdd-workflow--red-green-refactor-simulator",
  "level": 3
}, {
  "value": "Additional Testing Tools",
  "id": "additional-testing-tools",
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
        id: "software-testing",
        children: "Software Testing"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "✓ Distinguish between verification and validation in the V&V context\n✓ Describe the four levels of testing: unit, integration, system, acceptance\n✓ Apply white-box testing techniques: statement, branch, path, condition, MC/DC coverage\n✓ Apply black-box testing techniques: equivalence partitioning, boundary value analysis, decision tables, state transition\n✓ Execute the TDD red-green-refactor cycle with a worked TypeScript example\n✓ Understand the test pyramid and its strategic trade-offs\n✓ Create and use test doubles: dummy, fake, stub, spy, mock\n✓ Understand property-based testing and mutation testing concepts\n✓ Apply BDD principles with user-story-driven test scenarios\n✓ Design a CI/CD test pipeline with quality gates\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "verification-and-validation",
      children: "Verification and Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verification and validation (V&V) are the two principal approaches to establishing that a software system meets its specification and satisfies stakeholder needs."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    classDef vv fill:#e3f2fd,stroke:#1565c0\n    classDef v fill:#e8f5e9,stroke:#2e7d32\n    classDef v2 fill:#fff3e0,stroke:#e65100\n\n    VV[V&V Activities]:::vv --> V[Verification: Are we building the product RIGHT?]:::v\n    VV --> V2[Validation: Are we building the RIGHT product?]:::v2\n    V --> S[Static: Reviews, inspections, walkthroughs]:::v\n    V --> D[Dynamic: Testing]:::v\n    V2 --> AT[Acceptance Testing]:::v2\n    V2 --> PROTO[Prototyping]:::v2\n    V2 --> USER[User Feedback]:::v2\n    \n    S --> REQ_REV[Requirements Review]:::v\n    S --> DES_REV[Design Review]:::v\n    S --> CODE_REV[Code Review]:::v\n    D --> UNIT[Unit Testing]:::v\n    D --> INT[Integration Testing]:::v\n    D --> SYS[System Testing]:::v\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verification:"
        }), " \"Are we building the product right?\" — checks conformance to specification through static (reviews, inspections) and dynamic (testing) methods."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation:"
        }), " \"Are we building the right product?\" — checks that the system meets actual customer needs through acceptance testing, prototyping, and user feedback."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-test-pyramid",
      children: "The Test Pyramid"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The test pyramid, proposed by Cohn, describes the ideal distribution of automated tests:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    classDef e2e fill:#fce4ec,stroke:#c62828\n    classDef svc fill:#fff3e0,stroke:#e65100\n    classDef unit fill:#e8f5e9,stroke:#2e7d32\n\n    subgraph \"Test Automation Pyramid\"\n        E2E[End-to-End Tests<br>5-10% · Slow · High Confidence]:::e2e\n        SVC[Service / Integration Tests<br>15-20% · Medium · Medium Confidence]:::svc\n        UNIT[Unit Tests<br>70-80% · Fast · Low Confidence]:::unit\n    end\n    \n    E2E --> SVC\n    SVC --> UNIT\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Count"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Confidence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fragility"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost to Maintain"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unit tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many (70-80%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (ms)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (per test)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Service/API tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some (15-20%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "End-to-end tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Few (5-10%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (min)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (for flows)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "levels-of-testing",
      children: "Levels of Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    classDef unit fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px\n    classDef int fill:#e3f2fd,stroke:#1565c0,stroke-width:2px\n    classDef sys fill:#fff3e0,stroke:#e65100,stroke-width:2px\n    classDef acc fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px\n\n    subgraph \"Testing Levels Progression\"\n        UT[UNIT<br>Component isolation]:::unit --> IT[INTEGRATION<br>Module interactions]:::int\n        IT --> ST[SYSTEM<br>Complete system]:::sys\n        ST --> AT[ACCEPTANCE<br>User requirements]:::acc\n    end\n    \n    IT --> BT[Big Bang<br>All at once]:::int\n    IT --> TD[Top-Down<br>Stubs for lower]:::int\n    IT --> BU[Bottom-Up<br>Drivers for upper]:::int\n    IT --> SW[Sandwich<br>Hybrid approach]:::int\n    \n    AT --> ALPHA[Alpha Testing<br>At developer site]:::acc\n    AT --> BETA[Beta Testing<br>At customer site]:::acc\n    AT --> UAT[UAT<br>Business validation]:::acc\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Unit testing"
      }), " verifies individual components in isolation. Tested by developers using frameworks like Bun test, Jest, or Vitest. Each test focuses on a single function, method, or class with all external dependencies replaced by test doubles."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration testing"
      }), " verifies that units work together. Strategies include:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Big bang:"
        }), " All components combined at once — simple setup but hard to isolate failures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Top-down:"
        }), " High-level components tested first, lower-level components stubbed — reveals architectural issues early"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bottom-up:"
        }), " Low-level components tested with drivers — ensures foundation is solid"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sandwich:"
        }), " Combination of top-down and bottom-up — balanced approach"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "System testing"
      }), " verifies the complete system against requirements. Includes functional, performance, security, and usability testing on the fully integrated system."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Acceptance testing"
      }), " determines whether the system satisfies acceptance criteria:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Alpha testing:"
        }), " Customer representatives test at the developer's site in a controlled environment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Beta testing:"
        }), " Real users test at their own site in production-like conditions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UAT (User Acceptance Testing):"
        }), " Validates business processes and workflows"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "white-box-testing-techniques",
      children: "White-Box Testing Techniques"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    classDef weak fill:#fce4ec,stroke:#c62828\n    classDef mod fill:#fff3e0,stroke:#e65100\n    classDef strong fill:#e8f5e9,stroke:#2e7d32\n\n    subgraph \"Coverage Criteria Hierarchy\"\n        SC[Statement Coverage<br>Every line executed]:::weak -->|Subsumed by| BC[Branch Coverage<br>Every decision outcome]:::mod\n        BC -->|Subsumed by| PC[Path Coverage<br>Every execution path]:::strong\n        CC[Condition Coverage<br>Each atomic T/F]:::mod -->|Subsumed by| MCC[MC/DC Coverage<br>Each condition independently affects outcome]:::strong\n    end\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strength"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practicality"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Statement coverage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every executable statement executed at least once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weakest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to achieve (70-80% common)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Branch coverage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every decision outcome (true/false) exercised"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stronger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard target (80-90%)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Path coverage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every unique execution path exercised"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strongest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Often impractical (exponential paths)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Condition coverage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each atomic condition evaluated to T and F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Useful for complex conditions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MC/DC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each condition independently affects outcome"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required for DO-178C (aviation)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example — White-box test analysis:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function calculateDiscount(price: number, isMember: boolean, couponCode?: string): number {\n  let discount = 0;\n  // Statement 1\n  if (isMember) {\n    discount += 0.1; // Branch A: true\n  } else {\n    discount += 0.05; // Branch A: false\n  }\n  // Statement 2\n  if (couponCode === 'SAVE20') {\n    discount += 0.2; // Branch B: true\n  }\n  // Statement 3\n  if (price > 100) {\n    discount += 0.05; // Branch C: true\n  }\n  // Statement 4\n  return Math.min(discount, 0.5) * price;\n}\n\n// Test cases for 100% branch coverage:\n// TC1: price=50, isMember=true, couponCode='SAVE20' → branches: A-T, B-T, C-F\n// TC2: price=50, isMember=false, couponCode=undefined → branches: A-F, B-F, C-F\n// TC3: price=200, isMember=false, couponCode=undefined → branches: A-F, B-F, C-T\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "black-box-testing-techniques",
      children: "Black-Box Testing Techniques"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Equivalence Partitioning:"
      }), " Divides the input domain into equivalence classes where the system behaves equivalently for all values in a class. One test per class suffices."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Boundary Value Analysis:"
      }), " Selects test cases at the boundaries of equivalence classes. Defects frequently occur at boundaries (off-by-one errors, incorrect comparisons)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Example: testing a function that accepts ages 18-120\nfunction validateAge(age: number): boolean {\n  return age >= 18 && age <= 120;\n}\n\n// Equivalence classes:\n// Valid: 18-120\n// Invalid: < 18, > 120, non-numeric, null, undefined\n\n// Boundary values:\n// Low boundary: 17 (invalid), 18 (valid), 19 (valid)\n// High boundary: 119 (valid), 120 (valid), 121 (invalid)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision Tables:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Conditions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rule 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rule 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rule 3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rule 4"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rule 5"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rule 6"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Valid account?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Account locked?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Password correct?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Under max attempts?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Actions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Allow login"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Show error"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "X"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Increment attempts"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "X"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "X"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lock account (3 failures)"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "X"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Decision tables ensure complete coverage of combinations. Each rule represents a unique combination of conditions and the resulting actions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "State Transition Testing:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface StateMachine {\n  states: string[];\n  transitions: { from: string; event: string; to: string }[];\n  testCases: { initialState: string; events: string[]; expectedFinalState: string }[];\n}\n\nclass StateTransitionTester {\n  public validateTransitions(sm: StateMachine): { valid: boolean; errors: string[] } {\n    const errors: string[] = [];\n    for (const tc of sm.testCases) {\n      let currentState = tc.initialState;\n      for (const event of tc.events) {\n        const transition = sm.transitions.find(\n          (t) => t.from === currentState && t.event === event\n        );\n        if (!transition) {\n          errors.push(`No transition from '${currentState}' on event '${event}'`);\n          break;\n        }\n        currentState = transition.to;\n      }\n      if (currentState !== tc.expectedFinalState) {\n        errors.push(`Expected final state '${tc.expectedFinalState}' but got '${currentState}'`);\n      }\n    }\n    return { valid: errors.length === 0, errors };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-doubles",
      children: "Test Doubles"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dummy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Passed but never used; fills parameter lists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When an argument is required but not exercised"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fake"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Working implementation with shortcuts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-memory database replacing real database"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stub"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns predefined answers for specific calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When you need controlled responses from dependencies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Spy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Records interactions for later verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verifying a method was called with correct arguments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mock"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-programmed with expectations and verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Behavior verification in interaction testing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Example: Mock repository for testing\ninterface UserRepository {\n  findById(id: string): Promise<User | null>;\n  save(user: User): Promise<void>;\n}\n\nclass MockUserRepository implements UserRepository {\n  private users: Map<string, User> = new Map();\n  \n  public findById(id: string): Promise<User | null> {\n    return Promise.resolve(this.users.get(id) ?? null);\n  }\n  \n  public save(user: User): Promise<void> {\n    this.users.set(user.id, user);\n    return Promise.resolve();\n  }\n  \n  // Spy capability\n  public findByIdCalls: string[] = [];\n  public saveCalls: User[] = [];\n  \n  public findByIdWithSpy(id: string): Promise<User | null> {\n    this.findByIdCalls.push(id);\n    return this.findById(id);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tdd-cycle-red-green-refactor",
      children: "TDD Cycle: Red-Green-Refactor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    classDef red fill:#fce4ec,stroke:#c62828,stroke-width:3px\n    classDef green fill:#e8f5e9,stroke:#2e7d32,stroke-width:3px\n    classDef ref fill:#e3f2fd,stroke:#1565c0,stroke-width:3px\n\n    RED[RED: Write a failing test<br>Think about specification first]:::red --> GREEN[GREEN: Write minimal code to pass<br>Just enough to satisfy test]:::green\n    GREEN --> REFACTOR[REFACTOR: Improve code quality<br>Remove duplication, improve names]:::ref\n    REFACTOR --> RED\n    \n    RED -.->|\"What should this do?\"| SPEC[Define expected behavior]\n    GREEN -.->|\"Make it work\"| IMPL[Implementation]\n    REFACTOR -.->|\"Make it clean\"| QUALITY[Code quality]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "worked-example-string-calculator",
      children: "Worked Example: String Calculator"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1 (RED):"
      }), " Write a failing test."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { describe, expect, test } from 'bun:test';\n\ndescribe('StringCalculator', () => {\n  test('returns 0 for empty string', () => {\n    expect(add('')).toBe(0);\n  });\n\n  test('returns the number for a single number', () => {\n    expect(add('1')).toBe(1);\n  });\n\n  test('returns sum for two numbers separated by comma', () => {\n    expect(add('1,2')).toBe(3);\n  });\n\n  test('returns sum for multiple numbers', () => {\n    expect(add('1,2,3,4,5')).toBe(15);\n  });\n\n  test('handles newline as delimiter', () => {\n    expect(add('1\\n2,3')).toBe(6);\n  });\n\n  test('supports custom delimiter', () => {\n    expect(add('//;\\n1;2')).toBe(3);\n  });\n\n  test('throws on negative numbers', () => {\n    expect(() => add('1,-2,3')).toThrow('negatives not allowed: -2');\n  });\n\n  test('ignores numbers greater than 1000', () => {\n    expect(add('2,1001')).toBe(2);\n  });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2 (GREEN):"
      }), " Write minimal code to pass."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function add(input: string): number {\n  if (input === '') return 0;\n\n  let delimiter = /,|\\n/;\n  let numbers = input;\n\n  if (input.startsWith('//')) {\n    const delimiterEnd = input.indexOf('\\n');\n    delimiter = new RegExp(input.substring(2, delimiterEnd));\n    numbers = input.substring(delimiterEnd + 1);\n  }\n\n  const tokens = numbers.split(delimiter);\n  const negatives = tokens.filter((n) => parseInt(n) < 0);\n\n  if (negatives.length > 0) {\n    throw new Error(`negatives not allowed: ${negatives.join(',')}`);\n  }\n\n  return tokens\n    .map((n) => parseInt(n))\n    .filter((n) => n <= 1000)\n    .reduce((sum, n) => sum + n, 0);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3 (REFACTOR):"
      }), " Improve the code."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function add(input: string): number {\n  if (input === '') return 0;\n\n  const { delimiter, numberStr } = parseDelimiter(input);\n  const numbers = parseNumbers(numberStr, delimiter);\n  validateNoNegatives(numbers);\n  return sumNumbers(numbers);\n}\n\nfunction parseDelimiter(input: string): { delimiter: RegExp; numberStr: string } {\n  if (input.startsWith('//')) {\n    const delimiterEnd = input.indexOf('\\n');\n    const delim = input.substring(2, delimiterEnd);\n    return { delimiter: new RegExp(delim), numberStr: input.substring(delimiterEnd + 1) };\n  }\n  return { delimiter: /,|\\n/, numberStr: input };\n}\n\nfunction parseNumbers(input: string, delimiter: RegExp): number[] {\n  return input.split(delimiter).map((n) => parseInt(n));\n}\n\nfunction validateNoNegatives(numbers: number[]): void {\n  const negatives = numbers.filter((n) => n < 0);\n  if (negatives.length > 0) {\n    throw new Error(`negatives not allowed: ${negatives.join(',')}`);\n  }\n}\n\nfunction sumNumbers(numbers: number[]): number {\n  return numbers\n    .filter((n) => n <= 1000)\n    .reduce((sum, n) => sum + n, 0);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bdd-behavior-driven-development",
      children: "BDD (Behavior-Driven Development)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BDD extends TDD by writing tests in a natural language format that non-technical stakeholders can understand:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// BDD-style test using Given-When-Then\ndescribe('Shopping Cart', () => {\n  test('should calculate total with tax for multiple items', () => {\n    // Given\n    const cart = new ShoppingCart();\n    cart.addItem({ name: 'Book', price: 10, quantity: 2 });\n    cart.addItem({ name: 'Pen', price: 2, quantity: 3 });\n    \n    // When\n    const total = cart.calculateTotal({ taxRate: 0.08 });\n    \n    // Then\n    expect(total).toBeCloseTo(27.0, 1); // (20 + 6) * 1.08 = 28.08\n  });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "property-based-testing",
      children: "Property-Based Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Property-based testing verifies that a function satisfies certain properties for a wide range of inputs, rather than checking specific examples."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { describe, expect, test } from 'bun:test';\n\n// Property: reversing a string twice gives the original string\nfunction reverse(str: string): string {\n  return str.split('').reverse().join('');\n}\n\n// Property-based test\ndescribe('reverse properties', () => {\n  test('reversing twice gives original', () => {\n    const inputs = ['hello', 'a', '', 'racecar', '12345', 'typescript'];\n    for (const input of inputs) {\n      expect(reverse(reverse(input))).toBe(input);\n    }\n  });\n\n  test('reversing preserves length', () => {\n    const inputs = ['hello', 'world', '', 'typescript', 'property-based'];\n    for (const input of inputs) {\n      expect(reverse(input).length).toBe(input.length);\n    }\n  });\n\n  test('reversing a palindrome gives same string', () => {\n    const palindromes = ['racecar', 'level', 'radar', 'madam', 'refer'];\n    for (const p of palindromes) {\n      expect(reverse(p)).toBe(p);\n    }\n  });\n\n  test('reversing distributes over concatenation', () => {\n    const inputs = [\n      ['hello', 'world'],\n      ['abc', 'def'],\n      ['foo', 'bar'],\n    ];\n    for (const [a, b] of inputs) {\n      // reverse(a + b) = reverse(b) + reverse(a)\n      expect(reverse(a + b)).toBe(reverse(b) + reverse(a));\n    }\n  });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mutation-testing",
      children: "Mutation Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mutation testing evaluates test quality by introducing small changes (mutations) to the source code and checking whether the tests detect them."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Mutation {\n  id: string;\n  operator: string;\n  originalCode: string;\n  mutatedCode: string;\n  killed: boolean;\n}\n\nclass MutationTester {\n  public generateMutations(sourceCode: string): Mutation[] {\n    const mutations: Mutation[] = [];\n    let id = 0;\n    \n    // Relational operator mutations\n    const relOps = [\n      { from: '>', to: '>=' },\n      { from: '<', to: '<=' },\n      { from: '>=', to: '>' },\n      { from: '<=', to: '<' },\n      { from: '===', to: '!==' },\n      { from: '!==', to: '===' },\n    ];\n    \n    for (const op of relOps) {\n      if (sourceCode.includes(op.from)) {\n        mutations.push({\n          id: `M-${++id}`,\n          operator: `Replace ${op.from} with ${op.to}`,\n          originalCode: sourceCode,\n          mutatedCode: sourceCode.replace(op.from, op.to),\n          killed: false,\n        });\n      }\n    }\n    \n    // Logical operator mutations\n    if (sourceCode.includes('&&')) {\n      mutations.push({\n        id: `M-${++id}`,\n        operator: 'Replace && with ||',\n        originalCode: sourceCode,\n        mutatedCode: sourceCode.replace('&&', '||'),\n        killed: false,\n      });\n    }\n    \n    // Constant mutations\n    const constMatch = sourceCode.match(/\\b(\\d+)\\b/g);\n    if (constMatch) {\n      for (const c of constMatch) {\n        mutations.push({\n          id: `M-${++id}`,\n          operator: `Replace ${c} with ${c + 1} (off-by-one)`,\n          originalCode: sourceCode,\n          mutatedCode: sourceCode.replace(c, String(Number(c) + 1)),\n          killed: false,\n        });\n      }\n    }\n    \n    return mutations;\n  }\n\n  public calculateMutationScore(mutations: Mutation[]): number {\n    const killed = mutations.filter((m) => m.killed).length;\n    return mutations.length > 0 ? killed / mutations.length : 0;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "non-functional-testing",
      children: "Non-Functional Testing"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Tests"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Techniques"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Automation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System behaviour under load"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load testing, stress testing, endurance, spike testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k6, Artillery, Locust"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerability identification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Penetration testing, SAST, DAST, dependency scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OWASP ZAP, SonarQube"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Usability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ease of learning and use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User observation, heuristic evaluation, A/B testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual + analytics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reliability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System uptime and fault tolerance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chaos engineering, failover testing, soak testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chaos Monkey, Litmus"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Regression"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Existing functionality still works"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated test suite re-execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI pipeline integration"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cicd-test-pipeline",
      children: "CI/CD Test Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    classDef commit fill:#e8eaf6,stroke:#3f51b5\n    classDef fast fill:#e8f5e9,stroke:#2e7d32\n    classDef slow fill:#fff3e0,stroke:#e65100\n    classDef gate fill:#fce4ec,stroke:#c62828\n\n    COMMIT[Code Commit]:::commit --> LINT[Lint & Type Check]:::fast\n    LINT --> UNIT2[Unit Tests<br>< 2 min]:::fast\n    UNIT2 --> GATE1{Quality Gate<br>80% coverage?}:::gate\n    GATE1 -->|Pass| BUILD[Build & Package]:::fast\n    GATE1 -->|Fail| REJECT[Reject Commit]:::gate\n    BUILD --> INTEGRATION[Integration Tests<br>< 10 min]:::slow\n    INTEGRATION --> GATE2{Quality Gate<br>All pass?}:::gate\n    GATE2 -->|Pass| E2E[E2E Tests<br>< 30 min]:::slow\n    GATE2 -->|Fail| REJECT2[Reject Build]:::gate\n    E2E --> GATE3{Quality Gate<br>Critical flows pass?}:::gate\n    GATE3 -->|Pass| DEPLOY[Deploy to Staging]:::commit\n    GATE3 -->|Fail| REJECT2\n    DEPLOY --> PERF[Performance Tests]:::slow\n    PERF --> SEC[Security Scan]:::slow\n    SEC --> GATE4{All Gates Pass?}:::gate\n    GATE4 -->|Yes| PROD_DEPLOY[Deploy to Production]:::commit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-studies",
      children: "Case Studies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-1-payment-processing-system--testing-strategy",
      children: "Case Study 1: Payment Processing System — Testing Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A fintech startup building a payment processing system needed to ensure 99.99% reliability. They implemented a comprehensive test strategy:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Unit tests (1,500+):"
      }), " Each validation rule, fee calculation, and currency conversion function tested in isolation with mocked external services. Achieved 92% line coverage."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration tests (200+):"
      }), " Tested the interaction between the payment gateway, fraud detection service, and notification system using testcontainers for database and message queue."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "E2E tests (20):"
      }), " Simulated complete payment flows from checkout to settlement using a sandbox environment. Run nightly."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mutation testing:"
      }), " Achieved 85% mutation score, identifying 40+ tests that passed but didn't actually validate the right behavior. These were rewritten to be more specific."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Zero production incidents in 18 months. Deployment frequency increased from weekly to multiple times per day."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-2-medical-device-software--regulatory-testing",
      children: "Case Study 2: Medical Device Software — Regulatory Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A company developing an MRI machine control system needed FDA clearance (IEC 62304). The testing approach:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MC/DC coverage:"
      }), " Required for safety-critical functions. For a patient dose calculation function with 12 conditions, they generated 13 test cases achieving 100% MC/DC coverage."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Traceability matrix:"
      }), " Every requirement mapped to 3-5 test cases. A TypeScript-based traceability tool ensured no gaps."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Risk-based testing:"
      }), " High-risk functions (those affecting radiation dosage) received 3x more test cases than low-risk functions (logging, UI cosmetics)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " FDA clearance achieved in 14 months (industry average: 24+ months). Zero major findings during audit."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-3-e-commerce-platform--shift-left-testing",
      children: "Case Study 3: E-Commerce Platform — Shift-Left Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A large e-commerce platform with 200+ microservices adopted shift-left testing to reduce production defects:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "TDD adoption:"
      }), " All new features developed using TDD. Defect rate dropped 60% in 6 months."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Contract testing:"
      }), " Each service team published consumer-driven contracts. Breaking changes detected before deployment."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Test pyramid enforcement:"
      }), " CI pipeline rejected PRs where the test ratio fell below 70% unit, 20% integration, 10% E2E."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Deployment frequency increased from monthly to daily. Mean time to recover (MTTR) dropped from 4 hours to 15 minutes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "test-runner-and-automation-tools",
      children: "Test Runner and Automation Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Test Runner — Automated Test Executor with Reporting\ninterface TestResult {\n  name: string;\n  passed: boolean;\n  durationMs: number;\n  error?: string;\n}\n\ninterface TestSuite {\n  name: string;\n  tests: (() => Promise<TestResult>)[];\n}\n\nclass TestRunner {\n  private suites: TestSuite[] = [];\n  private results: TestResult[] = [];\n\n  public register(suite: TestSuite): void {\n    this.suites.push(suite);\n  }\n\n  public async runAll(): Promise<{ passed: number; failed: number; total: number; durationMs: number }> {\n    const startTime = Date.now();\n    this.results = [];\n\n    for (const suite of this.suites) {\n      console.log(`\\nRunning suite: ${suite.name}`);\n      for (const test of suite.tests) {\n        try {\n          const result = await test();\n          this.results.push(result);\n          const icon = result.passed ? '✓' : '✗';\n          console.log(`  ${icon} ${result.name} (${result.durationMs}ms)`);\n          if (!result.passed) {\n            console.log(`    Error: ${result.error}`);\n          }\n        } catch (err) {\n          this.results.push({\n            name: test.name,\n            passed: false,\n            durationMs: 0,\n            error: String(err),\n          });\n        }\n      }\n    }\n\n    const durationMs = Date.now() - startTime;\n    const passed = this.results.filter((r) => r.passed).length;\n    const failed = this.results.filter((r) => !r.passed).length;\n\n    console.log(`\\n=== Results: ${passed}/${this.results.length} passed (${durationMs}ms) ===`);\n    if (failed > 0) {\n      console.log('Failed tests:');\n      this.results.filter((r) => !r.passed).forEach((r) => console.log(`  - ${r.name}: ${r.error}`));\n    }\n\n    return { passed, failed, total: this.results.length, durationMs };\n  }\n\n  public generateJUnitXml(): string {\n    // Generates JUnit-compatible XML for CI integration\n    const lines: string[] = ['<?xml version=\"1.0\" encoding=\"UTF-8\"?>'];\n    lines.push(`<testsuite name=\"TestRunner\" tests=\"${this.results.length}\" failures=\"${this.results.filter(r => !r.passed).length}\">`);\n    for (const r of this.results) {\n      lines.push(`  <testcase name=\"${r.name}\" time=\"${r.durationMs / 1000}\">`);\n      if (!r.passed) {\n        lines.push(`    <failure message=\"${r.error}\"/>`);\n      }\n      lines.push('  </testcase>');\n    }\n    lines.push('</testsuite>');\n    return lines.join('\\n');\n  }\n}\n\n// Usage\nconst runner = new TestRunner();\nrunner.register({\n  name: 'StringCalculator',\n  tests: [\n    {\n      name: 'empty string returns 0',\n      run: async () => {\n        const start = Date.now();\n        const result = add('') === 0;\n        return { name: 'empty string returns 0', passed: result, durationMs: Date.now() - start };\n      },\n    },\n    {\n      name: 'single number returns value',\n      run: async () => {\n        const start = Date.now();\n        const result = add('5') === 5;\n        return { name: 'single number returns value', passed: result, durationMs: Date.now() - start };\n      },\n    },\n  ],\n});\n\n// await runner.runAll();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "coverage-analyzer--statement-branch-path-coverage",
      children: "Coverage Analyzer — Statement, Branch, Path Coverage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface CoverageResult {\n  totalLines: number;\n  coveredLines: number;\n  totalBranches: number;\n  coveredBranches: number;\n  totalPaths: number;\n  coveredPaths: number;\n  lineCoverage: number;\n  branchCoverage: number;\n  pathCoverage: number;\n  uncoveredLines: number[];\n  uncoveredBranches: string[];\n}\n\nclass CoverageAnalyzer {\n  public analyzeLineCoverage(sourceLines: string[], executedLines: Set<number>): { total: number; covered: number; rate: number } {\n    const total = sourceLines.length;\n    let covered = 0;\n    for (let i = 0; i < total; i++) {\n      const line = sourceLines[i].trim();\n      if (line === '' || line.startsWith('//') || line.startsWith('/*') || line.startsWith('*') || line.startsWith('import')) {\n        continue; // skip non-executable lines\n      }\n      if (executedLines.has(i + 1)) covered++;\n    }\n    return { total, covered, rate: total > 0 ? covered / total : 0 };\n  }\n\n  public analyzeBranchCoverage(branches: { line: number; type: 'if' | 'else' | 'switch'; taken: boolean }[]): {\n    total: number; covered: number; rate: number; uncoveredBranches: string[];\n  } {\n    const total = branches.length;\n    const covered = branches.filter((b) => b.taken).length;\n    const uncovered = branches.filter((b) => !b.taken).map((b) => `Line ${b.line}: ${b.type} branch`);\n    return { total, covered, rate: total > 0 ? covered / total : 0, uncoveredBranches: uncovered };\n  }\n\n  public estimatePathCoverage(cyclomaticComplexity: number, testedPaths: number): { total: number; covered: number; rate: number } {\n    return { total: cyclomaticComplexity, covered: testedPaths, rate: cyclomaticComplexity > 0 ? testedPaths / cyclomaticComplexity : 0 };\n  }\n\n  public generateReport(sourceLines: string[], executedLines: Set<number>, branches: { line: number; type: string; taken: boolean }[]): string {\n    const lineCov = this.analyzeLineCoverage(sourceLines, executedLines);\n    const branchCov = this.analyzeBranchCoverage(branches);\n\n    const lines: string[] = [\n      '=== Coverage Report ===',\n      '',\n      '┌──────────────────────────┬────────────┐',\n      '│ Metric                   │ Value      │',\n      '├──────────────────────────┼────────────┤',\n      `│ Lines                    │ ${lineCov.covered}/${lineCov.total} (${(lineCov.rate * 100).toFixed(1)}%) │`,\n      `│ Branches                 │ ${branchCov.covered}/${branchCov.total} (${(branchCov.rate * 100).toFixed(1)}%) │`,\n      '└──────────────────────────┴────────────┘',\n    ];\n\n    if (branchCov.uncoveredBranches.length > 0) {\n      lines.push('', 'Uncovered Branches:');\n      for (const b of branchCov.uncoveredBranches) {\n        lines.push(`  → ${b}`);\n      }\n    }\n\n    lines.push('', 'Recommendations:');\n    if (lineCov.rate < 0.8) lines.push('  · Add tests to reach 80% line coverage (current: ' + (lineCov.rate * 100).toFixed(1) + '%)');\n    if (branchCov.rate < 0.7) lines.push('  · Add tests for uncovered branches to reach 70% branch coverage');\n    if (branchCov.rate < lineCov.rate) lines.push('  · Branch coverage is lower than line coverage — focus on decision coverage');\n    if (lineCov.rate > 0.95) lines.push('  · Line coverage is high — consider mutation testing to assess test quality');\n\n    return lines.join('\\n');\n  }\n}\n\n// Usage\nconst analyzer = new CoverageAnalyzer();\nconst source = [\n  'function calculateDiscount(price: number, isMember: boolean) {',\n  '  let discount = 0;',\n  '  if (isMember) {',\n  '    discount = 0.1;',\n  '  }',\n  '  return price * (1 - discount);',\n  '}',\n];\nconst executed = new Set([1, 2, 3, 4, 6]);\nconst branches = [\n  { line: 3, type: 'if' as const, taken: true },\n  { line: 3, type: 'else' as const, taken: false },\n];\nconsole.log(analyzer.generateReport(source, executed, branches));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tdd-workflow--red-green-refactor-simulator",
      children: "TDD Workflow — Red-Green-Refactor Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface TDDCycle {\n  phase: 'red' | 'green' | 'refactor';\n  description: string;\n  testCount: number;\n  passingTests: number;\n  codeLines: number;\n}\n\nclass TDDWorkflow {\n  private cycles: TDDCycle[] = [];\n  private currentPhase: TDDCycle['phase'] = 'red';\n  private testCount = 0;\n  private passingTests = 0;\n  private codeLines = 0;\n\n  public startCycle(description: string): void {\n    this.currentPhase = 'red';\n    this.cycles.push({\n      phase: 'red',\n      description,\n      testCount: 0,\n      passingTests: 0,\n      codeLines: this.codeLines,\n    });\n  }\n\n  public addTest(): void {\n    this.testCount++;\n    if (this.currentPhase === 'red') {\n      // Red phase: test fails initially\n      const cycle = this.cycles[this.cycles.length - 1];\n      cycle.testCount = this.testCount;\n      cycle.passingTests = this.passingTests;\n    }\n  }\n\n  public implement(): void {\n    this.currentPhase = 'green';\n    this.passingTests = this.testCount; // All tests pass now\n    this.codeLines += Math.floor(Math.random() * 10) + 1;\n    const cycle = this.cycles[this.cycles.length - 1];\n    cycle.phase = 'green';\n    cycle.passingTests = this.passingTests;\n    cycle.codeLines = this.codeLines;\n  }\n\n  public refactor(linesRemoved: number): void {\n    this.currentPhase = 'refactor';\n    this.codeLines -= linesRemoved;\n    const cycle = this.cycles[this.cycles.length - 1];\n    cycle.phase = 'refactor';\n    cycle.codeLines = this.codeLines;\n  }\n\n  public getReport(): string {\n    const lines: string[] = ['=== TDD Workflow Report ==='];\n    let totalTests = 0;\n    for (const cycle of this.cycles) {\n      const icon = cycle.phase === 'red' ? '🔴' : cycle.phase === 'green' ? '🟢' : '🔵';\n      lines.push(`  ${icon} ${cycle.phase.toUpperCase()}: ${cycle.description}`);\n      lines.push(`     Tests: ${cycle.passingTests}/${cycle.testCount} passing | Code: ${cycle.codeLines} lines`);\n      totalTests = cycle.testCount;\n    }\n    lines.push('', `Total: ${this.cycles.length} cycles, ${totalTests} tests`);\n    return lines.join('\\n');\n  }\n}\n\n// Simulate TDD for FizzBuzz\nconst tdd = new TDDWorkflow();\n\n// Cycle 1: Handle multiples of 3\ntdd.startCycle('Return \"Fizz\" for multiples of 3');\ntdd.addTest(); // Test: fizzbuzz(3) === \"Fizz\"\ntdd.implement();\ntdd.refactor(0);\n\n// Cycle 2: Handle multiples of 5\ntdd.startCycle('Return \"Buzz\" for multiples of 5');\ntdd.addTest(); // Test: fizzbuzz(5) === \"Buzz\"\ntdd.addTest(); // Test: fizzbuzz(10) === \"Buzz\"\ntdd.implement();\ntdd.refactor(1); // Combined condition extraction\n\n// Cycle 3: Handle multiples of both 3 and 5\ntdd.startCycle('Return \"FizzBuzz\" for multiples of 15');\ntdd.addTest(); // Test: fizzbuzz(15) === \"FizzBuzz\"\ntdd.addTest(); // Test: fizzbuzz(30) === \"FizzBuzz\"\ntdd.implement();\ntdd.refactor(2); // Extracted isDivisibleBy helper\n\nconsole.log(tdd.getReport());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-testing-tools",
      children: "Additional Testing Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Test Case Generator ===\ninterface MethodUnderTest {\n  name: string;\n  params: { name: string; type: string; examples: unknown[] }[];\n  returnType: string;\n  invariants: string[];\n}\nfunction generateTestCases(method: MethodUnderTest): string[] {\n  const tests: string[] = [];\n  const paramCombos = method.params.length === 0 ? [[]] : method.params[0].examples.map((v) => [v]);\n  for (const combo of paramCombos) {\n    tests.push(`// ${method.name}(${combo.join(\", \")}) should return ${method.returnType}`);\n  }\n  if (method.invariants.length > 0) {\n    tests.push(`// Property: ${method.invariants.join(\" and \")}`);\n  }\n  tests.push(`// Edge case: null input`, `// Edge case: empty input`, `// Edge case: boundary value`);\n  return tests;\n}\n\n// === Test Pyramid Checker ===\ninterface TestSuite { unit: number; integration: number; e2e: number }\nfunction checkPyramid(suite: TestSuite): { healthy: boolean; ratio: string; recommendation: string } {\n  const total = suite.unit + suite.integration + suite.e2e;\n  if (total === 0) return { healthy: false, ratio: \"0:0:0\", recommendation: \"No tests defined\" };\n  const unitPct = (suite.unit / total * 100).toFixed(0);\n  const intPct = (suite.integration / total * 100).toFixed(0);\n  const e2ePct = (suite.e2e / total * 100).toFixed(0);\n  const healthy = suite.unit > suite.integration && suite.integration > suite.e2e;\n  let recommendation = healthy\n    ? \"Pyramid is healthy\"\n    : suite.unit < suite.integration\n      ? \"Too many integration tests — add more unit tests\"\n      : \"Too many E2E tests — shift down the pyramid\";\n  return { healthy, ratio: `${unitPct}:${intPct}:${e2ePct}`, recommendation };\n}\n\n// === Risk-Based Testing Prioritizer ===\nfunction prioritizeTests(tests: TestSuite['tests'], risks: Map<string, number>): TestSuite['tests'] {\n  return [...tests].sort((a, b) => {\n    const riskA = risks.get(a.name) ?? 1;\n    const riskB = risks.get(b.name) ?? 1;\n    return riskB - riskA;\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    classDef source fill:#e8eaf6,stroke:#3f51b5,stroke-width:2px\n    classDef analysis fill:#e0f2f1,stroke:#00796b,stroke-width:2px\n    classDef design fill:#fff8e1,stroke:#f57f17,stroke-width:2px\n    classDef exec fill:#fce4ec,stroke:#c62828,stroke-width:2px\n    classDef result fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px\n\n    subgraph \"Test Quality Pipeline\"\n        CODE[Source Code]:::source --> STATIC[Static Analysis]:::analysis\n        STATIC --> METRICS2[Complexity Metrics]:::analysis\n        STATIC --> STRUCTURE[Control Flow Graph]:::analysis\n        \n        SPEC[Requirements]:::source --> BLACK[Black-Box Design]:::design\n        BLACK --> EP[Equivalence Partitioning]:::design\n        BLACK --> BVA[Boundary Value Analysis]:::design\n        BLACK --> DT[Decision Tables]:::design\n        BLACK --> ST[State Transition]:::design\n        \n        STRUCTURE --> WHITE[White-Box Design]:::design\n        METRICS2 --> WHITE\n        WHITE --> SC[Statement Coverage]:::design\n        WHITE --> BC[Branch Coverage]:::design\n        WHITE --> PC[Path Coverage]:::design\n        WHITE --> MCDC[MC/DC Coverage]:::design\n        \n        EP --> TESTGEN[Test Case Generation]:::design\n        BVA --> TESTGEN\n        DT --> TESTGEN\n        ST --> TESTGEN\n        SC --> TESTGEN\n        BC --> TESTGEN\n        PC --> TESTGEN\n        MCDC --> TESTGEN\n        \n        TESTGEN --> EXEC[Execute Tests]:::exec\n        EXEC --> REPORT2[Coverage Report]:::result\n        EXEC --> RESULTS[Test Results]:::result\n        REPORT2 --> GATES{Quality Gates Met?}:::exec\n        RESULTS --> GATES\n        GATES -->|Yes| PASS[✓ Build Passes]:::result\n        GATES -->|No| FAIL[✗ Build Fails - Fix Issues]:::exec\n        \n        FAIL --> ROOT[Root Cause Analysis]:::analysis\n        ROOT --> FIX[Fix Code or Tests]:::source\n        FIX --> EXEC\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Software testing is the primary dynamic verification and validation technique, ensuring that a system meets its specification (verification) and satisfies stakeholder needs (validation). Testing occurs at four levels: unit, integration, system, and acceptance, each with distinct goals and techniques. The test pyramid guides automation investment, recommending a broad base of fast, reliable unit tests with progressively fewer integration and E2E tests."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "White-box techniques (statement, branch, path, condition, MC/DC coverage) use knowledge of internal structure to design thorough tests. Black-box techniques (equivalence partitioning, boundary value analysis, decision tables, state transition) derive test cases from specifications without reference to internal code. TDD follows the red-green-refactor cycle, producing testable designs and comprehensive test suites. Test doubles (dummy, fake, stub, spy, mock) isolate units under test from their dependencies. Property-based testing verifies behavioural properties across input ranges, and mutation testing evaluates test quality by measuring how well tests detect seeded defects. BDD extends TDD with natural-language scenarios accessible to all stakeholders. Non-functional testing addresses performance, security, and usability. A well-designed CI/CD pipeline with quality gates ensures that testing is automated, repeatable, and integrated into the development workflow."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write tests first (TDD)"
        }), " — it forces you to think about design before implementation and ensures testable code from the start."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Follow the test pyramid"
        }), " — invest most in fast, reliable unit tests (70-80%), fewer integration tests (15-20%), and minimal E2E tests (5-10%)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test behaviours, not methods"
        }), " — focus on what the code does from the user's perspective, not how it's structured internally."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Coverage is a hint, not a goal"
        }), " — 100% coverage doesn't mean 100% correctness. Use mutation testing to assess test quality."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use test doubles wisely"
        }), " — mock external dependencies, but prefer real objects for core logic to avoid brittle tests."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A failing test is progress"
        }), " — it means you've found a spec-to-implementation gap before production. Celebrate caught defects."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Boundary values find bugs"
        }), " — most defects cluster at input boundaries. Always test boundaries, not just middle values."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CI pipeline gates protect quality"
        }), " — enforce coverage thresholds, test pass rates, and linting rules before merge."]
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
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Red = write failing test, Green = make it pass, Refactor = improve code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path coverage exercises every unique execution path — strongest but often impractical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A Fake is a working implementation with shortcuts (e.g., in-memory database)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unit tests form the broad base (70-80%) of the automation pyramid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empirical studies show defects cluster at input boundaries"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: What is the correct order of the TDD cycle?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Green → Red → Refactor"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Red → Green → Refactor"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Refactor → Red → Green"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Red → Refactor → Green"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: Which coverage criterion is strongest (finds the most defects)?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Statement coverage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Branch coverage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Path coverage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Function coverage"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: What type of test double is an in-memory database that provides a simplified but working implementation?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Stub"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Mock"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Fake"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Dummy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: According to the test pyramid, which layer should have the most tests?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) End-to-end tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Service tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Unit tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Manual tests"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: Boundary value analysis is most effective at finding defects because:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It tests random values"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Defects frequently occur at input boundaries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) It requires the least test cases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) It tests internal code structure"
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
          children: "Distinguish between verification and validation."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What are the four levels of testing, and what does each level verify?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain top-down versus bottom-up integration testing."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the difference between statement coverage and branch coverage?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Why is path coverage often impractical?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Describe equivalence partitioning with an example."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does boundary value analysis complement equivalence partitioning?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What are the five types of test doubles, and when would you use each?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What does the TDD acronym stand for, and what are its three phases?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Describe the three layers of the test automation pyramid with recommended proportions."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Equivalence Partitioning and BVA:"
        }), " Apply equivalence partitioning and boundary value analysis to a function that validates dates in DD/MM/YYYY format between 01/01/2000 and 31/12/2099. List all test cases."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click for solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function validateDate(dateStr: string): boolean {\n  const regex = /^(\\d{2})\\/(\\d{2})\\/(\\d{4})$/;\n  const match = dateStr.match(regex);\n  if (!match) return false;\n  const day = parseInt(match[1]);\n  const month = parseInt(match[2]);\n  const year = parseInt(match[3]);\n  if (year < 2000 || year > 2099) return false;\n  if (month < 1 || month > 12) return false;\n  const daysInMonth = new Date(year, month, 0).getDate();\n  if (day < 1 || day > daysInMonth) return false;\n  return true;\n}\n\n// Equivalence Classes:\n// Invalid format: 'abc', '01/01/200', '1/1/2000'\n// Year < 2000: '01/01/1999'\n// Year > 2099: '01/01/2100'\n// Year valid 2000-2099: '15/06/2024'\n// Month < 1: '01/00/2024'\n// Month > 12: '01/13/2024'\n// Day < 1: '00/06/2024'\n// Day > daysInMonth: '31/02/2024', '31/04/2024'\n// Valid dates: '01/01/2000', '31/12/2099', '29/02/2024' (leap year)\n\n// Boundary Values:\n// Year: 1999 (invalid), 2000 (valid), 2001 (valid), 2098 (valid), 2099 (valid), 2100 (invalid)\n// Month: 0 (invalid), 1 (valid), 2 (valid), 11 (valid), 12 (valid), 13 (invalid)\n// Day: 0 (invalid), 1 (valid), ... daysInMonth (valid), daysInMonth+1 (invalid)\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decision Table:"
        }), " Construct a decision table for a login system: valid account required; account must not be locked; password must match; after 3 failed attempts, account is locked. Cover all combinations."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click for solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// Conditions:\n// C1: Valid account (Y/N)\n// C2: Account not locked (Y/N) — irrelevant if C1=N\n// C3: Password correct (Y/N) — irrelevant if C1=N or C2=N\n// C4: Failed attempts < 3 (Y/N) — irrelevant if C1=N or C2=N or C3=Y\n\n// Actions:\n// A1: Allow login\n// A2: Show \"invalid account\"\n// A3: Show \"account locked\"\n// A4: Increment failed attempts\n// A5: Lock account (after 3rd failure)\n\n// Rules:\n// 1: Y Y Y Y → A1\n// 2: Y Y N Y → A2, A4\n// 3: Y Y Y N → A1 (if already locked, shouldn't reach here)\n// 4: Y Y N N → A2, A4, A5 (3rd failure → lock)\n// 5: Y N - - → A3 (account locked)\n// 6: N - - - → A2 (invalid account)\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FizzBuzz TDD:"
        }), " Implement the FizzBuzz kata using TDD in TypeScript. Show each red-green-refactor cycle."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click for solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// RED: Write test\ndescribe('FizzBuzz', () => {\n  test('returns 1 for input 1', () => {\n    expect(fizzbuzz(1)).toBe('1');\n  });\n  test('returns \"Fizz\" for input 3', () => {\n    expect(fizzbuzz(3)).toBe('Fizz');\n  });\n  test('returns \"Buzz\" for input 5', () => {\n    expect(fizzbuzz(5)).toBe('Buzz');\n  });\n  test('returns \"FizzBuzz\" for input 15', () => {\n    expect(fizzbuzz(15)).toBe('FizzBuzz');\n  });\n});\n\n// GREEN: Minimal implementation\nfunction fizzbuzz(n: number): string {\n  if (n % 15 === 0) return 'FizzBuzz';\n  if (n % 3 === 0) return 'Fizz';\n  if (n % 5 === 0) return 'Buzz';\n  return String(n);\n}\n\n// REFACTOR: Extract helper\nfunction isDivisibleBy(n: number, divisor: number): boolean {\n  return n % divisor === 0;\n}\nfunction fizzbuzzRefactored(n: number): string {\n  if (isDivisibleBy(n, 15)) return 'FizzBuzz';\n  if (isDivisibleBy(n, 3)) return 'Fizz';\n  if (isDivisibleBy(n, 5)) return 'Buzz';\n  return String(n);\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Property-Based Testing:"
        }), " Write a TypeScript property-based test suite for a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sort"
        }), " function, verifying properties like idempotence, order preservation, and length preservation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click for solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function sort(arr: number[]): number[] {\n  return [...arr].sort((a, b) => a - b);\n}\n\ndescribe('sort properties', () => {\n  test('idempotent: sorting an already sorted array returns same array', () => {\n    const inputs = [[], [1], [1, 2, 3], [1, 1, 1]];\n    for (const input of inputs) {\n      expect(sort(sort(input))).toEqual(sort(input));\n    }\n  });\n\n  test('length preserving: sorted array has same length', () => {\n    const inputs = [[], [1], [3, 2, 1], [5, 3, 1, 4, 2]];\n    for (const input of inputs) {\n      expect(sort(input).length).toBe(input.length);\n    }\n  });\n\n  test('order: each element <= next element', () => {\n    const inputs = [[], [1], [3, 2, 1], [5, 3, 1, 4, 2]];\n    for (const input of inputs) {\n      const sorted = sort(input);\n      for (let i = 0; i < sorted.length - 1; i++) {\n        expect(sorted[i]).toBeLessThanOrEqual(sorted[i + 1]);\n      }\n    }\n  });\n\n  test('permutation: sorted array contains same elements', () => {\n    const inputs = [[], [1], [3, 2, 1], [5, 3, 1, 4, 2]];\n    for (const input of inputs) {\n      const sorted = sort(input);\n      expect(sorted.reduce((a, b) => a + b, 0)).toBe(input.reduce((a, b) => a + b, 0));\n    }\n  });\n});\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Challenge Problem:"
        }), " You lead the testing effort for a medical device software system that calculates radiation dosage for cancer treatment. The system must meet FDA regulatory requirements: full traceability from requirements to test cases, 100% decision coverage at unit level, and documented risk-based testing. Design a comprehensive testing strategy."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click for solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Testing Strategy for Medical Device Software:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Traceability Matrix:"
            }), " Map every requirement (e.g., REQ-DOSE-001: Dose calculation must use TG-51 protocol) to 3-5 test cases. Implement a TypeScript TraceabilityManager that ensures no gaps."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Coverage Requirements:"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Safety-critical functions: 100% MC/DC coverage"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Non-critical functions: 100% branch coverage, 90% statement coverage"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Automated enforcement via CI pipeline"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Risk-Based Testing:"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "High risk (patient safety impact): 5x test cases, mandatory peer review"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Medium risk (data integrity): 3x test cases"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Low risk (UI/UX): 1x test case"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Test Levels:"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Unit: Each calculation function in isolation (2,000+ tests)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Integration: Module interactions (200+ tests)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "System: Full treatment planning workflow (20+ E2E tests)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Acceptance: Clinical validation with physicist review"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "class MedicalDeviceTraceabilityManager {\n  private coverage = new Map<string, string[]>(); // requirement -> testIds\n\n  addRequirement(reqId: string): void {\n    if (!this.coverage.has(reqId)) this.coverage.set(reqId, []);\n  }\n\n  linkTest(reqId: string, testId: string): void {\n    const tests = this.coverage.get(reqId);\n    if (tests) tests.push(testId);\n  }\n\n  getCoverageGaps(): string[] {\n    const gaps: string[] = [];\n    for (const [reqId, tests] of this.coverage) {\n      if (tests.length < 3) {\n        gaps.push(`${reqId}: only ${tests.length} test(s) (minimum 3 required)`);\n      }\n    }\n    return gaps;\n  }\n\n  getTraceabilityReport(): string {\n    let report = '=== Requirements Traceability Matrix ===\\n';\n    for (const [reqId, tests] of this.coverage) {\n      const status = tests.length >= 3 ? '✓' : '✗';\n      report += `${status} ${reqId}: ${tests.length} tests → ${tests.join(', ')}\\n`;\n    }\n    return report;\n  }\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary-1",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Software testing is the primary dynamic verification and validation technique. Testing occurs at four levels: unit, integration, system, and acceptance. White-box techniques use knowledge of internal structure; black-box techniques derive test cases from specifications. The test pyramid guides automation investment. TDD follows the red-green-refactor cycle and produces testable designs. Test doubles (dummy, fake, stub, spy, mock) isolate units under test. Property-based testing verifies behavioural properties across input ranges. Non-functional testing addresses performance, security, and usability. Mutation testing evaluates test quality. Regression testing protects against regression defects."
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