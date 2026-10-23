"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[1049],{

/***/ 51187
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_22_advanced_ai_agents_15_a_2_a_protocol_md_681_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-22-advanced-ai-agents-15-a-2-a-protocol-md-681.json
const site_docs_courses_ai_engineering_placement_22_advanced_ai_agents_15_a_2_a_protocol_md_681_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/advanced-ai-agents/15-a2a-protocol","title":"Agent-to-Agent (A2A) Protocol","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/22-advanced-ai-agents/15-a2a-protocol.md","sourceDirName":"courses/ai-engineering-placement/22-advanced-ai-agents","slug":"/ai-engineering-placement/22-advanced-ai-agents/15-a2a-protocol","permalink":"/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/15-a2a-protocol","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":286,"frontMatter":{"id":"15-a2a-protocol","slug":"/ai-engineering-placement/22-advanced-ai-agents/15-a2a-protocol","title":"Agent-to-Agent (A2A) Protocol","sidebar_label":"Agent-to-Agent (A2A) Protocol","sidebar_position":286},"sidebar":"placementSidebar","previous":{"title":"Google Agent Development Kit (ADK)","permalink":"/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/14-google-adk"},"next":{"title":"Visual Notes","permalink":"/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/visual-notes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/22-advanced-ai-agents/15-a2a-protocol.md


