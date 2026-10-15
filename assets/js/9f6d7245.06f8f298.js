"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[6562],{

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
      id: "key-terminology",
      children: "Key Terminology"
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
        children: "flowchart LR\r\n    subgraph Host[Host Application]\r\n        AGENT[Agent] --> CLIENT[MCP Client]\r\n        CLIENT --> AGENT\r\n    end\r\n    subgraph Transport[Transport Layer]\r\n        CLIENT -->|JSON-RPC| SERVER[MCP Server]\r\n        SERVER -->|Response| CLIENT\r\n    end\r\n    subgraph Server[MCP Server]\r\n        TOOLS[Tools]\r\n        RES[Resources]\r\n        PROMPTS[Prompts]\r\n    end\r\n    SERVER --> TOOLS\r\n    SERVER --> RES\r\n    SERVER --> PROMPTS\n"
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
        children: "// Core MCP types\r\ninterface MCPRequest {\r\n    jsonrpc: '2.0'\r\n    id: string\r\n    method: string\r\n    params?: Record<string, any>\r\n}\r\n\r\ninterface MCPResponse {\r\n    jsonrpc: '2.0'\r\n    id: string\r\n    result?: any\r\n    error?: { code: number; message: string }\r\n}\r\n\r\n// MCP Primitives\r\ninterface MCPTool {\r\n    name: string\r\n    description: string\r\n    inputSchema: Record<string, any>\r\n    handler: (args: Record<string, any>) => Promise<any>\r\n}\r\n\r\ninterface MCPResource {\r\n    uri: string\r\n    name: string\r\n    description: string\r\n    mimeType: string\r\n    read: () => Promise<string>\r\n}\r\n\r\ninterface MCPPrompt {\r\n    name: string\r\n    description: string\r\n    arguments: Array<{ name: string; description: string; required: boolean }>\r\n    template: string\r\n}\r\n\r\nclass MCPServer {\r\n    private tools: Map<string, MCPTool> = new Map()\r\n    private resources: Map<string, MCPResource> = new Map()\r\n    private prompts: Map<string, MCPPrompt> = new Map()\r\n\r\n    registerTool(tool: MCPTool): void {\r\n        this.tools.set(tool.name, tool)\r\n    }\r\n\r\n    registerResource(resource: MCPResource): void {\r\n        this.resources.set(resource.uri, resource)\r\n    }\r\n\r\n    registerPrompt(prompt: MCPPrompt): void {\r\n        this.prompts.set(prompt.name, prompt)\r\n    }\r\n\r\n    async handleRequest(req: MCPRequest): Promise<MCPResponse> {\r\n        try {\r\n            switch (req.method) {\r\n                case 'tools/list':\r\n                    return {\r\n                        jsonrpc: '2.0', id: req.id,\r\n                        result: [...this.tools.values()].map(t => ({\r\n                            name: t.name,\r\n                            description: t.description,\r\n                            inputSchema: t.inputSchema\r\n                        }))\r\n                    }\r\n\r\n                case 'tools/call': {\r\n                    const tool = this.tools.get(req.params?.name)\r\n                    if (!tool) throw new Error(`Tool not found: ${req.params?.name}`)\r\n                    const result = await tool.handler(req.params?.arguments ?? {})\r\n                    return { jsonrpc: '2.0', id: req.id, result }\r\n                }\r\n\r\n                case 'resources/list':\r\n                    return {\r\n                        jsonrpc: '2.0', id: req.id,\r\n                        result: [...this.resources.values()].map(r => ({\r\n                            uri: r.uri, name: r.name,\r\n                            description: r.description, mimeType: r.mimeType\r\n                        }))\r\n                    }\r\n\r\n                case 'prompts/get': {\r\n                    const prompt = this.prompts.get(req.params?.name)\r\n                    if (!prompt) throw new Error(`Prompt not found: ${req.params?.name}`)\r\n                    return {\r\n                        jsonrpc: '2.0', id: req.id,\r\n                        result: { template: prompt.template }\r\n                    }\r\n                }\r\n\r\n                default:\r\n                    return {\r\n                        jsonrpc: '2.0', id: req.id,\r\n                        error: { code: -32601, message: `Method not found: ${req.method}` }\r\n                    }\r\n            }\r\n        } catch (err: any) {\r\n            return {\r\n                jsonrpc: '2.0', id: req.id,\r\n                error: { code: -32000, message: err.message }\r\n            }\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\r\nfrom typing import Dict, Any, Callable, Awaitable\r\nimport json\r\n\r\n@dataclass\r\nclass MCPTool:\r\n    name: str\r\n    description: str\r\n    input_schema: Dict\r\n    handler: Callable[[Dict], Awaitable[Any]]\r\n\r\n@dataclass\r\nclass MCPResource:\r\n    uri: str\r\n    name: str\r\n    description: str\r\n    mime_type: str = \"text/plain\"\r\n    reader: Callable[[], Awaitable[str]] = None\r\n\r\n@dataclass\r\nclass MCPServer:\r\n    tools: Dict[str, MCPTool] = field(default_factory=dict)\r\n    resources: Dict[str, MCPResource] = field(default_factory=dict)\r\n\r\n    def add_tool(self, tool: MCPTool):\r\n        self.tools[tool.name] = tool\r\n\r\n    def add_resource(self, resource: MCPResource):\r\n        self.resources[resource.uri] = resource\r\n\r\n    async def handle(self, request: Dict) -> Dict:\r\n        method = request.get(\"method\")\r\n        params = request.get(\"params\", {})\r\n        req_id = request.get(\"id\", 0)\r\n\r\n        if method == \"tools/list\":\r\n            return {\r\n                \"jsonrpc\": \"2.0\", \"id\": req_id,\r\n                \"result\": [\r\n                    {\"name\": t.name, \"description\": t.description,\r\n                     \"input_schema\": t.input_schema}\r\n                    for t in self.tools.values()\r\n                ]\r\n            }\r\n\r\n        elif method == \"tools/call\":\r\n            tool = self.tools.get(params.get(\"name\"))\r\n            if not tool:\r\n                return {\"jsonrpc\": \"2.0\", \"id\": req_id,\r\n                        \"error\": {\"code\": -32000, \"message\": \"Tool not found\"}}\r\n            try:\r\n                result = await tool.handler(params.get(\"arguments\", {}))\r\n                return {\"jsonrpc\": \"2.0\", \"id\": req_id, \"result\": result}\r\n            except Exception as e:\r\n                return {\"jsonrpc\": \"2.0\", \"id\": req_id,\r\n                        \"error\": {\"code\": -32000, \"message\": str(e)}}\r\n\r\n        return {\"jsonrpc\": \"2.0\", \"id\": req_id,\r\n                \"error\": {\"code\": -32601, \"message\": f\"Unknown method: {method}\"}}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "42-implementing-an-mcp-server",
      children: "4.2 Implementing an MCP Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A production MCP server exposes tools (callable functions), resources (data access), and prompts (templates) through a unified JSON-RPC interface."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Perception Tools\r\nclass PerceptionTools {\r\n    webSearch(): MCPTool {\r\n        return {\r\n            name: 'web_search',\r\n            description: 'Search the web for current information',\r\n            inputSchema: {\r\n                type: 'object',\r\n                properties: {\r\n                    query: { type: 'string', description: 'Search query' },\r\n                    maxResults: { type: 'number', default: 5 }\r\n                },\r\n                required: ['query']\r\n            },\r\n            handler: async (args) => {\r\n                const { query, maxResults = 5 } = args\r\n                return {\r\n                    results: Array.from({ length: maxResults }, (_, i) => ({\r\n                        title: `Result ${i + 1} for ${query}`,\r\n                        url: `https://example.com/result${i}`,\r\n                        snippet: `This is a mock search result for \"${query}\".`\r\n                    }))\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    readFile(): MCPTool {\r\n        return {\r\n            name: 'read_file',\r\n            description: 'Read a file from the local filesystem',\r\n            inputSchema: {\r\n                type: 'object',\r\n                properties: {\r\n                    path: { type: 'string', description: 'File path' }\r\n                },\r\n                required: ['path']\r\n            },\r\n            handler: async (args) => {\r\n                return { content: `Mock content of ${args.path}` }\r\n            }\r\n        }\r\n    }\r\n\r\n    httpFetch(): MCPTool {\r\n        return {\r\n            name: 'http_fetch',\r\n            description: 'Fetch a URL and return its content',\r\n            inputSchema: {\r\n                type: 'object',\r\n                properties: {\r\n                    url: { type: 'string', description: 'URL to fetch' }\r\n                },\r\n                required: ['url']\r\n            },\r\n            handler: async (args) => {\r\n                // Mock fetch\r\n                return {\r\n                    status: 200,\r\n                    headers: { 'content-type': 'text/html' },\r\n                    body: `<html><body>Mock content of ${args.url}</body></html>`\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n// Execution Tools (with safety mechanisms)\r\nclass ExecutionTools {\r\n    codeInterpreter(): MCPTool {\r\n        return {\r\n            name: 'code_interpreter',\r\n            description: 'Execute Python code in a sandboxed environment',\r\n            inputSchema: {\r\n                type: 'object',\r\n                properties: {\r\n                    code: { type: 'string', description: 'Python code to execute' },\r\n                    timeout: { type: 'number', default: 30 }\r\n                },\r\n                required: ['code']\r\n            },\r\n            handler: async (args) => {\r\n                // Sandboxed execution (mock)\r\n                const { code, timeout = 30 } = args\r\n                return {\r\n                    stdout: `Mock output of:\\n${code.slice(0, 100)}...`,\r\n                    stderr: '',\r\n                    exitCode: 0,\r\n                    executionTime: `${timeout}ms`\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    fileOperation(): MCPTool {\r\n        let approvalRequired = true\r\n\r\n        return {\r\n            name: 'file_operation',\r\n            description: 'Read, write, or delete files',\r\n            inputSchema: {\r\n                type: 'object',\r\n                properties: {\r\n                    operation: {\r\n                        type: 'string',\r\n                        enum: ['read', 'write', 'delete'],\r\n                        description: 'File operation'\r\n                    },\r\n                    path: { type: 'string' },\r\n                    content: { type: 'string' }\r\n                },\r\n                required: ['operation', 'path']\r\n            },\r\n            handler: async (args) => {\r\n                if (approvalRequired && args.operation !== 'read') {\r\n                    return {\r\n                        status: 'approval_required',\r\n                        message: `Request to ${args.operation} ${args.path}. Admin approval needed.`\r\n                    }\r\n                }\r\n                return { status: 'ok', path: args.path, operation: args.operation }\r\n            }\r\n        }\r\n    }\r\n\r\n    shellCommand(): MCPTool {\r\n        return {\r\n            name: 'shell',\r\n            description: 'Execute a shell command',\r\n            inputSchema: {\r\n                type: 'object',\r\n                properties: {\r\n                    command: { type: 'string' },\r\n                    args: { type: 'array', items: { type: 'string' } },\r\n                    timeout: { type: 'number', default: 10 }\r\n                },\r\n                required: ['command']\r\n            },\r\n            handler: async (args) => {\r\n                const dangerous = ['rm', 'sudo', 'dd', 'mkfs', ':(){ :|:& };:']\r\n                for (const d of dangerous) {\r\n                    if (args.command.includes(d)) {\r\n                        return {\r\n                            status: 'blocked',\r\n                            message: `Command contains dangerous pattern: ${d}`\r\n                        }\r\n                    }\r\n                }\r\n                return {\r\n                    status: 'completed',\r\n                    stdout: `Mock output of \"${args.command}\"`,\r\n                    exitCode: 0\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n// Collaboration Tools\r\nclass CollaborationTools {\r\n    browserAutomation(): MCPTool {\r\n        return {\r\n            name: 'browser_automation',\r\n            description: 'Control a browser to navigate, click, and extract data',\r\n            inputSchema: {\r\n                type: 'object',\r\n                properties: {\r\n                    url: { type: 'string' },\r\n                    action: { type: 'string', enum: ['navigate', 'click', 'extract', 'screenshot'] },\r\n                    selector: { type: 'string' }\r\n                },\r\n                required: ['url', 'action']\r\n            },\r\n            handler: async (args) => {\r\n                return {\r\n                    status: 'ok',\r\n                    screenshot: `mock_screenshot_${Date.now()}.png`,\r\n                    pageTitle: `Mock Page: ${args.url}`,\r\n                    extractedData: args.selector ? `Data from ${args.selector}` : null\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    notify(): MCPTool {\r\n        return {\r\n            name: 'notify',\r\n            description: 'Send notifications via email, Slack, Telegram, or Discord',\r\n            inputSchema: {\r\n                type: 'object',\r\n                properties: {\r\n                    channel: {\r\n                        type: 'string',\r\n                        enum: ['email', 'slack', 'telegram', 'discord']\r\n                    },\r\n                    message: { type: 'string' },\r\n                    recipient: { type: 'string' }\r\n                },\r\n                required: ['channel', 'message']\r\n            },\r\n            handler: async (args) => {\r\n                return {\r\n                    status: 'sent',\r\n                    channel: args.channel,\r\n                    messageId: `msg_${Date.now()}`\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    humanInTheLoop(): MCPTool {\r\n        return {\r\n            name: 'human_review',\r\n            description: 'Ask a human for approval or input',\r\n            inputSchema: {\r\n                type: 'object',\r\n                properties: {\r\n                    request: { type: 'string', description: 'What to ask the human' },\r\n                    context: { type: 'string', description: 'Background information' }\r\n                },\r\n                required: ['request']\r\n            },\r\n            handler: async (args) => {\r\n                return {\r\n                    status: 'awaiting_human',\r\n                    request: args.request,\r\n                    context: args.context,\r\n                    waitTime: 'Human notified. Response pending...'\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "43-tool-design-patterns",
      children: "4.3 Tool Design Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tools fall into three categories with distinct design considerations."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type ToolCategory = 'perception' | 'execution' | 'collaboration'\r\n\r\ninterface ToolDesignGuide {\r\n    category: ToolCategory\r\n    safetyLevel: 'low' | 'medium' | 'high'\r\n    validationRequired: boolean\r\n    approvalDefault: boolean\r\n    errorRecovery: string\r\n}\r\n\r\nconst toolGuidelines: Record<ToolCategory, ToolDesignGuide> = {\r\n    perception: {\r\n        category: 'perception',\r\n        safetyLevel: 'low',\r\n        validationRequired: false,\r\n        approvalDefault: false,\r\n        errorRecovery: 'Retry with backoff, return partial results'\r\n    },\r\n    execution: {\r\n        category: 'execution',\r\n        safetyLevel: 'high',\r\n        validationRequired: true,\r\n        approvalDefault: true,\r\n        errorRecovery: 'Sandbox isolation, automatic rollback on failure'\r\n    },\r\n    collaboration: {\r\n        category: 'collaboration',\r\n        safetyLevel: 'medium',\r\n        validationRequired: true,\r\n        approvalDefault: false,\r\n        errorRecovery: 'Retry with timeout, escalate to human'\r\n    }\r\n}\r\n\r\nclass ToolValidator {\r\n    validate(args: Record<string, any>, schema: Record<string, any>): string[] {\r\n        const errors: string[] = []\r\n        const required = schema.required ?? []\r\n\r\n        for (const field of required) {\r\n            if (args[field] === undefined || args[field] === null) {\r\n                errors.push(`Missing required field: ${field}`)\r\n            }\r\n        }\r\n\r\n        const props = schema.properties ?? {}\r\n        for (const [key, value] of Object.entries(args)) {\r\n            const propSchema = props[key]\r\n            if (propSchema?.type === 'string' && typeof value !== 'string') {\r\n                errors.push(`Field ${key} must be a string`)\r\n            }\r\n            if (propSchema?.type === 'number' && typeof value !== 'number') {\r\n                errors.push(`Field ${key} must be a number`)\r\n            }\r\n        }\r\n\r\n        return errors\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "44-event-driven-async-agents",
      children: "4.4 Event-Driven Async Agents"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern agents use event-driven architectures for non-blocking operation and real-time responsiveness."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type EventType = 'user_message' | 'tool_result' | 'timer' | 'system' | 'interrupt'\r\ntype Priority = 'critical' | 'high' | 'normal' | 'low'\r\n\r\ninterface AgentEvent {\r\n    id: string\r\n    type: EventType\r\n    priority: Priority\r\n    data: Record<string, any>\r\n    timestamp: number\r\n}\r\n\r\nclass AsyncEventAgent {\r\n    private eventQueue: AgentEvent[] = []\r\n    private processing = false\r\n    private currentTask: string | null = null\r\n\r\n    async emit(event: AgentEvent): Promise<void> {\r\n        const insertionIndex = this.eventQueue.findIndex(e => {\r\n            const p = { critical: 0, high: 1, normal: 2, low: 3 }\r\n            return p[e.priority] > p[event.priority]\r\n        })\r\n\r\n        if (insertionIndex === -1) {\r\n            this.eventQueue.push(event)\r\n        } else {\r\n            this.eventQueue.splice(insertionIndex, 0, event)\r\n        }\r\n\r\n        if (!this.processing) {\r\n            this.processing = true\r\n            await this.processQueue()\r\n        }\r\n    }\r\n\r\n    private async processQueue(): Promise<void> {\r\n        while (this.eventQueue.length > 0) {\r\n            const event = this.eventQueue.shift()!\r\n\r\n            if (event.type === 'interrupt') {\r\n                this.currentTask = null\r\n                continue\r\n            }\r\n\r\n            this.currentTask = event.id\r\n            await this.handleEvent(event)\r\n        }\r\n\r\n        this.processing = false\r\n        this.currentTask = null\r\n    }\r\n\r\n    private async handleEvent(event: AgentEvent): Promise<void> {\r\n        switch (event.type) {\r\n            case 'user_message':\r\n                await this.handleUserMessage(event.data)\r\n                break\r\n            case 'tool_result':\r\n                await this.handleToolResult(event.data)\r\n                break\r\n            case 'timer':\r\n                await this.handleTimer(event.data)\r\n                break\r\n            case 'system':\r\n                await this.handleSystemEvent(event.data)\r\n                break\r\n        }\r\n    }\r\n\r\n    private async handleUserMessage(data: Record<string, any>): Promise<void> {\r\n        const message = data.message || ''\r\n        // Process message with LLM, emit tool calls as events\r\n        await this.emit({\r\n            id: crypto.randomUUID(),\r\n            type: 'tool_result',\r\n            priority: 'normal',\r\n            data: { tool: 'llm_processor', result: `Processed: ${message.slice(0, 50)}` },\r\n            timestamp: Date.now()\r\n        })\r\n    }\r\n\r\n    private async handleToolResult(data: Record<string, any>): Promise<void> {\r\n        // Tool results feed back into the reasoning loop\r\n        console.log(`Tool ${data.tool} returned:`, data.result)\r\n    }\r\n\r\n    private async handleTimer(data: Record<string, any>): Promise<void> {\r\n        // Scheduled tasks\r\n        console.log(`Timer triggered: ${data.name}`)\r\n    }\r\n\r\n    private async handleSystemEvent(data: Record<string, any>): Promise<void> {\r\n        // System events like config changes, health checks\r\n        console.log(`System event: ${data.type}`)\r\n    }\r\n\r\n    status(): {\r\n        queueLength: number\r\n        processing: boolean\r\n        currentTask: string | null\r\n    } {\r\n        return {\r\n            queueLength: this.eventQueue.length,\r\n            processing: this.processing,\r\n            currentTask: this.currentTask\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import asyncio\r\nfrom dataclasses import dataclass, field\r\nfrom typing import Dict, List, Optional\r\nfrom enum import Enum\r\nimport uuid\r\nimport json\r\n\r\nclass Priority(Enum):\r\n    CRITICAL = 0\r\n    HIGH = 1\r\n    NORMAL = 2\r\n    LOW = 3\r\n\r\n@dataclass\r\nclass Event:\r\n    id: str = field(default_factory=lambda: str(uuid.uuid4()))\r\n    type: str = \"user_message\"\r\n    priority: Priority = Priority.NORMAL\r\n    data: Dict = field(default_factory=dict)\r\n    timestamp: float = field(default_factory=lambda: __import__('time').time())\r\n\r\nclass AsyncEventAgent:\r\n    \"\"\"Event-driven async agent with priority queue and interrupt support.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.queue: List[Event] = []\r\n        self.processing = False\r\n        self.current_task: Optional[str] = None\r\n\r\n    async def emit(self, event: Event):\r\n        idx = 0\r\n        while idx < len(self.queue) and self.queue[idx].priority.value <= event.priority.value:\r\n            idx += 1\r\n        self.queue.insert(idx, event)\r\n\r\n        if not self.processing:\r\n            self.processing = True\r\n            await self._process_queue()\r\n\r\n    async def _process_queue(self):\r\n        while self.queue:\r\n            event = self.queue.pop(0)\r\n            if event.type == 'interrupt':\r\n                self.current_task = None\r\n                continue\r\n            self.current_task = event.id\r\n            await self._handle(event)\r\n        self.processing = False\r\n        self.current_task = None\r\n\r\n    async def _handle(self, event: Event):\r\n        print(f\"[{event.type}] Processing event {event.id[:8]}...\")\r\n\r\n        if event.type == 'tool_call':\r\n            await asyncio.sleep(0.1)  # Simulate tool execution\r\n            await self.emit(Event(\r\n                type='tool_result',\r\n                priority=Priority.NORMAL,\r\n                data={'tool': event.data.get('name'), 'result': 'done'}\r\n            ))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "45-active-tool-selection",
      children: "4.5 Active Tool Selection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Instead of calling all tools, the agent actively selects the most appropriate tools based on task requirements."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ToolCapability {\r\n    name: string\r\n    inputTypes: string[]\r\n    outputTypes: string[]\r\n    estimatedCostPerCall: number\r\n    avgLatencyMs: number\r\n    requiredPermissions: string[]\r\n}\r\n\r\nclass ActiveToolSelector {\r\n    private toolCapabilities: Map<string, ToolCapability> = new Map()\r\n\r\n    registerCapability(tool: string, cap: ToolCapability): void {\r\n        this.toolCapabilities.set(tool, cap)\r\n    }\r\n\r\n    selectTools(task: string, constraints: {\r\n        maxBudget?: number\r\n        maxLatencyMs?: number\r\n        requiredPermissions?: string[]\r\n    }): string[] {\r\n        const taskWords = task.toLowerCase().split(' ')\r\n        const scored = [...this.toolCapabilities.entries()].map(([name, cap]) => {\r\n            let score = 0\r\n\r\n            // Match input types to task\r\n            const taskDataTypes = this.inferDataTypes(task)\r\n            for (const t of taskDataTypes) {\r\n                if (cap.inputTypes.includes(t)) score += 2\r\n            }\r\n\r\n            // Match output types\r\n            if (task.includes('search') && cap.outputTypes.includes('web_results')) score += 3\r\n            if (task.includes('code') && cap.outputTypes.includes('code')) score += 3\r\n            if (task.includes('file') && cap.inputTypes.includes('file')) score += 3\r\n\r\n            // Apply constraints\r\n            if (constraints.maxBudget && cap.estimatedCostPerCall > constraints.maxBudget) score -= 10\r\n            if (constraints.maxLatencyMs && cap.avgLatencyMs > constraints.maxLatencyMs) score -= 5\r\n            if (constraints.requiredPermissions) {\r\n                const missing = constraints.requiredPermissions\r\n                    .filter(p => !cap.requiredPermissions.includes(p))\r\n                score -= missing.length * 3\r\n            }\r\n\r\n            return { name, score }\r\n        })\r\n\r\n        return scored\r\n            .sort((a, b) => b.score - a.score)\r\n            .filter(s => s.score > 0)\r\n            .slice(0, 3)\r\n            .map(s => s.name)\r\n    }\r\n\r\n    private inferDataTypes(task: string): string[] {\r\n        const types: string[] = []\r\n        if (task.includes('image') || task.includes('picture')) types.push('image')\r\n        if (task.includes('file') || task.includes('document')) types.push('file')\r\n        if (task.includes('url') || task.includes('http')) types.push('url')\r\n        if (task.includes('number') || task.includes('calculate')) types.push('number')\r\n        if (task.includes('text') || task.includes('string')) types.push('text')\r\n        return types\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MCP is the emerging standard for agent-tool communication. The three primitives — tools (actions), resources (data), prompts (templates) — cover all agent needs. Tool design follows three patterns (perception,.\r\nexecution, collaboration) with distinct safety requirements. Event-driven architectures enable non-blocking, interruptible agent operation. Active tool selection optimizes cost and latency by choosing tools dynamically based on task requirements."
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
            children: "How does MCP Protocol & Tools behave differently at scale — memory, throughput, or precision-wise?"
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
        children: "Name the technique explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using MCP Protocol & Tools\")."
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
        children: "Review complexity and edge cases for the classic problem in this chapter."
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
        }), " You should memorize this chapter's content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "The time complexity of the standard approach to 04 Mcp Protocol Tools is ___. — Answer: O(k) per tool call where k=tool latency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 04 Mcp Protocol Tools is ___. — Answer: infinite loops, tool failures, context overflow"
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
          }), " Your implementation of this technique is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
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
        children: "'Building LLM Powered Applications' by Valentina Alto (Packt) Protocol & Tools"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 22 — builds the foundation for 04 Mcp Protocol Tools"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 04 Mcp Protocol Tools with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 04 Mcp Protocol Tools fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 04 Mcp Protocol Tools"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 04 Mcp Protocol Tools"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 04 Mcp Protocol Tools?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 04 Mcp Protocol Tools?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 04 Mcp Protocol Tools asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 04 Mcp Protocol Tools?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
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
            children: "04 Mcp Protocol Tools is like a GPS navigation system"
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
          }), " — this chapter contributes the MCP Protocol & Tools skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
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
          children: "An AI agent is an autonomous system that uses an LLM as its reasoning engine to perceive inputs, decide actions, call tools, observe results, and iterate until a task is complete."
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
          children: "Most common agent mistake: no max_steps limit causes infinite loops. Always set max_steps=10-20 and handle the timeout case explicitly with a fallback response."
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
          children: "Agent complexity: O(k * t) where k=steps taken, t=average tool latency. Each LLM call is O(n^2) attention over context. Total cost grows linearly with steps."
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
          children: "Agents are NOT the right choice when: (1) a single LLM call suffices, (2) deterministic pipelines are required, (3) latency < 500ms is needed, (4) the task has no external tool requirements."
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
          children: "Production agent stack: LangGraph for stateful workflows, OpenAI function calling or Anthropic tool use for structured tool invocation, LangSmith for tracing and debugging."
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
        }), " — Claude's native function calling interface Protocol & Tools"]
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
        }), ": Add structured logging at each stage of the 04 Mcp Protocol Tools pipeline to identify exactly where the failure occurs."]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_04_mcp_protocol_tools(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 04 Mcp Protocol Tools.\r\n\r\n    Key concepts: tools, memory, planning, execution, observation\r\n    Complexity: O(k) per tool call where k=tool latency\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 04 Mcp Protocol Tools here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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