"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[46545],{

/***/ 96650
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_artificial_intelligence_06_knowledge_representation_md_bbf_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-artificial-intelligence-06-knowledge-representation-md-bbf.json
const site_docs_courses_artificial_intelligence_06_knowledge_representation_md_bbf_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/artificial-intelligence/06-knowledge-representation","title":"Chapter 6: Knowledge Representation","description":"Previous Logical Agents and Propositional Logic | Next First-Order Logic and Inference","source":"@site/docs/courses/artificial-intelligence/06-knowledge-representation.md","sourceDirName":"courses/artificial-intelligence","slug":"/artificial-intelligence/06-knowledge-representation","permalink":"/ai-engineering-journey/artificial-intelligence/06-knowledge-representation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"id":"06-knowledge-representation","slug":"/artificial-intelligence/06-knowledge-representation","title":"Chapter 6: Knowledge Representation","sidebar_label":"Chapter 6: Knowledge Representation","sidebar_position":10},"sidebar":"course-artificial-intelligence","previous":{"title":"Chapter 5: Game Playing and Adversarial Search","permalink":"/ai-engineering-journey/artificial-intelligence/05-game-playing"},"next":{"title":"Chapter 6: Logical Agents and Propositional Logic","permalink":"/ai-engineering-journey/artificial-intelligence/06-logic"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/artificial-intelligence/06-knowledge-representation.md


const frontMatter = {
	id: '06-knowledge-representation',
	slug: '/artificial-intelligence/06-knowledge-representation',
	title: 'Chapter 6: Knowledge Representation',
	sidebar_label: 'Chapter 6: Knowledge Representation',
	sidebar_position: 10
};
const contentTitle = 'Chapter 6: Knowledge Representation';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Knowledge Representation Matters",
  "id": "why-knowledge-representation-matters",
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
  "value": "6.1 The Ontological Commitment — Ontologies",
  "id": "61-the-ontological-commitment--ontologies",
  "level": 2
}, {
  "value": "Steps to Build an Ontology",
  "id": "steps-to-build-an-ontology",
  "level": 3
}, {
  "value": "Pseudocode for Ontology Construction",
  "id": "pseudocode-for-ontology-construction",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run: Building a University Ontology",
  "id": "step-by-step-dry-run-building-a-university-ontology",
  "level": 3
}, {
  "value": "Python Implementation: Basic Ontology Class",
  "id": "python-implementation-basic-ontology-class",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 3
}, {
  "value": "6.2 Logic-Based Representation",
  "id": "62-logic-based-representation",
  "level": 2
}, {
  "value": "6.2.1 Propositional Logic",
  "id": "621-propositional-logic",
  "level": 3
}, {
  "value": "6.2.2 First-Order Logic (FOL)",
  "id": "622-first-order-logic-fol",
  "level": 3
}, {
  "value": "6.3 Semantic Networks",
  "id": "63-semantic-networks",
  "level": 2
}, {
  "value": "Steps for Building and Querying a Semantic Network",
  "id": "steps-for-building-and-querying-a-semantic-network",
  "level": 3
}, {
  "value": "Pseudocode for Semantic Network Inference",
  "id": "pseudocode-for-semantic-network-inference",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run: Animal Kingdom Semantic Network",
  "id": "step-by-step-dry-run-animal-kingdom-semantic-network",
  "level": 3
}, {
  "value": "Python Implementation: Semantic Network",
  "id": "python-implementation-semantic-network",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-1",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 3
}, {
  "value": "6.4 Frames",
  "id": "64-frames",
  "level": 2
}, {
  "value": "Steps for Frame-Based Knowledge Representation",
  "id": "steps-for-frame-based-knowledge-representation",
  "level": 3
}, {
  "value": "Pseudocode for Frame System",
  "id": "pseudocode-for-frame-system",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run: University Course Frame",
  "id": "step-by-step-dry-run-university-course-frame",
  "level": 3
}, {
  "value": "Python Implementation: Frame System",
  "id": "python-implementation-frame-system",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-2",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-2",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-2",
  "level": 3
}, {
  "value": "6.5 Conceptual Graphs",
  "id": "65-conceptual-graphs",
  "level": 2
}, {
  "value": "Steps to Build and Reason with Conceptual Graphs",
  "id": "steps-to-build-and-reason-with-conceptual-graphs",
  "level": 3
}, {
  "value": "Pseudocode for Conceptual Graph Operations",
  "id": "pseudocode-for-conceptual-graph-operations",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run: Library Borrowing Conceptual Graph",
  "id": "step-by-step-dry-run-library-borrowing-conceptual-graph",
  "level": 3
}, {
  "value": "Python Implementation: Conceptual Graph",
  "id": "python-implementation-conceptual-graph",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-3",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-3",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-3",
  "level": 3
}, {
  "value": "6.6 Description Logic",
  "id": "66-description-logic",
  "level": 2
}, {
  "value": "Steps for Description Logic Reasoning",
  "id": "steps-for-description-logic-reasoning",
  "level": 3
}, {
  "value": "Pseudocode for DL Tableau Reasoner (Satisfiability)",
  "id": "pseudocode-for-dl-tableau-reasoner-satisfiability",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run: Family Tree in DL",
  "id": "step-by-step-dry-run-family-tree-in-dl",
  "level": 3
}, {
  "value": "Python Implementation: Description Logic Reasoner",
  "id": "python-implementation-description-logic-reasoner",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-4",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-4",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-4",
  "level": 3
}, {
  "value": "6.7 Categories and Actions",
  "id": "67-categories-and-actions",
  "level": 2
}, {
  "value": "6.7.1 Categories",
  "id": "671-categories",
  "level": 3
}, {
  "value": "6.7.2 Situation Calculus",
  "id": "672-situation-calculus",
  "level": 3
}, {
  "value": "6.7.3 Event Calculus",
  "id": "673-event-calculus",
  "level": 3
}, {
  "value": "6.8 Reasoning Systems Architecture",
  "id": "68-reasoning-systems-architecture",
  "level": 2
}, {
  "value": "Knowledge Representation Schemes — Comparison",
  "id": "knowledge-representation-schemes--comparison",
  "level": 2
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Q1: How is a Knowledge Representation system different from a database?",
  "id": "q1-how-is-a-knowledge-representation-system-different-from-a-database",
  "level": 3
}, {
  "value": "Q2: How do you design an ontology for a new domain?",
  "id": "q2-how-do-you-design-an-ontology-for-a-new-domain",
  "level": 3
}, {
  "value": "Q3: How does inference work in semantic networks?",
  "id": "q3-how-does-inference-work-in-semantic-networks",
  "level": 3
}, {
  "value": "Q4: What are the limitations of Description Logic vs First-Order Logic?",
  "id": "q4-what-are-the-limitations-of-description-logic-vs-first-order-logic",
  "level": 3
}, {
  "value": "Q5: How do you handle inconsistency in a knowledge base?",
  "id": "q5-how-do-you-handle-inconsistency-in-a-knowledge-base",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "DBpedia and Wikidata",
  "id": "dbpedia-and-wikidata",
  "level": 3
}, {
  "value": "SNOMED CT (Medical Ontology)",
  "id": "snomed-ct-medical-ontology",
  "level": 3
}, {
  "value": "Google Knowledge Graph",
  "id": "google-knowledge-graph",
  "level": 3
}, {
  "value": "MYCIN (Historical — First Major Expert System)",
  "id": "mycin-historical--first-major-expert-system",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference — Ontology Concepts",
  "id": "quick-reference--ontology-concepts",
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
  "value": "6.9 Summary",
  "id": "69-summary",
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
        id: "chapter-6-knowledge-representation",
        children: "Chapter 6: Knowledge Representation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Previous:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/06-logic",
        children: "Chapter 6: Logical Agents and Propositional Logic"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/07-fol",
        children: "Chapter 7: First-Order Logic and Inference"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the conclusion of this chapter, the student will be able to: (1) explain the role of ontology in knowledge representation; (2) distinguish propositional and first-order logic as representation languages; (3) construct semantic networks and frame-based representations; (4) apply description logic to taxonomic reasoning; (5) model actions and change using situation and event calculi; (6) compare knowledge representation schemes along expressiveness, tractability, and decidability; (7) implement basic inference procedures for semantic networks and description logics in Python."
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
        href: "../../assets/images/lessons/artificial-intelligence/06-knowledge-representation/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/artificial-intelligence/06-knowledge-representation/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/artificial-intelligence/06-knowledge-representation/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/artificial-intelligence/06-knowledge-representation/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/artificial-intelligence/06-knowledge-representation/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/artificial-intelligence/06-knowledge-representation/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-knowledge-representation-matters",
      children: "Why Knowledge Representation Matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " Think of a library cataloging system. A library contains thousands of books, each with a subject, author, publication year, and location. Without a structured catalog (Dewey Decimal System, card catalogs, digital databases), finding a specific book would require searching every shelf. Knowledge representation is the AI equivalent — it provides the schema, categories, and relationships that allow an intelligent system to store, index, retrieve, and infer new knowledge efficiently."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Two Core Problems KR Solves:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Storage & Retrieval"
        }), " — How do we encode facts about the world so a program can look them up quickly? A semantic network storing \"all birds can fly\" + \"Tweety is a bird\" lets us retrieve \"Tweety can fly\" without storing it explicitly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inference & Discovery"
        }), " — How do we derive new knowledge from existing facts? If we know \"every professor teaches at least one course\" and \"Dr. Smith is a professor,\" we can infer \"Dr. Smith teaches some course X\" without being told explicitly."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It Matters for AI:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expert Systems"
        }), " (1980s boom) — MYCIN diagnosed blood infections using ~600 rules encoded as IF-THEN production rules. It outperformed junior doctors."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Semantic Web"
        }), " (2000s–present) — Google Knowledge Graph powers ~5 billion entity-relationship facts used in search, answering \"When was Leonardo da Vinci born?\" by traversing structured knowledge."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LLMs + Knowledge Graphs"
        }), " (2020s) — Hybrid systems combine neural language models with symbolic knowledge bases to ground responses in verified facts, reducing hallucination."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without KR, an AI system is just a pattern matcher. With KR, it becomes a reasoner."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Topics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Terms"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ontological Commitment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conceptualization, categories"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ontology, expressiveness vs tractability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logic-Based Rep."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PL syntax/semantics, FOL quantifiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terms, predicates, interpretation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic Networks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "is-a, has-property, part-of"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inheritance, multiple inheritance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frames"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slots, defaults, procedural attachment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Demons, when-needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conceptual Graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bipartite concept-relation graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Projection, canonical formation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Description Logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TBox, ABox, OWL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subsumption, satisfiability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Categories & Actions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Situation calculus, event calculus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fluents, frame problem, successor-state"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Ontological Commitment] --> B[Logic-Based Representation]\n    B --> C[Propositional Logic]\n    B --> D[First-Order Logic]\n    A --> E[Semantic Networks]\n    A --> F[Frames]\n    A --> G[Conceptual Graphs]\n    A --> H[Description Logic]\n    H --> I[TBox / ABox]\n    A --> J[Situation Calculus]\n    J --> K[Frame Problem]\n    A --> L[Event Calculus]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "61-the-ontological-commitment--ontologies",
      children: "6.1 The Ontological Commitment — Ontologies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " An ontology is like the blueprint of a building. Before construction, architects define the floor plan, room types, doorways, and load-bearing walls. Similarly, an ontology defines the categories (rooms), relations (doorways connect rooms), and constraints (walls cannot overlap) that structure a knowledge domain."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ontology"
      }), " is a formal, explicit specification of a conceptualization. It defines the categories, relations, constraints, and axioms that capture the structure of a domain. The choice of ontology constitutes an ontological commitment: a decision about what kinds of entities exist in the model."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Knowledge representation languages vary in their ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "expressiveness"
      }), " (what can be said) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tractability"
      }), " (how efficiently reasoning can be performed). There exists a fundamental trade-off: more expressive languages typically require greater computational resources for inference."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps-to-build-an-ontology",
      children: "Steps to Build an Ontology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Define the domain and scope"
        }), " — What area of knowledge are we modeling? (e.g., University domain)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify key concepts/classes"
        }), " — List the important categories (Person, Student, Professor, Course)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Define class hierarchy"
        }), " — Arrange classes in a taxonomy (Student ⊑ Person, Professor ⊑ Person)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify relationships (properties/roles)"
        }), " — Define how classes relate (teaches, enrolledIn)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add constraints (axioms)"
        }), " — Specify logical restrictions (Professor ⊓ Student ⊑ ⊥ — disjointness)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Populate instances (individuals)"
        }), " — Add concrete facts (Student(Alice), teaches(Dr.Smith, CS101))"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-for-ontology-construction",
      children: "Pseudocode for Ontology Construction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ALGORITHM: BuildOntology\nINPUT: Domain description D\nOUTPUT: Ontology O = (Classes, Hierarchy, Properties, Axioms, Instances)\n\n1. Classes ← ExtractNouns(D)                    // Extract candidate class names\n2. Hierarchy ← InitializeTaxonomy(Classes)       // SubClassOf relationships\n3. Properties ← ExtractRelations(D)              // Object and data properties\n4. DomainRange ← MapProperties(Properties)       // domain/range constraints\n5. Axioms ← GenerateConstraints(Classes, Properties) // disjointness, equivalence\n6. Instances ← PopulateFromData(D)               // Add known individuals\n7. RETURN O = (Classes, Hierarchy, Properties, Axioms, Instances)\n\n// Check consistency using a DL reasoner\nFUNCTION IsConsistent(O):\n    FOR each axiom A IN O.Axioms:\n        IF SatisfiabilityCheck(A) == UNSAT:\n            RETURN False\n    RETURN True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-building-a-university-ontology",
      children: "Step-by-Step Dry Run: Building a University Ontology"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ontology State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define scope: University domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain = {university}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify concepts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classes = {Person, Student, Professor, Course, Department}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define hierarchy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Student ⊑ Person, Professor ⊑ Person, Course ⊑ Object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define relationships"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "teaches(Domain: Professor, Range: Course), enrolledIn(Domain: Student, Range: Course)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Professor ⊓ Student ⊑ ⊥ (disjoint), Professor ⊑ ∃teaches.Course (every prof teaches)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add individuals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Student(Alice), Professor(Dr.Smith), enrolledIn(Alice, CS101)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistency check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All axioms satisfiable ✓ — ontology is consistent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query: Who teaches Alice? → Dr.Smith (via enrolledIn + teaches chain)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-basic-ontology-class",
      children: "Python Implementation: Basic Ontology Class"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Ontology:\n    \"\"\"Simple ontology representation with hierarchy and instance checking.\"\"\"\n\n    def __init__(self, name: str):\n        self.name = name\n        self.classes = {}          # name -> set of parent class names\n        self.instances = {}        # instance -> set of class names\n        self.properties = {}       # (domain, prop_name) -> set of range values\n        self.disjoint = set()      # set of frozensets of disjoint classes\n\n    def add_class(self, name: str, parents: set = None):\n        self.classes[name] = parents or set()\n\n    def add_instance(self, name: str, class_name: str):\n        if class_name not in self.classes:\n            raise ValueError(f\"Class '{class_name}' not defined\")\n        self.instances.setdefault(name, set()).add(class_name)\n\n    def add_property(self, instance: str, prop: str, value: str, domain: str, range_cls: str):\n        if instance not in self.instances:\n            raise ValueError(f\"Instance '{instance}' not found\")\n        self.properties.setdefault((instance, prop), set()).add(value)\n\n    def get_ancestors(self, class_name: str) -> set:\n        \"\"\"Return all ancestor classes including self.\"\"\"\n        result = {class_name}\n        for parent in self.classes.get(class_name, set()):\n            result |= self.get_ancestors(parent)\n        return result\n\n    def is_instance_of(self, instance: str, class_name: str) -> bool:\n        \"\"\"Check if an instance belongs to a class (including inheritance).\"\"\"\n        if instance not in self.instances:\n            return False\n        for cls in self.instances[instance]:\n            if class_name in self.get_ancestors(cls):\n                return True\n        return False\n\n    def query_by_class(self, class_name: str) -> list:\n        \"\"\"Retrieve all instances of a class (direct or inherited).\"\"\"\n        result = []\n        for inst, classes in self.instances.items():\n            for cls in classes:\n                if class_name in self.get_ancestors(cls):\n                    result.append(inst)\n                    break\n        return result\n\n\n# Example: Build a university ontology\nuni = Ontology(\"University\")\nuni.add_class(\"Person\")\nuni.add_class(\"Student\", {\"Person\"})\nuni.add_class(\"Professor\", {\"Person\"})\nuni.add_class(\"Course\")\n\nuni.add_instance(\"Alice\", \"Student\")\nuni.add_instance(\"DrSmith\", \"Professor\")\nuni.add_instance(\"CS101\", \"Course\")\n\nuni.add_property(\"Alice\", \"enrolledIn\", \"CS101\", \"Student\", \"Course\")\nuni.add_property(\"DrSmith\", \"teaches\", \"CS101\", \"Professor\", \"Course\")\n\nprint(uni.is_instance_of(\"Alice\", \"Person\"))    # True (inheritance)\nprint(uni.is_instance_of(\"Alice\", \"Professor\")) # False\nprint(uni.query_by_class(\"Person\"))             # ['Alice', 'DrSmith']\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Class insertion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash map append — no traversal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Instance insertion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(I)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash map append"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ancestor lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(H)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(H) recursion stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traverse hierarchy depth H"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Instance-of check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(I × H) worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check each of I instances, H levels deep"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Query by class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(I × H)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear scan of all instances"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consistency check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(C × R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(C + R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check each of C classes × R relations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where C = number of classes, I = number of instances, H = hierarchy depth, R = number of relations."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Formal semantics enable machine reasoning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Building ontologies is labor-intensive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reusable across applications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintenance cost as domain evolves"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enables interoperability between systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot capture procedural knowledge easily"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supports sophisticated query answering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expressiveness-tractability trade-off"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for the Semantic Web (OWL/RDF)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May require ontology engineers, not domain experts"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty ontology:"
        }), " All queries return empty lists — always validate that classes exist before adding instances."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cyclic hierarchy:"
        }), " A ⊑ B, B ⊑ C, C ⊑ A causes infinite recursion in ancestor lookup — use a visited set to detect cycles."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple inheritance with conflict:"
        }), " Student ⊑ Person, Employee ⊑ Person, TeachingAssistant ⊑ {Student, Employee}. If both Student and Employee define ", (0,jsx_runtime.jsx)(_components.code, {
          children: "status"
        }), ", resolution strategy (depth-first, linearization) matters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nominal (singleton) classes:"
        }), " {Alice} as a class with exactly one instance — queries must handle one-of constructs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unsatisfiable concepts:"
        }), " Person ⊓ ¬Person — the empty concept. Reasoners must detect and report unsat without crashing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "62-logic-based-representation",
      children: "6.2 Logic-Based Representation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Knowledge representation languages trade off expressiveness (how much you can say) against tractability (how fast you can reason) — choose the least expressive language that can express your problem."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "💡 Pro Tip:"
        }), " Description Logic (DL) sits at the sweet spot of the expressiveness-tractability trade-off. That is why OWL (based on DL) is the W3C standard for the Semantic Web — it is decidable and has polynomial-time classification algorithms."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "621-propositional-logic",
      children: "6.2.1 Propositional Logic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Syntax:"
      }), " Atomic propositions $P, Q, R, \\ldots$ combined with logical connectives $\\neg, \\land, \\lor, \\Rightarrow, \\Leftrightarrow$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Semantics:"
      }), " Truth tables assign truth values to formulas given an interpretation (assignment of truth values to atoms). A formula is valid (tautology) if true under all interpretations; satisfiable if true under at least one interpretation; unsatisfiable if false under all interpretations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Inference:"
      }), " Modus ponens: from $\\alpha$ and $\\alpha \\Rightarrow \\beta$, infer $\\beta$. Resolution: from $(\\alpha \\lor \\beta)$ and $(\\neg\\beta \\lor \\gamma)$, infer $(\\alpha \\lor \\gamma)$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "622-first-order-logic-fol",
      children: "6.2.2 First-Order Logic (FOL)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FOL extends propositional logic with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Terms:"
        }), " Constants ($a, b$), variables ($x, y$), functions ($f(t_1, \\ldots, t_n)$)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Predicates:"
        }), " $P(t_1, \\ldots, t_n)$ expressing relations among terms."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quantifiers:"
        }), " Universal $\\forall x , P(x)$ (\"for all $x$, $P(x)$ holds\"), existential $\\exists x , P(x)$ (\"there exists $x$ such that $P(x)$ holds\")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Semantics:"
      }), " An interpretation $\\mathcal{I}$ maps constants to domain elements, functions to functions, and predicates to relations. Satisfaction of a formula is defined recursively on the structure of the formula."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " \"All students are enrolled in at least one course\":\n$$\\forall x , (\\text{Student}(x) \\Rightarrow \\exists y , (\\text{Course}(y) \\land \\text{Enrolled}(x, y)))$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FOL is expressive enough to represent most commonsense knowledge, but inference in FOL is only semi-decidable."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "63-semantic-networks",
      children: "6.3 Semantic Networks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " A semantic network is like a family tree. Each node is a person (or concept), and each connecting line is a relationship (parent-of, married-to, sibling-of). If you know your grandfather is a doctor, you can infer your mother's father is a doctor — without being told explicitly. That is inheritance through a semantic network."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "semantic network"
      }), " is a directed graph where nodes represent concepts or individuals and edges represent relations. Common edge types include:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "is-a:"
        }), " Indicates class membership (Fido is-a Dog)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "has-property:"
        }), " Indicates attribute (Dog has-property Mammal)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "part-of:"
        }), " Indicates composition (Wheel part-of Car)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Inheritance"
      }), " allows properties of a class to be inferred for all its instances. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Multiple inheritance"
      }), " introduces potential conflicts that require resolution strategies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps-for-building-and-querying-a-semantic-network",
      children: "Steps for Building and Querying a Semantic Network"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify all concepts and individuals"
        }), " — List the entities (Person, Animal, Dog, Fido, Tweety, Bird)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Establish is-a hierarchy"
        }), " — Define class membership (Fido is-a Dog, Dog is-a Animal)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add property edges"
        }), " — Attach attributes (Dog has-property Mammal, Bird can-fly True)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add part-of edges"
        }), " — Define composition (Wing part-of Bird, Tail part-of Dog)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inherit properties"
        }), " — Propagate properties upward/downward (Fido inherits Mammal from Dog)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Query the network"
        }), " — Traverse edges to answer questions (Is Fido a mammal?)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Handle conflicts"
        }), " — In multiple inheritance, define resolution (e.g., depth-first, linearization)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-for-semantic-network-inference",
      children: "Pseudocode for Semantic Network Inference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ALGORITHM: SemanticNetworkInference\nINPUT: Network G = (Nodes, Edges), Query Q = (subject, relation)\nOUTPUT: Value or set of values\n\nFUNCTION InheritProperty(node, property, visited=∅):\n    IF node IN visited:\n        RETURN None                           // Cycle detected\n    visited ← visited ∪ {node}\n    \n    // Direct property check\n    IF (node, property, value) IN Edges:\n        RETURN value\n    \n    // Traverse is-a links upward\n    FOR each parent WHERE (node, is-a, parent) IN Edges:\n        result ← InheritProperty(parent, property, visited)\n        IF result ≠ None:\n            RETURN result\n    \n    RETURN None                                // Not found\n\nFUNCTION Query(subject, relation):\n    IF relation == \"is-a\":\n        RETURN InheritProperty(subject, \"instance-of\")\n    ELSE:\n        RETURN InheritProperty(subject, relation)\n\n// Shortcut inheritance:\n// For \"Fido can-fly\": check Fido → Dog → Animal → Mammal → can-fly? → None\n// For \"Fido has-property Mammal\": check Fido → Dog → Mammal → True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-animal-kingdom-semantic-network",
      children: "Step-by-Step Dry Run: Animal Kingdom Semantic Network"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Knowledge Base (Edges):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "is-a(Fido, Dog)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "is-a(Dog, Mammal)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "is-a(Mammal, Animal)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "is-a(Tweety, Bird)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "is-a(Bird, Animal)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "has-property(Mammal, WarmBlooded, True)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "can-fly(Bird, True)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "has-property(Dog, Barks, True)"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Query"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Property Check"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inherited From"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Query(Fido, WarmBlooded)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fido"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct? No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct? No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mammal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct? Yes (has-property)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mammal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "True"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Query(Tweety, Barks)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tweety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct? No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bird"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct? No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Animal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct? No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "None"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Query(Tweety, can-fly)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tweety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct? No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bird"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct? Yes (can-fly)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bird"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "True"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Query(Fido, Animal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fido"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "is-a? Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fido → Dog → Mammal → Animal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "True"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-semantic-network",
      children: "Python Implementation: Semantic Network"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SemanticNetwork:\n    \"\"\"A simple semantic network with inheritance.\"\"\"\n\n    def __init__(self):\n        self.nodes = set()               # All entity/concept names\n        self.edges = []                  # (subject, relation, object)\n\n    def add_node(self, name: str):\n        self.nodes.add(name)\n\n    def add_edge(self, subject: str, relation: str, obj: str):\n        self.edges.append((subject, relation, obj))\n\n    def _get_parents(self, node: str) -> list:\n        return [obj for s, r, obj in self.edges if s == node and r == \"is-a\"]\n\n    def _inherit(self, node: str, relation: str, visited: set = None) -> str:\n        if visited is None:\n            visited = set()\n        if node in visited:\n            return None\n        visited.add(node)\n\n        # Direct property lookup\n        for s, r, obj in self.edges:\n            if s == node and r == relation:\n                return obj\n\n        # Follow is-a links upward\n        for parent in self._get_parents(node):\n            result = self._inherit(parent, relation, visited)\n            if result is not None:\n                return result\n\n        return None\n\n    def query(self, subject: str, relation: str) -> str:\n        \"\"\"Answer a query by traversing the network.\"\"\"\n        return self._inherit(subject, relation)\n\n    def is_instance_of(self, subject: str, class_name: str) -> bool:\n        \"\"\"Check if subject is an instance of class_name (direct or inherited).\"\"\"\n        result = self._inherit(subject, \"is-a\")\n        return result == class_name\n\n\n# Build the animal kingdom network\nnet = SemanticNetwork()\nfor n in [\"Fido\", \"Dog\", \"Mammal\", \"Animal\", \"Tweety\", \"Bird\"]:\n    net.add_node(n)\n\nnet.add_edge(\"Fido\", \"is-a\", \"Dog\")\nnet.add_edge(\"Dog\", \"is-a\", \"Mammal\")\nnet.add_edge(\"Mammal\", \"is-a\", \"Animal\")\nnet.add_edge(\"Tweety\", \"is-a\", \"Bird\")\nnet.add_edge(\"Bird\", \"is-a\", \"Animal\")\nnet.add_edge(\"Mammal\", \"WarmBlooded\", \"True\")\nnet.add_edge(\"Bird\", \"can-fly\", \"True\")\nnet.add_edge(\"Dog\", \"Barks\", \"True\")\n\nprint(net.query(\"Fido\", \"WarmBlooded\"))      # True\nprint(net.query(\"Tweety\", \"Barks\"))          # None\nprint(net.query(\"Fido\", \"Barks\"))            # True\nprint(net.query(\"Tweety\", \"can-fly\"))        # True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Add node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash set insertion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Add edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List append"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inheritance lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E × H)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(H) recursion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traverse up to H edges per level"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Query property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E × H)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(H)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Follows is-a chain checking E edges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Instance-of check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E × H)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(H)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same traversal pattern"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where N = number of nodes, E = number of edges, H = hierarchy depth."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-1",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intuitive visual representation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantics are not formally defined in early versions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fast inheritance-based reasoning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ambiguity in edge types (is-a vs instance-of confusion)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to extend with new nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot represent negation (¬) or disjunction (∨) easily"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Natural for taxonomies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple inheritance conflicts need arbitrary resolution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Low implementation overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No standard for quantifier representation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cyclic is-a:"
        }), " is-a(A, B), is-a(B, A) — infinite loop. Always use a visited set."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Diamond problem:"
        }), " B ⊑ A, C ⊑ A, D ⊑ {B, C}. If B and C both define property P differently, which does D inherit? Resolution: depth-first (prefer first parent chain), breadth-first, or explicit override."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No root concept:"
        }), " Nodes without any is-a link — property lookups return None immediately."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disconnected subgraphs:"
        }), " Some nodes may be unreachable from a query start — the traversal simply returns None."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quacking duck:"
        }), " If Duck inherits can-quack from Bird but Penguin (also a Bird) does not quack — explicit override at Penguin must block inheritance."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "64-frames",
      children: "6.4 Frames"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " A frame is like a job application form. The form has empty fields (slots): Name, Age, Education, Experience. Each field has a type (text, number, date) and optionally a default value (\"N/A\"). When you fill it out, you create an instance. Some fields have validation rules (demons) that trigger when you enter a value — \"if Age < 18, flag for parental consent.\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "frame"
      }), " (Minsky, 1975) is a structured representation of a concept or object with named ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "slots"
      }), " that hold values, procedures, or default information. Frames support ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "inheritance"
      }), " through a hierarchy and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "procedural attachment"
      }), ": demons (when-needed, when-changed procedures) trigger computation upon slot access."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps-for-frame-based-knowledge-representation",
      children: "Steps for Frame-Based Knowledge Representation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Define the frame class"
        }), " — Create a template with named slots and their types"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Set default values"
        }), " — Specify what each slot contains if not explicitly provided"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Define procedural attachments"
        }), " — Attach demons: when-needed (compute on access), when-changed (validate on update), when-removed (cleanup)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Establish frame hierarchy"
        }), " — Sub-frames inherit slots from parent frames"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create instances"
        }), " — Fill slot values for specific individuals"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Attach constraints"
        }), " — Define restrictions (e.g., age must be non-negative)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Query slot values"
        }), " — Retrieve, possibly triggering when-needed demons"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Handle defaults override"
        }), " — Instance values override class defaults; class defaults override parent defaults"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-for-frame-system",
      children: "Pseudocode for Frame System"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ALGORITHM: FrameSlotRetrieval\nINPUT: frame F, slot S\nOUTPUT: slot value V\n\nFUNCTION GetSlotValue(F, S):\n    // Check instance slots first\n    IF S IN F.instance_slots:\n        RETURN F.instance_slots[S]\n    \n    // Check default values in class definition\n    IF S IN F.class_slots:\n        IF F.class_slots[S].default ≠ None:\n            RETURN F.class_slots[S].default\n    \n    // Check parent frame via inheritance\n    FOR each parent P IN F.parents:\n        V ← GetSlotValue(P, S)\n        IF V ≠ None:\n            RETURN V\n    \n    // Check when-needed demon\n    IF \"when-needed\" IN F.procedures[S]:\n        V ← Execute(F.procedures[S][\"when-needed\"])\n        RETURN V\n    \n    RETURN None\n\nFUNCTION SetSlotValue(F, S, V):\n    // Validate before setting\n    IF \"when-changed\" IN F.procedures[S]:\n        Execute(F.procedures[S][\"when-changed\"], F, S, V)\n    \n    F.instance_slots[S] ← V\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-university-course-frame",
      children: "Step-by-Step Dry Run: University Course Frame"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frame Definition:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Frame: Person\n  Slots:\n    name: String (default: \"Unknown\")\n    age: Integer (default: 0)\n    email: String\n\nFrame: Student ⊑ Person\n  Slots:\n    student_id: String (default: \"TBD\")\n    gpa: Float (default: 0.0)\n    enrolled_courses: List\n  Procedures:\n    when-changed(gpa): if gpa < 0 or gpa > 4.0 → raise error\n    when-needed(gpa): compute from grade records\n\nFrame: GraduateStudent ⊑ Student\n  Slots:\n    advisor: Person\n    thesis_topic: String (default: \"TBD\")\n  Constraints:\n    advisor must be a Professor instance\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frame State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create frame Person"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Person {name: None, age: None, email: None}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set defaults"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Person {name: \"Unknown\", age: 0, email: None}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create Student ⊑ Person"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Student {student_id: \"TBD\", gpa: 0.0, courses: []} + inherited {name: \"Unknown\", age: 0}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create GraduateStudent ⊑ Student"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GradStudent {advisor: None, thesis: \"TBD\"} + inherited chain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create instance: Alice ⊑ Student"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alice.student_id = \"S001\", Alice.gpa = 3.7, Alice.name = \"Alice\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query Alice.age"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inherited default → 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query Alice.name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instance slot → \"Alice\" (overrides default \"Unknown\")"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set Alice.gpa = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "when-changed demon fires → Error: GPA out of range"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create Bob ⊑ GraduateStudent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bob.advisor = Dr.Smith, Bob.thesis = \"NLP\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query Bob.name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inherited default → \"Unknown\" (no instance value)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-frame-system",
      children: "Python Implementation: Frame System"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Frame:\n    \"\"\"Simple frame-based knowledge representation.\"\"\"\n\n    def __init__(self, name: str, parents: list = None):\n        self.name = name\n        self.parents = parents or []\n        self.class_slots = {}       # slot -> {type, default, constraints}\n        self.instance_slots = {}    # slot -> value (for instances)\n        self.procedures = {}        # slot -> {event: callable}\n        self.is_instance = False\n\n    def add_slot(self, name: str, slot_type=str, default=None, constraints: list = None):\n        self.class_slots[name] = {\n            \"type\": slot_type,\n            \"default\": default,\n            \"constraints\": constraints or []\n        }\n\n    def add_procedure(self, slot: str, event: str, fn):\n        \"\"\"Attach a demon (when-needed, when-changed, when-removed).\"\"\"\n        self.procedures.setdefault(slot, {})[event] = fn\n\n    def create_instance(self, name: str):\n        \"\"\"Create an instance frame that inherits from this class.\"\"\"\n        inst = Frame(name, parents=[self])\n        inst.is_instance = True\n        return inst\n\n    def get_slot(self, slot: str):\n        \"\"\"Retrieve slot value with inheritance and when-needed demons.\"\"\"\n        # Check instance slots first\n        if slot in self.instance_slots:\n            return self.instance_slots[slot]\n\n        # Check class defaults\n        if slot in self.class_slots and self.class_slots[slot][\"default\"] is not None:\n            return self.class_slots[slot][\"default\"]\n\n        # Check when-needed demon\n        if slot in self.procedures and \"when-needed\" in self.procedures[slot]:\n            return self.procedures[slot][\"when-needed\"]()\n\n        # Inherit from parents\n        for parent in self.parents:\n            val = parent.get_slot(slot)\n            if val is not None:\n                return val\n\n        return None\n\n    def set_slot(self, slot: str, value):\n        \"\"\"Set slot value with when-changed demon.\"\"\"\n        if slot in self.procedures and \"when-changed\" in self.procedures[slot]:\n            self.procedures[slot][\"when-changed\"](self, slot, value)\n\n        # Type checking\n        if slot in self.class_slots:\n            expected_type = self.class_slots[slot][\"type\"]\n            if not isinstance(value, expected_type):\n                raise TypeError(f\"Slot {slot} expects {expected_type.__name__}, got {type(value).__name__}\")\n\n            # Constraint checking\n            for constraint in self.class_slots[slot][\"constraints\"]:\n                if not constraint(value):\n                    raise ValueError(f\"Constraint failed for slot {slot}: {value}\")\n\n        self.instance_slots[slot] = value\n\n\n# Build frame hierarchy\nPerson = Frame(\"Person\")\nPerson.add_slot(\"name\", str, \"Unknown\")\nPerson.add_slot(\"age\", int, 0)\n\nStudent = Frame(\"Student\", parents=[Person])\nStudent.add_slot(\"student_id\", str, \"TBD\")\nStudent.add_slot(\"gpa\", float, 0.0, constraints=[lambda g: 0.0 <= g <= 4.0])\nStudent.add_slot(\"enrolled_courses\", list, [])\n\nGradStudent = Frame(\"GraduateStudent\", parents=[Student])\nGradStudent.add_slot(\"advisor\", str)\nGradStudent.add_slot(\"thesis_topic\", str, \"TBD\")\n\n# Create instance\nalice = Student.create_instance(\"Alice\")\nalice.set_slot(\"name\", \"Alice\")\nalice.set_slot(\"student_id\", \"S001\")\nalice.set_slot(\"gpa\", 3.7)\n\nprint(alice.get_slot(\"name\"))       # Alice (instance value)\nprint(alice.get_slot(\"age\"))        # 0 (inherited default from Person)\nprint(alice.get_slot(\"gpa\"))        # 3.7\n\n# Test constraint\ntry:\n    alice.set_slot(\"gpa\", 5.0)      # ValueError: Constraint failed\nexcept ValueError as e:\n    print(f\"Constraint caught: {e}\")\n\n# Test demon: when-changed GPA tracker\ndef track_gpa_change(frame, slot, value):\n    print(f\"[DEMON] GPA changing to {value} for {frame.name}\")\n\nStudent.add_procedure(\"gpa\", \"when-changed\", track_gpa_change)\nalice.set_slot(\"gpa\", 3.9)          # Prints: [DEMON] GPA changing to 3.9 for Alice\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Add slot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(S)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dictionary insertion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Create instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(S_I)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New frame, shallow copy of parents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Get slot (instance only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash lookup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Get slot (with inheritance)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(D × P)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(D)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traverse D ancestors, P parents each"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Set slot (with demon)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1 + C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Value update + constraint C checks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Slot type check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "isinstance check"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where S = slots, D = hierarchy depth, P = parents per frame, C = constraint count, S_I = slots in instance."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-2",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intuitive object-like structure (precursor to OOP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No formal semantics in original formulation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Default values reduce storage for common cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defaults may cause unexpected inferences"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Procedural attachment enables dynamic computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Demons introduce side effects — hard to debug"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inheritance reuses knowledge across frames"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple inheritance still has conflict issues"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constraints enforce data integrity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No standard reasoning algorithm across implementations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Circular inheritance:"
        }), " GradStudent ⊑ Student ⊑ Person ⊑ GradStudent — use a visited set in get_slot."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Missing slot in demon:"
        }), " Querying a slot with a when-needed demon that raises an exception — wrap in try/except."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Override ambiguity:"
        }), " Person has default name = \"Unknown\", Student overrides name = \"Student\", instance sets nothing — which is inherited? Instance → class → parent chain resolves it, but some systems use depth-first (Student wins), others use breadth-first."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Demon infinite recursion:"
        }), " when-needed demon for gpa calls get_slot(\"gpa\") internally — stack overflow. Ensure demons access raw storage, not the getter."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Constraint on default:"
        }), " Default gpa = 0.0 with constraint [0.0, 4.0] passes; but if later default changes to 5.0, constraint violation — validate defaults at definition time."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "65-conceptual-graphs",
      children: "6.5 Conceptual Graphs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " A conceptual graph is like a sentence diagram from grammar class. In a sentence diagram, nouns are on one level (concepts) and verbs are connecting lines (relations). \"The cat sat on the mat\" becomes [Cat] ← (Agent) ← [Sat] → (Location) → [Mat]. Just as sentence diagrams reveal sentence structure, conceptual graphs reveal knowledge structure."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Conceptual graphs"
      }), " (Sowa, 1984) provide a visual representation equivalent to FOL. Rectangles represent concepts; ovals represent conceptual relations. A conceptual graph is a bipartite graph of concept and relation nodes. The formalism includes:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical formation rules:"
        }), " Copy, restrict, join, simplify."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projection:"
        }), " A graph homomorphism used to check if one graph is subsumed by another."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps-to-build-and-reason-with-conceptual-graphs",
      children: "Steps to Build and Reason with Conceptual Graphs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify concepts"
        }), " — Extract noun phrases (Person, Book, Library)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify conceptual relations"
        }), " — Extract verb phrases (borrows, located-in)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Build the bipartite graph"
        }), " — Concepts as rectangles, relations as ovals, alternating edges"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Apply canonical formation rules"
        }), " — Specialize or combine graphs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check projection"
        }), " — Determine if one graph is a specialization of another"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Perform inference"
        }), " — Derive new graphs via projection or join"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-for-conceptual-graph-operations",
      children: "Pseudocode for Conceptual Graph Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ALGORITHM: ConceptualGraphProjection\nINPUT: Graphs G = (C_G, R_G, E_G) and H = (C_H, R_H, E_H)\nOUTPUT: True if H projects into G (G subsumes H)\n\nFUNCTION Projection(G, H, mapping=∅):\n    // Every concept in H must map to a concept in G\n    FOR each concept c_H IN C_H:\n        IF NOT ∃ c_G IN C_G such that:\n            type(c_H) ⊑ type(c_G) AND\n            referent(c_H) == referent(c_G) (if not generic):\n            RETURN False\n        mapping[c_H] ← c_G\n    \n    // Every relation in H must map to a relation in G\n    FOR each relation r_H IN R_H:\n        IF NOT ∃ r_G IN R_G such that:\n            type(r_H) == type(r_G) AND\n            FOR each neighbor n of r_H:\n                mapping[n] is neighbor of r_G:\n            RETURN False\n    \n    RETURN True\n\n// Canonical formation: Restrict a concept type\nFUNCTION Restrict(G, concept, new_type):\n    IF new_type ⊑ type(concept):\n        G' ← Copy(G)\n        type(concept_G') ← new_type\n        RETURN G'\n\n// Canonical formation: Join two graphs on a common concept\nFUNCTION Join(G1, G2, concept_c):\n    G' ← Union(G1, G2)\n    Merge(concept_c_in_G1, concept_c_in_G2)\n    RETURN G'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-library-borrowing-conceptual-graph",
      children: "Step-by-Step Dry Run: Library Borrowing Conceptual Graph"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial Facts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[Person: Alice] ← (Borrower) ← [Borrow] → (Object) → [Book: \"Dune\"]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[Book: \"Dune\"] ← (Location) ← [LocatedIn] → (Place) → [Library: Central]"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Graph 1: \"Alice borrows Dune\""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[Person: Alice] ← (Borrower) ← [Borrow] → (Object) → [Book: \"Dune\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Graph 2: \"Dune is at Central Library\""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[Book: \"Dune\"] ← (Location) ← [LocatedIn] → (Place) → [Library: Central]\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Graph State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify concept Alice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C = {Person:Alice}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify relation Borrower"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R = {Borrower}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify concept Borrow (event)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C = {Person:Alice, Borrow, Book:\"Dune\"}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build edges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E = {(Borrower, Person:Alice), (Borrower, Borrow), (Object, Borrow), (Object, Book:\"Dune\")}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restrict concept: Alice ⊑ Student"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C_Alice' = Student:Alice (specialize)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Join with Location graph on Book:\"Dune\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combined graph: infer Alice can find Dune at Central"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query: Can Alice get Dune at Central?"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Traverse: Alice → Borrower → Borrow → Object → Book → Location → Place → Central → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-conceptual-graph",
      children: "Python Implementation: Conceptual Graph"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ConceptNode:\n    def __init__(self, concept_type: str, referent: str = None):\n        self.type = concept_type\n        self.referent = referent\n\n    def __repr__(self):\n        return f\"[{self.type}:{self.referent}]\" if self.referent else f\"[{self.type}]\"\n\n    def __eq__(self, other):\n        return self.type == other.type and self.referent == other.referent\n\n    def __hash__(self):\n        return hash((self.type, self.referent))\n\n\nclass RelationNode:\n    def __init__(self, relation_type: str):\n        self.type = relation_type\n\n    def __repr__(self):\n        return f\"({self.type})\"\n\n    def __eq__(self, other):\n        return self.type == other.type\n\n    def __hash__(self):\n        return hash(self.type)\n\n\nclass ConceptualGraph:\n    \"\"\"Bipartite conceptual graph with projection and join.\"\"\"\n\n    def __init__(self):\n        self.concepts = set()\n        self.relations = set()\n        self.edges = {}            # (concept, relation) or (relation, concept) -> label\n\n    def add_concept(self, concept: ConceptNode):\n        self.concepts.add(concept)\n\n    def add_relation(self, relation: RelationNode):\n        self.relations.add(relation)\n\n    def add_edge(self, from_node, to_node, label: str = \"\"):\n        self.edges[(from_node, to_node)] = label\n\n    def get_neighbors(self, node):\n        \"\"\"Return all nodes connected to this node.\"\"\"\n        neighbors = []\n        for (a, b), label in self.edges.items():\n            if a == node:\n                neighbors.append((b, label))\n            if b == node:\n                neighbors.append((a, label))\n        return neighbors\n\n    def restrict(self, concept: ConceptNode, new_type: str):\n        \"\"\"Specialize a concept type (canonical formation rule).\"\"\"\n        # Check if new_type is a subtype (simulated via hierarchy dict)\n        hierarchy = {\"Student\": \"Person\", \"Professor\": \"Person\", \"GraduateStudent\": \"Student\"}\n        if new_type in hierarchy and hierarchy[new_type] != concept.type:\n            raise ValueError(f\"Cannot restrict {concept.type} to {new_type}\")\n\n        g2 = ConceptualGraph()\n        g2.concepts = {c if c != concept else ConceptNode(new_type, c.referent) for c in self.concepts}\n        g2.relations = self.relations.copy()\n        g2.edges = self.edges.copy()\n        return g2\n\n    def projection(self, other) -> bool:\n        \"\"\"Check if 'other' graph projects into this graph (this subsumes other).\"\"\"\n        # Build concept mapping\n        mapping = {}\n        for c_other in other.concepts:\n            matched = False\n            for c_self in self.concepts:\n                if c_other.type == c_self.type and (c_other.referent is None or c_other.referent == c_self.referent):\n                    mapping[c_other] = c_self\n                    matched = True\n                    break\n            if not matched:\n                return False\n\n        # Check relation mappings\n        for r_other in other.relations:\n            matched = False\n            for r_self in self.relations:\n                if r_other.type == r_self.type:\n                    # Check neighbors match under mapping\n                    n_other = {mapping.get(n, n) for n, _ in other.get_neighbors(r_other)}\n                    n_self = {n for n, _ in self.get_neighbors(r_self)}\n                    if n_other.issubset(n_self):\n                        matched = True\n                        break\n            if not matched:\n                return False\n\n        return True\n\n    def __repr__(self):\n        parts = []\n        for (a, b), label in self.edges.items():\n            parts.append(f\"{a} --{label}--> {b}\" if label else f\"{a} -- {b}\")\n        return \"\\n\".join(parts)\n\n\n# Build: \"Alice borrows Dune from Central Library\"\ng = ConceptualGraph()\n\nalice = ConceptNode(\"Person\", \"Alice\")\nborrow = ConceptNode(\"Borrow\")\ndune = ConceptNode(\"Book\", \"Dune\")\ncentral = ConceptNode(\"Library\", \"Central\")\nloc_rel = RelationNode(\"LocatedIn\")\nagt_rel = RelationNode(\"Agent\")\nobj_rel = RelationNode(\"Object\")\nplace_rel = RelationNode(\"Place\")\n\nfor c in [alice, borrow, dune, central]:\n    g.add_concept(c)\nfor r in [agt_rel, obj_rel, loc_rel, place_rel]:\n    g.add_relation(r)\n\ng.add_edge(agt_rel, alice, \"agent\")\ng.add_edge(agt_rel, borrow)\ng.add_edge(obj_rel, borrow)\ng.add_edge(obj_rel, dune, \"object\")\ng.add_edge(loc_rel, dune)\ng.add_edge(loc_rel, place_rel)\ng.add_edge(place_rel, central, \"place\")\n\nprint(\"Conceptual Graph:\")\nprint(g)\n\n# Check projection: Is \"Alice borrows something\" a subgraph?\ng2 = ConceptualGraph()\nc_a = ConceptNode(\"Person\", \"Alice\")\nc_b = ConceptNode(\"Borrow\")\nr_a = RelationNode(\"Agent\")\nr_o = RelationNode(\"Object\")\ng2.add_concept(c_a); g2.add_concept(c_b)\ng2.add_relation(r_a); g2.add_relation(r_o)\ng2.add_edge(r_a, c_a); g2.add_edge(r_a, c_b)\ng2.add_edge(r_o, c_b)\n\nprint(f\"\\nGeneralization match: {g.projection(g2)}\")  # True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Add concept/relation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(C + R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set insertion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Add edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dictionary insertion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Restrict (copy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(C + R + E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(C + R + E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep copy of entire graph"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Projection check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(C² + R × E²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nested concept matching × neighbor checks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Join graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N₁ + N₂)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N₁ + N₂)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set union + merge"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where C = concepts, R = relations, E = edges, N = total graph size."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-3",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Visually intuitive — bipartite structure maps to natural language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More verbose than frames or semantic nets for simple hierarchies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Equivalent to FOL with clear formal semantics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Projection (subsumption) is computationally expensive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical formation rules provide principled graph construction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No built-in support for negation or disjunction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Projection directly implements specialization reasoning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph size grows quickly with complex knowledge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Natural mapping to/from natural language (Sowa's original motivation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tooling ecosystem is limited compared to OWL"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disconnected relation:"
        }), " A relation node with only one edge — semantically invalid (relation must connect at least two concepts)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generic referent:"
        }), " [Book] (no specific book) vs [Book: \"Dune\"] — projection matching treats generic as wildcard."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cyclic graph:"
        }), " [Person: Alice] ← (Parent) → [Person: Bob] ← (Parent) → [Person: Alice] — possible in family trees; projection handles via structure, not loops."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type mismatch in restrict:"
        }), " Attempting to restrict [Person] to [Book] — rejected if type hierarchy is enforced."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty graph:"
        }), " No concepts or relations — trivially subsumes all graphs but practically useless; guards needed in projection."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "66-description-logic",
      children: "6.6 Description Logic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " Description Logic is like a museum cataloging system. Each artifact has a type (Painting, Sculpture, Vase), materials (Oil on Canvas, Marble), period (Renaissance, Baroque), and location (Gallery 3, Wing A). The catalog uses controlled vocabulary and taxonomic relationships. If the catalog says \"All Renaissance paintings are in Gallery 3\" and someone adds \"Mona Lisa is a Renaissance painting,\" the system automatically infers \"Mona Lisa is located in Gallery 3.\" That is TBox + ABox reasoning in Description Logic."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Description logic"
      }), " (DL) is a family of knowledge representation formalisms that provide a decidable fragment of FOL with efficient reasoning algorithms. DL systems underpin the W3C Web Ontology Language (OWL)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A DL knowledge base consists of:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TBox (terminological box):"
        }), " Axioms defining concepts and their relationships. Example: $\\text{Mother} \\equiv \\text{Woman} \\sqcap \\exists \\text{hasChild.Person}$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ABox (assertional box):"
        }), " Facts about individuals. Example: $\\text{Woman}(\\text{Alice})$, $\\text{hasChild}(\\text{Alice}, \\text{Bob})$"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reasoning tasks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Satisfiability:"
        }), " Is a concept non-empty?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Subsumption:"
        }), " Is concept $C$ a subset of concept $D$?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Instance checking:"
        }), " Is an individual an instance of a concept?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Retrieval:"
        }), " Find all instances of a concept."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps-for-description-logic-reasoning",
      children: "Steps for Description Logic Reasoning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Define the TBox"
        }), " — Declare atomic concepts (Person, Animal) and roles (hasChild, eats)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add concept definitions"
        }), " — Define complex concepts (Mother ≡ Woman ⊓ ∃hasChild.Person)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add concept hierarchy"
        }), " — Declare subsumption axioms (Dog ⊑ Animal)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Populate the ABox"
        }), " — Add individual assertions (Person(Alice), hasChild(Alice, Bob))"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Classify the TBox"
        }), " — Compute full concept hierarchy using subsumption reasoning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Realize the ABox"
        }), " — Determine all concept memberships for each individual"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer queries"
        }), " — Instance check, retrieval, subsumption queries"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-for-dl-tableau-reasoner-satisfiability",
      children: "Pseudocode for DL Tableau Reasoner (Satisfiability)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ALGORITHM: TableauSatisfiability\nINPUT: Concept C, TBox T\nOUTPUT: SAT or UNSAT\n\nFUNCTION IsSatisfiable(C, T):\n    A ← {C(x)} for a fresh individual x   // Initial ABox assertion\n    A ← ApplyTBoxUnfolding(A, T)          // Expand definitions\n    A ← ApplyCompletionRules(A)           // Apply ⊓, ⊔, ∃, ∀ rules\n    IF NoClash(A):                         // Check for ⊥ or A(x) ∧ ¬A(x)\n        RETURN SAT\n    ELSE:\n        RETURN UNSAT\n\nFUNCTION ApplyCompletionRules(A):\n    REPEAT:\n        // ⊓-rule: if (C ⊓ D)(x) in A, add C(x), D(x)\n        // ⊔-rule: if (C ⊔ D)(x) in A, branch C(x) or D(x)\n        // ∃-rule: if (∃R.C)(x) in A, add R(x,y), C(y) for fresh y\n        // ∀-rule: if (∀R.C)(x) and R(x,y) in A, add C(y)\n    UNTIL no rule applies OR clash detected\n    RETURN A\n\nFUNCTION NoClash(A):\n    // No individual has both C(x) and ¬C(x)\n    // No individual has ⊥(x)\n    RETURN True if neither condition holds\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-family-tree-in-dl",
      children: "Step-by-Step Dry Run: Family Tree in DL"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TBox:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Person ⊑ ⊤"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Woman ≡ Person ⊓ Female"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Man ≡ Person ⊓ ¬Female"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mother ≡ Woman ⊓ ∃hasChild.Person"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Father ≡ Man ⊓ ∃hasChild.Person"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parent ≡ Mother ⊔ Father"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Grandparent ≡ Parent ⊓ ∃hasChild.Parent"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ABox:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Person(Alice), Female(Alice)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Person(Bob), Person(Charlie)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hasChild(Alice, Bob), hasChild(Bob, Charlie)"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rule Applied"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Knowledge Base State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial ABox"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Person(Alice), Female(Alice), Person(Bob), Person(Charlie), hasChild(Alice, Bob), hasChild(Bob, Charlie)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⊓-rule on Woman?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Woman ≡ Person ⊓ Female → need both Person(x) and Female(x)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instance check: Alice ∈ Woman?"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Person(Alice) ✓, Female(Alice) ✓ → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Alice is a Woman"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instance check: Alice ∈ Mother?"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Mother ≡ Woman ⊓ ∃hasChild.Person → Woman(Alice) ✓, hasChild(Alice, Bob), Person(Bob) ✓ → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Alice is a Mother"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instance check: Bob ∈ Parent?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent ≡ Mother ⊔ Father. Bob is Man (Person(Bob), no Female(Bob)). Bob has child Charlie? hasChild(Bob, Charlie) ✓, Person(Charlie) ✓ → Bob ∈ ∃hasChild.Person"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bob ∈ Father?"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Father ≡ Man ⊓ ∃hasChild.Person → Man(Bob), hasChild(Bob, Charlie) ✓ → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bob is a Father"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alice ∈ Grandparent?"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Grandparent ≡ Parent ⊓ ∃hasChild.Parent. Parent(Alice) ✓. hasChild(Alice, Bob), Parent(Bob) ✓ → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Alice is a Grandparent"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subsumption: Mother ⊑ ?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mother ⊑ Woman, Mother ⊑ Person, Mother ⊑ ∃hasChild.Person, Mother ⊑ Parent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval: Who is a Parent?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alice (Mother ✓), Bob (Father ✓) → {Alice, Bob}"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-description-logic-reasoner",
      children: "Python Implementation: Description Logic Reasoner"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DLReasoner:\n    \"\"\"Simple Description Logic reasoner for AL (Attribute Language).\"\"\"\n\n    def __init__(self):\n        self.tbox = {}           # concept_name -> definition (as nested dicts)\n        self.hierarchy = {}      # concept_name -> set of parent names\n        self.abox_concepts = {}  # individual -> set of concept names\n        self.abox_roles = {}     # (individual, role_name) -> set of individuals\n\n    def add_concept_definition(self, name: str, definition):\n        \"\"\"Define a concept (e.g., Mother ≡ Woman ⊓ ∃hasChild.Person).\"\"\"\n        self.tbox[name] = definition\n\n    def add_subsumption(self, sub: str, super_concept: str):\n        \"\"\"Declare sub ⊑ super.\"\"\"\n        self.hierarchy.setdefault(sub, set()).add(super_concept)\n\n    def add_concept_assertion(self, individual: str, concept: str):\n        \"\"\"Add A(x) to ABox.\"\"\"\n        self.abox_concepts.setdefault(individual, set()).add(concept)\n\n    def add_role_assertion(self, subj: str, role: str, obj: str):\n        \"\"\"Add R(x, y) to ABox.\"\"\"\n        self.abox_roles.setdefault((subj, role), set()).add(obj)\n\n    def get_ancestors(self, concept: str, visited: set = None) -> set:\n        if visited is None:\n            visited = set()\n        if concept in visited:\n            return set()\n        visited.add(concept)\n        result = {concept}\n        for parent in self.hierarchy.get(concept, set()):\n            result |= self.get_ancestors(parent, visited)\n        return result\n\n    def instance_check(self, individual: str, concept: str) -> bool:\n        \"\"\"Check if individual is an instance of a concept.\"\"\"\n        # Direct assertion check\n        direct_concepts = self.abox_concepts.get(individual, set())\n        all_concepts = set()\n        for c in direct_concepts:\n            all_concepts |= self.get_ancestors(c)\n\n        if concept in all_concepts:\n            return True\n\n        # Check complex concept definitions\n        if concept in self.tbox:\n            return self._check_definition(individual, concept)\n\n        return False\n\n    def _check_definition(self, individual: str, concept: str) -> bool:\n        \"\"\"Evaluate concept definition against ABox.\"\"\"\n        definition = self.tbox[concept]\n\n        if definition[\"type\"] == \"and\":\n            return all(self.instance_check(individual, c) for c in definition[\"concepts\"])\n\n        if definition[\"type\"] == \"some\":\n            role = definition[\"role\"]\n            range_concept = definition[\"range\"]\n            fillers = self.abox_roles.get((individual, role), set())\n            return any(self.instance_check(f, range_concept) for f in fillers)\n\n        if definition[\"type\"] == \"all\":\n            role = definition[\"role\"]\n            range_concept = definition[\"range\"]\n            fillers = self.abox_roles.get((individual, role), set())\n            if not fillers:\n                return True  # Vacuously true\n            return all(self.instance_check(f, range_concept) for f in fillers)\n\n        return False\n\n    def retrieve(self, concept: str) -> list:\n        \"\"\"Find all individuals that are instances of concept.\"\"\"\n        return [ind for ind in self.abox_concepts if self.instance_check(ind, concept)]\n\n    def subsumes(self, c1: str, c2: str) -> bool:\n        \"\"\"Check if c1 subsumes c2 (i.e., every instance of c2 is also instance of c1).\"\"\"\n        return c1 in self.get_ancestors(c2)\n\n\n# Build family ontology\ndl = DLReasoner()\n\n# Hierarchy\ndl.add_subsumption(\"Woman\", \"Person\")\ndl.add_subsumption(\"Man\", \"Person\")\ndl.add_subsumption(\"Mother\", \"Woman\")\ndl.add_subsumption(\"Father\", \"Man\")\n\n# Complex definitions\ndl.add_concept_definition(\"Mother\", {\"type\": \"and\", \"concepts\": [\"Woman\"]})\ndl.add_concept_definition(\"Parent\", {\"type\": \"and\", \"concepts\": [\"Person\"]})\n\n# ABox assertions\ndl.add_concept_assertion(\"Alice\", \"Woman\")\ndl.add_concept_assertion(\"Alice\", \"Person\")\ndl.add_concept_assertion(\"Bob\", \"Person\")\ndl.add_concept_assertion(\"Charlie\", \"Person\")\ndl.add_concept_assertion(\"Diana\", \"Woman\")\ndl.add_concept_assertion(\"Diana\", \"Person\")\n\ndl.add_role_assertion(\"Alice\", \"hasChild\", \"Bob\")\ndl.add_role_assertion(\"Bob\", \"hasChild\", \"Charlie\")\ndl.add_role_assertion(\"Diana\", \"hasChild\", \"Charlie\")\n\nprint(dl.instance_check(\"Alice\", \"Person\"))    # True\nprint(dl.instance_check(\"Alice\", \"Man\"))       # False\nprint(dl.retrieve(\"Person\"))                   # ['Alice', 'Bob', 'Charlie', 'Diana']\nprint(dl.subsumes(\"Person\", \"Woman\"))          # True (Person subsumes Woman)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TBox assertion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash map insert"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ABox assertion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(I)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash map insert"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Instance check (atomic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(A × H)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(H)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ancestor traversal through hierarchy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Instance check (defined)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(D × F)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(D)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive definition evaluation up to depth D, F fillers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(I × A × H)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear scan of all individuals"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subsumption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(H)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(H)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ancestor lookup in hierarchy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Classification (full)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(C² × H)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(C²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pairwise subsumption of all concepts"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where C = concepts, A = atomic concepts per individual, H = hierarchy depth, I = individuals, D = definition depth, F = role fillers. Full classification for expressive DL (ALC) is EXPTIME-complete but highly optimized in practice (Pellet, HermiT)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-4",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decidable — always terminates with an answer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less expressive than FOL (cannot represent n-ary relations directly)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Formal model-theoretic semantics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open-world assumption may surprise users expecting closed-world (SQL)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Polynomial-time classification for core languages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity ranges from PTIME to EXPTIME/NEXPTIME depending on constructors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OWL standard enables tooling ecosystem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-monotonic reasoning (defaults, negation-as-failure) not natively supported"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compositional concept constructors (⊓, ⊔, ¬, ∃, ∀)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learning curve for domain experts unfamiliar with formal logic"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unsatisfiable concept:"
        }), " Person ⊓ ¬Person — the empty concept. Reasoner must report inconsistency without crashing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty domain:"
        }), " TBox with no ABox — reasoning about concept satisfiability is still meaningful (a concept is satisfiable if there exists a model)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Role cycling:"
        }), " hasChild(Alice, Bob), hasChild(Bob, Alice) — cyclic roles are allowed; ∀hasChild.Person still holds if both Bob and Alice are Person."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nominals (singleton concepts):"
        }), " {Alice} ≡ Person ⊓ ∀hasFriend.{Bob} — only Alice can satisfy this. Requires equality reasoning."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bottom concept:"
        }), " Concept(⊥) — always empty. Queries for instances return empty set."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Top concept:"
        }), " Concept(⊤) — contains all individuals. Instance check always returns True."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "67-categories-and-actions",
      children: "6.7 Categories and Actions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "671-categories",
      children: "6.7.1 Categories"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Categories organize knowledge into hierarchies. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "semantic web"
      }), " formalizes this via RDF (Resource Description Framework), RDFS, and OWL. Key constructors include:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intersection:"
        }), " $C \\sqcap D$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Union:"
        }), " $C \\sqcup D$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complement:"
        }), " $\\neg C$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Existential restriction:"
        }), " $\\exists R.C$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Universal restriction:"
        }), " $\\forall R.C$"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "672-situation-calculus",
      children: "6.7.2 Situation Calculus"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "situation calculus"
      }), " (McCarthy and Hayes, 1969) represents actions and their effects in a dynamic world. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "situation"
      }), " is a history of actions. The initial situation is $S_0$. The function $do(a, s)$ returns the situation resulting from executing action $a$ in situation $s$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fluents"
      }), " are predicates whose truth depends on the situation: $\\text{On}(x, y, s)$ means $x$ is on $y$ in situation $s$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "frame problem"
      }), " arises because we must explicitly specify what does not change after an action. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "successor-state axiom"
      }), " solves this:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\text{On}(x, y, do(a, s)) \\Leftrightarrow (a = \\text{stack}(x, y)) \\lor (\\text{On}(x, y, s) \\land a \\neq \\text{move}(x, z))$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "673-event-calculus",
      children: "6.7.3 Event Calculus"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Event calculus"
      }), " (Kowalski and Sergot, 1986) represents events as points in time that initiate and terminate fluent values. Unlike situation calculus, event calculus supports continuous time, concurrent events, and delayed effects."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "68-reasoning-systems-architecture",
      children: "6.8 Reasoning Systems Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A knowledge-based system consists of:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Knowledge base (KB):"
        }), " Stores domain-specific facts and rules."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inference engine:"
        }), " Applies reasoning procedures to derive new knowledge."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation facility:"
        }), " Justifies conclusions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Knowledge acquisition module:"
        }), " Supports KB construction and maintenance."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "knowledge-representation-schemes--comparison",
      children: "Knowledge Representation Schemes — Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scheme"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Expressiveness"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Decidable?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Inference Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Structure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Propositional Logic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(2ⁿ) SAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean formulas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple facts, hardware verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "First-Order Logic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Very High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌ (semi)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Undecidable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formulas with quantifiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General domain axioms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Semantic Networks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low–Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(E × H) inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directed graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Taxonomies, animal hierarchies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Frames"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Medium–High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(D × P) slot lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object with slots"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured objects, common sense"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Conceptual Graphs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(C² + R × E²) projection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bipartite graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural language semantics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Description Logic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ (ALC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "PTIME–EXPTIME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TBox + ABox"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OWL ontologies, Semantic Web"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Production Rules"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(R × F) forward chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IF-THEN rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expert systems (MYCIN)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fuzzy Logic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(n) per rule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Membership functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control systems, uncertainty"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Insight:"
      }), " No single scheme dominates all applications. The choice depends on whether you prioritize expressiveness (FOL), decidability (DL), computational efficiency (semantic nets), or structured representation (frames)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-how-is-a-knowledge-representation-system-different-from-a-database",
      children: "Q1: How is a Knowledge Representation system different from a database?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Database (SQL)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Knowledge Representation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Assumption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Closed-world — what isn't in DB is false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open-world — what isn't stated is unknown"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (query returns stored data)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derives new facts from existing ones"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schema"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed tables and columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible, hierarchical concepts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reasoning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No built-in reasoning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subsumption, inheritance, consistency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Negation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negation-as-failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit negation with semantics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT * FROM Person WHERE age > 30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subsumption: Student ⊑ Person → if Alice is Student, she is Person"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The critical difference:"
      }), " A database tells you what you stored. A KR system tells you what follows from what you stored."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-how-do-you-design-an-ontology-for-a-new-domain",
      children: "Q2: How do you design an ontology for a new domain?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Competency questions first"
        }), " — Write questions the ontology must answer (e.g., \"Which drugs interact with aspirin?\")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify key terms"
        }), " — Extract nouns (classes) and verbs (properties) from competency questions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reuse existing ontologies"
        }), " — Check Bioportal, Schema.org, or DBPedia for domain coverage before building from scratch."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Choose expressiveness level"
        }), " — RDFS for simple hierarchy, OWL DL for complex constraints, OWL 2 RL for scalable rules."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validate with reasoners"
        }), " — Run consistency checks with Pellet or HermiT."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Iterate"
        }), " — Ontology design is never one-shot; add axioms as new competency questions emerge."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Common mistake:"
      }), " Over-engineering the hierarchy. Start shallow (3–4 levels); add depth only when reasoning requires it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-how-does-inference-work-in-semantic-networks",
      children: "Q3: How does inference work in semantic networks?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Semantic network inference is primarily ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "inheritance-based"
      }), ". When querying whether Fido has property P:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check if P is directly attached to Fido's node."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If not, follow is-a links upward to the parent class."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Continue until P is found or the root is reached."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If multiple inheritance (Fido is-a Dog, Fido is-a Pet), and both define different values for P, use a resolution strategy:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Depth-first:"
            }), " Follow the first parent chain completely before backtracking."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Linearization:"
            }), " C3 linearization (used in Python MRO) produces a deterministic order."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Explicit override:"
            }), " Allow the instance value to override any inherited value."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Important:"
      }), " Early semantic networks suffered from ambiguous semantics — is \"Clyde is-a Elephant\" class membership or instance-of? Modern systems (RDFS, OWL) resolve this by distinguishing classes from individuals at the language level."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-are-the-limitations-of-description-logic-vs-first-order-logic",
      children: "Q4: What are the limitations of Description Logic vs First-Order Logic?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Cannot express in DL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Can express in FOL"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "n-ary relations (≥ 3 arguments)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "teaches(Prof, Course, Semester)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Equality reasoning (complex)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x = y ∧ f(x) ≠ f(y)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Role chains with arbitrary length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ancestor(x,y) ≡ parent(x,y) ∨ ∃z(parent(x,z) ∧ ancestor(z,y))"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quantification over roles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "∀R ∃S.R(x,y) ⇒ S(y,x)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Meta-modeling (classes as instances)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OWL 2 Full allows this"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The trade-off:"
      }), " Every constructor that makes FOL undecidable is excluded from DL deliberately. DL gives up FOL's full expressiveness to guarantee decidable reasoning — the exact property needed for the Semantic Web."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-how-do-you-handle-inconsistency-in-a-knowledge-base",
      children: "Q5: How do you handle inconsistency in a knowledge base?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Detection:"
        }), " Run a reasoner to find unsatisfiable concepts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Diagnosis:"
        }), " Use axiom pinpointing (glass-box approach) to identify minimal inconsistent subsets (MUPS)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repair options:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Remove"
            }), " the offending axioms."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Weaken"
            }), " (replace ⊑ with weaker condition)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Prioritize"
            }), " — apply defeasible reasoning (some axioms are defaults, not strict)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prevention:"
        }), " Validate new axioms against the KB before adding them."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dbpedia-and-wikidata",
      children: "DBpedia and Wikidata"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DBpedia"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Wikidata"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Source"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wikipedia infoboxes (structured data extracted from articles)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crowd-sourced knowledge base"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~4.58 million entities, ~3 billion RDF triples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100 million entities, ~14 billion statements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schema"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBPedia Ontology (manual + inferred)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wikidata ontology (community-edited, property-based)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPARQL endpoint: dbpedia.org/sparql"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPARQL + Wikidata Query Service"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "KR Formalism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDF + RDFS + OWL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDF + property constraints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use Case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic search, entity linking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wikipedia structured data, knowledge graph research"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Inference example in DBpedia:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DBpedia asserts: dbr:Albert_Einstein rdf:type dbo:Scientist\nDBpedia ontology: dbo:Scientist rdfs:subClassOf dbo:Person\nInference: dbr:Albert_Einstein rdf:type dbo:Person  (via RDFS inheritance)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "snomed-ct-medical-ontology",
      children: "SNOMED CT (Medical Ontology)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SNOMED CT is the world's largest clinical ontology, with ~350,000 concepts and ~1.5 million relationships:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Used in:"
        }), " 50+ countries, mandated in US EHR systems (Meaningful Use)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KR formalism:"
        }), " Description Logic (EL++ profile)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example concept:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Pneumonia (disorder) ⊑ Lung disease ⊓ ∃causative-agent.Infectious-agent"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inference used:"
        }), " Classification — SNOMED's reasoner automatically places new concepts in the correct hierarchy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Clinical decision support:"
        }), " If a patient has ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Bacterial pneumonia (disorder)"
        }), ", the system infers they have ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Lung disease"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Infectious disease"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Disorder of thorax"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why DL matters for SNOMED:"
      }), " The ontology is too large (350K concepts) for manual maintenance. DL classification ensures that when a new concept is added with its defining properties, the reasoner automatically computes all 350K subsumption relationships — saving thousands of person-hours per release."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "google-knowledge-graph",
      children: "Google Knowledge Graph"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Google's Knowledge Graph powers search results with structured knowledge:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Size:"
        }), " ~7 billion facts covering ~500 million entities (as of 2020)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source:"
        }), " Freebase (legacy), Wikidata, crawled structured data, manual curation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KR style:"
        }), " Property graph (similar to frames — entities with typed attribute-value pairs)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inference used:"
        }), " Relationship traversal — \"When was Leonardo da Vinci born?\" traverses: da Vinci → birthDate → 1452-04-15"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Search impact:"
        }), " Knowledge panels shown for ~30% of queries; 20%+ of mobile searches are voice-driven entity queries"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Beyond search:"
        }), " Google Assistant, Google Maps, Lens, and Photos all consume the Knowledge Graph"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example inference chain:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Query: \"Mona Lisa painter nationality\"\n1. Mona Lisa → createdBy → Leonardo da Vinci\n2. Leonardo da Vinci → nationality → Italian\n3. Answer: Italian\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is a semantic network traversal — three edges in the Knowledge Graph, no explicit \"Mona Lisa\" to \"Italian\" path stored."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mycin-historical--first-major-expert-system",
      children: "MYCIN (Historical — First Major Expert System)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Domain:"
        }), " Bacterial blood infection diagnosis (1970s)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KR Formalism:"
        }), " Production rules with certainty factors"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Size:"
        }), " ~600 rules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Performance:"
        }), " Outperformed junior doctors, matched senior specialists"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lesson:"
        }), " KR + inference can surpass human experts in narrow domains"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Language/Formalism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Expressiveness"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Decidable?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Inference Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Propositional Logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(2ⁿ) SAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple facts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "First-Order Logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌ (semi)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Undecidable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General domain axioms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Description Logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "PTIME/EXPTIME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Taxonomies, OWL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic Networks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Linear (inheritance)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quick prototyping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frames"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Medium-High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Linear (with defaults)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured objects"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--ontology-concepts",
      children: "Quick Reference — Ontology Concepts"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Ontology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formal specification of a conceptualization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TBox"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminology (concepts and roles)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mother ≡ Woman ⊓ ∃hasChild.Person"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ABox"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assertions about individuals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Woman(Alice)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fluents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Situation-dependent predicates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On(x, y, s)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frame Problem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need to specify what stays the same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Successor-state axioms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Projection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph homomorphism check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concept subsumption"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "ML"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "CV"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "NLP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Research"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ontology Engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Description Logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic Networks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Situation Calculus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frames"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What is the frame problem?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The challenge of representing knowledge in frames"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The need to explicitly specify what does not change after an action"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The difficulty of combining multiple inheritance hierarchies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The trade-off between expressiveness and tractability"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) The frame problem requires us to specify what stays the same (frame axioms) when an action occurs."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " Which component of a DL knowledge base stores facts about individuals?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) TBox"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) ABox"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) RBox"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) RDF"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) The ABox (assertional box) contains assertions about specific individuals."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " What makes Description Logic attractive for the Semantic Web?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It is as expressive as FOL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) It is decidable with efficient classification algorithms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) It supports procedural attachment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) It eliminates the need for ontologies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) DL is decidable (unlike FOL) while being expressive enough for domain modeling, making it suitable for OWL."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " What is the key difference between a database query and a KR query?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Databases are faster"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) KR systems derive new facts through inference; databases return stored data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) KR uses SQL; databases use SPARQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) There is no difference"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) KR systems perform inference to derive new knowledge from stated facts; databases return exactly what was stored."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " Which knowledge representation scheme uses a bipartite structure of concept and relation nodes?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Semantic networks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Frames"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Conceptual graphs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Description logic"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>C) Conceptual graphs are bipartite graphs alternating between concept nodes (rectangles) and relation nodes (ovals)."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "69-summary",
      children: "6.9 Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Knowledge representation is concerned with encoding domain knowledge in a form that supports automated reasoning. The choice of representation language involves trade-offs between expressiveness and computational tractability. This chapter covered five major representation schemes — semantic networks, frames, conceptual graphs, description logic, and ontology-based representations — each with different strengths in expressiveness, decidability, and reasoning efficiency. Modern knowledge representation forms the backbone of the Semantic Web (OWL, RDF), enterprise knowledge graphs (Google Knowledge Graph), and medical ontologies (SNOMED CT), with hybrid neural-symbolic approaches emerging as a frontier combining deep learning with structured knowledge."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare the expressiveness of propositional logic, FOL, and description logic. What reasoning tasks are tractable in each?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the frame problem. How do successor-state axioms address it?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between the TBox and ABox in description logic."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is multiple inheritance and what strategies exist to resolve conflicts?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does a conceptual graph projection differ from a semantic network inheritance query?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Represent the following knowledge in FOL: \"All professors are researchers. Some researchers are Nobel laureates. No Nobel laureate teaches undergraduate courses. Therefore, some professors do not teach undergraduate courses.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct a description logic ontology for a university domain with concepts: Person, Student, Professor, Course. Include roles: teaches, enrolledIn. Define at least three axioms and verify satisfiability."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a semantic network for a restaurant domain with nodes for Person, Chef, Menu, Dish, Ingredient. Add at least 10 edges showing is-a, has-property, and part-of relationships. Write Python code to query \"What dishes contain tomatoes?\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a forward-chaining reasoner for a propositional KB containing Horn clauses. Apply it to a simple diagnosis domain (e.g., car fault diagnosis). Explain how the system handles the case where multiple rules apply simultaneously."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a small OWL ontology for a smart home domain (devices, rooms, sensors, automation rules). Write the TBox and ABox, then describe what inferences a DL reasoner would derive automatically (e.g., \"If the temperature sensor in the living room exceeds 30°C, the system should infer 'overheating' and trigger the AC\")."
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