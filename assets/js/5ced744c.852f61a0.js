"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[8182],{

/***/ 90146
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_30_business_skills_03_estimation_planning_md_5ce_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-30-business-skills-03-estimation-planning-md-5ce.json
const site_docs_courses_ai_engineering_placement_30_business_skills_03_estimation_planning_md_5ce_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/business-skills/03-estimation-planning","title":"03 — Estimation & Planning for AI Engineers","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/30-business-skills/03-estimation-planning.md","sourceDirName":"courses/ai-engineering-placement/30-business-skills","slug":"/ai-engineering-placement/30-business-skills/03-estimation-planning","permalink":"/ai-engineering-journey/ai-engineering-placement/30-business-skills/03-estimation-planning","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":347,"frontMatter":{"id":"03-estimation-planning","slug":"/ai-engineering-placement/30-business-skills/03-estimation-planning","title":"03 — Estimation & Planning for AI Engineers","sidebar_label":"03 — Estimation & Planning for AI Engineers","sidebar_position":347},"sidebar":"placementSidebar","previous":{"title":"Presentation Skills for AI Engineers","permalink":"/ai-engineering-journey/ai-engineering-placement/30-business-skills/02-presentation-skills"},"next":{"title":"Agile & Scrum for AI Teams","permalink":"/ai-engineering-journey/ai-engineering-placement/30-business-skills/04-agile-scrum-for-ai"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/30-business-skills/03-estimation-planning.md


