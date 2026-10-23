"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[838],{

/***/ 6965
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_digital_logic_04_karnaugh_maps_md_4b1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-digital-logic-04-karnaugh-maps-md-4b1.json
const site_docs_courses_digital_logic_04_karnaugh_maps_md_4b1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/digital-logic/04-karnaugh-maps","title":"Chapter 4: Karnaugh Maps","description":"Prereq: Chapter 2 (Boolean Algebra) ? K-maps provide a graphical alternative to algebraic minimisation.","source":"@site/docs/courses/digital-logic/04-karnaugh-maps.md","sourceDirName":"courses/digital-logic","slug":"/digital-logic/04-karnaugh-maps","permalink":"/ai-engineering-journey/digital-logic/04-karnaugh-maps","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"04-karnaugh-maps","slug":"/digital-logic/04-karnaugh-maps","title":"Chapter 4: Karnaugh Maps","sidebar_label":"Chapter 4: Karnaugh Maps","sidebar_position":4},"sidebar":"course-digital-logic","previous":{"title":"Chapter 3: Logic Gates","permalink":"/ai-engineering-journey/digital-logic/03-logic-gates"},"next":{"title":"Chapter 5: Combinational Circuits","permalink":"/ai-engineering-journey/digital-logic/05-combinational-circuits"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/digital-logic/04-karnaugh-maps.md


const frontMatter = {
	id: '04-karnaugh-maps',
	slug: '/digital-logic/04-karnaugh-maps',
	title: 'Chapter 4: Karnaugh Maps',
	sidebar_label: 'Chapter 4: Karnaugh Maps',
	sidebar_position: 4
};
const contentTitle = 'Chapter 4: Karnaugh Maps';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 3
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "4.1 K-Map Fundamentals",
  "id": "41-k-map-fundamentals",
  "level": 3
}, {
  "value": "4.1.1 Two-Variable K-Map",
  "id": "411-two-variable-k-map",
  "level": 4
}, {
  "value": "4.1.2 Three-Variable K-Map",
  "id": "412-three-variable-k-map",
  "level": 4
}, {
  "value": "4.1.3 Four-Variable K-Map",
  "id": "413-four-variable-k-map",
  "level": 4
}, {
  "value": "4.1.4 Five-Variable K-Map",
  "id": "414-five-variable-k-map",
  "level": 4
}, {
  "value": "4.2 K-Map Grouping Rules",
  "id": "42-k-map-grouping-rules",
  "level": 3
}, {
  "value": "4.3 Prime Implicants",
  "id": "43-prime-implicants",
  "level": 3
}, {
  "value": "4.4 Prime Implicant Chart",
  "id": "44-prime-implicant-chart",
  "level": 3
}, {
  "value": "4.5 Don&#39;t-Care Conditions",
  "id": "45-dont-care-conditions",
  "level": 3
}, {
  "value": "4.6 Minimisation Procedure: SOP",
  "id": "46-minimisation-procedure-sop",
  "level": 3
}, {
  "value": "4.7 Minimisation Procedure: POS",
  "id": "47-minimisation-procedure-pos",
  "level": 3
}, {
  "value": "4.8 Quine-McCluskey Algorithm",
  "id": "48-quine-mccluskey-algorithm",
  "level": 3
}, {
  "value": "Phase 1 ? Generation of Prime Implicants",
  "id": "phase-1--generation-of-prime-implicants",
  "level": 4
}, {
  "value": "Phase 2 ? Essential Prime Implicant Selection",
  "id": "phase-2--essential-prime-implicant-selection",
  "level": 4
}, {
  "value": "4.9 Comparison: K-Map vs Quine-McCluskey",
  "id": "49-comparison-k-map-vs-quine-mccluskey",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 4.1: 3-Variable K-Map Minimisation",
  "id": "example-41-3-variable-k-map-minimisation",
  "level": 3
}, {
  "value": "Example 4.2: 4-Variable K-Map with Prime Implicant Chart",
  "id": "example-42-4-variable-k-map-with-prime-implicant-chart",
  "level": 3
}, {
  "value": "Example 4.3: Don&#39;t-Care Conditions",
  "id": "example-43-dont-care-conditions",
  "level": 3
}, {
  "value": "Example 4.4: Quine-McCluskey Implementation",
  "id": "example-44-quine-mccluskey-implementation",
  "level": 3
}, {
  "value": "Example 4.5: 5-Variable K-Map",
  "id": "example-45-5-variable-k-map",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 3
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 3
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "TypeScript Examples",
  "id": "typescript-examples",
  "level": 2
}, {
  "value": "Karnaugh Map Solver",
  "id": "karnaugh-map-solver",
  "level": 3
}, {
  "value": "Gray Code Generator",
  "id": "gray-code-generator",
  "level": 3
}, {
  "value": "Minterm/Maxterm Converter",
  "id": "mintermmaxterm-converter",
  "level": 3
}, {
  "value": "Quine-McCluskey Prime Implicant Finder",
  "id": "quine-mccluskey-prime-implicant-finder",
  "level": 3
}, {
  "value": "Mermaid Diagrams",
  "id": "mermaid-diagrams",
  "level": 2
}, {
  "value": "K-Map Cell Adjacency (3-Variable)",
  "id": "k-map-cell-adjacency-3-variable",
  "level": 3
}, {
  "value": "Group Formation Flow",
  "id": "group-formation-flow",
  "level": 3
}, {
  "value": "4-Variable K-Map Structure",
  "id": "4-variable-k-map-structure",
  "level": 3
}, {
  "value": "SOP vs POS Minimisation Paths",
  "id": "sop-vs-pos-minimisation-paths",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 3
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
    blockquote: "blockquote",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    li: "li",
    mermaid: "mermaid",
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
        id: "chapter-4-karnaugh-maps",
        children: "Chapter 4: Karnaugh Maps"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prereq:"
        }), " Chapter 2 (Boolean Algebra) ? K-maps provide a graphical alternative to algebraic minimisation.\r\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " Chapter 5 (Combinational Circuits) ? minimised expressions map directly to efficient circuits."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the conclusion of this chapter, the student shall be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct K-maps for 2, 3, 4, and 5 variables with correct Gray code ordering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply K-map grouping rules to identify prime implicants and essential prime implicants"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimise Boolean functions using K-maps with don't-care conditions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Derive minimal SOP and POS expressions from K-maps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the prime implicant chart to select minimal covers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the Quine-McCluskey algorithm as a TypeScript program for functions with 5+ variables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the tabulation method for systematic function minimisation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Matters"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "K-Map Fundamentals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gray code ordered grid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacent cells differ in one variable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Grouping Rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Powers of 2 groups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimises by eliminating changing variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prime Implicants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Essential vs non-essential"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finding minimal covers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Don't-Care Conditions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X entries in K-map"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exploited for simpler expressions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quine-McCluskey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tabular algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Systematic minimisation for many variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Five+ Variable Maps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-dimensional K-maps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extending visual minimisation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[Truth Table] --> B[K-Map]\r\n    B --> C[Group Adjacent 1s]\r\n    C --> D[Identify Prime Implicants]\r\n    D --> E[Essential Prime Implicants]\r\n    E --> F[Minimal SOP]\r\n    A --> G[Quine-McCluskey]\r\n    G --> H[Prime Implicant Generation]\r\n    H --> I[Prime Implicant Chart]\r\n    I --> F\r\n    style A fill:#e1f5fe\r\n    style F fill:#c8e6c9"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-k-map-fundamentals",
      children: "4.1 K-Map Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Karnaugh map (K-map) is a graphical tool for minimising Boolean functions. It arranges truth table entries in a grid where adjacent cells differ in exactly one variable ? leveraging the adjacency theorem (x?y + x?y' = x)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "K-maps are practical for functions with up to 6 variables. Beyond that, algorithmic methods (Quine-McCluskey) are preferred."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "411-two-variable-k-map",
      children: "4.1.1 Two-Variable K-Map"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A 2-variable K-map has 2? = 4 cells. Variables are arranged with one on each axis."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "y = 0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "y = 1"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Adjacent cells: (0,0)-(0,1), (0,0)-(1,0), (0,1)-(1,1), (1,0)-(1,1). Also the map wraps horizontally."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "412-three-variable-k-map",
      children: "4.1.2 Three-Variable K-Map"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A 3-variable K-map has 2? = 8 cells arranged as a 2?4 grid."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "yz = 00"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "yz = 01"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "yz = 11"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "yz = 10"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_6"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note the Gray code ordering: 00, 01, 11, 10. Columns 01 and 11 are adjacent (differ in middle bit). The map wraps both horizontally and vertically."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "413-four-variable-k-map",
      children: "4.1.3 Four-Variable K-Map"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "zw = 00"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "zw = 01"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "zw = 11"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "zw = 10"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "xy = 00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "xy = 01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "xy = 11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_14"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "xy = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_10"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Adjacency in a 4-variable map includes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Horizontal neighbors (same row)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vertical neighbors (same column)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wraparound: left-right edges and top-bottom edges"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Corner adjacency: all four corners are adjacent (m_0, m_2, m_8, m_10)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "graph TD\r\n    subgraph \"4-Variable K-Map Adjacency\"\r\n        C00[\"m_0\"] --- C01[\"m_1\"]\r\n        C01 --- C03[\"m_3\"]\r\n        C03 --- C02[\"m_2\"]\r\n        C02 === C00\r\n        \r\n        C00 --- C40[\"m_8\"]\r\n        C02 --- C42[\"m_10\"]\r\n        \r\n        C40 --- C41[\"m_9\"]\r\n        C41 --- C43[\"m_11\"]\r\n        C43 --- C42\r\n        C42 === C40\r\n    end"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "414-five-variable-k-map",
      children: "4.1.4 Five-Variable K-Map"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A 5-variable K-map requires two 4-variable planes separated by the fifth variable. The two planes are stacked, and adjacency exists between corresponding cells in adjacent planes."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Plane A (v = 0)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "zw=00"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "zw=01"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "zw=11"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "zw=10"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "xy=00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "xy=01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "xy=11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_14"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "xy=10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_10"
          })]
        })]
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Plane B (v = 1)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "zw=00"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "zw=01"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "zw=11"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "zw=10"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "xy=00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_18"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "xy=01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_22"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "xy=11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_29"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_30"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "xy=10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "m_26"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cells in plane A are adjacent to corresponding cells in plane B (same xy,zw coordinates, v differs)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-k-map-grouping-rules",
      children: "4.2 K-Map Grouping Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Proper grouping is essential for achieving minimal expressions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Group size must be a power of 2"
        }), ": Groups of 1, 2, 4, 8, 16, ... cells."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Groups must be rectangular"
        }), ": L-shaped groups are not allowed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use the largest possible groups"
        }), ": A group of 8 eliminates 3 variables; a group of 4 eliminates 2; a group of 2 eliminates 1."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Groups may overlap"
        }), ": Overlapping groups are fine and often necessary."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wraparound is valid"
        }), ": Groups may wrap around edges of the map."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fewest groups"
        }), ": After selecting largest groups, use the minimum number to cover all 1s."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Each 1 must be covered at least once"
        }), ": Additional coverage is acceptable."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Variables eliminated"
      }), ": A group of 2^k cells eliminates k variables ? the variables that change within the group."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-prime-implicants",
      children: "4.3 Prime Implicants"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "prime implicant"
      }), " is a product term that cannot be further combined (enlarged) into any other implicant that covers a subset of the same minterms."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "essential prime implicant"
      }), " covers a minterm that is not covered by any other prime implicant."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Selection procedure"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify all prime implicants from the K-map"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mark essential prime implicants (must be included)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cover remaining minterms with non-essential prime implicants"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose the minimum-cost set of non-essential prime implicants"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-prime-implicant-chart",
      children: "4.4 Prime Implicant Chart"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The prime implicant chart aids selection of the minimal cover:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rows represent prime implicants"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Columns represent minterms (or don't-cares that are covered)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "An X at intersection (i,j) means prime implicant i covers minterm j"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Essential prime implicants: rows with a column having exactly one X"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After selecting essentials, remove covered columns and rows, then solve the reduced covering problem"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface PrimeImplicant {\r\n    term: string;\r\n    minterms: number[];\r\n    essential: boolean;\r\n}\r\n\r\nfunction findEssentialImplicants(chart: PrimeImplicant[]): PrimeImplicant[] {\r\n    const mintermCount = new Map<number, number>();\r\n    const mintermToImplicant = new Map<number, PrimeImplicant>();\r\n\r\n    // Count how many implicants cover each minterm\r\n    for (const pi of chart) {\r\n        for (const m of pi.minterms) {\r\n            mintermCount.set(m, (mintermCount.get(m) || 0) + 1);\r\n            mintermToImplicant.set(m, pi);\r\n        }\r\n    }\r\n\r\n    // Minterms covered by exactly one implicant ? essential\r\n    const essential = chart.filter(pi =>\r\n        pi.minterms.some(m => (mintermCount.get(m) || 0) === 1)\r\n    );\r\n\r\n    return essential.map(pi => ({ ...pi, essential: true }));\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-dont-care-conditions",
      children: "4.5 Don't-Care Conditions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Don't-care conditions (X) represent input combinations that never occur or whose output value is irrelevant. They provide additional freedom for minimisation."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rules for don't-cares"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A don't-care may be treated as 0 or 1, whichever leads to a simpler expression"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don't-cares need not be covered"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If a don't-care helps form a larger group, use it as 1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don't-cares do not create essential prime implicants"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "graph LR\r\n    subgraph \"Don't-Care Example\"\r\n        D1[\"X treated as 1\"] --> G1[\"Group of 4 (eliminates 2 vars)\"]\r\n        D2[\"X treated as 0\"] --> G2[\"Smaller group\"]\r\n    end"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "46-minimisation-procedure-sop",
      children: "4.6 Minimisation Procedure: SOP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The standard procedure for deriving a minimal SOP from a K-map:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enter 1s in cells corresponding to minterms where F = 1."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enter Xs in cells for don't-care conditions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify all prime implicants by finding the largest possible groups of 1s (using Xs as needed)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Select all essential prime implicants."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cover the remaining 1s with a minimal set of non-essential prime implicants."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write each group as a product term ? variables that are constant within the group are included (uncomplemented if 1, complemented if 0)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The minimal SOP is the OR of all selected prime implicants."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "47-minimisation-procedure-pos",
      children: "4.7 Minimisation Procedure: POS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To derive a minimal POS from a K-map:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enter 0s in cells corresponding to maxterms where F = 0."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Group the 0s using the same rules as for 1s."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write each group as a sum term."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The minimal POS is the AND of all selected sum terms."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alternatively, derive the minimal SOP for F' and complement using De Morgan's theorem."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "48-quine-mccluskey-algorithm",
      children: "4.8 Quine-McCluskey Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Quine-McCluskey algorithm is a tabular method for Boolean minimisation suitable for functions with many variables where K-maps become unwieldy."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-1--generation-of-prime-implicants",
      children: "Phase 1 ? Generation of Prime Implicants"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List all minterms grouped by the number of 1s in the binary representation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare each minterm in group i with each in group i + 1. If they differ in exactly one bit, combine them and mark the differing position with a dash (-)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mark combined minterms as used."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat until no further combinations are possible."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The unchecked terms (including combined terms that never matched) are the prime implicants."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-2--essential-prime-implicant-selection",
      children: "Phase 2 ? Essential Prime Implicant Selection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct a prime implicant chart with prime implicants as rows and minterms as columns."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify essential prime implicants (those covering a minterm that no other implicant covers)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cover the remaining minterms using a minimal set of non-essential prime implicants."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function quineMcCluskey(minterms: number[], numVars: number): string[] {\r\n    // Phase 1: Generate prime implicants\r\n    const groups: Map<number, string[]> = new Map();\r\n\r\n    // Convert minterms to binary and group by number of 1s\r\n    for (const m of minterms) {\r\n        const binary = m.toString(2).padStart(numVars, \"0\");\r\n        const ones = binary.split(\"\").filter(b => b === \"1\").length;\r\n        if (!groups.has(ones)) groups.set(ones, []);\r\n        groups.get(ones)!.push(binary);\r\n    }\r\n\r\n    // Combine terms iteratively\r\n    let primeImplicants = new Set<string>();\r\n    let currentTerms = new Set(groups.values().flatMap(g => g));\r\n\r\n    while (currentTerms.size > 0) {\r\n        const nextTerms = new Set<string>();\r\n        const used = new Set<string>();\r\n        const termArray = Array.from(currentTerms);\r\n\r\n        for (let i = 0; i < termArray.length; i++) {\r\n            for (let j = i + 1; j < termArray.length; j++) {\r\n                const t1 = termArray[i];\r\n                const t2 = termArray[j];\r\n                let diffPos = -1;\r\n                let canCombine = true;\r\n\r\n                for (let k = 0; k < numVars; k++) {\r\n                    if (t1[k] !== t2[k]) {\r\n                        if (diffPos === -1) diffPos = k;\r\n                        else { canCombine = false; break; }\r\n                    }\r\n                }\r\n\r\n                if (canCombine && diffPos !== -1) {\r\n                    const combined = t1.substring(0, diffPos) + \"-\" + t1.substring(diffPos + 1);\r\n                    nextTerms.add(combined);\r\n                    used.add(t1);\r\n                    used.add(t2);\r\n                }\r\n            }\r\n        }\r\n\r\n        // Add unused terms as prime implicants\r\n        for (const t of currentTerms) {\r\n            if (!used.has(t)) primeImplicants.add(t);\r\n        }\r\n\r\n        currentTerms = nextTerms;\r\n    }\r\n\r\n    return Array.from(primeImplicants);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "49-comparison-k-map-vs-quine-mccluskey",
      children: "4.9 Comparison: K-Map vs Quine-McCluskey"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strengths"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Weaknesses"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "K-Map"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "=4 variables (=6 with practice)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visual, intuitive, fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unwieldy for many variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quine-McCluskey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-20 variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithmic, exact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow for many inputs, memory intensive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Espresso"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ">20 variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heuristic, efficient"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May not find absolute minimum"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-41-3-variable-k-map-minimisation",
      children: "Example 4.1: 3-Variable K-Map Minimisation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Minimise F(x, y, z) = S(0, 1, 4, 5)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      }), ": The K-map:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "yz=00"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "yz=01"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "yz=11"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "yz=10"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Group: All four 1s form a group of 4 (x varies, so x is eliminated; y=0 and z varies, so y is eliminated). The constant variable is z=0 (complemented y'). Wait ? let me recheck."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In rows x=0 and x=1, yz=00 and yz=01 have 1s. So y=0 in both columns, z varies (0?1). Group of 4 eliminates x (changes between rows) and z (changes between columns). The constant is y=0, giving term y'."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Minimal expression: F = y'"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-42-4-variable-k-map-with-prime-implicant-chart",
      children: "Example 4.2: 4-Variable K-Map with Prime Implicant Chart"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Minimise F(A, B, C, D) = S(0, 2, 5, 7, 8, 10, 13, 15)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      }), ": The K-map:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "CD=00"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CD=01"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CD=11"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CD=10"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AB=00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AB=01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AB=11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AB=10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prime implicants:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Group of 4 corners: (0, 2, 8, 10) ? B'?D' (B and D vary)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Group of 4 center: (5, 7, 13, 15) ? B?D (B and D vary? No ? A and C vary, B=1 and D=1 are constant) Actually: B=1 (rows 01, 11), D=1 (columns 01, 11). So B?D."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All minterms are covered by these two groups. Both are essential (corners uniquely covered by B'?D', center uniquely by B?D)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Minimal expression: F = B'?D' + B?D"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-43-dont-care-conditions",
      children: "Example 4.3: Don't-Care Conditions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Minimise F(A, B, C, D) = S(0, 2, 4, 6, 8) with don't-cares d(A, B, C, D) = S(10, 12, 14)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      }), ": The K-map:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "CD=00"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CD=01"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CD=11"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CD=10"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AB=00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AB=01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AB=11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AB=10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using don't-cares at 10, 12, 14 as 1s: we can form a group of 8 spanning columns CD=00 and CD=10 (C?D' or C'? Let's check: CD=00 and CD=10 both have C=0... actually column CD=00: C=0,D=0; column CD=10: C=1,D=0). D varies ? no, D=0 in both. C varies. So D' is constant."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The group of 8: all rows (A varies), columns 00 and 10 (C varies, D=0). Term: D'."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Minimal expression: F = D'"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without don't-cares: F would require a much more complex expression."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-44-quine-mccluskey-implementation",
      children: "Example 4.4: Quine-McCluskey Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Minimise F(w, x, y, z) = S(0, 1, 2, 8, 9, 10, 15) using Quine-McCluskey."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Group by number of 1s:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Group 0: 0000 (0)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Group 1: 0001 (1), 0010 (2), 1000 (8)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Group 2: 1001 (9), 1010 (10)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Group 4: 1111 (15)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Combine groups 0-1:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0000 + 0001 = 000- (0,1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0000 + 0010 = 00-0 (0,2)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0000 + 1000 = -000 (0,8)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Combine groups 1-2:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0001 + 1001 = -001 (1,9)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0010 + 1010 = -010 (2,10)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1000 + 1001 = 100- (8,9)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1000 + 1010 = 10-0 (8,10)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "No further combinations possible (group 4 has no adjacent group)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prime implicants: 000-, 00-0, -000, -001, -010, 100-, 10-0, 1111."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Essential: 1111 (only covers 15), 000- (covers minterm 1 uniquely), -000 (covers minterm 8 uniquely)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Remaining minterms: 2, 9, 10. Choose 100- (covers 9) and -010 (covers 2, 10)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Minimal expression: w'x'y' + x'y'z' + wy'z' + wxyz."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-45-5-variable-k-map",
      children: "Example 4.5: 5-Variable K-Map"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Minimise F(v, w, x, y, z) = S(0, 2, 4, 6, 16, 18, 20, 22)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      }), ": v=0 plane has 1s at 0, 2, 4, 6 (wxyz=0000, 0010, 0100, 0110). v=1 plane has 1s at 16, 18, 20, 22 (wxyz=0000, 0010, 0100, 0110)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In each plane, the four 1s form a group of 4: x'z' (w varies, y varies... let me recheck). The cells 0000, 0010, 0100, 0110: w varies (0,0,1,1), x=0 constant, y varies (0,1,0,1), z=0 constant. So x'?z'."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Across planes, v varies but the same x'?z' pattern appears in both planes. Group of 8: x'?z' (v eliminated)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Minimal expression: F = x'?z'"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max Variables"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effort"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Optimality"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Automation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Algebraic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not guaranteed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "K-Map"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (=4 vars)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guaranteed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QMC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guaranteed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Espresso"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ">20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Near-optimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "K-Map Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dimensions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Group of 2^k eliminates"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2 variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2?1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 variable per 2 cells"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3 variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2?4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 var (2), 2 vars (4)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4 variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4?4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 var (2), 2 vars (4), 3 vars (8)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5 variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2?4?4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 4 variables"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Relevance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control logic minimisation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K-maps reduce ALU and decoder gate count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded Systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FSM next-state logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal state transition hardware"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Digital Circuits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IC synthesis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDA tools automate K-map/QMC minimisation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Research"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logic synthesis algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Espresso and other heuristic minimisers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gray code ordering is essential"
        }), " ? K-maps only work because adjacent cells differ in one variable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Largest groups first"
        }), " ? always form the biggest possible groups before considering smaller ones."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Don't-cares are free improvements"
        }), " ? always consider them for larger groups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Essential prime implicants are mandatory"
        }), " ? identify them first before covering remaining minterms."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use QMC for 5+ variables"
        }), " ? K-maps become impractical; automate with the tabulation method."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SOP and POS are duals"
        }), " ? minimising one form is equivalent to minimising the other on the complementary map."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-examples",
      children: "TypeScript Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "karnaugh-map-solver",
      children: "Karnaugh Map Solver"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This class implements K-map minimization for 2, 3, and 4-variable functions:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type MintermList = number[];\r\n\r\nclass KarnaughMap {\r\n  static grayCode(n: number): number[] {\r\n    const result: number[] = [];\r\n    for (let i = 0; i < 1 << n; i++) {\r\n      result.push(i ^ (i >> 1));\r\n    }\r\n    return result;\r\n  }\r\n\r\n  static createMap(vars: number, minterms: MintermList, dontCares: MintermList = []): string[][] {\r\n    if (vars < 2 || vars > 4) throw new Error(\"2-4 variables supported\");\r\n    const rows = vars <= 3 ? 2 : this.grayCode(2);\r\n    const cols = vars === 2 ? 2 : this.grayCode(vars === 3 ? 2 : 2);\r\n    const rCount = vars <= 3 ? 2 : 4;\r\n    const cCount = vars === 2 ? 2 : 4;\r\n    const map: string[][] = Array.from({ length: rCount }, () => Array(cCount).fill(\"0\"));\r\n    const totalCells = 1 << vars;\r\n    for (let cell = 0; cell < totalCells; cell++) {\r\n      const row = vars <= 3 ? (cell >> 1) & 1 : this.getRow(vars, cell);\r\n      const col = vars === 2 ? cell & 1 : this.getCol(vars, cell);\r\n      if (minterms.includes(cell)) map[row][col] = \"1\";\r\n      else if (dontCares.includes(cell)) map[row][col] = \"X\";\r\n    }\r\n    return map;\r\n  }\r\n\r\n  private static getRow(vars: number, cell: number): number {\r\n    if (vars === 4) {\r\n      const a = (cell >> 3) & 1;\r\n      const b = (cell >> 2) & 1;\r\n      return this.grayCode(2).indexOf((a << 1) | b);\r\n    }\r\n    return this.grayCode(2).indexOf(cell >> 1);\r\n  }\r\n\r\n  private static getCol(vars: number, cell: number): number {\r\n    if (vars === 4) {\r\n      const c = (cell >> 1) & 1;\r\n      const d = cell & 1;\r\n      return this.grayCode(2).indexOf((c << 1) | d);\r\n    }\r\n    if (vars === 3) {\r\n      const c = cell & 1;\r\n      const b = (cell >> 1) & 1;\r\n      return this.grayCode(2).indexOf((b << 1) | c);\r\n    }\r\n    return cell & 1;\r\n  }\r\n\r\n  static printMap(vars: number, minterms: MintermList, label: string = \"\"): void {\r\n    const map = this.createMap(vars, minterms);\r\n    const rows = map.length;\r\n    const cols = map[0].length;\r\n    console.log(`\\n=== ${label || `${vars}-Variable K-Map`} ===`);\r\n    const rowLabels = vars <= 3 ? [\"0\", \"1\"] : [\"00\", \"01\", \"11\", \"10\"];\r\n    const colLabels = vars === 2 ? [\"0\", \"1\"] : [\"00\", \"01\", \"11\", \"10\"];\r\n    console.log(`      ${colLabels.map(c => c.padStart(3)).join(\" \")}`);\r\n    for (let i = 0; i < rows; i++) {\r\n      console.log(`  ${rowLabels[i]}  ${map[i].map(c => c.padStart(3)).join(\" \")}`);\r\n    }\r\n  }\r\n\r\n  static findGroups(vars: number, minterms: MintermList): string[] {\r\n    const groups: string[] = [];\r\n    const covered = new Set<number>();\r\n    const total = 1 << vars;\r\n    const sizeOrder = [8, 4, 2, 1];\r\n    for (const size of sizeOrder) {\r\n      if (size > total) continue;\r\n      for (let mask = 0; mask < total; mask++) {\r\n        const group: number[] = [];\r\n        for (let i = 0; i < size; i++) {\r\n          const cell = (mask + i) % total;\r\n          if (minterms.includes(cell)) group.push(cell);\r\n        }\r\n        if (group.length === size) {\r\n          const allUncovered = group.some(c => !covered.has(c));\r\n          if (allUncovered) {\r\n            group.forEach(c => covered.add(c));\r\n            groups.push(`Group(${size}): {${group.join(\",\")}}`);\r\n          }\r\n        }\r\n      }\r\n    }\r\n    return groups;\r\n  }\r\n}\r\n\r\nconst km = KarnaughMap;\r\n// 2-variable: F = S(0,2)\r\nkm.printMap(2, [0, 2], \"F = S(0,2)\");\r\n// 3-variable: F = S(1,3,5,7) ? F = C\r\nkm.printMap(3, [1, 3, 5, 7], \"F = S(1,3,5,7)\");\r\n// 4-variable: F = S(0,1,3,5,7,9,11,13,15)\r\nkm.printMap(4, [0, 1, 3, 5, 7, 9, 11, 13, 15], \"F = S(0,1,3,5,7,9,11,13,15)\");\r\n// With don't-cares\r\nkm.printMap(4, [1, 3, 5, 7, 9], [11, 13, 15], \"F = S(1,3,5,7,9) + d(11,13,15)\");\r\n\r\nconsole.log(\"\\n=== Prime Implicant Groups (F = S(0,2,4,6,7,8,10,12,14,15)) ===\");\r\nconst groups = km.findGroups(4, [0, 2, 4, 6, 7, 8, 10, 12, 14, 15]);\r\ngroups.forEach(g => console.log(`  ${g}`));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gray-code-generator",
      children: "Gray Code Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class GrayCode {\r\n  static generate(n: number): string[] {\r\n    const codes: string[] = [];\r\n    for (let i = 0; i < 1 << n; i++) {\r\n      codes.push((i ^ (i >> 1)).toString(2).padStart(n, \"0\"));\r\n    }\r\n    return codes;\r\n  }\r\n\r\n  static recursiveGenerate(n: number): string[] {\r\n    if (n === 1) return [\"0\", \"1\"];\r\n    const prev = this.recursiveGenerate(n - 1);\r\n    const reflected = [...prev].reverse();\r\n    return [\r\n      ...prev.map(c => \"0\" + c),\r\n      ...reflected.map(c => \"1\" + c)\r\n    ];\r\n  }\r\n\r\n  static verifySingleBit(codes: string[]): boolean {\r\n    for (let i = 0; i < codes.length; i++) {\r\n      const next = codes[(i + 1) % codes.length];\r\n      let diff = 0;\r\n      for (let j = 0; j < codes[i].length; j++) {\r\n        if (codes[i][j] !== next[j]) diff++;\r\n      }\r\n      if (diff !== 1) return false;\r\n    }\r\n    return true;\r\n  }\r\n\r\n  static toDecimal(codes: string[]): number[] {\r\n    return codes.map(c => parseInt(c, 2));\r\n  }\r\n}\r\n\r\nconst gc = GrayCode;\r\nconsole.log(\"\\n=== Gray Code (3-bit) ===\");\r\nconst g3 = gc.generate(3);\r\nconsole.log(`  Binary ? Gray`);\r\ng3.forEach((g, i) => {\r\n  const bin = i.toString(2).padStart(3, \"0\");\r\n  console.log(`  ${bin}  ?  ${g}`);\r\n});\r\nconsole.log(`  Single-bit transitions: ${gc.verifySingleBit(g3) ? \"? VERIFIED\" : \"? FAILED\"}`);\r\n\r\nconsole.log(\"\\n=== Gray Code (4-bit) ===\");\r\nconst g4 = gc.generate(4);\r\ng4.forEach((g, i) => {\r\n  const bin = i.toString(2).padStart(4, \"0\");\r\n  if (i < 8 || i >= 12) console.log(`  ${bin}  ?  ${g}`);\r\n  else if (i === 8) console.log(\"  ... (16 entries total)\");\r\n});\r\nconsole.log(`  Single-bit transitions: ${gc.verifySingleBit(g4) ? \"? VERIFIED\" : \"? FAILED\"}`);\r\n\r\nconsole.log(\"\\n=== Recursive Gray Code (verify identical) ===\");\r\nconst g3r = gc.recursiveGenerate(3);\r\nconsole.log(`  Iterative == Recursive: ${JSON.stringify(g3) === JSON.stringify(g3r) ? \"? IDENTICAL\" : \"? DIFFERENT\"}`);\r\n\r\nconsole.log(\"\\n=== Gray Code Decimal Sequence (4-bit) ===\");\r\nconsole.log(`  ${gc.toDecimal(g4).join(\", \")}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mintermmaxterm-converter",
      children: "Minterm/Maxterm Converter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class MintermMaxtermConverter {\r\n  static sopToPos(vars: number, minterms: MintermList): MintermList {\r\n    const all = new Set(Array.from({ length: 1 << vars }, (_, i) => i));\r\n    minterms.forEach(m => all.delete(m));\r\n    return Array.from(all);\r\n  }\r\n\r\n  static posToSop(vars: number, maxterms: MintermList): MintermList {\r\n    return this.sopToPos(vars, maxterms);\r\n  }\r\n\r\n  static mintermToBinary(vars: number, minterm: number): string {\r\n    return minterm.toString(2).padStart(vars, \"0\");\r\n  }\r\n\r\n  static mintermToExpression(vars: number, minterm: number, usePrime: boolean = true): string {\r\n    const bin = this.mintermToBinary(vars, minterm);\r\n    const varsList = \"ABCDEFGH\".slice(0, vars);\r\n    const terms: string[] = [];\r\n    for (let i = 0; i < vars; i++) {\r\n      if (usePrime) {\r\n        terms.push(bin[i] === \"1\" ? varsList[i] : `${varsList[i]}'`);\r\n      } else {\r\n        terms.push(bin[i] === \"1\" ? varsList[i] : `?${varsList[i]}`);\r\n      }\r\n    }\r\n    return terms.join(\"?\");\r\n  }\r\n\r\n  static maxtermToExpression(vars: number, maxterm: number, usePrime: boolean = true): string {\r\n    const bin = this.mintermToBinary(vars, maxterm);\r\n    const varsList = \"ABCDEFGH\".slice(0, vars);\r\n    const terms: string[] = [];\r\n    for (let i = 0; i < vars; i++) {\r\n      if (usePrime) {\r\n        terms.push(bin[i] === \"0\" ? varsList[i] : `${varsList[i]}'`);\r\n      } else {\r\n        terms.push(bin[i] === \"0\" ? varsList[i] : `?${varsList[i]}`);\r\n      }\r\n    }\r\n    return `(${terms.join(\"+\")})`;\r\n  }\r\n\r\n  static convert(vars: number, minterms: MintermList): void {\r\n    const maxterms = this.sopToPos(vars, minterms);\r\n    const sopTerms = minterms.map(m => this.mintermToExpression(vars, m));\r\n    const posTerms = maxterms.map(m => this.maxtermToExpression(vars, m));\r\n    console.log(`\\n=== Canonical Form Conversion (${vars} vars) ===`);\r\n    console.log(`  Minterms:  S(${minterms.join(\", \")})`);\r\n    console.log(`  Maxterms:  ?(${maxterms.join(\", \")})`);\r\n    console.log(`  SOP:       F = ${sopTerms.join(\" + \")}`);\r\n    console.log(`  POS:       F = ${posTerms.join(\" ? \")}`);\r\n  }\r\n}\r\n\r\nconst conv = MintermMaxtermConverter;\r\nconv.convert(3, [0, 2, 4]);\r\nconv.convert(3, [1, 3, 5, 7]);\r\nconv.convert(4, [0, 2, 5, 7, 10, 13, 15]);\r\n\r\nconsole.log(\"\\n=== Detailed Minterm Binary ===\");\r\nconsole.log(\"  m | Binary | Expression\");\r\nfor (const m of [0, 1, 3, 5, 7, 9, 11, 13, 15]) {\r\n  console.log(`  m${m.toString().padStart(2)} | ${conv.mintermToBinary(4, m)} | ${conv.mintermToExpression(4, m)}`);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quine-mccluskey-prime-implicant-finder",
      children: "Quine-McCluskey Prime Implicant Finder"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class QuineMcCluskey {\r\n  static combine(term1: string, term2: string): string | null {\r\n    let diffPos = -1;\r\n    for (let i = 0; i < term1.length; i++) {\r\n      if (term1[i] !== term2[i]) {\r\n        if (diffPos !== -1) return null;\r\n        diffPos = i;\r\n      }\r\n    }\r\n    if (diffPos === -1) return null;\r\n    return term1.slice(0, diffPos) + \"-\" + term1.slice(diffPos + 1);\r\n  }\r\n\r\n  static countOnes(term: string): number {\r\n    return (term.match(/1/g) || []).length;\r\n  }\r\n\r\n  static findPrimeImplicants(minterms: number[], bits: number): string[] {\r\n    const terms = minterms.map(m => m.toString(2).padStart(bits, \"0\"));\r\n    let current: Set<string> = new Set(terms);\r\n    const primeSet: Set<string> = new Set();\r\n\r\n    while (current.size > 0) {\r\n      const next: Set<string> = new Set();\r\n      const used: Set<string> = new Set();\r\n      const arr = Array.from(current);\r\n\r\n      for (let i = 0; i < arr.length; i++) {\r\n        for (let j = i + 1; j < arr.length; j++) {\r\n          const combined = this.combine(arr[i], arr[j]);\r\n          if (combined) {\r\n            next.add(combined);\r\n            used.add(arr[i]);\r\n            used.add(arr[j]);\r\n          }\r\n        }\r\n      }\r\n\r\n      for (const t of arr) {\r\n        if (!used.has(t)) primeSet.add(t);\r\n      }\r\n      current = next;\r\n    }\r\n\r\n    return Array.from(primeSet).sort((a, b) => {\r\n      const aOnes = this.countOnes(a.replace(/-/g, \"\"));\r\n      const bOnes = this.countOnes(b.replace(/-/g, \"\"));\r\n      return aOnes !== bOnes ? aOnes - bOnes : a.localeCompare(b);\r\n    });\r\n  }\r\n}\r\n\r\nconst qmc = QuineMcCluskey;\r\nconsole.log(\"\\n=== Quine-McCluskey Prime Implicants ===\");\r\nconst testCases = [\r\n  { vars: 3, minterms: [0, 2, 4, 6] },\r\n  { vars: 4, minterms: [0, 2, 5, 7, 10, 13, 15] },\r\n  { vars: 4, minterms: [0, 2, 3, 6, 7, 8, 10, 12, 13] },\r\n];\r\nfor (const tc of testCases) {\r\n  console.log(`\\n  F(w,x,y,z) = S(${tc.minterms.join(\", \")})`);\r\n  const primes = qmc.findPrimeImplicants(tc.minterms, tc.vars);\r\n  console.log(`  Prime implicants:`);\r\n  primes.forEach(p => console.log(`    ${p}  (covers ${p.replace(/-/g, \"X\")})`));\r\n}\r\n\r\n// Prime number detector verification\r\nconsole.log(\"\\n=== 4-bit Prime Number Detector ===\");\r\nconst primes = qmc.findPrimeImplicants([2, 3, 5, 7, 11, 13], 4);\r\nconsole.log(`  Prime numbers: {2, 3, 5, 7, 11, 13}`);\r\nconsole.log(`  Prime implicants from QMC:`);\r\nprimes.forEach(p => console.log(`    ${p}`));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-diagrams",
      children: "Mermaid Diagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "k-map-cell-adjacency-3-variable",
      children: "K-Map Cell Adjacency (3-Variable)"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    subgraph KM[3-Variable K-Map]\r\n        C0[AB=00<br/>C=0 ? 0] -->|adjacent| C1[AB=01<br/>C=0 ? 1]\r\n        C1 -->|adjacent| C3[AB=11<br/>C=0 ? 3]\r\n        C3 -->|adjacent| C2[AB=10<br/>C=0 ? 2]\r\n        C4[AB=00<br/>C=1 ? 4] -->|adjacent| C5[AB=01<br/>C=1 ? 5]\r\n        C5 -->|adjacent| C7[AB=11<br/>C=1 ? 7]\r\n        C7 -->|adjacent| C6[AB=10<br/>C=1 ? 6]\r\n    end\r\n    C0 ---|vertical<br/>adjacent| C4\r\n    C1 ---|vertical| C5\r\n    C3 ---|vertical| C7\r\n    C2 ---|vertical| C6\r\n    note[Cells differ by<br/>exactly 1 variable<br/>due to Gray code]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "group-formation-flow",
      children: "Group Formation Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    Start[Express function<br/>as minterm list] --> Place[Place 1s in K-map<br/>at Gray-code positions]\r\n    Place --> Find[Find largest<br/>power-of-2 groups]\r\n    Find --> Check{All 1s<br/>covered?}\r\n    Check -->|No| Wrap[Wrap around edges<br/>& overlap groups]\r\n    Wrap --> Check\r\n    Check -->|Yes| Essential[Identify essential<br/>prime implicants]\r\n    Essential --> Select[Select minimal cover]\r\n    Select --> Write[Write simplified<br/>Boolean expression]\r\n    Write --> Verify[Verify against original<br/>truth table]\r\n\r\n    subgraph GroupRules[Grouping Rules]\r\n        Size[Group sizes: 1, 2, 4, 8, 16]\r\n        Rect[Rectangular shapes only]\r\n        Wrap2[Wraparound at edges]\r\n        Overlap[Overlap allowed & encouraged]\r\n        Corners[Four corners = valid group]\r\n    end"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-variable-k-map-structure",
      children: "4-Variable K-Map Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "block-beta\r\n  columns 5\r\n  KMap[\"K-Map<br/>F(A,B,C,D)\"]:1\r\n  Space[\" \"]:1\r\n  CD00[\"CD=00\"] CD01[\"CD=01\"] CD11[\"CD=11\"] CD10[\"CD=10\"]\r\n  AB00[\"AB=00\"]:1 M0[\"0\"] M1[\"1\"] M3[\"3\"] M2[\"2\"]\r\n  AB01[\"AB=01\"]:1 M4[\"4\"] M5[\"5\"] M7[\"7\"] M6[\"6\"]\r\n  AB11[\"AB=11\"]:1 M12[\"12\"] M13[\"13\"] M15[\"15\"] M14[\"14\"]\r\n  AB10[\"AB=10\"]:1 M8[\"8\"] M9[\"9\"] M11[\"11\"] M10[\"10\"]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sop-vs-pos-minimisation-paths",
      children: "SOP vs POS Minimisation Paths"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    TT[Truth Table] --> Minterms[List minterms<br/>where F=1]\r\n    TT --> Maxterms[List maxterms<br/>where F=0]\r\n    Minterms --> SOP_K[Enter 1s in K-map]\r\n    Maxterms --> POS_K[Enter 0s in K-map]\r\n    SOP_K --> Group1s[Group adjacent 1s<br/>in powers of 2]\r\n    POS_K --> Group0s[Group adjacent 0s<br/>in powers of 2]\r\n    Group1s --> SOP_Expr[Read SOP expression<br/>variables that don't change]\r\n    Group0s --> POS_Expr[Read POS expression<br/>complement of changing vars]\r\n    SOP_Expr --> Compare[Compare gate counts<br/>pick minimal form]\r\n    POS_Expr --> Compare\r\n    Compare --> Final[Final minimised circuit]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// karnaugh maps\r\n// boolean-circuits-sequential implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\r\nclass Processor {\r\nprivate tasks: Task[] = []\r\nprivate maxConcurrency: number\r\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\r\nasync add(task: Omit<Task, \"status\">): Promise<void> {\r\nthis.tasks.push({ ...task, status: \"pending\" })\r\n}\r\nasync runAll(): Promise<void> {\r\nconst running: Promise<void>[] = []\r\nfor (const t of this.tasks) {\r\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\r\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\r\nrunning.push(p)\r\n}\r\nawait Promise.all(running)\r\n}\r\nprivate async execute(t: Task): Promise<void> {\r\nt.status = \"running\"\r\nawait new Promise(r => setTimeout(r, 10))\r\nt.status = \"done\"\r\n}\r\ngetResults(): Task[] { return this.tasks }\r\ngetStats(): { done: number; pending: number; running: number } {\r\nconst done = this.tasks.filter(t => t.status === \"done\").length\r\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\r\nconst running = this.tasks.filter(t => t.status === \"running\").length\r\nreturn { done, pending, running }\r\n}\r\n}\r\nasync function main() {\r\nconst proc = new Processor(2)\r\nawait proc.add({ id: '1', name: 'karnaugh maps', data: { topic: 'boolean-circuits-sequential' } })\r\nawait proc.runAll()\r\nconsole.log('Stats:', proc.getStats())\r\n}\r\nmain().catch(console.error)\r\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// karnaugh maps - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\r\nclass Cache {\r\nprivate store: Map<string, CacheEntry> = new Map()\r\nconstructor(private defaultTTL: number = 60000) {}\r\nset(key: string, value: unknown, ttl?: number): void {\r\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\r\n}\r\nget(key: string): unknown | undefined {\r\nconst entry = this.store.get(key)\r\nif (!entry) return undefined\r\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\r\nreturn entry.value\r\n}\r\ndelete(key: string): boolean { return this.store.delete(key) }\r\nclear(): void { this.store.clear() }\r\nsize(): number { return this.store.size }\r\nkeys(): string[] { return Array.from(this.store.keys()) }\r\n}\r\nclass Logger {\r\nprivate entries: string[] = []\r\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\r\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\r\nthis.entries.push(entry)\r\nconsole.log(entry)\r\n}\r\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\r\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\r\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\r\ngetLogs(): string[] { return [...this.entries] }\r\nclear(): void { this.entries = [] }\r\n}\r\nfunction computeHash(input: string): string {\r\nlet hash = 0\r\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\r\nreturn Math.abs(hash).toString(16)\r\n}\r\nasync function demo(): Promise<void> {\r\nconst cache = new Cache(5000)\r\ncache.set('key1', 'digital-circuits demo')\r\nconst log = new Logger()\r\nlog.info('Cache demo started', { course: 'digital-logic', chapter: 'karnaugh maps' })\r\nconst v = cache.get(\"key1\")\r\nconsole.log('Cached:', v)\r\nconsole.log('Hash:', computeHash('digital-circuits'))\r\n}\r\ndemo()\r\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Karnaugh maps provide a visual method for minimising Boolean functions of up to 6 variables."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cells in a K-map are arranged in Gray code order so adjacent cells differ in one variable."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Groups must be rectangular with size a power of 2; larger groups eliminate more variables."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prime implicants are maximal groups; essential prime implicants must be included in any minimal cover."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don't-care conditions provide additional freedom for simpler expressions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Quine-McCluskey algorithm systematises minimisation for an arbitrary number of variables using a tabular approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TypeScript implementations of QMC enable automated minimisation for complex functions."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In a 4-variable K-map with Gray code ordering, how many cells are adjacent to any given cell?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) 2"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) 4"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) 6"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) 8"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A group of 4 cells in a 4-variable K-map eliminates how many variables?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) 1"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) 2"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) 3"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) 4"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "An essential prime implicant is one that:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Is the largest group possible"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Covers a minterm not covered by any other prime implicant"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Contains only don't-care cells"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Spans all four corners of the map"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Don't-care conditions in a K-map:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Must always be treated as 1"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Must always be treated as 0"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) May be treated as either 0 or 1 for simplification"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Cannot be used in grouping"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The Quine-McCluskey algorithm is preferred over K-maps when:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The function has fewer than 4 variables"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The function has 5 or more variables"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The function has no don't-cares"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Minimisation is not required"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answers</summary>\n1. B, 2. B, 3. B, 4. C, 5. B\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is Gray code ordering important in K-maps?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between a prime implicant and an essential prime implicant?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How can don't-care conditions improve a K-map minimisation?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When would you choose Quine-McCluskey over a K-map?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain corner adjacency in a 4-variable K-map."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use a 3-variable K-map to minimise:\r\na) F(x,y,z) = S(0, 1, 3, 4, 5)\r\nb) G(x,y,z) = S(2, 3, 5, 7)\r\nc) H(x,y,z) = S(0, 2, 4, 6)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use a 4-variable K-map to minimise:\r\na) F(A,B,C,D) = S(0, 1, 3, 5, 7, 9, 11, 13, 15)\r\nb) G(A,B,C,D) = S(0, 2, 5, 7, 8, 10, 13, 15)\r\nc) H(A,B,C,D) = ?(1, 3, 5, 7, 9, 11, 13, 15)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Minimise with don't-cares:\r\nF(A,B,C,D) = S(1, 3, 5, 7, 9) with d = S(11, 13, 15)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use the prime implicant chart to select the minimal cover for:\r\nF(A,B,C,D) = S(0, 2, 4, 6, 7, 8, 10, 12, 14, 15)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement the Quine-McCluskey algorithm in TypeScript to minimise:\r\nF(w,x,y,z) = S(0, 2, 3, 6, 7, 8, 10, 12, 13)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design a 4-bit prime number detector. The circuit accepts a 4-bit unsigned binary number (0-15) and outputs 1 when the input is prime. Prime numbers in this range are {2, 3, 5, 7, 11, 13}. Use a K-map to derive the minimal SOP and POS implementations. The numbers 0 and 1 are not prime. Compare the gate count of the two implementations. Then, use the Quine-McCluskey algorithm to verify your K-map results by implementing it in TypeScript."
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