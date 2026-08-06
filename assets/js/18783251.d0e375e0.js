"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[53872],{

/***/ 38469
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_artificial_intelligence_02_agents_md_187_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-artificial-intelligence-02-agents-md-187.json
const site_docs_courses_artificial_intelligence_02_agents_md_187_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/artificial-intelligence/02-agents","title":"Chapter 2: Intelligent Agents","description":"Previous Introduction to AI | Next Solving Problems by Searching","source":"@site/docs/courses/artificial-intelligence/02-agents.md","sourceDirName":"courses/artificial-intelligence","slug":"/artificial-intelligence/02-agents","permalink":"/ai-engineering-journey/artificial-intelligence/02-agents","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"02-agents","slug":"/artificial-intelligence/02-agents","title":"Chapter 2: Intelligent Agents","sidebar_label":"Chapter 2: Intelligent Agents","sidebar_position":2},"sidebar":"coursesSidebar","previous":{"title":"Chapter 1: Introduction to Artificial Intelligence","permalink":"/ai-engineering-journey/artificial-intelligence/01-introduction"},"next":{"title":"Chapter 2: Problem-Solving by Search","permalink":"/ai-engineering-journey/artificial-intelligence/02-problem-solving"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/artificial-intelligence/02-agents.md


const frontMatter = {
	id: '02-agents',
	slug: '/artificial-intelligence/02-agents',
	title: 'Chapter 2: Intelligent Agents',
	sidebar_label: 'Chapter 2: Intelligent Agents',
	sidebar_position: 2
};
const contentTitle = 'Chapter 2: Intelligent Agents';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Intelligent Agents Matter",
  "id": "why-intelligent-agents-matter",
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
  "value": "Agents and Environments",
  "id": "agents-and-environments",
  "level": 3
}, {
  "value": "How It Works (Step-by-Step)",
  "id": "how-it-works-step-by-step",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run (Vacuum Cleaner)",
  "id": "step-by-step-dry-run-vacuum-cleaner",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 4
}, {
  "value": "Rationality",
  "id": "rationality",
  "level": 3
}, {
  "value": "Rationality Decision Process",
  "id": "rationality-decision-process",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-1",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-1",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 4
}, {
  "value": "Task Environments (PEAS)",
  "id": "task-environments-peas",
  "level": 3
}, {
  "value": "How to Use PEAS (Step-by-Step)",
  "id": "how-to-use-peas-step-by-step",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 4
}, {
  "value": "PEAS Examples Table",
  "id": "peas-examples-table",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run (Applying PEAS to Automated Taxi)",
  "id": "step-by-step-dry-run-applying-peas-to-automated-taxi",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-2",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-2",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-2",
  "level": 4
}, {
  "value": "Environment Properties",
  "id": "environment-properties",
  "level": 3
}, {
  "value": "The Six Properties",
  "id": "the-six-properties",
  "level": 4
}, {
  "value": "Pseudocode (Classifying an Environment)",
  "id": "pseudocode-classifying-an-environment",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-2",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run (Self-Driving Car)",
  "id": "step-by-step-dry-run-self-driving-car",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-3",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-3",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-3",
  "level": 4
}, {
  "value": "Agent Types",
  "id": "agent-types",
  "level": 3
}, {
  "value": "1. Simple Reflex Agent",
  "id": "1-simple-reflex-agent",
  "level": 4
}, {
  "value": "How It Works",
  "id": "how-it-works",
  "level": 5
}, {
  "value": "Pseudocode",
  "id": "pseudocode-3",
  "level": 5
}, {
  "value": "Python Implementation",
  "id": "python-implementation-3",
  "level": 5
}, {
  "value": "Dry Run Trace Table",
  "id": "dry-run-trace-table",
  "level": 5
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-4",
  "level": 5
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-4",
  "level": 5
}, {
  "value": "Edge Cases",
  "id": "edge-cases-4",
  "level": 5
}, {
  "value": "2. Model-Based Reflex Agent",
  "id": "2-model-based-reflex-agent",
  "level": 4
}, {
  "value": "How It Works",
  "id": "how-it-works-1",
  "level": 5
}, {
  "value": "Pseudocode",
  "id": "pseudocode-4",
  "level": 5
}, {
  "value": "Python Implementation",
  "id": "python-implementation-4",
  "level": 5
}, {
  "value": "Dry Run Trace Table",
  "id": "dry-run-trace-table-1",
  "level": 5
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-5",
  "level": 5
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-5",
  "level": 5
}, {
  "value": "Edge Cases",
  "id": "edge-cases-5",
  "level": 5
}, {
  "value": "3. Goal-Based Agent",
  "id": "3-goal-based-agent",
  "level": 4
}, {
  "value": "How It Works",
  "id": "how-it-works-2",
  "level": 5
}, {
  "value": "Pseudocode",
  "id": "pseudocode-5",
  "level": 5
}, {
  "value": "Python Implementation",
  "id": "python-implementation-5",
  "level": 5
}, {
  "value": "Dry Run Trace Table",
  "id": "dry-run-trace-table-2",
  "level": 5
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-6",
  "level": 5
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-6",
  "level": 5
}, {
  "value": "Edge Cases",
  "id": "edge-cases-6",
  "level": 5
}, {
  "value": "4. Utility-Based Agent",
  "id": "4-utility-based-agent",
  "level": 4
}, {
  "value": "How It Works",
  "id": "how-it-works-3",
  "level": 5
}, {
  "value": "Pseudocode",
  "id": "pseudocode-6",
  "level": 5
}, {
  "value": "Python Implementation",
  "id": "python-implementation-6",
  "level": 5
}, {
  "value": "Dry Run Trace Table",
  "id": "dry-run-trace-table-3",
  "level": 5
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-7",
  "level": 5
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-7",
  "level": 5
}, {
  "value": "Edge Cases",
  "id": "edge-cases-7",
  "level": 5
}, {
  "value": "Agent Types Comparison Table",
  "id": "agent-types-comparison-table",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Vacuum-Cleaner Agent (Simple Reflex)",
  "id": "example-1-vacuum-cleaner-agent-simple-reflex",
  "level": 3
}, {
  "value": "Example 2: Automated Taxi Driver (Utility-Based)",
  "id": "example-2-automated-taxi-driver-utility-based",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference → Environment Properties",
  "id": "quick-reference--environment-properties",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Q1: How would you design an agent for a partially observable environment where sensors provide noisy data?",
  "id": "q1-how-would-you-design-an-agent-for-a-partially-observable-environment-where-sensors-provide-noisy-data",
  "level": 3
}, {
  "value": "Q2: Compare how different agent architectures handle sensor failure.",
  "id": "q2-compare-how-different-agent-architectures-handle-sensor-failure",
  "level": 3
}, {
  "value": "Q3: You are designing an AI for a Mars rover. The rover&#39;s sensors fail intermittently due to dust storms, communication with Earth has a 20-minute delay, and the terrain is unknown. Which agent architecture do you choose and why?",
  "id": "q3-you-are-designing-an-ai-for-a-mars-rover-the-rovers-sensors-fail-intermittently-due-to-dust-storms-communication-with-earth-has-a-20-minute-delay-and-the-terrain-is-unknown-which-agent-architecture-do-you-choose-and-why",
  "level": 3
}, {
  "value": "Q4: How would you convert a thermostat (simple reflex) into a utility-based agent?",
  "id": "q4-how-would-you-convert-a-thermostat-simple-reflex-into-a-utility-based-agent",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "iRobot Roomba (Simple Reflex + Model-Based Hybrid)",
  "id": "irobot-roomba-simple-reflex--model-based-hybrid",
  "level": 3
}, {
  "value": "Self-Driving Cars (Utility-Based with Goal-Based Planning)",
  "id": "self-driving-cars-utility-based-with-goal-based-planning",
  "level": 3
}, {
  "value": "Recommendation Systems (Utility-Based / Learning Agent)",
  "id": "recommendation-systems-utility-based--learning-agent",
  "level": 3
}, {
  "value": "Industrial Robot Arms (Goal-Based)",
  "id": "industrial-robot-arms-goal-based",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
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
    details: "details",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
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
        id: "chapter-2-intelligent-agents",
        children: "Chapter 2: Intelligent Agents"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Previous:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/01-introduction",
        children: "Chapter 1: Introduction to AI"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/03-search",
        children: "Chapter 3: Solving Problems by Searching"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the concept of an \"agent\" and its interaction with an \"environment.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between a \"rational agent\" and other types of behavioral models."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the PEAS (Performance, Environment, Actuators, Sensors) framework for task environments."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Categorize environments based on their properties (e.g., observability, determinism)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify and compare the four basic types of agent programs: simple reflex, model-based reflex, goal-based, and utility-based."
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
        href: "../../assets/images/lessons/artificial-intelligence/02-agents/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/artificial-intelligence/02-agents/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/artificial-intelligence/02-agents/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/artificial-intelligence/02-agents/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/artificial-intelligence/02-agents/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/artificial-intelligence/02-agents/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-intelligent-agents-matter",
      children: "Why Intelligent Agents Matter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " A thermostat and a self-driving car are both agents → but worlds apart in complexity. The thermostat perceives temperature (sensor), compares it to a setpoint (internal logic), and turns heating on/off (actuator). The self-driving car perceives roads, signs, pedestrians, and vehicles through cameras and LIDAR, maintains an internal world model, predicts future states, and chooses actions that maximize safety and speed. Both are agents; the difference lies in the sophistication of perception, reasoning, and action."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "From smartphone assistants (Siri, Alexa) to recommendation engines (Netflix, Amazon) to autonomous robots → intelligent agents are everywhere. Understanding how to design them is the foundation of building any AI system. Every AI application you interact with is, at its core, one or more agents perceiving an environment and acting on it."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Topics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Terms"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Agents and Environments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent, environment, sensors, actuators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent function, agent program, percept"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rationality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance measure, success criteria"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rational agent, expected outcome"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Task Environments (PEAS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance-Environment-Actuators-Sensors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PEAS framework, task specification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Environment Properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Observable, deterministic, episodic, etc."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fully/partially observable, stochastic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Agent Architectures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reflex, model-based, goal-based, utility-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple reflex, internal state, learning agent"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Agent Concept] --> B[Rationality]\n    B --> C[PEAS Framework]\n    C --> D[Environment Properties]\n    D --> E[Agent Architectures]\n    E --> F1[Simple Reflex]\n    E --> F2[Model-Based]\n    E --> F3[Goal-Based]\n    E --> F4[Utility-Based]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/artificial-intelligence/ch02-agents.png",
        alt: "Intelligent Agents"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "agents-and-environments",
      children: "Agents and Environments"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " A human driver perceives the road through eyes (sensors) and acts via hands and feet (actuators). The car, road, traffic, and weather together form the environment. The driver's brain runs the agent program that decides when to brake, steer, or accelerate. Without the driver, the car is just a machine; without the car, the driver is just a pedestrian. Agent and environment are inseparable."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "agent"
      }), " is anything that can be viewed as perceiving its ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "environment"
      }), " through ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sensors"
      }), " and acting upon that environment through ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "actuators"
      }), ". The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "agent function"
      }), " maps any given percept sequence to an action. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "agent program"
      }), " is the concrete implementation of this function running on an architecture."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Percept:"
      }), " The agent's perceptual inputs at any given instant. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "percept sequence"
      }), " is the complete history of everything the agent has ever perceived."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "how-it-works-step-by-step",
      children: "How It Works (Step-by-Step)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sense"
        }), " → The agent collects raw input from the environment via sensors (cameras, microphones, temperature probes)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Perceive"
        }), " → Raw sensor data is converted into a structured percept (e.g., pixel array → \"red light ahead\")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Process"
        }), " → The agent function maps the percept (or percept sequence) to an action decision."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Act"
        }), " → The chosen action is executed via actuators (wheels, speakers, display), changing the environment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeat"
        }), " → The cycle continues indefinitely; the environment may change in response to the agent's action or external factors."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "FUNCTION Agent(percept):\n    agent_function ← MAP percept_sequence → action\n    RETURN agent_function(percept)\nEND FUNCTION\n\nMAIN LOOP:\n    WHILE TRUE:\n        percept ← SENSE(environment)\n        action ← Agent(percept)\n        EXECUTE(action, environment)\n    END WHILE\nEND MAIN LOOP\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Agent:\n    \"\"\"Generic agent framework.\"\"\"\n    def __init__(self):\n        self.percept_history = []\n\n    def agent_function(self, percept):\n        \"\"\"Maps percept to action. Override in subclasses.\"\"\"\n        raise NotImplementedError\n\n    def sense(self, environment):\n        \"\"\"Collect percept from environment.\"\"\"\n        return environment.get_percept()\n\n    def act(self, action, environment):\n        \"\"\"Execute action on environment.\"\"\"\n        environment.apply_action(action)\n\n    def run(self, environment, steps=10):\n        \"\"\"Run agent-environment loop for given steps.\"\"\"\n        for step in range(steps):\n            percept = self.sense(environment)\n            self.percept_history.append(percept)\n            action = self.agent_function(percept)\n            print(f\"Step {step+1}: Percept={percept} → Action={action}\")\n            self.act(action, environment)\n\n\nclass VacuumEnvironment:\n    \"\"\"Simple 2-room vacuum world.\"\"\"\n    def __init__(self):\n        self.locations = {'A': 'Dirty', 'B': 'Dirty'}\n        self.agent_location = 'A'\n\n    def get_percept(self):\n        return (self.agent_location, self.locations[self.agent_location])\n\n    def apply_action(self, action):\n        if action == 'Suck':\n            self.locations[self.agent_location] = 'Clean'\n        elif action == 'Left':\n            self.agent_location = 'A'\n        elif action == 'Right':\n            self.agent_location = 'B'\n\n\n# Example: random agent\nimport random\n\nclass RandomVacuumAgent(Agent):\n    def agent_function(self, percept):\n        return random.choice(['Suck', 'Left', 'Right'])\n\nenv = VacuumEnvironment()\nagent = RandomVacuumAgent()\nagent.run(env, steps=4)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output"
      }), " (varies):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: Percept=('A', 'Dirty') → Action=Suck\nStep 2: Percept=('A', 'Clean') → Action=Right\nStep 3: Percept=('B', 'Dirty') → Action=Suck\nStep 4: Percept=('B', 'Clean') → Action=Left\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-vacuum-cleaner",
      children: "Step-by-Step Dry Run (Vacuum Cleaner)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Percept (Location, Status)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Internal State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Environment After"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(A, Dirty)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suck"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A clean, B dirty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(A, Clean)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A clean, B dirty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(B, Dirty)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suck"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A clean, B clean"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(B, Clean)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A clean, B clean"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(A, Clean)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A clean, B clean"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time Complexity:"
        }), " O(1) per step → the agent function is a direct mapping, no search or iteration."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space Complexity:"
        }), " O(P) where P is the length of percept history stored."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why:"
        }), " The agent-environment loop runs in constant time per cycle. Storing percept history is the only memory cost; if history is not stored, space is O(1)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Universal framework → any AI system can be described as an agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Abstract → provides no concrete decision-making strategy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Separates perception from action, enabling modular design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-world sensors and actuators are imperfect"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple loop is easy to implement and debug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-agent model does not capture multi-agent dynamics"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Incomplete percept"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensor partially fails (e.g., no dirt sensor reading)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent may default to a safe action or use prior state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sensor noise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Percept contains corrupted data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filtering or probabilistic reasoning required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unknown environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No prior model of the world exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent must explore before acting (learning agent)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Actuator failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action not executed as intended"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent must detect failure and retry or adapt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stuck in loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent repeats same action indefinitely"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add randomness or exploration to break symmetry"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rationality",
      children: "Rationality"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " A chess player who blunders still made rational moves earlier if those moves maximized their winning chance given what they knew. Rationality is not omniscience → it is doing your best with what you have. Similarly, a doctor who prescribes the best known treatment based on symptoms, even if the patient has a rare condition the tests missed, is still rational."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "rational agent"
      }), " is one that acts so as to achieve the best outcome or, when there is uncertainty, the best expected outcome. Rationality depends on:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "performance measure"
        }), " that defines the criterion of success."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The agent's ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "prior knowledge"
        }), " of the environment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "actions"
        }), " that the agent can perform."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The agent's ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "percept sequence"
        }), " to date."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Important:"
        }), " Rationality ≠ Perfection. A rational agent may fail because of incomplete information. An omniscient agent knows the actual outcome; a rational agent maximizes expected outcome. A rational agent can fail; an omniscient agent cannot."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "rationality-decision-process",
      children: "Rationality Decision Process"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Define performance measure"
        }), " → What counts as success? (e.g., points scored, safety, profit, patient survival rate)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gather percepts"
        }), " → Collect available information from the environment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Evaluate possible actions"
        }), " → For each action, estimate the expected outcome using the world model."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Select maximizer"
        }), " → Choose the action that maximizes the expected performance measure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Execute and learn"
        }), " → Perform the action and update knowledge based on the observed result."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "FUNCTION RationalAgent(percept):\n    state ← UPDATE_STATE(state, action, percept, model)\n    best_action ← NULL\n    best_value ← -INFINITY\n    FOR EACH possible_action IN ACTIONS(state):\n        predicted_state ← SIMULATE(state, possible_action, model)\n        expected_value ← EXPECTED_UTILITY(predicted_state, performance_measure)\n        IF expected_value > best_value THEN:\n            best_value ← expected_value\n            best_action ← possible_action\n    RETURN best_action\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-1",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RationalVacuumAgent:\n    def __init__(self, performance_measure='clean_squares'):\n        self.performance_measure = performance_measure\n        self.state = {'A': 'Unknown', 'B': 'Unknown'}\n        self.last_action = None\n\n    def update_state(self, percept):\n        location, status = percept\n        self.state[location] = status\n        if self.last_action == 'Suck':\n            self.state[location] = 'Clean'\n\n    def expected_utility(self, action, location):\n        \"\"\"Estimate how good each action is for the performance measure.\"\"\"\n        other = 'B' if location == 'A' else 'A'\n        if action == 'Suck':\n            return 10 if self.state[location] == 'Dirty' else -2\n        elif action in ['Left', 'Right']:\n            target_status = self.state.get(other, 'Unknown')\n            return 5 if target_status == 'Dirty' else -1\n        elif action == 'NoOp':\n            all_clean = all(s == 'Clean' for s in self.state.values() if s != 'Unknown')\n            return 8 if all_clean else -5\n        return 0\n\n    def rational_agent(self, percept):\n        location, status = percept\n        self.update_state(percept)\n\n        actions = ['Suck', 'NoOp']\n        if location == 'A':\n            actions.append('Right')\n        else:\n            actions.append('Left')\n\n        best_action = max(actions, key=lambda a: self.expected_utility(a, location))\n        self.last_action = best_action\n        return best_action\n\n\nagent = RationalVacuumAgent()\npercepts = [('A', 'Dirty'), ('A', 'Clean'), ('B', 'Dirty'), ('B', 'Clean')]\nfor p in percepts:\n    action = agent.rational_agent(p)\n    print(f\"Percept: {p}, State: {agent.state} → Action: {action}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Percept: ('A', 'Dirty'), State: {'A': 'Dirty', 'B': 'Unknown'} → Action: Suck\nPercept: ('A', 'Clean'), State: {'A': 'Clean', 'B': 'Unknown'} → Action: Right\nPercept: ('B', 'Dirty'), State: {'A': 'Clean', 'B': 'Dirty'} → Action: Suck\nPercept: ('B', 'Clean'), State: {'A': 'Clean', 'B': 'Clean'} → Action: NoOp\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run",
      children: "Step-by-Step Dry Run"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Percept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actions & Expected Utility"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(A, Dirty)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A: D, B: U}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suck=10, Right=5, NoOp=-5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suck"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(A, Clean)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A: C, B: U}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suck=-2, Right=5, NoOp=-5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Right"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(B, Dirty)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A: C, B: D}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suck=10, Left=5, NoOp=-5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suck"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(B, Clean)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A: C, B: C}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suck=-2, Left=-1, NoOp=8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NoOp"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time Complexity:"
        }), " O(A × S) where A = number of possible actions and S = cost of simulating state transition per action."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space Complexity:"
        }), " O(S) for state storage + O(A) for temporary action evaluation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why:"
        }), " Each decision cycle evaluates every possible action. If the simulation function is expensive (e.g., full physics simulation), this dominates the runtime."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-1",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Makes optimal decisions given available information"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires a performance measure that captures all objectives"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can incorporate uncertainty via expected values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computationally heavier than reflex approaches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Actions are grounded in a clear success metric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance measure design is subjective and difficult"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naturally handles trade-offs between outcomes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot guarantee success → only expected optimality"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conflicting performance measures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safety says stop, speed says go"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted multi-objective utility function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No action has positive expected utility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All actions lead to poor outcomes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose least-bad action rather than NoOp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance measure is gameable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent finds loophole that scores high but violates intent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carefully constrain the measure; add penalties"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unknown action outcomes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No model to predict consequences"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add exploration actions to learn the model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time pressure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot evaluate all actions before deadline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use bounded rationality → evaluate best subset"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-environments-peas",
      children: "Task Environments (PEAS)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " Before building a house, you need a blueprint. PEAS is the blueprint for designing an agent → it specifies WHAT the agent should achieve (Performance), WHERE it operates (Environment), HOW it acts (Actuators), and HOW it perceives (Sensors). Without PEAS, you risk designing an agent that is effective in the wrong environment or optimized for the wrong metric."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To design an agent, we must specify the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PEAS"
      }), " for the task environment:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Performance"
        }), ": The metric for success (e.g., safety, speed, profit, accuracy)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Environment"
        }), ": The external world where the agent operates (e.g., roads, digital stock market, human body)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actuators"
        }), ": The mechanisms for acting (e.g., wheels, steering, display, robotic arm)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sensors"
        }), ": The mechanisms for perceiving (e.g., cameras, microphones, keyboard, LIDAR)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "how-to-use-peas-step-by-step",
      children: "How to Use PEAS (Step-by-Step)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify the Performance Measure"
        }), " → Ask: \"What does success look like?\" Define concrete, measurable criteria (e.g., minimize travel time, maximize classification accuracy)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Define the Environment"
        }), " → Ask: \"What external factors affect the agent?\" List all relevant entities, conditions, and constraints."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "List the Actuators"
        }), " → Ask: \"How can the agent change the world?\" Enumerate every mechanism the agent can use to act."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "List the Sensors"
        }), " → Ask: \"How does the agent get information?\" Enumerate every input mechanism available."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validate Completeness"
        }), " → Ensure that for every action the agent might need, there is an actuator; for every piece of information it needs, there is a sensor."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "FUNCTION DesignAgent(task_description):\n    PEAS ← {}\n    PEAS.performance ← IDENTIFY_PERFORMANCE_METRICS(task_description)\n    PEAS.environment ← IDENTIFY_ENVIRONMENT_ENTITIES(task_description)\n    PEAS.actuators ← IDENTIFY_ACTUATORS(task_description)\n    PEAS.sensors ← IDENTIFY_SENSORS(task_description)\n    RETURN PEAS\nEND FUNCTION\n\nFUNCTION ValidatePEAS(PEAS):\n    FOR EACH goal IN PEAS.performance:\n        ASSERT EXISTS actuator TO ACHIEVE goal\n    FOR EACH information NEED IN PEAS.environment:\n        ASSERT EXISTS sensor TO COLLECT information\n    RETURN Valid\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "peas-examples-table",
      children: "PEAS Examples Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Performance Measure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Environment"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actuators"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sensors"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Automated Taxi"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe, fast, legal, comfortable trip, profit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Roads, traffic, pedestrians, weather, maps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Steering, accelerator, brake, signal, horn, display, door locks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cameras, LIDAR, radar, GPS, speedometer, odometer, microphone, accelerometer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Medical Diagnosis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accurate diagnosis, minimal cost, quick recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patient body, symptoms, medical history, lab tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Display results, prescribe treatment, alert, refer to specialist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keyboard (symptoms), MRI, blood test sensors, stethoscope, heart monitor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Chess AI"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Win game, maximize piece advantage, minimize time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8x8 board, opponent, clock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move pieces on board, resign, offer draw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Board state (camera or digital interface), clock"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Part-Picking Robot"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pick correct parts, minimize time, no damage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conveyor belt, bins, parts of varying shapes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jointed arm, gripper, suction cup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera, joint angle sensors, touch/pressure sensor, proximity sensor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Spam Filter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correctly classify spam/non-spam, low false positives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email inbox, user behavior, sender reputation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mark as spam, delete, move to folder, block sender"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email header, body, sender, metadata, embedded links"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recommendation System"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User engagement, relevance score, diversity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User base, item catalog, history, trends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Display recommendations, personalize UI, send notifications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Click history, ratings, demographics, time, device type, search queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Thermostat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintain target temperature +/- tolerance, energy efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Room, HVAC system, outside temp, time of day"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Turn heating/cooling on/off, set fan speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temperature sensor, humidity sensor, clock"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Robot Soccer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Score goals, prevent opponent goals, ball possession"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Field, ball, teammates, opponents, referee"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kick, run, pass, position, tackle, block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cameras, IMU, compass, touch sensors, wheel encoders, goal proximity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stock Trader"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximize returns, minimize risk, stay within budget"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stock exchange, news, economic indicators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buy, sell, hold, set limit orders"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Price feeds, news API, economic calendar, volume data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-applying-peas-to-automated-taxi",
      children: "Step-by-Step Dry Run (Applying PEAS to Automated Taxi)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Answer for Taxi"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the performance measure?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe arrival, legal compliance, comfortable ride, passenger satisfaction, profit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the environment?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Roads, traffic signals, pedestrians, other vehicles, weather, GPS maps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What are the actuators?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Steering wheel, accelerator, brake, turn signals, horn, display screen"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What are the sensors?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cameras, LIDAR, radar, GPS, speedometer, odometer, microphone, accelerometer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can actuators achieve performance goals?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes → steering navigates, brake ensures safety, accelerator controls speed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Do sensors provide all needed info?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes → cameras see lanes/signs, LIDAR detects obstacles, GPS provides location"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time Complexity:"
        }), " O(N) where N is the number of PEAS elements to specify. Small → typically 4-12 items per dimension."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space Complexity:"
        }), " O(P + E + A + S) to store the specification."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why:"
        }), " PEAS is a design-time specification, not a runtime algorithm. Its cost is negligible relative to the agent implementation it guides."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-2",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Provides a complete, structured specification of the task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not specify how the agent should decide → only what it needs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to communicate and share across teams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can miss subtle interactions between PEAS dimensions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Makes implicit assumptions explicit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance measure design is subjective"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Framework works for any domain (robotics, software, games)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not account for multi-agent dynamics directly"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple conflicting performance measures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safety vs. speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted multi-objective optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Environment changes after design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PEAS specification becomes stale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Review and update PEAS periodically"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sensors unavailable for key information"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot perceive critical state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add model-based reasoning to infer missing info"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Actuators with side effects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Braking hard may cause rear-end collision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model actuator effects in the world model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adversarial environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Opponent actively conceals state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Include adversarial modeling in environment spec"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "environment-properties",
      children: "Environment Properties"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " A chess player sees the entire board (fully observable) and knows the rules are fixed (deterministic). A poker player cannot see opponents' cards (partially observable) and must account for bluffing (stochastic). A self-driving car must react while the world keeps moving (dynamic) and past decisions affect future options (sequential). These dimensions determine which agent architecture you can use."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Environments are characterized by six key dimensions. Understanding these properties is critical because they directly determine which agent architecture is suitable."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-six-properties",
      children: "The Six Properties"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Observability"
          }), " (Fully vs. Partially) → Can the agent access the complete state of the environment at each point in time?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "Fully Observable:"
            }), " Chess, Sudoku (all relevant info is visible)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "Partially Observable:"
            }), " Poker (hidden cards), Self-driving (occluded objects)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Determinism"
          }), " (Deterministic vs. Stochastic) → Does the next state depend solely on the current state and the agent's action?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "Deterministic:"
            }), " 8-Puzzle, Chess (no randomness)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "Stochastic:"
            }), " Backgammon (dice), Self-driving (wind, tire slip)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Episodicity"
          }), " (Episodic vs. Sequential) → Is the current decision independent of previous decisions?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "Episodic:"
            }), " Image classification (each image is independent)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "Sequential:"
            }), " Robot navigation (current position depends on past moves)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dynamics"
          }), " (Static vs. Dynamic) → Does the environment change while the agent is thinking?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "Static:"
            }), " Crossword puzzle (no change while you ponder)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "Dynamic:"
            }), " Autonomous driving (world keeps moving)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Discreteness"
          }), " (Discrete vs. Continuous) → Are the states and actions finite and distinct?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "Discrete:"
            }), " Chess (finite board positions and moves)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "Continuous:"
            }), " Taxi steering angle (infinite possible values)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Agent Count"
          }), " (Single vs. Multi) → Are there other agents operating in the same environment?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "Single:"
            }), " Sudoku solver (no other agents)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "Multi:"
            }), " Multiplayer game, stock market"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-classifying-an-environment",
      children: "Pseudocode (Classifying an Environment)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "FUNCTION ClassifyEnvironment(environment_description):\n    properties ← {}\n    properties.observability ← CHECK_IF_FULLY_OBSERVABLE(environment_description)\n    properties.determinism ← CHECK_IF_DETERMINISTIC(environment_description)\n    properties.episodicity ← CHECK_IF_EPISODIC(environment_description)\n    properties.dynamics ← CHECK_IF_STATIC(environment_description)\n    properties.discreteness ← CHECK_IF_DISCRETE(environment_description)\n    properties.agent_count ← COUNT_AGENTS(environment_description)\n    RETURN properties\nEND FUNCTION\n\nFUNCTION RecommendArchitecture(properties):\n    IF fully_observable AND deterministic THEN\n        RETURN \"Simple Reflex Agent\"\n    ELSE IF partially_observable OR stochastic THEN\n        RETURN \"Model-Based Agent\"\n    ELSE IF requires_planning THEN\n        RETURN \"Goal-Based Agent\"\n    ELSE IF requires_tradeoffs THEN\n        RETURN \"Utility-Based Agent\"\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-2",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class EnvironmentClassifier:\n    def __init__(self):\n        self.properties = {}\n\n    def classify(self, name, fully_observable, deterministic,\n                 episodic, static, discrete, single_agent):\n        self.properties = {\n            'name': name,\n            'fully_observable': fully_observable,\n            'deterministic': deterministic,\n            'episodic': episodic,\n            'static': static,\n            'discrete': discrete,\n            'single_agent': single_agent\n        }\n        return self.properties\n\n    def recommend_agent(self):\n        p = self.properties\n        obs = \"Fully\" if p['fully_observable'] else \"Partially\"\n        det = \"Deterministic\" if p['deterministic'] else \"Stochastic\"\n        epi = \"Episodic\" if p['episodic'] else \"Sequential\"\n        dyn = \"Static\" if p['static'] else \"Dynamic\"\n        dis = \"Discrete\" if p['discrete'] else \"Continuous\"\n        agent_count = \"Single\" if p['single_agent'] else \"Multi\"\n\n        print(f\"\\n{p['name']}: {obs}, {det}, {epi}, {dyn}, {dis}, {agent_count}\")\n\n        if p['fully_observable'] and p['deterministic'] and p['episodic']:\n            return \"Recommended: Simple Reflex Agent\"\n        elif p['fully_observable'] and p['deterministic'] and not p['episodic']:\n            return \"Recommended: Goal-Based Agent\"\n        elif not p['fully_observable']:\n            return \"Recommended: Model-Based Agent (need internal state)\"\n        else:\n            return \"Recommended: Utility-Based Agent (trade-offs needed)\"\n\n\nclassifier = EnvironmentClassifier()\n\nenvs = [\n    (\"Chess\", True, True, False, True, True, False),\n    (\"Poker\", False, False, False, True, True, False),\n    (\"Image Classifier\", True, True, True, True, False, True),\n    (\"Self-Driving Car\", False, False, False, False, False, False),\n]\n\nfor env in envs:\n    classifier.classify(*env)\n    print(classifier.recommend_agent())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Chess: Fully, Deterministic, Sequential, Static, Discrete, Multi\nRecommended: Goal-Based Agent\n\nPoker: Partially, Stochastic, Sequential, Static, Discrete, Multi\nRecommended: Model-Based Agent (need internal state)\n\nImage Classifier: Fully, Deterministic, Episodic, Static, Discrete, Single\nRecommended: Simple Reflex Agent\n\nSelf-Driving Car: Partially, Stochastic, Sequential, Dynamic, Continuous, Multi\nRecommended: Model-Based Agent (need internal state)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-self-driving-car",
      children: "Step-by-Step Dry Run (Self-Driving Car)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Answer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implication"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Observability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can the car see everything?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No → partial (occluded vehicles, blind spots)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need internal state to track hidden objects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Determinism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Is the world predictable?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No → stochastic (other drivers may behave unpredictably)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need probabilistic reasoning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Episodicity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Are decisions independent?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No → sequential (turning now affects position later)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need planning across time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does the world change while thinking?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes → dynamic (other cars move continuously)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need real-time response latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Discreteness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Are actions finite?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No → continuous (infinite steering angles)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need function approximation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Agent Count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Are there other agents?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes → multi (other drivers, pedestrians)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need game-theoretic reasoning"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time Complexity:"
        }), " O(P) where P = number of properties to evaluate (always 6). Constant time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space Complexity:"
        }), " O(P) for storing the property vector. Negligible."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why:"
        }), " Environment classification is a design-time analysis. The cost is incurred once during system design, not during agent operation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-3",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Provides clear guidance for architecture selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some environments fall in gray zones (e.g., mostly observable)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Universal → applies to any AI domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Properties can change during operation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Helps identify design challenges early"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No consensus on which dimension matters most"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enables systematic comparison of task difficulty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Environment may be misclassified"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mixed observability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mostly observable but some hidden info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Treat as partially observable; use belief states"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stochastic but predictable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Randomness follows known distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use probabilistic models with known distributions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Semi-dynamic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Environment changes at fixed intervals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Treat as dynamic; plan between known change points"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-agent cooperation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Other agents are friendly, not adversarial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-agent simplification may suffice if communication is reliable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Environment shifts during operation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static environment becomes dynamic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitor environment properties at runtime and adapt architecture"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " The most critical environment dimension is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "observability"
        }), " → whether the environment is fully or partially observable fundamentally determines which agent architecture you can use. Self-driving cars operate in partially observable environments and therefore require model-based agents with internal state. Simple reflex agents fail here because the current percept alone is insufficient."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " A common mistake is confusing \"rationality\" with \"omniscience.\" A rational agent makes the best decision based on what it knows → it may still fail because of incomplete information. Rationality does not guarantee success."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "agent-types",
      children: "Agent Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "There are four basic types of agent programs, each building on the previous in sophistication. Each type is suited to a different class of environment properties."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1-simple-reflex-agent",
      children: "1. Simple Reflex Agent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " A touch-lamp that turns on when you tap it. The percept (touch) maps directly to an action (light on). No memory, no internal state, no goals → pure condition-action rule. Like a human reflex (pulling hand from a hot stove), the response is immediate and requires no thought."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An agent that selects actions based only on the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "current percept"
      }), ", ignoring the rest of the percept history."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "how-it-works",
      children: "How It Works"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sense"
        }), " current percept from the environment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Match"
        }), " percept against condition-action rules (if-then)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Select"
        }), " the action associated with the matching rule."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Execute"
        }), " action."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeat"
        }), " from step 1."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "FUNCTION SimpleReflexAgent(percept):\n    FOR EACH rule IN condition_action_rules:\n        IF rule.condition_matches(percept) THEN:\n            RETURN rule.action\n    RETURN default_action\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "python-implementation-3",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def simple_reflex_agent(percept):\n    \"\"\"Percept: (location, status) tuple\"\"\"\n    location, status = percept\n    if status == 'Dirty':\n        return 'Suck'\n    elif location == 'A':\n        return 'Right'\n    elif location == 'B':\n        return 'Left'\n    return 'NoOp'\n\npercepts = [('A', 'Dirty'), ('A', 'Clean'), ('B', 'Dirty'), ('B', 'Clean')]\nfor p in percepts:\n    action = simple_reflex_agent(p)\n    print(f\"Percept: {p} -> Action: {action}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Percept: ('A', 'Dirty') -> Action: Suck\nPercept: ('A', 'Clean') -> Action: Right\nPercept: ('B', 'Dirty') -> Action: Suck\nPercept: ('B', 'Clean') -> Action: Left\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "dry-run-trace-table",
      children: "Dry Run Trace Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Percept (Loc, Status)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rule Matched"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(A, Dirty)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dirty -> Suck"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suck"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(A, Clean)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A and Clean -> Right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Right"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(B, Dirty)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dirty -> Suck"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suck"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(B, Clean)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B and Clean -> Left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(A, Dirty)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dirty -> Suck"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suck"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time Complexity:"
        }), " O(R) where R is the number of condition-action rules. In practice, rule lookup is O(1) using a hash table with percept as key."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space Complexity:"
        }), " O(R) to store the rule set."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why:"
        }), " Each decision requires scanning or hashing rules. No state is stored between steps, so memory is minimal. The linear scan over R rules is the dominant cost; in hash-table implementations this drops to O(1)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "advantages--disadvantages-4",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Extremely simple to implement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can only handle fully observable environments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very fast (no state maintenance)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot learn from past experience"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal memory footprint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fails in partially observable environments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to debug and verify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May loop infinitely if rules are incomplete"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No rule matches percept"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent does nothing (NoOp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add a default rule or fallback action"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conflicting rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two rules match simultaneously"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prioritize rules or use a tie-breaker"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Noisy sensor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrong percept triggers wrong action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use probabilistic rule matching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "New unseen situation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rule set incomplete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combine with learning mechanism"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Symmetric environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent oscillates between two states"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add action history to break ties"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "2-model-based-reflex-agent",
      children: "2. Model-Based Reflex Agent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " A delivery robot that navigates a warehouse. It cannot see the entire warehouse at once (partially observable), so it builds and maintains a mental map (internal model) of where shelves, doors, and obstacles are. When it rounds a corner, it updates its map based on what it now sees. This internal model compensates for the limited view."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Maintains an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "internal state"
      }), " that tracks the parts of the environment not visible in the current percept. Uses a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "model of the world"
      }), " to update this state."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "how-it-works-1",
      children: "How It Works"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sense"
        }), " current percept."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update internal state"
        }), " using the model: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "new_state = UPDATE(state, action, percept)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Match"
        }), " the updated internal state against condition-action rules."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Select and execute"
        }), " action."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeat"
        }), " from step 1."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "pseudocode-4",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "FUNCTION ModelBasedReflexAgent(percept):\n    state ← UPDATE_STATE(state, action, percept, model)\n    rule ← RULE_MATCH(state, condition_action_rules)\n    action ← rule.action\n    RETURN action\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "python-implementation-4",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ModelBasedVacuumAgent:\n    def __init__(self):\n        self.internal_map = {'A': False, 'B': False}\n        self.last_action = None\n\n    def update_state(self, percept):\n        location, status = percept\n        self.internal_map[location] = (status == 'Dirty')\n        if self.last_action == 'Suck':\n            self.internal_map[location] = False\n\n    def model_based_reflex_agent(self, percept):\n        self.update_state(percept)\n        location, status = percept\n\n        if status == 'Dirty':\n            self.last_action = 'Suck'\n            return 'Suck'\n\n        other_room = 'B' if location == 'A' else 'A'\n        if self.internal_map[other_room]:\n            self.last_action = 'Right' if location == 'A' else 'Left'\n            return 'Right' if location == 'A' else 'Left'\n\n        self.last_action = 'Right' if location == 'A' else 'Left'\n        return 'Right' if location == 'A' else 'Left'\n\nagent = ModelBasedVacuumAgent()\npercepts = [('A', 'Dirty'), ('A', 'Clean'), ('B', 'Dirty'), ('B', 'Clean')]\nfor p in percepts:\n    action = agent.model_based_reflex_agent(p)\n    print(f\"Percept: {p}, Internal: {agent.internal_map} -> Action: {action}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Percept: ('A', 'Dirty'), Internal: {'A': False, 'B': False} -> Action: Suck\nPercept: ('A', 'Clean'), Internal: {'A': False, 'B': False} -> Action: Right\nPercept: ('B', 'Dirty'), Internal: {'A': False, 'B': False} -> Action: Suck\nPercept: ('B', 'Clean'), Internal: {'A': False, 'B': False} -> Action: Left\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "dry-run-trace-table-1",
      children: "Dry Run Trace Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Percept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Internal State Before"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Model Update"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(A, Dirty)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A: F, B: F}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A: T}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suck"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(A, Clean)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A: T, B: F}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A: F} (after Suck)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Right"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(B, Dirty)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A: F, B: F}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{B: T}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suck"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(B, Clean)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A: F, B: T}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{B: F} (after Suck)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Right (check A → clean)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "complexity-analysis-5",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time Complexity:"
        }), " O(S + R) per step → O(S) to update state (where S is state size) and O(R) for rule matching."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space Complexity:"
        }), " O(S) for internal state + O(R) for rules."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why:"
        }), " State update depends on model complexity. The model must infer unobserved variables from observed ones, which can range from O(1) (simple map update) to polynomial (probabilistic inference with Bayes nets). Rule matching remains the same as simple reflex."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "advantages--disadvantages-5",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles partially observable environments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More complex to implement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maintains knowledge of unseen world"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State can grow large"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can handle sensor failures temporarily"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model may be incorrect (model error)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "More robust than simple reflex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower than simple reflex"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "edge-cases-5",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model mismatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal model contradicts reality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detect inconsistency, reset or correct model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State explosion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Too many variables to track"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use state abstraction or summarization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Percept gap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long period without percepts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State decays in confidence over time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model drift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Environment changes, model becomes stale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Periodically re-learn model from scratch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Incorrect initial state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent starts with wrong belief"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must explore to correct initial state"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3-goal-based-agent",
      children: "3. Goal-Based Agent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " A navigation GPS. It has a goal (destination), knows its current location (state), and plans a sequence of turns (actions) to reach the destination. If you take a wrong turn, it replans from the new position. The goal defines success; the agent searches for actions that achieve it. Unlike a reflex agent, it asks \"What will happen if I do this?\" before acting."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Extends model-based agents by adding ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "goal information"
      }), ". The agent considers future consequences: \"What action will bring me closer to my goal?\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "how-it-works-2",
      children: "How It Works"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sense"
        }), " current percept and update state (like model-based)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project"
        }), " possible futures: simulate sequences of actions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Evaluate"
        }), " which sequence leads to the goal state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Select"
        }), " the first action of the best sequence."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Execute"
        }), " action."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeat"
        }), " from step 1."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "pseudocode-5",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "FUNCTION GoalBasedAgent(percept):\n    state ← UPDATE_STATE(state, action, percept, model)\n    IF state == goal THEN:\n        RETURN NoOp\n    goal_test ← IS_GOAL(state, goal)\n    IF NOT goal_test:\n        actions ← SEARCH(state, model, goal)\n        action ← FIRST(actions)\n    RETURN action\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "python-implementation-5",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class GoalBasedVacuumAgent:\n    def __init__(self, goal='Clean'):\n        self.goal = goal\n        self.state = {'A': 'Unknown', 'B': 'Unknown'}\n        self.last_action = None\n\n    def update_state(self, percept):\n        location, status = percept\n        self.state[location] = status\n        if self.last_action == 'Suck':\n            self.state[location] = 'Clean'\n\n    def is_goal_reached(self):\n        for room, status in self.state.items():\n            if status == 'Dirty':\n                return False\n        return True\n\n    def plan_next_action(self, location):\n        for room, status in self.state.items():\n            if status == 'Dirty':\n                if room != location:\n                    return 'Right' if room == 'B' else 'Left'\n                else:\n                    return 'Suck'\n        return 'NoOp'\n\n    def goal_based_agent(self, percept):\n        location, status = percept\n        self.update_state(percept)\n\n        if self.is_goal_reached():\n            return 'NoOp'\n\n        action = self.plan_next_action(location)\n        self.last_action = action\n        return action\n\nagent = GoalBasedVacuumAgent()\npercepts = [('A', 'Dirty'), ('A', 'Clean'), ('B', 'Dirty'), ('B', 'Clean')]\nfor p in percepts:\n    action = agent.goal_based_agent(p)\n    print(f\"Percept: {p}, State: {agent.state}, Goal Reached: {agent.is_goal_reached()} -> Action: {action}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Percept: ('A', 'Dirty'), State: {'A': 'Dirty', 'B': 'Unknown'}, Goal Reached: False -> Action: Suck\nPercept: ('A', 'Clean'), State: {'A': 'Clean', 'B': 'Unknown'}, Goal Reached: False -> Action: Right\nPercept: ('B', 'Dirty'), State: {'A': 'Clean', 'B': 'Dirty'}, Goal Reached: False -> Action: Suck\nPercept: ('B', 'Clean'), State: {'A': 'Clean', 'B': 'Clean'}, Goal Reached: True -> Action: NoOp\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "dry-run-trace-table-2",
      children: "Dry Run Trace Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Percept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State Before"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Goal Check"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Plan"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(A, Dirty)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A: U, B: U}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not clean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Room A dirty -> Suck"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suck"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(A, Clean)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A: Dirty, B: U}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not clean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A clean, B unknown -> go B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Right"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(B, Dirty)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A: C, B: U}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not clean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Room B dirty -> Suck"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suck"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(B, Clean)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A: C, B: Dirty}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not clean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B now clean, A clean -> done"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NoOp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(B, Clean)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A: C, B: C}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Goal reached"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NoOp"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "complexity-analysis-6",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time Complexity:"
        }), " O(b^d) where b = branching factor and d = solution depth (search space size). Can be reduced to O(b^{d/2}) with bidirectional search or O(E log V) with A*."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space Complexity:"
        }), " O(bd) for search tree storage in BFS; O(d) for DFS."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why:"
        }), " Goal-based agents must search or plan, which can be exponential in the worst case. Simple reflex does not plan at all. Heuristics (A*, greedy search) dramatically reduce practical complexity, but worst-case remains exponential."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "advantages--disadvantages-6",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can handle complex, multi-step problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower → requires search/planning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible → change goal and behavior changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot prioritize between multiple goals"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Explains its actions in terms of purpose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May get stuck if goal is unreachable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles partially observable envs well"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires accurate world model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naturally supports replanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search can be exponential in worst case"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "edge-cases-6",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unreachable goal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No sequence of actions achieves the goal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detect failure early, relax goal or learn"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple conflicting goals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Goals A and B cannot both be satisfied"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prioritize goals or use utility-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Goal changes mid-execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current plan invalidated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replan from current state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite loops in planning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plan revisits same states"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use cycle detection or depth limit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resource limits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not enough time/memory to search full space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use iterative deepening or bounded search"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "4-utility-based-agent",
      children: "4. Utility-Based Agent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " A person choosing a restaurant. Multiple factors matter: price, distance, cuisine quality, wait time. No single \"goal\" captures all preferences. Instead, each option gets a utility score, and you pick the highest. Utility-based agents generalize goal-based agents by scoring how GOOD each state is, not just whether it achieves a goal. Goals say \"get to the destination\"; utility says \"get there quickly, comfortably, and cheaply.\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Generalizes goal-based agents by using a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "utility function"
      }), " that maps a state (or a sequence) to a real number representing the degree of \"happiness.\" The agent chooses the action that maximizes expected utility."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "how-it-works-3",
      children: "How It Works"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sense"
        }), " and update state (like model-based)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generate"
        }), " possible actions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Predict"
        }), " outcome states for each action using the model."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculate"
        }), " utility for each predicted state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Select"
        }), " the action with the highest expected utility."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Execute"
        }), " action."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeat"
        }), " from step 1."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "pseudocode-6",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "FUNCTION UtilityBasedAgent(percept):\n    state ← UPDATE_STATE(state, action, percept, model)\n    actions ← GENERATE_ACTIONS(state)\n    best_utility ← -INFINITY\n    best_action ← NoOp\n    FOR EACH action IN actions:\n        predicted_state ← PREDICT(state, action, model)\n        utility ← UTILITY(predicted_state)\n        IF utility > best_utility THEN:\n            best_utility ← utility\n            best_action ← action\n    RETURN best_action\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "python-implementation-6",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class UtilityBasedVacuumAgent:\n    def __init__(self):\n        self.state = {'A': 'Unknown', 'B': 'Unknown'}\n        self.last_action = None\n\n    def utility(self, location, proposed_action):\n        u = 0\n        current_room_status = self.state[location]\n        other_room = 'B' if location == 'A' else 'A'\n        other_room_status = self.state[other_room]\n\n        if proposed_action == 'Suck':\n            if current_room_status == 'Dirty':\n                u += 10\n            else:\n                u -= 5\n        elif proposed_action in ['Left', 'Right']:\n            if current_room_status == 'Dirty':\n                u -= 3\n            if other_room_status == 'Dirty':\n                u += 5\n            else:\n                u -= 2\n        elif proposed_action == 'NoOp':\n            all_clean = all(s == 'Clean' for s in self.state.values())\n            if all_clean:\n                u += 10\n            else:\n                u -= 10\n        return u\n\n    def update_state(self, percept):\n        location, status = percept\n        self.state[location] = status\n        if self.last_action == 'Suck':\n            self.state[location] = 'Clean'\n\n    def utility_based_agent(self, percept):\n        location, status = percept\n        self.update_state(percept)\n\n        possible_actions = ['Suck', 'Left', 'Right', 'NoOp']\n        if location == 'A':\n            possible_actions.remove('Left')\n        if location == 'B':\n            possible_actions.remove('Right')\n\n        best_action = max(possible_actions, key=lambda a: self.utility(location, a))\n        self.last_action = best_action\n        return best_action\n\nagent = UtilityBasedVacuumAgent()\npercepts = [('A', 'Dirty'), ('A', 'Clean'), ('B', 'Dirty'), ('B', 'Clean')]\nfor p in percepts:\n    action = agent.utility_based_agent(p)\n    print(f\"Percept: {p}, State: {agent.state} -> Action: {action}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Percept: ('A', 'Dirty'), State: {'A': 'Dirty', 'B': 'Unknown'} -> Action: Suck\nPercept: ('A', 'Clean'), State: {'A': 'Clean', 'B': 'Unknown'} -> Action: Right\nPercept: ('B', 'Dirty'), State: {'A': 'Clean', 'B': 'Dirty'} -> Action: Suck\nPercept: ('B', 'Clean'), State: {'A': 'Clean', 'B': 'Clean'} -> Action: NoOp\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "dry-run-trace-table-3",
      children: "Dry Run Trace Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Percept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Possible Actions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Utilities"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(A, Dirty)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A: D, B: U}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suck, Right, NoOp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suck=10, Right=-3, NoOp=-10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suck"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(A, Clean)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A: C, B: U}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suck, Right, NoOp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suck=-5, Right=+5(->B dirty), NoOp=-10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Right"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(B, Dirty)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A: C, B: D}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suck, Left, NoOp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suck=10, Left=-3, NoOp=-10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suck"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(B, Clean)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A: C, B: C}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suck, Left, NoOp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suck=-5, Left=-2(no dirt), NoOp=10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NoOp"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "complexity-analysis-7",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time Complexity:"
        }), " O(A x C) where A = number of possible actions and C = cost of computing utility per action."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space Complexity:"
        }), " O(S) for state + O(A) for action generation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why:"
        }), " The agent evaluates every action against the utility function. If utility computation requires simulation (e.g., rollouts in model-predictive control), C dominates. Unlike goal-based agents, utility-based agents do not search over sequences → they evaluate one-step outcomes, making them faster than full search but slower than reflex."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "advantages--disadvantages-7",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles trade-offs between conflicting objectives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires careful utility function design"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Produces nuanced, graded decisions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Utility values are subjective"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Most flexible agent architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computationally heavier than goal-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can handle uncertainty probabilistically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard to debug → why was utility X chosen?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naturally generalizes goal-based agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Utility functions can be gamed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "edge-cases-7",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Utility ties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two actions have equal utility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add tie-breaking rule (e.g., random, first)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Utility function gaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent finds loophole that maximizes utility but violates intent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design utility carefully, add constraints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unbounded utility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some states produce extreme values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normalize or clip utility values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Changing preferences"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User's utility function changes over time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Online learning of utility parameters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Non-stationary utility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal action changes as utility evolves"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use adaptive utility estimation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "agent-types-comparison-table",
      children: "Agent Types Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Simple Reflex"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Model-Based Reflex"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Goal-Based"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Utility-Based"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Internal State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "World Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Goal Knowledge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Utility Function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles Partial Observability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Planning / Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trade-off Decisions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Computational Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(S)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(b^d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(A-C)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory Requirement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High (stores search tree)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Very Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Fully observable, deterministic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Partially observable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Goal-oriented with clear success"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Complex with trade-offs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-vacuum-cleaner-agent-simple-reflex",
      children: "Example 1: Vacuum-Cleaner Agent (Simple Reflex)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A simple agent that operates in a world with two rooms (A and B)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PEAS"
        }), ":\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            }), ": Number of clean squares in a given time."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Environment"
            }), ": Rooms A and B, dirt."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Actuators"
            }), ": Move Left, Move Right, Suck."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Sensors"
            }), ": Location sensor, Dirt sensor."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code snippet (Python Reflex Agent)"
        }), ":"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def reflex_vacuum_agent(location, status):\n    if status == 'Dirty':\n        return 'Suck'\n    elif location == 'A':\n        return 'Right'\n    elif location == 'B':\n        return 'Left'\n\npercept = ('A', 'Dirty')\naction = reflex_vacuum_agent(*percept)\nprint(f\"Percept: {percept}, Action: {action}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expected output"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Percept: ('A', 'Dirty'), Action: Suck"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What it demonstrates"
        }), ": A simple reflex agent that bases its decision only on the current percept."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-automated-taxi-driver-utility-based",
      children: "Example 2: Automated Taxi Driver (Utility-Based)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A highly complex agent requiring sophisticated sensors and actuators."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PEAS"
        }), ":\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            }), ": Safe, fast, legal, comfortable trip, maximize profits."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Environment"
            }), ": Roads, other traffic, pedestrians, weather."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Actuators"
            }), ": Steering, accelerator, brake, signal, horn, display."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Sensors"
            }), ": Cameras, LIDAR, speedometer, GPS, odometer, engine sensors."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Environment Properties"
        }), ": Partially observable, stochastic, sequential, dynamic, continuous, multi-agent."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What it demonstrates"
        }), ": Application of utility-based agent theory to high-stakes, real-world problems. The taxi must balance safety vs. speed, comfort vs. efficiency → a perfect use case for utility-based reasoning."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Agent Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Internal State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Goal Knowledge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Utility Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple Reflex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fully observable, simple tasks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model-Based Reflex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partially observable environments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Goal-Based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Problems with clear success criteria"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Utility-Based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trade-offs and conflicting objectives"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--environment-properties",
      children: "Quick Reference → Environment Properties"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Two Poles"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example (Fully Observable)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example (Not)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Observability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full vs. Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chess"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poker"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Determinism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic vs. Stochastic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8-Puzzle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backgammon (dice)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Episodicity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Episodic vs. Sequential"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Robot navigation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static vs. Dynamic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crossword puzzle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Autonomous driving"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Discreteness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discrete vs. Continuous"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chess (finite moves)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Taxi steering angle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Agent Count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single vs. Multi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sudoku solver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiplayer game"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Agent Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "ML Engineering"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Computer Vision"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "NLP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Research"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple Reflex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model-Based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Goal-Based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Utility-Based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Learning Agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-how-would-you-design-an-agent-for-a-partially-observable-environment-where-sensors-provide-noisy-data",
      children: "Q1: How would you design an agent for a partially observable environment where sensors provide noisy data?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " For partially observable environments, a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "model-based agent"
      }), " with probabilistic state estimation is essential. Use these techniques:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Probabilistic State Representation"
        }), ": Maintain a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "belief state"
        }), " → a probability distribution over all possible world states, rather than a single deterministic state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bayesian Updating"
        }), ": When a noisy percept arrives, update beliefs using Bayes' rule: P(state | percept) / P(percept | state) x P(state)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prediction Step"
        }), ": Before sensing, predict the next belief state using the world model and action taken."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Correction Step"
        }), ": After sensing, correct the prediction using the actual sensor reading."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decision Making Under Uncertainty"
        }), ": Choose actions that maximize expected utility, accounting for the fact that the true state is uncertain."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For example, a robot in a smoky room (limited visibility) might maintain a probability map of obstacle locations. When sonar returns a noisy reading, it updates probabilities rather than assuming exact positions. It might choose to move slowly (low utility cost if wrong) rather than fast (catastrophic if an unseen obstacle exists). This approach → maintaining belief states with Bayesian updates → is the foundation of modern robotics (particle filters, Kalman filters) and is used in systems from Roomba to self-driving cars."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-compare-how-different-agent-architectures-handle-sensor-failure",
      children: "Q2: Compare how different agent architectures handle sensor failure."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sensor Failure Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple Reflex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fails immediately → depends entirely on current percept"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model-Based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can continue using internal state for some time; degrades gracefully"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Goal-Based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can replan around uncertainty; may require explicit sensor failure detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Utility-Based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weighs cost of acting without sensing vs. cost of stopping; may choose to stop if risk is too high"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-you-are-designing-an-ai-for-a-mars-rover-the-rovers-sensors-fail-intermittently-due-to-dust-storms-communication-with-earth-has-a-20-minute-delay-and-the-terrain-is-unknown-which-agent-architecture-do-you-choose-and-why",
      children: "Q3: You are designing an AI for a Mars rover. The rover's sensors fail intermittently due to dust storms, communication with Earth has a 20-minute delay, and the terrain is unknown. Which agent architecture do you choose and why?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "model-based utility agent"
      }), " with autonomous goal management is the best choice for these constraints:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Partial observability during dust storms"
        }), " → Model-based internal state is mandatory. The rover must maintain a probabilistic terrain map that it updates when sensors clear."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "20-minute communication delay"
        }), " → The rover cannot wait for Earth commands for simple decisions. It must be autonomous, ruling out simple teleoperation. Goal-based reasoning with high-level goals from Earth (\"explore region X\") and low-level autonomy (\"avoid that crater\") is essential."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unknown terrain"
        }), " → The model must be learned online. The rover should start with a prior (orbital imagery) and refine it through exploration."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trade-offs under limited power"
        }), " → Utility-based reasoning is critical. The rover must trade science value against battery consumption, communication bandwidth, and thermal constraints. A pure goal-based agent (\"go to X\") would drain the battery if X is too far."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In practice, NASA's Mars rovers use a hierarchical architecture with model-based state estimation and utility-based planning for resource management, proving this combination works in the harshest environments."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-how-would-you-convert-a-thermostat-simple-reflex-into-a-utility-based-agent",
      children: "Q4: How would you convert a thermostat (simple reflex) into a utility-based agent?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A thermostat is the classic simple reflex agent: if temperature < setpoint -> heat on; if temperature > setpoint -> heat off. To make it utility-based:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Define utility function"
        }), ": U(temp, energy_cost, time_of_day) = -w1 x |temp - setpoint| - w2 x energy_cost - w3 x (rate if peak_hour)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add predictive model"
        }), ": Model how temperature changes when heat is on/off, accounting for outside temperature and insulation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Evaluate trade-offs"
        }), ": Instead of binary on/off, the agent might pre-heat before you wake (when energy is cheaper) or accept a 1 degree deviation during peak hours to save cost."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Result"
        }), ": The utility-based thermostat outperforms the simple reflex one by saving 15-25% on energy bills while maintaining comfort → because it understands trade-offs, not just thresholds."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "irobot-roomba-simple-reflex--model-based-hybrid",
      children: "iRobot Roomba (Simple Reflex + Model-Based Hybrid)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Roomba uses a combination of simple reflex rules and basic model-based navigation:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Simple Reflex"
        }), ": When bump sensor triggers -> reverse and turn. When cliff sensor triggers -> stop. When dirt sensor detects debris -> slow down and clean thoroughly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Model-Based"
        }), ": Tracks approximate position using wheel odometry to ensure coverage. Maintains a rough mental map of where it has been."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Utility Considerations"
        }), ": When battery drops below 20%, the utility of returning to dock exceeds the utility of continued cleaning → a simple utility decision."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why it works"
        }), ": The environment (a home floor) is relatively static and predictable. Simple rules handle 90% of situations. The model-based component prevents the robot from cleaning the same spot all day."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "self-driving-cars-utility-based-with-goal-based-planning",
      children: "Self-Driving Cars (Utility-Based with Goal-Based Planning)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Autonomous vehicles like Waymo use a layered agent architecture:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "State"
        }), ": Position, velocity of self and all detected objects, road layout, traffic signals, weather conditions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Model"
        }), ": Physics-based motion prediction for other vehicles, pedestrian behavior models, road geometry."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Goal Layer"
        }), ": Destination is the high-level goal. Route planner finds a path through the road network."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Utility Function"
        }), ": Weighted combination of safety (collision probability x severity), progress (distance toward destination), legality (traffic law compliance), and comfort (jerk, acceleration)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decision"
        }), ": At each intersection, the planner evaluates thousands of possible trajectories and picks the one maximizing expected utility. A trajectory that shaves 30 seconds off the trip but has 1% higher collision probability is rejected because the utility weight on safety dominates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why it works"
        }), ": The real world demands trade-offs at every moment → speed vs. safety, comfort vs. urgency. Only utility-based agents can make these nuanced decisions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recommendation-systems-utility-based--learning-agent",
      children: "Recommendation Systems (Utility-Based / Learning Agent)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Netflix, Amazon, and YouTube recommend content using utility-based agents:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Percepts"
        }), ": User click history, watch time, ratings, search queries, time of day, device type, scroll depth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Model"
        }), ": Collaborative filtering neural network predicts user preference for each item. Matrix factorization captures latent user and item features."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Utility Function"
        }), ": Predicted engagement (watch time, click-through rate, conversion probability, retention probability)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action"
        }), ": Display the top-N items sorted by predicted utility. The system continuously learns from user feedback to improve the utility model."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trade-offs"
        }), ": The recommendation agent must balance relevance (show what you like) with diversity (show new things you might like) → a classic utility trade-off between exploitation and exploration."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why it works"
        }), ": User preferences are complex and cannot be reduced to a single goal. Utility-based modeling captures the gradient of preference → \"you might like this 87%\" vs. just \"relevant/not relevant.\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "industrial-robot-arms-goal-based",
      children: "Industrial Robot Arms (Goal-Based)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Factory robot arms are goal-based agents:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Goal"
        }), ": Pick part from conveyor, place at position (x, y, z) within +/-0.1mm tolerance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Planning"
        }), ": Inverse kinematics solves joint angles to reach the target position. Path planning avoids obstacles in the workspace."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sensors"
        }), ": Joint encoders, force/torque sensors at the wrist, vision system for part localization."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why goal-based"
        }), ": The goal is clear and unambiguous → move the part exactly here. No trade-offs needed → just precision and speed within safety constraints. Utility adds nothing because there is no meaningful trade-off to optimize."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agents interact with environments via sensors and actuators. The agent function maps percept sequences to actions; the agent program implements this function."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rationality is not perfection; it is maximizing expected performance based on available information."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The PEAS framework (Performance, Environment, Actuators, Sensors) is the standard method for specifying an agent's task."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding environment properties (observability, determinism, episodicity, dynamics, discreteness, agent count) is crucial for selecting the right agent architecture."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent programs range from simple reflex (condition-action rules, no state) to utility-based (maximizes expected utility across trade-offs)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The \"Internal State\" in model-based agents allows them to handle partially observable environments."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Goal-based agents search for action sequences that achieve a goal state; utility-based agents generalize this by scoring states with a utility function."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-world systems (Roomba, self-driving cars, Netflix, factory robots) use these architectures in combination, often layering multiple types."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " Which agent architecture requires an internal model of how the world works?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Simple reflex agent"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Model-based reflex agent"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Utility-based agent"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Learning agent"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Model-based reflex agents maintain internal state to handle partially observable environments where the current percept alone is insufficient."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " In the PEAS framework, what does the \"A\" stand for?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Actions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Algorithms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Actuators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Applications"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>C) Actuators → the mechanisms through which an agent acts upon its environment."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " Which environment property distinguishes chess from poker?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Deterministic vs. Stochastic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Static vs. Dynamic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Fully vs. Partially Observable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Both A and C"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>D) Chess is fully observable and deterministic; poker is partially observable (hidden cards) and involves chance (stochastic)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " Which agent type produces the most nuanced decisions when dealing with conflicting objectives?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Simple Reflex"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Model-Based"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Goal-Based"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Utility-Based"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>D) Utility-based agents handle trade-offs by assigning numeric utilities to states and choosing the action that maximizes expected utility, making them ideal for conflicting objectives like safety vs. speed."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " What is the primary weakness of a simple reflex agent?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Too much memory usage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Cannot handle partially observable environments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Too slow for real-time systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Requires a complete world model"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Simple reflex agents only consider the current percept. In partially observable environments, the current percept alone is insufficient to determine the correct action."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6:"
      }), " Which environment property determines whether an agent must consider past percepts when making decisions?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Determinism"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Episodicity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Discreteness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Agent count"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) In sequential (non-episodic) environments, past decisions affect future options, so the agent must consider its percept history or maintain internal state."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7:"
      }), " A delivery drone operates in wind (stochastic), cannot see behind buildings (partial observability), and must deliver packages in sequence (sequential). Which architecture is most suitable?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Simple reflex"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Model-based utility agent"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Pure goal-based agent"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Random agent"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Model-based utility agent. The drone needs internal state (partial observability), probabilistic reasoning (stochastic wind), and utility trade-offs (battery vs. speed vs. delivery order)."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the \"Agent Function\" vs. the \"Agent Program.\" How are they related?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What makes an agent \"autonomous\"? Give an example of a non-autonomous agent."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List the six properties used to characterize a task environment and give an example of each pole."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why a utility-based agent is often more flexible than a goal-based agent. Provide a concrete scenario."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the role of internal state in a model-based reflex agent?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is rationality not equal to perfection? Describe a scenario where a rational agent fails."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide the PEAS description for a medical diagnosis system."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Characterize the environment of a Chess game according to the six properties."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Draw a diagram of a Model-based Reflex Agent and explain the role of the \"State.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a simple reflex agent in Python for a smart thermostat that turns heating on when temperature drops below 18C and off when it reaches 22C."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a utility function for a robot that must balance speed of delivery against battery conservation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Classify the environment of an automated stock trading system using all six properties."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a Performance Measure for an internet shopping agent. Explain how your measure prevents the agent from simply buying everything it finds regardless of price or quality, and how it balances speed versus cost-savings."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A delivery drone operates in a windy city with GPS dropout in tunnels. Its camera sometimes fails in rain. Design the agent architecture you would use, including how it handles sensor failure and partial observability. Justify your choice."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extend the utility-based vacuum cleaner agent to include battery level. If utility for cleaning is high but battery is low, the agent should return to recharge. Implement and trace 5 percepts showing the trade-off."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a PEAS specification for a personal AI assistant that schedules meetings, answers emails, and orders lunch. Identify at least two conflicting performance measures and explain how a utility-based agent would handle them."
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