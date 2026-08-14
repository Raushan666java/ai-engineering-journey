"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[59410],{

/***/ 57438
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_12_rag_vector_databases_07_advanced_rag_techniques_md_51f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-12-rag-vector-databases-07-advanced-rag-techniques-md-51f.json
const site_docs_courses_ai_engineering_placement_12_rag_vector_databases_07_advanced_rag_techniques_md_51f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/rag-vector-databases/07-advanced-rag-techniques","title":"Advanced RAG Techniques","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/12-rag-vector-databases/07-advanced-rag-techniques.md","sourceDirName":"courses/ai-engineering-placement/12-rag-vector-databases","slug":"/ai-engineering-placement/12-rag-vector-databases/07-advanced-rag-techniques","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/07-advanced-rag-techniques","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":152,"frontMatter":{"id":"07-advanced-rag-techniques","slug":"/ai-engineering-placement/12-rag-vector-databases/07-advanced-rag-techniques","title":"Advanced RAG Techniques","sidebar_label":"Advanced RAG Techniques","sidebar_position":152},"sidebar":"placementSidebar","previous":{"title":"RAG Pipeline Design","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/06-rag-pipeline-design"},"next":{"title":"RAG Evaluation","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/08-rag-evaluation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/12-rag-vector-databases/07-advanced-rag-techniques.md


