"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[7569],{

/***/ 1689
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_12_rag_vector_databases_16_hybrid_search_architecture_md_d08_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-12-rag-vector-databases-16-hybrid-search-architecture-md-d08.json
const site_docs_courses_ai_engineering_placement_12_rag_vector_databases_16_hybrid_search_architecture_md_d08_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/rag-vector-databases/16-hybrid-search-architecture","title":"Hybrid Search Architecture","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/12-rag-vector-databases/16-hybrid-search-architecture.md","sourceDirName":"courses/ai-engineering-placement/12-rag-vector-databases","slug":"/ai-engineering-placement/12-rag-vector-databases/16-hybrid-search-architecture","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/16-hybrid-search-architecture","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":173,"frontMatter":{"id":"16-hybrid-search-architecture","slug":"/ai-engineering-placement/12-rag-vector-databases/16-hybrid-search-architecture","title":"Hybrid Search Architecture","sidebar_label":"Hybrid Search Architecture","sidebar_position":173},"sidebar":"placementSidebar","previous":{"title":"Context Compression for RAG","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/15-context-compression"},"next":{"title":"Visual Notes","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/visual-notes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/12-rag-vector-databases/16-hybrid-search-architecture.md


const frontMatter = {
	id: '16-hybrid-search-architecture',
	slug: '/ai-engineering-placement/12-rag-vector-databases/16-hybrid-search-architecture',
	title: 'Hybrid Search Architecture',
	sidebar_label: 'Hybrid Search Architecture',
	sidebar_position: 173
};
const contentTitle = 'Hybrid Search Architecture';

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
  "value": "16.1 Dense Retrieval",
  "id": "161-dense-retrieval",
  "level": 2
}, {
  "value": "Embedding-Based Search",
  "id": "embedding-based-search",
  "level": 3
}, {
  "value": "Cosine Similarity vs Dot Product",
  "id": "cosine-similarity-vs-dot-product",
  "level": 3
}, {
  "value": "ANN Search — HNSW and IVF",
  "id": "ann-search--hnsw-and-ivf",
  "level": 3
}, {
  "value": "16.2 Sparse Retrieval",
  "id": "162-sparse-retrieval",
  "level": 2
}, {
  "value": "BM25 Implementation",
  "id": "bm25-implementation",
  "level": 3
}, {
  "value": "Learned Sparse Representations (SPLADE)",
  "id": "learned-sparse-representations-splade",
  "level": 3
}, {
  "value": "16.3 Fusion Strategies",
  "id": "163-fusion-strategies",
  "level": 2
}, {
  "value": "Reciprocal Rank Fusion (RRF)",
  "id": "reciprocal-rank-fusion-rrf",
  "level": 3
}, {
  "value": "16.4 Multi-Stage Retrieval",
  "id": "164-multi-stage-retrieval",
  "level": 2
}, {
  "value": "16.5 Late Interaction Models",
  "id": "165-late-interaction-models",
  "level": 2
}, {
  "value": "ColBERT-Style MaxSim Scoring",
  "id": "colbert-style-maxsim-scoring",
  "level": 3
}, {
  "value": "Comparison of Interaction Types",
  "id": "comparison-of-interaction-types",
  "level": 3
}, {
  "value": "16.6 Routing Strategies",
  "id": "166-routing-strategies",
  "level": 2
}, {
  "value": "16.7 Putting It All Together",
  "id": "167-putting-it-all-together",
  "level": 2
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
  "value": "Limitations",
  "id": "limitations",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "hybrid-search-architecture",
        children: "Hybrid Search Architecture"
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
            children: "Understand dense retrieval — embedding-based ANN search with HNSW and IVF indexes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement sparse retrieval using BM25, TF-IDF, and learned sparse models like SPLADE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design fusion strategies — RRF, weighted sum, score normalization, rank-based merging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build multi-stage retrieval pipelines with cascade reranking architecture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply late interaction models including ColBERT and MaxSim scoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement routing strategies — query classification, hybrid gates, ensemble retrieval"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Search systems today must handle both exact keyword matches and semantic understanding.\r\nHybrid search architecture combines the strengths of sparse (keyword) and dense (semantic) retrieval into a unified pipeline.\r\nIt is the backbone of production RAG systems, enterprise search, and modern information retrieval."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covers the complete hybrid search stack — from individual retrieval methods to fusion strategies,\r\nmulti-stage pipelines, late interaction models, and intelligent routing of queries to the best retriever."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic Python programming (NumPy, scikit-learn)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of vector embeddings and similarity metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with inverted indexes and TF-IDF weighting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Knowledge of approximate nearest neighbor (ANN) search concepts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Term"
      }), ": Core vocabulary and concepts for hybrid search architecture."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition"
      }), ": Essential terms you must know for interviews and production work."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bi-encoder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Independently encodes query and documents into fixed vectors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cross-encoder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jointly encodes query-document pairs for precise relevance scoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ANN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Approximate Nearest Neighbor — fast vector search with accuracy trade-off"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HNSW"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical Navigable Small World — graph-based ANN index"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IVF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inverted File Index — clustering-based ANN index"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RRF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reciprocal Rank Fusion — rank-based merging of search results"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SPLADE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sparse Lexical and Dense — learned sparse representation model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ColBERT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contextualized Late Interaction over BERT — token-level matching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MaxSim"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum similarity operation between token embeddings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hybrid Gate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routing mechanism to select best retriever per query"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hybrid search architecture is fundamental for AI engineers building production retrieval systems.\r\nThis section covers the core concepts, trade-offs, and theoretical framework."
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
            children: "16.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dense Retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedding-based ANN search with HNSW and IVF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sparse Retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BM25, TF-IDF, SPLADE, learned sparse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fusion Strategies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RRF, weighted sum, score normalization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Stage Retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cascade design — efficient first pass, accurate second pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Late Interaction Models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ColBERT, MaxSim, contextualized token matching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routing Strategies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query classification, hybrid gate, ensemble retrieval"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    Q[Query] --> R[Router / Classifier]\r\n    R --> S[Sparse Retriever<br/>BM25 / SPLADE]\r\n    R --> D[Dense Retriever<br/>ANN / HNSW]\r\n    S --> F[Fusion Engine<br/>RRF / Weighted]\r\n    D --> F\r\n    F --> C[Candidate Pool<br/>Top 100]\r\n    C --> L[Late Interaction<br/>ColBERT MaxSim]\r\n    C --> M[Multi-Stage<br/>Reranker]\r\n    L --> O[Final Ranking]\r\n    M --> O\r\n    subgraph Routing\r\n        R\r\n    end\r\n    subgraph Retrieval\r\n        S\r\n        D\r\n    end\r\n    subgraph Fusion\r\n        F\r\n    end\r\n    subgraph Refinement\r\n        C\r\n        L\r\n        M\r\n    end\r\n    style Routing fill:#e1d5f7,stroke:#7c3aed\r\n    style Retrieval fill:#d5f0e6,stroke:#059669\r\n    style Fusion fill:#fef3c7,stroke:#d97706\r\n    style Refinement fill:#fce7f3,stroke:#db2777"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "161-dense-retrieval",
      children: "16.1 Dense Retrieval"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dense retrieval represents queries and documents as dense vectors (embeddings) in a continuous vector space.\r\nSimilarity is measured using distance metrics like cosine similarity or dot product.\r\nThe retriever searches for documents whose embeddings are closest to the query embedding."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "embedding-based-search",
      children: "Embedding-Based Search"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The core of dense retrieval is an embedding model (bi-encoder) that maps text to a fixed-size vector.\r\nCommon models include ", (0,jsx_runtime.jsx)(_components.code, {
        children: "text-embedding-ada-002"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "all-MiniLM-L6-v2"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bge-large-en-v1.5"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\r\nfrom typing import List, Dict, Tuple, Optional\r\nfrom dataclasses import dataclass, field\r\nimport heapq\r\n\r\n@dataclass\r\nclass Document:\r\n    doc_id: str\r\n    text: str\r\n    embedding: Optional[np.ndarray] = None\r\n\r\n@dataclass\r\nclass SearchResult:\r\n    document: Document\r\n    score: float\r\n    rank: int\r\n    method: str = \"\"\r\n\r\nclass DenseRetriever:\r\n    \"\"\"Dense retrieval using cosine similarity search.\"\"\"\r\n\r\n    def __init__(self, documents: List[Document], normalize: bool = True):\r\n        self.documents = documents\r\n        self.normalize = normalize\r\n        if normalize and documents and documents[0].embedding is not None:\r\n            self._normalize_embeddings()\r\n\r\n    def _normalize_embeddings(self) -> None:\r\n        for doc in self.documents:\r\n            norm = np.linalg.norm(doc.embedding)\r\n            if norm > 0:\r\n                doc.embedding = doc.embedding / norm\r\n\r\n    def cosine_similarity(\r\n        self, query_emb: np.ndarray, doc_emb: np.ndarray\r\n    ) -> float:\r\n        if self.normalize:\r\n            return float(np.dot(query_emb, doc_emb))\r\n        q_norm = np.linalg.norm(query_emb)\r\n        d_norm = np.linalg.norm(doc_emb)\r\n        if q_norm == 0 or d_norm == 0:\r\n            return 0.0\r\n        return float(np.dot(query_emb, doc_emb) / (q_norm * d_norm))\r\n\r\n    def dot_product(\r\n        self, query_emb: np.ndarray, doc_emb: np.ndarray\r\n    ) -> float:\r\n        return float(np.dot(query_emb, doc_emb))\r\n\r\n    def search(\r\n        self, query_emb: np.ndarray, top_k: int = 10,\r\n        similarity_fn: str = \"cosine\"\r\n    ) -> List[SearchResult]:\r\n        if similarity_fn == \"cosine\":\r\n            sim_func = self.cosine_similarity\r\n        elif similarity_fn == \"dot\":\r\n            sim_func = self.dot_product\r\n        else:\r\n            raise ValueError(f\"Unknown similarity: {similarity_fn}\")\r\n\r\n        scores = []\r\n        for doc in self.documents:\r\n            score = sim_func(query_emb, doc.embedding)\r\n            scores.append((score, doc))\r\n\r\n        scores.sort(key=lambda x: x[0], reverse=True)\r\n        return [\r\n            SearchResult(doc, score, rank, \"dense\")\r\n            for rank, (score, doc) in enumerate(scores[:top_k], 1)\r\n        ]\r\n\r\n    def search_batched(\r\n        self, query_embs: np.ndarray, top_k: int = 10\r\n    ) -> List[List[SearchResult]]:\r\n        \"\"\"Batch search for multiple queries (matrix multiply).\"\"\"\r\n        emb_matrix = np.stack(\r\n            [d.embedding for d in self.documents]\r\n        )\r\n        # query_embs: (n_queries, dim), emb_matrix: (n_docs, dim)\r\n        scores = np.dot(query_embs, emb_matrix.T)\r\n        if self.normalize:\r\n            q_norms = np.linalg.norm(query_embs, axis=1, keepdims=True)\r\n            d_norms = np.linalg.norm(emb_matrix, axis=1, keepdims=True).T\r\n            scores = scores / (q_norms * d_norms + 1e-10)\r\n\r\n        results = []\r\n        for q_idx in range(scores.shape[0]):\r\n            top_indices = np.argsort(scores[q_idx])[::-1][:top_k]\r\n            results.append([\r\n                SearchResult(\r\n                    self.documents[idx],\r\n                    float(scores[q_idx][idx]),\r\n                    rank + 1,\r\n                    \"dense\"\r\n                )\r\n                for rank, idx in enumerate(top_indices)\r\n            ])\r\n        return results\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cosine-similarity-vs-dot-product",
      children: "Cosine Similarity vs Dot Product"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Both metrics measure vector alignment but behave differently under normalization."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def compare_similarity_metrics():\r\n    \"\"\"Demonstrate when cosine vs dot product matters.\"\"\"\r\n    import numpy as np\r\n\r\n    # Two vectors with same direction but different magnitudes\r\n    v1 = np.array([0.8, 0.6])\r\n    v2 = np.array([0.08, 0.06])  # same direction, 10x smaller\r\n\r\n    cos_sim = np.dot(v1, v2) / (np.linalg.norm(v1) * np.linalg.norm(v2))\r\n    dot_prod = np.dot(v1, v2)\r\n\r\n    print(f\"Vectors: v1={v1}, v2={v2}\")\r\n    print(f\"Cosine similarity: {cos_sim:.4f}\")\r\n    print(f\"Dot product: {dot_prod:.4f}\")\r\n    print(\"---\")\r\n    print(\"Cosine: invariant to magnitude — captures direction only\")\r\n    print(\"Dot product: sensitive to magnitude — favors longer vectors\")\r\n    print()\r\n    print(\"When to use each:\")\r\n    print(\"  Cosine:    Embeddings are L2-normalized; you care about angle\")\r\n    print(\"  Dot:       Embedding magnitude carries information (e.g., term frequency)\")\r\n    print(\"  In practice: Most sentence transformers output normalized embeddings\")\r\n    print(\"               so cosine = dot product under normalization\")\r\n\r\ncompare_similarity_metrics()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Vectors: v1=[0.8 0.6], v2=[0.08 0.06]\r\nCosine similarity: 1.0000\r\nDot product: 0.1000\r\n---\r\nCosine: invariant to magnitude — captures direction only\r\nDot product: sensitive to magnitude — favors longer vectors\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ann-search--hnsw-and-ivf",
      children: "ANN Search — HNSW and IVF"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Exhaustive search (comparing against all documents) does not scale beyond ~100K documents.\r\nApproximate Nearest Neighbor (ANN) indexes trade a small accuracy loss for massive speed gains."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\r\nclass HNSWNode:\r\n    \"\"\"A node in the HNSW graph.\"\"\"\r\n    vector: np.ndarray\r\n    doc_id: str\r\n    neighbors: Dict[int, List[str]] = field(default_factory=dict)\r\n    # neighbors[level] = list of neighbor node IDs\r\n\r\nclass HNSWIndex:\r\n    \"\"\"\r\n    Hierarchical Navigable Small World index.\r\n    Multi-layer graph: top layer has long edges (coarse), bottom has short edges (fine).\r\n    Search starts at top layer and descends.\r\n    \"\"\"\r\n\r\n    def __init__(\r\n        self,\r\n        dim: int,\r\n        M: int = 16,\r\n        ef_construction: int = 200,\r\n        ef_search: int = 50,\r\n        ml: float = 1.0 / np.log(1.0 * M)\r\n    ):\r\n        self.dim = dim\r\n        self.M = M  # number of connections per layer\r\n        self.M_max = M\r\n        self.ef_construction = ef_construction\r\n        self.ef_search = ef_search\r\n        self.ml = ml  # level normalization factor\r\n        self.nodes: Dict[str, HNSWNode] = {}\r\n        self.entry_point: Optional[str] = None\r\n        self.max_level = 0\r\n\r\n    def _random_level(self) -> int:\r\n        \"\"\"Assign random level for new node (exponential decay).\"\"\"\r\n        return int(-np.log(np.random.random()) * self.ml)\r\n\r\n    def _distance(self, a: np.ndarray, b: np.ndarray) -> float:\r\n        return float(np.linalg.norm(a - b))\r\n\r\n    def add(self, doc_id: str, vector: np.ndarray) -> None:\r\n        level = self._random_level()\r\n        node = HNSWNode(vector=vector, doc_id=doc_id)\r\n\r\n        if self.entry_point is None:\r\n            self.entry_point = doc_id\r\n            self.max_level = level\r\n            self.nodes[doc_id] = node\r\n            return\r\n\r\n        # find nearest neighbor from entry point\r\n        curr = self.entry_point\r\n        curr_dist = self._distance(vector, self.nodes[curr].vector)\r\n\r\n        # traverse from top layer down to level+1\r\n        for lc in range(self.max_level, level, -1):\r\n            changed = True\r\n            while changed:\r\n                changed = False\r\n                curr_node = self.nodes[curr]\r\n                for neighbor_id in curr_node.neighbors.get(lc, []):\r\n                    d = self._distance(vector, self.nodes[neighbor_id].vector)\r\n                    if d < curr_dist:\r\n                        curr = neighbor_id\r\n                        curr_dist = d\r\n                        changed = True\r\n\r\n        # connect at current and lower layers\r\n        for lc in range(min(level, self.max_level), -1, -1):\r\n            # find M nearest neighbors at this layer\r\n            candidates = self._search_at_layer(vector, curr, lc, self.M)\r\n            node.neighbors[lc] = [c[0] for c in candidates]\r\n            for neighbor_id, _ in candidates:\r\n                if lc not in self.nodes[neighbor_id].neighbors:\r\n                    self.nodes[neighbor_id].neighbors[lc] = []\r\n                if doc_id not in self.nodes[neighbor_id].neighbors[lc]:\r\n                    self.nodes[neighbor_id].neighbors[lc].append(doc_id)\r\n\r\n        self.nodes[doc_id] = node\r\n        if level > self.max_level:\r\n            self.max_level = level\r\n            self.entry_point = doc_id\r\n\r\n    def _search_at_layer(\r\n        self, query: np.ndarray, entry: str,\r\n        layer: int, ef: int\r\n    ) -> List[Tuple[str, float]]:\r\n        visited = {entry}\r\n        candidates = [(self._distance(query, self.nodes[entry].vector), entry)]\r\n        heapq.heapify(candidates)\r\n        results = [(self._distance(query, self.nodes[entry].vector), entry)]\r\n        heapq.heapify(results)\r\n\r\n        while candidates:\r\n            dist, node_id = heapq.heappop(candidates)\r\n            # furthest in results\r\n            furthest_dist = -results[0][0] if results else float('inf')\r\n\r\n            if dist > furthest_dist + 1e-6:\r\n                break\r\n\r\n            node = self.nodes[node_id]\r\n            for neighbor_id in node.neighbors.get(layer, []):\r\n                if neighbor_id not in visited:\r\n                    visited.add(neighbor_id)\r\n                    d = self._distance(query, self.nodes[neighbor_id].vector)\r\n                    heapq.heappush(candidates, (d, neighbor_id))\r\n\r\n                    if len(results) < ef:\r\n                        heapq.heappush(results, (-d, neighbor_id))\r\n                    elif d < -results[0][0]:\r\n                        heapq.heappushpop(results, (-d, neighbor_id))\r\n\r\n        return [(nid, -d) for d, nid in sorted(results, key=lambda x: -x[0])]\r\n\r\n    def search(\r\n        self, query: np.ndarray, top_k: int = 10\r\n    ) -> List[Tuple[str, float]]:\r\n        if self.entry_point is None:\r\n            return []\r\n\r\n        curr = self.entry_point\r\n        curr_dist = self._distance(query, self.nodes[curr].vector)\r\n\r\n        for lc in range(self.max_level, 0, -1):\r\n            changed = True\r\n            while changed:\r\n                changed = False\r\n                node = self.nodes[curr]\r\n                for neighbor_id in node.neighbors.get(lc, []):\r\n                    d = self._distance(query, self.nodes[neighbor_id].vector)\r\n                    if d < curr_dist:\r\n                        curr = neighbor_id\r\n                        curr_dist = d\r\n                        changed = True\r\n\r\n        candidates = self._search_at_layer(\r\n            query, curr, 0, max(self.ef_search, top_k)\r\n        )\r\n        return sorted(candidates, key=lambda x: x[1])[:top_k]\r\n\r\nclass IVFIndex:\r\n    \"\"\"\r\n    Inverted File Index.\r\n    Clusters vectors into Voronoi cells. Search only explores nearest centroids.\r\n    \"\"\"\r\n\r\n    def __init__(\r\n        self, dim: int, n_centroids: int = 100, n_probe: int = 10\r\n    ):\r\n        self.dim = dim\r\n        self.n_centroids = n_centroids\r\n        self.n_probe = n_probe\r\n        self.centroids: Optional[np.ndarray] = None\r\n        self.inverted_lists: Dict[int, List[Tuple[str, np.ndarray]]] = {}\r\n        self.doc_ids: List[str] = []\r\n\r\n    def train(self, vectors: np.ndarray, doc_ids: List[str]) -> None:\r\n        \"\"\"K-means clustering to build inverted lists.\"\"\"\r\n        from sklearn.cluster import KMeans\r\n\r\n        kmeans = KMeans(\r\n            n_clusters=self.n_centroids, random_state=42, n_init=3\r\n        )\r\n        labels = kmeans.fit_predict(vectors)\r\n        self.centroids = kmeans.cluster_centers_\r\n\r\n        for idx, label in enumerate(labels):\r\n            if label not in self.inverted_lists:\r\n                self.inverted_lists[label] = []\r\n            self.inverted_lists[label].append((doc_ids[idx], vectors[idx]))\r\n\r\n        self.doc_ids = doc_ids\r\n\r\n    def search(\r\n        self, query: np.ndarray, top_k: int = 10\r\n    ) -> List[Tuple[str, float]]:\r\n        if self.centroids is None:\r\n            return []\r\n\r\n        # find nearest n_probe centroids\r\n        dists = np.linalg.norm(\r\n            self.centroids - query.reshape(1, -1), axis=1\r\n        )\r\n        nearest_centroids = np.argsort(dists)[:self.n_probe]\r\n\r\n        # search only within those inverted lists\r\n        candidates: List[Tuple[float, str]] = []\r\n        for cid in nearest_centroids:\r\n            for doc_id, vec in self.inverted_lists.get(cid, []):\r\n                dist = float(np.linalg.norm(vec - query))\r\n                candidates.append((dist, doc_id))\r\n\r\n        candidates.sort(key=lambda x: x[0])\r\n        return candidates[:top_k]\r\n\r\n    def recall_at_k(\r\n        self, query: np.ndarray, ground_truth: List[str], k: int = 10\r\n    ) -> float:\r\n        results = self.search(query, top_k=k)\r\n        retrieved = set(doc_id for _, doc_id in results)\r\n        relevant = set(ground_truth)\r\n        if not relevant:\r\n            return 0.0\r\n        return len(retrieved & relevant) / len(relevant)\r\n\r\ndef demonstrate_dense_retrieval():\r\n    \"\"\"End-to-end dense retrieval example.\"\"\"\r\n    dim = 128\r\n    n_docs = 1000\r\n\r\n    # synthetic embeddings\r\n    rng = np.random.RandomState(42)\r\n    documents = [\r\n        Document(\r\n            doc_id=f\"doc_{i}\",\r\n            text=f\"Document {i} about {'AI' if i % 3 == 0 else 'search' if i % 3 == 1 else 'data'}\",\r\n            embedding=rng.randn(dim).astype(np.float32)\r\n        )\r\n        for i in range(n_docs)\r\n    ]\r\n\r\n    retriever = DenseRetriever(documents, normalize=True)\r\n    query_emb = rng.randn(dim).astype(np.float32)\r\n    query_emb = query_emb / np.linalg.norm(query_emb)\r\n\r\n    results = retriever.search(query_emb, top_k=5, similarity_fn=\"cosine\")\r\n    print(\"=== Dense Retrieval Results (Cosine) ===\")\r\n    for r in results:\r\n        print(f\"  Rank {r.rank}: {r.document.doc_id} — score={r.score:.4f}\")\r\n\r\n    # Compare with dot product on non-normalized\r\n    retriever_un = DenseRetriever(documents, normalize=False)\r\n    results_dot = retriever_un.search(query_emb, top_k=5, similarity_fn=\"dot\")\r\n    print(\"\\n=== Dense Retrieval Results (Dot Product, unnormalized) ===\")\r\n    for r in results_dot:\r\n        print(f\"  Rank {r.rank}: {r.document.doc_id} — score={r.score:.4f}\")\r\n\r\ndemonstrate_dense_retrieval()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    Q[Query Text] --> E[Embedding Model<br/>Bi-Encoder]\r\n    E --> QV[Query Vector<br/>d=768]\r\n    QV --> ANN{ANN Index}\r\n    \r\n    subgraph ANN_Index [ANN Index Options]\r\n        HNSW[HNSW<br/>Graph-based]\r\n        IVF[IVF<br/>Clustering-based]\r\n        PQ[PQ<br/>Product Quantization]\r\n    end\r\n    \r\n    ANN --> C1[Coarse Search<br/>Top-Layer Traversal]\r\n    ANN --> C2[Centroid Search<br/>Nearest Clusters]\r\n    ANN --> C3[Codebook Search<br/>Compressed Vectors]\r\n    \r\n    C1 --> D1[Fine Search<br/>Bottom-Layer Refinement]\r\n    C2 --> D2[Full Scan<br/>Probed Clusters]\r\n    C3 --> D3[Distance Table<br/>ADC Computation]\r\n    \r\n    D1 --> R[Top-K Results]\r\n    D2 --> R\r\n    D3 --> R\r\n    \r\n    style ANN_Index fill:#d5f0e6,stroke:#059669\r\n    style R fill:#fef3c7,stroke:#d97706"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "162-sparse-retrieval",
      children: "16.2 Sparse Retrieval"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sparse retrieval represents documents as sparse vectors (bags of words or learned term weights).\r\nBM25 and TF-IDF operate over inverted indexes. SPLADE learns sparse representations from transformer models."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bm25-implementation",
      children: "BM25 Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BM25 scores each query term based on its frequency in the document relative to the corpus.\r\nIt includes document length normalization and saturation to prevent term frequency domination."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import math\r\nfrom collections import Counter, defaultdict\r\nfrom typing import List, Set\r\nimport re\r\n\r\nclass BM25:\r\n    \"\"\"\r\n    Okapi BM25 retrieval model.\r\n    Score = sum over query terms of IDF * (f * (k1 + 1)) / (f + k1 * (1 - b + b * |d| / avgdl))\r\n    \"\"\"\r\n\r\n    def __init__(\r\n        self,\r\n        k1: float = 1.5,\r\n        b: float = 0.75,\r\n        epsilon: float = 0.25\r\n    ):\r\n        self.k1 = k1\r\n        self.b = b\r\n        self.epsilon = epsilon\r\n        self.documents: List[str] = []\r\n        self.doc_ids: List[str] = []\r\n        self.avgdl: float = 0.0\r\n        self.doc_freqs: List[Counter] = []\r\n        self.idf: Dict[str, float] = {}\r\n        self.doc_len: List[int] = []\r\n        self.N: int = 0  # total documents\r\n        self.inverted_index: Dict[str, List[int]] = defaultdict(list)\r\n\r\n    def _tokenize(self, text: str) -> List[str]:\r\n        return re.findall(r'\\w+', text.lower())\r\n\r\n    def fit(self, documents: List[str], doc_ids: List[str]) -> None:\r\n        self.documents = documents\r\n        self.doc_ids = doc_ids\r\n        self.N = len(documents)\r\n        self.doc_len = []\r\n        self.doc_freqs = []\r\n        doc_term_set: List[Set[str]] = []\r\n\r\n        for doc in documents:\r\n            tokens = self._tokenize(doc)\r\n            self.doc_len.append(len(tokens))\r\n            freq = Counter(tokens)\r\n            self.doc_freqs.append(freq)\r\n            doc_term_set.append(set(tokens.keys()))\r\n\r\n        self.avgdl = sum(self.doc_len) / max(self.N, 1)\r\n\r\n        # build inverted index and compute IDF\r\n        df: Counter = Counter()\r\n        for idx, term_set in enumerate(doc_term_set):\r\n            for term in term_set:\r\n                df[term] += 1\r\n                self.inverted_index[term].append(idx)\r\n\r\n        self.idf = {}\r\n        for term, doc_freq in df.items():\r\n            idf = math.log(\r\n                (self.N - doc_freq + 0.5) / (doc_freq + 0.5) + 1.0\r\n            )\r\n            self.idf[term] = max(idf, self.epsilon)\r\n\r\n    def _score_document(self, query_tokens: List[str], doc_idx: int) -> float:\r\n        score = 0.0\r\n        doc_len = self.doc_len[doc_idx]\r\n        doc_freq = self.doc_freqs[doc_idx]\r\n\r\n        for term in query_tokens:\r\n            if term not in self.idf:\r\n                continue\r\n            idf = self.idf[term]\r\n            f = doc_freq.get(term, 0)\r\n            if f == 0:\r\n                continue\r\n            # BM25 term frequency saturation\r\n            numerator = f * (self.k1 + 1.0)\r\n            denominator = f + self.k1 * (\r\n                1.0 - self.b + self.b * doc_len / self.avgdl\r\n            )\r\n            score += idf * numerator / denominator\r\n\r\n        return score\r\n\r\n    def search(\r\n        self, query: str, top_k: int = 10\r\n    ) -> List[SearchResult]:\r\n        query_tokens = self._tokenize(query)\r\n        scores = []\r\n\r\n        # find candidate docs via inverted index\r\n        candidate_docs: Set[int] = set()\r\n        for term in query_tokens:\r\n            if term in self.inverted_index:\r\n                for doc_idx in self.inverted_index[term]:\r\n                    candidate_docs.add(doc_idx)\r\n\r\n        for doc_idx in candidate_docs:\r\n            score = self._score_document(query_tokens, doc_idx)\r\n            scores.append((score, doc_idx))\r\n\r\n        scores.sort(key=lambda x: x[0], reverse=True)\r\n        return [\r\n            SearchResult(\r\n                Document(\r\n                    doc_id=self.doc_ids[idx],\r\n                    text=self.documents[idx]\r\n                ),\r\n                score, rank, \"bm25\"\r\n            )\r\n            for rank, (score, idx) in enumerate(scores[:top_k], 1)\r\n        ]\r\n\r\nclass TFIDFRetriever:\r\n    \"\"\"TF-IDF based sparse retrieval.\"\"\"\r\n\r\n    def __init__(self, smooth_idf: bool = True):\r\n        self.smooth_idf = smooth_idf\r\n        self.documents: List[str] = []\r\n        self.doc_ids: List[str] = []\r\n        self.tf_matrix: List[Counter] = []\r\n        self.idf: Dict[str, float] = {}\r\n        self.vocabulary: List[str] = []\r\n\r\n    def _tokenize(self, text: str) -> List[str]:\r\n        return re.findall(r'\\w+', text.lower())\r\n\r\n    def fit(self, documents: List[str], doc_ids: List[str]) -> None:\r\n        self.documents = documents\r\n        self.doc_ids = doc_ids\r\n        N = len(documents)\r\n\r\n        # term frequency per document\r\n        self.tf_matrix = []\r\n        df = Counter()\r\n        for doc in documents:\r\n            tokens = self._tokenize(doc)\r\n            freq = Counter(tokens)\r\n            self.tf_matrix.append(freq)\r\n            for term in freq:\r\n                df[term] += 1\r\n\r\n        self.vocabulary = sorted(df.keys())\r\n\r\n        # inverse document frequency\r\n        for term, doc_freq in df.items():\r\n            if self.smooth_idf:\r\n                self.idf[term] = math.log((N + 1) / (doc_freq + 1)) + 1.0\r\n            else:\r\n                self.idf[term] = math.log(N / max(doc_freq, 1))\r\n\r\n    def search(\r\n        self, query: str, top_k: int = 10\r\n    ) -> List[SearchResult]:\r\n        query_tokens = self._tokenize(query)\r\n        query_tf = Counter(query_tokens)\r\n\r\n        scores = []\r\n        for idx in range(len(self.documents)):\r\n            score = 0.0\r\n            for term in query_tf:\r\n                if term not in self.idf:\r\n                    continue\r\n                tf = self.tf_matrix[idx].get(term, 0)\r\n                if tf == 0:\r\n                    continue\r\n                # TF-IDF = (1 + log(tf)) * log(N/df)\r\n                tf_weight = 1 + math.log(tf) if tf > 0 else 0\r\n                score += tf_weight * self.idf[term]\r\n            scores.append((score, idx))\r\n\r\n        scores.sort(key=lambda x: x[0], reverse=True)\r\n        return [\r\n            SearchResult(\r\n                Document(\r\n                    doc_id=self.doc_ids[idx],\r\n                    text=self.documents[idx]\r\n                ),\r\n                score, rank, \"tfidf\"\r\n            )\r\n            for rank, (score, idx) in enumerate(scores[:top_k], 1)\r\n        ]\r\n\r\ndef compare_sparse_methods():\r\n    \"\"\"Compare BM25 and TF-IDF on sample documents.\"\"\"\r\n    docs = [\r\n        \"The quick brown fox jumps over the lazy dog\",\r\n        \"A fast brown fox leaps over a sleepy dog\",\r\n        \"The lazy dog sleeps in the sun all day\",\r\n        \"Machine learning models learn from data patterns\",\r\n        \"Deep neural networks excel at pattern recognition\",\r\n        \"Data science involves statistics machine learning and visualization\",\r\n        \"Python is a popular language for machine learning and data science\",\r\n    ]\r\n    doc_ids = [f\"doc_{i}\" for i in range(len(docs))]\r\n\r\n    bm25 = BM25()\r\n    bm25.fit(docs, doc_ids)\r\n\r\n    tfidf = TFIDFRetriever()\r\n    tfidf.fit(docs, doc_ids)\r\n\r\n    queries = [\"brown fox jumps\", \"machine learning data\", \"lazy dog sleep\"]\r\n\r\n    for query in queries:\r\n        print(f\"\\n=== Query: '{query}' ===\")\r\n\r\n        bm25_results = bm25.search(query, top_k=3)\r\n        tfidf_results = tfidf.search(query, top_k=3)\r\n\r\n        print(\"BM25:\")\r\n        for r in bm25_results:\r\n            print(f\"  Rank {r.rank}: {r.document.doc_id} — score={r.score:.4f}\")\r\n        print(\"TF-IDF:\")\r\n        for r in tfidf_results:\r\n            print(f\"  Rank {r.rank}: {r.document.doc_id} — score={r.score:.4f}\")\r\n\r\ncompare_sparse_methods()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "learned-sparse-representations-splade",
      children: "Learned Sparse Representations (SPLADE)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SPLADE uses a transformer encoder to produce term-weighted sparse vectors directly.\r\nEach token in the vocabulary gets a weight indicating its relevance to the document/query.\r\nThis combines the interpretability of sparse retrieval with the semantic power of transformers."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SPLADEStyleRetriever:\r\n    \"\"\"\r\n    Simplified SPLADE-style learned sparse retrieval.\r\n    Uses MLM-based logits to produce term importance weights.\r\n\r\n    In production: use a trained SPLADE model from HuggingFace.\r\n    \"\"\"\r\n\r\n    def __init__(\r\n        self, vocabulary: List[str], lambda_reg: float = 0.01\r\n    ):\r\n        self.vocabulary = vocabulary\r\n        self.vocab_index = {w: i for i, w in enumerate(vocabulary)}\r\n        self.lambda_reg = lambda_reg\r\n        # In practice, this would be a BERT MLM head output\r\n        # Here we simulate with random term importance\r\n        self.doc_vectors: Dict[str, np.ndarray] = {}\r\n\r\n    def _encode_simulated(\r\n        self, text: str, rng: np.random.RandomState\r\n    ) -> np.ndarray:\r\n        \"\"\"Simulate SPLADE output: sparse logits over vocabulary.\"\"\"\r\n        tokens = re.findall(r'\\w+', text.lower())\r\n        vec = np.zeros(len(self.vocabulary), dtype=np.float32)\r\n\r\n        for token in tokens:\r\n            if token in self.vocab_index:\r\n                # Simulate MLM logit (would be from BERT in practice)\r\n                vec[self.vocab_index[token]] = rng.exponential(scale=2.0)\r\n\r\n        # ReLU + log-saturation (SPLADE uses log(1 + ReLU(x)))\r\n        vec = np.log1p(np.maximum(vec, 0.0))\r\n\r\n        # Apply FLOPS regularization penalty (simulated)\r\n        sparsity = np.mean(vec > 0)\r\n        reg_penalty = self.lambda_reg * sparsity * len(tokens)\r\n\r\n        return vec\r\n\r\n    def fit(\r\n        self, documents: List[str], doc_ids: List[str],\r\n        seed: int = 42\r\n    ) -> None:\r\n        rng = np.random.RandomState(seed)\r\n        for doc_id, text in zip(doc_ids, documents):\r\n            self.doc_vectors[doc_id] = self._encode_simulated(text, rng)\r\n\r\n    def search(\r\n        self, query: str, top_k: int = 10\r\n    ) -> List[SearchResult]:\r\n        rng = np.random.RandomState(42)\r\n        query_vec = self._encode_simulated(query, rng)\r\n\r\n        scores = []\r\n        for doc_id, doc_vec in self.doc_vectors.items():\r\n            # Dot product of sparse vectors (SPLADE scoring)\r\n            score = float(np.dot(query_vec, doc_vec))\r\n            scores.append((score, doc_id))\r\n\r\n        scores.sort(key=lambda x: x[0], reverse=True)\r\n        return [\r\n            SearchResult(\r\n                Document(doc_id=doc_id, text=\"\"),\r\n                score, rank, \"splade\"\r\n            )\r\n            for rank, (score, doc_id) in enumerate(scores[:top_k], 1)\r\n        ]\r\n\r\n    def interpret_query(self, query: str) -> List[Tuple[str, float]]:\r\n        \"\"\"Show which vocabulary terms are activated for a query.\"\"\"\r\n        rng = np.random.RandomState(42)\r\n        query_vec = self._encode_simulated(query, rng)\r\n\r\n        activated = [\r\n            (self.vocabulary[i], float(query_vec[i]))\r\n            for i in np.argsort(query_vec)[::-1][:10]\r\n            if query_vec[i] > 0\r\n        ]\r\n        return activated\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    subgraph Sparse [Sparse Retrieval Methods]\r\n        BM25[BM25<br/>Okapi BM25<br/>k1=1.5, b=0.75]\r\n        TFIDF[TF-IDF<br/>Term Freq x Inverse Doc Freq]\r\n        SPLADE[SPLADE<br/>Learned Sparse<br/>Transformer + MLM]\r\n    end\r\n\r\n    subgraph Index [Index Structure]\r\n        INVERTED[Inverted Index<br/>Term → Doc List]\r\n        POSTING[Posting List<br/>(doc_id, tf, positions)]\r\n    end\r\n\r\n    subgraph Scoring [Scoring]\r\n        SATURATION[Term Saturation<br/>f / (f + k1 * norm)]\r\n        IDF_COMP[IDF Component<br/>log(N / df)]\r\n        DOT_PROD[Dot Product<br/>Sparse Vector Similarity]\r\n    end\r\n\r\n    BM25 --> INVERTED --> POSTING --> SATURATION --> IDF_COMP --> SCORE[Final Score]\r\n    TFIDF --> INVERTED\r\n    SPLADE --> DOT_PROD --> SCORE\r\n\r\n    style Sparse fill:#e1d5f7,stroke:#7c3aed\r\n    style Index fill:#d5f0e6,stroke:#059669\r\n    style Scoring fill:#fef3c7,stroke:#d97706"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "163-fusion-strategies",
      children: "16.3 Fusion Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fusion combines results from multiple retrieval methods into a single ranked list.\r\nThe challenge is that scores from different retrievers are not directly comparable."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reciprocal-rank-fusion-rrf",
      children: "Reciprocal Rank Fusion (RRF)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RRF is the simplest and most robust fusion method. It converts ranks to scores using:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "score(doc) = sum( 1 / (k + rank_r(doc)) )"
      }), " for each retriever r."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import defaultdict\r\nfrom typing import List, Dict, Callable\r\n\r\nclass FusionEngine:\r\n    \"\"\"Combines results from multiple retrievers into a single ranking.\"\"\"\r\n\r\n    def __init__(self, strategy: str = \"rrf\", k_constant: int = 60):\r\n        self.strategy = strategy\r\n        self.k_constant = k_constant  # RRF constant\r\n\r\n    def fuse(\r\n        self, results_list: List[List[SearchResult]], top_k: int = 10\r\n    ) -> List[SearchResult]:\r\n        if self.strategy == \"rrf\":\r\n            return self._rrf_fusion(results_list, top_k)\r\n        elif self.strategy == \"weighted\":\r\n            return self._weighted_fusion(results_list, top_k)\r\n        elif self.strategy == \"borda\":\r\n            return self._borda_fusion(results_list, top_k)\r\n        elif self.strategy == \"score_norm\":\r\n            return self._score_normalized_fusion(results_list, top_k)\r\n        else:\r\n            raise ValueError(f\"Unknown fusion strategy: {self.strategy}\")\r\n\r\n    def _rrf_fusion(\r\n        self, results_list: List[List[SearchResult]], top_k: int\r\n    ) -> List[SearchResult]:\r\n        \"\"\"Reciprocal Rank Fusion.\"\"\"\r\n        scores: Dict[str, float] = defaultdict(float)\r\n        doc_map: Dict[str, Document] = {}\r\n\r\n        for results in results_list:\r\n            for rank, result in enumerate(results, 1):\r\n                doc_map[result.document.doc_id] = result.document\r\n                scores[result.document.doc_id] += 1.0 / (\r\n                    self.k_constant + rank\r\n                )\r\n\r\n        sorted_docs = sorted(\r\n            scores.items(), key=lambda x: x[1], reverse=True\r\n        )\r\n\r\n        return [\r\n            SearchResult(\r\n                doc_map[doc_id],\r\n                score,\r\n                rank + 1,\r\n                f\"rrf_fusion_{self.strategy}\"\r\n            )\r\n            for rank, (doc_id, score) in enumerate(\r\n                sorted_docs[:top_k]\r\n            )\r\n        ]\r\n\r\n    def _weighted_fusion(\r\n        self, results_list: List[List[SearchResult]], top_k: int,\r\n        weights: Optional[List[float]] = None\r\n    ) -> List[SearchResult]:\r\n        \"\"\"Weighted linear combination of normalized scores.\"\"\"\r\n        n_retrievers = len(results_list)\r\n        if weights is None:\r\n            weights = [1.0 / n_retrievers] * n_retrievers\r\n        assert len(weights) == n_retrievers\r\n\r\n        scores: Dict[str, float] = defaultdict(float)\r\n        doc_map: Dict[str, Document] = {}\r\n\r\n        for retriever_idx, results in enumerate(results_list):\r\n            # Score normalize to [0, 1] within this retriever\r\n            scores_list = [r.score for r in results]\r\n            max_s = max(scores_list) if scores_list else 1.0\r\n            min_s = min(scores_list) if scores_list else 0.0\r\n            s_range = max_s - min_s if max_s != min_s else 1.0\r\n\r\n            for result in results:\r\n                doc_map[result.document.doc_id] = result.document\r\n                norm_score = (result.score - min_s) / s_range\r\n                scores[result.document.doc_id] += (\r\n                    weights[retriever_idx] * norm_score\r\n                )\r\n\r\n        sorted_docs = sorted(\r\n            scores.items(), key=lambda x: x[1], reverse=True\r\n        )\r\n        return [\r\n            SearchResult(\r\n                doc_map[doc_id], score, rank + 1, \"weighted_fusion\"\r\n            )\r\n            for rank, (doc_id, score) in enumerate(\r\n                sorted_docs[:top_k]\r\n            )\r\n        ]\r\n\r\n    def _borda_fusion(\r\n        self, results_list: List[List[SearchResult]], top_k: int\r\n    ) -> List[SearchResult]:\r\n        \"\"\"Borda count: points based on rank position.\"\"\"\r\n        scores: Dict[str, float] = defaultdict(float)\r\n        doc_map: Dict[str, Document] = {}\r\n\r\n        for results in results_list:\r\n            n_results = len(results)\r\n            for rank, result in enumerate(results, 1):\r\n                doc_map[result.document.doc_id] = result.document\r\n                # Higher rank = more points\r\n                scores[result.document.doc_id] += n_results - rank + 1\r\n\r\n        sorted_docs = sorted(\r\n            scores.items(), key=lambda x: x[1], reverse=True\r\n        )\r\n        return [\r\n            SearchResult(\r\n                doc_map[doc_id], score, rank + 1, \"borda_fusion\"\r\n            )\r\n            for rank, (doc_id, score) in enumerate(\r\n                sorted_docs[:top_k]\r\n            )\r\n        ]\r\n\r\n    def _score_normalized_fusion(\r\n        self, results_list: List[List[SearchResult]], top_k: int\r\n    ) -> List[SearchResult]:\r\n        \"\"\"Fuse by normalizing scores then summing.\"\"\"\r\n        # Min-max normalization per retriever\r\n        normalized_results = []\r\n        for results in results_list:\r\n            scores = [r.score for r in results]\r\n            min_s = min(scores) if scores else 0.0\r\n            max_s = max(scores) if scores else 1.0\r\n            s_range = max_s - min_s if max_s != min_s else 1.0\r\n            normalized_list = []\r\n            for r in results:\r\n                norm_score = (r.score - min_s) / s_range\r\n                normalized_list.append(\r\n                    SearchResult(\r\n                        r.document, norm_score, r.rank, r.method\r\n                    )\r\n                )\r\n            normalized_results.append(normalized_list)\r\n\r\n        return self._rrf_fusion(normalized_results, top_k)\r\n\r\nclass ScoreNormalizer:\r\n    \"\"\"Normalize scores from different retrievers to comparable scales.\"\"\"\r\n\r\n    @staticmethod\r\n    def min_max(\r\n        scores: List[float], eps: float = 1e-10\r\n    ) -> List[float]:\r\n        min_s = min(scores)\r\n        max_s = max(scores)\r\n        if abs(max_s - min_s) < eps:\r\n            return [0.5] * len(scores)\r\n        return [(s - min_s) / (max_s - min_s) for s in scores]\r\n\r\n    @staticmethod\r\n    def z_score(scores: List[float]) -> List[float]:\r\n        mean = np.mean(scores)\r\n        std = np.std(scores)\r\n        if std < 1e-10:\r\n            return [0.0] * len(scores)\r\n        return [(s - mean) / std for s in scores]\r\n\r\n    @staticmethod\r\n    def quantile(\r\n        scores: List[float], n_quantiles: int = 10\r\n    ) -> List[float]:\r\n        \"\"\"Rank-based normalization to quantile bins.\"\"\"\r\n        sorted_scores = sorted(enumerate(scores), key=lambda x: x[1])\r\n        n = len(scores)\r\n        normalized = [0.0] * n\r\n        for rank, (orig_idx, _) in enumerate(sorted_scores):\r\n            quantile = rank / max(n - 1, 1)\r\n            normalized[orig_idx] = quantile\r\n        return normalized\r\n\r\n    @staticmethod\r\n    def softmax(\r\n        scores: List[float], temperature: float = 1.0\r\n    ) -> List[float]:\r\n        exp_s = [math.exp(s / temperature) for s in scores]\r\n        total = sum(exp_s)\r\n        return [s / total for s in exp_s]\r\n\r\ndef demonstrate_fusion_strategies():\r\n    \"\"\"Compare fusion strategies on example results.\"\"\"\r\n    import numpy as np\r\n\r\n    # Simulate results from two retrievers\r\n    sparse_results = [\r\n        SearchResult(Document(\"doc_1\", \"AI document\"), 25.0, 1, \"bm25\"),\r\n        SearchResult(Document(\"doc_2\", \"Search doc\"), 20.0, 2, \"bm25\"),\r\n        SearchResult(Document(\"doc_3\", \"Data doc\"), 18.0, 3, \"bm25\"),\r\n        SearchResult(Document(\"doc_4\", \"ML doc\"), 15.0, 4, \"bm25\"),\r\n    ]\r\n\r\n    dense_results = [\r\n        SearchResult(Document(\"doc_5\", \"Neural doc\"), 0.92, 1, \"dense\"),\r\n        SearchResult(Document(\"doc_1\", \"AI document\"), 0.88, 2, \"dense\"),\r\n        SearchResult(Document(\"doc_3\", \"Data doc\"), 0.85, 3, \"dense\"),\r\n        SearchResult(Document(\"doc_6\", \"Vector doc\"), 0.81, 4, \"dense\"),\r\n    ]\r\n\r\n    engine = FusionEngine()\r\n\r\n    print(\"=== RRF Fusion ===\")\r\n    rrf_results = engine.fuse([sparse_results, dense_results], top_k=4)\r\n    for r in rrf_results:\r\n        print(f\"  {r.document.doc_id}: RRF score={r.score:.4f}\")\r\n\r\n    print(\"\\n=== Weighted Fusion (equal weights) ===\")\r\n    w_results = engine.fuse(\r\n        [sparse_results, dense_results], top_k=4, weights=[0.5, 0.5]\r\n    )\r\n    for r in w_results:\r\n        print(f\"  {r.document.doc_id}: weighted score={r.score:.4f}\")\r\n\r\n    print(\"\\n=== Borda Fusion ===\")\r\n    b_results = engine.fuse([sparse_results, dense_results], top_k=4)\r\n    for r in b_results:\r\n        print(f\"  {r.document.doc_id}: borda score={r.score:.4f}\")\r\n\r\n    print(\"\\n=== Rank vs Score Based ===\")\r\n    print(\"RRF: rank-based — uses only ordering, immune to score hacking\")\r\n    print(\"Weighted: score-based — sensitive to normalization but captures confidence\")\r\n    print(\"Borda: rank-based — similar to RRF, simpler but less robust\")\r\n\r\ndemonstrate_fusion_strategies()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    subgraph Retrievers\r\n        S[Sparse<br/>BM25] --> SR[(Sparse<br/>Results)]\r\n        D[Dense<br/>ANN] --> DR[(Dense<br/>Results)]\r\n    end\r\n\r\n    subgraph Normalization [Score Normalization]\r\n        N1[Min-Max<br/>[0, 1] scaling]\r\n        N2[Z-Score<br/>μ=0, σ=1]\r\n        N3[Quantile<br/>Rank bins]\r\n        N4[Softmax<br/>Probabilities]\r\n    end\r\n\r\n    subgraph Fusion [Fusion Methods]\r\n        RRF[RRF<br/>1/(k + rank)]\r\n        WS[Weighted Sum<br/>α·S_sparse + β·S_dense]\r\n        BC[Borda Count<br/>n - rank + 1]\r\n    end\r\n\r\n    SR --> N1 --> RRF\r\n    DR --> N1 --> RRF\r\n    SR --> N2 --> WS\r\n    DR --> N2 --> WS\r\n    SR --> N3 --> BC\r\n    DR --> N3 --> BC\r\n\r\n    RRF --> FUSED[Fused Ranking]\r\n    WS --> FUSED\r\n    BC --> FUSED\r\n\r\n    style Retrievers fill:#d5f0e6,stroke:#059669\r\n    style Normalization fill:#fce7f3,stroke:#db2777\r\n    style Fusion fill:#fef3c7,stroke:#d97706"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "164-multi-stage-retrieval",
      children: "16.4 Multi-Stage Retrieval"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multi-stage (cascade) retrieval separates retrieval into cheap and expensive phases.\r\nFirst stage: fast, recall-oriented. Second stage: accurate, precision-oriented."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MultiStageRetriever:\r\n    \"\"\"\r\n    Cascade retrieval pipeline:\r\n    Stage 1: Fast bi-encoder / BM25 → top 100\r\n    Stage 2: Lightweight reranker → top 20\r\n    Stage 3: Cross-encoder / LLM → top 5\r\n    \"\"\"\r\n\r\n    def __init__(\r\n        self,\r\n        stage1_retriever,\r\n        stage2_reranker,\r\n        stage3_reranker=None,\r\n        stage1_k: int = 100,\r\n        stage2_k: int = 20,\r\n        stage3_k: int = 5,\r\n    ):\r\n        self.stage1 = stage1_retriever\r\n        self.stage2 = stage2_reranker\r\n        self.stage3 = stage3_reranker\r\n        self.stage1_k = stage1_k\r\n        self.stage2_k = stage2_k\r\n        self.stage3_k = stage3_k\r\n\r\n    def retrieve(\r\n        self, query: str, query_emb: np.ndarray\r\n    ) -> Dict[str, List[SearchResult]]:\r\n        stage_log = {}\r\n\r\n        # Stage 1: Fast retrieval (high recall, low precision)\r\n        s1_results = self.stage1.search(query_emb, top_k=self.stage1_k)\r\n        stage_log[\"stage1\"] = s1_results\r\n\r\n        # Stage 2: Lightweight reranking\r\n        s2_results = self.stage2.rerank(\r\n            query, s1_results, top_k=self.stage2_k\r\n        )\r\n        stage_log[\"stage2\"] = s2_results\r\n\r\n        # Stage 3: Expensive but accurate reranking\r\n        if self.stage3 is not None:\r\n            s3_results = self.stage3.rerank(\r\n                query, s2_results, top_k=self.stage3_k\r\n            )\r\n            stage_log[\"stage3\"] = s3_results\r\n        else:\r\n            stage_log[\"stage3\"] = s2_results[:self.stage3_k]\r\n\r\n        return stage_log\r\n\r\nclass LightweightReranker:\r\n    \"\"\"\r\n    Stage 2 reranker using simple cross-encoder-like scoring.\r\n    In production: DistilBERT or MiniLM cross-encoder.\r\n    \"\"\"\r\n\r\n    def __init__(self, alpha: float = 0.5):\r\n        self.alpha = alpha  # blend between original score and reranker score\r\n\r\n    def rerank(\r\n        self, query: str, candidates: List[SearchResult],\r\n        top_k: int = 20\r\n    ) -> List[SearchResult]:\r\n        \"\"\"Simulate reranking with a fake cross-encoder score.\"\"\"\r\n        rng = np.random.RandomState(hash(query) % (2**31))\r\n\r\n        for result in candidates:\r\n            # Simulated cross-encoder score (would use model in practice)\r\n            sim_score = 0.5 + 0.5 * rng.random()\r\n            # Blend with original retrieval score\r\n            combined = (\r\n                self.alpha * sim_score\r\n                + (1 - self.alpha) * result.score\r\n            )\r\n            result.score = combined\r\n            result.method = \"stage2_rerank\"\r\n\r\n        candidates.sort(key=lambda x: x.score, reverse=True)\r\n        for rank, result in enumerate(candidates[:top_k], 1):\r\n            result.rank = rank\r\n        return candidates[:top_k]\r\n\r\nclass CrossEncoderReranker:\r\n    \"\"\"\r\n    Stage 3 reranker using accurate cross-encoder.\r\n    In production: BERT, RoBERTa, or Cohere Rerank endpoint.\r\n    \"\"\"\r\n\r\n    def __init__(self, model_name: str = \"cross-encoder/ms-marco-MiniLM-L6-v2\"):\r\n        self.model_name = model_name\r\n\r\n    def rerank(\r\n        self, query: str, candidates: List[SearchResult],\r\n        top_k: int = 5\r\n    ) -> List[SearchResult]:\r\n        \"\"\"\r\n        In production: model.predict([(query, doc.text) for doc in candidates]).\r\n        Here we simulate with a relevance scoring function.\r\n        \"\"\"\r\n        for result in candidates:\r\n            # Simulate high-quality cross-encoder score\r\n            overlap = len(\r\n                set(query.lower().split())\r\n                & set(result.document.text.lower().split())\r\n            )\r\n            query_len = len(query.split())\r\n            overlap_ratio = overlap / max(query_len, 1)\r\n\r\n            # Precision score: how well query terms match document\r\n            result.score = 0.3 + 0.7 * overlap_ratio\r\n            result.method = \"cross_encoder\"\r\n\r\n        candidates.sort(key=lambda x: x.score, reverse=True)\r\n        for rank, result in enumerate(candidates[:top_k], 1):\r\n            result.rank = rank\r\n        return candidates[:top_k]\r\n\r\nclass CascadeLatencyOptimizer:\r\n    \"\"\"\r\n    Optimize multi-stage latency by dynamically choosing how many candidates\r\n    to pass between stages based on query complexity.\r\n    \"\"\"\r\n\r\n    def __init__(\r\n        self,\r\n        base_stage1_k: int = 100,\r\n        base_stage2_k: int = 20,\r\n        latency_budget_ms: float = 500.0,\r\n    ):\r\n        self.base_stage1_k = base_stage1_k\r\n        self.base_stage2_k = base_stage2_k\r\n        self.latency_budget = latency_budget_ms\r\n\r\n        # Estimated per-stage latency (ms per document)\r\n        self.stage1_latency_per_doc = 0.5   # BM25 / ANN\r\n        self.stage2_latency_per_doc = 5.0   # Lightweight reranker\r\n        self.stage3_latency_per_doc = 50.0  # Cross-encoder\r\n\r\n    def compute_optimal_k(\r\n        self, query_complexity: float\r\n    ) -> Tuple[int, int, int]:\r\n        \"\"\"\r\n        query_complexity: 0.0 (simple) to 1.0 (complex).\r\n        Simple queries: fewer candidates. Complex: more candidates.\r\n        \"\"\"\r\n        # Stay within latency budget\r\n        for s2_k in range(50, 5, -5):\r\n            s1_k = min(int(s2_k * 3), self.base_stage1_k)\r\n            s3_k = min(int(s2_k * 0.3), 10)\r\n\r\n            estimated_latency = (\r\n                s1_k * self.stage1_latency_per_doc\r\n                + s2_k * self.stage2_latency_per_doc\r\n                + s3_k * self.stage3_latency_per_doc\r\n            )\r\n\r\n            if estimated_latency <= self.latency_budget:\r\n                break\r\n\r\n        # Scale by query complexity\r\n        s2_k = max(10, int(self.base_stage2_k * (0.5 + 0.5 * query_complexity)))\r\n        s1_k = min(int(s2_k * 5), self.base_stage1_k)\r\n        s3_k = max(3, int(s2_k * 0.25))\r\n\r\n        return s1_k, s2_k, s3_k\r\n\r\n    def estimate_latency(self, s1_k: int, s2_k: int, s3_k: int) -> float:\r\n        return (\r\n            s1_k * self.stage1_latency_per_doc\r\n            + s2_k * self.stage2_latency_per_doc\r\n            + s3_k * self.stage3_latency_per_doc\r\n        )\r\n\r\ndef demonstrate_cascade_retrieval():\r\n    \"\"\"Show multi-stage cascade retrieval in action.\"\"\"\r\n    import numpy as np\r\n\r\n    # Setup\r\n    docs = [\r\n        Document(f\"doc_{i}\", f\"This is document {i} about data science and machine learning\")\r\n        for i in range(50)\r\n    ]\r\n    rng = np.random.RandomState(42)\r\n    for doc in docs:\r\n        doc.embedding = rng.randn(128).astype(np.float32)\r\n\r\n    retriever = DenseRetriever(docs, normalize=True)\r\n    reranker_l2 = LightweightReranker(alpha=0.7)\r\n    reranker_l3 = CrossEncoderReranker()\r\n\r\n    cascade = MultiStageRetriever(\r\n        stage1_retriever=retriever,\r\n        stage2_reranker=reranker_l2,\r\n        stage3_reranker=reranker_l3,\r\n        stage1_k=50,\r\n        stage2_k=20,\r\n        stage3_k=5,\r\n    )\r\n\r\n    query_emb = rng.randn(128).astype(np.float32)\r\n    query_emb = query_emb / np.linalg.norm(query_emb)\r\n\r\n    results = cascade.retrieve(\"machine learning data\", query_emb)\r\n\r\n    for stage, stage_results in results.items():\r\n        print(f\"\\n{stage.upper()}: Top {len(stage_results)} results\")\r\n        for r in stage_results[:3]:\r\n            print(\r\n                f\"  Rank {r.rank}: {r.document.doc_id} \"\r\n                f\"score={r.score:.4f} method={r.method}\"\r\n            )\r\n\r\n    # Latency optimization\r\n    optimizer = CascadeLatencyOptimizer()\r\n    print(\"\\n=== Latency Optimization ===\")\r\n    for complexity in [0.0, 0.5, 1.0]:\r\n        s1_k, s2_k, s3_k = optimizer.compute_optimal_k(complexity)\r\n        lat = optimizer.estimate_latency(s1_k, s2_k, s3_k)\r\n        print(\r\n            f\"Complexity={complexity:.1f}: \"\r\n            f\"k1={s1_k}, k2={s2_k}, k3={s3_k}, \"\r\n            f\"est_latency={lat:.1f}ms\"\r\n        )\r\n\r\ndemonstrate_cascade_retrieval()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    Q[Query] --> S1[Stage 1<br/>Fast Bi-Encoder<br/>or BM25]\r\n    S1 --> C1[Candidate Pool<br/>Top 50-200]\r\n    C1 --> S2[Stage 2<br/>Lightweight Reranker<br/>DistilBERT / MiniLM]\r\n    S2 --> C2[Refined Candidates<br/>Top 10-30]\r\n    C2 --> S3[Stage 3<br/>Cross-Encoder<br/>BERT / RoBERTa]\r\n    S3 --> FINAL[Final Ranking<br/>Top 3-5]\r\n    \r\n    subgraph Budget [Latency Budget]\r\n        L1[~50ms]\r\n        L2[~100ms]\r\n        L3[~200ms]\r\n    end\r\n    \r\n    S1 -.-> L1\r\n    S2 -.-> L2\r\n    S3 -.-> L3\r\n    \r\n    style S1 fill:#d5f0e6,stroke:#059669\r\n    style S2 fill:#fef3c7,stroke:#d97706\r\n    style S3 fill:#fce7f3,stroke:#db2777\r\n    style Budget fill:#e1d5f7,stroke:#7c3aed"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "165-late-interaction-models",
      children: "16.5 Late Interaction Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Late interaction models like ColBERT bridge the gap between bi-encoders and cross-encoders.\r\nThey encode query and document independently (like bi-encoders) but compute token-level interactions at scoring time (like cross-encoders)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "colbert-style-maxsim-scoring",
      children: "ColBERT-Style MaxSim Scoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The key innovation is the MaxSim operation: for each query token, find its maximum similarity against any document token, then sum."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ColBERTLateInteraction:\r\n    \"\"\"\r\n    ColBERT-style late interaction reranker.\r\n    Uses token-level embeddings and MaxSim scoring.\r\n\r\n    Matches: Score = sum_{q_i in Q} max_{d_j in D} sim(E_Q(q_i), E_D(d_j))\r\n    \"\"\"\r\n\r\n    def __init__(\r\n        self, dim: int = 128, query_augmentation: bool = True\r\n    ):\r\n        self.dim = dim\r\n        self.query_augmentation = query_augmentation\r\n\r\n    def _tokenize_and_embed_simulated(\r\n        self, text: str, rng: np.random.RandomState\r\n    ) -> np.ndarray:\r\n        \"\"\"\r\n        Simulate token-level embeddings.\r\n        In production: BERT encoder output per token.\r\n        \"\"\"\r\n        tokens = text.lower().split()\r\n        n_tokens = len(tokens)\r\n        # Each token gets a dim-dimensional embedding\r\n        embeddings = rng.randn(n_tokens, self.dim).astype(np.float32)\r\n        # Normalize for cosine similarity\r\n        norms = np.linalg.norm(embeddings, axis=1, keepdims=True)\r\n        return embeddings / (norms + 1e-10)\r\n\r\n    def _encode_tokens(\r\n        self, text: str, seed: int = 42\r\n    ) -> np.ndarray:\r\n        \"\"\"Encode text into token-level embeddings.\"\"\"\r\n        rng = np.random.RandomState(seed + hash(text) % (2**16))\r\n        return self._tokenize_and_embed_simulated(text, rng)\r\n\r\n    def maxsim_score(\r\n        self,\r\n        query_embeddings: np.ndarray,\r\n        doc_embeddings: np.ndarray\r\n    ) -> float:\r\n        \"\"\"\r\n        Compute ColBERT MaxSim score.\r\n\r\n        For each query token, find max cosine similarity to any doc token.\r\n        Sum all maxima. This allows fine-grained term matching.\r\n\r\n        query_embeddings: (n_query_tokens, dim)\r\n        doc_embeddings: (n_doc_tokens, dim)\r\n        \"\"\"\r\n        # Similarity matrix: (n_query, n_doc)\r\n        sim_matrix = np.dot(query_embeddings, doc_embeddings.T)\r\n\r\n        # Max over document tokens for each query token\r\n        max_per_query_token = np.max(sim_matrix, axis=1)\r\n\r\n        # Sum the maxima\r\n        score = float(np.sum(max_per_query_token))\r\n\r\n        return score\r\n\r\n    def score_pair(\r\n        self, query: str, document: Document\r\n    ) -> float:\r\n        \"\"\"Score a single query-document pair.\"\"\"\r\n        q_emb = self._encode_tokens(query, seed=42)\r\n        d_emb = self._encode_tokens(\r\n            document.text,\r\n            seed=42 + hash(document.doc_id) % (2**16)\r\n        )\r\n        return self.maxsim_score(q_emb, d_emb)\r\n\r\n    def batch_score(\r\n        self, query: str, candidates: List[SearchResult]\r\n    ) -> List[float]:\r\n        \"\"\"Score multiple candidates against a query.\"\"\"\r\n        q_emb = self._encode_tokens(query, seed=42)\r\n        scores = []\r\n\r\n        for result in candidates:\r\n            d_emb = self._encode_tokens(\r\n                result.document.text,\r\n                seed=42 + hash(result.document.doc_id) % (2**16)\r\n            )\r\n            score = self.maxsim_score(q_emb, d_emb)\r\n            scores.append(score)\r\n\r\n        return scores\r\n\r\n    def rerank(\r\n        self, query: str, candidates: List[SearchResult],\r\n        top_k: int = 10\r\n    ) -> List[SearchResult]:\r\n        \"\"\"Rerank candidates using ColBERT-style late interaction.\"\"\"\r\n        q_emb = self._encode_tokens(query, seed=42)\r\n\r\n        for result in candidates:\r\n            d_emb = self._encode_tokens(\r\n                result.document.text,\r\n                seed=42 + hash(result.document.doc_id) % (2**16)\r\n            )\r\n            colbert_score = self.maxsim_score(q_emb, d_emb)\r\n\r\n            # LERP: blend original score with ColBERT score\r\n            # In production, ColBERT score replaces retrieval score\r\n            result.score = 0.3 * result.score + 0.7 * colbert_score\r\n            result.method = \"colbert_maxsim\"\r\n\r\n        candidates.sort(key=lambda x: x.score, reverse=True)\r\n        for rank, result in enumerate(candidates[:top_k], 1):\r\n            result.rank = rank\r\n        return candidates[:top_k]\r\n\r\n    def interpret_matches(\r\n        self, query: str, document_text: str, top_k: int = 5\r\n    ) -> List[Tuple[str, str, float]]:\r\n        \"\"\"\r\n        Show which query tokens matched which document tokens.\r\n        Useful for debugging and interpretability.\r\n        \"\"\"\r\n        q_emb = self._encode_tokens(query, seed=42)\r\n        d_emb = self._encode_tokens(\r\n            document_text, seed=43\r\n        )\r\n\r\n        query_tokens = query.lower().split()\r\n        doc_tokens = document_text.lower().split()\r\n\r\n        # Similarity matrix\r\n        sim_matrix = np.dot(q_emb, d_emb.T)\r\n\r\n        matches = []\r\n        for qi in range(len(query_tokens)):\r\n            best_dj = int(np.argmax(sim_matrix[qi]))\r\n            max_sim = float(sim_matrix[qi, best_dj])\r\n            matches.append((\r\n                query_tokens[qi],\r\n                doc_tokens[best_dj] if best_dj < len(doc_tokens) else \"\",\r\n                max_sim\r\n            ))\r\n\r\n        matches.sort(key=lambda x: x[2], reverse=True)\r\n        return matches[:top_k]\r\n\r\ndef demonstrate_colbert_scoring():\r\n    \"\"\"Show ColBERT MaxSim scoring and comparison with bi-encoder.\"\"\"\r\n    colbert = ColBERTLateInteraction(dim=128)\r\n\r\n    query = \"machine learning for data science\"\r\n    doc_text = (\r\n        \"Deep learning models require large datasets for training \"\r\n        \"and validation in data science applications\"\r\n    )\r\n\r\n    score = colbert.score_pair(query, Document(\"test\", doc_text))\r\n    print(f\"=== ColBERT MaxSim Scoring ===\")\r\n    print(f\"Query: '{query}'\")\r\n    print(f\"Document: '{doc_text}'\")\r\n    print(f\"ColBERT Score: {score:.4f}\")\r\n    print()\r\n\r\n    # Interpret matches\r\n    matches = colbert.interpret_matches(query, doc_text)\r\n    print(\"Top token matches (query → document):\")\r\n    for q_token, d_token, sim in matches:\r\n        print(f\"  '{q_token}' ↔ '{d_token}' : sim={sim:.4f}\")\r\n\r\n    print()\r\n    print(\"Key insight:\")\r\n    print(\"  ColBERT can match 'machine' → 'deep' (semantic) and\")\r\n    print(\"  'data' → 'data' (exact) at the same time.\")\r\n    print(\"  Bi-encoders collapse everything into one vector.\")\r\n    print(\"  Cross-encoders are more accurate but O(n^2) tokens.\")\r\n    print(\"  ColBERT: O(n) encoding + O(n*m) scoring — best of both.\")\r\n\r\ndemonstrate_colbert_scoring()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comparison-of-interaction-types",
      children: "Comparison of Interaction Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def compare_interaction_types():\r\n    \"\"\"Compare bi-encoder, cross-encoder, and late interaction.\"\"\"\r\n    import time\r\n\r\n    n_queries = 10\r\n    n_docs = 100\r\n    dim = 128\r\n\r\n    rng = np.random.RandomState(42)\r\n    q_embs = rng.randn(n_queries, dim).astype(np.float32)\r\n    d_embs = rng.randn(n_docs, dim).astype(np.float32)\r\n    q_tokens = rng.randn(n_queries, 15, dim).astype(np.float32)\r\n    d_tokens = rng.randn(n_docs, 20, dim).astype(np.float32)\r\n\r\n    print(\"=== Interaction Type Comparison ===\")\r\n    print(f\"{'Method':25} {'Enc Time':12} {'Score Time':12} {'Total':12}\")\r\n    print(\"-\" * 61)\r\n\r\n    # Bi-encoder: reduce tokens to 1 vector, then dot product\r\n    t0 = time.time()\r\n    q_vecs = q_embs  # already pooled\r\n    d_vecs = d_embs\r\n    t_enc = time.time() - t0\r\n\r\n    t0 = time.time()\r\n    bi_scores = np.dot(q_vecs, d_vecs.T)\r\n    t_score = time.time() - t0\r\n    print(\r\n        f\"{'Bi-encoder (pooled)':25} \"\r\n        f\"{t_enc:8.4f}s    {t_score:8.4f}s    {t_enc+t_score:8.4f}s\"\r\n    )\r\n\r\n    # Cross-encoder: concat all(token pairs) → quadratic\r\n    t0 = time.time()\r\n    # Simulate: concat [q_i; d_j] for each pair\r\n    ce_enc_time = t_enc * 10  # cross-encoder is ~10x slower\r\n    t_enc_ce = time.time() - t0 + ce_enc_time\r\n\r\n    t0 = time.time()\r\n    # Simulate cross-encoder score\r\n    ce_scores = np.dot(q_embs, d_embs.T)  # simplified\r\n    t_score_ce = time.time() - t0\r\n    print(\r\n        f\"{'Cross-encoder (pairwise)':25} \"\r\n        f\"{t_enc_ce:8.4f}s    {t_score_ce:8.4f}s    \"\r\n        f\"{t_enc_ce+t_score_ce:8.4f}s\"\r\n    )\r\n\r\n    # Late interaction (ColBERT): encode tokens, then MaxSim\r\n    t0 = time.time()\r\n    # Same encoding as bi-encoder (token level instead of pooled)\r\n    t_enc_li = time.time() - t0 + t_enc\r\n\r\n    t0 = time.time()\r\n    li_scores = np.zeros((n_queries, n_docs))\r\n    for qi in range(n_queries):\r\n        for di in range(n_docs):\r\n            sim = np.dot(q_tokens[qi], d_tokens[di].T)\r\n            li_scores[qi, di] = np.sum(np.max(sim, axis=1))\r\n    t_score_li = time.time() - t0\r\n    print(\r\n        f\"{'Late Interaction (MaxSim)':25} \"\r\n        f\"{t_enc_li:8.4f}s    {t_score_li:8.4f}s    \"\r\n        f\"{t_enc_li+t_score_li:8.4f}s\"\r\n    )\r\n\r\n    print()\r\n    print(\"Trade-offs:\")\r\n    print(\"  Bi-encoder:    Fast encoding & scoring, limited accuracy\")\r\n    print(\"  Cross-encoder: Slow, most accurate, best for final ranking\")\r\n    print(\"  Late interact: Balanced, good accuracy, moderate speed\")\r\n    print(\"  Production: Bi-encoder for stage 1, late interaction for\")\r\n    print(\"              stage 2, cross-encoder for stage 3 (top 10)\")\r\n\r\ncompare_interaction_types()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    subgraph Bi [Bi-Encoder]\r\n        Q1[Query Tokens] --> P1[Pooler]\r\n        D1[Doc Tokens] --> P2[Pooler]\r\n        P1 --> V1[(Single Vector)]\r\n        P2 --> V2[(Single Vector)]\r\n        V1 --> DOT[Similarity<br/>cosine / dot]\r\n        V2 --> DOT\r\n    end\r\n\r\n    subgraph ColBERT [Late Interaction]\r\n        Q2[Query Tokens] --> E1[Encoder]\r\n        D2[Doc Tokens] --> E2[Encoder]\r\n        E1 --> QT[(Query<br/>Token Embs)]\r\n        E2 --> DT[(Doc<br/>Token Embs)]\r\n        QT --> MAX[MaxSim<br/>max over doc tokens]\r\n        DT --> MAX\r\n        MAX --> SUM[Sum of Maxima]\r\n    end\r\n\r\n    subgraph Cross [Cross-Encoder]\r\n        Q3[Query] --> CONCAT[Concat<br/>[CLS] q [SEP] d [SEP]]\r\n        D3[Doc] --> CONCAT\r\n        CONCAT --> TRANS[Full Transformer<br/>Bidirectional Attention]\r\n        TRANS --> SCORE[Relevance Score]\r\n    end\r\n\r\n    style Bi fill:#d5f0e6,stroke:#059669\r\n    style ColBERT fill:#fef3c7,stroke:#d97706\r\n    style Cross fill:#fce7f3,stroke:#db2777"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "166-routing-strategies",
      children: "16.6 Routing Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Routing strategies decide which retriever (or combination) to use for each query.\r\nThis improves efficiency and accuracy by matching queries to the best-suited method."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class QueryRouter:\r\n    \"\"\"\r\n    Routes queries to the most appropriate retriever based on query analysis.\r\n    \"\"\"\r\n\r\n    def __init__(self, threshold_keyword: float = 0.6):\r\n        self.threshold_keyword = threshold_keyword\r\n\r\n    def analyze_query(self, query: str) -> Dict[str, float]:\r\n        \"\"\"Extract features to determine routing strategy.\"\"\"\r\n        tokens = query.lower().split()\r\n        n_tokens = len(tokens)\r\n\r\n        # Features that suggest sparse retrieval\r\n        exact_phrase_ratio = 0.0\r\n        rare_term_score = 0.0\r\n        code_pattern = 0.0\r\n        named_entity_score = 0.0\r\n\r\n        # Check for exact phrases (quoted strings)\r\n        if '\"' in query:\r\n            exact_phrase_ratio = query.count('\"') / max(n_tokens, 1)\r\n\r\n        # Check for code-like patterns\r\n        import re\r\n        if re.search(r'[A-Z]{2,}-\\d+', query):  # e.g., \"MB-203X\"\r\n            code_pattern = 1.0\r\n        if re.search(r'[a-z]+\\.[a-z]+\\(', query):  # e.g., \"func_name()\"\r\n            code_pattern = max(code_pattern, 0.8)\r\n\r\n        # Check for named entities (capitalized words)\r\n        cap_words = sum(1 for w in query.split() if w[0].isupper())\r\n        named_entity_score = cap_words / max(n_tokens, 1)\r\n\r\n        # Semantic vs keyword score\r\n        keyword_score = max(\r\n            exact_phrase_ratio,\r\n            code_pattern,\r\n            named_entity_score\r\n        )\r\n        semantic_score = 1.0 - keyword_score\r\n\r\n        return {\r\n            \"keyword_score\": keyword_score,\r\n            \"semantic_score\": semantic_score,\r\n            \"exact_phrase_ratio\": exact_phrase_ratio,\r\n            \"code_pattern\": code_pattern,\r\n            \"named_entity_score\": named_entity_score,\r\n            \"n_tokens\": n_tokens,\r\n        }\r\n\r\n    def route(\r\n        self, query: str\r\n    ) -> str:\r\n        \"\"\"\r\n        Determine routing strategy.\r\n        Returns: 'sparse', 'dense', 'hybrid', or 'hybrid_rerank'.\r\n        \"\"\"\r\n        features = self.analyze_query(query)\r\n\r\n        # Rule-based routing\r\n        if features[\"code_pattern\"] > 0.5:\r\n            return \"sparse\"  # Code identifiers need exact match\r\n\r\n        if features[\"exact_phrase_ratio\"] > 0.3:\r\n            return \"sparse\"  # Exact phrase queries need BM25\r\n\r\n        if features[\"keyword_score\"] > self.threshold_keyword:\r\n            return \"hybrid\"  # Strong keyword signals → combine\r\n\r\n        if features[\"n_tokens\"] > 10:\r\n            return \"dense\"  # Long, descriptive queries → semantic\r\n\r\n        return \"hybrid\"  # Default: use both\r\n\r\nclass HybridGate:\r\n    \"\"\"\r\n    Neural gate that learns to weight sparse vs dense contributions per query.\r\n    Gate output = sigmoid(MLP(query_features)) — controls α in α·S_sparse + (1-α)·S_dense.\r\n    \"\"\"\r\n\r\n    def __init__(self, input_dim: int = 8):\r\n        self.input_dim = input_dim\r\n        # Simulated learned weights\r\n        self.W = np.random.RandomState(42).randn(input_dim) * 0.1\r\n        self.b = 0.0\r\n\r\n    def _extract_query_features(\r\n        self, query: str, query_emb: np.ndarray\r\n    ) -> np.ndarray:\r\n        \"\"\"Extract features for the gate network.\"\"\"\r\n        tokens = query.lower().split()\r\n        import re\r\n\r\n        features = [\r\n            len(tokens) / 50.0,  # normalized length\r\n            len(set(tokens)) / max(len(tokens), 1),  # vocabulary richness\r\n            float(bool(re.search(r'[A-Z]{2,}', query))),  # has acronyms\r\n            float(bool(re.search(r'\\d+', query))),  # has numbers\r\n            float(bool(re.search(r'[\"\\']', query))),  # has quotes\r\n            np.mean(np.abs(query_emb)),  # embedding magnitude\r\n            np.std(query_emb),  # embedding variance\r\n            float(len(query) > 100),  # long query flag\r\n        ]\r\n        return np.array(features, dtype=np.float32)\r\n\r\n    def compute_gate_weight(\r\n        self, query: str, query_emb: np.ndarray\r\n    ) -> float:\r\n        \"\"\"\r\n        Compute α ∈ [0, 1] where α = weight for sparse retrieval.\r\n        Dense weight = 1 - α.\r\n        \"\"\"\r\n        features = self._extract_query_features(query, query_emb)\r\n        logit = float(np.dot(features, self.W) + self.b)\r\n        alpha = 1.0 / (1.0 + np.exp(-logit))  # sigmoid\r\n        return float(alpha)\r\n\r\n    def fuse_weighted(\r\n        self,\r\n        sparse_results: List[SearchResult],\r\n        dense_results: List[SearchResult],\r\n        query: str,\r\n        query_emb: np.ndarray,\r\n        top_k: int = 10,\r\n    ) -> List[SearchResult]:\r\n        \"\"\"Fuse results with learned per-query weight.\"\"\"\r\n        alpha = self.compute_gate_weight(query, query_emb)\r\n\r\n        # Normalize scores\r\n        normalizer = ScoreNormalizer()\r\n        sparse_scores = normalizer.min_max(\r\n            [r.score for r in sparse_results]\r\n        )\r\n        dense_scores = normalizer.min_max(\r\n            [r.score for r in dense_results]\r\n        )\r\n\r\n        doc_scores: Dict[str, float] = defaultdict(float)\r\n        doc_map: Dict[str, Document] = {}\r\n\r\n        for result, norm_score in zip(sparse_results, sparse_scores):\r\n            doc_map[result.document.doc_id] = result.document\r\n            doc_scores[result.document.doc_id] += alpha * norm_score\r\n\r\n        for result, norm_score in zip(dense_results, dense_scores):\r\n            doc_map[result.document.doc_id] = result.document\r\n            doc_scores[result.document.doc_id] += (1 - alpha) * norm_score\r\n\r\n        sorted_docs = sorted(\r\n            doc_scores.items(), key=lambda x: x[1], reverse=True\r\n        )\r\n        return [\r\n            SearchResult(\r\n                doc_map[did], score, rank + 1,\r\n                f\"hybrid_gate(α={alpha:.3f})\"\r\n            )\r\n            for rank, (did, score) in enumerate(\r\n                sorted_docs[:top_k]\r\n            )\r\n        ]\r\n\r\nclass EnsembleRetriever:\r\n    \"\"\"\r\n    Ensemble retrieval: run multiple retrievers in parallel and fuse results.\r\n    Supports dynamic routing per query.\r\n    \"\"\"\r\n\r\n    def __init__(\r\n        self,\r\n        retrievers: Dict[str, object],\r\n        router: QueryRouter,\r\n        gate: HybridGate = None,\r\n        fusion_strategy: str = \"rrf\",\r\n    ):\r\n        self.retrievers = retrievers\r\n        self.router = router\r\n        self.gate = gate\r\n        self.fusion_engine = FusionEngine(strategy=fusion_strategy)\r\n\r\n    def retrieve(\r\n        self,\r\n        query: str,\r\n        query_emb: np.ndarray,\r\n        top_k: int = 10,\r\n    ) -> Dict[str, object]:\r\n        \"\"\"Execute ensemble retrieval with routing.\"\"\"\r\n        route = self.router.route(query)\r\n        results = {}\r\n\r\n        if route == \"sparse\":\r\n            results[\"sparse\"] = self.retrievers[\"sparse\"].search(\r\n                query, top_k=top_k * 2\r\n            )\r\n            results[\"final\"] = results[\"sparse\"][:top_k]\r\n\r\n        elif route == \"dense\":\r\n            results[\"dense\"] = self.retrievers[\"dense\"].search(\r\n                query_emb, top_k=top_k\r\n            )\r\n            results[\"final\"] = results[\"dense\"]\r\n\r\n        elif route == \"hybrid\":\r\n            results[\"sparse\"] = self.retrievers[\"sparse\"].search(\r\n                query, top_k=top_k * 2\r\n            )\r\n            results[\"dense\"] = self.retrievers[\"dense\"].search(\r\n                query_emb, top_k=top_k * 2\r\n            )\r\n\r\n            if self.gate:\r\n                results[\"final\"] = self.gate.fuse_weighted(\r\n                    results[\"sparse\"],\r\n                    results[\"dense\"],\r\n                    query,\r\n                    query_emb,\r\n                    top_k=top_k,\r\n                )\r\n            else:\r\n                results[\"final\"] = self.fusion_engine.fuse(\r\n                    [results[\"sparse\"], results[\"dense\"]],\r\n                    top_k=top_k,\r\n                )\r\n\r\n        results[\"route\"] = route\r\n        return results\r\n\r\ndef demonstrate_routing_strategies():\r\n    \"\"\"Show how different queries are routed to different retrievers.\"\"\"\r\n    router = QueryRouter()\r\n\r\n    test_queries = [\r\n        \"What is the capital of France?\",\r\n        \"Fix bug in MB-203X authentication module\",\r\n        'The president said \"we must innovate\" in his speech',\r\n        \"Explain the attention mechanism in transformers\",\r\n        \"Show me error code ERR_500_INTERNAL\",\r\n        \"How do I implement gradient descent from scratch?\",\r\n    ]\r\n\r\n    print(\"=== Query Routing Analysis ===\")\r\n    print(f\"{'Query':55} {'Route':15} {'Features'}\")\r\n    print(\"-\" * 95)\r\n    for query in test_queries:\r\n        features = router.analyze_query(query)\r\n        route = router.route(query)\r\n        short_query = query[:52] + \"...\" if len(query) > 55 else query\r\n        print(\r\n            f\"{short_query:55} {route:15} \"\r\n            f\"code={features['code_pattern']:.1f} \"\r\n            f\"exact={features['exact_phrase_ratio']:.1f} \"\r\n            f\"named={features['named_entity_score']:.1f}\"\r\n        )\r\n\r\n    print()\r\n    print(\"=== Hybrid Gate Example ===\")\r\n    gate = HybridGate()\r\n    rng = np.random.RandomState(42)\r\n\r\n    queries_with_embs = [\r\n        (\"specific product code XYZ-123\", rng.randn(128)),\r\n        (\"explain deep learning concepts\", rng.randn(128)),\r\n    ]\r\n\r\n    for query, emb in queries_with_embs:\r\n        alpha = gate.compute_gate_weight(query, emb)\r\n        print(f\"Query: '{query[:40]:40}' α_sparse={alpha:.3f} β_dense={1-alpha:.3f}\")\r\n        if alpha > 0.6:\r\n            print(f\"  → Sparse preferred (exact match needed)\")\r\n        elif alpha < 0.4:\r\n            print(f\"  → Dense preferred (semantic understanding)\")\r\n        else:\r\n            print(f\"  → Balanced hybrid\")\r\n\r\ndemonstrate_routing_strategies()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    Q[Query] --> A[Query Analyzer]\r\n    \r\n    A --> F1{Has Code<br/>Pattern?}\r\n    F1 -->|Yes| R1[Route: Sparse Only<br/>BM25 Exact Match]\r\n    F1 -->|No| F2{Has Exact<br/>Phrase?}\r\n    \r\n    F2 -->|Yes| R2[Route: Sparse Boost<br/>BM25 + Dense Fallback]\r\n    F2 -->|No| F3{Is Long<br/>Query?}\r\n    \r\n    F3 -->|Yes| R3[Route: Dense Only<br/>Semantic Search]\r\n    F3 -->|No| F4{Has Named<br/>Entities?}\r\n    \r\n    F4 -->|Yes| R4[Route: Hybrid RRF<br/>Balanced Fusion]\r\n    F4 -->|No| R5[Route: Hybrid Gate<br/>Learned Weight α]\r\n    \r\n    R1 --> F[Fused Results]\r\n    R2 --> F\r\n    R3 --> F\r\n    R4 --> F\r\n    R5 --> F\r\n\r\n    style A fill:#e1d5f7,stroke:#7c3aed\r\n    style F1 fill:#fef3c7,stroke:#d97706\r\n    style F2 fill:#fef3c7,stroke:#d97706\r\n    style F3 fill:#fef3c7,stroke:#d97706\r\n    style F4 fill:#fef3c7,stroke:#d97706\r\n    style F fill:#d5f0e6,stroke:#059669"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "167-putting-it-all-together",
      children: "16.7 Putting It All Together"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A production hybrid search system combines all components into an orchestrated pipeline.\r\nHere is a unified architecture that ties together sparse, dense, fusion, multi-stage, and routing."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class HybridSearchArchitecture:\r\n    \"\"\"\r\n    Complete hybrid search system combining all techniques.\r\n\r\n    Architecture:\r\n    1. Query Router → decides strategy\r\n    2. Parallel retrieval: BM25 (sparse) + ANN (dense)\r\n    3. Fusion Engine: RRF or weighted (with gate)\r\n    4. ColBERT late interaction reranking\r\n    5. Cross-encoder final reranking\r\n    \"\"\"\r\n\r\n    def __init__(\r\n        self,\r\n        bm25_retriever: BM25,\r\n        dense_retriever: DenseRetriever,\r\n        fusion_strategy: str = \"rrf\",\r\n        use_colbert: bool = True,\r\n        use_cross_encoder: bool = True,\r\n    ):\r\n        self.bm25 = bm25_retriever\r\n        self.dense = dense_retriever\r\n        self.fusion = FusionEngine(strategy=fusion_strategy)\r\n        self.router = QueryRouter()\r\n        self.gate = HybridGate()\r\n        self.colbert = ColBERTLateInteraction() if use_colbert else None\r\n        self.cross_encoder = CrossEncoderReranker() if use_cross_encoder else None\r\n\r\n        # Stage sizes\r\n        self.stage1_k = 100  # initial retrieval\r\n        self.stage2_k = 30   # after fusion\r\n        self.stage3_k = 10   # after ColBERT\r\n        self.stage4_k = 5    # final\r\n\r\n    def search(\r\n        self, query: str, query_emb: np.ndarray\r\n    ) -> Dict[str, object]:\r\n        log: Dict[str, object] = {}\r\n\r\n        # Step 1: Route query\r\n        route = self.router.route(query)\r\n        log[\"route\"] = route\r\n        log[\"query\"] = query\r\n\r\n        # Step 2: Parallel retrieval\r\n        sparse_results = self.bm25.search(query, top_k=self.stage1_k)\r\n        dense_results = self.dense.search(query_emb, top_k=self.stage1_k)\r\n        log[\"sparse_count\"] = len(sparse_results)\r\n        log[\"dense_count\"] = len(dense_results)\r\n\r\n        # Step 3: Fusion\r\n        if self.gate and route != \"sparse\" and route != \"dense\":\r\n            fused = self.gate.fuse_weighted(\r\n                sparse_results, dense_results,\r\n                query, query_emb,\r\n                top_k=self.stage2_k,\r\n            )\r\n        else:\r\n            fused = self.fusion.fuse(\r\n                [sparse_results, dense_results],\r\n                top_k=self.stage2_k,\r\n            )\r\n        log[\"fused_count\"] = len(fused)\r\n\r\n        # Step 4: ColBERT late interaction reranking (optional)\r\n        if self.colbert and len(fused) > self.stage3_k:\r\n            colbert_reranked = self.colbert.rerank(\r\n                query, fused, top_k=self.stage3_k\r\n            )\r\n            log[\"colbert_count\"] = len(colbert_reranked)\r\n        else:\r\n            colbert_reranked = fused[:self.stage3_k]\r\n            log[\"colbert_count\"] = 0\r\n\r\n        # Step 5: Cross-encoder final reranking (optional)\r\n        if self.cross_encoder and len(colbert_reranked) > self.stage4_k:\r\n            final = self.cross_encoder.rerank(\r\n                query, colbert_reranked, top_k=self.stage4_k\r\n            )\r\n        else:\r\n            final = colbert_reranked[:self.stage4_k]\r\n        log[\"final_count\"] = len(final)\r\n\r\n        log[\"final_results\"] = final\r\n        return log\r\n\r\n    def get_latency_breakdown(self) -> Dict[str, float]:\r\n        \"\"\"Estimated latency per stage in milliseconds.\"\"\"\r\n        return {\r\n            \"routing\": 2.0,\r\n            \"sparse_retrieval\": 5.0,\r\n            \"dense_retrieval\": 30.0,\r\n            \"fusion\": 1.0,\r\n            \"colbert_rerank\": 50.0,\r\n            \"cross_encoder_rerank\": 150.0,\r\n            \"total_estimated\": 238.0,\r\n        }\r\n\r\ndef run_hybrid_architecture_demo():\r\n    \"\"\"Demonstrate the complete hybrid search architecture.\"\"\"\r\n    import time\r\n\r\n    # Setup sample data\r\n    docs = [\r\n        Document(\r\n            f\"doc_{i}\",\r\n            f\"Document {i}: This text discusses \"\r\n            f\"{'machine learning' if i % 3 == 0 else 'data science' if i % 3 == 1 else 'artificial intelligence'} \"\r\n            f\"concepts and applications in modern systems.\"\r\n        )\r\n        for i in range(100)\r\n    ]\r\n    rng = np.random.RandomState(42)\r\n    for doc in docs:\r\n        doc.embedding = rng.randn(128).astype(np.float32)\r\n\r\n    doc_texts = [d.text for d in docs]\r\n    doc_ids = [d.doc_id for d in docs]\r\n\r\n    bm25 = BM25()\r\n    bm25.fit(doc_texts, doc_ids)\r\n    dense = DenseRetriever(docs, normalize=True)\r\n\r\n    arch = HybridSearchArchitecture(\r\n        bm25_retriever=bm25,\r\n        dense_retriever=dense,\r\n        fusion_strategy=\"rrf\",\r\n        use_colbert=True,\r\n        use_cross_encoder=True,\r\n    )\r\n\r\n    test_queries = [\r\n        \"machine learning concepts\",\r\n        \"data science in modern systems\",\r\n        \"artificial intelligence applications\",\r\n    ]\r\n\r\n    for query in test_queries:\r\n        print(f\"\\n{'='*60}\")\r\n        print(f\"Query: '{query}'\")\r\n\r\n        # Simulate embedding (would be from model in production)\r\n        q_emb = rng.randn(128).astype(np.float32)\r\n        q_emb = q_emb / np.linalg.norm(q_emb)\r\n\r\n        t0 = time.time()\r\n        result = arch.search(query, q_emb)\r\n        elapsed = time.time() - t0\r\n\r\n        print(f\"Route: {result['route']}\")\r\n        print(\r\n            f\"Pipeline: \"\r\n            f\"Sparse({result['sparse_count']}) + \"\r\n            f\"Dense({result['dense_count']}) → \"\r\n            f\"Fuse({result['fused_count']}) → \"\r\n            f\"ColBERT({result['colbert_count']}) → \"\r\n            f\"Final({result['final_count']})\"\r\n        )\r\n        print(f\"Top Results:\")\r\n        for r in result[\"final_results\"]:\r\n            print(\r\n                f\"  Rank {r.rank}: {r.document.doc_id} \"\r\n                f\"score={r.score:.4f}\"\r\n            )\r\n        print(f\"Latency: {elapsed*1000:.1f}ms (simulated)\")\r\n\r\n    print(f\"\\n=== Estimated Latency Budget ===\")\r\n    breakdown = arch.get_latency_breakdown()\r\n    for stage, lat in breakdown.items():\r\n        print(f\"  {stage:30}: {lat:6.1f}ms\")\r\n\r\nrun_hybrid_architecture_demo()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    Q[Raw Query] --> QP[Query Processor<br/>Rewrite + Enrich]\r\n    QP --> QR[Query Router]\r\n\r\n    QR -->|Keyword / Code| SP[BM25 Sparse<br/>Inverted Index]\r\n    QR -->|Semantic / Long| DP[Dense ANN<br/>HNSW Index]\r\n    QR -->|Ambiguous| HP[Hybrid<br/>Both]\r\n\r\n    SP --> N[Score Normalizer]\r\n    DP --> N\r\n    HP --> N\r\n\r\n    N --> FE[Fusion Engine<br/>RRF / Gate]\r\n    FE --> C1[Candidates Top-100]\r\n\r\n    C1 --> CR[ColBERT Reranker<br/>MaxSim Scoring]\r\n    CR --> C2[Candidates Top-20]\r\n\r\n    C2 --> XE[Cross-Encoder<br/>BERT / RoBERTa]\r\n    XE --> FINAL[Final Top-5]\r\n\r\n    subgraph Orchestration\r\n        QP\r\n        QR\r\n    end\r\n\r\n    subgraph Retrieval\r\n        SP\r\n        DP\r\n        HP\r\n    end\r\n\r\n    subgraph Fusion [Fusion & Ranking]\r\n        N\r\n        FE\r\n    end\r\n\r\n    subgraph Refinement [Refinement]\r\n        CR\r\n        XE\r\n    end\r\n\r\n    style Orchestration fill:#e1d5f7,stroke:#7c3aed\r\n    style Retrieval fill:#d5f0e6,stroke:#059669\r\n    style Fusion fill:#fef3c7,stroke:#d97706\r\n    style Refinement fill:#fce7f3,stroke:#db2777"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hybrid search architecture combines sparse and dense retrieval to get the best of both worlds.\r\nDense retrieval uses embedding-based ANN search (HNSW, IVF) with cosine similarity or dot product.\r\nSparse retrieval uses BM25, TF-IDF, or learned sparse models like SPLADE.\r\nFusion strategies merge results — RRF is simple and robust, weighted fusion needs score normalization."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multi-stage (cascade) retrieval separates the pipeline into cheap first-stage recall and expensive\r\nsecond-stage precision. Late interaction models (ColBERT) provide a sweet spot between bi-encoder speed\r\nand cross-encoder accuracy using MaxSim token-level scoring. Routing strategies classify each query to\r\nselect the best retriever, reducing latency while maintaining accuracy."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Production systems use all components together: a router selects the strategy, parallel retrieval runs\r\nBM25 and ANN search, fusion combines scores, ColBERT reranks candidates, and a cross-encoder produces\r\nthe final ranking — all within a latency budget using cascade optimization."
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
            children: "One size fits none"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route queries — short/code → sparse, long/semantic → dense"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fusion needs normalization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RRF bypasses normalization; weighted fusion requires min-max or z-score"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cascade saves latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cheap first pass (50ms), expensive refinement (200ms) — stay under budget"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ColBERT beats bi-encoder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Late interaction adds 10-15% NDCG with only 2x slowdown, not 10x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gate learns from data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The α weight in α·sparse + (1-α)·dense can be learned per query"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate end-to-end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NDCG@10 and MRR@10 for ranking; latency p95 and throughput for ops"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "hybrid16-q1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " Compare HNSW and IVF for ANN search. When would you use each?"]
      }), "\nHNSW (Hierarchical Navigable Small World) builds a multi-layer graph where each layer has decreasing edge lengths. Search starts at the top (long edges for coarse navigation) and descends to the bottom (short edges for fine search). IVF (Inverted File Index) clusters the vector space into Voronoi cells and only searches the nearest clusters. HNSW generally achieves higher recall at the same speed (90%+ recall at 10-100µs per query) but uses more memory (storing the graph structure). IVF is more memory-efficient and supports incremental updates better. Use HNSW when recall is critical and you have sufficient RAM. Use IVF for billion-scale datasets or when you need fast index building and frequent updates.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "hybrid16-q2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " How does RRF differ from score-based fusion, and when is each preferable?"]
      }), "\nRRF converts ranks to scores using 1/(k + rank), so it only depends on relative ordering. Score-based fusion normalizes raw scores (min-max, z-score) and sums them. RRF is robust to score scale differences between systems (BM25 scores [0, 30] vs dense scores [0.5, 0.95]) and requires no training. Score-based fusion captures confidence information — a document ranked 1st with score 0.99 vs 0.51 should be treated differently. Use RRF when retrieval systems have incompatible score distributions. Use score-based fusion when scores are calibrated and you want to preserve confidence. In practice, RRF is the default choice for production due to its simplicity and robustness.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "hybrid16-q3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " Explain the MaxSim operation in ColBERT and why it is effective."]
      }), "\nMaxSim computes a similarity matrix between all query token embeddings and all document token embeddings. For each query token, it takes the maximum similarity over document tokens, then sums these maxima. The key insight is that each query token independently searches for its best match in the document — \"bank\" in the query can match \"bank\" (financial) or \"bank\" (river) depending on the document context. This allows fine-grained matching without quadratic attention. MaxSim is effective because it preserves token-level interactions lost in bi-encoder pooling (which averages everything) while avoiding the O(n²) cost of cross-encoders. ColBERTv2 achieves 2-3x speedup over cross-encoders with less than 5% accuracy loss.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "hybrid16-q4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " Design a routing strategy for a hybrid search system serving a code documentation platform."]
      }), "\nFor a code documentation platform, use a three-bucket routing strategy. Bucket 1: exact-match queries (function names like `Array.sort()`, error codes like `ERR-NULL-PTR`) route to BM25 only — exact matching is critical. Bucket 2: conceptual queries (\"how to sort a list\", \"error handling patterns\") route to dense retrieval only — semantic understanding matters. Bucket 3: hybrid queries combine both — determine using a lightweight classifier (logistic regression or small MLP) trained on query features: contains code symbols, number of tokens, presence of natural language verbs. The router pre-computes an 8-dimensional feature vector per query and predicts the best strategy. A default \"hybrid\" strategy with RRF fusion serves as fallback when confidence is low.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "hybrid16-q5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " How do you evaluate a multi-stage cascade retrieval pipeline end-to-end?"]
      }), "\nEvaluate at each stage with stage-specific metrics. Stage 1 (recall-focused): measure recall@k (e.g., recall@100 ≥ 95%) — the cascade only works if the first stage captures the relevant documents. Stage 2 (fusion): measure MRR@20 and NDCG@10 — does fusion improve ranking over the best single retriever? Stage 3 (reranker): measure precision@5 and NDCG@5 — does reranking surface the most relevant documents at the top? End-to-end: measure the final ranking quality (NDCG, MRR) and system latency (p50, p95, p99). Compare against single-stage baselines: is the cascade worth the complexity? A good target: cascade improves NDCG@10 by 10-15% over BM25-only, with p95 latency under 500ms.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "hybrid16-q6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "6."
        }), " What are the trade-offs between learned sparse (SPLADE) and traditional BM25?"]
      }), "\nSPLADE uses a transformer to predict term weights, combining the interpretability of sparse retrieval with the semantic understanding of neural models. It captures synonymy (e.g., \"car\" activating \"vehicle\" in the vocabulary) and handles out-of-vocabulary terms through subword tokenization. BM25 is simpler, faster (no GPU needed), and more predictable — given a query, you know exactly why a document matches. SPLADE requires GPU training and inference, making it 10-100x slower per query than BM25. However, SPLADE often achieves 5-10% higher recall. In practice: use BM25 as the primary sparse component (fast, cheap, interpretable). Add SPLADE as a third retrieval leg in the ensemble if the accuracy improvement justifies the cost. SPLADE works best in domain-specific search where training data is available.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "hybrid16-q7",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "7."
        }), " How do you handle the cold-start problem when deploying a hybrid search system?"]
      }), "\nCold-start in hybrid search means no usage data for query routing, no relevance judgments for evaluation, and no fine-tuned models. Start with BM25 as the default retriever (zero training required, works on any text). Use RRF fusion if adding a dense retriever (no normalization parameters needed). For routing, use rule-based heuristics (keyword ratio, query length, entity detection) instead of learned classifiers. Bootstrap relevance judgments using LLM-as-a-judge: prompt an LLM to rate query-document relevance on a 3-point scale. Collect 500-1000 judged pairs, then calibrate score normalization parameters and train a simple routing classifier. Deploy with conservative thresholds — route more queries to hybrid (safe) until the system learns from real traffic.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "hybrid16-q8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "8."
        }), " Explain how product quantization (PQ) works in ANN search and its trade-offs."]
      }), "\nProduct quantization compresses high-dimensional vectors into short codes by splitting the vector into subvectors and quantizing each subvector independently. For a 128-dimensional vector split into 8 subvectors of 16 dimensions each, you learn 256 centroids per subvector (8 bits) — storing each vector as 8 bytes instead of 512 bytes (float32). At search time, you precompute distance tables between the query subvectors and centroids, then compute approximate distances using lookup tables. PQ enables billion-scale ANN search by fitting the index in RAM. Trade-off: 2-5% recall loss compared to uncompressed vectors, but 50-100x memory reduction. IVF+PQ (used in Faiss) is the most common combination: IVF for coarse search, PQ for compressed storage and fast distance computation.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "hybrid16-q9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "9."
        }), " What causes \"score distribution mismatch\" in hybrid fusion and how do you address it?"]
      }), "\nScore distribution mismatch occurs because different retrievers produce scores on different scales. BM25 scores range from 0 to ~30 with a long tail. Dense cosine similarity ranges from -1 to 1 (or 0 to 1 for normalized embeddings). Directly adding these scores lets the BM25 scores dominate. RRF inherently avoids this by using ranks. For score-based fusion, use normalization: min-max scaling (robust to outliers), z-score normalization (assumes normal distribution), or quantile normalization (distribution-free). Softmax with temperature can also equalize distributions. The normalization parameters must be estimated from a representative query sample. In production, compute running statistics and update normalization parameters periodically as the data distribution shifts.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "hybrid16-q10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "10."
        }), " Describe a real-world deployment of hybrid search architecture at scale."]
      }), "\nA real-world example: a large enterprise search platform serving 10M+ documents across 500K users. Architecture: Nginx gateway → Query Processing Service (spell correction, query expansion, entity recognition). The router classifies queries into 4 buckets using a 50ms MLP. BM25 runs on Elasticsearch (100 shards, 30 nodes). Dense ANN uses Faiss IVF+PQ with 100K centroids (index built nightly, 16B vectors, 200GB RAM). Fusion uses RRF with k=60. Stage 2 uses ColBERTv2 (ONNX Runtime, 4xA100 GPUs) reranking top-50 → top-10. Stage 3 is an optional cross-encoder (deployed only for premium tier). Caching: Redis for top-100 query results (5min TTL), 65% hit rate. Performance: p50 latency = 180ms, p95 = 450ms, p99 = 1.2s. Daily index updates through Spark jobs, with real-time CDC streaming for hot documents. Monitoring: recall@100 dashboard, latency SLO alerts, A/B testing framework for model updates.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "hybrid16-q1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " What is the primary advantage of HNSW over IVF for ANN search?"]
      }), "\nA. Lower memory usage\nB. Higher recall at equivalent speed\nC. Faster index building\nD. Better support for billion-scale datasets\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "hybrid16-q2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " How does Reciprocal Rank Fusion (RRF) compute document scores?"]
      }), "\nA. Sum of raw similarity scores\nB. Sum of 1/(k + rank) across result lists\nC. Product of rank positions\nD. Average of normalized scores\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "hybrid16-q3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " What operation does ColBERT use to score query-document relevance?"]
      }), "\nA. Cosine similarity of pooled embeddings\nB. MaxSim: for each query token, max similarity to any document token, then sum\nC. Full cross-attention between all query and document tokens\nD. Weighted combination of BM25 and dense scores\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "hybrid16-q4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " In a multi-stage cascade pipeline, what is the primary goal of the first stage?"]
      }), "\nA. Maximize precision\nB. Maximize recall\nC. Minimize latency\nD. Minimize cost\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "hybrid16-q5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " When should a routing strategy send a query to sparse-only retrieval?"]
      }), "\nA. When the query is very long\nB. When the query contains code identifiers or exact phrases\nC. When the query has high semantic ambiguity\nD. When the query contains common words\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a hybrid search system using both BM25 and embedding-based ANN search. Use 500 synthetic documents with known relevance labels. Compare recall@20 for BM25-only, dense-only, RRF fusion, weighted fusion, and gate-based fusion. Report which fusion strategy works best."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build a ColBERT-style late interaction reranker that takes top-50 BM25 results and reranks them using MaxSim scoring. Compare NDCG@10 against a bi-encoder baseline. Plot the accuracy improvement vs the additional scoring cost."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a query router that classifies queries into \"sparse-preferred\", \"dense-preferred\", or \"hybrid\" using at least 6 query features. Train a logistic regression classifier on 200 labeled queries. Report precision, recall, and F1 for each class."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design and benchmark a 3-stage cascade pipeline: BM25 (recall 95% at 100) → ColBERT (rerank 100→20) → cross-encoder (rerank 20→5). Measure latency per stage and overall. How would you optimize the stage sizes to stay under a 500ms budget?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement score normalization (min-max, z-score, quantile) and demonstrate that score-based fusion fails without normalization when BM25 scores [0, 30] are combined with dense scores [0.5, 0.95]. Show that RRF works without normalization."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assuming all retrieval scores are comparable — they are not; always normalize or use rank-based fusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not setting a latency budget — cascade stages must respect end-to-end timing constraints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ignoring query diversity — one retrieval strategy does not fit all query types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Using cosine similarity on unnormalized vectors — dot product gives different rankings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Treating ColBERT as a full cross-encoder — it is faster but less accurate; use it as stage 2, not stage 3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Building complex routing without fallback — always default to hybrid when routing confidence is low"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dense retrieval"
        }), ": Embedding → ANN (HNSW graph / IVF clusters) → cosine or dot similarity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sparse retrieval"
        }), ": BM25 (k1=1.5, b=0.75) → IDF * saturate(tf) over inverted index"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fusion"
        }), ": RRF (rank-based, 1/(k+rank)), Weighted (score-based, needs normalization)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-stage"
        }), ": Stage 1 recall (top-100), Stage 2 rerank (top-20), Stage 3 precision (top-5)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Late interaction"
        }), ": ColBERT MaxSim = sum over q_tokens of max over d_tokens of sim(q_i, d_j)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Routing"
        }), ": Heuristic rules or learned classifier → sparse/dense/hybrid based on query features"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SPLADE"
        }), ": Learned sparse — transformer predicts term weights; interpretable + semantic"]
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
            children: "How does Hybrid Search Architecture behave differently at scale — memory, throughput, or precision-wise?"
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
        children: "Name the technique explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Hybrid Search Architecture\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Hybrid Search Architecture to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Hybrid Search Architecture (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Hybrid Search Architecture and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Hybrid Search Architecture-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic problem in this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Hybrid Search Architecture in production today?"
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
        }), " Hybrid Search Architecture builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Hybrid Search Architecture before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Hybrid Search Architecture is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Hybrid Search Architecture in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "The chapter that covers Hybrid Search Architecture is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 16 Hybrid Search Architecture is ___. — Answer: O(n) embedding, O(log n) ANN search"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 16 Hybrid Search Architecture is ___. — Answer: empty retrieval, hallucination, chunk boundary issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Hybrid Search Architecture issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Hybrid Search Architecture in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Hybrid Search Architecture that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
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
          }), " A new hire asks you to explain Hybrid Search Architecture in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Hybrid Search Architecture and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
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
            children: "Complete Medium exercises, explain Hybrid Search Architecture to someone else"
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
        children: "Always write a one-line example of Hybrid Search Architecture from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Hybrid Search Architecture when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Hybrid Search Architecture twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Hybrid Search Architecture snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Hybrid Search Architecture listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Hybrid Search Architecture to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Hybrid Search Architecture by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Hybrid Search Architecture to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
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
        children: "'Advanced RAG Techniques' by Andrei Lopatenko (Towards Data Science) Search Architecture"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 12 — builds the foundation for 16 Hybrid Search Architecture"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 16 Hybrid Search Architecture with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 16 Hybrid Search Architecture fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 16 Hybrid Search Architecture"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 16 Hybrid Search Architecture"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 16 Hybrid Search Architecture?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 16 Hybrid Search Architecture?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 16 Hybrid Search Architecture asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 16 Hybrid Search Architecture?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hybrid Search Architecture is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Hybrid Search Architecture."
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
        children: "Hybrid Search Architecture emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Hybrid Search Architecture today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Hybrid Search Architecture — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Hybrid Search Architecture changes quickly; focus on fundamentals that remain stable."
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
            children: "16 Hybrid Search Architecture is like a GPS navigation system"
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
          }), " — this chapter contributes the Hybrid Search Architecture skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-16hybridsearcharchitecture-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Hybrid Search Architecture in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "RAG (Retrieval-Augmented Generation) grounds LLM responses in external documents retrieved at query time, reducing hallucination by 40-80% vs zero-shot generation."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-16hybridsearcharchitecture-flash2",
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
      "data-qid": "12ragvectordatabases-16hybridsearcharchitecture-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Hybrid Search Architecture approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Retrieval: O(log n) with ANN index (HNSW/IVF). Embedding: O(n*d) where d=embedding dim. Generation: O(context_len^2) attention."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-16hybridsearcharchitecture-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Hybrid Search Architecture NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "RAG is NOT the right choice when: (1) the knowledge base is tiny (<100 docs) and fits in context, (2) you need the model to learn new reasoning patterns (use fine-tuning), (3) sub-100ms latency is required."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-16hybridsearcharchitecture-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Hybrid Search Architecture applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Hybrid Search Architecture (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Hybrid Search Architecture (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Hybrid Search Architecture-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Hybrid Search Architecture in production at scale"
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
        }), " — Facebook's fast similarity search library Search Architecture"]
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
        }), ": Add structured logging at each stage of the 16 Hybrid Search Architecture pipeline to identify exactly where the failure occurs."]
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
        children: "Write a minimal working example of Hybrid Search Architecture."
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
        children: "Tell me about a time you debugged a Hybrid Search Architecture problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Hybrid Search Architecture is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_16_hybrid_search_architecture(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 16 Hybrid Search Architecture.\r\n\r\n    Key concepts: chunking, embedding, retrieval, reranking, generation\r\n    Complexity: O(n) embedding, O(log n) ANN search\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 16 Hybrid Search Architecture here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain Hybrid Search Architecture without notes"
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
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hybrid Search Architecture, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Hybrid Search Architecture depends on input size and distribution — always benchmark for your own data."
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