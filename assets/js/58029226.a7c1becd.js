"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[859],{

/***/ 80313
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_12_rag_vector_databases_02_embedding_models_md_580_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-12-rag-vector-databases-02-embedding-models-md-580.json
const site_docs_courses_ai_engineering_placement_12_rag_vector_databases_02_embedding_models_md_580_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/rag-vector-databases/02-embedding-models","title":"Embedding Models","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/12-rag-vector-databases/02-embedding-models.md","sourceDirName":"courses/ai-engineering-placement/12-rag-vector-databases","slug":"/ai-engineering-placement/12-rag-vector-databases/02-embedding-models","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/02-embedding-models","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":159,"frontMatter":{"id":"02-embedding-models","slug":"/ai-engineering-placement/12-rag-vector-databases/02-embedding-models","title":"Embedding Models","sidebar_label":"Embedding Models","sidebar_position":159},"sidebar":"placementSidebar","previous":{"title":"Introduction to RAG","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/01-introduction-to-rag"},"next":{"title":"Vector Database Basics","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/03-vector-database-basics"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/12-rag-vector-databases/02-embedding-models.md


const frontMatter = {
	id: '02-embedding-models',
	slug: '/ai-engineering-placement/12-rag-vector-databases/02-embedding-models',
	title: 'Embedding Models',
	sidebar_label: 'Embedding Models',
	sidebar_position: 159
};
const contentTitle = 'Embedding Models';

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
  "value": "2.1 Embedding Fundamentals",
  "id": "21-embedding-fundamentals",
  "level": 2
}, {
  "value": "How Embeddings Work",
  "id": "how-embeddings-work",
  "level": 3
}, {
  "value": "Pooling Strategies",
  "id": "pooling-strategies",
  "level": 3
}, {
  "value": "2.2 Model Comparison",
  "id": "22-model-comparison",
  "level": 2
}, {
  "value": "2.2.1 OpenAI Embeddings",
  "id": "221-openai-embeddings",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "2.2.2 Sentence-Transformers",
  "id": "222-sentence-transformers",
  "level": 3
}, {
  "value": "2.2.3 Cohere Embeddings",
  "id": "223-cohere-embeddings",
  "level": 3
}, {
  "value": "2.2.4 BGE (BAAI General Embedding)",
  "id": "224-bge-baai-general-embedding",
  "level": 3
}, {
  "value": "2.3 Similarity Metrics",
  "id": "23-similarity-metrics",
  "level": 2
}, {
  "value": "2.3.1 Cosine Similarity",
  "id": "231-cosine-similarity",
  "level": 3
}, {
  "value": "2.3.2 Dot Product",
  "id": "232-dot-product",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-1",
  "level": 2
}, {
  "value": "2.3.3 Euclidean Distance",
  "id": "233-euclidean-distance",
  "level": 3
}, {
  "value": "2.3.4 Similarity Metric Comparison",
  "id": "234-similarity-metric-comparison",
  "level": 3
}, {
  "value": "2.4 Dimensionality Reduction",
  "id": "24-dimensionality-reduction",
  "level": 2
}, {
  "value": "2.4.1 Matryoshka Embeddings",
  "id": "241-matryoshka-embeddings",
  "level": 3
}, {
  "value": "2.4.2 PCA Dimensionality Reduction",
  "id": "242-pca-dimensionality-reduction",
  "level": 3
}, {
  "value": "2.4.3 Binary Quantization",
  "id": "243-binary-quantization",
  "level": 3
}, {
  "value": "2.4.4 Scalar Quantization (int8)",
  "id": "244-scalar-quantization-int8",
  "level": 3
}, {
  "value": "2.5 Embedding Evaluation",
  "id": "25-embedding-evaluation",
  "level": 2
}, {
  "value": "2.5.1 BEIR Benchmark",
  "id": "251-beir-benchmark",
  "level": 3
}, {
  "value": "2.5.2 MTEB (Massive Text Embedding Benchmark)",
  "id": "252-mteb-massive-text-embedding-benchmark",
  "level": 3
}, {
  "value": "2.5.3 Retrieval Quality Metrics",
  "id": "253-retrieval-quality-metrics",
  "level": 3
}, {
  "value": "2.6 Production Embeddings",
  "id": "26-production-embeddings",
  "level": 2
}, {
  "value": "2.6.1 Embedding Caching",
  "id": "261-embedding-caching",
  "level": 3
}, {
  "value": "2.6.2 Batching with Rate Limits",
  "id": "262-batching-with-rate-limits",
  "level": 3
}, {
  "value": "2.6.3 Cost Management",
  "id": "263-cost-management",
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
        id: "embedding-models",
        children: "Embedding Models"
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
            children: "Understand embedding models and their role in semantic search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare text embedding models (OpenAI, sentence-transformers, Cohere, BGE)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement embedding generation and similarity computation pipelines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate embedding quality using retrieval benchmarks (BEIR, MTEB)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply dimensionality reduction and quantization for storage efficiency"
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
            children: "2.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedding Fundamentals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tokenization, contextual encoding, vector representation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model Comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenAI text-embedding-3, sentence-transformers, Cohere, BGE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Similarity Metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cosine similarity, dot product, Euclidean distance, MIP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dimensionality Reduction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCA, Matryoshka embeddings, binary quantization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedding Evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BEIR, MTEB benchmarks, retrieval precision"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production Embeddings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caching, batching, rate limits, cost management"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    A[Text Input] --> B[Tokenization]\r\n    B --> C[Transformer Encoder]\r\n    C --> D[Pooling Strategy]\r\n    D --> E[Embedding Vector]\r\n    E --> F[Normalization]\r\n    F --> G[Store in Vector DB]\r\n    G --> H[Query]\r\n    H --> I[Similarity Search]\r\n    I --> J[Ranked Results]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-embedding-fundamentals",
      children: "2.1 Embedding Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Embedding models convert text into dense vector representations that capture semantic meaning. Unlike bag-of-words approaches, embedding vectors encode context, word order, and semantic relationships."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-embeddings-work",
      children: "How Embeddings Work"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tokenization"
        }), ": Split text into tokens (subwords or words)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encoding"
        }), ": Pass tokens through a transformer to produce contextual representations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pooling"
        }), ": Aggregate token representations into a single vector (CLS token, mean pooling, or weighted pooling)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Normalization"
        }), ": Normalize the output vector to unit length for cosine similarity"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import List, Optional\r\nimport numpy as np\r\n\r\nclass EmbeddingModel:\r\n    def __init__(self, dimension: int = 768, model_name: str = \"base-embedder\"):\r\n        self.dimension = dimension\r\n        self.model_name = model_name\r\n\r\n    def encode(self, text: str) -> np.ndarray:\r\n        text_bytes = text.encode(\"utf-8\")\r\n        seed = int.from_bytes(text_bytes[:8].ljust(8, b\"\\x00\"), \"big\") % (2**31)\r\n        rng = np.random.RandomState(seed)\r\n        vec = rng.randn(self.dimension)\r\n        for i, b in enumerate(text_bytes):\r\n            vec[i % self.dimension] += (b - 128) / 128.0\r\n        return vec / np.linalg.norm(vec)\r\n\r\n    def encode_batch(self, texts: List[str]) -> np.ndarray:\r\n        return np.array([self.encode(t) for t in texts])\r\n\r\n    def normalize(self, vec: np.ndarray) -> np.ndarray:\r\n        norm = np.linalg.norm(vec)\r\n        return vec / norm if norm > 0 else vec\r\n\r\nmodel = EmbeddingModel(dimension=384)\r\nemb = model.encode(\"RAG with vector databases\")\r\nprint(f\"Embedding shape: {emb.shape}\")\r\nprint(f\"L2 norm: {np.linalg.norm(emb):.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pooling-strategies",
      children: "Pooling Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The pooling strategy determines how token-level representations are combined into a single sentence embedding."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Conceptual pooling strategies\r\nimport numpy as np\r\n\r\ndef mean_pooling(token_embeddings: np.ndarray, attention_mask: np.ndarray) -> np.ndarray:\r\n    mask = attention_mask[:, :, np.newaxis].astype(float)\r\n    masked = token_embeddings * mask\r\n    summed = np.sum(masked, axis=1)\r\n    counts = np.clip(np.sum(attention_mask, axis=1, keepdims=True), 1, None)\r\n    return summed / counts\r\n\r\ndef cls_pooling(token_embeddings: np.ndarray) -> np.ndarray:\r\n    return token_embeddings[:, 0, :]  # First token [CLS]\r\n\r\ndef max_pooling(token_embeddings: np.ndarray, attention_mask: np.ndarray) -> np.ndarray:\r\n    mask = attention_mask[:, :, np.newaxis].astype(float)\r\n    masked = token_embeddings * mask + (1 - mask) * -1e9\r\n    return np.max(masked, axis=1)\r\n\r\n## Simulated token embeddings: (batch=2, tokens=5, dim=4)\r\nsimulated = np.random.randn(2, 5, 4)\r\nmask = np.ones((2, 5))\r\nprint(f\"Mean pooled shape: {mean_pooling(simulated, mask).shape}\")\r\nprint(f\"CLS pooled shape: {cls_pooling(simulated).shape}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-model-comparison",
      children: "2.2 Model Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "221-openai-embeddings",
      children: "2.2.1 OpenAI Embeddings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["OpenAI's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "text-embedding-3-small"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "text-embedding-3-large"
      }), " offer high-quality embeddings with configurable dimensions (256-3072)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from openai import OpenAI\r\n\r\nclass OpenAIEmbedder:\r\n    def __init__(\r\n        self,\r\n        model: str = \"text-embedding-3-small\",\r\n        dimensions: Optional[int] = None,\r\n        client=None,\r\n    ):\r\n        self.model = model\r\n        self.dimensions = dimensions\r\n        self.client = client or OpenAI()\r\n\r\n    def embed(self, text: str) -> List[float]:\r\n        kwargs = {\"model\": self.model, \"input\": text}\r\n        if self.dimensions:\r\n            kwargs[\"dimensions\"] = self.dimensions\r\n\r\n        response = self.client.embeddings.create(**kwargs)\r\n        return response.data[0].embedding\r\n\r\n    def embed_batch(self, texts: List[str]) -> List[List[float]]:\r\n        kwargs = {\"model\": self.model, \"input\": texts}\r\n        if self.dimensions:\r\n            kwargs[\"dimensions\"] = self.dimensions\r\n\r\n        response = self.client.embeddings.create(**kwargs)\r\n        sorted_data = sorted(response.data, key=lambda x: x.index)\r\n        return [item.embedding for item in sorted_data]\r\n\r\n## Mock for demonstration\r\nclass MockOpenAIEmbedder(OpenAIEmbedder):\r\n    def embed(self, text: str) -> List[float]:\r\n        rng = np.random.RandomState(hash(text) % (2**31))\r\n        vec = rng.randn(self.dimensions or 1536).tolist()\r\n        norm = np.linalg.norm(vec)\r\n        return [v / norm for v in vec]\r\n\r\nembedder = MockOpenAIEmbedder(model=\"text-embedding-3-small\", dimensions=256)\r\nemb = embedder.embed(\"RAG pipeline with OpenAI embeddings\")\r\nprint(f\"OpenAI embedding (dim={len(emb)}): first 3 values = {emb[:3]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "222-sentence-transformers",
      children: "2.2.2 Sentence-Transformers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Open-source embedding models from Hugging Face, fine-tuned for semantic similarity."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SentenceTransformerEmbedder:\r\n    def __init__(self, model_name: str = \"all-MiniLM-L6-v2\"):\r\n        self.model_name = model_name\r\n        self.dimension = {\r\n            \"all-MiniLM-L6-v2\": 384,\r\n            \"all-mpnet-base-v2\": 768,\r\n            \"BAAI/bge-small-en-v1.5\": 384,\r\n            \"BAAI/bge-base-en-v1.5\": 768,\r\n        }.get(model_name, 768)\r\n\r\n    def encode(self, text: str) -> np.ndarray:\r\n        text_bytes = text.encode(\"utf-8\")\r\n        seed = int.from_bytes(text_bytes[:8].ljust(8, b\"\\x00\"), \"big\") % (2**31)\r\n        rng = np.random.RandomState(seed)\r\n        vec = rng.randn(self.dimension)\r\n        for i, b in enumerate(text_bytes):\r\n            vec[i % self.dimension] += (b - 128) / 128.0\r\n        return vec / np.linalg.norm(vec)\r\n\r\n    def encode_batch(self, texts: List[str]) -> np.ndarray:\r\n        return np.array([self.encode(t) for t in texts])\r\n\r\nst = SentenceTransformerEmbedder(\"all-MiniLM-L6-v2\")\r\nemb = st.encode(\"sentence-transformers for embedding generation\")\r\nprint(f\"Sentence-transformers embedding dim: {st.dimension}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "223-cohere-embeddings",
      children: "2.2.3 Cohere Embeddings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cohere offers multilingual embed models with focused on retrieval quality."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class CohereEmbedder:\r\n    def __init__(self, model: str = \"embed-english-v3.0\", input_type: str = \"search_document\"):\r\n        self.model = model\r\n        self.input_type = input_type\r\n\r\n    def embed(self, text: str) -> List[float]:\r\n        # import cohere\r\n        # co = cohere.Client(\"API_KEY\")\r\n        # response = co.embed(texts=[text], model=self.model, input_type=self.input_type)\r\n        # return response.embeddings[0]\r\n        rng = np.random.RandomState(hash(text) % (2**31))\r\n        vec = rng.randn(1024).tolist()\r\n        norm = np.linalg.norm(vec)\r\n        return [v / norm for v in vec]\r\n\r\n    def embed_batch(self, texts: List[str], input_type: str = None) -> List[List[float]]:\r\n        return [self.embed(t) for t in texts]\r\n\r\ncohere_emb = CohereEmbedder()\r\nprint(f\"Cohere embedding dim: {len(cohere_emb.embed('test'))}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "224-bge-baai-general-embedding",
      children: "2.2.4 BGE (BAAI General Embedding)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BGE models are among the top-ranked open-source embedding models on MTEB leaderboard."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BGEEmbedder:\r\n    def __init__(self, model_name: str = \"BAAI/bge-base-en-v1.5\"):\r\n        self.model_name = model_name\r\n        self.dimension = 768\r\n\r\n    def encode(self, text: str, query_mode: bool = False) -> np.ndarray:\r\n        if query_mode:\r\n            text = f\"Represent this sentence for searching relevant passages: {text}\"\r\n        rng = np.random.RandomState(hash(text) % (2**31))\r\n        vec = rng.randn(self.dimension)\r\n        return vec / np.linalg.norm(vec)\r\n\r\n    def encode_queries(self, queries: List[str]) -> np.ndarray:\r\n        return np.array([self.encode(q, query_mode=True) for q in queries])\r\n\r\n    def encode_documents(self, documents: List[str]) -> np.ndarray:\r\n        return np.array([self.encode(d) for d in documents])\r\n\r\nbge = BGEEmbedder()\r\nquery_vec = bge.encode(\"How does RAG work?\", query_mode=True)\r\ndoc_vec = bge.encode(\"Retrieval-Augmented Generation is a technique that combines retrieval with generation.\")\r\nsim = float(np.dot(query_vec, doc_vec))\r\nprint(f\"BGE query-doc similarity: {sim:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23-similarity-metrics",
      children: "2.3 Similarity Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "231-cosine-similarity",
      children: "2.3.1 Cosine Similarity"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Most common metric for embedding similarity. Computes the cosine of the angle between two vectors."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def cosine_similarity(a: np.ndarray, b: np.ndarray) -> float:\r\n    dot = float(np.dot(a, b))\r\n    norm_a = float(np.linalg.norm(a))\r\n    norm_b = float(np.linalg.norm(b))\r\n    return dot / (norm_a * norm_b) if norm_a > 0 and norm_b > 0 else 0.0\r\n\r\ndef cosine_similarity_matrix(embeddings: np.ndarray, query: np.ndarray) -> np.ndarray:\r\n    norms = np.linalg.norm(embeddings, axis=1, keepdims=True)\r\n    normed_embs = embeddings / np.clip(norms, 1e-10, None)\r\n    query_norm = query / np.clip(np.linalg.norm(query), 1e-10, None)\r\n    return np.dot(normed_embs, query_norm)\r\n\r\nembs = np.random.randn(5, 384)\r\nembs = embs / np.linalg.norm(embs, axis=1, keepdims=True)\r\nquery = np.random.randn(384)\r\nquery = query / np.linalg.norm(query)\r\n\r\nscores = cosine_similarity_matrix(embs, query)\r\nprint(f\"Similarity scores: {scores}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "232-dot-product",
      children: "2.3.2 Dot Product"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When vectors are normalized, dot product is equivalent to cosine similarity. Unnormalized dot product favors larger magnitude vectors."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def dot_product(a: np.ndarray, b: np.ndarray) -> float:\r\n    return float(np.dot(a, b))\r\n\r\ndef max_inner_product(embeddings: np.ndarray, query: np.ndarray) -> np.ndarray:\r\n    return np.dot(embeddings, query)\r\n\r\n## Compare cosine vs dot on normalized vectors\r\na_norm = np.array([1.0, 0.0])\r\nb_norm = np.array([0.707, 0.707])\r\nprint(f\"Cosine (normalized): {cosine_similarity(a_norm, b_norm):.4f}\")\r\nprint(f\"Dot (normalized): {dot_product(a_norm, b_norm):.4f}\")\r\n\r\n## Unnormalized vectors\r\na_unnorm = np.array([5.0, 0.0])\r\nb_unnorm = np.array([3.5, 3.5])\r\nprint(f\"Cosine (unnormalized): {cosine_similarity(a_unnorm, b_unnorm):.4f}\")\r\nprint(f\"Dot (unnormalized): {dot_product(a_unnorm, b_unnorm):.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-1",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "233-euclidean-distance",
      children: "2.3.3 Euclidean Distance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Measures straight-line distance between vectors. Convert to similarity via 1/(1+distance)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def euclidean_distance(a: np.ndarray, b: np.ndarray) -> float:\r\n    return float(np.linalg.norm(a - b))\r\n\r\ndef euclidean_similarity_matrix(embeddings: np.ndarray, query: np.ndarray) -> np.ndarray:\r\n    diffs = embeddings - query\r\n    distances = np.linalg.norm(diffs, axis=1)\r\n    return 1.0 / (1.0 + distances)\r\n\r\ndists = euclidean_similarity_matrix(embs, query)\r\nprint(f\"Euclidean similarities: {dists}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "234-similarity-metric-comparison",
      children: "2.3.4 Similarity Metric Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Range"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Normalized Inputs"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cosine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[-1, 1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default for most text embeddings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dot Product"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[-inf, inf]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required for bounded range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIP for normalized vectors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Euclidean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, inf]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Geographic / physical proximity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SimilarityComputer:\r\n    def __init__(self, metric: str = \"cosine\"):\r\n        self.metric = metric\r\n\r\n    def compare(self, a: np.ndarray, b: np.ndarray) -> float:\r\n        if self.metric == \"cosine\":\r\n            return cosine_similarity(a, b)\r\n        elif self.metric == \"dot\":\r\n            return dot_product(a, b)\r\n        elif self.metric == \"euclidean\":\r\n            return 1.0 / (1.0 + euclidean_distance(a, b))\r\n        else:\r\n            raise ValueError(f\"Unknown metric: {self.metric}\")\r\n\r\n    def compare_batch(self, embeddings: np.ndarray, query: np.ndarray) -> np.ndarray:\r\n        if self.metric == \"cosine\":\r\n            return cosine_similarity_matrix(embeddings, query)\r\n        elif self.metric == \"euclidean\":\r\n            return euclidean_similarity_matrix(embeddings, query)\r\n        else:\r\n            return np.array([self.compare(e, query) for e in embeddings])\r\n\r\nfor metric in [\"cosine\", \"euclidean\"]:\r\n    comp = SimilarityComputer(metric)\r\n    scores = comp.compare_batch(embs, query)\r\n    print(f\"{metric}: top score = {scores.max():.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24-dimensionality-reduction",
      children: "2.4 Dimensionality Reduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "241-matryoshka-embeddings",
      children: "2.4.1 Matryoshka Embeddings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Models like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "text-embedding-3-small"
      }), " support Matryoshka Representation Learning — the first N dimensions form a valid, searchable embedding at any depth."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MatryoshkaEmbedder:\r\n    def __init__(self, base_dimension: int = 3072):\r\n        self.base_dim = base_dimension\r\n\r\n    def embed_at_dimension(self, text: str, target_dim: int) -> List[float]:\r\n        full_emb = self._get_full_embedding(text)\r\n        return full_emb[:target_dim]\r\n\r\n    def _get_full_embedding(self, text: str) -> List[float]:\r\n        rng = np.random.RandomState(hash(text) % (2**31))\r\n        vec = rng.randn(self.base_dim).tolist()\r\n        norm = np.linalg.norm(vec)\r\n        return [v / norm for v in vec]\r\n\r\n    def compare_dimensions(self, text: str, dims: List[int]) -> Dict[int, int]:\r\n        results = {}\r\n        full = np.array(self._get_full_embedding(text))\r\n        for d in dims:\r\n            truncated = full[:d]\r\n            results[d] = len(truncated)\r\n        return results\r\n\r\nmatryoshka = MatryoshkaEmbedder()\r\nfor dim in [256, 512, 1024, 2048]:\r\n    emb = matryoshka.embed_at_dimension(\"Efficient embedding storage\", dim)\r\n    print(f\"Dim {dim}: length = {len(emb)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "242-pca-dimensionality-reduction",
      children: "2.4.2 PCA Dimensionality Reduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Principal Component Analysis reduces embedding dimension while preserving variance."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Tuple\r\n\r\nclass PCAEmbeddingReducer:\r\n    def __init__(self, n_components: int = 256):\r\n        self.n_components = n_components\r\n        self.components: Optional[np.ndarray] = None\r\n        self.mean: Optional[np.ndarray] = None\r\n\r\n    def fit(self, embeddings: np.ndarray):\r\n        self.mean = np.mean(embeddings, axis=0)\r\n        centered = embeddings - self.mean\r\n        cov = np.cov(centered.T)\r\n        eigenvalues, eigenvectors = np.linalg.eigh(cov)\r\n        idx = np.argsort(eigenvalues)[::-1]\r\n        self.components = eigenvectors[:, idx[:self.n_components]]\r\n\r\n    def transform(self, embeddings: np.ndarray) -> np.ndarray:\r\n        if self.components is None:\r\n            raise ValueError(\"Model not fitted\")\r\n        centered = embeddings - self.mean\r\n        return np.dot(centered, self.components)\r\n\r\n    def fit_transform(self, embeddings: np.ndarray) -> np.ndarray:\r\n        self.fit(embeddings)\r\n        return self.transform(embeddings)\r\n\r\npca = PCAEmbeddingReducer(n_components=128)\r\noriginal = np.random.randn(100, 768)\r\nreduced = pca.fit_transform(original)\r\nprint(f\"Original: {original.shape}, Reduced: {reduced.shape}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "243-binary-quantization",
      children: "2.4.3 Binary Quantization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Convert float32 embeddings to binary (1-bit) for 32x storage reduction."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def binary_quantize(embeddings: np.ndarray) -> np.ndarray:\r\n    return (embeddings > 0).astype(np.int8)\r\n\r\ndef binary_similarity(binary_emb: np.ndarray, binary_query: np.ndarray) -> float:\r\n    xor_sum = np.sum(binary_emb ^ binary_query)\r\n    return 1.0 - xor_sum / binary_emb.shape[-1]\r\n\r\nembeddings = np.random.randn(10, 384)\r\nbinary = binary_quantize(embeddings)\r\nquery_binary = binary_quantize(np.random.randn(384))\r\n\r\nfor i in range(3):\r\n    sim = binary_similarity(binary[i], query_binary)\r\n    print(f\"Binary similarity {i}: {sim:.4f}\")\r\n\r\nprint(f\"Original size: {embeddings.nbytes} bytes\")\r\nprint(f\"Binary size: {binary.nbytes} bytes\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "244-scalar-quantization-int8",
      children: "2.4.4 Scalar Quantization (int8)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Convert float32 to int8 for 4x storage reduction."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def scalar_quantize(\r\n    embeddings: np.ndarray,\r\n    bounds: Tuple[float, float] = None,\r\n) -> Tuple[np.ndarray, np.ndarray]:\r\n    if bounds is None:\r\n        min_val = np.min(embeddings)\r\n        max_val = np.max(embeddings)\r\n    else:\r\n        min_val, max_val = bounds\r\n\r\n    scale = 127.0 / max(abs(min_val), abs(max_val))\r\n    quantized = np.clip(np.round(embeddings * scale), -128, 127).astype(np.int8)\r\n    return quantized, np.array([min_val, max_val, scale])\r\n\r\ndef scalar_dequantize(quantized: np.ndarray, params: np.ndarray) -> np.ndarray:\r\n    _, _, scale = params\r\n    return quantized.astype(np.float32) / scale\r\n\r\nfloat_embs = np.random.randn(100, 384).astype(np.float32)\r\nquantized, params = scalar_quantize(float_embs)\r\ndequantized = scalar_dequantize(quantized, params)\r\n\r\nmse = np.mean((float_embs - dequantized) ** 2)\r\nprint(f\"Quantization MSE: {mse:.6f}\")\r\nprint(f\"Float32 size: {float_embs.nbytes} bytes\")\r\nprint(f\"Int8 size: {quantized.nbytes} bytes\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25-embedding-evaluation",
      children: "2.5 Embedding Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "251-beir-benchmark",
      children: "2.5.1 BEIR Benchmark"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BEIR (Benchmarking Information Retrieval) evaluates embedding models across 18+ datasets."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\r\nclass BEIRDataset:\r\n    name: str\r\n    num_queries: int\r\n    num_docs: int\r\n    domain: str\r\n\r\nBEIR_DATASETS = [\r\n    BEIRDataset(\"TREC-COVID\", 50, 171332, \"biomedical\"),\r\n    BEIRDataset(\"NFCorpus\", 324, 3633, \"medical\"),\r\n    BEIRDataset(\"FiQA\", 648, 57638, \"finance\"),\r\n    BEIRDataset(\"ArguAna\", 1406, 8674, \"argumentation\"),\r\n    BEIRDataset(\"SciDocs\", 1000, 25657, \"scientific\"),\r\n    BEIRDataset(\"Quora\", 5000, 522931, \"general\"),\r\n]\r\n\r\nclass BEIREvaluator:\r\n    def __init__(self, embedder):\r\n        self.embedder = embedder\r\n\r\n    def evaluate_ndcg(\r\n        self,\r\n        queries: List[str],\r\n        documents: List[str],\r\n        relevant_pairs: Dict[str, List[int]],\r\n    ) -> float:\r\n        # Simplified NDCG@10 computation\r\n        query_embs = self.embedder.encode_batch(queries)\r\n        doc_embs = self.embedder.encode_batch(documents)\r\n        scores = np.dot(query_embs, doc_embs.T)\r\n\r\n        total_ndcg = 0.0\r\n        for i, query_id in enumerate(relevant_pairs.keys()):\r\n            ranking = np.argsort(scores[i])[::-1]\r\n            relevant = set(relevant_pairs[query_id])\r\n            dcg = 0.0\r\n            idcg = 0.0\r\n            for k in range(min(10, len(ranking))):\r\n                if ranking[k] in relevant:\r\n                    dcg += 1.0 / np.log2(k + 2)\r\n                if k < len(relevant):\r\n                    idcg += 1.0 / np.log2(k + 2)\r\n            total_ndcg += dcg / idcg if idcg > 0 else 0\r\n\r\n        return total_ndcg / len(relevant_pairs) if relevant_pairs else 0\r\n\r\nevaluator = BEIREvaluator(SentenceTransformerEmbedder())\r\nprint(\"BEIR evaluator ready for benchmarking\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "252-mteb-massive-text-embedding-benchmark",
      children: "2.5.2 MTEB (Massive Text Embedding Benchmark)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MTEB evaluates across 8 tasks including classification, clustering, pair classification, reranking, retrieval, STS, summarization, and bitext mining."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MTEBTask:\r\n    def __init__(self, name: str, task_type: str, metric: str):\r\n        self.name = name\r\n        self.task_type = task_type\r\n        self.metric = metric\r\n\r\nMTEB_TASKS = [\r\n    MTEBTask(\"AmazonCounterfactualClassification\", \"classification\", \"accuracy\"),\r\n    MTEBTask(\"Banking77Classification\", \"classification\", \"accuracy\"),\r\n    MTEBTask(\"SprintDuplicateQuestions\", \"pair_classification\", \"ap\"),\r\n    MTEBTask(\"AskUbuntuDupQuestions\", \"reranking\", \"map\"),\r\n    MTEBTask(\"ArguAna\", \"retrieval\", \"ndcg_at_10\"),\r\n    MTEBTask(\"STSBenchmark\", \"sts\", \"spearman\"),\r\n    MTEBTask(\"SummEval\", \"summarization\", \"spearman\"),\r\n]\r\n\r\ndef select_embedding_model(task_type: str, budget: str = \"medium\") -> str:\r\n    recommendations = {\r\n        \"classification\": {\"low\": \"all-MiniLM-L6-v2\", \"medium\": \"bge-base-en-v1.5\", \"high\": \"text-embedding-3-large\"},\r\n        \"retrieval\": {\"low\": \"bge-small-en-v1.5\", \"medium\": \"bge-base-en-v1.5\", \"high\": \"text-embedding-3-large\"},\r\n        \"reranking\": {\"low\": \"ms-marco-MiniLM-L-6-v2\", \"medium\": \"bge-reranker-base\", \"high\": \"cohere-rerank-v3\"},\r\n        \"sts\": {\"low\": \"all-MiniLM-L6-v2\", \"medium\": \"all-mpnet-base-v2\", \"high\": \"text-embedding-3-large\"},\r\n    }\r\n    return recommendations.get(task_type, {}).get(budget, \"all-MiniLM-L6-v2\")\r\n\r\nfor task in MTEB_TASKS[:3]:\r\n    model = select_embedding_model(task.task_type, \"medium\")\r\n    print(f\"{task.name} ({task.task_type}): {model}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "253-retrieval-quality-metrics",
      children: "2.5.3 Retrieval Quality Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def mean_reciprocal_rank(\r\n    query_results: List[List[int]],\r\n    relevant: List[Set[int]],\r\n    k: int = 10,\r\n) -> float:\r\n    rr_sum = 0.0\r\n    for results, rel_set in zip(query_results, relevant):\r\n        for rank, doc_id in enumerate(results[:k], 1):\r\n            if doc_id in rel_set:\r\n                rr_sum += 1.0 / rank\r\n                break\r\n    return rr_sum / len(query_results) if query_results else 0\r\n\r\ndef recall_at_k(\r\n    query_results: List[List[int]],\r\n    relevant: List[Set[int]],\r\n    k: int = 10,\r\n) -> float:\r\n    recall_sum = 0.0\r\n    for results, rel_set in zip(query_results, relevant):\r\n        if not rel_set:\r\n            continue\r\n        retrieved = set(results[:k])\r\n        recall_sum += len(retrieved & rel_set) / len(rel_set)\r\n    return recall_sum / len(query_results) if query_results else 0\r\n\r\ndef precision_at_k(\r\n    query_results: List[List[int]],\r\n    relevant: List[Set[int]],\r\n    k: int = 10,\r\n) -> float:\r\n    prec_sum = 0.0\r\n    for results, rel_set in zip(query_results, relevant):\r\n        retrieved = set(results[:k])\r\n        if not retrieved:\r\n            continue\r\n        prec_sum += len(retrieved & rel_set) / k\r\n    return prec_sum / len(query_results) if query_results else 0\r\n\r\n## Example evaluation\r\nresults = [[3, 5, 1, 7, 2], [1, 4, 2, 8, 3]]\r\nrel_sets = [{1, 2, 3}, {1, 4}]\r\nprint(f\"MRR@10: {mean_reciprocal_rank(results, rel_sets):.4f}\")\r\nprint(f\"Recall@5: {recall_at_k(results, rel_sets, 5):.4f}\")\r\nprint(f\"Precision@5: {precision_at_k(results, rel_sets, 5):.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "26-production-embeddings",
      children: "2.6 Production Embeddings"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "261-embedding-caching",
      children: "2.6.1 Embedding Caching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Avoid redundant API calls for identical or similar text."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import hashlib\r\nfrom typing import Dict, Optional\r\n\r\nclass EmbeddingCache:\r\n    def __init__(self, max_size: int = 10000):\r\n        self.cache: Dict[str, List[float]] = {}\r\n        self.max_size = max_size\r\n\r\n    def _key(self, text: str, model: str) -> str:\r\n        return hashlib.sha256(f\"{model}:{text}\".encode()).hexdigest()\r\n\r\n    def get(self, text: str, model: str) -> Optional[List[float]]:\r\n        return self.cache.get(self._key(text, model))\r\n\r\n    def set(self, text: str, embedding: List[float], model: str):\r\n        key = self._key(text, model)\r\n        if len(self.cache) >= self.max_size:\r\n            self.cache.pop(next(iter(self.cache)))\r\n        self.cache[key] = embedding\r\n\r\n    def stats(self) -> Dict:\r\n        return {\"size\": len(self.cache), \"max_size\": self.max_size}\r\n\r\ncache = EmbeddingCache(max_size=5000)\r\ncache.set(\"RAG pipeline\", [0.1, 0.2, 0.3], \"text-embedding-3-small\")\r\ncached = cache.get(\"RAG pipeline\", \"text-embedding-3-small\")\r\nprint(f\"Cached embedding: {cached[:3]}... (len={len(cached)})\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "262-batching-with-rate-limits",
      children: "2.6.2 Batching with Rate Limits"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\r\nfrom typing import List, Callable\r\nfrom dataclasses import dataclass\r\n\r\n@dataclass\r\nclass RateLimitConfig:\r\n    requests_per_minute: int\r\n    tokens_per_minute: int\r\n\r\nclass RateLimitedEmbedder:\r\n    def __init__(self, embed_fn: Callable, config: RateLimitConfig):\r\n        self.embed_fn = embed_fn\r\n        self.config = config\r\n        self.request_count = 0\r\n        self.token_count = 0\r\n        self.window_start = time.time()\r\n\r\n    def embed_batch(self, texts: List[str]) -> List[List[float]]:\r\n        results = []\r\n        for text in texts:\r\n            self._wait_if_needed(len(text))\r\n            results.append(self.embed_fn(text))\r\n        return results\r\n\r\n    def _wait_if_needed(self, estimated_tokens: int):\r\n        now = time.time()\r\n        elapsed = now - self.window_start\r\n\r\n        if elapsed >= 60:\r\n            self.request_count = 0\r\n            self.token_count = 0\r\n            self.window_start = now\r\n            return\r\n\r\n        self.request_count += 1\r\n        self.token_count += estimated_tokens\r\n\r\n        if self.request_count >= self.config.requests_per_minute or self.token_count >= self.config.tokens_per_minute:\r\n            sleep_time = 60 - elapsed + 1\r\n            time.sleep(sleep_time)\r\n            self.request_count = 0\r\n            self.token_count = 0\r\n            self.window_start = time.time()\r\n\r\nconfig = RateLimitConfig(requests_per_minute=100, tokens_per_minute=100000)\r\nprint(f\"Rate limited embedder ready: {config}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "263-cost-management",
      children: "2.6.3 Cost Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\r\nclass EmbeddingCost:\r\n    model: str\r\n    price_per_1k_tokens: float\r\n    dimension: int\r\n\r\nEMBEDDING_COSTS = {\r\n    \"text-embedding-3-small\": EmbeddingCost(\"text-embedding-3-small\", 0.00002, 1536),\r\n    \"text-embedding-3-large\": EmbeddingCost(\"text-embedding-3-large\", 0.00013, 3072),\r\n    \"cohere-embed-english-v3.0\": EmbeddingCost(\"cohere-embed-english-v3.0\", 0.00010, 1024),\r\n}\r\n\r\ndef estimate_embedding_cost(\r\n    num_documents: int,\r\n    avg_tokens_per_doc: int,\r\n    model: str = \"text-embedding-3-small\",\r\n) -> Dict:\r\n    cost_info = EMBEDDING_COSTS.get(model)\r\n    if not cost_info:\r\n        return {\"error\": \"Unknown model\"}\r\n\r\n    total_tokens = num_documents * avg_tokens_per_doc\r\n    total_cost = (total_tokens / 1000) * cost_info.price_per_1k_tokens\r\n\r\n    return {\r\n        \"model\": model,\r\n        \"num_documents\": num_documents,\r\n        \"avg_tokens_per_doc\": avg_tokens_per_doc,\r\n        \"total_tokens\": total_tokens,\r\n        \"estimated_cost\": round(total_cost, 6),\r\n        \"dimension\": cost_info.dimension,\r\n    }\r\n\r\nprint(estimate_embedding_cost(100000, 256, \"text-embedding-3-small\"))\r\nprint(estimate_embedding_cost(100000, 256, \"text-embedding-3-large\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Embedding models convert text into dense vector representations that capture semantic meaning, enabling similarity search in RAG pipelines. Key embedding models include OpenAI's text-embedding-3 series (API-based,.\r\nconfigurable dimensions), sentence-transformers (open-source, locally runnable), Cohere (multilingual, retrieval-focused), and BGE (top-ranked on MTEB). Similarity metrics — cosine, dot product, and.\r\nEuclidean distance — determin similarity between embeddings. Storage optimization techniques like Matryoshka embeddings, PCA, binary quantization, and scalar quantization reduce memory footprint while maintaining search quality. The BEIR and.\r\nMTEB benchmarks provide standardized evaluation across retrieval and other embedding tasks. Production deployments require caching, rate-limit management, and cost tracking."
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
            children: "Match model to task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use small models (384d) for high-throughput, large models (3072d) for precision-critical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Normalize embeddings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always normalize to unit length for consistent cosine similarity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use Matryoshka output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store full embeddings, truncate at query time for flexibility"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quantize for scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary quantization reduces storage 32x with minimal accuracy loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache aggressively"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedding caching reduces API costs for repeated content"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Benchmark your data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MTEB leaderboard scores don't always translate to your specific domain"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "rag02-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What is the difference between a bi-encoder and a cross-encoder for embeddings?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A bi-encoder independently encodes the query and document into separate vectors, then compares them with a similarity metric (cosine, dot product). It is fast and.\nscalable because document embeddings can be pre-computed and indexed. A cross-encoder processes the query and document together in a single forward pass,.\nproducing a relevance score directly. It is more accurate because it captures query-document interactions but is computationally expensive (cannot pre-compute). In RAG systems,.\nbi-encoders are used for first-pass retrieval (retrieving top-50 from millions) while cross-encoders are used for reranking the top-50 candidates for final precision."
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
      "data-qid": "rag02-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How do Matryoshka embeddings enable flexible storage-accuracy trade-offs?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Matryoshka Representation Learning trains embeddings so that the first N dimensions at any depth form a valid, searchable sub-embedding. For OpenAI's text-embedding-3 models,.\nyou can specify dimensions=256, 512, 1024, or 2048 on the same model. Store the full vector (3072 dimensions) in the database but.\ntruncate at query time — use 256d for fast approximate search, then score with 2048d for high precision. This enables a single index to serve different accuracy/latency tiers. Storage-accuracy trade-off: 256d uses 8x less memory than 2048d with only 2-5% recall degradation on most benchmarks."
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
      "data-qid": "rag02-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: Compare cosine similarity, dot product, and Euclidean distance for embedding search.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cosine similarity measures the angle between vectors — it is the default for most text embeddings because it is invariant to vector.\nmagnitude and works when vectors are normalized. Dot product is equivalent to cosine when vectors are unit-normalized but favors larger magnitudes otherwise — use it with normalized embeddings for.\nmaximum inner product search. Euclidean distance measures straight-line distance — it works well for geospatial data but is less common for.\ntext embeddings. For normalized embeddings, all three produce identical rankings (monotonically related). Most vector databases default to cosine similarity for text use cases."
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# For normalized vectors, all three give equivalent rankings\ncosine = np.dot(a, b)  # When ||a|| = ||b|| = 1\neuclidean = 1 / (1 + np.linalg.norm(a - b))"
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
      "data-qid": "rag02-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How do you choose between OpenAI text-embedding-3-small and sentence-transformers for a production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OpenAI's text-embedding-3-small (1536 dimensions) offers state-of-the-art quality on the MTEB leaderboard, supports Matryoshka dimensions, and requires no local infrastructure — but.\nincurs per-token API cost and introduces network latency. Sentence-transformers (all-MiniLM-L6-v2: 384d, all-mpnet-base-v2: 768d) run locally with zero API cost, fixed latency,.\nand full data privacy — but require GPU memory for large batches and may underperform on specialized domains. Choose OpenAI for.\nrapid prototyping and when API costs are acceptable. Choose sentence-transformers for high-throughput, low-latency, or privacy-sensitive applications. Benchmark both on your specific domain — leaderboard rankings don't always predict domain-specific performance."
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
      "data-qid": "rag02-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: What is binary quantization and how much accuracy loss does it incur?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Binary quantization converts each float32 dimension (4 bytes) to a single bit (1 or 0 based on sign), achieving 32x storage reduction. A 384-dimensional float32 vector.\n(1536 bytes) becomes 384 bits (48 bytes). Accuracy loss is typically 2-5% recall@10 on standard benchmarks, though it varies by domain and.\ndata distribution. The similarity computation becomes a fast XOR-popcount operation, making it 10-30x faster than float32 cosine similarity. Binary quantization is ideal for.\nlarge-scale systems where memory is the bottleneck — with 10M vectors, float32 requires 60GB while binary requires only ~2GB. Always benchmark on your data before deploying."
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
      "data-qid": "rag02-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How do pooling strategies (mean, CLS, max) affect embedding quality?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Pooling aggregates token-level transformer outputs into a single sentence embedding. Mean pooling averages all token vectors weighted by attention mask — it is the most common and.\ngenerally produces the best results for sentence similarity tasks. CLS pooling takes the [CLS] token's representation — it is the default in BERT-based models and.\nworks well for classification but can be less robust for similarity search. Max pooling takes the maximum value across each dimension — it captures the most salient features but.\nloses frequency information. Most sentence embedding models (all-MiniLM, BGE) use mean pooling by default. The choice is usually made by the model architecture,.\nnot the user."
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
      "data-qid": "rag02-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: What is the BEIR benchmark and how do you interpret its results?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BEIR (Benchmarking Information Retrieval) evaluates embedding models across 18+ diverse datasets spanning biomedical (TREC-COVID), finance (FiQA), scientific (SciDocs), and general domains (Quora). It reports NDCG@10 as the primary metric. A high BEIR score (e.g.,.\n> 55 NDCG@10) indicates the model generalizes well across domains. However, BEIR scores do not guarantee performance on your specific domain — a model that scores 60 on BEIR might score 40 on legal documents if never trained on legal text. Use BEIR as a coarse filter for.\nmodel selection, then evaluate the top candidates on your own domain-specific test set with your own relevance annotations."
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
      "data-qid": "rag02-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How do you handle rate limits when generating embeddings at scale?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a RateLimitedEmbedder with a sliding window that tracks requests-per-minute and tokens-per-minute. When approaching the limit, throttle by sleeping until the window resets. Batch embeddings in groups of 10-100 to reduce per-request overhead (many providers charge per token regardless of batch size). Implement retry with exponential backoff for.\nrate limit errors (HTTP 429). Cache embeddings for repeated or near-duplicate text to avoid redundant API calls."
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: ["class RateLimitedEmbedder:\n    def __init__(self, embed_fn, rpm=100, tpm=100000):\n        self.embed_fn = embed_fn\n        self.rpm = rpm\n        self.tpm = tpm\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "def embed_batch(self, texts):\r\n    self._wait_if_needed(len(texts))\r\n    return self.embed_fn(texts)</code></pre>\n"
              })
            }), "\n  "]
          })
        })]
      }), (0,jsx_runtime.jsxs)(_components.code, {
        children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "✅ Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "🔖 Bookmark"
        }), "\n"]
      })]
    }), (0,jsx_runtime.jsxs)(_components.code, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "rag02-q9",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    Q9: What embedding dimensionality do you recommend for different types of RAG applications?\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "For most text-based RAG applications, 384-768 dimensions (all-MiniLM-L6-v2 or BGE-base) provide a good balance of accuracy, storage cost, and search speed. For.\nprecision-critical applications (legal, medical), 1024-3072 dimensions (text-embedding-3-large or Cohere embed-english-v3.0) improve recall by 3-8% at 4-8x storage cost. For high-throughput applications serving millions of vectors,.\n256-384 dimensions with binary quantization offer the best throughput-to-accuracy ratio. The rule of thumb: use the smallest dimension that meets your recall@10 target on a domain-specific validation set — don't default to the maximum just because the model supports it."
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
        "data-qid": "rag02-q10",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    Q10: How does the BGE model's instruction prefix (query mode) improve retrieval?\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BGE (BAAI General Embedding) models recommend adding an instruction prefix to queries: \"Represent this sentence for searching relevant passages: {query}\". This aligns the query embedding space with the document embedding space,.\nimproving retrieval accuracy. Without the prefix, a query embedding may lie in a different region of the vector space than document embeddings,.\nreducing similarity scores. The same principle applies to other models — Cohere uses input_type=\"search_query\" vs \"search_document\", and sentence-transformers models are often fine-tuned with a query-document contrastive loss. Always follow the model's recommended encoding convention for.\nquery vs document."
          }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "def encode(self, text, query_mode=False):\n    if query_mode:\n        text = f\"Represent this sentence for searching relevant passages: {text}\"\n    return model.encode(text)"
            })
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
        "data-qid": "rag-s2-quiz1",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "1."
          }), " What is the typical output of an embedding model for a sentence?"]
        }), "\nA. A single token ID\nB. A dense vector of floating-point numbers\nC. A probability distribution over vocabulary\nD. A binary classification label\nAnswer: B\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        "data-qid": "rag-s2-quiz2",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "2."
          }), " Which embedding model family supports Matryoshka representation learning?"]
        }), "\nA. BGE\nB. Cohere Embed\nC. OpenAI text-embedding-3\nD. all-MiniLM-L6-v2\nAnswer: C\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        "data-qid": "rag-s2-quiz3",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "3."
          }), " What is the primary advantage of binary quantization?"]
        }), "\nA. Improved search accuracy\nB. 32x storage reduction\nC. Faster model training\nD. Better multilingual support\nAnswer: B\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        "data-qid": "rag-s2-quiz4",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "4."
          }), " Which metric is most commonly used for comparing normalized text embeddings?"]
        }), "\nA. Euclidean distance\nB. Manhattan distance\nC. Cosine similarity\nD. Hamming distance\nAnswer: C\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        "data-qid": "rag-s2-quiz5",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "5."
          }), " What does BEIR benchmark evaluate?"]
        }), "\nA. Text classification accuracy\nB. Information retrieval quality across diverse domains\nC. Model training speed\nD. Embedding storage efficiency\nAnswer: B\n"]
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
            children: "Not practicing enough problems to build pattern recognition1. Write a script that compares OpenAI text-embedding-3-small (using mock data) with sentence-transformers all-MiniLM-L6-v2 on 10 sample sentences. Compute the cosine similarity matrix for each and compare the rankings."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Implement a Matryoshka embedder that stores 3072-dimensional embeddings but retrieves using only the first 256 dimensions. Measure recall@10 compared to using full dimensionality."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Build a binary quantization pipeline that converts float32 embeddings to binary, stores them, and performs similarity search. Report the accuracy loss vs full-precision embeddings on a benchmark of 1000 queries."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Create a rate-limited embedding service that queues requests, respects API rate limits (1000 RPM, 1M TPM), and processes embeddings in batches of 10. Simulate 5000 embedding requests."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Implement an embedding cache with LRU eviction policy. Cache 1000 embeddings and measure hit rate for a workload where 20% of queries repeat from the prev"
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
              children: "How does Embedding Models behave differently at scale — memory, throughput, or precision-wise?"
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
          children: "Name the technique explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Embedding Models\")."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Add a bullet describing a project that applies Embedding Models to real data, with numbers."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Mention the tools and libraries you used alongside Embedding Models (linters, test frameworks, profiling tools)."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Keep resume bullets under 15 words and start each with an action verb."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "interview-day-checklist",
        children: "Interview Day Checklist"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Rehearse a 60-second explanation of Embedding Models and one real-world analogy."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Prepare one STAR story about debugging a Embedding Models-related production issue."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Review complexity and edge cases for the classic problem in this chapter."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Have questions ready: how does the team apply Embedding Models in production today?"
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
          }), " Embedding Models builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "True."
          }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "True or False:"
          }), " You should write at least one code example for Embedding Models before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "True."
          }), " Active recall with hands-on code beats passive reading for retention."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "True or False:"
          }), " The complexity analysis for Embedding Models is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "False."
          }), " Complexity grows with input size; always state best, average, and worst case."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "True or False:"
          }), " Edge cases (empty input, invalid input, boundary values) matter for Embedding Models in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
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
          children: "The chapter that covers Embedding Models is Chapter ___ of this module. — Answer: check the module's table of contents."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The time complexity of the standard approach to 02 Embedding Models is ___. — Answer: O(n) embedding, O(log n) ANN search"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The main edge case to handle when implementing 02 Embedding Models is ___. — Answer: empty retrieval, hallucination, chunk boundary issues"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The tools commonly used to debug Embedding Models issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The related topic that connects to Embedding Models in the next chapter is ___. — Answer: see the Next Topic section."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "scenario-questions",
        children: "Scenario Questions"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Scenario:"
            }), " A teammate ships a change involving Embedding Models that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
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
            }), " A new hire asks you to explain Embedding Models in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Scenario:"
            }), " Your team's codebase has three different patterns for Embedding Models and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
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
              children: "Complete Medium exercises, explain Embedding Models to someone else"
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
          children: "Always write a one-line example of Embedding Models from memory before opening the chapter — active recall first."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Use the chapter's Revision Notes as a checklist: you have mastered Embedding Models when you can explain each bullet."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "For interviews, practice explaining Embedding Models twice: once with a technical audience, once with a non-technical audience."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Keep a personal examples file where you collect your own Embedding Models snippets; interviewers love original examples."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "memory-tricks",
        children: "Memory Tricks"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Acronym"
          }), ": build a mnemonic from the 5 key concepts of Embedding Models listed in the Chapter at a Glance table."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Story"
          }), ": link Embedding Models to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Number anchor"
          }), ": remember the complexity of Embedding Models by connecting it to a known algorithm of the same class."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Color code"
          }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Teach-back"
          }), ": explain Embedding Models to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
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
          children: "'Advanced RAG Techniques' by Andrei Lopatenko (Towards Data Science) Models"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "related-topics",
        children: "Related Topics"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Previous chapter"
          }), " in Module 12 — builds the foundation for 02 Embedding Models"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Next chapter"
          }), " — extends 02 Embedding Models with advanced techniques"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Module 07 System Design"
          }), " — how 02 Embedding Models fits into scalable production architectures"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Module 21 Interview Preparation"
          }), " — FAANG-style questions on 02 Embedding Models"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Module 19 Capstone Projects"
          }), " — end-to-end application of 02 Embedding Models"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "faqs",
        children: "FAQs"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Do I need to memorize all of 02 Embedding Models?"
          }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "What if I get stuck on an exercise?"
          }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How much time should I spend on 02 Embedding Models?"
          }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Is 02 Embedding Models asked in FAANG interviews?"
          }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "What's the fastest way to master 02 Embedding Models?"
          }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "important-notes",
        children: "Important Notes"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Embedding Models is a core requirement for the rest of this module — do not skip the examples."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Always analyze complexity (time and space) when working with Embedding Models."
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
          children: "Embedding Models emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The tools used for Embedding Models today evolved from simpler versions; the chapter covers the modern, recommended approach."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Interviewers value knowing one historical fact about Embedding Models — it shows genuine interest, not just cramming."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The library/tooling ecosystem around Embedding Models changes quickly; focus on fundamentals that remain stable."
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
              children: "02 Embedding Models is like a GPS navigation system"
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
            }), " — this chapter contributes the Embedding Models skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "flashcards",
        children: "Flashcards"
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "12ragvectordatabases-02embeddingmodels-flash1",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    What is the core concept of Embedding Models in one sentence?\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
            children: "RAG (Retrieval-Augmented Generation) grounds LLM responses in external documents retrieved at query time, reducing hallucination by 40-80% vs zero-shot generation."
          }), "\n  "]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "12ragvectordatabases-02embeddingmodels-flash2",
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
        "data-qid": "12ragvectordatabases-02embeddingmodels-flash3",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    What is the time and space complexity of the standard Embedding Models approach?\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
            children: "Retrieval: O(log n) with ANN index (HNSW/IVF). Embedding: O(n*d) where d=embedding dim. Generation: O(context_len^2) attention."
          }), "\n  "]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "12ragvectordatabases-02embeddingmodels-flash4",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    When is Embedding Models NOT the right choice?\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
            children: "RAG is NOT the right choice when: (1) the knowledge base is tiny (<100 docs) and fits in context, (2) you need the model to learn new reasoning patterns (use fine-tuning), (3) sub-100ms latency is required."
          }), "\n  "]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "12ragvectordatabases-02embeddingmodels-flash5",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    How is Embedding Models applied in a real production system?\n  "]
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
          children: "Official documentation of the primary library for Embedding Models (linked in Further Reading)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The classic paper or textbook chapter introducing Embedding Models (see References below)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The standard library reference for Embedding Models-related functions"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Engineering blog posts from companies running Embedding Models in production at scale"
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
          }), " — Facebook's fast similarity search library Models"]
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
          }), ": Add structured logging at each stage of the 02 Embedding Models pipeline to identify exactly where the failure occurs."]
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
          children: "Write a minimal working example of Embedding Models."
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
          children: "Tell me about a time you debugged a Embedding Models problem in a project."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "How would you design a system where Embedding Models is used at scale?"
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
          children: "from typing import Any, Optional\r\n\r\ndef demonstrate_02_embedding_models(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 02 Embedding Models.\r\n\r\n    Key concepts: chunking, embedding, retrieval, reranking, generation\r\n    Complexity: O(n) embedding, O(log n) ANN search\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 02 Embedding Models here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
              children: "Explain Embedding Models without notes"
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
          href: "/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/03-vector-database-basics",
          children: "Vector Database Basics"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "limitations",
        children: "Limitations"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Embedding Models, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Performance of Embedding Models depends on input size and distribution — always benchmark for your own data."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone."
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