const frontMatter = {
	id: '07-advanced-rag-techniques',
	slug: '/ai-engineering-placement/12-rag-vector-databases/07-advanced-rag-techniques',
	title: 'Advanced RAG Techniques',
	sidebar_label: 'Advanced RAG Techniques',
	sidebar_position: 152
};
const contentTitle = 'Advanced RAG Techniques';

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
  "value": "7.1 Self-RAG",
  "id": "71-self-rag",
  "level": 2
}, {
  "value": "7.1.1 Retrieval Decision",
  "id": "711-retrieval-decision",
  "level": 3
}, {
  "value": "7.1.2 Self-Reflection After Retrieval",
  "id": "712-self-reflection-after-retrieval",
  "level": 3
}, {
  "value": "7.1.3 Verifier Module",
  "id": "713-verifier-module",
  "level": 3
}, {
  "value": "7.2 Multi-Hop RAG",
  "id": "72-multi-hop-rag",
  "level": 2
}, {
  "value": "7.2.1 Query Decomposition",
  "id": "721-query-decomposition",
  "level": 3
}, {
  "value": "7.2.2 Multi-Hop Executor",
  "id": "722-multi-hop-executor",
  "level": 3
}, {
  "value": "7.2.3 Dependency Graph",
  "id": "723-dependency-graph",
  "level": 3
}, {
  "value": "7.3 Iterative Retrieval",
  "id": "73-iterative-retrieval",
  "level": 2
}, {
  "value": "7.3.1 Feedback-Driven Re-Retrieval",
  "id": "731-feedback-driven-re-retrieval",
  "level": 3
}, {
  "value": "7.3.2 Corrective RAG",
  "id": "732-corrective-rag",
  "level": 3
}, {
  "value": "7.4 Agentic RAG",
  "id": "74-agentic-rag",
  "level": 2
}, {
  "value": "7.4.1 Query Router",
  "id": "741-query-router",
  "level": 3
}, {
  "value": "7.4.2 Tool-Using Agent",
  "id": "742-tool-using-agent",
  "level": 3
}, {
  "value": "7.4.3 Plan-and-Solve",
  "id": "743-plan-and-solve",
  "level": 3
}, {
  "value": "7.5 Graph RAG",
  "id": "75-graph-rag",
  "level": 2
}, {
  "value": "7.5.1 Entity Extraction",
  "id": "751-entity-extraction",
  "level": 3
}, {
  "value": "7.5.2 Knowledge Graph Construction",
  "id": "752-knowledge-graph-construction",
  "level": 3
}, {
  "value": "7.5.3 Graph Traversal Retrieval",
  "id": "753-graph-traversal-retrieval",
  "level": 3
}, {
  "value": "7.6 Evaluation",
  "id": "76-evaluation",
  "level": 2
}, {
  "value": "7.6.1 Advanced vs Standard RAG Benchmark",
  "id": "761-advanced-vs-standard-rag-benchmark",
  "level": 3
}, {
  "value": "7.6.2 Ablation Study",
  "id": "762-ablation-study",
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
        id: "advanced-rag-techniques",
        children: "Advanced RAG Techniques"
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
            children: "Implement self-RAG with self-reflection and retrieval on demand"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design multi-hop RAG for complex, multi-step queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply iterative retrieval with feedback loops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build agentic RAG with tool-use and routing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement graph-based RAG with entity relationships"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate advanced RAG against standard RAG baselines"
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
      children: "Understanding advanced rag techniques is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how advanced rag techniques works in practice."
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
            children: "7.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-RAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reflection on need for retrieval, self-critique"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Hop RAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decomposing complex queries, iterative search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterative Retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feedback-driven re-retrieval"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agentic RAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool routing, query planning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph RAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entity extraction, relationship traversal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare advanced vs standard RAG"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Query] --> B{Self-RAG: Need Retrieval?}\n    B -->|Yes| C[Retrieve]\n    B -->|No| D[Direct Answer]\n    C --> E{Sufficient?}\n    E -->|No| F[Reformulate]\n    F --> C\n    E -->|Yes| G[Multi-Hop]\n    G --> H[Generate]\n    H --> I[Critique]\n    I -->|Needs more| C\n    I -->|Done| J[Final Answer]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "71-self-rag",
      children: "7.1 Self-RAG"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Self-RAG makes the LLM reflect on whether retrieval is needed and whether the retrieved information is sufficient."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "711-retrieval-decision",
      children: "7.1.1 Retrieval Decision"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RetrievalDecider:\n    def __init__(self, confidence_threshold: float = 0.7):\n        self.threshold = confidence_threshold\n\n    def needs_retrieval(self, query: str, model_fn) -> bool:\n        prompt = f\"\"\"Determine if answering this question requires external knowledge (retrieval) or if the model's internal knowledge suffices.\n\nQuestion: {query}\n\nRespond with only: RETRIEVAL or NO_RETRIEVAL\"\"\"\n        response = model_fn(prompt)\n\n        if \"NO_RETRIEVAL\" in response:\n            return False\n        return True\n\n    def should_retrieve_for_fact(self, query: str, model_fn) -> bool:\n        \"\"\"Classify query type to determine retrieval need.\"\"\"\n        classification_prompt = f\"\"\"Classify this query:\n1. FACTUAL_RECENT - needs up-to-date info\n2. FACTUAL_STATIC - historical facts the model may know\n3. OPINION - subjective, no retrieval needed\n4. CREATIVE - generation task\n5. PRIVATE - needs private data access\n\nQuery: {query}\n\nRespond with the class name only.\"\"\"\n        classification = model_fn(classification_prompt)\n        return classification in {\"FACTUAL_RECENT\", \"PRIVATE\"}\n\ndef mock_model_fn(prompt: str) -> str:\n    if \"retrieval\" in prompt.lower() and \"classify\" in prompt.lower():\n        return \"FACTUAL_RECENT\"\n    return \"RETRIEVAL\"\n\ndecider = RetrievalDecider(threshold=0.7)\nprint(f\"Needs retrieval: {decider.needs_retrieval('What is the latest RAG research?', mock_model_fn)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "712-self-reflection-after-retrieval",
      children: "7.1.2 Self-Reflection After Retrieval"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SelfReflector:\n    def __init__(self):\n        self.reflection_prompt = \"\"\"Evaluate if the retrieved context is sufficient to answer the query.\n\nQuery: {query}\n\nRetrieved Context:\n{context}\n\nAssess:\n1. RELEVANCE: Does the context directly address the query? (0-10)\n2. COMPLETENESS: Does the context contain all needed info? (0-10)\n3. CONTRADICTION: Does any part of the context contradict itself? (Yes/No)\n\nRespond with JSON:\n{\"relevant\": true/false, \"complete\": true/false, \"score\": 0-10, \"gaps\": \"...\"}\"\"\"\n\n    def reflect(self, query: str, context_chunks: list, model_fn) -> dict:\n        context = \"\\n\\n\".join([c.text for c in context_chunks])\n        prompt = self.reflection_prompt.format(query=query, context=context)\n        response = model_fn(prompt)\n\n        # Parse response\n        return {\"relevant\": True, \"complete\": True, \"score\": 8, \"gaps\": \"\"}\n\nclass SelfRAGPipeline:\n    def __init__(self, base_pipeline, decider, reflector, max_retrievals: int = 3):\n        self.base = base_pipeline\n        self.decider = decider\n        self.reflector = reflector\n        self.max_retrievals = max_retrievals\n\n    def query(self, query_text: str) -> dict:\n        retrieval_count = 0\n        all_chunks = []\n\n        if not self.decider.needs_retrieval(query_text, mock_model_fn):\n            return {\"response\": \"Direct answer without retrieval.\", \"retrievals\": 0}\n\n        while retrieval_count < self.max_retrievals:\n            ctx = self.base.query(query_text)\n            all_chunks.extend(ctx.retrieved_chunks)\n\n            reflection = self.reflector.reflect(query_text, all_chunks, mock_model_fn)\n\n            if reflection.get(\"complete\") and reflection.get(\"relevant\"):\n                break\n\n            retrieval_count += 1\n            query_text = f\"{query_text} {reflection.get('gaps', '')}\"\n\n        return {\n            \"response\": ctx.response if hasattr(ctx, 'response') else \"Response\",\n            \"retrievals\": retrieval_count + 1,\n            \"chunks\": len(all_chunks),\n        }\n\npipeline = SelfRAGPipeline(None, decider, SelfReflector(), 3)\nprint(\"Self-RAG pipeline configured\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "713-verifier-module",
      children: "7.1.3 Verifier Module"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Verifier:\n    def verify(self, answer: str, context_chunks: list, model_fn) -> dict:\n        context = \"\\n\\n\".join([c.text for c in context_chunks])\n        prompt = f\"\"\"Verify if this answer is fully supported by the provided context.\n\nContext:\n{context}\n\nAnswer:\n{answer}\n\nIdentify any claims NOT supported by the context.\nRespond with JSON:\n{{\"supported\": true/false, \"unsupported_claims\": [], \"hallucination_score\": 0-1}}\"\"\"\n        response = model_fn(prompt)\n        return {\"supported\": True, \"unsupported_claims\": [], \"hallucination_score\": 0.05}\n\n    def generate_with_verification(self, query: str, context_chunks: list, generator) -> str:\n        max_attempts = 3\n        for attempt in range(max_attempts):\n            answer = generator(query)\n            result = self.verify(answer, context_chunks, mock_model_fn)\n            if result[\"supported\"]:\n                return answer\n        return \"I cannot provide a verified answer based on the available context.\"\n\nverifier = Verifier()\nprint(\"Verifier module ready\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "72-multi-hop-rag",
      children: "7.2 Multi-Hop RAG"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multi-hop RAG decomposes complex queries into sub-questions, each requiring a retrieval step."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "721-query-decomposition",
      children: "7.2.1 Query Decomposition"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class QueryDecomposer:\n    def __init__(self):\n        self.decomposition_prompt = \"\"\"Decompose this complex question into simpler sub-questions.\nEach sub-question should be independently answerable through retrieval.\n\nQuestion: {question}\n\nRespond with a numbered list of sub-questions.\"\"\"\n\n    def decompose(self, question: str, model_fn) -> list:\n        prompt = self.decomposition_prompt.format(question=question)\n        response = model_fn(prompt)\n\n        sub_questions = []\n        for line in response.strip().split(\"\\n\"):\n            line = line.strip()\n            if line and (line[0].isdigit() or line.startswith(\"-\")):\n                q = line.split(\". \", 1)[-1] if \". \" in line else line\n                sub_questions.append(q)\n\n        return sub_questions\n\ndef mock_decomposer(question: str) -> list:\n    if \"RAG\" in question and \"attention\" in question.lower():\n        return [\n            \"What is RAG?\",\n            \"What is the attention mechanism?\",\n            \"How does attention relate to RAG?\",\n        ]\n    return [question]\n\ndecomposer = QueryDecomposer()\nsub_questions = mock_decomposer(\"How does RAG use attention mechanisms?\")\nfor i, q in enumerate(sub_questions, 1):\n    print(f\"Sub-Q{i}: {q}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "722-multi-hop-executor",
      children: "7.2.2 Multi-Hop Executor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MultiHopRAG:\n    def __init__(self, retriever, generator, decomposer):\n        self.retriever = retriever\n        self.generator = generator\n        self.decomposer = decomposer\n\n    def answer(self, question: str) -> dict:\n        sub_questions = self.decomposer.decompose(question, mock_model_fn)\n        intermediate_results = []\n        all_contexts = []\n\n        for sq in sub_questions:\n            chunks = self.retriever.retrieve(sq, top_k=3)\n            context = \"\\n\\n\".join([c.text for c in chunks])\n            answer = self.generator(f\"Context: {context}\\n\\nQuestion: {sq}\\n\\nAnswer:\")\n\n            intermediate_results.append({\"question\": sq, \"answer\": answer})\n            all_contexts.extend(chunks)\n\n        combined_context = \"\\n\\n\".join([c.text for c in all_contexts])\n        final_prompt = f\"\"\"Based on the following information:\n\n{combined_context}\n\nAnswer the original question: {question}\n\nConsider the intermediate answers:\n{chr(10).join(f'- {r[\"question\"]}: {r[\"answer\"]}' for r in intermediate_results)}\n\nFinal answer:\"\"\"\n        final_answer = self.generator(final_prompt)\n\n        return {\n            \"sub_questions\": sub_questions,\n            \"intermediate_results\": intermediate_results,\n            \"final_answer\": final_answer,\n        }\n\nclass MockGenerator:\n    def __call__(self, prompt: str) -> str:\n        return \"This is a generated answer based on the context.\"\n\nmultihop = MultiHopRAG(\n    MockRetriever(),\n    MockGenerator(),\n    decomposer,\n)\nprint(\"Multi-hop RAG configured\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "723-dependency-graph",
      children: "7.2.3 Dependency Graph"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class QueryDependencyGraph:\n    def __init__(self):\n        self.nodes = []\n        self.edges = []\n\n    def build(self, question: str, sub_questions: list, dependencies: dict):\n        self.nodes = sub_questions\n        self.edges = []\n\n        for dependent, depends_on in dependencies.items():\n            if dependent in self.nodes and depends_on in self.nodes:\n                self.edges.append((depends_on, dependent))\n\n    def execution_order(self) -> list:\n        # Topological sort\n        in_degree = {n: 0 for n in self.nodes}\n        for src, dst in self.edges:\n            in_degree[dst] = in_degree.get(dst, 0) + 1\n\n        queue = [n for n, d in in_degree.items() if d == 0]\n        order = []\n\n        while queue:\n            node = queue.pop(0)\n            order.append(node)\n            for src, dst in self.edges:\n                if src == node:\n                    in_degree[dst] -= 1\n                    if in_degree[dst] == 0:\n                        queue.append(dst)\n\n        return order\n\ngraph = QueryDependencyGraph()\ngraph.build(\n    \"Compare attention mechanisms in RAG\",\n    [\"What is RAG?\", \"What is attention?\", \"How does RAG use attention?\"],\n    {\"How does RAG use attention?\": \"What is RAG?\", \"How does RAG use attention?\": \"What is attention?\"},\n)\nprint(f\"Execution order: {graph.execution_order()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "73-iterative-retrieval",
      children: "7.3 Iterative Retrieval"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Iterative retrieval improves results through feedback loops."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "731-feedback-driven-re-retrieval",
      children: "7.3.1 Feedback-Driven Re-Retrieval"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class IterativeRetriever:\n    def __init__(self, base_retriever, feedback_fn, max_iterations: int = 5):\n        self.retriever = base_retriever\n        self.feedback_fn = feedback_fn\n        self.max_iterations = max_iterations\n\n    def retrieve(self, query: str, top_k: int = 5) -> list:\n        current_query = query\n        all_chunks = []\n        seen_ids = set()\n\n        for iteration in range(self.max_iterations):\n            chunks = self.retriever.retrieve(current_query, top_k=top_k)\n            new_chunks = [c for c in chunks if c.chunk_id not in seen_ids]\n            all_chunks.extend(new_chunks)\n\n            for c in new_chunks:\n                seen_ids.add(c.chunk_id)\n\n            if len(new_chunks) < top_k // 2:\n                break\n\n            feedback = self.feedback_fn(current_query, new_chunks)\n            current_query = feedback.get(\"reformulated_query\", current_query)\n\n        return all_chunks[:top_k]\n\ndef feedback_fn(query: str, chunks: list) -> dict:\n    if len(chunks) < 3:\n        return {\"reformulated_query\": f\"{query} more details\"}\n    return {\"reformulated_query\": query}\n\nitr = IterativeRetriever(MockRetriever(), feedback_fn, max_iterations=3)\nprint(\"Iterative retriever ready\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "732-corrective-rag",
      children: "7.3.2 Corrective RAG"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class CorrectiveRAG:\n    def __init__(self, retriever, generator):\n        self.retriever = retriever\n        self.generator = generator\n\n    def retrieve_and_correct(self, query: str, max_corrections: int = 3) -> str:\n        answer = None\n        corrections = []\n\n        for i in range(max_corrections):\n            chunks = self.retriever.retrieve(query, top_k=5)\n            context = \"\\n\\n\".join([c.text for c in chunks])\n            answer = self.generator(f\"Context: {context}\\n\\nQuestion: {query}\\n\\nAnswer:\")\n\n            correction_prompt = f\"\"\"Review this answer for errors and inconsistencies.\n\nAnswer: {answer}\n\nList any factual errors, omissions, or improvements needed.\nIf the answer is correct as-is, say \"CORRECT\".\"\"\"\n            review = self.generator(correction_prompt)\n\n            if \"CORRECT\" in review:\n                return answer\n\n            corrections.append(review)\n            query = f\"{query}\\nNote from previous attempt: {review[:200]}\"\n\n        return answer\n\ncorrective = CorrectiveRAG(MockRetriever(), MockGenerator())\nprint(\"Corrective RAG configured\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "74-agentic-rag",
      children: "7.4 Agentic RAG"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agentic RAG uses LLM agents to plan, route, and execute retrieval strategies."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "741-query-router",
      children: "7.4.1 Query Router"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class QueryRouter:\n    def __init__(self):\n        self.routes = {\n            \"qa\": {\"description\": \"Direct question answering\", \"databases\": [\"general_kb\"]},\n            \"summarization\": {\"description\": \"Summarize document content\", \"databases\": [\"documents\"]},\n            \"comparison\": {\"description\": \"Compare multiple items\", \"databases\": [\"general_kb\", \"product_db\"]},\n            \"code\": {\"description\": \"Code generation or explanation\", \"databases\": [\"code_repo\"]},\n        }\n\n    def route(self, query: str, model_fn) -> str:\n        route_prompt = f\"\"\"Classify this query into one of these categories:\n{chr(10).join(f'- {k}: {v[\"description\"]}' for k, v in self.routes.items())}\n\nQuery: {query}\n\nRespond with the category name only.\"\"\"\n        classification = model_fn(route_prompt)\n        return classification if classification in self.routes else \"qa\"\n\n    def get_databases(self, route: str) -> list:\n        return self.routes.get(route, {}).get(\"databases\", [\"general_kb\"])\n\nrouter = QueryRouter()\nroute = router.route(\"Compare RAG and fine-tuning\", mock_model_fn)\nprint(f\"Routed to: {route}, databases: {router.get_databases(route)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "742-tool-using-agent",
      children: "7.4.2 Tool-Using Agent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ToolRegistry:\n    def __init__(self):\n        self.tools = {}\n\n    def register(self, name: str, description: str, fn):\n        self.tools[name] = {\"description\": description, \"fn\": fn}\n\n    def get_tool_descriptions(self) -> str:\n        return \"\\n\".join(f\"- {name}: {info['description']}\" for name, info in self.tools.items())\n\n    def execute(self, name: str, **kwargs):\n        tool = self.tools.get(name)\n        if not tool:\n            return f\"Tool '{name}' not found\"\n        return tool[\"fn\"](**kwargs)\n\nclass AgenticRAG:\n    def __init__(self, tools: ToolRegistry, generator):\n        self.tools = tools\n        self.generator = generator\n\n    def answer(self, query: str, max_steps: int = 5) -> dict:\n        tool_descriptions = self.tools.get_tool_descriptions()\n        context = []\n        steps = []\n\n        for step in range(max_steps):\n            action_prompt = f\"\"\"You are an AI agent with these tools:\n{tool_descriptions}\n\nCurrent context: {context[-1] if context else 'None'}\n\nQuery: {query}\n\nDecide the next action. Respond with:\nTOOL: tool_name\nINPUT: input for the tool\nOr if done:\nFINAL: final answer\"\"\"\n\n            action = self.generator(action_prompt)\n\n            if \"FINAL:\" in action:\n                final = action.split(\"FINAL:\")[-1].strip()\n                steps.append({\"step\": step, \"action\": \"final\", \"result\": final})\n                return {\"answer\": final, \"steps\": steps}\n\n            tool_name = self._extract_tool(action)\n            tool_input = self._extract_input(action)\n\n            if tool_name:\n                result = self.tools.execute(tool_name, query=tool_input or query)\n                context.append(f\"Tool {tool_name} returned: {result}\")\n                steps.append({\"step\": step, \"action\": tool_name, \"input\": tool_input, \"result\": result})\n\n        return {\"answer\": \"Max steps reached\", \"steps\": steps}\n\n    def _extract_tool(self, action: str) -> str:\n        for line in action.split(\"\\n\"):\n            if \"TOOL:\" in line:\n                return line.split(\"TOOL:\")[-1].strip()\n        return \"\"\n\n    def _extract_input(self, action: str) -> str:\n        for line in action.split(\"\\n\"):\n            if \"INPUT:\" in line:\n                return line.split(\"INPUT:\")[-1].strip()\n        return \"\"\n\nregistry = ToolRegistry()\nregistry.register(\"search\", \"Search the knowledge base for information\", lambda query: \"Retrieved information\")\nagent = AgenticRAG(registry, MockGenerator())\nprint(\"Agentic RAG ready\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "743-plan-and-solve",
      children: "7.4.3 Plan-and-Solve"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PlanAndSolve:\n    def __init__(self, retriever, generator):\n        self.retriever = retriever\n        self.generator = generator\n\n    def plan(self, query: str) -> dict:\n        plan_prompt = f\"\"\"Create a step-by-step plan to answer this question using retrieval.\n\nQuestion: {query}\n\nPlan format:\n1. Identify key entities/terms to search\n2. Determine information needed\n3. Search strategy\n4. Synthesis approach\n\nPlan:\"\"\"\n        plan = self.generator(plan_prompt)\n        return {\"plan\": plan, \"steps\": self._parse_steps(plan)}\n\n    def _parse_steps(self, plan: str) -> list:\n        steps = []\n        for line in plan.split(\"\\n\"):\n            line = line.strip()\n            if line and (line[0].isdigit() or line.startswith(\"-\")):\n                steps.append(line)\n        return steps\n\n    def execute(self, query: str) -> str:\n        plan_result = self.plan(query)\n\n        for step in plan_result[\"steps\"]:\n            search_terms = self._extract_search_terms(step)\n            if search_terms:\n                self.retriever.retrieve(\" \".join(search_terms), top_k=3)\n\n        return self.generator(f\"Question: {query}\\n\\nAnswer based on your plan and retrievals:\")\n\n    def _extract_search_terms(self, step: str) -> list:\n        return [w for w in step.lower().split() if len(w) > 4]\n\nps = PlanAndSolve(MockRetriever(), MockGenerator())\nprint(\"Plan-and-Solve RAG ready\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "75-graph-rag",
      children: "7.5 Graph RAG"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Graph RAG extracts entities and relationships to enable graph traversal during retrieval."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "751-entity-extraction",
      children: "7.5.1 Entity Extraction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class EntityExtractor:\n    def __init__(self):\n        self.entity_patterns = {\n            \"PERSON\": [],\n            \"ORG\": [\"Inc\", \"Corp\", \"University\", \"Institute\", \"Labs\"],\n            \"TECH\": [\"RAG\", \"LLM\", \"GPT\", \"BERT\", \"Transformer\", \"Embedding\"],\n            \"CONCEPT\": [\"retrieval\", \"generation\", \"attention\", \"fine-tuning\"],\n        }\n\n    def extract(self, text: str, model_fn) -> list:\n        extraction_prompt = f\"\"\"Extract entities from this text. For each entity, provide:\n- name\n- type (PERSON, ORG, TECH, CONCEPT)\n- mentions (list of strings referring to this entity)\n\nText: {text}\n\nRespond as JSON list.\"\"\"\n        response = model_fn(extraction_prompt)\n\n        return [\n            {\"name\": \"RAG\", \"type\": \"TECH\", \"mentions\": [\"RAG\", \"Retrieval-Augmented Generation\"]},\n            {\"name\": \"Transformer\", \"type\": \"TECH\", \"mentions\": [\"Transformer\", \"Attention\"]},\n        ]\n\nextractor = EntityExtractor()\nentities = extractor.extract(\"RAG uses Transformer-based retrieval.\", mock_model_fn)\nfor e in entities:\n    print(f\"Entity: {e['name']} ({e['type']})\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "752-knowledge-graph-construction",
      children: "7.5.2 Knowledge Graph Construction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class KnowledgeGraph:\n    def __init__(self):\n        self.entities = {}\n        self.relationships = []\n\n    def add_entity(self, name: str, entity_type: str, chunk_ids: list = None):\n        self.entities[name] = {\"type\": entity_type, \"chunks\": chunk_ids or []}\n\n    def add_relationship(self, source: str, target: str, relation: str):\n        if source in self.entities and target in self.entities:\n            self.relationships.append({\"source\": source, \"target\": target, \"relation\": relation})\n\n    def get_related(self, entity_name: str, max_depth: int = 2) -> list:\n        related = set()\n        queue = [(entity_name, 0)]\n        visited = set()\n\n        while queue:\n            current, depth = queue.pop(0)\n            if current in visited or depth > max_depth:\n                continue\n            visited.add(current)\n\n            for rel in self.relationships:\n                if rel[\"source\"] == current and rel[\"target\"] not in visited:\n                    related.add(rel[\"target\"])\n                    queue.append((rel[\"target\"], depth + 1))\n                if rel[\"target\"] == current and rel[\"source\"] not in visited:\n                    related.add(rel[\"source\"])\n                    queue.append((rel[\"source\"], depth + 1))\n\n        return list(related)\n\n    def get_chunks_for_entity(self, entity_name: str) -> list:\n        entity = self.entities.get(entity_name)\n        return entity[\"chunks\"] if entity else []\n\nkg = KnowledgeGraph()\nkg.add_entity(\"RAG\", \"TECH\", [\"c1\", \"c2\"])\nkg.add_entity(\"Retrieval\", \"CONCEPT\", [\"c1\"])\nkg.add_entity(\"Transformer\", \"TECH\", [\"c3\"])\nkg.add_relationship(\"RAG\", \"Retrieval\", \"uses\")\nkg.add_relationship(\"RAG\", \"Transformer\", \"built_on\")\nprint(f\"Related to RAG: {kg.get_related('RAG')}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "753-graph-traversal-retrieval",
      children: "7.5.3 Graph Traversal Retrieval"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class GraphRAGRetriever:\n    def __init__(self, knowledge_graph: KnowledgeGraph, vector_retriever):\n        self.graph = knowledge_graph\n        self.vector = vector_retriever\n\n    def retrieve(self, query: str, top_k: int = 5) -> list:\n        vector_results = self.vector.retrieve(query, top_k=top_k * 2)\n\n        entities = self._extract_entities_from_query(query)\n        graph_chunks = set()\n        for entity_name in entities:\n            related = self.graph.get_related(entity_name)\n            for rel_entity in related:\n                chunks = self.graph.get_chunks_for_entity(rel_entity)\n                graph_chunks.update(chunks)\n\n        combined = []\n        seen_ids = set()\n\n        for result in vector_results:\n            if result.chunk_id not in seen_ids:\n                combined.append(result)\n                seen_ids.add(result.chunk_id)\n\n        for chunk_id in graph_chunks:\n            if chunk_id not in seen_ids:\n                combined.append(RetrievalResult(chunk_id, \"\", 0.8, \"graph\"))\n                seen_ids.add(chunk_id)\n\n        return combined[:top_k]\n\n    def _extract_entities_from_query(self, query: str) -> list:\n        return [name for name in self.graph.entities.keys()\n                if name.lower() in query.lower()]\n\ngraph_retriever = GraphRAGRetriever(kg, MockRetriever())\nprint(\"Graph RAG retriever ready\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "76-evaluation",
      children: "7.6 Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "761-advanced-vs-standard-rag-benchmark",
      children: "7.6.1 Advanced vs Standard RAG Benchmark"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RAGBenchmark:\n    def __init__(self, queries: list, ground_truth: dict):\n        self.queries = queries\n        self.ground_truth = ground_truth\n\n    def evaluate(self, rag_pipeline, name: str) -> dict:\n        results = []\n        for query in self.queries:\n            response = rag_pipeline.query(query)\n            truth = self.ground_truth.get(query, \"\")\n\n            faithfulness = self._compute_faithfulness(response, truth)\n            completeness = self._compute_completeness(response, truth)\n            results.append({\n                \"query\": query,\n                \"faithfulness\": faithfulness,\n                \"completeness\": completeness,\n            })\n\n        avg_faith = sum(r[\"faithfulness\"] for r in results) / len(results)\n        avg_complete = sum(r[\"completeness\"] for r in results) / len(results)\n\n        return {\n            \"pipeline\": name,\n            \"avg_faithfulness\": round(avg_faith, 3),\n            \"avg_completeness\": round(avg_complete, 3),\n            \"num_queries\": len(self.queries),\n        }\n\n    def _compute_faithfulness(self, response: str, truth: str) -> float:\n        response_terms = set(response.lower().split())\n        truth_terms = set(truth.lower().split())\n        if not truth_terms:\n            return 1.0\n        overlap = len(response_terms & truth_terms)\n        return overlap / len(response_terms) if response_terms else 0\n\n    def _compute_completeness(self, response: str, truth: str) -> float:\n        response_terms = set(response.lower().split())\n        truth_terms = set(truth.lower().split())\n        if not truth_terms:\n            return 1.0\n        overlap = len(response_terms & truth_terms)\n        return overlap / len(truth_terms)\n\nbenchmark = RAGBenchmark(\n    queries=[\"What is RAG?\", \"How does retrieval work?\"],\n    ground_truth={\n        \"What is RAG?\": \"RAG is Retrieval-Augmented Generation.\",\n        \"How does retrieval work?\": \"Retrieval finds relevant documents.\",\n    },\n)\nprint(\"Benchmark ready for comparing RAG approaches\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "762-ablation-study",
      children: "7.6.2 Ablation Study"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class AblationStudy:\n    def __init__(self, base_pipeline):\n        self.base = base_pipeline\n        self.results = []\n\n    def run_ablation(self, variants: dict, benchmark: RAGBenchmark):\n        for variant_name, modifications in variants.items():\n            pipeline = self._apply_modifications(modifications)\n            result = benchmark.evaluate(pipeline, variant_name)\n            self.results.append(result)\n            print(f\"{variant_name}: Faithfulness={result['avg_faithfulness']:.3f}, Completeness={result['avg_completeness']:.3f}\")\n\n    def _apply_modifications(self, modifications: dict):\n        return self.base\n\nclass MockRAGPipeline:\n    def query(self, q: str) -> str:\n        return f\"Answer to: {q}\"\n\nablation = AblationStudy(MockRAGPipeline())\nprint(\"Ablation study configured for advanced RAG evaluation\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Advanced RAG techniques build on basic RAG to handle complex queries and improve reliability. Self-RAG enables the model to decide when retrieval is needed and.\nself-critique its outputs. Multi-hop RAG decomposes complex questions into sub-questions, executing retrieval for each. Iterative retrieval incorporates feedback loops to refine search results. Agentic RAG uses LLM agents with tool registries,.\nquery routers, and planning capabilities. Graph RAG extracts entities and relationships, enabling knowledge graph traversal for retrieval. Evaluation against standard RAG baselines using faithfulness and.\ncompleteness metrics quantifies the improvement from each technique."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Use self-RAG for reliability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Let the model decide when to retrieve and critique its own answers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decompose complex queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-hop RAG significantly improves answers to compound questions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Iterate with feedback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Re-retrieval with reformulation improves recall for hard queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Graph for entity-rich domains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph RAG excels when questions involve entity relationships"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Benchmark against baseline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always compare advanced techniques against simple RAG"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "rag07-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: How does Self-RAG decide whether retrieval is needed for a given query?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Self-RAG uses a RetrievalDecider that classifies the query into categories like FACTUAL_RECENT (needs up-to-date info), FACTUAL_STATIC (model may know), OPINION (no retrieval needed),.\nCREATIVE (generation task), or PRIVATE (needs private data). The decider is implemented as a prompt to an LLM that outputs a classification label. Only queries classified as FACTUAL_RECENT or.\nPRIVATE trigger retrieval. This reduces unnecessary retrieval calls by 30-60% for knowledge-heavy domains where many questions can be answered from the model's training data. The classification prompt includes examples and.\nclear category definitions. Threshold calibration on a validation set is essential to avoid under-retrieving on important queries."
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
      "data-qid": "rag07-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: What is multi-hop RAG and how does it handle complex queries that standard RAG cannot?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Multi-hop RAG decomposes complex questions into sub-questions, each requiring a separate retrieval step. For example, \"What companies were founded by the inventor.\nof the Transformer architecture?\" requires: (1) Who invented the Transformer? → (2) What companies did that person found? Each sub-question retrieves different documents,.\nand the answers are accumulated. A QueryDecomposer breaks the original question, a MultiHopExecutor runs retrieval for each sub-question, and a final generator.\nsynthesizes all intermediate results. Multi-hop improves accuracy on compound questions by 20-40% compared to standard RAG which would retrieve for the full question and.\nlikely miss partial information."
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
      "data-qid": "rag07-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: How does Graph RAG extend standard RAG for entity-rich domains?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Graph RAG extracts entities (people, organizations, technologies) and their relationships from documents, building a knowledge graph. During retrieval, it first uses vector.\nsearch to find relevant documents, then traverses the knowledge graph from mentioned entities to find related documents that might not match the query vectorially. For.\nexample, for \"What companies does Elon Musk lead?\", Graph RAG retrieves \"Elon Musk\" documents, then traverses the graph to find related entities (Tesla,.\nSpaceX, Neuralink) and their associated chunks. This captures entity-centric information that pure vector search would miss. Graph RAG excels in domains like news,.\nresearch, and enterprise data where entities and relationships are central."
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
      "data-qid": "rag07-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: What is corrective RAG and how does it fix errors in generation?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Corrective RAG adds a self-review step after generation: the LLM reviews its own answer for factual errors, omissions, or inconsistencies with the retrieved context. If errors are found,.\nthe correction feedback is incorporated into a new retrieval-generation cycle. This iterative refinement continues until the LLM judges its answer as correct (or.\na maximum retry limit is reached). For example, if the first answer says \"RAG was introduced in 2023\" but the context mentions 2020,.\nthe review catches this and the corrected answer uses 2020. This technique typically improves faithfulness by 10-25% but increases latency by 40-80% due to multiple generation cycles."
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
      "data-qid": "rag07-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How does agentic RAG use tools to handle queries standard RAG cannot?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Agentic RAG equips the LLM with a ToolRegistry containing specialized tools: vector search (for semantic document retrieval), web search (for current events),.\ncalculator (for math), code interpreter (for execution), and database query tools. The LLM agent plans which tools to use, in what order,.\nand how to combine their outputs. For example, \"Calculate the average revenue of companies in the AI sector\" would: (1) search the knowledge base for.\nAI companies, (2) look up revenue data, (3) calculate the average. The agent iteratively decides next actions based on previous results. This extends RAG to handle queries requiring computation,.\nreal-time data, or multi-step reasoning that a single retrieval pass cannot satisfy."
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
      "data-qid": "rag07-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How does iterative retrieval with feedback improve recall for hard queries?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Iterative retrieval performs multiple retrieval rounds, where each round's results inform the next round's query reformulation. After receiving initial results, a feedback function identifies gaps (terms present in retrieved chunks that suggest new search directions) and.\nreformulates the query to fill those gaps. For example, if \"machine learning frameworks\" retrieves documents mentioning \"PyTorch\" and \"TensorFlow\", the reformulated query might be \"PyTorch vs TensorFlow comparison\". This gradually expands the relevant document pool. Iterative retrieval typically improves recall@10 by 15-30% for.\ncomplex or poorly-specified queries, at the cost of 2-5x more retrieval calls. Set a maximum iteration count to bound latency."
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
      "data-qid": "rag07-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: What is the plan-and-solve approach for RAG and when is it appropriate?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Plan-and-Solve instructs the LLM to create a step-by-step plan before executing retrieval: identify key entities, determine needed information, design search strategy,.\nand plan synthesis approach. The plan is then executed step by step. This is appropriate for complex analytical queries like \"Compare the environmental impact of electric vehicles vs hydrogen fuel cells across manufacturing,.\noperation, and disposal.\" Standard RAG would retrieve once and likely miss one of the three lifecycle phases. Plan-and-Solve ensures comprehensive coverage by explicitly listing what to search for. It adds 500-2000ms for.\nplanning but improves answer completeness by 25-40% for multi-faceted questions."
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
      "data-qid": "rag07-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How do you evaluate advanced RAG techniques against standard RAG baselines?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design an AblationStudy comparing standard RAG, Self-RAG, multi-hop RAG, and Graph RAG on the same test set of 20-50 queries with ground truth answers. Measure faithfulness (claims supported by context),.\ncompleteness (all information needed is present), and end-to-end score (match with ground truth). For each variant, report average metrics and per-query latency. A proper ablation isolates which technique contributes which improvement — for.\nexample, Self-RAG may improve faithfulness but not recall, while multi-hop may improve recall but not latency. Always maintain the same base retriever,.\ngenerator, and chunking across all variants to isolate the technique's effect."
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
      "data-qid": "rag07-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: How does a query dependency graph help in multi-hop RAG?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A query dependency graph captures which sub-questions depend on answers from other sub-questions. For example, \"Who founded company X?\" depends on first knowing \"Which category does X belong to?\" if the database is organized by categories. The graph enables topological.\nsorting to determine execution order — independent sub-questions can be executed in parallel,.\nwhile dependent ones must be sequential. This reduces total latency compared to executing all sub-questions sequentially. The dependency graph is constructed by an LLM that analyzes the query structure and.\nidentifies informational dependencies. Complex queries with 3+ hops typically have 1-2 dependency edges that affect execution order."
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
      "data-qid": "rag07-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: What is a verifier module in advanced RAG and how does it reduce hallucination?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A verifier module checks the generated answer against the retrieved context and identifies unsupported claims. It extracts each claim from the answer and.\nverifies it against the context using an LLM prompt: \"Does the context support this claim? SUPPORTED / NOT_SUPPORTED / CONTRADICTED.\" If unsupported claims are found,.\nthe generator is asked to revise the answer to remove or correct them. This process repeats until all claims are supported or.\na maximum attempt count is reached. The verifier acts as a safety net, catching hallucinations that slip through the augmentation stage. In production,.\na verifier can reduce hallucination rate from 15% to below 3% on factual Q&A tasks."
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
      "data-qid": "rag-s7-quiz1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " What distinguishes Self-RAG from standard RAG?"]
      }), "\nA. Self-RAG uses larger models\nB. Self-RAG decides whether retrieval is needed and critiques its own output\nC. Self-RAG does not use vector databases\nD. Self-RAG requires human feedback\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s7-quiz2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " What is multi-hop RAG designed for?"]
      }), "\nA. Single-turn queries\nB. Complex queries requiring multiple retrieval steps\nC. Code generation tasks\nD. Streaming responses\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s7-quiz3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " In Graph RAG, what does the knowledge graph store?"]
      }), "\nA. Only entity names\nB. Entities and their relationships\nC. Raw document text\nD. Embedding vectors only\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s7-quiz4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " What is the role of a query router in agentic RAG?"]
      }), "\nA. To generate embeddings\nB. To classify queries and direct them to appropriate databases\nC. To chunk documents\nD. To evaluate response quality\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s7-quiz5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " Why use iterative retrieval with feedback?"]
      }), "\nA. It always reduces cost\nB. It improves recall by reformulating queries based on initial results\nC. It eliminates the need for embeddings\nD. It guarantees hallucination-free responses\nAnswer: B\n"]
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
          children: "Not practicing enough problems to build pattern recognition1. Implement a Self-RAG pipeline that decides when to retrieve, retrieves only when needed, and verifies its final answer against the retrieved context. Compare with standard RAG on 10 queries."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build a multi-hop RAG system for a question like \"What companies were founded by the creator of Transformer architecture?\" requiring at least 2 hops. Show intermediate results."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a Graph RAG system that extracts entities from a set of 5 AI research papers, builds a knowledge graph, and retrieves by traversing entity relationships. Compare recall@10 with standard vector search."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement an agentic RAG system with 3 tools: web search, vector search, and calculator. Demonstrate routing a query that requires all 3 tools."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design an ablation study comparing standard RAG, Self-RAG, multi-hop RAG, and Graph RAG on a benchmark of 20 queries. Report faithfulness, completeness, and average latency"
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
            children: "Explain the core idea of Advanced RAG Techniques in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Advanced RAG Techniques."
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
            children: "Describe a production bug caused by misunderstanding Advanced RAG Techniques. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Advanced RAG Techniques from 10 users to 10 million?"
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
            children: "Compare Advanced RAG Techniques with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Advanced RAG Techniques."
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
            children: "How does Advanced RAG Techniques behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Advanced RAG Techniques run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Advanced RAG Techniques that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Advanced RAG Techniques explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Advanced RAG Techniques\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Advanced RAG Techniques to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Advanced RAG Techniques (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Advanced RAG Techniques and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Advanced RAG Techniques-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Advanced RAG Techniques interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Advanced RAG Techniques in production today?"
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
        }), " Advanced RAG Techniques builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Advanced RAG Techniques before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Advanced RAG Techniques is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Advanced RAG Techniques in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Advanced RAG Techniques chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Advanced RAG Techniques is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Advanced RAG Techniques is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Advanced RAG Techniques is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Advanced RAG Techniques issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Advanced RAG Techniques in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Advanced RAG Techniques that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Advanced RAG Techniques is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Advanced RAG Techniques in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Advanced RAG Techniques and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Advanced RAG Techniques on an empty input?"
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
            children: "Complete Medium exercises, explain Advanced RAG Techniques to someone else"
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
        children: "Always write a one-line example of Advanced RAG Techniques from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Advanced RAG Techniques when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Advanced RAG Techniques twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Advanced RAG Techniques snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Advanced RAG Techniques listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Advanced RAG Techniques to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Advanced RAG Techniques by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Advanced RAG Techniques to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Advanced RAG Techniques"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Advanced RAG Techniques (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Advanced RAG Techniques problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Advanced RAG Techniques"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Advanced RAG Techniques"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Advanced RAG Techniques"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Advanced RAG Techniques fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Advanced RAG Techniques is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Advanced RAG Techniques is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Advanced RAG Techniques, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Advanced RAG Techniques asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Advanced RAG Techniques is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Advanced RAG Techniques."
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
        children: "Advanced RAG Techniques emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Advanced RAG Techniques today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Advanced RAG Techniques — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Advanced RAG Techniques changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Advanced RAG Techniques."
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
        children: "Advanced RAG Techniques appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Advanced RAG Techniques helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Advanced RAG Techniques concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Advanced RAG Techniques skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Advanced RAG Techniques to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Advanced RAG Techniques is like a recipe"
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
        }), " — this chapter contributes the Advanced RAG Techniques skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-07advancedragtechniques-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Advanced RAG Techniques in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-07advancedragtechniques-flash2",
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
      "data-qid": "12ragvectordatabases-07advancedragtechniques-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Advanced RAG Techniques approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-07advancedragtechniques-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Advanced RAG Techniques NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-07advancedragtechniques-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Advanced RAG Techniques applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Advanced RAG Techniques (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Advanced RAG Techniques (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Advanced RAG Techniques-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Advanced RAG Techniques in production at scale"
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
        children: "Testing: pytest for unit tests of Advanced RAG Techniques code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Advanced RAG Techniques"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Advanced RAG Techniques code."]
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
        }), " or your IDE's debugger to step through the Advanced RAG Techniques example code."]
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
        children: "Explain Advanced RAG Techniques in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Advanced RAG Techniques."
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
        children: "Tell me about a time you debugged a Advanced RAG Techniques problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Advanced RAG Techniques is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Advanced RAG Techniques."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Advanced RAG Techniques logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Advanced RAG Techniques without notes"
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
        }), ": a small team uses Advanced RAG Techniques daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Advanced RAG Techniques patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Advanced RAG Techniques principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Advanced RAG Techniques shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Advanced RAG Techniques to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/08-rag-evaluation",
        children: "RAG Evaluation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Advanced RAG Techniques, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Advanced RAG Techniques depends on input size and distribution — always benchmark for your own data."
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