"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[3052],{

/***/ 79323
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_13_ai_sdk_tools_md_934_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-13-ai-sdk-tools-md-934.json
const site_docs_courses_laravel_13_ai_sdk_tools_md_934_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/13-ai-sdk-tools","title":"Chapter 13: Laravel AI SDK → Tools, MCP Tools & Provider Tools","description":"Previous Laravel AI SDK -- Images, Audio, Transcriptions & Embeddings","source":"@site/docs/courses/laravel/13-ai-sdk-tools.md","sourceDirName":"courses/laravel","slug":"/laravel/13-ai-sdk-tools","permalink":"/ai-engineering-journey/laravel/13-ai-sdk-tools","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"id":"13-ai-sdk-tools","slug":"/laravel/13-ai-sdk-tools","title":"Chapter 13: Laravel AI SDK → Tools, MCP Tools & Provider Tools","sidebar_label":"Chapter 13: Laravel AI SDK → Tools, MCP Tools & Provider Tools","sidebar_position":13},"sidebar":"course-laravel","previous":{"title":"Chapter 12: Laravel AI SDK → Agents, Prompting & Structured Output","permalink":"/ai-engineering-journey/laravel/12-ai-sdk-agents"},"next":{"title":"Chapter 14: Laravel AI SDK → Images, Audio, Transcriptions & Embeddings","permalink":"/ai-engineering-journey/laravel/14-ai-sdk-media"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/13-ai-sdk-tools.md


const frontMatter = {
	id: '13-ai-sdk-tools',
	slug: '/laravel/13-ai-sdk-tools',
	title: 'Chapter 13: Laravel AI SDK → Tools, MCP Tools & Provider Tools',
	sidebar_label: 'Chapter 13: Laravel AI SDK → Tools, MCP Tools & Provider Tools',
	sidebar_position: 13
};
const contentTitle = 'Chapter 13: Laravel AI SDK → Tools, MCP Tools & Provider Tools';

const assets = {

};

/*End Image Gallery*/


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
  "value": "13.1 The Tools Concept",
  "id": "131-the-tools-concept",
  "level": 3
}, {
  "value": "13.2 Creating Tools",
  "id": "132-creating-tools",
  "level": 3
}, {
  "value": "13.3 Registering Tools with Agents",
  "id": "133-registering-tools-with-agents",
  "level": 3
}, {
  "value": "13.4 Database Query Tools",
  "id": "134-database-query-tools",
  "level": 3
}, {
  "value": "13.5 Similarity Search Tool",
  "id": "135-similarity-search-tool",
  "level": 3
}, {
  "value": "13.6 MCP Tools Integration",
  "id": "136-mcp-tools-integration",
  "level": 3
}, {
  "value": "13.7 Provider Tools",
  "id": "137-provider-tools",
  "level": 3
}, {
  "value": "13.7.1 WebSearch",
  "id": "1371-websearch",
  "level": 4
}, {
  "value": "13.7.2 WebFetch",
  "id": "1372-webfetch",
  "level": 4
}, {
  "value": "13.7.3 FileSearch",
  "id": "1373-filesearch",
  "level": 4
}, {
  "value": "13.8 Anonymous Agents with Tools",
  "id": "138-anonymous-agents-with-tools",
  "level": 3
}, {
  "value": "13.9 Agent Middleware",
  "id": "139-agent-middleware",
  "level": 3
}, {
  "value": "13.10 Agent Configuration",
  "id": "1310-agent-configuration",
  "level": 3
}, {
  "value": "13.11 Provider Options",
  "id": "1311-provider-options",
  "level": 3
}, {
  "value": "13.12 Complete Example: Support Agent",
  "id": "1312-complete-example-support-agent",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference — AI SDK Tool Methods",
  "id": "quick-reference--ai-sdk-tool-methods",
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
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
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
        id: "chapter-13-laravel-ai-sdk--tools-mcp-tools--provider-tools",
        children: "Chapter 13: Laravel AI SDK → Tools, MCP Tools & Provider Tools"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./12-ai-sdk-agents",
          children: "Laravel AI SDK -- Agents, Prompting & Structured Output"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./14-ai-sdk-media",
          children: "Laravel AI SDK -- Images, Audio, Transcriptions & Embeddings"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement custom tools by extending the Tool interface with description, schema, and handle methods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Register tools with agents and understand how the model invokes them during generation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the SimilaritySearch tool for vector-based knowledge retrieval inside agent prompts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate Model Context Protocol (MCP) tools from remote and local MCP servers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Leverage built-in provider tools for web search, web fetching, and file search"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a complete support agent combining multiple tools for production use"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "lesson-visuals",
      "aria-label": "Visual learning resources",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.header, {
        children: [(0,jsx_runtime.jsx)(_components.span, {
          children: "VISUAL LEARNING"
        }), (0,jsx_runtime.jsx)(_components.h2, {
          children: "See it. Review it. Remember it."
        })]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/13-ai-sdk-tools/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/13-ai-sdk-tools/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/13-ai-sdk-tools/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/13-ai-sdk-tools/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/13-ai-sdk-tools/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/13-ai-sdk-tools/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Tools Concept"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool interface, description/schema/handle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Creating Tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom tools, database query tools"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Similarity Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAG via vector search, custom queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MCP Tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote/local MCP servers, spread operator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Provider Tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebSearch, WebFetch, FileSearch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Agent Middleware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "before()/after() hooks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider, model, timeout defaults"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Tools Concept] --> B[Creating Tools]\n    B --> C[Database Query Tools]\n    B --> D[Similarity Search RAG]\n    C --> E[MCP Tools Integration]\n    D --> E\n    E --> F[Provider Tools]\n    A --> G[Agent Middleware]\n    A --> H[Agent Configuration]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/13-ai-sdk-tools.png",
        alt: "AI SDK Tools"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "131-the-tools-concept",
      children: "13.1 The Tools Concept"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Tools bridge the gap between language models and external systems by letting agents call your code through a typed schema interface during generation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Language models are text-in, text-out systems. They cannot access external systems, query databases, browse the web, or compute values at runtime. Tools bridge this gap by giving the agent the ability to call your code during the prompting process."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When an agent is invoked with tools, the SDK sends the tool definitions → names, descriptions, and parameter schemas → to the language model alongside the system prompt and user message. The model can decide to call one or more tools, passing concrete arguments. The SDK intercepts these calls, executes the corresponding ", (0,jsx_runtime.jsx)(_components.code, {
        children: "handle()"
      }), " methods, and returns the results to the model. This loop can repeat multiple times within a single prompt, enabling complex multi-step reasoning."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every tool must implement the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tool"
      }), " interface, which defines three methods:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "description()"
        }), " → Returns a string describing the tool's purpose. This is sent to the model and is crucial for correct invocation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "schema(JsonSchema $schema)"
        }), " → Defines the tool's parameters using the fluent ", (0,jsx_runtime.jsx)(_components.code, {
          children: "JsonSchema"
        }), " builder."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "handle(Request $request)"
        }), " → Receives model-generated arguments and executes the tool logic. Must return a string or Stringable."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "132-creating-tools",
      children: "13.2 Creating Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Every tool implements the Tool interface with description() guiding model decisions, schema() defining typed parameters, and handle() executing logic."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Generate a new tool with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "php artisan make:tool RandomNumberGenerator"
      }), ", which creates a class in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app/Ai/Tools/"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Tools;\n\nuse Illuminate\\Contracts\\JsonSchema\\JsonSchema;\nuse Laravel\\Ai\\Contracts\\Tool;\nuse Laravel\\Ai\\Tools\\Request;\nuse Stringable;\n\nclass RandomNumberGenerator implements Tool\n{\n    public function description(): Stringable|string\n\n> **Pro Tip:** The description() return value is critical — the language model uses these descriptions to decide which tool to call. A vague description like 'Gets data' causes incorrect tool selection. Be specific about what the tool does and when to use it.\n    {\n        return 'Generates cryptographically secure random integers within a specified inclusive range. Use this when the user needs a random number, a random selection, or any randomized value.';\n    }\n\n    public function handle(Request $request): Stringable|string\n    {\n        $min = (int) $request['min'];\n        $max = (int) $request['max'];\n\n        return (string) random_int($min, $max);\n    }\n\n    public function schema(JsonSchema $schema): array\n    {\n        return [\n            'min' => $schema->integer()->min(0)->required()->description('The minimum value of the range, inclusive'),\n            'max' => $schema->integer()->required()->description('The maximum value of the range, inclusive'),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "description()"
      }), " return value is critical → the model uses these descriptions to decide which tool to call. A vague description causes misuse. Always cast or validate incoming values in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "handle()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "133-registering-tools-with-agents",
      children: "13.3 Registering Tools with Agents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Return ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tool"
      }), " instances from the agent's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tools()"
      }), " method:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents;\n\nuse App\\Ai\\Tools\\RandomNumberGenerator;\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\Promptable;\nuse Stringable;\n\nclass GameMaster implements Agent\n{\n    use Promptable;\n\n    public function instructions(): Stringable|string\n    {\n        return 'You are a tabletop RPG game master. Create immersive adventures, generate random encounters, and resolve player actions. Use the random number generator for dice rolls.';\n    }\n\n    public function tools(): array\n    {\n        return [\n            new RandomNumberGenerator,\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When prompted, the model may invoke the tool mid-generation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Ai\\Agents\\GameMaster;\nuse Illuminate\\Http\\Request;\n\nclass GameController extends Controller\n{\n    public function action(Request $request): array\n    {\n        $request->validate(['action' => 'required|string']);\n\n        $response = GameMaster::make()->prompt(\n            'A player attempts to pick a locked chest. Action: ' . $request->input('action')\n        );\n\n        return ['narrative' => $response->text()];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "134-database-query-tools",
      children: "13.4 Database Query Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Database query tools are the most common pattern, allowing agents to look up orders, users, or products through controlled, parameterized queries."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The most common tool pattern is querying application data:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Tools;\n\nuse App\\Models\\Order;\nuse Illuminate\\Contracts\\JsonSchema\\JsonSchema;\nuse Laravel\\Ai\\Contracts\\Tool;\nuse Laravel\\Ai\\Tools\\Request;\nuse Stringable;\n\nclass OrderLookup implements Tool\n{\n    public function description(): Stringable|string\n    {\n        return 'Looks up customer orders by order ID or email address. Returns order status, items, total, and shipping information.';\n    }\n\n    public function handle(Request $request): Stringable|string\n    {\n        if (isset($request['order_id'])) {\n\n> **Warning:** Always cast and validate incoming values in handle(). Models send arbitrary types based on their training data. A parameter documented as integer might arrive as a string. Defensive validation prevents runtime errors.\n            $order = Order::with(['items', 'shippingAddress'])\n                ->find($request['order_id']);\n\n            return $order?->toJson() ?? 'Order not found.';\n        }\n\n        if (isset($request['email'])) {\n            return Order::with(['items', 'shippingAddress'])\n                ->whereHas('user', fn($q) => $q->where('email', $request['email']))\n                ->latest()\n                ->take(5)\n                ->get()\n                ->toJson();\n        }\n\n        return 'No lookup criteria provided.';\n    }\n\n    public function schema(JsonSchema $schema): array\n    {\n        return [\n            'order_id' => $schema->integer()->min(1)->description('The unique order ID to look up'),\n            'email' => $schema->string()->description('The email address to find orders for'),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "135-similarity-search-tool",
      children: "13.5 Similarity Search Tool"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " SimilaritySearch provides the foundation for Retrieval-Augmented Generation (RAG) by performing vector search against Eloquent models with embedding columns."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SimilaritySearch"
      }), " tool performs vector similarity search against Eloquent models with an embedding column → the foundation of Retrieval-Augmented Generation (RAG):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents;\n\nuse App\\Ai\\Tools\\OrderLookup;\nuse App\\Models\\Document;\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\Promptable;\nuse Laravel\\Ai\\Tools\\SimilaritySearch;\nuse Stringable;\n\nclass KnowledgeBaseAgent implements Agent\n{\n    use Promptable;\n\n    public function instructions(): Stringable|string\n    {\n        return 'You are a support agent with access to product documentation. Answer questions using the documentation. If you cannot find the answer, ask for clarification.';\n    }\n\n    public function tools(): array\n    {\n        return [\n            new OrderLookup,\n            SimilaritySearch::usingModel(Document::class, 'embedding')\n\n> **Remember:** The minSimilarity threshold directly impacts RAG quality. Start with 0.78 and tune based on your embedding model and use case. Higher values return fewer but more relevant results; lower values increase recall at the cost of noise.\n                ->minSimilarity(0.78)\n                ->limit(5)\n                ->withDescription('Search the product documentation knowledge base for relevant articles.'),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For more control, use a custom query closure:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents;\n\nuse App\\Models\\Document;\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\Promptable;\nuse Laravel\\Ai\\Tools\\SimilaritySearch;\nuse Stringable;\n\nclass FilteredKnowledgeAgent implements Agent\n{\n    use Promptable;\n\n    public function instructions(): Stringable|string\n    {\n        return 'Answer questions using only the documentation provided.';\n    }\n\n    public function tools(): array\n    {\n        return [\n            SimilaritySearch::usingModel(Document::class, 'embedding', function ($query, array $embedding): void {\n                $query->where('locale', app()->getLocale())\n                    ->where('is_published', true)\n                    ->whereNull('archived_at');\n            })\n                ->minSimilarity(0.8)\n                ->limit(3),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For complete control, omit the column name:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents;\n\nuse App\\Models\\Document;\nuse Illuminate\\Support\\Facades\\DB;\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\Promptable;\nuse Laravel\\Ai\\Tools\\SimilaritySearch;\nuse Stringable;\n\nclass CustomSimilarityAgent implements Agent\n{\n    use Promptable;\n\n    public function instructions(): Stringable|string\n    {\n        return 'Answer questions using the internal knowledge base.';\n    }\n\n    public function tools(): array\n    {\n        return [\n            SimilaritySearch::usingModel(Document::class, function ($query, array $embedding): void {\n                $vector = json_encode($embedding);\n                $query->select('*', DB::raw(\"embedding <=> '{$vector}' as distance\"))\n                    ->where('tenant_id', auth()->user()->tenant_id)\n                    ->having('distance', '<', 0.3)\n                    ->orderBy('distance')\n                    ->limit(5);\n            }),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "136-mcp-tools-integration",
      children: "13.6 MCP Tools Integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " MCP tools from remote or local servers are spread into agents using the ... operator, combining external capabilities with local tools."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Model Context Protocol (MCP) is an open standard allowing agents to discover and invoke tools from external servers. Install with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "composer require laravel/mcp"
      }), ". Connect to remote MCP servers and spread their tools using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "..."
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents;\n\nuse App\\Ai\\Tools\\OrderLookup;\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\Promptable;\nuse Laravel\\Ai\\Tools\\SimilaritySearch;\nuse Laravel\\Mcp\\Client;\nuse Stringable;\n\nclass EnterpriseSupportAgent implements Agent\n{\n    use Promptable;\n\n    public function instructions(): Stringable|string\n    {\n        return 'You are an enterprise support agent with access to customer data, documentation, and internal systems.';\n    }\n\n    public function tools(): array\n    {\n        return [\n            new OrderLookup,\n            SimilaritySearch::usingModel(Document::class, 'embedding')\n                ->minSimilarity(0.78)\n                ->limit(5),\n            ...Client::web('https://mcp.example.com')\n                ->withToken(env('MCP_API_TOKEN'))\n                ->tools(),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Named MCP clients are configured in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config/mcp.php"
      }), " and referenced by name:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents;\n\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\Promptable;\nuse Laravel\\Ai\\Tools\\SimilaritySearch;\nuse Laravel\\Mcp\\Facades\\Mcp;\nuse Stringable;\n\nclass DeveloperAgent implements Agent\n{\n    use Promptable;\n\n    public function instructions(): Stringable|string\n    {\n        return 'You are a developer assistant with access to GitHub, PostgreSQL, and Slack.';\n    }\n\n    public function tools(): array\n    {\n        return [\n            ...Mcp::client('github')->tools(),\n            ...Mcp::client('postgres')->tools(),\n            ...Mcp::client('slack')->tools(),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Local MCP servers run as subprocesses:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents;\n\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\Promptable;\nuse Laravel\\Mcp\\Client;\nuse Stringable;\n\nclass LocalMcpAgent implements Agent\n{\n    use Promptable;\n\n    public function instructions(): Stringable|string\n    {\n        return 'You have access to internal tools via a local MCP server.';\n    }\n\n    public function tools(): array\n    {\n        return [\n            ...Client::local('php', ['artisan', 'mcp:start'])->tools(),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "137-provider-tools",
      children: "13.7 Provider Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Provider tools like WebSearch, WebFetch, and FileSearch are built-in capabilities configured directly on PendingAgentRequest without custom tool classes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Provider tools are built-in capabilities offered by AI providers, configured directly on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PendingAgentRequest"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1371-websearch",
      children: "13.7.1 WebSearch"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Supported by Anthropic, OpenAI, and Gemini:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Ai\\Agents\\GameMaster;\nuse Illuminate\\Http\\Request;\n\nclass ResearchController extends Controller\n{\n    public function currentEvents(Request $request): array\n    {\n        $request->validate(['topic' => 'required|string']);\n\n        $response = GameMaster::make()\n            ->withWebSearch(max: 5, allow: ['laravel.com'], location: 'US')\n            ->prompt('Research the latest developments in ' . $request->input('topic'));\n\n        return ['summary' => $response->text()];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1372-webfetch",
      children: "13.7.2 WebFetch"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Supported by Anthropic and Gemini for reading specific URLs:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Ai\\Agents\\GameMaster;\nuse Illuminate\\Http\\Request;\n\nclass UrlController extends Controller\n{\n    public function fetchUrl(Request $request): array\n    {\n        $request->validate(['url' => 'required|url']);\n\n        $response = GameMaster::make()\n            ->withWebFetch()\n            ->prompt('Read the content at ' . $request->input('url') . ' and summarize the key points.');\n\n        return ['summary' => $response->text()];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1373-filesearch",
      children: "13.7.3 FileSearch"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Supported by OpenAI and Gemini for searching provider-managed vector stores:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Ai\\Agents\\GameMaster;\nuse Illuminate\\Http\\Request;\n\nclass VectorSearchController extends Controller\n{\n    public function search(Request $request): array\n    {\n        $request->validate(['query' => 'required|string']);\n\n        $response = GameMaster::make()\n            ->withFileSearch(vectorStoreIds: ['vs_abc123', 'vs_def456'])\n            ->prompt('Search the knowledge base for: ' . $request->input('query'));\n\n        return ['answer' => $response->text()];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "138-anonymous-agents-with-tools",
      children: "13.8 Anonymous Agents with Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pass tools via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "withTools()"
      }), " on the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Agent"
      }), " facade:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Ai\\Tools\\OrderLookup;\nuse App\\Models\\Document;\nuse Illuminate\\Http\\Request;\nuse Laravel\\Ai\\Facades\\Agent;\nuse Laravel\\Ai\\Tools\\SimilaritySearch;\n\nclass QuickSupportController extends Controller\n{\n    public function handle(Request $request): array\n    {\n        $request->validate(['question' => 'required|string']);\n\n        $response = Agent::make()\n            ->instructions('You are a quick support agent. Answer concisely using available tools.')\n            ->withTools([\n                new OrderLookup,\n                SimilaritySearch::usingModel(Document::class, 'embedding')\n                    ->minSimilarity(0.78)\n                    ->limit(3),\n            ])\n            ->withWebSearch()\n            ->prompt($request->input('question'));\n\n        return ['answer' => $response->text()];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "139-agent-middleware",
      children: "13.9 Agent Middleware"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Agent middleware provides before() and after() hooks for cross-cutting concerns like logging, metrics collection, and access control."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AgentMiddleware"
      }), " interface for cross-cutting concerns:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Middleware;\n\nuse Laravel\\Ai\\Contracts\\AgentMiddleware;\nuse Laravel\\Ai\\Contracts\\PendingAgentRequest;\nuse Laravel\\Ai\\Contracts\\AgentResponse;\nuse Illuminate\\Support\\Facades\\Log;\n\nclass AuditMiddleware implements AgentMiddleware\n{\n    public function before(PendingAgentRequest $request): PendingAgentRequest\n    {\n        Log::info('Agent prompt initiated', [\n            'agent' => get_class($request->agent()),\n            'timestamp' => now(),\n        ]);\n\n        return $request;\n    }\n\n    public function after(AgentResponse $response): AgentResponse\n    {\n        Log::info('Agent response received', [\n            'output_tokens' => $response->outputTokens(),\n            'input_tokens' => $response->inputTokens(),\n        ]);\n\n        return $response;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Register on an agent via the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "middleware()"
      }), " method:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents;\n\nuse App\\Ai\\Middleware\\AuditMiddleware;\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\Promptable;\nuse Stringable;\n\nclass AuditedAgent implements Agent\n{\n    use Promptable;\n\n    public function instructions(): Stringable|string\n    {\n        return 'You are an audited agent. All interactions are logged.';\n    }\n\n    public function middleware(): array\n    {\n        return [new AuditMiddleware];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1310-agent-configuration",
      children: "13.10 Agent Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure defaults directly on the agent class:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents;\n\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\Promptable;\nuse Laravel\\Ai\\Lab;\nuse Stringable;\n\nclass ConfiguredAgent implements Agent\n{\n    use Promptable;\n\n    public function instructions(): Stringable|string\n    {\n        return 'You are a configured agent with class-level defaults.';\n    }\n\n    public function provider(): Lab\n    {\n        return Lab::Anthropic;\n    }\n\n    public function model(): string\n    {\n        return 'claude-sonnet-4-20250514';\n    }\n\n    public function timeout(): int\n    {\n        return 60;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1311-provider-options",
      children: "13.11 Provider Options"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pass provider-specific options to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "prompt()"
      }), " as a second argument:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Ai\\Agents\\GameMaster;\nuse Illuminate\\Http\\Request;\n\nclass OptionsController extends Controller\n{\n    public function controlled(Request $request): array\n    {\n        $request->validate(['prompt' => 'required|string']);\n\n        $response = GameMaster::make()\n            ->using(Lab::Anthropic)\n            ->prompt($request->input('prompt'), [\n                'max_tokens' => 2048,\n                'stop_sequences' => [\"\\n\\nHuman:\", \"\\n\\nAssistant:\"],\n                'temperature' => 0.7,\n                'top_p' => 0.9,\n                'metadata' => ['user_id' => $request->user()->id],\n            ]);\n\n        return ['response' => $response->text()];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1312-complete-example-support-agent",
      children: "13.12 Complete Example: Support Agent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A production support agent combining database lookup, SimilaritySearch, WebSearch, streaming, and conversation context:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents;\n\nuse App\\Ai\\Tools\\OrderLookup;\nuse App\\Models\\Document;\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\Conversational;\nuse Laravel\\Ai\\Promptable;\nuse Laravel\\Ai\\RemembersConversations;\nuse Laravel\\Ai\\Tools\\SimilaritySearch;\nuse Stringable;\n\nclass EnterpriseSupportAgent implements Agent, Conversational\n{\n    use Promptable, RemembersConversations;\n\n    public function instructions(): Stringable|string\n    {\n        return 'You are a senior enterprise support agent. You have access to:\n1. The order lookup system to check customer orders\n2. The product documentation knowledge base for troubleshooting\n3. Live web search for the latest documentation\n\nAlways verify order information before giving status updates. Be polite and thorough.';\n    }\n\n    public function tools(): array\n    {\n        return [\n            new OrderLookup,\n            SimilaritySearch::usingModel(Document::class, 'embedding')\n                ->minSimilarity(0.78)\n                ->limit(5)\n                ->withDescription('Search the internal product documentation knowledge base.'),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Corresponding controller:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Ai\\Agents\\EnterpriseSupportAgent;\nuse Illuminate\\Http\\Request;\n\nclass EnterpriseSupportController extends Controller\n{\n    public function chat(Request $request): array\n    {\n        $request->validate(['message' => 'required|string']);\n\n        $response = EnterpriseSupportAgent::make()\n            ->forUser($request->user())\n            ->withWebSearch(max: 3, allow: ['laravel.com', 'github.com', 'php.net'])\n            ->prompt($request->input('message'));\n\n        return [\n            'reply' => $response->text(),\n            'conversation_id' => $response->conversationId(),\n            'usage' => [\n                'input_tokens' => $response->inputTokens(),\n                'output_tokens' => $response->outputTokens(),\n            ],\n        ];\n    }\n}\n"
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
            children: "Custom Tools"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MCP Tools"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Provider Tools"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHP Tool class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider built-in"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hosting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-app"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote/local server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider-side"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Schema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JsonSchema in code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server-defined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider-defined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (in-process)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (network)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (API call)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub, Slack APIs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web search, file search"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--ai-sdk-tool-methods",
      children: "Quick Reference — AI SDK Tool Methods"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "php artisan make:tool RandomNumber"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create tool class"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "->withTools([...])"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Register tools on anonymous agent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "->withWebSearch(max: 5)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable provider web search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "->withWebFetch()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable URL fetching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "->withFileSearch(vectorStoreIds: [...])"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable file search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SimilaritySearch::usingModel()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create vector search tool"
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
            children: "Support Agent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Developer Agent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Research Agent"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom Tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OrderLookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GitHubIssueTool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebScraperTool"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MCP Tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRM server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub + Slack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database explorer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SimilaritySearch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product docs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Codebase docs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Research papers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Provider Tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebSearch (docs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebFetch (bug reports)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebSearch (research)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Middleware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audit logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rate limiting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost tracking"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. What are the three methods every Tool must implement?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) name(), schema(), execute()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) description(), schema(), handle()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) instructions(), parameters(), run()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) title(), input(), output()"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. How are MCP tools combined with local tools in an agent?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) Through a configuration file"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Using the spread (...) operator"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Via dependency injection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Through facade registration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. What does withWebSearch() enable?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) URL fetching"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Internet search capabilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Vector store search"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) File system search"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. What is the purpose of Agent Middleware?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) To validate tool parameters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) To provide before/after hooks for logging and metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) To authenticate API requests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) To cache agent responses"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers: 1-b, 2-b, 3-b, 4-b"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tools implement the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Tool"
        }), " interface with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "description()"
        }), " (guides model decisions), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "schema()"
        }), " (typed parameters via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "JsonSchema"
        }), "), and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "handle()"
        }), " (executes logic, returns string)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tools are registered through the agent's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tools()"
        }), " method as an array of instances"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "SimilaritySearch"
        }), " enables RAG via vector search against Eloquent models, supporting custom query closures and full-control mode"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["MCP tools from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "laravel/mcp"
        }), " connect to remote (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Client::web()"
        }), ") or local (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Client::local()"
        }), ") servers, spread into agents via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "..."
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Provider tools → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WebSearch"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WebFetch"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FileSearch"
        }), " → are configured on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PendingAgentRequest"
        }), " without custom classes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Agent middleware provides ", (0,jsx_runtime.jsx)(_components.code, {
          children: "before()"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "after()"
        }), " hooks for logging, metrics, and access control"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Describe the three-method contract of the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Tool"
          }), " interface. Why is ", (0,jsx_runtime.jsx)(_components.code, {
            children: "description()"
          }), " critical for correct model behavior?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain the model-tool-handoff loop sequence when a model decides to invoke a tool during prompting."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Compare ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SimilaritySearch"
          }), " with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "FileSearch"
          }), ". What are the architectural differences between application-side and provider-side vector search?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is MCP and how does the spread operator enable combining MCP tools with local tools?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Explain the difference between ", (0,jsx_runtime.jsx)(_components.code, {
            children: "withWebSearch()"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "withWebFetch()"
          }), ". When would you use each?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "WeatherTool"
          }), " accepting a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "city"
          }), " string parameter that queries a weather API (use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Http::fake()"
          }), " for testing) and returns temperature and conditions. Register it with a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "TravelAgent"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ProductInventoryTool"
          }), " accepting ", (0,jsx_runtime.jsx)(_components.code, {
            children: "product_sku"
          }), " that queries the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "products"
          }), " table for stock and warehouse location. Register it alongside ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SimilaritySearch"
          }), " on a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SalesAgent"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Build an agent combining three tools: a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "GitHubIssueTool"
          }), " (creates issues via API), ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SimilaritySearch"
          }), " (internal docs), and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "WebSearch"
          }), " (live code examples). Make it conversational with audit middleware."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a local MCP server via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "artisan mcp:start"
      }), " exposing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DeployStatus"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RollbackRelease"
      }), " tools querying a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "deployments"
      }), " table. Build a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DevOpsAgent"
      }), " using these MCP tools plus ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SimilaritySearch"
      }), " against a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "runbooks"
      }), " table and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WebFetch"
      }), " for monitoring dashboards. Use structured output returning ", (0,jsx_runtime.jsx)(_components.code, {
        children: "service_health"
      }), " (enum), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "recent_incidents"
      }), " (array), and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "recommended_action"
      }), " (string). Implement middleware logging all rollbacks to an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "audit_log"
      }), " table."]
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