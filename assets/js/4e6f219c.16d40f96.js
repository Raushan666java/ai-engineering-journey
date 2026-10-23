"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[1737],{

/***/ 83598
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_12_rag_vector_databases_13_knowledge_graph_rag_md_4e6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-12-rag-vector-databases-13-knowledge-graph-rag-md-4e6.json
const site_docs_courses_ai_engineering_placement_12_rag_vector_databases_13_knowledge_graph_rag_md_4e6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/rag-vector-databases/13-knowledge-graph-rag","title":"Knowledge Graph RAG","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/12-rag-vector-databases/13-knowledge-graph-rag.md","sourceDirName":"courses/ai-engineering-placement/12-rag-vector-databases","slug":"/ai-engineering-placement/12-rag-vector-databases/13-knowledge-graph-rag","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/13-knowledge-graph-rag","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":170,"frontMatter":{"id":"13-knowledge-graph-rag","slug":"/ai-engineering-placement/12-rag-vector-databases/13-knowledge-graph-rag","title":"Knowledge Graph RAG","sidebar_label":"Knowledge Graph RAG","sidebar_position":170},"sidebar":"placementSidebar","previous":{"title":"Parent-Child & Multi-Vector Retrieval","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/12-parent-child-multi-vector"},"next":{"title":"Microsoft GraphRAG","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/14-graphrag"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/12-rag-vector-databases/13-knowledge-graph-rag.md