const frontMatter = {
	id: '15-a2a-protocol',
	slug: '/ai-engineering-placement/22-advanced-ai-agents/15-a2a-protocol',
	title: 'Agent-to-Agent (A2A) Protocol',
	sidebar_label: 'Agent-to-Agent (A2A) Protocol',
	sidebar_position: 286
};
const contentTitle = 'Agent-to-Agent (A2A) Protocol';

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
  "value": "15.1 A2A Protocol Overview",
  "id": "151-a2a-protocol-overview",
  "level": 2
}, {
  "value": "15.1.1 Protocol Architecture",
  "id": "1511-protocol-architecture",
  "level": 3
}, {
  "value": "15.1.2 Agent Card Definition",
  "id": "1512-agent-card-definition",
  "level": 3
}, {
  "value": "15.2 Communication Model",
  "id": "152-communication-model",
  "level": 2
}, {
  "value": "15.2.1 Agent Discovery Flow",
  "id": "1521-agent-discovery-flow",
  "level": 3
}, {
  "value": "15.2.2 Capability Announcement &amp; Discovery",
  "id": "1522-capability-announcement--discovery",
  "level": 3
}, {
  "value": "15.2.3 Task Delegation Protocol",
  "id": "1523-task-delegation-protocol",
  "level": 3
}, {
  "value": "15.3 Message Format",
  "id": "153-message-format",
  "level": 2
}, {
  "value": "15.3.1 Task State Machine",
  "id": "1531-task-state-machine",
  "level": 3
}, {
  "value": "15.3.2 JSON-RPC Message Structure",
  "id": "1532-json-rpc-message-structure",
  "level": 3
}, {
  "value": "15.3.3 Streaming with Server-Sent Events",
  "id": "1533-streaming-with-server-sent-events",
  "level": 3
}, {
  "value": "15.4 Security",
  "id": "154-security",
  "level": 2
}, {
  "value": "15.4.1 Authentication &amp; Authorization",
  "id": "1541-authentication--authorization",
  "level": 3
}, {
  "value": "15.4.2 Push Notifications",
  "id": "1542-push-notifications",
  "level": 3
}, {
  "value": "15.5 Integration Patterns",
  "id": "155-integration-patterns",
  "level": 2
}, {
  "value": "15.5.1 A2A with MCP — The Complete Stack",
  "id": "1551-a2a-with-mcp--the-complete-stack",
  "level": 3
}, {
  "value": "15.5.2 Bridging A2A and MCP",
  "id": "1552-bridging-a2a-and-mcp",
  "level": 3
}, {
  "value": "15.5.3 Enterprise Deployment Patterns",
  "id": "1553-enterprise-deployment-patterns",
  "level": 3
}, {
  "value": "15.6 Comparison: A2A vs MCP vs Function Calling",
  "id": "156-comparison-a2a-vs-mcp-vs-function-calling",
  "level": 2
}, {
  "value": "15.6.1 Decision Matrix",
  "id": "1561-decision-matrix",
  "level": 3
}, {
  "value": "15.6.2 A2A vs MCP — Detailed Comparison",
  "id": "1562-a2a-vs-mcp--detailed-comparison",
  "level": 3
}, {
  "value": "15.6.3 When to Use A2A",
  "id": "1563-when-to-use-a2a",
  "level": 3
}, {
  "value": "15.6.4 When Not to Use A2A",
  "id": "1564-when-not-to-use-a2a",
  "level": 3
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Q1: Explain the Agent-to-Agent (A2A) protocol and how it differs from MCP.",
  "id": "q1-explain-the-agent-to-agent-a2a-protocol-and-how-it-differs-from-mcp",
  "level": 3
}, {
  "value": "Q2: What is an Agent Card and what information does it contain?",
  "id": "q2-what-is-an-agent-card-and-what-information-does-it-contain",
  "level": 3
}, {
  "value": "Q3: Describe the A2A task state machine and its transitions.",
  "id": "q3-describe-the-a2a-task-state-machine-and-its-transitions",
  "level": 3
}, {
  "value": "Q4: How does A2A handle agent discovery?",
  "id": "q4-how-does-a2a-handle-agent-discovery",
  "level": 3
}, {
  "value": "Q5: Explain identity propagation in A2A and why it matters.",
  "id": "q5-explain-identity-propagation-in-a2a-and-why-it-matters",
  "level": 3
}, {
  "value": "Q6: How does A2A compare to function calling in LLMs?",
  "id": "q6-how-does-a2a-compare-to-function-calling-in-llms",
  "level": 3
}, {
  "value": "Q7: What transport protocols does A2A support and when would you use each?",
  "id": "q7-what-transport-protocols-does-a2a-support-and-when-would-you-use-each",
  "level": 3
}, {
  "value": "Q8: How do you secure an A2A deployment in production?",
  "id": "q8-how-do-you-secure-an-a2a-deployment-in-production",
  "level": 3
}, {
  "value": "Q9: Describe a real-world architecture using both A2A and MCP.",
  "id": "q9-describe-a-real-world-architecture-using-both-a2a-and-mcp",
  "level": 3
}, {
  "value": "Q10: What are the limitations of A2A you would consider before adopting it?",
  "id": "q10-what-are-the-limitations-of-a2a-you-would-consider-before-adopting-it",
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
  "value": "Questions",
  "id": "questions",
  "level": 3
}, {
  "value": "Answers",
  "id": "answers",
  "level": 3
}, {
  "value": "Common Mistakes",
  "id": "common-mistakes",
  "level": 2
}, {
  "value": "Revision Notes",
  "id": "revision-notes",
  "level": 2
}, {
  "value": "Exercises (5)",
  "id": "exercises-5",
  "level": 2
}, {
  "value": "Exercise 1: Build an Agent Card",
  "id": "exercise-1-build-an-agent-card",
  "level": 3
}, {
  "value": "Exercise 2: Task Delegation Flow",
  "id": "exercise-2-task-delegation-flow",
  "level": 3
}, {
  "value": "Exercise 3: A2A + MCP Integration",
  "id": "exercise-3-a2a--mcp-integration",
  "level": 3
}, {
  "value": "Exercise 4: Security Authorization",
  "id": "exercise-4-security-authorization",
  "level": 3
}, {
  "value": "Exercise 5: Protocol Decision Framework",
  "id": "exercise-5-protocol-decision-framework",
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
        id: "agent-to-agent-a2a-protocol",
        children: "Agent-to-Agent (A2A) Protocol"
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
            children: "Understand Google's A2A protocol architecture, agent cards, and interoperability model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement agent discovery, capability announcement, and task delegation flows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Construct and parse A2A JSON-RPC messages with task states, artifacts, and parts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply security patterns: authentication, authorization, identity propagation, push notifications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare A2A with MCP, function calling, and decide when to use each in production"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Agent-to-Agent (A2A) protocol is Google's open standard for enabling autonomous agents from different vendors, frameworks, and platforms to communicate and collaborate directly. As the AI ecosystem expands beyond single-agent applications into multi-agent systems, the need for a universal interoperability layer becomes critical. A2A fills this gap by defining how agents discover each other, announce capabilities, delegate tasks, and exchange artifacts using a standardized JSON-RPC message format."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Unlike the Model Context Protocol (MCP), which standardizes how agents connect to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tools and data sources"
      }), ", A2A standardizes how agents connect to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "other agents"
      }), ". This distinction is fundamental: MCP is agent-to-tool, A2A is agent-to-agent. Together they form a complete interoperability stack for the emerging agent ecosystem."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Google announced A2A in April 2025 alongside its Gemini model updates, positioning it as an open protocol supported by partners including Atlassian, Salesforce, Box, and多家 others. The protocol is designed to be transport-agnostic (HTTP/2, WebSockets, gRPC), security-first, and capability-driven."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic understanding of JSON-RPC 2.0 protocol"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with REST API design and HTTP concepts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of agent fundamentals (Module 22, Chapter 1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Knowledge of MCP protocol (Module 22, Chapter 4) for comparison"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python async/await patterns for code examples"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A2A (Agent-to-Agent)"
      }), ": Google's open protocol for direct agent-to-agent communication, enabling interoperability across frameworks and platforms."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Card"
      }), ": A JSON metadata document published by an agent describing its identity, capabilities, authentication requirements, and endpoint URL. Similar in concept to an OpenAPI spec for agents."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task"
      }), ": The fundamental unit of work in A2A. A task has an ID, a state machine lifecycle, and produces artifacts."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Artifact"
      }), ": A named output produced by an agent as part of task execution. Artifacts contain one or more ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "parts"
      }), " (text, file, or data)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Part"
      }), ": The atomic content unit within an artifact. Types include ", (0,jsx_runtime.jsx)(_components.code, {
        children: "text"
      }), " (string content), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "file"
      }), " (binary with MIME type), and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "data"
      }), " (structured JSON)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Discovery"
      }), ": The process by which one agent learns about another agent's existence and capabilities, typically via an agent card URL or registry."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Capability Announcement"
      }), ": Each agent card lists the capabilities (specific skills or actions) the agent supports. Agents use this to decide which agent to delegate a task to."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Delegation"
      }), ": The act of one agent sending a task request to another agent and optionally monitoring its progress."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Identity Propagation"
      }), ": The mechanism by which an agent's authentication context is carried forward when delegating to another agent, preserving the original caller's identity."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Push Notification"
      }), ": A webhook-based mechanism where an agent sends status updates about a long-running task back to the requesting agent."]
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
            children: "15.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A2A Protocol Overview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent cards, protocol stack, transport"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Communication Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discovery, capability announcement, task delegation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Message Format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON-RPC, task states, artifacts, parts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication, authorization, identity, push notifications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integration Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A2A with MCP, bridging frameworks, enterprise deployment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A2A vs MCP vs function calling, decision framework"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    subgraph Agent_A[Agent A - Requester]\r\n        A1[A2A Client]\r\n        A2[Task Manager]\r\n    end\r\n    subgraph Agent_B[Agent B - Remote]\r\n        B1[A2A Server]\r\n        B2[Capability Executor]\r\n    end\r\n    subgraph Registry[Agent Registry / DNS]\r\n        R1[Agent Cards]\r\n        R2[Discovery Endpoints]\r\n    end\r\n\r\n    A1 -->|1. Fetch Agent Card| R1\r\n    A1 -->|2. Select Capability| B1\r\n    A2 -->|3. Send Task (JSON-RPC)| B1\r\n    B1 -->|4. Execute| B2\r\n    B2 -->|5. Return Artifacts| B1\r\n    B1 -->|6. Task Response| A1\r\n    A1 -->|7. Process Results| A2\r\n\r\n    style Agent_A fill:#e1f5fe,stroke:#01579b\r\n    style Agent_B fill:#f3e5f5,stroke:#7b1fa2\r\n    style Registry fill:#fff3e0,stroke:#e65100"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "151-a2a-protocol-overview",
      children: "15.1 A2A Protocol Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The A2A protocol operates on a simple premise: every agent that wants to be discoverable publishes an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Card"
      }), " — a JSON document describing who it is, what it can do, and how to reach it. When Agent A needs help with a task that falls outside its capabilities, it fetches Agent B's card, verifies compatibility, and sends a task request via JSON-RPC."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1511-protocol-architecture",
      children: "15.1.1 Protocol Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TB\r\n    subgraph Transport[\"Transport Layer (HTTP/2, WebSocket, gRPC)\"]\r\n        direction LR\r\n        T1[\"JSON-RPC 2.0\"]\r\n        T2[\"Streaming SSE\"]\r\n        T3[\"Push Webhooks\"]\r\n    end\r\n\r\n    subgraph Messages[\"A2A Message Layer\"]\r\n        M1[\"Task Request\"]\r\n        M2[\"Task Status\"]\r\n        M3[\"Artifact Delivery\"]\r\n        M4[\"Cancel Task\"]\r\n    end\r\n\r\n    subgraph Security[\"Security Layer\"]\r\n        S1[\"OAuth 2.0 / JWT\"]\r\n        S2[\"mTLS\"]\r\n        S3[\"Identity Propagation\"]\r\n    end\r\n\r\n    subgraph Discovery[\"Discovery Layer\"]\r\n        D1[\"Agent Card\"]\r\n        D2[\"Capability List\"]\r\n        D3[\"Authentication Requirements\"]\r\n    end\r\n\r\n    Discovery --> Security\r\n    Security --> Messages\r\n    Messages --> Transport"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1512-agent-card-definition",
      children: "15.1.2 Agent Card Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An agent card is the public face of an agent. It follows a well-defined JSON schema that allows any compliant client to understand the agent's capabilities and how to interact with it."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nAgent Card Schema — the metadata document every A2A agent publishes.\r\nAnalogous to OpenAPI for REST APIs, but specifically for agents.\r\n\"\"\"\r\n\r\nfrom dataclasses import dataclass, field\r\nfrom typing import List, Optional, Dict, Any\r\nfrom enum import Enum\r\nimport json\r\n\r\nclass AuthenticationScheme(Enum):\r\n    \"\"\"Supported authentication methods for A2A agents.\"\"\"\r\n    NONE = \"none\"\r\n    BEARER = \"bearer\"          # OAuth 2.0 / JWT Bearer token\r\n    BASIC = \"basic\"            # HTTP Basic Auth (legacy, avoid in production)\r\n    MTLS = \"mtls\"              # Mutual TLS\r\n    OAUTH2_CLIENT_CREDENTIALS = \"oauth2_client_credentials\"\r\n\r\n@dataclass\r\nclass AuthenticationInfo:\r\n    \"\"\"Describes how to authenticate with this agent.\"\"\"\r\n    schemes: List[AuthenticationScheme] = field(default_factory=lambda: [AuthenticationScheme.NONE])\r\n    credentials_url: Optional[str] = None       # Token endpoint for OAuth2\r\n    scopes: List[str] = field(default_factory=list)  # Required OAuth scopes\r\n\r\n@dataclass\r\nclass Capability:\r\n    \"\"\"A single capability this agent exposes.\"\"\"\r\n    name: str                                    # e.g., \"code_review\"\r\n    description: str                             # Human-readable explanation\r\n    input_schema: Optional[Dict[str, Any]] = None   # JSON Schema for task input\r\n    output_schema: Optional[Dict[str, Any]] = None  # JSON Schema for task output\r\n    cost_per_task: Optional[float] = None        # Cost in USD (for billing)\r\n    estimated_duration_seconds: Optional[int] = None\r\n    requires_human_approval: bool = False\r\n    tags: List[str] = field(default_factory=list)\r\n\r\n@dataclass\r\nclass AgentCard:\r\n    \"\"\"\r\n    The root metadata document for an A2A agent.\r\n    Every A2A-compliant agent MUST expose this at a well-known URL.\r\n    \"\"\"\r\n    agent_name: str                              # Human-readable name\r\n    agent_version: str                           # Semantic version\r\n    description: str                             # What this agent does\r\n    agent_id: str                                # Unique identifier (e.g., \"com.company.agent-name\")\r\n    card_url: str                                # URL where this card is hosted\r\n    endpoints: List[str]                         # A2A API endpoints (typically one)\r\n    authentication: AuthenticationInfo\r\n    capabilities: List[Capability]\r\n    supported_transports: List[str] = field(default_factory=lambda: [\"http\"])  # http, ws, grpc\r\n    max_concurrent_tasks: int = 10               # Rate limiting info\r\n    documentation_url: Optional[str] = None\r\n    terms_of_service_url: Optional[str] = None\r\n    privacy_policy_url: Optional[str] = None\r\n\r\n    def to_dict(self) -> Dict[str, Any]:\r\n        \"\"\"Serialize the agent card to a JSON-compatible dictionary.\"\"\"\r\n        return {\r\n            \"agent_name\": self.agent_name,\r\n            \"agent_version\": self.agent_version,\r\n            \"description\": self.description,\r\n            \"agent_id\": self.agent_id,\r\n            \"card_url\": self.card_url,\r\n            \"endpoints\": self.endpoints,\r\n            \"authentication\": {\r\n                \"schemes\": [s.value for s in self.authentication.schemes],\r\n                \"credentials_url\": self.authentication.credentials_url,\r\n                \"scopes\": self.authentication.scopes,\r\n            },\r\n            \"capabilities\": [\r\n                {\r\n                    \"name\": c.name,\r\n                    \"description\": c.description,\r\n                    \"input_schema\": c.input_schema,\r\n                    \"output_schema\": c.output_schema,\r\n                    \"cost_per_task\": c.cost_per_task,\r\n                    \"estimated_duration_seconds\": c.estimated_duration_seconds,\r\n                    \"requires_human_approval\": c.requires_human_approval,\r\n                    \"tags\": c.tags,\r\n                }\r\n                for c in self.capabilities\r\n            ],\r\n            \"supported_transports\": self.supported_transports,\r\n            \"max_concurrent_tasks\": self.max_concurrent_tasks,\r\n            \"documentation_url\": self.documentation_url,\r\n            \"terms_of_service_url\": self.terms_of_service_url,\r\n            \"privacy_policy_url\": self.privacy_policy_url,\r\n        }\r\n\r\n    @classmethod\r\n    def from_dict(cls, data: Dict[str, Any]) -> \"AgentCard\":\r\n        \"\"\"Deserialize from a dictionary.\"\"\"\r\n        auth_data = data.get(\"authentication\", {})\r\n        authentication = AuthenticationInfo(\r\n            schemes=[AuthenticationScheme(s) for s in auth_data.get(\"schemes\", [\"none\"])],\r\n            credentials_url=auth_data.get(\"credentials_url\"),\r\n            scopes=auth_data.get(\"scopes\", []),\r\n        )\r\n        capabilities = [\r\n            Capability(\r\n                name=c[\"name\"],\r\n                description=c[\"description\"],\r\n                input_schema=c.get(\"input_schema\"),\r\n                output_schema=c.get(\"output_schema\"),\r\n                cost_per_task=c.get(\"cost_per_task\"),\r\n                estimated_duration_seconds=c.get(\"estimated_duration_seconds\"),\r\n                requires_human_approval=c.get(\"requires_human_approval\", False),\r\n                tags=c.get(\"tags\", []),\r\n            )\r\n            for c in data.get(\"capabilities\", [])\r\n        ]\r\n        return cls(\r\n            agent_name=data[\"agent_name\"],\r\n            agent_version=data[\"agent_version\"],\r\n            description=data[\"description\"],\r\n            agent_id=data[\"agent_id\"],\r\n            card_url=data[\"card_url\"],\r\n            endpoints=data[\"endpoints\"],\r\n            authentication=authentication,\r\n            capabilities=capabilities,\r\n            supported_transports=data.get(\"supported_transports\", [\"http\"]),\r\n            max_concurrent_tasks=data.get(\"max_concurrent_tasks\", 10),\r\n            documentation_url=data.get(\"documentation_url\"),\r\n            terms_of_service_url=data.get(\"terms_of_service_url\"),\r\n            privacy_policy_url=data.get(\"privacy_policy_url\"),\r\n        )\r\n\r\n# Example: Create an agent card for a code review agent\r\ncode_review_card = AgentCard(\r\n    agent_name=\"CodeReviewerAI\",\r\n    agent_version=\"2.1.0\",\r\n    description=\"Expert code review agent. Analyzes pull requests for bugs, security issues, and style violations.\",\r\n    agent_id=\"com.startup.codereviewer\",\r\n    card_url=\"https://agents.startup.com/codereviewer/.well-known/agent-card.json\",\r\n    endpoints=[\"https://agents.startup.com/codereviewer/a2a\"],\r\n    authentication=AuthenticationInfo(\r\n        schemes=[AuthenticationScheme.BEARER],\r\n        credentials_url=\"https://auth.startup.com/oauth/token\",\r\n        scopes=[\"codereview:read\", \"codereview:write\"],\r\n    ),\r\n    capabilities=[\r\n        Capability(\r\n            name=\"review_pull_request\",\r\n            description=\"Review a GitHub pull request and return inline comments, summary, and risk score.\",\r\n            estimated_duration_seconds=120,\r\n            tags=[\"code-review\", \"security\", \"quality\"],\r\n        ),\r\n        Capability(\r\n            name=\"analyze_vulnerability\",\r\n            description=\"Deep-dive security analysis of a code snippet. Returns CVSS score and fix suggestions.\",\r\n            estimated_duration_seconds=60,\r\n            tags=[\"security\", \"vulnerability\"],\r\n        ),\r\n    ],\r\n    max_concurrent_tasks=25,\r\n    documentation_url=\"https://docs.startup.com/codereviewer\",\r\n)\r\n\r\n# Serialize to JSON for publishing\r\nprint(json.dumps(code_review_card.to_dict(), indent=2))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "152-communication-model",
      children: "15.2 Communication Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The A2A communication model follows a discover-delegate-deliver pattern. Agents first discover each other's capabilities, then delegate tasks with well-defined inputs, and finally receive artifacts as outputs. The model supports both synchronous (short-lived) and asynchronous (long-running) tasks."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1521-agent-discovery-flow",
      children: "15.2.1 Agent Discovery Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "sequenceDiagram\r\n    participant RA as Requester Agent\r\n    participant AR as Agent Registry (DNS/Well-Known)\r\n    participant TA as Target Agent\r\n\r\n    RA->>AR: 1. Resolve agent-id or URL\r\n    AR-->>RA: 2. Agent Card (JSON)\r\n    RA->>RA: 3. Parse capabilities, auth requirements\r\n    RA->>TA: 4. POST /a2a/tasks_send (auth header)\r\n    TA->>TA: 5. Validate auth, check capacity\r\n    TA-->>RA: 6. TaskAccepted { task_id, status: \"submitted\" }\r\n    TA->>TA: 7. Execute capability\r\n    TA-->>RA: 8. TaskStatusUpdate { status: \"working\", progress: 50% }\r\n    TA->>TA: 9. Complete execution\r\n    TA-->>RA: 10. TaskArtifact { artifact_id, parts[...] }\r\n    TA-->>RA: 11. TaskFinal { status: \"completed\" }"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1522-capability-announcement--discovery",
      children: "15.2.2 Capability Announcement & Discovery"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Capability discovery can happen through three mechanisms:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Direct Card Fetch"
        }), ": The requester knows the agent's card URL and fetches it directly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Well-Known Endpoint"
        }), ": The agent serves its card at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/.well-known/agent-card.json"
        }), " (similar to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/.well-known/openid-configuration"
        }), " in OIDC)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Directory Registry"
        }), ": A centralized or federated registry indexes agent cards for search."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nAgent Discovery and Capability Matching\r\n\"\"\"\r\nfrom dataclasses import dataclass\r\nfrom typing import Optional\r\nimport httpx  # Async HTTP client\r\nimport json\r\n\r\nclass AgentDiscoveryClient:\r\n    \"\"\"\r\n    Client that fetches and caches agent cards, and matches\r\n    capabilities to task requirements.\r\n    \"\"\"\r\n\r\n    def __init__(self):\r\n        self._card_cache: dict[str, AgentCard] = {}\r\n        self._http_client = httpx.AsyncClient(timeout=10.0)\r\n\r\n    async def fetch_agent_card(self, card_url: str) -> AgentCard:\r\n        \"\"\"Fetch and cache an agent card from its URL.\"\"\"\r\n        if card_url in self._card_cache:\r\n            return self._card_cache[card_url]\r\n\r\n        response = await self._http_client.get(card_url)\r\n        response.raise_for_status()\r\n        card_data = response.json()\r\n        card = AgentCard.from_dict(card_data)\r\n        self._card_cache[card_url] = card\r\n        return card\r\n\r\n    async def discover_from_well_known(\r\n        self, base_url: str\r\n    ) -> AgentCard:\r\n        \"\"\"Discover an agent card from its well-known endpoint.\"\"\"\r\n        well_known_url = (\r\n            f\"{base_url.rstrip('/')}/.well-known/agent-card.json\"\r\n        )\r\n        return await self.fetch_agent_card(well_known_url)\r\n\r\n    def find_capability(\r\n        self,\r\n        card: AgentCard,\r\n        capability_name: Optional[str] = None,\r\n        tags: Optional[list[str]] = None,\r\n    ) -> Optional[Capability]:\r\n        \"\"\"\r\n        Find the best matching capability on an agent card.\r\n        Can match by exact name or by tag intersection.\r\n        \"\"\"\r\n        if capability_name:\r\n            for cap in card.capabilities:\r\n                if cap.name == capability_name:\r\n                    return cap\r\n\r\n        if tags:\r\n            tag_set = set(tags)\r\n            best_match = None\r\n            best_overlap = 0\r\n            for cap in card.capabilities:\r\n                overlap = len(tag_set & set(cap.tags))\r\n                if overlap > best_overlap:\r\n                    best_overlap = overlap\r\n                    best_match = cap\r\n            return best_match\r\n\r\n        return None\r\n\r\n    async def find_agent_for_task(\r\n        self,\r\n        task_description: str,\r\n        required_tags: list[str],\r\n        registry_urls: list[str],\r\n    ) -> tuple[Optional[AgentCard], Optional[Capability]]:\r\n        \"\"\"\r\n        Search multiple registries/agent cards to find an agent\r\n        that can handle a given task.\r\n        \"\"\"\r\n        for url in registry_urls:\r\n            try:\r\n                card = await self.fetch_agent_card(url)\r\n                cap = self.find_capability(card, tags=required_tags)\r\n                if cap:\r\n                    return card, cap\r\n            except Exception:\r\n                continue  # Try next registry\r\n        return None, None\r\n\r\n    async def close(self):\r\n        await self._http_client.aclose()\r\n\r\n# Example: Discovery in action\r\nasync def discover_code_review_agent():\r\n    client = AgentDiscoveryClient()\r\n\r\n    # Fetch the code review agent's card\r\n    card = await client.discover_from_well_known(\r\n        \"https://agents.startup.com/codereviewer\"\r\n    )\r\n    print(f\"Discovered agent: {card.agent_name} v{card.agent_version}\")\r\n    print(f\"Capabilities: {[c.name for c in card.capabilities]}\")\r\n    print(f\"Auth required: {[s.value for s in card.authentication.schemes]}\")\r\n\r\n    # Find a specific capability\r\n    review_cap = client.find_capability(card, capability_name=\"review_pull_request\")\r\n    if review_cap:\r\n        print(f\"Found capability: {review_cap.name}\")\r\n        print(f\"  Description: {review_cap.description}\")\r\n        print(f\"  Est. duration: {review_cap.estimated_duration_seconds}s\")\r\n\r\n    await client.close()\r\n\r\n# Run: import asyncio; asyncio.run(discover_code_review_agent())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1523-task-delegation-protocol",
      children: "15.2.3 Task Delegation Protocol"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Task delegation is the core interaction pattern in A2A. The requesting agent sends a task specification to the target agent, which then executes it and returns results. A2A defines two delegation modes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "tasks_send"
          })
        }), ": Synchronous-style — the requester sends a task and receives a response. For long-running tasks, the response includes a task ID and the requester polls for updates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "tasks_sendSubscribe"
          })
        }), ": Streaming — the requester sends a task and receives a stream of SSE (Server-Sent Events) updates as the task progresses."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nTask Delegation — sending tasks to remote agents via A2A.\r\n\"\"\"\r\nimport uuid\r\nimport json\r\nfrom dataclasses import dataclass, field\r\nfrom typing import Optional\r\nfrom enum import Enum\r\nfrom datetime import datetime\r\nimport httpx\r\n\r\nclass TaskState(str, Enum):\r\n    \"\"\"The A2A task state machine.\"\"\"\r\n    SUBMITTED = \"submitted\"            # Task received, pending processing\r\n    WORKING = \"working\"                # Task is being executed\r\n    INPUT_REQUIRED = \"input-required\"  # Agent needs more info to proceed\r\n    COMPLETED = \"completed\"            # Task finished successfully\r\n    FAILED = \"failed\"                  # Task encountered an error\r\n    CANCELED = \"canceled\"              # Task was canceled by requester\r\n\r\nclass PartType(str, Enum):\r\n    \"\"\"Types of content parts in artifacts.\"\"\"\r\n    TEXT = \"text\"\r\n    FILE = \"file\"\r\n    DATA = \"data\"\r\n\r\n@dataclass\r\nclass Part:\r\n    \"\"\"An atomic content unit within an artifact.\"\"\"\r\n    type: PartType\r\n    text: Optional[str] = None\r\n    file_url: Optional[str] = None     # For file parts\r\n    mime_type: Optional[str] = None    # e.g., \"image/png\", \"application/json\"\r\n    data: Optional[dict] = None        # For structured data parts\r\n\r\n@dataclass\r\nclass Artifact:\r\n    \"\"\"An output produced by a task — contains one or more parts.\"\"\"\r\n    artifact_id: str\r\n    name: str\r\n    description: Optional[str] = None\r\n    parts: list[Part] = field(default_factory=list)\r\n    created_at: str = field(default_factory=lambda: datetime.utcnow().isoformat() + \"Z\")\r\n\r\n@dataclass\r\nclass A2ATask:\r\n    \"\"\"\r\n    The fundamental unit of work in A2A.\r\n    Contains the task ID, state, input message, and output artifacts.\r\n    \"\"\"\r\n    task_id: str\r\n    state: TaskState\r\n    agent_id: str                       # Which agent is handling this\r\n    capability: str                     # Which capability was invoked\r\n    input_parts: list[Part] = field(default_factory=list)\r\n    artifacts: list[Artifact] = field(default_factory=list)\r\n    status_message: Optional[str] = None\r\n    progress_percent: Optional[int] = None\r\n    created_at: str = field(default_factory=lambda: datetime.utcnow().isoformat() + \"Z\")\r\n    updated_at: str = field(default_factory=lambda: datetime.utcnow().isoformat() + \"Z\")\r\n    error_message: Optional[str] = None\r\n\r\n    def to_json_rpc_request(self) -> dict:\r\n        \"\"\"Convert this task to a JSON-RPC 2.0 request for tasks_send.\"\"\"\r\n        return {\r\n            \"jsonrpc\": \"2.0\",\r\n            \"id\": str(uuid.uuid4()),\r\n            \"method\": \"tasks_send\",\r\n            \"params\": {\r\n                \"task_id\": self.task_id,\r\n                \"agent_id\": self.agent_id,\r\n                \"capability\": self.capability,\r\n                \"input\": {\r\n                    \"parts\": [\r\n                        {\r\n                            \"type\": p.type.value,\r\n                            \"text\": p.text,\r\n                            \"file_url\": p.file_url,\r\n                            \"mime_type\": p.mime_type,\r\n                            \"data\": p.data,\r\n                        }\r\n                        for p in self.input_parts\r\n                    ]\r\n                },\r\n            },\r\n        }\r\n\r\n    @classmethod\r\n    def from_json_rpc_response(cls, response: dict) -> \"A2ATask\":\r\n        \"\"\"Parse a JSON-RPC 2.0 response into an A2ATask.\"\"\"\r\n        result = response.get(\"result\", {})\r\n        task_data = result.get(\"task\", result)\r\n\r\n        artifacts = []\r\n        for art in task_data.get(\"artifacts\", []):\r\n            parts = [\r\n                Part(\r\n                    type=PartType(p[\"type\"]),\r\n                    text=p.get(\"text\"),\r\n                    file_url=p.get(\"file_url\"),\r\n                    mime_type=p.get(\"mime_type\"),\r\n                    data=p.get(\"data\"),\r\n                )\r\n                for p in art.get(\"parts\", [])\r\n            ]\r\n            artifacts.append(Artifact(\r\n                artifact_id=art[\"artifact_id\"],\r\n                name=art[\"name\"],\r\n                description=art.get(\"description\"),\r\n                parts=parts,\r\n                created_at=art.get(\"created_at\", \"\"),\r\n            ))\r\n\r\n        return cls(\r\n            task_id=task_data[\"task_id\"],\r\n            state=TaskState(task_data[\"status\"]),\r\n            agent_id=task_data.get(\"agent_id\", \"\"),\r\n            capability=task_data.get(\"capability\", \"\"),\r\n            artifacts=artifacts,\r\n            status_message=task_data.get(\"status_message\"),\r\n            progress_percent=task_data.get(\"progress_percent\"),\r\n            error_message=task_data.get(\"error_message\"),\r\n        )\r\n\r\nclass A2AClient:\r\n    \"\"\"\r\n    Client for sending tasks to A2A-compliant agents.\r\n    Handles authentication, request construction, and response parsing.\r\n    \"\"\"\r\n\r\n    def __init__(self, auth_token: Optional[str] = None):\r\n        self._auth_token = auth_token\r\n        self._http_client = httpx.AsyncClient(timeout=120.0)\r\n\r\n    def _get_headers(self) -> dict:\r\n        headers = {\"Content-Type\": \"application/json\"}\r\n        if self._auth_token:\r\n            headers[\"Authorization\"] = f\"Bearer {self._auth_token}\"\r\n        return headers\r\n\r\n    async def send_task(\r\n        self,\r\n        agent_endpoint: str,\r\n        capability: str,\r\n        input_parts: list[Part],\r\n        agent_id: str = \"generic-agent\",\r\n    ) -> A2ATask:\r\n        \"\"\"Send a task to an A2A agent and return the initial response.\"\"\"\r\n        task = A2ATask(\r\n            task_id=f\"task-{uuid.uuid4().hex[:12]}\",\r\n            state=TaskState.SUBMITTED,\r\n            agent_id=agent_id,\r\n            capability=capability,\r\n            input_parts=input_parts,\r\n        )\r\n\r\n        request_body = task.to_json_rpc_request()\r\n        response = await self._http_client.post(\r\n            agent_endpoint.rstrip(\"/\") + \"/a2a\",\r\n            headers=self._get_headers(),\r\n            json=request_body,\r\n        )\r\n        response.raise_for_status()\r\n        response_data = response.json()\r\n\r\n        if \"error\" in response_data:\r\n            raise RuntimeError(\r\n                f\"A2A error [{response_data['error'].get('code')}]: \"\r\n                f\"{response_data['error'].get('message')}\"\r\n            )\r\n\r\n        return A2ATask.from_json_rpc_response(response_data)\r\n\r\n    async def get_task_status(\r\n        self, agent_endpoint: str, task_id: str\r\n    ) -> A2ATask:\r\n        \"\"\"Poll for task status updates (for async tasks).\"\"\"\r\n        request_body = {\r\n            \"jsonrpc\": \"2.0\",\r\n            \"id\": str(uuid.uuid4()),\r\n            \"method\": \"tasks_get\",\r\n            \"params\": {\"task_id\": task_id},\r\n        }\r\n        response = await self._http_client.post(\r\n            agent_endpoint.rstrip(\"/\") + \"/a2a\",\r\n            headers=self._get_headers(),\r\n            json=request_body,\r\n        )\r\n        response.raise_for_status()\r\n        return A2ATask.from_json_rpc_response(response.json())\r\n\r\n    async def cancel_task(self, agent_endpoint: str, task_id: str) -> bool:\r\n        \"\"\"Request cancellation of a running task.\"\"\"\r\n        request_body = {\r\n            \"jsonrpc\": \"2.0\",\r\n            \"id\": str(uuid.uuid4()),\r\n            \"method\": \"tasks_cancel\",\r\n            \"params\": {\"task_id\": task_id},\r\n        }\r\n        response = await self._http_client.post(\r\n            agent_endpoint.rstrip(\"/\") + \"/a2a\",\r\n            headers=self._get_headers(),\r\n            json=request_body,\r\n        )\r\n        response.raise_for_status()\r\n        result = response.json().get(\"result\", {})\r\n        return result.get(\"success\", False)\r\n\r\n    async def close(self):\r\n        await self._http_client.aclose()\r\n\r\n# Example: Create a code review task\r\nasync def delegate_code_review():\r\n    client = A2AClient(auth_token=\"sk-abc123\")\r\n\r\n    # Build the task input parts\r\n    input_parts = [\r\n        Part(type=PartType.TEXT, text=\"Review the following pull request for security vulnerabilities.\"),\r\n        Part(type=PartType.DATA, data={\r\n            \"repo\": \"org/my-service\",\r\n            \"pr_number\": 142,\r\n            \"files_changed\": [\"auth.py\", \"db.py\", \"api/handlers.py\"],\r\n            \"diff_summary\": \"Added OAuth2 authentication flow and database migration.\"\r\n        }),\r\n        Part(type=PartType.FILE, file_url=\"https://github.com/org/my-service/pull/142.diff\",\r\n             mime_type=\"text/plain\"),\r\n    ]\r\n\r\n    task = await client.send_task(\r\n        agent_endpoint=\"https://agents.startup.com/codereviewer\",\r\n        capability=\"review_pull_request\",\r\n        input_parts=input_parts,\r\n        agent_id=\"com.startup.codereviewer\",\r\n    )\r\n\r\n    print(f\"Task {task.task_id} submitted. Status: {task.state.value}\")\r\n\r\n    # For long-running tasks, poll for completion\r\n    while task.state in (TaskState.SUBMITTED, TaskState.WORKING):\r\n        import asyncio\r\n        await asyncio.sleep(2)\r\n        task = await client.get_task_status(\r\n            \"https://agents.startup.com/codereviewer\", task.task_id\r\n        )\r\n        print(f\"  Status: {task.state.value}, Progress: {task.progress_percent}%\")\r\n\r\n    if task.state == TaskState.COMPLETED:\r\n        for artifact in task.artifacts:\r\n            print(f\"\\nArtifact: {artifact.name}\")\r\n            for part in artifact.parts:\r\n                if part.type == PartType.TEXT:\r\n                    print(f\"  Text: {part.text[:200]}...\")\r\n                elif part.type == PartType.DATA:\r\n                    print(f\"  Data: {json.dumps(part.data, indent=2)[:200]}...\")\r\n    elif task.state == TaskState.FAILED:\r\n        print(f\"Task failed: {task.error_message}\")\r\n\r\n    await client.close()\r\n\r\n# Run: import asyncio; asyncio.run(delegate_code_review())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "153-message-format",
      children: "15.3 Message Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A2A messages are built on JSON-RPC 2.0, a lightweight protocol that uses JSON for encoding and supports request-response pairs with unique IDs. Task states follow a deterministic lifecycle, and artifacts carry the actual work output in typed parts."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1531-task-state-machine",
      children: "15.3.1 Task State Machine"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "stateDiagram-v2\r\n    [*] --> submitted: Task Created\r\n    submitted --> working: Agent starts processing\r\n    working --> input_required: Needs clarification\r\n    input_required --> working: Requester provides input\r\n    working --> completed: Success\r\n    working --> failed: Error occurred\r\n    working --> canceled: Requester cancels\r\n    submitted --> canceled: Requester cancels\r\n    completed --> [*]\r\n    failed --> [*]\r\n    canceled --> [*]"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1532-json-rpc-message-structure",
      children: "15.3.2 JSON-RPC Message Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every A2A message follows the JSON-RPC 2.0 specification. The method name indicates the action (", (0,jsx_runtime.jsx)(_components.code, {
        children: "tasks_send"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tasks_get"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tasks_cancel"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tasks_sendSubscribe"
      }), "), and the params contain the task payload."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nA2A JSON-RPC message construction and parsing utilities.\r\n\"\"\"\r\nimport uuid\r\nimport json\r\nfrom datetime import datetime\r\nfrom typing import Optional\r\n\r\nclass A2AMessageBuilder:\r\n    \"\"\"\r\n    Utility class for constructing and parsing A2A JSON-RPC messages\r\n    according to the protocol specification.\r\n    \"\"\"\r\n\r\n    @staticmethod\r\n    def build_send_request(\r\n        task_id: str,\r\n        agent_id: str,\r\n        capability: str,\r\n        input_parts: list[dict],\r\n        metadata: Optional[dict] = None,\r\n    ) -> dict:\r\n        \"\"\"\r\n        Build a tasks_send JSON-RPC request.\r\n\r\n        Args:\r\n            task_id: Unique identifier for the task\r\n            agent_id: Target agent identifier\r\n            capability: Name of the capability to invoke\r\n            input_parts: List of part dicts: {type, text?, file_url?, mime_type?, data?}\r\n            metadata: Optional key-value pairs (e.g., priority, correlation-id)\r\n\r\n        Returns:\r\n            A valid JSON-RPC 2.0 request dict\r\n        \"\"\"\r\n        message = {\r\n            \"jsonrpc\": \"2.0\",\r\n            \"id\": str(uuid.uuid4()),\r\n            \"method\": \"tasks_send\",\r\n            \"params\": {\r\n                \"task_id\": task_id,\r\n                \"agent_id\": agent_id,\r\n                \"capability\": capability,\r\n                \"input\": {\r\n                    \"parts\": input_parts,\r\n                },\r\n                \"metadata\": metadata or {},\r\n                \"timestamp\": datetime.utcnow().isoformat() + \"Z\",\r\n            },\r\n        }\r\n        return message\r\n\r\n    @staticmethod\r\n    def build_send_subscribe_request(\r\n        task_id: str,\r\n        agent_id: str,\r\n        capability: str,\r\n        input_parts: list[dict],\r\n        push_notification_url: Optional[str] = None,\r\n    ) -> dict:\r\n        \"\"\"\r\n        Build a tasks_sendSubscribe request with optional push notifications.\r\n        The server will stream status updates via SSE and optionally POST\r\n        final results to the push_notification_url.\r\n        \"\"\"\r\n        message = {\r\n            \"jsonrpc\": \"2.0\",\r\n            \"id\": str(uuid.uuid4()),\r\n            \"method\": \"tasks_sendSubscribe\",\r\n            \"params\": {\r\n                \"task_id\": task_id,\r\n                \"agent_id\": agent_id,\r\n                \"capability\": capability,\r\n                \"input\": {\r\n                    \"parts\": input_parts,\r\n                },\r\n                \"push_notification\": {\r\n                    \"url\": push_notification_url,\r\n                } if push_notification_url else None,\r\n                \"timestamp\": datetime.utcnow().isoformat() + \"Z\",\r\n            },\r\n        }\r\n        return message\r\n\r\n    @staticmethod\r\n    def build_status_response(\r\n        task_id: str,\r\n        status: str,\r\n        artifacts: Optional[list[dict]] = None,\r\n        progress_percent: Optional[int] = None,\r\n        error_message: Optional[str] = None,\r\n    ) -> dict:\r\n        \"\"\"\r\n        Build a JSON-RPC response for a task status update.\r\n        This is what the A2A server returns to the client.\r\n        \"\"\"\r\n        result = {\r\n            \"task_id\": task_id,\r\n            \"status\": status,\r\n            \"updated_at\": datetime.utcnow().isoformat() + \"Z\",\r\n        }\r\n        if artifacts:\r\n            result[\"artifacts\"] = artifacts\r\n        if progress_percent is not None:\r\n            result[\"progress_percent\"] = progress_percent\r\n        if error_message:\r\n            result[\"error_message\"] = error_message\r\n\r\n        return {\r\n            \"jsonrpc\": \"2.0\",\r\n            \"id\": None,  # Response ID matches request; use None for notifications\r\n            \"result\": result,\r\n        }\r\n\r\n    @staticmethod\r\n    def build_artifact(\r\n        artifact_id: str,\r\n        name: str,\r\n        parts: list[dict],\r\n        description: Optional[str] = None,\r\n    ) -> dict:\r\n        \"\"\"Build an artifact dict to include in task responses.\"\"\"\r\n        return {\r\n            \"artifact_id\": artifact_id,\r\n            \"name\": name,\r\n            \"description\": description,\r\n            \"parts\": parts,\r\n            \"created_at\": datetime.utcnow().isoformat() + \"Z\",\r\n        }\r\n\r\n    # --- Part builders ---\r\n\r\n    @staticmethod\r\n    def text_part(content: str) -> dict:\r\n        \"\"\"Create a text content part.\"\"\"\r\n        return {\"type\": \"text\", \"text\": content}\r\n\r\n    @staticmethod\r\n    def file_part(url: str, mime_type: str) -> dict:\r\n        \"\"\"Create a file reference part.\"\"\"\r\n        return {\"type\": \"file\", \"file_url\": url, \"mime_type\": mime_type}\r\n\r\n    @staticmethod\r\n    def data_part(data: dict) -> dict:\r\n        \"\"\"Create a structured data part.\"\"\"\r\n        return {\"type\": \"data\", \"data\": data}\r\n\r\nclass A2AMessageValidator:\r\n    \"\"\"\r\n    Validates A2A JSON-RPC messages for correctness.\r\n    Ensures messages conform to the protocol specification.\r\n    \"\"\"\r\n\r\n    VALID_METHODS = {\"tasks_send\", \"tasks_get\", \"tasks_cancel\",\r\n                     \"tasks_sendSubscribe\", \"tasks_notification\"}\r\n    VALID_STATES = {\"submitted\", \"working\", \"input-required\",\r\n                    \"completed\", \"failed\", \"canceled\"}\r\n    VALID_PART_TYPES = {\"text\", \"file\", \"data\"}\r\n\r\n    @classmethod\r\n    def validate_request(cls, message: dict) -> list[str]:\r\n        \"\"\"Validate a JSON-RPC request. Returns list of errors (empty = valid).\"\"\"\r\n        errors = []\r\n\r\n        if not isinstance(message, dict):\r\n            return [\"Message must be a JSON object\"]\r\n\r\n        if message.get(\"jsonrpc\") != \"2.0\":\r\n            errors.append(\"jsonrpc must be '2.0'\")\r\n\r\n        if not message.get(\"id\"):\r\n            errors.append(\"Request must have an 'id' field\")\r\n\r\n        method = message.get(\"method\")\r\n        if method not in cls.VALID_METHODS:\r\n            errors.append(f\"Invalid method: {method}. \"\r\n                          f\"Must be one of {cls.VALID_METHODS}\")\r\n\r\n        params = message.get(\"params\", {})\r\n        if not params:\r\n            errors.append(\"Request must have 'params'\")\r\n\r\n        if method in (\"tasks_send\", \"tasks_sendSubscribe\"):\r\n            if \"task_id\" not in params:\r\n                errors.append(\"params must include 'task_id'\")\r\n            if \"capability\" not in params:\r\n                errors.append(\"params must include 'capability'\")\r\n            if \"input\" not in params:\r\n                errors.append(\"params must include 'input'\")\r\n            else:\r\n                input_data = params[\"input\"]\r\n                if \"parts\" not in input_data:\r\n                    errors.append(\"input must include 'parts' array\")\r\n                else:\r\n                    for i, part in enumerate(input_data.get(\"parts\", [])):\r\n                        if part.get(\"type\") not in cls.VALID_PART_TYPES:\r\n                            errors.append(\r\n                                f\"part[{i}].type must be one of {cls.VALID_PART_TYPES}\"\r\n                            )\r\n\r\n        return errors\r\n\r\n    @classmethod\r\n    def validate_response(cls, message: dict) -> list[str]:\r\n        \"\"\"Validate a JSON-RPC response. Returns list of errors.\"\"\"\r\n        errors = []\r\n\r\n        if not isinstance(message, dict):\r\n            return [\"Message must be a JSON object\"]\r\n\r\n        if message.get(\"jsonrpc\") != \"2.0\":\r\n            errors.append(\"jsonrpc must be '2.0'\")\r\n\r\n        # Must have either result or error\r\n        if \"result\" not in message and \"error\" not in message:\r\n            errors.append(\"Response must have 'result' or 'error'\")\r\n\r\n        if \"error\" in message:\r\n            err = message[\"error\"]\r\n            if \"code\" not in err or \"message\" not in err:\r\n                errors.append(\"Error must include 'code' and 'message'\")\r\n\r\n        if \"result\" in message:\r\n            result = message[\"result\"]\r\n            status = result.get(\"status\")\r\n            if status and status not in cls.VALID_STATES:\r\n                errors.append(f\"Invalid status: {status}\")\r\n\r\n        return errors\r\n\r\n# Example: Build a complete A2A interaction\r\ndef demonstrate_message_flow():\r\n    \"\"\"Demonstrate the full message construction flow.\"\"\"\r\n\r\n    # Step 1: Requester builds a tasks_send request\r\n    task_id = f\"task-{uuid.uuid4().hex[:12]}\"\r\n\r\n    request = A2AMessageBuilder.build_send_request(\r\n        task_id=task_id,\r\n        agent_id=\"com.enterprise.data-analyzer\",\r\n        capability=\"analyze_dataset\",\r\n        input_parts=[\r\n            A2AMessageBuilder.text_part(\r\n                \"Analyze the attached sales dataset for Q3 trends.\"\r\n            ),\r\n            A2AMessageBuilder.file_part(\r\n                \"https://data.company.com/sales/q3-2025.parquet\",\r\n                \"application/parquet\"\r\n            ),\r\n        ],\r\n        metadata={\"priority\": \"high\", \"department\": \"analytics\"},\r\n    )\r\n\r\n    print(\"=== A2A Request ===\")\r\n    print(json.dumps(request, indent=2))\r\n\r\n    # Step 2: Server processes and returns initial response\r\n    initial_response = A2AMessageBuilder.build_status_response(\r\n        task_id=task_id,\r\n        status=\"submitted\",\r\n        progress_percent=0,\r\n    )\r\n    initial_response[\"id\"] = request[\"id\"]  # Echo back the request ID\r\n\r\n    print(\"\\n=== A2A Initial Response ===\")\r\n    print(json.dumps(initial_response, indent=2))\r\n\r\n    # Step 3: Server sends progress update\r\n    progress_response = A2AMessageBuilder.build_status_response(\r\n        task_id=task_id,\r\n        status=\"working\",\r\n        progress_percent=45,\r\n    )\r\n\r\n    print(\"\\n=== A2A Progress Update ===\")\r\n    print(json.dumps(progress_response, indent=2))\r\n\r\n    # Step 4: Server sends final response with artifacts\r\n    final_artifact = A2AMessageBuilder.build_artifact(\r\n        artifact_id=f\"artifact-{uuid.uuid4().hex[:8]}\",\r\n        name=\"Q3 Trend Analysis Report\",\r\n        description=\"Comprehensive analysis of Q3 2025 sales data.\",\r\n        parts=[\r\n            A2AMessageBuilder.text_part(\r\n                \"Q3 2025 showed a 12.3% increase in revenue driven by \"\r\n                \"the APAC region. Key products: Enterprise Suite (+18%), \"\r\n                \"Cloud Services (+22%). Recommended action: increase \"\r\n                \"APAC sales headcount by 15% for Q4.\"\r\n            ),\r\n            A2AMessageBuilder.data_part({\r\n                \"total_revenue\": 4_250_000_000,\r\n                \"yoy_growth_pct\": 12.3,\r\n                \"top_region\": \"APAC\",\r\n                \"top_product\": \"Cloud Services\",\r\n                \"growth_rate_pct\": 22.0,\r\n                \"forecast_q4\": 4_600_000_000,\r\n            }),\r\n            A2AMessageBuilder.file_part(\r\n                \"https://data.company.com/reports/q3-sales-analysis.pdf\",\r\n                \"application/pdf\"\r\n            ),\r\n        ],\r\n    )\r\n\r\n    final_response = A2AMessageBuilder.build_status_response(\r\n        task_id=task_id,\r\n        status=\"completed\",\r\n        artifacts=[final_artifact],\r\n        progress_percent=100,\r\n    )\r\n\r\n    print(\"\\n=== A2A Final Response ===\")\r\n    print(json.dumps(final_response, indent=2))\r\n\r\n    # Validate the messages\r\n    print(\"\\n=== Validation ===\")\r\n    req_errors = A2AMessageValidator.validate_request(request)\r\n    print(f\"Request valid: {len(req_errors) == 0}\")\r\n    if req_errors:\r\n        for err in req_errors:\r\n            print(f\"  - {err}\")\r\n\r\n    resp_errors = A2AMessageValidator.validate_response(final_response)\r\n    print(f\"Response valid: {len(resp_errors) == 0}\")\r\n    if resp_errors:\r\n        for err in resp_errors:\r\n            print(f\"  - {err}\")\r\n\r\ndemonstrate_message_flow()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1533-streaming-with-server-sent-events",
      children: "15.3.3 Streaming with Server-Sent Events"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For real-time applications, A2A supports ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tasks_sendSubscribe"
      }), " which streams updates via SSE. The client opens a persistent connection and receives events as the task progresses."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nSSE Streaming for A2A tasks_sendSubscribe.\r\n\"\"\"\r\nimport json\r\nimport re\r\nfrom typing import AsyncGenerator\r\nimport httpx\r\n\r\nclass A2ASSEClient:\r\n    \"\"\"\r\n    Client for receiving streaming task updates via Server-Sent Events.\r\n    \"\"\"\r\n\r\n    def __init__(self, auth_token: Optional[str] = None):\r\n        self._auth_token = auth_token\r\n\r\n    async def subscribe_to_task(\r\n        self,\r\n        agent_endpoint: str,\r\n        capability: str,\r\n        input_parts: list[dict],\r\n        task_id: Optional[str] = None,\r\n    ) -> AsyncGenerator[dict, None]:\r\n        \"\"\"\r\n        Open an SSE connection and yield task status updates as they arrive.\r\n\r\n        Yields:\r\n            Dicts with keys: event_type, task_id, status, data\r\n        \"\"\"\r\n        import uuid\r\n        tid = task_id or f\"task-{uuid.uuid4().hex[:12]}\"\r\n\r\n        request_body = {\r\n            \"jsonrpc\": \"2.0\",\r\n            \"id\": str(uuid.uuid4()),\r\n            \"method\": \"tasks_sendSubscribe\",\r\n            \"params\": {\r\n                \"task_id\": tid,\r\n                \"agent_id\": \"remote-agent\",\r\n                \"capability\": capability,\r\n                \"input\": {\"parts\": input_parts},\r\n            },\r\n        }\r\n\r\n        headers = {\"Content-Type\": \"application/json\"}\r\n        if self._auth_token:\r\n            headers[\"Authorization\"] = f\"Bearer {self._auth_token}\"\r\n\r\n        async with httpx.AsyncClient(timeout=None) as client:\r\n            async with client.stream(\r\n                \"POST\", agent_endpoint, json=request_body, headers=headers\r\n            ) as response:\r\n                buffer = \"\"\r\n                async for chunk in response.aiter_bytes():\r\n                    buffer += chunk.decode(\"utf-8\")\r\n\r\n                    # Parse SSE events from the buffer\r\n                    # SSE format: \"event: ...\\ndata: ...\\n\\n\"\r\n                    while \"\\n\\n\" in buffer:\r\n                        event_block, buffer = buffer.split(\"\\n\\n\", 1)\r\n                        event_data = {\"event_type\": \"message\"}\r\n\r\n                        for line in event_block.strip().split(\"\\n\"):\r\n                            if line.startswith(\"event: \"):\r\n                                event_data[\"event_type\"] = line[7:]\r\n                            elif line.startswith(\"data: \"):\r\n                                try:\r\n                                    payload = json.loads(line[6:])\r\n                                    event_data.update(payload)\r\n                                except json.JSONDecodeError:\r\n                                    event_data[\"raw_data\"] = line[6:]\r\n\r\n                        yield event_data\r\n\r\n# Example: Process streaming task updates\r\nasync def stream_task_example():\r\n    client = A2ASSEClient(auth_token=\"sk-streaming-token\")\r\n\r\n    print(\"Subscribing to task updates (streaming)...\")\r\n    async for update in client.subscribe_to_task(\r\n        agent_endpoint=\"https://agents.example.com/a2a\",\r\n        capability=\"real_time_analysis\",\r\n        input_parts=[\r\n            {\"type\": \"text\", \"text\": \"Monitor stock prices for AAPL, GOOG, MSFT\"}\r\n        ],\r\n    ):\r\n        status = update.get(\"status\", \"unknown\")\r\n        progress = update.get(\"progress_percent\", 0)\r\n        print(f\"  [{update['event_type']}] Status: {status}, Progress: {progress}%\")\r\n\r\n        if update.get(\"artifacts\"):\r\n            for artifact in update[\"artifacts\"]:\r\n                print(f\"  >> Received artifact: {artifact['name']}\")\r\n\r\n        if status in (\"completed\", \"failed\", \"canceled\"):\r\n            print(f\"Task finished with status: {status}\")\r\n            break\r\n\r\n# Run: import asyncio; asyncio.run(stream_task_example())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "154-security",
      children: "15.4 Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Security is a first-class concern in A2A. Since agents may be running across organizational boundaries, the protocol defines clear patterns for authentication, authorization, and identity propagation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1541-authentication--authorization",
      children: "15.4.1 Authentication & Authorization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A2A agents authenticate using standard mechanisms (OAuth 2.0, JWT, mTLS) as declared in their agent card. The protocol does not prescribe a specific flow but requires that authentication requirements be well-documented."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nA2A Security: Authentication, Authorization, and Identity Propagation.\r\n\"\"\"\r\nimport time\r\nimport hashlib\r\nimport hmac\r\nimport json\r\nfrom dataclasses import dataclass\r\nfrom typing import Optional\r\n\r\n@dataclass\r\nclass A2AAuthContext:\r\n    \"\"\"\r\n    Represents the authentication context of a request.\r\n    This context is propagated when an agent delegates to another agent.\r\n    \"\"\"\r\n    subject: str                         # Who is making the request (user or service)\r\n    roles: list[str]                     # RBAC roles\r\n    scopes: list[str]                    # OAuth scopes granted\r\n    issuer: str                          # Who issued the token\r\n    issued_at: float                     # Unix timestamp\r\n    expires_at: float                    # Unix timestamp\r\n    delegation_chain: list[str] = None   # Track delegation hops for audit\r\n\r\n    def to_token_payload(self) -> dict:\r\n        \"\"\"Convert to JWT-like payload for identity propagation.\"\"\"\r\n        return {\r\n            \"sub\": self.subject,\r\n            \"roles\": self.roles,\r\n            \"scopes\": self.scopes,\r\n            \"iss\": self.issuer,\r\n            \"iat\": int(self.issued_at),\r\n            \"exp\": int(self.expires_at),\r\n            \"delegation_chain\": self.delegation_chain or [self.subject],\r\n        }\r\n\r\nclass A2AAuthorizer:\r\n    \"\"\"\r\n    Validates authorization for A2A task requests.\r\n    Checks that the requester has the required scopes and roles\r\n    for the requested capability.\r\n    \"\"\"\r\n\r\n    # Hardcoded capability-to-scope mapping for demonstration\r\n    CAPABILITY_SCOPES = {\r\n        \"review_pull_request\": [\"codereview:write\"],\r\n        \"analyze_vulnerability\": [\"codereview:read\", \"security:read\"],\r\n        \"analyze_dataset\": [\"data:read\", \"analytics:read\"],\r\n        \"real_time_analysis\": [\"market:read\"],\r\n    }\r\n\r\n    CAPABILITY_ROLES = {\r\n        \"review_pull_request\": [\"developer\", \"reviewer\", \"admin\"],\r\n        \"analyze_vulnerability\": [\"security\", \"admin\"],\r\n        \"analyze_dataset\": [\"analyst\", \"admin\"],\r\n        \"real_time_analysis\": [\"trader\", \"analyst\", \"admin\"],\r\n    }\r\n\r\n    @classmethod\r\n    def authorize(\r\n        cls,\r\n        auth_context: A2AAuthContext,\r\n        capability: str,\r\n    ) -> tuple[bool, str]:\r\n        \"\"\"Check if the auth context allows access to the capability.\"\"\"\r\n\r\n        # Check expiry\r\n        if time.time() > auth_context.expires_at:\r\n            return False, \"Token expired\"\r\n\r\n        # Check scopes\r\n        required_scopes = cls.CAPABILITY_SCOPES.get(capability, [])\r\n        for scope in required_scopes:\r\n            if scope not in auth_context.scopes:\r\n                return False, f\"Missing required scope: {scope}\"\r\n\r\n        # Check roles\r\n        required_roles = cls.CAPABILITY_ROLES.get(capability, [])\r\n        if required_roles:\r\n            has_role = any(role in auth_context.roles for role in required_roles)\r\n            if not has_role:\r\n                return False, (\r\n                    f\"None of the required roles matched. \"\r\n                    f\"Required: {required_roles}, \"\r\n                    f\"User has: {auth_context.roles}\"\r\n                )\r\n\r\n        # Check delegation depth (prevent infinite delegation loops)\r\n        if auth_context.delegation_chain:\r\n            if len(auth_context.delegation_chain) > 5:\r\n                return False, \"Max delegation depth exceeded\"\r\n\r\n        return True, \"Authorized\"\r\n\r\n    @classmethod\r\n    def propagate_identity(\r\n        cls,\r\n        current_context: A2AAuthContext,\r\n        delegating_agent_id: str,\r\n    ) -> A2AAuthContext:\r\n        \"\"\"\r\n        Propagate identity when agent A delegates to agent B.\r\n        Preserves the original caller's identity while recording\r\n        the delegation chain.\r\n        \"\"\"\r\n        chain = list(current_context.delegation_chain or [])\r\n        chain.append(delegating_agent_id)\r\n\r\n        return A2AAuthContext(\r\n            subject=current_context.subject,\r\n            roles=current_context.roles,\r\n            scopes=current_context.scopes,\r\n            issuer=current_context.issuer,\r\n            issued_at=current_context.issued_at,\r\n            expires_at=current_context.expires_at,\r\n            delegation_chain=chain,\r\n        )\r\n\r\n# Example: Authorization flow\r\ndef security_demo():\r\n    # Simulate a user's auth context\r\n    user_context = A2AAuthContext(\r\n        subject=\"user-42@company.com\",\r\n        roles=[\"developer\"],\r\n        scopes=[\"codereview:read\", \"codereview:write\", \"data:read\"],\r\n        issuer=\"https://auth.company.com\",\r\n        issued_at=time.time(),\r\n        expires_at=time.time() + 3600,  # 1 hour\r\n    )\r\n\r\n    # Check if user can do code review\r\n    authorized, reason = A2AAuthorizer.authorize(\r\n        user_context, \"review_pull_request\"\r\n    )\r\n    print(f\"Code review authorized: {authorized}\")\r\n    print(f\"Reason: {reason}\")\r\n\r\n    # Propagate identity when delegating to another agent\r\n    delegated_context = A2AAuthorizer.propagate_identity(\r\n        user_context, \"com.company.codereviewer\"\r\n    )\r\n    print(f\"\\nDelegation chain: {delegated_context.delegation_chain}\")\r\n\r\n    # Check a capability the user doesn't have access to\r\n    authorized, reason = A2AAuthorizer.authorize(\r\n        user_context, \"analyze_vulnerability\"\r\n    )\r\n    print(f\"\\nVulnerability analysis authorized: {authorized}\")\r\n    print(f\"Reason: {reason}\")\r\n\r\n    # Example: expired token\r\n    expired_context = A2AAuthContext(\r\n        subject=\"user-42@company.com\",\r\n        roles=[\"developer\"],\r\n        scopes=[\"codereview:write\"],\r\n        issuer=\"https://auth.company.com\",\r\n        issued_at=time.time() - 7200,\r\n        expires_at=time.time() - 3600,  # Expired 1 hour ago\r\n    )\r\n    authorized, reason = A2AAuthorizer.authorize(\r\n        expired_context, \"review_pull_request\"\r\n    )\r\n    print(f\"\\nExpired token authorized: {authorized}\")\r\n    print(f\"Reason: {reason}\")\r\n\r\nsecurity_demo()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1542-push-notifications",
      children: "15.4.2 Push Notifications"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For long-running tasks, A2A supports push notifications where the agent sends results to a webhook URL rather than requiring the requester to poll. This is configured at task creation time."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nA2A Push Notification Receiver — webhook handler for task completion.\r\n\"\"\"\r\nfrom fastapi import FastAPI, Request, HTTPException\r\nimport hmac\r\nimport hashlib\r\nimport json\r\nfrom typing import Optional\r\n\r\n# In production, this would be a FastAPI app\r\n# app = FastAPI()\r\n\r\n# Shared secret for HMAC signature verification\r\nPUSH_NOTIFICATION_SECRET = \"whsec_your_webhook_secret_here\"\r\n\r\ndef verify_push_signature(\r\n    payload: bytes,\r\n    signature_header: str,\r\n    secret: str = PUSH_NOTIFICATION_SECRET,\r\n) -> bool:\r\n    \"\"\"\r\n    Verify the HMAC-SHA256 signature of a push notification.\r\n    This ensures the notification genuinely came from the agent.\r\n    \"\"\"\r\n    expected_signature = hmac.new(\r\n        secret.encode(),\r\n        payload,\r\n        hashlib.sha256,\r\n    ).hexdigest()\r\n\r\n    # Use hmac.compare_digest to prevent timing attacks\r\n    return hmac.compare_digest(\r\n        f\"sha256={expected_signature}\", signature_header\r\n    )\r\n\r\nclass PushNotificationHandler:\r\n    \"\"\"\r\n    Handles incoming A2A push notifications (task completion callbacks).\r\n    \"\"\"\r\n\r\n    def __init__(self, agent_client: A2AClient):\r\n        self.agent_client = agent_client\r\n\r\n    async def handle_notification(self, request: Request):\r\n        \"\"\"\r\n        FastAPI endpoint handler for push notifications.\r\n        \"\"\"\r\n        body = await request.body()\r\n        signature = request.headers.get(\"X-A2A-Signature-256\", \"\")\r\n\r\n        if not verify_push_signature(body, signature):\r\n            raise HTTPException(status_code=401, detail=\"Invalid signature\")\r\n\r\n        payload = json.loads(body)\r\n        event_type = payload.get(\"event\", \"unknown\")\r\n        task_id = payload.get(\"task_id\")\r\n        status = payload.get(\"status\")\r\n\r\n        print(f\"Push notification received: event={event_type}, \"\r\n              f\"task_id={task_id}, status={status}\")\r\n\r\n        if status == \"completed\":\r\n            # Process the completed task artifacts\r\n            artifacts = payload.get(\"artifacts\", [])\r\n            for artifact in artifacts:\r\n                print(f\"  Artifact received: {artifact['name']}\")\r\n\r\n            # Potentially send results to the original requester\r\n            return {\"received\": True, \"task_id\": task_id}\r\n\r\n        elif status == \"failed\":\r\n            error = payload.get(\"error_message\", \"Unknown error\")\r\n            print(f\"  Task failed: {error}\")\r\n            return {\"received\": True, \"error\": error}\r\n\r\n        return {\"received\": True, \"task_id\": task_id}\r\n\r\n# Example: Configure a task with push notifications\r\ndef configure_push_notification():\r\n    \"\"\"\r\n    Demonstrate how a requester sets up push notifications\r\n    when delegating a long-running task.\r\n    \"\"\"\r\n    push_url = \"https://my-app.com/api/a2a/push-notifications\"\r\n\r\n    request = A2AMessageBuilder.build_send_subscribe_request(\r\n        task_id=f\"task-{uuid.uuid4().hex[:12]}\",\r\n        agent_id=\"com.enterprise.heavy-compute\",\r\n        capability=\"train_model\",\r\n        input_parts=[\r\n            A2AMessageBuilder.text_part(\r\n                \"Train a regression model on the attached dataset.\"\r\n            ),\r\n        ],\r\n        push_notification_url=push_url,\r\n    )\r\n\r\n    print(\"=== A2A SendSubscribe with Push Notification ===\")\r\n    print(json.dumps(request, indent=2))\r\n    print(f\"\\nAgent will POST results to: {push_url}\")\r\n    print(\"The push notification includes HMAC signature for verification.\")\r\n\r\nimport uuid\r\nconfigure_push_notification()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "155-integration-patterns",
      children: "15.5 Integration Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A2A does not exist in isolation. In production systems, it works alongside MCP, API gateways, and organizational frameworks to create a complete agent infrastructure."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1551-a2a-with-mcp--the-complete-stack",
      children: "15.5.1 A2A with MCP — The Complete Stack"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TB\r\n    subgraph UserLayer[\"User / Application\"]\r\n        UI[\"Web UI / CLI / API\"]\r\n    end\r\n\r\n    subgraph Orchestration[\"Orchestration Layer\"]\r\n        AGENT[\"Orchestrator Agent\"]\r\n    end\r\n\r\n    subgraph A2A_Layer[\"A2A — Agent-to-Agent Interop\"]\r\n        A2A_1[\"Specialist Agent A\\n(Code Review)\"]\r\n        A2A_2[\"Specialist Agent B\\n(Data Analysis)\"]\r\n        A2A_3[\"Specialist Agent C\\n(Deployment)\"]\r\n    end\r\n\r\n    subgraph MCP_Layer[\"MCP — Tool & Data Access\"]\r\n        MCP_T1[\"MCP Server: GitHub\"]\r\n        MCP_T2[\"MCP Server: Database\"]\r\n        MCP_T3[\"MCP Server: Cloud API\"]\r\n    end\r\n\r\n    subgraph External[\"External Systems\"]\r\n        ES1[\"GitHub API\"]\r\n        ES2[\"PostgreSQL\"]\r\n        ES3[\"AWS / GCP\"]\r\n    end\r\n\r\n    UI --> AGENT\r\n    AGENT -->|A2A tasks_send| A2A_1\r\n    AGENT -->|A2A tasks_send| A2A_2\r\n    AGENT -->|A2A tasks_send| A2A_3\r\n    A2A_1 -->|MCP tools/call| MCP_T1\r\n    A2A_2 -->|MCP tools/call| MCP_T2\r\n    A2A_3 -->|MCP tools/call| MCP_T3\r\n    MCP_T1 --> ES1\r\n    MCP_T2 --> ES2\r\n    MCP_T3 --> ES3\r\n\r\n    style UserLayer fill:#e8f5e9,stroke:#2e7d32\r\n    style Orchestration fill:#e3f2fd,stroke:#1565c0\r\n    style A2A_Layer fill:#f3e5f5,stroke:#7b1fa2\r\n    style MCP_Layer fill:#fff3e0,stroke:#e65100"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1552-bridging-a2a-and-mcp",
      children: "15.5.2 Bridging A2A and MCP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In many architectures, the orchestrator agent communicates with specialist agents via ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A2A"
      }), ", and those specialist agents use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MCP"
      }), " to access tools and data. This creates a clean separation:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A2A"
        }), " handles inter-agent communication (discovery, delegation, coordination)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MCP"
        }), " handles agent-to-tool communication (files, databases, APIs)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nIntegration Pattern: A2A orchestrator with MCP tool access.\r\nDemonstrates how an A2A agent uses MCP internally to fulfill tasks.\r\n\"\"\"\r\n\r\nfrom dataclasses import dataclass\r\nfrom typing import Any\r\n\r\nclass InternalMCPClient:\r\n    \"\"\"\r\n    Simulated MCP client that an A2A agent uses internally\r\n    to access tools and data sources.\r\n    \"\"\"\r\n\r\n    async def call_tool(self, tool_name: str, args: dict) -> Any:\r\n        \"\"\"Call an MCP tool. In production, this would go to an MCP server.\"\"\"\r\n        print(f\"  [MCP] Calling tool: {tool_name} with args={args}\")\r\n        if tool_name == \"github_get_pr\":\r\n            return {\r\n                \"pr_number\": args[\"pr_number\"],\r\n                \"title\": \"Add OAuth2 authentication\",\r\n                \"files\": [\"auth.py\", \"db.py\"],\r\n                \"author\": \"dev-user\",\r\n            }\r\n        elif tool_name == \"code_analyze\":\r\n            return {\r\n                \"issues\": [\r\n                    {\"line\": 42, \"severity\": \"high\", \"message\": \"SQL injection risk\"},\r\n                    {\"line\": 87, \"severity\": \"medium\", \"message\": \"Unused import\"},\r\n                ]\r\n            }\r\n        return {\"result\": \"ok\"}\r\n\r\nclass A2AAgentServer:\r\n    \"\"\"\r\n    An A2A-compliant agent that uses MCP internally.\r\n    This agent receives tasks via A2A and executes them\r\n    by calling MCP tools.\r\n    \"\"\"\r\n\r\n    def __init__(self, agent_card: AgentCard):\r\n        self.card = agent_card\r\n        self.mcp = InternalMCPClient()\r\n        self.active_tasks: dict[str, A2ATask] = {}\r\n\r\n    async def handle_tasks_send(self, request: dict) -> dict:\r\n        \"\"\"Handle an incoming tasks_send A2A request.\"\"\"\r\n        params = request[\"params\"]\r\n        task_id = params[\"task_id\"]\r\n        capability = params[\"capability\"]\r\n        input_parts = params[\"input\"][\"parts\"]\r\n\r\n        # Create task record\r\n        task = A2ATask(\r\n            task_id=task_id,\r\n            state=TaskState.SUBMITTED,\r\n            agent_id=self.card.agent_id,\r\n            capability=capability,\r\n            input_parts=[Part(**p) for p in input_parts],\r\n        )\r\n        self.active_tasks[task_id] = task\r\n\r\n        # Execute based on capability\r\n        if capability == \"review_pull_request\":\r\n            return await self._execute_code_review(task)\r\n        elif capability == \"analyze_dataset\":\r\n            return await self._execute_data_analysis(task)\r\n        else:\r\n            return A2AMessageBuilder.build_status_response(\r\n                task_id=task_id,\r\n                status=\"failed\",\r\n                error_message=f\"Unknown capability: {capability}\",\r\n            )\r\n\r\n    async def _execute_code_review(self, task: A2ATask) -> dict:\r\n        \"\"\"Execute a code review by chaining MCP tools.\"\"\"\r\n        task.state = TaskState.WORKING\r\n        task.status_message = \"Fetching PR details...\"\r\n\r\n        # Step 1: Use MCP to get PR details\r\n        pr_data = await self.mcp.call_tool(\"github_get_pr\", {\r\n            \"pr_number\": 142,\r\n            \"repo\": \"org/my-service\",\r\n        })\r\n\r\n        task.status_message = \"Analyzing code for issues...\"\r\n\r\n        # Step 2: Use MCP to analyze code\r\n        analysis = await self.mcp.call_tool(\"code_analyze\", {\r\n            \"files\": pr_data[\"files\"],\r\n        })\r\n\r\n        # Step 3: Build artifacts from results\r\n        task.state = TaskState.COMPLETED\r\n        task.artifacts = [\r\n            Artifact(\r\n                artifact_id=f\"art-{uuid.uuid4().hex[:8]}\",\r\n                name=\"Code Review Results\",\r\n                parts=[\r\n                    Part(\r\n                        type=PartType.TEXT,\r\n                        text=f\"Reviewed PR #{pr_data['pr_number']}: \"\r\n                             f\"{pr_data['title']}\\n\\n\"\r\n                             f\"Found {len(analysis['issues'])} issues.\",\r\n                    ),\r\n                    Part(\r\n                        type=PartType.DATA,\r\n                        data={\r\n                            \"pr\": pr_data,\r\n                            \"issues\": analysis[\"issues\"],\r\n                            \"summary\": f\"{len([i for i in analysis['issues'] \"\r\n                                       f\"if i['severity'] == 'high'])} high, \"\r\n                                       f\"{len([i for i in analysis['issues'] \"\r\n                                       f\"if i['severity'] == 'medium'])} medium\",\r\n                        },\r\n                    ),\r\n                ],\r\n            ),\r\n        ]\r\n\r\n        return A2AMessageBuilder.build_status_response(\r\n            task_id=task.task_id,\r\n            status=\"completed\",\r\n            artifacts=[\r\n                A2AMessageBuilder.build_artifact(\r\n                    artifact_id=a.artifact_id,\r\n                    name=a.name,\r\n                    parts=[\r\n                        {\"type\": p.type.value, \"text\": p.text}\r\n                        for p in a.parts\r\n                    ],\r\n                )\r\n                for a in task.artifacts\r\n            ],\r\n        )\r\n\r\nasync def demonstrate_a2a_mcp_integration():\r\n    \"\"\"Show how A2A and MCP work together in a production flow.\"\"\"\r\n\r\n    # Create the agent card and server\r\n    card = AgentCard(\r\n        agent_name=\"CodeReviewAgent\",\r\n        agent_version=\"1.0.0\",\r\n        description=\"Code review agent that uses MCP for tool access\",\r\n        agent_id=\"com.demo.codereview\",\r\n        card_url=\"https://demo.agents/codereview/.well-known/agent-card.json\",\r\n        endpoints=[\"https://demo.agents/codereview/a2a\"],\r\n        authentication=AuthenticationInfo(\r\n            schemes=[AuthenticationScheme.BEARER]\r\n        ),\r\n        capabilities=[\r\n            Capability(\r\n                name=\"review_pull_request\",\r\n                description=\"Review pull requests using GitHub MCP tools\",\r\n                tags=[\"code-review\", \"github\"],\r\n            )\r\n        ],\r\n    )\r\n\r\n    server = A2AAgentServer(card)\r\n\r\n    # Simulate an incoming A2A request\r\n    request = A2AMessageBuilder.build_send_request(\r\n        task_id=\"task-demo-001\",\r\n        agent_id=\"com.demo.codereview\",\r\n        capability=\"review_pull_request\",\r\n        input_parts=[\r\n            A2AMessageBuilder.text_part(\"Review PR #142\"),\r\n        ],\r\n    )\r\n\r\n    print(\"=== A2A + MCP Integration Demo ===\")\r\n    print(f\"Agent: {card.agent_name}\")\r\n    print(f\"Request capability: {request['params']['capability']}\")\r\n\r\n    response = await server.handle_tasks_send(request)\r\n    print(f\"\\nResponse status: {response['result']['status']}\")\r\n    print(f\"Response artifacts: {len(response['result'].get('artifacts', []))}\")\r\n\r\n    for artifact in response['result'].get('artifacts', []):\r\n        print(f\"  - {artifact['name']}\")\r\n        for part in artifact['parts']:\r\n            if part['type'] == 'text':\r\n                print(f\"    Text: {part['text'][:100]}...\")\r\n            elif part['type'] == 'data':\r\n                print(f\"    Data keys: {list(part['data'].keys())}\")\r\n\r\n    print(\"\\n✅ A2A handled agent discovery and task delegation.\")\r\n    print(\"✅ MCP handled tool access (GitHub, code analysis).\")\r\n    print(\"Together they form a complete agent interoperability stack.\")\r\n\r\n# Run: import asyncio; asyncio.run(demonstrate_a2a_mcp_integration())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1553-enterprise-deployment-patterns",
      children: "15.5.3 Enterprise Deployment Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In enterprise environments, A2A agents are deployed behind API gateways with service mesh integration for security, observability, and rate limiting."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nEnterprise deployment patterns for A2A agents.\r\nCovers gateway integration, monitoring, and resilience.\r\n\"\"\"\r\nimport json\r\nimport time\r\nfrom dataclasses import dataclass, field\r\nfrom typing import Optional\r\n\r\n@dataclass\r\nclass EnterpriseA2AConfig:\r\n    \"\"\"\r\n    Configuration for deploying an A2A agent in an enterprise setting.\r\n    \"\"\"\r\n    agent_card: AgentCard\r\n    rate_limit_per_minute: int = 100\r\n    rate_limit_per_user: int = 20\r\n    require_mtls: bool = False\r\n    enable_audit_logging: bool = True\r\n    max_task_duration_seconds: int = 300\r\n    retry_on_failure: bool = True\r\n    retry_max_attempts: int = 3\r\n    retry_backoff_seconds: float = 2.0\r\n    observability_endpoint: Optional[str] = None  # OpenTelemetry collector\r\n    service_mesh_integration: bool = True\r\n\r\n    def validate_deployment(self) -> list[str]:\r\n        \"\"\"Validate the enterprise configuration.\"\"\"\r\n        warnings = []\r\n\r\n        if not self.agent_card.authentication.schemes:\r\n            warnings.append(\"No authentication configured! \"\r\n                            \"Production agents MUST require auth.\")\r\n\r\n        if AuthenticationScheme.NONE in self.agent_card.authentication.schemes:\r\n            warnings.append(\"Authentication has 'none' scheme — \"\r\n                            \"remove for production deployments.\")\r\n\r\n        if self.max_task_duration_seconds > 600:\r\n            warnings.append(\"Max task duration > 10 minutes. \"\r\n                            \"Consider async patterns with push notifications.\")\r\n\r\n        return warnings\r\n\r\nclass EnterpriseA2AGateway:\r\n    \"\"\"\r\n    Enterprise API Gateway for A2A agents.\r\n    Handles rate limiting, audit logging, and routing.\r\n    \"\"\"\r\n\r\n    def __init__(self, config: EnterpriseA2AConfig):\r\n        self.config = config\r\n        self._request_log: list[dict] = []\r\n        self._rate_counters: dict[str, list[float]] = {}\r\n\r\n    def _check_rate_limit(self, user_id: str) -> bool:\r\n        \"\"\"Enforce rate limits per user.\"\"\"\r\n        now = time.time()\r\n        window = 60.0  # 1 minute window\r\n\r\n        if user_id not in self._rate_counters:\r\n            self._rate_counters[user_id] = []\r\n\r\n        # Remove old entries\r\n        self._rate_counters[user_id] = [\r\n            t for t in self._rate_counters[user_id]\r\n            if now - t < window\r\n        ]\r\n\r\n        if len(self._rate_counters[user_id]) >= self.config.rate_limit_per_user:\r\n            return False  # Rate limited\r\n\r\n        self._rate_counters[user_id].append(now)\r\n        return True\r\n\r\n    async def handle_request(\r\n        self, request_body: dict, user_id: str, auth_context: A2AAuthContext\r\n    ) -> dict:\r\n        \"\"\"Process an incoming A2A request through the gateway.\"\"\"\r\n\r\n        # 1. Rate limit check\r\n        if not self._check_rate_limit(user_id):\r\n            return {\r\n                \"jsonrpc\": \"2.0\",\r\n                \"id\": request_body.get(\"id\"),\r\n                \"error\": {\"code\": -32900, \"message\": \"Rate limit exceeded\"},\r\n            }\r\n\r\n        # 2. Authorization check\r\n        capability = request_body.get(\"params\", {}).get(\"capability\", \"\")\r\n        authorized, reason = A2AAuthorizer.authorize(auth_context, capability)\r\n        if not authorized:\r\n            return {\r\n                \"jsonrpc\": \"2.0\",\r\n                \"id\": request_body.get(\"id\"),\r\n                \"error\": {\"code\": -32001, \"message\": f\"Unauthorized: {reason}\"},\r\n            }\r\n\r\n        # 3. Audit logging\r\n        if self.config.enable_audit_logging:\r\n            self._request_log.append({\r\n                \"timestamp\": time.time(),\r\n                \"user_id\": user_id,\r\n                \"method\": request_body.get(\"method\"),\r\n                \"capability\": capability,\r\n                \"task_id\": request_body.get(\"params\", {}).get(\"task_id\"),\r\n                \"authorized\": True,\r\n            })\r\n\r\n        # 4. Forward to the agent (in production, this routes to the backend)\r\n        # For demo purposes, we return a mock response\r\n        return A2AMessageBuilder.build_status_response(\r\n            task_id=request_body.get(\"params\", {}).get(\"task_id\", \"unknown\"),\r\n            status=\"submitted\",\r\n        )\r\n\r\n    def get_audit_log(self) -> list[dict]:\r\n        \"\"\"Return the audit log for compliance review.\"\"\"\r\n        return self._request_log[-100:]  # Last 100 entries\r\n\r\n# Example: Enterprise configuration\r\ndef enterprise_deployment_demo():\r\n    card = AgentCard(\r\n        agent_name=\"EnterpriseSecureAgent\",\r\n        agent_version=\"3.0.0\",\r\n        description=\"Enterprise agent behind gateway with full audit logging\",\r\n        agent_id=\"com.enterprise.secure-agent\",\r\n        card_url=\"https://internal.agents.enterprise.com/agent/.well-known/agent-card.json\",\r\n        endpoints=[\"https://internal.agents.enterprise.com/agent/a2a\"],\r\n        authentication=AuthenticationInfo(\r\n            schemes=[AuthenticationScheme.BEARER, AuthenticationScheme.MTLS],\r\n            credentials_url=\"https://auth.enterprise.com/oauth/token\",\r\n            scopes=[\"agent:invoke\", \"agent:admin\"],\r\n        ),\r\n        capabilities=[\r\n            Capability(name=\"process_document\", description=\"Process enterprise documents\",\r\n                       tags=[\"document\", \"enterprise\"]),\r\n        ],\r\n        max_concurrent_tasks=50,\r\n    )\r\n\r\n    config = EnterpriseA2AConfig(\r\n        agent_card=card,\r\n        rate_limit_per_minute=500,\r\n        rate_limit_per_user=30,\r\n        require_mtls=True,\r\n        enable_audit_logging=True,\r\n        max_task_duration_seconds=300,\r\n    )\r\n\r\n    warnings = config.validate_deployment()\r\n    print(\"=== Enterprise Deployment Validation ===\")\r\n    if warnings:\r\n        for w in warnings:\r\n            print(f\"  ⚠ {w}\")\r\n    else:\r\n        print(\"  ✅ Configuration looks good!\")\r\n\r\n    print(f\"\\nAuthentication: {[s.value for s in card.authentication.schemes]}\")\r\n    print(f\"Rate limit: {config.rate_limit_per_minute}/min global, \"\r\n          f\"{config.rate_limit_per_user}/min per user\")\r\n    print(f\"mTLS required: {config.require_mtls}\")\r\n    print(f\"Audit logging: {'enabled' if config.enable_audit_logging else 'disabled'}\")\r\n    print(f\"Service mesh: {'integrated' if config.service_mesh_integration else 'not configured'}\")\r\n\r\nenterprise_deployment_demo()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "156-comparison-a2a-vs-mcp-vs-function-calling",
      children: "15.6 Comparison: A2A vs MCP vs Function Calling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding when to use each protocol is critical for architecting agent systems. The three technologies serve different purposes and are often used together."
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    subgraph A2A[\"A2A Protocol\"]\r\n        A1[Agent ↔ Agent]\r\n        A2[Discovery + Delegation]\r\n        A3[Capability-based routing]\r\n    end\r\n    subgraph MCP[\"MCP Protocol\"]\r\n        M1[Agent ↔ Tool/Data]\r\n        M2[Tool execution + Resources]\r\n        M3[Function calling abstraction]\r\n    end\r\n    subgraph FC[\"Function Calling\"]\r\n        F1[LLM ↔ API]\r\n        F2[Native model function API]\r\n        F3[Single-step invocation]\r\n    end\r\n\r\n    A2A ---|Complementary| MCP\r\n    MCP ---|Builds on| FC\r\n\r\n    style A2A fill:#e1bee7,stroke:#7b1fa2\r\n    style MCP fill:#bbdefb,stroke:#1565c0\r\n    style FC fill:#c8e6c9,stroke:#2e7d32"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1561-decision-matrix",
      children: "15.6.1 Decision Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A2A Protocol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MCP Protocol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Function Calling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Primary Use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent-to-agent communication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent-to-tool/data access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LLM-to-API invocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Granularity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task-level (complex workflows)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function-level (single operations)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single function call"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Discovery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent cards with capability listing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool/resource listing by server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No discovery (hardcoded)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State Model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full task state machine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request-response (stateless)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request-response (stateless)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Streaming"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSE streaming for long tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Streaming via transport layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native model streaming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delegation chain, identity propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transport-level auth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API key / OAuth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Persistence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tasks have IDs, can be queried"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No persistent task model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No persistent state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When to Use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-agent orchestration, cross-org"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool integration, data access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple LLM tool use"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1562-a2a-vs-mcp--detailed-comparison",
      children: "15.6.2 A2A vs MCP — Detailed Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nFeature comparison between A2A and MCP with code-level differences.\r\n\"\"\"\r\nfrom dataclasses import dataclass\r\nfrom typing import List\r\n\r\n@dataclass\r\nclass ProtocolComparison:\r\n    \"\"\"Structured comparison of protocol characteristics.\"\"\"\r\n    protocol_name: str\r\n    primary_abstraction: str\r\n    message_pattern: str\r\n    state_management: str\r\n    is_discovery_built_in: bool\r\n    typical_latency: str\r\n    complexity: str  # Low, Medium, High\r\n\r\ncomparisons = [\r\n    ProtocolComparison(\r\n        protocol_name=\"A2A\",\r\n        primary_abstraction=\"Task (multi-step workflow with artifacts)\",\r\n        message_pattern=\"JSON-RPC with task_id tracking\",\r\n        state_management=\"Full task state machine (submitted→working→completed/failed)\",\r\n        is_discovery_built_in=True,\r\n        typical_latency=\"Seconds to minutes (long-running agents)\",\r\n        complexity=\"Medium\",\r\n    ),\r\n    ProtocolComparison(\r\n        protocol_name=\"MCP\",\r\n        primary_abstraction=\"Tool/Resource (single operation)\",\r\n        message_pattern=\"JSON-RPC request-response\",\r\n        state_management=\"Stateless (no persistent task tracking)\",\r\n        is_discovery_built_in=True,\r\n        typical_latency=\"Milliseconds to seconds (tool calls)\",\r\n        complexity=\"Medium\",\r\n    ),\r\n    ProtocolComparison(\r\n        protocol_name=\"Function Calling\",\r\n        primary_abstraction=\"Function definition (API contract)\",\r\n        message_pattern=\"LLM generates JSON arguments → API call\",\r\n        state_management=\"Stateless (per-turn execution)\",\r\n        is_discovery_built_in=False,\r\n        typical_latency=\"Milliseconds (single API calls)\",\r\n        complexity=\"Low\",\r\n    ),\r\n]\r\n\r\nclass ArchitectureAdvisor:\r\n    \"\"\"\r\n    Recommends the right protocol combination based on use case.\r\n    \"\"\"\r\n\r\n    @staticmethod\r\n    def recommend(\r\n        needs_multi_agent: bool,\r\n        needs_tool_access: bool,\r\n        needs_discovery: bool,\r\n        task_duration: str,  # \"short\" (< 1s), \"medium\" (< 60s), \"long\" (> 60s)\r\n        cross_org: bool,\r\n    ) -> List[str]:\r\n        \"\"\"Recommend protocols based on requirements.\"\"\"\r\n        recommendations = []\r\n\r\n        if needs_multi_agent or cross_org or task_duration == \"long\":\r\n            recommendations.append(\"A2A — for agent-to-agent delegation with task tracking\")\r\n\r\n        if needs_tool_access or (task_duration == \"short\" and not needs_multi_agent):\r\n            recommendations.append(\"MCP — for standardized tool and data access\")\r\n\r\n        if task_duration == \"short\" and not needs_discovery:\r\n            recommendations.append(\"Function Calling — simplest option for direct LLM tool use\")\r\n\r\n        if needs_multi_agent and needs_tool_access:\r\n            recommendations.append(\r\n                \"A2A + MCP — A2A for inter-agent orchestration, MCP for tool access \"\r\n                \"(most complete stack)\"\r\n            )\r\n\r\n        if not recommendations:\r\n            recommendations.append(\"Function Calling — sufficient for most simple use cases\")\r\n\r\n        return recommendations\r\n\r\n# Example: Recommendation engine\r\ndef comparison_demo():\r\n    print(\"=== Protocol Comparison ===\")\r\n    for comp in comparisons:\r\n        print(f\"\\n{comp.protocol_name}:\")\r\n        print(f\"  Abstraction: {comp.primary_abstraction}\")\r\n        print(f\"  Message: {comp.message_pattern}\")\r\n        print(f\"  State: {comp.state_management}\")\r\n        print(f\"  Built-in discovery: {comp.is_discovery_built_in}\")\r\n        print(f\"  Typical latency: {comp.typical_latency}\")\r\n        print(f\"  Complexity: {comp.complexity}\")\r\n\r\n    print(\"\\n\\n=== Architecture Recommendations ===\")\r\n    advisor = ArchitectureAdvisor()\r\n\r\n    scenarios = [\r\n        {\r\n            \"name\": \"Enterprise Multi-Agent System\",\r\n            \"args\": {\r\n                \"needs_multi_agent\": True,\r\n                \"needs_tool_access\": True,\r\n                \"needs_discovery\": True,\r\n                \"task_duration\": \"medium\",\r\n                \"cross_org\": True,\r\n            },\r\n        },\r\n        {\r\n            \"name\": \"Single Agent with Database Access\",\r\n            \"args\": {\r\n                \"needs_multi_agent\": False,\r\n                \"needs_tool_access\": True,\r\n                \"needs_discovery\": False,\r\n                \"task_duration\": \"short\",\r\n                \"cross_org\": False,\r\n            },\r\n        },\r\n        {\r\n            \"name\": \"Simple Chatbot with Calculator\",\r\n            \"args\": {\r\n                \"needs_multi_agent\": False,\r\n                \"needs_tool_access\": False,\r\n                \"needs_discovery\": False,\r\n                \"task_duration\": \"short\",\r\n                \"cross_org\": False,\r\n            },\r\n        },\r\n    ]\r\n\r\n    for scenario in scenarios:\r\n        print(f\"\\n📋 {scenario['name']}:\")\r\n        recs = advisor.recommend(**scenario[\"args\"])\r\n        for r in recs:\r\n            print(f\"  → {r}\")\r\n\r\ncomparison_demo()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1563-when-to-use-a2a",
      children: "15.6.3 When to Use A2A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-agent orchestration"
        }), ": Your system has multiple specialist agents that need to coordinate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cross-organizational workflows"
        }), ": Agents from different companies or departments need to collaborate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Long-running tasks"
        }), ": Your agents perform work that takes minutes or hours (not milliseconds)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Capability-based routing"
        }), ": You need to dynamically discover which agent can handle a specific task."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Audit and compliance"
        }), ": You need full task lifecycle tracking for regulatory requirements."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1564-when-not-to-use-a2a",
      children: "15.6.4 When Not to Use A2A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Simple tool calls"
        }), ": Your agent just needs to call an API or database — use MCP or function calling."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single agent systems"
        }), ": If you only have one agent, there's no one to talk to."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Latency-critical paths"
        }), ": A2A adds overhead from discovery, authentication, and task state tracking."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Homogeneous systems"
        }), ": If all agents are built on the same framework (e.g., all CrewAI), use that framework's native communication instead."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-explain-the-agent-to-agent-a2a-protocol-and-how-it-differs-from-mcp",
      children: "Q1: Explain the Agent-to-Agent (A2A) protocol and how it differs from MCP."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A2A is Google's open protocol for agent-to-agent interoperability. It standardizes how agents discover each other, announce capabilities, delegate tasks, and exchange artifacts using JSON-RPC messages. The key difference from MCP is: A2A is agent-to-agent communication (coordination, delegation), while MCP is agent-to-tool communication (tool execution, data access). They are complementary — a complete system uses A2A for inter-agent orchestration and MCP for tool access."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-what-is-an-agent-card-and-what-information-does-it-contain",
      children: "Q2: What is an Agent Card and what information does it contain?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " An Agent Card is a JSON metadata document that every A2A-compliant agent publishes. It contains: agent identity (name, ID, version), description, endpoint URLs, authentication requirements (OAuth, mTLS, etc.), list of capabilities with input/output schemas, supported transport protocols, rate limiting info, and links to documentation/policies. It's analogous to an OpenAPI spec but designed specifically for agents. The card is typically hosted at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/.well-known/agent-card.json"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-describe-the-a2a-task-state-machine-and-its-transitions",
      children: "Q3: Describe the A2A task state machine and its transitions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The A2A task state machine has six states: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "submitted"
      }), " (task received, queued), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "working"
      }), " (actively being processed), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "input-required"
      }), " (needs more information from requester), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "completed"
      }), " (successful with artifacts), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "failed"
      }), " (encountered error), and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "canceled"
      }), " (requester aborted). Transitions: submitted → working, working → completed/failed/canceled/input-required, input-required → working (after requester provides input). This state model enables reliable tracking of long-running agent tasks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-how-does-a2a-handle-agent-discovery",
      children: "Q4: How does A2A handle agent discovery?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A2A supports three discovery mechanisms: 1) Direct Card Fetch — the requester knows the agent's card URL and fetches it directly. 2) Well-Known Endpoint — agents serve their card at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/.well-known/agent-card.json"
      }), " (similar to OIDC discovery). 3) Directory Registry — a centralized or federated registry indexes agent cards for search-based discovery. The agent card contains all capability and authentication information needed to interact with the agent."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-explain-identity-propagation-in-a2a-and-why-it-matters",
      children: "Q5: Explain identity propagation in A2A and why it matters."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Identity propagation ensures that when Agent A delegates a task to Agent B, Agent B knows the original caller's identity (not just Agent A's). In A2A, this is handled through delegation chains — a list of agent IDs appended to the auth context as tasks pass from one agent to another. This is critical for: audit trails (knowing who initiated a workflow), authorization (enforcing the original caller's permissions), and debugging (tracing cross-agent issues). The delegation chain prevents infinite delegation loops by capping depth."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-how-does-a2a-compare-to-function-calling-in-llms",
      children: "Q6: How does A2A compare to function calling in LLMs?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Function calling is LLM-to-API: the model generates JSON arguments for a predefined function, the system executes it, and returns results. It's single-step, stateless, and has no discovery. A2A is agent-to-agent: full task lifecycle management, capability discovery, artifact exchange, streaming updates, and identity propagation. Use function calling for simple tool use within a single agent. Use A2A when you need multiple agents to coordinate on complex, long-running workflows across organizational boundaries."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-what-transport-protocols-does-a2a-support-and-when-would-you-use-each",
      children: "Q7: What transport protocols does A2A support and when would you use each?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A2A is transport-agnostic but commonly supports: 1) HTTP/2 — standard request-response for most use cases. 2) WebSockets — bidirectional streaming for real-time task updates. 3) gRPC — high-performance, typed communication for internal microservice agents. 4) SSE (Server-Sent Events) — one-directional streaming for task progress updates. The choice depends on requirements: HTTP/2 for general use, WebSockets for interactive agents, gRPC for high-throughput internal systems."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-how-do-you-secure-an-a2a-deployment-in-production",
      children: "Q8: How do you secure an A2A deployment in production?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Production A2A security involves: 1) Authentication — OAuth 2.0 (Bearer JWT) or mTLS as declared in the agent card. 2) Authorization — RBAC with scope and role validation per capability. 3) Identity Propagation — delegation chains preserve the original caller's identity. 4) Push Notification Verification — HMAC signatures on webhook callbacks. 5) Rate Limiting — per-user and global limits enforced at the gateway. 6) Audit Logging — all task requests and delegations logged for compliance. 7) Delegation Depth Limits — prevent infinite delegation loops (max 5 hops)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-describe-a-real-world-architecture-using-both-a2a-and-mcp",
      children: "Q9: Describe a real-world architecture using both A2A and MCP."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Consider an enterprise code review system: An orchestrator agent receives review requests. It uses A2A to delegate to specialist agents — a Code Review Agent, a Security Analysis Agent, and a Documentation Agent. Each specialist uses MCP internally to access tools: the Code Review Agent uses MCP to call GitHub's API, the Security Agent uses MCP to run vulnerability scanners, and the Documentation Agent uses MCP to query a knowledge base. The orchestrator collects artifacts from all three via A2A and produces a consolidated report. A2A handles inter-agent coordination; MCP handles tool access."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-what-are-the-limitations-of-a2a-you-would-consider-before-adopting-it",
      children: "Q10: What are the limitations of A2A you would consider before adopting it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Key limitations: 1) Overhead — discovery, authentication, and state tracking add latency vs direct function calling. 2) Complexity — requires agent card management, task state persistence, and delegation chain logic. 3) Maturity — A2A is newer than MCP or function calling; ecosystem and tooling are still evolving. 4) Not for simple use cases — if you have one agent calling one API, A2A is overkill. 5) Framework support — not all agent frameworks natively support A2A yet; you may need custom adapters. 6) Cross-org trust — identity propagation across organizational boundaries requires mutual trust infrastructure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Agent-to-Agent (A2A) protocol, introduced by Google in 2025, is a pivotal technology for the emerging multi-agent ecosystem. It defines a standard way for autonomous agents from different vendors and frameworks to discover each other, announce capabilities, delegate tasks, and exchange results. Built on JSON-RPC 2.0 with a well-defined task state machine, A2A handles the full lifecycle of agent-to-agent interactions — from capability discovery through task completion and artifact delivery."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A2A is designed to be complementary to the Model Context Protocol (MCP): MCP standardizes how agents connect to tools and data, while A2A standardizes how agents connect to other agents. Together they form a complete interoperability stack. Security is a first-class concern, with support for OAuth 2.0, mTLS, identity propagation via delegation chains, and HMAC-signed push notifications."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For AI engineers, understanding A2A is essential for architecting production multi-agent systems that span organizational boundaries. The protocol's capability-driven discovery model, robust task lifecycle, and enterprise security patterns make it the emerging standard for agent interoperability in production environments."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz-5-mcq",
      children: "Chapter Quiz (5 MCQ)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "questions",
      children: "Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the primary purpose of Google's A2A protocol?\r\na) Standardize how LLMs call functions\r\nb) Enable direct agent-to-agent communication and task delegation\r\nc) Replace REST APIs with JSON-RPC\r\nd) Define a new model training protocol"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which document does an A2A agent publish to describe its capabilities?\r\na) OpenAPI specification\r\nb) Agent Card\r\nc) Function manifest\r\nd) Capability flag"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the correct sequence of states in an A2A task lifecycle?\r\na) created → running → done\r\nb) submitted → working → completed/failed/canceled/input-required\r\nc) queued → processing → finished\r\nd) pending → active → terminated"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does A2A differ from MCP?\r\na) A2A is for agent-to-agent, MCP is for agent-to-tool communication\r\nb) A2A uses REST, MCP uses gRPC\r\nc) A2A is Google-only, MCP is open source\r\nd) A2A is stateless, MCP has task tracking"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When should you choose A2A over function calling?\r\na) When calling a single API from an LLM\r\nb) When orchestrating multiple specialist agents across organizational boundaries\r\nc) When you need the lowest possible latency\r\nd) When building a stateless chatbot"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "answers",
      children: "Answers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b — A2A enables direct agent-to-agent communication and task delegation, unlike function calling (LLM-to-API) or MCP (agent-to-tool)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b — The Agent Card is the JSON metadata document containing agent identity, capabilities, and authentication info."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b — The A2A state machine is: submitted → working → completed/failed/canceled/input-required (with input-required transitioning back to working)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a — A2A handles agent-to-agent coordination; MCP handles agent-to-tool/data access. They are complementary."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b — A2A is designed for multi-agent orchestration across boundaries. Function calling is simpler and better for single-tool, single-agent scenarios."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Confusing A2A with MCP"
        }), ": A2A is agent-to-agent; MCP is agent-to-tool. They are complementary, not alternatives."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ignoring security"
        }), ": Deploying A2A agents without authentication or identity propagation creates severe vulnerabilities."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Over-engineering simple use cases"
        }), ": Using A2A for a single agent calling one API is unnecessary — use function calling instead."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Missing delegation depth limits"
        }), ": Without max delegation depth, agents can create infinite delegation loops."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Not validating push notifications"
        }), ": Always verify HMAC signatures on push notification webhooks to prevent spoofing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Neglecting rate limiting"
        }), ": Production A2A agents without rate limits can be overwhelmed by cascading delegations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stateless task handling"
        }), ": A2A tasks can be long-running; always persist task state and support status queries."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A2A"
        }), ": Google's open protocol for agent-to-agent communication (April 2025)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent Card"
        }), ": JSON metadata at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/.well-known/agent-card.json"
        }), " with identity, capabilities, auth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task states"
        }), ": submitted → working → input-required → working → completed/failed/canceled."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Artifacts"
        }), ": Named outputs with parts — text (string), file (URL + MIME), data (structured JSON)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "JSON-RPC"
        }), ": methods = tasks_send, tasks_get, tasks_cancel, tasks_sendSubscribe."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Discovery"
        }), ": direct card fetch, well-known endpoint, or directory registry."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identity propagation"
        }), ": delegation chain in auth context, max 5 hops."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security"
        }), ": OAuth 2.0, mTLS, RBAC, HMAC push notification verification."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A2A vs MCP"
        }), ": A2A = agent coordination; MCP = tool access. Use both together."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enterprise"
        }), ": gateway, rate limiting, audit logging, service mesh, OpenTelemetry."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises-5",
      children: "Exercises (5)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-build-an-agent-card",
      children: "Exercise 1: Build an Agent Card"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create an AgentCard for a \"Data Summarizer Agent\" that has three capabilities: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "summarize_text"
      }), " (input: text, output: summary), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "extract_keywords"
      }), " (input: text, output: keyword list), and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "generate_report"
      }), " (input: data dict, output: PDF URL). The agent requires OAuth 2.0 authentication with \"data:read\" and \"data:write\" scopes. Include proper rate limiting and endpoint URLs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-task-delegation-flow",
      children: "Exercise 2: Task Delegation Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write Python code that simulates a complete task delegation flow:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent A discovers Agent B's card"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Agent A sends a task using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tasks_send"
        }), " with a text part containing \"Summarize the quarterly earnings report\""]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent B responds with status \"submitted\", then \"working\" at 30%, then \"working\" at 70%, then \"completed\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The completed response includes an artifact with a text part containing the summary and a data part with statistics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-a2a--mcp-integration",
      children: "Exercise 3: A2A + MCP Integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a simulated \"Research Agent\" that receives A2A task requests and internally uses three MCP tools: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "web_search"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "database_query"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "document_generate"
      }), ". Show how the A2A task is decomposed into MCP tool calls and the results are assembled into an artifact. Include proper error handling if one of the MCP tools fails."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-security-authorization",
      children: "Exercise 4: Security Authorization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement an authorization system where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User \"alice\" has roles [\"analyst\"] and scopes [\"data:read\"]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User \"bob\" has roles [\"admin\"] and scopes [\"data:read\", \"data:write\", \"admin\"]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Capability \"delete_dataset\" requires scope \"admin\" and role \"admin\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Capability \"view_dataset\" requires scope \"data:read\" and role [\"analyst\", \"admin\"]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show that alice can view but not delete, and bob can do both"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Demonstrate identity propagation when alice's request is delegated through a processing agent"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-protocol-decision-framework",
      children: "Exercise 5: Protocol Decision Framework"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a function ", (0,jsx_runtime.jsx)(_components.code, {
        children: "recommend_protocol(requirements: dict) -> str"
      }), " that takes a dictionary with keys: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "multi_agent: bool"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "needs_tool_access: bool"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "task_duration_seconds: int"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cross_org: bool"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "needs_discovery: bool"
      }), " and returns a recommendation string explaining whether to use A2A, MCP, function calling, or a combination. Test it on at least 5 different scenarios."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A2A is agent-to-agent"
        }), ": Google's open protocol for agent interoperability via discovery, capability announcement, and task delegation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent Cards are the foundation"
        }), ": Every A2A agent publishes a JSON card describing its identity, capabilities, authentication, and endpoints — enabling dynamic discovery."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "JSON-RPC 2.0 message format"
        }), ": Tasks use a state machine (submitted → working → completed/failed/canceled) with artifacts containing parts (text, file, data)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security is built in"
        }), ": OAuth 2.0, mTLS, identity propagation with delegation chains, and HMAC-signed push notifications."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A2A + MCP = complete stack"
        }), ": A2A handles inter-agent orchestration; MCP handles tool/data access. Used together in production systems."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Choose the right protocol"
        }), ": A2A for multi-agent, cross-org workflows. MCP for tool access. Function calling for simple LLM tool use."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enterprise patterns"
        }), ": API gateways, rate limiting, audit logging, and service mesh integration are essential for production A2A deployments."]
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
            children: "Explain the core idea of Agent-to-Agent (A2A) Protocol in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Agent-to-Agent (A2A) Protocol."
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
            children: "Describe a production bug caused by misunderstanding Agent-to-Agent (A2A) Protocol. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Agent-to-Agent (A2A) Protocol from 10 users to 10 million?"
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
            children: "Compare Agent-to-Agent (A2A) Protocol with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Agent-to-Agent (A2A) Protocol."
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
            children: "How does Agent-to-Agent (A2A) Protocol behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Agent-to-Agent (A2A) Protocol run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Agent-to-Agent (A2A) Protocol that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Agent-to-Agent (A2A) Protocol explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Agent-to-Agent (A2A) Protocol\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Agent-to-Agent (A2A) Protocol to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Agent-to-Agent (A2A) Protocol (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Agent-to-Agent (A2A) Protocol and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Agent-to-Agent (A2A) Protocol-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Agent-to-Agent (A2A) Protocol interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Agent-to-Agent (A2A) Protocol in production today?"
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
        }), " Agent-to-Agent (A2A) Protocol builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Agent-to-Agent (A2A) Protocol before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Agent-to-Agent (A2A) Protocol is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Agent-to-Agent (A2A) Protocol in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Agent-to-Agent (A2A) Protocol chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Agent-to-Agent (A2A) Protocol is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 15 A2A Protocol is ___. — Answer: O(k) per tool call where k=tool latency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 15 A2A Protocol is ___. — Answer: infinite loops, tool failures, context overflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Agent-to-Agent (A2A) Protocol issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Agent-to-Agent (A2A) Protocol in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Agent-to-Agent (A2A) Protocol that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Agent-to-Agent (A2A) Protocol is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Agent-to-Agent (A2A) Protocol in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Agent-to-Agent (A2A) Protocol and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Agent-to-Agent (A2A) Protocol on an empty input?"
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
            children: "Complete Medium exercises, explain Agent-to-Agent (A2A) Protocol to someone else"
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
        children: "Always write a one-line example of Agent-to-Agent (A2A) Protocol from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Agent-to-Agent (A2A) Protocol when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Agent-to-Agent (A2A) Protocol twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Agent-to-Agent (A2A) Protocol snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Agent-to-Agent (A2A) Protocol listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Agent-to-Agent (A2A) Protocol to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Agent-to-Agent (A2A) Protocol by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Agent-to-Agent (A2A) Protocol to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
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
        children: "'Building LLM Powered Applications' by Valentina Alto (Packt) (A2A) Protocol"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 22 — builds the foundation for 15 A2A Protocol"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 15 A2A Protocol with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 15 A2A Protocol fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 15 A2A Protocol"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 15 A2A Protocol"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 15 A2A Protocol?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 15 A2A Protocol?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 15 A2A Protocol asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 15 A2A Protocol?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent-to-Agent (A2A) Protocol is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Agent-to-Agent (A2A) Protocol."
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
        children: "Agent-to-Agent (A2A) Protocol emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Agent-to-Agent (A2A) Protocol today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Agent-to-Agent (A2A) Protocol — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Agent-to-Agent (A2A) Protocol changes quickly; focus on fundamentals that remain stable."
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
            children: "15 A2A Protocol is like a GPS navigation system"
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
          }), " — this chapter contributes the Agent-to-Agent (A2A) Protocol skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-15a2aprotocol-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Agent-to-Agent (A2A) Protocol in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "An AI agent is an autonomous system that uses an LLM as its reasoning engine to perceive inputs, decide actions, call tools, observe results, and iterate until a task is complete."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-15a2aprotocol-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Most common agent mistake: no max_steps limit causes infinite loops. Always set max_steps=10-20 and handle the timeout case explicitly with a fallback response."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-15a2aprotocol-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Agent-to-Agent (A2A) Protocol approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Agent complexity: O(k * t) where k=steps taken, t=average tool latency. Each LLM call is O(n^2) attention over context. Total cost grows linearly with steps."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-15a2aprotocol-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Agent-to-Agent (A2A) Protocol NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Agents are NOT the right choice when: (1) a single LLM call suffices, (2) deterministic pipelines are required, (3) latency < 500ms is needed, (4) the task has no external tool requirements."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-15a2aprotocol-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Agent-to-Agent (A2A) Protocol applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Agent-to-Agent (A2A) Protocol (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Agent-to-Agent (A2A) Protocol (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Agent-to-Agent (A2A) Protocol-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Agent-to-Agent (A2A) Protocol in production at scale"
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
        }), " — Claude's native function calling interface (A2A) Protocol"]
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
        }), ": Add structured logging at each stage of the 15 A2A Protocol pipeline to identify exactly where the failure occurs."]
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
        children: "Explain Agent-to-Agent (A2A) Protocol in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Agent-to-Agent (A2A) Protocol."
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
        children: "Tell me about a time you debugged a Agent-to-Agent (A2A) Protocol problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Agent-to-Agent (A2A) Protocol is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_15_a2a_protocol(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 15 A2A Protocol.\r\n\r\n    Key concepts: tools, memory, planning, execution, observation\r\n    Complexity: O(k) per tool call where k=tool latency\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 15 A2A Protocol here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain Agent-to-Agent (A2A) Protocol without notes"
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
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent-to-Agent (A2A) Protocol, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Agent-to-Agent (A2A) Protocol depends on input size and distribution — always benchmark for your own data."
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