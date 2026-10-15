"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[7949],{

/***/ 53611
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_12_rag_vector_databases_05_document_retrieval_md_02b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-12-rag-vector-databases-05-document-retrieval-md-02b.json
const site_docs_courses_ai_engineering_placement_12_rag_vector_databases_05_document_retrieval_md_02b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/rag-vector-databases/05-document-retrieval","title":"Document Retrieval","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/12-rag-vector-databases/05-document-retrieval.md","sourceDirName":"courses/ai-engineering-placement/12-rag-vector-databases","slug":"/ai-engineering-placement/12-rag-vector-databases/05-document-retrieval","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/05-document-retrieval","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":162,"frontMatter":{"id":"05-document-retrieval","slug":"/ai-engineering-placement/12-rag-vector-databases/05-document-retrieval","title":"Document Retrieval","sidebar_label":"Document Retrieval","sidebar_position":162},"sidebar":"placementSidebar","previous":{"title":"Chunking Strategies","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/04-chunking-strategies"},"next":{"title":"RAG Pipeline Design","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/06-rag-pipeline-design"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/12-rag-vector-databases/05-document-retrieval.md


const frontMatter = {
	id: '05-document-retrieval',
	slug: '/ai-engineering-placement/12-rag-vector-databases/05-document-retrieval',
	title: 'Document Retrieval',
	sidebar_label: 'Document Retrieval',
	sidebar_position: 162
};
const contentTitle = 'Document Retrieval';

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
  "value": "5.1 Retrieval Paradigms",
  "id": "51-retrieval-paradigms",
  "level": 2
}, {
  "value": "Paradigm Comparison",
  "id": "paradigm-comparison",
  "level": 3
}, {
  "value": "5.2 Sparse Retrieval",
  "id": "52-sparse-retrieval",
  "level": 2
}, {
  "value": "5.2.1 Inverted Index",
  "id": "521-inverted-index",
  "level": 3
}, {
  "value": "5.2.2 TF-IDF",
  "id": "522-tf-idf",
  "level": 3
}, {
  "value": "5.2.3 BM25",
  "id": "523-bm25",
  "level": 3
}, {
  "value": "5.2.4 BM25 Variants",
  "id": "524-bm25-variants",
  "level": 3
}, {
  "value": "5.3 Dense Retrieval",
  "id": "53-dense-retrieval",
  "level": 2
}, {
  "value": "5.3.1 Embedding-Based Search",
  "id": "531-embedding-based-search",
  "level": 3
}, {
  "value": "5.3.2 Bi-Encoder vs Cross-Encoder",
  "id": "532-bi-encoder-vs-cross-encoder",
  "level": 3
}, {
  "value": "5.3.3 Late Interaction (ColBERT)",
  "id": "533-late-interaction-colbert",
  "level": 3
}, {
  "value": "5.4 Hybrid Retrieval",
  "id": "54-hybrid-retrieval",
  "level": 2
}, {
  "value": "5.4.1 Reciprocal Rank Fusion (RRF)",
  "id": "541-reciprocal-rank-fusion-rrf",
  "level": 3
}, {
  "value": "5.4.2 Weighted Score Fusion",
  "id": "542-weighted-score-fusion",
  "level": 3
}, {
  "value": "5.4.3 Learning to Rank",
  "id": "543-learning-to-rank",
  "level": 3
}, {
  "value": "5.5 Query Expansion",
  "id": "55-query-expansion",
  "level": 2
}, {
  "value": "5.5.1 Synonym Expansion",
  "id": "551-synonym-expansion",
  "level": 3
}, {
  "value": "5.5.2 HyDE (Hypothetical Document Embedding)",
  "id": "552-hyde-hypothetical-document-embedding",
  "level": 3
}, {
  "value": "5.5.3 Multi-Query Retrieval",
  "id": "553-multi-query-retrieval",
  "level": 3
}, {
  "value": "5.6 Metadata Retrieval",
  "id": "56-metadata-retrieval",
  "level": 2
}, {
  "value": "5.6.1 Filtered Retrieval",
  "id": "561-filtered-retrieval",
  "level": 3
}, {
  "value": "5.6.2 Boosting",
  "id": "562-boosting",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "5.6.3 Faceted Search",
  "id": "563-faceted-search",
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
        id: "document-retrieval",
        children: "Document Retrieval"
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
            children: "Understand retrieval paradigms — sparse, dense, and hybrid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement BM25 and TF-IDF for keyword-based retrieval"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build dense retrieval systems with embedding similarity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design hybrid retrieval combining sparse and dense signals"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply query expansion and reformulation techniques"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement retrieval with metadata filtering and boosting"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval-Augmented Generation lets LLMs answer questions about your private data. Vector databases store embeddings for semantic search. This module covers the complete RAG pipeline from chunking to reranking."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding document retrieval is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how document retrieval works in practice."
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
            children: "5.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval Paradigms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sparse (keyword), dense (semantic), hybrid (combined)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sparse Retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BM25, TF-IDF, inverted index construction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dense Retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedding-based ANN search, encoding pipelines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid Retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Score fusion, reciprocal rank fusion, weighted combination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query Expansion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generated synonyms, query reformulation, HyDE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metadata Retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attribute filtering, boosting, faceted search"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[Query] --> B{Retrieval Type}\r\n    B --> C[Sparse Retriever]\r\n    B --> D[Dense Retriever]\r\n    B --> E[Hybrid Fuser]\r\n    C --> F[Inverted Index]\r\n    D --> G[Vector Index]\r\n    E --> H[Score Fusion]\r\n    F --> I[Ranked Docs]\r\n    G --> I\r\n    H --> I\r\n    I --> J[Filtered Results]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "51-retrieval-paradigms",
      children: "5.1 Retrieval Paradigms"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval systems fall into three main paradigms: sparse (keyword-based), dense (semantic-based), and hybrid (combined)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\r\nclass RetrievalResult:\r\n    document_id: str\r\n    text: str\r\n    score: float\r\n    method: str\r\n\r\n    def __repr__(self):\r\n        return f\"{self.document_id} ({self.method}, score={self.score:.3f})\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "paradigm-comparison",
      children: "Paradigm Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sparse"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dense"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hybrid"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exact keyword match"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic similarity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (ANN)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vocabulary gap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Struggles with synonyms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handles synonyms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inverted index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vector index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cold start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Needs no training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Needs embedding model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def select_retrieval_paradigm(\r\n    num_documents: int,\r\n    query_vocabulary_overlap: float,\r\n    requires_semantic: bool,\r\n) -> str:\r\n    if num_documents > 10_000_000 and not requires_semantic:\r\n        return \"sparse\"\r\n    elif query_vocabulary_overlap < 0.3:\r\n        return \"dense\"\r\n    elif requires_semantic:\r\n        return \"hybrid\"\r\n    else:\r\n        return \"hybrid\"\r\n\r\nprint(select_retrieval_paradigm(1000, 0.8, False))\r\nprint(select_retrieval_paradigm(100000, 0.2, True))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "52-sparse-retrieval",
      children: "5.2 Sparse Retrieval"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "521-inverted-index",
      children: "5.2.1 Inverted Index"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The foundation of sparse retrieval — maps terms to document IDs and positions."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import defaultdict, Counter\r\nimport math\r\nfrom typing import List, Dict, Set\r\n\r\nclass InvertedIndex:\r\n    def __init__(self):\r\n        self.index: Dict[str, Dict[str, int]] = defaultdict(lambda: defaultdict(int))\r\n        self.doc_lengths: Dict[str, int] = {}\r\n        self.total_docs = 0\r\n\r\n    def add_document(self, doc_id: str, text: str):\r\n        terms = text.lower().split()\r\n        self.doc_lengths[doc_id] = len(terms)\r\n        self.total_docs += 1\r\n\r\n        term_counts = Counter(terms)\r\n        for term, count in term_counts.items():\r\n            self.index[term][doc_id] += count\r\n\r\n    def get_df(self, term: str) -> int:\r\n        \"\"\"Document frequency — how many docs contain this term.\"\"\"\r\n        return len(self.index.get(term, {}))\r\n\r\n    def get_tf(self, term: str, doc_id: str) -> int:\r\n        \"\"\"Term frequency in document.\"\"\"\r\n        return self.index.get(term, {}).get(doc_id, 0)\r\n\r\n    def get_postings(self, term: str) -> List[str]:\r\n        return list(self.index.get(term, {}).keys())\r\n\r\nindex = InvertedIndex()\r\nindex.add_document(\"doc1\", \"RAG combines retrieval with generation\")\r\nindex.add_document(\"doc2\", \"Retrieval uses sparse and dense methods\")\r\nindex.add_document(\"doc3\", \"Generation is powered by LLMs\")\r\n\r\nprint(f\"DF('retrieval'): {index.get_df('retrieval')}\")\r\nprint(f\"Postings('retrieval'): {index.get_postings('retrieval')}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "522-tf-idf",
      children: "5.2.2 TF-IDF"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Term Frequency-Inverse Document Frequency weights terms by importance."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class TFIDF:\r\n    def __init__(self):\r\n        self.index = InvertedIndex()\r\n\r\n    def add_document(self, doc_id: str, text: str):\r\n        self.index.add_document(doc_id, text)\r\n\r\n    def tf_idf(self, term: str, doc_id: str) -> float:\r\n        tf = self.index.get_tf(term, doc_id)\r\n        if tf == 0:\r\n            return 0.0\r\n\r\n        df = self.index.get_df(term)\r\n        idf = math.log((self.index.total_docs + 1) / (df + 1)) + 1\r\n        return (1 + math.log(tf)) * idf\r\n\r\n    def retrieve(self, query: str, top_k: int = 5) -> List[RetrievalResult]:\r\n        query_terms = query.lower().split()\r\n        scores = defaultdict(float)\r\n\r\n        for doc_id in self.index.doc_lengths.keys():\r\n            for term in query_terms:\r\n                scores[doc_id] += self.tf_idf(term, doc_id)\r\n\r\n        sorted_docs = sorted(scores.items(), key=lambda x: x[1], reverse=True)\r\n        return [\r\n            RetrievalResult(doc_id, \"\", score, \"tf-idf\")\r\n            for doc_id, score in sorted_docs[:top_k]\r\n        ]\r\n\r\ntfidf = TFIDF()\r\ntfidf.add_document(\"doc1\", \"RAG combines retrieval with generation using LLMs\")\r\ntfidf.add_document(\"doc2\", \"Retrieval systems use BM25 and embedding search\")\r\nresults = tfidf.retrieve(\"retrieval methods\")\r\nfor r in results:\r\n    print(r)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "523-bm25",
      children: "5.2.3 BM25"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BM25 is the state-of-the-art sparse retrieval function. It improves on TF-IDF with saturation and length normalization."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BM25:\r\n    def __init__(self, k1: float = 1.5, b: float = 0.75):\r\n        self.k1 = k1\r\n        self.b = b\r\n        self.index = InvertedIndex()\r\n        self.avg_doc_length = 0\r\n\r\n    def add_document(self, doc_id: str, text: str):\r\n        self.index.add_document(doc_id, text)\r\n\r\n    def build(self):\r\n        if self.index.doc_lengths:\r\n            self.avg_doc_length = sum(self.index.doc_lengths.values()) / len(self.index.doc_lengths)\r\n\r\n    def score(self, query_terms: List[str], doc_id: str) -> float:\r\n        score = 0.0\r\n        doc_len = self.index.doc_lengths.get(doc_id, 0)\r\n\r\n        for term in query_terms:\r\n            tf = self.index.get_tf(term, doc_id)\r\n            if tf == 0:\r\n                continue\r\n\r\n            df = self.index.get_df(term)\r\n            idf = math.log((self.index.total_docs - df + 0.5) / (df + 0.5) + 1)\r\n\r\n            numerator = tf * (self.k1 + 1)\r\n            denominator = tf + self.k1 * (1 - self.b + self.b * (doc_len / self.avg_doc_length))\r\n            score += idf * (numerator / denominator)\r\n\r\n        return score\r\n\r\n    def retrieve(self, query: str, top_k: int = 5) -> List[RetrievalResult]:\r\n        query_terms = query.lower().split()\r\n        scores = {}\r\n\r\n        for doc_id in self.index.doc_lengths.keys():\r\n            s = self.score(query_terms, doc_id)\r\n            if s > 0:\r\n                scores[doc_id] = s\r\n\r\n        sorted_docs = sorted(scores.items(), key=lambda x: x[1], reverse=True)\r\n        return [\r\n            RetrievalResult(doc_id, \"\", score, \"bm25\")\r\n            for doc_id, score in sorted_docs[:top_k]\r\n        ]\r\n\r\nbm25 = BM25(k1=1.5, b=0.75)\r\nbm25.add_document(\"doc1\", \"RAG combines retrieval with generation using LLMs\")\r\nbm25.add_document(\"doc2\", \"Retrieval systems use keyword matching and embedding search\")\r\nbm25.add_document(\"doc3\", \"Generation models produce natural language text\")\r\nbm25.build()\r\n\r\nresults = bm25.retrieve(\"how does retrieval work\")\r\nfor r in results:\r\n    print(r)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "524-bm25-variants",
      children: "5.2.4 BM25 Variants"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BM25Plus(BM25):\r\n    def __init__(self, k1: float = 1.5, b: float = 0.75, delta: float = 1.0):\r\n        super().__init__(k1, b)\r\n        self.delta = delta\r\n\r\n    def score(self, query_terms: List[str], doc_id: str) -> float:\r\n        score = 0.0\r\n        doc_len = self.index.doc_lengths.get(doc_id, 0)\r\n\r\n        for term in query_terms:\r\n            tf = self.index.get_tf(term, doc_id)\r\n            df = self.index.get_df(term)\r\n            idf = math.log((self.index.total_docs + 1) / df) if df > 0 else 0\r\n\r\n            numerator = tf * (self.k1 + 1)\r\n            denominator = tf + self.k1 * (1 - self.b + self.b * (doc_len / self.avg_doc_length))\r\n            score += idf * (numerator / denominator + self.delta)\r\n\r\n        return score\r\n\r\nclass BM25L(BM25):\r\n    def __init__(self, k1: float = 1.5, b: float = 0.75, delta: float = 0.5):\r\n        super().__init__(k1, b)\r\n        self.delta = delta\r\n\r\n    def score(self, query_terms: List[str], doc_id: str) -> float:\r\n        score = 0.0\r\n        doc_len = self.index.doc_lengths.get(doc_id, 0)\r\n\r\n        for term in query_terms:\r\n            tf = self.index.get_tf(term, doc_id)\r\n            df = self.index.get_df(term)\r\n            idf = math.log((self.index.total_docs + 1) / (df + 0.5))\r\n\r\n            tf_prime = tf / (1 - self.b + self.b * (doc_len / self.avg_doc_length))\r\n            numerator = (tf_prime + self.delta) * (self.k1 + 1)\r\n            denominator = (tf_prime + self.delta) + self.k1\r\n            score += idf * (numerator / denominator)\r\n\r\n        return score\r\n\r\nfor name, model in [(\"BM25\", bm25), (\"BM25+\", BM25Plus()), (\"BM25L\", BM25L())]:\r\n    results = model.retrieve(\"retrieval systems\")\r\n    print(f\"{name}: {[r.document_id for r in results]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "53-dense-retrieval",
      children: "5.3 Dense Retrieval"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "531-embedding-based-search",
      children: "5.3.1 Embedding-Based Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DenseRetriever:\r\n    def __init__(self, dimension: int = 384):\r\n        self.dimension = dimension\r\n        self.documents: List[str] = []\r\n        self.doc_ids: List[str] = []\r\n        self.embeddings: List[np.ndarray] = []\r\n\r\n    def add_document(self, doc_id: str, text: str, embedding_fn):\r\n        self.documents.append(text)\r\n        self.doc_ids.append(doc_id)\r\n        emb = embedding_fn(text)\r\n        self.embeddings.append(emb / np.linalg.norm(emb))\r\n\r\n    def retrieve(self, query: str, embedding_fn, top_k: int = 5) -> List[RetrievalResult]:\r\n        query_emb = embedding_fn(query)\r\n        query_emb = query_emb / np.linalg.norm(query_emb)\r\n\r\n        similarities = []\r\n        for i, doc_emb in enumerate(self.embeddings):\r\n            sim = float(np.dot(query_emb, doc_emb))\r\n            similarities.append((i, sim))\r\n\r\n        similarities.sort(key=lambda x: x[1], reverse=True)\r\n        return [\r\n            RetrievalResult(\r\n                self.doc_ids[idx],\r\n                self.documents[idx][:100],\r\n                score,\r\n                \"dense\",\r\n            )\r\n            for idx, score in similarities[:top_k]\r\n        ]\r\n\r\ndef mock_embedder(text: str) -> np.ndarray:\r\n    rng = np.random.RandomState(hash(text) % (2**31))\r\n    vec = rng.randn(384)\r\n    return vec / np.linalg.norm(vec)\r\n\r\ndense = DenseRetriever()\r\ndense.add_document(\"doc1\", \"RAG combines retrieval and generation\", mock_embedder)\r\ndense.add_document(\"doc2\", \"Embedding search uses semantic similarity\", mock_embedder)\r\nresults = dense.retrieve(\"semantic search\", mock_embedder)\r\nfor r in results:\r\n    print(r)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "532-bi-encoder-vs-cross-encoder",
      children: "5.3.2 Bi-Encoder vs Cross-Encoder"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BiEncoder:\r\n    \"\"\"Encodes query and document independently.\"\"\"\r\n    def encode_query(self, query: str) -> np.ndarray:\r\n        return mock_embedder(query)\r\n\r\n    def encode_doc(self, doc: str) -> np.ndarray:\r\n        return mock_embedder(doc)\r\n\r\nclass CrossEncoder:\r\n    \"\"\"Encodes query and document together for more accurate but slower scoring.\"\"\"\r\n    def score(self, query: str, document: str) -> float:\r\n        combined = f\"{query} [SEP] {document}\"\r\n        emb = mock_embedder(combined)\r\n        return float(emb[0])  # Simulated relevance score\r\n\r\nclass CascadeRetriever:\r\n    def __init__(self, bi_encoder: BiEncoder, cross_encoder: CrossEncoder):\r\n        self.bi = bi_encoder\r\n        self.cross = cross_encoder\r\n\r\n    def retrieve(self, query: str, documents: List[str], top_k: int = 5) -> List[tuple]:\r\n        # Stage 1: Fast bi-encoder retrieval\r\n        query_emb = self.bi.encode_query(query)\r\n        candidates = []\r\n        for doc in documents:\r\n            doc_emb = self.bi.encode_doc(doc)\r\n            sim = float(np.dot(query_emb, doc_emb))\r\n            candidates.append((doc, sim))\r\n\r\n        candidates.sort(key=lambda x: x[1], reverse=True)\r\n        top_candidates = candidates[:top_k * 2]\r\n\r\n        # Stage 2: Accurate cross-encoder reranking\r\n        reranked = []\r\n        for doc, _ in top_candidates:\r\n            score = self.cross.score(query, doc)\r\n            reranked.append((doc, score))\r\n\r\n        reranked.sort(key=lambda x: x[1], reverse=True)\r\n        return reranked[:top_k]\r\n\r\nbi = BiEncoder()\r\ncross = CrossEncoder()\r\ncascade = CascadeRetriever(bi, cross)\r\ndocs = [\"RAG combines retrieval\", \"Dense retrieval uses embeddings\"]\r\nresult = cascade.retrieve(\"retrieval methods\", docs)\r\nfor doc, score in result:\r\n    print(f\"Cascade: {doc[:60]} -> {score:.3f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "533-late-interaction-colbert",
      children: "5.3.3 Late Interaction (ColBERT)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class LateInteractionRetriever:\r\n    \"\"\"ColBERT-style: encode tokens, compare at token level, sum max sims.\"\"\"\r\n    def encode(self, text: str) -> np.ndarray:\r\n        # Simulate token-level embeddings: (num_tokens, dim)\r\n        rng = np.random.RandomState(hash(text) % (2**31))\r\n        num_tokens = max(3, len(text) // 5)\r\n        tokens = rng.randn(num_tokens, 128)\r\n        return tokens / np.linalg.norm(tokens, axis=1, keepdims=True)\r\n\r\n    def maxsim(self, query_tokens: np.ndarray, doc_tokens: np.ndarray) -> float:\r\n        # For each query token, find max similarity with any doc token\r\n        sim_matrix = np.dot(query_tokens, doc_tokens.T)\r\n        max_scores = np.max(sim_matrix, axis=1)\r\n        return float(np.mean(max_scores))\r\n\r\n    def retrieve(self, query: str, documents: List[str], top_k: int = 3) -> List[tuple]:\r\n        query_tokens = self.encode(query)\r\n        results = []\r\n        for doc in documents:\r\n            doc_tokens = self.encode(doc)\r\n            score = self.maxsim(query_tokens, doc_tokens)\r\n            results.append((doc, score))\r\n\r\n        results.sort(key=lambda x: x[1], reverse=True)\r\n        return results[:top_k]\r\n\r\nlate = LateInteractionRetriever()\r\ndocs = [\"RAG combines retrieval and generation\", \"Embedding search is fast\"]\r\nfor doc, score in late.retrieve(\"retrieval generation\", docs):\r\n    print(f\"ColBERT: {doc[:60]} -> {score:.3f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "54-hybrid-retrieval",
      children: "5.4 Hybrid Retrieval"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "541-reciprocal-rank-fusion-rrf",
      children: "5.4.1 Reciprocal Rank Fusion (RRF)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RRF combines multiple ranked lists by their reciprocal ranks."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def reciprocal_rank_fusion(\r\n    rankings: List[List[RetrievalResult]],\r\n    k: int = 60,\r\n    top_n: int = 10,\r\n) -> List[RetrievalResult]:\r\n    scores = defaultdict(float)\r\n\r\n    for system_rankings in rankings:\r\n        for rank, result in enumerate(system_rankings, 1):\r\n            scores[result.document_id] += 1.0 / (k + rank)\r\n\r\n    sorted_docs = sorted(scores.items(), key=lambda x: x[1], reverse=True)\r\n    return [\r\n        RetrievalResult(doc_id, \"\", score, \"hybrid-rrf\")\r\n        for doc_id, score in sorted_docs[:top_n]\r\n    ]\r\n\r\nsparse_results = [\r\n    RetrievalResult(\"doc1\", \"\", 0.9, \"bm25\"),\r\n    RetrievalResult(\"doc2\", \"\", 0.8, \"bm25\"),\r\n    RetrievalResult(\"doc3\", \"\", 0.7, \"bm25\"),\r\n]\r\ndense_results = [\r\n    RetrievalResult(\"doc2\", \"\", 0.95, \"dense\"),\r\n    RetrievalResult(\"doc1\", \"\", 0.85, \"dense\"),\r\n    RetrievalResult(\"doc4\", \"\", 0.80, \"dense\"),\r\n]\r\n\r\nhybrid = reciprocal_rank_fusion([sparse_results, dense_results], k=60, top_n=3)\r\nfor r in hybrid:\r\n    print(r)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "542-weighted-score-fusion",
      children: "5.4.2 Weighted Score Fusion"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class WeightedFusion:\r\n    def __init__(self, sparse_weight: float = 0.3, dense_weight: float = 0.7):\r\n        self.sparse_weight = sparse_weight\r\n        self.dense_weight = dense_weight\r\n\r\n    def normalize_scores(\r\n        self, results: List[RetrievalResult]\r\n    ) -> Dict[str, float]:\r\n        if not results:\r\n            return {}\r\n        scores = [r.score for r in results]\r\n        min_s, max_s = min(scores), max(scores)\r\n        range_s = max_s - min_s if max_s > min_s else 1.0\r\n        return {r.document_id: (r.score - min_s) / range_s for r in results}\r\n\r\n    def fuse(\r\n        self,\r\n        sparse: List[RetrievalResult],\r\n        dense: List[RetrievalResult],\r\n        top_k: int = 10,\r\n    ) -> List[RetrievalResult]:\r\n        sparse_norm = self.normalize_scores(sparse)\r\n        dense_norm = self.normalize_scores(dense)\r\n\r\n        combined = defaultdict(float)\r\n        for doc_id, score in sparse_norm.items():\r\n            combined[doc_id] += score * self.sparse_weight\r\n        for doc_id, score in dense_norm.items():\r\n            combined[doc_id] += score * self.dense_weight\r\n\r\n        sorted_docs = sorted(combined.items(), key=lambda x: x[1], reverse=True)\r\n        return [\r\n            RetrievalResult(doc_id, \"\", score, \"hybrid-weighted\")\r\n            for doc_id, score in sorted_docs[:top_k]\r\n        ]\r\n\r\nfusion = WeightedFusion(sparse_weight=0.3, dense_weight=0.7)\r\nhybrid_weighted = fusion.fuse(sparse_results, dense_results)\r\nfor r in hybrid_weighted:\r\n    print(r)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "543-learning-to-rank",
      children: "5.4.3 Learning to Rank"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class LearningToRank:\r\n    def __init__(self):\r\n        self.feature_fns = []\r\n\r\n    def add_feature(self, name: str, fn):\r\n        self.feature_fns.append((name, fn))\r\n\r\n    def rank(self, query: str, candidates: List[str]) -> List[tuple]:\r\n        features = []\r\n        for doc in candidates:\r\n            doc_features = {}\r\n            for name, fn in self.feature_fns:\r\n                doc_features[name] = fn(query, doc)\r\n            features.append(doc_features)\r\n\r\n        # Simple linear combination for demonstration\r\n        scores = []\r\n        for doc, feats in zip(candidates, features):\r\n            score = sum(feats.values())\r\n            scores.append((doc, score))\r\n\r\n        scores.sort(key=lambda x: x[1], reverse=True)\r\n        return scores\r\n\r\ndef bm25_feature(query: str, doc: str) -> float:\r\n    overlap = len(set(query.lower().split()) & set(doc.lower().split()))\r\n    return overlap / max(len(query.split()), 1)\r\n\r\ndef length_feature(query: str, doc: str) -> float:\r\n    return min(len(doc) / 500, 1.0)\r\n\r\nltr = LearningToRank()\r\nltr.add_feature(\"bm25_score\", bm25_feature)\r\nltr.add_feature(\"doc_length\", length_feature)\r\ndocs = [\"Short doc\", \"A very long document with many words for testing purposes\"]\r\nranking = ltr.rank(\"testing document\", docs)\r\nfor doc, score in ranking:\r\n    print(f\"LTR: {doc[:60]} -> {score:.3f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "55-query-expansion",
      children: "5.5 Query Expansion"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "551-synonym-expansion",
      children: "5.5.1 Synonym Expansion"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class QueryExpander:\r\n    def __init__(self):\r\n        self.synonyms = {\r\n            \"retrieval\": [\"search\", \"fetch\", \"recall\", \"access\"],\r\n            \"generation\": [\"creation\", \"production\", \"synthesis\"],\r\n            \"embedding\": [\"vector\", \"encoding\", \"representation\"],\r\n            \"LLM\": [\"language model\", \"transformer\", \"neural network\"],\r\n        }\r\n\r\n    def expand(self, query: str, max_terms: int = 3) -> List[str]:\r\n        expansions = [query]\r\n        terms = query.lower().split()\r\n\r\n        expanded_terms = []\r\n        for term in terms:\r\n            syns = self.synonyms.get(term, [])\r\n            expanded_terms.append([term] + syns[:max_terms])\r\n\r\n        # Generate combinations\r\n        from itertools import product\r\n        for combo in product(*expanded_terms):\r\n            expanded_query = \" \".join(combo)\r\n            if expanded_query != query:\r\n                expansions.append(expanded_query)\r\n\r\n        return expansions[:5]\r\n\r\nexpander = QueryExpander()\r\nprint(f\"Original: 'retrieval generation'\")\r\nfor i, eq in enumerate(expander.expand(\"retrieval generation\", 2)):\r\n    print(f\"  {i}: {eq}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "552-hyde-hypothetical-document-embedding",
      children: "5.5.2 HyDE (Hypothetical Document Embedding)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generate a hypothetical document from the query, then retrieve using that document's embedding."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class HyDERetriever:\r\n    def __init__(self, dense_retriever: DenseRetriever, generator_fn):\r\n        self.dense = dense_retriever\r\n        self.generate = generator_fn\r\n\r\n    def retrieve(self, query: str, top_k: int = 5) -> List[RetrievalResult]:\r\n        hypothetical_doc = self.generate(\r\n            f\"Write a paragraph that answers: {query}\"\r\n        )\r\n        hyde_emb = mock_embedder(hypothetical_doc)\r\n\r\n        # Search using hypothetical document embedding\r\n        similarities = []\r\n        for i, doc_emb in enumerate(self.dense.embeddings):\r\n            sim = float(np.dot(hyde_emb, doc_emb))\r\n            similarities.append((i, sim))\r\n\r\n        similarities.sort(key=lambda x: x[1], reverse=True)\r\n        return [\r\n            RetrievalResult(self.dense.doc_ids[idx], \"\", score, \"hyde\")\r\n            for idx, score in similarities[:top_k]\r\n        ]\r\n\r\ndef mock_generator(prompt: str) -> str:\r\n    return \"A hypothetical document about retrieval augmented generation systems.\"\r\n\r\nhyde = HyDERetriever(dense, mock_generator)\r\nresults = hyde.retrieve(\"RAG systems\")\r\nprint(f\"HyDE results: {[r.document_id for r in results]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "553-multi-query-retrieval",
      children: "5.5.3 Multi-Query Retrieval"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MultiQueryRetriever:\r\n    def __init__(self, retriever, query_generator):\r\n        self.retriever = retriever\r\n        self.generate = query_generator\r\n\r\n    def retrieve(self, query: str, num_queries: int = 3, top_k: int = 5) -> List[RetrievalResult]:\r\n        variations = self.generate(query, num_queries)\r\n        all_results = []\r\n\r\n        for q in [query] + variations:\r\n            results = self.retriever.retrieve(q, mock_embedder, top_k=top_k * 2)\r\n            all_results.append(results)\r\n\r\n        return reciprocal_rank_fusion(all_results, k=60, top_n=top_k)\r\n\r\ndef mock_query_generator(query: str, n: int) -> List[str]:\r\n    return [\r\n        query.lower(),\r\n        f\"information about {query.lower()}\",\r\n        f\"explain {query.lower()} in simple terms\",\r\n    ]\r\n\r\nmulti = MultiQueryRetriever(dense, mock_query_generator)\r\nresults = multi.retrieve(\"RAG retrieval\", num_queries=3)\r\nfor r in results:\r\n    print(r)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "56-metadata-retrieval",
      children: "5.6 Metadata Retrieval"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "561-filtered-retrieval",
      children: "5.6.1 Filtered Retrieval"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class FilteredRetriever:\r\n    def __init__(self, base_retriever):\r\n        self.base = base_retriever\r\n        self.metadata: Dict[str, Dict] = {}\r\n\r\n    def add_document(self, doc_id: str, text: str, metadata: Dict, embedding_fn):\r\n        self.base.add_document(doc_id, text, embedding_fn)\r\n        self.metadata[doc_id] = metadata\r\n\r\n    def retrieve(\r\n        self,\r\n        query: str,\r\n        embedding_fn,\r\n        filters: Dict[str, Any] = None,\r\n        top_k: int = 5,\r\n    ) -> List[RetrievalResult]:\r\n        results = self.base.retrieve(query, embedding_fn, top_k=top_k * 3)\r\n\r\n        if filters:\r\n            filtered = []\r\n            for r in results:\r\n                meta = self.metadata.get(r.document_id, {})\r\n                match = all(\r\n                    meta.get(key) == value for key, value in filters.items()\r\n                )\r\n                if match:\r\n                    filtered.append(r)\r\n            return filtered[:top_k]\r\n\r\n        return results[:top_k]\r\n\r\nfiltered = FilteredRetriever(dense)\r\nfiltered.add_document(\"doc1\", \"RAG paper 2023\", {\"year\": 2023, \"type\": \"paper\"}, mock_embedder)\r\nfiltered.add_document(\"doc2\", \"RAG tutorial 2024\", {\"year\": 2024, \"type\": \"tutorial\"}, mock_embedder)\r\n\r\nresults = filtered.retrieve(\"RAG\", mock_embedder, filters={\"type\": \"paper\"})\r\nfor r in results:\r\n    print(f\"Filtered: {r.document_id}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "562-boosting",
      children: "5.6.2 Boosting"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BoostedRetriever:\r\n    def __init__(self, base_retriever):\r\n        self.base = base_retriever\r\n        self.boosts: Dict[str, float] = {}  # doc_id -> boost factor\r\n\r\n    def set_boost(self, doc_id: str, factor: float):\r\n        self.boosts[doc_id] = factor\r\n\r\n    def retrieve(self, query: str, embedding_fn, top_k: int = 5) -> List[RetrievalResult]:\r\n        results = self.base.retrieve(query, embedding_fn, top_k=top_k * 2)\r\n        boosted = []\r\n        for r in results:\r\n            boost = self.boosts.get(r.document_id, 1.0)\r\n            boosted.append(RetrievalResult(\r\n                r.document_id, r.text, r.score * boost, \"boosted\"\r\n            ))\r\n\r\n        boosted.sort(key=lambda x: x.score, reverse=True)\r\n        return boosted[:top_k]\r\n\r\nboosted = BoostedRetriever(bm25)\r\nboosted.set_boost(\"doc1\", 1.5)\r\n\r\n## Results will favor doc1 score\r\nprint(\"Boosted retriever ready\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "563-faceted-search",
      children: "5.6.3 Faceted Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class FacetedRetriever:\r\n    def __init__(self, documents: List[Dict]):\r\n        self.documents = documents\r\n        self.facets: Dict[str, Set[Any]] = defaultdict(set)\r\n\r\n        for doc in documents:\r\n            for key, value in doc.get(\"metadata\", {}).items():\r\n                self.facets[key].add(value)\r\n\r\n    def get_facets(self) -> Dict[str, List[Any]]:\r\n        return {k: list(v) for k, v in self.facets.items()}\r\n\r\n    def retrieve(\r\n        self,\r\n        query: str,\r\n        selected_facets: Dict[str, Any] = None,\r\n    ) -> List[Dict]:\r\n        results = []\r\n\r\n        for doc in self.documents:\r\n            text = doc.get(\"text\", \"\")\r\n            query_terms = set(query.lower().split())\r\n            doc_terms = set(text.lower().split())\r\n            relevance = len(query_terms & doc_terms)\r\n\r\n            if relevance > 0:\r\n                match = True\r\n                if selected_facets:\r\n                    meta = doc.get(\"metadata\", {})\r\n                    match = all(\r\n                        meta.get(key) == value\r\n                        for key, value in selected_facets.items()\r\n                    )\r\n                if match:\r\n                    results.append((doc, relevance))\r\n\r\n        results.sort(key=lambda x: x[1], reverse=True)\r\n        return [r[0] for r in results]\r\n\r\nfaceted_docs = [\r\n    {\"text\": \"RAG paper\", \"metadata\": {\"year\": 2023, \"type\": \"paper\"}},\r\n    {\"text\": \"RAG tutorial\", \"metadata\": {\"year\": 2024, \"type\": \"tutorial\"}},\r\n]\r\nfaceted = FacetedRetriever(faceted_docs)\r\nprint(f\"Available facets: {faceted.get_facets()}\")\r\nprint(f\"Faceted query: {len(faceted.retrieve('RAG', {'type': 'paper'}))} results\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Document retrieval in RAG encompasses three paradigms: sparse (BM25, TF-IDF) for exact keyword matching using inverted indexes, dense (embedding similarity, bi-encoders,.\r\nColBERT) for semantic matching, and hybrid fusion (RRF, weighted combination, learning-to-rank) for best overall performance. Query expansion techniques including synonym expansion,.\r\nHyDE (hypothetical document embeddings), and multi-query retrieval improve recall by diversifying the search surface. Metadata filtering and boosting refine results through attribute constraints and.\r\nrelevance adjustments. The choice of retrieval paradigm depends on document scale, vocabulary overlap, semantic requirements, and latency constraints."
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
            children: "Start with BM25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Surprisingly effective baseline; easy to implement and fast"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Add dense for semantic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dense retrieval handles synonyms and conceptual matching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid beats either alone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RRF fusion reliably outperforms individual sparse or dense"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cascade for efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bi-encoder first pass, cross-encoder rerank for accuracy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Expand queries carefully"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Too many expansion terms can introduce noise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use metadata filters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-filter before semantic search for better precision"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "rag05-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: How does BM25 work and what do the k1 and b parameters control?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BM25 computes a relevance score for each document given a query by summing over query terms. The k1 parameter controls term frequency saturation — with k1=0,.\nBM25 becomes pure IDF (no term frequency effect); with k1→∞, BM25 becomes raw term frequency. The b parameter controls document length normalization — with b=0,.\nno normalization; with b=1, full normalization. Typical defaults are k1=1.5, b=0.75. BM25 improves on TF-IDF by preventing a term from dominating when it appears many times (k1 saturation) and.\nby penalizing long documents that may contain query terms by chance (b normalization). Tune these parameters on your corpus for optimal retrieval."
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "def score(self, query_terms, doc_id):\n    for term in query_terms:\n        idf = log((N - df + 0.5) / (df + 0.5) + 1)\n        numerator = tf * (k1 + 1)\n        denominator = tf + k1 * (1 - b + b * doc_len / avg_doc_len)\n        score += idf * (numerator / denominator)"
          })
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
      "data-qid": "rag05-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: What is reciprocal rank fusion (RRF) and why does it work well for hybrid search?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RRF combines multiple ranked lists by assigning each document a score equal to the sum of 1/(k + rank) across all rankings,.\nwhere k is a constant (typically 60). It works well because it is rank-based rather than score-based — it doesn't require score normalization between different retrieval systems. This is crucial because BM25 scores (e.g.,.\n0-30) and cosine similarity scores (e.g., 0.5-0.95) are on completely different scales. RRF is robust to outliers and consistently outperforms individual sparse or.\ndense retrieval on recall@k. The k constant controls how much high rankings dominate — smaller k gives more weight to top-ranked items."
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
      "data-qid": "rag05-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: How does query expansion with HyDE (Hypothetical Document Embedding) improve retrieval?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HyDE generates a hypothetical document that answers the query (using an LLM), then uses that document's embedding for retrieval instead of the query embedding. The intuition is that a hypothetical answer lies closer in embedding space to real relevant documents than the original query does. For.\nexample, for the query \"How does backpropagation work?\", HyDE might generate \"Backpropagation computes gradients by applying the chain rule through the network layers...\" — this hypothetical document embedding will be closer to actual technical explanations of backpropagation than the short query embedding. HyDE particularly helps with short,.\nambiguous queries (under 5 words) and queries whose vocabulary differs from the target documents."
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
      "data-qid": "rag05-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: What is the cascade retriever architecture and when should you use it?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A cascade retriever uses a two-stage approach: a fast bi-encoder retrieves top-K candidates (e.g., top-100), then a slow but accurate cross-encoder reranks them to produce the final top-10. The bi-encoder stage pre-computes vector.\nembeddings for all documents, enabling sub-100ms search over millions of documents. The cross-encoder stage processes query-document pairs individually, taking 10-100ms per pair but.\nproviding much more accurate relevance scoring. Use cascades when latency budget allows 100-500ms for retrieval and you need the highest possible precision at top-k. Typical configuration: bi-encoder retrieves top-100 in 50ms,.\ncross-encoder reranks 100 candidates in 500ms (5ms each) for highly accurate top-10 results."
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
      "data-qid": "rag05-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How does ColBERT's late interaction work and why is it more efficient than cross-encoders?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ColBERT encodes query and document separately into token-level embeddings (like a bi-encoder), but scores relevance by computing the maximum similarity (MaxSim) between each query token and.\nall document tokens, then averaging. This late interaction captures fine-grained term matching without requiring query-document pairs to be processed together. It is more efficient than cross-encoders because document token embeddings can be pre-computed and.\nstored, and the MaxSim operation is a simple matrix multiplication. ColBERT typically achieves 90-95% of cross-encoder accuracy at 10-100x lower latency,.\nmaking it suitable for reranking 100-1000 candidates in real-time."
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
      "data-qid": "rag05-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How do you implement metadata boosting in document retrieval?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Metadata boosting applies a multiplicative factor to retrieval scores based on metadata attributes. For example, boost documents with source=\"wiki\" by 1.2x or.\ndocuments published in the last year by 1.5x. Implement this in a BoostedRetriever wrapper that retrieves top-K results, then multiplies each result's score by the document's boost factor.\n(default 1.0). Boosted scores may change the ranking order, so re-sort after applying boosts. Boosting is a soft signal — documents without the boost can still appear if their base score is high enough. Unlike hard filtering (which completely excludes documents),.\nboosting preserves recall while favoring preferred documents."
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
      "data-qid": "rag05-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: What is learning-to-rank and how does it apply to RAG retrieval?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Learning-to-rank (LTR) trains a model to combine multiple retrieval signals (BM25 score, cosine similarity, document freshness, page rank, etc.) into a single relevance score. Feature engineering extracts signals like query-document term overlap,.\nembedding similarity, document length, and metadata attributes. A ranking model (LambdaRank, XGBoost) is trained on relevance-judged query-document pairs. In RAG, LTR can fuse sparse and.\ndense scores with learned weights rather than fixed heuristics like RRF. LTR typically achieves 5-15% improvement over RRF fusion but requires a large training set of relevance annotations (1000+ query-document pairs). For.\nsmall collections, RRF fusion is usually sufficient."
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
      "data-qid": "rag05-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How does multi-query retrieval improve recall and what are the trade-offs?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Multi-query retrieval generates multiple paraphrased versions of the original query (using an LLM or rule-based thesaurus), retrieves documents for each variant,.\nand fuses the results using RRF. This improves recall because different query phrasings may match different documents — for example, \"car repair\",.\n\"automotive maintenance\", and \"fixing vehicles\" each retrieve different subsets. The trade-off is linear cost increase: N queries means N retrieval calls and.\nN times the embedding cost. Usually 3-5 query variants suffice. Multi-query works best for short, ambiguous queries where the user's exact phrasing may not match the document terminology."
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
      "data-qid": "rag05-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: How do you build an inverted index for sparse retrieval?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "An inverted index maps each unique term to the list of document IDs containing it, along with term frequency. Construction involves: tokenizing each document into terms,.\nrecording the term frequency per document, and merging into a dictionary where keys are terms and values are postings lists. For.\nBM25, also store each document's total term count for length normalization. Query processing involves: looking up each query term in the index,.\nmerging their postings lists, computing BM25 scores, and returning the top-K documents. The index can be compressed with techniques like variable-byte encoding or.\ngamma codes to reduce memory footprint."
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class InvertedIndex:\n    def add_document(self, doc_id, text):\n        for term, count in Counter(tokenize(text)).items():\n            self.index[term][doc_id] += count\n        self.doc_lengths[doc_id] = len(tokenize(text))"
          })
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
      "data-qid": "rag05-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How do you handle retrieval when there are no relevant documents for a query?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a ReQueryDecider that checks if retrieval scores are below a threshold (e.g., all below 0.3) and triggers a reformulation: rephrase the query,.\nexpand with synonyms, or use HyDE to generate a hypothetical document. If after N reformulations the scores remain low, implement a graceful fallback: return \"I don't have enough information to answer that question\" rather than forcing the LLM to answer without context. In the augmentation prompt,.\ninclude a no-context instruction: \"If the context does not contain enough information, say you don't know.\" Always log low-score queries for.\nanalysis — they may indicate gaps in your knowledge base."
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
      "data-qid": "rag-s5-quiz1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " What does BM25 improve over TF-IDF?"]
      }), "\nA. Support for phrase queries\nB. Term frequency saturation and document length normalization\nC. Embedding computation\nD. Metadata filtering\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s5-quiz2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " How does reciprocal rank fusion (RRF) combine multiple rankings?"]
      }), "\nA. Averages scores\nB. Uses reciprocal ranks to weight items\nC. Picks the highest score across rankings\nD. Multiplies probabilities\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s5-quiz3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " What distinguishes a cross-encoder from a bi-encoder?"]
      }), "\nA. Cross-encoder processes query and document together for higher accuracy\nB. Cross-encoder is faster than bi-encoder\nC. Bi-encoder produces better scores\nD. Cross-encoder uses binary representations\nAnswer: A\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s5-quiz4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " What is the main idea behind HyDE?"]
      }), "\nA. Use a hybrid of sparse and dense retrieval\nB. Generate a hypothetical document from the query for better retrieval\nC. Expand queries with hypernyms\nD. Filter results by document type\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s5-quiz5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " Which approach combines sparse and dense retrieval signals?"]
      }), "\nA. ColBERT\nB. HyDE\nC. Hybrid retrieval\nD. Query expansion\nAnswer: C\n"]
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
          children: "Not practicing enough problems to build pattern recognition1. Implement a complete retrieval system with BM25 (sparse) and cosine similarity (dense) on a set of 20 documents. For 5 test queries, compute precision@5 for each method and report which method wins per query."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build a hybrid retriever using Reciprocal Rank Fusion. Test with 3 sparse and 3 dense rankers, and show that RRF outperforms any single ranker on average precision."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement query expansion with synonym thesaurus. Compare retrieval recall@10 with and without expansion on 10 queries that contain domain-specific vocabulary."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a metadata-filtered retrieval system for a document collection with year, author, and category fields. Demonstrate filtering with (year >= 2023 AND category == \"research\") and show result counts."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a cascade retriever (bi-encoder followed by cross-encoder reranking). Measure the latency-accuracy tradeoff against a pure bi-encoder and a pure cross-encoder. Report recall@10 for each confi"
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
            children: "How does Document Retrieval behave differently at scale — memory, throughput, or precision-wise?"
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
        children: "Name the technique explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Document Retrieval\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Document Retrieval to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Document Retrieval (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Document Retrieval and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Document Retrieval-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic problem in this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Document Retrieval in production today?"
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
        }), " Document Retrieval builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Document Retrieval before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Document Retrieval is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Document Retrieval in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "The chapter that covers Document Retrieval is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 05 Document Retrieval is ___. — Answer: O(n) embedding, O(log n) ANN search"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 05 Document Retrieval is ___. — Answer: empty retrieval, hallucination, chunk boundary issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Document Retrieval issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Document Retrieval in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Document Retrieval that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
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
          }), " A new hire asks you to explain Document Retrieval in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Document Retrieval and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
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
            children: "Complete Medium exercises, explain Document Retrieval to someone else"
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
        children: "Always write a one-line example of Document Retrieval from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Document Retrieval when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Document Retrieval twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Document Retrieval snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Document Retrieval listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Document Retrieval to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Document Retrieval by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Document Retrieval to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
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
        children: "'Advanced RAG Techniques' by Andrei Lopatenko (Towards Data Science) Retrieval"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 12 — builds the foundation for 05 Document Retrieval"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 05 Document Retrieval with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 05 Document Retrieval fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 05 Document Retrieval"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 05 Document Retrieval"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 05 Document Retrieval?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 05 Document Retrieval?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 05 Document Retrieval asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 05 Document Retrieval?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document Retrieval is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Document Retrieval."
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
        children: "Document Retrieval emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Document Retrieval today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Document Retrieval — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Document Retrieval changes quickly; focus on fundamentals that remain stable."
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
            children: "05 Document Retrieval is like a GPS navigation system"
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
          }), " — this chapter contributes the Document Retrieval skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-05documentretrieval-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Document Retrieval in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "RAG (Retrieval-Augmented Generation) grounds LLM responses in external documents retrieved at query time, reducing hallucination by 40-80% vs zero-shot generation."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-05documentretrieval-flash2",
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
      "data-qid": "12ragvectordatabases-05documentretrieval-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Document Retrieval approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Retrieval: O(log n) with ANN index (HNSW/IVF). Embedding: O(n*d) where d=embedding dim. Generation: O(context_len^2) attention."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-05documentretrieval-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Document Retrieval NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "RAG is NOT the right choice when: (1) the knowledge base is tiny (<100 docs) and fits in context, (2) you need the model to learn new reasoning patterns (use fine-tuning), (3) sub-100ms latency is required."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-05documentretrieval-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Document Retrieval applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Document Retrieval (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Document Retrieval (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Document Retrieval-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Document Retrieval in production at scale"
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
        }), " — Facebook's fast similarity search library Retrieval"]
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
        }), ": Add structured logging at each stage of the 05 Document Retrieval pipeline to identify exactly where the failure occurs."]
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
        children: "Write a minimal working example of Document Retrieval."
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
        children: "Tell me about a time you debugged a Document Retrieval problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Document Retrieval is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_05_document_retrieval(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 05 Document Retrieval.\r\n\r\n    Key concepts: chunking, embedding, retrieval, reranking, generation\r\n    Complexity: O(n) embedding, O(log n) ANN search\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 05 Document Retrieval here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain Document Retrieval without notes"
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
        href: "/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/06-rag-pipeline-design",
        children: "RAG Pipeline Design"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document Retrieval, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Document Retrieval depends on input size and distribution — always benchmark for your own data."
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