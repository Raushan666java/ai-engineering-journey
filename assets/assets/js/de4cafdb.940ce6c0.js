"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[1790],{

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
const site_docs_courses_ai_engineering_placement_22_advanced_ai_agents_14_google_adk_md_de4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/advanced-ai-agents/14-google-adk","title":"Google Agent Development Kit (ADK)","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/22-advanced-ai-agents/14-google-adk.md","sourceDirName":"courses/ai-engineering-placement/22-advanced-ai-agents","slug":"/ai-engineering-placement/22-advanced-ai-agents/14-google-adk","permalink":"/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/14-google-adk","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":285,"frontMatter":{"id":"14-google-adk","slug":"/ai-engineering-placement/22-advanced-ai-agents/14-google-adk","title":"Google Agent Development Kit (ADK)","sidebar_label":"Google Agent Development Kit (ADK)","sidebar_position":285},"sidebar":"placementSidebar","previous":{"title":"OpenAI Agents SDK","permalink":"/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/13-openai-agents-sdk"},"next":{"title":"Agent-to-Agent (A2A) Protocol","permalink":"/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/15-a2a-protocol"}}');
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
	sidebar_position: 285
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
        children: "flowchart TD\r\n    subgraph ADK[ADK 2.0 Architecture]\r\n        A[Agent] --> LLM[Gemini Model]\r\n        A --> T[Tools]\r\n        W[Workflow] --> N1[Node: Agent 1]\r\n        W --> N2[Node: Agent 2]\r\n        W --> R[Routing Logic]\r\n        TA[Task API] --> D[Delegation]\r\n        TA --> HIL[Human-in-the-Loop]\r\n    end\r\n    subgraph Tools[Tool Ecosystem]\r\n        FT[FunctionTool] --> CUSTOM[Custom Python Code]\r\n        MCP[McpToolset] --> GWS[Google Workspace]\r\n        MCP --> WEB[Web Search]\r\n        AIT[AppIntegrationToolset] --> GCP[Google Cloud APIs]\r\n    end\r\n    subgraph Deploy[Deployment Targets]\r\n        VX[Vertex AI Agent Engine] --> MON[Cloud Trace / Logging]\r\n        CR[Cloud Run] --> MON\r\n        ADKW[ADK Web] --> LOCAL[Local Dev UI]\r\n    end\r\n    ADK --> Tools\r\n    ADK --> Deploy\n"
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
        children: "# ADK 2.0 core architecture: Agent, Workflow, Task\r\nfrom google.adk import Agent, Workflow\r\nfrom google.adk.tools import FunctionTool\r\n\r\n# A single agent is the simplest ADK application\r\ngreeting_agent = Agent(\r\n    name=\"greeting_agent\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"You are a helpful assistant. Greet the user warmly and answer questions.\",\r\n)\r\n\r\n# A workflow composes multiple agents/nodes into a graph\r\nresearch_agent = Agent(\r\n    name=\"research_agent\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"Research the given topic thoroughly. Provide key facts and insights.\",\r\n)\r\n\r\nsummarize_agent = Agent(\r\n    name=\"summarize_agent\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"Summarize the research findings into 3 bullet points.\",\r\n)\r\n\r\n# Workflow with sequential edges\r\nresearch_workflow = Workflow(\r\n    name=\"research_pipeline\",\r\n    edges=[\r\n        (\"START\", research_agent),\r\n        (research_agent, summarize_agent),\r\n        (summarize_agent, \"END\"),\r\n    ],\r\n)\n"
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
        children: "from google.adk import Agent, Runner\r\n\r\n# Running an agent synchronously\r\nagent = Agent(\r\n    name=\"assistant\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"You are a helpful assistant.\",\r\n)\r\n\r\n# Runner.execute returns an Event sequence\r\nevents = Runner.execute(\r\n    agent=agent,\r\n    user_input=\"What is the capital of France?\",\r\n    session_id=\"session-001\",\r\n)\r\n\r\nfor event in events:\r\n    print(f\"[{event.type}] {event.content}\")\r\n    # event.types: 'TURN_START', 'LLM_RESPONSE', 'TOOL_CALL',\r\n    #              'TOOL_RESULT', 'TURN_END', 'AGENT_END'\n"
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
        children: "# ADK 2.0 Workflow with routing and retry\r\nfrom google.adk import Workflow, Agent\r\n\r\nclassify_agent = Agent(\r\n    name=\"classifier\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"Classify the query as 'tech', 'billing', or 'general'. Return only the category.\",\r\n)\r\n\r\ntech_agent = Agent(\r\n    name=\"tech_support\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"Provide detailed technical support for the issue.\",\r\n)\r\n\r\nbilling_agent = Agent(\r\n    name=\"billing_support\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"Handle billing and account inquiries.\",\r\n)\r\n\r\n# Workflow with conditional routing\r\nsupport_workflow = Workflow(\r\n    name=\"customer_support\",\r\n    edges=[\r\n        (\"START\", classify_agent),\r\n        (classify_agent, tech_agent, {\"condition\": \"result == 'tech'\"}),\r\n        (classify_agent, billing_agent, {\"condition\": \"result == 'billing'\"}),\r\n        (classify_agent, \"END\", {\"condition\": \"result == 'general'\"}),\r\n        (tech_agent, \"END\"),\r\n        (billing_agent, \"END\"),\r\n    ],\r\n    max_retries=2,  # Retry failed nodes up to 2 times\r\n)\n"
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
        children: "from google.adk import LlmAgent\r\nfrom google.adk.tools import FunctionTool\r\nimport json\r\n\r\n# Define a tool as a standalone function\r\ndef get_weather(city: str, date: str = \"today\") -> str:\r\n    \"\"\"Get the weather forecast for a city.\r\n\r\n    Args:\r\n        city: The name of the city\r\n        date: The date for the forecast (default: today)\r\n\r\n    Returns:\r\n        A JSON string with weather information\r\n    \"\"\"\r\n    # Mock implementation — in production, call a weather API\r\n    weather_data = {\r\n        \"city\": city,\r\n        \"date\": date,\r\n        \"temperature\": 22,\r\n        \"conditions\": \"sunny\",\r\n        \"humidity\": \"45%\",\r\n    }\r\n    return json.dumps(weather_data)\r\n\r\n# Configure the LlmAgent with tools\r\nweather_agent = LlmAgent(\r\n    name=\"weather_bot\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"\"\"You are a helpful weather assistant.\r\n    Use the get_weather tool to provide accurate forecasts.\r\n    Always specify the city and date when calling the tool.\r\n    If the user asks about a city without a date, assume today.\"\"\",\r\n    tools=[FunctionTool(func=get_weather)],\r\n    temperature=0.3,  # Lower temperature for factual responses\r\n    max_turns=5,      # Max conversation turns before requiring user input\r\n)\n"
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
        children: "from google.adk import Agent\r\n\r\n# Simple Agent with minimal configuration\r\nsimple_agent = Agent(\r\n    name=\"simple_bot\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"Answer questions concisely. Use no more than two sentences.\",\r\n)\r\n\r\n# Agent with system instruction from a file\r\nwith open(\"system_prompt.txt\", \"r\") as f:\r\n    system_prompt = f.read()\r\n\r\nfile_aware_agent = Agent(\r\n    name=\"file_bot\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=system_prompt,\r\n)\r\n\r\n# Agent with custom output format\r\nstructured_agent = Agent(\r\n    name=\"json_bot\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"\"\"Always respond in JSON format with keys: 'answer', 'confidence', 'sources'.\r\n    Example: {\"answer\": \"Paris\", \"confidence\": 0.95, \"sources\": [\"geography-db\"]}\"\"\",\r\n)\n"
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
        children: "from google.adk import Agent\r\nfrom google.adk.tools import FunctionTool\r\nfrom typing import List, Dict\r\nimport json\r\n\r\n# Database query tool\r\ndef query_database(sql: str) -> str:\r\n    \"\"\"Execute a SQL query against the products database.\r\n\r\n    Args:\r\n        sql: The SQL query string to execute\r\n\r\n    Returns:\r\n        JSON string with query results\r\n    \"\"\"\r\n    # Mock database implementation\r\n    mock_db = {\r\n        \"products\": [\r\n            {\"id\": 1, \"name\": \"Laptop\", \"price\": 1200, \"stock\": 15},\r\n            {\"id\": 2, \"name\": \"Mouse\", \"price\": 25, \"stock\": 100},\r\n            {\"id\": 3, \"name\": \"Keyboard\", \"price\": 75, \"stock\": 42},\r\n        ]\r\n    }\r\n\r\n    # Simple SQL parser (mock)\r\n    if \"SELECT\" in sql.upper():\r\n        return json.dumps(mock_db.get(\"products\", []))\r\n    return json.dumps({\"error\": \"Only SELECT queries supported in mock\"})\r\n\r\n# Email formatting tool\r\ndef format_email(recipient: str, subject: str, body: str) -> str:\r\n    \"\"\"Format and send an email notification.\r\n\r\n    Args:\r\n        recipient: Email address of the recipient\r\n        subject: Email subject line\r\n        body: Email body content\r\n\r\n    Returns:\r\n        Confirmation message\r\n    \"\"\"\r\n    # Mock email sending\r\n    return json.dumps({\r\n        \"status\": \"sent\",\r\n        \"recipient\": recipient,\r\n        \"subject\": subject,\r\n        \"timestamp\": \"2026-07-28T10:00:00Z\",\r\n    })\r\n\r\n# Function agent combining multiple tools\r\norder_agent = Agent(\r\n    name=\"order_processor\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"\"\"You are an order processing agent.\r\n    Use query_database to check inventory.\r\n    Use format_email to send order confirmations.\r\n    Always verify stock before confirming an order.\"\"\",\r\n    tools=[\r\n        FunctionTool(func=query_database),\r\n        FunctionTool(func=format_email),\r\n    ],\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1424-retrieval-augmented-agent",
      children: "14.2.4 Retrieval-Augmented Agent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ADK supports retrieval augmentation through tool integration. Agents can query knowledge bases, vector stores, or search APIs to ground their responses."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from google.adk import LlmAgent\r\nfrom google.adk.tools import FunctionTool\r\nfrom typing import List\r\nimport json\r\n\r\n# Mock vector database retrieval\r\ndef knowledge_retrieval(query: str, top_k: int = 3) -> str:\r\n    \"\"\"Retrieve relevant documents from the knowledge base.\r\n\r\n    Args:\r\n        query: The search query\r\n        top_k: Number of documents to retrieve (default: 3)\r\n\r\n    Returns:\r\n        JSON string with retrieved documents\r\n    \"\"\"\r\n    # Mock knowledge base\r\n    documents = {\r\n        \"refund_policy\": \"Refunds are processed within 5-7 business days. \"\r\n                         \"Items must be returned in original condition.\",\r\n        \"shipping_info\": \"Standard shipping takes 3-5 business days. \"\r\n                        \"Express shipping takes 1-2 business days.\",\r\n        \"warranty\": \"All products come with a 1-year manufacturer warranty. \"\r\n                   \"Extended warranty available for purchase.\",\r\n    }\r\n    results = []\r\n    for doc_id, content in documents.items():\r\n        if any(term in query.lower() for term in doc_id.split(\"_\")):\r\n            results.append({\"id\": doc_id, \"content\": content, \"score\": 0.95})\r\n\r\n    # Return top_k results\r\n    return json.dumps(results[:top_k])\r\n\r\n# RAG agent that retrieves knowledge before answering\r\nrag_agent = LlmAgent(\r\n    name=\"knowledge_agent\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"\"\"You are a customer support agent with access to a knowledge base.\r\n    ALWAYS call knowledge_retrieval to find relevant information before answering.\r\n    If the knowledge base doesn't have the answer, tell the user you'll escalate.\r\n    Cite the document IDs you used to answer.\"\"\",\r\n    tools=[FunctionTool(func=knowledge_retrieval)],\r\n    temperature=0.2,  # Low temperature for factual answers\r\n)\n"
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
        children: "from google.adk.tools import FunctionTool\r\nimport requests\r\nimport json\r\nfrom typing import Optional\r\n\r\ndef get_stock_price(ticker: str, exchange: str = \"NASDAQ\") -> str:\r\n    \"\"\"Get the current stock price for a given ticker symbol.\r\n\r\n    Args:\r\n        ticker: The stock ticker symbol (e.g., AAPL, GOOGL)\r\n        exchange: The stock exchange (default: NASDAQ)\r\n\r\n    Returns:\r\n        JSON string with current stock price and metadata\r\n    \"\"\"\r\n    # Mock implementation — in production, call a stock API\r\n    mock_prices = {\r\n        \"AAPL\": 198.50,\r\n        \"GOOGL\": 175.30,\r\n        \"MSFT\": 420.75,\r\n        \"AMZN\": 185.20,\r\n        \"TSLA\": 245.60,\r\n    }\r\n    price = mock_prices.get(ticker.upper(), None)\r\n    if price is None:\r\n        return json.dumps({\"error\": f\"Ticker {ticker} not found\"})\r\n    return json.dumps({\r\n        \"ticker\": ticker.upper(),\r\n        \"exchange\": exchange,\r\n        \"price\": price,\r\n        \"currency\": \"USD\",\r\n        \"timestamp\": \"2026-07-28T14:30:00Z\",\r\n    })\r\n\r\ndef send_slack_notification(channel: str, message: str, priority: str = \"normal\") -> str:\r\n    \"\"\"Send a notification to a Slack channel.\r\n\r\n    Args:\r\n        channel: The Slack channel name (e.g., #alerts, #general)\r\n        message: The message content to send\r\n        priority: Message priority: 'low', 'normal', or 'high' (default: normal)\r\n\r\n    Returns:\r\n        JSON string with notification status\r\n    \"\"\"\r\n    # Mock implementation\r\n    return json.dumps({\r\n        \"status\": \"sent\",\r\n        \"channel\": channel,\r\n        \"message_preview\": message[:50] + \"...\" if len(message) > 50 else message,\r\n        \"priority\": priority,\r\n        \"timestamp\": \"2026-07-28T14:30:00Z\",\r\n    })\r\n\r\n# Register tools with an agent\r\nnotification_agent = Agent(\r\n    name=\"alert_agent\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"\"\"You are a financial alert agent.\r\n    Use get_stock_price to check stock values.\r\n    Use send_slack_notification to send alerts when conditions are met.\r\n    Only send notifications when the user explicitly asks.\"\"\",\r\n    tools=[\r\n        FunctionTool(func=get_stock_price),\r\n        FunctionTool(func=send_slack_notification),\r\n    ],\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1432-google-workspace-mcp-integration",
      children: "14.3.2 Google Workspace MCP Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ADK integrates with Google Workspace (Gmail, Calendar, Drive, Chat) through dedicated MCP servers. This is the recommended production path for workspace data access."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from google.adk import LlmAgent\r\nfrom google.adk.tools import McpToolset\r\nfrom google.adk.tools.mcp import StreamableHTTPConnectionParams\r\nfrom datetime import datetime, timezone\r\n\r\n# Current date for relative date calculations\r\ncurrent_date = datetime.now(timezone.utc).strftime(\"%Y-%m-%d\")\r\n\r\n# Define a dynamic auth header provider\r\n# In production, this uses OAuth2 token injection from Google Cloud\r\ndef auth_header_producer():\r\n    \"\"\"Returns the current OAuth2 access token for Google Workspace.\"\"\"\r\n    # In production: fetch from ADC or environment\r\n    # For local dev: use gcloud auth print-access-token\r\n    return {\"Authorization\": \"Bearer <placeholder>\"}\r\n\r\n# Configure Google Workspace MCP toolsets\r\ncalendar_mcp = McpToolset(\r\n    connection_params=StreamableHTTPConnectionParams(\r\n        url=\"https://calendarmcp.googleapis.com/mcp/v1\",\r\n    ),\r\n    header_provider=auth_header_producer,\r\n)\r\n\r\ngmail_mcp = McpToolset(\r\n    connection_params=StreamableHTTPConnectionParams(\r\n        url=\"https://gmailmcp.googleapis.com/mcp/v1\",\r\n    ),\r\n    header_provider=auth_header_producer,\r\n)\r\n\r\ndrive_mcp = McpToolset(\r\n    connection_params=StreamableHTTPConnectionParams(\r\n        url=\"https://drivemcp.googleapis.com/mcp/v1\",\r\n    ),\r\n    header_provider=auth_header_producer,\r\n)\r\n\r\nchat_mcp = McpToolset(\r\n    connection_params=StreamableHTTPConnectionParams(\r\n        url=\"https://chatmcp.googleapis.com/mcp/v1\",\r\n    ),\r\n    header_provider=auth_header_producer,\r\n)\r\n\r\npeople_mcp = McpToolset(\r\n    connection_params=StreamableHTTPConnectionParams(\r\n        url=\"https://people.googleapis.com/mcp/v1\",\r\n    ),\r\n    header_provider=auth_header_producer,\r\n)\r\n\r\nuniversal_search_mcp = McpToolset(\r\n    connection_params=StreamableHTTPConnectionParams(\r\n        url=\"https://workspacemcp.googleapis.com/mcp/v1\",\r\n    ),\r\n    header_provider=auth_header_producer,\r\n)\r\n\r\n# Workspace agent with all MCP tools\r\nworkspace_agent = LlmAgent(\r\n    name=\"workspace_assistant\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=f\"\"\"You are an enterprise assistant grounded in Google Workspace data.\r\n    Today's date is {current_date}. Calculate relative dates using this reference.\r\n    Use Calendar MCP to check schedules and create events.\r\n    Use Gmail MCP to read and send emails.\r\n    Use Drive MCP to find and manage files.\r\n    Use Chat MCP for workspace messaging.\r\n    Use People MCP for contact information.\r\n    Use Universal Search to search across all Workspace products.\"\"\",\r\n    tools=[\r\n        calendar_mcp,\r\n        gmail_mcp,\r\n        drive_mcp,\r\n        chat_mcp,\r\n        people_mcp,\r\n        universal_search_mcp,\r\n    ],\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1433-google-search-grounding",
      children: "14.3.3 Google Search Grounding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ADK supports Google Search grounding to provide real-time information and citations."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from google.adk import LlmAgent\r\nfrom google.adk.tools.google_search_agent_tool import GoogleSearchAgentTool\r\n\r\n# Google Search tool for real-time information\r\nsearch_tool = GoogleSearchAgentTool(\r\n    search_engine_id=\"your_search_engine_id\",  # From Google Cloud Console\r\n    api_key=\"your_api_key\",                    # Or use environment variable\r\n    num_results=5,\r\n    include_citations=True,\r\n)\r\n\r\n# Research agent grounded in web search\r\nresearch_agent = LlmAgent(\r\n    name=\"research_assistant\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"\"\"You are a research assistant with web access.\r\n    Use Google Search to find the latest information on any topic.\r\n    Always cite your sources.\r\n    Synthesize information from multiple search results.\r\n    If the user asks about recent events, always search before answering.\"\"\",\r\n    tools=[search_tool],\r\n    temperature=0.4,  # Balanced for research synthesis\r\n)\n"
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
        children: "from google.adk.tools.application_integration_tool import ApplicationIntegrationToolset\r\n\r\n# Configure pre-built connectors\r\nintegration_toolset = ApplicationIntegrationToolset(\r\n    connectors={\r\n        \"salesforce\": \"projects/my-project/locations/us-central1/connectors/salesforce\",\r\n        \"servicenow\": \"projects/my-project/locations/us-central1/connectors/servicenow\",\r\n        \"bigquery\": \"projects/my-project/locations/us-central1/connectors/bigquery\",\r\n    },\r\n    auth_config={\r\n        \"type\": \"oauth2\",\r\n        \"scopes\": [\r\n            \"https://www.googleapis.com/auth/cloud-platform\",\r\n        ],\r\n    },\r\n)\r\n\r\n# Enterprise agent with SaaS integrations\r\nenterprise_agent = LlmAgent(\r\n    name=\"enterprise_bot\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"\"\"You are an enterprise integration agent.\r\n    Use Salesforce connector for customer data.\r\n    Use ServiceNow connector for ticket management.\r\n    Use BigQuery connector for analytics queries.\r\n    Always verify data before providing answers.\"\"\",\r\n    tools=[integration_toolset],\r\n)\n"
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
        children: "from google.adk import Agent, Workflow\r\nfrom google.adk.tools import FunctionTool\r\n\r\n# Define specialized agents\r\nintake_agent = Agent(\r\n    name=\"intake\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"\"\"Extract the following from the user query:\r\n    - issue_type: 'technical', 'billing', or 'general'\r\n    - urgency: 'low', 'medium', 'high'\r\n    - customer_id if provided\r\n    Return as JSON.\"\"\",\r\n)\r\n\r\ndiagnosis_agent = Agent(\r\n    name=\"diagnosis\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"\"\"Based on the issue type, determine the root cause.\r\n    For technical issues: check common error patterns.\r\n    For billing issues: review account status.\r\n    Provide detailed diagnosis steps.\"\"\",\r\n)\r\n\r\nresolution_agent = Agent(\r\n    name=\"resolution\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"\"\"Based on the diagnosis, provide step-by-step resolution.\r\n    Include code examples if applicable.\r\n    If escalation needed, explain why.\"\"\",\r\n)\r\n\r\nfeedback_agent = Agent(\r\n    name=\"feedback\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"\"\"Ask the user if the resolution was helpful.\r\n    Summarize the interaction for record-keeping.\r\n    If unresolved, offer to escalate.\"\"\",\r\n)\r\n\r\n# Build the orchestration workflow\r\nsupport_workflow = Workflow(\r\n    name=\"support_pipeline\",\r\n    edges=[\r\n        (\"START\", intake_agent),\r\n        (intake_agent, diagnosis_agent),\r\n        (diagnosis_agent, resolution_agent),\r\n        (resolution_agent, feedback_agent),\r\n        (feedback_agent, \"END\"),\r\n    ],\r\n    max_retries=1,\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1442-task-api--agent-to-agent-delegation",
      children: "14.4.2 Task API — Agent-to-Agent Delegation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Task API provides structured delegation patterns: multi-turn tasks, single-turn output, and mixed modes. Tasks enable agents to delegate sub-problems to specialized sub-agents."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from google.adk import Agent\r\nfrom google.adk.task import Task\r\n\r\n# Define sub-agents for specific domains\r\ncode_reviewer = Agent(\r\n    name=\"code_reviewer\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"Review code for bugs, security issues, and best practices. \"\r\n                \"Provide specific line-level feedback.\",\r\n)\r\n\r\nsecurity_analyzer = Agent(\r\n    name=\"security_analyzer\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"Analyze code for security vulnerabilities. \"\r\n                \"Focus on OWASP Top 10, injection risks, and auth issues.\",\r\n)\r\n\r\nperformance_optimizer = Agent(\r\n    name=\"performance_optimizer\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"Analyze code for performance bottlenecks. \"\r\n                \"Suggest optimizations for time and space complexity.\",\r\n)\r\n\r\n# Define tasks for delegation\r\nreview_task = Task(\r\n    name=\"full_code_review\",\r\n    subtasks=[\r\n        Task(name=\"security_check\", agent=security_analyzer, mode=\"single_turn\"),\r\n        Task(name=\"performance_check\", agent=performance_optimizer, mode=\"single_turn\"),\r\n    ],\r\n    aggregator=\"synthesize\",  # Combine results from subtasks\r\n)\r\n\r\n# Orchestrator agent with task delegation\r\norchestrator_agent = Agent(\r\n    name=\"review_orchestrator\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"\"\"You are a code review orchestrator.\r\n    First, review the code yourself for basic issues.\r\n    Then delegate to specialized reviewers for security and performance.\r\n    Finally, provide a comprehensive summary report.\"\"\",\r\n    tools=[review_task],\r\n)\r\n\r\n# Execute with delegation\r\nevents = Runner.execute(\r\n    agent=orchestrator_agent,\r\n    user_input=\"Review this Python function for potential issues:\\n\"\r\n              \"def process_payment(card_num, amount):\\n\"\r\n              \"    return execute_payment(card_num, amount)\",\r\n    session_id=\"review-session-001\",\r\n)\n"
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
        children: "from google.adk import LlmAgent, InvocationContext\r\nfrom google.adk.tools import FunctionTool\r\nimport json\r\n\r\ndef save_user_context(ctx: InvocationContext, key: str, value: str) -> str:\r\n    \"\"\"Save a value to the user context state.\r\n\r\n    Args:\r\n        ctx: The invocation context (injected automatically)\r\n        key: The state key\r\n        value: The state value\r\n\r\n    Returns:\r\n        Confirmation message\r\n    \"\"\"\r\n    ctx.state[key] = value\r\n    return json.dumps({\"status\": \"saved\", \"key\": key, \"value\": value})\r\n\r\ndef load_user_context(ctx: InvocationContext, key: str) -> str:\r\n    \"\"\"Load a value from the user context state.\r\n\r\n    Args:\r\n        ctx: The invocation context (injected automatically)\r\n        key: The state key to retrieve\r\n\r\n    Returns:\r\n        The stored value or error message\r\n    \"\"\"\r\n    value = ctx.state.get(key)\r\n    if value is None:\r\n        return json.dumps({\"error\": f\"Key '{key}' not found\"})\r\n    return json.dumps({\"key\": key, \"value\": value})\r\n\r\ndef log_artifact(ctx: InvocationContext, filename: str, content: str) -> str:\r\n    \"\"\"Store an artifact (file) in the session.\r\n\r\n    Args:\r\n        ctx: The invocation context (injected automatically)\r\n        filename: The name of the artifact file\r\n        content: The content to store\r\n\r\n    Returns:\r\n        Confirmation with artifact ID\r\n    \"\"\"\r\n    artifact_id = ctx.artifacts.store(filename, content.encode())\r\n    return json.dumps({\"status\": \"stored\", \"artifact_id\": artifact_id, \"filename\": filename})\r\n\r\n# Agent with state management tools\r\nstateful_agent = LlmAgent(\r\n    name=\"stateful_agent\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"\"\"You are a stateful assistant that remembers user preferences.\r\n    Use save_user_context to remember user details.\r\n    Use load_user_context to recall previous information.\r\n    Use log_artifact to store generated files (reports, code, etc.).\r\n    Greet returning users by name if available in context.\"\"\",\r\n    tools=[\r\n        FunctionTool(func=save_user_context),\r\n        FunctionTool(func=load_user_context),\r\n        FunctionTool(func=log_artifact),\r\n    ],\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1444-advanced-routing-patterns",
      children: "14.4.4 Advanced Routing Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ADK 2.0 supports dynamic workflows with code-based routing logic."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from google.adk import Workflow, Agent\r\nfrom google.adk.graph import RoutingRule\r\n\r\n# Dynamic workflow with condition-based routing\r\ndef route_by_sentiment(context) -> str:\r\n    \"\"\"Route to different agents based on sentiment analysis.\"\"\"\r\n    user_message = context.get(\"last_user_message\", \"\")\r\n    negative_words = [\"angry\", \"frustrated\", \"cancel\", \"complaint\", \"refund\"]\r\n    urgent_words = [\"emergency\", \"urgent\", \"immediately\", \"critical\"]\r\n\r\n    if any(word in user_message.lower() for word in urgent_words):\r\n        return \"priority_handler\"\r\n    elif any(word in user_message.lower() for word in negative_words):\r\n        return \"complaint_handler\"\r\n    return \"standard_handler\"\r\n\r\npriority_agent = Agent(\r\n    name=\"priority_handler\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"\"\"This is a PRIORITY escalation.\r\n    Be extremely responsive and empathetic.\r\n    Offer immediate solutions or escalation to a human.\"\"\",\r\n)\r\n\r\ncomplaint_agent = Agent(\r\n    name=\"complaint_handler\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"\"\"Handle customer complaints professionally.\r\n    Acknowledge the issue, apologize, and offer solutions.\r\n    If the complaint is about billing, offer a discount or refund.\"\"\",\r\n)\r\n\r\nstandard_agent = Agent(\r\n    name=\"standard_handler\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"\"\"Handle general inquiries.\r\n    Be helpful and efficient.\r\n    Provide clear, actionable answers.\"\"\",\r\n)\r\n\r\n# Workflow with sentiment-based routing\r\nrouting_workflow = Workflow(\r\n    name=\"intelligent_routing\",\r\n    edges=[\r\n        (\"START\", priority_agent, {\"condition\": \"route_by_sentiment == 'priority_handler'\"}),\r\n        (\"START\", complaint_agent, {\"condition\": \"route_by_sentiment == 'complaint_handler'\"}),\r\n        (\"START\", standard_agent, {\"condition\": \"route_by_sentiment == 'standard_handler'\"}),\r\n        (priority_agent, \"END\"),\r\n        (complaint_agent, \"END\"),\r\n        (standard_agent, \"END\"),\r\n    ],\r\n    routing_fn=route_by_sentiment,\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1445-fan-out--fan-in-pattern",
      children: "14.4.5 Fan-Out / Fan-In Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For parallel task execution, use the fan-out/fan-in pattern."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from google.adk import Workflow, Agent\r\n\r\n# Define research sub-agents for parallel execution\r\nnews_agent = Agent(\r\n    name=\"news_researcher\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"Research latest news about the given topic. Include dates and sources.\",\r\n)\r\n\r\nacademic_agent = Agent(\r\n    name=\"academic_researcher\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"Find academic papers and research studies about the topic. \"\r\n                \"Include authors and publication dates.\",\r\n)\r\n\r\nsocial_agent = Agent(\r\n    name=\"social_researcher\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"Research social media discussions and public opinion about the topic.\",\r\n)\r\n\r\nsynthesis_agent = Agent(\r\n    name=\"synthesis_agent\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"\"\"Synthesize the research findings from all sources.\r\n    Create a comprehensive report with sections:\r\n    1. Executive Summary\r\n    2. Key Findings\r\n    3. Sources & References\r\n    4. Recommendations\"\"\",\r\n)\r\n\r\n# Workflow with fan-out (parallel) and fan-in (aggregation)\r\nresearch_workflow = Workflow(\r\n    name=\"comprehensive_research\",\r\n    edges=[\r\n        (\"START\", news_agent),        # Fan-out: all three run in parallel\r\n        (\"START\", academic_agent),\r\n        (\"START\", social_agent),\r\n        (news_agent, synthesis_agent), # Fan-in: all results feed into synthesis\r\n        (academic_agent, synthesis_agent),\r\n        (social_agent, synthesis_agent),\r\n        (synthesis_agent, \"END\"),\r\n    ],\r\n    execution_mode=\"parallel\",  # Run parallel branches concurrently\r\n)\n"
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
        children: "# agent_deploy.py — Deployment script for Vertex AI Agent Engine\r\nfrom google.adk import Agent\r\nfrom google.adk.tools import FunctionTool\r\nfrom google.cloud import aiplatform\r\nimport os\r\n\r\n# Define the agent (same as development)\r\ndef get_exchange_rate(base: str, target: str) -> str:\r\n    \"\"\"Get the current exchange rate between two currencies.\r\n\r\n    Args:\r\n        base: The base currency code (e.g., USD)\r\n        target: The target currency code (e.g., EUR)\r\n\r\n    Returns:\r\n        JSON string with exchange rate\r\n    \"\"\"\r\n    import json\r\n    # Mock implementation\r\n    rates = {\"USD_EUR\": 0.92, \"EUR_USD\": 1.09, \"USD_GBP\": 0.79, \"GBP_USD\": 1.27}\r\n    key = f\"{base.upper()}_{target.upper()}\"\r\n    rate = rates.get(key)\r\n    if rate is None:\r\n        return json.dumps({\"error\": f\"Rate for {base}/{target} not found\"})\r\n    return json.dumps({\"base\": base, \"target\": target, \"rate\": rate})\r\n\r\nforex_agent = Agent(\r\n    name=\"forex_agent\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"You are a currency exchange assistant. Provide exchange rates using the tool.\",\r\n    tools=[FunctionTool(func=get_exchange_rate)],\r\n)\r\n\r\n# Deploy to Vertex AI Agent Engine\r\ndef deploy_to_agent_engine():\r\n    \"\"\"Deploy the agent to Vertex AI Agent Engine.\"\"\"\r\n    # Initialize Vertex AI\r\n    aiplatform.init(\r\n        project=os.environ[\"GOOGLE_CLOUD_PROJECT\"],\r\n        location=\"us-central1\",\r\n    )\r\n\r\n    # Create Agent Engine deployment\r\n    engine = aiplatform.AgentEngine.create(\r\n        display_name=\"forex-agent\",\r\n        agent=forex_agent,\r\n        description=\"Currency exchange rate agent deployed via ADK\",\r\n        # Authentication config for OAuth\r\n        auth_config={\r\n            \"oauth\": {\r\n                \"client_id\": os.environ[\"OAUTH_CLIENT_ID\"],\r\n                \"client_secret\": os.environ[\"OAUTH_CLIENT_SECRET\"],\r\n            }\r\n        },\r\n    )\r\n    print(f\"Deployed Agent Engine: {engine.resource_name}\")\r\n    print(f\"Endpoint: {engine.endpoint}\")\r\n    return engine\r\n\r\n# if __name__ == \"__main__\":\r\n#     deploy_to_agent_engine()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1452-cloud-run-deployment",
      children: "14.5.2 Cloud Run Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For custom deployment scenarios, wrap the agent in a FastAPI server and deploy to Cloud Run."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# cloud_run_server.py — FastAPI server wrapping ADK agent\r\nfrom fastapi import FastAPI, HTTPException\r\nfrom pydantic import BaseModel\r\nfrom google.adk import Agent, Runner\r\nfrom google.adk.tools import FunctionTool\r\nimport uvicorn\r\nimport os\r\n\r\n# Define the agent\r\ndef sentiment_analysis(text: str) -> str:\r\n    \"\"\"Analyze the sentiment of the given text.\r\n\r\n    Args:\r\n        text: The text to analyze\r\n\r\n    Returns:\r\n        JSON string with sentiment label and score\r\n    \"\"\"\r\n    import json\r\n    # Mock implementation — in production, use a sentiment model\r\n    positive_words = [\"good\", \"great\", \"excellent\", \"happy\", \"wonderful\"]\r\n    negative_words = [\"bad\", \"terrible\", \"awful\", \"sad\", \"horrible\"]\r\n\r\n    score = 0\r\n    for word in text.lower().split():\r\n        if word in positive_words:\r\n            score += 1\r\n        elif word in negative_words:\r\n            score -= 1\r\n\r\n    if score > 0:\r\n        label = \"positive\"\r\n    elif score < 0:\r\n        label = \"negative\"\r\n    else:\r\n        label = \"neutral\"\r\n\r\n    return json.dumps({\"sentiment\": label, \"score\": score})\r\n\r\nagent = Agent(\r\n    name=\"sentiment_agent\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"Analyze the sentiment of user messages using the sentiment_analysis tool.\",\r\n    tools=[FunctionTool(func=sentiment_analysis)],\r\n)\r\n\r\n# FastAPI application\r\napp = FastAPI(title=\"ADK Sentiment Agent\")\r\n\r\nclass QueryRequest(BaseModel):\r\n    message: str\r\n    session_id: str = \"default\"\r\n\r\nclass QueryResponse(BaseModel):\r\n    response: str\r\n    session_id: str\r\n\r\n@app.post(\"/chat\", response_model=QueryResponse)\r\nasync def chat(request: QueryRequest):\r\n    \"\"\"Handle a chat request to the ADK agent.\"\"\"\r\n    try:\r\n        events = Runner.execute(\r\n            agent=agent,\r\n            user_input=request.message,\r\n            session_id=request.session_id,\r\n        )\r\n        # Collect all response content\r\n        responses = []\r\n        for event in events:\r\n            if event.type == \"LLM_RESPONSE\":\r\n                responses.append(event.content)\r\n\r\n        return QueryResponse(\r\n            response=\" \".join(responses),\r\n            session_id=request.session_id,\r\n        )\r\n    except Exception as e:\r\n        raise HTTPException(status_code=500, detail=str(e))\r\n\r\n@app.get(\"/health\")\r\nasync def health():\r\n    \"\"\"Health check endpoint for Cloud Run.\"\"\"\r\n    return {\"status\": \"healthy\", \"agent\": \"sentiment_agent\"}\r\n\r\n# For local testing:\r\n# if __name__ == \"__main__\":\r\n#     uvicorn.run(app, host=\"0.0.0.0\", port=8080)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# cloudrun.yaml — Cloud Run deployment configuration\r\napiVersion: serving.knative.dev/v1\r\nkind: Service\r\nmetadata:\r\n  name: adk-sentiment-agent\r\n  annotations:\r\n    run.googleapis.com/ingress: all\r\nspec:\r\n  template:\r\n    spec:\r\n      containers:\r\n        - image: gcr.io/my-project/adk-sentiment-agent:latest\r\n          ports:\r\n            - containerPort: 8080\r\n          env:\r\n            - name: GOOGLE_CLOUD_PROJECT\r\n              value: \"my-project\"\r\n            - name: GOOGLE_GENAI_USE_VERTEXAI\r\n              value: \"1\"\r\n          resources:\r\n            limits:\r\n              memory: \"1Gi\"\r\n              cpu: \"2\"\r\n          startupProbe:\r\n            httpGet:\r\n              path: /health\r\n            initialDelaySeconds: 10\r\n            periodSeconds: 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1453-local-development-with-adk-web",
      children: "14.5.3 Local Development with ADK Web"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ADK provides a built-in web UI for local development and testing."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install ADK\r\npip install google-adk\r\n\r\n# Run the web UI for a single agent directory\r\nadk web path/to/agent/directory\r\n\r\n# The web UI provides:\r\n# - Interactive chat interface\r\n# - Tool call visualization\r\n# - Session management\r\n# - Multi-turn conversation history\r\n# - Support for multi-agent directories\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# agent_directory/agent.py — Structure for ADK Web\r\nfrom google.adk import LlmAgent\r\nfrom google.adk.tools import FunctionTool\r\nimport json\r\n\r\n# ADK Web automatically discovers agents in the directory\r\ndef calculator(operation: str, a: float, b: float) -> str:\r\n    \"\"\"Perform a mathematical calculation.\r\n\r\n    Args:\r\n        operation: The operation: add, subtract, multiply, divide\r\n        a: First number\r\n        b: Second number\r\n\r\n    Returns:\r\n        JSON string with calculation result\r\n    \"\"\"\r\n    ops = {\r\n        \"add\": a + b,\r\n        \"subtract\": a - b,\r\n        \"multiply\": a * b,\r\n        \"divide\": a / b if b != 0 else \"Error: division by zero\",\r\n    }\r\n    result = ops.get(operation, f\"Unknown operation: {operation}\")\r\n    return json.dumps({\"operation\": operation, \"a\": a, \"b\": b, \"result\": result})\r\n\r\ncalc_agent = LlmAgent(\r\n    name=\"calculator\",\r\n    model=\"gemini-2.5-flash\",\r\n    instruction=\"You are a helpful calculator. Use the calculator tool to perform math operations.\",\r\n    tools=[FunctionTool(func=calculator)],\r\n    temperature=0.1,\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1454-production-monitoring-with-cloud-trace",
      children: "14.5.4 Production Monitoring with Cloud Trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ADK agents deployed to Google Cloud automatically emit traces to Cloud Trace. Additional monitoring can be configured for custom metrics."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# monitoring_config.py — Monitoring setup for production ADK agents\r\nfrom google.cloud import monitoring_v3\r\nfrom google.cloud import trace_v2\r\nimport time\r\n\r\nclass ADKMetricsReporter:\r\n    \"\"\"Reports custom metrics from ADK agent runs to Cloud Monitoring.\"\"\"\r\n\r\n    def __init__(self, project_id: str):\r\n        self.project_id = project_id\r\n        self.metric_client = monitoring_v3.MetricServiceClient()\r\n        self.project_name = f\"projects/{project_id}\"\r\n\r\n    def report_agent_metric(\r\n        self, agent_name: str, metric_type: str, value: float\r\n    ):\r\n        \"\"\"Report a custom metric for an agent.\r\n\r\n        Args:\r\n            agent_name: Name of the ADK agent\r\n            metric_type: Type of metric (latency, accuracy, error_rate)\r\n            value: The metric value\r\n        \"\"\"\r\n        series = monitoring_v3.TimeSeries()\r\n        series.metric.type = f\"custom.googleapis.com/adk/{metric_type}\"\r\n        series.resource.type = \"global\"\r\n        series.resource.labels[\"project_id\"] = self.project_id\r\n\r\n        # Add metric labels\r\n        series.metric.labels[\"agent_name\"] = agent_name\r\n        series.metric.labels[\"environment\"] = \"production\"\r\n\r\n        # Add data point\r\n        now = time.time()\r\n        point = series.points.add()\r\n        point.value.double_value = value\r\n        point.interval.end_time.seconds = int(now)\r\n        point.interval.end_time.nanos = int((now - int(now)) * 1e9)\r\n\r\n        self.metric_client.create_time_series(\r\n            request={\r\n                \"name\": self.project_name,\r\n                \"time_series\": [series],\r\n            }\r\n        )\r\n\r\n    def report_trace_span(\r\n        self, trace_id: str, span_name: str, duration_ms: float\r\n    ):\r\n        \"\"\"Report a custom trace span for debugging.\r\n\r\n        Args:\r\n            trace_id: The trace ID from the agent run\r\n            span_name: Name of the span\r\n            duration_ms: Duration in milliseconds\r\n        \"\"\"\r\n        trace_client = trace_v2.TraceServiceClient()\r\n        project_path = f\"projects/{self.project_id}\"\r\n\r\n        span = trace_v2.Span(\r\n            name=f\"{project_path}/traces/{trace_id}/spans/{span_name}\",\r\n            span_id=span_name.encode()[:16].hex(),\r\n            display_name=trace_v2.TruncatableString(value=span_name),\r\n            start_time={\"seconds\": int(time.time())},\r\n            end_time={\"seconds\": int(time.time() + duration_ms / 1000)},\r\n        )\r\n\r\n        trace_client.create_span(request={\"span\": span})\r\n\r\n# Usage in production\r\n# metrics_reporter = ADKMetricsReporter(project_id=\"my-project\")\r\n# metrics_reporter.report_agent_metric(\"forex_agent\", \"latency\", 1.25)\n"
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
          children: "What is the recommended production deployment target for ADK agents on Google Cloud?\r\na) Cloud Functions\r\nb) Vertex AI Agent Engine\r\nc) Compute Engine\r\nd) App Engine"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Which class does ADK use to connect to Google Workspace services?\r\na) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "WorkspaceTool"
          }), "\r\nb) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "GoogleApiTool"
          }), "\r\nc) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "McpToolset"
          }), "\r\nd) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "IntegrationConnector"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In ADK 2.0, how are agents evaluated within the execution engine?\r\na) As standalone processes\r\nb) As nodes within a Workflow graph\r\nc) As microservices via HTTP\r\nd) As Lambda functions"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the purpose of the Task API in ADK 2.0?\r\na) To schedule periodic agent execution\r\nb) To enable structured agent-to-agent delegation with multi-turn tasks\r\nc) To parallelize LLM calls\r\nd) To cache agent responses"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does ADK generate JSON schemas for function tools?\r\na) Manually defined by the developer\r\nb) Automatically from type hints and docstrings\r\nc) From a separate schema file\r\nd) Using the OpenAPI specification"
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
            children: "How does Google Agent Development Kit (ADK) behave differently at scale — memory, throughput, or precision-wise?"
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
        children: "Name the technique explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Google Agent Development Kit (ADK)\")."
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
        children: "Review complexity and edge cases for the classic problem in this chapter."
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
        }), " You should memorize this chapter's content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "The time complexity of the standard approach to 14 Google Adk is ___. — Answer: O(k) per tool call where k=tool latency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 14 Google Adk is ___. — Answer: infinite loops, tool failures, context overflow"
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
          }), " Your implementation of this technique is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
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
        children: "'Building LLM Powered Applications' by Valentina Alto (Packt) Agent Development Kit (ADK)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 22 — builds the foundation for 14 Google Adk"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 14 Google Adk with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 14 Google Adk fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 14 Google Adk"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 14 Google Adk"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 14 Google Adk?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 14 Google Adk?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 14 Google Adk asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 14 Google Adk?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
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
            children: "14 Google Adk is like a GPS navigation system"
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
          }), " — this chapter contributes the Google Agent Development Kit (ADK) skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
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
          children: "An AI agent is an autonomous system that uses an LLM as its reasoning engine to perceive inputs, decide actions, call tools, observe results, and iterate until a task is complete."
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
          children: "Most common agent mistake: no max_steps limit causes infinite loops. Always set max_steps=10-20 and handle the timeout case explicitly with a fallback response."
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
          children: "Agent complexity: O(k * t) where k=steps taken, t=average tool latency. Each LLM call is O(n^2) attention over context. Total cost grows linearly with steps."
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
          children: "Agents are NOT the right choice when: (1) a single LLM call suffices, (2) deterministic pipelines are required, (3) latency < 500ms is needed, (4) the task has no external tool requirements."
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
          children: "Production agent stack: LangGraph for stateful workflows, OpenAI function calling or Anthropic tool use for structured tool invocation, LangSmith for tracing and debugging."
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
        }), " — Claude's native function calling interface Agent Development Kit (ADK)"]
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
        }), ": Add structured logging at each stage of the 14 Google Adk pipeline to identify exactly where the failure occurs."]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_14_google_adk(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 14 Google Adk.\r\n\r\n    Key concepts: tools, memory, planning, execution, observation\r\n    Complexity: O(k) per tool call where k=tool latency\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 14 Google Adk here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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