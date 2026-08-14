"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[41790],{

/***/ 70851
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_22_advanced_ai_agents_14_google_adk_md_de4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-22-advanced-ai-agents-14-google-adk-md-de4.json
const site_docs_courses_ai_engineering_placement_22_advanced_ai_agents_14_google_adk_md_de4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/advanced-ai-agents/14-google-adk","title":"Google Agent Development Kit (ADK)","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/22-advanced-ai-agents/14-google-adk.md","sourceDirName":"courses/ai-engineering-placement/22-advanced-ai-agents","slug":"/ai-engineering-placement/22-advanced-ai-agents/14-google-adk","permalink":"/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/14-google-adk","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":269,"frontMatter":{"id":"14-google-adk","slug":"/ai-engineering-placement/22-advanced-ai-agents/14-google-adk","title":"Google Agent Development Kit (ADK)","sidebar_label":"Google Agent Development Kit (ADK)","sidebar_position":269},"sidebar":"placementSidebar","previous":{"title":"OpenAI Agents SDK","permalink":"/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/13-openai-agents-sdk"},"next":{"title":"Agent-to-Agent (A2A) Protocol","permalink":"/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/15-a2a-protocol"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/22-advanced-ai-agents/14-google-adk.md


const frontMatter = {
	id: '14-google-adk',
	slug: '/ai-engineering-placement/22-advanced-ai-agents/14-google-adk',
	title: 'Google Agent Development Kit (ADK)',
	sidebar_label: 'Google Agent Development Kit (ADK)',
	sidebar_position: 269
};
const contentTitle = 'Google Agent Development Kit (ADK)';

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
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "14.1 ADK Overview &amp; Architecture",
  "id": "141-adk-overview--architecture",
  "level": 2
}, {
  "value": "14.1.1 Core Architectural Concepts",
  "id": "1411-core-architectural-concepts",
  "level": 3
}, {
  "value": "14.1.2 ADK Runtime and Execution Model",
  "id": "1412-adk-runtime-and-execution-model",
  "level": 3
}, {
  "value": "14.1.3 ADK 2.0 New Features",
  "id": "1413-adk-20-new-features",
  "level": 3
}, {
  "value": "14.2 Agent Types",
  "id": "142-agent-types",
  "level": 2
}, {
  "value": "14.2.1 LlmAgent — Conversational Agent",
  "id": "1421-llmagent--conversational-agent",
  "level": 3
}, {
  "value": "14.2.2 Agent — Simplified Base Agent",
  "id": "1422-agent--simplified-base-agent",
  "level": 3
}, {
  "value": "14.2.3 Function Agent — Tool-Driven Execution",
  "id": "1423-function-agent--tool-driven-execution",
  "level": 3
}, {
  "value": "14.2.4 Retrieval-Augmented Agent",
  "id": "1424-retrieval-augmented-agent",
  "level": 3
}, {
  "value": "14.3 Tool Integration",
  "id": "143-tool-integration",
  "level": 2
}, {
  "value": "14.3.1 FunctionTool — Custom API Integration",
  "id": "1431-functiontool--custom-api-integration",
  "level": 3
}, {
  "value": "14.3.2 Google Workspace MCP Integration",
  "id": "1432-google-workspace-mcp-integration",
  "level": 3
}, {
  "value": "14.3.3 Google Search Grounding",
  "id": "1433-google-search-grounding",
  "level": 3
}, {
  "value": "14.3.4 Application Integration Toolset",
  "id": "1434-application-integration-toolset",
  "level": 3
}, {
  "value": "14.4 Multi-Agent Architecture",
  "id": "144-multi-agent-architecture",
  "level": 2
}, {
  "value": "14.4.1 Workflow-Based Multi-Agent Orchestration",
  "id": "1441-workflow-based-multi-agent-orchestration",
  "level": 3
}, {
  "value": "14.4.2 Task API — Agent-to-Agent Delegation",
  "id": "1442-task-api--agent-to-agent-delegation",
  "level": 3
}, {
  "value": "14.4.3 State Management Across Agents",
  "id": "1443-state-management-across-agents",
  "level": 3
}, {
  "value": "14.4.4 Advanced Routing Patterns",
  "id": "1444-advanced-routing-patterns",
  "level": 3
}, {
  "value": "14.4.5 Fan-Out / Fan-In Pattern",
  "id": "1445-fan-out--fan-in-pattern",
  "level": 3
}, {
  "value": "14.5 Deployment &amp; Monitoring",
  "id": "145-deployment--monitoring",
  "level": 2
}, {
  "value": "14.5.1 Vertex AI Agent Engine Deployment",
  "id": "1451-vertex-ai-agent-engine-deployment",
  "level": 3
}, {
  "value": "14.5.2 Cloud Run Deployment",
  "id": "1452-cloud-run-deployment",
  "level": 3
}, {
  "value": "14.5.3 Local Development with ADK Web",
  "id": "1453-local-development-with-adk-web",
  "level": 3
}, {
  "value": "14.5.4 Production Monitoring with Cloud Trace",
  "id": "1454-production-monitoring-with-cloud-trace",
  "level": 3
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Q1: What is Google ADK and how does it differ from other agent frameworks?",
  "id": "q1-what-is-google-adk-and-how-does-it-differ-from-other-agent-frameworks",
  "level": 3
}, {
  "value": "Q2: Explain the three core abstractions in ADK 2.0.",
  "id": "q2-explain-the-three-core-abstractions-in-adk-20",
  "level": 3
}, {
  "value": "Q3: How does ADK integrate with Google Workspace?",
  "id": "q3-how-does-adk-integrate-with-google-workspace",
  "level": 3
}, {
  "value": "Q4: What is the difference between LlmAgent and Agent in ADK?",
  "id": "q4-what-is-the-difference-between-llmagent-and-agent-in-adk",
  "level": 3
}, {
  "value": "Q5: How does ADK 2.0&#39;s Workflow Runtime work?",
  "id": "q5-how-does-adk-20s-workflow-runtime-work",
  "level": 3
}, {
  "value": "Q6: What monitoring capabilities does ADK provide for production agents?",
  "id": "q6-what-monitoring-capabilities-does-adk-provide-for-production-agents",
  "level": 3
}, {
  "value": "Q7: Explain how FunctionTool works in ADK. How does it handle schema generation?",
  "id": "q7-explain-how-functiontool-works-in-adk-how-does-it-handle-schema-generation",
  "level": 3
}, {
  "value": "Q8: How does ADK handle state management in multi-agent systems?",
  "id": "q8-how-does-adk-handle-state-management-in-multi-agent-systems",
  "level": 3
}, {
  "value": "Q9: What deployment options are available for ADK agents?",
  "id": "q9-what-deployment-options-are-available-for-adk-agents",
  "level": 3
}, {
  "value": "Q10: Compare ADK&#39;s multi-agent patterns: Workflow, Task API, and A2A protocol.",
  "id": "q10-compare-adks-multi-agent-patterns-workflow-task-api-and-a2a-protocol",
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
  "value": "Exercises (5)",
  "id": "exercises-5",
  "level": 2
}, {
  "value": "Exercise 1: Build a Gmail Assistant Agent",
  "id": "exercise-1-build-a-gmail-assistant-agent",
  "level": 3
}, {
  "value": "Exercise 2: Implement a Multi-Agent Research Pipeline",
  "id": "exercise-2-implement-a-multi-agent-research-pipeline",
  "level": 3
}, {
  "value": "Exercise 3: Create a Custom FunctionTool Integration",
  "id": "exercise-3-create-a-custom-functiontool-integration",
  "level": 3
}, {
  "value": "Exercise 4: Design a Stateful Customer Support Workflow",
  "id": "exercise-4-design-a-stateful-customer-support-workflow",
  "level": 3
}, {
  "value": "Exercise 5: Deploy an ADK Agent to Cloud Run",
  "id": "exercise-5-deploy-an-adk-agent-to-cloud-run",
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
        id: "google-agent-development-kit-adk",
        children: "Google Agent Development Kit (ADK)"
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
            children: "Understand Google ADK 2.0 architecture — Agent, Workflow, and Task API fundamentals"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build and configure different agent types: LlmAgent, function agents, retrieval agents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrate tools: Google Workspace MCP servers, custom FunctionTool, Google Search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design multi-agent workflows with graph-based orchestration, state management, and routing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy ADK agents to Vertex AI Agent Engine, Cloud Run, and monitor production traces"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Google Agent Development Kit (ADK) is an open-source, code-first Python framework for building, evaluating, and deploying sophisticated AI agents. ADK 2.0 (GA as of May 2026) introduces a graph-based Workflow Runtime, the Task API for structured agent-to-agent delegation, and native multi-agent orchestration. ADK is the recommended framework for building agents powered by Gemini models with deep integration into Google Workspace, Vertex AI, and Google Cloud services."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covers the full ADK stack — from defining a simple agent to deploying production multi-agent systems with Google Workspace tools, custom APIs, and monitoring."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python 3.10+ and working virtual environment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Google Cloud project with Vertex AI API enabled"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic understanding of Gemini models and API usage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with MCP (Model Context Protocol) from previous chapters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Completed Module 13 (AI Agents & LangGraph) or equivalent knowledge"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "ADK class that defines an AI's instructions, tools, and model configuration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LlmAgent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADK agent type that uses an LLM to reason, plan, and execute tasks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Workflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph-based execution engine composing agents/nodes with routing and state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Task API"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured delegation mechanism for agent-to-agent collaboration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FunctionTool"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADK wrapper for Python functions exposed as agent tools"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "McpToolset"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Group of MCP-based tools connected via StreamableHTTP transport"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "InvocationContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context object for state management, artifact storage, and tool access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Agent Engine"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google Cloud managed service for deploying ADK agents at scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "A2A"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent-to-Agent protocol for remote agent discovery and communication"
          })]
        })]
      })]
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
            children: "14.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADK Overview & Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent, Workflow, Task API — framework fundamentals"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent Types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LlmAgent, function agents, retrieval-augmented agents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool Integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google Workspace MCP, custom FunctionTool, Google Search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Agent Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph workflows, task delegation, state management, routing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment & Monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vertex AI Agent Engine, Cloud Run, Cloud Trace"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph ADK[ADK 2.0 Architecture]\n        A[Agent] --> LLM[Gemini Model]\n        A --> T[Tools]\n        W[Workflow] --> N1[Node: Agent 1]\n        W --> N2[Node: Agent 2]\n        W --> R[Routing Logic]\n        TA[Task API] --> D[Delegation]\n        TA --> HIL[Human-in-the-Loop]\n    end\n    subgraph Tools[Tool Ecosystem]\n        FT[FunctionTool] --> CUSTOM[Custom Python Code]\n        MCP[McpToolset] --> GWS[Google Workspace]\n        MCP --> WEB[Web Search]\n        AIT[AppIntegrationToolset] --> GCP[Google Cloud APIs]\n    end\n    subgraph Deploy[Deployment Targets]\n        VX[Vertex AI Agent Engine] --> MON[Cloud Trace / Logging]\n        CR[Cloud Run] --> MON\n        ADKW[ADK Web] --> LOCAL[Local Dev UI]\n    end\n    ADK --> Tools\n    ADK --> Deploy\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "141-adk-overview--architecture",
      children: "14.1 ADK Overview & Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Google ADK 2.0 is built around three core abstractions: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent"
      }), " (single AI entity), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow"
      }), " (graph-based orchestration), and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task API"
      }), " (structured delegation). ADK is model-agnostic but has first-class support for Gemini models. It supports Python 3.10+ and is available as the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "google-adk"
      }), " package."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1411-core-architectural-concepts",
      children: "14.1.1 Core Architectural Concepts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ADK 2.0 transitions from a hierarchical agent executor (1.x) to a graph-based execution engine. Every agent is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "node"
      }), " in a workflow graph. This enables deterministic execution flows with routing, loops, retries, and human-in-the-loop."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# ADK 2.0 core architecture: Agent, Workflow, Task\nfrom google.adk import Agent, Workflow\nfrom google.adk.tools import FunctionTool\n\n# A single agent is the simplest ADK application\ngreeting_agent = Agent(\n    name=\"greeting_agent\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"You are a helpful assistant. Greet the user warmly and answer questions.\",\n)\n\n# A workflow composes multiple agents/nodes into a graph\nresearch_agent = Agent(\n    name=\"research_agent\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"Research the given topic thoroughly. Provide key facts and insights.\",\n)\n\nsummarize_agent = Agent(\n    name=\"summarize_agent\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"Summarize the research findings into 3 bullet points.\",\n)\n\n# Workflow with sequential edges\nresearch_workflow = Workflow(\n    name=\"research_pipeline\",\n    edges=[\n        (\"START\", research_agent),\n        (research_agent, summarize_agent),\n        (summarize_agent, \"END\"),\n    ],\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1412-adk-runtime-and-execution-model",
      children: "14.1.2 ADK Runtime and Execution Model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ADK runtime manages the complete agent lifecycle: session creation, LLM calls, tool execution, state persistence, and result delivery. Each agent run has a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "session"
      }), " that stores conversation history, artifacts, and state variables."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from google.adk import Agent, Runner\n\n# Running an agent synchronously\nagent = Agent(\n    name=\"assistant\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"You are a helpful assistant.\",\n)\n\n# Runner.execute returns an Event sequence\nevents = Runner.execute(\n    agent=agent,\n    user_input=\"What is the capital of France?\",\n    session_id=\"session-001\",\n)\n\nfor event in events:\n    print(f\"[{event.type}] {event.content}\")\n    # event.types: 'TURN_START', 'LLM_RESPONSE', 'TOOL_CALL',\n    #              'TOOL_RESULT', 'TURN_END', 'AGENT_END'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1413-adk-20-new-features",
      children: "14.1.3 ADK 2.0 New Features"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Workflow Runtime"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph-based execution with routing, fan-out/fan-in, loops, retry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Task API"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured agent-to-agent delegation with multi-turn tasks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dynamic Nodes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code-based logic for loops and complex branching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Human-in-the-Loop"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pause workflow execution for human approval"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Nested Workflows"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Workflows as nodes within other workflows"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# ADK 2.0 Workflow with routing and retry\nfrom google.adk import Workflow, Agent\n\nclassify_agent = Agent(\n    name=\"classifier\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"Classify the query as 'tech', 'billing', or 'general'. Return only the category.\",\n)\n\ntech_agent = Agent(\n    name=\"tech_support\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"Provide detailed technical support for the issue.\",\n)\n\nbilling_agent = Agent(\n    name=\"billing_support\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"Handle billing and account inquiries.\",\n)\n\n# Workflow with conditional routing\nsupport_workflow = Workflow(\n    name=\"customer_support\",\n    edges=[\n        (\"START\", classify_agent),\n        (classify_agent, tech_agent, {\"condition\": \"result == 'tech'\"}),\n        (classify_agent, billing_agent, {\"condition\": \"result == 'billing'\"}),\n        (classify_agent, \"END\", {\"condition\": \"result == 'general'\"}),\n        (tech_agent, \"END\"),\n        (billing_agent, \"END\"),\n    ],\n    max_retries=2,  # Retry failed nodes up to 2 times\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "142-agent-types",
      children: "14.2 Agent Types"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ADK provides several agent types for different use cases. The primary types are ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LlmAgent"
      }), " (conversational reasoning), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Agent"
      }), " (simplified base), function-based agents, and retrieval-augmented agents."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1421-llmagent--conversational-agent",
      children: "14.2.1 LlmAgent — Conversational Agent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "LlmAgent"
      }), " is the full-featured agent that uses an LLM to reason, plan tool calls, and generate responses. It supports instructions, tools, memory, and multi-turn conversations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from google.adk import LlmAgent\nfrom google.adk.tools import FunctionTool\nimport json\n\n# Define a tool as a standalone function\ndef get_weather(city: str, date: str = \"today\") -> str:\n    \"\"\"Get the weather forecast for a city.\n\n    Args:\n        city: The name of the city\n        date: The date for the forecast (default: today)\n\n    Returns:\n        A JSON string with weather information\n    \"\"\"\n    # Mock implementation — in production, call a weather API\n    weather_data = {\n        \"city\": city,\n        \"date\": date,\n        \"temperature\": 22,\n        \"conditions\": \"sunny\",\n        \"humidity\": \"45%\",\n    }\n    return json.dumps(weather_data)\n\n# Configure the LlmAgent with tools\nweather_agent = LlmAgent(\n    name=\"weather_bot\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"\"\"You are a helpful weather assistant.\n    Use the get_weather tool to provide accurate forecasts.\n    Always specify the city and date when calling the tool.\n    If the user asks about a city without a date, assume today.\"\"\",\n    tools=[FunctionTool(func=get_weather)],\n    temperature=0.3,  # Lower temperature for factual responses\n    max_turns=5,      # Max conversation turns before requiring user input\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1422-agent--simplified-base-agent",
      children: "14.2.2 Agent — Simplified Base Agent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Agent"
      }), " is a lighter base class for agents that don't need the full LlmAgent feature set. It is the base for all agent types in ADK."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from google.adk import Agent\n\n# Simple Agent with minimal configuration\nsimple_agent = Agent(\n    name=\"simple_bot\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"Answer questions concisely. Use no more than two sentences.\",\n)\n\n# Agent with system instruction from a file\nwith open(\"system_prompt.txt\", \"r\") as f:\n    system_prompt = f.read()\n\nfile_aware_agent = Agent(\n    name=\"file_bot\",\n    model=\"gemini-2.5-flash\",\n    instruction=system_prompt,\n)\n\n# Agent with custom output format\nstructured_agent = Agent(\n    name=\"json_bot\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"\"\"Always respond in JSON format with keys: 'answer', 'confidence', 'sources'.\n    Example: {\"answer\": \"Paris\", \"confidence\": 0.95, \"sources\": [\"geography-db\"]}\"\"\",\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1423-function-agent--tool-driven-execution",
      children: "14.2.3 Function Agent — Tool-Driven Execution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A function agent is an agent that primarily executes code-based logic. It can use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FunctionTool"
      }), " to wrap Python functions and expose them to the LLM for reasoning and execution."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from google.adk import Agent\nfrom google.adk.tools import FunctionTool\nfrom typing import List, Dict\nimport json\n\n# Database query tool\ndef query_database(sql: str) -> str:\n    \"\"\"Execute a SQL query against the products database.\n\n    Args:\n        sql: The SQL query string to execute\n\n    Returns:\n        JSON string with query results\n    \"\"\"\n    # Mock database implementation\n    mock_db = {\n        \"products\": [\n            {\"id\": 1, \"name\": \"Laptop\", \"price\": 1200, \"stock\": 15},\n            {\"id\": 2, \"name\": \"Mouse\", \"price\": 25, \"stock\": 100},\n            {\"id\": 3, \"name\": \"Keyboard\", \"price\": 75, \"stock\": 42},\n        ]\n    }\n\n    # Simple SQL parser (mock)\n    if \"SELECT\" in sql.upper():\n        return json.dumps(mock_db.get(\"products\", []))\n    return json.dumps({\"error\": \"Only SELECT queries supported in mock\"})\n\n# Email formatting tool\ndef format_email(recipient: str, subject: str, body: str) -> str:\n    \"\"\"Format and send an email notification.\n\n    Args:\n        recipient: Email address of the recipient\n        subject: Email subject line\n        body: Email body content\n\n    Returns:\n        Confirmation message\n    \"\"\"\n    # Mock email sending\n    return json.dumps({\n        \"status\": \"sent\",\n        \"recipient\": recipient,\n        \"subject\": subject,\n        \"timestamp\": \"2026-07-28T10:00:00Z\",\n    })\n\n# Function agent combining multiple tools\norder_agent = Agent(\n    name=\"order_processor\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"\"\"You are an order processing agent.\n    Use query_database to check inventory.\n    Use format_email to send order confirmations.\n    Always verify stock before confirming an order.\"\"\",\n    tools=[\n        FunctionTool(func=query_database),\n        FunctionTool(func=format_email),\n    ],\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1424-retrieval-augmented-agent",
      children: "14.2.4 Retrieval-Augmented Agent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ADK supports retrieval augmentation through tool integration. Agents can query knowledge bases, vector stores, or search APIs to ground their responses."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from google.adk import LlmAgent\nfrom google.adk.tools import FunctionTool\nfrom typing import List\nimport json\n\n# Mock vector database retrieval\ndef knowledge_retrieval(query: str, top_k: int = 3) -> str:\n    \"\"\"Retrieve relevant documents from the knowledge base.\n\n    Args:\n        query: The search query\n        top_k: Number of documents to retrieve (default: 3)\n\n    Returns:\n        JSON string with retrieved documents\n    \"\"\"\n    # Mock knowledge base\n    documents = {\n        \"refund_policy\": \"Refunds are processed within 5-7 business days. \"\n                         \"Items must be returned in original condition.\",\n        \"shipping_info\": \"Standard shipping takes 3-5 business days. \"\n                        \"Express shipping takes 1-2 business days.\",\n        \"warranty\": \"All products come with a 1-year manufacturer warranty. \"\n                   \"Extended warranty available for purchase.\",\n    }\n    results = []\n    for doc_id, content in documents.items():\n        if any(term in query.lower() for term in doc_id.split(\"_\")):\n            results.append({\"id\": doc_id, \"content\": content, \"score\": 0.95})\n\n    # Return top_k results\n    return json.dumps(results[:top_k])\n\n# RAG agent that retrieves knowledge before answering\nrag_agent = LlmAgent(\n    name=\"knowledge_agent\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"\"\"You are a customer support agent with access to a knowledge base.\n    ALWAYS call knowledge_retrieval to find relevant information before answering.\n    If the knowledge base doesn't have the answer, tell the user you'll escalate.\n    Cite the document IDs you used to answer.\"\"\",\n    tools=[FunctionTool(func=knowledge_retrieval)],\n    temperature=0.2,  # Low temperature for factual answers\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "143-tool-integration",
      children: "14.3 Tool Integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ADK provides a rich tool ecosystem. Tools are categorized as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FunctionTool"
      }), " (custom Python code), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "McpToolset"
      }), " (MCP-connected services), and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ApplicationIntegrationToolset"
      }), " (pre-built Google Cloud connectors)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1431-functiontool--custom-api-integration",
      children: "14.3.1 FunctionTool — Custom API Integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "FunctionTool"
      }), " wraps any Python function as a tool. ADK automatically generates JSON schemas from function signatures and docstrings."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from google.adk.tools import FunctionTool\nimport requests\nimport json\nfrom typing import Optional\n\ndef get_stock_price(ticker: str, exchange: str = \"NASDAQ\") -> str:\n    \"\"\"Get the current stock price for a given ticker symbol.\n\n    Args:\n        ticker: The stock ticker symbol (e.g., AAPL, GOOGL)\n        exchange: The stock exchange (default: NASDAQ)\n\n    Returns:\n        JSON string with current stock price and metadata\n    \"\"\"\n    # Mock implementation — in production, call a stock API\n    mock_prices = {\n        \"AAPL\": 198.50,\n        \"GOOGL\": 175.30,\n        \"MSFT\": 420.75,\n        \"AMZN\": 185.20,\n        \"TSLA\": 245.60,\n    }\n    price = mock_prices.get(ticker.upper(), None)\n    if price is None:\n        return json.dumps({\"error\": f\"Ticker {ticker} not found\"})\n    return json.dumps({\n        \"ticker\": ticker.upper(),\n        \"exchange\": exchange,\n        \"price\": price,\n        \"currency\": \"USD\",\n        \"timestamp\": \"2026-07-28T14:30:00Z\",\n    })\n\ndef send_slack_notification(channel: str, message: str, priority: str = \"normal\") -> str:\n    \"\"\"Send a notification to a Slack channel.\n\n    Args:\n        channel: The Slack channel name (e.g., #alerts, #general)\n        message: The message content to send\n        priority: Message priority: 'low', 'normal', or 'high' (default: normal)\n\n    Returns:\n        JSON string with notification status\n    \"\"\"\n    # Mock implementation\n    return json.dumps({\n        \"status\": \"sent\",\n        \"channel\": channel,\n        \"message_preview\": message[:50] + \"...\" if len(message) > 50 else message,\n        \"priority\": priority,\n        \"timestamp\": \"2026-07-28T14:30:00Z\",\n    })\n\n# Register tools with an agent\nnotification_agent = Agent(\n    name=\"alert_agent\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"\"\"You are a financial alert agent.\n    Use get_stock_price to check stock values.\n    Use send_slack_notification to send alerts when conditions are met.\n    Only send notifications when the user explicitly asks.\"\"\",\n    tools=[\n        FunctionTool(func=get_stock_price),\n        FunctionTool(func=send_slack_notification),\n    ],\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1432-google-workspace-mcp-integration",
      children: "14.3.2 Google Workspace MCP Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ADK integrates with Google Workspace (Gmail, Calendar, Drive, Chat) through dedicated MCP servers. This is the recommended production path for workspace data access."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from google.adk import LlmAgent\nfrom google.adk.tools import McpToolset\nfrom google.adk.tools.mcp import StreamableHTTPConnectionParams\nfrom datetime import datetime, timezone\n\n# Current date for relative date calculations\ncurrent_date = datetime.now(timezone.utc).strftime(\"%Y-%m-%d\")\n\n# Define a dynamic auth header provider\n# In production, this uses OAuth2 token injection from Google Cloud\ndef auth_header_producer():\n    \"\"\"Returns the current OAuth2 access token for Google Workspace.\"\"\"\n    # In production: fetch from ADC or environment\n    # For local dev: use gcloud auth print-access-token\n    return {\"Authorization\": \"Bearer <placeholder>\"}\n\n# Configure Google Workspace MCP toolsets\ncalendar_mcp = McpToolset(\n    connection_params=StreamableHTTPConnectionParams(\n        url=\"https://calendarmcp.googleapis.com/mcp/v1\",\n    ),\n    header_provider=auth_header_producer,\n)\n\ngmail_mcp = McpToolset(\n    connection_params=StreamableHTTPConnectionParams(\n        url=\"https://gmailmcp.googleapis.com/mcp/v1\",\n    ),\n    header_provider=auth_header_producer,\n)\n\ndrive_mcp = McpToolset(\n    connection_params=StreamableHTTPConnectionParams(\n        url=\"https://drivemcp.googleapis.com/mcp/v1\",\n    ),\n    header_provider=auth_header_producer,\n)\n\nchat_mcp = McpToolset(\n    connection_params=StreamableHTTPConnectionParams(\n        url=\"https://chatmcp.googleapis.com/mcp/v1\",\n    ),\n    header_provider=auth_header_producer,\n)\n\npeople_mcp = McpToolset(\n    connection_params=StreamableHTTPConnectionParams(\n        url=\"https://people.googleapis.com/mcp/v1\",\n    ),\n    header_provider=auth_header_producer,\n)\n\nuniversal_search_mcp = McpToolset(\n    connection_params=StreamableHTTPConnectionParams(\n        url=\"https://workspacemcp.googleapis.com/mcp/v1\",\n    ),\n    header_provider=auth_header_producer,\n)\n\n# Workspace agent with all MCP tools\nworkspace_agent = LlmAgent(\n    name=\"workspace_assistant\",\n    model=\"gemini-2.5-flash\",\n    instruction=f\"\"\"You are an enterprise assistant grounded in Google Workspace data.\n    Today's date is {current_date}. Calculate relative dates using this reference.\n    Use Calendar MCP to check schedules and create events.\n    Use Gmail MCP to read and send emails.\n    Use Drive MCP to find and manage files.\n    Use Chat MCP for workspace messaging.\n    Use People MCP for contact information.\n    Use Universal Search to search across all Workspace products.\"\"\",\n    tools=[\n        calendar_mcp,\n        gmail_mcp,\n        drive_mcp,\n        chat_mcp,\n        people_mcp,\n        universal_search_mcp,\n    ],\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1433-google-search-grounding",
      children: "14.3.3 Google Search Grounding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ADK supports Google Search grounding to provide real-time information and citations."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from google.adk import LlmAgent\nfrom google.adk.tools.google_search_agent_tool import GoogleSearchAgentTool\n\n# Google Search tool for real-time information\nsearch_tool = GoogleSearchAgentTool(\n    search_engine_id=\"your_search_engine_id\",  # From Google Cloud Console\n    api_key=\"your_api_key\",                    # Or use environment variable\n    num_results=5,\n    include_citations=True,\n)\n\n# Research agent grounded in web search\nresearch_agent = LlmAgent(\n    name=\"research_assistant\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"\"\"You are a research assistant with web access.\n    Use Google Search to find the latest information on any topic.\n    Always cite your sources.\n    Synthesize information from multiple search results.\n    If the user asks about recent events, always search before answering.\"\"\",\n    tools=[search_tool],\n    temperature=0.4,  # Balanced for research synthesis\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1434-application-integration-toolset",
      children: "14.3.4 Application Integration Toolset"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For enterprise systems, ADK provides ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ApplicationIntegrationToolset"
      }), " that connects to Google Cloud's Integration Connectors."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from google.adk.tools.application_integration_tool import ApplicationIntegrationToolset\n\n# Configure pre-built connectors\nintegration_toolset = ApplicationIntegrationToolset(\n    connectors={\n        \"salesforce\": \"projects/my-project/locations/us-central1/connectors/salesforce\",\n        \"servicenow\": \"projects/my-project/locations/us-central1/connectors/servicenow\",\n        \"bigquery\": \"projects/my-project/locations/us-central1/connectors/bigquery\",\n    },\n    auth_config={\n        \"type\": \"oauth2\",\n        \"scopes\": [\n            \"https://www.googleapis.com/auth/cloud-platform\",\n        ],\n    },\n)\n\n# Enterprise agent with SaaS integrations\nenterprise_agent = LlmAgent(\n    name=\"enterprise_bot\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"\"\"You are an enterprise integration agent.\n    Use Salesforce connector for customer data.\n    Use ServiceNow connector for ticket management.\n    Use BigQuery connector for analytics queries.\n    Always verify data before providing answers.\"\"\",\n    tools=[integration_toolset],\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "144-multi-agent-architecture",
      children: "14.4 Multi-Agent Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ADK 2.0 provides three mechanisms for multi-agent systems: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow Runtime"
      }), " (graph-based), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task API"
      }), " (delegation-based), and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A2A Protocol"
      }), " (remote agent discovery)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1441-workflow-based-multi-agent-orchestration",
      children: "14.4.1 Workflow-Based Multi-Agent Orchestration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Workflow Runtime treats agents as nodes in a directed graph. This enables deterministic, testable execution flows."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from google.adk import Agent, Workflow\nfrom google.adk.tools import FunctionTool\n\n# Define specialized agents\nintake_agent = Agent(\n    name=\"intake\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"\"\"Extract the following from the user query:\n    - issue_type: 'technical', 'billing', or 'general'\n    - urgency: 'low', 'medium', 'high'\n    - customer_id if provided\n    Return as JSON.\"\"\",\n)\n\ndiagnosis_agent = Agent(\n    name=\"diagnosis\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"\"\"Based on the issue type, determine the root cause.\n    For technical issues: check common error patterns.\n    For billing issues: review account status.\n    Provide detailed diagnosis steps.\"\"\",\n)\n\nresolution_agent = Agent(\n    name=\"resolution\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"\"\"Based on the diagnosis, provide step-by-step resolution.\n    Include code examples if applicable.\n    If escalation needed, explain why.\"\"\",\n)\n\nfeedback_agent = Agent(\n    name=\"feedback\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"\"\"Ask the user if the resolution was helpful.\n    Summarize the interaction for record-keeping.\n    If unresolved, offer to escalate.\"\"\",\n)\n\n# Build the orchestration workflow\nsupport_workflow = Workflow(\n    name=\"support_pipeline\",\n    edges=[\n        (\"START\", intake_agent),\n        (intake_agent, diagnosis_agent),\n        (diagnosis_agent, resolution_agent),\n        (resolution_agent, feedback_agent),\n        (feedback_agent, \"END\"),\n    ],\n    max_retries=1,\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1442-task-api--agent-to-agent-delegation",
      children: "14.4.2 Task API — Agent-to-Agent Delegation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Task API provides structured delegation patterns: multi-turn tasks, single-turn output, and mixed modes. Tasks enable agents to delegate sub-problems to specialized sub-agents."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from google.adk import Agent\nfrom google.adk.task import Task\n\n# Define sub-agents for specific domains\ncode_reviewer = Agent(\n    name=\"code_reviewer\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"Review code for bugs, security issues, and best practices. \"\n                \"Provide specific line-level feedback.\",\n)\n\nsecurity_analyzer = Agent(\n    name=\"security_analyzer\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"Analyze code for security vulnerabilities. \"\n                \"Focus on OWASP Top 10, injection risks, and auth issues.\",\n)\n\nperformance_optimizer = Agent(\n    name=\"performance_optimizer\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"Analyze code for performance bottlenecks. \"\n                \"Suggest optimizations for time and space complexity.\",\n)\n\n# Define tasks for delegation\nreview_task = Task(\n    name=\"full_code_review\",\n    subtasks=[\n        Task(name=\"security_check\", agent=security_analyzer, mode=\"single_turn\"),\n        Task(name=\"performance_check\", agent=performance_optimizer, mode=\"single_turn\"),\n    ],\n    aggregator=\"synthesize\",  # Combine results from subtasks\n)\n\n# Orchestrator agent with task delegation\norchestrator_agent = Agent(\n    name=\"review_orchestrator\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"\"\"You are a code review orchestrator.\n    First, review the code yourself for basic issues.\n    Then delegate to specialized reviewers for security and performance.\n    Finally, provide a comprehensive summary report.\"\"\",\n    tools=[review_task],\n)\n\n# Execute with delegation\nevents = Runner.execute(\n    agent=orchestrator_agent,\n    user_input=\"Review this Python function for potential issues:\\n\"\n              \"def process_payment(card_num, amount):\\n\"\n              \"    return execute_payment(card_num, amount)\",\n    session_id=\"review-session-001\",\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1443-state-management-across-agents",
      children: "14.4.3 State Management Across Agents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ADK uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "InvocationContext"
      }), " for state management. State is passed between agents via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ctx.state"
      }), " (key-value store) and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ctx.artifacts"
      }), " (file storage)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from google.adk import LlmAgent, InvocationContext\nfrom google.adk.tools import FunctionTool\nimport json\n\ndef save_user_context(ctx: InvocationContext, key: str, value: str) -> str:\n    \"\"\"Save a value to the user context state.\n\n    Args:\n        ctx: The invocation context (injected automatically)\n        key: The state key\n        value: The state value\n\n    Returns:\n        Confirmation message\n    \"\"\"\n    ctx.state[key] = value\n    return json.dumps({\"status\": \"saved\", \"key\": key, \"value\": value})\n\ndef load_user_context(ctx: InvocationContext, key: str) -> str:\n    \"\"\"Load a value from the user context state.\n\n    Args:\n        ctx: The invocation context (injected automatically)\n        key: The state key to retrieve\n\n    Returns:\n        The stored value or error message\n    \"\"\"\n    value = ctx.state.get(key)\n    if value is None:\n        return json.dumps({\"error\": f\"Key '{key}' not found\"})\n    return json.dumps({\"key\": key, \"value\": value})\n\ndef log_artifact(ctx: InvocationContext, filename: str, content: str) -> str:\n    \"\"\"Store an artifact (file) in the session.\n\n    Args:\n        ctx: The invocation context (injected automatically)\n        filename: The name of the artifact file\n        content: The content to store\n\n    Returns:\n        Confirmation with artifact ID\n    \"\"\"\n    artifact_id = ctx.artifacts.store(filename, content.encode())\n    return json.dumps({\"status\": \"stored\", \"artifact_id\": artifact_id, \"filename\": filename})\n\n# Agent with state management tools\nstateful_agent = LlmAgent(\n    name=\"stateful_agent\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"\"\"You are a stateful assistant that remembers user preferences.\n    Use save_user_context to remember user details.\n    Use load_user_context to recall previous information.\n    Use log_artifact to store generated files (reports, code, etc.).\n    Greet returning users by name if available in context.\"\"\",\n    tools=[\n        FunctionTool(func=save_user_context),\n        FunctionTool(func=load_user_context),\n        FunctionTool(func=log_artifact),\n    ],\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1444-advanced-routing-patterns",
      children: "14.4.4 Advanced Routing Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ADK 2.0 supports dynamic workflows with code-based routing logic."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from google.adk import Workflow, Agent\nfrom google.adk.graph import RoutingRule\n\n# Dynamic workflow with condition-based routing\ndef route_by_sentiment(context) -> str:\n    \"\"\"Route to different agents based on sentiment analysis.\"\"\"\n    user_message = context.get(\"last_user_message\", \"\")\n    negative_words = [\"angry\", \"frustrated\", \"cancel\", \"complaint\", \"refund\"]\n    urgent_words = [\"emergency\", \"urgent\", \"immediately\", \"critical\"]\n\n    if any(word in user_message.lower() for word in urgent_words):\n        return \"priority_handler\"\n    elif any(word in user_message.lower() for word in negative_words):\n        return \"complaint_handler\"\n    return \"standard_handler\"\n\npriority_agent = Agent(\n    name=\"priority_handler\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"\"\"This is a PRIORITY escalation.\n    Be extremely responsive and empathetic.\n    Offer immediate solutions or escalation to a human.\"\"\",\n)\n\ncomplaint_agent = Agent(\n    name=\"complaint_handler\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"\"\"Handle customer complaints professionally.\n    Acknowledge the issue, apologize, and offer solutions.\n    If the complaint is about billing, offer a discount or refund.\"\"\",\n)\n\nstandard_agent = Agent(\n    name=\"standard_handler\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"\"\"Handle general inquiries.\n    Be helpful and efficient.\n    Provide clear, actionable answers.\"\"\",\n)\n\n# Workflow with sentiment-based routing\nrouting_workflow = Workflow(\n    name=\"intelligent_routing\",\n    edges=[\n        (\"START\", priority_agent, {\"condition\": \"route_by_sentiment == 'priority_handler'\"}),\n        (\"START\", complaint_agent, {\"condition\": \"route_by_sentiment == 'complaint_handler'\"}),\n        (\"START\", standard_agent, {\"condition\": \"route_by_sentiment == 'standard_handler'\"}),\n        (priority_agent, \"END\"),\n        (complaint_agent, \"END\"),\n        (standard_agent, \"END\"),\n    ],\n    routing_fn=route_by_sentiment,\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1445-fan-out--fan-in-pattern",
      children: "14.4.5 Fan-Out / Fan-In Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For parallel task execution, use the fan-out/fan-in pattern."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from google.adk import Workflow, Agent\n\n# Define research sub-agents for parallel execution\nnews_agent = Agent(\n    name=\"news_researcher\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"Research latest news about the given topic. Include dates and sources.\",\n)\n\nacademic_agent = Agent(\n    name=\"academic_researcher\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"Find academic papers and research studies about the topic. \"\n                \"Include authors and publication dates.\",\n)\n\nsocial_agent = Agent(\n    name=\"social_researcher\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"Research social media discussions and public opinion about the topic.\",\n)\n\nsynthesis_agent = Agent(\n    name=\"synthesis_agent\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"\"\"Synthesize the research findings from all sources.\n    Create a comprehensive report with sections:\n    1. Executive Summary\n    2. Key Findings\n    3. Sources & References\n    4. Recommendations\"\"\",\n)\n\n# Workflow with fan-out (parallel) and fan-in (aggregation)\nresearch_workflow = Workflow(\n    name=\"comprehensive_research\",\n    edges=[\n        (\"START\", news_agent),        # Fan-out: all three run in parallel\n        (\"START\", academic_agent),\n        (\"START\", social_agent),\n        (news_agent, synthesis_agent), # Fan-in: all results feed into synthesis\n        (academic_agent, synthesis_agent),\n        (social_agent, synthesis_agent),\n        (synthesis_agent, \"END\"),\n    ],\n    execution_mode=\"parallel\",  # Run parallel branches concurrently\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "145-deployment--monitoring",
      children: "14.5 Deployment & Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ADK agents can be deployed to multiple targets. The recommended production path is Vertex AI Agent Engine for managed scaling, or Cloud Run for custom deployment."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1451-vertex-ai-agent-engine-deployment",
      children: "14.5.1 Vertex AI Agent Engine Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agent Engine is Google Cloud's managed service for ADK agents. It provides auto-scaling, built-in monitoring, and OAuth integration."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# agent_deploy.py — Deployment script for Vertex AI Agent Engine\nfrom google.adk import Agent\nfrom google.adk.tools import FunctionTool\nfrom google.cloud import aiplatform\nimport os\n\n# Define the agent (same as development)\ndef get_exchange_rate(base: str, target: str) -> str:\n    \"\"\"Get the current exchange rate between two currencies.\n\n    Args:\n        base: The base currency code (e.g., USD)\n        target: The target currency code (e.g., EUR)\n\n    Returns:\n        JSON string with exchange rate\n    \"\"\"\n    import json\n    # Mock implementation\n    rates = {\"USD_EUR\": 0.92, \"EUR_USD\": 1.09, \"USD_GBP\": 0.79, \"GBP_USD\": 1.27}\n    key = f\"{base.upper()}_{target.upper()}\"\n    rate = rates.get(key)\n    if rate is None:\n        return json.dumps({\"error\": f\"Rate for {base}/{target} not found\"})\n    return json.dumps({\"base\": base, \"target\": target, \"rate\": rate})\n\nforex_agent = Agent(\n    name=\"forex_agent\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"You are a currency exchange assistant. Provide exchange rates using the tool.\",\n    tools=[FunctionTool(func=get_exchange_rate)],\n)\n\n# Deploy to Vertex AI Agent Engine\ndef deploy_to_agent_engine():\n    \"\"\"Deploy the agent to Vertex AI Agent Engine.\"\"\"\n    # Initialize Vertex AI\n    aiplatform.init(\n        project=os.environ[\"GOOGLE_CLOUD_PROJECT\"],\n        location=\"us-central1\",\n    )\n\n    # Create Agent Engine deployment\n    engine = aiplatform.AgentEngine.create(\n        display_name=\"forex-agent\",\n        agent=forex_agent,\n        description=\"Currency exchange rate agent deployed via ADK\",\n        # Authentication config for OAuth\n        auth_config={\n            \"oauth\": {\n                \"client_id\": os.environ[\"OAUTH_CLIENT_ID\"],\n                \"client_secret\": os.environ[\"OAUTH_CLIENT_SECRET\"],\n            }\n        },\n    )\n    print(f\"Deployed Agent Engine: {engine.resource_name}\")\n    print(f\"Endpoint: {engine.endpoint}\")\n    return engine\n\n# if __name__ == \"__main__\":\n#     deploy_to_agent_engine()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1452-cloud-run-deployment",
      children: "14.5.2 Cloud Run Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For custom deployment scenarios, wrap the agent in a FastAPI server and deploy to Cloud Run."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# cloud_run_server.py — FastAPI server wrapping ADK agent\nfrom fastapi import FastAPI, HTTPException\nfrom pydantic import BaseModel\nfrom google.adk import Agent, Runner\nfrom google.adk.tools import FunctionTool\nimport uvicorn\nimport os\n\n# Define the agent\ndef sentiment_analysis(text: str) -> str:\n    \"\"\"Analyze the sentiment of the given text.\n\n    Args:\n        text: The text to analyze\n\n    Returns:\n        JSON string with sentiment label and score\n    \"\"\"\n    import json\n    # Mock implementation — in production, use a sentiment model\n    positive_words = [\"good\", \"great\", \"excellent\", \"happy\", \"wonderful\"]\n    negative_words = [\"bad\", \"terrible\", \"awful\", \"sad\", \"horrible\"]\n\n    score = 0\n    for word in text.lower().split():\n        if word in positive_words:\n            score += 1\n        elif word in negative_words:\n            score -= 1\n\n    if score > 0:\n        label = \"positive\"\n    elif score < 0:\n        label = \"negative\"\n    else:\n        label = \"neutral\"\n\n    return json.dumps({\"sentiment\": label, \"score\": score})\n\nagent = Agent(\n    name=\"sentiment_agent\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"Analyze the sentiment of user messages using the sentiment_analysis tool.\",\n    tools=[FunctionTool(func=sentiment_analysis)],\n)\n\n# FastAPI application\napp = FastAPI(title=\"ADK Sentiment Agent\")\n\nclass QueryRequest(BaseModel):\n    message: str\n    session_id: str = \"default\"\n\nclass QueryResponse(BaseModel):\n    response: str\n    session_id: str\n\n@app.post(\"/chat\", response_model=QueryResponse)\nasync def chat(request: QueryRequest):\n    \"\"\"Handle a chat request to the ADK agent.\"\"\"\n    try:\n        events = Runner.execute(\n            agent=agent,\n            user_input=request.message,\n            session_id=request.session_id,\n        )\n        # Collect all response content\n        responses = []\n        for event in events:\n            if event.type == \"LLM_RESPONSE\":\n                responses.append(event.content)\n\n        return QueryResponse(\n            response=\" \".join(responses),\n            session_id=request.session_id,\n        )\n    except Exception as e:\n        raise HTTPException(status_code=500, detail=str(e))\n\n@app.get(\"/health\")\nasync def health():\n    \"\"\"Health check endpoint for Cloud Run.\"\"\"\n    return {\"status\": \"healthy\", \"agent\": \"sentiment_agent\"}\n\n# For local testing:\n# if __name__ == \"__main__\":\n#     uvicorn.run(app, host=\"0.0.0.0\", port=8080)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# cloudrun.yaml — Cloud Run deployment configuration\napiVersion: serving.knative.dev/v1\nkind: Service\nmetadata:\n  name: adk-sentiment-agent\n  annotations:\n    run.googleapis.com/ingress: all\nspec:\n  template:\n    spec:\n      containers:\n        - image: gcr.io/my-project/adk-sentiment-agent:latest\n          ports:\n            - containerPort: 8080\n          env:\n            - name: GOOGLE_CLOUD_PROJECT\n              value: \"my-project\"\n            - name: GOOGLE_GENAI_USE_VERTEXAI\n              value: \"1\"\n          resources:\n            limits:\n              memory: \"1Gi\"\n              cpu: \"2\"\n          startupProbe:\n            httpGet:\n              path: /health\n            initialDelaySeconds: 10\n            periodSeconds: 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1453-local-development-with-adk-web",
      children: "14.5.3 Local Development with ADK Web"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ADK provides a built-in web UI for local development and testing."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install ADK\npip install google-adk\n\n# Run the web UI for a single agent directory\nadk web path/to/agent/directory\n\n# The web UI provides:\n# - Interactive chat interface\n# - Tool call visualization\n# - Session management\n# - Multi-turn conversation history\n# - Support for multi-agent directories\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# agent_directory/agent.py — Structure for ADK Web\nfrom google.adk import LlmAgent\nfrom google.adk.tools import FunctionTool\nimport json\n\n# ADK Web automatically discovers agents in the directory\ndef calculator(operation: str, a: float, b: float) -> str:\n    \"\"\"Perform a mathematical calculation.\n\n    Args:\n        operation: The operation: add, subtract, multiply, divide\n        a: First number\n        b: Second number\n\n    Returns:\n        JSON string with calculation result\n    \"\"\"\n    ops = {\n        \"add\": a + b,\n        \"subtract\": a - b,\n        \"multiply\": a * b,\n        \"divide\": a / b if b != 0 else \"Error: division by zero\",\n    }\n    result = ops.get(operation, f\"Unknown operation: {operation}\")\n    return json.dumps({\"operation\": operation, \"a\": a, \"b\": b, \"result\": result})\n\ncalc_agent = LlmAgent(\n    name=\"calculator\",\n    model=\"gemini-2.5-flash\",\n    instruction=\"You are a helpful calculator. Use the calculator tool to perform math operations.\",\n    tools=[FunctionTool(func=calculator)],\n    temperature=0.1,\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1454-production-monitoring-with-cloud-trace",
      children: "14.5.4 Production Monitoring with Cloud Trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ADK agents deployed to Google Cloud automatically emit traces to Cloud Trace. Additional monitoring can be configured for custom metrics."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# monitoring_config.py — Monitoring setup for production ADK agents\nfrom google.cloud import monitoring_v3\nfrom google.cloud import trace_v2\nimport time\n\nclass ADKMetricsReporter:\n    \"\"\"Reports custom metrics from ADK agent runs to Cloud Monitoring.\"\"\"\n\n    def __init__(self, project_id: str):\n        self.project_id = project_id\n        self.metric_client = monitoring_v3.MetricServiceClient()\n        self.project_name = f\"projects/{project_id}\"\n\n    def report_agent_metric(\n        self, agent_name: str, metric_type: str, value: float\n    ):\n        \"\"\"Report a custom metric for an agent.\n\n        Args:\n            agent_name: Name of the ADK agent\n            metric_type: Type of metric (latency, accuracy, error_rate)\n            value: The metric value\n        \"\"\"\n        series = monitoring_v3.TimeSeries()\n        series.metric.type = f\"custom.googleapis.com/adk/{metric_type}\"\n        series.resource.type = \"global\"\n        series.resource.labels[\"project_id\"] = self.project_id\n\n        # Add metric labels\n        series.metric.labels[\"agent_name\"] = agent_name\n        series.metric.labels[\"environment\"] = \"production\"\n\n        # Add data point\n        now = time.time()\n        point = series.points.add()\n        point.value.double_value = value\n        point.interval.end_time.seconds = int(now)\n        point.interval.end_time.nanos = int((now - int(now)) * 1e9)\n\n        self.metric_client.create_time_series(\n            request={\n                \"name\": self.project_name,\n                \"time_series\": [series],\n            }\n        )\n\n    def report_trace_span(\n        self, trace_id: str, span_name: str, duration_ms: float\n    ):\n        \"\"\"Report a custom trace span for debugging.\n\n        Args:\n            trace_id: The trace ID from the agent run\n            span_name: Name of the span\n            duration_ms: Duration in milliseconds\n        \"\"\"\n        trace_client = trace_v2.TraceServiceClient()\n        project_path = f\"projects/{self.project_id}\"\n\n        span = trace_v2.Span(\n            name=f\"{project_path}/traces/{trace_id}/spans/{span_name}\",\n            span_id=span_name.encode()[:16].hex(),\n            display_name=trace_v2.TruncatableString(value=span_name),\n            start_time={\"seconds\": int(time.time())},\n            end_time={\"seconds\": int(time.time() + duration_ms / 1000)},\n        )\n\n        trace_client.create_span(request={\"span\": span})\n\n# Usage in production\n# metrics_reporter = ADKMetricsReporter(project_id=\"my-project\")\n# metrics_reporter.report_agent_metric(\"forex_agent\", \"latency\", 1.25)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-google-adk-and-how-does-it-differ-from-other-agent-frameworks",
      children: "Q1: What is Google ADK and how does it differ from other agent frameworks?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Google ADK (Agent Development Kit) is an open-source, code-first Python framework for building, evaluating, and deploying AI agents. Unlike LangGraph (graph-based but model-agnostic) or OpenAI Agents SDK (OpenAI-only), ADK has first-class support for Gemini models, deep Google Workspace integration via MCP, and native deployment to Vertex AI Agent Engine. ADK 2.0 introduced a graph-based Workflow Runtime and the Task API for structured agent delegation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-explain-the-three-core-abstractions-in-adk-20",
      children: "Q2: Explain the three core abstractions in ADK 2.0."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The three core abstractions are: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent"
      }), " (defines an AI entity with model, instructions, and tools), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow"
      }), " (graph-based execution engine composing agents/nodes with routing, loops, and retries), and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task API"
      }), " (structured agent-to-agent delegation with multi-turn task mode, single-turn controlled output, and human-in-the-loop). In ADK 2.0, every Agent is evaluated as a node within the Workflow graph."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-how-does-adk-integrate-with-google-workspace",
      children: "Q3: How does ADK integrate with Google Workspace?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ADK integrates with Google Workspace through dedicated MCP (Model Context Protocol) servers. Each service (Gmail, Calendar, Drive, Chat, People) has a corresponding MCP endpoint at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*.googleapis.com/mcp/v1"
      }), ". Tools are connected via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "McpToolset"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "StreamableHTTPConnectionParams"
      }), ". Authentication uses OAuth2 with dynamic ", (0,jsx_runtime.jsx)(_components.code, {
        children: "header_provider"
      }), " for token injection. In production, tokens are provided by the hosting platform (Vertex AI Agent Engine)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-is-the-difference-between-llmagent-and-agent-in-adk",
      children: "Q4: What is the difference between LlmAgent and Agent in ADK?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LlmAgent"
      }), " is the full-featured agent class with complete LLM reasoning, tool calling, multi-turn conversation, and configurable parameters (temperature, max_turns, etc.). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Agent"
      }), " is the simplified base class that provides minimal configuration. In ADK 2.0, both are nodes in the Workflow graph. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LlmAgent"
      }), " for most production agents; use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Agent"
      }), " for simple or intermediate processing nodes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-how-does-adk-20s-workflow-runtime-work",
      children: "Q5: How does ADK 2.0's Workflow Runtime work?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The Workflow Runtime is a graph-based execution engine. Agents are nodes in the graph, connected by directed edges. Execution flows through the graph with support for conditional routing (based on agent output), fan-out/fan-in (parallel execution), loops, retries, and dynamic nodes. The runtime manages state propagation between nodes via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "InvocationContext"
      }), ". Workflows can be nested — a workflow can be a node in another workflow."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-monitoring-capabilities-does-adk-provide-for-production-agents",
      children: "Q6: What monitoring capabilities does ADK provide for production agents?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ADK agents deployed to Google Cloud automatically emit traces to Cloud Trace. Each agent run generates spans for LLM calls, tool executions, and state transitions. Additional monitoring includes: Cloud Logging for agent outputs and errors, Cloud Monitoring for custom metrics (latency, error rates, token usage), and the ADK Web UI for local debugging. The Vertex AI Agent Engine provides a dashboard with per-session traces and performance metrics."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-explain-how-functiontool-works-in-adk-how-does-it-handle-schema-generation",
      children: "Q7: Explain how FunctionTool works in ADK. How does it handle schema generation?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FunctionTool"
      }), " wraps any Python function as an agent tool. ADK automatically generates JSON schemas for tool parameters by inspecting the function signature — type hints, parameter names, and docstrings are parsed to create the schema. The function's docstring becomes the tool's description. ADK supports complex types (lists, dicts, nested objects) via Pydantic model integration. The LLM uses these schemas to decide when and how to call tools."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-how-does-adk-handle-state-management-in-multi-agent-systems",
      children: "Q8: How does ADK handle state management in multi-agent systems?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ADK uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "InvocationContext"
      }), " for state management. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ctx.state"
      }), " provides a key-value store shared across agents in the same session. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ctx.artifacts"
      }), " provides file storage for generated content (reports, images, code). State is propagated automatically through workflow edges. Agents can read/write state to pass data between workflow nodes. State persistence is managed by the session system — each session has an isolated state namespace."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-what-deployment-options-are-available-for-adk-agents",
      children: "Q9: What deployment options are available for ADK agents?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ADK agents can be deployed to: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Vertex AI Agent Engine"
      }), " — managed service with auto-scaling, OAuth, and monitoring; (2) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cloud Run"
      }), " — custom deployment with FastAPI server; (3) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Google Kubernetes Engine"
      }), " — containerized deployment; (4) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gemini Enterprise Agent Platform"
      }), " — for Workspace-integrated agents; (5) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Local/on-prem"
      }), " — using ADK Web UI or custom runner. All Cloud deployments inherit Cloud Trace, Cloud Logging, and IAM security."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-compare-adks-multi-agent-patterns-workflow-task-api-and-a2a-protocol",
      children: "Q10: Compare ADK's multi-agent patterns: Workflow, Task API, and A2A protocol."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow"
      }), " is best for deterministic, graph-based execution with conditional routing and parallel branches — suitable for pipelines with known flows. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task API"
      }), " is for structured delegation where an agent assigns sub-tasks to specialized agents — supports multi-turn tasks and human-in-the-loop. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A2A (Agent-to-Agent) protocol"
      }), " enables remote agent discovery and communication across service boundaries — suitable for distributed agent systems. In practice, these patterns are often combined: a Workflow may use Task API for delegation, and Task agents may communicate via A2A."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Google Agent Development Kit (ADK) provides a complete framework for building production-grade AI agents powered by Gemini. ADK 2.0 introduces a graph-based Workflow Runtime, the Task API for structured delegation, and deep integration with Google Workspace through MCP servers. Developers start with simple ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LlmAgent"
      }), " definitions and grow into sophisticated multi-agent workflows with conditional routing, parallel execution, and state management."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ADK's tool ecosystem includes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FunctionTool"
      }), " for custom Python code, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "McpToolset"
      }), " for Google Workspace and third-party MCP servers, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ApplicationIntegrationToolset"
      }), " for enterprise SaaS connectors. Production deployment options include Vertex AI Agent Engine (managed), Cloud Run (custom), and Google Kubernetes Engine (containerized), all with built-in Cloud Trace monitoring."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For AI engineers, ADK represents the recommended path for building Gemini-powered agents with enterprise-grade security, scalability, and Google Cloud integration. The framework's code-first approach, automatic schema generation, and comprehensive tool ecosystem make it suitable for everything from simple chatbots to complex multi-agent automation systems."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz-5-mcq",
      children: "Chapter Quiz (5 MCQ)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the recommended production deployment target for ADK agents on Google Cloud?\na) Cloud Functions\nb) Vertex AI Agent Engine\nc) Compute Engine\nd) App Engine"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Which class does ADK use to connect to Google Workspace services?\na) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "WorkspaceTool"
          }), "\nb) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "GoogleApiTool"
          }), "\nc) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "McpToolset"
          }), "\nd) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "IntegrationConnector"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In ADK 2.0, how are agents evaluated within the execution engine?\na) As standalone processes\nb) As nodes within a Workflow graph\nc) As microservices via HTTP\nd) As Lambda functions"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the purpose of the Task API in ADK 2.0?\na) To schedule periodic agent execution\nb) To enable structured agent-to-agent delegation with multi-turn tasks\nc) To parallelize LLM calls\nd) To cache agent responses"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does ADK generate JSON schemas for function tools?\na) Manually defined by the developer\nb) Automatically from type hints and docstrings\nc) From a separate schema file\nd) Using the OpenAPI specification"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers"
      }), ": 1-b, 2-c, 3-b, 4-b, 5-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises-5",
      children: "Exercises (5)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-build-a-gmail-assistant-agent",
      children: "Exercise 1: Build a Gmail Assistant Agent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create an ADK ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LlmAgent"
      }), " that connects to Gmail MCP. The agent should be able to search for emails by subject, read email content, and send replies. Use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "McpToolset"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "StreamableHTTPConnectionParams"
      }), ". Include proper OAuth configuration for local testing. Test with commands like \"Find the last email from ", (0,jsx_runtime.jsx)(_components.a, {
        href: "mailto:john@example.com",
        children: "john@example.com"
      }), "\" and \"Summarize my unread emails from today.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-implement-a-multi-agent-research-pipeline",
      children: "Exercise 2: Implement a Multi-Agent Research Pipeline"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Workflow"
      }), " with three agents: a query analyzer (classifies the research topic), a web search agent (uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GoogleSearchAgentTool"
      }), " to find information), and a report generator (synthesizes results into a structured document). Add conditional routing: if the topic is technical, add a fourth agent for code example generation. Use fan-out pattern for parallel searches."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-create-a-custom-functiontool-integration",
      children: "Exercise 3: Create a Custom FunctionTool Integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a Python function that calls a public REST API (e.g., GitHub API, news API, or weather API). Wrap it as a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FunctionTool"
      }), ". Build an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LlmAgent"
      }), " that uses this tool. Handle rate limiting and errors gracefully (return structured error messages instead of raising exceptions). Test with multiple concurrent sessions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-design-a-stateful-customer-support-workflow",
      children: "Exercise 4: Design a Stateful Customer Support Workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a multi-agent workflow for customer support: (1) Intake agent extracts issue type and customer ID, saves to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ctx.state"
      }), "; (2) Diagnosis agent reads state and determines root cause; (3) Resolution agent provides steps and stores resolution in state; (4) Feedback agent reads state and asks for satisfaction rating. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FunctionTool"
      }), " wrappers for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "save_user_context"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "load_user_context"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-deploy-an-adk-agent-to-cloud-run",
      children: "Exercise 5: Deploy an ADK Agent to Cloud Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Take any agent from the exercises above and containerize it. Create a FastAPI server (as shown in section 14.5.2) with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/chat"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/health"
      }), " endpoints. Write a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Dockerfile"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cloudrun.yaml"
      }), " configuration. Deploy to Cloud Run using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "gcloud run deploy"
      }), ". Verify the deployment by sending test requests to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/chat"
      }), " endpoint."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Google ADK 2.0 is an open-source, code-first Python framework with first-class Gemini model support"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Three core abstractions: Agent (AI entity), Workflow (graph orchestration), Task API (structured delegation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ADK integrates with Google Workspace via MCP servers (Gmail, Calendar, Drive, Chat, People)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FunctionTool automatically generates JSON schemas from Python function signatures and docstrings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-agent architectures are built using Workflow graphs with conditional routing, fan-out/fan-in, and loops"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State management uses InvocationContext with state key-value store and artifact file storage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recommended production deployment is Vertex AI Agent Engine with auto-scaling and monitoring"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ADK agents emit traces to Cloud Trace for observability in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ADK supports model-agnostic usage with Gemini as the primary model via Google Gen AI SDK"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The framework is available in Python, TypeScript, Go, and Java for enterprise adoption"
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
            children: "Explain the core idea of Google Agent Development Kit (ADK) in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Google Agent Development Kit (ADK)."
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
            children: "Describe a production bug caused by misunderstanding Google Agent Development Kit (ADK). How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Google Agent Development Kit (ADK) from 10 users to 10 million?"
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
            children: "Compare Google Agent Development Kit (ADK) with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Google Agent Development Kit (ADK)."
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
            children: "How does Google Agent Development Kit (ADK) behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Google Agent Development Kit (ADK) run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Google Agent Development Kit (ADK) that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Google Agent Development Kit (ADK) explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Google Agent Development Kit (ADK)\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Google Agent Development Kit (ADK) to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Google Agent Development Kit (ADK) (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Google Agent Development Kit (ADK) and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Google Agent Development Kit (ADK)-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Google Agent Development Kit (ADK) interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Google Agent Development Kit (ADK) in production today?"
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
        }), " Google Agent Development Kit (ADK) builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Google Agent Development Kit (ADK) before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Google Agent Development Kit (ADK) is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Google Agent Development Kit (ADK) in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Google Agent Development Kit (ADK) chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Google Agent Development Kit (ADK) is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Google Agent Development Kit (ADK) is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Google Agent Development Kit (ADK) is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Google Agent Development Kit (ADK) issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Google Agent Development Kit (ADK) in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Google Agent Development Kit (ADK) that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Google Agent Development Kit (ADK) is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Google Agent Development Kit (ADK) in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Google Agent Development Kit (ADK) and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Google Agent Development Kit (ADK) on an empty input?"
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
            children: "Complete Medium exercises, explain Google Agent Development Kit (ADK) to someone else"
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
        children: "Always write a one-line example of Google Agent Development Kit (ADK) from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Google Agent Development Kit (ADK) when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Google Agent Development Kit (ADK) twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Google Agent Development Kit (ADK) snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Google Agent Development Kit (ADK) listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Google Agent Development Kit (ADK) to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Google Agent Development Kit (ADK) by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Google Agent Development Kit (ADK) to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Google Agent Development Kit (ADK)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Google Agent Development Kit (ADK) (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Google Agent Development Kit (ADK) problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Google Agent Development Kit (ADK)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Google Agent Development Kit (ADK)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Google Agent Development Kit (ADK)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Google Agent Development Kit (ADK) fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Google Agent Development Kit (ADK) is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Google Agent Development Kit (ADK) is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Google Agent Development Kit (ADK), or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Google Agent Development Kit (ADK) asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Google Agent Development Kit (ADK) is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Google Agent Development Kit (ADK)."
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
        children: "Google Agent Development Kit (ADK) emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Google Agent Development Kit (ADK) today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Google Agent Development Kit (ADK) — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Google Agent Development Kit (ADK) changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Google Agent Development Kit (ADK)."
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
        children: "Google Agent Development Kit (ADK) appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Google Agent Development Kit (ADK) helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Google Agent Development Kit (ADK) concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Google Agent Development Kit (ADK) skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Google Agent Development Kit (ADK) to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Google Agent Development Kit (ADK) is like a recipe"
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
        }), " — this chapter contributes the Google Agent Development Kit (ADK) skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-14googleadk-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Google Agent Development Kit (ADK) in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-14googleadk-flash2",
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
      "data-qid": "22advancedaiagents-14googleadk-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Google Agent Development Kit (ADK) approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-14googleadk-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Google Agent Development Kit (ADK) NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-14googleadk-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Google Agent Development Kit (ADK) applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Google Agent Development Kit (ADK) (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Google Agent Development Kit (ADK) (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Google Agent Development Kit (ADK)-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Google Agent Development Kit (ADK) in production at scale"
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
        children: "Testing: pytest for unit tests of Google Agent Development Kit (ADK) code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Google Agent Development Kit (ADK)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Google Agent Development Kit (ADK) code."]
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
        }), " or your IDE's debugger to step through the Google Agent Development Kit (ADK) example code."]
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
        children: "Explain Google Agent Development Kit (ADK) in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Google Agent Development Kit (ADK)."
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
        children: "Tell me about a time you debugged a Google Agent Development Kit (ADK) problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Google Agent Development Kit (ADK) is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Google Agent Development Kit (ADK)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Google Agent Development Kit (ADK) logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Google Agent Development Kit (ADK) without notes"
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
        }), ": a small team uses Google Agent Development Kit (ADK) daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Google Agent Development Kit (ADK) patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Google Agent Development Kit (ADK) principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Google Agent Development Kit (ADK) shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Google Agent Development Kit (ADK) to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/15-a2a-protocol",
        children: "Agent-to-Agent (A2A) Protocol"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Google Agent Development Kit (ADK), like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Google Agent Development Kit (ADK) depends on input size and distribution — always benchmark for your own data."
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