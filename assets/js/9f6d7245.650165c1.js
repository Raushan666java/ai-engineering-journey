"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[76562],{

/***/ 30309
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_22_advanced_ai_agents_04_mcp_protocol_tools_md_9f6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-22-advanced-ai-agents-04-mcp-protocol-tools-md-9f6.json
const site_docs_courses_ai_engineering_placement_22_advanced_ai_agents_04_mcp_protocol_tools_md_9f6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/advanced-ai-agents/04-mcp-protocol-tools","title":"MCP Protocol & Tools","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/22-advanced-ai-agents/04-mcp-protocol-tools.md","sourceDirName":"courses/ai-engineering-placement/22-advanced-ai-agents","slug":"/ai-engineering-placement/22-advanced-ai-agents/04-mcp-protocol-tools","permalink":"/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/04-mcp-protocol-tools","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":275,"frontMatter":{"id":"04-mcp-protocol-tools","slug":"/ai-engineering-placement/22-advanced-ai-agents/04-mcp-protocol-tools","title":"MCP Protocol & Tools","sidebar_label":"MCP Protocol & Tools","sidebar_position":275},"sidebar":"placementSidebar","previous":{"title":"User Memory & Knowledge Bases","permalink":"/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/03-user-memory-knowledge-bases"},"next":{"title":"Coding Agents","permalink":"/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/05-coding-agents"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/22-advanced-ai-agents/04-mcp-protocol-tools.md


