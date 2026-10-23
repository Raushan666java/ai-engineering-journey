"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[6158],{

/***/ 45108
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_12_rag_vector_databases_12_parent_child_multi_vector_md_72f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-12-rag-vector-databases-12-parent-child-multi-vector-md-72f.json
const site_docs_courses_ai_engineering_placement_12_rag_vector_databases_12_parent_child_multi_vector_md_72f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/rag-vector-databases/12-parent-child-multi-vector","title":"Parent-Child & Multi-Vector Retrieval","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/12-rag-vector-databases/12-parent-child-multi-vector.md","sourceDirName":"courses/ai-engineering-placement/12-rag-vector-databases","slug":"/ai-engineering-placement/12-rag-vector-databases/12-parent-child-multi-vector","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/12-parent-child-multi-vector","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":169,"frontMatter":{"id":"12-parent-child-multi-vector","slug":"/ai-engineering-placement/12-rag-vector-databases/12-parent-child-multi-vector","title":"Parent-Child & Multi-Vector Retrieval","sidebar_label":"Parent-Child & Multi-Vector Retrieval","sidebar_position":169},"sidebar":"placementSidebar","previous":{"title":"Query Rewriting & Decomposition for RAG","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/11-query-rewriting-decomposition"},"next":{"title":"Knowledge Graph RAG","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/13-knowledge-graph-rag"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/12-rag-vector-databases/12-parent-child-multi-vector.md


