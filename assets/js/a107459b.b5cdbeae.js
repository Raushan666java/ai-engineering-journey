"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[5938],{

/***/ 5315
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_22_advanced_ai_agents_03_user_memory_knowledge_bases_md_a10_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-22-advanced-ai-agents-03-user-memory-knowledge-bases-md-a10.json
const site_docs_courses_ai_engineering_placement_22_advanced_ai_agents_03_user_memory_knowledge_bases_md_a10_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/advanced-ai-agents/03-user-memory-knowledge-bases","title":"User Memory & Knowledge Bases","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/22-advanced-ai-agents/03-user-memory-knowledge-bases.md","sourceDirName":"courses/ai-engineering-placement/22-advanced-ai-agents","slug":"/ai-engineering-placement/22-advanced-ai-agents/03-user-memory-knowledge-bases","permalink":"/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/03-user-memory-knowledge-bases","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":274,"frontMatter":{"id":"03-user-memory-knowledge-bases","slug":"/ai-engineering-placement/22-advanced-ai-agents/03-user-memory-knowledge-bases","title":"User Memory & Knowledge Bases","sidebar_label":"User Memory & Knowledge Bases","sidebar_position":274},"sidebar":"placementSidebar","previous":{"title":"Context Engineering","permalink":"/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/02-context-engineering"},"next":{"title":"MCP Protocol & Tools","permalink":"/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/04-mcp-protocol-tools"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/22-advanced-ai-agents/03-user-memory-knowledge-bases.md


