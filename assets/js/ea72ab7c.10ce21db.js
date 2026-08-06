"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[53857],{

/***/ 14659
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_12_ai_sdk_agents_md_ea7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-12-ai-sdk-agents-md-ea7.json
const site_docs_courses_laravel_12_ai_sdk_agents_md_ea7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/12-ai-sdk-agents","title":"Chapter 12: Laravel AI SDK → Agents, Prompting & Structured Output","description":"Previous Laravel AI SDK -- Tools, MCP Tools & Provider Tools","source":"@site/docs/courses/laravel/12-ai-sdk-agents.md","sourceDirName":"courses/laravel","slug":"/laravel/12-ai-sdk-agents","permalink":"/ai-engineering-journey/laravel/12-ai-sdk-agents","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"id":"12-ai-sdk-agents","slug":"/laravel/12-ai-sdk-agents","title":"Chapter 12: Laravel AI SDK → Agents, Prompting & Structured Output","sidebar_label":"Chapter 12: Laravel AI SDK → Agents, Prompting & Structured Output","sidebar_position":12},"sidebar":"coursesSidebar","previous":{"title":"Chapter 11: Caching, Performance & Octane","permalink":"/ai-engineering-journey/laravel/11-caching-performance"},"next":{"title":"Chapter 13: Laravel AI SDK → Tools, MCP Tools & Provider Tools","permalink":"/ai-engineering-journey/laravel/13-ai-sdk-tools"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/12-ai-sdk-agents.md


const frontMatter = {
	id: '12-ai-sdk-agents',
	slug: '/laravel/12-ai-sdk-agents',
	title: 'Chapter 12: Laravel AI SDK → Agents, Prompting & Structured Output',
	sidebar_label: 'Chapter 12: Laravel AI SDK → Agents, Prompting & Structured Output',
	sidebar_position: 12
};
const contentTitle = 'Chapter 12: Laravel AI SDK → Agents, Prompting & Structured Output';

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
  "value": "12.1 The AI SDK Architecture",
  "id": "121-the-ai-sdk-architecture",
  "level": 3
}, {
  "value": "12.2 Installation and Configuration",
  "id": "122-installation-and-configuration",
  "level": 3
}, {
  "value": "12.5 Prompting Agents",
  "id": "125-prompting-agents",
  "level": 3
}, {
  "value": "12.6 Conversation Context",
  "id": "126-conversation-context",
  "level": 3
}, {
  "value": "12.7 Structured Output",
  "id": "127-structured-output",
  "level": 3
}, {
  "value": "12.8 Streaming Responses",
  "id": "128-streaming-responses",
  "level": 3
}, {
  "value": "12.9 Broadcasting",
  "id": "129-broadcasting",
  "level": 3
}, {
  "value": "12.10 Queueing Agent Work",
  "id": "1210-queueing-agent-work",
  "level": 3
}, {
  "value": "12.11 Agent Attachments",
  "id": "1211-agent-attachments",
  "level": 3
}, {
  "value": "12.12 Anonymous Agents",
  "id": "1212-anonymous-agents",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference — AI SDK Artisan Commands",
  "id": "quick-reference--ai-sdk-artisan-commands",
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
        id: "chapter-12-laravel-ai-sdk--agents-prompting--structured-output",
        children: "Chapter 12: Laravel AI SDK → Agents, Prompting & Structured Output"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./11-caching-performance",
          children: "Caching, Performance & Octane"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./13-ai-sdk-tools",
          children: "Laravel AI SDK -- Tools, MCP Tools & Provider Tools"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Understand the architecture and provider-agnostic design of the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "laravel/ai"
        }), " package"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Install, configure, and register AI providers with environment-based credentials"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create custom agent classes implementing the Agent contract with the Promptable trait"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manage conversational context using the RemembersConversations trait and database persistence"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define structured output schemas using the fluent JsonSchema builder with nested and constrained types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement streaming responses, broadcasting, and queued agent execution"
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
        href: "../../assets/images/lessons/laravel/12-ai-sdk-agents/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/12-ai-sdk-agents/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/12-ai-sdk-agents/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/12-ai-sdk-agents/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/12-ai-sdk-agents/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/12-ai-sdk-agents/visual-explanation.png",
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "SDK Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider-agnostic design, configuration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Agent Creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent interface, Promptable trait"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prompting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static make(), prompt(), configuration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conversation Context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RemembersConversations, forUser(), continue()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Structured Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HasStructuredOutput, JsonSchema builder"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stream(), then(), Vercel protocol"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcasting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "broadcast(), broadcastOnQueue(), channels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Queueing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "queue(), then(), catch(), job tracking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anonymous Agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent facade, inline creation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[SDK Architecture] --> B[Installation & Config]\n    B --> C[Creating Agents]\n    C --> D[Prompting Agents]\n    D --> E[Conversation Context]\n    D --> F[Structured Output]\n    D --> G[Streaming]\n    D --> H[Broadcasting]\n    D --> I[Queueing]\n    C --> J[Anonymous Agents]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/12-ai-sdk-agents.png",
        alt: "AI SDK Agents"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-the-ai-sdk-architecture",
      children: "12.1 The AI SDK Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The laravel/ai package provides a unified, provider-agnostic interface for interacting with 14+ AI providers through a single fluent API."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Laravel 13 introduces the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "laravel/ai"
      }), " package, a unified, provider-agnostic interface for interacting with large language models and AI services. The package abstracts away provider-specific SDKs behind a single, expressive API that supports text generation, tool-calling agents, embeddings, audio transcription, image generation, vector-store integration, and file uploads. With more than fourteen supported providers, the SDK allows you to swap between Anthropic Claude, OpenAI GPT, Google Gemini, Amazon Bedrock, Azure OpenAI, Groq, xAI, DeepSeek, Mistral, Ollama, OpenRouter, Cohere, Jina, VoyageAI, and ElevenLabs without changing application code."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The central design philosophy is provider independence. Every AI operation is expressed through a Laravel-native fluent interface. The underlying driver is resolved at runtime from the configuration file, which maps each feature category to a specific provider and model. You can develop against Ollama locally, deploy against Anthropic in staging, and run against OpenAI in production, changing only environment variables."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The package ships with two migration files that create the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "agent_conversations"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "agent_conversation_messages"
      }), " database tables, enabling stateful multi-turn conversations without managing session storage manually."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-installation-and-configuration",
      children: "12.2 Installation and Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Installation is a single Composer command followed by publishing configuration and running migrations:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "composer require laravel/ai\nphp artisan vendor:publish --provider=\"Laravel\\Ai\\AiServiceProvider\"\nphp artisan migrate\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The published configuration file at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config/ai.php"
      }), " defines the default provider and model for each feature category and stores provider credentials loaded from ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".env"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nreturn [\n    'defaults' => [\n        'text' => [\n            'provider' => env('AI_TEXT_PROVIDER', 'anthropic'),\n            'model' => env('AI_TEXT_MODEL', 'claude-sonnet-4-20250514'),\n        ],\n        'embeddings' => [\n            'provider' => env('AI_EMBEDDINGS_PROVIDER', 'openai'),\n            'model' => env('AI_EMBEDDINGS_MODEL', 'text-embedding-3-small'),\n        ],\n        'image' => [\n            'provider' => env('AI_IMAGE_PROVIDER', 'openai'),\n            'model' => env('AI_IMAGE_MODEL', 'dall-e-3'),\n        ],\n        'audio' => [\n            'provider' => env('AI_AUDIO_PROVIDER', 'openai'),\n            'model' => env('AI_AUDIO_MODEL', 'tts-1'),\n        ],\n        'transcription' => [\n            'provider' => env('AI_TRANSCRIPTION_PROVIDER', 'openai'),\n            'model' => env('AI_TRANSCRIPTION_MODEL', 'whisper-1'),\n        ],\n    ],\n    'providers' => [\n        'anthropic' => [\n            'key' => env('ANTHROPIC_API_KEY'),\n            'base_url' => env('ANTHROPIC_BASE_URL'),\n        ],\n        'openai' => [\n            'key' => env('OPENAI_API_KEY'),\n            'organization' => env('OPENAI_ORGANIZATION'),\n            'base_url' => env('OPENAI_BASE_URL'),\n        ],\n        'gemini' => ['key' => env('GEMINI_API_KEY')],\n        'azure' => [\n            'key' => env('AZURE_OPENAI_KEY'),\n            'endpoint' => env('AZURE_OPENAI_ENDPOINT'),\n            'deployment' => env('AZURE_OPENAI_DEPLOYMENT'),\n            'api_version' => env('AZURE_OPENAI_API_VERSION', '2024-10-21'),\n        ],\n        'bedrock' => [\n            'key' => env('AWS_ACCESS_KEY_ID'),\n            'secret' => env('AWS_SECRET_ACCESS_KEY'),\n            'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),\n        ],\n        'groq' => ['key' => env('GROQ_API_KEY')],\n        'xai' => ['key' => env('XAI_API_KEY')],\n        'deepseek' => ['key' => env('DEEPSEEK_API_KEY')],\n        'mistral' => ['key' => env('MISTRAL_API_KEY')],\n        'ollama' => ['base_url' => env('OLLAMA_BASE_URL', 'http://localhost:11434')],\n        'openrouter' => [\n            'key' => env('OPENROUTER_API_KEY'),\n            'base_url' => env('OPENROUTER_BASE_URL', 'https://openrouter.ai/api/v1'),\n        ],\n        'cohere' => ['key' => env('COHERE_API_KEY')],\n        'jina' => ['key' => env('JINA_API_KEY')],\n        'voyageai' => ['key' => env('VOYAGEAI_API_KEY')],\n        'elevenlabs' => ['key' => env('ELEVENLABS_API_KEY')],\n    ],\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "base_url"
      }), " option routes traffic through proxies or self-hosted model platforms. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Lab"
      }), " enum provides type-safe provider references:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\nnamespace App\\Console\\Commands;\n\nuse Illuminate\\Console\\Command;\nuse Laravel\\Ai\\Image;\nuse Laravel\\Ai\\Lab;\n\nclass GenerateConceptArt extends Command\n{\n    protected $signature = 'art:generate {prompt}';\n    protected $description = 'Generate concept art using a specific AI provider';\n\n    public function handle(): int\n    {\n        $prompt = $this->argument('prompt');\n\n        $result = Image::of($prompt)\n            ->using(Lab::Gemini)\n            ->generate();\n\n        $this->info('Image generated successfully.');\n        $this->info('Raw content length: ' . strlen($result));\n\n        return Command::SUCCESS;\n    }\n}\n### 12.3 Provider Support Matrix\n\n\n| Feature | Supported Providers |\n|---|---|\n| Text Generation | OpenAI, Anthropic, Gemini, Azure, Bedrock, Groq, xAI, DeepSeek, Mistral, Ollama, OpenRouter |\n| Image Generation | OpenAI, Gemini, xAI, Azure, Bedrock, OpenRouter |\n| Text-to-Speech | OpenAI, ElevenLabs, Gemini |\n| Speech-to-Text | OpenAI, ElevenLabs, Mistral, Gemini |\n| Embeddings | OpenAI, Gemini, Azure, Bedrock, Cohere, Mistral, Jina, VoyageAI, Ollama, OpenRouter |\n| Reranking | Cohere, Jina, VoyageAI |\n| File Processing | OpenAI, Anthropic, Gemini |\n\n### 12.4 Creating Agents\n\n\n> **One-Sentence Takeaway:** Agents encapsulate a system prompt and model configuration; they implement the Agent interface with the Promptable trait providing make() and prompt().\n\nAgents encapsulate a system prompt, a default model configuration, and optional tool definitions. Generate a new agent using `php artisan make:agent SalesCoach`, which creates a class in `app/Ai/Agents/SalesCoach.php`. Every agent must implement the `Agent` interface, which requires an `instructions()` method. The `Promptable` trait provides the default implementation for the `make()` static factory method and convenience methods for prompting:\n\n```php\n<?php\n\nnamespace App\\Ai\\Agents;\n\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\Promptable;\nuse Stringable;\n\nclass SalesCoach implements Agent\n{\n    use Promptable;\n\n    public function instructions(): Stringable|string\n    {\n        return 'You are an expert sales coach\n\n> **Remember:** The system prompt (instructions()) is the most critical factor in agent quality. Invest time in writing clear, specific instructions that include the agent's role, tone, constraints, and expected output format. with 20 years of experience training B2B SaaS sales teams. Analyze call transcripts and provide specific, actionable feedback on discovery questions, objection handling, closing techniques, and talk-to-listen ratio. Be direct and constructive.';\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "125-prompting-agents",
      children: "12.5 Prompting Agents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Interact with an agent through the static ", (0,jsx_runtime.jsx)(_components.code, {
        children: "make()"
      }), " method, which returns a configured ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PendingAgentRequest"
      }), ". Call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "prompt()"
      }), " to send a user message and receive a response:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Ai\\Agents\\SalesCoach;\nuse Illuminate\\Http\\Request;\n\nclass CoachingController extends Controller\n{\n    public function analyzeTranscript(Request $request): array\n    {\n        $request->validate([\n            'transcript' => 'required|string|min:50|max:50000',\n        ]);\n\n        $response = SalesCoach::make()\n            ->prompt('Analyze this sales call transcript and provide coaching feedback: ' . $request->input('transcript'));\n\n        return [\n            'feedback' => $response->text(),\n            'input_tokens' => $response->inputTokens(),\n            'output_tokens' => $response->outputTokens(),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PendingAgentRequest"
      }), " is configurable → override the provider, model, max tokens, and timeout:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Ai\\Agents\\SalesCoach;\nuse Illuminate\\Http\\Request;\nuse Laravel\\Ai\\Lab;\n\nclass CoachingController extends Controller\n{\n    public function quickAnalysis(Request $request): array\n    {\n        $request->validate(['transcript' => 'required|string']);\n\n        $response = SalesCoach::make()\n            ->using(Lab::Groq)\n            ->model('llama-3.3-70b-versatile')\n            ->maxTokens(512)\n            ->timeout(30)\n            ->prompt('Provide a brief 3-bullet analysis: ' . $request->input('transcript'));\n\n        return ['feedback' => $response->text()];\n\n> **Pro Tip:** Always log token usage (`$response->inputTokens()` and `$response->outputTokens()`) in production. AI costs scale with usage, and tracking token consumption per endpoint is essential for cost monitoring and optimization.\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "126-conversation-context",
      children: "12.6 Conversation Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Conversational agents use RemembersConversations to persist multi-turn interactions to the database, with forUser() starting and continue() resuming conversations."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For multi-turn interactions, use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Conversational"
      }), " interface and the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RemembersConversations"
      }), " trait. The SDK persists every message exchange to the database and groups messages into conversations:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents;\n\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\Conversational;\nuse Laravel\\Ai\\Promptable;\nuse Laravel\\Ai\\RemembersConversations;\nuse Stringable;\n\nclass SupportAgent implements Agent, Conversational\n{\n    use Promptable, RemembersConversations;\n\n    public function instructions(): Stringable|string\n    {\n        return 'You are a helpful customer support agent for an e-commerce platform. Help customers with order status, returns, refunds, and product questions. Always ask for their order number first. Be empathetic and concise.';\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To start a new conversation, call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "forUser()"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Ai\\Agents\\SupportAgent;\nuse Illuminate\\Http\\Request;\nuse Illuminate\\Support\\Facades\\Auth;\n\nclass SupportController extends Controller\n{\n    public function chat(Request $request): array\n    {\n        $request->validate(['message' => 'required|string']);\n\n        $response = SupportAgent::make()\n            ->forUser(Auth::user())\n            ->prompt($request->input('message'));\n\n        return [\n            'reply' => $response->text(),\n            'conversation_id' => $response->conversationId(),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To continue an existing conversation, pass the conversation ID via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "continue()"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Ai\\Agents\\SupportAgent;\nuse Illuminate\\Http\\Request;\n\nclass SupportController extends Controller\n{\n    public function continueChat(Request $request): array\n    {\n        $request->validate([\n            'message' => 'required|string',\n            'conversation_id' => 'required|integer|exists:agent_conversations,id',\n        ]);\n\n        $response = SupportAgent::make()\n            ->continue($request->input('conversation_id'))\n            ->prompt($request->input('message'));\n\n        return [\n            'reply' => $response->text(),\n            'conversation_id' => $response->conversationId(),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HasConversations"
      }), " trait to your User model to query all conversations belonging to a user:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Foundation\\Auth\\User as Authenticatable;\nuse Laravel\\Ai\\HasConversations;\n\nclass User extends Authenticatable\n{\n    use HasConversations;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "127-structured-output",
      children: "12.7 Structured Output"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " HasStructuredOutput enables typed JSON responses using the fluent JsonSchema builder with nested objects, arrays, enums, and validation constraints."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HasStructuredOutput"
      }), " interface enables agents to return typed, validated JSON responses. Use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "schema()"
      }), " method with the fluent ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JsonSchema"
      }), " builder:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents;\n\nuse Illuminate\\Contracts\\JsonSchema\\JsonSchema;\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\HasStructuredOutput;\n\n> **Warning:** Structured output enforces the response shape — if the model produces output that violates the schema, the SDK throws an exception. Design your schemas with nullable and optional fields for real-world data variability.\nuse Laravel\\Ai\\Promptable;\nuse Stringable;\n\nclass InvoiceExtractor implements Agent, HasStructuredOutput\n{\n    use Promptable;\n\n    public function instructions(): Stringable|string\n    {\n        return 'Extract structured invoice data from the provided text. Extract all fields accurately. If a field is not present, omit it from the output.';\n    }\n\n    public function schema(JsonSchema $schema): array\n    {\n        return [\n            'invoice_number' => $schema->string()->required(),\n            'vendor_name' => $schema->string()->required(),\n            'vendor_address' => $schema->string()->required(),\n            'issue_date' => $schema->string()->pattern('^\\d{4}-\\d{2}-\\d{2}$')->required(),\n            'due_date' => $schema->string()->pattern('^\\d{4}-\\d{2}-\\d{2}$')->required(),\n            'currency' => $schema->string()->enum(['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'JPY'])->required(),\n            'subtotal' => $schema->float()->min(0)->required(),\n            'tax_total' => $schema->float()->min(0),\n            'total' => $schema->float()->min(0)->required(),\n            'line_items' => $schema->array()->items(\n                $schema->object(function (JsonSchema $s): array {\n                    return [\n                        'description' => $s->string()->required(),\n                        'quantity' => $s->integer()->min(1)->required(),\n                        'unit_price' => $s->float()->min(0)->required(),\n                        'total_price' => $s->float()->min(0)->required(),\n                    ];\n                })\n            ),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When prompted, the response implements ", (0,jsx_runtime.jsx)(_components.code, {
        children: "StructuredAgentResponse"
      }), " and behaves as an array:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Ai\\Agents\\InvoiceExtractor;\nuse Illuminate\\Http\\Request;\n\nclass InvoiceController extends Controller\n{\n    public function extract(Request $request): array\n    {\n        $request->validate(['text' => 'required|string']);\n\n        $response = InvoiceExtractor::make()->prompt($request->input('text'));\n\n        $data = $response->structured();\n\n        return [\n            'invoice_number' => $data['invoice_number'],\n            'vendor' => $data['vendor_name'],\n            'total' => $data['total'],\n            'line_items_count' => count($data['line_items']),\n            'first_item' => $data['line_items'][0]['description'],\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "128-streaming-responses",
      children: "12.8 Streaming Responses"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The stream() method returns tokens as they arrive, with then() callbacks for post-stream processing and Vercel AI SDK protocol compatibility."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "stream()"
      }), " method returns a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "StreamableAgentResponse"
      }), ", essential for chat interfaces where you display tokens as they arrive:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Ai\\Agents\\SalesCoach;\nuse Illuminate\\Http\\Request;\nuse Symfony\\Component\\HttpFoundation\\StreamedResponse;\n\nclass StreamingController extends Controller\n{\n    public function stream(Request $request): StreamedResponse\n    {\n        $request->validate(['transcript' => 'required|string']);\n\n        $response = new StreamedResponse(function () use ($request): void {\n            $stream = SalesCoach::make()->stream(\n                'Provide a line-by-line critique: ' . $request->input('transcript')\n            );\n\n            foreach ($stream as $chunk) {\n                if ($chunk->text() !== '') {\n                    echo 'data: ' . json_encode(['token' => $chunk->text()]) . \"\\n\\n\";\n                    ob_flush();\n                    flush();\n                }\n            }\n\n            echo 'data: [DONE]' . \"\\n\\n\";\n            ob_flush();\n            flush();\n        });\n\n        $response->headers->set('Content-Type', 'text/event-stream');\n        $response->headers->set('Cache-Control', 'no-cache');\n        $response->headers->set('Connection', 'keep-alive');\n        $response->headers->set('X-Accel-Buffering', 'no');\n\n        return $response;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "then()"
      }), " callback executes once the stream completes:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Ai\\Agents\\SalesCoach;\nuse App\\Models\\AnalysisLog;\nuse Illuminate\\Http\\Request;\nuse Illuminate\\Support\\Facades\\Auth;\nuse Symfony\\Component\\HttpFoundation\\StreamedResponse;\n\nclass StreamingController extends Controller\n{\n    public function streamAndLog(Request $request): StreamedResponse\n    {\n        $request->validate(['transcript' => 'required|string']);\n        $userId = Auth::id();\n\n        $response = new StreamedResponse(function () use ($request, $userId): void {\n            $fullText = '';\n\n            $stream = SalesCoach::make()\n                ->stream('Analyze this transcript: ' . $request->input('transcript'))\n                ->then(function (string $completeText) use ($userId): void {\n                    AnalysisLog::create([\n                        'user_id' => $userId,\n                        'type' => 'sales_coaching',\n                        'result' => $completeText,\n                    ]);\n                });\n\n            foreach ($stream as $chunk) {\n                if ($chunk->text() !== '') {\n                    $fullText .= $chunk->text();\n                    echo 'data: ' . json_encode(['token' => $chunk->text()]) . \"\\n\\n\";\n                    ob_flush();\n                    flush();\n                }\n            }\n\n            echo 'data: [DONE]' . \"\\n\\n\";\n            ob_flush();\n            flush();\n        });\n\n        $response->headers->set('Content-Type', 'text/event-stream');\n        $response->headers->set('Cache-Control', 'no-cache');\n\n        return $response;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For Vercel AI SDK protocol compatibility, call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "usingVercelDataProtocol()"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Ai\\Agents\\SupportAgent;\nuse Illuminate\\Http\\Request;\nuse Symfony\\Component\\HttpFoundation\\StreamedResponse;\n\nclass VercelChatController extends Controller\n{\n    public function chat(Request $request): StreamedResponse\n    {\n        $request->validate(['message' => 'required|string']);\n\n        $response = new StreamedResponse(function () use ($request): void {\n            $stream = SupportAgent::make()\n                ->usingVercelDataProtocol()\n                ->stream($request->input('message'));\n\n            foreach ($stream as $chunk) {\n                echo $chunk->text();\n                ob_flush();\n                flush();\n            }\n        });\n\n        $response->headers->set('Content-Type', 'text/event-stream');\n        $response->headers->set('Cache-Control', 'no-cache');\n\n        return $response;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "129-broadcasting",
      children: "12.9 Broadcasting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "broadcast()"
      }), " method on a stream dispatches events as each chunk arrives:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Ai\\Agents\\SupportAgent;\nuse Illuminate\\Http\\Request;\n\nclass BroadcastChatController extends Controller\n{\n    public function chat(Request $request): void\n    {\n        $request->validate(['message' => 'required|string']);\n\n        SupportAgent::make()\n            ->broadcast()\n            ->onChannel('support.' . $request->user()->id)\n            ->asEvent('AiMessage')\n            ->stream($request->input('message'));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For high-traffic applications, use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "broadcastOnQueue()"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Ai\\Agents\\SupportAgent;\nuse Illuminate\\Http\\Request;\n\nclass BroadcastChatController extends Controller\n{\n    public function chat(Request $request): void\n    {\n        $request->validate(['message' => 'required|string']);\n\n        SupportAgent::make()\n            ->broadcastOnQueue()\n            ->onChannel('support.' . $request->user()->id)\n            ->stream($request->input('message'));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1210-queueing-agent-work",
      children: "12.10 Queueing Agent Work"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The queue() method dispatches agent prompts to the queue for async processing, with then() and catch() callbacks for result handling."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "queue()"
      }), " method dispatches agent prompts to the queue for async processing:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Ai\\Agents\\SalesCoach;\nuse App\\Models\\AnalysisJob;\nuse Illuminate\\Http\\Request;\nuse Illuminate\\Support\\Facades\\Auth;\n\nclass QueueController extends Controller\n{\n    public function analyzeTranscript(Request $request): array\n    {\n        $request->validate(['transcript' => 'required|string']);\n\n        $job = AnalysisJob::create([\n            'user_id' => Auth::id(),\n            'status' => 'pending',\n        ]);\n\n        SalesCoach::make()\n            ->queue('Analyze this transcript: ' . $request->input('transcript'))\n            ->then(function (string $response) use ($job): void {\n                $job->update([\n                    'status' => 'completed',\n                    'result' => $response,\n                    'completed_at' => now(),\n                ]);\n            })\n            ->catch(function (\\Throwable $e) use ($job): void {\n                $job->update([\n                    'status' => 'failed',\n                    'error' => $e->getMessage(),\n                    'completed_at' => now(),\n                ]);\n            });\n\n        return ['job_id' => $job->id, 'status' => 'pending'];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1211-agent-attachments",
      children: "12.11 Agent Attachments"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Files\\Document"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Files\\Image"
      }), " classes provide file context to agents:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Ai\\Agents\\SalesCoach;\nuse Illuminate\\Http\\Request;\nuse Illuminate\\Support\\Facades\\Storage;\nuse Laravel\\Ai\\Files\\Document;\n\nclass AttachmentController extends Controller\n{\n    public function analyzeWithTranscript(Request $request): array\n    {\n        $request->validate([\n            'transcript_id' => 'required|integer|exists:transcripts,id',\n        ]);\n\n        $transcript = \\App\\Models\\Transcript::findOrFail($request->input('transcript_id'));\n\n        $response = SalesCoach::make()\n            ->withAttachment(\n                Document::fromStorage(Storage::disk('s3'), $transcript->file_path)\n            )\n            ->prompt('Analyze this sales call transcript and provide coaching feedback.');\n\n        return ['feedback' => $response->text()];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For image attachments, use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Files\\Image"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Ai\\Agents\\SalesCoach;\nuse Illuminate\\Http\\Request;\nuse Laravel\\Ai\\Files\\Image;\n\nclass ImageAnalysisController extends Controller\n{\n    public function analyzeScreenshot(Request $request): array\n    {\n        $request->validate(['screenshot' => 'required|image|max:10240']);\n\n        $response = SalesCoach::make()\n            ->withAttachment(\n                Image::upload($request->file('screenshot'))\n            )\n            ->prompt('Analyze this CRM screenshot and suggest improvements.');\n\n        return ['feedback' => $response->text()];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1212-anonymous-agents",
      children: "12.12 Anonymous Agents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Agent"
      }), " facade creates anonymous agents inline without a dedicated class:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse Illuminate\\Http\\Request;\nuse Laravel\\Ai\\Facades\\Agent;\nuse Laravel\\Ai\\Lab;\n\nclass QuickController extends Controller\n{\n    public function summarize(Request $request): array\n    {\n        $request->validate(['text' => 'required|string']);\n\n        $response = Agent::make()\n            ->instructions('You are a concise summarizer. Summarize any text in exactly three sentences.')\n            ->using(Lab::Anthropic)\n            ->model('claude-sonnet-4-20250514')\n            ->prompt($request->input('text'));\n\n        return ['summary' => $response->text()];\n    }\n}\n"
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
            children: "prompt()"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "stream()"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "queue()"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocking (full text)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Streaming (chunks)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Async (callback)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full round-trip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First token fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Background processing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User Experience"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Waiting indicator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time token display"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poll/broadcast result"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error Handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Try/catch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "then() callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "catch() callback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple questions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chat interfaces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heavy processing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--ai-sdk-artisan-commands",
      children: "Quick Reference — AI SDK Artisan Commands"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "composer require laravel/ai"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Install AI SDK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "php artisan vendor:publish --provider=\"Laravel\\Ai\\AiServiceProvider\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Publish config"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "php artisan make:agent SalesCoach"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create agent class"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "php artisan migrate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create conversation tables"
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
            children: "Support Bot"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Content Generator"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Extractor"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Agent Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conversational"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-prompt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured output"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-turn (forUser)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (stateless)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (stateless)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text stream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text (full response)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured JSON"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stream()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prompt()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "queue()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Provider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anthropic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenAI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gemini"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Which trait provides the default make() method implementation for agents?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) HasConversations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Promptable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) HasStructuredOutput"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) RemembersConversations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. How do you continue an existing conversation with an agent?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) Agent::resume($id)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) ->continue($conversationId)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) ->resume($conversationId)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) ->load($conversationId)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. What does HasStructuredOutput enforce?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) Response speed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Typed JSON response shape"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Conversation history length"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Token limits"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Which method enables Vercel AI SDK protocol compatibility?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) usingVercelProtocol()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) usingVercelDataProtocol()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) enableVercel()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) vercelMode()"
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
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "laravel/ai"
        }), " package provides a unified, provider-agnostic API for text generation, tool calling, embeddings, audio, images, and vector stores across 14+ providers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Installation requires ", (0,jsx_runtime.jsx)(_components.code, {
          children: "composer require laravel/ai"
        }), ", publishing configuration, and running ", (0,jsx_runtime.jsx)(_components.code, {
          children: "php artisan migrate"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Agents implement the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Agent"
        }), " interface with an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "instructions()"
        }), " method; the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Promptable"
        }), " trait provides ", (0,jsx_runtime.jsx)(_components.code, {
          children: "make()"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "prompt()"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Conversational agents use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RemembersConversations"
        }), ", persisting messages to the database with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "forUser()"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "continue()"
        }), " support"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "HasStructuredOutput"
        }), " enables typed JSON responses using the fluent ", (0,jsx_runtime.jsx)(_components.code, {
          children: "JsonSchema"
        }), " builder with nested objects, arrays, enums, and constraints"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Streaming via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stream()"
        }), " returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "StreamableAgentResponse"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "then()"
        }), " callbacks and Vercel AI SDK protocol support"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Broadcasting dispatches over WebSockets; queuing with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "queue()"
        }), " enables async agent execution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Files\\Document"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Files\\Image"
        }), " provide file context; anonymous agents via the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Agent"
        }), " facade enable inline creation"]
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
          children: ["What is the purpose of the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Promptable"
          }), " trait and which interface requires its use? Describe the methods it provides."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain how structured output enforces response shape. What happens when the language model produces output that violates the defined schema?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Compare the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "stream()"
          }), " method with the standard ", (0,jsx_runtime.jsx)(_components.code, {
            children: "prompt()"
          }), " method. In what scenarios would you choose streaming over a blocking call?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["How does the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RemembersConversations"
          }), " trait persist conversational state? Describe the role of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "forUser()"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "continue()"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the difference between a dedicated agent class and an anonymous agent created via the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Agent"
          }), " facade?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CodeReviewer"
          }), " agent class that analyzes submitted PHP code and returns structured output containing an array of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "issues"
          }), " → each with a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "severity"
          }), " enum (error, warning, suggestion), a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "line"
          }), " number, and a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "message"
          }), ". Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "HasStructuredOutput"
          }), " with a nested object inside an array."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Implement a controller endpoint that accepts a conversation ID and a message, continues an existing conversation with a support agent, streams the response using the Vercel AI SDK protocol, and broadcasts each chunk to a Pusher channel named ", (0,jsx_runtime.jsx)(_components.code, {
            children: "chat.{conversation_id}"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Build an Artisan command that reads a text file from the local filesystem, passes it as a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Document"
          }), " attachment to a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SummaryAgent"
          }), ", and writes the response to a new file in the storage directory."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Design a multi-agent pipeline with three agents: a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ClassifierAgent"
      }), " (structured output: category and confidence), a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SpecialistAgent"
      }), " (detailed analysis per category), and a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReviewerAgent"
      }), " (quality check). Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PipelineController"
      }), " that queues the classifier, passes its result to the specialist, then passes the specialist output to the reviewer, all using queued calls with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "then()"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "catch()"
      }), " callbacks. Return a pipeline ID for frontend polling."]
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