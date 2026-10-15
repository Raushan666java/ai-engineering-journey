"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[3730],{

/***/ 90619
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_12_rag_vector_databases_06_rag_pipeline_design_md_f48_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-12-rag-vector-databases-06-rag-pipeline-design-md-f48.json
const site_docs_courses_ai_engineering_placement_12_rag_vector_databases_06_rag_pipeline_design_md_f48_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/rag-vector-databases/06-rag-pipeline-design","title":"RAG Pipeline Design","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/12-rag-vector-databases/06-rag-pipeline-design.md","sourceDirName":"courses/ai-engineering-placement/12-rag-vector-databases","slug":"/ai-engineering-placement/12-rag-vector-databases/06-rag-pipeline-design","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/06-rag-pipeline-design","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":163,"frontMatter":{"id":"06-rag-pipeline-design","slug":"/ai-engineering-placement/12-rag-vector-databases/06-rag-pipeline-design","title":"RAG Pipeline Design","sidebar_label":"RAG Pipeline Design","sidebar_position":163},"sidebar":"placementSidebar","previous":{"title":"Document Retrieval","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/05-document-retrieval"},"next":{"title":"Advanced RAG Techniques","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/07-advanced-rag-techniques"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/12-rag-vector-databases/06-rag-pipeline-design.md