const frontMatter = {
	id: '04-mcp-protocol-tools',
	slug: '/ai-engineering-placement/22-advanced-ai-agents/04-mcp-protocol-tools',
	title: 'MCP Protocol & Tools',
	sidebar_label: 'MCP Protocol & Tools',
	sidebar_position: 275
};
const contentTitle = 'MCP Protocol & Tools';

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
  "value": "4.1 MCP Architecture",
  "id": "41-mcp-architecture",
  "level": 2
}, {
  "value": "4.2 Implementing an MCP Server",
  "id": "42-implementing-an-mcp-server",
  "level": 2
}, {
  "value": "4.3 Tool Design Patterns",
  "id": "43-tool-design-patterns",
  "level": 2
}, {
  "value": "4.4 Event-Driven Async Agents",
  "id": "44-event-driven-async-agents",
  "level": 2
}, {
  "value": "4.5 Active Tool Selection",
  "id": "45-active-tool-selection",
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
  "value": "Exercise 2: MCP Client",
  "id": "exercise-2-mcp-client",
  "level": 3
}, {
  "value": "Exercise 3: Event-Driven Agent",
  "id": "exercise-3-event-driven-agent",
  "level": 3
}, {
  "value": "Exercise 4: Tool Selector",
  "id": "exercise-4-tool-selector",
  "level": 3
}, {
  "value": "Exercise 5: Safety Comparison",
  "id": "exercise-5-safety-comparison",
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
        id: "mcp-protocol--tools",
        children: "MCP Protocol & Tools"
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
            children: "Understand the Model Context Protocol (MCP) architecture and transport layer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement MCP servers exposing tools, resources, and prompts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design perception, execution, and collaboration tool categories"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build event-driven async agents using the MCP protocol"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement active tool selection and dynamic tool loading"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Advanced agents use context engineering, memory, and multi-agent collaboration to solve complex problems. This module covers cutting-edge agent patterns used at leading AI labs."
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
      children: "Understanding mcp protocol tools is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how mcp protocol tools works in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "MCP Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host ↔ Client ↔ Server, transport, lifecycle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementing an MCP Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tools, Resources, Prompts as MCP primitives"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool Design Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perception, Execution, Collaboration categories"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event-Driven Async Agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FastAPI, event queue, interrupt mechanism"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active Tool Selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic tool discovery, selection, composition"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Host[Host Application]\n        AGENT[Agent] --> CLIENT[MCP Client]\n        CLIENT --> AGENT\n    end\n    subgraph Transport[Transport Layer]\n        CLIENT -->|JSON-RPC| SERVER[MCP Server]\n        SERVER -->|Response| CLIENT\n    end\n    subgraph Server[MCP Server]\n        TOOLS[Tools]\n        RES[Resources]\n        PROMPTS[Prompts]\n    end\n    SERVER --> TOOLS\n    SERVER --> RES\n    SERVER --> PROMPTS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "41-mcp-architecture",
      children: "4.1 MCP Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Model Context Protocol is an open protocol for connecting LLMs to external tools and data sources. It follows a client-server architecture with three core primitives: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tools"
      }), " (actions), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resources"
      }), " (data), and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prompts"
      }), " (templates)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Core MCP types\ninterface MCPRequest {\n    jsonrpc: '2.0'\n    id: string\n    method: string\n    params?: Record<string, any>\n}\n\ninterface MCPResponse {\n    jsonrpc: '2.0'\n    id: string\n    result?: any\n    error?: { code: number; message: string }\n}\n\n// MCP Primitives\ninterface MCPTool {\n    name: string\n    description: string\n    inputSchema: Record<string, any>\n    handler: (args: Record<string, any>) => Promise<any>\n}\n\ninterface MCPResource {\n    uri: string\n    name: string\n    description: string\n    mimeType: string\n    read: () => Promise<string>\n}\n\ninterface MCPPrompt {\n    name: string\n    description: string\n    arguments: Array<{ name: string; description: string; required: boolean }>\n    template: string\n}\n\nclass MCPServer {\n    private tools: Map<string, MCPTool> = new Map()\n    private resources: Map<string, MCPResource> = new Map()\n    private prompts: Map<string, MCPPrompt> = new Map()\n\n    registerTool(tool: MCPTool): void {\n        this.tools.set(tool.name, tool)\n    }\n\n    registerResource(resource: MCPResource): void {\n        this.resources.set(resource.uri, resource)\n    }\n\n    registerPrompt(prompt: MCPPrompt): void {\n        this.prompts.set(prompt.name, prompt)\n    }\n\n    async handleRequest(req: MCPRequest): Promise<MCPResponse> {\n        try {\n            switch (req.method) {\n                case 'tools/list':\n                    return {\n                        jsonrpc: '2.0', id: req.id,\n                        result: [...this.tools.values()].map(t => ({\n                            name: t.name,\n                            description: t.description,\n                            inputSchema: t.inputSchema\n                        }))\n                    }\n\n                case 'tools/call': {\n                    const tool = this.tools.get(req.params?.name)\n                    if (!tool) throw new Error(`Tool not found: ${req.params?.name}`)\n                    const result = await tool.handler(req.params?.arguments ?? {})\n                    return { jsonrpc: '2.0', id: req.id, result }\n                }\n\n                case 'resources/list':\n                    return {\n                        jsonrpc: '2.0', id: req.id,\n                        result: [...this.resources.values()].map(r => ({\n                            uri: r.uri, name: r.name,\n                            description: r.description, mimeType: r.mimeType\n                        }))\n                    }\n\n                case 'prompts/get': {\n                    const prompt = this.prompts.get(req.params?.name)\n                    if (!prompt) throw new Error(`Prompt not found: ${req.params?.name}`)\n                    return {\n                        jsonrpc: '2.0', id: req.id,\n                        result: { template: prompt.template }\n                    }\n                }\n\n                default:\n                    return {\n                        jsonrpc: '2.0', id: req.id,\n                        error: { code: -32601, message: `Method not found: ${req.method}` }\n                    }\n            }\n        } catch (err: any) {\n            return {\n                jsonrpc: '2.0', id: req.id,\n                error: { code: -32000, message: err.message }\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\nfrom typing import Dict, Any, Callable, Awaitable\nimport json\n\n@dataclass\nclass MCPTool:\n    name: str\n    description: str\n    input_schema: Dict\n    handler: Callable[[Dict], Awaitable[Any]]\n\n@dataclass\nclass MCPResource:\n    uri: str\n    name: str\n    description: str\n    mime_type: str = \"text/plain\"\n    reader: Callable[[], Awaitable[str]] = None\n\n@dataclass\nclass MCPServer:\n    tools: Dict[str, MCPTool] = field(default_factory=dict)\n    resources: Dict[str, MCPResource] = field(default_factory=dict)\n\n    def add_tool(self, tool: MCPTool):\n        self.tools[tool.name] = tool\n\n    def add_resource(self, resource: MCPResource):\n        self.resources[resource.uri] = resource\n\n    async def handle(self, request: Dict) -> Dict:\n        method = request.get(\"method\")\n        params = request.get(\"params\", {})\n        req_id = request.get(\"id\", 0)\n\n        if method == \"tools/list\":\n            return {\n                \"jsonrpc\": \"2.0\", \"id\": req_id,\n                \"result\": [\n                    {\"name\": t.name, \"description\": t.description,\n                     \"input_schema\": t.input_schema}\n                    for t in self.tools.values()\n                ]\n            }\n\n        elif method == \"tools/call\":\n            tool = self.tools.get(params.get(\"name\"))\n            if not tool:\n                return {\"jsonrpc\": \"2.0\", \"id\": req_id,\n                        \"error\": {\"code\": -32000, \"message\": \"Tool not found\"}}\n            try:\n                result = await tool.handler(params.get(\"arguments\", {}))\n                return {\"jsonrpc\": \"2.0\", \"id\": req_id, \"result\": result}\n            except Exception as e:\n                return {\"jsonrpc\": \"2.0\", \"id\": req_id,\n                        \"error\": {\"code\": -32000, \"message\": str(e)}}\n\n        return {\"jsonrpc\": \"2.0\", \"id\": req_id,\n                \"error\": {\"code\": -32601, \"message\": f\"Unknown method: {method}\"}}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "42-implementing-an-mcp-server",
      children: "4.2 Implementing an MCP Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A production MCP server exposes tools (callable functions), resources (data access), and prompts (templates) through a unified JSON-RPC interface."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Perception Tools\nclass PerceptionTools {\n    webSearch(): MCPTool {\n        return {\n            name: 'web_search',\n            description: 'Search the web for current information',\n            inputSchema: {\n                type: 'object',\n                properties: {\n                    query: { type: 'string', description: 'Search query' },\n                    maxResults: { type: 'number', default: 5 }\n                },\n                required: ['query']\n            },\n            handler: async (args) => {\n                const { query, maxResults = 5 } = args\n                return {\n                    results: Array.from({ length: maxResults }, (_, i) => ({\n                        title: `Result ${i + 1} for ${query}`,\n                        url: `https://example.com/result${i}`,\n                        snippet: `This is a mock search result for \"${query}\".`\n                    }))\n                }\n            }\n        }\n    }\n\n    readFile(): MCPTool {\n        return {\n            name: 'read_file',\n            description: 'Read a file from the local filesystem',\n            inputSchema: {\n                type: 'object',\n                properties: {\n                    path: { type: 'string', description: 'File path' }\n                },\n                required: ['path']\n            },\n            handler: async (args) => {\n                return { content: `Mock content of ${args.path}` }\n            }\n        }\n    }\n\n    httpFetch(): MCPTool {\n        return {\n            name: 'http_fetch',\n            description: 'Fetch a URL and return its content',\n            inputSchema: {\n                type: 'object',\n                properties: {\n                    url: { type: 'string', description: 'URL to fetch' }\n                },\n                required: ['url']\n            },\n            handler: async (args) => {\n                // Mock fetch\n                return {\n                    status: 200,\n                    headers: { 'content-type': 'text/html' },\n                    body: `<html><body>Mock content of ${args.url}</body></html>`\n                }\n            }\n        }\n    }\n}\n\n// Execution Tools (with safety mechanisms)\nclass ExecutionTools {\n    codeInterpreter(): MCPTool {\n        return {\n            name: 'code_interpreter',\n            description: 'Execute Python code in a sandboxed environment',\n            inputSchema: {\n                type: 'object',\n                properties: {\n                    code: { type: 'string', description: 'Python code to execute' },\n                    timeout: { type: 'number', default: 30 }\n                },\n                required: ['code']\n            },\n            handler: async (args) => {\n                // Sandboxed execution (mock)\n                const { code, timeout = 30 } = args\n                return {\n                    stdout: `Mock output of:\\n${code.slice(0, 100)}...`,\n                    stderr: '',\n                    exitCode: 0,\n                    executionTime: `${timeout}ms`\n                }\n            }\n        }\n    }\n\n    fileOperation(): MCPTool {\n        let approvalRequired = true\n\n        return {\n            name: 'file_operation',\n            description: 'Read, write, or delete files',\n            inputSchema: {\n                type: 'object',\n                properties: {\n                    operation: {\n                        type: 'string',\n                        enum: ['read', 'write', 'delete'],\n                        description: 'File operation'\n                    },\n                    path: { type: 'string' },\n                    content: { type: 'string' }\n                },\n                required: ['operation', 'path']\n            },\n            handler: async (args) => {\n                if (approvalRequired && args.operation !== 'read') {\n                    return {\n                        status: 'approval_required',\n                        message: `Request to ${args.operation} ${args.path}. Admin approval needed.`\n                    }\n                }\n                return { status: 'ok', path: args.path, operation: args.operation }\n            }\n        }\n    }\n\n    shellCommand(): MCPTool {\n        return {\n            name: 'shell',\n            description: 'Execute a shell command',\n            inputSchema: {\n                type: 'object',\n                properties: {\n                    command: { type: 'string' },\n                    args: { type: 'array', items: { type: 'string' } },\n                    timeout: { type: 'number', default: 10 }\n                },\n                required: ['command']\n            },\n            handler: async (args) => {\n                const dangerous = ['rm', 'sudo', 'dd', 'mkfs', ':(){ :|:& };:']\n                for (const d of dangerous) {\n                    if (args.command.includes(d)) {\n                        return {\n                            status: 'blocked',\n                            message: `Command contains dangerous pattern: ${d}`\n                        }\n                    }\n                }\n                return {\n                    status: 'completed',\n                    stdout: `Mock output of \"${args.command}\"`,\n                    exitCode: 0\n                }\n            }\n        }\n    }\n}\n\n// Collaboration Tools\nclass CollaborationTools {\n    browserAutomation(): MCPTool {\n        return {\n            name: 'browser_automation',\n            description: 'Control a browser to navigate, click, and extract data',\n            inputSchema: {\n                type: 'object',\n                properties: {\n                    url: { type: 'string' },\n                    action: { type: 'string', enum: ['navigate', 'click', 'extract', 'screenshot'] },\n                    selector: { type: 'string' }\n                },\n                required: ['url', 'action']\n            },\n            handler: async (args) => {\n                return {\n                    status: 'ok',\n                    screenshot: `mock_screenshot_${Date.now()}.png`,\n                    pageTitle: `Mock Page: ${args.url}`,\n                    extractedData: args.selector ? `Data from ${args.selector}` : null\n                }\n            }\n        }\n    }\n\n    notify(): MCPTool {\n        return {\n            name: 'notify',\n            description: 'Send notifications via email, Slack, Telegram, or Discord',\n            inputSchema: {\n                type: 'object',\n                properties: {\n                    channel: {\n                        type: 'string',\n                        enum: ['email', 'slack', 'telegram', 'discord']\n                    },\n                    message: { type: 'string' },\n                    recipient: { type: 'string' }\n                },\n                required: ['channel', 'message']\n            },\n            handler: async (args) => {\n                return {\n                    status: 'sent',\n                    channel: args.channel,\n                    messageId: `msg_${Date.now()}`\n                }\n            }\n        }\n    }\n\n    humanInTheLoop(): MCPTool {\n        return {\n            name: 'human_review',\n            description: 'Ask a human for approval or input',\n            inputSchema: {\n                type: 'object',\n                properties: {\n                    request: { type: 'string', description: 'What to ask the human' },\n                    context: { type: 'string', description: 'Background information' }\n                },\n                required: ['request']\n            },\n            handler: async (args) => {\n                return {\n                    status: 'awaiting_human',\n                    request: args.request,\n                    context: args.context,\n                    waitTime: 'Human notified. Response pending...'\n                }\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "43-tool-design-patterns",
      children: "4.3 Tool Design Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tools fall into three categories with distinct design considerations."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type ToolCategory = 'perception' | 'execution' | 'collaboration'\n\ninterface ToolDesignGuide {\n    category: ToolCategory\n    safetyLevel: 'low' | 'medium' | 'high'\n    validationRequired: boolean\n    approvalDefault: boolean\n    errorRecovery: string\n}\n\nconst toolGuidelines: Record<ToolCategory, ToolDesignGuide> = {\n    perception: {\n        category: 'perception',\n        safetyLevel: 'low',\n        validationRequired: false,\n        approvalDefault: false,\n        errorRecovery: 'Retry with backoff, return partial results'\n    },\n    execution: {\n        category: 'execution',\n        safetyLevel: 'high',\n        validationRequired: true,\n        approvalDefault: true,\n        errorRecovery: 'Sandbox isolation, automatic rollback on failure'\n    },\n    collaboration: {\n        category: 'collaboration',\n        safetyLevel: 'medium',\n        validationRequired: true,\n        approvalDefault: false,\n        errorRecovery: 'Retry with timeout, escalate to human'\n    }\n}\n\nclass ToolValidator {\n    validate(args: Record<string, any>, schema: Record<string, any>): string[] {\n        const errors: string[] = []\n        const required = schema.required ?? []\n\n        for (const field of required) {\n            if (args[field] === undefined || args[field] === null) {\n                errors.push(`Missing required field: ${field}`)\n            }\n        }\n\n        const props = schema.properties ?? {}\n        for (const [key, value] of Object.entries(args)) {\n            const propSchema = props[key]\n            if (propSchema?.type === 'string' && typeof value !== 'string') {\n                errors.push(`Field ${key} must be a string`)\n            }\n            if (propSchema?.type === 'number' && typeof value !== 'number') {\n                errors.push(`Field ${key} must be a number`)\n            }\n        }\n\n        return errors\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "44-event-driven-async-agents",
      children: "4.4 Event-Driven Async Agents"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern agents use event-driven architectures for non-blocking operation and real-time responsiveness."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type EventType = 'user_message' | 'tool_result' | 'timer' | 'system' | 'interrupt'\ntype Priority = 'critical' | 'high' | 'normal' | 'low'\n\ninterface AgentEvent {\n    id: string\n    type: EventType\n    priority: Priority\n    data: Record<string, any>\n    timestamp: number\n}\n\nclass AsyncEventAgent {\n    private eventQueue: AgentEvent[] = []\n    private processing = false\n    private currentTask: string | null = null\n\n    async emit(event: AgentEvent): Promise<void> {\n        const insertionIndex = this.eventQueue.findIndex(e => {\n            const p = { critical: 0, high: 1, normal: 2, low: 3 }\n            return p[e.priority] > p[event.priority]\n        })\n\n        if (insertionIndex === -1) {\n            this.eventQueue.push(event)\n        } else {\n            this.eventQueue.splice(insertionIndex, 0, event)\n        }\n\n        if (!this.processing) {\n            this.processing = true\n            await this.processQueue()\n        }\n    }\n\n    private async processQueue(): Promise<void> {\n        while (this.eventQueue.length > 0) {\n            const event = this.eventQueue.shift()!\n\n            if (event.type === 'interrupt') {\n                this.currentTask = null\n                continue\n            }\n\n            this.currentTask = event.id\n            await this.handleEvent(event)\n        }\n\n        this.processing = false\n        this.currentTask = null\n    }\n\n    private async handleEvent(event: AgentEvent): Promise<void> {\n        switch (event.type) {\n            case 'user_message':\n                await this.handleUserMessage(event.data)\n                break\n            case 'tool_result':\n                await this.handleToolResult(event.data)\n                break\n            case 'timer':\n                await this.handleTimer(event.data)\n                break\n            case 'system':\n                await this.handleSystemEvent(event.data)\n                break\n        }\n    }\n\n    private async handleUserMessage(data: Record<string, any>): Promise<void> {\n        const message = data.message || ''\n        // Process message with LLM, emit tool calls as events\n        await this.emit({\n            id: crypto.randomUUID(),\n            type: 'tool_result',\n            priority: 'normal',\n            data: { tool: 'llm_processor', result: `Processed: ${message.slice(0, 50)}` },\n            timestamp: Date.now()\n        })\n    }\n\n    private async handleToolResult(data: Record<string, any>): Promise<void> {\n        // Tool results feed back into the reasoning loop\n        console.log(`Tool ${data.tool} returned:`, data.result)\n    }\n\n    private async handleTimer(data: Record<string, any>): Promise<void> {\n        // Scheduled tasks\n        console.log(`Timer triggered: ${data.name}`)\n    }\n\n    private async handleSystemEvent(data: Record<string, any>): Promise<void> {\n        // System events like config changes, health checks\n        console.log(`System event: ${data.type}`)\n    }\n\n    status(): {\n        queueLength: number\n        processing: boolean\n        currentTask: string | null\n    } {\n        return {\n            queueLength: this.eventQueue.length,\n            processing: this.processing,\n            currentTask: this.currentTask\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import asyncio\nfrom dataclasses import dataclass, field\nfrom typing import Dict, List, Optional\nfrom enum import Enum\nimport uuid\nimport json\n\nclass Priority(Enum):\n    CRITICAL = 0\n    HIGH = 1\n    NORMAL = 2\n    LOW = 3\n\n@dataclass\nclass Event:\n    id: str = field(default_factory=lambda: str(uuid.uuid4()))\n    type: str = \"user_message\"\n    priority: Priority = Priority.NORMAL\n    data: Dict = field(default_factory=dict)\n    timestamp: float = field(default_factory=lambda: __import__('time').time())\n\nclass AsyncEventAgent:\n    \"\"\"Event-driven async agent with priority queue and interrupt support.\"\"\"\n\n    def __init__(self):\n        self.queue: List[Event] = []\n        self.processing = False\n        self.current_task: Optional[str] = None\n\n    async def emit(self, event: Event):\n        idx = 0\n        while idx < len(self.queue) and self.queue[idx].priority.value <= event.priority.value:\n            idx += 1\n        self.queue.insert(idx, event)\n\n        if not self.processing:\n            self.processing = True\n            await self._process_queue()\n\n    async def _process_queue(self):\n        while self.queue:\n            event = self.queue.pop(0)\n            if event.type == 'interrupt':\n                self.current_task = None\n                continue\n            self.current_task = event.id\n            await self._handle(event)\n        self.processing = False\n        self.current_task = None\n\n    async def _handle(self, event: Event):\n        print(f\"[{event.type}] Processing event {event.id[:8]}...\")\n\n        if event.type == 'tool_call':\n            await asyncio.sleep(0.1)  # Simulate tool execution\n            await self.emit(Event(\n                type='tool_result',\n                priority=Priority.NORMAL,\n                data={'tool': event.data.get('name'), 'result': 'done'}\n            ))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "45-active-tool-selection",
      children: "4.5 Active Tool Selection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Instead of calling all tools, the agent actively selects the most appropriate tools based on task requirements."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ToolCapability {\n    name: string\n    inputTypes: string[]\n    outputTypes: string[]\n    estimatedCostPerCall: number\n    avgLatencyMs: number\n    requiredPermissions: string[]\n}\n\nclass ActiveToolSelector {\n    private toolCapabilities: Map<string, ToolCapability> = new Map()\n\n    registerCapability(tool: string, cap: ToolCapability): void {\n        this.toolCapabilities.set(tool, cap)\n    }\n\n    selectTools(task: string, constraints: {\n        maxBudget?: number\n        maxLatencyMs?: number\n        requiredPermissions?: string[]\n    }): string[] {\n        const taskWords = task.toLowerCase().split(' ')\n        const scored = [...this.toolCapabilities.entries()].map(([name, cap]) => {\n            let score = 0\n\n            // Match input types to task\n            const taskDataTypes = this.inferDataTypes(task)\n            for (const t of taskDataTypes) {\n                if (cap.inputTypes.includes(t)) score += 2\n            }\n\n            // Match output types\n            if (task.includes('search') && cap.outputTypes.includes('web_results')) score += 3\n            if (task.includes('code') && cap.outputTypes.includes('code')) score += 3\n            if (task.includes('file') && cap.inputTypes.includes('file')) score += 3\n\n            // Apply constraints\n            if (constraints.maxBudget && cap.estimatedCostPerCall > constraints.maxBudget) score -= 10\n            if (constraints.maxLatencyMs && cap.avgLatencyMs > constraints.maxLatencyMs) score -= 5\n            if (constraints.requiredPermissions) {\n                const missing = constraints.requiredPermissions\n                    .filter(p => !cap.requiredPermissions.includes(p))\n                score -= missing.length * 3\n            }\n\n            return { name, score }\n        })\n\n        return scored\n            .sort((a, b) => b.score - a.score)\n            .filter(s => s.score > 0)\n            .slice(0, 3)\n            .map(s => s.name)\n    }\n\n    private inferDataTypes(task: string): string[] {\n        const types: string[] = []\n        if (task.includes('image') || task.includes('picture')) types.push('image')\n        if (task.includes('file') || task.includes('document')) types.push('file')\n        if (task.includes('url') || task.includes('http')) types.push('url')\n        if (task.includes('number') || task.includes('calculate')) types.push('number')\n        if (task.includes('text') || task.includes('string')) types.push('text')\n        return types\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MCP is the emerging standard for agent-tool communication. The three primitives — tools (actions), resources (data), prompts (templates) — cover all agent needs. Tool design follows three patterns (perception,.\nexecution, collaboration) with distinct safety requirements. Event-driven architectures enable non-blocking, interruptible agent operation. Active tool selection optimizes cost and latency by choosing tools dynamically based on task requirements."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always expose tools through MCP — it's protocol-agnostic and future-proof"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow the three-category tool design: perception (read), execution (write), collaboration (coordinate)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execution tools need sandboxing + approval + rollback; perception tools only need validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Event-driven agents scale better than synchronous ReAct loops"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Active tool selection can reduce costs by 40-60% vs calling all tools"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m22-s04-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What is MCP and how does it differ from plain function calling?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The Model Context Protocol is an open protocol for connecting LLMs to external tools and data sources. Plain function calling is a model-API convention where the model outputs a structured call and your code resolves it locally; MCP standardizes the whole integration — discovery, invocation, and data access — so any MCP-compatible client can talk to any MCP server without custom glue code. Instead of one function per integration, an MCP server registers ", (0,jsx_runtime.jsx)(_components.code, {
            children: "tools"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "resources"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "prompts"
          }), " behind a unified ", (0,jsx_runtime.jsx)(_components.code, {
            children: "JSON-RPC 2.0"
          }), " interface (", (0,jsx_runtime.jsx)(_components.code, {
            children: "tools/list"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "tools/call"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "resources/list"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "prompts/get"
          }), "), making it protocol-agnostic and future-proof."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": When would you still prefer plain function calling over an MCP server?"]
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
      "data-qid": "m22-s04-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: Explain the MCP client-server architecture and its transport layer.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["MCP follows a three-party architecture: the host application (e.g., an agent) embeds one or more MCP clients, and each client maintains a session with one MCP server over a transport. The server exposes its capabilities, and the client discovers them and forwards calls to the model. The transport is JSON-RPC 2.0 messages, and it is transport-agnostic — stdio (stdin/stdout) for local servers, or HTTP/SSE for remote servers. The ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MCPServer.handleRequest()"
          }), " switch in the chapter routes methods like ", (0,jsx_runtime.jsx)(_components.code, {
            children: "tools/list"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "tools/call"
          }), " and returns JSON-RPC responses or error codes such as ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-32601"
          }), " (method not found)."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": What happens on the client when a server goes away mid-session?"]
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
      "data-qid": "m22-s04-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What primitives does an MCP server expose and how are they used?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["An MCP server exposes three core primitives. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Tools"
          }), " are callable actions with a name, description, and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "inputSchema"
          }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
            children: "web_search"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "read_file"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "code_interpreter"
          }), "); the model calls them via ", (0,jsx_runtime.jsx)(_components.code, {
            children: "tools/call"
          }), ". ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Resources"
          }), " are data access points addressed by URI with a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "mimeType"
          }), " and a read function — files, database rows, or API responses the model can pull in. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Prompts"
          }), " are reusable templates with typed arguments that the client can render for the user or the model. Together they cover the three things an agent needs: act, read data, and follow structured workflows."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": Why use a resource instead of a tool for reading a file?"]
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
      "data-qid": "m22-s04-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: What are the three tool categories and what safety requirements does each have?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Perception tools (search, read file, HTTP fetch) read information — low safety level, no approval by default, recover by retrying with backoff. Execution tools (code interpreter, file operations, shell) modify system state — high safety: input validation required, approval by default, sandbox isolation and automatic rollback on failure. The chapter's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "shell"
          }), " tool blocks dangerous patterns like ", (0,jsx_runtime.jsx)(_components.code, {
            children: "rm"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sudo"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "mkfs"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "file_operation"
          }), " returns ", (0,jsx_runtime.jsx)(_components.code, {
            children: "approval_required"
          }), " for writes and deletes. Collaboration tools (browser automation, notify, human review) coordinate with the world — medium safety: validation required, retry with timeout, escalate to a human."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": How would you audit which tools a model actually used after a task?"]
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
      "data-qid": "m22-s04-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How does an event-driven async agent work and how does it handle interrupts?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Instead of a blocking ReAct loop, an ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AsyncEventAgent"
          }), " maintains a priority queue of events (", (0,jsx_runtime.jsx)(_components.code, {
            children: "user_message"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "tool_result"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "timer"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "system"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "interrupt"
          }), ") with priorities ", (0,jsx_runtime.jsx)(_components.code, {
            children: "critical/high/normal/low"
          }), ". Events are inserted in priority order, and a single processing loop drains the queue without blocking on any single event. An ", (0,jsx_runtime.jsx)(_components.code, {
            children: "interrupt"
          }), " event is special: when processed, it clears ", (0,jsx_runtime.jsx)(_components.code, {
            children: "currentTask"
          }), " and continues, canceling ongoing work so urgent requests preempt it. Event-driven agents scale better than synchronous ReAct loops because tool calls run asynchronously and the queue keeps the agent responsive."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": How do you prevent priority inversion when a high-priority event waits on a low-priority tool result?"]
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
      "data-qid": "m22-s04-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: What is active tool selection and how does it reduce cost and latency?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Active tool selection picks the relevant subset of tools per task instead of exposing all descriptions to the LLM. The ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ActiveToolSelector"
          }), " registers a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ToolCapability"
          }), " per tool (input/output types, estimated cost per call, average latency, required permissions) and scores tools against the task: +2 for matching input types, +3 for matching output types, and penalties for exceeding budget, latency, or permission constraints. It returns the top 3 scored tools. This reduces the prompt size the model must parse and avoids calling tools that can't help — the chapter reports 40-60% cost reduction versus calling all tools."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": What risk does tool selection introduce when a task needs a tool you didn't select?"]
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
      children: "1. What are the three core primitives of the MCP protocol?"
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "2. Which tool category requires sandbox isolation and approval by default?"
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "3. How does an event-driven agent handle interrupts?"
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "4. What is the purpose of active tool selection?"
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "5. What transport protocol does MCP use for client-server communication?"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "answers",
      children: "Answers"
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "Tools (callable actions), Resources (data access), Prompts (templates)."
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "Execution tools. They modify system state (write files, execute code, run shell commands) and need sandboxing, input validation, and admin approval for destructive operations."
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "When an interrupt event arrives (highest priority), the agent clears the current task and skips to the next event in the queue. This allows urgent requests to cancel ongoing processing."
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "To dynamically choose the optimal subset of tools based on task requirements, reducing cost and latency. Instead of registering 50 tools and letting the LLM parse all descriptions, the selector picks 3-5 relevant tools."
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "JSON-RPC 2.0 over stdin/stdout (local) or HTTP/SSE (remote). The protocol is transport-agnostic."
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
        children: "Not practicing enough problems to build pattern recognition### Exercise 1: Build an MCP Server"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create an MCP server with at least 3 tools spanning perception, execution, and collaboration categories."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-mcp-client",
      children: "Exercise 2: MCP Client"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write an MCP client that connects to a server, lists available tools, and calls one with arguments."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-event-driven-agent",
      children: "Exercise 3: Event-Driven Agent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build an async agent with an event queue that can handle interrupts. Simulate a high-priority event arriving mid-task."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-tool-selector",
      children: "Exercise 4: Tool Selector"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a tool selector that takes a task description and returns the top 3 most relevant tools from a registry of 15."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-safety-comparison",
      children: "Exercise 5: Safety Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compare a tool system without validation vs one with sandboxing, approval, and rollback. Show 3 scenarios where safety"
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
            children: "Explain the core idea of MCP Protocol & Tools in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates MCP Protocol & Tools."
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
            children: "Describe a production bug caused by misunderstanding MCP Protocol & Tools. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on MCP Protocol & Tools from 10 users to 10 million?"
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
            children: "Compare MCP Protocol & Tools with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on MCP Protocol & Tools."
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
            children: "How does MCP Protocol & Tools behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of MCP Protocol & Tools run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of MCP Protocol & Tools that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name MCP Protocol & Tools explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using MCP Protocol & Tools\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies MCP Protocol & Tools to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside MCP Protocol & Tools (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of MCP Protocol & Tools and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a MCP Protocol & Tools-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic MCP Protocol & Tools interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply MCP Protocol & Tools in production today?"
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
        }), " MCP Protocol & Tools builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for MCP Protocol & Tools before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for MCP Protocol & Tools is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for MCP Protocol & Tools in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the MCP Protocol & Tools chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers MCP Protocol & Tools is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to MCP Protocol & Tools is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing MCP Protocol & Tools is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug MCP Protocol & Tools issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to MCP Protocol & Tools in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving MCP Protocol & Tools that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of MCP Protocol & Tools is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain MCP Protocol & Tools in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for MCP Protocol & Tools and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of MCP Protocol & Tools on an empty input?"
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
            children: "Complete Medium exercises, explain MCP Protocol & Tools to someone else"
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
        children: "Always write a one-line example of MCP Protocol & Tools from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered MCP Protocol & Tools when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining MCP Protocol & Tools twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own MCP Protocol & Tools snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of MCP Protocol & Tools listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link MCP Protocol & Tools to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of MCP Protocol & Tools by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain MCP Protocol & Tools to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of MCP Protocol & Tools"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on MCP Protocol & Tools (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real MCP Protocol & Tools problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements MCP Protocol & Tools"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for MCP Protocol & Tools"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on MCP Protocol & Tools"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how MCP Protocol & Tools fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how MCP Protocol & Tools is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where MCP Protocol & Tools is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of MCP Protocol & Tools, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is MCP Protocol & Tools asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MCP Protocol & Tools is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with MCP Protocol & Tools."
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
        children: "MCP Protocol & Tools emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for MCP Protocol & Tools today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about MCP Protocol & Tools — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around MCP Protocol & Tools changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing MCP Protocol & Tools."
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
        children: "MCP Protocol & Tools appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding MCP Protocol & Tools helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the MCP Protocol & Tools concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, MCP Protocol & Tools skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply MCP Protocol & Tools to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MCP Protocol & Tools is like a recipe"
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
        }), " — this chapter contributes the MCP Protocol & Tools skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-04mcpprotocoltools-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of MCP Protocol & Tools in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-04mcpprotocoltools-flash2",
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
      "data-qid": "22advancedaiagents-04mcpprotocoltools-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard MCP Protocol & Tools approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-04mcpprotocoltools-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is MCP Protocol & Tools NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-04mcpprotocoltools-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is MCP Protocol & Tools applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for MCP Protocol & Tools (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing MCP Protocol & Tools (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for MCP Protocol & Tools-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running MCP Protocol & Tools in production at scale"
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
        children: "Testing: pytest for unit tests of MCP Protocol & Tools code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on MCP Protocol & Tools"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in MCP Protocol & Tools code."]
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
        }), " or your IDE's debugger to step through the MCP Protocol & Tools example code."]
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
        children: "Explain MCP Protocol & Tools in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of MCP Protocol & Tools."
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
        children: "Tell me about a time you debugged a MCP Protocol & Tools problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where MCP Protocol & Tools is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for MCP Protocol & Tools."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core MCP Protocol & Tools logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain MCP Protocol & Tools without notes"
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
        }), ": a small team uses MCP Protocol & Tools daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": MCP Protocol & Tools patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": MCP Protocol & Tools principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": MCP Protocol & Tools shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect MCP Protocol & Tools to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/05-coding-agents",
        children: "Coding Agents"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MCP Protocol & Tools, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of MCP Protocol & Tools depends on input size and distribution — always benchmark for your own data."
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