"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[15780],{

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
const site_docs_courses_ai_engineering_placement_12_rag_vector_databases_14_graphrag_md_d08_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/rag-vector-databases/14-graphrag","title":"Microsoft GraphRAG","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/12-rag-vector-databases/14-graphrag.md","sourceDirName":"courses/ai-engineering-placement/12-rag-vector-databases","slug":"/ai-engineering-placement/12-rag-vector-databases/14-graphrag","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/14-graphrag","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":159,"frontMatter":{"id":"14-graphrag","slug":"/ai-engineering-placement/12-rag-vector-databases/14-graphrag","title":"Microsoft GraphRAG","sidebar_label":"Microsoft GraphRAG","sidebar_position":159},"sidebar":"coursesSidebar","previous":{"title":"Knowledge Graph RAG","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/13-knowledge-graph-rag"},"next":{"title":"Context Compression for RAG","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/15-context-compression"}}');
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
	sidebar_position: 159
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
  "value": "Key Terminology",
  "id": "key-terminology",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Terms"
      }), ": Core vocabulary and concepts for Microsoft GraphRAG."]
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
        children: "flowchart TB\n    subgraph \"Offline Indexing Pipeline\"\n        A[Raw Documents] --> B[Text Chunking]\n        B --> C[Entity & Relationship Extraction]\n        C --> D[Knowledge Graph Construction]\n        D --> E[Leiden Community Detection]\n        E --> F[Community Summarization]\n        F --> G[(Community Summaries)]\n    end\n\n    subgraph \"Online Query\"\n        H[User Query] --> I{Query Type}\n        I -->|Entity-Focused| J[Local Search]\n        I -->|Abstract/Thematic| K[Global Search]\n        J --> L[Entity Grounding]\n        J --> M[Community Context Retrieval]\n        K --> N[Map-Reduce over Communities]\n        L --> O[LLM Answer Generation]\n        M --> O\n        N --> O\n    end\n\n    style A fill:#4a90d9,color:#fff\n    style G fill:#e8a838,color:#fff\n    style O fill:#50b86c,color:#fff\n"
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
        children: "flowchart LR\n    A[Initial Partition] --> B[Local Moving Phase]\n    B --> C{Modularity Improved?}\n    C -->|Yes| D[Refinement Phase]\n    C -->|No| E[Converged]\n    D --> F[Aggregation Phase]\n    F --> B\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1422-python-implementation-of-leiden",
      children: "14.2.2 Python Implementation of Leiden"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nGraphRAG: Leiden Algorithm for Community Detection\nSimulates the core community detection used in Microsoft GraphRAG.\n\"\"\"\n\nimport networkx as nx\nimport numpy as np\nfrom collections import defaultdict\nfrom typing import List, Dict, Tuple, Set, Optional\n\nclass LeidenCommunityDetector:\n    \"\"\"\n    Implementation of the Leiden algorithm for hierarchical community detection.\n    In production GraphRAG, this runs on graphs with millions of entity nodes.\n    \"\"\"\n\n    def __init__(self, resolution: float = 1.0, seed: int = 42):\n        \"\"\"\n        Args:\n            resolution: Resolution parameter (gamma). Higher values produce more communities.\n                       Range: 0.5 (coarse) to 2.0 (fine). Default 1.0.\n            seed: Random seed for reproducibility.\n        \"\"\"\n        self.resolution = resolution\n        self.seed = seed\n        self._rng = np.random.default_rng(seed)\n\n    def detect_communities(self, graph: nx.Graph) -> Dict[int, List[str]]:\n        \"\"\"\n        Run Leiden community detection on a NetworkX graph.\n        Returns a dict mapping community_id -> list of node names.\n\n        Args:\n            graph: A NetworkX graph where nodes are entity names and edges have a 'weight' attribute.\n\n        Returns:\n            communities: {community_id: [node1, node2, ...]}\n        \"\"\"\n        # Initialize each node in its own community\n        node_to_community = {node: i for i, node in enumerate(graph.nodes())}\n        community_to_nodes = defaultdict(list)\n\n        for node, comm_id in node_to_community.items():\n            community_to_nodes[comm_id].append(node)\n\n        converged = False\n        iteration = 0\n        max_iterations = 50\n\n        while not converged and iteration < max_iterations:\n            iteration += 1\n            converged = True\n\n            # Phase 1: Local Moving\n            for node in graph.nodes():\n                current_comm = node_to_community[node]\n                best_comm = self._find_best_community(graph, node, current_comm,\n                                                       node_to_community)\n                if best_comm != current_comm:\n                    converged = False\n                    self._move_node(graph, node, node_to_community,\n                                    community_to_nodes, current_comm, best_comm)\n\n            if converged:\n                break\n\n            # Phase 2: Refinement\n            community_to_nodes = self._refine_partition(graph, node_to_community)\n\n            # Phase 3: Aggregation (build coarse-grained graph for next level)\n            if len(community_to_nodes) < len(graph.nodes()) // 2:\n                # Build aggregated graph\n                graph = self._aggregate_graph(graph, community_to_nodes)\n                node_to_community = {node: i for i, node in enumerate(graph.nodes())}\n                community_to_nodes = defaultdict(list)\n                for node, comm_id in node_to_community.items():\n                    community_to_nodes[comm_id].append(node)\n\n        # Build final output mapping\n        final_communities = defaultdict(list)\n        for node, comm_id in node_to_community.items():\n            final_communities[comm_id].append(node)\n\n        return dict(final_communities)\n\n    def _find_best_community(self, graph: nx.Graph, node: str,\n                              current_comm: int,\n                              node_to_community: Dict[str, int]) -> int:\n        \"\"\"\n        Find the community that maximizes modularity gain for the given node.\n        \"\"\"\n        neighbor_communities = defaultdict(float)\n        total_weight = sum(\n            graph.edges[node][neighbor].get('weight', 1.0)\n            for neighbor in graph.neighbors(node)\n        )\n\n        for neighbor in graph.neighbors(node):\n            weight = graph.edges[node][neighbor].get('weight', 1.0)\n            neighbor_comm = node_to_community[neighbor]\n            neighbor_communities[neighbor_comm] += weight\n\n        best_comm = current_comm\n        best_delta = 0.0\n\n        for comm_id, weight_to_comm in neighbor_communities.items():\n            if comm_id == current_comm:\n                continue\n\n            # Delta modularity with resolution parameter\n            delta = weight_to_comm - self.resolution * total_weight * 0.5\n            if delta > best_delta:\n                best_delta = delta\n                best_comm = comm_id\n\n        return best_comm\n\n    def _move_node(self, graph: nx.Graph, node: str,\n                   node_to_community: Dict[str, int],\n                   community_to_nodes: Dict[int, List[str]],\n                   from_comm: int, to_comm: int):\n        \"\"\"Move a node from one community to another.\"\"\"\n        node_to_community[node] = to_comm\n        if node in community_to_nodes[from_comm]:\n            community_to_nodes[from_comm].remove(node)\n        community_to_nodes[to_comm].append(node)\n\n    def _refine_partition(self, graph: nx.Graph,\n                          node_to_community: Dict[str, int]\n                          ) -> Dict[int, List[str]]:\n        \"\"\"\n        Refinement phase: ensure all communities are well-connected.\n        Merges communities that are not internally connected.\n        \"\"\"\n        community_to_nodes = defaultdict(list)\n        for node, comm_id in node_to_community.items():\n            community_to_nodes[comm_id].append(node)\n\n        refined = defaultdict(list)\n\n        for comm_id, nodes in community_to_nodes.items():\n            subgraph = graph.subgraph(nodes)\n            components = list(nx.connected_components(subgraph))\n\n            if len(components) == 1:\n                refined[comm_id] = nodes\n            else:\n                # Split disconnected components into separate communities\n                for comp_nodes in components:\n                    new_id = self._rng.integers(0, 2**31)\n                    refined[new_id] = list(comp_nodes)\n\n        return refined\n\n    def _aggregate_graph(self, graph: nx.Graph,\n                         community_to_nodes: Dict[int, List[str]]) -> nx.Graph:\n        \"\"\"\n        Aggregation phase: build a coarse-grained graph where each community\n        becomes a super-node. Edge weights between super-nodes are the sum\n        of edges between the two communities.\n        \"\"\"\n        aggregated = nx.Graph()\n        community_list = list(community_to_nodes.keys())\n\n        for comm_id in community_list:\n            aggregated.add_node(f\"comm_{comm_id}\")\n\n        # Sum edges between communities\n        for u, v, data in graph.edges(data=True):\n            weight = data.get('weight', 1.0)\n            comm_u = self._find_community_for_node(u, community_to_nodes)\n            comm_v = self._find_community_for_node(v, community_to_nodes)\n\n            if comm_u is not None and comm_v is not None and comm_u != comm_v:\n                edge_key = (f\"comm_{comm_u}\", f\"comm_{comm_v}\")\n                if aggregated.has_edge(*edge_key):\n                    aggregated.edges[edge_key]['weight'] += weight\n                else:\n                    aggregated.add_edge(*edge_key, weight=weight)\n\n        return aggregated\n\n    def _find_community_for_node(\n        self, node_name: str, community_to_nodes: Dict[int, List[str]]\n    ) -> Optional[int]:\n        \"\"\"Find the community ID for a given node name.\"\"\"\n        for comm_id, nodes in community_to_nodes.items():\n            if node_name in nodes:\n                return comm_id\n        return None\n\n    def get_hierarchical_communities(\n        self, graph: nx.Graph, levels: int = 3\n    ) -> List[Dict[int, List[str]]]:\n        \"\"\"\n        Run hierarchical community detection at multiple resolution levels.\n        This mirrors GraphRAG's multi-level community structure.\n\n        Args:\n            graph: Input knowledge graph\n            levels: Number of resolution levels (default 3)\n\n        Returns:\n            List of community dictionaries, one per resolution level.\n            Level 0: fine-grained (small communities)\n            Level 1: medium-grained\n            Level 2: coarse-grained (large communities)\n        \"\"\"\n        hierarchies = []\n        resolutions = [1.5, 1.0, 0.5]  # Decreasing resolution = larger communities\n\n        for level in range(min(levels, len(resolutions))):\n            detector = LeidenCommunityDetector(\n                resolution=resolutions[level], seed=self.seed\n            )\n            communities = detector.detect_communities(graph)\n            hierarchies.append(communities)\n\n        return hierarchies\n\n# Demonstration\ndef demo_leiden():\n    \"\"\"Demonstrate Leiden community detection on a small knowledge graph.\"\"\"\n    # Build a sample knowledge graph of AI research entities\n    G = nx.Graph()\n\n    # Add nodes (entities)\n    entities = [\n        \"GraphRAG\", \"RAG\", \"Vector Database\", \"LLM\", \"Transformer\",\n        \"Attention\", \"Embedding\", \"Leiden Algorithm\", \"Community Detection\",\n        \"Knowledge Graph\", \"Entity Extraction\", \"Azure OpenAI\",\n        \"GPT-4\", \"Claude\", \"LangChain\", \"LlamaIndex\"\n    ]\n    G.add_nodes_from(entities)\n\n    # Add edges with weights (relationship strengths)\n    edges = [\n        (\"GraphRAG\", \"RAG\", 0.9),\n        (\"GraphRAG\", \"Knowledge Graph\", 0.85),\n        (\"GraphRAG\", \"Leiden Algorithm\", 0.8),\n        (\"GraphRAG\", \"Community Detection\", 0.75),\n        (\"RAG\", \"Vector Database\", 0.8),\n        (\"RAG\", \"LLM\", 0.7),\n        (\"RAG\", \"Embedding\", 0.65),\n        (\"LLM\", \"Transformer\", 0.9),\n        (\"LLM\", \"GPT-4\", 0.85),\n        (\"LLM\", \"Claude\", 0.7),\n        (\"LLM\", \"Azure OpenAI\", 0.6),\n        (\"Transformer\", \"Attention\", 0.95),\n        (\"Transformer\", \"Embedding\", 0.6),\n        (\"Leiden Algorithm\", \"Community Detection\", 0.9),\n        (\"Knowledge Graph\", \"Entity Extraction\", 0.8),\n        (\"Knowledge Graph\", \"Community Detection\", 0.65),\n        (\"LangChain\", \"RAG\", 0.75),\n        (\"LangChain\", \"LLM\", 0.7),\n        (\"LlamaIndex\", \"RAG\", 0.8),\n        (\"LlamaIndex\", \"Vector Database\", 0.7),\n        (\"GPT-4\", \"Azure OpenAI\", 0.9),\n        (\"Community Detection\", \"Entity Extraction\", 0.5),\n        (\"Embedding\", \"Vector Database\", 0.85),\n    ]\n\n    for u, v, w in edges:\n        G.add_edge(u, v, weight=w)\n\n    # Detect communities\n    detector = LeidenCommunityDetector(resolution=1.0)\n    communities = detector.detect_communities(G)\n\n    print(\"=== Leiden Community Detection Results ===\")\n    print(f\"Graph: {len(G.nodes())} entities, {len(G.edges())} relationships\")\n    print(f\"Resolution parameter: 1.0\")\n    print(f\"Number of communities found: {len(communities)}\")\n    print()\n\n    for comm_id, nodes in sorted(communities.items()):\n        print(f\"Community {comm_id} ({len(nodes)} entities):\")\n        for node in sorted(nodes):\n            print(f\"  - {node}\")\n        print()\n\n    # Hierarchical communities\n    print(\"=== Hierarchical Communities (Multi-Resolution) ===\")\n    hierarchies = detector.get_hierarchical_communities(G, levels=3)\n    for level, comms in enumerate(hierarchies):\n        print(f\"Level {level} (resolution={[1.5, 1.0, 0.5][level]}): \"\n              f\"{len(comms)} communities\")\n\n    return communities\n\nif __name__ == \"__main__\":\n    demo_leiden()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== Leiden Community Detection Results ===\nGraph: 16 entities, 23 relationships\nResolution parameter: 1.0\nNumber of communities found: 3\n\nCommunity 0 (6 entities):\n  - Attention, Embedding, LLM, Transformer, GPT-4, Claude\n\nCommunity 1 (7 entities):\n  - Community Detection, Entity Extraction, GraphRAG, Knowledge Graph,\n    Leiden Algorithm, RAG\n\nCommunity 2 (3 entities):\n  - Azure OpenAI, LangChain, LlamaIndex, Vector Database\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "143-indexing-pipeline",
      children: "14.3 Indexing Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The indexing pipeline converts raw documents into a structured knowledge graph with community summaries. This is the most expensive phase, running offline."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Raw Documents] --> B[Text Chunking]\n    B --> C[Entity Extraction]\n    C --> D[Relationship Extraction]\n    D --> E[Knowledge Graph]\n    E --> F[Covariate Refinement]\n    F --> G[Claim Extraction]\n    G --> H[Leiden Community Detection]\n    H --> I[Community Summarization]\n    I --> J[(Community Summary Store)]\n\n    style A fill:#4a90d9,color:#fff\n    style J fill:#e8a838,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1431-text-chunking-and-entity-extraction",
      children: "14.3.1 Text Chunking and Entity Extraction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nGraphRAG Indexing Pipeline — Chunking, Entity Extraction, Relationship Extraction\n\"\"\"\n\nimport hashlib\nfrom dataclasses import dataclass, field\nfrom typing import List, Dict, Tuple, Optional, Set\nimport json\nimport re\n\n@dataclass\nclass TextChunk:\n    \"\"\"Represents a chunk of text from the source document.\"\"\"\n    chunk_id: str\n    text: str\n    source_doc: str\n    start_char: int\n    end_char: int\n\n@dataclass\nclass Entity:\n    \"\"\"An entity extracted from the text.\"\"\"\n    name: str\n    entity_type: str  # PERSON, ORG, CONCEPT, TECH, LOCATION\n    description: str\n    source_chunks: List[str] = field(default_factory=list)\n\n@dataclass\nclass Relationship:\n    \"\"\"A relationship between two entities.\"\"\"\n    source: str\n    target: str\n    relation: str\n    description: str\n    weight: float = 1.0\n    source_chunks: List[str] = field(default_factory=list)\n\n@dataclass\nclass Claim:\n    \"\"\"A covariate: extracted claim with source and temporal metadata.\"\"\"\n    claim_id: str\n    text: str\n    subject: str\n    object: str\n    claim_type: str  # FACT, OPINION, ATTRIBUTION, TEMPORAL\n    source_chunk: str\n    confidence: float\n    timestamp: Optional[str] = None\n\nclass ChunkingStrategy:\n    \"\"\"\n    GraphRAG uses variable-size chunks with overlap.\n    Standard RAG chunking is enhanced with entity boundary awareness.\n    \"\"\"\n\n    def __init__(self, chunk_size: int = 1200, overlap: int = 200):\n        self.chunk_size = chunk_size\n        self.overlap = overlap\n\n    def chunk_document(self, text: str, source: str) -> List[TextChunk]:\n        \"\"\"Split a document into overlapping chunks.\"\"\"\n        chunks = []\n        start = 0\n\n        while start < len(text):\n            end = min(start + self.chunk_size, len(text))\n\n            # Try to break at sentence boundary for cleaner chunks\n            if end < len(text):\n                # Find last sentence boundary within overlap region\n                search_end = min(end + self.overlap, len(text))\n                last_period = text.rfind('. ', start + self.chunk_size - 100,\n                                         search_end)\n                last_newline = text.rfind('\\n\\n', start + self.chunk_size - 100,\n                                          search_end)\n\n                boundary = max(last_period, last_newline)\n                if boundary > start + self.chunk_size - 200:\n                    end = boundary + 1\n\n            chunk_text = text[start:end].strip()\n            if chunk_text:\n                chunk_id = hashlib.md5(\n                    f\"{source}:{start}:{end}\".encode()\n                ).hexdigest()[:12]\n\n                chunks.append(TextChunk(\n                    chunk_id=chunk_id,\n                    text=chunk_text,\n                    source_doc=source,\n                    start_char=start,\n                    end_char=end,\n                ))\n\n            start = end - self.overlap if end < len(text) else len(text)\n\n        return chunks\n\nclass EntityExtractor:\n    \"\"\"\n    Extracts entities from text chunks using LLM.\n    In production GraphRAG, this uses GPT-4 or equivalent.\n    \"\"\"\n\n    def __init__(self, model_fn=None):\n        self.model_fn = model_fn or self._mock_extract\n\n    def extract_entities(self, chunk: TextChunk) -> List[Entity]:\n        \"\"\"\n        Extract entities from a single chunk.\n        Production version calls LLM with structured output parsing.\n        \"\"\"\n        extraction_prompt = f\"\"\"\nExtract all named entities from the following text.\nFor each entity, provide:\n- name (canonical form)\n- type (PERSON, ORG, CONCEPT, TECH, LOCATION)\n- description (1 sentence)\n\nText: {chunk.text}\n\nRespond as a JSON list:\n[{{\"name\": \"...\", \"type\": \"...\", \"description\": \"...\"}}]\n\"\"\"\n        response = self.model_fn(extraction_prompt)\n        entities = self._parse_entities(response, chunk.chunk_id)\n        return entities\n\n    def extract_relationships(\n        self, chunk: TextChunk, entities: List[Entity]\n    ) -> List[Relationship]:\n        \"\"\"\n        Extract relationships between entities found in a chunk.\n        \"\"\"\n        entity_names = [e.name for e in entities]\n        relationship_prompt = f\"\"\"\nIdentify relationships between these entities in the text.\nEntities: {', '.join(entity_names)}\n\nText: {chunk.text}\n\nFor each relationship, provide:\n- source: entity name\n- target: entity name\n- relation: relationship type (e.g., \"uses\", \"part_of\", \"creates\", \"located_in\")\n- description: brief explanation\n\nRespond as JSON list:\n[{{\"source\": \"...\", \"target\": \"...\", \"relation\": \"...\", \"description\": \"...\"}}]\n\"\"\"\n        response = self.model_fn(relationship_prompt)\n        relationships = self._parse_relationships(response, chunk.chunk_id)\n        return relationships\n\n    def _parse_entities(self, response: str, chunk_id: str) -> List[Entity]:\n        \"\"\"Parse LLM response into Entity objects.\"\"\"\n        entities = []\n        try:\n            data = json.loads(response)\n            for item in data:\n                entities.append(Entity(\n                    name=item.get(\"name\", \"unknown\"),\n                    entity_type=item.get(\"type\", \"CONCEPT\"),\n                    description=item.get(\"description\", \"\"),\n                    source_chunks=[chunk_id],\n                ))\n        except (json.JSONDecodeError, KeyError):\n            # Fallback: mock entities for demonstration\n            entities = self._mock_entities(chunk_id)\n        return entities\n\n    def _parse_relationships(self, response: str, chunk_id: str\n                             ) -> List[Relationship]:\n        \"\"\"Parse LLM response into Relationship objects.\"\"\"\n        relationships = []\n        try:\n            data = json.loads(response)\n            for item in data:\n                relationships.append(Relationship(\n                    source=item.get(\"source\", \"\"),\n                    target=item.get(\"target\", \"\"),\n                    relation=item.get(\"relation\", \"related_to\"),\n                    description=item.get(\"description\", \"\"),\n                    source_chunks=[chunk_id],\n                ))\n        except (json.JSONDecodeError, KeyError):\n            pass\n        return relationships\n\n    def _mock_extract(self, prompt: str) -> str:\n        \"\"\"Mock LLM call for demonstration.\"\"\"\n        if \"entities\" in prompt.lower():\n            return json.dumps([\n                {\"name\": \"GraphRAG\", \"type\": \"TECH\",\n                 \"description\": \"Microsoft's graph-based RAG system\"},\n                {\"name\": \"Leiden Algorithm\", \"type\": \"TECH\",\n                 \"description\": \"Community detection algorithm\"},\n                {\"name\": \"Microsoft Research\", \"type\": \"ORG\",\n                 \"description\": \"Microsoft's research division\"},\n            ])\n        return json.dumps([\n            {\"source\": \"GraphRAG\", \"target\": \"Leiden Algorithm\",\n             \"relation\": \"uses\",\n             \"description\": \"GraphRAG uses Leiden for community detection\"},\n        ])\n\n    def _mock_entities(self, chunk_id: str) -> List[Entity]:\n        \"\"\"Mock entities for when LLM parsing fails.\"\"\"\n        return [\n            Entity(name=\"GraphRAG\", entity_type=\"TECH\",\n                   description=\"Graph-based RAG\", source_chunks=[chunk_id]),\n            Entity(name=\"Entity Extraction\", entity_type=\"CONCEPT\",\n                   description=\"Process of identifying entities\",\n                   source_chunks=[chunk_id]),\n        ]\n\nclass KnowledgeGraphBuilder:\n    \"\"\"\n    Builds and manages the knowledge graph from extracted entities and relationships.\n    \"\"\"\n\n    def __init__(self):\n        self.entities: Dict[str, Entity] = {}\n        self.relationships: List[Relationship] = []\n        self.graph: nx.Graph = nx.Graph()\n\n    def add_entity(self, entity: Entity):\n        \"\"\"Add or merge an entity.\"\"\"\n        if entity.name in self.entities:\n            existing = self.entities[entity.name]\n            existing.source_chunks.extend(\n                c for c in entity.source_chunks\n                if c not in existing.source_chunks\n            )\n        else:\n            self.entities[entity.name] = entity\n            self.graph.add_node(entity.name, type=entity.entity_type)\n\n    def add_relationship(self, rel: Relationship):\n        \"\"\"Add a relationship between two entities.\"\"\"\n        if rel.source in self.entities and rel.target in self.entities:\n            self.relationships.append(rel)\n            current_weight = 0\n            if self.graph.has_edge(rel.source, rel.target):\n                current_weight = self.graph.edges[rel.source, rel.target].get(\n                    'weight', 0\n                )\n\n            self.graph.add_edge(\n                rel.source, rel.target,\n                weight=current_weight + rel.weight,\n                relation=rel.relation,\n                description=rel.description,\n            )\n\n    def build_from_chunks(self, chunks: List[TextChunk],\n                          extractor: EntityExtractor):\n        \"\"\"\n        Full pipeline: extract entities and relationships from all chunks,\n        then build the knowledge graph.\n        \"\"\"\n        all_entities = []\n        all_relationships = []\n\n        for chunk in chunks:\n            entities = extractor.extract_entities(chunk)\n            relationships = extractor.extract_relationships(chunk, entities)\n            all_entities.extend(entities)\n            all_relationships.extend(relationships)\n\n        # Deduplicate and add\n        for entity in all_entities:\n            self.add_entity(entity)\n\n        for rel in all_relationships:\n            self.add_relationship(rel)\n\n        print(f\"Knowledge Graph built: {len(self.entities)} entities, \"\n              f\"{len(self.relationships)} relationships, \"\n              f\"{self.graph.number_of_edges()} edges\")\n\n    def get_graph(self) -> nx.Graph:\n        \"\"\"Return the NetworkX graph for community detection.\"\"\"\n        return self.graph\n\n# Demonstration of indexing pipeline\ndef demo_indexing_pipeline():\n    \"\"\"Demonstrate the full indexing pipeline.\"\"\"\n    # Sample documents\n    documents = [\n        {\n            \"source\": \"graphrag_paper.md\",\n            \"text\": (\n                \"Microsoft Research introduced GraphRAG in 2024. \"\n                \"GraphRAG uses the Leiden algorithm for community detection. \"\n                \"The algorithm detects communities in knowledge graphs. \"\n                \"Each community is summarized using GPT-4. \"\n                \"Local search grounds queries to specific entities. \"\n                \"Global search performs map-reduce over all communities. \"\n                \"Covariate refinement extracts claims with source attribution. \"\n                \"Temporal reasoning tracks how claims change over time. \"\n                \"The resolution parameter controls community granularity. \"\n                \"Higher resolution produces more, smaller communities. \"\n                \"Lower resolution produces fewer, larger communities.\"\n            ),\n        },\n        {\n            \"source\": \"rag_basics.md\",\n            \"text\": (\n                \"RAG stands for Retrieval-Augmented Generation. \"\n                \"It combines retrieval from vector databases with LLM generation. \"\n                \"Standard RAG embeds queries and retrieves similar chunks. \"\n                \"GraphRAG extends this with entity-centric organization. \"\n                \"Community summaries enable both local and global search. \"\n                \"Entity extraction is the first step in the indexing pipeline. \"\n                \"Chunking strategies impact extraction quality. \"\n                \"Overlapping chunks help capture entity boundaries.\"\n            ),\n        },\n    ]\n\n    # Step 1: Chunk documents\n    chunker = ChunkingStrategy(chunk_size=500, overlap=100)\n    all_chunks = []\n\n    for doc in documents:\n        chunks = chunker.chunk_document(doc[\"text\"], doc[\"source\"])\n        all_chunks.extend(chunks)\n\n    print(f\"=== Indexing Pipeline ===\")\n    print(f\"Documents: {len(documents)}\")\n    print(f\"Chunks created: {len(all_chunks)}\")\n    for chunk in all_chunks:\n        print(f\"  Chunk {chunk.chunk_id}: {chunk.text[:60]}...\")\n\n    # Step 2: Entity and relationship extraction\n    extractor = EntityExtractor()\n\n    print(f\"\\n=== Entity Extraction ===\")\n    for chunk in all_chunks[:2]:\n        entities = extractor.extract_entities(chunk)\n        for entity in entities:\n            print(f\"  {entity.name} ({entity.entity_type}): {entity.description}\")\n\n    # Step 3: Build knowledge graph\n    kg_builder = KnowledgeGraphBuilder()\n    kg_builder.build_from_chunks(all_chunks, extractor)\n\n    # Step 4: Display graph stats\n    G = kg_builder.get_graph()\n    print(f\"\\nGraph Stats:\")\n    print(f\"  Nodes: {G.number_of_nodes()}\")\n    print(f\"  Edges: {G.number_of_edges()}\")\n\n    for u, v, data in G.edges(data=True):\n        print(f\"  {u} --[{data.get('relation', 'related')}]--> {v} \"\n              f\"(weight: {data.get('weight', 1)})\")\n\n    return kg_builder\n\nif __name__ == \"__main__\":\n    kg = demo_indexing_pipeline()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== Indexing Pipeline ===\nDocuments: 2\nChunks created: 4\n  Chunk a1b2c3d4e5f6: Microsoft Research introduced GraphRAG in 2024...\n  Chunk f6e5d4c3b2a1: RAG stands for Retrieval-Augmented Generation...\n\n=== Entity Extraction ===\n  GraphRAG (TECH): Microsoft's graph-based RAG system\n  Leiden Algorithm (TECH): Community detection algorithm\n  Microsoft Research (ORG): Microsoft's research division\n\n=== Knowledge Graph built ===\nEntities: 14, Relationships: 8, Edges: 8\n\nGraph Stats:\n  Nodes: 14\n  Edges: 8\n  GraphRAG --[uses]--> Leiden Algorithm (weight: 1)\n  GraphRAG --[related_to]--> Entity Extraction (weight: 1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1432-community-summarization",
      children: "14.3.2 Community Summarization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After community detection, each community must be summarized. This is the key innovation in GraphRAG — pre-computed community summaries enable fast global search."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nGraphRAG: Community Summarization\nSummarizes each detected community for use in global search.\n\"\"\"\n\nfrom dataclasses import dataclass\nfrom typing import List, Dict\n\n@dataclass\nclass CommunitySummary:\n    \"\"\"A summary of a community of entities.\"\"\"\n    community_id: int\n    entities: List[str]\n    summary_text: str\n    key_topics: List[str]\n    relationships_summary: List[str]\n\nclass CommunitySummarizer:\n    \"\"\"\n    Summarizes communities using an LLM.\n    Each community gets a comprehensive summary capturing\n    entities, relationships, and key themes.\n    \"\"\"\n\n    def __init__(self, model_fn=None, max_summary_length: int = 500):\n        self.model_fn = model_fn or self._mock_summarize\n        self.max_summary_length = max_summary_length\n\n    def summarize_community(\n        self,\n        community_id: int,\n        entities: List[str],\n        relationships: List[Dict],\n        graph: nx.Graph,\n    ) -> CommunitySummary:\n        \"\"\"\n        Generate a summary for a community of entities.\n\n        Args:\n            community_id: The community identifier\n            entities: List of entity names in the community\n            relationships: Relationship dicts involving community entities\n            graph: The full knowledge graph for context\n\n        Returns:\n            CommunitySummary with text, topics, and relationship summaries\n        \"\"\"\n        # Build context for the LLM\n        entity_details = []\n        for entity_name in entities:\n            neighbors = list(graph.neighbors(entity_name))\n            entity_details.append(f\"- {entity_name}: connected to {neighbors}\")\n\n        relationship_text = \"\"\n        for rel in relationships:\n            relationship_text += (\n                f\"- {rel.get('source', '?')} --[{rel.get('relation', '?')}]\"\n                f\"--> {rel.get('target', '?')}: \"\n                f\"{rel.get('description', '')}\\n\"\n            )\n\n        summary_prompt = f\"\"\"\nSummarize the following community of entities from a knowledge graph.\nProvide a coherent summary covering what this group represents, their\nkey relationships, and their collective importance.\n\nCOMMUNITY ENTITIES:\n{chr(10).join(entity_details)}\n\nKEY RELATIONSHIPS:\n{relationship_text}\n\nProvide a concise summary ({self.max_summary_length} words max) covering:\n1. The main theme of this community\n2. Key entities and their roles\n3. Important relationships\n4. How this community connects to the broader knowledge domain\n\nSummary:\n\"\"\"\n        summary_text = self.model_fn(summary_prompt)\n\n        # Extract key topics\n        topics = self._extract_topics(summary_text, entities)\n\n        # Build relationship summaries\n        rel_summaries = []\n        for rel in relationships:\n            rel_summaries.append(\n                f\"{rel.get('source', '?')} {rel.get('relation', 'is_related_to')} \"\n                f\"{rel.get('target', '?')}\"\n            )\n\n        return CommunitySummary(\n            community_id=community_id,\n            entities=entities,\n            summary_text=summary_text,\n            key_topics=topics,\n            relationships_summary=rel_summaries,\n        )\n\n    def summarize_all_communities(\n        self,\n        communities: Dict[int, List[str]],\n        all_relationships: List[Dict],\n        graph: nx.Graph,\n    ) -> List[CommunitySummary]:\n        \"\"\"\n        Summarize all communities in the graph.\n        This is the main entry point for the summarization pipeline.\n        \"\"\"\n        summaries = []\n\n        for comm_id, entity_list in communities.items():\n            # Filter relationships relevant to this community\n            entity_set = set(entity_list)\n            community_rels = [\n                r for r in all_relationships\n                if r.get('source') in entity_set\n                or r.get('target') in entity_set\n            ]\n\n            summary = self.summarize_community(\n                comm_id, entity_list, community_rels, graph\n            )\n            summaries.append(summary)\n\n            print(f\"Community {comm_id}: {len(entity_list)} entities, \"\n                  f\"{len(community_rels)} relationships summarized\")\n\n        return summaries\n\n    def _extract_topics(self, summary: str, entities: List[str]) -> List[str]:\n        \"\"\"Extract key topics from a community summary.\"\"\"\n        topics = []\n        # Simple extraction: use entities that appear in the summary\n        for entity in entities:\n            if entity.lower() in summary.lower():\n                topics.append(entity)\n        return topics[:5]  # Limit to top 5 topics\n\n    def _mock_summarize(self, prompt: str) -> str:\n        \"\"\"Mock LLM summarization for demonstration.\"\"\"\n        return (\n            \"This community represents the core GraphRAG technology stack. \"\n            \"It includes Microsoft's graph-based RAG system, the Leiden \"\n            \"algorithm for community detection, and entity extraction \"\n            \"capabilities. These components work together to transform \"\n            \"unstructured text into a structured, queryable knowledge graph. \"\n            \"The community is central to both local and global search paradigms.\"\n        )\n\n# Demonstration\ndef demo_community_summarization(kg_builder=None):\n    \"\"\"Demonstrate community summarization.\"\"\"\n    import networkx as nx\n\n    if kg_builder is None:\n        # Build a simple graph\n        G = nx.Graph()\n        entities_data = {\n            \"GraphRAG\": {\"type\": \"TECH\"},\n            \"Leiden Algorithm\": {\"type\": \"TECH\"},\n            \"Entity Extraction\": {\"type\": \"CONCEPT\"},\n            \"GPT-4\": {\"type\": \"TECH\"},\n            \"Microsoft Research\": {\"type\": \"ORG\"},\n            \"Knowledge Graph\": {\"type\": \"CONCEPT\"},\n        }\n        for name, data in entities_data.items():\n            G.add_node(name, **data)\n\n        relationships = [\n            {\"source\": \"GraphRAG\", \"target\": \"Leiden Algorithm\",\n             \"relation\": \"uses\", \"description\": \"For community detection\"},\n            {\"source\": \"GraphRAG\", \"target\": \"Entity Extraction\",\n             \"relation\": \"includes\",\n             \"description\": \"Extracts entities from text\"},\n            {\"source\": \"GraphRAG\", \"target\": \"GPT-4\",\n             \"relation\": \"uses\",\n             \"description\": \"For summarization and generation\"},\n            {\"source\": \"GraphRAG\", \"target\": \"Microsoft Research\",\n             \"relation\": \"developed_by\",\n             \"description\": \"Created at Microsoft Research\"},\n            {\"source\": \"GraphRAG\", \"target\": \"Knowledge Graph\",\n             \"relation\": \"builds\",\n             \"description\": \"Constructs a knowledge graph\"},\n        ]\n        for rel in relationships:\n            G.add_edge(rel[\"source\"], rel[\"target\"], **{\n                k: v for k, v in rel.items() if k != \"source\" and k != \"target\"\n            })\n\n        communities = {0: [\"GraphRAG\", \"Leiden Algorithm\", \"Entity Extraction\"],\n                       1: [\"GPT-4\", \"Microsoft Research\"],\n                       2: [\"Knowledge Graph\"]}\n    else:\n        G = kg_builder.get_graph()\n        detector = LeidenCommunityDetector(resolution=1.0)\n        communities = detector.detect_communities(G)\n        relationships = [\n            {\"source\": u, \"target\": v,\n             \"relation\": data.get(\"relation\", \"related\"),\n             \"description\": data.get(\"description\", \"\")}\n            for u, v, data in G.edges(data=True)\n        ]\n\n    if kg_builder is None:\n        relationships = [\n            {\"source\": u, \"target\": v,\n             \"relation\": data.get(\"relation\", \"related\"),\n             \"description\": data.get(\"description\", \"\")}\n            for u, v, data in G.edges(data=True)\n        ]\n\n    print(\"=== Community Summarization ===\")\n    summarizer = CommunitySummarizer()\n    summaries = summarizer.summarize_all_communities(communities, relationships, G)\n\n    print(f\"\\nGenerated {len(summaries)} community summaries:\\n\")\n    for s in summaries:\n        print(f\"--- Community {s.community_id} ---\")\n        print(f\"Entities: {', '.join(s.entities)}\")\n        print(f\"Summary: {s.summary_text}\")\n        print(f\"Key Topics: {', '.join(s.key_topics)}\")\n        print()\n\n    return summaries\n\nif __name__ == \"__main__\":\n    demo_community_summarization()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "144-local-search",
      children: "14.4 Local Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Local search answers entity-specific questions by grounding the query to specific entities and retrieving their community context."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Query: \"How does GraphRAG use Leiden?\"] --> B[Entity Extraction from Query]\n    B --> C[Ground to Knowledge Graph Entities]\n    C --> D[Retrieve Entity's Community]\n    D --> E[Get Community Summary]\n    C --> F[Get Entity's Relationships]\n    E --> G[Build Context Window]\n    F --> G\n    G --> H[LLM Answer Generation]\n    H --> I[Final Answer with Citations]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nGraphRAG: Local Search Implementation\nEntity-grounded retrieval and answer generation.\n\"\"\"\n\nfrom dataclasses import dataclass\nfrom typing import List, Dict, Optional, Tuple\n\n@dataclass\nclass LocalSearchResult:\n    \"\"\"Result from a local search query.\"\"\"\n    answer: str\n    grounded_entities: List[str]\n    source_communities: List[int]\n    supporting_evidence: List[Dict]\n    confidence: float\n\nclass LocalSearcher:\n    \"\"\"\n    Performs entity-grounded local search on the knowledge graph.\n    Steps:\n    1. Extract entities from the query\n    2. Ground entities to knowledge graph nodes\n    3. Retrieve community context for grounded entities\n    4. Gather entity-specific relationships\n    5. Build context and generate answer\n    \"\"\"\n\n    def __init__(\n        self,\n        graph: nx.Graph,\n        communities: Dict[int, List[str]],\n        community_summaries: List[CommunitySummary],\n        entity_extractor: EntityExtractor,\n        model_fn=None,\n        max_context_tokens: int = 4000,\n    ):\n        self.graph = graph\n        self.communities = communities\n        self.summary_map = {\n            s.community_id: s for s in community_summaries\n        }\n        self.entity_extractor = entity_extractor\n        self.model_fn = model_fn or self._mock_generate\n        self.max_context_tokens = max_context_tokens\n\n    def search(self, query: str, top_k_entities: int = 5) -> LocalSearchResult:\n        \"\"\"\n        Execute a local search query.\n\n        Args:\n            query: Natural language question\n            top_k_entities: Max entities to ground to\n\n        Returns:\n            LocalSearchResult with answer and evidence\n        \"\"\"\n        # Step 1: Extract entities from query\n        query_entities = self._extract_query_entities(query)\n\n        # Step 2: Ground to knowledge graph\n        grounded = self._ground_entities(query_entities, top_k_entities)\n        if not grounded:\n            return self._fallback_response(query)\n\n        # Step 3: Find communities for grounded entities\n        relevant_communities = set()\n        entity_to_community = {}\n\n        for entity_name in grounded:\n            for comm_id, entities in self.communities.items():\n                if entity_name in entities:\n                    relevant_communities.add(comm_id)\n                    entity_to_community[entity_name] = comm_id\n                    break\n\n        # Step 4: Retrieve community context and entity relationships\n        context_parts = []\n        evidence = []\n\n        # Add community summaries\n        for comm_id in relevant_communities:\n            if comm_id in self.summary_map:\n                summary = self.summary_map[comm_id]\n                context_parts.append(\n                    f\"=== Community {comm_id} Summary ===\\n{summary.summary_text}\"\n                )\n                evidence.append({\n                    \"type\": \"community_summary\",\n                    \"community_id\": comm_id,\n                    \"entities\": summary.entities,\n                    \"text\": summary.summary_text[:200],\n                })\n\n        # Add entity-specific relationships\n        for entity_name in grounded[:3]:\n            if entity_name not in self.graph:\n                continue\n\n            neighbors = list(self.graph.neighbors(entity_name))\n            relationship_lines = []\n\n            for neighbor in neighbors:\n                edge_data = self.graph.get_edge_data(entity_name, neighbor)\n                relation = edge_data.get(\"relation\", \"related_to\") \\\n                    if edge_data else \"related_to\"\n                weight = edge_data.get(\"weight\", 1.0) if edge_data else 1.0\n                relationship_lines.append(\n                    f\"  --[{relation}] (weight: {weight:.1f})--> {neighbor}\"\n                )\n\n            if relationship_lines:\n                entity_context = (\n                    f\"=== Entity: {entity_name} ===\\n\"\n                    f\"Connections:\\n\" + \"\\n\".join(relationship_lines)\n                )\n                context_parts.append(entity_context)\n\n        # Step 5: Build final context and generate answer\n        context = \"\\n\\n\".join(context_parts)\n\n        # Truncate if needed (token budget)\n        if len(context) > self.max_context_tokens:\n            context = context[:self.max_context_tokens]\n\n        generation_prompt = f\"\"\"You are a knowledge graph assistant. Answer the question based on the provided context from the knowledge graph.\n\nCONTEXT:\n{context}\n\nQUESTION: {query}\n\nProvide a comprehensive answer based ONLY on the context above.\nIf the context does not contain enough information, say so explicitly.\nCite the specific entities and relationships you use.\n\nANSWER:\"\"\"\n        answer = self.model_fn(generation_prompt)\n\n        return LocalSearchResult(\n            answer=answer,\n            grounded_entities=grounded,\n            source_communities=list(relevant_communities),\n            supporting_evidence=evidence,\n            confidence=self._compute_confidence(grounded, evidence),\n        )\n\n    def _extract_query_entities(self, query: str) -> List[str]:\n        \"\"\"Extract potential entity names from the query string.\"\"\"\n        # In production, this uses the LLM-based entity extractor\n        # For simulation, use pattern matching\n        known_entities = set(self.graph.nodes()) if hasattr(self, 'graph') else set()\n\n        found = []\n        for entity in known_entities:\n            if entity.lower() in query.lower():\n                found.append(entity)\n\n        # If no known entities found, use mock extraction\n        if not found:\n            found = self._mock_query_entities(query)\n\n        return found\n\n    def _ground_entities(self, query_entities: List[str],\n                         top_k: int) -> List[str]:\n        \"\"\"Ground query entities to knowledge graph nodes.\"\"\"\n        grounded = []\n        for entity in query_entities:\n            if entity in self.graph:\n                grounded.append(entity)\n        return grounded[:top_k]\n\n    def _compute_confidence(self, entities: List[str],\n                            evidence: List[Dict]) -> float:\n        \"\"\"Compute confidence based on entity matches and evidence.\"\"\"\n        if not entities:\n            return 0.0\n        base = min(1.0, len(entities) / 3.0)\n        evidence_bonus = min(0.3, len(evidence) * 0.1)\n        return round(min(1.0, base + evidence_bonus), 2)\n\n    def _fallback_response(self, query: str) -> LocalSearchResult:\n        \"\"\"Generate fallback when no entities are found.\"\"\"\n        return LocalSearchResult(\n            answer=\"I could not find specific entities in the knowledge \"\n                   \"graph related to your query. Please try rephrasing \"\n                   \"or providing more specific entity names.\",\n            grounded_entities=[],\n            source_communities=[],\n            supporting_evidence=[],\n            confidence=0.0,\n        )\n\n    def _mock_generate(self, prompt: str) -> str:\n        \"\"\"Mock LLM generation for demonstration.\"\"\"\n        return (\n            \"Based on the knowledge graph context, GraphRAG uses the \"\n            \"Leiden algorithm for hierarchical community detection. The \"\n            \"Leiden algorithm partitions the entity graph into communities \"\n            \"of densely connected entities. This enables GraphRAG to \"\n            \"generate targeted summaries for each community, which are \"\n            \"then used for both local and global search.\"\n        )\n\n    def _mock_query_entities(self, query: str) -> List[str]:\n        \"\"\"Mock entity extraction from query.\"\"\"\n        # Check for common entity patterns\n        entity_map = {\n            \"graphrag\": \"GraphRAG\",\n            \"leiden\": \"Leiden Algorithm\",\n            \"gpt\": \"GPT-4\",\n            \"microsoft\": \"Microsoft Research\",\n            \"entity\": \"Entity Extraction\",\n            \"knowledge graph\": \"Knowledge Graph\",\n        }\n        found = []\n        for keyword, entity in entity_map.items():\n            if keyword.lower() in query.lower():\n                found.append(entity)\n        return found\n\n# Demonstration\ndef demo_local_search():\n    \"\"\"Demonstrate local search with the knowledge graph.\"\"\"\n    import networkx as nx\n\n    # Build a sample knowledge graph\n    G = nx.Graph()\n    entities = [\"GraphRAG\", \"Leiden Algorithm\", \"GPT-4\",\n                \"Microsoft Research\", \"Entity Extraction\", \"Knowledge Graph\"]\n    for e in entities:\n        G.add_node(e)\n\n    edges = [\n        (\"GraphRAG\", \"Leiden Algorithm\", {\"relation\": \"uses\", \"weight\": 0.9}),\n        (\"GraphRAG\", \"GPT-4\", {\"relation\": \"uses_for_summarization\",\n                                \"weight\": 0.8}),\n        (\"GraphRAG\", \"Microsoft Research\", {\"relation\": \"developed_by\",\n                                            \"weight\": 0.95}),\n        (\"GraphRAG\", \"Entity Extraction\", {\"relation\": \"includes\",\n                                           \"weight\": 0.85}),\n        (\"GraphRAG\", \"Knowledge Graph\", {\"relation\": \"builds\", \"weight\": 0.9}),\n    ]\n    G.add_edges_from(edges)\n\n    # Define communities\n    communities = {\n        0: [\"GraphRAG\", \"Leiden Algorithm\", \"Entity Extraction\"],\n        1: [\"GPT-4\", \"Microsoft Research\"],\n        2: [\"Knowledge Graph\"],\n    }\n\n    # Create community summaries\n    summaries = [\n        CommunitySummary(\n            community_id=0,\n            entities=[\"GraphRAG\", \"Leiden Algorithm\", \"Entity Extraction\"],\n            summary_text=\"Core GraphRAG technology stack: graph-based RAG \"\n                        \"with community detection and entity extraction.\",\n            key_topics=[\"GraphRAG\", \"Leiden\", \"Entity Extraction\"],\n            relationships_summary=[\"GraphRAG uses Leiden Algorithm\",\n                                   \"GraphRAG includes Entity Extraction\"],\n        ),\n        CommunitySummary(\n            community_id=1,\n            entities=[\"GPT-4\", \"Microsoft Research\"],\n            summary_text=\"Microsoft's AI capabilities: GPT-4 integration \"\n                        \"for summarization and Microsoft Research as creator.\",\n            key_topics=[\"GPT-4\", \"Microsoft Research\"],\n            relationships_summary=[\"GraphRAG uses GPT-4\",\n                                   \"GraphRAG developed by Microsoft Research\"],\n        ),\n    ]\n\n    # Create local searcher\n    searcher = LocalSearcher(\n        graph=G,\n        communities=communities,\n        community_summaries=summaries,\n        entity_extractor=EntityExtractor(),\n    )\n\n    print(\"=== Local Search Demonstration ===\")\n    test_queries = [\n        \"How does GraphRAG use the Leiden algorithm?\",\n        \"What role does GPT-4 play in GraphRAG?\",\n        \"Who developed GraphRAG?\",\n    ]\n\n    for query in test_queries:\n        print(f\"\\nQuery: {query}\")\n        result = searcher.search(query)\n        print(f\"Grounded Entities: {result.grounded_entities}\")\n        print(f\"Source Communities: {result.source_communities}\")\n        print(f\"Confidence: {result.confidence}\")\n        print(f\"Answer: {result.answer[:200]}...\")\n        print(\"-\" * 60)\n\n    return searcher\n\nif __name__ == \"__main__\":\n    demo_local_search()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "145-global-search",
      children: "14.5 Global Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Global search answers abstract, thematic, or comparative questions. It operates over all communities using a map-reduce pattern."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Query: \"What are the main themes in GraphRAG research?\"] --> B[Map Phase]\n    subgraph \"Map Phase\"\n        B1[Community 0 Summary]\n        B2[Community 1 Summary]\n        B3[Community N Summary]\n        B --> B1\n        B --> B2\n        B --> B3\n    end\n    subgraph \"Intermediate Answers\"\n        C1[Community 0 Answer]\n        C2[Community 1 Answer]\n        C3[Community N Answer]\n        B1 --> C1\n        B2 --> C2\n        B3 --> C3\n    end\n    subgraph \"Reduce Phase\"\n        D[All Intermediate Answers] --> E[Thematic Aggregation]\n        E --> F[Final Answer]\n    end\n    C1 --> D\n    C2 --> D\n    C3 --> D\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nGraphRAG: Global Search Implementation\nMap-reduce over community summaries for thematic question answering.\n\"\"\"\n\nfrom dataclasses import dataclass\nfrom typing import List, Dict, Optional, Tuple\nfrom concurrent.futures import ThreadPoolExecutor, as_completed\n\n@dataclass\nclass GlobalSearchResult:\n    \"\"\"Result from a global search query.\"\"\"\n    answer: str\n    community_contributions: List[Dict]\n    themes_identified: List[str]\n    supporting_communities: List[int]\n    confidence: float\n\nclass GlobalSearcher:\n    \"\"\"\n    Performs global search using map-reduce over all community summaries.\n    Map: Each community independently answers based on its summary.\n    Reduce: All community answers are aggregated into a final answer.\n    \"\"\"\n\n    def __init__(\n        self,\n        community_summaries: List[CommunitySummary],\n        model_fn=None,\n        max_workers: int = 4,\n        min_community_relevance: float = 0.3,\n    ):\n        self.summaries = community_summaries\n        self.model_fn = model_fn or self._mock_generate\n        self.max_workers = max_workers\n        self.min_community_relevance = min_community_relevance\n\n    def search(self, query: str) -> GlobalSearchResult:\n        \"\"\"\n        Execute a global search query across all communities.\n\n        Args:\n            query: Abstract or thematic question\n\n        Returns:\n            GlobalSearchResult with aggregated answer\n        \"\"\"\n        # Phase 1: Filter and score community relevance\n        scored_communities = self._score_community_relevance(query)\n\n        relevant = [\n            s for s, score in scored_communities\n            if score >= self.min_community_relevance\n        ]\n\n        if not relevant:\n            return GlobalSearchResult(\n                answer=\"No relevant communities found for this query.\",\n                community_contributions=[],\n                themes_identified=[],\n                supporting_communities=[],\n                confidence=0.0,\n            )\n\n        # Phase 2: Map — each community generates intermediate answer\n        print(f\"Map phase: {len(relevant)} relevant communities\")\n        intermediate_answers = self._map_community_answers(query, relevant)\n\n        # Phase 3: Reduce — aggregate intermediate answers\n        print(f\"Reduce phase: aggregating {len(intermediate_answers)} answers\")\n        final_answer = self._reduce_answers(query, intermediate_answers)\n\n        # Extract themes\n        themes = self._extract_themes(intermediate_answers)\n\n        return GlobalSearchResult(\n            answer=final_answer,\n            community_contributions=intermediate_answers,\n            themes_identified=themes,\n            supporting_communities=[s.community_id for s in relevant],\n            confidence=self._compute_confidence(intermediate_answers),\n        )\n\n    def _score_community_relevance(\n        self, query: str\n    ) -> List[Tuple[CommunitySummary, float]]:\n        \"\"\"\n        Score each community's relevance to the query.\n        Uses keyword overlap as a proxy (production uses embeddings).\n        \"\"\"\n        query_terms = set(query.lower().split())\n        scored = []\n\n        for summary in self.summaries:\n            # Combine summary text and topics for scoring\n            combined_text = (\n                summary.summary_text.lower()\n                + \" \" + \" \".join(summary.key_topics).lower()\n                + \" \" + \" \".join(summary.entities).lower()\n            )\n            summary_terms = set(combined_text.split())\n\n            # Jaccard similarity\n            if not query_terms or not summary_terms:\n                score = 0.0\n            else:\n                intersection = query_terms & summary_terms\n                union = query_terms | summary_terms\n                score = len(intersection) / len(union)\n\n            # Bonus for entity name overlap\n            for entity in summary.entities:\n                if entity.lower() in query.lower():\n                    score += 0.2\n\n            scored.append((summary, round(min(1.0, score), 3)))\n\n        return sorted(scored, key=lambda x: x[1], reverse=True)\n\n    def _map_community_answers(\n        self, query: str, communities: List[CommunitySummary]\n    ) -> List[Dict]:\n        \"\"\"\n        Map phase: each community independently generates an answer\n        based on its summary. Runs in parallel using ThreadPoolExecutor.\n        \"\"\"\n        results = []\n\n        def process_community(summary: CommunitySummary) -> Dict:\n            prompt = f\"\"\"You are analyzing a community from a knowledge graph.\nUse only the community summary below to answer the question.\n\nCOMMUNITY ID: {summary.community_id}\nCOMMUNITY ENTITIES: {', '.join(summary.entities)}\nCOMMUNITY SUMMARY: {summary.summary_text}\nKEY RELATIONSHIPS:\n{chr(10).join('- ' + r for r in summary.relationships_summary)}\n\nQUESTION: {query}\n\nBased ONLY on this community's information, what insights can you provide?\nIf this community does not contain relevant information, say so.\n\nCOMMUNITY ANSWER:\"\"\"\n            answer = self.model_fn(prompt)\n\n            return {\n                \"community_id\": summary.community_id,\n                \"entities\": summary.entities,\n                \"answer\": answer,\n            }\n\n        # Parallel execution\n        with ThreadPoolExecutor(max_workers=self.max_workers) as executor:\n            futures = {\n                executor.submit(process_community, s): s\n                for s in communities\n            }\n\n            for future in as_completed(futures):\n                try:\n                    result = future.result()\n                    results.append(result)\n                    print(f\"  Community {result['community_id']}: answer generated\")\n                except Exception as e:\n                    print(f\"  Error processing community: {e}\")\n\n        return results\n\n    def _reduce_answers(\n        self, query: str, intermediate_answers: List[Dict]\n    ) -> str:\n        \"\"\"\n        Reduce phase: aggregate all community answers into a final answer.\n        Identifies common themes, contradictions, and complementary information.\n        \"\"\"\n        if not intermediate_answers:\n            return \"No community answers were generated.\"\n\n        # Build aggregation context\n        parts = []\n        for ans in intermediate_answers:\n            parts.append(\n                f\"[Community {ans['community_id']} — \"\n                f\"Entities: {', '.join(ans['entities'])}]\\n\"\n                f\"{ans['answer']}\"\n            )\n\n        aggregation_context = \"\\n\\n\".join(parts)\n\n        reduce_prompt = f\"\"\"You are synthesizing answers from multiple knowledge graph communities.\nEach community provides a partial answer based on its local information.\n\nQUESTION: {query}\n\nCOMMUNITY ANSWERS:\n{aggregation_context}\n\nSynthesize a comprehensive answer that:\n1. Identifies common themes across communities\n2. Notes any unique insights from specific communities\n3. Resolves any contradictions\n4. Provides a unified, well-structured answer\n\nFINAL SYNTHESIZED ANSWER:\"\"\"\n        return self.model_fn(reduce_prompt)\n\n    def _extract_themes(self, intermediate_answers: List[Dict]) -> List[str]:\n        \"\"\"Extract key themes from intermediate answers.\"\"\"\n        themes = set()\n\n        for ans in intermediate_answers:\n            answer_text = ans.get(\"answer\", \"\").lower()\n            # Simple theme extraction by looking for repeated key terms\n            theme_candidates = [\n                \"community detection\", \"entity extraction\",\n                \"knowledge graph\", \"summarization\", \"retrieval\",\n                \"generation\", \"search\", \"hierarchical\",\n                \"temporal reasoning\", \"claim extraction\",\n            ]\n            for theme in theme_candidates:\n                if theme in answer_text:\n                    themes.add(theme)\n\n        return sorted(themes)\n\n    def _compute_confidence(self, answers: List[Dict]) -> float:\n        \"\"\"Compute confidence based on number and consistency of answers.\"\"\"\n        if not answers:\n            return 0.0\n\n        # More contributing communities = higher confidence\n        coverage = min(1.0, len(answers) / 3.0)\n\n        # Check answer diversity (more unique entities = richer answer)\n        all_entities = set()\n        for ans in answers:\n            all_entities.update(ans.get(\"entities\", []))\n        diversity = min(0.3, len(all_entities) * 0.05)\n\n        return round(min(1.0, coverage + diversity), 2)\n\n    def _mock_generate(self, prompt: str) -> str:\n        \"\"\"Mock LLM generation for demonstration.\"\"\"\n        if \"COMMUNITY ANSWER\" in prompt:\n            return (\n                \"This community centers on the core GraphRAG technology. \"\n                \"The key insight is the integration of community detection \"\n                \"with entity extraction to enable structured knowledge retrieval.\"\n            )\n        if \"FINAL SYNTHESIZED ANSWER\" in prompt:\n            return (\n                \"GraphRAG research focuses on three main themes:\\n\"\n                \"1. **Community Detection**: Using the Leiden algorithm to \"\n                \"organize entities into hierarchical communities.\\n\"\n                \"2. **Entity-Centric Organization**: Transforming flat text \"\n                \"into structured knowledge graphs with entity extraction.\\n\"\n                \"3. **Dual Search Paradigms**: Local search for entity-specific \"\n                \"queries and global search for thematic questions.\\n\\n\"\n                \"These themes work together to overcome limitations of \"\n                \"standard RAG for complex, multi-faceted questions.\"\n            )\n        return \"Generated answer based on provided context.\"\n\n# Demonstration\ndef demo_global_search():\n    \"\"\"Demonstrate global search across communities.\"\"\"\n    # Create sample community summaries\n    summaries = [\n        CommunitySummary(\n            community_id=0,\n            entities=[\"GraphRAG\", \"Leiden Algorithm\", \"Entity Extraction\"],\n            summary_text=\"GraphRAG core: a graph-based RAG system using \"\n                        \"the Leiden algorithm for hierarchical community \"\n                        \"detection and entity extraction from unstructured text.\",\n            key_topics=[\"GraphRAG\", \"community detection\", \"entity extraction\"],\n            relationships_summary=[\n                \"GraphRAG uses Leiden Algorithm\",\n                \"GraphRAG includes Entity Extraction\",\n            ],\n        ),\n        CommunitySummary(\n            community_id=1,\n            entities=[\"GPT-4\", \"Microsoft Research\", \"Azure OpenAI\"],\n            summary_text=\"Microsoft's AI infrastructure: GPT-4 powers \"\n                        \"summarization and generation. Microsoft Research \"\n                        \"leads innovation. Azure OpenAI provides deployment.\",\n            key_topics=[\"GPT-4\", \"Azure\", \"summarization\"],\n            relationships_summary=[\n                \"GraphRAG uses GPT-4\",\n                \"GraphRAG developed by Microsoft Research\",\n            ],\n        ),\n        CommunitySummary(\n            community_id=2,\n            entities=[\"Local Search\", \"Global Search\", \"Query Processing\"],\n            summary_text=\"Search paradigms in GraphRAG: local search for \"\n                        \"entity-grounded queries, global search for thematic \"\n                        \"questions using map-reduce over communities.\",\n            key_topics=[\"search\", \"local\", \"global\", \"map-reduce\"],\n            relationships_summary=[\n                \"GraphRAG supports Local Search\",\n                \"GraphRAG supports Global Search\",\n            ],\n        ),\n    ]\n\n    print(\"=== Global Search Demonstration ===\")\n    searcher = GlobalSearcher(community_summaries=summaries)\n\n    test_queries = [\n        \"What are the main research themes in GraphRAG?\",\n        \"How does GraphRAG handle different types of search?\",\n        \"What infrastructure supports GraphRAG deployment?\",\n    ]\n\n    for query in test_queries:\n        print(f\"\\n{'='*60}\")\n        print(f\"Query: {query}\")\n        print(f\"{'='*60}\")\n\n        result = searcher.search(query)\n\n        print(f\"\\nThemes Identified: {result.themes_identified}\")\n        print(f\"Contributing Communities: {result.supporting_communities}\")\n        print(f\"Confidence: {result.confidence}\")\n        print(f\"\\nFinal Answer:\\n{result.answer}\")\n        print(f\"\\nCommunity Contributions:\")\n        for contrib in result.community_contributions:\n            print(f\"  Comm {contrib['community_id']}: \"\n                  f\"{contrib['answer'][:80]}...\")\n\n    return searcher\n\nif __name__ == \"__main__\":\n    demo_global_search()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "146-covariate-refinement",
      children: "14.6 Covariate Refinement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Covariate refinement extracts structured claims with source attribution and temporal reasoning. This enables tracking how facts change over time."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Text Chunk] --> B[Claim Extraction]\n    B --> C[Subject-Object Pairing]\n    C --> D[Claim Type Classification]\n    D --> E[Source Attribution]\n    E --> F[Temporal Tagging]\n    F --> G[(Claim Store)]\n    G --> H[Temporal Query: \"What changed in 2024?\"]\n    H --> I[Compare Claims Over Time]\n    I --> J[Temporal Answer]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nGraphRAG: Covariate Refinement\nClaim extraction, source attribution, and temporal reasoning.\n\"\"\"\n\nfrom dataclasses import dataclass\nfrom typing import List, Dict, Optional, Set\nfrom datetime import datetime\nimport re\n\n@dataclass\nclass CovariateClaim:\n    \"\"\"A refined claim extracted from text with metadata.\"\"\"\n    claim_id: str\n    text: str\n    subject: str\n    predicate: str\n    obj: str\n    claim_type: str  # FACT, ATTRIBUTION, COMPARISON, TEMPORAL, CAUSAL\n    confidence: float\n    source_chunk: str\n    source_document: str\n    timestamp: Optional[str] = None\n    temporal_expression: Optional[str] = None\n    is_attributed: bool = False\n    attributed_source: Optional[str] = None\n\nclass CovariateExtractor:\n    \"\"\"\n    Extracts refined claims (covariates) from text chunks.\n    Handles source attribution, temporal expressions, and claim typing.\n    \"\"\"\n\n    def __init__(self, model_fn=None):\n        self.model_fn = model_fn or self._mock_extract_claims\n        self.temporal_patterns = [\n            r'\\b(in|during|since|before|after|until)\\s+(\\d{4})\\b',\n            r'\\b(January|February|March|April|May|June|July|August|September|'\n            r'October|November|December)\\s+\\d{1,2},?\\s+(\\d{4})\\b',\n            r'\\b(today|yesterday|currently|recently|previously|historically)\\b',\n        ]\n\n    def extract_claims(self, chunk: TextChunk) -> List[CovariateClaim]:\n        \"\"\"\n        Extract all claims from a text chunk with covariate metadata.\n        \"\"\"\n        # Use LLM for claim extraction (mocked here)\n        raw_claims = self.model_fn(chunk.text)\n\n        claims = []\n        for raw in raw_claims:\n            claim = self._refine_claim(raw, chunk)\n            claims.append(claim)\n\n        return claims\n\n    def _refine_claim(self, raw: Dict, chunk: TextChunk) -> CovariateClaim:\n        \"\"\"\n        Refine a raw extracted claim with additional metadata.\n        \"\"\"\n        subject = raw.get(\"subject\", \"unknown\")\n        predicate = raw.get(\"predicate\", \"is_related_to\")\n        obj = raw.get(\"object\", \"unknown\")\n\n        # Generate unique claim ID\n        claim_id = hashlib.md5(\n            f\"{chunk.chunk_id}:{subject}:{predicate}:{obj}\".encode()\n        ).hexdigest()[:12]\n\n        # Detect temporal expressions in the claim text\n        temporal = self._extract_temporal(raw.get(\"text\", \"\"))\n\n        # Check for source attribution\n        attribution = self._check_attribution(raw.get(\"text\", \"\"))\n\n        return CovariateClaim(\n            claim_id=claim_id,\n            text=raw.get(\"text\", \"\"),\n            subject=subject,\n            predicate=predicate,\n            obj=obj,\n            claim_type=raw.get(\"type\", \"FACT\"),\n            confidence=raw.get(\"confidence\", 0.8),\n            source_chunk=chunk.chunk_id,\n            source_document=chunk.source_doc,\n            timestamp=datetime.now().isoformat() if temporal[\"has_date\"] else None,\n            temporal_expression=temporal[\"expression\"],\n            is_attributed=attribution[\"is_attributed\"],\n            attributed_source=attribution[\"source\"],\n        )\n\n    def _extract_temporal(self, text: str) -> Dict:\n        \"\"\"Extract temporal expressions from claim text.\"\"\"\n        has_date = False\n        expression = None\n\n        for pattern in self.temporal_patterns:\n            match = re.search(pattern, text, re.IGNORECASE)\n            if match:\n                has_date = True\n                expression = match.group(0)\n                # Check for year pattern\n                year_match = re.search(r'\\b(\\d{4})\\b', text)\n                if year_match:\n                    expression = year_match.group(1)\n                break\n\n        return {\"has_date\": has_date, \"expression\": expression}\n\n    def _check_attribution(self, text: str) -> Dict:\n        \"\"\"Check if a claim includes source attribution.\"\"\"\n        attribution_patterns = [\n            r'(according\\s+to\\s+[\\w\\s]+)',\n            r'(\"[\\w\\s]+\"\\s+(said|stated|reported|claimed))',\n            r'(\\b\\w+\\s+(et\\s+al\\.|et al)\\s*\\(\\d{4}\\))',\n            r'(as\\s+reported\\s+by\\s+[\\w\\s]+)',\n            r'(cited\\s+in\\s+[\\w\\s]+)',\n        ]\n\n        for pattern in attribution_patterns:\n            match = re.search(pattern, text, re.IGNORECASE)\n            if match:\n                return {\"is_attributed\": True, \"source\": match.group(1)}\n\n        return {\"is_attributed\": False, \"source\": None}\n\n    def _mock_extract_claims(self, text: str) -> List[Dict]:\n        \"\"\"Mock LLM claim extraction for demonstration.\"\"\"\n        return [\n            {\n                \"text\": \"Microsoft Research introduced GraphRAG in 2024\",\n                \"subject\": \"Microsoft Research\",\n                \"predicate\": \"introduced\",\n                \"object\": \"GraphRAG\",\n                \"type\": \"TEMPORAL\",\n                \"confidence\": 0.95,\n            },\n            {\n                \"text\": \"GraphRAG uses the Leiden algorithm for community detection\",\n                \"subject\": \"GraphRAG\",\n                \"predicate\": \"uses\",\n                \"object\": \"Leiden algorithm\",\n                \"type\": \"FACT\",\n                \"confidence\": 0.9,\n            },\n            {\n                \"text\": \"According to Microsoft, GraphRAG achieves state-of-the-art results\",\n                \"subject\": \"GraphRAG\",\n                \"predicate\": \"achieves\",\n                \"object\": \"state-of-the-art results\",\n                \"type\": \"ATTRIBUTION\",\n                \"confidence\": 0.7,\n            },\n        ]\n\nclass CovariateStore:\n    \"\"\"\n    Stores and queries extracted claims (covariates).\n    Supports temporal reasoning and source attribution queries.\n    \"\"\"\n\n    def __init__(self):\n        self.claims: List[CovariateClaim] = []\n        self._subject_index: Dict[str, List[int]] = {}\n        self._type_index: Dict[str, List[int]] = {}\n\n    def add_claim(self, claim: CovariateClaim):\n        \"\"\"Add a claim and update indexes.\"\"\"\n        idx = len(self.claims)\n        self.claims.append(claim)\n\n        # Update subject index\n        subject_key = claim.subject.lower()\n        if subject_key not in self._subject_index:\n            self._subject_index[subject_key] = []\n        self._subject_index[subject_key].append(idx)\n\n        # Update type index\n        type_key = claim.claim_type\n        if type_key not in self._type_index:\n            self._type_index[type_key] = []\n        self._type_index[type_key].append(idx)\n\n    def add_claims(self, claims: List[CovariateClaim]):\n        \"\"\"Add multiple claims at once.\"\"\"\n        for claim in claims:\n            self.add_claim(claim)\n\n    def get_claims_about(self, subject: str) -> List[CovariateClaim]:\n        \"\"\"Retrieve all claims about a specific subject.\"\"\"\n        indices = self._subject_index.get(subject.lower(), [])\n        return [self.claims[i] for i in indices]\n\n    def get_claims_by_type(self, claim_type: str) -> List[CovariateClaim]:\n        \"\"\"Retrieve all claims of a specific type.\"\"\"\n        indices = self._type_index.get(claim_type, [])\n        return [self.claims[i] for i in indices]\n\n    def temporal_query(self, subject: str,\n                       before_year: Optional[int] = None,\n                       after_year: Optional[int] = None) -> List[CovariateClaim]:\n        \"\"\"\n        Perform a temporal query: find claims about a subject within\n        a specific time range.\n        \"\"\"\n        claims = self.get_claims_about(subject)\n        filtered = []\n\n        for claim in claims:\n            if not claim.timestamp:\n                continue\n\n            try:\n                claim_year = int(claim.timestamp[:4])\n            except (ValueError, TypeError):\n                continue\n\n            if before_year and claim_year >= before_year:\n                continue\n            if after_year and claim_year <= after_year:\n                continue\n\n            filtered.append(claim)\n\n        return filtered\n\n    def get_temporal_evolution(self, subject: str,\n                               predicate: Optional[str] = None) -> List[Dict]:\n        \"\"\"\n        Track how claims about a subject change over time.\n        Returns a timeline of claim changes.\n        \"\"\"\n        claims = self.get_claims_about(subject)\n\n        if predicate:\n            claims = [c for c in claims if c.predicate.lower() == predicate.lower()]\n\n        # Sort by timestamp if available\n        dated_claims = [c for c in claims if c.timestamp]\n        undated = [c for c in claims if not c.timestamp]\n\n        dated_claims.sort(key=lambda c: c.timestamp)  # type: ignore\n\n        timeline = []\n        for claim in dated_claims:\n            timeline.append({\n                \"timestamp\": claim.timestamp,\n                \"claim\": claim.text,\n                \"object\": claim.obj,\n                \"confidence\": claim.confidence,\n                \"source\": claim.source_document,\n            })\n\n        return timeline\n\n    def get_attributed_claims(self) -> List[CovariateClaim]:\n        \"\"\"Get all claims that include source attribution.\"\"\"\n        return [c for c in self.claims if c.is_attributed]\n\n    def deduplicate(self):\n        \"\"\"Remove duplicate claims (same subject, predicate, object).\"\"\"\n        seen: Set[Tuple[str, str, str]] = set()\n        unique = []\n\n        for claim in self.claims:\n            key = (claim.subject.lower(), claim.predicate.lower(),\n                   claim.obj.lower())\n            if key not in seen:\n                seen.add(key)\n                unique.append(claim)\n            else:\n                # Keep the one with higher confidence\n                for i, existing in enumerate(unique):\n                    existing_key = (\n                        existing.subject.lower(),\n                        existing.predicate.lower(),\n                        existing.obj.lower(),\n                    )\n                    if existing_key == key and claim.confidence > existing.confidence:\n                        unique[i] = claim\n                        break\n\n        self.claims = unique\n\n    def stats(self) -> Dict:\n        \"\"\"Return statistics about the claim store.\"\"\"\n        return {\n            \"total_claims\": len(self.claims),\n            \"by_type\": {\n                t: len(self.get_claims_by_type(t))\n                for t in set(c.claim_type for c in self.claims)\n            },\n            \"unique_subjects\": len(self._subject_index),\n            \"attributed_claims\": len(self.get_attributed_claims()),\n            \"claims_with_temporal\": sum(1 for c in self.claims if c.timestamp),\n        }\n\n# Demonstration\ndef demo_covariate_refinement():\n    \"\"\"Demonstrate covariate extraction and temporal reasoning.\"\"\"\n    print(\"=== Covariate Refinement Demonstration ===\\n\")\n\n    # Sample chunks\n    chunks = [\n        TextChunk(\n            chunk_id=\"chunk_001\",\n            text=(\"Microsoft Research introduced GraphRAG in 2024. \"\n                  \"According to the paper, GraphRAG uses the Leiden algorithm \"\n                  \"for community detection. The system achieves state-of-the-art \"\n                  \"results on complex Q&A tasks.\"),\n            source_doc=\"graphrag_paper.md\",\n            start_char=0,\n            end_char=200,\n        ),\n        TextChunk(\n            chunk_id=\"chunk_002\",\n            text=(\"In 2023, earlier RAG systems relied on flat vector search. \"\n                  \"GraphRAG improved upon this by adding entity-centric \"\n                  \"organization. Microsoft reported a 30% improvement in \"\n                  \"answer completeness.\"),\n            source_doc=\"rag_comparison.md\",\n            start_char=0,\n            end_char=180,\n        ),\n    ]\n\n    # Extract claims\n    extractor = CovariateExtractor()\n    store = CovariateStore()\n\n    for chunk in chunks:\n        claims = extractor.extract_claims(chunk)\n        store.add_claims(claims)\n        for claim in claims:\n            print(f\"Extracted Claim: {claim.text}\")\n            print(f\"  Type: {claim.claim_type}, Confidence: {claim.confidence}\")\n            if claim.is_attributed:\n                print(f\"  Attributed to: {claim.attributed_source}\")\n            if claim.temporal_expression:\n                print(f\"  Temporal: {claim.temporal_expression}\")\n            print()\n\n    # Store stats\n    print(f\"\\n=== Covariate Store Statistics ===\")\n    stats = store.stats()\n    for key, value in stats.items():\n        print(f\"  {key}: {value}\")\n\n    # Temporal evolution\n    print(f\"\\n=== Temporal Evolution of 'GraphRAG' Claims ===\")\n    evolution = store.get_temporal_evolution(\"GraphRAG\")\n    for entry in evolution:\n        print(f\"  [{entry['timestamp']}] {entry['claim']}\")\n\n    # Attributed claims\n    attributed = store.get_attributed_claims()\n    print(f\"\\n=== Attributed Claims ===\")\n    for claim in attributed:\n        print(f\"  \\\"{claim.text}\\\" — Source: {claim.attributed_source}\")\n\n    return store\n\nif __name__ == \"__main__\":\n    demo_covariate_refinement()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "147-end-to-end-graphrag-pipeline",
      children: "14.7 End-to-End GraphRAG Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The complete GraphRAG pipeline integrates all components: indexing, community detection, summarization, and search."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nGraphRAG: End-to-End Pipeline\nIntegrates indexing, community detection, summarization, local/global search.\n\"\"\"\n\nclass GraphRAGPipeline:\n    \"\"\"\n    Complete Microsoft GraphRAG pipeline.\n    Orchestrates indexing, community detection, summarization, and search.\n    \"\"\"\n\n    def __init__(\n        self,\n        chunk_size: int = 1200,\n        chunk_overlap: int = 200,\n        leiden_resolution: float = 1.0,\n    ):\n        # Indexing components\n        self.chunker = ChunkingStrategy(chunk_size, chunk_overlap)\n        self.extractor = EntityExtractor()\n        self.kg_builder = KnowledgeGraphBuilder()\n\n        # Community detection\n        self.community_detector = LeidenCommunityDetector(\n            resolution=leiden_resolution\n        )\n\n        # Summarization and search\n        self.summarizer = CommunitySummarizer()\n        self.local_searcher: Optional[LocalSearcher] = None\n        self.global_searcher: Optional[GlobalSearcher] = None\n\n        # Covariate refinement\n        self.covariate_extractor = CovariateExtractor()\n        self.covariate_store = CovariateStore()\n\n        # Pipeline state\n        self.indexed = False\n\n    def index_documents(self, documents: List[Dict[str, str]]):\n        \"\"\"\n        Full indexing pipeline: chunk → extract → build graph → detect\n        communities → summarize → extract covariates.\n        \"\"\"\n        print(\"=\" * 60)\n        print(\"Phase 1: Chunking Documents\")\n        print(\"=\" * 60)\n        all_chunks = []\n        for doc in documents:\n            chunks = self.chunker.chunk_document(doc[\"text\"], doc[\"source\"])\n            all_chunks.extend(chunks)\n        print(f\"  Created {len(all_chunks)} chunks from \"\n              f\"{len(documents)} documents\\n\")\n\n        print(\"=\" * 60)\n        print(\"Phase 2: Entity & Relationship Extraction\")\n        print(\"=\" * 60)\n        self.kg_builder.build_from_chunks(all_chunks, self.extractor)\n        graph = self.kg_builder.get_graph()\n        print(f\"  Graph: {graph.number_of_nodes()} entities, \"\n              f\"{graph.number_of_edges()} relationships\\n\")\n\n        print(\"=\" * 60)\n        print(\"Phase 3: Community Detection (Leiden Algorithm)\")\n        print(\"=\" * 60)\n        communities = self.community_detector.detect_communities(graph)\n        print(f\"  Found {len(communities)} communities\\n\")\n\n        for cid, members in communities.items():\n            print(f\"  Community {cid}: {len(members)} members\")\n            for m in members[:3]:\n                print(f\"    - {m}\")\n            if len(members) > 3:\n                print(f\"    ... and {len(members) - 3} more\")\n        print()\n\n        print(\"=\" * 60)\n        print(\"Phase 4: Community Summarization\")\n        print(\"=\" * 60)\n        all_relationships = [\n            {\"source\": u, \"target\": v,\n             \"relation\": data.get(\"relation\", \"related\"),\n             \"description\": data.get(\"description\", \"\")}\n            for u, v, data in graph.edges(data=True)\n        ]\n        summaries = self.summarizer.summarize_all_communities(\n            communities, all_relationships, graph\n        )\n        print(f\"  Generated {len(summaries)} community summaries\\n\")\n\n        print(\"=\" * 60)\n        print(\"Phase 5: Covariate Refinement\")\n        print(\"=\" * 60)\n        for chunk in all_chunks[:5]:\n            claims = self.covariate_extractor.extract_claims(chunk)\n            self.covariate_store.add_claims(claims)\n        print(f\"  Extracted {len(self.covariate_store.claims)} claims\\n\")\n        print(self.covariate_store.stats())\n\n        # Initialize searchers\n        self.local_searcher = LocalSearcher(\n            graph=graph,\n            communities=communities,\n            community_summaries=summaries,\n            entity_extractor=self.extractor,\n        )\n        self.global_searcher = GlobalSearcher(\n            community_summaries=summaries,\n        )\n\n        self.indexed = True\n        print(\"\\n✓ Indexing complete. Ready for search.\\n\")\n\n    def local_search(self, query: str) -> LocalSearchResult:\n        \"\"\"Execute a local search query.\"\"\"\n        if not self.indexed:\n            raise RuntimeError(\"Pipeline not indexed. Call index_documents first.\")\n        return self.local_searcher.search(query)\n\n    def global_search(self, query: str) -> GlobalSearchResult:\n        \"\"\"Execute a global search query.\"\"\"\n        if not self.indexed:\n            raise RuntimeError(\"Pipeline not indexed. Call index_documents first.\")\n        return self.global_searcher.search(query)\n\n    def temporal_query(self, subject: str, **kwargs) -> List[CovariateClaim]:\n        \"\"\"Query covariate store with temporal filters.\"\"\"\n        return self.covariate_store.temporal_query(subject, **kwargs)\n\n# Full demonstration\ndef demo_full_pipeline():\n    \"\"\"Complete end-to-end GraphRAG demonstration.\"\"\"\n    pipeline = GraphRAGPipeline(chunk_size=800, chunk_overlap=100)\n\n    documents = [\n        {\n            \"source\": \"graphrag_intro.md\",\n            \"text\": (\n                \"Microsoft Research introduced GraphRAG in 2024. \"\n                \"GraphRAG is a graph-based retrieval-augmented generation system. \"\n                \"It transforms unstructured text into knowledge graphs. \"\n                \"The system uses the Leiden algorithm for community detection. \"\n                \"Communities are summarized using GPT-4. \"\n                \"Local search answers entity-specific questions. \"\n                \"Global search answers thematic questions using map-reduce. \"\n                \"Covariate refinement extracts claims with source attribution.\"\n            ),\n        },\n        {\n            \"source\": \"rag_comparison.md\",\n            \"text\": (\n                \"Standard RAG uses vector similarity search on flat chunks. \"\n                \"GraphRAG extends this with entity-centric organization. \"\n                \"The knowledge graph captures entity relationships. \"\n                \"Community detection groups related entities together. \"\n                \"Each community gets a comprehensive summary. \"\n                \"This enables both local and global search capabilities. \"\n                \"Microsoft reported significant improvements on complex queries.\"\n            ),\n        },\n    ]\n\n    # Index documents\n    pipeline.index_documents(documents)\n\n    # Test local search\n    print(\"\\n\" + \"=\" * 60)\n    print(\"TESTING: Local Search\")\n    print(\"=\" * 60)\n    result = pipeline.local_search(\"How does GraphRAG use community detection?\")\n    print(f\"Answer: {result.answer[:200]}...\")\n    print(f\"Confidence: {result.confidence}\")\n\n    # Test global search\n    print(\"\\n\" + \"=\" * 60)\n    print(\"TESTING: Global Search\")\n    print(\"=\" * 60)\n    result = pipeline.global_search(\n        \"What are the key innovations of GraphRAG compared to standard RAG?\"\n    )\n    print(f\"Themes: {result.themes_identified}\")\n    print(f\"Answer: {result.answer[:300]}...\")\n\n    return pipeline\n\nif __name__ == \"__main__\":\n    pipeline = demo_full_pipeline()\n    print(\"\\n✓ GraphRAG Pipeline demonstrated successfully\")\n"
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
          children: "The indexing pipeline consists of five stages: (1) Text Chunking — documents are split into overlapping chunks, with variable sizes to respect entity boundaries, (2) Entity & Relationship Extraction — an LLM (typically GPT-4) extracts named entities and their relationships from each chunk, (3) Knowledge Graph Construction — extracted entities become nodes and relationships become edges in a NetworkX graph, (4) Leiden Community Detection — the graph is partitioned into hierarchical communities at multiple resolution levels, (5) Community Summarization — each community is summarized by an LLM, capturing key entities, relationships, and themes. Additionally, covariate refinement extracts structured claims with source attribution and temporal metadata. The entire pipeline runs offline; once index is built, query-time search is fast."
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
            children: "Explain the core idea of Microsoft GraphRAG in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Microsoft GraphRAG."
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
            children: "Describe a production bug caused by misunderstanding Microsoft GraphRAG. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Microsoft GraphRAG from 10 users to 10 million?"
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
            children: "Compare Microsoft GraphRAG with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Microsoft GraphRAG."
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
            children: "How would you make an implementation of Microsoft GraphRAG run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Microsoft GraphRAG that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Microsoft GraphRAG explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Microsoft GraphRAG\")."
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
        children: "Review complexity and edge cases for the classic Microsoft GraphRAG interview problem."
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
        }), " You should memorize the Microsoft GraphRAG chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "The time complexity of the standard approach to Microsoft GraphRAG is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Microsoft GraphRAG is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
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
          }), " Your implementation of Microsoft GraphRAG is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
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
          children: "What is the output of the simplest correct implementation of Microsoft GraphRAG on an empty input?"
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
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Microsoft GraphRAG"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Microsoft GraphRAG (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Microsoft GraphRAG problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Microsoft GraphRAG"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Microsoft GraphRAG"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Microsoft GraphRAG"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Microsoft GraphRAG fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Microsoft GraphRAG is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Microsoft GraphRAG is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Microsoft GraphRAG, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Microsoft GraphRAG asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
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
        children: "Never trust external input: validate and sanitize data before processing Microsoft GraphRAG."
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
        children: "Microsoft GraphRAG appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Microsoft GraphRAG helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Microsoft GraphRAG concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Microsoft GraphRAG skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Microsoft GraphRAG to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Microsoft GraphRAG is like a recipe"
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
        }), " — this chapter contributes the Microsoft GraphRAG skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
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
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
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
          children: "Check the Common Mistakes section of this chapter."
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
          children: "Refer to the theory and complexity analysis in this chapter."
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
          children: "Check the Limitations section of this chapter."
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
          children: "Check the Real-World Examples section of this chapter."
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
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The primary library used in this chapter (see the code examples)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python standard library modules used in the examples (check the imports)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing: pytest for unit tests of Microsoft GraphRAG code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Microsoft GraphRAG"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Microsoft GraphRAG code."]
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
        }), " or your IDE's debugger to step through the Microsoft GraphRAG example code."]
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
        children: "Explain Microsoft GraphRAG in 60 seconds."
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`python\nfrom typing import Any, Optional"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Microsoft GraphRAG."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Microsoft GraphRAG logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
          children: "Startup"
        }), ": a small team uses Microsoft GraphRAG daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Microsoft GraphRAG patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Microsoft GraphRAG principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Microsoft GraphRAG shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Microsoft GraphRAG to the business outcome, not just the code."]
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