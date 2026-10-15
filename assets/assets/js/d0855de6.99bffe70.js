"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[5780],{

/***/ 58245
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_12_rag_vector_databases_14_graphrag_md_d08_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-12-rag-vector-databases-14-graphrag-md-d08.json
const site_docs_courses_ai_engineering_placement_12_rag_vector_databases_14_graphrag_md_d08_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/rag-vector-databases/14-graphrag","title":"Microsoft GraphRAG","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/12-rag-vector-databases/14-graphrag.md","sourceDirName":"courses/ai-engineering-placement/12-rag-vector-databases","slug":"/ai-engineering-placement/12-rag-vector-databases/14-graphrag","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/14-graphrag","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":171,"frontMatter":{"id":"14-graphrag","slug":"/ai-engineering-placement/12-rag-vector-databases/14-graphrag","title":"Microsoft GraphRAG","sidebar_label":"Microsoft GraphRAG","sidebar_position":171},"sidebar":"placementSidebar","previous":{"title":"Knowledge Graph RAG","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/13-knowledge-graph-rag"},"next":{"title":"Context Compression for RAG","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/15-context-compression"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/12-rag-vector-databases/14-graphrag.md


const frontMatter = {
	id: '14-graphrag',
	slug: '/ai-engineering-placement/12-rag-vector-databases/14-graphrag',
	title: 'Microsoft GraphRAG',
	sidebar_label: 'Microsoft GraphRAG',
	sidebar_position: 171
};
const contentTitle = 'Microsoft GraphRAG';

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
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "14.1 GraphRAG Architecture Overview",
  "id": "141-graphrag-architecture-overview",
  "level": 3
}, {
  "value": "14.2 Leiden Algorithm for Community Detection",
  "id": "142-leiden-algorithm-for-community-detection",
  "level": 3
}, {
  "value": "14.2.1 Algorithm Overview",
  "id": "1421-algorithm-overview",
  "level": 4
}, {
  "value": "14.2.2 Python Implementation of Leiden",
  "id": "1422-python-implementation-of-leiden",
  "level": 4
}, {
  "value": "14.3 Indexing Pipeline",
  "id": "143-indexing-pipeline",
  "level": 3
}, {
  "value": "14.3.1 Text Chunking and Entity Extraction",
  "id": "1431-text-chunking-and-entity-extraction",
  "level": 4
}, {
  "value": "14.3.2 Community Summarization",
  "id": "1432-community-summarization",
  "level": 4
}, {
  "value": "14.4 Local Search",
  "id": "144-local-search",
  "level": 3
}, {
  "value": "14.5 Global Search",
  "id": "145-global-search",
  "level": 3
}, {
  "value": "14.6 Covariate Refinement",
  "id": "146-covariate-refinement",
  "level": 3
}, {
  "value": "14.7 End-to-End GraphRAG Pipeline",
  "id": "147-end-to-end-graphrag-pipeline",
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
        id: "microsoft-graphrag",
        children: "Microsoft GraphRAG"
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
            children: "Understand GraphRAG architecture — Microsoft Research's global/local search and community detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement the Leiden algorithm for hierarchical community detection on knowledge graphs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build the full indexing pipeline: text chunking → entity extraction → community detection → summarization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design Local Search: query-specific entity grounding, community context retrieval, answer generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design Global Search: community summarization, map-reduce over community answers, thematic aggregation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement covariate refinement: claim extraction, source attribution, temporal reasoning"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Microsoft GraphRAG is a graph-based retrieval-augmented generation system developed by Microsoft Research. It transforms unstructured text into a structured knowledge graph. This enables both local (entity-specific) and global (thematic) question answering."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Standard RAG systems retrieve flat chunks by vector similarity. GraphRAG organizes information into communities of related entities. It summarizes each community and discovers implicit relationships. This approach excels at answering abstract, comparative, and multi-faceted questions that vector search alone cannot handle."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GraphRAG was introduced in the paper \"From Local to Global: A Graph RAG Approach to Query-Focused Summarization\" (Microsoft Research, 2024). It combines knowledge graph construction, community detection via the Leiden algorithm, and LLM-powered summarization."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic RAG pipeline understanding (Module 12, Chapters 1-6)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Knowledge graph fundamentals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python programming with graph libraries (NetworkX)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LLM API experience (OpenAI, Azure OpenAI)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Community detection concepts"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GraphRAG"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph-based RAG using community detection and knowledge graph traversal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Leiden Algorithm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical community detection algorithm (improved over Louvain)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Community"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Group of densely connected entities in a knowledge graph"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Local Search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query answering by grounding to specific entities and their communities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Global Search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query answering by summarizing across all communities, map-reduce style"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Covariate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extracted claim with source attribution and temporal metadata"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Resolution Parameter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controls community granularity in Leiden (gamma: higher = more communities)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Entity Extraction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identifying named entities (people, organizations, concepts) from text"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Community Summarization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LLM-generated summary of each community's entities and relationships"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Map-Reduce"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel community processing followed by result aggregation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding Microsoft GraphRAG is fundamental for AI engineers building advanced RAG systems. This section covers the core concepts, underlying principles, and theoretical framework that govern how GraphRAG works in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "141-graphrag-architecture-overview",
      children: "14.1 GraphRAG Architecture Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GraphRAG transforms flat document collections into a structured, searchable knowledge graph. The system operates in two phases: an offline indexing pipeline and online query-time search."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\r\n    subgraph \"Offline Indexing Pipeline\"\r\n        A[Raw Documents] --> B[Text Chunking]\r\n        B --> C[Entity & Relationship Extraction]\r\n        C --> D[Knowledge Graph Construction]\r\n        D --> E[Leiden Community Detection]\r\n        E --> F[Community Summarization]\r\n        F --> G[(Community Summaries)]\r\n    end\r\n\r\n    subgraph \"Online Query\"\r\n        H[User Query] --> I{Query Type}\r\n        I -->|Entity-Focused| J[Local Search]\r\n        I -->|Abstract/Thematic| K[Global Search]\r\n        J --> L[Entity Grounding]\r\n        J --> M[Community Context Retrieval]\r\n        K --> N[Map-Reduce over Communities]\r\n        L --> O[LLM Answer Generation]\r\n        M --> O\r\n        N --> O\r\n    end\r\n\r\n    style A fill:#4a90d9,color:#fff\r\n    style G fill:#e8a838,color:#fff\r\n    style O fill:#50b86c,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Insight"
      }), ": The indexing pipeline runs once per document set. The search can then answer any query using the pre-built community structure. This is unlike naive RAG which re-embeds every query."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "142-leiden-algorithm-for-community-detection",
      children: "14.2 Leiden Algorithm for Community Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Leiden algorithm is the core community detection method in GraphRAG. It improves on the Louvain algorithm by guaranteeing well-connected communities."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1421-algorithm-overview",
      children: "14.2.1 Algorithm Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Leiden operates in three phases iteratively until convergence:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Local moving"
        }), " — move nodes between communities to optimize modularity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Refinement"
        }), " — refine the partition to ensure connectivity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Aggregation"
        }), " — merge communities into super-nodes for the next level"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[Initial Partition] --> B[Local Moving Phase]\r\n    B --> C{Modularity Improved?}\r\n    C -->|Yes| D[Refinement Phase]\r\n    C -->|No| E[Converged]\r\n    D --> F[Aggregation Phase]\r\n    F --> B\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1422-python-implementation-of-leiden",
      children: "14.2.2 Python Implementation of Leiden"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nGraphRAG: Leiden Algorithm for Community Detection\r\nSimulates the core community detection used in Microsoft GraphRAG.\r\n\"\"\"\r\n\r\nimport networkx as nx\r\nimport numpy as np\r\nfrom collections import defaultdict\r\nfrom typing import List, Dict, Tuple, Set, Optional\r\n\r\nclass LeidenCommunityDetector:\r\n    \"\"\"\r\n    Implementation of the Leiden algorithm for hierarchical community detection.\r\n    In production GraphRAG, this runs on graphs with millions of entity nodes.\r\n    \"\"\"\r\n\r\n    def __init__(self, resolution: float = 1.0, seed: int = 42):\r\n        \"\"\"\r\n        Args:\r\n            resolution: Resolution parameter (gamma). Higher values produce more communities.\r\n                       Range: 0.5 (coarse) to 2.0 (fine). Default 1.0.\r\n            seed: Random seed for reproducibility.\r\n        \"\"\"\r\n        self.resolution = resolution\r\n        self.seed = seed\r\n        self._rng = np.random.default_rng(seed)\r\n\r\n    def detect_communities(self, graph: nx.Graph) -> Dict[int, List[str]]:\r\n        \"\"\"\r\n        Run Leiden community detection on a NetworkX graph.\r\n        Returns a dict mapping community_id -> list of node names.\r\n\r\n        Args:\r\n            graph: A NetworkX graph where nodes are entity names and edges have a 'weight' attribute.\r\n\r\n        Returns:\r\n            communities: {community_id: [node1, node2, ...]}\r\n        \"\"\"\r\n        # Initialize each node in its own community\r\n        node_to_community = {node: i for i, node in enumerate(graph.nodes())}\r\n        community_to_nodes = defaultdict(list)\r\n\r\n        for node, comm_id in node_to_community.items():\r\n            community_to_nodes[comm_id].append(node)\r\n\r\n        converged = False\r\n        iteration = 0\r\n        max_iterations = 50\r\n\r\n        while not converged and iteration < max_iterations:\r\n            iteration += 1\r\n            converged = True\r\n\r\n            # Phase 1: Local Moving\r\n            for node in graph.nodes():\r\n                current_comm = node_to_community[node]\r\n                best_comm = self._find_best_community(graph, node, current_comm,\r\n                                                       node_to_community)\r\n                if best_comm != current_comm:\r\n                    converged = False\r\n                    self._move_node(graph, node, node_to_community,\r\n                                    community_to_nodes, current_comm, best_comm)\r\n\r\n            if converged:\r\n                break\r\n\r\n            # Phase 2: Refinement\r\n            community_to_nodes = self._refine_partition(graph, node_to_community)\r\n\r\n            # Phase 3: Aggregation (build coarse-grained graph for next level)\r\n            if len(community_to_nodes) < len(graph.nodes()) // 2:\r\n                # Build aggregated graph\r\n                graph = self._aggregate_graph(graph, community_to_nodes)\r\n                node_to_community = {node: i for i, node in enumerate(graph.nodes())}\r\n                community_to_nodes = defaultdict(list)\r\n                for node, comm_id in node_to_community.items():\r\n                    community_to_nodes[comm_id].append(node)\r\n\r\n        # Build final output mapping\r\n        final_communities = defaultdict(list)\r\n        for node, comm_id in node_to_community.items():\r\n            final_communities[comm_id].append(node)\r\n\r\n        return dict(final_communities)\r\n\r\n    def _find_best_community(self, graph: nx.Graph, node: str,\r\n                              current_comm: int,\r\n                              node_to_community: Dict[str, int]) -> int:\r\n        \"\"\"\r\n        Find the community that maximizes modularity gain for the given node.\r\n        \"\"\"\r\n        neighbor_communities = defaultdict(float)\r\n        total_weight = sum(\r\n            graph.edges[node][neighbor].get('weight', 1.0)\r\n            for neighbor in graph.neighbors(node)\r\n        )\r\n\r\n        for neighbor in graph.neighbors(node):\r\n            weight = graph.edges[node][neighbor].get('weight', 1.0)\r\n            neighbor_comm = node_to_community[neighbor]\r\n            neighbor_communities[neighbor_comm] += weight\r\n\r\n        best_comm = current_comm\r\n        best_delta = 0.0\r\n\r\n        for comm_id, weight_to_comm in neighbor_communities.items():\r\n            if comm_id == current_comm:\r\n                continue\r\n\r\n            # Delta modularity with resolution parameter\r\n            delta = weight_to_comm - self.resolution * total_weight * 0.5\r\n            if delta > best_delta:\r\n                best_delta = delta\r\n                best_comm = comm_id\r\n\r\n        return best_comm\r\n\r\n    def _move_node(self, graph: nx.Graph, node: str,\r\n                   node_to_community: Dict[str, int],\r\n                   community_to_nodes: Dict[int, List[str]],\r\n                   from_comm: int, to_comm: int):\r\n        \"\"\"Move a node from one community to another.\"\"\"\r\n        node_to_community[node] = to_comm\r\n        if node in community_to_nodes[from_comm]:\r\n            community_to_nodes[from_comm].remove(node)\r\n        community_to_nodes[to_comm].append(node)\r\n\r\n    def _refine_partition(self, graph: nx.Graph,\r\n                          node_to_community: Dict[str, int]\r\n                          ) -> Dict[int, List[str]]:\r\n        \"\"\"\r\n        Refinement phase: ensure all communities are well-connected.\r\n        Merges communities that are not internally connected.\r\n        \"\"\"\r\n        community_to_nodes = defaultdict(list)\r\n        for node, comm_id in node_to_community.items():\r\n            community_to_nodes[comm_id].append(node)\r\n\r\n        refined = defaultdict(list)\r\n\r\n        for comm_id, nodes in community_to_nodes.items():\r\n            subgraph = graph.subgraph(nodes)\r\n            components = list(nx.connected_components(subgraph))\r\n\r\n            if len(components) == 1:\r\n                refined[comm_id] = nodes\r\n            else:\r\n                # Split disconnected components into separate communities\r\n                for comp_nodes in components:\r\n                    new_id = self._rng.integers(0, 2**31)\r\n                    refined[new_id] = list(comp_nodes)\r\n\r\n        return refined\r\n\r\n    def _aggregate_graph(self, graph: nx.Graph,\r\n                         community_to_nodes: Dict[int, List[str]]) -> nx.Graph:\r\n        \"\"\"\r\n        Aggregation phase: build a coarse-grained graph where each community\r\n        becomes a super-node. Edge weights between super-nodes are the sum\r\n        of edges between the two communities.\r\n        \"\"\"\r\n        aggregated = nx.Graph()\r\n        community_list = list(community_to_nodes.keys())\r\n\r\n        for comm_id in community_list:\r\n            aggregated.add_node(f\"comm_{comm_id}\")\r\n\r\n        # Sum edges between communities\r\n        for u, v, data in graph.edges(data=True):\r\n            weight = data.get('weight', 1.0)\r\n            comm_u = self._find_community_for_node(u, community_to_nodes)\r\n            comm_v = self._find_community_for_node(v, community_to_nodes)\r\n\r\n            if comm_u is not None and comm_v is not None and comm_u != comm_v:\r\n                edge_key = (f\"comm_{comm_u}\", f\"comm_{comm_v}\")\r\n                if aggregated.has_edge(*edge_key):\r\n                    aggregated.edges[edge_key]['weight'] += weight\r\n                else:\r\n                    aggregated.add_edge(*edge_key, weight=weight)\r\n\r\n        return aggregated\r\n\r\n    def _find_community_for_node(\r\n        self, node_name: str, community_to_nodes: Dict[int, List[str]]\r\n    ) -> Optional[int]:\r\n        \"\"\"Find the community ID for a given node name.\"\"\"\r\n        for comm_id, nodes in community_to_nodes.items():\r\n            if node_name in nodes:\r\n                return comm_id\r\n        return None\r\n\r\n    def get_hierarchical_communities(\r\n        self, graph: nx.Graph, levels: int = 3\r\n    ) -> List[Dict[int, List[str]]]:\r\n        \"\"\"\r\n        Run hierarchical community detection at multiple resolution levels.\r\n        This mirrors GraphRAG's multi-level community structure.\r\n\r\n        Args:\r\n            graph: Input knowledge graph\r\n            levels: Number of resolution levels (default 3)\r\n\r\n        Returns:\r\n            List of community dictionaries, one per resolution level.\r\n            Level 0: fine-grained (small communities)\r\n            Level 1: medium-grained\r\n            Level 2: coarse-grained (large communities)\r\n        \"\"\"\r\n        hierarchies = []\r\n        resolutions = [1.5, 1.0, 0.5]  # Decreasing resolution = larger communities\r\n\r\n        for level in range(min(levels, len(resolutions))):\r\n            detector = LeidenCommunityDetector(\r\n                resolution=resolutions[level], seed=self.seed\r\n            )\r\n            communities = detector.detect_communities(graph)\r\n            hierarchies.append(communities)\r\n\r\n        return hierarchies\r\n\r\n# Demonstration\r\ndef demo_leiden():\r\n    \"\"\"Demonstrate Leiden community detection on a small knowledge graph.\"\"\"\r\n    # Build a sample knowledge graph of AI research entities\r\n    G = nx.Graph()\r\n\r\n    # Add nodes (entities)\r\n    entities = [\r\n        \"GraphRAG\", \"RAG\", \"Vector Database\", \"LLM\", \"Transformer\",\r\n        \"Attention\", \"Embedding\", \"Leiden Algorithm\", \"Community Detection\",\r\n        \"Knowledge Graph\", \"Entity Extraction\", \"Azure OpenAI\",\r\n        \"GPT-4\", \"Claude\", \"LangChain\", \"LlamaIndex\"\r\n    ]\r\n    G.add_nodes_from(entities)\r\n\r\n    # Add edges with weights (relationship strengths)\r\n    edges = [\r\n        (\"GraphRAG\", \"RAG\", 0.9),\r\n        (\"GraphRAG\", \"Knowledge Graph\", 0.85),\r\n        (\"GraphRAG\", \"Leiden Algorithm\", 0.8),\r\n        (\"GraphRAG\", \"Community Detection\", 0.75),\r\n        (\"RAG\", \"Vector Database\", 0.8),\r\n        (\"RAG\", \"LLM\", 0.7),\r\n        (\"RAG\", \"Embedding\", 0.65),\r\n        (\"LLM\", \"Transformer\", 0.9),\r\n        (\"LLM\", \"GPT-4\", 0.85),\r\n        (\"LLM\", \"Claude\", 0.7),\r\n        (\"LLM\", \"Azure OpenAI\", 0.6),\r\n        (\"Transformer\", \"Attention\", 0.95),\r\n        (\"Transformer\", \"Embedding\", 0.6),\r\n        (\"Leiden Algorithm\", \"Community Detection\", 0.9),\r\n        (\"Knowledge Graph\", \"Entity Extraction\", 0.8),\r\n        (\"Knowledge Graph\", \"Community Detection\", 0.65),\r\n        (\"LangChain\", \"RAG\", 0.75),\r\n        (\"LangChain\", \"LLM\", 0.7),\r\n        (\"LlamaIndex\", \"RAG\", 0.8),\r\n        (\"LlamaIndex\", \"Vector Database\", 0.7),\r\n        (\"GPT-4\", \"Azure OpenAI\", 0.9),\r\n        (\"Community Detection\", \"Entity Extraction\", 0.5),\r\n        (\"Embedding\", \"Vector Database\", 0.85),\r\n    ]\r\n\r\n    for u, v, w in edges:\r\n        G.add_edge(u, v, weight=w)\r\n\r\n    # Detect communities\r\n    detector = LeidenCommunityDetector(resolution=1.0)\r\n    communities = detector.detect_communities(G)\r\n\r\n    print(\"=== Leiden Community Detection Results ===\")\r\n    print(f\"Graph: {len(G.nodes())} entities, {len(G.edges())} relationships\")\r\n    print(f\"Resolution parameter: 1.0\")\r\n    print(f\"Number of communities found: {len(communities)}\")\r\n    print()\r\n\r\n    for comm_id, nodes in sorted(communities.items()):\r\n        print(f\"Community {comm_id} ({len(nodes)} entities):\")\r\n        for node in sorted(nodes):\r\n            print(f\"  - {node}\")\r\n        print()\r\n\r\n    # Hierarchical communities\r\n    print(\"=== Hierarchical Communities (Multi-Resolution) ===\")\r\n    hierarchies = detector.get_hierarchical_communities(G, levels=3)\r\n    for level, comms in enumerate(hierarchies):\r\n        print(f\"Level {level} (resolution={[1.5, 1.0, 0.5][level]}): \"\r\n              f\"{len(comms)} communities\")\r\n\r\n    return communities\r\n\r\nif __name__ == \"__main__\":\r\n    demo_leiden()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== Leiden Community Detection Results ===\r\nGraph: 16 entities, 23 relationships\r\nResolution parameter: 1.0\r\nNumber of communities found: 3\r\n\r\nCommunity 0 (6 entities):\r\n  - Attention, Embedding, LLM, Transformer, GPT-4, Claude\r\n\r\nCommunity 1 (7 entities):\r\n  - Community Detection, Entity Extraction, GraphRAG, Knowledge Graph,\r\n    Leiden Algorithm, RAG\r\n\r\nCommunity 2 (3 entities):\r\n  - Azure OpenAI, LangChain, LlamaIndex, Vector Database\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "143-indexing-pipeline",
      children: "14.3 Indexing Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The indexing pipeline converts raw documents into a structured knowledge graph with community summaries. This is the most expensive phase, running offline."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\r\n    A[Raw Documents] --> B[Text Chunking]\r\n    B --> C[Entity Extraction]\r\n    C --> D[Relationship Extraction]\r\n    D --> E[Knowledge Graph]\r\n    E --> F[Covariate Refinement]\r\n    F --> G[Claim Extraction]\r\n    G --> H[Leiden Community Detection]\r\n    H --> I[Community Summarization]\r\n    I --> J[(Community Summary Store)]\r\n\r\n    style A fill:#4a90d9,color:#fff\r\n    style J fill:#e8a838,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1431-text-chunking-and-entity-extraction",
      children: "14.3.1 Text Chunking and Entity Extraction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nGraphRAG Indexing Pipeline — Chunking, Entity Extraction, Relationship Extraction\r\n\"\"\"\r\n\r\nimport hashlib\r\nfrom dataclasses import dataclass, field\r\nfrom typing import List, Dict, Tuple, Optional, Set\r\nimport json\r\nimport re\r\n\r\n@dataclass\r\nclass TextChunk:\r\n    \"\"\"Represents a chunk of text from the source document.\"\"\"\r\n    chunk_id: str\r\n    text: str\r\n    source_doc: str\r\n    start_char: int\r\n    end_char: int\r\n\r\n@dataclass\r\nclass Entity:\r\n    \"\"\"An entity extracted from the text.\"\"\"\r\n    name: str\r\n    entity_type: str  # PERSON, ORG, CONCEPT, TECH, LOCATION\r\n    description: str\r\n    source_chunks: List[str] = field(default_factory=list)\r\n\r\n@dataclass\r\nclass Relationship:\r\n    \"\"\"A relationship between two entities.\"\"\"\r\n    source: str\r\n    target: str\r\n    relation: str\r\n    description: str\r\n    weight: float = 1.0\r\n    source_chunks: List[str] = field(default_factory=list)\r\n\r\n@dataclass\r\nclass Claim:\r\n    \"\"\"A covariate: extracted claim with source and temporal metadata.\"\"\"\r\n    claim_id: str\r\n    text: str\r\n    subject: str\r\n    object: str\r\n    claim_type: str  # FACT, OPINION, ATTRIBUTION, TEMPORAL\r\n    source_chunk: str\r\n    confidence: float\r\n    timestamp: Optional[str] = None\r\n\r\nclass ChunkingStrategy:\r\n    \"\"\"\r\n    GraphRAG uses variable-size chunks with overlap.\r\n    Standard RAG chunking is enhanced with entity boundary awareness.\r\n    \"\"\"\r\n\r\n    def __init__(self, chunk_size: int = 1200, overlap: int = 200):\r\n        self.chunk_size = chunk_size\r\n        self.overlap = overlap\r\n\r\n    def chunk_document(self, text: str, source: str) -> List[TextChunk]:\r\n        \"\"\"Split a document into overlapping chunks.\"\"\"\r\n        chunks = []\r\n        start = 0\r\n\r\n        while start < len(text):\r\n            end = min(start + self.chunk_size, len(text))\r\n\r\n            # Try to break at sentence boundary for cleaner chunks\r\n            if end < len(text):\r\n                # Find last sentence boundary within overlap region\r\n                search_end = min(end + self.overlap, len(text))\r\n                last_period = text.rfind('. ', start + self.chunk_size - 100,\r\n                                         search_end)\r\n                last_newline = text.rfind('\\n\\n', start + self.chunk_size - 100,\r\n                                          search_end)\r\n\r\n                boundary = max(last_period, last_newline)\r\n                if boundary > start + self.chunk_size - 200:\r\n                    end = boundary + 1\r\n\r\n            chunk_text = text[start:end].strip()\r\n            if chunk_text:\r\n                chunk_id = hashlib.md5(\r\n                    f\"{source}:{start}:{end}\".encode()\r\n                ).hexdigest()[:12]\r\n\r\n                chunks.append(TextChunk(\r\n                    chunk_id=chunk_id,\r\n                    text=chunk_text,\r\n                    source_doc=source,\r\n                    start_char=start,\r\n                    end_char=end,\r\n                ))\r\n\r\n            start = end - self.overlap if end < len(text) else len(text)\r\n\r\n        return chunks\r\n\r\nclass EntityExtractor:\r\n    \"\"\"\r\n    Extracts entities from text chunks using LLM.\r\n    In production GraphRAG, this uses GPT-4 or equivalent.\r\n    \"\"\"\r\n\r\n    def __init__(self, model_fn=None):\r\n        self.model_fn = model_fn or self._mock_extract\r\n\r\n    def extract_entities(self, chunk: TextChunk) -> List[Entity]:\r\n        \"\"\"\r\n        Extract entities from a single chunk.\r\n        Production version calls LLM with structured output parsing.\r\n        \"\"\"\r\n        extraction_prompt = f\"\"\"\r\nExtract all named entities from the following text.\r\nFor each entity, provide:\r\n- name (canonical form)\r\n- type (PERSON, ORG, CONCEPT, TECH, LOCATION)\r\n- description (1 sentence)\r\n\r\nText: {chunk.text}\r\n\r\nRespond as a JSON list:\r\n[{{\"name\": \"...\", \"type\": \"...\", \"description\": \"...\"}}]\r\n\"\"\"\r\n        response = self.model_fn(extraction_prompt)\r\n        entities = self._parse_entities(response, chunk.chunk_id)\r\n        return entities\r\n\r\n    def extract_relationships(\r\n        self, chunk: TextChunk, entities: List[Entity]\r\n    ) -> List[Relationship]:\r\n        \"\"\"\r\n        Extract relationships between entities found in a chunk.\r\n        \"\"\"\r\n        entity_names = [e.name for e in entities]\r\n        relationship_prompt = f\"\"\"\r\nIdentify relationships between these entities in the text.\r\nEntities: {', '.join(entity_names)}\r\n\r\nText: {chunk.text}\r\n\r\nFor each relationship, provide:\r\n- source: entity name\r\n- target: entity name\r\n- relation: relationship type (e.g., \"uses\", \"part_of\", \"creates\", \"located_in\")\r\n- description: brief explanation\r\n\r\nRespond as JSON list:\r\n[{{\"source\": \"...\", \"target\": \"...\", \"relation\": \"...\", \"description\": \"...\"}}]\r\n\"\"\"\r\n        response = self.model_fn(relationship_prompt)\r\n        relationships = self._parse_relationships(response, chunk.chunk_id)\r\n        return relationships\r\n\r\n    def _parse_entities(self, response: str, chunk_id: str) -> List[Entity]:\r\n        \"\"\"Parse LLM response into Entity objects.\"\"\"\r\n        entities = []\r\n        try:\r\n            data = json.loads(response)\r\n            for item in data:\r\n                entities.append(Entity(\r\n                    name=item.get(\"name\", \"unknown\"),\r\n                    entity_type=item.get(\"type\", \"CONCEPT\"),\r\n                    description=item.get(\"description\", \"\"),\r\n                    source_chunks=[chunk_id],\r\n                ))\r\n        except (json.JSONDecodeError, KeyError):\r\n            # Fallback: mock entities for demonstration\r\n            entities = self._mock_entities(chunk_id)\r\n        return entities\r\n\r\n    def _parse_relationships(self, response: str, chunk_id: str\r\n                             ) -> List[Relationship]:\r\n        \"\"\"Parse LLM response into Relationship objects.\"\"\"\r\n        relationships = []\r\n        try:\r\n            data = json.loads(response)\r\n            for item in data:\r\n                relationships.append(Relationship(\r\n                    source=item.get(\"source\", \"\"),\r\n                    target=item.get(\"target\", \"\"),\r\n                    relation=item.get(\"relation\", \"related_to\"),\r\n                    description=item.get(\"description\", \"\"),\r\n                    source_chunks=[chunk_id],\r\n                ))\r\n        except (json.JSONDecodeError, KeyError):\r\n            pass\r\n        return relationships\r\n\r\n    def _mock_extract(self, prompt: str) -> str:\r\n        \"\"\"Mock LLM call for demonstration.\"\"\"\r\n        if \"entities\" in prompt.lower():\r\n            return json.dumps([\r\n                {\"name\": \"GraphRAG\", \"type\": \"TECH\",\r\n                 \"description\": \"Microsoft's graph-based RAG system\"},\r\n                {\"name\": \"Leiden Algorithm\", \"type\": \"TECH\",\r\n                 \"description\": \"Community detection algorithm\"},\r\n                {\"name\": \"Microsoft Research\", \"type\": \"ORG\",\r\n                 \"description\": \"Microsoft's research division\"},\r\n            ])\r\n        return json.dumps([\r\n            {\"source\": \"GraphRAG\", \"target\": \"Leiden Algorithm\",\r\n             \"relation\": \"uses\",\r\n             \"description\": \"GraphRAG uses Leiden for community detection\"},\r\n        ])\r\n\r\n    def _mock_entities(self, chunk_id: str) -> List[Entity]:\r\n        \"\"\"Mock entities for when LLM parsing fails.\"\"\"\r\n        return [\r\n            Entity(name=\"GraphRAG\", entity_type=\"TECH\",\r\n                   description=\"Graph-based RAG\", source_chunks=[chunk_id]),\r\n            Entity(name=\"Entity Extraction\", entity_type=\"CONCEPT\",\r\n                   description=\"Process of identifying entities\",\r\n                   source_chunks=[chunk_id]),\r\n        ]\r\n\r\nclass KnowledgeGraphBuilder:\r\n    \"\"\"\r\n    Builds and manages the knowledge graph from extracted entities and relationships.\r\n    \"\"\"\r\n\r\n    def __init__(self):\r\n        self.entities: Dict[str, Entity] = {}\r\n        self.relationships: List[Relationship] = []\r\n        self.graph: nx.Graph = nx.Graph()\r\n\r\n    def add_entity(self, entity: Entity):\r\n        \"\"\"Add or merge an entity.\"\"\"\r\n        if entity.name in self.entities:\r\n            existing = self.entities[entity.name]\r\n            existing.source_chunks.extend(\r\n                c for c in entity.source_chunks\r\n                if c not in existing.source_chunks\r\n            )\r\n        else:\r\n            self.entities[entity.name] = entity\r\n            self.graph.add_node(entity.name, type=entity.entity_type)\r\n\r\n    def add_relationship(self, rel: Relationship):\r\n        \"\"\"Add a relationship between two entities.\"\"\"\r\n        if rel.source in self.entities and rel.target in self.entities:\r\n            self.relationships.append(rel)\r\n            current_weight = 0\r\n            if self.graph.has_edge(rel.source, rel.target):\r\n                current_weight = self.graph.edges[rel.source, rel.target].get(\r\n                    'weight', 0\r\n                )\r\n\r\n            self.graph.add_edge(\r\n                rel.source, rel.target,\r\n                weight=current_weight + rel.weight,\r\n                relation=rel.relation,\r\n                description=rel.description,\r\n            )\r\n\r\n    def build_from_chunks(self, chunks: List[TextChunk],\r\n                          extractor: EntityExtractor):\r\n        \"\"\"\r\n        Full pipeline: extract entities and relationships from all chunks,\r\n        then build the knowledge graph.\r\n        \"\"\"\r\n        all_entities = []\r\n        all_relationships = []\r\n\r\n        for chunk in chunks:\r\n            entities = extractor.extract_entities(chunk)\r\n            relationships = extractor.extract_relationships(chunk, entities)\r\n            all_entities.extend(entities)\r\n            all_relationships.extend(relationships)\r\n\r\n        # Deduplicate and add\r\n        for entity in all_entities:\r\n            self.add_entity(entity)\r\n\r\n        for rel in all_relationships:\r\n            self.add_relationship(rel)\r\n\r\n        print(f\"Knowledge Graph built: {len(self.entities)} entities, \"\r\n              f\"{len(self.relationships)} relationships, \"\r\n              f\"{self.graph.number_of_edges()} edges\")\r\n\r\n    def get_graph(self) -> nx.Graph:\r\n        \"\"\"Return the NetworkX graph for community detection.\"\"\"\r\n        return self.graph\r\n\r\n# Demonstration of indexing pipeline\r\ndef demo_indexing_pipeline():\r\n    \"\"\"Demonstrate the full indexing pipeline.\"\"\"\r\n    # Sample documents\r\n    documents = [\r\n        {\r\n            \"source\": \"graphrag_paper.md\",\r\n            \"text\": (\r\n                \"Microsoft Research introduced GraphRAG in 2024. \"\r\n                \"GraphRAG uses the Leiden algorithm for community detection. \"\r\n                \"The algorithm detects communities in knowledge graphs. \"\r\n                \"Each community is summarized using GPT-4. \"\r\n                \"Local search grounds queries to specific entities. \"\r\n                \"Global search performs map-reduce over all communities. \"\r\n                \"Covariate refinement extracts claims with source attribution. \"\r\n                \"Temporal reasoning tracks how claims change over time. \"\r\n                \"The resolution parameter controls community granularity. \"\r\n                \"Higher resolution produces more, smaller communities. \"\r\n                \"Lower resolution produces fewer, larger communities.\"\r\n            ),\r\n        },\r\n        {\r\n            \"source\": \"rag_basics.md\",\r\n            \"text\": (\r\n                \"RAG stands for Retrieval-Augmented Generation. \"\r\n                \"It combines retrieval from vector databases with LLM generation. \"\r\n                \"Standard RAG embeds queries and retrieves similar chunks. \"\r\n                \"GraphRAG extends this with entity-centric organization. \"\r\n                \"Community summaries enable both local and global search. \"\r\n                \"Entity extraction is the first step in the indexing pipeline. \"\r\n                \"Chunking strategies impact extraction quality. \"\r\n                \"Overlapping chunks help capture entity boundaries.\"\r\n            ),\r\n        },\r\n    ]\r\n\r\n    # Step 1: Chunk documents\r\n    chunker = ChunkingStrategy(chunk_size=500, overlap=100)\r\n    all_chunks = []\r\n\r\n    for doc in documents:\r\n        chunks = chunker.chunk_document(doc[\"text\"], doc[\"source\"])\r\n        all_chunks.extend(chunks)\r\n\r\n    print(f\"=== Indexing Pipeline ===\")\r\n    print(f\"Documents: {len(documents)}\")\r\n    print(f\"Chunks created: {len(all_chunks)}\")\r\n    for chunk in all_chunks:\r\n        print(f\"  Chunk {chunk.chunk_id}: {chunk.text[:60]}...\")\r\n\r\n    # Step 2: Entity and relationship extraction\r\n    extractor = EntityExtractor()\r\n\r\n    print(f\"\\n=== Entity Extraction ===\")\r\n    for chunk in all_chunks[:2]:\r\n        entities = extractor.extract_entities(chunk)\r\n        for entity in entities:\r\n            print(f\"  {entity.name} ({entity.entity_type}): {entity.description}\")\r\n\r\n    # Step 3: Build knowledge graph\r\n    kg_builder = KnowledgeGraphBuilder()\r\n    kg_builder.build_from_chunks(all_chunks, extractor)\r\n\r\n    # Step 4: Display graph stats\r\n    G = kg_builder.get_graph()\r\n    print(f\"\\nGraph Stats:\")\r\n    print(f\"  Nodes: {G.number_of_nodes()}\")\r\n    print(f\"  Edges: {G.number_of_edges()}\")\r\n\r\n    for u, v, data in G.edges(data=True):\r\n        print(f\"  {u} --[{data.get('relation', 'related')}]--> {v} \"\r\n              f\"(weight: {data.get('weight', 1)})\")\r\n\r\n    return kg_builder\r\n\r\nif __name__ == \"__main__\":\r\n    kg = demo_indexing_pipeline()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== Indexing Pipeline ===\r\nDocuments: 2\r\nChunks created: 4\r\n  Chunk a1b2c3d4e5f6: Microsoft Research introduced GraphRAG in 2024...\r\n  Chunk f6e5d4c3b2a1: RAG stands for Retrieval-Augmented Generation...\r\n\r\n=== Entity Extraction ===\r\n  GraphRAG (TECH): Microsoft's graph-based RAG system\r\n  Leiden Algorithm (TECH): Community detection algorithm\r\n  Microsoft Research (ORG): Microsoft's research division\r\n\r\n=== Knowledge Graph built ===\r\nEntities: 14, Relationships: 8, Edges: 8\r\n\r\nGraph Stats:\r\n  Nodes: 14\r\n  Edges: 8\r\n  GraphRAG --[uses]--> Leiden Algorithm (weight: 1)\r\n  GraphRAG --[related_to]--> Entity Extraction (weight: 1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1432-community-summarization",
      children: "14.3.2 Community Summarization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After community detection, each community must be summarized. This is the key innovation in GraphRAG — pre-computed community summaries enable fast global search."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nGraphRAG: Community Summarization\r\nSummarizes each detected community for use in global search.\r\n\"\"\"\r\n\r\nfrom dataclasses import dataclass\r\nfrom typing import List, Dict\r\n\r\n@dataclass\r\nclass CommunitySummary:\r\n    \"\"\"A summary of a community of entities.\"\"\"\r\n    community_id: int\r\n    entities: List[str]\r\n    summary_text: str\r\n    key_topics: List[str]\r\n    relationships_summary: List[str]\r\n\r\nclass CommunitySummarizer:\r\n    \"\"\"\r\n    Summarizes communities using an LLM.\r\n    Each community gets a comprehensive summary capturing\r\n    entities, relationships, and key themes.\r\n    \"\"\"\r\n\r\n    def __init__(self, model_fn=None, max_summary_length: int = 500):\r\n        self.model_fn = model_fn or self._mock_summarize\r\n        self.max_summary_length = max_summary_length\r\n\r\n    def summarize_community(\r\n        self,\r\n        community_id: int,\r\n        entities: List[str],\r\n        relationships: List[Dict],\r\n        graph: nx.Graph,\r\n    ) -> CommunitySummary:\r\n        \"\"\"\r\n        Generate a summary for a community of entities.\r\n\r\n        Args:\r\n            community_id: The community identifier\r\n            entities: List of entity names in the community\r\n            relationships: Relationship dicts involving community entities\r\n            graph: The full knowledge graph for context\r\n\r\n        Returns:\r\n            CommunitySummary with text, topics, and relationship summaries\r\n        \"\"\"\r\n        # Build context for the LLM\r\n        entity_details = []\r\n        for entity_name in entities:\r\n            neighbors = list(graph.neighbors(entity_name))\r\n            entity_details.append(f\"- {entity_name}: connected to {neighbors}\")\r\n\r\n        relationship_text = \"\"\r\n        for rel in relationships:\r\n            relationship_text += (\r\n                f\"- {rel.get('source', '?')} --[{rel.get('relation', '?')}]\"\r\n                f\"--> {rel.get('target', '?')}: \"\r\n                f\"{rel.get('description', '')}\\n\"\r\n            )\r\n\r\n        summary_prompt = f\"\"\"\r\nSummarize the following community of entities from a knowledge graph.\r\nProvide a coherent summary covering what this group represents, their\r\nkey relationships, and their collective importance.\r\n\r\nCOMMUNITY ENTITIES:\r\n{chr(10).join(entity_details)}\r\n\r\nKEY RELATIONSHIPS:\r\n{relationship_text}\r\n\r\nProvide a concise summary ({self.max_summary_length} words max) covering:\r\n1. The main theme of this community\r\n2. Key entities and their roles\r\n3. Important relationships\r\n4. How this community connects to the broader knowledge domain\r\n\r\nSummary:\r\n\"\"\"\r\n        summary_text = self.model_fn(summary_prompt)\r\n\r\n        # Extract key topics\r\n        topics = self._extract_topics(summary_text, entities)\r\n\r\n        # Build relationship summaries\r\n        rel_summaries = []\r\n        for rel in relationships:\r\n            rel_summaries.append(\r\n                f\"{rel.get('source', '?')} {rel.get('relation', 'is_related_to')} \"\r\n                f\"{rel.get('target', '?')}\"\r\n            )\r\n\r\n        return CommunitySummary(\r\n            community_id=community_id,\r\n            entities=entities,\r\n            summary_text=summary_text,\r\n            key_topics=topics,\r\n            relationships_summary=rel_summaries,\r\n        )\r\n\r\n    def summarize_all_communities(\r\n        self,\r\n        communities: Dict[int, List[str]],\r\n        all_relationships: List[Dict],\r\n        graph: nx.Graph,\r\n    ) -> List[CommunitySummary]:\r\n        \"\"\"\r\n        Summarize all communities in the graph.\r\n        This is the main entry point for the summarization pipeline.\r\n        \"\"\"\r\n        summaries = []\r\n\r\n        for comm_id, entity_list in communities.items():\r\n            # Filter relationships relevant to this community\r\n            entity_set = set(entity_list)\r\n            community_rels = [\r\n                r for r in all_relationships\r\n                if r.get('source') in entity_set\r\n                or r.get('target') in entity_set\r\n            ]\r\n\r\n            summary = self.summarize_community(\r\n                comm_id, entity_list, community_rels, graph\r\n            )\r\n            summaries.append(summary)\r\n\r\n            print(f\"Community {comm_id}: {len(entity_list)} entities, \"\r\n                  f\"{len(community_rels)} relationships summarized\")\r\n\r\n        return summaries\r\n\r\n    def _extract_topics(self, summary: str, entities: List[str]) -> List[str]:\r\n        \"\"\"Extract key topics from a community summary.\"\"\"\r\n        topics = []\r\n        # Simple extraction: use entities that appear in the summary\r\n        for entity in entities:\r\n            if entity.lower() in summary.lower():\r\n                topics.append(entity)\r\n        return topics[:5]  # Limit to top 5 topics\r\n\r\n    def _mock_summarize(self, prompt: str) -> str:\r\n        \"\"\"Mock LLM summarization for demonstration.\"\"\"\r\n        return (\r\n            \"This community represents the core GraphRAG technology stack. \"\r\n            \"It includes Microsoft's graph-based RAG system, the Leiden \"\r\n            \"algorithm for community detection, and entity extraction \"\r\n            \"capabilities. These components work together to transform \"\r\n            \"unstructured text into a structured, queryable knowledge graph. \"\r\n            \"The community is central to both local and global search paradigms.\"\r\n        )\r\n\r\n# Demonstration\r\ndef demo_community_summarization(kg_builder=None):\r\n    \"\"\"Demonstrate community summarization.\"\"\"\r\n    import networkx as nx\r\n\r\n    if kg_builder is None:\r\n        # Build a simple graph\r\n        G = nx.Graph()\r\n        entities_data = {\r\n            \"GraphRAG\": {\"type\": \"TECH\"},\r\n            \"Leiden Algorithm\": {\"type\": \"TECH\"},\r\n            \"Entity Extraction\": {\"type\": \"CONCEPT\"},\r\n            \"GPT-4\": {\"type\": \"TECH\"},\r\n            \"Microsoft Research\": {\"type\": \"ORG\"},\r\n            \"Knowledge Graph\": {\"type\": \"CONCEPT\"},\r\n        }\r\n        for name, data in entities_data.items():\r\n            G.add_node(name, **data)\r\n\r\n        relationships = [\r\n            {\"source\": \"GraphRAG\", \"target\": \"Leiden Algorithm\",\r\n             \"relation\": \"uses\", \"description\": \"For community detection\"},\r\n            {\"source\": \"GraphRAG\", \"target\": \"Entity Extraction\",\r\n             \"relation\": \"includes\",\r\n             \"description\": \"Extracts entities from text\"},\r\n            {\"source\": \"GraphRAG\", \"target\": \"GPT-4\",\r\n             \"relation\": \"uses\",\r\n             \"description\": \"For summarization and generation\"},\r\n            {\"source\": \"GraphRAG\", \"target\": \"Microsoft Research\",\r\n             \"relation\": \"developed_by\",\r\n             \"description\": \"Created at Microsoft Research\"},\r\n            {\"source\": \"GraphRAG\", \"target\": \"Knowledge Graph\",\r\n             \"relation\": \"builds\",\r\n             \"description\": \"Constructs a knowledge graph\"},\r\n        ]\r\n        for rel in relationships:\r\n            G.add_edge(rel[\"source\"], rel[\"target\"], **{\r\n                k: v for k, v in rel.items() if k != \"source\" and k != \"target\"\r\n            })\r\n\r\n        communities = {0: [\"GraphRAG\", \"Leiden Algorithm\", \"Entity Extraction\"],\r\n                       1: [\"GPT-4\", \"Microsoft Research\"],\r\n                       2: [\"Knowledge Graph\"]}\r\n    else:\r\n        G = kg_builder.get_graph()\r\n        detector = LeidenCommunityDetector(resolution=1.0)\r\n        communities = detector.detect_communities(G)\r\n        relationships = [\r\n            {\"source\": u, \"target\": v,\r\n             \"relation\": data.get(\"relation\", \"related\"),\r\n             \"description\": data.get(\"description\", \"\")}\r\n            for u, v, data in G.edges(data=True)\r\n        ]\r\n\r\n    if kg_builder is None:\r\n        relationships = [\r\n            {\"source\": u, \"target\": v,\r\n             \"relation\": data.get(\"relation\", \"related\"),\r\n             \"description\": data.get(\"description\", \"\")}\r\n            for u, v, data in G.edges(data=True)\r\n        ]\r\n\r\n    print(\"=== Community Summarization ===\")\r\n    summarizer = CommunitySummarizer()\r\n    summaries = summarizer.summarize_all_communities(communities, relationships, G)\r\n\r\n    print(f\"\\nGenerated {len(summaries)} community summaries:\\n\")\r\n    for s in summaries:\r\n        print(f\"--- Community {s.community_id} ---\")\r\n        print(f\"Entities: {', '.join(s.entities)}\")\r\n        print(f\"Summary: {s.summary_text}\")\r\n        print(f\"Key Topics: {', '.join(s.key_topics)}\")\r\n        print()\r\n\r\n    return summaries\r\n\r\nif __name__ == \"__main__\":\r\n    demo_community_summarization()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "144-local-search",
      children: "14.4 Local Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Local search answers entity-specific questions by grounding the query to specific entities and retrieving their community context."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[Query: \"How does GraphRAG use Leiden?\"] --> B[Entity Extraction from Query]\r\n    B --> C[Ground to Knowledge Graph Entities]\r\n    C --> D[Retrieve Entity's Community]\r\n    D --> E[Get Community Summary]\r\n    C --> F[Get Entity's Relationships]\r\n    E --> G[Build Context Window]\r\n    F --> G\r\n    G --> H[LLM Answer Generation]\r\n    H --> I[Final Answer with Citations]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nGraphRAG: Local Search Implementation\r\nEntity-grounded retrieval and answer generation.\r\n\"\"\"\r\n\r\nfrom dataclasses import dataclass\r\nfrom typing import List, Dict, Optional, Tuple\r\n\r\n@dataclass\r\nclass LocalSearchResult:\r\n    \"\"\"Result from a local search query.\"\"\"\r\n    answer: str\r\n    grounded_entities: List[str]\r\n    source_communities: List[int]\r\n    supporting_evidence: List[Dict]\r\n    confidence: float\r\n\r\nclass LocalSearcher:\r\n    \"\"\"\r\n    Performs entity-grounded local search on the knowledge graph.\r\n    Steps:\r\n    1. Extract entities from the query\r\n    2. Ground entities to knowledge graph nodes\r\n    3. Retrieve community context for grounded entities\r\n    4. Gather entity-specific relationships\r\n    5. Build context and generate answer\r\n    \"\"\"\r\n\r\n    def __init__(\r\n        self,\r\n        graph: nx.Graph,\r\n        communities: Dict[int, List[str]],\r\n        community_summaries: List[CommunitySummary],\r\n        entity_extractor: EntityExtractor,\r\n        model_fn=None,\r\n        max_context_tokens: int = 4000,\r\n    ):\r\n        self.graph = graph\r\n        self.communities = communities\r\n        self.summary_map = {\r\n            s.community_id: s for s in community_summaries\r\n        }\r\n        self.entity_extractor = entity_extractor\r\n        self.model_fn = model_fn or self._mock_generate\r\n        self.max_context_tokens = max_context_tokens\r\n\r\n    def search(self, query: str, top_k_entities: int = 5) -> LocalSearchResult:\r\n        \"\"\"\r\n        Execute a local search query.\r\n\r\n        Args:\r\n            query: Natural language question\r\n            top_k_entities: Max entities to ground to\r\n\r\n        Returns:\r\n            LocalSearchResult with answer and evidence\r\n        \"\"\"\r\n        # Step 1: Extract entities from query\r\n        query_entities = self._extract_query_entities(query)\r\n\r\n        # Step 2: Ground to knowledge graph\r\n        grounded = self._ground_entities(query_entities, top_k_entities)\r\n        if not grounded:\r\n            return self._fallback_response(query)\r\n\r\n        # Step 3: Find communities for grounded entities\r\n        relevant_communities = set()\r\n        entity_to_community = {}\r\n\r\n        for entity_name in grounded:\r\n            for comm_id, entities in self.communities.items():\r\n                if entity_name in entities:\r\n                    relevant_communities.add(comm_id)\r\n                    entity_to_community[entity_name] = comm_id\r\n                    break\r\n\r\n        # Step 4: Retrieve community context and entity relationships\r\n        context_parts = []\r\n        evidence = []\r\n\r\n        # Add community summaries\r\n        for comm_id in relevant_communities:\r\n            if comm_id in self.summary_map:\r\n                summary = self.summary_map[comm_id]\r\n                context_parts.append(\r\n                    f\"=== Community {comm_id} Summary ===\\n{summary.summary_text}\"\r\n                )\r\n                evidence.append({\r\n                    \"type\": \"community_summary\",\r\n                    \"community_id\": comm_id,\r\n                    \"entities\": summary.entities,\r\n                    \"text\": summary.summary_text[:200],\r\n                })\r\n\r\n        # Add entity-specific relationships\r\n        for entity_name in grounded[:3]:\r\n            if entity_name not in self.graph:\r\n                continue\r\n\r\n            neighbors = list(self.graph.neighbors(entity_name))\r\n            relationship_lines = []\r\n\r\n            for neighbor in neighbors:\r\n                edge_data = self.graph.get_edge_data(entity_name, neighbor)\r\n                relation = edge_data.get(\"relation\", \"related_to\") \\\r\n                    if edge_data else \"related_to\"\r\n                weight = edge_data.get(\"weight\", 1.0) if edge_data else 1.0\r\n                relationship_lines.append(\r\n                    f\"  --[{relation}] (weight: {weight:.1f})--> {neighbor}\"\r\n                )\r\n\r\n            if relationship_lines:\r\n                entity_context = (\r\n                    f\"=== Entity: {entity_name} ===\\n\"\r\n                    f\"Connections:\\n\" + \"\\n\".join(relationship_lines)\r\n                )\r\n                context_parts.append(entity_context)\r\n\r\n        # Step 5: Build final context and generate answer\r\n        context = \"\\n\\n\".join(context_parts)\r\n\r\n        # Truncate if needed (token budget)\r\n        if len(context) > self.max_context_tokens:\r\n            context = context[:self.max_context_tokens]\r\n\r\n        generation_prompt = f\"\"\"You are a knowledge graph assistant. Answer the question based on the provided context from the knowledge graph.\r\n\r\nCONTEXT:\r\n{context}\r\n\r\nQUESTION: {query}\r\n\r\nProvide a comprehensive answer based ONLY on the context above.\r\nIf the context does not contain enough information, say so explicitly.\r\nCite the specific entities and relationships you use.\r\n\r\nANSWER:\"\"\"\r\n        answer = self.model_fn(generation_prompt)\r\n\r\n        return LocalSearchResult(\r\n            answer=answer,\r\n            grounded_entities=grounded,\r\n            source_communities=list(relevant_communities),\r\n            supporting_evidence=evidence,\r\n            confidence=self._compute_confidence(grounded, evidence),\r\n        )\r\n\r\n    def _extract_query_entities(self, query: str) -> List[str]:\r\n        \"\"\"Extract potential entity names from the query string.\"\"\"\r\n        # In production, this uses the LLM-based entity extractor\r\n        # For simulation, use pattern matching\r\n        known_entities = set(self.graph.nodes()) if hasattr(self, 'graph') else set()\r\n\r\n        found = []\r\n        for entity in known_entities:\r\n            if entity.lower() in query.lower():\r\n                found.append(entity)\r\n\r\n        # If no known entities found, use mock extraction\r\n        if not found:\r\n            found = self._mock_query_entities(query)\r\n\r\n        return found\r\n\r\n    def _ground_entities(self, query_entities: List[str],\r\n                         top_k: int) -> List[str]:\r\n        \"\"\"Ground query entities to knowledge graph nodes.\"\"\"\r\n        grounded = []\r\n        for entity in query_entities:\r\n            if entity in self.graph:\r\n                grounded.append(entity)\r\n        return grounded[:top_k]\r\n\r\n    def _compute_confidence(self, entities: List[str],\r\n                            evidence: List[Dict]) -> float:\r\n        \"\"\"Compute confidence based on entity matches and evidence.\"\"\"\r\n        if not entities:\r\n            return 0.0\r\n        base = min(1.0, len(entities) / 3.0)\r\n        evidence_bonus = min(0.3, len(evidence) * 0.1)\r\n        return round(min(1.0, base + evidence_bonus), 2)\r\n\r\n    def _fallback_response(self, query: str) -> LocalSearchResult:\r\n        \"\"\"Generate fallback when no entities are found.\"\"\"\r\n        return LocalSearchResult(\r\n            answer=\"I could not find specific entities in the knowledge \"\r\n                   \"graph related to your query. Please try rephrasing \"\r\n                   \"or providing more specific entity names.\",\r\n            grounded_entities=[],\r\n            source_communities=[],\r\n            supporting_evidence=[],\r\n            confidence=0.0,\r\n        )\r\n\r\n    def _mock_generate(self, prompt: str) -> str:\r\n        \"\"\"Mock LLM generation for demonstration.\"\"\"\r\n        return (\r\n            \"Based on the knowledge graph context, GraphRAG uses the \"\r\n            \"Leiden algorithm for hierarchical community detection. The \"\r\n            \"Leiden algorithm partitions the entity graph into communities \"\r\n            \"of densely connected entities. This enables GraphRAG to \"\r\n            \"generate targeted summaries for each community, which are \"\r\n            \"then used for both local and global search.\"\r\n        )\r\n\r\n    def _mock_query_entities(self, query: str) -> List[str]:\r\n        \"\"\"Mock entity extraction from query.\"\"\"\r\n        # Check for common entity patterns\r\n        entity_map = {\r\n            \"graphrag\": \"GraphRAG\",\r\n            \"leiden\": \"Leiden Algorithm\",\r\n            \"gpt\": \"GPT-4\",\r\n            \"microsoft\": \"Microsoft Research\",\r\n            \"entity\": \"Entity Extraction\",\r\n            \"knowledge graph\": \"Knowledge Graph\",\r\n        }\r\n        found = []\r\n        for keyword, entity in entity_map.items():\r\n            if keyword.lower() in query.lower():\r\n                found.append(entity)\r\n        return found\r\n\r\n# Demonstration\r\ndef demo_local_search():\r\n    \"\"\"Demonstrate local search with the knowledge graph.\"\"\"\r\n    import networkx as nx\r\n\r\n    # Build a sample knowledge graph\r\n    G = nx.Graph()\r\n    entities = [\"GraphRAG\", \"Leiden Algorithm\", \"GPT-4\",\r\n                \"Microsoft Research\", \"Entity Extraction\", \"Knowledge Graph\"]\r\n    for e in entities:\r\n        G.add_node(e)\r\n\r\n    edges = [\r\n        (\"GraphRAG\", \"Leiden Algorithm\", {\"relation\": \"uses\", \"weight\": 0.9}),\r\n        (\"GraphRAG\", \"GPT-4\", {\"relation\": \"uses_for_summarization\",\r\n                                \"weight\": 0.8}),\r\n        (\"GraphRAG\", \"Microsoft Research\", {\"relation\": \"developed_by\",\r\n                                            \"weight\": 0.95}),\r\n        (\"GraphRAG\", \"Entity Extraction\", {\"relation\": \"includes\",\r\n                                           \"weight\": 0.85}),\r\n        (\"GraphRAG\", \"Knowledge Graph\", {\"relation\": \"builds\", \"weight\": 0.9}),\r\n    ]\r\n    G.add_edges_from(edges)\r\n\r\n    # Define communities\r\n    communities = {\r\n        0: [\"GraphRAG\", \"Leiden Algorithm\", \"Entity Extraction\"],\r\n        1: [\"GPT-4\", \"Microsoft Research\"],\r\n        2: [\"Knowledge Graph\"],\r\n    }\r\n\r\n    # Create community summaries\r\n    summaries = [\r\n        CommunitySummary(\r\n            community_id=0,\r\n            entities=[\"GraphRAG\", \"Leiden Algorithm\", \"Entity Extraction\"],\r\n            summary_text=\"Core GraphRAG technology stack: graph-based RAG \"\r\n                        \"with community detection and entity extraction.\",\r\n            key_topics=[\"GraphRAG\", \"Leiden\", \"Entity Extraction\"],\r\n            relationships_summary=[\"GraphRAG uses Leiden Algorithm\",\r\n                                   \"GraphRAG includes Entity Extraction\"],\r\n        ),\r\n        CommunitySummary(\r\n            community_id=1,\r\n            entities=[\"GPT-4\", \"Microsoft Research\"],\r\n            summary_text=\"Microsoft's AI capabilities: GPT-4 integration \"\r\n                        \"for summarization and Microsoft Research as creator.\",\r\n            key_topics=[\"GPT-4\", \"Microsoft Research\"],\r\n            relationships_summary=[\"GraphRAG uses GPT-4\",\r\n                                   \"GraphRAG developed by Microsoft Research\"],\r\n        ),\r\n    ]\r\n\r\n    # Create local searcher\r\n    searcher = LocalSearcher(\r\n        graph=G,\r\n        communities=communities,\r\n        community_summaries=summaries,\r\n        entity_extractor=EntityExtractor(),\r\n    )\r\n\r\n    print(\"=== Local Search Demonstration ===\")\r\n    test_queries = [\r\n        \"How does GraphRAG use the Leiden algorithm?\",\r\n        \"What role does GPT-4 play in GraphRAG?\",\r\n        \"Who developed GraphRAG?\",\r\n    ]\r\n\r\n    for query in test_queries:\r\n        print(f\"\\nQuery: {query}\")\r\n        result = searcher.search(query)\r\n        print(f\"Grounded Entities: {result.grounded_entities}\")\r\n        print(f\"Source Communities: {result.source_communities}\")\r\n        print(f\"Confidence: {result.confidence}\")\r\n        print(f\"Answer: {result.answer[:200]}...\")\r\n        print(\"-\" * 60)\r\n\r\n    return searcher\r\n\r\nif __name__ == \"__main__\":\r\n    demo_local_search()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "145-global-search",
      children: "14.5 Global Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Global search answers abstract, thematic, or comparative questions. It operates over all communities using a map-reduce pattern."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\r\n    A[Query: \"What are the main themes in GraphRAG research?\"] --> B[Map Phase]\r\n    subgraph \"Map Phase\"\r\n        B1[Community 0 Summary]\r\n        B2[Community 1 Summary]\r\n        B3[Community N Summary]\r\n        B --> B1\r\n        B --> B2\r\n        B --> B3\r\n    end\r\n    subgraph \"Intermediate Answers\"\r\n        C1[Community 0 Answer]\r\n        C2[Community 1 Answer]\r\n        C3[Community N Answer]\r\n        B1 --> C1\r\n        B2 --> C2\r\n        B3 --> C3\r\n    end\r\n    subgraph \"Reduce Phase\"\r\n        D[All Intermediate Answers] --> E[Thematic Aggregation]\r\n        E --> F[Final Answer]\r\n    end\r\n    C1 --> D\r\n    C2 --> D\r\n    C3 --> D\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nGraphRAG: Global Search Implementation\r\nMap-reduce over community summaries for thematic question answering.\r\n\"\"\"\r\n\r\nfrom dataclasses import dataclass\r\nfrom typing import List, Dict, Optional, Tuple\r\nfrom concurrent.futures import ThreadPoolExecutor, as_completed\r\n\r\n@dataclass\r\nclass GlobalSearchResult:\r\n    \"\"\"Result from a global search query.\"\"\"\r\n    answer: str\r\n    community_contributions: List[Dict]\r\n    themes_identified: List[str]\r\n    supporting_communities: List[int]\r\n    confidence: float\r\n\r\nclass GlobalSearcher:\r\n    \"\"\"\r\n    Performs global search using map-reduce over all community summaries.\r\n    Map: Each community independently answers based on its summary.\r\n    Reduce: All community answers are aggregated into a final answer.\r\n    \"\"\"\r\n\r\n    def __init__(\r\n        self,\r\n        community_summaries: List[CommunitySummary],\r\n        model_fn=None,\r\n        max_workers: int = 4,\r\n        min_community_relevance: float = 0.3,\r\n    ):\r\n        self.summaries = community_summaries\r\n        self.model_fn = model_fn or self._mock_generate\r\n        self.max_workers = max_workers\r\n        self.min_community_relevance = min_community_relevance\r\n\r\n    def search(self, query: str) -> GlobalSearchResult:\r\n        \"\"\"\r\n        Execute a global search query across all communities.\r\n\r\n        Args:\r\n            query: Abstract or thematic question\r\n\r\n        Returns:\r\n            GlobalSearchResult with aggregated answer\r\n        \"\"\"\r\n        # Phase 1: Filter and score community relevance\r\n        scored_communities = self._score_community_relevance(query)\r\n\r\n        relevant = [\r\n            s for s, score in scored_communities\r\n            if score >= self.min_community_relevance\r\n        ]\r\n\r\n        if not relevant:\r\n            return GlobalSearchResult(\r\n                answer=\"No relevant communities found for this query.\",\r\n                community_contributions=[],\r\n                themes_identified=[],\r\n                supporting_communities=[],\r\n                confidence=0.0,\r\n            )\r\n\r\n        # Phase 2: Map — each community generates intermediate answer\r\n        print(f\"Map phase: {len(relevant)} relevant communities\")\r\n        intermediate_answers = self._map_community_answers(query, relevant)\r\n\r\n        # Phase 3: Reduce — aggregate intermediate answers\r\n        print(f\"Reduce phase: aggregating {len(intermediate_answers)} answers\")\r\n        final_answer = self._reduce_answers(query, intermediate_answers)\r\n\r\n        # Extract themes\r\n        themes = self._extract_themes(intermediate_answers)\r\n\r\n        return GlobalSearchResult(\r\n            answer=final_answer,\r\n            community_contributions=intermediate_answers,\r\n            themes_identified=themes,\r\n            supporting_communities=[s.community_id for s in relevant],\r\n            confidence=self._compute_confidence(intermediate_answers),\r\n        )\r\n\r\n    def _score_community_relevance(\r\n        self, query: str\r\n    ) -> List[Tuple[CommunitySummary, float]]:\r\n        \"\"\"\r\n        Score each community's relevance to the query.\r\n        Uses keyword overlap as a proxy (production uses embeddings).\r\n        \"\"\"\r\n        query_terms = set(query.lower().split())\r\n        scored = []\r\n\r\n        for summary in self.summaries:\r\n            # Combine summary text and topics for scoring\r\n            combined_text = (\r\n                summary.summary_text.lower()\r\n                + \" \" + \" \".join(summary.key_topics).lower()\r\n                + \" \" + \" \".join(summary.entities).lower()\r\n            )\r\n            summary_terms = set(combined_text.split())\r\n\r\n            # Jaccard similarity\r\n            if not query_terms or not summary_terms:\r\n                score = 0.0\r\n            else:\r\n                intersection = query_terms & summary_terms\r\n                union = query_terms | summary_terms\r\n                score = len(intersection) / len(union)\r\n\r\n            # Bonus for entity name overlap\r\n            for entity in summary.entities:\r\n                if entity.lower() in query.lower():\r\n                    score += 0.2\r\n\r\n            scored.append((summary, round(min(1.0, score), 3)))\r\n\r\n        return sorted(scored, key=lambda x: x[1], reverse=True)\r\n\r\n    def _map_community_answers(\r\n        self, query: str, communities: List[CommunitySummary]\r\n    ) -> List[Dict]:\r\n        \"\"\"\r\n        Map phase: each community independently generates an answer\r\n        based on its summary. Runs in parallel using ThreadPoolExecutor.\r\n        \"\"\"\r\n        results = []\r\n\r\n        def process_community(summary: CommunitySummary) -> Dict:\r\n            prompt = f\"\"\"You are analyzing a community from a knowledge graph.\r\nUse only the community summary below to answer the question.\r\n\r\nCOMMUNITY ID: {summary.community_id}\r\nCOMMUNITY ENTITIES: {', '.join(summary.entities)}\r\nCOMMUNITY SUMMARY: {summary.summary_text}\r\nKEY RELATIONSHIPS:\r\n{chr(10).join('- ' + r for r in summary.relationships_summary)}\r\n\r\nQUESTION: {query}\r\n\r\nBased ONLY on this community's information, what insights can you provide?\r\nIf this community does not contain relevant information, say so.\r\n\r\nCOMMUNITY ANSWER:\"\"\"\r\n            answer = self.model_fn(prompt)\r\n\r\n            return {\r\n                \"community_id\": summary.community_id,\r\n                \"entities\": summary.entities,\r\n                \"answer\": answer,\r\n            }\r\n\r\n        # Parallel execution\r\n        with ThreadPoolExecutor(max_workers=self.max_workers) as executor:\r\n            futures = {\r\n                executor.submit(process_community, s): s\r\n                for s in communities\r\n            }\r\n\r\n            for future in as_completed(futures):\r\n                try:\r\n                    result = future.result()\r\n                    results.append(result)\r\n                    print(f\"  Community {result['community_id']}: answer generated\")\r\n                except Exception as e:\r\n                    print(f\"  Error processing community: {e}\")\r\n\r\n        return results\r\n\r\n    def _reduce_answers(\r\n        self, query: str, intermediate_answers: List[Dict]\r\n    ) -> str:\r\n        \"\"\"\r\n        Reduce phase: aggregate all community answers into a final answer.\r\n        Identifies common themes, contradictions, and complementary information.\r\n        \"\"\"\r\n        if not intermediate_answers:\r\n            return \"No community answers were generated.\"\r\n\r\n        # Build aggregation context\r\n        parts = []\r\n        for ans in intermediate_answers:\r\n            parts.append(\r\n                f\"[Community {ans['community_id']} — \"\r\n                f\"Entities: {', '.join(ans['entities'])}]\\n\"\r\n                f\"{ans['answer']}\"\r\n            )\r\n\r\n        aggregation_context = \"\\n\\n\".join(parts)\r\n\r\n        reduce_prompt = f\"\"\"You are synthesizing answers from multiple knowledge graph communities.\r\nEach community provides a partial answer based on its local information.\r\n\r\nQUESTION: {query}\r\n\r\nCOMMUNITY ANSWERS:\r\n{aggregation_context}\r\n\r\nSynthesize a comprehensive answer that:\r\n1. Identifies common themes across communities\r\n2. Notes any unique insights from specific communities\r\n3. Resolves any contradictions\r\n4. Provides a unified, well-structured answer\r\n\r\nFINAL SYNTHESIZED ANSWER:\"\"\"\r\n        return self.model_fn(reduce_prompt)\r\n\r\n    def _extract_themes(self, intermediate_answers: List[Dict]) -> List[str]:\r\n        \"\"\"Extract key themes from intermediate answers.\"\"\"\r\n        themes = set()\r\n\r\n        for ans in intermediate_answers:\r\n            answer_text = ans.get(\"answer\", \"\").lower()\r\n            # Simple theme extraction by looking for repeated key terms\r\n            theme_candidates = [\r\n                \"community detection\", \"entity extraction\",\r\n                \"knowledge graph\", \"summarization\", \"retrieval\",\r\n                \"generation\", \"search\", \"hierarchical\",\r\n                \"temporal reasoning\", \"claim extraction\",\r\n            ]\r\n            for theme in theme_candidates:\r\n                if theme in answer_text:\r\n                    themes.add(theme)\r\n\r\n        return sorted(themes)\r\n\r\n    def _compute_confidence(self, answers: List[Dict]) -> float:\r\n        \"\"\"Compute confidence based on number and consistency of answers.\"\"\"\r\n        if not answers:\r\n            return 0.0\r\n\r\n        # More contributing communities = higher confidence\r\n        coverage = min(1.0, len(answers) / 3.0)\r\n\r\n        # Check answer diversity (more unique entities = richer answer)\r\n        all_entities = set()\r\n        for ans in answers:\r\n            all_entities.update(ans.get(\"entities\", []))\r\n        diversity = min(0.3, len(all_entities) * 0.05)\r\n\r\n        return round(min(1.0, coverage + diversity), 2)\r\n\r\n    def _mock_generate(self, prompt: str) -> str:\r\n        \"\"\"Mock LLM generation for demonstration.\"\"\"\r\n        if \"COMMUNITY ANSWER\" in prompt:\r\n            return (\r\n                \"This community centers on the core GraphRAG technology. \"\r\n                \"The key insight is the integration of community detection \"\r\n                \"with entity extraction to enable structured knowledge retrieval.\"\r\n            )\r\n        if \"FINAL SYNTHESIZED ANSWER\" in prompt:\r\n            return (\r\n                \"GraphRAG research focuses on three main themes:\\n\"\r\n                \"1. **Community Detection**: Using the Leiden algorithm to \"\r\n                \"organize entities into hierarchical communities.\\n\"\r\n                \"2. **Entity-Centric Organization**: Transforming flat text \"\r\n                \"into structured knowledge graphs with entity extraction.\\n\"\r\n                \"3. **Dual Search Paradigms**: Local search for entity-specific \"\r\n                \"queries and global search for thematic questions.\\n\\n\"\r\n                \"These themes work together to overcome limitations of \"\r\n                \"standard RAG for complex, multi-faceted questions.\"\r\n            )\r\n        return \"Generated answer based on provided context.\"\r\n\r\n# Demonstration\r\ndef demo_global_search():\r\n    \"\"\"Demonstrate global search across communities.\"\"\"\r\n    # Create sample community summaries\r\n    summaries = [\r\n        CommunitySummary(\r\n            community_id=0,\r\n            entities=[\"GraphRAG\", \"Leiden Algorithm\", \"Entity Extraction\"],\r\n            summary_text=\"GraphRAG core: a graph-based RAG system using \"\r\n                        \"the Leiden algorithm for hierarchical community \"\r\n                        \"detection and entity extraction from unstructured text.\",\r\n            key_topics=[\"GraphRAG\", \"community detection\", \"entity extraction\"],\r\n            relationships_summary=[\r\n                \"GraphRAG uses Leiden Algorithm\",\r\n                \"GraphRAG includes Entity Extraction\",\r\n            ],\r\n        ),\r\n        CommunitySummary(\r\n            community_id=1,\r\n            entities=[\"GPT-4\", \"Microsoft Research\", \"Azure OpenAI\"],\r\n            summary_text=\"Microsoft's AI infrastructure: GPT-4 powers \"\r\n                        \"summarization and generation. Microsoft Research \"\r\n                        \"leads innovation. Azure OpenAI provides deployment.\",\r\n            key_topics=[\"GPT-4\", \"Azure\", \"summarization\"],\r\n            relationships_summary=[\r\n                \"GraphRAG uses GPT-4\",\r\n                \"GraphRAG developed by Microsoft Research\",\r\n            ],\r\n        ),\r\n        CommunitySummary(\r\n            community_id=2,\r\n            entities=[\"Local Search\", \"Global Search\", \"Query Processing\"],\r\n            summary_text=\"Search paradigms in GraphRAG: local search for \"\r\n                        \"entity-grounded queries, global search for thematic \"\r\n                        \"questions using map-reduce over communities.\",\r\n            key_topics=[\"search\", \"local\", \"global\", \"map-reduce\"],\r\n            relationships_summary=[\r\n                \"GraphRAG supports Local Search\",\r\n                \"GraphRAG supports Global Search\",\r\n            ],\r\n        ),\r\n    ]\r\n\r\n    print(\"=== Global Search Demonstration ===\")\r\n    searcher = GlobalSearcher(community_summaries=summaries)\r\n\r\n    test_queries = [\r\n        \"What are the main research themes in GraphRAG?\",\r\n        \"How does GraphRAG handle different types of search?\",\r\n        \"What infrastructure supports GraphRAG deployment?\",\r\n    ]\r\n\r\n    for query in test_queries:\r\n        print(f\"\\n{'='*60}\")\r\n        print(f\"Query: {query}\")\r\n        print(f\"{'='*60}\")\r\n\r\n        result = searcher.search(query)\r\n\r\n        print(f\"\\nThemes Identified: {result.themes_identified}\")\r\n        print(f\"Contributing Communities: {result.supporting_communities}\")\r\n        print(f\"Confidence: {result.confidence}\")\r\n        print(f\"\\nFinal Answer:\\n{result.answer}\")\r\n        print(f\"\\nCommunity Contributions:\")\r\n        for contrib in result.community_contributions:\r\n            print(f\"  Comm {contrib['community_id']}: \"\r\n                  f\"{contrib['answer'][:80]}...\")\r\n\r\n    return searcher\r\n\r\nif __name__ == \"__main__\":\r\n    demo_global_search()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "146-covariate-refinement",
      children: "14.6 Covariate Refinement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Covariate refinement extracts structured claims with source attribution and temporal reasoning. This enables tracking how facts change over time."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[Text Chunk] --> B[Claim Extraction]\r\n    B --> C[Subject-Object Pairing]\r\n    C --> D[Claim Type Classification]\r\n    D --> E[Source Attribution]\r\n    E --> F[Temporal Tagging]\r\n    F --> G[(Claim Store)]\r\n    G --> H[Temporal Query: \"What changed in 2024?\"]\r\n    H --> I[Compare Claims Over Time]\r\n    I --> J[Temporal Answer]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nGraphRAG: Covariate Refinement\r\nClaim extraction, source attribution, and temporal reasoning.\r\n\"\"\"\r\n\r\nfrom dataclasses import dataclass\r\nfrom typing import List, Dict, Optional, Set\r\nfrom datetime import datetime\r\nimport re\r\n\r\n@dataclass\r\nclass CovariateClaim:\r\n    \"\"\"A refined claim extracted from text with metadata.\"\"\"\r\n    claim_id: str\r\n    text: str\r\n    subject: str\r\n    predicate: str\r\n    obj: str\r\n    claim_type: str  # FACT, ATTRIBUTION, COMPARISON, TEMPORAL, CAUSAL\r\n    confidence: float\r\n    source_chunk: str\r\n    source_document: str\r\n    timestamp: Optional[str] = None\r\n    temporal_expression: Optional[str] = None\r\n    is_attributed: bool = False\r\n    attributed_source: Optional[str] = None\r\n\r\nclass CovariateExtractor:\r\n    \"\"\"\r\n    Extracts refined claims (covariates) from text chunks.\r\n    Handles source attribution, temporal expressions, and claim typing.\r\n    \"\"\"\r\n\r\n    def __init__(self, model_fn=None):\r\n        self.model_fn = model_fn or self._mock_extract_claims\r\n        self.temporal_patterns = [\r\n            r'\\b(in|during|since|before|after|until)\\s+(\\d{4})\\b',\r\n            r'\\b(January|February|March|April|May|June|July|August|September|'\r\n            r'October|November|December)\\s+\\d{1,2},?\\s+(\\d{4})\\b',\r\n            r'\\b(today|yesterday|currently|recently|previously|historically)\\b',\r\n        ]\r\n\r\n    def extract_claims(self, chunk: TextChunk) -> List[CovariateClaim]:\r\n        \"\"\"\r\n        Extract all claims from a text chunk with covariate metadata.\r\n        \"\"\"\r\n        # Use LLM for claim extraction (mocked here)\r\n        raw_claims = self.model_fn(chunk.text)\r\n\r\n        claims = []\r\n        for raw in raw_claims:\r\n            claim = self._refine_claim(raw, chunk)\r\n            claims.append(claim)\r\n\r\n        return claims\r\n\r\n    def _refine_claim(self, raw: Dict, chunk: TextChunk) -> CovariateClaim:\r\n        \"\"\"\r\n        Refine a raw extracted claim with additional metadata.\r\n        \"\"\"\r\n        subject = raw.get(\"subject\", \"unknown\")\r\n        predicate = raw.get(\"predicate\", \"is_related_to\")\r\n        obj = raw.get(\"object\", \"unknown\")\r\n\r\n        # Generate unique claim ID\r\n        claim_id = hashlib.md5(\r\n            f\"{chunk.chunk_id}:{subject}:{predicate}:{obj}\".encode()\r\n        ).hexdigest()[:12]\r\n\r\n        # Detect temporal expressions in the claim text\r\n        temporal = self._extract_temporal(raw.get(\"text\", \"\"))\r\n\r\n        # Check for source attribution\r\n        attribution = self._check_attribution(raw.get(\"text\", \"\"))\r\n\r\n        return CovariateClaim(\r\n            claim_id=claim_id,\r\n            text=raw.get(\"text\", \"\"),\r\n            subject=subject,\r\n            predicate=predicate,\r\n            obj=obj,\r\n            claim_type=raw.get(\"type\", \"FACT\"),\r\n            confidence=raw.get(\"confidence\", 0.8),\r\n            source_chunk=chunk.chunk_id,\r\n            source_document=chunk.source_doc,\r\n            timestamp=datetime.now().isoformat() if temporal[\"has_date\"] else None,\r\n            temporal_expression=temporal[\"expression\"],\r\n            is_attributed=attribution[\"is_attributed\"],\r\n            attributed_source=attribution[\"source\"],\r\n        )\r\n\r\n    def _extract_temporal(self, text: str) -> Dict:\r\n        \"\"\"Extract temporal expressions from claim text.\"\"\"\r\n        has_date = False\r\n        expression = None\r\n\r\n        for pattern in self.temporal_patterns:\r\n            match = re.search(pattern, text, re.IGNORECASE)\r\n            if match:\r\n                has_date = True\r\n                expression = match.group(0)\r\n                # Check for year pattern\r\n                year_match = re.search(r'\\b(\\d{4})\\b', text)\r\n                if year_match:\r\n                    expression = year_match.group(1)\r\n                break\r\n\r\n        return {\"has_date\": has_date, \"expression\": expression}\r\n\r\n    def _check_attribution(self, text: str) -> Dict:\r\n        \"\"\"Check if a claim includes source attribution.\"\"\"\r\n        attribution_patterns = [\r\n            r'(according\\s+to\\s+[\\w\\s]+)',\r\n            r'(\"[\\w\\s]+\"\\s+(said|stated|reported|claimed))',\r\n            r'(\\b\\w+\\s+(et\\s+al\\.|et al)\\s*\\(\\d{4}\\))',\r\n            r'(as\\s+reported\\s+by\\s+[\\w\\s]+)',\r\n            r'(cited\\s+in\\s+[\\w\\s]+)',\r\n        ]\r\n\r\n        for pattern in attribution_patterns:\r\n            match = re.search(pattern, text, re.IGNORECASE)\r\n            if match:\r\n                return {\"is_attributed\": True, \"source\": match.group(1)}\r\n\r\n        return {\"is_attributed\": False, \"source\": None}\r\n\r\n    def _mock_extract_claims(self, text: str) -> List[Dict]:\r\n        \"\"\"Mock LLM claim extraction for demonstration.\"\"\"\r\n        return [\r\n            {\r\n                \"text\": \"Microsoft Research introduced GraphRAG in 2024\",\r\n                \"subject\": \"Microsoft Research\",\r\n                \"predicate\": \"introduced\",\r\n                \"object\": \"GraphRAG\",\r\n                \"type\": \"TEMPORAL\",\r\n                \"confidence\": 0.95,\r\n            },\r\n            {\r\n                \"text\": \"GraphRAG uses the Leiden algorithm for community detection\",\r\n                \"subject\": \"GraphRAG\",\r\n                \"predicate\": \"uses\",\r\n                \"object\": \"Leiden algorithm\",\r\n                \"type\": \"FACT\",\r\n                \"confidence\": 0.9,\r\n            },\r\n            {\r\n                \"text\": \"According to Microsoft, GraphRAG achieves state-of-the-art results\",\r\n                \"subject\": \"GraphRAG\",\r\n                \"predicate\": \"achieves\",\r\n                \"object\": \"state-of-the-art results\",\r\n                \"type\": \"ATTRIBUTION\",\r\n                \"confidence\": 0.7,\r\n            },\r\n        ]\r\n\r\nclass CovariateStore:\r\n    \"\"\"\r\n    Stores and queries extracted claims (covariates).\r\n    Supports temporal reasoning and source attribution queries.\r\n    \"\"\"\r\n\r\n    def __init__(self):\r\n        self.claims: List[CovariateClaim] = []\r\n        self._subject_index: Dict[str, List[int]] = {}\r\n        self._type_index: Dict[str, List[int]] = {}\r\n\r\n    def add_claim(self, claim: CovariateClaim):\r\n        \"\"\"Add a claim and update indexes.\"\"\"\r\n        idx = len(self.claims)\r\n        self.claims.append(claim)\r\n\r\n        # Update subject index\r\n        subject_key = claim.subject.lower()\r\n        if subject_key not in self._subject_index:\r\n            self._subject_index[subject_key] = []\r\n        self._subject_index[subject_key].append(idx)\r\n\r\n        # Update type index\r\n        type_key = claim.claim_type\r\n        if type_key not in self._type_index:\r\n            self._type_index[type_key] = []\r\n        self._type_index[type_key].append(idx)\r\n\r\n    def add_claims(self, claims: List[CovariateClaim]):\r\n        \"\"\"Add multiple claims at once.\"\"\"\r\n        for claim in claims:\r\n            self.add_claim(claim)\r\n\r\n    def get_claims_about(self, subject: str) -> List[CovariateClaim]:\r\n        \"\"\"Retrieve all claims about a specific subject.\"\"\"\r\n        indices = self._subject_index.get(subject.lower(), [])\r\n        return [self.claims[i] for i in indices]\r\n\r\n    def get_claims_by_type(self, claim_type: str) -> List[CovariateClaim]:\r\n        \"\"\"Retrieve all claims of a specific type.\"\"\"\r\n        indices = self._type_index.get(claim_type, [])\r\n        return [self.claims[i] for i in indices]\r\n\r\n    def temporal_query(self, subject: str,\r\n                       before_year: Optional[int] = None,\r\n                       after_year: Optional[int] = None) -> List[CovariateClaim]:\r\n        \"\"\"\r\n        Perform a temporal query: find claims about a subject within\r\n        a specific time range.\r\n        \"\"\"\r\n        claims = self.get_claims_about(subject)\r\n        filtered = []\r\n\r\n        for claim in claims:\r\n            if not claim.timestamp:\r\n                continue\r\n\r\n            try:\r\n                claim_year = int(claim.timestamp[:4])\r\n            except (ValueError, TypeError):\r\n                continue\r\n\r\n            if before_year and claim_year >= before_year:\r\n                continue\r\n            if after_year and claim_year <= after_year:\r\n                continue\r\n\r\n            filtered.append(claim)\r\n\r\n        return filtered\r\n\r\n    def get_temporal_evolution(self, subject: str,\r\n                               predicate: Optional[str] = None) -> List[Dict]:\r\n        \"\"\"\r\n        Track how claims about a subject change over time.\r\n        Returns a timeline of claim changes.\r\n        \"\"\"\r\n        claims = self.get_claims_about(subject)\r\n\r\n        if predicate:\r\n            claims = [c for c in claims if c.predicate.lower() == predicate.lower()]\r\n\r\n        # Sort by timestamp if available\r\n        dated_claims = [c for c in claims if c.timestamp]\r\n        undated = [c for c in claims if not c.timestamp]\r\n\r\n        dated_claims.sort(key=lambda c: c.timestamp)  # type: ignore\r\n\r\n        timeline = []\r\n        for claim in dated_claims:\r\n            timeline.append({\r\n                \"timestamp\": claim.timestamp,\r\n                \"claim\": claim.text,\r\n                \"object\": claim.obj,\r\n                \"confidence\": claim.confidence,\r\n                \"source\": claim.source_document,\r\n            })\r\n\r\n        return timeline\r\n\r\n    def get_attributed_claims(self) -> List[CovariateClaim]:\r\n        \"\"\"Get all claims that include source attribution.\"\"\"\r\n        return [c for c in self.claims if c.is_attributed]\r\n\r\n    def deduplicate(self):\r\n        \"\"\"Remove duplicate claims (same subject, predicate, object).\"\"\"\r\n        seen: Set[Tuple[str, str, str]] = set()\r\n        unique = []\r\n\r\n        for claim in self.claims:\r\n            key = (claim.subject.lower(), claim.predicate.lower(),\r\n                   claim.obj.lower())\r\n            if key not in seen:\r\n                seen.add(key)\r\n                unique.append(claim)\r\n            else:\r\n                # Keep the one with higher confidence\r\n                for i, existing in enumerate(unique):\r\n                    existing_key = (\r\n                        existing.subject.lower(),\r\n                        existing.predicate.lower(),\r\n                        existing.obj.lower(),\r\n                    )\r\n                    if existing_key == key and claim.confidence > existing.confidence:\r\n                        unique[i] = claim\r\n                        break\r\n\r\n        self.claims = unique\r\n\r\n    def stats(self) -> Dict:\r\n        \"\"\"Return statistics about the claim store.\"\"\"\r\n        return {\r\n            \"total_claims\": len(self.claims),\r\n            \"by_type\": {\r\n                t: len(self.get_claims_by_type(t))\r\n                for t in set(c.claim_type for c in self.claims)\r\n            },\r\n            \"unique_subjects\": len(self._subject_index),\r\n            \"attributed_claims\": len(self.get_attributed_claims()),\r\n            \"claims_with_temporal\": sum(1 for c in self.claims if c.timestamp),\r\n        }\r\n\r\n# Demonstration\r\ndef demo_covariate_refinement():\r\n    \"\"\"Demonstrate covariate extraction and temporal reasoning.\"\"\"\r\n    print(\"=== Covariate Refinement Demonstration ===\\n\")\r\n\r\n    # Sample chunks\r\n    chunks = [\r\n        TextChunk(\r\n            chunk_id=\"chunk_001\",\r\n            text=(\"Microsoft Research introduced GraphRAG in 2024. \"\r\n                  \"According to the paper, GraphRAG uses the Leiden algorithm \"\r\n                  \"for community detection. The system achieves state-of-the-art \"\r\n                  \"results on complex Q&A tasks.\"),\r\n            source_doc=\"graphrag_paper.md\",\r\n            start_char=0,\r\n            end_char=200,\r\n        ),\r\n        TextChunk(\r\n            chunk_id=\"chunk_002\",\r\n            text=(\"In 2023, earlier RAG systems relied on flat vector search. \"\r\n                  \"GraphRAG improved upon this by adding entity-centric \"\r\n                  \"organization. Microsoft reported a 30% improvement in \"\r\n                  \"answer completeness.\"),\r\n            source_doc=\"rag_comparison.md\",\r\n            start_char=0,\r\n            end_char=180,\r\n        ),\r\n    ]\r\n\r\n    # Extract claims\r\n    extractor = CovariateExtractor()\r\n    store = CovariateStore()\r\n\r\n    for chunk in chunks:\r\n        claims = extractor.extract_claims(chunk)\r\n        store.add_claims(claims)\r\n        for claim in claims:\r\n            print(f\"Extracted Claim: {claim.text}\")\r\n            print(f\"  Type: {claim.claim_type}, Confidence: {claim.confidence}\")\r\n            if claim.is_attributed:\r\n                print(f\"  Attributed to: {claim.attributed_source}\")\r\n            if claim.temporal_expression:\r\n                print(f\"  Temporal: {claim.temporal_expression}\")\r\n            print()\r\n\r\n    # Store stats\r\n    print(f\"\\n=== Covariate Store Statistics ===\")\r\n    stats = store.stats()\r\n    for key, value in stats.items():\r\n        print(f\"  {key}: {value}\")\r\n\r\n    # Temporal evolution\r\n    print(f\"\\n=== Temporal Evolution of 'GraphRAG' Claims ===\")\r\n    evolution = store.get_temporal_evolution(\"GraphRAG\")\r\n    for entry in evolution:\r\n        print(f\"  [{entry['timestamp']}] {entry['claim']}\")\r\n\r\n    # Attributed claims\r\n    attributed = store.get_attributed_claims()\r\n    print(f\"\\n=== Attributed Claims ===\")\r\n    for claim in attributed:\r\n        print(f\"  \\\"{claim.text}\\\" — Source: {claim.attributed_source}\")\r\n\r\n    return store\r\n\r\nif __name__ == \"__main__\":\r\n    demo_covariate_refinement()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "147-end-to-end-graphrag-pipeline",
      children: "14.7 End-to-End GraphRAG Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The complete GraphRAG pipeline integrates all components: indexing, community detection, summarization, and search."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nGraphRAG: End-to-End Pipeline\r\nIntegrates indexing, community detection, summarization, local/global search.\r\n\"\"\"\r\n\r\nclass GraphRAGPipeline:\r\n    \"\"\"\r\n    Complete Microsoft GraphRAG pipeline.\r\n    Orchestrates indexing, community detection, summarization, and search.\r\n    \"\"\"\r\n\r\n    def __init__(\r\n        self,\r\n        chunk_size: int = 1200,\r\n        chunk_overlap: int = 200,\r\n        leiden_resolution: float = 1.0,\r\n    ):\r\n        # Indexing components\r\n        self.chunker = ChunkingStrategy(chunk_size, chunk_overlap)\r\n        self.extractor = EntityExtractor()\r\n        self.kg_builder = KnowledgeGraphBuilder()\r\n\r\n        # Community detection\r\n        self.community_detector = LeidenCommunityDetector(\r\n            resolution=leiden_resolution\r\n        )\r\n\r\n        # Summarization and search\r\n        self.summarizer = CommunitySummarizer()\r\n        self.local_searcher: Optional[LocalSearcher] = None\r\n        self.global_searcher: Optional[GlobalSearcher] = None\r\n\r\n        # Covariate refinement\r\n        self.covariate_extractor = CovariateExtractor()\r\n        self.covariate_store = CovariateStore()\r\n\r\n        # Pipeline state\r\n        self.indexed = False\r\n\r\n    def index_documents(self, documents: List[Dict[str, str]]):\r\n        \"\"\"\r\n        Full indexing pipeline: chunk → extract → build graph → detect\r\n        communities → summarize → extract covariates.\r\n        \"\"\"\r\n        print(\"=\" * 60)\r\n        print(\"Phase 1: Chunking Documents\")\r\n        print(\"=\" * 60)\r\n        all_chunks = []\r\n        for doc in documents:\r\n            chunks = self.chunker.chunk_document(doc[\"text\"], doc[\"source\"])\r\n            all_chunks.extend(chunks)\r\n        print(f\"  Created {len(all_chunks)} chunks from \"\r\n              f\"{len(documents)} documents\\n\")\r\n\r\n        print(\"=\" * 60)\r\n        print(\"Phase 2: Entity & Relationship Extraction\")\r\n        print(\"=\" * 60)\r\n        self.kg_builder.build_from_chunks(all_chunks, self.extractor)\r\n        graph = self.kg_builder.get_graph()\r\n        print(f\"  Graph: {graph.number_of_nodes()} entities, \"\r\n              f\"{graph.number_of_edges()} relationships\\n\")\r\n\r\n        print(\"=\" * 60)\r\n        print(\"Phase 3: Community Detection (Leiden Algorithm)\")\r\n        print(\"=\" * 60)\r\n        communities = self.community_detector.detect_communities(graph)\r\n        print(f\"  Found {len(communities)} communities\\n\")\r\n\r\n        for cid, members in communities.items():\r\n            print(f\"  Community {cid}: {len(members)} members\")\r\n            for m in members[:3]:\r\n                print(f\"    - {m}\")\r\n            if len(members) > 3:\r\n                print(f\"    ... and {len(members) - 3} more\")\r\n        print()\r\n\r\n        print(\"=\" * 60)\r\n        print(\"Phase 4: Community Summarization\")\r\n        print(\"=\" * 60)\r\n        all_relationships = [\r\n            {\"source\": u, \"target\": v,\r\n             \"relation\": data.get(\"relation\", \"related\"),\r\n             \"description\": data.get(\"description\", \"\")}\r\n            for u, v, data in graph.edges(data=True)\r\n        ]\r\n        summaries = self.summarizer.summarize_all_communities(\r\n            communities, all_relationships, graph\r\n        )\r\n        print(f\"  Generated {len(summaries)} community summaries\\n\")\r\n\r\n        print(\"=\" * 60)\r\n        print(\"Phase 5: Covariate Refinement\")\r\n        print(\"=\" * 60)\r\n        for chunk in all_chunks[:5]:\r\n            claims = self.covariate_extractor.extract_claims(chunk)\r\n            self.covariate_store.add_claims(claims)\r\n        print(f\"  Extracted {len(self.covariate_store.claims)} claims\\n\")\r\n        print(self.covariate_store.stats())\r\n\r\n        # Initialize searchers\r\n        self.local_searcher = LocalSearcher(\r\n            graph=graph,\r\n            communities=communities,\r\n            community_summaries=summaries,\r\n            entity_extractor=self.extractor,\r\n        )\r\n        self.global_searcher = GlobalSearcher(\r\n            community_summaries=summaries,\r\n        )\r\n\r\n        self.indexed = True\r\n        print(\"\\n✓ Indexing complete. Ready for search.\\n\")\r\n\r\n    def local_search(self, query: str) -> LocalSearchResult:\r\n        \"\"\"Execute a local search query.\"\"\"\r\n        if not self.indexed:\r\n            raise RuntimeError(\"Pipeline not indexed. Call index_documents first.\")\r\n        return self.local_searcher.search(query)\r\n\r\n    def global_search(self, query: str) -> GlobalSearchResult:\r\n        \"\"\"Execute a global search query.\"\"\"\r\n        if not self.indexed:\r\n            raise RuntimeError(\"Pipeline not indexed. Call index_documents first.\")\r\n        return self.global_searcher.search(query)\r\n\r\n    def temporal_query(self, subject: str, **kwargs) -> List[CovariateClaim]:\r\n        \"\"\"Query covariate store with temporal filters.\"\"\"\r\n        return self.covariate_store.temporal_query(subject, **kwargs)\r\n\r\n# Full demonstration\r\ndef demo_full_pipeline():\r\n    \"\"\"Complete end-to-end GraphRAG demonstration.\"\"\"\r\n    pipeline = GraphRAGPipeline(chunk_size=800, chunk_overlap=100)\r\n\r\n    documents = [\r\n        {\r\n            \"source\": \"graphrag_intro.md\",\r\n            \"text\": (\r\n                \"Microsoft Research introduced GraphRAG in 2024. \"\r\n                \"GraphRAG is a graph-based retrieval-augmented generation system. \"\r\n                \"It transforms unstructured text into knowledge graphs. \"\r\n                \"The system uses the Leiden algorithm for community detection. \"\r\n                \"Communities are summarized using GPT-4. \"\r\n                \"Local search answers entity-specific questions. \"\r\n                \"Global search answers thematic questions using map-reduce. \"\r\n                \"Covariate refinement extracts claims with source attribution.\"\r\n            ),\r\n        },\r\n        {\r\n            \"source\": \"rag_comparison.md\",\r\n            \"text\": (\r\n                \"Standard RAG uses vector similarity search on flat chunks. \"\r\n                \"GraphRAG extends this with entity-centric organization. \"\r\n                \"The knowledge graph captures entity relationships. \"\r\n                \"Community detection groups related entities together. \"\r\n                \"Each community gets a comprehensive summary. \"\r\n                \"This enables both local and global search capabilities. \"\r\n                \"Microsoft reported significant improvements on complex queries.\"\r\n            ),\r\n        },\r\n    ]\r\n\r\n    # Index documents\r\n    pipeline.index_documents(documents)\r\n\r\n    # Test local search\r\n    print(\"\\n\" + \"=\" * 60)\r\n    print(\"TESTING: Local Search\")\r\n    print(\"=\" * 60)\r\n    result = pipeline.local_search(\"How does GraphRAG use community detection?\")\r\n    print(f\"Answer: {result.answer[:200]}...\")\r\n    print(f\"Confidence: {result.confidence}\")\r\n\r\n    # Test global search\r\n    print(\"\\n\" + \"=\" * 60)\r\n    print(\"TESTING: Global Search\")\r\n    print(\"=\" * 60)\r\n    result = pipeline.global_search(\r\n        \"What are the key innovations of GraphRAG compared to standard RAG?\"\r\n    )\r\n    print(f\"Themes: {result.themes_identified}\")\r\n    print(f\"Answer: {result.answer[:300]}...\")\r\n\r\n    return pipeline\r\n\r\nif __name__ == \"__main__\":\r\n    pipeline = demo_full_pipeline()\r\n    print(\"\\n✓ GraphRAG Pipeline demonstrated successfully\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Microsoft GraphRAG transforms RAG from flat vector search to structured knowledge graph traversal. The system introduces five key innovations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Knowledge Graph Construction"
        }), ": Entities and relationships are extracted from text chunks to build a structured graph."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Leiden Community Detection"
        }), ": The Leiden algorithm partitions the entity graph into hierarchical communities at multiple resolutions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Community Summarization"
        }), ": Each community receives an LLM-generated summary, enabling both local and global search."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Local Search"
        }), ": Entity-grounded retrieval uses community context for precise, entity-specific answers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Global Search"
        }), ": Map-reduce over all community summaries answers abstract, thematic questions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Covariate Refinement"
        }), ": Claims are extracted with source attribution and temporal metadata for reasoning over time."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GraphRAG excels at questions requiring synthesis across documents, entity relationship understanding, and temporal reasoning — tasks where standard RAG struggles."
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
            children: "Use Local Search for entity Q&A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ground queries to specific entities for precise answers with relationship context"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use Global Search for themes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Map-reduce over community summaries for abstract, comparative questions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tune Leiden resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher gamma (1.5+) for fine-grained communities, lower (0.5) for coarse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-compute community summaries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Summarization is the most expensive step — do it once offline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Covariates enable temporal reasoning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract claims with timestamps to track how facts change"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GraphRAG > standard RAG for complex Q&A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Significantly better on questions requiring multi-document synthesis"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "graphrag-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What is Microsoft GraphRAG and how does it differ from standard RAG?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Microsoft GraphRAG is a graph-based retrieval-augmented generation system developed by Microsoft Research. Unlike standard RAG which retrieves flat chunks using vector similarity search, GraphRAG builds a knowledge graph from source documents by extracting entities and relationships. It then applies the Leiden algorithm for community detection and generates summaries for each community. This enables two search modes: Local Search (entity-grounded, precise answers) and Global Search (map-reduce over communities for thematic questions). GraphRAG significantly outperforms standard RAG on complex, multi-faceted questions that require synthesizing information across documents."
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
      "data-qid": "graphrag-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How does the Leiden algorithm work in GraphRAG?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The Leiden algorithm is the community detection method used in GraphRAG. It improves on the Louvain algorithm by guaranteeing that all communities are well-connected internally. The algorithm has three iterative phases: (1) Local moving — nodes are moved between communities to optimize modularity, (2) Refinement — the partition is refined to ensure connectivity (splitting disconnected components), (3) Aggregation — communities become super-nodes in a coarse-grained graph for the next level. The resolution parameter (gamma) controls granularity: higher values produce more, smaller communities; lower values produce fewer, larger communities. This hierarchical structure is key to GraphRAG's multi-level summarization capability."
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
      "data-qid": "graphrag-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: Explain the indexing pipeline in Microsoft GraphRAG.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The indexing pipeline consists of five stages: (1) Text Chunking — documents are split into overlapping chunks, with variable sizes to respect entity boundaries, (2) Entity & Relationship Extraction — an LLM (typically GPT-4) extracts named entities and their relationships from each chunk, (3) Knowledge Graph Construction — extracted entities become nodes and relationships become edges in a NetworkX graph, (4) Leiden Community Detection — the graph is partitioned into hierarchical communities at multiple resolution levels, (5) Community Summarization — each community is summarized by an LLM, capturing key entities, relationships, and themes. covariate refinement extracts structured claims with source attribution and temporal metadata. The entire pipeline runs offline; once index is built, query-time search is fast."
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
      "data-qid": "graphrag-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How does Local Search work in GraphRAG?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Local Search answers entity-specific questions by grounding the query to knowledge graph entities. The process: (1) Entity Extraction from Query — potential entities are identified from the question text, (2) Entity Grounding — extracted entities are matched to nodes in the knowledge graph, (3) Community Retrieval — the communities containing those entities are identified, (4) Context Building — community summaries and entity-specific relationship data are assembled into a context window, (5) Answer Generation — an LLM generates an answer grounded in the retrieved context. Local Search excels at questions like \"What does GraphRAG use the Leiden algorithm for?\" because it retrieves the precise community context surrounding the entity \"Leiden Algorithm.\""
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
      "data-qid": "graphrag-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How does Global Search work in GraphRAG?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Global Search answers abstract, thematic questions using a map-reduce pattern over community summaries. The process: (1) Map Phase — each community is independently prompted to answer the query based on its summary; this runs in parallel using a thread pool for efficiency, (2) Intermediate Answers — each community produces a partial answer reflecting its local knowledge, (3) Reduce Phase — all intermediate answers are aggregated into a comprehensive final answer by a synthesis LLM call. The reduce step identifies common themes, resolves contradictions, and combines complementary insights. Global Search is ideal for questions like \"What are the main research themes in GraphRAG?\" where information is distributed across multiple communities. Community relevance scoring filters out irrelevant communities before the map phase."
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
      "data-qid": "graphrag-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: What is covariate refinement and why is it important?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Covariate refinement extracts structured claims (covariates) from text chunks with three key enrichments: (1) Source Attribution — identifying who said what (e.g., \"According to Microsoft...\"), (2) Temporal Reasoning — extracting dates and time expressions to track when claims were made, (3) Claim Typing — classifying claims as FACT, ATTRIBUTION, COMPARISON, TEMPORAL, or CAUSAL. This is important because it enables temporal queries (\"What did Microsoft say about GraphRAG in 2024?\"), source-grounded answers, and tracking how facts evolve over time. Covariates turn the knowledge graph from a static snapshot into a dynamic, auditable information system. In production, covariate stores can contain millions of claims with fine-grained provenance."
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
      "data-qid": "graphrag-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: How do you choose between Local Search and Global Search for a given query?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Local Search is best when: (1) the query mentions specific entity names, (2) the answer requires precise relationship information, (3) the question is about a narrow topic. Global Search is best when: (1) the query is abstract or thematic, (2) the answer requires synthesis across multiple topics, (3) the question is comparative (\"compare X and Y\"), (4) no specific entities are mentioned. In production, a query router can automatically classify queries and route them to the appropriate search method. Some queries benefit from both: for \"How did GraphRAG change RAG systems?\", retrieve community context about GraphRAG (local) plus thematic trends across communities (global)."
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
      "data-qid": "graphrag-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: What is the resolution parameter in the Leiden algorithm and how do you tune it?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-content",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The resolution parameter (gamma) controls the granularity of community detection. Higher values (e.g., 1.5–2.0) produce more, smaller communities — useful for fine-grained entity grouping. Lower values (e.g., 0.5–0.8) produce fewer, larger communities — useful for broad thematic grouping. Tuning involves: (1) Setting gamma too high creates too many communities with only 1-2 entities each, making summarization noisy, (2) Setting gamma too low merges unrelated entities, diluting community focus, (3) A common approach is to run multiple resolution levels (typically 3) creating a hierarchy: fine (gamma=1.5), medium (gamma=1.0), coarse (gamma=0.5). This hierarchical structure allows GraphRAG to answer both specific and broad queries effectively."
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
      "data-qid": "graphrag-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: How does GraphRAG handle entity disambiguation and coreference resolution?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "GraphRAG addresses entity disambiguation through: (1) Canonical Name Resolution — entities with different surface forms are normalized to a canonical name (e.g., \"MS Research\", \"Microsoft Research\" → \"Microsoft Research\"), (2) Contextual Entity Extraction — the LLM considers surrounding context when extracting entities, reducing misidentification, (3) Entity Merging in the KG Builder — when the same entity is extracted from multiple chunks, source references are merged into a single node, (4) Relationship Context — edges to other entities provide additional disambiguation signal (e.g., \"Apple\" connected to \"iPhone\" vs \"Apple\" connected to \"orchards\"). GraphRAG's graph structure inherently provides disambiguation through the entity's neighborhood — a key advantage over flat vector search where \"Apple\" as fruit vs company is ambiguous."
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
      "data-qid": "graphrag-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: What are the limitations and costs of GraphRAG compared to standard RAG?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "GraphRAG has several limitations: (1) Indexing Cost — building the knowledge graph and community summaries requires many LLM calls (entity extraction per chunk, summarization per community), making indexing 10-100x more expensive than standard embedding-based indexing, (2) Latency — community detection on large graphs (millions of nodes) is computationally intensive, (3) Maintenance — when documents are updated, the graph needs partial or full re-indexing, unlike vector databases where only changed chunks need re-embedding, (4) Entity Extraction Quality — depends heavily on LLM quality; poor extraction leads to noisy graphs, (5) Complexity — the system has many components (chunking, extraction, graph, Leiden, summarization, search) each requiring tuning. However, for complex Q&A requiring multi-document synthesis, GraphRAG's answer quality is substantially better than standard RAG, justifying the additional cost."
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
      "data-qid": "graphrag-quiz1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " What algorithm does Microsoft GraphRAG use for community detection?"]
      }), "\nA. K-Means Clustering\nB. Louvain Algorithm\nC. Leiden Algorithm\nD. DBSCAN\nAnswer: C\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "graphrag-quiz2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " In GraphRAG, what is the purpose of community summarization?"]
      }), "\nA. To compress text for storage efficiency\nB. To generate pre-computed summaries for each entity cluster enabling fast search\nC. To replace the vector database entirely\nD. To reduce the number of LLM calls during query time\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "graphrag-quiz3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " Which search mode in GraphRAG uses a map-reduce pattern over communities?"]
      }), "\nA. Local Search\nB. Vector Search\nC. Global Search\nD. Hybrid Search\nAnswer: C\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "graphrag-quiz4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " What does the resolution parameter (gamma) control in the Leiden algorithm?"]
      }), "\nA. The number of nearest neighbors to consider\nB. The granularity of communities (higher = more, smaller communities)\nC. The temperature of the LLM summarization\nD. The maximum depth of the knowledge graph\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "graphrag-quiz5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " What distinguishes a covariate claim from a regular entity extraction?"]
      }), "\nA. Covariates are always numerical\nB. Covariates include source attribution, temporal metadata, and claim typing\nC. Covariates are only extracted from images\nD. Covariates replace the need for entity extraction\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a Leiden community detector that runs on a knowledge graph of 50+ entities extracted from AI research papers. Compare community quality at resolution parameters 0.5, 1.0, and 1.5 using modularity scores."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build a local search system for a knowledge graph of company acquisitions. Given a query like \"What companies did Google acquire in 2024?\", ground entities to the graph, retrieve community context, and generate a grounded answer."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a global search system that answers \"What are the major trends in AI in 2024?\" by running map-reduce over community summaries from a graph of 5+ AI news articles. Show intermediate and reduced answers."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a covariate refinement pipeline that extracts claims from a set of financial news articles. Include temporal tagging so that queries like \"What changed in Q4 2024?\" can be answered by comparing claims across time periods."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build an end-to-end GraphRAG indexing pipeline that processes 3 documents on vector databases, runs Leiden community detection, generates community summaries, and demonstrates both local and global search queries."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Treating GraphRAG as a drop-in replacement for standard RAG without understanding its indexing cost"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Using too many communities (high resolution) leading to noisy, fragmented summaries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forgetting to deduplicate entities during knowledge graph construction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not handling entity disambiguation — \"Apple\" the fruit vs \"Apple\" the company"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overlooking temporal metadata in covariate extraction — losing the ability to track claim evolution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Running community detection on every query instead of pre-computing once during indexing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Core principle: GraphRAG builds structured knowledge graphs instead of flat vector indexes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Algorithm: Leiden improves on Louvain by guaranteeing well-connected communities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two search modes: Local (entity-grounded) and Global (map-reduce over communities)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Covariates add claim-level metadata: source attribution, temporality, claim type"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resolution parameter (gamma) controls community granularity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Indexing is expensive (many LLM calls); search is fast (uses pre-computed summaries)"
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
            children: "How does Microsoft GraphRAG behave differently at scale — memory, throughput, or precision-wise?"
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
        children: "Name the technique explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Microsoft GraphRAG\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Microsoft GraphRAG to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Microsoft GraphRAG (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Microsoft GraphRAG and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Microsoft GraphRAG-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic problem in this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Microsoft GraphRAG in production today?"
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
        }), " Microsoft GraphRAG builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Microsoft GraphRAG before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Microsoft GraphRAG is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Microsoft GraphRAG in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "The chapter that covers Microsoft GraphRAG is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 14 Graphrag is ___. — Answer: O(V+E) for BFS/DFS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 14 Graphrag is ___. — Answer: disconnected graph, cycles, negative weights"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Microsoft GraphRAG issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Microsoft GraphRAG in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Microsoft GraphRAG that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
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
          }), " A new hire asks you to explain Microsoft GraphRAG in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Microsoft GraphRAG and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
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
            children: "Complete Medium exercises, explain Microsoft GraphRAG to someone else"
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
        children: "Always write a one-line example of Microsoft GraphRAG from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Microsoft GraphRAG when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Microsoft GraphRAG twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Microsoft GraphRAG snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Microsoft GraphRAG listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Microsoft GraphRAG to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Microsoft GraphRAG by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Microsoft GraphRAG to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
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
        children: "'Advanced RAG Techniques' by Andrei Lopatenko (Towards Data Science) GraphRAG"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 12 — builds the foundation for 14 Graphrag"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 14 Graphrag with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 14 Graphrag fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 14 Graphrag"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 14 Graphrag"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 14 Graphrag?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 14 Graphrag?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 14 Graphrag asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 14 Graphrag?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Microsoft GraphRAG is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Microsoft GraphRAG."
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
        children: "Microsoft GraphRAG emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Microsoft GraphRAG today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Microsoft GraphRAG — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Microsoft GraphRAG changes quickly; focus on fundamentals that remain stable."
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
            children: "14 Graphrag is like a GPS navigation system"
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
          }), " — this chapter contributes the Microsoft GraphRAG skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-14graphrag-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Microsoft GraphRAG in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "RAG (Retrieval-Augmented Generation) grounds LLM responses in external documents retrieved at query time, reducing hallucination by 40-80% vs zero-shot generation."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-14graphrag-flash2",
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
      "data-qid": "12ragvectordatabases-14graphrag-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Microsoft GraphRAG approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Retrieval: O(log n) with ANN index (HNSW/IVF). Embedding: O(n*d) where d=embedding dim. Generation: O(context_len^2) attention."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-14graphrag-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Microsoft GraphRAG NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "RAG is NOT the right choice when: (1) the knowledge base is tiny (<100 docs) and fits in context, (2) you need the model to learn new reasoning patterns (use fine-tuning), (3) sub-100ms latency is required."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-14graphrag-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Microsoft GraphRAG applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Microsoft GraphRAG (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Microsoft GraphRAG (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Microsoft GraphRAG-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Microsoft GraphRAG in production at scale"
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
        }), " — Facebook's fast similarity search library GraphRAG"]
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
        }), ": Add structured logging at each stage of the 14 Graphrag pipeline to identify exactly where the failure occurs."]
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
        children: "Write a minimal working example of Microsoft GraphRAG."
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
        children: "Tell me about a time you debugged a Microsoft GraphRAG problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Microsoft GraphRAG is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_14_graphrag(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 14 Graphrag.\r\n\r\n    Key concepts: vertices, edges, BFS, DFS, shortest path\r\n    Complexity: O(V+E) for BFS/DFS\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 14 Graphrag here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain Microsoft GraphRAG without notes"
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
        href: "/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/15-context-compression",
        children: "Context Compression for RAG"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Microsoft GraphRAG, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Microsoft GraphRAG depends on input size and distribution — always benchmark for your own data."
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