"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[52169],{

/***/ 21352
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_learning_how_to_learn_practical_ch_06_learning_from_code_md_fc6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-learning-how-to-learn-practical-ch-06-learning-from-code-md-fc6.json
const site_docs_courses_learning_how_to_learn_practical_ch_06_learning_from_code_md_fc6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/learning-how-to-learn-practical/ch-06-learning-from-code","title":"Chapter 6: Learning From Any Resource","description":"⏱ 2 hours total · 🎯 Intermediate · 📋 Recommended: Ch 4 (Active Recall)","source":"@site/docs/courses/learning-how-to-learn-practical/ch-06-learning-from-code.md","sourceDirName":"courses/learning-how-to-learn-practical","slug":"/learning-how-to-learn-practical/ch-06-learning-from-code","permalink":"/ai-engineering-journey/learning-how-to-learn-practical/ch-06-learning-from-code","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"ch-06-learning-from-code","slug":"/learning-how-to-learn-practical/ch-06-learning-from-code","title":"Chapter 6: Learning From Any Resource","sidebar_label":"Chapter 6: Learning From Any Resource","sidebar_position":7},"sidebar":"coursesSidebar","previous":{"title":"Chapter 5: Deep Work & Focus","permalink":"/ai-engineering-journey/learning-how-to-learn-practical/ch-05-deep-work-focus"},"next":{"title":"Chapter 7: Practice System for Mastery","permalink":"/ai-engineering-journey/learning-how-to-learn-practical/ch-07-dsa-practice-system"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/learning-how-to-learn-practical/ch-06-learning-from-code.md


const frontMatter = {
	id: 'ch-06-learning-from-code',
	slug: '/learning-how-to-learn-practical/ch-06-learning-from-code',
	title: 'Chapter 6: Learning From Any Resource',
	sidebar_label: 'Chapter 6: Learning From Any Resource',
	sidebar_position: 7
};
const contentTitle = 'Chapter 6: Learning From Any Resource';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Quick Start (10 min)",
  "id": "quick-start-10-min",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "The SQ3R Method for Any Resource",
  "id": "the-sq3r-method-for-any-resource",
  "level": 3
}, {
  "value": "Reverse Engineering a Codebase",
  "id": "reverse-engineering-a-codebase",
  "level": 3
}, {
  "value": "Documentation Strategy",
  "id": "documentation-strategy",
  "level": 3
}, {
  "value": "Framework Learning Blueprint",
  "id": "framework-learning-blueprint",
  "level": 3
}, {
  "value": "Learning From Open Source",
  "id": "learning-from-open-source",
  "level": 3
}, {
  "value": "Code Reading Workout Plan",
  "id": "code-reading-workout-plan",
  "level": 3
}, {
  "value": "Common Code Learning Mistakes",
  "id": "common-code-learning-mistakes",
  "level": 3
}, {
  "value": "Project Ideas for Each Skill Level",
  "id": "project-ideas-for-each-skill-level",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "📝 Plain-Language Walkthrough",
  "id": "-plain-language-walkthrough",
  "level": 3
}, {
  "value": "💻 TypeScript Implementation (Optional)",
  "id": "-typescript-implementation-optional",
  "level": 3
}, {
  "value": "Example 1: Codebase Analyzer",
  "id": "example-1-codebase-analyzer",
  "level": 3
}, {
  "value": "Example 4: Documentation Strategy Adapter",
  "id": "example-4-documentation-strategy-adapter",
  "level": 3
}, {
  "value": "Example 5: Knowledge Map Builder",
  "id": "example-5-knowledge-map-builder",
  "level": 3
}, {
  "value": "Example 3: Framework Learning Plan Generator",
  "id": "example-3-framework-learning-plan-generator",
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
  "value": "Common Mistakes",
  "id": "common-mistakes",
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
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 2
}, {
  "value": "SQ3R Method",
  "id": "sq3r-method",
  "level": 3
}, {
  "value": "Knowledge Map Template",
  "id": "knowledge-map-template",
  "level": 3
}, {
  "value": "Active vs Passive Learning",
  "id": "active-vs-passive-learning",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "chapter-6-learning-from-any-resource",
        children: "Chapter 6: Learning From Any Resource"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["⏱ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2 hours total"
        }), " · 🎯 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Intermediate"
        }), " · 📋 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Recommended: Ch 4 (Active Recall)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After this chapter you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extract knowledge from any resource — textbooks, video courses, lectures, or code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the SQ3R method (Survey, Question, Read, Recite, Review) to any learning material"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deconstruct any resource into its core concepts, prerequisites, and practice paths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a personal knowledge map that connects new information to what you already know"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between passive consumption (watching/reading) and active learning (doing/teaching)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-start-10-min",
      children: "Quick Start (10 min)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read the SQ3R method in Theory (3 min)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pick any resource you're currently studying (2 min)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write 5 questions you want that resource to answer (3 min)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read one section and immediately summarize aloud from memory (2 min)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Save for later:"
        }), " Knowledge map template, TypeScript code, exercises"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-sq3r-method-for-any-resource",
      children: "The SQ3R Method for Any Resource"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Whether you're learning from a textbook, a video course, a lecture, or a codebase, the same fundamental process applies. The SQ3R method (Survey, Question, Read, Recite, Review) is a proven technique for extracting knowledge from any resource. It transforms passive consumption into active learning."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Survey Resource] --> B[Question Formulation]\n    B --> C[Read Actively]\n    C --> D[Recite from Memory]\n    D --> E[Review & Connect]\n    E --> F{Knowledge Gap?}\n    F -->|Yes| C\n    F -->|No| G[Apply / Practice]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Read (15 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find the entry point (index.ts, main.py, package.json main field)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read the README (what does this project do? how do I run it?)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify the high-level structure (src/, tests/, config/)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Run (5 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Get the project running locally"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run the test suite — passing tests confirm your setup is correct"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute the main functionality"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Debug (20 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set a breakpoint at the entry point"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trace one request/feature end-to-end"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand: input → transformation → output"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "See which functions call which"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Modify (20 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Change something small (a log message, a return value, a color)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Observe the effect"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If you predicted the change correctly, you understand the code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If you didn't, debug again"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reverse-engineering-a-codebase",
      children: "Reverse Engineering a Codebase"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When approaching an unfamiliar codebase, follow this systematic process:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Find the entry point:"
        }), " In TypeScript/Node projects, check package.json for \"main\" or \"bin\". In Python, check setup.py or the main module. In frameworks, check the router/index file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trace a single request:"
        }), " Pick one feature. Set a breakpoint at the entry point. Step through every function call until you reach the response. Draw the call stack"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Draw the dependency graph:"
        }), " Which files import what? Identify core modules vs utilities vs configuration. A project with good separation will have a clear core with dependencies flowing inward"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify the data flow:"
        }), " Input (API request, CLI args, file) → Transformation (business logic, processing) → Output (response, file write, database save). Document each step"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document in your own words:"
        }), " Write a 200-word summary of the architecture. If you can't explain it simply, you don't understand it yet"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "documentation-strategy",
      children: "Documentation Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Most developers read documentation wrong. They start at the beginning and read linearly. This is inefficient."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Source"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How to Read"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "README"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First, always"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What, why, how to start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Getting Started"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Follow exactly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set up and run"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API Reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search, don't read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dictionary for lookups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tutorials"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One per feature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guided practice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Source code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When docs fail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ultimate truth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before modifying"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expected behavior"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Identify Resource Type] --> B{Is it a...}\n    B -->|Textbook / Article| C[Apply SQ3R]\n    B -->|Video Course| D[Pause every 10min + Summarize]\n    B -->|Codebase| E[Read → Run → Debug → Modify]\n    B -->|Lecture| F[Active Listening + Write Questions]\n    C --> G[Extract Core Concepts]\n    D --> G\n    E --> G\n    F --> G\n    G --> H[Add to Knowledge Map]\n    H --> I[Apply + Practice]\n    I --> J[Teach from Memory]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " Read just enough to accomplish your next task. Don't read the entire documentation before writing code. You'll forget most of it. Read → Code → Repeat."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-learning-blueprint",
      children: "Framework Learning Blueprint"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build the same app 3 times with increasing complexity:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version 1 (Day 1): Hello World"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One route or component"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimal setup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Goal: get it running"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version 2 (Day 3): CRUD"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full create/read/update/delete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Database integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Goal: understand the core patterns"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version 3 (Day 7): Production Patterns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Authentication or authorization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error handling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Goal: understand real-world usage"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example: Learning a new Node.js framework (Express → Fastify → Hono)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V1: Hello World route"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V2: Todo API with SQLite"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V3: Add JWT auth, input validation, and tests"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "learning-from-open-source",
      children: "Learning From Open Source"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-reading-workout-plan",
      children: "Code Reading Workout Plan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Treat code reading like a gym workout. Do this weekly:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Monday — Read:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pick a function from a well-known open-source project"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read it. Understand every line. Look up any syntax you don't know"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Time: 30 min"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Wednesday — Trace:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set breakpoints. Step through the function with sample inputs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document the output at each step"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Time: 30 min"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Friday — Modify:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Change the function's behavior in some way"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Predict what will happen. Run the tests. Did it match?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Time: 30 min"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Saturday — Write:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the same function from scratch without looking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare with the original. What did you miss?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Time: 30 min"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-code-learning-mistakes",
      children: "Common Code Learning Mistakes"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mistake"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fix"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reading without running"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always run the code. Always."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Copy-pasting examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type every example manually. Muscle memory helps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Skipping documentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read the README. Always. It's there for a reason"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Not using debugger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Breakpoints reveal what's actually happening"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Learning in isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare your understanding with tests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Moving too fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Master one function before moving to the next"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Not taking notes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write what you learned after every session"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "project-ideas-for-each-skill-level",
      children: "Project Ideas for Each Skill Level"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Beginner (V1 level):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Todo app (CLI version)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Weather CLI tool (calls an API)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Markdown file parser"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Personal bookmark manager"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intermediate (V2 level):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Todo app with database and REST API"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "URL shortener with redirect tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Habit tracker with streak counting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Blog engine with markdown support"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advanced (V3 level):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rate-limited API gateway"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-time chat application"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Key-value store with persistence"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Load-balanced web server"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Studying production code is one of the fastest ways to improve:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read PRs:"
        }), " See how experienced developers review code. What do they catch? What patterns do they enforce?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read tests:"
        }), " Tests document expected behavior better than any README. Read the test file before reading the implementation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read issues:"
        }), " Common pitfalls, edge cases, and debugging techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read the CHANGELOG:"
        }), " Understand how the project evolved. Why was each change made?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Contribute:"
        }), " Fix a typo in documentation. Then fix a small bug. Then add a small feature. Each contribution deepens your understanding"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-plain-language-walkthrough",
      children: "📝 Plain-Language Walkthrough"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " You need to learn a new subject (e.g., Indian Polity for UPSC or a new programming framework)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Survey the Resource (15 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Textbook: Read table of contents, chapter summaries, index"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Video course: Watch the intro/outro of each module. Read the description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Codebase: Read the README, project structure, dependency list"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Question (10 min)"
      }), "\nWrite 5-10 questions you want the resource to answer. Example for Indian Polity:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the structure of the Indian Constitution?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How do the three branches of government interact?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are fundamental rights and duties?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Read + Recite (45 min cycle)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read one chapter or watch one module (15 min)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Close the material. Summarize aloud or in writing from memory (5 min)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check accuracy. Note gaps. (5 min)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat for next section"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Review (15 min after session)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Answer your original questions from Step 2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create 5 flashcards (physical or digital) for key concepts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify 1-2 things to practice tomorrow"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-typescript-implementation-optional",
      children: "💻 TypeScript Implementation (Optional)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-codebase-analyzer",
      children: "Example 1: Codebase Analyzer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface ModuleNode {\npath: string\nimports: string[]\nexports: string[]\ntype: 'core' | 'test' | 'config' | 'util'\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface DependencyGraph {\nnodes: ModuleNode[]\nedges: { from: string; to: string }[]\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class CodebaseAnalyzer {\nanalyze(files: { path: string; content: string }[]): DependencyGraph {\nconst nodes: ModuleNode[] = files.map(f => ({\npath: f.path,\nimports: this.extractImports(f.content),\nexports: this.extractExports(f.content),\ntype: this.classifyModule(f.path)\n}))"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    const edges: { from: string; to: string }[] = []\n    nodes.forEach(node => {\n        node.imports.forEach(imp => {\n            const target = nodes.find(n => n.path.includes(imp))\n            if (target) edges.push({ from: node.path, to: target.path })\n        })\n    })\n\n    return { nodes, edges }\n}\n\nfindEntryPoint(nodes: ModuleNode[]): ModuleNode | null {\n    // Entry points are imported by nothing but export the main interfaces\n    const candidates = nodes.filter(n =>\n        n.type === 'core' && n.exports.length > 0\n    )\n    return candidates.find(c =>\n        !nodes.some(n => n.imports.some(i => c.path.includes(i)))\n    ) ?? candidates[0] ?? null\n}\n\ngetDependencyDepth(node: ModuleNode, graph: DependencyGraph): number {\n    const visited = new Set<string>()\n    const dfs = (current: string, depth: number): number => {\n        if (visited.has(current)) return depth\n        visited.add(current)\n        const deps = graph.edges.filter(e => e.from === current)\n        if (deps.length === 0) return depth\n        return Math.max(...deps.map(e => dfs(e.to, depth + 1)))\n    }\n    return dfs(node.path, 0)\n}\n\nprivate extractImports(content: string): string[] {\n    const imports: string[] = []\n    const regex = /from ['\"]([^'\"]+)['\"]/g\n    let match\n    while ((match = regex.exec(content)) !== null) {\n        imports.push(match[1])\n    }\n    return imports\n}\n\nprivate extractExports(content: string): string[] {\n    const exports: string[] = []\n    const regex = /export (?:default |const |function |class )(\\w+)/g\n    let match\n    while ((match = regex.exec(content)) !== null) {\n        exports.push(match[1])\n    }\n    return exports\n}\n\nprivate classifyModule(path: string): 'core' | 'test' | 'config' | 'util' {\n    if (path.includes('.test.') || path.includes('.spec.')) return 'test'\n    if (path.includes('config')) return 'config'\n    if (path.includes('util') || path.includes('helper')) return 'util'\n    return 'core'\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n### Example 2: Request Tracer\n\n```typescript\ninterface CallFrame {\n    function: string\n    file: string\n    line: number\n    args: unknown[]\n    result?: unknown\n}\n\nclass RequestTracer {\n    private trace: CallFrame[] = []\n\n    enter(functionName: string, file: string, line: number, args: unknown[]): void {\n        this.trace.push({ function: functionName, file, line, args })\n    }\n\n    exit(result: unknown): void {\n        const last = this.trace[this.trace.length - 1]\n        if (last) last.result = result\n    }\n\n    getFullTrace(): CallFrame[] {\n        return [...this.trace]\n    }\n\n    summarize(): TraceSummary {\n        const uniqueFiles = [...new Set(this.trace.map(t => t.file))]\n        const depth = this.trace.length\n\n        return {\n            totalCalls: depth,\n            uniqueFiles,\n            entryPoint: this.trace[0]?.function ?? 'unknown',\n            lastCall: this.trace[depth - 1]?.function ?? 'unknown',\n        }\n    }\n}\n\ninterface TraceSummary {\n    totalCalls: number\n    uniqueFiles: string[]\n    entryPoint: string\n    lastCall: string\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-documentation-strategy-adapter",
      children: "Example 4: Documentation Strategy Adapter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type DocSource = 'readme' | 'getting-started' | 'api-ref' | 'tutorial' | 'source' | 'tests'\n\ninterface DocReadResult {\n    source: DocSource\n    timeSpent: number\n    keyTakeaways: string[]\n    nextAction: string\n}\n\nclass DocumentationStrategy {\n    recommend(task: string, experience: 'beginner' | 'intermediate' | 'advanced'): DocSource[] {\n        const strategies: Record<string, DocSource[]> = {\n            'setup': ['readme', 'getting-started'],\n            'implement-feature': ['tutorial', 'api-ref', 'tests'],\n            'debug': ['source', 'tests', 'api-ref'],\n            'understand-architecture': ['readme', 'source'],\n            'modify-existing': ['tests', 'source'],\n            'performance-tuning': ['api-ref', 'source', 'tests'],\n        }\n\n        return strategies[task] ?? ['readme', 'getting-started']\n    }\n\n    read(source: DocSource, content: string): DocReadResult {\n        const strategies: Record<DocSource, { timeLimit: number; focus: string }> = {\n            'readme': { timeLimit: 5, focus: 'What, why, how to start' },\n            'getting-started': { timeLimit: 15, focus: 'Follow exactly to run it' },\n            'api-ref': { timeLimit: 10, focus: 'Search for specific function signatures' },\n            'tutorial': { timeLimit: 30, focus: 'Build the example step by step' },\n            'source': { timeLimit: 20, focus: 'Trace one request end-to-end' },\n            'tests': { timeLimit: 15, focus: 'Expected behavior of each function' },\n        }\n\n        const strategy = strategies[source]\n        return {\n            source,\n            timeSpent: strategy.timeLimit,\n            keyTakeaways: [`Focused on: ${strategy.focus}`],\n            nextAction: `After ${strategy.timeLimit} min, move to ${this.getNextSource(source)}`\n        }\n    }\n\n    private getNextSource(current: DocSource): DocSource {\n        const order: DocSource[] = ['readme', 'getting-started', 'tutorial', 'api-ref', 'tests', 'source']\n        const idx = order.indexOf(current)\n        return idx < order.length - 1 ? order[idx + 1] : 'source'\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-5-knowledge-map-builder",
      children: "Example 5: Knowledge Map Builder"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface KnowledgeNode {\n    id: string\n    concept: string\n    level: 'core' | 'supporting' | 'advanced'\n    prerequisite: string[]\n    applications: string[]\n    confidence: 1 | 2 | 3 | 4 | 5\n}\n\nclass KnowledgeMap {\n    private nodes: Map<string, KnowledgeNode> = new Map()\n\n    addNode(concept: string, level: KnowledgeNode['level'], prerequisites: string[] = []): void {\n        this.nodes.set(concept, {\n            id: crypto.randomUUID(),\n            concept,\n            level,\n            prerequisite: prerequisites,\n            applications: [],\n            confidence: 1\n        })\n    }\n\n    addApplication(concept: string, application: string): void {\n        const node = this.nodes.get(concept)\n        if (node) node.applications.push(application)\n    }\n\n    updateConfidence(concept: string, confidence: KnowledgeNode['confidence']): void {\n        const node = this.nodes.get(concept)\n        if (node) node.confidence = confidence\n    }\n\n    getLearningPath(targetConcept: string): string[] {\n        const path: string[] = []\n        const visited = new Set<string>()\n\n        const dfs = (concept: string) => {\n            if (visited.has(concept)) return\n            visited.add(concept)\n\n            const node = this.nodes.get(concept)\n            if (!node) return\n\n            node.prerequisite.forEach(p => dfs(p))\n            path.push(concept)\n        }\n\n        dfs(targetConcept)\n        return path\n    }\n\n    getWeakAreas(): string[] {\n        return [...this.nodes.values()]\n            .filter(n => n.confidence <= 2)\n            .map(n => n.concept)\n    }\n\n    exportMap(): string {\n        const lines: string[] = ['# Knowledge Map']\n        this.nodes.forEach(node => {\n            const prereqs = node.prerequisite.length > 0 ? ` (needs: ${node.prerequisite.join(', ')})` : ''\n            lines.push(`- [${node.confidence}/5] ${node.concept}${prereqs}`)\n        })\n        return lines.join('\\n')\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-framework-learning-plan-generator",
      children: "Example 3: Framework Learning Plan Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface FrameworkVersion {\n    version: number\n    name: string\n    day: number\n    features: string[]\n    description: string\n}\n\ninterface FrameworkLearningPlan {\n    framework: string\n    language: string\n    versions: FrameworkVersion[]\n}\n\nclass FrameworkLearningPlanGenerator {\n    generate(framework: string, language: string): FrameworkLearningPlan {\n        return {\n            framework,\n            language,\n            versions: [\n                {\n                    version: 1,\n                    name: 'Hello World',\n                    day: 1,\n                    features: ['Single route or component', 'Return static response'],\n                    description: 'Get the framework running. Minimal setup. Verify dev server works.'\n                },\n                {\n                    version: 2,\n                    name: 'CRUD API',\n                    day: 3,\n                    features: [\n                        'Full create/read/update/delete operations',\n                        `Database integration (SQLite for ${language})`,\n                        'Input validation',\n                        'Error handling for 404 and 400'\n                    ],\n                    description: 'Build a complete Todo API. Understand routing, database, and request lifecycle.'\n                },\n                {\n                    version: 3,\n                    name: 'Production Patterns',\n                    day: 7,\n                    features: [\n                        'Authentication (JWT)',\n                        'Middleware for logging and auth',\n                        'Unit and integration tests',\n                        'Environment configuration',\n                        'Rate limiting'\n                    ],\n                    description: 'Add production patterns. Deploy to a cloud platform for bonus points.'\n                }\n            ]\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The read-run-debug-modify cycle is the fundamental unit of learning from code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reverse-engineer codebases by tracing one request end-to-end and drawing the dependency graph"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read documentation strategically: README → Getting Started → Tests → API Reference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Learn any framework by building the same app 3 times (Hello World → CRUD → Production)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Study open-source code: read PRs, tests, issues, and the CHANGELOG"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Before writing any code in a new project, trace one existing feature end-to-end with a debugger"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read the test file before reading the implementation — tests document expected behavior"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spend 15 minutes max on documentation before writing code. Read → Code → Repeat"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build every new framework app 3 times: V1 (Hello World), V2 (CRUD), V3 (Production)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contribute one small fix (doc typo, small bug) to an open-source project you use"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mistake"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Fails"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fix"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Passive consumption (watching/reading without pausing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Information goes in one ear, out the other"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pause every 10 min. Summarize what you just learned aloud"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Starting a resource without questions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No purpose → no retention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write 5 questions before you start. Find their answers as you go"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Not reviewing after finishing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "You remember 30% after 24 hours without review"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spend 15 min after each session on active recall"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hoarding resources (50 bookmarks, 0 read)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collecting feels like learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read one resource completely before saving the next"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "1. What are the 4 steps of the read-run-debug-modify cycle?"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Read (15 min — entry point, README, structure), Run (5 min — verify it works), Debug (20 min — trace a request end-to-end), Modify (20 min — change something and observe the effect)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "2. Where should you find the entry point of a TypeScript project?"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Check package.json for the \"main\" or \"bin\" field. If the project uses a framework, check the router or index file (typically src/index.ts or src/app.ts)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "3. What's the first thing to read when approaching a new codebase?"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The README. It should tell you what the project does, how to run it, and the high-level architecture. If the README is unclear, check the tests — they document expected behavior."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "4. How many times should you build the same app to learn a framework?"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "3 times. V1 (Day 1): Hello World, get it running. V2 (Day 3): CRUD with database. V3 (Day 7): Production patterns (auth, testing, error handling). Each iteration adds one layer of complexity."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "5. What's the most reliable documentation when the official docs are unclear?"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The source code. Specifically the tests — they document expected behavior better than any README. Read the test file before reading the implementation to understand what the code should do."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SQ3R on any textbook:"
        }), " Pick a chapter from any textbook (NCERT, reference book, or course material). Apply SQ3R: Survey (5 min), Question (write 5 questions), Read (15 min), Recite (5 min summary from memory), Review (answer your questions). Write a 100-word reflection on what you retained"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Knowledge map:"
        }), " After studying any topic for 1 hour, draw a knowledge map showing: core concepts (center), prerequisites (left), applications (right), and connections between concepts. Identify 2 gaps you need to fill"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Question generation:"
        }), " Before starting any new resource (video, chapter, lecture), write 5-10 questions you want it to answer. After finishing, check how many you can answer. Track your question-answer ratio over 1 week"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Codebase Analyzer (TypeScript):"
        }), " Clone an open-source TypeScript project (< 10K files). Use the CodebaseAnalyzer to build a dependency graph. Identify the entry point"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Request Tracer (TypeScript):"
        }), " Use the RequestTracer pattern. Set breakpoints and trace one API endpoint or CLI command end-to-end. Document the call stack"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sq3r-method",
      children: "SQ3R Method"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Survey"
        }), " (5 min): Skim headings, summaries, diagrams"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Question"
        }), " (5 min): Write 5 questions you want answered"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read"
        }), " (20 min): Read actively, looking for answers to your questions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recite"
        }), " (5 min): Close material. Summarize aloud from memory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review"
        }), " (5 min): Check accuracy. Note gaps. Create 3 flashcards"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "knowledge-map-template",
      children: "Knowledge Map Template"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Main Topic\n├── Subtopic 1\n│   ├── Key Concept A (Prerequisite: ___)\n│   ├── Key Concept B\n│   └── Practice Path: ___\n├── Subtopic 2\n│   ├── Key Concept C\n│   └── Practice Path: ___\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "active-vs-passive-learning",
      children: "Active vs Passive Learning"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Passive"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Active"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Watching a video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pausing to summarize"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reading a chapter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Writing what you remember"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Listening to a lecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Answering your own questions"
          })]
        })]
      })]
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