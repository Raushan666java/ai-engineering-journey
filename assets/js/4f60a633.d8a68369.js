"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[88288],{

/***/ 57456
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_learning_how_to_learn_practical_ch_11_tracking_course_correction_md_4f6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-learning-how-to-learn-practical-ch-11-tracking-course-correction-md-4f6.json
const site_docs_courses_learning_how_to_learn_practical_ch_11_tracking_course_correction_md_4f6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/learning-how-to-learn-practical/ch-11-tracking-course-correction","title":"Chapter 11: Tracking & Course Correction","description":"⏱ 2 hours total · 🎯 Beginner · 📋 Recommended: Ch 1 (Learning OS)","source":"@site/docs/courses/learning-how-to-learn-practical/ch-11-tracking-course-correction.md","sourceDirName":"courses/learning-how-to-learn-practical","slug":"/learning-how-to-learn-practical/ch-11-tracking-course-correction","permalink":"/ai-engineering-journey/learning-how-to-learn-practical/ch-11-tracking-course-correction","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"id":"ch-11-tracking-course-correction","slug":"/learning-how-to-learn-practical/ch-11-tracking-course-correction","title":"Chapter 11: Tracking & Course Correction","sidebar_label":"Chapter 11: Tracking & Course Correction","sidebar_position":12},"sidebar":"coursesSidebar","previous":{"title":"Chapter 10: Interview Preparation Workflow","permalink":"/ai-engineering-journey/learning-how-to-learn-practical/ch-10-interview-prep-workflow"},"next":{"title":"Chapter 12: Building in Public & Teaching","permalink":"/ai-engineering-journey/learning-how-to-learn-practical/ch-12-building-in-public-teaching"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/learning-how-to-learn-practical/ch-11-tracking-course-correction.md


const frontMatter = {
	id: 'ch-11-tracking-course-correction',
	slug: '/learning-how-to-learn-practical/ch-11-tracking-course-correction',
	title: 'Chapter 11: Tracking & Course Correction',
	sidebar_label: 'Chapter 11: Tracking & Course Correction',
	sidebar_position: 12
};
const contentTitle = 'Chapter 11: Tracking & Course Correction';

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
  "value": "Leading vs Lagging Indicators",
  "id": "leading-vs-lagging-indicators",
  "level": 3
}, {
  "value": "The Learning Dashboard",
  "id": "the-learning-dashboard",
  "level": 3
}, {
  "value": "Plateau Detection and Breakthrough",
  "id": "plateau-detection-and-breakthrough",
  "level": 3
}, {
  "value": "The Weekly Review Protocol",
  "id": "the-weekly-review-protocol",
  "level": 3
}, {
  "value": "When to Pivot",
  "id": "when-to-pivot",
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
  "value": "Example 1: Learning Dashboard",
  "id": "example-1-learning-dashboard",
  "level": 3
}, {
  "value": "Example 2: Weekly Review Generator",
  "id": "example-2-weekly-review-generator",
  "level": 3
}, {
  "value": "Example 4: Metric Predictor",
  "id": "example-4-metric-predictor",
  "level": 3
}, {
  "value": "Example 5: Consistency Heatmap Generator",
  "id": "example-5-consistency-heatmap-generator",
  "level": 3
}, {
  "value": "Example 3: Course Correction Advisor",
  "id": "example-3-course-correction-advisor",
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
  "value": "Daily Log Template (3 Columns)",
  "id": "daily-log-template-3-columns",
  "level": 3
}, {
  "value": "Leading vs Lagging Metrics",
  "id": "leading-vs-lagging-metrics",
  "level": 3
}, {
  "value": "Weekly Review (Every Sunday — 15 min)",
  "id": "weekly-review-every-sunday--15-min",
  "level": 3
}, {
  "value": "Plateau Detection Rule",
  "id": "plateau-detection-rule",
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
        id: "chapter-11-tracking--course-correction",
        children: "Chapter 11: Tracking & Course Correction"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["⏱ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2 hours total"
        }), " · 🎯 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Beginner"
        }), " · 📋 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Recommended: Ch 1 (Learning OS)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After this chapter you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define leading and lagging metrics that actually measure learning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a personal learning dashboard using simple tools (paper journal or spreadsheet)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detect plateaus early and break through with targeted intervention"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run an effective weekly review that drives continuous improvement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make data-driven decisions about what to study next"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-start-10-min",
      children: "Quick Start (10 min)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read the Leading vs Lagging Indicators in Theory (3 min)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Open a notebook and create the 3-column daily log from Examples (3 min)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write today's entry using real data (2 min)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify ONE leading metric you will track daily (2 min)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Save for later:"
        }), " Weekly review template, plateau detection, Common Mistakes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "leading-vs-lagging-indicators",
      children: "Leading vs Lagging Indicators"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Most people track the wrong metrics. They measure time spent (lagging) instead of output produced (leading)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Daily Log] --> B[Weekly Review]\n    B --> C{Metrics Green?}\n    C -->|Yes| D[Maintain Course]\n    C -->|Yellow| E[Increase Intensity]\n    C -->|Red| F[Change Approach]\n    F --> G[Implement New Strategy]\n    G --> A\n    D --> A\n    E --> A\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Leading (Actions You Control)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lagging (Outcomes You Want)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hours of deep work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mock interview score"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Problems attempted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Problems solved under 30 min"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anki reviews completed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retention rate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pages of notes written"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concepts you can explain without notes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lines of code written"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deployed projects"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Leading indicators tell you if you're doing the work. Lagging indicators tell you if the work is working. Track both."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The North Star Metric:"
      }), " Pick ONE metric that correlates most strongly with your goal. For interview prep: \"mock interview score improvement.\" For learning a framework: \"hours from first code to working CRUD app.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Daily Log: Date, Hours, Focus, Problems] --> B[Weekly Summary]\n    B --> C{Leading Metrics Green?}\n    C -->|Yes| D[Maintain Course]\n    C -->|No| E[Identify Root Cause]\n    E --> F[Adjust Next Week Plan]\n    F --> A\n    B --> G[Monthly: Compare to Baseline]\n    G --> H[Update Goals or Timeline]\n    H --> A\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-learning-dashboard",
      children: "The Learning Dashboard"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You don't need fancy tools. A simple spreadsheet updated daily is more effective than a complex app you don't maintain."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Minimum viable dashboard:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Daily log: date, topic, hours, problems solved, focus rating"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Weekly summary: total hours, trend lines, weak areas"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monthly review: milestone progress, retention rate, mock scores"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How to Track"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action if Red"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deep work hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timer at start of session"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block calendar, remove phone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Problems solved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Count after session"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Change difficulty or pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anki retention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anki stats"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Review card design"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mock score"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After each mock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify weak area, shift focus"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "plateau-detection-and-breakthrough",
      children: "Plateau Detection and Breakthrough"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A plateau is when your metrics stay flat for 2+ weeks despite consistent effort."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Signs of a plateau:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same mock score 3 weeks in a row"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solving problems at the same difficulty without progression"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Retention rate dropping (you're forgetting faster than you're learning)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Motivation declining (studying feels like a chore)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Breakthrough strategies (in order):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Change the input:"
        }), " If you've been studying from one book/course, switch to a different one. A new perspective reveals what you missed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Change the method:"
        }), " If you've been reading, start building. If you've been solving easy problems, try a hard one. If you've been working alone, join a study group"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Change the pace:"
        }), " Sometimes the fastest way forward is to slow down. Spend a week reviewing fundamentals. Fill the gaps you skipped"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Take a break:"
        }), " 1-3 days of zero study. Your brain consolidates learning during rest. Many people return from a break with new insights"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-weekly-review-protocol",
      children: "The Weekly Review Protocol"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Schedule 30 minutes every Sunday. No exceptions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agenda:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wins (5 min):"
        }), " 3 things that went well this week. This builds momentum"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Challenges (5 min):"
        }), " 3 things that didn't go well. Be specific — not \"I was lazy\" but \"I didn't schedule my study time\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metrics (10 min):"
        }), " Review your dashboard. Compare to targets. Mark green/yellow/red"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Insights (5 min):"
        }), " What did you learn this week about how you learn best?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next week (5 min):"
        }), " Top 3 priorities. Schedule them in your calendar now"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After the review, update your dashboard and adjust next week's plan."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-pivot",
      children: "When to Pivot"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You should consider a major change when:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You keep making the same mistakes on mocks (same weak area for 3+ weeks)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You're consistently bored during study sessions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Your metrics have been flat for 3+ weeks despite adjusting your approach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You found a more efficient path (book, course, mentor)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Your goal has changed (new target company, different role)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to pivot gracefully:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document what you learned (so you don't have to re-learn it)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Save useful work (notes, code, summaries)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Take a 1-day break before starting the new approach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start fresh with clear metrics for the new approach"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-plain-language-walkthrough",
      children: "📝 Plain-Language Walkthrough"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method 1: Paper Journal Dashboard (No Tools Needed)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a daily log with these columns:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Date    | Subject     | Time | Focus(1-5) | Topics Covered | Problems Solved | Key Takeaways\n--------|-------------|------|------------|----------------|-----------------|--------------\nApr 1   | Quant       | 1.5h | 4          | Percentage      | 15 correct/20   | Still slow on profit %\nApr 1   | Reasoning   | 1h   | 3          | Syllogisms      | 10 correct/12   | Venn diagram method works\nApr 2   | GA          | 45m  | 5          | History: Mughals | -               | Need more on Akbar\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Weekly Review Template (15 min every Sunday)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Total study hours this week: ___"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Topics where you improved: ___"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Topics where you plateaued: ___"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One thing to change next week: ___"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Next week's priority topic: ___"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Leading vs Lagging Metrics"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How to Track"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Leading (predicts success)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Problems solved, focus score, hours of deep work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Daily log"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lagging (proves success)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mock test score, accuracy %, topics mastered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weekly test"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Plateau Detection Rule"
      }), "\nIf your accuracy on a topic stays flat for 2 weeks despite consistent practice → CHANGE your approach (don't just try harder with the same method)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-typescript-implementation-optional",
      children: "💻 TypeScript Implementation (Optional)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-learning-dashboard",
      children: "Example 1: Learning Dashboard"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface MetricEntry {\n    date: string\n    deepWorkHours: number\n    problemsSolved: number\n    problemsAttempted: number\n    ankiReviewsCompleted: number\n    focusRating: 1 | 2 | 3 | 4 | 5\n    notes: string\n}\n\nclass LearningDashboard {\n    private entries: MetricEntry[] = []\n    private readonly TARGET_HOURS = 20  // weekly\n\n    log(entry: MetricEntry): void {\n        this.entries.push(entry)\n    }\n\n    getWeeklySummary(): WeeklyMetricSummary {\n        const week = this.entries.slice(-7)\n\n        const deepWorkTotal = week.reduce((s, e) => s + e.deepWorkHours, 0)\n        const problemsSolved = week.reduce((s, e) => s + e.problemsSolved, 0)\n        const problemsAttempted = week.reduce((s, e) => s + e.problemsAttempted, 0)\n        const avgFocus = week.reduce((s, e) => s + e.focusRating, 0) / week.length\n\n        return {\n            weekEnding: new Date().toISOString().slice(0, 10),\n            totalHours: deepWorkTotal,\n            targetHours: this.TARGET_HOURS,\n            hoursStatus: deepWorkTotal >= this.TARGET_HOURS ? 'green' : 'red',\n            problemsSolved,\n            problemsAttempted,\n            solveRate: problemsAttempted > 0 ? problemsSolved / problemsAttempted : 0,\n            avgFocus\n        }\n    }\n\n    getMonthlyTrend(): TrendReport[] {\n        // Group entries by week and show weekly averages\n        const weeks = this.groupByWeek()\n        return weeks.map((week, i) => ({\n            week: i + 1,\n            avgDailyHours: week.reduce((s, e) => s + e.deepWorkHours, 0) / week.length,\n            avgDailyProblems: week.reduce((s, e) => s + e.problemsSolved, 0) / week.length,\n            avgFocus: week.reduce((s, e) => s + e.focusRating, 0) / week.length,\n        }))\n    }\n\n    detectPlateaus(): PlateauAlert[] {\n        const trend = this.getMonthlyTrend().slice(-4) // last 4 weeks\n        if (trend.length < 3) return []\n\n        const alerts: PlateauAlert[] = []\n\n        // Check for flat hours\n        const hoursVariance = Math.max(...trend.map(t => t.avgDailyHours)) -\n            Math.min(...trend.map(t => t.avgDailyHours))\n        if (hoursVariance < 0.5 && trend[trend.length - 1].avgDailyHours < 3) {\n            alerts.push({\n                type: 'effort',\n                message: 'Deep work hours are flat. Increase by 30 min/day.',\n                severity: 'yellow'\n            })\n        }\n\n        // Check for flat problem-solving rate\n        const rateVariance = Math.max(...trend.map(t => t.avgDailyProblems)) -\n            Math.min(...trend.map(t => t.avgDailyProblems))\n        if (rateVariance < 2 && trend[trend.length - 1].avgDailyProblems < 5) {\n            alerts.push({\n                type: 'output',\n                message: 'Problems solved per day is stagnant. Try harder difficulty or new patterns.',\n                severity: 'red'\n            })\n        }\n\n        return alerts\n    }\n\n    private groupByWeek(): MetricEntry[][] {\n        const weeks: MetricEntry[][] = []\n        for (let i = 0; i < this.entries.length; i += 7) {\n            weeks.push(this.entries.slice(i, i + 7))\n        }\n        return weeks\n    }\n}\n\ninterface WeeklyMetricSummary {\n    weekEnding: string\n    totalHours: number\n    targetHours: number\n    hoursStatus: 'green' | 'red'\n    problemsSolved: number\n    problemsAttempted: number\n    solveRate: number\n    avgFocus: number\n}\n\ninterface TrendReport {\n    week: number\n    avgDailyHours: number\n    avgDailyProblems: number\n    avgFocus: number\n}\n\ninterface PlateauAlert {\n    type: 'effort' | 'output' | 'retention' | 'motivation'\n    message: string\n    severity: 'green' | 'yellow' | 'red'\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-weekly-review-generator",
      children: "Example 2: Weekly Review Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface WeeklyReview {\n    weekNumber: number\n    wins: string[]\n    challenges: string[]\n    metrics: WeeklyMetricSummary\n    insights: string[]\n    nextWeekPriorities: string[]\n    actionItems: string[]\n}\n\nclass WeeklyReviewGenerator {\n    generate(\n        weekNumber: number,\n        dashboard: LearningDashboard\n    ): WeeklyReview {\n        const metrics = dashboard.getWeeklySummary()\n        const plateaus = dashboard.detectPlateaus()\n\n        const insights: string[] = []\n        const actionItems: string[] = []\n\n        if (metrics.hoursStatus === 'red') {\n            insights.push('Deep work hours below target. Consider blocking calendar earlier.')\n            actionItems.push('Add 30 min deep work block to morning schedule')\n        }\n\n        if (metrics.solveRate < 0.5) {\n            insights.push('Problem solve rate is low. Are the problems too hard or is focus low?')\n            actionItems.push('Drop one difficulty level. Master Easy before Medium.')\n        }\n\n        if (metrics.avgFocus < 3) {\n            insights.push('Focus rating is low. Check sleep, environment, and phone habits.')\n            actionItems.push('Phone in another room during study blocks')\n        }\n\n        plateaus.forEach(p => {\n            if (p.severity === 'red') {\n                actionItems.push(`URGENT: ${p.message}`)\n            }\n        })\n\n        return {\n            weekNumber,\n            wins: [],  // Fill in during review\n            challenges: [],\n            metrics,\n            insights,\n            nextWeekPriorities: [],\n            actionItems\n        }\n    }\n\n    printReview(review: WeeklyReview): string {\n        const statusEmoji = review.metrics.hoursStatus === 'green' ? '✅' : '❌'\n        return [\n            `=== Week ${review.weekNumber} Review ===`,\n            '',\n            'Metrics:',\n            `  Hours: ${review.metrics.totalHours.toFixed(1)}/${review.metrics.targetHours} ${statusEmoji}`,\n            `  Problems: ${review.metrics.problemsSolved}/${review.metrics.problemsAttempted} (${(review.metrics.solveRate * 100).toFixed(0)}%)`,\n            `  Avg Focus: ${review.metrics.avgFocus.toFixed(1)}/5`,\n            '',\n            'Action Items:',\n            ...review.actionItems.map(a => `  ☐ ${a}`),\n            '',\n            '=== End Review ==='\n        ].join('\\n')\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-metric-predictor",
      children: "Example 4: Metric Predictor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface PredictionInput {\n    currentAverage: number\n    targetAverage: number\n    remainingDays: number\n    consistencyRate: number  // 0-1\n}\n\ninterface PredictionOutput {\n    projectedScore: number\n    daysNeeded: number\n    onTrack: boolean\n    recommendedPace: number\n}\n\nclass MetricPredictor {\n    predict(input: PredictionInput): PredictionOutput {\n        const dailyGain = (input.targetAverage - input.currentAverage) / input.remainingDays\n        const adjustedGain = dailyGain * input.consistencyRate\n        const projectedScore = Math.min(100, input.currentAverage + adjustedGain * input.remainingDays)\n        const daysNeeded = Math.ceil((input.targetAverage - input.currentAverage) / Math.max(adjustedGain, 0.01))\n        const recommendedPace = (input.targetAverage - input.currentAverage) / Math.max(input.remainingDays, 1)\n\n        return {\n            projectedScore: Math.round(projectedScore),\n            daysNeeded,\n            onTrack: projectedScore >= input.targetAverage,\n            recommendedPace: Math.round(recommendedPace * 10) / 10\n        }\n    }\n\n    whatIf(currentAverage: number, consistencyScenarios: { label: string; rate: number }[]): string[] {\n        return consistencyScenarios.map(s => {\n            const result = this.predict({\n                currentAverage,\n                targetAverage: 90,\n                remainingDays: 30,\n                consistencyRate: s.rate\n            })\n            return `${s.label} (${s.rate * 100}% consistency): ${result.projectedScore}% projected`\n        })\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-5-consistency-heatmap-generator",
      children: "Example 5: Consistency Heatmap Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface DayEntry {\n    date: string\n    value: number  // 0-100\n}\n\nclass ConsistencyHeatmap {\n    private data: DayEntry[] = []\n\n    log(date: string, value: number): void {\n        this.data.push({ date, value })\n    }\n\n    getMonthlyGrid(year: number, month: number): DayEntry[][] {\n        const daysInMonth = new Date(year, month, 0).getDate()\n        const grid: DayEntry[][] = []\n        let week: DayEntry[] = []\n\n        for (let day = 1; day <= daysInMonth; day++) {\n            const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`\n            const entry = this.data.find(d => d.date === dateStr)\n            week.push(entry ?? { date: dateStr, value: 0 })\n\n            if (new Date(year, month - 1, day).getDay() === 6 || day === daysInMonth) {\n                grid.push(week)\n                week = []\n            }\n        }\n\n        return grid\n    }\n\n    getStreak(minValue: number): number {\n        const sorted = [...this.data].sort((a, b) => b.date.localeCompare(a.date))\n        let streak = 0\n        for (const entry of sorted) {\n            if (entry.value >= minValue) streak++\n            else break\n        }\n        return streak\n    }\n\n    getConsistencyScore(targetDays: number): number {\n        const recent = this.data.slice(-targetDays)\n        if (recent.length === 0) return 0\n        const met = recent.filter(d => d.value >= 50).length\n        return Math.round((met / targetDays) * 100)\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-course-correction-advisor",
      children: "Example 3: Course Correction Advisor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface LearnerProfile {\n    mockScores: number[]  // last 5 scores\n    weeklyProblemCount: number[]\n    retentionRate: number\n    currentPhase: string\n    targetDate: Date\n}\n\ninterface CorrectionAdvice {\n    action: string\n    reason: string\n    priority: 'immediate' | 'this-week' | 'this-month'\n}\n\nclass CourseCorrectionAdvisor {\n    analyze(profile: LearnerProfile): CorrectionAdvice[] {\n        const advice: CorrectionAdvice[] = []\n\n        // Check mock score trend\n        if (profile.mockScores.length >= 3) {\n            const recent = profile.mockScores.slice(-3)\n            const trend = recent[2] - recent[0]\n\n            if (trend < 0) {\n                advice.push({\n                    action: 'Pause new content. Review fundamentals for 1 week.',\n                    reason: 'Mock scores declining. Adding more content is making things worse.',\n                    priority: 'immediate'\n                })\n            } else if (trend < 0.5) {\n                advice.push({\n                    action: 'Change your study method. If reading, switch to building. If solo, join a group.',\n                    reason: `Scores flat at ${recent[2].toFixed(1)} for 3+ mocks. Input change needed.`,\n                    priority: 'this-week'\n                })\n            }\n        }\n\n        // Check problem-solving volume\n        const avgProblems = profile.weeklyProblemCount.slice(-2)\n            .reduce((s, c) => s + c, 0) / 2\n        if (avgProblems < 10) {\n            advice.push({\n                action: 'Increase weekly problem count to 15 minimum. Volume builds pattern recognition.',\n                reason: `Averaging ${avgProblems.toFixed(0)} problems/week.`,\n                priority: 'this-week'\n            })\n        }\n\n        // Check retention\n        if (profile.retentionRate < 0.7) {\n            advice.push({\n                action: 'Reduce new cards. Focus on reviewing existing cards until retention > 80%.',\n                reason: `Retention at ${(profile.retentionRate * 100).toFixed(0)}%. New content adding without consolidating.`,\n                priority: 'immediate'\n            })\n        }\n\n        // Check timeline\n        const daysUntilTarget = Math.ceil(\n            (profile.targetDate.getTime() - Date.now()) / 86400000\n        )\n        if (daysUntilTarget < 30) {\n            advice.push({\n                action: 'Enter peak preparation mode. Max 2 hours new content, rest mock + review.',\n                reason: `${daysUntilTarget} days until target date. Time to shift from learning to performing.`,\n                priority: 'immediate'\n            })\n        }\n\n        return advice\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track leading indicators (actions you control) and lagging indicators (outcomes you want)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A simple daily log + weekly review is more effective than a complex dashboard you don't maintain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detect plateaus early: flat metrics for 2+ weeks = time to change something"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run a 30-minute weekly review every Sunday with wins, challenges, metrics, insights, and next priorities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pivot when: same mistakes persist, boredom sets in, metrics stay flat, or you find a better path"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track 3 metrics daily: deep work hours, problems solved, focus rating — that's enough to start"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run a 30-minute weekly review every Sunday. Block the time in your calendar"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If metrics are flat for 2 weeks, change ONE thing (input, method, or pace)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The North Star Metric for interview prep: \"Can I solve this problem under time pressure?\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pivot gracefully: document what you learned, save your work, take a 1-day break, start fresh"
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
            children: "Tracking time instead of output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"I studied 5 hours\" means nothing if you retained nothing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Track problems solved, topics completed, accuracy %"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ignoring leading indicators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lagging (mock scores) only tells you after it's too late"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Track daily: focus score, deep work hours, error rate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No weekly review"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data without action is just data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every Sunday: 4 questions (see Quick Reference)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Making tracking too complex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "You quit after 3 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A notebook with 3 columns (Date, Topic, Takeaways) is enough"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "1. What's the difference between a leading and lagging indicator?"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Leading indicators are actions you control (hours of deep work, problems attempted). Lagging indicators are outcomes you want (mock scores, retention rate). Leading tells you if you're doing the work; lagging tells you if the work is working."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "2. How many weeks of flat scores indicate a plateau?"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "2+ weeks of flat metrics despite consistent effort. If your mock scores haven't improved in 3 attempts or your problem solve rate is stagnant for 2 weeks, you've hit a plateau. Time to change your approach."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "3. What's the recommended weekly review duration?"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "30 minutes every Sunday. Structure: 5 min wins, 5 min challenges, 10 min metrics, 5 min insights, 5 min next week priorities. Block it in your calendar as non-negotiable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "4. What's the first thing to check when you're off track?"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Your leading indicators. Are you actually doing the work? Check deep work hours and problems attempted first. If leading indicators are green but lagging is red, your method is wrong. If leading indicators are red, your effort is wrong."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "5. When should you consider pivoting to a new approach?"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Same mistakes on 3+ mocks, boredom/dread about study sessions, 3+ weeks of flat metrics despite adjustments, finding a clearly better path, or your goal changes. Pivot gracefully: document learnings, save work, take 1 day off, start fresh."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Set up a paper journal dashboard:"
        }), " Choose 3 daily metrics (recommended: deep work hours, problems solved, focus rating). Create a simple table in a notebook or spreadsheet. Track for 14 consecutive days"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Run a weekly review:"
        }), " Schedule 15 minutes next Sunday. Use the weekly review template from the walkthrough. Fill in your totals, improvements, plateau areas, and next week's priority"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Plateau detection & intervention:"
        }), " Look at your last 2-4 weeks of data. If a topic's accuracy stayed flat for 2 weeks, pick ONE breakthrough strategy (change input, method, pace, or take a break) and apply it this week"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript bonus — Course correction:"
        }), " Use the CourseCorrectionAdvisor with your actual data. Implement the top priority advice this week"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript bonus — Build your dashboard:"
        }), " Implement the LearningDashboard class or create a spreadsheet. Use it daily for 2 weeks. At week 2, review: what did tracking reveal that you wouldn't have noticed otherwise?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "daily-log-template-3-columns",
      children: "Daily Log Template (3 Columns)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Date"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Subject / Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Takeaways"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "leading-vs-lagging-metrics",
      children: "Leading vs Lagging Metrics"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Leading (Track Daily)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lagging (Check Weekly)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deep work hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mock test score"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Problems solved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy %"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Focus rating (1-5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Topics mastered"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error categories"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time per problem"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "weekly-review-every-sunday--15-min",
      children: "Weekly Review (Every Sunday — 15 min)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What did I study this week?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Which metrics improved? Which didn't?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What's my ONE plateau that needs a different approach?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What's my priority for next week?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "plateau-detection-rule",
      children: "Plateau Detection Rule"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If a metric stays flat for 2 weeks → change your method, not your effort."
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