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
const site_docs_courses_ai_engineering_placement_12_rag_vector_databases_16_hybrid_search_architecture_md_d08_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/rag-vector-databases/16-hybrid-search-architecture","title":"Hybrid Search Architecture","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/12-rag-vector-databases/16-hybrid-search-architecture.md","sourceDirName":"courses/ai-engineering-placement/12-rag-vector-databases","slug":"/ai-engineering-placement/12-rag-vector-databases/16-hybrid-search-architecture","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/16-hybrid-search-architecture","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":160,"frontMatter":{"id":"16-hybrid-search-architecture","slug":"/ai-engineering-placement/12-rag-vector-databases/16-hybrid-search-architecture","title":"Hybrid Search Architecture","sidebar_label":"Hybrid Search Architecture","sidebar_position":160},"sidebar":"coursesSidebar","previous":{"title":"Context Compression for RAG","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/15-context-compression"},"next":{"title":"13 — AI Agents & LangGraph","permalink":"/ai-engineering-journey/ai-engineering-placement"}}');
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
	sidebar_position: 160
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
  "value": "Capstone Project Link",
  "id": "capstone-project-link",
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
      children: "Search systems today must handle both exact keyword matches and semantic understanding.\nHybrid search architecture combines the strengths of sparse (keyword) and dense (semantic) retrieval into a unified pipeline.\nIt is the backbone of production RAG systems, enterprise search, and modern information retrieval."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covers the complete hybrid search stack — from individual retrieval methods to fusion strategies,\nmulti-stage pipelines, late interaction models, and intelligent routing of queries to the best retriever."
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
      children: "Hybrid search architecture is fundamental for AI engineers building production retrieval systems.\nThis section covers the core concepts, trade-offs, and theoretical framework."
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    Q[Query] --> R[Router / Classifier]\n    R --> S[Sparse Retriever<br/>BM25 / SPLADE]\n    R --> D[Dense Retriever<br/>ANN / HNSW]\n    S --> F[Fusion Engine<br/>RRF / Weighted]\n    D --> F\n    F --> C[Candidate Pool<br/>Top 100]\n    C --> L[Late Interaction<br/>ColBERT MaxSim]\n    C --> M[Multi-Stage<br/>Reranker]\n    L --> O[Final Ranking]\n    M --> O\n    subgraph Routing\n        R\n    end\n    subgraph Retrieval\n        S\n        D\n    end\n    subgraph Fusion\n        F\n    end\n    subgraph Refinement\n        C\n        L\n        M\n    end\n    style Routing fill:#e1d5f7,stroke:#7c3aed\n    style Retrieval fill:#d5f0e6,stroke:#059669\n    style Fusion fill:#fef3c7,stroke:#d97706\n    style Refinement fill:#fce7f3,stroke:#db2777\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "161-dense-retrieval",
      children: "16.1 Dense Retrieval"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dense retrieval represents queries and documents as dense vectors (embeddings) in a continuous vector space.\nSimilarity is measured using distance metrics like cosine similarity or dot product.\nThe retriever searches for documents whose embeddings are closest to the query embedding."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "embedding-based-search",
      children: "Embedding-Based Search"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The core of dense retrieval is an embedding model (bi-encoder) that maps text to a fixed-size vector.\nCommon models include ", (0,jsx_runtime.jsx)(_components.code, {
        children: "text-embedding-ada-002"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "all-MiniLM-L6-v2"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bge-large-en-v1.5"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nfrom typing import List, Dict, Tuple, Optional\nfrom dataclasses import dataclass, field\nimport heapq\n\n@dataclass\nclass Document:\n    doc_id: str\n    text: str\n    embedding: Optional[np.ndarray] = None\n\n@dataclass\nclass SearchResult:\n    document: Document\n    score: float\n    rank: int\n    method: str = \"\"\n\nclass DenseRetriever:\n    \"\"\"Dense retrieval using cosine similarity search.\"\"\"\n\n    def __init__(self, documents: List[Document], normalize: bool = True):\n        self.documents = documents\n        self.normalize = normalize\n        if normalize and documents and documents[0].embedding is not None:\n            self._normalize_embeddings()\n\n    def _normalize_embeddings(self) -> None:\n        for doc in self.documents:\n            norm = np.linalg.norm(doc.embedding)\n            if norm > 0:\n                doc.embedding = doc.embedding / norm\n\n    def cosine_similarity(\n        self, query_emb: np.ndarray, doc_emb: np.ndarray\n    ) -> float:\n        if self.normalize:\n            return float(np.dot(query_emb, doc_emb))\n        q_norm = np.linalg.norm(query_emb)\n        d_norm = np.linalg.norm(doc_emb)\n        if q_norm == 0 or d_norm == 0:\n            return 0.0\n        return float(np.dot(query_emb, doc_emb) / (q_norm * d_norm))\n\n    def dot_product(\n        self, query_emb: np.ndarray, doc_emb: np.ndarray\n    ) -> float:\n        return float(np.dot(query_emb, doc_emb))\n\n    def search(\n        self, query_emb: np.ndarray, top_k: int = 10,\n        similarity_fn: str = \"cosine\"\n    ) -> List[SearchResult]:\n        if similarity_fn == \"cosine\":\n            sim_func = self.cosine_similarity\n        elif similarity_fn == \"dot\":\n            sim_func = self.dot_product\n        else:\n            raise ValueError(f\"Unknown similarity: {similarity_fn}\")\n\n        scores = []\n        for doc in self.documents:\n            score = sim_func(query_emb, doc.embedding)\n            scores.append((score, doc))\n\n        scores.sort(key=lambda x: x[0], reverse=True)\n        return [\n            SearchResult(doc, score, rank, \"dense\")\n            for rank, (score, doc) in enumerate(scores[:top_k], 1)\n        ]\n\n    def search_batched(\n        self, query_embs: np.ndarray, top_k: int = 10\n    ) -> List[List[SearchResult]]:\n        \"\"\"Batch search for multiple queries (matrix multiply).\"\"\"\n        emb_matrix = np.stack(\n            [d.embedding for d in self.documents]\n        )\n        # query_embs: (n_queries, dim), emb_matrix: (n_docs, dim)\n        scores = np.dot(query_embs, emb_matrix.T)\n        if self.normalize:\n            q_norms = np.linalg.norm(query_embs, axis=1, keepdims=True)\n            d_norms = np.linalg.norm(emb_matrix, axis=1, keepdims=True).T\n            scores = scores / (q_norms * d_norms + 1e-10)\n\n        results = []\n        for q_idx in range(scores.shape[0]):\n            top_indices = np.argsort(scores[q_idx])[::-1][:top_k]\n            results.append([\n                SearchResult(\n                    self.documents[idx],\n                    float(scores[q_idx][idx]),\n                    rank + 1,\n                    \"dense\"\n                )\n                for rank, idx in enumerate(top_indices)\n            ])\n        return results\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cosine-similarity-vs-dot-product",
      children: "Cosine Similarity vs Dot Product"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Both metrics measure vector alignment but behave differently under normalization."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def compare_similarity_metrics():\n    \"\"\"Demonstrate when cosine vs dot product matters.\"\"\"\n    import numpy as np\n\n    # Two vectors with same direction but different magnitudes\n    v1 = np.array([0.8, 0.6])\n    v2 = np.array([0.08, 0.06])  # same direction, 10x smaller\n\n    cos_sim = np.dot(v1, v2) / (np.linalg.norm(v1) * np.linalg.norm(v2))\n    dot_prod = np.dot(v1, v2)\n\n    print(f\"Vectors: v1={v1}, v2={v2}\")\n    print(f\"Cosine similarity: {cos_sim:.4f}\")\n    print(f\"Dot product: {dot_prod:.4f}\")\n    print(\"---\")\n    print(\"Cosine: invariant to magnitude — captures direction only\")\n    print(\"Dot product: sensitive to magnitude — favors longer vectors\")\n    print()\n    print(\"When to use each:\")\n    print(\"  Cosine:    Embeddings are L2-normalized; you care about angle\")\n    print(\"  Dot:       Embedding magnitude carries information (e.g., term frequency)\")\n    print(\"  In practice: Most sentence transformers output normalized embeddings\")\n    print(\"               so cosine = dot product under normalization\")\n\ncompare_similarity_metrics()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Vectors: v1=[0.8 0.6], v2=[0.08 0.06]\nCosine similarity: 1.0000\nDot product: 0.1000\n---\nCosine: invariant to magnitude — captures direction only\nDot product: sensitive to magnitude — favors longer vectors\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ann-search--hnsw-and-ivf",
      children: "ANN Search — HNSW and IVF"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Exhaustive search (comparing against all documents) does not scale beyond ~100K documents.\nApproximate Nearest Neighbor (ANN) indexes trade a small accuracy loss for massive speed gains."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\nclass HNSWNode:\n    \"\"\"A node in the HNSW graph.\"\"\"\n    vector: np.ndarray\n    doc_id: str\n    neighbors: Dict[int, List[str]] = field(default_factory=dict)\n    # neighbors[level] = list of neighbor node IDs\n\nclass HNSWIndex:\n    \"\"\"\n    Hierarchical Navigable Small World index.\n    Multi-layer graph: top layer has long edges (coarse), bottom has short edges (fine).\n    Search starts at top layer and descends.\n    \"\"\"\n\n    def __init__(\n        self,\n        dim: int,\n        M: int = 16,\n        ef_construction: int = 200,\n        ef_search: int = 50,\n        ml: float = 1.0 / np.log(1.0 * M)\n    ):\n        self.dim = dim\n        self.M = M  # number of connections per layer\n        self.M_max = M\n        self.ef_construction = ef_construction\n        self.ef_search = ef_search\n        self.ml = ml  # level normalization factor\n        self.nodes: Dict[str, HNSWNode] = {}\n        self.entry_point: Optional[str] = None\n        self.max_level = 0\n\n    def _random_level(self) -> int:\n        \"\"\"Assign random level for new node (exponential decay).\"\"\"\n        return int(-np.log(np.random.random()) * self.ml)\n\n    def _distance(self, a: np.ndarray, b: np.ndarray) -> float:\n        return float(np.linalg.norm(a - b))\n\n    def add(self, doc_id: str, vector: np.ndarray) -> None:\n        level = self._random_level()\n        node = HNSWNode(vector=vector, doc_id=doc_id)\n\n        if self.entry_point is None:\n            self.entry_point = doc_id\n            self.max_level = level\n            self.nodes[doc_id] = node\n            return\n\n        # find nearest neighbor from entry point\n        curr = self.entry_point\n        curr_dist = self._distance(vector, self.nodes[curr].vector)\n\n        # traverse from top layer down to level+1\n        for lc in range(self.max_level, level, -1):\n            changed = True\n            while changed:\n                changed = False\n                curr_node = self.nodes[curr]\n                for neighbor_id in curr_node.neighbors.get(lc, []):\n                    d = self._distance(vector, self.nodes[neighbor_id].vector)\n                    if d < curr_dist:\n                        curr = neighbor_id\n                        curr_dist = d\n                        changed = True\n\n        # connect at current and lower layers\n        for lc in range(min(level, self.max_level), -1, -1):\n            # find M nearest neighbors at this layer\n            candidates = self._search_at_layer(vector, curr, lc, self.M)\n            node.neighbors[lc] = [c[0] for c in candidates]\n            for neighbor_id, _ in candidates:\n                if lc not in self.nodes[neighbor_id].neighbors:\n                    self.nodes[neighbor_id].neighbors[lc] = []\n                if doc_id not in self.nodes[neighbor_id].neighbors[lc]:\n                    self.nodes[neighbor_id].neighbors[lc].append(doc_id)\n\n        self.nodes[doc_id] = node\n        if level > self.max_level:\n            self.max_level = level\n            self.entry_point = doc_id\n\n    def _search_at_layer(\n        self, query: np.ndarray, entry: str,\n        layer: int, ef: int\n    ) -> List[Tuple[str, float]]:\n        visited = {entry}\n        candidates = [(self._distance(query, self.nodes[entry].vector), entry)]\n        heapq.heapify(candidates)\n        results = [(self._distance(query, self.nodes[entry].vector), entry)]\n        heapq.heapify(results)\n\n        while candidates:\n            dist, node_id = heapq.heappop(candidates)\n            # furthest in results\n            furthest_dist = -results[0][0] if results else float('inf')\n\n            if dist > furthest_dist + 1e-6:\n                break\n\n            node = self.nodes[node_id]\n            for neighbor_id in node.neighbors.get(layer, []):\n                if neighbor_id not in visited:\n                    visited.add(neighbor_id)\n                    d = self._distance(query, self.nodes[neighbor_id].vector)\n                    heapq.heappush(candidates, (d, neighbor_id))\n\n                    if len(results) < ef:\n                        heapq.heappush(results, (-d, neighbor_id))\n                    elif d < -results[0][0]:\n                        heapq.heappushpop(results, (-d, neighbor_id))\n\n        return [(nid, -d) for d, nid in sorted(results, key=lambda x: -x[0])]\n\n    def search(\n        self, query: np.ndarray, top_k: int = 10\n    ) -> List[Tuple[str, float]]:\n        if self.entry_point is None:\n            return []\n\n        curr = self.entry_point\n        curr_dist = self._distance(query, self.nodes[curr].vector)\n\n        for lc in range(self.max_level, 0, -1):\n            changed = True\n            while changed:\n                changed = False\n                node = self.nodes[curr]\n                for neighbor_id in node.neighbors.get(lc, []):\n                    d = self._distance(query, self.nodes[neighbor_id].vector)\n                    if d < curr_dist:\n                        curr = neighbor_id\n                        curr_dist = d\n                        changed = True\n\n        candidates = self._search_at_layer(\n            query, curr, 0, max(self.ef_search, top_k)\n        )\n        return sorted(candidates, key=lambda x: x[1])[:top_k]\n\nclass IVFIndex:\n    \"\"\"\n    Inverted File Index.\n    Clusters vectors into Voronoi cells. Search only explores nearest centroids.\n    \"\"\"\n\n    def __init__(\n        self, dim: int, n_centroids: int = 100, n_probe: int = 10\n    ):\n        self.dim = dim\n        self.n_centroids = n_centroids\n        self.n_probe = n_probe\n        self.centroids: Optional[np.ndarray] = None\n        self.inverted_lists: Dict[int, List[Tuple[str, np.ndarray]]] = {}\n        self.doc_ids: List[str] = []\n\n    def train(self, vectors: np.ndarray, doc_ids: List[str]) -> None:\n        \"\"\"K-means clustering to build inverted lists.\"\"\"\n        from sklearn.cluster import KMeans\n\n        kmeans = KMeans(\n            n_clusters=self.n_centroids, random_state=42, n_init=3\n        )\n        labels = kmeans.fit_predict(vectors)\n        self.centroids = kmeans.cluster_centers_\n\n        for idx, label in enumerate(labels):\n            if label not in self.inverted_lists:\n                self.inverted_lists[label] = []\n            self.inverted_lists[label].append((doc_ids[idx], vectors[idx]))\n\n        self.doc_ids = doc_ids\n\n    def search(\n        self, query: np.ndarray, top_k: int = 10\n    ) -> List[Tuple[str, float]]:\n        if self.centroids is None:\n            return []\n\n        # find nearest n_probe centroids\n        dists = np.linalg.norm(\n            self.centroids - query.reshape(1, -1), axis=1\n        )\n        nearest_centroids = np.argsort(dists)[:self.n_probe]\n\n        # search only within those inverted lists\n        candidates: List[Tuple[float, str]] = []\n        for cid in nearest_centroids:\n            for doc_id, vec in self.inverted_lists.get(cid, []):\n                dist = float(np.linalg.norm(vec - query))\n                candidates.append((dist, doc_id))\n\n        candidates.sort(key=lambda x: x[0])\n        return candidates[:top_k]\n\n    def recall_at_k(\n        self, query: np.ndarray, ground_truth: List[str], k: int = 10\n    ) -> float:\n        results = self.search(query, top_k=k)\n        retrieved = set(doc_id for _, doc_id in results)\n        relevant = set(ground_truth)\n        if not relevant:\n            return 0.0\n        return len(retrieved & relevant) / len(relevant)\n\ndef demonstrate_dense_retrieval():\n    \"\"\"End-to-end dense retrieval example.\"\"\"\n    dim = 128\n    n_docs = 1000\n\n    # synthetic embeddings\n    rng = np.random.RandomState(42)\n    documents = [\n        Document(\n            doc_id=f\"doc_{i}\",\n            text=f\"Document {i} about {'AI' if i % 3 == 0 else 'search' if i % 3 == 1 else 'data'}\",\n            embedding=rng.randn(dim).astype(np.float32)\n        )\n        for i in range(n_docs)\n    ]\n\n    retriever = DenseRetriever(documents, normalize=True)\n    query_emb = rng.randn(dim).astype(np.float32)\n    query_emb = query_emb / np.linalg.norm(query_emb)\n\n    results = retriever.search(query_emb, top_k=5, similarity_fn=\"cosine\")\n    print(\"=== Dense Retrieval Results (Cosine) ===\")\n    for r in results:\n        print(f\"  Rank {r.rank}: {r.document.doc_id} — score={r.score:.4f}\")\n\n    # Compare with dot product on non-normalized\n    retriever_un = DenseRetriever(documents, normalize=False)\n    results_dot = retriever_un.search(query_emb, top_k=5, similarity_fn=\"dot\")\n    print(\"\\n=== Dense Retrieval Results (Dot Product, unnormalized) ===\")\n    for r in results_dot:\n        print(f\"  Rank {r.rank}: {r.document.doc_id} — score={r.score:.4f}\")\n\ndemonstrate_dense_retrieval()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    Q[Query Text] --> E[Embedding Model<br/>Bi-Encoder]\n    E --> QV[Query Vector<br/>d=768]\n    QV --> ANN{ANN Index}\n    \n    subgraph ANN_Index [ANN Index Options]\n        HNSW[HNSW<br/>Graph-based]\n        IVF[IVF<br/>Clustering-based]\n        PQ[PQ<br/>Product Quantization]\n    end\n    \n    ANN --> C1[Coarse Search<br/>Top-Layer Traversal]\n    ANN --> C2[Centroid Search<br/>Nearest Clusters]\n    ANN --> C3[Codebook Search<br/>Compressed Vectors]\n    \n    C1 --> D1[Fine Search<br/>Bottom-Layer Refinement]\n    C2 --> D2[Full Scan<br/>Probed Clusters]\n    C3 --> D3[Distance Table<br/>ADC Computation]\n    \n    D1 --> R[Top-K Results]\n    D2 --> R\n    D3 --> R\n    \n    style ANN_Index fill:#d5f0e6,stroke:#059669\n    style R fill:#fef3c7,stroke:#d97706\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "162-sparse-retrieval",
      children: "16.2 Sparse Retrieval"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sparse retrieval represents documents as sparse vectors (bags of words or learned term weights).\nBM25 and TF-IDF operate over inverted indexes. SPLADE learns sparse representations from transformer models."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bm25-implementation",
      children: "BM25 Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BM25 scores each query term based on its frequency in the document relative to the corpus.\nIt includes document length normalization and saturation to prevent term frequency domination."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import math\nfrom collections import Counter, defaultdict\nfrom typing import List, Set\nimport re\n\nclass BM25:\n    \"\"\"\n    Okapi BM25 retrieval model.\n    Score = sum over query terms of IDF * (f * (k1 + 1)) / (f + k1 * (1 - b + b * |d| / avgdl))\n    \"\"\"\n\n    def __init__(\n        self,\n        k1: float = 1.5,\n        b: float = 0.75,\n        epsilon: float = 0.25\n    ):\n        self.k1 = k1\n        self.b = b\n        self.epsilon = epsilon\n        self.documents: List[str] = []\n        self.doc_ids: List[str] = []\n        self.avgdl: float = 0.0\n        self.doc_freqs: List[Counter] = []\n        self.idf: Dict[str, float] = {}\n        self.doc_len: List[int] = []\n        self.N: int = 0  # total documents\n        self.inverted_index: Dict[str, List[int]] = defaultdict(list)\n\n    def _tokenize(self, text: str) -> List[str]:\n        return re.findall(r'\\w+', text.lower())\n\n    def fit(self, documents: List[str], doc_ids: List[str]) -> None:\n        self.documents = documents\n        self.doc_ids = doc_ids\n        self.N = len(documents)\n        self.doc_len = []\n        self.doc_freqs = []\n        doc_term_set: List[Set[str]] = []\n\n        for doc in documents:\n            tokens = self._tokenize(doc)\n            self.doc_len.append(len(tokens))\n            freq = Counter(tokens)\n            self.doc_freqs.append(freq)\n            doc_term_set.append(set(tokens.keys()))\n\n        self.avgdl = sum(self.doc_len) / max(self.N, 1)\n\n        # build inverted index and compute IDF\n        df: Counter = Counter()\n        for idx, term_set in enumerate(doc_term_set):\n            for term in term_set:\n                df[term] += 1\n                self.inverted_index[term].append(idx)\n\n        self.idf = {}\n        for term, doc_freq in df.items():\n            idf = math.log(\n                (self.N - doc_freq + 0.5) / (doc_freq + 0.5) + 1.0\n            )\n            self.idf[term] = max(idf, self.epsilon)\n\n    def _score_document(self, query_tokens: List[str], doc_idx: int) -> float:\n        score = 0.0\n        doc_len = self.doc_len[doc_idx]\n        doc_freq = self.doc_freqs[doc_idx]\n\n        for term in query_tokens:\n            if term not in self.idf:\n                continue\n            idf = self.idf[term]\n            f = doc_freq.get(term, 0)\n            if f == 0:\n                continue\n            # BM25 term frequency saturation\n            numerator = f * (self.k1 + 1.0)\n            denominator = f + self.k1 * (\n                1.0 - self.b + self.b * doc_len / self.avgdl\n            )\n            score += idf * numerator / denominator\n\n        return score\n\n    def search(\n        self, query: str, top_k: int = 10\n    ) -> List[SearchResult]:\n        query_tokens = self._tokenize(query)\n        scores = []\n\n        # find candidate docs via inverted index\n        candidate_docs: Set[int] = set()\n        for term in query_tokens:\n            if term in self.inverted_index:\n                for doc_idx in self.inverted_index[term]:\n                    candidate_docs.add(doc_idx)\n\n        for doc_idx in candidate_docs:\n            score = self._score_document(query_tokens, doc_idx)\n            scores.append((score, doc_idx))\n\n        scores.sort(key=lambda x: x[0], reverse=True)\n        return [\n            SearchResult(\n                Document(\n                    doc_id=self.doc_ids[idx],\n                    text=self.documents[idx]\n                ),\n                score, rank, \"bm25\"\n            )\n            for rank, (score, idx) in enumerate(scores[:top_k], 1)\n        ]\n\nclass TFIDFRetriever:\n    \"\"\"TF-IDF based sparse retrieval.\"\"\"\n\n    def __init__(self, smooth_idf: bool = True):\n        self.smooth_idf = smooth_idf\n        self.documents: List[str] = []\n        self.doc_ids: List[str] = []\n        self.tf_matrix: List[Counter] = []\n        self.idf: Dict[str, float] = {}\n        self.vocabulary: List[str] = []\n\n    def _tokenize(self, text: str) -> List[str]:\n        return re.findall(r'\\w+', text.lower())\n\n    def fit(self, documents: List[str], doc_ids: List[str]) -> None:\n        self.documents = documents\n        self.doc_ids = doc_ids\n        N = len(documents)\n\n        # term frequency per document\n        self.tf_matrix = []\n        df = Counter()\n        for doc in documents:\n            tokens = self._tokenize(doc)\n            freq = Counter(tokens)\n            self.tf_matrix.append(freq)\n            for term in freq:\n                df[term] += 1\n\n        self.vocabulary = sorted(df.keys())\n\n        # inverse document frequency\n        for term, doc_freq in df.items():\n            if self.smooth_idf:\n                self.idf[term] = math.log((N + 1) / (doc_freq + 1)) + 1.0\n            else:\n                self.idf[term] = math.log(N / max(doc_freq, 1))\n\n    def search(\n        self, query: str, top_k: int = 10\n    ) -> List[SearchResult]:\n        query_tokens = self._tokenize(query)\n        query_tf = Counter(query_tokens)\n\n        scores = []\n        for idx in range(len(self.documents)):\n            score = 0.0\n            for term in query_tf:\n                if term not in self.idf:\n                    continue\n                tf = self.tf_matrix[idx].get(term, 0)\n                if tf == 0:\n                    continue\n                # TF-IDF = (1 + log(tf)) * log(N/df)\n                tf_weight = 1 + math.log(tf) if tf > 0 else 0\n                score += tf_weight * self.idf[term]\n            scores.append((score, idx))\n\n        scores.sort(key=lambda x: x[0], reverse=True)\n        return [\n            SearchResult(\n                Document(\n                    doc_id=self.doc_ids[idx],\n                    text=self.documents[idx]\n                ),\n                score, rank, \"tfidf\"\n            )\n            for rank, (score, idx) in enumerate(scores[:top_k], 1)\n        ]\n\ndef compare_sparse_methods():\n    \"\"\"Compare BM25 and TF-IDF on sample documents.\"\"\"\n    docs = [\n        \"The quick brown fox jumps over the lazy dog\",\n        \"A fast brown fox leaps over a sleepy dog\",\n        \"The lazy dog sleeps in the sun all day\",\n        \"Machine learning models learn from data patterns\",\n        \"Deep neural networks excel at pattern recognition\",\n        \"Data science involves statistics machine learning and visualization\",\n        \"Python is a popular language for machine learning and data science\",\n    ]\n    doc_ids = [f\"doc_{i}\" for i in range(len(docs))]\n\n    bm25 = BM25()\n    bm25.fit(docs, doc_ids)\n\n    tfidf = TFIDFRetriever()\n    tfidf.fit(docs, doc_ids)\n\n    queries = [\"brown fox jumps\", \"machine learning data\", \"lazy dog sleep\"]\n\n    for query in queries:\n        print(f\"\\n=== Query: '{query}' ===\")\n\n        bm25_results = bm25.search(query, top_k=3)\n        tfidf_results = tfidf.search(query, top_k=3)\n\n        print(\"BM25:\")\n        for r in bm25_results:\n            print(f\"  Rank {r.rank}: {r.document.doc_id} — score={r.score:.4f}\")\n        print(\"TF-IDF:\")\n        for r in tfidf_results:\n            print(f\"  Rank {r.rank}: {r.document.doc_id} — score={r.score:.4f}\")\n\ncompare_sparse_methods()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "learned-sparse-representations-splade",
      children: "Learned Sparse Representations (SPLADE)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SPLADE uses a transformer encoder to produce term-weighted sparse vectors directly.\nEach token in the vocabulary gets a weight indicating its relevance to the document/query.\nThis combines the interpretability of sparse retrieval with the semantic power of transformers."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SPLADEStyleRetriever:\n    \"\"\"\n    Simplified SPLADE-style learned sparse retrieval.\n    Uses MLM-based logits to produce term importance weights.\n\n    In production: use a trained SPLADE model from HuggingFace.\n    \"\"\"\n\n    def __init__(\n        self, vocabulary: List[str], lambda_reg: float = 0.01\n    ):\n        self.vocabulary = vocabulary\n        self.vocab_index = {w: i for i, w in enumerate(vocabulary)}\n        self.lambda_reg = lambda_reg\n        # In practice, this would be a BERT MLM head output\n        # Here we simulate with random term importance\n        self.doc_vectors: Dict[str, np.ndarray] = {}\n\n    def _encode_simulated(\n        self, text: str, rng: np.random.RandomState\n    ) -> np.ndarray:\n        \"\"\"Simulate SPLADE output: sparse logits over vocabulary.\"\"\"\n        tokens = re.findall(r'\\w+', text.lower())\n        vec = np.zeros(len(self.vocabulary), dtype=np.float32)\n\n        for token in tokens:\n            if token in self.vocab_index:\n                # Simulate MLM logit (would be from BERT in practice)\n                vec[self.vocab_index[token]] = rng.exponential(scale=2.0)\n\n        # ReLU + log-saturation (SPLADE uses log(1 + ReLU(x)))\n        vec = np.log1p(np.maximum(vec, 0.0))\n\n        # Apply FLOPS regularization penalty (simulated)\n        sparsity = np.mean(vec > 0)\n        reg_penalty = self.lambda_reg * sparsity * len(tokens)\n\n        return vec\n\n    def fit(\n        self, documents: List[str], doc_ids: List[str],\n        seed: int = 42\n    ) -> None:\n        rng = np.random.RandomState(seed)\n        for doc_id, text in zip(doc_ids, documents):\n            self.doc_vectors[doc_id] = self._encode_simulated(text, rng)\n\n    def search(\n        self, query: str, top_k: int = 10\n    ) -> List[SearchResult]:\n        rng = np.random.RandomState(42)\n        query_vec = self._encode_simulated(query, rng)\n\n        scores = []\n        for doc_id, doc_vec in self.doc_vectors.items():\n            # Dot product of sparse vectors (SPLADE scoring)\n            score = float(np.dot(query_vec, doc_vec))\n            scores.append((score, doc_id))\n\n        scores.sort(key=lambda x: x[0], reverse=True)\n        return [\n            SearchResult(\n                Document(doc_id=doc_id, text=\"\"),\n                score, rank, \"splade\"\n            )\n            for rank, (score, doc_id) in enumerate(scores[:top_k], 1)\n        ]\n\n    def interpret_query(self, query: str) -> List[Tuple[str, float]]:\n        \"\"\"Show which vocabulary terms are activated for a query.\"\"\"\n        rng = np.random.RandomState(42)\n        query_vec = self._encode_simulated(query, rng)\n\n        activated = [\n            (self.vocabulary[i], float(query_vec[i]))\n            for i in np.argsort(query_vec)[::-1][:10]\n            if query_vec[i] > 0\n        ]\n        return activated\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Sparse [Sparse Retrieval Methods]\n        BM25[BM25<br/>Okapi BM25<br/>k1=1.5, b=0.75]\n        TFIDF[TF-IDF<br/>Term Freq x Inverse Doc Freq]\n        SPLADE[SPLADE<br/>Learned Sparse<br/>Transformer + MLM]\n    end\n\n    subgraph Index [Index Structure]\n        INVERTED[Inverted Index<br/>Term → Doc List]\n        POSTING[Posting List<br/>(doc_id, tf, positions)]\n    end\n\n    subgraph Scoring [Scoring]\n        SATURATION[Term Saturation<br/>f / (f + k1 * norm)]\n        IDF_COMP[IDF Component<br/>log(N / df)]\n        DOT_PROD[Dot Product<br/>Sparse Vector Similarity]\n    end\n\n    BM25 --> INVERTED --> POSTING --> SATURATION --> IDF_COMP --> SCORE[Final Score]\n    TFIDF --> INVERTED\n    SPLADE --> DOT_PROD --> SCORE\n\n    style Sparse fill:#e1d5f7,stroke:#7c3aed\n    style Index fill:#d5f0e6,stroke:#059669\n    style Scoring fill:#fef3c7,stroke:#d97706\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "163-fusion-strategies",
      children: "16.3 Fusion Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fusion combines results from multiple retrieval methods into a single ranked list.\nThe challenge is that scores from different retrievers are not directly comparable."
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
        children: "from collections import defaultdict\nfrom typing import List, Dict, Callable\n\nclass FusionEngine:\n    \"\"\"Combines results from multiple retrievers into a single ranking.\"\"\"\n\n    def __init__(self, strategy: str = \"rrf\", k_constant: int = 60):\n        self.strategy = strategy\n        self.k_constant = k_constant  # RRF constant\n\n    def fuse(\n        self, results_list: List[List[SearchResult]], top_k: int = 10\n    ) -> List[SearchResult]:\n        if self.strategy == \"rrf\":\n            return self._rrf_fusion(results_list, top_k)\n        elif self.strategy == \"weighted\":\n            return self._weighted_fusion(results_list, top_k)\n        elif self.strategy == \"borda\":\n            return self._borda_fusion(results_list, top_k)\n        elif self.strategy == \"score_norm\":\n            return self._score_normalized_fusion(results_list, top_k)\n        else:\n            raise ValueError(f\"Unknown fusion strategy: {self.strategy}\")\n\n    def _rrf_fusion(\n        self, results_list: List[List[SearchResult]], top_k: int\n    ) -> List[SearchResult]:\n        \"\"\"Reciprocal Rank Fusion.\"\"\"\n        scores: Dict[str, float] = defaultdict(float)\n        doc_map: Dict[str, Document] = {}\n\n        for results in results_list:\n            for rank, result in enumerate(results, 1):\n                doc_map[result.document.doc_id] = result.document\n                scores[result.document.doc_id] += 1.0 / (\n                    self.k_constant + rank\n                )\n\n        sorted_docs = sorted(\n            scores.items(), key=lambda x: x[1], reverse=True\n        )\n\n        return [\n            SearchResult(\n                doc_map[doc_id],\n                score,\n                rank + 1,\n                f\"rrf_fusion_{self.strategy}\"\n            )\n            for rank, (doc_id, score) in enumerate(\n                sorted_docs[:top_k]\n            )\n        ]\n\n    def _weighted_fusion(\n        self, results_list: List[List[SearchResult]], top_k: int,\n        weights: Optional[List[float]] = None\n    ) -> List[SearchResult]:\n        \"\"\"Weighted linear combination of normalized scores.\"\"\"\n        n_retrievers = len(results_list)\n        if weights is None:\n            weights = [1.0 / n_retrievers] * n_retrievers\n        assert len(weights) == n_retrievers\n\n        scores: Dict[str, float] = defaultdict(float)\n        doc_map: Dict[str, Document] = {}\n\n        for retriever_idx, results in enumerate(results_list):\n            # Score normalize to [0, 1] within this retriever\n            scores_list = [r.score for r in results]\n            max_s = max(scores_list) if scores_list else 1.0\n            min_s = min(scores_list) if scores_list else 0.0\n            s_range = max_s - min_s if max_s != min_s else 1.0\n\n            for result in results:\n                doc_map[result.document.doc_id] = result.document\n                norm_score = (result.score - min_s) / s_range\n                scores[result.document.doc_id] += (\n                    weights[retriever_idx] * norm_score\n                )\n\n        sorted_docs = sorted(\n            scores.items(), key=lambda x: x[1], reverse=True\n        )\n        return [\n            SearchResult(\n                doc_map[doc_id], score, rank + 1, \"weighted_fusion\"\n            )\n            for rank, (doc_id, score) in enumerate(\n                sorted_docs[:top_k]\n            )\n        ]\n\n    def _borda_fusion(\n        self, results_list: List[List[SearchResult]], top_k: int\n    ) -> List[SearchResult]:\n        \"\"\"Borda count: points based on rank position.\"\"\"\n        scores: Dict[str, float] = defaultdict(float)\n        doc_map: Dict[str, Document] = {}\n\n        for results in results_list:\n            n_results = len(results)\n            for rank, result in enumerate(results, 1):\n                doc_map[result.document.doc_id] = result.document\n                # Higher rank = more points\n                scores[result.document.doc_id] += n_results - rank + 1\n\n        sorted_docs = sorted(\n            scores.items(), key=lambda x: x[1], reverse=True\n        )\n        return [\n            SearchResult(\n                doc_map[doc_id], score, rank + 1, \"borda_fusion\"\n            )\n            for rank, (doc_id, score) in enumerate(\n                sorted_docs[:top_k]\n            )\n        ]\n\n    def _score_normalized_fusion(\n        self, results_list: List[List[SearchResult]], top_k: int\n    ) -> List[SearchResult]:\n        \"\"\"Fuse by normalizing scores then summing.\"\"\"\n        # Min-max normalization per retriever\n        normalized_results = []\n        for results in results_list:\n            scores = [r.score for r in results]\n            min_s = min(scores) if scores else 0.0\n            max_s = max(scores) if scores else 1.0\n            s_range = max_s - min_s if max_s != min_s else 1.0\n            normalized_list = []\n            for r in results:\n                norm_score = (r.score - min_s) / s_range\n                normalized_list.append(\n                    SearchResult(\n                        r.document, norm_score, r.rank, r.method\n                    )\n                )\n            normalized_results.append(normalized_list)\n\n        return self._rrf_fusion(normalized_results, top_k)\n\nclass ScoreNormalizer:\n    \"\"\"Normalize scores from different retrievers to comparable scales.\"\"\"\n\n    @staticmethod\n    def min_max(\n        scores: List[float], eps: float = 1e-10\n    ) -> List[float]:\n        min_s = min(scores)\n        max_s = max(scores)\n        if abs(max_s - min_s) < eps:\n            return [0.5] * len(scores)\n        return [(s - min_s) / (max_s - min_s) for s in scores]\n\n    @staticmethod\n    def z_score(scores: List[float]) -> List[float]:\n        mean = np.mean(scores)\n        std = np.std(scores)\n        if std < 1e-10:\n            return [0.0] * len(scores)\n        return [(s - mean) / std for s in scores]\n\n    @staticmethod\n    def quantile(\n        scores: List[float], n_quantiles: int = 10\n    ) -> List[float]:\n        \"\"\"Rank-based normalization to quantile bins.\"\"\"\n        sorted_scores = sorted(enumerate(scores), key=lambda x: x[1])\n        n = len(scores)\n        normalized = [0.0] * n\n        for rank, (orig_idx, _) in enumerate(sorted_scores):\n            quantile = rank / max(n - 1, 1)\n            normalized[orig_idx] = quantile\n        return normalized\n\n    @staticmethod\n    def softmax(\n        scores: List[float], temperature: float = 1.0\n    ) -> List[float]:\n        exp_s = [math.exp(s / temperature) for s in scores]\n        total = sum(exp_s)\n        return [s / total for s in exp_s]\n\ndef demonstrate_fusion_strategies():\n    \"\"\"Compare fusion strategies on example results.\"\"\"\n    import numpy as np\n\n    # Simulate results from two retrievers\n    sparse_results = [\n        SearchResult(Document(\"doc_1\", \"AI document\"), 25.0, 1, \"bm25\"),\n        SearchResult(Document(\"doc_2\", \"Search doc\"), 20.0, 2, \"bm25\"),\n        SearchResult(Document(\"doc_3\", \"Data doc\"), 18.0, 3, \"bm25\"),\n        SearchResult(Document(\"doc_4\", \"ML doc\"), 15.0, 4, \"bm25\"),\n    ]\n\n    dense_results = [\n        SearchResult(Document(\"doc_5\", \"Neural doc\"), 0.92, 1, \"dense\"),\n        SearchResult(Document(\"doc_1\", \"AI document\"), 0.88, 2, \"dense\"),\n        SearchResult(Document(\"doc_3\", \"Data doc\"), 0.85, 3, \"dense\"),\n        SearchResult(Document(\"doc_6\", \"Vector doc\"), 0.81, 4, \"dense\"),\n    ]\n\n    engine = FusionEngine()\n\n    print(\"=== RRF Fusion ===\")\n    rrf_results = engine.fuse([sparse_results, dense_results], top_k=4)\n    for r in rrf_results:\n        print(f\"  {r.document.doc_id}: RRF score={r.score:.4f}\")\n\n    print(\"\\n=== Weighted Fusion (equal weights) ===\")\n    w_results = engine.fuse(\n        [sparse_results, dense_results], top_k=4, weights=[0.5, 0.5]\n    )\n    for r in w_results:\n        print(f\"  {r.document.doc_id}: weighted score={r.score:.4f}\")\n\n    print(\"\\n=== Borda Fusion ===\")\n    b_results = engine.fuse([sparse_results, dense_results], top_k=4)\n    for r in b_results:\n        print(f\"  {r.document.doc_id}: borda score={r.score:.4f}\")\n\n    print(\"\\n=== Rank vs Score Based ===\")\n    print(\"RRF: rank-based — uses only ordering, immune to score hacking\")\n    print(\"Weighted: score-based — sensitive to normalization but captures confidence\")\n    print(\"Borda: rank-based — similar to RRF, simpler but less robust\")\n\ndemonstrate_fusion_strategies()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Retrievers\n        S[Sparse<br/>BM25] --> SR[(Sparse<br/>Results)]\n        D[Dense<br/>ANN] --> DR[(Dense<br/>Results)]\n    end\n\n    subgraph Normalization [Score Normalization]\n        N1[Min-Max<br/>[0, 1] scaling]\n        N2[Z-Score<br/>μ=0, σ=1]\n        N3[Quantile<br/>Rank bins]\n        N4[Softmax<br/>Probabilities]\n    end\n\n    subgraph Fusion [Fusion Methods]\n        RRF[RRF<br/>1/(k + rank)]\n        WS[Weighted Sum<br/>α·S_sparse + β·S_dense]\n        BC[Borda Count<br/>n - rank + 1]\n    end\n\n    SR --> N1 --> RRF\n    DR --> N1 --> RRF\n    SR --> N2 --> WS\n    DR --> N2 --> WS\n    SR --> N3 --> BC\n    DR --> N3 --> BC\n\n    RRF --> FUSED[Fused Ranking]\n    WS --> FUSED\n    BC --> FUSED\n\n    style Retrievers fill:#d5f0e6,stroke:#059669\n    style Normalization fill:#fce7f3,stroke:#db2777\n    style Fusion fill:#fef3c7,stroke:#d97706\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "164-multi-stage-retrieval",
      children: "16.4 Multi-Stage Retrieval"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multi-stage (cascade) retrieval separates retrieval into cheap and expensive phases.\nFirst stage: fast, recall-oriented. Second stage: accurate, precision-oriented."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MultiStageRetriever:\n    \"\"\"\n    Cascade retrieval pipeline:\n    Stage 1: Fast bi-encoder / BM25 → top 100\n    Stage 2: Lightweight reranker → top 20\n    Stage 3: Cross-encoder / LLM → top 5\n    \"\"\"\n\n    def __init__(\n        self,\n        stage1_retriever,\n        stage2_reranker,\n        stage3_reranker=None,\n        stage1_k: int = 100,\n        stage2_k: int = 20,\n        stage3_k: int = 5,\n    ):\n        self.stage1 = stage1_retriever\n        self.stage2 = stage2_reranker\n        self.stage3 = stage3_reranker\n        self.stage1_k = stage1_k\n        self.stage2_k = stage2_k\n        self.stage3_k = stage3_k\n\n    def retrieve(\n        self, query: str, query_emb: np.ndarray\n    ) -> Dict[str, List[SearchResult]]:\n        stage_log = {}\n\n        # Stage 1: Fast retrieval (high recall, low precision)\n        s1_results = self.stage1.search(query_emb, top_k=self.stage1_k)\n        stage_log[\"stage1\"] = s1_results\n\n        # Stage 2: Lightweight reranking\n        s2_results = self.stage2.rerank(\n            query, s1_results, top_k=self.stage2_k\n        )\n        stage_log[\"stage2\"] = s2_results\n\n        # Stage 3: Expensive but accurate reranking\n        if self.stage3 is not None:\n            s3_results = self.stage3.rerank(\n                query, s2_results, top_k=self.stage3_k\n            )\n            stage_log[\"stage3\"] = s3_results\n        else:\n            stage_log[\"stage3\"] = s2_results[:self.stage3_k]\n\n        return stage_log\n\nclass LightweightReranker:\n    \"\"\"\n    Stage 2 reranker using simple cross-encoder-like scoring.\n    In production: DistilBERT or MiniLM cross-encoder.\n    \"\"\"\n\n    def __init__(self, alpha: float = 0.5):\n        self.alpha = alpha  # blend between original score and reranker score\n\n    def rerank(\n        self, query: str, candidates: List[SearchResult],\n        top_k: int = 20\n    ) -> List[SearchResult]:\n        \"\"\"Simulate reranking with a fake cross-encoder score.\"\"\"\n        rng = np.random.RandomState(hash(query) % (2**31))\n\n        for result in candidates:\n            # Simulated cross-encoder score (would use model in practice)\n            sim_score = 0.5 + 0.5 * rng.random()\n            # Blend with original retrieval score\n            combined = (\n                self.alpha * sim_score\n                + (1 - self.alpha) * result.score\n            )\n            result.score = combined\n            result.method = \"stage2_rerank\"\n\n        candidates.sort(key=lambda x: x.score, reverse=True)\n        for rank, result in enumerate(candidates[:top_k], 1):\n            result.rank = rank\n        return candidates[:top_k]\n\nclass CrossEncoderReranker:\n    \"\"\"\n    Stage 3 reranker using accurate cross-encoder.\n    In production: BERT, RoBERTa, or Cohere Rerank endpoint.\n    \"\"\"\n\n    def __init__(self, model_name: str = \"cross-encoder/ms-marco-MiniLM-L6-v2\"):\n        self.model_name = model_name\n\n    def rerank(\n        self, query: str, candidates: List[SearchResult],\n        top_k: int = 5\n    ) -> List[SearchResult]:\n        \"\"\"\n        In production: model.predict([(query, doc.text) for doc in candidates]).\n        Here we simulate with a relevance scoring function.\n        \"\"\"\n        for result in candidates:\n            # Simulate high-quality cross-encoder score\n            overlap = len(\n                set(query.lower().split())\n                & set(result.document.text.lower().split())\n            )\n            query_len = len(query.split())\n            overlap_ratio = overlap / max(query_len, 1)\n\n            # Precision score: how well query terms match document\n            result.score = 0.3 + 0.7 * overlap_ratio\n            result.method = \"cross_encoder\"\n\n        candidates.sort(key=lambda x: x.score, reverse=True)\n        for rank, result in enumerate(candidates[:top_k], 1):\n            result.rank = rank\n        return candidates[:top_k]\n\nclass CascadeLatencyOptimizer:\n    \"\"\"\n    Optimize multi-stage latency by dynamically choosing how many candidates\n    to pass between stages based on query complexity.\n    \"\"\"\n\n    def __init__(\n        self,\n        base_stage1_k: int = 100,\n        base_stage2_k: int = 20,\n        latency_budget_ms: float = 500.0,\n    ):\n        self.base_stage1_k = base_stage1_k\n        self.base_stage2_k = base_stage2_k\n        self.latency_budget = latency_budget_ms\n\n        # Estimated per-stage latency (ms per document)\n        self.stage1_latency_per_doc = 0.5   # BM25 / ANN\n        self.stage2_latency_per_doc = 5.0   # Lightweight reranker\n        self.stage3_latency_per_doc = 50.0  # Cross-encoder\n\n    def compute_optimal_k(\n        self, query_complexity: float\n    ) -> Tuple[int, int, int]:\n        \"\"\"\n        query_complexity: 0.0 (simple) to 1.0 (complex).\n        Simple queries: fewer candidates. Complex: more candidates.\n        \"\"\"\n        # Stay within latency budget\n        for s2_k in range(50, 5, -5):\n            s1_k = min(int(s2_k * 3), self.base_stage1_k)\n            s3_k = min(int(s2_k * 0.3), 10)\n\n            estimated_latency = (\n                s1_k * self.stage1_latency_per_doc\n                + s2_k * self.stage2_latency_per_doc\n                + s3_k * self.stage3_latency_per_doc\n            )\n\n            if estimated_latency <= self.latency_budget:\n                break\n\n        # Scale by query complexity\n        s2_k = max(10, int(self.base_stage2_k * (0.5 + 0.5 * query_complexity)))\n        s1_k = min(int(s2_k * 5), self.base_stage1_k)\n        s3_k = max(3, int(s2_k * 0.25))\n\n        return s1_k, s2_k, s3_k\n\n    def estimate_latency(self, s1_k: int, s2_k: int, s3_k: int) -> float:\n        return (\n            s1_k * self.stage1_latency_per_doc\n            + s2_k * self.stage2_latency_per_doc\n            + s3_k * self.stage3_latency_per_doc\n        )\n\ndef demonstrate_cascade_retrieval():\n    \"\"\"Show multi-stage cascade retrieval in action.\"\"\"\n    import numpy as np\n\n    # Setup\n    docs = [\n        Document(f\"doc_{i}\", f\"This is document {i} about data science and machine learning\")\n        for i in range(50)\n    ]\n    rng = np.random.RandomState(42)\n    for doc in docs:\n        doc.embedding = rng.randn(128).astype(np.float32)\n\n    retriever = DenseRetriever(docs, normalize=True)\n    reranker_l2 = LightweightReranker(alpha=0.7)\n    reranker_l3 = CrossEncoderReranker()\n\n    cascade = MultiStageRetriever(\n        stage1_retriever=retriever,\n        stage2_reranker=reranker_l2,\n        stage3_reranker=reranker_l3,\n        stage1_k=50,\n        stage2_k=20,\n        stage3_k=5,\n    )\n\n    query_emb = rng.randn(128).astype(np.float32)\n    query_emb = query_emb / np.linalg.norm(query_emb)\n\n    results = cascade.retrieve(\"machine learning data\", query_emb)\n\n    for stage, stage_results in results.items():\n        print(f\"\\n{stage.upper()}: Top {len(stage_results)} results\")\n        for r in stage_results[:3]:\n            print(\n                f\"  Rank {r.rank}: {r.document.doc_id} \"\n                f\"score={r.score:.4f} method={r.method}\"\n            )\n\n    # Latency optimization\n    optimizer = CascadeLatencyOptimizer()\n    print(\"\\n=== Latency Optimization ===\")\n    for complexity in [0.0, 0.5, 1.0]:\n        s1_k, s2_k, s3_k = optimizer.compute_optimal_k(complexity)\n        lat = optimizer.estimate_latency(s1_k, s2_k, s3_k)\n        print(\n            f\"Complexity={complexity:.1f}: \"\n            f\"k1={s1_k}, k2={s2_k}, k3={s3_k}, \"\n            f\"est_latency={lat:.1f}ms\"\n        )\n\ndemonstrate_cascade_retrieval()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    Q[Query] --> S1[Stage 1<br/>Fast Bi-Encoder<br/>or BM25]\n    S1 --> C1[Candidate Pool<br/>Top 50-200]\n    C1 --> S2[Stage 2<br/>Lightweight Reranker<br/>DistilBERT / MiniLM]\n    S2 --> C2[Refined Candidates<br/>Top 10-30]\n    C2 --> S3[Stage 3<br/>Cross-Encoder<br/>BERT / RoBERTa]\n    S3 --> FINAL[Final Ranking<br/>Top 3-5]\n    \n    subgraph Budget [Latency Budget]\n        L1[~50ms]\n        L2[~100ms]\n        L3[~200ms]\n    end\n    \n    S1 -.-> L1\n    S2 -.-> L2\n    S3 -.-> L3\n    \n    style S1 fill:#d5f0e6,stroke:#059669\n    style S2 fill:#fef3c7,stroke:#d97706\n    style S3 fill:#fce7f3,stroke:#db2777\n    style Budget fill:#e1d5f7,stroke:#7c3aed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "165-late-interaction-models",
      children: "16.5 Late Interaction Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Late interaction models like ColBERT bridge the gap between bi-encoders and cross-encoders.\nThey encode query and document independently (like bi-encoders) but compute token-level interactions at scoring time (like cross-encoders)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "colbert-style-maxsim-scoring",
      children: "ColBERT-Style MaxSim Scoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The key innovation is the MaxSim operation: for each query token, find its maximum similarity against any document token, then sum."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ColBERTLateInteraction:\n    \"\"\"\n    ColBERT-style late interaction reranker.\n    Uses token-level embeddings and MaxSim scoring.\n\n    Matches: Score = sum_{q_i in Q} max_{d_j in D} sim(E_Q(q_i), E_D(d_j))\n    \"\"\"\n\n    def __init__(\n        self, dim: int = 128, query_augmentation: bool = True\n    ):\n        self.dim = dim\n        self.query_augmentation = query_augmentation\n\n    def _tokenize_and_embed_simulated(\n        self, text: str, rng: np.random.RandomState\n    ) -> np.ndarray:\n        \"\"\"\n        Simulate token-level embeddings.\n        In production: BERT encoder output per token.\n        \"\"\"\n        tokens = text.lower().split()\n        n_tokens = len(tokens)\n        # Each token gets a dim-dimensional embedding\n        embeddings = rng.randn(n_tokens, self.dim).astype(np.float32)\n        # Normalize for cosine similarity\n        norms = np.linalg.norm(embeddings, axis=1, keepdims=True)\n        return embeddings / (norms + 1e-10)\n\n    def _encode_tokens(\n        self, text: str, seed: int = 42\n    ) -> np.ndarray:\n        \"\"\"Encode text into token-level embeddings.\"\"\"\n        rng = np.random.RandomState(seed + hash(text) % (2**16))\n        return self._tokenize_and_embed_simulated(text, rng)\n\n    def maxsim_score(\n        self,\n        query_embeddings: np.ndarray,\n        doc_embeddings: np.ndarray\n    ) -> float:\n        \"\"\"\n        Compute ColBERT MaxSim score.\n\n        For each query token, find max cosine similarity to any doc token.\n        Sum all maxima. This allows fine-grained term matching.\n\n        query_embeddings: (n_query_tokens, dim)\n        doc_embeddings: (n_doc_tokens, dim)\n        \"\"\"\n        # Similarity matrix: (n_query, n_doc)\n        sim_matrix = np.dot(query_embeddings, doc_embeddings.T)\n\n        # Max over document tokens for each query token\n        max_per_query_token = np.max(sim_matrix, axis=1)\n\n        # Sum the maxima\n        score = float(np.sum(max_per_query_token))\n\n        return score\n\n    def score_pair(\n        self, query: str, document: Document\n    ) -> float:\n        \"\"\"Score a single query-document pair.\"\"\"\n        q_emb = self._encode_tokens(query, seed=42)\n        d_emb = self._encode_tokens(\n            document.text,\n            seed=42 + hash(document.doc_id) % (2**16)\n        )\n        return self.maxsim_score(q_emb, d_emb)\n\n    def batch_score(\n        self, query: str, candidates: List[SearchResult]\n    ) -> List[float]:\n        \"\"\"Score multiple candidates against a query.\"\"\"\n        q_emb = self._encode_tokens(query, seed=42)\n        scores = []\n\n        for result in candidates:\n            d_emb = self._encode_tokens(\n                result.document.text,\n                seed=42 + hash(result.document.doc_id) % (2**16)\n            )\n            score = self.maxsim_score(q_emb, d_emb)\n            scores.append(score)\n\n        return scores\n\n    def rerank(\n        self, query: str, candidates: List[SearchResult],\n        top_k: int = 10\n    ) -> List[SearchResult]:\n        \"\"\"Rerank candidates using ColBERT-style late interaction.\"\"\"\n        q_emb = self._encode_tokens(query, seed=42)\n\n        for result in candidates:\n            d_emb = self._encode_tokens(\n                result.document.text,\n                seed=42 + hash(result.document.doc_id) % (2**16)\n            )\n            colbert_score = self.maxsim_score(q_emb, d_emb)\n\n            # LERP: blend original score with ColBERT score\n            # In production, ColBERT score replaces retrieval score\n            result.score = 0.3 * result.score + 0.7 * colbert_score\n            result.method = \"colbert_maxsim\"\n\n        candidates.sort(key=lambda x: x.score, reverse=True)\n        for rank, result in enumerate(candidates[:top_k], 1):\n            result.rank = rank\n        return candidates[:top_k]\n\n    def interpret_matches(\n        self, query: str, document_text: str, top_k: int = 5\n    ) -> List[Tuple[str, str, float]]:\n        \"\"\"\n        Show which query tokens matched which document tokens.\n        Useful for debugging and interpretability.\n        \"\"\"\n        q_emb = self._encode_tokens(query, seed=42)\n        d_emb = self._encode_tokens(\n            document_text, seed=43\n        )\n\n        query_tokens = query.lower().split()\n        doc_tokens = document_text.lower().split()\n\n        # Similarity matrix\n        sim_matrix = np.dot(q_emb, d_emb.T)\n\n        matches = []\n        for qi in range(len(query_tokens)):\n            best_dj = int(np.argmax(sim_matrix[qi]))\n            max_sim = float(sim_matrix[qi, best_dj])\n            matches.append((\n                query_tokens[qi],\n                doc_tokens[best_dj] if best_dj < len(doc_tokens) else \"\",\n                max_sim\n            ))\n\n        matches.sort(key=lambda x: x[2], reverse=True)\n        return matches[:top_k]\n\ndef demonstrate_colbert_scoring():\n    \"\"\"Show ColBERT MaxSim scoring and comparison with bi-encoder.\"\"\"\n    colbert = ColBERTLateInteraction(dim=128)\n\n    query = \"machine learning for data science\"\n    doc_text = (\n        \"Deep learning models require large datasets for training \"\n        \"and validation in data science applications\"\n    )\n\n    score = colbert.score_pair(query, Document(\"test\", doc_text))\n    print(f\"=== ColBERT MaxSim Scoring ===\")\n    print(f\"Query: '{query}'\")\n    print(f\"Document: '{doc_text}'\")\n    print(f\"ColBERT Score: {score:.4f}\")\n    print()\n\n    # Interpret matches\n    matches = colbert.interpret_matches(query, doc_text)\n    print(\"Top token matches (query → document):\")\n    for q_token, d_token, sim in matches:\n        print(f\"  '{q_token}' ↔ '{d_token}' : sim={sim:.4f}\")\n\n    print()\n    print(\"Key insight:\")\n    print(\"  ColBERT can match 'machine' → 'deep' (semantic) and\")\n    print(\"  'data' → 'data' (exact) at the same time.\")\n    print(\"  Bi-encoders collapse everything into one vector.\")\n    print(\"  Cross-encoders are more accurate but O(n^2) tokens.\")\n    print(\"  ColBERT: O(n) encoding + O(n*m) scoring — best of both.\")\n\ndemonstrate_colbert_scoring()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comparison-of-interaction-types",
      children: "Comparison of Interaction Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def compare_interaction_types():\n    \"\"\"Compare bi-encoder, cross-encoder, and late interaction.\"\"\"\n    import time\n\n    n_queries = 10\n    n_docs = 100\n    dim = 128\n\n    rng = np.random.RandomState(42)\n    q_embs = rng.randn(n_queries, dim).astype(np.float32)\n    d_embs = rng.randn(n_docs, dim).astype(np.float32)\n    q_tokens = rng.randn(n_queries, 15, dim).astype(np.float32)\n    d_tokens = rng.randn(n_docs, 20, dim).astype(np.float32)\n\n    print(\"=== Interaction Type Comparison ===\")\n    print(f\"{'Method':25} {'Enc Time':12} {'Score Time':12} {'Total':12}\")\n    print(\"-\" * 61)\n\n    # Bi-encoder: reduce tokens to 1 vector, then dot product\n    t0 = time.time()\n    q_vecs = q_embs  # already pooled\n    d_vecs = d_embs\n    t_enc = time.time() - t0\n\n    t0 = time.time()\n    bi_scores = np.dot(q_vecs, d_vecs.T)\n    t_score = time.time() - t0\n    print(\n        f\"{'Bi-encoder (pooled)':25} \"\n        f\"{t_enc:8.4f}s    {t_score:8.4f}s    {t_enc+t_score:8.4f}s\"\n    )\n\n    # Cross-encoder: concat all(token pairs) → quadratic\n    t0 = time.time()\n    # Simulate: concat [q_i; d_j] for each pair\n    ce_enc_time = t_enc * 10  # cross-encoder is ~10x slower\n    t_enc_ce = time.time() - t0 + ce_enc_time\n\n    t0 = time.time()\n    # Simulate cross-encoder score\n    ce_scores = np.dot(q_embs, d_embs.T)  # simplified\n    t_score_ce = time.time() - t0\n    print(\n        f\"{'Cross-encoder (pairwise)':25} \"\n        f\"{t_enc_ce:8.4f}s    {t_score_ce:8.4f}s    \"\n        f\"{t_enc_ce+t_score_ce:8.4f}s\"\n    )\n\n    # Late interaction (ColBERT): encode tokens, then MaxSim\n    t0 = time.time()\n    # Same encoding as bi-encoder (token level instead of pooled)\n    t_enc_li = time.time() - t0 + t_enc\n\n    t0 = time.time()\n    li_scores = np.zeros((n_queries, n_docs))\n    for qi in range(n_queries):\n        for di in range(n_docs):\n            sim = np.dot(q_tokens[qi], d_tokens[di].T)\n            li_scores[qi, di] = np.sum(np.max(sim, axis=1))\n    t_score_li = time.time() - t0\n    print(\n        f\"{'Late Interaction (MaxSim)':25} \"\n        f\"{t_enc_li:8.4f}s    {t_score_li:8.4f}s    \"\n        f\"{t_enc_li+t_score_li:8.4f}s\"\n    )\n\n    print()\n    print(\"Trade-offs:\")\n    print(\"  Bi-encoder:    Fast encoding & scoring, limited accuracy\")\n    print(\"  Cross-encoder: Slow, most accurate, best for final ranking\")\n    print(\"  Late interact: Balanced, good accuracy, moderate speed\")\n    print(\"  Production: Bi-encoder for stage 1, late interaction for\")\n    print(\"              stage 2, cross-encoder for stage 3 (top 10)\")\n\ncompare_interaction_types()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Bi [Bi-Encoder]\n        Q1[Query Tokens] --> P1[Pooler]\n        D1[Doc Tokens] --> P2[Pooler]\n        P1 --> V1[(Single Vector)]\n        P2 --> V2[(Single Vector)]\n        V1 --> DOT[Similarity<br/>cosine / dot]\n        V2 --> DOT\n    end\n\n    subgraph ColBERT [Late Interaction]\n        Q2[Query Tokens] --> E1[Encoder]\n        D2[Doc Tokens] --> E2[Encoder]\n        E1 --> QT[(Query<br/>Token Embs)]\n        E2 --> DT[(Doc<br/>Token Embs)]\n        QT --> MAX[MaxSim<br/>max over doc tokens]\n        DT --> MAX\n        MAX --> SUM[Sum of Maxima]\n    end\n\n    subgraph Cross [Cross-Encoder]\n        Q3[Query] --> CONCAT[Concat<br/>[CLS] q [SEP] d [SEP]]\n        D3[Doc] --> CONCAT\n        CONCAT --> TRANS[Full Transformer<br/>Bidirectional Attention]\n        TRANS --> SCORE[Relevance Score]\n    end\n\n    style Bi fill:#d5f0e6,stroke:#059669\n    style ColBERT fill:#fef3c7,stroke:#d97706\n    style Cross fill:#fce7f3,stroke:#db2777\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "166-routing-strategies",
      children: "16.6 Routing Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Routing strategies decide which retriever (or combination) to use for each query.\nThis improves efficiency and accuracy by matching queries to the best-suited method."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class QueryRouter:\n    \"\"\"\n    Routes queries to the most appropriate retriever based on query analysis.\n    \"\"\"\n\n    def __init__(self, threshold_keyword: float = 0.6):\n        self.threshold_keyword = threshold_keyword\n\n    def analyze_query(self, query: str) -> Dict[str, float]:\n        \"\"\"Extract features to determine routing strategy.\"\"\"\n        tokens = query.lower().split()\n        n_tokens = len(tokens)\n\n        # Features that suggest sparse retrieval\n        exact_phrase_ratio = 0.0\n        rare_term_score = 0.0\n        code_pattern = 0.0\n        named_entity_score = 0.0\n\n        # Check for exact phrases (quoted strings)\n        if '\"' in query:\n            exact_phrase_ratio = query.count('\"') / max(n_tokens, 1)\n\n        # Check for code-like patterns\n        import re\n        if re.search(r'[A-Z]{2,}-\\d+', query):  # e.g., \"MB-203X\"\n            code_pattern = 1.0\n        if re.search(r'[a-z]+\\.[a-z]+\\(', query):  # e.g., \"func_name()\"\n            code_pattern = max(code_pattern, 0.8)\n\n        # Check for named entities (capitalized words)\n        cap_words = sum(1 for w in query.split() if w[0].isupper())\n        named_entity_score = cap_words / max(n_tokens, 1)\n\n        # Semantic vs keyword score\n        keyword_score = max(\n            exact_phrase_ratio,\n            code_pattern,\n            named_entity_score\n        )\n        semantic_score = 1.0 - keyword_score\n\n        return {\n            \"keyword_score\": keyword_score,\n            \"semantic_score\": semantic_score,\n            \"exact_phrase_ratio\": exact_phrase_ratio,\n            \"code_pattern\": code_pattern,\n            \"named_entity_score\": named_entity_score,\n            \"n_tokens\": n_tokens,\n        }\n\n    def route(\n        self, query: str\n    ) -> str:\n        \"\"\"\n        Determine routing strategy.\n        Returns: 'sparse', 'dense', 'hybrid', or 'hybrid_rerank'.\n        \"\"\"\n        features = self.analyze_query(query)\n\n        # Rule-based routing\n        if features[\"code_pattern\"] > 0.5:\n            return \"sparse\"  # Code identifiers need exact match\n\n        if features[\"exact_phrase_ratio\"] > 0.3:\n            return \"sparse\"  # Exact phrase queries need BM25\n\n        if features[\"keyword_score\"] > self.threshold_keyword:\n            return \"hybrid\"  # Strong keyword signals → combine\n\n        if features[\"n_tokens\"] > 10:\n            return \"dense\"  # Long, descriptive queries → semantic\n\n        return \"hybrid\"  # Default: use both\n\nclass HybridGate:\n    \"\"\"\n    Neural gate that learns to weight sparse vs dense contributions per query.\n    Gate output = sigmoid(MLP(query_features)) — controls α in α·S_sparse + (1-α)·S_dense.\n    \"\"\"\n\n    def __init__(self, input_dim: int = 8):\n        self.input_dim = input_dim\n        # Simulated learned weights\n        self.W = np.random.RandomState(42).randn(input_dim) * 0.1\n        self.b = 0.0\n\n    def _extract_query_features(\n        self, query: str, query_emb: np.ndarray\n    ) -> np.ndarray:\n        \"\"\"Extract features for the gate network.\"\"\"\n        tokens = query.lower().split()\n        import re\n\n        features = [\n            len(tokens) / 50.0,  # normalized length\n            len(set(tokens)) / max(len(tokens), 1),  # vocabulary richness\n            float(bool(re.search(r'[A-Z]{2,}', query))),  # has acronyms\n            float(bool(re.search(r'\\d+', query))),  # has numbers\n            float(bool(re.search(r'[\"\\']', query))),  # has quotes\n            np.mean(np.abs(query_emb)),  # embedding magnitude\n            np.std(query_emb),  # embedding variance\n            float(len(query) > 100),  # long query flag\n        ]\n        return np.array(features, dtype=np.float32)\n\n    def compute_gate_weight(\n        self, query: str, query_emb: np.ndarray\n    ) -> float:\n        \"\"\"\n        Compute α ∈ [0, 1] where α = weight for sparse retrieval.\n        Dense weight = 1 - α.\n        \"\"\"\n        features = self._extract_query_features(query, query_emb)\n        logit = float(np.dot(features, self.W) + self.b)\n        alpha = 1.0 / (1.0 + np.exp(-logit))  # sigmoid\n        return float(alpha)\n\n    def fuse_weighted(\n        self,\n        sparse_results: List[SearchResult],\n        dense_results: List[SearchResult],\n        query: str,\n        query_emb: np.ndarray,\n        top_k: int = 10,\n    ) -> List[SearchResult]:\n        \"\"\"Fuse results with learned per-query weight.\"\"\"\n        alpha = self.compute_gate_weight(query, query_emb)\n\n        # Normalize scores\n        normalizer = ScoreNormalizer()\n        sparse_scores = normalizer.min_max(\n            [r.score for r in sparse_results]\n        )\n        dense_scores = normalizer.min_max(\n            [r.score for r in dense_results]\n        )\n\n        doc_scores: Dict[str, float] = defaultdict(float)\n        doc_map: Dict[str, Document] = {}\n\n        for result, norm_score in zip(sparse_results, sparse_scores):\n            doc_map[result.document.doc_id] = result.document\n            doc_scores[result.document.doc_id] += alpha * norm_score\n\n        for result, norm_score in zip(dense_results, dense_scores):\n            doc_map[result.document.doc_id] = result.document\n            doc_scores[result.document.doc_id] += (1 - alpha) * norm_score\n\n        sorted_docs = sorted(\n            doc_scores.items(), key=lambda x: x[1], reverse=True\n        )\n        return [\n            SearchResult(\n                doc_map[did], score, rank + 1,\n                f\"hybrid_gate(α={alpha:.3f})\"\n            )\n            for rank, (did, score) in enumerate(\n                sorted_docs[:top_k]\n            )\n        ]\n\nclass EnsembleRetriever:\n    \"\"\"\n    Ensemble retrieval: run multiple retrievers in parallel and fuse results.\n    Supports dynamic routing per query.\n    \"\"\"\n\n    def __init__(\n        self,\n        retrievers: Dict[str, object],\n        router: QueryRouter,\n        gate: HybridGate = None,\n        fusion_strategy: str = \"rrf\",\n    ):\n        self.retrievers = retrievers\n        self.router = router\n        self.gate = gate\n        self.fusion_engine = FusionEngine(strategy=fusion_strategy)\n\n    def retrieve(\n        self,\n        query: str,\n        query_emb: np.ndarray,\n        top_k: int = 10,\n    ) -> Dict[str, object]:\n        \"\"\"Execute ensemble retrieval with routing.\"\"\"\n        route = self.router.route(query)\n        results = {}\n\n        if route == \"sparse\":\n            results[\"sparse\"] = self.retrievers[\"sparse\"].search(\n                query, top_k=top_k * 2\n            )\n            results[\"final\"] = results[\"sparse\"][:top_k]\n\n        elif route == \"dense\":\n            results[\"dense\"] = self.retrievers[\"dense\"].search(\n                query_emb, top_k=top_k\n            )\n            results[\"final\"] = results[\"dense\"]\n\n        elif route == \"hybrid\":\n            results[\"sparse\"] = self.retrievers[\"sparse\"].search(\n                query, top_k=top_k * 2\n            )\n            results[\"dense\"] = self.retrievers[\"dense\"].search(\n                query_emb, top_k=top_k * 2\n            )\n\n            if self.gate:\n                results[\"final\"] = self.gate.fuse_weighted(\n                    results[\"sparse\"],\n                    results[\"dense\"],\n                    query,\n                    query_emb,\n                    top_k=top_k,\n                )\n            else:\n                results[\"final\"] = self.fusion_engine.fuse(\n                    [results[\"sparse\"], results[\"dense\"]],\n                    top_k=top_k,\n                )\n\n        results[\"route\"] = route\n        return results\n\ndef demonstrate_routing_strategies():\n    \"\"\"Show how different queries are routed to different retrievers.\"\"\"\n    router = QueryRouter()\n\n    test_queries = [\n        \"What is the capital of France?\",\n        \"Fix bug in MB-203X authentication module\",\n        'The president said \"we must innovate\" in his speech',\n        \"Explain the attention mechanism in transformers\",\n        \"Show me error code ERR_500_INTERNAL\",\n        \"How do I implement gradient descent from scratch?\",\n    ]\n\n    print(\"=== Query Routing Analysis ===\")\n    print(f\"{'Query':55} {'Route':15} {'Features'}\")\n    print(\"-\" * 95)\n    for query in test_queries:\n        features = router.analyze_query(query)\n        route = router.route(query)\n        short_query = query[:52] + \"...\" if len(query) > 55 else query\n        print(\n            f\"{short_query:55} {route:15} \"\n            f\"code={features['code_pattern']:.1f} \"\n            f\"exact={features['exact_phrase_ratio']:.1f} \"\n            f\"named={features['named_entity_score']:.1f}\"\n        )\n\n    print()\n    print(\"=== Hybrid Gate Example ===\")\n    gate = HybridGate()\n    rng = np.random.RandomState(42)\n\n    queries_with_embs = [\n        (\"specific product code XYZ-123\", rng.randn(128)),\n        (\"explain deep learning concepts\", rng.randn(128)),\n    ]\n\n    for query, emb in queries_with_embs:\n        alpha = gate.compute_gate_weight(query, emb)\n        print(f\"Query: '{query[:40]:40}' α_sparse={alpha:.3f} β_dense={1-alpha:.3f}\")\n        if alpha > 0.6:\n            print(f\"  → Sparse preferred (exact match needed)\")\n        elif alpha < 0.4:\n            print(f\"  → Dense preferred (semantic understanding)\")\n        else:\n            print(f\"  → Balanced hybrid\")\n\ndemonstrate_routing_strategies()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    Q[Query] --> A[Query Analyzer]\n    \n    A --> F1{Has Code<br/>Pattern?}\n    F1 -->|Yes| R1[Route: Sparse Only<br/>BM25 Exact Match]\n    F1 -->|No| F2{Has Exact<br/>Phrase?}\n    \n    F2 -->|Yes| R2[Route: Sparse Boost<br/>BM25 + Dense Fallback]\n    F2 -->|No| F3{Is Long<br/>Query?}\n    \n    F3 -->|Yes| R3[Route: Dense Only<br/>Semantic Search]\n    F3 -->|No| F4{Has Named<br/>Entities?}\n    \n    F4 -->|Yes| R4[Route: Hybrid RRF<br/>Balanced Fusion]\n    F4 -->|No| R5[Route: Hybrid Gate<br/>Learned Weight α]\n    \n    R1 --> F[Fused Results]\n    R2 --> F\n    R3 --> F\n    R4 --> F\n    R5 --> F\n\n    style A fill:#e1d5f7,stroke:#7c3aed\n    style F1 fill:#fef3c7,stroke:#d97706\n    style F2 fill:#fef3c7,stroke:#d97706\n    style F3 fill:#fef3c7,stroke:#d97706\n    style F4 fill:#fef3c7,stroke:#d97706\n    style F fill:#d5f0e6,stroke:#059669\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "167-putting-it-all-together",
      children: "16.7 Putting It All Together"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A production hybrid search system combines all components into an orchestrated pipeline.\nHere is a unified architecture that ties together sparse, dense, fusion, multi-stage, and routing."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class HybridSearchArchitecture:\n    \"\"\"\n    Complete hybrid search system combining all techniques.\n\n    Architecture:\n    1. Query Router → decides strategy\n    2. Parallel retrieval: BM25 (sparse) + ANN (dense)\n    3. Fusion Engine: RRF or weighted (with gate)\n    4. ColBERT late interaction reranking\n    5. Cross-encoder final reranking\n    \"\"\"\n\n    def __init__(\n        self,\n        bm25_retriever: BM25,\n        dense_retriever: DenseRetriever,\n        fusion_strategy: str = \"rrf\",\n        use_colbert: bool = True,\n        use_cross_encoder: bool = True,\n    ):\n        self.bm25 = bm25_retriever\n        self.dense = dense_retriever\n        self.fusion = FusionEngine(strategy=fusion_strategy)\n        self.router = QueryRouter()\n        self.gate = HybridGate()\n        self.colbert = ColBERTLateInteraction() if use_colbert else None\n        self.cross_encoder = CrossEncoderReranker() if use_cross_encoder else None\n\n        # Stage sizes\n        self.stage1_k = 100  # initial retrieval\n        self.stage2_k = 30   # after fusion\n        self.stage3_k = 10   # after ColBERT\n        self.stage4_k = 5    # final\n\n    def search(\n        self, query: str, query_emb: np.ndarray\n    ) -> Dict[str, object]:\n        log: Dict[str, object] = {}\n\n        # Step 1: Route query\n        route = self.router.route(query)\n        log[\"route\"] = route\n        log[\"query\"] = query\n\n        # Step 2: Parallel retrieval\n        sparse_results = self.bm25.search(query, top_k=self.stage1_k)\n        dense_results = self.dense.search(query_emb, top_k=self.stage1_k)\n        log[\"sparse_count\"] = len(sparse_results)\n        log[\"dense_count\"] = len(dense_results)\n\n        # Step 3: Fusion\n        if self.gate and route != \"sparse\" and route != \"dense\":\n            fused = self.gate.fuse_weighted(\n                sparse_results, dense_results,\n                query, query_emb,\n                top_k=self.stage2_k,\n            )\n        else:\n            fused = self.fusion.fuse(\n                [sparse_results, dense_results],\n                top_k=self.stage2_k,\n            )\n        log[\"fused_count\"] = len(fused)\n\n        # Step 4: ColBERT late interaction reranking (optional)\n        if self.colbert and len(fused) > self.stage3_k:\n            colbert_reranked = self.colbert.rerank(\n                query, fused, top_k=self.stage3_k\n            )\n            log[\"colbert_count\"] = len(colbert_reranked)\n        else:\n            colbert_reranked = fused[:self.stage3_k]\n            log[\"colbert_count\"] = 0\n\n        # Step 5: Cross-encoder final reranking (optional)\n        if self.cross_encoder and len(colbert_reranked) > self.stage4_k:\n            final = self.cross_encoder.rerank(\n                query, colbert_reranked, top_k=self.stage4_k\n            )\n        else:\n            final = colbert_reranked[:self.stage4_k]\n        log[\"final_count\"] = len(final)\n\n        log[\"final_results\"] = final\n        return log\n\n    def get_latency_breakdown(self) -> Dict[str, float]:\n        \"\"\"Estimated latency per stage in milliseconds.\"\"\"\n        return {\n            \"routing\": 2.0,\n            \"sparse_retrieval\": 5.0,\n            \"dense_retrieval\": 30.0,\n            \"fusion\": 1.0,\n            \"colbert_rerank\": 50.0,\n            \"cross_encoder_rerank\": 150.0,\n            \"total_estimated\": 238.0,\n        }\n\ndef run_hybrid_architecture_demo():\n    \"\"\"Demonstrate the complete hybrid search architecture.\"\"\"\n    import time\n\n    # Setup sample data\n    docs = [\n        Document(\n            f\"doc_{i}\",\n            f\"Document {i}: This text discusses \"\n            f\"{'machine learning' if i % 3 == 0 else 'data science' if i % 3 == 1 else 'artificial intelligence'} \"\n            f\"concepts and applications in modern systems.\"\n        )\n        for i in range(100)\n    ]\n    rng = np.random.RandomState(42)\n    for doc in docs:\n        doc.embedding = rng.randn(128).astype(np.float32)\n\n    doc_texts = [d.text for d in docs]\n    doc_ids = [d.doc_id for d in docs]\n\n    bm25 = BM25()\n    bm25.fit(doc_texts, doc_ids)\n    dense = DenseRetriever(docs, normalize=True)\n\n    arch = HybridSearchArchitecture(\n        bm25_retriever=bm25,\n        dense_retriever=dense,\n        fusion_strategy=\"rrf\",\n        use_colbert=True,\n        use_cross_encoder=True,\n    )\n\n    test_queries = [\n        \"machine learning concepts\",\n        \"data science in modern systems\",\n        \"artificial intelligence applications\",\n    ]\n\n    for query in test_queries:\n        print(f\"\\n{'='*60}\")\n        print(f\"Query: '{query}'\")\n\n        # Simulate embedding (would be from model in production)\n        q_emb = rng.randn(128).astype(np.float32)\n        q_emb = q_emb / np.linalg.norm(q_emb)\n\n        t0 = time.time()\n        result = arch.search(query, q_emb)\n        elapsed = time.time() - t0\n\n        print(f\"Route: {result['route']}\")\n        print(\n            f\"Pipeline: \"\n            f\"Sparse({result['sparse_count']}) + \"\n            f\"Dense({result['dense_count']}) → \"\n            f\"Fuse({result['fused_count']}) → \"\n            f\"ColBERT({result['colbert_count']}) → \"\n            f\"Final({result['final_count']})\"\n        )\n        print(f\"Top Results:\")\n        for r in result[\"final_results\"]:\n            print(\n                f\"  Rank {r.rank}: {r.document.doc_id} \"\n                f\"score={r.score:.4f}\"\n            )\n        print(f\"Latency: {elapsed*1000:.1f}ms (simulated)\")\n\n    print(f\"\\n=== Estimated Latency Budget ===\")\n    breakdown = arch.get_latency_breakdown()\n    for stage, lat in breakdown.items():\n        print(f\"  {stage:30}: {lat:6.1f}ms\")\n\nrun_hybrid_architecture_demo()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    Q[Raw Query] --> QP[Query Processor<br/>Rewrite + Enrich]\n    QP --> QR[Query Router]\n\n    QR -->|Keyword / Code| SP[BM25 Sparse<br/>Inverted Index]\n    QR -->|Semantic / Long| DP[Dense ANN<br/>HNSW Index]\n    QR -->|Ambiguous| HP[Hybrid<br/>Both]\n\n    SP --> N[Score Normalizer]\n    DP --> N\n    HP --> N\n\n    N --> FE[Fusion Engine<br/>RRF / Gate]\n    FE --> C1[Candidates Top-100]\n\n    C1 --> CR[ColBERT Reranker<br/>MaxSim Scoring]\n    CR --> C2[Candidates Top-20]\n\n    C2 --> XE[Cross-Encoder<br/>BERT / RoBERTa]\n    XE --> FINAL[Final Top-5]\n\n    subgraph Orchestration\n        QP\n        QR\n    end\n\n    subgraph Retrieval\n        SP\n        DP\n        HP\n    end\n\n    subgraph Fusion [Fusion & Ranking]\n        N\n        FE\n    end\n\n    subgraph Refinement [Refinement]\n        CR\n        XE\n    end\n\n    style Orchestration fill:#e1d5f7,stroke:#7c3aed\n    style Retrieval fill:#d5f0e6,stroke:#059669\n    style Fusion fill:#fef3c7,stroke:#d97706\n    style Refinement fill:#fce7f3,stroke:#db2777\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hybrid search architecture combines sparse and dense retrieval to get the best of both worlds.\nDense retrieval uses embedding-based ANN search (HNSW, IVF) with cosine similarity or dot product.\nSparse retrieval uses BM25, TF-IDF, or learned sparse models like SPLADE.\nFusion strategies merge results — RRF is simple and robust, weighted fusion needs score normalization."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multi-stage (cascade) retrieval separates the pipeline into cheap first-stage recall and expensive\nsecond-stage precision. Late interaction models (ColBERT) provide a sweet spot between bi-encoder speed\nand cross-encoder accuracy using MaxSim token-level scoring. Routing strategies classify each query to\nselect the best retriever, reducing latency while maintaining accuracy."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Production systems use all components together: a router selects the strategy, parallel retrieval runs\nBM25 and ANN search, fusion combines scores, ColBERT reranks candidates, and a cross-encoder produces\nthe final ranking — all within a latency budget using cascade optimization."
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
            children: "Explain the core idea of Hybrid Search Architecture in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Hybrid Search Architecture."
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
            children: "Describe a production bug caused by misunderstanding Hybrid Search Architecture. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Hybrid Search Architecture from 10 users to 10 million?"
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
            children: "Compare Hybrid Search Architecture with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Hybrid Search Architecture."
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
            children: "How would you make an implementation of Hybrid Search Architecture run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Hybrid Search Architecture that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Hybrid Search Architecture explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Hybrid Search Architecture\")."
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
        children: "Review complexity and edge cases for the classic Hybrid Search Architecture interview problem."
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
        }), " You should memorize the Hybrid Search Architecture chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "The time complexity of the standard approach to Hybrid Search Architecture is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Hybrid Search Architecture is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
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
          }), " Your implementation of Hybrid Search Architecture is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
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
          children: "What is the output of the simplest correct implementation of Hybrid Search Architecture on an empty input?"
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
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Hybrid Search Architecture"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Hybrid Search Architecture (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Hybrid Search Architecture problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Hybrid Search Architecture"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Hybrid Search Architecture"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Hybrid Search Architecture"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Hybrid Search Architecture fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Hybrid Search Architecture is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Hybrid Search Architecture is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Hybrid Search Architecture, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Hybrid Search Architecture asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
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
        children: "Never trust external input: validate and sanitize data before processing Hybrid Search Architecture."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Avoid ", (0,jsx_runtime.jsx)(_components.code, {
          children: "eval()"
        }), " and dynamic code execution on untrusted strings."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log errors without leaking sensitive data (keys, PII, internal paths)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For API contexts, add rate limiting and input size limits."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review the chapter's code examples for injection or overflow risks before using them verbatim."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hybrid Search Architecture appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Hybrid Search Architecture helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Hybrid Search Architecture concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Hybrid Search Architecture skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Hybrid Search Architecture to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hybrid Search Architecture is like a recipe"
        }), ": the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity is like a delivery route"
        }), ": a linear route visits each stop once; a nested route revisits stops, and you feel it at scale."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edge cases are like weather"
        }), ": the happy path is a sunny day; production is the storm — build for the storm."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The chapter roadmap is a journey map"
        }), ": each section is a checkpoint; skipping one means getting lost later in the module."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capstone-project-link",
      children: "Capstone Project Link"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/Raushan666java/ai-engineering-journey",
          children: "Module Capstone: End-to-End Project"
        }), " — this chapter contributes the Hybrid Search Architecture skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
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
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
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
          children: "Check the Common Mistakes section of this chapter."
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
          children: "Refer to the theory and complexity analysis in this chapter."
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
          children: "Check the Limitations section of this chapter."
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
          children: "Check the Real-World Examples section of this chapter."
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
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The primary library used in this chapter (see the code examples)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python standard library modules used in the examples (check the imports)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing: pytest for unit tests of Hybrid Search Architecture code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Hybrid Search Architecture"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Hybrid Search Architecture code."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reproduce the failure with the smallest possible input before changing code."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check the common failure modes listed in Common Mistakes — most bugs are listed there."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For performance problems, profile before optimizing: measure, then fix."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When stuck, re-read the chapter's Examples and compare line by line with your code."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pdb"
        }), " or your IDE's debugger to step through the Hybrid Search Architecture example code."]
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
        children: "Explain Hybrid Search Architecture in 60 seconds."
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`python\nfrom typing import Any, Optional"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Hybrid Search Architecture."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Hybrid Search Architecture logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`"
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
          children: "Startup"
        }), ": a small team uses Hybrid Search Architecture daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Hybrid Search Architecture patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Hybrid Search Architecture principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Hybrid Search Architecture shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Hybrid Search Architecture to the business outcome, not just the code."]
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