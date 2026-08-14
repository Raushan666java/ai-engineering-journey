"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[6561],{

/***/ 35809
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_system_design_12_lld_component_design_md_2b7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-system-design-12-lld-component-design-md-2b7.json
const site_docs_courses_system_design_12_lld_component_design_md_2b7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/system-design/12-lld-component-design","title":"Chapter 12: Low-Level Design: Component and Class Design","description":"Previous 13 Lld Concurrency","source":"@site/docs/courses/system-design/12-lld-component-design.md","sourceDirName":"courses/system-design","slug":"/system-design/12-lld-component-design","permalink":"/ai-engineering-journey/system-design/12-lld-component-design","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"id":"12-lld-component-design","slug":"/system-design/12-lld-component-design","title":"Chapter 12: Low-Level Design: Component and Class Design","sidebar_label":"Chapter 12: Low-Level Design: Component and Class Design","sidebar_position":12},"sidebar":"course-system-design","previous":{"title":"Chapter 11: Low-Level Design: Design Patterns","permalink":"/ai-engineering-journey/system-design/11-lld-design-patterns"},"next":{"title":"Chapter 13: Low-Level Design: Concurrency and Threading","permalink":"/ai-engineering-journey/system-design/13-lld-concurrency"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/system-design/12-lld-component-design.md


const frontMatter = {
	id: '12-lld-component-design',
	slug: '/system-design/12-lld-component-design',
	title: 'Chapter 12: Low-Level Design: Component and Class Design',
	sidebar_label: 'Chapter 12: Low-Level Design: Component and Class Design',
	sidebar_position: 12
};
const contentTitle = 'Chapter 12: Low-Level Design: Component and Class Design';

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
  "value": "UML Class Diagram Syntax",
  "id": "uml-class-diagram-syntax",
  "level": 3
}, {
  "value": "UML Sequence Diagrams",
  "id": "uml-sequence-diagrams",
  "level": 3
}, {
  "value": "UML Activity Diagrams",
  "id": "uml-activity-diagrams",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Designing a Parking Lot System",
  "id": "example-1-designing-a-parking-lot-system",
  "level": 3
}, {
  "value": "Example 2: Designing a Vending Machine",
  "id": "example-2-designing-a-vending-machine",
  "level": 3
}, {
  "value": "Example 3: Designing an Elevator System",
  "id": "example-3-designing-an-elevator-system",
  "level": 3
}, {
  "value": "Example 4: Designing a Chess Game",
  "id": "example-4-designing-a-chess-game",
  "level": 3
}, {
  "value": "Example 5: Designing a Logger Library",
  "id": "example-5-designing-a-logger-library",
  "level": 3
}, {
  "value": "Example 6: Designing a Rate Limiter Library",
  "id": "example-6-designing-a-rate-limiter-library",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
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
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Implementation: Component Design and Modularity",
  "id": "implementation-component-design-and-modularity",
  "level": 3
}, {
  "value": "TypeScript: TicTacToe, LibrarySystem, and VendingMachine",
  "id": "typescript-tictactoe-librarysystem-and-vendingmachine",
  "level": 3
}, {
  "value": "Mermaid: Component Design Workflow",
  "id": "mermaid-component-design-workflow",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Case Study",
  "id": "case-study",
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
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
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
        id: "chapter-12-low-level-design-component-and-class-design",
        children: "Chapter 12: Low-Level Design: Component and Class Design"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/11-lld-design-patterns",
          children: "11 Lld Design Patterns"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/13-lld-concurrency",
          children: "13 Lld Concurrency"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Draw UML class diagrams with correct notation for all relationship types, multiplicity, and visibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interpret sequence diagrams with combined fragments (alt, opt, loop) to model control flow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Model real-world domains into class hierarchies using generalization, aggregation, and composition"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a state machine for objects with complex lifecycle behavior"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design thread-safe concurrent data structures using locks and atomic operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the Strategy and Observer patterns within larger component designs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.section, {
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
        href: "../../assets/images/lessons/system-design/12-lld-component-design/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/12-lld-component-design/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/system-design/12-lld-component-design/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/12-lld-component-design/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/system-design/12-lld-component-design/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/12-lld-component-design/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Component design, class diagrams, API contracts, modularity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cohesion, coupling, interface design, dependency management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Component Modeling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UML class diagrams, sequence diagrams, state machines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "API Contracts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenAPI, gRPC protobuf, versioning strategies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Modularity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Package principles, dependency inversion, hexagonal architecture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-World"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Component design in large-scale software projects"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Theory]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Theory is the foundation ? master it before moving to examples and exercises."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uml-class-diagram-syntax",
      children: "UML Class Diagram Syntax"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Master this concept thoroughly ? it is frequently tested in system design interviews."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Master this concept ? it appears in nearly every system design interview. Understand both the how and the why."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " A common mistake is over-engineering. Always start simple and add complexity only when justified by requirements."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Master this concept thoroughly ? it appears in nearly every system design interview.\n", (0,jsx_runtime.jsx)(_components.img, {
          src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/system-design/12-component-design.png",
          alt: "Component and Class Design Flowchart"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Unified Modeling Language (UML) provides a standardized notation for visualizing the structure of object-oriented systems."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Class Notation"
      }), ": A class is drawn as a rectangle divided into three compartments: the top holds the class name (bold, centered), the middle lists attributes, and the bottom lists methods. Visibility is indicated by prefixes: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), " (public), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-"
      }), " (private), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#"
      }), " (protected), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~"
      }), " (package-private). Static members are underlined; abstract classes and methods are italicized."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+-----------------------------+\n|        ParkingLot           |\n+-----------------------------+\n| - name: String              |\n| - floors: List<Floor>       |\n+-----------------------------+\n| + park(vehicle): Ticket     |\n| + remove(ticket): Receipt   |\n+-----------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Relationships"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Association"
          }), ": A structural link between classes drawn as a solid line. Can be unidirectional (arrow) or bidirectional (no arrow). A ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Driver"
          }), " associated with a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Car"
          }), " means the driver knows about the car."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Aggregation"
          }), ": A \"has-a\" relationship where the part can exist independently from the whole. Drawn as a hollow diamond on the owner side. A ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Department"
          }), " aggregates ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Professor"
          }), " objects; professors exist even if the department dissolves."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Composition"
          }), ": A stronger \"has-a\" where the part's lifetime is tied to the whole. Drawn as a filled diamond. A ", (0,jsx_runtime.jsx)(_components.code, {
            children: "House"
          }), " is composed of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Room"
          }), " objects; rooms are destroyed when the house is demolished."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Inheritance"
          }), " (Generalization): An \"is-a\" relationship drawn as a hollow triangle pointing to the parent. A ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Car"
          }), " extends ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Vehicle"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dependency"
          }), ": A weaker relationship where one class uses another temporarily (e.g., as a method parameter). Drawn as a dashed arrow. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ReportGenerator"
          }), " depends on ", (0,jsx_runtime.jsx)(_components.code, {
            children: "DataFetcher"
          }), " as a method argument."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multiplicity"
      }), " is expressed as annotations on association ends: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1"
      }), " (exactly one), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0..1"
      }), " (optional), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*"
      }), " (zero or more), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1..*"
      }), " (at least one), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "m..n"
      }), " (range)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uml-sequence-diagrams",
      children: "UML Sequence Diagrams"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Avoid over-engineering. Start simple, measure, then optimize."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Avoid premature optimization. Start simple, measure, then optimize. Over-engineering is the most common system design mistake."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sequence diagrams capture the interaction between objects over time. The vertical axis is time; horizontal arrows are messages."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Elements"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lifeline"
        }), ": a dashed vertical line below an object (rectangular box with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "name: Class"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Activation bar"
        }), ": a thin rectangle on the lifeline indicating when the object is active."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Message"
        }), ": a horizontal arrow from one lifeline to another. Solid arrowhead for regular call, dashed arrowhead for return."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-call"
        }), ": a message arrow looping back to the same lifeline, with a nested activation bar."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Combined Fragments"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "alt"
        }), ": alternative paths (if-else), separated by dashed horizontal lines."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "opt"
        }), ": optional path (if without else)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "loop"
        }), ": iteration, with a guard condition in the top-left corner."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "par"
        }), ": parallel execution of messages."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[Client] -> [Controller] : placeOrder(order)\nactivate Controller\n[Controller] -> [InventoryService] : checkAvailability(order)\nactivate InventoryService\n[InventoryService] --> [Controller] : available=true\ndeactivate InventoryService\nalt [available]\n    [Controller] -> [PaymentService] : processPayment(order)\n    activate PaymentService\n    [PaymentService] --> [Controller] : success\n    deactivate PaymentService\n    [Controller] -> [ShippingService] : scheduleShipment(order)\nelse\n    [Controller] --> [Client] : out-of-stock error\nend\ndeactivate Controller\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uml-activity-diagrams",
      children: "UML Activity Diagrams"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Always articulate trade-offs clearly ? interviewers value reasoning over the \"right\" answer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Trade-offs are the heart of system design. Always be ready to explain why you chose X over Y."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Activity diagrams model workflow and business process logic. They resemble flowcharts but with concurrency support."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Elements"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Start node"
        }), ": a filled circle."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "End node"
        }), ": a filled circle inside a hollow circle (bullseye)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action"
        }), ": rounded rectangle."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decision"
        }), ": diamond shape with guard conditions on outgoing edges."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fork node"
        }), ": a single incoming edge splitting into multiple concurrent outgoing edges (thick bar)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Join node"
        }), ": multiple incoming edges synchronizing into one outgoing edge (thick bar)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Activities are especially useful for modeling use cases that involve parallel processing or complex approval workflows."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-designing-a-parking-lot-system",
      children: "Example 1: Designing a Parking Lot System"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements"
      }), ": A parking lot has multiple floors, each with multiple spots. Spots come in three sizes (small, medium, large). Vehicles park in spots that fit their size. A ticket is issued on entry, payment is collected on exit. Hourly rates vary by spot size."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Class Diagram"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from enum import Enum\nfrom abc import ABC, abstractmethod\nfrom datetime import datetime\nimport threading\n\nclass SpotSize(Enum):\n    SMALL = 1\n    MEDIUM = 2\n    LARGE = 3\n\nclass VehicleType(Enum):\n    MOTORCYCLE = SpotSize.SMALL\n    CAR = SpotSize.MEDIUM\n    TRUCK = SpotSize.LARGE\n\nclass Vehicle(ABC):\n    def __init__(self, license_plate: str, vehicle_type: VehicleType):\n        self.license_plate = license_plate\n        self.type = vehicle_type\n\nclass Motorcycle(Vehicle):\n    def __init__(self, license_plate: str):\n        super().__init__(license_plate, VehicleType.MOTORCYCLE)\n\nclass Car(Vehicle):\n    def __init__(self, license_plate: str):\n        super().__init__(license_plate, VehicleType.CAR)\n\nclass Truck(Vehicle):\n    def __init__(self, license_plate: str):\n        super().__init__(license_plate, VehicleType.TRUCK)\n\nclass ParkingSpot:\n    def __init__(self, spot_id: str, size: SpotSize):\n        self.spot_id = spot_id\n        self.size = size\n        self.is_available = True\n        self.vehicle = None\n        self._lock = threading.Lock()\n\n    def park(self, vehicle: Vehicle) -> bool:\n        with self._lock:\n            if self.is_available and vehicle.type.value.value <= self.size.value:\n                self.is_available = False\n                self.vehicle = vehicle\n                return True\n            return False\n\n    def leave(self) -> Vehicle:\n        with self._lock:\n            vehicle = self.vehicle\n            self.vehicle = None\n            self.is_available = True\n            return vehicle\n\nclass ParkingFloor:\n    def __init__(self, floor_num: int):\n        self.floor_num = floor_num\n        self.spots: list[ParkingSpot] = []\n\n    def add_spot(self, spot: ParkingSpot):\n        self.spots.append(spot)\n\n    def find_available_spot(self, vehicle: Vehicle) -> ParkingSpot | None:\n        for spot in self.spots:\n            if spot.is_available and vehicle.type.value.value <= spot.size.value:\n                return spot\n        return None\n\nclass Ticket:\n    _counter = 0\n    _lock = threading.Lock()\n\n    def __init__(self, spot: ParkingSpot, vehicle: Vehicle):\n        with Ticket._lock:\n            Ticket._counter += 1\n            self.ticket_id = Ticket._counter\n        self.spot = spot\n        self.vehicle = vehicle\n        self.entry_time = datetime.now()\n        self.exit_time = None\n        self.amount = 0.0\n\n    def close(self, hourly_rate: float):\n        self.exit_time = datetime.now()\n        duration = (self.exit_time - self.entry_time).total_seconds() / 3600\n        self.amount = max(1, round(duration)) * hourly_rate\n        return self.amount\n\nclass Payment(ABC):\n    @abstractmethod\n    def process(self, amount: float) -> bool: ...\n\nclass CashPayment(Payment):\n    def process(self, amount: float) -> bool:\n        print(f\"Received cash payment of ${amount:.2f}\")\n        return True\n\nclass CardPayment(Payment):\n    def process(self, amount: float) -> bool:\n        print(f\"Processing card payment of ${amount:.2f}\")\n        return True\n\nclass ParkingLot:\n    def __init__(self, name: str, hourly_rate: float = 5.0):\n        self.name = name\n        self.hourly_rate = hourly_rate\n        self.floors: list[ParkingFloor] = []\n        self.active_tickets: dict[int, Ticket] = {}\n\n    def add_floor(self, floor: ParkingFloor):\n        self.floors.append(floor)\n\n    def park_vehicle(self, vehicle: Vehicle) -> Ticket | None:\n        for floor in self.floors:\n            spot = floor.find_available_spot(vehicle)\n            if spot:\n                spot.park(vehicle)\n                ticket = Ticket(spot, vehicle)\n                self.active_tickets[ticket.ticket_id] = ticket\n                print(f\"Vehicle {vehicle.license_plate} parked at spot {spot.spot_id}\")\n                return ticket\n        print(\"No available spots\")\n        return None\n\n    def remove_vehicle(self, ticket_id: int, payment: Payment) -> bool:\n        ticket = self.active_tickets.get(ticket_id)\n        if not ticket:\n            return False\n        amount = ticket.close(self.hourly_rate)\n        ticket.spot.leave()\n        if payment.process(amount):\n            del self.active_tickets[ticket_id]\n            print(f\"Vehicle {ticket.vehicle.license_plate} left. Paid ${amount:.2f}\")\n            return True\n        return False\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Flow"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Client ? ParkingLot.park_vehicle() ? iterates floors ? finds spot ? parks ? issues Ticket"
      }), ". On exit: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Client ? ParkingLot.remove_vehicle(ticket_id, payment) ? calculates duration ? processes payment ? frees spot"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-designing-a-vending-machine",
      children: "Example 2: Designing a Vending Machine"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements"
      }), ": Vending machine manages inventory (products in slots with prices and quantities). Users insert money, select a product, and receive the product and change. The machine has four states: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Idle"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HasMoney"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Selecting"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Dispensing"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "State Machine"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Idle --[insert money]--> HasMoney\nHasMoney --[select product]--> Selecting\nSelecting --[check stock & balance]--> Dispensing\nSelecting --[insufficient funds]--> HasMoney\nDispensing --[dispense]--> Idle\nDispensing --[refund]--> Idle (if cancelled)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from abc import ABC, abstractmethod\n\nclass Product:\n    def __init__(self, name: str, price: float):\n        self.name = name\n        self.price = price\n\nclass Slot:\n    def __init__(self, code: str, product: Product, quantity: int):\n        self.code = code\n        self.product = product\n        self.quantity = quantity\n\n    def has_stock(self) -> bool:\n        return self.quantity > 0\n\n    def dispense(self) -> Product | None:\n        if self.has_stock():\n            self.quantity -= 1\n            return self.product\n        return None\n\nclass Inventory:\n    def __init__(self):\n        self._slots: dict[str, Slot] = {}\n\n    def add_slot(self, slot: Slot):\n        self._slots[slot.code] = slot\n\n    def get_product(self, code: str) -> Product | None:\n        slot = self._slots.get(code)\n        if slot and slot.has_stock():\n            return slot.product\n        return None\n\n    def dispense(self, code: str) -> Product | None:\n        slot = self._slots.get(code)\n        return slot.dispense() if slot else None\n\nclass VendingMachineState(ABC):\n    @abstractmethod\n    def insert_money(self, amount: float): ...\n    @abstractmethod\n    def select_product(self, code: str): ...\n    @abstractmethod\n    def cancel(self): ...\n    @abstractmethod\n    def dispense(self) -> Product | None: ...\n\nclass IdleState(VendingMachineState):\n    def __init__(self, machine):\n        self.machine = machine\n\n    def insert_money(self, amount: float):\n        self.machine.balance = amount\n        self.machine.set_state(self.machine.has_money_state)\n        print(f\"Balance: ${amount:.2f}\")\n\n    def select_product(self, code: str):\n        print(\"Insert money first\")\n\n    def cancel(self):\n        print(\"No transaction to cancel\")\n\n    def dispense(self):\n        print(\"Insert money first\")\n\nclass HasMoneyState(VendingMachineState):\n    def __init__(self, machine):\n        self.machine = machine\n\n    def insert_money(self, amount: float):\n        self.machine.balance += amount\n        print(f\"Balance: ${self.machine.balance:.2f}\")\n\n    def select_product(self, code: str):\n        product = self.machine.inventory.get_product(code)\n        if product and self.machine.balance >= product.price:\n            self.machine.selected_code = code\n            self.machine.set_state(self.machine.dispensing_state)\n            print(f\"Selected {product.name} (${product.price:.2f})\")\n        elif product:\n            print(f\"Insufficient balance. Need ${product.price:.2f}, have ${self.machine.balance:.2f}\")\n        else:\n            print(\"Invalid product code\")\n\n    def cancel(self):\n        print(f\"Refunding ${self.machine.balance:.2f}\")\n        self.machine.balance = 0\n        self.machine.set_state(self.machine.idle_state)\n\n    def dispense(self):\n        print(\"Select product first\")\n\nclass DispensingState(VendingMachineState):\n    def __init__(self, machine):\n        self.machine = machine\n\n    def insert_money(self, amount: float):\n        print(\"Please collect your product first\")\n\n    def select_product(self, code: str):\n        print(\"Please collect your product first\")\n\n    def cancel(self):\n        print(\"Cannot cancel during dispensing\")\n\n    def dispense(self) -> Product | None:\n        product = self.machine.inventory.dispense(self.machine.selected_code)\n        if product:\n            change = self.machine.balance - product.price\n            if change > 0:\n                print(f\"Dispensing {product.name}. Change: ${change:.2f}\")\n            else:\n                print(f\"Dispensing {product.name}\")\n            self.machine.balance = 0\n            self.machine.selected_code = None\n            self.machine.set_state(self.machine.idle_state)\n            return product\n        self.machine.set_state(self.machine.idle_state)\n        return None\n\nclass VendingMachine:\n    def __init__(self):\n        self.idle_state = IdleState(self)\n        self.has_money_state = HasMoneyState(self)\n        self.dispensing_state = DispensingState(self)\n        self.state = self.idle_state\n        self.balance = 0.0\n        self.selected_code = None\n        self.inventory = Inventory()\n\n    def set_state(self, state: VendingMachineState):\n        self.state = state\n\n    def add_product(self, code: str, product: Product, qty: int):\n        self.inventory.add_slot(Slot(code, product, qty))\n\n    def insert_money(self, amount): self.state.insert_money(amount)\n    def select_product(self, code): self.state.select_product(code)\n    def cancel(self): self.state.cancel()\n    def dispense(self): return self.state.dispense()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-designing-an-elevator-system",
      children: "Example 3: Designing an Elevator System"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements"
      }), ": Multiple elevators service floor requests. Each elevator has a direction (up, down, idle) and a set of pending requests. The elevator controller dispatches the best elevator for each request using the SCAN algorithm (elevator continues in its current direction, picking up requests along the way, before reversing)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from enum import Enum\nfrom collections import deque\nimport heapq\nimport threading\n\nclass Direction(Enum):\n    UP = 1\n    DOWN = -1\n    IDLE = 0\n\nclass Request:\n    def __init__(self, floor: int, direction: Direction = None):\n        self.floor = floor\n        self.direction = direction  # None for internal car requests\n\n    def __lt__(self, other):\n        return self.floor < other.floor\n\nclass Elevator:\n    def __init__(self, id: int, num_floors: int):\n        self.id = id\n        self.current_floor = 1\n        self.direction = Direction.IDLE\n        self._door_open = False\n        self._requests_up = []    # Min-heap (ascending)\n        self._requests_down = []  # Max-heap via negative (descending)\n        self._lock = threading.Lock()\n\n    def add_request(self, floor: int):\n        with self._lock:\n            if floor > self.current_floor:\n                heapq.heappush(self._requests_up, floor)\n            elif floor < self.current_floor:\n                heapq.heappush(self._requests_down, -floor)\n\n    def has_requests_in_current_direction(self) -> bool:\n        if self.direction == Direction.UP:\n            return len(self._requests_up) > 0\n        elif self.direction == Direction.DOWN:\n            return len(self._requests_down) > 0\n        return len(self._requests_up) > 0 or len(self._requests_down) > 0\n\n    def get_next_stop(self) -> int | None:\n        with self._lock:\n            if self.direction == Direction.UP and self._requests_up:\n                return heapq.heappop(self._requests_up)\n            elif self.direction == Direction.DOWN and self._requests_down:\n                return -heapq.heappop(self._requests_down)\n            elif self._requests_up:\n                return heapq.heappop(self._requests_up)\n            elif self._requests_down:\n                return -heapq.heappop(self._requests_down)\n            return None\n\n    def move(self):\n        if self.direction == Direction.IDLE:\n            if self._requests_up or self._requests_down:\n                self.direction = Direction.UP  # Default to up\n            return\n\n        next_floor = self.get_next_stop()\n        if next_floor is None:\n            self.direction = Direction.IDLE\n            return\n\n        # Simulate movement\n        if next_floor > self.current_floor:\n            self.direction = Direction.UP\n        elif next_floor < self.current_floor:\n            self.direction = Direction.DOWN\n\n        self.current_floor = next_floor\n        self._door_open = True\n        # After stopping, check remaining requests\n        if not self.has_requests_in_current_direction():\n            self.direction = Direction.IDLE\n\nclass ElevatorController:\n    def __init__(self, num_elevators: int, num_floors: int):\n        self.elevators = [Elevator(i, num_floors) for i in range(num_elevators)]\n        self.num_floors = num_floors\n\n    def request_elevator(self, floor: int, direction: Direction):\n        best = min(self.elevators,\n                   key=lambda e: self._score(e, floor, direction))\n        best.add_request(floor)\n        print(f\"Elevator {best.id} dispatched to floor {floor} going {direction.name}\")\n\n    def request_floor(self, elevator_id: int, floor: int):\n        self.elevators[elevator_id].add_request(floor)\n\n    def _score(self, elevator: Elevator, floor: int, direction: Direction) -> int:\n        if elevator.direction == Direction.IDLE:\n            return abs(elevator.current_floor - floor)\n        if elevator.direction == direction:\n            if (direction == Direction.UP and floor >= elevator.current_floor) or \\\n               (direction == Direction.DOWN and floor <= elevator.current_floor):\n                return floor - elevator.current_floor if direction == Direction.UP else elevator.current_floor - floor\n        # Going opposite direction — must wait for turnaround\n        return abs(elevator.current_floor - floor) + self.num_floors\n\n    def step(self):\n        for e in self.elevators:\n            e.move()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key design decisions"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The SCAN algorithm minimizes starvation by servicing requests in the current direction before reversing."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Two heaps (", (0,jsx_runtime.jsx)(_components.code, {
          children: "_requests_up"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_requests_down"
        }), ") avoid linear scans through all floors."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The scoring function in the controller estimates travel time to select the optimal elevator."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-designing-a-chess-game",
      children: "Example 4: Designing a Chess Game"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements"
      }), ": Standard 8x8 chess board. Two players alternate turns. Each piece type (King, Queen, Rook, Bishop, Knight, Pawn) has specific movement rules. The game detects check, checkmate, and stalemate."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from enum import Enum\nfrom abc import ABC, abstractmethod\n\nclass Color(Enum):\n    WHITE = 0\n    BLACK = 1\n\nclass Position:\n    def __init__(self, row: int, col: int):\n        self.row = row  # 0-7\n        self.col = col  # 0-7\n\n    def __eq__(self, other):\n        return self.row == other.row and self.col == other.col\n\nclass Move:\n    def __init__(self, from_pos: Position, to_pos: Position,\n                 captured: 'Piece' = None):\n        self.from_pos = from_pos\n        self.to_pos = to_pos\n        self.captured = captured\n\nclass Piece(ABC):\n    def __init__(self, color: Color, position: Position):\n        self.color = color\n        self.position = position\n        self.has_moved = False\n\n    @abstractmethod\n    def get_possible_moves(self, board: 'Board') -> list[Position]:\n        ...\n\n    def __str__(self):\n        return f\"{self.color.name[0]}{self.__class__.__name__[0]}\"\n\nclass Pawn(Piece):\n    def get_possible_moves(self, board: 'Board') -> list[Position]:\n        moves = []\n        direction = -1 if self.color == Color.WHITE else 1\n        r, c = self.position.row, self.position.col\n\n        # Forward one\n        fwd = Position(r + direction, c)\n        if board.is_in_bounds(fwd) and board.get_piece(fwd) is None:\n            moves.append(fwd)\n            # Forward two from start\n            if not self.has_moved:\n                fwd2 = Position(r + 2 * direction, c)\n                if board.get_piece(fwd2) is None:\n                    moves.append(fwd2)\n\n        # Captures (diagonal)\n        for dc in [-1, 1]:\n            cap = Position(r + direction, c + dc)\n            if board.is_in_bounds(cap):\n                target = board.get_piece(cap)\n                if target and target.color != self.color:\n                    moves.append(cap)\n        return moves\n\nclass Rook(Piece):\n    def get_possible_moves(self, board: 'Board') -> list[Position]:\n        return self._line_moves(board, [(0, 1), (0, -1), (1, 0), (-1, 0)])\n\n    def _line_moves(self, board: 'Board', directions: list[tuple]) -> list[Position]:\n        moves = []\n        for dr, dc in directions:\n            r, c = self.position.row + dr, self.position.col + dc\n            while 0 <= r < 8 and 0 <= c < 8:\n                target = board.get_piece(Position(r, c))\n                if target is None:\n                    moves.append(Position(r, c))\n                else:\n                    if target.color != self.color:\n                        moves.append(Position(r, c))\n                    break\n                r += dr; c += dc\n        return moves\n\nclass Knight(Piece):\n    def get_possible_moves(self, board: 'Board') -> list[Position]:\n        jumps = [(2, 1), (2, -1), (-2, 1), (-2, -1),\n                 (1, 2), (1, -2), (-1, 2), (-1, -2)]\n        moves = []\n        for dr, dc in jumps:\n            pos = Position(self.position.row + dr, self.position.col + dc)\n            if board.is_in_bounds(pos):\n                target = board.get_piece(pos)\n                if target is None or target.color != self.color:\n                    moves.append(pos)\n        return moves\n\nclass Bishop(Piece):\n    def get_possible_moves(self, board: 'Board') -> list[Position]:\n        return self._line_moves(board, [(1, 1), (1, -1), (-1, 1), (-1, -1)])\n\nclass Queen(Piece):\n    def get_possible_moves(self, board: 'Board') -> list[Position]:\n        # Queen = Rook + Bishop moves\n        return (Rook(self.color, self.position)._line_moves(board,\n                [(0, 1), (0, -1), (1, 0), (-1, 0)]) +\n                Bishop(self.color, self.position)._line_moves(board,\n                [(1, 1), (1, -1), (-1, 1), (-1, -1)]))\n\nclass King(Piece):\n    def get_possible_moves(self, board: 'Board') -> list[Position]:\n        moves = []\n        for dr in [-1, 0, 1]:\n            for dc in [-1, 0, 1]:\n                if dr == 0 and dc == 0:\n                    continue\n                pos = Position(self.position.row + dr, self.position.col + dc)\n                if board.is_in_bounds(pos):\n                    target = board.get_piece(pos)\n                    if target is None or target.color != self.color:\n                        moves.append(pos)\n        return moves\n\nclass Board:\n    def __init__(self):\n        self.grid: list[list[Piece | None]] = [[None] * 8 for _ in range(8)]\n        self._setup()\n\n    def _setup(self):\n        # Place pieces — abbreviated for clarity\n        for col in range(8):\n            self.grid[1][col] = Pawn(Color.BLACK, Position(1, col))\n            self.grid[6][col] = Pawn(Color.WHITE, Position(6, col))\n        placements = [Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook]\n        for col, cls in enumerate(placements):\n            self.grid[0][col] = cls(Color.BLACK, Position(0, col))\n            self.grid[7][col] = cls(Color.WHITE, Position(7, col))\n\n    def get_piece(self, pos: Position) -> Piece | None:\n        return self.grid[pos.row][pos.col]\n\n    def set_piece(self, pos: Position, piece: Piece | None):\n        self.grid[pos.row][pos.col] = piece\n\n    def is_in_bounds(self, pos: Position) -> bool:\n        return 0 <= pos.row < 8 and 0 <= pos.col < 8\n\n    def move_piece(self, move: Move):\n        piece = self.get_piece(move.from_pos)\n        self.set_piece(move.to_pos, piece)\n        self.set_piece(move.from_pos, None)\n        piece.position = move.to_pos\n        piece.has_moved = True\n\n    def undo_move(self, move: Move):\n        piece = self.get_piece(move.to_pos)\n        self.set_piece(move.from_pos, piece)\n        self.set_piece(move.to_pos, move.captured)\n        piece.position = move.from_pos\n        piece.has_moved = False\n\n    def find_king(self, color: Color) -> Position:\n        for row in range(8):\n            for col in range(8):\n                p = self.grid[row][col]\n                if isinstance(p, King) and p.color == color:\n                    return Position(row, col)\n        return None\n\n    def is_square_attacked(self, pos: Position, by_color: Color) -> bool:\n        for row in range(8):\n            for col in range(8):\n                p = self.grid[row][col]\n                if p and p.color == by_color:\n                    if pos in p.get_possible_moves(self):\n                        return True\n        return False\n\n    def is_in_check(self, color: Color) -> bool:\n        king_pos = self.find_king(color)\n        enemy = Color.BLACK if color == Color.WHITE else Color.WHITE\n        return self.is_square_attacked(king_pos, enemy)\n\n    def get_legal_moves(self, color: Color) -> list[Move]:\n        moves = []\n        for row in range(8):\n            for col in range(8):\n                p = self.grid[row][col]\n                if p and p.color == color:\n                    for target in p.get_possible_moves(self):\n                        move = Move(p.position, target, self.get_piece(target))\n                        self.move_piece(move)\n                        if not self.is_in_check(color):\n                            moves.append(move)\n                        self.undo_move(move)\n        return moves\n\nclass Game:\n    def __init__(self):\n        self.board = Board()\n        self.turn = Color.WHITE\n        self.move_history: list[Move] = []\n\n    def make_move(self, from_pos: Position, to_pos: Position) -> bool:\n        piece = self.board.get_piece(from_pos)\n        if not piece or piece.color != self.turn:\n            return False\n\n        legal_moves = self.board.get_legal_moves(self.turn)\n        for move in legal_moves:\n            if move.from_pos == from_pos and move.to_pos == to_pos:\n                self.board.move_piece(move)\n                self.move_history.append(move)\n                self.turn = Color.BLACK if self.turn == Color.WHITE else Color.WHITE\n\n                if len(self.board.get_legal_moves(self.turn)) == 0:\n                    if self.board.is_in_check(self.turn):\n                        print(\"Checkmate!\")\n                    else:\n                        print(\"Stalemate!\")\n                elif self.board.is_in_check(self.turn):\n                    print(\"Check!\")\n                return True\n        return False  # Illegal move\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation"
      }), ": Legal moves are filtered through a \"make-move, check for self-check, undo\" loop. This ensures that no move leaves the player's own king in check. Check and checkmate are derived from the same legal-move generation logic."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-5-designing-a-logger-library",
      children: "Example 5: Designing a Logger Library"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements"
      }), ": A flexible logging library supporting multiple output targets (console, file, network), multiple log levels, configurable formatting, and minimal performance overhead."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from enum import Enum\nfrom abc import ABC, abstractmethod\nfrom datetime import datetime\nimport threading\n\nclass LogLevel(Enum):\n    DEBUG = 0\n    INFO = 1\n    WARN = 2\n    ERROR = 3\n    FATAL = 4\n\nclass LogRecord:\n    def __init__(self, level: LogLevel, logger: str, message: str):\n        self.level = level\n        self.logger = logger\n        self.message = message\n        self.timestamp = datetime.now()\n        self.thread = threading.current_thread().name\n\nclass Formatter(ABC):\n    @abstractmethod\n    def format(self, record: LogRecord) -> str: ...\n\nclass PlainTextFormatter(Formatter):\n    def format(self, record: LogRecord) -> str:\n        return f\"[{record.timestamp}] [{record.level.name}] {record.logger}: {record.message}\"\n\nclass JsonFormatter(Formatter):\n    def format(self, record: LogRecord) -> str:\n        import json\n        return json.dumps({\n            \"timestamp\": record.timestamp.isoformat(),\n            \"level\": record.level.name,\n            \"logger\": record.logger,\n            \"message\": record.message,\n            \"thread\": record.thread\n        })\n\nclass Appender(ABC):\n    @abstractmethod\n    def append(self, record: LogRecord): ...\n\nclass ConsoleAppender(Appender):\n    def append(self, record: LogRecord):\n        print(record.formatted)\n\nclass FileAppender(Appender):\n    def __init__(self, path: str):\n        self.path = path\n        self._lock = threading.Lock()\n\n    def append(self, record: LogRecord):\n        with self._lock:\n            with open(self.path, 'a') as f:\n                f.write(record.formatted + \"\\n\")\n\nclass NetworkAppender(Appender):\n    def __init__(self, host: str, port: int):\n        self.host = host\n        self.port = port\n\n    def append(self, record: LogRecord):\n        # Placeholder for socket send\n        pass\n\nclass Logger:\n    def __init__(self, name: str, level: LogLevel = LogLevel.DEBUG):\n        self._name = name\n        self._level = level\n        self._appenders: list[Appender] = []\n        self._formatter: Formatter = PlainTextFormatter()\n        self._lock = threading.Lock()\n\n    def add_appender(self, appender: Appender):\n        self._appenders.append(appender)\n\n    def set_formatter(self, formatter: Formatter):\n        self._formatter = formatter\n\n    def _log(self, level: LogLevel, message: str):\n        if level.value < self._level.value:\n            return\n        record = LogRecord(level, self._name, message)\n        record.formatted = self._formatter.format(record)\n        with self._lock:\n            for appender in self._appenders:\n                appender.append(record)\n\n    def debug(self, msg): self._log(LogLevel.DEBUG, msg)\n    def info(self, msg): self._log(LogLevel.INFO, msg)\n    def warn(self, msg): self._log(LogLevel.WARN, msg)\n    def error(self, msg): self._log(LogLevel.ERROR, msg)\n    def fatal(self, msg): self._log(LogLevel.FATAL, msg)\n\nclass LoggerFactory:\n    _loggers: dict[str, Logger] = {}\n    _lock = threading.Lock()\n\n    @classmethod\n    def get_logger(cls, name: str, level: LogLevel = LogLevel.DEBUG) -> Logger:\n        if name not in cls._loggers:\n            with cls._lock:\n                if name not in cls._loggers:\n                    cls._loggers[name] = Logger(name, level)\n        return cls._loggers[name]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-6-designing-a-rate-limiter-library",
      children: "Example 6: Designing a Rate Limiter Library"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Trade-offs are the heart of system design. Always be ready to explain why you chose X over Y.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Requirements"
        }), ": A rate limiter that throttles requests per user. Support both Token Bucket and Sliding Window algorithms. Thread-safe and configurable."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\nimport threading\nfrom collections import deque\nfrom abc import ABC, abstractmethod\n\nclass RateLimiter(ABC):\n    @abstractmethod\n    def allow_request(self, key: str) -> bool: ...\n\nclass TokenBucket(RateLimiter):\n    def __init__(self, capacity: int, refill_rate: float):\n        self.capacity = capacity          # Max tokens\n        self.refill_rate = refill_rate    # Tokens per second\n        self._buckets: dict[str, float] = {}\n        self._last_refill: dict[str, float] = {}\n        self._lock = threading.Lock()\n\n    def allow_request(self, key: str) -> bool:\n        with self._lock:\n            now = time.time()\n            if key not in self._buckets:\n                self._buckets[key] = self.capacity\n                self._last_refill[key] = now\n\n            elapsed = now - self._last_refill[key]\n            self._buckets[key] = min(self.capacity,\n                                     self._buckets[key] + elapsed * self.refill_rate)\n            self._last_refill[key] = now\n\n            if self._buckets[key] >= 1:\n                self._buckets[key] -= 1\n                return True\n            return False\n\nclass SlidingWindow(RateLimiter):\n    def __init__(self, window_size: float, max_requests: int):\n        self.window_size = window_size        # in seconds\n        self.max_requests = max_requests\n        self._windows: dict[str, deque] = {}\n        self._lock = threading.Lock()\n\n    def allow_request(self, key: str) -> bool:\n        with self._lock:\n            now = time.time()\n            if key not in self._windows:\n                self._windows[key] = deque()\n\n            window = self._windows[key]\n            # Remove expired timestamps\n            while window and window[0] <= now - self.window_size:\n                window.popleft()\n\n            if len(window) < self.max_requests:\n                window.append(now)\n                return True\n            return False\n\nclass RateLimiterFactory:\n    @staticmethod\n    def create_token_bucket(capacity: int, refill_rate: float) -> RateLimiter:\n        return TokenBucket(capacity, refill_rate)\n\n    @staticmethod\n    def create_sliding_window(window_seconds: float, max_requests: int) -> RateLimiter:\n        return SlidingWindow(window_seconds, max_requests)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core topic in Chapter 12: Low-Level Design: Component and Class Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental concept for system design"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Point"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Essential concept from Chapter 12: Low-Level Design: Component and Class Design"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-Off"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relevant across design scenarios"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requirements-driven decisions"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Options"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Answer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In UML, what does a filled diamond arrow represent?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) Aggregation (part can exist independently), B) Composition (part lifecycle tied to whole), C) Inheritance, D) Dependency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B) Composition — the part's lifetime is tied to the whole (filled diamond on owner side)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is LCOM4 and what does a value of 1 indicate?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) Lines of Code Metric; 1 = too small, B) Lack of Cohesion of Methods; 1 = high cohesion, C) Loop Complexity Metric; 1 = simple, D) Coupling Metric; 1 = loose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B) LCOM4 counts connected components in the method-field graph; LCOM4 = 1 means all methods share fields (high cohesion)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In the Elevator System, what algorithm does the controller use for dispatching?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) FCFS (First-Come-First-Served), B) SCAN (service requests in current direction before reversing), C) SSTF (Shortest Seek Time First), D) Random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B) SCAN algorithm — the elevator continues in its current direction, picking up requests along the way, before reversing direction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["In the Parking Lot design, why is ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ParkingSpot.park()"
            }), " locked but ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ParkingLot.park_vehicle()"
            }), " is not?"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) Both should be locked, B) Spot-level lock prevents concurrent parking in the same spot; scanning floors without a lock is safe because spot lock ensures correctness, C) Neither needs locking, D) The whole lot scan must be locked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B) The fine-grained spot lock prevents double-booking a single spot; scanning for available spots without a global lock is safe because the actual parking operation (locked at spot level) atomically checks and occupies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the purpose of the \"make-move, check-for-self-check, undo\" cycle in the Chess Game implementation?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) To reduce computation, B) To validate all rule interactions including discovered checks, C) To simplify the board representation, D) To enable AI move generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B) It validates all rule interactions — by executing the move, checking if the king is in check, and undoing, the system catches discovered checks, pins, and all other rule interactions without implementing special-case logic"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementation-component-design-and-modularity",
      children: "Implementation: Component Design and Modularity"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Component { name: string; dependencies: string[]; publicApi: string[]; internalModules: string[]; }\nclass ComponentAnalyzer {\n  private components: Component[] = [];\n  addComponent(c: Component): void { this.components.push(c); }\n  detectCycles(): string[][] { const cycles: string[][] = []; const visited = new Set<string>(); const recStack = new Set<string>();\n    const dfs = (node: string, path: string[]) => { if (recStack.has(node)) { const cycleStart = path.indexOf(node); cycles.push(path.slice(cycleStart)); return; } if (visited.has(node)) return; visited.add(node); recStack.add(node); const comp = this.components.find(c => c.name === node); if (comp) for (const dep of comp.dependencies) dfs(dep, [...path, dep]); recStack.delete(node); };\n    for (const c of this.components) dfs(c.name, [c.name]); return cycles; }\n  calculateCoupling(): { afferent: number; efferent: number; instability: number } {\n    let aff = 0; let eff = 0;\n    for (const c of this.components) { eff += c.dependencies.length; aff += this.components.filter(o => o.dependencies.includes(c.name)).length; }\n    return { afferent: aff, efferent: eff, instability: eff / Math.max(1, eff + aff) }; }\n  measureCohesion(): number {\n    const deps = this.components.reduce((s, c) => s + c.dependencies.length, 0);\n    const maxDeps = this.components.length * (this.components.length - 1);\n    return maxDeps > 0 ? deps / maxDeps : 0; }\n}\nclass ModuleSystem { private modules = new Map<string, { exports: Set<string>; imports: Set<string>; code: string }>();\n  register(name: string, exports: string[], imports: string[], code: string): void { this.modules.set(name, { exports: new Set(exports), imports: new Set(imports), code }); }\n  resolve(name: string): Set<string> { const result = new Set<string>(); const visit = (n: string, visited: Set<string>) => { if (visited.has(n)) return; visited.add(n); const mod = this.modules.get(n); if (mod) { for (const dep of mod.imports) visit(dep, visited); result.add(n); } }; visit(name, new Set()); return result; }\n}\nclass DependencyGraph { private edges = new Map<string, Set<string>>();\n  addDependency(from: string, to: string): void { if (!this.edges.has(from)) this.edges.set(from, new Set()); this.edges.get(from)!.add(to); }\n  topologicalSort(): string[] { const visited = new Set<string>(); const result: string[] = []; const visit = (n: string) => { if (visited.has(n)) return; visited.add(n); for (const dep of this.edges.get(n) || []) visit(dep); result.unshift(n); }; for (const n of this.edges.keys()) visit(n); return result; }\n  layerCount(): number { return this.topologicalSort().length; } }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// lld component design\n// distributed-systems-scalability implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'lld component design', data: { topic: 'distributed-systems-scalability' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// lld component design - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'system-design demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'system-design', chapter: 'lld component design' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('system-design'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-tictactoe-librarysystem-and-vendingmachine",
      children: "TypeScript: TicTacToe, LibrarySystem, and VendingMachine"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class TicTacToe {\n  private board: string[][];\n  private currentPlayer: string;\n  private gameOver = false;\n  private winner: string | null = null;\n  private moveHistory: { row: number; col: number; player: string }[] = [];\n\n  constructor() {\n    this.board = Array.from({ length: 3 }, () => Array(3).fill(\"\"));\n    this.currentPlayer = \"X\";\n  }\n\n  makeMove(row: number, col: number): boolean {\n    if (this.gameOver || row < 0 || row > 2 || col < 0 || col > 2 || this.board[row][col] !== \"\") {\n      return false;\n    }\n    this.board[row][col] = this.currentPlayer;\n    this.moveHistory.push({ row, col, player: this.currentPlayer });\n\n    if (this.checkWin(row, col)) {\n      this.gameOver = true;\n      this.winner = this.currentPlayer;\n      return true;\n    }\n    if (this.moveHistory.length === 9) {\n      this.gameOver = true;\n      this.winner = null;\n      return true;\n    }\n    this.currentPlayer = this.currentPlayer === \"X\" ? \"O\" : \"X\";\n    return true;\n  }\n\n  private checkWin(row: number, col: number): boolean {\n    const p = this.board[row][col];\n    const rowWin = this.board[row].every(c => c === p);\n    const colWin = this.board.every(r => r[col] === p);\n    const diag1Win = row === col && this.board.every((_, i) => this.board[i][i] === p);\n    const diag2Win = row + col === 2 && this.board.every((_, i) => this.board[i][2 - i] === p);\n    return rowWin || colWin || diag1Win || diag2Win;\n  }\n\n  minimax(board: string[][], depth: number, isMaximizing: boolean): number {\n    const result = this.evaluateBoard(board);\n    if (result !== 0) return result;\n    if (this.isBoardFull(board)) return 0;\n\n    if (isMaximizing) {\n      let best = -Infinity;\n      for (let i = 0; i < 3; i++) {\n        for (let j = 0; j < 3; j++) {\n          if (board[i][j] === \"\") {\n            board[i][j] = \"O\";\n            best = Math.max(best, this.minimax(board, depth + 1, false));\n            board[i][j] = \"\";\n          }\n        }\n      }\n      return best;\n    } else {\n      let best = Infinity;\n      for (let i = 0; i < 3; i++) {\n        for (let j = 0; j < 3; j++) {\n          if (board[i][j] === \"\") {\n            board[i][j] = \"X\";\n            best = Math.min(best, this.minimax(board, depth + 1, true));\n            board[i][j] = \"\";\n          }\n        }\n      }\n      return best;\n    }\n  }\n\n  getBestMove(): { row: number; col: number } | null {\n    let bestScore = -Infinity;\n    let bestMove: { row: number; col: number } | null = null;\n    const boardCopy = this.board.map(r => [...r]);\n\n    for (let i = 0; i < 3; i++) {\n      for (let j = 0; j < 3; j++) {\n        if (boardCopy[i][j] === \"\") {\n          boardCopy[i][j] = \"O\";\n          const score = this.minimax(boardCopy, 0, false);\n          boardCopy[i][j] = \"\";\n          if (score > bestScore) {\n            bestScore = score;\n            bestMove = { row: i, col: j };\n          }\n        }\n      }\n    }\n    return bestMove;\n  }\n\n  private evaluateBoard(board: string[][]): number {\n    for (let i = 0; i < 3; i++) {\n      if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {\n        return board[i][0] === \"O\" ? 10 : -10;\n      }\n      if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {\n        return board[0][i] === \"O\" ? 10 : -10;\n      }\n    }\n    if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {\n      return board[0][0] === \"O\" ? 10 : -10;\n    }\n    if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {\n      return board[0][2] === \"O\" ? 10 : -10;\n    }\n    return 0;\n  }\n\n  private isBoardFull(board: string[][]): boolean {\n    return board.every(row => row.every(c => c !== \"\"));\n  }\n\n  getBoard(): string[][] { return this.board.map(r => [...r]); }\n  getCurrentPlayer(): string { return this.currentPlayer; }\n  isGameOver(): boolean { return this.gameOver; }\n  getWinner(): string | null { return this.winner; }\n  getMoveCount(): number { return this.moveHistory.length; }\n}\n\nclass LibrarySystem {\n  private books = new Map<string, Book>();\n  private members = new Map<string, Member>();\n  private borrowRecords = new Map<string, BorrowRecord>();\n  private reservations = new Map<string, Reservation[]>();\n  private fineRate = 1.0;\n\n  addBook(book: Book): void { this.books.set(book.isbn, book); }\n  registerMember(member: Member): void { this.members.set(member.id, member); }\n\n  borrowBook(memberId: string, isbn: string): BorrowRecord | null {\n    const book = this.books.get(isbn);\n    const member = this.members.get(memberId);\n    if (!book || !member || !book.isAvailable) return null;\n    if (member.outstandingFine > 50) return null;\n    book.isAvailable = false;\n    const record = new BorrowRecord(memberId, isbn);\n    this.borrowRecords.set(record.id, record);\n    member.activeBorrowings++;\n    return record;\n  }\n\n  returnBook(borrowId: string): number {\n    const record = this.borrowRecords.get(borrowId);\n    if (!record || record.returned) return 0;\n    record.returned = true;\n    record.returnDate = new Date();\n    const book = this.books.get(record.isbn);\n    if (book) book.isAvailable = true;\n    const member = this.members.get(record.memberId);\n    if (member) member.activeBorrowings--;\n    const overdueDays = Math.max(0, Math.floor((record.returnDate.getTime() - record.dueDate.getTime()) / 86400000));\n    const fine = overdueDays * this.fineRate;\n    if (fine > 0 && member) member.outstandingFine += fine;\n    return fine;\n  }\n\n  reserveBook(memberId: string, isbn: string): boolean {\n    const book = this.books.get(isbn);\n    const member = this.members.get(memberId);\n    if (!book || !member) return false;\n    if (!this.reservations.has(isbn)) this.reservations.set(isbn, []);\n    const reservations = this.reservations.get(isbn)!;\n    if (reservations.some(r => r.memberId === memberId)) return false;\n    reservations.push(new Reservation(memberId, isbn));\n    return true;\n  }\n\n  processReservations(isbn: string): string | null {\n    const reservations = this.reservations.get(isbn);\n    if (!reservations || reservations.length === 0) return null;\n    const next = reservations.shift()!;\n    return next.memberId;\n  }\n\n  getBook(isbn: string): Book | undefined { return this.books.get(isbn); }\n  getMember(id: string): Member | undefined { return this.members.get(id); }\n}\n\nclass Book {\n  isAvailable = true;\n  constructor(public isbn: string, public title: string, public author: string, public totalCopies: number) {}\n}\n\nclass Member {\n  activeBorrowings = 0;\n  outstandingFine = 0;\n  constructor(public id: string, public name: string) {}\n}\n\nclass BorrowRecord {\n  readonly id: string;\n  readonly borrowDate: Date;\n  readonly dueDate: Date;\n  returned = false;\n  returnDate: Date | null = null;\n  constructor(public memberId: string, public isbn: string) {\n    this.id = `BR-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;\n    this.borrowDate = new Date();\n    this.dueDate = new Date(this.borrowDate.getTime() + 14 * 86400000);\n  }\n}\n\nclass Reservation {\n  constructor(public memberId: string, public isbn: string) {}\n}\n\nclass VendingMachine {\n  private inventory = new Map<string, { product: VendingProduct; quantity: number }>();\n  private balance = 0;\n  private insertedCoins: number[] = [];\n  private acceptedDenominations = [1, 5, 10, 25, 100, 500, 1000];\n  private transactionLog: Transaction[] = [];\n  private state: \"idle\" | \"hasMoney\" | \"dispensing\" = \"idle\";\n  private selectedCode: string | null = null;\n\n  addProduct(code: string, product: VendingProduct, quantity: number): void {\n    this.inventory.set(code, { product, quantity });\n  }\n\n  insertCoin(amount: number): boolean {\n    if (!this.acceptedDenominations.includes(amount)) return false;\n    this.balance += amount;\n    this.insertedCoins.push(amount);\n    this.state = \"hasMoney\";\n    return true;\n  }\n\n  insertBill(amount: number): boolean {\n    return this.insertCoin(amount);\n  }\n\n  selectProduct(code: string): { success: boolean; message: string } {\n    const slot = this.inventory.get(code);\n    if (!slot) return { success: false, message: \"Invalid code\" };\n    if (slot.quantity <= 0) return { success: false, message: \"Out of stock\" };\n    if (this.balance < slot.product.price) {\n      return { success: false, message: `Insufficient funds. Need ${slot.product.price}, have ${this.balance}` };\n    }\n    this.selectedCode = code;\n    this.state = \"dispensing\";\n    return { success: true, message: `Selected ${slot.product.name}` };\n  }\n\n  dispense(): { product: VendingProduct | null; change: number[] } {\n    if (this.state !== \"dispensing\" || !this.selectedCode) {\n      return { product: null, change: this.calculateChange(this.balance) };\n    }\n    const slot = this.inventory.get(this.selectedCode)!;\n    slot.quantity--;\n    const changeAmount = this.balance - slot.product.price;\n    const change = this.calculateChange(changeAmount);\n    const transaction = new Transaction(slot.product, this.balance, changeAmount);\n    this.transactionLog.push(transaction);\n    this.balance = 0;\n    this.insertedCoins = [];\n    this.selectedCode = null;\n    this.state = \"idle\";\n    return { product: slot.product, change };\n  }\n\n  private calculateChange(amount: number): number[] {\n    const coins: number[] = [];\n    let remaining = amount;\n    const denominations = [1000, 500, 100, 25, 10, 5, 1];\n    for (const denom of denominations) {\n      while (remaining >= denom) {\n        coins.push(denom);\n        remaining -= denom;\n      }\n    }\n    return coins;\n  }\n\n  cancel(): number[] {\n    const change = this.calculateChange(this.balance);\n    this.balance = 0;\n    this.insertedCoins = [];\n    this.selectedCode = null;\n    this.state = \"idle\";\n    return change;\n  }\n\n  getBalance(): number { return this.balance; }\n  getState(): string { return this.state; }\n  getInventory(): Map<string, { product: VendingProduct; quantity: number }> { return new Map(this.inventory); }\n  getTransactionLog(): Transaction[] { return [...this.transactionLog]; }\n}\n\nclass VendingProduct {\n  constructor(public code: string, public name: string, public price: number) {}\n}\n\nclass Transaction {\n  readonly timestamp: Date;\n  constructor(public product: VendingProduct, public amountPaid: number, public change: number) {\n    this.timestamp = new Date();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mermaid-component-design-workflow",
      children: "Mermaid: Component Design Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    classDef start fill#c8e6c9,stroke#2e7d32,stroke-width:2px\n    classDef design fill#e3f2fd,stroke#1565c0,stroke-width:2px\n    classDef uml fill#fff9c4,stroke#f57f17,stroke-width:2px\n    classDef impl fill#fce4ec,stroke#c62828,stroke-width:2px\n    classDef test fill#f3e5f5,stroke#7b1fa2,stroke-width:2px\n    classDef review fill#e8f5e9,stroke#388e3c,stroke-width:2px\n\n    subgraph \"Requirements Analysis\"\n        REQ[\"Gather Requirements<br/>Functional + Non-Functional\"]:::start\n        USECASE[\"Identify Use Cases<br/>Actors & Scenarios\"]:::start\n        DOMAIN[\"Domain Modeling<br/>Entities, Value Objects, Aggregates\"]:::start\n    end\n\n    subgraph \"Component Design\"\n        DECOMP[\"Decomposition<br/>Split into Components\"]:::design\n        INTF[\"Interface Design<br/>APIs, Contracts, Protocols\"]:::design\n        DEP[\"Dependency Analysis<br/>Fan-in / Fan-out / Cycles\"]:::design\n        STATE[\"State Machine Design<br/>States & Transitions\"]:::design\n    end\n\n    subgraph \"UML Modeling\"\n        CD[\"Class Diagram<br/>Relationships, Multiplicity\"]:::uml\n        SD[\"Sequence Diagram<br/>Message Flow, Combined Fragments\"]:::uml\n        ACT[\"Activity Diagram<br/>Parallel Flows, Decisions\"]:::uml\n    end\n\n    subgraph \"Implementation\"\n        SOLID[\"Apply SOLID Principles\"]:::impl\n        PATTERN[\"Choose Design Patterns\"]:::impl\n        CODECLASS[\"Code Classes & Components\"]:::impl\n    end\n\n    subgraph \"Verification\"\n        UT[\"Unit Tests<br/>LCOM, Coverage\"]:::test\n        CT[\"Contract Tests<br/>API Compatibility\"]:::test\n        INT[\"Integration Tests<br/>Component Interaction\"]:::test\n    end\n\n    subgraph \"Review & Refine\"\n        CR[\"Code Review<br/>Pattern Compliance, Coupling Check\"]:::review\n        REF[\"Refactor<br/>Extract, Rename, Reorganize\"]:::review\n        DOC[\"Document Design Decisions\"]:::review\n    end\n\n    REQ --> USECASE --> DOMAIN\n    DOMAIN --> DECOMP --> INTF --> DEP --> STATE\n    DEP --> CD --> SD --> ACT\n    STATE --> CD\n    CD --> SOLID --> PATTERN --> CODECLASS\n    CODECLASS --> UT --> CT --> INT\n    INT --> CR --> REF --> DOC\n    REF -.->|iterate| DECOMP\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Takeaway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UML class diagrams model structural relationships with precise notation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use class diagrams for documenting architecture; use aggregation (hollow diamond) for independent parts and composition (filled diamond) for lifecycle-bound parts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sequence diagrams capture dynamic interaction flow over time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use combined fragments (alt, opt, loop, par) to model branching, optional paths, loops, and parallel execution in system design documents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "The Parking Lot design demonstrates entity modeling with thread safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lock the spot-level operation (park/leave) rather than the entire lot scan to maximize concurrency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "The Vending Machine State pattern eliminates complex conditionals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each state is a separate class with explicit transitions — the machine object delegates behavior to the current state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "The Elevator SCAN algorithm with dual heaps minimizes starvation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use two priority queues (min-heap for up, max-heap for down) for O(log n) request insertion instead of linear floor scans"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "The Chess Game validates moves through a make-check-undo cycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Execute the move on a copy of the board, check for self-check, then undo — this trivially validates all rule interactions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "The Logger library separates formatting, output, and level filtering as swappable components"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design for composability: Formatter (Strategy), Appender (Observer), Level Filter (Chain of Responsibility), all wired together at configuration time"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study",
      children: "Case Study"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Designing a Library Management System"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A public library system serving 50,000 members needed a digital catalog and borrowing system to replace their paper-based process. The system required: book cataloging with ISBN lookup, member registration, borrowing with 14-day loans, fine calculation ($1/day overdue), reservations with FIFO queue, and multi-branch support. The senior engineer led a component design process following the UML workflow described in this chapter."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The design phase began with entity identification: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Book"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Member"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BorrowRecord"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Reservation"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Branch"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Librarian"
      }), ". The class diagram showed composition between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Branch"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BookCopy"
      }), " (copies belong to a branch), aggregation between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Member"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BorrowRecord"
      }), " (records exist independently for audit purposes). The sequence diagram for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "borrowBook"
      }), " showed the flow: Member -> LibrarySystem -> validate member -> check book availability -> check fines -> create BorrowRecord -> update book availability. An ", (0,jsx_runtime.jsx)(_components.code, {
        children: "alt"
      }), " fragment modeled the \"fines exceeded\" rejection path. The state machine defined book statuses: AVAILABLE, BORROWED, RESERVED, LOST, DAMAGED."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The implementation applied SRP strictly: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BorrowingService"
      }), " handled loans, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FineCalculator"
      }), " computed overdue charges, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReservationQueue"
      }), " managed FIFO waiting lists, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CatalogSearch"
      }), " handled queries. The Observer pattern was used for notifications — when a reserved book was returned, the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NotificationService"
      }), " (observer) was notified and contacted the next member in the reservation queue. The Strategy pattern allowed different fine policies (standard $1/day, student $0.50/day, senior citizen free). The system handled 10,000 daily transactions with 99.9% uptime. A post-deployment review showed the design's extensibility: adding a new \"digital lending\" feature required only two new classes (", (0,jsx_runtime.jsx)(_components.code, {
        children: "DigitalBook"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DigitalRightsManager"
      }), ") without modifying any existing code."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UML class diagrams use rectangles for classes, with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/"
        }), " italicization for abstract entities, specific arrow types for inheritance (hollow triangle), composition (filled diamond), aggregation (hollow diamond), and dependency (dashed arrow)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sequence diagrams model message flow across time with activation bars and combined fragments (alt, opt, loop, par) for control logic."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Parking Lot design demonstrates entity modeling (Vehicle hierarchy, ParkingSpot, Ticket, Payment) with thread-safe parking allocation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Vending Machine illustrates the State pattern with four states and clean state transitions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Elevator System uses the SCAN algorithm with dual heaps for efficient request scheduling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Chess Game shows complete move validation through a make-move/check/undo cycle, with abstract movement logic per piece type."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Logger library separates concerns (formatting, output, level filtering) into independently swappable components."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Rate Limiter library abstracts two algorithms behind a common interface with thread-safe concurrent access."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution for Review Question 1"
      }), "\n**Aggregation** (hollow diamond): the part can exist independently of the whole. Example: `Department` aggregates `Professor` — if the department dissolves, professors still exist. **Composition** (filled diamond): the part's lifetime is tied to the whole. Example: `House` composes `Room` — if the house is demolished, the rooms cease to exist. Confusing them would cause bugs: if `Order` uses composition with `OrderItem` (items deleted with order), but the design incorrectly uses aggregation, deleting an order would leak items in memory/database. Conversely, if a `Team` incorrectly uses composition for `Player`, releasing a team would delete player records.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution for Review Question 2"
      }), "\n`ParkingSpot.park()` must be locked to prevent two threads from simultaneously parking different vehicles in the same spot (race condition). The lock ensures that the check-and-occupy operation (`isAvailable` check + `vehicle` assignment) is atomic. `ParkingLot.park_vehicle()` iterates floors without a global lock because: (a) if a spot becomes available between the check and the `park()` call, the `park()` lock handles the conflict; (b) holding a global lock during the entire floor scan would block all other parking/exit operations, severely limiting concurrency. What could go wrong without spot-level locking: two vehicles could both find the same spot available and both execute `park()` — both would receive tickets for the same spot.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution for Review Question 3"
      }), "\nThe make-check-undo approach generates O(moves × checks) — for each candidate move, we execute it, generate all opponent moves, check for check, and undo. For a typical position with 40 candidate moves each generating 40 opponent moves, this is 1,600 board copies per move iteration. Performance implications: (a) board copy overhead for each candidate move, (b) generating opponent moves twice (once for check detection, once later), (c) undo is O(1) if using move state snapshots. Optimizations: use a bitboard representation (no copies — just XOR bit masks), generate only opponent captures + king checks (fast check detection), use a \"check mask\" that pre-computes which pieces can give check, and cache legal moves across iterations.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution for Review Question 4"
      }), "\nSCAN processes requests in the current direction before reversing — it reduces starvation because a request that arrived at floor 3 going up will be serviced on the current upward pass rather than waiting for the elevator to reach the bottom and come back up. FCFS services requests in arrival order regardless of direction — this causes excessive back-and-forth movement (thrashing). SCAN performs worse than FCFS when: (a) requests are clustered in one direction but the elevator is moving in the opposite direction (SCAN forces the elevator to continue to the end before reversing), (b) real-time systems where worst-case wait time must be bounded (FCFS has more predictable timing), (c) very low request density (SCAN wastes time traversing empty floors).\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution for Application Problem 1: Parking Lot UML Class Diagram"
      }), "\n```\nParkingLot \"1\" *-- \"*\" ParkingFloor  (composition)\nParkingFloor \"1\" *-- \"20\" ParkingSpot  (composition)\nParkingLot \"1\" --> \"0..*\" Ticket  (association)\nVehicle <|-- Car  (inheritance)\nVehicle <|-- Motorcycle  (inheritance)\nVehicle <|-- Truck  (inheritance)\nParkingSpot \"1\" --> \"0..1\" Vehicle  (association)\nTicket \"1\" --> \"1\" ParkingSpot  (association)\nTicket \"1\" --> \"1\" Vehicle  (association)\nPayment <|-- CashPayment  (inheritance)\nPayment <|-- CardPayment  (inheritance)\nMultiplicities: ParkingFloor has 20-100 spots; ParkingLot has 3-10 floors; each spot holds 0-1 vehicle.\n```\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution for Application Problem 2: Observer-Based Occupancy Display"
      }), "\n```python\nfrom abc import ABC, abstractmethod\nclass SpotObserver(ABC):\n    @abstractmethod\n    def on_spot_changed(self, spot_id: str, is_occupied: bool): ...\nclass ObservableParkingSpot:\n    def __init__(self, spot_id: str, size):\n        self.spot_id = spot_id; self.size = size; self._observers = []; self._occupied = False\n    def register(self, obs): self._observers.append(obs)\n    def occupy(self):\n        if not self._occupied:\n            self._occupied = True\n            for o in self._observers: o.on_spot_changed(self.spot_id, True)\n    def vacate(self):\n        if self._occupied:\n            self._occupied = False\n            for o in self._observers: o.on_spot_changed(self.spot_id, False)\nclass DisplayBoard(SpotObserver):\n    def __init__(self): self._spots = {}\n    def on_spot_changed(self, spot_id, occupied):\n        self._spots[spot_id] = occupied\n        occupied_count = sum(1 for v in self._spots.values() if v)\n        print(f\"Display: Spot {spot_id} {'occupied' if occupied else 'free'}. Total occupied: {occupied_count}\")\n```\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution for Application Problem 3: Vending Machine Restocking State"
      }), "\nAdd a `RestockingState` accessed via an access code:\n```python\nclass RestockingState(VendingMachineState):\n    def __init__(self, machine, access_code):\n        self.machine = machine; self._code = access_code\n    def enter(self, code):\n        if code == self._code:\n            self.machine.set_state(self)\n            return True\n        return False\n    def add_inventory(self, code, product, qty):\n        self.machine.add_product(code, product, qty)\n    def exit(self):\n        self.machine.set_state(self.machine.idle_state)\n    # Other methods (insert_money, etc.) display \"Restocking in progress\"\n```\nAdd to VendingMachine: `restocking_state = RestockingState(self, \"1234\")`, `def restock(self, code): self.restocking_state.enter(code)`.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution: Movie Ticket Booking System"
      }), "\n```python\nimport threading, time, uuid\nfrom enum import Enum\nfrom datetime import datetime, timedelta\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "class BookingStatus(Enum): PENDING = 0; CONFIRMED = 1; CANCELLED = 2"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["class Seat:\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "init"
        }), "(self, id, type_name, price_multiplier=1.0):\nself.id = id; self.type = type_name; self.price_mult = price_multiplier\nself.is_locked = False; self.lock = threading.Lock()"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["class Showtime:\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "init"
        }), "(self, movie, time, base_price):\nself.movie = movie; self.time = time; self.base_price = base_price\nself.seats = {}; self._lock = threading.Lock()"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["class Booking:\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "init"
        }), "(self, user_id, showtime, seats):\nself.id = str(uuid.uuid4()); self.user_id = user_id; self.showtime = showtime\nself.seats = seats; self.status = BookingStatus.PENDING\nself.created_at = datetime.now(); self.expires_at = self.created_at + timedelta(minutes=15)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["class BookingSystem:\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "init"
        }), "(self): self.bookings = {}; self._lock = threading.Lock()"]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "def lock_seats(self, showtime, seat_ids, user_id):\n    with showtime._lock:\n        for sid in seat_ids:\n            seat = showtime.seats[sid]\n            with seat.lock:\n                if seat.is_locked: return False\n        for sid in seat_ids: showtime.seats[sid].is_locked = True\n        booking = Booking(user_id, showtime, seat_ids)\n        with self._lock: self.bookings[booking.id] = booking\n        timer = threading.Timer(900, self._expire_booking, [booking.id])\n        timer.start()\n        return booking.id\n\ndef confirm_booking(self, booking_id):\n    with self._lock:\n        booking = self.bookings.get(booking_id)\n        if not booking or booking.status != BookingStatus.PENDING: return False\n        booking.status = BookingStatus.CONFIRMED\n        # Send notification asynchronously\n        threading.Thread(target=self._send_confirmation, args=(booking,)).start()\n        return True\n\ndef _expire_booking(self, booking_id):\n    with self._lock:\n        booking = self.bookings.get(booking_id)\n        if booking and booking.status == BookingStatus.PENDING:\n            booking.status = BookingStatus.CANCELLED\n            with booking.showtime._lock:\n                for sid in booking.seats:\n                    booking.showtime.seats[sid].is_locked = False\n\ndef _send_confirmation(self, booking):\n    print(f\"Email sent: Booking {booking.id} confirmed for {booking.showtime.movie}\")\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "usage",
        children: "Usage"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "system = BookingSystem()\nst = Showtime(\"Dune: Part Two\", \"2024-03-15 19:00\", 15.00)\nfor i in range(100): st.seats[str(i)] = Seat(str(i), \"standard\")\nbooking_id = system.lock_seats(st, [\"10\", \"11\"], \"user42\")\nif booking_id: system.confirm_booking(booking_id)"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "UML: `BookingSystem` *-- `Booking`, `Showtime` *-- `Seat`, `Booking` --> `Showtime`, `Booking` --> `User`. State machine: `PENDING --[payment]--> CONFIRMED`, `PENDING --[timeout]--> CANCELLED`.\n</details>\n"
        })
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