"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[7394],{

/***/ 5457
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
const site_docs_courses_software_engineering_03_system_modeling_md_f61_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/software-engineering/03-system-modeling","title":"System Modelling","description":"Learning Objectives","source":"@site/docs/courses/software-engineering/03-system-modeling.md","sourceDirName":"courses/software-engineering","slug":"/software-engineering/03-system-modeling","permalink":"/ai-engineering-journey/software-engineering/03-system-modeling","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"03-system-modeling","slug":"/software-engineering/03-system-modeling","title":"System Modelling","sidebar_label":"System Modelling","sidebar_position":3},"sidebar":"course-software-engineering","previous":{"title":"Requirements Engineering","permalink":"/ai-engineering-journey/software-engineering/02-requirements"},"next":{"title":"Architectural Design","permalink":"/ai-engineering-journey/software-engineering/04-architectural-design"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
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
    blockquote: "blockquote",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "graph TD\r\n    subgraph \"Modelling Perspectives\"\r\n        EXT[External Perspective] --> CTX[Context & Environment<br/>Use Case Diagrams]\r\n        INT[Interaction Perspective] --> SEQ[Sequences & Messages<br/>Sequence, Communication]\r\n        STR[Structural Perspective] --> CLS[Classes & Data<br/>Class, Object, ER Diagrams]\r\n    end\r\n    subgraph \"UML 2.x Diagram Types\"\r\n        UML[UML 2.x<br/>13 Diagram Types] --> STR2[Structure Diagrams]\r\n        UML --> BEH[Behaviour Diagrams]\r\n        STR2 --> CLS2[Class Diagram]\r\n        STR2 --> CMP[Component Diagram]\r\n        STR2 --> DEP[Deployment Diagram]\r\n        STR2 --> OBJ[Object Diagram]\r\n        STR2 --> PKG[Package Diagram]\r\n        STR2 --> COMP[Composite Structure]\r\n        BEH --> UC[Use Case Diagram]\r\n        BEH --> SEQ2[Sequence Diagram]\r\n        BEH --> ACT[Activity Diagram]\r\n        BEH --> SM[State Machine Diagram]\r\n        BEH --> COMM[Communication Diagram]\r\n        BEH --> INT[Interaction Overview]\r\n        BEH --> TIM[Timing Diagram]\r\n    end\r\n\r\n    classDef pers fill:#3498db,stroke:#2980b9,color:#fff\r\n    classDef uml fill:#2ecc71,stroke:#27ae60,color:#fff\r\n    classDef struct fill:#f39c12,stroke:#d35400,color:#fff\r\n    classDef behav fill:#e74c3c,stroke:#c0392b,color:#fff\r\n    class EXT,INT,STR pers\r\n    class UML uml\r\n    class CLS2,CMP,DEP,OBJ,PKG,COMP struct\r\n    class UC,SEQ2,ACT,SM,COMM,INT,TIM behav"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "graph TD\r\n    subgraph \"Library System\"\r\n        UC1[Search Catalogue]\r\n        UC2[Borrow Book]\r\n        UC3[Return Book]\r\n        UC4[Manage Inventory]\r\n        UC5[Generate Reports]\r\n        UC6[Pay Fine]\r\n        UC7[Reserve Book]\r\n    end\r\n    A1[Patron] --> UC1\r\n    A1 --> UC2\r\n    A1 --> UC3\r\n    A1 --> UC6\r\n    A1 --> UC7\r\n    A2[Librarian] --> UC3\r\n    A2 --> UC4\r\n    A2 --> UC6\r\n    A3[Administrator] --> UC4\r\n    A3 --> UC5\r\n    UC4 -.->|<<extend>>| UC5\r\n    UC1 -.->|<<include>>| UC3\r\n    UC2 -.->|<<include>>| UC6\r\n    UC2 -.->|<<include>>| UC7\r\n\r\n    classDef actor fill:#e74c3c,stroke:#c0392b,color:#fff\r\n    classDef uc fill:#3498db,stroke:#2980b9,color:#fff\r\n    class A1,A2,A3 actor\r\n    class UC1,UC2,UC3,UC4,UC5,UC6,UC7 uc"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "classDiagram\r\n    class Book {\r\n        -isbn: string\r\n        -title: string\r\n        -author: string\r\n        -publicationYear: int\r\n        -status: BookStatus\r\n        +getDetails(): BookDetails\r\n        +changeStatus(newStatus: BookStatus): void\r\n        +isAvailable(): boolean\r\n    }\r\n    class Patron {\r\n        -patronId: string\r\n        -name: string\r\n        -email: string\r\n        -maxLoans: int\r\n        +borrowBook(book: Book): Loan\r\n        +returnBook(book: Book): void\r\n        +getLoanHistory(): Loan[]\r\n        +getOutstandingFines(): number\r\n    }\r\n    class Loan {\r\n        -loanId: string\r\n        -loanDate: Date\r\n        -dueDate: Date\r\n        -returnDate: Date\r\n        -fineAmount: float\r\n        +isOverdue(): boolean\r\n        +calculateFine(): number\r\n        +payFine(amount: number): void\r\n    }\r\n    class Library {\r\n        -name: string\r\n        -location: string\r\n        +searchCatalogue(query: string): Book[]\r\n        +registerPatron(patron: Patron): void\r\n        +getOverdueLoans(): Loan[]\r\n    }\r\n    class Fine {\r\n        -amount: float\r\n        -reason: string\r\n        -paid: boolean\r\n        +processPayment(): void\r\n    }\r\n    Library \"1\" --> \"*\" Book : contains\r\n    Library \"1\" --> \"*\" Patron : serves\r\n    Patron \"1\" --> \"*\" Loan : makes\r\n    Book \"1\" --> \"*\" Loan : subject of\r\n    Loan \"1\" --> \"*\" Fine : incurs\r\n    Patron \"1\" --> \"*\" Fine : owes\r\n\r\n    class BookStatus {\r\n        <<enumeration>>\r\n        AVAILABLE\r\n        ON_LOAN\r\n        RESERVED\r\n        LOST\r\n        WITHDRAWN\r\n    }\r\n    Book --> BookStatus"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "sequenceDiagram\r\n    participant P as Patron\r\n    participant UI as SearchUI\r\n    participant Ctrl as SearchController\r\n    participant DB as CatalogueDB\r\n    participant PAY as PaymentGateway\r\n    \r\n    P->>UI: enter search query\r\n    UI->>Ctrl: search(query)\r\n    Ctrl->>DB: findBooks(query)\r\n    DB-->>Ctrl: matching books\r\n    Ctrl-->>UI: search results\r\n    UI-->>P: display results\r\n    \r\n    alt Book available\r\n        P->>UI: select book & borrow\r\n        UI->>Ctrl: borrowBook(bookId, patronId)\r\n        Ctrl->>DB: checkAvailability(bookId)\r\n        DB-->>Ctrl: available\r\n        Ctrl->>DB: createLoan(patronId, bookId)\r\n        DB-->>Ctrl: loan created\r\n        \r\n        par Payment and Notification\r\n            Ctrl->>PAY: processFine(patronId)\r\n            PAY-->>Ctrl: payment status\r\n            Ctrl->>UI: send confirmation\r\n        end\r\n        \r\n        UI-->>P: \"Book borrowed successfully\"\r\n        \r\n    else Book on loan\r\n        UI-->>P: \"Book is currently on loan\"\r\n        opt Reserve book\r\n            P->>UI: request reservation\r\n            UI->>Ctrl: reserveBook(bookId, patronId)\r\n            Ctrl->>DB: createReservation(bookId, patronId)\r\n            DB-->>Ctrl: reservation created\r\n            UI-->>P: \"You will be notified when available\"\r\n        end\r\n        \r\n    else Book reserved by others\r\n        UI-->>P: \"Book is reserved for another patron\"\r\n    end"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "graph TD\r\n    START((Start)) --> A[Receive Order]\r\n    A --> B{Validate Order}\r\n    B -->|Valid| C[Check Inventory]\r\n    B -->|Invalid| D[Reject Order]\r\n    D --> END((End))\r\n    C --> E{In Stock?}\r\n    E -->|Yes| F[Process Payment]\r\n    E -->|No| G[Order from Supplier]\r\n    G --> H[Wait for Delivery]\r\n    H --> C\r\n    F --> I[Pack Order]\r\n    I --> J[Ship Order]\r\n    J --> K[Send Confirmation]\r\n    K --> L[Update Inventory]\r\n    L --> END\r\n\r\n    classDef start fill:#2c3e50,stroke:#2c3e50,color:#fff\r\n    classDef act fill:#3498db,stroke:#2980b9,color:#fff\r\n    classDef decision fill:#f39c12,stroke:#d35400,color:#fff\r\n    classDef terminate fill:#e74c3c,stroke:#c0392b,color:#fff\r\n    class START start\r\n    class A,C,F,G,H,I,J,K,L act\r\n    class B,E decision\r\n    class D,END terminate"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "stateDiagram-v2\r\n    [*] --> Available\r\n    Available --> OnLoan: borrow()\r\n    OnLoan --> Overdue: 14 days elapsed\r\n    OnLoan --> Available: return()\r\n    Overdue --> Available: return() + payFine()\r\n    Overdue --> Lost: reportLost()\r\n    Lost --> [*]: withdraw()\r\n    Available --> Reserved: reserve()\r\n    Reserved --> OnLoan: borrow()\r\n    Reserved --> Available: cancelReservation()\r\n    \r\n    state OnLoan {\r\n        [*] --> Current\r\n        Current --> Overdue: due date passed\r\n    }\r\n    \r\n    state Overdue {\r\n        [*] --> FirstNotice\r\n        FirstNotice --> SecondNotice: 7 days\r\n        SecondNotice --> FinalNotice: 14 days\r\n        FinalNotice --> Collections: 30 days\r\n    }\r\n\r\n    note right of Available\r\n        Guards:\r\n        - borrow: patron.eligible\r\n        - reserve: book.onLoan or book.available\r\n    end note"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "graph TD\r\n    subgraph \"Web Tier\"\r\n        WEB[Web Application<br/>React SPA] -->|HTTP/REST| API[API Gateway<br/>Express.js]\r\n    end\r\n    subgraph \"Application Tier\"\r\n        API --> AUTH[Auth Service<br/>:8081]\r\n        API --> ORDER[Order Service<br/>:8082]\r\n        API --> PAY[Payment Service<br/>:8083]\r\n        API --> NOTIFY[Notification Service<br/>:8084]\r\n        ORDER -->|RabbitMQ| NOTIFY\r\n    end\r\n    subgraph \"Data Tier\"\r\n        ORDER --> DB[(Order DB<br/>PostgreSQL)]\r\n        PAY --> PDB[(Payment DB<br/>PostgreSQL)]\r\n        AUTH --> UDB[(User DB<br/>MySQL)]\r\n        NOTIFY --> NDB[(Notification DB<br/>MongoDB)]\r\n    end\r\n    subgraph \"External Systems\"\r\n        PAY --> PSP[Payment Gateway<br/>Stripe API]\r\n        NOTIFY --> SMTP[SMTP Server<br/>SendGrid]\r\n    end\r\n\r\n    classDef web fill:#3498db,stroke:#2980b9,color:#fff\r\n    classDef app fill:#2ecc71,stroke:#27ae60,color:#fff\r\n    classDef data fill:#e67e22,stroke:#d35400,color:#fff\r\n    classDef ext fill:#e74c3c,stroke:#c0392b,color:#fff\r\n    class WEB,API web\r\n    class AUTH,ORDER,PAY,NOTIFY app\r\n    class DB,PDB,UDB,NDB data\r\n    class PSP,SMTP ext"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "graph TD\r\n    subgraph \"Production Environment — us-east-1\"\r\n        subgraph \"Load Balancer\"\r\n            LB[ALB:443 HTTPS]\r\n        end\r\n        subgraph \"App Cluster — Auto Scaling Group\"\r\n            A1[EC2 App Server 1<br/>Node.js 18 :8080]\r\n            A2[EC2 App Server 2<br/>Node.js 18 :8080]\r\n            A3[EC2 App Server 3<br/>Node.js 18 :8080]\r\n        end\r\n        subgraph \"Database Cluster — RDS Multi-AZ\"\r\n            DB1[(Primary<br/>PostgreSQL 16 :5432<br/>us-east-1a)]\r\n            DB2[(Standby Replica<br/>PostgreSQL 16 :5432<br/>us-east-1b)]\r\n        end\r\n        subgraph \"Cache Layer — ElastiCache\"\r\n            REDIS[(Redis 7<br/>:6379<br/>Cluster Mode Enabled)]\r\n        end\r\n        subgraph \"CDN\"\r\n            CF[CloudFront<br/>Static Assets]\r\n        end\r\n    end\r\n    INTERNET((Internet)) --> CF\r\n    INTERNET --> LB\r\n    LB --> A1\r\n    LB --> A2\r\n    LB --> A3\r\n    A1 --> DB1\r\n    A2 --> DB1\r\n    A3 --> DB1\r\n    DB1 --> DB2\r\n    A1 --> REDIS\r\n    A2 --> REDIS\r\n    A3 --> REDIS\r\n    CF --> S3[S3 Bucket<br/>Static Files]\r\n\r\n    classDef internet fill:#e74c3c,stroke:#c0392b,color:#fff\r\n    classDef lb fill:#f39c12,stroke:#d35400,color:#fff\r\n    classDef app fill:#3498db,stroke:#2980b9,color:#fff\r\n    classDef db fill:#2ecc71,stroke:#27ae60,color:#fff\r\n    classDef cache fill:#9b59b6,stroke:#8e44ad,color:#fff\r\n    classDef cdn fill:#1abc9c,stroke:#16a085,color:#fff\r\n    class INTERNET internet\r\n    class LB lb\r\n    class A1,A2,A3 app\r\n    class DB1,DB2 db\r\n    class REDIS cache\r\n    class CF,CDN,S3 cdn"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "erDiagram\r\n    PATRON ||--o{ LOAN : makes\r\n    BOOK ||--o{ LOAN : \"subject of\"\r\n    BOOK ||--o{ RESERVATION : \"reserved in\"\r\n    PATRON ||--o{ RESERVATION : places\r\n    PATRON ||--o{ FINE : owes\r\n    LOAN ||--o{ FINE : incurs\r\n    PUBLISHER ||--o{ BOOK : publishes\r\n    AUTHOR }|--|{ BOOK : writes\r\n    \r\n    PATRON {\r\n        string patronId PK\r\n        string name\r\n        string email UK\r\n        string phone\r\n        int maxLoans\r\n        date registrationDate\r\n    }\r\n    BOOK {\r\n        string isbn PK\r\n        string title\r\n        int publicationYear\r\n        string status \"enum\"\r\n        string publisherId FK\r\n    }\r\n    LOAN {\r\n        string loanId PK\r\n        string patronId FK\r\n        string isbn FK\r\n        date loanDate\r\n        date dueDate\r\n        date returnDate \"nullable\"\r\n        float fineAmount \"default 0\"\r\n    }\r\n    RESERVATION {\r\n        string reservationId PK\r\n        string patronId FK\r\n        string isbn FK\r\n        date reservationDate\r\n        date expiryDate\r\n        string status \"enum\"\r\n    }\r\n    FINE {\r\n        string fineId PK\r\n        string loanId FK \"nullable\"\r\n        string patronId FK\r\n        float amount\r\n        string reason\r\n        boolean paid \"default false\"\r\n        date paidDate \"nullable\"\r\n    }"
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
        children: "// OCL: context Library inv: self.books->forAll(b | b.status <> BookStatus::LOST)\r\n// OCL: context Patron inv: self.loans->select(l | l.isOverdue())->size() <= 3\r\n// OCL: context Library::getAvailableBooks(): Set(Book) \r\n//      body: self.books->select(b | b.status = BookStatus::AVAILABLE)\r\n// OCL: context Patron inv: self.fines->select(f | f.paid = false)->sum(f.amount) <= 50\n"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "graph LR\r\n    CIM[Computation-Independent<br/>Model] -->|Business Modelling| PIM[Platform-Independent<br/>Model]\r\n    PIM -->|QVT Transformation| PSM[Platform-Specific<br/>Model]\r\n    PSM -->|Code Generation| CODE[Executable Code]\r\n    CODE -->|Reverse Engineering| PSM\r\n    PSM -->|Round-trip| PIM\r\n\r\n    classDef cim fill:#e74c3c,stroke:#c0392b,color:#fff\r\n    classDef pim fill:#f39c12,stroke:#d35400,color:#fff\r\n    classDef psm fill:#2ecc71,stroke:#27ae60,color:#fff\r\n    classDef code fill:#3498db,stroke:#2980b9,color:#fff\r\n    class CIM cim\r\n    class PIM pim\r\n    class PSM psm\r\n    class CODE code"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-classdiagramgenerator--from-typescript-source",
      children: "Example 1: ClassDiagramGenerator — from TypeScript Source"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ClassInfo {\r\n  name: string;\r\n  properties: { name: string; type: string; visibility: 'public' | 'private' | 'protected'; static: boolean }[];\r\n  methods: { name: string; params: string; returnType: string; visibility: 'public' | 'private' | 'protected'; static: boolean }[];\r\n  extends?: string;\r\n  implements?: string[];\r\n  isEnum?: boolean;\r\n  enumValues?: string[];\r\n}\r\n\r\nclass ClassDiagramGenerator {\r\n  private classes: ClassInfo[] = [];\r\n\r\n  public addClass(info: ClassInfo): void {\r\n    this.classes.push(info);\r\n  }\r\n\r\n  public addEnum(name: string, values: string[]): void {\r\n    this.classes.push({\r\n      name,\r\n      properties: [],\r\n      methods: [],\r\n      isEnum: true,\r\n      enumValues: values,\r\n    });\r\n  }\r\n\r\n  public generateUMLMermaid(): string {\r\n    const lines: string[] = ['```mermaid', 'classDiagram'];\r\n    for (const cls of this.classes) {\r\n      if (cls.isEnum) {\r\n        lines.push(`    class ${cls.name} {`);\r\n        lines.push('        <<enumeration>>');\r\n        for (const val of cls.enumValues ?? []) {\r\n          lines.push(`        ${val}`);\r\n        }\r\n        lines.push('    }');\r\n      } else {\r\n        lines.push(`    class ${cls.name} {`);\r\n        for (const prop of cls.properties) {\r\n          const vis = prop.visibility === 'private' ? '-' : prop.visibility === 'protected' ? '#' : '+';\r\n          lines.push(`        ${vis}${prop.name}: ${prop.type}${prop.static ? ' {static}' : ''}`);\r\n        }\r\n        for (const method of cls.methods) {\r\n          const vis = method.visibility === 'private' ? '-' : method.visibility === 'protected' ? '#' : '+';\r\n          lines.push(`        ${vis}${method.name}(${method.params}) ${method.returnType}${method.static ? ' {static}' : ''}`);\r\n        }\r\n        lines.push('    }');\r\n        if (cls.extends) {\r\n          lines.push(`    ${cls.name} --|> ${cls.extends}`);\r\n        }\r\n        if (cls.implements) {\r\n          for (const iface of cls.implements) {\r\n            lines.push(`    ${cls.name} ..|> ${iface}`);\r\n          }\r\n        }\r\n      }\r\n    }\r\n    lines.push('```');\r\n    return lines.join('\\n');\r\n  }\r\n\r\n  public generateTypeScriptCode(): string {\r\n    const lines: string[] = [];\r\n    for (const cls of this.classes) {\r\n      if (cls.isEnum) {\r\n        lines.push(`enum ${cls.name} {`);\r\n        for (const val of cls.enumValues ?? []) {\r\n          lines.push(`  ${val} = '${val}',`);\r\n        }\r\n        lines.push('}');\r\n      } else {\r\n        const ext = cls.extends ? ` extends ${cls.extends}` : '';\r\n        const impl = cls.implements && cls.implements.length > 0 ? ` implements ${cls.implements.join(', ')}` : '';\r\n        lines.push(`class ${cls.name}${ext}${impl} {`);\r\n        for (const prop of cls.properties) {\r\n          const acc = prop.visibility === 'private' ? 'private' : prop.visibility === 'protected' ? 'protected' : 'public';\r\n          lines.push(`  ${acc}${prop.static ? ' static' : ''} ${prop.name}: ${prop.type};`);\r\n        }\r\n        for (const method of cls.methods) {\r\n          const acc = method.visibility === 'private' ? 'private' : method.visibility === 'protected' ? 'protected' : 'public';\r\n          lines.push(`  ${acc}${method.static ? ' static' : ''} ${method.name}(${method.params}): ${method.returnType} {}`);\r\n        }\r\n        lines.push('}');\r\n      }\r\n      lines.push('');\r\n    }\r\n    return lines.join('\\n');\r\n  }\r\n\r\n  public static analyzeFromCode(code: string): ClassInfo[] {\r\n    const classes: ClassInfo[] = [];\r\n    const classRegex = /class\\s+(\\w+)(?:\\s+extends\\s+(\\w+))?(?:\\s+implements\\s+([\\w,\\s]+))?\\s*\\{/g;\r\n    const propRegex = /(private|protected|public)\\s+(static\\s+)?(\\w+)\\s*:\\s*(\\w+)/g;\r\n    const methodRegex = /(private|protected|public)\\s+(static\\s+)?(\\w+)\\s*\\(([^)]*)\\)\\s*:\\s*(\\w+)/g;\r\n\r\n    let match;\r\n    while ((match = classRegex.exec(code)) !== null) {\r\n      const cls: ClassInfo = {\r\n        name: match[1],\r\n        properties: [],\r\n        methods: [],\r\n        extends: match[2] || undefined,\r\n        implements: match[3] ? match[3].split(',').map(s => s.trim()) : undefined,\r\n      };\r\n\r\n      const classBodyStart = match.index + match[0].length;\r\n      const classBodyEnd = this.findMatchingBrace(code, classBodyStart);\r\n      const body = code.substring(classBodyStart, classBodyEnd);\r\n\r\n      let propMatch;\r\n      while ((propMatch = propRegex.exec(body)) !== null) {\r\n        cls.properties.push({\r\n          name: propMatch[3],\r\n          type: propMatch[4],\r\n          visibility: propMatch[1] as 'public' | 'private' | 'protected',\r\n          static: propMatch[2]?.includes('static') ?? false,\r\n        });\r\n      }\r\n\r\n      let methodMatch;\r\n      while ((methodMatch = methodRegex.exec(body)) !== null) {\r\n        cls.methods.push({\r\n          name: methodMatch[3],\r\n          params: methodMatch[4],\r\n          returnType: methodMatch[5],\r\n          visibility: methodMatch[1] as 'public' | 'private' | 'protected',\r\n          static: methodMatch[2]?.includes('static') ?? false,\r\n        });\r\n      }\r\n\r\n      classes.push(cls);\r\n    }\r\n    return classes;\r\n  }\r\n\r\n  private static findMatchingBrace(code: string, start: number): number {\r\n    let depth = 1;\r\n    let i = start;\r\n    while (depth > 0 && i < code.length) {\r\n      if (code[i] === '{') depth++;\r\n      else if (code[i] === '}') depth--;\r\n      i++;\r\n    }\r\n    return i;\r\n  }\r\n}\r\n\r\n// Usage\r\nconst gen = new ClassDiagramGenerator();\r\ngen.addClass({\r\n  name: 'Book',\r\n  properties: [\r\n    { name: 'isbn', type: 'string', visibility: 'private', static: false },\r\n    { name: 'title', type: 'string', visibility: 'private', static: false },\r\n    { name: 'status', type: 'BookStatus', visibility: 'private', static: false },\r\n  ],\r\n  methods: [\r\n    { name: 'getDetails', params: '', returnType: 'BookDetails', visibility: 'public', static: false },\r\n    { name: 'changeStatus', params: 'newStatus: BookStatus', returnType: 'void', visibility: 'public', static: false },\r\n  ],\r\n});\r\ngen.addEnum('BookStatus', ['AVAILABLE', 'ON_LOAN', 'RESERVED', 'LOST', 'WITHDRAWN']);\r\nconsole.log(gen.generateUMLMermaid());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-sequencediagramrenderer--from-trace-logs",
      children: "Example 2: SequenceDiagramRenderer — from Trace Logs"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface TraceEvent {\r\n  timestamp: number;\r\n  from: string;\r\n  to: string;\r\n  message: string;\r\n  type: 'sync_call' | 'async_call' | 'return' | 'create' | 'destroy' | 'self';\r\n  duration?: number; // ms\r\n  nested?: TraceEvent[];\r\n}\r\n\r\nclass SequenceDiagramRenderer {\r\n  private events: TraceEvent[] = [];\r\n  private participants: Set<string> = new Set();\r\n\r\n  public addEvent(event: TraceEvent): void {\r\n    this.events.push(event);\r\n    this.participants.add(event.from);\r\n    this.participants.add(event.to);\r\n  }\r\n\r\n  public renderMermaid(): string {\r\n    const lines: string[] = ['```mermaid', 'sequenceDiagram'];\r\n    for (const p of this.participants) {\r\n      lines.push(`    participant ${this.escapeId(p)} as ${p}`);\r\n    }\r\n    for (const event of this.events) {\r\n      lines.push(...this.renderEvent(event, 1));\r\n    }\r\n    lines.push('```');\r\n    return lines.join('\\n');\r\n  }\r\n\r\n  private renderEvent(event: TraceEvent, indent: number): string[] {\r\n    const pad = '    '.repeat(indent);\r\n    const lines: string[] = [];\r\n    const from = this.escapeId(event.from);\r\n    const to = this.escapeId(event.to);\r\n\r\n    switch (event.type) {\r\n      case 'sync_call':\r\n        lines.push(`${pad}${from}->>${to}: ${event.message}`);\r\n        break;\r\n      case 'async_call':\r\n        lines.push(`${pad}${from}-->>${to}: ${event.message}`);\r\n        break;\r\n      case 'return':\r\n        lines.push(`${pad}${to}-->>${from}: ${event.message}`);\r\n        break;\r\n      case 'create':\r\n        lines.push(`${pad}create participant ${to}`);\r\n        lines.push(`${pad}${from}->>${to}: ${event.message}`);\r\n        break;\r\n      case 'self':\r\n        lines.push(`${pad}${from}->>${from}: ${event.message}`);\r\n        break;\r\n    }\r\n    if (event.nested && event.nested.length > 0) {\r\n      for (const nested of event.nested) {\r\n        lines.push(...this.renderEvent(nested, indent + 1));\r\n      }\r\n    }\r\n    return lines;\r\n  }\r\n\r\n  private escapeId(id: string): string {\r\n    return id.replace(/\\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '');\r\n  }\r\n\r\n  public generatePlantUML(): string {\r\n    const lines: string[] = ['@startuml'];\r\n    for (const p of this.participants) {\r\n      lines.push(`  participant \"${p}\" as ${this.escapeId(p)}`);\r\n    }\r\n    for (const event of this.events) {\r\n      this.renderPlantUMLEvent(event, lines);\r\n    }\r\n    lines.push('@enduml');\r\n    return lines.join('\\n');\r\n  }\r\n\r\n  private renderPlantUMLEvent(event: TraceEvent, lines: string[]): void {\r\n    const from = this.escapeId(event.from);\r\n    const to = this.escapeId(event.to);\r\n    switch (event.type) {\r\n      case 'sync_call':\r\n        lines.push(`  ${from} -> ${to} + : ${event.message}`);\r\n        if (event.duration !== undefined) {\r\n          lines.push(`  note right: ${event.duration}ms`);\r\n        }\r\n        break;\r\n      case 'return':\r\n        lines.push(`  ${to} --> ${from} - : ${event.message}`);\r\n        break;\r\n      case 'async_call':\r\n        lines.push(`  ${from} ->> ${to} : ${event.message}`);\r\n        break;\r\n      case 'self':\r\n        lines.push(`  ${from} -> ${from} : ${event.message}`);\r\n        break;\r\n    }\r\n  }\r\n\r\n  public getTimeline(): { event: TraceEvent; cumulativeTime: number }[] {\r\n    const sorted = [...this.events].sort((a, b) => a.timestamp - b.timestamp);\r\n    let cumTime = 0;\r\n    return sorted.map(event => {\r\n      cumTime += event.duration ?? 0;\r\n      return { event, cumulativeTime: cumTime };\r\n    });\r\n  }\r\n}\r\n\r\n// Usage\r\nconst renderer = new SequenceDiagramRenderer();\r\nrenderer.addEvent({ timestamp: 0, from: 'Client', to: 'Controller', message: 'POST /login', type: 'sync_call', duration: 5 });\r\nrenderer.addEvent({ timestamp: 5, from: 'Controller', to: 'AuthService', message: 'authenticate(credentials)', type: 'sync_call', duration: 50 });\r\nrenderer.addEvent({ timestamp: 55, from: 'AuthService', to: 'Database', message: 'SELECT user WHERE email=?', type: 'sync_call', duration: 20 });\r\nrenderer.addEvent({ timestamp: 75, from: 'Database', to: 'AuthService', message: 'user record', type: 'return' });\r\nrenderer.addEvent({ timestamp: 80, from: 'AuthService', to: 'Controller', message: 'JWT token', type: 'return' });\r\nrenderer.addEvent({ timestamp: 85, from: 'Controller', to: 'Client', message: '200 OK + token', type: 'return' });\r\nconsole.log(renderer.renderMermaid());\r\nconsole.log(renderer.getTimeline());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-statemachineengine--with-guards-actions-nested-states",
      children: "Example 3: StateMachineEngine — with Guards, Actions, Nested States"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type State = string;\r\ntype Event = string;\r\n\r\ninterface Guard {\r\n  name: string;\r\n  condition: (context: Record<string, unknown>) => boolean;\r\n}\r\n\r\ninterface Action {\r\n  name: string;\r\n  execute: (context: Record<string, unknown>) => void;\r\n}\r\n\r\ninterface StateTransition {\r\n  from: State;\r\n  to: State;\r\n  event: Event;\r\n  guard?: string;\r\n  actions?: string[];\r\n}\r\n\r\ninterface NestedStateMachine {\r\n  parentState: State;\r\n  initialState: State;\r\n  states: State[];\r\n  transitions: StateTransition[];\r\n}\r\n\r\nclass StateMachineEngine {\r\n  private currentState: State;\r\n  private readonly transitions: StateTransition[];\r\n  private readonly guards: Map<string, Guard>;\r\n  private readonly actions: Map<string, Action>;\r\n  private readonly nested: Map<State, NestedStateMachine>;\r\n  private context: Record<string, unknown>;\r\n  private readonly history: { from: State; to: State; event: Event; timestamp: Date }[];\r\n\r\n  constructor(\r\n    initialState: State,\r\n    transitions: StateTransition[],\r\n    options?: {\r\n      guards?: Guard[];\r\n      actions?: Action[];\r\n      nested?: NestedStateMachine[];\r\n      initialContext?: Record<string, unknown>;\r\n    }\r\n  ) {\r\n    this.currentState = initialState;\r\n    this.transitions = transitions;\r\n    this.guards = new Map(options?.guards?.map(g => [g.name, g]) ?? []);\r\n    this.actions = new Map(options?.actions?.map(a => [a.name, a]) ?? []);\r\n    this.nested = new Map(options?.nested?.map(n => [n.parentState, n]) ?? []);\r\n    this.context = options?.initialContext ?? {};\r\n    this.history = [];\r\n  }\r\n\r\n  public send(event: Event): boolean {\r\n    const candidates = this.transitions.filter(\r\n      (t) => t.from === this.currentState && t.event === event\r\n    );\r\n    if (candidates.length === 0) {\r\n      throw new Error(`No transition from '${this.currentState}' on '${event}'`);\r\n    }\r\n    for (const transition of candidates) {\r\n      if (transition.guard) {\r\n        const guard = this.guards.get(transition.guard);\r\n        if (!guard || !guard.condition(this.context)) continue;\r\n      }\r\n      const prevState = this.currentState;\r\n      this.currentState = transition.to;\r\n      if (transition.actions) {\r\n        for (const actionName of transition.actions) {\r\n          const action = this.actions.get(actionName);\r\n          if (action) action.execute(this.context);\r\n        }\r\n      }\r\n      this.history.push({ from: prevState, to: transition.to, event, timestamp: new Date() });\r\n      return true;\r\n    }\r\n    throw new Error(`Guard conditions not met for any transition from '${this.currentState}' on '${event}'`);\r\n  }\r\n\r\n  public getState(): State {\r\n    return this.currentState;\r\n  }\r\n\r\n  public setContext(key: string, value: unknown): void {\r\n    this.context[key] = value;\r\n  }\r\n\r\n  public getContext(key: string): unknown {\r\n    return this.context[key];\r\n  }\r\n\r\n  public getHistory(): { from: State; to: State; event: Event; timestamp: Date }[] {\r\n    return [...this.history];\r\n  }\r\n\r\n  public can(event: Event): boolean {\r\n    const candidates = this.transitions.filter(\r\n      (t) => t.from === this.currentState && t.event === event\r\n    );\r\n    for (const t of candidates) {\r\n      if (!t.guard) return true;\r\n      const guard = this.guards.get(t.guard);\r\n      if (guard?.condition(this.context)) return true;\r\n    }\r\n    return false;\r\n  }\r\n\r\n  public getValidEvents(): Event[] {\r\n    return this.transitions\r\n      .filter(t => t.from === this.currentState)\r\n      .map(t => t.event)\r\n      .filter((v, i, a) => a.indexOf(v) === i);\r\n  }\r\n\r\n  public isInNestedState(parentState: State, nestedState: State): boolean {\r\n    const nestedSM = this.nested.get(parentState);\r\n    if (!nestedSM) return false;\r\n    if (this.currentState === parentState) {\r\n      return nestedSM.initialState === nestedState;\r\n    }\r\n    return this.currentState === `${parentState}.${nestedState}`;\r\n  }\r\n\r\n  public dotFormat(): string {\r\n    const lines: string[] = ['digraph StateMachine {'];\r\n    const stateSet = new Set<State>();\r\n    for (const t of this.transitions) {\r\n      stateSet.add(t.from);\r\n      stateSet.add(t.to);\r\n    }\r\n    for (const state of stateSet) {\r\n      const isCurrent = state === this.currentState;\r\n      lines.push(`  \"${state}\" [${isCurrent ? 'style=filled,fillcolor=lightyellow,' : ''}shape=box];`);\r\n    }\r\n    for (const t of this.transitions) {\r\n      const label = [t.event, t.guard ? `[${t.guard}]` : '', t.actions ? `/${t.actions.join(',')}` : ''].filter(Boolean).join(' ');\r\n      lines.push(`  \"${t.from}\" -> \"${t.to}\" [label=\"${label}\"];`);\r\n    }\r\n    lines.push('}');\r\n    return lines.join('\\n');\r\n  }\r\n}\r\n\r\n// Usage - Book state machine with guards\r\nconst sm = new StateMachineEngine('available', [\r\n  { from: 'available', to: 'onLoan', event: 'borrow', guard: 'patronEligible', actions: ['recordLoan'] },\r\n  { from: 'available', to: 'reserved', event: 'reserve', actions: ['notifyPatron'] },\r\n  { from: 'onLoan', to: 'overdue', event: 'daysPass', guard: 'isOverdue', actions: ['chargeFine'] },\r\n  { from: 'onLoan', to: 'available', event: 'return', actions: ['clearLoan'] },\r\n  { from: 'overdue', to: 'available', event: 'return', guard: 'finePaid', actions: ['clearLoan', 'clearFines'] },\r\n  { from: 'overdue', to: 'lost', event: 'reportLost', actions: ['markLost', 'chargeReplacement'] },\r\n  { from: 'reserved', to: 'onLoan', event: 'borrow', guard: 'patronEligible', actions: ['recordLoan'] },\r\n  { from: 'reserved', to: 'available', event: 'cancelReservation', actions: ['notifyNextPatron'] },\r\n], {\r\n  guards: [\r\n    { name: 'patronEligible', condition: (ctx) => (ctx.maxLoans as number) > 0 },\r\n    { name: 'isOverdue', condition: (ctx) => (ctx.daysSinceDue as number) > 0 },\r\n    { name: 'finePaid', condition: (ctx) => (ctx.outstandingFine as number) === 0 },\r\n  ],\r\n  actions: [\r\n    { name: 'recordLoan', execute: (ctx) => { ctx.activeLoans = (ctx.activeLoans as number ?? 0) + 1; } },\r\n    { name: 'clearLoan', execute: (ctx) => { ctx.activeLoans = (ctx.activeLoans as number ?? 1) - 1; } },\r\n    { name: 'chargeFine', execute: (ctx) => { ctx.outstandingFine = (ctx.outstandingFine as number ?? 0) + 1; } },\r\n    { name: 'clearFines', execute: (ctx) => { ctx.outstandingFine = 0; } },\r\n    { name: 'notifyPatron', execute: () => { console.log('Notification sent'); } },\r\n    { name: 'notifyNextPatron', execute: () => { console.log('Next in queue notified'); } },\r\n    { name: 'markLost', execute: (ctx) => { ctx.status = 'lost'; } },\r\n    { name: 'chargeReplacement', execute: (ctx) => { ctx.replacementFee = 50; } },\r\n  ],\r\n  initialContext: { maxLoans: 3, activeLoans: 0, outstandingFine: 0 },\r\n});\r\n\r\nconsole.log(sm.getState()); // available\r\nconsole.log(sm.can('borrow')); // true\r\nsm.send('borrow');\r\nconsole.log(sm.getState()); // onLoan\r\nconsole.log(sm.getValidEvents()); // ['daysPass', 'return', 'reportLost']\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-model-consistency-checker",
      children: "Example 4: Model Consistency Checker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface UMLClass {\r\n  name: string;\r\n  attributes: string[];\r\n  methods: string[];\r\n  associations: string[];\r\n}\r\n\r\ninterface SequenceStep {\r\n  from: string;\r\n  to: string;\r\n  message: string;\r\n}\r\n\r\ninterface StateDefinition {\r\n  states: string[];\r\n  transitions: { from: string; to: string; event: string }[];\r\n}\r\n\r\nclass ModelConsistencyChecker {\r\n  private errors: string[] = [];\r\n  private warnings: string[] = [];\r\n\r\n  public checkClassStructure(cls: UMLClass): void {\r\n    if (!cls.name) this.errors.push('Class must have a name');\r\n    if (cls.attributes.length === 0) this.warnings.push(`Class '${cls.name}' has no attributes`);\r\n    if (cls.methods.length === 0) this.warnings.push(`Class '${cls.name}' has no methods`);\r\n  }\r\n\r\n  public checkSequenceConsistency(classes: UMLClass[], steps: SequenceStep[]): void {\r\n    const classNames = new Set(classes.map(c => c.name));\r\n    for (const step of steps) {\r\n      if (!classNames.has(step.from)) {\r\n        this.errors.push(`Sequence '${step.message}': sender '${step.from}' not found in class model`);\r\n      }\r\n      if (!classNames.has(step.to)) {\r\n        this.errors.push(`Sequence '${step.message}': receiver '${step.to}' not found in class model`);\r\n      }\r\n    }\r\n  }\r\n\r\n  public checkStateCompleteness(sm: StateDefinition): void {\r\n    if (sm.states.length < 2) this.errors.push('State machine must have at least 2 states');\r\n    for (const state of sm.states) {\r\n      const hasIncoming = sm.transitions.some(t => t.to === state);\r\n      const hasOutgoing = sm.transitions.some(t => t.from === state);\r\n      if (!hasIncoming && state !== sm.states[0]) {\r\n        this.warnings.push(`State '${state}' has no incoming transitions (unreachable)`);\r\n      }\r\n      if (!hasOutgoing && state !== sm.states[sm.states.length - 1]) {\r\n        this.warnings.push(`State '${state}' has no outgoing transitions (dead end)`);\r\n      }\r\n    }\r\n    for (const t of sm.transitions) {\r\n      if (!sm.states.includes(t.from)) this.errors.push(`Transition '${t.event}' references unknown source '${t.from}'`);\r\n      if (!sm.states.includes(t.to)) this.errors.push(`Transition '${t.event}' references unknown target '${t.to}'`);\r\n    }\r\n  }\r\n\r\n  public checkNamesConsistent(className: string, sequenceParticipants: string[]): void {\r\n    if (!sequenceParticipants.includes(className)) {\r\n      this.warnings.push(`Class '${className}' never appears in sequence diagrams`);\r\n    }\r\n  }\r\n\r\n  public getReport(): { errors: string[]; warnings: string[]; valid: boolean; summary: string } {\r\n    const valid = this.errors.length === 0;\r\n    const summary = valid\r\n      ? `✅ Model consistent: ${this.warnings.length} warnings`\r\n      : `❌ Model inconsistent: ${this.errors.length} errors, ${this.warnings.length} warnings`;\r\n    return { errors: this.errors, warnings: this.warnings, valid, summary };\r\n  }\r\n}\r\n\r\n// Usage\r\nconst checker = new ModelConsistencyChecker();\r\nchecker.checkClassStructure({ name: 'User', attributes: ['id', 'name'], methods: ['login()'], associations: ['Account'] });\r\nchecker.checkSequenceConsistency(\r\n  [{ name: 'User', attributes: [], methods: [], associations: [] }],\r\n  [{ from: 'User', to: 'AuthService', message: 'login()' }]\r\n);\r\nchecker.checkStateCompleteness({\r\n  states: ['active', 'inactive', 'banned'],\r\n  transitions: [\r\n    { from: 'active', to: 'inactive', event: 'deactivate' },\r\n    { from: 'inactive', to: 'active', event: 'activate' },\r\n    { from: 'active', to: 'banned', event: 'ban' },\r\n  ],\r\n});\r\nconsole.log(checker.getReport());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-5-uml-to-typescript-converter-with-design-pattern-detection",
      children: "Example 5: UML-to-TypeScript Converter with Design Pattern Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface UMLAttribute {\r\n  name: string;\r\n  type: string;\r\n  visibility: '+' | '-' | '#';\r\n  isStatic: boolean;\r\n}\r\n\r\ninterface UMLMethod {\r\n  name: string;\r\n  params: { name: string; type: string }[];\r\n  returnType: string;\r\n  visibility: '+' | '-' | '#';\r\n  isStatic: boolean;\r\n}\r\n\r\ninterface UMLRelationship {\r\n  type: 'association' | 'aggregation' | 'composition' | 'inheritance' | 'dependency' | 'realization';\r\n  target: string;\r\n  multiplicitySource?: string;\r\n  multiplicityTarget?: string;\r\n}\r\n\r\ninterface UMLClassDefinition {\r\n  name: string;\r\n  attributes: UMLAttribute[];\r\n  methods: UMLMethod[];\r\n  relationships: UMLRelationship[];\r\n  stereotype?: string;\r\n}\r\n\r\nclass UMLToTypeScriptConverter {\r\n  public convert(cls: UMLClassDefinition): string {\r\n    const lines: string[] = [];\r\n    const stereotype = cls.stereotype;\r\n\r\n    if (stereotype === 'interface' || stereotype === 'protocol') {\r\n      lines.push(`interface ${cls.name} {`);\r\n      for (const attr of cls.attributes) {\r\n        lines.push(`  ${attr.name}: ${attr.type};`);\r\n      }\r\n      for (const method of cls.methods) {\r\n        lines.push(`  ${method.name}(${method.params.map(p => `${p.name}: ${p.type}`).join(', ')}): ${method.returnType};`);\r\n      }\r\n      lines.push('}');\r\n      return lines.join('\\n');\r\n    }\r\n\r\n    if (stereotype === 'enum') {\r\n      lines.push(`enum ${cls.name} {`);\r\n      for (const attr of cls.attributes) {\r\n        lines.push(`  ${attr.name} = '${attr.name}',`);\r\n      }\r\n      lines.push('}');\r\n      return lines.join('\\n');\r\n    }\r\n\r\n    const extendsClause = cls.relationships\r\n      .filter(r => r.type === 'inheritance')\r\n      .map(r => r.target);\r\n    const implementsClause = cls.relationships\r\n      .filter(r => r.type === 'realization')\r\n      .map(r => r.target);\r\n\r\n    const ext = extendsClause.length > 0 ? ` extends ${extendsClause[0]}` : '';\r\n    const impl = implementsClause.length > 0 ? ` implements ${implementsClause.join(', ')}` : '';\r\n    lines.push(`class ${cls.name}${ext}${impl} {`);\r\n\r\n    for (const attr of cls.attributes) {\r\n      const access = attr.visibility === '-' ? 'private' : attr.visibility === '#' ? 'protected' : 'public';\r\n      const staticKw = attr.isStatic ? ' static' : '';\r\n      lines.push(`  ${access}${staticKw} ${attr.name}: ${attr.type};`);\r\n    }\r\n\r\n    const paramAttrs = cls.attributes.filter(a => a.visibility === '-');\r\n    if (paramAttrs.length > 0) {\r\n      lines.push('');\r\n      lines.push(`  constructor(${paramAttrs.map(a => `private ${a.name}: ${a.type}`).join(', ')}) {}`);\r\n    }\r\n\r\n    for (const method of cls.methods) {\r\n      const access = method.visibility === '-' ? 'private' : method.visibility === '#' ? 'protected' : 'public';\r\n      const staticKw = method.isStatic ? ' static' : '';\r\n      const params = method.params.map(p => `${p.name}: ${p.type}`).join(', ');\r\n      lines.push(`  ${access}${staticKw} ${method.name}(${params}): ${method.returnType} {`);\r\n      lines.push('    // TODO: implement');\r\n      lines.push('  }');\r\n    }\r\n\r\n    lines.push('}');\r\n    return lines.join('\\n');\r\n  }\r\n\r\n  public detectDesignPattern(classes: UMLClassDefinition[]): string[] {\r\n    const patterns: string[] = [];\r\n    for (const cls of classes) {\r\n      // Singleton: private constructor, static getInstance\r\n      const hasPrivateConstructor = cls.attributes.some(a => a.name === 'instance' && a.isStatic);\r\n      const hasGetInstance = cls.methods.some(m => m.name === 'getInstance' && m.isStatic);\r\n      if (hasPrivateConstructor && hasGetInstance) patterns.push(`${cls.name}: Singleton`);\r\n\r\n      // Factory: has create method returning product type\r\n      const hasFactoryMethod = cls.methods.some(m => m.name.startsWith('create') || m.name === 'factory');\r\n      if (hasFactoryMethod) patterns.push(`${cls.name}: Factory Method`);\r\n\r\n      // Observer: has attach/detach/notify\r\n      const hasAttach = cls.methods.some(m => m.name === 'attach');\r\n      const hasDetach = cls.methods.some(m => m.name === 'detach');\r\n      const hasNotify = cls.methods.some(m => m.name === 'notify');\r\n      if (hasAttach && hasDetach && hasNotify) patterns.push(`${cls.name}: Observer`);\r\n    }\r\n    return patterns;\r\n  }\r\n}\r\n\r\n// Usage\r\nconst converter = new UMLToTypeScriptConverter();\r\nconst userClass: UMLClassDefinition = {\r\n  name: 'User',\r\n  attributes: [\r\n    { name: 'id', type: 'string', visibility: '-', isStatic: false },\r\n    { name: 'email', type: 'string', visibility: '+', isStatic: false },\r\n    { name: 'instance', type: 'User', visibility: '-', isStatic: true },\r\n  ],\r\n  methods: [\r\n    { name: 'getInstance', params: [], returnType: 'User', visibility: '+', isStatic: true },\r\n    { name: 'login', params: [{ name: 'password', type: 'string' }], returnType: 'boolean', visibility: '+', isStatic: false },\r\n  ],\r\n  relationships: [{ type: 'inheritance', target: 'BaseUser' }],\r\n};\r\nconsole.log(converter.convert(userClass));\r\nconst patterns = converter.detectDesignPattern([userClass]);\r\nconsole.log('Detected patterns:', patterns);\n"
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
        }), " { User, AuthService, Database }\r\n", (0,jsx_runtime.jsx)(_components.strong, {
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
          children: "const orderSM = new StateMachineEngine('pending', [\r\n  { from: 'pending', to: 'confirmed', event: 'confirm' },\r\n  { from: 'confirmed', to: 'processing', event: 'startProcessing' },\r\n  { from: 'processing.Picking', to: 'processing.Packing', event: 'pickComplete' },\r\n  { from: 'processing.Packing', to: 'processing.QualityCheck', event: 'packComplete' },\r\n  { from: 'processing.QualityCheck', to: 'shipped', event: 'qualityPass', guard: 'qualityOk' },\r\n  { from: 'processing.QualityCheck', to: 'processing.Picking', event: 'qualityFail', actions: ['logQualityIssue'] },\r\n  { from: 'shipped', to: 'delivered', event: 'confirmDelivery' },\r\n  { from: 'pending', to: 'cancelled', event: 'cancel' },\r\n  { from: 'confirmed', to: 'cancelled', event: 'cancel' },\r\n  { from: 'processing', to: 'cancelled', event: 'cancel' },\r\n  { from: 'cancelled', to: 'refunded', event: 'processRefund', actions: ['initiateRefund'] },\r\n], {\r\n  guards: [\r\n    { name: 'qualityOk', condition: (ctx) => (ctx.qualityScore as number) >= 80 },\r\n  ],\r\n  actions: [\r\n    { name: 'logQualityIssue', execute: (ctx) => { ctx.issues = (ctx.issues as number ?? 0) + 1; } },\r\n    { name: 'initiateRefund', execute: (ctx) => { ctx.refundStatus = 'processing'; } },\r\n  ],\r\n  nested: [{\r\n    parentState: 'processing',\r\n    initialState: 'Picking',\r\n    states: ['Picking', 'Packing', 'QualityCheck'],\r\n    transitions: [\r\n      { from: 'Picking', to: 'Packing', event: 'pickComplete' },\r\n      { from: 'Packing', to: 'QualityCheck', event: 'packComplete' },\r\n      { from: 'QualityCheck', to: 'Picking', event: 'qualityFail' },\r\n    ],\r\n  }],\r\n});\n"
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
          children: "enum Gender { MALE = 'MALE', FEMALE = 'FEMALE', OTHER = 'OTHER' }\r\nenum AppointmentStatus { AVAILABLE = 'AVAILABLE', BOOKED = 'BOOKED', CONFIRMED = 'CONFIRMED', IN_PROGRESS = 'IN_PROGRESS', COMPLETED = 'COMPLETED', CANCELLED = 'CANCELLED', NO_SHOW = 'NO_SHOW' }\r\n\r\nclass Patient {\r\n  constructor(\r\n    public readonly patientId: string,\r\n    public name: string,\r\n    public dateOfBirth: Date,\r\n    public gender: Gender,\r\n    public contactNumber: string,\r\n    public medicalRecords: MedicalRecord[] = [],\r\n    public appointments: Appointment[] = []\r\n  ) {}\r\n}\r\n\r\nclass Doctor {\r\n  constructor(\r\n    public readonly doctorId: string,\r\n    public name: string,\r\n    public specialization: string,\r\n    public availability: { dayOfWeek: number; startTime: string; endTime: string }[],\r\n    public appointments: Appointment[] = []\r\n  ) {}\r\n}\r\n\r\nclass Appointment {\r\n  constructor(\r\n    public readonly appointmentId: string,\r\n    public patient: Patient,\r\n    public doctor: Doctor,\r\n    public dateTime: Date,\r\n    public status: AppointmentStatus,\r\n    public notes?: string\r\n  ) {}\r\n}\r\n\r\nclass MedicalRecord {\r\n  constructor(\r\n    public readonly recordId: string,\r\n    public patient: Patient,\r\n    public doctor: Doctor,\r\n    public date: Date,\r\n    public diagnosis: string,\r\n    public prescription: string[],\r\n    public notes: string\r\n  ) {}\r\n}\r\n\r\nclass HospitalSystem {\r\n  private appointmentSM: StateMachineEngine;\r\n\r\n  constructor() {\r\n    this.appointmentSM = new StateMachineEngine('available', [\r\n      { from: 'available', to: 'booked', event: 'book' },\r\n      { from: 'booked', to: 'confirmed', event: 'confirm', guard: 'patientVerified' },\r\n      { from: 'booked', to: 'cancelled', event: 'cancel' },\r\n      { from: 'confirmed', to: 'inProgress', event: 'start' },\r\n      { from: 'inProgress', to: 'completed', event: 'complete' },\r\n      { from: 'inProgress', to: 'noShow', event: 'miss', guard: 'timeElapsed' },\r\n      { from: 'confirmed', to: 'cancelled', event: 'cancel' },\r\n    ], {\r\n      guards: [\r\n        { name: 'patientVerified', condition: (ctx) => Boolean(ctx.patientRecord) },\r\n        { name: 'timeElapsed', condition: (ctx) => (ctx.minutesPast as number) > 15 },\r\n      ],\r\n      actions: [\r\n        { name: 'notifyPatient', execute: () => console.log('Notification sent') },\r\n      ],\r\n      initialContext: { patientRecord: true, minutesPast: 0 },\r\n    });\r\n  }\r\n}\n"
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



/***/ }

}]);