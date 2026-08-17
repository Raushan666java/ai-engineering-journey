"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[88275],{

/***/ 93705
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_database_management_systems_08_higher_nf_md_652_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-database-management-systems-08-higher-nf-md-652.json
const site_docs_courses_database_management_systems_08_higher_nf_md_652_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/database-management-systems/08-higher-nf","title":"Chapter 8: Higher Normal Forms and Denormalization","description":"Previous Normalization | Next Transactions","source":"@site/docs/courses/database-management-systems/08-higher-nf.md","sourceDirName":"courses/database-management-systems","slug":"/database-management-systems/08-higher-nf","permalink":"/ai-engineering-journey/database-management-systems/08-higher-nf","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"08-higher-nf","slug":"/database-management-systems/08-higher-nf","title":"Chapter 8: Higher Normal Forms and Denormalization","sidebar_label":"Chapter 8: Higher Normal Forms and Denormalization","sidebar_position":8},"sidebar":"course-database-management-systems","previous":{"title":"Chapter 7: Normalization in Database Management Systems","permalink":"/ai-engineering-journey/database-management-systems/07-normalization"},"next":{"title":"Chapter 9: Transactions","permalink":"/ai-engineering-journey/database-management-systems/09-transactions"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/database-management-systems/08-higher-nf.md


const frontMatter = {
	id: '08-higher-nf',
	slug: '/database-management-systems/08-higher-nf',
	title: 'Chapter 8: Higher Normal Forms and Denormalization',
	sidebar_label: 'Chapter 8: Higher Normal Forms and Denormalization',
	sidebar_position: 8
};
const contentTitle = 'Chapter 8: Higher Normal Forms and Denormalization';

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
  "value": "Normal Form Hierarchy",
  "id": "normal-form-hierarchy",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "8.1 Beyond BCNF",
  "id": "81-beyond-bcnf",
  "level": 3
}, {
  "value": "8.2 Multi-Valued Dependencies",
  "id": "82-multi-valued-dependencies",
  "level": 3
}, {
  "value": "8.3 Fourth Normal Form (4NF)",
  "id": "83-fourth-normal-form-4nf",
  "level": 3
}, {
  "value": "8.4 Complexity Analysis of 4NF Decomposition",
  "id": "84-complexity-analysis-of-4nf-decomposition",
  "level": 3
}, {
  "value": "8.5 C++ Implementation: 4NF Decomposer",
  "id": "85-c-implementation-4nf-decomposer",
  "level": 3
}, {
  "value": "8.6 Python Implementation: 4NF Decomposer with MVD Checker",
  "id": "86-python-implementation-4nf-decomposer-with-mvd-checker",
  "level": 3
}, {
  "value": "8.7 Join Dependencies and Fifth Normal Form (5NF)",
  "id": "87-join-dependencies-and-fifth-normal-form-5nf",
  "level": 3
}, {
  "value": "8.8 C++ Implementation: 5NF Checker",
  "id": "88-c-implementation-5nf-checker",
  "level": 3
}, {
  "value": "8.9 Python Implementation: 5NF Checker with Join Simulation",
  "id": "89-python-implementation-5nf-checker-with-join-simulation",
  "level": 3
}, {
  "value": "8.10 Complexity Analysis of 5NF Decomposition",
  "id": "810-complexity-analysis-of-5nf-decomposition",
  "level": 3
}, {
  "value": "8.11 Domain-Key Normal Form (DKNF)",
  "id": "811-domain-key-normal-form-dknf",
  "level": 3
}, {
  "value": "8.12 Temporal Databases",
  "id": "812-temporal-databases",
  "level": 3
}, {
  "value": "8.13 Denormalization",
  "id": "813-denormalization",
  "level": 3
}, {
  "value": "8.14 Normalization vs Denormalization Comparison",
  "id": "814-normalization-vs-denormalization-comparison",
  "level": 3
}, {
  "value": "8.15 Risks of Denormalization",
  "id": "815-risks-of-denormalization",
  "level": 3
}, {
  "value": "8.16 Applications in Real Systems",
  "id": "816-applications-in-real-systems",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Pro Tips",
  "id": "pro-tips",
  "level": 2
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "One-Sentence Takeaways",
  "id": "one-sentence-takeaways",
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
  "value": "8.17 TypeScript MVD Detector &amp; Denormalization Advisor",
  "id": "817-typescript-mvd-detector--denormalization-advisor",
  "level": 3
}, {
  "value": "Additional Chapter Quiz Questions",
  "id": "additional-chapter-quiz-questions",
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
  "value": "Basic",
  "id": "basic",
  "level": 3
}, {
  "value": "Intermediate",
  "id": "intermediate",
  "level": 3
}, {
  "value": "Advanced",
  "id": "advanced",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
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
        id: "chapter-8-higher-normal-forms-and-denormalization",
        children: "Chapter 8: Higher Normal Forms and Denormalization"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/database-management-systems/07-normalization",
          children: "Chapter 7: Normalization"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/database-management-systems/09-transactions",
          children: "Chapter 9: Transactions"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define multi-valued dependencies and fourth normal form (4NF)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define join dependencies and fifth normal form (5NF)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the Domain-Key Normal Form (DKNF) as the ultimate normal form"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recognize when to denormalize for performance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply practical trade-offs between normalization and performance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand temporal databases and their design considerations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4NF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No multi-valued dependencies (MVDs) -- independent 1:N relationships"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split when one attribute has multiple independent values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "5NF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No join dependencies -- lossless decomposition must be possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Often already in 5NF if in 4NF and all keys are single-attribute"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DKNF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every constraint is a domain constraint or key constraint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theoretical ideal -- rarely fully achievable in practice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Denormalization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intentional redundancy for read performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply AFTER proving a read-performance problem exists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Temporal Databases"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time-varying data with valid-time and transaction-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use temporal tables, system-versioned tables, or bitemporal design"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trade-offs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normalization = write-efficiency; denormalization = read-efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Profile before optimizing; denormalization is a design decision, not a default"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[BCNF Refresher] --> B[Multi-valued Dependencies]\n    B --> C[4NF]\n    C --> D[Join Dependencies]\n    D --> E[5NF]\n    E --> F[DKNF & Domain Constraints]\n    F --> G[Denormalization Strategies]\n    G --> H[Temporal Databases]\n    H --> I[Trade-off Decision Framework]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "normal-form-hierarchy",
      children: "Normal Form Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph NF[\"Normal Form Hierarchy\"]\n        A[\"1NF: Atomic Values<br/>No repeating groups\"] --> B[\"2NF: No partial<br/>FD dependencies\"]\n        B --> C[\"3NF: No transitive<br/>FD dependencies\"]\n        C --> D[\"BCNF: Every FD left<br/>side is a superkey\"]\n        D --> E[\"4NF: Every MVD left<br/>side is a superkey\"]\n        E --> F[\"5NF: Every JD implied<br/>by candidate keys\"]\n        F --> G[\"DKNF: All constraints follow<br/>from domain + key constraints\"]\n    end\n    style G fill:#f96,stroke:#333,color:#000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each higher form eliminates a specific type of dependency redundancy:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Eliminates"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dependency Type"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1NF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-atomic columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2NF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3NF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transitive dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BCNF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All FD-based redundancy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FD (stronger than 3NF)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4NF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Independent multi-valued attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MVD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5NF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Join-based constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DKNF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All constraints (theoretical ideal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain + Key"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Beyond BCNF, 4NF and 5NF handle exotic dependencies -- and denormalization is a deliberate performance trade-off, not an excuse to skip normalization."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/database-management-systems/ch08-higher-normal-forms.png",
        alt: "Higher Normal Forms Mindmap"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-beyond-bcnf",
      children: "8.1 Beyond BCNF"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BCNF eliminates redundancy from functional dependencies, but other types of dependencies can still cause redundancy:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-valued dependencies (MVDs)"
        }), " -- cause independent attributes to repeat"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Join dependencies (JDs)"
        }), " -- cause information to be split/rejoined in specific patterns"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Higher normal forms address these: 4NF handles MVDs, 5NF handles JDs, and DKNF is the theoretical endpoint of normalization."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Why BCNF Is Not Enough"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Imagine a school directory that lists each student, all their extracurricular clubs, AND all their allergies. These two sets (clubs and allergies) are independent -- knowing a student has \"Chess Club\" tells you nothing about their allergies, and vice versa. But if you store them in one table, you get redundancy: if Alice is in Chess AND Debate AND has a peanut allergy AND lactose intolerance, you need 4 rows (2 clubs x 2 allergies). This is exactly the problem MVDs describe -- and BCNF alone cannot detect it because there is no functional dependency violation."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-multi-valued-dependencies",
      children: "8.2 Multi-Valued Dependencies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "multi-valued dependency (MVD)"
      }), " X -->> Y holds if, given a value for X, the set of Y values is independent of all other attributes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Formally: In relation R, X -->> Y if for any two tuples t1 and t2 with t1[X] = t2[X], there exists a tuple t3 such that: t3[X] = t1[X], t3[Y] = t1[Y], t3[Z] = t2[Z] (where Z = R - (X union Y))."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Employee Skills and Languages"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Consider an employee database: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EMP_SKILL_LANG(emp_id, skill, language)"
      }), ". Employee #101 knows Java, Python AND speaks English, Spanish. These are independent facts -- every employee applies every skill in every language."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "emp_id"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "skill"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "language"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "English"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spanish"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "English"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spanish"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To add a third skill (Go) for employee 101, you add 2 rows (Go x English, Go x Spanish). To add a third language (French), you add 2 rows (Java x French, Python x French). This combinatorial explosion is the signature of an MVD."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MVD vs FD Comparison"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Functional Dependency (FD)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Multi-valued Dependency (MVD)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Symbol"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X -> Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X -->> Y"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Meaning"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Each X value determines exactly ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "one"
            }), " Y value"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Each X value determines a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "set"
            }), " of Y values independent of other attributes"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cardinality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1:1 or N:1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1:N (independent)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Redundancy type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeated values across rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-product explosion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FD implies MVD?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes -- every FD is an MVD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No -- MVDs do not imply FDs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "emp_id -> dept"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "emp_id -->> skill"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Violation fixes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decompose by the FD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decompose into two tables (one per MVD side)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Detection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same X -> same Y value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same X -> same set of Y values independent of Z"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Practical frequency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very common in every database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare -- only appears with independent multi-valued attributes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trivial MVDs:"
      }), " An MVD X -->> Y is trivial if Y is a subset of X or X union Y = R (all attributes)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Consider a relation for university clubs:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CLUB_MEMBER(club, student_name, activity)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A club has many members and many activities. These facts are independent."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "club"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "student_name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "activity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chess"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tournament"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chess"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chess"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tournament"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chess"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practice"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This table has 4 rows for just 2 students and 2 activities. This is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "redundancy"
      }), " caused by the MVD ", (0,jsx_runtime.jsx)(_components.code, {
        children: "club -->> student_name"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "club -->> activity"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The MVD says: For a given club, the set of members and the set of activities are independent. Every member participates in every activity."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-fourth-normal-form-4nf",
      children: "8.3 Fourth Normal Form (4NF)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A relation is in 4NF if:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It is in BCNF"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For every non-trivial MVD X -->> Y, X is a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "superkey"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4NF Decomposition Algorithm -- Step by Step"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given relation R with MVDs violating 4NF:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: Identify a violating MVD X -->> Y where X is NOT a superkey\nStep 2: Compute Z = R - (X union Y) -- the remaining attributes\nStep 3: Decompose R into:\n         R1 = (X union Y)\n         R2 = (X union Z)\nStep 4: Repeat steps 1-3 for all resulting relations until\n        no violating MVDs remain\nStep 5: Verify that the decomposition is lossless (natural join\n        of R1 and R2 reproduces R)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode for 4NF Decomposition:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DECOMPOSE_TO_4NF(R, MVDs):\n    result = {R}\n    for each relation S in result:\n        for each non-trivial MVD X -->> Y that holds in S:\n            if X is NOT a superkey of S:\n                Z = S - (X union Y)\n                S1 = X union Y\n                S2 = X union Z\n                result = (result - {S}) union {S1, S2}\n                break  // restart scanning\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run: 4NF Decomposition of CLUB_MEMBER"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Given: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CLUB_MEMBER(club, student_name, activity)"
      }), " with MVD ", (0,jsx_runtime.jsx)(_components.code, {
        children: "club -->> student_name"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initial state: R = {club, student_name, activity}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Iteration 1:\n  MVD: club -->> student_name\n  Is club a superkey? Candidate key = (club, student_name, activity).\n  club alone is NOT a superkey. Violation found.\n  X = {club}, Y = {student_name}\n  Z = R - (X union Y) = {activity}\n  R1 = X union Y = {club, student_name}\n  R2 = X union Z = {club, activity}\n\nResult after Iteration 1:\n  R1(club, student_name) -- PK: (club, student_name)\n  R2(club, activity)      -- PK: (club, activity)\n\nIteration 2:\n  Check R1: No non-trivial MVDs (only trivial). R1 is in 4NF.\n  Check R2: No non-trivial MVDs (only trivial). R2 is in 4NF.\n\nResult: {R1(club, student_name), R2(club, activity)}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lossless Join Verification:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "R1 NATURAL JOIN R2:\n\nR1: (Chess, Alice), (Chess, Bob)\nR2: (Chess, Tournament), (Chess, Practice)\n\nJOIN: (Chess, Alice, Tournament), (Chess, Alice, Practice),\n       (Chess, Bob, Tournament), (Chess, Bob, Practice)\n\nMatches original CLUB_MEMBER -- decomposition is lossless.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixing the Club_Member example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Decompose into two tables, eliminating the MVD\nCREATE TABLE club_member (\n    club VARCHAR(50),\n    student_name VARCHAR(100),\n    PRIMARY KEY (club, student_name)\n);\n\nCREATE TABLE club_activity (\n    club VARCHAR(50),\n    activity VARCHAR(100),\n    PRIMARY KEY (club, activity)\n);\n\n-- Now adding a third activity only adds 1 row to club_activity\n-- The cross product of members x activities is no longer materialized\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Another Example:"
      }), " Employee skills and languages"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EMP_SKILL_LANG(emp_id, skill, language)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FDs: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "emp_id -->> skill"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "emp_id -->> language"
      }), " (MVDs)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is not in 4NF unless emp_id is a superkey. Decompose:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE emp_skill (emp_id INTEGER, skill VARCHAR(50), PRIMARY KEY (emp_id, skill));\nCREATE TABLE emp_language (emp_id INTEGER, language VARCHAR(50), PRIMARY KEY (emp_id, language));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases in 4NF Decomposition:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trivial MVD"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y is subset of X, or X union Y = R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignore -- causes no redundancy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FD implying MVD"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every FD is also an MVD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4NF check subsumes BCNF automatically"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multiple MVDs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Several independent MVDs on same left side"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decompose one at a time; result is associative"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overlapping MVDs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X -->> Y and X -->> Z with Y and Z overlapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decompose sequentially; may produce extra relations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Circular MVDs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MVDs that form a cycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can lead to 5NF-level join dependencies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty relation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No tuples satisfy the MVD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MVD holds vacuously; no decomposition needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single-tuple relation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only one tuple in the relation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All MVDs hold trivially; relation is already in 4NF"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-complexity-analysis-of-4nf-decomposition",
      children: "8.4 Complexity Analysis of 4NF Decomposition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identifying MVDs:"
        }), " O(n^2) where n = number of attributes, checking all attribute subsets"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decomposition step:"
        }), " O(n) per violation to compute X, Y, Z and split"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Total worst case:"
        }), " O(k * n^2) where k = number of decomposition iterations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why polynomial?"
        }), " Each decomposition splits one relation into two smaller ones. The number of attributes decreases at each step, bounding iterations to at most n."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intermediate storage:"
        }), " O(r * n) where r = number of resulting relations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why linear?"
        }), " Total attribute count across all result relations equals original attribute count plus join attributes (typically n + small constant)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Worst case:"
        }), " Each attribute becomes its own relation (r = n), requiring O(n^2) storage for metadata"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MVD detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n^2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must check all attribute-pair combinations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single decomposition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computing attribute sets is linear in schema size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full 4NF process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k * n^2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(r * n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k <= n, r <= n in worst case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lossless join check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Join condition check is attribute-set comparison"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BCNF decomposition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n^2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Similar complexity, fewer dependency types"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "85-c-implementation-4nf-decomposer",
      children: "8.5 C++ Implementation: 4NF Decomposer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <set>\n#include <string>\n#include <map>\n#include <algorithm>\n#include <sstream>\n\nusing namespace std;\n\nstruct Relation {\n    string name;\n    set<string> attributes;\n    set<pair<set<string>, set<string>>> mvdSet;\n\n    Relation(string n, set<string> attrs) : name(n), attributes(attrs) {}\n\n    set<string> getSuperkeyCandidates() {\n        // Simplified: returns all attribute subsets as potential keys\n        set<string> result;\n        for (auto& attr : attributes) {\n            result.insert(attr);\n        }\n        return result;\n    }\n\n    bool isSuperkey(const set<string>& x) {\n        // A superkey determines all attributes via trivial MVD\n        // In this simplified version, any attribute set that\n        // functionally determines all others is a superkey\n        set<string> closure = x;\n        for (auto& mvd : mvdSet) {\n            if (includes(closure.begin(), closure.end(),\n                         mvd.first.begin(), mvd.first.end())) {\n                for (auto& attr : mvd.second) {\n                    closure.insert(attr);\n                }\n            }\n        }\n        return closure == attributes;\n    }\n};\n\nvector<Relation> decomposeTo4NF(Relation r) {\n    vector<Relation> result = {r};\n    bool changed = true;\n\n    while (changed) {\n        changed = false;\n        for (size_t i = 0; i < result.size(); i++) {\n            Relation& s = result[i];\n            for (auto& mvd : s.mvdSet) {\n                if (!s.isSuperkey(mvd.first)) {\n                    // Violating MVD found: X -->> Y\n                    set<string> x = mvd.first;\n                    set<string> y = mvd.second;\n\n                    // Compute Z = R - (X union Y)\n                    set<string> z;\n                    for (auto& attr : s.attributes) {\n                        if (x.find(attr) == x.end() &&\n                            y.find(attr) == y.end()) {\n                            z.insert(attr);\n                        }\n                    }\n\n                    // Build R1 = X union Y\n                    set<string> r1Attrs = x;\n                    r1Attrs.insert(y.begin(), y.end());\n\n                    // Build R2 = X union Z\n                    set<string> r2Attrs = x;\n                    r2Attrs.insert(z.begin(), z.end());\n\n                    // Create new relations\n                    string name1 = s.name + \"_1\";\n                    string name2 = s.name + \"_2\";\n                    Relation r1(name1, r1Attrs);\n                    Relation r2(name2, r2Attrs);\n\n                    // Copy relevant MVDs to children\n                    for (auto& m : s.mvdSet) {\n                        set<string> combined = m.first;\n                        combined.insert(m.second.begin(), m.second.end());\n                        if (includes(r1Attrs.begin(), r1Attrs.end(),\n                                     combined.begin(), combined.end())) {\n                            r1.mvdSet.insert(m);\n                        }\n                        if (includes(r2Attrs.begin(), r2Attrs.end(),\n                                     combined.begin(), combined.end())) {\n                            r2.mvdSet.insert(m);\n                        }\n                    }\n\n                    // Replace S with R1 and R2\n                    result.erase(result.begin() + i);\n                    result.push_back(r1);\n                    result.push_back(r2);\n                    changed = true;\n                    break;\n                }\n            }\n            if (changed) break;\n        }\n    }\n    return result;\n}\n\nvoid printRelation(const Relation& r) {\n    cout << r.name << \"(\";\n    for (auto it = r.attributes.begin(); it != r.attributes.end(); ++it) {\n        if (it != r.attributes.begin()) cout << \", \";\n        cout << *it;\n    }\n    cout << \")\" << endl;\n}\n\nint main() {\n    // Example: CLUB_MEMBER(club, student_name, activity)\n    set<string> attrs = {\"club\", \"student_name\", \"activity\"};\n    Relation clubMember(\"CLUB_MEMBER\", attrs);\n\n    // Add MVD: club -->> student_name\n    set<string> x = {\"club\"};\n    set<string> y1 = {\"student_name\"};\n    clubMember.mvdSet.insert({x, y1});\n\n    // Add MVD: club -->> activity\n    set<string> y2 = {\"activity\"};\n    clubMember.mvdSet.insert({x, y2});\n\n    cout << \"Original relation:\" << endl;\n    printRelation(clubMember);\n    cout << \"\\nDecomposing to 4NF...\" << endl;\n\n    vector<Relation> result = decomposeTo4NF(clubMember);\n\n    cout << \"\\n4NF Result (\" << result.size() << \" relations):\" << endl;\n    for (auto& r : result) {\n        printRelation(r);\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Original relation:\nCLUB_MEMBER(club, student_name, activity)\n\nDecomposing to 4NF...\n\n4NF Result (2 relations):\nCLUB_MEMBER_1(club, student_name)\nCLUB_MEMBER_2(club, activity)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "86-python-implementation-4nf-decomposer-with-mvd-checker",
      children: "8.6 Python Implementation: 4NF Decomposer with MVD Checker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Set, Tuple, List, Dict\nfrom itertools import combinations\n\n\nclass Relation:\n    \"\"\"Represents a database relation with attributes and MVDs.\"\"\"\n\n    def __init__(self, name: str, attributes: Set[str]):\n        self.name = name\n        self.attributes = set(attributes)\n        # Store MVDs as pairs of sets: (X, Y)\n        self.mvds: List[Tuple[Set[str], Set[str]]] = []\n\n    def add_mvd(self, x: Set[str], y: Set[str]):\n        \"\"\"Add a multi-valued dependency X -->> Y.\"\"\"\n        self.mvds.append((set(x), set(y)))\n\n    def is_superkey(self, x: Set[str]) -> bool:\n        \"\"\"Check if X is a superkey using MVD closure.\"\"\"\n        if not x.issubset(self.attributes):\n            return False\n        # A superkey determines all attributes\n        # In MVD context: X -->> (R - X) must hold\n        remaining = self.attributes - x\n        closure = set(x)\n        changed = True\n        while changed:\n            changed = False\n            for mvd_x, mvd_y in self.mvds:\n                if mvd_x.issubset(closure):\n                    new_attrs = mvd_y - closure\n                    if new_attrs:\n                        closure.update(new_attrs)\n                        changed = True\n        return closure == self.attributes\n\n    def has_trivial_mvd(self, x: Set[str], y: Set[str]) -> bool:\n        \"\"\"An MVD is trivial if Y is subset of X or X union Y = R.\"\"\"\n        return y.issubset(x) or x.union(y) == self.attributes\n\n    def find_violating_mvd(self):\n        \"\"\"Find the first MVD that violates 4NF.\"\"\"\n        for x, y in self.mvds:\n            if not self.has_trivial_mvd(x, y):\n                if not self.is_superkey(x):\n                    return x, y\n        return None, None\n\n    def __repr__(self) -> str:\n        attrs = \", \".join(sorted(self.attributes))\n        return f\"{self.name}({attrs})\"\n\n\ndef decompose_to_4nf(r: Relation) -> List[Relation]:\n    \"\"\"Decompose relation R to 4NF.\"\"\"\n    result = [r]\n    changed = True\n\n    while changed:\n        changed = False\n        for i, rel in enumerate(result):\n            x, y = rel.find_violating_mvd()\n            if x is not None:\n                # Compute Z = R - (X union Y)\n                z = rel.attributes - x - y\n\n                # Build R1 = X union Y\n                r1 = Relation(f\"{rel.name}_1\", x.union(y))\n                # Build R2 = X union Z\n                r2 = Relation(f\"{rel.name}_2\", x.union(z))\n\n                # Copy relevant MVDs to children\n                for mx, my in rel.mvds:\n                    combined = mx.union(my)\n                    if combined.issubset(r1.attributes):\n                        r1.add_mvd(mx, my)\n                    if combined.issubset(r2.attributes):\n                        r2.add_mvd(mx, my)\n\n                # Replace with decomposed relations\n                result.pop(i)\n                result.extend([r1, r2])\n                changed = True\n                break\n\n    return result\n\n\ndef check_lossless_join(r1: Relation, r2: Relation) -> bool:\n    \"\"\"Check if R1 and R2 can be losslessly joined.\"\"\"\n    common = r1.attributes.intersection(r2.attributes)\n    # Lossless if common attributes form a superkey in either relation\n    return r1.is_superkey(common) or r2.is_superkey(common)\n\n\ndef print_decomposition_steps(r: Relation):\n    \"\"\"Print step-by-step 4NF decomposition.\"\"\"\n    print(f\"Original: {r}\")\n    print(f\"MVDs: {[(sorted(x), sorted(y)) for x, y in r.mvds]}\")\n    print()\n\n    step = 1\n    result = [r]\n    while True:\n        changed = False\n        for i, rel in enumerate(result):\n            x, y = rel.find_violating_mvd()\n            if x is not None:\n                z = rel.attributes - x - y\n                print(f\"Step {step}: Found violating MVD {sorted(x)} -->> {sorted(y)}\")\n                print(f\"  X = {sorted(x)}, Y = {sorted(y)}, Z = {sorted(z)}\")\n                print(f\"  Decomposing {rel.name} into:\")\n\n                r1 = Relation(f\"{rel.name}_1\", x.union(y))\n                r2 = Relation(f\"{rel.name}_2\", x.union(z))\n\n                print(f\"    R1 = X union Y = {sorted(r1.attributes)}\")\n                print(f\"    R2 = X union Z = {sorted(r2.attributes)}\")\n\n                for mx, my in rel.mvds:\n                    combined = mx.union(my)\n                    if combined.issubset(r1.attributes):\n                        r1.add_mvd(mx, my)\n                    if combined.issubset(r2.attributes):\n                        r2.add_mvd(mx, my)\n\n                result.pop(i)\n                result.extend([r1, r2])\n                changed = True\n                step += 1\n                print(f\"  Lossless? {check_lossless_join(r1, r2)}\")\n                print()\n                break\n        if not changed:\n            break\n\n    print(f\"Final 4NF decomposition ({len(result)} relations):\")\n    for rel in result:\n        print(f\"  {rel} {'[IN 4NF]' if rel.find_violating_mvd() == (None, None) else '[NOT 4NF]'}\")\n    print()\n\n\n# === Dry Run: Employee Skills and Languages ===\nprint(\"=\" * 60)\nprint(\"DRY RUN: EMP_SKILL_LANG Decomposition\")\nprint(\"=\" * 60)\n\nemp = Relation(\"EMP_SKILL_LANG\", {\"emp_id\", \"skill\", \"language\"})\nemp.add_mvd({\"emp_id\"}, {\"skill\"})\nemp.add_mvd({\"emp_id\"}, {\"language\"})\n\nprint_decomposition_steps(emp)\n\n# === Dry Run: Doctor Info ===\nprint(\"=\" * 60)\nprint(\"DRY RUN: DOCTOR_INFO Decomposition\")\nprint(\"=\" * 60)\n\ndoc = Relation(\"DOCTOR_INFO\", {\"doctor_id\", \"patient\", \"specialty\"})\ndoc.add_mvd({\"doctor_id\"}, {\"patient\"})\ndoc.add_mvd({\"doctor_id\"}, {\"specialty\"})\n\nprint_decomposition_steps(doc)\n\n# === Edge Case: Trivial MVD Only ===\nprint(\"=\" * 60)\nprint(\"EDGE CASE: Trivial MVD Only (No Decomposition Needed)\")\nprint(\"=\" * 60)\n\ntriv = Relation(\"TRIVIAL\", {\"a\", \"b\", \"c\"})\ntriv.add_mvd({\"a\"}, {\"b\"})  # This MVD's left side IS a superkey\ntriv.add_mvd({\"a\", \"b\", \"c\"}, {\"a\"})  # This MVD is trivial (Y subset of X)\n\nprint_decomposition_steps(triv)\n\n# === Edge Case: Single Attribute Superkey ===\nprint(\"=\" * 60)\nprint(\"EDGE CASE: Single Attribute Superkey (Already 4NF)\")\nprint(\"=\" * 60)\n\nalready = Relation(\"ALREADY_4NF\", {\"id\", \"value\"})\nalready.add_mvd({\"id\"}, {\"value\"})\n# If id is a superkey, this is already in 4NF\n\n# Manually mark id as superkey-equivalent by making it determine all\nalready.add_mvd({\"id\"}, {\"value\"})\n\nprint_decomposition_steps(already)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output Summary:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DRY RUN: EMP_SKILL_LANG Decomposition\nOriginal: EMP_SKILL_LANG(emp_id, language, skill)\n...\nStep 1: Found violating MVD ['emp_id'] -->> ['language']\n  Decomposing into: R1(emp_id, language), R2(emp_id, skill)\n  Lossless? True\n\nFinal 4NF decomposition (2 relations): [EMP_SKILL_LANG_1(emp_id, language),\n  EMP_SKILL_LANG_2(emp_id, skill)]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "87-join-dependencies-and-fifth-normal-form-5nf",
      children: "8.7 Join Dependencies and Fifth Normal Form (5NF)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "join dependency (JD)"
      }), " specifies that a relation can be losslessly decomposed into a set of projections and then reconstructed via joins."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["JD notation: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JOIN{R1, R2, ..., Rn}"
      }), " -- the relation is losslessly joinable over these projections."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Puzzle Pieces"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Imagine a 3-piece jigsaw puzzle showing a landscape. Each piece has sky, mountains, and grass. You decompose the picture into three layers: SKY(mountains, grass), MOUNTAINS(sky, grass), GRASS(sky, mountains). If you join ANY TWO of these, you get incorrect results (spurious tuples). Only joining ALL THREE gives you the original picture. The JD says: \"This picture can only be decomposed into exactly these three specific projections\" -- any fewer loses information, any more is unnecessary."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Consider a relation tracking agents, companies, and products:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AGENT_PRODUCT(agent_name, company, product)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Suppose the rule is: \"An agent sells for a company AND the agent sells the company's products.\" This creates a 3-way constraint."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "agent_name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "company"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "product"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acme"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Widget"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acme"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gizmo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Widget"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acme"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Widget"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This relation has a join dependency: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JOIN{AGENT_PRODUCT(agent_name, company), AGENT_PRODUCT(company, product), AGENT_PRODUCT(agent_name, product)}"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The relation is a 3-way join of its three binary projections. This JD means the relation cannot be decomposed into fewer than 3 tables without losing information."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fifth Normal Form (5NF) / Projection-Join Normal Form (PJNF):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A relation is in 5NF if for every non-trivial join dependency ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JOIN{R1, ..., Rn}"
      }), ", every Ri is a superkey."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If a relation is in 5NF, it cannot be decomposed further without losing information -- it is in \"ultimate normal form\" with respect to projections and joins."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step 5NF Validation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: Identify all candidate keys of relation R\nStep 2: Find all non-trivial join dependencies that hold in R\nStep 3: For each JD: JOIN{R1, R2, ..., Rn}:\n         For each projection Ri:\n             Check if Ri's attributes contain a candidate key\n             If any Ri does NOT contain a candidate key:\n                 R is NOT in 5NF -- decompose by this JD\nStep 4: If all JDs have every Ri containing a candidate key:\n         R is in 5NF\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode for 5NF Checker:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CHECK_5NF(R, JDs):\n    keys = FIND_CANDIDATE_KEYS(R)\n    for each JD in JDs:\n        for each projection P in JD:\n            contains_key = false\n            for each key in keys:\n                if key is subset of P.attributes:\n                    contains_key = true\n                    break\n            if not contains_key:\n                return false, \"JD {JD} violates 5NF on projection {P}\"\n    return true, \"R is in 5NF\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run: 5NF Validation of AGENT_PRODUCT"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Relation: AGENT_PRODUCT(agent_name, company, product)\nCandidate key: (agent_name, company, product) -- the full set\n\nJD1: JOIN{(agent_name, company), (company, product), (agent_name, product)}\n\nCheck each projection:\n  Projection 1: (agent_name, company) -- contains key? NO.\n    Key requires all 3 attributes. Violation!\n\nSince the single candidate key contains ALL attributes, no proper\nsubset can be a superkey. Therefore every non-trivial JD violates 5NF.\n\nDecomposition:\n  R1 = (agent_name, company)\n  R2 = (company, product)\n  R3 = (agent_name, product)\n\nThese are all in 5NF (each has a 2-attribute key and no non-trivial JDs).\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lossless Join Back Verification:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given the decomposition into three binary tables:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "agent_company:\n  Alice, Acme\n  Alice, Beta\n  Bob, Acme\n\ncompany_product:\n  Acme, Widget\n  Acme, Gizmo\n  Beta, Widget\n\nagent_product:\n  Alice, Widget\n  Alice, Gizmo\n  Bob, Widget\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2-Way Join (Spurious Tuples -- WRONG):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "agent_company JOIN company_product:\n  Alice, Acme, Widget   -- correct\n  Alice, Acme, Gizmo    -- correct\n  Alice, Beta, Widget   -- correct\n  Bob, Acme, Widget     -- correct\n  Bob, Acme, Gizmo      -- SPURIOUS! Bob does not sell Gizmo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3-Way Join (Lossless -- CORRECT):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "agent_company JOIN company_product JOIN agent_product:\n  Alice, Acme, Widget   -- correct\n  Alice, Acme, Gizmo    -- correct\n  Alice, Beta, Widget   -- correct\n  Bob, Acme, Widget     -- correct\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Practical note:"
      }), " 5NF is rare in practice. Most designs that reach 4NF are effectively in 5NF. The AGENT_PRODUCT example above must be decomposed into three tables:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE agent_company (\n    agent_name VARCHAR(50),\n    company VARCHAR(50),\n    PRIMARY KEY (agent_name, company)\n);\n\nCREATE TABLE company_product (\n    company VARCHAR(50),\n    product VARCHAR(50),\n    PRIMARY KEY (company, product)\n);\n\nCREATE TABLE agent_product (\n    agent_name VARCHAR(50),\n    product VARCHAR(50),\n    PRIMARY KEY (agent_name, product)\n);\n\n-- The original data is recovered via:\n-- SELECT * FROM agent_company\n-- NATURAL JOIN company_product\n-- NATURAL JOIN agent_product;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases in Join Dependencies:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trivial JD"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One projection equals entire relation, or a projection contains a superkey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignore -- causes no redundancy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2-way JD"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equivalent to an MVD -- any 2-way JD is an MVD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4NF already handles this"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "N-way JD"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3+ projections needed for lossless decomposition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires 5NF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overlapping JDs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple JDs with overlapping projections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decompose by one JD, then check resulting relations for remaining JDs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Spurious tuples"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incorrect join produces rows not in original"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JD is false if any projection combination produces spurious tuples"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cyclic JDs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JDs that form a dependency cycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decompose iteratively; may converge to different 5NF schemas"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty JD"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JD with zero projections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trivially holds; has no practical meaning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implied JD"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JD follows from candidate keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relation is already in 5NF for this JD"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "88-c-implementation-5nf-checker",
      children: "8.8 C++ Implementation: 5NF Checker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <set>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\nstruct JD {\n    string name;\n    vector<set<string>> projections;\n};\n\nstruct Relation5NF {\n    string name;\n    set<string> attributes;\n    vector<set<string>> candidateKeys;\n\n    Relation5NF(string n, set<string> attrs)\n        : name(n), attributes(attrs) {}\n};\n\nclass FiveNfChecker {\npublic:\n    static bool isSuperkey(const Relation5NF& r,\n                           const set<string>& attrs) {\n        for (auto& key : r.candidateKeys) {\n            if (includes(attrs.begin(), attrs.end(),\n                         key.begin(), key.end())) {\n                return true;\n            }\n        }\n        return false;\n    }\n\n    static bool check5NF(const Relation5NF& r,\n                         const vector<JD>& jds) {\n        cout << \"Checking \" << r.name << \" for 5NF...\" << endl;\n        cout << \" Candidate keys: \";\n        for (auto& k : r.candidateKeys) {\n            cout << \"(\";\n            for (auto it = k.begin(); it != k.end(); ++it) {\n                if (it != k.begin()) cout << \",\";\n                cout << *it;\n            }\n            cout << \") \";\n        }\n        cout << endl;\n\n        for (auto& jd : jds) {\n            cout << \" JD \" << jd.name << \": JOIN{\";\n            for (size_t i = 0; i < jd.projections.size(); i++) {\n                if (i > 0) cout << \", \";\n                cout << \"(\";\n                for (auto it = jd.projections[i].begin();\n                     it != jd.projections[i].end(); ++it) {\n                    if (it != jd.projections[i].begin()) cout << \",\";\n                    cout << *it;\n                }\n                cout << \")\";\n            }\n            cout << \"}\" << endl;\n\n            for (size_t i = 0; i < jd.projections.size(); i++) {\n                bool hasKey = isSuperkey(r, jd.projections[i]);\n                cout << \"   Projection \" << (i+1) << \": \"\n                     << (hasKey ? \"CONTAINS\" : \"DOES NOT CONTAIN\")\n                     << \" a candidate key\" << endl;\n                if (!hasKey) {\n                    cout << \" => VIOLATION: Relation is NOT in 5NF\" << endl;\n                    cout << \"    Decompose by this JD!\" << endl;\n                    return false;\n                }\n            }\n        }\n        cout << \" => Relation IS in 5NF\" << endl;\n        return true;\n    }\n\n    static void printDecomposition(const Relation5NF& r,\n                                    const JD& jd) {\n        cout << \"\\nDecomposition of \" << r.name\n             << \" by JD \" << jd.name << \":\" << endl;\n        for (size_t i = 0; i < jd.projections.size(); i++) {\n            cout << \"  R\" << (i+1) << \"(\";\n            for (auto it = jd.projections[i].begin();\n                 it != jd.projections[i].end(); ++it) {\n                if (it != jd.projections[i].begin()) cout << \", \";\n                cout << *it;\n            }\n            cout << \")\" << endl;\n        }\n    }\n};\n\nint main() {\n    // Example 1: AGENT_PRODUCT(agent_name, company, product)\n    set<string> attrs = {\"agent_name\", \"company\", \"product\"};\n    Relation5NF agentProd(\"AGENT_PRODUCT\", attrs);\n    agentProd.candidateKeys.push_back(\n        {\"agent_name\", \"company\", \"product\"});\n\n    JD jd1;\n    jd1.name = \"JD1\";\n    jd1.projections.push_back({\"agent_name\", \"company\"});\n    jd1.projections.push_back({\"company\", \"product\"});\n    jd1.projections.push_back({\"agent_name\", \"product\"});\n\n    cout << \"=== 5NF Checker Demo ===\" << endl;\n    FiveNfChecker::check5NF(agentProd, {jd1});\n    FiveNfChecker::printDecomposition(agentProd, jd1);\n\n    cout << \"\\n---\" << endl;\n\n    // Example 2: Already in 5NF (2-attribute key)\n    // R(agent_name, company) with key (agent_name, company)\n    set<string> attrs2 = {\"agent_name\", \"company\"};\n    Relation5NF agentComp(\"AGENT_COMPANY\", attrs2);\n    agentComp.candidateKeys.push_back({\"agent_name\", \"company\"});\n\n    JD jd2;\n    jd2.name = \"JD2\";\n    jd2.projections.push_back({\"agent_name\"});\n    jd2.projections.push_back({\"company\"});\n\n    cout << \"\\n=== Checking a 2-attribute relation ===\" << endl;\n    FiveNfChecker::check5NF(agentComp, {jd2});\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== 5NF Checker Demo ===\nChecking AGENT_PRODUCT for 5NF...\n Candidate keys: (agent_name,company,product)\n JD JD1: JOIN{(agent_name, company), (company, product), (agent_name, product)}\n   Projection 1: DOES NOT CONTAIN a candidate key\n   => VIOLATION: Relation is NOT in 5NF\n    Decompose by this JD!\n\nDecomposition of AGENT_PRODUCT by JD JD1:\n  R1(agent_name, company)\n  R2(company, product)\n  R3(agent_name, product)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "89-python-implementation-5nf-checker-with-join-simulation",
      children: "8.9 Python Implementation: 5NF Checker with Join Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Set, List, Tuple, Dict, Any\nfrom itertools import combinations, product\n\n\nclass JoinDependency:\n    \"\"\"Represents a join dependency JD*{R1, R2, ..., Rn}.\"\"\"\n\n    def __init__(self, projections: List[Set[str]]):\n        self.projections = projections\n\n    def __repr__(self) -> str:\n        proj_strs = [f\"({', '.join(sorted(p))})\" for p in self.projections]\n        return f\"JOIN{'{'}{', '.join(proj_strs)}{'}'}\"\n\n\nclass Relation5NF:\n    \"\"\"Relation with candidate keys for 5NF checking.\"\"\"\n\n    def __init__(self, name: str, attributes: Set[str],\n                 candidate_keys: List[Set[str]]):\n        self.name = name\n        self.attributes = attributes\n        self.candidate_keys = [set(k) for k in candidate_keys]\n\n    def is_superkey(self, attrs: Set[str]) -> bool:\n        \"\"\"Check if attrs contains any candidate key.\"\"\"\n        return any(key.issubset(attrs) for key in self.candidate_keys)\n\n\ndef check_5nf(r: Relation5NF, jds: List[JoinDependency]) -> Tuple[bool, str]:\n    \"\"\"\n    Check if relation R is in 5NF for given join dependencies.\n    Returns (is_5nf, reason/message).\n    \"\"\"\n    print(f\"\\n{'='*60}\")\n    print(f\"5NF Check: {r.name}\")\n    print(f\"  Attributes: {sorted(r.attributes)}\")\n    print(f\"  Candidate keys: {[sorted(k) for k in r.candidate_keys]}\")\n    print(f\"{'='*60}\")\n\n    for i, jd in enumerate(jds):\n        print(f\"\\n  JD{i+1}: {jd}\")\n        for j, proj in enumerate(jd.projections):\n            has_key = r.is_superkey(proj)\n            status = \"CONTAINS\" if has_key else \"DOES NOT CONTAIN\"\n            print(f\"    P{j+1} {sorted(proj)}: {status} a candidate key\")\n            if not has_key:\n                msg = (f\"JD{i+1} violates 5NF: projection {j+1} \"\n                       f\"{sorted(proj)} has no candidate key.\")\n                return False, msg\n\n    return True, f\"{r.name} is in 5NF.\"\n\n\ndef simulate_spurious_tuples():\n    \"\"\"\n    Simulate join operations to demonstrate spurious tuples.\n    \"\"\"\n    print(f\"\\n{'='*60}\")\n    print(\"SPURIOUS TUPLE DEMONSTRATION\")\n    print(f\"{'='*60}\")\n\n    # Original data\n    original = [\n        (\"Alice\", \"Acme\", \"Widget\"),\n        (\"Alice\", \"Acme\", \"Gizmo\"),\n        (\"Alice\", \"Beta\", \"Widget\"),\n        (\"Bob\", \"Acme\", \"Widget\"),\n    ]\n\n    print(\"\\nOriginal AGENT_PRODUCT data:\")\n    for row in original:\n        print(f\"  {row}\")\n    print(f\"  ({len(original)} rows)\")\n\n    # Projections\n    agent_company = {(a, c) for a, c, _ in original}\n    company_product = {(c, p) for _, c, p in original}\n    agent_product = {(a, p) for a, _, p in original}\n\n    print(f\"\\nProjections:\")\n    print(f\"  AGENT_COMPANY: {sorted(agent_company)}\")\n    print(f\"  COMPANY_PRODUCT: {sorted(company_product)}\")\n    print(f\"  AGENT_PRODUCT: {sorted(agent_product)}\")\n\n    # 2-way join creates spurious tuples\n    join_2way = set()\n    for a, c in agent_company:\n        for c2, p in company_product:\n            if c == c2:\n                join_2way.add((a, c, p))\n\n    spurious = join_2way - set(original)\n    print(f\"\\n2-Way Join (agent_company JOIN company_product):\")\n    print(f\"  Result: {sorted(join_2way)} ({len(join_2way)} rows)\")\n    print(f\"  Spurious tuples: {sorted(spurious)}\")\n\n    # 3-way join recovers original\n    join_3way = set()\n    for a, c in agent_company:\n        for c2, p in company_product:\n            if c == c2:\n                for a2, p2 in agent_product:\n                    if a == a2 and p == p2:\n                        join_3way.add((a, c, p))\n\n    print(f\"\\n3-Way Join (all three projections):\")\n    print(f\"  Result: {sorted(join_3way)} ({len(join_3way)} rows)\")\n    print(f\"  Matches original: {join_3way == set(original)}\")\n\n    return join_3way == set(original)\n\n\n# === Dry Run: 5NF Checks ===\nprint(\"DRY RUN: 5NF VALIDATION\")\n\n# Test 1: AGENT_PRODUCT -- violates 5NF\nr1 = Relation5NF(\n    \"AGENT_PRODUCT\",\n    {\"agent_name\", \"company\", \"product\"},\n    [{\"agent_name\", \"company\", \"product\"}]\n)\n\njd1 = JoinDependency([\n    {\"agent_name\", \"company\"},\n    {\"company\", \"product\"},\n    {\"agent_name\", \"product\"}\n])\n\nis_5nf, msg = check_5nf(r1, [jd1])\nprint(f\"  Result: {'5NF' if is_5nf else 'NOT 5NF'}\")\nprint(f\"  Reason: {msg}\")\n\n# Test 2: Already decomposed relation (in 5NF)\nr2 = Relation5NF(\n    \"AGENT_COMPANY\",\n    {\"agent_name\", \"company\"},\n    [{\"agent_name\", \"company\"}]\n)\n\njd2 = JoinDependency([\n    {\"agent_name\"},\n    {\"company\"}\n])\n\nis_5nf2, msg2 = check_5nf(r2, [jd2])\nprint(f\"  Result: {'5NF' if is_5nf2 else 'NOT 5NF'}\")\nprint(f\"  Reason: {msg2}\")\n\n# Test 3: Demonstrate spurious tuples\nsimulate_spurious_tuples()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DRY RUN: 5NF VALIDATION\n============================================================\n5NF Check: AGENT_PRODUCT\n  Attributes: ['agent_name', 'company', 'product']\n  Candidate keys: [['agent_name', 'company', 'product']]\n============================================================\n\n  JD1: JOIN{(agent_name, company), (company, product), (agent_name, product)}\n    P1 ['agent_name', 'company']: DOES NOT CONTAIN a candidate key\n  Result: NOT 5NF\n  Reason: JD1 violates 5NF...\n\n============================================================\nSPURIOUS TUPLE DEMONSTRATION\n============================================================\nOriginal AGENT_PRODUCT data: 4 rows\n2-Way Join: 5 rows (1 spurious)\n3-Way Join: 4 rows (matches original)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "810-complexity-analysis-of-5nf-decomposition",
      children: "8.10 Complexity Analysis of 5NF Decomposition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "JD detection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(2^n) worst case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must check all possible projection subsets against the data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Candidate key detection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n! / (k! (n-k)!))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checking all k-sized attribute combinations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "5NF verification per JD"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k * m) where k = num keys, m = num projections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each projection checked against each candidate key"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "JD decomposition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(p) where p = number of projections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creating p new relations is linear in projection count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lossless join verification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(t * p) where t = tuple count, p = projections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each join multiplies rows; must verify against original"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why 5NF is Exponential:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The number of potential join dependencies for an n-attribute relation equals the number of ways to partition the attribute set -- the Bell number B_n. For n=5, B_5 = 52. For n=10, B_10 = 115,975. This exponential growth makes full 5NF analysis computationally infeasible for large schemas, explaining why practical database design stops at BCNF or 4NF."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "JD storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(p * a) where p = projections, a = avg attrs per projection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each projection stores attribute references"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Decomposition result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(p * t) where t = avg tuple count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each resulting relation may store its own rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Join intermediate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(t1 * t2 * ...) worst case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-way join can produce large intermediate results"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "811-domain-key-normal-form-dknf",
      children: "8.11 Domain-Key Normal Form (DKNF)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Domain-Key Normal Form"
      }), " (Ronald Fagin, 1981) is the theoretical ultimate normal form."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A relation is in DKNF if every constraint is a logical consequence of:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Domain constraints:"
        }), " Attribute values are from specified domains"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key constraints:"
        }), " Every relation has a key"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If a database is in DKNF, all constraints are enforced automatically by the domain and key mechanisms of the DBMS. No additional CHECK constraints, assertions, or triggers are needed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DKNF vs Lower Normal Forms:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "4NF"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "5NF"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DKNF"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Handles"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MVDs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JDs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALL constraints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Constraint scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-valued independence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-way decomposition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any business rule"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Achievable?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes, in most cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rarely needed but achievable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Almost never in practice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example constraint"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Independent skill/language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-way agent-company-product"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"salary must be between min_wage and 10x min_wage\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Enforcement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema decomposition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema decomposition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain + key only (idealized)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In practice, DKNF is rarely achievable because:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Business rules are often too complex to express purely as domain and key constraints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The decomposition required may be impractical"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example: A Business Rule That Breaks DKNF"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Consider: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EMPLOYEE(emp_id, dept, salary, min_wage_for_dept)"
      }), " with constraint ", (0,jsx_runtime.jsx)(_components.code, {
        children: "salary >= min_wage_for_dept"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To enforce this constraint as purely domain+key constraints, we would need:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A domain for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "salary"
        }), " that varies by department"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "But domain constraints are typically static per attribute"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This constraint requires a CHECK constraint or assertion -- DKNF cannot express it with domains and keys alone."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "812-temporal-databases",
      children: "8.12 Temporal Databases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Temporal databases"
      }), " track data across time, managing when facts were true (valid time) and when they were recorded (transaction time)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Concepts:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Valid time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When a fact is true in the real world"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Employee worked in dept from Jan 2023 to Jun 2023"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transaction time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When a fact is stored in the database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Record stored on Feb 15, 2023"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bitemporal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both valid and transaction time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Track both when true and when recorded"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "System-versioned"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBMS automatically tracks transaction time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL Server temporal tables, MariaDB system-versioned tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "User-defined period"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application manages valid time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application sets effective/expiry dates"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Design Approaches:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Snapshot Tables (Simple Temporal):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE employee_dept_history (\n    emp_id INTEGER,\n    dept_id INTEGER,\n    effective_date DATE,\n    expiry_date DATE,\n    PRIMARY KEY (emp_id, dept_id, effective_date),\n    CHECK (expiry_date > effective_date)\n);\n\n-- Query: Which department was employee 101 in on March 15, 2023?\nSELECT dept_id FROM employee_dept_history\nWHERE emp_id = 101\n  AND effective_date <= '2023-03-15'\n  AND expiry_date > '2023-03-15';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. System-Versioned Tables (Temporal Tables):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- SQL Server 2016+ syntax\nCREATE TABLE employee_dept (\n    emp_id INTEGER,\n    dept_id INTEGER,\n    effective_start DATETIME2 GENERATED ALWAYS AS ROW START,\n    effective_end DATETIME2 GENERATED ALWAYS AS ROW END,\n    PERIOD FOR SYSTEM_TIME (effective_start, effective_end),\n    PRIMARY KEY (emp_id, dept_id)\n) WITH (SYSTEM_VERSIONING = ON);\n\n-- Query data as of a specific time\nSELECT * FROM employee_dept\nFOR SYSTEM_TIME AS OF '2023-03-15';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Bitemporal Design:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE employee_salary_bitemporal (\n    emp_id INTEGER,\n    salary DECIMAL(10,2),\n    valid_from DATE,       -- Valid time start\n    valid_to DATE,         -- Valid time end\n    tx_from TIMESTAMP,     -- Transaction time start (system-versioned)\n    tx_to TIMESTAMP,       -- Transaction time end\n    PRIMARY KEY (emp_id, valid_from, tx_from)\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Temporal Normalization:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Temporal data introduces special normalization considerations. A relation tracking effective dates may have temporal dependencies:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EMP_DEPT(emp_id, dept_id, effective_from, effective_to)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FD: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "emp_id, effective_from -> dept_id"
      }), " (at any point in time, an employee has one department)\nMVD considerations: None if properly keyed by (emp_id, effective_from)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Performance Considerations for Temporal Data:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Temporal queries benefit from range indexes on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "effective_from"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "effective_to"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partition by time range for historical data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Archive old transaction-time data to reduce active table size"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bitemporal tables can grow large -- use partitioning and archival strategies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "813-denormalization",
      children: "8.13 Denormalization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Denormalization"
      }), " is the intentional introduction of redundancy into a normalized database to improve query performance. It is the opposite of normalization."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to denormalize:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read-heavy workloads:"
        }), " When reads vastly outnumber writes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reporting queries:"
        }), " Complex aggregations across many joined tables"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pre-joined data:"
        }), " Materialized views that pre-compute joins"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Caching summary data:"
        }), " Storing computed aggregates (e.g., order total alongside line items)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Denormalization Strategies with Pros/Cons:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pre-joining"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add frequently-joined columns to main table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eliminates JOINs; faster reads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update anomaly; data duplication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pre-calculated aggregates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store COUNT, SUM, AVG values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sub-second aggregations; no runtime computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stale data; must maintain with triggers/ETL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Materialized Views"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBMS-maintained denormalized query results"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic refresh; query optimizer can use them"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Storage cost; refresh overhead; not always fresh"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Array/JSON columns"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embed related data as JSON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-row retrieval; schema flexibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No relational integrity; harder to query individual elements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reporting tables"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate pre-joined table for BI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Isolates reporting load; can refresh on schedule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dual maintenance; data drift from source"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Computed columns"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column value derived from other columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always consistent; DBMS-managed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited to simple expressions; not for aggregates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Replicated columns"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy column across multiple tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoids joins in common paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must update all copies; consistency risk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Full-table caching"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-memory cache of normalized query results"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No schema changes; fast reads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache invalidation complexity; memory cost"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Pre-joining:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Normalized (3NF)\nSELECT c.name, o.order_date FROM customers c JOIN orders o ON c.id = o.customer_id;\n\n-- Denormalized: Add customer_name to orders table\nCREATE TABLE orders (\n    order_id INTEGER PRIMARY KEY,\n    customer_id INTEGER,\n    customer_name VARCHAR(100),  -- Denormalized!\n    order_date DATE\n);\n-- Now: SELECT name, order_date FROM orders (no join needed)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Pre-calculated aggregates:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Denormalized order_summary for fast reporting\nCREATE TABLE order_summary (\n    order_id INTEGER PRIMARY KEY,\n    item_count INTEGER,           -- Denormalized: COUNT of line items\n    total_amount DECIMAL(12,2)   -- Denormalized: SUM of line item totals\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Derived tables and materialized views:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- PostgreSQL materialized view (automatically maintained denormalization)\nCREATE MATERIALIZED VIEW customer_monthly_sales AS\nSELECT c.customer_id, c.name,\n       EXTRACT(YEAR FROM o.order_date) AS year,\n       EXTRACT(MONTH FROM o.order_date) AS month,\n       SUM(oi.quantity * oi.price) AS total\nFROM customers c\nJOIN orders o ON c.customer_id = o.customer_id\nJOIN order_items oi ON o.order_id = oi.order_id\nGROUP BY c.customer_id, c.name, EXTRACT(YEAR FROM o.order_date), EXTRACT(MONTH FROM o.order_date);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Storing derived values with triggers:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Maintain denormalized product_review_count\nCREATE TABLE product (\n    product_id INTEGER PRIMARY KEY,\n    product_name VARCHAR(200),\n    review_count INTEGER DEFAULT 0,  -- Denormalized\n    avg_rating DECIMAL(3,2)          -- Denormalized\n);\n\n-- Trigger to keep review_count updated\nCREATE FUNCTION update_product_stats() RETURNS TRIGGER AS $$\nBEGIN\n    UPDATE product\n    SET review_count = (SELECT COUNT(*) FROM review WHERE product_id = NEW.product_id),\n        avg_rating = (SELECT ROUND(AVG(rating), 2) FROM review WHERE product_id = NEW.product_id)\n    WHERE product_id = NEW.product_id;\n    RETURN NEW;\nEND;\n$$ LANGUAGE plpgsql;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Array or JSON columns:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Store related data in a JSON column instead of a separate table\nCREATE TABLE orders (\n    order_id INTEGER PRIMARY KEY,\n    customer_id INTEGER,\n    items JSONB,  -- Denormalized: order items stored as JSON\n    total DECIMAL(12,2)\n);\n\n-- Sample data: items = '[{\"product\": \"Widget\", \"qty\": 2, \"price\": 9.99}]'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "814-normalization-vs-denormalization-comparison",
      children: "8.14 Normalization vs Denormalization Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Normalization"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Denormalization"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Goal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimize redundancy, maximize integrity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximize read performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Write performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (single place to update)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (multiple copies to update)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Read performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (more JOINs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster (fewer JOINs, pre-computed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data integrity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (update anomaly free)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (update anomaly risk)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (redundant data)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schema flexibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (modular tables)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (tight coupling)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More complex queries (JOINs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simpler queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Application complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema handles integrity automatically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application must maintain consistency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When to use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OLTP, write-heavy workloads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OLAP, reporting, read-heavy workloads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Design process"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start here, then denormalize if needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply only when measurements justify it"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Better (less locking contention)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worse (more row contention on updates)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Indexing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More targeted indexes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May need more composite indexes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "815-risks-of-denormalization",
      children: "8.15 Risks of Denormalization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update anomalies return:"
        }), " Data must be updated in multiple places"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Increased storage:"
        }), " Redundant data consumes disk space"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Application complexity:"
        }), " Code must maintain redundant data correctly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inconsistency risk:"
        }), " If updates are not synchronized, data becomes inconsistent"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Less flexible:"
        }), " Denormalized schemas are harder to adapt to new requirements"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Practice:"
      }), " Start with a fully normalized design. Denormalize only when:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance measurements show a clear need"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The performance gain is significant (typically 10x or more for affected queries)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You have mechanisms to maintain consistency (triggers, application logic, materialized view refresh)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "816-applications-in-real-systems",
      children: "8.16 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Denormalization in Analytics and Warehousing:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Denormalization Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Star Schema (Data Warehouse)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fact table with dimension keys; dimensions are denormalized (e.g., customer dimension includes city, state, country)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimizes for BI tool queries; reduces JOIN count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Snowflake Schema"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dimensions partially normalized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balances storage and query performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ClickHouse"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Columnar storage with materialized views and aggregating merge trees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-computes aggregates at insert time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Elasticsearch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Denormalized documents (nested JSON)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-document retrieval avoids JOINs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Redis Cache"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Denormalized key-value snapshots"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sub-millisecond reads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DynamoDB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-table design with composite keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-joined access patterns; no cross-table queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cassandra"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Table per query pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each query has its own pre-optimized table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MongoDB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoids $lookup (JOIN) operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Redshift"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distribution keys + sort keys for denormalized fact tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Massively parallel joins on denormalized schemas"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BigQuery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nested repeated fields"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces JOIN overhead in analytical queries"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Star Schema Example (Denormalized for Analytics):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Dimension tables (denormalized -- city, state, country in one table)\nCREATE TABLE dim_customer (\n    customer_id INTEGER PRIMARY KEY,\n    name VARCHAR(100),\n    city VARCHAR(50),\n    state VARCHAR(2),\n    country VARCHAR(50)\n);\n\nCREATE TABLE dim_product (\n    product_id INTEGER PRIMARY KEY,\n    name VARCHAR(100),\n    category VARCHAR(50),\n    price DECIMAL(10,2)\n);\n\nCREATE TABLE dim_date (\n    date_id INTEGER PRIMARY KEY,\n    date DATE,\n    year INTEGER,\n    month INTEGER,\n    day INTEGER,\n    quarter INTEGER\n);\n\n-- Fact table (references dimension keys, no direct denormalization in fact)\nCREATE TABLE fact_sales (\n    sale_id INTEGER PRIMARY KEY,\n    customer_id INTEGER REFERENCES dim_customer(customer_id),\n    product_id INTEGER REFERENCES dim_product(product_id),\n    date_id INTEGER REFERENCES dim_date(date_id),\n    quantity INTEGER,\n    amount DECIMAL(12,2)\n);\n\n-- Query: Total sales by state and product category\nSELECT c.state, p.category, SUM(f.amount) as total_sales\nFROM fact_sales f\nJOIN dim_customer c ON f.customer_id = c.customer_id\nJOIN dim_product p ON f.product_id = p.product_id\nJOIN dim_date d ON f.date_id = d.date_id\nWHERE d.year = 2024\nGROUP BY c.state, p.category;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Working through 4NF decomposition and denormalization scenarios shows when the higher forms actually improve data integrity and when denormalization is the smarter choice for real-world workloads."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 8.1: Full 4NF Decomposition"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Given: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DOCTOR_INFO(doctor_id, patient, specialty)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Suppose a doctor can have multiple specialties and treat multiple patients, and these are independent (any doctor can apply any of their specialties to any patient)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["MVDs: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "doctor_id -->> patient"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "doctor_id -->> specialty"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Candidate key: (doctor_id, patient, specialty) -- all three columns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is in BCNF (the only key is the full set of attributes, so no non-trivial FDs exist). But it violates 4NF because of the MVDs."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Decomposition:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- 4NF decomposition\nCREATE TABLE doctor_patient (\n    doctor_id INTEGER,\n    patient VARCHAR(100),\n    PRIMARY KEY (doctor_id, patient)\n);\n\nCREATE TABLE doctor_specialty (\n    doctor_id INTEGER,\n    specialty VARCHAR(100),\n    PRIMARY KEY (doctor_id, specialty)\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 8.2: Practical Denormalization -- E-Commerce"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Fully normalized schema (BCNF)\n-- To display an order, we need 5 JOINs\n\n-- Denormalized: add summary columns to orders\nCREATE TABLE orders_denormalized (\n    order_id INTEGER PRIMARY KEY,\n    customer_id INTEGER,\n    customer_name VARCHAR(200),       -- denormalized from customers\n    customer_email VARCHAR(255),       -- denormalized from customers\n    order_date TIMESTAMP,\n    status VARCHAR(20),\n    item_count INTEGER,                -- denormalized aggregate\n    total_amount DECIMAL(12,2),        -- denormalized aggregate\n    last_modified TIMESTAMP\n);\n\n-- Maintain with application logic or triggers\nINSERT INTO orders_denormalized (\n    order_id, customer_id, customer_name, customer_email,\n    order_date, status, item_count, total_amount\n)\nSELECT\n    o.order_id, o.customer_id, c.name, c.email,\n    o.order_date, o.status,\n    COUNT(oi.*), COALESCE(SUM(oi.quantity * oi.price), 0)\nFROM orders o\nJOIN customers c ON o.customer_id = c.customer_id\nLEFT JOIN order_items oi ON o.order_id = oi.order_id\nGROUP BY o.order_id, c.name, c.email, o.order_date, o.status;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Denormalization is NOT a shortcut for skipping normalization during schema design -- first normalize fully, then measure, then consider denormalization only if there is a provable performance problem."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Multi-valued dependencies (MVDs) in 4NF are independent attributes -- if you need to store a customer's phone numbers and email addresses separately, each should be its own child table, not a comma-separated list."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pro-tips",
      children: "Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4NF and 5NF are rarely needed in practice"
        }), " -- if you design from business requirements with a good understanding of FDs, you will naturally arrive at 3NF/BCNF. MVDs and JDs are edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Watch for independent multi-valued attributes"
        }), " -- if a table stores a person's multiple phone numbers AND multiple addresses in unrelated lists, you likely have a 4NF violation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Denormalization is a conscious trade-off"
        }), " -- it trades write performance and data integrity for read performance. Document every denormalization decision with the expected performance gain."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Measure before denormalizing"
        }), " -- a well-tuned BCNF schema with proper indexes often outperforms a denormalized mess."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DKNF is a theoretical limit"
        }), " -- achieving it in practice is almost impossible; treat it as a direction, not a destination."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Temporal tables are a first-class feature"
        }), " in modern DBMS (SQL Server 2016+, MariaDB 10.3+, PostgreSQL 12+ with extensions). Use them instead of custom timestamp logic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5NF is primarily academic"
        }), " -- if you encounter a 5NF violation in practice, you are likely modeling a constraint that should be enforced in application code, not schema."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common interview questions on higher normal forms and denormalization:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: When should I stop normalizing?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Answer: Stop at 3NF or BCNF in almost all practical cases. 4NF is only needed if you have independent multi-valued attributes (rare). 5NF is almost never required. The rule: normalize until write performance and integrity requirements are met, then measure read performance. If reads are slow, consider denormalization -- but measure first."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: Give a real business example of an MVD."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Answer: A hospital management system where a doctor has multiple specializations AND sees multiple patients independently. The doctor's skills (specializations) and workload (patients) are independent -- any doctor can apply any specialization to any patient. Storing all three in one table creates a cross-product explosion. The fix: separate DOCTOR_SPECIALTY and DOCTOR_PATIENT tables."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: What are the trade-offs of denormalization in a production system?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Answer: Denormalization improves read performance by eliminating JOINs and pre-computing aggregates. However, it reintroduces update anomalies -- changing a customer's name requires updating all denormalized copies. Storage increases. Application code becomes more complex. Inconsistencies may arise if synchronization fails. The rule: start normalized, profile, denormalize only the hot path."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: Is DKNF achievable? Why or why not?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Answer: DKNF is theoretically achievable but practically infeasible for most real-world databases. Business rules like \"a manager cannot earn more than 2x their team's average salary\" require CHECK constraints or assertions, which DKNF would want to express as domain+key constraints. The decomposition needed to enforce such rules purely through domains and keys would be extremely complex and impractical."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: What is the difference between 4NF and 5NF?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Answer: 4NF handles multi-valued dependencies (independent 1:N relationships). 5NF handles join dependencies (n-way decomposition constraints). Every MVD is a 2-way JD, so 4NF is a special case of 5NF. A relation can be in 4NF but not 5NF if it has a 3-way JD that cannot be captured by MVDs alone. The AGENT_PRODUCT(agent, company, product) example illustrates this."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6: How do you detect MVDs in an existing database?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Answer: Look for tables where two multi-valued columns (e.g., skills and languages) are both dependent on the same key, and the number of rows equals |values of column A| x |values of column B| per key. Query: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SELECT key, COUNT(DISTINCT col_a), COUNT(DISTINCT col_b), COUNT(*) FROM table GROUP BY key HAVING COUNT(*) > COUNT(DISTINCT col_a) AND COUNT(*) > COUNT(DISTINCT col_b)"
      }), ". If COUNT(*) equals COUNT(DISTINCT col_a) x COUNT(DISTINCT col_b), you likely have an MVD."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7: Can denormalization ever improve write performance?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Answer: Rarely, but yes. If a normalized write requires updating many small tables with complex foreign key checks, a denormalized single-table write can be faster due to fewer round trips and constraint checks. However, denormalized writes typically degrade with update anomalies. The most common case where denormalization helps writes is logging/event ingestion where you batch-write to a single wide table."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Beyond BCNF:"
        }), " Multi-valued dependencies (MVDs) arise when a table has two or more independent multi-valued attributes, creating redundancy beyond FDs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4NF:"
        }), " Eliminates redundancy from non-trivial MVDs whose left side is not a superkey."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Join Dependencies:"
        }), " Generalize MVDs to multi-way lossless decompositions; a 2-way JD is equivalent to an MVD."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5NF:"
        }), " Requires every JD to be implied by candidate keys -- further decomposition is not possible."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DKNF:"
        }), " The ideal state where all constraints follow from domain constraints and key constraints."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Denormalization:"
        }), " Intentionally reintroduces redundancy for performance, after careful measurement."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Denormalization patterns:"
        }), " Pre-joining, caching summaries, embedding related data, materialized views."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Temporal databases:"
        }), " Track data across valid time and transaction time using system-versioned tables or bitemporal design."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Normalization vs Denormalization:"
        }), " Normalize for integrity, denormalize for performance -- but only after measurement."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Normal Form"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Constraint Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem Solved"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4NF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-valued Dependency (MVD)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redundancy from independent multi-valued attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "5NF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Join Dependency (JD)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redundancy not captured by MVDs or FDs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DKNF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All constraints reducible to domain + key constraints"
          })]
        })]
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Denormalization Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Risk"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Pre-joining"
            }), " (adding redundant columns)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fewer joins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update anomaly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Caching summaries"
            }), " (pre-computed aggregates)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster reads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stale data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Embedding related data"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-row reads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data duplication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Materialized views"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic maintenance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Storage + refresh cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "JSON/array columns"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema flexibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No referential integrity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Computed columns"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always consistent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited expressions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Full-table caching"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No schema change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache invalidation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Symbol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Holds When"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X -->> Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-valued dependency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each X value has a set of Y values independent of other attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JOIN[R1, R2, ..., Rn]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n-way Join dependency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R can be losslessly decomposed into projections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X -> Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functional dependency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each X value determines exactly one Y value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "valid_time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When fact is true in real world"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application-managed effective/expiry dates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "transaction_time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When fact was recorded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBMS-managed row versioning"
          })]
        })]
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "MVD Characteristics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Independent sets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Person has phone_numbers AND degrees independently"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4NF violation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone numbers and degrees stored in the same table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4NF fix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate tables: Person_Phone and Person_Degree"
          })]
        })]
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "JD Characteristics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3+ way constraint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent sells for company, sells company products"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spurious tuples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-way join produces rows not in original"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5NF fix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decompose into three binary relations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Applied In"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Matters"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4NF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HR systems, CRM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Employees with multiple skills AND multiple certifications -- independent attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "5NF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highly normalized data warehouses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Academic databases requiring decomposition into many small projections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Denormalization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reporting, analytics, dashboards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-joined tables or cached aggregates for sub-second query response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Materialized Views"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data warehouses, BI tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-computed monthly summaries, daily rollups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DKNF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theoretical ideal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aspirational target for database design purity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Star Schema"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data warehousing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Denormalized dimensions with centralized fact tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Temporal Tables"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auditing, compliance, history"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Track changes over time; system-versioned tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single-table design"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DynamoDB, NoSQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-joined access patterns for scale"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "817-typescript-mvd-detector--denormalization-advisor",
      children: "8.17 TypeScript MVD Detector & Denormalization Advisor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following code detects multi-valued dependency violations and recommends denormalization strategies based on query patterns."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ============================================================\n// MVD Detector & Denormalization Advisor — TypeScript\n// ============================================================\n\ninterface TableData {\n  name: string;\n  columns: string[];\n  rows: Record<string, unknown>[];\n}\n\nclass MVDAnalyzer {\n  detectMVDs(table: TableData): string[] {\n    const mvdCandidates: string[] = [];\n    // For each pair of non-key columns, check if they behave independently\n    const nonKeyCols = table.columns;\n    for (let i = 0; i < nonKeyCols.length; i++) {\n      for (let j = i + 1; j < nonKeyCols.length; j++) {\n        const colA = nonKeyCols[i];\n        const colB = nonKeyCols[j];\n        // Group by remaining columns and check independence\n        const otherCols = table.columns.filter(c => c !== colA && c !== colB);\n        if (otherCols.length === 0) continue;\n        const groups = new Map<string, { aVals: Set<unknown>; bVals: Set<unknown>; count: number }>();\n        for (const row of table.rows) {\n          const key = otherCols.map(c => String(row[c])).join('|');\n          if (!groups.has(key)) groups.set(key, { aVals: new Set(), bVals: new Set(), count: 0 });\n          const g = groups.get(key)!;\n          g.aVals.add(row[colA]);\n          g.bVals.add(row[colB]);\n          g.count++;\n        }\n        for (const [key, g] of groups) {\n          if (g.count > g.aVals.size && g.count > g.bVals.size) {\n            // Possible MVD: total rows > distinct values of either column\n            const expected = g.aVals.size * g.bVals.size;\n            if (g.count === expected) {\n              mvdCandidates.push(\n                'MVD detected: ' + otherCols.join(',') + ' -->> ' + colA + ' (independent of ' + colB + ')' +\n                ' — ' + g.count + ' rows = ' + g.aVals.size + ' x ' + g.bVals.size\n              );\n            }\n          }\n        }\n      }\n    }\n    return mvdCandidates;\n  }\n\n  recommendDenormalization(workload: Array<{ tables: string[]; joins: number; frequency: number }>): string[] {\n    const recs: string[] = [];\n    const joinCounts = new Map<string, number>();\n    for (const q of workload) {\n      for (let i = 0; i < q.tables.length; i++) {\n        for (let j = i + 1; j < q.tables.length; j++) {\n          const pair = [q.tables[i], q.tables[j]].sort().join('-');\n          joinCounts.set(pair, (joinCounts.get(pair) || 0) + q.frequency);\n        }\n      }\n    }\n    for (const [pair, count] of joinCounts) {\n      if (count > 100) {\n        recs.push('High-frequency join: ' + pair + ' (' + count + ' queries) — Consider denormalization');\n      }\n    }\n    return recs;\n  }\n}\n\n// Demo\nconst analyzer = new MVDAnalyzer();\nconst doctorTable: TableData = {\n  name: 'DoctorInfo',\n  columns: ['doctor_id', 'patient', 'specialty'],\n  rows: [\n    { doctor_id: 1, patient: 'Alice', specialty: 'Cardiology' },\n    { doctor_id: 1, patient: 'Bob', specialty: 'Cardiology' },\n    { doctor_id: 1, patient: 'Alice', specialty: 'Neurology' },\n    { doctor_id: 1, patient: 'Bob', specialty: 'Neurology' },\n    { doctor_id: 2, patient: 'Charlie', specialty: 'Orthopedics' },\n  ]\n};\n\nconst mvds = analyzer.detectMVDs(doctorTable);\nconsole.log('MVD Analysis for DoctorInfo:');\nmvds.forEach(m => console.log('  ' + m));\nif (mvds.length === 0) console.log('  No MVDs detected');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mermaid Diagram: Normalization vs Denormalization Trade-off"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph \"Normalized (3NF/BCNF)\"\n        C[Customers] --> J1[JOIN]\n        O[Orders] --> J1\n        OI[Order Items] --> J1\n        J1 --> R1[Report: Slow Write: Fast Integrity: High]\n    end\n    subgraph \"Denormalized\"\n        DO[Denormalized Orders<br/>with customer_name<br/>and total_amount] --> R2[Report: Fast Write: Slow Integrity: Medium]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-chapter-quiz-questions",
      children: "Additional Chapter Quiz Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following is a common sign of a 4NF violation?\na) Duplicate rows in the table\nb) Two independent multi-valued attributes in the same table\nc) A table with no primary key\nd) A table with a composite primary key"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Denormalization should only be applied after:\na) The schema is designed\nb) Performance measurements identify specific bottlenecks\nc) All foreign keys are removed\nd) The database is in production"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A join dependency is a generalization of:\na) A functional dependency\nb) A multi-valued dependency\nc) A primary key constraint\nd) A foreign key constraint"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In a star schema, dimension tables are typically:\na) Normalized to 5NF\nb) Denormalized for query performance\nc) Stored as views\nd) Indexed with hash indexes"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 11-b, 12-b, 13-b, 14-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A multi-valued dependency X -->> Y exists when:\na) X determines a single Y value\nb) X determines a set of Y values that are independent of other attributes\nc) Y determines X\nd) X and Y have a one-to-one relationship"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "4NF requires that every MVD:\na) Has a single attribute on the right side\nb) Has a left side that is a superkey\nc) Is also a functional dependency\nd) Involves at least three attributes"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Denormalization should be applied:\na) Always, at the start of design\nb) Never, under any circumstances\nc) After measuring actual performance and identifying bottlenecks\nd) Only for data that never changes"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The main risk of denormalization is:\na) Slower reads\nb) Update anomalies and data inconsistency\nc) Increased query complexity\nd) Reduced storage space"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which normal form addresses join dependencies?\na) 4NF\nb) BCNF\nc) 5NF\nd) DKNF"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DKNF stands for:\na) Domain-Key Normal Form\nb) Data-Key Normal Form\nc) Dependency-Kernel Normal Form\nd) Distributed-Key Normal Form"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A common sign of a 4NF violation is:\na) Duplicate rows\nb) Two independent multi-valued attributes in the same table\nc) NULL values\nd) Non-atomic attributes"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which is NOT a valid denormalization technique?\na) Pre-joining frequently accessed data\nb) Caching computed aggregates\nc) Removing all foreign keys\nd) Using materialized views"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What distinguishes a temporal database from a regular database?\na) It stores data in non-volatile memory\nb) It tracks valid time and/or transaction time for data\nc) It uses faster indexes\nd) It only stores temporary data"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In a star schema, dimensions are typically:\na) Fully normalized to 5NF\nb) Denormalized for faster queries\nc) Stored as JSON\nd) Encrypted at rest"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-b, 2-b, 3-c, 4-b, 5-c, 6-a, 7-b, 8-c, 9-b, 10-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-valued dependencies (MVDs) model independent multi-valued attributes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "4NF eliminates redundancy from MVDs by requiring every MVD left side to be a superkey."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Join dependencies (JDs) model lossless decomposition across multiple projections."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "5NF is the \"ultimate normal form\" for projections -- no further lossless decomposition is possible."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DKNF is the theoretical ideal where all constraints follow from domain and key constraints."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Denormalization re-introduces redundancy for performance, but adds complexity and risk."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Temporal databases track data across valid time and transaction time dimensions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always measure before denormalizing; start normalized and optimize based on evidence."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic",
      children: "Basic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is a multi-valued dependency? How does it differ from a functional dependency?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Given ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PERSON(name, degree, hobby)"
          }), " where a person can have multiple degrees and multiple hobbies independently, identify the MVDs and explain why this table violates 4NF."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Describe a scenario where 4NF decomposition would eliminate redundancy but the table was already in BCNF."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is denormalization? Name two situations where denormalization is appropriate."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the difference between valid time and transaction time in temporal databases?"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "intermediate",
      children: "Intermediate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Given ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CAR(vin, color, feature)"
          }), " where a car has one color and multiple features, and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "vin -> color"
          }), " is an FD and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "vin -->> feature"
          }), " is an MVD:\na) What normal form is this in?\nb) Decompose to 4NF.\nc) Write the CREATE TABLE statements."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain the difference between 4NF and 5NF. Give an example of a relation that is in 4NF but not in 5NF."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["For the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AGENT_PRODUCT"
          }), " relation in Section 8.7, explain why the 3-table decomposition is necessary and what anomaly would occur with a 2-table decomposition."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A social media database has a table ", (0,jsx_runtime.jsx)(_components.code, {
            children: "FRIENDS(user_id, friend_id, interest, group)"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Users have friends (MVD on user -->> friend)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Users have interests (MVD on user -->> interest)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Users belong to groups (MVD on user -->> group)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "These are all independent"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Normalize to 4NF. How many tables result?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a temporal table to track employee salary changes over time. Include both valid time and transaction time. Write the CREATE TABLE statement."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced",
      children: "Advanced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Consider a university database with the rule: \"A student can take a course only if the course is offered by the student's department.\" The relation ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ENROLLMENT(student_id, dept_id, course_id)"
          }), " has constraints:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "student_id -> dept_id"
            }), " (students belong to one department)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "course_id -> dept_id"
            }), " (courses belong to one department)"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Is this in BCNF? 4NF? 5NF? Decompose if necessary."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "For a STREAMING service:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A user can have multiple subscriptions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A user can watch on multiple devices"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A device can be used by multiple users"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A subscription covers multiple devices"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a normalized schema. Then design a denormalized version suitable for a dashboard that shows \"active users today\" with sub-second response time. What trade-offs does each design make?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Research and explain: Why is DKNF considered the \"ultimate\" normal form but rarely achieved in practice? Provide an example of a business constraint that cannot be expressed as domain/key constraints alone."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a Python function that takes a relation schema and a set of MVDs, returns the 4NF decomposition, and verifies lossless join. Test it with the DOCTOR_INFO example."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a bitemporal schema for a financial trading system where both the valid time of a trade and the transaction time of recording matter for compliance. Write sample queries for:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "What trades were valid on a given date?"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "What did the system know about trades at a given time?"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Audit: when was a specific trade correction recorded?"
          }), "\n"]
        }), "\n"]
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