const frontMatter = {
	id: '03-user-memory-knowledge-bases',
	slug: '/ai-engineering-placement/22-advanced-ai-agents/03-user-memory-knowledge-bases',
	title: 'User Memory & Knowledge Bases',
	sidebar_label: 'User Memory & Knowledge Bases',
	sidebar_position: 274
};
const contentTitle = 'User Memory & Knowledge Bases';

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
  "value": "3.1 Memory Architecture",
  "id": "31-memory-architecture",
  "level": 2
}, {
  "value": "3.2 User Memory Systems",
  "id": "32-user-memory-systems",
  "level": 2
}, {
  "value": "3.3 Agentic RAG",
  "id": "33-agentic-rag",
  "level": 2
}, {
  "value": "3.4 Hybrid Retrieval",
  "id": "34-hybrid-retrieval",
  "level": 2
}, {
  "value": "3.5 Structured Indexes",
  "id": "35-structured-indexes",
  "level": 2
}, {
  "value": "RAPTOR (Recursive Abstractive Processing Tree)",
  "id": "raptor-recursive-abstractive-processing-tree",
  "level": 3
}, {
  "value": "GraphRAG",
  "id": "graphrag",
  "level": 3
}, {
  "value": "3.6 Contextual Retrieval",
  "id": "36-contextual-retrieval",
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
  "value": "Chapter Quiz (5 MCQ)",
  "id": "chapter-quiz-5-mcq",
  "level": 2
}, {
  "value": "Questions",
  "id": "questions",
  "level": 3
}, {
  "value": "Answers",
  "id": "answers",
  "level": 3
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Common Mistakes",
  "id": "common-mistakes",
  "level": 2
}, {
  "value": "Exercise 2: Agentic vs Passive RAG",
  "id": "exercise-2-agentic-vs-passive-rag",
  "level": 3
}, {
  "value": "Exercise 3: Hybrid Retrieval Benchmark",
  "id": "exercise-3-hybrid-retrieval-benchmark",
  "level": 3
}, {
  "value": "Exercise 4: RAPTOR Index Builder",
  "id": "exercise-4-raptor-index-builder",
  "level": 3
}, {
  "value": "Exercise 5: Contextual Retrieval A/B Test",
  "id": "exercise-5-contextual-retrieval-ab-test",
  "level": 3
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
        id: "user-memory--knowledge-bases",
        children: "User Memory & Knowledge Bases"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "LO"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design long-term user memory systems with episodic, semantic, and procedural stores"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement Agentic RAG where the agent drives iterative retrieval"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare dense, sparse, and hybrid retrieval strategies with neural re-ranking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build structured knowledge indexes including RAPTOR and GraphRAG"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement contextual retrieval with prefix generation for 49-67% failure reduction"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Advanced agents use context engineering, memory, and multi-agent collaboration to solve complex problems. This module covers cutting-edge agent patterns used at leading AI labs."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding user memory knowledge bases is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how user memory knowledge bases works in practice."
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
            children: "3.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Episodic, semantic, procedural memory stores"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User Memory Systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-session memory, personalization, memory evaluation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agentic RAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active retrieval loop vs passive one-shot retrieval"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid Retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dense + sparse + neural re-ranking fusion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured Indexes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAPTOR hierarchy, GraphRAG knowledge graphs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contextual Retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix summaries, 49-67% retrieval failure reduction"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    subgraph Memory[Memory System]\r\n        EP[Episodic: past sessions]\r\n        SM[Semantic: facts & knowledge]\r\n        PR[Procedural: how to use tools]\r\n    end\r\n    subgraph Retrieval[Retrieval Layer]\r\n        DENSE[Dense Embeddings]\r\n        SPARSE[Sparse BM25]\r\n        HYBRID[Hybrid Fusion]\r\n        RERANK[Neural Re-ranker]\r\n    end\r\n    subgraph Index[Structured Indexes]\r\n        RAP[RAPTOR Tree]\r\n        GRAPH[Knowledge Graph]\r\n    end\r\n    AGENT[Agent] --> Memory\r\n    AGENT --> Retrieval\r\n    AGENT --> Index\r\n    Memory --> Retrieval\r\n    Retrieval --> AGENT\r\n    Index --> AGENT"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "31-memory-architecture",
      children: "3.1 Memory Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agents require three types of memory, analogous to human memory systems."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface MemoryEntry {\r\n    id: string\r\n    content: string\r\n    timestamp: Date\r\n    metadata: Record<string, any>\r\n}\r\n\r\ninterface EpisodicMemory extends MemoryEntry {\r\n    sessionId: string\r\n    taskType: string\r\n    outcome: 'success' | 'failure' | 'partial'\r\n}\r\n\r\ninterface SemanticMemory extends MemoryEntry {\r\n    domain: string\r\n    confidence: number\r\n    source: string\r\n    lastAccessed: Date\r\n}\r\n\r\ninterface ProceduralMemory extends MemoryEntry {\r\n    toolName: string\r\n    steps: string[]\r\n    successRate: number\r\n    usageCount: number\r\n}\r\n\r\nclass MemoryStore {\r\n    private episodic: Map<string, EpisodicMemory[]> = new Map()\r\n    private semantic: Map<string, SemanticMemory[]> = new Map()\r\n    private procedural: Map<string, ProceduralMemory> = new Map()\r\n\r\n    storeEpisodic(memory: EpisodicMemory): void {\r\n        const key = memory.sessionId\r\n        if (!this.episodic.has(key)) this.episodic.set(key, [])\r\n        this.episodic.get(key)!.push(memory)\r\n    }\r\n\r\n    storeSemantic(memory: SemanticMemory): void {\r\n        const key = memory.domain\r\n        if (!this.semantic.has(key)) this.semantic.set(key, [])\r\n        this.semantic.get(key)!.push(memory)\r\n    }\r\n\r\n    storeProcedural(memory: ProceduralMemory): void {\r\n        this.procedural.set(memory.toolName, memory)\r\n    }\r\n\r\n    recallSession(sessionId: string): EpisodicMemory[] {\r\n        return this.episodic.get(sessionId) ?? []\r\n    }\r\n\r\n    recallDomain(domain: string): SemanticMemory[] {\r\n        const results = this.semantic.get(domain) ?? []\r\n        results.sort((a, b) => b.confidence - a.confidence)\r\n        return results.slice(0, 5)\r\n    }\r\n\r\n    recallProcedure(toolName: string): ProceduralMemory | undefined {\r\n        return this.procedural.get(toolName)\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\r\nfrom typing import List, Dict, Optional\r\nfrom datetime import datetime\r\n\r\n@dataclass\r\nclass MemoryEntry:\r\n    content: str\r\n    timestamp: datetime\r\n    metadata: Dict\r\n\r\nclass LongTermMemory:\r\n    \"\"\"Cross-session memory system with decay and consolidation.\"\"\"\r\n\r\n    def __init__(self, decay_hours: float = 72):\r\n        self.entries: List[MemoryEntry] = []\r\n        self.decay_hours = decay_hours\r\n\r\n    def add(self, content: str, metadata: Dict = None):\r\n        self.entries.append(MemoryEntry(\r\n            content=content,\r\n            timestamp=datetime.now(),\r\n            metadata=metadata or {},\r\n        ))\r\n\r\n    def retrieve(self, query: str, top_k: int = 5) -> List[MemoryEntry]:\r\n        now = datetime.now()\r\n        scored = []\r\n\r\n        for entry in self.entries:\r\n            age_hours = (now - entry.timestamp).total_seconds() / 3600\r\n            recency_score = 1.0 / (1.0 + age_hours / self.decay_hours)\r\n            keyword_score = sum(1 for word in query.split()\r\n                              if word.lower() in entry.content.lower())\r\n            scored.append((recency_score * 0.3 + keyword_score * 0.7, entry))\r\n\r\n        scored.sort(key=lambda x: -x[0])\r\n        return [entry for _, entry in scored[:top_k]]\r\n\r\n    def consolidate(self):\r\n        \"\"\"Merge similar entries to reduce memory size.\"\"\"\r\n        if len(self.entries) < 100:\r\n            return\r\n\r\n        merged = []\r\n        used = set()\r\n\r\n        for i, a in enumerate(self.entries):\r\n            if i in used:\r\n                continue\r\n            cluster = [a]\r\n            for j, b in enumerate(self.entries):\r\n                if j <= i or j in used:\r\n                    continue\r\n                overlap = len(set(a.content.split()) & set(b.content.split()))\r\n                total = len(set(a.content.split()) | set(b.content.split()))\r\n                similarity = overlap / total if total > 0 else 0\r\n                if similarity > 0.6:\r\n                    cluster.append(b)\r\n                    used.add(j)\r\n\r\n            merged_content = ' '.join(set(\r\n                ' '.join(e.content for e in cluster).split()\r\n            ))\r\n            merged_entry = MemoryEntry(\r\n                content=merged_content,\r\n                timestamp=cluster[0].timestamp,\r\n                metadata={'consolidated': len(cluster)},\r\n            )\r\n            merged.append(merged_entry)\r\n            used.add(i)\r\n\r\n        self.entries = merged\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "32-user-memory-systems",
      children: "3.2 User Memory Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Long-term user memory enables personalization across sessions."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface UserProfile {\r\n    id: string\r\n    preferences: Map<string, string>\r\n    interactionHistory: Interaction[]\r\n    skillLevel: Map<string, 'beginner' | 'intermediate' | 'advanced'>\r\n    commonErrors: string[]\r\n}\r\n\r\ninterface Interaction {\r\n    query: string\r\n    agentResponse: string\r\n    userFeedback: 'helpful' | 'unhelpful' | 'incorrect'\r\n    timestamp: Date\r\n}\r\n\r\nclass UserMemorySystem {\r\n    private profiles: Map<string, UserProfile> = new Map()\r\n\r\n    async getProfile(userId: string): Promise<UserProfile> {\r\n        if (this.profiles.has(userId)) return this.profiles.get(userId)!\r\n\r\n        const profile: UserProfile = {\r\n            id: userId,\r\n            preferences: new Map(),\r\n            interactionHistory: [],\r\n            skillLevel: new Map(),\r\n            commonErrors: []\r\n        }\r\n        this.profiles.set(userId, profile)\r\n        return profile\r\n    }\r\n\r\n    async recordInteraction(userId: string, interaction: Interaction): Promise<void> {\r\n        const profile = await this.getProfile(userId)\r\n        profile.interactionHistory.push(interaction)\r\n\r\n        // Update skill level based on interactions\r\n        if (interaction.userFeedback === 'incorrect') {\r\n            const errorPattern = this.extractErrorPattern(interaction)\r\n            profile.commonErrors.push(errorPattern)\r\n        }\r\n    }\r\n\r\n    async personalizePrompt(userId: string, basePrompt: string): Promise<string> {\r\n        const profile = await this.getProfile(userId)\r\n        const parts: string[] = [basePrompt]\r\n\r\n        if (profile.preferences.size > 0) {\r\n            const prefs = [...profile.preferences.entries()]\r\n                .map(([k, v]) => `${k}: ${v}`).join(', ')\r\n            parts.push(`\\nUser preferences: ${prefs}`)\r\n        }\r\n\r\n        if (profile.commonErrors.length > 0) {\r\n            const recentErrors = profile.commonErrors.slice(-3)\r\n            parts.push(`\\nAvoid these past errors: ${recentErrors.join('; ')}`)\r\n        }\r\n\r\n        return parts.join('\\n')\r\n    }\r\n\r\n    private extractErrorPattern(interaction: Interaction): string {\r\n        return interaction.query.slice(0, 100)\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "33-agentic-rag",
      children: "3.3 Agentic RAG"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Traditional RAG does a single retrieval pass. Agentic RAG lets the agent iteratively refine searches based on what it finds."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Document {\r\n    id: string\r\n    content: string\r\n    metadata: Record<string, any>\r\n}\r\n\r\ninterface RetrievalResult {\r\n    documents: Document[]\r\n    query: string\r\n    latencyMs: number\r\n}\r\n\r\nclass AgenticRAG {\r\n    constructor(\r\n        private retriever: Retriever,\r\n        private llm: LLMProvider,\r\n        private maxIterations: number = 5\r\n    ) {}\r\n\r\n    async query(userQuestion: string): Promise<string> {\r\n        let context = ''\r\n        let query = userQuestion\r\n        const visitedQueries = new Set<string>()\r\n\r\n        for (let i = 0; i < this.maxIterations; i++) {\r\n            if (visitedQueries.has(query)) break\r\n            visitedQueries.add(query)\r\n\r\n            const results = await this.retriever.retrieve(query)\r\n            context += results.documents.map(d => d.content).join('\\n')\r\n\r\n            const evaluation = await this.evaluateCompleteness(userQuestion, context)\r\n\r\n            if (evaluation.complete) {\r\n                return await this.generateAnswer(userQuestion, context)\r\n            }\r\n\r\n            query = evaluation.nextQuery\r\n        }\r\n\r\n        return await this.generateAnswer(userQuestion, context)\r\n    }\r\n\r\n    private async evaluateCompleteness(question: string, context: string): Promise<{\r\n        complete: boolean\r\n        nextQuery: string\r\n        missingInfo: string[]\r\n    }> {\r\n        const prompt = [\r\n            'Given the question and retrieved context, determine if the answer is complete.',\r\n            `Question: ${question}`,\r\n            `Context: ${context.slice(0, 2000)}`,\r\n            'If incomplete, suggest the next search query to fill gaps.',\r\n            'Respond in JSON: {\"complete\": bool, \"missing_info\": [], \"next_query\": \"\"}'\r\n        ].join('\\n')\r\n\r\n        // Mock evaluation\r\n        const missingInfo: string[] = []\r\n        if (!context.includes('specific')) missingInfo.push('specific details')\r\n        if (!context.includes('example')) missingInfo.push('concrete examples')\r\n\r\n        return {\r\n            complete: missingInfo.length === 0,\r\n            nextQuery: missingInfo.length > 0\r\n                ? `${question} ${missingInfo[0]}`\r\n                : '',\r\n            missingInfo\r\n        }\r\n    }\r\n\r\n    private async generateAnswer(question: string, context: string): Promise<string> {\r\n        const prompt = [\r\n            'Answer the question using the provided context.',\r\n            `Question: ${question}`,\r\n            `Context: ${context}`,\r\n            'Provide a clear, concise answer.'\r\n        ].join('\\n')\r\n        return this.llm.complete(prompt)\r\n    }\r\n}\r\n\r\ninterface Retriever {\r\n    retrieve(query: string): Promise<RetrievalResult>\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import List, Optional\r\nimport json\r\n\r\nclass AgenticRAG:\r\n    \"\"\"Agent-driven iterative retrieval that refines searches.\"\"\"\r\n\r\n    def __init__(self, vector_store, llm_fn, max_iterations=5):\r\n        self.store = vector_store\r\n        self.llm = llm_fn\r\n        self.max_iter = max_iterations\r\n\r\n    def query(self, question: str) -> str:\r\n        context_segments = []\r\n        query = question\r\n        visited = set()\r\n\r\n        for i in range(self.max_iter):\r\n            if query in visited:\r\n                break\r\n            visited.add(query)\r\n\r\n            results = self.store.search(query, top_k=3)\r\n            context_segments.extend(r['content'] for r in results)\r\n            context = '\\n'.join(context_segments)\r\n\r\n            # Check completeness\r\n            eval_prompt = f\"\"\"\r\n            Question: {question}\r\n            Context: {context[:1500]}\r\n            Is the answer complete? Reply JSON with complete (bool), missing_info (list), next_query (str).\r\n            \"\"\"\r\n            try:\r\n                eval_result = json.loads(self.llm(eval_prompt))\r\n            except:\r\n                eval_result = {'complete': True, 'missing_info': [], 'next_query': ''}\r\n\r\n            if eval_result.get('complete'):\r\n                answer_prompt = f\"Question: {question}\\nContext: {context}\\nAnswer:\"\r\n                return self.llm(answer_prompt)\r\n\r\n            query = eval_result.get('next_query', question)\r\n\r\n        answer_prompt = f\"Question: {question}\\nContext: {context}\\nAnswer with what you have:\"\r\n        return self.llm(answer_prompt)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "34-hybrid-retrieval",
      children: "3.4 Hybrid Retrieval"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hybrid retrieval combines dense embeddings (semantic understanding) with sparse retrieval (exact keyword matching) and neural re-ranking."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ScoredDocument {\r\n    doc: Document\r\n    score: number\r\n}\r\n\r\nclass DenseRetriever {\r\n    private documents: Map<string, number[]> = new Map()\r\n\r\n    async embed(text: string): Promise<number[]> {\r\n        // Mock embedding: use character codes as simple vectors\r\n        const vec = new Array(128).fill(0)\r\n        for (let i = 0; i < text.length; i++) {\r\n            vec[i % 128] += text.charCodeAt(i) / 255\r\n        }\r\n        const norm = Math.sqrt(vec.reduce((s, v) => s + v * v, 0))\r\n        return vec.map(v => v / norm)\r\n    }\r\n\r\n    async addDocument(doc: Document): Promise<void> {\r\n        const embedding = await this.embed(doc.content)\r\n        this.documents.set(doc.id, embedding)\r\n    }\r\n\r\n    async search(query: string, topK: number = 5): Promise<ScoredDocument[]> {\r\n        const queryEmb = await this.embed(query)\r\n        const results: ScoredDocument[] = []\r\n\r\n        for (const [id, docEmb] of this.documents) {\r\n            const score = this.cosineSimilarity(queryEmb, docEmb)\r\n            const doc: Document = {\r\n                id, content: '', metadata: {}\r\n            }\r\n            results.push({ doc, score })\r\n        }\r\n\r\n        results.sort((a, b) => b.score - a.score)\r\n        return results.slice(0, topK)\r\n    }\r\n\r\n    private cosineSimilarity(a: number[], b: number[]): number {\r\n        const dot = a.reduce((s, v, i) => s + v * b[i], 0)\r\n        const normA = Math.sqrt(a.reduce((s, v) => s + v * v, 0))\r\n        const normB = Math.sqrt(b.reduce((s, v) => s + v * v, 0))\r\n        return dot / (normA * normB)\r\n    }\r\n}\r\n\r\nclass BM25Retriever {\r\n    private documents: Map<string, string> = new Map()\r\n    private avgDocLength: number = 0\r\n    private k1: number = 1.5\r\n    private b: number = 0.75\r\n\r\n    addDocument(doc: Document): void {\r\n        this.documents.set(doc.id, doc.content)\r\n        this.avgDocLength = [...this.documents.values()]\r\n            .reduce((sum, d) => sum + d.split(' ').length, 0) / this.documents.size\r\n    }\r\n\r\n    search(query: string, topK: number = 5): ScoredDocument[] {\r\n        const queryTerms = query.toLowerCase().split(' ')\r\n        const results: ScoredDocument[] = []\r\n\r\n        for (const [id, content] of this.documents) {\r\n            let score = 0\r\n            const words = content.toLowerCase().split(' ')\r\n            const docLength = words.length\r\n\r\n            for (const term of queryTerms) {\r\n                const termInDoc = words.filter(w => w === term).length\r\n                const idf = Math.log((this.documents.size - 1) / 1 + 1)  // simplified\r\n                const numerator = termInDoc * (this.k1 + 1)\r\n                const denominator = termInDoc + this.k1 * (1 - this.b + this.b * docLength / this.avgDocLength)\r\n                score += idf * (numerator / denominator)\r\n            }\r\n\r\n            const doc: Document = { id, content, metadata: {} }\r\n            results.push({ doc, score })\r\n        }\r\n\r\n        results.sort((a, b) => b.score - a.score)\r\n        return results.slice(0, topK)\r\n    }\r\n}\r\n\r\nclass HybridRetriever {\r\n    constructor(\r\n        private dense: DenseRetriever,\r\n        private sparse: BM25Retriever,\r\n        private alpha: number = 0.5\r\n    ) {}\r\n\r\n    async search(query: string, topK: number = 5): Promise<ScoredDocument[]> {\r\n        const [denseResults, sparseResults] = await Promise.all([\r\n            this.dense.search(query, topK * 2),\r\n            Promise.resolve(this.sparse.search(query, topK * 2))\r\n        ])\r\n\r\n        // Reciprocal Rank Fusion\r\n        const scores = new Map<string, number>()\r\n\r\n        denseResults.forEach((r, i) => {\r\n            const rank = i + 1\r\n            scores.set(r.doc.id,\r\n                (scores.get(r.doc.id) ?? 0) + this.alpha * (1 / (60 + rank))\r\n            )\r\n        })\r\n\r\n        sparseResults.forEach((r, i) => {\r\n            const rank = i + 1\r\n            scores.set(r.doc.id,\r\n                (scores.get(r.doc.id) ?? 0) + (1 - this.alpha) * (1 / (60 + rank))\r\n            )\r\n        })\r\n\r\n        const ranked = [...scores.entries()]\r\n            .sort((a, b) => b[1] - a[1])\r\n            .slice(0, topK)\r\n\r\n        return ranked.map(([id]) => ({\r\n            doc: { id, content: '', metadata: {} },\r\n            score: scores.get(id) ?? 0\r\n        }))\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "35-structured-indexes",
      children: "3.5 Structured Indexes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "raptor-recursive-abstractive-processing-tree",
      children: "RAPTOR (Recursive Abstractive Processing Tree)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Builds a hierarchical index where leaf nodes are text chunks and higher levels are summaries."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface RAPTORNode {\r\n    id: string\r\n    content: string\r\n    level: number\r\n    children: string[]\r\n    summary?: string\r\n}\r\n\r\nclass RAPTORIndex {\r\n    private nodes: Map<string, RAPTORNode> = new Map()\r\n    private llm: (prompt: string) => string\r\n\r\n    constructor(llm: (p: string) => string) {\r\n        this.llm = llm\r\n    }\r\n\r\n    async build(chunks: string[]): Promise<void> {\r\n        // Level 0: raw chunks\r\n        chunks.forEach((content, i) => {\r\n            const id = `chunk_${i}`\r\n            this.nodes.set(id, {\r\n                id, content, level: 0, children: [], summary: undefined\r\n            })\r\n        })\r\n\r\n        let currentLevel = 0\r\n        let currentNodes = [...this.nodes.values()].filter(n => n.level === currentLevel)\r\n\r\n        while (currentNodes.length > 1) {\r\n            const nextLevel: RAPTORNode[] = []\r\n            for (let i = 0; i < currentNodes.length; i += 5) {\r\n                const group = currentNodes.slice(i, i + 5)\r\n                const combined = group.map(n => n.content).join('\\n')\r\n                const summary = this.summarize(combined)\r\n                const id = `level${currentLevel + 1}_group${Math.floor(i / 5)}`\r\n\r\n                const node: RAPTORNode = {\r\n                    id, content: combined,\r\n                    level: currentLevel + 1,\r\n                    children: group.map(n => n.id),\r\n                    summary\r\n                }\r\n                this.nodes.set(id, node)\r\n                nextLevel.push(node)\r\n            }\r\n            currentLevel++\r\n            currentNodes = nextLevel\r\n        }\r\n    }\r\n\r\n    async retrieve(query: string, topK: number = 3): Promise<string[]> {\r\n        // Start from top level, traverse down\r\n        const results: string[] = []\r\n        const candidates = [...this.nodes.values()]\r\n            .filter(n => n.level > 0)\r\n            .sort((a, b) => b.level - a.level)\r\n\r\n        for (const node of candidates.slice(0, topK)) {\r\n            results.push(node.summary ?? node.content)\r\n\r\n            // Include top children\r\n            const children = node.children\r\n                .slice(0, 3)\r\n                .map(id => this.nodes.get(id)?.content ?? '')\r\n            results.push(...children)\r\n        }\r\n\r\n        return results\r\n    }\r\n\r\n    private summarize(text: string): string {\r\n        const prompt = `Summarize the following text in 2-3 sentences:\\n${text}`\r\n        return this.llm(prompt)\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "graphrag",
      children: "GraphRAG"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Builds a knowledge graph from documents for structured retrieval."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface KnowledgeTriple {\r\n    subject: string\r\n    predicate: string\r\n    object: string\r\n    confidence: number\r\n}\r\n\r\nclass GraphRAGIndex {\r\n    private triples: KnowledgeTriple[] = []\r\n    private entities: Set<string> = new Set()\r\n\r\n    async build(documents: Document[]): Promise<void> {\r\n        for (const doc of documents) {\r\n            const extracted = await this.extractTriples(doc.content)\r\n            this.triples.push(...extracted)\r\n            extracted.forEach(t => {\r\n                this.entities.add(t.subject)\r\n                this.entities.add(t.object)\r\n            })\r\n        }\r\n    }\r\n\r\n    private async extractTriples(text: string): Promise<KnowledgeTriple[]> {\r\n        const prompt = `Extract knowledge triples (subject, predicate, object) from:\\n${text}\\nReturn as JSON array.`\r\n        // Mock extraction\r\n        return [\r\n            { subject: 'Python', predicate: 'is_a', object: 'programming language', confidence: 0.95 },\r\n            { subject: 'Python', predicate: 'used_for', object: 'machine learning', confidence: 0.9 }\r\n        ]\r\n    }\r\n\r\n    query(question: string): string[] {\r\n        const words = question.toLowerCase().split(' ')\r\n        const relevantEntities = [...this.entities]\r\n            .filter(e => words.some(w => e.toLowerCase().includes(w)))\r\n\r\n        const relevantTriples = this.triples\r\n            .filter(t => relevantEntities.includes(t.subject) || relevantEntities.includes(t.object))\r\n            .sort((a, b) => b.confidence - a.confidence)\r\n\r\n        return relevantTriples.map(t =>\r\n            `${t.subject} ${t.predicate} ${t.object}`\r\n        )\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "36-contextual-retrieval",
      children: "3.6 Contextual Retrieval"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Anthropic's contextual retrieval technique generates prefix summaries for each chunk to provide surrounding context, reducing retrieval failure by 49-67%."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ChunkWithContext {\r\n    content: string\r\n    prefixContext: string\r\n    source: string\r\n}\r\n\r\nclass ContextualRetriever {\r\n    constructor(private llm: (p: string) => string) {}\r\n\r\n    async augmentChunks(chunks: string[], fullDocument: string): Promise<ChunkWithContext[]> {\r\n        const augmented: ChunkWithContext[] = []\r\n\r\n        for (const chunk of chunks) {\r\n            const prefix = await this.generatePrefix(chunk, fullDocument)\r\n            augmented.push({\r\n                content: chunk,\r\n                prefixContext: prefix,\r\n                source: fullDocument.slice(0, 200)\r\n            })\r\n        }\r\n\r\n        return augmented\r\n    }\r\n\r\n    private async generatePrefix(chunk: string, document: string): Promise<string> {\r\n        const prompt = [\r\n            'Generate a brief prefix (1-2 sentences) that provides context for the following chunk.',\r\n            'The prefix should explain what this chunk is about and how it relates to the overall document.',\r\n            '',\r\n            `Document (first 500 chars): ${document.slice(0, 500)}`,\r\n            `Chunk: ${chunk}`,\r\n            '',\r\n            'Prefix:'\r\n        ].join('\\n')\r\n\r\n        const result = this.llm(prompt)\r\n        return result.trim()\r\n    }\r\n\r\n    search(query: string, chunks: ChunkWithContext[], topK: number = 3): ChunkWithContext[] {\r\n        const scored = chunks.map(chunk => {\r\n            const augmented = `${chunk.prefixContext}\\n${chunk.content}`\r\n            const queryWords = query.toLowerCase().split(' ')\r\n            const contentWords = augmented.toLowerCase()\r\n\r\n            const matchCount = queryWords.filter(w => contentWords.includes(w)).length\r\n            const score = matchCount / queryWords.length\r\n\r\n            return { chunk, score }\r\n        })\r\n\r\n        scored.sort((a, b) => b.score - a.score)\r\n        return scored.slice(0, topK).map(s => s.chunk)\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import List\r\n\r\nclass ContextualRetrieval:\r\n    \"\"\"Implements Anthropic's contextual retrieval technique.\"\"\"\r\n\r\n    def __init__(self, llm_fn):\r\n        self.llm = llm_fn\r\n\r\n    def generate_prefix(self, chunk: str, doc_context: str) -> str:\r\n        prompt = f\"\"\"\r\n        Document context: {doc_context[:400]}\r\n        Chunk: {chunk}\r\n        Generate a 1-2 sentence prefix that explains what this chunk is about.\r\n        Prefix:\r\n        \"\"\"\r\n        return self.llm(prompt).strip()\r\n\r\n    def augment_all(self, chunks: List[str], full_doc: str) -> List[dict]:\r\n        augmented = []\r\n        for chunk in chunks:\r\n            prefix = self.generate_prefix(chunk, full_doc)\r\n            augmented.append({\r\n                'prefix': prefix,\r\n                'content': chunk,\r\n                'augmented': f\"{prefix}\\n{chunk}\",\r\n            })\r\n        return augmented\r\n\r\n    def search(self, query: str, chunks: List[dict], top_k: int = 3) -> List[dict]:\r\n        query_words = set(query.lower().split())\r\n        scored = []\r\n\r\n        for chunk in chunks:\r\n            text = chunk['augmented'].lower()\r\n            matches = sum(1 for w in query_words if w in text)\r\n            scored.append((matches / len(query_words) if query_words else 0, chunk))\r\n\r\n        scored.sort(key=lambda x: -x[0])\r\n        return [c for _, c in scored[:top_k]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Memory is what separates stateless LLM calls from intelligent agents. Three memory stores (episodic, semantic, procedural) provide full coverage. Agentic RAG dramatically outperforms passive RAG by iteratively refining searches. Hybrid retrieval (dense + sparse + re-ranking) captures both semantic and.\r\nexact matches. Structured indexes (RAPTOR, GraphRAG) organize knowledge hierarchically. Contextual retrieval prefix generation reduces retrieval failure by 49-67%."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always implement all three memory types — episodic for sessions, semantic for facts, procedural for skills"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agentic RAG should be the default; passive RAG is only for simple lookup tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hybrid retrieval with RRF fusion beats either dense or sparse alone by 15-25%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use RAPTOR for document collections with clear hierarchy; use GraphRAG for entity-heavy domains"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contextual retrieval is the single highest-impact optimization — implement it before adding more data"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m22-s03-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What are the three types of agent memory and when is each one used?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Episodic memory stores past sessions and interactions with their outcomes (", (0,jsx_runtime.jsx)(_components.code, {
            children: "sessionId"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "taskType"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "success/failure"
          }), "); semantic memory stores facts and knowledge about the user or domain with a confidence score; procedural memory stores how to use tools — steps, success rate, and usage count. The ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MemoryStore"
          }), " keys each type differently (session, domain, tool name) so retrieval picks the right store: recall a session, recall the top-5 facts for a domain, or recall the best procedure for a tool. This is what separates stateless LLM calls from intelligent agents."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": How would you handle memory decay and consolidation as the store grows?"]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m22-s03-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How does Agentic RAG differ from traditional or passive RAG?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Passive RAG does a single retrieval pass: embed the query, fetch top-k chunks, generate. Agentic RAG puts the agent in a loop — it retrieves, asks an LLM to evaluate whether the accumulated context is complete (", (0,jsx_runtime.jsx)(_components.code, {
            children: "{\"complete\": bool, \"missing_info\": [], \"next_query\": \"\"}"
          }), "), and if not, issues a refined follow-up query to fill the gaps. It tracks visited queries to avoid infinite loops and caps iterations at ", (0,jsx_runtime.jsx)(_components.code, {
            children: "maxIterations"
          }), ". This iterative refinement is why Agentic RAG dramatically outperforms passive RAG on multi-step research questions, and the chapter recommends it as the default."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": How do you decide when to stop retrieving and answer with what you have?"]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m22-s03-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: Explain hybrid retrieval with Reciprocal Rank Fusion — why is it better than dense or sparse alone?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Dense retrieval (embeddings, cosine similarity) captures semantic similarity but misses exact keyword matches; sparse retrieval (", (0,jsx_runtime.jsx)(_components.code, {
            children: "BM25"
          }), ") nails exact terms and rare identifiers but has no semantics. A ", (0,jsx_runtime.jsx)(_components.code, {
            children: "HybridRetriever"
          }), " runs both, each returning 2x top-k, and fuses them with Reciprocal Rank Fusion: each result contributes ", (0,jsx_runtime.jsx)(_components.code, {
            children: "alpha / (60 + rank)"
          }), " from dense and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "(1 - alpha) / (60 + rank)"
          }), " from sparse. RRF uses rank position, not raw score magnitude, so neither system dominates. The chapter reports hybrid with RRF beats either alone by 15-25%, and neural re-ranking can further sharpen the top results."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": How would you tune the alpha weight for a code-heavy vs prose-heavy corpus?"]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m22-s03-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: Compare RAPTOR and GraphRAG — when would you pick each structured index?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["RAPTOR (Recursive Abstractive Processing Tree) builds a hierarchy: level 0 is raw text chunks, and each higher level summarizes groups of ~5 children, so retrieval can start from summarized levels and drill into children. GraphRAG instead extracts knowledge triples (", (0,jsx_runtime.jsx)(_components.code, {
            children: "subject, predicate, object"
          }), ") from documents and answers by matching query entities to relevant triples, sorted by confidence. RAPTOR fits document collections with clear hierarchy (textbooks, technical docs); GraphRAG fits entity-heavy domains where relationships matter (medical literature, legal documents)."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": What happens to RAPTOR retrieval quality when chunks are already highly similar?"]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m22-s03-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: What is contextual retrieval and why does it reduce retrieval failure by 49-67%?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Contextual retrieval is Anthropic's technique of generating a 1-2 sentence prefix for each chunk that explains what the chunk is about and how it relates to the whole document, then storing ", (0,jsx_runtime.jsx)(_components.code, {
            children: "prefix + content"
          }), " as the retrievable unit. Chunks alone are often ambiguous out of context — the prefix restores that context so the retriever can match queries that reference entities or events only described elsewhere in the document. Anthropic reported a 49-67% reduction in retrieval failures from this step, making it the highest-impact optimization in the chapter before adding more data."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": What is the cost of contextual prefixes at index time, and how do you batch it?"]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m22-s03-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How would you build and evaluate a user memory system for personalization?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
            children: "UserMemorySystem"
          }), " keeps a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "UserProfile"
          }), " per user: preferences, interaction history with feedback (", (0,jsx_runtime.jsx)(_components.code, {
            children: "helpful/unhelpful/incorrect"
          }), "), skill level, and common errors. Each interaction updates the profile, and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "personalizePrompt()"
          }), " injects preferences and recent past errors into the base prompt before the LLM call. To evaluate it you measure personalization lift: does task success or user feedback improve with memory enabled vs disabled, run as an A/B test across users. You must also handle decay (the chapter's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "LongTermMemory"
          }), " uses a 72-hour recency decay) and consolidation to keep the store bounded."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": What privacy considerations does storing user memory raise?"]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz-5-mcq",
      children: "Chapter Quiz (5 MCQ)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "questions",
      children: "Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "1. What are the three types of agent memory?"
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "2. How does Agentic RAG differ from traditional RAG?"
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "3. What fusion method does HybridRetriever use to combine dense and sparse scores?"
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "4. What is the reduction in retrieval failure rate from contextual retrieval?"
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "5. When should you use GraphRAG over RAPTOR?"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "answers",
      children: "Answers"
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "Episodic (past interactions/sessions), Semantic (facts and knowledge), Procedural (how to use tools and perform tasks)."
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "Agentic RAG uses the agent's reasoning to iteratively refine search queries based on what it finds. Traditional RAG does a single retrieval pass and cannot follow up on missing information."
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "Reciprocal Rank Fusion (RRF). Each system's ranked results contribute a score of 1/(60 + rank), weighted by alpha. This prevents any single system from dominating based on raw score magnitude."
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "49-67% reduction. Adding a 1-2 sentence prefix context to each chunk before retrieval dramatically improves the retriever's ability to match relevant chunks to queries."
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "GraphRAG is better for entity-heavy domains where relationships between concepts matter (e.g., medical literature, legal documents). RAPTOR is better for hierarchical content (e.g., textbooks, technical documentation)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not understanding the fundamental concepts before applying them"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skipping edge cases in implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not analyzing time/space complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forgetting to handle null/empty inputs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not practicing enough problems to build pattern recognition### Exercise 1: Triple Memory Store"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement a system that stores episodic, semantic, and procedural memories separately and retrieves the right type based on a user query."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-agentic-vs-passive-rag",
      children: "Exercise 2: Agentic vs Passive RAG"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build both versions and compare on 10 questions requiring multi-step research. Measure answer quality and number of retrieval steps."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-hybrid-retrieval-benchmark",
      children: "Exercise 3: Hybrid Retrieval Benchmark"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Benchmark dense-only, sparse-only, and hybrid retrieval on 20 test queries. Report precision@5 for each."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-raptor-index-builder",
      children: "Exercise 4: RAPTOR Index Builder"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Take 20 text chunks, build a RAPTOR index, and compare retrieval quality against flat chunk search."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-contextual-retrieval-ab-test",
      children: "Exercise 5: Contextual Retrieval A/B Test"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Split 100 chunks into two groups — with and without contextual prefixes. Run 50 queries and measure retrieval failure rate for ea"
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
            children: "How does User Memory & Knowledge Bases behave differently at scale — memory, throughput, or precision-wise?"
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
        children: "Name the technique explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using User Memory & Knowledge Bases\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies User Memory & Knowledge Bases to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside User Memory & Knowledge Bases (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of User Memory & Knowledge Bases and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a User Memory & Knowledge Bases-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic problem in this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply User Memory & Knowledge Bases in production today?"
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
        }), " User Memory & Knowledge Bases builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for User Memory & Knowledge Bases before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for User Memory & Knowledge Bases is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for User Memory & Knowledge Bases in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "The chapter that covers User Memory & Knowledge Bases is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 03 User Memory Knowledge Bases is ___. — Answer: O(k) per tool call where k=tool latency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 03 User Memory Knowledge Bases is ___. — Answer: infinite loops, tool failures, context overflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug User Memory & Knowledge Bases issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to User Memory & Knowledge Bases in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving User Memory & Knowledge Bases that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
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
          }), " A new hire asks you to explain User Memory & Knowledge Bases in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for User Memory & Knowledge Bases and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
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
            children: "Complete Medium exercises, explain User Memory & Knowledge Bases to someone else"
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
        children: "Always write a one-line example of User Memory & Knowledge Bases from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered User Memory & Knowledge Bases when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining User Memory & Knowledge Bases twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own User Memory & Knowledge Bases snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of User Memory & Knowledge Bases listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link User Memory & Knowledge Bases to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of User Memory & Knowledge Bases by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain User Memory & Knowledge Bases to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Yao et al. (2022) 'ReAct: Synergizing Reasoning and Acting in Language Models' — the foundational ReAct paper"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shinn et al. (2023) 'Reflexion: Language Agents with Verbal Reinforcement Learning'"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["LangGraph documentation: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://langchain-ai.github.io/langgraph",
          children: "https://langchain-ai.github.io/langgraph"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["OpenAI function calling guide: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://platform.openai.com/docs/guides/function-calling",
          children: "https://platform.openai.com/docs/guides/function-calling"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'Building LLM Powered Applications' by Valentina Alto (Packt) Memory & Knowledge Bases"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 22 — builds the foundation for 03 User Memory Knowledge Bases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 03 User Memory Knowledge Bases with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 03 User Memory Knowledge Bases fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 03 User Memory Knowledge Bases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 03 User Memory Knowledge Bases"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 03 User Memory Knowledge Bases?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 03 User Memory Knowledge Bases?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 03 User Memory Knowledge Bases asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 03 User Memory Knowledge Bases?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User Memory & Knowledge Bases is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with User Memory & Knowledge Bases."
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
        children: "User Memory & Knowledge Bases emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for User Memory & Knowledge Bases today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about User Memory & Knowledge Bases — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around User Memory & Knowledge Bases changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate all tool inputs with JSON Schema before execution — LLMs can generate malformed arguments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement tool-level permissions — agents should not have access to destructive operations (DELETE, DROP TABLE) without human approval"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log every tool call with inputs and outputs for audit trails"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use sandboxed execution environments for code-running agents (Docker containers, E2B)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement prompt injection defenses — malicious tool outputs can hijack agent behavior"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The agent loop is a form of test-time compute scaling — more steps = more reasoning capacity at inference time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tool selection is a classification problem: the LLM assigns probability to each tool given the current context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory compression (summarizing old steps) is analogous to attention truncation in transformers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent success rate improves with better system prompts — treat the system prompt as a hyperparameter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-agent systems parallelize reasoning the same way distributed computing parallelizes computation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "03 User Memory Knowledge Bases is like a GPS navigation system"
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
          }), " — this chapter contributes the User Memory & Knowledge Bases skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-03usermemoryknowledgebases-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of User Memory & Knowledge Bases in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "An AI agent is an autonomous system that uses an LLM as its reasoning engine to perceive inputs, decide actions, call tools, observe results, and iterate until a task is complete."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-03usermemoryknowledgebases-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with \n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Most common agent mistake: no max_steps limit causes infinite loops. Always set max_steps=10-20 and handle the timeout case explicitly with a fallback response."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-03usermemoryknowledgebases-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard User Memory & Knowledge Bases approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Agent complexity: O(k * t) where k=steps taken, t=average tool latency. Each LLM call is O(n^2) attention over context. Total cost grows linearly with steps."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-03usermemoryknowledgebases-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is User Memory & Knowledge Bases NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Agents are NOT the right choice when: (1) a single LLM call suffices, (2) deterministic pipelines are required, (3) latency < 500ms is needed, (4) the task has no external tool requirements."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-03usermemoryknowledgebases-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is User Memory & Knowledge Bases applied in a real production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Production agent stack: LangGraph for stateful workflows, OpenAI function calling or Anthropic tool use for structured tool invocation, LangSmith for tracing and debugging."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for User Memory & Knowledge Bases (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing User Memory & Knowledge Bases (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for User Memory & Knowledge Bases-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running User Memory & Knowledge Bases in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LangGraph"
        }), " — stateful multi-step agent framework"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LangChain AgentExecutor"
        }), " — ReAct agent implementation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OpenAI Assistants API"
        }), " — managed agent with code interpreter and file search"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LangSmith"
        }), " — agent tracing, debugging, and evaluation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Anthropic tool use"
        }), " — Claude's native function calling interface Memory & Knowledge Bases"]
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
        }), ": Add structured logging at each stage of the 03 User Memory Knowledge Bases pipeline to identify exactly where the failure occurs."]
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
        children: "Write a minimal working example of User Memory & Knowledge Bases."
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
        children: "Tell me about a time you debugged a User Memory & Knowledge Bases problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where User Memory & Knowledge Bases is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_03_user_memory_knowledge_bases(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 03 User Memory Knowledge Bases.\r\n\r\n    Key concepts: tools, memory, planning, execution, observation\r\n    Complexity: O(k) per tool call where k=tool latency\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 03 User Memory Knowledge Bases here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain User Memory & Knowledge Bases without notes"
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
          children: "Devin"
        }), " (Cognition AI) uses a coding agent that writes, runs, and debugs code autonomously"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cursor"
        }), " uses agents to refactor entire codebases based on natural language instructions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Salesforce Einstein"
        }), " uses agents to autonomously update CRM records and draft emails"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Harvey AI"
        }), " uses legal agents that research case law, draft contracts, and flag risks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": always mention the ReAct loop (Thought → Action → Observation) and explain how you'd add observability with LangSmith traces"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/04-mcp-protocol-tools",
        children: "MCP Protocol & Tools"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User Memory & Knowledge Bases, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of User Memory & Knowledge Bases depends on input size and distribution — always benchmark for your own data."
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