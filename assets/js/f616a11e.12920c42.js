"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[7394],{

/***/ 85457
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_software_engineering_03_system_modeling_md_f61_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-software-engineering-03-system-modeling-md-f61.json
const site_docs_courses_software_engineering_03_system_modeling_md_f61_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/software-engineering/03-system-modeling","title":"System Modelling","description":"Learning Objectives","source":"@site/docs/courses/software-engineering/03-system-modeling.md","sourceDirName":"courses/software-engineering","slug":"/software-engineering/03-system-modeling","permalink":"/ai-engineering-journey/software-engineering/03-system-modeling","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"03-system-modeling","slug":"/software-engineering/03-system-modeling","title":"System Modelling","sidebar_label":"System Modelling","sidebar_position":3},"sidebar":"coursesSidebar","previous":{"title":"Requirements Engineering","permalink":"/ai-engineering-journey/software-engineering/02-requirements"},"next":{"title":"Architectural Design","permalink":"/ai-engineering-journey/software-engineering/04-architectural-design"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/software-engineering/03-system-modeling.md


const frontMatter = {
	id: '03-system-modeling',
	slug: '/software-engineering/03-system-modeling',
	title: 'System Modelling',
	sidebar_label: 'System Modelling',
	sidebar_position: 3
};
const contentTitle = 'System Modelling';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "The Purpose of System Modelling",
  "id": "the-purpose-of-system-modelling",
  "level": 3
}, {
  "value": "The Unified Modeling Language",
  "id": "the-unified-modeling-language",
  "level": 3
}, {
  "value": "Use Case Diagrams",
  "id": "use-case-diagrams",
  "level": 3
}, {
  "value": "Class Diagrams",
  "id": "class-diagrams",
  "level": 3
}, {
  "value": "Sequence Diagrams",
  "id": "sequence-diagrams",
  "level": 3
}, {
  "value": "Activity Diagrams",
  "id": "activity-diagrams",
  "level": 3
}, {
  "value": "State Machine Diagrams",
  "id": "state-machine-diagrams",
  "level": 3
}, {
  "value": "Component Diagrams",
  "id": "component-diagrams",
  "level": 3
}, {
  "value": "Deployment Diagrams",
  "id": "deployment-diagrams",
  "level": 3
}, {
  "value": "Data Flow Diagrams",
  "id": "data-flow-diagrams",
  "level": 3
}, {
  "value": "Entity-Relationship Diagrams",
  "id": "entity-relationship-diagrams",
  "level": 3
}, {
  "value": "Design Patterns in Modelling Context",
  "id": "design-patterns-in-modelling-context",
  "level": 3
}, {
  "value": "Object Constraint Language",
  "id": "object-constraint-language",
  "level": 3
}, {
  "value": "Model-Driven Engineering",
  "id": "model-driven-engineering",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: ClassDiagramGenerator — from TypeScript Source",
  "id": "example-1-classdiagramgenerator--from-typescript-source",
  "level": 3
}, {
  "value": "Example 2: SequenceDiagramRenderer — from Trace Logs",
  "id": "example-2-sequencediagramrenderer--from-trace-logs",
  "level": 3
}, {
  "value": "Example 3: StateMachineEngine — with Guards, Actions, Nested States",
  "id": "example-3-statemachineengine--with-guards-actions-nested-states",
  "level": 3
}, {
  "value": "Example 4: Model Consistency Checker",
  "id": "example-4-model-consistency-checker",
  "level": 3
}, {
  "value": "Example 5: UML-to-TypeScript Converter with Design Pattern Detection",
  "id": "example-5-uml-to-typescript-converter-with-design-pattern-detection",
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
  "value": "Exercise 1: Use Case Diagram for an E-Commerce System",
  "id": "exercise-1-use-case-diagram-for-an-e-commerce-system",
  "level": 3
}, {
  "value": "Exercise 2: Full UML Model for a Library System",
  "id": "exercise-2-full-uml-model-for-a-library-system",
  "level": 3
}, {
  "value": "Exercise 3: Model Consistency Checking",
  "id": "exercise-3-model-consistency-checking",
  "level": 3
}, {
  "value": "Exercise 4: State Machine with Nested States",
  "id": "exercise-4-state-machine-with-nested-states",
  "level": 3
}, {
  "value": "Exercise 5: Complete TypeScript Model Implementation",
  "id": "exercise-5-complete-typescript-model-implementation",
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
        id: "system-modelling",
        children: "System Modelling"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "✅ After completing this chapter, the student will be able to:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Explain the purpose of system modelling from multiple perspectives"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Construct UML use case, class, sequence, activity, and state machine diagrams"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Describe component, deployment, package, and object diagrams"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Develop data flow diagrams and entity-relationship diagrams"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Apply design patterns in the context of system modelling"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Explain model-driven engineering and its benefits"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Write constraints using the Object Constraint Language"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Map UML models to TypeScript type definitions and verify consistency"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Implement a class diagram generator from TypeScript source"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Build a sequence diagram renderer from trace logs"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Develop a state machine engine with guards, actions, and nested states"
        }), "\n"]
      }), "\n"]
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
        href: "../../assets/images/lessons/software-engineering/03-system-modeling/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/software-engineering/03-system-modeling/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/software-engineering/03-system-modeling/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/software-engineering/03-system-modeling/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/software-engineering/03-system-modeling/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/software-engineering/03-system-modeling/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-purpose-of-system-modelling",
      children: "The Purpose of System Modelling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "System modelling is the process of developing abstract representations of a system from different perspectives. Each model emphasises certain aspects while suppressing others, enabling stakeholders to understand, analyse, and communicate about the system."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Models serve several purposes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Communication:"
        }), " Facilitate discussion between stakeholders and developers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Input to design:"
        }), " Provide input to the design process"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation:"
        }), " Document design decisions for future reference"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code generation:"
        }), " Generate implementation artefacts automatically"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A software system can be modelled from three complementary perspectives:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "External perspective:"
        }), " Models the system's context and environment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interaction perspective:"
        }), " Models interactions between the system and its environment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Structural perspective:"
        }), " Models the organisation of the system and its data"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Modelling Perspectives\"\n        EXT[External Perspective] --> CTX[Context & Environment<br/>Use Case Diagrams]\n        INT[Interaction Perspective] --> SEQ[Sequences & Messages<br/>Sequence, Communication]\n        STR[Structural Perspective] --> CLS[Classes & Data<br/>Class, Object, ER Diagrams]\n    end\n    subgraph \"UML 2.x Diagram Types\"\n        UML[UML 2.x<br/>13 Diagram Types] --> STR2[Structure Diagrams]\n        UML --> BEH[Behaviour Diagrams]\n        STR2 --> CLS2[Class Diagram]\n        STR2 --> CMP[Component Diagram]\n        STR2 --> DEP[Deployment Diagram]\n        STR2 --> OBJ[Object Diagram]\n        STR2 --> PKG[Package Diagram]\n        STR2 --> COMP[Composite Structure]\n        BEH --> UC[Use Case Diagram]\n        BEH --> SEQ2[Sequence Diagram]\n        BEH --> ACT[Activity Diagram]\n        BEH --> SM[State Machine Diagram]\n        BEH --> COMM[Communication Diagram]\n        BEH --> INT[Interaction Overview]\n        BEH --> TIM[Timing Diagram]\n    end\n\n    classDef pers fill:#3498db,stroke:#2980b9,color:#fff\n    classDef uml fill:#2ecc71,stroke:#27ae60,color:#fff\n    classDef struct fill:#f39c12,stroke:#d35400,color:#fff\n    classDef behav fill:#e74c3c,stroke:#c0392b,color:#fff\n    class EXT,INT,STR pers\n    class UML uml\n    class CLS2,CMP,DEP,OBJ,PKG,COMP struct\n    class UC,SEQ2,ACT,SM,COMM,INT,TIM behav\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-unified-modeling-language",
      children: "The Unified Modeling Language"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Unified Modeling Language (UML) is a general-purpose visual modelling language standardised by the Object Management Group (OMG). UML provides thirteen diagram types in two categories: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "structure diagrams"
      }), " (static structure) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "behaviour diagrams"
      }), " (dynamic behaviour)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UML is extensible through:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stereotypes:"
        }), " Extend UML vocabulary (", (0,jsx_runtime.jsx)(_components.code, {
          children: "<<entity>>"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<<controller>>"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<<service>>"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<<repository>>"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tagged values:"
        }), " Extend properties of model elements (", (0,jsx_runtime.jsx)(_components.code, {
          children: "{version=1.0, author=Alice}"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Constraints:"
        }), " Add rules expressed in natural language or OCL"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-case-diagrams",
      children: "Use Case Diagrams"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use case diagrams show interactions between actors and the system. An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "actor"
      }), " is a role played by a user or another system. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "use case"
      }), " represents a complete unit of functionality."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Library System\"\n        UC1[Search Catalogue]\n        UC2[Borrow Book]\n        UC3[Return Book]\n        UC4[Manage Inventory]\n        UC5[Generate Reports]\n        UC6[Pay Fine]\n        UC7[Reserve Book]\n    end\n    A1[Patron] --> UC1\n    A1 --> UC2\n    A1 --> UC3\n    A1 --> UC6\n    A1 --> UC7\n    A2[Librarian] --> UC3\n    A2 --> UC4\n    A2 --> UC6\n    A3[Administrator] --> UC4\n    A3 --> UC5\n    UC4 -.->|<<extend>>| UC5\n    UC1 -.->|<<include>>| UC3\n    UC2 -.->|<<include>>| UC6\n    UC2 -.->|<<include>>| UC7\n\n    classDef actor fill:#e74c3c,stroke:#c0392b,color:#fff\n    classDef uc fill:#3498db,stroke:#2980b9,color:#fff\n    class A1,A2,A3 actor\n    class UC1,UC2,UC3,UC4,UC5,UC6,UC7 uc\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Relationship"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Association"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solid line"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actor participates in use case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Include"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Dashed arrow ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<<include>>"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One use case always includes another"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Extend"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Dashed arrow ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<<extend>>"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One use case optionally extends another"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Generalisation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hollow triangle arrow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child use case inherits from parent"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "class-diagrams",
      children: "Class Diagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Class diagrams describe the static structure of a system by showing classes, attributes, operations, and relationships. They are the most widely used UML diagram type."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "classDiagram\n    class Book {\n        -isbn: string\n        -title: string\n        -author: string\n        -publicationYear: int\n        -status: BookStatus\n        +getDetails(): BookDetails\n        +changeStatus(newStatus: BookStatus): void\n        +isAvailable(): boolean\n    }\n    class Patron {\n        -patronId: string\n        -name: string\n        -email: string\n        -maxLoans: int\n        +borrowBook(book: Book): Loan\n        +returnBook(book: Book): void\n        +getLoanHistory(): Loan[]\n        +getOutstandingFines(): number\n    }\n    class Loan {\n        -loanId: string\n        -loanDate: Date\n        -dueDate: Date\n        -returnDate: Date\n        -fineAmount: float\n        +isOverdue(): boolean\n        +calculateFine(): number\n        +payFine(amount: number): void\n    }\n    class Library {\n        -name: string\n        -location: string\n        +searchCatalogue(query: string): Book[]\n        +registerPatron(patron: Patron): void\n        +getOverdueLoans(): Loan[]\n    }\n    class Fine {\n        -amount: float\n        -reason: string\n        -paid: boolean\n        +processPayment(): void\n    }\n    Library \"1\" --> \"*\" Book : contains\n    Library \"1\" --> \"*\" Patron : serves\n    Patron \"1\" --> \"*\" Loan : makes\n    Book \"1\" --> \"*\" Loan : subject of\n    Loan \"1\" --> \"*\" Fine : incurs\n    Patron \"1\" --> \"*\" Fine : owes\n\n    class BookStatus {\n        <<enumeration>>\n        AVAILABLE\n        ON_LOAN\n        RESERVED\n        LOST\n        WITHDRAWN\n    }\n    Book --> BookStatus\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Relationships:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Association"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solid line"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structural connection between instances"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Aggregation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hollow diamond"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whole-part (part exists independently of whole)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Composition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filled diamond"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whole-part (part cannot exist without whole)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inheritance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hollow triangle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subclass inherits from superclass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dependency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dashed arrow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Change to one may affect the other"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Realisation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dashed triangle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class implements interface"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Multiplicity:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Notation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exactly one"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0..1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero or one"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero or more"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "1..*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One or more"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0..5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero to five"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "m..n"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m to n inclusive"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sequence-diagrams",
      children: "Sequence Diagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sequence diagrams model interactions between objects over time, showing messages exchanged in chronological order. They are essential for understanding communication patterns and protocol design."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant P as Patron\n    participant UI as SearchUI\n    participant Ctrl as SearchController\n    participant DB as CatalogueDB\n    participant PAY as PaymentGateway\n    \n    P->>UI: enter search query\n    UI->>Ctrl: search(query)\n    Ctrl->>DB: findBooks(query)\n    DB-->>Ctrl: matching books\n    Ctrl-->>UI: search results\n    UI-->>P: display results\n    \n    alt Book available\n        P->>UI: select book & borrow\n        UI->>Ctrl: borrowBook(bookId, patronId)\n        Ctrl->>DB: checkAvailability(bookId)\n        DB-->>Ctrl: available\n        Ctrl->>DB: createLoan(patronId, bookId)\n        DB-->>Ctrl: loan created\n        \n        par Payment and Notification\n            Ctrl->>PAY: processFine(patronId)\n            PAY-->>Ctrl: payment status\n            Ctrl->>UI: send confirmation\n        end\n        \n        UI-->>P: \"Book borrowed successfully\"\n        \n    else Book on loan\n        UI-->>P: \"Book is currently on loan\"\n        opt Reserve book\n            P->>UI: request reservation\n            UI->>Ctrl: reserveBook(bookId, patronId)\n            Ctrl->>DB: createReservation(bookId, patronId)\n            DB-->>Ctrl: reservation created\n            UI-->>P: \"You will be notified when available\"\n        end\n        \n    else Book reserved by others\n        UI-->>P: \"Book is reserved for another patron\"\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Combined Fragments:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operator"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "alt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alternative scenarios (if/else)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "opt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional scenario (if without else)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "loop"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repetition (while/for)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "par"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ref"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reference to another diagram"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "break"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Break condition, terminates enclosing fragment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "critical"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical region (must be atomic)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ignore"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignore certain message types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "consider"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only consider certain message types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "assert"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assertion — must be true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "neg"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negative — invalid interaction"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "activity-diagrams",
      children: "Activity Diagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Activity diagrams model the flow of control from one activity to another, supporting sequential, concurrent, and conditional behaviour. They are ideal for modelling business processes and workflows."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    START((Start)) --> A[Receive Order]\n    A --> B{Validate Order}\n    B -->|Valid| C[Check Inventory]\n    B -->|Invalid| D[Reject Order]\n    D --> END((End))\n    C --> E{In Stock?}\n    E -->|Yes| F[Process Payment]\n    E -->|No| G[Order from Supplier]\n    G --> H[Wait for Delivery]\n    H --> C\n    F --> I[Pack Order]\n    I --> J[Ship Order]\n    J --> K[Send Confirmation]\n    K --> L[Update Inventory]\n    L --> END\n\n    classDef start fill:#2c3e50,stroke:#2c3e50,color:#fff\n    classDef act fill:#3498db,stroke:#2980b9,color:#fff\n    classDef decision fill:#f39c12,stroke:#d35400,color:#fff\n    classDef end fill:#e74c3c,stroke:#c0392b,color:#fff\n    class START start\n    class A,C,F,G,H,I,J,K,L act\n    class B,E decision\n    class D,END end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Activity Elements:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Initial node"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filled circle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start of activity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Activity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rounded rectangle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action to perform"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Decision"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diamond"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional branch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fork"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thick bar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split into concurrent flows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Join"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thick bar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronise concurrent flows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Final node"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bullseye"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End of activity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Swimlane"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Responsibilities by actor"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "state-machine-diagrams",
      children: "State Machine Diagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "State machine diagrams model the behaviour of an object as it responds to events over its lifetime. They are particularly important for modelling systems with complex state-dependent behaviour."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "stateDiagram-v2\n    [*] --> Available\n    Available --> OnLoan: borrow()\n    OnLoan --> Overdue: 14 days elapsed\n    OnLoan --> Available: return()\n    Overdue --> Available: return() + payFine()\n    Overdue --> Lost: reportLost()\n    Lost --> [*]: withdraw()\n    Available --> Reserved: reserve()\n    Reserved --> OnLoan: borrow()\n    Reserved --> Available: cancelReservation()\n    \n    state OnLoan {\n        [*] --> Current\n        Current --> Overdue: due date passed\n    }\n    \n    state Overdue {\n        [*] --> FirstNotice\n        FirstNotice --> SecondNotice: 7 days\n        SecondNotice --> FinalNotice: 14 days\n        FinalNotice --> Collections: 30 days\n    }\n\n    note right of Available\n        Guards:\n        - borrow: patron.eligible\n        - reserve: book.onLoan or book.available\n    end note\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Initial state"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Starting point (filled circle)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Condition during which object waits or performs activity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Movement between states triggered by events"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Guard condition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean condition that must be true for transition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Composite state"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nested states within a state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrent region"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Independent sub-states within a composite state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Entry/Exit actions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actions executed on entering/exiting a state"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "component-diagrams",
      children: "Component Diagrams"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Component diagrams show the organisation and dependencies among software components. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "component"
      }), " is a modular, deployable, and replaceable part that encapsulates implementation and exposes interfaces."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Web Tier\"\n        WEB[Web Application<br/>React SPA] -->|HTTP/REST| API[API Gateway<br/>Express.js]\n    end\n    subgraph \"Application Tier\"\n        API --> AUTH[Auth Service<br/>:8081]\n        API --> ORDER[Order Service<br/>:8082]\n        API --> PAY[Payment Service<br/>:8083]\n        API --> NOTIFY[Notification Service<br/>:8084]\n        ORDER -->|RabbitMQ| NOTIFY\n    end\n    subgraph \"Data Tier\"\n        ORDER --> DB[(Order DB<br/>PostgreSQL)]\n        PAY --> PDB[(Payment DB<br/>PostgreSQL)]\n        AUTH --> UDB[(User DB<br/>MySQL)]\n        NOTIFY --> NDB[(Notification DB<br/>MongoDB)]\n    end\n    subgraph \"External Systems\"\n        PAY --> PSP[Payment Gateway<br/>Stripe API]\n        NOTIFY --> SMTP[SMTP Server<br/>SendGrid]\n    end\n\n    classDef web fill:#3498db,stroke:#2980b9,color:#fff\n    classDef app fill:#2ecc71,stroke:#27ae60,color:#fff\n    classDef data fill:#e67e22,stroke:#d35400,color:#fff\n    classDef ext fill:#e74c3c,stroke:#c0392b,color:#fff\n    class WEB,API web\n    class AUTH,ORDER,PAY,NOTIFY app\n    class DB,PDB,UDB,NDB data\n    class PSP,SMTP ext\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Provided interfaces:"
        }), " Services offered by component (lollipop notation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Required interfaces:"
        }), " Services needed from environment (socket notation)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deployment-diagrams",
      children: "Deployment Diagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deployment diagrams show the physical deployment of software components on hardware nodes. They are essential for understanding the production architecture, network topology, and scalability."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Production Environment — us-east-1\"\n        subgraph \"Load Balancer\"\n            LB[ALB:443 HTTPS]\n        end\n        subgraph \"App Cluster — Auto Scaling Group\"\n            A1[EC2 App Server 1<br/>Node.js 18 :8080]\n            A2[EC2 App Server 2<br/>Node.js 18 :8080]\n            A3[EC2 App Server 3<br/>Node.js 18 :8080]\n        end\n        subgraph \"Database Cluster — RDS Multi-AZ\"\n            DB1[(Primary<br/>PostgreSQL 16 :5432<br/>us-east-1a)]\n            DB2[(Standby Replica<br/>PostgreSQL 16 :5432<br/>us-east-1b)]\n        end\n        subgraph \"Cache Layer — ElastiCache\"\n            REDIS[(Redis 7<br/>:6379<br/>Cluster Mode Enabled)]\n        end\n        subgraph \"CDN\"\n            CF[CloudFront<br/>Static Assets]\n        end\n    end\n    INTERNET((Internet)) --> CF\n    INTERNET --> LB\n    LB --> A1\n    LB --> A2\n    LB --> A3\n    A1 --> DB1\n    A2 --> DB1\n    A3 --> DB1\n    DB1 --> DB2\n    A1 --> REDIS\n    A2 --> REDIS\n    A3 --> REDIS\n    CF --> S3[S3 Bucket<br/>Static Files]\n\n    classDef internet fill:#e74c3c,stroke:#c0392b,color:#fff\n    classDef lb fill:#f39c12,stroke:#d35400,color:#fff\n    classDef app fill:#3498db,stroke:#2980b9,color:#fff\n    classDef db fill:#2ecc71,stroke:#27ae60,color:#fff\n    classDef cache fill:#9b59b6,stroke:#8e44ad,color:#fff\n    classDef cdn fill:#1abc9c,stroke:#16a085,color:#fff\n    class INTERNET internet\n    class LB lb\n    class A1,A2,A3 app\n    class DB1,DB2 db\n    class REDIS cache\n    class CF,CDN,S3 cdn\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "data-flow-diagrams",
      children: "Data Flow Diagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Data flow diagrams (DFDs) model the flow of data through a system. They are hierarchically organised from context level (Level 0) through increasingly detailed levels."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DFD Elements:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Symbol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Circle/rounded rectangle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transforms data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arrow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data in motion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Double line"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data at rest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rectangle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source/destination outside system"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "entity-relationship-diagrams",
      children: "Entity-Relationship Diagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Entity-relationship (ER) diagrams model the data perspective, showing entity types, attributes, and relationships."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "erDiagram\n    PATRON ||--o{ LOAN : makes\n    BOOK ||--o{ LOAN : \"subject of\"\n    BOOK ||--o{ RESERVATION : \"reserved in\"\n    PATRON ||--o{ RESERVATION : places\n    PATRON ||--o{ FINE : owes\n    LOAN ||--o{ FINE : incurs\n    PUBLISHER ||--o{ BOOK : publishes\n    AUTHOR }|--|{ BOOK : writes\n    \n    PATRON {\n        string patronId PK\n        string name\n        string email UK\n        string phone\n        int maxLoans\n        date registrationDate\n    }\n    BOOK {\n        string isbn PK\n        string title\n        int publicationYear\n        string status \"enum\"\n        string publisherId FK\n    }\n    LOAN {\n        string loanId PK\n        string patronId FK\n        string isbn FK\n        date loanDate\n        date dueDate\n        date returnDate \"nullable\"\n        float fineAmount \"default 0\"\n    }\n    RESERVATION {\n        string reservationId PK\n        string patronId FK\n        string isbn FK\n        date reservationDate\n        date expiryDate\n        string status \"enum\"\n    }\n    FINE {\n        string fineId PK\n        string loanId FK \"nullable\"\n        string patronId FK\n        float amount\n        string reason\n        boolean paid \"default false\"\n        date paidDate \"nullable\"\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "design-patterns-in-modelling-context",
      children: "Design Patterns in Modelling Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design patterns can be represented in UML to document recurring architectural solutions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Singleton:"
        }), " A class with a static ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getInstance()"
        }), " operation and a private constructor"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Observer:"
        }), " A subject class with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "attach()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "detach()"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "notify()"
        }), " operations; observer interface with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update()"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Strategy:"
        }), " A context class delegating to a strategy interface with concrete implementations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Factory:"
        }), " A creator class with a factory method returning product objects"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Adapter:"
        }), " A class that adapts a target interface to an adaptee"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "object-constraint-language",
      children: "Object Constraint Language"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OCL is a formal language for expressing constraints on UML models. It is declarative with no side effects."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "OCL Expression Types:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Invariant"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "context Account inv: self.balance >= 0"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Precondition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "context Account::withdraw(a: Integer) pre: self.balance >= a"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Postcondition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "context Account::withdraw(a: Integer) post: self.balance = self@pre.balance - a"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "`context Library::getOverdueLoans(): Set(Loan) body: self.loans->select(l"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "OCL Collection Operations:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// OCL: context Library inv: self.books->forAll(b | b.status <> BookStatus::LOST)\n// OCL: context Patron inv: self.loans->select(l | l.isOverdue())->size() <= 3\n// OCL: context Library::getAvailableBooks(): Set(Book) \n//      body: self.books->select(b | b.status = BookStatus::AVAILABLE)\n// OCL: context Patron inv: self.fines->select(f | f.paid = false)->sum(f.amount) <= 50\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "model-driven-engineering",
      children: "Model-Driven Engineering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Model-driven engineering (MDE) elevates models from documentation to primary development artefacts. The Model-Driven Architecture (MDA) standard defines three levels:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CIM (Computation-Independent Model):"
        }), " Domain model, business requirements"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PIM (Platform-Independent Model):"
        }), " Describes system independently of implementation platform (UML)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PSM (Platform-Specific Model):"
        }), " Incorporates platform-specific details (e.g., J2EE, .NET)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    CIM[Computation-Independent<br/>Model] -->|Business Modelling| PIM[Platform-Independent<br/>Model]\n    PIM -->|QVT Transformation| PSM[Platform-Specific<br/>Model]\n    PSM -->|Code Generation| CODE[Executable Code]\n    CODE -->|Reverse Engineering| PSM\n    PSM -->|Round-trip| PIM\n\n    classDef cim fill:#e74c3c,stroke:#c0392b,color:#fff\n    classDef pim fill:#f39c12,stroke:#d35400,color:#fff\n    classDef psm fill:#2ecc71,stroke:#27ae60,color:#fff\n    classDef code fill:#3498db,stroke:#2980b9,color:#fff\n    class CIM cim\n    class PIM pim\n    class PSM psm\n    class CODE code\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-classdiagramgenerator--from-typescript-source",
      children: "Example 1: ClassDiagramGenerator — from TypeScript Source"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ClassInfo {\n  name: string;\n  properties: { name: string; type: string; visibility: 'public' | 'private' | 'protected'; static: boolean }[];\n  methods: { name: string; params: string; returnType: string; visibility: 'public' | 'private' | 'protected'; static: boolean }[];\n  extends?: string;\n  implements?: string[];\n  isEnum?: boolean;\n  enumValues?: string[];\n}\n\nclass ClassDiagramGenerator {\n  private classes: ClassInfo[] = [];\n\n  public addClass(info: ClassInfo): void {\n    this.classes.push(info);\n  }\n\n  public addEnum(name: string, values: string[]): void {\n    this.classes.push({\n      name,\n      properties: [],\n      methods: [],\n      isEnum: true,\n      enumValues: values,\n    });\n  }\n\n  public generateUMLMermaid(): string {\n    const lines: string[] = ['```mermaid', 'classDiagram'];\n    for (const cls of this.classes) {\n      if (cls.isEnum) {\n        lines.push(`    class ${cls.name} {`);\n        lines.push('        <<enumeration>>');\n        for (const val of cls.enumValues ?? []) {\n          lines.push(`        ${val}`);\n        }\n        lines.push('    }');\n      } else {\n        lines.push(`    class ${cls.name} {`);\n        for (const prop of cls.properties) {\n          const vis = prop.visibility === 'private' ? '-' : prop.visibility === 'protected' ? '#' : '+';\n          lines.push(`        ${vis}${prop.name}: ${prop.type}${prop.static ? ' {static}' : ''}`);\n        }\n        for (const method of cls.methods) {\n          const vis = method.visibility === 'private' ? '-' : method.visibility === 'protected' ? '#' : '+';\n          lines.push(`        ${vis}${method.name}(${method.params}) ${method.returnType}${method.static ? ' {static}' : ''}`);\n        }\n        lines.push('    }');\n        if (cls.extends) {\n          lines.push(`    ${cls.name} --|> ${cls.extends}`);\n        }\n        if (cls.implements) {\n          for (const iface of cls.implements) {\n            lines.push(`    ${cls.name} ..|> ${iface}`);\n          }\n        }\n      }\n    }\n    lines.push('```');\n    return lines.join('\\n');\n  }\n\n  public generateTypeScriptCode(): string {\n    const lines: string[] = [];\n    for (const cls of this.classes) {\n      if (cls.isEnum) {\n        lines.push(`enum ${cls.name} {`);\n        for (const val of cls.enumValues ?? []) {\n          lines.push(`  ${val} = '${val}',`);\n        }\n        lines.push('}');\n      } else {\n        const ext = cls.extends ? ` extends ${cls.extends}` : '';\n        const impl = cls.implements && cls.implements.length > 0 ? ` implements ${cls.implements.join(', ')}` : '';\n        lines.push(`class ${cls.name}${ext}${impl} {`);\n        for (const prop of cls.properties) {\n          const acc = prop.visibility === 'private' ? 'private' : prop.visibility === 'protected' ? 'protected' : 'public';\n          lines.push(`  ${acc}${prop.static ? ' static' : ''} ${prop.name}: ${prop.type};`);\n        }\n        for (const method of cls.methods) {\n          const acc = method.visibility === 'private' ? 'private' : method.visibility === 'protected' ? 'protected' : 'public';\n          lines.push(`  ${acc}${method.static ? ' static' : ''} ${method.name}(${method.params}): ${method.returnType} {}`);\n        }\n        lines.push('}');\n      }\n      lines.push('');\n    }\n    return lines.join('\\n');\n  }\n\n  public static analyzeFromCode(code: string): ClassInfo[] {\n    const classes: ClassInfo[] = [];\n    const classRegex = /class\\s+(\\w+)(?:\\s+extends\\s+(\\w+))?(?:\\s+implements\\s+([\\w,\\s]+))?\\s*\\{/g;\n    const propRegex = /(private|protected|public)\\s+(static\\s+)?(\\w+)\\s*:\\s*(\\w+)/g;\n    const methodRegex = /(private|protected|public)\\s+(static\\s+)?(\\w+)\\s*\\(([^)]*)\\)\\s*:\\s*(\\w+)/g;\n\n    let match;\n    while ((match = classRegex.exec(code)) !== null) {\n      const cls: ClassInfo = {\n        name: match[1],\n        properties: [],\n        methods: [],\n        extends: match[2] || undefined,\n        implements: match[3] ? match[3].split(',').map(s => s.trim()) : undefined,\n      };\n\n      const classBodyStart = match.index + match[0].length;\n      const classBodyEnd = this.findMatchingBrace(code, classBodyStart);\n      const body = code.substring(classBodyStart, classBodyEnd);\n\n      let propMatch;\n      while ((propMatch = propRegex.exec(body)) !== null) {\n        cls.properties.push({\n          name: propMatch[3],\n          type: propMatch[4],\n          visibility: propMatch[1] as 'public' | 'private' | 'protected',\n          static: propMatch[2]?.includes('static') ?? false,\n        });\n      }\n\n      let methodMatch;\n      while ((methodMatch = methodRegex.exec(body)) !== null) {\n        cls.methods.push({\n          name: methodMatch[3],\n          params: methodMatch[4],\n          returnType: methodMatch[5],\n          visibility: methodMatch[1] as 'public' | 'private' | 'protected',\n          static: methodMatch[2]?.includes('static') ?? false,\n        });\n      }\n\n      classes.push(cls);\n    }\n    return classes;\n  }\n\n  private static findMatchingBrace(code: string, start: number): number {\n    let depth = 1;\n    let i = start;\n    while (depth > 0 && i < code.length) {\n      if (code[i] === '{') depth++;\n      else if (code[i] === '}') depth--;\n      i++;\n    }\n    return i;\n  }\n}\n\n// Usage\nconst gen = new ClassDiagramGenerator();\ngen.addClass({\n  name: 'Book',\n  properties: [\n    { name: 'isbn', type: 'string', visibility: 'private', static: false },\n    { name: 'title', type: 'string', visibility: 'private', static: false },\n    { name: 'status', type: 'BookStatus', visibility: 'private', static: false },\n  ],\n  methods: [\n    { name: 'getDetails', params: '', returnType: 'BookDetails', visibility: 'public', static: false },\n    { name: 'changeStatus', params: 'newStatus: BookStatus', returnType: 'void', visibility: 'public', static: false },\n  ],\n});\ngen.addEnum('BookStatus', ['AVAILABLE', 'ON_LOAN', 'RESERVED', 'LOST', 'WITHDRAWN']);\nconsole.log(gen.generateUMLMermaid());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-sequencediagramrenderer--from-trace-logs",
      children: "Example 2: SequenceDiagramRenderer — from Trace Logs"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface TraceEvent {\n  timestamp: number;\n  from: string;\n  to: string;\n  message: string;\n  type: 'sync_call' | 'async_call' | 'return' | 'create' | 'destroy' | 'self';\n  duration?: number; // ms\n  nested?: TraceEvent[];\n}\n\nclass SequenceDiagramRenderer {\n  private events: TraceEvent[] = [];\n  private participants: Set<string> = new Set();\n\n  public addEvent(event: TraceEvent): void {\n    this.events.push(event);\n    this.participants.add(event.from);\n    this.participants.add(event.to);\n  }\n\n  public renderMermaid(): string {\n    const lines: string[] = ['```mermaid', 'sequenceDiagram'];\n    for (const p of this.participants) {\n      lines.push(`    participant ${this.escapeId(p)} as ${p}`);\n    }\n    for (const event of this.events) {\n      lines.push(...this.renderEvent(event, 1));\n    }\n    lines.push('```');\n    return lines.join('\\n');\n  }\n\n  private renderEvent(event: TraceEvent, indent: number): string[] {\n    const pad = '    '.repeat(indent);\n    const lines: string[] = [];\n    const from = this.escapeId(event.from);\n    const to = this.escapeId(event.to);\n\n    switch (event.type) {\n      case 'sync_call':\n        lines.push(`${pad}${from}->>${to}: ${event.message}`);\n        break;\n      case 'async_call':\n        lines.push(`${pad}${from}-->>${to}: ${event.message}`);\n        break;\n      case 'return':\n        lines.push(`${pad}${to}-->>${from}: ${event.message}`);\n        break;\n      case 'create':\n        lines.push(`${pad}create participant ${to}`);\n        lines.push(`${pad}${from}->>${to}: ${event.message}`);\n        break;\n      case 'self':\n        lines.push(`${pad}${from}->>${from}: ${event.message}`);\n        break;\n    }\n    if (event.nested && event.nested.length > 0) {\n      for (const nested of event.nested) {\n        lines.push(...this.renderEvent(nested, indent + 1));\n      }\n    }\n    return lines;\n  }\n\n  private escapeId(id: string): string {\n    return id.replace(/\\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '');\n  }\n\n  public generatePlantUML(): string {\n    const lines: string[] = ['@startuml'];\n    for (const p of this.participants) {\n      lines.push(`  participant \"${p}\" as ${this.escapeId(p)}`);\n    }\n    for (const event of this.events) {\n      this.renderPlantUMLEvent(event, lines);\n    }\n    lines.push('@enduml');\n    return lines.join('\\n');\n  }\n\n  private renderPlantUMLEvent(event: TraceEvent, lines: string[]): void {\n    const from = this.escapeId(event.from);\n    const to = this.escapeId(event.to);\n    switch (event.type) {\n      case 'sync_call':\n        lines.push(`  ${from} -> ${to} + : ${event.message}`);\n        if (event.duration !== undefined) {\n          lines.push(`  note right: ${event.duration}ms`);\n        }\n        break;\n      case 'return':\n        lines.push(`  ${to} --> ${from} - : ${event.message}`);\n        break;\n      case 'async_call':\n        lines.push(`  ${from} ->> ${to} : ${event.message}`);\n        break;\n      case 'self':\n        lines.push(`  ${from} -> ${from} : ${event.message}`);\n        break;\n    }\n  }\n\n  public getTimeline(): { event: TraceEvent; cumulativeTime: number }[] {\n    const sorted = [...this.events].sort((a, b) => a.timestamp - b.timestamp);\n    let cumTime = 0;\n    return sorted.map(event => {\n      cumTime += event.duration ?? 0;\n      return { event, cumulativeTime: cumTime };\n    });\n  }\n}\n\n// Usage\nconst renderer = new SequenceDiagramRenderer();\nrenderer.addEvent({ timestamp: 0, from: 'Client', to: 'Controller', message: 'POST /login', type: 'sync_call', duration: 5 });\nrenderer.addEvent({ timestamp: 5, from: 'Controller', to: 'AuthService', message: 'authenticate(credentials)', type: 'sync_call', duration: 50 });\nrenderer.addEvent({ timestamp: 55, from: 'AuthService', to: 'Database', message: 'SELECT user WHERE email=?', type: 'sync_call', duration: 20 });\nrenderer.addEvent({ timestamp: 75, from: 'Database', to: 'AuthService', message: 'user record', type: 'return' });\nrenderer.addEvent({ timestamp: 80, from: 'AuthService', to: 'Controller', message: 'JWT token', type: 'return' });\nrenderer.addEvent({ timestamp: 85, from: 'Controller', to: 'Client', message: '200 OK + token', type: 'return' });\nconsole.log(renderer.renderMermaid());\nconsole.log(renderer.getTimeline());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-statemachineengine--with-guards-actions-nested-states",
      children: "Example 3: StateMachineEngine — with Guards, Actions, Nested States"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type State = string;\ntype Event = string;\n\ninterface Guard {\n  name: string;\n  condition: (context: Record<string, unknown>) => boolean;\n}\n\ninterface Action {\n  name: string;\n  execute: (context: Record<string, unknown>) => void;\n}\n\ninterface StateTransition {\n  from: State;\n  to: State;\n  event: Event;\n  guard?: string;\n  actions?: string[];\n}\n\ninterface NestedStateMachine {\n  parentState: State;\n  initialState: State;\n  states: State[];\n  transitions: StateTransition[];\n}\n\nclass StateMachineEngine {\n  private currentState: State;\n  private readonly transitions: StateTransition[];\n  private readonly guards: Map<string, Guard>;\n  private readonly actions: Map<string, Action>;\n  private readonly nested: Map<State, NestedStateMachine>;\n  private context: Record<string, unknown>;\n  private readonly history: { from: State; to: State; event: Event; timestamp: Date }[];\n\n  constructor(\n    initialState: State,\n    transitions: StateTransition[],\n    options?: {\n      guards?: Guard[];\n      actions?: Action[];\n      nested?: NestedStateMachine[];\n      initialContext?: Record<string, unknown>;\n    }\n  ) {\n    this.currentState = initialState;\n    this.transitions = transitions;\n    this.guards = new Map(options?.guards?.map(g => [g.name, g]) ?? []);\n    this.actions = new Map(options?.actions?.map(a => [a.name, a]) ?? []);\n    this.nested = new Map(options?.nested?.map(n => [n.parentState, n]) ?? []);\n    this.context = options?.initialContext ?? {};\n    this.history = [];\n  }\n\n  public send(event: Event): boolean {\n    const candidates = this.transitions.filter(\n      (t) => t.from === this.currentState && t.event === event\n    );\n    if (candidates.length === 0) {\n      throw new Error(`No transition from '${this.currentState}' on '${event}'`);\n    }\n    for (const transition of candidates) {\n      if (transition.guard) {\n        const guard = this.guards.get(transition.guard);\n        if (!guard || !guard.condition(this.context)) continue;\n      }\n      const prevState = this.currentState;\n      this.currentState = transition.to;\n      if (transition.actions) {\n        for (const actionName of transition.actions) {\n          const action = this.actions.get(actionName);\n          if (action) action.execute(this.context);\n        }\n      }\n      this.history.push({ from: prevState, to: transition.to, event, timestamp: new Date() });\n      return true;\n    }\n    throw new Error(`Guard conditions not met for any transition from '${this.currentState}' on '${event}'`);\n  }\n\n  public getState(): State {\n    return this.currentState;\n  }\n\n  public setContext(key: string, value: unknown): void {\n    this.context[key] = value;\n  }\n\n  public getContext(key: string): unknown {\n    return this.context[key];\n  }\n\n  public getHistory(): { from: State; to: State; event: Event; timestamp: Date }[] {\n    return [...this.history];\n  }\n\n  public can(event: Event): boolean {\n    const candidates = this.transitions.filter(\n      (t) => t.from === this.currentState && t.event === event\n    );\n    for (const t of candidates) {\n      if (!t.guard) return true;\n      const guard = this.guards.get(t.guard);\n      if (guard?.condition(this.context)) return true;\n    }\n    return false;\n  }\n\n  public getValidEvents(): Event[] {\n    return this.transitions\n      .filter(t => t.from === this.currentState)\n      .map(t => t.event)\n      .filter((v, i, a) => a.indexOf(v) === i);\n  }\n\n  public isInNestedState(parentState: State, nestedState: State): boolean {\n    const nestedSM = this.nested.get(parentState);\n    if (!nestedSM) return false;\n    if (this.currentState === parentState) {\n      return nestedSM.initialState === nestedState;\n    }\n    return this.currentState === `${parentState}.${nestedState}`;\n  }\n\n  public dotFormat(): string {\n    const lines: string[] = ['digraph StateMachine {'];\n    const stateSet = new Set<State>();\n    for (const t of this.transitions) {\n      stateSet.add(t.from);\n      stateSet.add(t.to);\n    }\n    for (const state of stateSet) {\n      const isCurrent = state === this.currentState;\n      lines.push(`  \"${state}\" [${isCurrent ? 'style=filled,fillcolor=lightyellow,' : ''}shape=box];`);\n    }\n    for (const t of this.transitions) {\n      const label = [t.event, t.guard ? `[${t.guard}]` : '', t.actions ? `/${t.actions.join(',')}` : ''].filter(Boolean).join(' ');\n      lines.push(`  \"${t.from}\" -> \"${t.to}\" [label=\"${label}\"];`);\n    }\n    lines.push('}');\n    return lines.join('\\n');\n  }\n}\n\n// Usage - Book state machine with guards\nconst sm = new StateMachineEngine('available', [\n  { from: 'available', to: 'onLoan', event: 'borrow', guard: 'patronEligible', actions: ['recordLoan'] },\n  { from: 'available', to: 'reserved', event: 'reserve', actions: ['notifyPatron'] },\n  { from: 'onLoan', to: 'overdue', event: 'daysPass', guard: 'isOverdue', actions: ['chargeFine'] },\n  { from: 'onLoan', to: 'available', event: 'return', actions: ['clearLoan'] },\n  { from: 'overdue', to: 'available', event: 'return', guard: 'finePaid', actions: ['clearLoan', 'clearFines'] },\n  { from: 'overdue', to: 'lost', event: 'reportLost', actions: ['markLost', 'chargeReplacement'] },\n  { from: 'reserved', to: 'onLoan', event: 'borrow', guard: 'patronEligible', actions: ['recordLoan'] },\n  { from: 'reserved', to: 'available', event: 'cancelReservation', actions: ['notifyNextPatron'] },\n], {\n  guards: [\n    { name: 'patronEligible', condition: (ctx) => (ctx.maxLoans as number) > 0 },\n    { name: 'isOverdue', condition: (ctx) => (ctx.daysSinceDue as number) > 0 },\n    { name: 'finePaid', condition: (ctx) => (ctx.outstandingFine as number) === 0 },\n  ],\n  actions: [\n    { name: 'recordLoan', execute: (ctx) => { ctx.activeLoans = (ctx.activeLoans as number ?? 0) + 1; } },\n    { name: 'clearLoan', execute: (ctx) => { ctx.activeLoans = (ctx.activeLoans as number ?? 1) - 1; } },\n    { name: 'chargeFine', execute: (ctx) => { ctx.outstandingFine = (ctx.outstandingFine as number ?? 0) + 1; } },\n    { name: 'clearFines', execute: (ctx) => { ctx.outstandingFine = 0; } },\n    { name: 'notifyPatron', execute: () => { console.log('Notification sent'); } },\n    { name: 'notifyNextPatron', execute: () => { console.log('Next in queue notified'); } },\n    { name: 'markLost', execute: (ctx) => { ctx.status = 'lost'; } },\n    { name: 'chargeReplacement', execute: (ctx) => { ctx.replacementFee = 50; } },\n  ],\n  initialContext: { maxLoans: 3, activeLoans: 0, outstandingFine: 0 },\n});\n\nconsole.log(sm.getState()); // available\nconsole.log(sm.can('borrow')); // true\nsm.send('borrow');\nconsole.log(sm.getState()); // onLoan\nconsole.log(sm.getValidEvents()); // ['daysPass', 'return', 'reportLost']\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-model-consistency-checker",
      children: "Example 4: Model Consistency Checker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface UMLClass {\n  name: string;\n  attributes: string[];\n  methods: string[];\n  associations: string[];\n}\n\ninterface SequenceStep {\n  from: string;\n  to: string;\n  message: string;\n}\n\ninterface StateDefinition {\n  states: string[];\n  transitions: { from: string; to: string; event: string }[];\n}\n\nclass ModelConsistencyChecker {\n  private errors: string[] = [];\n  private warnings: string[] = [];\n\n  public checkClassStructure(cls: UMLClass): void {\n    if (!cls.name) this.errors.push('Class must have a name');\n    if (cls.attributes.length === 0) this.warnings.push(`Class '${cls.name}' has no attributes`);\n    if (cls.methods.length === 0) this.warnings.push(`Class '${cls.name}' has no methods`);\n  }\n\n  public checkSequenceConsistency(classes: UMLClass[], steps: SequenceStep[]): void {\n    const classNames = new Set(classes.map(c => c.name));\n    for (const step of steps) {\n      if (!classNames.has(step.from)) {\n        this.errors.push(`Sequence '${step.message}': sender '${step.from}' not found in class model`);\n      }\n      if (!classNames.has(step.to)) {\n        this.errors.push(`Sequence '${step.message}': receiver '${step.to}' not found in class model`);\n      }\n    }\n  }\n\n  public checkStateCompleteness(sm: StateDefinition): void {\n    if (sm.states.length < 2) this.errors.push('State machine must have at least 2 states');\n    for (const state of sm.states) {\n      const hasIncoming = sm.transitions.some(t => t.to === state);\n      const hasOutgoing = sm.transitions.some(t => t.from === state);\n      if (!hasIncoming && state !== sm.states[0]) {\n        this.warnings.push(`State '${state}' has no incoming transitions (unreachable)`);\n      }\n      if (!hasOutgoing && state !== sm.states[sm.states.length - 1]) {\n        this.warnings.push(`State '${state}' has no outgoing transitions (dead end)`);\n      }\n    }\n    for (const t of sm.transitions) {\n      if (!sm.states.includes(t.from)) this.errors.push(`Transition '${t.event}' references unknown source '${t.from}'`);\n      if (!sm.states.includes(t.to)) this.errors.push(`Transition '${t.event}' references unknown target '${t.to}'`);\n    }\n  }\n\n  public checkNamesConsistent(className: string, sequenceParticipants: string[]): void {\n    if (!sequenceParticipants.includes(className)) {\n      this.warnings.push(`Class '${className}' never appears in sequence diagrams`);\n    }\n  }\n\n  public getReport(): { errors: string[]; warnings: string[]; valid: boolean; summary: string } {\n    const valid = this.errors.length === 0;\n    const summary = valid\n      ? `✅ Model consistent: ${this.warnings.length} warnings`\n      : `❌ Model inconsistent: ${this.errors.length} errors, ${this.warnings.length} warnings`;\n    return { errors: this.errors, warnings: this.warnings, valid, summary };\n  }\n}\n\n// Usage\nconst checker = new ModelConsistencyChecker();\nchecker.checkClassStructure({ name: 'User', attributes: ['id', 'name'], methods: ['login()'], associations: ['Account'] });\nchecker.checkSequenceConsistency(\n  [{ name: 'User', attributes: [], methods: [], associations: [] }],\n  [{ from: 'User', to: 'AuthService', message: 'login()' }]\n);\nchecker.checkStateCompleteness({\n  states: ['active', 'inactive', 'banned'],\n  transitions: [\n    { from: 'active', to: 'inactive', event: 'deactivate' },\n    { from: 'inactive', to: 'active', event: 'activate' },\n    { from: 'active', to: 'banned', event: 'ban' },\n  ],\n});\nconsole.log(checker.getReport());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-5-uml-to-typescript-converter-with-design-pattern-detection",
      children: "Example 5: UML-to-TypeScript Converter with Design Pattern Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface UMLAttribute {\n  name: string;\n  type: string;\n  visibility: '+' | '-' | '#';\n  isStatic: boolean;\n}\n\ninterface UMLMethod {\n  name: string;\n  params: { name: string; type: string }[];\n  returnType: string;\n  visibility: '+' | '-' | '#';\n  isStatic: boolean;\n}\n\ninterface UMLRelationship {\n  type: 'association' | 'aggregation' | 'composition' | 'inheritance' | 'dependency' | 'realization';\n  target: string;\n  multiplicitySource?: string;\n  multiplicityTarget?: string;\n}\n\ninterface UMLClassDefinition {\n  name: string;\n  attributes: UMLAttribute[];\n  methods: UMLMethod[];\n  relationships: UMLRelationship[];\n  stereotype?: string;\n}\n\nclass UMLToTypeScriptConverter {\n  public convert(cls: UMLClassDefinition): string {\n    const lines: string[] = [];\n    const stereotype = cls.stereotype;\n\n    if (stereotype === 'interface' || stereotype === 'protocol') {\n      lines.push(`interface ${cls.name} {`);\n      for (const attr of cls.attributes) {\n        lines.push(`  ${attr.name}: ${attr.type};`);\n      }\n      for (const method of cls.methods) {\n        lines.push(`  ${method.name}(${method.params.map(p => `${p.name}: ${p.type}`).join(', ')}): ${method.returnType};`);\n      }\n      lines.push('}');\n      return lines.join('\\n');\n    }\n\n    if (stereotype === 'enum') {\n      lines.push(`enum ${cls.name} {`);\n      for (const attr of cls.attributes) {\n        lines.push(`  ${attr.name} = '${attr.name}',`);\n      }\n      lines.push('}');\n      return lines.join('\\n');\n    }\n\n    const extendsClause = cls.relationships\n      .filter(r => r.type === 'inheritance')\n      .map(r => r.target);\n    const implementsClause = cls.relationships\n      .filter(r => r.type === 'realization')\n      .map(r => r.target);\n\n    const ext = extendsClause.length > 0 ? ` extends ${extendsClause[0]}` : '';\n    const impl = implementsClause.length > 0 ? ` implements ${implementsClause.join(', ')}` : '';\n    lines.push(`class ${cls.name}${ext}${impl} {`);\n\n    for (const attr of cls.attributes) {\n      const access = attr.visibility === '-' ? 'private' : attr.visibility === '#' ? 'protected' : 'public';\n      const staticKw = attr.isStatic ? ' static' : '';\n      lines.push(`  ${access}${staticKw} ${attr.name}: ${attr.type};`);\n    }\n\n    const paramAttrs = cls.attributes.filter(a => a.visibility === '-');\n    if (paramAttrs.length > 0) {\n      lines.push('');\n      lines.push(`  constructor(${paramAttrs.map(a => `private ${a.name}: ${a.type}`).join(', ')}) {}`);\n    }\n\n    for (const method of cls.methods) {\n      const access = method.visibility === '-' ? 'private' : method.visibility === '#' ? 'protected' : 'public';\n      const staticKw = method.isStatic ? ' static' : '';\n      const params = method.params.map(p => `${p.name}: ${p.type}`).join(', ');\n      lines.push(`  ${access}${staticKw} ${method.name}(${params}): ${method.returnType} {`);\n      lines.push('    // TODO: implement');\n      lines.push('  }');\n    }\n\n    lines.push('}');\n    return lines.join('\\n');\n  }\n\n  public detectDesignPattern(classes: UMLClassDefinition[]): string[] {\n    const patterns: string[] = [];\n    for (const cls of classes) {\n      // Singleton: private constructor, static getInstance\n      const hasPrivateConstructor = cls.attributes.some(a => a.name === 'instance' && a.isStatic);\n      const hasGetInstance = cls.methods.some(m => m.name === 'getInstance' && m.isStatic);\n      if (hasPrivateConstructor && hasGetInstance) patterns.push(`${cls.name}: Singleton`);\n\n      // Factory: has create method returning product type\n      const hasFactoryMethod = cls.methods.some(m => m.name.startsWith('create') || m.name === 'factory');\n      if (hasFactoryMethod) patterns.push(`${cls.name}: Factory Method`);\n\n      // Observer: has attach/detach/notify\n      const hasAttach = cls.methods.some(m => m.name === 'attach');\n      const hasDetach = cls.methods.some(m => m.name === 'detach');\n      const hasNotify = cls.methods.some(m => m.name === 'notify');\n      if (hasAttach && hasDetach && hasNotify) patterns.push(`${cls.name}: Observer`);\n    }\n    return patterns;\n  }\n}\n\n// Usage\nconst converter = new UMLToTypeScriptConverter();\nconst userClass: UMLClassDefinition = {\n  name: 'User',\n  attributes: [\n    { name: 'id', type: 'string', visibility: '-', isStatic: false },\n    { name: 'email', type: 'string', visibility: '+', isStatic: false },\n    { name: 'instance', type: 'User', visibility: '-', isStatic: true },\n  ],\n  methods: [\n    { name: 'getInstance', params: [], returnType: 'User', visibility: '+', isStatic: true },\n    { name: 'login', params: [{ name: 'password', type: 'string' }], returnType: 'boolean', visibility: '+', isStatic: false },\n  ],\n  relationships: [{ type: 'inheritance', target: 'BaseUser' }],\n};\nconsole.log(converter.convert(userClass));\nconst patterns = converter.detectDesignPattern([userClass]);\nconsole.log('Detected patterns:', patterns);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "System modelling provides multiple complementary perspectives on a software system, each highlighting different aspects while suppressing others. UML remains the standard modelling language with thirteen diagram types divided into structure and behaviour diagrams. Use case diagrams establish system boundaries and identify actors and their goals. Class diagrams define the static structure with classes, relationships, and multiplicities. Sequence diagrams detail interactions over time with combined fragments for alternatives, options, loops, and parallel execution. Activity diagrams model control flow including concurrent execution and swimlanes. State machine diagrams capture lifecycle behaviour with guards, actions, events, and nested states."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deployment and component diagrams bridge the gap between logical design and physical infrastructure. Data flow diagrams and ER diagrams remain valuable for data-oriented modelling. OCL adds formal precision to UML models through invariants, preconditions, and postconditions. Model-driven engineering transforms models from documentation artefacts into primary development artefacts through platform-independent and platform-specific modelling. In modern practice, tools that generate TypeScript from UML models — and vice versa — help maintain consistency between design and implementation. Consistency checking across diagram types ensures that classes referenced in sequence diagrams exist in class diagrams and that state machines have reachable states and complete transitions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Model what matters"
        }), " — not every detail needs a model; focus on complex, critical, or frequently misunderstood aspects"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keep diagrams consistent"
        }), " — the same class, actor, or state should appear identically across all diagrams"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use the right diagram for the audience"
        }), " — use case diagrams for stakeholders, class diagrams for developers, deployment diagrams for operations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Don't over-model"
        }), " — excessive detail makes diagrams hard to read; use multiple levels of abstraction and zoom in on complexity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Models should be living documents"
        }), " — update them as the code evolves, or they quickly become misleading and ignored"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Combine UML with code generation"
        }), " — generate skeleton code from class diagrams and reverse-engineer diagrams from code to maintain consistency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use consistency checkers"
        }), " — automate validation that sequence diagram participants exist in class models and state transitions reference valid states"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consider the model-driven engineering pipeline"
        }), " — for large systems, invest in model transformations (PIM → PSM → Code) to automate tedious translation work"]
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
            children: "Activity diagrams model control flow across actors using swimlanes and decision nodes."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "<<include>>"
            }), " means the base use case always incorporates the included use case's behaviour."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In composition (filled diamond), the part's lifecycle depends on the whole; the part cannot exist independently."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model checking faces the state explosion problem — the number of states grows exponentially with system components."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A Platform-Independent Model (PIM) describes the system without platform-specific implementation details."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: Which UML diagram is best suited for showing the flow of control across multiple actors?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Class diagram"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Activity diagram"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Component diagram"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Deployment diagram"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q2: What does the UML relationship ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<<include>>"
        }), " mean in a use case diagram?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) One use case optionally extends another"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) One use case always includes the behaviour of another"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) One actor specialises another"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) A use case inherits from an actor"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: In a class diagram, composition (filled diamond) differs from aggregation (hollow diamond) because:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Composition implies the part cannot exist without the whole"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Composition implies shared ownership"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Aggregation implies the part cannot exist without the whole"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) There is no difference"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: What is the primary challenge of model checking in formal verification?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It requires a formal specification language"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The state explosion problem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) It cannot handle concurrent systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) It requires manual proof construction"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: What is the purpose of a PIM in Model-Driven Architecture?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) To describe the system independently of the implementation platform"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) To specify deployment topology"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) To define database schemas"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) To generate test cases"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-use-case-diagram-for-an-e-commerce-system",
      children: "Exercise 1: Use Case Diagram for an E-Commerce System"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click for solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Draw a use case diagram for an e-commerce platform with the following actors: Customer, Admin, Payment Gateway, Shipping Provider. Include at least 10 use cases with include/extend relationships."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution — Use Cases:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Customer: Browse Products, Search Products, Add to Cart, Checkout, View Order History, Track Order, Write Review"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Admin: Manage Products, Process Refunds, Generate Reports"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Include: Checkout → Process Payment, Checkout → Update Inventory"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Extend: Browse Products → Write Review, Track Order → Contact Support"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-full-uml-model-for-a-library-system",
      children: "Exercise 2: Full UML Model for a Library System"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click for solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Develop a class diagram, sequence diagram, and state machine diagram for a library book borrowing system. The class diagram should include Book, Patron, Loan, Fine, and Reservation classes. The sequence diagram should show the borrow book flow. The state machine should model the lifecycle of a book."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution — Class Diagram Key Elements:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Book: isbn, title, author, status (enum), publicationYear"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Patron: patronId, name, email, maxLoans"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Loan: loanId, loanDate, dueDate, returnDate, fineAmount"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Fine: fineId, amount, reason, paid"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Reservation: reservationId, reservationDate, expiryDate, status"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Relationships: Patron 1→* Loan, Book 1→* Loan, Loan 1→* Fine, Patron 1→* Reservation, Book 1→* Reservation"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "State Machine for Book:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Available → borrow() → OnLoan → return() → Available"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Available → reserve() → Reserved → borrow() → OnLoan"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Available → reserve() → Reserved → cancelReservation() → Available"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "OnLoan → daysPass() → Overdue → return() + payFine() → Available"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Overdue → reportLost() → Lost → withdraw() → [*]"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-model-consistency-checking",
      children: "Exercise 3: Model Consistency Checking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click for solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Given the following models, identify all inconsistencies between them:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Class Model:"
        }), " { User, AuthService, Database }\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Sequence Steps:"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "User → AuthService: login()"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "AuthService → UserDB: query()"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "UserDB → AuthService: results()"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "AuthService → User: token"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution — Inconsistencies Found:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Step 2: 'UserDB' is not in the class model (only 'Database' exists)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Step 3: 'UserDB' returned to 'AuthService' — class mismatch"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Step 4: 'User' should be 'User' — no issue here"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The class 'Database' exists but never appears in any interaction"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Correction options:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Rename 'Database' to 'UserDB' in the class model"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Or change sequence steps to reference 'Database' instead of 'UserDB'"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-state-machine-with-nested-states",
      children: "Exercise 4: State Machine with Nested States"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click for solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Design a state machine for an e-commerce order with these states: Pending, Confirmed, Processing, Shipped, Delivered, Cancelled, Refunded. Use nested states for the Processing state (Picking, Packing, QualityCheck). Implement the state machine in TypeScript with guards for cancellation (only before Shipped)."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution:"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "const orderSM = new StateMachineEngine('pending', [\n  { from: 'pending', to: 'confirmed', event: 'confirm' },\n  { from: 'confirmed', to: 'processing', event: 'startProcessing' },\n  { from: 'processing.Picking', to: 'processing.Packing', event: 'pickComplete' },\n  { from: 'processing.Packing', to: 'processing.QualityCheck', event: 'packComplete' },\n  { from: 'processing.QualityCheck', to: 'shipped', event: 'qualityPass', guard: 'qualityOk' },\n  { from: 'processing.QualityCheck', to: 'processing.Picking', event: 'qualityFail', actions: ['logQualityIssue'] },\n  { from: 'shipped', to: 'delivered', event: 'confirmDelivery' },\n  { from: 'pending', to: 'cancelled', event: 'cancel' },\n  { from: 'confirmed', to: 'cancelled', event: 'cancel' },\n  { from: 'processing', to: 'cancelled', event: 'cancel' },\n  { from: 'cancelled', to: 'refunded', event: 'processRefund', actions: ['initiateRefund'] },\n], {\n  guards: [\n    { name: 'qualityOk', condition: (ctx) => (ctx.qualityScore as number) >= 80 },\n  ],\n  actions: [\n    { name: 'logQualityIssue', execute: (ctx) => { ctx.issues = (ctx.issues as number ?? 0) + 1; } },\n    { name: 'initiateRefund', execute: (ctx) => { ctx.refundStatus = 'processing'; } },\n  ],\n  nested: [{\n    parentState: 'processing',\n    initialState: 'Picking',\n    states: ['Picking', 'Packing', 'QualityCheck'],\n    transitions: [\n      { from: 'Picking', to: 'Packing', event: 'pickComplete' },\n      { from: 'Packing', to: 'QualityCheck', event: 'packComplete' },\n      { from: 'QualityCheck', to: 'Picking', event: 'qualityFail' },\n    ],\n  }],\n});\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-complete-typescript-model-implementation",
      children: "Exercise 5: Complete TypeScript Model Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click for solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "A hospital information system needs to model Patients, Doctors, Appointments, and Medical Records. Create:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "A UML class diagram showing relationships and multiplicities"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "TypeScript implementations of all classes"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "A sequence diagram for the \"Book Appointment\" use case"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "A state machine for the lifecycle of an Appointment (Available, Booked, Confirmed, InProgress, Completed, Cancelled, NoShow)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution — TypeScript Implementation:"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "enum Gender { MALE = 'MALE', FEMALE = 'FEMALE', OTHER = 'OTHER' }\nenum AppointmentStatus { AVAILABLE = 'AVAILABLE', BOOKED = 'BOOKED', CONFIRMED = 'CONFIRMED', IN_PROGRESS = 'IN_PROGRESS', COMPLETED = 'COMPLETED', CANCELLED = 'CANCELLED', NO_SHOW = 'NO_SHOW' }\n\nclass Patient {\n  constructor(\n    public readonly patientId: string,\n    public name: string,\n    public dateOfBirth: Date,\n    public gender: Gender,\n    public contactNumber: string,\n    public medicalRecords: MedicalRecord[] = [],\n    public appointments: Appointment[] = []\n  ) {}\n}\n\nclass Doctor {\n  constructor(\n    public readonly doctorId: string,\n    public name: string,\n    public specialization: string,\n    public availability: { dayOfWeek: number; startTime: string; endTime: string }[],\n    public appointments: Appointment[] = []\n  ) {}\n}\n\nclass Appointment {\n  constructor(\n    public readonly appointmentId: string,\n    public patient: Patient,\n    public doctor: Doctor,\n    public dateTime: Date,\n    public status: AppointmentStatus,\n    public notes?: string\n  ) {}\n}\n\nclass MedicalRecord {\n  constructor(\n    public readonly recordId: string,\n    public patient: Patient,\n    public doctor: Doctor,\n    public date: Date,\n    public diagnosis: string,\n    public prescription: string[],\n    public notes: string\n  ) {}\n}\n\nclass HospitalSystem {\n  private appointmentSM: StateMachineEngine;\n\n  constructor() {\n    this.appointmentSM = new StateMachineEngine('available', [\n      { from: 'available', to: 'booked', event: 'book' },\n      { from: 'booked', to: 'confirmed', event: 'confirm', guard: 'patientVerified' },\n      { from: 'booked', to: 'cancelled', event: 'cancel' },\n      { from: 'confirmed', to: 'inProgress', event: 'start' },\n      { from: 'inProgress', to: 'completed', event: 'complete' },\n      { from: 'inProgress', to: 'noShow', event: 'miss', guard: 'timeElapsed' },\n      { from: 'confirmed', to: 'cancelled', event: 'cancel' },\n    ], {\n      guards: [\n        { name: 'patientVerified', condition: (ctx) => Boolean(ctx.patientRecord) },\n        { name: 'timeElapsed', condition: (ctx) => (ctx.minutesPast as number) > 15 },\n      ],\n      actions: [\n        { name: 'notifyPatient', execute: () => console.log('Notification sent') },\n      ],\n      initialContext: { patientRecord: true, minutesPast: 0 },\n    });\n  }\n}\n"
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