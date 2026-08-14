"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[83640],{

/***/ 40542
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_12_rag_vector_databases_04_chunking_strategies_md_799_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-12-rag-vector-databases-04-chunking-strategies-md-799.json
const site_docs_courses_ai_engineering_placement_12_rag_vector_databases_04_chunking_strategies_md_799_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/rag-vector-databases/04-chunking-strategies","title":"Chunking Strategies","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/12-rag-vector-databases/04-chunking-strategies.md","sourceDirName":"courses/ai-engineering-placement/12-rag-vector-databases","slug":"/ai-engineering-placement/12-rag-vector-databases/04-chunking-strategies","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/04-chunking-strategies","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":149,"frontMatter":{"id":"04-chunking-strategies","slug":"/ai-engineering-placement/12-rag-vector-databases/04-chunking-strategies","title":"Chunking Strategies","sidebar_label":"Chunking Strategies","sidebar_position":149},"sidebar":"placementSidebar","previous":{"title":"Vector Database Basics","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/03-vector-database-basics"},"next":{"title":"Document Retrieval","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/05-document-retrieval"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/12-rag-vector-databases/04-chunking-strategies.md


const frontMatter = {
	id: '04-chunking-strategies',
	slug: '/ai-engineering-placement/12-rag-vector-databases/04-chunking-strategies',
	title: 'Chunking Strategies',
	sidebar_label: 'Chunking Strategies',
	sidebar_position: 149
};
const contentTitle = 'Chunking Strategies';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
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
  "value": "4.1 Chunking Fundamentals",
  "id": "41-chunking-fundamentals",
  "level": 2
}, {
  "value": "Why Chunk?",
  "id": "why-chunk",
  "level": 3
}, {
  "value": "Key Parameters",
  "id": "key-parameters",
  "level": 3
}, {
  "value": "4.2 Fixed-Size Chunking",
  "id": "42-fixed-size-chunking",
  "level": 2
}, {
  "value": "Token-Based Fixed Chunking",
  "id": "token-based-fixed-chunking",
  "level": 3
}, {
  "value": "4.3 Semantic Chunking",
  "id": "43-semantic-chunking",
  "level": 2
}, {
  "value": "Sentence-Based Chunking",
  "id": "sentence-based-chunking",
  "level": 3
}, {
  "value": "Paragraph-Based Chunking",
  "id": "paragraph-based-chunking",
  "level": 3
}, {
  "value": "Topic Segmentation (LLM-Based)",
  "id": "topic-segmentation-llm-based",
  "level": 3
}, {
  "value": "4.4 Recursive Chunking",
  "id": "44-recursive-chunking",
  "level": 2
}, {
  "value": "LangChain-Compatible Interface",
  "id": "langchain-compatible-interface",
  "level": 3
}, {
  "value": "4.5 Document-Aware Chunking",
  "id": "45-document-aware-chunking",
  "level": 2
}, {
  "value": "4.5.1 Code Chunking",
  "id": "451-code-chunking",
  "level": 3
}, {
  "value": "4.5.2 HTML Chunking",
  "id": "452-html-chunking",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "4.5.3 Markdown Chunking",
  "id": "453-markdown-chunking",
  "level": 3
}, {
  "value": "4.5.4 PDF Chunking",
  "id": "454-pdf-chunking",
  "level": 3
}, {
  "value": "4.6 Chunk Evaluation",
  "id": "46-chunk-evaluation",
  "level": 2
}, {
  "value": "4.6.1 Retrieval Metrics",
  "id": "461-retrieval-metrics",
  "level": 3
}, {
  "value": "4.6.2 Information Density",
  "id": "462-information-density",
  "level": 3
}, {
  "value": "4.6.3 Chunk Boundary Quality",
  "id": "463-chunk-boundary-quality",
  "level": 3
}, {
  "value": "4.7 Practical Optimization",
  "id": "47-practical-optimization",
  "level": 2
}, {
  "value": "4.7.1 Chunk Size Tuning",
  "id": "471-chunk-size-tuning",
  "level": 3
}, {
  "value": "4.7.2 Multi-Strategy Chunking",
  "id": "472-multi-strategy-chunking",
  "level": 3
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
        id: "chunking-strategies",
        children: "Chunking Strategies"
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
            children: "Understand the impact of chunk size and overlap on retrieval quality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement fixed-size, semantic, and recursive chunking strategies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply document-aware chunking for code, HTML, PDFs, and markdown"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate chunking quality using retrieval metrics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimize chunk boundaries for specific content types"
          })]
        })]
      })]
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
            children: "4.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chunking Fundamentals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Why chunk? Token limits, embedding quality, context relevance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-Size Chunking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Character/token windows with configurable overlap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic Chunking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sentence boundary detection, topic segmentation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive Chunking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LangChain-style recursive split by separators"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document-Aware Chunking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code, HTML, markdown, PDF structure preservation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chunk Evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval precision, information coverage, token utilization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Raw Document] --> B{Chunking Strategy}\n    B --> C[Fixed-Size]\n    B --> D[Semantic]\n    B --> E[Recursive]\n    B --> F[Document-Aware]\n    C --> G[Chunks + Overlap]\n    D --> H[Sentence Boundaries]\n    E --> I[Split by Separators]\n    F --> J[Structure Tags]\n    G --> K[Embedding]\n    H --> K\n    I --> K\n    J --> K\n    K --> L[Vector Index]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "41-chunking-fundamentals",
      children: "4.1 Chunking Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chunking divides documents into smaller pieces for embedding and retrieval. The quality of chunking directly affects retrieval performance."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-chunk",
      children: "Why Chunk?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Token limits"
        }), ": Embedding models have maximum input lengths (e.g., 512 tokens)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Focused relevance"
        }), ": Smaller chunks return more precise matches"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cost efficiency"
        }), ": Embedding smaller chunks wastes less on irrelevant content"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Targeted retrieval"
        }), ": Multiple chunks per document improve recall"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import List, Dict, Optional\nimport re\n\nclass ChunkStats:\n    def __init__(self, chunks: List[str]):\n        self.num_chunks = len(chunks)\n        self.avg_chars = sum(len(c) for c in chunks) / max(len(chunks), 1)\n        self.min_chars = min(len(c) for c in chunks) if chunks else 0\n        self.max_chars = max(len(c) for c in chunks) if chunks else 0\n\n    def report(self) -> Dict:\n        return {\n            \"num_chunks\": self.num_chunks,\n            \"avg_chars\": round(self.avg_chars, 1),\n            \"min_chars\": self.min_chars,\n            \"max_chars\": self.max_chars,\n        }\n\ntext = \"RAG is a technique for grounding LLM responses. \" * 20\nchunks = [text[i:i+100] for i in range(0, len(text), 100)]\nprint(ChunkStats(chunks).report())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-parameters",
      children: "Key Parameters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chunk size"
        }), ": Number of characters or tokens per chunk (typical: 200-1000 tokens)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Overlap"
        }), ": Number of tokens shared between consecutive chunks (typical: 10-20%)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Separator"
        }), ": Character(s) used as boundary markers (sentence end, paragraph, etc.)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\nclass ChunkingConfig:\n    chunk_size: int = 500\n    chunk_overlap: int = 50\n    separator: str = \" \"\n    respect_boundaries: bool = True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "42-fixed-size-chunking",
      children: "4.2 Fixed-Size Chunking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The simplest strategy: split text into chunks of equal size with overlap."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class FixedSizeChunker:\n    def __init__(self, chunk_size: int = 500, overlap: int = 50):\n        self.chunk_size = chunk_size\n        self.overlap = overlap\n\n    def chunk(self, text: str) -> List[str]:\n        if len(text) <= self.chunk_size:\n            return [text]\n\n        chunks = []\n        start = 0\n        while start < len(text):\n            end = start + self.chunk_size\n            if end >= len(text):\n                chunks.append(text[start:])\n                break\n\n            # Try to break at a sentence boundary within the window\n            if self._has_sentence_boundary(text[start:end]):\n                end = self._find_sentence_boundary(text, start, end)\n\n            chunks.append(text[start:end])\n            start = end - self.overlap\n\n        return chunks\n\n    def _has_sentence_boundary(self, text: str) -> bool:\n        return bool(re.search(r'[.!?]\\s', text))\n\n    def _find_sentence_boundary(self, text: str, start: int, end: int) -> int:\n        window = text[start:end]\n        sentence_ends = [m.end() for m in re.finditer(r'[.!?]\\s', window)]\n        if sentence_ends:\n            return start + sentence_ends[-1]\n        return end\n\n    def chunk_with_stats(self, text: str) -> Dict:\n        chunks = self.chunk(text)\n        return {\n            \"chunks\": chunks,\n            \"stats\": ChunkStats(chunks).report(),\n        }\n\nchunker = FixedSizeChunker(chunk_size=200, overlap=30)\ndoc = \"RAG is powerful. \" * 50\nresult = chunker.chunk_with_stats(doc)\nprint(f\"Fixed-size chunks: {result['stats']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "token-based-fixed-chunking",
      children: "Token-Based Fixed Chunking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Character-based chunking has variable token counts across languages. Token-based chunking is more consistent."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class TokenFixedChunker:\n    def __init__(self, chunk_tokens: int = 256, overlap_tokens: int = 32):\n        self.chunk_tokens = chunk_tokens\n        self.overlap_tokens = overlap_tokens\n\n    def estimate_tokens(self, text: str) -> int:\n        return len(text) // 4  # Rough estimate: ~4 chars per token\n\n    def chunk(self, text: str) -> List[str]:\n        char_budget = self.chunk_tokens * 4\n        overlap_chars = self.overlap_tokens * 4\n\n        chunks = []\n        start = 0\n        while start < len(text):\n            end = min(start + char_budget, len(text))\n            chunks.append(text[start:end])\n            start = end - overlap_chars\n            if start < 0:\n                start = 0\n\n        return chunks\n\ntk_chunker = TokenFixedChunker(chunk_tokens=256, overlap_tokens=32)\nchunks = tk_chunker.chunk(\"AI \" * 1000)\nprint(f\"Token-based chunks: {len(chunks)} chunks, {ChunkStats(chunks).report()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "43-semantic-chunking",
      children: "4.3 Semantic Chunking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Semantic chunking respects natural language boundaries like sentences, paragraphs, and topic shifts."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sentence-based-chunking",
      children: "Sentence-Based Chunking"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SentenceChunker:\n    def __init__(self, max_sentences_per_chunk: int = 5, overlap_sentences: int = 1):\n        self.max_sentences = max_sentences_per_chunk\n        self.overlap_sentences = overlap_sentences\n\n    def extract_sentences(self, text: str) -> List[str]:\n        sentences = re.split(r'(?<=[.!?])\\s+', text)\n        return [s.strip() for s in sentences if s.strip()]\n\n    def chunk(self, text: str) -> List[str]:\n        sentences = self.extract_sentences(text)\n        if len(sentences) <= self.max_sentences:\n            return [text]\n\n        chunks = []\n        i = 0\n        while i < len(sentences):\n            end = min(i + self.max_sentences, len(sentences))\n            chunk = \" \".join(sentences[i:end])\n            chunks.append(chunk)\n            i += self.max_sentences - self.overlap_sentences\n\n        return chunks\n\nsent_chunker = SentenceChunker(max_sentences_per_chunk=3, overlap_sentences=1)\ntext = \"Sentence one. Sentence two. Sentence three. Sentence four. Sentence five. Sentence six.\"\nchunks = sent_chunker.chunk(text)\nfor i, c in enumerate(chunks):\n    print(f\"Chunk {i}: {c[:100]}...\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "paragraph-based-chunking",
      children: "Paragraph-Based Chunking"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ParagraphChunker:\n    def __init__(self, max_paragraphs: int = 3, overlap_paragraphs: int = 0):\n        self.max_paragraphs = max_paragraphs\n        self.overlap_paragraphs = overlap_paragraphs\n\n    def extract_paragraphs(self, text: str) -> List[str]:\n        paragraphs = re.split(r'\\n\\s*\\n', text)\n        return [p.strip() for p in paragraphs if p.strip()]\n\n    def chunk(self, text: str) -> List[str]:\n        paragraphs = self.extract_paragraphs(text)\n        if len(paragraphs) <= self.max_paragraphs:\n            return [text]\n\n        chunks = []\n        i = 0\n        while i < len(paragraphs):\n            end = min(i + self.max_paragraphs, len(paragraphs))\n            chunk = \"\\n\\n\".join(paragraphs[i:end])\n            chunks.append(chunk)\n            i += self.max_paragraphs - self.overlap_paragraphs\n\n        return chunks\n\npara_chunker = ParagraphChunker(max_paragraphs=2)\ndoc = \"Para one.\\n\\nPara two.\\n\\nPara three.\\n\\nPara four.\"\nchunks = para_chunker.chunk(doc)\nprint(f\"Paragraph chunks: {len(chunks)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "topic-segmentation-llm-based",
      children: "Topic Segmentation (LLM-Based)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use LLMs to detect topic boundaries for semantic chunking."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class TopicSegmenter:\n    def __init__(self):\n        self.topic_markers = [\n            \"introduction\", \"background\", \"methodology\",\n            \"results\", \"discussion\", \"conclusion\",\n            \"related work\", \"approach\", \"implementation\",\n            \"evaluation\", \"future work\",\n        ]\n\n    def segment(self, text: str) -> List[Dict]:\n        paragraphs = re.split(r'\\n\\s*\\n', text)\n        segments = []\n        current_segment = {\"topic\": \"general\", \"text\": []}\n\n        for para in paragraphs:\n            detected_topic = self._detect_topic(para)\n            if detected_topic and current_segment[\"text\"]:\n                segments.append({\n                    \"topic\": current_segment[\"topic\"],\n                    \"text\": \"\\n\\n\".join(current_segment[\"text\"]),\n                })\n                current_segment = {\"topic\": detected_topic, \"text\": [para]}\n            else:\n                current_segment[\"text\"].append(para)\n\n        if current_segment[\"text\"]:\n            segments.append({\n                \"topic\": current_segment[\"topic\"],\n                \"text\": \"\\n\\n\".join(current_segment[\"text\"]),\n            })\n\n        return segments\n\n    def _detect_topic(self, text: str) -> Optional[str]:\n        lower = text.lower()\n        for marker in self.topic_markers:\n            if marker in lower[:200]:\n                return marker\n        return None\n\nsegmenter = TopicSegmenter()\ndoc = \"\"\"Introduction to RAG.\n\nRAG combines retrieval and generation.\n\nMethodology.\n\nWe use embeddings for similarity search.\n\nResults show improved accuracy.\"\"\"\nsegments = segmenter.segment(doc)\nfor seg in segments:\n    print(f\"Topic: {seg['topic']} ({len(seg['text'])} chars)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "44-recursive-chunking",
      children: "4.4 Recursive Chunking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LangChain-style recursive chunking tries multiple separators in order, falling back to smaller splits when a chunk exceeds the size limit."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RecursiveChunker:\n    def __init__(\n        self,\n        chunk_size: int = 1000,\n        chunk_overlap: int = 200,\n        separators: List[str] = None,\n    ):\n        self.chunk_size = chunk_size\n        self.chunk_overlap = chunk_overlap\n        self.separators = separators or [\"\\n\\n\", \"\\n\", \". \", \" \", \"\"]\n\n    def chunk(self, text: str) -> List[str]:\n        return self._recursive_split(text, self.separators)\n\n    def _recursive_split(self, text: str, separators: List[str]) -> List[str]:\n        if len(text) <= self.chunk_size or not separators:\n            return [text] if text.strip() else []\n\n        separator = separators[0]\n        if not separator:\n            return self._split_by_chars(text)\n\n        splits = text.split(separator)\n        chunks = []\n        current = []\n\n        for split in splits:\n            candidate = separator.join(current + [split])\n            if len(candidate) <= self.chunk_size:\n                current.append(split)\n            else:\n                if current:\n                    chunk_str = separator.join(current)\n                    chunks.append(chunk_str)\n                if len(split) > self.chunk_size:\n                    deeper = self._recursive_split(split, separators[1:])\n                    chunks.extend(deeper)\n                else:\n                    current = [split]\n\n        if current:\n            chunk_str = separator.join(current)\n            chunks.append(chunk_str)\n\n        return self._apply_overlap(chunks)\n\n    def _split_by_chars(self, text: str) -> List[str]:\n        return [text[i:i + self.chunk_size] for i in range(0, len(text), self.chunk_size - self.chunk_overlap)]\n\n    def _apply_overlap(self, chunks: List[str]) -> List[str]:\n        if self.chunk_overlap <= 0 or len(chunks) <= 1:\n            return chunks\n\n        overlapped = []\n        for i, chunk in enumerate(chunks):\n            if i > 0:\n                prev = chunks[i - 1]\n                overlap_text = prev[-self.chunk_overlap:] if len(prev) > self.chunk_overlap else prev\n                chunk = overlap_text + chunk\n            overlapped.append(chunk)\n        return overlapped\n\nrecursive = RecursiveChunker(chunk_size=300, chunk_overlap=50)\ndoc = \"Par1.\\n\\nPar2.\\n\\nPar3.\\n\\nPar4.\\n\\nPar5.\" * 10\nchunks = recursive.chunk(doc)\nprint(f\"Recursive chunks: {len(chunks)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "langchain-compatible-interface",
      children: "LangChain-Compatible Interface"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class LangChainChunker:\n    def __init__(self, chunk_size: int, chunk_overlap: int):\n        self.chunk_size = chunk_size\n        self.chunk_overlap = chunk_overlap\n\n    def split_documents(self, documents: List[Dict]) -> List[Dict]:\n        \"\"\"Simulates LangChain's RecursiveCharacterTextSplitter.\"\"\"\n        all_chunks = []\n        chunker = RecursiveChunker(\n            chunk_size=self.chunk_size,\n            chunk_overlap=self.chunk_overlap,\n        )\n\n        for doc in documents:\n            chunks = chunker.chunk(doc[\"text\"])\n            for chunk_text in chunks:\n                all_chunks.append({\n                    \"text\": chunk_text,\n                    \"metadata\": {**doc.get(\"metadata\", {}), \"source\": doc.get(\"source\", \"\")},\n                })\n\n        return all_chunks\n\nlc = LangChainChunker(chunk_size=500, chunk_overlap=50)\ndocs = [\n    {\"text\": \"Long document text here. \" * 100, \"source\": \"doc1.txt\", \"metadata\": {\"author\": \"AI\"}},\n]\nchunks = lc.split_documents(docs)\nprint(f\"LangChain-style splitting: {len(chunks)} chunks\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "45-document-aware-chunking",
      children: "4.5 Document-Aware Chunking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Different document types need specialized chunking strategies."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "451-code-chunking",
      children: "4.5.1 Code Chunking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Preserve function and class boundaries."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class CodeChunker:\n    def __init__(self, language: str = \"python\"):\n        self.language = language\n\n    def chunk(self, code: str) -> List[str]:\n        if self.language == \"python\":\n            return self._chunk_python(code)\n        elif self.language == \"javascript\":\n            return self._chunk_js(code)\n        return [code]\n\n    def _chunk_python(self, code: str) -> List[str]:\n        chunks = []\n        current = []\n        for line in code.split(\"\\n\"):\n            if line.startswith((\"def \", \"class \", \"@\", \"import \")):\n                if current:\n                    chunks.append(\"\\n\".join(current))\n                    current = []\n            current.append(line)\n\n        if current:\n            chunks.append(\"\\n\".join(current))\n        return chunks\n\n    def _chunk_js(self, code: str) -> List[str]:\n        # Split by function/class declarations\n        import re\n        parts = re.split(r'(?=function\\s|class\\s|const\\s|let\\s|var\\s)', code)\n        return [p.strip() for p in parts if p.strip()]\n\ncode_chunker = CodeChunker(\"python\")\npython_code = \"\"\"\ndef hello():\n    print(\"hello\")\n\nclass MyClass:\n    def method(self):\n        pass\n\ndef world():\n    print(\"world\")\n\"\"\"\nchunks = code_chunker.chunk(python_code)\nfor i, c in enumerate(chunks):\n    print(f\"Code chunk {i}: {c[:60]}...\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "452-html-chunking",
      children: "4.5.2 HTML Chunking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Preserve HTML structure with heading-based splits."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class HTMLChunker:\n    def __init__(self):\n        self.heading_tags = [\"h1\", \"h2\", \"h3\", \"h4\", \"h5\", \"h6\"]\n\n    def chunk(self, html: str) -> List[Dict]:\n        from bs4 import BeautifulSoup\n        soup = BeautifulSoup(html, \"html.parser\")\n\n        sections = []\n        current_section = {\"heading\": \"root\", \"content\": []}\n\n        for element in soup.children:\n            if element.name in self.heading_tags:\n                if current_section[\"content\"]:\n                    sections.append(current_section)\n                current_section = {\"heading\": element.get_text(strip=True), \"content\": []}\n            else:\n                current_section[\"content\"].append(str(element))\n\n        if current_section[\"content\"]:\n            sections.append(current_section)\n\n        return [\n            {\"heading\": s[\"heading\"], \"text\": \" \".join(s[\"content\"])}\n            for s in sections\n        ]\n\nhtml_chunker = HTMLChunker()\nhtml_doc = \"<h1>Intro</h1><p>Text</p><h2>Details</h2><p>More text</p>\"\n\n## sections = html_chunker.chunk(html_doc)\n\n## for s in sections:\n\n##     print(f\"HTML Section: {s['heading']}\")\nprint(\"HTML chunker ready (requires beautifulsoup4)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "453-markdown-chunking",
      children: "4.5.3 Markdown Chunking"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MarkdownChunker:\n    def __init__(self):\n        self.heading_pattern = re.compile(r'^(#{1,6})\\s+(.+)$', re.MULTILINE)\n\n    def chunk(self, markdown: str) -> List[Dict]:\n        sections = []\n        current = {\"heading\": None, \"level\": 0, \"text\": []}\n\n        for line in markdown.split(\"\\n\"):\n            match = self.heading_pattern.match(line)\n            if match:\n                if current[\"text\"]:\n                    sections.append(current)\n                level = len(match.group(1))\n                current = {\"heading\": match.group(2), \"level\": level, \"text\": []}\n            else:\n                current[\"text\"].append(line)\n\n        if current[\"text\"]:\n            sections.append(current)\n\n        return [\n            {\n                \"heading\": s[\"heading\"],\n                \"level\": s[\"level\"],\n                \"text\": \"\\n\".join(s[\"text\"]).strip(),\n            }\n            for s in sections\n        ]\n\nmd_chunker = MarkdownChunker()\nmd_doc = \"\"\"# Chapter 1\nContent here.\n\n## Section 1.1\nMore content.\n\n## Section 1.2\nEven more content.\"\"\"\nsections = md_chunker.chunk(md_doc)\nfor s in sections:\n    print(f\"MD section: {s['heading']} (level {s['level']})\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "454-pdf-chunking",
      children: "4.5.4 PDF Chunking"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PDFChunker:\n    def __init__(self, chunk_by_page: bool = True):\n        self.chunk_by_page = chunk_by_page\n\n    def chunk(self, pdf_text: str) -> List[Dict]:\n        # Simulate page-aware chunking\n        if self.chunk_by_page:\n            pages = pdf_text.split(\"\\f\")  # Form feed character as page break\n            return [\n                {\"page_num\": i + 1, \"text\": page.strip()}\n                for i, page in enumerate(pages)\n                if page.strip()\n            ]\n\n        # Otherwise, chunk by paragraphs\n        paragraphs = re.split(r'\\n\\s*\\n', pdf_text)\n        return [\n            {\"page_num\": None, \"text\": p.strip()}\n            for p in paragraphs if p.strip()\n        ]\n\npdf_chunker = PDFChunker(chunk_by_page=True)\npdf_text = \"Page 1 content.\\fPage 2 content.\\fPage 3 content.\"\npages = pdf_chunker.chunk(pdf_text)\nprint(f\"PDF pages: {len(pages)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "46-chunk-evaluation",
      children: "4.6 Chunk Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "461-retrieval-metrics",
      children: "4.6.1 Retrieval Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ChunkEvaluator:\n    def __init__(self, queries: List[str], relevant_chunks: Dict[str, List[int]]):\n        self.queries = queries\n        self.relevant_chunks = relevant_chunks\n\n    def evaluate_chunker(self, chunker, documents: List[str]) -> Dict:\n        chunks = []\n        chunk_to_doc = []\n        for doc_idx, doc in enumerate(documents):\n            doc_chunks = chunker.chunk(doc)\n            chunks.extend(doc_chunks)\n            chunk_to_doc.extend([doc_idx] * len(doc_chunks))\n\n        # Simple retrieval simulation\n        precision = self._compute_chunk_precision(chunks, chunk_to_doc)\n        coverage = self._compute_information_coverage(chunks, documents)\n\n        return {\n            \"num_chunks\": len(chunks),\n            \"precision\": round(precision, 3),\n            \"coverage\": round(coverage, 3),\n        }\n\n    def _compute_chunk_precision(self, chunks: List[str], chunk_to_doc: List[int]) -> float:\n        if not chunks:\n            return 0.0\n        relevant = 0\n        for chunk, doc_idx in zip(chunks, chunk_to_doc):\n            if self._is_chunk_relevant(chunk, doc_idx):\n                relevant += 1\n        return relevant / len(chunks)\n\n    def _compute_information_coverage(self, chunks: List[str], documents: List[str]) -> float:\n        if not documents or not chunks:\n            return 0.0\n\n        doc_words = set(\" \".join(documents).lower().split())\n        chunk_words = set(\" \".join(chunks).lower().split())\n\n        overlap = len(doc_words & chunk_words)\n        return overlap / len(doc_words) if doc_words else 0\n\n    def _is_chunk_relevant(self, chunk: str, doc_idx: int) -> bool:\n        return len(chunk) > 50\n\nevaluator = ChunkEvaluator(\n    queries=[\"What is RAG?\"],\n    relevant_chunks={\"What is RAG?\": [0]},\n)\n\ndocs = [\"RAG is retrieval augmented generation. \" * 50]\nchunker = FixedSizeChunker(300, 30)\nresults = evaluator.evaluate_chunker(chunker, docs)\nprint(f\"Chunk evaluation: {results}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "462-information-density",
      children: "4.6.2 Information Density"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def information_density(chunks: List[str], min_chars: int = 100) -> Dict:\n    valid = [c for c in chunks if len(c) >= min_chars]\n    return {\n        \"total_chunks\": len(chunks),\n        \"valid_chunks\": len(valid),\n        \"density_ratio\": round(len(valid) / len(chunks), 3) if chunks else 0,\n        \"avg_chunk_length\": round(sum(len(c) for c in chunks) / len(chunks), 1) if chunks else 0,\n    }\n\ndef token_utilization(chunks: List[str], max_tokens: int = 512) -> Dict:\n    utilizations = [len(c) / (max_tokens * 4) for c in chunks]\n    return {\n        \"avg_utilization\": round(sum(utilizations) / len(utilizations), 3) if utilizations else 0,\n        \"under_utilized\": sum(1 for u in utilizations if u < 0.3),\n        \"over_utilized\": sum(1 for u in utilizations if u > 1.0),\n    }\n\nchunks = [\"Short\"] * 10 + [\"A\" * 1500] * 5\nprint(information_density(chunks))\nprint(token_utilization(chunks))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "463-chunk-boundary-quality",
      children: "4.6.3 Chunk Boundary Quality"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def evaluate_boundaries(chunks: List[str]) -> Dict:\n    broken_sentences = 0\n    for chunk in chunks:\n        if chunk and chunk[-1] not in \".!?)\\\"'\":\n            if not chunk.endswith((\":\", \";\", \"}\", \"]\")) and \" \" in chunk:\n                # Check if last word seems incomplete\n                last_word = chunk.split()[-1]\n                if len(last_word) > 2 and not last_word.endswith((\".\", \",\", \";\", \":\", \")\", \"]\", \"}\", '\"', \"'\", \"!\", \"?\")):\n                    broken_sentences += 1\n\n    return {\n        \"total_chunks\": len(chunks),\n        \"broken_boundaries\": broken_sentences,\n        \"boundary_quality\": round(1 - broken_sentences / len(chunks), 3) if chunks else 1.0,\n    }\n\ngood_chunks = [\"Complete sentence here. \", \"Another sentence here.\"]\nbad_chunks = [\"Incomplete sent\", \"ence here. Another sent\", \"ence here.\"]\nprint(f\"Good boundaries: {evaluate_boundaries(good_chunks)}\")\nprint(f\"Bad boundaries: {evaluate_boundaries(bad_chunks)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "47-practical-optimization",
      children: "4.7 Practical Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "471-chunk-size-tuning",
      children: "4.7.1 Chunk Size Tuning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ChunkSizeTuner:\n    def __init__(self, documents: List[str], queries: List[str]):\n        self.documents = documents\n        self.queries = queries\n\n    def find_optimal_size(\n        self, sizes: List[int], overlap_ratio: float = 0.1\n    ) -> Dict:\n        results = []\n        for size in sizes:\n            overlap = int(size * overlap_ratio)\n            chunker = FixedSizeChunker(chunk_size=size, overlap=overlap)\n            chunks = []\n            for doc in self.documents:\n                chunks.extend(chunker.chunk(doc))\n\n            stats = ChunkStats(chunks)\n            results.append({\n                \"chunk_size\": size,\n                \"num_chunks\": stats.num_chunks,\n                \"avg_chars\": stats.avg_chars,\n                \"total_chars\": sum(len(c) for c in chunks),\n            })\n\n        return results\n\ntuner = ChunkSizeTuner(\n    documents=[\"Long document. \" * 100],\n    queries=[\"test query\"],\n)\nresults = tuner.find_optimal_size([200, 500, 1000, 2000])\nfor r in results:\n    print(f\"Size {r['chunk_size']}: {r['num_chunks']} chunks, avg {r['avg_chars']:.0f} chars\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "472-multi-strategy-chunking",
      children: "4.7.2 Multi-Strategy Chunking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Combine multiple strategies based on document type detection."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class AdaptiveChunker:\n    def __init__(self, default_chunk_size: int = 500):\n        self.strategies = {\n            \"code\": CodeChunker(\"python\"),\n            \"markdown\": MarkdownChunker(),\n            \"text\": RecursiveChunker(chunk_size=default_chunk_size),\n        }\n\n    def detect_type(self, text: str) -> str:\n        if text.strip().startswith((\"# \", \"## \")):\n            return \"markdown\"\n        if \"def \" in text[:500] or \"class \" in text[:500]:\n            return \"code\"\n        return \"text\"\n\n    def chunk(self, text: str) -> List[str]:\n        doc_type = self.detect_type(text)\n        chunker = self.strategies.get(doc_type, self.strategies[\"text\"])\n\n        if hasattr(chunker, 'chunk'):\n            raw = chunker.chunk(text)\n        else:\n            raw = [text]\n\n        if doc_type == \"markdown\":\n            return [s[\"text\"] for s in raw if s.get(\"text\")]\n        return raw\n\nadaptive = AdaptiveChunker()\ncode = \"def hello():\\n    pass\\n\\nclass Test:\\n    pass\\n\"\nresult = adaptive.chunk(code)\nprint(f\"Adaptive chunking: {len(result)} chunks\")\n"
      })
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
      children: "Understanding chunking strategies is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how chunking strategies works in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chunking strategy is one of the most impactful decisions in RAG system design. Fixed-size chunking offers simplicity and predictability. Semantic chunking respects natural language boundaries for.\nbetter coherence. Recursive chunking provides flexibility across separator hierarchies. Document-aware chunking preserves structural integrity in code, HTML, markdown, and PDF content. Evaluation metrics include retrieval precision (how many chunks are relevant),.\ninformation coverage (what fraction of document content is captured), boundary quality (sentence integrity at cut points), and token utilization (embedding model efficiency). The optimal chunk size depends on content type — technical documentation benefits from larger chunks (500-1000 chars) while conversational content works well with smaller chunks (200-500 chars)."
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
            children: "Overlap prevents fragmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10-20% overlap ensures no information is lost at boundaries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Respect sentence boundaries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Break at sentence ends, not mid-sentence, for coherent chunks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Match chunk size to content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code: function-level; MD: heading-level; Text: paragraph-level"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Test multiple sizes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chunk size impact varies by domain — benchmark before deciding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use recursive separators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start with double newlines, fall back to spaces for long blocks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monitor token utilization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chunks too small waste capacity; too large dilute relevance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "rag04-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What is the optimal chunk size for RAG and how does it depend on the content type?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Optimal chunk size varies by content type and embedding model token limits (typically 512 tokens). For technical documentation and research papers,.\n500-1000 characters (125-250 tokens) works well because each chunk contains enough context for meaningful retrieval. For conversational content and FAQs, 200-500 characters (50-125 tokens) is better — smaller chunks return more precise matches. For.\ncode, use function-level boundaries (entire function as one chunk) regardless of size. The token utilization metric helps assess efficiency: chunks much smaller than the model's max input length waste capacity,.\nwhile chunks near the limit may carry irrelevant content. Always benchmark 3-5 chunk sizes on your domain."
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
      "data-qid": "rag04-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How much overlap should you use between chunks and why?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chunk overlap of 10-20% of the chunk size prevents information loss at boundaries. For example, a 500-character chunk with 50-100 characters overlap ensures that a sentence or.\nconcept spanning a chunk boundary appears in at least one chunk. Without overlap, a query that matches content exactly at the split point may return neither chunk. The overlap tokens are redundant across chunks,.\nincreasing storage and embedding costs by 10-20% — this is usually worth the retrieval quality improvement. For content with strong sentence boundaries (periods,.\nnewlines), less overlap (5-10%) is sufficient. For dense technical content, use more overlap (15-20%)."
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
      "data-qid": "rag04-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: Compare fixed-size chunking, semantic chunking, and recursive chunking.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Fixed-size chunking splits by character or token count with configurable overlap — it is simple, predictable, and fast, but may break sentences and.\nlose coherence. Semantic chunking respects natural boundaries (sentences, paragraphs, topic shifts) — it produces more coherent chunks but is slower and.\nmay produce variable-length chunks. Recursive chunking (LangChain-style) tries multiple separators in order (double newline, single newline, period, space), falling back to smaller splits when a chunk exceeds the limit — it combines the reliability of fixed-size with the coherence of semantic. For.\nproduction, start with recursive chunking as it adapts well to varied content. Use semantic chunking when coherence is critical (e.g., legal contracts)."
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
      "data-qid": "rag04-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How do you chunk code files for a code-aware RAG system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use function/class boundary-aware chunking that preserves entire function bodies. Split Python code at def, class, and @decorator lines. For JavaScript, split at function,.\nclass, const, and export boundaries. Each chunk should contain one complete function or class definition — never split mid-method. For languages with curly braces,.\nuse brace-matching to find complete blocks. Include the function signature and docstring with each chunk for self-contained meaning. For very long functions,.\nyou may need to split at logical internal blocks, but this is a last resort. Test by verifying that no function body is split across chunks in a representative sample of your codebase."
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "def _chunk_python(self, code):\n    for line in code.split(\"\\n\"):\n        if line.startswith((\"def \", \"class \", \"@\")):\n            if current: chunks.append(\"\\n\".join(current))\n            current = []\n        current.append(line)"
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
      "data-qid": "rag04-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How do you evaluate chunking quality before deploying to production?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Measure four metrics: boundary quality (percentage of chunks that end at a sentence boundary — target > 90%), information density (percentage of chunks that contain meaningful content above a minimum length — target > 95%),.\ntoken utilization (average chunk length relative to model max — target 60-80%), and retrieval precision (percentage of retrieved chunks relevant to the query — measure on a test set). Use the ChunkEvaluator.\nclass to compare strategies:"
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "evaluator = ChunkEvaluator(queries, relevant_chunks)\nresults = evaluator.evaluate_chunker(chunker, documents)\nprint(f\"Precision: {results['precision']}, Coverage: {results['coverage']}\")"
          })
        }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Always evaluate on a diverse sample of your actual documents, not generic text."
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
      "data-qid": "rag04-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How do you handle chunking for PDFs and HTML documents differently?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-context",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "For PDFs, extract text with layout preservation (using PyMuPDF or pdfplumber) and chunk by page boundaries when pages are semantically cohesive. Use form-feed characters (\\f) as page separators and.\npreserve headings, tables, and lists. For HTML, parse the DOM and chunk by heading hierarchy (h1, h2, h3) — each section under a heading becomes a chunk. Preserve structural metadata: include the heading path (e.g.,.\n\"Chapter 3 > Section 3.1\") in the chunk metadata for hierarchical context. Strip navigation, ads, and boilerplate content before chunking. For.\nboth formats, maintain a reference to the original page/section URL for source attribution in generated answers."
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
      "data-qid": "rag04-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: What is topic segmentation and when would you use LLM-based chunking?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Topic segmentation detects natural topic boundaries in a document (e.g., \"Introduction\", \"Methodology\", \"Results\") and creates chunks aligned to these topics. LLM-based chunking uses a language model to identify topic shifts by analyzing paragraph embeddings or.\nsemantic similarity — it produces the most coherent chunks but is slow and expensive. Use rule-based topic segmentation (detecting heading patterns like \"## Introduction\",.\n\"## Related Work\") for structured documents like research papers and technical documentation. Use LLM-based chunking only for unstructured content where headings are absent or.\ninconsistent, and where chunk quality justifies the additional 100-500ms per document processing cost."
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
      "data-qid": "rag04-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How do you handle multi-format documents in a single RAG system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build an AdaptiveChunker that detects the document type (code, markdown, HTML, plain text, PDF) from file extension or content analysis and.\napplies the appropriate strategy. Maintain a registry of chunkers keyed by document type. For mixed documents (e.g., markdown with embedded code blocks),.\nhandle them in a single pipeline but preserve the structural context. Normalize all chunks to a common format (text + metadata) after chunking so downstream components (embedder,.\nindexer) receive uniform input. Include a \"type\" field in chunk metadata so retrieval and generation stages can adapt their behavior (e.g.,.\ncode chunks might use different augmentation instructions)."
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
      "data-qid": "rag04-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: What is late chunking and when would you use it?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Late chunking retrieves at the passage level first (coarse retrieval), then re-chunks the retrieved passages at the sentence level for finer granularity before passing to the generator. This combines the efficiency of passage-level indexing (fewer vectors to search) with the.\nprecision of sentence-level context. Use late chunking when you have long documents but.\nneed precise answers from specific sentences — for example, retrieving a paragraph about a medical condition and then extracting only the sentence about symptoms. The trade-off is that late chunking adds latency (re-chunking + re-scoring) but.\nimproves precision when passages contain mixed content."
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
      "data-qid": "rag04-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How does chunk size affect embedding quality and retrieval relevance?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Small chunks (50-100 chars) produce highly focused embeddings that match exact queries well but may lack the surrounding context needed for.\nthe LLM to understand the answer. Large chunks (1000+ chars) contain more context but dilute the semantic signal — the embedding averages over the entire chunk,.\nmaking it harder to match specific queries. This creates a trade-off: smaller chunks improve retrieval precision (specific matches) while larger chunks improve generation quality (more context for.\nthe LLM). The optimal point is where the chunk is large enough for the LLM to answer from context alone but.\nsmall enough that the embedding precisely matches the query. Typically 200-500 tokens strikes this balance."
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
      "data-qid": "rag-s4-quiz1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " What is the primary purpose of chunking in RAG?"]
      }), "\nA. Reduce file size\nB. Create searchable units for retrieval\nC. Encrypt document content\nD. Improve LLM training data quality\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s4-quiz2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " What problem does chunk overlap solve?"]
      }), "\nA. Reduces storage requirements\nB. Prevents information loss at chunk boundaries\nC. Speeds up embedding generation\nD. Improves LLM response fluency\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s4-quiz3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " Which chunking strategy is most appropriate for Python source code?"]
      }), "\nA. Fixed-size character chunks\nB. Function/class boundary-aware chunks\nC. Random word sampling\nD. Single-character tokens\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s4-quiz4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " What does recursive chunking use to handle text that exceeds chunk size?"]
      }), "\nA. Random splitting\nB. Multiple separator priorities, falling back to smaller splits\nC. Base64 encoding\nD. Character-level truncation\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s4-quiz5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " Which metric evaluates whether chunks break in the middle of sentences?"]
      }), "\nA. Token utilization\nB. Information density\nC. Boundary quality\nD. Retrieval precision\nAnswer: C\n"]
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
          children: "Not practicing enough problems to build pattern recognition1. Implement a comparative benchmark that evaluates fixed-size (200/500/1000 chars), semantic (paragraph-based), and recursive chunking on a set of 5 Wikipedia articles. Report precision, coverage, and boundary quality for each strategy."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build a code-aware chunker that preserves function and class boundaries for Python, JavaScript, and Java files. Test with 3 sample files per language and verify no function body is split across chunks."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create an adaptive chunker that detects document type (markdown, code, plain text, HTML) and applies the most appropriate strategy. Demonstrate correct detection on 4 sample inputs."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a chunk quality scorer that evaluates information density (meaningful vs boilerplate content), boundary quality (sentence integrity), and semantic coherence (embedding similarity between adjacent chunks). Score 3 different chunking strategies."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a chunk merging algorithm that combines adjacent small chunks (< 50 chars) with neighboring chunks and deduplicates overlapping content. Test with a document that produces both very short and overlappin"
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
            children: "Explain the core idea of Chunking Strategies in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Chunking Strategies."
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
            children: "Describe a production bug caused by misunderstanding Chunking Strategies. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Chunking Strategies from 10 users to 10 million?"
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
            children: "Compare Chunking Strategies with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Chunking Strategies."
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
            children: "How does Chunking Strategies behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Chunking Strategies run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Chunking Strategies that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Chunking Strategies explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Chunking Strategies\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Chunking Strategies to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Chunking Strategies (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Chunking Strategies and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Chunking Strategies-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Chunking Strategies interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Chunking Strategies in production today?"
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
        }), " Chunking Strategies builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Chunking Strategies before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Chunking Strategies is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Chunking Strategies in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Chunking Strategies chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Chunking Strategies is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Chunking Strategies is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Chunking Strategies is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Chunking Strategies issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Chunking Strategies in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Chunking Strategies that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Chunking Strategies is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Chunking Strategies in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Chunking Strategies and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Chunking Strategies on an empty input?"
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
            children: "Complete Medium exercises, explain Chunking Strategies to someone else"
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
        children: "Always write a one-line example of Chunking Strategies from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Chunking Strategies when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Chunking Strategies twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Chunking Strategies snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Chunking Strategies listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Chunking Strategies to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Chunking Strategies by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Chunking Strategies to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Chunking Strategies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Chunking Strategies (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Chunking Strategies problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Chunking Strategies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Chunking Strategies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Chunking Strategies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Chunking Strategies fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Chunking Strategies is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Chunking Strategies is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Chunking Strategies, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Chunking Strategies asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chunking Strategies is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Chunking Strategies."
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
        children: "Chunking Strategies emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Chunking Strategies today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Chunking Strategies — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Chunking Strategies changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Chunking Strategies."
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
        children: "Chunking Strategies appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Chunking Strategies helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Chunking Strategies concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Chunking Strategies skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Chunking Strategies to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chunking Strategies is like a recipe"
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
        }), " — this chapter contributes the Chunking Strategies skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-04chunkingstrategies-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Chunking Strategies in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-04chunkingstrategies-flash2",
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
      "data-qid": "12ragvectordatabases-04chunkingstrategies-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Chunking Strategies approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-04chunkingstrategies-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Chunking Strategies NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-04chunkingstrategies-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Chunking Strategies applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Chunking Strategies (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Chunking Strategies (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Chunking Strategies-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Chunking Strategies in production at scale"
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
        children: "Testing: pytest for unit tests of Chunking Strategies code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Chunking Strategies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Chunking Strategies code."]
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
        }), " or your IDE's debugger to step through the Chunking Strategies example code."]
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
        children: "Explain Chunking Strategies in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Chunking Strategies."
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
        children: "Tell me about a time you debugged a Chunking Strategies problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Chunking Strategies is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Chunking Strategies."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Chunking Strategies logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Chunking Strategies without notes"
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
        }), ": a small team uses Chunking Strategies daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Chunking Strategies patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Chunking Strategies principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Chunking Strategies shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Chunking Strategies to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/05-document-retrieval",
        children: "Document Retrieval"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chunking Strategies, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Chunking Strategies depends on input size and distribution — always benchmark for your own data."
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