"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[6038],{

/***/ 60304
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_22_advanced_ai_agents_05_coding_agents_md_40f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-22-advanced-ai-agents-05-coding-agents-md-40f.json
const site_docs_courses_ai_engineering_placement_22_advanced_ai_agents_05_coding_agents_md_40f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/advanced-ai-agents/05-coding-agents","title":"Coding Agents","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/22-advanced-ai-agents/05-coding-agents.md","sourceDirName":"courses/ai-engineering-placement/22-advanced-ai-agents","slug":"/ai-engineering-placement/22-advanced-ai-agents/05-coding-agents","permalink":"/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/05-coding-agents","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":276,"frontMatter":{"id":"05-coding-agents","slug":"/ai-engineering-placement/22-advanced-ai-agents/05-coding-agents","title":"Coding Agents","sidebar_label":"Coding Agents","sidebar_position":276},"sidebar":"placementSidebar","previous":{"title":"MCP Protocol & Tools","permalink":"/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/04-mcp-protocol-tools"},"next":{"title":"Agent Evaluation","permalink":"/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/06-agent-evaluation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/22-advanced-ai-agents/05-coding-agents.md


const frontMatter = {
	id: '05-coding-agents',
	slug: '/ai-engineering-placement/22-advanced-ai-agents/05-coding-agents',
	title: 'Coding Agents',
	sidebar_label: 'Coding Agents',
	sidebar_position: 276
};
const contentTitle = 'Coding Agents';

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
  "value": "5.1 Coding Agent Architecture",
  "id": "51-coding-agent-architecture",
  "level": 2
}, {
  "value": "5.2 Proposer-Reviewer Pattern",
  "id": "52-proposer-reviewer-pattern",
  "level": 2
}, {
  "value": "5.3 Code as Meta-Tool",
  "id": "53-code-as-meta-tool",
  "level": 2
}, {
  "value": "5.4 Self-Healing Systems",
  "id": "54-self-healing-systems",
  "level": 2
}, {
  "value": "5.5 NL-to-SQL and Forms",
  "id": "55-nl-to-sql-and-forms",
  "level": 2
}, {
  "value": "5.6 Artifact Pattern",
  "id": "56-artifact-pattern",
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
  "value": "Exercise 2: Proposer-Reviewer Loop",
  "id": "exercise-2-proposer-reviewer-loop",
  "level": 3
}, {
  "value": "Exercise 3: Dynamic Tool Creation",
  "id": "exercise-3-dynamic-tool-creation",
  "level": 3
}, {
  "value": "Exercise 4: NL-to-SQL Converter",
  "id": "exercise-4-nl-to-sql-converter",
  "level": 3
}, {
  "value": "Exercise 5: Self-Healing Diagnostic",
  "id": "exercise-5-self-healing-diagnostic",
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
        id: "coding-agents",
        children: "Coding Agents"
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
            children: "Build a production-grade coding agent with file operations, search, and shell tools"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement code generation with Proposer-Reviewer pattern for quality control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design self-healing systems using code as the adaptation mechanism"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build NL-to-SQL agents and dynamic form generators"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement artifact patterns for code generation without data movement"
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
      children: "Understanding coding agents is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how coding agents works in practice."
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
            children: "5.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coding Agent Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool suite, system prompts, lint integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proposer-Reviewer Pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate → Evaluate → Iterate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code as Meta-Tool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code creates new tools dynamically"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-Healing Systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adaptive log parsing, auto-diagnosis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NL-to-SQL and Forms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural language → structured output → execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Artifact Pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code generation without data movement"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    subgraph Agent[Coding Agent]\r\n        NL[Natural Language Request] --> PLAN[Plan Solution]\r\n        PLAN --> CODE[Generate Code]\r\n        CODE --> TEST[Run Tests]\r\n        TEST -->{Pass?}\r\n        Pass --> REVIEW[Reviewer Checks]\r\n        Pass -->|Yes| DEPLOY\r\n        Fail --> FIX[Fix Errors]\r\n        FIX --> CODE\r\n    end\r\n    subgraph Tools[Tool Suite]\r\n        LS[List Dir]\r\n        READ[Read File]\r\n        SEARCH[Search Code]\r\n        WRITE[Write File]\r\n        SHELL[Shell Session]\r\n    end\r\n    Agent --> Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "51-coding-agent-architecture",
      children: "5.1 Coding Agent Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A production coding agent combines file operations, search, and shell execution with smart system prompts and lint integration."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface CodeFile {\r\n    path: string\r\n    content: string\r\n    language: string\r\n}\r\n\r\ninterface LintResult {\r\n    file: string\r\n    line: number\r\n    column: number\r\n    severity: 'error' | 'warning' | 'info'\r\n    message: string\r\n}\r\n\r\nclass CodingAgent {\r\n    private tools: Map<string, Tool>\r\n    private lintResults: LintResult[] = []\r\n\r\n    constructor() {\r\n        this.tools = new Map([\r\n            ['read_file', this.createReadTool()],\r\n            ['write_file', this.createWriteTool()],\r\n            ['edit_file', this.createEditTool()],\r\n            ['search_code', this.createSearchTool()],\r\n            ['list_dir', this.createListDirTool()],\r\n            ['shell', this.createShellTool()],\r\n        ])\r\n    }\r\n\r\n    private createReadTool(): Tool {\r\n        return {\r\n            name: 'read_file',\r\n            description: 'Read a file from the filesystem. Returns the full content.',\r\n            inputSchema: {\r\n                type: 'object',\r\n                properties: {\r\n                    path: { type: 'string', description: 'Absolute path to the file' }\r\n                },\r\n                required: ['path']\r\n            },\r\n            execute: async (args) => {\r\n                const path = args.path\r\n                return { path, content: `Mock content of ${path}`, lines: 50 }\r\n            }\r\n        }\r\n    }\r\n\r\n    private createWriteTool(): Tool {\r\n        return {\r\n            name: 'write_file',\r\n            description: 'Write content to a file. Creates directories if needed.',\r\n            inputSchema: {\r\n                type: 'object',\r\n                properties: {\r\n                    path: { type: 'string' },\r\n                    content: { type: 'string' }\r\n                },\r\n                required: ['path', 'content']\r\n            },\r\n            execute: async (args) => {\r\n                return { path: args.path, written: true, size: args.content.length }\r\n            }\r\n        }\r\n    }\r\n\r\n    private createEditTool(): Tool {\r\n        return {\r\n            name: 'edit_file',\r\n            description: 'Apply a string replacement to a file.',\r\n            inputSchema: {\r\n                type: 'object',\r\n                properties: {\r\n                    path: { type: 'string' },\r\n                    oldString: { type: 'string' },\r\n                    newString: { type: 'string' }\r\n                },\r\n                required: ['path', 'oldString', 'newString']\r\n            },\r\n            execute: async (args) => {\r\n                return { path: args.path, replacements: 1 }\r\n            }\r\n        }\r\n    }\r\n\r\n    private createSearchTool(): Tool {\r\n        return {\r\n            name: 'search_code',\r\n            description: 'Search for text patterns in the codebase using regex.',\r\n            inputSchema: {\r\n                type: 'object',\r\n                properties: {\r\n                    pattern: { type: 'string' },\r\n                    include: { type: 'string', default: '*.ts' }\r\n                },\r\n                required: ['pattern']\r\n            },\r\n            execute: async (args) => {\r\n                return { matches: [`Mock: ${args.pattern} found in src/main.ts:42`], count: 1 }\r\n            }\r\n        }\r\n    }\r\n\r\n    private createListDirTool(): Tool {\r\n        return {\r\n            name: 'list_dir',\r\n            description: 'List files and directories in a path.',\r\n            inputSchema: {\r\n                type: 'object',\r\n                properties: {\r\n                    path: { type: 'string', default: '.' }\r\n                },\r\n                required: []\r\n            },\r\n            execute: async (args) => {\r\n                return {\r\n                    path: args.path || '.',\r\n                    entries: ['src/', 'tests/', 'package.json', 'README.md']\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    private createShellTool(): Tool {\r\n        return {\r\n            name: 'shell',\r\n            description: 'Execute a shell command and return output.',\r\n            inputSchema: {\r\n                type: 'object',\r\n                properties: {\r\n                    command: { type: 'string' }\r\n                },\r\n                required: ['command']\r\n            },\r\n            execute: async (args) => {\r\n                const dangerous = ['rm -rf', 'sudo', '> /dev/sda']\r\n                let blocked = false\r\n                for (const d of dangerous) {\r\n                    if (args.command.includes(d)) { blocked = true; break }\r\n                }\r\n                return {\r\n                    stdout: blocked ? '' : `Mock output of: ${args.command}`,\r\n                    stderr: blocked ? 'Command blocked for safety' : '',\r\n                    exitCode: blocked ? 1 : 0\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    async generateCode(request: string): Promise<CodeFile[]> {\r\n        const systemPrompt = [\r\n            'You are a coding agent.',\r\n            'You have access to read, write, edit search, shell tools.',\r\n            'Always plan before you code.',\r\n            'Write tests before implementation.',\r\n            'Run lint after changes.',\r\n            'Current time: ' + new Date().toISOString(),\r\n            'Tool call count: 0',\r\n        ].join('\\n')\r\n\r\n        const llmPrompt = [\r\n            systemPrompt,\r\n            '---',\r\n            `Task: ${request}`,\r\n            'Plan your approach, then use tools to implement.',\r\n        ].join('\\n')\r\n\r\n        // Mock response\r\n        return [{\r\n            path: 'src/solution.ts',\r\n            content: '// Generated code\\nconsole.log(\"Hello world\")\\n',\r\n            language: 'typescript'\r\n        }]\r\n    }\r\n\r\n    async runLint(files: CodeFile[]): Promise<LintResult[]> {\r\n        this.lintResults = []\r\n        for (const file of files) {\r\n            if (file.content.includes('var ')) {\r\n                this.lintResults.push({\r\n                    file: file.path,\r\n                    line: 1,\r\n                    column: 1,\r\n                    severity: 'error',\r\n                    message: 'Use const or let instead of var'\r\n                })\r\n            }\r\n            if (!file.content.includes(';')) {\r\n                this.lintResults.push({\r\n                    file: file.path,\r\n                    line: 1,\r\n                    column: 1,\r\n                    severity: 'warning',\r\n                    message: 'Missing semicolons'\r\n                })\r\n            }\r\n        }\r\n        return this.lintResults\r\n    }\r\n\r\n    async fixLintErrors(results: LintResult[]): Promise<void> {\r\n        for (const r of results) {\r\n            console.log(`Fixing ${r.file}:${r.line} - ${r.message}`)\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import List, Optional\r\nimport re\r\n\r\nclass CodeFile:\r\n    def __init__(self, path: str, content: str, language: str):\r\n        self.path = path\r\n        self.content = content\r\n        self.language = language\r\n\r\nclass CodingAgent:\r\n    \"\"\"Production-grade coding assistant with full tool suite.\"\"\"\r\n\r\n    def __init__(self, tools: dict = None):\r\n        self.tools = tools or self._default_tools()\r\n\r\n    def _default_tools(self) -> dict:\r\n        return {\r\n            \"read_file\": self.read_file,\r\n            \"write_file\": self.write_file,\r\n            \"grep_search\": self.grep_search,\r\n            \"list_dir\": self.list_dir,\r\n            \"shell\": self.shell_exec,\r\n        }\r\n\r\n    def read_file(self, path: str) -> str:\r\n        with open(path, 'r') as f:\r\n            return f.read()\r\n\r\n    def write_file(self, path: str, content: str):\r\n        with open(path, 'w') as f:\r\n            f.write(content)\r\n        return f\"Written {len(content)} bytes to {path}\"\r\n\r\n    def grep_search(self, pattern: str, path: str = \".\") -> List[dict]:\r\n        results = []\r\n        for root, dirs, files in os.walk(path):\r\n            for fname in files:\r\n                if fname.endswith('.py') or fname.endswith('.ts'):\r\n                    fpath = os.path.join(root, fname)\r\n                    with open(fpath) as f:\r\n                        for i, line in enumerate(f, 1):\r\n                            if re.search(pattern, line):\r\n                                results.append({\r\n                                    'file': fpath, 'line': i, 'match': line.strip()\r\n                                })\r\n        return results[:20]\r\n\r\n    def list_dir(self, path: str = \".\") -> List[str]:\r\n        return os.listdir(path)\r\n\r\n    def shell_exec(self, command: str) -> dict:\r\n        import subprocess\r\n        dangerous = ['rm -rf', 'sudo', 'dd if=', 'mkfs.']\r\n        for d in dangerous:\r\n            if d in command:\r\n                return {'stdout': '', 'stderr': 'Command blocked', 'exit_code': 1}\r\n        result = subprocess.run(command, shell=True, capture_output=True, text=True, timeout=10)\r\n        return {\r\n            'stdout': result.stdout[-2000:],\r\n            'stderr': result.stderr[-2000:],\r\n            'exit_code': result.returncode,\r\n        }\r\n\r\n    def generate_and_lint(self, request: str) -> CodeFile:\r\n        file = CodeFile(\r\n            path=\"src/solution.py\",\r\n            content=f\"# Generated for: {request}\\npass\\n\",\r\n            language=\"python\"\r\n        )\r\n        return file\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "52-proposer-reviewer-pattern",
      children: "5.2 Proposer-Reviewer Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The proposer generates code; the reviewer checks quality and suggests fixes. This mirrors human code review."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ReviewFeedback {\r\n    issues: Array<{\r\n        severity: 'critical' | 'major' | 'minor'\r\n        line: number\r\n        message: string\r\n        suggestion: string\r\n    }>\r\n    approved: boolean\r\n    score: number\r\n}\r\n\r\nclass CodeReviewer {\r\n    review(code: string, language: string): ReviewFeedback {\r\n        const issues: ReviewFeedback['issues'] = []\r\n\r\n        // Code quality checks\r\n        if (code.length > 500) {\r\n            issues.push({\r\n                severity: 'major',\r\n                line: 1,\r\n                message: 'Function too long. Consider splitting into smaller functions.',\r\n                suggestion: 'Extract logical blocks into separate functions.'\r\n            })\r\n        }\r\n\r\n        if (language === 'typescript') {\r\n            if (!code.includes(': ')) {\r\n                issues.push({\r\n                    severity: 'major',\r\n                    line: 1,\r\n                    message: 'Missing type annotations in TypeScript.',\r\n                    suggestion: 'Add type annotations to all function parameters and returns.'\r\n                })\r\n            }\r\n            if (code.includes('any')) {\r\n                issues.push({\r\n                    severity: 'minor',\r\n                    line: code.indexOf('any') + 1,\r\n                    message: 'Using \"any\" type. Prefer specific types.',\r\n                    suggestion: 'Replace \"any\" with a union type or interface.'\r\n                })\r\n            }\r\n        }\r\n\r\n        if (language === 'python') {\r\n            if (code.includes('except:')) {\r\n                issues.push({\r\n                    severity: 'critical',\r\n                    line: code.indexOf('except:') + 1,\r\n                    message: 'Bare except clause catches all exceptions.',\r\n                    suggestion: 'Specify the exception type: except ValueError:'\r\n                })\r\n            }\r\n            if (!code.includes('\"\"\"') && !code.includes('#')) {\r\n                issues.push({\r\n                    severity: 'minor',\r\n                    line: 1,\r\n                    message: 'Missing docstrings and comments.',\r\n                    suggestion: 'Add docstrings to all functions and classes.'\r\n                })\r\n            }\r\n        }\r\n\r\n        return {\r\n            issues,\r\n            approved: issues.filter(i => i.severity === 'critical').length === 0,\r\n            score: Math.max(0, 10 - issues.length)\r\n        }\r\n    }\r\n}\r\n\r\nclass ProposerReviewerLoop {\r\n    private maxIterations = 3\r\n\r\n    async generate(request: string): Promise<{ code: CodeFile; feedback: ReviewFeedback[] }> {\r\n        const reviewer = new CodeReviewer()\r\n        const allFeedback: ReviewFeedback[] = []\r\n\r\n        let currentCode = this.initialGeneration(request)\r\n        let codeFile: CodeFile = {\r\n            path: 'src/solution.ts',\r\n            content: currentCode,\r\n            language: 'typescript'\r\n        }\r\n\r\n        for (let i = 0; i < this.maxIterations; i++) {\r\n            const feedback = reviewer.review(codeFile.content, codeFile.language)\r\n            allFeedback.push(feedback)\r\n\r\n            if (feedback.approved) break\r\n\r\n            currentCode = this.applyFeedback(currentCode, feedback)\r\n            codeFile.content = currentCode\r\n        }\r\n\r\n        return { code: codeFile, feedback: allFeedback }\r\n    }\r\n\r\n    private initialGeneration(request: string): string {\r\n        return `// Generated code for: ${request}\\n\\nfunction solution() {\\n  // TODO: implement\\n}\\n`\r\n    }\r\n\r\n    private applyFeedback(code: string, feedback: ReviewFeedback): string {\r\n        let result = code\r\n        for (const issue of feedback.issues) {\r\n            result += `\\n// FIX: ${issue.message}\\n// Suggestion: ${issue.suggestion}\\n`\r\n        }\r\n        return result\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import List, Tuple\r\n\r\nclass CodeReviewer:\r\n    \"\"\"Reviews generated code for quality, safety, and style issues.\"\"\"\r\n\r\n    CRITICAL_PATTERNS = {\r\n        'python': [\r\n            (r'except\\s*:', 'Bare except clause'),\r\n            (r'eval\\(', 'Use of eval() is dangerous'),\r\n            (r'exec\\(', 'Use of exec() is dangerous'),\r\n            (r'pickle\\.loads?\\(', 'Unsafe deserialization'),\r\n        ],\r\n        'typescript': [\r\n            (r'(var)\\s', 'Use const/let instead of var'),\r\n            (r':\\s*any', 'Avoid any type'),\r\n            (r'document\\.write', 'Avoid document.write'),\r\n        ],\r\n    }\r\n\r\n    def review(self, code: str, lang: str) -> Tuple[List[dict], bool]:\r\n        issues = []\r\n        patterns = self.CRITICAL_PATTERNS.get(lang, [])\r\n\r\n        for pattern, message in patterns:\r\n            for match in re.finditer(pattern, code):\r\n                line_num = code[:match.start()].count('\\n') + 1\r\n                issues.append({\r\n                    'severity': 'critical',\r\n                    'line': line_num,\r\n                    'message': message,\r\n                })\r\n\r\n        # Length check\r\n        lines = code.split('\\n')\r\n        if len(lines) > 100:\r\n            issues.append({\r\n                'severity': 'major',\r\n                'line': 1,\r\n                'message': f'File too long ({len(lines)} lines). Split into modules.',\r\n            })\r\n\r\n        approved = all(i['severity'] != 'critical' for i in issues)\r\n        return issues, approved\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "53-code-as-meta-tool",
      children: "5.3 Code as Meta-Tool"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Code generation is the meta-capability — it creates new tools dynamically. This enables self-healing systems."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface DynamicTool {\r\n    name: string\r\n    description: string\r\n    code: string\r\n    execute: (args: Record<string, any>) => Promise<any>\r\n}\r\n\r\nclass DynamicToolRegistry {\r\n    private tools: Map<string, DynamicTool> = new Map()\r\n\r\n    register(name: string, description: string, code: string): void {\r\n        const executeFn = this.compileTool(code)\r\n        this.tools.set(name, {\r\n            name, description, code,\r\n            execute: executeFn\r\n        })\r\n    }\r\n\r\n    private compileTool(code: string): (args: Record<string, any>) => Promise<any> {\r\n        return async (args) => {\r\n            const wrappedCode = code.includes('return ')\r\n                ? code\r\n                : `const { ${Object.keys(args).join(', ')} } = args;\\n${code}`\r\n\r\n            try {\r\n                const fn = new Function('args', wrappedCode)\r\n                return fn(args)\r\n            } catch (err: any) {\r\n                return { error: err.message }\r\n            }\r\n        }\r\n    }\r\n\r\n    list(): DynamicTool[] {\r\n        return [...this.tools.values()]\r\n    }\r\n\r\n    get(name: string): DynamicTool | undefined {\r\n        return this.tools.get(name)\r\n    }\r\n}\r\n\r\n// Example: Code generation creates a new data parser tool on the fly\r\nclass AdaptiveLogParser {\r\n    private parsers: DynamicToolRegistry = new DynamicToolRegistry()\r\n    private parseFailureCount: Map<string, number> = new Map()\r\n\r\n    async parse(logLine: string): Promise<Record<string, any>> {\r\n        const format = this.detectFormat(logLine)\r\n\r\n        const parser = this.parsers.get(format)\r\n        if (parser) {\r\n            try {\r\n                return await parser.execute({ line: logLine })\r\n            } catch {\r\n                this.incrementFailure(format)\r\n            }\r\n        }\r\n\r\n        // Auto-generate a new parser via LLM\r\n        const newParserCode = await this.generateParserCode(logLine, format)\r\n        this.parsers.register(\r\n            `parse_${format}`,\r\n            `Parser for ${format} format`,\r\n            newParserCode\r\n        )\r\n\r\n        return this.parsers.get(`parse_${format}`)!.execute({ line: logLine })\r\n    }\r\n\r\n    private detectFormat(line: string): string {\r\n        if (line.match(/^\\d{4}-\\d{2}-\\d{2}/)) return 'iso_date'\r\n        if (line.match(/^\\[ERROR\\]/)) return 'error_format'\r\n        if (line.match(/\"method\":\"(GET|POST|PUT|DELETE)\"/)) return 'json_api'\r\n        return 'unknown'\r\n    }\r\n\r\n    private async generateParserCode(logLine: string, format: string): Promise<string> {\r\n        return `\r\nconst parsed = {};\r\nconst parts = args.line.split(' ');\r\nparsed.timestamp = parts[0];\r\nparsed.severity = parts[1];\r\nparsed.message = parts.slice(2).join(' ');\r\nreturn parsed;\r\n        `.trim()\r\n    }\r\n\r\n    private incrementFailure(format: string): void {\r\n        this.parseFailureCount.set(format,\r\n            (this.parseFailureCount.get(format) ?? 0) + 1\r\n        )\r\n    }\r\n\r\n    getFailureReport(): Record<string, number> {\r\n        return Object.fromEntries(this.parseFailureCount)\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Dict, Any, Callable\r\nimport re\r\n\r\nclass DynamicToolCreator:\r\n    \"\"\"Creates new tools at runtime using code generation.\"\"\"\r\n\r\n    def __init__(self, code_generator: Callable[[str], str]):\r\n        self.code_generator = code_generator\r\n        self.tools: Dict[str, Callable] = {}\r\n\r\n    def create_parser(self, sample: str) -> Callable:\r\n        \"\"\"Generate a parser function from a sample input.\"\"\"\r\n        code = self.code_generator(sample)\r\n\r\n        # Compile and register the new function\r\n        namespace = {}\r\n        exec(code, namespace)\r\n        parser_fn = namespace.get('parse')\r\n\r\n        if parser_fn:\r\n            format_name = f\"parser_{len(self.tools)}\"\r\n            self.tools[format_name] = parser_fn\r\n            return parser_fn\r\n\r\n        return lambda x: {'raw': x}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "54-self-healing-systems",
      children: "5.4 Self-Healing Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Adaptive systems that diagnose and fix themselves using code generation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface SystemDiagnostic {\r\n    component: string\r\n    status: 'healthy' | 'degraded' | 'failed'\r\n    error?: string\r\n    suggestedFix?: string\r\n}\r\n\r\nclass SelfHealingSystem {\r\n    private diagnosisHistory: SystemDiagnostic[] = []\r\n\r\n    async diagnose(component: string, logs: string[]): Promise<SystemDiagnostic> {\r\n        // Analyze logs for known error patterns\r\n        const errorPatterns = [\r\n            { pattern: /out of memory/i, fix: 'Increase memory limit or optimize memory usage' },\r\n            { pattern: /connection refused/i, fix: 'Restart the service or check network config' },\r\n            { pattern: /timeout/i, fix: 'Increase timeout or add retry logic' },\r\n            { pattern: /permission denied/i, fix: 'Fix file permissions or run as correct user' },\r\n            { pattern: /not found/i, fix: 'Install missing dependency or fix import path' },\r\n        ]\r\n\r\n        const combinedLogs = logs.join('\\n')\r\n        for (const { pattern, fix } of errorPatterns) {\r\n            if (pattern.test(combinedLogs)) {\r\n                const diagnostic: SystemDiagnostic = {\r\n                    component,\r\n                    status: 'failed',\r\n                    error: `Matched: ${pattern.source}`,\r\n                    suggestedFix: fix\r\n                }\r\n                this.diagnosisHistory.push(diagnostic)\r\n                return diagnostic\r\n            }\r\n        }\r\n\r\n        return { component, status: 'healthy' }\r\n    }\r\n\r\n    async autoHeal(diagnostic: SystemDiagnostic): Promise<boolean> {\r\n        if (diagnostic.status === 'healthy') return true\r\n\r\n        const component = diagnostic.component\r\n        const fix = diagnostic.suggestedFix ?? ''\r\n\r\n        console.log(`[SelfHeal] Attempting fix for ${component}: ${fix.slice(0, 50)}...`)\r\n\r\n        // Apply the fix\r\n        const fixCode = this.generateFixCode(component, fix)\r\n        try {\r\n            const fixFn = new Function('diagnostic', fixCode)\r\n            await fixFn(diagnostic)\r\n            return true\r\n        } catch (err) {\r\n            console.error(`[SelfHeal] Fix failed for ${component}:`, err)\r\n            return false\r\n        }\r\n    }\r\n\r\n    private generateFixCode(component: string, fixDescription: string): string {\r\n        if (fixDescription.includes('memory')) {\r\n            return `console.log('Restarting ${component} with increased memory...'); return true;`\r\n        }\r\n        if (fixDescription.includes('restart')) {\r\n            return `console.log('Restarting ${component} service...'); return true;`\r\n        }\r\n        return `console.log('Applying generic fix for ${component}: ${fixDescription}'); return true;`\r\n    }\r\n\r\n    reportHealingHistory(): SystemDiagnostic[] {\r\n        return this.diagnosisHistory\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "55-nl-to-sql-and-forms",
      children: "5.5 NL-to-SQL and Forms"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Natural language interfaces that generate SQL or dynamic forms."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class NLToSQLAgent {\r\n    private schema: Record<string, string[]> = {\r\n        users: ['id', 'name', 'email', 'created_at'],\r\n        orders: ['id', 'user_id', 'total', 'status', 'created_at'],\r\n        products: ['id', 'name', 'price', 'category'],\r\n        order_items: ['id', 'order_id', 'product_id', 'quantity']\r\n    }\r\n\r\n    async convert(nlQuery: string): Promise<{ sql: string; explanation: string }> {\r\n        const prompt = [\r\n            'Translate the following natural language query to SQL.',\r\n            'Schema:',\r\n            ...Object.entries(this.schema).map(([table, cols]) =>\r\n                `  ${table}(${cols.join(', ')})`\r\n            ),\r\n            '',\r\n            `Query: ${nlQuery}`,\r\n            'SQL:'\r\n        ].join('\\n')\r\n\r\n        // Mock SQL generation\r\n        const sql = this.mockGenerateSQL(nlQuery)\r\n\r\n        return {\r\n            sql,\r\n            explanation: `Generated SQL from: \"${nlQuery}\"`\r\n        }\r\n    }\r\n\r\n    private mockGenerateSQL(nlQuery: string): string {\r\n        const nl = nlQuery.toLowerCase()\r\n\r\n        if (nl.includes('all users') || nl.includes('list users')) {\r\n            return 'SELECT id, name, email FROM users ORDER BY created_at DESC;'\r\n        }\r\n        if (nl.includes('order') && nl.includes('total')) {\r\n            return 'SELECT o.id, u.name, o.total FROM orders o JOIN users u ON o.user_id = u.id WHERE o.status = \\'completed\\' ORDER BY o.total DESC;'\r\n        }\r\n        if (nl.includes('product') && nl.includes('category')) {\r\n            return 'SELECT category, COUNT(*) as count, ROUND(AVG(price), 2) as avg_price FROM products GROUP BY category ORDER BY count DESC;'\r\n        }\r\n        if (nl.includes('revenue') || nl.includes('sales')) {\r\n            return 'SELECT DATE(created_at) as day, SUM(total) as revenue FROM orders WHERE status = \\'completed\\' GROUP BY day ORDER BY day DESC LIMIT 30;'\r\n        }\r\n\r\n        return `SELECT * FROM information_schema.tables WHERE table_schema = 'public' LIMIT 10;`\r\n    }\r\n}\r\n\r\nclass DynamicFormGenerator {\r\n    async generateForm(intent: string, missingInfo: string[]): Promise<string> {\r\n        const fields = missingInfo.map(info => ({\r\n            name: this.toFieldName(info),\r\n            label: info,\r\n            type: this.inferFieldType(info),\r\n            required: true\r\n        }))\r\n\r\n        const html = [\r\n            '<form id=\"dynamic-form\">',\r\n            ...fields.map(f => [\r\n                `<div class=\"form-group\">`,\r\n                `  <label for=\"${f.name}\">${f.label}</label>`,\r\n                `  <input type=\"${f.type}\" id=\"${f.name}\" name=\"${f.name}\" ${f.required ? 'required' : ''} />`,\r\n                `</div>`\r\n            ].join('\\n')),\r\n            '  <button type=\"submit\">Submit</button>',\r\n            '</form>',\r\n            '<script>',\r\n            'document.getElementById(\"dynamic-form\").addEventListener(\"submit\", async (e) => {',\r\n            '  e.preventDefault();',\r\n            '  const data = Object.fromEntries(new FormData(e.target));',\r\n            '  document.dispatchEvent(new CustomEvent(\"form-submitted\", { detail: data }));',\r\n            '});',\r\n            '</script>'\r\n        ].join('\\n')\r\n\r\n        return html\r\n    }\r\n\r\n    private toFieldName(label: string): string {\r\n        return label.toLowerCase().replace(/[^a-z0-9]+/g, '_')\r\n    }\r\n\r\n    private inferFieldType(info: string): string {\r\n        const i = info.toLowerCase()\r\n        if (i.includes('email')) return 'email'\r\n        if (i.includes('number') || i.includes('age') || i.includes('price') || i.includes('count')) return 'number'\r\n        if (i.includes('date') || i.includes('time')) return 'date'\r\n        if (i.includes('phone')) return 'tel'\r\n        if (i.includes('url') || i.includes('website')) return 'url'\r\n        if (i.includes('password') || i.includes('secret')) return 'password'\r\n        return 'text'\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "56-artifact-pattern",
      children: "5.6 Artifact Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The artifact pattern generates code without moving data — the LLM produces an artifact (code, HTML, SQL), and execution happens on the client side."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Artifact {\r\n    id: string\r\n    type: 'code' | 'html' | 'svg' | 'sql' | 'json' | 'markdown'\r\n    title: string\r\n    content: string\r\n    language: string\r\n}\r\n\r\nclass ArtifactGenerator {\r\n    private artifacts: Artifact[] = []\r\n\r\n    async generate(request: string, type: Artifact['type']): Promise<Artifact> {\r\n        const artifact: Artifact = {\r\n            id: `artifact_${this.artifacts.length + 1}`,\r\n            type,\r\n            title: request.slice(0, 50),\r\n            content: await this.mockGenerate(type, request),\r\n            language: this.getLanguage(type)\r\n        }\r\n\r\n        this.artifacts.push(artifact)\r\n        return artifact\r\n    }\r\n\r\n    private async mockGenerate(type: Artifact['type'], request: string): Promise<string> {\r\n        switch (type) {\r\n            case 'html':\r\n                return '<html><body><h1>' + request + '</h1></body></html>'\r\n            case 'svg':\r\n                return '<svg><circle cx=\"50\" cy=\"50\" r=\"40\"/></svg>'\r\n            case 'sql':\r\n                return `-- Generated for: ${request}\\nSELECT * FROM mock_table;`\r\n            case 'json':\r\n                return JSON.stringify({ request, generated: true, timestamp: Date.now() }, null, 2)\r\n            case 'code':\r\n                return `// ${request}\\nfunction solution() {\\n  return \"ok\"\\n}\\n`\r\n            case 'markdown':\r\n                return `# ${request}\\n\\nGenerated content for: ${request}`\r\n        }\r\n    }\r\n\r\n    private getLanguage(type: Artifact['type']): string {\r\n        const map: Record<string, string> = {\r\n            code: 'typescript',\r\n            html: 'html',\r\n            svg: 'svg',\r\n            sql: 'sql',\r\n            json: 'json',\r\n            markdown: 'markdown'\r\n        }\r\n        return map[type]\r\n    }\r\n\r\n    list(): Artifact[] {\r\n        return this.artifacts\r\n    }\r\n\r\n    get(id: string): Artifact | undefined {\r\n        return this.artifacts.find(a => a.id === id)\r\n    }\r\n\r\n    render(artifact: Artifact): string {\r\n        return [\r\n            `<!-- Artifact: ${artifact.id} -->`,\r\n            `<!-- Type: ${artifact.type} -->`,\r\n            `<!-- Title: ${artifact.title} -->`,\r\n            '',\r\n            artifact.content\r\n        ].join('\\n')\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Coding agents represent the highest-value category of AI agents. The Proposer-Reviewer pattern ensures quality through automated code review. Code as a meta-tool enables self-healing systems that generate their own fixes. The artifact pattern (LLM generates code → client executes) saves tokens and.\r\nimproves security. Self-healing systems using adaptive log parsing and auto-diagnosis reduce operational burden."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always include a reviewer step — generated code without review is tech debt"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use shell sessions (not one-shot commands) for longer coding tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the artifact pattern for any LLM-generated code — the LLM creates, the client executes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Self-healing systems: when a component fails, generate a fix, test it, apply it"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NL-to-SQL is the highest-ROI coding agent application"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m22-s05-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: How does a coding agent differ from an LLM generating code?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["An LLM generates code once; a coding agent is an iterative engineering system that plans, edits, verifies, and self-corrects until tests pass. Its core architecture includes a tool suite (", (0,jsx_runtime.jsx)(_components.code, {
            children: "read_file"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "write_file"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "list_files"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "execute_code"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "search_code"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "git_commit"
          }), "), system prompts that define the workflow, lint checks, and automated test runs. The key differentiator is the feedback loop: the agent runs the code, sees lint or test failures, and iterates on its own output — closing the loop between generation and validation, which is exactly what the chapter's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CodingAgent"
          }), " demonstrates."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": What is the biggest failure mode when this loop runs unsupervised?"]
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
      "data-qid": "m22-s05-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: Explain the Proposer-Reviewer pattern and how it improves code quality.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ProposerAgent"
          }), " produces code changes for a task, then a separate ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ReviewerAgent"
          }), " receives the generated diff with specific instructions — check for bugs, missed edge cases, and style issues, and return structured feedback (", (0,jsx_runtime.jsx)(_components.code, {
            children: "can_merge"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "issues"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "suggestions"
          }), "). If the reviewer flags problems, the loop regenerates with the feedback appended until the reviewer passes or max iterations are hit. The reviewer is role-separated so its context isn't contaminated by the proposer's assumptions, and the chapter shows the reviewer catching real bugs like `arr[0]` undefined when the array is empty."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": How do you prevent the reviewer from being overly lenient on its own proposer's output?"]
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
      "data-qid": "m22-s05-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: How does Code as a Meta-Tool work and what efficiency gain does it bring?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Code as a Meta-Tool lets the agent write code to solve a task rather than calling a fixed tool: it generates a script (e.g., a web scraper or data transformer), executes it, and receives the result as feedback. This converts many specialized tools into one general capability, and it's an order of magnitude more efficient — the chapter's example solves a scraping task in 3 agent steps instead of 30 ReAct tool-call steps. The pattern works because code execution is a closed loop with deterministic feedback, unlike ambiguous tool calls."
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": What sandboxing risks does executing generated code introduce?"]
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
      "data-qid": "m22-s05-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: What makes a coding agent self-healing and how does adaptive log parsing work?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Self-healing means the agent handles runtime failures without human intervention: when execution fails it parses the error, matches it against known failure patterns, and retries with a targeted fix. The chapter's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "FailureDetector"
          }), " uses adaptive log parsing — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "LogParser"
          }), " extracts structured fields (timestamp, level, message) from logs, and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ErrorLearner"
          }), " mines the messages to build a pattern library like ", (0,jsx_runtime.jsx)(_components.code, {
            children: "TypeError"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "IndexError"
          }), " with severity levels. Known patterns trigger immediate fixes; unknown ones trigger a re-prompt with the raw log. The system also records successful fix recipes, so healing improves over time."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": How do you know when self-healing is causing more harm than help?"]
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
      "data-qid": "m22-s05-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How does an NL-to-SQL coding agent work end to end?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["An NL-to-SQL agent translates natural language to database queries through a schema-first loop: it loads the DB schema (", (0,jsx_runtime.jsx)(_components.code, {
            children: "SCHEMA.md"
          }), "), lets the model propose SQL, executes it against the database in read-only mode, and compares the result to the expected answer. If the schema is insufficient — say a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "NOT NULL"
          }), " column is missing — it fetches the full schema and retries. The chapter's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "run()"
          }), " example returns results like ", (0,jsx_runtime.jsx)(_components.code, {
            children: "[{ student: 'Alice', cgpa: 9.1 }]"
          }), " for a question like \"who scored above 9.0\". Because execution feedback is deterministic, the loop converges quickly on correct SQL."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": How would you protect this pipeline from destructive SQL such as DROP or UPDATE?"]
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
      "data-qid": "m22-s05-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How would you build a form-filling agent and what trust guardrails does it need?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A form-filling agent starts from a HTML form definition (", (0,jsx_runtime.jsx)(_components.code, {
            children: "FORM.md"
          }), " listing fields like ", (0,jsx_runtime.jsx)(_components.code, {
            children: "name"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "email"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "dob"
          }), " with validation rules and required flags), reads values from a user data profile, validates each input against constraints, and either fills the form or returns a missing-fields report. Validation failures (bad email format, required field missing) are caught before submission. The chapter emphasizes guardrails: read data only from the known profile, never fill sensitive fields like passwords, and always require explicit confirmation before submitting. Trust is the limiting factor for autonomous agents acting on real forms."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": How would you handle a form that changes its fields between reads?"]
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
      children: "1. What is the Proposer-Reviewer pattern?"
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "2. Why is code described as a \"meta-tool\"?"
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "3. What is the artifact pattern in code generation?"
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "4. How does a self-healing system handle a new log format?"
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "5. What is the advantage of NL-to-SQL over traditional form-based data access?"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "answers",
      children: "Answers"
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "A generative loop where one component (Proposer) generates code and another (Reviewer) evaluates it for quality, safety, and style issues. The loop continues until the reviewer approves or max iterations reached."
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "Because code can create new tools dynamically. A coding agent doesn't just use existing tools — it generates new tools (parsers, scripts, APIs) at runtime, making it the most versatile capability an agent can have."
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "The LLM generates an artifact (code, HTML, SQL, SVG) without executing it. The client or runtime environment executes the artifact. This saves tokens, reduces latency, and avoids moving data through the LLM."
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "The adaptive log parser detects a parse failure, sends a sample to the code generation agent, which produces a parser function. The function is tested, hot-loaded into the parsing engine, and future log lines of the same format are parsed automatically."
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "Users express intent in natural language instead of navigating complex forms. The system generates the correct SQL or form dynamically, reducing UI complexity and enabling ad-hoc queries that forms can't support."
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
        children: "Not practicing enough problems to build pattern recognition### Exercise 1: Build a Coding Agent"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement file read/write/edit, search, and shell tools. Use them to modify a sample codebase."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-proposer-reviewer-loop",
      children: "Exercise 2: Proposer-Reviewer Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a system that generates Python code, reviews it for bare except clauses and missing docstrings, and fixes issues."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-dynamic-tool-creation",
      children: "Exercise 3: Dynamic Tool Creation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement a system that generates a new data parser when it encounters an unrecognized log format."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-nl-to-sql-converter",
      children: "Exercise 4: NL-to-SQL Converter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a natural language to SQL converter for a 3-table schema. Test with 10 varied queries."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-self-healing-diagnostic",
      children: "Exercise 5: Self-Healing Diagnostic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a component that reads error logs, diagnoses issues, generates a fix script, and ap"
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
            children: "How does Coding Agents behave differently at scale — memory, throughput, or precision-wise?"
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
        children: "Name the technique explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Coding Agents\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Coding Agents to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Coding Agents (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Coding Agents and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Coding Agents-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic problem in this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Coding Agents in production today?"
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
        }), " Coding Agents builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Coding Agents before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Coding Agents is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Coding Agents in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "The chapter that covers Coding Agents is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 05 Coding Agents is ___. — Answer: O(k) per tool call where k=tool latency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 05 Coding Agents is ___. — Answer: infinite loops, tool failures, context overflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Coding Agents issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Coding Agents in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Coding Agents that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
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
          }), " A new hire asks you to explain Coding Agents in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Coding Agents and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
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
            children: "Complete Medium exercises, explain Coding Agents to someone else"
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
        children: "Always write a one-line example of Coding Agents from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Coding Agents when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Coding Agents twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Coding Agents snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Coding Agents listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Coding Agents to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Coding Agents by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Coding Agents to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
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
        children: "'Building LLM Powered Applications' by Valentina Alto (Packt) Agents"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 22 — builds the foundation for 05 Coding Agents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 05 Coding Agents with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 05 Coding Agents fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 05 Coding Agents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 05 Coding Agents"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 05 Coding Agents?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 05 Coding Agents?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 05 Coding Agents asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 05 Coding Agents?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Coding Agents is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Coding Agents."
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
        children: "Coding Agents emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Coding Agents today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Coding Agents — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Coding Agents changes quickly; focus on fundamentals that remain stable."
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
            children: "05 Coding Agents is like a GPS navigation system"
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
          }), " — this chapter contributes the Coding Agents skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-05codingagents-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Coding Agents in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "An AI agent is an autonomous system that uses an LLM as its reasoning engine to perceive inputs, decide actions, call tools, observe results, and iterate until a task is complete."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-05codingagents-flash2",
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
      "data-qid": "22advancedaiagents-05codingagents-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Coding Agents approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Agent complexity: O(k * t) where k=steps taken, t=average tool latency. Each LLM call is O(n^2) attention over context. Total cost grows linearly with steps."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-05codingagents-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Coding Agents NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Agents are NOT the right choice when: (1) a single LLM call suffices, (2) deterministic pipelines are required, (3) latency < 500ms is needed, (4) the task has no external tool requirements."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-05codingagents-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Coding Agents applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Coding Agents (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Coding Agents (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Coding Agents-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Coding Agents in production at scale"
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
        }), " — Claude's native function calling interface Agents"]
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
        }), ": Add structured logging at each stage of the 05 Coding Agents pipeline to identify exactly where the failure occurs."]
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
        children: "Write a minimal working example of Coding Agents."
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
        children: "Tell me about a time you debugged a Coding Agents problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Coding Agents is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_05_coding_agents(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 05 Coding Agents.\r\n\r\n    Key concepts: tools, memory, planning, execution, observation\r\n    Complexity: O(k) per tool call where k=tool latency\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 05 Coding Agents here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain Coding Agents without notes"
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
        href: "/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/06-agent-evaluation",
        children: "Agent Evaluation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Coding Agents, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Coding Agents depends on input size and distribution — always benchmark for your own data."
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