"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[7068],{

/***/ 70608
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_13_ai_agents_langgraph_06_multi_agent_systems_md_ab3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-13-ai-agents-langgraph-06-multi-agent-systems-md-ab3.json
const site_docs_courses_ai_engineering_placement_13_ai_agents_langgraph_06_multi_agent_systems_md_ab3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-agents-langgraph/06-multi-agent-systems","title":"Multi-Agent Systems","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/13-ai-agents-langgraph/06-multi-agent-systems.md","sourceDirName":"courses/ai-engineering-placement/13-ai-agents-langgraph","slug":"/ai-engineering-placement/13-ai-agents-langgraph/06-multi-agent-systems","permalink":"/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/06-multi-agent-systems","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":181,"frontMatter":{"id":"06-multi-agent-systems","slug":"/ai-engineering-placement/13-ai-agents-langgraph/06-multi-agent-systems","title":"Multi-Agent Systems","sidebar_label":"Multi-Agent Systems","sidebar_position":181},"sidebar":"placementSidebar","previous":{"title":"Memory and State","permalink":"/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/05-memory-and-state"},"next":{"title":"Human-in-the-Loop","permalink":"/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/07-human-in-the-loop"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/13-ai-agents-langgraph/06-multi-agent-systems.md


const frontMatter = {
	id: '06-multi-agent-systems',
	slug: '/ai-engineering-placement/13-ai-agents-langgraph/06-multi-agent-systems',
	title: 'Multi-Agent Systems',
	sidebar_label: 'Multi-Agent Systems',
	sidebar_position: 181
};
const contentTitle = 'Multi-Agent Systems';

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
  "value": "6.1 Multi-Agent Patterns",
  "id": "61-multi-agent-patterns",
  "level": 2
}, {
  "value": "Communication Patterns",
  "id": "communication-patterns",
  "level": 3
}, {
  "value": "6.2 Agent Communication",
  "id": "62-agent-communication",
  "level": 2
}, {
  "value": "6.2.1 Message Bus",
  "id": "621-message-bus",
  "level": 3
}, {
  "value": "6.2.2 Structured Communication Protocol",
  "id": "622-structured-communication-protocol",
  "level": 3
}, {
  "value": "6.2.3 Agent Discovery",
  "id": "623-agent-discovery",
  "level": 3
}, {
  "value": "6.3 Coordinator Pattern",
  "id": "63-coordinator-pattern",
  "level": 2
}, {
  "value": "6.3.1 Central Coordinator",
  "id": "631-central-coordinator",
  "level": 3
}, {
  "value": "6.3.2 Dynamic Task Distribution",
  "id": "632-dynamic-task-distribution",
  "level": 3
}, {
  "value": "6.4 Specialized Agents",
  "id": "64-specialized-agents",
  "level": 2
}, {
  "value": "6.4.1 Role Definitions",
  "id": "641-role-definitions",
  "level": 3
}, {
  "value": "6.4.2 Agent Pipeline",
  "id": "642-agent-pipeline",
  "level": 3
}, {
  "value": "6.5 Consensus &amp; Conflict",
  "id": "65-consensus--conflict",
  "level": 2
}, {
  "value": "6.5.1 Voting Mechanism",
  "id": "651-voting-mechanism",
  "level": 3
}, {
  "value": "6.5.2 Conflict Resolution",
  "id": "652-conflict-resolution",
  "level": 3
}, {
  "value": "6.5.3 Consensus Building",
  "id": "653-consensus-building",
  "level": 3
}, {
  "value": "6.6 Multi-Agent Evaluation",
  "id": "66-multi-agent-evaluation",
  "level": 2
}, {
  "value": "6.6.1 Team Performance Metrics",
  "id": "661-team-performance-metrics",
  "level": 3
}, {
  "value": "6.6.2 Agent Contribution Analysis",
  "id": "662-agent-contribution-analysis",
  "level": 3
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
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Common Mistakes",
  "id": "common-mistakes",
  "level": 2
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
        id: "multi-agent-systems",
        children: "Multi-Agent Systems"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Objective"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand multi-agent system design patterns and communication protocols"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement agent-to-agent communication with message passing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build coordinator/supervisor patterns for agent teams"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design specialized agents with distinct roles and capabilities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement conflict resolution and consensus mechanisms"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI agents autonomously use tools to complete tasks. LangGraph builds stateful, multi-step agent workflows. This module covers agent architectures, tool use, memory, and production deployment."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding multi agent systems is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how multi agent systems works in practice."
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
            children: "6.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Agent Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Orchestration, collaboration, delegation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent Communication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Message passing, structured protocols"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coordinator Pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Central coordination for task distribution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specialized Agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Role-based agents with distinct expertise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consensus & Conflict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Voting, arbitration, conflict resolution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Agent Evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Team performance, coordination metrics"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    subgraph Agent Team\r\n        C[Coordinator]\r\n        R[Researcher]\r\n        A[Analyst]\r\n        W[Writer]\r\n    end\r\n    User -->|Task| C\r\n    C -->|Delegate| R\r\n    C -->|Delegate| A\r\n    C -->|Delegate| W\r\n    R -->|Findings| A\r\n    A -->|Insights| W\r\n    W -->|Output| C\r\n    C -->|Result| User"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "61-multi-agent-patterns",
      children: "6.1 Multi-Agent Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multi-agent systems enable complex tasks through collaboration between specialized agents."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "communication-patterns",
      children: "Communication Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\r\nfrom typing import List, Dict, Any, Optional, Callable\r\nfrom enum import Enum\r\nimport json\r\nimport time\r\n\r\nclass MessageType(Enum):\r\n    TASK = \"task\"\r\n    RESULT = \"result\"\r\n    QUERY = \"query\"\r\n    RESPONSE = \"response\"\r\n    ERROR = \"error\"\r\n    STATUS = \"status\"\r\n\r\n@dataclass\r\nclass AgentMessage:\r\n    sender: str\r\n    recipient: str\r\n    message_type: MessageType\r\n    content: Any\r\n    timestamp: float = field(default_factory=time.time)\r\n    message_id: str = \"\"\r\n    correlation_id: str = \"\"\r\n\r\nclass AgentBase:\r\n    def __init__(self, name: str, role: str, llm_fn: Callable):\r\n        self.name = name\r\n        self.role = role\r\n        self.llm = llm_fn\r\n        self.mailbox: List[AgentMessage] = []\r\n\r\n    def send(self, recipient: str, msg_type: MessageType, content: Any) -> AgentMessage:\r\n        msg = AgentMessage(\r\n            sender=self.name,\r\n            recipient=recipient,\r\n            message_type=msg_type,\r\n            content=content,\r\n        )\r\n        return msg\r\n\r\n    def receive(self, message: AgentMessage):\r\n        self.mailbox.append(message)\r\n\r\n    def process_mailbox(self):\r\n        while self.mailbox:\r\n            msg = self.mailbox.pop(0)\r\n            self.handle_message(msg)\r\n\r\n    def handle_message(self, message: AgentMessage):\r\n        pass\r\n\r\n    def __repr__(self):\r\n        return f\"{self.name} ({self.role})\"\r\n\r\nclass ResearcherAgent(AgentBase):\r\n    def __init__(self, name: str, llm_fn: Callable):\r\n        super().__init__(name, \"researcher\", llm_fn)\r\n\r\n    def handle_message(self, message: AgentMessage):\r\n        if message.message_type == MessageType.TASK:\r\n            result = self.llm(f\"Research: {message.content}\")\r\n            return self.send(message.sender, MessageType.RESULT, result)\r\n\r\nclass AnalystAgent(AgentBase):\r\n    def __init__(self, name: str, llm_fn: Callable):\r\n        super().__init__(name, \"analyst\", llm_fn)\r\n\r\n    def handle_message(self, message: AgentMessage):\r\n        if message.message_type == MessageType.TASK:\r\n            analysis = self.llm(f\"Analyze: {message.content}\")\r\n            return self.send(message.sender, MessageType.RESULT, analysis)\r\n\r\nprint(\"Multi-agent base classes defined\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "62-agent-communication",
      children: "6.2 Agent Communication"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "621-message-bus",
      children: "6.2.1 Message Bus"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MessageBus:\r\n    def __init__(self):\r\n        self.agents: Dict[str, AgentBase] = {}\r\n        self.message_log: List[AgentMessage] = []\r\n\r\n    def register(self, agent: AgentBase):\r\n        self.agents[agent.name] = agent\r\n\r\n    def send(self, message: AgentMessage):\r\n        self.message_log.append(message)\r\n        recipient = self.agents.get(message.recipient)\r\n        if recipient:\r\n            recipient.receive(message)\r\n\r\n    def broadcast(self, sender: str, msg_type: MessageType, content: Any):\r\n        for name in self.agents:\r\n            if name != sender:\r\n                msg = AgentMessage(sender=sender, recipient=name, message_type=msg_type, content=content)\r\n                self.send(msg)\r\n\r\n    def query(self, sender: str, recipient: str, content: Any) -> Optional[AgentMessage]:\r\n        msg = AgentMessage(sender=sender, recipient=recipient, message_type=MessageType.QUERY, content=content)\r\n        self.send(msg)\r\n\r\n        agent = self.agents.get(recipient)\r\n        if agent:\r\n            agent.process_mailbox()\r\n            if agent.mailbox:\r\n                return agent.mailbox[-1]\r\n        return None\r\n\r\n    def get_history(self) -> List[Dict]:\r\n        return [\r\n            {\"from\": m.sender, \"to\": m.recipient, \"type\": m.message_type.value, \"content\": str(m.content)[:100]}\r\n            for m in self.message_log\r\n        ]\r\n\r\nbus = MessageBus()\r\nprint(\"Message bus ready\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "622-structured-communication-protocol",
      children: "6.2.2 Structured Communication Protocol"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class CommunicationProtocol:\r\n    def __init__(self, bus: MessageBus):\r\n        self.bus = bus\r\n\r\n    def request_response(self, sender: str, recipient: str, request: Dict, timeout: float = 5.0) -> Optional[Dict]:\r\n        msg = AgentMessage(\r\n            sender=sender,\r\n            recipient=recipient,\r\n            message_type=MessageType.QUERY,\r\n            content=request,\r\n        )\r\n        self.bus.send(msg)\r\n        return {\"status\": \"sent\", \"request\": request}\r\n\r\n    def task_delegation(self, coordinator: str, worker: str, task: Dict) -> str:\r\n        task_id = f\"task-{time.time()}\"\r\n        msg = AgentMessage(\r\n            sender=coordinator,\r\n            recipient=worker,\r\n            message_type=MessageType.TASK,\r\n            content={**task, \"task_id\": task_id},\r\n        )\r\n        self.bus.send(msg)\r\n        return task_id\r\n\r\n    def status_report(self, agent_name: str, status: Dict):\r\n        msg = AgentMessage(\r\n            sender=agent_name,\r\n            recipient=\"*coordinator*\",\r\n            message_type=MessageType.STATUS,\r\n            content=status,\r\n        )\r\n        self.bus.broadcast(agent_name, MessageType.STATUS, status)\r\n\r\nprotocol = CommunicationProtocol(bus)\r\ntask_id = protocol.task_delegation(\"coordinator\", \"researcher\", {\"query\": \"AI trends\"})\r\nprint(f\"Delegated task: {task_id}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "623-agent-discovery",
      children: "6.2.3 Agent Discovery"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class AgentRegistry:\r\n    def __init__(self):\r\n        self.agents: Dict[str, Dict] = {}\r\n\r\n    def register(self, name: str, role: str, capabilities: List[str], endpoint: str = \"\"):\r\n        self.agents[name] = {\r\n            \"name\": name,\r\n            \"role\": role,\r\n            \"capabilities\": capabilities,\r\n            \"status\": \"available\",\r\n            \"endpoint\": endpoint,\r\n        }\r\n\r\n    def find_by_capability(self, capability: str) -> List[Dict]:\r\n        return [a for a in self.agents.values() if capability in a[\"capabilities\"]]\r\n\r\n    def find_by_role(self, role: str) -> List[Dict]:\r\n        return [a for a in self.agents.values() if a[\"role\"] == role]\r\n\r\n    def set_status(self, name: str, status: str):\r\n        if name in self.agents:\r\n            self.agents[name][\"status\"] = status\r\n\r\n    def list_available(self) -> List[Dict]:\r\n        return [a for a in self.agents.values() if a[\"status\"] == \"available\"]\r\n\r\nregistry = AgentRegistry()\r\nregistry.register(\"researcher-1\", \"researcher\", [\"web_search\", \"data_collection\"])\r\nregistry.register(\"analyst-1\", \"analyst\", [\"data_analysis\", \"visualization\"])\r\nregistry.register(\"writer-1\", \"writer\", [\"content_generation\", \"summarization\"])\r\n\r\navailable = registry.find_by_capability(\"web_search\")\r\nprint(f\"Available for web_search: {[a['name'] for a in available]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "63-coordinator-pattern",
      children: "6.3 Coordinator Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "631-central-coordinator",
      children: "6.3.1 Central Coordinator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class CoordinatorAgent(AgentBase):\r\n    def __init__(self, name: str, llm_fn: Callable, registry: AgentRegistry):\r\n        super().__init__(name, \"coordinator\", llm_fn)\r\n        self.registry = registry\r\n        self.task_queue: List[Dict] = []\r\n        self.task_results: Dict[str, Any] = {}\r\n\r\n    def plan_task(self, task: str) -> List[Dict]:\r\n        plan_prompt = f\"\"\"Plan how to accomplish this task using specialized agents.\r\n\r\nAvailable agents:\r\n{chr(10).join(f'- {a[\"name\"]} ({a[\"role\"]}): {a[\"capabilities\"]}' for a in self.registry.list_available())}\r\n\r\nTask: {task}\r\n\r\nFor each step, specify which agent should handle it and what input to provide.\r\nRespond as JSON list: [{{\"agent\": \"name\", \"input\": \"instructions\"}}]\"\"\"\r\n        plan_str = self.llm(plan_prompt)\r\n        try:\r\n            return json.loads(plan_str)\r\n        except json.JSONDecodeError:\r\n            return [{\"agent\": self.registry.list_available()[0][\"name\"], \"input\": task}]\r\n\r\n    def execute_plan(self, plan: List[Dict], bus: MessageBus) -> Dict:\r\n        for step in plan:\r\n            agent_name = step[\"agent\"]\r\n            task_msg = AgentMessage(\r\n                sender=self.name,\r\n                recipient=agent_name,\r\n                message_type=MessageType.TASK,\r\n                content=step[\"input\"],\r\n            )\r\n            bus.send(task_msg)\r\n            self.task_queue.append({\"agent\": agent_name, \"task\": step, \"status\": \"dispatched\"})\r\n        return {\"status\": \"dispatched\", \"num_tasks\": len(plan)}\r\n\r\n    def collect_results(self, bus: MessageBus) -> Dict:\r\n        results = {}\r\n        for item in self.task_queue:\r\n            agent = bus.agents.get(item[\"agent\"])\r\n            if agent and agent.mailbox:\r\n                last_msg = agent.mailbox[-1]\r\n                results[item[\"agent\"]] = last_msg.content\r\n        return results\r\n\r\ncoordinator = CoordinatorAgent(\"coordinator\", lambda p: json.dumps([{\"agent\": \"researcher-1\", \"input\": \"research task\"}]), registry)\r\nprint(\"Coordinator ready\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "632-dynamic-task-distribution",
      children: "6.3.2 Dynamic Task Distribution"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class WorkDistributor:\r\n    def __init__(self, coordinator: CoordinatorAgent, bus: MessageBus):\r\n        self.coordinator = coordinator\r\n        self.bus = bus\r\n\r\n    def distribute(self, task: str, strategy: str = \"capability\") -> Dict:\r\n        if strategy == \"capability\":\r\n            return self._distribute_by_capability(task)\r\n        elif strategy == \"round_robin\":\r\n            return self._distribute_round_robin(task)\r\n        elif strategy == \"load_balanced\":\r\n            return self._distribute_load_balanced(task)\r\n        return {}\r\n\r\n    def _distribute_by_capability(self, task: str) -> Dict:\r\n        plan = self.coordinator.plan_task(task)\r\n        return self.coordinator.execute_plan(plan, self.bus)\r\n\r\n    def _distribute_round_robin(self, task: str) -> Dict:\r\n        agents = self.coordinator.registry.list_available()\r\n        if not agents:\r\n            return {\"error\": \"No agents available\"}\r\n        agent = agents[len(self.coordinator.task_queue) % len(agents)]\r\n        return {\"strategy\": \"round_robin\", \"assigned_to\": agent[\"name\"]}\r\n\r\n    def _distribute_load_balanced(self, task: str) -> Dict:\r\n        agents = self.coordinator.registry.list_available()\r\n        agent_loads = {a[\"name\"]: 0 for a in agents}\r\n        for t in self.coordinator.task_queue:\r\n            if t[\"agent\"] in agent_loads:\r\n                agent_loads[t[\"agent\"]] += 1\r\n        least_loaded = min(agent_loads, key=agent_loads.get)\r\n        return {\"strategy\": \"load_balanced\", \"assigned_to\": least_loaded}\r\n\r\ndistributor = WorkDistributor(coordinator, bus)\r\nresult = distributor.distribute(\"Research AI trends\", \"round_robin\")\r\nprint(f\"Distribution: {result}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "64-specialized-agents",
      children: "6.4 Specialized Agents"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "641-role-definitions",
      children: "6.4.1 Role Definitions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RoleDefinitions:\r\n    @staticmethod\r\n    def create_researcher(name: str, llm_fn: Callable) -> AgentBase:\r\n        agent = AgentBase(name, \"researcher\", llm_fn)\r\n        agent.__class__ = ResearcherAgent\r\n        return agent\r\n\r\n    @staticmethod\r\n    def create_analyst(name: str, llm_fn: Callable) -> AgentBase:\r\n        agent = AgentBase(name, \"analyst\", llm_fn)\r\n        return agent\r\n\r\n    @staticmethod\r\n    def create_writer(name: str, llm_fn: Callable) -> AgentBase:\r\n        writer_prompt = \"You are a professional writer specializing in clear, engaging content.\"\r\n\r\n        def write_content(state: Dict) -> Dict:\r\n            return {\"content\": f\"Written content based on: {state.get('findings', '')}\"}\r\n\r\n        agent = AgentBase(name, \"writer\", llm_fn)\r\n        return agent\r\n\r\n    @staticmethod\r\n    def create_quality_assurance(name: str, llm_fn: Callable) -> AgentBase:\r\n        def review(state: Dict) -> Dict:\r\n            return {\"review\": \"Content meets quality standards.\"}\r\n\r\n        agent = AgentBase(name, \"qa\", llm_fn)\r\n        return agent\r\n\r\nresearcher = RoleDefinitions.create_researcher(\"researcher-1\", lambda p: \"Research findings.\")\r\nanalyst = RoleDefinitions.create_analyst(\"analyst-1\", lambda p: \"Analysis complete.\")\r\nprint(f\"Created specialized agents\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "642-agent-pipeline",
      children: "6.4.2 Agent Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class AgentPipeline:\r\n    def __init__(self, stages: List[str]):\r\n        self.stages = stages\r\n        self.results: Dict[str, Any] = {}\r\n\r\n    def run(self, initial_input: str, agents: Dict[str, AgentBase], bus: MessageBus) -> str:\r\n        current_input = initial_input\r\n\r\n        for stage in self.stages:\r\n            agent = agents.get(stage)\r\n            if not agent:\r\n                continue\r\n\r\n            msg = AgentMessage(sender=\"pipeline\", recipient=stage, message_type=MessageType.TASK, content=current_input)\r\n            bus.send(msg)\r\n            agent.process_mailbox()\r\n\r\n            if agent.mailbox:\r\n                last = agent.mailbox[-1]\r\n                self.results[stage] = last.content\r\n                current_input = last.content if isinstance(last.content, str) else str(last.content)\r\n\r\n        return current_input\r\n\r\npipeline = AgentPipeline([\"researcher-1\", \"analyst-1\"])\r\nprint(\"Agent pipeline configured\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "65-consensus--conflict",
      children: "6.5 Consensus & Conflict"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "651-voting-mechanism",
      children: "6.5.1 Voting Mechanism"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class VotingMechanism:\r\n    def __init__(self):\r\n        self.votes: Dict[str, List[str]] = {}\r\n\r\n    def request_vote(self, proposal: str, voters: List[AgentBase]) -> Dict[str, int]:\r\n        tally = {}\r\n        for voter in voters:\r\n            response = voter.llm(f\"Vote YES or NO on: {proposal}\")\r\n            decision = \"YES\" if \"YES\" in response.upper() else \"NO\"\r\n            tally[voter.name] = decision\r\n\r\n        yes_votes = sum(1 for v in tally.values() if v == \"YES\")\r\n        no_votes = sum(1 for v in tally.values() if v == \"NO\")\r\n        self.votes[proposal] = list(tally.values())\r\n\r\n        return {\r\n            \"proposal\": proposal,\r\n            \"yes\": yes_votes,\r\n            \"no\": no_votes,\r\n            \"passed\": yes_votes > no_votes,\r\n        }\r\n\r\n    def weighted_vote(self, proposal: str, voters: List[tuple]) -> Dict:\r\n        total_weight = sum(w for _, w in voters)\r\n        yes_weight = 0\r\n\r\n        for voter, weight in voters:\r\n            response = voter.llm(f\"Vote YES or NO on: {proposal}\")\r\n            if \"YES\" in response.upper():\r\n                yes_weight += weight\r\n\r\n        return {\r\n            \"proposal\": proposal,\r\n            \"yes_weight\": yes_weight,\r\n            \"no_weight\": total_weight - yes_weight,\r\n            \"passed\": yes_weight > total_weight / 2,\r\n        }\r\n\r\nvoting = VotingMechanism()\r\nvoters = [\r\n    AgentBase(\"voter-1\", \"voter\", lambda p: \"YES\"),\r\n    AgentBase(\"voter-2\", \"voter\", lambda p: \"NO\"),\r\n    AgentBase(\"voter-3\", \"voter\", lambda p: \"YES\"),\r\n]\r\nresult = voting.request_vote(\"Should we use Python for this project?\", voters)\r\nprint(f\"Vote result: {result['passed']} (YES: {result['yes']}, NO: {result['no']})\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "652-conflict-resolution",
      children: "6.5.2 Conflict Resolution"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ConflictResolver:\r\n    def __init__(self, arbitrator: AgentBase):\r\n        self.arbitrator = arbitrator\r\n        self.conflicts: List[Dict] = []\r\n\r\n    def detect_conflict(self, agent_a: AgentBase, agent_b: AgentBase, issue: str) -> bool:\r\n        response_a = agent_a.llm(f\"What is your position on: {issue}\")\r\n        response_b = agent_b.llm(f\"What is your position on: {issue}\")\r\n\r\n        positions_differ = response_a[:100] != response_b[:100]\r\n\r\n        if positions_differ:\r\n            self.conflicts.append({\r\n                \"agents\": [agent_a.name, agent_b.name],\r\n                \"issue\": issue,\r\n                \"positions\": [response_a[:100], response_b[:100]],\r\n            })\r\n        return positions_differ\r\n\r\n    def resolve(self, conflict: Dict) -> str:\r\n        resolution_prompt = f\"\"\"Resolve this conflict between agents.\r\n\r\nIssue: {conflict['issue']}\r\nPosition 1: {conflict['positions'][0]}\r\nPosition 2: {conflict['positions'][1]}\r\n\r\nProvide a resolution that incorporates the best of both positions:\"\"\"\r\n        resolution = self.arbitrator.llm(resolution_prompt)\r\n        conflict[\"resolution\"] = resolution\r\n        return resolution\r\n\r\narbitrator = AgentBase(\"arbitrator\", \"arbitrator\", lambda p: \"Compromise resolution.\")\r\nresolver = ConflictResolver(arbitrator)\r\nprint(\"Conflict resolver ready\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "653-consensus-building",
      children: "6.5.3 Consensus Building"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ConsensusBuilder:\r\n    def __init__(self, agents: List[AgentBase], max_rounds: int = 5):\r\n        self.agents = agents\r\n        self.max_rounds = max_rounds\r\n\r\n    def build_consensus(self, topic: str) -> Dict:\r\n        positions = {}\r\n        for agent in self.agents:\r\n            positions[agent.name] = agent.llm(f\"State your position on: {topic}\")\r\n\r\n        for round_num in range(self.max_rounds):\r\n            if self._check_agreement(positions):\r\n                return {\"topic\": topic, \"consensus\": True, \"final_position\": list(positions.values())[0], \"rounds\": round_num}\r\n\r\n            for agent in self.agents:\r\n                others = [p for n, p in positions.items() if n != agent.name]\r\n                consensus_prompt = f\"\"\"Current positions:\r\n{chr(10).join(f'- {n}: {p[:200]}' for n, p in positions.items())}\r\n\r\nYour position was: {positions[agent.name][:200]}\r\n\r\nCan you adjust to reach consensus? Respond with your revised position.\"\"\"\r\n                positions[agent.name] = agent.llm(consensus_prompt)\r\n\r\n        return {\"topic\": topic, \"consensus\": False, \"positions\": positions, \"rounds\": self.max_rounds}\r\n\r\n    def _check_agreement(self, positions: Dict) -> bool:\r\n        values = list(positions.values())\r\n        if len(values) < 2:\r\n            return True\r\n        first = values[0][:200]\r\n        return all(v[:200] == first for v in values[1:])\r\n\r\nbuilder = ConsensusBuilder(voters, max_rounds=3)\r\nprint(\"Consensus builder ready\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "66-multi-agent-evaluation",
      children: "6.6 Multi-Agent Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "661-team-performance-metrics",
      children: "6.6.1 Team Performance Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class TeamPerformance:\r\n    def __init__(self):\r\n        self.metrics = {\r\n            \"tasks_completed\": 0,\r\n            \"avg_completion_time\": 0.0,\r\n            \"conflicts_resolved\": 0,\r\n            \"messages_exchanged\": 0,\r\n            \"consensus_rate\": 0.0,\r\n        }\r\n        self.task_times: List[float] = []\r\n        self.consensus_count = 0\r\n        self.total_decisions = 0\r\n\r\n    def record_task(self, duration: float):\r\n        self.task_times.append(duration)\r\n        self.metrics[\"tasks_completed\"] += 1\r\n\r\n    def record_conflict_resolved(self):\r\n        self.metrics[\"conflicts_resolved\"] += 1\r\n\r\n    def record_message(self):\r\n        self.metrics[\"messages_exchanged\"] += 1\r\n\r\n    def record_decision(self, reached_consensus: bool):\r\n        self.total_decisions += 1\r\n        if reached_consensus:\r\n            self.consensus_count += 1\r\n        self.metrics[\"consensus_rate\"] = self.consensus_count / self.total_decisions if self.total_decisions > 0 else 0\r\n\r\n    def report(self) -> Dict:\r\n        if self.task_times:\r\n            self.metrics[\"avg_completion_time\"] = sum(self.task_times) / len(self.task_times)\r\n        return dict(self.metrics)\r\n\r\nperf = TeamPerformance()\r\nperf.record_task(2.5)\r\nperf.record_task(3.0)\r\nperf.record_message()\r\nperf.record_decision(True)\r\nprint(f\"Team performance: {perf.report()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "662-agent-contribution-analysis",
      children: "6.6.2 Agent Contribution Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ContributionAnalyzer:\r\n    def __init__(self, bus: MessageBus):\r\n        self.bus = bus\r\n\r\n    def analyze(self) -> Dict[str, Dict]:\r\n        history = self.bus.get_history()\r\n        agent_stats = defaultdict(lambda: {\"sent\": 0, \"received\": 0, \"tasks\": 0})\r\n\r\n        for entry in history:\r\n            agent_stats[entry[\"from\"]][\"sent\"] += 1\r\n            agent_stats[entry[\"to\"]][\"received\"] += 1\r\n            if entry[\"type\"] == \"task\":\r\n                agent_stats[entry[\"to\"]][\"tasks\"] += 1\r\n\r\n        return {\r\n            agent: {\r\n                \"messages_sent\": stats[\"sent\"],\r\n                \"messages_received\": stats[\"received\"],\r\n                \"tasks_assigned\": stats[\"tasks\"],\r\n                \"contribution_score\": round((stats[\"sent\"] + stats[\"tasks\"]) / max(stats[\"received\"], 1), 2),\r\n            }\r\n            for agent, stats in agent_stats.items()\r\n        }\r\n\r\nanalyzer = ContributionAnalyzer(bus)\r\nprint(\"Contribution analyzer ready\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multi-agent systems enable complex task completion through collaboration between specialized agents. Communication protocols define how agents exchange messages via a message bus. The coordinator.\r\npattern uses a central agent to plan and distribute tasks. Specialized agents (researcher, analyst, writer, QA) each contribute distinct capabilities. Conflict resolution mechanisms include voting,.\r\narbitration, and consensus building. Team performance metrics track task completion, conflict resolution, message volume, and consensus rate. Multi-agent architectures excel at tasks requiring diverse expertise and.\r\nparallel execution."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Takeaway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Define clear roles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each agent should have a specific, non-overlapping responsibility"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use structured messages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typed messages (task, result, error) improve reliability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implement conflict resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disagreements are inevitable — have a resolution strategy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monitor team health"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Track message volume, task completion, and conflict rates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Start with coordinator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Central coordination is simpler to debug than fully decentralized systems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ag06-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What are the main multi-agent communication patterns?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Multi-agent systems use several communication patterns. Point-to-point: one agent sends a message directly to another specific agent, useful for delegation. Broadcast: one agent sends a message to all other agents,.\nuseful for announcements or task distribution. Supervisor-based: a special supervisor agent receives updates from all workers, makes decisions, and assigns tasks — this centralizes coordination. Blackboard-based: agents share a common state/board where they write results and.\nread others' contributions — this decouples agents from knowing about each other. Hierarchical: agents are organized in a tree, with parent agents delegating to children and.\naggregating results. The choice depends on the task: supervisor patterns work for complex workflows with decisions, blackboard patterns work for collaborative problem-solving where agents contribute incrementally,.\nand point-to-point works for simple delegation."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ag06-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: What is the supervisor-orchestrator pattern?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The supervisor-orchestrator pattern uses a central supervisor agent that coordinates multiple worker agents. The supervisor receives the user's request, breaks it into subtasks,.\nassigns each subtask to a specialized worker agent (researcher, coder, reviewer), monitors progress, handles failures (reassigning failed tasks), and compiles the final response. Worker agents report their results back to the supervisor,.\nwhich decides next steps. The supervisor maintains the global state and has visibility into all workers' outputs. This pattern centralizes decision-making,.\nmaking it easier to enforce policies and track progress. The main limitation is that the supervisor becomes a single point of failure and.\na potential bottleneck. Implementation uses LangGraph with a supervisor node that has conditional edges to worker nodes, and worker nodes that always route back to the supervisor."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ag06-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What is peer-to-peer agent collaboration?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Peer-to-peer agent collaboration allows agents to communicate directly without a central coordinator. Each agent has an address or identifier and can send messages to specific peers. A P2P network layer handles message routing,.\ndelivery guarantees, and agent discovery. Agents broadcast their capabilities on join, and other agents build a capability index for routing messages to the right peer. This pattern is more robust than supervisor-based (no single point of failure) but.\nrequires more complex coordination logic — agents must handle negotiation, conflict resolution, and consensus on their own. P2P is used in decentralized AI systems and.\nscenarios where no single entity should have full control. The reliability manager tracks message delivery, retries failures, detects agent unavailability, and.\nfinds alternative agents with similar capabilities."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ag06-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How do you handle agent handoff?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Agent handoff transfers a conversation or task from one agent to another when the current agent can't handle it. Implementation: when an agent determines it cannot fulfill a request (missing capabilities,.\ninsufficient permissions, domain mismatch), it serializes the current context (conversation history, state, artifacts) into a handoff message and sends it to a handoff manager. The handoff manager examines the context,.\nfinds the best-suited agent based on capability matching and current load, and transfers the context. The receiving agent deserializes the context and.\ncontinues the conversation seamlessly. Important considerations: preserving context continuity (the user shouldn't notice the handoff), authorization (can this agent hand off to that agent?),.\nand fallback (what if no suitable agent exists?). Handoff can be automatic (agent detects it's out of scope) or user-initiated (\"connect me to a billing specialist\")."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ag06-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: What is the blackboard collaborative pattern?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The blackboard pattern uses a shared data store (the blackboard) that all agents can read from and write to. Agents work independently and.\nasynchronously, each contributing to the blackboard when they have relevant input. A controller agent monitors the blackboard for completion conditions and.\ndecides when enough information has been gathered. The blackboard stores structured data entries with metadata: contributor agent ID, timestamp, confidence score,.\nand status (proposed, verified, accepted). Agents subscribe to specific entry types and are notified when relevant entries appear. This pattern excels for.\nproblems where multiple perspectives are needed — like diagnosis (multiple specialists contribute findings), document creation (different sections written by different agents),.\nor data analysis (multiple algorithms analyze and cross-validate). The main challenge is managing the blackboard content — resolving conflicts between contradictory entries and.\navoiding information overload."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ag06-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How do you design a team configuration for multi-agent systems?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Team configuration defines which agents participate in a multi-agent system and how they should interact. Configuration data includes: agent roles and.\ncapabilities, communication topology (who can talk to whom), leader designation, fallback hierarchy, and interaction rules. Using a declarative YAML or JSON config file,.\nyou specify each agent's class, specialized tools, model settings, and limits (max iterations, max cost). The configuration is loaded at startup to instantiate agents and.\nwire up the communication graph. Benefits of declarative config: (1) non-developers can define teams; (2) A/B testing different team structures; (3) dynamic team composition based on task requirements. A ", (0,jsx_runtime.jsx)(_components.code, {
            children: "TeamConfig"
          }), " class validates configuration (references between agents,.\nrequired fields) and provides factory methods to create the team runtime."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ag06-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: How do you handle conflicts in multi-agent collaboration?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Conflicts arise when agents produce contradictory outputs or disagree on a course of action. Resolution strategies: (1) voting — each agent votes and.\nthe majority decision wins; (2) confidence-weighted selection — each output has a confidence score, and the highest-confidence output is chosen; (3) arbitration — a designated arbitrator.\nagent reviews conflicting outputs and makes the final decision; (4) evidence-based reconciliation — agents present supporting evidence and the best-supported output wins;.\n(5) consensus seeking — agents negotiate until they reach agreement (iterative, may be expensive). The choice depends on the domain — for.\nfactual questions, confidence-weighted or evidence-based works well; for subjective decisions, voting or arbitration may be better. Implementation logs all conflicts and.\nresolutions for audit and debugging. A conflict manager routes conflicting outputs to the appropriate resolution strategy based on the conflict type."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ag06-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How do you implement a peer-to-peer network for agents?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A peer-to-peer agent network connects agents directly without a central message broker. Implementation: each agent runs a lightweight server (e.g., using HTTP or.\nWebSockets) that accepts messages from other agents. A discovery service (using a registry or distributed hash table) maintains the list of active agents and.\ntheir capabilities. When an agent wants to send a message to a peer, it queries the discovery service for the target's address,.\nthen sends the message directly. Message delivery is handled by a reliable transport layer — if the target is unavailable, the message is queued and.\nretried. Key features: (1) dynamic join/leave — agents can join or leave without disrupting the network; (2) capability-based routing — messages are routed to agents that can handle them;.\n(3) fault tolerance — if an agent fails, others can take over its responsibilities. This pattern is more complex than centralized approaches but.\nprovides better scalability and resilience."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ag06-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: What is the hierarchical agent pattern?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The hierarchical agent pattern organizes agents in a tree structure where parent agents delegate tasks to child agents and aggregate results. A CEO agent at the top receives high-level goals and.\nbreaks them into department-level tasks. Department managers further decompose tasks for their team members. Each level abstracts complexity — the CEO doesn't know how individual agents work,.\nonly what each department can deliver. Benefits: (1) natural decomposition of complex tasks; (2) clear chains of command and responsibility; (3) each level can be tested independently;.\n(4) scales well — add more agents at any level without affecting other levels. Drawbacks: (1) slower decisions due to multiple layers;.\n(2) information loss as messages pass through layers; (3) rigid structure may not fit all problems. Implementation uses a recursive pattern — each parent agent acts as a supervisor.\nfor its children, and the same communication protocol works at every level."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ag06-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How do you design a multi-agent system for code generation?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A multi-agent code generation system uses specialized agents for different aspects of software development. Typical roles: ProductManager — writes specifications and.\nacceptance criteria; Architect — designs system architecture, component diagrams, API contracts; Developer — writes code implementing the architecture; Reviewer — reviews code for.\nbugs, style issues, security vulnerabilities; Tester — writes and runs tests; DevOps — handles deployment configuration. The process flows through agents sequentially or.\niteratively: ProductManager → Architect → Developer → Reviewer → Tester, with loops back to Developer if issues are found. Each agent has access to specialized tools: Developer can read/write files and.\nrun linters; Reviewer can run static analysis; Tester can execute test suites. The system maintains a shared state including requirements, architecture documents,.\nsource files, and test results. This pattern mirrors real-world development teams and produces higher quality code than a single agent approach."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "agent-s6-quiz1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " What is the role of a coordinator agent in a multi-agent system?"]
      }), "\nA. Execute all tasks\nB. Plan and distribute tasks to specialized agents\nC. Store agent memories\nD. Generate responses\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "agent-s6-quiz2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " How do agents communicate in a multi-agent system?"]
      }), "\nA. Through shared files\nB. Through structured messages on a message bus\nC. Through direct API calls\nD. Through database writes\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "agent-s6-quiz3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " What is a common method for resolving conflicts between agents?"]
      }), "\nA. Random selection\nB. Voting or arbitration by a neutral agent\nC. Ignoring the conflict\nD. Both agents go first\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "agent-s6-quiz4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " What does an agent registry provide in a multi-agent system?"]
      }), "\nA. Tool definitions\nB. Agent discovery by role and capability\nC. Message storage\nD. Performance metrics\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "agent-s6-quiz5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " Which metric indicates how well a multi-agent team collaborates?"]
      }), "\nA. Individual agent speed\nB. Consensus rate on decisions\nC. Number of tools per agent\nD. Memory size per agent\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Not understanding the fundamental concepts before applying them"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Skipping edge cases in implementation"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Not analyzing time/space complexity"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Forgetting to handle null/empty inputs"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Not practicing enough problems to build pattern recognition1. Implement a multi-agent system with 3 specialized agents (researcher, analyst, writer) and a coordinator. The coordinator should decompose a complex research question and delegate to each agent. Show the full communication flow."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build a message bus with structured message types (task, result, query, error, status). Demonstrate 10 message exchanges between 3 agents with correct routing."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a voting mechanism for 5 agents to decide on a course of action. Implement both simple majority and weighted voting. Show a scenario where weighted voting changes the outcome."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a conflict resolution protocol where two agents disagree on approach and an arbitrator agent resolves the conflict. Show the positions and final resolution."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a team performance dashboard that tracks tasks completed, average completion time, conflicts resolved, and messages exchanged. Simulate 10 tasks and generate"
        }), "\n"]
      }), "\n"]
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
            children: "Explain the core idea of Multi-Agent Systems in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function in this chapter-Agent Systems."
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
            children: "Describe a production bug caused by misunderstanding this technique-Agent Systems. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique-Agent Systems from 10 users to 10 million?"
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
            children: "Compare Multi-Agent Systems with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component built on this-Agent Systems."
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
            children: "How does Multi-Agent Systems behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of this technique-Agent Systems run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of this technique-Agent Systems that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Multi-Agent Systems explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Multi-Agent Systems\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Multi-Agent Systems to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Multi-Agent Systems (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Multi-Agent Systems and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Multi-Agent Systems-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Multi-Agent Systems interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Multi-Agent Systems in production today?"
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
        }), " Multi-Agent Systems builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Multi-Agent Systems before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Multi-Agent Systems is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Multi-Agent Systems in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Multi-Agent Systems chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Multi-Agent Systems is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 06 Multi Agent Systems is ___. — Answer: O(V+E) for BFS/DFS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 06 Multi Agent Systems is ___. — Answer: disconnected graph, cycles, negative weights"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Multi-Agent Systems issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Multi-Agent Systems in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Multi-Agent Systems that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of this technique-Agent Systems is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Multi-Agent Systems in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Multi-Agent Systems and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of this technique-Agent Systems on an empty input?"
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
            children: "Complete Medium exercises, explain Multi-Agent Systems to someone else"
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
        children: "Always write a one-line example of Multi-Agent Systems from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Multi-Agent Systems when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Multi-Agent Systems twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Multi-Agent Systems snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Multi-Agent Systems listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Multi-Agent Systems to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Multi-Agent Systems by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Multi-Agent Systems to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
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
        children: "'Building LLM Powered Applications' by Valentina Alto (Packt) Systems"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 13 — builds the foundation for 06 Multi Agent Systems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 06 Multi Agent Systems with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 06 Multi Agent Systems fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 06 Multi Agent Systems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 06 Multi Agent Systems"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 06 Multi Agent Systems?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 06 Multi Agent Systems?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 06 Multi Agent Systems asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 06 Multi Agent Systems?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-Agent Systems is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Multi-Agent Systems."
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
        children: "Multi-Agent Systems emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Multi-Agent Systems today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Multi-Agent Systems — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Multi-Agent Systems changes quickly; focus on fundamentals that remain stable."
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
            children: "06 Multi Agent Systems is like a GPS navigation system"
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
          }), " — this chapter contributes the Multi-Agent Systems skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "13aiagentslanggraph-06multiagentsystems-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Multi-Agent Systems in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "An AI agent is an autonomous system that uses an LLM as its reasoning engine to perceive inputs, decide actions, call tools, observe results, and iterate until a task is complete."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "13aiagentslanggraph-06multiagentsystems-flash2",
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
      "data-qid": "13aiagentslanggraph-06multiagentsystems-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Multi-Agent Systems approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Agent complexity: O(k * t) where k=steps taken, t=average tool latency. Each LLM call is O(n^2) attention over context. Total cost grows linearly with steps."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "13aiagentslanggraph-06multiagentsystems-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Multi-Agent Systems NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Agents are NOT the right choice when: (1) a single LLM call suffices, (2) deterministic pipelines are required, (3) latency < 500ms is needed, (4) the task has no external tool requirements."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "13aiagentslanggraph-06multiagentsystems-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Multi-Agent Systems applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Multi-Agent Systems (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Multi-Agent Systems (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Multi-Agent Systems-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Multi-Agent Systems in production at scale"
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
        }), " — Claude's native function calling interface Systems"]
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
        }), ": Add structured logging at each stage of the 06 Multi Agent Systems pipeline to identify exactly where the failure occurs."]
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
        children: "Explain Multi-Agent Systems in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Multi-Agent Systems."
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
        children: "Tell me about a time you debugged a Multi-Agent Systems problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Multi-Agent Systems is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_06_multi_agent_systems(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 06 Multi Agent Systems.\r\n\r\n    Key concepts: vertices, edges, BFS, DFS, shortest path\r\n    Complexity: O(V+E) for BFS/DFS\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 06 Multi Agent Systems here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain Multi-Agent Systems without notes"
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
        href: "/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/07-human-in-the-loop",
        children: "Human-in-the-Loop"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-Agent Systems, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Multi-Agent Systems depends on input size and distribution — always benchmark for your own data."
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