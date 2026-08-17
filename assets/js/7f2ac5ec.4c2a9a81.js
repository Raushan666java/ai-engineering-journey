"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[32715],{

/***/ 61504
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_15_mcp_md_7f2_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-15-mcp-md-7f2.json
const site_docs_courses_laravel_15_mcp_md_7f2_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/15-mcp","title":"Chapter 15: Laravel MCP → Model Context Protocol","description":"Previous Semantic Search, Vector Search & RAG with pgvector","source":"@site/docs/courses/laravel/15-mcp.md","sourceDirName":"courses/laravel","slug":"/laravel/15-mcp","permalink":"/ai-engineering-journey/laravel/15-mcp","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"id":"15-mcp","slug":"/laravel/15-mcp","title":"Chapter 15: Laravel MCP → Model Context Protocol","sidebar_label":"Chapter 15: Laravel MCP → Model Context Protocol","sidebar_position":15},"sidebar":"course-laravel","previous":{"title":"Chapter 14: Laravel AI SDK → Images, Audio, Transcriptions & Embeddings","permalink":"/ai-engineering-journey/laravel/14-ai-sdk-media"},"next":{"title":"Chapter 16: Semantic Search, Vector Search & RAG with pgvector","permalink":"/ai-engineering-journey/laravel/16-search-rag"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/15-mcp.md


const frontMatter = {
	id: '15-mcp',
	slug: '/laravel/15-mcp',
	title: 'Chapter 15: Laravel MCP → Model Context Protocol',
	sidebar_label: 'Chapter 15: Laravel MCP → Model Context Protocol',
	sidebar_position: 15
};
const contentTitle = 'Chapter 15: Laravel MCP → Model Context Protocol';

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
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "15.1 MCP Overview",
  "id": "151-mcp-overview",
  "level": 3
}, {
  "value": "15.2 Installation",
  "id": "152-installation",
  "level": 3
}, {
  "value": "15.3 Creating Servers",
  "id": "153-creating-servers",
  "level": 3
}, {
  "value": "15.4 Server Registration",
  "id": "154-server-registration",
  "level": 3
}, {
  "value": "15.5 Creating Tools",
  "id": "155-creating-tools",
  "level": 3
}, {
  "value": "15.6 Tool Annotations",
  "id": "156-tool-annotations",
  "level": 3
}, {
  "value": "15.7 Tool Responses",
  "id": "157-tool-responses",
  "level": 3
}, {
  "value": "15.8 Prompts",
  "id": "158-prompts",
  "level": 3
}, {
  "value": "15.9 Resources",
  "id": "159-resources",
  "level": 3
}, {
  "value": "15.10 MCP Apps",
  "id": "1510-mcp-apps",
  "level": 3
}, {
  "value": "15.11 Authentication",
  "id": "1511-authentication",
  "level": 3
}, {
  "value": "15.12 MCP Client",
  "id": "1512-mcp-client",
  "level": 3
}, {
  "value": "15.13 Testing MCP Servers",
  "id": "1513-testing-mcp-servers",
  "level": 3
}, {
  "value": "15.14 Complete Example: Weather MCP Server",
  "id": "1514-complete-example-weather-mcp-server",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference — MCP Artisan Commands",
  "id": "quick-reference--mcp-artisan-commands",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Review Questions",
  "id": "review-questions",
  "level": 3
}, {
  "value": "Application Problems",
  "id": "application-problems",
  "level": 3
}, {
  "value": "Challenge Problem",
  "id": "challenge-problem",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "chapter-15-laravel-mcp--model-context-protocol",
        children: "Chapter 15: Laravel MCP → Model Context Protocol"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./14-ai-sdk-media",
          children: "Laravel AI SDK -- Images, Audio, Transcriptions & Embeddings"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./16-search-rag",
          children: "Semantic Search, Vector Search & RAG with pgvector"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the Model Context Protocol specification and its architecture"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Install and configure Laravel MCP in a Laravel application"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create MCP servers with tools, resources, and prompts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement tool schemas, annotations, and response types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build an MCP Client for agent integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Authenticate and test MCP servers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Topics"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MCP Overview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol architecture, primitives"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Server Creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attributes, tools/resources/prompts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Server Registration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP and local deployment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "inputSchema, handle, outputSchema"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tool Annotations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ReadOnly, Destructive, Idempotent, OpenWorld"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tool Responses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text, file, structured, streaming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prompts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Templates, arguments, validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resources"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URI-based data, template parameters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MCP Apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blade/Livewire interactive UIs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OAuth 2.1, Sanctum tokens"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MCP Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consuming remote servers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP assertions, unit testing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[MCP Overview] --> B[Creating Servers]\n    B --> C[Server Registration]\n    C --> D[Tools]\n    C --> E[Prompts]\n    C --> F[Resources]\n    D --> G[Tool Annotations]\n    D --> H[Tool Responses]\n    F --> I[MCP Apps]\n    C --> J[Authentication]\n    J --> K[MCP Client]\n    K --> L[Testing]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/15-mcp.png",
        alt: "MCP Integration"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "151-mcp-overview",
      children: "15.1 MCP Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " MCP is an open standard defining how AI clients communicate with servers that provide tools, resources, and prompts via JSON-RPC."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Model Context Protocol (MCP) is an open standard published by Anthropic that defines how AI clients communicate with servers that provide context, tools, and resources. It follows a client-server architecture where the AI model (the client) discovers and invokes capabilities exposed by MCP servers."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The protocol defines three core primitives:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tools"
        }), ": Actions the AI can invoke (functions with typed schemas)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resources"
        }), ": Data the AI can read (files, database records, API responses)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prompts"
        }), ": Pre-written templates the AI can use (structured interactions)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Laravel MCP (", (0,jsx_runtime.jsx)(_components.code, {
        children: "laravel/mcp"
      }), ") brings this protocol directly into the Laravel ecosystem. Every MCP server you build is a full Laravel class with access to the entire framework → Eloquent, Queues, Events, Caching, and all your application services. This means an AI agent can, through your MCP server, query your database, trigger business logic, read files, and generate reports using the same code paths your human-driven controllers use."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The architecture follows this flow:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AI Agent (Claude, Cursor, etc.)\n    │\n    ▼\nMCP Client (dispatches requests)\n    │\n    ▼\nMCP Server (Laravel class)\n    │\n    ├─ Tools ──────────► Command-like actions with JSON schemas\n    ├─ Resources ──────► Readable data at URIs\n    └─ Prompts ────────► Structured interaction templates\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A single server class declares its capabilities declaratively via PHP attributes and arrays, then Laravel MCP handles all the JSON-RPC wire protocol automatically."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "152-installation",
      children: "15.2 Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Start by requiring the package and publishing the configuration:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "composer require laravel/mcp\n\n> **Pro Tip:** Always define server instructions (#[Instructions]) with specific guidance on when to use each tool. This attribute is sent to the AI agent and significantly improves tool selection accuracy.\n\nphp artisan vendor:publish --tag=ai-routes\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The publish command creates a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "routes/ai.php"
      }), " file where you register your MCP servers. This file is loaded by the framework automatically when MCP routes are needed, keeping your server registrations separate from web and API routes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The package also publishes a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config/mcp.php"
      }), " configuration file where you can set defaults for authentication, rate limiting, and client registration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "153-creating-servers",
      children: "15.3 Creating Servers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " MCP servers are Laravel classes extending Server with PHP attributes for name, version, and instructions, and arrays for tools, resources, and prompts."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An MCP server is a plain PHP class that extends ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Laravel\\Mcp\\Server"
      }), ". Use the generator command to scaffold one:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "php artisan make:mcp-server WeatherServer\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This creates ", (0,jsx_runtime.jsx)(_components.code, {
        children: "App\\Mcp\\Servers\\WeatherServer.php"
      }), ". Open it and define the server's identity and capabilities:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Mcp\\Servers;\n\nuse Laravel\\Mcp\\Server;\nuse Laravel\\Mcp\\Attributes\\Name;\nuse Laravel\\Mcp\\Attributes\\Version;\nuse Laravel\\Mcp\\Attributes\\Instructions;\nuse App\\Mcp\\Tools\\CurrentWeatherTool;\nuse App\\Mcp\\Tools\\ForecastTool;\nuse App\\Mcp\\Resources\\WeatherAlertResource;\nuse App\\Mcp\\Prompts\\WeatherSummaryPrompt;\n\n#[Name('weather-server')]\n#[Version('1.0.0')]\n#[Instructions(\n    'Provides current weather data, forecasts, and alerts. ' .\n    'Use CurrentWeatherTool for real-time conditions, ' .\n    'ForecastTool for 7-day outlook, and ' .\n    'WeatherAlertResource for active warnings in an area.'\n)]\nclass WeatherServer extends Server\n{\n    protected array $tools = [\n        CurrentWeatherTool::class,\n        ForecastTool::class,\n    ];\n\n    protected array $resources = [\n        WeatherAlertResource::class,\n    ];\n\n    protected array $prompts = [\n        WeatherSummaryPrompt::class,\n    ];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#[Name]"
      }), " attribute sets the server identifier used in the MCP protocol. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#[Version]"
      }), " enables clients to check for updated capabilities. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#[Instructions]"
      }), " provides a natural-language description that the AI agent reads to understand what this server does and when to invoke its tools."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$tools"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$resources"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$prompts"
      }), " arrays register the server's capabilities. Each entry is a fully-qualified class name that the framework resolves lazily."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "154-server-registration",
      children: "15.4 Server Registration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Servers are registered in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "routes/ai.php"
      }), ". There are two deployment modes:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "HTTP servers"
      }), " expose your MCP server as a POST endpoint. The AI agent sends JSON-RPC requests to this URL:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse Illuminate\\Support\\Facades\\Route;\nuse Laravel\\Mcp\\Facades\\Mcp;\nuse App\\Mcp\\Servers\\WeatherServer;\n\n// HTTP server → accessible at /mcp/weather via POST\nMcp::web('/mcp/weather', WeatherServer::class)\n\n> **Warning:** Always add authentication and rate limiting middleware to HTTP MCP servers. An unauthenticated MCP server exposes your application's internal tools and data to anyone who discovers the endpoint.\n    ->middleware('throttle:30,1')\n    ->middleware('auth:sanctum');\n\n// Multiple HTTP servers on different endpoints\nMcp::web('/mcp/analytics', AnalyticsServer::class);\nMcp::web('/mcp/crm', CrmServer::class);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "web"
      }), " method returns a route builder, so you can chain middleware just like a normal Laravel route. This is critical for production → you can throttle, authenticate, and authorize access to each server independently."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Local servers"
      }), " are registered for CLI usage. They work with Laravel Boost and Artisan commands, never exposing an HTTP endpoint:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Mcp::local('weather', WeatherServer::class);\nMcp::local('analytics', AnalyticsServer::class);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Local servers are invoked via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "php artisan mcp:call {server} {tool}"
      }), " and are ideal for AI coding agents that run in the same environment as your application."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "155-creating-tools",
      children: "15.5 Creating Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " MCP tools define inputSchema for parameters, handle() for execution logic, and outputSchema for response documentation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tools are the core of MCP → they are the actions an AI agent can invoke. Generate one with:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "php artisan make:mcp-tool CurrentWeatherTool\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This creates ", (0,jsx_runtime.jsx)(_components.code, {
        children: "App\\Mcp\\Tools\\CurrentWeatherTool.php"
      }), ". A tool class extends ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Laravel\\Mcp\\Server\\Tool"
      }), " and implements a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "handle(Request): Response"
      }), " method:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Mcp\\Tools;\n\nuse Laravel\\Mcp\\Server\\Tool;\nuse Laravel\\Mcp\\Attributes\\Name;\nuse Laravel\\Mcp\\Attributes\\Title;\nuse Laravel\\Mcp\\Attributes\\Description;\nuse Laravel\\Mcp\\Server\\Request;\nuse Laravel\\Mcp\\Server\\Response;\nuse Laravel\\Mcp\\Server\\JsonSchema;\nuse Illuminate\\Support\\Facades\\Http;\n\n#[Name('get-current-weather')]\n#[Title('Get Current Weather')]\n#[Description('Retrieves the current weather conditions for a given city or geographic coordinates. Returns temperature, humidity, wind speed, and conditions.')]\nclass CurrentWeatherTool extends Tool\n{\n    public function inputSchema(JsonSchema $schema): void\n    {\n        $schema->string('city', description: 'City name (e.g., \"London\", \"Tokyo\", \"New York\")')\n            ->required();\n\n        $schema->string('units', description: 'Temperature unit')\n            ->enum('celsius', 'fahrenheit')\n            ->default('celsius');\n\n        $schema->string('country_code', description: 'ISO 3166-1 alpha-2 country code')\n            ->default('US');\n    }\n\n    public function handle(Request $request): Response\n    {\n        $data = $request->validate([\n            'city' => ['required', 'string', 'max:255'],\n            'units' => ['string', 'in:celsius,fahrenheit'],\n            'country_code' => ['string', 'size:2'],\n        ]);\n\n        $response = Http::get('https://api.weatherapi.com/v1/current.json', [\n            'key' => config('services.weatherapi.key'),\n            'q' => $data['city'] . ',' . $data['country_code'],\n            'aqi' => 'no',\n        ]);\n\n        if ($response->failed()) {\n            return Response::error(\n                message: 'Unable to fetch weather data.',\n                data: ['status' => $response->status()],\n            );\n        }\n\n        $current = $response->json('current');\n\n        $tempField = $data['units'] === 'fahrenheit' ? 'temp_f' : 'temp_c';\n        $windField = $data['units'] === 'fahrenheit' ? 'wind_mph' : 'wind_kph';\n\n        return Response::text(json_encode([\n            'city' => $response->json('location.name'),\n            'region' => $response->json('location.region'),\n            'country' => $response->json('location.country'),\n            'temperature' => $current[$tempField],\n            'units' => $data['units'],\n            'condition' => $current['condition']['text'],\n            'humidity' => $current['humidity'],\n            'wind_speed' => $current[$windField],\n            'last_updated' => $current['last_updated'],\n        ], JSON_PRETTY_PRINT));\n    }\n\n    public function outputSchema(JsonSchema $schema): void\n    {\n        $schema->string('city', description: 'City name');\n        $schema->string('region', description: 'Region or state');\n        $schema->string('country', description: 'Country name');\n        $schema->number('temperature', description: 'Current temperature');\n        $schema->string('units', description: 'Temperature unit used');\n        $schema->string('condition', description: 'Weather condition description');\n        $schema->number('humidity', description: 'Humidity percentage');\n        $schema->number('wind_speed', description: 'Wind speed');\n        $schema->string('last_updated', description: 'Last update timestamp');\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "inputSchema()"
      }), " method defines the parameters the AI agent must supply. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JsonSchema"
      }), " provides a fluent builder for each JSON Schema type:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$schema->string(name, description: '...')\n    ->minLength(1)\n    ->maxLength(255)\n    ->required();\n\n$schema->integer(name, description: '...')\n    ->minimum(0)\n    ->maximum(100)\n    ->required();\n\n$schema->number(name, description: '...')\n    ->exclusiveMinimum(0);\n\n$schema->boolean(name, description: '...');\n\n$schema->array(name, description: '...')\n    ->items($schema->string());\n\n$schema->enum(name, ...values)->default(firstValue);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "outputSchema()"
      }), " method documents what the response contains. This helps the AI agent understand the structure before it calls the tool, improving reliability."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "156-tool-annotations",
      children: "15.6 Tool Annotations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Annotations like IsReadOnly, IsDestructive, IsIdempotent, and IsOpenWorld communicate behavioral metadata to guide AI agent decision-making."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Annotations convey metadata about tool behavior to the AI agent. They help the model make safe decisions about when and how to invoke tools:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Mcp\\Tools;\n\nuse Laravel\\Mcp\\Server\\Tool;\nuse Laravel\\Mcp\\Attributes\\Name;\nuse Laravel\\Mcp\\Attributes\\Description;\nuse Laravel\\Mcp\\Attributes\\IsReadOnly;\nuse Laravel\\Mcp\\Attributes\\IsDestructive;\nuse Laravel\\Mcp\\Attributes\\IsIdempotent;\nuse Laravel\\Mcp\\Attributes\\IsOpenWorld;\nuse Laravel\\Mcp\\Server\\Request;\nuse Laravel\\Mcp\\Server\\Response;\n\n#[Name('archive-invoice')]\n#[Description('Archives a paid invoice by moving it from active to archived status. Can be reversed via restore-invoice.')]\n#[IsDestructive]\nclass ArchiveInvoiceTool extends Tool\n{\n    public function handle(Request $request): Response\n    {\n        $data = $request->validate([\n            'invoice_id' => ['required', 'integer', 'exists:invoices,id'],\n        ]);\n\n        $invoice = Invoice::findOrFail($data['invoice_id']);\n\n        if (! $invoice->isPaid()) {\n            return Response::error('Only paid invoices can be archived.');\n        }\n\n        $invoice->update(['status' => 'archived', 'archived_at' => now()]);\n\n        return Response::text(\n            \"Invoice #{$invoice->id} has been archived.\"\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The four annotations are:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "#[IsReadOnly]"
        }), " → The tool does not modify any state. Safe to preview or call speculatively"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "#[IsDestructive]"
        }), " → The tool deletes or permanently modifies data. The AI will exercise extra caution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "#[IsIdempotent]"
        }), " → Calling the tool multiple times with the same arguments produces the same result. Safe to retry after a failure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "#[IsOpenWorld]"
        }), " → The tool interacts with external systems (APIs, third-party services). Results may change between calls"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "157-tool-responses",
      children: "15.7 Tool Responses"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Tools return structured responses via Response::text(), Response::fromStorage(), Response::error(), Response::image(), and streaming generators."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tools return structured responses. Laravel MCP provides several response types for different data shapes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Mcp\\Tools;\n\nuse Laravel\\Mcp\\Server\\Tool;\nuse Laravel\\Mcp\\Server\\Request;\nuse Laravel\\Mcp\\Server\\Response;\nuse App\\Models\\Report;\n\n#[Name('generate-report-pdf')]\n#[Title('Generate Report PDF')]\nclass GenerateReportTool extends Tool\n{\n    public function handle(Request $request): Response\n    {\n        $data = $request->validate([\n            'report_id' => ['required', 'integer', 'exists:reports,id'],\n            'format' => ['string', 'in:pdf,html,csv'],\n        ]);\n\n        $report = Report::findOrFail($data['report_id']);\n\n        $pdfContent = $report->generatePdf();\n\n        // Simple text response\n        if ($data['format'] === 'csv') {\n            return Response::text($report->toCsv());\n        }\n\n        // File from storage disk\n        if ($data['format'] === 'pdf') {\n            return Response::fromStorage(\n                path: \"reports/report-{$report->id}.pdf\",\n                disk: 's3',\n                mimeType: 'application/pdf',\n                filename: \"report-{$report->id}.pdf\",\n            );\n        }\n\n        // Multi-content response with metadata and embedded data\n        return Response::structured([\n            'id' => $report->id,\n            'title' => $report->title,\n            'generated_at' => now()->toIso8601String(),\n            'sections' => $report->sections->map(function ($section) {\n                return [\n                    'heading' => $section->heading,\n                    'word_count' => str_word_count($section->body),\n                    'status' => $section->status,\n                ];\n            })->toArray(),\n            'total_word_count' => $report->sections->sum(fn ($s) => str_word_count($s->body)),\n        ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Other response methods include:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Return an error with optional context data\nResponse::error('Invoice not found.', data: ['invoice_id' => 42]);\n\n// Return an image (base64-encoded or from storage)\nResponse::image(storage_path('app/photos/photo.jpg'));\n\n// Return audio\nResponse::audio(\n    storage_path('app/recordings/call.mp3'),\n    mimeType: 'audio/mpeg'\n);\n\n// Multi-content array → multiple pieces of content in one response\nResponse::multi(\n    Response::text(json_encode(['summary' => '...'])),\n    Response::fromStorage('files/report.pdf', disk: 'local'),\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Streaming responses"
      }), " use PHP generators. The AI agent receives chunks as they are produced:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "#[Name('stream-logs')]\n#[Title('Stream Application Logs')]\nclass StreamLogsTool extends Tool\n{\n    public function handle(Request $request): Response\n    {\n        $data = $request->validate([\n            'lines' => ['integer', 'min:1', 'max:1000'],\n        ]);\n\n        return Response::text(function () use ($data) {\n            $filePath = storage_path('logs/laravel.log');\n            $handle = fopen($filePath, 'r');\n\n            if (! $handle) {\n                yield json_encode(['error' => 'Cannot open log file']);\n                return;\n            }\n\n            $position = filesize($filePath) - ($data['lines'] * 200);\n            $position = max(0, $position);\n            fseek($handle, $position);\n            fgets($handle);\n\n            $lineCount = 0;\n            while (($line = fgets($handle)) !== false && $lineCount < $data['lines']) {\n                yield json_encode(['line' => trim($line), 'number' => $lineCount + 1]);\n                $lineCount++;\n            }\n\n            fclose($handle);\n        });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "158-prompts",
      children: "15.8 Prompts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prompts are pre-written templates that guide the AI agent's behavior. They help the model produce consistent, high-quality output for specific tasks:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "php artisan make:mcp-prompt WeatherSummaryPrompt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Mcp\\Prompts;\n\nuse Laravel\\Mcp\\Server\\Prompt;\nuse Laravel\\Mcp\\Attributes\\Name;\nuse Laravel\\Mcp\\Attributes\\Description;\nuse Laravel\\Mcp\\Server\\Argument;\nuse Laravel\\Mcp\\Server\\Request;\nuse Laravel\\Mcp\\Server\\Response;\n\n#[Name('weather-summary')]\n#[Description('Generates a human-readable weather summary from raw data')]\nclass WeatherSummaryPrompt extends Prompt\n{\n    public function arguments(): array\n    {\n        return [\n            Argument::make('location', 'The city and country for the weather summary')\n                ->required(),\n\n            Argument::make('detail_level', 'How detailed the summary should be')\n                ->default('standard'),\n\n            Argument::make('include_recommendation', 'Whether to include activity recommendations')\n                ->default('true'),\n        ];\n    }\n\n    public function handle(Request $request): Response\n    {\n        $data = $request->validate([\n            'location' => ['required', 'string', 'max:255'],\n            'detail_level' => ['string', 'in:brief,standard,detailed'],\n            'include_recommendation' => ['boolean'],\n        ]);\n\n        $prompt = <<<PROMPT\nYou are a professional meteorologist providing a weather summary.\n\nLocation: {$data['location']}\nDetail Level: {$data['detail_level']}\n\nPlease provide a comprehensive weather summary that includes:\n\n1. Current conditions (temperature, humidity, wind)\n2. Forecast for the next 24-48 hours\n3. Any weather alerts or warnings\n\nUse the get-current-weather and get-forecast tools to retrieve the data.\n\nFormat your response in clear, plain language suitable for a general audience.\nPROMPT;\n\n        return Response::text($prompt);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Arguments use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Argument::make()"
      }), " helper which provides optional chaining for validation rules:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Argument::make('name', 'Description')\n    ->required()\n    ->default('value')\n    ->validate(['string', 'max:255']);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "159-resources",
      children: "15.9 Resources"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Resources expose readable data to the AI agent. They are identified by URIs and have a MIME type:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "php artisan make:mcp-resource WeatherAlertResource\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Mcp\\Resources;\n\nuse Laravel\\Mcp\\Server\\Resource;\nuse Laravel\\Mcp\\Attributes\\Name;\nuse Laravel\\Mcp\\Attributes\\Description;\nuse Laravel\\Mcp\\Server\\Request;\nuse Laravel\\Mcp\\Server\\Response;\n\n#[Name('weather-alerts')]\n#[Description('Active weather alerts and warnings for a region')]\n#[Uri('weather://alerts/{region}')]\n#[MimeType('application/json')]\nclass WeatherAlertResource extends Resource\n{\n    public function handle(Request $request): Response\n    {\n        $region = $request->route('region');\n\n        $alerts = $this->fetchAlertsForRegion($region);\n\n        return Response::text(json_encode([\n            'region' => $region,\n            'timestamp' => now()->toIso8601String(),\n            'alerts' => $alerts,\n        ], JSON_PRETTY_PRINT));\n    }\n\n    private function fetchAlertsForRegion(string $region): array\n    {\n        $response = Http::get('https://api.weather.gov/alerts/active/area/' . $region, [\n            'User-Agent' => config('app.name'),\n        ]);\n\n        if ($response->failed()) {\n            return [];\n        }\n\n        return collect($response->json('features', []))->map(function ($feature) {\n            $props = $feature['properties'];\n            return [\n                'event' => $props['event'],\n                'headline' => $props['headline'],\n                'severity' => $props['severity'],\n                'urgency' => $props['urgency'],\n                'effective' => $props['effective'],\n                'expires' => $props['expires'],\n                'description' => $props['description'],\n            ];\n        })->toArray();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Resource URIs can contain template parameters like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{region}"
      }), ". The framework extracts these from the URI and makes them available via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$request->route()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Conditional registration allows you to dynamically control which resources are available:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use App\\Models\\FeatureFlag;\n\nprotected array $resources = [\n    WeatherAlertResource::class,\n];\n\npublic function getResources(): array\n{\n    $resources = [WeatherAlertResource::class];\n\n    if (FeatureFlag::isEnabled('premium-weather')) {\n        $resources[] = PremiumForecastResource::class;\n    }\n\n    return $resources;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1510-mcp-apps",
      children: "15.10 MCP Apps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " MCP Apps render rich UIs using Blade and Livewire directly within AI agent interfaces, enabling interactive dashboards and forms."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MCP Apps allow you to build rich user interfaces that render directly within the AI agent's interface. They use Laravel's Blade or Livewire to create interactive experiences:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "php artisan make:mcp-server DashboardServer\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Mcp\\Servers;\n\nuse Laravel\\Mcp\\Server;\nuse Laravel\\Mcp\\Attributes\\Name;\nuse Laravel\\Mcp\\Attributes\\Version;\nuse Laravel\\Mcp\\Attributes\\Instructions;\nuse App\\Mcp\\Tools\\RenderDashboardTool;\n\n#[Name('dashboard-server')]\n#[Version('1.0.0')]\n#[Instructions('Provides interactive dashboards for key business metrics. Use RenderDashboardTool to display a real-time dashboard with charts and KPIs.')]\nclass DashboardServer extends Server\n{\n    protected array $tools = [\n        RenderDashboardTool::class,\n    ];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A tool that renders an app:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Mcp\\Tools;\n\nuse Laravel\\Mcp\\Server\\Tool;\nuse Laravel\\Mcp\\Server\\Request;\nuse Laravel\\Mcp\\Server\\Response;\nuse Laravel\\Mcp\\App;\n\n#[Name('render-sales-dashboard')]\n#[Title('Render Sales Dashboard')]\nclass RenderDashboardTool extends Tool\n{\n    public function handle(Request $request): Response\n    {\n        $data = $request->validate([\n            'period' => ['string', 'in:7d,30d,90d,ytd'],\n        ]);\n\n        return Response::app(\n            App::render('mcp.dashboards.sales', [\n                'period' => $data['period'],\n                'totalRevenue' => Sale::query()->where(...)->sum('amount'),\n                'chartData' => Sale::query()\n                    ->selectRaw(\"DATE(created_at) as date, SUM(amount) as total\")\n                    ->groupBy('date')\n                    ->orderBy('date')\n                    ->pluck('total', 'date'),\n            ])\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Blade view at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "resources/views/mcp/dashboards/sales.blade.php"
      }), " can use Tailwind CSS, Alpine.js, and Chart.js:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<div class=\"p-6 bg-white rounded-lg shadow\">\n    <h2 class=\"text-2xl font-bold mb-4\">Sales Dashboard</h2>\n    <p class=\"text-4xl font-extrabold text-green-600\">\n        ${{ number_format($totalRevenue, 2) }}\n    </p>\n    <canvas id=\"salesChart\" class=\"mt-6\"></canvas>\n</div>\n\n<script src=\"https://cdn.jsdelivr.net/npm/chart.js\"></script>\n<script>\n    const ctx = document.getElementById('salesChart').getContext('2d');\n    new Chart(ctx, {\n        type: 'line',\n        data: {\n            labels: @json(array_keys($chartData)),\n            datasets: [{\n                label: 'Revenue',\n                data: @json(array_values($chartData)),\n                borderColor: '#10b981',\n                backgroundColor: 'rgba(16, 185, 129, 0.1)',\n                fill: true,\n            }]\n        },\n        options: {\n            responsive: true,\n            maintainAspectRatio: false,\n        }\n    });\n</script>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1511-authentication",
      children: "15.11 Authentication"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Laravel MCP supports OAuth 2.1 for remote AI agents and Sanctum token-based auth for first-party integrations."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Laravel MCP supports two authentication flows. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OAuth 2.1"
      }), " flow is the standard for remote AI agents:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// routes/ai.php\nMcp::web('/mcp/weather', WeatherServer::class)\n    ->middleware('mcp.oauth');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure OAuth in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config/mcp.php"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "return [\n    'oauth' => [\n        'enabled' => true,\n        'scopes' => ['weather:read', 'weather:write'],\n        'token_lifetime' => 3600,\n        'refresh_token_lifetime' => 604800,\n    ],\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sanctum token authentication"
      }), " is simpler for first-party integrations:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use App\\Models\\User;\nuse Laravel\\Sanctum\\PersonalAccessToken;\n\n// routes/ai.php\nMcp::web('/mcp/weather', WeatherServer::class)\n    ->middleware('auth:sanctum');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Issuing a token for an MCP client:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$token = User::find(1)->createToken('mcp-agent', ['weather:read']);\n$plainTextToken = $token->plainTextToken;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The AI agent sends the token in the Authorization header:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Authorization: Bearer {plainTextToken}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1512-mcp-client",
      children: "15.12 MCP Client"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The MCP client allows Laravel applications to consume remote MCP servers, listing capabilities and invoking tools programmatically."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The client side allows a Laravel application to consume remote MCP servers. This is useful when you want your application to act as an AI agent or when integrating with external MCP providers:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Laravel\\Mcp\\Facades\\Mcp;\n\n// Connect to a remote HTTP MCP server\n$client = Mcp::client('weather')\n    ->connect('https://api.example.com/mcp/weather')\n    ->withToken($plainTextToken);\n\n// List available capabilities\n$tools = $client->tools();\n$resources = $client->resources();\n$prompts = $client->prompts();\n\n// Invoke a tool\n$result = $client->call('get-current-weather', [\n    'city' => 'London',\n    'units' => 'celsius',\n]);\n\n// Connect to a local server\n$localClient = Mcp::client('local-weather')\n    ->local('weather')\n    ->connect();\n\n$result = $localClient->call('get-current-weather', [\n    'city' => 'Tokyo',\n]);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Named clients are configured in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config/mcp.php"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "return [\n    'clients' => [\n        'weather' => [\n            'url' => env('MCP_WEATHER_URL'),\n            'token' => env('MCP_WEATHER_TOKEN'),\n            'timeout' => 30,\n        ],\n        'analytics' => [\n            'url' => env('MCP_ANALYTICS_URL'),\n            'token' => env('MCP_ANALYTICS_TOKEN'),\n        ],\n    ],\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1513-testing-mcp-servers",
      children: "15.13 Testing MCP Servers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel MCP provides a suite of testing helpers. You can test tools directly with HTTP assertions:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace Tests\\Feature\\Mcp;\n\nuse Tests\\TestCase;\nuse App\\Mcp\\Servers\\WeatherServer;\nuse Laravel\\Mcp\\Testing\\McpAssertions;\n\nclass WeatherServerTest extends TestCase\n{\n    use McpAssertions;\n\n    public function test_can_list_tools()\n    {\n        $response = $this->postJson('/mcp/weather', [\n            'jsonrpc' => '2.0',\n            'method' => 'tools/list',\n            'id' => 1,\n        ]);\n\n        $response->assertOk();\n        $response->assertJsonStructure([\n            'jsonrpc',\n            'id',\n            'result' => [\n                'tools' => [\n                    '*' => ['name', 'description', 'inputSchema'],\n                ],\n            ],\n        ]);\n    }\n\n    public function test_get_current_weather_tool_returns_data()\n    {\n        $response = $this->postJson('/mcp/weather', [\n            'jsonrpc' => '2.0',\n            'method' => 'tools/call',\n            'params' => [\n                'name' => 'get-current-weather',\n                'arguments' => [\n                    'city' => 'London',\n                    'units' => 'celsius',\n                ],\n            ],\n            'id' => 2,\n        ]);\n\n        $response->assertOk();\n        $response->assertJsonFragment([\n            'city' => 'London',\n        ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For unit testing tools in isolation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace Tests\\Unit\\Mcp;\n\nuse Tests\\TestCase;\nuse App\\Mcp\\Tools\\CurrentWeatherTool;\nuse Laravel\\Mcp\\Server\\Request;\n\nclass CurrentWeatherToolTest extends TestCase\n{\n    private CurrentWeatherTool $tool;\n\n    protected function setUp(): void\n    {\n        parent::setUp();\n        $this->tool = new CurrentWeatherTool();\n    }\n\n    public function test_validates_required_city()\n    {\n        $this->expectException(\\Illuminate\\Validation\\ValidationException::class);\n\n> **Remember:** Test your MCP tools directly using Request::fromArray() for unit tests, and use HTTP JSON-RPC assertions for integration tests. Both approaches are essential for robust MCP server quality.\n\n        $request = Request::fromArray([\n            'units' => 'celsius',\n        ]);\n\n        $this->tool->handle($request);\n    }\n\n    public function test_requires_string_city()\n    {\n        $request = Request::fromArray([\n            'city' => 12345,\n        ]);\n\n        $this->expectException(\\Illuminate\\Validation\\ValidationException::class);\n\n        $this->tool->handle($request);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1514-complete-example-weather-mcp-server",
      children: "15.14 Complete Example: Weather MCP Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This example ties together everything into a complete, deployable MCP server with authentication, multiple tools, a resource, and a prompt:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\n// File: app/Mcp/Servers/WeatherServer.php\n\nnamespace App\\Mcp\\Servers;\n\nuse Laravel\\Mcp\\Server;\nuse Laravel\\Mcp\\Attributes\\Name;\nuse Laravel\\Mcp\\Attributes\\Version;\nuse Laravel\\Mcp\\Attributes\\Instructions;\nuse App\\Mcp\\Tools\\CurrentWeatherTool;\nuse App\\Mcp\\Tools\\ForecastTool;\nuse App\\Mcp\\Tools\\SearchLocationTool;\nuse App\\Mcp\\Resources\\WeatherAlertResource;\nuse App\\Mcp\\Prompts\\TravelWeatherPrompt;\n\n#[Name('weather-server')]\n#[Version('2.0.0')]\n#[Instructions(\n    'Complete weather information server providing current conditions, ' .\n    '7-day forecasts, location search, and active weather alerts. ' .\n    'Use current-weather for real-time data, forecast for predictions, ' .\n    'search-location to find cities, and weather-alerts resource for warnings. ' .\n    'All tools accept location name or latitude/longitude coordinates.'\n)]\nclass WeatherServer extends Server\n{\n    protected array $tools = [\n        CurrentWeatherTool::class,\n        ForecastTool::class,\n        SearchLocationTool::class,\n    ];\n\n    protected array $resources = [\n        WeatherAlertResource::class,\n    ];\n\n    protected array $prompts = [\n        TravelWeatherPrompt::class,\n    ];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\n// File: app/Mcp/Tools/SearchLocationTool.php\n\nnamespace App\\Mcp\\Tools;\n\nuse Laravel\\Mcp\\Server\\Tool;\nuse Laravel\\Mcp\\Attributes\\Name;\nuse Laravel\\Mcp\\Attributes\\Title;\nuse Laravel\\Mcp\\Attributes\\Description;\nuse Laravel\\Mcp\\Attributes\\IsReadOnly;\nuse Laravel\\Mcp\\Attributes\\IsOpenWorld;\nuse Laravel\\Mcp\\Server\\Request;\nuse Laravel\\Mcp\\Server\\Response;\nuse Laravel\\Mcp\\Server\\JsonSchema;\n\n#[Name('search-location')]\n#[Title('Search Weather Locations')]\n#[Description('Search for cities and locations by name. Returns matching locations with their coordinates and country information.')]\n#[IsReadOnly]\n#[IsOpenWorld]\nclass SearchLocationTool extends Tool\n{\n    public function inputSchema(JsonSchema $schema): void\n    {\n        $schema->string('query', description: 'Location search query (city name, partial name, or \"City, Country\")')\n            ->required()\n            ->minLength(2)\n            ->maxLength(100);\n\n        $schema->integer('limit', description: 'Maximum number of results to return')\n            ->minimum(1)\n            ->maximum(20)\n            ->default(5);\n    }\n\n    public function handle(Request $request): Response\n    {\n        $data = $request->validate([\n            'query' => ['required', 'string', 'min:2', 'max:100'],\n            'limit' => ['integer', 'min:1', 'max:20'],\n        ]);\n\n        $response = Http::get('https://api.weatherapi.com/v1/search.json', [\n            'key' => config('services.weatherapi.key'),\n            'q' => $data['query'],\n        ]);\n\n        if ($response->failed()) {\n            return Response::error('Location search failed.');\n        }\n\n        $results = collect($response->json())\n            ->take($data['limit'])\n            ->map(fn ($loc) => [\n                'name' => $loc['name'],\n                'region' => $loc['region'],\n                'country' => $loc['country'],\n                'lat' => $loc['lat'],\n                'lon' => $loc['lon'],\n                'full_name' => \"{$loc['name']}, {$loc['region']}, {$loc['country']}\",\n            ]);\n\n        return Response::text(\n            $results->toJson(JSON_PRETTY_PRINT)\n        );\n    }\n\n    public function outputSchema(JsonSchema $schema): void\n    {\n        $schema->string('name', description: 'Location name');\n        $schema->string('region', description: 'Region or state');\n        $schema->string('country', description: 'Country name');\n        $schema->number('lat', description: 'Latitude');\n        $schema->number('lon', description: 'Longitude');\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\n// File: app/Mcp/Prompts/TravelWeatherPrompt.php\n\nnamespace App\\Mcp\\Prompts;\n\nuse Laravel\\Mcp\\Server\\Prompt;\nuse Laravel\\Mcp\\Attributes\\Name;\nuse Laravel\\Mcp\\Attributes\\Description;\nuse Laravel\\Mcp\\Server\\Argument;\nuse Laravel\\Mcp\\Server\\Request;\nuse Laravel\\Mcp\\Server\\Response;\n\n#[Name('travel-weather')]\n#[Description('Provides a detailed travel weather briefing for trip planning')]\nclass TravelWeatherPrompt extends Prompt\n{\n    public function arguments(): array\n    {\n        return [\n            Argument::make('origin', 'Departure city')\n                ->required(),\n\n            Argument::make('destination', 'Destination city')\n                ->required(),\n\n            Argument::make('departure_date', 'Date of departure (YYYY-MM-DD)')\n                ->required(),\n\n            Argument::make('return_date', 'Date of return (YYYY-MM-DD)')\n                ->required(),\n        ];\n    }\n\n    public function handle(Request $request): Response\n    {\n        $data = $request->validate([\n            'origin' => ['required', 'string', 'max:255'],\n            'destination' => ['required', 'string', 'max:255'],\n            'departure_date' => ['required', 'date_format:Y-m-d', 'after_or_equal:today'],\n            'return_date' => ['required', 'date_format:Y-m-d', 'after:departure_date'],\n        ]);\n\n        $prompt = <<<PROMPT\nYou are a travel weather specialist preparing a trip briefing.\n\nTrip Details:\n- Origin: {$data['origin']}\n- Destination: {$data['destination']}\n- Departure: {$data['departure_date']}\n- Return: {$data['return_date']}\n\nPlease prepare a comprehensive travel weather briefing:\n\n1. Use the search-location tool to find accurate coordinates for both cities\n2. Use the get-current-weather tool for current conditions at both locations\n3. Use the forecast tool for the 7-day outlook covering the trip dates\n4. Check the weather-alerts resource for any active warnings at the destination\n\nInclude in your briefing:\n- Current and forecast conditions\n- Packing recommendations based on weather\n- Any travel disruptions due to weather\n- Comparison between origin and destination weather\n\nFormat as a professional travel advisory.\nPROMPT;\n\n        return Response::text($prompt);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\n// File: routes/ai.php\n\nuse Illuminate\\Support\\Facades\\Route;\nuse Laravel\\Mcp\\Facades\\Mcp;\nuse App\\Mcp\\Servers\\WeatherServer;\n\nMcp::web('/mcp/weather', WeatherServer::class)\n    ->middleware(['throttle:60,1', 'auth:sanctum']);\n\nMcp::local('weather', WeatherServer::class);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MCP Tools"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Provider Tools"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Local Tools"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON-RPC over HTTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-process"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Schema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "inputSchema + outputSchema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider-defined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool interface"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider-managed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same app"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External API access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web search, files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Annotations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IsReadOnly, Destructive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--mcp-artisan-commands",
      children: "Quick Reference — MCP Artisan Commands"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Command"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "composer require laravel/mcp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Install MCP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "php artisan make:mcp-server WeatherServer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create server class"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "php artisan make:mcp-tool CurrentWeatherTool"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create tool"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "php artisan make:mcp-prompt WeatherSummaryPrompt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create prompt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "php artisan make:mcp-resource WeatherAlertResource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create resource"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Weather Service"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CRM System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DevOps Platform"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WeatherServer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CrmServer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DevopsServer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CurrentWeather, Forecast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ContactLookup, CreateTicket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DeployStatus, Rollback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Annotations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IsReadOnly, IsOpenWorld"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IsDestructive (delete)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IsDestructive (rollback)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sanctum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OAuth 2.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sanctum + OAuth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web + Local"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local only"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. What are the three core primitives of the MCP protocol?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) Actions, Data, Templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Tools, Resources, Prompts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Functions, Files, Forms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Commands, Queries, Events"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Which annotation tells the AI that a tool modifies or deletes data?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) IsReadOnly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) IsDestructive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) IsIdempotent"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) IsOpenWorld"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. How do you register an HTTP MCP server in routes/ai.php?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) Route::mcp('/endpoint', Server::class)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Mcp::web('/endpoint', Server::class)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Mcp::server('/endpoint', Server::class)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Server::register('/endpoint')"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. What does inputSchema() define in an MCP tool?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) The response structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) The parameters the AI agent must supply"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) The server configuration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) The error handling logic"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers: 1-b, 2-b, 3-b, 4-b"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MCP is an open standard for AI client-to-server communication defining tools, resources, and prompts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Laravel MCP lets you build MCP servers as first-class Laravel classes with full framework access"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tools are the core primitive, with typed JSON Schema inputs and multiple response types"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Annotations like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#[IsReadOnly]"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#[IsDestructive]"
        }), " guide the AI agent's decision-making"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resources expose readable data via URIs; prompts provide structured interaction templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Servers can be deployed as HTTP endpoints or local CLI servers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Authentication supports OAuth 2.1 and Sanctum token-based auth"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MCP Apps enable rich UIs using Blade, Livewire, and JavaScript charting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The MCP Client allows Laravel to consume remote MCP servers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing helpers provide HTTP-based and unit-level testing for all server components"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the three core primitives of the MCP protocol, and how do they differ from each other?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explain the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Mcp::web()"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Mcp::local()"
        }), " server registration. When would you use each?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "inputSchema()"
        }), " method in a tool class relate to JSON Schema, and what validation does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$request->validate()"
        }), " provide?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the purpose of the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#[IsDestructive]"
        }), " annotation, and how does it affect the AI agent's behavior?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the two authentication methods supported by Laravel MCP and their appropriate use cases."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UserLookupTool"
        }), " that accepts a user ID or email address and returns the user's name, email, and role from the database. Use appropriate annotations and define both input and output schemas."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DatabaseQueryTool"
        }), " that accepts a SQL SELECT statement, executes it read-only, and returns the results as JSON. Apply the correct annotation to ensure the AI agent knows this tool does not modify data."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a multi-content response tool that generates a monthly report, returning both a JSON summary and a link to a stored PDF on the local disk."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a complete MCP server called ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SupportServer"
      }), " with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SearchKnowledgeBaseTool"
        }), " that uses full-text search on a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "knowledge_articles"
        }), " table"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CreateTicketTool"
        }), " that creates a support ticket (with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#[IsDestructive]"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TicketStatusResource"
        }), " that exposes ticket status at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "support://tickets/{id}/status"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TicketResponsePrompt"
        }), " that guides an agent to gather information before creating a ticket"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sanctum authentication on the HTTP endpoint"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A feature test that verifies the tools list endpoint returns all three tools"
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