"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[187],{

/***/ 4160
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_database_management_systems_02_er_model_md_2ad_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-database-management-systems-02-er-model-md-2ad.json
const site_docs_courses_database_management_systems_02_er_model_md_2ad_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/database-management-systems/02-er-model","title":"Chapter 2: Entity-Relationship Model","description":"Learning Objectives","source":"@site/docs/courses/database-management-systems/02-er-model.md","sourceDirName":"courses/database-management-systems","slug":"/database-management-systems/02-er-model","permalink":"/ai-engineering-journey/database-management-systems/02-er-model","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"02-er-model","slug":"/database-management-systems/02-er-model","title":"Chapter 2: Entity-Relationship Model","sidebar_label":"Chapter 2: Entity-Relationship Model","sidebar_position":2},"sidebar":"course-database-management-systems","previous":{"title":"Chapter 1: Introduction to Database Management Systems","permalink":"/ai-engineering-journey/database-management-systems/01-introduction"},"next":{"title":"Chapter 3: The Relational Model","permalink":"/ai-engineering-journey/database-management-systems/03-relational-model"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/database-management-systems/02-er-model.md


const frontMatter = {
	id: '02-er-model',
	slug: '/database-management-systems/02-er-model',
	title: 'Chapter 2: Entity-Relationship Model',
	sidebar_label: 'Chapter 2: Entity-Relationship Model',
	sidebar_position: 2
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
  "value": "2.1 The Entity-Relationship Model",
  "id": "21-the-entity-relationship-model",
  "level": 3
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
  "value": "Python Implementation: ER Model Classes and Relational Mapping",
  "id": "python-implementation-er-model-classes-and-relational-mapping",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
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
  "value": "Attribute Types Comparison",
  "id": "attribute-types-comparison",
  "level": 4
}, {
  "value": "Real-World Analogy: Student Registration Form",
  "id": "real-world-analogy-student-registration-form",
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
  "value": "Python Implementation: Relationship Set Manager",
  "id": "python-implementation-relationship-set-manager",
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
  "value": "Complete Dry Run: ER-to-Relational Mapping for University Schema",
  "id": "complete-dry-run-er-to-relational-mapping-for-university-schema",
  "level": 4
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 4
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
  "value": "Basic",
  "id": "basic",
  "level": 3
}, {
  "value": "Case Study 1: Online Bookstore ER Model",
  "id": "case-study-1-online-bookstore-er-model",
  "level": 3
}, {
  "value": "Case Study 2: Hospital Management System",
  "id": "case-study-2-hospital-management-system",
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
    blockquote: "blockquote",
    code: "code",
    column: "column",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
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
        id: "chapter-2-entity-relationship-model",
        children: "Chapter 2: Entity-Relationship Model"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "> **Previous:** [Chapter 1: Introduction to Database Systems](./01-introduction.md) | **Next:** [Chapter 3: The Relational Model](./03-relational-model.md)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "- Identify entities, attributes, and relationships in a problem domain\r\n- Classify attribute types: simple vs. composite, single-valued vs. multi-valued, stored vs. derived\r\n- Define relationship types, degree, and cardinality constraints\r\n- Construct ER diagrams using standard notations\r\n- Distinguish strong from weak entities\r\n- Model generalization, specialization, and aggregation hierarchies\r\n- Translate an ER diagram into a relational schema\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "| Topic | Key Insight | Practical Takeaway |\r\n|-------|-------------|-------------------|\r\n| **Entities & Attributes** | Real-world objects with descriptive properties | Identify entities first, then their attributes |\r\n| **Relationships & Cardinality** | Associations between entities with 1:1, 1:N, M:N rules | Correct cardinality prevents schema redesign |\r\n| **Weak Entities** | Depend on owner entity for identity | Common for line items, dependents, seat assignments |\r\n| **Generalization/Specialization** | Inheritance modeling for entity types | Choose Strategy B (separate tables) for flexibility |\r\n| **ER-to-Relational Mapping** | Systematic conversion of conceptual to logical schema | Follow the 8 mapping rules in order |\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "```mermaid\r\nflowchart LR\r\n    A[Identify Entities] --> B[Define Attributes]\r\n    B --> C[Specify Relationships]\r\n    C --> D[Set Cardinality & Participation]\r\n    D --> E[Draw ER Diagram]\r\n    E --> F[Map to Relational Schema]\r\n    F --> G[Implement SQL DDL]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "## Theory\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The ER model provides a high-level conceptual blueprint → translating real-world requirements into visual diagrams before any SQL is written."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "![ER Model Mindmap](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/database-management-systems/ch02-er-model.png)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-the-entity-relationship-model",
      children: "2.1 The Entity-Relationship Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "The Entity-Relationship (ER) model, introduced by Peter Chen in 1976, is a conceptual data model that provides a high-level description of a database. It is used primarily in the database design phase to capture user requirements and represent them in a visual, intuitive form before implementation.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ER model views the real world as a collection of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "entities"
      }), " (things or objects) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "relationships"
      }), " (associations among entities)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#### Real-World Analogy: Blueprint for a House\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Just as an architect draws a blueprint before construction begins, a database designer creates an ER diagram before writing SQL. The blueprint captures requirements, communicates with stakeholders (contractors = developers), and catches design errors early.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-to-build-an-er-model",
      children: "Numbered Steps to Build an ER Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. **Identify entities** → List all noun concepts from requirements (e.g., Student, Course, Professor)\r\n2. **Identify relationships** → Find verb associations between entities (e.g., Student enrolls in Course)\r\n3. **Identify cardinality** → Determine 1:1, 1:N, or M:N for each relationship\r\n4. **Identify attributes** → List properties for each entity (e.g., student_id, name, email)\r\n5. **Classify attributes** → Mark simple/composite, single-valued/multi-valued, stored/derived, key\r\n6. **Identify weak entities** → Find entities that depend on others for identity\r\n7. **Apply constraints** → Specify total/partial participation, disjointness, completeness\r\n8. **Draw ER diagram** → Use rectangles, diamonds, ellipses with standard notation\r\n9. **Map to relational schema** → Apply systematic conversion rules\r\n10. **Normalize** → Check for redundancy and apply normal forms if needed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-er-model-builder",
      children: "Pseudocode: ER Model Builder"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "```pseudocode\r\nPROCEDURE BuildERModel(requirements):\r\n    entities = ExtractNouns(requirements)\r\n    relationships = ExtractVerbs(requirements, entities)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FOR EACH entity IN entities:\r\n    entity.attributes = ExtractProperties(requirements, entity.name)\r\n    entity.key = IdentifyPrimaryKey(entity.attributes)\r\n    entity.isWeak = CheckDependency(entity, entities)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    FOR EACH rel IN relationships:\r\n        rel.entity_types = IdentifyParticipants(rel, entities)\r\n        rel.cardinality = DetermineCardinality(rel, requirements)\r\n        rel.participation = DetermineParticipation(rel, requirements)\r\n        rel.attributes = ExtractRelationshipAttributes(requirements, rel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "er_diagram = DrawERDiagram(entities, relationships)\r\nrelational_schema = MapERToRelational(er_diagram)\r\nRETURN relational_schema\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "END PROCEDURE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-building-er-model-for-university-system",
      children: "Dry Run: Building ER Model for University System"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Input Requirements:** \"A university has students who enroll in courses. Each course is taught by one professor. Students have IDs, names, and phone numbers. Courses have IDs, titles, and credits. Professors have IDs, names, and departments.\"\n"
      })
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#### C++ Implementation: ER Model Classes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <vector>\r\n#include <map>\r\n#include <string>\r\n#include <algorithm>\r\nusing namespace std;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enum class AttrType { SIMPLE, COMPOSITE, MULTI_VALUED, DERIVED, KEY };\r\nenum class CardType { ONE_TO_ONE, ONE_TO_MANY, MANY_TO_MANY };\r\nenum class PartType { TOTAL, PARTIAL };"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Attribute {\r\npublic:\r\n    string name;\r\n    AttrType type;\r\n    vector<Attribute> sub_attributes;\r\n    string derived_expression;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Attribute(string n, AttrType t = AttrType::SIMPLE)\r\n    : name(n), type(t), derived_expression(\"\") {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    void addSubAttribute(const Attribute& sub) {\r\n        if (type == AttrType::COMPOSITE) sub_attributes.push_back(sub);\r\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "string typeString() const {\r\n    switch(type) {\r\n        case AttrType::SIMPLE: return \"SIMPLE\";\r\n        case AttrType::COMPOSITE: return \"COMPOSITE\";\r\n        case AttrType::MULTI_VALUED: return \"MULTI_VALUED\";\r\n        case AttrType::DERIVED: return \"DERIVED\";\r\n        case AttrType::KEY: return \"KEY\";\r\n    }\r\n    return \"UNKNOWN\";\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    void print(int indent = 0) const {\r\n        cout << string(indent, ' ') << name << \" [\" << typeString() << \"]\";\r\n        if (!derived_expression.empty())\r\n            cout << \" = \" << derived_expression;\r\n        cout << endl;\r\n        for (const auto& sub : sub_attributes) sub.print(indent + 2);\r\n    }\r\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class Entity {\r\npublic:\r\nstring name;\r\nvector<Attribute> attributes;\r\nbool is_weak;\r\nstring owner_entity;\r\nstring discriminator;"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    Entity(string n, bool weak = false) : name(n), is_weak(weak) {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void addAttribute(const Attribute& attr) { attributes.push_back(attr); }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    void print() const {\r\n        cout << (is_weak ? \"WEAK ENTITY: \" : \"ENTITY: \") << name << endl;\r\n        if (is_weak)\r\n            cout << \"  Owner: \" << owner_entity << \", Discriminator: \" << discriminator << endl;\r\n        for (const auto& attr : attributes) attr.print(2);\r\n    }\r\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class Relationship {\r\npublic:\r\nstring name;\r\nvector<string> participants;\r\nCardType cardinality;\r\nPartType participation;\r\nvector<Attribute> attributes;"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    Relationship(string n, CardType card = CardType::MANY_TO_MANY)\r\n        : name(n), cardinality(card), participation(PartType::PARTIAL) {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "string cardinalityString() const {\r\n    switch(cardinality) {\r\n        case CardType::ONE_TO_ONE: return \"1:1\";\r\n        case CardType::ONE_TO_MANY: return \"1:N\";\r\n        case CardType::MANY_TO_MANY: return \"M:N\";\r\n    }\r\n    return \"UNKNOWN\";\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    void print() const {\r\n        cout << \"RELATIONSHIP: \" << name << \" [\" << cardinalityString() << \"]\";\r\n        cout << \" (Participation: \" << (participation == PartType::TOTAL ? \"TOTAL\" : \"PARTIAL\") << \")\" << endl;\r\n        cout << \"  Participants: \";\r\n        for (const auto& p : participants) cout << p << \" \";\r\n        cout << endl;\r\n        for (const auto& attr : attributes) attr.print(2);\r\n    }\r\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class ERModel {\r\npublic:\r\nmap<string, Entity> entities;\r\nvector<Relationship> relationships;"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    void addEntity(const Entity& e) { entities[e.name] = e; }\r\n    void addRelationship(const Relationship& r) { relationships.push_back(r); }\r\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "int main() {\r\nERModel university;"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    Entity student(\"STUDENT\");\r\n    student.addAttribute(Attribute(\"student_id\", AttrType::KEY));\r\n    Attribute name(\"name\", AttrType::COMPOSITE);\r\n    name.addSubAttribute(Attribute(\"first_name\"));\r\n    name.addSubAttribute(Attribute(\"last_name\"));\r\n    student.addAttribute(name);\r\n    student.addAttribute(Attribute(\"phone_numbers\", AttrType::MULTI_VALUED));\r\n    university.addEntity(student);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Entity course(\"COURSE\");\r\ncourse.addAttribute(Attribute(\"course_id\", AttrType::KEY));\r\ncourse.addAttribute(Attribute(\"title\"));\r\ncourse.addAttribute(Attribute(\"credits\"));\r\nuniversity.addEntity(course);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    Relationship enrolls(\"ENROLLS_IN\", CardType::MANY_TO_MANY);\r\n    enrolls.participants = {\"STUDENT\", \"COURSE\"};\r\n    enrolls.participation = PartType::TOTAL;\r\n    enrolls.attributes.push_back(Attribute(\"semester\"));\r\n    enrolls.attributes.push_back(Attribute(\"grade\"));\r\n    university.addRelationship(enrolls);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (auto& [name, ent] : university.entities) ent.print();\r\nfor (auto& rel : university.relationships) rel.print();\r\nreturn 0;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-er-model-classes-and-relational-mapping",
      children: "Python Implementation: ER Model Classes and Relational Mapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "```python\r\nfrom enum import Enum\r\nfrom typing import List, Dict, Optional, Tuple\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class AttrType(Enum):\r\nSIMPLE = \"SIMPLE\"\r\nCOMPOSITE = \"COMPOSITE\"\r\nMULTI_VALUED = \"MULTI_VALUED\"\r\nDERIVED = \"DERIVED\"\r\nKEY = \"KEY\""
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class CardType(Enum):\r\n    ONE_TO_ONE = \"1:1\"\r\n    ONE_TO_MANY = \"1:N\"\r\n    MANY_TO_MANY = \"M:N\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class PartType(Enum):\r\nTOTAL = \"TOTAL\"\r\nPARTIAL = \"PARTIAL\""
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Attribute:\r\n    def __init__(self, name: str, attr_type: AttrType = AttrType.SIMPLE):\r\n        self.name = name\r\n        self.type = attr_type\r\n        self.sub_attributes: List[Attribute] = []\r\n        self.derived_expression: str = \"\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def add_sub_attribute(self, attr: Attribute) -> None:\r\n    if self.type == AttrType.COMPOSITE:\r\n        self.sub_attributes.append(attr)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    def flatten(self) -> List[str]:\r\n        if self.type == AttrType.COMPOSITE:\r\n            return [sub.name.lower() for sub in self.sub_attributes]\r\n        return [self.name.lower()]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def __repr__(self) -> str:\r\n    return f\"Attribute({self.name}, {self.type.value})\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Entity:\r\n    def __init__(self, name: str, is_weak: bool = False):\r\n        self.name = name\r\n        self.attributes: List[Attribute] = []\r\n        self.is_weak = is_weak\r\n        self.owner_entity: Optional[str] = None\r\n        self.discriminator: Optional[str] = None\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def add_attribute(self, attr: Attribute) -> None:\r\n    self.attributes.append(attr)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    def get_key_attributes(self) -> List[Attribute]:\r\n        return [a for a in self.attributes if a.type == AttrType.KEY]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def get_multi_valued_attributes(self) -> List[Attribute]:\r\n    return [a for a in self.attributes if a.type == AttrType.MULTI_VALUED]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    def __repr__(self) -> str:\r\n        return f\"Entity({self.name}, weak={self.is_weak})\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["class Relationship:\r\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "init"
      }), "(self, name: str, cardinality: CardType = CardType.MANY_TO_MANY):\r\nself.name = name\r\nself.participants: List[str] = []\r\nself.cardinality = cardinality\r\nself.participation: PartType = PartType.PARTIAL\r\nself.attributes: List[Attribute] = []"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    def add_attribute(self, attr: Attribute) -> None:\r\n        self.attributes.append(attr)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def __repr__(self) -> str:\r\n    return f\"Relationship({self.name}, {self.cardinality.value})\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class ERModel:\r\n    def __init__(self):\r\n        self.entities: Dict[str, Entity] = {}\r\n        self.relationships: List[Relationship] = []\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def add_entity(self, entity: Entity) -> None:\r\n    self.entities[entity.name] = entity\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    def add_relationship(self, rel: Relationship) -> None:\r\n        self.relationships.append(rel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def map_to_relational(self) -> List[str]:\r\n    \"\"\"Map ER model to relational schema following standard 8 rules.\"\"\"\r\n    schema: List[str] = []\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        for ent in self.entities.values():\r\n            if not ent.is_weak:\r\n                schema.append(self._create_strong_entity_table(ent))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    for ent in self.entities.values():\r\n        if ent.is_weak:\r\n            schema.append(self._create_weak_entity_table(ent))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        for rel in self.relationships:\r\n            if rel.cardinality == CardType.MANY_TO_MANY:\r\n                schema.append(self._create_junction_table(rel))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    for ent in self.entities.values():\r\n        for attr in ent.get_multi_valued_attributes():\r\n            schema.append(self._create_multi_valued_table(ent, attr))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        return schema\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def _create_strong_entity_table(self, ent: Entity) -> str:\r\n    cols = []\r\n    for attr in ent.attributes:\r\n        if attr.type == AttrType.KEY:\r\n            cols.append(f\"    {attr.name.lower()} INTEGER PRIMARY KEY\")\r\n        elif attr.type == AttrType.COMPOSITE:\r\n            for sub in attr.sub_attributes:\r\n                cols.append(f\"    {sub.name.lower()} VARCHAR(100) NOT NULL\")\r\n        elif attr.type == AttrType.SIMPLE:\r\n            cols.append(f\"    {attr.name.lower()} VARCHAR(100)\")\r\n    return f\"CREATE TABLE {ent.name.lower()} (\\n\" + \",\\n\".join(cols) + \"\\n);\\n\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    def _create_weak_entity_table(self, ent: Entity) -> str:\r\n        cols = []\r\n        pk_parts = []\r\n        owner = self.entities.get(ent.owner_entity or \"\")\r\n        if owner:\r\n            key_attrs = owner.get_key_attributes()\r\n            if key_attrs:\r\n                key_name = key_attrs[0].name.lower()\r\n                cols.append(f\"    {key_name} INTEGER NOT NULL REFERENCES {ent.owner_entity.lower()}({key_name})\")\r\n                pk_parts.append(key_name)\r\n        if ent.discriminator:\r\n            cols.append(f\"    {ent.discriminator.lower()} VARCHAR(100) NOT NULL\")\r\n            pk_parts.append(ent.discriminator.lower())\r\n        for attr in ent.get_key_attributes():\r\n            if attr.name.lower() not in pk_parts and attr.type == AttrType.SIMPLE:\r\n                cols.append(f\"    {attr.name.lower()} VARCHAR(100)\")\r\n        pk = \", \".join(pk_parts)\r\n        cols.append(f\"    PRIMARY KEY ({pk})\")\r\n        return f\"CREATE TABLE {ent.name.lower()} (\\n\" + \",\\n\".join(cols) + \"\\n);\\n\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def _create_junction_table(self, rel: Relationship) -> str:\r\n    cols = []\r\n    pk_parts = []\r\n    for p in rel.participants:\r\n        ent = self.entities.get(p)\r\n        if ent:\r\n            key_attrs = ent.get_key_attributes()\r\n            if key_attrs:\r\n                key = key_attrs[0]\r\n                fk_col = f\"{ent.name.lower()}_{key.name.lower()}\"\r\n                cols.append(f\"    {fk_col} INTEGER REFERENCES {ent.name.lower()}({key.name.lower()})\")\r\n                pk_parts.append(fk_col)\r\n    for attr in rel.attributes:\r\n        cols.append(f\"    {attr.name.lower()} VARCHAR(50)\")\r\n    pk = \", \".join(pk_parts)\r\n    cols.append(f\"    PRIMARY KEY ({pk})\")\r\n    return f\"CREATE TABLE {rel.name.lower()} (\\n\" + \",\\n\".join(cols) + \"\\n);\\n\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    def _create_multi_valued_table(self, ent: Entity, attr: Attribute) -> str:\r\n        key_attrs = ent.get_key_attributes()\r\n        if not key_attrs:\r\n            return \"\"\r\n        key = key_attrs[0]\r\n        return (f\"CREATE TABLE {ent.name.lower()}_{attr.name.lower()} (\\n\"\r\n                f\"    {ent.name.lower()}_{key.name.lower()} INTEGER \"\r\n                f\"REFERENCES {ent.name.lower()}({key.name.lower()}),\\n\"\r\n                f\"    {attr.name.lower()} VARCHAR(50),\\n\"\r\n                f\"    PRIMARY KEY ({ent.name.lower()}_{key.name.lower()}, {attr.name.lower()})\\n);\\n\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def dry_run_mapping():\r\nsteps = [\r\n(\"Step 1: Strong Entities\",\r\n\"Create table STUDENT. Composite name flattened to first_name, last_name.\\nstudent_id becomes PRIMARY KEY.\",\r\n\"CREATE TABLE student (\\n    student_id INTEGER PRIMARY KEY,\\n    first_name VARCHAR(100),\\n    last_name VARCHAR(100)\\n);\"),\r\n(\"Step 2: Weak Entities\",\r\n\"Create table DEPENDENT. PRIMARY KEY = (student_id, dependent_name).\\nstudent_id is also FOREIGN KEY to STUDENT.\",\r\n\"CREATE TABLE dependent (\\n    student_id INTEGER REFERENCES student(student_id),\\n    dependent_name VARCHAR(100),\\n    PRIMARY KEY (student_id, dependent_name)\\n);\"),\r\n(\"Step 3: M:N Relationships\",\r\n\"Create junction table ENROLLS_IN. Composite PK = (student_id, course_id).\",\r\n\"CREATE TABLE enrolls_in (\\n    student_id INTEGER REFERENCES student(student_id),\\n    course_id INTEGER REFERENCES course(course_id),\\n    semester VARCHAR(50),\\n    PRIMARY KEY (student_id, course_id)\\n);\"),\r\n(\"Step 4: Multi-valued Attributes\",\r\n\"Create separate table for phone_numbers. Composite PK = (student_id, phone).\",\r\n\"CREATE TABLE student_phone (\\n    student_id INTEGER REFERENCES student(student_id),\\n    phone VARCHAR(20),\\n    PRIMARY KEY (student_id, phone)\\n);\"),\r\n]\r\nfor title, desc, sql in steps:\r\nprint(f\"\\n--- {title} ---\")\r\nprint(f\"Action: {desc}\")\r\nprint(f\"SQL: {sql}\")"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if __name__ == \"__main__\":\r\n    model = ERModel()\r\n    student = Entity(\"STUDENT\")\r\n    student.add_attribute(Attribute(\"student_id\", AttrType.KEY))\r\n    name = Attribute(\"name\", AttrType.COMPOSITE)\r\n    name.add_sub_attribute(Attribute(\"first_name\"))\r\n    name.add_sub_attribute(Attribute(\"last_name\"))\r\n    student.add_attribute(name)\r\n    student.add_attribute(Attribute(\"phone_numbers\", AttrType.MULTI_VALUED))\r\n    model.add_entity(student)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "course = Entity(\"COURSE\")\r\ncourse.add_attribute(Attribute(\"course_id\", AttrType.KEY))\r\ncourse.add_attribute(Attribute(\"title\"))\r\ncourse.add_attribute(Attribute(\"credits\"))\r\nmodel.add_entity(course)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    enrolls = Relationship(\"ENROLLS_IN\", CardType.MANY_TO_MANY)\r\n    enrolls.participants = [\"STUDENT\", \"COURSE\"]\r\n    enrolls.add_attribute(Attribute(\"semester\"))\r\n    model.add_relationship(enrolls)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for s in model.map_to_relational():\r\n    print(s)\r\ndry_run_mapping()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "| Operation | Time Complexity | Space Complexity | Why |\r\n|-----------|---------------|-----------------|-----|\r\n| Entity identification | O(N) for N nouns | O(E) for E entities | Linear scan through requirements text |\r\n| Attribute classification | O(A) for A attributes | O(1) per entity | Each attribute classified independently |\r\n| Cardinality determination | O(R*P) for R rels, P participants | O(R) for R relationships | Checks both directions per relationship |\r\n| ER diagram rendering | O(E+R+A) elements | O(E+R+A) for elements | Each element drawn exactly once |\r\n| ER-to-Rel mapping (strong) | O(E) for E strong entities | O(T) for T tables | One table per strong entity |\r\n| ER-to-Rel mapping (weak) | O(W) for W weak entities | O(1) per weak entity | One table + one FK |\r\n| ER-to-Rel mapping (M:N) | O(J) for J junction tables | O(J) tables | Each M:N creates one junction table |\r\n| Multi-valued attr handling | O(M) for M multi-valued attrs | O(M) tables | Each becomes a separate table |\r\n| Generalization (Strategy B) | O(S) for S subclasses | O(S+1) tables | Superclass + one per subclass |\r\n| Total mapping | O(E+W+R+M) | O(T) tables created | All operations linear in input |\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "WHY O(E+W+R+M) is optimal:"
      }), " Each entity, weak entity, relationship, and multi-valued attribute requires exactly one pass to produce its corresponding table. No sorting, nested loops, or combinatorial explosions. The mapping is inherently linear because the ER diagram is a graph where each node maps to one output artifact."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#### A&D Table: ER Model Advantages and Disadvantages\n"
      })
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#### Edge Cases in ER Modeling\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Redundant Relationships"
      }), "\r\nA redundant relationship can be derived from other relationships."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Example: A --teaches--> B (Professor teaches Course), B --belongs_to--> C (Course belongs to Department), A --works_in--> D (Professor works in Department) -- REDUNDANT if C=D\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Detection:"
      }), " If relationship R can be expressed as composition of other relationships, R is redundant."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Solution:** Remove redundant relationships; use views or computed queries.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Circular Relationships"
      }), "\r\nThree or more entities form a cycle of relationships."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Example: EMPLOYEE --works_in--> DEPARTMENT, DEPARTMENT --manages--> PROJECT, PROJECT --assigned_to--> EMPLOYEE\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Circular FK constraints cause insertion-order deadlocks. Cannot insert into any table first."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Solution:** Make at least one FK nullable, or use deferred constraint checking.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Fan Trap"
      }), "\r\nOccurs when a many-to-one relationship fans out to multiple many sides."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Example: BRANCH --has--> LOAN (1:N), BRANCH --has--> ACCOUNT (1:N)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Path through BRANCH is ambiguous for \"which loan belongs to which account.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Solution:** Introduce direct relationship between LOAN and CUSTOMER.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Chasm Trap"
      }), "\r\nOccurs when two many-to-one relationships converge, causing information loss in joins."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Example: DEPARTMENT --has--> EMPLOYEE (1:N), DEPARTMENT --manages--> PROJECT (1:N)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " A JOIN may lose employees whose department has no projects."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Solution:** Use separate queries or UNION.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Attributes on Relationships"
      }), "\r\nAttributes belonging to the association (grade on ENROLLS_IN) may be incorrectly placed on an entity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Detect:** If an attribute describes the association, not the entity, it belongs on the relationship diamond.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "6. Weak Entity Without Discriminator"
      }), "\r\nA weak entity needs a discriminator to distinguish entities within the same owner."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Solution:** Every weak entity must have a discriminator. Add ordinal if none exists.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-entities-and-entity-sets",
      children: "2.2 Entities and Entity Sets"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "An **entity** is a distinguishable object that exists in the real world. Each entity has a unique identity. For example, a specific student named \"Alice Chen\" with student ID \"1001\" is an entity.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "entity set"
      }), " is a collection of entities that share the same properties. For example, all students form the STUDENT entity set. Entity sets are conventionally named in uppercase singular."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Entity vs. Entity Set:**\r\n- Entity: Alice Chen, student ID 1001 (a specific instance)\r\n- Entity Set: STUDENT (the collection of all student entities)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-family-tree",
      children: "Real-World Analogy: Family Tree"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "| ER Concept | Family Tree Equivalent |\r\n|-----------|----------------------|\r\n| Entity Set | All people in the family |\r\n| Entity | A specific person (Grandma Rose) |\r\n| Attribute | Name, birth year, eye color of Grandma Rose |\r\n| Key Attribute | Social Security Number uniquely identifies each person |\r\n| Relationship | \"Parent of\" connects two people |\r\n| Weak Entity | A childhood nickname tied to a specific person |\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In a family tree, each person exists independently (strong entity). But a \"Family Nickname\" (like \"Little John\" within the Smith family) is a weak entity → it has meaning only within the context of a specific family."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#### Numbered Steps to Identify Entities\n"
      })
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#### Pseudocode: Entity Identification\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-pseudocode",
        children: "PROCEDURE IdentifyEntities(requirements):\r\n    nouns = ExtractNouns(requirements)\r\n    candidates = []\r\n    \r\n    FOR EACH noun IN nouns:\r\n        IF HasMultipleAttributes(noun) AND HasIdentifier(noun):\r\n            IF NOT IsRelationship(noun):\r\n                candidates.ADD(noun)\r\n    \r\n    RETURN candidates\r\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "### 2.3 Attributes\r\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Attributes describe the properties of entities. Each entity has a value for each of its attributes."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Attribute Classifications:**\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Simple vs. Composite:"
      })
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
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Single-Valued vs. Multi-Valued:**\r\n- **Single-Valued:** One value per entity. Example: `student_id` (a student has one ID)\r\n- **Multi-Valued:** Zero or more values. Example: `phone_numbers` (a student may have multiple phone numbers); `degrees` (a person may have multiple degrees)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stored vs. Derived:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
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
        }), " and the current date"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Null Values:** An attribute may take a null value when:\r\n- The attribute does not apply (e.g., `apartment_number` for a single-family home)\r\n- The value is unknown (e.g., `salary` has not been entered yet)\r\n- The value is unknown but exists (e.g., `phone_number` exists but we do not know it)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "attribute-types-comparison",
      children: "Attribute Types Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "| Aspect | Simple | Composite | Derived | Multi-Valued | Stored | Key |\r\n|--------|--------|-----------|---------|-------------|-------|-----|\r\n| **Definition** | Atomic, indivisible | Composed of sub-attributes | Computed from stored data | Holds multiple values | Physically stored | Uniquely identifies entity |\r\n| **Example** | age, student_id | name (first, last), address | age from DOB, experience | phone_numbers, degrees | date_of_birth, salary | student_id, SSN |\r\n| **Storage** | Single column | Multiple columns | Not stored (computed) | Separate table required | Direct column | Primary key column |\r\n| **ER Notation** | Single ellipse | Ellipse with sub-ellipses | Dashed ellipse | Double-line ellipse | Solid ellipse | Underlined text |\r\n| **Update Cost** | Direct update | Must update multiple cols | Auto-updates on query | Insert/delete in sep table | Direct update | Rarely changed |\r\n| **Indexing** | Straightforward | On sub-attributes | Cannot index directly | On sep table columns | Straightforward | Always indexed |\r\n| **Normalization** | Always 1NF | Depends on dependency | N/A | Separate table = 4NF | Direct | Primary key |\r\n| **SQL Mapping** | Column | Multiple columns | Computed column / view | Separate table with FK | Column | PRIMARY KEY |\r\n| **Query Complexity** | Low | Low | Medium (computation cost) | High (join required) | Low | Very low |\r\n| **Memory Use** | Fixed per type | Sum of sub-attr sizes | Zero (computed) | Variable, potentially large | Fixed | Fixed |\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-student-registration-form",
      children: "Real-World Analogy: Student Registration Form"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Consider a university registration form:\r\n- **Simple:** Student ID (a single, atomic number)\r\n- **Composite:** Full Name = First Name + Middle Initial + Last Name (can be broken down)\r\n- **Multi-valued:** Phone Numbers (home, cell, work → zero or more)\r\n- **Derived:** Age (calculated from Date of Birth and today's date)\r\n- **Stored:** Date of Birth (physically stored in database)\r\n- **Key:** Student ID (uniquely identifies each student)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The form designer decides which fields are composite (they provide sub-boxes for first/last name) and which are simple (single box for ID). They know phone numbers need space for multiple entries. Age is never written on the form → it is computed when needed."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#### Python Implementation: Attribute Type Validator\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from datetime import date\r\nfrom typing import Any, List, Set, Optional\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class AttributeValidator:\r\n\"\"\"Validates attribute values based on their type classification.\"\"\""
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    @staticmethod\r\n    def validate_simple(value: Any, expected_type: type) -> bool:\r\n        return isinstance(value, expected_type)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@staticmethod\r\ndef validate_composite(components: dict, required_keys: Set[str]) -> bool:\r\n    return required_keys.issubset(set(components.keys()))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    @staticmethod\r\n    def validate_multi_valued(values: List[Any], min_items: int = 0) -> bool:\r\n        return len(values) >= min_items\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@staticmethod\r\ndef validate_derived(stored_attrs: dict, expression: str) -> Optional[Any]:\r\n    if expression == \"age\" and \"date_of_birth\" in stored_attrs:\r\n        dob = stored_attrs[\"date_of_birth\"]\r\n        today = date.today()\r\n        return today.year - dob.year - (\r\n            (today.month, today.day) < (dob.month, dob.day)\r\n        )\r\n    return None\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class AttributeClassifier:\r\n    \"\"\"Classifies and validates attribute types for ER modeling.\"\"\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def __init__(self):\r\n    self.attribute_types: dict = {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    def register(self, name: str, attr_type: str, **metadata) -> None:\r\n        self.attribute_types[name] = {\"type\": attr_type, **metadata}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def classify_example(self) -> dict:\r\n    return {\r\n        \"student_id\": {\r\n            \"type\": \"key\",\r\n            \"description\": \"Unique 8-digit integer\",\r\n            \"null_allowed\": False\r\n        },\r\n        \"name\": {\r\n            \"type\": \"composite\",\r\n            \"components\": [\"first_name\", \"middle_initial\", \"last_name\"],\r\n            \"null_allowed\": False\r\n        },\r\n        \"date_of_birth\": {\r\n            \"type\": \"stored\",\r\n            \"format\": \"YYYY-MM-DD\",\r\n            \"null_allowed\": False\r\n        },\r\n        \"age\": {\r\n            \"type\": \"derived\",\r\n            \"expression\": \"CURRENT_DATE - date_of_birth\",\r\n            \"null_allowed\": True\r\n        },\r\n        \"phone_numbers\": {\r\n            \"type\": \"multi_valued\",\r\n            \"max_count\": 5,\r\n            \"null_allowed\": True\r\n        }\r\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def demonstrate_attribute_types():\r\nprint(\"=== Attribute Types Demonstration ===\\n\")\r\ndata = {\r\n\"student_id\": 1001,\r\n\"name\": {\"first_name\": \"Alice\", \"middle_initial\": \"M\", \"last_name\": \"Chen\"},\r\n\"date_of_birth\": date(2000, 5, 15),\r\n\"phone_numbers\": [\"555-0101\", \"555-0102\"],\r\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    validator = AttributeValidator()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "simple_ok = validator.validate_simple(data[\"student_id\"], int)\r\nprint(f\"Simple (student_id is int): {simple_ok}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    composite_ok = validator.validate_composite(\r\n        data[\"name\"], {\"first_name\", \"last_name\"}\r\n    )\r\n    print(f\"Composite (name has first+last): {composite_ok}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mv_ok = validator.validate_multi_valued(data[\"phone_numbers\"])\r\nprint(f\"Multi-valued (phone count={len(data['phone_numbers'])}): {mv_ok}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    age = validator.validate_derived(data, \"age\")\r\n    print(f\"Derived (age from DOB): {age}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if __name__ == \"__main__\":\r\n    demonstrate_attribute_types()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#### Complexity Analysis for Attributes\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**WHY multi-valued attributes require O(P+E):** To map a multi-valued attribute like phone_numbers, we must read the entity's primary key (P) and create a new row for each value (V). The total work is proportional to the number of values. This cannot be O(1) because each value becomes its own row in the separate table.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-relationship-types-and-relationship-sets",
      children: "2.4 Relationship Types and Relationship Sets"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "A **relationship** is an association among two or more entities. For example, Alice Chen (a STUDENT entity) takes CS101 (a COURSE entity).\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "relationship set"
      }), " is a collection of relationships of the same type. For example, all takes relationships form the TAKES relationship set."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Degree of a Relationship:** The number of entity types participating in the relationship.\r\n- **Unary (degree 1):** Relationship between entities of the same entity set. Example: MARRIED_TO (PERSON married to another PERSON), MANAGES (EMPLOYEE manages another EMPLOYEE)\r\n- **Binary (degree 2):** Relationship between two entity sets. This is the most common degree.\r\n- **Ternary (degree 3):** Relationship among three entity sets.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cardinality Constraints:"
      }), " For binary relationships, the cardinality constraint specifies how many entities from one set can relate to entities in the other set."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "- **One-to-One (1:1):** An entity in A is associated with at most one entity in B, and vice versa. Example: A MANAGER manages at most one DEPARTMENT; a DEPARTMENT has at most one MANAGER.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-to-Many (1:N):"
        }), " An entity in A is associated with zero or more entities in B, but an entity in B is associated with at most one entity in A. Example: A DEPARTMENT has many EMPLOYEES, but an EMPLOYEE belongs to at most one DEPARTMENT."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "- **Many-to-One (N:1):** The inverse of 1:N. Multiple entities in A relate to a single entity in B.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Many-to-Many (M:N):"
        }), " An entity in A is associated with any number of entities in B, and vice versa. Example: A STUDENT can take many COURSEs; a COURSE can be taken by many STUDENTs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Participation Constraints (Total vs. Partial):**\r\n- **Total Participation:** Every entity in the set must participate in the relationship. Example: Every STUDENT must be enrolled in at least one COURSE.\r\n- **Partial Participation:** Some entities may not participate. Example: Not every FACULTY member advises a STUDENT.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "relationship-types-comparison",
      children: "Relationship Types Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "| Aspect | 1:1 (One-to-One) | 1:N (One-to-Many) | M:N (Many-to-Many) |\r\n|--------|-----------------|-------------------|-------------------|\r\n| **Definition** | Each entity on both sides relates to at most one | One side relates to many; other to at most one | Both sides relate to many |\r\n| **Example** | Manager manages Department | Department has Employees | Student takes Course |\r\n| **ER Notation** | Arrow on both sides | Arrow on \"1\" side only | No arrows |\r\n| **FK Placement** | Either table (with UNIQUE) | Many-side table | New junction table |\r\n| **Junction Table?** | No | No | Yes, always required |\r\n| **Junction PK** | N/A | N/A | Composite of both FKs |\r\n| **Data Redundancy** | None | Low | Low to moderate |\r\n| **Query Complexity** | Simple JOIN | Simple JOIN | Double JOIN (through junction) |\r\n| **Update Anomalies** | Rare | Potential if FK not indexed | Rare with composite PK |\r\n| **Real-world Example** | Country has Capital | Mother has Children | Student enrolls in Courses |\r\n| **Cardinality on both sides** | Exactly 1 each | 1 on one side, N on other | N on both sides |\r\n| **Participation (typical)** | Often partial on both | Total on many side | Total on both sides |\r\n| **Mapping Rule** | Add FK + UNIQUE to either | Add FK to many side | New table with composite PK |\r\n| **Common Pitfall** | Assuming 1:1 when actually 1:N | Missing NOT NULL on FK | Forgetting junction table attributes |\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-to-determine-cardinality",
      children: "Numbered Steps to Determine Cardinality"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. **Pick one entity instance** from side A (e.g., one specific DEPARTMENT)\r\n2. **Ask:** How many B entities can this A relate to? (DEPARTMENT has how many EMPLOYEES?)\r\n3. **Answer:** Many (more than 1) -> side A is \"one\" or \"many\" depending on count\r\n4. **Pick one entity instance** from side B (e.g., one specific EMPLOYEE)\r\n5. **Ask:** How many A entities can this B relate to? (EMPLOYEE belongs to how many DEPARTMENTS?)\r\n6. **Answer:** One (at most 1) -> side B is \"one\"\r\n7. **Combine:** A can relate to many B (N), B can relate to at most one A (1) => 1:N from A to B\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-cardinality-determination",
      children: "Pseudocode: Cardinality Determination"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "```pseudocode\r\nPROCEDURE DetermineCardinality(entityA, entityB, requirements):\r\n    a_to_b_count = CountMaxRelated(entityA, entityB, requirements)\r\n    b_to_a_count = CountMaxRelated(entityB, entityA, requirements)\r\n    \r\n    IF a_to_b_count == 1 AND b_to_a_count == 1:\r\n        RETURN \"1:1\"\r\n    ELSE IF a_to_b_count > 1 AND b_to_a_count == 1:\r\n        RETURN \"1:N (A to B)\"\r\n    ELSE IF a_to_b_count == 1 AND b_to_a_count > 1:\r\n        RETURN \"1:N (B to A)\"\r\n    ELSE:\r\n        RETURN \"M:N\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FUNCTION CountMaxRelated(entityFrom, entityTo, requirements):\r\n// Scan requirements for phrases like \"each X has many Y\" or \"each X has one Y\"\r\nIF requirements CONTAINS \"many\" NEAR entityFrom NEAR entityTo:\r\nRETURN MANY\r\nELSE:\r\nRETURN 1\r\nEND FUNCTION"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-cardinality-determination-for-school-system",
      children: "Dry Run: Cardinality Determination for School System"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Scenario:** A school system where teachers teach classes, and classes have students.\n"
      })
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#### C++ Implementation: Cardinality Checker\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <string>\r\n#include <vector>\r\nusing namespace std;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enum class Cardinality { ONE_TO_ONE, ONE_TO_MANY, MANY_TO_MANY };"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct EntityPair {\r\n    string entityA, entityB;\r\n    int maxAtoB, maxBtoA;\r\n    string description;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Cardinality determine() const {\r\n    if (maxAtoB &lt;= 1 && maxBtoA <= 1) return Cardinality::ONE_TO_ONE;\r\n    if (maxAtoB > 1 && maxBtoA &lt;= 1) return Cardinality::ONE_TO_MANY;\r\n    return Cardinality::MANY_TO_MANY;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    string toString() const {\r\n        switch(determine()) {\r\n            case Cardinality::ONE_TO_ONE: return \"1:1\";\r\n            case Cardinality::ONE_TO_MANY: return \"1:N (\" + entityA + \" -> \" + entityB + \")\";\r\n            case Cardinality::MANY_TO_MANY: return \"M:N\";\r\n        }\r\n        return \"?\";\r\n    }\r\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "void analyzeRelationship(const EntityPair& pair) {\r\ncout << pair.entityA << \" -> \" << pair.entityB << \": max=\" << pair.maxAtoB << endl;\r\ncout << pair.entityB << \" -> \" << pair.entityA << \": max=\" << pair.maxBtoA << endl;\r\ncout << \"Cardinality: \" << pair.toString() << endl;\r\ncout << pair.description << endl << endl;\r\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int main() {\r\n    vector<EntityPair> relationships = {\r\n        {\"MANAGER\", \"DEPARTMENT\", 1, 1,\r\n         \"A manager manages exactly one department; a department has exactly one manager.\"},\r\n        {\"DEPARTMENT\", \"EMPLOYEE\", 100, 1,\r\n         \"A department has many employees; each employee belongs to one department.\"},\r\n        {\"STUDENT\", \"COURSE\", 10, 200,\r\n         \"A student takes many courses; a course has many students.\"},\r\n        {\"COUNTRY\", \"CAPITAL\", 1, 1,\r\n         \"A country has exactly one capital; a capital belongs to exactly one country.\"},\r\n        {\"PERSON\", \"PARENT\", 2, 10,\r\n         \"A person has up to 2 parents; a parent can have many children.\"},\r\n    };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (const auto& rel : relationships) {\r\n    analyzeRelationship(rel);\r\n}\r\nreturn 0;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-relationship-set-manager",
      children: "Python Implementation: Relationship Set Manager"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "```python\r\nfrom enum import Enum\r\nfrom typing import List, Dict, Optional, Tuple, Set\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class Cardinality(Enum):\r\nONE_TO_ONE = \"1:1\"\r\nONE_TO_MANY = \"1:N\"\r\nMANY_TO_MANY = \"M:N\""
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Participation(Enum):\r\n    TOTAL = \"TOTAL\"\r\n    PARTIAL = \"PARTIAL\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["class RelationshipSet:\r\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "init"
      }), "(self, name: str):\r\nself.name = name\r\nself.cardinality: Optional[Cardinality] = None\r\nself.participations: Dict[str, Participation] = {}\r\nself.participants: List[str] = []\r\nself.attributes: List[str] = []"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    def set_cardinality(self, card: Cardinality) -> None:\r\n        self.cardinality = card\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def add_participant(self, entity: str, part: Participation) -> None:\r\n    self.participants.append(entity)\r\n    self.participations[entity] = part\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    def validate(self) -> Tuple[bool, List[str]]:\r\n        errors = []\r\n        if not self.cardinality:\r\n            errors.append(f\"Relationship {self.name} has no cardinality set\")\r\n        if len(self.participants) &lt; 2:\r\n            errors.append(f\"Relationship {self.name} needs at least 2 participants\")\r\n        return (len(errors) == 0, errors)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def get_mapping_rule(self) -> str:\r\n    if not self.cardinality:\r\n        return \"Undefined\"\r\n    rules = {\r\n        Cardinality.ONE_TO_ONE: \"Add FK with UNIQUE constraint to either participant's table\",\r\n        Cardinality.ONE_TO_MANY: \"Add FK to the 'many' side's table\",\r\n        Cardinality.MANY_TO_MANY: \"Create a new junction table with composite PK of both FKs\",\r\n    }\r\n    return rules[self.cardinality]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    def __repr__(self) -> str:\r\n        parts = \", \".join(self.participants)\r\n        return f\"RelationshipSet({self.name}, {self.cardinality.value if self.cardinality else '?'}, [{parts}])\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class RelationshipAnalyzer:\r\n    \"\"\"Analyzes and validates relationships in an ER model.\"\"\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def __init__(self):\r\n    self.relationships: List[RelationshipSet] = []\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    def add(self, rel: RelationshipSet) -> None:\r\n        self.relationships.append(rel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def analyze_all(self) -> None:\r\n    for rel in self.relationships:\r\n        ok, errors = rel.validate()\r\n        print(f\"\\nRelationship: {rel.name} -> {rel.cardinality.value if rel.cardinality else '?'}\")\r\n        print(f\"  Participants: {rel.participants}\")\r\n        print(f\"  Mapping Rule: {rel.get_mapping_rule()}\")\r\n        if errors:\r\n            print(f\"  Validation Errors: {errors}\")\r\n        else:\r\n            print(f\"  Status: VALID\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    def find_redundant(self) -> List[Tuple[str, str]]:\r\n        \"\"\"Detect potentially redundant relationships by participant overlap.\"\"\"\r\n        pairs: List[Tuple[Set[str], str]] = []\r\n        for rel in self.relationships:\r\n            pairs.append((set(rel.participants), rel.name))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    redundant = []\r\n    for i, (p1, n1) in enumerate(pairs):\r\n        for j, (p2, n2) in enumerate(pairs):\r\n            if i < j and p1 == p2:\r\n                redundant.append((n1, n2))\r\n    return redundant\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def demonstrate_relationship_analysis():\r\nanalyzer = RelationshipAnalyzer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    mgr_dept = RelationshipSet(\"MANAGES\")\r\n    mgr_dept.set_cardinality(Cardinality.ONE_TO_ONE)\r\n    mgr_dept.add_participant(\"MANAGER\", Participation.PARTIAL)\r\n    mgr_dept.add_participant(\"DEPARTMENT\", Participation.TOTAL)\r\n    analyzer.add(mgr_dept)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "dept_emp = RelationshipSet(\"EMPLOYS\")\r\ndept_emp.set_cardinality(Cardinality.ONE_TO_MANY)\r\ndept_emp.add_participant(\"DEPARTMENT\", Participation.TOTAL)\r\ndept_emp.add_participant(\"EMPLOYEE\", Participation.TOTAL)\r\nanalyzer.add(dept_emp)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    student_course = RelationshipSet(\"ENROLLS_IN\")\r\n    student_course.set_cardinality(Cardinality.MANY_TO_MANY)\r\n    student_course.add_participant(\"STUDENT\", Participation.TOTAL)\r\n    student_course.add_participant(\"COURSE\", Participation.PARTIAL)\r\n    analyzer.add(student_course)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "analyzer.analyze_all()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    redundant = analyzer.find_redundant()\r\n    if redundant:\r\n        print(f\"\\nPotentially redundant pairs: {redundant}\")\r\n    else:\r\n        print(\"\\nNo redundant relationships detected.\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if __name__ == \"__main__\":\r\n    demonstrate_relationship_analysis()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#### A&D Table: Relationship Degree Analysis\n"
      })
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "### 2.5 Weak Entity Sets\r\n\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "weak entity set"
      }), " is an entity set whose existence depends on another entity set (the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "identifying"
      }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "owner"
      }), " entity set)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Characteristics:\r\n- A weak entity does not have a primary key of its own\r\n- It is identified by combining its **discriminator** (partial key) with the primary key of the identifying entity set\r\n- The identifying relationship is many-to-one from weak to owner\r\n- The participation of the weak entity in the identifying relationship is always total\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " A DEPENDENT entity depends on an EMPLOYEE entity. Two employees might both have a dependent named \"John Smith.\" Dependents are identified by the combination of their name (discriminator) and the employee ID (owner's key)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#### Weak vs Strong Entity Comparison\n"
      })
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#### Real-World Analogy: Invoice System\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Without the invoice, a line item is meaningless. \"2 x Laptop at \\$999\" means nothing if you do not know which invoice it belongs to.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-to-identify-and-map-weak-entities",
      children: "Numbered Steps to Identify and Map Weak Entities"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. **Check dependency** → Ask: \"Can this entity exist without another entity?\" If no, it is weak\r\n2. **Identify owner** → Find the entity on which it depends\r\n3. **Determine discriminator** → Find the attribute that distinguishes weak entities within one owner (e.g., line_number, dependent_name)\r\n4. **Verify total participation** → Confirm that every weak entity must belong to an owner\r\n5. **Verify M:1 identifying relationship** → Confirm many weak entities belong to one owner\r\n6. **Map owner** → Create table for strong entity first (standard mapping)\r\n7. **Map weak entity** → Create table with composite PK = owner's PK + discriminator\r\n8. **Add FK constraint** → owner's PK in weak entity table is also a FK\r\n9. **Add ON DELETE CASCADE** → Deleting owner cascades to weak entities\r\n10. **Document** → Note in schema comments that this is a weak entity\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-weak-entity-mapping",
      children: "Pseudocode: Weak Entity Mapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "```pseudocode\r\nPROCEDURE MapWeakEntity(weakEntity, ownerEntity):\r\n    ownerTable = MapStrongEntity(ownerEntity)\r\n    \r\n    weakTable = CREATE TABLE weakEntity.name\r\n    weakTable.AddColumn(ownerEntity.PK, FOREIGN KEY REFERENCES ownerEntity)\r\n    weakTable.AddColumn(weakEntity.discriminator, NOT NULL)\r\n    \r\n    FOR EACH attr IN weakEntity.attributes:\r\n        IF attr != weakEntity.discriminator:\r\n            weakTable.AddColumn(attr)\r\n    \r\n    weakTable.SetPrimaryKey(ownerEntity.PK, weakEntity.discriminator)\r\n    weakTable.SetForeignKey(ownerEntity.PK, ON DELETE CASCADE)\r\n    RETURN weakTable\r\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#### Dry Run: Mapping Weak Entity DEPENDENT\n"
      })
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "| Step | Action | Result |\r\n|------|--------|--------|\r\n| 1 | Create owner table EMPLOYEE | CREATE TABLE employee (emp_id INT PK, name VARCHAR) |\r\n| 2 | Create weak table DEPENDENT | CREATE TABLE dependent ( |\r\n| 3 | Add owner's PK as FK | emp_id INT REFERENCES employee(emp_id) |\r\n| 4 | Add discriminator | dependent_name VARCHAR(100) NOT NULL |\r\n| 5 | Add other attributes | relationship VARCHAR(20), birth_date DATE |\r\n| 6 | Set composite PK | PRIMARY KEY (emp_id, dependent_name) |\r\n| 7 | Add cascade delete | Foreign key ON DELETE CASCADE |\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Final SQL:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE employee (\r\n    emp_id INTEGER PRIMARY KEY,\r\n    name VARCHAR(100) NOT NULL\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CREATE TABLE dependent (\r\nemp_id INTEGER NOT NULL REFERENCES employee(emp_id) ON DELETE CASCADE,\r\ndependent_name VARCHAR(100) NOT NULL,\r\nrelationship VARCHAR(20),\r\nbirth_date DATE,\r\nPRIMARY KEY (emp_id, dependent_name)\r\n);"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-weak-entity-mapper",
      children: "C++ Implementation: Weak Entity Mapper"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "```cpp\r\n#include &lt;iostream&gt;\r\n#include &lt;string&gt;\r\n#include &lt;vector&gt;\r\nusing namespace std;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "struct Column {\r\nstring name;\r\nstring type;\r\nbool isPK;\r\nbool isFK;\r\nstring references;"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    Column(string n, string t, bool pk = false, bool fk = false, string ref = \"\")\r\n        : name(n), type(t), isPK(pk), isFK(fk), references(ref) {}\r\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["class WeakEntityMapper {\r\npublic:\r\nstatic void mapWeakEntity(const string& weakName, const string& ownerName,\r\nconst string& ownerPK, const string& discriminator,\r\nconst vector<pair<string, string>>& extraAttrs) {\r\nvector", (0,jsx_runtime.jsx)(_components.column, {
        children: " columns;"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        // Add owner's PK as FK\r\n        columns.push_back(Column(ownerPK, \"INTEGER\", true, true, ownerName + \"(\" + ownerPK + \")\"));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    // Add discriminator\r\n    columns.push_back(Column(discriminator, \"VARCHAR(100)\", true, false, \"\"));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        // Add extra attributes\r\n        for (const auto& [name, type] : extraAttrs) {\r\n            columns.push_back(Column(name, type, false, false, \"\"));\r\n        }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    // Generate SQL\r\n    cout << \"CREATE TABLE \" << weakName << \" (\\n\";\r\n    for (const auto& col : columns) {\r\n        cout << \"    \" << col.name << \" \" << col.type;\r\n        if (col.isPK && !col.isFK) cout << \" NOT NULL\";\r\n        if (col.isFK) cout << \" NOT NULL REFERENCES \" << col.references << \" ON DELETE CASCADE\";\r\n        if (&col != &columns.back()) cout << \",\";\r\n        cout << \"\\n\";\r\n    }\r\n    // Composite PK\r\n    cout << \"    PRIMARY KEY (\" << ownerPK << \", \" << discriminator << \")\\n\";\r\n    cout << \");\\n\";\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "};"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int main() {\r\n    cout &lt;< \"=== Weak Entity Mapping: DEPENDENT on EMPLOYEE ===\\n\\n\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "cout << \"-- Owner table (created first):\\n\";\r\ncout << \"CREATE TABLE employee (\\n\";\r\ncout << \"    emp_id INTEGER PRIMARY KEY,\\n\";\r\ncout << \"    name VARCHAR(100) NOT NULL\\n\";\r\ncout << \");\\n\\n\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    cout &lt;< \"-- Weak entity table:\\n\";\r\n    WeakEntityMapper::mapWeakEntity(\"dependent\", \"employee\", \"emp_id\", \"dependent_name\",\r\n        {{\"relationship\", \"VARCHAR(20)\"}, {\"birth_date\", \"DATE\"}});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "return 0;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-weak-entity-handler",
      children: "Python Implementation: Weak Entity Handler"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "```python\r\nfrom typing import List, Tuple, Optional\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["class WeakEntity:\r\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "init"
      }), "(self, name: str, owner: str, discriminator: str):\r\nself.name = name\r\nself.owner = owner\r\nself.discriminator = discriminator\r\nself.attributes: List[Tuple[str, str]] = []"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    def add_attribute(self, name: str, dtype: str) -> None:\r\n        self.attributes.append((name, dtype))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def generate_ddl(self, owner_pk: str) -> str:\r\n    lines = [f\"CREATE TABLE {self.name.lower()} (\"]\r\n    # Owner's PK as FK (part of composite PK)\r\n    lines.append(f\"    {owner_pk} INTEGER NOT NULL \"\r\n                  f\"REFERENCES {self.owner.lower()}({owner_pk}) ON DELETE CASCADE,\")\r\n    # Discriminator (part of composite PK)\r\n    lines.append(f\"    {self.discriminator.lower()} VARCHAR(100) NOT NULL,\")\r\n    # Extra attributes\r\n    for i, (aname, atype) in enumerate(self.attributes):\r\n        comma = \",\" if i &lt; len(self.attributes) - 1 else \"\"\r\n        lines.append(f\"    {aname.lower()} {atype}{comma}\")\r\n    # Composite primary key\r\n    lines.append(f\"    PRIMARY KEY ({owner_pk}, {self.discriminator.lower()})\")\r\n    lines.append(\");\")\r\n    return \"\\n\".join(lines)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    def validate(self) -> List[str]:\r\n        errors = []\r\n        if not self.owner:\r\n            errors.append(\"Weak entity must have an owner\")\r\n        if not self.discriminator:\r\n            errors.append(\"Weak entity must have a discriminator\")\r\n        return errors\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def demonstrate_weak_entities():\r\n    print(\"=== Weak Entity Demonstration ===\\n\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# Example 1: Invoice system\r\nline_item = WeakEntity(\"LINE_ITEM\", \"INVOICE\", \"line_number\")\r\nline_item.add_attribute(\"product_name\", \"VARCHAR(100)\")\r\nline_item.add_attribute(\"quantity\", \"INTEGER\")\r\nline_item.add_attribute(\"unit_price\", \"DECIMAL(10,2)\")\r\nprint(\"--- Invoice Line Items ---\")\r\nprint(line_item.generate_ddl(\"invoice_id\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    # Example 2: Flight seats\r\n    seat = WeakEntity(\"SEAT\", \"FLIGHT\", \"seat_number\")\r\n    seat.add_attribute(\"class\", \"VARCHAR(20)\")\r\n    seat.add_attribute(\"is_booked\", \"BOOLEAN\")\r\n    print(\"\\n--- Flight Seats ---\")\r\n    print(seat.generate_ddl(\"flight_id\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# Example 3: Exam scores (weak on Student + Course)\r\nexam = WeakEntity(\"EXAM_SCORE\", \"STUDENT\", \"exam_date\")\r\nexam.add_attribute(\"course_id\", \"INTEGER\")\r\nexam.add_attribute(\"score\", \"INTEGER\")\r\nprint(\"\\n--- Exam Scores ---\")\r\nprint(exam.generate_ddl(\"student_id\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {})
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["if ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "name"
      }), " == \"", (0,jsx_runtime.jsx)(_components.strong, {
        children: "main"
      }), "\":\r\ndemonstrate_weak_entities()"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-for-weak-entities",
      children: "Edge Cases for Weak Entities"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**1. Multi-level Weak Entity Chain**\r\nA weak entity that depends on another weak entity.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example: SEAT depends on FLIGHT (weak), FLIGHT depends on AIRLINE (strong)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Solution:** Cascade the composite key: AIRLINE.code + FLIGHT.date + FLIGHT.number + SEAT.row + SEAT.letter. The FK chain propagates through all levels.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Weak Entity with No Natural Discriminator"
      }), "\r\nWhen no attribute distinguishes instances within the same owner."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Solution:** Add a synthetic discriminator (line_number, sequence_number, ordinal). Always use NOT NULL.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Weak Entity Shared by Multiple Owners"
      }), "\r\nA rare case where a weak entity depends on two strong entities simultaneously."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Example:** An EXAM_SCORE depends on both STUDENT and COURSE.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Composite PK includes both owners' PKs plus the weak entity's discriminator: PRIMARY KEY (student_id, course_id, exam_date)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**4. Identifying Relationship Deletion**\r\nWhat happens when the owner is deleted?\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SQL Behavior:"
      }), " ON DELETE CASCADE is standard. ON DELETE RESTRICT prevents deletion if weak entities exist. ON DELETE SET NULL is not meaningful since the FK is part of the PK."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**5. Weak Entity with Its Own Relationships**\r\nA weak entity can participate in relationships with other entities.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " LINE_ITEM (weak on INVOICE) can have a relationship with PRODUCT."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Solution:** The LINE_ITEM table has its composite PK; other tables can reference it with a composite FK.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "26-er-diagram-notation",
      children: "2.6 ER Diagram Notation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ER diagrams use standard symbols:\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rectangles: Entity sets\r\nEllipses: Attributes\r\n   - Underlined attribute: Primary key\r\n   - Dashed underline: Discriminator (partial key)\r\n   - Double-line ellipse: Multi-valued attribute\r\n   - Double-bordered ellipse: Derived attribute\r\nDiamonds: Relationship sets\r\nLines: Connect entities to relationships\r\n   - Single line: Partial participation\r\n   - Double line: Total participation\r\n   - Arrow from relationship to entity: \"ToOne\" side\r\n   - No arrow: \"ToMany\" side\r\nDouble-bordered rectangle: Weak entity set\r\nDouble-bordered diamond: Identifying relationship\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Diagram Description - University Schema:**\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[STUDENT] ----< TAKES >---- [COURSE]\r\n    |                          |\r\n    |                          |\r\n(student_id)               (course_id)\r\n    |                          |\r\n  (name)                    (title)\r\n    |                          |\r\n(phone_numbers)            (credits)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "STUDENT is a rectangle with attributes: student_id (PK), name, phone_numbers (multi-valued)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "COURSE is a rectangle with attributes: course_id (PK), title, credits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TAKES is a diamond connecting STUDENT and COURSE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "M:N relationship (no arrows on lines)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Below the diagram:\r\n[EMPLOYEE] ==== MANAGES ---- [DEPARTMENT]\r\n    |        (double line     |\r\n    |         for total)      |\r\n  (emp_id)                  (dept_id)\r\n    |\r\n  (name)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MANAGES is 1:1 (arrow from MANAGES to EMPLOYEE, arrow from MANAGES to DEPARTMENT)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Double line: total participation of DEPARTMENT in MANAGES (every department has a manager)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single line: partial participation of EMPLOYEE (not every employee manages a department)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "er-diagram-notation-quick-reference",
      children: "ER Diagram Notation Quick Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "| Symbol | Meaning |\r\n|--------|---------|\r\n| Rectangle | Strong entity set |\r\n| Double rectangle | Weak entity set |\r\n| Diamond | Relationship set |\r\n| Double diamond | Identifying relationship (for weak entity) |\r\n| Ellipse | Attribute |\r\n| Underlined ellipse | Primary key attribute |\r\n| Dashed underline ellipse | Discriminator (partial key) |\r\n| Double-line ellipse | Multi-valued attribute |\r\n| Dashed ellipse | Derived attribute |\r\n| Single line (connecting) | Partial participation |\r\n| Double line (connecting) | Total participation |\r\n| Arrow on line | \"ToOne\" side (single-valued) |\r\n| No arrow on line | \"ToMany\" side (multi-valued) |\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-er-diagram-notation-renderer",
      children: "C++ Implementation: ER Diagram Notation Renderer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "```cpp\r\n#include &lt;iostream&gt;\r\n#include &lt;string&gt;\r\n#include &lt;vector&gt;\r\nusing namespace std;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class ERDiagramRenderer {\r\npublic:\r\nstatic void renderEntity(const string& name, bool isWeak = false) {\r\nstring border = isWeak ? \"[[\" : \"[\";\r\nstring borderEnd = isWeak ? \"]]\" : \"]\";\r\ncout << border << name << borderEnd << endl;\r\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    static void renderAttribute(const string& name, const string& type = \"simple\") {\r\n        if (type == \"key\") cout &lt;< \"(\" << name << \"*)\";\r\n        else if (type == \"multi\") cout &lt;< \"{{\" << name << \"}}\";\r\n        else if (type == \"derived\") cout &lt;< \"<\" << name << \"&gt;\";\r\n        else if (type == \"discriminator\") cout &lt;< \"(\" << name << \"~)\";\r\n        else cout &lt;< \"(\" << name << \")\";\r\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static void renderRelationship(const string& name, bool isIdentifying = false) {\r\n    string sym = isIdentifying ? \"<>\" : \"<>\";\r\n    cout << \"---{\" << name << \"}---\";\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    static void renderCardinality(const string& from, const string& to,\r\n                                   const string& fromCard, const string& toCard) {\r\n        cout &lt;< from << \" --(\" << fromCard << \")-- REL --(\" << toCard << \")-- \" << to << endl;\r\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static void renderUniversitySchema() {\r\n    cout << \"\\n=== University ER Diagram (Text) ===\\n\\n\";\r\n    cout << \"    [STUDENT] ----< ENROLLS_IN >---- [COURSE]\\n\";\r\n    cout << \"        |                                |\\n\";\r\n    cout << \"    (student_id*)                    (course_id*)\\n\";\r\n    cout << \"        |                                |\\n\";\r\n    cout << \"    {first_name}                     (title)\\n\";\r\n    cout << \"        |                                |\\n\";\r\n    cout << \"    {last_name}                      (credits)\\n\";\r\n    cout << \"        |\\n\";\r\n    cout << \"    {{phone_numbers}}\\n\";\r\n    cout << \"        |\\n\";\r\n    cout << \"    <age>\\n\\n\";\r\n    cout << \"    Legend:\\n\";\r\n    cout << \"    [ENTITY]   = Strong entity\\n\";\r\n    cout << \"    (attr*)    = Primary key\\n\";\r\n    cout << \"    {{attr}}   = Multi-valued attribute\\n\";\r\n    cout << \"    <attr>     = Derived attribute\\n\";\r\n    cout << \"    {attr}     = Composite component\\n\";\r\n    cout << \"    <> REL <>  = Relationship (M:N here)\\n\";\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "};"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int main() {\r\n    ERDiagramRenderer::renderUniversitySchema();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "cout << \"\\n=== Simple Rendering ===\\n\";\r\ncout << \"Entity: \";\r\nERDiagramRenderer::renderEntity(\"STUDENT\");\r\ncout << \"Weak Entity: \";\r\nERDiagramRenderer::renderEntity(\"DEPENDENT\", true);\r\ncout << \"Key Attribute: \";\r\nERDiagramRenderer::renderAttribute(\"student_id\", \"key\");\r\ncout << endl << \"Multi-valued: \";\r\nERDiagramRenderer::renderAttribute(\"phones\", \"multi\");\r\ncout << endl << \"Derived: \";\r\nERDiagramRenderer::renderAttribute(\"age\", \"derived\");\r\ncout << endl;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "### 2.7 Generalization, Specialization, and Aggregation\r\n\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Generalization:"
      }), " The process of defining a more general entity set from lower-level entity sets. Example: PERSON is a generalization of STUDENT and FACULTY. The common attributes (name, address, phone) are moved to PERSON, while specific attributes (GPA for STUDENT, salary for FACULTY) remain in the specialized sets."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Specialization:** The inverse → defining sub-groupings within an entity set. Example: From EMPLOYEE, we define subtypes SECRETARY, ENGINEER, and MANAGER, each with additional attributes.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints on Specialization/Generalization:"
      })
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
            }), " Some superclass entities may not belong to any subclass (e.g., not every PERSON is a STUDENT or FACULTY)"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Aggregation:** Treating a relationship as an entity for participation in other relationships. Example: PROJECT_WORKS (relationship between EMPLOYEE and PROJECT) might be treated as an entity that participates in a relationship with PAYROLL to track hours.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "er-vs-eer-comparison",
      children: "ER vs EER Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "| Aspect | ER Model | EER Model (Extended ER) |\r\n|--------|---------|------------------------|\r\n| **Full Name** | Entity-Relationship | Extended Entity-Relationship |\r\n| **Introduced** | Chen, 1976 | Enhanced in 1980s |\r\n| **Entity Types** | Plain entities only | Entities + superclass/subclass |\r\n| **Relationships** | Binary, unary, ternary | Adds category (union) types |\r\n| **Inheritance** | Not supported | Specialization/Generalization |\r\n| **Constraints** | Cardinality, participation | Adds disjointness, completeness |\r\n| **Complex Objects** | Flat entities only | Supports composite objects |\r\n| **Aggregation** | Not natively supported | Treats relationship as entity |\r\n| **Notation Complexity** | Low (simple shapes) | Medium (adds ISA, circles, d/o) |\r\n| **Use Case** | Simple to medium databases | Complex domains with hierarchies |\r\n| **Industry Adoption** | Universal standard | Used in advanced design tools |\r\n| **Learning Curve** | Low | Medium |\r\n| **Expressiveness** | Captures 80% of scenarios | Captures 95% of scenarios |\r\n| **Diagram Readability** | High | Medium (denser) |\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "generalizationspecialization-mapping-strategies-comparison",
      children: "Generalization/Specialization Mapping Strategies Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "| Aspect | Strategy A: Single Table | Strategy B: Separate Tables | Strategy C: Subclass Only |\r\n|--------|------------------------|----------------------------|--------------------------|\r\n| **Description** | One table for superclass + all subclasses | Superclass table + subclass tables with FK | Only subclass tables, each with all attributes |\r\n| **Tables Created** | 1 | 1 + S (for S subclasses) | S |\r\n| **Null Values** | Many (subclass-specific columns are NULL) | None | None |\r\n| **Joins Required** | None (single table) | S joins (subclass queries need join) | No joins, but duplicated data |\r\n| **Constraint Enforcement** | Weak (any row can have any mix) | Strong (FK enforces existence) | Weak |\r\n| **Disjoint Support** | Via type discriminator column | Via FK to single subclass | Natural (separate tables) |\r\n| **Overlapping Support** | Multiple boolean type flags | Multiple FK joins | Natural (insert in both tables) |\r\n| **Query Performance** | Best (no joins) | Good (indexed FK) | Moderate |\r\n| **Storage Efficiency** | Wasted space (NULLs) | Best | Redundant data (duplicated superclass attrs) |\r\n| **Adding New Subclass** | Add columns (ALTER TABLE) | Add new table + FK | Add new table |\r\n| **Migration Complexity** | High (large table ALTER) | Low (new table only) | Low |\r\n| **Recommendation** | Small, simple hierarchies | Most cases (flexible + clean) | When queries always need subclass details |\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-vehicle-registration-system",
      children: "Real-World Analogy: Vehicle Registration System"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "| EER Concept | Vehicle Analogy |\r\n|-------------|----------------|\r\n| Superclass: VEHICLE | All registered vehicles |\r\n| Subclass: CAR | Has trunk capacity, number of doors |\r\n| Subclass: TRUCK | Has cargo capacity, number of axles |\r\n| Subclass: MOTORCYCLE | Has engine displacement, type |\r\n| Disjoint | A VIN identifies either a car, truck, or motorcycle (not multiple) |\r\n| Overlapping | A person can be both a STUDENT and an EMPLOYEE (overlapping) |\r\n| Total completeness | Every vehicle must be a car, truck, or motorcycle |\r\n| Partial completeness | Not every person is a student or faculty |\r\n| Attribute inheritance | All vehicles have VIN, make, model, year (inherited from VEHICLE) |\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-for-generalizationspecialization-mapping",
      children: "Numbered Steps for Generalization/Specialization Mapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. **Identify superclass entities** → Find common attributes across similar entities\r\n2. **Identify subclasses** → Determine distinct categories with specific attributes\r\n3. **Determine disjointness** → Check if an entity can belong to multiple subclasses\r\n4. **Determine completeness** → Check if every superclass entity must be in a subclass\r\n5. **Choose mapping strategy** → A (single table), B (separate tables), or C (subclass only)\r\n6. **For Strategy B:** Create superclass table with common attributes and shared PK\r\n7. **For Strategy B:** Create subclass tables with FK to superclass (same PK value)\r\n8. **Add discriminator** (disjoint) or boolean flags (overlapping) to superclass\r\n9. **Enforce constraints** via CHECK (disjoint) or application logic (overlapping)\r\n10. **Document** mapping decisions and rationale in schema comments\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-generalization-mapping---strategy-b",
      children: "Pseudocode: Generalization Mapping - Strategy B"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "```pseudocode\r\nPROCEDURE MapGeneralizationStrategyB(superclass, subclasses):\r\n    // Create superclass table\r\n    superTable = CREATE TABLE superclass.name\r\n    superTable.AddPrimaryKey(superclass.PK)\r\n    FOR EACH attr IN superclass.commonAttributes:\r\n        superTable.AddColumn(attr)\r\n    superTable.AddColumn(\"entity_type\" VARCHAR(20)) // discriminator\r\n    \r\n    // Create each subclass table\r\n    FOR EACH subclass IN subclasses:\r\n        subTable = CREATE TABLE subclass.name\r\n        subTable.AddColumn(superclass.PK, \r\n            PRIMARY KEY REFERENCES superclass.name)\r\n        FOR EACH attr IN subclass.specificAttributes:\r\n            subTable.AddColumn(attr)\r\n    \r\n    RETURN (superTable, [subTables])\r\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#### Dry Run: Generalization Mapping for VEHICLE Hierarchy\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Superclass VEHICLE (VIN, make, model, year). Subclasses: CAR (num_doors, trunk_capacity), TRUCK (cargo_capacity, num_axles). Disjoint, Total."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "| Step | Action | Result |\r\n|------|--------|--------|\r\n| 1 | Create superclass table | CREATE TABLE vehicle (vin VARCHAR(17) PK, make VARCHAR(50), model VARCHAR(50), year INT, vehicle_type VARCHAR(20)) |\r\n| 2 | Create CAR subclass | CREATE TABLE car (vin VARCHAR(17) PK REFERENCES vehicle(vin), num_doors INT, trunk_capacity DECIMAL) |\r\n| 3 | Create TRUCK subclass | CREATE TABLE truck (vin VARCHAR(17) PK REFERENCES vehicle(vin), cargo_capacity DECIMAL, num_axles INT) |\r\n| 4 | Insert a car | INSERT INTO vehicle VALUES ('1HGCM82633A004352', 'Honda', 'Accord', 2024, 'CAR'); INSERT INTO car VALUES ('1HGCM82633A004352', 4, 15.0) |\r\n| 5 | Insert a truck | INSERT INTO vehicle VALUES ('3GTP2VE38DG123456', 'Chevrolet', 'Silverado', 2024, 'TRUCK'); INSERT INTO truck VALUES ('3GTP2VE38DG123456', 2000.0, 2) |\r\n| 6 | Query all vehicles | SELECT * FROM vehicle (returns both rows) |\r\n| 7 | Query only cars | SELECT v.*, c.* FROM vehicle v JOIN car c ON v.vin = c.vin |\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " 3 tables, no NULLs, full constraint enforcement via FK + composite queries."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#### Python Implementation: Generalization Mapper\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import List, Dict, Optional, Tuple\r\nfrom enum import Enum\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class Disjointness(Enum):\r\nDISJOINT = \"d\"\r\nOVERLAPPING = \"o\""
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Completeness(Enum):\r\n    TOTAL = \"total\"\r\n    PARTIAL = \"partial\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class SuperClass:\r\n    def __init__(self, name: str, pk: str):\r\n        self.name = name\r\n        self.pk = pk\r\n        self.common_attributes: List[Tuple[str, str]] = []\r\n        self.subclasses: List['SubClass'] = []\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def add_attr(self, name: str, dtype: str) -> None:\r\n    self.common_attributes.append((name, dtype))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    def add_subclass(self, sub: 'SubClass') -> None:\r\n        self.subclasses.append(sub)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class SubClass:\r\n    def __init__(self, name: str, disjointness: Disjointness, completeness: Completeness):\r\n        self.name = name\r\n        self.disjointness = disjointness\r\n        self.completeness = completeness\r\n        self.specific_attributes: List[Tuple[str, str]] = []\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def add_attr(self, name: str, dtype: str) -> None:\r\n    self.specific_attributes.append((name, dtype))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class GeneralizationMapper:\r\n\"\"\"Maps generalization/specialization hierarchies to relational schemas.\"\"\""
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    @staticmethod\r\n    def strategy_a_single_table(superclass: SuperClass) -> str:\r\n        \"\"\"Strategy A: One table for everything.\"\"\"\r\n        lines = [f\"CREATE TABLE {superclass.name.lower()} (\"]\r\n        lines.append(f\"    {superclass.pk.lower()} {_find_pk_type(superclass)} PRIMARY KEY,\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    for name, dtype in superclass.common_attributes:\r\n        lines.append(f\"    {name.lower()} {dtype},\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        # Discriminator column\r\n        lines.append(\"    entity_type VARCHAR(20) NOT NULL,\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    # Add all subclass-specific attributes (nullable)\r\n    all_sub_attrs = []\r\n    for sub in superclass.subclasses:\r\n        for name, dtype in sub.specific_attributes:\r\n            all_sub_attrs.append((f\"{sub.name.lower()}_{name.lower()}\", dtype))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        for i, (name, dtype) in enumerate(all_sub_attrs):\r\n            comma = \",\" if i < len(all_sub_attrs) - 1 else \"\"\r\n            lines.append(f\"    {name} {dtype}{comma}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    lines.append(\");\")\r\n    return \"\\n\".join(lines)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    @staticmethod\r\n    def strategy_b_separate_tables(superclass: SuperClass) -> List[str]:\r\n        \"\"\"Strategy B: Superclass table + subclass tables with FK.\"\"\"\r\n        statements = []\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    # Superclass table\r\n    lines = [f\"CREATE TABLE {superclass.name.lower()} (\"]\r\n    lines.append(f\"    {superclass.pk.lower()} {_find_pk_type(superclass)} PRIMARY KEY,\")\r\n    for i, (name, dtype) in enumerate(superclass.common_attributes):\r\n        comma = \",\" if i &lt; len(superclass.common_attributes) - 1 else \"\"\r\n        lines.append(f\"    {name.lower()} {dtype}{comma}\")\r\n    lines.append(\");\")\r\n    statements.append(\"\\n\".join(lines))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        # Subclass tables\r\n        for sub in superclass.subclasses:\r\n            lines = [f\"CREATE TABLE {sub.name.lower()} (\"]\r\n            lines.append(f\"    {superclass.pk.lower()} {_find_pk_type(superclass)} PRIMARY KEY \"\r\n                          f\"REFERENCES {superclass.name.lower()}({superclass.pk.lower()}),\")\r\n            for i, (name, dtype) in enumerate(sub.specific_attributes):\r\n                comma = \",\" if i < len(sub.specific_attributes) - 1 else \"\"\r\n                lines.append(f\"    {name.lower()} {dtype}{comma}\")\r\n            lines.append(\");\")\r\n            statements.append(\"\\n\".join(lines))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    return statements\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    @staticmethod\r\n    def strategy_c_subclass_only(superclass: SuperClass) -> List[str]:\r\n        \"\"\"Strategy C: Only subclass tables (each has all attributes).\"\"\"\r\n        statements = []\r\n        for sub in superclass.subclasses:\r\n            lines = [f\"CREATE TABLE {sub.name.lower()} (\"]\r\n            lines.append(f\"    {superclass.pk.lower()} {_find_pk_type(superclass)} PRIMARY KEY,\")\r\n            for name, dtype in superclass.common_attributes:\r\n                lines.append(f\"    {name.lower()} {dtype},\")\r\n            for i, (name, dtype) in enumerate(sub.specific_attributes):\r\n                comma = \",\" if i < len(sub.specific_attributes) - 1 else \"\"\r\n                lines.append(f\"    {name.lower()} {dtype}{comma}\")\r\n            lines.append(\");\")\r\n            statements.append(\"\\n\".join(lines))\r\n        return statements\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def _find_pk_type(superclass: SuperClass) -> str:\r\n    for name, dtype in superclass.common_attributes:\r\n        if name == superclass.pk:\r\n            return dtype\r\n    return \"INTEGER\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def demonstrate_generalization():\r\n    print(\"=== Generalization/ Specialization Mapping ===\\n\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# Vehicle hierarchy\r\nvehicle = SuperClass(\"VEHICLE\", \"vin\")\r\nvehicle.add_attr(\"vin\", \"VARCHAR(17)\")\r\nvehicle.add_attr(\"make\", \"VARCHAR(50)\")\r\nvehicle.add_attr(\"model\", \"VARCHAR(50)\")\r\nvehicle.add_attr(\"year\", \"INTEGER\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    car = SubClass(\"CAR\", Disjointness.DISJOINT, Completeness.TOTAL)\r\n    car.add_attr(\"num_doors\", \"INTEGER\")\r\n    car.add_attr(\"trunk_capacity\", \"DECIMAL(8,2)\")\r\n    vehicle.add_subclass(car)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "truck = SubClass(\"TRUCK\", Disjointness.DISJOINT, Completeness.TOTAL)\r\ntruck.add_attr(\"cargo_capacity\", \"DECIMAL(10,2)\")\r\ntruck.add_attr(\"num_axles\", \"INTEGER\")\r\nvehicle.add_subclass(truck)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    print(\"--- Strategy A: Single Table ---\")\r\n    print(GeneralizationMapper.strategy_a_single_table(vehicle))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "print(\"\\n--- Strategy B: Separate Tables (Recommended) ---\")\r\nfor stmt in GeneralizationMapper.strategy_b_separate_tables(vehicle):\r\n    print(stmt)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    print(\"\\n--- Strategy C: Subclass Tables Only ---\")\r\n    for stmt in GeneralizationMapper.strategy_c_subclass_only(vehicle):\r\n        print(stmt)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if __name__ == \"__main__\":\r\n    demonstrate_generalization()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "### 2.8 From ER to Relational Mapping\r\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ER diagrams are conceptual → they must be converted to relational schemas for implementation. The mapping rules:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. **Strong Entity Sets:** Create a table with all simple attributes. Composite attributes are flattened (each component becomes a column). The primary key becomes the table's primary key.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weak Entity Sets:"
        }), " Create a table with all attributes plus the primary key of the owning entity as a foreign key. The primary key combines the owner's key and the weak entity's discriminator."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "3. **Binary 1:1 Relationships:** Add the primary key of one side as a foreign key in the table for the other side. Include relationship attributes.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Binary 1:N Relationships:"
        }), " Add the primary key of the \"one\" side as a foreign key in the table for the \"many\" side. Total participation is enforced through NOT NULL."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "5. **Binary M:N Relationships:** Create a new table with the primary keys of both entities as foreign keys. Their combination is the primary key. Include relationship attributes.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-valued Attributes:"
        }), " Create a new table with the entity's primary key plus the attribute. The key is the combination of both."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "7. **Generalization/Specialization:** Three strategies:\r\n   - **Strategy A: Single table:** Combine superclass and all subclasses into one table with nullable columns for subclass-specific attributes and a type discriminator column.\r\n   - **Strategy B: Separate tables for each class:** Create a table for the superclass and separate tables for each subclass, linked via foreign keys.\r\n   - **Strategy C: Subclass tables only:** Skip the superclass table; each subclass table contains both specific and inherited attributes.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complete-dry-run-er-to-relational-mapping-for-university-schema",
      children: "Complete Dry Run: ER-to-Relational Mapping for University Schema"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Input ER Diagram:** STUDENT (student_id PK, name {first, last}, phone_numbers M), COURSE (course_id PK, title, credits), ENROLLS_IN (M:N between STUDENT and COURSE, has semester, grade), DEPENDENT (weak on STUDENT, discriminator: dependent_name).\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule-by-Rule Trace:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "| Rule # | Rule Name | Input Element | Output Table | Key Decision |\r\n|--------|-----------|--------------|-------------|--------------|\r\n| 1 | Strong Entity | STUDENT | student(student_id PK, first_name, last_name) | Composite name flattened to 2 columns |\r\n| 1 | Strong Entity | COURSE | course(course_id PK, title, credits) | Simple attributes become columns |\r\n| 2 | Weak Entity | DEPENDENT | dependent(student_id FK, dependent_name, relationship) | PK = (student_id, dependent_name) |\r\n| 3 | 1:1 Relationship | (none here) | N/A | No 1:1 in this schema |\r\n| 4 | 1:N Relationship | (none here) | N/A | No 1:N directly mapped |\r\n| 5 | M:N Relationship | ENROLLS_IN | enrolls_in(student_id FK, course_id FK, semester, grade) | PK = (student_id, course_id) |\r\n| 6 | Multi-valued Attr | phone_numbers on STUDENT | student_phone(student_id FK, phone) | PK = (student_id, phone) |\r\n| 7 | Generalization | (none here) | N/A | Not present in this schema |\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Final Schema (6 tables):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE student (\r\n    student_id INTEGER PRIMARY KEY,\r\n    first_name VARCHAR(50) NOT NULL,\r\n    last_name VARCHAR(50) NOT NULL\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CREATE TABLE student_phone (\r\nstudent_id INTEGER REFERENCES student(student_id),\r\nphone VARCHAR(20),\r\nPRIMARY KEY (student_id, phone)\r\n);"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CREATE TABLE course (\r\n    course_id VARCHAR(10) PRIMARY KEY,\r\n    title VARCHAR(200) NOT NULL,\r\n    credits INTEGER CHECK (credits > 0)\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CREATE TABLE enrolls_in (\r\nstudent_id INTEGER REFERENCES student(student_id),\r\ncourse_id VARCHAR(10) REFERENCES course(course_id),\r\nsemester VARCHAR(10),\r\ngrade CHAR(2),\r\nPRIMARY KEY (student_id, course_id)\r\n);"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CREATE TABLE dependent (\r\n    student_id INTEGER REFERENCES student(student_id) ON DELETE CASCADE,\r\n    dependent_name VARCHAR(100) NOT NULL,\r\n    relationship VARCHAR(20),\r\n    birth_date DATE,\r\n    PRIMARY KEY (student_id, dependent_name)\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#### Fan Trap vs Chasm Trap Comparison\n"
      })
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#### Interview Corner\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: What is the difference between an entity, an attribute, and a relationship?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**A:** An **entity** is a real-world object about which we store data (e.g., STUDENT). An **attribute** is a property of an entity (e.g., student_id, name). A **relationship** is an association between entities (e.g., ENROLLS_IN connects STUDENT and COURSE). In SQL terms: entity = table, attribute = column, relationship = foreign key or junction table.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: How do you identify a weak entity?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**A:** A weak entity is identified by checking if its existence depends on another entity. Key indicators: it has no meaningful primary key of its own, it cannot exist without its owner, and deleting the owner must cascade-delete the weak entity. Example: LINE_ITEM on an INVOICE → the line item has no meaning without the invoice.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: What are participation constraints and why do they matter?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**A:** Participation constraints define whether every entity in a set must participate in a relationship. **Total participation** (double line in ER) means every entity must be involved (e.g., every student must be enrolled in at least one course). **Partial participation** (single line) means some entities may not participate (e.g., not every professor teaches a course). They matter because they determine whether FK columns should be NOT NULL.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: What is the difference between cardinality and multiplicity?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**A:** **Cardinality** is an ER modeling concept describing the maximum number of entities on each side of a relationship (1:1, 1:N, M:N). **Multiplicity** is the UML term for the same concept but includes both minimum and maximum constraints (e.g., 0..* or 1..*). In practice, cardinality = maximum side; multiplicity = [min, max] range. Both define relationship structure, but multiplicity is more precise.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: Explain the N+1 problem in ER-to-relational mapping."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**A:** The N+1 problem occurs when querying a hierarchy (generalization). For N subclass instances, you run 1 query on the superclass + N queries on subclasses (= N+1 total). This is common with Strategy B mapping. Solution: use JOINs (single query) or implement eager loading. The tradeoff is join complexity vs. query count.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6: When should you use a ternary relationship vs. two binary relationships?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**A:** Use a ternary relationship when the relationship among three entities is atomic and cannot be decomposed. For example, a SUPPLIER supplies a PRODUCT to a WAREHOUSE → the supply relationship involves all three simultaneously. Decomposing into SUPPLIER-supplies-PRODUCT and PRODUCT-stored-in-WAREHOUSE loses the constraint that a specific supplier supplies a specific product to a specific warehouse. Use binary when the relationships are independent.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7: How do you map a unary (recursive) relationship?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**A:** For a unary 1:N relationship (e.g., EMPLOYEE manages EMPLOYEE): Add a self-referencing FK column (e.g., manager_id FK to employee(emp_id)). For unary M:N (e.g., TASK depends on TASK): Create a junction table with two FKs referencing the same entity's PK.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8: What is aggregation in ER modeling?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**A:** Aggregation treats a relationship as an entity for participation in another relationship. Example: The WORKS_ON relationship between EMPLOYEE and PROJECT might be treated as an entity that participates in USES relationship with EQUIPMENT. This is needed because standard ER does not allow relationships between relationships.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**1. MySQL Workbench ER Tools**\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MySQL Workbench provides a visual ER designer (reverse and forward engineering):"
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
        }), " Automatic FK creation, relationship line routing, color-coded entities, layer support"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**2. draw.io (diagrams.net)**\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Draw.io is a free, web-based diagramming tool widely used for ER diagrams:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
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
        }), " Manual layout only, no forward/reverse engineering with live databases"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**3. Lucidchart**\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lucidchart is a premium diagramming tool with strong database modeling:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
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
        }), " Real-time multi-user editing with comments and version history"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**4. pgAdmin4 (PostgreSQL)**\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ER diagram viewer for existing PostgreSQL databases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reverse engineering from live database"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Export as image or JSON"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Limited for initial design (better for documentation of existing schemas)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**5. DbSchema**\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Universal database designer supporting 40+ databases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HTML5 documentation with interactive diagrams"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Schema synchronization and version control"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data explorer with visual query builder"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Comparison of Tools:**\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Free"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reverse Eng."
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Forward Eng."
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Collab."
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notations"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MySQL Workbench"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chen, Crow's Foot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "draw.io"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chen, Crow's Foot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lucidchart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pgAdmin4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic layout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DbSchema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Paid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "## Examples\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Practicing ER-to-relational mapping with real examples → from strong entities to weak entities to generalization → builds the skill to design any database schema systematically."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Example 2.1: Mapping a University ER Diagram to Relations**\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given the ER diagram described above:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "```sql\r\n-- Strong entity: STUDENT\r\nCREATE TABLE student (\r\n    student_id INTEGER PRIMARY KEY,\r\n    first_name VARCHAR(50) NOT NULL,\r\n    last_name VARCHAR(50) NOT NULL\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-- Multi-valued attribute: phone_numbers\r\nCREATE TABLE student_phone (\r\nstudent_id INTEGER REFERENCES student(student_id),\r\nphone VARCHAR(15),\r\nPRIMARY KEY (student_id, phone)\r\n);"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-- Strong entity: COURSE\r\nCREATE TABLE course (\r\n    course_id VARCHAR(10) PRIMARY KEY,\r\n    title VARCHAR(200) NOT NULL,\r\n    credits INTEGER CHECK (credits > 0 AND credits &lt;= 5)\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-- M:N relationship: TAKES\r\nCREATE TABLE takes (\r\nstudent_id INTEGER REFERENCES student(student_id),\r\ncourse_id VARCHAR(10) REFERENCES course(course_id),\r\nsemester VARCHAR(10),\r\ngrade CHAR(2),\r\nPRIMARY KEY (student_id, course_id, semester)\r\n);"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-- Example of 1:N: DEPARTMENT has many EMPLOYEES\r\nCREATE TABLE department (\r\n    dept_id INTEGER PRIMARY KEY,\r\n    dept_name VARCHAR(100) NOT NULL\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CREATE TABLE employee (\r\nemp_id INTEGER PRIMARY KEY,\r\nemp_name VARCHAR(100) NOT NULL,\r\ndept_id INTEGER NOT NULL REFERENCES department(dept_id)\r\n);\r\n-- The dept_id FK in employee models the \"many\" side of 1:N"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2.2: Weak Entity -- Dependents"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "```sql\r\n-- Strong entity\r\nCREATE TABLE employee (\r\n    emp_id INTEGER PRIMARY KEY,\r\n    name VARCHAR(100) NOT NULL\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-- Weak entity: DEPENDENT\r\n-- Identified by emp_id + dependent_name\r\nCREATE TABLE dependent (\r\nemp_id INTEGER NOT NULL REFERENCES employee(emp_id),\r\ndependent_name VARCHAR(100) NOT NULL,\r\nrelationship VARCHAR(20),\r\nbirth_date DATE,\r\nPRIMARY KEY (emp_id, dependent_name)\r\n);"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2.3: Generalization/Specialization -- Strategy B"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "```sql\r\n-- Superclass table\r\nCREATE TABLE person (\r\n    person_id INTEGER PRIMARY KEY,\r\n    name VARCHAR(100) NOT NULL,\r\n    address VARCHAR(255)\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-- Subclass tables (1:1 relationship via FK)\r\nCREATE TABLE student (\r\nperson_id INTEGER PRIMARY KEY REFERENCES person(person_id),\r\ngpa DECIMAL(3,2),\r\nmajor VARCHAR(50)\r\n);"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CREATE TABLE faculty (\r\n    person_id INTEGER PRIMARY KEY REFERENCES person(person_id),\r\n    salary DECIMAL(10,2),\r\n    department VARCHAR(50)\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-- A person who is both a student and faculty:\r\n-- INSERT INTO person VALUES (1, 'Dr. Smith', '123 Main St');\r\n-- INSERT INTO student VALUES (1, 3.8, 'CS');\r\n-- INSERT INTO faculty VALUES (1, 85000, 'CS');"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {})
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Ternary relationships (degree 3) are often overused → most scenarios modeled with three entities can be expressed as two binary relationships."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " The ER diagram is a communication tool, not just a design artifact → use consistent notation so all stakeholders interpret it the same way."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "### 2.13 ER Model Implementation (TypeScript)\r\n\r\nThe following TypeScript code demonstrates how to programmatically represent and validate an ER model, including entity types, relationships, attributes, and cardinality constraints.\r\n\r\n```typescript\r\n// ============================================================\r\n// ER Model Implementation — TypeScript\r\n// ============================================================\r\n\r\nenum AttributeType {\r\n  SIMPLE,\r\n  COMPOSITE,\r\n  MULTIVALUED,\r\n  DERIVED,\r\n  KEY\r\n}\r\n\r\nenum Cardinality {\r\n  ONE_TO_ONE = '1:1',\r\n  ONE_TO_MANY = '1:N',\r\n  MANY_TO_MANY = 'M:N'\r\n}\r\n\r\nenum Participation {\r\n  TOTAL,\r\n  PARTIAL\r\n}\r\n\r\ninterface Attribute {\r\n  name: string;\r\n  type: AttributeType;\r\n  subAttributes?: Attribute[];\r\n}\r\n\r\ninterface EntityType {\r\n  name: string;\r\n  attributes: Attribute[];\r\n  isWeak: boolean;\r\n  discriminator?: string;\r\n}\r\n\r\ninterface RelationshipType {\r\n  name: string;\r\n  entityPairs: Array<{\r\n    entityName: string;\r\n    cardinality: Cardinality;\r\n    participation: Participation;\r\n    role?: string;\r\n  }>;\r\n  attributes: Attribute[];\r\n  isIdentifying: boolean;\r\n}\r\n\r\nclass ERModelBuilder {\r\n  private entities: Map<string, EntityType> = new Map();\r\n  private relationships: RelationshipType[] = [];\r\n\r\n  addEntity(name: string, attrs: Attribute[], isWeak = false, discriminator?: string): void {\r\n    if (this.entities.has(name)) {\r\n      throw new Error('Entity \\'' + name + '\\' already exists');\r\n    }\r\n    this.entities.set(name, { name, attributes: attrs, isWeak, discriminator });\r\n  }\r\n\r\n  addRelationship(\r\n    name: string,\r\n    entityPairs: RelationshipType['entityPairs'],\r\n    attrs: Attribute[] = [],\r\n    isIdentifying = false\r\n  ): void {\r\n    // Validate that all referenced entities exist\r\n    for (const pair of entityPairs) {\r\n      if (!this.entities.has(pair.entityName)) {\r\n        throw new Error('Entity \\'' + pair.entityName + '\\' not defined');\r\n      }\r\n    }\r\n    this.relationships.push({ name, entityPairs, attributes: attrs, isIdentifying });\r\n  }\r\n\r\n  generateRelationalSchema(): string[] {\r\n    const schemas: string[] = [];\r\n\r\n    // 1. Strong entities become tables\r\n    for (const [name, entity] of this.entities) {\r\n      if (!entity.isWeak) {\r\n        const cols = this.flattenAttributes(entity.attributes);\r\n        const pk = cols.find(c => c.includes('PRIMARY KEY'));\r\n        schemas.push(name + '(' + cols.join(', ') + ')');\r\n      }\r\n    }\r\n\r\n    // 2. Weak entities: table with FK to owner\r\n    for (const [name, entity] of this.entities) {\r\n      if (entity.isWeak) {\r\n        // Find the identifying relationship\r\n        const identifyingRel = this.relationships.find(\r\n          r => r.isIdentifying && r.entityPairs.some(p => p.entityName === name)\r\n        );\r\n        const owner = identifyingRel?.entityPairs.find(p => p.entityName !== name);\r\n        const cols = this.flattenAttributes(entity.attributes);\r\n        if (owner) {\r\n          cols.push(owner.entityName + '_id INTEGER NOT NULL');\r\n        }\r\n        schemas.push(name + '(' + cols.join(', ') + ', FK to ' + (owner?.entityName || '?') + ')');\r\n      }\r\n    }\r\n\r\n    // 3. M:N relationships: junction table with FKs to both entities\r\n    for (const rel of this.relationships) {\r\n      const pair0 = rel.entityPairs[0];\r\n      const pair1 = rel.entityPairs[1];\r\n      if (pair0.cardinality === Cardinality.MANY_TO_MANY) {\r\n        const fk1 = pair0.entityName + '_id INTEGER REFERENCES ' + pair0.entityName;\r\n        const fk2 = pair1.entityName + '_id INTEGER REFERENCES ' + pair1.entityName;\r\n        const relAttrs = this.flattenAttributes(rel.attributes);\r\n        schemas.push(rel.name + '(' + fk1 + ', ' + fk2 + ', ' + relAttrs.join(', ') + ', PRIMARY KEY (' + pair0.entityName + '_id, ' + pair1.entityName + '_id))');\r\n      }\r\n    }\r\n\r\n    return schemas;\r\n  }\r\n\r\n  private flattenAttributes(attrs: Attribute[], prefix = ''): string[] {\r\n    const cols: string[] = [];\r\n    for (const attr of attrs) {\r\n      const colName = prefix ? prefix + '_' + attr.name : attr.name;\r\n      switch (attr.type) {\r\n        case AttributeType.SIMPLE:\r\n        case AttributeType.KEY:\r\n          cols.push(colName + ' ' + (attr.type === AttributeType.KEY ? 'PRIMARY KEY' : 'VARCHAR(255)'));\r\n          break;\r\n        case AttributeType.COMPOSITE:\r\n          if (attr.subAttributes) {\r\n            cols.push(...this.flattenAttributes(attr.subAttributes, colName));\r\n          }\r\n          break;\r\n        case AttributeType.MULTIVALUED:\r\n          // Handled as a separate table elsewhere\r\n          cols.push('-- ' + colName + ' (stored in separate table)');\r\n          break;\r\n        case AttributeType.DERIVED:\r\n          cols.push('-- ' + colName + ' (computed, not stored)');\r\n          break;\r\n      }\r\n    }\r\n    return cols;\r\n  }\r\n\r\n  toString(): string {\r\n    let result = 'ER Model:\\n';\r\n    result += 'Entities:\\n';\r\n    for (const [name, entity] of this.entities) {\r\n      const weakTag = entity.isWeak ? ' [WEAK]' : '';\r\n      result += '  [' + name + ']' + weakTag + '\\n';\r\n      for (const attr of entity.attributes) {\r\n        result += '    - ' + AttributeType[attr.type] + ': ' + attr.name + '\\n';\r\n      }\r\n    }\r\n    result += 'Relationships:\\n';\r\n    for (const rel of this.relationships) {\r\n      const pairs = rel.entityPairs.map(\r\n        p => p.entityName + ' (' + p.cardinality + ', ' + Participation[p.participation] + ')'\r\n      ).join(' - ');\r\n      result += '  [' + rel.name + '] ' + pairs + '\\n';\r\n    }\r\n    return result;\r\n  }\r\n}\r\n\r\n// Demo: University ER Model\r\nconst builder = new ERModelBuilder();\r\n\r\nbuilder.addEntity('Student', [\r\n  { name: 'student_id', type: AttributeType.KEY },\r\n  { name: 'name', type: AttributeType.SIMPLE },\r\n  { name: 'address', type: AttributeType.COMPOSITE, subAttributes: [\r\n    { name: 'street', type: AttributeType.SIMPLE },\r\n    { name: 'city', type: AttributeType.SIMPLE },\r\n    { name: 'zip', type: AttributeType.SIMPLE }\r\n  ]},\r\n  { name: 'phone', type: AttributeType.MULTIVALUED },\r\n  { name: 'age', type: AttributeType.DERIVED }\r\n]);\r\n\r\nbuilder.addEntity('Course', [\r\n  { name: 'course_id', type: AttributeType.KEY },\r\n  { name: 'title', type: AttributeType.SIMPLE },\r\n  { name: 'credits', type: AttributeType.SIMPLE }\r\n]);\r\n\r\nbuilder.addRelationship('Enrolls', [\r\n  { entityName: 'Student', cardinality: Cardinality.MANY_TO_MANY, participation: Participation.TOTAL },\r\n  { entityName: 'Course', cardinality: Cardinality.MANY_TO_MANY, participation: Participation.PARTIAL }\r\n], [{ name: 'grade', type: AttributeType.SIMPLE }]);\r\n\r\nconsole.log(builder.toString());\r\nconsole.log('Relational Schema:');\r\nbuilder.generateRelationalSchema().forEach(s => console.log('  ' + s));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mermaid Diagram: ER-to-Relational Mapping Decision Flow"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\r\n    Start[ER Construct] --> IsEntity{Is it an<br>entity type?}\r\n    \r\n    IsEntity -->|Yes| IsWeak{Is it weak?}\r\n    IsWeak -->|No| StrongTable[Create table<br>with PK = key attribute]\r\n    IsWeak -->|Yes| WeakTable[Create table with<br>composite PK = FK + discriminator]\r\n    \r\n    IsEntity -->|No| IsRel{Is it a<br>relationship?}\r\n    IsRel -->|Yes| Card{What is the<br>cardinality?}\r\n    \r\n    Card -->|1:1| OneToOne[Add FK to either<br>side with UNIQUE]\r\n    Card -->|1:N| OneToMany[Add FK to the<br>N-side table]\r\n    Card -->|M:N| ManyToMany[Create junction table<br>with composite PK]\r\n    \r\n    IsRel -->|No| IsAttr{Is it an<br>attribute?}\r\n    \r\n    IsAttr -->|Simple| AddCol[Add as column]\r\n    IsAttr -->|Composite| Flatten[Flatten into<br>multiple columns]\r\n    IsAttr -->|Multi-valued| NewTable[Create separate<br>table with FK]\r\n    IsAttr -->|Derived| Compute[Dont store;<br>compute on read]\r\n    IsAttr -->|Key| PKCol[Add as PK column]\n"
      })
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
          children: "Which of the following is true about weak entities?\r\na) They have their own primary key\r\nb) They are identified by a combination of a FK to the owner entity and a discriminator\r\nc) They cannot have any attributes\r\nd) They always participate in identifying relationships"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A derived attribute is:\r\na) Stored in a separate child table\r\nb) Computed from other attributes and not physically stored\r\nc) Always used as a primary key\r\nd) A multi-valued attribute"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In the ER-to-relational mapping, a composite attribute is:\r\na) Stored as a separate table\r\nb) Flattened into multiple columns\r\nc) Stored in a JSON column\r\nd) Ignored because it cannot be mapped"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A ternary relationship is:\r\na) A relationship involving three entity types\r\nb) A relationship between three instances of the same entity\r\nc) A relationship that has three attributes\r\nd) Three binary relationships"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The main problem with star schemas in ER diagrams (unnecessary use of M:N relationships) is:\r\na) They are too slow to query\r\nb) They create redundant data and ambiguous semantics\r\nc) They violate 1NF\r\nd) They cannot be converted to relational tables"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A unary (recursive) relationship in ER is one where:\r\na) The relationship has no attributes\r\nb) The relationship connects an entity to itself\r\nc) The relationship has a single entity type\r\nd) The relationship is weak"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. **Always start with an ER diagram** before writing a single CREATE TABLE statement → it catches design flaws early and communicates structure to stakeholders.\r\n2. **Binary relationships cover 90% of real-world cases** → avoid ternary relationships unless all three entity types are genuinely independent; they often hide design problems.\r\n3. **Be precise with cardinality and participation** → confusing 1:N with M:N or total with partial participation leads to incorrect schemas that are expensive to fix later.\r\n4. **Weak entities are more common than you think** → line items on an invoice, dependents of an employee, and seat assignments on a flight are all weak entities.\r\n5. **Use Strategy B (separate tables) for generalization** → it preserves all constraints and handles overlapping subclasses cleanly, at the cost of more joins.\r\n6. **Name junction tables descriptively** → use entity_relationship names like `student_course` or `enrolls_in`, not `junction_table`.\r\n7. **Avoid fan traps by validating query paths** → before finalizing the schema, write sample queries for all common access patterns.\r\n8. **Document all assumptions** → cardinality decisions are often ambiguous in requirements; document why you chose each one.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "- **2.1:** The ER model is a high-level conceptual tool for capturing user requirements before database implementation.\r\n- **2.2:** An entity is a distinguishable real-world object; an entity set is a collection of similar entities.\r\n- **2.3:** Attributes describe entity properties and can be simple/composite, single-valued/multi-valued, or stored/derived.\r\n- **2.4:** Relationships connect entities with specified degree (unary, binary, ternary) and cardinality constraints (1:1, 1:N, M:N).\r\n- **2.5:** Weak entities depend on owner entities for their identity and combine an owner's key with a discriminator.\r\n- **2.6:** ER diagrams use standard symbols → rectangles for entities, diamonds for relationships, ellipses for attributes.\r\n- **2.7:** Generalization creates a superclass from subclasses; specialization creates subclasses from a superclass.\r\n- **2.8:** ER-to-relational mapping converts conceptual designs into implementable SQL schemas using systematic rules.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-tables",
      children: "Concept Comparison Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "### Core Comparison Table\n"
      })
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "### Fan Trap vs Chasm Trap Comparison\n"
      })
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "### Mapping Rule Quick Reference\n"
      })
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "## Cross-Application Matrix\n"
      })
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "## Chapter Quiz\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A weak entity is identified by:\r\na) Its own primary key only\r\nb) A combination of a discriminator and the owner's primary key\r\nc) A composite attribute\r\nd) A derived attribute"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "2. In a 1:N relationship between DEPARTMENT and EMPLOYEE:\r\n   a) Each department has many employees, and each employee belongs to many departments\r\n   b) Each department has many employees, and each employee belongs to one department\r\n   c) Each department has one employee, and each employee belongs to one department\r\n   d) Each department has one employee, and each employee belongs to many departments\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Which symbol represents a total participation in an ER diagram?\r\na) Single line\r\nb) Double line\r\nc) Arrow\r\nd) Dashed line"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "4. A ternary relationship involves:\r\n   a) Two entity sets\r\n   b) Three entity sets\r\n   c) Three attributes\r\n   d) Three relationship sets\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Which attribute type requires a separate table during ER-to-relational mapping?\r\na) Simple attribute\r\nb) Composite attribute\r\nc) Multi-valued attribute\r\nd) Derived attribute"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "6. Generalization is the process of:\r\n   a) Creating subclasses from a superclass\r\n   b) Creating a superclass from multiple subclasses\r\n   c) Adding attributes to an entity\r\n   d) Removing redundant relationships\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The identifying relationship of a weak entity is always:\r\na) Many-to-many\r\nb) Many-to-one from weak to owner\r\nc) One-to-one\r\nd) One-to-many from owner to weak"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "8. Which mapping strategy creates nullable columns for subclass-specific attributes?\r\n   a) Strategy A: Single table\r\n   b) Strategy B: Separate tables\r\n   c) Strategy C: Subclass tables only\r\n   d) Strategy D: No mapping needed\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A fan trap occurs when:\r\na) A weak entity has no discriminator\r\nb) A \"one\" entity fans out to multiple \"many\" entities\r\nc) Two entities have an M:N relationship\r\nd) A ternary relationship is used incorrectly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "10. Which tool supports both reverse and forward engineering of ER diagrams?\r\n    a) draw.io\r\n    b) MySQL Workbench\r\n    c) Lucidchart (free version)\r\n    d) Microsoft Word\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-b, 2-b, 3-b, 4-b, 5-c, 6-b, 7-b, 8-a, 9-b, 10-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "## Summary\n"
      })
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "## Exercises\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic",
      children: "Basic"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. For a LIBRARY database, identify at least three entity sets and two relationship sets.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Classify each attribute as simple or composite, single-valued or multi-valued, stored or derived:\r\na) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "employee_id"
        }), "\r\nb) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "full_name"
        }), " (stored as \"Smith, John\")\r\nc) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "years_of_service"
        }), " (computed from hire_date)\r\nd) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "phone_numbers"
        }), "\r\ne) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "address"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "3. What is the difference between a weak entity set and a strong entity set? Give an example of each.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "### Intermediate\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For a BILLING system: INVOICE has invoice_id, date, total_amount. LINE_ITEM has description, quantity, unit_price. An INVOICE has many LINE_ITEMs. A LINE_ITEM belongs to exactly one INVOICE. What cardinality is this? Write the CREATE TABLE statements."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "6. Consider a COMPANY database where MANAGER manages DEPARTMENT. Not every employee is a manager. Every department has exactly one manager. One manager manages exactly one department. Identify the cardinality, participation constraints, and write the schema.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "### Advanced\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a generalization hierarchy for VEHICLES in a rental system. Include CAR, TRUCK, and MOTORCYCLE as subclasses. What attributes go in VEHICLE? Which subclass-specific attributes would each have? Show the mapping SQL using Strategy B."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "9. A university database has the following REQUIREMENT: \"A course section must be taught by exactly one instructor. An instructor teaches zero or more sections. A section belongs to exactly one course. A course has zero or more sections.\" Identify all entity sets, relationship sets, cardinalities, and participation constraints. Write the full SQL schema.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider an AIRLINE database with WEAK entities: SEAT depends on FLIGHT. Each flight has a flight_number and date. Each seat has seat_number (1A, 1B, etc.) and class (economy, business, first). Write the SQL schema. How would you handle the case where the same seat number exists on different flights?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "11. Identify the fan trap in this schema: BRANCH has many LOANS. BRANCH has many ACCOUNTS. Explain why querying \"which loan belongs to which account\" is ambiguous.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "12",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For the VEHICLE generalization hierarchy (Exercise 8), write a single query using Strategy B that returns all vehicles with their subclass-specific attributes."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "## Additional Case Studies\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-1-online-bookstore-er-model",
      children: "Case Study 1: Online Bookstore ER Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Requirements:** An online bookstore sells books to customers. Each book has ISBN (unique), title, author(s), price, and stock quantity. A customer has customer_id, name, email, and shipping_addresses (multiple). Customers place orders. Each order has order_id, order_date, status, and total_amount. An order contains multiple order_items. Each order_item references a book and has quantity and unit_price. Books are written by authors. An author has author_id, name, and biography. An author can write multiple books; a book can have multiple authors.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step ER Modeling:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "| Step | Action | Result |\r\n|------|--------|--------|\r\n| 1 | Identify entities | BOOK, CUSTOMER, ORDER, ORDER_ITEM, AUTHOR |\r\n| 2 | Identify relationships | CUSTOMER places ORDER, ORDER contains ORDER_ITEM, ORDER_ITEM references BOOK, AUTHOR writes BOOK |\r\n| 3 | Determine cardinality | CUSTOMER-ORDER: 1:N, ORDER-ORDER_ITEM: 1:N (identifying), ORDER_ITEM-BOOK: M:1, AUTHOR-BOOK: M:N |\r\n| 4 | Classify attributes | shipping_addresses (multi-valued), total_amount (derived from sum of order_items) |\r\n| 5 | Identify weak entities | ORDER_ITEM is weak on ORDER (no meaning without which order) |\r\n| 6 | Identify key attributes | ISBN (BOOK), customer_id (CUSTOMER), order_id (ORDER), author_id (AUTHOR) |\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ER-to-Relational Mapping:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "```sql\r\n-- Strong entities\r\nCREATE TABLE book (\r\n    isbn VARCHAR(13) PRIMARY KEY,\r\n    title VARCHAR(200) NOT NULL,\r\n    price DECIMAL(10,2) NOT NULL,\r\n    stock_quantity INTEGER DEFAULT 0\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CREATE TABLE customer (\r\ncustomer_id INTEGER PRIMARY KEY,\r\nname VARCHAR(100) NOT NULL,\r\nemail VARCHAR(150) UNIQUE NOT NULL\r\n);"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-- Multi-valued attribute: shipping_addresses\r\nCREATE TABLE customer_address (\r\n    customer_id INTEGER REFERENCES customer(customer_id),\r\n    address_line VARCHAR(255) NOT NULL,\r\n    is_primary BOOLEAN DEFAULT FALSE,\r\n    PRIMARY KEY (customer_id, address_line)\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CREATE TABLE author (\r\nauthor_id INTEGER PRIMARY KEY,\r\nname VARCHAR(100) NOT NULL,\r\nbiography TEXT\r\n);"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-- 1:N: CUSTOMER to ORDER\r\nCREATE TABLE cust_order (\r\n    order_id INTEGER PRIMARY KEY,\r\n    customer_id INTEGER NOT NULL REFERENCES customer(customer_id),\r\n    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\r\n    status VARCHAR(20) DEFAULT 'pending'\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-- Weak entity: ORDER_ITEM on ORDER\r\nCREATE TABLE order_item (\r\norder_id INTEGER NOT NULL REFERENCES cust_order(order_id) ON DELETE CASCADE,\r\nline_number INTEGER NOT NULL,\r\nisbn VARCHAR(13) NOT NULL REFERENCES book(isbn),\r\nquantity INTEGER NOT NULL CHECK (quantity > 0),\r\nunit_price DECIMAL(10,2) NOT NULL,\r\nPRIMARY KEY (order_id, line_number)\r\n);"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-- M:N: AUTHOR writes BOOK\r\nCREATE TABLE written_by (\r\n    author_id INTEGER REFERENCES author(author_id),\r\n    isbn VARCHAR(13) REFERENCES book(isbn),\r\n    PRIMARY KEY (author_id, isbn)\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Complexity Analysis for this Schema:**\r\n- Tables created: 8 (5 strong entity tables + 1 junction + 1 weak entity + 1 multi-valued attr)\r\n- FK constraints: 7 (order->customer, order_item->order, order_item->book, written_by->author, written_by->book, customer_address->customer)\r\n- Maximum join depth: 4 (customer -> order -> order_item -> book -> author)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-2-hospital-management-system",
      children: "Case Study 2: Hospital Management System"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Requirements:** A hospital has doctors, patients, and appointments. Doctors have doctor_id, name, specialization, and phone. Patients have patient_id, name, date_of_birth, and insurance_info (composite: provider, policy_number). Doctors have multiple patients and vice versa (M:N via appointment). Each appointment has appointment_id, date, time, duration, and notes. A nurse assists in appointments. Nurses have nurse_id and name. Each appointment can have zero or more nurses assisting.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Entities:"
      }), " DOCTOR, PATIENT, APPOINTMENT, NURSE"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Relationships:**\r\n- DOCTOR conducts APPOINTMENT (1:N)\r\n- PATIENT attends APPOINTMENT (1:N)\r\n- APPOINTMENT assisted by NURSE (M:N)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`sql\r\nCREATE TABLE doctor (\r\ndoctor_id INTEGER PRIMARY KEY,\r\nname VARCHAR(100) NOT NULL,\r\nspecialization VARCHAR(100),\r\nphone VARCHAR(20)\r\n);"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CREATE TABLE patient (\r\n    patient_id INTEGER PRIMARY KEY,\r\n    name VARCHAR(100) NOT NULL,\r\n    date_of_birth DATE,\r\n    insurance_provider VARCHAR(100),\r\n    insurance_policy_no VARCHAR(50)\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CREATE TABLE appointment (\r\nappointment_id INTEGER PRIMARY KEY,\r\ndoctor_id INTEGER NOT NULL REFERENCES doctor(doctor_id),\r\npatient_id INTEGER NOT NULL REFERENCES patient(patient_id),\r\nappointment_date DATE NOT NULL,\r\nappointment_time TIME NOT NULL,\r\nduration_minutes INTEGER DEFAULT 30,\r\nnotes TEXT\r\n);"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-- M:N: APPOINTMENT to NURSE\r\nCREATE TABLE appointment_nurse (\r\n    appointment_id INTEGER REFERENCES appointment(appointment_id),\r\n    nurse_id INTEGER REFERENCES nurse(nurse_id),\r\n    PRIMARY KEY (appointment_id, nurse_id)\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CREATE TABLE nurse (\r\nnurse_id INTEGER PRIMARY KEY,\r\nname VARCHAR(100) NOT NULL\r\n);\r\n`"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "### Case Study 3: Detecting and Fixing a Fan Trap\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem Scenario:"
      }), " A bank database has BRANCH in a 1:N relationship with both LOAN and ACCOUNT. A manager wants to know: \"For each account, which loan does the account holder have at the same branch?\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Flawed Schema:**\r\n`sql\r\nCREATE TABLE branch (\r\n    branch_code VARCHAR(10) PRIMARY KEY,\r\n    branch_name VARCHAR(100)\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CREATE TABLE loan (\r\nloan_id INTEGER PRIMARY KEY,\r\nbranch_code VARCHAR(10) REFERENCES branch(branch_code),\r\namount DECIMAL(12,2)\r\n);"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CREATE TABLE account (\r\n    acc_number INTEGER PRIMARY KEY,\r\n    branch_code VARCHAR(10) REFERENCES branch(branch_code),\r\n    balance DECIMAL(12,2)\r\n);\r\n`\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Query that Fails:"
      }), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "sql SELECT a.acc_number, l.loan_id, a.branch_code FROM account a JOIN branch b ON a.branch_code = b.branch_code JOIN loan l ON b.branch_code = l.branch_code; "
      }), "\r\nThis produces a Cartesian product between accounts and loans at the same branch. A branch with 3 accounts and 2 loans returns 6 rows, falsely pairing each account with every loan."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**The Fix:** Add a direct CUSTOMER entity that owns both accounts and loans, or restructure to include a CUSTOMER-ACCOUNT and CUSTOMER-LOAN relationship.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`sql\r\nCREATE TABLE customer (\r\ncustomer_id INTEGER PRIMARY KEY,\r\nname VARCHAR(100)\r\n);"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CREATE TABLE customer_account (\r\n    customer_id INTEGER REFERENCES customer(customer_id),\r\n    acc_number INTEGER REFERENCES account(acc_number),\r\n    PRIMARY KEY (customer_id, acc_number)\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CREATE TABLE customer_loan (\r\ncustomer_id INTEGER REFERENCES customer(customer_id),\r\nloan_id INTEGER REFERENCES loan(loan_id),\r\nPRIMARY KEY (customer_id, loan_id)\r\n);"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-- Now query is unambiguous:\r\nSELECT ca.customer_id, ca.acc_number, cl.loan_id\r\nFROM customer_account ca\r\nJOIN customer_loan cl ON ca.customer_id = cl.customer_id;\r\n`\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-4-detecting-and-fixing-a-chasm-trap",
      children: "Case Study 4: Detecting and Fixing a Chasm Trap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Problem Scenario:** A university has a DEPARTMENT in a 1:N relationship with both EMPLOYEE and PROJECT. Finding all employees and their project assignments is ambiguous.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Flawed Schema:"
      }), "\r\n`sql\r\nCREATE TABLE department (\r\ndept_id INTEGER PRIMARY KEY,\r\ndept_name VARCHAR(100)\r\n);"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CREATE TABLE employee (\r\n    emp_id INTEGER PRIMARY KEY,\r\n    dept_id INTEGER REFERENCES department(dept_id),\r\n    name VARCHAR(100)\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CREATE TABLE project (\r\nproject_id INTEGER PRIMARY KEY,\r\ndept_id INTEGER REFERENCES department(dept_id),\r\ntitle VARCHAR(200)\r\n);\r\n`"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Failed Query:**\r\n`sql\r\nSELECT e.name AS employee, p.title AS project\r\nFROM employee e\r\nJOIN department d ON e.dept_id = d.dept_id\r\nLEFT JOIN project p ON d.dept_id = p.dept_id;\r\n`\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This returns each employee repeated for every project in their department. An employee working on no projects still appears but paired with unrelated projects."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**The Fix:** Add a direct EMPLOYEE-PROJECT relationship table.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`sql\r\nCREATE TABLE employee_project (\r\nemp_id INTEGER REFERENCES employee(emp_id),\r\nproject_id INTEGER REFERENCES project(project_id),\r\nhours_per_week DECIMAL(4,1),\r\nPRIMARY KEY (emp_id, project_id)\r\n);"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-- Correct query:\r\nSELECT e.name, p.title, ep.hours_per_week\r\nFROM employee e\r\nLEFT JOIN employee_project ep ON e.emp_id = ep.emp_id\r\nLEFT JOIN project p ON ep.project_id = p.project_id;\r\n`\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-complete",
      children: "Quick Reference (Complete)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "| ER Concept | Notation | SQL Mapping | Min Lines in ER |\r\n|-----------|----------|-------------|----------------|\r\n| Strong Entity | Rectangle | CREATE TABLE with PK | Single line |\r\n| Weak Entity | Double rectangle | CREATE TABLE, FK to owner, composite PK | Double line |\r\n| Simple Attribute | Single ellipse | Column in table | Single line |\r\n| Composite Attribute | Ellipse with sub-ellipses | Flattened into multiple columns | Lines to sub-ellipses |\r\n| Multi-valued Attribute | Double-line ellipse | Separate table with FK + attribute | Double line to entity |\r\n| Derived Attribute | Dashed ellipse | Computed column or not stored | Dashed line |\r\n| Key Attribute | Underlined text | PRIMARY KEY constraint | Included in entity ellipse |\r\n| Discriminator | Dashed underline | Part of composite PK | Dashed underline in weak entity |\r\n| 1:1 Relationship | Diamond with arrows both sides | FK + UNIQUE in either table | Arrow on both connecting lines |\r\n| 1:N Relationship | Diamond with arrow on 1 side | FK in many-side table | Arrow on \"1\" line, no arrow on \"N\" |\r\n| M:N Relationship | Diamond (no arrows) | Junction table with composite PK | No arrows on connecting lines |\r\n| Total Participation | Double line connecting | NOT NULL on FK column | Double line between shapes |\r\n| Partial Participation | Single line connecting | NULL allowed on FK | Single line between shapes |\r\n| Identifying Relationship | Double diamond | FK is part of weak entity PK | Double diamond + double line |\r\n| Generalization | Triangle with ISA label | Strategy A/B/C (see section 2.7) | Triangle from superclass to subclasses |\r\n| Aggregation | Dashed rectangle around rel | Decompose into entity + FK | Dashed box around relationship diamond |\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {})
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

/***/ 8453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
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