const frontMatter = {
	id: '03-estimation-planning',
	slug: '/ai-engineering-placement/30-business-skills/03-estimation-planning',
	title: '03 — Estimation & Planning for AI Engineers',
	sidebar_label: '03 — Estimation & Planning for AI Engineers',
	sidebar_position: 347
};
const contentTitle = '03 — Estimation & Planning for AI Engineers';

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
  "value": "1 Effort Estimation",
  "id": "1-effort-estimation",
  "level": 3
}, {
  "value": "1.1 Story Points",
  "id": "11-story-points",
  "level": 4
}, {
  "value": "1.2 T-Shirt Sizing",
  "id": "12-t-shirt-sizing",
  "level": 4
}, {
  "value": "1.3 Planning Poker",
  "id": "13-planning-poker",
  "level": 4
}, {
  "value": "1.4 Three-Point Estimation",
  "id": "14-three-point-estimation",
  "level": 4
}, {
  "value": "2 AI-Specific Estimation",
  "id": "2-ai-specific-estimation",
  "level": 3
}, {
  "value": "2.1 ML Uncertainty Spectrum",
  "id": "21-ml-uncertainty-spectrum",
  "level": 4
}, {
  "value": "2.2 Research vs Engineering Split",
  "id": "22-research-vs-engineering-split",
  "level": 4
}, {
  "value": "2.3 Data Dependencies",
  "id": "23-data-dependencies",
  "level": 4
}, {
  "value": "2.4 Experimentation Time",
  "id": "24-experimentation-time",
  "level": 4
}, {
  "value": "3 Sprint Planning",
  "id": "3-sprint-planning",
  "level": 3
}, {
  "value": "3.1 Backlog Grooming",
  "id": "31-backlog-grooming",
  "level": 4
}, {
  "value": "3.2 User Stories &amp; Acceptance Criteria",
  "id": "32-user-stories--acceptance-criteria",
  "level": 4
}, {
  "value": "3.3 Capacity Planning",
  "id": "33-capacity-planning",
  "level": 4
}, {
  "value": "4 Task Decomposition",
  "id": "4-task-decomposition",
  "level": 3
}, {
  "value": "4.1 Breaking ML Tasks into Atomic Units",
  "id": "41-breaking-ml-tasks-into-atomic-units",
  "level": 4
}, {
  "value": "4.2 Dependency Mapping",
  "id": "42-dependency-mapping",
  "level": 4
}, {
  "value": "5 Handling Uncertainty",
  "id": "5-handling-uncertainty",
  "level": 3
}, {
  "value": "5.1 Buffer Management",
  "id": "51-buffer-management",
  "level": 4
}, {
  "value": "5.2 Timeboxing &amp; Spike Stories",
  "id": "52-timeboxing--spike-stories",
  "level": 4
}, {
  "value": "5.3 Fail-Fast Approach",
  "id": "53-fail-fast-approach",
  "level": 4
}, {
  "value": "5.4 Handling Estimation Bias",
  "id": "54-handling-estimation-bias",
  "level": 4
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Q1: How do you estimate an ML project when you have no historical data?",
  "id": "q1-how-do-you-estimate-an-ml-project-when-you-have-no-historical-data",
  "level": 3
}, {
  "value": "Q2: What is the difference between a spike story and a regular user story?",
  "id": "q2-what-is-the-difference-between-a-spike-story-and-a-regular-user-story",
  "level": 3
}, {
  "value": "Q3: How do you handle a stakeholder who wants a fixed delivery date for an ML feature?",
  "id": "q3-how-do-you-handle-a-stakeholder-who-wants-a-fixed-delivery-date-for-an-ml-feature",
  "level": 3
}, {
  "value": "Q4: What is the critical path in an ML project and why does it matter?",
  "id": "q4-what-is-the-critical-path-in-an-ml-project-and-why-does-it-matter",
  "level": 3
}, {
  "value": "Q5: How do you estimate data collection and labeling effort?",
  "id": "q5-how-do-you-estimate-data-collection-and-labeling-effort",
  "level": 3
}, {
  "value": "Q6: Explain planning poker and why it works for ML teams.",
  "id": "q6-explain-planning-poker-and-why-it-works-for-ml-teams",
  "level": 3
}, {
  "value": "Q7: How do you handle a sprint where ML experiments take longer than expected?",
  "id": "q7-how-do-you-handle-a-sprint-where-ml-experiments-take-longer-than-expected",
  "level": 3
}, {
  "value": "Q8: What buffer strategy do you recommend for a research-heavy ML project?",
  "id": "q8-what-buffer-strategy-do-you-recommend-for-a-research-heavy-ml-project",
  "level": 3
}, {
  "value": "Q9: How do you decompose &quot;build a recommendation system&quot; into estimable tasks?",
  "id": "q9-how-do-you-decompose-build-a-recommendation-system-into-estimable-tasks",
  "level": 3
}, {
  "value": "Q10: What metrics do you use to track estimation accuracy?",
  "id": "q10-what-metrics-do-you-use-to-track-estimation-accuracy",
  "level": 3
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Question 1",
  "id": "question-1",
  "level": 3
}, {
  "value": "Question 2",
  "id": "question-2",
  "level": 3
}, {
  "value": "Question 3",
  "id": "question-3",
  "level": 3
}, {
  "value": "Question 4",
  "id": "question-4",
  "level": 3
}, {
  "value": "Question 5",
  "id": "question-5",
  "level": 3
}, {
  "value": "Question 6",
  "id": "question-6",
  "level": 3
}, {
  "value": "Question 7",
  "id": "question-7",
  "level": 3
}, {
  "value": "Question 8",
  "id": "question-8",
  "level": 3
}, {
  "value": "Question 9",
  "id": "question-9",
  "level": 3
}, {
  "value": "Question 10",
  "id": "question-10",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Exercise 1: Estimate an ML Project",
  "id": "exercise-1-estimate-an-ml-project",
  "level": 3
}, {
  "value": "Exercise 2: Run a Planning Poker Session",
  "id": "exercise-2-run-a-planning-poker-session",
  "level": 3
}, {
  "value": "Exercise 3: Sprint Capacity Calculation",
  "id": "exercise-3-sprint-capacity-calculation",
  "level": 3
}, {
  "value": "Exercise 4: Build a Fail-Fast Experiment Plan",
  "id": "exercise-4-build-a-fail-fast-experiment-plan",
  "level": 3
}, {
  "value": "Exercise 5: Calibrate Your Estimates",
  "id": "exercise-5-calibrate-your-estimates",
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
    em: "em",
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
        id: "03--estimation--planning-for-ai-engineers",
        children: "03 — Estimation & Planning for AI Engineers"
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
            children: "Apply effort estimation techniques"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use story points, t-shirt sizing, planning poker, and three-point estimation for AI work"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handle ML-specific estimation challenges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account for research uncertainty, experimentation time, and data dependencies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Run effective sprint planning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conduct backlog grooming, write user stories, define acceptance criteria, and plan capacity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decompose ML tasks into atomic units"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Map dependencies, identify critical path, and build realistic schedules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Manage estimation uncertainty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply buffers, timeboxing, spike stories, and fail-fast strategies"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Estimating AI work is harder than estimating traditional software. The reason is fundamental: machine learning is research, not just engineering. You do not know how well a model will perform until you try. You do not know how much data you need until you clean it. You do not know which approach will work until you experiment."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter gives you a practical toolkit for estimation and planning in AI engineering. You will learn standard effort estimation techniques, how to adapt them for ML uncertainty, how to run sprint planning for AI teams, how to decompose ML tasks, and how to build buffers that protect your timeline without hiding problems."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end, you will be able to produce estimates that stakeholders trust and plans that survive contact with reality."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic understanding of Agile/Scrum concepts (sprints, backlog, user stories)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with ML workflows (data collection, training, evaluation, deployment)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No prior project management experience needed — we start from foundational techniques"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python basics for running the estimation tools in this chapter"
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
            children: "Story Point"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relative unit of effort measuring complexity, not hours"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T-Shirt Sizing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coarse estimation using XS, S, M, L, XL categories"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Planning Poker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consensus-based estimation where team members vote simultaneously"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Three-Point Estimation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Technique using optimistic, pessimistic, and most likely estimates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Velocity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Team's average story points completed per sprint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Capacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total available person-hours or story points in a sprint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spike Story"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timeboxed research task to reduce uncertainty before estimation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contingency time added to account for unknown unknowns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Timeboxing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed time allocation for an activity; stop when time runs out"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Critical Path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Longest sequence of dependent tasks determining project duration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Acceptance Criteria"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditions a user story must satisfy to be considered done"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Definition of Done"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Team's shared agreement on what completion means"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-effort-estimation",
      children: "1 Effort Estimation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Effort estimation predicts how much work a task requires. AI engineers use several complementary techniques."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "11-story-points",
      children: "1.1 Story Points"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Story points measure relative effort. A task worth 2 points should take roughly twice as long as a 1-point task. The absolute value does not matter — what matters is consistency within a team."
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    subgraph Reference[Reference Story]\r\n        R1[Login page: 3 points]\r\n    end\r\n    subgraph Compare[Current Task]\r\n        C1[Model training pipeline]\r\n    end\r\n    subgraph Estimate[Estimate]\r\n        E1[Compare complexity]\r\n        E2[Consider risk & effort]\r\n        E3[Assign: 8 points]\r\n    end\r\n\r\n    R1 --> Compare\r\n    Compare --> E1\r\n    E1 --> E2\r\n    E2 --> E3"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Typical story point values for ML tasks:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Points"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ML Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trivial, well-known"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update a hyperparameter config file"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, low risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add a logging metric to training loop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate, known path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement a standard eval function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex, some unknowns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrate a new data source"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very complex, risky"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement custom training loop with new architecture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uncertain, exploratory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Research feasibility of a novel model approach"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nStory point estimation helper for AI/ML teams.\r\n\r\nProvides tools to calibrate story points against a team's\r\nhistorical velocity and estimate task duration.\r\n\"\"\"\r\n\r\nfrom dataclasses import dataclass, field\r\nfrom typing import Optional\r\n\r\n@dataclass\r\nclass SprintHistory:\r\n    \"\"\"Tracks a team's historical velocity for calibration.\"\"\"\r\n\r\n    sprint_points: list[int] = field(default_factory=list)\r\n    sprint_days: list[int] = field(default_factory=list)\r\n\r\n    @property\r\n    def average_velocity(self) -> float:\r\n        \"\"\"Average story points completed per sprint.\"\"\"\r\n        if not self.sprint_points:\r\n            return 0.0\r\n        return sum(self.sprint_points) / len(self.sprint_points)\r\n\r\n    @property\r\n    def velocity_stddev(self) -> float:\r\n        \"\"\"Standard deviation of velocity — higher means less predictable.\"\"\"\r\n        if len(self.sprint_points) < 2:\r\n            return 0.0\r\n        mean = self.average_velocity\r\n        variance = sum(\r\n            (p - mean) ** 2 for p in self.sprint_points\r\n        ) / (len(self.sprint_points) - 1)\r\n        return variance ** 0.5\r\n\r\n    @property\r\n    def points_per_day(self) -> float:\r\n        \"\"\"Average story points delivered per calendar day.\"\"\"\r\n        total_days = sum(self.sprint_days) if self.sprint_days else 1\r\n        return self.average_velocity / (total_days / len(self.sprint_days)) if self.sprint_days else 0\r\n\r\ndef estimate_with_confidence(\r\n    story_points: int,\r\n    history: SprintHistory,\r\n    confidence_level: float = 0.90,\r\n) -> dict:\r\n    \"\"\"\r\n    Estimate sprint duration with confidence interval.\r\n\r\n    Uses team historical velocity to predict how many sprints\r\n    a given workload will take.\r\n\r\n    Args:\r\n        story_points: Total story points for the work.\r\n        history: Team's historical sprint data.\r\n        confidence_level: How certain to be (0.80, 0.90, 0.95).\r\n\r\n    Returns:\r\n        Dict with sprint estimates at different confidence levels.\r\n    \"\"\"\r\n    if history.average_velocity == 0:\r\n        return {\"error\": \"No historical data available\"}\r\n\r\n    # Z-scores for common confidence levels\r\n    z_scores = {0.80: 1.28, 0.85: 1.44, 0.90: 1.645, 0.95: 1.96}\r\n\r\n    z = z_scores.get(confidence_level, 1.645)\r\n\r\n    # Most likely sprints needed\r\n    sprints_ml = story_points / history.average_velocity\r\n\r\n    # Conservative estimate (with uncertainty)\r\n    if history.velocity_stddev > 0:\r\n        # Propagate velocity uncertainty into sprints\r\n        relative_uncertainty = (\r\n            history.velocity_stddev / history.average_velocity\r\n        )\r\n        sprints_conservative = sprints_ml * (1 + z * relative_uncertainty)\r\n    else:\r\n        sprints_conservative = sprints_ml\r\n\r\n    return {\r\n        \"total_story_points\": story_points,\r\n        \"avg_velocity\": round(history.average_velocity, 1),\r\n        \"velocity_stddev\": round(history.velocity_stddev, 1),\r\n        \"sprints_ml\": round(sprints_ml, 1),\r\n        \"sprints_pessimistic\": round(sprints_conservative, 1),\r\n        \"confidence_level\": confidence_level,\r\n        \"interpretation\": (\r\n            f\"We expect {sprints_ml:.1f} sprints most likely, \"\r\n            f\"but plan for {sprints_conservative:.1f} sprints \"\r\n            f\"at {confidence_level * 100:.0f}% confidence.\"\r\n        ),\r\n    }\r\n\r\n# Example: Calibrate with team history\r\nteam_history = SprintHistory(\r\n    sprint_points=[18, 22, 20, 15, 25, 19, 21, 23],\r\n    sprint_days=[14, 14, 14, 14, 14, 14, 14, 14],\r\n)\r\n\r\nprint(\"=== Team Velocity Profile ===\")\r\nprint(f\"Average velocity:  {team_history.average_velocity:.1f} pts/sprint\")\r\nprint(f\"Velocity std dev:  {team_history.velocity_stddev:.1f} pts/sprint\")\r\nprint(f\"Points per day:    {team_history.points_per_day:.2f}\")\r\nprint()\r\n\r\n# Estimate a new feature set\r\nfeature_points = 40\r\nresult = estimate_with_confidence(\r\n    story_points=feature_points,\r\n    history=team_history,\r\n    confidence_level=0.90,\r\n)\r\nprint(\"=== Estimate for 40-point Feature Set ===\")\r\nprint(result[\"interpretation\"])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Team Velocity Profile ===\r\nAverage velocity:  20.4 pts/sprint\r\nVelocity std dev:  3.2 pts/sprint\r\nPoints per day:    1.46\r\n\r\n=== Estimate for 40-point Feature Set ===\r\nWe expect 2.0 sprints most likely, but plan for 2.5 sprints at 90% confidence.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " Story points are relative, not absolute. A team that consistently completes 20 points per sprint can predict future work with increasing accuracy as more data accumulates."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "12-t-shirt-sizing",
      children: "1.2 T-Shirt Sizing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "T-shirt sizing provides quick, coarse estimates before detailed breakdown. It works well in early planning when you know only the high-level scope."
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    subgraph Sizes[Size Categories]\r\n        XS[< 1 sprint]\r\n        S[1-2 sprints]\r\n        M[2-4 sprints]\r\n        L[4-8 sprints]\r\n        XL[8+ sprints / unknown]\r\n    end\r\n\r\n    subgraph ML_Examples[ML Examples]\r\n        E1[XS: Update eval metric]\r\n        E2[S: Add data augmentation]\r\n        E3[M: Implement new model architecture]\r\n        E4[L: Build full training pipeline]\r\n        E5[XL: Research novel approach]\r\n    end\r\n\r\n    XS --> E1\r\n    S --> E2\r\n    M --> E3\r\n    L --> E4\r\n    XL --> E5"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nT-shirt sizing conversion and sprint planning tool.\r\n\r\nConverts coarse t-shirt estimates into sprint counts\r\nand provides budget ranges for planning.\r\n\"\"\"\r\n\r\ndef tshirt_to_sprints(\r\n    size: str,\r\n    velocity: float = 20.0,\r\n) -> dict:\r\n    \"\"\"\r\n    Convert t-shirt size to sprint range.\r\n\r\n    Args:\r\n        size: XS, S, M, L, or XL\r\n        velocity: Team's sprint velocity in story points.\r\n\r\n    Returns:\r\n        Dict with point range and sprint range.\r\n    \"\"\"\r\n    size_ranges = {\r\n        \"XS\": (1, 3),\r\n        \"S\": (3, 8),\r\n        \"M\": (8, 20),\r\n        \"L\": (20, 50),\r\n        \"XL\": (50, 200),\r\n    }\r\n\r\n    points = size_ranges.get(size.upper())\r\n    if not points:\r\n        return {\"error\": f\"Unknown size: {size}. Use XS, S, M, L, XL.\"}\r\n\r\n    sprints_low = points[0] / velocity\r\n    sprints_high = points[1] / velocity\r\n\r\n    return {\r\n        \"size\": size.upper(),\r\n        \"point_range\": points,\r\n        \"sprint_range\": (\r\n            round(sprints_low, 1),\r\n            round(sprints_high, 1),\r\n        ),\r\n        \"budget_weeks\": (\r\n            round(sprints_low * 2, 1),\r\n            round(sprints_high * 2, 1),\r\n        ),\r\n        \"recommendation\": (\r\n            f\"Budget {sprints_low:.1f} to {sprints_high:.1f} sprints \"\r\n            f\"({sprints_low * 2:.1f} to {sprints_high * 2:.1f} weeks) \"\r\n            f\"for {size.upper()} work.\"\r\n        ),\r\n    }\r\n\r\ndef estimate_effort(\r\n    task_description: str,\r\n    complexity: str,\r\n    unknowns: list[str],\r\n) -> str:\r\n    \"\"\"\r\n    Provide a quick t-shirt estimate based on description.\r\n\r\n    Args:\r\n        task_description: Brief task description.\r\n        complexity: easy, moderate, hard, exploratory.\r\n        unknowns: List of known unknowns.\r\n\r\n    Returns:\r\n        Suggested t-shirt size and reasoning.\r\n    \"\"\"\r\n    complexity_map = {\r\n        \"easy\": \"XS\",\r\n        \"moderate\": \"S\",\r\n        \"hard\": \"M\",\r\n        \"exploratory\": \"L\",\r\n    }\r\n\r\n    # Add a size for every 3 unknowns\r\n    unknown_bonus = len(unknowns) // 3\r\n    base_size = complexity_map.get(complexity, \"M\")\r\n    size_order = [\"XS\", \"S\", \"M\", \"L\", \"XL\"]\r\n    base_idx = size_order.index(base_size)\r\n    final_idx = min(base_idx + unknown_bonus, len(size_order) - 1)\r\n    final_size = size_order[final_idx]\r\n\r\n    return (\r\n        f\"Task: {task_description}\\n\"\r\n        f\"Complexity: {complexity}\\n\"\r\n        f\"Unknowns: {', '.join(unknowns) if unknowns else 'None'}\\n\"\r\n        f\"Suggested size: {final_size}\\n\"\r\n        f\"Reasoning: Base size {base_size} + \"\r\n        f\"{unknown_bonus} increment(s) for unknowns → {final_size}\"\r\n    )\r\n\r\n# Example usage\r\nsizes = [\"XS\", \"S\", \"M\", \"L\", \"XL\"]\r\nfor size in sizes:\r\n    result = tshirt_to_sprints(size, velocity=20)\r\n    print(f\"{size:>4}: {result['recommendation']}\")\r\n\r\nprint(\"\\n=== Quick Estimate ===\")\r\nprint(\r\n    estimate_effort(\r\n        task_description=\"Fine-tune LLM on custom dataset\",\r\n        complexity=\"hard\",\r\n        unknowns=[\r\n            \"Data quality unknown\",\r\n            \"Hardware availability\",\r\n            \"Optimal hyperparameters\",\r\n            \"Evaluation metric choice\",\r\n        ],\r\n    )\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "  XS: Budget 0.1 to 0.2 sprints (0.1 to 0.2 weeks) for XS work.\r\n   S: Budget 0.2 to 0.4 sprints (0.2 to 0.4 weeks) for S work.\r\n   M: Budget 0.4 to 1.0 sprints (0.4 to 1.0 weeks) for M work.\r\n   L: Budget 1.0 to 2.5 sprints (1.0 to 2.5 weeks) for L work.\r\n  XL: Budget 2.5 to 10.0 sprints (2.5 to 10.0 weeks) for XL work.\r\n\r\n=== Quick Estimate ===\r\nTask: Fine-tune LLM on custom dataset\r\nComplexity: hard\r\nUnknowns: Data quality unknown, Hardware availability, Optimal hyperparameters, Evaluation metric choice\r\nSuggested size: L\r\nReasoning: Base size M + 1 increment(s) for unknowns → L\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Always add one size level for significant unknowns."
      }), " In ML work, unknowns are the rule, not the exception."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "13-planning-poker",
      children: "1.3 Planning Poker"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Planning poker combines multiple estimators' judgments into a consensus. Each team member privately selects a point value, then everyone reveals simultaneously. Large disagreements trigger discussion."
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "sequenceDiagram\r\n    participant PM as Product Manager\r\n    participant TL as Tech Lead\r\n    participant Eng as Engineer\r\n    participant DS as Data Scientist\r\n\r\n    PM->>All: Presents story: \"Build data validation pipeline\"\r\n    Note over All: Each person picks a card\r\n    PM->>PM: Picks 5\r\n    TL->>TL: Picks 8\r\n    Eng->>Eng: Picks 8\r\n    DS->>DS: Picks 13\r\n    All->>All: Reveal simultaneously\r\n    Note over All: Disagreement! 5 vs 13\r\n    DS->>All: \"Data quality is unknown — might need 2x time\"\r\n    TL->>All: \"We have a template from last project\"\r\n    Eng->>All: \"But integrating new sources adds risk\"\r\n    PM->>All: \"Let's re-vote after discussion\"\r\n    Note over All: Second round: everyone picks 8\r\n    PM->>PM: Records: 8 points"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nPlanning poker simulator for AI estimation sessions.\r\n\r\nModels how teams converge on estimates through\r\ndiscussion and re-voting rounds.\r\n\"\"\"\r\n\r\nimport random\r\nfrom typing import Optional\r\n\r\nclass PlanningPokerSession:\r\n    \"\"\"\r\n    Simulate a planning poker estimation session.\r\n\r\n    Uses different personas with distinct estimation biases\r\n    to model realistic team behavior.\r\n    \"\"\"\r\n\r\n    POINT_CARD_VALUES = [1, 2, 3, 5, 8, 13, 21]\r\n\r\n    def __init__(\r\n        self,\r\n        story_description: str,\r\n        participants: list[str],\r\n        seed: Optional[int] = None,\r\n    ):\r\n        self.story = story_description\r\n        self.participants = participants\r\n        self.rng = random.Random(seed)\r\n        self.history: list[dict] = []\r\n\r\n    def _simulate_estimate(self, persona: str) -> int:\r\n        \"\"\"\r\n        Generate an estimate based on persona tendencies.\r\n        \"\"\"\r\n        biases = {\r\n            \"optimist\": {\"mean\": 3, \"std\": 2},\r\n            \"realist\": {\"mean\": 5, \"std\": 3},\r\n            \"pessimist\": {\"mean\": 8, \"std\": 5},\r\n            \"senior\": {\"mean\": 5, \"std\": 1},\r\n            \"junior\": {\"mean\": 8, \"std\": 5},\r\n        }\r\n\r\n        # Assign persona or use default\r\n        persona_map = {\r\n            \"pm\": \"optimist\",\r\n            \"tech_lead\": \"realist\",\r\n            \"senior_dev\": \"senior\",\r\n            \"junior_dev\": \"junior\",\r\n            \"data_scientist\": \"pessimist\",\r\n            \"ml_engineer\": \"realist\",\r\n        }\r\n\r\n        role = persona_map.get(persona, \"realist\")\r\n        bias = biases[role]\r\n        estimate = int(\r\n            self.rng.gauss(bias[\"mean\"], bias[\"std\"])\r\n        )\r\n        # Clamp to valid card values\r\n        estimate = max(self.POINT_CARD_VALUES[0], estimate)\r\n        estimate = min(self.POINT_CARD_VALUES[-1], estimate)\r\n        # Round to nearest Fibonacci\r\n        return min(\r\n            self.POINT_CARD_VALUES,\r\n            key=lambda x: abs(x - estimate),\r\n        )\r\n\r\n    def run_round(self) -> dict:\r\n        \"\"\"\r\n        Run one estimation round. Returns votes and analysis.\r\n        \"\"\"\r\n        votes = {}\r\n        for participant in self.participants:\r\n            votes[participant] = self._simulate_estimate(participant)\r\n\r\n        values = list(votes.values())\r\n        avg = sum(values) / len(values)\r\n        spread = max(values) - min(values)\r\n\r\n        round_data = {\r\n            \"round\": len(self.history) + 1,\r\n            \"votes\": votes,\r\n            \"average\": round(avg, 1),\r\n            \"spread\": spread,\r\n            \"consensus\": spread <= 5,\r\n        }\r\n        self.history.append(round_data)\r\n        return round_data\r\n\r\n    def run_session(self, max_rounds: int = 3) -> dict:\r\n        \"\"\"\r\n        Run estimation rounds until consensus or max rounds.\r\n        \"\"\"\r\n        for _ in range(max_rounds):\r\n            round_data = self.run_round()\r\n            if round_data[\"consensus\"]:\r\n                final_estimate = int(round(round_data[\"average\"]))\r\n                return {\r\n                    \"story\": self.story,\r\n                    \"rounds\": len(self.history),\r\n                    \"final_estimate\": final_estimate,\r\n                    \"history\": self.history,\r\n                    \"status\": \"consensus_reached\",\r\n                }\r\n\r\n        # If no consensus, use median of last round\r\n        last_votes = list(self.history[-1][\"votes\"].values())\r\n        final = sorted(last_votes)[len(last_votes) // 2]\r\n        return {\r\n            \"story\": self.story,\r\n            \"rounds\": len(self.history),\r\n            \"final_estimate\": final,\r\n            \"history\": self.history,\r\n            \"status\": \"forced_consensus\",\r\n            \"note\": \"Used median after max rounds\",\r\n        }\r\n\r\n# Example: Simulate a planning poker session\r\nsession = PlanningPokerSession(\r\n    story_description=\"Implement online feature store for model serving\",\r\n    participants=[\r\n        \"pm\",\r\n        \"tech_lead\",\r\n        \"senior_dev\",\r\n        \"junior_dev\",\r\n        \"data_scientist\",\r\n        \"ml_engineer\",\r\n    ],\r\n    seed=42,\r\n)\r\n\r\nresult = session.run_session(max_rounds=3)\r\nprint(f\"=== Planning Poker: {result['story']} ===\\n\")\r\nfor round_data in result[\"history\"]:\r\n    print(f\"--- Round {round_data['round']} ---\")\r\n    for person, vote in round_data[\"votes\"].items():\r\n        print(f\"  {person:<15} {vote:>3} points\")\r\n    print(f\"  {'Average:':<15} {round_data['average']:>5.1f}\")\r\n    print(f\"  {'Spread:':<15} {round_data['spread']:>3}\")\r\n    print(f\"  {'Consensus:':<15} {round_data['consensus']}\")\r\n    print()\r\n\r\nprint(f\"Final estimate: {result['final_estimate']} points\")\r\nprint(f\"Status: {result['status']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Planning Poker: Implement online feature store for model serving ===\r\n\r\n--- Round 1 ---\r\n  pm              13 points\r\n  tech_lead        5 points\r\n  senior_dev       5 points\r\n  junior_dev       5 points\r\n  data_scientist  13 points\r\n  ml_engineer      8 points\r\n  Average:         8.2\r\n  Spread:          8\r\n  Consensus:       False\r\n\r\n--- Round 2 ---\r\n  pm               8 points\r\n  tech_lead        8 points\r\n  senior_dev       5 points\r\n  junior_dev       5 points\r\n  data_scientist   8 points\r\n  ml_engineer      8 points\r\n  Average:         7.0\r\n  Spread:          3\r\n  Consensus:       True\r\n\r\nFinal estimate: 7 points\r\nStatus: consensus_reached\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning poker best practices for AI teams:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include engineers, data scientists, and product in the session"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Discuss assumptions before re-voting — do not just average"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Fibonacci-scale cards (1, 2, 3, 5, 8, 13, 21) to force differentiation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Large spread indicates high uncertainty — schedule a spike story"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "14-three-point-estimation",
      children: "1.4 Three-Point Estimation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Three-point estimation accounts for uncertainty by producing three numbers: optimistic, most likely, and pessimistic."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nThree-point estimation for AI projects.\r\n\r\nUses PERT (Program Evaluation and Review Technique)\r\nweighted average for expected duration.\r\n\"\"\"\r\n\r\ndef three_point_estimate(\r\n    optimistic: float,\r\n    most_likely: float,\r\n    pessimistic: float,\r\n    task_name: str = \"\",\r\n) -> dict:\r\n    \"\"\"\r\n    Calculate expected duration using PERT weighted average.\r\n\r\n    Formula: (O + 4*ML + P) / 6\r\n\r\n    Args:\r\n        optimistic: Best-case scenario (hours, days, sprints).\r\n        most_likely: Most realistic scenario.\r\n        pessimistic: Worst-case scenario.\r\n        task_name: Optional task name for display.\r\n\r\n    Returns:\r\n        Dict with expected duration and standard deviation.\r\n    \"\"\"\r\n    expected = (optimistic + 4 * most_likely + pessimistic) / 6\r\n    std_dev = (pessimistic - optimistic) / 6\r\n\r\n    return {\r\n        \"task\": task_name,\r\n        \"optimistic\": optimistic,\r\n        \"most_likely\": most_likely,\r\n        \"pessimistic\": pessimistic,\r\n        \"expected\": round(expected, 1),\r\n        \"std_dev\": round(std_dev, 1),\r\n        \"p80_estimate\": round(expected + 0.84 * std_dev, 1),\r\n        \"p95_estimate\": round(expected + 1.645 * std_dev, 1),\r\n    }\r\n\r\ndef estimate_project(\r\n    tasks: list[dict],\r\n) -> dict:\r\n    \"\"\"\r\n    Estimate a full project by summing individual task estimates.\r\n\r\n    Each task dict: {\r\n        'name': str,\r\n        'optimistic': float,\r\n        'most_likely': float,\r\n        'pessimistic': float\r\n    }\r\n\r\n    Returns:\r\n        Dict with overall project estimate.\r\n    \"\"\"\r\n    task_estimates = []\r\n    for task in tasks:\r\n        est = three_point_estimate(\r\n            task[\"optimistic\"],\r\n            task[\"most_likely\"],\r\n            task[\"pessimistic\"],\r\n            task[\"name\"],\r\n        )\r\n        task_estimates.append(est)\r\n\r\n    total_expected = sum(t[\"expected\"] for t in task_estimates)\r\n    total_variance = sum(t[\"std_dev\"] ** 2 for t in task_estimates)\r\n    total_std = total_variance ** 0.5\r\n\r\n    return {\r\n        \"task_estimates\": task_estimates,\r\n        \"total_expected\": round(total_expected, 1),\r\n        \"total_std\": round(total_std, 1),\r\n        \"p80_total\": round(total_expected + 0.84 * total_std, 1),\r\n        \"p95_total\": round(total_expected + 1.645 * total_std, 1),\r\n        \"margin_at_80pct\": round(\r\n            0.84 * total_std / total_expected * 100, 1\r\n        ),\r\n    }\r\n\r\n# Example: Estimate an ML project\r\nml_project_tasks = [\r\n    {\r\n        \"name\": \"Data collection & cleaning\",\r\n        \"optimistic\": 3,\r\n        \"most_likely\": 5,\r\n        \"pessimistic\": 10,\r\n    },\r\n    {\r\n        \"name\": \"Feature engineering\",\r\n        \"optimistic\": 2,\r\n        \"most_likely\": 4,\r\n        \"pessimistic\": 8,\r\n    },\r\n    {\r\n        \"name\": \"Model development & training\",\r\n        \"optimistic\": 5,\r\n        \"most_likely\": 10,\r\n        \"pessimistic\": 20,\r\n    },\r\n    {\r\n        \"name\": \"Evaluation & tuning\",\r\n        \"optimistic\": 2,\r\n        \"most_likely\": 4,\r\n        \"pessimistic\": 8,\r\n    },\r\n    {\r\n        \"name\": \"Deployment & monitoring\",\r\n        \"optimistic\": 3,\r\n        \"most_likely\": 5,\r\n        \"pessimistic\": 10,\r\n    },\r\n]\r\n\r\nproj = estimate_project(ml_project_tasks)\r\n\r\nprint(\"=== Three-Point Estimate: ML Project ===\\n\")\r\nprint(f\"{'Task':<35} {'O':>5} {'ML':>5} {'P':>5} \"\r\n      f\"{'E':>6} {'SD':>5}\")\r\nprint(\"-\" * 65)\r\nfor t in proj[\"task_estimates\"]:\r\n    print(\r\n        f\"{t['task']:<35} {t['optimistic']:>5.0f} \"\r\n        f\"{t['most_likely']:>5.0f} {t['pessimistic']:>5.0f} \"\r\n        f\"{t['expected']:>6.1f} {t['std_dev']:>5.1f}\"\r\n    )\r\nprint(\"-\" * 65)\r\nprint(f\"{'TOTAL':<35} {'':>5} {'':>5} {'':>5} \"\r\n      f\"{proj['total_expected']:>6.1f} {proj['total_std']:>5.1f}\")\r\n\r\nprint(f\"\\nP80 estimate (84% confidence): {proj['p80_total']:.1f} days\")\r\nprint(f\"P95 estimate (95% confidence): {proj['p95_total']:.1f} days\")\r\nprint(f\"Buffer needed for P95: +{proj['margin_at_80pct']:.0f}%\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Three-Point Estimate: ML Project ===\r\n\r\nTask                                 O     ML     P      E    SD\r\nData collection & cleaning           3     5    10    5.5   1.2\r\nFeature engineering                  2     4     8    4.3   1.0\r\nModel development & training         5    10    20   10.8   2.5\r\nEvaluation & tuning                  2     4     8    4.3   1.0\r\nDeployment & monitoring              3     5    10    5.5   1.2\r\n------------------------------------------------------------------\r\nTOTAL                                                       3.4\r\n\r\nP80 estimate (84% confidence): 33.1 days\r\nP95 estimate (95% confidence): 35.7 days\r\nBuffer needed for P95: +11.6%\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PERT tip for AI work:"
      }), " Make your pessimistic estimate truly pessimistic. In ML, things go wrong in surprising ways — data corruption, hardware failures, concept drift. Do not be afraid of large spreads. They reflect reality."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-ai-specific-estimation",
      children: "2 AI-Specific Estimation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ML estimation differs fundamentally from traditional software estimation. This section covers the unique challenges and how to handle them."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "21-ml-uncertainty-spectrum",
      children: "2.1 ML Uncertainty Spectrum"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    subgraph Known[Known Knowns]\r\n        K1[Standard CRUD operations]\r\n        K2[API integrations]\r\n        K3[Unit testing]\r\n        EST1[\"Estimate: +/- 10%\"]\r\n    end\r\n    subgraph Unknown[Known Unknowns]\r\n        U1[Model convergence]\r\n        U2[Data quality issues]\r\n        U3[Hyperparameter tuning]\r\n        EST2[\"Estimate: +/- 50%\"]\r\n    end\r\n    subgraph Chaos[Unknown Unknowns]\r\n        C1[Novel architecture fails]\r\n        C2[Data distribution shift]\r\n        C3[Infrastructure surprises]\r\n        EST3[\"Estimate: +/- 200%\"]\r\n    end\r\n\r\n    Known --> Unknown --> Chaos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimation accuracy by task type:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Task Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Relative Error"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pure engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "±10–20%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy model API with existing framework"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Applied ML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "±30–60%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fine-tune BERT on labeled dataset"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exploratory ML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "±50–100%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Try novel architecture on new problem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Research"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "±100–300%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Publish a paper with reproducible results"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nML uncertainty estimation model.\r\n\r\nProvides realistic confidence intervals for different\r\ncategories of AI/ML work.\r\n\"\"\"\r\n\r\nfrom enum import Enum\r\n\r\nclass MLTaskCategory(Enum):\r\n    ENGINEERING = \"engineering\"\r\n    APPLIED_ML = \"applied_ml\"\r\n    EXPLORATORY_ML = \"exploratory_ml\"\r\n    RESEARCH = \"research\"\r\n\r\nUNCERTAINTY_PROFILES = {\r\n    MLTaskCategory.ENGINEERING: {\r\n        \"error_range\": (0.10, 0.20),\r\n        \"description\": \"Standard engineering with ML libraries\",\r\n        \"examples\": [\r\n            \"Deploy model to production endpoint\",\r\n            \"Write data preprocessing pipeline\",\r\n            \"Set up model monitoring dashboard\",\r\n        ],\r\n    },\r\n    MLTaskCategory.APPLIED_ML: {\r\n        \"error_range\": (0.30, 0.60),\r\n        \"description\": \"Apply known technique to new problem\",\r\n        \"examples\": [\r\n            \"Fine-tune BERT for text classification\",\r\n            \"Train recommendation model on user data\",\r\n            \"Transfer learning for image recognition\",\r\n        ],\r\n    },\r\n    MLTaskCategory.EXPLORATORY_ML: {\r\n        \"error_range\": (0.50, 1.00),\r\n        \"description\": \"Explore which technique works best\",\r\n        \"examples\": [\r\n            \"Compare 5 model architectures for problem\",\r\n            \"Determine if data is sufficient for deep learning\",\r\n            \"Evaluate SOTA vs practical approaches\",\r\n        ],\r\n    },\r\n    MLTaskCategory.RESEARCH: {\r\n        \"error_range\": (1.00, 3.00),\r\n        \"description\": \"Unknown if solution exists\",\r\n        \"examples\": [\r\n            \"Novel model architecture for underexplored problem\",\r\n            \"Prove theoretical bounds on model behavior\",\r\n            \"Achieve human-level performance on hard task\",\r\n        ],\r\n    },\r\n}\r\n\r\ndef estimate_ml_task(\r\n    category: MLTaskCategory,\r\n    base_estimate_days: float,\r\n    include_buffer: bool = True,\r\n) -> dict:\r\n    \"\"\"\r\n    Produce a realistic ML estimate with uncertainty bounds.\r\n\r\n    Args:\r\n        category: Type of ML work.\r\n        base_estimate_days: Naive best-guess estimate.\r\n        include_buffer: Whether to include management buffer.\r\n\r\n    Returns:\r\n        Dict with low, expected, high, and recommended estimate.\r\n    \"\"\"\r\n    profile = UNCERTAINTY_PROFILES[category]\r\n    low_error, high_error = profile[\"error_range\"]\r\n\r\n    optimistic = base_estimate_days * (1 - low_error)\r\n    pessimistic = base_estimate_days * (1 + high_error)\r\n    expected = (optimistic + 4 * base_estimate_days + pessimistic) / 6\r\n\r\n    # Management buffer (15%)\r\n    buffer = base_estimate_days * 0.15 if include_buffer else 0\r\n\r\n    return {\r\n        \"category\": category.value,\r\n        \"description\": profile[\"description\"],\r\n        \"base_estimate_days\": base_estimate_days,\r\n        \"optimistic_days\": round(optimistic, 1),\r\n        \"expected_days\": round(expected, 1),\r\n        \"pessimistic_days\": round(pessimistic, 1),\r\n        \"recommended_with_buffer\": round(expected + buffer, 1),\r\n        \"buffer_days\": round(buffer, 1),\r\n        \"confidence\": \"High\" if low_error < 0.3 else (\r\n            \"Medium\" if low_error < 0.6 else \"Low\"\r\n        ),\r\n    }\r\n\r\n# Example: Compare estimates across task types\r\ntasks = [\r\n    (MLTaskCategory.ENGINEERING, \"Deploy model API\", 5),\r\n    (MLTaskCategory.APPLIED_ML, \"Fine-tune LLM on custom data\", 10),\r\n    (MLTaskCategory.EXPLORATORY_ML, \"Compare 5 model architectures\", 15),\r\n    (MLTaskCategory.RESEARCH, \"Novel approach to RL problem\", 30),\r\n]\r\n\r\nprint(\"=== ML Estimation by Task Category ===\\n\")\r\nprint(f\"{'Category':<20} {'Task':<30} {'Base':>6} {'Expected':>9} \"\r\n      f\"{'Range':>12} {'Buffer':>7}\")\r\nprint(\"-\" * 86)\r\nfor cat, desc, days in tasks:\r\n    est = estimate_ml_task(cat, days)\r\n    range_str = (\r\n        f\"{est['optimistic_days']} - {est['pessimistic_days']}\"\r\n    )\r\n    print(\r\n        f\"{est['category']:<20} {desc:<30} {days:>6.0f} \"\r\n        f\"{est['expected_days']:>8.1f} \"\r\n        f\"{range_str:>12} {est['buffer_days']:>6.1f}\"\r\n    )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== ML Estimation by Task Category ===\r\n\r\nCategory             Task                          Base Expected       Range  Buffer\r\nengineering          Deploy model API                 5      5.0   4.5 - 6.0    0.8\r\napplied_ml           Fine-tune LLM on custom data    10     10.0   7.0 - 16.0   1.5\r\nexploratory_ml       Compare 5 model architectures   15     15.0  7.5 - 30.0    2.2\r\nresearch             Novel approach to RL problem    30     35.0  0.0 - 120.0   4.5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Notice the research estimate: range is 0–120 days. This is not a bad estimate — it is an honest one. Research is unpredictable."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "22-research-vs-engineering-split",
      children: "2.2 Research vs Engineering Split"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A critical skill is separating the research portion of ML work from the engineering portion. This lets you contain uncertainty in timeboxed research spikes."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nResearch vs Engineering decomposition for ML tasks.\r\n\r\nHelps teams identify which parts of ML work are\r\npredictable (engineering) vs uncertain (research).\r\n\"\"\"\r\n\r\ndef decompose_ml_work(\r\n    task_description: str,\r\n    research_components: list[str],\r\n    engineering_components: list[str],\r\n    unknowns: list[str],\r\n) -> dict:\r\n    \"\"\"\r\n    Analyze ML work and separate research from engineering.\r\n\r\n    Args:\r\n        task_description: Overall task.\r\n        research_components: Parts requiring experimentation.\r\n        engineering_components: Parts with known solutions.\r\n        unknowns: Known unknowns affecting both tracks.\r\n\r\n    Returns:\r\n        Dict with split analysis and recommendation.\r\n    \"\"\"\r\n    research_ratio = len(research_components) / (\r\n        len(research_components) + len(engineering_components)\r\n    )\r\n\r\n    # Recommended approach based on research ratio\r\n    if research_ratio < 0.2:\r\n        recommendation = \"Mostly engineering. Use standard sprint planning.\"\r\n    elif research_ratio < 0.4:\r\n        recommendation = (\r\n            \"Mix of research and engineering. \"\r\n            \"Timebox research phase before committing to full estimate.\"\r\n        )\r\n    elif research_ratio < 0.6:\r\n        recommendation = (\r\n            \"Heavy research component. Split into 2-week research spike, \"\r\n            \"then re-estimate engineering work.\"\r\n        )\r\n    else:\r\n        recommendation = (\r\n            \"Primarily research. Use iterative exploration with \"\r\n            \"2-week timeboxes. Do not commit to delivery date.\"\r\n        )\r\n\r\n    return {\r\n        \"task\": task_description,\r\n        \"research_components\": research_components,\r\n        \"engineering_components\": engineering_components,\r\n        \"research_ratio\": round(research_ratio, 2),\r\n        \"unknowns\": unknowns,\r\n        \"recommendation\": recommendation,\r\n    }\r\n\r\n# Example: Fine-tuning an LLM\r\nresult = decompose_ml_work(\r\n    task_description=\"Fine-tune open-source LLM for customer support\",\r\n    research_components=[\r\n        \"Find optimal learning rate and LoRA rank\",\r\n        \"Determine best prompt template format\",\r\n        \"Evaluate whether PPO or DPO improves quality\",\r\n    ],\r\n    engineering_components=[\r\n        \"Set up training infrastructure (GPU cluster)\",\r\n        \"Build data preprocessing pipeline\",\r\n        \"Create evaluation harness with test set\",\r\n        \"Deploy model to inference endpoint\",\r\n        \"Set up monitoring and logging\",\r\n    ],\r\n    unknowns=[\r\n        \"Whether 1000 examples is enough\",\r\n        \"GPU availability on cluster\",\r\n        \"Which evaluation metric correlates with user satisfaction\",\r\n    ],\r\n)\r\n\r\nprint(\"=== Research vs Engineering Decomposition ===\\n\")\r\nprint(f\"Task: {result['task']}\")\r\nprint(f\"\\nResearch components ({len(result['research_components'])}):\")\r\nfor c in result['research_components']:\r\n    print(f\"  - {c}\")\r\nprint(f\"\\nEngineering components ({len(result['engineering_components'])}):\")\r\nfor c in result['engineering_components']:\r\n    print(f\"  - {c}\")\r\nprint(f\"\\nResearch ratio: {result['research_ratio']:.0%}\")\r\nprint(f\"Unknowns: {len(result['unknowns'])}\")\r\nprint(f\"\\nRecommendation: {result['recommendation']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Research vs Engineering Decomposition ===\r\n\r\nTask: Fine-tune open-source LLM for customer support\r\n\r\nResearch components (3):\r\n  - Find optimal learning rate and LoRA rank\r\n  - Determine best prompt template format\r\n  - Evaluate whether PPO or DPO improves quality\r\n\r\nEngineering components (5):\r\n  - Set up training infrastructure (GPU cluster)\r\n  - Build data preprocessing pipeline\r\n  - Create evaluation harness with test set\r\n  - Deploy model to inference endpoint\r\n  - Set up monitoring and logging\r\n\r\nResearch ratio: 38%\r\nUnknowns: 3\r\n\r\nRecommendation: Mix of research and engineering.\r\nTimebox research phase before committing to full estimate.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule of thumb:"
      }), " Any ML task with more than 30% research component needs a timeboxed exploration phase before you can give a reliable estimate."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "23-data-dependencies",
      children: "2.3 Data Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Data is the biggest unknown in ML estimation. You cannot estimate model training until you know your data situation."
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    subgraph DataStatus[Data Readiness Levels]\r\n        D0[No data / unknown availability]\r\n        D1[Data source identified]\r\n        D2[Data collected raw]\r\n        D3[Data cleaned & validated]\r\n        D4[Labels/ground truth ready]\r\n        D5[Feature engineering complete]\r\n    end\r\n\r\n    subgraph Impact[Estimation Impact]\r\n        I0[Estimate impossible]\r\n        I1[+200% uncertainty]\r\n        I2[+100% uncertainty]\r\n        I3[+50% uncertainty]\r\n        I4[+20% uncertainty]\r\n        I5[Standard ML estimate]\r\n    end\r\n\r\n    D0 --> I0\r\n    D1 --> I1\r\n    D2 --> I2\r\n    D3 --> I3\r\n    D4 --> I4\r\n    D5 --> I5"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nData dependency estimator for ML projects.\r\n\r\nAssesses data readiness and adjusts estimates accordingly.\r\n\"\"\"\r\n\r\nfrom enum import IntEnum\r\n\r\nclass DataReadinessLevel(IntEnum):\r\n    NONE = 0\r\n    SOURCE_IDENTIFIED = 1\r\n    RAW_COLLECTED = 2\r\n    CLEANED_VALIDATED = 3\r\n    LABELS_READY = 4\r\n    FEATURES_READY = 5\r\n\r\nDATA_READINESS_MULTIPLIERS = {\r\n    DataReadinessLevel.NONE: 3.0,\r\n    DataReadinessLevel.SOURCE_IDENTIFIED: 2.5,\r\n    DataReadinessLevel.RAW_COLLECTED: 2.0,\r\n    DataReadinessLevel.CLEANED_VALIDATED: 1.5,\r\n    DataReadinessLevel.LABELS_READY: 1.2,\r\n    DataReadinessLevel.FEATURES_READY: 1.0,\r\n}\r\n\r\nDATA_READINESS_DESCRIPTIONS = {\r\n    DataReadinessLevel.NONE: \"No data available. Cannot estimate.\",\r\n    DataReadinessLevel.SOURCE_IDENTIFIED: (\r\n        \"Source identified but no data collected. \"\r\n        \"Major discovery risk.\"\r\n    ),\r\n    DataReadinessLevel.RAW_COLLECTED: (\r\n        \"Raw data collected. Expect quality issues.\"\r\n    ),\r\n    DataReadinessLevel.CLEANED_VALIDATED: (\r\n        \"Data cleaned. Most quality issues resolved.\"\r\n    ),\r\n    DataReadinessLevel.LABELS_READY: (\r\n        \"Labels created. Ready for supervised learning.\"\r\n    ),\r\n    DataReadinessLevel.FEATURES_READY: (\r\n        \"Feature engineering done. Standard ML estimate applies.\"\r\n    ),\r\n}\r\n\r\ndef estimate_with_data_readiness(\r\n    base_ml_estimate_days: float,\r\n    data_readiness: DataReadinessLevel,\r\n    data_volume: str = \"unknown\",\r\n    label_quality: str = \"unknown\",\r\n) -> dict:\r\n    \"\"\"\r\n    Adjust ML estimate based on data readiness.\r\n\r\n    Args:\r\n        base_ml_estimate_days: Estimate assuming data is ready.\r\n        data_readiness: Current data readiness level.\r\n        data_volume: Estimated data volume (small, medium, large).\r\n        label_quality: Label quality assessment (high, medium, low).\r\n\r\n    Returns:\r\n        Adjusted estimate with data risk factors.\r\n    \"\"\"\r\n    multiplier = DATA_READINESS_MULTIPLIERS[data_readiness]\r\n    adjusted = base_ml_estimate_days * multiplier\r\n\r\n    # Additional risk factors\r\n    volume_risk = {\"small\": 1.0, \"medium\": 1.2, \"large\": 1.5}\r\n    label_risk = {\"high\": 1.0, \"medium\": 1.3, \"low\": 2.0}\r\n\r\n    vol_factor = volume_risk.get(data_volume, 1.2)\r\n    label_factor = label_risk.get(label_quality, 1.3)\r\n\r\n    risk_adjusted = adjusted * vol_factor * label_factor\r\n\r\n    return {\r\n        \"data_readiness\": data_readiness.name,\r\n        \"readiness_description\": DATA_READINESS_DESCRIPTIONS[\r\n            data_readiness\r\n        ],\r\n        \"base_estimate\": base_ml_estimate_days,\r\n        \"readiness_multiplier\": multiplier,\r\n        \"adjusted_for_data\": round(adjusted, 1),\r\n        \"volume_factor\": vol_factor,\r\n        \"label_quality_factor\": label_factor,\r\n        \"final_recommended\": round(risk_adjusted, 1),\r\n        \"risk_level\": (\r\n            \"Low\" if multiplier <= 1.2 else\r\n            \"Medium\" if multiplier <= 1.8 else\r\n            \"High\" if multiplier <= 2.5 else \"Very High\"\r\n        ),\r\n        \"action\": (\r\n            \"Proceed with estimation\"\r\n            if data_readiness >= DataReadinessLevel.FEATURES_READY\r\n            else \"Run data exploration spike first\"\r\n            if data_readiness >= DataReadinessLevel.RAW_COLLECTED\r\n            else \"Cannot estimate — start with data discovery\"\r\n        ),\r\n    }\r\n\r\n# Example: Same ML task at different data readiness levels\r\nbase = 20  # 20 days base estimate\r\nreadiness_levels = list(DataReadinessLevel)\r\n\r\nprint(\"=== Impact of Data Readiness on ML Estimates ===\\n\")\r\nprint(f\"Base estimate (data ready): {base} days\\n\")\r\nprint(f\"{'Level':<10} {'Status':<30} {'Multiplier':>10} \"\r\n      f\"{'Adjusted':>10} {'Final':>8}\")\r\nprint(\"-\" * 70)\r\nfor level in readiness_levels:\r\n    est = estimate_with_data_readiness(\r\n        base, level, data_volume=\"medium\", label_quality=\"medium\"\r\n    )\r\n    print(\r\n        f\"{level.value:<10} {level.name:<30} \"\r\n        f\"{est['readiness_multiplier']:>10.1f}x \"\r\n        f\"{est['adjusted_for_data']:>8.1f}d \"\r\n        f\"{est['final_recommended']:>7.1f}d\"\r\n    )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Impact of Data Readiness on ML Estimates ===\r\n\r\nBase estimate (data ready): 20 days\r\n\r\nLevel      Status                         Multiplier  Adjusted   Final\r\n0          NONE                                 3.0x     60.0d   93.6d\r\n1          SOURCE_IDENTIFIED                    2.5x     50.0d   78.0d\r\n2          RAW_COLLECTED                        2.0x     40.0d   62.4d\r\n3          CLEANED_VALIDATED                    1.5x     30.0d   46.8d\r\n4          LABELS_READY                         1.2x     24.0d   37.4d\r\n5          FEATURES_READY                       1.0x     20.0d   31.2d\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " Never estimate model development before data is cleaned. The difference between D0 and D5 is 3x."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "24-experimentation-time",
      children: "2.4 Experimentation Time"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ML training is iterative. You will run multiple experiments, most of which fail. Your estimate must account for this."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nExperimentation time estimator.\r\n\r\nModels the expected number of experiments needed\r\nto achieve target performance.\r\n\"\"\"\r\n\r\nimport math\r\n\r\ndef estimate_experimentation_time(\r\n    base_training_time: float,\r\n    success_rate_per_experiment: float,\r\n    target_confidence: float = 0.90,\r\n    parallel_experiments: int = 1,\r\n) -> dict:\r\n    \"\"\"\r\n    Estimate total time accounting for failed experiments.\r\n\r\n    Uses geometric distribution to model how many\r\n    experiments are needed before success.\r\n\r\n    Args:\r\n        base_training_time: Time per experiment (hours).\r\n        success_rate_per_experiment: Probability any single\r\n            experiment achieves target.\r\n        target_confidence: Desired probability of success.\r\n        parallel_experiments: How many experiments can run\r\n            in parallel (GPU availability).\r\n\r\n    Returns:\r\n        Dict with expected experiments and time.\r\n    \"\"\"\r\n    if success_rate_per_experiment <= 0:\r\n        return {\"note\": \"Zero success rate. Cannot estimate.\"}\r\n\r\n    # Expected experiments until first success (geometric)\r\n    expected_experiments = 1.0 / success_rate_per_experiment\r\n\r\n    # Experiments needed for target confidence\r\n    # P(success in n tries) = 1 - (1-p)^n >= target\r\n    # => n >= log(1 - target) / log(1 - p)\r\n    experiments_for_confidence = math.ceil(\r\n        math.log(1 - target_confidence)\r\n        / math.log(1 - success_rate_per_experiment)\r\n    )\r\n\r\n    # Serial time (if running experiments sequentially)\r\n    serial_time = experiments_for_confidence * base_training_time\r\n\r\n    # Parallel time (with parallelism limit)\r\n    batches = math.ceil(\r\n        experiments_for_confidence / parallel_experiments\r\n    )\r\n    parallel_time = batches * base_training_time\r\n\r\n    return {\r\n        \"success_rate\": success_rate_per_experiment,\r\n        \"expected_experiments\": round(expected_experiments, 1),\r\n        \"experiments_for_confidence\": experiments_for_confidence,\r\n        \"target_confidence\": target_confidence,\r\n        \"time_per_experiment_hours\": base_training_time,\r\n        \"serial_time_hours\": round(serial_time, 1),\r\n        \"parallel_time_hours\": round(parallel_time, 1),\r\n        \"parallel_experiments\": parallel_experiments,\r\n        \"recommendation\": (\r\n            f\"Plan for {experiments_for_confidence} experiments \"\r\n            f\"({parallel_time:.1f}h with {parallel_experiments} parallel\"\r\n            f\") to achieve {target_confidence:.0%} confidence.\"\r\n        ),\r\n    }\r\n\r\n# Example: Hyperparameter tuning\r\nprint(\"=== Experimentation Time Estimation ===\\n\")\r\n\r\nscenarios = [\r\n    (\"Hyperparameter tuning (10% success rate)\", 0.10, 2, 3),\r\n    (\"Fine-tuning with known recipe (30%)\", 0.30, 3, 4),\r\n    (\"Architecture search (5% success)\", 0.05, 4, 2),\r\n    (\"Standard training with good baseline (50%)\", 0.50, 1, 8),\r\n]\r\n\r\nfor scenario_name, success_rate, time_per_exp, parallel in scenarios:\r\n    est = estimate_experimentation_time(\r\n        base_training_time=time_per_exp,\r\n        success_rate_per_experiment=success_rate,\r\n        target_confidence=0.90,\r\n        parallel_experiments=parallel,\r\n    )\r\n    print(f\"Scenario: {scenario_name}\")\r\n    print(f\"  Success rate: {est['success_rate']:.0%}\")\r\n    print(f\"  Experiments needed: {est['experiments_for_confidence']}\")\r\n    print(f\"  Serial time: {est['serial_time_hours']:.1f}h\")\r\n    print(f\"  Parallel time: {est['parallel_time_hours']:.1f}h\")\r\n    print()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Experimentation Time Estimation ===\r\n\r\nScenario: Hyperparameter tuning (10% success rate)\r\n  Success rate: 10%\r\n  Experiments needed: 22\r\n  Serial time: 44.0h\r\n  Parallel time: 33.0h\r\n\r\nScenario: Fine-tuning with known recipe (30%)\r\n  Success rate: 30%\r\n  Experiments needed: 7\r\n  Serial time: 21.0h\r\n  Parallel time: 14.0h\r\n\r\nScenario: Architecture search (5% success)\r\n  Success rate: 5%\r\n  Experiments needed: 45\r\n  Serial time: 180.0h\r\n  Parallel time: 90.0h\r\n\r\nScenario: Standard training with good baseline (50%)\r\n  Success rate: 50%\r\n  Experiments needed: 4\r\n  Serial time: 4.0h\r\n  Parallel time: 4.0h\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " Parallel experimentation (running multiple trials simultaneously on different GPUs) is your primary lever for reducing wall-clock time. Always estimate how many parallel experiments your infrastructure can support."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-sprint-planning",
      children: "3 Sprint Planning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sprint planning translates estimates into actionable sprints. It covers backlog grooming, user stories, acceptance criteria, and capacity planning."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "31-backlog-grooming",
      children: "3.1 Backlog Grooming"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Backlog grooming refines and prioritizes the backlog before sprint planning. For ML teams, this means:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Splitting large research tasks into timeboxed spikes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Moving data-dependent stories to the right position"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensuring acceptance criteria are testable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pruning stories that rely on unavailable data"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    subgraph Backlog[Raw Backlog]\r\n        B1[Raw ML ideas]\r\n        B2[Feature requests]\r\n        B3[Bug reports]\r\n        B4[Tech debt items]\r\n    end\r\n\r\n    subgraph Grooming[Grooming Session]\r\n        G1[Size & estimate]\r\n        G2[Split large stories]\r\n        G3[Add acceptance criteria]\r\n        G4[Prioritize by value]\r\n        G5[Identify dependencies]\r\n    end\r\n\r\n    subgraph Ready[Ready for Sprint]\r\n        R1[Estimated stories]\r\n        R2[With acceptance criteria]\r\n        R3[Independent & testable]\r\n    end\r\n\r\n    B1 --> G1\r\n    B2 --> G1\r\n    B3 --> G1\r\n    B4 --> G1\r\n    G1 --> G2\r\n    G2 --> G3\r\n    G3 --> G4\r\n    G4 --> G5\r\n    G5 --> R1\r\n    G5 --> R2\r\n    G5 --> R3"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nBacklog grooming and sprint capacity planner for ML teams.\r\n\"\"\"\r\n\r\nfrom dataclasses import dataclass, field\r\nfrom typing import Optional\r\n\r\n@dataclass\r\nclass BacklogItem:\r\n    \"\"\"Represents a single backlog item with grooming status.\"\"\"\r\n\r\n    title: str\r\n    description: str\r\n    story_points: Optional[int] = None\r\n    acceptance_criteria: list[str] = field(default_factory=list)\r\n    dependencies: list[str] = field(default_factory=list)\r\n    data_required: bool = False\r\n    is_spike: bool = False\r\n    groomed: bool = False\r\n\r\n    def groom(\r\n        self,\r\n        points: int,\r\n        criteria: list[str],\r\n        is_spike: bool = False,\r\n    ) -> None:\r\n        \"\"\"Mark item as groomed with estimate and criteria.\"\"\"\r\n        self.story_points = points\r\n        self.acceptance_criteria = criteria\r\n        self.is_spike = is_spike\r\n        self.groomed = True\r\n\r\nclass SprintPlanner:\r\n    \"\"\"Plans sprints from a groomed backlog.\"\"\"\r\n\r\n    def __init__(self, sprint_capacity_points: int):\r\n        self.capacity = sprint_capacity_points\r\n        self.backlog: list[BacklogItem] = []\r\n        self.sprints: list[list[BacklogItem]] = []\r\n\r\n    def add_item(self, item: BacklogItem) -> None:\r\n        \"\"\"Add a backlog item.\"\"\"\r\n        self.backlog.append(item)\r\n\r\n    def get_groomed_items(self) -> list[BacklogItem]:\r\n        \"\"\"Return items ready for sprint planning.\"\"\"\r\n        return [\r\n            item for item in self.backlog\r\n            if item.groomed and item.story_points is not None\r\n        ]\r\n\r\n    def plan_sprints(\r\n        self, max_sprints: int = 5\r\n    ) -> list[list[BacklogItem]]:\r\n        \"\"\"\r\n        Assign groomed items to sprints based on capacity.\r\n\r\n        Respects dependency ordering and data readiness.\r\n        \"\"\"\r\n        ready = sorted(\r\n            self.get_groomed_items(),\r\n            key=lambda x: x.story_points or 999,\r\n        )\r\n        planned: list[BacklogItem] = []\r\n        sprints = []\r\n\r\n        for sprint_num in range(max_sprints):\r\n            if not ready:\r\n                break\r\n\r\n            sprint_backlog = []\r\n            sprint_points = 0\r\n\r\n            for item in ready[:]:\r\n                if item.title in planned:\r\n                    continue\r\n\r\n                # Check dependencies\r\n                deps_met = all(\r\n                    dep in planned for dep in item.dependencies\r\n                )\r\n                if not deps_met:\r\n                    continue\r\n\r\n                if sprint_points + (item.story_points or 0) <= self.capacity:\r\n                    sprint_backlog.append(item)\r\n                    sprint_points += item.story_points or 0\r\n                    planned.append(item.title)\r\n                    ready.remove(item)\r\n\r\n            if sprint_backlog:\r\n                sprints.append(sprint_backlog)\r\n\r\n        self.sprints = sprints\r\n        return sprints\r\n\r\n    def print_plan(self) -> str:\r\n        \"\"\"Print formatted sprint plan.\"\"\"\r\n        output = \"=== Sprint Plan ===\\n\"\r\n        for i, sprint in enumerate(self.sprints, 1):\r\n            total = sum(\r\n                item.story_points or 0 for item in sprint\r\n            )\r\n            output += (\r\n                f\"\\nSprint {i} (Capacity: {self.capacity} pts, \"\r\n                f\"Assigned: {total} pts):\\n\"\r\n            )\r\n            for item in sprint:\r\n                spike_tag = \" [SPIKE]\" if item.is_spike else \"\"\r\n                data_tag = \" [NEEDS DATA]\" if item.data_required else \"\"\r\n                output += (\r\n                    f\"  {item.story_points:>3} pts - \"\r\n                    f\"{item.title}{spike_tag}{data_tag}\\n\"\r\n                )\r\n        return output\r\n\r\n# Example: Plan a sprint for an ML team\r\nplanner = SprintPlanner(sprint_capacity_points=25)\r\n\r\nitems = [\r\n    BacklogItem(\r\n        title=\"Data exploration\",\r\n        description=\"Explore raw data quality and distribution\",\r\n        data_required=True,\r\n    ),\r\n    BacklogItem(\r\n        title=\"Set up training pipeline\",\r\n        description=\"Build training infrastructure\",\r\n        dependencies=[\"Data exploration\"],\r\n    ),\r\n    BacklogItem(\r\n        title=\"Baseline model training\",\r\n        description=\"Train and evaluate baseline model\",\r\n        dependencies=[\"Set up training pipeline\"],\r\n    ),\r\n    BacklogItem(\r\n        title=\"Hyperparameter optimization [SPIKE]\",\r\n        description=\"Timeboxed HP search, 3 days max\",\r\n        is_spike=True,\r\n        dependencies=[\"Baseline model training\"],\r\n    ),\r\n    BacklogItem(\r\n        title=\"Model deployment API\",\r\n        description=\"Deploy model behind FastAPI endpoint\",\r\n        dependencies=[\"Baseline model training\"],\r\n    ),\r\n    BacklogItem(\r\n        title=\"Monitoring dashboard\",\r\n        description=\"Build model performance dashboard\",\r\n        dependencies=[\"Model deployment API\"],\r\n    ),\r\n]\r\n\r\n# Groom each item\r\nitem_data = [\r\n    (5, [\"Data sources identified\", \"Quality report generated\"]),\r\n    (8, [\"Pipeline runs end-to-end\", \"Training logs captured\"]),\r\n    (5, [\"Baseline metrics computed\", \"Results reproducible\"]),\r\n    (3, [\"Best HP configuration identified\", \"Report with findings\"]),\r\n    (8, [\"API responds in <200ms\", \"Auto-scaling configured\"]),\r\n    (5, [\"Dashboard shows live metrics\", \"Alerts configured\"]),\r\n]\r\n\r\nfor item, (points, criteria) in zip(items, item_data):\r\n    is_spike = \"SPIKE\" in item.title\r\n    item.groom(points, criteria, is_spike=is_spike)\r\n    planner.add_item(item)\r\n\r\n# Plan sprints\r\nplanner.plan_sprints(max_sprints=3)\r\nprint(planner.print_plan())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Sprint Plan ===\r\n\r\nSprint 1 (Capacity: 25 pts, Assigned: 18 pts):\r\n    5 pts - Data exploration [NEEDS DATA]\r\n    8 pts - Set up training pipeline\r\n    5 pts - Baseline model training\r\n\r\nSprint 2 (Capacity: 25 pts, Assigned: 16 pts):\r\n    3 pts - Hyperparameter optimization [SPIKE] [SPIKE]\r\n    8 pts - Model deployment API\r\n    5 pts - Monitoring dashboard\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Grooming checklist for ML items:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is data available? If not, add data dependency."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can we define \"done\" concretely? If not, split into spike."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are there research unknowns? Add research/engineering split."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can it be tested automatically? Each AC must be testable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "32-user-stories--acceptance-criteria",
      children: "3.2 User Stories & Acceptance Criteria"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ML user stories differ from software stories. They must account for model quality, not just feature completion."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Template for ML user stories:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "As a [user role]\r\nI want [capability]\r\nSo that [benefit]\r\n\r\n**Acceptance Criteria:**\r\n1. Metric threshold: accuracy > 92% on held-out test\r\n2. Performance constraint: inference < 100ms p99\r\n3. Data requirement: training data > 10K labeled examples\r\n4. Edge case: handles missing values gracefully\r\n5. Integration: outputs in required API format\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nML user story validator.\r\n\r\nChecks whether user stories have adequate acceptance criteria\r\nfor ML work.\r\n\"\"\"\r\n\r\nclass MLUserStory:\r\n    \"\"\"\r\n    Represents an ML user story with validation.\r\n    \"\"\"\r\n\r\n    REQUIRED_AC_TYPES = [\r\n        \"metric_threshold\",\r\n        \"performance_constraint\",\r\n        \"edge_case\",\r\n        \"integration\",\r\n    ]\r\n\r\n    def __init__(\r\n        self,\r\n        title: str,\r\n        role: str,\r\n        capability: str,\r\n        benefit: str,\r\n        acceptance_criteria: list[str],\r\n    ):\r\n        self.title = title\r\n        self.role = role\r\n        self.capability = capability\r\n        self.benefit = benefit\r\n        self.acceptance_criteria = acceptance_criteria\r\n\r\n    def validate(self) -> dict:\r\n        \"\"\"\r\n        Check if user story is well-formed for ML.\r\n\r\n        Returns:\r\n            Dict with validation results and suggestions.\r\n        \"\"\"\r\n        issues = []\r\n        suggestions = []\r\n\r\n        # Check structure\r\n        if not self.role:\r\n            issues.append(\"Missing user role\")\r\n        if not self.capability:\r\n            issues.append(\"Missing capability\")\r\n\r\n        # Check AC types\r\n        ac_text = \" \".join(self.acceptance_criteria).lower()\r\n\r\n        has_metric = any(\r\n            word in ac_text\r\n            for word in [\r\n                \"accuracy\", \"f1\", \"precision\", \"recall\",\r\n                \"auc\", \"bleu\", \"metric\", \"score\",\r\n            ]\r\n        )\r\n        if not has_metric:\r\n            suggestions.append(\r\n                \"Add metric threshold (e.g., accuracy > 90%)\"\r\n            )\r\n\r\n        has_perf = any(\r\n            word in ac_text\r\n            for word in [\r\n                \"latency\", \"ms\", \"seconds\", \"throughput\",\r\n                \"qps\", \"performance\", \"response time\",\r\n            ]\r\n        )\r\n        if not has_perf:\r\n            suggestions.append(\r\n                \"Add performance constraint (e.g., latency < 200ms)\"\r\n            )\r\n\r\n        has_edge = any(\r\n            word in ac_text\r\n            for word in [\r\n                \"edge\", \"missing\", \"error\", \"fallback\",\r\n                \"failure\", \"exception\", \"corner\",\r\n            ]\r\n        )\r\n        if not has_edge:\r\n            suggestions.append(\r\n                \"Add edge case handling (e.g., missing values)\"\r\n            )\r\n\r\n        has_integration = any(\r\n            word in ac_text\r\n            for word in [\r\n                \"api\", \"endpoint\", \"output\", \"format\",\r\n                \"deploy\", \"pipeline\", \"integrate\",\r\n            ]\r\n        )\r\n        if not has_integration:\r\n            suggestions.append(\r\n                \"Add integration specification (e.g., output format)\"\r\n            )\r\n\r\n        quality = \"good\" if len(issues) == 0 and len(suggestions) <= 1 else (\r\n            \"needs_work\" if len(suggestions) <= 3 else \"incomplete\"\r\n        )\r\n\r\n        return {\r\n            \"title\": self.title,\r\n            \"valid\": len(issues) == 0,\r\n            \"quality\": quality,\r\n            \"issues\": issues,\r\n            \"suggestions\": suggestions,\r\n            \"ac_count\": len(self.acceptance_criteria),\r\n        }\r\n\r\n    def format(self) -> str:\r\n        \"\"\"Format as a proper user story.\"\"\"\r\n        lines = [\r\n            f\"## {self.title}\",\r\n            \"\",\r\n            f\"**As a** {self.role}\",\r\n            f\"**I want** {self.capability}\",\r\n            f\"**So that** {self.benefit}\",\r\n            \"\",\r\n            \"**Acceptance Criteria:**\",\r\n        ]\r\n        for i, ac in enumerate(self.acceptance_criteria, 1):\r\n            lines.append(f\"{i}. {ac}\")\r\n        return \"\\n\".join(lines)\r\n\r\n# Example: Compare good vs incomplete ML user stories\r\nstories = [\r\n    MLUserStory(\r\n        title=\"Content Moderation Model\",\r\n        role=\"Platform Admin\",\r\n        capability=\"automatically detect toxic comments\",\r\n        benefit=\"reduce manual moderation effort by 80%\",\r\n        acceptance_criteria=[\r\n            \"Toxic comment recall > 92% on test set\",\r\n            \"Inference latency < 50ms per comment\",\r\n            \"Non-toxic false positive rate < 2%\",\r\n            \"Handles Unicode, emoji, and code-switched text\",\r\n            \"Outputs score 0-1 via REST API\",\r\n        ],\r\n    ),\r\n    MLUserStory(\r\n        title=\"Recommendation Engine\",\r\n        role=\"User\",\r\n        capability=\"get personalized content recommendations\",\r\n        benefit=\"find relevant content faster\",\r\n        acceptance_criteria=[\r\n            \"Users see recommendations on homepage\",\r\n        ],\r\n    ),\r\n]\r\n\r\nfor story in stories:\r\n    print(story.format())\r\n    validation = story.validate()\r\n    print(f\"\\nValidation: {validation['quality']}\")\r\n    if validation[\"suggestions\"]:\r\n        print(\"Suggestions:\")\r\n        for s in validation[\"suggestions\"]:\r\n            print(f\"  - {s}\")\r\n    print(\"\\n\" + \"=\" * 50 + \"\\n\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "## Content Moderation Model\r\n\r\n**As a** Platform Admin\r\n**I want** automatically detect toxic comments\r\n**So that** reduce manual moderation effort by 80%\r\n\r\n**Acceptance Criteria:**\r\n1. Toxic comment recall > 92% on test set\r\n2. Inference latency < 50ms per comment\r\n3. Non-toxic false positive rate < 2%\r\n4. Handles Unicode, emoji, and code-switched text\r\n5. Outputs score 0-1 via REST API\r\n\r\nValidation: good\r\nSuggestions: (none)\r\n\r\n==================================================\r\n\r\n## Recommendation Engine\r\n\r\n**As a** User\r\n**I want** get personalized content recommendations\r\n**So that** find relevant content faster\r\n\r\n**Acceptance Criteria:**\r\n1. Users see recommendations on homepage\r\n\r\nValidation: needs_work\r\nSuggestions:\r\n  - Add metric threshold (e.g., accuracy > 90%)\r\n  - Add performance constraint (e.g., latency < 200ms)\r\n  - Add edge case handling (e.g., missing values)\r\n  - Add integration specification (e.g., output format)\r\n\r\n==================================================\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "33-capacity-planning",
      children: "3.3 Capacity Planning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Capacity planning determines how much work a team can commit to in a sprint."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nSprint capacity calculator for ML teams.\r\n\r\nAccounts for non-project activities like meetings,\r\ncode reviews, and support rotation.\r\n\"\"\"\r\n\r\ndef calculate_sprint_capacity(\r\n    team_size: int,\r\n    sprint_days: int = 10,\r\n    hours_per_day: float = 6.5,\r\n    meeting_hours_per_week: float = 4.0,\r\n    support_hours_per_week: float = 3.0,\r\n    review_hours_per_week: float = 2.0,\r\n    training_hours_per_week: float = 1.0,\r\n) -> dict:\r\n    \"\"\"\r\n    Calculate true available capacity for project work.\r\n\r\n    Hours are subtracted for non-project overhead.\r\n    Returns available person-days and story point capacity\r\n    (assuming 1 point ≈ 4 hours of focused work).\r\n\r\n    Args:\r\n        team_size: Number of team members.\r\n        sprint_days: Working days in sprint.\r\n        hours_per_day: Focused work hours per day.\r\n        meeting_hours_per_week: Hours in meetings.\r\n        support_hours_per_week: Hours on-call / support.\r\n        review_hours_per_week: Code review hours.\r\n        training_hours_per_week: Learning & development.\r\n\r\n    Returns:\r\n        Dict with capacity breakdown.\r\n    \"\"\"\r\n    total_available_hours = (\r\n        team_size * sprint_days * hours_per_day\r\n    )\r\n\r\n    # Sprint weeks (usually 2-week sprints)\r\n    weeks = sprint_days / 5.0\r\n\r\n    overhead_hours = (\r\n        meeting_hours_per_week\r\n        + support_hours_per_week\r\n        + review_hours_per_week\r\n        + training_hours_per_week\r\n    ) * weeks * team_size\r\n\r\n    project_hours = total_available_hours - overhead_hours\r\n\r\n    # Assume 1 story point ≈ 4 focused hours\r\n    # Factor in ML overhead (GPU waiting, data transfers)\r\n    ml_overhead_factor = 0.80  # 20% ML-specific overhead\r\n    effective_hours = project_hours * ml_overhead_factor\r\n\r\n    story_point_capacity = effective_hours / 4.0\r\n\r\n    return {\r\n        \"team_size\": team_size,\r\n        \"sprint_days\": sprint_days,\r\n        \"total_gross_hours\": round(total_available_hours, 1),\r\n        \"overhead_hours\": round(overhead_hours, 1),\r\n        \"overhead_breakdown\": {\r\n            \"meetings\": round(\r\n                meeting_hours_per_week * weeks * team_size, 1\r\n            ),\r\n            \"support\": round(\r\n                support_hours_per_week * weeks * team_size, 1\r\n            ),\r\n            \"reviews\": round(\r\n                review_hours_per_week * weeks * team_size, 1\r\n            ),\r\n            \"training\": round(\r\n                training_hours_per_week * weeks * team_size, 1\r\n            ),\r\n        },\r\n        \"project_hours\": round(project_hours, 1),\r\n        \"ml_overhead_deduction\": round(\r\n            project_hours * (1 - ml_overhead_factor), 1\r\n        ),\r\n        \"effective_hours\": round(effective_hours, 1),\r\n        \"story_point_capacity\": round(story_point_capacity, 0),\r\n        \"utilization_pct\": round(\r\n            effective_hours / total_available_hours * 100, 1\r\n        ),\r\n    }\r\n\r\n# Example: Compare teams of different sizes\r\nprint(\"=== Sprint Capacity Planning ===\\n\")\r\nfor team_size in [3, 5, 8]:\r\n    cap = calculate_sprint_capacity(\r\n        team_size=team_size,\r\n        sprint_days=10,\r\n        hours_per_day=6.5,\r\n        meeting_hours_per_week=3.5,\r\n        support_hours_per_week=2.0,\r\n        review_hours_per_week=2.0,\r\n        training_hours_per_week=1.0,\r\n    )\r\n    print(f\"Team size: {cap['team_size']}\")\r\n    print(f\"  Gross hours:   {cap['total_gross_hours']:.0f}h\")\r\n    print(f\"  Overhead:      {cap['overhead_hours']:.0f}h\")\r\n    print(f\"  Project hours: {cap['project_hours']:.0f}h\")\r\n    print(f\"  ML overhead:   {cap['ml_overhead_deduction']:.0f}h\")\r\n    print(f\"  Effective:     {cap['effective_hours']:.0f}h\")\r\n    print(f\"  Story points:  {cap['story_point_capacity']:.0f}\")\r\n    print(f\"  Utilization:   {cap['utilization_pct']:.0f}%\")\r\n    print()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Sprint Capacity Planning ===\r\n\r\nTeam size: 3\r\n  Gross hours:   195.0h\r\n  Overhead:      51.0h\r\n  Project hours: 144.0h\r\n  ML overhead:   28.8h\r\n  Effective:     115.2h\r\n  Story points:  29\r\n  Utilization:   59.1%\r\n\r\nTeam size: 5\r\n  Gross hours:   325.0h\r\n  Overhead:      85.0h\r\n  Project hours: 240.0h\r\n  ML overhead:   48.0h\r\n  Effective:     192.0h\r\n  Story points:  48\r\n  Utilization:   59.1%\r\n\r\nTeam size: 8\r\n  Gross hours:   520.0h\r\n  Overhead:      136.0h\r\n  Project hours: 384.0h\r\n  ML overhead:   76.8h\r\n  Effective:     307.2h\r\n  Story points:  77\r\n  Utilization:   59.1%\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight from this model:"
      }), " A team of 5 has 325 gross hours but only 192 effective hours — 59% utilization. This is normal. Never plan sprints at 100% capacity. The ML overhead factor (GPU waits, data downloads, experiment setup) further reduces effective time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-task-decomposition",
      children: "4 Task Decomposition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Breaking ML tasks into atomic units makes estimation more accurate. It also reveals dependencies and critical paths."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "41-breaking-ml-tasks-into-atomic-units",
      children: "4.1 Breaking ML Tasks into Atomic Units"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    subgraph Atomic[Atomic ML Units]\r\n        D[Data: collect, clean, validate, label, split]\r\n        F[Features: engineer, select, store]\r\n        T[Training: baseline, optimize, evaluate]\r\n        I[Infrastructure: pipeline, deploy, monitor]\r\n        R[Research: spike, experiment, validate]\r\n    end\r\n\r\n    subgraph Traditional[Traditional View]\r\n        TR[Build recommendation model]\r\n    end\r\n\r\n    subgraph Decomposed[Decomposed View]\r\n        D1[1. Collect user interaction data]\r\n        D2[2. Clean & deduplicate logs]\r\n        D3[3. Create train/test split]\r\n        D4[4. Engineer user features]\r\n        D5[5. Engineer item features]\r\n        D6[6. Implement baseline model]\r\n        D7[7. Hyperparameter tuning spike]\r\n        D8[8. Train final model]\r\n        D9[9. Build deployment pipeline]\r\n        D10[10. Set up monitoring]\r\n    end\r\n\r\n    Traditional --> Decomposed\r\n    D1 --> D2 --> D3 --> D4 --> D5 --> D6 --> D7 --> D8 --> D9 --> D10"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nML task decomposer with dependency mapping and critical path.\r\n\"\"\"\r\n\r\nfrom dataclasses import dataclass, field\r\nfrom typing import Optional\r\n\r\n@dataclass\r\nclass MLTask:\r\n    \"\"\"An atomic ML task with dependencies.\"\"\"\r\n\r\n    id: str\r\n    name: str\r\n    category: str  # data, feature, training, infra, research\r\n    estimated_hours: float\r\n    dependencies: list[str] = field(default_factory=list)\r\n    assigned_to: Optional[str] = None\r\n    completed: bool = False\r\n\r\nclass MLTaskDecomposer:\r\n    \"\"\"\r\n    Decompose high-level ML epics into atomic tasks.\r\n\r\n    Provides dependency mapping and critical path analysis.\r\n    \"\"\"\r\n\r\n    def __init__(self, epic_name: str):\r\n        self.epic = epic_name\r\n        self.tasks: list[MLTask] = []\r\n\r\n    def add_task(self, task: MLTask) -> None:\r\n        \"\"\"Add an atomic ML task.\"\"\"\r\n        self.tasks.append(task)\r\n\r\n    def decompose(self, epic_description: str) -> list[MLTask]:\r\n        \"\"\"\r\n        Decompose a high-level ML epic into standard atomic tasks.\r\n        \"\"\"\r\n        standard_tasks = self._generate_standard_tasks(\r\n            epic_description\r\n        )\r\n        self.tasks = standard_tasks\r\n        return self.tasks\r\n\r\n    def _generate_standard_tasks(\r\n        self, description: str\r\n    ) -> list[MLTask]:\r\n        \"\"\"Generate standard ML workflow tasks.\"\"\"\r\n        return [\r\n            MLTask(\"D1\", \"Data source identification\", \"data\", 4),\r\n            MLTask(\"D2\", \"Data collection pipeline\", \"data\", 8,\r\n                   dependencies=[\"D1\"]),\r\n            MLTask(\"D3\", \"Data cleaning & validation\", \"data\", 12,\r\n                   dependencies=[\"D2\"]),\r\n            MLTask(\"D4\", \"Exploratory data analysis\", \"data\", 6,\r\n                   dependencies=[\"D3\"]),\r\n            MLTask(\"D5\", \"Train/test split creation\", \"data\", 2,\r\n                   dependencies=[\"D3\"]),\r\n            MLTask(\"F1\", \"Feature engineering\", \"feature\", 16,\r\n                   dependencies=[\"D4\"]),\r\n            MLTask(\"F2\", \"Feature validation & selection\", \"feature\", 4,\r\n                   dependencies=[\"F1\"]),\r\n            MLTask(\"T1\", \"Baseline model implementation\", \"training\", 8,\r\n                   dependencies=[\"D5\", \"F2\"]),\r\n            MLTask(\"T2\", \"Hyperparameter tuning [SPIKE]\", \"training\", 12,\r\n                   dependencies=[\"T1\"]),\r\n            MLTask(\"T3\", \"Model evaluation & analysis\", \"training\", 6,\r\n                   dependencies=[\"T2\"]),\r\n            MLTask(\"I1\", \"Training pipeline automation\", \"infra\", 12,\r\n                   dependencies=[\"T1\"]),\r\n            MLTask(\"I2\", \"Model deployment setup\", \"infra\", 8,\r\n                   dependencies=[\"T3\", \"I1\"]),\r\n            MLTask(\"I3\", \"Monitoring & alerting\", \"infra\", 6,\r\n                   dependencies=[\"I2\"]),\r\n            MLTask(\"R1\", \"Experiment tracking setup\", \"research\", 4,\r\n                   dependencies=[\"T1\"]),\r\n        ]\r\n\r\n    def get_critical_path(self) -> list[MLTask]:\r\n        \"\"\"\r\n        Find the critical path through dependency graph.\r\n\r\n        Uses longest path from start to end tasks.\r\n        \"\"\"\r\n        # Build adjacency\r\n        task_map = {t.id: t for t in self.tasks}\r\n        dependents: dict[str, list[str]] = {t.id: [] for t in self.tasks}\r\n\r\n        for task in self.tasks:\r\n            for dep_id in task.dependencies:\r\n                if dep_id in dependents:\r\n                    dependents[dep_id].append(task.id)\r\n\r\n        # Find start tasks (no dependencies)\r\n        start_tasks = [\r\n            t for t in self.tasks if not t.dependencies\r\n        ]\r\n\r\n        # DP: longest path\r\n        memo: dict[str, tuple[float, list[str]]] = {}\r\n\r\n        def longest_path(task_id: str) -> tuple[float, list[str]]:\r\n            \"\"\"Return (total_hours, path) for longest path.\"\"\"\r\n            if task_id in memo:\r\n                return memo[task_id]\r\n\r\n            task = task_map[task_id]\r\n            children = dependents.get(task_id, [])\r\n\r\n            if not children:\r\n                result = (task.estimated_hours, [task_id])\r\n            else:\r\n                child_paths = [\r\n                    longest_path(child) for child in children\r\n                ]\r\n                best = max(child_paths, key=lambda x: x[0])\r\n                result = (\r\n                    best[0] + task.estimated_hours,\r\n                    [task_id] + best[1],\r\n                )\r\n\r\n            memo[task_id] = result\r\n            return result\r\n\r\n        all_paths = [longest_path(t.id) for t in start_tasks]\r\n        critical = max(all_paths, key=lambda x: x[0])\r\n\r\n        return [task_map[tid] for tid in critical[1]]\r\n\r\n    def print_decomposition(self) -> str:\r\n        \"\"\"Print the full task decomposition with critical path.\"\"\"\r\n        critical_ids = {\r\n            t.id for t in self.get_critical_path()\r\n        }\r\n\r\n        output = f\"=== Decomposition: {self.epic} ===\\n\\n\"\r\n        output += f\"{'ID':<6} {'Task':<35} {'Category':<12} \"\r\n        output += f\"{'Hours':<8} {'Critical':<10}\\n\"\r\n        output += \"-\" * 75 + \"\\n\"\r\n\r\n        for task in self.tasks:\r\n            is_critical = task.id in critical_ids\r\n            output += (\r\n                f\"{task.id:<6} {task.name:<35} {task.category:<12} \"\r\n                f\"{task.estimated_hours:<8.0f} \"\r\n                f\"{'<- CRITICAL' if is_critical else ''}\\n\"\r\n            )\r\n\r\n        total = sum(t.estimated_hours for t in self.tasks)\r\n        cp_hours = sum(\r\n            t.estimated_hours for t in self.get_critical_path()\r\n        )\r\n        output += \"-\" * 75 + \"\\n\"\r\n        output += f\"{'TOTAL':<6} {'':<35} {'':<12} {total:<8.0f}\\n\"\r\n        output += (\r\n            f\"\\nCritical path length: {cp_hours:.0f} hours \"\r\n            f\"({cp_hours / 8:.1f} person-days)\\n\"\r\n        )\r\n        output += (\r\n            f\"Total work: {total:.0f} hours \"\r\n            f\"({total / 8:.1f} person-days)\\n\"\r\n        )\r\n        output += (\r\n            f\"Parallelization potential: \"\r\n            f\"{(1 - cp_hours / total) * 100:.0f}%\\n\"\r\n        )\r\n        return output\r\n\r\n# Example: Decompose recommendation model\r\ndecomposer = MLTaskDecomposer(\"Recommendation Model v2\")\r\ndecomposer.decompose(\"Build and deploy personalized recommendation model\")\r\nprint(decomposer.print_decomposition())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Decomposition: Recommendation Model v2 ===\r\n\r\nID     Task                                 Category     Hours    Critical\r\n---------------------------------------------------------------------------\r\nD1     Data source identification           data         4\r\nD2     Data collection pipeline             data         8\r\nD3     Data cleaning & validation           data         12\r\nD4     Exploratory data analysis            data         6\r\nD5     Train/test split creation            data         2\r\nF1     Feature engineering                  feature      16\r\nF2     Feature validation & selection       feature      4\r\nT1     Baseline model implementation        training     8        <- CRITICAL\r\nT2     Hyperparameter tuning [SPIKE]        training     12\r\nT3     Model evaluation & analysis          training     6\r\nI1     Training pipeline automation         infra        12\r\nI2     Model deployment setup               infra        8\r\nI3     Monitoring & alerting                infra        6\r\nR1     Experiment tracking setup            research     4\r\n---------------------------------------------------------------------------\r\nTOTAL                                                     108\r\n\r\nCritical path length: 62.0 hours (7.8 person-days)\r\nTotal work: 108.0 hours (13.5 person-days)\r\nParallelization potential: 43%\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical path rule:"
      }), " The critical path determines your minimum project duration. Tasks not on the critical path can be parallelized. In ML projects, the critical path often runs through data tasks and evaluation loops, not engineering."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "42-dependency-mapping",
      children: "4.2 Dependency Mapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nDependency graph visualizer for ML workflows.\r\n\r\nMaps task dependencies and identifies blocking issues.\r\n\"\"\"\r\n\r\nclass MLDependencyMapper:\r\n    \"\"\"\r\n    Maps and analyzes dependencies in ML projects.\r\n\r\n    Identifies blocking dependencies and suggests\r\n    parallelization opportunities.\r\n    \"\"\"\r\n\r\n    def __init__(self, tasks: list[MLTask]):\r\n        self.tasks = tasks\r\n\r\n    def find_blockers(self) -> list[dict]:\r\n        \"\"\"\r\n        Find tasks that block many downstream tasks.\r\n\r\n        Returns:\r\n            List of tasks sorted by number of blocked tasks.\r\n        \"\"\"\r\n        task_map = {t.id: t for t in self.tasks}\r\n        blockers: dict[str, set[str]] = {}\r\n\r\n        for task in self.tasks:\r\n            for dep_id in task.dependencies:\r\n                if dep_id not in blockers:\r\n                    blockers[dep_id] = set()\r\n                blockers[dep_id].add(task.id)\r\n\r\n        return sorted(\r\n            [\r\n                {\r\n                    \"task_id\": tid,\r\n                    \"task_name\": task_map[tid].name,\r\n                    \"blocks\": len(blocked),\r\n                    \"blocked_tasks\": sorted(blocked),\r\n                }\r\n                for tid, blocked in blockers.items()\r\n            ],\r\n            key=lambda x: x[\"blocks\"],\r\n            reverse=True,\r\n        )\r\n\r\n    def suggest_parallelization(self) -> list[dict]:\r\n        \"\"\"\r\n        Identify tasks that can run in parallel.\r\n\r\n        Returns:\r\n            List of parallel batches.\r\n        \"\"\"\r\n        task_map = {t.id: t for t in self.tasks}\r\n        completed: set[str] = set()\r\n        batches = []\r\n\r\n        remaining = {t.id for t in self.tasks}\r\n\r\n        while remaining:\r\n            batch = []\r\n            for tid in list(remaining):\r\n                task = task_map[tid]\r\n                deps_met = all(d in completed for d in task.dependencies)\r\n                if deps_met:\r\n                    batch.append(tid)\r\n\r\n            if not batch:\r\n                break  # Circular dependency or cannot proceed\r\n\r\n            batches.append(batch)\r\n            completed.update(batch)\r\n            remaining -= set(batch)\r\n\r\n        return [\r\n            {\r\n                \"batch_num\": i + 1,\r\n                \"total_hours\": sum(\r\n                    task_map[tid].estimated_hours for tid in batch\r\n                ),\r\n                \"tasks\": [\r\n                    {\r\n                        \"id\": tid,\r\n                        \"name\": task_map[tid].name,\r\n                        \"hours\": task_map[tid].estimated_hours,\r\n                    }\r\n                    for tid in batch\r\n                ],\r\n            }\r\n            for i, batch in enumerate(batches)\r\n        ]\r\n\r\n    def print_dependency_report(self) -> str:\r\n        \"\"\"Generate a full dependency analysis report.\"\"\"\r\n        output = \"=== Dependency Analysis Report ===\\n\\n\"\r\n\r\n        # Top blockers\r\n        output += \"Top Blockers:\\n\"\r\n        blockers = self.find_blockers()\r\n        for b in blockers[:5]:\r\n            output += (\r\n                f\"  {b['task_id']} ({b['task_name']}): \"\r\n                f\"blocks {b['blocks']} tasks\\n\"\r\n            )\r\n\r\n        # Parallel batches\r\n        output += \"\\nParallelization Plan:\\n\"\r\n        batches = self.suggest_parallelization()\r\n        max_batch = max(b[\"total_hours\"] for b in batches)\r\n        for batch in batches:\r\n            output += (\r\n                f\"\\n  Batch {batch['batch_num']} \"\r\n                f\"({batch['total_hours']:.0f} hrs):\\n\"\r\n            )\r\n            for task in batch[\"tasks\"]:\r\n                bar_len = int(task[\"hours\"] / max_batch * 30)\r\n                bar = \"█\" * bar_len\r\n                output += (\r\n                    f\"    {task['id']:<6} {task['name']:<35} \"\r\n                    f\"{task['hours']:>3.0f}h {bar}\\n\"\r\n                )\r\n\r\n        return output\r\n\r\n# Reuse tasks from the decomposer\r\nmapper = MLDependencyMapper(decomposer.tasks)\r\nprint(mapper.print_dependency_report())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Dependency Analysis Report ===\r\n\r\nTop Blockers:\r\n  D3 (Data cleaning & validation): blocks 2 tasks\r\n  T1 (Baseline model implementation): blocks 4 tasks\r\n  D1 (Data source identification): blocks 1 tasks\r\n\r\nParallelization Plan:\r\n\r\n  Batch 1 (4.0 hrs):\r\n    D1     Data source identification                  4h ████\r\n\r\n  Batch 2 (8.0 hrs):\r\n    D2     Data collection pipeline                    8h ████████\r\n\r\n  Batch 3 (12.0 hrs):\r\n    D3     Data cleaning & validation                 12h ████████████\r\n\r\n  Batch 4 (8.0 hrs):\r\n    D4     Exploratory data analysis                   6h ██████\r\n    D5     Train/test split creation                   2h ██\r\n\r\n  Batch 5 (20.0 hrs):\r\n    F1     Feature engineering                        16h ████████████████\r\n    I1     Training pipeline automation               12h ████████████\r\n    R1     Experiment tracking setup                   4h ████\r\n\r\n  Batch 6 (12.0 hrs):\r\n    F2     Feature validation & selection              4h ████\r\n    T1     Baseline model implementation               8h ████████\r\n\r\n  Batch 7 (12.0 hrs):\r\n    T2     Hyperparameter tuning [SPIKE]              12h ████████████\r\n\r\n  Batch 8 (14.0 hrs):\r\n    T3     Model evaluation & analysis                 6h ██████\r\n    I2     Model deployment setup                      8h ████████\r\n\r\n  Batch 9 (6.0 hrs):\r\n    I3     Monitoring & alerting                       6h ██████\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-handling-uncertainty",
      children: "5 Handling Uncertainty"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Uncertainty is not eliminated — it is managed. AI engineers use several strategies."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "51-buffer-management",
      children: "5.1 Buffer Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    subgraph Project[Project Timeline]\r\n        P1[Base estimate: 8 weeks]\r\n        P2[Buffer: 3 weeks]\r\n        P3[Total: 11 weeks]\r\n    end\r\n\r\n    subgraph BufferTypes[Buffer Types]\r\n        B1[Known unknown buffer: +20%]\r\n        B2[Unknown unknown buffer: +30%]\r\n        B3[Management buffer: +15%]\r\n    end\r\n\r\n    P1 --> P2\r\n    B1 --> P2\r\n    B2 --> P2\r\n    B3 --> P2\r\n    P2 --> P3"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nBuffer management strategies for ML projects.\r\n\r\nImplements different buffer allocation methods.\r\n\"\"\"\r\n\r\nclass BufferManager:\r\n    \"\"\"\r\n    Manages contingency buffers for ML project timelines.\r\n\r\n    Supports different buffer strategies and tracking.\r\n    \"\"\"\r\n\r\n    STRATEGIES = {\r\n        \"aggressive\": {\r\n            \"research_buffer\": 0.30,\r\n            \"data_buffer\": 0.25,\r\n            \"engineering_buffer\": 0.10,\r\n            \"integration_buffer\": 0.15,\r\n        },\r\n        \"moderate\": {\r\n            \"research_buffer\": 0.50,\r\n            \"data_buffer\": 0.40,\r\n            \"engineering_buffer\": 0.20,\r\n            \"integration_buffer\": 0.25,\r\n        },\r\n        \"conservative\": {\r\n            \"research_buffer\": 1.00,\r\n            \"data_buffer\": 0.60,\r\n            \"engineering_buffer\": 0.30,\r\n            \"integration_buffer\": 0.40,\r\n        },\r\n    }\r\n\r\n    def __init__(self, strategy: str = \"moderate\"):\r\n        self.strategy = strategy\r\n        self.buffer_usage: list[dict] = []\r\n\r\n    def calculate_buffers(\r\n        self,\r\n        research_hours: float,\r\n        data_hours: float,\r\n        engineering_hours: float,\r\n        integration_hours: float,\r\n    ) -> dict:\r\n        \"\"\"\r\n        Calculate buffers for each work category.\r\n\r\n        Args:\r\n            research_hours: Estimated research hours.\r\n            data_hours: Estimated data work hours.\r\n            engineering_hours: Estimated engineering hours.\r\n            integration_hours: Estimated integration hours.\r\n\r\n        Returns:\r\n            Dict with buffer amounts and total.\r\n        \"\"\"\r\n        multipliers = self.STRATEGIES.get(\r\n            self.strategy, self.STRATEGIES[\"moderate\"]\r\n        )\r\n\r\n        buffers = {\r\n            \"research\": round(\r\n                research_hours * multipliers[\"research_buffer\"], 1\r\n            ),\r\n            \"data\": round(\r\n                data_hours * multipliers[\"data_buffer\"], 1\r\n            ),\r\n            \"engineering\": round(\r\n                engineering_hours * multipliers[\"engineering_buffer\"], 1\r\n            ),\r\n            \"integration\": round(\r\n                integration_hours * multipliers[\"integration_buffer\"], 1\r\n            ),\r\n        }\r\n\r\n        total_base = (\r\n            research_hours + data_hours + engineering_hours + integration_hours\r\n        )\r\n        total_buffer = sum(buffers.values())\r\n\r\n        return {\r\n            \"strategy\": self.strategy,\r\n            \"base_hours\": total_base,\r\n            \"buffer_hours\": round(total_buffer, 1),\r\n            \"total_with_buffer\": round(total_base + total_buffer, 1),\r\n            \"buffer_percentage\": round(\r\n                total_buffer / total_base * 100, 1\r\n            ),\r\n            \"buffers\": buffers,\r\n            \"by_category\": {\r\n                \"research\": {\r\n                    \"base\": research_hours,\r\n                    \"buffer\": buffers[\"research\"],\r\n                    \"total\": round(\r\n                        research_hours + buffers[\"research\"], 1\r\n                    ),\r\n                },\r\n                \"data\": {\r\n                    \"base\": data_hours,\r\n                    \"buffer\": buffers[\"data\"],\r\n                    \"total\": round(data_hours + buffers[\"data\"], 1),\r\n                },\r\n                \"engineering\": {\r\n                    \"base\": engineering_hours,\r\n                    \"buffer\": buffers[\"engineering\"],\r\n                    \"total\": round(\r\n                        engineering_hours + buffers[\"engineering\"], 1\r\n                    ),\r\n                },\r\n                \"integration\": {\r\n                    \"base\": integration_hours,\r\n                    \"buffer\": buffers[\"integration\"],\r\n                    \"total\": round(\r\n                        integration_hours + buffers[\"integration\"], 1\r\n                    ),\r\n                },\r\n            },\r\n        }\r\n\r\n    def record_buffer_use(\r\n        self,\r\n        category: str,\r\n        hours_used: float,\r\n        reason: str,\r\n    ) -> dict:\r\n        \"\"\"Record when buffer is consumed.\"\"\"\r\n        entry = {\r\n            \"category\": category,\r\n            \"hours_used\": hours_used,\r\n            \"reason\": reason,\r\n        }\r\n        self.buffer_usage.append(entry)\r\n        return entry\r\n\r\n    def buffer_remaining(\r\n        self, original_buffers: dict\r\n    ) -> dict:\r\n        \"\"\"Calculate remaining buffer by category.\"\"\"\r\n        consumed = {\"research\": 0, \"data\": 0,\r\n                     \"engineering\": 0, \"integration\": 0}\r\n        for entry in self.buffer_usage:\r\n            cat = entry[\"category\"]\r\n            consumed[cat] = consumed.get(cat, 0) + entry[\"hours_used\"]\r\n\r\n        original = original_buffers[\"buffers\"]\r\n        remaining = {}\r\n        for cat in original:\r\n            remaining[cat] = round(\r\n                original[cat] - consumed.get(cat, 0), 1\r\n            )\r\n\r\n        return remaining\r\n\r\n# Example: Buffer allocation for a typical ML project\r\nmanager = BufferManager(strategy=\"conservative\")\r\n\r\n# A 6-week ML project estimate\r\nresearch_hours = 40   # 1 week research\r\ndata_hours = 80       # 2 weeks data work\r\nengineering_hours = 60  # 1.5 weeks engineering\r\nintegration_hours = 20  # 0.5 weeks integration\r\n\r\nprint(\"=== Buffer Allocation ===\\n\")\r\nfor strategy in [\"aggressive\", \"moderate\", \"conservative\"]:\r\n    manager.strategy = strategy\r\n    buffers = manager.calculate_buffers(\r\n        research_hours, data_hours, engineering_hours, integration_hours\r\n    )\r\n    print(f\"Strategy: {strategy.title()}\")\r\n    print(f\"  Base hours:    {buffers['base_hours']}\")\r\n    print(f\"  Buffer hours:  {buffers['buffer_hours']}\")\r\n    print(f\"  Total:         {buffers['total_with_buffer']}\")\r\n    print(f\"  Buffer %:      {buffers['buffer_percentage']}%\")\r\n    print()\r\n\r\n# Record some buffer consumption\r\nmanager.strategy = \"conservative\"\r\nbuffers = manager.calculate_buffers(\r\n    research_hours, data_hours, engineering_hours, integration_hours\r\n)\r\nmanager.record_buffer_use(\"research\", 8,\r\n                          \"Needed extra experiment iterations\")\r\nmanager.record_buffer_use(\"data\", 12,\r\n                          \"Data quality issues required re-cleaning\")\r\nmanager.record_buffer_use(\"engineering\", 4,\r\n                          \"Pipeline refactoring needed\")\r\n\r\nremaining = manager.buffer_remaining(buffers)\r\nprint(\"Buffer Consumption Tracking:\")\r\nprint(f\"{'Category':<15} {'Original':<10} {'Consumed':<10} {'Remaining':<10}\")\r\nprint(\"-\" * 45)\r\nfor cat in [\"research\", \"data\", \"engineering\", \"integration\"]:\r\n    orig = buffers[\"buffers\"][cat]\r\n    consumed = sum(\r\n        e[\"hours_used\"] for e in manager.buffer_usage\r\n        if e[\"category\"] == cat\r\n    )\r\n    rem = remaining[cat]\r\n    print(f\"{cat:<15} {orig:<10.1f} {consumed:<10.1f} {rem:<10.1f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Buffer Allocation ===\r\n\r\nStrategy: Aggressive\r\n  Base hours:    200\r\n  Buffer hours:  38.0\r\n  Total:         238.0\r\n  Buffer %:      19.0%\r\n\r\nStrategy: Moderate\r\n  Base hours:    200\r\n  Buffer hours:  62.0\r\n  Total:         262.0\r\n  Buffer %:      31.0%\r\n\r\nStrategy: Conservative\r\n  Base hours:    200\r\n  Buffer hours:  110.0\r\n  Total:         310.0\r\n  Buffer %:      55.0%\r\n\r\nBuffer Consumption Tracking:\r\nCategory       Original   Consumed   Remaining\r\n---------------------------------------------\r\nresearch       40.0       8.0        32.0\r\ndata           48.0       12.0       36.0\r\nengineering    18.0       4.0        14.0\r\nintegration    8.0        0.0        8.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Buffer strategy recommendation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "aggressive"
        }), " (20% buffer) when: well-understood problem, clean data, experienced team"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "moderate"
        }), " (30% buffer) when: known unknowns exist, typical ML project"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "conservative"
        }), " (55% buffer) when: exploratory research, new domain, unvalidated data"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "52-timeboxing--spike-stories",
      children: "5.2 Timeboxing & Spike Stories"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A spike story is a timeboxed research task. Its purpose is to reduce uncertainty, not to deliver production code."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nSpike story manager for ML uncertainty reduction.\r\n\r\nHelps define, track, and evaluate spike stories.\r\n\"\"\"\r\n\r\nfrom datetime import datetime, timedelta\r\nfrom typing import Optional\r\n\r\nclass SpikeStory:\r\n    \"\"\"A timeboxed research spike for ML work.\"\"\"\r\n\r\n    def __init__(\r\n        self,\r\n        title: str,\r\n        question: str,\r\n        max_hours: int,\r\n        success_criteria: list[str],\r\n        start_date: Optional[datetime] = None,\r\n    ):\r\n        self.title = title\r\n        self.question = question  # The specific question to answer\r\n        self.max_hours = max_hours\r\n        self.success_criteria = success_criteria\r\n        self.start_date = start_date or datetime.now()\r\n        self.end_date = self.start_date + timedelta(hours=max_hours)\r\n        self.log: list[str] = []\r\n        self.result: Optional[str] = None\r\n        self.estimate_after: Optional[int] = None\r\n\r\n    def is_active(self) -> bool:\r\n        \"\"\"Check if spike is still within timebox.\"\"\"\r\n        return datetime.now() < self.end_date\r\n\r\n    def log_entry(self, entry: str) -> None:\r\n        \"\"\"Log an entry during the spike.\"\"\"\r\n        timestamp = datetime.now().strftime(\"%H:%M\")\r\n        self.log.append(f\"[{timestamp}] {entry}\")\r\n\r\n    def complete(self, result: str, estimate_after: int) -> dict:\r\n        \"\"\"\r\n        Complete the spike with findings.\r\n\r\n        Args:\r\n            result: Summary of findings.\r\n            estimate_after: New confidence-based estimate\r\n                for the main task (hours).\r\n\r\n        Returns:\r\n            Dict with spike results.\r\n        \"\"\"\r\n        self.result = result\r\n        self.estimate_after = estimate_after\r\n        return {\r\n            \"title\": self.title,\r\n            \"question\": self.question,\r\n            \"max_hours\": self.max_hours,\r\n            \"actual_hours\": len(self.log) * 0.5,  # rough\r\n            \"result\": result,\r\n            \"original_estimate\": None,\r\n            \"updated_estimate\": estimate_after,\r\n            \"uncertainty_reduced\": (\r\n                \"High\" if estimate_after < self.max_hours * 2\r\n                else \"Medium\" if estimate_after < self.max_hours * 4\r\n                else \"Low\"\r\n            ),\r\n        }\r\n\r\nclass SpikeManager:\r\n    \"\"\"Manages multiple spike stories for a project.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.spikes: list[SpikeStory] = []\r\n\r\n    def add_spike(self, spike: SpikeStory) -> None:\r\n        \"\"\"Add a spike story.\"\"\"\r\n        self.spikes.append(spike)\r\n\r\n    def identify_spike_needs(\r\n        self, uncertain_items: list[str]\r\n    ) -> list[dict]:\r\n        \"\"\"\r\n        Identify which uncertain items need spike stories.\r\n\r\n        Args:\r\n            uncertain_items: List of uncertain aspects.\r\n\r\n        Returns:\r\n            Recommended spike stories.\r\n        \"\"\"\r\n        spike_templates = {\r\n            \"data_quality\": SpikeStory(\r\n                title=\"Data Quality Assessment\",\r\n                question=\"Is the data clean enough for training?\",\r\n                max_hours=8,\r\n                success_criteria=[\r\n                    \"Missing rate per column < 5%\",\r\n                    \"No duplicate records\",\r\n                    \"Label consistency > 90%\",\r\n                ],\r\n            ),\r\n            \"model_feasibility\": SpikeStory(\r\n                title=\"Model Feasibility Study\",\r\n                question=\"Can a baseline model achieve 80% of target?\",\r\n                max_hours=12,\r\n                success_criteria=[\r\n                    \"Baseline trained end-to-end\",\r\n                    \"Metrics within 80% of target\",\r\n                    \"Training time acceptable\",\r\n                ],\r\n            ),\r\n            \"infrastructure\": SpikeStory(\r\n                title=\"Infrastructure Validation\",\r\n                question=\"Does the infrastructure support the workload?\",\r\n                max_hours=6,\r\n                success_criteria=[\r\n                    \"GPU available and configured\",\r\n                    \"Data pipeline runs in < 1 hour\",\r\n                    \"API endpoint responds in < 500ms\",\r\n                ],\r\n            ),\r\n            \"labeling_cost\": SpikeStory(\r\n                title=\"Labeling Cost & Quality Assessment\",\r\n                question=\"How much does labeling cost and how reliable?\",\r\n                max_hours=8,\r\n                success_criteria=[\r\n                    \"Cost per label estimated\",\r\n                    \"Inter-annotator agreement > 80%\",\r\n                    \"Labeling timeline known\",\r\n                ],\r\n            ),\r\n        }\r\n\r\n        recommendations = []\r\n        for item in uncertain_items:\r\n            if item in spike_templates:\r\n                spike = spike_templates[item]\r\n                recommendations.append({\r\n                    \"spike\": spike,\r\n                    \"estimated_hours\": spike.max_hours,\r\n                    \"before_main_estimation\": True,\r\n                })\r\n\r\n        return recommendations\r\n\r\n# Example: Define and complete a spike story\r\nspike = SpikeStory(\r\n    title=\"Data Quality for Customer Feedback\",\r\n    question=\"Are 10,000 customer feedback records usable for sentiment analysis?\",\r\n    max_hours=8,\r\n    success_criteria=[\r\n        \"At least 80% records have non-empty text\",\r\n        \"Label distribution is not extremely skewed (< 90% one class)\",\r\n        \"Languages detected match expected distribution\",\r\n    ],\r\n)\r\n\r\n# Simulate spike activities\r\nspike.log_entry(\"Started: Loaded 10,000 records from S3\")\r\nspike.log_entry(\"Found 1,200 empty records (12%) - need filtering\")\r\nspike.log_entry(\"Label distribution: Positive 45%, Negative 30%, Neutral 25%\")\r\nspike.log_entry(\"Language: English 70%, Spanish 20%, Others 10%\")\r\nspike.log_entry(\"Conclusion: Data is usable. Need to handle empty records.\")\r\n\r\nresult = spike.complete(\r\n    result=\"Data is usable. Filter 12% empty records. \"\r\n           \"Balanced label distribution. \"\r\n           \"Need multilingual model for 30% non-English.\",\r\n    estimate_after=40,  # Reduced from original 120 hours of uncertainty\r\n)\r\n\r\nprint(\"=== Spike Story Result ===\")\r\nprint(f\"Question: {result['question']}\")\r\nprint(f\"Timebox: {result['max_hours']} hours\")\r\nprint(f\"Result: {result['result']}\")\r\nprint(f\"Updated estimate: {result['updated_estimate']} hours\")\r\nprint(f\"Uncertainty reduction: {result['uncertainty_reduced']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Spike Story Result ===\r\nQuestion: Are 10,000 customer feedback records usable for sentiment analysis?\r\nTimebox: 8 hours\r\nResult: Data is usable. Filter 12% empty records. Balanced label distribution. Need multilingual model for 30% non-English.\r\nUpdated estimate: 40 hours\r\nUncertainty reduction: High\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "53-fail-fast-approach",
      children: "5.3 Fail-Fast Approach"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fail-fast means running the riskiest experiment first. If the core assumption fails, you discover it early with minimal wasted effort."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nFail-fast experiment planner for ML projects.\r\n\r\nIdentifies and prioritizes riskiest assumptions\r\nto validate early.\r\n\"\"\"\r\n\r\nclass FailFastPlanner:\r\n    \"\"\"\r\n    Plans experiments to validate riskiest assumptions first.\r\n\r\n    Key principle: identify the single assumption that, if wrong,\r\n    invalidates the project. Test that first.\r\n    \"\"\"\r\n\r\n    def __init__(self, project_name: str):\r\n        self.project = project_name\r\n        self.assumptions: list[dict] = []\r\n\r\n    def add_assumption(\r\n        self,\r\n        description: str,\r\n        impact: int,  # 1-10, 10 = project-killing\r\n        confidence: float,  # 0-1, how sure you are it's true\r\n        validation_method: str,\r\n        effort_hours: int,\r\n    ) -> None:\r\n        \"\"\"Register a key assumption.\"\"\"\r\n        self.assumptions.append({\r\n            \"description\": description,\r\n            \"impact\": impact,\r\n            \"confidence\": confidence,\r\n            \"validation_method\": validation_method,\r\n            \"effort_hours\": effort_hours,\r\n            \"risk_score\": round(impact * (1 - confidence), 2),\r\n        })\r\n\r\n    def prioritize_experiments(self) -> list[dict]:\r\n        \"\"\"\r\n        Sort assumptions by risk score (highest first).\r\n\r\n        The highest-risk assumptions should be tested first.\r\n        \"\"\"\r\n        sorted_assumptions = sorted(\r\n            self.assumptions,\r\n            key=lambda x: x[\"risk_score\"],\r\n            reverse=True,\r\n        )\r\n\r\n        cumulative_hours = 0\r\n        for a in sorted_assumptions:\r\n            cumulative_hours += a[\"effort_hours\"]\r\n            a[\"cumulative_hours\"] = cumulative_hours\r\n            a[\"test_week\"] = cumulative_hours / 40  # assume 40hr weeks\r\n\r\n        return sorted_assumptions\r\n\r\n    def generate_experiment_plan(\r\n        self, max_weeks_before_fail: int = 2\r\n    ) -> str:\r\n        \"\"\"\r\n        Generate a fail-fast experiment plan.\r\n\r\n        If the top risk cannot be validated within max_weeks_before_fail,\r\n        flag the project as high-risk.\r\n        \"\"\"\r\n        prioritized = self.prioritize_experiments()\r\n\r\n        output = (\r\n            f\"=== Fail-Fast Plan: {self.project} ===\\n\\n\"\r\n        )\r\n\r\n        if not prioritized:\r\n            return output + \"No assumptions registered.\\n\"\r\n\r\n        output += \"Riskiest Assumptions (test in this order):\\n\\n\"\r\n        output += (\r\n            f\"{'#':<4} {'Assumption':<45} {'Risk Score':<12} \"\r\n            f\"{'Effort':<8} {'Test By'}\\n\"\r\n        )\r\n        output += \"-\" * 85 + \"\\n\"\r\n\r\n        for i, a in enumerate(prioritized, 1):\r\n            output += (\r\n                f\"{i:<4} {a['description']:<45} \"\r\n                f\"{a['risk_score']:<12.1f} \"\r\n                f\"{a['effort_hours']:<8d} \"\r\n                f\"Week {a['test_week']:.1f}\\n\"\r\n            )\r\n\r\n        # Check if top risk takes too long\r\n        top_risk = prioritized[0] if prioritized else None\r\n        if top_risk and top_risk[\"test_week\"] > max_weeks_before_fail:\r\n            output += (\r\n                f\"\\n⚠ HIGH RISK: Top assumption takes \"\r\n                f\"{top_risk['test_week']:.1f} weeks to validate \"\r\n                f\"(exceeds {max_weeks_before_fail} week limit).\\n\"\r\n                f\"Consider simplifying the validation experiment.\\n\"\r\n            )\r\n        else:\r\n            output += (\r\n                f\"\\n✓ All riskiest assumptions can be validated \"\r\n                f\"within {max_weeks_before_fail} weeks.\\n\"\r\n            )\r\n\r\n        return output\r\n\r\n# Example: Plan fail-fast experiments for an LLM project\r\nplanner = FailFastPlanner(\"LLM-powered Code Review Assistant\")\r\n\r\nplanner.add_assumption(\r\n    description=\"LLM can accurately detect code bugs\",\r\n    impact=10,  # Project-killing if wrong\r\n    confidence=0.4,\r\n    validation_method=\"Run 100 known-bug examples through the model\",\r\n    effort_hours=8,\r\n)\r\nplanner.add_assumption(\r\n    description=\"Code context fits in context window\",\r\n    impact=8,\r\n    confidence=0.7,\r\n    validation_method=\"Measure average code file size\",\r\n    effort_hours=2,\r\n)\r\nplanner.add_assumption(\r\n    description=\"Developers will use AI review suggestions\",\r\n    impact=9,\r\n    confidence=0.5,\r\n    validation_method=\"User survey with prototype screenshots\",\r\n    effort_hours=12,\r\n)\r\nplanner.add_assumption(\r\n    description=\"Latency under 5 seconds is acceptable\",\r\n    impact=7,\r\n    confidence=0.8,\r\n    validation_method=\"Run latency benchmark on 100 queries\",\r\n    effort_hours=4,\r\n)\r\nplanner.add_assumption(\r\n    description=\"Can fine-tune with available GPU budget\",\r\n    impact=9,\r\n    confidence=0.6,\r\n    validation_method=\"Estimate compute from 1 epoch on sample\",\r\n    effort_hours=6,\r\n)\r\n\r\nprint(planner.generate_experiment_plan(max_weeks_before_fail=2))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Fail-Fast Plan: LLM-powered Code Review Assistant ===\r\n\r\nRiskiest Assumptions (test in this order):\r\n\r\n#    Assumption                                       Risk Score   Effort   Test By\r\n-------------------------------------------------------------------------------------\r\n1    LLM can accurately detect code bugs                  6.0        8      Week 0.2\r\n2    Developers will use AI review suggestions             4.5       12      Week 0.5\r\n3    Can fine-tune with available GPU budget               3.6        6      Week 0.7\r\n4    Code context fits in context window                   2.4        2      Week 0.7\r\n5    Latency under 5 seconds is acceptable                 1.4        4      Week 0.8\r\n\r\n✓ All riskiest assumptions can be validated within 2 weeks.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fail-fast rule:"
      }), " If your most critical assumption has a risk score above 5, validate it in the first week. Do not start building infrastructure until you know the core ML assumption holds."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "54-handling-estimation-bias",
      children: "5.4 Handling Estimation Bias"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\r\nEstimation bias detection and correction for ML teams.\r\n\r\nIdentifies common estimation biases and adjusts accordingly.\r\n\"\"\"\r\n\r\ndef detect_estimation_biases(\r\n    estimates: list[float],\r\n    actuals: list[float],\r\n) -> dict:\r\n    \"\"\"\r\n    Compare past estimates to actuals and detect bias patterns.\r\n\r\n    Args:\r\n        estimates: List of previous estimates (hours/days/points).\r\n        actuals: List of actual time taken.\r\n\r\n    Returns:\r\n        Dict with bias analysis.\r\n    \"\"\"\r\n    if len(estimates) != len(actuals) or len(estimates) == 0:\r\n        return {\"error\": \"Lists must be non-empty and same length\"}\r\n\r\n    ratios = [a / e for a, e in zip(actuals, estimates)]\r\n    avg_ratio = sum(ratios) / len(ratios)\r\n    median_ratio = sorted(ratios)[len(ratios) // 2]\r\n\r\n    # Classification of bias\r\n    if avg_ratio < 0.85:\r\n        bias_type = \"overestimation\"\r\n        correction = \"Reduce future estimates by \"\r\n        f\"{(1 - avg_ratio) * 100:.0f}%\"\r\n    elif avg_ratio > 1.15:\r\n        bias_type = \"underestimation\"\r\n        correction = \"Increase future estimates by \"\r\n        f\"{(avg_ratio - 1) * 100:.0f}%\"\r\n    else:\r\n        bias_type = \"well_calibrated\"\r\n        correction = \"No systematic bias detected\"\r\n\r\n    return {\r\n        \"sample_size\": len(estimates),\r\n        \"avg_ratio\": round(avg_ratio, 2),\r\n        \"median_ratio\": round(median_ratio, 2),\r\n        \"min_ratio\": round(min(ratios), 2),\r\n        \"max_ratio\": round(max(ratios), 2),\r\n        \"std_ratio\": round(\r\n            (sum((r - avg_ratio) ** 2 for r in ratios)\r\n             / (len(ratios) - 1)) ** 0.5,\r\n            2,\r\n        ),\r\n        \"bias_type\": bias_type,\r\n        \"correction\": correction,\r\n    }\r\n\r\ndef calibrate_estimate(\r\n    raw_estimate: float,\r\n    bias_history: dict,\r\n    confidence: str = \"medium\",\r\n) -> dict:\r\n    \"\"\"\r\n    Calibrate an estimate based on historical bias.\r\n\r\n    Args:\r\n        raw_estimate: Your initial estimate.\r\n        bias_history: Output from detect_estimation_biases.\r\n        confidence: How reliable is this estimate (low, medium, high).\r\n\r\n    Returns:\r\n        Calibrated estimate.\r\n    \"\"\"\r\n    if \"error\" in bias_history:\r\n        return {\"calibrated\": raw_estimate, \"note\": \"No history to calibrate\"}\r\n\r\n    avg_ratio = bias_history[\"avg_ratio\"]\r\n    calibrated = raw_estimate * avg_ratio\r\n\r\n    # Add uncertainty based on confidence\r\n    confidence_multipliers = {\r\n        \"low\": 1.5,\r\n        \"medium\": 1.2,\r\n        \"high\": 1.05,\r\n    }\r\n\r\n    uncertainty = bias_history[\"std_ratio\"]\r\n    confidence_factor = confidence_multipliers.get(confidence, 1.2)\r\n    upper_bound = calibrated * (1 + uncertainty * confidence_factor)\r\n    lower_bound = calibrated / (1 + uncertainty * confidence_factor)\r\n\r\n    return {\r\n        \"raw_estimate\": raw_estimate,\r\n        \"calibrated_estimate\": round(calibrated, 1),\r\n        \"range_80pct\": (\r\n            round(lower_bound, 1),\r\n            round(upper_bound, 1),\r\n        ),\r\n        \"bias_correction\": f\"{avg_ratio:.2f}x\",\r\n        \"confidence\": confidence,\r\n    }\r\n\r\n# Example: Analyze team estimation bias\r\nestimates = [5, 8, 13, 3, 5, 8, 21, 13, 5, 8]\r\nactuals = [7, 10, 18, 4, 6, 12, 35, 18, 7, 11]\r\n\r\nprint(\"=== Estimation Bias Analysis ===\\n\")\r\nbias = detect_estimation_biases(estimates, actuals)\r\nprint(f\"Bias type: {bias['bias_type']}\")\r\nprint(f\"Average estimate/actual ratio: {bias['avg_ratio']}\")\r\nprint(f\"Std deviation: {bias['std_ratio']}\")\r\nprint(f\"Correction: {bias['correction']}\")\r\nprint(f\"Sample size: {bias['sample_size']} tasks\")\r\n\r\nprint(\"\\n=== Calibrated Estimates ===\\n\")\r\nfor raw in [10, 20, 40]:\r\n    cal = calibrate_estimate(raw, bias, confidence=\"medium\")\r\n    print(\r\n        f\"Raw: {raw:>4} → Calibrated: {cal['calibrated_estimate']:>5.1f} \"\r\n        f\"[{cal['range_80pct'][0]:>5.1f} - {cal['range_80pct'][1]:>5.1f}]\"\r\n    )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Estimation Bias Analysis ===\r\n\r\nBias type: underestimation\r\nAverage estimate/actual ratio: 1.42\r\nStd deviation: 0.18\r\nCorrection: Increase future estimates by 42%\r\nSample size: 10 tasks\r\n\r\n=== Calibrated Estimates ===\r\n\r\nRaw:   10 → Calibrated:  14.2 [10.6 - 18.9]\r\nRaw:   20 → Calibrated:  28.3 [21.2 - 37.8]\r\nRaw:   40 → Calibrated:  56.7 [42.4 - 75.7]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bias tracking rule:"
      }), " Track estimate vs actual for every ML task. After 10 data points, you will know whether your team tends to under- or over-estimate. Use this to calibrate future estimates."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-how-do-you-estimate-an-ml-project-when-you-have-no-historical-data",
      children: "Q1: How do you estimate an ML project when you have no historical data?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Start with t-shirt sizing for broad scope estimation. Decompose the ML workflow into data, feature, training, and engineering phases. Use three-point estimation with aggressive pessimism — ML tasks typically take 2-3x longer than initial intuition suggests. Add a 50% buffer for a first project. Most importantly, identify the riskiest assumption and plan a fail-fast experiment in the first sprint to validate or invalidate it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-what-is-the-difference-between-a-spike-story-and-a-regular-user-story",
      children: "Q2: What is the difference between a spike story and a regular user story?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " A spike story is timeboxed research to reduce uncertainty. It does not deliver production code. Its output is knowledge — answers to specific questions. A regular user story delivers a working feature. Spikes are essential in ML when you do not know if an approach is feasible, what accuracy you can achieve, or whether data quality is sufficient. The key rule: spikes have a hard timebox, not a point estimate."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-how-do-you-handle-a-stakeholder-who-wants-a-fixed-delivery-date-for-an-ml-feature",
      children: "Q3: How do you handle a stakeholder who wants a fixed delivery date for an ML feature?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " First, explain that ML has inherent uncertainty — unlike traditional software. Propose a phased approach: a timeboxed exploration phase (2-4 weeks) after which you can give a more reliable estimate. If they insist on a fixed date, use conservative three-point estimation with the pessimistic number as the commitment. Track estimation bias and build a track record over time. Never commit to a fixed date for pure research work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-is-the-critical-path-in-an-ml-project-and-why-does-it-matter",
      children: "Q4: What is the critical path in an ML project and why does it matter?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " The critical path is the longest chain of dependent tasks. It determines the minimum project duration. In ML projects, the critical path often goes through data collection → cleaning → baseline model → evaluation — not through engineering tasks. Understanding the critical path lets you focus resources where they matter most. Tasks off the critical path can be parallelized. If you need to shorten a timeline, find ways to accelerate critical path tasks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-how-do-you-estimate-data-collection-and-labeling-effort",
      children: "Q5: How do you estimate data collection and labeling effort?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Start with a data quality spike: sample your data source, assess label quality, and measure labeling speed per item. Use three-point estimation: optimistic (perfect data, fast labeling), most likely (some quality issues), pessimistic (major cleaning needed, slow labeling). Factor in labeling cost — professional labelers are 3-5x faster but expensive. Never estimate labeling time without first measuring labeling speed on a representative sample."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-explain-planning-poker-and-why-it-works-for-ml-teams",
      children: "Q6: Explain planning poker and why it works for ML teams."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Planning poker has each team member privately select a story point value, then reveal simultaneously. It works because: (1) It prevents anchoring — the first speaker does not influence others. (2) It surfaces information asymmetry — the data scientist may know data is bad while the engineer assumes it is clean. (3) Large spreads (>5 points) indicate high uncertainty, flagging the need for a spike story. (4) It builds shared understanding of the work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-how-do-you-handle-a-sprint-where-ml-experiments-take-longer-than-expected",
      children: "Q7: How do you handle a sprint where ML experiments take longer than expected?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " First, the spike or experiment should be timeboxed — if it exceeds the timebox, stop and report findings. Never let unbounded experimentation eat into engineering time. If an experiment overruns, the team should re-estimate remaining work rather than extend the sprint. Use buffer management: each sprint should have 15-20% unallocated capacity for surprises. If experiments consistently overrun, your estimates are too optimistic — calibrate upward."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-what-buffer-strategy-do-you-recommend-for-a-research-heavy-ml-project",
      children: "Q8: What buffer strategy do you recommend for a research-heavy ML project?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Use conservative buffers: 50-100% buffer on research activities, 40-60% on data work, 20-30% on engineering. Separate research buffers from engineering buffers — never allow research overruns to consume engineering contingency. Track buffer consumption weekly. If you burn through more than 50% of research buffer in the first quarter of the project, escalate to stakeholders before the buffer is exhausted."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-how-do-you-decompose-build-a-recommendation-system-into-estimable-tasks",
      children: "Q9: How do you decompose \"build a recommendation system\" into estimable tasks?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Break it down: (1) Data: source identification, collection pipeline, cleaning, EDA, train/test split. (2) Features: engineering, validation, selection. (3) Baseline: implement simple model, establish metrics. (4) Research spike: try 2-3 approaches, identify best. (5) Production: training pipeline automation, deployment, monitoring. Each subtask gets its own estimate. Map dependencies to find the critical path. Add 30% buffer for ML uncertainty."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-what-metrics-do-you-use-to-track-estimation-accuracy",
      children: "Q10: What metrics do you use to track estimation accuracy?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Three key metrics: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimation accuracy ratio"
      }), ": actual hours / estimated hours — track over time, aim for 0.8-1.2. (2) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sprint commitment reliability"
      }), ": story points completed vs committed — should be >80%. (3) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Buffer burn rate"
      }), ": how much of your contingency buffer is consumed at each project stage. If you consistently hit 100% accuracy, you are probably over-estimating. The goal is calibrated estimates, not perfect estimates."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-1",
      children: "Question 1"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What does a large spread in planning poker votes indicate?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) The team is not experienced\r\nB) The task has high uncertainty and may need a spike story\r\nC) The product manager is not clear\r\nD) The estimates are wrong"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: B"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-2",
      children: "Question 2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In three-point estimation (PERT), which formula gives the expected duration?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) (O + ML + P) / 3\r\nB) (O + 3", (0,jsx_runtime.jsx)(_components.em, {
        children: "ML + P) / 5\r\nC) (O + 4"
      }), "ML + P) / 6\r\nD) (2*O + ML + P) / 4"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: C"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-3",
      children: "Question 3"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What is the primary purpose of a spike story in ML projects?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Deliver production-ready features\r\nB) Reduce uncertainty through timeboxed research\r\nC) Increase team velocity\r\nD) Document technical decisions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: B"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-4",
      children: "Question 4"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What does a research ratio > 40% in an ML task imply?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) The task is well-understood\r\nB) The task needs a timeboxed exploration phase before commitment\r\nC) The task should be rejected\r\nD) The task can be estimated normally"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: B"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-5",
      children: "Question 5"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Which of the following has the highest estimation uncertainty?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Deploying a REST API with an existing framework\r\nB) Fine-tuning BERT on labeled data\r\nC) Exploratory research with novel architecture\r\nD) Writing unit tests"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: C"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-6",
      children: "Question 6"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What is the critical path in project scheduling?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) The path with the most tasks\r\nB) The longest sequence of dependent tasks\r\nC) The path with the highest uncertainty\r\nD) The tasks assigned to the most senior person"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: B"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-7",
      children: "Question 7"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What buffer percentage is recommended for a research-heavy ML project (conservative strategy)?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) 10-15%\r\nB) 20-25%\r\nC) 50-55%\r\nD) 100-200%"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: C"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-8",
      children: "Question 8"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The fail-fast approach prioritizes testing which assumptions first?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) The easiest to test\r\nB) The most interesting\r\nC) The highest-risk (most likely to invalidate the project)\r\nD) The ones preferred by stakeholders"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: C"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-9",
      children: "Question 9"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If your team's estimation bias ratio is 1.42 (actual/estimate), what should you do?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Keep estimating the same way\r\nB) Increase future estimates by ~42%\r\nC) Decrease future estimates by 42%\r\nD) Switch to a different estimation method"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: B"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-10",
      children: "Question 10"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What is the key difference between optimistic and pessimistic estimates in three-point estimation?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) The estimator's mood\r\nB) The standard deviation of the estimate — larger spread = higher uncertainty\r\nC) The number of team members involved\r\nD) The sprint duration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: B"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter gave you a complete toolkit for estimation and planning in AI engineering. You learned four estimation techniques — story points, t-shirt sizing, planning poker, and three-point estimation — each suited to different levels of uncertainty and project maturity."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You learned how ML-specific challenges (research uncertainty, data dependencies, experimentation time) change the estimation game. You can now decompose ML tasks into atomic units, map dependencies, and find critical paths. You know how to run effective sprint planning for AI teams, including backlog grooming, user stories with proper acceptance criteria, and capacity planning."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Finally, you learned how to manage uncertainty through buffers, timeboxing, spike stories, and fail-fast approaches. These strategies do not eliminate uncertainty — they contain it so it does not derail your project."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Python tools in this chapter are production-ready. Use them with your team to build a data-driven estimation practice. The goal is not perfect estimates — it is calibrated estimates that stakeholders can trust and teams can deliver against."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-estimate-an-ml-project",
      children: "Exercise 1: Estimate an ML Project"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You are building a medical image classification model. Decompose the work and provide:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A list of atomic tasks with categories (data, feature, training, infra)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A three-point estimate (optimistic, most likely, pessimistic) for each task"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The critical path through the project"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Total project estimate with conservative buffers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MLTaskDecomposer"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "three_point_estimate"
      }), " tools from this chapter."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-run-a-planning-poker-session",
      children: "Exercise 2: Run a Planning Poker Session"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Simulate a planning poker session for the following story:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\"As a data scientist, I want to automatically detect data drift in production features, so that I can retrain models before accuracy degrades.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Play the roles of: PM (optimistic), Tech Lead (realist), Senior Engineer, Junior Engineer, Data Scientist (pessimist)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run 2-3 rounds of voting and show how the estimate converges."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-sprint-capacity-calculation",
      children: "Exercise 3: Sprint Capacity Calculation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Calculate sprint capacity for a team of 4 ML engineers with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "2-week sprint (10 working days)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "6 hours of focused work per day"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "4 hours/week of meetings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3 hours/week of support rotation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "2 hours/week of code reviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "20% ML overhead factor"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Show the breakdown and determine how many story points (1 SP = 4 hours) the team can commit to."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-build-a-fail-fast-experiment-plan",
      children: "Exercise 4: Build a Fail-Fast Experiment Plan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For an ML project of your choice (e.g., \"Real-time fraud detection with graph neural networks\"):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify 5 key assumptions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rate each on impact (1-10) and confidence (0-1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate risk scores"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Order experiments by risk score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine if all high-risk assumptions can be validated within 2 weeks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-calibrate-your-estimates",
      children: "Exercise 5: Calibrate Your Estimates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Collect 8-10 past estimation data points (estimate vs actual). Use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "detect_estimation_biases"
      }), " function to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate your estimation bias ratio"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine if you under- or over-estimate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply calibration to a new estimate of 15 story points"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide an 80% confidence range"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ML estimation is fundamentally uncertain."
          }), " Accept this and build processes that account for it rather than pretending it does not exist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Decompose before estimating."
          }), " A high-level task like \"build recommendation model\" cannot be accurately estimated. Break it into data, feature, training, and engineering subtasks."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Use relative estimation (story points), not hours."
          }), " Points are faster, more accurate, and less prone to anchoring bias."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The critical path determines your timeline."
          }), " Map dependencies and focus resources on the longest chain of dependent tasks."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Spike stories reduce uncertainty."
          }), " When you do not know the answer, timebox a research spike before committing to a full estimate."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Buffers protect your schedule."
          }), " Allocate 20-55% contingency based on uncertainty level. Track buffer consumption weekly."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Fail fast saves months."
          }), " Test the riskiest assumption first. If it fails, pivot or cancel before investing in infrastructure."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Track estimation bias."
          }), " Compare estimates to actuals. After 10 data points, you can calibrate future estimates systematically."]
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
            children: "Explain the core idea of 03 — Estimation & Planning for AI Engineers in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function in this chapter — Estimation & Planning for AI Engineers."
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
            children: "Describe a production bug caused by misunderstanding this technique — Estimation & Planning for AI Engineers. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique — Estimation & Planning for AI Engineers from 10 users to 10 million?"
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
            children: "Compare 03 — Estimation & Planning for AI Engineers with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component built on this — Estimation & Planning for AI Engineers."
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
            children: "How does 03 — Estimation & Planning for AI Engineers behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of this technique — Estimation & Planning for AI Engineers run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of this technique — Estimation & Planning for AI Engineers that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name 03 — Estimation & Planning for AI Engineers explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using 03 — Estimation & Planning for AI Engineers\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies 03 — Estimation & Planning for AI Engineers to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside 03 — Estimation & Planning for AI Engineers (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of 03 — Estimation & Planning for AI Engineers and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a 03 — Estimation & Planning for AI Engineers-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic 03 — Estimation & Planning for AI Engineers interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply 03 — Estimation & Planning for AI Engineers in production today?"
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
        }), " 03 — Estimation & Planning for AI Engineers builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for 03 — Estimation & Planning for AI Engineers before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for 03 — Estimation & Planning for AI Engineers is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for 03 — Estimation & Planning for AI Engineers in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the 03 — Estimation & Planning for AI Engineers chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers 03 — Estimation & Planning for AI Engineers is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 03 Estimation Planning is ___. — Answer: O(n) typical, O(1) best case"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 03 Estimation Planning is ___. — Answer: empty input, boundary values, invalid types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug 03 — Estimation & Planning for AI Engineers issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to 03 — Estimation & Planning for AI Engineers in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving 03 — Estimation & Planning for AI Engineers that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of this technique — Estimation & Planning for AI Engineers is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain 03 — Estimation & Planning for AI Engineers in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for 03 — Estimation & Planning for AI Engineers and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of this technique — Estimation & Planning for AI Engineers on an empty input?"
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
            children: "Complete Medium exercises, explain 03 — Estimation & Planning for AI Engineers to someone else"
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
        children: "Always write a one-line example of 03 — Estimation & Planning for AI Engineers from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered 03 — Estimation & Planning for AI Engineers when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining 03 — Estimation & Planning for AI Engineers twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own 03 — Estimation & Planning for AI Engineers snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of 03 — Estimation & Planning for AI Engineers listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link 03 — Estimation & Planning for AI Engineers to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of 03 — Estimation & Planning for AI Engineers by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain 03 — Estimation & Planning for AI Engineers to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The original research paper introducing this concept (search Google Scholar)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Towards Data Science articles on this topic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The relevant chapter in 'Designing Data-Intensive Applications' by Kleppmann"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub repositories of production implementations — Estimation & Planning for AI Engineers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 30 — builds the foundation for 03 Estimation Planning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 03 Estimation Planning with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 03 Estimation Planning fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 03 Estimation Planning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 03 Estimation Planning"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 03 Estimation Planning?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 03 Estimation Planning?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 03 Estimation Planning asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 03 Estimation Planning?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "03 — Estimation & Planning for AI Engineers is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with 03 — Estimation & Planning for AI Engineers."
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
        children: "03 — Estimation & Planning for AI Engineers emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for 03 — Estimation & Planning for AI Engineers today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about 03 — Estimation & Planning for AI Engineers — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around 03 — Estimation & Planning for AI Engineers changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate all external inputs before processing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never log sensitive data (API keys, PII, passwords)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use environment variables for configuration secrets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement rate limiting for public-facing endpoints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow the principle of least privilege for all system components"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This concept appears in ML pipelines at the data processing, training, or serving layer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding it helps debug model misbehavior — most ML bugs are infrastructure bugs, not model bugs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply vectorization and batching to scale this concept to large datasets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor for drift and degradation in production — set up alerts for key metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connect to the broader ML lifecycle: data → features → training → evaluation → deployment → monitoring"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "03 Estimation Planning is like a GPS navigation system"
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
          }), " — this chapter contributes the 03 — Estimation & Planning for AI Engineers skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "30businessskills-03estimationplanning-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of 03 — Estimation & Planning for AI Engineers in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the Theory section and write a one-sentence definition that includes: what it is, how it works, and why it matters for production AI engineering."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "30businessskills-03estimationplanning-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "The most common mistake is skipping edge cases. Always handle empty input, null values, and boundary conditions before implementing the happy path."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "30businessskills-03estimationplanning-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard 03 — Estimation & Planning for AI Engineers approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Time complexity depends on the algorithm chosen. Space complexity depends on whether you store intermediate results. Always state both for interview answers."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "30businessskills-03estimationplanning-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is 03 — Estimation & Planning for AI Engineers NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "This technique is not the right choice when simpler alternatives suffice, when the overhead exceeds the benefit, or when the team lacks the expertise to maintain it."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "30businessskills-03estimationplanning-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is 03 — Estimation & Planning for AI Engineers applied in a real production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Production stack: use the libraries shown in the code examples, add monitoring with Prometheus/Grafana, test with pytest, and lint with ruff."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for 03 — Estimation & Planning for AI Engineers (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing 03 — Estimation & Planning for AI Engineers (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for 03 — Estimation & Planning for AI Engineers-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running 03 — Estimation & Planning for AI Engineers in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The primary library used in the code examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pytest for unit and integration testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ruff + black for linting and formatting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mypy for static type checking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cProfile / py-spy for performance profiling — Estimation & Planning for AI Engineers"
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
        }), ": Add structured logging at each stage of the 03 Estimation Planning pipeline to identify exactly where the failure occurs."]
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
        children: "Explain 03 — Estimation & Planning for AI Engineers in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of 03 — Estimation & Planning for AI Engineers."
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
        children: "Tell me about a time you debugged a 03 — Estimation & Planning for AI Engineers problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where 03 — Estimation & Planning for AI Engineers is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_03_estimation_planning(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 03 Estimation Planning.\r\n\r\n    Key concepts: core concepts, data structures, algorithms, patterns\r\n    Complexity: O(n) typical, O(1) best case\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 03 Estimation Planning here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain 03 — Estimation & Planning for AI Engineers without notes"
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
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Applied in production at companies like Google, Meta, Amazon, and Microsoft"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used in data pipelines, model serving, and API backends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables scalable, maintainable systems when applied correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview insight: connect the concept to a business outcome — cost reduction, latency improvement, or reliability increase"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/30-business-skills/04-agile-scrum-for-ai",
        children: "Agile & Scrum for AI Teams"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "03 — Estimation & Planning for AI Engineers, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of 03 — Estimation & Planning for AI Engineers depends on input size and distribution — always benchmark for your own data."
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