"use strict";
(self["webpackChunksite"] = self["webpackChunksite"] || []).push([["76280"], {
45102(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_courses_database_management_systems_02_er_model_md_2ad_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-database-management-systems-02-er-model-md-2ad.json
var site_docs_courses_database_management_systems_02_er_model_md_2ad_namespaceObject = JSON.parse('{"id":"courses/database-management-systems/02-er-model","title":"Chapter 2: Entity-Relationship Model","description":"A[Identify Entities] --> B[Define Attributes] B --> C[Specify Relationships] C --> D[Set Cardinality & Participation] E --> F[Map to Relational Schema] F","source":"@site/docs/courses/database-management-systems/02-er-model.md","sourceDirName":"courses/database-management-systems","slug":"/database-management-systems/02-er-model","permalink":"/ai-engineering-journey/database-management-systems/02-er-model","draft":false,"unlisted":false,"editUrl":"https://github.com/Raushan666java/ai-engineering-journey/tree/main/site/docs/docs/courses/database-management-systems/02-er-model.md","tags":[],"version":"current","lastUpdatedAt":1795765910000,"sidebarPosition":2,"frontMatter":{"id":"02-er-model","slug":"/database-management-systems/02-er-model","title":"Chapter 2: Entity-Relationship Model","sidebar_label":"Chapter 2: Entity-Relationship Model","sidebar_position":2,"description":"A[Identify Entities] --> B[Define Attributes] B --> C[Specify Relationships] C --> D[Set Cardinality & Participation] E --> F[Map to Relational Schema] F"},"sidebar":"course-database-management-systems","previous":{"title":"Chapter 1: Introduction to Database Management Systems","permalink":"/ai-engineering-journey/database-management-systems/01-introduction"},"next":{"title":"Chapter 3: The Relational Model","permalink":"/ai-engineering-journey/database-management-systems/03-relational-model"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/courses/database-management-systems/02-er-model.md


const frontMatter = {
	id: '02-er-model',
	slug: '/database-management-systems/02-er-model',
	title: 'Chapter 2: Entity-Relationship Model',
	sidebar_label: 'Chapter 2: Entity-Relationship Model',
	sidebar_position: 2,
	description: 'A[Identify Entities] --> B[Define Attributes] B --> C[Specify Relationships] C --> D[Set Cardinality & Participation] E --> F[Map to Relational Schema] F'
};
const contentTitle = 'Chapter 2: Entity-Relationship Model';

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
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "2.1 The Entity-Relationship Model",
  "id": "21-the-entity-relationship-model",
  "level": 3
}, {
  "value": "Real-World Analogy: Blueprint for a House",
  "id": "real-world-analogy-blueprint-for-a-house",
  "level": 4
}, {
  "value": "Numbered Steps to Build an ER Model",
  "id": "numbered-steps-to-build-an-er-model",
  "level": 4
}, {
  "value": "Pseudocode: ER Model Builder",
  "id": "pseudocode-er-model-builder",
  "level": 4
}, {
  "value": "Dry Run: Building ER Model for University System",
  "id": "dry-run-building-er-model-for-university-system",
  "level": 4
}, {
  "value": "C++ Implementation: ER Model Classes",
  "id": "c-implementation-er-model-classes",
  "level": 4
}, {
  "value": "Python Implementation: ER Model Classes and Relational Mapping",
  "id": "python-implementation-er-model-classes-and-relational-mapping",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 4
}, {
  "value": "A&amp;D Table: ER Model Advantages and Disadvantages",
  "id": "ad-table-er-model-advantages-and-disadvantages",
  "level": 4
}, {
  "value": "Edge Cases in ER Modeling",
  "id": "edge-cases-in-er-modeling",
  "level": 4
}, {
  "value": "2.2 Entities and Entity Sets",
  "id": "22-entities-and-entity-sets",
  "level": 3
}, {
  "value": "Real-World Analogy: Family Tree",
  "id": "real-world-analogy-family-tree",
  "level": 4
}, {
  "value": "Numbered Steps to Identify Entities",
  "id": "numbered-steps-to-identify-entities",
  "level": 4
}, {
  "value": "Pseudocode: Entity Identification",
  "id": "pseudocode-entity-identification",
  "level": 4
}, {
  "value": "2.3 Attributes",
  "id": "23-attributes",
  "level": 3
}, {
  "value": "Attribute Types Comparison",
  "id": "attribute-types-comparison",
  "level": 4
}, {
  "value": "Real-World Analogy: Student Registration Form",
  "id": "real-world-analogy-student-registration-form",
  "level": 4
}, {
  "value": "Python Implementation: Attribute Type Validator",
  "id": "python-implementation-attribute-type-validator",
  "level": 4
}, {
  "value": "Complexity Analysis for Attributes",
  "id": "complexity-analysis-for-attributes",
  "level": 4
}, {
  "value": "2.4 Relationship Types and Relationship Sets",
  "id": "24-relationship-types-and-relationship-sets",
  "level": 3
}, {
  "value": "Relationship Types Comparison",
  "id": "relationship-types-comparison",
  "level": 4
}, {
  "value": "Numbered Steps to Determine Cardinality",
  "id": "numbered-steps-to-determine-cardinality",
  "level": 4
}, {
  "value": "Pseudocode: Cardinality Determination",
  "id": "pseudocode-cardinality-determination",
  "level": 4
}, {
  "value": "Dry Run: Cardinality Determination for School System",
  "id": "dry-run-cardinality-determination-for-school-system",
  "level": 4
}, {
  "value": "C++ Implementation: Cardinality Checker",
  "id": "c-implementation-cardinality-checker",
  "level": 4
}, {
  "value": "Python Implementation: Relationship Set Manager",
  "id": "python-implementation-relationship-set-manager",
  "level": 4
}, {
  "value": "A&amp;D Table: Relationship Degree Analysis",
  "id": "ad-table-relationship-degree-analysis",
  "level": 4
}, {
  "value": "2.5 Weak Entity Sets",
  "id": "25-weak-entity-sets",
  "level": 3
}, {
  "value": "Weak vs Strong Entity Comparison",
  "id": "weak-vs-strong-entity-comparison",
  "level": 4
}, {
  "value": "Real-World Analogy: Invoice System",
  "id": "real-world-analogy-invoice-system",
  "level": 4
}, {
  "value": "Numbered Steps to Identify and Map Weak Entities",
  "id": "numbered-steps-to-identify-and-map-weak-entities",
  "level": 4
}, {
  "value": "Pseudocode: Weak Entity Mapping",
  "id": "pseudocode-weak-entity-mapping",
  "level": 4
}, {
  "value": "Dry Run: Mapping Weak Entity DEPENDENT",
  "id": "dry-run-mapping-weak-entity-dependent",
  "level": 4
}, {
  "value": "C++ Implementation: Weak Entity Mapper",
  "id": "c-implementation-weak-entity-mapper",
  "level": 4
}, {
  "value": "Python Implementation: Weak Entity Handler",
  "id": "python-implementation-weak-entity-handler",
  "level": 4
}, {
  "value": "Edge Cases for Weak Entities",
  "id": "edge-cases-for-weak-entities",
  "level": 4
}, {
  "value": "2.6 ER Diagram Notation",
  "id": "26-er-diagram-notation",
  "level": 3
}, {
  "value": "ER Diagram Notation Quick Reference",
  "id": "er-diagram-notation-quick-reference",
  "level": 4
}, {
  "value": "C++ Implementation: ER Diagram Notation Renderer",
  "id": "c-implementation-er-diagram-notation-renderer",
  "level": 4
}, {
  "value": "2.7 Generalization, Specialization, and Aggregation",
  "id": "27-generalization-specialization-and-aggregation",
  "level": 3
}, {
  "value": "ER vs EER Comparison",
  "id": "er-vs-eer-comparison",
  "level": 4
}, {
  "value": "Generalization/Specialization Mapping Strategies Comparison",
  "id": "generalizationspecialization-mapping-strategies-comparison",
  "level": 4
}, {
  "value": "Real-World Analogy: Vehicle Registration System",
  "id": "real-world-analogy-vehicle-registration-system",
  "level": 4
}, {
  "value": "Numbered Steps for Generalization/Specialization Mapping",
  "id": "numbered-steps-for-generalizationspecialization-mapping",
  "level": 4
}, {
  "value": "Pseudocode: Generalization Mapping - Strategy B",
  "id": "pseudocode-generalization-mapping---strategy-b",
  "level": 4
}, {
  "value": "Dry Run: Generalization Mapping for VEHICLE Hierarchy",
  "id": "dry-run-generalization-mapping-for-vehicle-hierarchy",
  "level": 4
}, {
  "value": "Python Implementation: Generalization Mapper",
  "id": "python-implementation-generalization-mapper",
  "level": 4
}, {
  "value": "2.8 From ER to Relational Mapping",
  "id": "28-from-er-to-relational-mapping",
  "level": 3
}, {
  "value": "Complete Dry Run: ER-to-Relational Mapping for University Schema",
  "id": "complete-dry-run-er-to-relational-mapping-for-university-schema",
  "level": 4
}, {
  "value": "Fan Trap vs Chasm Trap Comparison",
  "id": "fan-trap-vs-chasm-trap-comparison",
  "level": 4
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 4
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 4
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "2.13 ER Model Implementation (TypeScript)",
  "id": "213-er-model-implementation-typescript",
  "level": 3
}, {
  "value": "2.14 ER-to-Relational Mapping Patterns",
  "id": "214-er-to-relational-mapping-patterns",
  "level": 3
}, {
  "value": "Additional Chapter Quiz Questions",
  "id": "additional-chapter-quiz-questions",
  "level": 3
}, {
  "value": "Additional Exercises",
  "id": "additional-exercises",
  "level": 3
}, {
  "value": "Basic (continued)",
  "id": "basic-continued",
  "level": 4
}, {
  "value": "Intermediate (continued)",
  "id": "intermediate-continued",
  "level": 4
}, {
  "value": "Advanced (continued)",
  "id": "advanced-continued",
  "level": 4
}, {
  "value": "Pro Tips",
  "id": "pro-tips",
  "level": 2
}, {
  "value": "One-Sentence Takeaways",
  "id": "one-sentence-takeaways",
  "level": 2
}, {
  "value": "Concept Comparison Tables",
  "id": "concept-comparison-tables",
  "level": 2
}, {
  "value": "Core Comparison Table",
  "id": "core-comparison-table",
  "level": 3
}, {
  "value": "Fan Trap vs Chasm Trap Comparison",
  "id": "fan-trap-vs-chasm-trap-comparison-1",
  "level": 3
}, {
  "value": "Mapping Rule Quick Reference",
  "id": "mapping-rule-quick-reference",
  "level": 3
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
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
}, {
  "value": "Additional Case Studies",
  "id": "additional-case-studies",
  "level": 2
}, {
  "value": "Case Study 1: Online Bookstore ER Model",
  "id": "case-study-1-online-bookstore-er-model",
  "level": 3
}, {
  "value": "Case Study 2: Hospital Management System",
  "id": "case-study-2-hospital-management-system",
  "level": 3
}, {
  "value": "Case Study 3: Detecting and Fixing a Fan Trap",
  "id": "case-study-3-detecting-and-fixing-a-fan-trap",
  "level": 3
}, {
  "value": "Case Study 4: Detecting and Fixing a Chasm Trap",
  "id": "case-study-4-detecting-and-fixing-a-chasm-trap",
  "level": 3
}, {
  "value": "Quick Reference (Complete)",
  "id": "quick-reference-complete",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    mermaid: "mermaid",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "chapter-2-entity-relationship-model",
        children: "Chapter 2: Entity-Relationship Model"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/database-management-systems/01-introduction",
          children: "Chapter 1: Introduction to Database Systems"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/database-management-systems/03-relational-model",
          children: "Chapter 3: The Relational Model"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify entities, attributes, and relationships in a problem domain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Classify attribute types: simple vs. composite, single-valued vs. multi-valued, stored vs. derived"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define relationship types, degree, and cardinality constraints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct ER diagrams using standard notations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish strong from weak entities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Model generalization, specialization, and aggregation hierarchies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Translate an ER diagram into a relational schema"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Entities & Attributes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-world objects with descriptive properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify entities first, then their attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Relationships & Cardinality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Associations between entities with 1:1, 1:N, M:N rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correct cardinality prevents schema redesign"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Weak Entities"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depend on owner entity for identity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common for line items, dependents, seat assignments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Generalization/Specialization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inheritance modeling for entity types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose Strategy B (separate tables) for flexibility"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ER-to-Relational Mapping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Systematic conversion of conceptual to logical schema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Follow the 8 mapping rules in order"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\n    A[Identify Entities] --> B[Define Attributes]\n    B --> C[Specify Relationships]\n    C --> D[Set Cardinality & Participation]\n    D --> E[Draw ER Diagram]\n    E --> F[Map to Relational Schema]\n    F --> G[Implement SQL DDL]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The ER model provides a high-level conceptual blueprint → translating real-world requirements into visual diagrams before any SQL is written.\n", (0,jsx_runtime.jsx)(_components.img, {
          src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/database-management-systems/ch02-er-model.png",
          alt: "ER Model Mindmap"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-the-entity-relationship-model",
      children: "2.1 The Entity-Relationship Model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Entity-Relationship (ER) model, introduced by Peter Chen in 1976, is a conceptual data model that provides a high-level description of a database. It is used primarily in the database design phase to capture user requirements and represent them in a visual, intuitive form before implementation.\nThe ER model views the real world as a collection of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "entities"
      }), " (things or objects) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "relationships"
      }), " (associations among entities)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-blueprint-for-a-house",
      children: "Real-World Analogy: Blueprint for a House"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ER Model Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "House Blueprint Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A room (kitchen, bedroom)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Attribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Properties of room (dimensions, window count)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Relationship"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A door connects kitchen to dining room"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cardinality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One kitchen has many cabinets (1:N)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weak Entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A window cannot exist without its wall"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Just as an architect draws a blueprint before construction begins, a database designer creates an ER diagram before writing SQL. The blueprint captures requirements, communicates with stakeholders (contractors = developers), and catches design errors early."
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-to-build-an-er-model",
      children: "Numbered Steps to Build an ER Model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify entities"
        }), " → List all noun concepts from requirements (e.g., Student, Course, Professor)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify relationships"
        }), " → Find verb associations between entities (e.g., Student enrolls in Course)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify cardinality"
        }), " → Determine 1:1, 1:N, or M:N for each relationship"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify attributes"
        }), " → List properties for each entity (e.g., student_id, name, email)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Classify attributes"
        }), " → Mark simple/composite, single-valued/multi-valued, stored/derived, key"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify weak entities"
        }), " → Find entities that depend on others for identity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Apply constraints"
        }), " → Specify total/partial participation, disjointness, completeness"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Draw ER diagram"
        }), " → Use rectangles, diamonds, ellipses with standard notation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Map to relational schema"
        }), " → Apply systematic conversion rules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Normalize"
        }), " → Check for redundancy and apply normal forms if needed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-er-model-builder",
      children: "Pseudocode: ER Model Builder"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-pseudocode",
        children: "PROCEDURE BuildERModel(requirements):\n    entities = ExtractNouns(requirements)\n    relationships = ExtractVerbs(requirements, entities)\n    FOR EACH entity IN entities:\n        entity.attributes = ExtractProperties(requirements, entity.name)\n        entity.key = IdentifyPrimaryKey(entity.attributes)\n        entity.isWeak = CheckDependency(entity, entities)\n    FOR EACH rel IN relationships:\n        rel.entity_types = IdentifyParticipants(rel, entities)\n        rel.cardinality = DetermineCardinality(rel, requirements)\n        rel.participation = DetermineParticipation(rel, requirements)\n        rel.attributes = ExtractRelationshipAttributes(requirements, rel)\n    er_diagram = DrawERDiagram(entities, relationships)\n    relational_schema = MapERToRelational(er_diagram)\n    RETURN relational_schema\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-building-er-model-for-university-system",
      children: "Dry Run: Building ER Model for University System"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input Requirements:"
      }), " \"A university has students who enroll in courses. Each course is taught by one professor. Students have IDs, names, and phone numbers. Courses have IDs, titles, and credits. Professors have IDs, names, and departments.\""]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract entities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STUDENT, COURSE, PROFESSOR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract relationships"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STUDENT enrolls in COURSE; PROFESSOR teaches COURSE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Determine cardinality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ENROLLS_IN: M:N; TEACHES: 1:N"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STUDENT: id, name, phone; COURSE: id, title, credits; PROFESSOR: id, name, dept"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classify attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "name -> composite; phone -> multi-valued; credits -> simple"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify weak entities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None in this set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STUDENT total in ENROLLS_IN; PROFESSOR partial in TEACHES"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Draw diagram"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rectangles -> STUDENT, COURSE, PROFESSOR; Diamonds -> ENROLLS_IN, TEACHES"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Map to schema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STUDENT(name->first+last), phone->separate table, COURSE with FK to PROFESSOR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normalize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All tables in 3NF"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-er-model-classes",
      children: "C++ Implementation: ER Model Classes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <map>\n#include <string>\n#include <algorithm>\nusing namespace std;\nenum class AttrType { SIMPLE, COMPOSITE, MULTI_VALUED, DERIVED, KEY };\nenum class CardType { ONE_TO_ONE, ONE_TO_MANY, MANY_TO_MANY };\nenum class PartType { TOTAL, PARTIAL };\nclass Attribute {\npublic:\n    string name;\n    AttrType type;\n    vector<Attribute> sub_attributes;\n    string derived_expression;\n    Attribute(string n, AttrType t = AttrType::SIMPLE)\n        : name(n), type(t), derived_expression(\"\") {}\n    void addSubAttribute(const Attribute& sub) {\n        if (type == AttrType::COMPOSITE) sub_attributes.push_back(sub);\n    }\n    string typeString() const {\n        switch(type) {\n            case AttrType::SIMPLE: return \"SIMPLE\";\n            case AttrType::COMPOSITE: return \"COMPOSITE\";\n            case AttrType::MULTI_VALUED: return \"MULTI_VALUED\";\n            case AttrType::DERIVED: return \"DERIVED\";\n            case AttrType::KEY: return \"KEY\";\n        }\n        return \"UNKNOWN\";\n    }\n    void print(int indent = 0) const {\n        cout << string(indent, ' ') << name << \" [\" << typeString() << \"]\";\n        if (!derived_expression.empty())\n            cout << \" = \" << derived_expression;\n        cout << endl;\n        for (const auto& sub : sub_attributes) sub.print(indent + 2);\n    }\n};\nclass Entity {\npublic:\n    string name;\n    vector&lt;Attribute&gt; attributes;\n    bool is_weak;\n    string owner_entity;\n    string discriminator;\n    Entity(string n, bool weak = false) : name(n), is_weak(weak) {}\n    void addAttribute(const Attribute& attr) { attributes.push_back(attr); }\n    void print() const {\n        cout << (is_weak ? \"WEAK ENTITY: \" : \"ENTITY: \") << name << endl;\n        if (is_weak)\n            cout << \"  Owner: \" << owner_entity << \", Discriminator: \" << discriminator << endl;\n        for (const auto& attr : attributes) attr.print(2);\n    }\n};\nclass Relationship {\npublic:\n    string name;\n    vector&lt;string&gt; participants;\n    CardType cardinality;\n    PartType participation;\n    vector&lt;Attribute&gt; attributes;\n    Relationship(string n, CardType card = CardType::MANY_TO_MANY)\n        : name(n), cardinality(card), participation(PartType::PARTIAL) {}\n    string cardinalityString() const {\n        switch(cardinality) {\n            case CardType::ONE_TO_ONE: return \"1:1\";\n            case CardType::ONE_TO_MANY: return \"1:N\";\n            case CardType::MANY_TO_MANY: return \"M:N\";\n        }\n        return \"UNKNOWN\";\n    }\n    void print() const {\n        cout << \"RELATIONSHIP: \" << name << \" [\" << cardinalityString() << \"]\";\n        cout << \" (Participation: \" << (participation == PartType::TOTAL ? \"TOTAL\" : \"PARTIAL\") << \")\" << endl;\n        cout << \"  Participants: \";\n        for (const auto& p : participants) cout << p << \" \";\n        cout << endl;\n        for (const auto& attr : attributes) attr.print(2);\n    }\n};\nclass ERModel {\npublic:\n    map&lt;string, Entity&gt; entities;\n    vector&lt;Relationship&gt; relationships;\n    void addEntity(const Entity& e) { entities[e.name] = e; }\n    void addRelationship(const Relationship& r) { relationships.push_back(r); }\n};\nint main() {\n    ERModel university;\n    Entity student(\"STUDENT\");\n    student.addAttribute(Attribute(\"student_id\", AttrType::KEY));\n    Attribute name(\"name\", AttrType::COMPOSITE);\n    name.addSubAttribute(Attribute(\"first_name\"));\n    name.addSubAttribute(Attribute(\"last_name\"));\n    student.addAttribute(name);\n    student.addAttribute(Attribute(\"phone_numbers\", AttrType::MULTI_VALUED));\n    university.addEntity(student);\n    Entity course(\"COURSE\");\n    course.addAttribute(Attribute(\"course_id\", AttrType::KEY));\n    course.addAttribute(Attribute(\"title\"));\n    course.addAttribute(Attribute(\"credits\"));\n    university.addEntity(course);\n    Relationship enrolls(\"ENROLLS_IN\", CardType::MANY_TO_MANY);\n    enrolls.participants = {\"STUDENT\", \"COURSE\"};\n    enrolls.participation = PartType::TOTAL;\n    enrolls.attributes.push_back(Attribute(\"semester\"));\n    enrolls.attributes.push_back(Attribute(\"grade\"));\n    university.addRelationship(enrolls);\n    for (auto& [name, ent] : university.entities) ent.print();\n    for (auto& rel : university.relationships) rel.print();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-er-model-classes-and-relational-mapping",
      children: "Python Implementation: ER Model Classes and Relational Mapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from enum import Enum\nfrom typing import List, Dict, Optional, Tuple\nclass AttrType(Enum):\n    SIMPLE = \"SIMPLE\"\n    COMPOSITE = \"COMPOSITE\"\n    MULTI_VALUED = \"MULTI_VALUED\"\n    DERIVED = \"DERIVED\"\n    KEY = \"KEY\"\nclass CardType(Enum):\n    ONE_TO_ONE = \"1:1\"\n    ONE_TO_MANY = \"1:N\"\n    MANY_TO_MANY = \"M:N\"\nclass PartType(Enum):\n    TOTAL = \"TOTAL\"\n    PARTIAL = \"PARTIAL\"\nclass Attribute:\n    def __init__(self, name: str, attr_type: AttrType = AttrType.SIMPLE):\n        self.name = name\n        self.type = attr_type\n        self.sub_attributes: List[Attribute] = []\n        self.derived_expression: str = \"\"\n    def add_sub_attribute(self, attr: Attribute) -> None:\n        if self.type == AttrType.COMPOSITE:\n            self.sub_attributes.append(attr)\n    def flatten(self) -> List[str]:\n        if self.type == AttrType.COMPOSITE:\n            return [sub.name.lower() for sub in self.sub_attributes]\n        return [self.name.lower()]\n    def __repr__(self) -> str:\n        return f\"Attribute({self.name}, {self.type.value})\"\nclass Entity:\n    def __init__(self, name: str, is_weak: bool = False):\n        self.name = name\n        self.attributes: List[Attribute] = []\n        self.is_weak = is_weak\n        self.owner_entity: Optional[str] = None\n        self.discriminator: Optional[str] = None\n    def add_attribute(self, attr: Attribute) -> None:\n        self.attributes.append(attr)\n    def get_key_attributes(self) -> List[Attribute]:\n        return [a for a in self.attributes if a.type == AttrType.KEY]\n    def get_multi_valued_attributes(self) -> List[Attribute]:\n        return [a for a in self.attributes if a.type == AttrType.MULTI_VALUED]\n    def __repr__(self) -> str:\n        return f\"Entity({self.name}, weak={self.is_weak})\"\nclass Relationship:\n    def __init__(self, name: str, cardinality: CardType = CardType.MANY_TO_MANY):\n        self.name = name\n        self.participants: List[str] = []\n        self.cardinality = cardinality\n        self.participation: PartType = PartType.PARTIAL\n        self.attributes: List[Attribute] = []\n    def add_attribute(self, attr: Attribute) -> None:\n        self.attributes.append(attr)\n    def __repr__(self) -> str:\n        return f\"Relationship({self.name}, {self.cardinality.value})\"\nclass ERModel:\n    def __init__(self):\n        self.entities: Dict[str, Entity] = {}\n        self.relationships: List[Relationship] = []\n    def add_entity(self, entity: Entity) -> None:\n        self.entities[entity.name] = entity\n    def add_relationship(self, rel: Relationship) -> None:\n        self.relationships.append(rel)\n    def map_to_relational(self) -> List[str]:\n        \"\"\"Map ER model to relational schema following standard 8 rules.\"\"\"\n        schema: List[str] = []\n        for ent in self.entities.values():\n            if not ent.is_weak:\n                schema.append(self._create_strong_entity_table(ent))\n        for ent in self.entities.values():\n            if ent.is_weak:\n                schema.append(self._create_weak_entity_table(ent))\n        for rel in self.relationships:\n            if rel.cardinality == CardType.MANY_TO_MANY:\n                schema.append(self._create_junction_table(rel))\n        for ent in self.entities.values():\n            for attr in ent.get_multi_valued_attributes():\n                schema.append(self._create_multi_valued_table(ent, attr))\n        return schema\n    def _create_strong_entity_table(self, ent: Entity) -> str:\n        cols = []\n        for attr in ent.attributes:\n            if attr.type == AttrType.KEY:\n                cols.append(f\"    {attr.name.lower()} INTEGER PRIMARY KEY\")\n            elif attr.type == AttrType.COMPOSITE:\n                for sub in attr.sub_attributes:\n                    cols.append(f\"    {sub.name.lower()} VARCHAR(100) NOT NULL\")\n            elif attr.type == AttrType.SIMPLE:\n                cols.append(f\"    {attr.name.lower()} VARCHAR(100)\")\n        return f\"CREATE TABLE {ent.name.lower()} (\\n\" + \",\\n\".join(cols) + \"\\n);\\n\"\n    def _create_weak_entity_table(self, ent: Entity) -> str:\n        cols = []\n        pk_parts = []\n        owner = self.entities.get(ent.owner_entity or \"\")\n        if owner:\n            key_attrs = owner.get_key_attributes()\n            if key_attrs:\n                key_name = key_attrs[0].name.lower()\n                cols.append(f\"    {key_name} INTEGER NOT NULL REFERENCES {ent.owner_entity.lower()}({key_name})\")\n                pk_parts.append(key_name)\n        if ent.discriminator:\n            cols.append(f\"    {ent.discriminator.lower()} VARCHAR(100) NOT NULL\")\n            pk_parts.append(ent.discriminator.lower())\n        for attr in ent.get_key_attributes():\n            if attr.name.lower() not in pk_parts and attr.type == AttrType.SIMPLE:\n                cols.append(f\"    {attr.name.lower()} VARCHAR(100)\")\n        pk = \", \".join(pk_parts)\n        cols.append(f\"    PRIMARY KEY ({pk})\")\n        return f\"CREATE TABLE {ent.name.lower()} (\\n\" + \",\\n\".join(cols) + \"\\n);\\n\"\n    def _create_junction_table(self, rel: Relationship) -> str:\n        cols = []\n        pk_parts = []\n        for p in rel.participants:\n            ent = self.entities.get(p)\n            if ent:\n                key_attrs = ent.get_key_attributes()\n                if key_attrs:\n                    key = key_attrs[0]\n                    fk_col = f\"{ent.name.lower()}_{key.name.lower()}\"\n                    cols.append(f\"    {fk_col} INTEGER REFERENCES {ent.name.lower()}({key.name.lower()})\")\n                    pk_parts.append(fk_col)\n        for attr in rel.attributes:\n            cols.append(f\"    {attr.name.lower()} VARCHAR(50)\")\n        pk = \", \".join(pk_parts)\n        cols.append(f\"    PRIMARY KEY ({pk})\")\n        return f\"CREATE TABLE {rel.name.lower()} (\\n\" + \",\\n\".join(cols) + \"\\n);\\n\"\n    def _create_multi_valued_table(self, ent: Entity, attr: Attribute) -> str:\n        key_attrs = ent.get_key_attributes()\n        if not key_attrs:\n            return \"\"\n        key = key_attrs[0]\n        return (f\"CREATE TABLE {ent.name.lower()}_{attr.name.lower()} (\\n\"\n                f\"    {ent.name.lower()}_{key.name.lower()} INTEGER \"\n                f\"REFERENCES {ent.name.lower()}({key.name.lower()}),\\n\"\n                f\"    {attr.name.lower()} VARCHAR(50),\\n\"\n                f\"    PRIMARY KEY ({ent.name.lower()}_{key.name.lower()}, {attr.name.lower()})\\n);\\n\")\ndef dry_run_mapping():\n    steps = [\n        (\"Step 1: Strong Entities\",\n         \"Create table STUDENT. Composite name flattened to first_name, last_name.\\nstudent_id becomes PRIMARY KEY.\",\n         \"CREATE TABLE student (\\n    student_id INTEGER PRIMARY KEY,\\n    first_name VARCHAR(100),\\n    last_name VARCHAR(100)\\n);\"),\n        (\"Step 2: Weak Entities\",\n         \"Create table DEPENDENT. PRIMARY KEY = (student_id, dependent_name).\\nstudent_id is also FOREIGN KEY to STUDENT.\",\n         \"CREATE TABLE dependent (\\n    student_id INTEGER REFERENCES student(student_id),\\n    dependent_name VARCHAR(100),\\n    PRIMARY KEY (student_id, dependent_name)\\n);\"),\n        (\"Step 3: M:N Relationships\",\n         \"Create junction table ENROLLS_IN. Composite PK = (student_id, course_id).\",\n         \"CREATE TABLE enrolls_in (\\n    student_id INTEGER REFERENCES student(student_id),\\n    course_id INTEGER REFERENCES course(course_id),\\n    semester VARCHAR(50),\\n    PRIMARY KEY (student_id, course_id)\\n);\"),\n        (\"Step 4: Multi-valued Attributes\",\n         \"Create separate table for phone_numbers. Composite PK = (student_id, phone).\",\n         \"CREATE TABLE student_phone (\\n    student_id INTEGER REFERENCES student(student_id),\\n    phone VARCHAR(20),\\n    PRIMARY KEY (student_id, phone)\\n);\"),\n    ]\n    for title, desc, sql in steps:\n        print(f\"\\n--- {title} ---\")\n        print(f\"Action: {desc}\")\n        print(f\"SQL: {sql}\")\nif __name__ == \"__main__\":\n    model = ERModel()\n    student = Entity(\"STUDENT\")\n    student.add_attribute(Attribute(\"student_id\", AttrType.KEY))\n    name = Attribute(\"name\", AttrType.COMPOSITE)\n    name.add_sub_attribute(Attribute(\"first_name\"))\n    name.add_sub_attribute(Attribute(\"last_name\"))\n    student.add_attribute(name)\n    student.add_attribute(Attribute(\"phone_numbers\", AttrType.MULTI_VALUED))\n    model.add_entity(student)\n    course = Entity(\"COURSE\")\n    course.add_attribute(Attribute(\"course_id\", AttrType.KEY))\n    course.add_attribute(Attribute(\"title\"))\n    course.add_attribute(Attribute(\"credits\"))\n    model.add_entity(course)\n    enrolls = Relationship(\"ENROLLS_IN\", CardType.MANY_TO_MANY)\n    enrolls.participants = [\"STUDENT\", \"COURSE\"]\n    enrolls.add_attribute(Attribute(\"semester\"))\n    model.add_relationship(enrolls)\n    for s in model.map_to_relational():\n        print(s)\n    dry_run_mapping()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Entity identification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) for N nouns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E) for E entities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear scan through requirements text"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Attribute classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(A) for A attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each attribute classified independently"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cardinality determination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(R*P) for R rels, P participants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(R) for R relationships"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checks both directions per relationship"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ER diagram rendering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E+R+A) elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E+R+A) for elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each element drawn exactly once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ER-to-Rel mapping (strong)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E) for E strong entities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(T) for T tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One table per strong entity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ER-to-Rel mapping (weak)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(W) for W weak entities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per weak entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One table + one FK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ER-to-Rel mapping (M:N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(J) for J junction tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(J) tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each M:N creates one junction table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-valued attr handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(M) for M multi-valued attrs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(M) tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each becomes a separate table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generalization (Strategy B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(S) for S subclasses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(S+1) tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Superclass + one per subclass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E+W+R+M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(T) tables created"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All operations linear in input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "WHY O(E+W+R+M) is optimal:"
            }), " Each entity, weak entity, relationship, and multi-valued attribute requires exactly one pass to produce its corresponding table. No sorting, nested loops, or combinatorial explosions. The mapping is inherently linear because the ER diagram is a graph where each node maps to one output artifact."]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ad-table-er-model-advantages-and-disadvantages",
      children: "A&D Table: ER Model Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conceptual clarity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intuitive visual for non-technical stakeholders"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cluttered with large schemas (50+ entities)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Design correctness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Catches flaws before implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not enforce normalization automatically"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Communication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common language across roles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Notation variations cause confusion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Abstraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-level, implementation-independent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lacks physical design details"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Relationship modeling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rich cardinality + participation constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ternary relationships hard to represent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Extensibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EER adds generalization/specialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composite attributes cause deep nesting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tool support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supported by all major DB design tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No universal diagram interchange standard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works well up to ~100 entity types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beyond that, diagram becomes unreadable"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-in-er-modeling",
      children: "Edge Cases in ER Modeling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Redundant Relationships"
      }), "\nA redundant relationship can be derived from other relationships.\nExample: A --teaches--> B (Professor teaches Course), B --belongs_to--> C (Course belongs to Department), A --works_in--> D (Professor works in Department) -- REDUNDANT if C=D\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detection:"
      }), " If relationship R can be expressed as composition of other relationships, R is redundant.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Remove redundant relationships; use views or computed queries.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Circular Relationships"
      }), "\nThree or more entities form a cycle of relationships.\nExample: EMPLOYEE --works_in--> DEPARTMENT, DEPARTMENT --manages--> PROJECT, PROJECT --assigned_to--> EMPLOYEE\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Circular FK constraints cause insertion-order deadlocks. Cannot insert into any table first.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Make at least one FK nullable, or use deferred constraint checking.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Fan Trap"
      }), "\nOccurs when a many-to-one relationship fans out to multiple many sides.\nExample: BRANCH --has--> LOAN (1:N), BRANCH --has--> ACCOUNT (1:N)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Path through BRANCH is ambiguous for \"which loan belongs to which account.\"\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Introduce direct relationship between LOAN and CUSTOMER.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Chasm Trap"
      }), "\nOccurs when two many-to-one relationships converge, causing information loss in joins.\nExample: DEPARTMENT --has--> EMPLOYEE (1:N), DEPARTMENT --manages--> PROJECT (1:N)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " A JOIN may lose employees whose department has no projects.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Use separate queries or UNION.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Attributes on Relationships"
      }), "\nAttributes belonging to the association (grade on ENROLLS_IN) may be incorrectly placed on an entity.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detect:"
      }), " If an attribute describes the association, not the entity, it belongs on the relationship diamond.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "6. Weak Entity Without Discriminator"
      }), "\nA weak entity needs a discriminator to distinguish entities within the same owner.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Every weak entity must have a discriminator. Add ordinal if none exists."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-entities-and-entity-sets",
      children: "2.2 Entities and Entity Sets"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "entity"
      }), " is a distinguishable object that exists in the real world. Each entity has a unique identity. For example, a specific student named \"Alice Chen\" with student ID \"1001\" is an entity.\nAn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "entity set"
      }), " is a collection of entities that share the same properties. For example, all students form the STUDENT entity set. Entity sets are conventionally named in uppercase singular.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Entity vs. Entity Set:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Entity: Alice Chen, student ID 1001 (a specific instance)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Entity Set: STUDENT (the collection of all student entities)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-family-tree",
      children: "Real-World Analogy: Family Tree"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ER Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Family Tree Equivalent"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Entity Set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All people in the family"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A specific person (Grandma Rose)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Attribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Name, birth year, eye color of Grandma Rose"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key Attribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Social Security Number uniquely identifies each person"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Relationship"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Parent of\" connects two people"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weak Entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A childhood nickname tied to a specific person"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "In a family tree, each person exists independently (strong entity). But a \"Family Nickname\" (like \"Little John\" within the Smith family) is a weak entity → it has meaning only within the context of a specific family."
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-to-identify-entities",
      children: "Numbered Steps to Identify Entities"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read the requirements document thoroughly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Underline all nouns (potential entities) and verbs (potential relationships)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Discard nouns that are attributes of other entities (e.g., \"color\" of a car is an attribute of CAR, not an entity)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Discard nouns that are relationships (e.g., \"enrollment\" is the relationship between Student and Course)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For remaining nouns, verify they have multiple attributes and a unique identifier"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name entity sets in uppercase singular (STUDENT, not STUDENTS)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document each entity with a clear definition"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-entity-identification",
      children: "Pseudocode: Entity Identification"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-pseudocode",
        children: "PROCEDURE IdentifyEntities(requirements):\n    nouns = ExtractNouns(requirements)\n    candidates = []\n    \n    FOR EACH noun IN nouns:\n        IF HasMultipleAttributes(noun) AND HasIdentifier(noun):\n            IF NOT IsRelationship(noun):\n                candidates.ADD(noun)\n    \n    RETURN candidates\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-attributes",
      children: "2.3 Attributes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Attributes describe the properties of entities. Each entity has a value for each of its attributes.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attribute Classifications:"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Simple vs. Composite:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Simple (Atomic):"
        }), " Cannot be divided. Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "student_id"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "age"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Composite:"
        }), " Can be divided into subparts. Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "name"
        }), " can be divided into ", (0,jsx_runtime.jsx)(_components.code, {
          children: "first_name"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "middle_initial"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "last_name"
        }), "; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "address"
        }), " into ", (0,jsx_runtime.jsx)(_components.code, {
          children: "street"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "city"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "state"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "zip_code"
        }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Single-Valued vs. Multi-Valued:"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single-Valued:"
        }), " One value per entity. Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "student_id"
        }), " (a student has one ID)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-Valued:"
        }), " Zero or more values. Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "phone_numbers"
        }), " (a student may have multiple phone numbers); ", (0,jsx_runtime.jsx)(_components.code, {
          children: "degrees"
        }), " (a person may have multiple degrees)\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Stored vs. Derived:"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stored:"
        }), " Value is physically stored in the database. Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "date_of_birth"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Derived:"
        }), " Value is computed from stored values. Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "age"
        }), " is derived from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "date_of_birth"
        }), " and the current date\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Null Values:"
        }), " An attribute may take a null value when:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The attribute does not apply (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "apartment_number"
        }), " for a single-family home)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The value is unknown (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "salary"
        }), " has not been entered yet)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The value is unknown but exists (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "phone_number"
        }), " exists but we do not know it)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "attribute-types-comparison",
      children: "Attribute Types Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Simple"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Composite"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Derived"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Multi-Valued"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stored"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Definition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Atomic, indivisible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composed of sub-attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computed from stored data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Holds multiple values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physically stored"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uniquely identifies entity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "age, student_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "name (first, last), address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "age from DOB, experience"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "phone_numbers, degrees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "date_of_birth, salary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "student_id, SSN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not stored (computed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate table required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary key column"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ER Notation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single ellipse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ellipse with sub-ellipses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dashed ellipse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double-line ellipse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solid ellipse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Underlined text"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Update Cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must update multiple cols"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-updates on query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert/delete in sep table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rarely changed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Indexing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Straightforward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On sub-attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot index directly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On sep table columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Straightforward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always indexed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Normalization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always 1NF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on dependency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate table = 4NF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary key"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SQL Mapping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computed column / view"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate table with FK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PRIMARY KEY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (computation cost)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (join required)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory Use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed per type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sum of sub-attr sizes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero (computed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable, potentially large"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-student-registration-form",
      children: "Real-World Analogy: Student Registration Form"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider a university registration form:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Simple:"
        }), " Student ID (a single, atomic number)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Composite:"
        }), " Full Name = First Name + Middle Initial + Last Name (can be broken down)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-valued:"
        }), " Phone Numbers (home, cell, work → zero or more)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Derived:"
        }), " Age (calculated from Date of Birth and today's date)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stored:"
        }), " Date of Birth (physically stored in database)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key:"
        }), " Student ID (uniquely identifies each student)\nThe form designer decides which fields are composite (they provide sub-boxes for first/last name) and which are simple (single box for ID). They know phone numbers need space for multiple entries. Age is never written on the form → it is computed when needed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-attribute-type-validator",
      children: "Python Implementation: Attribute Type Validator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from datetime import date\nfrom typing import Any, List, Set, Optional\nclass AttributeValidator:\n    \"\"\"Validates attribute values based on their type classification.\"\"\"\n    @staticmethod\n    def validate_simple(value: Any, expected_type: type) -> bool:\n        return isinstance(value, expected_type)\n    @staticmethod\n    def validate_composite(components: dict, required_keys: Set[str]) -> bool:\n        return required_keys.issubset(set(components.keys()))\n    @staticmethod\n    def validate_multi_valued(values: List[Any], min_items: int = 0) -> bool:\n        return len(values) >= min_items\n    @staticmethod\n    def validate_derived(stored_attrs: dict, expression: str) -> Optional[Any]:\n        if expression == \"age\" and \"date_of_birth\" in stored_attrs:\n            dob = stored_attrs[\"date_of_birth\"]\n            today = date.today()\n            return today.year - dob.year - (\n                (today.month, today.day) < (dob.month, dob.day)\n            )\n        return None\nclass AttributeClassifier:\n    \"\"\"Classifies and validates attribute types for ER modeling.\"\"\"\n    def __init__(self):\n        self.attribute_types: dict = {}\n    def register(self, name: str, attr_type: str, **metadata) -> None:\n        self.attribute_types[name] = {\"type\": attr_type, **metadata}\n    def classify_example(self) -> dict:\n        return {\n            \"student_id\": {\n                \"type\": \"key\",\n                \"description\": \"Unique 8-digit integer\",\n                \"null_allowed\": False\n            },\n            \"name\": {\n                \"type\": \"composite\",\n                \"components\": [\"first_name\", \"middle_initial\", \"last_name\"],\n                \"null_allowed\": False\n            },\n            \"date_of_birth\": {\n                \"type\": \"stored\",\n                \"format\": \"YYYY-MM-DD\",\n                \"null_allowed\": False\n            },\n            \"age\": {\n                \"type\": \"derived\",\n                \"expression\": \"CURRENT_DATE - date_of_birth\",\n                \"null_allowed\": True\n            },\n            \"phone_numbers\": {\n                \"type\": \"multi_valued\",\n                \"max_count\": 5,\n                \"null_allowed\": True\n            }\n        }\ndef demonstrate_attribute_types():\n    print(\"=== Attribute Types Demonstration ===\\n\")\n    data = {\n        \"student_id\": 1001,\n        \"name\": {\"first_name\": \"Alice\", \"middle_initial\": \"M\", \"last_name\": \"Chen\"},\n        \"date_of_birth\": date(2000, 5, 15),\n        \"phone_numbers\": [\"555-0101\", \"555-0102\"],\n    }\n    validator = AttributeValidator()\n    simple_ok = validator.validate_simple(data[\"student_id\"], int)\n    print(f\"Simple (student_id is int): {simple_ok}\")\n    composite_ok = validator.validate_composite(\n        data[\"name\"], {\"first_name\", \"last_name\"}\n    )\n    print(f\"Composite (name has first+last): {composite_ok}\")\n    mv_ok = validator.validate_multi_valued(data[\"phone_numbers\"])\n    print(f\"Multi-valued (phone count={len(data['phone_numbers'])}): {mv_ok}\")\n    age = validator.validate_derived(data, \"age\")\n    print(f\"Derived (age from DOB): {age}\")\nif __name__ == \"__main__\":\n    demonstrate_attribute_types()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-for-attributes",
      children: "Complexity Analysis for Attributes"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Simple attr validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single type check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Composite attr validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(K) for K sub-attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(K)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checks all required sub-fields"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-valued attr storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V) for V values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each value stored separately"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Derived attr computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple expression evaluation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Composite attr flattening"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(K) sub-attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(K) columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each sub-attribute becomes a column"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-valued attr mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(P+E) entity PK + values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E+V) table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New table with entity FK + value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Null value check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single comparison"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "WHY multi-valued attributes require O(P+E):"
            }), " To map a multi-valued attribute like phone_numbers, we must read the entity's primary key (P) and create a new row for each value (V). The total work is proportional to the number of values. This cannot be O(1) because each value becomes its own row in the separate table."]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-relationship-types-and-relationship-sets",
      children: "2.4 Relationship Types and Relationship Sets"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "relationship"
      }), " is an association among two or more entities. For example, Alice Chen (a STUDENT entity) takes CS101 (a COURSE entity).\nA ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "relationship set"
      }), " is a collection of relationships of the same type. For example, all takes relationships form the TAKES relationship set.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Degree of a Relationship:"
      }), " The number of entity types participating in the relationship."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unary (degree 1):"
        }), " Relationship between entities of the same entity set. Example: MARRIED_TO (PERSON married to another PERSON), MANAGES (EMPLOYEE manages another EMPLOYEE)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Binary (degree 2):"
        }), " Relationship between two entity sets. This is the most common degree."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ternary (degree 3):"
        }), " Relationship among three entity sets.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Cardinality Constraints:"
        }), " For binary relationships, the cardinality constraint specifies how many entities from one set can relate to entities in the other set."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-to-One (1:1):"
        }), " An entity in A is associated with at most one entity in B, and vice versa. Example: A MANAGER manages at most one DEPARTMENT; a DEPARTMENT has at most one MANAGER."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-to-Many (1:N):"
        }), " An entity in A is associated with zero or more entities in B, but an entity in B is associated with at most one entity in A. Example: A DEPARTMENT has many EMPLOYEES, but an EMPLOYEE belongs to at most one DEPARTMENT."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Many-to-One (N:1):"
        }), " The inverse of 1:N. Multiple entities in A relate to a single entity in B."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Many-to-Many (M:N):"
        }), " An entity in A is associated with any number of entities in B, and vice versa. Example: A STUDENT can take many COURSEs; a COURSE can be taken by many STUDENTs.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Participation Constraints (Total vs. Partial):"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Total Participation:"
        }), " Every entity in the set must participate in the relationship. Example: Every STUDENT must be enrolled in at least one COURSE."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Partial Participation:"
        }), " Some entities may not participate. Example: Not every FACULTY member advises a STUDENT."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "relationship-types-comparison",
      children: "Relationship Types Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "1:1 (One-to-One)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "1:N (One-to-Many)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "M:N (Many-to-Many)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Definition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each entity on both sides relates to at most one"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One side relates to many; other to at most one"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both sides relate to many"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manager manages Department"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Department has Employees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Student takes Course"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ER Notation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arrow on both sides"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arrow on \"1\" side only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No arrows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FK Placement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Either table (with UNIQUE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many-side table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New junction table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Junction Table?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes, always required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Junction PK"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composite of both FKs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Redundancy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low to moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple JOIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple JOIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double JOIN (through junction)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Update Anomalies"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Potential if FK not indexed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare with composite PK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-world Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Country has Capital"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mother has Children"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Student enrolls in Courses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cardinality on both sides"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exactly 1 each"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 on one side, N on other"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N on both sides"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Participation (typical)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Often partial on both"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total on many side"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total on both sides"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mapping Rule"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add FK + UNIQUE to either"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add FK to many side"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New table with composite PK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Common Pitfall"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assuming 1:1 when actually 1:N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing NOT NULL on FK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting junction table attributes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-to-determine-cardinality",
      children: "Numbered Steps to Determine Cardinality"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pick one entity instance"
        }), " from side A (e.g., one specific DEPARTMENT)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ask:"
        }), " How many B entities can this A relate to? (DEPARTMENT has how many EMPLOYEES?)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Many (more than 1) -> side A is \"one\" or \"many\" depending on count"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pick one entity instance"
        }), " from side B (e.g., one specific EMPLOYEE)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ask:"
        }), " How many A entities can this B relate to? (EMPLOYEE belongs to how many DEPARTMENTS?)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " One (at most 1) -> side B is \"one\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Combine:"
        }), " A can relate to many B (N), B can relate to at most one A (1) => 1:N from A to B"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-cardinality-determination",
      children: "Pseudocode: Cardinality Determination"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-pseudocode",
        children: "PROCEDURE DetermineCardinality(entityA, entityB, requirements):\n    a_to_b_count = CountMaxRelated(entityA, entityB, requirements)\n    b_to_a_count = CountMaxRelated(entityB, entityA, requirements)\n    \n    IF a_to_b_count == 1 AND b_to_a_count == 1:\n        RETURN \"1:1\"\n    ELSE IF a_to_b_count > 1 AND b_to_a_count == 1:\n        RETURN \"1:N (A to B)\"\n    ELSE IF a_to_b_count == 1 AND b_to_a_count > 1:\n        RETURN \"1:N (B to A)\"\n    ELSE:\n        RETURN \"M:N\"\nFUNCTION CountMaxRelated(entityFrom, entityTo, requirements):\n    // Scan requirements for phrases like \"each X has many Y\" or \"each X has one Y\"\n    IF requirements CONTAINS \"many\" NEAR entityFrom NEAR entityTo:\n        RETURN MANY\n    ELSE:\n        RETURN 1\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-cardinality-determination-for-school-system",
      children: "Dry Run: Cardinality Determination for School System"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " A school system where teachers teach classes, and classes have students."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Entity Pair"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Answer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cardinality"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEACHER -> CLASS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How many classes can one teacher teach?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many (N)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CLASS -> TEACHER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How many teachers teach one class?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exactly 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One (1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TEACHER to CLASS"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1:N"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CLASS -> STUDENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How many students in one class?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many (N)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STUDENT -> CLASS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How many classes can one student take?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many (N)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLASS to STUDENT"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "M:N"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEACHER -> STUDENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct relationship?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Via CLASS only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Indirect)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-cardinality-checker",
      children: "C++ Implementation: Cardinality Checker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\nenum class Cardinality { ONE_TO_ONE, ONE_TO_MANY, MANY_TO_MANY };\nstruct EntityPair {\n    string entityA, entityB;\n    int maxAtoB, maxBtoA;\n    string description;\n    Cardinality determine() const {\n        if (maxAtoB &lt;= 1 && maxBtoA <= 1) return Cardinality::ONE_TO_ONE;\n        if (maxAtoB > 1 && maxBtoA &lt;= 1) return Cardinality::ONE_TO_MANY;\n        return Cardinality::MANY_TO_MANY;\n    }\n    string toString() const {\n        switch(determine()) {\n            case Cardinality::ONE_TO_ONE: return \"1:1\";\n            case Cardinality::ONE_TO_MANY: return \"1:N (\" + entityA + \" -> \" + entityB + \")\";\n            case Cardinality::MANY_TO_MANY: return \"M:N\";\n        }\n        return \"?\";\n    }\n};\nvoid analyzeRelationship(const EntityPair& pair) {\n    cout &lt;< pair.entityA << \" -> \" << pair.entityB << \": max=\" << pair.maxAtoB << endl;\n    cout &lt;< pair.entityB << \" -> \" << pair.entityA << \": max=\" << pair.maxBtoA << endl;\n    cout &lt;< \"Cardinality: \" << pair.toString() << endl;\n    cout &lt;< pair.description << endl << endl;\n}\nint main() {\n    vector<EntityPair> relationships = {\n        {\"MANAGER\", \"DEPARTMENT\", 1, 1,\n         \"A manager manages exactly one department; a department has exactly one manager.\"},\n        {\"DEPARTMENT\", \"EMPLOYEE\", 100, 1,\n         \"A department has many employees; each employee belongs to one department.\"},\n        {\"STUDENT\", \"COURSE\", 10, 200,\n         \"A student takes many courses; a course has many students.\"},\n        {\"COUNTRY\", \"CAPITAL\", 1, 1,\n         \"A country has exactly one capital; a capital belongs to exactly one country.\"},\n        {\"PERSON\", \"PARENT\", 2, 10,\n         \"A person has up to 2 parents; a parent can have many children.\"},\n    };\n    for (const auto& rel : relationships) {\n        analyzeRelationship(rel);\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-relationship-set-manager",
      children: "Python Implementation: Relationship Set Manager"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from enum import Enum\nfrom typing import List, Dict, Optional, Tuple, Set\nclass Cardinality(Enum):\n    ONE_TO_ONE = \"1:1\"\n    ONE_TO_MANY = \"1:N\"\n    MANY_TO_MANY = \"M:N\"\nclass Participation(Enum):\n    TOTAL = \"TOTAL\"\n    PARTIAL = \"PARTIAL\"\nclass RelationshipSet:\n    def __init__(self, name: str):\n        self.name = name\n        self.cardinality: Optional[Cardinality] = None\n        self.participations: Dict[str, Participation] = {}\n        self.participants: List[str] = []\n        self.attributes: List[str] = []\n    def set_cardinality(self, card: Cardinality) -> None:\n        self.cardinality = card\n    def add_participant(self, entity: str, part: Participation) -> None:\n        self.participants.append(entity)\n        self.participations[entity] = part\n    def validate(self) -> Tuple[bool, List[str]]:\n        errors = []\n        if not self.cardinality:\n            errors.append(f\"Relationship {self.name} has no cardinality set\")\n        if len(self.participants) &lt; 2:\n            errors.append(f\"Relationship {self.name} needs at least 2 participants\")\n        return (len(errors) == 0, errors)\n    def get_mapping_rule(self) -> str:\n        if not self.cardinality:\n            return \"Undefined\"\n        rules = {\n            Cardinality.ONE_TO_ONE: \"Add FK with UNIQUE constraint to either participant's table\",\n            Cardinality.ONE_TO_MANY: \"Add FK to the 'many' side's table\",\n            Cardinality.MANY_TO_MANY: \"Create a new junction table with composite PK of both FKs\",\n        }\n        return rules[self.cardinality]\n    def __repr__(self) -> str:\n        parts = \", \".join(self.participants)\n        return f\"RelationshipSet({self.name}, {self.cardinality.value if self.cardinality else '?'}, [{parts}])\"\nclass RelationshipAnalyzer:\n    \"\"\"Analyzes and validates relationships in an ER model.\"\"\"\n    def __init__(self):\n        self.relationships: List[RelationshipSet] = []\n    def add(self, rel: RelationshipSet) -> None:\n        self.relationships.append(rel)\n    def analyze_all(self) -> None:\n        for rel in self.relationships:\n            ok, errors = rel.validate()\n            print(f\"\\nRelationship: {rel.name} -> {rel.cardinality.value if rel.cardinality else '?'}\")\n            print(f\"  Participants: {rel.participants}\")\n            print(f\"  Mapping Rule: {rel.get_mapping_rule()}\")\n            if errors:\n                print(f\"  Validation Errors: {errors}\")\n            else:\n                print(f\"  Status: VALID\")\n    def find_redundant(self) -> List[Tuple[str, str]]:\n        \"\"\"Detect potentially redundant relationships by participant overlap.\"\"\"\n        pairs: List[Tuple[Set[str], str]] = []\n        for rel in self.relationships:\n            pairs.append((set(rel.participants), rel.name))\n        redundant = []\n        for i, (p1, n1) in enumerate(pairs):\n            for j, (p2, n2) in enumerate(pairs):\n                if i < j and p1 == p2:\n                    redundant.append((n1, n2))\n        return redundant\ndef demonstrate_relationship_analysis():\n    analyzer = RelationshipAnalyzer()\n    mgr_dept = RelationshipSet(\"MANAGES\")\n    mgr_dept.set_cardinality(Cardinality.ONE_TO_ONE)\n    mgr_dept.add_participant(\"MANAGER\", Participation.PARTIAL)\n    mgr_dept.add_participant(\"DEPARTMENT\", Participation.TOTAL)\n    analyzer.add(mgr_dept)\n    dept_emp = RelationshipSet(\"EMPLOYS\")\n    dept_emp.set_cardinality(Cardinality.ONE_TO_MANY)\n    dept_emp.add_participant(\"DEPARTMENT\", Participation.TOTAL)\n    dept_emp.add_participant(\"EMPLOYEE\", Participation.TOTAL)\n    analyzer.add(dept_emp)\n    student_course = RelationshipSet(\"ENROLLS_IN\")\n    student_course.set_cardinality(Cardinality.MANY_TO_MANY)\n    student_course.add_participant(\"STUDENT\", Participation.TOTAL)\n    student_course.add_participant(\"COURSE\", Participation.PARTIAL)\n    analyzer.add(student_course)\n    analyzer.analyze_all()\n    redundant = analyzer.find_redundant()\n    if redundant:\n        print(f\"\\nPotentially redundant pairs: {redundant}\")\n    else:\n        print(\"\\nNo redundant relationships detected.\")\nif __name__ == \"__main__\":\n    demonstrate_relationship_analysis()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ad-table-relationship-degree-analysis",
      children: "A&D Table: Relationship Degree Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Unary"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Binary"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ternary"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Participants"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 entity set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 entity sets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 entity sets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Employee manages Employee"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Student takes Course"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doctor prescribes Drug to Patient"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Diagram Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-loop (simple)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Straight line"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Triangle with diamond"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use Frequency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare (5%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very common (90%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare (5%)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mapping Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-referencing FK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex decomposition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Common Abuses"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overused for hierarchies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Often should be 2 binaries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When to Use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchies, peer relationships"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most business rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tripartite events (prescriptions, shipments)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-weak-entity-sets",
      children: "2.5 Weak Entity Sets"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "weak entity set"
      }), " is an entity set whose existence depends on another entity set (the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "identifying"
      }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "owner"
      }), " entity set).\nCharacteristics:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A weak entity does not have a primary key of its own"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["It is identified by combining its ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "discriminator"
        }), " (partial key) with the primary key of the identifying entity set"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The identifying relationship is many-to-one from weak to owner"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The participation of the weak entity in the identifying relationship is always total\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " A DEPENDENT entity depends on an EMPLOYEE entity. Two employees might both have a dependent named \"John Smith.\" Dependents are identified by the combination of their name (discriminator) and the employee ID (owner's key)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "weak-vs-strong-entity-comparison",
      children: "Weak vs Strong Entity Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strong Entity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Weak Entity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Definition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exists independently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on owner for existence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Primary Key"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Has its own primary key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No PK; uses discriminator + owner's PK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ER Notation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single rectangle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double rectangle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Identifying Relationship"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double diamond (mandatory)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Participation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Independent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always total on identifying relationship"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Existence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exists without any other entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ceases to exist if owner is deleted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STUDENT, COURSE, EMPLOYEE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DEPENDENT, LINE_ITEM, SEAT_ASSIGNMENT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Foreign Key"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May reference others"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always has FK to owner (part of PK)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Discriminator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required (distinguishes within owner)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mapping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct table with PK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Table with composite PK (FK + discriminator)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delete Behavior"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Independent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CASCADE delete from owner"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-world Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invoice header"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invoice line items"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cascade Effect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deleting owner deletes all weak entities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Update Restrictions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot change owner reference easily"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Common Misconception"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weak entity = no attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weak entity has attributes but no PK"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-invoice-system",
      children: "Real-World Analogy: Invoice System"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strong Entity: INVOICE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An invoice document with an invoice number"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weak Entity: LINE_ITEM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each product row on the invoice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Owner's PK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invoice number (INV-1001)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Discriminator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Line number (1, 2, 3)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Composite Key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INV-1001 + Line 2 uniquely identifies \"Laptop\" row"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Identifying Relationship"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LINE_ITEM belongs to INVOICE (1:N from INVOICE)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total Participation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every line item must be on exactly one invoice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cascade Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If invoice is voided, all its line items are removed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Without the invoice, a line item is meaningless. \"2 x Laptop at $999\" means nothing if you do not know which invoice it belongs to."
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-to-identify-and-map-weak-entities",
      children: "Numbered Steps to Identify and Map Weak Entities"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check dependency"
        }), " → Ask: \"Can this entity exist without another entity?\" If no, it is weak"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify owner"
        }), " → Find the entity on which it depends"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Determine discriminator"
        }), " → Find the attribute that distinguishes weak entities within one owner (e.g., line_number, dependent_name)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verify total participation"
        }), " → Confirm that every weak entity must belong to an owner"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verify M:1 identifying relationship"
        }), " → Confirm many weak entities belong to one owner"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Map owner"
        }), " → Create table for strong entity first (standard mapping)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Map weak entity"
        }), " → Create table with composite PK = owner's PK + discriminator"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add FK constraint"
        }), " → owner's PK in weak entity table is also a FK"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add ON DELETE CASCADE"
        }), " → Deleting owner cascades to weak entities"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document"
        }), " → Note in schema comments that this is a weak entity"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-weak-entity-mapping",
      children: "Pseudocode: Weak Entity Mapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-pseudocode",
        children: "PROCEDURE MapWeakEntity(weakEntity, ownerEntity):\n    ownerTable = MapStrongEntity(ownerEntity)\n    \n    weakTable = CREATE TABLE weakEntity.name\n    weakTable.AddColumn(ownerEntity.PK, FOREIGN KEY REFERENCES ownerEntity)\n    weakTable.AddColumn(weakEntity.discriminator, NOT NULL)\n    \n    FOR EACH attr IN weakEntity.attributes:\n        IF attr != weakEntity.discriminator:\n            weakTable.AddColumn(attr)\n    \n    weakTable.SetPrimaryKey(ownerEntity.PK, weakEntity.discriminator)\n    weakTable.SetForeignKey(ownerEntity.PK, ON DELETE CASCADE)\n    RETURN weakTable\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-mapping-weak-entity-dependent",
      children: "Dry Run: Mapping Weak Entity DEPENDENT"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Weak entity DEPENDENT with discriminator ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dependent_name"
      }), ", owner EMPLOYEE (PK = ", (0,jsx_runtime.jsx)(_components.code, {
        children: "emp_id"
      }), "). Additional attributes: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "relationship"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "birth_date"
      }), "."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create owner table EMPLOYEE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE TABLE employee (emp_id INT PK, name VARCHAR)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create weak table DEPENDENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE TABLE dependent ("
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add owner's PK as FK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "emp_id INT REFERENCES employee(emp_id)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add discriminator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dependent_name VARCHAR(100) NOT NULL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add other attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "relationship VARCHAR(20), birth_date DATE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set composite PK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PRIMARY KEY (emp_id, dependent_name)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add cascade delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foreign key ON DELETE CASCADE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Final SQL:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE employee (\n    emp_id INTEGER PRIMARY KEY,\n    name VARCHAR(100) NOT NULL\n);\nCREATE TABLE dependent (\n    emp_id INTEGER NOT NULL REFERENCES employee(emp_id) ON DELETE CASCADE,\n    dependent_name VARCHAR(100) NOT NULL,\n    relationship VARCHAR(20),\n    birth_date DATE,\n    PRIMARY KEY (emp_id, dependent_name)\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-weak-entity-mapper",
      children: "C++ Implementation: Weak Entity Mapper"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include &lt;iostream&gt;\n#include &lt;string&gt;\n#include &lt;vector&gt;\nusing namespace std;\nstruct Column {\n    string name;\n    string type;\n    bool isPK;\n    bool isFK;\n    string references;\n    Column(string n, string t, bool pk = false, bool fk = false, string ref = \"\")\n        : name(n), type(t), isPK(pk), isFK(fk), references(ref) {}\n};\nclass WeakEntityMapper {\npublic:\n    static void mapWeakEntity(const string& weakName, const string& ownerName,\n                              const string& ownerPK, const string& discriminator,\n                              const vector<pair<string, string>>& extraAttrs) {\n        vector<Column> columns;\n        // Add owner's PK as FK\n        columns.push_back(Column(ownerPK, \"INTEGER\", true, true, ownerName + \"(\" + ownerPK + \")\"));\n        // Add discriminator\n        columns.push_back(Column(discriminator, \"VARCHAR(100)\", true, false, \"\"));\n        // Add extra attributes\n        for (const auto& [name, type] : extraAttrs) {\n            columns.push_back(Column(name, type, false, false, \"\"));\n        }\n        // Generate SQL\n        cout << \"CREATE TABLE \" << weakName << \" (\\n\";\n        for (const auto& col : columns) {\n            cout << \"    \" << col.name << \" \" << col.type;\n            if (col.isPK && !col.isFK) cout << \" NOT NULL\";\n            if (col.isFK) cout << \" NOT NULL REFERENCES \" << col.references << \" ON DELETE CASCADE\";\n            if (&col != &columns.back()) cout << \",\";\n            cout << \"\\n\";\n        }\n        // Composite PK\n        cout << \"    PRIMARY KEY (\" << ownerPK << \", \" << discriminator << \")\\n\";\n        cout << \");\\n\";\n    }\n};\nint main() {\n    cout &lt;< \"=== Weak Entity Mapping: DEPENDENT on EMPLOYEE ===\\n\\n\";\n    cout << \"-- Owner table (created first):\\n\";\n    cout << \"CREATE TABLE employee (\\n\";\n    cout << \"    emp_id INTEGER PRIMARY KEY,\\n\";\n    cout << \"    name VARCHAR(100) NOT NULL\\n\";\n    cout << \");\\n\\n\";\n    cout &lt;< \"-- Weak entity table:\\n\";\n    WeakEntityMapper::mapWeakEntity(\"dependent\", \"employee\", \"emp_id\", \"dependent_name\",\n        {{\"relationship\", \"VARCHAR(20)\"}, {\"birth_date\", \"DATE\"}});\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-weak-entity-handler",
      children: "Python Implementation: Weak Entity Handler"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import List, Tuple, Optional\nclass WeakEntity:\n    def __init__(self, name: str, owner: str, discriminator: str):\n        self.name = name\n        self.owner = owner\n        self.discriminator = discriminator\n        self.attributes: List[Tuple[str, str]] = []\n    def add_attribute(self, name: str, dtype: str) -> None:\n        self.attributes.append((name, dtype))\n    def generate_ddl(self, owner_pk: str) -> str:\n        lines = [f\"CREATE TABLE {self.name.lower()} (\"]\n        # Owner's PK as FK (part of composite PK)\n        lines.append(f\"    {owner_pk} INTEGER NOT NULL \"\n                      f\"REFERENCES {self.owner.lower()}({owner_pk}) ON DELETE CASCADE,\")\n        # Discriminator (part of composite PK)\n        lines.append(f\"    {self.discriminator.lower()} VARCHAR(100) NOT NULL,\")\n        # Extra attributes\n        for i, (aname, atype) in enumerate(self.attributes):\n            comma = \",\" if i &lt; len(self.attributes) - 1 else \"\"\n            lines.append(f\"    {aname.lower()} {atype}{comma}\")\n        # Composite primary key\n        lines.append(f\"    PRIMARY KEY ({owner_pk}, {self.discriminator.lower()})\")\n        lines.append(\");\")\n        return \"\\n\".join(lines)\n    def validate(self) -> List[str]:\n        errors = []\n        if not self.owner:\n            errors.append(\"Weak entity must have an owner\")\n        if not self.discriminator:\n            errors.append(\"Weak entity must have a discriminator\")\n        return errors\ndef demonstrate_weak_entities():\n    print(\"=== Weak Entity Demonstration ===\\n\")\n    # Example 1: Invoice system\n    line_item = WeakEntity(\"LINE_ITEM\", \"INVOICE\", \"line_number\")\n    line_item.add_attribute(\"product_name\", \"VARCHAR(100)\")\n    line_item.add_attribute(\"quantity\", \"INTEGER\")\n    line_item.add_attribute(\"unit_price\", \"DECIMAL(10,2)\")\n    print(\"--- Invoice Line Items ---\")\n    print(line_item.generate_ddl(\"invoice_id\"))\n    # Example 2: Flight seats\n    seat = WeakEntity(\"SEAT\", \"FLIGHT\", \"seat_number\")\n    seat.add_attribute(\"class\", \"VARCHAR(20)\")\n    seat.add_attribute(\"is_booked\", \"BOOLEAN\")\n    print(\"\\n--- Flight Seats ---\")\n    print(seat.generate_ddl(\"flight_id\"))\n    # Example 3: Exam scores (weak on Student + Course)\n    exam = WeakEntity(\"EXAM_SCORE\", \"STUDENT\", \"exam_date\")\n    exam.add_attribute(\"course_id\", \"INTEGER\")\n    exam.add_attribute(\"score\", \"INTEGER\")\n    print(\"\\n--- Exam Scores ---\")\n    print(exam.generate_ddl(\"student_id\"))\nif __name__ == \"__main__\":\n    demonstrate_weak_entities()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-for-weak-entities",
      children: "Edge Cases for Weak Entities"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Multi-level Weak Entity Chain"
      }), "\nA weak entity that depends on another weak entity.\nExample: SEAT depends on FLIGHT (weak), FLIGHT depends on AIRLINE (strong).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Cascade the composite key: AIRLINE.code + FLIGHT.date + FLIGHT.number + SEAT.row + SEAT.letter. The FK chain propagates through all levels.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Weak Entity with No Natural Discriminator"
      }), "\nWhen no attribute distinguishes instances within the same owner.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Add a synthetic discriminator (line_number, sequence_number, ordinal). Always use NOT NULL.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Weak Entity Shared by Multiple Owners"
      }), "\nA rare case where a weak entity depends on two strong entities simultaneously.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " An EXAM_SCORE depends on both STUDENT and COURSE.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Composite PK includes both owners' PKs plus the weak entity's discriminator: PRIMARY KEY (student_id, course_id, exam_date).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Identifying Relationship Deletion"
      }), "\nWhat happens when the owner is deleted?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SQL Behavior:"
      }), " ON DELETE CASCADE is standard. ON DELETE RESTRICT prevents deletion if weak entities exist. ON DELETE SET NULL is not meaningful since the FK is part of the PK.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Weak Entity with Its Own Relationships"
      }), "\nA weak entity can participate in relationships with other entities.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " LINE_ITEM (weak on INVOICE) can have a relationship with PRODUCT.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " The LINE_ITEM table has its composite PK; other tables can reference it with a composite FK."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "26-er-diagram-notation",
      children: "2.6 ER Diagram Notation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ER diagrams use standard symbols:\nRectangles: Entity sets\nEllipses: Attributes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Underlined attribute: Primary key"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dashed underline: Discriminator (partial key)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Double-line ellipse: Multi-valued attribute"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Double-bordered ellipse: Derived attribute\nDiamonds: Relationship sets\nLines: Connect entities to relationships"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single line: Partial participation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Double line: Total participation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Arrow from relationship to entity: \"ToOne\" side"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No arrow: \"ToMany\" side\nDouble-bordered rectangle: Weak entity set\nDouble-bordered diamond: Identifying relationship\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Diagram Description - University Schema:"
        }), "\n[STUDENT] ----< TAKES >---- [COURSE]\n|                          |\n|                          |\n(student_id)               (course_id)\n|                          |\n(name)                    (title)\n|                          |\n(phone_numbers)            (credits)\nKey:"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "STUDENT is a rectangle with attributes: student_id (PK), name, phone_numbers (multi-valued)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "COURSE is a rectangle with attributes: course_id (PK), title, credits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TAKES is a diamond connecting STUDENT and COURSE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "M:N relationship (no arrows on lines)\nBelow the diagram:\n[EMPLOYEE] ==== MANAGES ---- [DEPARTMENT]\n|        (double line     |\n|         for total)      |\n(emp_id)                  (dept_id)\n|\n(name)\nKey:"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MANAGES is 1:1 (arrow from MANAGES to EMPLOYEE, arrow from MANAGES to DEPARTMENT)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Double line: total participation of DEPARTMENT in MANAGES (every department has a manager)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single line: partial participation of EMPLOYEE (not every employee manages a department)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "er-diagram-notation-quick-reference",
      children: "ER Diagram Notation Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Symbol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rectangle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong entity set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Double rectangle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weak entity set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Diamond"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relationship set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Double diamond"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identifying relationship (for weak entity)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ellipse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attribute"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Underlined ellipse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary key attribute"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dashed underline ellipse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discriminator (partial key)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Double-line ellipse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-valued attribute"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dashed ellipse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derived attribute"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single line (connecting)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial participation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Double line (connecting)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total participation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arrow on line"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ToOne\" side (single-valued)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No arrow on line"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ToMany\" side (multi-valued)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-er-diagram-notation-renderer",
      children: "C++ Implementation: ER Diagram Notation Renderer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include &lt;iostream&gt;\n#include &lt;string&gt;\n#include &lt;vector&gt;\nusing namespace std;\nclass ERDiagramRenderer {\npublic:\n    static void renderEntity(const string& name, bool isWeak = false) {\n        string border = isWeak ? \"[[\" : \"[\";\n        string borderEnd = isWeak ? \"]]\" : \"]\";\n        cout << border << name << borderEnd << endl;\n    }\n    static void renderAttribute(const string& name, const string& type = \"simple\") {\n        if (type == \"key\") cout &lt;< \"(\" << name << \"*)\";\n        else if (type == \"multi\") cout &lt;< \"{{\" << name << \"}}\";\n        else if (type == \"derived\") cout &lt;< \"<\" << name << \"&gt;\";\n        else if (type == \"discriminator\") cout &lt;< \"(\" << name << \"~)\";\n        else cout &lt;< \"(\" << name << \")\";\n    }\n    static void renderRelationship(const string& name, bool isIdentifying = false) {\n        string sym = isIdentifying ? \"<>\" : \"<>\";\n        cout << \"---{\" << name << \"}---\";\n    }\n    static void renderCardinality(const string& from, const string& to,\n                                   const string& fromCard, const string& toCard) {\n        cout &lt;< from << \" --(\" << fromCard << \")-- REL --(\" << toCard << \")-- \" << to << endl;\n    }\n    static void renderUniversitySchema() {\n        cout << \"\\n=== University ER Diagram (Text) ===\\n\\n\";\n        cout << \"    [STUDENT] ----< ENROLLS_IN >---- [COURSE]\\n\";\n        cout << \"        |                                |\\n\";\n        cout << \"    (student_id*)                    (course_id*)\\n\";\n        cout << \"        |                                |\\n\";\n        cout << \"    {first_name}                     (title)\\n\";\n        cout << \"        |                                |\\n\";\n        cout << \"    {last_name}                      (credits)\\n\";\n        cout << \"        |\\n\";\n        cout << \"    {{phone_numbers}}\\n\";\n        cout << \"        |\\n\";\n        cout << \"    <age>\\n\\n\";\n        cout << \"    Legend:\\n\";\n        cout << \"    [ENTITY]   = Strong entity\\n\";\n        cout << \"    (attr*)    = Primary key\\n\";\n        cout << \"    {{attr}}   = Multi-valued attribute\\n\";\n        cout << \"    <attr>     = Derived attribute\\n\";\n        cout << \"    {attr}     = Composite component\\n\";\n        cout << \"    <> REL <>  = Relationship (M:N here)\\n\";\n    }\n};\nint main() {\n    ERDiagramRenderer::renderUniversitySchema();\n    cout << \"\\n=== Simple Rendering ===\\n\";\n    cout << \"Entity: \";\n    ERDiagramRenderer::renderEntity(\"STUDENT\");\n    cout << \"Weak Entity: \";\n    ERDiagramRenderer::renderEntity(\"DEPENDENT\", true);\n    cout << \"Key Attribute: \";\n    ERDiagramRenderer::renderAttribute(\"student_id\", \"key\");\n    cout << endl << \"Multi-valued: \";\n    ERDiagramRenderer::renderAttribute(\"phones\", \"multi\");\n    cout << endl << \"Derived: \";\n    ERDiagramRenderer::renderAttribute(\"age\", \"derived\");\n    cout << endl;\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "27-generalization-specialization-and-aggregation",
      children: "2.7 Generalization, Specialization, and Aggregation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Generalization:"
      }), " The process of defining a more general entity set from lower-level entity sets. Example: PERSON is a generalization of STUDENT and FACULTY. The common attributes (name, address, phone) are moved to PERSON, while specific attributes (GPA for STUDENT, salary for FACULTY) remain in the specialized sets.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Specialization:"
      }), " The inverse → defining sub-groupings within an entity set. Example: From EMPLOYEE, we define subtypes SECRETARY, ENGINEER, and MANAGER, each with additional attributes.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints on Specialization/Generalization:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disjointness:"
        }), " Can an entity belong to more than one subclass?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Disjoint (d):"
            }), " An entity can belong to at most one subclass (e.g., a bank account is either SAVINGS or CHECKING, not both)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Overlapping (o):"
            }), " An entity can belong to multiple subclasses (e.g., a person can be both a STUDENT and an EMPLOYEE)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Completeness:"
        }), " Must every entity in the superclass belong to a subclass?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Total:"
            }), " Every superclass entity must be in some subclass (e.g., every ACCOUNT must be SAVINGS or CHECKING)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial:"
            }), " Some superclass entities may not belong to any subclass (e.g., not every PERSON is a STUDENT or FACULTY)\n", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Aggregation:"
            }), " Treating a relationship as an entity for participation in other relationships. Example: PROJECT_WORKS (relationship between EMPLOYEE and PROJECT) might be treated as an entity that participates in a relationship with PAYROLL to track hours."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "er-vs-eer-comparison",
      children: "ER vs EER Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ER Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "EER Model (Extended ER)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Full Name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entity-Relationship"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extended Entity-Relationship"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Introduced"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chen, 1976"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enhanced in 1980s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Entity Types"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plain entities only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entities + superclass/subclass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Relationships"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary, unary, ternary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adds category (union) types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inheritance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specialization/Generalization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Constraints"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cardinality, participation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adds disjointness, completeness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complex Objects"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flat entities only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supports composite objects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Aggregation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not natively supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Treats relationship as entity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Notation Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (simple shapes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (adds ISA, circles, d/o)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use Case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to medium databases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex domains with hierarchies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Industry Adoption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal standard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used in advanced design tools"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Learning Curve"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Expressiveness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Captures 80% of scenarios"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Captures 95% of scenarios"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Diagram Readability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (denser)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "generalizationspecialization-mapping-strategies-comparison",
      children: "Generalization/Specialization Mapping Strategies Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy A: Single Table"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy B: Separate Tables"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy C: Subclass Only"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Description"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One table for superclass + all subclasses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Superclass table + subclass tables with FK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only subclass tables, each with all attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tables Created"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + S (for S subclasses)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Null Values"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many (subclass-specific columns are NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Joins Required"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (single table)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S joins (subclass queries need join)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No joins, but duplicated data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Constraint Enforcement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weak (any row can have any mix)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong (FK enforces existence)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weak"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disjoint Support"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Via type discriminator column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Via FK to single subclass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural (separate tables)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overlapping Support"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple boolean type flags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple FK joins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural (insert in both tables)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best (no joins)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (indexed FK)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage Efficiency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wasted space (NULLs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redundant data (duplicated superclass attrs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Adding New Subclass"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add columns (ALTER TABLE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add new table + FK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add new table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Migration Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (large table ALTER)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (new table only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recommendation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small, simple hierarchies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most cases (flexible + clean)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When queries always need subclass details"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-vehicle-registration-system",
      children: "Real-World Analogy: Vehicle Registration System"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "EER Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Vehicle Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Superclass: VEHICLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All registered vehicles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subclass: CAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Has trunk capacity, number of doors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subclass: TRUCK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Has cargo capacity, number of axles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subclass: MOTORCYCLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Has engine displacement, type"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disjoint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A VIN identifies either a car, truck, or motorcycle (not multiple)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overlapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A person can be both a STUDENT and an EMPLOYEE (overlapping)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total completeness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every vehicle must be a car, truck, or motorcycle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partial completeness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not every person is a student or faculty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Attribute inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All vehicles have VIN, make, model, year (inherited from VEHICLE)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-for-generalizationspecialization-mapping",
      children: "Numbered Steps for Generalization/Specialization Mapping"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify superclass entities"
        }), " → Find common attributes across similar entities"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify subclasses"
        }), " → Determine distinct categories with specific attributes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Determine disjointness"
        }), " → Check if an entity can belong to multiple subclasses"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Determine completeness"
        }), " → Check if every superclass entity must be in a subclass"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Choose mapping strategy"
        }), " → A (single table), B (separate tables), or C (subclass only)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For Strategy B:"
        }), " Create superclass table with common attributes and shared PK"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For Strategy B:"
        }), " Create subclass tables with FK to superclass (same PK value)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add discriminator"
        }), " (disjoint) or boolean flags (overlapping) to superclass"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enforce constraints"
        }), " via CHECK (disjoint) or application logic (overlapping)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document"
        }), " mapping decisions and rationale in schema comments"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-generalization-mapping---strategy-b",
      children: "Pseudocode: Generalization Mapping - Strategy B"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-pseudocode",
        children: "PROCEDURE MapGeneralizationStrategyB(superclass, subclasses):\n    // Create superclass table\n    superTable = CREATE TABLE superclass.name\n    superTable.AddPrimaryKey(superclass.PK)\n    FOR EACH attr IN superclass.commonAttributes:\n        superTable.AddColumn(attr)\n    superTable.AddColumn(\"entity_type\" VARCHAR(20)) // discriminator\n    \n    // Create each subclass table\n    FOR EACH subclass IN subclasses:\n        subTable = CREATE TABLE subclass.name\n        subTable.AddColumn(superclass.PK, \n            PRIMARY KEY REFERENCES superclass.name)\n        FOR EACH attr IN subclass.specificAttributes:\n            subTable.AddColumn(attr)\n    \n    RETURN (superTable, [subTables])\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-generalization-mapping-for-vehicle-hierarchy",
      children: "Dry Run: Generalization Mapping for VEHICLE Hierarchy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Superclass VEHICLE (VIN, make, model, year). Subclasses: CAR (num_doors, trunk_capacity), TRUCK (cargo_capacity, num_axles). Disjoint, Total."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create superclass table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE TABLE vehicle (vin VARCHAR(17) PK, make VARCHAR(50), model VARCHAR(50), year INT, vehicle_type VARCHAR(20))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create CAR subclass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE TABLE car (vin VARCHAR(17) PK REFERENCES vehicle(vin), num_doors INT, trunk_capacity DECIMAL)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create TRUCK subclass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE TABLE truck (vin VARCHAR(17) PK REFERENCES vehicle(vin), cargo_capacity DECIMAL, num_axles INT)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert a car"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INSERT INTO vehicle VALUES ('1HGCM82633A004352', 'Honda', 'Accord', 2024, 'CAR'); INSERT INTO car VALUES ('1HGCM82633A004352', 4, 15.0)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert a truck"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INSERT INTO vehicle VALUES ('3GTP2VE38DG123456', 'Chevrolet', 'Silverado', 2024, 'TRUCK'); INSERT INTO truck VALUES ('3GTP2VE38DG123456', 2000.0, 2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query all vehicles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT * FROM vehicle (returns both rows)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query only cars"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["SELECT v.", (0,jsx_runtime.jsx)(_components.em, {
              children: ", c."
            }), " FROM vehicle v JOIN car c ON v.vin = c.vin"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Result:"
            }), " 3 tables, no NULLs, full constraint enforcement via FK + composite queries."]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-generalization-mapper",
      children: "Python Implementation: Generalization Mapper"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import List, Dict, Optional, Tuple\nfrom enum import Enum\nclass Disjointness(Enum):\n    DISJOINT = \"d\"\n    OVERLAPPING = \"o\"\nclass Completeness(Enum):\n    TOTAL = \"total\"\n    PARTIAL = \"partial\"\nclass SuperClass:\n    def __init__(self, name: str, pk: str):\n        self.name = name\n        self.pk = pk\n        self.common_attributes: List[Tuple[str, str]] = []\n        self.subclasses: List['SubClass'] = []\n    def add_attr(self, name: str, dtype: str) -> None:\n        self.common_attributes.append((name, dtype))\n    def add_subclass(self, sub: 'SubClass') -> None:\n        self.subclasses.append(sub)\nclass SubClass:\n    def __init__(self, name: str, disjointness: Disjointness, completeness: Completeness):\n        self.name = name\n        self.disjointness = disjointness\n        self.completeness = completeness\n        self.specific_attributes: List[Tuple[str, str]] = []\n    def add_attr(self, name: str, dtype: str) -> None:\n        self.specific_attributes.append((name, dtype))\nclass GeneralizationMapper:\n    \"\"\"Maps generalization/specialization hierarchies to relational schemas.\"\"\"\n    @staticmethod\n    def strategy_a_single_table(superclass: SuperClass) -> str:\n        \"\"\"Strategy A: One table for everything.\"\"\"\n        lines = [f\"CREATE TABLE {superclass.name.lower()} (\"]\n        lines.append(f\"    {superclass.pk.lower()} {_find_pk_type(superclass)} PRIMARY KEY,\")\n        for name, dtype in superclass.common_attributes:\n            lines.append(f\"    {name.lower()} {dtype},\")\n        # Discriminator column\n        lines.append(\"    entity_type VARCHAR(20) NOT NULL,\")\n        # Add all subclass-specific attributes (nullable)\n        all_sub_attrs = []\n        for sub in superclass.subclasses:\n            for name, dtype in sub.specific_attributes:\n                all_sub_attrs.append((f\"{sub.name.lower()}_{name.lower()}\", dtype))\n        for i, (name, dtype) in enumerate(all_sub_attrs):\n            comma = \",\" if i < len(all_sub_attrs) - 1 else \"\"\n            lines.append(f\"    {name} {dtype}{comma}\")\n        lines.append(\");\")\n        return \"\\n\".join(lines)\n    @staticmethod\n    def strategy_b_separate_tables(superclass: SuperClass) -> List[str]:\n        \"\"\"Strategy B: Superclass table + subclass tables with FK.\"\"\"\n        statements = []\n        # Superclass table\n        lines = [f\"CREATE TABLE {superclass.name.lower()} (\"]\n        lines.append(f\"    {superclass.pk.lower()} {_find_pk_type(superclass)} PRIMARY KEY,\")\n        for i, (name, dtype) in enumerate(superclass.common_attributes):\n            comma = \",\" if i &lt; len(superclass.common_attributes) - 1 else \"\"\n            lines.append(f\"    {name.lower()} {dtype}{comma}\")\n        lines.append(\");\")\n        statements.append(\"\\n\".join(lines))\n        # Subclass tables\n        for sub in superclass.subclasses:\n            lines = [f\"CREATE TABLE {sub.name.lower()} (\"]\n            lines.append(f\"    {superclass.pk.lower()} {_find_pk_type(superclass)} PRIMARY KEY \"\n                          f\"REFERENCES {superclass.name.lower()}({superclass.pk.lower()}),\")\n            for i, (name, dtype) in enumerate(sub.specific_attributes):\n                comma = \",\" if i < len(sub.specific_attributes) - 1 else \"\"\n                lines.append(f\"    {name.lower()} {dtype}{comma}\")\n            lines.append(\");\")\n            statements.append(\"\\n\".join(lines))\n        return statements\n    @staticmethod\n    def strategy_c_subclass_only(superclass: SuperClass) -> List[str]:\n        \"\"\"Strategy C: Only subclass tables (each has all attributes).\"\"\"\n        statements = []\n        for sub in superclass.subclasses:\n            lines = [f\"CREATE TABLE {sub.name.lower()} (\"]\n            lines.append(f\"    {superclass.pk.lower()} {_find_pk_type(superclass)} PRIMARY KEY,\")\n            for name, dtype in superclass.common_attributes:\n                lines.append(f\"    {name.lower()} {dtype},\")\n            for i, (name, dtype) in enumerate(sub.specific_attributes):\n                comma = \",\" if i < len(sub.specific_attributes) - 1 else \"\"\n                lines.append(f\"    {name.lower()} {dtype}{comma}\")\n            lines.append(\");\")\n            statements.append(\"\\n\".join(lines))\n        return statements\ndef _find_pk_type(superclass: SuperClass) -> str:\n    for name, dtype in superclass.common_attributes:\n        if name == superclass.pk:\n            return dtype\n    return \"INTEGER\"\ndef demonstrate_generalization():\n    print(\"=== Generalization/ Specialization Mapping ===\\n\")\n    # Vehicle hierarchy\n    vehicle = SuperClass(\"VEHICLE\", \"vin\")\n    vehicle.add_attr(\"vin\", \"VARCHAR(17)\")\n    vehicle.add_attr(\"make\", \"VARCHAR(50)\")\n    vehicle.add_attr(\"model\", \"VARCHAR(50)\")\n    vehicle.add_attr(\"year\", \"INTEGER\")\n    car = SubClass(\"CAR\", Disjointness.DISJOINT, Completeness.TOTAL)\n    car.add_attr(\"num_doors\", \"INTEGER\")\n    car.add_attr(\"trunk_capacity\", \"DECIMAL(8,2)\")\n    vehicle.add_subclass(car)\n    truck = SubClass(\"TRUCK\", Disjointness.DISJOINT, Completeness.TOTAL)\n    truck.add_attr(\"cargo_capacity\", \"DECIMAL(10,2)\")\n    truck.add_attr(\"num_axles\", \"INTEGER\")\n    vehicle.add_subclass(truck)\n    print(\"--- Strategy A: Single Table ---\")\n    print(GeneralizationMapper.strategy_a_single_table(vehicle))\n    print(\"\\n--- Strategy B: Separate Tables (Recommended) ---\")\n    for stmt in GeneralizationMapper.strategy_b_separate_tables(vehicle):\n        print(stmt)\n    print(\"\\n--- Strategy C: Subclass Tables Only ---\")\n    for stmt in GeneralizationMapper.strategy_c_subclass_only(vehicle):\n        print(stmt)\nif __name__ == \"__main__\":\n    demonstrate_generalization()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "28-from-er-to-relational-mapping",
      children: "2.8 From ER to Relational Mapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ER diagrams are conceptual → they must be converted to relational schemas for implementation. The mapping rules:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Strong Entity Sets:"
        }), " Create a table with all simple attributes. Composite attributes are flattened (each component becomes a column). The primary key becomes the table's primary key."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weak Entity Sets:"
        }), " Create a table with all attributes plus the primary key of the owning entity as a foreign key. The primary key combines the owner's key and the weak entity's discriminator."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Binary 1:1 Relationships:"
        }), " Add the primary key of one side as a foreign key in the table for the other side. Include relationship attributes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Binary 1:N Relationships:"
        }), " Add the primary key of the \"one\" side as a foreign key in the table for the \"many\" side. Total participation is enforced through NOT NULL."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Binary M:N Relationships:"
        }), " Create a new table with the primary keys of both entities as foreign keys. Their combination is the primary key. Include relationship attributes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-valued Attributes:"
        }), " Create a new table with the entity's primary key plus the attribute. The key is the combination of both."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generalization/Specialization:"
        }), " Three strategies:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Strategy A: Single table:"
            }), " Combine superclass and all subclasses into one table with nullable columns for subclass-specific attributes and a type discriminator column."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Strategy B: Separate tables for each class:"
            }), " Create a table for the superclass and separate tables for each subclass, linked via foreign keys."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Strategy C: Subclass tables only:"
            }), " Skip the superclass table; each subclass table contains both specific and inherited attributes."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complete-dry-run-er-to-relational-mapping-for-university-schema",
      children: "Complete Dry Run: ER-to-Relational Mapping for University Schema"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input ER Diagram:"
      }), " STUDENT (student_id PK, name {first, last}, phone_numbers M), COURSE (course_id PK, title, credits), ENROLLS_IN (M:N between STUDENT and COURSE, has semester, grade), DEPENDENT (weak on STUDENT, discriminator: dependent_name).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule-by-Rule Trace:"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rule #"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rule Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Input Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output Table"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Decision"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong Entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STUDENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "student(student_id PK, first_name, last_name)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composite name flattened to 2 columns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong Entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COURSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "course(course_id PK, title, credits)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple attributes become columns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weak Entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DEPENDENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dependent(student_id FK, dependent_name, relationship)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PK = (student_id, dependent_name)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1:1 Relationship"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(none here)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No 1:1 in this schema"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1:N Relationship"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(none here)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No 1:N directly mapped"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M:N Relationship"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ENROLLS_IN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "enrolls_in(student_id FK, course_id FK, semester, grade)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PK = (student_id, course_id)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-valued Attr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "phone_numbers on STUDENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "student_phone(student_id FK, phone)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PK = (student_id, phone)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generalization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(none here)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not present in this schema"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Final Schema (6 tables):"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE student (\n    student_id INTEGER PRIMARY KEY,\n    first_name VARCHAR(50) NOT NULL,\n    last_name VARCHAR(50) NOT NULL\n);\nCREATE TABLE student_phone (\n    student_id INTEGER REFERENCES student(student_id),\n    phone VARCHAR(20),\n    PRIMARY KEY (student_id, phone)\n);\nCREATE TABLE course (\n    course_id VARCHAR(10) PRIMARY KEY,\n    title VARCHAR(200) NOT NULL,\n    credits INTEGER CHECK (credits > 0)\n);\nCREATE TABLE enrolls_in (\n    student_id INTEGER REFERENCES student(student_id),\n    course_id VARCHAR(10) REFERENCES course(course_id),\n    semester VARCHAR(10),\n    grade CHAR(2),\n    PRIMARY KEY (student_id, course_id)\n);\nCREATE TABLE dependent (\n    student_id INTEGER REFERENCES student(student_id) ON DELETE CASCADE,\n    dependent_name VARCHAR(100) NOT NULL,\n    relationship VARCHAR(20),\n    birth_date DATE,\n    PRIMARY KEY (student_id, dependent_name)\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "fan-trap-vs-chasm-trap-comparison",
      children: "Fan Trap vs Chasm Trap Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fan Trap"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chasm Trap"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Definition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ambiguity when a \"one\" entity fans out to multiple \"many\" entities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Information loss when two \"many-to-one\" relationships converge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pattern"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entity A --1:N--> B and A --1:N--> C independently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entity A --N:1--> B and A --N:1--> C converge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Diagram"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BRANCH has many LOANS and many ACCOUNTS (independent)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DEPARTMENT has many EMPLOYEES and many PROJECTS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Problem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot determine which A relates to which B-C pair"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JOIN loses rows from one side"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic ambiguity (query path confusion)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row loss (incorrect query results)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Detection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple 1:N from same entity at same level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple N:1 to same entity from different entities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query Impact"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Produces wrong results (Cartesian product)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Produces incomplete results (missing rows)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Solution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add direct relationship between child entities; restructure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use UNION, separate queries, or restructure schema"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-world Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Branch --has--> Loan, Branch --has--> Account (which loan belongs to which account?)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Department --has--> Employee, Department --manages--> Project (employees without projects disappear)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prevention"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate query paths during schema design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use OUTER JOINs or verify coverage"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: What is the difference between an entity, an attribute, and a relationship?"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "entity"
      }), " is a real-world object about which we store data (e.g., STUDENT). An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "attribute"
      }), " is a property of an entity (e.g., student_id, name). A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "relationship"
      }), " is an association between entities (e.g., ENROLLS_IN connects STUDENT and COURSE). In SQL terms: entity = table, attribute = column, relationship = foreign key or junction table.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: How do you identify a weak entity?"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " A weak entity is identified by checking if its existence depends on another entity. Key indicators: it has no meaningful primary key of its own, it cannot exist without its owner, and deleting the owner must cascade-delete the weak entity. Example: LINE_ITEM on an INVOICE → the line item has no meaning without the invoice.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: What are participation constraints and why do they matter?"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Participation constraints define whether every entity in a set must participate in a relationship. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Total participation"
      }), " (double line in ER) means every entity must be involved (e.g., every student must be enrolled in at least one course). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Partial participation"
      }), " (single line) means some entities may not participate (e.g., not every professor teaches a course). They matter because they determine whether FK columns should be NOT NULL.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: What is the difference between cardinality and multiplicity?"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cardinality"
      }), " is an ER modeling concept describing the maximum number of entities on each side of a relationship (1:1, 1:N, M:N). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Multiplicity"
      }), " is the UML term for the same concept but includes both minimum and maximum constraints (e.g., 0..* or 1..*). In practice, cardinality = maximum side; multiplicity = [min, max] range. Both define relationship structure, but multiplicity is more precise.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: Explain the N+1 problem in ER-to-relational mapping."
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " The N+1 problem occurs when querying a hierarchy (generalization). For N subclass instances, you run 1 query on the superclass + N queries on subclasses (= N+1 total). This is common with Strategy B mapping. Solution: use JOINs (single query) or implement eager loading. The tradeoff is join complexity vs. query count.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6: When should you use a ternary relationship vs. two binary relationships?"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Use a ternary relationship when the relationship among three entities is atomic and cannot be decomposed. For example, a SUPPLIER supplies a PRODUCT to a WAREHOUSE → the supply relationship involves all three simultaneously. Decomposing into SUPPLIER-supplies-PRODUCT and PRODUCT-stored-in-WAREHOUSE loses the constraint that a specific supplier supplies a specific product to a specific warehouse. Use binary when the relationships are independent.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7: How do you map a unary (recursive) relationship?"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " For a unary 1:N relationship (e.g., EMPLOYEE manages EMPLOYEE): Add a self-referencing FK column (e.g., manager_id FK to employee(emp_id)). For unary M:N (e.g., TASK depends on TASK): Create a junction table with two FKs referencing the same entity's PK.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8: What is aggregation in ER modeling?"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Aggregation treats a relationship as an entity for participation in another relationship. Example: The WORKS_ON relationship between EMPLOYEE and PROJECT might be treated as an entity that participates in USES relationship with EQUIPMENT. This is needed because standard ER does not allow relationships between relationships."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. MySQL Workbench ER Tools"
      }), "\nMySQL Workbench provides a visual ER designer (reverse and forward engineering):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reverse Engineering:"
        }), " Existing database -> ER diagram (right-click the EER diagram tab, select \"Reverse Engineer\")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Forward Engineering:"
        }), " ER diagram -> SQL DDL (Database menu -> Forward Engineer)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Synchronization:"
        }), " Compare model with live database and generate ALTER scripts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Features:"
        }), " Automatic FK creation, relationship line routing, color-coded entities, layer support\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2. draw.io (diagrams.net)"
        }), "\nDraw.io is a free, web-based diagramming tool widely used for ER diagrams:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ER Templates:"
        }), " Entity-Relationship shape library with pre-built Chen and Crow's Foot notations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Export:"
        }), " PNG, SVG, PDF, or embedded HTML (viewable without draw.io)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Advantages:"
        }), " Free, collaborative (Google Drive/OneDrive integration), no install needed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Limitations:"
        }), " Manual layout only, no forward/reverse engineering with live databases\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "3. Lucidchart"
        }), "\nLucidchart is a premium diagramming tool with strong database modeling:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ER Shapes:"
        }), " Dedicated ER shape libraries with multiple notation styles"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Database Import:"
        }), " Import schema from MySQL, PostgreSQL, SQL Server, Oracle → auto-generates ER diagram"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Linking:"
        }), " Link shapes to spreadsheet data for attribute documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Export:"
        }), " Visio, PDF, SVG, PNG; integrates with Confluence, Jira, Slack"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collaboration:"
        }), " Real-time multi-user editing with comments and version history\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "4. pgAdmin4 (PostgreSQL)"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ER diagram viewer for existing PostgreSQL databases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reverse engineering from live database"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Export as image or JSON"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Limited for initial design (better for documentation of existing schemas)\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "5. DbSchema"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Universal database designer supporting 40+ databases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HTML5 documentation with interactive diagrams"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Schema synchronization and version control"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Data explorer with visual query builder\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Comparison of Tools:"
        }), "\n| Tool | Free | Reverse Eng. | Forward Eng. | Collab. | Notations |\n|------|------|-------------|-------------|---------|-----------|\n| MySQL Workbench | Yes | Yes | Yes | No | Chen, Crow's Foot |\n| draw.io | Yes | No | No | Yes | Chen, Crow's Foot |\n| Lucidchart | Limited | Yes | No | Yes | Multiple |\n| pgAdmin4 | Yes | Yes | No | No | Automatic layout |\n| DbSchema | Paid | Yes | Yes | No | Multiple |"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Practicing ER-to-relational mapping with real examples → from strong entities to weak entities to generalization → builds the skill to design any database schema systematically.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Example 2.1: Mapping a University ER Diagram to Relations"
        }), "\nGiven the ER diagram described above:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Strong entity: STUDENT\nCREATE TABLE student (\n    student_id INTEGER PRIMARY KEY,\n    first_name VARCHAR(50) NOT NULL,\n    last_name VARCHAR(50) NOT NULL\n);\n-- Multi-valued attribute: phone_numbers\nCREATE TABLE student_phone (\n    student_id INTEGER REFERENCES student(student_id),\n    phone VARCHAR(15),\n    PRIMARY KEY (student_id, phone)\n);\n-- Strong entity: COURSE\nCREATE TABLE course (\n    course_id VARCHAR(10) PRIMARY KEY,\n    title VARCHAR(200) NOT NULL,\n    credits INTEGER CHECK (credits > 0 AND credits &lt;= 5)\n);\n-- M:N relationship: TAKES\nCREATE TABLE takes (\n    student_id INTEGER REFERENCES student(student_id),\n    course_id VARCHAR(10) REFERENCES course(course_id),\n    semester VARCHAR(10),\n    grade CHAR(2),\n    PRIMARY KEY (student_id, course_id, semester)\n);\n-- Example of 1:N: DEPARTMENT has many EMPLOYEES\nCREATE TABLE department (\n    dept_id INTEGER PRIMARY KEY,\n    dept_name VARCHAR(100) NOT NULL\n);\nCREATE TABLE employee (\n    emp_id INTEGER PRIMARY KEY,\n    emp_name VARCHAR(100) NOT NULL,\n    dept_id INTEGER NOT NULL REFERENCES department(dept_id)\n);\n-- The dept_id FK in employee models the \"many\" side of 1:N\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2.2: Weak Entity -- Dependents"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Strong entity\nCREATE TABLE employee (\n    emp_id INTEGER PRIMARY KEY,\n    name VARCHAR(100) NOT NULL\n);\n-- Weak entity: DEPENDENT\n-- Identified by emp_id + dependent_name\nCREATE TABLE dependent (\n    emp_id INTEGER NOT NULL REFERENCES employee(emp_id),\n    dependent_name VARCHAR(100) NOT NULL,\n    relationship VARCHAR(20),\n    birth_date DATE,\n    PRIMARY KEY (emp_id, dependent_name)\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2.3: Generalization/Specialization -- Strategy B"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Superclass table\nCREATE TABLE person (\n    person_id INTEGER PRIMARY KEY,\n    name VARCHAR(100) NOT NULL,\n    address VARCHAR(255)\n);\n-- Subclass tables (1:1 relationship via FK)\nCREATE TABLE student (\n    person_id INTEGER PRIMARY KEY REFERENCES person(person_id),\n    gpa DECIMAL(3,2),\n    major VARCHAR(50)\n);\nCREATE TABLE faculty (\n    person_id INTEGER PRIMARY KEY REFERENCES person(person_id),\n    salary DECIMAL(10,2),\n    department VARCHAR(50)\n);\n-- A person who is both a student and faculty:\n-- INSERT INTO person VALUES (1, 'Dr. Smith', '123 Main St');\n-- INSERT INTO student VALUES (1, 3.8, 'CS');\n-- INSERT INTO faculty VALUES (1, 85000, 'CS');\n> **Warning:** Ternary relationships (degree 3) are often overused → most scenarios modeled with three entities can be expressed as two binary relationships.\n>\n> **Remember:** The ER diagram is a communication tool, not just a design artifact → use consistent notation so all stakeholders interpret it the same way.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "213-er-model-implementation-typescript",
      children: "2.13 ER Model Implementation (TypeScript)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following TypeScript code demonstrates how to programmatically represent and validate an ER model, including entity types, relationships, attributes, and cardinality constraints."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ============================================================\n// ER Model Implementation — TypeScript\n// ============================================================\n\nenum AttributeType {\n  SIMPLE,\n  COMPOSITE,\n  MULTIVALUED,\n  DERIVED,\n  KEY\n}\n\nenum Cardinality {\n  ONE_TO_ONE = '1:1',\n  ONE_TO_MANY = '1:N',\n  MANY_TO_MANY = 'M:N'\n}\n\nenum Participation {\n  TOTAL,\n  PARTIAL\n}\n\ninterface Attribute {\n  name: string;\n  type: AttributeType;\n  subAttributes?: Attribute[];\n}\n\ninterface EntityType {\n  name: string;\n  attributes: Attribute[];\n  isWeak: boolean;\n  discriminator?: string;\n}\n\ninterface RelationshipType {\n  name: string;\n  entityPairs: Array<{\n    entityName: string;\n    cardinality: Cardinality;\n    participation: Participation;\n    role?: string;\n  }>;\n  attributes: Attribute[];\n  isIdentifying: boolean;\n}\n\nclass ERModelBuilder {\n  private entities: Map<string, EntityType> = new Map();\n  private relationships: RelationshipType[] = [];\n\n  addEntity(name: string, attrs: Attribute[], isWeak = false, discriminator?: string): void {\n    if (this.entities.has(name)) {\n      throw new Error('Entity \\'' + name + '\\' already exists');\n    }\n    this.entities.set(name, { name, attributes: attrs, isWeak, discriminator });\n  }\n\n  addRelationship(\n    name: string,\n    entityPairs: RelationshipType['entityPairs'],\n    attrs: Attribute[] = [],\n    isIdentifying = false\n  ): void {\n    // Validate that all referenced entities exist\n    for (const pair of entityPairs) {\n      if (!this.entities.has(pair.entityName)) {\n        throw new Error('Entity \\'' + pair.entityName + '\\' not defined');\n      }\n    }\n    this.relationships.push({ name, entityPairs, attributes: attrs, isIdentifying });\n  }\n\n  generateRelationalSchema(): string[] {\n    const schemas: string[] = [];\n\n    // 1. Strong entities become tables\n    for (const [name, entity] of this.entities) {\n      if (!entity.isWeak) {\n        const cols = this.flattenAttributes(entity.attributes);\n        const pk = cols.find(c => c.includes('PRIMARY KEY'));\n        schemas.push(name + '(' + cols.join(', ') + ')');\n      }\n    }\n\n    // 2. Weak entities: table with FK to owner\n    for (const [name, entity] of this.entities) {\n      if (entity.isWeak) {\n        // Find the identifying relationship\n        const identifyingRel = this.relationships.find(\n          r => r.isIdentifying && r.entityPairs.some(p => p.entityName === name)\n        );\n        const owner = identifyingRel?.entityPairs.find(p => p.entityName !== name);\n        const cols = this.flattenAttributes(entity.attributes);\n        if (owner) {\n          cols.push(owner.entityName + '_id INTEGER NOT NULL');\n        }\n        schemas.push(name + '(' + cols.join(', ') + ', FK to ' + (owner?.entityName || '?') + ')');\n      }\n    }\n\n    // 3. M:N relationships: junction table with FKs to both entities\n    for (const rel of this.relationships) {\n      const pair0 = rel.entityPairs[0];\n      const pair1 = rel.entityPairs[1];\n      if (pair0.cardinality === Cardinality.MANY_TO_MANY) {\n        const fk1 = pair0.entityName + '_id INTEGER REFERENCES ' + pair0.entityName;\n        const fk2 = pair1.entityName + '_id INTEGER REFERENCES ' + pair1.entityName;\n        const relAttrs = this.flattenAttributes(rel.attributes);\n        schemas.push(rel.name + '(' + fk1 + ', ' + fk2 + ', ' + relAttrs.join(', ') + ', PRIMARY KEY (' + pair0.entityName + '_id, ' + pair1.entityName + '_id))');\n      }\n    }\n\n    return schemas;\n  }\n\n  private flattenAttributes(attrs: Attribute[], prefix = ''): string[] {\n    const cols: string[] = [];\n    for (const attr of attrs) {\n      const colName = prefix ? prefix + '_' + attr.name : attr.name;\n      switch (attr.type) {\n        case AttributeType.SIMPLE:\n        case AttributeType.KEY:\n          cols.push(colName + ' ' + (attr.type === AttributeType.KEY ? 'PRIMARY KEY' : 'VARCHAR(255)'));\n          break;\n        case AttributeType.COMPOSITE:\n          if (attr.subAttributes) {\n            cols.push(...this.flattenAttributes(attr.subAttributes, colName));\n          }\n          break;\n        case AttributeType.MULTIVALUED:\n          // Handled as a separate table elsewhere\n          cols.push('-- ' + colName + ' (stored in separate table)');\n          break;\n        case AttributeType.DERIVED:\n          cols.push('-- ' + colName + ' (computed, not stored)');\n          break;\n      }\n    }\n    return cols;\n  }\n\n  toString(): string {\n    let result = 'ER Model:\\n';\n    result += 'Entities:\\n';\n    for (const [name, entity] of this.entities) {\n      const weakTag = entity.isWeak ? ' [WEAK]' : '';\n      result += '  [' + name + ']' + weakTag + '\\n';\n      for (const attr of entity.attributes) {\n        result += '    - ' + AttributeType[attr.type] + ': ' + attr.name + '\\n';\n      }\n    }\n    result += 'Relationships:\\n';\n    for (const rel of this.relationships) {\n      const pairs = rel.entityPairs.map(\n        p => p.entityName + ' (' + p.cardinality + ', ' + Participation[p.participation] + ')'\n      ).join(' - ');\n      result += '  [' + rel.name + '] ' + pairs + '\\n';\n    }\n    return result;\n  }\n}\n\n// Demo: University ER Model\nconst builder = new ERModelBuilder();\n\nbuilder.addEntity('Student', [\n  { name: 'student_id', type: AttributeType.KEY },\n  { name: 'name', type: AttributeType.SIMPLE },\n  { name: 'address', type: AttributeType.COMPOSITE, subAttributes: [\n    { name: 'street', type: AttributeType.SIMPLE },\n    { name: 'city', type: AttributeType.SIMPLE },\n    { name: 'zip', type: AttributeType.SIMPLE }\n  ]},\n  { name: 'phone', type: AttributeType.MULTIVALUED },\n  { name: 'age', type: AttributeType.DERIVED }\n]);\n\nbuilder.addEntity('Course', [\n  { name: 'course_id', type: AttributeType.KEY },\n  { name: 'title', type: AttributeType.SIMPLE },\n  { name: 'credits', type: AttributeType.SIMPLE }\n]);\n\nbuilder.addRelationship('Enrolls', [\n  { entityName: 'Student', cardinality: Cardinality.MANY_TO_MANY, participation: Participation.TOTAL },\n  { entityName: 'Course', cardinality: Cardinality.MANY_TO_MANY, participation: Participation.PARTIAL }\n], [{ name: 'grade', type: AttributeType.SIMPLE }]);\n\nconsole.log(builder.toString());\nconsole.log('Relational Schema:');\nbuilder.generateRelationalSchema().forEach(s => console.log('  ' + s));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mermaid Diagram: ER-to-Relational Mapping Decision Flow"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\n    Start[ER Construct] --> IsEntity{Is it an<br>entity type?}\n    \n    IsEntity -->|Yes| IsWeak{Is it weak?}\n    IsWeak -->|No| StrongTable[Create table<br>with PK = key attribute]\n    IsWeak -->|Yes| WeakTable[Create table with<br>composite PK = FK + discriminator]\n    \n    IsEntity -->|No| IsRel{Is it a<br>relationship?}\n    IsRel -->|Yes| Card{What is the<br>cardinality?}\n    \n    Card -->|1:1| OneToOne[Add FK to either<br>side with UNIQUE]\n    Card -->|1:N| OneToMany[Add FK to the<br>N-side table]\n    Card -->|M:N| ManyToMany[Create junction table<br>with composite PK]\n    \n    IsRel -->|No| IsAttr{Is it an<br>attribute?}\n    \n    IsAttr -->|Simple| AddCol[Add as column]\n    IsAttr -->|Composite| Flatten[Flatten into<br>multiple columns]\n    IsAttr -->|Multi-valued| NewTable[Create separate<br>table with FK]\n    IsAttr -->|Derived| Compute[Dont store;<br>compute on read]\n    IsAttr -->|Key| PKCol[Add as PK column]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "214-er-to-relational-mapping-patterns",
      children: "2.14 ER-to-Relational Mapping Patterns"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ER Construct"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mapping Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQL Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strong Entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create table with PK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CREATE TABLE student (id INT PK, name TEXT)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Student, Course"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weak Entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create table with FK composite PK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CREATE TABLE dependent (emp_id INT, name TEXT, PK(emp_id, name), FK(emp_id) REFERENCES employee)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependent, Line Item"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple Attribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column in table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "name VARCHAR(100)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "name, title"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Composite Attribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flattened columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "address_street, address_city, address_zip"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-valued Attribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate child table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CREATE TABLE student_phone (student_id INT FK, phone VARCHAR(20))"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone, Email"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Derived Attribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not stored; use view/computed column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CREATE VIEW ... AS SELECT birth_date, AGE(birth_date) AS age"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Age, Experience"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1:1 Relationship"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FK + UNIQUE on either side"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ALTER TABLE employee ADD passport_id INT UNIQUE REFERENCES passport"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manages, Leads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1:N Relationship"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FK on N-side"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ALTER TABLE course ADD dept_id INT REFERENCES department"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Offered By, Belongs To"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M:N Relationship"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Junction table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CREATE TABLE enrollment (student_id INT, course_id INT, grade CHAR, PK(student_id, course_id))"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enrolls, Registers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total Participation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT NULL on FK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dept_id INT NOT NULL REFERENCES department"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every student enrolled"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partial Participation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL allowed on FK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dept_id INT NULL REFERENCES department"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional course"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Identifying Relationship"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FK in weak entity PK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "emp_id INT NOT NULL, PK(emp_id, dependent_name)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependent Of"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-chapter-quiz-questions",
      children: "Additional Chapter Quiz Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following is true about weak entities?\na) They have their own primary key\nb) They are identified by a combination of a FK to the owner entity and a discriminator\nc) They cannot have any attributes\nd) They always participate in identifying relationships"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A derived attribute is:\na) Stored in a separate child table\nb) Computed from other attributes and not physically stored\nc) Always used as a primary key\nd) A multi-valued attribute"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In the ER-to-relational mapping, a composite attribute is:\na) Stored as a separate table\nb) Flattened into multiple columns\nc) Stored in a JSON column\nd) Ignored because it cannot be mapped"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A ternary relationship is:\na) A relationship involving three entity types\nb) A relationship between three instances of the same entity\nc) A relationship that has three attributes\nd) Three binary relationships"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The main problem with star schemas in ER diagrams (unnecessary use of M:N relationships) is:\na) They are too slow to query\nb) They create redundant data and ambiguous semantics\nc) They violate 1NF\nd) They cannot be converted to relational tables"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A unary (recursive) relationship in ER is one where:\na) The relationship has no attributes\nb) The relationship connects an entity to itself\nc) The relationship has a single entity type\nd) The relationship is weak"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 13-b, 14-b, 15-b, 16-a, 17-b, 18-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "basic-continued",
      children: "Basic (continued)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Draw an ER diagram for a social media platform with the following requirements: Users can create posts; posts can have comments from users; users can like posts and comments; users can follow other users. Identify all entities, relationships, cardinalities, and participation constraints."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Map the following ER constructs to SQL: (a) composite attribute, (b) multi-valued attribute, (c) weak entity, (d) M:N relationship, (e) 1:1 relationship with total participation on both sides."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "intermediate-continued",
      children: "Intermediate (continued)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "15",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Given the following requirements for a HOSPITAL management system:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Patients are identified by patient_id and have name, address (composite), phone (multi-valued)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Doctors are identified by doctor_id and have name, specialty, and salary"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A patient is treated by exactly one doctor (total participation)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A doctor treats many patients (partial participation)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Treatments are identified by treatment_id and have a date, diagnosis, and cost"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Each treatment is for exactly one patient and performed by exactly one doctor"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Draw the ER diagram and generate the complete relational schema. Include all FKs and constraints."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Convert the ER diagram from Exercise 15 into a TypeScript implementation using the ERModelBuilder pattern shown in this chapter."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advanced-continued",
      children: "Advanced (continued)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "17",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design an ER model for a FLIGHT BOOKING system that includes:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Airlines, aircraft, airports, flights, passengers, bookings, seats"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Each flight uses one aircraft and operates between two airports"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A passenger can have multiple bookings; each booking has exactly one passenger"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Each booking is for one flight and includes one or more seats"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Include at least one weak entity and one composite attribute"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Map the design to relational schema with all constraints"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "For the ER model created in Exercise 17, write a TypeScript validation function that:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verifies all entities are uniquely identified"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Checks that every relationship references existing entities"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validates cardinality consistency (e.g., no entity has two conflicting relationships)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Generates the corresponding SQL CREATE TABLE statements"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pro-tips",
      children: "Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always start with an ER diagram"
        }), " before writing a single CREATE TABLE statement → it catches design flaws early and communicates structure to stakeholders."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Binary relationships cover 90% of real-world cases"
        }), " → avoid ternary relationships unless all three entity types are genuinely independent; they often hide design problems."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Be precise with cardinality and participation"
        }), " → confusing 1:N with M:N or total with partial participation leads to incorrect schemas that are expensive to fix later."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weak entities are more common than you think"
        }), " → line items on an invoice, dependents of an employee, and seat assignments on a flight are all weak entities."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use Strategy B (separate tables) for generalization"
        }), " → it preserves all constraints and handles overlapping subclasses cleanly, at the cost of more joins."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name junction tables descriptively"
        }), " → use entity_relationship names like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "student_course"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enrolls_in"
        }), ", not ", (0,jsx_runtime.jsx)(_components.code, {
          children: "junction_table"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Avoid fan traps by validating query paths"
        }), " → before finalizing the schema, write sample queries for all common access patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document all assumptions"
        }), " → cardinality decisions are often ambiguous in requirements; document why you chose each one."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2.1:"
        }), " The ER model is a high-level conceptual tool for capturing user requirements before database implementation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2.2:"
        }), " An entity is a distinguishable real-world object; an entity set is a collection of similar entities."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2.3:"
        }), " Attributes describe entity properties and can be simple/composite, single-valued/multi-valued, or stored/derived."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2.4:"
        }), " Relationships connect entities with specified degree (unary, binary, ternary) and cardinality constraints (1:1, 1:N, M:N)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2.5:"
        }), " Weak entities depend on owner entities for their identity and combine an owner's key with a discriminator."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2.6:"
        }), " ER diagrams use standard symbols → rectangles for entities, diamonds for relationships, ellipses for attributes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2.7:"
        }), " Generalization creates a superclass from subclasses; specialization creates subclasses from a superclass."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2.8:"
        }), " ER-to-relational mapping converts conceptual designs into implementable SQL schemas using systematic rules."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-tables",
      children: "Concept Comparison Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "core-comparison-table",
      children: "Core Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Strong Entity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Has its own primary key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STUDENT(student_id)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Weak Entity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on owner entity for identity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DEPENDENT(emp_id, dependent_name)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1:1 Relationship"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each entity relates to at most one on each side"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MANAGER manages DEPARTMENT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1:N Relationship"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One entity relates to many; inverse relates to one"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DEPARTMENT has many EMPLOYEES"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "M:N Relationship"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both sides can relate to many"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STUDENT takes COURSE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total Participation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every entity must participate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every STUDENT must be enrolled (if required)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial Participation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some entities may not participate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not every FACULTY advises a student"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Simple Attribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot be divided further"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "student_id, age"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Composite Attribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can be divided into subparts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "name (first, last), address (street, city, zip)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Derived Attribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computed from stored attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "age from date_of_birth"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fan-trap-vs-chasm-trap-comparison-1",
      children: "Fan Trap vs Chasm Trap Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fan Trap"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chasm Trap"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One entity has two independent 1:N relationships"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two N:1 relationships converge on one entity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BRANCH has LOANS and ACCOUNTS (separately)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DEPARTMENT has EMPLOYEES and PROJECTS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Symptom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ambiguous query paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing rows in JOIN results"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Root Cause"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"One\" side fans out to two \"many\" sides"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Many\" sides have no direct relationship"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct relationship between child entities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNION query or schema restructure"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mapping-rule-quick-reference",
      children: "Mapping Rule Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ER Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mapping Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQL Construct"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strong Entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE TABLE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weak Entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create table with composite PK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FK + discriminator as PK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple Attribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column with appropriate type"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Composite Attribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flatten to multiple columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple columns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-valued Attribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FK + value columns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Derived Attribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computed column or view"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AS (expression) or VIEW"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key Attribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PRIMARY KEY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1:1 Relationship"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FK + UNIQUE in one table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOREIGN KEY + UNIQUE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1:N Relationship"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FK in many-side table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOREIGN KEY + NOT NULL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M:N Relationship"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Junction table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composite PK of two FKs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total Participation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT NULL constraint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT NULL on FK column"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partial Participation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL on FK column"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ER Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Applies To"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Matters"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Weak Entities"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invoicing, flight booking, payroll"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Line items, seat assignments, dependents need parent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1:N Relationships"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Almost every business domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customers->Orders, Departments->Employees, Authors->Books"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "M:N Relationships"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Students->Courses, Products->Orders"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Junction tables required → common source of errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Generalization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Employee types, account types, media"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Models inheritance: savings/checking, full-time/contract"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multi-valued Attributes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone numbers, skills, tags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never store as comma-separated strings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total Participation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mandatory relationships"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensures data completeness"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A weak entity is identified by:\na) Its own primary key only\nb) A combination of a discriminator and the owner's primary key\nc) A composite attribute\nd) A derived attribute"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In a 1:N relationship between DEPARTMENT and EMPLOYEE:\na) Each department has many employees, and each employee belongs to many departments\nb) Each department has many employees, and each employee belongs to one department\nc) Each department has one employee, and each employee belongs to one department\nd) Each department has one employee, and each employee belongs to many departments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Which symbol represents a total participation in an ER diagram?\na) Single line\nb) Double line\nc) Arrow\nd) Dashed line"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A ternary relationship involves:\na) Two entity sets\nb) Three entity sets\nc) Three attributes\nd) Three relationship sets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Which attribute type requires a separate table during ER-to-relational mapping?\na) Simple attribute\nb) Composite attribute\nc) Multi-valued attribute\nd) Derived attribute"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generalization is the process of:\na) Creating subclasses from a superclass\nb) Creating a superclass from multiple subclasses\nc) Adding attributes to an entity\nd) Removing redundant relationships"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The identifying relationship of a weak entity is always:\na) Many-to-many\nb) Many-to-one from weak to owner\nc) One-to-one\nd) One-to-many from owner to weak"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Which mapping strategy creates nullable columns for subclass-specific attributes?\na) Strategy A: Single table\nb) Strategy B: Separate tables\nc) Strategy C: Subclass tables only\nd) Strategy D: No mapping needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A fan trap occurs when:\na) A weak entity has no discriminator\nb) A \"one\" entity fans out to multiple \"many\" entities\nc) Two entities have an M:N relationship\nd) A ternary relationship is used incorrectly"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which tool supports both reverse and forward engineering of ER diagrams?\na) draw.io\nb) MySQL Workbench\nc) Lucidchart (free version)\nd) Microsoft Word\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answers:"
        }), " 1-b, 2-b, 3-b, 4-b, 5-c, 6-b, 7-b, 8-a, 9-b, 10-b"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The ER model is a high-level conceptual data model used for database design."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Entities represent objects; attributes describe entity properties; relationships connect entities."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Attribute types include simple/composite, single-valued/multi-valued, stored/derived."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cardinality constraints (1:1, 1:N, M:N) and participation constraints (total/partial) define relationship semantics."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Weak entities depend on identifying owner entities and use a discriminator."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fan traps and chasm traps are common design pitfalls that cause query ambiguity or data loss."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generalization and specialization model inheritance relationships."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ER-to-relational mapping translates conceptual designs into implementable table schemas using 7 systematic rules."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tools like MySQL Workbench, draw.io, and Lucidchart support ER diagram creation and schema generation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic",
      children: "Basic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For a LIBRARY database, identify at least three entity sets and two relationship sets."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Classify each attribute as simple or composite, single-valued or multi-valued, stored or derived:\na) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "employee_id"
        }), "\nb) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "full_name"
        }), " (stored as \"Smith, John\")\nc) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "years_of_service"
        }), " (computed from hire_date)\nd) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "phone_numbers"
        }), "\ne) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "address"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between a weak entity set and a strong entity set? Give an example of each."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Draw (describe in words) an ER diagram for a HOSPITAL where:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "DOCTOR treats PATIENT"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Each DOCTOR has a name and specialty"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Each PATIENT has a name, date_of_birth, and insurance provider"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A PATIENT can have multiple DOCTORs and vice versa"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "intermediate",
      children: "Intermediate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For a BILLING system: INVOICE has invoice_id, date, total_amount. LINE_ITEM has description, quantity, unit_price. An INVOICE has many LINE_ITEMs. A LINE_ITEM belongs to exactly one INVOICE. What cardinality is this? Write the CREATE TABLE statements."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider a COMPANY database where MANAGER manages DEPARTMENT. Not every employee is a manager. Every department has exactly one manager. One manager manages exactly one department. Identify the cardinality, participation constraints, and write the schema."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Convert the following description into an ER diagram description and mapping:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A PROJECT has project_id, name, budget"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "An EMPLOYEE has emp_id, name, title"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "An EMPLOYEE can work on multiple PROJECTs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A PROJECT can have multiple EMPLOYEEs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Each work relationship has hours_per_week"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced",
      children: "Advanced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a generalization hierarchy for VEHICLES in a rental system. Include CAR, TRUCK, and MOTORCYCLE as subclasses. What attributes go in VEHICLE? Which subclass-specific attributes would each have? Show the mapping SQL using Strategy B."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A university database has the following REQUIREMENT: \"A course section must be taught by exactly one instructor. An instructor teaches zero or more sections. A section belongs to exactly one course. A course has zero or more sections.\" Identify all entity sets, relationship sets, cardinalities, and participation constraints. Write the full SQL schema."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider an AIRLINE database with WEAK entities: SEAT depends on FLIGHT. Each flight has a flight_number and date. Each seat has seat_number (1A, 1B, etc.) and class (economy, business, first). Write the SQL schema. How would you handle the case where the same seat number exists on different flights?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify the fan trap in this schema: BRANCH has many LOANS. BRANCH has many ACCOUNTS. Explain why querying \"which loan belongs to which account\" is ambiguous."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For the VEHICLE generalization hierarchy (Exercise 8), write a single query using Strategy B that returns all vehicles with their subclass-specific attributes."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "additional-case-studies",
      children: "Additional Case Studies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-1-online-bookstore-er-model",
      children: "Case Study 1: Online Bookstore ER Model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      }), " An online bookstore sells books to customers. Each book has ISBN (unique), title, author(s), price, and stock quantity. A customer has customer_id, name, email, and shipping_addresses (multiple). Customers place orders. Each order has order_id, order_date, status, and total_amount. An order contains multiple order_items. Each order_item references a book and has quantity and unit_price. Books are written by authors. An author has author_id, name, and biography. An author can write multiple books; a book can have multiple authors.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step ER Modeling:"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify entities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BOOK, CUSTOMER, ORDER, ORDER_ITEM, AUTHOR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify relationships"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CUSTOMER places ORDER, ORDER contains ORDER_ITEM, ORDER_ITEM references BOOK, AUTHOR writes BOOK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Determine cardinality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CUSTOMER-ORDER: 1:N, ORDER-ORDER_ITEM: 1:N (identifying), ORDER_ITEM-BOOK: M:1, AUTHOR-BOOK: M:N"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classify attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shipping_addresses (multi-valued), total_amount (derived from sum of order_items)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify weak entities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ORDER_ITEM is weak on ORDER (no meaning without which order)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify key attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISBN (BOOK), customer_id (CUSTOMER), order_id (ORDER), author_id (AUTHOR)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ER-to-Relational Mapping:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Strong entities\nCREATE TABLE book (\n    isbn VARCHAR(13) PRIMARY KEY,\n    title VARCHAR(200) NOT NULL,\n    price DECIMAL(10,2) NOT NULL,\n    stock_quantity INTEGER DEFAULT 0\n);\nCREATE TABLE customer (\n    customer_id INTEGER PRIMARY KEY,\n    name VARCHAR(100) NOT NULL,\n    email VARCHAR(150) UNIQUE NOT NULL\n);\n-- Multi-valued attribute: shipping_addresses\nCREATE TABLE customer_address (\n    customer_id INTEGER REFERENCES customer(customer_id),\n    address_line VARCHAR(255) NOT NULL,\n    is_primary BOOLEAN DEFAULT FALSE,\n    PRIMARY KEY (customer_id, address_line)\n);\nCREATE TABLE author (\n    author_id INTEGER PRIMARY KEY,\n    name VARCHAR(100) NOT NULL,\n    biography TEXT\n);\n-- 1:N: CUSTOMER to ORDER\nCREATE TABLE cust_order (\n    order_id INTEGER PRIMARY KEY,\n    customer_id INTEGER NOT NULL REFERENCES customer(customer_id),\n    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    status VARCHAR(20) DEFAULT 'pending'\n);\n-- Weak entity: ORDER_ITEM on ORDER\nCREATE TABLE order_item (\n    order_id INTEGER NOT NULL REFERENCES cust_order(order_id) ON DELETE CASCADE,\n    line_number INTEGER NOT NULL,\n    isbn VARCHAR(13) NOT NULL REFERENCES book(isbn),\n    quantity INTEGER NOT NULL CHECK (quantity > 0),\n    unit_price DECIMAL(10,2) NOT NULL,\n    PRIMARY KEY (order_id, line_number)\n);\n-- M:N: AUTHOR writes BOOK\nCREATE TABLE written_by (\n    author_id INTEGER REFERENCES author(author_id),\n    isbn VARCHAR(13) REFERENCES book(isbn),\n    PRIMARY KEY (author_id, isbn)\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis for this Schema:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tables created: 8 (5 strong entity tables + 1 junction + 1 weak entity + 1 multi-valued attr)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FK constraints: 7 (order->customer, order_item->order, order_item->book, written_by->author, written_by->book, customer_address->customer)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maximum join depth: 4 (customer -> order -> order_item -> book -> author)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-2-hospital-management-system",
      children: "Case Study 2: Hospital Management System"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      }), " A hospital has doctors, patients, and appointments. Doctors have doctor_id, name, specialization, and phone. Patients have patient_id, name, date_of_birth, and insurance_info (composite: provider, policy_number). Doctors have multiple patients and vice versa (M:N via appointment). Each appointment has appointment_id, date, time, duration, and notes. A nurse assists in appointments. Nurses have nurse_id and name. Each appointment can have zero or more nurses assisting.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Entities:"
      }), " DOCTOR, PATIENT, APPOINTMENT, NURSE\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Relationships:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DOCTOR conducts APPOINTMENT (1:N)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PATIENT attends APPOINTMENT (1:N)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["APPOINTMENT assisted by NURSE (M:N)\n", (0,jsx_runtime.jsx)(_components.code, {
          children: "sql CREATE TABLE doctor (   doctor_id INTEGER PRIMARY KEY,   name VARCHAR(100) NOT NULL,   specialization VARCHAR(100),   phone VARCHAR(20) ); CREATE TABLE patient (   patient_id INTEGER PRIMARY KEY,   name VARCHAR(100) NOT NULL,   date_of_birth DATE,   insurance_provider VARCHAR(100),   insurance_policy_no VARCHAR(50) ); CREATE TABLE appointment (   appointment_id INTEGER PRIMARY KEY,   doctor_id INTEGER NOT NULL REFERENCES doctor(doctor_id),   patient_id INTEGER NOT NULL REFERENCES patient(patient_id),   appointment_date DATE NOT NULL,   appointment_time TIME NOT NULL,   duration_minutes INTEGER DEFAULT 30,   notes TEXT ); -- M:N: APPOINTMENT to NURSE CREATE TABLE appointment_nurse (   appointment_id INTEGER REFERENCES appointment(appointment_id),   nurse_id INTEGER REFERENCES nurse(nurse_id),   PRIMARY KEY (appointment_id, nurse_id) ); CREATE TABLE nurse (   nurse_id INTEGER PRIMARY KEY,   name VARCHAR(100) NOT NULL ); "
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-3-detecting-and-fixing-a-fan-trap",
      children: "Case Study 3: Detecting and Fixing a Fan Trap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem Scenario:"
      }), " A bank database has BRANCH in a 1:N relationship with both LOAN and ACCOUNT. A manager wants to know: \"For each account, which loan does the account holder have at the same branch?\"\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Flawed Schema:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "sql CREATE TABLE branch (     branch_code VARCHAR(10) PRIMARY KEY,     branch_name VARCHAR(100) ); CREATE TABLE loan (     loan_id INTEGER PRIMARY KEY,     branch_code VARCHAR(10) REFERENCES branch(branch_code),     amount DECIMAL(12,2) ); CREATE TABLE account (     acc_number INTEGER PRIMARY KEY,     branch_code VARCHAR(10) REFERENCES branch(branch_code),     balance DECIMAL(12,2) ); "
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Query that Fails:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "sql SELECT a.acc_number, l.loan_id, a.branch_code FROM account a JOIN branch b ON a.branch_code = b.branch_code JOIN loan l ON b.branch_code = l.branch_code; "
      }), "\nThis produces a Cartesian product between accounts and loans at the same branch. A branch with 3 accounts and 2 loans returns 6 rows, falsely pairing each account with every loan.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Fix:"
      }), " Add a direct CUSTOMER entity that owns both accounts and loans, or restructure to include a CUSTOMER-ACCOUNT and CUSTOMER-LOAN relationship.\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "sql CREATE TABLE customer (     customer_id INTEGER PRIMARY KEY,     name VARCHAR(100) ); CREATE TABLE customer_account (     customer_id INTEGER REFERENCES customer(customer_id),     acc_number INTEGER REFERENCES account(acc_number),     PRIMARY KEY (customer_id, acc_number) ); CREATE TABLE customer_loan (     customer_id INTEGER REFERENCES customer(customer_id),     loan_id INTEGER REFERENCES loan(loan_id),     PRIMARY KEY (customer_id, loan_id) ); -- Now query is unambiguous: SELECT ca.customer_id, ca.acc_number, cl.loan_id FROM customer_account ca JOIN customer_loan cl ON ca.customer_id = cl.customer_id; "
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-4-detecting-and-fixing-a-chasm-trap",
      children: "Case Study 4: Detecting and Fixing a Chasm Trap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem Scenario:"
      }), " A university has a DEPARTMENT in a 1:N relationship with both EMPLOYEE and PROJECT. Finding all employees and their project assignments is ambiguous.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Flawed Schema:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "sql CREATE TABLE department (     dept_id INTEGER PRIMARY KEY,     dept_name VARCHAR(100) ); CREATE TABLE employee (     emp_id INTEGER PRIMARY KEY,     dept_id INTEGER REFERENCES department(dept_id),     name VARCHAR(100) ); CREATE TABLE project (     project_id INTEGER PRIMARY KEY,     dept_id INTEGER REFERENCES department(dept_id),     title VARCHAR(200) ); "
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Failed Query:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "sql SELECT e.name AS employee, p.title AS project FROM employee e JOIN department d ON e.dept_id = d.dept_id LEFT JOIN project p ON d.dept_id = p.dept_id; "
      }), "\nThis returns each employee repeated for every project in their department. An employee working on no projects still appears but paired with unrelated projects.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Fix:"
      }), " Add a direct EMPLOYEE-PROJECT relationship table.\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "sql CREATE TABLE employee_project (     emp_id INTEGER REFERENCES employee(emp_id),     project_id INTEGER REFERENCES project(project_id),     hours_per_week DECIMAL(4,1),     PRIMARY KEY (emp_id, project_id) ); -- Correct query: SELECT e.name, p.title, ep.hours_per_week FROM employee e LEFT JOIN employee_project ep ON e.emp_id = ep.emp_id LEFT JOIN project p ON ep.project_id = p.project_id; "
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-complete",
      children: "Quick Reference (Complete)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ER Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQL Mapping"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Min Lines in ER"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strong Entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rectangle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE TABLE with PK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single line"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weak Entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double rectangle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE TABLE, FK to owner, composite PK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double line"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple Attribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single ellipse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column in table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single line"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Composite Attribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ellipse with sub-ellipses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flattened into multiple columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lines to sub-ellipses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-valued Attribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double-line ellipse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate table with FK + attribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double line to entity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Derived Attribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dashed ellipse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computed column or not stored"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dashed line"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key Attribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Underlined text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PRIMARY KEY constraint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Included in entity ellipse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Discriminator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dashed underline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Part of composite PK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dashed underline in weak entity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1:1 Relationship"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diamond with arrows both sides"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FK + UNIQUE in either table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arrow on both connecting lines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1:N Relationship"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diamond with arrow on 1 side"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FK in many-side table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arrow on \"1\" line, no arrow on \"N\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M:N Relationship"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diamond (no arrows)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Junction table with composite PK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No arrows on connecting lines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total Participation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double line connecting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT NULL on FK column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double line between shapes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partial Participation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single line connecting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL allowed on FK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single line between shapes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Identifying Relationship"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double diamond"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FK is part of weak entity PK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double diamond + double line"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generalization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Triangle with ISA label"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strategy A/B/C (see section 2.7)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Triangle from superclass to subclasses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dashed rectangle around rel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decompose into entity + FK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dashed box around relationship diamond"
          })]
        })]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
28453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
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

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
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

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


},

}]);