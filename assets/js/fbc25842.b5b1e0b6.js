"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[2029],{

/***/ 63927
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_22_advanced_ai_agents_12_autogen_agentic_chat_md_fbc_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-22-advanced-ai-agents-12-autogen-agentic-chat-md-fbc.json
const site_docs_courses_ai_engineering_placement_22_advanced_ai_agents_12_autogen_agentic_chat_md_fbc_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/advanced-ai-agents/12-autogen-agentic-chat","title":"AutoGen: Multi-Agent Conversations","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/22-advanced-ai-agents/12-autogen-agentic-chat.md","sourceDirName":"courses/ai-engineering-placement/22-advanced-ai-agents","slug":"/ai-engineering-placement/22-advanced-ai-agents/12-autogen-agentic-chat","permalink":"/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/12-autogen-agentic-chat","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":283,"frontMatter":{"id":"12-autogen-agentic-chat","slug":"/ai-engineering-placement/22-advanced-ai-agents/12-autogen-agentic-chat","title":"AutoGen: Multi-Agent Conversations","sidebar_label":"AutoGen: Multi-Agent Conversations","sidebar_position":283},"sidebar":"placementSidebar","previous":{"title":"CrewAI: Multi-Agent Orchestration","permalink":"/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/11-crewai-multi-agent"},"next":{"title":"OpenAI Agents SDK","permalink":"/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/13-openai-agents-sdk"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/22-advanced-ai-agents/12-autogen-agentic-chat.md


