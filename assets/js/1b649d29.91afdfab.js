"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[77428],{

/***/ 36163
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_agent_engineer_13_advanced_vector_search_md_1b6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-agent-engineer-13-advanced-vector-search-md-1b6.json
const site_docs_courses_ai_agent_engineer_13_advanced_vector_search_md_1b6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-agent-engineer/13-advanced-vector-search","title":"Chapter 13 — Advanced Vector Search & RAG","description":"Duration: 2 weeks, ~22 hours","source":"@site/docs/courses/ai-agent-engineer/13-advanced-vector-search.md","sourceDirName":"courses/ai-agent-engineer","slug":"/ai-agent-engineer/13-advanced-vector-search","permalink":"/ai-engineering-journey/ai-agent-engineer/13-advanced-vector-search","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"id":"13-advanced-vector-search","slug":"/ai-agent-engineer/13-advanced-vector-search","title":"Chapter 13 — Advanced Vector Search & RAG","sidebar_label":"Chapter 13 — Advanced Vector Search & RAG","sidebar_position":14},"sidebar":"course-ai-agent-engineer","previous":{"title":"Chapter 12 — AI Observability & Debugging","permalink":"/ai-engineering-journey/ai-agent-engineer/12-ai-observability-debugging"},"next":{"title":"Agentic AI — The Complete Book","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-agent-engineer/13-advanced-vector-search.md


const frontMatter = {
	id: '13-advanced-vector-search',
	slug: '/ai-agent-engineer/13-advanced-vector-search',
	title: 'Chapter 13 — Advanced Vector Search & RAG',
	sidebar_label: 'Chapter 13 — Advanced Vector Search & RAG',
	sidebar_position: 14
};
const contentTitle = 'Chapter 13 — Advanced Vector Search & RAG';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Topic Table",
  "id": "topic-table",
  "level": 2
}, {
  "value": "13.1 Hybrid Search",
  "id": "131-hybrid-search",
  "level": 2
}, {
  "value": "BM25 + Dense Vector + Sparse Vector",
  "id": "bm25--dense-vector--sparse-vector",
  "level": 3
}, {
  "value": "13.2 Multi-Vector Retrieval",
  "id": "132-multi-vector-retrieval",
  "level": 2
}, {
  "value": "ColBERT-Style Late Interaction",
  "id": "colbert-style-late-interaction",
  "level": 3
}, {
  "value": "13.3 Advanced Retrieval Strategies",
  "id": "133-advanced-retrieval-strategies",
  "level": 2
}, {
  "value": "HyDE (Hypothetical Document Embedding)",
  "id": "hyde-hypothetical-document-embedding",
  "level": 3
}, {
  "value": "13.4 Re-Ranking Deep-Dive",
  "id": "134-re-ranking-deep-dive",
  "level": 2
}, {
  "value": "Cross-Encoder Re-Ranker",
  "id": "cross-encoder-re-ranker",
  "level": 3
}, {
  "value": "13.5 HNSW Index Tuning",
  "id": "135-hnsw-index-tuning",
  "level": 2
}, {
  "value": "13.6 Metadata Filtering &amp; Hybrid Queries",
  "id": "136-metadata-filtering--hybrid-queries",
  "level": 2
}, {
  "value": "13.7 Vector Quantization",
  "id": "137-vector-quantization",
  "level": 2
}, {
  "value": "13.8 Multi-Modal RAG",
  "id": "138-multi-modal-rag",
  "level": 2
}, {
  "value": "13.9 Graph RAG",
  "id": "139-graph-rag",
  "level": 2
}, {
  "value": "13.10 Streaming Ingestion &amp; Real-Time Updates",
  "id": "1310-streaming-ingestion--real-time-updates",
  "level": 2
}, {
  "value": "13.11 Vector DB Comparison",
  "id": "1311-vector-db-comparison",
  "level": 2
}, {
  "value": "Migration Strategy",
  "id": "migration-strategy",
  "level": 3
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "chapter-13--advanced-vector-search--rag",
        children: "Chapter 13 — Advanced Vector Search & RAG"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Duration:"
      }), " 2 weeks, ~22 hours\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Master advanced retrieval — hybrid search, multi-vector retrieval, re-ranking architectures, and production-scale vector database tuning. Move beyond basic cosine similarity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.section, {
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
        href: "../../assets/images/lessons/ai-agent-engineer/13-advanced-vector-search/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/ai-agent-engineer/13-advanced-vector-search/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/ai-agent-engineer/13-advanced-vector-search/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/ai-agent-engineer/13-advanced-vector-search/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/ai-agent-engineer/13-advanced-vector-search/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/ai-agent-engineer/13-advanced-vector-search/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "topic-table",
      children: "Topic Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Subtopic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hours"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Done checkpoint"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid search (dense + sparse + BM25)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement a hybrid search that combines 3 retrieval methods with RRF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-vector retrieval (ColBERT, late interaction)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain why multi-vector beats single-vector for fine-grained relevance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced retrieval strategies (HyDE, query rewriting, multi-query)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement query expansion that improves recall by 15% on your eval set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Re-ranking deep-dive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy a cross-encoder re-ranker and measure NDCG improvement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HNSW index tuning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tune HNSW parameters (M, efConstruction, efSearch) for your dataset"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metadata filtering & hybrid queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build a filtered search that combines vector distance with metadata constraints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vector quantization (PQ, scalar quantization)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement quantization to reduce memory by 75% with minimal accuracy loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-modal RAG (text + image + tables)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design a RAG pipeline that searches across text, images, and structured data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph RAG (knowledge graphs + vector search)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combine vector similarity with knowledge graph traversal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Streaming ingestion & real-time updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build a real-time ingestion pipeline that indexes documents within 5 seconds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vector DB comparison & migration strategies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare ChromaDB, Qdrant, pgvector, Pinecone for your use case"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "131-hybrid-search",
      children: "13.1 Hybrid Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bm25--dense-vector--sparse-vector",
      children: "BM25 + Dense Vector + Sparse Vector"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import math\r\nfrom collections import Counter\r\nimport numpy as np\r\nfrom sklearn.feature_extraction.text import TfidfVectorizer\r\n\r\nclass BM25:\r\n    \"\"\"Okapi BM25 implementation for sparse retrieval.\"\"\"\r\n\r\n    def __init__(self, k1: float = 1.5, b: float = 0.75):\r\n        self.k1 = k1\r\n        self.b = b\r\n        self.documents: list[str] = []\r\n        self.doc_lengths: list[int] = []\r\n        self.avg_doc_length: float = 0\r\n        self.idf: dict[str, float] = {}\r\n        self.doc_freq: dict[str, int] = {}\r\n        self.total_docs: int = 0\r\n\r\n    def fit(self, documents: list[str]):\r\n        self.documents = documents\r\n        self.doc_lengths = [len(doc.split()) for doc in documents]\r\n        self.avg_doc_length = np.mean(self.doc_lengths)\r\n        self.total_docs = len(documents)\r\n\r\n        # Term frequency across documents\r\n        for doc in documents:\r\n            terms = set(doc.lower().split())\r\n            for term in terms:\r\n                self.doc_freq[term] = self.doc_freq.get(term, 0) + 1\r\n\r\n        # IDF calculation\r\n        for term, doc_count in self.doc_freq.items():\r\n            self.idf[term] = math.log(1 + (self.total_docs - doc_count + 0.5) / (doc_count + 0.5))\r\n\r\n    def score(self, query: str, doc_index: int) -> float:\r\n        \"\"\"Calculate BM25 score for a query-document pair.\"\"\"\r\n        query_terms = query.lower().split()\r\n        doc = self.documents[doc_index]\r\n        doc_terms = doc.lower().split()\r\n        doc_length = self.doc_lengths[doc_index]\r\n\r\n        score = 0.0\r\n        term_counts = Counter(doc_terms)\r\n\r\n        for term in set(query_terms):\r\n            if term in self.idf:\r\n                tf = term_counts.get(term, 0)\r\n                idf = self.idf[term]\r\n                numerator = tf * (self.k1 + 1)\r\n                denominator = tf + self.k1 * (1 - self.b + self.b * doc_length / self.avg_doc_length)\r\n                score += idf * (numerator / denominator)\r\n\r\n        return score\r\n\r\n    def search(self, query: str, top_k: int = 10) -> list[tuple[int, float]]:\r\n        scores = [(i, self.score(query, i)) for i in range(len(self.documents))]\r\n        scores.sort(key=lambda x: x[1], reverse=True)\r\n        return scores[:top_k]\r\n\r\n# Hybrid search with Reciprocal Rank Fusion\r\nclass HybridSearch:\r\n    \"\"\"Combine BM25 + dense vector + sparse vector with RRF.\"\"\"\r\n\r\n    def __init__(\r\n        self,\r\n        dense_weight: float = 1.0,\r\n        sparse_weight: float = 1.0,\r\n        bm25_weight: float = 1.0,\r\n        rrf_k: int = 60,\r\n    ):\r\n        self.dense_weight = dense_weight\r\n        self.sparse_weight = sparse_weight\r\n        self.bm25_weight = bm25_weight\r\n        self.rrf_k = rrf_k\r\n        self.bm25 = BM25()\r\n        self.bm25_fitted = False\r\n\r\n    def fit_bm25(self, documents: list[str]):\r\n        self.bm25.fit(documents)\r\n        self.bm25_fitted = True\r\n\r\n    def rrf_score(self, rank: int) -> float:\r\n        return 1.0 / (self.rrf_k + rank)\r\n\r\n    def search(\r\n        self,\r\n        query: str,\r\n        query_dense: list[float],\r\n        query_sparse: dict[str, float] | None = None,\r\n        top_k: int = 10,\r\n    ) -> list[tuple[str, float, dict]]:\r\n        \"\"\"Hybrid search combining all methods.\"\"\"\r\n        all_scores: dict[int, float] = {}\r\n\r\n        # Dense vector search\r\n        dense_results = chroma_collection.query(\r\n            query_embeddings=[query_dense],\r\n            n_results=top_k * 2\r\n        )\r\n        for i in range(len(dense_results[\"ids\"][0])):\r\n            doc_id = dense_results[\"ids\"][0][i]\r\n            all_scores[doc_id] = all_scores.get(doc_id, 0) + self.rrf_score(i) * self.dense_weight\r\n\r\n        # Sparse vector search (if available)\r\n        if query_sparse:\r\n            sparse_results = chroma_collection.query(\r\n                query_embeddings=[list(query_sparse.values())],\r\n                n_results=top_k * 2\r\n            )\r\n            for i in range(len(sparse_results[\"ids\"][0])):\r\n                doc_id = sparse_results[\"ids\"][0][i]\r\n                all_scores[doc_id] = all_scores.get(doc_id, 0) + self.rrf_score(i) * self.sparse_weight\r\n\r\n        # BM25 search\r\n        if self.bm25_fitted:\r\n            bm25_results = self.bm25.search(query, top_k=top_k * 2)\r\n            for doc_idx, score in bm25_results:\r\n                all_scores[str(doc_idx)] = all_scores.get(str(doc_idx), 0) + self.rrf_score(doc_idx) * self.bm25_weight\r\n\r\n        # Sort combined scores\r\n        ranked = sorted(all_scores.items(), key=lambda x: x[1], reverse=True)[:top_k]\r\n\r\n        # Fetch content for top results\r\n        results = []\r\n        for doc_id, score in ranked:\r\n            results.append((\r\n                doc_id,\r\n                score / (self.dense_weight + self.sparse_weight + self.bm25_weight),  # Normalized score\r\n                {\"method\": \"hybrid\", \"bm25_used\": self.bm25_fitted}\r\n            ))\r\n\r\n        return results\r\n\r\n# Usage\r\ndef hybrid_search_demo(query: str):\r\n    # Dense embedding\r\n    dense_vec = client.embeddings.create(input=query, model=\"text-embedding-3-small\").data[0].embedding\r\n\r\n    # Sparse embedding (using SPLADE or similar — simplified example)\r\n    sparse_vec = {\"term1\": 0.8, \"term2\": 0.5}  # Placeholder\r\n\r\n    # BM25 fits on document collection\r\n    bm25_docs = [\"Lease terms in Dubai Marina\", \"Annual rent payment options\", \"Ejari registration process\"]\r\n\r\n    hybrid = HybridSearch()\r\n    hybrid.fit_bm25(bm25_docs)\r\n    return hybrid.search(query, dense_vec, sparse_vec, top_k=5)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "132-multi-vector-retrieval",
      children: "13.2 Multi-Vector Retrieval"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "colbert-style-late-interaction",
      children: "ColBERT-Style Late Interaction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\r\nfrom typing import NamedTuple\r\n\r\nclass MultiVectorResult(NamedTuple):\r\n    doc_id: str\r\n    score: float\r\n    token_matches: list[tuple[str, str, float]]  # (query_token, doc_token, similarity)\r\n\r\nclass ColBERTRetriever:\r\n    \"\"\"\r\n    Multi-vector retrieval using late interaction (ColBERT-style).\r\n    Each document is represented as a bag of token-level embeddings,\r\n    not a single pooled vector.\r\n    \"\"\"\r\n\r\n    def __init__(self):\r\n        self.doc_embeddings: dict[str, list[tuple[str, list[float]]]] = {}\r\n\r\n    def index_document(self, doc_id: str, tokens: list[str], embeddings: list[list[float]]):\r\n        \"\"\"Store per-token embeddings for a document.\"\"\"\r\n        self.doc_embeddings[doc_id] = list(zip(tokens, embeddings))\r\n\r\n    def search(self, query_tokens: list[str], query_embeddings: list[list[float]], top_k: int = 5) -> list[MultiVectorResult]:\r\n        \"\"\"MaxSim late interaction scoring.\"\"\"\r\n        results = []\r\n\r\n        for doc_id, doc_vectors in self.doc_embeddings.items():\r\n            doc_embs = np.array([dv[1] for dv in doc_vectors])\r\n            query_embs = np.array(query_embeddings)\r\n\r\n            # MaxSim: for each query token, find max cosine similarity with any doc token\r\n            query_norm = query_embs / np.linalg.norm(query_embs, axis=1, keepdims=True)\r\n            doc_norm = doc_embs / np.linalg.norm(doc_embs, axis=1, keepdims=True)\r\n\r\n            similarities = np.dot(query_norm, doc_norm.T)  # (n_query_tokens, n_doc_tokens)\r\n            max_scores = similarities.max(axis=1)  # Best match per query token\r\n            total_score = max_scores.sum()\r\n\r\n            # Find best matches for interpretability\r\n            token_matches = []\r\n            for qi, q_token in enumerate(query_tokens):\r\n                best_di = similarities[qi].argmax()\r\n                token_matches.append((q_token, doc_vectors[best_di][0], float(similarities[qi][best_di])))\r\n\r\n            results.append(MultiVectorResult(doc_id, float(total_score), token_matches))\r\n\r\n        results.sort(key=lambda x: x.score, reverse=True)\r\n        return results[:top_k]\r\n\r\n# Usage\r\nretriever = ColBERTRetriever()\r\n\r\n# Index a document with per-token embeddings\r\ntokens = [\"lease\", \"terms\", \"dubai\", \"12\", \"months\"]\r\nembeddings = [client.embeddings.create(input=t, model=\"text-embedding-3-small\").data[0].embedding for t in tokens]\r\nretriever.index_document(\"doc1\", tokens, embeddings)\r\n\r\nquery_tokens = [\"what\", \"lease\", \"term\", \"dubai\"]\r\nquery_embs = [client.embeddings.create(input=t, model=\"text-embedding-3-small\").data[0].embedding for t in query_tokens]\r\n\r\nresults = retriever.search(query_tokens, query_embs)\r\nfor r in results:\r\n    print(f\"Doc {r.doc_id}: score={r.score:.4f}\")\r\n    for qt, dt, sim in r.token_matches[:3]:\r\n        print(f\"  '{qt}' ? '{dt}': {sim:.3f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "133-advanced-retrieval-strategies",
      children: "13.3 Advanced Retrieval Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hyde-hypothetical-document-embedding",
      children: "HyDE (Hypothetical Document Embedding)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class HyDERetriever:\r\n    \"\"\"\r\n    HyDE: Generate a hypothetical document that answers the query,\r\n    then embed that document and search. Bridges the query-document gap.\r\n    \"\"\"\r\n\r\n    def generate_hypothetical(self, query: str) -> str:\r\n        \"\"\"Generate a document that would ideally answer this query.\"\"\"\r\n        response = client.chat.completions.create(\r\n            model=\"gpt-4o-mini\",\r\n            messages=[\r\n                {\"role\": \"system\", \"content\": \"Write a short passage that answers the user's question in a factual, document-like style.\"},\r\n                {\"role\": \"user\", \"content\": query}\r\n            ],\r\n            max_tokens=200\r\n        )\r\n        return response.choices[0].message.content\r\n\r\n    def search(self, query: str, top_k: int = 5) -> list[str]:\r\n        \"\"\"Search using HyDE: query ? hypothetical doc ? embed ? search.\"\"\"\r\n        hypothetical = self.generate_hypothetical(query)\r\n        hyde_embedding = client.embeddings.create(\r\n            input=hypothetical,\r\n            model=\"text-embedding-3-large\"  # Using larger model for HyDE\r\n        ).data[0].embedding\r\n\r\n        results = chroma_collection.query(\r\n            query_embeddings=[hyde_embedding],\r\n            n_results=top_k\r\n        )\r\n        return results[\"documents\"][0]\r\n\r\n# Query expansion\r\ndef expand_query(query: str, n_queries: int = 3) -> list[str]:\r\n    \"\"\"Generate multiple query variations to improve recall.\"\"\"\r\n    response = client.beta.chat.completions.parse(\r\n        model=\"gpt-4o-mini\",\r\n        messages=[\r\n            {\"role\": \"system\", \"content\": f\"Generate {n_queries} distinct search queries that explore different aspects of the user's question.\"},\r\n            {\"role\": \"user\", \"content\": query}\r\n        ],\r\n        response_format=type(\"Queries\", (BaseModel,), {\"queries\": list[str]})\r\n    )\r\n    return [query] + response.choices[0].message.parsed.queries\r\n\r\ndef multi_query_search(query: str, top_k: int = 5) -> list[str]:\r\n    \"\"\"Search with multiple query variations and merge results.\"\"\"\r\n    queries = expand_query(query)\r\n\r\n    all_docs = []\r\n    seen = set()\r\n\r\n    for q in queries:\r\n        q_vec = client.embeddings.create(input=q, model=\"text-embedding-3-small\").data[0].embedding\r\n        results = chroma_collection.query(query_embeddings=[q_vec], n_results=top_k)\r\n\r\n        for doc in results[\"documents\"][0]:\r\n            doc_hash = hash(doc[:100])\r\n            if doc_hash not in seen:\r\n                seen.add(doc_hash)\r\n                all_docs.append(doc)\r\n\r\n    return all_docs[:top_k]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "134-re-ranking-deep-dive",
      children: "13.4 Re-Ranking Deep-Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-encoder-re-ranker",
      children: "Cross-Encoder Re-Ranker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from sentence_transformers import CrossEncoder\r\n\r\nclass ReRanker:\r\n    \"\"\"\r\n    Cross-encoder re-ranker: scores each (query, document) pair directly.\r\n    More accurate than bi-encoder (cosine similarity) but slower.\r\n    \"\"\"\r\n\r\n    def __init__(self, model_name: str = \"cross-encoder/ms-marco-MiniLM-L-6-v2\"):\r\n        self.model = CrossEncoder(model_name, max_length=512)\r\n        self.model_name = model_name\r\n\r\n    def rerank(self, query: str, documents: list[str], top_k: int = 5) -> list[tuple[str, float]]:\r\n        \"\"\"Score and re-rank documents.\"\"\"\r\n        pairs = [[query, doc[:500]] for doc in documents]\r\n        scores = self.model.predict(pairs)\r\n\r\n        scored = list(zip(documents, scores))\r\n        scored.sort(key=lambda x: x[1], reverse=True)\r\n\r\n        return scored[:top_k]\r\n\r\n# LLM-based re-ranker (when you can't run a local model)\r\nclass LLMReranker:\r\n    \"\"\"Use an LLM to re-rank by scoring relevance directly.\"\"\"\r\n\r\n    def rerank(self, query: str, documents: list[str], top_k: int = 5) -> list[tuple[str, float]]:\r\n        \"\"\"Ask LLM to score each document's relevance to the query.\"\"\"\r\n        scored = []\r\n        for doc in documents[:10]:  # Only re-rank top-10 (LLM is expensive)\r\n            response = client.beta.chat.completions.parse(\r\n                model=\"gpt-4o-mini\",\r\n                messages=[\r\n                    {\"role\": \"system\", \"content\": \"Score the relevance of the document to the query from 0.0 (irrelevant) to 1.0 (perfect match).\"},\r\n                    {\"role\": \"user\", \"content\": f\"Query: {query}\\n\\nDocument: {doc[:500]}\"}\r\n                ],\r\n                response_format=type(\"Relevance\", (BaseModel,), {\"score\": float, \"reasoning\": str})\r\n            )\r\n            result = response.choices[0].message.parsed\r\n            scored.append((doc, result.score))\r\n\r\n        scored.sort(key=lambda x: x[1], reverse=True)\r\n        return scored[:top_k]\r\n\r\n# Evaluation: NDCG@K\r\nimport math\r\n\r\ndef ndcg_at_k(retrieved: list[str], relevant: set[str], k: int = 10) -> float:\r\n    \"\"\"Normalized Discounted Cumulative Gain @ K.\"\"\"\r\n    dcg = 0.0\r\n    for i, doc in enumerate(retrieved[:k]):\r\n        if doc in relevant:\r\n            dcg += 1 / math.log2(i + 2)  # 2-based log (i+2 because 0-indexed)\r\n\r\n    # Ideal DCG (all relevant at top)\r\n    ideal_relevant = min(k, len(relevant))\r\n    idcg = sum(1 / math.log2(i + 2) for i in range(ideal_relevant))\r\n\r\n    return dcg / idcg if idcg > 0 else 0.0\r\n\r\n# Example: compare retrieval with and without re-ranking\r\ndef compare_retrieval_methods(query: str, relevant_docs: set[str]) -> dict:\r\n    \"\"\"Compare vanilla vector search vs re-ranked search.\"\"\"\r\n    q_vec = client.embeddings.create(input=query, model=\"text-embedding-3-small\").data[0].embedding\r\n    raw_results = chroma_collection.query(query_embeddings=[q_vec], n_results=20)\r\n    raw_docs = raw_results[\"documents\"][0]\r\n\r\n    # Without re-ranking\r\n    ndcg_raw = ndcg_at_k(raw_docs[:10], relevant_docs)\r\n\r\n    # With re-ranking\r\n    reranker = ReRanker()\r\n    reranked = reranker.rerank(query, raw_docs, top_k=10)\r\n    reranked_docs = [d for d, s in reranked]\r\n    ndcg_reranked = ndcg_at_k(reranked_docs, relevant_docs)\r\n\r\n    return {\r\n        \"ndcg_raw\": round(ndcg_raw, 4),\r\n        \"ndcg_reranked\": round(ndcg_reranked, 4),\r\n        \"improvement\": f\"{(ndcg_reranked - ndcg_raw) / ndcg_raw * 100:.1f}%\" if ndcg_raw > 0 else \"N/A\"\r\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "135-hnsw-index-tuning",
      children: "13.5 HNSW Index Tuning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class HNSWTuner:\r\n    \"\"\"\r\n    Tune HNSW index parameters for your specific dataset and latency requirements.\r\n    \"\"\"\r\n\r\n    def __init__(self):\r\n        self.results: list[dict] = []\r\n\r\n    def test_config(\r\n        self,\r\n        M: int,\r\n        ef_construction: int,\r\n        ef_search: int,\r\n        queries: list[str],\r\n        ground_truth: dict[str, list[str]],\r\n    ) -> dict:\r\n        \"\"\"Test a specific HNSW configuration and return metrics.\"\"\"\r\n        # Create index with these parameters\r\n        # In ChromaDB: collection.modify() doesn't expose HNSW params directly\r\n        # In Qdrant: you can set them at collection creation\r\n        # In pgvector: SET hnsw.ef_search = value;\r\n        # This is a simulation for learning purposes\r\n\r\n        latencies = []\r\n        recall_at_10 = []\r\n\r\n        for query in queries:\r\n            t0 = time.time()\r\n            q_vec = client.embeddings.create(input=query, model=\"text-embedding-3-small\").data[0].embedding\r\n            results = chroma_collection.query(query_embeddings=[q_vec], n_results=10)\r\n            latency = (time.time() - t0) * 1000\r\n            latencies.append(latency)\r\n\r\n            # Check recall\r\n            relevant = set(ground_truth.get(query, []))\r\n            retrieved = set(results[\"ids\"][0])\r\n            if relevant:\r\n                recall_at_10.append(len(retrieved & relevant) / len(relevant))\r\n\r\n        return {\r\n            \"config\": {\"M\": M, \"ef_construction\": ef_construction, \"ef_search\": ef_search},\r\n            \"avg_latency_ms\": round(np.mean(latencies), 1),\r\n            \"p95_latency_ms\": round(np.percentile(latencies, 95), 1),\r\n            \"avg_recall\": round(np.mean(recall_at_10), 4) if recall_at_10 else 0,\r\n            \"latency_overhead\": round(np.mean(latencies) / 50, 2),  # Compared to flat baseline\r\n        }\r\n\r\n    def tuner_guide(self) -> dict:\r\n        \"\"\"Return guidance on HNSW parameter tuning.\"\"\"\r\n        return {\r\n            \"M (neighbors per node)\": {\r\n                \"range\": \"8-64\",\r\n                \"default\": 16,\r\n                \"higher\": \"Better recall, more memory, slower indexing\",\r\n                \"lower\": \"Less memory, faster indexing, lower recall\",\r\n                \"memory_formula\": \"M * 4 bytes per edge * num_elements\",\r\n                \"recommendation\": \"16-32 for most datasets under 1M vectors; 32-48 for > 1M\"\r\n            },\r\n            \"ef_construction (build-time search width)\": {\r\n                \"range\": \"100-500\",\r\n                \"default\": 200,\r\n                \"higher\": \"Higher recall at build time, slower index build\",\r\n                \"lower\": \"Faster build, potentially lower quality\",\r\n                \"recommendation\": \"200-400 — diminishing returns above 400\"\r\n            },\r\n            \"ef_search (query-time search width)\": {\r\n                \"range\": \"1-2000 (but typically 50-500)\",\r\n                \"default\": 50,\r\n                \"higher\": \"Higher recall at query time, slower queries\",\r\n                \"lower\": \"Faster queries, lower recall\",\r\n                \"recommendation\": \"Start at ef_search = top_k * 10, tune from there\"\r\n            },\r\n            \"tuning_workflow\": [\r\n                \"1. Set ef_construction = 200, M = 16 (conservative start)\",\r\n                \"2. Build index, measure recall on validation set\",\r\n                \"3. If recall < 0.95, increase M (16 ? 24 ? 32)\",\r\n                \"4. If latency > target, decrease ef_search (500 ? 200 ? 100)\",\r\n                \"5. If recall still low and M is already 48, increase ef_construction to 400\",\r\n                \"6. Final check: measure P95 latency and recall on holdout set\"\r\n            ],\r\n            \"performance_tradeoffs\": {\r\n                \"flat_search\": {\"latency_ms\": 500, \"recall\": 1.0, \"memory\": \"Lowest\"},\r\n                \"hnsw_m16_ef100\": {\"latency_ms\": 20, \"recall\": 0.95, \"memory\": \"Low\"},\r\n                \"hnsw_m32_ef200\": {\"latency_ms\": 50, \"recall\": 0.98, \"memory\": \"Medium\"},\r\n                \"hnsw_m48_ef500\": {\"latency_ms\": 120, \"recall\": 0.995, \"memory\": \"High\"},\r\n            }\r\n        }\r\n\r\ntuner = HNSWTuner()\r\nprint(json.dumps(tuner.tuner_guide(), indent=2))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "136-metadata-filtering--hybrid-queries",
      children: "13.6 Metadata Filtering & Hybrid Queries"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class FilteredSearch:\r\n    \"\"\"Vector search with metadata filters and hybrid queries.\"\"\"\r\n\r\n    def search(\r\n        self,\r\n        query_vector: list[float],\r\n        filters: dict | None = None,\r\n        top_k: int = 10,\r\n    ) -> list[dict]:\r\n        \"\"\"Search with metadata filters (pre-filtering).\"\"\"\r\n        # Build ChromaDB filter expression\r\n        where_filter = None\r\n        if filters:\r\n            conditions = []\r\n            for key, value in filters.items():\r\n                if isinstance(value, dict):\r\n                    conditions.append({key: value})  # e.g., {\"price\": {\"$gte\": 20000}}\r\n                elif isinstance(value, list):\r\n                    conditions.append({key: {\"$in\": value}})\r\n                else:\r\n                    conditions.append({key: {\"$eq\": value}})\r\n\r\n            where_filter = {\"$and\": conditions} if len(conditions) > 1 else conditions[0]\r\n\r\n        results = chroma_collection.query(\r\n            query_embeddings=[query_vector],\r\n            n_results=top_k,\r\n            where=where_filter,\r\n        )\r\n\r\n        return [\r\n            {\r\n                \"id\": results[\"ids\"][0][i],\r\n                \"content\": results[\"documents\"][0][i],\r\n                \"metadata\": results[\"metadatas\"][0][i] if results[\"metadatas\"] else {},\r\n                \"distance\": results[\"distances\"][0][i] if results[\"distances\"] else 0,\r\n            }\r\n            for i in range(len(results[\"ids\"][0]))\r\n        ]\r\n\r\n# Complex filter examples\r\nFILTER_EXAMPLES = {\r\n    \"exact_match\": {\"city\": \"Dubai\"},\r\n    \"range\": {\"price\": {\"$gte\": 20000, \"$lte\": 50000}},\r\n    \"in_list\": {\"property_type\": {\"$in\": [\"apartment\", \"villa\"]}},\r\n    \"composite\": {\r\n        \"$and\": [\r\n            {\"city\": {\"$eq\": \"Dubai\"}},\r\n            {\"price\": {\"$lte\": 50000}},\r\n            {\"bedrooms\": {\"$gte\": 2}},\r\n        ]\r\n    },\r\n    \"with_null_check\": {\r\n        \"$or\": [\r\n            {\"available_from\": {\"$eq\": None}},\r\n            {\"available_from\": {\"$lte\": \"2026-07-01\"}},\r\n        ]\r\n    },\r\n}\r\n\r\n# Usage\r\nsearcher = FilteredSearch()\r\nquery = \"apartment in Dubai under 50000 AED\"\r\nq_vec = client.embeddings.create(input=query, model=\"text-embedding-3-small\").data[0].embedding\r\n\r\nresults = searcher.search(q_vec, filters={\r\n    \"property_type\": {\"$in\": [\"apartment\"]},\r\n    \"price\": {\"$lte\": 50000},\r\n}, top_k=5)\r\n\r\nfor r in results:\r\n    meta = r[\"metadata\"]\r\n    print(f\"{meta.get('title', '?')} — {meta.get('price', '?')} AED — distance: {r['distance']:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "137-vector-quantization",
      children: "13.7 Vector Quantization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\r\nfrom typing import NamedTuple\r\n\r\nclass QuantizedVector(NamedTuple):\r\n    codes: np.ndarray       # Compressed representation\r\n    centroids: np.ndarray   # Codebook\r\n    original_dims: int\r\n    n_subvectors: int\r\n\r\nclass ProductQuantizer:\r\n    \"\"\"\r\n    Product Quantization (PQ): split vectors into subvectors,\r\n    quantize each subvector independently. Reduces memory by 75-95%.\r\n    \"\"\"\r\n\r\n    def __init__(self, n_subvectors: int = 8, n_centroids: int = 256):\r\n        self.M = n_subvectors  # Number of subvectors\r\n        self.K = n_centroids   # Centroids per subvector (256 = 8 bits)\r\n        self.codebooks: list[np.ndarray] = []\r\n        self.D: int = 0  # Original dimensionality\r\n\r\n    def fit(self, vectors: np.ndarray):\r\n        \"\"\"Learn codebook from training vectors.\"\"\"\r\n        self.D = vectors.shape[1]\r\n        assert self.D % self.M == 0, f\"D={self.D} must be divisible by M={self.M}\"\r\n\r\n        sub_dim = self.D // self.M\r\n        self.codebooks = []\r\n\r\n        for m in range(self.M):\r\n            subvectors = vectors[:, m * sub_dim:(m + 1) * sub_dim]\r\n            # K-means clustering (simplified — use sklearn in production)\r\n            centroids = subvectors[:self.K]  # Initialize with first K vectors\r\n            for _ in range(20):  # Simple k-means iterations\r\n                distances = np.linalg.norm(subvectors[:, None, :] - centroids[None, :, :], axis=2)\r\n                assignments = distances.argmin(axis=1)\r\n                for k in range(self.K):\r\n                    mask = assignments == k\r\n                    if mask.any():\r\n                        centroids[k] = subvectors[mask].mean(axis=0)\r\n            self.codebooks.append(centroids)\r\n\r\n    def encode(self, vectors: np.ndarray) -> np.ndarray:\r\n        \"\"\"Encode vectors to compact codes.\"\"\"\r\n        sub_dim = self.D // self.M\r\n        codes = np.zeros((vectors.shape[0], self.M), dtype=np.uint8)\r\n\r\n        for m in range(self.M):\r\n            subvectors = vectors[:, m * sub_dim:(m + 1) * sub_dim]\r\n            distances = np.linalg.norm(subvectors[:, None, :] - self.codebooks[m][None, :, :], axis=2)\r\n            codes[:, m] = distances.argmin(axis=1)\r\n\r\n        return codes\r\n\r\n    def memory_savings(self, n_vectors: int) -> dict:\r\n        \"\"\"Calculate memory savings.\"\"\"\r\n        original_bytes = n_vectors * self.D * 4  # float32\r\n        quantized_bytes = n_vectors * self.M  # uint8\r\n        codebook_bytes = sum(cb.nbytes for cb in self.codebooks)\r\n\r\n        return {\r\n            \"original_mb\": round(original_bytes / 1e6, 2),\r\n            \"quantized_mb\": round((quantized_bytes + codebook_bytes) / 1e6, 2),\r\n            \"compression_ratio\": f\"{original_bytes / (quantized_bytes + codebook_bytes):.1f}x\",\r\n            \"savings_pct\": f\"{(1 - (quantized_bytes + codebook_bytes) / original_bytes) * 100:.0f}%\"\r\n        }\r\n\r\n# Scalar Quantization (SQ)\r\nclass ScalarQuantizer:\r\n    \"\"\"Convert float32 vectors to uint8 with min-max scaling. 4x memory reduction.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.mins: np.ndarray | None = None\r\n        self.maxs: np.ndarray | None = None\r\n\r\n    def fit(self, vectors: np.ndarray):\r\n        self.mins = vectors.min(axis=0)\r\n        self.maxs = vectors.max(axis=0)\r\n\r\n    def encode(self, vectors: np.ndarray) -> np.ndarray:\r\n        scaled = (vectors - self.mins) / (self.maxs - self.mins + 1e-10)\r\n        return (scaled * 255).astype(np.uint8)\r\n\r\n    def decode(self, codes: np.ndarray) -> np.ndarray:\r\n        scaled = codes.astype(np.float32) / 255.0\r\n        return scaled * (self.maxs - self.mins) + self.mins\r\n\r\n# Usage\r\ndimension = 1536\r\nvectors = np.random.randn(1000, dimension).astype(np.float32)\r\n\r\npq = ProductQuantizer(n_subvectors=16, n_centroids=256)\r\npq.fit(vectors)\r\nprint(f\"Memory: {json.dumps(pq.memory_savings(vectors.shape[0]))}\")\r\n\r\nsq = ScalarQuantizer()\r\nsq.fit(vectors)\r\ncompressed = sq.encode(vectors[:5])\r\nrestored = sq.decode(compressed)\r\nmse = np.mean((vectors[:5] - restored) ** 2)\r\nprint(f\"SQ MSE: {mse:.6f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "138-multi-modal-rag",
      children: "13.8 Multi-Modal RAG"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from PIL import Image\r\nimport base64\r\nfrom io import BytesIO\r\n\r\nclass MultiModalRAG:\r\n    \"\"\"\r\n    RAG pipeline that searches across text and images.\r\n    Uses CLIP-style embeddings for cross-modal retrieval.\r\n    \"\"\"\r\n\r\n    def __init__(self):\r\n        self.text_collection = chroma_client.get_or_create_collection(\"text_docs\")\r\n        self.image_collection = chroma_client.get_or_create_collection(\"image_embeddings\")\r\n\r\n    def embed_image(self, image_path: str) -> list[float]:\r\n        \"\"\"Embed image using vision-language model.\"\"\"\r\n        with open(image_path, \"rb\") as f:\r\n            image_b64 = base64.b64encode(f.read()).decode()\r\n\r\n        response = client.chat.completions.create(\r\n            model=\"gpt-4o-mini\",\r\n            messages=[\r\n                {\"role\": \"user\", \"content\": [\r\n                    {\"type\": \"text\", \"text\": \"Describe this image in detail for search indexing.\"},\r\n                    {\"type\": \"image_url\", \"image_url\": {\"url\": f\"data:image/png;base64,{image_b64}\"}}\r\n                ]}\r\n            ],\r\n            max_tokens=100\r\n        )\r\n        description = response.choices[0].message.content\r\n\r\n        # Embed the description\r\n        embedding = client.embeddings.create(\r\n            input=description,\r\n            model=\"text-embedding-3-small\"\r\n        ).data[0].embedding\r\n\r\n        return embedding, description\r\n\r\n    def search(\r\n        self,\r\n        query: str,\r\n        search_images: bool = True,\r\n        search_text: bool = True,\r\n        top_k: int = 5,\r\n    ) -> list[dict]:\r\n        \"\"\"Search across text and image collections.\"\"\"\r\n        q_vec = client.embeddings.create(input=query, model=\"text-embedding-3-small\").data[0].embedding\r\n        results = []\r\n\r\n        if search_text:\r\n            text_results = self.text_collection.query(\r\n                query_embeddings=[q_vec],\r\n                n_results=top_k\r\n            )\r\n            for i in range(len(text_results[\"ids\"][0])):\r\n                results.append({\r\n                    \"type\": \"text\",\r\n                    \"content\": text_results[\"documents\"][0][i],\r\n                    \"metadata\": text_results[\"metadatas\"][0][i] if text_results[\"metadatas\"] else {},\r\n                    \"score\": 1 - text_results[\"distances\"][0][i] if text_results[\"distances\"] else 0,\r\n                })\r\n\r\n        if search_images:\r\n            image_results = self.image_collection.query(\r\n                query_embeddings=[q_vec],\r\n                n_results=top_k\r\n            )\r\n            for i in range(len(image_results[\"ids\"][0])):\r\n                results.append({\r\n                    \"type\": \"image\",\r\n                    \"content\": image_results[\"documents\"][0][i],\r\n                    \"metadata\": image_results[\"metadatas\"][0][i] if image_results[\"metadatas\"] else {},\r\n                    \"score\": 1 - image_results[\"distances\"][0][i] if image_results[\"distances\"] else 0,\r\n                })\r\n\r\n        results.sort(key=lambda x: x[\"score\"], reverse=True)\r\n        return results[:top_k]\r\n\r\n# Multi-modal generation\r\ndef generate_with_images(query: str, text_context: str, image_paths: list[str]) -> str:\r\n    \"\"\"Generate response with both text context and image references.\"\"\"\r\n    image_contents = []\r\n    for path in image_paths:\r\n        with open(path, \"rb\") as f:\r\n            image_b64 = base64.b64encode(f.read()).decode()\r\n            image_contents.append({\r\n                \"type\": \"image_url\",\r\n                \"image_url\": {\"url\": f\"data:image/png;base64,{image_b64}\"}\r\n            })\r\n\r\n    response = client.chat.completions.create(\r\n        model=\"gpt-4o-mini\",\r\n        messages=[\r\n            {\"role\": \"system\", \"content\": \"Answer using the provided text context and images.\"},\r\n            {\"role\": \"user\", \"content\": [\r\n                {\"type\": \"text\", \"text\": f\"Context:\\n{text_context}\\n\\nQuery: {query}\"},\r\n                *image_contents\r\n            ]}\r\n        ]\r\n    )\r\n    return response.choices[0].message.content\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "139-graph-rag",
      children: "13.9 Graph RAG"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class GraphRAG:\r\n    \"\"\"\r\n    Combine knowledge graph traversal with vector search.\r\n    Find entities via vector search, then traverse relationships.\r\n    \"\"\"\r\n\r\n    def __init__(self):\r\n        self.graph: dict[str, dict] = {}  # entity_id -> {properties, relationships}\r\n\r\n    def add_entity(self, entity_id: str, properties: dict, relationships: list[tuple[str, str, str]]):\r\n        \"\"\"Add entity with typed relationships: (target_id, relation_type, label).\"\"\"\r\n        self.graph[entity_id] = {\r\n            \"properties\": properties,\r\n            \"relationships\": relationships,\r\n        }\r\n\r\n    def vector_search_entities(self, query: str, top_k: int = 5) -> list[str]:\r\n        \"\"\"Find entities via vector search on their text representation.\"\"\"\r\n        q_vec = client.embeddings.create(input=query, model=\"text-embedding-3-small\").data[0].embedding\r\n\r\n        entity_texts = []\r\n        entity_ids = []\r\n        for eid, data in self.graph.items():\r\n            entity_texts.append(\" \".join(str(v) for v in data[\"properties\"].values()))\r\n            entity_ids.append(eid)\r\n\r\n        # Simple embedding-based search\r\n        entity_embeddings = []\r\n        for text in entity_texts:\r\n            emb = client.embeddings.create(input=text, model=\"text-embedding-3-small\").data[0].embedding\r\n            entity_embeddings.append(emb)\r\n\r\n        similarities = cosine_similarity([q_vec], entity_embeddings)[0]\r\n        top_indices = np.argsort(similarities)[-top_k:][::-1]\r\n\r\n        return [entity_ids[i] for i in top_indices]\r\n\r\n    def traverse(self, start_entities: list[str], max_depth: int = 2) -> dict:\r\n        \"\"\"BFS traversal from starting entities.\"\"\"\r\n        visited: dict[str, int] = {eid: 0 for eid in start_entities}\r\n        queue = [(eid, 0) for eid in start_entities]\r\n        relations = []\r\n\r\n        while queue:\r\n            current, depth = queue.pop(0)\r\n            if depth >= max_depth:\r\n                continue\r\n\r\n            if current not in self.graph:\r\n                continue\r\n\r\n            for target, rel_type, label in self.graph[current][\"relationships\"]:\r\n                relations.append({\r\n                    \"from\": current,\r\n                    \"to\": target,\r\n                    \"type\": rel_type,\r\n                    \"label\": label\r\n                })\r\n                if target not in visited:\r\n                    visited[target] = depth + 1\r\n                    queue.append((target, depth + 1))\r\n\r\n        return {\r\n            \"entities\": {eid: self.graph.get(eid, {}).get(\"properties\", {}) for eid in visited},\r\n            \"relationships\": relations,\r\n        }\r\n\r\n    def hybrid_search(self, query: str, top_k: int = 5) -> dict:\r\n        \"\"\"Vector search entities ? traverse ? return enriched results.\"\"\"\r\n        seed_entities = self.vector_search_entities(query, top_k=3)\r\n        graph_context = self.traverse(seed_entities, max_depth=2)\r\n\r\n        # Build enriched context for LLM\r\n        context_parts = [\"Related entities found:\", \"\"]\r\n        for eid, props in graph_context[\"entities\"].items():\r\n            context_parts.append(f\"- {props.get('name', eid)}: {props.get('description', '')}\")\r\n\r\n        context_parts.append(\"\")\r\n        context_parts.append(\"Relationships:\")\r\n        for rel in graph_context[\"relationships\"][:10]:\r\n            context_parts.append(f\"- {rel['from']} --[{rel['type']}]--> {rel['to']}\")\r\n\r\n        return {\r\n            \"graph_context\": \"\\n\".join(context_parts),\r\n            \"entities\": graph_context[\"entities\"],\r\n            \"relationships\": graph_context[\"relationships\"],\r\n        }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1310-streaming-ingestion--real-time-updates",
      children: "13.10 Streaming Ingestion & Real-Time Updates"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import asyncio\r\nfrom datetime import datetime\r\n\r\nclass StreamingIngestion:\r\n    \"\"\"\r\n    Real-time document ingestion with < 5 second index latency.\r\n    Uses async processing with batch embedding.\r\n    \"\"\"\r\n\r\n    def __init__(self, batch_size: int = 10, flush_interval_seconds: int = 2):\r\n        self.batch_size = batch_size\r\n        self.flush_interval = flush_interval_seconds\r\n        self.buffer: list[dict] = []\r\n        self.last_flush = datetime.now()\r\n        self.total_indexed = 0\r\n\r\n    async def ingest(self, document: dict):\r\n        \"\"\"Add document to buffer for batch indexing.\"\"\"\r\n        self.buffer.append(document)\r\n\r\n        if len(self.buffer) >= self.batch_size:\r\n            await self.flush()\r\n        elif (datetime.now() - self.last_flush).seconds >= self.flush_interval:\r\n            await self.flush()\r\n\r\n    async def flush(self):\r\n        \"\"\"Embed and index all buffered documents.\"\"\"\r\n        if not self.buffer:\r\n            return\r\n\r\n        texts = [d[\"content\"] for d in self.buffer]\r\n        embeddings_list = await self._embed_batch(texts)\r\n\r\n        for doc, embedding in zip(self.buffer, embeddings_list):\r\n            chroma_collection.add(\r\n                documents=[doc[\"content\"]],\r\n                embeddings=[embedding],\r\n                metadatas=[{\r\n                    **doc.get(\"metadata\", {}),\r\n                    \"indexed_at\": datetime.now().isoformat(),\r\n                    \"source\": doc.get(\"source\", \"stream\"),\r\n                }]\r\n            )\r\n\r\n        self.total_indexed += len(self.buffer)\r\n        self.buffer = []\r\n        self.last_flush = datetime.now()\r\n\r\n    async def _embed_batch(self, texts: list[str]) -> list[list[float]]:\r\n        \"\"\"Batch embed texts asynchronously.\"\"\"\r\n        loop = asyncio.get_event_loop()\r\n        response = await loop.run_in_executor(\r\n            None,\r\n            lambda: client.embeddings.create(\r\n                input=texts,\r\n                model=\"text-embedding-3-small\"\r\n            )\r\n        )\r\n        return [d.embedding for d in response.data]\r\n\r\n    async def delete_document(self, doc_id: str):\r\n        \"\"\"Remove a document from the index by ID.\"\"\"\r\n        chroma_collection.delete(where={\"doc_id\": doc_id})\r\n\r\n    async def update_document(self, doc_id: str, new_content: str, metadata: dict | None = None):\r\n        \"\"\"Update a document in-place (delete + re-index).\"\"\"\r\n        await self.delete_document(doc_id)\r\n        await self.ingest({\r\n            \"content\": new_content,\r\n            \"metadata\": {\"doc_id\": doc_id, **(metadata or {})},\r\n            \"source\": \"update\"\r\n        })\r\n\r\n    def get_stats(self) -> dict:\r\n        return {\r\n            \"total_indexed\": self.total_indexed,\r\n            \"buffer_size\": len(self.buffer),\r\n            \"last_flush\": self.last_flush.isoformat(),\r\n        }\r\n\r\n# Usage\r\nasync def run_ingestion():\r\n    ingestor = StreamingIngestion(batch_size=5, flush_interval_seconds=3)\r\n\r\n    # Simulate real-time document stream\r\n    for i in range(20):\r\n        await ingestor.ingest({\r\n            \"content\": f\"Document {i}: Lease terms in Dubai...\",\r\n            \"metadata\": {\"doc_id\": f\"doc_{i}\", \"source\": \"webhook\"},\r\n            \"source\": \"webhook\"\r\n        })\r\n        await asyncio.sleep(0.5)\r\n\r\n    # Force flush remaining\r\n    await ingestor.flush()\r\n    print(f\"Indexed: {ingestor.get_stats()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1311-vector-db-comparison",
      children: "13.11 Vector DB Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ChromaDB"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Qdrant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "pgvector"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pinecone"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Setup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pip install, run locally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Docker container"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Postgres extension"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SaaS, API key"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Persistence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded (single process)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server + disk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Postgres tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serverless pods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scaling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal sharding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Postgres scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-scaling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HNSW params"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SET hnsw.ef_search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Filtering"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic where clauses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rich filters + payload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL WHERE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metadata filters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hybrid search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not natively"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "should"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "must"
            }), " queries"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BM25 via tsvector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not natively"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Quantization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not built-in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scalar + Product PQ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IVFFlat only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multi-tenancy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-collection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Payload filtering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row-level security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Namespaces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Client libraries"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python, JS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python, Rust, Go, JS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL (any Postgres client)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python, JS, Go, Java"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best for"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dev/ prototyping, small-medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production, large scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "You already use Postgres"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed, zero ops"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "migration-strategy",
      children: "Migration Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class VectorDBMigrator:\r\n    \"\"\"Migrate vectors between different vector databases.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.batch_size = 100\r\n\r\n    def export_from_chromadb(self, collection_name: str) -> list[dict]:\r\n        \"\"\"Export all vectors from ChromaDB.\"\"\"\r\n        collection = chroma_client.get_collection(collection_name)\r\n        count = collection.count()\r\n\r\n        all_data = []\r\n        offset = 0\r\n        while offset < count:\r\n            results = collection.get(limit=self.batch_size, offset=offset)\r\n            for i in range(len(results[\"ids\"])):\r\n                all_data.append({\r\n                    \"id\": results[\"ids\"][i],\r\n                    \"embedding\": results[\"embeddings\"][i],\r\n                    \"document\": results[\"documents\"][i],\r\n                    \"metadata\": results[\"metadatas\"][i] if results[\"metadatas\"] else {},\r\n                })\r\n            offset += self.batch_size\r\n\r\n        return all_data\r\n\r\n    def import_to_qdrant(self, data: list[dict], collection_name: str):\r\n        \"\"\"Import into Qdrant.\"\"\"\r\n        from qdrant_client import QdrantClient\r\n        from qdrant_client.models import PointStruct, VectorParams, Distance\r\n\r\n        client = QdrantClient(host=\"localhost\", port=6333)\r\n\r\n        # Recreate collection\r\n        client.recreate_collection(\r\n            collection_name=collection_name,\r\n            vectors_config=VectorParams(\r\n                size=len(data[0][\"embedding\"]),\r\n                distance=Distance.COSINE,\r\n            ),\r\n        )\r\n\r\n        # Batch upload\r\n        for i in range(0, len(data), self.batch_size):\r\n            batch = data[i:i + self.batch_size]\r\n            points = [\r\n                PointStruct(\r\n                    id=hash(item[\"id\"]) % (2**63),\r\n                    vector=item[\"embedding\"],\r\n                    payload={\"text\": item[\"document\"], **item[\"metadata\"]}\r\n                )\r\n                for item in batch\r\n            ]\r\n            client.upsert(collection_name=collection_name, points=points)\r\n\r\n        return len(data)\r\n\r\n    def verify_migration(self, chroma_collection: str, qdrant_collection: str, n_queries: int = 10) -> dict:\r\n        \"\"\"Verify migration by comparing search results.\"\"\"\r\n        from qdrant_client import QdrantClient\r\n\r\n        qdrant = QdrantClient(host=\"localhost\", port=6333)\r\n        chroma_coll = chroma_client.get_collection(chroma_collection)\r\n\r\n        matches = 0\r\n        test_queries = [\"test\", \"lease terms\", \"Dubai\", \"apartment\", \"rent\"]\r\n\r\n        for query in test_queries:\r\n            q_vec = client.embeddings.create(input=query, model=\"text-embedding-3-small\").data[0].embedding\r\n\r\n            # ChromaDB results\r\n            chroma_result = chroma_coll.query(query_embeddings=[q_vec], n_results=5)\r\n            chroma_ids = set(chroma_result[\"ids\"][0])\r\n\r\n            # Qdrant results\r\n            qdrant_result = qdrant.search(\r\n                collection_name=qdrant_collection,\r\n                query_vector=q_vec,\r\n                limit=5\r\n            )\r\n            qdrant_ids = set(str(r.id) for r in qdrant_result)\r\n\r\n            overlap = len(chroma_ids & qdrant_ids)\r\n            matches += overlap\r\n\r\n        return {\r\n            \"test_queries\": len(test_queries),\r\n            \"total_overlap\": matches,\r\n            \"avg_overlap_per_query\": round(matches / len(test_queries), 1),\r\n            \"max_possible\": len(test_queries) * 5,\r\n        }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Task { id: string; description: string; status: \"pending\"|\"running\"|\"done\"|\"failed\"; dependencies: string[]; result?: string }\r\nclass Orchestrator {\r\n  private tasks: Map&lt;string,Task&gt; = new Map()\r\n  private agents: Map&lt;string,(t:Task)=&gt;Promise&lt;string&gt;> = new Map()\r\n  registerAgent(name: string, fn: (t:Task)=>Promise&lt;string&gt;): void { this.agents.set(name,fn) }\r\n  addTask(t: Task): void { this.tasks.set(t.id,t) }\r\n  async runAll(): Promise&lt;void&gt; {\r\n    let pending = Array.from(this.tasks.values()).filter(t=>t.status===\"pending\")\r\n    while(pending.length) {\r\n      const runnable = pending.filter(t=>t.dependencies.every(d=>this.tasks.get(d)?.status===\"done\"))\r\n      await Promise.all(runnable.map(async t => { t.status=\"running\"\r\n        try { t.result = await this.agents.get(\"default\")!(t); t.status=\"done\" } catch { t.status=\"failed\" }\r\n      }))\r\n      pending = Array.from(this.tasks.values()).filter(t=>t.status===\"pending\")\r\n    }\r\n  }\r\n  getResults(): Task[] { return Array.from(this.tasks.values()) }\r\n}\r\nclass Decomposer {\r\n  decompose(goal: string): Task[] {\r\n    const parts = goal.split(\". \"); const tasks: Task[] = []\r\n    parts.forEach((p,i) => tasks.push({id:`task-${i}`,description:p,status:\"pending\",dependencies:i>0?[`task-${i-1}`]:[],result:undefined}))\r\n    return tasks\r\n  }\r\n}\r\nexport { Orchestrator, Task, Decomposer }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hybrid search"
          }), ": Implement hybrid search (BM25 + dense vector + RRF) on your RAG pipeline. Measure recall@10 improvement over pure vector search."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "HNSW tuning"
          }), ": Create a test dataset of 10K vectors. Tune HNSW parameters (M, ef_construction, ef_search) to minimize latency while maintaining >0.95 recall."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Re-ranker deployment"
          }), ": Add a cross-encoder re-ranker to your RAG pipeline. Measure NDCG@10 improvement and the latency cost."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-modal search"
          }), ": Add image search to your RAG pipeline. Index 20+ images and test with text queries that should match image content."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Vector DB migration"
          }), ": Export your ChromaDB vectors, import into Qdrant (or pgvector), and verify migration accuracy with 10 test queries."]
        }), "\n"]
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