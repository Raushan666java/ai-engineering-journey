"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[38182],{

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
    em: "em",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Reference[Reference Story]\n        R1[Login page: 3 points]\n    end\n    subgraph Compare[Current Task]\n        C1[Model training pipeline]\n    end\n    subgraph Estimate[Estimate]\n        E1[Compare complexity]\n        E2[Consider risk & effort]\n        E3[Assign: 8 points]\n    end\n\n    R1 --> Compare\n    Compare --> E1\n    E1 --> E2\n    E2 --> E3\n"
      })
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
        children: "\"\"\"\nStory point estimation helper for AI/ML teams.\n\nProvides tools to calibrate story points against a team's\nhistorical velocity and estimate task duration.\n\"\"\"\n\nfrom dataclasses import dataclass, field\nfrom typing import Optional\n\n@dataclass\nclass SprintHistory:\n    \"\"\"Tracks a team's historical velocity for calibration.\"\"\"\n\n    sprint_points: list[int] = field(default_factory=list)\n    sprint_days: list[int] = field(default_factory=list)\n\n    @property\n    def average_velocity(self) -> float:\n        \"\"\"Average story points completed per sprint.\"\"\"\n        if not self.sprint_points:\n            return 0.0\n        return sum(self.sprint_points) / len(self.sprint_points)\n\n    @property\n    def velocity_stddev(self) -> float:\n        \"\"\"Standard deviation of velocity — higher means less predictable.\"\"\"\n        if len(self.sprint_points) < 2:\n            return 0.0\n        mean = self.average_velocity\n        variance = sum(\n            (p - mean) ** 2 for p in self.sprint_points\n        ) / (len(self.sprint_points) - 1)\n        return variance ** 0.5\n\n    @property\n    def points_per_day(self) -> float:\n        \"\"\"Average story points delivered per calendar day.\"\"\"\n        total_days = sum(self.sprint_days) if self.sprint_days else 1\n        return self.average_velocity / (total_days / len(self.sprint_days)) if self.sprint_days else 0\n\ndef estimate_with_confidence(\n    story_points: int,\n    history: SprintHistory,\n    confidence_level: float = 0.90,\n) -> dict:\n    \"\"\"\n    Estimate sprint duration with confidence interval.\n\n    Uses team historical velocity to predict how many sprints\n    a given workload will take.\n\n    Args:\n        story_points: Total story points for the work.\n        history: Team's historical sprint data.\n        confidence_level: How certain to be (0.80, 0.90, 0.95).\n\n    Returns:\n        Dict with sprint estimates at different confidence levels.\n    \"\"\"\n    if history.average_velocity == 0:\n        return {\"error\": \"No historical data available\"}\n\n    # Z-scores for common confidence levels\n    z_scores = {0.80: 1.28, 0.85: 1.44, 0.90: 1.645, 0.95: 1.96}\n\n    z = z_scores.get(confidence_level, 1.645)\n\n    # Most likely sprints needed\n    sprints_ml = story_points / history.average_velocity\n\n    # Conservative estimate (with uncertainty)\n    if history.velocity_stddev > 0:\n        # Propagate velocity uncertainty into sprints\n        relative_uncertainty = (\n            history.velocity_stddev / history.average_velocity\n        )\n        sprints_conservative = sprints_ml * (1 + z * relative_uncertainty)\n    else:\n        sprints_conservative = sprints_ml\n\n    return {\n        \"total_story_points\": story_points,\n        \"avg_velocity\": round(history.average_velocity, 1),\n        \"velocity_stddev\": round(history.velocity_stddev, 1),\n        \"sprints_ml\": round(sprints_ml, 1),\n        \"sprints_pessimistic\": round(sprints_conservative, 1),\n        \"confidence_level\": confidence_level,\n        \"interpretation\": (\n            f\"We expect {sprints_ml:.1f} sprints most likely, \"\n            f\"but plan for {sprints_conservative:.1f} sprints \"\n            f\"at {confidence_level * 100:.0f}% confidence.\"\n        ),\n    }\n\n# Example: Calibrate with team history\nteam_history = SprintHistory(\n    sprint_points=[18, 22, 20, 15, 25, 19, 21, 23],\n    sprint_days=[14, 14, 14, 14, 14, 14, 14, 14],\n)\n\nprint(\"=== Team Velocity Profile ===\")\nprint(f\"Average velocity:  {team_history.average_velocity:.1f} pts/sprint\")\nprint(f\"Velocity std dev:  {team_history.velocity_stddev:.1f} pts/sprint\")\nprint(f\"Points per day:    {team_history.points_per_day:.2f}\")\nprint()\n\n# Estimate a new feature set\nfeature_points = 40\nresult = estimate_with_confidence(\n    story_points=feature_points,\n    history=team_history,\n    confidence_level=0.90,\n)\nprint(\"=== Estimate for 40-point Feature Set ===\")\nprint(result[\"interpretation\"])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Team Velocity Profile ===\nAverage velocity:  20.4 pts/sprint\nVelocity std dev:  3.2 pts/sprint\nPoints per day:    1.46\n\n=== Estimate for 40-point Feature Set ===\nWe expect 2.0 sprints most likely, but plan for 2.5 sprints at 90% confidence.\n"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Sizes[Size Categories]\n        XS[< 1 sprint]\n        S[1-2 sprints]\n        M[2-4 sprints]\n        L[4-8 sprints]\n        XL[8+ sprints / unknown]\n    end\n\n    subgraph ML_Examples[ML Examples]\n        E1[XS: Update eval metric]\n        E2[S: Add data augmentation]\n        E3[M: Implement new model architecture]\n        E4[L: Build full training pipeline]\n        E5[XL: Research novel approach]\n    end\n\n    XS --> E1\n    S --> E2\n    M --> E3\n    L --> E4\n    XL --> E5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nT-shirt sizing conversion and sprint planning tool.\n\nConverts coarse t-shirt estimates into sprint counts\nand provides budget ranges for planning.\n\"\"\"\n\ndef tshirt_to_sprints(\n    size: str,\n    velocity: float = 20.0,\n) -> dict:\n    \"\"\"\n    Convert t-shirt size to sprint range.\n\n    Args:\n        size: XS, S, M, L, or XL\n        velocity: Team's sprint velocity in story points.\n\n    Returns:\n        Dict with point range and sprint range.\n    \"\"\"\n    size_ranges = {\n        \"XS\": (1, 3),\n        \"S\": (3, 8),\n        \"M\": (8, 20),\n        \"L\": (20, 50),\n        \"XL\": (50, 200),\n    }\n\n    points = size_ranges.get(size.upper())\n    if not points:\n        return {\"error\": f\"Unknown size: {size}. Use XS, S, M, L, XL.\"}\n\n    sprints_low = points[0] / velocity\n    sprints_high = points[1] / velocity\n\n    return {\n        \"size\": size.upper(),\n        \"point_range\": points,\n        \"sprint_range\": (\n            round(sprints_low, 1),\n            round(sprints_high, 1),\n        ),\n        \"budget_weeks\": (\n            round(sprints_low * 2, 1),\n            round(sprints_high * 2, 1),\n        ),\n        \"recommendation\": (\n            f\"Budget {sprints_low:.1f} to {sprints_high:.1f} sprints \"\n            f\"({sprints_low * 2:.1f} to {sprints_high * 2:.1f} weeks) \"\n            f\"for {size.upper()} work.\"\n        ),\n    }\n\ndef estimate_effort(\n    task_description: str,\n    complexity: str,\n    unknowns: list[str],\n) -> str:\n    \"\"\"\n    Provide a quick t-shirt estimate based on description.\n\n    Args:\n        task_description: Brief task description.\n        complexity: easy, moderate, hard, exploratory.\n        unknowns: List of known unknowns.\n\n    Returns:\n        Suggested t-shirt size and reasoning.\n    \"\"\"\n    complexity_map = {\n        \"easy\": \"XS\",\n        \"moderate\": \"S\",\n        \"hard\": \"M\",\n        \"exploratory\": \"L\",\n    }\n\n    # Add a size for every 3 unknowns\n    unknown_bonus = len(unknowns) // 3\n    base_size = complexity_map.get(complexity, \"M\")\n    size_order = [\"XS\", \"S\", \"M\", \"L\", \"XL\"]\n    base_idx = size_order.index(base_size)\n    final_idx = min(base_idx + unknown_bonus, len(size_order) - 1)\n    final_size = size_order[final_idx]\n\n    return (\n        f\"Task: {task_description}\\n\"\n        f\"Complexity: {complexity}\\n\"\n        f\"Unknowns: {', '.join(unknowns) if unknowns else 'None'}\\n\"\n        f\"Suggested size: {final_size}\\n\"\n        f\"Reasoning: Base size {base_size} + \"\n        f\"{unknown_bonus} increment(s) for unknowns → {final_size}\"\n    )\n\n# Example usage\nsizes = [\"XS\", \"S\", \"M\", \"L\", \"XL\"]\nfor size in sizes:\n    result = tshirt_to_sprints(size, velocity=20)\n    print(f\"{size:>4}: {result['recommendation']}\")\n\nprint(\"\\n=== Quick Estimate ===\")\nprint(\n    estimate_effort(\n        task_description=\"Fine-tune LLM on custom dataset\",\n        complexity=\"hard\",\n        unknowns=[\n            \"Data quality unknown\",\n            \"Hardware availability\",\n            \"Optimal hyperparameters\",\n            \"Evaluation metric choice\",\n        ],\n    )\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "  XS: Budget 0.1 to 0.2 sprints (0.1 to 0.2 weeks) for XS work.\n   S: Budget 0.2 to 0.4 sprints (0.2 to 0.4 weeks) for S work.\n   M: Budget 0.4 to 1.0 sprints (0.4 to 1.0 weeks) for M work.\n   L: Budget 1.0 to 2.5 sprints (1.0 to 2.5 weeks) for L work.\n  XL: Budget 2.5 to 10.0 sprints (2.5 to 10.0 weeks) for XL work.\n\n=== Quick Estimate ===\nTask: Fine-tune LLM on custom dataset\nComplexity: hard\nUnknowns: Data quality unknown, Hardware availability, Optimal hyperparameters, Evaluation metric choice\nSuggested size: L\nReasoning: Base size M + 1 increment(s) for unknowns → L\n"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant PM as Product Manager\n    participant TL as Tech Lead\n    participant Eng as Engineer\n    participant DS as Data Scientist\n\n    PM->>All: Presents story: \"Build data validation pipeline\"\n    Note over All: Each person picks a card\n    PM->>PM: Picks 5\n    TL->>TL: Picks 8\n    Eng->>Eng: Picks 8\n    DS->>DS: Picks 13\n    All->>All: Reveal simultaneously\n    Note over All: Disagreement! 5 vs 13\n    DS->>All: \"Data quality is unknown — might need 2x time\"\n    TL->>All: \"We have a template from last project\"\n    Eng->>All: \"But integrating new sources adds risk\"\n    PM->>All: \"Let's re-vote after discussion\"\n    Note over All: Second round: everyone picks 8\n    PM->>PM: Records: 8 points\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nPlanning poker simulator for AI estimation sessions.\n\nModels how teams converge on estimates through\ndiscussion and re-voting rounds.\n\"\"\"\n\nimport random\nfrom typing import Optional\n\nclass PlanningPokerSession:\n    \"\"\"\n    Simulate a planning poker estimation session.\n\n    Uses different personas with distinct estimation biases\n    to model realistic team behavior.\n    \"\"\"\n\n    POINT_CARD_VALUES = [1, 2, 3, 5, 8, 13, 21]\n\n    def __init__(\n        self,\n        story_description: str,\n        participants: list[str],\n        seed: Optional[int] = None,\n    ):\n        self.story = story_description\n        self.participants = participants\n        self.rng = random.Random(seed)\n        self.history: list[dict] = []\n\n    def _simulate_estimate(self, persona: str) -> int:\n        \"\"\"\n        Generate an estimate based on persona tendencies.\n        \"\"\"\n        biases = {\n            \"optimist\": {\"mean\": 3, \"std\": 2},\n            \"realist\": {\"mean\": 5, \"std\": 3},\n            \"pessimist\": {\"mean\": 8, \"std\": 5},\n            \"senior\": {\"mean\": 5, \"std\": 1},\n            \"junior\": {\"mean\": 8, \"std\": 5},\n        }\n\n        # Assign persona or use default\n        persona_map = {\n            \"pm\": \"optimist\",\n            \"tech_lead\": \"realist\",\n            \"senior_dev\": \"senior\",\n            \"junior_dev\": \"junior\",\n            \"data_scientist\": \"pessimist\",\n            \"ml_engineer\": \"realist\",\n        }\n\n        role = persona_map.get(persona, \"realist\")\n        bias = biases[role]\n        estimate = int(\n            self.rng.gauss(bias[\"mean\"], bias[\"std\"])\n        )\n        # Clamp to valid card values\n        estimate = max(self.POINT_CARD_VALUES[0], estimate)\n        estimate = min(self.POINT_CARD_VALUES[-1], estimate)\n        # Round to nearest Fibonacci\n        return min(\n            self.POINT_CARD_VALUES,\n            key=lambda x: abs(x - estimate),\n        )\n\n    def run_round(self) -> dict:\n        \"\"\"\n        Run one estimation round. Returns votes and analysis.\n        \"\"\"\n        votes = {}\n        for participant in self.participants:\n            votes[participant] = self._simulate_estimate(participant)\n\n        values = list(votes.values())\n        avg = sum(values) / len(values)\n        spread = max(values) - min(values)\n\n        round_data = {\n            \"round\": len(self.history) + 1,\n            \"votes\": votes,\n            \"average\": round(avg, 1),\n            \"spread\": spread,\n            \"consensus\": spread <= 5,\n        }\n        self.history.append(round_data)\n        return round_data\n\n    def run_session(self, max_rounds: int = 3) -> dict:\n        \"\"\"\n        Run estimation rounds until consensus or max rounds.\n        \"\"\"\n        for _ in range(max_rounds):\n            round_data = self.run_round()\n            if round_data[\"consensus\"]:\n                final_estimate = int(round(round_data[\"average\"]))\n                return {\n                    \"story\": self.story,\n                    \"rounds\": len(self.history),\n                    \"final_estimate\": final_estimate,\n                    \"history\": self.history,\n                    \"status\": \"consensus_reached\",\n                }\n\n        # If no consensus, use median of last round\n        last_votes = list(self.history[-1][\"votes\"].values())\n        final = sorted(last_votes)[len(last_votes) // 2]\n        return {\n            \"story\": self.story,\n            \"rounds\": len(self.history),\n            \"final_estimate\": final,\n            \"history\": self.history,\n            \"status\": \"forced_consensus\",\n            \"note\": \"Used median after max rounds\",\n        }\n\n# Example: Simulate a planning poker session\nsession = PlanningPokerSession(\n    story_description=\"Implement online feature store for model serving\",\n    participants=[\n        \"pm\",\n        \"tech_lead\",\n        \"senior_dev\",\n        \"junior_dev\",\n        \"data_scientist\",\n        \"ml_engineer\",\n    ],\n    seed=42,\n)\n\nresult = session.run_session(max_rounds=3)\nprint(f\"=== Planning Poker: {result['story']} ===\\n\")\nfor round_data in result[\"history\"]:\n    print(f\"--- Round {round_data['round']} ---\")\n    for person, vote in round_data[\"votes\"].items():\n        print(f\"  {person:<15} {vote:>3} points\")\n    print(f\"  {'Average:':<15} {round_data['average']:>5.1f}\")\n    print(f\"  {'Spread:':<15} {round_data['spread']:>3}\")\n    print(f\"  {'Consensus:':<15} {round_data['consensus']}\")\n    print()\n\nprint(f\"Final estimate: {result['final_estimate']} points\")\nprint(f\"Status: {result['status']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Planning Poker: Implement online feature store for model serving ===\n\n--- Round 1 ---\n  pm              13 points\n  tech_lead        5 points\n  senior_dev       5 points\n  junior_dev       5 points\n  data_scientist  13 points\n  ml_engineer      8 points\n  Average:         8.2\n  Spread:          8\n  Consensus:       False\n\n--- Round 2 ---\n  pm               8 points\n  tech_lead        8 points\n  senior_dev       5 points\n  junior_dev       5 points\n  data_scientist   8 points\n  ml_engineer      8 points\n  Average:         7.0\n  Spread:          3\n  Consensus:       True\n\nFinal estimate: 7 points\nStatus: consensus_reached\n"
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
        children: "\"\"\"\nThree-point estimation for AI projects.\n\nUses PERT (Program Evaluation and Review Technique)\nweighted average for expected duration.\n\"\"\"\n\ndef three_point_estimate(\n    optimistic: float,\n    most_likely: float,\n    pessimistic: float,\n    task_name: str = \"\",\n) -> dict:\n    \"\"\"\n    Calculate expected duration using PERT weighted average.\n\n    Formula: (O + 4*ML + P) / 6\n\n    Args:\n        optimistic: Best-case scenario (hours, days, sprints).\n        most_likely: Most realistic scenario.\n        pessimistic: Worst-case scenario.\n        task_name: Optional task name for display.\n\n    Returns:\n        Dict with expected duration and standard deviation.\n    \"\"\"\n    expected = (optimistic + 4 * most_likely + pessimistic) / 6\n    std_dev = (pessimistic - optimistic) / 6\n\n    return {\n        \"task\": task_name,\n        \"optimistic\": optimistic,\n        \"most_likely\": most_likely,\n        \"pessimistic\": pessimistic,\n        \"expected\": round(expected, 1),\n        \"std_dev\": round(std_dev, 1),\n        \"p80_estimate\": round(expected + 0.84 * std_dev, 1),\n        \"p95_estimate\": round(expected + 1.645 * std_dev, 1),\n    }\n\ndef estimate_project(\n    tasks: list[dict],\n) -> dict:\n    \"\"\"\n    Estimate a full project by summing individual task estimates.\n\n    Each task dict: {\n        'name': str,\n        'optimistic': float,\n        'most_likely': float,\n        'pessimistic': float\n    }\n\n    Returns:\n        Dict with overall project estimate.\n    \"\"\"\n    task_estimates = []\n    for task in tasks:\n        est = three_point_estimate(\n            task[\"optimistic\"],\n            task[\"most_likely\"],\n            task[\"pessimistic\"],\n            task[\"name\"],\n        )\n        task_estimates.append(est)\n\n    total_expected = sum(t[\"expected\"] for t in task_estimates)\n    total_variance = sum(t[\"std_dev\"] ** 2 for t in task_estimates)\n    total_std = total_variance ** 0.5\n\n    return {\n        \"task_estimates\": task_estimates,\n        \"total_expected\": round(total_expected, 1),\n        \"total_std\": round(total_std, 1),\n        \"p80_total\": round(total_expected + 0.84 * total_std, 1),\n        \"p95_total\": round(total_expected + 1.645 * total_std, 1),\n        \"margin_at_80pct\": round(\n            0.84 * total_std / total_expected * 100, 1\n        ),\n    }\n\n# Example: Estimate an ML project\nml_project_tasks = [\n    {\n        \"name\": \"Data collection & cleaning\",\n        \"optimistic\": 3,\n        \"most_likely\": 5,\n        \"pessimistic\": 10,\n    },\n    {\n        \"name\": \"Feature engineering\",\n        \"optimistic\": 2,\n        \"most_likely\": 4,\n        \"pessimistic\": 8,\n    },\n    {\n        \"name\": \"Model development & training\",\n        \"optimistic\": 5,\n        \"most_likely\": 10,\n        \"pessimistic\": 20,\n    },\n    {\n        \"name\": \"Evaluation & tuning\",\n        \"optimistic\": 2,\n        \"most_likely\": 4,\n        \"pessimistic\": 8,\n    },\n    {\n        \"name\": \"Deployment & monitoring\",\n        \"optimistic\": 3,\n        \"most_likely\": 5,\n        \"pessimistic\": 10,\n    },\n]\n\nproj = estimate_project(ml_project_tasks)\n\nprint(\"=== Three-Point Estimate: ML Project ===\\n\")\nprint(f\"{'Task':<35} {'O':>5} {'ML':>5} {'P':>5} \"\n      f\"{'E':>6} {'SD':>5}\")\nprint(\"-\" * 65)\nfor t in proj[\"task_estimates\"]:\n    print(\n        f\"{t['task']:<35} {t['optimistic']:>5.0f} \"\n        f\"{t['most_likely']:>5.0f} {t['pessimistic']:>5.0f} \"\n        f\"{t['expected']:>6.1f} {t['std_dev']:>5.1f}\"\n    )\nprint(\"-\" * 65)\nprint(f\"{'TOTAL':<35} {'':>5} {'':>5} {'':>5} \"\n      f\"{proj['total_expected']:>6.1f} {proj['total_std']:>5.1f}\")\n\nprint(f\"\\nP80 estimate (84% confidence): {proj['p80_total']:.1f} days\")\nprint(f\"P95 estimate (95% confidence): {proj['p95_total']:.1f} days\")\nprint(f\"Buffer needed for P95: +{proj['margin_at_80pct']:.0f}%\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Three-Point Estimate: ML Project ===\n\nTask                                 O     ML     P      E    SD\nData collection & cleaning           3     5    10    5.5   1.2\nFeature engineering                  2     4     8    4.3   1.0\nModel development & training         5    10    20   10.8   2.5\nEvaluation & tuning                  2     4     8    4.3   1.0\nDeployment & monitoring              3     5    10    5.5   1.2\n------------------------------------------------------------------\nTOTAL                                                       3.4\n\nP80 estimate (84% confidence): 33.1 days\nP95 estimate (95% confidence): 35.7 days\nBuffer needed for P95: +11.6%\n"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Known[Known Knowns]\n        K1[Standard CRUD operations]\n        K2[API integrations]\n        K3[Unit testing]\n        Estimate: +/- 10%\n    end\n    subgraph Unknown[Known Unknowns]\n        U1[Model convergence]\n        U2[Data quality issues]\n        U3[Hyperparameter tuning]\n        Estimate: +/- 50%\n    end\n    subgraph Chaos[Unknown Unknowns]\n        C1[Novel architecture fails]\n        C2[Data distribution shift]\n        C3[Infrastructure surprises]\n        Estimate: +/- 200%\n    end\n\n    Known --> Unknown --> Chaos\n"
      })
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
        children: "\"\"\"\nML uncertainty estimation model.\n\nProvides realistic confidence intervals for different\ncategories of AI/ML work.\n\"\"\"\n\nfrom enum import Enum\n\nclass MLTaskCategory(Enum):\n    ENGINEERING = \"engineering\"\n    APPLIED_ML = \"applied_ml\"\n    EXPLORATORY_ML = \"exploratory_ml\"\n    RESEARCH = \"research\"\n\nUNCERTAINTY_PROFILES = {\n    MLTaskCategory.ENGINEERING: {\n        \"error_range\": (0.10, 0.20),\n        \"description\": \"Standard engineering with ML libraries\",\n        \"examples\": [\n            \"Deploy model to production endpoint\",\n            \"Write data preprocessing pipeline\",\n            \"Set up model monitoring dashboard\",\n        ],\n    },\n    MLTaskCategory.APPLIED_ML: {\n        \"error_range\": (0.30, 0.60),\n        \"description\": \"Apply known technique to new problem\",\n        \"examples\": [\n            \"Fine-tune BERT for text classification\",\n            \"Train recommendation model on user data\",\n            \"Transfer learning for image recognition\",\n        ],\n    },\n    MLTaskCategory.EXPLORATORY_ML: {\n        \"error_range\": (0.50, 1.00),\n        \"description\": \"Explore which technique works best\",\n        \"examples\": [\n            \"Compare 5 model architectures for problem\",\n            \"Determine if data is sufficient for deep learning\",\n            \"Evaluate SOTA vs practical approaches\",\n        ],\n    },\n    MLTaskCategory.RESEARCH: {\n        \"error_range\": (1.00, 3.00),\n        \"description\": \"Unknown if solution exists\",\n        \"examples\": [\n            \"Novel model architecture for underexplored problem\",\n            \"Prove theoretical bounds on model behavior\",\n            \"Achieve human-level performance on hard task\",\n        ],\n    },\n}\n\ndef estimate_ml_task(\n    category: MLTaskCategory,\n    base_estimate_days: float,\n    include_buffer: bool = True,\n) -> dict:\n    \"\"\"\n    Produce a realistic ML estimate with uncertainty bounds.\n\n    Args:\n        category: Type of ML work.\n        base_estimate_days: Naive best-guess estimate.\n        include_buffer: Whether to include management buffer.\n\n    Returns:\n        Dict with low, expected, high, and recommended estimate.\n    \"\"\"\n    profile = UNCERTAINTY_PROFILES[category]\n    low_error, high_error = profile[\"error_range\"]\n\n    optimistic = base_estimate_days * (1 - low_error)\n    pessimistic = base_estimate_days * (1 + high_error)\n    expected = (optimistic + 4 * base_estimate_days + pessimistic) / 6\n\n    # Management buffer (15%)\n    buffer = base_estimate_days * 0.15 if include_buffer else 0\n\n    return {\n        \"category\": category.value,\n        \"description\": profile[\"description\"],\n        \"base_estimate_days\": base_estimate_days,\n        \"optimistic_days\": round(optimistic, 1),\n        \"expected_days\": round(expected, 1),\n        \"pessimistic_days\": round(pessimistic, 1),\n        \"recommended_with_buffer\": round(expected + buffer, 1),\n        \"buffer_days\": round(buffer, 1),\n        \"confidence\": \"High\" if low_error < 0.3 else (\n            \"Medium\" if low_error < 0.6 else \"Low\"\n        ),\n    }\n\n# Example: Compare estimates across task types\ntasks = [\n    (MLTaskCategory.ENGINEERING, \"Deploy model API\", 5),\n    (MLTaskCategory.APPLIED_ML, \"Fine-tune LLM on custom data\", 10),\n    (MLTaskCategory.EXPLORATORY_ML, \"Compare 5 model architectures\", 15),\n    (MLTaskCategory.RESEARCH, \"Novel approach to RL problem\", 30),\n]\n\nprint(\"=== ML Estimation by Task Category ===\\n\")\nprint(f\"{'Category':<20} {'Task':<30} {'Base':>6} {'Expected':>9} \"\n      f\"{'Range':>12} {'Buffer':>7}\")\nprint(\"-\" * 86)\nfor cat, desc, days in tasks:\n    est = estimate_ml_task(cat, days)\n    range_str = (\n        f\"{est['optimistic_days']} - {est['pessimistic_days']}\"\n    )\n    print(\n        f\"{est['category']:<20} {desc:<30} {days:>6.0f} \"\n        f\"{est['expected_days']:>8.1f} \"\n        f\"{range_str:>12} {est['buffer_days']:>6.1f}\"\n    )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== ML Estimation by Task Category ===\n\nCategory             Task                          Base Expected       Range  Buffer\nengineering          Deploy model API                 5      5.0   4.5 - 6.0    0.8\napplied_ml           Fine-tune LLM on custom data    10     10.0   7.0 - 16.0   1.5\nexploratory_ml       Compare 5 model architectures   15     15.0  7.5 - 30.0    2.2\nresearch             Novel approach to RL problem    30     35.0  0.0 - 120.0   4.5\n"
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
        children: "\"\"\"\nResearch vs Engineering decomposition for ML tasks.\n\nHelps teams identify which parts of ML work are\npredictable (engineering) vs uncertain (research).\n\"\"\"\n\ndef decompose_ml_work(\n    task_description: str,\n    research_components: list[str],\n    engineering_components: list[str],\n    unknowns: list[str],\n) -> dict:\n    \"\"\"\n    Analyze ML work and separate research from engineering.\n\n    Args:\n        task_description: Overall task.\n        research_components: Parts requiring experimentation.\n        engineering_components: Parts with known solutions.\n        unknowns: Known unknowns affecting both tracks.\n\n    Returns:\n        Dict with split analysis and recommendation.\n    \"\"\"\n    research_ratio = len(research_components) / (\n        len(research_components) + len(engineering_components)\n    )\n\n    # Recommended approach based on research ratio\n    if research_ratio < 0.2:\n        recommendation = \"Mostly engineering. Use standard sprint planning.\"\n    elif research_ratio < 0.4:\n        recommendation = (\n            \"Mix of research and engineering. \"\n            \"Timebox research phase before committing to full estimate.\"\n        )\n    elif research_ratio < 0.6:\n        recommendation = (\n            \"Heavy research component. Split into 2-week research spike, \"\n            \"then re-estimate engineering work.\"\n        )\n    else:\n        recommendation = (\n            \"Primarily research. Use iterative exploration with \"\n            \"2-week timeboxes. Do not commit to delivery date.\"\n        )\n\n    return {\n        \"task\": task_description,\n        \"research_components\": research_components,\n        \"engineering_components\": engineering_components,\n        \"research_ratio\": round(research_ratio, 2),\n        \"unknowns\": unknowns,\n        \"recommendation\": recommendation,\n    }\n\n# Example: Fine-tuning an LLM\nresult = decompose_ml_work(\n    task_description=\"Fine-tune open-source LLM for customer support\",\n    research_components=[\n        \"Find optimal learning rate and LoRA rank\",\n        \"Determine best prompt template format\",\n        \"Evaluate whether PPO or DPO improves quality\",\n    ],\n    engineering_components=[\n        \"Set up training infrastructure (GPU cluster)\",\n        \"Build data preprocessing pipeline\",\n        \"Create evaluation harness with test set\",\n        \"Deploy model to inference endpoint\",\n        \"Set up monitoring and logging\",\n    ],\n    unknowns=[\n        \"Whether 1000 examples is enough\",\n        \"GPU availability on cluster\",\n        \"Which evaluation metric correlates with user satisfaction\",\n    ],\n)\n\nprint(\"=== Research vs Engineering Decomposition ===\\n\")\nprint(f\"Task: {result['task']}\")\nprint(f\"\\nResearch components ({len(result['research_components'])}):\")\nfor c in result['research_components']:\n    print(f\"  - {c}\")\nprint(f\"\\nEngineering components ({len(result['engineering_components'])}):\")\nfor c in result['engineering_components']:\n    print(f\"  - {c}\")\nprint(f\"\\nResearch ratio: {result['research_ratio']:.0%}\")\nprint(f\"Unknowns: {len(result['unknowns'])}\")\nprint(f\"\\nRecommendation: {result['recommendation']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Research vs Engineering Decomposition ===\n\nTask: Fine-tune open-source LLM for customer support\n\nResearch components (3):\n  - Find optimal learning rate and LoRA rank\n  - Determine best prompt template format\n  - Evaluate whether PPO or DPO improves quality\n\nEngineering components (5):\n  - Set up training infrastructure (GPU cluster)\n  - Build data preprocessing pipeline\n  - Create evaluation harness with test set\n  - Deploy model to inference endpoint\n  - Set up monitoring and logging\n\nResearch ratio: 38%\nUnknowns: 3\n\nRecommendation: Mix of research and engineering.\nTimebox research phase before committing to full estimate.\n"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph DataStatus[Data Readiness Levels]\n        D0[No data / unknown availability]\n        D1[Data source identified]\n        D2[Data collected raw]\n        D3[Data cleaned & validated]\n        D4[Labels/ground truth ready]\n        D5[Feature engineering complete]\n    end\n\n    subgraph Impact[Estimation Impact]\n        I0[Estimate impossible]\n        I1[+200% uncertainty]\n        I2[+100% uncertainty]\n        I3[+50% uncertainty]\n        I4[+20% uncertainty]\n        I5[Standard ML estimate]\n    end\n\n    D0 --> I0\n    D1 --> I1\n    D2 --> I2\n    D3 --> I3\n    D4 --> I4\n    D5 --> I5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nData dependency estimator for ML projects.\n\nAssesses data readiness and adjusts estimates accordingly.\n\"\"\"\n\nfrom enum import IntEnum\n\nclass DataReadinessLevel(IntEnum):\n    NONE = 0\n    SOURCE_IDENTIFIED = 1\n    RAW_COLLECTED = 2\n    CLEANED_VALIDATED = 3\n    LABELS_READY = 4\n    FEATURES_READY = 5\n\nDATA_READINESS_MULTIPLIERS = {\n    DataReadinessLevel.NONE: 3.0,\n    DataReadinessLevel.SOURCE_IDENTIFIED: 2.5,\n    DataReadinessLevel.RAW_COLLECTED: 2.0,\n    DataReadinessLevel.CLEANED_VALIDATED: 1.5,\n    DataReadinessLevel.LABELS_READY: 1.2,\n    DataReadinessLevel.FEATURES_READY: 1.0,\n}\n\nDATA_READINESS_DESCRIPTIONS = {\n    DataReadinessLevel.NONE: \"No data available. Cannot estimate.\",\n    DataReadinessLevel.SOURCE_IDENTIFIED: (\n        \"Source identified but no data collected. \"\n        \"Major discovery risk.\"\n    ),\n    DataReadinessLevel.RAW_COLLECTED: (\n        \"Raw data collected. Expect quality issues.\"\n    ),\n    DataReadinessLevel.CLEANED_VALIDATED: (\n        \"Data cleaned. Most quality issues resolved.\"\n    ),\n    DataReadinessLevel.LABELS_READY: (\n        \"Labels created. Ready for supervised learning.\"\n    ),\n    DataReadinessLevel.FEATURES_READY: (\n        \"Feature engineering done. Standard ML estimate applies.\"\n    ),\n}\n\ndef estimate_with_data_readiness(\n    base_ml_estimate_days: float,\n    data_readiness: DataReadinessLevel,\n    data_volume: str = \"unknown\",\n    label_quality: str = \"unknown\",\n) -> dict:\n    \"\"\"\n    Adjust ML estimate based on data readiness.\n\n    Args:\n        base_ml_estimate_days: Estimate assuming data is ready.\n        data_readiness: Current data readiness level.\n        data_volume: Estimated data volume (small, medium, large).\n        label_quality: Label quality assessment (high, medium, low).\n\n    Returns:\n        Adjusted estimate with data risk factors.\n    \"\"\"\n    multiplier = DATA_READINESS_MULTIPLIERS[data_readiness]\n    adjusted = base_ml_estimate_days * multiplier\n\n    # Additional risk factors\n    volume_risk = {\"small\": 1.0, \"medium\": 1.2, \"large\": 1.5}\n    label_risk = {\"high\": 1.0, \"medium\": 1.3, \"low\": 2.0}\n\n    vol_factor = volume_risk.get(data_volume, 1.2)\n    label_factor = label_risk.get(label_quality, 1.3)\n\n    risk_adjusted = adjusted * vol_factor * label_factor\n\n    return {\n        \"data_readiness\": data_readiness.name,\n        \"readiness_description\": DATA_READINESS_DESCRIPTIONS[\n            data_readiness\n        ],\n        \"base_estimate\": base_ml_estimate_days,\n        \"readiness_multiplier\": multiplier,\n        \"adjusted_for_data\": round(adjusted, 1),\n        \"volume_factor\": vol_factor,\n        \"label_quality_factor\": label_factor,\n        \"final_recommended\": round(risk_adjusted, 1),\n        \"risk_level\": (\n            \"Low\" if multiplier <= 1.2 else\n            \"Medium\" if multiplier <= 1.8 else\n            \"High\" if multiplier <= 2.5 else \"Very High\"\n        ),\n        \"action\": (\n            \"Proceed with estimation\"\n            if data_readiness >= DataReadinessLevel.FEATURES_READY\n            else \"Run data exploration spike first\"\n            if data_readiness >= DataReadinessLevel.RAW_COLLECTED\n            else \"Cannot estimate — start with data discovery\"\n        ),\n    }\n\n# Example: Same ML task at different data readiness levels\nbase = 20  # 20 days base estimate\nreadiness_levels = list(DataReadinessLevel)\n\nprint(\"=== Impact of Data Readiness on ML Estimates ===\\n\")\nprint(f\"Base estimate (data ready): {base} days\\n\")\nprint(f\"{'Level':<10} {'Status':<30} {'Multiplier':>10} \"\n      f\"{'Adjusted':>10} {'Final':>8}\")\nprint(\"-\" * 70)\nfor level in readiness_levels:\n    est = estimate_with_data_readiness(\n        base, level, data_volume=\"medium\", label_quality=\"medium\"\n    )\n    print(\n        f\"{level.value:<10} {level.name:<30} \"\n        f\"{est['readiness_multiplier']:>10.1f}x \"\n        f\"{est['adjusted_for_data']:>8.1f}d \"\n        f\"{est['final_recommended']:>7.1f}d\"\n    )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Impact of Data Readiness on ML Estimates ===\n\nBase estimate (data ready): 20 days\n\nLevel      Status                         Multiplier  Adjusted   Final\n0          NONE                                 3.0x     60.0d   93.6d\n1          SOURCE_IDENTIFIED                    2.5x     50.0d   78.0d\n2          RAW_COLLECTED                        2.0x     40.0d   62.4d\n3          CLEANED_VALIDATED                    1.5x     30.0d   46.8d\n4          LABELS_READY                         1.2x     24.0d   37.4d\n5          FEATURES_READY                       1.0x     20.0d   31.2d\n"
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
        children: "\"\"\"\nExperimentation time estimator.\n\nModels the expected number of experiments needed\nto achieve target performance.\n\"\"\"\n\nimport math\n\ndef estimate_experimentation_time(\n    base_training_time: float,\n    success_rate_per_experiment: float,\n    target_confidence: float = 0.90,\n    parallel_experiments: int = 1,\n) -> dict:\n    \"\"\"\n    Estimate total time accounting for failed experiments.\n\n    Uses geometric distribution to model how many\n    experiments are needed before success.\n\n    Args:\n        base_training_time: Time per experiment (hours).\n        success_rate_per_experiment: Probability any single\n            experiment achieves target.\n        target_confidence: Desired probability of success.\n        parallel_experiments: How many experiments can run\n            in parallel (GPU availability).\n\n    Returns:\n        Dict with expected experiments and time.\n    \"\"\"\n    if success_rate_per_experiment <= 0:\n        return {\"note\": \"Zero success rate. Cannot estimate.\"}\n\n    # Expected experiments until first success (geometric)\n    expected_experiments = 1.0 / success_rate_per_experiment\n\n    # Experiments needed for target confidence\n    # P(success in n tries) = 1 - (1-p)^n >= target\n    # => n >= log(1 - target) / log(1 - p)\n    experiments_for_confidence = math.ceil(\n        math.log(1 - target_confidence)\n        / math.log(1 - success_rate_per_experiment)\n    )\n\n    # Serial time (if running experiments sequentially)\n    serial_time = experiments_for_confidence * base_training_time\n\n    # Parallel time (with parallelism limit)\n    batches = math.ceil(\n        experiments_for_confidence / parallel_experiments\n    )\n    parallel_time = batches * base_training_time\n\n    return {\n        \"success_rate\": success_rate_per_experiment,\n        \"expected_experiments\": round(expected_experiments, 1),\n        \"experiments_for_confidence\": experiments_for_confidence,\n        \"target_confidence\": target_confidence,\n        \"time_per_experiment_hours\": base_training_time,\n        \"serial_time_hours\": round(serial_time, 1),\n        \"parallel_time_hours\": round(parallel_time, 1),\n        \"parallel_experiments\": parallel_experiments,\n        \"recommendation\": (\n            f\"Plan for {experiments_for_confidence} experiments \"\n            f\"({parallel_time:.1f}h with {parallel_experiments} parallel\"\n            f\") to achieve {target_confidence:.0%} confidence.\"\n        ),\n    }\n\n# Example: Hyperparameter tuning\nprint(\"=== Experimentation Time Estimation ===\\n\")\n\nscenarios = [\n    (\"Hyperparameter tuning (10% success rate)\", 0.10, 2, 3),\n    (\"Fine-tuning with known recipe (30%)\", 0.30, 3, 4),\n    (\"Architecture search (5% success)\", 0.05, 4, 2),\n    (\"Standard training with good baseline (50%)\", 0.50, 1, 8),\n]\n\nfor scenario_name, success_rate, time_per_exp, parallel in scenarios:\n    est = estimate_experimentation_time(\n        base_training_time=time_per_exp,\n        success_rate_per_experiment=success_rate,\n        target_confidence=0.90,\n        parallel_experiments=parallel,\n    )\n    print(f\"Scenario: {scenario_name}\")\n    print(f\"  Success rate: {est['success_rate']:.0%}\")\n    print(f\"  Experiments needed: {est['experiments_for_confidence']}\")\n    print(f\"  Serial time: {est['serial_time_hours']:.1f}h\")\n    print(f\"  Parallel time: {est['parallel_time_hours']:.1f}h\")\n    print()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Experimentation Time Estimation ===\n\nScenario: Hyperparameter tuning (10% success rate)\n  Success rate: 10%\n  Experiments needed: 22\n  Serial time: 44.0h\n  Parallel time: 33.0h\n\nScenario: Fine-tuning with known recipe (30%)\n  Success rate: 30%\n  Experiments needed: 7\n  Serial time: 21.0h\n  Parallel time: 14.0h\n\nScenario: Architecture search (5% success)\n  Success rate: 5%\n  Experiments needed: 45\n  Serial time: 180.0h\n  Parallel time: 90.0h\n\nScenario: Standard training with good baseline (50%)\n  Success rate: 50%\n  Experiments needed: 4\n  Serial time: 4.0h\n  Parallel time: 4.0h\n"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Backlog[Raw Backlog]\n        B1[Raw ML ideas]\n        B2[Feature requests]\n        B3[Bug reports]\n        B4[Tech debt items]\n    end\n\n    subgraph Grooming[Grooming Session]\n        G1[Size & estimate]\n        G2[Split large stories]\n        G3[Add acceptance criteria]\n        G4[Prioritize by value]\n        G5[Identify dependencies]\n    end\n\n    subgraph Ready[Ready for Sprint]\n        R1[Estimated stories]\n        R2[With acceptance criteria]\n        R3[Independent & testable]\n    end\n\n    B1 --> G1\n    B2 --> G1\n    B3 --> G1\n    B4 --> G1\n    G1 --> G2\n    G2 --> G3\n    G3 --> G4\n    G4 --> G5\n    G5 --> R1\n    G5 --> R2\n    G5 --> R3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nBacklog grooming and sprint capacity planner for ML teams.\n\"\"\"\n\nfrom dataclasses import dataclass, field\nfrom typing import Optional\n\n@dataclass\nclass BacklogItem:\n    \"\"\"Represents a single backlog item with grooming status.\"\"\"\n\n    title: str\n    description: str\n    story_points: Optional[int] = None\n    acceptance_criteria: list[str] = field(default_factory=list)\n    dependencies: list[str] = field(default_factory=list)\n    data_required: bool = False\n    is_spike: bool = False\n    groomed: bool = False\n\n    def groom(\n        self,\n        points: int,\n        criteria: list[str],\n        is_spike: bool = False,\n    ) -> None:\n        \"\"\"Mark item as groomed with estimate and criteria.\"\"\"\n        self.story_points = points\n        self.acceptance_criteria = criteria\n        self.is_spike = is_spike\n        self.groomed = True\n\nclass SprintPlanner:\n    \"\"\"Plans sprints from a groomed backlog.\"\"\"\n\n    def __init__(self, sprint_capacity_points: int):\n        self.capacity = sprint_capacity_points\n        self.backlog: list[BacklogItem] = []\n        self.sprints: list[list[BacklogItem]] = []\n\n    def add_item(self, item: BacklogItem) -> None:\n        \"\"\"Add a backlog item.\"\"\"\n        self.backlog.append(item)\n\n    def get_groomed_items(self) -> list[BacklogItem]:\n        \"\"\"Return items ready for sprint planning.\"\"\"\n        return [\n            item for item in self.backlog\n            if item.groomed and item.story_points is not None\n        ]\n\n    def plan_sprints(\n        self, max_sprints: int = 5\n    ) -> list[list[BacklogItem]]:\n        \"\"\"\n        Assign groomed items to sprints based on capacity.\n\n        Respects dependency ordering and data readiness.\n        \"\"\"\n        ready = sorted(\n            self.get_groomed_items(),\n            key=lambda x: x.story_points or 999,\n        )\n        planned: list[BacklogItem] = []\n        sprints = []\n\n        for sprint_num in range(max_sprints):\n            if not ready:\n                break\n\n            sprint_backlog = []\n            sprint_points = 0\n\n            for item in ready[:]:\n                if item.title in planned:\n                    continue\n\n                # Check dependencies\n                deps_met = all(\n                    dep in planned for dep in item.dependencies\n                )\n                if not deps_met:\n                    continue\n\n                if sprint_points + (item.story_points or 0) <= self.capacity:\n                    sprint_backlog.append(item)\n                    sprint_points += item.story_points or 0\n                    planned.append(item.title)\n                    ready.remove(item)\n\n            if sprint_backlog:\n                sprints.append(sprint_backlog)\n\n        self.sprints = sprints\n        return sprints\n\n    def print_plan(self) -> str:\n        \"\"\"Print formatted sprint plan.\"\"\"\n        output = \"=== Sprint Plan ===\\n\"\n        for i, sprint in enumerate(self.sprints, 1):\n            total = sum(\n                item.story_points or 0 for item in sprint\n            )\n            output += (\n                f\"\\nSprint {i} (Capacity: {self.capacity} pts, \"\n                f\"Assigned: {total} pts):\\n\"\n            )\n            for item in sprint:\n                spike_tag = \" [SPIKE]\" if item.is_spike else \"\"\n                data_tag = \" [NEEDS DATA]\" if item.data_required else \"\"\n                output += (\n                    f\"  {item.story_points:>3} pts - \"\n                    f\"{item.title}{spike_tag}{data_tag}\\n\"\n                )\n        return output\n\n# Example: Plan a sprint for an ML team\nplanner = SprintPlanner(sprint_capacity_points=25)\n\nitems = [\n    BacklogItem(\n        title=\"Data exploration\",\n        description=\"Explore raw data quality and distribution\",\n        data_required=True,\n    ),\n    BacklogItem(\n        title=\"Set up training pipeline\",\n        description=\"Build training infrastructure\",\n        dependencies=[\"Data exploration\"],\n    ),\n    BacklogItem(\n        title=\"Baseline model training\",\n        description=\"Train and evaluate baseline model\",\n        dependencies=[\"Set up training pipeline\"],\n    ),\n    BacklogItem(\n        title=\"Hyperparameter optimization [SPIKE]\",\n        description=\"Timeboxed HP search, 3 days max\",\n        is_spike=True,\n        dependencies=[\"Baseline model training\"],\n    ),\n    BacklogItem(\n        title=\"Model deployment API\",\n        description=\"Deploy model behind FastAPI endpoint\",\n        dependencies=[\"Baseline model training\"],\n    ),\n    BacklogItem(\n        title=\"Monitoring dashboard\",\n        description=\"Build model performance dashboard\",\n        dependencies=[\"Model deployment API\"],\n    ),\n]\n\n# Groom each item\nitem_data = [\n    (5, [\"Data sources identified\", \"Quality report generated\"]),\n    (8, [\"Pipeline runs end-to-end\", \"Training logs captured\"]),\n    (5, [\"Baseline metrics computed\", \"Results reproducible\"]),\n    (3, [\"Best HP configuration identified\", \"Report with findings\"]),\n    (8, [\"API responds in <200ms\", \"Auto-scaling configured\"]),\n    (5, [\"Dashboard shows live metrics\", \"Alerts configured\"]),\n]\n\nfor item, (points, criteria) in zip(items, item_data):\n    is_spike = \"SPIKE\" in item.title\n    item.groom(points, criteria, is_spike=is_spike)\n    planner.add_item(item)\n\n# Plan sprints\nplanner.plan_sprints(max_sprints=3)\nprint(planner.print_plan())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Sprint Plan ===\n\nSprint 1 (Capacity: 25 pts, Assigned: 18 pts):\n    5 pts - Data exploration [NEEDS DATA]\n    8 pts - Set up training pipeline\n    5 pts - Baseline model training\n\nSprint 2 (Capacity: 25 pts, Assigned: 16 pts):\n    3 pts - Hyperparameter optimization [SPIKE] [SPIKE]\n    8 pts - Model deployment API\n    5 pts - Monitoring dashboard\n"
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
        children: "As a [user role]\nI want [capability]\nSo that [benefit]\n\n**Acceptance Criteria:**\n1. Metric threshold: accuracy > 92% on held-out test\n2. Performance constraint: inference < 100ms p99\n3. Data requirement: training data > 10K labeled examples\n4. Edge case: handles missing values gracefully\n5. Integration: outputs in required API format\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nML user story validator.\n\nChecks whether user stories have adequate acceptance criteria\nfor ML work.\n\"\"\"\n\nclass MLUserStory:\n    \"\"\"\n    Represents an ML user story with validation.\n    \"\"\"\n\n    REQUIRED_AC_TYPES = [\n        \"metric_threshold\",\n        \"performance_constraint\",\n        \"edge_case\",\n        \"integration\",\n    ]\n\n    def __init__(\n        self,\n        title: str,\n        role: str,\n        capability: str,\n        benefit: str,\n        acceptance_criteria: list[str],\n    ):\n        self.title = title\n        self.role = role\n        self.capability = capability\n        self.benefit = benefit\n        self.acceptance_criteria = acceptance_criteria\n\n    def validate(self) -> dict:\n        \"\"\"\n        Check if user story is well-formed for ML.\n\n        Returns:\n            Dict with validation results and suggestions.\n        \"\"\"\n        issues = []\n        suggestions = []\n\n        # Check structure\n        if not self.role:\n            issues.append(\"Missing user role\")\n        if not self.capability:\n            issues.append(\"Missing capability\")\n\n        # Check AC types\n        ac_text = \" \".join(self.acceptance_criteria).lower()\n\n        has_metric = any(\n            word in ac_text\n            for word in [\n                \"accuracy\", \"f1\", \"precision\", \"recall\",\n                \"auc\", \"bleu\", \"metric\", \"score\",\n            ]\n        )\n        if not has_metric:\n            suggestions.append(\n                \"Add metric threshold (e.g., accuracy > 90%)\"\n            )\n\n        has_perf = any(\n            word in ac_text\n            for word in [\n                \"latency\", \"ms\", \"seconds\", \"throughput\",\n                \"qps\", \"performance\", \"response time\",\n            ]\n        )\n        if not has_perf:\n            suggestions.append(\n                \"Add performance constraint (e.g., latency < 200ms)\"\n            )\n\n        has_edge = any(\n            word in ac_text\n            for word in [\n                \"edge\", \"missing\", \"error\", \"fallback\",\n                \"failure\", \"exception\", \"corner\",\n            ]\n        )\n        if not has_edge:\n            suggestions.append(\n                \"Add edge case handling (e.g., missing values)\"\n            )\n\n        has_integration = any(\n            word in ac_text\n            for word in [\n                \"api\", \"endpoint\", \"output\", \"format\",\n                \"deploy\", \"pipeline\", \"integrate\",\n            ]\n        )\n        if not has_integration:\n            suggestions.append(\n                \"Add integration specification (e.g., output format)\"\n            )\n\n        quality = \"good\" if len(issues) == 0 and len(suggestions) <= 1 else (\n            \"needs_work\" if len(suggestions) <= 3 else \"incomplete\"\n        )\n\n        return {\n            \"title\": self.title,\n            \"valid\": len(issues) == 0,\n            \"quality\": quality,\n            \"issues\": issues,\n            \"suggestions\": suggestions,\n            \"ac_count\": len(self.acceptance_criteria),\n        }\n\n    def format(self) -> str:\n        \"\"\"Format as a proper user story.\"\"\"\n        lines = [\n            f\"## {self.title}\",\n            \"\",\n            f\"**As a** {self.role}\",\n            f\"**I want** {self.capability}\",\n            f\"**So that** {self.benefit}\",\n            \"\",\n            \"**Acceptance Criteria:**\",\n        ]\n        for i, ac in enumerate(self.acceptance_criteria, 1):\n            lines.append(f\"{i}. {ac}\")\n        return \"\\n\".join(lines)\n\n# Example: Compare good vs incomplete ML user stories\nstories = [\n    MLUserStory(\n        title=\"Content Moderation Model\",\n        role=\"Platform Admin\",\n        capability=\"automatically detect toxic comments\",\n        benefit=\"reduce manual moderation effort by 80%\",\n        acceptance_criteria=[\n            \"Toxic comment recall > 92% on test set\",\n            \"Inference latency < 50ms per comment\",\n            \"Non-toxic false positive rate < 2%\",\n            \"Handles Unicode, emoji, and code-switched text\",\n            \"Outputs score 0-1 via REST API\",\n        ],\n    ),\n    MLUserStory(\n        title=\"Recommendation Engine\",\n        role=\"User\",\n        capability=\"get personalized content recommendations\",\n        benefit=\"find relevant content faster\",\n        acceptance_criteria=[\n            \"Users see recommendations on homepage\",\n        ],\n    ),\n]\n\nfor story in stories:\n    print(story.format())\n    validation = story.validate()\n    print(f\"\\nValidation: {validation['quality']}\")\n    if validation[\"suggestions\"]:\n        print(\"Suggestions:\")\n        for s in validation[\"suggestions\"]:\n            print(f\"  - {s}\")\n    print(\"\\n\" + \"=\" * 50 + \"\\n\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "## Content Moderation Model\n\n**As a** Platform Admin\n**I want** automatically detect toxic comments\n**So that** reduce manual moderation effort by 80%\n\n**Acceptance Criteria:**\n1. Toxic comment recall > 92% on test set\n2. Inference latency < 50ms per comment\n3. Non-toxic false positive rate < 2%\n4. Handles Unicode, emoji, and code-switched text\n5. Outputs score 0-1 via REST API\n\nValidation: good\nSuggestions: (none)\n\n==================================================\n\n## Recommendation Engine\n\n**As a** User\n**I want** get personalized content recommendations\n**So that** find relevant content faster\n\n**Acceptance Criteria:**\n1. Users see recommendations on homepage\n\nValidation: needs_work\nSuggestions:\n  - Add metric threshold (e.g., accuracy > 90%)\n  - Add performance constraint (e.g., latency < 200ms)\n  - Add edge case handling (e.g., missing values)\n  - Add integration specification (e.g., output format)\n\n==================================================\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "33-capacity-planning",
      children: "3.3 Capacity Planning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Capacity planning determines how much work a team can commit to in a sprint."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nSprint capacity calculator for ML teams.\n\nAccounts for non-project activities like meetings,\ncode reviews, and support rotation.\n\"\"\"\n\ndef calculate_sprint_capacity(\n    team_size: int,\n    sprint_days: int = 10,\n    hours_per_day: float = 6.5,\n    meeting_hours_per_week: float = 4.0,\n    support_hours_per_week: float = 3.0,\n    review_hours_per_week: float = 2.0,\n    training_hours_per_week: float = 1.0,\n) -> dict:\n    \"\"\"\n    Calculate true available capacity for project work.\n\n    Hours are subtracted for non-project overhead.\n    Returns available person-days and story point capacity\n    (assuming 1 point ≈ 4 hours of focused work).\n\n    Args:\n        team_size: Number of team members.\n        sprint_days: Working days in sprint.\n        hours_per_day: Focused work hours per day.\n        meeting_hours_per_week: Hours in meetings.\n        support_hours_per_week: Hours on-call / support.\n        review_hours_per_week: Code review hours.\n        training_hours_per_week: Learning & development.\n\n    Returns:\n        Dict with capacity breakdown.\n    \"\"\"\n    total_available_hours = (\n        team_size * sprint_days * hours_per_day\n    )\n\n    # Sprint weeks (usually 2-week sprints)\n    weeks = sprint_days / 5.0\n\n    overhead_hours = (\n        meeting_hours_per_week\n        + support_hours_per_week\n        + review_hours_per_week\n        + training_hours_per_week\n    ) * weeks * team_size\n\n    project_hours = total_available_hours - overhead_hours\n\n    # Assume 1 story point ≈ 4 focused hours\n    # Factor in ML overhead (GPU waiting, data transfers)\n    ml_overhead_factor = 0.80  # 20% ML-specific overhead\n    effective_hours = project_hours * ml_overhead_factor\n\n    story_point_capacity = effective_hours / 4.0\n\n    return {\n        \"team_size\": team_size,\n        \"sprint_days\": sprint_days,\n        \"total_gross_hours\": round(total_available_hours, 1),\n        \"overhead_hours\": round(overhead_hours, 1),\n        \"overhead_breakdown\": {\n            \"meetings\": round(\n                meeting_hours_per_week * weeks * team_size, 1\n            ),\n            \"support\": round(\n                support_hours_per_week * weeks * team_size, 1\n            ),\n            \"reviews\": round(\n                review_hours_per_week * weeks * team_size, 1\n            ),\n            \"training\": round(\n                training_hours_per_week * weeks * team_size, 1\n            ),\n        },\n        \"project_hours\": round(project_hours, 1),\n        \"ml_overhead_deduction\": round(\n            project_hours * (1 - ml_overhead_factor), 1\n        ),\n        \"effective_hours\": round(effective_hours, 1),\n        \"story_point_capacity\": round(story_point_capacity, 0),\n        \"utilization_pct\": round(\n            effective_hours / total_available_hours * 100, 1\n        ),\n    }\n\n# Example: Compare teams of different sizes\nprint(\"=== Sprint Capacity Planning ===\\n\")\nfor team_size in [3, 5, 8]:\n    cap = calculate_sprint_capacity(\n        team_size=team_size,\n        sprint_days=10,\n        hours_per_day=6.5,\n        meeting_hours_per_week=3.5,\n        support_hours_per_week=2.0,\n        review_hours_per_week=2.0,\n        training_hours_per_week=1.0,\n    )\n    print(f\"Team size: {cap['team_size']}\")\n    print(f\"  Gross hours:   {cap['total_gross_hours']:.0f}h\")\n    print(f\"  Overhead:      {cap['overhead_hours']:.0f}h\")\n    print(f\"  Project hours: {cap['project_hours']:.0f}h\")\n    print(f\"  ML overhead:   {cap['ml_overhead_deduction']:.0f}h\")\n    print(f\"  Effective:     {cap['effective_hours']:.0f}h\")\n    print(f\"  Story points:  {cap['story_point_capacity']:.0f}\")\n    print(f\"  Utilization:   {cap['utilization_pct']:.0f}%\")\n    print()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Sprint Capacity Planning ===\n\nTeam size: 3\n  Gross hours:   195.0h\n  Overhead:      51.0h\n  Project hours: 144.0h\n  ML overhead:   28.8h\n  Effective:     115.2h\n  Story points:  29\n  Utilization:   59.1%\n\nTeam size: 5\n  Gross hours:   325.0h\n  Overhead:      85.0h\n  Project hours: 240.0h\n  ML overhead:   48.0h\n  Effective:     192.0h\n  Story points:  48\n  Utilization:   59.1%\n\nTeam size: 8\n  Gross hours:   520.0h\n  Overhead:      136.0h\n  Project hours: 384.0h\n  ML overhead:   76.8h\n  Effective:     307.2h\n  Story points:  77\n  Utilization:   59.1%\n"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Atomic[Atomic ML Units]\n        D[Data: collect, clean, validate, label, split]\n        F[Features: engineer, select, store]\n        T[Training: baseline, optimize, evaluate]\n        I[Infrastructure: pipeline, deploy, monitor]\n        R[Research: spike, experiment, validate]\n    end\n\n    subgraph Traditional[Traditional View]\n        TR[Build recommendation model]\n    end\n\n    subgraph Decomposed[Decomposed View]\n        D1[1. Collect user interaction data]\n        D2[2. Clean & deduplicate logs]\n        D3[3. Create train/test split]\n        D4[4. Engineer user features]\n        D5[5. Engineer item features]\n        D6[6. Implement baseline model]\n        D7[7. Hyperparameter tuning spike]\n        D8[8. Train final model]\n        D9[9. Build deployment pipeline]\n        D10[10. Set up monitoring]\n    end\n\n    Traditional --> Decomposed\n    D1 --> D2 --> D3 --> D4 --> D5 --> D6 --> D7 --> D8 --> D9 --> D10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nML task decomposer with dependency mapping and critical path.\n\"\"\"\n\nfrom dataclasses import dataclass, field\nfrom typing import Optional\n\n@dataclass\nclass MLTask:\n    \"\"\"An atomic ML task with dependencies.\"\"\"\n\n    id: str\n    name: str\n    category: str  # data, feature, training, infra, research\n    estimated_hours: float\n    dependencies: list[str] = field(default_factory=list)\n    assigned_to: Optional[str] = None\n    completed: bool = False\n\nclass MLTaskDecomposer:\n    \"\"\"\n    Decompose high-level ML epics into atomic tasks.\n\n    Provides dependency mapping and critical path analysis.\n    \"\"\"\n\n    def __init__(self, epic_name: str):\n        self.epic = epic_name\n        self.tasks: list[MLTask] = []\n\n    def add_task(self, task: MLTask) -> None:\n        \"\"\"Add an atomic ML task.\"\"\"\n        self.tasks.append(task)\n\n    def decompose(self, epic_description: str) -> list[MLTask]:\n        \"\"\"\n        Decompose a high-level ML epic into standard atomic tasks.\n        \"\"\"\n        standard_tasks = self._generate_standard_tasks(\n            epic_description\n        )\n        self.tasks = standard_tasks\n        return self.tasks\n\n    def _generate_standard_tasks(\n        self, description: str\n    ) -> list[MLTask]:\n        \"\"\"Generate standard ML workflow tasks.\"\"\"\n        return [\n            MLTask(\"D1\", \"Data source identification\", \"data\", 4),\n            MLTask(\"D2\", \"Data collection pipeline\", \"data\", 8,\n                   dependencies=[\"D1\"]),\n            MLTask(\"D3\", \"Data cleaning & validation\", \"data\", 12,\n                   dependencies=[\"D2\"]),\n            MLTask(\"D4\", \"Exploratory data analysis\", \"data\", 6,\n                   dependencies=[\"D3\"]),\n            MLTask(\"D5\", \"Train/test split creation\", \"data\", 2,\n                   dependencies=[\"D3\"]),\n            MLTask(\"F1\", \"Feature engineering\", \"feature\", 16,\n                   dependencies=[\"D4\"]),\n            MLTask(\"F2\", \"Feature validation & selection\", \"feature\", 4,\n                   dependencies=[\"F1\"]),\n            MLTask(\"T1\", \"Baseline model implementation\", \"training\", 8,\n                   dependencies=[\"D5\", \"F2\"]),\n            MLTask(\"T2\", \"Hyperparameter tuning [SPIKE]\", \"training\", 12,\n                   dependencies=[\"T1\"]),\n            MLTask(\"T3\", \"Model evaluation & analysis\", \"training\", 6,\n                   dependencies=[\"T2\"]),\n            MLTask(\"I1\", \"Training pipeline automation\", \"infra\", 12,\n                   dependencies=[\"T1\"]),\n            MLTask(\"I2\", \"Model deployment setup\", \"infra\", 8,\n                   dependencies=[\"T3\", \"I1\"]),\n            MLTask(\"I3\", \"Monitoring & alerting\", \"infra\", 6,\n                   dependencies=[\"I2\"]),\n            MLTask(\"R1\", \"Experiment tracking setup\", \"research\", 4,\n                   dependencies=[\"T1\"]),\n        ]\n\n    def get_critical_path(self) -> list[MLTask]:\n        \"\"\"\n        Find the critical path through dependency graph.\n\n        Uses longest path from start to end tasks.\n        \"\"\"\n        # Build adjacency\n        task_map = {t.id: t for t in self.tasks}\n        dependents: dict[str, list[str]] = {t.id: [] for t in self.tasks}\n\n        for task in self.tasks:\n            for dep_id in task.dependencies:\n                if dep_id in dependents:\n                    dependents[dep_id].append(task.id)\n\n        # Find start tasks (no dependencies)\n        start_tasks = [\n            t for t in self.tasks if not t.dependencies\n        ]\n\n        # DP: longest path\n        memo: dict[str, tuple[float, list[str]]] = {}\n\n        def longest_path(task_id: str) -> tuple[float, list[str]]:\n            \"\"\"Return (total_hours, path) for longest path.\"\"\"\n            if task_id in memo:\n                return memo[task_id]\n\n            task = task_map[task_id]\n            children = dependents.get(task_id, [])\n\n            if not children:\n                result = (task.estimated_hours, [task_id])\n            else:\n                child_paths = [\n                    longest_path(child) for child in children\n                ]\n                best = max(child_paths, key=lambda x: x[0])\n                result = (\n                    best[0] + task.estimated_hours,\n                    [task_id] + best[1],\n                )\n\n            memo[task_id] = result\n            return result\n\n        all_paths = [longest_path(t.id) for t in start_tasks]\n        critical = max(all_paths, key=lambda x: x[0])\n\n        return [task_map[tid] for tid in critical[1]]\n\n    def print_decomposition(self) -> str:\n        \"\"\"Print the full task decomposition with critical path.\"\"\"\n        critical_ids = {\n            t.id for t in self.get_critical_path()\n        }\n\n        output = f\"=== Decomposition: {self.epic} ===\\n\\n\"\n        output += f\"{'ID':<6} {'Task':<35} {'Category':<12} \"\n        output += f\"{'Hours':<8} {'Critical':<10}\\n\"\n        output += \"-\" * 75 + \"\\n\"\n\n        for task in self.tasks:\n            is_critical = task.id in critical_ids\n            output += (\n                f\"{task.id:<6} {task.name:<35} {task.category:<12} \"\n                f\"{task.estimated_hours:<8.0f} \"\n                f\"{'<- CRITICAL' if is_critical else ''}\\n\"\n            )\n\n        total = sum(t.estimated_hours for t in self.tasks)\n        cp_hours = sum(\n            t.estimated_hours for t in self.get_critical_path()\n        )\n        output += \"-\" * 75 + \"\\n\"\n        output += f\"{'TOTAL':<6} {'':<35} {'':<12} {total:<8.0f}\\n\"\n        output += (\n            f\"\\nCritical path length: {cp_hours:.0f} hours \"\n            f\"({cp_hours / 8:.1f} person-days)\\n\"\n        )\n        output += (\n            f\"Total work: {total:.0f} hours \"\n            f\"({total / 8:.1f} person-days)\\n\"\n        )\n        output += (\n            f\"Parallelization potential: \"\n            f\"{(1 - cp_hours / total) * 100:.0f}%\\n\"\n        )\n        return output\n\n# Example: Decompose recommendation model\ndecomposer = MLTaskDecomposer(\"Recommendation Model v2\")\ndecomposer.decompose(\"Build and deploy personalized recommendation model\")\nprint(decomposer.print_decomposition())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Decomposition: Recommendation Model v2 ===\n\nID     Task                                 Category     Hours    Critical\n---------------------------------------------------------------------------\nD1     Data source identification           data         4\nD2     Data collection pipeline             data         8\nD3     Data cleaning & validation           data         12\nD4     Exploratory data analysis            data         6\nD5     Train/test split creation            data         2\nF1     Feature engineering                  feature      16\nF2     Feature validation & selection       feature      4\nT1     Baseline model implementation        training     8        <- CRITICAL\nT2     Hyperparameter tuning [SPIKE]        training     12\nT3     Model evaluation & analysis          training     6\nI1     Training pipeline automation         infra        12\nI2     Model deployment setup               infra        8\nI3     Monitoring & alerting                infra        6\nR1     Experiment tracking setup            research     4\n---------------------------------------------------------------------------\nTOTAL                                                     108\n\nCritical path length: 62.0 hours (7.8 person-days)\nTotal work: 108.0 hours (13.5 person-days)\nParallelization potential: 43%\n"
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
        children: "\"\"\"\nDependency graph visualizer for ML workflows.\n\nMaps task dependencies and identifies blocking issues.\n\"\"\"\n\nclass MLDependencyMapper:\n    \"\"\"\n    Maps and analyzes dependencies in ML projects.\n\n    Identifies blocking dependencies and suggests\n    parallelization opportunities.\n    \"\"\"\n\n    def __init__(self, tasks: list[MLTask]):\n        self.tasks = tasks\n\n    def find_blockers(self) -> list[dict]:\n        \"\"\"\n        Find tasks that block many downstream tasks.\n\n        Returns:\n            List of tasks sorted by number of blocked tasks.\n        \"\"\"\n        task_map = {t.id: t for t in self.tasks}\n        blockers: dict[str, set[str]] = {}\n\n        for task in self.tasks:\n            for dep_id in task.dependencies:\n                if dep_id not in blockers:\n                    blockers[dep_id] = set()\n                blockers[dep_id].add(task.id)\n\n        return sorted(\n            [\n                {\n                    \"task_id\": tid,\n                    \"task_name\": task_map[tid].name,\n                    \"blocks\": len(blocked),\n                    \"blocked_tasks\": sorted(blocked),\n                }\n                for tid, blocked in blockers.items()\n            ],\n            key=lambda x: x[\"blocks\"],\n            reverse=True,\n        )\n\n    def suggest_parallelization(self) -> list[dict]:\n        \"\"\"\n        Identify tasks that can run in parallel.\n\n        Returns:\n            List of parallel batches.\n        \"\"\"\n        task_map = {t.id: t for t in self.tasks}\n        completed: set[str] = set()\n        batches = []\n\n        remaining = {t.id for t in self.tasks}\n\n        while remaining:\n            batch = []\n            for tid in list(remaining):\n                task = task_map[tid]\n                deps_met = all(d in completed for d in task.dependencies)\n                if deps_met:\n                    batch.append(tid)\n\n            if not batch:\n                break  # Circular dependency or cannot proceed\n\n            batches.append(batch)\n            completed.update(batch)\n            remaining -= set(batch)\n\n        return [\n            {\n                \"batch_num\": i + 1,\n                \"total_hours\": sum(\n                    task_map[tid].estimated_hours for tid in batch\n                ),\n                \"tasks\": [\n                    {\n                        \"id\": tid,\n                        \"name\": task_map[tid].name,\n                        \"hours\": task_map[tid].estimated_hours,\n                    }\n                    for tid in batch\n                ],\n            }\n            for i, batch in enumerate(batches)\n        ]\n\n    def print_dependency_report(self) -> str:\n        \"\"\"Generate a full dependency analysis report.\"\"\"\n        output = \"=== Dependency Analysis Report ===\\n\\n\"\n\n        # Top blockers\n        output += \"Top Blockers:\\n\"\n        blockers = self.find_blockers()\n        for b in blockers[:5]:\n            output += (\n                f\"  {b['task_id']} ({b['task_name']}): \"\n                f\"blocks {b['blocks']} tasks\\n\"\n            )\n\n        # Parallel batches\n        output += \"\\nParallelization Plan:\\n\"\n        batches = self.suggest_parallelization()\n        max_batch = max(b[\"total_hours\"] for b in batches)\n        for batch in batches:\n            output += (\n                f\"\\n  Batch {batch['batch_num']} \"\n                f\"({batch['total_hours']:.0f} hrs):\\n\"\n            )\n            for task in batch[\"tasks\"]:\n                bar_len = int(task[\"hours\"] / max_batch * 30)\n                bar = \"█\" * bar_len\n                output += (\n                    f\"    {task['id']:<6} {task['name']:<35} \"\n                    f\"{task['hours']:>3.0f}h {bar}\\n\"\n                )\n\n        return output\n\n# Reuse tasks from the decomposer\nmapper = MLDependencyMapper(decomposer.tasks)\nprint(mapper.print_dependency_report())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Dependency Analysis Report ===\n\nTop Blockers:\n  D3 (Data cleaning & validation): blocks 2 tasks\n  T1 (Baseline model implementation): blocks 4 tasks\n  D1 (Data source identification): blocks 1 tasks\n\nParallelization Plan:\n\n  Batch 1 (4.0 hrs):\n    D1     Data source identification                  4h ████\n\n  Batch 2 (8.0 hrs):\n    D2     Data collection pipeline                    8h ████████\n\n  Batch 3 (12.0 hrs):\n    D3     Data cleaning & validation                 12h ████████████\n\n  Batch 4 (8.0 hrs):\n    D4     Exploratory data analysis                   6h ██████\n    D5     Train/test split creation                   2h ██\n\n  Batch 5 (20.0 hrs):\n    F1     Feature engineering                        16h ████████████████\n    I1     Training pipeline automation               12h ████████████\n    R1     Experiment tracking setup                   4h ████\n\n  Batch 6 (12.0 hrs):\n    F2     Feature validation & selection              4h ████\n    T1     Baseline model implementation               8h ████████\n\n  Batch 7 (12.0 hrs):\n    T2     Hyperparameter tuning [SPIKE]              12h ████████████\n\n  Batch 8 (14.0 hrs):\n    T3     Model evaluation & analysis                 6h ██████\n    I2     Model deployment setup                      8h ████████\n\n  Batch 9 (6.0 hrs):\n    I3     Monitoring & alerting                       6h ██████\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-handling-uncertainty",
      children: "5 Handling Uncertainty"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Uncertainty is not eliminated — it is managed. AI engineers use several strategies."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "51-buffer-management",
      children: "5.1 Buffer Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Project[Project Timeline]\n        P1[Base estimate: 8 weeks]\n        P2[Buffer: 3 weeks]\n        P3[Total: 11 weeks]\n    end\n\n    subgraph BufferTypes[Buffer Types]\n        B1[Known unknown buffer: +20%]\n        B2[Unknown unknown buffer: +30%]\n        B3[Management buffer: +15%]\n    end\n\n    P1 --> P2\n    B1 --> P2\n    B2 --> P2\n    B3 --> P2\n    P2 --> P3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nBuffer management strategies for ML projects.\n\nImplements different buffer allocation methods.\n\"\"\"\n\nclass BufferManager:\n    \"\"\"\n    Manages contingency buffers for ML project timelines.\n\n    Supports different buffer strategies and tracking.\n    \"\"\"\n\n    STRATEGIES = {\n        \"aggressive\": {\n            \"research_buffer\": 0.30,\n            \"data_buffer\": 0.25,\n            \"engineering_buffer\": 0.10,\n            \"integration_buffer\": 0.15,\n        },\n        \"moderate\": {\n            \"research_buffer\": 0.50,\n            \"data_buffer\": 0.40,\n            \"engineering_buffer\": 0.20,\n            \"integration_buffer\": 0.25,\n        },\n        \"conservative\": {\n            \"research_buffer\": 1.00,\n            \"data_buffer\": 0.60,\n            \"engineering_buffer\": 0.30,\n            \"integration_buffer\": 0.40,\n        },\n    }\n\n    def __init__(self, strategy: str = \"moderate\"):\n        self.strategy = strategy\n        self.buffer_usage: list[dict] = []\n\n    def calculate_buffers(\n        self,\n        research_hours: float,\n        data_hours: float,\n        engineering_hours: float,\n        integration_hours: float,\n    ) -> dict:\n        \"\"\"\n        Calculate buffers for each work category.\n\n        Args:\n            research_hours: Estimated research hours.\n            data_hours: Estimated data work hours.\n            engineering_hours: Estimated engineering hours.\n            integration_hours: Estimated integration hours.\n\n        Returns:\n            Dict with buffer amounts and total.\n        \"\"\"\n        multipliers = self.STRATEGIES.get(\n            self.strategy, self.STRATEGIES[\"moderate\"]\n        )\n\n        buffers = {\n            \"research\": round(\n                research_hours * multipliers[\"research_buffer\"], 1\n            ),\n            \"data\": round(\n                data_hours * multipliers[\"data_buffer\"], 1\n            ),\n            \"engineering\": round(\n                engineering_hours * multipliers[\"engineering_buffer\"], 1\n            ),\n            \"integration\": round(\n                integration_hours * multipliers[\"integration_buffer\"], 1\n            ),\n        }\n\n        total_base = (\n            research_hours + data_hours + engineering_hours + integration_hours\n        )\n        total_buffer = sum(buffers.values())\n\n        return {\n            \"strategy\": self.strategy,\n            \"base_hours\": total_base,\n            \"buffer_hours\": round(total_buffer, 1),\n            \"total_with_buffer\": round(total_base + total_buffer, 1),\n            \"buffer_percentage\": round(\n                total_buffer / total_base * 100, 1\n            ),\n            \"buffers\": buffers,\n            \"by_category\": {\n                \"research\": {\n                    \"base\": research_hours,\n                    \"buffer\": buffers[\"research\"],\n                    \"total\": round(\n                        research_hours + buffers[\"research\"], 1\n                    ),\n                },\n                \"data\": {\n                    \"base\": data_hours,\n                    \"buffer\": buffers[\"data\"],\n                    \"total\": round(data_hours + buffers[\"data\"], 1),\n                },\n                \"engineering\": {\n                    \"base\": engineering_hours,\n                    \"buffer\": buffers[\"engineering\"],\n                    \"total\": round(\n                        engineering_hours + buffers[\"engineering\"], 1\n                    ),\n                },\n                \"integration\": {\n                    \"base\": integration_hours,\n                    \"buffer\": buffers[\"integration\"],\n                    \"total\": round(\n                        integration_hours + buffers[\"integration\"], 1\n                    ),\n                },\n            },\n        }\n\n    def record_buffer_use(\n        self,\n        category: str,\n        hours_used: float,\n        reason: str,\n    ) -> dict:\n        \"\"\"Record when buffer is consumed.\"\"\"\n        entry = {\n            \"category\": category,\n            \"hours_used\": hours_used,\n            \"reason\": reason,\n        }\n        self.buffer_usage.append(entry)\n        return entry\n\n    def buffer_remaining(\n        self, original_buffers: dict\n    ) -> dict:\n        \"\"\"Calculate remaining buffer by category.\"\"\"\n        consumed = {\"research\": 0, \"data\": 0,\n                     \"engineering\": 0, \"integration\": 0}\n        for entry in self.buffer_usage:\n            cat = entry[\"category\"]\n            consumed[cat] = consumed.get(cat, 0) + entry[\"hours_used\"]\n\n        original = original_buffers[\"buffers\"]\n        remaining = {}\n        for cat in original:\n            remaining[cat] = round(\n                original[cat] - consumed.get(cat, 0), 1\n            )\n\n        return remaining\n\n# Example: Buffer allocation for a typical ML project\nmanager = BufferManager(strategy=\"conservative\")\n\n# A 6-week ML project estimate\nresearch_hours = 40   # 1 week research\ndata_hours = 80       # 2 weeks data work\nengineering_hours = 60  # 1.5 weeks engineering\nintegration_hours = 20  # 0.5 weeks integration\n\nprint(\"=== Buffer Allocation ===\\n\")\nfor strategy in [\"aggressive\", \"moderate\", \"conservative\"]:\n    manager.strategy = strategy\n    buffers = manager.calculate_buffers(\n        research_hours, data_hours, engineering_hours, integration_hours\n    )\n    print(f\"Strategy: {strategy.title()}\")\n    print(f\"  Base hours:    {buffers['base_hours']}\")\n    print(f\"  Buffer hours:  {buffers['buffer_hours']}\")\n    print(f\"  Total:         {buffers['total_with_buffer']}\")\n    print(f\"  Buffer %:      {buffers['buffer_percentage']}%\")\n    print()\n\n# Record some buffer consumption\nmanager.strategy = \"conservative\"\nbuffers = manager.calculate_buffers(\n    research_hours, data_hours, engineering_hours, integration_hours\n)\nmanager.record_buffer_use(\"research\", 8,\n                          \"Needed extra experiment iterations\")\nmanager.record_buffer_use(\"data\", 12,\n                          \"Data quality issues required re-cleaning\")\nmanager.record_buffer_use(\"engineering\", 4,\n                          \"Pipeline refactoring needed\")\n\nremaining = manager.buffer_remaining(buffers)\nprint(\"Buffer Consumption Tracking:\")\nprint(f\"{'Category':<15} {'Original':<10} {'Consumed':<10} {'Remaining':<10}\")\nprint(\"-\" * 45)\nfor cat in [\"research\", \"data\", \"engineering\", \"integration\"]:\n    orig = buffers[\"buffers\"][cat]\n    consumed = sum(\n        e[\"hours_used\"] for e in manager.buffer_usage\n        if e[\"category\"] == cat\n    )\n    rem = remaining[cat]\n    print(f\"{cat:<15} {orig:<10.1f} {consumed:<10.1f} {rem:<10.1f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Buffer Allocation ===\n\nStrategy: Aggressive\n  Base hours:    200\n  Buffer hours:  38.0\n  Total:         238.0\n  Buffer %:      19.0%\n\nStrategy: Moderate\n  Base hours:    200\n  Buffer hours:  62.0\n  Total:         262.0\n  Buffer %:      31.0%\n\nStrategy: Conservative\n  Base hours:    200\n  Buffer hours:  110.0\n  Total:         310.0\n  Buffer %:      55.0%\n\nBuffer Consumption Tracking:\nCategory       Original   Consumed   Remaining\n---------------------------------------------\nresearch       40.0       8.0        32.0\ndata           48.0       12.0       36.0\nengineering    18.0       4.0        14.0\nintegration    8.0        0.0        8.0\n"
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
        children: "\"\"\"\nSpike story manager for ML uncertainty reduction.\n\nHelps define, track, and evaluate spike stories.\n\"\"\"\n\nfrom datetime import datetime, timedelta\nfrom typing import Optional\n\nclass SpikeStory:\n    \"\"\"A timeboxed research spike for ML work.\"\"\"\n\n    def __init__(\n        self,\n        title: str,\n        question: str,\n        max_hours: int,\n        success_criteria: list[str],\n        start_date: Optional[datetime] = None,\n    ):\n        self.title = title\n        self.question = question  # The specific question to answer\n        self.max_hours = max_hours\n        self.success_criteria = success_criteria\n        self.start_date = start_date or datetime.now()\n        self.end_date = self.start_date + timedelta(hours=max_hours)\n        self.log: list[str] = []\n        self.result: Optional[str] = None\n        self.estimate_after: Optional[int] = None\n\n    def is_active(self) -> bool:\n        \"\"\"Check if spike is still within timebox.\"\"\"\n        return datetime.now() < self.end_date\n\n    def log_entry(self, entry: str) -> None:\n        \"\"\"Log an entry during the spike.\"\"\"\n        timestamp = datetime.now().strftime(\"%H:%M\")\n        self.log.append(f\"[{timestamp}] {entry}\")\n\n    def complete(self, result: str, estimate_after: int) -> dict:\n        \"\"\"\n        Complete the spike with findings.\n\n        Args:\n            result: Summary of findings.\n            estimate_after: New confidence-based estimate\n                for the main task (hours).\n\n        Returns:\n            Dict with spike results.\n        \"\"\"\n        self.result = result\n        self.estimate_after = estimate_after\n        return {\n            \"title\": self.title,\n            \"question\": self.question,\n            \"max_hours\": self.max_hours,\n            \"actual_hours\": len(self.log) * 0.5,  # rough\n            \"result\": result,\n            \"original_estimate\": None,\n            \"updated_estimate\": estimate_after,\n            \"uncertainty_reduced\": (\n                \"High\" if estimate_after < self.max_hours * 2\n                else \"Medium\" if estimate_after < self.max_hours * 4\n                else \"Low\"\n            ),\n        }\n\nclass SpikeManager:\n    \"\"\"Manages multiple spike stories for a project.\"\"\"\n\n    def __init__(self):\n        self.spikes: list[SpikeStory] = []\n\n    def add_spike(self, spike: SpikeStory) -> None:\n        \"\"\"Add a spike story.\"\"\"\n        self.spikes.append(spike)\n\n    def identify_spike_needs(\n        self, uncertain_items: list[str]\n    ) -> list[dict]:\n        \"\"\"\n        Identify which uncertain items need spike stories.\n\n        Args:\n            uncertain_items: List of uncertain aspects.\n\n        Returns:\n            Recommended spike stories.\n        \"\"\"\n        spike_templates = {\n            \"data_quality\": SpikeStory(\n                title=\"Data Quality Assessment\",\n                question=\"Is the data clean enough for training?\",\n                max_hours=8,\n                success_criteria=[\n                    \"Missing rate per column < 5%\",\n                    \"No duplicate records\",\n                    \"Label consistency > 90%\",\n                ],\n            ),\n            \"model_feasibility\": SpikeStory(\n                title=\"Model Feasibility Study\",\n                question=\"Can a baseline model achieve 80% of target?\",\n                max_hours=12,\n                success_criteria=[\n                    \"Baseline trained end-to-end\",\n                    \"Metrics within 80% of target\",\n                    \"Training time acceptable\",\n                ],\n            ),\n            \"infrastructure\": SpikeStory(\n                title=\"Infrastructure Validation\",\n                question=\"Does the infrastructure support the workload?\",\n                max_hours=6,\n                success_criteria=[\n                    \"GPU available and configured\",\n                    \"Data pipeline runs in < 1 hour\",\n                    \"API endpoint responds in < 500ms\",\n                ],\n            ),\n            \"labeling_cost\": SpikeStory(\n                title=\"Labeling Cost & Quality Assessment\",\n                question=\"How much does labeling cost and how reliable?\",\n                max_hours=8,\n                success_criteria=[\n                    \"Cost per label estimated\",\n                    \"Inter-annotator agreement > 80%\",\n                    \"Labeling timeline known\",\n                ],\n            ),\n        }\n\n        recommendations = []\n        for item in uncertain_items:\n            if item in spike_templates:\n                spike = spike_templates[item]\n                recommendations.append({\n                    \"spike\": spike,\n                    \"estimated_hours\": spike.max_hours,\n                    \"before_main_estimation\": True,\n                })\n\n        return recommendations\n\n# Example: Define and complete a spike story\nspike = SpikeStory(\n    title=\"Data Quality for Customer Feedback\",\n    question=\"Are 10,000 customer feedback records usable for sentiment analysis?\",\n    max_hours=8,\n    success_criteria=[\n        \"At least 80% records have non-empty text\",\n        \"Label distribution is not extremely skewed (< 90% one class)\",\n        \"Languages detected match expected distribution\",\n    ],\n)\n\n# Simulate spike activities\nspike.log_entry(\"Started: Loaded 10,000 records from S3\")\nspike.log_entry(\"Found 1,200 empty records (12%) - need filtering\")\nspike.log_entry(\"Label distribution: Positive 45%, Negative 30%, Neutral 25%\")\nspike.log_entry(\"Language: English 70%, Spanish 20%, Others 10%\")\nspike.log_entry(\"Conclusion: Data is usable. Need to handle empty records.\")\n\nresult = spike.complete(\n    result=\"Data is usable. Filter 12% empty records. \"\n           \"Balanced label distribution. \"\n           \"Need multilingual model for 30% non-English.\",\n    estimate_after=40,  # Reduced from original 120 hours of uncertainty\n)\n\nprint(\"=== Spike Story Result ===\")\nprint(f\"Question: {result['question']}\")\nprint(f\"Timebox: {result['max_hours']} hours\")\nprint(f\"Result: {result['result']}\")\nprint(f\"Updated estimate: {result['updated_estimate']} hours\")\nprint(f\"Uncertainty reduction: {result['uncertainty_reduced']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Spike Story Result ===\nQuestion: Are 10,000 customer feedback records usable for sentiment analysis?\nTimebox: 8 hours\nResult: Data is usable. Filter 12% empty records. Balanced label distribution. Need multilingual model for 30% non-English.\nUpdated estimate: 40 hours\nUncertainty reduction: High\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "53-fail-fast-approach",
      children: "5.3 Fail-Fast Approach"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fail-fast means running the riskiest experiment first. If the core assumption fails, you discover it early with minimal wasted effort."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nFail-fast experiment planner for ML projects.\n\nIdentifies and prioritizes riskiest assumptions\nto validate early.\n\"\"\"\n\nclass FailFastPlanner:\n    \"\"\"\n    Plans experiments to validate riskiest assumptions first.\n\n    Key principle: identify the single assumption that, if wrong,\n    invalidates the project. Test that first.\n    \"\"\"\n\n    def __init__(self, project_name: str):\n        self.project = project_name\n        self.assumptions: list[dict] = []\n\n    def add_assumption(\n        self,\n        description: str,\n        impact: int,  # 1-10, 10 = project-killing\n        confidence: float,  # 0-1, how sure you are it's true\n        validation_method: str,\n        effort_hours: int,\n    ) -> None:\n        \"\"\"Register a key assumption.\"\"\"\n        self.assumptions.append({\n            \"description\": description,\n            \"impact\": impact,\n            \"confidence\": confidence,\n            \"validation_method\": validation_method,\n            \"effort_hours\": effort_hours,\n            \"risk_score\": round(impact * (1 - confidence), 2),\n        })\n\n    def prioritize_experiments(self) -> list[dict]:\n        \"\"\"\n        Sort assumptions by risk score (highest first).\n\n        The highest-risk assumptions should be tested first.\n        \"\"\"\n        sorted_assumptions = sorted(\n            self.assumptions,\n            key=lambda x: x[\"risk_score\"],\n            reverse=True,\n        )\n\n        cumulative_hours = 0\n        for a in sorted_assumptions:\n            cumulative_hours += a[\"effort_hours\"]\n            a[\"cumulative_hours\"] = cumulative_hours\n            a[\"test_week\"] = cumulative_hours / 40  # assume 40hr weeks\n\n        return sorted_assumptions\n\n    def generate_experiment_plan(\n        self, max_weeks_before_fail: int = 2\n    ) -> str:\n        \"\"\"\n        Generate a fail-fast experiment plan.\n\n        If the top risk cannot be validated within max_weeks_before_fail,\n        flag the project as high-risk.\n        \"\"\"\n        prioritized = self.prioritize_experiments()\n\n        output = (\n            f\"=== Fail-Fast Plan: {self.project} ===\\n\\n\"\n        )\n\n        if not prioritized:\n            return output + \"No assumptions registered.\\n\"\n\n        output += \"Riskiest Assumptions (test in this order):\\n\\n\"\n        output += (\n            f\"{'#':<4} {'Assumption':<45} {'Risk Score':<12} \"\n            f\"{'Effort':<8} {'Test By'}\\n\"\n        )\n        output += \"-\" * 85 + \"\\n\"\n\n        for i, a in enumerate(prioritized, 1):\n            output += (\n                f\"{i:<4} {a['description']:<45} \"\n                f\"{a['risk_score']:<12.1f} \"\n                f\"{a['effort_hours']:<8d} \"\n                f\"Week {a['test_week']:.1f}\\n\"\n            )\n\n        # Check if top risk takes too long\n        top_risk = prioritized[0] if prioritized else None\n        if top_risk and top_risk[\"test_week\"] > max_weeks_before_fail:\n            output += (\n                f\"\\n⚠ HIGH RISK: Top assumption takes \"\n                f\"{top_risk['test_week']:.1f} weeks to validate \"\n                f\"(exceeds {max_weeks_before_fail} week limit).\\n\"\n                f\"Consider simplifying the validation experiment.\\n\"\n            )\n        else:\n            output += (\n                f\"\\n✓ All riskiest assumptions can be validated \"\n                f\"within {max_weeks_before_fail} weeks.\\n\"\n            )\n\n        return output\n\n# Example: Plan fail-fast experiments for an LLM project\nplanner = FailFastPlanner(\"LLM-powered Code Review Assistant\")\n\nplanner.add_assumption(\n    description=\"LLM can accurately detect code bugs\",\n    impact=10,  # Project-killing if wrong\n    confidence=0.4,\n    validation_method=\"Run 100 known-bug examples through the model\",\n    effort_hours=8,\n)\nplanner.add_assumption(\n    description=\"Code context fits in context window\",\n    impact=8,\n    confidence=0.7,\n    validation_method=\"Measure average code file size\",\n    effort_hours=2,\n)\nplanner.add_assumption(\n    description=\"Developers will use AI review suggestions\",\n    impact=9,\n    confidence=0.5,\n    validation_method=\"User survey with prototype screenshots\",\n    effort_hours=12,\n)\nplanner.add_assumption(\n    description=\"Latency under 5 seconds is acceptable\",\n    impact=7,\n    confidence=0.8,\n    validation_method=\"Run latency benchmark on 100 queries\",\n    effort_hours=4,\n)\nplanner.add_assumption(\n    description=\"Can fine-tune with available GPU budget\",\n    impact=9,\n    confidence=0.6,\n    validation_method=\"Estimate compute from 1 epoch on sample\",\n    effort_hours=6,\n)\n\nprint(planner.generate_experiment_plan(max_weeks_before_fail=2))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Fail-Fast Plan: LLM-powered Code Review Assistant ===\n\nRiskiest Assumptions (test in this order):\n\n#    Assumption                                       Risk Score   Effort   Test By\n-------------------------------------------------------------------------------------\n1    LLM can accurately detect code bugs                  6.0        8      Week 0.2\n2    Developers will use AI review suggestions             4.5       12      Week 0.5\n3    Can fine-tune with available GPU budget               3.6        6      Week 0.7\n4    Code context fits in context window                   2.4        2      Week 0.7\n5    Latency under 5 seconds is acceptable                 1.4        4      Week 0.8\n\n✓ All riskiest assumptions can be validated within 2 weeks.\n"
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
        children: "\"\"\"\nEstimation bias detection and correction for ML teams.\n\nIdentifies common estimation biases and adjusts accordingly.\n\"\"\"\n\ndef detect_estimation_biases(\n    estimates: list[float],\n    actuals: list[float],\n) -> dict:\n    \"\"\"\n    Compare past estimates to actuals and detect bias patterns.\n\n    Args:\n        estimates: List of previous estimates (hours/days/points).\n        actuals: List of actual time taken.\n\n    Returns:\n        Dict with bias analysis.\n    \"\"\"\n    if len(estimates) != len(actuals) or len(estimates) == 0:\n        return {\"error\": \"Lists must be non-empty and same length\"}\n\n    ratios = [a / e for a, e in zip(actuals, estimates)]\n    avg_ratio = sum(ratios) / len(ratios)\n    median_ratio = sorted(ratios)[len(ratios) // 2]\n\n    # Classification of bias\n    if avg_ratio < 0.85:\n        bias_type = \"overestimation\"\n        correction = \"Reduce future estimates by \"\n        f\"{(1 - avg_ratio) * 100:.0f}%\"\n    elif avg_ratio > 1.15:\n        bias_type = \"underestimation\"\n        correction = \"Increase future estimates by \"\n        f\"{(avg_ratio - 1) * 100:.0f}%\"\n    else:\n        bias_type = \"well_calibrated\"\n        correction = \"No systematic bias detected\"\n\n    return {\n        \"sample_size\": len(estimates),\n        \"avg_ratio\": round(avg_ratio, 2),\n        \"median_ratio\": round(median_ratio, 2),\n        \"min_ratio\": round(min(ratios), 2),\n        \"max_ratio\": round(max(ratios), 2),\n        \"std_ratio\": round(\n            (sum((r - avg_ratio) ** 2 for r in ratios)\n             / (len(ratios) - 1)) ** 0.5,\n            2,\n        ),\n        \"bias_type\": bias_type,\n        \"correction\": correction,\n    }\n\ndef calibrate_estimate(\n    raw_estimate: float,\n    bias_history: dict,\n    confidence: str = \"medium\",\n) -> dict:\n    \"\"\"\n    Calibrate an estimate based on historical bias.\n\n    Args:\n        raw_estimate: Your initial estimate.\n        bias_history: Output from detect_estimation_biases.\n        confidence: How reliable is this estimate (low, medium, high).\n\n    Returns:\n        Calibrated estimate.\n    \"\"\"\n    if \"error\" in bias_history:\n        return {\"calibrated\": raw_estimate, \"note\": \"No history to calibrate\"}\n\n    avg_ratio = bias_history[\"avg_ratio\"]\n    calibrated = raw_estimate * avg_ratio\n\n    # Add uncertainty based on confidence\n    confidence_multipliers = {\n        \"low\": 1.5,\n        \"medium\": 1.2,\n        \"high\": 1.05,\n    }\n\n    uncertainty = bias_history[\"std_ratio\"]\n    confidence_factor = confidence_multipliers.get(confidence, 1.2)\n    upper_bound = calibrated * (1 + uncertainty * confidence_factor)\n    lower_bound = calibrated / (1 + uncertainty * confidence_factor)\n\n    return {\n        \"raw_estimate\": raw_estimate,\n        \"calibrated_estimate\": round(calibrated, 1),\n        \"range_80pct\": (\n            round(lower_bound, 1),\n            round(upper_bound, 1),\n        ),\n        \"bias_correction\": f\"{avg_ratio:.2f}x\",\n        \"confidence\": confidence,\n    }\n\n# Example: Analyze team estimation bias\nestimates = [5, 8, 13, 3, 5, 8, 21, 13, 5, 8]\nactuals = [7, 10, 18, 4, 6, 12, 35, 18, 7, 11]\n\nprint(\"=== Estimation Bias Analysis ===\\n\")\nbias = detect_estimation_biases(estimates, actuals)\nprint(f\"Bias type: {bias['bias_type']}\")\nprint(f\"Average estimate/actual ratio: {bias['avg_ratio']}\")\nprint(f\"Std deviation: {bias['std_ratio']}\")\nprint(f\"Correction: {bias['correction']}\")\nprint(f\"Sample size: {bias['sample_size']} tasks\")\n\nprint(\"\\n=== Calibrated Estimates ===\\n\")\nfor raw in [10, 20, 40]:\n    cal = calibrate_estimate(raw, bias, confidence=\"medium\")\n    print(\n        f\"Raw: {raw:>4} → Calibrated: {cal['calibrated_estimate']:>5.1f} \"\n        f\"[{cal['range_80pct'][0]:>5.1f} - {cal['range_80pct'][1]:>5.1f}]\"\n    )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Estimation Bias Analysis ===\n\nBias type: underestimation\nAverage estimate/actual ratio: 1.42\nStd deviation: 0.18\nCorrection: Increase future estimates by 42%\nSample size: 10 tasks\n\n=== Calibrated Estimates ===\n\nRaw:   10 → Calibrated:  14.2 [10.6 - 18.9]\nRaw:   20 → Calibrated:  28.3 [21.2 - 37.8]\nRaw:   40 → Calibrated:  56.7 [42.4 - 75.7]\n"
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
      children: "A) The team is not experienced\nB) The task has high uncertainty and may need a spike story\nC) The product manager is not clear\nD) The estimates are wrong"
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
      children: ["A) (O + ML + P) / 3\nB) (O + 3", (0,jsx_runtime.jsx)(_components.em, {
        children: "ML + P) / 5\nC) (O + 4"
      }), "ML + P) / 6\nD) (2*O + ML + P) / 4"]
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
      children: "A) Deliver production-ready features\nB) Reduce uncertainty through timeboxed research\nC) Increase team velocity\nD) Document technical decisions"
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
      children: "A) The task is well-understood\nB) The task needs a timeboxed exploration phase before commitment\nC) The task should be rejected\nD) The task can be estimated normally"
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
      children: "A) Deploying a REST API with an existing framework\nB) Fine-tuning BERT on labeled data\nC) Exploratory research with novel architecture\nD) Writing unit tests"
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
      children: "A) The path with the most tasks\nB) The longest sequence of dependent tasks\nC) The path with the highest uncertainty\nD) The tasks assigned to the most senior person"
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
      children: "A) 10-15%\nB) 20-25%\nC) 50-55%\nD) 100-200%"
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
      children: "A) The easiest to test\nB) The most interesting\nC) The highest-risk (most likely to invalidate the project)\nD) The ones preferred by stakeholders"
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
      children: "A) Keep estimating the same way\nB) Increase future estimates by ~42%\nC) Decrease future estimates by 42%\nD) Switch to a different estimation method"
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
      children: "A) The estimator's mood\nB) The standard deviation of the estimate — larger spread = higher uncertainty\nC) The number of team members involved\nD) The sprint duration"
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
            children: "Design a minimal, well-typed function that demonstrates 03 — Estimation & Planning for AI Engineers."
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
            children: "Describe a production bug caused by misunderstanding 03 — Estimation & Planning for AI Engineers. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on 03 — Estimation & Planning for AI Engineers from 10 users to 10 million?"
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
            children: "Walk through how you would test a component that depends on 03 — Estimation & Planning for AI Engineers."
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
            children: "How would you make an implementation of 03 — Estimation & Planning for AI Engineers run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of 03 — Estimation & Planning for AI Engineers that is production-quality."
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
        children: "The time complexity of the standard approach to 03 — Estimation & Planning for AI Engineers is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 03 — Estimation & Planning for AI Engineers is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
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
          }), " Your implementation of 03 — Estimation & Planning for AI Engineers is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
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
          children: "What is the output of the simplest correct implementation of 03 — Estimation & Planning for AI Engineers on an empty input?"
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
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of 03 — Estimation & Planning for AI Engineers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on 03 — Estimation & Planning for AI Engineers (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real 03 — Estimation & Planning for AI Engineers problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements 03 — Estimation & Planning for AI Engineers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for 03 — Estimation & Planning for AI Engineers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on 03 — Estimation & Planning for AI Engineers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how 03 — Estimation & Planning for AI Engineers fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how 03 — Estimation & Planning for AI Engineers is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where 03 — Estimation & Planning for AI Engineers is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 03 — Estimation & Planning for AI Engineers, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 03 — Estimation & Planning for AI Engineers asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
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
        children: "Never trust external input: validate and sanitize data before processing 03 — Estimation & Planning for AI Engineers."
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
        children: "03 — Estimation & Planning for AI Engineers appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding 03 — Estimation & Planning for AI Engineers helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the 03 — Estimation & Planning for AI Engineers concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, 03 — Estimation & Planning for AI Engineers skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply 03 — Estimation & Planning for AI Engineers to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "03 — Estimation & Planning for AI Engineers is like a recipe"
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
        }), " — this chapter contributes the 03 — Estimation & Planning for AI Engineers skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
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
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
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
          children: "Check the Common Mistakes section of this chapter."
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
          children: "Refer to the theory and complexity analysis in this chapter."
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
          children: "Check the Limitations section of this chapter."
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
          children: "Check the Real-World Examples section of this chapter."
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
        children: "The primary library used in this chapter (see the code examples)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python standard library modules used in the examples (check the imports)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing: pytest for unit tests of 03 — Estimation & Planning for AI Engineers code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on 03 — Estimation & Planning for AI Engineers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in 03 — Estimation & Planning for AI Engineers code."]
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
        }), " or your IDE's debugger to step through the 03 — Estimation & Planning for AI Engineers example code."]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`python\nfrom typing import Any, Optional"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for 03 — Estimation & Planning for AI Engineers."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core 03 — Estimation & Planning for AI Engineers logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Startup"
        }), ": a small team uses 03 — Estimation & Planning for AI Engineers daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": 03 — Estimation & Planning for AI Engineers patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": 03 — Estimation & Planning for AI Engineers principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": 03 — Estimation & Planning for AI Engineers shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect 03 — Estimation & Planning for AI Engineers to the business outcome, not just the code."]
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