const frontMatter = {
	id: '12-autogen-agentic-chat',
	slug: '/ai-engineering-placement/22-advanced-ai-agents/12-autogen-agentic-chat',
	title: 'AutoGen: Multi-Agent Conversations',
	sidebar_label: 'AutoGen: Multi-Agent Conversations',
	sidebar_position: 283
};
const contentTitle = 'AutoGen: Multi-Agent Conversations';

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
  "level": 3
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 3
}, {
  "value": "12.1 AutoGen Architecture",
  "id": "121-autogen-architecture",
  "level": 3
}, {
  "value": "12.1.1 ConversableAgent",
  "id": "1211-conversableagent",
  "level": 4
}, {
  "value": "12.1.2 AssistantAgent",
  "id": "1212-assistantagent",
  "level": 4
}, {
  "value": "12.1.3 UserProxyAgent",
  "id": "1213-userproxyagent",
  "level": 4
}, {
  "value": "12.1.4 Message Flow",
  "id": "1214-message-flow",
  "level": 4
}, {
  "value": "12.1.5 Installation",
  "id": "1215-installation",
  "level": 4
}, {
  "value": "12.2 Two-Agent Chat",
  "id": "122-two-agent-chat",
  "level": 3
}, {
  "value": "12.2.1 Basic Two-Agent Chat",
  "id": "1221-basic-two-agent-chat",
  "level": 4
}, {
  "value": "12.2.2 Termination Conditions",
  "id": "1222-termination-conditions",
  "level": 4
}, {
  "value": "12.2.3 Custom Reply Functions",
  "id": "1223-custom-reply-functions",
  "level": 4
}, {
  "value": "12.3 Code Execution",
  "id": "123-code-execution",
  "level": 3
}, {
  "value": "12.3.1 Local Code Execution",
  "id": "1231-local-code-execution",
  "level": 4
}, {
  "value": "12.3.2 Docker Sandboxed Execution",
  "id": "1232-docker-sandboxed-execution",
  "level": 4
}, {
  "value": "12.3.3 Custom Code Executor",
  "id": "1233-custom-code-executor",
  "level": 4
}, {
  "value": "12.3.4 Code Execution Flow",
  "id": "1234-code-execution-flow",
  "level": 4
}, {
  "value": "12.4 Tool Registration",
  "id": "124-tool-registration",
  "level": 3
}, {
  "value": "12.4.1 Registering a Function Tool",
  "id": "1241-registering-a-function-tool",
  "level": 4
}, {
  "value": "12.4.2 Tool Schema Generation",
  "id": "1242-tool-schema-generation",
  "level": 4
}, {
  "value": "12.4.3 Multiple Tools",
  "id": "1243-multiple-tools",
  "level": 4
}, {
  "value": "12.4.4 Tool Error Handling",
  "id": "1244-tool-error-handling",
  "level": 4
}, {
  "value": "12.5 Multi-Agent Conversation",
  "id": "125-multi-agent-conversation",
  "level": 3
}, {
  "value": "12.5.1 GroupChat Basics",
  "id": "1251-groupchat-basics",
  "level": 4
}, {
  "value": "12.5.2 Speaker Selection Methods",
  "id": "1252-speaker-selection-methods",
  "level": 4
}, {
  "value": "12.5.3 Custom Speaker Selection",
  "id": "1253-custom-speaker-selection",
  "level": 4
}, {
  "value": "12.5.4 Broadcast Pattern",
  "id": "1254-broadcast-pattern",
  "level": 4
}, {
  "value": "12.5.5 GroupChat Flow",
  "id": "1255-groupchat-flow",
  "level": 4
}, {
  "value": "12.6 Advanced Patterns",
  "id": "126-advanced-patterns",
  "level": 3
}, {
  "value": "12.6.1 Nested Chats",
  "id": "1261-nested-chats",
  "level": 4
}, {
  "value": "12.6.2 Sequential Chats",
  "id": "1262-sequential-chats",
  "level": 4
}, {
  "value": "12.6.3 Reflection Pattern",
  "id": "1263-reflection-pattern",
  "level": 4
}, {
  "value": "12.6.4 Human Input Mode",
  "id": "1264-human-input-mode",
  "level": 4
}, {
  "value": "12.6.5 Putting It All Together: Production Workflow",
  "id": "1265-putting-it-all-together-production-workflow",
  "level": 4
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Q1: What is the difference between AssistantAgent and UserProxyAgent in AutoGen?",
  "id": "q1-what-is-the-difference-between-assistantagent-and-userproxyagent-in-autogen",
  "level": 3
}, {
  "value": "Q2: How does AutoGen handle code execution safety?",
  "id": "q2-how-does-autogen-handle-code-execution-safety",
  "level": 3
}, {
  "value": "Q3: Explain the GroupChat speaker selection methods.",
  "id": "q3-explain-the-groupchat-speaker-selection-methods",
  "level": 3
}, {
  "value": "Q4: How do you register a tool and ensure the LLM calls it correctly?",
  "id": "q4-how-do-you-register-a-tool-and-ensure-the-llm-calls-it-correctly",
  "level": 3
}, {
  "value": "Q5: What is the reflection pattern and when should you use it?",
  "id": "q5-what-is-the-reflection-pattern-and-when-should-you-use-it",
  "level": 3
}, {
  "value": "Q6: How does nested chat differ from group chat?",
  "id": "q6-how-does-nested-chat-differ-from-group-chat",
  "level": 3
}, {
  "value": "Q7: What is the role of max_consecutive_auto_reply and how does it affect termination?",
  "id": "q7-what-is-the-role-of-max_consecutive_auto_reply-and-how-does-it-affect-termination",
  "level": 3
}, {
  "value": "Q8: Compare AutoGen&#39;s approach to multi-agent orchestration with CrewAI.",
  "id": "q8-compare-autogens-approach-to-multi-agent-orchestration-with-crewai",
  "level": 3
}, {
  "value": "Q9: How do you handle errors when a tool fails during a conversation?",
  "id": "q9-how-do-you-handle-errors-when-a-tool-fails-during-a-conversation",
  "level": 3
}, {
  "value": "Q10: What patterns do you use for production AutoGen deployments?",
  "id": "q10-what-patterns-do-you-use-for-production-autogen-deployments",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Chapter Quiz (5 MCQ)",
  "id": "chapter-quiz-5-mcq",
  "level": 2
}, {
  "value": "Q1: Which agent type is responsible for executing code in an AutoGen conversation?",
  "id": "q1-which-agent-type-is-responsible-for-executing-code-in-an-autogen-conversation",
  "level": 3
}, {
  "value": "Q2: What happens when speaker_selection_method is set to &quot;auto&quot;?",
  "id": "q2-what-happens-when-speaker_selection_method-is-set-to-auto",
  "level": 3
}, {
  "value": "Q3: How does AutoGen detect that a conversation should terminate?",
  "id": "q3-how-does-autogen-detect-that-a-conversation-should-terminate",
  "level": 3
}, {
  "value": "Q4: What is the purpose of register_for_execution on UserProxyAgent?",
  "id": "q4-what-is-the-purpose-of-register_for_execution-on-userproxyagent",
  "level": 3
}, {
  "value": "Q5: In a nested chat pattern, what happens when an agent receives a subtask?",
  "id": "q5-in-a-nested-chat-pattern-what-happens-when-an-agent-receives-a-subtask",
  "level": 3
}, {
  "value": "Exercises (5)",
  "id": "exercises-5",
  "level": 2
}, {
  "value": "Exercise 1: Build a Two-Agent Data Analyzer",
  "id": "exercise-1-build-a-two-agent-data-analyzer",
  "level": 3
}, {
  "value": "Exercise 2: Multi-Agent Research Team",
  "id": "exercise-2-multi-agent-research-team",
  "level": 3
}, {
  "value": "Exercise 3: Custom Tool — Stock Price Fetcher",
  "id": "exercise-3-custom-tool--stock-price-fetcher",
  "level": 3
}, {
  "value": "Exercise 4: Reflective Code Generator",
  "id": "exercise-4-reflective-code-generator",
  "level": 3
}, {
  "value": "Exercise 5: Production Workflow — Report Generator",
  "id": "exercise-5-production-workflow--report-generator",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
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
    code: "code",
    details: "details",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
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
        id: "autogen-multi-agent-conversations",
        children: "AutoGen: Multi-Agent Conversations"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Understand AutoGen architecture — agents, conversation patterns, assistant agent, user proxy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build two-agent chat systems with assistant + user proxy, code execution, and tool calling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design multi-agent conversations with group chat, round-robin, speaker selection, and broadcast"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement code execution workflows with Docker sandboxing and result feedback loops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Register and execute function tools with typed schemas and error handling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply advanced patterns — nested chats, sequential chats, reflection, human input mode"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AutoGen is a multi-agent conversation framework from Microsoft Research. It enables LLM agents to communicate, collaborate, and solve complex tasks through structured conversations. Unlike single-agent systems, AutoGen lets you create teams of agents that talk to each other, share context, and iteratively improve results."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Companies like Microsoft, Morgan Stanley, and AI startups use AutoGen for automated code generation, data analysis, research synthesis, and workflow automation. This chapter covers the full AutoGen stack — from two-agent chat to advanced multi-agent patterns."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python 3.10+ and working virtual environment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API key for an LLM provider (OpenAI, Azure OpenAI, or local model via Ollama)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic understanding of agent fundamentals (ReAct pattern, tool calling)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with Python async programming is helpful but not required"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Completed ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/11-crewai-multi-agent",
          children: "CrewAI: Multi-Agent Orchestration"
        }), " or equivalent knowledge"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Agent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An autonomous conversational participant powered by an LLM with configured system message"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AssistantAgent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An AI agent that responds to messages using an LLM, can call tools and generate code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UserProxyAgent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A proxy agent that simulates human input — can execute code, provide feedback, or ask clarifying questions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ConversableAgent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The base class for all agents — defines the core send/receive/reply conversation loop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GroupChat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A multi-agent conversation where multiple agents take turns speaking in a shared chat room"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GroupChatManager"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The orchestrator for GroupChat — manages turn-taking, speaker selection, and termination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tool Registration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The mechanism to attach Python functions to agents as callable tools with JSON schemas"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Nested Chat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A pattern where one agent spawns a sub-conversation with other agents to complete a subtask"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sequential Chat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A pattern where agents converse in a fixed sequence, passing results between each pair"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Code Execution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The ability for agents to write, run, and debug code in a sandboxed or local environment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reflection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An agent pattern where an agent critiques its own output and generates improved responses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Human Input Mode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A mode where the UserProxyAgent pauses and asks a human for input before proceeding"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
            children: "12.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AutoGen Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ConversableAgent, AssistantAgent, UserProxyAgent, message flow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-Agent Chat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "assistant + user proxy, conversation patterns, termination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code Execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "code writing, local execution, Docker sandbox, result feedback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool Registration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "function tools, tool schemas, tool execution, error handling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Agent Conversation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GroupChat, round-robin, speaker selection, broadcast"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "nested chats, sequential chats, reflection, human input mode"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\r\n    subgraph Core[AutoGen Core Architecture]\r\n        CA[ConversableAgent]\r\n        AA[AssistantAgent]\r\n        UPA[UserProxyAgent]\r\n    end\r\n\r\n    subgraph Patterns[Conversation Patterns]\r\n        TC[Two-Agent Chat]\r\n        GC[GroupChat]\r\n        NC[Nested Chat]\r\n        SC[Sequential Chat]\r\n    end\r\n\r\n    subgraph Capabilities[Agent Capabilities]\r\n        CE[Code Execution]\r\n        TR[Tool Registration]\r\n        RF[Reflection]\r\n        HI[Human Input]\r\n    end\r\n\r\n    subgraph Infra[Infrastructure]\r\n        DS[Docker Sandbox]\r\n        LS[Local Execution]\r\n        LLM[LLM Backend]\r\n    end\r\n\r\n    CA --> AA\r\n    CA --> UPA\r\n    AA --> TC\r\n    UPA --> TC\r\n    TC --> GC\r\n    GC --> NC\r\n    GC --> SC\r\n    AA --> CE\r\n    AA --> TR\r\n    UPA --> CE\r\n    AA --> RF\r\n    UPA --> HI\r\n    CE --> DS\r\n    CE --> LS\r\n    AA --> LLM\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-autogen-architecture",
      children: "12.1 AutoGen Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AutoGen's architecture is built on a single base class: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ConversableAgent"
      }), ". Every other agent type inherits from this class. The framework defines three core agent types."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1211-conversableagent",
      children: "12.1.1 ConversableAgent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "ConversableAgent"
      }), " is the foundation. It implements the core conversation loop: receive message → process → generate reply → send reply. Every agent in AutoGen is a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ConversableAgent"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key attributes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "name"
        }), ": Unique identifier for the agent"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "system_message"
        }), ": The system prompt that shapes behavior"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "llm_config"
        }), ": Configuration dict for the LLM (model, temperature, API key)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "human_input_mode"
        }), ": Controls when to ask for human input (NEVER, TERMINATE, ALWAYS)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "max_consecutive_auto_reply"
        }), ": Limits how many auto-replies the agent can generate"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1212-assistantagent",
      children: "12.1.2 AssistantAgent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "AssistantAgent"
      }), " is an AI agent powered by an LLM. It generates responses using the configured model. It can call tools, write code, and produce structured outputs. It does NOT execute code by default — it hands code off to a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UserProxyAgent"
      }), " for execution."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from autogen import AssistantAgent\r\n\r\nassistant = AssistantAgent(\r\n    name=\"coding_assistant\",\r\n    system_message=\"You are a Python expert. Write clean, well-documented code.\",\r\n    llm_config={\r\n        \"config_list\": [\r\n            {\r\n                \"model\": \"gpt-4o\",\r\n                \"api_key\": \"YOUR_API_KEY\",\r\n            }\r\n        ],\r\n        \"temperature\": 0.1,\r\n    },\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1213-userproxyagent",
      children: "12.1.3 UserProxyAgent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "UserProxyAgent"
      }), " acts as a proxy for human users. It can execute code, provide feedback, and forward messages. In automated workflows, it runs without actual human input. In development mode, it can prompt the user for feedback."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from autogen import UserProxyAgent\r\n\r\nuser_proxy = UserProxyAgent(\r\n    name=\"user_proxy\",\r\n    human_input_mode=\"NEVER\",  # Fully automated\r\n    max_consecutive_auto_reply=10,\r\n    code_execution_config={\r\n        \"work_dir\": \"coding_workspace\",\r\n        \"use_docker\": False,  # Execute locally\r\n    },\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1214-message-flow",
      children: "12.1.4 Message Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every conversation follows a send/receive cycle:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\r\n    participant U as UserProxyAgent\r\n    participant A as AssistantAgent\r\n\r\n    U->>A: Message (task description)\r\n    A->>A: LLM generates response\r\n    A->>U: Reply (text or code block)\r\n    U->>U: Execute code (if present)\r\n    U->>A: Execution result feedback\r\n    A->>A: LLM generates next response\r\n    A->>U: Updated or final reply\r\n    Note over U,A: Cycle continues until termination\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1215-installation",
      children: "12.1.5 Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Install AutoGen with the core dependencies:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "pip install pyautogen\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For Docker-based code execution, install the extra:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "pip install pyautogen[docker]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For local models via Ollama or vLLM, AutoGen supports any OpenAI-compatible endpoint."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-two-agent-chat",
      children: "12.2 Two-Agent Chat"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The simplest AutoGen pattern pairs one ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AssistantAgent"
      }), " with one ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UserProxyAgent"
      }), ". The assistant generates responses and code. The user proxy executes code and provides feedback."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1221-basic-two-agent-chat",
      children: "12.2.1 Basic Two-Agent Chat"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import autogen\r\nfrom autogen import AssistantAgent, UserProxyAgent\r\n\r\n# Configure the LLM\r\nllm_config = {\r\n    \"config_list\": [\r\n        {\r\n            \"model\": \"gpt-4o\",\r\n            \"api_key\": \"YOUR_API_KEY\",\r\n        }\r\n    ],\r\n    \"temperature\": 0.1,\r\n}\r\n\r\n# Create assistant agent\r\nassistant = AssistantAgent(\r\n    name=\"assistant\",\r\n    system_message=\"You are a helpful Python assistant. \"\r\n                   \"Write clean code with explanations. \"\r\n                   \"Use code blocks for any code execution.\",\r\n    llm_config=llm_config,\r\n)\r\n\r\n# Create user proxy agent\r\nuser_proxy = UserProxyAgent(\r\n    name=\"user_proxy\",\r\n    human_input_mode=\"TERMINATE\",  # Ask human when task terminates\r\n    max_consecutive_auto_reply=10,\r\n    code_execution_config={\r\n        \"work_dir\": \"workspace\",\r\n        \"use_docker\": False,\r\n    },\r\n)\r\n\r\n# Start the conversation\r\nuser_proxy.initiate_chat(\r\n    assistant,\r\n    message=\"Calculate the Fibonacci sequence up to the 20th term \"\r\n            \"and find the sum of all even terms.\",\r\n)\r\n\r\n# Output:\r\n# assistant:\r\n# I'll write a Python script to calculate the Fibonacci sequence\r\n# up to the 20th term and sum all even terms.\r\n# ```python\r\n# def fibonacci_up_to_n(n):\r\n#     fib = [0, 1]\r\n#     for i in range(2, n):\r\n#         fib.append(fib[i-1] + fib[i-2])\r\n#     return fib\r\n#\r\n# fib_20 = fibonacci_up_to_n(20)\r\n# even_sum = sum(x for x in fib_20 if x % 2 == 0)\r\n# print(f\"First 20 Fibonacci terms: {fib_20}\")\r\n# print(f\"Sum of even terms: {even_sum}\")\r\n# ```\r\n# user_proxy (executing code):\r\n# First 20 Fibonacci terms: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]\r\n# Sum of even terms: 3382\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1222-termination-conditions",
      children: "12.2.2 Termination Conditions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Control when a conversation ends with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "max_consecutive_auto_reply"
      }), " parameter and termination message detection."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "assistant = AssistantAgent(\r\n    name=\"assistant\",\r\n    system_message=\"End your response with 'TERMINATE' when the task is complete.\",\r\n    llm_config=llm_config,\r\n)\r\n\r\n# AutoGen detects \"TERMINATE\" in the message and stops the conversation\r\nuser_proxy.initiate_chat(\r\n    assistant,\r\n    message=\"Write a Python function to check if a string is a palindrome.\",\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1223-custom-reply-functions",
      children: "12.2.3 Custom Reply Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Override the default reply mechanism with custom functions."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from autogen import ConversableAgent\r\n\r\ndef custom_reply(recipient, messages, sender, config):\r\n    \"\"\"Custom reply function that returns a fixed response.\"\"\"\r\n    last_message = messages[-1][\"content\"]\r\n    if \"hello\" in last_message.lower():\r\n        return \"Hello! How can I help you today?\"\r\n    return None  # Fall back to default reply\r\n\r\nagent_with_custom = ConversableAgent(\r\n    name=\"custom_agent\",\r\n    default_auto_reply=\"I'm listening.\",\r\n)\r\n\r\n# Register the custom reply function\r\nagent_with_custom.register_reply(\r\n    trigger=ConversableAgent,\r\n    reply_func=custom_reply,\r\n    config=None,\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "123-code-execution",
      children: "12.3 Code Execution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AutoGen's code execution capability is one of its most powerful features. Agents write code in markdown code blocks, and the UserProxyAgent extracts, saves, and executes them."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1231-local-code-execution",
      children: "12.3.1 Local Code Execution"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "user_proxy = UserProxyAgent(\r\n    name=\"user_proxy\",\r\n    human_input_mode=\"NEVER\",\r\n    code_execution_config={\r\n        \"work_dir\": \"coding_workspace\",\r\n        \"use_docker\": False,  # Execute directly on host\r\n        \"timeout\": 60,        # Max execution time in seconds\r\n        \"last_n_messages\": 3, # Only execute code from recent messages\r\n    },\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "work_dir"
      }), " is where code files are saved. AutoGen detects code blocks in markdown (triple backticks), saves them as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "coding_{timestamp}.py"
      }), ", executes them, and captures stdout/stderr."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1232-docker-sandboxed-execution",
      children: "12.3.2 Docker Sandboxed Execution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For production safety, run code in isolated Docker containers."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "user_proxy_docker = UserProxyAgent(\r\n    name=\"user_proxy\",\r\n    human_input_mode=\"NEVER\",\r\n    code_execution_config={\r\n        \"work_dir\": \"coding_workspace\",\r\n        \"use_docker\": True,  # Run in Docker container\r\n        \"docker_container\": \"python:3.11-slim\",  # Custom image\r\n        \"timeout\": 120,\r\n    },\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AutoGen creates a container, mounts the work directory, executes code inside the container, and returns results. Each execution can reuse the same container or spawn a fresh one."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1233-custom-code-executor",
      children: "12.3.3 Custom Code Executor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a custom executor for specialized environments (e.g., Jupyter kernels, remote servers, restricted sandboxes)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from autogen.code_utils import create_virtual_env\r\nfrom autogen import UserProxyAgent\r\n\r\nclass CustomExecutor:\r\n    def __init__(self, work_dir: str):\r\n        self.work_dir = work_dir\r\n        self.env = create_virtual_env(work_dir)\r\n\r\n    def execute_code(self, code: str) -> tuple[int, str, str]:\r\n        \"\"\"Execute code and return (exit_code, stdout, stderr).\"\"\"\r\n        try:\r\n            import subprocess\r\n            result = subprocess.run(\r\n                [\"python\", \"-c\", code],\r\n                capture_output=True,\r\n                text=True,\r\n                timeout=30,\r\n                cwd=self.work_dir,\r\n            )\r\n            return (\r\n                result.returncode,\r\n                result.stdout,\r\n                result.stderr,\r\n            )\r\n        except subprocess.TimeoutExpired:\r\n            return (1, \"\", \"Execution timed out\")\r\n        except Exception as e:\r\n            return (1, \"\", str(e))\r\n\r\ncustom_executor = CustomExecutor(work_dir=\"secure_workspace\")\r\n\r\nuser_proxy_custom = UserProxyAgent(\r\n    name=\"user_proxy\",\r\n    human_input_mode=\"NEVER\",\r\n    code_execution_config={\r\n        \"executor\": custom_executor.execute_code,\r\n    },\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1234-code-execution-flow",
      children: "12.3.4 Code Execution Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[Assistant Agent] -->|Writes code block| B[UserProxyAgent]\r\n    B -->|Extracts code| C{Execution Mode}\r\n    C -->|Local| D[subprocess.run]\r\n    C -->|Docker| E[Docker container]\r\n    C -->|Custom| F[Custom executor]\r\n    D -->|stdout/stderr| G[Result feedback]\r\n    E -->|stdout/stderr| G\r\n    F -->|stdout/stderr| G\r\n    G -->|Feedback message| A\r\n    A -->|Refines code| B\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "124-tool-registration",
      children: "12.4 Tool Registration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tools let agents interact with external systems. AutoGen supports function tools with JSON schemas, similar to OpenAI's function calling."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1241-registering-a-function-tool",
      children: "12.4.1 Registering a Function Tool"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from autogen import AssistantAgent, UserProxyAgent\r\nfrom typing import Annotated, Literal\r\n\r\n# Define a tool function with type hints\r\ndef get_weather(\r\n    location: Annotated[str, \"City name, e.g., 'San Francisco'\"],\r\n    unit: Annotated[Literal[\"celsius\", \"fahrenheit\"], \"Temperature unit\"],\r\n) -> str:\r\n    \"\"\"Get current weather for a location.\"\"\"\r\n    # In production, call a real weather API\r\n    conditions = {\r\n        \"San Francisco\": (15, \"Foggy\"),\r\n        \"New York\": (22, \"Sunny\"),\r\n        \"London\": (10, \"Rainy\"),\r\n        \"Tokyo\": (18, \"Cloudy\"),\r\n    }\r\n    temp, condition = conditions.get(location, (20, \"Unknown\"))\r\n    if unit == \"fahrenheit\":\r\n        temp = temp * 9 // 5 + 32\r\n    return f\"Weather in {location}: {temp}°{unit[0].upper()}, {condition}\"\r\n\r\n# Create agents\r\nassistant = AssistantAgent(\r\n    name=\"weather_assistant\",\r\n    system_message=\"You are a weather assistant. Use the weather tool to answer queries.\",\r\n    llm_config={\r\n        \"config_list\": [{\"model\": \"gpt-4o\", \"api_key\": \"YOUR_API_KEY\"}],\r\n        \"temperature\": 0,\r\n    },\r\n)\r\n\r\nuser_proxy = UserProxyAgent(\r\n    name=\"user_proxy\",\r\n    human_input_mode=\"TERMINATE\",\r\n    code_execution_config=False,  # No code execution needed\r\n)\r\n\r\n# Register the tool with the assistant\r\nassistant.register_for_llm(\r\n    name=\"get_weather\",\r\n    description=\"Get current weather for a location\",\r\n    func=get_weather,\r\n)\r\n\r\n# Register the tool with the user proxy (for execution)\r\nuser_proxy.register_for_execution(\r\n    name=\"get_weather\",\r\n    func=get_weather,\r\n)\r\n\r\n# Start conversation\r\nuser_proxy.initiate_chat(\r\n    assistant,\r\n    message=\"What is the weather in Tokyo and New York?\",\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1242-tool-schema-generation",
      children: "12.4.2 Tool Schema Generation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AutoGen automatically generates JSON schemas from function type hints using Pydantic-like introspection. The schema for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "get_weather"
      }), " becomes:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\r\n    \"type\": \"function\",\r\n    \"function\": {\r\n        \"name\": \"get_weather\",\r\n        \"description\": \"Get current weather for a location\",\r\n        \"parameters\": {\r\n            \"type\": \"object\",\r\n            \"properties\": {\r\n                \"location\": {\r\n                    \"type\": \"string\",\r\n                    \"description\": \"City name, e.g., 'San Francisco'\"\r\n                },\r\n                \"unit\": {\r\n                    \"type\": \"string\",\r\n                    \"enum\": [\"celsius\", \"fahrenheit\"],\r\n                    \"description\": \"Temperature unit\"\r\n                }\r\n            },\r\n            \"required\": [\"location\", \"unit\"]\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1243-multiple-tools",
      children: "12.4.3 Multiple Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Register multiple tools on the same agent."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import json\r\nfrom typing import Annotated\r\n\r\ndef search_database(\r\n    query: Annotated[str, \"SQL query to execute\"],\r\n) -> str:\r\n    \"\"\"Execute a SQL query on the products database.\"\"\"\r\n    # Mock database\r\n    data = {\r\n        \"SELECT COUNT(*) FROM products\": \"1423 products\",\r\n        \"SELECT * FROM products WHERE price < 10\": \"45 products under $10\",\r\n    }\r\n    return data.get(query, f\"Query executed: {query}\")\r\n\r\ndef send_email(\r\n    to: Annotated[str, \"Recipient email address\"],\r\n    subject: Annotated[str, \"Email subject\"],\r\n    body: Annotated[str, \"Email body text\"],\r\n) -> str:\r\n    \"\"\"Send an email to a recipient.\"\"\"\r\n    # In production, integrate with SendGrid, SES, etc.\r\n    print(f\"Sending email to {to}: {subject}\")\r\n    return f\"Email sent to {to} with subject '{subject}'\"\r\n\r\n# Register both tools\r\nfor tool_func in [search_database, send_email]:\r\n    assistant.register_for_llm(name=tool_func.__name__)(tool_func)\r\n    user_proxy.register_for_execution(name=tool_func.__name__)(tool_func)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1244-tool-error-handling",
      children: "12.4.4 Tool Error Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tools should handle errors gracefully and return informative messages."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import requests\r\nfrom typing import Annotated\r\n\r\ndef fetch_github_repo(\r\n    repo: Annotated[str, \"Repository name in format 'owner/repo'\"],\r\n) -> str:\r\n    \"\"\"Fetch repository metadata from GitHub API.\"\"\"\r\n    try:\r\n        response = requests.get(\r\n            f\"https://api.github.com/repos/{repo}\",\r\n            timeout=10,\r\n        )\r\n        response.raise_for_status()\r\n        data = response.json()\r\n        return json.dumps({\r\n            \"name\": data[\"name\"],\r\n            \"stars\": data[\"stargazers_count\"],\r\n            \"forks\": data[\"forks_count\"],\r\n            \"language\": data[\"language\"],\r\n            \"description\": data[\"description\"],\r\n        }, indent=2)\r\n    except requests.exceptions.HTTPError as e:\r\n        if response.status_code == 404:\r\n            return f\"Error: Repository '{repo}' not found.\"\r\n        return f\"Error: GitHub API returned {response.status_code}: {str(e)}\"\r\n    except requests.exceptions.ConnectionError:\r\n        return \"Error: Could not connect to GitHub API.\"\r\n    except requests.exceptions.Timeout:\r\n        return \"Error: GitHub API request timed out.\"\r\n    except Exception as e:\r\n        return f\"Error: Unexpected error: {str(e)}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "125-multi-agent-conversation",
      children: "12.5 Multi-Agent Conversation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AutoGen's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GroupChat"
      }), " enables conversations with three or more agents. A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GroupChatManager"
      }), " orchestrates turn-taking."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1251-groupchat-basics",
      children: "12.5.1 GroupChat Basics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from autogen import AssistantAgent, GroupChat, GroupChatManager\r\n\r\n# Create multiple specialist agents\r\nresearcher = AssistantAgent(\r\n    name=\"researcher\",\r\n    system_message=\"You are a research specialist. Find relevant information and cite sources. \"\r\n                   \"Be thorough and precise in your analysis.\",\r\n    llm_config=llm_config,\r\n)\r\n\r\nanalyst = AssistantAgent(\r\n    name=\"analyst\",\r\n    system_message=\"You are a data analyst. Analyze data and identify patterns. \"\r\n                   \"Create visualizations and summary statistics.\",\r\n    llm_config=llm_config,\r\n)\r\n\r\nwriter = AssistantAgent(\r\n    name=\"writer\",\r\n    system_message=\"You are a technical writer. Synthesize findings into clear reports. \"\r\n                   \"Use markdown formatting and structure.\",\r\n    llm_config=llm_config,\r\n)\r\n\r\ncritic = AssistantAgent(\r\n    name=\"critic\",\r\n    system_message=\"You are a critical reviewer. Find gaps, errors, and improvements. \"\r\n                   \"Be constructive and specific.\",\r\n    llm_config=llm_config,\r\n)\r\n\r\n# Create the group chat\r\ngroup_chat = GroupChat(\r\n    agents=[researcher, analyst, writer, critic],\r\n    messages=[],  # Start with empty history\r\n    max_round=20,  # Maximum conversation turns\r\n    speaker_selection_method=\"auto\",  # LLM selects next speaker\r\n)\r\n\r\n# Create the manager\r\nmanager = GroupChatManager(\r\n    groupchat=group_chat,\r\n    llm_config=llm_config,\r\n)\r\n\r\n# User proxy initiates the conversation\r\nuser_proxy = UserProxyAgent(\r\n    name=\"user_proxy\",\r\n    human_input_mode=\"TERMINATE\",\r\n    code_execution_config=False,\r\n)\r\n\r\nuser_proxy.initiate_chat(\r\n    manager,\r\n    message=\"Research the impact of remote work on software engineering productivity \"\r\n            \"in 2024-2025. Analyze the data, write a report, and have it reviewed.\",\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1252-speaker-selection-methods",
      children: "12.5.2 Speaker Selection Methods"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "auto"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LLM picks the next speaker based on context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible conversations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "round_robin"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agents speak in fixed order, cycling through"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured turn-taking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "random"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random speaker selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exploration, brainstorming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "manual"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User selects next speaker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interactive demos"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Round-robin: each agent speaks in sequence\r\ngroup_chat_rr = GroupChat(\r\n    agents=[researcher, analyst, writer],\r\n    messages=[],\r\n    max_round=15,\r\n    speaker_selection_method=\"round_robin\",\r\n)\r\n\r\n# Manual: user picks who speaks next\r\ngroup_chat_manual = GroupChat(\r\n    agents=[researcher, analyst, writer],\r\n    messages=[],\r\n    max_round=30,\r\n    speaker_selection_method=\"manual\",\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1253-custom-speaker-selection",
      children: "12.5.3 Custom Speaker Selection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement custom speaker selection logic with a function."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def custom_speaker_selector(last_speaker, group_chat):\r\n    \"\"\"Custom logic to select the next speaker.\"\"\"\r\n    agents = group_chat.agents\r\n    last_message = group_chat.messages[-1][\"content\"] if group_chat.messages else \"\"\r\n\r\n    # If the last message contains code, let the critic review it\r\n    if \"```\" in last_message:\r\n        return next(a for a in agents if a.name == \"critic\")\r\n\r\n    # If no analyst has spoken yet, let them speak\r\n    analyst_spoken = any(\r\n        \"analyst\" in msg.get(\"name\", \"\").lower()\r\n        for msg in group_chat.messages\r\n    )\r\n    if not analyst_spoken:\r\n        return next(a for a in agents if a.name == \"analyst\")\r\n\r\n    # Default: let the manager decide\r\n    return \"auto\"\r\n\r\ngroup_chat_custom = GroupChat(\r\n    agents=[researcher, analyst, writer, critic],\r\n    messages=[],\r\n    max_round=20,\r\n    speaker_selection_method=custom_speaker_selector,\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1254-broadcast-pattern",
      children: "12.5.4 Broadcast Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Send a message to all agents and let each respond independently."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def broadcast_message(manager, message: str):\r\n    \"\"\"Send a message that all agents can respond to.\"\"\"\r\n    for agent in manager.groupchat.agents:\r\n        agent.receive(\r\n            message=message,\r\n            sender=manager,\r\n            request_reply=True,\r\n        )\r\n\r\n# The GroupChatManager handles broadcasting through the chat flow\r\nuser_proxy.initiate_chat(\r\n    manager,\r\n    message=\"Team, here is the quarterly data. Each of you analyze it from your perspective.\",\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1255-groupchat-flow",
      children: "12.5.5 GroupChat Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\r\n    participant U as UserProxy\r\n    participant M as GroupChatManager\r\n    participant R as Researcher\r\n    participant A as Analyst\r\n    participant W as Writer\r\n    participant C as Critic\r\n\r\n    U->>M: Task: Research remote work impact\r\n    M->>R: Your turn. Research the topic.\r\n    R->>M: Findings with citations\r\n    M->>A: Your turn. Analyze the data.\r\n    A->>M: Analysis with statistics\r\n    M->>W: Your turn. Write the report.\r\n    W->>M: Draft report\r\n    M->>C: Your turn. Review and critique.\r\n    C->>M: Review comments\r\n    M->>W: Revision needed. Address comments.\r\n    W->>M: Final report\r\n    M->>U: Final output\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "126-advanced-patterns",
      children: "12.6 Advanced Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AutoGen supports sophisticated conversation patterns for complex workflows."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1261-nested-chats",
      children: "12.6.1 Nested Chats"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A nested chat is a conversation within a conversation. One agent delegates a subtask to a sub-conversation with other agents and uses the result."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from autogen import AssistantAgent, UserProxyAgent, GroupChat, GroupChatManager\r\n\r\n# Define specialist agents for the nested chat\r\ncode_writer = AssistantAgent(\r\n    name=\"code_writer\",\r\n    system_message=\"You write clean Python code for data analysis tasks.\",\r\n    llm_config=llm_config,\r\n)\r\n\r\ncode_tester = AssistantAgent(\r\n    name=\"code_tester\",\r\n    system_message=\"You test Python code and fix bugs. Provide test cases.\",\r\n    llm_config=llm_config,\r\n)\r\n\r\n# Create the nested group chat\r\nnested_group = GroupChat(\r\n    agents=[code_writer, code_tester],\r\n    messages=[],\r\n    max_round=10,\r\n    speaker_selection_method=\"round_robin\",\r\n)\r\n\r\nnested_manager = GroupChatManager(\r\n    groupchat=nested_group,\r\n    llm_config=llm_config,\r\n)\r\n\r\n# Main orchestrator agent\r\norchestrator = AssistantAgent(\r\n    name=\"orchestrator\",\r\n    system_message=\"You are an orchestrator. Delegate coding tasks to the code team \"\r\n                   \"and use their output to answer the user.\",\r\n    llm_config=llm_config,\r\n)\r\n\r\n# Register nested chat handler\r\nasync def handle_code_task(message, sender, config):\r\n    \"\"\"Handle a code-related subtask using nested chat.\"\"\"\r\n    result = await nested_manager.a_initiate_chat(\r\n        orchestrator,\r\n        message=message,\r\n        max_turns=10,\r\n    )\r\n    return result.summary\r\n\r\norchestrator.register_reply(\r\n    trigger=UserProxyAgent,\r\n    reply_func=handle_code_task,\r\n    config=None,\r\n)\r\n\r\nuser_proxy = UserProxyAgent(\r\n    name=\"user_proxy\",\r\n    human_input_mode=\"NEVER\",\r\n    code_execution_config=False,\r\n)\r\n\r\n# When the user asks for code, the orchestrator spawns a nested chat\r\nuser_proxy.initiate_chat(\r\n    orchestrator,\r\n    message=\"Create a Python script that analyzes a CSV file \"\r\n            \"and generates summary statistics.\",\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1262-sequential-chats",
      children: "12.6.2 Sequential Chats"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sequential chats chain multiple two-agent conversations. The output of one chat feeds into the next."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from autogen import AssistantAgent, UserProxyAgent, SequentialFlow\r\n\r\n# Define specialized agents\r\ndata_collector = AssistantAgent(\r\n    name=\"data_collector\",\r\n    system_message=\"You collect data and organize it into structured format.\",\r\n    llm_config=llm_config,\r\n)\r\n\r\ndata_analyzer = AssistantAgent(\r\n    name=\"data_analyzer\",\r\n    system_message=\"You analyze data and find insights. \"\r\n                   \"Use statistical methods and create visualizations.\",\r\n    llm_config=llm_config,\r\n)\r\n\r\nreport_writer = AssistantAgent(\r\n    name=\"report_writer\",\r\n    system_message=\"You write professional reports with findings and recommendations.\",\r\n    llm_config=llm_config,\r\n)\r\n\r\n# Create a shared user proxy for all chats\r\nuser_proxy = UserProxyAgent(\r\n    name=\"user_proxy\",\r\n    human_input_mode=\"NEVER\",\r\n    code_execution_config={\r\n        \"work_dir\": \"workspace\",\r\n        \"use_docker\": False,\r\n    },\r\n)\r\n\r\n# Define sequential chat flow\r\nsequential_flow = SequentialFlow(\r\n    agents=[\r\n        (data_collector, \"Collect data about top AI companies in 2025\"),\r\n        (data_analyzer, \"Analyze the collected data and find trends\"),\r\n        (report_writer, \"Write a comprehensive report based on the analysis\"),\r\n    ],\r\n    max_turns_per_chat=5,\r\n    summary_method=\"last_msg\",  # Pass last message as context to next chat\r\n)\r\n\r\n# Run the sequential flow\r\nawait sequential_flow.run(user_proxy=user_proxy)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1263-reflection-pattern",
      children: "12.6.3 Reflection Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In the reflection pattern, an agent generates an initial response, then reviews and improves it. This mimics human iterative refinement."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ReflectiveAssistantAgent(AssistantAgent):\r\n    \"\"\"An agent that reflects on its own output before responding.\"\"\"\r\n\r\n    def __init__(self, *args, **kwargs):\r\n        super().__init__(*args, **kwargs)\r\n        self.reflection_prompt = (\r\n            \"Review your previous response critically. \"\r\n            \"Identify any errors, omissions, or areas for improvement. \"\r\n            \"Then provide an improved version.\"\r\n        )\r\n\r\n    async def a_generate_reply(self, messages=None, sender=None, **kwargs):\r\n        \"\"\"Generate a reply with self-reflection.\"\"\"\r\n        # First, generate the initial response\r\n        initial_response = await super().a_generate_reply(\r\n            messages=messages, sender=sender, **kwargs\r\n        )\r\n\r\n        # Create reflection context\r\n        reflection_messages = messages + [\r\n            {\"role\": \"assistant\", \"content\": initial_response},\r\n            {\"role\": \"user\", \"content\": self.reflection_prompt},\r\n        ]\r\n\r\n        # Generate reflection (improved version)\r\n        improved_response = await super().a_generate_reply(\r\n            messages=reflection_messages, sender=sender, **kwargs\r\n        )\r\n\r\n        return improved_response\r\n\r\nreflective_assistant = ReflectiveAssistantAgent(\r\n    name=\"reflective_assistant\",\r\n    system_message=\"You are a thoughtful analyst who double-checks your work.\",\r\n    llm_config=llm_config,\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1264-human-input-mode",
      children: "12.6.4 Human Input Mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Control when the UserProxyAgent asks for human input."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# NEVER: Fully automated, no human input\r\nauto_proxy = UserProxyAgent(\r\n    name=\"auto_proxy\",\r\n    human_input_mode=\"NEVER\",\r\n)\r\n\r\n# TERMINATE: Ask human only when the task terminates\r\n# This is useful for approval workflows\r\napproval_proxy = UserProxyAgent(\r\n    name=\"approval_proxy\",\r\n    human_input_mode=\"TERMINATE\",\r\n    code_execution_config={\r\n        \"work_dir\": \"workspace\",\r\n        \"use_docker\": False,\r\n    },\r\n)\r\n\r\n# ALWAYS: Ask human before every response\r\n# Useful for interactive demonstrations\r\ninteractive_proxy = UserProxyAgent(\r\n    name=\"interactive_proxy\",\r\n    human_input_mode=\"ALWAYS\",\r\n    code_execution_config={\r\n        \"work_dir\": \"workspace\",\r\n        \"use_docker\": False,\r\n    },\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When ", (0,jsx_runtime.jsx)(_components.code, {
        children: "human_input_mode=\"TERMINATE\""
      }), ", the conversation proceeds automatically until the agent sends \"TERMINATE\". Then AutoGen prints the final result and asks the human for approval or additional instructions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1265-putting-it-all-together-production-workflow",
      children: "12.6.5 Putting It All Together: Production Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nComplete production workflow combining:\r\n- Multi-agent group chat\r\n- Code execution\r\n- Tool registration\r\n- Reflection\r\n- Sequential processing\r\n\"\"\"\r\n\r\nimport autogen\r\nfrom autogen import (\r\n    AssistantAgent,\r\n    UserProxyAgent,\r\n    GroupChat,\r\n    GroupChatManager,\r\n)\r\nfrom typing import Annotated\r\n\r\n# LLM configuration\r\nllm_config = {\r\n    \"config_list\": [\r\n        {\r\n            \"model\": \"gpt-4o\",\r\n            \"api_key\": \"YOUR_API_KEY\",\r\n        }\r\n    ],\r\n    \"temperature\": 0.2,\r\n}\r\n\r\n# ---- Tool Definitions ----\r\n\r\ndef search_web(\r\n    query: Annotated[str, \"Search query string\"],\r\n) -> str:\r\n    \"\"\"Search the web for information.\"\"\"\r\n    # In production: use Tavily, SerpAPI, or Bing Search\r\n    return f\"Mock search results for: {query}\"\r\n\r\ndef save_to_file(\r\n    filename: Annotated[str, \"Output filename\"],\r\n    content: Annotated[str, \"Content to save\"],\r\n) -> str:\r\n    \"\"\"Save content to a file in the workspace.\"\"\"\r\n    import os\r\n    path = os.path.join(\"production_workspace\", filename)\r\n    os.makedirs(\"production_workspace\", exist_ok=True)\r\n    with open(path, \"w\", encoding=\"utf-8\") as f:\r\n        f.write(content)\r\n    return f\"Saved to {path}\"\r\n\r\n# ---- Agent Definitions ----\r\n\r\nplanner = AssistantAgent(\r\n    name=\"planner\",\r\n    system_message=\"You are a project planner. Break down complex tasks \"\r\n                   \"into clear, actionable steps. Always output a numbered plan.\",\r\n    llm_config=llm_config,\r\n)\r\n\r\nresearcher = AssistantAgent(\r\n    name=\"researcher\",\r\n    system_message=\"You are a researcher. Gather information using the search tool. \"\r\n                   \"Cite sources and verify facts.\",\r\n    llm_config=llm_config,\r\n)\r\n\r\ndeveloper = AssistantAgent(\r\n    name=\"developer\",\r\n    system_message=\"You are a Python developer. Write clean, tested code. \"\r\n                   \"Use the save_to_file tool to persist files.\",\r\n    llm_config=llm_config,\r\n)\r\n\r\nreviewer = AssistantAgent(\r\n    name=\"reviewer\",\r\n    system_message=\"You are a code reviewer. Review code for bugs, security issues, \"\r\n                   \"and best practices. Be thorough and constructive.\",\r\n    llm_config=llm_config,\r\n)\r\n\r\n# Register tools with agents\r\nfor agent in [researcher]:\r\n    agent.register_for_llm(name=\"search_web\", func=search_web)\r\n\r\nfor agent in [developer]:\r\n    agent.register_for_llm(name=\"save_to_file\", func=save_to_file)\r\n\r\n# ---- User Proxy ----\r\n\r\nuser_proxy = UserProxyAgent(\r\n    name=\"user_proxy\",\r\n    human_input_mode=\"NEVER\",\r\n    code_execution_config={\r\n        \"work_dir\": \"production_workspace\",\r\n        \"use_docker\": False,\r\n        \"timeout\": 120,\r\n    },\r\n)\r\n\r\n# Register execution for tools\r\nfor func in [search_web, save_to_file]:\r\n    user_proxy.register_for_execution(name=func.__name__, func=func)\r\n\r\n# ---- Group Chat ----\r\n\r\ngroup_chat = GroupChat(\r\n    agents=[planner, researcher, developer, reviewer],\r\n    messages=[],\r\n    max_round=30,\r\n    speaker_selection_method=\"auto\",\r\n)\r\n\r\nmanager = GroupChatManager(\r\n    groupchat=group_chat,\r\n    llm_config=llm_config,\r\n)\r\n\r\n# ---- Execute ----\r\n\r\nuser_proxy.initiate_chat(\r\n    manager,\r\n    message=\"Create a Python script that: \"\r\n            \"1. Fetches current exchange rates for USD, EUR, GBP, JPY \"\r\n            \"2. Converts $1000 USD to each currency \"\r\n            \"3. Saves the results to a formatted file \"\r\n            \"The code should be clean, handle errors, and include docstrings.\",\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-the-difference-between-assistantagent-and-userproxyagent-in-autogen",
      children: "Q1: What is the difference between AssistantAgent and UserProxyAgent in AutoGen?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " AssistantAgent is an AI agent that generates responses using an LLM — it writes text, code, and tool calls. UserProxyAgent is a proxy that can execute code, provide execution results back to the assistant, and simulate human input. The assistant thinks and generates; the user proxy acts and provides feedback. This separation lets the assistant focus on reasoning while the proxy handles execution and human interaction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-how-does-autogen-handle-code-execution-safety",
      children: "Q2: How does AutoGen handle code execution safety?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " AutoGen provides three layers of safety. First, code execution is opt-in — the UserProxyAgent must have ", (0,jsx_runtime.jsx)(_components.code, {
        children: "code_execution_config"
      }), " set. Second, Docker sandboxing (", (0,jsx_runtime.jsx)(_components.code, {
        children: "use_docker=True"
      }), ") runs code in isolated containers with no network access or persistent storage. Third, the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "work_dir"
      }), " parameter limits file operations to a specific directory. For production, combine Docker with custom execution timeouts, restricted system calls, and read-only file systems."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-explain-the-groupchat-speaker-selection-methods",
      children: "Q3: Explain the GroupChat speaker selection methods."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " AutoGen supports four methods. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto"
      }), " uses an LLM to pick the next speaker based on conversation context — best for flexible discussions. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "round_robin"
      }), " cycles through agents in order — good for structured turn-taking. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "random"
      }), " picks randomly — useful for brainstorming. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "manual"
      }), " asks the user to pick — used in interactive demos. You can also provide a custom function for domain-specific selection logic."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-how-do-you-register-a-tool-and-ensure-the-llm-calls-it-correctly",
      children: "Q4: How do you register a tool and ensure the LLM calls it correctly?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "register_for_llm()"
      }), " on the assistant to generate the JSON tool schema and inject it into the LLM's system message. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "register_for_execution()"
      }), " on the user proxy to map the tool name to the actual Python function. The tool function must have type-annotated parameters with descriptions using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Annotated"
      }), " for AutoGen to generate precise schemas. Test tool descriptions — they directly impact whether the LLM chooses to call the tool."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-is-the-reflection-pattern-and-when-should-you-use-it",
      children: "Q5: What is the reflection pattern and when should you use it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The reflection pattern has an agent critique its own output and generate an improved version. Use it when quality matters more than speed — code generation, report writing, critical analysis. The agent first produces a response, then reviews it against a reflection prompt (e.g., \"Find errors, omissions, or improvements\"), then generates an improved version. This adds one LLM call but typically improves output quality by 20-40% in complex tasks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-how-does-nested-chat-differ-from-group-chat",
      children: "Q6: How does nested chat differ from group chat?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Nested chat is a conversation-within-a-conversation. One agent delegates a subtask to a separate agent or group and waits for their result. Group chat has multiple agents conversing in a shared room with a manager controlling turns. Nested chat is hierarchical — the orchestrator controls the flow. Group chat is flat — agents collaborate freely. Use nested chat for complex workflows where subtasks need focused attention. Use group chat for collaborative problem-solving."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-what-is-the-role-of-max_consecutive_auto_reply-and-how-does-it-affect-termination",
      children: "Q7: What is the role of max_consecutive_auto_reply and how does it affect termination?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "max_consecutive_auto_reply"
      }), " limits how many automatic replies an agent can generate without human input. It prevents infinite loops. When the limit is reached, the agent pauses and either asks for human input (if ", (0,jsx_runtime.jsx)(_components.code, {
        children: "human_input_mode"
      }), " allows) or stops. Set it high enough for complex multi-step tasks (10-15) but low enough to catch runaway conversations (under 20 for most use cases)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-compare-autogens-approach-to-multi-agent-orchestration-with-crewai",
      children: "Q8: Compare AutoGen's approach to multi-agent orchestration with CrewAI."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " AutoGen uses conversational agents in a chat room with dynamic turn-taking. Agents speak freely and the GroupChatManager orchestrates the flow. CrewAI uses role-based agents with explicit task definitions and processes (sequential, hierarchical). AutoGen is better for open-ended discussions where the conversation direction is unknown. CrewAI is better for structured workflows with clear inputs and outputs. AutoGen's agent API is simpler but requires more manual flow control for complex workflows."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-how-do-you-handle-errors-when-a-tool-fails-during-a-conversation",
      children: "Q9: How do you handle errors when a tool fails during a conversation?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Tools should never raise exceptions — they should catch errors and return descriptive error messages as strings. The agent receives the error message as a response and can retry, ask clarifying questions, or fall back to an alternative approach. For critical failures, register a custom reply function that monitors tool results and triggers recovery workflows. Never let an exception propagate up from a tool — it breaks the conversation loop."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-what-patterns-do-you-use-for-production-autogen-deployments",
      children: "Q10: What patterns do you use for production AutoGen deployments?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " (1) Use Docker sandboxing for all code execution. (2) Set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "human_input_mode=\"NEVER\""
      }), " and handle approvals through a separate tool. (3) Register a custom reply function for logging every message to a database or log aggregator. (4) Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "max_round"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "max_consecutive_auto_reply"
      }), " to prevent runaway conversations. (5) Implement timeout wrappers around ", (0,jsx_runtime.jsx)(_components.code, {
        children: "initiate_chat"
      }), " to handle stuck conversations. (6) Store conversation history for debugging and auditing. (7) Use Azure OpenAI with managed identity for enterprise security."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AutoGen is Microsoft Research's multi-agent conversation framework. It enables teams of AI agents to communicate, collaborate, and solve complex tasks through structured conversations. The framework is built on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ConversableAgent"
      }), " with two main agent types: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AssistantAgent"
      }), " (LLM-powered) and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UserProxyAgent"
      }), " (execution proxy). Two-agent chat is the foundation — the assistant generates responses and code, the user proxy executes and provides feedback."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tool registration attaches Python functions to agents with automatic JSON schema generation. GroupChat extends conversations to multiple agents with configurable turn-taking (auto, round-robin, random, manual). Advanced patterns include nested chats (sub-conversations for subtasks), sequential chats (chained conversations), reflection (self-critique and improvement), and human input modes (NEVER, TERMINATE, ALWAYS)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AutoGen excels at open-ended conversational multi-agent systems. It pairs with CrewAI (structured workflows) and LangGraph (state machines) to form the three pillars of modern multi-agent orchestration. Understanding AutoGen is essential for AI Engineers building collaborative agent systems at companies like Microsoft, Morgan Stanley, and AI startups."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz-5-mcq",
      children: "Chapter Quiz (5 MCQ)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-which-agent-type-is-responsible-for-executing-code-in-an-autogen-conversation",
      children: "Q1: Which agent type is responsible for executing code in an AutoGen conversation?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) AssistantAgent\r\nb) ConversableAgent\r\nc) UserProxyAgent\r\nd) GroupChatManager"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: c) UserProxyAgent"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-what-happens-when-speaker_selection_method-is-set-to-auto",
      children: "Q2: What happens when speaker_selection_method is set to \"auto\"?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Agents speak in round-robin order\r\nb) The GroupChatManager (LLM) selects the next speaker\r\nc) The user must select the next speaker\r\nd) All agents respond simultaneously"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: b) The GroupChatManager (LLM) selects the next speaker"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-how-does-autogen-detect-that-a-conversation-should-terminate",
      children: "Q3: How does AutoGen detect that a conversation should terminate?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) A timer expires\r\nb) The LLM includes \"TERMINATE\" in its response\r\nc) All agents have spoken once\r\nd) The user proxy runs out of code to execute"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: b) The LLM includes \"TERMINATE\" in its response"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-is-the-purpose-of-register_for_execution-on-userproxyagent",
      children: "Q4: What is the purpose of register_for_execution on UserProxyAgent?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) To tell the LLM about available tools\r\nb) To map a tool name to the actual Python function that executes it\r\nc) To execute code directly\r\nd) To register a Docker container"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: b) To map a tool name to the actual Python function that executes it"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-in-a-nested-chat-pattern-what-happens-when-an-agent-receives-a-subtask",
      children: "Q5: In a nested chat pattern, what happens when an agent receives a subtask?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) It ignores the subtask\r\nb) It spawns a sub-conversation with other agents and waits for the result\r\nc) It forwards the subtask to the user\r\nd) It terminates the main conversation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: b) It spawns a sub-conversation with other agents and waits for the result"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises-5",
      children: "Exercises (5)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-build-a-two-agent-data-analyzer",
      children: "Exercise 1: Build a Two-Agent Data Analyzer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a two-agent AutoGen system with an AssistantAgent and a UserProxyAgent. The assistant should write Python code to load a CSV file (provide a sample), compute summary statistics (mean, median, std for numeric columns), and generate a markdown report. Execute code locally. Use termination detection to stop when the report is complete."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-multi-agent-research-team",
      children: "Exercise 2: Multi-Agent Research Team"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a GroupChat with three agents: a Researcher (gathers information), a FactChecker (verifies claims), and a Summarizer (creates a concise summary). Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "speaker_selection_method=\"round_robin\""
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "max_round=12"
      }), ". The user proxy should initiate the chat with a research question about a trending AI topic. Each agent must contribute exactly once per cycle."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-custom-tool--stock-price-fetcher",
      children: "Exercise 3: Custom Tool — Stock Price Fetcher"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Register a custom tool ", (0,jsx_runtime.jsx)(_components.code, {
        children: "get_stock_price(symbol: str) -> str"
      }), " that fetches stock prices from a mock database (or a real API like Alpha Vantage if you have a key). Create an assistant that uses this tool to answer queries about multiple stocks. The assistant should also write code to calculate portfolio value and percentage change. Handle API errors gracefully."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-reflective-code-generator",
      children: "Exercise 4: Reflective Code Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement a reflective code generator using the reflection pattern. The assistant should first write code for a given problem, then review it for bugs and inefficiencies, then produce an improved version. Use the UserProxyAgent to execute both versions and compare the output. Demonstrate the quality improvement with a non-trivial task (e.g., implementing a binary search tree or a data pipeline)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-production-workflow--report-generator",
      children: "Exercise 5: Production Workflow — Report Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a complete production workflow with: (1) a Planner agent that breaks a complex topic into research questions, (2) a Researcher agent with a web search tool that answers each question, (3) a Developer agent that creates data visualizations using matplotlib, (4) a Reviewer agent that checks code quality and factual accuracy. Use sequential processing where each agent's output feeds the next. Save all outputs to files. Run the full pipeline on a topic like \"Impact of AI on software engineering in 2025.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AutoGen's foundation is ConversableAgent"
        }), " — every agent inherits from this base class that implements the send/receive/reply conversation loop."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Two-agent chat is the simplest pattern"
        }), " — AssistantAgent (thinks) + UserProxyAgent (acts). Code execution and tool calling emerge from this pair."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GroupChat enables scalable collaboration"
        }), " — multiple agents converse in a shared room with LLM-driven or rule-based turn-taking."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tool registration requires two steps"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "register_for_llm()"
        }), " (schema generation) and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "register_for_execution()"
        }), " (function binding). Both are needed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code execution defaults to local but should use Docker in production"
        }), " — Docker sandboxing isolates execution and prevents security issues."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nested chats let agents delegate subtasks"
        }), " — a parent agent spawns a sub-conversation and uses the result, enabling hierarchical workflows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reflection improves output quality"
        }), " — having an agent critique and improve its own output adds ~20-40% quality gain for complex tasks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Production deployment requires guards"
        }), " — set max rounds, use Docker, implement logging, handle timeouts, and configure termination detection."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "Explain the core idea of AutoGen: Multi-Agent Conversations in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function in this chapter-Agent Conversations."
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
            children: "Describe a production bug caused by misunderstanding this technique-Agent Conversations. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique-Agent Conversations from 10 users to 10 million?"
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
            children: "Compare AutoGen: Multi-Agent Conversations with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component built on this-Agent Conversations."
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
            children: "How does AutoGen: Multi-Agent Conversations behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of this technique-Agent Conversations run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of this technique-Agent Conversations that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name AutoGen: Multi-Agent Conversations explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using AutoGen: Multi-Agent Conversations\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies AutoGen: Multi-Agent Conversations to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside AutoGen: Multi-Agent Conversations (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of AutoGen: Multi-Agent Conversations and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a AutoGen: Multi-Agent Conversations-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic AutoGen: Multi-Agent Conversations interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply AutoGen: Multi-Agent Conversations in production today?"
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
        }), " AutoGen: Multi-Agent Conversations builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for AutoGen: Multi-Agent Conversations before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for AutoGen: Multi-Agent Conversations is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for AutoGen: Multi-Agent Conversations in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the AutoGen: Multi-Agent Conversations chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers AutoGen: Multi-Agent Conversations is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 12 Autogen Agentic Chat is ___. — Answer: O(k) per tool call where k=tool latency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 12 Autogen Agentic Chat is ___. — Answer: infinite loops, tool failures, context overflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug AutoGen: Multi-Agent Conversations issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to AutoGen: Multi-Agent Conversations in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving AutoGen: Multi-Agent Conversations that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of this technique-Agent Conversations is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain AutoGen: Multi-Agent Conversations in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for AutoGen: Multi-Agent Conversations and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of this technique-Agent Conversations on an empty input?"
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
            children: "Complete Medium exercises, explain AutoGen: Multi-Agent Conversations to someone else"
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
        children: "Always write a one-line example of AutoGen: Multi-Agent Conversations from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered AutoGen: Multi-Agent Conversations when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining AutoGen: Multi-Agent Conversations twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own AutoGen: Multi-Agent Conversations snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of AutoGen: Multi-Agent Conversations listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link AutoGen: Multi-Agent Conversations to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of AutoGen: Multi-Agent Conversations by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain AutoGen: Multi-Agent Conversations to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
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
        children: "'Building LLM Powered Applications' by Valentina Alto (Packt) Multi-Agent Conversations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 22 — builds the foundation for 12 Autogen Agentic Chat"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 12 Autogen Agentic Chat with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 12 Autogen Agentic Chat fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 12 Autogen Agentic Chat"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 12 Autogen Agentic Chat"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 12 Autogen Agentic Chat?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 12 Autogen Agentic Chat?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 12 Autogen Agentic Chat asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 12 Autogen Agentic Chat?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AutoGen: Multi-Agent Conversations is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with AutoGen: Multi-Agent Conversations."
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
        children: "AutoGen: Multi-Agent Conversations emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for AutoGen: Multi-Agent Conversations today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about AutoGen: Multi-Agent Conversations — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around AutoGen: Multi-Agent Conversations changes quickly; focus on fundamentals that remain stable."
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
            children: "12 Autogen Agentic Chat is like a GPS navigation system"
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
          }), " — this chapter contributes the AutoGen: Multi-Agent Conversations skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-12autogenagenticchat-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of AutoGen: Multi-Agent Conversations in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "An AI agent is an autonomous system that uses an LLM as its reasoning engine to perceive inputs, decide actions, call tools, observe results, and iterate until a task is complete."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-12autogenagenticchat-flash2",
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
      "data-qid": "22advancedaiagents-12autogenagenticchat-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard AutoGen: Multi-Agent Conversations approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Agent complexity: O(k * t) where k=steps taken, t=average tool latency. Each LLM call is O(n^2) attention over context. Total cost grows linearly with steps."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-12autogenagenticchat-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is AutoGen: Multi-Agent Conversations NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Agents are NOT the right choice when: (1) a single LLM call suffices, (2) deterministic pipelines are required, (3) latency < 500ms is needed, (4) the task has no external tool requirements."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-12autogenagenticchat-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is AutoGen: Multi-Agent Conversations applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for AutoGen: Multi-Agent Conversations (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing AutoGen: Multi-Agent Conversations (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for AutoGen: Multi-Agent Conversations-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running AutoGen: Multi-Agent Conversations in production at scale"
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
        }), " — Claude's native function calling interface Multi-Agent Conversations"]
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
        }), ": Add structured logging at each stage of the 12 Autogen Agentic Chat pipeline to identify exactly where the failure occurs."]
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
        children: "Explain AutoGen: Multi-Agent Conversations in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of AutoGen: Multi-Agent Conversations."
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
        children: "Tell me about a time you debugged a AutoGen: Multi-Agent Conversations problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where AutoGen: Multi-Agent Conversations is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_12_autogen_agentic_chat(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 12 Autogen Agentic Chat.\r\n\r\n    Key concepts: tools, memory, planning, execution, observation\r\n    Complexity: O(k) per tool call where k=tool latency\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 12 Autogen Agentic Chat here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain AutoGen: Multi-Agent Conversations without notes"
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
        href: "/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/13-openai-agents-sdk",
        children: "OpenAI Agents SDK"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AutoGen: Multi-Agent Conversations, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of AutoGen: Multi-Agent Conversations depends on input size and distribution — always benchmark for your own data."
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