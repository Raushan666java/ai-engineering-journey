"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[77298],{

/***/ 20068
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_12_rag_vector_databases_10_hybrid_search_and_reranking_md_e06_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-12-rag-vector-databases-10-hybrid-search-and-reranking-md-e06.json
const site_docs_courses_ai_engineering_placement_12_rag_vector_databases_10_hybrid_search_and_reranking_md_e06_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/rag-vector-databases/10-hybrid-search-and-reranking","title":"Hybrid Search and Reranking","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/12-rag-vector-databases/10-hybrid-search-and-reranking.md","sourceDirName":"courses/ai-engineering-placement/12-rag-vector-databases","slug":"/ai-engineering-placement/12-rag-vector-databases/10-hybrid-search-and-reranking","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/10-hybrid-search-and-reranking","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":155,"frontMatter":{"id":"10-hybrid-search-and-reranking","slug":"/ai-engineering-placement/12-rag-vector-databases/10-hybrid-search-and-reranking","title":"Hybrid Search and Reranking","sidebar_label":"Hybrid Search and Reranking","sidebar_position":155},"sidebar":"placementSidebar","previous":{"title":"Production RAG Systems","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/09-production-rag-systems"},"next":{"title":"Query Rewriting & Decomposition for RAG","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/11-query-rewriting-decomposition"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/12-rag-vector-databases/10-hybrid-search-and-reranking.md


