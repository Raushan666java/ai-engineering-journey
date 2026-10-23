"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[2325],{

/***/ 25853
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_12_rag_vector_databases_03_vector_database_basics_md_c95_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-12-rag-vector-databases-03-vector-database-basics-md-c95.json
const site_docs_courses_ai_engineering_placement_12_rag_vector_databases_03_vector_database_basics_md_c95_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/rag-vector-databases/03-vector-database-basics","title":"Vector Database Basics","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/12-rag-vector-databases/03-vector-database-basics.md","sourceDirName":"courses/ai-engineering-placement/12-rag-vector-databases","slug":"/ai-engineering-placement/12-rag-vector-databases/03-vector-database-basics","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/03-vector-database-basics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":160,"frontMatter":{"id":"03-vector-database-basics","slug":"/ai-engineering-placement/12-rag-vector-databases/03-vector-database-basics","title":"Vector Database Basics","sidebar_label":"Vector Database Basics","sidebar_position":160},"sidebar":"placementSidebar","previous":{"title":"Embedding Models","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/02-embedding-models"},"next":{"title":"Chunking Strategies","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/04-chunking-strategies"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/12-rag-vector-databases/03-vector-database-basics.md


const frontMatter = {
	id: '03-vector-database-basics',
	slug: '/ai-engineering-placement/12-rag-vector-databases/03-vector-database-basics',
	title: 'Vector Database Basics',
	sidebar_label: 'Vector Database Basics',
	sidebar_position: 160
};
const contentTitle = 'Vector Database Basics';

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
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "3.1 Vector Database Architecture",
  "id": "31-vector-database-architecture",
  "level": 2
}, {
  "value": "Core Components",
  "id": "core-components",
  "level": 3
}, {
  "value": "3.2 Database Comparison",
  "id": "32-database-comparison",
  "level": 2
}, {
  "value": "3.2.1 Feature Comparison",
  "id": "321-feature-comparison",
  "level": 3
}, {
  "value": "3.2.2 Local Vector Database (Chroma Example)",
  "id": "322-local-vector-database-chroma-example",
  "level": 3
}, {
  "value": "3.3 Indexing Algorithms",
  "id": "33-indexing-algorithms",
  "level": 2
}, {
  "value": "3.3.1 Flat (Brute Force)",
  "id": "331-flat-brute-force",
  "level": 3
}, {
  "value": "3.3.2 IVF (Inverted File Index)",
  "id": "332-ivf-inverted-file-index",
  "level": 3
}, {
  "value": "3.3.3 HNSW (Hierarchical Navigable Small World)",
  "id": "333-hnsw-hierarchical-navigable-small-world",
  "level": 3
}, {
  "value": "3.3.4 Index Comparison",
  "id": "334-index-comparison",
  "level": 3
}, {
  "value": "3.4 Schema Design",
  "id": "34-schema-design",
  "level": 2
}, {
  "value": "3.4.1 Collection Schema",
  "id": "341-collection-schema",
  "level": 3
}, {
  "value": "3.4.2 Metadata Indexing",
  "id": "342-metadata-indexing",
  "level": 3
}, {
  "value": "3.4.3 Payload Storage (Qdrant-style)",
  "id": "343-payload-storage-qdrant-style",
  "level": 3
}, {
  "value": "3.5 CRUD Operations",
  "id": "35-crud-operations",
  "level": 2
}, {
  "value": "3.5.1 Insert with Batching",
  "id": "351-insert-with-batching",
  "level": 3
}, {
  "value": "3.5.2 Scroll / Pagination",
  "id": "352-scroll--pagination",
  "level": 3
}, {
  "value": "3.5.3 Bulk Export",
  "id": "353-bulk-export",
  "level": 3
}, {
  "value": "3.6 Scaling Strategies",
  "id": "36-scaling-strategies",
  "level": 2
}, {
  "value": "3.6.1 Sharding",
  "id": "361-sharding",
  "level": 3
}, {
  "value": "3.6.2 Replication",
  "id": "362-replication",
  "level": 3
}, {
  "value": "3.6.3 Hybrid Cloud Strategy",
  "id": "363-hybrid-cloud-strategy",
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
        id: "vector-database-basics",
        children: "Vector Database Basics"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Understand vector database architecture and key concepts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare vector databases (Pinecone, Qdrant, Weaviate, Milvus, Chroma)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement vector indexing with HNSW, IVF, and brute-force search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design collection schemas with metadata filtering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Execute CRUD operations on vector data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scale vector search for production workloads"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval-Augmented Generation lets LLMs answer questions about your private data. Vector databases store embeddings for semantic search. This module covers the complete RAG pipeline from chunking to reranking."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "3.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vector DB Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Storage, indexing, query engine, metadata store"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database Comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pinecone, Qdrant, Weaviate, Milvus, Chroma"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indexing Algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HNSW, IVF, Flat, DiskANN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collections, vectors, metadata, payload"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRUD Operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert, update, delete, query with filters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scaling Strategies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sharding, replication, hybrid cloud"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    A[Raw Text] --> B[Embedding Model]\r\n    B --> C[Vector + Metadata]\r\n    C --> D[Vector Database]\r\n    D --> E[Index Builder]\r\n    E --> F[HNSW Graph]\r\n    E --> G[IVF Clusters]\r\n    F --> H[Query Engine]\r\n    G --> H\r\n    H --> I[Similarity Search]\r\n    I --> J[Ranked + Filtered Results]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "31-vector-database-architecture",
      children: "3.1 Vector Database Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A vector database is purpose-built for storing and searching vector embeddings efficiently. Unlike traditional databases that search exact matches, vector databases find the nearest neighbors in high-dimensional space."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "core-components",
      children: "Core Components"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Storage Layer"
      }), ": Persists vectors, metadata, and indexes to disk or memory."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Index Builder"
      }), ": Constructs approximate nearest neighbor (ANN) indexes for fast search."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Query Engine"
      }), ": Accepts query vectors, runs ANN search, applies metadata filters, returns ranked results."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metadata Store"
      }), ": Manages non-vector attributes (source, date, category) for filtering."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\r\nfrom typing import List, Dict, Optional, Any\r\nimport numpy as np\r\nimport time\r\n\r\n@dataclass\r\nclass VectorRecord:\r\n    id: str\r\n    vector: List[float]\r\n    metadata: Dict[str, Any] = field(default_factory=dict)\r\n\r\nclass VectorDatabase:\r\n    def __init__(self, name: str, dimension: int):\r\n        self.name = name\r\n        self.dimension = dimension\r\n        self.records: Dict[str, VectorRecord] = {}\r\n        self.index = None\r\n\r\n    def insert(self, record: VectorRecord) -> bool:\r\n        if len(record.vector) != self.dimension:\r\n            raise ValueError(f\"Expected dimension {self.dimension}, got {len(record.vector)}\")\r\n        self.records[record.id] = record\r\n        return True\r\n\r\n    def delete(self, record_id: str) -> bool:\r\n        return self.records.pop(record_id, None) is not None\r\n\r\n    def get(self, record_id: str) -> Optional[VectorRecord]:\r\n        return self.records.get(record_id)\r\n\r\n    def size(self) -> int:\r\n        return len(self.records)\r\n\r\ndb = VectorDatabase(\"my-collection\", dimension=384)\r\nrec = VectorRecord(id=\"doc-1\", vector=[0.1] * 384, metadata={\"source\": \"wikipedia\"})\r\ndb.insert(rec)\r\nprint(f\"Database size: {db.size()}\")\r\nprint(f\"Retrieved: {db.get('doc-1').metadata}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "32-database-comparison",
      children: "3.2 Database Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "321-feature-comparison",
      children: "3.2.1 Feature Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pinecone"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Qdrant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Weaviate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Milvus"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chroma"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hosting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self/Cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self/Cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self/Cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HNSW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HNSW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HNSW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IVF/HNSW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HNSW"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Filters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Payload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GraphQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "where"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Free tier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\r\nclass VectorDBConfig:\r\n    name: str\r\n    hosting: str\r\n    default_index: str\r\n    supports_filters: bool\r\n    max_dimension: int\r\n    free_tier: bool\r\n\r\nVECTOR_DBS = {\r\n    \"pinecone\": VectorDBConfig(\"Pinecone\", \"managed\", \"HNSW\", True, 20000, True),\r\n    \"qdrant\": VectorDBConfig(\"Qdrant\", \"self-hosted\", \"HNSW\", True, 65536, True),\r\n    \"weaviate\": VectorDBConfig(\"Weaviate\", \"self-hosted\", \"HNSW\", True, 65536, True),\r\n    \"milvus\": VectorDBConfig(\"Milvus\", \"self-hosted\", \"IVF_FLAT\", True, 65536, True),\r\n    \"chroma\": VectorDBConfig(\"Chroma\", \"embedded\", \"HNSW\", True, 65536, True),\r\n}\r\n\r\ndef recommend_vector_db(\r\n    scale: str,\r\n    budget: str,\r\n    requires_filters: bool = True,\r\n) -> str:\r\n    if scale == \"small\" and budget == \"free\":\r\n        return \"chroma\"\r\n    elif scale == \"large\" and budget == \"paid\":\r\n        return \"pinecone\"\r\n    elif scale == \"large\" and budget == \"self-host\":\r\n        return \"milvus\"\r\n    elif scale == \"medium\" and requires_filters:\r\n        return \"qdrant\"\r\n    else:\r\n        return \"chroma\"\r\n\r\nfor scale, budget in [(\"small\", \"free\"), (\"large\", \"paid\"), (\"large\", \"self-host\")]:\r\n    rec = recommend_vector_db(scale, budget)\r\n    print(f\"Scale={scale}, Budget={budget}: {rec}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "322-local-vector-database-chroma-example",
      children: "3.2.2 Local Vector Database (Chroma Example)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chroma is the most developer-friendly option for prototyping."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Conceptual Chroma usage\r\nimport chromadb\r\n\r\n## chroma_client = chromadb.Client()\r\n\r\n## collection = chroma_client.create_collection(name=\"my_collection\")\r\n\r\n## collection.add(\r\n\r\n##     documents=[\"Document about RAG\", \"Document about embeddings\"],\r\n\r\n##     metadatas=[{\"source\": \"tutorial\"}, {\"source\": \"paper\"}],\r\n\r\n##     ids=[\"doc1\", \"doc2\"]\r\n\r\n## )\r\n\r\n## results = collection.query(query_texts=[\"RAG pipeline\"], n_results=2)\r\n\r\n## print(results)\r\n\r\n## In-memory mock for demonstration\r\nclass MockChromaCollection:\r\n    def __init__(self, name: str):\r\n        self.name = name\r\n        self.documents: Dict[str, Dict] = {}\r\n\r\n    def add(self, documents: List[str], metadatas: List[Dict], ids: List[str]):\r\n        for doc, meta, did in zip(documents, metadatas, ids):\r\n            self.documents[did] = {\"document\": doc, \"metadata\": meta}\r\n\r\n    def query(self, query_texts: List[str], n_results: int = 10) -> Dict:\r\n        # Simple keyword matching\r\n        results = []\r\n        for q in query_texts:\r\n            scores = []\r\n            for did, doc_data in self.documents.items():\r\n                overlap = len(set(q.lower().split()) & set(doc_data[\"document\"].lower().split()))\r\n                scores.append((did, doc_data, overlap))\r\n            scores.sort(key=lambda x: x[2], reverse=True)\r\n            results.append([s[:2] for s in scores[:n_results]])\r\n\r\n        return {\"ids\": [[r[0] for r in batch] for batch in results],\r\n                \"documents\": [[r[1][\"document\"] for r in batch] for batch in results]}\r\n\r\nchroma = MockChromaCollection(\"rag-docs\")\r\nchroma.add(\r\n    documents=[\"RAG combines retrieval with generation\", \"Embeddings convert text to vectors\"],\r\n    metadatas=[{\"source\": \"tutorial\"}, {\"source\": \"paper\"}],\r\n    ids=[\"doc1\", \"doc2\"],\r\n)\r\nresults = chroma.query([\"RAG generation\"])\r\nprint(f\"Query results: {results}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "33-indexing-algorithms",
      children: "3.3 Indexing Algorithms"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "331-flat-brute-force",
      children: "3.3.1 Flat (Brute Force)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The simplest index — compares query against every vector. Guarantees exact results."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class FlatIndex:\r\n    def __init__(self):\r\n        self.vectors: List[np.ndarray] = []\r\n        self.ids: List[str] = []\r\n\r\n    def add(self, vector: np.ndarray, record_id: str):\r\n        self.vectors.append(vector)\r\n        self.ids.append(record_id)\r\n\r\n    def search(self, query: np.ndarray, k: int = 10) -> List[tuple]:\r\n        similarities = []\r\n        for vec, vid in zip(self.vectors, self.ids):\r\n            sim = np.dot(query, vec) / (np.linalg.norm(query) * np.linalg.norm(vec) + 1e-10)\r\n            similarities.append((vid, sim))\r\n\r\n        similarities.sort(key=lambda x: x[1], reverse=True)\r\n        return similarities[:k]\r\n\r\n    def search_with_timing(self, query: np.ndarray, k: int = 10) -> Dict:\r\n        start = time.time()\r\n        results = self.search(query, k)\r\n        elapsed = time.time() - start\r\n        return {\"results\": results, \"time_ms\": round(elapsed * 1000, 2)}\r\n\r\nflat = FlatIndex()\r\nfor i in range(100):\r\n    flat.add(np.random.randn(384), f\"doc-{i}\")\r\n\r\nresult = flat.search_with_timing(np.random.randn(384), k=5)\r\nprint(f\"Flat search: {result['time_ms']}ms, top ID: {result['results'][0][0]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "332-ivf-inverted-file-index",
      children: "3.3.2 IVF (Inverted File Index)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IVF clusters vectors using K-means. Search only probes the nearest clusters, trading accuracy for speed."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from sklearn.cluster import KMeans\r\n\r\nclass IVFIndex:\r\n    def __init__(self, n_clusters: int = 10, n_probes: int = 3):\r\n        self.n_clusters = n_clusters\r\n        self.n_probes = n_probes\r\n        self.kmeans: Optional[KMeans] = None\r\n        self.inverted_lists: Dict[int, List[tuple]] = {}\r\n        self.vectors: List[np.ndarray] = []\r\n        self.ids: List[str] = []\r\n\r\n    def add(self, vector: np.ndarray, record_id: str):\r\n        self.vectors.append(vector)\r\n        self.ids.append(record_id)\r\n\r\n    def build_index(self):\r\n        data = np.array(self.vectors)\r\n        self.kmeans = KMeans(n_clusters=self.n_clusters, random_state=42, n_init=5)\r\n        labels = self.kmeans.fit_predict(data)\r\n\r\n        self.inverted_lists = {i: [] for i in range(self.n_clusters)}\r\n        for label, vec, vid in zip(labels, self.vectors, self.ids):\r\n            self.inverted_lists[label].append((vid, vec))\r\n\r\n    def search(self, query: np.ndarray, k: int = 10) -> List[tuple]:\r\n        query_distances = self.kmeans.transform([query])[0]\r\n        nearest_clusters = np.argsort(query_distances)[:self.n_probes]\r\n\r\n        candidates = []\r\n        for cluster_id in nearest_clusters:\r\n            for vid, vec in self.inverted_lists.get(cluster_id, []):\r\n                sim = np.dot(query, vec) / (np.linalg.norm(query) * np.linalg.norm(vec) + 1e-10)\r\n                candidates.append((vid, sim))\r\n\r\n        candidates.sort(key=lambda x: x[1], reverse=True)\r\n        return candidates[:k]\r\n\r\nivf = IVFIndex(n_clusters=5, n_probes=2)\r\nfor i in range(100):\r\n    ivf.add(np.random.randn(384), f\"doc-{i}\")\r\nivf.build_index()\r\n\r\nresults = ivf.search(np.random.randn(384), k=5)\r\nprint(f\"IVF search results: {len(results)} candidates\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "333-hnsw-hierarchical-navigable-small-world",
      children: "3.3.3 HNSW (Hierarchical Navigable Small World)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HNSW builds a multi-layer graph where upper layers have fewer nodes (long-range connections) and lower layers have more nodes (fine-grained connections). It offers superior speed-accuracy tradeoffs."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class HNSWNode:\r\n    def __init__(self, vector: np.ndarray, record_id: str, level: int):\r\n        self.vector = vector\r\n        self.record_id = record_id\r\n        self.level = level\r\n        self.neighbors: Dict[int, List[str]] = {}  # level -> list of neighbor IDs\r\n\r\nclass HNSWIndex:\r\n    def __init__(self, M: int = 16, ef_construction: int = 200, ef_search: int = 50):\r\n        self.M = M\r\n        self.ef_construction = ef_construction\r\n        self.ef_search = ef_search\r\n        self.nodes: Dict[str, HNSWNode] = {}\r\n        self.entry_point: Optional[str] = None\r\n        self.max_level = 0\r\n\r\n    def _random_level(self) -> int:\r\n        level = 0\r\n        while np.random.random() < 0.5 and level < 16:\r\n            level += 1\r\n        return level\r\n\r\n    def add(self, vector: np.ndarray, record_id: str):\r\n        level = self._random_level()\r\n        node = HNSWNode(vector, record_id, level)\r\n        self.nodes[record_id] = node\r\n\r\n        if self.entry_point is None:\r\n            self.entry_point = record_id\r\n            self.max_level = level\r\n            return\r\n\r\n        # Greedy search from entry point\r\n        curr = self.entry_point\r\n        for lc in range(self.max_level, level, -1):\r\n            curr = self._greedy_search(vector, curr, lc)\r\n\r\n        for lc in range(min(level, self.max_level), -1, -1):\r\n            nearest = self._search_layer(vector, curr, lc, self.ef_construction)\r\n            node.neighbors[lc] = [n[0] for n in nearest[:self.M]]\r\n            # Add reverse connections\r\n            for nid, _ in nearest[:self.M]:\r\n                if lc not in self.nodes[nid].neighbors:\r\n                    self.nodes[nid].neighbors[lc] = []\r\n                self.nodes[nid].neighbors[lc].append(record_id)\r\n\r\n        if level > self.max_level:\r\n            self.max_level = level\r\n            self.entry_point = record_id\r\n\r\n    def _greedy_search(self, query: np.ndarray, entry_id: str, level: int) -> str:\r\n        best = entry_id\r\n        best_dist = float(np.linalg.norm(self.nodes[best].vector - query))\r\n\r\n        improved = True\r\n        while improved:\r\n            improved = False\r\n            for neighbor_id in self.nodes[best].neighbors.get(level, []):\r\n                dist = float(np.linalg.norm(self.nodes[neighbor_id].vector - query))\r\n                if dist < best_dist:\r\n                    best_dist = dist\r\n                    best = neighbor_id\r\n                    improved = True\r\n        return best\r\n\r\n    def _search_layer(self, query: np.ndarray, entry_id: str, level: int, ef: int) -> List[tuple]:\r\n        visited = {entry_id}\r\n        candidates = [(float(np.linalg.norm(self.nodes[entry_id].vector - query)), entry_id)]\r\n        results = candidates.copy()\r\n\r\n        while candidates:\r\n            dist_c, c_id = candidates.pop(0)\r\n            furthest_result = max(results, key=lambda x: x[0])\r\n            if dist_c > furthest_result[0]:\r\n                break\r\n\r\n            for neighbor_id in self.nodes[c_id].neighbors.get(level, []):\r\n                if neighbor_id in visited:\r\n                    continue\r\n                visited.add(neighbor_id)\r\n                dist = float(np.linalg.norm(self.nodes[neighbor_id].vector - query))\r\n                if len(results) < ef or dist < max(r[0] for r in results):\r\n                    candidates.append((dist, neighbor_id))\r\n                    results.append((dist, neighbor_id))\r\n                    results.sort(key=lambda x: x[0])\r\n                    if len(results) > ef:\r\n                        results = results[:ef]\r\n\r\n        return results\r\n\r\n    def search(self, query: np.ndarray, k: int = 10) -> List[tuple]:\r\n        if self.entry_point is None:\r\n            return []\r\n\r\n        curr = self.entry_point\r\n        for lc in range(self.max_level, 0, -1):\r\n            curr = self._greedy_search(query, curr, lc)\r\n\r\n        results = self._search_layer(query, curr, 0, max(self.ef_search, k))\r\n        return [(r[1], 1.0 / (1.0 + r[0])) for r in results[:k]]\r\n\r\nhnsw = HNSWIndex(M=8, ef_construction=50, ef_search=20)\r\nfor i in range(50):\r\n    hnsw.add(np.random.randn(384), f\"doc-{i}\")\r\n\r\nresults = hnsw.search(np.random.randn(384), k=5)\r\nfor rid, score in results:\r\n    print(f\"  {rid}: similarity={score:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "334-index-comparison",
      children: "3.3.4 Index Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class IndexBenchmark:\r\n    def __init__(self, dimension: int, num_vectors: int):\r\n        self.dimension = dimension\r\n        self.num_vectors = num_vectors\r\n        self.data = [np.random.randn(dimension) for _ in range(num_vectors)]\r\n        self.queries = [np.random.randn(dimension) for _ in range(20)]\r\n\r\n    def benchmark_index(self, index, index_name: str) -> Dict:\r\n        build_start = time.time()\r\n        for i, vec in enumerate(self.data):\r\n            index.add(vec, f\"doc-{i}\")\r\n        if hasattr(index, 'build_index'):\r\n            index.build_index()\r\n        build_time = time.time() - build_start\r\n\r\n        search_times = []\r\n        for query in self.queries:\r\n            start = time.time()\r\n            results = index.search(query, k=10)\r\n            search_times.append(time.time() - start)\r\n\r\n        return {\r\n            \"index\": index_name,\r\n            \"build_time_ms\": round(build_time * 1000, 2),\r\n            \"avg_search_ms\": round(np.mean(search_times) * 1000, 2),\r\n            \"p95_search_ms\": round(np.percentile(search_times, 95) * 1000, 2),\r\n        }\r\n\r\nbenchmark = IndexBenchmark(dimension=128, num_vectors=1000)\r\n\r\n## flat_result = benchmark.benchmark_index(FlatIndex(), \"Flat\")\r\n\r\n## print(flat_result)\r\nprint(\"Benchmark ready for testing\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "34-schema-design",
      children: "3.4 Schema Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "341-collection-schema",
      children: "3.4.1 Collection Schema"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Define the structure of vectors and their associated metadata."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\r\nclass CollectionSchema:\r\n    name: str\r\n    dimension: int\r\n    metric: str  # cosine, dot, euclidean\r\n    fields: Dict[str, str]  # field_name -> data_type\r\n\r\nclass CollectionManager:\r\n    def __init__(self):\r\n        self.collections: Dict[str, CollectionSchema] = {}\r\n\r\n    def create_collection(\r\n        self,\r\n        name: str,\r\n        dimension: int,\r\n        metric: str = \"cosine\",\r\n        fields: Dict[str, str] = None,\r\n    ):\r\n        if name in self.collections:\r\n            raise ValueError(f\"Collection '{name}' already exists\")\r\n\r\n        schema = CollectionSchema(\r\n            name=name,\r\n            dimension=dimension,\r\n            metric=metric,\r\n            fields=fields or {},\r\n        )\r\n        self.collections[name] = schema\r\n        return schema\r\n\r\n    def list_collections(self) -> List[str]:\r\n        return list(self.collections.keys())\r\n\r\n    def get_schema(self, name: str) -> CollectionSchema:\r\n        return self.collections.get(name)\r\n\r\nmanager = CollectionManager()\r\nschema = manager.create_collection(\r\n    name=\"documents\",\r\n    dimension=384,\r\n    metric=\"cosine\",\r\n    fields={\r\n        \"title\": \"string\",\r\n        \"source\": \"string\",\r\n        \"date\": \"timestamp\",\r\n        \"page_count\": \"integer\",\r\n        \"embedding_model\": \"string\",\r\n    },\r\n)\r\nprint(f\"Collection '{schema.name}' created with {len(schema.fields)} metadata fields\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "342-metadata-indexing",
      children: "3.4.2 Metadata Indexing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Metadata filtering narrows search space before similarity computation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\r\nclass FilterCondition:\r\n    field: str\r\n    operator: str  # eq, neq, gt, gte, lt, lte, in, not_in\r\n    value: Any\r\n\r\nclass MetadataFilter:\r\n    def __init__(self, conditions: List[FilterCondition]):\r\n        self.conditions = conditions\r\n\r\n    def apply(self, records: List[VectorRecord]) -> List[VectorRecord]:\r\n        results = records\r\n        for cond in self.conditions:\r\n            results = [r for r in results if self._check_condition(r, cond)]\r\n        return results\r\n\r\n    def _check_condition(self, record: VectorRecord, cond: FilterCondition) -> bool:\r\n        val = record.metadata.get(cond.field)\r\n\r\n        if cond.operator == \"eq\":\r\n            return val == cond.value\r\n        elif cond.operator == \"neq\":\r\n            return val != cond.value\r\n        elif cond.operator == \"gt\":\r\n            return val is not None and val > cond.value\r\n        elif cond.operator == \"gte\":\r\n            return val is not None and val >= cond.value\r\n        elif cond.operator == \"lt\":\r\n            return val is not None and val < cond.value\r\n        elif cond.operator == \"lte\":\r\n            return val is not None and val <= cond.value\r\n        elif cond.operator == \"in\":\r\n            return val in cond.value\r\n        elif cond.operator == \"not_in\":\r\n            return val not in cond.value\r\n        return True\r\n\r\nrecords = [\r\n    VectorRecord(\"1\", [0.1]*384, {\"source\": \"wikipedia\", \"year\": 2023}),\r\n    VectorRecord(\"2\", [0.2]*384, {\"source\": \"arxiv\", \"year\": 2024}),\r\n    VectorRecord(\"3\", [0.3]*384, {\"source\": \"wikipedia\", \"year\": 2020}),\r\n]\r\n\r\nfilter_obj = MetadataFilter([FilterCondition(\"source\", \"eq\", \"wikipedia\")])\r\nfiltered = filter_obj.apply(records)\r\nprint(f\"Filtered records: {[r.id for r in filtered]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "343-payload-storage-qdrant-style",
      children: "3.4.3 Payload Storage (Qdrant-style)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\r\nclass Payload:\r\n    \"\"\"Structured metadata attached to vectors (Qdrant terminology).\"\"\"\r\n    data: Dict[str, Any]\r\n\r\n    def get(self, key: str, default=None):\r\n        return self.data.get(key, default)\r\n\r\n    def update(self, updates: Dict):\r\n        self.data.update(updates)\r\n\r\nclass PayloadIndex:\r\n    \"\"\"Index over specific payload fields for fast filtering.\"\"\"\r\n    def __init__(self, field_name: str, field_type: str):\r\n        self.field_name = field_name\r\n        self.field_type = field_type\r\n        self.index: Dict[Any, List[str]] = {}  # value -> [record_ids]\r\n\r\n    def add(self, record_id: str, payload: Payload):\r\n        value = payload.get(self.field_name)\r\n        if value is not None:\r\n            if value not in self.index:\r\n                self.index[value] = []\r\n            self.index[value].append(record_id)\r\n\r\n    def search(self, value: Any) -> List[str]:\r\n        return self.index.get(value, [])\r\n\r\n    def remove(self, record_id: str, payload: Payload):\r\n        value = payload.get(self.field_name)\r\n        if value and value in self.index:\r\n            self.index[value] = [r for r in self.index[value] if r != record_id]\r\n\r\npayload_idx = PayloadIndex(\"category\", \"string\")\r\npayload_idx.add(\"doc-1\", Payload({\"category\": \"science\"}))\r\npayload_idx.add(\"doc-2\", Payload({\"category\": \"technology\"}))\r\nprint(f\"Science docs: {payload_idx.search('science')}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "35-crud-operations",
      children: "3.5 CRUD Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "351-insert-with-batching",
      children: "3.5.1 Insert with Batching"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class VectorCollection:\r\n    def __init__(self, name: str, dimension: int):\r\n        self.name = name\r\n        self.dimension = dimension\r\n        self.records: Dict[str, VectorRecord] = {}\r\n        self.index = FlatIndex()\r\n\r\n    def insert(self, record: VectorRecord):\r\n        if len(record.vector) != self.dimension:\r\n            raise ValueError(f\"Vector dimension mismatch\")\r\n        self.records[record.id] = record\r\n        self.index.add(np.array(record.vector), record.id)\r\n\r\n    def insert_batch(self, records: List[VectorRecord]):\r\n        for r in records:\r\n            self.insert(r)\r\n\r\n    def upsert(self, record: VectorRecord):\r\n        \"\"\"Insert or update an existing record.\"\"\"\r\n        if record.id in self.records:\r\n            self.delete(record.id)\r\n        self.insert(record)\r\n\r\n    def delete(self, record_id: str) -> bool:\r\n        if record_id in self.records:\r\n            del self.records[record_id]\r\n            return True\r\n        return False\r\n\r\n    def update_metadata(self, record_id: str, metadata_updates: Dict):\r\n        if record_id in self.records:\r\n            self.records[record_id].metadata.update(metadata_updates)\r\n            return True\r\n        return False\r\n\r\n    def search(self, query_vector: np.ndarray, k: int = 10, filter_cond: MetadataFilter = None) -> List[tuple]:\r\n        candidates = self.index.search(query_vector, k * 2)  # Fetch more for filtering\r\n\r\n        if filter_cond:\r\n            # Filter and re-rank\r\n            filtered = []\r\n            for rid, score in candidates:\r\n                record = self.records.get(rid)\r\n                if record and filter_cond.apply([record]):\r\n                    filtered.append((rid, score))\r\n            return filtered[:k]\r\n        return candidates[:k]\r\n\r\ncollection = VectorCollection(\"my-docs\", 384)\r\ncollection.insert_batch([\r\n    VectorRecord(\"doc-1\", np.random.randn(384).tolist(), {\"source\": \"web\", \"year\": 2024}),\r\n    VectorRecord(\"doc-2\", np.random.randn(384).tolist(), {\"source\": \"pdf\", \"year\": 2023}),\r\n])\r\n\r\ncollection.upsert(VectorRecord(\"doc-3\", np.random.randn(384).tolist(), {\"source\": \"web\", \"year\": 2024}))\r\nresults = collection.search(np.random.randn(384), k=5)\r\nprint(f\"Search returned {len(results)} results\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "352-scroll--pagination",
      children: "3.5.2 Scroll / Pagination"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PaginatedCollection:\r\n    def __init__(self, collection: VectorCollection, page_size: int = 100):\r\n        self.collection = collection\r\n        self.page_size = page_size\r\n\r\n    def scroll(self, offset: int = 0) -> Dict:\r\n        keys = list(self.collection.records.keys())\r\n        page = keys[offset:offset + self.page_size]\r\n        return {\r\n            \"records\": [self.collection.records[k] for k in page],\r\n            \"offset\": offset + len(page),\r\n            \"has_more\": offset + len(page) < len(keys),\r\n        }\r\n\r\npc = PaginatedCollection(collection, page_size=1)\r\npage = pc.scroll(0)\r\nprint(f\"Page has {len(page['records'])} records, has_more: {page['has_more']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "353-bulk-export",
      children: "3.5.3 Bulk Export"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def export_collection(\r\n    collection: VectorCollection,\r\n    format: str = \"jsonl\",\r\n    include_vectors: bool = False,\r\n) -> str:\r\n    lines = []\r\n    for rid, record in collection.records.items():\r\n        entry = {\"id\": rid, \"metadata\": record.metadata}\r\n        if include_vectors:\r\n            entry[\"vector\"] = record.vector\r\n        lines.append(json.dumps(entry))\r\n\r\n    return \"\\n\".join(lines)\r\n\r\nexported = export_collection(collection, include_vectors=False)\r\nprint(f\"Exported {len(exported.splitlines())} records\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "36-scaling-strategies",
      children: "3.6 Scaling Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "361-sharding",
      children: "3.6.1 Sharding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Distribute vectors across multiple shards based on hash or range."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ShardedVectorDB:\r\n    def __init__(self, num_shards: int, dimension: int):\r\n        self.shards = [VectorCollection(f\"shard-{i}\", dimension) for i in range(num_shards)]\r\n\r\n    def _get_shard(self, record_id: str) -> VectorCollection:\r\n        shard_idx = hash(record_id) % len(self.shards)\r\n        return self.shards[shard_idx]\r\n\r\n    def insert(self, record: VectorRecord):\r\n        shard = self._get_shard(record.id)\r\n        shard.insert(record)\r\n\r\n    def search(self, query_vector: np.ndarray, k: int = 10) -> List[tuple]:\r\n        # Search all shards in parallel, merge results\r\n        all_results = []\r\n        for shard in self.shards:\r\n            all_results.extend(shard.search(query_vector, k))\r\n\r\n        all_results.sort(key=lambda x: x[1], reverse=True)\r\n        return all_results[:k]\r\n\r\n    def stats(self) -> Dict:\r\n        return {\r\n            \"num_shards\": len(self.shards),\r\n            \"total_records\": sum(s.size() for s in self.shards),\r\n            \"shard_sizes\": [s.size() for s in self.shards],\r\n        }\r\n\r\nsharded = ShardedVectorDB(num_shards=4, dimension=384)\r\nfor i in range(100):\r\n    sharded.insert(VectorRecord(f\"doc-{i}\", np.random.randn(384).tolist(), {\"idx\": i}))\r\n\r\nprint(sharded.stats())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "362-replication",
      children: "3.6.2 Replication"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ReplicatedVectorDB:\r\n    def __init__(self, num_replicas: int, dimension: int):\r\n        self.replicas = [VectorCollection(f\"replica-{i}\", dimension) for i in range(num_replicas)]\r\n\r\n    def write(self, record: VectorRecord):\r\n        for replica in self.replicas:\r\n            replica.insert(record)\r\n\r\n    def read(self, query_vector: np.ndarray, k: int = 10) -> List[tuple]:\r\n        replica = np.random.choice(self.replicas)  # Random read\r\n        return replica.search(query_vector, k)\r\n\r\n    def consistency_check(self) -> bool:\r\n        sizes = [r.size() for r in self.replicas]\r\n        return len(set(sizes)) == 1\r\n\r\nreplicated = ReplicatedVectorDB(3, 384)\r\nreplicated.write(VectorRecord(\"doc-1\", [0.1]*384, {}))\r\nprint(f\"Consistent: {replicated.consistency_check()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "363-hybrid-cloud-strategy",
      children: "3.6.3 Hybrid Cloud Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class HybridVectorDB:\r\n    def __init__(self, local: VectorDatabase, cloud: str = \"pinecone\"):\r\n        self.local = local\r\n        self.cloud = cloud\r\n        self._cloud_enabled = True\r\n\r\n    def search(self, query_vector: np.ndarray, k: int = 10) -> List[tuple]:\r\n        local_results = self._search_local(query_vector, k)\r\n\r\n        if self._cloud_enabled and len(local_results) < k:\r\n            cloud_results = self._search_cloud(query_vector, k - len(local_results))\r\n            local_results.extend(cloud_results)\r\n\r\n        return local_results[:k]\r\n\r\n    def _search_local(self, query: np.ndarray, k: int) -> List[tuple]:\r\n        return []\r\n\r\n    def _search_cloud(self, query: np.ndarray, k: int) -> List[tuple]:\r\n        return [(\"cloud-result\", 0.9)]\r\n\r\n    def failover_to_local(self):\r\n        self._cloud_enabled = False\r\n\r\nhybrid = HybridVectorDB(VectorDatabase(\"local\", 384))\r\nprint(f\"Hybrid DB: local + {hybrid.cloud}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vector databases are specialized systems for storing and searching high-dimensional embeddings. Key databases include Pinecone (managed), Qdrant (Rust-based, self-hosted), Weaviate (GraphQL-native),.\r\nMilvus (massive scale), and Chroma (embedded, developer-friendly). Indexing algorithms balance search speed and accuracy: Flat (exact), IVF (clustered, approximate), and HNSW (graph-based,.\r\nstate-of-the-art). Schema design involves defining vector dimensions, distance metrics, and metadata fields. Production deployments require CRUD operations with batching, metadata filtering,.\r\npagination, and scaling strategies including sharding, replication, and hybrid cloud architectures."
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
            children: "Start with HNSW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best all-around index for most workloads (speed + accuracy)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use metadata filters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filter before vector search when possible to reduce search space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Batch inserts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert vectors in batches of 100-1000 for optimal throughput"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Right-size dimensions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "384-768 dimensions sufficient for most text; higher dims for precision-critical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Plan for scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shard by record ID hash for horizontal scaling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Test with your data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index performance varies by data distribution — benchmark on your dataset"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "rag03-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: Compare HNSW vs IVF indexing — when would you choose each?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HNSW (Hierarchical Navigable Small World) builds a multi-layer graph where upper layers have long-range connections for fast traversal and lower layers have fine-grained connections for.\nprecision. It offers the best speed-accuracy trade-off (95-99% recall at 10x speedup) but uses more memory and has slower index construction. IVF (Inverted File Index) clusters vectors with K-means and.\nsearches only the nearest clusters — it uses less memory than HNSW and supports faster construction, but at lower recall for.\nthe same search time. Choose HNSW for most production workloads where memory is available and search speed is critical. Choose IVF for.\nvery large datasets (100M+) where memory is a constraint, or for dynamic datasets requiring frequent insertions."
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
      "data-qid": "rag03-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How does metadata filtering work in vector databases and what are the performance implications?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Metadata filtering narrows the search space by applying attribute constraints (e.g., source=\"wikipedia\", year>=2023) before or during vector similarity computation. There are two strategies: pre-filtering (filter records by metadata first,.\nthen search among remaining vectors) and post-filtering (search vectors first, then filter results). Pre-filtering is faster when the filter is highly selective (removes 90%+ of records),.\nbut can miss relevant results if the filter is too restrictive. Post-filtering maintains recall but wastes computation on filtered-out results. Most vector.\ndatabases support both, with pre-filtering implemented via inverted metadata indexes for efficient range and equality queries. The optimal strategy depends on filter selectivity and.\nindex type."
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
      "data-qid": "rag03-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: How would you choose between Pinecone (managed), Qdrant (self-hosted), and Chroma (embedded)?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Pinecone is fully managed with auto-scaling, requires zero DevOps, and is ideal for teams that want to focus on application logic rather than infrastructure — but.\nit is the most expensive option at scale. Qdrant (self-hosted) offers full control over hardware, lower cost at scale, and is written in Rust for.\nhigh performance — suitable for teams with DevOps capability handling 10M+ vectors. Chroma is embedded (runs in-process), requires no separate server,.\nand is perfect for prototyping, local development, and small-scale applications (< 1M vectors). Choose based on team expertise and scale requirements: Chroma for.\ndev, Pinecone for quick production, Qdrant/Milvus for cost-optimized production at scale."
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
      "data-qid": "rag03-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: Explain the HNSW algorithm — how do the layers enable fast search?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HNSW builds a hierarchy of navigable small-world graphs. Each node (vector) is assigned a random level L, and appears in layers 0 through L. The topmost layer has the fewest nodes and.\nthe longest edges — enabling rapid traversal to the approximate region of the query. At each subsequent layer, the search zooms in with shorter edges until reaching layer 0,.\nwhich contains all nodes for fine-grained nearest neighbor identification. The entry point is always at the topmost layer. Search complexity is O(log N) across layers plus O(ef) at the bottom layer,.\nwhere ef controls search time vs recall. Typical settings: M=16 (connections per node), ef_construction=200, ef_search=50."
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
      "data-qid": "rag03-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How do you design a collection schema for a multi-tenant vector database?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Include a tenant_id field in the metadata of every vector. Create a metadata index on tenant_id for fast filtering. Prefix the vector.\nID with tenant_id to guarantee uniqueness and enable tenant-scoped deletion. At query time, always apply a metadata filter for tenant_id = current_tenant to ensure data isolation. For.\nperformance, consider per-tenant collections or partitions if tenants have very different data distributions or sizes. Some databases (Qdrant, Milvus) support multi-tenancy natively with payload filtering. Storage can be optimized by co-locating smaller tenants in shared collections with tenant_id filters and.\nisolating large tenants in dedicated collections."
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
      "data-qid": "rag03-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: What is the difference between cosine, dot product, and Euclidean distance in vector DB configuration?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The distance metric determines how similarity is computed during search. Cosine distance (1 - cosine_similarity) is the default for text embeddings and.\nworks with normalized vectors. Dot product measures raw vector alignment — equivalent to cosine when vectors are normalized, but favors larger magnitudes otherwise. Euclidean (L2) distance measures straight-line distance — commonly used for.\nimage embeddings or when vector magnitude carries meaning. Most vector databases require you to choose the metric at collection creation time because it affects index construction. For.\ntext embeddings normalized to unit length, all three metrics produce the same ranking (just scaled differently), so choose cosine for semantic clarity."
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
      "data-qid": "rag03-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: How do you implement CRUD operations (update, delete) in a vector database effectively?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Insert: batch inserts of 100-1000 vectors for optimal throughput — many databases support atomic batch operations. Update: use upsert (insert + overwrite by ID) — the database marks the old vector.\nas deleted and inserts the new one; the index is updated lazily or in the next optimization cycle. Delete: delete by ID or.\nby metadata filter (e.g., delete all vectors where document_id = \"doc-123\"). For bulk deletes, consider dropping and recreating the collection. After many mutations,.\nthe index degrades — schedule periodic optimization (hnsw: re-index nodes; ivf: re-cluster) to maintain query performance. Most managed databases handle this automatically with background optimization jobs."
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
      "data-qid": "rag03-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How does sharding work for horizontal scaling of vector databases?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sharding distributes vectors across multiple physical nodes based on a shard key — typically the vector ID hash. Each shard maintains its own index and.\nserves queries independently. When a query arrives, it is broadcast to all shards, each returns its top-k results, and a coordinator.\nmerges and re-ranks the combined results. The number of shards determines write throughput (each shard handles its own writes) and memory capacity. For.\noptimal performance, keep each shard's index in memory. Hash-based sharding ensures even distribution but requires searching all shards for every query. Range-based sharding (by metadata) can restrict queries to fewer shards but.\nrisks data skew."
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
      "data-qid": "rag03-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: What factors affect vector search latency and how do you optimize each?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Key latency factors: index type (HNSW: 1-5ms for 1M vectors, Flat: 100-500ms), number of vectors (logarithmic for HNSW, linear for Flat),.\nvector dimensionality (384d vs 3072d: 8x more computation), ef_search parameter (higher = slower but more accurate), metadata filtering (complex filters slow down search),.\nand hardware (SSD vs RAM, CPU vs GPU). Optimize by: choosing HNSW over Flat, reducing dimensionality (384d is sufficient for most text tasks),.\ntuning ef_search to the minimum acceptable recall, pre-filtering with metadata indexes, and using quantization (binary -> 32x speed, scalar -> 4x speed) for.\nmemory-bound workloads."
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
      "data-qid": "rag03-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How do you migrate vector data between different vector database providers?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Export vectors with their IDs, metadata, and payloads in a portable format like JSONL or Parquet. Most databases support bulk export/import. For.\ncross-provider migration, write an adapter that reads from the source DB's export API and writes to the target DB's import endpoint. Key considerations: embedding models must be the same (same model,.\nsame dimensionality, same normalization) otherwise retrieved results will differ. If vectors are stored as float32, they can be directly transferred. Plan for.\ndowntime or dual-write during the cutover — write to both databases during migration, then switch reads to the new DB after verifying consistency. For.\nlarge datasets (> 10M vectors), test migration on a sample first."
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
      "data-qid": "rag-s3-quiz1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " Which index type offers exact (not approximate) nearest neighbor search?"]
      }), "\nA. HNSW\nB. IVF\nC. Flat\nD. DiskANN\nAnswer: C\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s3-quiz2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " What does HNSW stand for?"]
      }), "\nA. High Node Search Walk\nB. Hierarchical Navigable Small World\nC. Hybrid Neural Search Window\nD. Heuristic Nearest Sample Weight\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s3-quiz3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " Which vector database is best suited for embedded/local development?"]
      }), "\nA. Pinecone\nB. Milvus\nC. Chroma\nD. Weaviate\nAnswer: C\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s3-quiz4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " How does IVF index reduce search time?"]
      }), "\nA. By using GPU acceleration\nB. By clustering vectors and searching only nearest clusters\nC. By compressing vectors to binary\nD. By caching frequent queries\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s3-quiz5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " What is the purpose of metadata filtering in vector search?"]
      }), "\nA. To reduce embedding dimension\nB. To narrow search space before similarity computation\nC. To encrypt vector data\nD. To compress search results\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Not understanding the fundamental concepts before applying them"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Skipping edge cases in implementation"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Not analyzing time/space complexity"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Forgetting to handle null/empty inputs"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Not practicing enough problems to build pattern recognition1. Implement a Flat index for exact nearest neighbor search on 1000 randomly generated vectors. Benchmark search time for k=10 against an HNSW implementation (simplified). Report speedup and recall."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a collection schema for a knowledge base of technical documentation. Include fields for title, author, publish date, version, tags, and reading level. Create 20 sample records with proper metadata."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Build a metadata filtering system that supports AND/OR conditions. Test with filters like ", (0,jsx_runtime.jsx)(_components.code, {
            children: "(source == \"wikipedia\" AND year >= 2023) OR (source == \"arxiv\")"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a sharded vector database with 4 shards and a write-once-read-many workload. Insert 1000 vectors and measure query latency vs a single-shard baseline."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a paginated vector search that returns results in pages of 20, supports cursor-based pagination, and applies metadata filters. Test with 200 records and verify correct pagination across a"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Core principle: Understand the fundamental concepts thoroughly"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implementation pattern: Practice with real code examples"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complexity: Know the time and space complexity"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Application: Know when to use this in production systems"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Interview: Frequently asked in technical interviews"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Edge cases: Consider common failure scenarios"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Related concepts: Connect to broader system design"
          }), "\n"]
        }), "\n"]
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
            children: "How does Vector Database Basics behave differently at scale — memory, throughput, or precision-wise?"
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
        children: "Name the technique explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Vector Database Basics\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Vector Database Basics to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Vector Database Basics (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Vector Database Basics and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Vector Database Basics-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic problem in this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Vector Database Basics in production today?"
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
        }), " Vector Database Basics builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Vector Database Basics before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Vector Database Basics is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Vector Database Basics in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "The chapter that covers Vector Database Basics is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 03 Vector Database Basics is ___. — Answer: O(n) embedding, O(log n) ANN search"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 03 Vector Database Basics is ___. — Answer: empty retrieval, hallucination, chunk boundary issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Vector Database Basics issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Vector Database Basics in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Vector Database Basics that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
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
          }), " A new hire asks you to explain Vector Database Basics in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Vector Database Basics and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
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
            children: "Complete Medium exercises, explain Vector Database Basics to someone else"
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
        children: "Always write a one-line example of Vector Database Basics from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Vector Database Basics when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Vector Database Basics twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Vector Database Basics snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Vector Database Basics listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Vector Database Basics to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Vector Database Basics by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Vector Database Basics to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
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
        children: "'Advanced RAG Techniques' by Andrei Lopatenko (Towards Data Science) Database Basics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 12 — builds the foundation for 03 Vector Database Basics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 03 Vector Database Basics with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 03 Vector Database Basics fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 03 Vector Database Basics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 03 Vector Database Basics"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 03 Vector Database Basics?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 03 Vector Database Basics?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 03 Vector Database Basics asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 03 Vector Database Basics?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vector Database Basics is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Vector Database Basics."
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
        children: "Vector Database Basics emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Vector Database Basics today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Vector Database Basics — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Vector Database Basics changes quickly; focus on fundamentals that remain stable."
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
            children: "03 Vector Database Basics is like a GPS navigation system"
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
          }), " — this chapter contributes the Vector Database Basics skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-03vectordatabasebasics-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Vector Database Basics in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "RAG (Retrieval-Augmented Generation) grounds LLM responses in external documents retrieved at query time, reducing hallucination by 40-80% vs zero-shot generation."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-03vectordatabasebasics-flash2",
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
      "data-qid": "12ragvectordatabases-03vectordatabasebasics-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Vector Database Basics approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Retrieval: O(log n) with ANN index (HNSW/IVF). Embedding: O(n*d) where d=embedding dim. Generation: O(context_len^2) attention."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-03vectordatabasebasics-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Vector Database Basics NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "RAG is NOT the right choice when: (1) the knowledge base is tiny (<100 docs) and fits in context, (2) you need the model to learn new reasoning patterns (use fine-tuning), (3) sub-100ms latency is required."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-03vectordatabasebasics-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Vector Database Basics applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Vector Database Basics (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Vector Database Basics (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Vector Database Basics-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Vector Database Basics in production at scale"
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
        }), " — Facebook's fast similarity search library Database Basics"]
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
        }), ": Add structured logging at each stage of the 03 Vector Database Basics pipeline to identify exactly where the failure occurs."]
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
        children: "Write a minimal working example of Vector Database Basics."
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
        children: "Tell me about a time you debugged a Vector Database Basics problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Vector Database Basics is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_03_vector_database_basics(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 03 Vector Database Basics.\r\n\r\n    Key concepts: chunking, embedding, retrieval, reranking, generation\r\n    Complexity: O(n) embedding, O(log n) ANN search\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 03 Vector Database Basics here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain Vector Database Basics without notes"
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
        href: "/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/04-chunking-strategies",
        children: "Chunking Strategies"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vector Database Basics, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Vector Database Basics depends on input size and distribution — always benchmark for your own data."
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