const frontMatter = {
	id: '06-rag-pipeline-design',
	slug: '/ai-engineering-placement/12-rag-vector-databases/06-rag-pipeline-design',
	title: 'RAG Pipeline Design',
	sidebar_label: 'RAG Pipeline Design',
	sidebar_position: 163
};
const contentTitle = 'RAG Pipeline Design';

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
  "value": "6.1 Pipeline Architecture",
  "id": "61-pipeline-architecture",
  "level": 2
}, {
  "value": "Component Contract",
  "id": "component-contract",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Pipeline Orchestrator",
  "id": "pipeline-orchestrator",
  "level": 3
}, {
  "value": "6.2 Ingestion Pipeline",
  "id": "62-ingestion-pipeline",
  "level": 2
}, {
  "value": "6.2.1 Document Loading",
  "id": "621-document-loading",
  "level": 3
}, {
  "value": "6.2.2 Ingestion Pipeline with Progress",
  "id": "622-ingestion-pipeline-with-progress",
  "level": 3
}, {
  "value": "6.3 Retrieval Pipeline",
  "id": "63-retrieval-pipeline",
  "level": 2
}, {
  "value": "6.3.1 Query Processing",
  "id": "631-query-processing",
  "level": 3
}, {
  "value": "6.3.2 Hybrid Retrieval Pipeline",
  "id": "632-hybrid-retrieval-pipeline",
  "level": 3
}, {
  "value": "6.3.3 Late Chunking",
  "id": "633-late-chunking",
  "level": 3
}, {
  "value": "6.4 Augmentation Strategies",
  "id": "64-augmentation-strategies",
  "level": 2
}, {
  "value": "6.4.1 Context Position",
  "id": "641-context-position",
  "level": 3
}, {
  "value": "6.4.2 Instruction Design",
  "id": "642-instruction-design",
  "level": 3
}, {
  "value": "6.4.3 Dynamic Context Selection",
  "id": "643-dynamic-context-selection",
  "level": 3
}, {
  "value": "6.5 Generation Pipeline",
  "id": "65-generation-pipeline",
  "level": 2
}, {
  "value": "6.5.1 Output Formatting",
  "id": "651-output-formatting",
  "level": 3
}, {
  "value": "6.5.2 Streaming Response",
  "id": "652-streaming-response",
  "level": 3
}, {
  "value": "6.5.3 Generation with Validation",
  "id": "653-generation-with-validation",
  "level": 3
}, {
  "value": "6.6 Multi-Turn RAG",
  "id": "66-multi-turn-rag",
  "level": 2
}, {
  "value": "6.6.1 Conversation Context Management",
  "id": "661-conversation-context-management",
  "level": 3
}, {
  "value": "6.6.2 Context Injection with History",
  "id": "662-context-injection-with-history",
  "level": 3
}, {
  "value": "6.6.3 Re-Query Trigger",
  "id": "663-re-query-trigger",
  "level": 3
}, {
  "value": "6.7 Observability and Monitoring",
  "id": "67-observability-and-monitoring",
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
        id: "rag-pipeline-design",
        children: "RAG Pipeline Design"
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
            children: "Design a modular RAG pipeline architecture with clear component boundaries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement ingestion, retrieval, augmentation, and generation stages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply prompt engineering for effective context integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle multi-turn conversation with context injection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement error handling, fallbacks, and observability"
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
      children: "Understanding rag pipeline design is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how rag pipeline design works in practice."
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
            children: "6.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pipeline Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modular stages, data flow, component contracts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ingestion Pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document loading, chunking, embedding, indexing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval Pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query processing, embedding, search, filtering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Augmentation Strategies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context window, position, instruction design"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generation Pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model selection, output formatting, citation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Turn RAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conversation history, context management, re-querying"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\r\n    subgraph Ingestion\r\n        A[Documents] --> B[Loader]\r\n        B --> C[Chunker]\r\n        C --> D[Embedder]\r\n        D --> E[Vector DB]\r\n    end\r\n\r\n    subgraph Query\r\n        F[User Query] --> G[Query Processor]\r\n        G --> H[Query Embedder]\r\n        H --> I[Vector Search]\r\n        E --> I\r\n    end\r\n\r\n    subgraph Generation\r\n        I --> J[Context Augmenter]\r\n        J --> K[Prompt Builder]\r\n        K --> L[LLM]\r\n        L --> M[Response]\r\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "61-pipeline-architecture",
      children: "6.1 Pipeline Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A well-designed RAG pipeline has modular, independently testable stages."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "component-contract",
      children: "Component Contract"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each stage has a clear input/output contract, enabling testing and replacement."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from abc import ABC, abstractmethod\r\nfrom dataclasses import dataclass, field\r\nfrom typing import List, Dict, Optional, Any\r\n\r\n@dataclass\r\nclass Document:\r\n    id: str\r\n    text: str\r\n    metadata: Dict[str, Any] = field(default_factory=dict)\r\n\r\n@dataclass\r\nclass Chunk:\r\n    id: str\r\n    text: str\r\n    document_id: str\r\n    metadata: Dict[str, Any] = field(default_factory=dict)\r\n\r\n@dataclass\r\nclass Query:\r\n    text: str\r\n    conversation_id: Optional[str] = None\r\n    metadata: Dict[str, Any] = field(default_factory=dict)\r\n\r\n@dataclass\r\nclass RetrievalResult:\r\n    chunk_id: str\r\n    text: str\r\n    score: float\r\n    metadata: Dict[str, Any] = field(default_factory=dict)\r\n\r\n@dataclass\r\nclass PipelineContext:\r\n    query: Query\r\n    retrieved_chunks: List[RetrievalResult] = field(default_factory=list)\r\n    conversation_history: List[Dict] = field(default_factory=list)\r\n    response: Optional[str] = None\r\n    metadata: Dict[str, Any] = field(default_factory=dict)\r\n\r\n## Abstract pipeline stages\r\nclass Loader(ABC):\r\n    @abstractmethod\r\n    def load(self, source: str) -> List[Document]: ...\r\n\r\nclass Chunker(ABC):\r\n    @abstractmethod\r\n    def chunk(self, documents: List[Document]) -> List[Chunk]: ...\r\n\r\nclass Embedder(ABC):\r\n    @abstractmethod\r\n    def embed(self, texts: List[str]) -> List[List[float]]: ...\r\n\r\nclass Retriever(ABC):\r\n    @abstractmethod\r\n    def retrieve(self, query: Query, top_k: int) -> List[RetrievalResult]: ...\r\n\r\nclass Augmenter(ABC):\r\n    @abstractmethod\r\n    def augment(self, ctx: PipelineContext) -> str: ...\r\n\r\nclass Generator(ABC):\r\n    @abstractmethod\r\n    def generate(self, prompt: str) -> str: ...\r\n\r\nprint(\"Pipeline component interfaces defined\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pipeline-orchestrator",
      children: "Pipeline Orchestrator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RAGPipeline:\r\n    def __init__(\r\n        self,\r\n        loader: Loader,\r\n        chunker: Chunker,\r\n        embedder: Embedder,\r\n        retriever: Retriever,\r\n        augmenter: Augmenter,\r\n        generator: Generator,\r\n    ):\r\n        self.loader = loader\r\n        self.chunker = chunker\r\n        self.embedder = embedder\r\n        self.retriever = retriever\r\n        self.augmenter = augmenter\r\n        self.generator = generator\r\n\r\n    def ingest(self, source: str):\r\n        documents = self.loader.load(source)\r\n        chunks = self.chunker.chunk(documents)\r\n        texts = [c.text for c in chunks]\r\n        embeddings = self.embedder.embed(texts)\r\n        # Store chunks and embeddings in vector DB\r\n        print(f\"Ingested {len(chunks)} chunks from {len(documents)} documents\")\r\n\r\n    def query(self, query_text: str) -> PipelineContext:\r\n        ctx = PipelineContext(query=Query(text=query_text))\r\n\r\n        ctx.retrieved_chunks = self.retriever.retrieve(ctx.query, top_k=5)\r\n        prompt = self.augmenter.augment(ctx)\r\n        ctx.response = self.generator.generate(prompt)\r\n\r\n        return ctx\r\n\r\nclass MockLoader(Loader):\r\n    def load(self, source: str) -> List[Document]:\r\n        return [Document(id=\"1\", text=f\"Content from {source}\")]\r\n\r\nclass MockChunker(Chunker):\r\n    def chunk(self, documents: List[Document]) -> List[Chunk]:\r\n        return [Chunk(id=f\"{d.id}-c0\", text=d.text[:200], document_id=d.id) for d in documents]\r\n\r\nclass MockEmbedder(Embedder):\r\n    def embed(self, texts: List[str]) -> List[List[float]]:\r\n        rng = np.random.RandomState(42)\r\n        return [rng.randn(384).tolist() for _ in texts]\r\n\r\nclass MockRetriever(Retriever):\r\n    def __init__(self):\r\n        self.chunks = []\r\n\r\n    def add_chunks(self, chunks: List[Chunk]):\r\n        self.chunks = chunks\r\n\r\n    def retrieve(self, query: Query, top_k: int) -> List[RetrievalResult]:\r\n        return [RetrievalResult(c.id, c.text, 0.95, c.metadata) for c in self.chunks[:top_k]]\r\n\r\nclass MockAugmenter(Augmenter):\r\n    def augment(self, ctx: PipelineContext) -> str:\r\n        context = \"\\n\\n\".join([r.text for r in ctx.retrieved_chunks])\r\n        return f\"Context:\\n{context}\\n\\nQuestion: {ctx.query.text}\\n\\nAnswer:\"\r\n\r\nclass MockGenerator(Generator):\r\n    def generate(self, prompt: str) -> str:\r\n        return \"Generated answer based on provided context.\"\r\n\r\npipeline = RAGPipeline(\r\n    MockLoader(), MockChunker(), MockEmbedder(),\r\n    MockRetriever(), MockAugmenter(), MockGenerator(),\r\n)\r\nresult = pipeline.query(\"What is RAG?\")\r\nprint(f\"Response: {result.response}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "62-ingestion-pipeline",
      children: "6.2 Ingestion Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "621-document-loading",
      children: "6.2.1 Document Loading"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class FileLoader(Loader):\r\n    def __init__(self, supported_extensions: List[str] = None):\r\n        self.extensions = supported_extensions or [\".txt\", \".md\"]\r\n\r\n    def load(self, source: str) -> List[Document]:\r\n        documents = []\r\n        if source.endswith(\".txt\") or source.endswith(\".md\"):\r\n            with open(source, \"r\", encoding=\"utf-8\") as f:\r\n                text = f.read()\r\n                documents.append(Document(id=source, text=text, metadata={\"source\": source}))\r\n        return documents\r\n\r\nclass DirectoryLoader(Loader):\r\n    def __init__(self, file_loader: FileLoader):\r\n        self.file_loader = file_loader\r\n        self.documents: List[Document] = []\r\n\r\n    def load_directory(self, directory_path: str) -> List[Document]:\r\n        import glob\r\n        all_docs = []\r\n        for ext in self.file_loader.extensions:\r\n            pattern = f\"{directory_path}/**/*{ext}\"\r\n            for filepath in glob.glob(pattern, recursive=True):\r\n                docs = self.file_loader.load(filepath)\r\n                all_docs.extend(docs)\r\n        self.documents = all_docs\r\n        return all_docs\r\n\r\nloader = FileLoader()\r\nprint(\"File loader ready for ingestion\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "622-ingestion-pipeline-with-progress",
      children: "6.2.2 Ingestion Pipeline with Progress"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class IngestionPipeline:\r\n    def __init__(self, chunker: Chunker, embedder: Embedder, vector_store):\r\n        self.chunker = chunker\r\n        self.embedder = embedder\r\n        self.vector_store = vector_store\r\n\r\n    def run(self, documents: List[Document]) -> Dict:\r\n        stats = {\"documents\": len(documents), \"chunks\": 0, \"errors\": 0}\r\n\r\n        for doc in documents:\r\n            try:\r\n                chunks = self.chunker.chunk([doc])\r\n                texts = [c.text for c in chunks]\r\n                embeddings = self.embedder.embed(texts)\r\n\r\n                for chunk, emb in zip(chunks, embeddings):\r\n                    self.vector_store.insert(\r\n                        id=chunk.id,\r\n                        vector=emb,\r\n                        metadata={**chunk.metadata, \"document_id\": chunk.document_id, \"text\": chunk.text},\r\n                    )\r\n\r\n                stats[\"chunks\"] += len(chunks)\r\n            except Exception as e:\r\n                stats[\"errors\"] += 1\r\n                print(f\"Error ingesting {doc.id}: {e}\")\r\n\r\n        return stats\r\n\r\nclass VectorStore:\r\n    def __init__(self):\r\n        self.data = {}\r\n\r\n    def insert(self, id: str, vector: List[float], metadata: Dict):\r\n        self.data[id] = {\"vector\": vector, \"metadata\": metadata}\r\n\r\n    def size(self) -> int:\r\n        return len(self.data)\r\n\r\nstore = VectorStore()\r\ningestion = IngestionPipeline(MockChunker(), MockEmbedder(), store)\r\nstats = ingestion.run([Document(id=\"doc1\", text=\"RAG pipeline design\")])\r\nprint(f\"Ingestion stats: {stats}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "63-retrieval-pipeline",
      children: "6.3 Retrieval Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "631-query-processing",
      children: "6.3.1 Query Processing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class QueryProcessor:\r\n    def __init__(self):\r\n        self.stopwords = {\"the\", \"a\", \"an\", \"is\", \"are\", \"was\", \"were\", \"in\", \"on\", \"at\", \"to\", \"for\", \"of\", \"with\"}\r\n\r\n    def clean(self, query: str) -> str:\r\n        return query.strip().lower()\r\n\r\n    def extract_keywords(self, query: str) -> List[str]:\r\n        terms = self.clean(query).split()\r\n        return [t for t in terms if t not in self.stopwords]\r\n\r\n    def classify_query(self, query: str) -> str:\r\n        keywords = self.extract_keywords(query)\r\n        question_words = {\"what\", \"why\", \"how\", \"when\", \"where\", \"who\", \"which\", \"explain\", \"define\"}\r\n        if any(q in keywords for q in question_words):\r\n            return \"question\"\r\n        elif any(k in query.lower() for k in [\"list\", \"show\", \"find\", \"search\"]):\r\n            return \"command\"\r\n        return \"statement\"\r\n\r\n    def rewrite_query(self, query: str, conversation_history: List[Dict]) -> str:\r\n        if not conversation_history:\r\n            return query\r\n\r\n        last_user_msg = \"\"\r\n        for msg in reversed(conversation_history):\r\n            if msg[\"role\"] == \"user\":\r\n                last_user_msg = msg[\"content\"]\r\n                break\r\n\r\n        # Simple continuation detection\r\n        query_terms = set(self.extract_keywords(query))\r\n        last_terms = set(self.extract_keywords(last_user_msg))\r\n        overlap = len(query_terms & last_terms)\r\n\r\n        if overlap == 0 and len(query_terms) < 3:\r\n            return f\"{last_user_msg} {query}\"\r\n        return query\r\n\r\nprocessor = QueryProcessor()\r\nprint(f\"Query type: {processor.classify_query('What is RAG?')}\")\r\nprint(f\"Rewritten: {processor.rewrite_query('explain more', [{'role': 'user', 'content': 'What is RAG?'}])}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "632-hybrid-retrieval-pipeline",
      children: "6.3.2 Hybrid Retrieval Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RetrievalPipeline:\r\n    def __init__(self, sparse_retriever, dense_retriever, fusion_method: str = \"rrf\"):\r\n        self.sparse = sparse_retriever\r\n        self.dense = dense_retriever\r\n        self.fusion_method = fusion_method\r\n\r\n    def retrieve(self, query: Query, top_k: int = 5) -> List[RetrievalResult]:\r\n        sparse_results = self.sparse.retrieve(query.text, top_k * 2)\r\n        dense_results = self.dense.retrieve(query.text, top_k * 2)\r\n\r\n        if self.fusion_method == \"rrf\":\r\n            return self._rrf_fuse([sparse_results, dense_results], top_k)\r\n        elif self.fusion_method == \"weighted\":\r\n            return self._weighted_fuse(sparse_results, dense_results, top_k)\r\n        return sparse_results[:top_k]\r\n\r\n    def _rrf_fuse(self, rankings: List[List[RetrievalResult]], top_k: int, k: int = 60) -> List[RetrievalResult]:\r\n        scores = defaultdict(float)\r\n        for system_rankings in rankings:\r\n            for rank, result in enumerate(system_rankings, 1):\r\n                scores[result.chunk_id] += 1.0 / (k + rank)\r\n        sorted_scores = sorted(scores.items(), key=lambda x: x[1], reverse=True)\r\n        return [RetrievalResult(cid, \"\", score, \"hybrid\") for cid, score in sorted_scores[:top_k]]\r\n\r\n    def _weighted_fuse(self, sparse, dense, top_k: int, w_sparse: float = 0.3, w_dense: float = 0.7) -> List[RetrievalResult]:\r\n        sparse_scores = {r.chunk_id: r.score for r in sparse}\r\n        dense_scores = {r.chunk_id: r.score for r in dense}\r\n\r\n        combined = defaultdict(float)\r\n        all_ids = set(list(sparse_scores.keys()) + list(dense_scores.keys()))\r\n\r\n        for cid in all_ids:\r\n            combined[cid] = sparse_scores.get(cid, 0) * w_sparse + dense_scores.get(cid, 0) * w_dense\r\n\r\n        sorted_combined = sorted(combined.items(), key=lambda x: x[1], reverse=True)\r\n        return [RetrievalResult(cid, \"\", score, \"hybrid-weighted\") for cid, score in sorted_combined[:top_k]]\r\n\r\nretrieval_pipeline = RetrievalPipeline(\r\n    bm25 if 'bm25' in dir() else None,\r\n    dense if 'dense' in dir() else None,\r\n)\r\nprint(\"Retrieval pipeline configured with RRF fusion\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "633-late-chunking",
      children: "6.3.3 Late Chunking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieve at passage level, then re-chunk at sentence level for finer granularity."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class LateChunkingRetriever:\r\n    def __init__(self, passage_retriever, sentence_splitter):\r\n        self.passage_retriever = passage_retriever\r\n        self.sentence_splitter = sentence_splitter\r\n\r\n    def retrieve(self, query: str, top_k: int = 5) -> List[RetrievalResult]:\r\n        passages = self.passage_retriever.retrieve(query, top_k)\r\n        sentence_results = []\r\n\r\n        for passage in passages:\r\n            sentences = self.sentence_splitter(passage.text)\r\n            for sent in sentences:\r\n                sentence_results.append(RetrievalResult(\r\n                    chunk_id=f\"{passage.chunk_id}-sent\",\r\n                    text=sent,\r\n                    score=passage.score * 0.9,\r\n                    metadata=passage.metadata,\r\n                ))\r\n\r\n        sentence_results.sort(key=lambda x: x.score, reverse=True)\r\n        return sentence_results[:top_k]\r\n\r\ndef sentence_splitter(text: str) -> List[str]:\r\n    return [s.strip() + \".\" for s in text.replace(\"!\", \".\").replace(\"?\", \".\").split(\".\") if len(s.strip()) > 10]\r\n\r\nprint(\"Late chunking retriever ready\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "64-augmentation-strategies",
      children: "6.4 Augmentation Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "641-context-position",
      children: "6.4.1 Context Position"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The position of context in the prompt affects how LLMs use it."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ContextAugmenter(Augmenter):\r\n    def __init__(self, position: str = \"prepend\", max_tokens: int = 3000):\r\n        self.position = position\r\n        self.max_tokens = max_tokens\r\n\r\n    def augment(self, ctx: PipelineContext) -> str:\r\n        context = self._format_context(ctx.retrieved_chunks)\r\n        context = self._truncate_to_token_budget(context)\r\n\r\n        if self.position == \"prepend\":\r\n            return f\"Context:\\n{context}\\n\\nQuestion: {ctx.query.text}\\n\\nAnswer based on the context only.\"\r\n        elif self.position == \"append\":\r\n            return f\"Question: {ctx.query.text}\\n\\n{ctx.query.text}\\n\\nContext:\\n{context}\"\r\n        elif self.position == \"sandwich\":\r\n            return f\"Context:\\n{context}\\n\\nQuestion: {ctx.query.text}\\n\\nRemember: Answer based on the context provided above.\\n\\nAnswer:\"\r\n        return ctx.query.text\r\n\r\n    def _format_context(self, chunks: List[RetrievalResult]) -> str:\r\n        formatted = []\r\n        for i, chunk in enumerate(chunks, 1):\r\n            source = chunk.metadata.get(\"source\", \"\")\r\n            source_info = f\" (Source: {source})\" if source else \"\"\r\n            formatted.append(f\"[{i}]{source_info} {chunk.text}\")\r\n        return \"\\n\\n\".join(formatted)\r\n\r\n    def _truncate_to_token_budget(self, text: str) -> str:\r\n        char_limit = self.max_tokens * 4\r\n        return text[:char_limit]\r\n\r\nfor position in [\"prepend\", \"sandwich\", \"append\"]:\r\n    augmenter = ContextAugmenter(position=position)\r\n    ctx = PipelineContext(query=Query(text=\"Explain RAG\"))\r\n    ctx.retrieved_chunks = [RetrievalResult(\"c1\", \"RAG combines retrieval and generation.\", 0.9)]\r\n    print(f\"\\n--- {position} ---\")\r\n    print(augmenter.augment(ctx)[:150])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "642-instruction-design",
      children: "6.4.2 Instruction Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class InstructionAugmenter(Augmenter):\r\n    def __init__(self, style: str = \"strict\"):\r\n        self.instructions = {\r\n            \"strict\": \"Answer ONLY using the provided context. If the context does not contain enough information, say 'I cannot answer based on the provided context.'\",\r\n            \"moderate\": \"Answer based on the provided context. If unsure, supplement with general knowledge but indicate what comes from context vs general knowledge.\",\r\n            \"creative\": \"Use the context as inspiration. You may add creative elements but must not contradict the context.\",\r\n            \"citation\": 'Answer based on the context. Cite sources using brackets [1], [2] corresponding to the context numbers provided.',\r\n        }\r\n        self.style = style\r\n\r\n    def augment(self, ctx: PipelineContext) -> str:\r\n        context = \"\\n\\n\".join([f\"[{i+1}] {r.text}\" for i, r in enumerate(ctx.retrieved_chunks)])\r\n        instruction = self.instructions.get(self.style, self.instructions[\"strict\"])\r\n        return f\"\"\"{instruction}\r\n\r\nContext:\r\n{context}\r\n\r\nQuestion: {ctx.query.text}\r\n\r\nAnswer:\"\"\"\r\n\r\nfor style in [\"strict\", \"moderate\", \"citation\"]:\r\n    aug = InstructionAugmenter(style=style)\r\n    ctx = PipelineContext(query=Query(text=\"What is RAG?\"))\r\n    ctx.retrieved_chunks = [RetrievalResult(\"c1\", \"RAG stands for Retrieval-Augmented Generation.\", 0.95)]\r\n    print(f\"\\n=== {style} ===\")\r\n    print(aug.augment(ctx)[:200])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "643-dynamic-context-selection",
      children: "6.4.3 Dynamic Context Selection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DynamicContextSelector:\r\n    def __init__(self, max_chunks: int = 5, relevance_threshold: float = 0.5):\r\n        self.max_chunks = max_chunks\r\n        self.relevance_threshold = relevance_threshold\r\n\r\n    def select(self, chunks: List[RetrievalResult], query: str) -> List[RetrievalResult]:\r\n        selected = []\r\n        used_tokens = 0\r\n        token_budget = 3000\r\n\r\n        for chunk in sorted(chunks, key=lambda x: x.score, reverse=True):\r\n            chunk_tokens = len(chunk.text) // 4\r\n            if chunk.score < self.relevance_threshold:\r\n                continue\r\n            if used_tokens + chunk_tokens > token_budget:\r\n                continue\r\n            if len(selected) >= self.max_chunks:\r\n                continue\r\n\r\n            selected.append(chunk)\r\n            used_tokens += chunk_tokens\r\n\r\n        return selected\r\n\r\n    def deduplicate(self, chunks: List[RetrievalResult], similarity_threshold: float = 0.9) -> List[RetrievalResult]:\r\n        unique = []\r\n        seen_texts = set()\r\n        for chunk in chunks:\r\n            text_hash = chunk.text[:100].lower()\r\n            if text_hash not in seen_texts:\r\n                seen_texts.add(text_hash)\r\n                unique.append(chunk)\r\n        return unique\r\n\r\nselector = DynamicContextSelector(max_chunks=3, relevance_threshold=0.4)\r\nchunks = [\r\n    RetrievalResult(\"c1\", \"RAG combines retrieval with generation.\", 0.95),\r\n    RetrievalResult(\"c2\", \"Dense retrieval uses embeddings.\", 0.45),\r\n    RetrievalResult(\"c3\", \"Unrelated content about weather.\", 0.2),\r\n]\r\nselected = selector.select(chunks, \"What is RAG?\")\r\nprint(f\"Selected {len(selected)} chunks (relevance >= 0.4)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "65-generation-pipeline",
      children: "6.5 Generation Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "651-output-formatting",
      children: "6.5.1 Output Formatting"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class OutputFormatter:\r\n    def __init__(self, include_citations: bool = True, max_sentences: int = 5):\r\n        self.include_citations = include_citations\r\n        self.max_sentences = max_sentences\r\n\r\n    def format(self, raw_response: str, chunks: List[RetrievalResult]) -> str:\r\n        if self.include_citations:\r\n            raw_response = self._add_citations(raw_response, chunks)\r\n\r\n        sentences = raw_response.replace(\"!\", \".\").replace(\"?\", \".\").split(\".\")\r\n        trimmed = \". \".join(s.strip() for s in sentences[:self.max_sentences])\r\n        if not trimmed.endswith(\".\"):\r\n            trimmed += \".\"\r\n        return trimmed\r\n\r\n    def _add_citations(self, response: str, chunks: List[RetrievalResult]) -> str:\r\n        for i, chunk in enumerate(chunks, 1):\r\n            key_terms = set(chunk.text.lower().split()[:5])\r\n            response_terms = set(response.lower().split())\r\n            if key_terms & response_terms:\r\n                response = response + f\" [{i}]\"\r\n        return response\r\n\r\nformatter = OutputFormatter(include_citations=True)\r\nprint(formatter.format(\"RAG is retrieval-augmented generation.\", [\r\n    RetrievalResult(\"c1\", \"RAG stands for Retrieval-Augmented Generation.\", 0.9)\r\n]))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "652-streaming-response",
      children: "6.5.2 Streaming Response"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class StreamingGenerator(Generator):\r\n    def __init__(self, model):\r\n        self.model = model\r\n\r\n    def generate(self, prompt: str) -> str:\r\n        return self._stream(prompt)\r\n\r\n    def _stream(self, prompt: str) -> str:\r\n        tokens = [\"RAG\", \" is\", \" a\", \" technique\", \" that\", \" combines\", \" retrieval\", \" with\", \" generation.\"]\r\n        collected = []\r\n        for token in tokens:\r\n            collected.append(token)\r\n            yield token\r\n\r\n        return \"\".join(collected)\r\n\r\nfor token in StreamingGenerator(\"gpt-4o-mini\").generate(\"Explain RAG\"):\r\n    if isinstance(token, str) and len(token) < 10:\r\n        pass\r\nprint(\"Streaming generator ready\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "653-generation-with-validation",
      children: "6.5.3 Generation with Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ValidatedGenerator:\r\n    def __init__(self, generator: Generator, validator_fn):\r\n        self.generator = generator\r\n        self.validator = validator_fn\r\n\r\n    def generate_and_validate(self, prompt: str, max_attempts: int = 3) -> tuple:\r\n        for attempt in range(max_attempts):\r\n            response = self.generator.generate(prompt)\r\n\r\n            is_valid, message = self.validator(response)\r\n            if is_valid:\r\n                return response, True\r\n\r\n            if attempt < max_attempts - 1:\r\n                prompt = f\"{prompt}\\n\\nPrevious attempt was invalid: {message}\\nPlease correct.\"\r\n\r\n        return response, False\r\n\r\ndef validate_response(response: str) -> tuple:\r\n    if len(response) < 10:\r\n        return False, \"Response too short\"\r\n    if \"I cannot answer\" in response and len(response) < 50:\r\n        return True, \"Honest refusal is valid\"\r\n    return True, \"\"\r\n\r\nvalidator = ValidatedGenerator(MockGenerator(), validate_response)\r\nresponse, valid = validator.generate_and_validate(\"Explain RAG\")\r\nprint(f\"Valid: {valid}, Response: {response[:100]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "66-multi-turn-rag",
      children: "6.6 Multi-Turn RAG"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "661-conversation-context-management",
      children: "6.6.1 Conversation Context Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ConversationManager:\r\n    def __init__(self, max_history: int = 10, max_tokens: int = 2000):\r\n        self.max_history = max_history\r\n        self.max_tokens = max_tokens\r\n        self.conversations: Dict[str, List[Dict]] = {}\r\n\r\n    def add_message(self, conversation_id: str, role: str, content: str):\r\n        if conversation_id not in self.conversations:\r\n            self.conversations[conversation_id] = []\r\n        self.conversations[conversation_id].append({\r\n            \"role\": role,\r\n            \"content\": content,\r\n            \"timestamp\": \"now\",\r\n        })\r\n        self._trim_history(conversation_id)\r\n\r\n    def get_history(self, conversation_id: str) -> List[Dict]:\r\n        return self.conversations.get(conversation_id, [])\r\n\r\n    def format_history(self, conversation_id: str) -> str:\r\n        history = self.get_history(conversation_id)\r\n        formatted = []\r\n        for msg in history[:-1]:\r\n            prefix = \"User\" if msg[\"role\"] == \"user\" else \"Assistant\"\r\n            formatted.append(f\"{prefix}: {msg['content']}\")\r\n        return \"\\n\".join(formatted)\r\n\r\n    def _trim_history(self, conversation_id: str):\r\n        history = self.conversations[conversation_id]\r\n        total_tokens = sum(len(m[\"content\"]) // 4 for m in history)\r\n        while len(history) > self.max_history or total_tokens > self.max_tokens:\r\n            removed = history.pop(0)\r\n            total_tokens -= len(removed[\"content\"]) // 4\r\n\r\ncm = ConversationManager()\r\ncm.add_message(\"conv-1\", \"user\", \"What is RAG?\")\r\ncm.add_message(\"conv-1\", \"assistant\", \"RAG is Retrieval-Augmented Generation.\")\r\ncm.add_message(\"conv-1\", \"user\", \"Tell me more about it.\")\r\nhistory = cm.format_history(\"conv-1\")\r\nprint(f\"Conversation history:\\n{history}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "662-context-injection-with-history",
      children: "6.6.2 Context Injection with History"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MultiTurnRAGPipeline(RAGPipeline):\r\n    def __init__(self, *args, **kwargs):\r\n        super().__init__(*args, **kwargs)\r\n        self.conversation_mgr = ConversationManager()\r\n\r\n    def query(self, query_text: str, conversation_id: str = None) -> PipelineContext:\r\n        ctx = PipelineContext(query=Query(text=query_text, conversation_id=conversation_id))\r\n\r\n        if conversation_id:\r\n            ctx.conversation_history = self.conversation_mgr.get_history(conversation_id)\r\n\r\n        # Retrieve with context from conversation\r\n        ctx.retrieved_chunks = self.retriever.retrieve(ctx.query, top_k=5)\r\n\r\n        # Augment with history\r\n        prompt = self.augmenter.augment(ctx)\r\n\r\n        # Generate\r\n        ctx.response = self.generator.generate(prompt)\r\n\r\n        # Store\r\n        if conversation_id:\r\n            self.conversation_mgr.add_message(conversation_id, \"user\", query_text)\r\n            self.conversation_mgr.add_message(conversation_id, \"assistant\", ctx.response)\r\n\r\n        return ctx\r\n\r\nclass HistoryAwareAugmenter(Augmenter):\r\n    def augment(self, ctx: PipelineContext) -> str:\r\n        context = \"\\n\\n\".join([r.text for r in ctx.retrieved_chunks])\r\n\r\n        history = \"\"\r\n        if ctx.conversation_history:\r\n            history_lines = []\r\n            for msg in ctx.conversation_history[-4:]:\r\n                prefix = \"User\" if msg[\"role\"] == \"user\" else \"Assistant\"\r\n                history_lines.append(f\"{prefix}: {msg['content']}\")\r\n            history = \"Previous conversation:\\n\" + \"\\n\".join(history_lines)\r\n\r\n        return f\"\"\"{history}\r\n\r\nRetrieved context:\r\n{context}\r\n\r\nCurrent question: {ctx.query.text}\r\n\r\nAnswer based on the conversation history and retrieved context:\"\"\"\r\n\r\nprint(\"Multi-turn RAG pipeline ready\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "663-re-query-trigger",
      children: "6.6.3 Re-Query Trigger"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ReQueryDecider:\r\n    def __init__(self, low_score_threshold: float = 0.3):\r\n        self.threshold = low_score_threshold\r\n\r\n    def needs_requery(self, retrieval_results: List[RetrievalResult]) -> bool:\r\n        if not retrieval_results:\r\n            return True\r\n        avg_score = sum(r.score for r in retrieval_results) / len(retrieval_results)\r\n        return avg_score < self.threshold\r\n\r\n    def reformulate_query(self, original: str, history: List[Dict]) -> str:\r\n        history_text = \"\\n\".join([f\"{m['role']}: {m['content']}\" for m in history[-3:]])\r\n        return f\"Based on our conversation about '{original}', please provide a more detailed search query.\"\r\n\r\ndecider = ReQueryDecider(threshold=0.3)\r\nprint(f\"Needs re-query (low scores): {decider.needs_requery([RetrievalResult('c1', '', 0.2, {})])}\")\r\nprint(f\"Needs re-query (good scores): {decider.needs_requery([RetrievalResult('c1', '', 0.9, {})])}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "67-observability-and-monitoring",
      children: "6.7 Observability and Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PipelineMetrics:\r\n    def __init__(self):\r\n        self.timings: Dict[str, List[float]] = defaultdict(list)\r\n        self.errors: Dict[str, int] = defaultdict(int)\r\n        self.chunk_counts: List[int] = []\r\n        self.token_counts: List[int] = []\r\n\r\n    def record_timing(self, stage: str, duration_ms: float):\r\n        self.timings[stage].append(duration_ms)\r\n\r\n    def record_error(self, stage: str):\r\n        self.errors[stage] += 1\r\n\r\n    def record_chunk_count(self, n: int):\r\n        self.chunk_counts.append(n)\r\n\r\n    def report(self) -> Dict:\r\n        return {\r\n            \"avg_timings\": {\r\n                stage: round(sum(times) / len(times), 2)\r\n                for stage, times in self.timings.items()\r\n            },\r\n            \"errors\": dict(self.errors),\r\n            \"avg_chunks_per_query\": round(\r\n                sum(self.chunk_counts) / max(len(self.chunk_counts), 1), 1\r\n            ),\r\n        }\r\n\r\nclass ObservableRAGPipeline(RAGPipeline):\r\n    def __init__(self, *args, **kwargs):\r\n        super().__init__(*args, **kwargs)\r\n        self.metrics = PipelineMetrics()\r\n\r\n    def query(self, query_text: str) -> PipelineContext:\r\n        import time\r\n        ctx = PipelineContext(query=Query(text=query_text))\r\n\r\n        t0 = time.time()\r\n        ctx.retrieved_chunks = self.retriever.retrieve(ctx.query, top_k=5)\r\n        self.metrics.record_timing(\"retrieval\", (time.time() - t0) * 1000)\r\n\r\n        t0 = time.time()\r\n        prompt = self.augmenter.augment(ctx)\r\n        self.metrics.record_timing(\"augmentation\", (time.time() - t0) * 1000)\r\n\r\n        t0 = time.time()\r\n        ctx.response = self.generator.generate(prompt)\r\n        self.metrics.record_timing(\"generation\", (time.time() - t0) * 1000)\r\n\r\n        self.metrics.record_chunk_count(len(ctx.retrieved_chunks))\r\n        return ctx\r\n\r\n    def get_metrics(self) -> Dict:\r\n        return self.metrics.report()\r\n\r\nprint(\"Observable pipeline with metrics tracking ready\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A well-designed RAG pipeline consists of modular, independently testable stages: ingestion (load, chunk, embed, index), retrieval (query processing, search, filtering), augmentation (context formatting,.\r\ninstruction design, context selection), and generation (model call, validation, output formatting). Augmentation strategies include context position (prepend, sandwich, append), instruction style (strict,.\r\nmoderate, creative, citation), and dynamic context selection based on relevance threshold and token budget. Multi-turn RAG requires conversation history management, context injection with history,.\r\nand re-query triggering when retrieval scores are low. Production pipelines incorporate observability with per-stage timing, error tracking, and chunk count monitoring."
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
            children: "Modularize each stage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Independent components enable testing and swapping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prepending context works best"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most LLMs use prepended context more effectively"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use strict instructions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit \"answer only from context\" reduces hallucination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Manage token budgets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Truncate context before it fills the LLM context window"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Track stage timing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitor retrieval vs generation latency separately"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Log every query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store query, chunks, response for debugging and eval"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "rag06-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: How would you design a modular RAG pipeline with independently testable components?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Define abstract interfaces (Loader, Chunker, Embedder, Retriever, Augmenter, Generator) with clear input/output contracts using dataclasses like Document, Chunk, Query, and RetrievalResult. Each component implements an interface, enabling independent testing and swapping. For example, you can test the augmenter with mock retrieval results without running the full pipeline:"
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class RAGPipeline:\n    def __init__(self, loader, chunker, embedder, retriever, augmenter, generator):\n        self.loader = loader\n        self.chunker = chunker\n        self.embedder = embedder\n        self.retriever = retriever\n        self.augmenter = augmenter\n        self.generator = generator"
          })
        }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "This design allows A/B testing different chunkers or retrievers by swapping one component at a time. Each component can have its own CI tests and performance benchmarks."
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
      "data-qid": "rag06-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: What augmentation strategies (context position) work best for different types of LLMs?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prepending context before the question works best for most instruction-tuned LLMs (GPT-4o, Claude, Llama 3) because these models are trained to follow instructions at the start of the prompt. The sandwich strategy (context → question → \"remember to use context\") reinforces grounding for.\nmodels that exhibit recency bias. For models with strong instruction-following (GPT-4o), simple prepend with a clear instruction suffices. For smaller or.\nless capable models, use the sandwich strategy with explicit repetition. For code-generation LLMs, append context after the query to match their training data format. The key is to test your specific model — the optimal position can vary by model family and.\ntask type."
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
      "data-qid": "rag06-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: How do you handle multi-turn conversations in RAG (follow-up questions)?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Multi-turn RAG requires a ConversationManager that stores query-response history with a conversation_id. For follow-up questions, retrieve from the same knowledge base but.\nalso inject conversation history into the prompt context. Key design decisions: how much history to include (last N turns or up to M tokens),.\nwhether to re-retrieve for each turn, and how to disambiguate pronouns (e.g., \"What about its cost?\" needs context from the previous turn). Implement a QueryProcessor.\nthat rewrites short queries by prepending context from the last user message:"
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "def rewrite_query(self, query, history):\n    if len(query.split()) < 3 and not self.share_terms(query, history):\n        return f\"{self.last_user_query(history)} {query}\""
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
      "data-qid": "rag06-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How do you design a re-query trigger when retrieval quality is poor?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a ReQueryDecider that checks if the average retrieval score falls below a threshold (e.g., 0.3) or if the number of returned chunks is too few. When triggered,.\nreformulate the query by appending discovered topic terms, using an LLM to generate a better search query, or expanding with synonyms. Set a maximum number of re-query attempts (2-3) to avoid infinite loops. After exhausting attempts,.\ngracefully degrade: either skip retrieval and let the LLM use its internal knowledge (with an accuracy caveat) or return a pre-crafted \"insufficient information\" response. Log all re-query events to identify patterns of poor.\nretrieval for knowledge base improvement."
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
      "data-qid": "rag06-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How do you implement observability in a RAG pipeline to track per-stage latency?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Wrap each pipeline stage with timing instrumentation that records duration, success/failure, and output metadata. Use an ObservableRAGPipeline that extends the base pipeline with a PipelineMetrics collector. Track: retrieval latency,.\naugmentation latency, generation latency, number of chunks retrieved, total token count, and error count. Export these metrics via structured logging (JSON lines) to a monitoring system (Datadog,.\nGrafana, CloudWatch). Key dashboards: p50/p95/p99 latency by stage, error rate by stage, chunk count distribution, and daily cost. Set alerts when p95 latency exceeds 2x the baseline or.\nerror rate exceeds 1%."
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
      "data-qid": "rag06-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: What is dynamic context selection and how does it improve generation quality?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Dynamic context selection retrieves more chunks than the final context budget and then selects only the most relevant ones based on relevance score threshold,.\ntoken budget, and diversity constraints. For example, retrieve top-10 but select only top-5 that are above 0.5 relevance and have no near-duplicate content. This improves generation quality by: removing irrelevant chunks that could distract the LLM,.\navoiding token budget overflow, and preventing duplicate information from consuming context space. Implement a DynamicContextSelector that sorts by score, filters by threshold,.\nprunes near-duplicates (cosine similarity > 0.9), and stops when the token budget is exhausted. This typically improves faithfulness by 5-15%."
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
      "data-qid": "rag06-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: How do you handle output validation in the generation stage?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a ValidatedGenerator that wraps the base generator with a validation function. Validate that the response is not empty, does not contain obvious hallucinations (claims not in context),.\nand meets length requirements. If validation fails, retry with an augmented prompt that includes the validation error message. Set a maximum retry count (2-3). For.\nstructure-sensitive tasks (JSON, code), validate the output format and request regeneration if invalid. For example:"
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "def validate_response(response):\n    if len(response) < 10: return False, \"Response too short\"\n    if contains_unverified_claims(response, context): return False, \"Unsupported claims\"\n    return True, \"\""
          })
        }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "This catches generation issues before they reach the user, improving the system's reliability without requiring a second LLM call for check."
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
      "data-qid": "rag06-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How do you design the ingestion pipeline to handle large-scale document processing?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design an IngestionPipeline with batch processing: load documents in batches (100-1000), chunk them, generate embeddings (batched for efficiency), and insert into the vector.\nstore. Track progress with counters for documents, chunks, and errors. Handle failures gracefully — log errors for individual documents but continue processing the batch. For.\nvery large corpora (millions of documents), use a distributed processing framework (Apache Spark, Ray) with parallel workers. Implement checkpointing so ingestion can resume from failure. After initial ingestion,.\nsupport incremental updates — index only new or modified documents since the last sync timestamp."
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
      "data-qid": "rag06-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: What instruction styles work best for RAG augmentation and when would you use each?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Four common styles: Strict (\"Answer ONLY from context. Say you don't know if insufficient.\") for factual Q&A where hallucination is unacceptable. Moderate (\"Base answer on context,.\nsupplement with knowledge if needed.\") for customer support where some flexibility helps. Citation (\"Cite sources using [1], [2] matching context numbers.\") for.\nresearch and legal where source attribution is required. Creative (\"Use context as inspiration, don't contradict it.\") for content generation where creativity is valued. Choose strict for.\nhigh-stakes domains (medical, legal, financial), citation for academic/research use cases, and moderate for general-purpose chatbots where a helpful tone matters more than strict grounding."
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
      "data-qid": "rag06-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How do you handle the token budget across retrieval and generation in a RAG pipeline?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Set a total token budget (e.g., 4000 tokens for a 4096-token window) and allocate across system prompt (200), augmentation instruction (100),.\nretrieved context (3000), conversation history (500), and query (200). At retrieval time, select only as many chunks as fit within the context budget — if each chunk is 500 tokens,.\nretrieve and select at most 6 chunks. Use a DynamicContextSelector that measures chunk tokens and stops adding when the budget is exceeded. Truncate long chunks to fit,.\nprioritizing the beginning of each chunk (most LLMs use head more effectively). If history + context exceed budget, trim history first (oldest turns removed),.\nthen truncate context."
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
      "data-qid": "rag-s6-quiz1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " Which context position typically produces the best RAG results?"]
      }), "\nA. Append after question\nB. Prepend before question\nC. Sandwich (both before and after)\nD. Embed within question\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s6-quiz2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " What is the purpose of the augmentation stage?"]
      }), "\nA. To generate the final answer\nB. To insert retrieved context into the LLM prompt\nC. To embed the query\nD. To chunk documents\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s6-quiz3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " Why is conversation history important in multi-turn RAG?"]
      }), "\nA. It reduces API costs\nB. It provides context for follow-up questions\nC. It improves embedding quality\nD. It replaces the need for retrieval\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s6-quiz4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " What should happen when retrieval scores are all below a threshold?"]
      }), "\nA. Return empty response\nB. Trigger a re-query with reformulated query\nC. Use highest score regardless\nD. Fall back to LLM knowledge without context\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s6-quiz5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " Which component is responsible for formatting the LLM prompt with context?"]
      }), "\nA. Retriever\nB. Embedder\nC. Augmenter\nD. Generator\nAnswer: C\n"]
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
          children: "Not practicing enough problems to build pattern recognition1. Implement a complete RAG pipeline with four stages (ingestion, retrieval, augmentation, generation) using mock components. Create 20 sample documents and test with 5 queries. Report per-query latency for each stage."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compare three augmentation strategies (prepend, sandwich, append) by evaluating faithfulness scores on a set of 10 test queries. Determine which strategy produces the most context-grounded responses."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build a multi-turn RAG system that handles follow-up questions without re-querying the entire conversation. Test with a 5-turn conversation where follow-ups reference previous turns."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement dynamic context selection that retrieves 10 chunks but selects only the top 3 based on relevance and diversity (avoiding duplicate information). Compare answer quality with always-using-5 strategy."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create an observable RAG pipeline that logs every query, retrieved chunks (with scores), generated response, and per-stage timing. Build a simple dashboard that shows average latency and chunk count over 100"
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
            children: "How does RAG Pipeline Design behave differently at scale — memory, throughput, or precision-wise?"
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
        children: "Name the technique explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using RAG Pipeline Design\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies RAG Pipeline Design to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside RAG Pipeline Design (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of RAG Pipeline Design and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a RAG Pipeline Design-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic problem in this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply RAG Pipeline Design in production today?"
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
        }), " RAG Pipeline Design builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for RAG Pipeline Design before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for RAG Pipeline Design is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for RAG Pipeline Design in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "The chapter that covers RAG Pipeline Design is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 06 Rag Pipeline Design is ___. — Answer: O(n) embedding, O(log n) ANN search"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 06 Rag Pipeline Design is ___. — Answer: empty retrieval, hallucination, chunk boundary issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug RAG Pipeline Design issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to RAG Pipeline Design in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving RAG Pipeline Design that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
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
          }), " A new hire asks you to explain RAG Pipeline Design in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for RAG Pipeline Design and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
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
            children: "Complete Medium exercises, explain RAG Pipeline Design to someone else"
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
        children: "Always write a one-line example of RAG Pipeline Design from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered RAG Pipeline Design when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining RAG Pipeline Design twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own RAG Pipeline Design snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of RAG Pipeline Design listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link RAG Pipeline Design to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of RAG Pipeline Design by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain RAG Pipeline Design to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
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
        children: "'Advanced RAG Techniques' by Andrei Lopatenko (Towards Data Science) Pipeline Design"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 12 — builds the foundation for 06 Rag Pipeline Design"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 06 Rag Pipeline Design with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 06 Rag Pipeline Design fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 06 Rag Pipeline Design"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 06 Rag Pipeline Design"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 06 Rag Pipeline Design?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 06 Rag Pipeline Design?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 06 Rag Pipeline Design asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 06 Rag Pipeline Design?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RAG Pipeline Design is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with RAG Pipeline Design."
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
        children: "RAG Pipeline Design emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for RAG Pipeline Design today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about RAG Pipeline Design — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around RAG Pipeline Design changes quickly; focus on fundamentals that remain stable."
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
            children: "06 Rag Pipeline Design is like a GPS navigation system"
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
          }), " — this chapter contributes the RAG Pipeline Design skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-06ragpipelinedesign-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of RAG Pipeline Design in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "RAG (Retrieval-Augmented Generation) grounds LLM responses in external documents retrieved at query time, reducing hallucination by 40-80% vs zero-shot generation."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-06ragpipelinedesign-flash2",
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
      "data-qid": "12ragvectordatabases-06ragpipelinedesign-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard RAG Pipeline Design approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Retrieval: O(log n) with ANN index (HNSW/IVF). Embedding: O(n*d) where d=embedding dim. Generation: O(context_len^2) attention."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-06ragpipelinedesign-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is RAG Pipeline Design NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "RAG is NOT the right choice when: (1) the knowledge base is tiny (<100 docs) and fits in context, (2) you need the model to learn new reasoning patterns (use fine-tuning), (3) sub-100ms latency is required."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-06ragpipelinedesign-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is RAG Pipeline Design applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for RAG Pipeline Design (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing RAG Pipeline Design (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for RAG Pipeline Design-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running RAG Pipeline Design in production at scale"
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
        }), " — Facebook's fast similarity search library Pipeline Design"]
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
        }), ": Add structured logging at each stage of the 06 Rag Pipeline Design pipeline to identify exactly where the failure occurs."]
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
        children: "Write a minimal working example of RAG Pipeline Design."
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
        children: "Tell me about a time you debugged a RAG Pipeline Design problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where RAG Pipeline Design is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_06_rag_pipeline_design(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 06 Rag Pipeline Design.\r\n\r\n    Key concepts: chunking, embedding, retrieval, reranking, generation\r\n    Complexity: O(n) embedding, O(log n) ANN search\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 06 Rag Pipeline Design here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain RAG Pipeline Design without notes"
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
        href: "/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/07-advanced-rag-techniques",
        children: "Advanced RAG Techniques"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RAG Pipeline Design, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of RAG Pipeline Design depends on input size and distribution — always benchmark for your own data."
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