const frontMatter = {
	id: '10-hybrid-search-and-reranking',
	slug: '/ai-engineering-placement/12-rag-vector-databases/10-hybrid-search-and-reranking',
	title: 'Hybrid Search and Reranking',
	sidebar_label: 'Hybrid Search and Reranking',
	sidebar_position: 155
};
const contentTitle = 'Hybrid Search and Reranking';

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
  "value": "10.1 Hybrid Search",
  "id": "101-hybrid-search",
  "level": 2
}, {
  "value": "Why Hybrid?",
  "id": "why-hybrid",
  "level": 3
}, {
  "value": "10.2 Score Normalization",
  "id": "102-score-normalization",
  "level": 2
}, {
  "value": "10.2.1 Min-Max Normalization",
  "id": "1021-min-max-normalization",
  "level": 3
}, {
  "value": "10.2.2 Z-Score Normalization",
  "id": "1022-z-score-normalization",
  "level": 3
}, {
  "value": "10.2.3 Quantile Normalization",
  "id": "1023-quantile-normalization",
  "level": 3
}, {
  "value": "10.2.4 Normalizer Pipeline",
  "id": "1024-normalizer-pipeline",
  "level": 3
}, {
  "value": "10.3 Fusion Strategies",
  "id": "103-fusion-strategies",
  "level": 2
}, {
  "value": "10.3.1 RRF Variants",
  "id": "1031-rrf-variants",
  "level": 3
}, {
  "value": "10.3.2 Borda Count",
  "id": "1032-borda-count",
  "level": 3
}, {
  "value": "10.3.3 Reciprocal Rank with Decay",
  "id": "1033-reciprocal-rank-with-decay",
  "level": 3
}, {
  "value": "10.3.4 Ensemble Ranking",
  "id": "1034-ensemble-ranking",
  "level": 3
}, {
  "value": "10.4 Cross-Encoder Reranking",
  "id": "104-cross-encoder-reranking",
  "level": 2
}, {
  "value": "10.4.1 Bi-Encoder First Pass",
  "id": "1041-bi-encoder-first-pass",
  "level": 3
}, {
  "value": "10.4.2 Two-Stage Reranker",
  "id": "1042-two-stage-reranker",
  "level": 3
}, {
  "value": "10.4.3 ColBERT-Style Late Interaction",
  "id": "1043-colbert-style-late-interaction",
  "level": 3
}, {
  "value": "10.5 LLM-Based Reranking",
  "id": "105-llm-based-reranking",
  "level": 2
}, {
  "value": "10.5.1 Pointwise Scoring",
  "id": "1051-pointwise-scoring",
  "level": 3
}, {
  "value": "10.5.2 Pairwise Comparison",
  "id": "1052-pairwise-comparison",
  "level": 3
}, {
  "value": "10.5.3 Listwise Reranking",
  "id": "1053-listwise-reranking",
  "level": 3
}, {
  "value": "10.5.4 Reranking Cascade",
  "id": "1054-reranking-cascade",
  "level": 3
}, {
  "value": "10.6 Production Optimization",
  "id": "106-production-optimization",
  "level": 2
}, {
  "value": "10.6.1 Caching for Reranking",
  "id": "1061-caching-for-reranking",
  "level": 3
}, {
  "value": "10.6.2 Candidate Pruning",
  "id": "1062-candidate-pruning",
  "level": 3
}, {
  "value": "10.6.3 Latency Budget Optimization",
  "id": "1063-latency-budget-optimization",
  "level": 3
}, {
  "value": "10.7 Evaluation",
  "id": "107-evaluation",
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
        id: "hybrid-search-and-reranking",
        children: "Hybrid Search and Reranking"
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
            children: "Understand hybrid search architecture combining sparse and dense retrieval"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement score normalization and fusion strategies (RRF, weighted, rank-based)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design reranking systems using cross-encoders and LLM-based scorers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply ColBERT-style late interaction for efficient reranking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimize hybrid search for production latency and accuracy trade-offs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval-Augmented Generation lets LLMs answer questions about your private data. Vector databases store embeddings for semantic search. This module covers the complete RAG pipeline from chunking to reranking."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic programming knowledge"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of data structures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Terms"
      }), ": Core vocabulary and concepts for this topic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition"
      }), ": Essential terms you must know for interviews and production work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding hybrid search and reranking is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how hybrid search and reranking works in practice."
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
            children: "10.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combining sparse and dense signals for robust retrieval"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Score Normalization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Min-max, z-score, quantile normalization across systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fusion Strategies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RRF, weighted linear, Borda count, rank-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-Encoder Reranking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bi-encoder first pass, cross-encoder refinement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LLM-Based Reranking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointwise, pairwise, listwise approaches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caching, pruning, latency budgets"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Query] --> B[Sparse Retriever]\n    A --> C[Dense Retriever]\n    B --> D[Score Normalizer]\n    C --> D\n    D --> E[Fusion Engine]\n    E --> F[Top-K Candidates]\n    F --> G[Reranker]\n    G --> H[Final Ranking]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "101-hybrid-search",
      children: "10.1 Hybrid Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hybrid search combines keyword-based (sparse) and semantic (dense) retrieval to overcome each method's limitations."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-hybrid",
      children: "Why Hybrid?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sparse"
      }), " excels at exact term matching, rare terms, and domains with specific vocabulary.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dense"
      }), " excels at semantic matching, synonyms, and conceptual queries.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hybrid"
      }), " captures both term-precision and semantic-recall."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import List, Dict, Tuple, Callable\nimport numpy as np\nfrom collections import defaultdict\nimport json\n\nclass HybridSearch:\n    def __init__(self, sparse_retriever, dense_retriever, fusion_strategy=\"rrf\"):\n        self.sparse = sparse_retriever\n        self.dense = dense_retriever\n        self.fusion_strategy = fusion_strategy\n\n    def search(self, query: str, top_k: int = 10) -> List[Dict]:\n        sparse_results = self.sparse.search(query, top_k * 2)\n        dense_results = self.dense.search(query, top_k * 2)\n\n        if self.fusion_strategy == \"rrf\":\n            return self._rrf_fuse(sparse_results, dense_results, top_k)\n        elif self.fusion_strategy == \"weighted\":\n            return self._weighted_fuse(sparse_results, dense_results, top_k)\n        elif self.fusion_strategy == \"rank\":\n            return self._rank_fuse(sparse_results, dense_results, top_k)\n        return sparse_results[:top_k]\n\n    def _rrf_fuse(self, sparse, dense, top_k: int, k_constant: int = 60) -> List[Dict]:\n        scores = defaultdict(float)\n        for rank, doc in enumerate(sparse, 1):\n            scores[doc[\"id\"]] += 1.0 / (k_constant + rank)\n        for rank, doc in enumerate(dense, 1):\n            scores[doc[\"id\"]] += 1.0 / (k_constant + rank)\n\n        sorted_docs = sorted(scores.items(), key=lambda x: x[1], reverse=True)\n        return [{\"id\": doc_id, \"score\": score, \"method\": \"rrf\"} for doc_id, score in sorted_docs[:top_k]]\n\n    def _weighted_fuse(self, sparse, dense, top_k: int, w_sparse: float = 0.3, w_dense: float = 0.7) -> List[Dict]:\n        sparse_scores = self._normalize_minmax({d[\"id\"]: d[\"score\"] for d in sparse})\n        dense_scores = self._normalize_minmax({d[\"id\"]: d[\"score\"] for d in dense})\n\n        combined = defaultdict(float)\n        for doc_id in set(list(sparse_scores.keys()) + list(dense_scores.keys())):\n            combined[doc_id] = sparse_scores.get(doc_id, 0) * w_sparse + dense_scores.get(doc_id, 0) * w_dense\n\n        sorted_docs = sorted(combined.items(), key=lambda x: x[1], reverse=True)\n        return [{\"id\": doc_id, \"score\": score, \"method\": \"weighted\"} for doc_id, score in sorted_docs[:top_k]]\n\n    def _rank_fuse(self, sparse, dense, top_k: int) -> List[Dict]:\n        scores = defaultdict(int)\n        for rank, doc in enumerate(sparse, 1):\n            scores[doc[\"id\"]] += len(sparse) - rank\n        for rank, doc in enumerate(dense, 1):\n            scores[doc[\"id\"]] += len(dense) - rank\n\n        sorted_docs = sorted(scores.items(), key=lambda x: x[1], reverse=True)\n        return [{\"id\": doc_id, \"score\": score, \"method\": \"rank\"} for doc_id, score in sorted_docs[:top_k]]\n\n    def _normalize_minmax(self, scores: Dict[str, float]) -> Dict[str, float]:\n        if not scores:\n            return {}\n        min_s = min(scores.values())\n        max_s = max(scores.values())\n        range_s = max_s - min_s if max_s > min_s else 1.0\n        return {k: (v - min_s) / range_s for k, v in scores.items()}\n\nclass MockSparseRetriever:\n    def search(self, query: str, top_k: int) -> List[Dict]:\n        return [{\"id\": f\"sparse-{i}\", \"score\": 1.0 - i * 0.1, \"text\": f\"Sparse result {i}\"} for i in range(top_k)]\n\nclass MockDenseRetriever:\n    def search(self, query: str, top_k: int) -> List[Dict]:\n        return [{\"id\": f\"dense-{i}\", \"score\": 0.95 - i * 0.05, \"text\": f\"Dense result {i}\"} for i in range(top_k)]\n\nhybrid = HybridSearch(MockSparseRetriever(), MockDenseRetriever(), \"rrf\")\nresults = hybrid.search(\"What is RAG?\", top_k=5)\nfor r in results:\n    print(f\"  {r['id']}: score={r['score']:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "102-score-normalization",
      children: "10.2 Score Normalization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Different retrieval systems produce scores in different ranges. Normalization enables fair comparison."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1021-min-max-normalization",
      children: "10.2.1 Min-Max Normalization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def minmax_normalize(scores: Dict[str, float]) -> Dict[str, float]:\n    if not scores:\n        return {}\n    min_s = min(scores.values())\n    max_s = max(scores.values())\n    range_s = max_s - min_s if max_s > min_s else 1.0\n    return {k: (v - min_s) / range_s for k, v in scores.items()}\n\nsparse_scores = {\"doc1\": 12.5, \"doc2\": 8.3, \"doc3\": 5.1}\ndense_scores = {\"doc1\": 0.92, \"doc4\": 0.87, \"doc5\": 0.85}\n\nprint(f\"Normalized sparse: {minmax_normalize(sparse_scores)}\")\nprint(f\"Normalized dense: {minmax_normalize(dense_scores)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1022-z-score-normalization",
      children: "10.2.2 Z-Score Normalization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def zscore_normalize(scores: Dict[str, float]) -> Dict[str, float]:\n    if len(scores) < 2:\n        return minmax_normalize(scores)\n    values = list(scores.values())\n    mean = np.mean(values)\n    std = np.std(values)\n    if std == 0:\n        return {k: 0.5 for k in scores}\n    return {k: (v - mean) / std for k, v in scores.items()}\n\nscores = {\"doc1\": 0.9, \"doc2\": 0.7, \"doc3\": 0.5, \"doc4\": 0.3, \"doc5\": 0.1}\nprint(f\"Z-score normalized: {zscore_normalize(scores)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1023-quantile-normalization",
      children: "10.2.3 Quantile Normalization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def quantile_normalize(scores: Dict[str, float]) -> Dict[str, float]:\n    items = sorted(scores.items(), key=lambda x: x[1])\n    n = len(items)\n    for rank, (key, _) in enumerate(items, 1):\n        scores[key] = rank / n\n    return scores\n\nprint(f\"Quantile normalized: {quantile_normalize(scores)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1024-normalizer-pipeline",
      children: "10.2.4 Normalizer Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ScoreNormalizer:\n    def __init__(self, method: str = \"minmax\"):\n        self.method = method\n\n    def normalize(self, scores: Dict[str, float]) -> Dict[str, float]:\n        if self.method == \"minmax\":\n            return minmax_normalize(scores)\n        elif self.method == \"zscore\":\n            return zscore_normalize(scores)\n        elif self.method == \"quantile\":\n            return quantile_normalize(scores)\n        elif self.method == \"softmax\":\n            return self._softmax_normalize(scores)\n        return scores\n\n    def _softmax_normalize(self, scores: Dict[str, float], temperature: float = 1.0) -> Dict[str, float]:\n        if not scores:\n            return {}\n        values = np.array(list(scores.values())) / temperature\n        exp = np.exp(values - np.max(values))\n        softmax = exp / exp.sum()\n        return dict(zip(scores.keys(), softmax))\n\n    def normalize_systems(self, systems_scores: List[Dict[str, float]]) -> List[Dict[str, float]]:\n        return [self.normalize(s) for s in systems_scores]\n\nnormalizer = ScoreNormalizer(\"softmax\")\nprint(normalizer.normalize(scores))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "103-fusion-strategies",
      children: "10.3 Fusion Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1031-rrf-variants",
      children: "10.3.1 RRF Variants"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RRFFusion:\n    def __init__(self, k_constant: int = 60):\n        self.k = k_constant\n\n    def fuse(self, rankings: List[List[Dict]]) -> List[Dict]:\n        scores = defaultdict(float)\n        for system_ranking in rankings:\n            for rank, doc in enumerate(system_ranking, 1):\n                scores[doc[\"id\"]] += 1.0 / (self.k + rank)\n\n        sorted_docs = sorted(scores.items(), key=lambda x: x[1], reverse=True)\n        return [{\"id\": doc_id, \"score\": score} for doc_id, score in sorted_docs]\n\n    def fuse_with_weights(self, rankings: List[Tuple[List[Dict], float]]) -> List[Dict]:\n        scores = defaultdict(float)\n        for system_ranking, weight in rankings:\n            for rank, doc in enumerate(system_ranking, 1):\n                scores[doc[\"id\"]] += weight / (self.k + rank)\n\n        sorted_docs = sorted(scores.items(), key=lambda x: x[1], reverse=True)\n        return [{\"id\": doc_id, \"score\": score} for doc_id, score in sorted_docs]\n\nrrf = RRFFusion(k=60)\nsparse_ranking = [{\"id\": \"a\"}, {\"id\": \"b\"}, {\"id\": \"c\"}]\ndense_ranking = [{\"id\": \"b\"}, {\"id\": \"d\"}, {\"id\": \"a\"}]\nresults = rrf.fuse([sparse_ranking, dense_ranking])\nfor r in results:\n    print(f\"RRF: {r['id']} -> {r['score']:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1032-borda-count",
      children: "10.3.2 Borda Count"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BordaCountFusion:\n    def fuse(self, rankings: List[List[Dict]]) -> List[Dict]:\n        scores = defaultdict(int)\n        n = len(rankings[0]) if rankings else 0\n\n        for ranking in rankings:\n            for rank, doc in enumerate(ranking, 1):\n                scores[doc[\"id\"]] += n - rank\n\n        sorted_docs = sorted(scores.items(), key=lambda x: x[1], reverse=True)\n        return [{\"id\": doc_id, \"score\": score / (n * len(rankings))} for doc_id, score in sorted_docs]\n\nborda = BordaCountFusion()\nresults = borda.fuse([sparse_ranking, dense_ranking])\nfor r in results:\n    print(f\"Borda: {r['id']} -> {r['score']:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1033-reciprocal-rank-with-decay",
      children: "10.3.3 Reciprocal Rank with Decay"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DecayedRRFusion:\n    def __init__(self, k: int = 60, decay_factor: float = 0.95):\n        self.k = k\n        self.decay = decay_factor\n\n    def fuse(self, rankings: List[List[Dict]]) -> List[Dict]:\n        scores = defaultdict(float)\n        for system_idx, ranking in enumerate(rankings):\n            weight = self.decay ** system_idx\n            for rank, doc in enumerate(ranking, 1):\n                scores[doc[\"id\"]] += weight / (self.k + rank)\n\n        sorted_docs = sorted(scores.items(), key=lambda x: x[1], reverse=True)\n        return [{\"id\": doc_id, \"score\": score} for doc_id, score in sorted_docs]\n\ndrrf = DecayedRRFusion(decay_factor=0.9)\nresults = drrf.fuse([sparse_ranking, dense_ranking, [{\"id\": \"c\"}, {\"id\": \"e\"}]])\nprint(f\"Decayed RRF: {[r['id'] for r in results]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1034-ensemble-ranking",
      children: "10.3.4 Ensemble Ranking"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class EnsembleRanker:\n    def __init__(self):\n        self.fusion_methods = {\n            \"rrf\": RRFFusion(),\n            \"borda\": BordaCountFusion(),\n            \"weighted_rrf\": RRFFusion(),\n        }\n\n    def fuse_all(self, rankings: List[List[Dict]], weights: List[float] = None) -> Dict[str, List[Dict]]:\n        results = {}\n        results[\"rrf\"] = self.fusion_methods[\"rrf\"].fuse(rankings)\n        results[\"borda\"] = self.fusion_methods[\"borda\"].fuse(rankings)\n\n        if weights:\n            weighted_rankings = list(zip(rankings, weights))\n            results[\"weighted_rrf\"] = self.fusion_methods[\"weighted_rrf\"].fuse_with_weights(weighted_rankings)\n\n        return results\n\n    def fused_score(self, results: Dict[str, List[Dict]], doc_id: str) -> float:\n        score = 0.0\n        for method, ranking in results.items():\n            for rank, doc in enumerate(ranking, 1):\n                if doc[\"id\"] == doc_id:\n                    score += 1.0 / rank\n        return score\n\nensemble = EnsembleRanker()\nresults = ensemble.fuse_all([sparse_ranking, dense_ranking], weights=[0.3, 0.7])\nfor method, ranking in results.items():\n    print(f\"{method}: {[r['id'] for r in ranking[:3]]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "104-cross-encoder-reranking",
      children: "10.4 Cross-Encoder Reranking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cross-encoders process query and document together for accurate relevance scoring."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1041-bi-encoder-first-pass",
      children: "10.4.1 Bi-Encoder First Pass"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BiEncoder:\n    def encode_query(self, query: str) -> np.ndarray:\n        return mock_embedder(query)\n\n    def encode_doc(self, doc: str) -> np.ndarray:\n        return mock_embedder(doc)\n\n    def score(self, query_emb: np.ndarray, doc_emb: np.ndarray) -> float:\n        return float(np.dot(query_emb, doc_emb))\n\nclass CrossEncoder:\n    def score(self, query: str, document: str) -> float:\n        combined = f\"{query} [SEP] {document}\"\n        emb = mock_embedder(combined)\n        return float(emb[0])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1042-two-stage-reranker",
      children: "10.4.2 Two-Stage Reranker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class TwoStageReranker:\n    def __init__(self, bi_encoder: BiEncoder, cross_encoder: CrossEncoder, top_k_stage1: int = 50):\n        self.bi = bi_encoder\n        self.cross = cross_encoder\n        self.top_k_stage1 = top_k_stage1\n\n    def rerank(self, query: str, documents: List[Dict]) -> List[Dict]:\n        query_emb = self.bi.encode_query(query)\n\n        stage1_scores = []\n        for doc in documents:\n            doc_emb = self.bi.encode_doc(doc[\"text\"])\n            score = self.bi.score(query_emb, doc_emb)\n            stage1_scores.append((doc, score))\n\n        stage1_scores.sort(key=lambda x: x[1], reverse=True)\n        candidates = [doc for doc, _ in stage1_scores[:self.top_k_stage1]]\n\n        stage2_scores = []\n        for doc in candidates:\n            score = self.cross.score(query, doc[\"text\"])\n            stage2_scores.append({**doc, \"score\": score})\n\n        stage2_scores.sort(key=lambda x: x[\"score\"], reverse=True)\n        return stage2_scores\n\nbi_enc = BiEncoder()\ncross_enc = CrossEncoder()\nreranker = TwoStageReranker(bi_enc, cross_enc, top_k_stage1=3)\n\ndocs = [{\"id\": \"1\", \"text\": \"RAG combines retrieval with generation\"}, {\"id\": \"2\", \"text\": \"Embeddings are vector representations\"}, {\"id\": \"3\", \"text\": \"BM25 is a keyword search algorithm\"}]\nresults = reranker.rerank(\"retrieval methods\", docs)\nfor r in results:\n    print(f\"Doc {r['id']}: score={r.get('score', 0):.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1043-colbert-style-late-interaction",
      children: "10.4.3 ColBERT-Style Late Interaction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ColBERTReranker:\n    def __init__(self):\n        self.dimension = 128\n\n    def encode(self, text: str) -> np.ndarray:\n        num_tokens = max(3, len(text) // 5)\n        rng = np.random.RandomState(hash(text) % (2**31))\n        return rng.randn(num_tokens, self.dimension)\n\n    def score(self, query_tokens: np.ndarray, doc_tokens: np.ndarray) -> float:\n        sim_matrix = np.dot(query_tokens, doc_tokens.T)\n        max_scores = np.max(sim_matrix, axis=1)\n        return float(np.mean(max_scores))\n\n    def rerank(self, query: str, documents: List[Dict]) -> List[Dict]:\n        query_embs = self.encode(query)\n        scored = []\n\n        for doc in documents:\n            doc_embs = self.encode(doc[\"text\"])\n            sim = self.score(query_embs, doc_embs)\n            scored.append({**doc, \"score\": sim})\n\n        scored.sort(key=lambda x: x[\"score\"], reverse=True)\n        return scored\n\ncolbert = ColBERTReranker()\nresults = colbert.rerank(\"retrieval methods\", docs)\nfor r in results:\n    print(f\"ColBERT Doc {r['id']}: score={r['score']:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "105-llm-based-reranking",
      children: "10.5 LLM-Based Reranking"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1051-pointwise-scoring",
      children: "10.5.1 Pointwise Scoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PointwiseLLMReranker:\n    def __init__(self, llm_fn):\n        self.llm = llm_fn\n\n    def score(self, query: str, document: str) -> int:\n        prompt = f\"\"\"Rate the relevance of this document to the query on a scale of 0-10.\n\nQuery: {query}\nDocument: {document}\n\nRelevance score (0-10):\"\"\"\n        response = self.llm(prompt)\n        try:\n            return int(response.strip())\n        except ValueError:\n            return 5\n\n    def rerank(self, query: str, documents: List[Dict]) -> List[Dict]:\n        for doc in documents:\n            doc[\"score\"] = self.score(query, doc[\"text\"])\n        documents.sort(key=lambda x: x[\"score\"], reverse=True)\n        return documents\n\ndef mock_llm(prompt: str) -> str:\n    if \"retrieval\" in prompt.lower() and \"RAG\" in prompt:\n        return \"9\"\n    return \"5\"\n\npointwise = PointwiseLLMReranker(mock_llm)\nresults = pointwise.rerank(\"retrieval methods\", docs)\nfor r in results:\n    print(f\"Pointwise Doc {r['id']}: score={r['score']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1052-pairwise-comparison",
      children: "10.5.2 Pairwise Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PairwiseLLMReranker:\n    def __init__(self, llm_fn):\n        self.llm = llm_fn\n\n    def compare(self, query: str, doc_a: str, doc_b: str) -> int:\n        prompt = f\"\"\"Which document is MORE relevant to the query?\n\nQuery: {query}\n\nDocument A: {doc_a}\nDocument B: {doc_b}\n\nRespond with only \"A\" or \"B\".\"\"\"\n        response = self.llm(prompt).strip().upper()\n        if response == \"A\":\n            return 1  # A wins\n        elif response == \"B\":\n            return -1  # B wins\n        return 0  # Tie\n\n    def rerank(self, query: str, documents: List[Dict]) -> List[Dict]:\n        from functools import cmp_to_key\n\n        def cmp_fn(a, b):\n            return -self.compare(query, a[\"text\"], b[\"text\"])\n\n        sorted_docs = sorted(documents, key=cmp_to_key(cmp_fn))\n        for i, doc in enumerate(sorted_docs):\n            doc[\"score\"] = len(sorted_docs) - i\n        return sorted_docs\n\ndef mock_pairwise_llm(prompt: str) -> str:\n    return \"A\"\n\npairwise = PairwiseLLMReranker(mock_pairwise_llm)\nresults = pairwise.rerank(\"retrieval methods\", docs)\nfor r in results:\n    print(f\"Pairwise Doc {r['id']}: score={r.get('score', 0)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1053-listwise-reranking",
      children: "10.5.3 Listwise Reranking"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ListwiseLLMReranker:\n    def __init__(self, llm_fn, max_docs: int = 10):\n        self.llm = llm_fn\n        self.max_docs = max_docs\n\n    def rerank(self, query: str, documents: List[Dict]) -> List[Dict]:\n        candidates = documents[:self.max_docs]\n        doc_texts = \"\\n\\n\".join([f\"[{i+1}] {d['text']}\" for i, d in enumerate(candidates)])\n\n        prompt = f\"\"\"Reorder the following documents by relevance to the query.\nOutput only the ordered document numbers as a comma-separated list.\n\nQuery: {query}\n\nDocuments:\n{doc_texts}\n\nOrdered document numbers:\"\"\"\n        response = self.llm(prompt)\n        indices = self._parse_indices(response)\n\n        reranked = []\n        for i, idx in enumerate(indices):\n            if 0 <= idx - 1 < len(candidates):\n                d = dict(candidates[idx - 1])\n                d[\"score\"] = len(candidates) - i\n                reranked.append(d)\n\n        return reranked\n\n    def _parse_indices(self, response: str) -> List[int]:\n        indices = []\n        for part in response.replace(\",\", \" \").split():\n            try:\n                indices.append(int(part.strip()))\n            except ValueError:\n                continue\n        return indices\n\ndef mock_listwise_llm(prompt: str) -> str:\n    return \"3, 1, 2\"\n\nlistwise = ListwiseLLMReranker(mock_listwise_llm, max_docs=10)\nresults = listwise.rerank(\"retrieval methods\", docs)\nfor r in results:\n    print(f\"Listwise Doc: score={r.get('score', 0)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1054-reranking-cascade",
      children: "10.5.4 Reranking Cascade"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class CascadeReranker:\n    def __init__(self, stages: List[Tuple[str, Callable, int]]):\n        self.stages = stages\n\n    def rerank(self, query: str, documents: List[Dict]) -> List[Dict]:\n        current = documents\n\n        for name, reranker_fn, keep_k in self.stages:\n            reranked = reranker_fn(query, current)\n            current = reranked[:keep_k]\n\n        return current\n\ncascade = CascadeReranker([\n    (\"bi_encoder\", lambda q, docs: sorted(docs, key=lambda d: bi_enc.score(bi_enc.encode_query(q), bi_enc.encode_doc(d[\"text\"])), reverse=True), 20),\n    (\"cross_encoder\", lambda q, docs: [{**d, \"score\": cross_enc.score(q, d[\"text\"])} for d in sorted(docs, key=lambda d: cross_enc.score(q, d[\"text\"]), reverse=True)], 5),\n])\nprint(\"Cascade reranker configured with 2 stages\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "106-production-optimization",
      children: "10.6 Production Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1061-caching-for-reranking",
      children: "10.6.1 Caching for Reranking"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RerankerCache:\n    def __init__(self, max_size: int = 1000):\n        self.cache = {}\n        self.max_size = max_size\n\n    def get_key(self, query: str, doc_id: str) -> str:\n        return f\"{query[:100]}:{doc_id}\"\n\n    def get(self, query: str, doc_id: str) -> Optional[float]:\n        return self.cache.get(self.get_key(query, doc_id))\n\n    def set(self, query: str, doc_id: str, score: float):\n        key = self.get_key(query, doc_id)\n        if len(self.cache) >= self.max_size:\n            self.cache.pop(next(iter(self.cache)))\n        self.cache[key] = score\n\n    def hit_rate(self) -> float:\n        return 0.0  # Track externally\n\nclass CachedReranker:\n    def __init__(self, base_reranker, cache: RerankerCache):\n        self.base = base_reranker\n        self.cache = cache\n\n    def rerank(self, query: str, documents: List[Dict]) -> List[Dict]:\n        for doc in documents:\n            cached = self.cache.get(query, doc[\"id\"])\n            if cached is not None:\n                doc[\"score\"] = cached\n            else:\n                # Reranker would compute score here\n                score = self.base.score(query, doc[\"text\"]) if hasattr(self.base, 'score') else 0.5\n                self.cache.set(query, doc[\"id\"], score)\n                doc[\"score\"] = score\n\n        documents.sort(key=lambda x: x[\"score\"], reverse=True)\n        return documents\n\nprint(\"Cached reranker ready\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1062-candidate-pruning",
      children: "10.6.2 Candidate Pruning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class CandidatePruner:\n    def __init__(self, max_candidates: int = 100, min_score: float = 0.1):\n        self.max_candidates = max_candidates\n        self.min_score = min_score\n\n    def prune(self, candidates: List[Dict]) -> List[Dict]:\n        filtered = [c for c in candidates if c.get(\"score\", 0) >= self.min_score]\n        filtered.sort(key=lambda x: x.get(\"score\", 0), reverse=True)\n        return filtered[:self.max_candidates]\n\n    def adaptive_prune(self, candidates: List[Dict], target_recall: float = 0.95) -> List[Dict]:\n        scores = sorted([c.get(\"score\", 0) for c in candidates], reverse=True)\n        if not scores:\n            return []\n        cutoff = int(len(scores) * target_recall)\n        threshold = scores[cutoff - 1] if cutoff > 0 else scores[0]\n        return [c for c in candidates if c.get(\"score\", 0) >= threshold]\n\npruner = CandidatePruner(max_candidates=50, min_score=0.2)\ndocs = [{\"id\": str(i), \"score\": i * 0.1} for i in range(10)]\npruned = pruner.prune(docs)\nprint(f\"Pruned {len(docs)} -> {len(pruned)} candidates\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1063-latency-budget-optimization",
      children: "10.6.3 Latency Budget Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class LatencyBudgetAllocator:\n    def __init__(self, total_budget_ms: int = 500):\n        self.total = total_budget_ms\n\n    def allocate(self, num_candidates: int) -> Dict[str, float]:\n        stage1_budget = self.total * 0.2  # 20% for first pass\n        stage2_budget = self.total * 0.6  # 60% for cross-encoder\n        stage3_budget = self.total * 0.2  # 20% for LLM\n\n        return {\n            \"stage1_retrieval\": stage1_budget,\n            \"stage2_cross_encoder\": stage2_budget,\n            \"stage3_llm_rerank\": stage3_budget,\n            \"per_document_stage2\": stage2_budget / max(num_candidates, 1),\n            \"per_document_stage3\": stage3_budget / max(min(num_candidates, 5), 1),\n        }\n\nbudget = LatencyBudgetAllocator(1000)\nallocation = budget.allocate(50)\nprint(f\"Per-doc cross-encoder budget: {allocation['per_document_stage2']:.1f}ms\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "107-evaluation",
      children: "10.7 Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class HybridRerankingEvaluation:\n    def __init__(self, queries: List[str], ground_truth: Dict[str, List[str]]):\n        self.queries = queries\n        self.ground_truth = ground_truth\n\n    def evaluate(self, search_fn, name: str) -> Dict:\n        mrrs = []\n        precisions_at_5 = []\n        recalls_at_5 = []\n\n        for query in self.queries:\n            results = search_fn(query, top_k=10)\n            relevant = self.ground_truth.get(query, [])\n\n            retrieved_ids = [r[\"id\"] for r in results]\n            retrieved_set = set(retrieved_ids)\n            rel_set = set(relevant)\n\n            mrr = self._reciprocal_rank(retrieved_ids, rel_set)\n            precision_5 = len(retrieved_set[:5] & rel_set) / 5\n            recall_5 = len(retrieved_set & rel_set) / len(rel_set) if rel_set else 0\n\n            mrrs.append(mrr)\n            precisions_at_5.append(precision_5)\n            recalls_at_5.append(recall_5)\n\n        return {\n            \"system\": name,\n            \"mrr\": round(np.mean(mrrs), 4),\n            \"precision@5\": round(np.mean(precisions_at_5), 4),\n            \"recall@5\": round(np.mean(recalls_at_5), 4),\n        }\n\n    def _reciprocal_rank(self, retrieved: list, relevant: set) -> float:\n        for rank, doc in enumerate(retrieved, 1):\n            if doc in relevant:\n                return 1.0 / rank\n        return 0.0\n\ndef hybrid_search_fn(query: str, top_k: int) -> list:\n    return hybrid.search(query, top_k)\n\neval_obj = HybridRerankingEvaluation(\n    queries=[\"What is RAG?\", \"How does retrieval work?\"],\n    ground_truth={\n        \"What is RAG?\": [\"doc1\", \"doc2\"],\n        \"How does retrieval work?\": [\"doc3\"],\n    },\n)\nprint(\"Hybrid + reranking evaluation ready\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hybrid search and reranking form the backbone of production-grade retrieval systems. Hybrid search combines sparse (BM25) and dense (embedding) signals through score normalization (min-max,.\nz-score, quantile) and fusion strategies (RRF, weighted, Borda count, rank-based). Reranking refines top candidates using cross-encoders for accurate query-document scoring, ColBERT-style late interaction for.\nefficient token-level matching, and LLM-based approaches (pointwise, pairwise, listwise). Production optimization includes caching reranker scores, pruning low-scoring candidates, and allocating latency budgets across stages. The combination of hybrid retrieval and.\ncross-encoder reranking typically yields 10-20% improvement in NDCG and MRR over single-method approaches."
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
            children: "Hybrid always beats single"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RRF fusion of sparse + dense outperforms either method alone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rerank with purpose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-encoders for accuracy, LLMs for complex relevance judgments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Normalize scores first"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Different retrievers produce incomparable scores — normalize before fusion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache reranker scores"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reranking the same query-doc pair is wasteful without caching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Budget your latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20% retrieval, 60% cross-encoder, 20% LLM rerank is a reasonable split"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use cascade architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cheap first pass, expensive refinement — maximize accuracy per ms"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag10-q1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " What is hybrid search and why is it important in modern RAG systems?"]
      }), "\nHybrid search combines two complementary retrieval strategies: keyword-based (sparse) search and semantic (dense) vector search. Keyword search excels at exact phrase matching,.\nhandling rare terms, and retrieving results based on lexical overlap — for example, finding a specific product code \"MB-203X\" that a vector.\nsearch might miss. Dense vector search captures semantic meaning and handles synonyms well, so a query like \"cheap laptops\" retrieves documents mentioning \"affordable notebooks.\" Hybrid search merges both result sets using techniques like reciprocal rank fusion (RRF) or.\nweighted scoring, producing robust results that outperform either method alone, especially in domains with technical jargon or mixed-length queries.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag10-q2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " Explain reciprocal rank fusion (RRF) and how it combines hybrid search results."]
      }), "\nRRF is a simple yet effective algorithm that merges ranked lists from multiple retrieval systems into a single unified ranking. Each document gets a score equal to the sum of `1 / (k + rank)` across all result sets,.\nwhere `k` is a constant (typically 60) that prevents a single high rank from dominating. For example, if a document ranks 1st in keyword search and.\n5th in vector search with k=60, its RRF score is `1/61 + 1/65 ≈ 0.0318`. The final ranking sorts documents by their total RRF score descending. RRF requires no training,.\nis robust to score distribution differences between systems, and works well even when one retrieval method significantly outperforms the other on a given query.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag10-q3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " What is the difference between bi-encoders and cross-encoders for reranking?"]
      }), "\nBi-encoders independently encode the query and each document into fixed vectors, then compute similarity with a dot product or cosine distance. This allows pre-computing document embeddings offline,.\nmaking bi-encoders extremely fast at retrieval time — they can search millions of documents in milliseconds using Approximate Nearest Neighbor (ANN) indexes. Cross-encoders jointly encode the query-document pair through a transformer,.\nproducing a single relevance score. They are much slower (O(n) forward passes for n documents) but significantly more accurate because the model can attend to interactions between query and.\ndocument tokens. In production, cross-encoders are typically used as a second-stage reranker over the top 20–100 candidates retrieved by a bi-encoder,.\ntrading recall for precision.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag10-q4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " How do you implement a two-stage retrieval pipeline with reranking?"]
      }), "\nA two-stage pipeline separates the retrieval and reranking concerns. Stage 1 uses a fast bi-encoder (dense or sparse) to retrieve a broad candidate set — typically top-100 or.\ntop-200 documents — from the full corpus. Stage 2 applies a more expensive but accurate cross-encoder model to rerank these candidates. The cross-encoder scores each query-document pair and.\nreturns a refined top-k (e.g., top-5). Implementation-wise, you might use Cohere's `embed-english-v3.0` as the bi-encoder and a fine-tuned `cross-encoder/ms-marco-MiniLM-L-6-v2` as the reranker. This architecture keeps sub-200ms total latency while improving nDCG@10 by 10–20% compared to bi-encoder-only retrieval,.\nespecially on ambiguous or multi-faceted queries.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag10-q5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " What is ColBERT and how does it improve over traditional bi-encoders?"]
      }), "\nColBERT (Contextualized Late Interaction over BERT) is a retrieval model that combines the efficiency of bi-encoders with the interaction richness of cross-encoders. It encodes the query and.\ndocument independently into sets of token-level embeddings. At scoring time, it uses a MaxSim operation: for each query token embedding, it finds the maximum cosine similarity against any document token embedding,.\nthen sums these maxima to produce a relevance score. This late interaction allows ColBERT to model fine-grained term matching — such as \"bank\" matching \"river bank\" vs \"savings bank\" — without the quadratic cost of full cross-encoder interaction. ColBERTv2 achieves BM25-level latency with near-cross-encoder accuracy,.\nmaking it a popular choice for production reranking tiers.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag10-q6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "6."
        }), " When would you choose sparse retrieval (BM25) over dense retrieval as your primary method?"]
      }), "\nSparse retrieval is preferable in domains where exact term matching is critical, such as legal document search, medical coding, or product catalog lookup with SKU codes. BM25 naturally handles rare terms,.\nout-of-vocabulary words, and multi-word phrases without any training data. It also performs well on short queries and when the document vocabulary has low overlap with the training distribution of dense models. Additionally,.\nBM25 indexes are cheap to build and update, requiring no GPU or embedding API calls. In many production systems, BM25 serves as the primary retriever for.\nexact-match use cases while a dense model runs in parallel or as a fallback for semantic queries.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag10-q7",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "7."
        }), " How do you evaluate the quality of a hybrid search system?"]
      }), "\nEvaluation of hybrid search combines both retrieval and downstream task metrics. For retrieval standalone, use precision@k, recall@k, mean average precision (MAP),.\nand nDCG@k comparing against a human-annotated relevance judgment set. For downstream quality, measure end-to-end RAG metrics like answer faithfulness, answer relevance,.\nand context precision using frameworks like RAGAS or TruLens. A critical A/B test compares the hybrid system against each individual method: measure whether hybrid improves recall@20 (typically 5–15% lift) and.\nwhether the reranker further improves precision@5. Always include latency and cost benchmarks, since cross-encoder reranking adds 50–200ms per query and increases compute cost proportionally.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag10-q8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "8."
        }), " Explain query rewriting and how it interacts with hybrid search."]
      }), "\nQuery rewriting transforms a user's raw query into one or more variants that are more likely to match relevant documents. Common strategies include expansion (adding synonyms or.\nrelated terms), decomposition (splitting compound queries), and spelling correction. In a hybrid search setting, rewritten queries are sent to both the sparse and.\ndense retrieval paths. For example, the query \"fast cheap laptop for coding\" might be rewritten to \"(fast OR powerful OR high-performance) cheap (laptop OR notebook) for.\n(coding OR programming OR development)\" for the BM25 path, while the dense path gets the original and rewritten forms as separate embedding lookups. The results are merged via RRF,.\nwhich helps compensate for the vocabulary mismatch between how users phrase queries and how documents are written.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag10-q9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "9."
        }), " How do you handle the trade-off between retrieval latency and accuracy in hybrid systems?"]
      }), "\nThe trade-off is managed through a tiered architecture. Tier 1 uses lightweight sparse retrieval (BM25 over an inverted index) with sub-10ms latency. Tier 2 adds dense vector.\nretrieval using an ANN index (HNSW or IVF) with 20–50ms latency. Tier 3 applies a cross-encoder reranker over the top 50 candidates at 100–200ms. The system can dynamically decide which tiers to invoke based on query complexity: simple lookups skip to tier 1 only,.\nambiguous queries go through all three tiers, and the system assigns a confidence score to decide whether reranking adds value. A timeout budget (e.g.,.\n500ms total) prevents any single tier from blocking the response. This cascading approach delivers sub-100ms responses for 70% of queries while reserving full accuracy for.\nthe hard cases.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag10-q10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "10."
        }), " Describe a real-world architecture for a production hybrid search system."]
      }), "\nA typical architecture begins with an API gateway that receives user queries and routes them to a query processing service. This service performs query rewriting,.\nthen fans out to two retrieval backends: an Elasticsearch cluster for BM25 sparse search and a Pinecone/Qdrant cluster for dense vector.\nsearch. Both backends return their top-100 results, which are merged by a fusion service running RRF. The top-30 fused results are sent to a cross-encoder reranker (deployed on GPU instances with ONNX Runtime or.\nTensorRT for low latency). The final top-5 results, along with the reranker scores and retrieved chunks, are passed to the LLM for.\nanswer generation. All services are containerized and orchestrated via Kubernetes with horizontal pod autoscaling based on QPS, and each tier has its own circuit breaker and.\ncache layer.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s10-quiz1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " What is the primary advantage of hybrid search over single-method search?"]
      }), "\nA. Lower latency\nB. Robustness — captures both exact match and semantic similarity\nC. Lower storage cost\nD. Simpler implementation\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s10-quiz2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " How does Reciprocal Rank Fusion (RRF) combine rankings?"]
      }), "\nA. By averaging scores\nB. By summing reciprocal ranks with a constant\nC. By counting wins in pairwise comparisons\nD. By multiplying probabilities\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s10-quiz3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " What distinguishes a cross-encoder from a bi-encoder for reranking?"]
      }), "\nA. Cross-encoder is faster\nB. Cross-encoder uses bidirectional attention between query and document\nC. Cross-encoder processes documents independently\nD. Cross-encoder doesn't need training\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s10-quiz4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " In ColBERT-style late interaction, how is the relevance score computed?"]
      }), "\nA. Cosine similarity of sentence embeddings\nB. Sum of max similarities between query tokens and document tokens\nC. Classification through a linear layer\nD. Weighted sum of sparse and dense scores\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s10-quiz5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " What is the purpose of candidate pruning before reranking?"]
      }), "\nA. To improve embedding quality\nB. To reduce reranking cost by eliminating low-scoring documents\nC. To add more candidates\nD. To change the fusion strategy\nAnswer: B\n"]
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
          children: "Not practicing enough problems to build pattern recognition1. Implement a hybrid search system combining BM25 and cosine similarity-based dense retrieval. Test on 30 queries and compare precision@10 against each individual method."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build a score normalization module that supports min-max, z-score, and quantile normalization. Demonstrate that normalization is necessary for fair fusion when sparse scores [0, 30] and dense scores [0.5, 0.95] have different scales."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a two-stage reranker (bi-encoder first pass with 50 candidates, cross-encoder second pass with 10 final results). Benchmark latency and NDCG@10 against a single-stage cross-encoder."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a ColBERT-style late interaction reranker and compare its accuracy vs a full cross-encoder on the same candidate set. Report speedup and accuracy difference."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a cascade reranker with 3 stages: bi-encoder (100 -> 20), cross-encoder (20 -> 5), LLM pairwise (5 -> final ranking). Evaluate MRR@10 and total latency on 10 test"
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
            children: "Explain the core idea of Hybrid Search and Reranking in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Hybrid Search and Reranking."
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
            children: "Describe a production bug caused by misunderstanding Hybrid Search and Reranking. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Hybrid Search and Reranking from 10 users to 10 million?"
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
            children: "Compare Hybrid Search and Reranking with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Hybrid Search and Reranking."
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
            children: "How does Hybrid Search and Reranking behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Hybrid Search and Reranking run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Hybrid Search and Reranking that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Hybrid Search and Reranking explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Hybrid Search and Reranking\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Hybrid Search and Reranking to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Hybrid Search and Reranking (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Hybrid Search and Reranking and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Hybrid Search and Reranking-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Hybrid Search and Reranking interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Hybrid Search and Reranking in production today?"
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
        }), " Hybrid Search and Reranking builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Hybrid Search and Reranking before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Hybrid Search and Reranking is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Hybrid Search and Reranking in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Hybrid Search and Reranking chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Hybrid Search and Reranking is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Hybrid Search and Reranking is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Hybrid Search and Reranking is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Hybrid Search and Reranking issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Hybrid Search and Reranking in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Hybrid Search and Reranking that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Hybrid Search and Reranking is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Hybrid Search and Reranking in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Hybrid Search and Reranking and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Hybrid Search and Reranking on an empty input?"
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
            children: "Complete Medium exercises, explain Hybrid Search and Reranking to someone else"
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
        children: "Always write a one-line example of Hybrid Search and Reranking from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Hybrid Search and Reranking when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Hybrid Search and Reranking twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Hybrid Search and Reranking snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Hybrid Search and Reranking listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Hybrid Search and Reranking to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Hybrid Search and Reranking by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Hybrid Search and Reranking to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Hybrid Search and Reranking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Hybrid Search and Reranking (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Hybrid Search and Reranking problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Hybrid Search and Reranking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Hybrid Search and Reranking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Hybrid Search and Reranking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Hybrid Search and Reranking fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Hybrid Search and Reranking is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Hybrid Search and Reranking is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Hybrid Search and Reranking, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Hybrid Search and Reranking asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hybrid Search and Reranking is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Hybrid Search and Reranking."
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
        children: "Hybrid Search and Reranking emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Hybrid Search and Reranking today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Hybrid Search and Reranking — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Hybrid Search and Reranking changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Hybrid Search and Reranking."
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
        children: "Hybrid Search and Reranking appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Hybrid Search and Reranking helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Hybrid Search and Reranking concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Hybrid Search and Reranking skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Hybrid Search and Reranking to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hybrid Search and Reranking is like a recipe"
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
        }), " — this chapter contributes the Hybrid Search and Reranking skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-10hybridsearchandreranking-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Hybrid Search and Reranking in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-10hybridsearchandreranking-flash2",
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
      "data-qid": "12ragvectordatabases-10hybridsearchandreranking-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Hybrid Search and Reranking approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-10hybridsearchandreranking-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Hybrid Search and Reranking NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-10hybridsearchandreranking-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Hybrid Search and Reranking applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Hybrid Search and Reranking (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Hybrid Search and Reranking (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Hybrid Search and Reranking-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Hybrid Search and Reranking in production at scale"
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
        children: "Testing: pytest for unit tests of Hybrid Search and Reranking code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Hybrid Search and Reranking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Hybrid Search and Reranking code."]
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
        }), " or your IDE's debugger to step through the Hybrid Search and Reranking example code."]
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
        children: "Explain Hybrid Search and Reranking in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Hybrid Search and Reranking."
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
        children: "Tell me about a time you debugged a Hybrid Search and Reranking problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Hybrid Search and Reranking is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Hybrid Search and Reranking."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Hybrid Search and Reranking logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Hybrid Search and Reranking without notes"
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
        }), ": a small team uses Hybrid Search and Reranking daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Hybrid Search and Reranking patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Hybrid Search and Reranking principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Hybrid Search and Reranking shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Hybrid Search and Reranking to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/11-query-rewriting-decomposition",
        children: "Query Rewriting & Decomposition for RAG"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hybrid Search and Reranking, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Hybrid Search and Reranking depends on input size and distribution — always benchmark for your own data."
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