const frontMatter = {
	id: '13-knowledge-graph-rag',
	slug: '/ai-engineering-placement/12-rag-vector-databases/13-knowledge-graph-rag',
	title: 'Knowledge Graph RAG',
	sidebar_label: 'Knowledge Graph RAG',
	sidebar_position: 170
};
const contentTitle = 'Knowledge Graph RAG';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Introduction",
  "id": "introduction",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Key Terminology",
  "id": "key-terminology",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
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
  "value": "13.1 Knowledge Graph Basics",
  "id": "131-knowledge-graph-basics",
  "level": 2
}, {
  "value": "13.1.1 Entities, Relations, and Triples",
  "id": "1311-entities-relations-and-triples",
  "level": 3
}, {
  "value": "13.1.2 RDF and Property Graphs",
  "id": "1312-rdf-and-property-graphs",
  "level": 3
}, {
  "value": "13.1.3 SPARQL Query Basics",
  "id": "1313-sparql-query-basics",
  "level": 3
}, {
  "value": "13.2 Entity Extraction",
  "id": "132-entity-extraction",
  "level": 2
}, {
  "value": "13.2.1 Named Entity Recognition (NER)",
  "id": "1321-named-entity-recognition-ner",
  "level": 3
}, {
  "value": "13.2.2 Relation Extraction",
  "id": "1322-relation-extraction",
  "level": 3
}, {
  "value": "13.2.3 Entity Resolution",
  "id": "1323-entity-resolution",
  "level": 3
}, {
  "value": "13.2.4 Coreference Resolution",
  "id": "1324-coreference-resolution",
  "level": 3
}, {
  "value": "13.2.5 Full Extraction Pipeline",
  "id": "1325-full-extraction-pipeline",
  "level": 3
}, {
  "value": "13.3 Graph-Enhanced Retrieval",
  "id": "133-graph-enhanced-retrieval",
  "level": 2
}, {
  "value": "13.3.1 Entity Linking for Queries",
  "id": "1331-entity-linking-for-queries",
  "level": 3
}, {
  "value": "13.3.2 Graph Traversal and Subgraph Extraction",
  "id": "1332-graph-traversal-and-subgraph-extraction",
  "level": 3
}, {
  "value": "13.3.3 Combining Vector Search with Graph Context",
  "id": "1333-combining-vector-search-with-graph-context",
  "level": 3
}, {
  "value": "13.4 KG Construction Pipeline",
  "id": "134-kg-construction-pipeline",
  "level": 2
}, {
  "value": "13.4.1 Schema Design",
  "id": "1341-schema-design",
  "level": 3
}, {
  "value": "13.4.2 Storage with NetworkX",
  "id": "1342-storage-with-networkx",
  "level": 3
}, {
  "value": "13.4.3 SPARQL Querying with Graph Data",
  "id": "1343-sparql-querying-with-graph-data",
  "level": 3
}, {
  "value": "13.4.4 Neo4j Integration",
  "id": "1344-neo4j-integration",
  "level": 3
}, {
  "value": "13.5 KG + Vector Hybrid Architecture",
  "id": "135-kg--vector-hybrid-architecture",
  "level": 2
}, {
  "value": "13.5.1 Architecture Overview",
  "id": "1351-architecture-overview",
  "level": 3
}, {
  "value": "13.5.2 Unified Retriever Implementation",
  "id": "1352-unified-retriever-implementation",
  "level": 3
}, {
  "value": "13.5.3 Graph-Guided Re-Ranking",
  "id": "1353-graph-guided-re-ranking",
  "level": 3
}, {
  "value": "13.5.4 Multi-Hop Question Answering",
  "id": "1354-multi-hop-question-answering",
  "level": 3
}, {
  "value": "13.5.5 Complete KG-RAG Pipeline",
  "id": "1355-complete-kg-rag-pipeline",
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
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
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
  "value": "Common Mistakes",
  "id": "common-mistakes",
  "level": 2
}, {
  "value": "Revision Notes",
  "id": "revision-notes",
  "level": 2
}, {
  "value": "Placement Section",
  "id": "placement-section",
  "level": 2
}, {
  "value": "Top 10 Interview Questions",
  "id": "top-10-interview-questions",
  "level": 3
}, {
  "value": "Google Style",
  "id": "google-style",
  "level": 4
}, {
  "value": "Amazon Style",
  "id": "amazon-style",
  "level": 4
}, {
  "value": "Microsoft Style",
  "id": "microsoft-style",
  "level": 4
}, {
  "value": "NVIDIA Style",
  "id": "nvidia-style",
  "level": 4
}, {
  "value": "AI Startup Style",
  "id": "ai-startup-style",
  "level": 4
}, {
  "value": "Resume Tips",
  "id": "resume-tips",
  "level": 3
}, {
  "value": "Interview Day Checklist",
  "id": "interview-day-checklist",
  "level": 3
}, {
  "value": "True/False",
  "id": "truefalse",
  "level": 2
}, {
  "value": "Fill in the Blank",
  "id": "fill-in-the-blank",
  "level": 2
}, {
  "value": "Scenario Questions",
  "id": "scenario-questions",
  "level": 2
}, {
  "value": "Output Questions",
  "id": "output-questions",
  "level": 2
}, {
  "value": "Difficulty Level",
  "id": "difficulty-level",
  "level": 2
}, {
  "value": "Tips &amp; Tricks",
  "id": "tips--tricks",
  "level": 2
}, {
  "value": "Memory Tricks",
  "id": "memory-tricks",
  "level": 2
}, {
  "value": "Further Reading",
  "id": "further-reading",
  "level": 2
}, {
  "value": "Related Topics",
  "id": "related-topics",
  "level": 2
}, {
  "value": "FAQs",
  "id": "faqs",
  "level": 2
}, {
  "value": "Important Notes",
  "id": "important-notes",
  "level": 2
}, {
  "value": "Historical Context",
  "id": "historical-context",
  "level": 2
}, {
  "value": "Security Considerations",
  "id": "security-considerations",
  "level": 2
}, {
  "value": "ML Intuition",
  "id": "ml-intuition",
  "level": 2
}, {
  "value": "Analogies",
  "id": "analogies",
  "level": 2
}, {
  "value": "Flashcards",
  "id": "flashcards",
  "level": 2
}, {
  "value": "Research References",
  "id": "research-references",
  "level": 2
}, {
  "value": "Open-Source Tools",
  "id": "open-source-tools",
  "level": 2
}, {
  "value": "Debugging Guide",
  "id": "debugging-guide",
  "level": 2
}, {
  "value": "Mock Interview Section",
  "id": "mock-interview-section",
  "level": 2
}, {
  "value": "Optimized Implementation",
  "id": "optimized-implementation",
  "level": 2
}, {
  "value": "Evaluation Metrics",
  "id": "evaluation-metrics",
  "level": 2
}, {
  "value": "Real-World Examples",
  "id": "real-world-examples",
  "level": 2
}, {
  "value": "Next Topic",
  "id": "next-topic",
  "level": 2
}, {
  "value": "Limitations",
  "id": "limitations",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    button: "button",
    code: "code",
    details: "details",
    div: "div",
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
        id: "knowledge-graph-rag",
        children: "Knowledge Graph RAG"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Objective"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand knowledge graph fundamentals — entities, relations, triples, RDF, property graphs, SPARQL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement entity extraction pipelines using NER, relation extraction, entity resolution, and coreference resolution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design graph-enhanced retrieval with entity linking, graph traversal, and subgraph extraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build a KG construction pipeline covering schema design, extraction, storage, and querying"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement a KG + Vector hybrid system combining entity vector search with graph traversal for enriched context"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Knowledge Graph RAG (KG-RAG) augments traditional vector retrieval with structured knowledge from knowledge graphs. Vector databases capture semantic similarity through embeddings. Knowledge graphs capture structured relationships between entities through typed edges."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The key insight: vectors tell you \"what documents are similar\" but graphs tell you \"how entities connect.\" By combining both, KG-RAG answers multi-hop questions that pure vector search cannot handle — like \"Which drugs target the same proteins as Drug X, but were developed by competitors of Pfizer?\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covers the full stack: from constructing knowledge graphs to hybrid retrieval that fuses vector similarity with graph traversal."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic understanding of RAG pipelines (Chapter 1 of this module)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with embeddings and vector search (Chapters 2-3)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python programming experience"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic SQL knowledge (helpful for SPARQL analogies)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Knowledge Graph"
      }), ": A structured representation of entities (nodes) and their relationships (edges), where both nodes and edges have typed attributes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Triple"
      }), ": The atomic unit of a knowledge graph: (subject, predicate, object) e.g., (Pfizer, develops, Paxlovid)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RDF"
      }), ": Resource Description Framework — a W3C standard for representing triples as subject-predicate-object statements."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SPARQL"
      }), ": A query language for RDF graphs, analogous to SQL for relational databases."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Property Graph"
      }), ": An extension of RDF where nodes and edges can have arbitrary key-value properties."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Entity Linking"
      }), ": Mapping text mentions to canonical entities in a knowledge base (e.g., \"Apple\" → company, not fruit)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Subgraph Extraction"
      }), ": Selecting a connected portion of a KG relevant to a query, usually via traversal from seed entities."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Graph Traversal"
      }), ": Walking edges from a starting node to find connected nodes within N hops."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Knowledge Graph RAG bridges two worlds: unstructured text retrieval (vector search) and structured knowledge representation (graphs). This section covers the core concepts, mathematical foundations, and practical implementation of each layer in the KG-RAG stack."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Knowledge Graph Basics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entities, relations, triples, RDF, property graphs, SPARQL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entity Extraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NER, relation extraction, entity resolution, coreference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph-Enhanced Retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entity linking, graph traversal, subgraph extraction, fusion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KG Construction Pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema design, extraction, storage, querying with Neo4j/NetworkX"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KG + Vector Hybrid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vector search for entities, graph traversal for context, combined ranking"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TB\r\n    subgraph Input\r\n        A[Raw Documents] --> B[Chunker]\r\n        B --> C[Text Chunks]\r\n    end\r\n\r\n    subgraph KG_Construction\r\n        C --> D[Entity Extractor]\r\n        D --> E[Relation Extractor]\r\n        E --> F[Entity Resolver]\r\n        F --> G[KG Builder]\r\n        G --> H[Knowledge Graph]\r\n    end\r\n\r\n    subgraph Vector_Index\r\n        C --> I[Embedder]\r\n        I --> J[Vector Index]\r\n    end\r\n\r\n    subgraph Query\r\n        K[User Query] --> L[Entity Linker]\r\n        K --> M[Query Embedder]\r\n        L --> H\r\n        M --> J\r\n    end\r\n\r\n    subgraph Fusion\r\n        H --> N[Subgraph Extractor]\r\n        N --> O[Context Formatter]\r\n        J --> O\r\n        O --> P[LLM]\r\n        P --> Q[Answer]\r\n    end\r\n\r\n    style H fill:#e1f5fe,stroke:#0288d1,stroke-width:2px\r\n    style J fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px\r\n    style O fill:#fff3e0,stroke:#f57c00,stroke-width:2px"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "131-knowledge-graph-basics",
      children: "13.1 Knowledge Graph Basics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Knowledge graphs represent information as networks of entities connected by typed relationships. Unlike flat document stores, KGs capture the structure of knowledge — who did what, where, when, and how."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1311-entities-relations-and-triples",
      children: "13.1.1 Entities, Relations, and Triples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The fundamental unit of a KG is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "triple"
      }), ": (subject, predicate, object). Each triple asserts a fact:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "(Albert_Einstein, bornIn, Germany)\r\n(Paxlovid, treats, COVID-19)\r\n(OpenAI, developed, GPT-4)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Entities are real-world objects (people, places, companies, drugs). Relations define the type of connection between entities."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\r\nfrom typing import List, Dict, Optional, Tuple, Any, Set\r\nfrom collections import defaultdict\r\nimport json\r\nimport math\r\n\r\n@dataclass\r\nclass Triple:\r\n    subject: str\r\n    predicate: str\r\n    object: str\r\n    confidence: float = 1.0\r\n    metadata: Dict[str, Any] = field(default_factory=dict)\r\n\r\n    def __repr__(self) -> str:\r\n        return f\"({self.subject}, {self.predicate}, {self.object})\"\r\n\r\n    def to_rdf(self) -> str:\r\n        \"\"\"Serialize triple as Turtle RDF.\"\"\"\r\n        return f\"<{self.subject}> <{self.predicate}> <{self.object}> .\\n\"\r\n\r\n    def to_dict(self) -> Dict:\r\n        return {\r\n            \"subject\": self.subject,\r\n            \"predicate\": self.predicate,\r\n            \"object\": self.object,\r\n            \"confidence\": self.confidence,\r\n        }\r\n\r\ntriples = [\r\n    Triple(\"Albert_Einstein\", \"bornIn\", \"Germany\"),\r\n    Triple(\"Albert_Einstein\", \"developed\", \"Theory_of_Relativity\"),\r\n    Triple(\"Theory_of_Relativity\", \"field\", \"Physics\"),\r\n    Triple(\"Albert_Einstein\", \"wonAward\", \"Nobel_Prize_in_Physics\"),\r\n]\r\n\r\nfor t in triples:\r\n    print(f\"Triple: {t}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1312-rdf-and-property-graphs",
      children: "13.1.2 RDF and Property Graphs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two dominant data models for KGs exist:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RDF (Resource Description Framework)"
      }), " treats everything as triples with URIs for global identifiers. It is the W3C standard used in linked data and the Semantic Web. SPARQL is the query language."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Property Graphs"
      }), " extend RDF by allowing key-value properties on both nodes and edges. Neo4j is the most popular property graph database with Cypher as its query language."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\r\nclass PropertyGraphNode:\r\n    id: str\r\n    labels: List[str] = field(default_factory=list)\r\n    properties: Dict[str, Any] = field(default_factory=dict)\r\n\r\n@dataclass\r\nclass PropertyGraphEdge:\r\n    source_id: str\r\n    target_id: str\r\n    relationship_type: str\r\n    properties: Dict[str, Any] = field(default_factory=dict)\r\n\r\nclass PropertyGraph:\r\n    def __init__(self):\r\n        self.nodes: Dict[str, PropertyGraphNode] = {}\r\n        self.edges: List[PropertyGraphEdge] = []\r\n        self._adjacency: Dict[str, List[PropertyGraphEdge]] = defaultdict(list)\r\n\r\n    def add_node(self, node: PropertyGraphNode) -> None:\r\n        self.nodes[node.id] = node\r\n\r\n    def add_edge(self, edge: PropertyGraphEdge) -> None:\r\n        self.edges.append(edge)\r\n        self._adjacency[edge.source_id].append(edge)\r\n\r\n    def get_neighbors(self, node_id: str, rel_type: Optional[str] = None) -> List[str]:\r\n        neighbors = []\r\n        for edge in self._adjacency.get(node_id, []):\r\n            if rel_type is None or edge.relationship_type == rel_type:\r\n                neighbors.append(edge.target_id)\r\n        return neighbors\r\n\r\n    def query_cypher(self, match_pattern: str) -> List[Dict]:\r\n        \"\"\"Simulate a basic Cypher query by pattern matching node labels.\"\"\"\r\n        results = []\r\n        for node in self.nodes.values():\r\n            for label in node.labels:\r\n                if label in match_pattern:\r\n                    results.append({\"node\": node.id, \"labels\": node.labels, \"properties\": node.properties})\r\n        return results\r\n\r\n    def to_dict(self) -> Dict:\r\n        return {\r\n            \"nodes\": {nid: {\"labels\": n.labels, \"properties\": n.properties} for nid, n in self.nodes.items()},\r\n            \"edges\": [\r\n                {\"source\": e.source_id, \"target\": e.target_id, \"type\": e.relationship_type, \"props\": e.properties}\r\n                for e in self.edges\r\n            ],\r\n        }\r\n\r\npg = PropertyGraph()\r\npg.add_node(PropertyGraphNode(\"e1\", [\"Person\", \"Scientist\"], {\"name\": \"Einstein\", \"birthYear\": 1879}))\r\npg.add_node(PropertyGraphNode(\"e2\", [\"Theory\"], {\"name\": \"Relativity\", \"year\": 1915}))\r\npg.add_node(PropertyGraphNode(\"e3\", [\"Award\"], {\"name\": \"Nobel Prize\", \"year\": 1922}))\r\npg.add_edge(PropertyGraphEdge(\"e1\", \"e2\", \"DEVELOPED\", {\"confidence\": 1.0}))\r\npg.add_edge(PropertyGraphEdge(\"e1\", \"e3\", \"WON\", {\"year\": 1922}))\r\n\r\nprint(f\"Neighbors of e1: {pg.get_neighbors('e1')}\")\r\nprint(f\"Neighbors via DEVELOPED: {pg.get_neighbors('e1', 'DEVELOPED')}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1313-sparql-query-basics",
      children: "13.1.3 SPARQL Query Basics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SPARQL is the standard query language for RDF knowledge graphs. It uses graph pattern matching — you describe the pattern of triples you want to find."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SimpleSPARQLEngine:\r\n    \"\"\"Simulates a minimal SPARQL query engine over a list of triples.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.triples: List[Triple] = []\r\n\r\n    def load(self, triples: List[Triple]) -> None:\r\n        self.triples = triples\r\n\r\n    def query(self, sparql_string: str) -> List[Dict[str, str]]:\r\n        \"\"\"Parse and execute a simplified SPARQL SELECT query.\r\n\r\n        Supports patterns like:\r\n        SELECT ?person ?theory WHERE {\r\n            ?person <developed> ?theory .\r\n            ?person <bornIn> \"Germany\" .\r\n        }\r\n        \"\"\"\r\n        results = []\r\n        # Parse variables from SELECT clause\r\n        select_vars = self._parse_select(sparql_string)\r\n        # Parse triple patterns from WHERE clause\r\n        patterns = self._parse_where(sparql_string)\r\n\r\n        # Bind variables to matching triples\r\n        bindings = self._match_patterns(patterns)\r\n\r\n        for binding in bindings:\r\n            row = {}\r\n            for var in select_vars:\r\n                row[var] = binding.get(var, \"\")\r\n            results.append(row)\r\n\r\n        return results\r\n\r\n    def _parse_select(self, query: str) -> List[str]:\r\n        start = query.find(\"SELECT\") + 6\r\n        end = query.find(\"WHERE\")\r\n        vars_part = query[start:end].strip()\r\n        return [v.strip() for v in vars_part.split() if v.startswith(\"?\")]\r\n\r\n    def _parse_where(self, query: str) -> List[Tuple[str, str, str]]:\r\n        start = query.find(\"{\") + 1\r\n        end = query.find(\"}\")\r\n        block = query[start:end].strip()\r\n\r\n        patterns = []\r\n        for line in block.split(\".\"):\r\n            line = line.strip()\r\n            if not line:\r\n                continue\r\n            parts = line.strip().split()\r\n            if len(parts) >= 3:\r\n                # Normalize: remove angle brackets and quotes\r\n                s = parts[0].strip(\"<>\\\"\")\r\n                p = parts[1].strip(\"<>\\\"\")\r\n                o = \" \".join(parts[2:]).strip(\"<>\\\" .\")\r\n                patterns.append((s, p, o))\r\n        return patterns\r\n\r\n    def _match_patterns(self, patterns: List[Tuple]) -> List[Dict[str, str]]:\r\n        \"\"\"Brute-force join over triples to match graph patterns.\"\"\"\r\n        partials: List[Dict[str, str]] = [{}]\r\n\r\n        for pattern in patterns:\r\n            new_partials = []\r\n            for triple in self.triples:\r\n                for partial in partials:\r\n                    binding = self._match_pattern(triple, pattern, partial)\r\n                    if binding is not None:\r\n                        new_partials.append(binding)\r\n            if not new_partials:\r\n                return []\r\n            partials = new_partials\r\n\r\n        return partials\r\n\r\n    def _match_pattern(self, triple: Triple, pattern: Tuple, binding: Dict) -> Optional[Dict]:\r\n        \"\"\"Check if a triple matches a pattern given existing variable bindings.\"\"\"\r\n        s_pattern, p_pattern, o_pattern = pattern\r\n        new_binding = dict(binding)\r\n\r\n        # Check subject match\r\n        if s_pattern.startswith(\"?\"):\r\n            var = s_pattern\r\n            if var in new_binding:\r\n                if new_binding[var] != triple.subject:\r\n                    return None\r\n            else:\r\n                new_binding[var] = triple.subject\r\n        elif s_pattern != triple.subject:\r\n            return None\r\n\r\n        # Check predicate match\r\n        if p_pattern.startswith(\"?\"):\r\n            var = p_pattern\r\n            if var in new_binding:\r\n                if new_binding[var] != triple.predicate:\r\n                    return None\r\n            else:\r\n                new_binding[var] = triple.predicate\r\n        elif p_pattern != triple.predicate:\r\n            return None\r\n\r\n        # Check object match\r\n        if o_pattern.startswith(\"?\"):\r\n            var = o_pattern\r\n            if var in new_binding:\r\n                if new_binding[var] != triple.object:\r\n                    return None\r\n            else:\r\n                new_binding[var] = triple.object\r\n        elif o_pattern != triple.object:\r\n            return None\r\n\r\n        return new_binding\r\n\r\nsparql_engine = SimpleSPARQLEngine()\r\nsparql_engine.load(triples)\r\n\r\nquery = \"\"\"SELECT ?person ?theory WHERE {\r\n    ?person <developed> ?theory .\r\n    ?person <bornIn> \"Germany\" .\r\n}\"\"\"\r\n\r\nresults = sparql_engine.query(query)\r\nprint(\"SPARQL results:\", results)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "132-entity-extraction",
      children: "13.2 Entity Extraction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before you can build a knowledge graph, you must extract entities and their relationships from raw text. This pipeline has four stages: Named Entity Recognition, Relation Extraction, Entity Resolution, and Coreference Resolution."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1321-named-entity-recognition-ner",
      children: "13.2.1 Named Entity Recognition (NER)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NER identifies typed entities in text: people, organizations, locations, dates, drugs, proteins, etc."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import re\r\n\r\nclass NamedEntity:\r\n    def __init__(self, text: str, entity_type: str, start: int, end: int, confidence: float = 1.0):\r\n        self.text = text\r\n        self.entity_type = entity_type\r\n        self.start = start\r\n        self.end = end\r\n        self.confidence = confidence\r\n\r\n    def __repr__(self) -> str:\r\n        return f\"{self.text} [{self.entity_type}] ({self.confidence:.2f})\"\r\n\r\nclass SimpleNER:\r\n    \"\"\"A rule-based NER for biomedical/scientific text (for educational purposes).\"\"\"\r\n\r\n    def __init__(self):\r\n        self.patterns: Dict[str, List[str]] = {\r\n            \"PERSON\": [\"Einstein\", \"Newton\", \"Darwin\", \"Turing\", \"Hinton\"],\r\n            \"ORGANIZATION\": [\"OpenAI\", \"Google\", \"DeepMind\", \"Pfizer\", \"Moderna\", \"Meta\", \"Microsoft\"],\r\n            \"DRUG\": [\"Paxlovid\", \"Remdesivir\", \"Ibuprofen\", \"Metformin\"],\r\n            \"DISEASE\": [\"COVID-19\", \"Diabetes\", \"Cancer\", \"Alzheimer\"],\r\n            \"PROTEIN\": [\"ACE2\", \"Spike\", \"BRCA1\", \"TP53\", \"EGFR\"],\r\n            \"LOCATION\": [\"Germany\", \"USA\", \"UK\", \"China\", \"India\"],\r\n            \"THEORY\": [\"Relativity\", \"Evolution\", \"Quantum Mechanics\"],\r\n        }\r\n\r\n    def extract(self, text: str) -> List[NamedEntity]:\r\n        entities = []\r\n        for entity_type, terms in self.patterns.items():\r\n            for term in terms:\r\n                for match in re.finditer(re.escape(term), text, re.IGNORECASE):\r\n                    entity = NamedEntity(\r\n                        text=match.group(),\r\n                        entity_type=entity_type,\r\n                        start=match.start(),\r\n                        end=match.end(),\r\n                        confidence=0.95,\r\n                    )\r\n                    # Deduplicate overlapping entities — keep longer matches\r\n                    if not self._is_overlapping(entity, entities):\r\n                        entities.append(entity)\r\n        entities.sort(key=lambda e: e.start)\r\n        return entities\r\n\r\n    def _is_overlapping(self, new: NamedEntity, existing: List[NamedEntity]) -> bool:\r\n        for e in existing:\r\n            if new.start < e.end and new.end > e.start:\r\n                return True\r\n        return False\r\n\r\nner = SimpleNER()\r\ntext = \"Pfizer developed Paxlovid to treat COVID-19. The drug targets the Spike protein.\"\r\nentities = ner.extract(text)\r\nfor e in entities:\r\n    print(f\"  {e}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1322-relation-extraction",
      children: "13.2.2 Relation Extraction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After finding entities, we need to determine which relations exist between them. Relation extraction identifies typed connections between entity pairs."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\r\nclass RelationExtraction:\r\n    subject: str\r\n    subject_type: str\r\n    relation: str\r\n    object: str\r\n    object_type: str\r\n    confidence: float\r\n    evidence: str\r\n\r\nclass SimpleRelationExtractor:\r\n    \"\"\"Extracts relations using pattern matching on dependency-like patterns.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.relation_patterns: List[Tuple[str, str, str]] = [\r\n            # (relation, trigger_word, expected_object_type)\r\n            (\"developed\", r\"\\b(developed|created|invented|designed)\\b\", \"ORGANIZATION\"),\r\n            (\"treats\", r\"\\b(treats|targets|inhibits|blocks)\\b\", \"DRUG\"),\r\n            (\"wonAward\", r\"\\b(won|received|awarded)\\b\", \"ORGANIZATION\"),\r\n            (\"locatedIn\", r\"\\b(based|located|headquartered)\\b\", \"LOCATION\"),\r\n            (\"discovered\", r\"\\b(discovered|found|identified)\\b\", \"DISEASE\"),\r\n            (\"binds\", r\"\\b(binds|interacts|attaches)\\b\", \"PROTEIN\"),\r\n        ]\r\n\r\n    def extract(self, text: str, entities: List[NamedEntity]) -> List[RelationExtraction]:\r\n        relations = []\r\n        sentences = text.replace(\"!\", \".\").replace(\"?\", \".\").split(\".\")\r\n\r\n        for sentence in sentences:\r\n            sentence_entities = [e for e in entities if e.start >= 0]\r\n            sent_entities_in_range = [e for e in entities if e.start < len(sentence)]\r\n\r\n            for e1 in sent_entities_in_range:\r\n                for e2 in sent_entities_in_range:\r\n                    if e1.text == e2.text:\r\n                        continue\r\n                    for rel_name, trigger, expected_type in self.relation_patterns:\r\n                        if trigger in sentence.lower():\r\n                            if e2.entity_type == expected_type or expected_type == \"\":\r\n                                rel = RelationExtraction(\r\n                                    subject=e1.text,\r\n                                    subject_type=e1.entity_type,\r\n                                    relation=rel_name,\r\n                                    object=e2.text,\r\n                                    object_type=e2.entity_type,\r\n                                    confidence=0.85,\r\n                                    evidence=sentence.strip(),\r\n                                )\r\n                                relations.append(rel)\r\n        return relations\r\n\r\n# Use the entities from the previous example\r\nrel_extractor = SimpleRelationExtractor()\r\nrelations = rel_extractor.extract(text, entities)\r\nfor r in relations:\r\n    print(f\"  ({r.subject}) --[{r.relation}]--> ({r.object})  [conf={r.confidence}]\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1323-entity-resolution",
      children: "13.2.3 Entity Resolution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Entity resolution (also called entity linking or deduplication) connects extracted text mentions to their canonical IDs in a knowledge base. For example, \"AI\" and \"Artificial Intelligence\" should resolve to the same entity."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class EntityResolver:\r\n    def __init__(self):\r\n        self.canonical_map: Dict[str, str] = {\r\n            \"AI\": \"Artificial_Intelligence\",\r\n            \"ML\": \"Machine_Learning\",\r\n            \"NLP\": \"Natural_Language_Processing\",\r\n            \"COVID-19\": \"Coronavirus_Disease_2019\",\r\n            \"SARS-CoV-2\": \"Coronavirus_Disease_2019\",\r\n            \"Pfizer\": \"Pfizer_Inc\",\r\n            \"BioNTech\": \"BioNTech_SE\",\r\n            \"GPT-4\": \"GPT_4\",\r\n            \"GPT4\": \"GPT_4\",\r\n        }\r\n        self.synonym_map: Dict[str, List[str]] = defaultdict(list)\r\n        # Build reverse mapping: canonical -> aliases\r\n        for alias, canonical in self.canonical_map.items():\r\n            self.synonym_map[canonical].append(alias)\r\n\r\n    def resolve(self, mention: str) -> Tuple[str, float]:\r\n        mention_clean = mention.strip().lower()\r\n        # Direct match\r\n        if mention in self.canonical_map:\r\n            return self.canonical_map[mention], 1.0\r\n        # Case-insensitive check\r\n        for alias, canonical in self.canonical_map.items():\r\n            if alias.lower() == mention_clean:\r\n                return canonical, 0.95\r\n        # Fuzzy match: check substring containment\r\n        for alias, canonical in self.canonical_map.items():\r\n            if alias.lower() in mention_clean or mention_clean in alias.lower():\r\n                return canonical, 0.7\r\n        # Return the mention itself as canonical (no resolution)\r\n        return mention, 0.5\r\n\r\n    def get_aliases(self, canonical_id: str) -> List[str]:\r\n        return self.synonym_map.get(canonical_id, [canonical_id])\r\n\r\n    def resolve_batch(self, mentions: List[str]) -> List[Tuple[str, str, float]]:\r\n        return [(m, *self.resolve(m)) for m in mentions]\r\n\r\nresolver = EntityResolver()\r\ntest_mentions = [\"AI\", \"COVID-19\", \"Pfizer\", \"GPT4\", \"machine learning\"]\r\nfor mention in test_mentions:\r\n    resolved, confidence = resolver.resolve(mention)\r\n    print(f\"  {mention:20s} -> {resolved:40s} (conf={confidence:.2f})\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1324-coreference-resolution",
      children: "13.2.4 Coreference Resolution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Coreference resolution connects pronouns (\"he\", \"it\", \"they\") to their antecedent entities. This is critical for extracting complete triples from multi-sentence text."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\r\nclass CoreferenceCluster:\r\n    \"\"\"A group of mentions that refer to the same entity.\"\"\"\r\n    representative: str\r\n    mentions: List[str] = field(default_factory=list)\r\n    sentences: List[int] = field(default_factory=list)\r\n\r\nclass SimpleCoreferenceResolver:\r\n    \"\"\"Rule-based coreference resolver for educational purposes.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.pronouns = {\"he\", \"she\", \"it\", \"they\", \"him\", \"her\", \"them\", \"his\", \"hers\", \"its\", \"their\"}\r\n\r\n    def resolve(self, sentences: List[str], entities: List[NamedEntity]) -> List[CoreferenceCluster]:\r\n        clusters: Dict[str, CoreferenceCluster] = {}\r\n        last_entities: Dict[str, str] = {}  # entity_type -> last entity text\r\n\r\n        for sent_idx, sentence in enumerate(sentences):\r\n            sentence_lower = sentence.lower()\r\n\r\n            # Find entities in this sentence\r\n            sent_entities = [e for e in entities if e.start < len(sentence) and e.end <= len(sentence)]\r\n\r\n            for e in sent_entities:\r\n                last_entities[e.entity_type] = e.text\r\n                if e.text not in clusters:\r\n                    clusters[e.text] = CoreferenceCluster(\r\n                        representative=e.text,\r\n                        mentions=[e.text],\r\n                        sentences=[sent_idx],\r\n                    )\r\n\r\n            # Resolve pronouns\r\n            words = sentence_lower.split()\r\n            for word in words:\r\n                word_clean = word.strip(\",.!?;:\")\r\n                if word_clean not in self.pronouns:\r\n                    continue\r\n\r\n                # Find the most recent entity of likely type\r\n                antecedent = None\r\n                if word_clean in {\"he\", \"him\", \"his\"}:\r\n                    antecedent = last_entities.get(\"PERSON\")\r\n                elif word_clean in {\"she\", \"her\", \"hers\"}:\r\n                    antecedent = last_entities.get(\"PERSON\")\r\n                elif word_clean in {\"it\", \"its\"}:\r\n                    antecedent = last_entities.get(\"ORGANIZATION\") or last_entities.get(\"DRUG\") or last_entities.get(\"DISEASE\")\r\n                elif word_clean in {\"they\", \"them\", \"their\"}:\r\n                    antecedent = last_entities.get(\"ORGANIZATION\")\r\n\r\n                if antecedent and antecedent in clusters:\r\n                    clusters[antecedent].mentions.append(word_clean)\r\n                    clusters[antecedent].sentences.append(sent_idx)\r\n\r\n        return list(clusters.values())\r\n\r\nsentences = [\r\n    \"Pfizer developed a new drug. It treats COVID-19 effectively.\",\r\n    \"The company also produces vaccines. They are distributed globally.\",\r\n]\r\nall_entities = []\r\nfor sent in sentences:\r\n    all_entities.extend(ner.extract(sent))\r\n\r\ncoref = SimpleCoreferenceResolver()\r\nclusters = coref.resolve(sentences, all_entities)\r\nfor cl in clusters:\r\n    print(f\"  Cluster: {cl.representative} -> mentions={cl.mentions}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1325-full-extraction-pipeline",
      children: "13.2.5 Full Extraction Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Combining all extraction steps into a single pipeline that converts raw text into knowledge graph triples."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class KGExtractionPipeline:\r\n    def __init__(self):\r\n        self.ner = SimpleNER()\r\n        self.relation_extractor = SimpleRelationExtractor()\r\n        self.resolver = EntityResolver()\r\n        self.coref = SimpleCoreferenceResolver()\r\n\r\n    def process_document(self, text: str) -> List[Triple]:\r\n        # 1. Split into sentences\r\n        sentences = [s.strip() for s in text.replace(\"!\", \".\").replace(\"?\", \".\").split(\".\") if len(s.strip()) > 10]\r\n\r\n        # 2. Extract entities\r\n        entities = self.ner.extract(text)\r\n\r\n        # 3. Resolve coreferences\r\n        clusters = self.coref.resolve(sentences, entities)\r\n\r\n        # 4. Extract relations\r\n        raw_relations = self.relation_extractor.extract(text, entities)\r\n\r\n        # 5. Resolve entities to canonical IDs and build triples\r\n        triples = []\r\n        for rel in raw_relations:\r\n            subject_canon, _ = self.resolver.resolve(rel.subject)\r\n            obj_canon, _ = self.resolver.resolve(rel.object)\r\n            triple = Triple(\r\n                subject=subject_canon,\r\n                predicate=rel.relation,\r\n                object=obj_canon,\r\n                confidence=rel.confidence,\r\n                metadata={\"evidence\": rel.evidence[:100]},\r\n            )\r\n            triples.append(triple)\r\n\r\n        return triples\r\n\r\ndoc = \"\"\"\r\nPfizer developed Paxlovid to treat COVID-19. The drug targets the Spike protein.\r\nPfizer is based in USA. The company also developed a vaccine with BioNTech.\r\n\"\"\"\r\n\r\npipeline = KGExtractionPipeline()\r\nextracted_triples = pipeline.process_document(doc)\r\nprint(\"Extracted Triples:\")\r\nfor t in extracted_triples:\r\n    print(f\"  {t}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "133-graph-enhanced-retrieval",
      children: "13.3 Graph-Enhanced Retrieval"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Graph-enhanced retrieval uses the knowledge graph to enrich the context returned to the LLM. Instead of retrieving only text chunks via vector similarity, we also retrieve subgraphs from entities mentioned in the query."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1331-entity-linking-for-queries",
      children: "13.3.1 Entity Linking for Queries"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The first step is to identify which entities in the user query correspond to nodes in our KG."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class QueryEntityLinker:\r\n    def __init__(self, kg_nodes: Dict[str, PropertyGraphNode]):\r\n        self.kg_node_names = {n.properties.get(\"name\", \"\").lower(): nid for nid, n in kg_nodes.items()}\r\n        self.kg_node_ids = set(kg_nodes.keys())\r\n\r\n    def link(self, query: str) -> List[Tuple[str, str, float]]:\r\n        \"\"\"Find KG nodes that match entities in the query.\"\"\"\r\n        query_lower = query.lower()\r\n        matches = []\r\n\r\n        for name, node_id in self.kg_node_names.items():\r\n            if name and name in query_lower:\r\n                matches.append((node_id, name, 1.0))\r\n\r\n        if not matches:\r\n            # Fallback: extract capitalized phrases as candidate entities\r\n            candidates = re.findall(r'\\b[A-Z][a-zA-Z]+\\b', query)\r\n            for cand in candidates:\r\n                cand_lower = cand.lower()\r\n                for name, node_id in self.kg_node_names.items():\r\n                    if name and (cand_lower in name or name in cand_lower):\r\n                        matches.append((node_id, name, 0.6))\r\n                        break\r\n\r\n        return matches\r\n\r\n# Build a small KG for testing\r\ntest_nodes = {\r\n    \"n1\": PropertyGraphNode(\"n1\", [\"Drug\"], {\"name\": \"Paxlovid\"}),\r\n    \"n2\": PropertyGraphNode(\"n2\", [\"Company\"], {\"name\": \"Pfizer\"}),\r\n    \"n3\": PropertyGraphNode(\"n3\", [\"Protein\"], {\"name\": \"ACE2\"}),\r\n    \"n4\": PropertyGraphNode(\"n4\", [\"Disease\"], {\"name\": \"COVID-19\"}),\r\n}\r\n\r\nlinker = QueryEntityLinker(test_nodes)\r\nquery = \"How does Paxlovid treat COVID-19?\"\r\nlinked = linker.link(query)\r\nprint(\"Linked entities:\", linked)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1332-graph-traversal-and-subgraph-extraction",
      children: "13.3.2 Graph Traversal and Subgraph Extraction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Once we have seed entities, we traverse the graph to extract a relevant subgraph. BFS traversal collects nodes within N hops."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class GraphTraversalEngine:\r\n    def __init__(self, graph: PropertyGraph):\r\n        self.graph = graph\r\n\r\n    def bfs_traverse(self, seed_ids: List[str], max_hops: int = 2, max_nodes: int = 20) -> Dict[str, Set[str]]:\r\n        \"\"\"BFS traversal from seed entities, returning nodes and edges.\"\"\"\r\n        visited_nodes: Set[str] = set(seed_ids)\r\n        visited_edges: Set[Tuple[str, str, str]] = set()\r\n        frontier = list(seed_ids)\r\n\r\n        for hop in range(max_hops):\r\n            if not frontier:\r\n                break\r\n            next_frontier = []\r\n            for node_id in frontier:\r\n                for edge in self.graph._adjacency.get(node_id, []):\r\n                    edge_key = (edge.source_id, edge.relationship_type, edge.target_id)\r\n                    if edge_key not in visited_edges:\r\n                        visited_edges.add(edge_key)\r\n                        if edge.target_id not in visited_nodes:\r\n                            visited_nodes.add(edge.target_id)\r\n                            next_frontier.append(edge.target_id)\r\n                    # Also check reverse direction\r\n                    for edge2 in self.graph._adjacency.get(edge.target_id, []):\r\n                        ekey2 = (edge2.source_id, edge2.relationship_type, edge2.target_id)\r\n                        if ekey2 not in visited_edges:\r\n                            visited_edges.add(ekey2)\r\n                            if edge2.target_id not in visited_nodes and len(visited_nodes) < max_nodes:\r\n                                visited_nodes.add(edge2.target_id)\r\n                                next_frontier.append(edge2.target_id)\r\n            frontier = next_frontier\r\n            if len(visited_nodes) >= max_nodes:\r\n                break\r\n\r\n        return {\r\n            \"nodes\": visited_nodes,\r\n            \"edges\": visited_edges,\r\n        }\r\n\r\n    def extract_subgraph_text(self, seed_ids: List[str], max_hops: int = 2) -> str:\r\n        subgraph = self.bfs_traverse(seed_ids, max_hops)\r\n        lines = []\r\n        for edge in subgraph[\"edges\"]:\r\n            s, rel, t = edge\r\n            s_name = self.graph.nodes.get(s, PropertyGraphNode(s)).properties.get(\"name\", s)\r\n            t_name = self.graph.nodes.get(t, PropertyGraphNode(t)).properties.get(\"name\", t)\r\n            lines.append(f\"({s_name}) --[{rel}]--> ({t_name})\")\r\n        return \"\\n\".join(lines)\r\n\r\n# Build a richer KG\r\ntraversal_kg = PropertyGraph()\r\nfor nid, node in {\r\n    \"p1\": PropertyGraphNode(\"p1\", [\"Drug\"], {\"name\": \"Paxlovid\"}),\r\n    \"p2\": PropertyGraphNode(\"p2\", [\"Company\"], {\"name\": \"Pfizer\"}),\r\n    \"p3\": PropertyGraphNode(\"p3\", [\"Drug\"], {\"name\": \"Remdesivir\"}),\r\n    \"p4\": PropertyGraphNode(\"p4\", [\"Company\"], {\"name\": \"Gilead\"}),\r\n    \"p5\": PropertyGraphNode(\"p5\", [\"Protein\"], {\"name\": \"ACE2\"}),\r\n    \"p6\": PropertyGraphNode(\"p6\", [\"Protein\"], {\"name\": \"Spike\"}),\r\n    \"p7\": PropertyGraphNode(\"p7\", [\"Disease\"], {\"name\": \"COVID-19\"}),\r\n}.items():\r\n    traversal_kg.add_node(node)\r\n\r\nedges = [\r\n    PropertyGraphEdge(\"p1\", \"p5\", \"targets\"),\r\n    PropertyGraphEdge(\"p1\", \"p7\", \"treats\"),\r\n    PropertyGraphEdge(\"p2\", \"p1\", \"develops\"),\r\n    PropertyGraphEdge(\"p3\", \"p7\", \"treats\"),\r\n    PropertyGraphEdge(\"p4\", \"p3\", \"develops\"),\r\n    PropertyGraphEdge(\"p1\", \"p6\", \"targets\"),\r\n]\r\nfor e in edges:\r\n    traversal_kg.add_edge(e)\r\n\r\ntraversal = GraphTraversalEngine(traversal_kg)\r\nsubgraph_text = traversal.extract_subgraph_text([\"p1\"], max_hops=2)\r\nprint(\"Subgraph from Paxlovid (2 hops):\")\r\nprint(subgraph_text)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1333-combining-vector-search-with-graph-context",
      children: "13.3.3 Combining Vector Search with Graph Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The hybrid approach: use vector search to find relevant text chunks AND relevant entities, then traverse the graph from those entities to add structured context."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\r\nclass HybridKGResult:\r\n    vector_chunks: List[Dict]\r\n    graph_context: str\r\n    entities_found: List[str]\r\n    fusion_text: str\r\n\r\nclass HybridKGRetriever:\r\n    def __init__(self, vector_store, graph: PropertyGraph, entity_linker: QueryEntityLinker,\r\n                 traversal_engine: GraphTraversalEngine):\r\n        self.vector_store = vector_store\r\n        self.graph = graph\r\n        self.entity_linker = entity_linker\r\n        self.traversal = traversal_engine\r\n\r\n    def retrieve(self, query: str, top_k_chunks: int = 3, max_graph_hops: int = 2) -> HybridKGResult:\r\n        # 1. Vector search for text chunks\r\n        vector_results = self.vector_store.search(query, top_k_chunks)\r\n\r\n        # 2. Link entities in the query\r\n        linked_entities = self.entity_linker.link(query)\r\n        entity_ids = [eid for eid, _, _ in linked_entities]\r\n\r\n        # 3. Traverse graph from linked entities\r\n        graph_context = \"\"\r\n        if entity_ids:\r\n            graph_context = self.traversal.extract_subgraph_text(entity_ids, max_graph_hops)\r\n\r\n        # 4. Fusion: combine vector chunks with graph context\r\n        chunk_text = \"\\n\\n\".join([r.get(\"text\", \"\") for r in vector_results])\r\n        if graph_context:\r\n            fusion = f\"\"\"Retrieved Documents:\r\n{chunk_text}\r\n\r\nKnowledge Graph Context:\r\n{graph_context}\"\"\"\r\n        else:\r\n            fusion = chunk_text\r\n\r\n        return HybridKGResult(\r\n            vector_chunks=vector_results,\r\n            graph_context=graph_context,\r\n            entities_found=[name for _, name, _ in linked_entities],\r\n            fusion_text=fusion,\r\n        )\r\n\r\nclass MockVectorStore:\r\n    def __init__(self):\r\n        self.docs = [\r\n            {\"id\": \"d1\", \"text\": \"Paxlovid is an antiviral drug developed by Pfizer for COVID-19.\", \"score\": 0.92},\r\n            {\"id\": \"d2\", \"text\": \"The drug targets the SARS-CoV-2 main protease enzyme.\", \"score\": 0.85},\r\n            {\"id\": \"d3\", \"text\": \"Clinical trials showed 89% reduction in hospitalization risk.\", \"score\": 0.78},\r\n            {\"id\": \"d4\", \"text\": \"Gilead Sciences developed Remdesivir as another treatment option.\", \"score\": 0.45},\r\n        ]\r\n\r\n    def search(self, query: str, top_k: int) -> List[Dict]:\r\n        return self.docs[:top_k]\r\n\r\nmock_vector_store = MockVectorStore()\r\nhybrid_kv_retriever = HybridKGRetriever(\r\n    vector_store=mock_vector_store,\r\n    graph=traversal_kg,\r\n    entity_linker=QueryEntityLinker(traversal_kg.nodes),\r\n    traversal_engine=traversal,\r\n)\r\n\r\nhybrid_result = hybrid_kv_retriever.retrieve(\"How does Paxlovid work against COVID-19?\")\r\nprint(f\"Entities found: {hybrid_result.entities_found}\")\r\nprint(f\"Vector chunks: {len(hybrid_result.vector_chunks)}\")\r\nprint(f\"Graph context:\\n{hybrid_result.graph_context[:200]}...\")\r\nprint(f\"\\nFusion text (first 300 chars):\\n{hybrid_result.fusion_text[:300]}...\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "134-kg-construction-pipeline",
      children: "13.4 KG Construction Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Building a production knowledge graph requires careful schema design, extraction at scale, efficient storage, and low-latency querying."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1341-schema-design",
      children: "13.4.1 Schema Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A KG schema defines the entity types, relation types, and property constraints — analogous to a database schema but for graphs."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\r\nclass KGEntityType:\r\n    name: str\r\n    properties: Dict[str, str]  # property_name -> data_type\r\n    required_properties: List[str] = field(default_factory=list)\r\n\r\n@dataclass\r\nclass KGRelationType:\r\n    name: str\r\n    domain: str  # source entity type\r\n    range: str   # target entity type\r\n    properties: Dict[str, str] = field(default_factory=dict)\r\n\r\nclass KGSchema:\r\n    def __init__(self):\r\n        self.entity_types: Dict[str, KGEntityType] = {}\r\n        self.relation_types: List[KGRelationType] = {}\r\n        self._relation_index: Dict[str, List[KGRelationType]] = defaultdict(list)\r\n\r\n    def register_entity_type(self, entity_type: KGEntityType) -> None:\r\n        self.entity_types[entity_type.name] = entity_type\r\n\r\n    def register_relation_type(self, relation_type: KGRelationType) -> None:\r\n        self.relation_types[relation_type] = relation_type\r\n        self._relation_index[relation_type.domain].append(relation_type)\r\n\r\n    def validate_triple(self, triple: Triple) -> Tuple[bool, str]:\r\n        \"\"\"Validate a triple against the schema.\"\"\"\r\n        # Check if subject/object entity types are registered (simplified)\r\n        return True, \"\"\r\n\r\n    def to_mermaid(self) -> str:\r\n        \"\"\"Generate a Mermaid ER diagram of the schema.\"\"\"\r\n        lines = [\"erDiagram\"]\r\n        for et_name, et in self.entity_types.items():\r\n            lines.append(f\"    {et_name} {{\")\r\n            for prop, dtype in et.properties.items():\r\n                lines.append(f\"        {dtype} {prop}\")\r\n            lines.append(f\"    }}\")\r\n\r\n        for rt in self.relation_types:\r\n            label = rt.name\r\n            lines.append(f\"    {rt.domain} ||--o{{ {rt.range} : \\\"{label}\\\"\")\r\n        return \"\\n\".join(lines)\r\n\r\nschema = KGSchema()\r\nschema.register_entity_type(KGEntityType(\"Drug\", {\"name\": \"string\", \"smiles\": \"string\", \"molecular_weight\": \"float\"}, [\"name\"]))\r\nschema.register_entity_type(KGEntityType(\"Company\", {\"name\": \"string\", \"headquarters\": \"string\", \"founded\": \"int\"}, [\"name\"]))\r\nschema.register_entity_type(KGEntityType(\"Protein\", {\"name\": \"string\", \"uniprot_id\": \"string\"}, [\"name\"]))\r\nschema.register_entity_type(KGEntityType(\"Disease\", {\"name\": \"string\", \"icd_code\": \"string\"}, [\"name\"]))\r\n\r\nschema.register_relation_type(KGRelationType(\"develops\", \"Company\", \"Drug\"))\r\nschema.register_relation_type(KGRelationType(\"treats\", \"Drug\", \"Disease\"))\r\nschema.register_relation_type(KGRelationType(\"targets\", \"Drug\", \"Protein\"))\r\n\r\nprint(\"Schema registered with 4 entity types and 3 relation types\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "erDiagram\r\n    Drug {\r\n        string name\r\n        string smiles\r\n        float molecular_weight\r\n    }\r\n    Company {\r\n        string name\r\n        string headquarters\r\n        int founded\r\n    }\r\n    Protein {\r\n        string name\r\n        string uniprot_id\r\n    }\r\n    Disease {\r\n        string name\r\n        string icd_code\r\n    }\r\n    Company ||--o{ Drug : \"develops\"\r\n    Drug ||--o{ Disease : \"treats\"\r\n    Drug ||--o{ Protein : \"targets\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1342-storage-with-networkx",
      children: "13.4.2 Storage with NetworkX"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NetworkX is a Python library for graph analytics. While not a production database, it is excellent for prototyping KG-RAG systems."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import networkx as nx\r\n\r\nclass NetworkXKG:\r\n    \"\"\"A knowledge graph backed by NetworkX with typed nodes and edges.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.graph = nx.MultiDiGraph()\r\n\r\n    def add_triple(self, triple: Triple) -> None:\r\n        self.graph.add_node(triple.subject, label=\"entity\")\r\n        self.graph.add_node(triple.object, label=\"entity\")\r\n        self.graph.add_edge(\r\n            triple.subject,\r\n            triple.object,\r\n            key=triple.predicate,\r\n            predicate=triple.predicate,\r\n            confidence=triple.confidence,\r\n            metadata=triple.metadata,\r\n        )\r\n\r\n    def load_triples(self, triples: List[Triple]) -> None:\r\n        for t in triples:\r\n            self.add_triple(t)\r\n\r\n    def get_entity_properties(self, entity: str) -> Dict:\r\n        \"\"\"Return properties of an entity node.\"\"\"\r\n        if entity not in self.graph:\r\n            return {}\r\n        return dict(self.graph.nodes[entity])\r\n\r\n    def get_neighbors(self, entity: str, relation: Optional[str] = None) -> List[Tuple[str, str, Dict]]:\r\n        \"\"\"Get all neighbors connected by an optional relation type.\"\"\"\r\n        neighbors = []\r\n        for _, target, data in self.graph.edges(entity, data=True):\r\n            if relation is None or data.get(\"predicate\") == relation:\r\n                neighbors.append((target, data.get(\"predicate\", \"\"), data))\r\n        return neighbors\r\n\r\n    def get_subgraph(self, seed_entities: List[str], max_hops: int = 2, max_nodes: int = 50) -> nx.MultiDiGraph:\r\n        \"\"\"Extract k-hop subgraph around seed entities using BFS.\"\"\"\r\n        nodes_to_include = set(seed_entities)\r\n        frontier = list(seed_entities)\r\n\r\n        for _ in range(max_hops):\r\n            if not frontier or len(nodes_to_include) >= max_nodes:\r\n                break\r\n            next_frontier = []\r\n            for node in frontier:\r\n                for neighbor in self.graph.neighbors(node):\r\n                    if neighbor not in nodes_to_include and len(nodes_to_include) < max_nodes:\r\n                        nodes_to_include.add(neighbor)\r\n                        next_frontier.append(neighbor)\r\n                # Also check predecessors\r\n                for pred in self.graph.predecessors(node):\r\n                    if pred not in nodes_to_include and len(nodes_to_include) < max_nodes:\r\n                        nodes_to_include.add(pred)\r\n                        next_frontier.append(pred)\r\n            frontier = next_frontier\r\n\r\n        return self.graph.subgraph(nodes_to_include).copy()\r\n\r\n    def shortest_path(self, source: str, target: str) -> List[str]:\r\n        \"\"\"Find shortest path between two entities.\"\"\"\r\n        try:\r\n            return nx.shortest_path(self.graph, source=source, target=target)\r\n        except (nx.NetworkXNoPath, nx.NodeNotFound):\r\n            return []\r\n\r\n    def page_rank(self, top_k: int = 10) -> List[Tuple[str, float]]:\r\n        \"\"\"Compute PageRank to find the most important entities.\"\"\"\r\n        pr = nx.pagerank(self.graph)\r\n        return sorted(pr.items(), key=lambda x: x[1], reverse=True)[:top_k]\r\n\r\n    def community_detection(self) -> Dict[str, int]:\r\n        \"\"\"Detect communities using label propagation.\"\"\"\r\n        from networkx.algorithms.community import label_propagation_communities\r\n        communities = label_propagation_communities(self.graph)\r\n        result = {}\r\n        for i, community in enumerate(communities):\r\n            for node in community:\r\n                result[node] = i\r\n        return result\r\n\r\n    def stats(self) -> Dict:\r\n        return {\r\n            \"nodes\": self.graph.number_of_nodes(),\r\n            \"edges\": self.graph.number_of_edges(),\r\n            \"density\": nx.density(self.graph),\r\n            \"is_connected\": nx.is_weakly_connected(self.graph) if self.graph.number_of_nodes() > 0 else False,\r\n        }\r\n\r\n# Build a small biomedical KG\r\nbiomed_kg = NetworkXKG()\r\nbiomed_triples = [\r\n    Triple(\"Paxlovid\", \"treats\", \"COVID-19\", 0.95),\r\n    Triple(\"Paxlovid\", \"targets\", \"SARS-CoV-2_Mpro\", 0.90),\r\n    Triple(\"Pfizer\", \"develops\", \"Paxlovid\", 0.99),\r\n    Triple(\"Remdesivir\", \"treats\", \"COVID-19\", 0.85),\r\n    Triple(\"Gilead\", \"develops\", \"Remdesivir\", 0.99),\r\n    Triple(\"ACE2\", \"binds\", \"Spike_Protein\", 0.95),\r\n    Triple(\"SARS-CoV-2\", \"uses\", \"ACE2\", 0.98),\r\n    Triple(\"SARS-CoV-2\", \"causes\", \"COVID-19\", 0.99),\r\n    Triple(\"mRNA_Vaccine\", \"targets\", \"Spike_Protein\", 0.95),\r\n    Triple(\"BioNTech\", \"develops\", \"mRNA_Vaccine\", 0.90),\r\n    Triple(\"Moderna\", \"develops\", \"mRNA_Vaccine\", 0.90),\r\n    Triple(\"WHO\", \"declared\", \"COVID-19_Pandemic\", 0.95),\r\n]\r\nbiomed_kg.load_triples(biomed_triples)\r\n\r\n# Analyze the graph\r\nsubgraph = biomed_kg.get_subgraph([\"Paxlovid\"], max_hops=2)\r\nprint(f\"Paxlovid subgraph: {subgraph.number_of_nodes()} nodes, {subgraph.number_of_edges()} edges\")\r\nprint(f\"KG stats: {biomed_kg.stats()}\")\r\nprint(f\"PageRank top-3: {biomed_kg.page_rank(3)}\")\r\n\r\n# Find connection between two entities\r\npath = biomed_kg.shortest_path(\"Paxlovid\", \"ACE2\")\r\nprint(f\"Shortest path Paxlovid -> ACE2: {' -> '.join(path) if path else 'No path'}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1343-sparql-querying-with-graph-data",
      children: "13.4.3 SPARQL Querying with Graph Data"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Even though we use NetworkX, we can implement SPARQL-like queries over the graph for integration with RDF-based systems."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SPARQLOnNetworkX:\r\n    \"\"\"Execute SPARQL-like queries on a NetworkX-backed KG.\"\"\"\r\n\r\n    def __init__(self, kg: NetworkXKG):\r\n        self.kg = kg\r\n\r\n    def select(self, select_vars: List[str], where_clause: Dict) -> List[Dict]:\r\n        \"\"\"Simulate a SELECT query with a simple WHERE filter.\r\n\r\n        where_clause example:\r\n        {\"predicate\": \"treats\", \"object\": \"COVID-19\"}\r\n        \"\"\"\r\n        results = []\r\n        for s, t, data in self.kg.graph.edges(data=True):\r\n            matches = True\r\n            if \"subject\" in where_clause and s != where_clause[\"subject\"]:\r\n                matches = False\r\n            if \"predicate\" in where_clause and data.get(\"predicate\") != where_clause[\"predicate\"]:\r\n                matches = False\r\n            if \"object\" in where_clause and t != where_clause[\"object\"]:\r\n                matches = False\r\n\r\n            if matches:\r\n                row = {}\r\n                for var in select_vars:\r\n                    if var == \"?subject\":\r\n                        row[var] = s\r\n                    elif var == \"?predicate\":\r\n                        row[var] = data.get(\"predicate\", \"\")\r\n                    elif var == \"?object\":\r\n                        row[var] = t\r\n                    elif var == \"?confidence\":\r\n                        row[var] = data.get(\"confidence\", 1.0)\r\n                results.append(row)\r\n        return results\r\n\r\n    def query_drugs_treating(self, disease: str) -> List[Dict]:\r\n        \"\"\"Find all drugs that treat a given disease.\"\"\"\r\n        return self.select(\r\n            select_vars=[\"?subject\", \"?predicate\", \"?object\", \"?confidence\"],\r\n            where_clause={\"predicate\": \"treats\", \"object\": disease},\r\n        )\r\n\r\n    def query_competitors(self, drug: str) -> List[Dict]:\r\n        \"\"\"Find competing drugs developed by different companies.\"\"\"\r\n        # Step 1: Find which disease this drug treats\r\n        disease_results = self.select(\r\n            select_vars=[\"?object\"],\r\n            where_clause={\"subject\": drug, \"predicate\": \"treats\"},\r\n        )\r\n        diseases = [r[\"?object\"] for r in disease_results]\r\n\r\n        # Step 2: Find all drugs that treat the same disease\r\n        competitors = []\r\n        for disease in diseases:\r\n            other_drugs = self.select(\r\n                select_vars=[\"?subject\"],\r\n                where_clause={\"predicate\": \"treats\", \"object\": disease},\r\n            )\r\n            for r in other_drugs:\r\n                if r[\"?subject\"] != drug:\r\n                    competitors.append(r)\r\n        return competitors\r\n\r\nsparql_nx = SPARQLOnNetworkX(biomed_kg)\r\ntreating_covid = sparql_nx.query_drugs_treating(\"COVID-19\")\r\nprint(\"Drugs treating COVID-19:\")\r\nfor r in treating_covid:\r\n    print(f\"  {r['?subject']}\")\r\n\r\ncompetitors = sparql_nx.query_competitors(\"Paxlovid\")\r\nprint(\"\\nCompetitors to Paxlovid:\")\r\nfor r in competitors:\r\n    print(f\"  {r['?subject']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1344-neo4j-integration",
      children: "13.4.4 Neo4j Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For production systems, Neo4j provides ACID-compliant graph storage with the Cypher query language."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Neo4jClientMock:\r\n    \"\"\"Mock Neo4j client simulating Cypher query execution.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.nodes: Dict[str, Dict] = {}\r\n        self.edges: List[Dict] = []\r\n\r\n    def create_node(self, node_id: str, labels: List[str], properties: Dict) -> None:\r\n        self.nodes[node_id] = {\"labels\": labels, \"properties\": properties}\r\n\r\n    def create_relationship(self, source_id: str, target_id: str, rel_type: str, properties: Dict = None) -> None:\r\n        self.edges.append({\r\n            \"source\": source_id,\r\n            \"target\": target_id,\r\n            \"type\": rel_type,\r\n            \"properties\": properties or {},\r\n        })\r\n\r\n    def run_cypher(self, query: str) -> List[Dict]:\r\n        \"\"\"Simulate Cypher queries for common patterns.\"\"\"\r\n        results = []\r\n\r\n        # MATCH (d:Drug)-[:treats]->(dis:Disease) WHERE dis.name = $disease RETURN d\r\n        if \"MATCH\" in query and \"WHERE\" in query:\r\n            disease_match = re.search(r\"name\\s*=\\s*['\\\"](.+?)['\\\"]\", query)\r\n            if disease_match:\r\n                disease = disease_match.group(1)\r\n                for edge in self.edges:\r\n                    if edge[\"type\"] == \"treats\":\r\n                        source = self.nodes.get(edge[\"source\"])\r\n                        target = self.nodes.get(edge[\"target\"])\r\n                        if target and target[\"properties\"].get(\"name\") == disease:\r\n                            results.append({\"drug\": source[\"properties\"] if source else {}})\r\n\r\n        # MATCH (c:Company)-[:develops]->(d:Drug)-[:treats]->(dis:Disease {name: $disease}) RETURN c, d\r\n        match_dis = re.search(r\"Disease\\s*\\{[^}]*name\\s*:\\s*['\\\"](.+?)['\\\"]\", query)\r\n        if match_dis and not results:\r\n            disease = match_dis.group(1)\r\n            for edge in self.edges:\r\n                if edge[\"type\"] == \"treats\":\r\n                    drug_target = self.nodes.get(edge[\"target\"])\r\n                    if drug_target and drug_target[\"properties\"].get(\"name\") == disease:\r\n                        drug_id = edge[\"source\"]\r\n                        # Find companies developing this drug\r\n                        for e2 in self.edges:\r\n                            if e2[\"type\"] == \"develops\" and e2[\"target\"] == drug_id:\r\n                                company = self.nodes.get(e2[\"source\"])\r\n                                drug = self.nodes.get(drug_id)\r\n                                if company and drug:\r\n                                    results.append({\r\n                                        \"company\": company[\"properties\"],\r\n                                        \"drug\": drug[\"properties\"],\r\n                                    })\r\n\r\n        return results\r\n\r\n# Populate mock Neo4j\r\nneo4j = Neo4jClientMock()\r\nneo4j.create_node(\"d1\", [\"Drug\"], {\"name\": \"Paxlovid\", \"smiles\": \"C1CC(=O)NC(=O)C1\"})\r\nneo4j.create_node(\"d2\", [\"Drug\"], {\"name\": \"Remdesivir\", \"smiles\": \"C1CC(=O)NC(=O)C2\"})\r\nneo4j.create_node(\"c1\", [\"Company\"], {\"name\": \"Pfizer\", \"headquarters\": \"New York\"})\r\nneo4j.create_node(\"c2\", [\"Company\"], {\"name\": \"Gilead\", \"headquarters\": \"Foster City\"})\r\nneo4j.create_node(\"dis1\", [\"Disease\"], {\"name\": \"COVID-19\", \"icd_code\": \"U07.1\"})\r\nneo4j.create_node(\"prot1\", [\"Protein\"], {\"name\": \"ACE2\", \"uniprot_id\": \"Q9BYF1\"})\r\n\r\nneo4j.create_relationship(\"d1\", \"dis1\", \"treats\", {\"stage\": \"approved\"})\r\nneo4j.create_relationship(\"d2\", \"dis1\", \"treats\", {\"stage\": \"approved\"})\r\nneo4j.create_relationship(\"c1\", \"d1\", \"develops\", {\"year\": 2021})\r\nneo4j.create_relationship(\"c2\", \"d2\", \"develops\", {\"year\": 2020})\r\nneo4j.create_relationship(\"d1\", \"prot1\", \"targets\", {\"mechanism\": \"protease_inhibitor\"})\r\n\r\nresults = neo4j.run_cypher(\"MATCH (d:Drug)-[:treats]->(dis:Disease) WHERE dis.name = 'COVID-19' RETURN d\")\r\nprint(\"Neo4j query results:\")\r\nfor r in results:\r\n    print(f\"  Drug: {r.get('drug', r)}\")\r\n\r\n# Multi-hop query\r\nresults2 = neo4j.run_cypher(\"MATCH (c:Company)-[:develops]->(d:Drug)-[:treats]->(dis:Disease {name: 'COVID-19'}) RETURN c, d\")\r\nprint(\"\\nCompanies developing COVID-19 drugs:\")\r\nfor r in results2:\r\n    print(f\"  {r.get('company', {}).get('name')} -> {r.get('drug', {}).get('name')}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "135-kg--vector-hybrid-architecture",
      children: "13.5 KG + Vector Hybrid Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The true power of KG-RAG comes from combining vector search with graph traversal in a unified retrieval pipeline."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1351-architecture-overview",
      children: "13.5.1 Architecture Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TB\r\n    subgraph Vector_Path\r\n        A[Query] --> B[Embedding Model]\r\n        B --> C[Vector Similarity Search]\r\n        C --> D[Top-K Text Chunks]\r\n    end\r\n\r\n    subgraph Graph_Path\r\n        A --> E[Entity Linker]\r\n        E --> F[KG Node Lookup]\r\n        F --> G[Graph Traversal BFS]\r\n        G --> H[Subgraph Extraction]\r\n    end\r\n\r\n    subgraph Fusion\r\n        D --> I[Context Fuser]\r\n        H --> I\r\n        I --> J[Structured + Unstructured Context]\r\n        J --> K[LLM]\r\n        K --> L[Answer]\r\n    end\r\n\r\n    style C fill:#f3e5f5,stroke:#7b1fa2\r\n    style G fill:#e1f5fe,stroke:#0288d1\r\n    style I fill:#fff3e0,stroke:#f57c00"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1352-unified-retriever-implementation",
      children: "13.5.2 Unified Retriever Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\r\nclass UnifiedKGVectorResult:\r\n    query: str\r\n    text_context: str\r\n    graph_context: str\r\n    entities: List[str]\r\n    relationships: List[str]\r\n    final_prompt: str\r\n\r\nclass UnifiedKGVectorRetriever:\r\n    def __init__(self, vector_db, kg: NetworkXKG, entity_linker: QueryEntityLinker,\r\n                 max_hops: int = 2, top_k_text: int = 3):\r\n        self.vector_db = vector_db\r\n        self.kg = kg\r\n        self.entity_linker = entity_linker\r\n        self.max_hops = max_hops\r\n        self.top_k_text = top_k_text\r\n\r\n    def retrieve(self, query: str) -> UnifiedKGVectorResult:\r\n        # 1. Vector search for text\r\n        text_results = self.vector_db.search(query, self.top_k_text)\r\n        text_context = \"\\n\\n\".join([r.get(\"text\", \"\") for r in text_results])\r\n\r\n        # 2. Entity linking\r\n        linked = self.entity_linker.link(query)\r\n        entity_ids = [eid for eid, _, _ in linked]\r\n        entity_names = [self.kg.graph.nodes.get(eid, {}).get(\"label\", eid) for eid in entity_ids]\r\n\r\n        # 3. Graph traversal\r\n        graph_context = \"\"\r\n        relationships = []\r\n        if entity_ids:\r\n            subgraph = self.kg.get_subgraph(entity_ids, self.max_hops)\r\n            lines = []\r\n            for s, t, data in subgraph.edges(data=True):\r\n                rel = data.get(\"predicate\", \"related_to\")\r\n                relationships.append(f\"({s})-{rel}->({t})\")\r\n                lines.append(f\"  - {s} --[{rel}]--> {t}\")\r\n            if lines:\r\n                graph_context = \"Knowledge Graph Context:\\n\" + \"\\n\".join(lines)\r\n\r\n        # 4. Build final prompt with both contexts\r\n        parts = []\r\n        if text_context:\r\n            parts.append(f\"Retrieved Documents:\\n{text_context}\")\r\n        if graph_context:\r\n            parts.append(graph_context)\r\n        if not parts:\r\n            parts.append(\"No context retrieved.\")\r\n\r\n        final_prompt = \"\\n\\n\".join(parts)\r\n\r\n        return UnifiedKGVectorResult(\r\n            query=query,\r\n            text_context=text_context,\r\n            graph_context=graph_context,\r\n            entities=entity_names,\r\n            relationships=relationships,\r\n            final_prompt=final_prompt,\r\n        )\r\n\r\nclass RichVectorStore:\r\n    def __init__(self):\r\n        self.docs = [\r\n            {\"id\": \"d1\", \"text\": \"Paxlovid is an oral antiviral developed by Pfizer. It inhibits the SARS-CoV-2 main protease.\",\r\n             \"score\": 0.92, \"embedding\": [0.1] * 128},\r\n            {\"id\": \"d2\", \"text\": \"Remdesivir is a broad-spectrum antiviral by Gilead Sciences. It is a nucleotide analog.\",\r\n             \"score\": 0.88, \"embedding\": [0.2] * 128},\r\n            {\"id\": \"d3\", \"text\": \"ACE2 is the cellular entry receptor for SARS-CoV-2. The Spike protein binds to ACE2.\",\r\n             \"score\": 0.85, \"embedding\": [0.15] * 128},\r\n            {\"id\": \"d4\", \"text\": \"mRNA vaccines encode the Spike protein to trigger immune response.\",\r\n             \"score\": 0.72, \"embedding\": [0.12] * 128},\r\n            {\"id\": \"d5\", \"text\": \"Clinical trials showed 89% reduction in COVID-19 hospitalization with Paxlovid.\",\r\n             \"score\": 0.68, \"embedding\": [0.09] * 128},\r\n        ]\r\n\r\n    def search(self, query: str, top_k: int) -> List[Dict]:\r\n        return self.docs[:top_k]\r\n\r\n# Build entity linker for our KG\r\nclass NetworkXEntityLinker:\r\n    def __init__(self, kg: NetworkXKG):\r\n        self.entities = {}  # lowercase_name -> node_id\r\n        for node in kg.graph.nodes():\r\n            self.entities[node.lower()] = node\r\n\r\n    def link(self, query: str) -> List[Tuple[str, str, float]]:\r\n        query_lower = query.lower()\r\n        results = []\r\n        for name_lower, node_id in self.entities.items():\r\n            if name_lower in query_lower:\r\n                results.append((node_id, name_lower, 1.0))\r\n        # Also extract capitalized phrases\r\n        for match in re.findall(r'\\b[A-Z][a-zA-Z0-9_-]+\\b', query):\r\n            ml = match.lower()\r\n            if ml in self.entities:\r\n                entry = (self.entities[ml], ml, 0.9)\r\n                if entry not in results:\r\n                    results.append(entry)\r\n        return results\r\n\r\n# Build the full system\r\nrich_vector_db = RichVectorStore()\r\nkg_for_unified = NetworkXKG()\r\nkg_for_unified.load_triples(biomed_triples)\r\nentity_linker_nx = NetworkXEntityLinker(kg_for_unified)\r\n\r\nunified_retriever = UnifiedKGVectorRetriever(\r\n    vector_db=rich_vector_db,\r\n    kg=kg_for_unified,\r\n    entity_linker=entity_linker_nx,\r\n    max_hops=2,\r\n    top_k_text=3,\r\n)\r\n\r\n# Test the unified retriever\r\ntest_queries = [\r\n    \"How does Paxlovid treat COVID-19?\",\r\n    \"What proteins are involved in SARS-CoV-2 infection?\",\r\n    \"Which companies developed treatments for COVID-19?\",\r\n]\r\n\r\nfor q in test_queries:\r\n    print(f\"\\n{'='*60}\")\r\n    print(f\"Query: {q}\")\r\n    result = unified_retriever.retrieve(q)\r\n    print(f\"  Entities found: {result.entities}\")\r\n    print(f\"  Relationships ({len(result.relationships)}):\")\r\n    for rel in result.relationships[:5]:\r\n        print(f\"    {rel}\")\r\n    print(f\"  Final prompt length: {len(result.final_prompt)} chars\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1353-graph-guided-re-ranking",
      children: "13.5.3 Graph-Guided Re-Ranking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The graph can also re-rank vector search results by comparing entities in the query with entities in retrieved documents."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class GraphGuidedReranker:\r\n    def __init__(self, kg: NetworkXKG):\r\n        self.kg = kg\r\n\r\n    def extract_document_entities(self, doc_text: str) -> Set[str]:\r\n        \"\"\"Extract entities from document text that exist in KG.\"\"\"\r\n        found = set()\r\n        for node in self.kg.graph.nodes():\r\n            if node.lower() in doc_text.lower():\r\n                found.add(node)\r\n        return found\r\n\r\n    def rerank(self, query: str, documents: List[Dict], top_k: int = 5) -> List[Dict]:\r\n        query_entities = self.extract_document_entities(query)\r\n\r\n        scored = []\r\n        for doc in documents:\r\n            doc_entities = self.extract_document_entities(doc.get(\"text\", \"\"))\r\n\r\n            # Graph relevance score: shared entities + entity proximity in KG\r\n            shared_entities = query_entities & doc_entities\r\n            entity_overlap = len(shared_entities) / max(len(query_entities | doc_entities), 1)\r\n\r\n            # Count graph connections between query and doc entities\r\n            cross_connections = 0\r\n            for qe in query_entities:\r\n                for de in doc_entities:\r\n                    if qe != de:\r\n                        path = self.kg.shortest_path(qe, de)\r\n                        if path:\r\n                            cross_connections += 1.0 / len(path)\r\n\r\n            original_score = doc.get(\"score\", 0)\r\n            graph_score = 0.3 * entity_overlap + 0.7 * min(cross_connections / 5.0, 1.0)\r\n            combined_score = 0.6 * original_score + 0.4 * graph_score\r\n\r\n            scored.append({\r\n                **doc,\r\n                \"original_score\": original_score,\r\n                \"graph_score\": round(graph_score, 3),\r\n                \"combined_score\": round(combined_score, 3),\r\n                \"shared_entities\": list(shared_entities),\r\n            })\r\n\r\n        scored.sort(key=lambda x: x[\"combined_score\"], reverse=True)\r\n        return scored[:top_k]\r\n\r\nreranker = GraphGuidedReranker(kg_for_unified)\r\nquery = \"How does Paxlovid work?\"\r\nreranked = reranker.rerank(query, rich_vector_db.docs, top_k=3)\r\nprint(\"Graph-guided re-ranking results:\")\r\nfor r in reranked:\r\n    print(f\"  Score: {r['combined_score']:.3f} (orig={r['original_score']:.2f}, graph={r['graph_score']:.3f})\")\r\n    print(f\"  Text: {r['text'][:80]}...\")\r\n    print(f\"  Shared entities: {r['shared_entities']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1354-multi-hop-question-answering",
      children: "13.5.4 Multi-Hop Question Answering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The graph enables answering questions that require multi-hop reasoning — traversing multiple relationships to connect entities."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MultiHopQA:\r\n    def __init__(self, kg: NetworkXKG, vector_store):\r\n        self.kg = kg\r\n        self.vector_store = vector_store\r\n        self.entity_linker = NetworkXEntityLinker(kg)\r\n\r\n    def answer(self, query: str, max_hops: int = 3) -> Dict:\r\n        # 1. Extract entities from query\r\n        linked = self.entity_linker.link(query)\r\n        if not linked:\r\n            return {\"answer\": \"No entities found in query.\", \"paths\": []}\r\n\r\n        # 2. Identify target (the unknown we're looking for)\r\n        # Simple heuristic: the last noun phrase or capitalized term not linked\r\n        targets = self._identify_target(query, linked)\r\n\r\n        # 3. Find paths from linked entities to target entities\r\n        paths = []\r\n        source_ids = [eid for eid, _, _ in linked]\r\n        for target in targets:\r\n            for source in source_ids:\r\n                path = self.kg.shortest_path(source, target)\r\n                if path and len(path) <= max_hops + 1:\r\n                    paths.append(path)\r\n\r\n        # 4. Generate answer from paths\r\n        if paths:\r\n            path_strs = [\" -> \".join(p) for p in paths]\r\n            return {\r\n                \"answer\": f\"Found {len(paths)} connection paths.\",\r\n                \"paths\": path_strs,\r\n                \"entities_found\": [eid for eid, _, _ in linked],\r\n            }\r\n        else:\r\n            return {\r\n                \"answer\": \"No direct paths found. Try a broader query.\",\r\n                \"paths\": [],\r\n                \"entities_found\": [eid for eid, _, _ in linked],\r\n            }\r\n\r\n    def _identify_target(self, query: str, linked: List) -> List[str]:\r\n        \"\"\"Identify potential target entities not yet linked.\"\"\"\r\n        linked_set = set(eid for eid, _, _ in linked)\r\n        candidates = re.findall(r'\\b[A-Z][a-zA-Z0-9_-]+\\b', query)\r\n        targets = []\r\n        for c in candidates:\r\n            c_lower = c.lower()\r\n            for node in self.kg.graph.nodes():\r\n                if node.lower() == c_lower and node not in linked_set:\r\n                    targets.append(node)\r\n        # If no targets found, return empty\r\n        return targets\r\n\r\nmulti_hop = MultiHopQA(kg_for_unified, rich_vector_db)\r\nresult = multi_hop.answer(\"How is Pfizer connected to COVID-19?\")\r\nprint(\"Multi-hop answer:\", result[\"answer\"])\r\nprint(\"Paths found:\")\r\nfor p in result[\"paths\"]:\r\n    print(f\"  {p}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1355-complete-kg-rag-pipeline",
      children: "13.5.5 Complete KG-RAG Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Putting everything together into a single end-to-end pipeline."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class CompleteKGRAGPipeline:\r\n    def __init__(self):\r\n        self.kg = NetworkXKG()\r\n        self.vector_store = RichVectorStore()\r\n        self.entity_linker = NetworkXEntityLinker(self.kg)\r\n        self.extraction_pipeline = KGExtractionPipeline()\r\n        self.reranker = GraphGuidedReranker(self.kg)\r\n        self.unified_retriever = UnifiedKGVectorRetriever(\r\n            vector_db=self.vector_store,\r\n            kg=self.kg,\r\n            entity_linker=self.entity_linker,\r\n            max_hops=2,\r\n            top_k_text=3,\r\n        )\r\n        self.multi_hop = MultiHopQA(self.kg, self.vector_store)\r\n\r\n    def ingest_documents(self, documents: List[str]) -> Dict:\r\n        \"\"\"Extract triples from documents and load into KG.\"\"\"\r\n        all_triples = []\r\n        for doc in documents:\r\n            triples = self.extraction_pipeline.process_document(doc)\r\n            all_triples.extend(triples)\r\n\r\n        self.kg.load_triples(all_triples)\r\n        return {\r\n            \"documents_processed\": len(documents),\r\n            \"triples_extracted\": len(all_triples),\r\n            \"kg_nodes\": self.kg.graph.number_of_nodes(),\r\n            \"kg_edges\": self.kg.graph.number_of_edges(),\r\n        }\r\n\r\n    def query(self, user_query: str, mode: str = \"hybrid\") -> Dict:\r\n        \"\"\"Query the KG-RAG system with different modes.\"\"\"\r\n        if mode == \"kg_only\":\r\n            # Direct graph traversal\r\n            linked = self.entity_linker.link(user_query)\r\n            if linked:\r\n                subgraph = self.kg.get_subgraph([eid for eid, _, _ in linked], max_hops=2)\r\n                edges_info = []\r\n                for s, t, data in subgraph.edges(data=True):\r\n                    edges_info.append(f\"{s} --[{data.get('predicate', '?')}]--> {t}\")\r\n                return {\r\n                    \"mode\": \"kg_only\",\r\n                    \"entities\": [eid for eid, _, _ in linked],\r\n                    \"relationships\": edges_info,\r\n                    \"context\": \"\\n\".join(edges_info),\r\n                }\r\n\r\n        elif mode == \"vector_only\":\r\n            # Pure vector search\r\n            results = self.vector_store.search(user_query, 3)\r\n            return {\r\n                \"mode\": \"vector_only\",\r\n                \"documents\": [r[\"text\"] for r in results],\r\n                \"context\": \"\\n\\n\".join([r[\"text\"] for r in results]),\r\n            }\r\n\r\n        else:  # hybrid (default)\r\n            unified = self.unified_retriever.retrieve(user_query)\r\n            # Re-rank using graph\r\n            reranked = self.reranker.rerank(user_query, self.vector_store.search(user_query, 5), top_k=3)\r\n            multi_hop_result = self.multi_hop.answer(user_query)\r\n\r\n            return {\r\n                \"mode\": \"hybrid\",\r\n                \"entities_found\": unified.entities,\r\n                \"text_context\": unified.text_context,\r\n                \"graph_context\": unified.graph_context,\r\n                \"reranked_docs\": reranked,\r\n                \"multi_hop_paths\": multi_hop_result[\"paths\"],\r\n                \"context\": unified.final_prompt,\r\n            }\r\n\r\n# Test the complete pipeline\r\npipeline = CompleteKGRAGPipeline()\r\n\r\n# Ingest some documents\r\ningest_result = pipeline.ingest_documents([\r\n    \"Pfizer developed Paxlovid to treat COVID-19. The drug targets the SARS-CoV-2 main protease.\",\r\n    \"Gilead Sciences created Remdesivir for COVID-19 treatment. It is a nucleotide analog.\",\r\n    \"ACE2 is the cellular receptor that SARS-CoV-2 uses to enter human cells.\",\r\n])\r\nprint(\"Ingestion stats:\", ingest_result)\r\n\r\n# Query in different modes\r\nfor mode in [\"kg_only\", \"vector_only\", \"hybrid\"]:\r\n    print(f\"\\n{'='*60}\")\r\n    print(f\"Mode: {mode}\")\r\n    result = pipeline.query(\"How does Paxlovid treat COVID-19?\", mode=mode)\r\n    if mode == \"hybrid\":\r\n        print(f\"  Entities: {result['entities_found']}\")\r\n        print(f\"  Multi-hop paths: {result['multi_hop_paths']}\")\r\n        print(f\"  Context length: {len(result['context'])} chars\")\r\n    else:\r\n        print(f\"  Result keys: {list(result.keys())}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Knowledge Graph RAG combines structured knowledge (entities and their typed relationships) with unstructured text retrieval (vector similarity). This hybrid approach handles multi-hop questions that pure vector search cannot answer."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The key components are: (1) a knowledge graph storing entities as nodes and relations as typed edges in RDF or property graph format; (2) an extraction pipeline using NER, relation extraction, entity resolution, and coreference resolution; (3) graph-enhanced retrieval that links query entities to KG nodes, traverses edges, and extracts relevant subgraphs; and (4) a fusion layer that combines vector chunks with structured graph context for the LLM."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "KG-RAG systems deliver higher precision on questions involving entity relationships, competitive analysis, drug discovery pathways, and any domain where structured connections between entities matter."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Takeaway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Graphs complement vectors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vectors find similarity, graphs find structure — use both"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Entity linking is critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Without linking query to KG nodes, the graph is invisible to retrieval"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Limit traversal depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-3 hops maximum — deeper traversal adds noise and latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Schema design upfront"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define entity and relation types before building the KG"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Normalize graph+vector scores"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph traversal scores and vector similarity scores need calibrated fusion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prefer property graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Property graphs are more flexible than pure RDF for RAG applications"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "kgrag01",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: How does Knowledge Graph RAG differ from standard RAG?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Standard RAG retrieves text chunks via vector similarity and feeds them to the LLM. This captures semantic similarity but misses structured relationships between entities. KG-RAG adds a knowledge graph layer: it links entities in the user query to nodes in the graph, traverses edges to extract a relevant subgraph, and fuses that structured context with vector-retrieved text. This enables answering multi-hop questions like \"Which drugs target the same protein as Drug X but were developed by different companies?\" — a query that requires traversing three relationships (drug-targets-protein, company-develops-drug) that no single text chunk captures."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "kgrag02",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: What are the main components of a KG-RAG pipeline?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "A KG-RAG pipeline has four stages: (1) KG Construction — extract entities via NER, extract relations via pattern matching or LLM, resolve entities to canonical IDs, and load triples into a graph database (Neo4j) or in-memory graph (NetworkX). (2) Entity Linking — at query time, identify which KG entities appear in the user query using string matching, embedding similarity, or LLM-based linking. (3) Graph Traversal — from linked seed entities, perform BFS traversal for 2-3 hops to extract a relevant subgraph, optionally pruning low-confidence edges. (4) Fusion — combine the structured subgraph with vector-retrieved text chunks into a single context for the LLM. Some systems also incorporate graph-guided re-ranking, where graph relevance scores adjust vector search ranking."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "kgrag03",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: How do you extract a knowledge graph from unstructured text?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Extraction follows a pipeline: (1) Named Entity Recognition (NER) identifies typed spans like Person, Organization, Drug, Disease using models like spaCy, Stanford NER, or LLM-based extraction. (2) Relation Extraction identifies connections between entity pairs using pattern matching (\"developed by\", \"treats\"), dependency parsing, or fine-tuned models like REBEL or LLM prompt-based extraction. (3) Entity Resolution normalizes surface forms to canonical IDs: \"Pfizer\" and \"Pfizer Inc.\" map to the same node. (4) Coreference Resolution links pronouns (\"it\", \"they\") to their antecedents. The output is a set of triples (subject, predicate, object) loaded into a graph store. Quality depends heavily on domain-specific NER models and high-confidence relation extraction thresholds — noisy extraction produces unreliable KGs."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "kgrag04",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: What are the trade-offs between RDF and property graphs for KG-RAG?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "RDF (Resource Description Framework) uses triples with global URIs, is W3C-standard, and queries via SPARQL. It excels in linked data integration and semantic reasoning (inference over subclass hierarchies). However, RDF is verbose and has no native property support on edges — you need reification patterns. Property graphs (Neo4j, ArangoDB) support key-value properties on both nodes and edges, making them more natural for RAG applications where you need confidence scores, timestamps, or evidence text on each relationship. Property graphs query via Cypher (declarative, SQL-like) which is easier for developers. For KG-RAG, property graphs are generally preferred because of their flexibility and lower complexity for the traversal-heavy workloads common in retrieval."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "kgrag05",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How do you combine vector similarity scores with graph traversal scores?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "This is the central fusion problem in KG-RAG. Three approaches exist: (1) Sequential — run vector search first, extract entities from top chunks, then traverse the graph from those entities. The final context contains both sources. (2) Weighted — compute a normalized graph relevance score (overlap between query entities and document entities, or shortest-path distance) and combine with vector similarity as: combined_score = alpha * vec_score + (1-alpha) * graph_score. (3) Graph-guided re-ranking — use vector search for initial candidate retrieval, then re-rank using graph-based features like entity overlap count, path length, or graph PageRank score. The optimal alpha depends on the domain; biomedical literature works well with alpha=0.6 (favor vector search) while competitive intelligence favors graph scores more heavily."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "kgrag06",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: What is entity resolution and why is it critical for KG-RAG?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Entity resolution (also called entity linking or deduplication) maps text mentions to their canonical entity IDs in the knowledge graph. For example, \"Pfizer\", \"Pfizer Inc.\", and \"Pfizer, Inc.\" should all resolve to the same node. Without resolution, the graph fragments — a query mentioning \"AI\" matches nothing if the graph stores \"Artificial Intelligence\". Resolution techniques range from dictionary-based exact match (fast, high precision but low recall), through fuzzy string matching (Levenshtein, Jaro-Winkler for typos), to embedding-based matching where both mention and entity names are embedded and compared via cosine similarity. Production systems use a tiered approach: exact-match cache first, then fuzzy dictionary, then embedding model as a fallback. Resolution accuracy directly determines KG-RAG quality — missed links mean empty graph traversal, while wrong links inject irrelevant context."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "kgrag07",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: How do you handle large-scale knowledge graphs in production?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "For production KG-RAG with millions of entities, use a native graph database: Neo4j (Cypher), Amazon Neptune (SPARQL/Gremlin), or ArangoDB (AQL). Key optimizations: (1) Index critical properties — create indexes on entity names, types, and frequently queried properties to avoid full graph scans. (2) Pre-compute entity embeddings — store vector embeddings for each entity node and use vector similarity for entity linking at query time. (3) Limit BFS depth — hard-cap traversal to 2-3 hops with configurable edge type filtering to avoid fan-out explosion (a \"Person\" node might connect to thousands of \"Publication\" nodes). (4) Cache frequent subgraphs — if certain entity neighborhoods are repeatedly queried, cache the subgraph structure. (5) Partition the graph by domain — biomedical, legal, and technical KGs should be separate to keep traversal focused. Latency targets: entity linking < 50ms, graph traversal < 100ms, total fusion < 200ms."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "kgrag08",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How do you evaluate a KG-RAG system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Evaluation covers both retrieval and generation quality. For retrieval: measure entity linking accuracy (precision and recall of linked entities), subgraph relevance (whether extracted subgraph contains the answer entities), and retrieval recall (does combining vector + graph retrieve the relevant information?). For generation: use standard RAG metrics — answer faithfulness (is the answer grounded in context?), answer relevance (does it address the query?), and context precision. A KG-RAG-specific metric is multi-hop accuracy: the fraction of multi-hop questions answered correctly. Create a test set of 100+ questions grouped by complexity: single-hop (1 relation), two-hop (2 relations), and three-hop. Compare KG-RAG vs pure vector RAG on each group — KG-RAG should dramatically outperform on multi-hop questions (2-3x improvement) while matching vector RAG on simple factoid questions."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "kgrag09",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: What are the common failure modes of KG-RAG?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Six common failure modes: (1) Entity linking misses — query entities are not in the KG or the linker fails, resulting in zero graph context. Mitigation: maintain an alias dictionary and use embedding-based linking. (2) Incomplete KG — the graph only covers part of the domain, making traversal useless for out-of-KG topics. Mitigation: clearly define KG scope and fall back to pure vector search. (3) Traversal explosion — BFS from a high-degree entity (e.g., \"COVID-19\" connected to thousands of papers) produces an enormous subgraph that overwhelms the LLM context. Mitigation: limit max nodes, require minimum edge confidence, and prune by relevance. (4) Noisy extraction — erroneous triples from poor NER/relation extraction poison the graph. Mitigation: set high confidence thresholds and include manual curation. (5) Stale graph — the KG reflects outdated knowledge. Mitigation: refresh triples from new documents periodically. (6) Context formatting — the LLM cannot effectively use structured graph data in its text prompt. Mitigation: format subgraphs as natural language sentences (\"Pfizer develops Paxlovid\") rather than raw triples."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "kgrag10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How does KG-RAG scale to real-world enterprise knowledge bases?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Enterprise KG-RAG requires a distributed architecture. The KG itself runs on a clustered graph database (Neo4j Aura, Amazon Neptune) with read replicas for query scalability. Entity linking uses a dedicated vector index over entity embeddings (stored in Pinecone or Qdrant) with sharding by entity type for low latency. The fusion layer is a stateless microservice that accepts a query, fans out to both vector and graph stores, merges results, and returns a unified context. Caching is critical — cache entity linking results for frequent query terms (cache hit rate > 60% reduces p95 latency from 300ms to 80ms). For very large graphs (100M+ nodes), use graph partitioning and limit each query to a single partition based on entity type (e.g., only traverse the \"drug-disease\" subgraph, not the entire graph). Incremental ingestion — new documents are processed in micro-batches (every 5 minutes) to update both the vector index and the KG with newly extracted triples."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "kgrag-s13-quiz1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " What is the atomic unit of a knowledge graph?"]
      }), "\nA. Document\nB. Triple (subject, predicate, object)\nC. Embedding vector\nD. Chunk of text\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "kgrag-s13-quiz2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " Which component maps text mentions to canonical entities in a knowledge base?"]
      }), "\nA. Named Entity Recognition\nB. Relation Extraction\nC. Entity Resolution\nD. Coreference Resolution\nAnswer: C\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "kgrag-s13-quiz3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " What is the main advantage of KG-RAG over standard RAG?"]
      }), "\nA. Lower latency\nB. Structured multi-hop reasoning over entity relationships\nC. Lower storage cost\nD. Simpler architecture\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "kgrag-s13-quiz4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " Which query language is associated with RDF knowledge graphs?"]
      }), "\nA. SQL\nB. Cypher\nC. SPARQL\nD. GraphQL\nAnswer: C\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "kgrag-s13-quiz5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " What is a recommended maximum traversal depth for subgraph extraction in KG-RAG?"]
      }), "\nA. 1 hop\nB. 2-3 hops\nC. 10 hops\nD. Unlimited\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Build a Mini KG"
          }), ": Create a NetworkX knowledge graph with 15 triples about your favorite domain (sports, movies, science). Implement functions for entity linking, 2-hop BFS traversal, and subgraph-to-text conversion. Test with 5 queries."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Entity Extraction Pipeline"
          }), ": Write a pipeline that processes 10 news articles, extracts entities and relations using spaCy or regex patterns, resolves aliases, and loads triples into a NetworkX graph. Report the number of unique entities and triples extracted."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-Hop Comparison"
          }), ": Build 10 multi-hop questions and compare answer quality: standard vector RAG vs KG-RAG vs hybrid. For each question, record whether the correct answer appears in the top-3 retrieved chunks for each method."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Graph-Guided Reranker"
          }), ": Implement a reranker that takes vector search results and re-scores them based on shared entities with the query. Use PageRank or degree centrality as a node importance signal. Measure MRR improvement over pure vector search on 20 test queries."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Neo4j Integration Setup"
          }), ": Write a script that connects to Neo4j (or its mock), loads a schema with 3 entity types and 3 relation types, inserts 20 triples, and executes 5 Cypher queries. Convert results into natural language context for an LLM."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Entity linking fails silently — query entities not in the KG produce zero graph context with no warning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BFS traversal depth too deep — 4+ hops produces enormous, noisy subgraphs that exceed LLM context windows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Schema-less KG construction — without typed entities and relations, traversal becomes unpredictable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ignoring graph sparsity — if the KG has low coverage, hybrid mode degrades to pure vector search anyway"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not normalizing graph scores — graph traversal produces unbounded scores that cannot fuse with bounded vector similarity scores"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Core principle"
        }), ": Knowledge Graph RAG adds structured entity-relationship context to vector retrieval"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implementation pattern"
        }), ": NER -> relation extraction -> entity resolution -> triple loading -> entity linking -> traversal -> fusion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity"
        }), ": Entity linking O(E) for dictionary, O(N log N) for BFS traversal, O(K log K) for fusion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Application"
        }), ": Drug discovery, legal research, competitive intelligence, scientific literature QA"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview"
        }), ": Frequently asked in AI engineering roles at biotech, pharma, and enterprise search companies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edge cases"
        }), ": Empty KG, high-degree nodes (hub entities), missing entity links"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Related concepts"
        }), ": Graph neural networks, SPARQL, Cypher, semantic web, linked data"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "placement-section",
      children: "Placement Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "top-10-interview-questions",
      children: "Top 10 Interview Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "google-style",
      children: "Google Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Explain this topic in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function in this chapter."
          }), " — Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "**What are the common pitfalls when engineers first learn ** — List 3-4, then explain how you would prevent each in a code review."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "amazon-style",
      children: "Amazon Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Describe a production bug caused by misunderstanding this technique. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique from 10 users to 10 million?"
          }), " — Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "microsoft-style",
      children: "Microsoft Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Compare this approach with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component built on this."
          }), " — Unit, integration, property-based tests; mocking boundaries; golden files for outputs."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "nvidia-style",
      children: "NVIDIA Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How does Knowledge Graph RAG behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of this technique run faster on GPU hardware?"
          }), " — Batch operations, vectorization, avoiding Python loops, reducing data movement."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ai-startup-style",
      children: "AI Startup Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write the smallest possible implementation of this technique that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name the technique explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Knowledge Graph RAG\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Knowledge Graph RAG to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Knowledge Graph RAG (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Knowledge Graph RAG and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Knowledge Graph RAG-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic problem in this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Knowledge Graph RAG in production today?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test your environment (Python, editor, internet) 15 minutes before the interview."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Knowledge Graph RAG builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Knowledge Graph RAG before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Knowledge Graph RAG is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Knowledge Graph RAG in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize this chapter's content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Knowledge Graph RAG is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 13 Knowledge Graph Rag is ___. — Answer: O(V+E) for BFS/DFS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 13 Knowledge Graph Rag is ___. — Answer: disconnected graph, cycles, negative weights"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Knowledge Graph RAG issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Knowledge Graph RAG in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Knowledge Graph RAG that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of this technique is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Knowledge Graph RAG in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Knowledge Graph RAG and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of this technique on an empty input?"
        }), " — Trace through the code: it should return the documented default (None, 0, empty collection) without raising."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output when the input is at the boundary value?"
        }), " — Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What does the implementation return when given invalid input types?"
        }), " — With type hints and validation, it raises a clear error; without, it may fail silently."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output for the sample input given in the chapter's Examples section?"
        }), " — Re-run the chapter's example code and compare against the documented output."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the time complexity output when you profile the implementation at 10x input size?"
        }), " — Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "difficulty-level",
      children: "Difficulty Level"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Takes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Beginner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-2 sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read theory, run the chapter examples, solve the Easy exercises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-5 sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete Medium exercises, explain Knowledge Graph RAG to someone else"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1+ week"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solve Hard exercises, optimize for real datasets, answer interview follow-ups"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tips--tricks",
      children: "Tips & Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always write a one-line example of Knowledge Graph RAG from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Knowledge Graph RAG when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Knowledge Graph RAG twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Knowledge Graph RAG snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Knowledge Graph RAG listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Knowledge Graph RAG to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Knowledge Graph RAG by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Knowledge Graph RAG to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lewis et al. (2020) 'Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks' — the original RAG paper"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RAGAS framework docs: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.ragas.io",
          children: "https://docs.ragas.io"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["LangChain RAG tutorial: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://python.langchain.com/docs/tutorials/rag",
          children: "https://python.langchain.com/docs/tutorials/rag"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pinecone learning center: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.pinecone.io/learn",
          children: "https://www.pinecone.io/learn"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'Advanced RAG Techniques' by Andrei Lopatenko (Towards Data Science) Graph RAG"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 12 — builds the foundation for 13 Knowledge Graph Rag"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 13 Knowledge Graph Rag with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 13 Knowledge Graph Rag fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 13 Knowledge Graph Rag"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 13 Knowledge Graph Rag"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 13 Knowledge Graph Rag?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 13 Knowledge Graph Rag?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 13 Knowledge Graph Rag asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 13 Knowledge Graph Rag?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Knowledge Graph RAG is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Knowledge Graph RAG."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Production correctness means handling edge cases, not just the happy path."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview answers should start with the definition, then the example, then the trade-offs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Revisit this chapter after finishing the module; the context from later chapters deepens understanding."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "historical-context",
      children: "Historical Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Knowledge Graph RAG emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Knowledge Graph RAG today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Knowledge Graph RAG — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Knowledge Graph RAG changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sanitize retrieved content before injecting into prompts — malicious documents can contain prompt injection attacks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement access control on the vector index — users should only retrieve documents they are authorized to see"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never log full retrieved chunks if they contain PII or confidential data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rate-limit retrieval endpoints to prevent data exfiltration via repeated queries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate chunk metadata (source, date) to prevent poisoned knowledge base attacks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RAG is essentially a learned retrieval + conditional generation pipeline — the retriever acts as a soft attention over the entire knowledge base"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Embedding quality directly determines retrieval quality: better embeddings (e.g., text-embedding-3-large vs ada-002) improve recall@5 by 10-20%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The LLM generator is conditioned on retrieved context — this is analogous to cross-attention in encoder-decoder transformers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chunk size is a hyperparameter: smaller chunks improve precision, larger chunks improve recall — tune like any ML hyperparameter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reranking (cross-encoder) is the equivalent of a second-stage classifier that re-scores retrieved candidates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "13 Knowledge Graph Rag is like a GPS navigation system"
          }), ": you define the destination (goal), the system plans the route (algorithm), and recalculates when you take a wrong turn (error handling)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Complexity is like a restaurant kitchen"
          }), ": a single chef (O(n)) handles small orders fine, but 1000 simultaneous orders need parallel chefs (O(log n) with proper indexing)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Edge cases are like stress tests"
          }), ": the happy path is a calm day, but production is Black Friday — design for the worst case."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The chapter roadmap is a subway map"
          }), ": each section is a station, and skipping one means you miss the connection to the next destination.## Capstone Project Link"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/Raushan666java/ai-engineering-journey",
            children: "Module Capstone: End-to-End Project"
          }), " — this chapter contributes the Knowledge Graph RAG skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-13knowledgegraphrag-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Knowledge Graph RAG in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "RAG (Retrieval-Augmented Generation) grounds LLM responses in external documents retrieved at query time, reducing hallucination by 40-80% vs zero-shot generation."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-13knowledgegraphrag-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with \n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Retrieving too many chunks (k>10) dilutes relevance and exceeds token limits. Always start with k=3-5 and tune based on recall@k on a validation set."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-13knowledgegraphrag-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Knowledge Graph RAG approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Retrieval: O(log n) with ANN index (HNSW/IVF). Embedding: O(n*d) where d=embedding dim. Generation: O(context_len^2) attention."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-13knowledgegraphrag-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Knowledge Graph RAG NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "RAG is NOT the right choice when: (1) the knowledge base is tiny (<100 docs) and fits in context, (2) you need the model to learn new reasoning patterns (use fine-tuning), (3) sub-100ms latency is required."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-13knowledgegraphrag-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Knowledge Graph RAG applied in a real production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Production RAG: LangChain/LlamaIndex for orchestration, Pinecone/Weaviate/Qdrant for vector storage, sentence-transformers for embeddings, RAGAS for evaluation."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Knowledge Graph RAG (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Knowledge Graph RAG (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Knowledge Graph RAG-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Knowledge Graph RAG in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LangChain"
        }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "LlamaIndex"
        }), " — RAG orchestration frameworks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pinecone"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Weaviate"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Qdrant"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Chroma"
        }), " — vector databases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "sentence-transformers"
        }), " — open-source embedding models"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RAGAS"
        }), " — RAG evaluation framework"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FAISS"
        }), " — Facebook's fast similarity search library Graph RAG"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 1"
        }), ": Reproduce the failure with the smallest possible input — isolate the bug before changing any code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 2"
        }), ": Add structured logging at each stage of the 13 Knowledge Graph Rag pipeline to identify exactly where the failure occurs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 3"
        }), ": Check the Common Mistakes section — 80% of bugs match one of those patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 4"
        }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pdb.set_trace()"
        }), " or your IDE debugger to inspect intermediate values at the failure point."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 5"
        }), ": For performance issues, profile with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cProfile"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "py-spy"
        }), " before optimizing — never guess at bottlenecks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 6"
        }), ": Write a regression test that reproduces the bug before fixing it — this prevents recurrence."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mock-interview-section",
      children: "Mock Interview Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 1 — Screening (15 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the core idea in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Knowledge Graph RAG."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the complexity of your example?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 2 — Coding (45 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve the Medium exercise from this chapter under time pressure."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State your assumptions, then implement with type hints."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test with edge cases: empty input, boundary values, invalid input."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 3 — Behavioral + System (30 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tell me about a time you debugged a Knowledge Graph RAG problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Knowledge Graph RAG is used at scale?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What metrics would you monitor?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Evaluation rubric"
      }), ": correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "optimized-implementation",
      children: "Optimized Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_13_knowledge_graph_rag(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 13 Knowledge Graph Rag.\r\n\r\n    Key concepts: vertices, edges, BFS, DFS, shortest path\r\n    Complexity: O(V+E) for BFS/DFS\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 13 Knowledge Graph Rag here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keeps the function signature stable so tests written against it stay valid."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handles the empty-input contract explicitly."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add unit tests for the edge cases before implementing the logic (test-first)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "evaluation-metrics",
      children: "Evaluation Metrics"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Skill"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Test"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concept recall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain Knowledge Graph RAG without notes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-second explanation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code fluency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write the chapter example from memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No syntax errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle empty/invalid input in exercises"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All cases pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State time/space for the standard approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correct big-O"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interview readiness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Answer 5 Interview Q&A questions out loud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fluent, structured answers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter quiz score after 3 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80%+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-examples",
      children: "Real-World Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Notion AI"
        }), " uses RAG to answer questions over a user's entire workspace without retraining"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub Copilot Chat"
        }), " retrieves relevant code snippets from the repo before generating answers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stripe Docs"
        }), " uses RAG to ground answers in official API documentation, reducing hallucinated API calls"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Morgan Stanley"
        }), " deployed RAG over 100K+ financial research documents for advisor Q&A"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": describe RAG as 'grounding LLM outputs in evidence' — interviewers want to hear faithfulness and context precision metrics"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/14-graphrag",
        children: "Microsoft GraphRAG"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Knowledge Graph RAG, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Knowledge Graph RAG depends on input size and distribution — always benchmark for your own data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone."
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