const frontMatter = {
	id: '12-parent-child-multi-vector',
	slug: '/ai-engineering-placement/12-rag-vector-databases/12-parent-child-multi-vector',
	title: 'Parent-Child & Multi-Vector Retrieval',
	sidebar_label: 'Parent-Child & Multi-Vector Retrieval',
	sidebar_position: 169
};
const contentTitle = 'Parent-Child & Multi-Vector Retrieval';

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
        id: "parent-child--multi-vector-retrieval",
        children: "Parent-Child & Multi-Vector Retrieval"
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
            children: "Understand the small-to-big retrieval pattern — embed small, retrieve small, return large parent chunks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement sentence window retrieval with dynamic context expansion around matched sentences"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design multi-vector representations with separate embeddings for summaries, chunks, questions, and passages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build hierarchical indices with coarse-to-fine document → chunk search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement parent-child ID mapping, metadata-based filtering, and recursive retrieval in vector databases"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Standard RAG retrieves a single chunk per embedding. But what if the best retrieval unit is smaller than the best context unit for the LLM? Parent-child and multi-vector retrieval solve this mismatch. You embed small, precise chunks for accurate retrieval, then return larger parent chunks that give the LLM full context. This chapter covers five advanced retrieval architectures: small-to-big, sentence window, multi-vector representation, hierarchical indices, and their implementation patterns."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic RAG pipeline understanding (Module 12, Chapter 1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vector database fundamentals (Module 12, Chapter 3)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chunking strategies (Module 12, Chapter 4)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python programming with data classes and type hints"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parent Chunk"
        }), ": Large document segment (500–2000 tokens) returned to the LLM as context."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Child Chunk"
        }), ": Small document segment (50–200 tokens) embedded for precise retrieval."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Small-to-Big"
        }), ": Pattern where child chunks are embedded and searched, but parent chunks are returned."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sentence Window"
        }), ": Retrieve a single sentence, then expand to include N sentences before and after."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-Vector"
        }), ": Multiple embedding vectors per document (summary, questions, passages) for different retrieval strategies."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hierarchical Index"
        }), ": Two-level index: document-level coarse search → chunk-level fine search."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parent-Child ID Mapping"
        }), ": Metadata linking each child chunk to its parent for recursive lookup."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recursive Retrieval"
        }), ": Iterative search that refines queries based on intermediate results."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parent-child and multi-vector retrieval address a fundamental tension in RAG: small chunks improve retrieval precision, but large chunks improve generation quality. The solution is to decouple the retrieval unit from the context unit. Embed small for semantic precision. Return large for contextual completeness. This chapter covers the architecture, mathematics, and implementation of these patterns."
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
            children: "11.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small-to-Big Retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embed small chunks, map to large parents, return parent context"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sentence Window Retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expand matched sentences with before/after context slices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Vector Representation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate embeddings per document for summary, questions, passages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical Indices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document-level coarse filter → chunk-level semantic search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ID mapping, metadata filtering, recursive retrieval in vector DB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare parent-child vs flat chunking on precision and recall"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    A[Raw Documents] --> B[Chunk into Parent-Child Pairs]\r\n    B --> C1[Parent Chunk: Large Context]\r\n    B --> C2[Child Chunk: Small Embed]\r\n    C2 --> D[Embed Child]\r\n    D --> E[Vector Index: Child-Level]\r\n    E --> F[Query → Embed → Search Children]\r\n    F --> G[Match Child Chunks]\r\n    G --> H[Lookup Parent ID]\r\n    H --> I[Return Parent Context]\r\n    I --> J[LLM Generation]\r\n\r\n    K[Multi-Vector Option] --> L[Summary Embedding]\r\n    K --> M[Question Embedding]\r\n    K --> N[Passage Embedding]\r\n    L --> E\r\n    M --> E\r\n    N --> E"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "\r\n## 11.1 Small-to-Big Retrieval\r\n\r\nSmall-to-big retrieval embeds tiny chunks for high-precision matching, then maps each tiny chunk to a larger parent that provides full context to the LLM.\r\n\r\n### 11.1.1 The Core Insight\r\n\r\nA chunk of 50 tokens has a focused semantic signal. A query about \"attention mechanism\" matches a 50-token chunk about attention far better than a 500-token chunk that also discusses embeddings, transformers, and training. But the LLM needs those 500 tokens to understand the full context. Small-to-big gives you both.\r\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import List, Optional, Dict, Tuple\r\nfrom dataclasses import dataclass, field\r\nimport numpy as np\r\nimport hashlib\r\nimport json\r\n\r\n@dataclass\r\nclass TextChunk:\r\n    \"\"\"Represents a single chunk of text in the retrieval system.\"\"\"\r\n    text: str\r\n    chunk_id: str\r\n    parent_id: Optional[str] = None\r\n    metadata: Dict = field(default_factory=dict)\r\n    embedding: Optional[np.ndarray] = None\r\n\r\n@dataclass\r\nclass ParentChildPair:\r\n    \"\"\"A parent chunk with its associated child chunks.\"\"\"\r\n    parent: TextChunk\r\n    children: List[TextChunk] = field(default_factory=list)\r\n\r\nclass SmallToBigChunker:\r\n    \"\"\"Splits documents into parent-child chunk pairs.\r\n\r\n    Parents are large (500-2000 tokens) for context.\r\n    Children are small (50-200 tokens) for precise retrieval.\r\n    \"\"\"\r\n\r\n    def __init__(\r\n        self,\r\n        parent_size: int = 1000,\r\n        parent_overlap: int = 100,\r\n        child_size: int = 150,\r\n        child_overlap: int = 20,\r\n    ):\r\n        self.parent_size = parent_size\r\n        self.parent_overlap = parent_overlap\r\n        self.child_size = child_size\r\n        self.child_overlap = child_overlap\r\n\r\n    def chunk(self, text: str, doc_id: str) -> List[ParentChildPair]:\r\n        \"\"\"Create parent-child pairs from a document.\"\"\"\r\n        parent_chunks = self._split_text(text, self.parent_size, self.parent_overlap)\r\n        pairs = []\r\n\r\n        for p_idx, parent_text in enumerate(parent_chunks):\r\n            parent_id = f\"{doc_id}_parent_{p_idx}\"\r\n            parent = TextChunk(\r\n                text=parent_text,\r\n                chunk_id=parent_id,\r\n                metadata={\"doc_id\": doc_id, \"type\": \"parent\", \"index\": p_idx},\r\n            )\r\n\r\n            child_texts = self._split_text(parent_text, self.child_size, self.child_overlap)\r\n            children = []\r\n\r\n            for c_idx, child_text in enumerate(child_texts):\r\n                child = TextChunk(\r\n                    text=child_text,\r\n                    chunk_id=f\"{parent_id}_child_{c_idx}\",\r\n                    parent_id=parent_id,\r\n                    metadata={\r\n                        \"doc_id\": doc_id,\r\n                        \"type\": \"child\",\r\n                        \"parent_index\": p_idx,\r\n                        \"child_index\": c_idx,\r\n                        \"parent_size\": len(parent_text),\r\n                    },\r\n                )\r\n                children.append(child)\r\n\r\n            pairs.append(ParentChildPair(parent=parent, children=children))\r\n\r\n        return pairs\r\n\r\n    def _split_text(self, text: str, size: int, overlap: int) -> List[str]:\r\n        \"\"\"Split text into overlapping chunks of target size.\"\"\"\r\n        if len(text) <= size:\r\n            return [text]\r\n\r\n        chunks = []\r\n        start = 0\r\n        while start < len(text):\r\n            end = min(start + size, len(text))\r\n            if end < len(text):\r\n                # Try to break at a sentence boundary\r\n                search_start = max(start, end - 50)\r\n                search_region = text[search_start:end]\r\n                last_period = search_region.rfind(\".\")\r\n                if last_period > 0:\r\n                    end = search_start + last_period + 1\r\n\r\n            chunks.append(text[start:end])\r\n            start = end - overlap\r\n            if start < 0:\r\n                start = 0\r\n\r\n        return chunks\r\n\r\n    def get_all_children(self, pairs: List[ParentChildPair]) -> List[TextChunk]:\r\n        \"\"\"Extract all child chunks for embedding and indexing.\"\"\"\r\n        return [child for pair in pairs for child in pair.children]\r\n\r\n    def get_all_parents(self, pairs: List[ParentChildPair]) -> List[TextChunk]:\r\n        \"\"\"Extract all parent chunks.\"\"\"\r\n        return [pair.parent for pair in pairs]\r\n\r\n# Demo\r\nchunker = SmallToBigChunker(parent_size=500, child_size=100)\r\nsample_text = \"RAG combines retrieval and generation. \" * 30\r\npairs = chunker.chunk(sample_text, \"doc001\")\r\nprint(f\"Parent-child pairs: {len(pairs)}\")\r\nprint(f\"Total children: {len(chunker.get_all_children(pairs))}\")\r\nfor pair in pairs[:1]:\r\n    print(f\"  Parent: {len(pair.parent.text)} chars, {len(pair.children)} children\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\r\n### 11.1.2 Embedding Only Children\r\n\r\nWe embed only the child chunks for search. Parents are stored separately and retrieved by ID lookup.\r\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MockEmbedder:\r\n    \"\"\"Simulates an embedding model for demonstration.\"\"\"\r\n\r\n    def __init__(self, dim: int = 384):\r\n        self.dim = dim\r\n\r\n    def embed(self, text: str) -> np.ndarray:\r\n        # Deterministic pseudo-embedding based on text hash\r\n        hash_val = int(hashlib.md5(text.encode()).hexdigest()[:8], 16)\r\n        rng = np.random.RandomState(hash_val)\r\n        emb = rng.randn(self.dim)\r\n        return emb / np.linalg.norm(emb)\r\n\r\n    def embed_batch(self, texts: List[str]) -> np.ndarray:\r\n        return np.array([self.embed(t) for t in texts])\r\n\r\nclass ChildIndex:\r\n    \"\"\"Vector index that stores only child chunk embeddings.\"\"\"\r\n\r\n    def __init__(self, embedder: MockEmbedder):\r\n        self.embedder = embedder\r\n        self.children: List[TextChunk] = []\r\n        self.embeddings: Optional[np.ndarray] = None\r\n        self.parent_lookup: Dict[str, TextChunk] = {}\r\n\r\n    def add_children(self, children: List[TextChunk]):\r\n        \"\"\"Index child chunks.\"\"\"\r\n        self.children.extend(children)\r\n        texts = [c.text for c in children]\r\n        embs = self.embedder.embed_batch(texts)\r\n\r\n        if self.embeddings is None:\r\n            self.embeddings = embs\r\n        else:\r\n            self.embeddings = np.vstack([self.embeddings, embs])\r\n\r\n    def add_parents(self, parents: List[TextChunk]):\r\n        \"\"\"Store parent chunks for lookup by ID.\"\"\"\r\n        for p in parents:\r\n            self.parent_lookup[p.chunk_id] = p\r\n\r\n    def search(self, query: str, top_k: int = 5) -> List[Tuple[TextChunk, float]]:\r\n        \"\"\"Search over children and return matched child chunks.\"\"\"\r\n        query_emb = self.embedder.embed(query)\r\n\r\n        if self.embeddings is None or len(self.children) == 0:\r\n            return []\r\n\r\n        scores = np.dot(self.embeddings, query_emb)\r\n        top_indices = np.argsort(scores)[::-1][:top_k]\r\n\r\n        results = []\r\n        for idx in top_indices:\r\n            results.append((self.children[idx], float(scores[idx])))\r\n\r\n        return results\r\n\r\n    def get_parent(self, child: TextChunk) -> Optional[TextChunk]:\r\n        \"\"\"Look up the parent chunk for a given child.\"\"\"\r\n        if child.parent_id and child.parent_id in self.parent_lookup:\r\n            return self.parent_lookup[child.parent_id]\r\n        return None\r\n\r\n# Demo flow\r\nembedder = MockEmbedder(dim=384)\r\nindex = ChildIndex(embedder)\r\n\r\nall_children = chunker.get_all_children(pairs)\r\nall_parents = chunker.get_all_parents(pairs)\r\nindex.add_children(all_children)\r\nindex.add_parents(all_parents)\r\n\r\nresults = index.search(\"retrieval and generation\", top_k=3)\r\nprint(\"\\nChild search results:\")\r\nfor child, score in results:\r\n    parent = index.get_parent(child)\r\n    print(f\"  Child ({score:.4f}): {child.text[:60]}...\")\r\n    if parent:\r\n        print(f\"  -> Parent: {parent.text[:80]}...\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "\r\n### 11.1.3 Small-to-Big Retrieval Pipeline\r\n\r\nComplete end-to-end pipeline that searches children and returns parent context.\r\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SmallToBigPipeline:\r\n    \"\"\"End-to-end small-to-big RAG pipeline.\"\"\"\r\n\r\n    def __init__(self, child_index: ChildIndex, parent_size_hint: str = \"full\"):\r\n        self.index = child_index\r\n        self.parent_size_hint = parent_size_hint\r\n\r\n    def retrieve(self, query: str, top_k: int = 5) -> List[Dict]:\r\n        \"\"\"Retrieve parent chunks by searching child embeddings.\"\"\"\r\n        child_results = self.index.search(query, top_k=top_k)\r\n\r\n        seen_parents = {}\r\n        parent_results = []\r\n\r\n        for child, score in child_results:\r\n            parent = self.index.get_parent(child)\r\n            if parent and parent.chunk_id not in seen_parents:\r\n                seen_parents[parent.chunk_id] = True\r\n                parent_results.append({\r\n                    \"parent_chunk\": parent,\r\n                    \"matched_child\": child,\r\n                    \"score\": score,\r\n                    \"child_text\": child.text,\r\n                    \"parent_text\": parent.text,\r\n                })\r\n\r\n        return parent_results\r\n\r\n    def format_context(self, results: List[Dict]) -> str:\r\n        \"\"\"Format retrieved parent chunks into a context string for the LLM.\"\"\"\r\n        contexts = []\r\n        for i, r in enumerate(results, 1):\r\n            contexts.append(\r\n                f\"[Context {i}]\\n{r['parent_text']}\\n\"\r\n                f\"[Source: {r['parent_chunk'].metadata.get('doc_id', 'unknown')}]\"\r\n            )\r\n        return \"\\n\\n\".join(contexts)\r\n\r\n    def query(self, query: str, top_k: int = 5) -> Dict:\r\n        \"\"\"Full query: retrieve parent context and prepare for generation.\"\"\"\r\n        results = self.retrieve(query, top_k=top_k)\r\n        context = self.format_context(results)\r\n\r\n        return {\r\n            \"query\": query,\r\n            \"context\": context,\r\n            \"num_parents\": len(results),\r\n            \"parent_ids\": [r[\"parent_chunk\"].chunk_id for r in results],\r\n        }\r\n\r\npipeline = SmallToBigPipeline(index)\r\nresponse = pipeline.query(\"What is RAG retrieval?\", top_k=3)\r\nprint(f\"\\nPipeline query: {response['query']}\")\r\nprint(f\"Parents retrieved: {response['num_parents']}\")\r\nprint(f\"Context preview: {response['context'][:200]}...\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\r\n## 11.2 Sentence Window Retrieval\r\n\r\nSentence window retrieval embeds individual sentences for maximum precision, then expands the window around the matched sentence to provide context.\r\n\r\n### 11.2.1 Window Expansion Mechanism\r\n\r\nInstead of arbitrary chunk boundaries, we use natural sentence boundaries. When a sentence matches a query, we return N sentences before and after it.\r\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import re\r\n\r\nclass SentenceWindowChunker:\r\n    \"\"\"Splits text into sentences with window-based context expansion.\"\"\"\r\n\r\n    def __init__(self, window_size: int = 3):\r\n        \"\"\"\r\n        Args:\r\n            window_size: Number of sentences before and after the matched sentence.\r\n                         Total window = 2 * window_size + 1 sentences.\r\n        \"\"\"\r\n        self.window_size = window_size\r\n\r\n    def extract_sentences(self, text: str) -> List[str]:\r\n        \"\"\"Split text into individual sentences.\"\"\"\r\n        # Split on sentence-ending punctuation followed by space or newline\r\n        raw = re.split(r'(?<=[.!?])\\s+', text)\r\n        sentences = [s.strip() for s in raw if s.strip()]\r\n        return sentences\r\n\r\n    def build_sentence_index(self, text: str, doc_id: str) -> Tuple[List[TextChunk], List[Dict]]:\r\n        \"\"\"Create one embedding unit per sentence, storing full sentence list separately.\"\"\"\r\n        sentences = self.extract_sentences(text)\r\n        chunks = []\r\n\r\n        for idx, sent in enumerate(sentences):\r\n            chunk = TextChunk(\r\n                text=sent,\r\n                chunk_id=f\"{doc_id}_sent_{idx}\",\r\n                metadata={\r\n                    \"doc_id\": doc_id,\r\n                    \"sentence_index\": idx,\r\n                    \"total_sentences\": len(sentences),\r\n                    \"type\": \"sentence\",\r\n                },\r\n            )\r\n            chunks.append(chunk)\r\n\r\n        return chunks, sentences\r\n\r\n    def get_window(\r\n        self,\r\n        sentences: List[str],\r\n        match_index: int,\r\n        window_size: Optional[int] = None,\r\n    ) -> str:\r\n        \"\"\"Get a window of sentences around the matched index.\"\"\"\r\n        size = window_size or self.window_size\r\n        start = max(0, match_index - size)\r\n        end = min(len(sentences), match_index + size + 1)\r\n\r\n        window_sentences = sentences[start:end]\r\n        return \" \".join(window_sentences)\r\n\r\n    def get_windows_for_chunks(\r\n        self,\r\n        chunks: List[TextChunk],\r\n        sentences: List[str],\r\n    ) -> Dict[str, str]:\r\n        \"\"\"Pre-compute windows for all sentence chunks.\"\"\"\r\n        windows = {}\r\n        for chunk in chunks:\r\n            idx = chunk.metadata[\"sentence_index\"]\r\n            windows[chunk.chunk_id] = self.get_window(sentences, idx)\r\n        return windows\r\n\r\nclass SentenceWindowRetriever:\r\n    \"\"\"Retrieves sentences and expands to window context.\"\"\"\r\n\r\n    def __init__(\r\n        self,\r\n        window_chunker: SentenceWindowChunker,\r\n        embedder: MockEmbedder,\r\n        default_window: int = 3,\r\n    ):\r\n        self.chunker = window_chunker\r\n        self.embedder = embedder\r\n        self.default_window = default_window\r\n        self.sentence_index: List[TextChunk] = []\r\n        self.sentence_store: Dict[str, List[str]] = {}\r\n        self.sentence_embeddings: Optional[np.ndarray] = None\r\n        self.window_cache: Dict[str, str] = {}\r\n\r\n    def add_document(self, text: str, doc_id: str):\r\n        \"\"\"Index a document with sentence window support.\"\"\"\r\n        chunks, sentences = self.chunker.build_sentence_index(text, doc_id)\r\n        self.sentence_index.extend(chunks)\r\n        self.sentence_store[doc_id] = sentences\r\n\r\n        # Pre-compute windows\r\n        for c in chunks:\r\n            idx = c.metadata[\"sentence_index\"]\r\n            window = self.chunker.get_window(sentences, idx, self.default_window)\r\n            self.window_cache[c.chunk_id] = window\r\n\r\n        # Update embeddings\r\n        texts = [c.text for c in chunks]\r\n        embs = self.embedder.embed_batch(texts)\r\n        if self.sentence_embeddings is None:\r\n            self.sentence_embeddings = embs\r\n        else:\r\n            self.sentence_embeddings = np.vstack([self.sentence_embeddings, embs])\r\n\r\n    def search(\r\n        self,\r\n        query: str,\r\n        top_k: int = 5,\r\n        window_size: Optional[int] = None,\r\n    ) -> List[Dict]:\r\n        \"\"\"Search sentences and return window-expanded context.\"\"\"\r\n        query_emb = self.embedder.embed(query)\r\n\r\n        if self.sentence_embeddings is None:\r\n            return []\r\n\r\n        scores = np.dot(self.sentence_embeddings, query_emb)\r\n        top_indices = np.argsort(scores)[::-1][:top_k]\r\n\r\n        results = []\r\n        for idx in top_indices:\r\n            chunk = self.sentence_index[idx]\r\n            window = self.window_cache.get(chunk.chunk_id, chunk.text)\r\n\r\n            # Dynamic window expansion if requested\r\n            if window_size is not None and window_size != self.default_window:\r\n                doc_id = chunk.metadata[\"doc_id\"]\r\n                sent_idx = chunk.metadata[\"sentence_index\"]\r\n                sentences = self.sentence_store.get(doc_id, [])\r\n                if sentences:\r\n                    window = self.chunker.get_window(sentences, sent_idx, window_size)\r\n\r\n            results.append({\r\n                \"sentence\": chunk.text,\r\n                \"window\": window,\r\n                \"score\": float(scores[idx]),\r\n                \"sentence_index\": chunk.metadata[\"sentence_index\"],\r\n                \"doc_id\": chunk.metadata[\"doc_id\"],\r\n                \"chunk_id\": chunk.chunk_id,\r\n            })\r\n\r\n        return results\r\n\r\n# Demo\r\nwindow_chunker = SentenceWindowChunker(window_size=2)\r\ndoc_text = (\r\n    \"RAG stands for Retrieval-Augmented Generation. \"\r\n    \"It combines a retriever with a generator. \"\r\n    \"The retriever finds relevant documents. \"\r\n    \"The generator produces answers using those documents. \"\r\n    \"This improves factual accuracy. \"\r\n    \"It also reduces hallucination. \"\r\n    \"RAG is widely used in QA systems. \"\r\n    \"Many companies deploy RAG in production. \"\r\n    \"The architecture is modular and extensible. \"\r\n    \"You can swap components independently.\"\r\n)\r\n\r\nretriever = SentenceWindowRetriever(window_chunker, embedder)\r\nretriever.add_document(doc_text, \"doc-rag\")\r\n\r\nresults = retriever.search(\"How does RAG reduce hallucination?\", top_k=2)\r\nprint(\"\\nSentence Window Retrieval Results:\")\r\nfor r in results:\r\n    print(f\"  Score: {r['score']:.4f}\")\r\n    print(f\"  Matched: \\\"{r['sentence']}\\\"\")\r\n    print(f\"  Window ({r['sentence_index']}): \\\"{r['window'][:120]}...\\\"\")\r\n    print()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "\r\n### 11.2.2 Dynamic Window Sizing\r\n\r\nDifferent queries need different window sizes. We can vary the window per query based on confidence.\r\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class AdaptiveWindowRetriever:\r\n    \"\"\"Adjusts window size based on query specificity and result confidence.\"\"\"\r\n\r\n    def __init__(self, base_retriever: SentenceWindowRetriever):\r\n        self.base = base_retriever\r\n\r\n    def estimate_query_breadth(self, query: str) -> float:\r\n        \"\"\"Estimate how broad the query is (0=narrow, 1=broad).\r\n\r\n        Narrow queries need small windows. Broad queries need large windows.\r\n        \"\"\"\r\n        num_words = len(query.split())\r\n        has_question_words = any(w in query.lower() for w in [\"what\", \"why\", \"how\", \"explain\"])\r\n\r\n        # Short question-word queries are broad\r\n        if num_words < 5 and has_question_words:\r\n            return 0.7\r\n        # Longer specific queries are narrow\r\n        elif num_words > 8:\r\n            return 0.3\r\n        return 0.5\r\n\r\n    def search(self, query: str, top_k: int = 5) -> List[Dict]:\r\n        breadth = self.estimate_query_breadth(query)\r\n        window_size = max(1, int(breadth * 5))  # Map 0-1 to 1-5 sentences\r\n\r\n        return self.base.search(query, top_k=top_k, window_size=window_size)\r\n\r\nadaptive = AdaptiveWindowRetriever(retriever)\r\nbroad_results = adaptive.search(\"Explain RAG architecture\")\r\nnarrow_results = adaptive.search(\"What is the retriever component?\")\r\n\r\nprint(f\"Broad query window size: {adaptive.estimate_query_breadth('Explain RAG architecture') * 5:.0f}\")\r\nprint(f\"Narrow query window size: {adaptive.estimate_query_breadth('What is the retriever component?') * 5:.0f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\r\n## 11.3 Multi-Vector Representation\r\n\r\nMulti-vector representation creates multiple embedding vectors per document, each capturing a different aspect. This enables diverse retrieval strategies for the same content.\r\n\r\n### 11.3.1 Why Multiple Vectors?\r\n\r\nA single embedding must compress the entire document into one vector. This loses nuance. Multi-vector solves this by creating specialized embeddings:\r\n\r\n- **Summary embedding**: Captures the document's main topic\r\n- **Question embedding**: Anticipates likely questions the document answers\r\n- **Passage embedding**: Captures specific factual content\r\n- **Keyword embedding**: Captures key terminology\r\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MultiVectorDocument:\r\n    \"\"\"A document with multiple embedding representations.\"\"\"\r\n\r\n    def __init__(\r\n        self,\r\n        doc_id: str,\r\n        full_text: str,\r\n        summary: Optional[str] = None,\r\n        questions: Optional[List[str]] = None,\r\n        passages: Optional[List[str]] = None,\r\n        keywords: Optional[List[str]] = None,\r\n    ):\r\n        self.doc_id = doc_id\r\n        self.full_text = full_text\r\n        self.summary = summary or self._generate_summary(full_text)\r\n        self.questions = questions or self._generate_questions(full_text)\r\n        self.passages = passages or self._split_passages(full_text)\r\n        self.keywords = keywords or self._extract_keywords(full_text)\r\n\r\n    def _generate_summary(self, text: str) -> str:\r\n        \"\"\"Simplified summary: first 200 chars as a proxy.\"\"\"\r\n        return text[:200] + (\"...\" if len(text) > 200 else \"\")\r\n\r\n    def _generate_questions(self, text: str) -> List[str]:\r\n        \"\"\"Extract or generate likely questions from key sentences.\"\"\"\r\n        sentences = re.split(r'(?<=[.!?])\\s+', text)\r\n        questions = []\r\n        for sent in sentences[:5]:\r\n            words = sent.split()\r\n            # Create a pseudo-question from the sentence\r\n            if len(words) > 5:\r\n                question = f\"What is {' '.join(words[:3])}?\"\r\n                questions.append(question)\r\n        return questions\r\n\r\n    def _split_passages(self, text: str) -> List[str]:\r\n        \"\"\"Split text into passages for dense embedding.\"\"\"\r\n        chunk_size = 300\r\n        passages = []\r\n        for i in range(0, len(text), chunk_size):\r\n            passages.append(text[i:i + chunk_size])\r\n        return passages\r\n\r\n    def _extract_keywords(self, text: str) -> List[str]:\r\n        \"\"\"Extract capitalized terms and long words as keywords.\"\"\"\r\n        words = set(text.split())\r\n        keywords = {\r\n            w for w in words\r\n            if len(w) > 6 or (w[0].isupper() and len(w) > 3)\r\n        }\r\n        return list(keywords)[:20]\r\n\r\nclass MultiVectorIndex:\r\n    \"\"\"Index that stores and searches across multiple vector representations.\"\"\"\r\n\r\n    def __init__(self, embedder: MockEmbedder):\r\n        self.embedder = embedder\r\n        self.docs: Dict[str, MultiVectorDocument] = {}\r\n\r\n        # Separate embedding stores for each representation type\r\n        self.summary_embeddings: Dict[str, np.ndarray] = {}\r\n        self.question_embeddings: Dict[str, List[np.ndarray]] = {}\r\n        self.passage_embeddings: Dict[str, List[np.ndarray]] = {}\r\n        self.keyword_embeddings: Dict[str, List[np.ndarray]] = {}\r\n\r\n        # Metadata for score normalization\r\n        self.vector_stats: Dict[str, Dict] = {}\r\n\r\n    def add_document(self, doc: MultiVectorDocument):\r\n        \"\"\"Index all representations of a document.\"\"\"\r\n        self.docs[doc.doc_id] = doc\r\n\r\n        # Embed summary\r\n        self.summary_embeddings[doc.doc_id] = self.embedder.embed(doc.summary)\r\n\r\n        # Embed questions\r\n        if doc.questions:\r\n            self.question_embeddings[doc.doc_id] = [\r\n                self.embedder.embed(q) for q in doc.questions\r\n            ]\r\n\r\n        # Embed passages\r\n        if doc.passages:\r\n            self.passage_embeddings[doc.doc_id] = [\r\n                self.embedder.embed(p) for p in doc.passages\r\n            ]\r\n\r\n        # Embed keywords\r\n        if doc.keywords:\r\n            self.keyword_embeddings[doc.doc_id] = [\r\n                self.embedder.embed(k) for k in doc.keywords\r\n            ]\r\n\r\n    def search_summary(self, query: str, top_k: int = 5) -> List[Tuple[str, float]]:\r\n        \"\"\"Search using summary embeddings.\"\"\"\r\n        query_emb = self.embedder.embed(query)\r\n        scores = []\r\n        for doc_id, emb in self.summary_embeddings.items():\r\n            score = float(np.dot(emb, query_emb))\r\n            scores.append((doc_id, score))\r\n\r\n        scores.sort(key=lambda x: x[1], reverse=True)\r\n        return scores[:top_k]\r\n\r\n    def search_passages(self, query: str, top_k: int = 5) -> List[Tuple[str, float, str]]:\r\n        \"\"\"Search using passage embeddings, returns matched passage text.\"\"\"\r\n        query_emb = self.embedder.embed(query)\r\n        results = []\r\n\r\n        for doc_id, emb_list in self.passage_embeddings.items():\r\n            for p_idx, emb in enumerate(emb_list):\r\n                score = float(np.dot(emb, query_emb))\r\n                passage_text = self.docs[doc_id].passages[p_idx]\r\n                results.append((doc_id, score, passage_text))\r\n\r\n        results.sort(key=lambda x: x[1], reverse=True)\r\n        return results[:top_k]\r\n\r\n    def search_multi_vector(\r\n        self,\r\n        query: str,\r\n        weights: Optional[Dict[str, float]] = None,\r\n        top_k: int = 5,\r\n    ) -> List[Dict]:\r\n        \"\"\"Search across all representations with configurable weights.\"\"\"\r\n        if weights is None:\r\n            weights = {\r\n                \"summary\": 0.25,\r\n                \"question\": 0.35,\r\n                \"passage\": 0.25,\r\n                \"keyword\": 0.15,\r\n            }\r\n\r\n        query_emb = self.embedder.embed(query)\r\n        combined_scores: Dict[str, float] = {}\r\n\r\n        for doc_id in self.docs:\r\n            score = 0.0\r\n\r\n            # Summary similarity\r\n            if \"summary\" in weights and doc_id in self.summary_embeddings:\r\n                sim = float(np.dot(self.summary_embeddings[doc_id], query_emb))\r\n                score += sim * weights[\"summary\"]\r\n\r\n            # Question similarity (max over all questions)\r\n            if \"question\" in weights and doc_id in self.question_embeddings:\r\n                max_q_sim = max(\r\n                    float(np.dot(q_emb, query_emb))\r\n                    for q_emb in self.question_embeddings[doc_id]\r\n                ) if self.question_embeddings[doc_id] else 0\r\n                score += max_q_sim * weights[\"question\"]\r\n\r\n            # Passage similarity (max over all passages)\r\n            if \"passage\" in weights and doc_id in self.passage_embeddings:\r\n                max_p_sim = max(\r\n                    float(np.dot(p_emb, query_emb))\r\n                    for p_emb in self.passage_embeddings[doc_id]\r\n                ) if self.passage_embeddings[doc_id] else 0\r\n                score += max_p_sim * weights[\"passage\"]\r\n\r\n            # Keyword similarity (average over all keywords)\r\n            if \"keyword\" in weights and doc_id in self.keyword_embeddings:\r\n                kw_sims = [\r\n                    float(np.dot(k_emb, query_emb))\r\n                    for k_emb in self.keyword_embeddings[doc_id]\r\n                ] if self.keyword_embeddings[doc_id] else [0]\r\n                score += np.mean(kw_sims) * weights[\"keyword\"]\r\n\r\n            combined_scores[doc_id] = score\r\n\r\n        sorted_docs = sorted(combined_scores.items(), key=lambda x: x[1], reverse=True)\r\n        return [\r\n            {\r\n                \"doc_id\": doc_id,\r\n                \"score\": score,\r\n                \"summary\": self.docs[doc_id].summary[:100],\r\n            }\r\n            for doc_id, score in sorted_docs[:top_k]\r\n        ]\r\n\r\n# Demo\r\ndocs_data = [\r\n    \"Retrieval-Augmented Generation (RAG) combines pretrained language models with external knowledge retrieval. The retriever searches a corpus for relevant documents. The generator produces answers conditioned on both the query and retrieved documents. This approach dramatically improves factual accuracy.\",\r\n    \"Vector databases store embeddings for similarity search. Popular options include Pinecone, Weaviate, Qdrant, and Chroma. They support Approximate Nearest Neighbor search for fast retrieval at scale. Metadata filtering allows hybrid search combining vector and keyword approaches.\",\r\n    \"Attention mechanisms allow transformers to focus on relevant parts of the input. Self-attention computes relationships between all positions in a sequence. Multi-head attention runs multiple attention operations in parallel. This is the foundation of modern LLMs.\",\r\n]\r\n\r\nmulti_index = MultiVectorIndex(embedder)\r\nfor i, text in enumerate(docs_data):\r\n    doc = MultiVectorDocument(doc_id=f\"doc-{i}\", full_text=text)\r\n    multi_index.add_document(doc)\r\n    print(f\"Added doc-{i}: {len(doc.questions)} questions, {len(doc.passages)} passages, {len(doc.keywords)} keywords\")\r\n\r\nresults = multi_index.search_multi_vector(\r\n    \"How do I store embeddings for fast search?\",\r\n    weights={\"summary\": 0.2, \"question\": 0.4, \"passage\": 0.3, \"keyword\": 0.1},\r\n    top_k=3,\r\n)\r\nprint(\"\\nMulti-vector search results:\")\r\nfor r in results:\r\n    print(f\"  {r['doc_id']}: score={r['score']:.4f}, summary={r['summary'][:80]}...\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "\r\n### 11.3.2 Query-Document Matching with Questions\r\n\r\nOne powerful multi-vector strategy: embed anticipated questions alongside documents. This bridges the vocabulary gap between how users ask and how documents are written.\r\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class QuestionAugmentedRetrieval:\r\n    \"\"\"Uses generated questions to improve query-document matching.\"\"\"\r\n\r\n    def __init__(self, multi_index: MultiVectorIndex):\r\n        self.index = multi_index\r\n\r\n    def search(self, query: str, top_k: int = 5) -> List[Dict]:\r\n        \"\"\"Boost search with question-answer matching.\"\"\"\r\n        # Search all vectors, but weight question matches heavily\r\n        results = self.index.search_multi_vector(\r\n            query,\r\n            weights={\"summary\": 0.15, \"question\": 0.50, \"passage\": 0.25, \"keyword\": 0.10},\r\n            top_k=top_k,\r\n        )\r\n        return results\r\n\r\nqa_retrieval = QuestionAugmentedRetrieval(multi_index)\r\nqa_results = qa_retrieval.search(\"What is RAG?\")\r\nprint(f\"\\nQuestion-augmented retrieval top doc: {qa_results[0]['doc_id']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\r\n## 11.4 Hierarchical Indices\r\n\r\nHierarchical indices create a two-level search: coarse document-level search first, then fine chunk-level search within matched documents.\r\n\r\n### 11.4.1 Two-Level Index Architecture\r\n\r\nDocument-level vectors capture overall topic. Chunk-level vectors capture specific content. Search proceeds top-down: find relevant documents, then drill into their chunks.\r\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\r\nclass Document:\r\n    \"\"\"Top-level document in the hierarchy.\"\"\"\r\n    doc_id: str\r\n    title: str\r\n    abstract: str\r\n    full_text: str\r\n    embedding: Optional[np.ndarray] = None\r\n\r\nclass HierarchicalIndex:\r\n    \"\"\"Two-level index: documents at level 1, chunks at level 2.\"\"\"\r\n\r\n    def __init__(self, embedder: MockEmbedder):\r\n        self.embedder = embedder\r\n        self.documents: Dict[str, Document] = {}\r\n        self.doc_embeddings: Dict[str, np.ndarray] = {}\r\n\r\n        # Level 2: chunks organized by parent document\r\n        self.chunk_indices: Dict[str, ChildIndex] = {}\r\n\r\n    def add_document(self, doc: Document, chunk_size: int = 300):\r\n        \"\"\"Add a document and its chunk-level index.\"\"\"\r\n        self.documents[doc.doc_id] = doc\r\n        self.doc_embeddings[doc.doc_id] = self.embedder.embed(f\"{doc.title} {doc.abstract}\")\r\n\r\n        # Build chunk-level index for this document\r\n        chunk_index = ChildIndex(self.embedder)\r\n        chunks = []\r\n        for i in range(0, len(doc.full_text), chunk_size):\r\n            chunk_text = doc.full_text[i:i + chunk_size]\r\n            chunk = TextChunk(\r\n                text=chunk_text,\r\n                chunk_id=f\"{doc.doc_id}_chunk_{i // chunk_size}\",\r\n                metadata={\r\n                    \"doc_id\": doc.doc_id,\r\n                    \"chunk_start\": i,\r\n                    \"chunk_end\": i + len(chunk_text),\r\n                },\r\n            )\r\n            chunks.append(chunk)\r\n\r\n        chunk_index.add_children(chunks)\r\n        self.chunk_indices[doc.doc_id] = chunk_index\r\n\r\n    def coarse_search(self, query: str, top_k_docs: int = 3) -> List[Tuple[Document, float]]:\r\n        \"\"\"Level 1: Search document-level embeddings.\"\"\"\r\n        query_emb = self.embedder.embed(query)\r\n        scores = []\r\n\r\n        for doc_id, doc_emb in self.doc_embeddings.items():\r\n            score = float(np.dot(doc_emb, query_emb))\r\n            scores.append((self.documents[doc_id], score))\r\n\r\n        scores.sort(key=lambda x: x[1], reverse=True)\r\n        return scores[:top_k_docs]\r\n\r\n    def fine_search(\r\n        self,\r\n        query: str,\r\n        doc_ids: Optional[List[str]] = None,\r\n        top_k_per_doc: int = 3,\r\n    ) -> List[Dict]:\r\n        \"\"\"Level 2: Search chunks within selected documents.\"\"\"\r\n        if doc_ids is None:\r\n            doc_ids = [doc.doc_id for doc, _ in self.coarse_search(query)]\r\n\r\n        results = []\r\n        for doc_id in doc_ids:\r\n            if doc_id in self.chunk_indices:\r\n                child_results = self.chunk_indices[doc_id].search(query, top_k=top_k_per_doc)\r\n                for child, score in child_results:\r\n                    results.append({\r\n                        \"doc_id\": doc_id,\r\n                        \"chunk_id\": child.chunk_id,\r\n                        \"text\": child.text,\r\n                        \"score\": score,\r\n                        \"level\": \"fine\",\r\n                    })\r\n\r\n        results.sort(key=lambda x: x[\"score\"], reverse=True)\r\n        return results\r\n\r\n    def hierarchical_search(\r\n        self,\r\n        query: str,\r\n        top_k_docs: int = 3,\r\n        top_k_chunks: int = 5,\r\n    ) -> List[Dict]:\r\n        \"\"\"Coarse-to-fine search: find docs, then find chunks.\"\"\"\r\n        coarse_results = self.coarse_search(query, top_k_docs=top_k_docs)\r\n        selected_doc_ids = [doc.doc_id for doc, _ in coarse_results]\r\n\r\n        fine_results = self.fine_search(\r\n            query,\r\n            doc_ids=selected_doc_ids,\r\n            top_k_per_doc=max(2, top_k_chunks // len(selected_doc_ids)),\r\n        )\r\n\r\n        return fine_results[:top_k_chunks]\r\n\r\n# Build hierarchical index\r\nhier_index = HierarchicalIndex(embedder)\r\n\r\ndocs_data = [\r\n    (\"RAG Systems\", \"RAG combines retrieval and generation for accurate QA.\"),\r\n    (\"Vector Databases\", \"Vector DBs store and search embeddings efficiently.\"),\r\n    (\"Transformer Architecture\", \"Transformers use attention for sequence processing.\"),\r\n]\r\n\r\nfor i, (title, abstract) in enumerate(docs_data):\r\n    full = f\"{title}. {abstract}. \" + (f\"Detailed content about {title}. \" * 20)\r\n    doc = Document(doc_id=f\"h-{i}\", title=title, abstract=abstract, full_text=full)\r\n    hier_index.add_document(doc)\r\n\r\ncoarse = hier_index.coarse_search(\"storage for embeddings\", top_k_docs=2)\r\nprint(\"\\nCoarse search (document level):\")\r\nfor doc, score in coarse:\r\n    print(f\"  {doc.doc_id}: {doc.title} (score={score:.4f})\")\r\n\r\nfine = hier_index.hierarchical_search(\"storage for embeddings\", top_k_docs=2, top_k_chunks=4)\r\nprint(\"\\nFine search (chunk level within selected docs):\")\r\nfor r in fine:\r\n    print(f\"  {r['doc_id']}/{r['chunk_id']}: score={r['score']:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "\r\n### 11.4.2 Recursive Retrieval with Feedback\r\n\r\nHierarchical retrieval can be recursive: use coarse results to refine the query, then search again at the chunk level.\r\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RecursiveHierarchicalRetriever:\r\n    \"\"\"Performs multi-step retrieval with query refinement between steps.\"\"\"\r\n\r\n    def __init__(self, hier_index: HierarchicalIndex, max_depth: int = 3):\r\n        self.index = hier_index\r\n        self.max_depth = max_depth\r\n\r\n    def search(self, query: str, top_k: int = 5) -> List[Dict]:\r\n        \"\"\"Recursive search with query expansion at each level.\"\"\"\r\n        current_query = query\r\n        all_results = []\r\n        seen_chunk_ids = set()\r\n\r\n        for depth in range(self.max_depth):\r\n            results = self.index.hierarchical_search(\r\n                current_query,\r\n                top_k_docs=max(3, 5 - depth),\r\n                top_k_chunks=max(top_k, top_k * (depth + 1)),\r\n            )\r\n\r\n            # Add only new results\r\n            new_count = 0\r\n            for r in results:\r\n                if r[\"chunk_id\"] not in seen_chunk_ids:\r\n                    seen_chunk_ids.add(r[\"chunk_id\"])\r\n                    all_results.append(r)\r\n                    new_count += 1\r\n\r\n            # Expand query with terms from new results\r\n            if new_count < 2:\r\n                break\r\n\r\n            expansion_terms = []\r\n            for r in results[:3]:\r\n                words = r[\"text\"].split()[:5]\r\n                expansion_terms.extend(w for w in words if len(w) > 5)\r\n\r\n            if expansion_terms:\r\n                current_query = f\"{current_query} {' '.join(set(expansion_terms))}\"\r\n\r\n        all_results.sort(key=lambda x: x[\"score\"], reverse=True)\r\n        return all_results[:top_k]\r\n\r\nrecursive = RecursiveHierarchicalRetriever(hier_index)\r\nresults = recursive.search(\"How do databases search embeddings?\", top_k=3)\r\nprint(f\"\\nRecursive retrieval: {len(results)} results\")\r\nfor r in results:\r\n    print(f\"  {r['doc_id']}: score={r['score']:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\r\n## 11.5 Implementation Patterns\r\n\r\nThis section covers practical patterns for implementing parent-child and multi-vector retrieval in production vector databases.\r\n\r\n### 11.5.1 Parent-Child ID Mapping in Vector DB\r\n\r\nVector databases like Pinecone, Qdrant, and Weaviate support metadata. We store the parent_id as metadata on each child vector.\r\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class VectorDBClient:\r\n    \"\"\"Simulates a vector database with metadata support.\"\"\"\r\n\r\n    def __init__(self, embedder: MockEmbedder):\r\n        self.embedder = embedder\r\n        self.vectors: Dict[str, np.ndarray] = {}\r\n        self.metadata: Dict[str, Dict] = {}\r\n\r\n    def upsert(self, chunk_id: str, embedding: np.ndarray, metadata: Dict):\r\n        \"\"\"Insert or update a vector with metadata.\"\"\"\r\n        self.vectors[chunk_id] = embedding\r\n        self.metadata[chunk_id] = metadata\r\n\r\n    def search(\r\n        self,\r\n        query_emb: np.ndarray,\r\n        top_k: int = 10,\r\n        filter_criteria: Optional[Dict] = None,\r\n    ) -> List[Dict]:\r\n        \"\"\"Search vectors with optional metadata filtering.\"\"\"\r\n        scores = []\r\n        for chunk_id, emb in self.vectors.items():\r\n            meta = self.metadata.get(chunk_id, {})\r\n\r\n            # Apply metadata filter\r\n            if filter_criteria:\r\n                skip = False\r\n                for key, value in filter_criteria.items():\r\n                    if meta.get(key) != value:\r\n                        skip = True\r\n                        break\r\n                if skip:\r\n                    continue\r\n\r\n            score = float(np.dot(emb, query_emb))\r\n            scores.append({\r\n                \"chunk_id\": chunk_id,\r\n                \"score\": score,\r\n                \"metadata\": meta,\r\n            })\r\n\r\n        scores.sort(key=lambda x: x[\"score\"], reverse=True)\r\n        return scores[:top_k]\r\n\r\n    def get_metadata(self, chunk_id: str) -> Optional[Dict]:\r\n        \"\"\"Retrieve metadata for a specific chunk.\"\"\"\r\n        return self.metadata.get(chunk_id)\r\n\r\nclass ParentChildDB:\r\n    \"\"\"Production-style parent-child retrieval using vector DB metadata.\"\"\"\r\n\r\n    def __init__(self, vector_db: VectorDBClient, embedder: MockEmbedder):\r\n        self.db = vector_db\r\n        self.embedder = embedder\r\n\r\n    def index_parent_child(\r\n        self,\r\n        parent_id: str,\r\n        parent_text: str,\r\n        children: List[TextChunk],\r\n    ):\r\n        \"\"\"Index a parent-child group into the vector DB.\"\"\"\r\n        # Store parent metadata (not embedded)\r\n        parent_meta = {\r\n            \"type\": \"parent\",\r\n            \"text\": parent_text,\r\n            \"child_ids\": [c.chunk_id for c in children],\r\n        }\r\n        self.db.upsert(parent_id, np.zeros(self.embedder.dim), parent_meta)\r\n\r\n        # Store children with embeddings and parent reference\r\n        for child in children:\r\n            child_meta = {\r\n                \"type\": \"child\",\r\n                \"text\": child.text,\r\n                \"parent_id\": parent_id,\r\n                \"doc_id\": child.metadata.get(\"doc_id\"),\r\n            }\r\n            emb = self.embedder.embed(child.text)\r\n            self.db.upsert(child.chunk_id, emb, child_meta)\r\n\r\n    def retrieve_with_parent(\r\n        self,\r\n        query: str,\r\n        top_k: int = 5,\r\n    ) -> List[Dict]:\r\n        \"\"\"Search children, return parent context.\"\"\"\r\n        query_emb = self.embedder.embed(query)\r\n\r\n        # Search only child vectors\r\n        child_results = self.db.search(\r\n            query_emb,\r\n            top_k=top_k * 3,\r\n            filter_criteria={\"type\": \"child\"},\r\n        )\r\n\r\n        # Deduplicate by parent and collect parent text\r\n        seen_parents = {}\r\n        results = []\r\n\r\n        for r in child_results:\r\n            parent_id = r[\"metadata\"].get(\"parent_id\")\r\n            if parent_id and parent_id not in seen_parents:\r\n                seen_parents[parent_id] = True\r\n\r\n                parent_meta = self.db.get_metadata(parent_id)\r\n                parent_text = parent_meta.get(\"text\", \"\") if parent_meta else \"\"\r\n\r\n                results.append({\r\n                    \"parent_id\": parent_id,\r\n                    \"parent_text\": parent_text,\r\n                    \"matched_child\": r[\"metadata\"][\"text\"],\r\n                    \"child_id\": r[\"chunk_id\"],\r\n                    \"score\": r[\"score\"],\r\n                })\r\n\r\n                if len(results) >= top_k:\r\n                    break\r\n\r\n        return results\r\n\r\n# Demo the production pattern\r\nvector_db = VectorDBClient(embedder)\r\npc_db = ParentChildDB(vector_db, embedder)\r\n\r\n# Index a document\r\nfor p_idx, pair in enumerate(pairs):\r\n    pc_db.index_parent_child(\r\n        parent_id=pair.parent.chunk_id,\r\n        parent_text=pair.parent.text,\r\n        children=pair.children,\r\n    )\r\n\r\nprod_results = pc_db.retrieve_with_parent(\"retrieval generation\", top_k=3)\r\nprint(f\"\\nProduction parent-child retrieval: {len(prod_results)} unique parents\")\r\nfor r in prod_results:\r\n    print(f\"  Parent {r['parent_id']}: {len(r['parent_text'])} chars (score={r['score']:.4f})\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "\r\n### 11.5.2 Metadata Filtering Strategies\r\n\r\nMetadata filters narrow search scope before vector comparison. Common filters include document type, date range, and content category.\r\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MetadataFilterBuilder:\r\n    \"\"\"Builds metadata filters for vector DB queries.\"\"\"\r\n\r\n    @staticmethod\r\n    def doc_type_filter(doc_type: str) -> Dict:\r\n        return {\"doc_type\": doc_type}\r\n\r\n    @staticmethod\r\n    def date_range_filter(start_date: str, end_date: str) -> Dict:\r\n        return {\"date\": {\"$gte\": start_date, \"$lte\": end_date}}\r\n\r\n    @staticmethod\r\n    def category_filter(categories: List[str]) -> Dict:\r\n        return {\"category\": {\"$in\": categories}}\r\n\r\n    @staticmethod\r\n    def composite_filter(filters: List[Dict], logic: str = \"AND\") -> Dict:\r\n        return {f\"${logic}\": filters}\r\n\r\n    @staticmethod\r\n    def parent_only_filter() -> Dict:\r\n        return {\"type\": \"parent\"}\r\n\r\n    @staticmethod\r\n    def child_only_filter() -> Dict:\r\n        return {\"type\": \"child\"}\r\n\r\n    @staticmethod\r\n    def parent_id_filter(parent_id: str) -> Dict:\r\n        return {\"parent_id\": parent_id}\r\n\r\n# Example usage\r\nfilter_builder = MetadataFilterBuilder()\r\ncomplex_filter = filter_builder.composite_filter([\r\n    filter_builder.child_only_filter(),\r\n    filter_builder.category_filter([\"research\", \"technical\"]),\r\n])\r\nprint(f\"Complex filter: {complex_filter}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\r\n### 11.5.3 Recursive Retrieval with Multi-Vector Feedback\r\n\r\nCombine recursive retrieval with multi-vector representations for the most flexible system.\r\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RecursiveMultiVectorRetriever:\r\n    \"\"\"Recursive retrieval using multiple vector representations.\"\"\"\r\n\r\n    def __init__(\r\n        self,\r\n        multi_index: MultiVectorIndex,\r\n        max_iterations: int = 3,\r\n        convergence_threshold: int = 2,\r\n    ):\r\n        self.multi_index = multi_index\r\n        self.max_iterations = max_iterations\r\n        self.convergence_threshold = convergence_threshold\r\n\r\n    def search(self, query: str, top_k: int = 5) -> Dict:\r\n        \"\"\"Iterative search with feedback from previous results.\"\"\"\r\n        iteration_history = []\r\n        current_query = query\r\n        seen_docs = set()\r\n\r\n        for iteration in range(self.max_iterations):\r\n            # Search with current query\r\n            results = self.multi_index.search_multi_vector(\r\n                current_query,\r\n                top_k=top_k,\r\n            )\r\n\r\n            new_docs = [r for r in results if r[\"doc_id\"] not in seen_docs]\r\n            for r in new_docs:\r\n                seen_docs.add(r[\"doc_id\"])\r\n\r\n            iteration_history.append({\r\n                \"iteration\": iteration,\r\n                \"query\": current_query,\r\n                \"num_new_results\": len(new_docs),\r\n                \"results\": results,\r\n            })\r\n\r\n            # Check convergence\r\n            if len(new_docs) < self.convergence_threshold:\r\n                break\r\n\r\n            # Refine query using the summary of the top new result\r\n            if new_docs:\r\n                top_new = new_docs[0]\r\n                doc = self.multi_index.docs.get(top_new[\"doc_id\"])\r\n                if doc:\r\n                    # Extract key terms from the document\r\n                    key_phrases = doc.summary.split()[:10]\r\n                    refinement = \" \".join(\r\n                        w for w in key_phrases\r\n                        if w.lower() not in current_query.lower()\r\n                    )\r\n                    if refinement:\r\n                        current_query = f\"{current_query} {refinement}\"\r\n\r\n        # Merge all unique results across iterations\r\n        merged = {}\r\n        for hist in iteration_history:\r\n            for r in hist[\"results\"]:\r\n                if r[\"doc_id\"] not in merged:\r\n                    merged[r[\"doc_id\"]] = r\r\n\r\n        return {\r\n            \"final_results\": sorted(merged.values(), key=lambda x: x[\"score\"], reverse=True)[:top_k],\r\n            \"iterations\": len(iteration_history),\r\n            \"history\": iteration_history,\r\n        }\r\n\r\nrecursive_mv = RecursiveMultiVectorRetriever(multi_index)\r\nrecursive_results = recursive_mv.search(\"embedding storage\", top_k=3)\r\nprint(f\"\\nRecursive multi-vector search: {recursive_results['iterations']} iterations\")\r\nfor r in recursive_results[\"final_results\"]:\r\n    print(f\"  {r['doc_id']}: score={r['score']:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "\r\n### 11.5.4 Chunking Strategy Comparison\r\n\r\nCompare different parent-child configurations to select optimal sizes.\r\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ParentChildBenchmark:\r\n    \"\"\"Compare retrieval quality across different parent-child configurations.\"\"\"\r\n\r\n    def __init__(self, embedder: MockEmbedder, queries: List[str], corpus: List[str]):\r\n        self.embedder = embedder\r\n        self.queries = queries\r\n        self.corpus = corpus\r\n\r\n    def evaluate_config(\r\n        self,\r\n        parent_size: int,\r\n        child_size: int,\r\n        top_k: int = 5,\r\n    ) -> Dict:\r\n        \"\"\"Evaluate a specific parent-child configuration.\"\"\"\r\n        chunker = SmallToBigChunker(parent_size=parent_size, child_size=child_size)\r\n        db = ParentChildDB(VectorDBClient(self.embedder), self.embedder)\r\n\r\n        for doc_idx, doc_text in enumerate(self.corpus):\r\n            pairs = chunker.chunk(doc_text, f\"doc-{doc_idx}\")\r\n            for pair in pairs:\r\n                db.index_parent_child(\r\n                    parent_id=pair.parent.chunk_id,\r\n                    parent_text=pair.parent.text,\r\n                    children=pair.children,\r\n                )\r\n\r\n        total_parents = 0\r\n        for query in self.queries:\r\n            results = db.retrieve_with_parent(query, top_k=top_k)\r\n            total_parents += len(results)\r\n\r\n        avg_parents = total_parents / len(self.queries)\r\n\r\n        return {\r\n            \"parent_size\": parent_size,\r\n            \"child_size\": child_size,\r\n            \"child_to_parent_ratio\": parent_size / max(child_size, 1),\r\n            \"avg_parents_retrieved\": round(avg_parents, 2),\r\n        }\r\n\r\nbenchmark = ParentChildBenchmark(\r\n    embedder=embedder,\r\n    queries=[\"RAG retrieval\", \"vector search\", \"attention mechanism\"],\r\n    corpus=[t * 20 for t in docs_data],\r\n)\r\n\r\nconfigs = [(1000, 100), (500, 100), (500, 200), (300, 50)]\r\nprint(\"\\nParent-Child Configuration Comparison:\")\r\nfor parent_size, child_size in configs:\r\n    result = benchmark.evaluate_config(parent_size, child_size)\r\n    print(f\"  Parent={result['parent_size']}, Child={result['child_size']}: \"\r\n          f\"ratio={result['child_to_parent_ratio']}x, \"\r\n          f\"avg_parents={result['avg_parents_retrieved']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parent-child and multi-vector retrieval solve the embedding resolution problem. Small-to-big embeds child chunks for precise matching but returns parent chunks for full context. Sentence window retrieval expands matched sentences with surrounding context using natural boundaries. Multi-vector representation creates specialized embeddings (summary, questions, passages, keywords) per document, enabling diverse retrieval strategies. Hierarchical indices provide coarse-to-fine search: document-level filtering first, then chunk-level precision. Implementation patterns leverage vector DB metadata for parent-child ID mapping, metadata filtering for scope control, and recursive retrieval for iterative refinement. These patterns typically improve recall@5 by 15-30% over flat chunking while maintaining the same generation quality."
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
            children: "Decouple retrieval from context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embed small (50-200 tokens), return large (500-2000 tokens)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use sentence windows for precision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match sentences, expand with N before and after for context"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generate questions for documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Question embeddings bridge the vocabulary gap between users and documents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Build hierarchical indices for scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document-level coarse filter first, then chunk-level search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Leverage metadata in vector DB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store parent_id, doc_type, category as metadata for filtering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Benchmark parent-child ratios"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test 5:1 to 10:1 parent-to-child token ratios for your domain"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "rag11-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What is the small-to-big retrieval pattern and why is it more effective than flat chunking?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Small-to-big retrieval addresses the fundamental tension between retrieval precision and generation context. In flat chunking, you choose a single chunk size — small chunks (50-100 tokens) give precise retrieval but lack context for the LLM to generate good answers, while large chunks (500-1000 tokens) have full context but dilute the embedding signal, making retrieval less precise. Small-to-big solves this by decoupling the retrieval unit from the context unit: you embed small child chunks (50-200 tokens) for high-precision semantic matching, then return their parent chunks (500-2000 tokens) to the LLM. The parent chunk contains the child's content plus surrounding context. This improves retrieval precision by 15-30% while maintaining generation quality because the LLM still receives full context. Implementation requires storing parent_id in child chunk metadata and a lookup table mapping child IDs to parent texts."
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
      "data-qid": "rag11-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How does sentence window retrieval work and when should you use it over small-to-big?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sentence window retrieval embeds individual sentences, then retrieves with window expansion: when a sentence matches the query, you return N sentences before and after it (the default window is typically 2-5 sentences on each side). The window expansion uses natural sentence boundaries rather than arbitrary character cutoffs, making the context more coherent. Use sentence window retrieval when your content has strong sentence-level semantics — conversational data, news articles, and research papers benefit most. Use small-to-big when your content has larger thematic blocks — technical documentation, legal contracts, and book chapters. Sentence window retrieval excels at precise fact lookup (\"What is the boiling point of water?\") while small-to-big excels at broader understanding (\"Explain the water cycle\")."
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
      "data-qid": "rag11-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What is multi-vector representation and how does it improve retrieval?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Multi-vector representation creates multiple embedding vectors per document, each optimized for a different retrieval strategy. Common representations include: summary embedding (captures main topic for broad queries), question embeddings (anticipated questions the document answers — bridges the user-document vocabulary gap), passage embeddings (specific factual content for precise matches), and keyword embeddings (key terminology for exact matches). During search, a weighted combination of similarities across all representations produces the final score. This improves retrieval by 10-20% over single-vector approaches because different queries match different representations — a how-to query matches a question embedding, a definition query matches the summary, and a specific fact query matches a passage. The weights are tunable per query type or learned from user feedback."
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
      "data-qid": "rag11-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: Explain hierarchical indices and the coarse-to-fine search pattern.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hierarchical indices implement a two-level retrieval architecture. Level 1 is a document-level index where each document has a single embedding (typically from its title and abstract or summary). Level 2 contains chunk-level indices organized by parent document. The coarse-to-fine search pattern first searches the document-level index to find the top-K relevant documents (coarse filter), then searches only within those documents' chunk indices to find the most relevant passages (fine filter). This is significantly more efficient than searching all chunks directly because the document-level index is 10-100x smaller than the chunk-level index. The architecture also enables document-level filtering (by date, category, source) before any vector search, reducing the search space further. This pattern is essential for corpora with 100K+ documents where flat chunk search would be too slow."
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
      "data-qid": "rag11-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How do you implement parent-child ID mapping in a production vector database?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Production implementation stores parent_id as metadata on each child vector entry. In Pinecone, you add it to the metadata dict: `{\"type\": \"child\", \"parent_id\": \"parent-001\", \"doc_id\": \"doc-001\"}`. The parent text is stored separately — either as a metadata field on a parent-type vector or in an external key-value store (Redis, DynamoDB). During retrieval: (1) search child vectors with a metadata filter `{\"type\": \"child\"}`, (2) extract parent_id from each result, (3) deduplicate by parent_id, (4) look up parent text by parent_id. This gives you unique parent contexts even when multiple child chunks match the query. The child-to-parent ratio is typically 5:1 to 10:1 in token count. Storage cost increases because you store both child embeddings (for search) and parent texts (for context), but this is negligible compared to the retrieval quality improvement."
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
      "data-qid": "rag11-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How does recursive retrieval work with parent-child structures?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Recursive retrieval performs multiple search iterations, using results from each iteration to refine the query for the next. In parent-child structures, the first iteration searches child embeddings with the original query. The top parent texts are examined to extract new key terms, which expand the query. The expanded query is used for a second search, potentially retrieving different parent contexts. This continues until convergence (few new results) or a max iteration limit (typically 3). Recursive retrieval improves recall for complex queries by 20-40% because the initial query might miss relevant terms that appear only in the retrieved documents. For example, searching \"machine learning frameworks\" retrieves documents mentioning \"PyTorch\" and \"TensorFlow\", and the expanded query \"PyTorch TensorFlow machine learning frameworks\" retrieves comparison documents that the original query missed."
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
      "data-qid": "rag11-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: What are the trade-offs of multi-vector vs single-vector retrieval?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Multi-vector retrieval stores 3-5x more embedding vectors per document (summary, questions, passages, keywords), increasing storage cost and ingestion latency. Search latency also increases because you compute similarity against all representations and combine scores. However, multi-vector improves retrieval recall by 10-20% and is more robust to query phrasing variations — a poorly phrased query might miss a passage embedding but match a question embedding. Single-vector is simpler, cheaper, and faster, making it suitable for small corpora (under 10K documents) or latency-sensitive applications. Multi-vector is worth the extra cost for large corpora (100K+ documents), high-stakes retrieval (medical, legal), and applications where users phrase queries unpredictably. A practical middle ground: use single-vector for the first pass and multi-vector reranking for top candidates."
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
      "data-qid": "rag11-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How do you choose the optimal parent and child chunk sizes?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Parent size should match the LLM's context window and the typical answer complexity. For most applications, 500-1500 tokens per parent works well — large enough for the LLM to understand the full context, small enough to exclude irrelevant content. Child size should optimize retrieval precision: 50-200 tokens. The child-to-parent ratio should be 5:1 to 10:1. For example, 1000-token parents with 100-token children gives a 10:1 ratio. To find optimal sizes for your domain, run a benchmark: test 3-5 parent sizes × 3-5 child sizes on a representative query set, measuring retrieval precision (recall@k) and generation quality (faithfulness, completeness). The optimal sizes depend on content type — technical documentation needs larger parents (1000-1500 tokens) while conversational content works with smaller parents (300-500 tokens)."
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
      "data-qid": "rag11-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: How do you generate effective question embeddings for documents?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Question embeddings anticipate the queries users will ask and embed those alongside the document. Generation approaches: (1) LLM-based: prompt an LLM with the document text and ask \"What questions does this document answer?\" — generate 3-10 questions per document. (2) Template-based: extract key entities and slot them into templates like \"What is [entity]?\" or \"How does [entity] work?\" (3) Historical: use past user queries that led to this document being clicked as question embeddings. The generated questions are embedded using the same embedding model as queries. During search, the query embedding is compared against both passage embeddings and question embeddings — a match on either boosts the document's score. The question weight in the multi-vector combination is typically 0.3-0.5 because question matching is the most robust against query phrasing variations."
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
      "data-qid": "rag11-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How do you evaluate parent-child retrieval vs standard retrieval?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Evaluate on three dimensions: retrieval precision, generation quality, and latency. For retrieval precision, use recall@k (does the parent appear in top-k results?) and precision@k (are the retrieved parents relevant?). Compare parent-child against flat chunking at equivalent chunk sizes — for example, compare 1000-token flat chunks against 1000-token parents with 100-token children. For generation quality, measure answer faithfulness (are all claims supported by the retrieved context?) and completeness (does the answer cover all information the query asks for?). Parent-child typically matches or exceeds flat chunking on faithfulness while improving recall by 15-30%. For latency, parent-child adds a metadata lookup step (parent resolution) but this is sub-millisecond. The main latency difference is that child embedding dimension is the same as flat chunking, so search time is comparable."
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
      "data-qid": "rag-s11-quiz1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " What problem does small-to-big retrieval solve?"]
      }), "\nA. Embedding model token limits\nB. The mismatch between retrieval precision and generation context size\nC. Document storage costs\nD. LLM hallucination\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s11-quiz2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " In sentence window retrieval, what does the \"window\" refer to?"]
      }), "\nA. The size of the embedding model\nB. The number of sentences before and after the matched sentence\nC. The time window for query caching\nD. The character count of the matched sentence\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s11-quiz3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " What is the purpose of question embeddings in multi-vector retrieval?"]
      }), "\nA. To reduce the number of documents to search\nB. To bridge the vocabulary gap between user queries and document language\nC. To compress document storage\nD. To replace passage embeddings entirely\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s11-quiz4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " In a hierarchical index, what happens during the coarse search phase?"]
      }), "\nA. All chunk embeddings are searched exhaustively\nB. Document-level embeddings are searched to find relevant documents\nC. Metadata is scanned without embeddings\nD. The query is decomposed into sub-queries\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s11-quiz5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " How is parent-child ID mapping typically implemented in vector databases?"]
      }), "\nA. By storing parent_id as a metadata field on child vector entries\nB. By concatenating parent and child text before embedding\nC. By using separate databases for parents and children\nD. By encoding parent_id into the embedding vector itself\nAnswer: A\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a small-to-big retrieval system using 500-token parents and 100-token children. Index 5 Wikipedia articles. Compare recall@5 against flat 500-token chunks on 20 test queries. Report precision improvement."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build a sentence window retriever with adaptive window sizing. Use query length and question words to predict window size (1-5 sentences). Test on 30 queries and measure whether adaptive windows outperform fixed-size windows."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a multi-vector index that stores summary, question, passage, and keyword embeddings per document. Implement weighted search with tunable weights. Demonstrate that different query types (definition, how-to, factual) benefit from different weight configurations."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a hierarchical index for a corpus of 20 documents. Build document-level embeddings from titles/abstracts and chunk-level embeddings from full text. Search 10 queries with coarse-to-fine and compare latency and precision vs flat chunk search."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a recursive retrieval system that uses results from each iteration to expand the query. Compare recall@10 with 1, 2, and 3 iterations on 20 complex queries. Measure the diminishing returns per additional iteration."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Core principle: Decouple retrieval granularity from generation context"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implementation pattern: Parent-child ID mapping via vector DB metadata"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Small-to-big: Embed children (50-200t), return parents (500-2000t)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Sentence window: Match sentences, expand with N surrounding sentences"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Multi-vector: Summary + questions + passages + keywords per document"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Hierarchical: Coarse document search → fine chunk search"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Recursive: Iterative refinement using retrieved content"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ratio guide: 5:1 to 10:1 parent-to-child token ratio"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Benchmark: Test 3-5 size combinations on your domain"
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
            children: "Explain the core idea of Parent-Child & Multi-Vector Retrieval in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function in this chapter-Child & Multi-Vector Retrieval."
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
            children: "Describe a production bug caused by misunderstanding this technique-Child & Multi-Vector Retrieval. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique-Child & Multi-Vector Retrieval from 10 users to 10 million?"
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
            children: "Compare Parent-Child & Multi-Vector Retrieval with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component built on this-Child & Multi-Vector Retrieval."
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
            children: "How does Parent-Child & Multi-Vector Retrieval behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of this technique-Child & Multi-Vector Retrieval run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of this technique-Child & Multi-Vector Retrieval that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Parent-Child & Multi-Vector Retrieval explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Parent-Child & Multi-Vector Retrieval\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Parent-Child & Multi-Vector Retrieval to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Parent-Child & Multi-Vector Retrieval (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Parent-Child & Multi-Vector Retrieval and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Parent-Child & Multi-Vector Retrieval-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Parent-Child & Multi-Vector Retrieval interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Parent-Child & Multi-Vector Retrieval in production today?"
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
        }), " Parent-Child & Multi-Vector Retrieval builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Parent-Child & Multi-Vector Retrieval before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Parent-Child & Multi-Vector Retrieval is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Parent-Child & Multi-Vector Retrieval in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Parent-Child & Multi-Vector Retrieval chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Parent-Child & Multi-Vector Retrieval is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 12 Parent Child Multi Vector is ___. — Answer: O(n) embedding, O(log n) ANN search"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 12 Parent Child Multi Vector is ___. — Answer: empty retrieval, hallucination, chunk boundary issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Parent-Child & Multi-Vector Retrieval issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Parent-Child & Multi-Vector Retrieval in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Parent-Child & Multi-Vector Retrieval that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of this technique-Child & Multi-Vector Retrieval is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Parent-Child & Multi-Vector Retrieval in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Parent-Child & Multi-Vector Retrieval and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of this technique-Child & Multi-Vector Retrieval on an empty input?"
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
            children: "Complete Medium exercises, explain Parent-Child & Multi-Vector Retrieval to someone else"
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
        children: "Always write a one-line example of Parent-Child & Multi-Vector Retrieval from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Parent-Child & Multi-Vector Retrieval when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Parent-Child & Multi-Vector Retrieval twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Parent-Child & Multi-Vector Retrieval snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Parent-Child & Multi-Vector Retrieval listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Parent-Child & Multi-Vector Retrieval to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Parent-Child & Multi-Vector Retrieval by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Parent-Child & Multi-Vector Retrieval to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
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
        children: "'Advanced RAG Techniques' by Andrei Lopatenko (Towards Data Science) & Multi-Vector Retrieval"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 12 — builds the foundation for 12 Parent Child Multi Vector"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 12 Parent Child Multi Vector with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 12 Parent Child Multi Vector fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 12 Parent Child Multi Vector"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 12 Parent Child Multi Vector"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 12 Parent Child Multi Vector?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 12 Parent Child Multi Vector?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 12 Parent Child Multi Vector asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 12 Parent Child Multi Vector?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parent-Child & Multi-Vector Retrieval is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Parent-Child & Multi-Vector Retrieval."
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
        children: "Parent-Child & Multi-Vector Retrieval emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Parent-Child & Multi-Vector Retrieval today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Parent-Child & Multi-Vector Retrieval — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Parent-Child & Multi-Vector Retrieval changes quickly; focus on fundamentals that remain stable."
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
            children: "12 Parent Child Multi Vector is like a GPS navigation system"
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
          }), " — this chapter contributes the Parent-Child & Multi-Vector Retrieval skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-12parentchildmultivector-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Parent-Child & Multi-Vector Retrieval in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "RAG (Retrieval-Augmented Generation) grounds LLM responses in external documents retrieved at query time, reducing hallucination by 40-80% vs zero-shot generation."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-12parentchildmultivector-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Retrieving too many chunks (k>10) dilutes relevance and exceeds token limits. Always start with k=3-5 and tune based on recall@k on a validation set."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-12parentchildmultivector-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Parent-Child & Multi-Vector Retrieval approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Retrieval: O(log n) with ANN index (HNSW/IVF). Embedding: O(n*d) where d=embedding dim. Generation: O(context_len^2) attention."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-12parentchildmultivector-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Parent-Child & Multi-Vector Retrieval NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "RAG is NOT the right choice when: (1) the knowledge base is tiny (<100 docs) and fits in context, (2) you need the model to learn new reasoning patterns (use fine-tuning), (3) sub-100ms latency is required."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-12parentchildmultivector-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Parent-Child & Multi-Vector Retrieval applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Parent-Child & Multi-Vector Retrieval (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Parent-Child & Multi-Vector Retrieval (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Parent-Child & Multi-Vector Retrieval-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Parent-Child & Multi-Vector Retrieval in production at scale"
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
        }), " — Facebook's fast similarity search library & Multi-Vector Retrieval"]
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
        }), ": Add structured logging at each stage of the 12 Parent Child Multi Vector pipeline to identify exactly where the failure occurs."]
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
        children: "Explain Parent-Child & Multi-Vector Retrieval in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Parent-Child & Multi-Vector Retrieval."
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
        children: "Tell me about a time you debugged a Parent-Child & Multi-Vector Retrieval problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Parent-Child & Multi-Vector Retrieval is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_12_parent_child_multi_vector(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 12 Parent Child Multi Vector.\r\n\r\n    Key concepts: chunking, embedding, retrieval, reranking, generation\r\n    Complexity: O(n) embedding, O(log n) ANN search\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 12 Parent Child Multi Vector here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain Parent-Child & Multi-Vector Retrieval without notes"
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
        href: "/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/13-knowledge-graph-rag",
        children: "Knowledge Graph RAG"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parent-Child & Multi-Vector Retrieval, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Parent-Child & Multi-Vector Retrieval depends on input size and distribution — always benchmark for your own data."
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